!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).TRTC = t());
})(this, function () {
  var e =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
  function t(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var n = function (e) {
      return e && e.Math == Math && e;
    },
    r =
      n("object" == typeof globalThis && globalThis) ||
      n("object" == typeof window && window) ||
      n("object" == typeof self && self) ||
      n("object" == typeof e && e) ||
      (function () {
        return this;
      })() ||
      Function("return this")(),
    i = function (e) {
      try {
        return !!e();
      } catch (t) {
        return !0;
      }
    },
    o = !i(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    }),
    a = {}.propertyIsEnumerable,
    s = Object.getOwnPropertyDescriptor,
    c = {
      f:
        s && !a.call({ 1: 2 }, 1)
          ? function (e) {
              var t = s(this, e);
              return !!t && t.enumerable;
            }
          : a,
    },
    u = function (e, t) {
      return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
    },
    d = {}.toString,
    l = function (e) {
      return d.call(e).slice(8, -1);
    },
    p = "".split,
    h = i(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" == l(e) ? p.call(e, "") : Object(e);
        }
      : Object,
    f = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e);
      return e;
    },
    m = function (e) {
      return h(f(e));
    },
    v = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    },
    g = function (e, t) {
      if (!v(e)) return e;
      var n, r;
      if (t && "function" == typeof (n = e.toString) && !v((r = n.call(e)))) return r;
      if ("function" == typeof (n = e.valueOf) && !v((r = n.call(e)))) return r;
      if (!t && "function" == typeof (n = e.toString) && !v((r = n.call(e)))) return r;
      throw TypeError("Can't convert object to primitive value");
    },
    _ = {}.hasOwnProperty,
    y = function (e, t) {
      return _.call(e, t);
    },
    S = r.document,
    b = v(S) && v(S.createElement),
    k = function (e) {
      return b ? S.createElement(e) : {};
    },
    T =
      !o &&
      !i(function () {
        return (
          7 !=
          Object.defineProperty(k("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    R = Object.getOwnPropertyDescriptor,
    w = {
      f: o
        ? R
        : function (e, t) {
            if (((e = m(e)), (t = g(t, !0)), T))
              try {
                return R(e, t);
              } catch (n) {}
            if (y(e, t)) return u(!c.f.call(e, t), e[t]);
          },
    },
    I = function (e) {
      if (!v(e)) throw TypeError(String(e) + " is not an object");
      return e;
    },
    C = Object.defineProperty,
    E = {
      f: o
        ? C
        : function (e, t, n) {
            if ((I(e), (t = g(t, !0)), I(n), T))
              try {
                return C(e, t, n);
              } catch (r) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e;
          },
    },
    x = o
      ? function (e, t, n) {
          return E.f(e, t, u(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        },
    P = function (e, t) {
      try {
        x(r, e, t);
      } catch (n) {
        r[e] = t;
      }
      return t;
    },
    A = r["__core-js_shared__"] || P("__core-js_shared__", {}),
    D = Function.toString;
  "function" != typeof A.inspectSource &&
    (A.inspectSource = function (e) {
      return D.call(e);
    });
  var O,
    N,
    M,
    L = A.inspectSource,
    U = r.WeakMap,
    V = "function" == typeof U && /native code/.test(L(U)),
    j = t(function (e) {
      (e.exports = function (e, t) {
        return A[e] || (A[e] = void 0 !== t ? t : {});
      })("versions", []).push({
        version: "3.8.1",
        mode: "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
      });
    }),
    F = 0,
    B = Math.random(),
    z = function (e) {
      return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++F + B).toString(36);
    },
    G = j("keys"),
    H = function (e) {
      return G[e] || (G[e] = z(e));
    },
    W = {},
    J = r.WeakMap;
  if (V) {
    var Q = A.state || (A.state = new J()),
      q = Q.get,
      K = Q.has,
      X = Q.set;
    (O = function (e, t) {
      return (t.facade = e), X.call(Q, e, t), t;
    }),
      (N = function (e) {
        return q.call(Q, e) || {};
      }),
      (M = function (e) {
        return K.call(Q, e);
      });
  } else {
    var $ = H("state");
    (W[$] = !0),
      (O = function (e, t) {
        return (t.facade = e), x(e, $, t), t;
      }),
      (N = function (e) {
        return y(e, $) ? e[$] : {};
      }),
      (M = function (e) {
        return y(e, $);
      });
  }
  var Y,
    Z,
    ee = {
      set: O,
      get: N,
      has: M,
      enforce: function (e) {
        return M(e) ? N(e) : O(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var n;
          if (!v(t) || (n = N(t)).type !== e)
            throw TypeError("Incompatible receiver, " + e + " required");
          return n;
        };
      },
    },
    te = t(function (e) {
      var t = ee.get,
        n = ee.enforce,
        i = String(String).split("String");
      (e.exports = function (e, t, o, a) {
        var s,
          c = !!a && !!a.unsafe,
          u = !!a && !!a.enumerable,
          d = !!a && !!a.noTargetGet;
        "function" == typeof o &&
          ("string" != typeof t || y(o, "name") || x(o, "name", t),
          (s = n(o)).source || (s.source = i.join("string" == typeof t ? t : ""))),
          e !== r
            ? (c ? !d && e[t] && (u = !0) : delete e[t], u ? (e[t] = o) : x(e, t, o))
            : u
            ? (e[t] = o)
            : P(t, o);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && t(this).source) || L(this);
      });
    }),
    ne = r,
    re = function (e) {
      return "function" == typeof e ? e : void 0;
    },
    ie = function (e, t) {
      return arguments.length < 2
        ? re(ne[e]) || re(r[e])
        : (ne[e] && ne[e][t]) || (r[e] && r[e][t]);
    },
    oe = Math.ceil,
    ae = Math.floor,
    se = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? ae : oe)(e);
    },
    ce = Math.min,
    ue = function (e) {
      return e > 0 ? ce(se(e), 9007199254740991) : 0;
    },
    de = Math.max,
    le = Math.min,
    pe = function (e, t) {
      var n = se(e);
      return n < 0 ? de(n + t, 0) : le(n, t);
    },
    he = function (e) {
      return function (t, n, r) {
        var i,
          o = m(t),
          a = ue(o.length),
          s = pe(r, a);
        if (e && n != n) {
          for (; a > s; ) if ((i = o[s++]) != i) return !0;
        } else for (; a > s; s++) if ((e || s in o) && o[s] === n) return e || s || 0;
        return !e && -1;
      };
    },
    fe = { includes: he(!0), indexOf: he(!1) },
    me = fe.indexOf,
    ve = function (e, t) {
      var n,
        r = m(e),
        i = 0,
        o = [];
      for (n in r) !y(W, n) && y(r, n) && o.push(n);
      for (; t.length > i; ) y(r, (n = t[i++])) && (~me(o, n) || o.push(n));
      return o;
    },
    ge = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ],
    _e = ge.concat("length", "prototype"),
    ye = {
      f:
        Object.getOwnPropertyNames ||
        function (e) {
          return ve(e, _e);
        },
    },
    Se = { f: Object.getOwnPropertySymbols },
    be =
      ie("Reflect", "ownKeys") ||
      function (e) {
        var t = ye.f(I(e)),
          n = Se.f;
        return n ? t.concat(n(e)) : t;
      },
    ke = function (e, t) {
      for (var n = be(t), r = E.f, i = w.f, o = 0; o < n.length; o++) {
        var a = n[o];
        y(e, a) || r(e, a, i(t, a));
      }
    },
    Te = /#|\.prototype\./,
    Re = function (e, t) {
      var n = Ie[we(e)];
      return n == Ee || (n != Ce && ("function" == typeof t ? i(t) : !!t));
    },
    we = (Re.normalize = function (e) {
      return String(e).replace(Te, ".").toLowerCase();
    }),
    Ie = (Re.data = {}),
    Ce = (Re.NATIVE = "N"),
    Ee = (Re.POLYFILL = "P"),
    xe = Re,
    Pe = w.f,
    Ae = function (e, t) {
      var n,
        i,
        o,
        a,
        s,
        c = e.target,
        u = e.global,
        d = e.stat;
      if ((n = u ? r : d ? r[c] || P(c, {}) : (r[c] || {}).prototype))
        for (i in t) {
          if (
            ((a = t[i]),
            (o = e.noTargetGet ? (s = Pe(n, i)) && s.value : n[i]),
            !xe(u ? i : c + (d ? "." : "#") + i, e.forced) && void 0 !== o)
          ) {
            if (typeof a == typeof o) continue;
            ke(a, o);
          }
          (e.sham || (o && o.sham)) && x(a, "sham", !0), te(n, i, a, e);
        }
    },
    De = function (e) {
      if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
      return e;
    },
    Oe = function (e, t, n) {
      if ((De(e), void 0 === t)) return e;
      switch (n) {
        case 0:
          return function () {
            return e.call(t);
          };
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function (n, r, i) {
            return e.call(t, n, r, i);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    },
    Ne = function (e) {
      return Object(f(e));
    },
    Me =
      Array.isArray ||
      function (e) {
        return "Array" == l(e);
      },
    Le =
      !!Object.getOwnPropertySymbols &&
      !i(function () {
        return !String(Symbol());
      }),
    Ue = Le && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    Ve = j("wks"),
    je = r.Symbol,
    Fe = Ue ? je : (je && je.withoutSetter) || z,
    Be = function (e) {
      return y(Ve, e) || (Le && y(je, e) ? (Ve[e] = je[e]) : (Ve[e] = Fe("Symbol." + e))), Ve[e];
    },
    ze = Be("species"),
    Ge = function (e, t) {
      var n;
      return (
        Me(e) &&
          ("function" != typeof (n = e.constructor) || (n !== Array && !Me(n.prototype))
            ? v(n) && null === (n = n[ze]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
      );
    },
    He = [].push,
    We = function (e) {
      var t = 1 == e,
        n = 2 == e,
        r = 3 == e,
        i = 4 == e,
        o = 6 == e,
        a = 7 == e,
        s = 5 == e || o;
      return function (c, u, d, l) {
        for (
          var p,
            f,
            m = Ne(c),
            v = h(m),
            g = Oe(u, d, 3),
            _ = ue(v.length),
            y = 0,
            S = l || Ge,
            b = t ? S(c, _) : n || a ? S(c, 0) : void 0;
          _ > y;
          y++
        )
          if ((s || y in v) && ((f = g((p = v[y]), y, m)), e))
            if (t) b[y] = f;
            else if (f)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return p;
                case 6:
                  return y;
                case 2:
                  He.call(b, p);
              }
            else
              switch (e) {
                case 4:
                  return !1;
                case 7:
                  He.call(b, p);
              }
        return o ? -1 : r || i ? i : b;
      };
    },
    Je = {
      forEach: We(0),
      map: We(1),
      filter: We(2),
      some: We(3),
      every: We(4),
      find: We(5),
      findIndex: We(6),
      filterOut: We(7),
    },
    Qe = ie("navigator", "userAgent") || "",
    qe = r.process,
    Ke = qe && qe.versions,
    Xe = Ke && Ke.v8;
  Xe
    ? (Z = (Y = Xe.split("."))[0] + Y[1])
    : Qe &&
      (!(Y = Qe.match(/Edge\/(\d+)/)) || Y[1] >= 74) &&
      (Y = Qe.match(/Chrome\/(\d+)/)) &&
      (Z = Y[1]);
  var $e = Z && +Z,
    Ye = Be("species"),
    Ze = function (e) {
      return (
        $e >= 51 ||
        !i(function () {
          var t = [];
          return (
            ((t.constructor = {})[Ye] = function () {
              return { foo: 1 };
            }),
            1 !== t[e](Boolean).foo
          );
        })
      );
    },
    et = Object.defineProperty,
    tt = {},
    nt = function (e) {
      throw e;
    },
    rt = function (e, t) {
      if (y(tt, e)) return tt[e];
      t || (t = {});
      var n = [][e],
        r = !!y(t, "ACCESSORS") && t.ACCESSORS,
        a = y(t, 0) ? t[0] : nt,
        s = y(t, 1) ? t[1] : void 0;
      return (tt[e] =
        !!n &&
        !i(function () {
          if (r && !o) return !0;
          var e = { length: -1 };
          r ? et(e, 1, { enumerable: !0, get: nt }) : (e[1] = 1), n.call(e, a, s);
        }));
    },
    it = Je.filter,
    ot = Ze("filter"),
    at = rt("filter");
  Ae(
    { target: "Array", proto: !0, forced: !ot || !at },
    {
      filter: function (e) {
        return it(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var st = Je.map,
    ct = Ze("map"),
    ut = rt("map");
  Ae(
    { target: "Array", proto: !0, forced: !ct || !ut },
    {
      map: function (e) {
        return st(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var dt = "\t\n\v\f\r                　\u2028\u2029\ufeff",
    lt = "[" + dt + "]",
    pt = RegExp("^" + lt + lt + "*"),
    ht = RegExp(lt + lt + "*$"),
    ft = function (e) {
      return function (t) {
        var n = String(f(t));
        return 1 & e && (n = n.replace(pt, "")), 2 & e && (n = n.replace(ht, "")), n;
      };
    },
    mt = { start: ft(1), end: ft(2), trim: ft(3) },
    vt = mt.trim;
  function gt(e) {
    return (gt =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function _t(e, t, n, r, i, o, a) {
    try {
      var s = e[o](a),
        c = s.value;
    } catch (u) {
      return void n(u);
    }
    s.done ? t(c) : Promise.resolve(c).then(r, i);
  }
  function yt(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, i) {
        var o = e.apply(t, n);
        function a(e) {
          _t(o, r, i, a, s, "next", e);
        }
        function s(e) {
          _t(o, r, i, a, s, "throw", e);
        }
        a(void 0);
      });
    };
  }
  function St(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function bt(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function kt(e, t, n) {
    return t && bt(e.prototype, t), n && bt(e, n), e;
  }
  function Tt(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  function Rt(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function wt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? Rt(Object(n), !0).forEach(function (t) {
            Tt(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Rt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function It(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      t && Et(e, t);
  }
  function Ct(e) {
    return (Ct = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function Et(e, t) {
    return (Et =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function xt() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  }
  function Pt(e, t, n) {
    return (Pt = xt()
      ? Reflect.construct
      : function (e, t, n) {
          var r = [null];
          r.push.apply(r, t);
          var i = new (Function.bind.apply(e, r))();
          return n && Et(i, n.prototype), i;
        }).apply(null, arguments);
  }
  function At(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (At = function (e) {
      if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf("[native code]")))
        return e;
      var n;
      if ("function" != typeof e)
        throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, r);
      }
      function r() {
        return Pt(e, arguments, Ct(this).constructor);
      }
      return (
        (r.prototype = Object.create(e.prototype, {
          constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
        })),
        Et(r, e)
      );
    })(e);
  }
  function Dt(e, t) {
    return !t || ("object" != typeof t && "function" != typeof t)
      ? (function (e) {
          if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        })(e)
      : t;
  }
  function Ot(e) {
    var t = xt();
    return function () {
      var n,
        r = Ct(e);
      if (t) {
        var i = Ct(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return Dt(this, n);
    };
  }
  function Nt(e, t, n) {
    return (Nt =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (e, t, n) {
            var r = (function (e, t) {
              for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Ct(e)); );
              return e;
            })(e, t);
            if (r) {
              var i = Object.getOwnPropertyDescriptor(r, t);
              return i.get ? i.get.call(n) : i.value;
            }
          })(e, t, n || e);
  }
  function Mt(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
          r = !0,
          i = !1,
          o = void 0;
        try {
          for (
            var a, s = e[Symbol.iterator]();
            !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t);
            r = !0
          );
        } catch (c) {
          (i = !0), (o = c);
        } finally {
          try {
            r || null == s.return || s.return();
          } finally {
            if (i) throw o;
          }
        }
        return n;
      })(e, t) ||
      Ut(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Lt(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return Vt(e);
      })(e) ||
      (function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      })(e) ||
      Ut(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Ut(e, t) {
    if (e) {
      if ("string" == typeof e) return Vt(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return (
        "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(e)
          : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Vt(e, t)
          : void 0
      );
    }
  }
  function Vt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function jt(e, t) {
    var n;
    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
      if (Array.isArray(e) || (n = Ut(e)) || (t && e && "number" == typeof e.length)) {
        n && (e = n);
        var r = 0,
          i = function () {};
        return {
          s: i,
          n: function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          },
          e: function (e) {
            throw e;
          },
          f: i,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var o,
      a = !0,
      s = !1;
    return {
      s: function () {
        n = e[Symbol.iterator]();
      },
      n: function () {
        var e = n.next();
        return (a = e.done), e;
      },
      e: function (e) {
        (s = !0), (o = e);
      },
      f: function () {
        try {
          a || null == n.return || n.return();
        } finally {
          if (s) throw o;
        }
      },
    };
  }
  Ae(
    {
      target: "String",
      proto: !0,
      forced: (function (e) {
        return i(function () {
          return !!dt[e]() || "​᠎" != "​᠎"[e]() || dt[e].name !== e;
        });
      })("trim"),
    },
    {
      trim: function () {
        return vt(this);
      },
    }
  );
  t(function (e) {
    var t = (function (e) {
      var t = Object.prototype,
        n = t.hasOwnProperty,
        r = "function" == typeof Symbol ? Symbol : {},
        i = r.iterator || "@@iterator",
        o = r.asyncIterator || "@@asyncIterator",
        a = r.toStringTag || "@@toStringTag";
      function s(e, t, n) {
        return (
          Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }),
          e[t]
        );
      }
      try {
        s({}, "");
      } catch (I) {
        s = function (e, t, n) {
          return (e[t] = n);
        };
      }
      function c(e, t, n, r) {
        var i = t && t.prototype instanceof l ? t : l,
          o = Object.create(i.prototype),
          a = new T(r || []);
        return (
          (o._invoke = (function (e, t, n) {
            var r = "suspendedStart";
            return function (i, o) {
              if ("executing" === r) throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === i) throw o;
                return w();
              }
              for (n.method = i, n.arg = o; ; ) {
                var a = n.delegate;
                if (a) {
                  var s = S(a, n);
                  if (s) {
                    if (s === d) continue;
                    return s;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var c = u(e, t, n);
                if ("normal" === c.type) {
                  if (((r = n.done ? "completed" : "suspendedYield"), c.arg === d)) continue;
                  return { value: c.arg, done: n.done };
                }
                "throw" === c.type && ((r = "completed"), (n.method = "throw"), (n.arg = c.arg));
              }
            };
          })(e, n, a)),
          o
        );
      }
      function u(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (I) {
          return { type: "throw", arg: I };
        }
      }
      e.wrap = c;
      var d = {};
      function l() {}
      function p() {}
      function h() {}
      var f = {};
      f[i] = function () {
        return this;
      };
      var m = Object.getPrototypeOf,
        v = m && m(m(R([])));
      v && v !== t && n.call(v, i) && (f = v);
      var g = (h.prototype = l.prototype = Object.create(f));
      function _(e) {
        ["next", "throw", "return"].forEach(function (t) {
          s(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function y(e, t) {
        var r;
        this._invoke = function (i, o) {
          function a() {
            return new t(function (r, a) {
              !(function r(i, o, a, s) {
                var c = u(e[i], e, o);
                if ("throw" !== c.type) {
                  var d = c.arg,
                    l = d.value;
                  return l && "object" == typeof l && n.call(l, "__await")
                    ? t.resolve(l.__await).then(
                        function (e) {
                          r("next", e, a, s);
                        },
                        function (e) {
                          r("throw", e, a, s);
                        }
                      )
                    : t.resolve(l).then(
                        function (e) {
                          (d.value = e), a(d);
                        },
                        function (e) {
                          return r("throw", e, a, s);
                        }
                      );
                }
                s(c.arg);
              })(i, o, r, a);
            });
          }
          return (r = r ? r.then(a, a) : a());
        };
      }
      function S(e, t) {
        var n = e.iterator[t.method];
        if (void 0 === n) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"), (t.arg = void 0), S(e, t), "throw" === t.method)
            )
              return d;
            (t.method = "throw"),
              (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
          }
          return d;
        }
        var r = u(n, e.iterator, t.arg);
        if ("throw" === r.type)
          return (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), d;
        var i = r.arg;
        return i
          ? i.done
            ? ((t[e.resultName] = i.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              d)
            : i
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            d);
      }
      function b(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function k(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function T(e) {
        (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(b, this), this.reset(!0);
      }
      function R(e) {
        if (e) {
          var t = e[i];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              o = function t() {
                for (; ++r < e.length; )
                  if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (o.next = o);
          }
        }
        return { next: w };
      }
      function w() {
        return { value: void 0, done: !0 };
      }
      return (
        (p.prototype = g.constructor = h),
        (h.constructor = p),
        (p.displayName = s(h, a, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name));
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, h)
              : ((e.__proto__ = h), s(e, a, "GeneratorFunction")),
            (e.prototype = Object.create(g)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        _(y.prototype),
        (y.prototype[o] = function () {
          return this;
        }),
        (e.AsyncIterator = y),
        (e.async = function (t, n, r, i, o) {
          void 0 === o && (o = Promise);
          var a = new y(c(t, n, r, i), o);
          return e.isGeneratorFunction(n)
            ? a
            : a.next().then(function (e) {
                return e.done ? e.value : a.next();
              });
        }),
        _(g),
        s(g, a, "Generator"),
        (g[i] = function () {
          return this;
        }),
        (g.toString = function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return (
            t.reverse(),
            function n() {
              for (; t.length; ) {
                var r = t.pop();
                if (r in e) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (e.values = R),
        (T.prototype = {
          constructor: T,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(k),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function r(n, r) {
              return (
                (a.type = "throw"),
                (a.arg = e),
                (t.next = n),
                r && ((t.method = "next"), (t.arg = void 0)),
                !!r
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var o = this.tryEntries[i],
                a = o.completion;
              if ("root" === o.tryLoc) return r("end");
              if (o.tryLoc <= this.prev) {
                var s = n.call(o, "catchLoc"),
                  c = n.call(o, "finallyLoc");
                if (s && c) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                } else if (s) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                } else {
                  if (!c) throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var i = this.tryEntries[r];
              if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                var o = i;
                break;
              }
            }
            o &&
              ("break" === e || "continue" === e) &&
              o.tryLoc <= t &&
              t <= o.finallyLoc &&
              (o = null);
            var a = o ? o.completion : {};
            return (
              (a.type = e),
              (a.arg = t),
              o ? ((this.method = "next"), (this.next = o.finallyLoc), d) : this.complete(a)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              d
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), k(n), d;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var i = r.arg;
                  k(n);
                }
                return i;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, n) {
            return (
              (this.delegate = { iterator: R(e), resultName: t, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              d
            );
          },
        }),
        e
      );
    })(e.exports);
    try {
      regeneratorRuntime = t;
    } catch (n) {
      Function("r", "regeneratorRuntime = r")(t);
    }
  });
  let Ft = !0,
    Bt = !0;
  function zt(e, t, n) {
    const r = e.match(t);
    return r && r.length >= n && parseInt(r[n], 10);
  }
  function Gt(e, t, n) {
    if (!e.RTCPeerConnection) return;
    const r = e.RTCPeerConnection.prototype,
      i = r.addEventListener;
    r.addEventListener = function (e, r) {
      if (e !== t) return i.apply(this, arguments);
      const o = (e) => {
        const t = n(e);
        t && (r.handleEvent ? r.handleEvent(t) : r(t));
      };
      return (
        (this._eventMap = this._eventMap || {}),
        this._eventMap[t] || (this._eventMap[t] = new Map()),
        this._eventMap[t].set(r, o),
        i.apply(this, [e, o])
      );
    };
    const o = r.removeEventListener;
    (r.removeEventListener = function (e, n) {
      if (e !== t || !this._eventMap || !this._eventMap[t]) return o.apply(this, arguments);
      if (!this._eventMap[t].has(n)) return o.apply(this, arguments);
      const r = this._eventMap[t].get(n);
      return (
        this._eventMap[t].delete(n),
        0 === this._eventMap[t].size && delete this._eventMap[t],
        0 === Object.keys(this._eventMap).length && delete this._eventMap,
        o.apply(this, [e, r])
      );
    }),
      Object.defineProperty(r, "on" + t, {
        get() {
          return this["_on" + t];
        },
        set(e) {
          this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]),
            e && this.addEventListener(t, (this["_on" + t] = e));
        },
        enumerable: !0,
        configurable: !0,
      });
  }
  function Ht(e) {
    return "boolean" != typeof e
      ? new Error("Argument type: " + typeof e + ". Please use a boolean.")
      : ((Ft = e), e ? "adapter.js logging disabled" : "adapter.js logging enabled");
  }
  function Wt(e) {
    return "boolean" != typeof e
      ? new Error("Argument type: " + typeof e + ". Please use a boolean.")
      : ((Bt = !e), "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"));
  }
  function Jt() {
    if ("object" == typeof window) {
      if (Ft) return;
      "undefined" != typeof console &&
        "function" == typeof console.log &&
        console.log.apply(console, arguments);
    }
  }
  function Qt(e, t) {
    Bt && console.warn(e + " is deprecated, please use " + t + " instead.");
  }
  function qt(e) {
    const t = { browser: null, version: null };
    if (void 0 === e || !e.navigator) return (t.browser = "Not a browser."), t;
    const { navigator: n } = e;
    if (n.mozGetUserMedia)
      (t.browser = "firefox"), (t.version = zt(n.userAgent, /Firefox\/(\d+)\./, 1));
    else if (
      n.webkitGetUserMedia ||
      (!1 === e.isSecureContext && e.webkitRTCPeerConnection && !e.RTCIceGatherer)
    )
      (t.browser = "chrome"), (t.version = zt(n.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
    else if (n.mediaDevices && n.userAgent.match(/Edge\/(\d+).(\d+)$/))
      (t.browser = "edge"), (t.version = zt(n.userAgent, /Edge\/(\d+).(\d+)$/, 2));
    else {
      if (!e.RTCPeerConnection || !n.userAgent.match(/AppleWebKit\/(\d+)\./))
        return (t.browser = "Not a supported browser."), t;
      (t.browser = "safari"),
        (t.version = zt(n.userAgent, /AppleWebKit\/(\d+)\./, 1)),
        (t.supportsUnifiedPlan =
          e.RTCRtpTransceiver && "currentDirection" in e.RTCRtpTransceiver.prototype);
    }
    return t;
  }
  function Kt(e) {
    return "[object Object]" === Object.prototype.toString.call(e);
  }
  function Xt(e) {
    return Kt(e)
      ? Object.keys(e).reduce(function (t, n) {
          const r = Kt(e[n]),
            i = r ? Xt(e[n]) : e[n],
            o = r && !Object.keys(i).length;
          return void 0 === i || o ? t : Object.assign(t, { [n]: i });
        }, {})
      : e;
  }
  function $t(e, t, n) {
    const r = n ? "outbound-rtp" : "inbound-rtp",
      i = new Map();
    if (null === t) return i;
    const o = [];
    return (
      e.forEach((e) => {
        "track" === e.type && e.trackIdentifier === t.id && o.push(e);
      }),
      o.forEach((t) => {
        e.forEach((n) => {
          n.type === r &&
            n.trackId === t.id &&
            (function e(t, n, r) {
              n &&
                !r.has(n.id) &&
                (r.set(n.id, n),
                Object.keys(n).forEach((i) => {
                  i.endsWith("Id")
                    ? e(t, t.get(n[i]), r)
                    : i.endsWith("Ids") &&
                      n[i].forEach((n) => {
                        e(t, t.get(n), r);
                      });
                }));
            })(e, n, i);
        });
      }),
      i
    );
  }
  const Yt = Jt;
  function Zt(e) {
    const t = e && e.navigator;
    if (!t.mediaDevices) return;
    const n = qt(e),
      r = function (e) {
        if ("object" != typeof e || e.mandatory || e.optional) return e;
        const t = {};
        return (
          Object.keys(e).forEach((n) => {
            if ("require" === n || "advanced" === n || "mediaSource" === n) return;
            const r = "object" == typeof e[n] ? e[n] : { ideal: e[n] };
            void 0 !== r.exact && "number" == typeof r.exact && (r.min = r.max = r.exact);
            const i = function (e, t) {
              return e
                ? e + t.charAt(0).toUpperCase() + t.slice(1)
                : "deviceId" === t
                ? "sourceId"
                : t;
            };
            if (void 0 !== r.ideal) {
              t.optional = t.optional || [];
              let e = {};
              "number" == typeof r.ideal
                ? ((e[i("min", n)] = r.ideal),
                  t.optional.push(e),
                  (e = {}),
                  (e[i("max", n)] = r.ideal),
                  t.optional.push(e))
                : ((e[i("", n)] = r.ideal), t.optional.push(e));
            }
            void 0 !== r.exact && "number" != typeof r.exact
              ? ((t.mandatory = t.mandatory || {}), (t.mandatory[i("", n)] = r.exact))
              : ["min", "max"].forEach((e) => {
                  void 0 !== r[e] &&
                    ((t.mandatory = t.mandatory || {}), (t.mandatory[i(e, n)] = r[e]));
                });
          }),
          e.advanced && (t.optional = (t.optional || []).concat(e.advanced)),
          t
        );
      },
      i = function (e, i) {
        if (n.version >= 61) return i(e);
        if ((e = JSON.parse(JSON.stringify(e))) && "object" == typeof e.audio) {
          const t = function (e, t, n) {
            t in e && !(n in e) && ((e[n] = e[t]), delete e[t]);
          };
          t((e = JSON.parse(JSON.stringify(e))).audio, "autoGainControl", "googAutoGainControl"),
            t(e.audio, "noiseSuppression", "googNoiseSuppression"),
            (e.audio = r(e.audio));
        }
        if (e && "object" == typeof e.video) {
          let o = e.video.facingMode;
          o = o && ("object" == typeof o ? o : { ideal: o });
          const a = n.version < 66;
          if (
            o &&
            ("user" === o.exact ||
              "environment" === o.exact ||
              "user" === o.ideal ||
              "environment" === o.ideal) &&
            (!t.mediaDevices.getSupportedConstraints ||
              !t.mediaDevices.getSupportedConstraints().facingMode ||
              a)
          ) {
            let n;
            if (
              (delete e.video.facingMode,
              "environment" === o.exact || "environment" === o.ideal
                ? (n = ["back", "rear"])
                : ("user" !== o.exact && "user" !== o.ideal) || (n = ["front"]),
              n)
            )
              return t.mediaDevices.enumerateDevices().then((t) => {
                let a = (t = t.filter((e) => "videoinput" === e.kind)).find((e) =>
                  n.some((t) => e.label.toLowerCase().includes(t))
                );
                return (
                  !a && t.length && n.includes("back") && (a = t[t.length - 1]),
                  a && (e.video.deviceId = o.exact ? { exact: a.deviceId } : { ideal: a.deviceId }),
                  (e.video = r(e.video)),
                  Yt("chrome: " + JSON.stringify(e)),
                  i(e)
                );
              });
          }
          e.video = r(e.video);
        }
        return Yt("chrome: " + JSON.stringify(e)), i(e);
      },
      o = function (e) {
        return n.version >= 64
          ? e
          : {
              name:
                {
                  PermissionDeniedError: "NotAllowedError",
                  PermissionDismissedError: "NotAllowedError",
                  InvalidStateError: "NotAllowedError",
                  DevicesNotFoundError: "NotFoundError",
                  ConstraintNotSatisfiedError: "OverconstrainedError",
                  TrackStartError: "NotReadableError",
                  MediaDeviceFailedDueToShutdown: "NotAllowedError",
                  MediaDeviceKillSwitchOn: "NotAllowedError",
                  TabCaptureError: "AbortError",
                  ScreenCaptureError: "AbortError",
                  DeviceCaptureError: "AbortError",
                }[e.name] || e.name,
              message: e.message,
              constraint: e.constraint || e.constraintName,
              toString() {
                return this.name + (this.message && ": ") + this.message;
              },
            };
      };
    if (
      ((t.getUserMedia = function (e, n, r) {
        i(e, (e) => {
          t.webkitGetUserMedia(e, n, (e) => {
            r && r(o(e));
          });
        });
      }.bind(t)),
      t.mediaDevices.getUserMedia)
    ) {
      const e = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
      t.mediaDevices.getUserMedia = function (t) {
        return i(t, (t) =>
          e(t).then(
            (e) => {
              if (
                (t.audio && !e.getAudioTracks().length) ||
                (t.video && !e.getVideoTracks().length)
              )
                throw (
                  (e.getTracks().forEach((e) => {
                    e.stop();
                  }),
                  new DOMException("", "NotFoundError"))
                );
              return e;
            },
            (e) => Promise.reject(o(e))
          )
        );
      };
    }
  }
  function en(e) {
    e.MediaStream = e.MediaStream || e.webkitMediaStream;
  }
  function tn(e) {
    if (
      "object" == typeof e &&
      e.RTCPeerConnection &&
      !("ontrack" in e.RTCPeerConnection.prototype)
    ) {
      Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
        get() {
          return this._ontrack;
        },
        set(e) {
          this._ontrack && this.removeEventListener("track", this._ontrack),
            this.addEventListener("track", (this._ontrack = e));
        },
        enumerable: !0,
        configurable: !0,
      });
      const t = e.RTCPeerConnection.prototype.setRemoteDescription;
      e.RTCPeerConnection.prototype.setRemoteDescription = function () {
        return (
          this._ontrackpoly ||
            ((this._ontrackpoly = (t) => {
              t.stream.addEventListener("addtrack", (n) => {
                let r;
                r = e.RTCPeerConnection.prototype.getReceivers
                  ? this.getReceivers().find((e) => e.track && e.track.id === n.track.id)
                  : { track: n.track };
                const i = new Event("track");
                (i.track = n.track),
                  (i.receiver = r),
                  (i.transceiver = { receiver: r }),
                  (i.streams = [t.stream]),
                  this.dispatchEvent(i);
              }),
                t.stream.getTracks().forEach((n) => {
                  let r;
                  r = e.RTCPeerConnection.prototype.getReceivers
                    ? this.getReceivers().find((e) => e.track && e.track.id === n.id)
                    : { track: n };
                  const i = new Event("track");
                  (i.track = n),
                    (i.receiver = r),
                    (i.transceiver = { receiver: r }),
                    (i.streams = [t.stream]),
                    this.dispatchEvent(i);
                });
            }),
            this.addEventListener("addstream", this._ontrackpoly)),
          t.apply(this, arguments)
        );
      };
    } else Gt(e, "track", (e) => (e.transceiver || Object.defineProperty(e, "transceiver", { value: { receiver: e.receiver } }), e));
  }
  function nn(e) {
    if (
      "object" == typeof e &&
      e.RTCPeerConnection &&
      !("getSenders" in e.RTCPeerConnection.prototype) &&
      "createDTMFSender" in e.RTCPeerConnection.prototype
    ) {
      const t = function (e, t) {
        return {
          track: t,
          get dtmf() {
            return (
              void 0 === this._dtmf &&
                ("audio" === t.kind ? (this._dtmf = e.createDTMFSender(t)) : (this._dtmf = null)),
              this._dtmf
            );
          },
          _pc: e,
        };
      };
      if (!e.RTCPeerConnection.prototype.getSenders) {
        e.RTCPeerConnection.prototype.getSenders = function () {
          return (this._senders = this._senders || []), this._senders.slice();
        };
        const n = e.RTCPeerConnection.prototype.addTrack;
        e.RTCPeerConnection.prototype.addTrack = function (e, r) {
          let i = n.apply(this, arguments);
          return i || ((i = t(this, e)), this._senders.push(i)), i;
        };
        const r = e.RTCPeerConnection.prototype.removeTrack;
        e.RTCPeerConnection.prototype.removeTrack = function (e) {
          r.apply(this, arguments);
          const t = this._senders.indexOf(e);
          -1 !== t && this._senders.splice(t, 1);
        };
      }
      const n = e.RTCPeerConnection.prototype.addStream;
      e.RTCPeerConnection.prototype.addStream = function (e) {
        (this._senders = this._senders || []),
          n.apply(this, [e]),
          e.getTracks().forEach((e) => {
            this._senders.push(t(this, e));
          });
      };
      const r = e.RTCPeerConnection.prototype.removeStream;
      e.RTCPeerConnection.prototype.removeStream = function (e) {
        (this._senders = this._senders || []),
          r.apply(this, [e]),
          e.getTracks().forEach((e) => {
            const t = this._senders.find((t) => t.track === e);
            t && this._senders.splice(this._senders.indexOf(t), 1);
          });
      };
    } else if (
      "object" == typeof e &&
      e.RTCPeerConnection &&
      "getSenders" in e.RTCPeerConnection.prototype &&
      "createDTMFSender" in e.RTCPeerConnection.prototype &&
      e.RTCRtpSender &&
      !("dtmf" in e.RTCRtpSender.prototype)
    ) {
      const t = e.RTCPeerConnection.prototype.getSenders;
      (e.RTCPeerConnection.prototype.getSenders = function () {
        const e = t.apply(this, []);
        return e.forEach((e) => (e._pc = this)), e;
      }),
        Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
          get() {
            return (
              void 0 === this._dtmf &&
                ("audio" === this.track.kind
                  ? (this._dtmf = this._pc.createDTMFSender(this.track))
                  : (this._dtmf = null)),
              this._dtmf
            );
          },
        });
    }
  }
  function rn(e) {
    if (!e.RTCPeerConnection) return;
    const t = e.RTCPeerConnection.prototype.getStats;
    e.RTCPeerConnection.prototype.getStats = function () {
      const [e, n, r] = arguments;
      if (arguments.length > 0 && "function" == typeof e) return t.apply(this, arguments);
      if (0 === t.length && (0 === arguments.length || "function" != typeof e))
        return t.apply(this, []);
      const i = function (e) {
          const t = {};
          return (
            e.result().forEach((e) => {
              const n = {
                id: e.id,
                timestamp: e.timestamp,
                type:
                  { localcandidate: "local-candidate", remotecandidate: "remote-candidate" }[
                    e.type
                  ] || e.type,
              };
              e.names().forEach((t) => {
                n[t] = e.stat(t);
              }),
                (t[n.id] = n);
            }),
            t
          );
        },
        o = function (e) {
          return new Map(Object.keys(e).map((t) => [t, e[t]]));
        };
      if (arguments.length >= 2) {
        const r = function (e) {
          n(o(i(e)));
        };
        return t.apply(this, [r, e]);
      }
      return new Promise((e, n) => {
        t.apply(this, [
          function (t) {
            e(o(i(t)));
          },
          n,
        ]);
      }).then(n, r);
    };
  }
  function on(e) {
    if (!("object" == typeof e && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver))
      return;
    if (!("getStats" in e.RTCRtpSender.prototype)) {
      const t = e.RTCPeerConnection.prototype.getSenders;
      t &&
        (e.RTCPeerConnection.prototype.getSenders = function () {
          const e = t.apply(this, []);
          return e.forEach((e) => (e._pc = this)), e;
        });
      const n = e.RTCPeerConnection.prototype.addTrack;
      n &&
        (e.RTCPeerConnection.prototype.addTrack = function () {
          const e = n.apply(this, arguments);
          return (e._pc = this), e;
        }),
        (e.RTCRtpSender.prototype.getStats = function () {
          const e = this;
          return this._pc.getStats().then((t) => $t(t, e.track, !0));
        });
    }
    if (!("getStats" in e.RTCRtpReceiver.prototype)) {
      const t = e.RTCPeerConnection.prototype.getReceivers;
      t &&
        (e.RTCPeerConnection.prototype.getReceivers = function () {
          const e = t.apply(this, []);
          return e.forEach((e) => (e._pc = this)), e;
        }),
        Gt(e, "track", (e) => ((e.receiver._pc = e.srcElement), e)),
        (e.RTCRtpReceiver.prototype.getStats = function () {
          const e = this;
          return this._pc.getStats().then((t) => $t(t, e.track, !1));
        });
    }
    if (!("getStats" in e.RTCRtpSender.prototype) || !("getStats" in e.RTCRtpReceiver.prototype))
      return;
    const t = e.RTCPeerConnection.prototype.getStats;
    e.RTCPeerConnection.prototype.getStats = function () {
      if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
        const e = arguments[0];
        let t, n, r;
        return (
          this.getSenders().forEach((n) => {
            n.track === e && (t ? (r = !0) : (t = n));
          }),
          this.getReceivers().forEach(
            (t) => (t.track === e && (n ? (r = !0) : (n = t)), t.track === e)
          ),
          r || (t && n)
            ? Promise.reject(
                new DOMException(
                  "There are more than one sender or receiver for the track.",
                  "InvalidAccessError"
                )
              )
            : t
            ? t.getStats()
            : n
            ? n.getStats()
            : Promise.reject(
                new DOMException(
                  "There is no sender or receiver for the track.",
                  "InvalidAccessError"
                )
              )
        );
      }
      return t.apply(this, arguments);
    };
  }
  function an(e) {
    e.RTCPeerConnection.prototype.getLocalStreams = function () {
      return (
        (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
        Object.keys(this._shimmedLocalStreams).map((e) => this._shimmedLocalStreams[e][0])
      );
    };
    const t = e.RTCPeerConnection.prototype.addTrack;
    e.RTCPeerConnection.prototype.addTrack = function (e, n) {
      if (!n) return t.apply(this, arguments);
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      const r = t.apply(this, arguments);
      return (
        this._shimmedLocalStreams[n.id]
          ? -1 === this._shimmedLocalStreams[n.id].indexOf(r) &&
            this._shimmedLocalStreams[n.id].push(r)
          : (this._shimmedLocalStreams[n.id] = [n, r]),
        r
      );
    };
    const n = e.RTCPeerConnection.prototype.addStream;
    e.RTCPeerConnection.prototype.addStream = function (e) {
      (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
        e.getTracks().forEach((e) => {
          if (this.getSenders().find((t) => t.track === e))
            throw new DOMException("Track already exists.", "InvalidAccessError");
        });
      const t = this.getSenders();
      n.apply(this, arguments);
      const r = this.getSenders().filter((e) => -1 === t.indexOf(e));
      this._shimmedLocalStreams[e.id] = [e].concat(r);
    };
    const r = e.RTCPeerConnection.prototype.removeStream;
    e.RTCPeerConnection.prototype.removeStream = function (e) {
      return (
        (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
        delete this._shimmedLocalStreams[e.id],
        r.apply(this, arguments)
      );
    };
    const i = e.RTCPeerConnection.prototype.removeTrack;
    e.RTCPeerConnection.prototype.removeTrack = function (e) {
      return (
        (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
        e &&
          Object.keys(this._shimmedLocalStreams).forEach((t) => {
            const n = this._shimmedLocalStreams[t].indexOf(e);
            -1 !== n && this._shimmedLocalStreams[t].splice(n, 1),
              1 === this._shimmedLocalStreams[t].length && delete this._shimmedLocalStreams[t];
          }),
        i.apply(this, arguments)
      );
    };
  }
  function sn(e) {
    if (!e.RTCPeerConnection) return;
    const t = qt(e);
    if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return an(e);
    const n = e.RTCPeerConnection.prototype.getLocalStreams;
    e.RTCPeerConnection.prototype.getLocalStreams = function () {
      const e = n.apply(this);
      return (
        (this._reverseStreams = this._reverseStreams || {}),
        e.map((e) => this._reverseStreams[e.id])
      );
    };
    const r = e.RTCPeerConnection.prototype.addStream;
    e.RTCPeerConnection.prototype.addStream = function (t) {
      if (
        ((this._streams = this._streams || {}),
        (this._reverseStreams = this._reverseStreams || {}),
        t.getTracks().forEach((e) => {
          if (this.getSenders().find((t) => t.track === e))
            throw new DOMException("Track already exists.", "InvalidAccessError");
        }),
        !this._reverseStreams[t.id])
      ) {
        const n = new e.MediaStream(t.getTracks());
        (this._streams[t.id] = n), (this._reverseStreams[n.id] = t), (t = n);
      }
      r.apply(this, [t]);
    };
    const i = e.RTCPeerConnection.prototype.removeStream;
    function o(e, t) {
      let n = t.sdp;
      return (
        Object.keys(e._reverseStreams || []).forEach((t) => {
          const r = e._reverseStreams[t],
            i = e._streams[r.id];
          n = n.replace(new RegExp(i.id, "g"), r.id);
        }),
        new RTCSessionDescription({ type: t.type, sdp: n })
      );
    }
    function a(e, t) {
      let n = t.sdp;
      return (
        Object.keys(e._reverseStreams || []).forEach((t) => {
          const r = e._reverseStreams[t],
            i = e._streams[r.id];
          n = n.replace(new RegExp(r.id, "g"), i.id);
        }),
        new RTCSessionDescription({ type: t.type, sdp: n })
      );
    }
    (e.RTCPeerConnection.prototype.removeStream = function (e) {
      (this._streams = this._streams || {}),
        (this._reverseStreams = this._reverseStreams || {}),
        i.apply(this, [this._streams[e.id] || e]),
        delete this._reverseStreams[this._streams[e.id] ? this._streams[e.id].id : e.id],
        delete this._streams[e.id];
    }),
      (e.RTCPeerConnection.prototype.addTrack = function (t, n) {
        if ("closed" === this.signalingState)
          throw new DOMException(
            "The RTCPeerConnection's signalingState is 'closed'.",
            "InvalidStateError"
          );
        const r = [].slice.call(arguments, 1);
        if (1 !== r.length || !r[0].getTracks().find((e) => e === t))
          throw new DOMException(
            "The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.",
            "NotSupportedError"
          );
        const i = this.getSenders().find((e) => e.track === t);
        if (i) throw new DOMException("Track already exists.", "InvalidAccessError");
        (this._streams = this._streams || {}), (this._reverseStreams = this._reverseStreams || {});
        const o = this._streams[n.id];
        if (o)
          o.addTrack(t),
            Promise.resolve().then(() => {
              this.dispatchEvent(new Event("negotiationneeded"));
            });
        else {
          const r = new e.MediaStream([t]);
          (this._streams[n.id] = r), (this._reverseStreams[r.id] = n), this.addStream(r);
        }
        return this.getSenders().find((e) => e.track === t);
      }),
      ["createOffer", "createAnswer"].forEach(function (t) {
        const n = e.RTCPeerConnection.prototype[t],
          r = {
            [t]() {
              const e = arguments;
              return arguments.length && "function" == typeof arguments[0]
                ? n.apply(this, [
                    (t) => {
                      const n = o(this, t);
                      e[0].apply(null, [n]);
                    },
                    (t) => {
                      e[1] && e[1].apply(null, t);
                    },
                    arguments[2],
                  ])
                : n.apply(this, arguments).then((e) => o(this, e));
            },
          };
        e.RTCPeerConnection.prototype[t] = r[t];
      });
    const s = e.RTCPeerConnection.prototype.setLocalDescription;
    e.RTCPeerConnection.prototype.setLocalDescription = function () {
      return arguments.length && arguments[0].type
        ? ((arguments[0] = a(this, arguments[0])), s.apply(this, arguments))
        : s.apply(this, arguments);
    };
    const c = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
    Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
      get() {
        const e = c.get.apply(this);
        return "" === e.type ? e : o(this, e);
      },
    }),
      (e.RTCPeerConnection.prototype.removeTrack = function (e) {
        if ("closed" === this.signalingState)
          throw new DOMException(
            "The RTCPeerConnection's signalingState is 'closed'.",
            "InvalidStateError"
          );
        if (!e._pc)
          throw new DOMException(
            "Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.",
            "TypeError"
          );
        if (!(e._pc === this))
          throw new DOMException(
            "Sender was not created by this connection.",
            "InvalidAccessError"
          );
        let t;
        (this._streams = this._streams || {}),
          Object.keys(this._streams).forEach((n) => {
            this._streams[n].getTracks().find((t) => e.track === t) && (t = this._streams[n]);
          }),
          t &&
            (1 === t.getTracks().length
              ? this.removeStream(this._reverseStreams[t.id])
              : t.removeTrack(e.track),
            this.dispatchEvent(new Event("negotiationneeded")));
      });
  }
  function cn(e) {
    const t = qt(e);
    if (
      (!e.RTCPeerConnection &&
        e.webkitRTCPeerConnection &&
        (e.RTCPeerConnection = e.webkitRTCPeerConnection),
      !e.RTCPeerConnection)
    )
      return;
    const n = 0 === e.RTCPeerConnection.prototype.addIceCandidate.length;
    t.version < 53 &&
      ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (t) {
        const n = e.RTCPeerConnection.prototype[t],
          r = {
            [t]() {
              return (
                (arguments[0] = new (
                  "addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription
                )(arguments[0])),
                n.apply(this, arguments)
              );
            },
          };
        e.RTCPeerConnection.prototype[t] = r[t];
      });
    const r = e.RTCPeerConnection.prototype.addIceCandidate;
    e.RTCPeerConnection.prototype.addIceCandidate = function () {
      return n || arguments[0]
        ? t.version < 78 && arguments[0] && "" === arguments[0].candidate
          ? Promise.resolve()
          : r.apply(this, arguments)
        : (arguments[1] && arguments[1].apply(null), Promise.resolve());
    };
  }
  function un(e) {
    const t = qt(e);
    Gt(e, "negotiationneeded", (e) => {
      const n = e.target;
      if (
        !(
          t.version < 72 ||
          (n.getConfiguration && "plan-b" === n.getConfiguration().sdpSemantics)
        ) ||
        "stable" === n.signalingState
      )
        return e;
    });
  }
  var dn = Object.freeze({
    __proto__: null,
    shimMediaStream: en,
    shimOnTrack: tn,
    shimGetSendersWithDtmf: nn,
    shimGetStats: rn,
    shimSenderReceiverGetStats: on,
    shimAddTrackRemoveTrackWithNative: an,
    shimAddTrackRemoveTrack: sn,
    shimPeerConnection: cn,
    fixNegotiationNeeded: un,
    shimGetUserMedia: Zt,
    shimGetDisplayMedia: function (e, t) {
      (e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices) ||
        (e.navigator.mediaDevices &&
          ("function" == typeof t
            ? (e.navigator.mediaDevices.getDisplayMedia = function (n) {
                return t(n).then((t) => {
                  const r = n.video && n.video.width,
                    i = n.video && n.video.height,
                    o = n.video && n.video.frameRate;
                  return (
                    (n.video = {
                      mandatory: {
                        chromeMediaSource: "desktop",
                        chromeMediaSourceId: t,
                        maxFrameRate: o || 3,
                      },
                    }),
                    r && (n.video.mandatory.maxWidth = r),
                    i && (n.video.mandatory.maxHeight = i),
                    e.navigator.mediaDevices.getUserMedia(n)
                  );
                });
              })
            : console.error("shimGetDisplayMedia: getSourceId argument is not a function")));
    },
  });
  var ln = t(function (e) {
    var t = {
      generateIdentifier: function () {
        return Math.random().toString(36).substr(2, 10);
      },
    };
    (t.localCName = t.generateIdentifier()),
      (t.splitLines = function (e) {
        return e
          .trim()
          .split("\n")
          .map(function (e) {
            return e.trim();
          });
      }),
      (t.splitSections = function (e) {
        return e.split("\nm=").map(function (e, t) {
          return (t > 0 ? "m=" + e : e).trim() + "\r\n";
        });
      }),
      (t.getDescription = function (e) {
        var n = t.splitSections(e);
        return n && n[0];
      }),
      (t.getMediaSections = function (e) {
        var n = t.splitSections(e);
        return n.shift(), n;
      }),
      (t.matchPrefix = function (e, n) {
        return t.splitLines(e).filter(function (e) {
          return 0 === e.indexOf(n);
        });
      }),
      (t.parseCandidate = function (e) {
        for (
          var t,
            n = {
              foundation: (t =
                0 === e.indexOf("a=candidate:")
                  ? e.substring(12).split(" ")
                  : e.substring(10).split(" "))[0],
              component: parseInt(t[1], 10),
              protocol: t[2].toLowerCase(),
              priority: parseInt(t[3], 10),
              ip: t[4],
              address: t[4],
              port: parseInt(t[5], 10),
              type: t[7],
            },
            r = 8;
          r < t.length;
          r += 2
        )
          switch (t[r]) {
            case "raddr":
              n.relatedAddress = t[r + 1];
              break;
            case "rport":
              n.relatedPort = parseInt(t[r + 1], 10);
              break;
            case "tcptype":
              n.tcpType = t[r + 1];
              break;
            case "ufrag":
              (n.ufrag = t[r + 1]), (n.usernameFragment = t[r + 1]);
              break;
            default:
              n[t[r]] = t[r + 1];
          }
        return n;
      }),
      (t.writeCandidate = function (e) {
        var t = [];
        t.push(e.foundation),
          t.push(e.component),
          t.push(e.protocol.toUpperCase()),
          t.push(e.priority),
          t.push(e.address || e.ip),
          t.push(e.port);
        var n = e.type;
        return (
          t.push("typ"),
          t.push(n),
          "host" !== n &&
            e.relatedAddress &&
            e.relatedPort &&
            (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)),
          e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)),
          (e.usernameFragment || e.ufrag) &&
            (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)),
          "candidate:" + t.join(" ")
        );
      }),
      (t.parseIceOptions = function (e) {
        return e.substr(14).split(" ");
      }),
      (t.parseRtpMap = function (e) {
        var t = e.substr(9).split(" "),
          n = { payloadType: parseInt(t.shift(), 10) };
        return (
          (t = t[0].split("/")),
          (n.name = t[0]),
          (n.clockRate = parseInt(t[1], 10)),
          (n.channels = 3 === t.length ? parseInt(t[2], 10) : 1),
          (n.numChannels = n.channels),
          n
        );
      }),
      (t.writeRtpMap = function (e) {
        var t = e.payloadType;
        void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
        var n = e.channels || e.numChannels || 1;
        return (
          "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== n ? "/" + n : "") + "\r\n"
        );
      }),
      (t.parseExtmap = function (e) {
        var t = e.substr(9).split(" ");
        return {
          id: parseInt(t[0], 10),
          direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
          uri: t[1],
        };
      }),
      (t.writeExtmap = function (e) {
        return (
          "a=extmap:" +
          (e.id || e.preferredId) +
          (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") +
          " " +
          e.uri +
          "\r\n"
        );
      }),
      (t.parseFmtp = function (e) {
        for (var t, n = {}, r = e.substr(e.indexOf(" ") + 1).split(";"), i = 0; i < r.length; i++)
          n[(t = r[i].trim().split("="))[0].trim()] = t[1];
        return n;
      }),
      (t.writeFmtp = function (e) {
        var t = "",
          n = e.payloadType;
        if (
          (void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType),
          e.parameters && Object.keys(e.parameters).length)
        ) {
          var r = [];
          Object.keys(e.parameters).forEach(function (t) {
            e.parameters[t] ? r.push(t + "=" + e.parameters[t]) : r.push(t);
          }),
            (t += "a=fmtp:" + n + " " + r.join(";") + "\r\n");
        }
        return t;
      }),
      (t.parseRtcpFb = function (e) {
        var t = e.substr(e.indexOf(" ") + 1).split(" ");
        return { type: t.shift(), parameter: t.join(" ") };
      }),
      (t.writeRtcpFb = function (e) {
        var t = "",
          n = e.payloadType;
        return (
          void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType),
          e.rtcpFeedback &&
            e.rtcpFeedback.length &&
            e.rtcpFeedback.forEach(function (e) {
              t +=
                "a=rtcp-fb:" +
                n +
                " " +
                e.type +
                (e.parameter && e.parameter.length ? " " + e.parameter : "") +
                "\r\n";
            }),
          t
        );
      }),
      (t.parseSsrcMedia = function (e) {
        var t = e.indexOf(" "),
          n = { ssrc: parseInt(e.substr(7, t - 7), 10) },
          r = e.indexOf(":", t);
        return (
          r > -1
            ? ((n.attribute = e.substr(t + 1, r - t - 1)), (n.value = e.substr(r + 1)))
            : (n.attribute = e.substr(t + 1)),
          n
        );
      }),
      (t.parseSsrcGroup = function (e) {
        var t = e.substr(13).split(" ");
        return {
          semantics: t.shift(),
          ssrcs: t.map(function (e) {
            return parseInt(e, 10);
          }),
        };
      }),
      (t.getMid = function (e) {
        var n = t.matchPrefix(e, "a=mid:")[0];
        if (n) return n.substr(6);
      }),
      (t.parseFingerprint = function (e) {
        var t = e.substr(14).split(" ");
        return { algorithm: t[0].toLowerCase(), value: t[1] };
      }),
      (t.getDtlsParameters = function (e, n) {
        return {
          role: "auto",
          fingerprints: t.matchPrefix(e + n, "a=fingerprint:").map(t.parseFingerprint),
        };
      }),
      (t.writeDtlsParameters = function (e, t) {
        var n = "a=setup:" + t + "\r\n";
        return (
          e.fingerprints.forEach(function (e) {
            n += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n";
          }),
          n
        );
      }),
      (t.parseCryptoLine = function (e) {
        var t = e.substr(9).split(" ");
        return {
          tag: parseInt(t[0], 10),
          cryptoSuite: t[1],
          keyParams: t[2],
          sessionParams: t.slice(3),
        };
      }),
      (t.writeCryptoLine = function (e) {
        return (
          "a=crypto:" +
          e.tag +
          " " +
          e.cryptoSuite +
          " " +
          ("object" == typeof e.keyParams ? t.writeCryptoKeyParams(e.keyParams) : e.keyParams) +
          (e.sessionParams ? " " + e.sessionParams.join(" ") : "") +
          "\r\n"
        );
      }),
      (t.parseCryptoKeyParams = function (e) {
        if (0 !== e.indexOf("inline:")) return null;
        var t = e.substr(7).split("|");
        return {
          keyMethod: "inline",
          keySalt: t[0],
          lifeTime: t[1],
          mkiValue: t[2] ? t[2].split(":")[0] : void 0,
          mkiLength: t[2] ? t[2].split(":")[1] : void 0,
        };
      }),
      (t.writeCryptoKeyParams = function (e) {
        return (
          e.keyMethod +
          ":" +
          e.keySalt +
          (e.lifeTime ? "|" + e.lifeTime : "") +
          (e.mkiValue && e.mkiLength ? "|" + e.mkiValue + ":" + e.mkiLength : "")
        );
      }),
      (t.getCryptoParameters = function (e, n) {
        return t.matchPrefix(e + n, "a=crypto:").map(t.parseCryptoLine);
      }),
      (t.getIceParameters = function (e, n) {
        var r = t.matchPrefix(e + n, "a=ice-ufrag:")[0],
          i = t.matchPrefix(e + n, "a=ice-pwd:")[0];
        return r && i ? { usernameFragment: r.substr(12), password: i.substr(10) } : null;
      }),
      (t.writeIceParameters = function (e) {
        return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n";
      }),
      (t.parseRtpParameters = function (e) {
        for (
          var n = { codecs: [], headerExtensions: [], fecMechanisms: [], rtcp: [] },
            r = t.splitLines(e)[0].split(" "),
            i = 3;
          i < r.length;
          i++
        ) {
          var o = r[i],
            a = t.matchPrefix(e, "a=rtpmap:" + o + " ")[0];
          if (a) {
            var s = t.parseRtpMap(a),
              c = t.matchPrefix(e, "a=fmtp:" + o + " ");
            switch (
              ((s.parameters = c.length ? t.parseFmtp(c[0]) : {}),
              (s.rtcpFeedback = t.matchPrefix(e, "a=rtcp-fb:" + o + " ").map(t.parseRtcpFb)),
              n.codecs.push(s),
              s.name.toUpperCase())
            ) {
              case "RED":
              case "ULPFEC":
                n.fecMechanisms.push(s.name.toUpperCase());
            }
          }
        }
        return (
          t.matchPrefix(e, "a=extmap:").forEach(function (e) {
            n.headerExtensions.push(t.parseExtmap(e));
          }),
          n
        );
      }),
      (t.writeRtpDescription = function (e, n) {
        var r = "";
        (r += "m=" + e + " "),
          (r += n.codecs.length > 0 ? "9" : "0"),
          (r += " UDP/TLS/RTP/SAVPF "),
          (r +=
            n.codecs
              .map(function (e) {
                return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType;
              })
              .join(" ") + "\r\n"),
          (r += "c=IN IP4 0.0.0.0\r\n"),
          (r += "a=rtcp:9 IN IP4 0.0.0.0\r\n"),
          n.codecs.forEach(function (e) {
            (r += t.writeRtpMap(e)), (r += t.writeFmtp(e)), (r += t.writeRtcpFb(e));
          });
        var i = 0;
        return (
          n.codecs.forEach(function (e) {
            e.maxptime > i && (i = e.maxptime);
          }),
          i > 0 && (r += "a=maxptime:" + i + "\r\n"),
          (r += "a=rtcp-mux\r\n"),
          n.headerExtensions &&
            n.headerExtensions.forEach(function (e) {
              r += t.writeExtmap(e);
            }),
          r
        );
      }),
      (t.parseRtpEncodingParameters = function (e) {
        var n,
          r = [],
          i = t.parseRtpParameters(e),
          o = -1 !== i.fecMechanisms.indexOf("RED"),
          a = -1 !== i.fecMechanisms.indexOf("ULPFEC"),
          s = t
            .matchPrefix(e, "a=ssrc:")
            .map(function (e) {
              return t.parseSsrcMedia(e);
            })
            .filter(function (e) {
              return "cname" === e.attribute;
            }),
          c = s.length > 0 && s[0].ssrc,
          u = t.matchPrefix(e, "a=ssrc-group:FID").map(function (e) {
            return e
              .substr(17)
              .split(" ")
              .map(function (e) {
                return parseInt(e, 10);
              });
          });
        u.length > 0 && u[0].length > 1 && u[0][0] === c && (n = u[0][1]),
          i.codecs.forEach(function (e) {
            if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
              var t = { ssrc: c, codecPayloadType: parseInt(e.parameters.apt, 10) };
              c && n && (t.rtx = { ssrc: n }),
                r.push(t),
                o &&
                  (((t = JSON.parse(JSON.stringify(t))).fec = {
                    ssrc: c,
                    mechanism: a ? "red+ulpfec" : "red",
                  }),
                  r.push(t));
            }
          }),
          0 === r.length && c && r.push({ ssrc: c });
        var d = t.matchPrefix(e, "b=");
        return (
          d.length &&
            ((d =
              0 === d[0].indexOf("b=TIAS:")
                ? parseInt(d[0].substr(7), 10)
                : 0 === d[0].indexOf("b=AS:")
                ? 1e3 * parseInt(d[0].substr(5), 10) * 0.95 - 16e3
                : void 0),
            r.forEach(function (e) {
              e.maxBitrate = d;
            })),
          r
        );
      }),
      (t.parseRtcpParameters = function (e) {
        var n = {},
          r = t
            .matchPrefix(e, "a=ssrc:")
            .map(function (e) {
              return t.parseSsrcMedia(e);
            })
            .filter(function (e) {
              return "cname" === e.attribute;
            })[0];
        r && ((n.cname = r.value), (n.ssrc = r.ssrc));
        var i = t.matchPrefix(e, "a=rtcp-rsize");
        (n.reducedSize = i.length > 0), (n.compound = 0 === i.length);
        var o = t.matchPrefix(e, "a=rtcp-mux");
        return (n.mux = o.length > 0), n;
      }),
      (t.parseMsid = function (e) {
        var n,
          r = t.matchPrefix(e, "a=msid:");
        if (1 === r.length) return { stream: (n = r[0].substr(7).split(" "))[0], track: n[1] };
        var i = t
          .matchPrefix(e, "a=ssrc:")
          .map(function (e) {
            return t.parseSsrcMedia(e);
          })
          .filter(function (e) {
            return "msid" === e.attribute;
          });
        return i.length > 0 ? { stream: (n = i[0].value.split(" "))[0], track: n[1] } : void 0;
      }),
      (t.parseSctpDescription = function (e) {
        var n,
          r = t.parseMLine(e),
          i = t.matchPrefix(e, "a=max-message-size:");
        i.length > 0 && (n = parseInt(i[0].substr(19), 10)), isNaN(n) && (n = 65536);
        var o = t.matchPrefix(e, "a=sctp-port:");
        if (o.length > 0)
          return { port: parseInt(o[0].substr(12), 10), protocol: r.fmt, maxMessageSize: n };
        if (t.matchPrefix(e, "a=sctpmap:").length > 0) {
          var a = t.matchPrefix(e, "a=sctpmap:")[0].substr(10).split(" ");
          return { port: parseInt(a[0], 10), protocol: a[1], maxMessageSize: n };
        }
      }),
      (t.writeSctpDescription = function (e, t) {
        var n = [];
        return (
          (n =
            "DTLS/SCTP" !== e.protocol
              ? [
                  "m=" + e.kind + " 9 " + e.protocol + " " + t.protocol + "\r\n",
                  "c=IN IP4 0.0.0.0\r\n",
                  "a=sctp-port:" + t.port + "\r\n",
                ]
              : [
                  "m=" + e.kind + " 9 " + e.protocol + " " + t.port + "\r\n",
                  "c=IN IP4 0.0.0.0\r\n",
                  "a=sctpmap:" + t.port + " " + t.protocol + " 65535\r\n",
                ]),
          void 0 !== t.maxMessageSize && n.push("a=max-message-size:" + t.maxMessageSize + "\r\n"),
          n.join("")
        );
      }),
      (t.generateSessionId = function () {
        return Math.random().toString().substr(2, 21);
      }),
      (t.writeSessionBoilerplate = function (e, n, r) {
        var i = void 0 !== n ? n : 2;
        return (
          "v=0\r\no=" +
          (r || "thisisadapterortc") +
          " " +
          (e || t.generateSessionId()) +
          " " +
          i +
          " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
        );
      }),
      (t.writeMediaSection = function (e, n, r, i) {
        var o = t.writeRtpDescription(e.kind, n);
        if (
          ((o += t.writeIceParameters(e.iceGatherer.getLocalParameters())),
          (o += t.writeDtlsParameters(
            e.dtlsTransport.getLocalParameters(),
            "offer" === r ? "actpass" : "active"
          )),
          (o += "a=mid:" + e.mid + "\r\n"),
          e.direction
            ? (o += "a=" + e.direction + "\r\n")
            : e.rtpSender && e.rtpReceiver
            ? (o += "a=sendrecv\r\n")
            : e.rtpSender
            ? (o += "a=sendonly\r\n")
            : e.rtpReceiver
            ? (o += "a=recvonly\r\n")
            : (o += "a=inactive\r\n"),
          e.rtpSender)
        ) {
          var a = "msid:" + i.id + " " + e.rtpSender.track.id + "\r\n";
          (o += "a=" + a),
            (o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + a),
            e.sendEncodingParameters[0].rtx &&
              ((o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + a),
              (o +=
                "a=ssrc-group:FID " +
                e.sendEncodingParameters[0].ssrc +
                " " +
                e.sendEncodingParameters[0].rtx.ssrc +
                "\r\n"));
        }
        return (
          (o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + t.localCName + "\r\n"),
          e.rtpSender &&
            e.sendEncodingParameters[0].rtx &&
            (o +=
              "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + t.localCName + "\r\n"),
          o
        );
      }),
      (t.getDirection = function (e, n) {
        for (var r = t.splitLines(e), i = 0; i < r.length; i++)
          switch (r[i]) {
            case "a=sendrecv":
            case "a=sendonly":
            case "a=recvonly":
            case "a=inactive":
              return r[i].substr(2);
          }
        return n ? t.getDirection(n) : "sendrecv";
      }),
      (t.getKind = function (e) {
        return t.splitLines(e)[0].split(" ")[0].substr(2);
      }),
      (t.isRejected = function (e) {
        return "0" === e.split(" ", 2)[1];
      }),
      (t.parseMLine = function (e) {
        var n = t.splitLines(e)[0].substr(2).split(" ");
        return { kind: n[0], port: parseInt(n[1], 10), protocol: n[2], fmt: n.slice(3).join(" ") };
      }),
      (t.parseOLine = function (e) {
        var n = t.matchPrefix(e, "o=")[0].substr(2).split(" ");
        return {
          username: n[0],
          sessionId: n[1],
          sessionVersion: parseInt(n[2], 10),
          netType: n[3],
          addressType: n[4],
          address: n[5],
        };
      }),
      (t.isValidSDP = function (e) {
        if ("string" != typeof e || 0 === e.length) return !1;
        for (var n = t.splitLines(e), r = 0; r < n.length; r++)
          if (n[r].length < 2 || "=" !== n[r].charAt(1)) return !1;
        return !0;
      }),
      (e.exports = t);
  });
  function pn(e, t, n, r, i) {
    var o = ln.writeRtpDescription(e.kind, t);
    if (
      ((o += ln.writeIceParameters(e.iceGatherer.getLocalParameters())),
      (o += ln.writeDtlsParameters(
        e.dtlsTransport.getLocalParameters(),
        "offer" === n ? "actpass" : i || "active"
      )),
      (o += "a=mid:" + e.mid + "\r\n"),
      e.rtpSender && e.rtpReceiver
        ? (o += "a=sendrecv\r\n")
        : e.rtpSender
        ? (o += "a=sendonly\r\n")
        : e.rtpReceiver
        ? (o += "a=recvonly\r\n")
        : (o += "a=inactive\r\n"),
      e.rtpSender)
    ) {
      var a = e.rtpSender._initialTrackId || e.rtpSender.track.id;
      e.rtpSender._initialTrackId = a;
      var s = "msid:" + (r ? r.id : "-") + " " + a + "\r\n";
      (o += "a=" + s),
        (o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + s),
        e.sendEncodingParameters[0].rtx &&
          ((o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + s),
          (o +=
            "a=ssrc-group:FID " +
            e.sendEncodingParameters[0].ssrc +
            " " +
            e.sendEncodingParameters[0].rtx.ssrc +
            "\r\n"));
    }
    return (
      (o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + ln.localCName + "\r\n"),
      e.rtpSender &&
        e.sendEncodingParameters[0].rtx &&
        (o +=
          "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + ln.localCName + "\r\n"),
      o
    );
  }
  function hn(e, t) {
    var n = { codecs: [], headerExtensions: [], fecMechanisms: [] },
      r = function (e, t) {
        e = parseInt(e, 10);
        for (var n = 0; n < t.length; n++)
          if (t[n].payloadType === e || t[n].preferredPayloadType === e) return t[n];
      },
      i = function (e, t, n, i) {
        var o = r(e.parameters.apt, n),
          a = r(t.parameters.apt, i);
        return o && a && o.name.toLowerCase() === a.name.toLowerCase();
      };
    return (
      e.codecs.forEach(function (r) {
        for (var o = 0; o < t.codecs.length; o++) {
          var a = t.codecs[o];
          if (r.name.toLowerCase() === a.name.toLowerCase() && r.clockRate === a.clockRate) {
            if (
              "rtx" === r.name.toLowerCase() &&
              r.parameters &&
              a.parameters.apt &&
              !i(r, a, e.codecs, t.codecs)
            )
              continue;
            ((a = JSON.parse(JSON.stringify(a))).numChannels = Math.min(
              r.numChannels,
              a.numChannels
            )),
              n.codecs.push(a),
              (a.rtcpFeedback = a.rtcpFeedback.filter(function (e) {
                for (var t = 0; t < r.rtcpFeedback.length; t++)
                  if (
                    r.rtcpFeedback[t].type === e.type &&
                    r.rtcpFeedback[t].parameter === e.parameter
                  )
                    return !0;
                return !1;
              }));
            break;
          }
        }
      }),
      e.headerExtensions.forEach(function (e) {
        for (var r = 0; r < t.headerExtensions.length; r++) {
          var i = t.headerExtensions[r];
          if (e.uri === i.uri) {
            n.headerExtensions.push(i);
            break;
          }
        }
      }),
      n
    );
  }
  function fn(e, t, n) {
    return (
      -1 !==
      {
        offer: {
          setLocalDescription: ["stable", "have-local-offer"],
          setRemoteDescription: ["stable", "have-remote-offer"],
        },
        answer: {
          setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
          setRemoteDescription: ["have-local-offer", "have-remote-pranswer"],
        },
      }[t][e].indexOf(n)
    );
  }
  function mn(e, t) {
    var n = e.getRemoteCandidates().find(function (e) {
      return (
        t.foundation === e.foundation &&
        t.ip === e.ip &&
        t.port === e.port &&
        t.priority === e.priority &&
        t.protocol === e.protocol &&
        t.type === e.type
      );
    });
    return n || e.addRemoteCandidate(t), !n;
  }
  function vn(e, t) {
    var n = new Error(t);
    return (
      (n.name = e),
      (n.code = {
        NotSupportedError: 9,
        InvalidStateError: 11,
        InvalidAccessError: 15,
        TypeError: void 0,
        OperationError: void 0,
      }[e]),
      n
    );
  }
  var gn = function (e, t) {
    function n(t, n) {
      n.addTrack(t), n.dispatchEvent(new e.MediaStreamTrackEvent("addtrack", { track: t }));
    }
    function r(t, n, r, i) {
      var o = new Event("track");
      (o.track = n),
        (o.receiver = r),
        (o.transceiver = { receiver: r }),
        (o.streams = i),
        e.setTimeout(function () {
          t._dispatchEvent("track", o);
        });
    }
    var i = function (n) {
      var r = this,
        i = document.createDocumentFragment();
      if (
        (["addEventListener", "removeEventListener", "dispatchEvent"].forEach(function (e) {
          r[e] = i[e].bind(i);
        }),
        (this.canTrickleIceCandidates = null),
        (this.needNegotiation = !1),
        (this.localStreams = []),
        (this.remoteStreams = []),
        (this._localDescription = null),
        (this._remoteDescription = null),
        (this.signalingState = "stable"),
        (this.iceConnectionState = "new"),
        (this.connectionState = "new"),
        (this.iceGatheringState = "new"),
        (n = JSON.parse(JSON.stringify(n || {}))),
        (this.usingBundle = "max-bundle" === n.bundlePolicy),
        "negotiate" === n.rtcpMuxPolicy)
      )
        throw vn("NotSupportedError", "rtcpMuxPolicy 'negotiate' is not supported");
      switch ((n.rtcpMuxPolicy || (n.rtcpMuxPolicy = "require"), n.iceTransportPolicy)) {
        case "all":
        case "relay":
          break;
        default:
          n.iceTransportPolicy = "all";
      }
      switch (n.bundlePolicy) {
        case "balanced":
        case "max-compat":
        case "max-bundle":
          break;
        default:
          n.bundlePolicy = "balanced";
      }
      if (
        ((n.iceServers = (function (e, t) {
          var n = !1;
          return (e = JSON.parse(JSON.stringify(e))).filter(function (e) {
            if (e && (e.urls || e.url)) {
              var r = e.urls || e.url;
              e.url && !e.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
              var i = "string" == typeof r;
              return (
                i && (r = [r]),
                (r = r.filter(function (e) {
                  return 0 === e.indexOf("turn:") &&
                    -1 !== e.indexOf("transport=udp") &&
                    -1 === e.indexOf("turn:[") &&
                    !n
                    ? ((n = !0), !0)
                    : 0 === e.indexOf("stun:") && t >= 14393 && -1 === e.indexOf("?transport=udp");
                })),
                delete e.url,
                (e.urls = i ? r[0] : r),
                !!r.length
              );
            }
          });
        })(n.iceServers || [], t)),
        (this._iceGatherers = []),
        n.iceCandidatePoolSize)
      )
        for (var o = n.iceCandidatePoolSize; o > 0; o--)
          this._iceGatherers.push(
            new e.RTCIceGatherer({ iceServers: n.iceServers, gatherPolicy: n.iceTransportPolicy })
          );
      else n.iceCandidatePoolSize = 0;
      (this._config = n),
        (this.transceivers = []),
        (this._sdpSessionId = ln.generateSessionId()),
        (this._sdpSessionVersion = 0),
        (this._dtlsRole = void 0),
        (this._isClosed = !1);
    };
    Object.defineProperty(i.prototype, "localDescription", {
      configurable: !0,
      get: function () {
        return this._localDescription;
      },
    }),
      Object.defineProperty(i.prototype, "remoteDescription", {
        configurable: !0,
        get: function () {
          return this._remoteDescription;
        },
      }),
      (i.prototype.onicecandidate = null),
      (i.prototype.onaddstream = null),
      (i.prototype.ontrack = null),
      (i.prototype.onremovestream = null),
      (i.prototype.onsignalingstatechange = null),
      (i.prototype.oniceconnectionstatechange = null),
      (i.prototype.onconnectionstatechange = null),
      (i.prototype.onicegatheringstatechange = null),
      (i.prototype.onnegotiationneeded = null),
      (i.prototype.ondatachannel = null),
      (i.prototype._dispatchEvent = function (e, t) {
        this._isClosed ||
          (this.dispatchEvent(t), "function" == typeof this["on" + e] && this["on" + e](t));
      }),
      (i.prototype._emitGatheringStateChange = function () {
        var e = new Event("icegatheringstatechange");
        this._dispatchEvent("icegatheringstatechange", e);
      }),
      (i.prototype.getConfiguration = function () {
        return this._config;
      }),
      (i.prototype.getLocalStreams = function () {
        return this.localStreams;
      }),
      (i.prototype.getRemoteStreams = function () {
        return this.remoteStreams;
      }),
      (i.prototype._createTransceiver = function (e, t) {
        var n = this.transceivers.length > 0,
          r = {
            track: null,
            iceGatherer: null,
            iceTransport: null,
            dtlsTransport: null,
            localCapabilities: null,
            remoteCapabilities: null,
            rtpSender: null,
            rtpReceiver: null,
            kind: e,
            mid: null,
            sendEncodingParameters: null,
            recvEncodingParameters: null,
            stream: null,
            associatedRemoteMediaStreams: [],
            wantReceive: !0,
          };
        if (this.usingBundle && n)
          (r.iceTransport = this.transceivers[0].iceTransport),
            (r.dtlsTransport = this.transceivers[0].dtlsTransport);
        else {
          var i = this._createIceAndDtlsTransports();
          (r.iceTransport = i.iceTransport), (r.dtlsTransport = i.dtlsTransport);
        }
        return t || this.transceivers.push(r), r;
      }),
      (i.prototype.addTrack = function (t, n) {
        if (this._isClosed)
          throw vn("InvalidStateError", "Attempted to call addTrack on a closed peerconnection.");
        var r;
        if (
          this.transceivers.find(function (e) {
            return e.track === t;
          })
        )
          throw vn("InvalidAccessError", "Track already exists.");
        for (var i = 0; i < this.transceivers.length; i++)
          this.transceivers[i].track ||
            this.transceivers[i].kind !== t.kind ||
            (r = this.transceivers[i]);
        return (
          r || (r = this._createTransceiver(t.kind)),
          this._maybeFireNegotiationNeeded(),
          -1 === this.localStreams.indexOf(n) && this.localStreams.push(n),
          (r.track = t),
          (r.stream = n),
          (r.rtpSender = new e.RTCRtpSender(t, r.dtlsTransport)),
          r.rtpSender
        );
      }),
      (i.prototype.addStream = function (e) {
        var n = this;
        if (t >= 15025)
          e.getTracks().forEach(function (t) {
            n.addTrack(t, e);
          });
        else {
          var r = e.clone();
          e.getTracks().forEach(function (e, t) {
            var n = r.getTracks()[t];
            e.addEventListener("enabled", function (e) {
              n.enabled = e.enabled;
            });
          }),
            r.getTracks().forEach(function (e) {
              n.addTrack(e, r);
            });
        }
      }),
      (i.prototype.removeTrack = function (t) {
        if (this._isClosed)
          throw vn(
            "InvalidStateError",
            "Attempted to call removeTrack on a closed peerconnection."
          );
        if (!(t instanceof e.RTCRtpSender))
          throw new TypeError(
            "Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender."
          );
        var n = this.transceivers.find(function (e) {
          return e.rtpSender === t;
        });
        if (!n) throw vn("InvalidAccessError", "Sender was not created by this connection.");
        var r = n.stream;
        n.rtpSender.stop(),
          (n.rtpSender = null),
          (n.track = null),
          (n.stream = null),
          -1 ===
            this.transceivers
              .map(function (e) {
                return e.stream;
              })
              .indexOf(r) &&
            this.localStreams.indexOf(r) > -1 &&
            this.localStreams.splice(this.localStreams.indexOf(r), 1),
          this._maybeFireNegotiationNeeded();
      }),
      (i.prototype.removeStream = function (e) {
        var t = this;
        e.getTracks().forEach(function (e) {
          var n = t.getSenders().find(function (t) {
            return t.track === e;
          });
          n && t.removeTrack(n);
        });
      }),
      (i.prototype.getSenders = function () {
        return this.transceivers
          .filter(function (e) {
            return !!e.rtpSender;
          })
          .map(function (e) {
            return e.rtpSender;
          });
      }),
      (i.prototype.getReceivers = function () {
        return this.transceivers
          .filter(function (e) {
            return !!e.rtpReceiver;
          })
          .map(function (e) {
            return e.rtpReceiver;
          });
      }),
      (i.prototype._createIceGatherer = function (t, n) {
        var r = this;
        if (n && t > 0) return this.transceivers[0].iceGatherer;
        if (this._iceGatherers.length) return this._iceGatherers.shift();
        var i = new e.RTCIceGatherer({
          iceServers: this._config.iceServers,
          gatherPolicy: this._config.iceTransportPolicy,
        });
        return (
          Object.defineProperty(i, "state", { value: "new", writable: !0 }),
          (this.transceivers[t].bufferedCandidateEvents = []),
          (this.transceivers[t].bufferCandidates = function (e) {
            var n = !e.candidate || 0 === Object.keys(e.candidate).length;
            (i.state = n ? "completed" : "gathering"),
              null !== r.transceivers[t].bufferedCandidateEvents &&
                r.transceivers[t].bufferedCandidateEvents.push(e);
          }),
          i.addEventListener("localcandidate", this.transceivers[t].bufferCandidates),
          i
        );
      }),
      (i.prototype._gather = function (t, n) {
        var r = this,
          i = this.transceivers[n].iceGatherer;
        if (!i.onlocalcandidate) {
          var o = this.transceivers[n].bufferedCandidateEvents;
          (this.transceivers[n].bufferedCandidateEvents = null),
            i.removeEventListener("localcandidate", this.transceivers[n].bufferCandidates),
            (i.onlocalcandidate = function (e) {
              if (!(r.usingBundle && n > 0)) {
                var o = new Event("icecandidate");
                o.candidate = { sdpMid: t, sdpMLineIndex: n };
                var a = e.candidate,
                  s = !a || 0 === Object.keys(a).length;
                if (s) ("new" !== i.state && "gathering" !== i.state) || (i.state = "completed");
                else {
                  "new" === i.state && (i.state = "gathering"),
                    (a.component = 1),
                    (a.ufrag = i.getLocalParameters().usernameFragment);
                  var c = ln.writeCandidate(a);
                  (o.candidate = Object.assign(o.candidate, ln.parseCandidate(c))),
                    (o.candidate.candidate = c),
                    (o.candidate.toJSON = function () {
                      return {
                        candidate: o.candidate.candidate,
                        sdpMid: o.candidate.sdpMid,
                        sdpMLineIndex: o.candidate.sdpMLineIndex,
                        usernameFragment: o.candidate.usernameFragment,
                      };
                    });
                }
                var u = ln.getMediaSections(r._localDescription.sdp);
                (u[o.candidate.sdpMLineIndex] += s
                  ? "a=end-of-candidates\r\n"
                  : "a=" + o.candidate.candidate + "\r\n"),
                  (r._localDescription.sdp =
                    ln.getDescription(r._localDescription.sdp) + u.join(""));
                var d = r.transceivers.every(function (e) {
                  return e.iceGatherer && "completed" === e.iceGatherer.state;
                });
                "gathering" !== r.iceGatheringState &&
                  ((r.iceGatheringState = "gathering"), r._emitGatheringStateChange()),
                  s || r._dispatchEvent("icecandidate", o),
                  d &&
                    (r._dispatchEvent("icecandidate", new Event("icecandidate")),
                    (r.iceGatheringState = "complete"),
                    r._emitGatheringStateChange());
              }
            }),
            e.setTimeout(function () {
              o.forEach(function (e) {
                i.onlocalcandidate(e);
              });
            }, 0);
        }
      }),
      (i.prototype._createIceAndDtlsTransports = function () {
        var t = this,
          n = new e.RTCIceTransport(null);
        n.onicestatechange = function () {
          t._updateIceConnectionState(), t._updateConnectionState();
        };
        var r = new e.RTCDtlsTransport(n);
        return (
          (r.ondtlsstatechange = function () {
            t._updateConnectionState();
          }),
          (r.onerror = function () {
            Object.defineProperty(r, "state", { value: "failed", writable: !0 }),
              t._updateConnectionState();
          }),
          { iceTransport: n, dtlsTransport: r }
        );
      }),
      (i.prototype._disposeIceAndDtlsTransports = function (e) {
        var t = this.transceivers[e].iceGatherer;
        t && (delete t.onlocalcandidate, delete this.transceivers[e].iceGatherer);
        var n = this.transceivers[e].iceTransport;
        n && (delete n.onicestatechange, delete this.transceivers[e].iceTransport);
        var r = this.transceivers[e].dtlsTransport;
        r &&
          (delete r.ondtlsstatechange, delete r.onerror, delete this.transceivers[e].dtlsTransport);
      }),
      (i.prototype._transceive = function (e, n, r) {
        var i = hn(e.localCapabilities, e.remoteCapabilities);
        n &&
          e.rtpSender &&
          ((i.encodings = e.sendEncodingParameters),
          (i.rtcp = { cname: ln.localCName, compound: e.rtcpParameters.compound }),
          e.recvEncodingParameters.length && (i.rtcp.ssrc = e.recvEncodingParameters[0].ssrc),
          e.rtpSender.send(i)),
          r &&
            e.rtpReceiver &&
            i.codecs.length > 0 &&
            ("video" === e.kind &&
              e.recvEncodingParameters &&
              t < 15019 &&
              e.recvEncodingParameters.forEach(function (e) {
                delete e.rtx;
              }),
            e.recvEncodingParameters.length
              ? (i.encodings = e.recvEncodingParameters)
              : (i.encodings = [{}]),
            (i.rtcp = { compound: e.rtcpParameters.compound }),
            e.rtcpParameters.cname && (i.rtcp.cname = e.rtcpParameters.cname),
            e.sendEncodingParameters.length && (i.rtcp.ssrc = e.sendEncodingParameters[0].ssrc),
            e.rtpReceiver.receive(i));
      }),
      (i.prototype.setLocalDescription = function (e) {
        var t,
          n,
          r = this;
        if (-1 === ["offer", "answer"].indexOf(e.type))
          return Promise.reject(vn("TypeError", 'Unsupported type "' + e.type + '"'));
        if (!fn("setLocalDescription", e.type, r.signalingState) || r._isClosed)
          return Promise.reject(
            vn("InvalidStateError", "Can not set local " + e.type + " in state " + r.signalingState)
          );
        if ("offer" === e.type)
          (t = ln.splitSections(e.sdp)),
            (n = t.shift()),
            t.forEach(function (e, t) {
              var n = ln.parseRtpParameters(e);
              r.transceivers[t].localCapabilities = n;
            }),
            r.transceivers.forEach(function (e, t) {
              r._gather(e.mid, t);
            });
        else if ("answer" === e.type) {
          (t = ln.splitSections(r._remoteDescription.sdp)), (n = t.shift());
          var i = ln.matchPrefix(n, "a=ice-lite").length > 0;
          t.forEach(function (e, t) {
            var o = r.transceivers[t],
              a = o.iceGatherer,
              s = o.iceTransport,
              c = o.dtlsTransport,
              u = o.localCapabilities,
              d = o.remoteCapabilities;
            if (
              !(ln.isRejected(e) && 0 === ln.matchPrefix(e, "a=bundle-only").length) &&
              !o.rejected
            ) {
              var l = ln.getIceParameters(e, n),
                p = ln.getDtlsParameters(e, n);
              i && (p.role = "server"),
                (r.usingBundle && 0 !== t) ||
                  (r._gather(o.mid, t),
                  "new" === s.state && s.start(a, l, i ? "controlling" : "controlled"),
                  "new" === c.state && c.start(p));
              var h = hn(u, d);
              r._transceive(o, h.codecs.length > 0, !1);
            }
          });
        }
        return (
          (r._localDescription = { type: e.type, sdp: e.sdp }),
          "offer" === e.type
            ? r._updateSignalingState("have-local-offer")
            : r._updateSignalingState("stable"),
          Promise.resolve()
        );
      }),
      (i.prototype.setRemoteDescription = function (i) {
        var o = this;
        if (-1 === ["offer", "answer"].indexOf(i.type))
          return Promise.reject(vn("TypeError", 'Unsupported type "' + i.type + '"'));
        if (!fn("setRemoteDescription", i.type, o.signalingState) || o._isClosed)
          return Promise.reject(
            vn(
              "InvalidStateError",
              "Can not set remote " + i.type + " in state " + o.signalingState
            )
          );
        var a = {};
        o.remoteStreams.forEach(function (e) {
          a[e.id] = e;
        });
        var s = [],
          c = ln.splitSections(i.sdp),
          u = c.shift(),
          d = ln.matchPrefix(u, "a=ice-lite").length > 0,
          l = ln.matchPrefix(u, "a=group:BUNDLE ").length > 0;
        o.usingBundle = l;
        var p = ln.matchPrefix(u, "a=ice-options:")[0];
        return (
          (o.canTrickleIceCandidates = !!p && p.substr(14).split(" ").indexOf("trickle") >= 0),
          c.forEach(function (r, c) {
            var p = ln.splitLines(r),
              h = ln.getKind(r),
              f = ln.isRejected(r) && 0 === ln.matchPrefix(r, "a=bundle-only").length,
              m = p[0].substr(2).split(" ")[2],
              v = ln.getDirection(r, u),
              g = ln.parseMsid(r),
              _ = ln.getMid(r) || ln.generateIdentifier();
            if (f || ("application" === h && ("DTLS/SCTP" === m || "UDP/DTLS/SCTP" === m)))
              o.transceivers[c] = { mid: _, kind: h, protocol: m, rejected: !0 };
            else {
              var y, S, b, k, T, R, w, I, C;
              !f &&
                o.transceivers[c] &&
                o.transceivers[c].rejected &&
                (o.transceivers[c] = o._createTransceiver(h, !0));
              var E,
                x,
                P = ln.parseRtpParameters(r);
              f ||
                ((E = ln.getIceParameters(r, u)),
                ((x = ln.getDtlsParameters(r, u)).role = "client")),
                (w = ln.parseRtpEncodingParameters(r));
              var A = ln.parseRtcpParameters(r),
                D = ln.matchPrefix(r, "a=end-of-candidates", u).length > 0,
                O = ln
                  .matchPrefix(r, "a=candidate:")
                  .map(function (e) {
                    return ln.parseCandidate(e);
                  })
                  .filter(function (e) {
                    return 1 === e.component;
                  });
              if (
                (("offer" === i.type || "answer" === i.type) &&
                  !f &&
                  l &&
                  c > 0 &&
                  o.transceivers[c] &&
                  (o._disposeIceAndDtlsTransports(c),
                  (o.transceivers[c].iceGatherer = o.transceivers[0].iceGatherer),
                  (o.transceivers[c].iceTransport = o.transceivers[0].iceTransport),
                  (o.transceivers[c].dtlsTransport = o.transceivers[0].dtlsTransport),
                  o.transceivers[c].rtpSender &&
                    o.transceivers[c].rtpSender.setTransport(o.transceivers[0].dtlsTransport),
                  o.transceivers[c].rtpReceiver &&
                    o.transceivers[c].rtpReceiver.setTransport(o.transceivers[0].dtlsTransport)),
                "offer" !== i.type || f)
              ) {
                if ("answer" === i.type && !f) {
                  (S = (y = o.transceivers[c]).iceGatherer),
                    (b = y.iceTransport),
                    (k = y.dtlsTransport),
                    (T = y.rtpReceiver),
                    (R = y.sendEncodingParameters),
                    (I = y.localCapabilities),
                    (o.transceivers[c].recvEncodingParameters = w),
                    (o.transceivers[c].remoteCapabilities = P),
                    (o.transceivers[c].rtcpParameters = A),
                    O.length &&
                      "new" === b.state &&
                      ((!d && !D) || (l && 0 !== c)
                        ? O.forEach(function (e) {
                            mn(y.iceTransport, e);
                          })
                        : b.setRemoteCandidates(O)),
                    (l && 0 !== c) ||
                      ("new" === b.state && b.start(S, E, "controlling"),
                      "new" === k.state && k.start(x)),
                    !hn(y.localCapabilities, y.remoteCapabilities).codecs.filter(function (e) {
                      return "rtx" === e.name.toLowerCase();
                    }).length &&
                      y.sendEncodingParameters[0].rtx &&
                      delete y.sendEncodingParameters[0].rtx,
                    o._transceive(
                      y,
                      "sendrecv" === v || "recvonly" === v,
                      "sendrecv" === v || "sendonly" === v
                    ),
                    !T || ("sendrecv" !== v && "sendonly" !== v)
                      ? delete y.rtpReceiver
                      : ((C = T.track),
                        g
                          ? (a[g.stream] || (a[g.stream] = new e.MediaStream()),
                            n(C, a[g.stream]),
                            s.push([C, T, a[g.stream]]))
                          : (a.default || (a.default = new e.MediaStream()),
                            n(C, a.default),
                            s.push([C, T, a.default])));
                }
              } else {
                ((y = o.transceivers[c] || o._createTransceiver(h)).mid = _),
                  y.iceGatherer || (y.iceGatherer = o._createIceGatherer(c, l)),
                  O.length &&
                    "new" === y.iceTransport.state &&
                    (!D || (l && 0 !== c)
                      ? O.forEach(function (e) {
                          mn(y.iceTransport, e);
                        })
                      : y.iceTransport.setRemoteCandidates(O)),
                  (I = e.RTCRtpReceiver.getCapabilities(h)),
                  t < 15019 &&
                    (I.codecs = I.codecs.filter(function (e) {
                      return "rtx" !== e.name;
                    })),
                  (R = y.sendEncodingParameters || [{ ssrc: 1001 * (2 * c + 2) }]);
                var N,
                  M = !1;
                if ("sendrecv" === v || "sendonly" === v) {
                  if (
                    ((M = !y.rtpReceiver),
                    (T = y.rtpReceiver || new e.RTCRtpReceiver(y.dtlsTransport, h)),
                    M)
                  )
                    (C = T.track),
                      (g && "-" === g.stream) ||
                        (g
                          ? (a[g.stream] ||
                              ((a[g.stream] = new e.MediaStream()),
                              Object.defineProperty(a[g.stream], "id", {
                                get: function () {
                                  return g.stream;
                                },
                              })),
                            Object.defineProperty(C, "id", {
                              get: function () {
                                return g.track;
                              },
                            }),
                            (N = a[g.stream]))
                          : (a.default || (a.default = new e.MediaStream()), (N = a.default))),
                      N && (n(C, N), y.associatedRemoteMediaStreams.push(N)),
                      s.push([C, T, N]);
                } else
                  y.rtpReceiver &&
                    y.rtpReceiver.track &&
                    (y.associatedRemoteMediaStreams.forEach(function (t) {
                      var n = t.getTracks().find(function (e) {
                        return e.id === y.rtpReceiver.track.id;
                      });
                      n &&
                        (function (t, n) {
                          n.removeTrack(t),
                            n.dispatchEvent(
                              new e.MediaStreamTrackEvent("removetrack", { track: t })
                            );
                        })(n, t);
                    }),
                    (y.associatedRemoteMediaStreams = []));
                (y.localCapabilities = I),
                  (y.remoteCapabilities = P),
                  (y.rtpReceiver = T),
                  (y.rtcpParameters = A),
                  (y.sendEncodingParameters = R),
                  (y.recvEncodingParameters = w),
                  o._transceive(o.transceivers[c], !1, M);
              }
            }
          }),
          void 0 === o._dtlsRole && (o._dtlsRole = "offer" === i.type ? "active" : "passive"),
          (o._remoteDescription = { type: i.type, sdp: i.sdp }),
          "offer" === i.type
            ? o._updateSignalingState("have-remote-offer")
            : o._updateSignalingState("stable"),
          Object.keys(a).forEach(function (t) {
            var n = a[t];
            if (n.getTracks().length) {
              if (-1 === o.remoteStreams.indexOf(n)) {
                o.remoteStreams.push(n);
                var i = new Event("addstream");
                (i.stream = n),
                  e.setTimeout(function () {
                    o._dispatchEvent("addstream", i);
                  });
              }
              s.forEach(function (e) {
                var t = e[0],
                  i = e[1];
                n.id === e[2].id && r(o, t, i, [n]);
              });
            }
          }),
          s.forEach(function (e) {
            e[2] || r(o, e[0], e[1], []);
          }),
          e.setTimeout(function () {
            o &&
              o.transceivers &&
              o.transceivers.forEach(function (e) {
                e.iceTransport &&
                  "new" === e.iceTransport.state &&
                  e.iceTransport.getRemoteCandidates().length > 0 &&
                  (console.warn(
                    "Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"
                  ),
                  e.iceTransport.addRemoteCandidate({}));
              });
          }, 4e3),
          Promise.resolve()
        );
      }),
      (i.prototype.close = function () {
        this.transceivers.forEach(function (e) {
          e.iceTransport && e.iceTransport.stop(),
            e.dtlsTransport && e.dtlsTransport.stop(),
            e.rtpSender && e.rtpSender.stop(),
            e.rtpReceiver && e.rtpReceiver.stop();
        }),
          (this._isClosed = !0),
          this._updateSignalingState("closed");
      }),
      (i.prototype._updateSignalingState = function (e) {
        this.signalingState = e;
        var t = new Event("signalingstatechange");
        this._dispatchEvent("signalingstatechange", t);
      }),
      (i.prototype._maybeFireNegotiationNeeded = function () {
        var t = this;
        "stable" === this.signalingState &&
          !0 !== this.needNegotiation &&
          ((this.needNegotiation = !0),
          e.setTimeout(function () {
            if (t.needNegotiation) {
              t.needNegotiation = !1;
              var e = new Event("negotiationneeded");
              t._dispatchEvent("negotiationneeded", e);
            }
          }, 0));
      }),
      (i.prototype._updateIceConnectionState = function () {
        var e,
          t = {
            new: 0,
            closed: 0,
            checking: 0,
            connected: 0,
            completed: 0,
            disconnected: 0,
            failed: 0,
          };
        if (
          (this.transceivers.forEach(function (e) {
            e.iceTransport && !e.rejected && t[e.iceTransport.state]++;
          }),
          (e = "new"),
          t.failed > 0
            ? (e = "failed")
            : t.checking > 0
            ? (e = "checking")
            : t.disconnected > 0
            ? (e = "disconnected")
            : t.new > 0
            ? (e = "new")
            : t.connected > 0
            ? (e = "connected")
            : t.completed > 0 && (e = "completed"),
          e !== this.iceConnectionState)
        ) {
          this.iceConnectionState = e;
          var n = new Event("iceconnectionstatechange");
          this._dispatchEvent("iceconnectionstatechange", n);
        }
      }),
      (i.prototype._updateConnectionState = function () {
        var e,
          t = {
            new: 0,
            closed: 0,
            connecting: 0,
            connected: 0,
            completed: 0,
            disconnected: 0,
            failed: 0,
          };
        if (
          (this.transceivers.forEach(function (e) {
            e.iceTransport &&
              e.dtlsTransport &&
              !e.rejected &&
              (t[e.iceTransport.state]++, t[e.dtlsTransport.state]++);
          }),
          (t.connected += t.completed),
          (e = "new"),
          t.failed > 0
            ? (e = "failed")
            : t.connecting > 0
            ? (e = "connecting")
            : t.disconnected > 0
            ? (e = "disconnected")
            : t.new > 0
            ? (e = "new")
            : t.connected > 0 && (e = "connected"),
          e !== this.connectionState)
        ) {
          this.connectionState = e;
          var n = new Event("connectionstatechange");
          this._dispatchEvent("connectionstatechange", n);
        }
      }),
      (i.prototype.createOffer = function () {
        var n = this;
        if (n._isClosed)
          return Promise.reject(vn("InvalidStateError", "Can not call createOffer after close"));
        var r = n.transceivers.filter(function (e) {
            return "audio" === e.kind;
          }).length,
          i = n.transceivers.filter(function (e) {
            return "video" === e.kind;
          }).length,
          o = arguments[0];
        if (o) {
          if (o.mandatory || o.optional)
            throw new TypeError("Legacy mandatory/optional constraints not supported.");
          void 0 !== o.offerToReceiveAudio &&
            (r =
              !0 === o.offerToReceiveAudio
                ? 1
                : !1 === o.offerToReceiveAudio
                ? 0
                : o.offerToReceiveAudio),
            void 0 !== o.offerToReceiveVideo &&
              (i =
                !0 === o.offerToReceiveVideo
                  ? 1
                  : !1 === o.offerToReceiveVideo
                  ? 0
                  : o.offerToReceiveVideo);
        }
        for (
          n.transceivers.forEach(function (e) {
            "audio" === e.kind
              ? --r < 0 && (e.wantReceive = !1)
              : "video" === e.kind && --i < 0 && (e.wantReceive = !1);
          });
          r > 0 || i > 0;

        )
          r > 0 && (n._createTransceiver("audio"), r--),
            i > 0 && (n._createTransceiver("video"), i--);
        var a = ln.writeSessionBoilerplate(n._sdpSessionId, n._sdpSessionVersion++);
        n.transceivers.forEach(function (r, i) {
          var o = r.track,
            a = r.kind,
            s = r.mid || ln.generateIdentifier();
          (r.mid = s), r.iceGatherer || (r.iceGatherer = n._createIceGatherer(i, n.usingBundle));
          var c = e.RTCRtpSender.getCapabilities(a);
          t < 15019 &&
            (c.codecs = c.codecs.filter(function (e) {
              return "rtx" !== e.name;
            })),
            c.codecs.forEach(function (e) {
              "H264" === e.name &&
                void 0 === e.parameters["level-asymmetry-allowed"] &&
                (e.parameters["level-asymmetry-allowed"] = "1"),
                r.remoteCapabilities &&
                  r.remoteCapabilities.codecs &&
                  r.remoteCapabilities.codecs.forEach(function (t) {
                    e.name.toLowerCase() === t.name.toLowerCase() &&
                      e.clockRate === t.clockRate &&
                      (e.preferredPayloadType = t.payloadType);
                  });
            }),
            c.headerExtensions.forEach(function (e) {
              ((r.remoteCapabilities && r.remoteCapabilities.headerExtensions) || []).forEach(
                function (t) {
                  e.uri === t.uri && (e.id = t.id);
                }
              );
            });
          var u = r.sendEncodingParameters || [{ ssrc: 1001 * (2 * i + 1) }];
          o && t >= 15019 && "video" === a && !u[0].rtx && (u[0].rtx = { ssrc: u[0].ssrc + 1 }),
            r.wantReceive && (r.rtpReceiver = new e.RTCRtpReceiver(r.dtlsTransport, a)),
            (r.localCapabilities = c),
            (r.sendEncodingParameters = u);
        }),
          "max-compat" !== n._config.bundlePolicy &&
            (a +=
              "a=group:BUNDLE " +
              n.transceivers
                .map(function (e) {
                  return e.mid;
                })
                .join(" ") +
              "\r\n"),
          (a += "a=ice-options:trickle\r\n"),
          n.transceivers.forEach(function (e, t) {
            (a += pn(e, e.localCapabilities, "offer", e.stream, n._dtlsRole)),
              (a += "a=rtcp-rsize\r\n"),
              !e.iceGatherer ||
                "new" === n.iceGatheringState ||
                (0 !== t && n.usingBundle) ||
                (e.iceGatherer.getLocalCandidates().forEach(function (e) {
                  (e.component = 1), (a += "a=" + ln.writeCandidate(e) + "\r\n");
                }),
                "completed" === e.iceGatherer.state && (a += "a=end-of-candidates\r\n"));
          });
        var s = new e.RTCSessionDescription({ type: "offer", sdp: a });
        return Promise.resolve(s);
      }),
      (i.prototype.createAnswer = function () {
        var n = this;
        if (n._isClosed)
          return Promise.reject(vn("InvalidStateError", "Can not call createAnswer after close"));
        if ("have-remote-offer" !== n.signalingState && "have-local-pranswer" !== n.signalingState)
          return Promise.reject(
            vn(
              "InvalidStateError",
              "Can not call createAnswer in signalingState " + n.signalingState
            )
          );
        var r = ln.writeSessionBoilerplate(n._sdpSessionId, n._sdpSessionVersion++);
        n.usingBundle &&
          (r +=
            "a=group:BUNDLE " +
            n.transceivers
              .map(function (e) {
                return e.mid;
              })
              .join(" ") +
            "\r\n"),
          (r += "a=ice-options:trickle\r\n");
        var i = ln.getMediaSections(n._remoteDescription.sdp).length;
        n.transceivers.forEach(function (e, o) {
          if (!(o + 1 > i)) {
            if (e.rejected)
              return (
                "application" === e.kind
                  ? "DTLS/SCTP" === e.protocol
                    ? (r += "m=application 0 DTLS/SCTP 5000\r\n")
                    : (r += "m=application 0 " + e.protocol + " webrtc-datachannel\r\n")
                  : "audio" === e.kind
                  ? (r += "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n")
                  : "video" === e.kind &&
                    (r += "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"),
                void (r += "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + e.mid + "\r\n")
              );
            var a;
            if (e.stream)
              "audio" === e.kind
                ? (a = e.stream.getAudioTracks()[0])
                : "video" === e.kind && (a = e.stream.getVideoTracks()[0]),
                a &&
                  t >= 15019 &&
                  "video" === e.kind &&
                  !e.sendEncodingParameters[0].rtx &&
                  (e.sendEncodingParameters[0].rtx = {
                    ssrc: e.sendEncodingParameters[0].ssrc + 1,
                  });
            var s = hn(e.localCapabilities, e.remoteCapabilities);
            !s.codecs.filter(function (e) {
              return "rtx" === e.name.toLowerCase();
            }).length &&
              e.sendEncodingParameters[0].rtx &&
              delete e.sendEncodingParameters[0].rtx,
              (r += pn(e, s, "answer", e.stream, n._dtlsRole)),
              e.rtcpParameters && e.rtcpParameters.reducedSize && (r += "a=rtcp-rsize\r\n");
          }
        });
        var o = new e.RTCSessionDescription({ type: "answer", sdp: r });
        return Promise.resolve(o);
      }),
      (i.prototype.addIceCandidate = function (e) {
        var t,
          n = this;
        return e && void 0 === e.sdpMLineIndex && !e.sdpMid
          ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required"))
          : new Promise(function (r, i) {
              if (!n._remoteDescription)
                return i(
                  vn("InvalidStateError", "Can not add ICE candidate without a remote description")
                );
              if (e && "" !== e.candidate) {
                var o = e.sdpMLineIndex;
                if (e.sdpMid)
                  for (var a = 0; a < n.transceivers.length; a++)
                    if (n.transceivers[a].mid === e.sdpMid) {
                      o = a;
                      break;
                    }
                var s = n.transceivers[o];
                if (!s) return i(vn("OperationError", "Can not add ICE candidate"));
                if (s.rejected) return r();
                var c = Object.keys(e.candidate).length > 0 ? ln.parseCandidate(e.candidate) : {};
                if ("tcp" === c.protocol && (0 === c.port || 9 === c.port)) return r();
                if (c.component && 1 !== c.component) return r();
                if (
                  (0 === o || (o > 0 && s.iceTransport !== n.transceivers[0].iceTransport)) &&
                  !mn(s.iceTransport, c)
                )
                  return i(vn("OperationError", "Can not add ICE candidate"));
                var u = e.candidate.trim();
                0 === u.indexOf("a=") && (u = u.substr(2)),
                  ((t = ln.getMediaSections(n._remoteDescription.sdp))[o] +=
                    "a=" + (c.type ? u : "end-of-candidates") + "\r\n"),
                  (n._remoteDescription.sdp =
                    ln.getDescription(n._remoteDescription.sdp) + t.join(""));
              } else for (var d = 0; d < n.transceivers.length && (n.transceivers[d].rejected || (n.transceivers[d].iceTransport.addRemoteCandidate({}), ((t = ln.getMediaSections(n._remoteDescription.sdp))[d] += "a=end-of-candidates\r\n"), (n._remoteDescription.sdp = ln.getDescription(n._remoteDescription.sdp) + t.join("")), !n.usingBundle)); d++);
              r();
            });
      }),
      (i.prototype.getStats = function (t) {
        if (t && t instanceof e.MediaStreamTrack) {
          var n = null;
          if (
            (this.transceivers.forEach(function (e) {
              e.rtpSender && e.rtpSender.track === t
                ? (n = e.rtpSender)
                : e.rtpReceiver && e.rtpReceiver.track === t && (n = e.rtpReceiver);
            }),
            !n)
          )
            throw vn("InvalidAccessError", "Invalid selector.");
          return n.getStats();
        }
        var r = [];
        return (
          this.transceivers.forEach(function (e) {
            ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach(
              function (t) {
                e[t] && r.push(e[t].getStats());
              }
            );
          }),
          Promise.all(r).then(function (e) {
            var t = new Map();
            return (
              e.forEach(function (e) {
                e.forEach(function (e) {
                  t.set(e.id, e);
                });
              }),
              t
            );
          })
        );
      });
    [
      "RTCRtpSender",
      "RTCRtpReceiver",
      "RTCIceGatherer",
      "RTCIceTransport",
      "RTCDtlsTransport",
    ].forEach(function (t) {
      var n = e[t];
      if (n && n.prototype && n.prototype.getStats) {
        var r = n.prototype.getStats;
        n.prototype.getStats = function () {
          return r.apply(this).then(function (e) {
            var t = new Map();
            return (
              Object.keys(e).forEach(function (n) {
                var r;
                (e[n].type =
                  {
                    inboundrtp: "inbound-rtp",
                    outboundrtp: "outbound-rtp",
                    candidatepair: "candidate-pair",
                    localcandidate: "local-candidate",
                    remotecandidate: "remote-candidate",
                  }[(r = e[n]).type] || r.type),
                  t.set(n, e[n]);
              }),
              t
            );
          });
        };
      }
    });
    var o = ["createOffer", "createAnswer"];
    return (
      o.forEach(function (e) {
        var t = i.prototype[e];
        i.prototype[e] = function () {
          var e = arguments;
          return "function" == typeof e[0] || "function" == typeof e[1]
            ? t.apply(this, [arguments[2]]).then(
                function (t) {
                  "function" == typeof e[0] && e[0].apply(null, [t]);
                },
                function (t) {
                  "function" == typeof e[1] && e[1].apply(null, [t]);
                }
              )
            : t.apply(this, arguments);
        };
      }),
      (o = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"]).forEach(function (
        e
      ) {
        var t = i.prototype[e];
        i.prototype[e] = function () {
          var e = arguments;
          return "function" == typeof e[1] || "function" == typeof e[2]
            ? t.apply(this, arguments).then(
                function () {
                  "function" == typeof e[1] && e[1].apply(null);
                },
                function (t) {
                  "function" == typeof e[2] && e[2].apply(null, [t]);
                }
              )
            : t.apply(this, arguments);
        };
      }),
      ["getStats"].forEach(function (e) {
        var t = i.prototype[e];
        i.prototype[e] = function () {
          var e = arguments;
          return "function" == typeof e[1]
            ? t.apply(this, arguments).then(function () {
                "function" == typeof e[1] && e[1].apply(null);
              })
            : t.apply(this, arguments);
        };
      }),
      i
    );
  };
  function _n(e) {
    const t = e && e.navigator,
      n = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
    t.mediaDevices.getUserMedia = function (e) {
      return n(e).catch((e) =>
        Promise.reject(
          (function (e) {
            return {
              name: { PermissionDeniedError: "NotAllowedError" }[e.name] || e.name,
              message: e.message,
              constraint: e.constraint,
              toString() {
                return this.name;
              },
            };
          })(e)
        )
      );
    };
  }
  function yn(e) {
    "getDisplayMedia" in e.navigator &&
      e.navigator.mediaDevices &&
      ((e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices) ||
        (e.navigator.mediaDevices.getDisplayMedia = e.navigator.getDisplayMedia.bind(e.navigator)));
  }
  function Sn(e) {
    const t = qt(e);
    if (
      e.RTCIceGatherer &&
      (e.RTCIceCandidate ||
        (e.RTCIceCandidate = function (e) {
          return e;
        }),
      e.RTCSessionDescription ||
        (e.RTCSessionDescription = function (e) {
          return e;
        }),
      t.version < 15025)
    ) {
      const t = Object.getOwnPropertyDescriptor(e.MediaStreamTrack.prototype, "enabled");
      Object.defineProperty(e.MediaStreamTrack.prototype, "enabled", {
        set(e) {
          t.set.call(this, e);
          const n = new Event("enabled");
          (n.enabled = e), this.dispatchEvent(n);
        },
      });
    }
    e.RTCRtpSender &&
      !("dtmf" in e.RTCRtpSender.prototype) &&
      Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
        get() {
          return (
            void 0 === this._dtmf &&
              ("audio" === this.track.kind
                ? (this._dtmf = new e.RTCDtmfSender(this))
                : "video" === this.track.kind && (this._dtmf = null)),
            this._dtmf
          );
        },
      }),
      e.RTCDtmfSender && !e.RTCDTMFSender && (e.RTCDTMFSender = e.RTCDtmfSender);
    const n = gn(e, t.version);
    (e.RTCPeerConnection = function (e) {
      return (
        e &&
          e.iceServers &&
          ((e.iceServers = (function (e, t) {
            let n = !1;
            return (e = JSON.parse(JSON.stringify(e))).filter((e) => {
              if (e && (e.urls || e.url)) {
                let t = e.urls || e.url;
                e.url && !e.urls && Qt("RTCIceServer.url", "RTCIceServer.urls");
                const r = "string" == typeof t;
                return (
                  r && (t = [t]),
                  (t = t.filter((e) => {
                    if (0 === e.indexOf("stun:")) return !1;
                    const t =
                      e.startsWith("turn") &&
                      !e.startsWith("turn:[") &&
                      e.includes("transport=udp");
                    return t && !n ? ((n = !0), !0) : t && !n;
                  })),
                  delete e.url,
                  (e.urls = r ? t[0] : t),
                  !!t.length
                );
              }
            });
          })(e.iceServers, t.version)),
          Jt("ICE servers after filtering:", e.iceServers)),
        new n(e)
      );
    }),
      (e.RTCPeerConnection.prototype = n.prototype);
  }
  function bn(e) {
    e.RTCRtpSender &&
      !("replaceTrack" in e.RTCRtpSender.prototype) &&
      (e.RTCRtpSender.prototype.replaceTrack = e.RTCRtpSender.prototype.setTrack);
  }
  var kn = Object.freeze({
    __proto__: null,
    shimPeerConnection: Sn,
    shimReplaceTrack: bn,
    shimGetUserMedia: _n,
    shimGetDisplayMedia: yn,
  });
  function Tn(e) {
    const t = qt(e),
      n = e && e.navigator,
      r = e && e.MediaStreamTrack;
    if (
      ((n.getUserMedia = function (e, t, r) {
        Qt("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"),
          n.mediaDevices.getUserMedia(e).then(t, r);
      }),
      !(t.version > 55 && "autoGainControl" in n.mediaDevices.getSupportedConstraints()))
    ) {
      const e = function (e, t, n) {
          t in e && !(n in e) && ((e[n] = e[t]), delete e[t]);
        },
        t = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
      if (
        ((n.mediaDevices.getUserMedia = function (n) {
          return (
            "object" == typeof n &&
              "object" == typeof n.audio &&
              ((n = JSON.parse(JSON.stringify(n))),
              e(n.audio, "autoGainControl", "mozAutoGainControl"),
              e(n.audio, "noiseSuppression", "mozNoiseSuppression")),
            t(n)
          );
        }),
        r && r.prototype.getSettings)
      ) {
        const t = r.prototype.getSettings;
        r.prototype.getSettings = function () {
          const n = t.apply(this, arguments);
          return (
            e(n, "mozAutoGainControl", "autoGainControl"),
            e(n, "mozNoiseSuppression", "noiseSuppression"),
            n
          );
        };
      }
      if (r && r.prototype.applyConstraints) {
        const t = r.prototype.applyConstraints;
        r.prototype.applyConstraints = function (n) {
          return (
            "audio" === this.kind &&
              "object" == typeof n &&
              ((n = JSON.parse(JSON.stringify(n))),
              e(n, "autoGainControl", "mozAutoGainControl"),
              e(n, "noiseSuppression", "mozNoiseSuppression")),
            t.apply(this, [n])
          );
        };
      }
    }
  }
  function Rn(e) {
    "object" == typeof e &&
      e.RTCTrackEvent &&
      "receiver" in e.RTCTrackEvent.prototype &&
      !("transceiver" in e.RTCTrackEvent.prototype) &&
      Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
        get() {
          return { receiver: this.receiver };
        },
      });
  }
  function wn(e) {
    const t = qt(e);
    if ("object" != typeof e || (!e.RTCPeerConnection && !e.mozRTCPeerConnection)) return;
    if (
      (!e.RTCPeerConnection &&
        e.mozRTCPeerConnection &&
        (e.RTCPeerConnection = e.mozRTCPeerConnection),
      t.version < 53 &&
        ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (t) {
          const n = e.RTCPeerConnection.prototype[t],
            r = {
              [t]() {
                return (
                  (arguments[0] = new (
                    "addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription
                  )(arguments[0])),
                  n.apply(this, arguments)
                );
              },
            };
          e.RTCPeerConnection.prototype[t] = r[t];
        }),
      t.version < 68)
    ) {
      const t = e.RTCPeerConnection.prototype.addIceCandidate;
      e.RTCPeerConnection.prototype.addIceCandidate = function () {
        return arguments[0]
          ? arguments[0] && "" === arguments[0].candidate
            ? Promise.resolve()
            : t.apply(this, arguments)
          : (arguments[1] && arguments[1].apply(null), Promise.resolve());
      };
    }
    const n = {
        inboundrtp: "inbound-rtp",
        outboundrtp: "outbound-rtp",
        candidatepair: "candidate-pair",
        localcandidate: "local-candidate",
        remotecandidate: "remote-candidate",
      },
      r = e.RTCPeerConnection.prototype.getStats;
    e.RTCPeerConnection.prototype.getStats = function () {
      const [e, i, o] = arguments;
      return r
        .apply(this, [e || null])
        .then((e) => {
          if (t.version < 53 && !i)
            try {
              e.forEach((e) => {
                e.type = n[e.type] || e.type;
              });
            } catch (r) {
              if ("TypeError" !== r.name) throw r;
              e.forEach((t, r) => {
                e.set(r, Object.assign({}, t, { type: n[t.type] || t.type }));
              });
            }
          return e;
        })
        .then(i, o);
    };
  }
  function In(e) {
    if ("object" != typeof e || !e.RTCPeerConnection || !e.RTCRtpSender) return;
    if (e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype) return;
    const t = e.RTCPeerConnection.prototype.getSenders;
    t &&
      (e.RTCPeerConnection.prototype.getSenders = function () {
        const e = t.apply(this, []);
        return e.forEach((e) => (e._pc = this)), e;
      });
    const n = e.RTCPeerConnection.prototype.addTrack;
    n &&
      (e.RTCPeerConnection.prototype.addTrack = function () {
        const e = n.apply(this, arguments);
        return (e._pc = this), e;
      }),
      (e.RTCRtpSender.prototype.getStats = function () {
        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
      });
  }
  function Cn(e) {
    if ("object" != typeof e || !e.RTCPeerConnection || !e.RTCRtpSender) return;
    if (e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype) return;
    const t = e.RTCPeerConnection.prototype.getReceivers;
    t &&
      (e.RTCPeerConnection.prototype.getReceivers = function () {
        const e = t.apply(this, []);
        return e.forEach((e) => (e._pc = this)), e;
      }),
      Gt(e, "track", (e) => ((e.receiver._pc = e.srcElement), e)),
      (e.RTCRtpReceiver.prototype.getStats = function () {
        return this._pc.getStats(this.track);
      });
  }
  function En(e) {
    e.RTCPeerConnection &&
      !("removeStream" in e.RTCPeerConnection.prototype) &&
      (e.RTCPeerConnection.prototype.removeStream = function (e) {
        Qt("removeStream", "removeTrack"),
          this.getSenders().forEach((t) => {
            t.track && e.getTracks().includes(t.track) && this.removeTrack(t);
          });
      });
  }
  function xn(e) {
    e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel);
  }
  function Pn(e) {
    if ("object" != typeof e || !e.RTCPeerConnection) return;
    const t = e.RTCPeerConnection.prototype.addTransceiver;
    t &&
      (e.RTCPeerConnection.prototype.addTransceiver = function () {
        this.setParametersPromises = [];
        const e = arguments[1],
          n = e && "sendEncodings" in e;
        n &&
          e.sendEncodings.forEach((e) => {
            if ("rid" in e) {
              if (!/^[a-z0-9]{0,16}$/i.test(e.rid))
                throw new TypeError("Invalid RID value provided.");
            }
            if ("scaleResolutionDownBy" in e && !(parseFloat(e.scaleResolutionDownBy) >= 1))
              throw new RangeError("scale_resolution_down_by must be >= 1.0");
            if ("maxFramerate" in e && !(parseFloat(e.maxFramerate) >= 0))
              throw new RangeError("max_framerate must be >= 0.0");
          });
        const r = t.apply(this, arguments);
        if (n) {
          const { sender: t } = r,
            n = t.getParameters();
          (!("encodings" in n) ||
            (1 === n.encodings.length && 0 === Object.keys(n.encodings[0]).length)) &&
            ((n.encodings = e.sendEncodings),
            (t.sendEncodings = e.sendEncodings),
            this.setParametersPromises.push(
              t
                .setParameters(n)
                .then(() => {
                  delete t.sendEncodings;
                })
                .catch(() => {
                  delete t.sendEncodings;
                })
            ));
        }
        return r;
      });
  }
  function An(e) {
    if ("object" != typeof e || !e.RTCRtpSender) return;
    const t = e.RTCRtpSender.prototype.getParameters;
    t &&
      (e.RTCRtpSender.prototype.getParameters = function () {
        const e = t.apply(this, arguments);
        return "encodings" in e || (e.encodings = [].concat(this.sendEncodings || [{}])), e;
      });
  }
  function Dn(e) {
    if ("object" != typeof e || !e.RTCPeerConnection) return;
    const t = e.RTCPeerConnection.prototype.createOffer;
    e.RTCPeerConnection.prototype.createOffer = function () {
      return this.setParametersPromises && this.setParametersPromises.length
        ? Promise.all(this.setParametersPromises)
            .then(() => t.apply(this, arguments))
            .finally(() => {
              this.setParametersPromises = [];
            })
        : t.apply(this, arguments);
    };
  }
  function On(e) {
    if ("object" != typeof e || !e.RTCPeerConnection) return;
    const t = e.RTCPeerConnection.prototype.createAnswer;
    e.RTCPeerConnection.prototype.createAnswer = function () {
      return this.setParametersPromises && this.setParametersPromises.length
        ? Promise.all(this.setParametersPromises)
            .then(() => t.apply(this, arguments))
            .finally(() => {
              this.setParametersPromises = [];
            })
        : t.apply(this, arguments);
    };
  }
  var Nn = Object.freeze({
    __proto__: null,
    shimOnTrack: Rn,
    shimPeerConnection: wn,
    shimSenderGetStats: In,
    shimReceiverGetStats: Cn,
    shimRemoveStream: En,
    shimRTCDataChannel: xn,
    shimAddTransceiver: Pn,
    shimGetParameters: An,
    shimCreateOffer: Dn,
    shimCreateAnswer: On,
    shimGetUserMedia: Tn,
    shimGetDisplayMedia: function (e, t) {
      (e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices) ||
        (e.navigator.mediaDevices &&
          (e.navigator.mediaDevices.getDisplayMedia = function (n) {
            if (!n || !n.video) {
              const e = new DOMException("getDisplayMedia without video constraints is undefined");
              return (e.name = "NotFoundError"), (e.code = 8), Promise.reject(e);
            }
            return (
              !0 === n.video ? (n.video = { mediaSource: t }) : (n.video.mediaSource = t),
              e.navigator.mediaDevices.getUserMedia(n)
            );
          }));
    },
  });
  function Mn(e) {
    if ("object" == typeof e && e.RTCPeerConnection) {
      if (
        ("getLocalStreams" in e.RTCPeerConnection.prototype ||
          (e.RTCPeerConnection.prototype.getLocalStreams = function () {
            return this._localStreams || (this._localStreams = []), this._localStreams;
          }),
        !("addStream" in e.RTCPeerConnection.prototype))
      ) {
        const t = e.RTCPeerConnection.prototype.addTrack;
        (e.RTCPeerConnection.prototype.addStream = function (e) {
          this._localStreams || (this._localStreams = []),
            this._localStreams.includes(e) || this._localStreams.push(e),
            e.getAudioTracks().forEach((n) => t.call(this, n, e)),
            e.getVideoTracks().forEach((n) => t.call(this, n, e));
        }),
          (e.RTCPeerConnection.prototype.addTrack = function (e, ...n) {
            return (
              n &&
                n.forEach((e) => {
                  this._localStreams
                    ? this._localStreams.includes(e) || this._localStreams.push(e)
                    : (this._localStreams = [e]);
                }),
              t.apply(this, arguments)
            );
          });
      }
      "removeStream" in e.RTCPeerConnection.prototype ||
        (e.RTCPeerConnection.prototype.removeStream = function (e) {
          this._localStreams || (this._localStreams = []);
          const t = this._localStreams.indexOf(e);
          if (-1 === t) return;
          this._localStreams.splice(t, 1);
          const n = e.getTracks();
          this.getSenders().forEach((e) => {
            n.includes(e.track) && this.removeTrack(e);
          });
        });
    }
  }
  function Ln(e) {
    if (
      "object" == typeof e &&
      e.RTCPeerConnection &&
      ("getRemoteStreams" in e.RTCPeerConnection.prototype ||
        (e.RTCPeerConnection.prototype.getRemoteStreams = function () {
          return this._remoteStreams ? this._remoteStreams : [];
        }),
      !("onaddstream" in e.RTCPeerConnection.prototype))
    ) {
      Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
        get() {
          return this._onaddstream;
        },
        set(e) {
          this._onaddstream &&
            (this.removeEventListener("addstream", this._onaddstream),
            this.removeEventListener("track", this._onaddstreampoly)),
            this.addEventListener("addstream", (this._onaddstream = e)),
            this.addEventListener(
              "track",
              (this._onaddstreampoly = (e) => {
                e.streams.forEach((e) => {
                  if (
                    (this._remoteStreams || (this._remoteStreams = []),
                    this._remoteStreams.includes(e))
                  )
                    return;
                  this._remoteStreams.push(e);
                  const t = new Event("addstream");
                  (t.stream = e), this.dispatchEvent(t);
                });
              })
            );
        },
      });
      const t = e.RTCPeerConnection.prototype.setRemoteDescription;
      e.RTCPeerConnection.prototype.setRemoteDescription = function () {
        const e = this;
        return (
          this._onaddstreampoly ||
            this.addEventListener(
              "track",
              (this._onaddstreampoly = function (t) {
                t.streams.forEach((t) => {
                  if (
                    (e._remoteStreams || (e._remoteStreams = []), e._remoteStreams.indexOf(t) >= 0)
                  )
                    return;
                  e._remoteStreams.push(t);
                  const n = new Event("addstream");
                  (n.stream = t), e.dispatchEvent(n);
                });
              })
            ),
          t.apply(e, arguments)
        );
      };
    }
  }
  function Un(e) {
    if ("object" != typeof e || !e.RTCPeerConnection) return;
    const t = e.RTCPeerConnection.prototype,
      n = t.createOffer,
      r = t.createAnswer,
      i = t.setLocalDescription,
      o = t.setRemoteDescription,
      a = t.addIceCandidate;
    (t.createOffer = function (e, t) {
      const r = arguments.length >= 2 ? arguments[2] : arguments[0],
        i = n.apply(this, [r]);
      return t ? (i.then(e, t), Promise.resolve()) : i;
    }),
      (t.createAnswer = function (e, t) {
        const n = arguments.length >= 2 ? arguments[2] : arguments[0],
          i = r.apply(this, [n]);
        return t ? (i.then(e, t), Promise.resolve()) : i;
      });
    let s = function (e, t, n) {
      const r = i.apply(this, [e]);
      return n ? (r.then(t, n), Promise.resolve()) : r;
    };
    (t.setLocalDescription = s),
      (s = function (e, t, n) {
        const r = o.apply(this, [e]);
        return n ? (r.then(t, n), Promise.resolve()) : r;
      }),
      (t.setRemoteDescription = s),
      (s = function (e, t, n) {
        const r = a.apply(this, [e]);
        return n ? (r.then(t, n), Promise.resolve()) : r;
      }),
      (t.addIceCandidate = s);
  }
  function Vn(e) {
    const t = e && e.navigator;
    if (t.mediaDevices && t.mediaDevices.getUserMedia) {
      const e = t.mediaDevices,
        n = e.getUserMedia.bind(e);
      t.mediaDevices.getUserMedia = (e) => n(jn(e));
    }
    !t.getUserMedia &&
      t.mediaDevices &&
      t.mediaDevices.getUserMedia &&
      (t.getUserMedia = function (e, n, r) {
        t.mediaDevices.getUserMedia(e).then(n, r);
      }.bind(t));
  }
  function jn(e) {
    return e && void 0 !== e.video ? Object.assign({}, e, { video: Xt(e.video) }) : e;
  }
  function Fn(e) {
    if (!e.RTCPeerConnection) return;
    const t = e.RTCPeerConnection;
    (e.RTCPeerConnection = function (e, n) {
      if (e && e.iceServers) {
        const t = [];
        for (let n = 0; n < e.iceServers.length; n++) {
          let r = e.iceServers[n];
          !r.hasOwnProperty("urls") && r.hasOwnProperty("url")
            ? (Qt("RTCIceServer.url", "RTCIceServer.urls"),
              (r = JSON.parse(JSON.stringify(r))),
              (r.urls = r.url),
              delete r.url,
              t.push(r))
            : t.push(e.iceServers[n]);
        }
        e.iceServers = t;
      }
      return new t(e, n);
    }),
      (e.RTCPeerConnection.prototype = t.prototype),
      "generateCertificate" in t &&
        Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
          get: () => t.generateCertificate,
        });
  }
  function Bn(e) {
    "object" == typeof e &&
      e.RTCTrackEvent &&
      "receiver" in e.RTCTrackEvent.prototype &&
      !("transceiver" in e.RTCTrackEvent.prototype) &&
      Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
        get() {
          return { receiver: this.receiver };
        },
      });
  }
  function zn(e) {
    const t = e.RTCPeerConnection.prototype.createOffer;
    e.RTCPeerConnection.prototype.createOffer = function (e) {
      if (e) {
        void 0 !== e.offerToReceiveAudio && (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
        const t = this.getTransceivers().find((e) => "audio" === e.receiver.track.kind);
        !1 === e.offerToReceiveAudio && t
          ? "sendrecv" === t.direction
            ? t.setDirection
              ? t.setDirection("sendonly")
              : (t.direction = "sendonly")
            : "recvonly" === t.direction &&
              (t.setDirection ? t.setDirection("inactive") : (t.direction = "inactive"))
          : !0 !== e.offerToReceiveAudio || t || this.addTransceiver("audio"),
          void 0 !== e.offerToReceiveVideo && (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
        const n = this.getTransceivers().find((e) => "video" === e.receiver.track.kind);
        !1 === e.offerToReceiveVideo && n
          ? "sendrecv" === n.direction
            ? n.setDirection
              ? n.setDirection("sendonly")
              : (n.direction = "sendonly")
            : "recvonly" === n.direction &&
              (n.setDirection ? n.setDirection("inactive") : (n.direction = "inactive"))
          : !0 !== e.offerToReceiveVideo || n || this.addTransceiver("video");
      }
      return t.apply(this, arguments);
    };
  }
  function Gn(e) {
    "object" != typeof e || e.AudioContext || (e.AudioContext = e.webkitAudioContext);
  }
  var Hn = Object.freeze({
    __proto__: null,
    shimLocalStreamsAPI: Mn,
    shimRemoteStreamsAPI: Ln,
    shimCallbacksAPI: Un,
    shimGetUserMedia: Vn,
    shimConstraints: jn,
    shimRTCIceServerUrls: Fn,
    shimTrackEventTransceiver: Bn,
    shimCreateOfferLegacy: zn,
    shimAudioContext: Gn,
  });
  function Wn(e) {
    if (!e.RTCIceCandidate || (e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype))
      return;
    const t = e.RTCIceCandidate;
    (e.RTCIceCandidate = function (e) {
      if (
        ("object" == typeof e &&
          e.candidate &&
          0 === e.candidate.indexOf("a=") &&
          ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(2)),
        e.candidate && e.candidate.length)
      ) {
        const n = new t(e),
          r = ln.parseCandidate(e.candidate),
          i = Object.assign(n, r);
        return (
          (i.toJSON = function () {
            return {
              candidate: i.candidate,
              sdpMid: i.sdpMid,
              sdpMLineIndex: i.sdpMLineIndex,
              usernameFragment: i.usernameFragment,
            };
          }),
          i
        );
      }
      return new t(e);
    }),
      (e.RTCIceCandidate.prototype = t.prototype),
      Gt(
        e,
        "icecandidate",
        (t) => (
          t.candidate &&
            Object.defineProperty(t, "candidate", {
              value: new e.RTCIceCandidate(t.candidate),
              writable: "false",
            }),
          t
        )
      );
  }
  function Jn(e) {
    if (!e.RTCPeerConnection) return;
    const t = qt(e);
    "sctp" in e.RTCPeerConnection.prototype ||
      Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
        get() {
          return void 0 === this._sctp ? null : this._sctp;
        },
      });
    const n = function (e) {
        if (!e || !e.sdp) return !1;
        const t = ln.splitSections(e.sdp);
        return (
          t.shift(),
          t.some((e) => {
            const t = ln.parseMLine(e);
            return t && "application" === t.kind && -1 !== t.protocol.indexOf("SCTP");
          })
        );
      },
      r = function (e) {
        const t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
        if (null === t || t.length < 2) return -1;
        const n = parseInt(t[1], 10);
        return n != n ? -1 : n;
      },
      i = function (e) {
        let n = 65536;
        return (
          "firefox" === t.browser &&
            (n =
              t.version < 57
                ? -1 === e
                  ? 16384
                  : 2147483637
                : t.version < 60
                ? 57 === t.version
                  ? 65535
                  : 65536
                : 2147483637),
          n
        );
      },
      o = function (e, n) {
        let r = 65536;
        "firefox" === t.browser && 57 === t.version && (r = 65535);
        const i = ln.matchPrefix(e.sdp, "a=max-message-size:");
        return (
          i.length > 0
            ? (r = parseInt(i[0].substr(19), 10))
            : "firefox" === t.browser && -1 !== n && (r = 2147483637),
          r
        );
      },
      a = e.RTCPeerConnection.prototype.setRemoteDescription;
    e.RTCPeerConnection.prototype.setRemoteDescription = function () {
      if (((this._sctp = null), "chrome" === t.browser && t.version >= 76)) {
        const { sdpSemantics: e } = this.getConfiguration();
        "plan-b" === e &&
          Object.defineProperty(this, "sctp", {
            get() {
              return void 0 === this._sctp ? null : this._sctp;
            },
            enumerable: !0,
            configurable: !0,
          });
      }
      if (n(arguments[0])) {
        const e = r(arguments[0]),
          t = i(e),
          n = o(arguments[0], e);
        let a;
        a =
          0 === t && 0 === n
            ? Number.POSITIVE_INFINITY
            : 0 === t || 0 === n
            ? Math.max(t, n)
            : Math.min(t, n);
        const s = {};
        Object.defineProperty(s, "maxMessageSize", { get: () => a }), (this._sctp = s);
      }
      return a.apply(this, arguments);
    };
  }
  function Qn(e) {
    if (!e.RTCPeerConnection || !("createDataChannel" in e.RTCPeerConnection.prototype)) return;
    function t(e, t) {
      const n = e.send;
      e.send = function () {
        const r = arguments[0],
          i = r.length || r.size || r.byteLength;
        if ("open" === e.readyState && t.sctp && i > t.sctp.maxMessageSize)
          throw new TypeError(
            "Message too large (can send a maximum of " + t.sctp.maxMessageSize + " bytes)"
          );
        return n.apply(e, arguments);
      };
    }
    const n = e.RTCPeerConnection.prototype.createDataChannel;
    (e.RTCPeerConnection.prototype.createDataChannel = function () {
      const e = n.apply(this, arguments);
      return t(e, this), e;
    }),
      Gt(e, "datachannel", (e) => (t(e.channel, e.target), e));
  }
  function qn(e) {
    if (!e.RTCPeerConnection || "connectionState" in e.RTCPeerConnection.prototype) return;
    const t = e.RTCPeerConnection.prototype;
    Object.defineProperty(t, "connectionState", {
      get() {
        return (
          { completed: "connected", checking: "connecting" }[this.iceConnectionState] ||
          this.iceConnectionState
        );
      },
      enumerable: !0,
      configurable: !0,
    }),
      Object.defineProperty(t, "onconnectionstatechange", {
        get() {
          return this._onconnectionstatechange || null;
        },
        set(e) {
          this._onconnectionstatechange &&
            (this.removeEventListener("connectionstatechange", this._onconnectionstatechange),
            delete this._onconnectionstatechange),
            e &&
              this.addEventListener("connectionstatechange", (this._onconnectionstatechange = e));
        },
        enumerable: !0,
        configurable: !0,
      }),
      ["setLocalDescription", "setRemoteDescription"].forEach((e) => {
        const n = t[e];
        t[e] = function () {
          return (
            this._connectionstatechangepoly ||
              ((this._connectionstatechangepoly = (e) => {
                const t = e.target;
                if (t._lastConnectionState !== t.connectionState) {
                  t._lastConnectionState = t.connectionState;
                  const n = new Event("connectionstatechange", e);
                  t.dispatchEvent(n);
                }
                return e;
              }),
              this.addEventListener("iceconnectionstatechange", this._connectionstatechangepoly)),
            n.apply(this, arguments)
          );
        };
      });
  }
  function Kn(e) {
    if (!e.RTCPeerConnection) return;
    const t = qt(e);
    if ("chrome" === t.browser && t.version >= 71) return;
    if ("safari" === t.browser && t.version >= 605) return;
    const n = e.RTCPeerConnection.prototype.setRemoteDescription;
    e.RTCPeerConnection.prototype.setRemoteDescription = function (e) {
      return (
        e &&
          e.sdp &&
          -1 !== e.sdp.indexOf("\na=extmap-allow-mixed") &&
          (e.sdp = e.sdp
            .split("\n")
            .filter((e) => "a=extmap-allow-mixed" !== e.trim())
            .join("\n")),
        n.apply(this, arguments)
      );
    };
  }
  var Xn = Object.freeze({
    __proto__: null,
    shimRTCIceCandidate: Wn,
    shimMaxMessageSize: Jn,
    shimSendThrowTypeError: Qn,
    shimConnectionState: qn,
    removeAllowExtmapMixed: Kn,
  });
  !(function (
    { window: e } = {},
    t = { shimChrome: !0, shimFirefox: !0, shimEdge: !0, shimSafari: !0 }
  ) {
    const n = Jt,
      r = qt(e),
      i = {
        browserDetails: r,
        commonShim: Xn,
        extractVersion: zt,
        disableLog: Ht,
        disableWarnings: Wt,
      };
    switch (r.browser) {
      case "chrome":
        if (!dn || !cn || !t.shimChrome)
          return n("Chrome shim is not included in this adapter release."), i;
        if (null === r.version) return n("Chrome shim can not determine version, not shimming."), i;
        n("adapter.js shimming chrome."),
          (i.browserShim = dn),
          Zt(e),
          en(e),
          cn(e),
          tn(e),
          sn(e),
          nn(e),
          rn(e),
          on(e),
          un(e),
          Wn(e),
          qn(e),
          Jn(e),
          Qn(e),
          Kn(e);
        break;
      case "firefox":
        if (!Nn || !wn || !t.shimFirefox)
          return n("Firefox shim is not included in this adapter release."), i;
        n("adapter.js shimming firefox."),
          (i.browserShim = Nn),
          Tn(e),
          wn(e),
          Rn(e),
          En(e),
          In(e),
          Cn(e),
          xn(e),
          Pn(e),
          An(e),
          Dn(e),
          On(e),
          Wn(e),
          qn(e),
          Jn(e),
          Qn(e);
        break;
      case "edge":
        if (!kn || !Sn || !t.shimEdge)
          return n("MS edge shim is not included in this adapter release."), i;
        n("adapter.js shimming edge."),
          (i.browserShim = kn),
          _n(e),
          yn(e),
          Sn(e),
          bn(e),
          Jn(e),
          Qn(e);
        break;
      case "safari":
        if (!Hn || !t.shimSafari)
          return n("Safari shim is not included in this adapter release."), i;
        n("adapter.js shimming safari."),
          (i.browserShim = Hn),
          Fn(e),
          zn(e),
          Un(e),
          Mn(e),
          Ln(e),
          Bn(e),
          Vn(e),
          Gn(e),
          Wn(e),
          Jn(e),
          Qn(e),
          Kn(e);
        break;
      default:
        n("Unsupported browser!");
    }
  })({ window: "undefined" == typeof window ? void 0 : window });
  var $n = [].slice,
    Yn = {},
    Zn = function (e, t, n) {
      if (!(t in Yn)) {
        for (var r = [], i = 0; i < t; i++) r[i] = "a[" + i + "]";
        Yn[t] = Function("C,a", "return new C(" + r.join(",") + ")");
      }
      return Yn[t](e, n);
    },
    er =
      Function.bind ||
      function (e) {
        var t = De(this),
          n = $n.call(arguments, 1),
          r = function () {
            var i = n.concat($n.call(arguments));
            return this instanceof r ? Zn(t, i.length, i) : t.apply(e, i);
          };
        return v(t.prototype) && (r.prototype = t.prototype), r;
      };
  Ae({ target: "Function", proto: !0 }, { bind: er });
  var tr = E.f,
    nr = Function.prototype,
    rr = nr.toString,
    ir = /^\s*function ([^ (]*)/;
  o &&
    !("name" in nr) &&
    tr(nr, "name", {
      configurable: !0,
      get: function () {
        try {
          return rr.call(this).match(ir)[1];
        } catch (e) {
          return "";
        }
      },
    });
  var or = (function () {
      var e = function () {},
        t = ["trace", "debug", "info", "warn", "error"];
      function n(e, t) {
        var n = e[t];
        if ("function" == typeof n.bind) return n.bind(e);
        try {
          return Function.prototype.bind.call(n, e);
        } catch (r) {
          return function () {
            return Function.prototype.apply.apply(n, [e, arguments]);
          };
        }
      }
      function r(t) {
        return (
          "debug" === t && (t = "log"),
          "undefined" !== ("undefined" == typeof console ? "undefined" : gt(console)) &&
            (void 0 !== console[t] ? n(console, t) : void 0 !== console.log ? n(console, "log") : e)
        );
      }
      function i(e, n) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          this[i] = this.methodFactory(i, e, n);
        }
        this.log = this.debug;
      }
      function o(e, t, n) {
        return function () {
          "undefined" !== ("undefined" == typeof console ? "undefined" : gt(console)) &&
            (i.call(this, t, n), this[e].apply(this, arguments));
        };
      }
      function a(e, t, n) {
        return r(e) || o.apply(this, arguments);
      }
      function s(e, n, r) {
        var o,
          s = this,
          c = "loglevel";
        function u() {
          var e;
          if ("undefined" !== ("undefined" == typeof window ? "undefined" : gt(window))) {
            try {
              e = window.localStorage[c];
            } catch (t) {}
            return void 0 === s.levels[e] && (e = void 0), e;
          }
        }
        e && (c += ":" + e),
          (s.name = e),
          (s.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }),
          (s.methodFactory = r || a),
          (s.getLevel = function () {
            return o;
          }),
          (s.setLevel = function (n, r) {
            if (
              ("string" == typeof n &&
                void 0 !== s.levels[n.toUpperCase()] &&
                (n = s.levels[n.toUpperCase()]),
              !("number" == typeof n && n >= 0 && n <= s.levels.SILENT))
            )
              throw "log.setLevel() called with invalid level: " + n;
            if (
              ((o = n),
              !1 !== r &&
                (function (e) {
                  var n = (t[e] || "silent").toUpperCase();
                  if ("undefined" !== ("undefined" == typeof window ? "undefined" : gt(window)))
                    try {
                      window.localStorage[c] = n;
                    } catch (r) {}
                })(n),
              i.call(s, n, e),
              "undefined" === ("undefined" == typeof console ? "undefined" : gt(console)) &&
                n < s.levels.SILENT)
            )
              return "No console available for logging";
          }),
          (s.setDefaultLevel = function (e) {
            u() || s.setLevel(e, !1);
          }),
          (s.enableAll = function (e) {
            s.setLevel(s.levels.TRACE, e);
          }),
          (s.disableAll = function (e) {
            s.setLevel(s.levels.SILENT, e);
          });
        var d = u();
        null == d && (d = null == n ? "WARN" : n), s.setLevel(d, !1);
      }
      var c = new s(),
        u = {};
      c.getLogger = function (e) {
        if ("string" != typeof e || "" === e)
          throw new TypeError("You must supply a name when creating a logger.");
        var t = u[e];
        return t || (t = u[e] = new s(e, c.getLevel(), c.methodFactory)), t;
      };
      var d =
        "undefined" !== ("undefined" == typeof window ? "undefined" : gt(window))
          ? window.log
          : void 0;
      return (
        (c.noConflict = function () {
          return (
            "undefined" !== ("undefined" == typeof window ? "undefined" : gt(window)) &&
              window.log === c &&
              (window.log = d),
            c
          );
        }),
        (c.getLoggers = function () {
          return u;
        }),
        c
      );
    })(),
    ar = function (e, t, n) {
      var r = g(t);
      r in e ? E.f(e, r, u(0, n)) : (e[r] = n);
    },
    sr = Be("isConcatSpreadable"),
    cr =
      $e >= 51 ||
      !i(function () {
        var e = [];
        return (e[sr] = !1), e.concat()[0] !== e;
      }),
    ur = Ze("concat"),
    dr = function (e) {
      if (!v(e)) return !1;
      var t = e[sr];
      return void 0 !== t ? !!t : Me(e);
    };
  Ae(
    { target: "Array", proto: !0, forced: !cr || !ur },
    {
      concat: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a = Ne(this),
          s = Ge(a, 0),
          c = 0;
        for (t = -1, r = arguments.length; t < r; t++)
          if (dr((o = -1 === t ? a : arguments[t]))) {
            if (c + (i = ue(o.length)) > 9007199254740991)
              throw TypeError("Maximum allowed index exceeded");
            for (n = 0; n < i; n++, c++) n in o && ar(s, c, o[n]);
          } else {
            if (c >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
            ar(s, c++, o);
          }
        return (s.length = c), s;
      },
    }
  ),
    Ae({ target: "Array", stat: !0 }, { isArray: Me });
  var lr = function (e, t) {
      var n = [][e];
      return (
        !!n &&
        i(function () {
          n.call(
            null,
            t ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    },
    pr = [].join,
    hr = h != Object,
    fr = lr("join", ",");
  Ae(
    { target: "Array", proto: !0, forced: hr || !fr },
    {
      join: function (e) {
        return pr.call(m(this), void 0 === e ? "," : e);
      },
    }
  );
  var mr = Ze("slice"),
    vr = rt("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
    gr = Be("species"),
    _r = [].slice,
    yr = Math.max;
  Ae(
    { target: "Array", proto: !0, forced: !mr || !vr },
    {
      slice: function (e, t) {
        var n,
          r,
          i,
          o = m(this),
          a = ue(o.length),
          s = pe(e, a),
          c = pe(void 0 === t ? a : t, a);
        if (
          Me(o) &&
          ("function" != typeof (n = o.constructor) || (n !== Array && !Me(n.prototype))
            ? v(n) && null === (n = n[gr]) && (n = void 0)
            : (n = void 0),
          n === Array || void 0 === n)
        )
          return _r.call(o, s, c);
        for (r = new (void 0 === n ? Array : n)(yr(c - s, 0)), i = 0; s < c; s++, i++)
          s in o && ar(r, i, o[s]);
        return (r.length = i), r;
      },
    }
  );
  var Sr = Je.some,
    br = lr("some"),
    kr = rt("some");
  Ae(
    { target: "Array", proto: !0, forced: !br || !kr },
    {
      some: function (e) {
        return Sr(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var Tr = Ze("splice"),
    Rr = rt("splice", { ACCESSORS: !0, 0: 0, 1: 2 }),
    wr = Math.max,
    Ir = Math.min;
  Ae(
    { target: "Array", proto: !0, forced: !Tr || !Rr },
    {
      splice: function (e, t) {
        var n,
          r,
          i,
          o,
          a,
          s,
          c = Ne(this),
          u = ue(c.length),
          d = pe(e, u),
          l = arguments.length;
        if (
          (0 === l
            ? (n = r = 0)
            : 1 === l
            ? ((n = 0), (r = u - d))
            : ((n = l - 2), (r = Ir(wr(se(t), 0), u - d))),
          u + n - r > 9007199254740991)
        )
          throw TypeError("Maximum allowed length exceeded");
        for (i = Ge(c, r), o = 0; o < r; o++) (a = d + o) in c && ar(i, o, c[a]);
        if (((i.length = r), n < r)) {
          for (o = d; o < u - r; o++) (s = o + n), (a = o + r) in c ? (c[s] = c[a]) : delete c[s];
          for (o = u; o > u - r + n; o--) delete c[o - 1];
        } else if (n > r)
          for (o = u - r; o > d; o--)
            (s = o + n - 1), (a = o + r - 1) in c ? (c[s] = c[a]) : delete c[s];
        for (o = 0; o < n; o++) c[o + d] = arguments[o + 2];
        return (c.length = u - r + n), i;
      },
    }
  );
  var Cr =
      "".repeat ||
      function (e) {
        var t = String(f(this)),
          n = "",
          r = se(e);
        if (r < 0 || Infinity == r) throw RangeError("Wrong number of repetitions");
        for (; r > 0; (r >>>= 1) && (t += t)) 1 & r && (n += t);
        return n;
      },
    Er = Math.ceil,
    xr = function (e) {
      return function (t, n, r) {
        var i,
          o,
          a = String(f(t)),
          s = a.length,
          c = void 0 === r ? " " : String(r),
          u = ue(n);
        return u <= s || "" == c
          ? a
          : ((i = u - s),
            (o = Cr.call(c, Er(i / c.length))).length > i && (o = o.slice(0, i)),
            e ? a + o : o + a);
      };
    },
    Pr = { start: xr(!1), end: xr(!0) }.start,
    Ar = Math.abs,
    Dr = Date.prototype,
    Or = Dr.getTime,
    Nr = Dr.toISOString,
    Mr =
      i(function () {
        return "0385-07-25T07:06:39.999Z" != Nr.call(new Date(-50000000000001));
      }) ||
      !i(function () {
        Nr.call(new Date(NaN));
      })
        ? function () {
            if (!isFinite(Or.call(this))) throw RangeError("Invalid time value");
            var e = this.getUTCFullYear(),
              t = this.getUTCMilliseconds(),
              n = e < 0 ? "-" : e > 9999 ? "+" : "";
            return (
              n +
              Pr(Ar(e), n ? 6 : 4, 0) +
              "-" +
              Pr(this.getUTCMonth() + 1, 2, 0) +
              "-" +
              Pr(this.getUTCDate(), 2, 0) +
              "T" +
              Pr(this.getUTCHours(), 2, 0) +
              ":" +
              Pr(this.getUTCMinutes(), 2, 0) +
              ":" +
              Pr(this.getUTCSeconds(), 2, 0) +
              "." +
              Pr(t, 3, 0) +
              "Z"
            );
          }
        : Nr;
  Ae({ target: "Date", proto: !0, forced: Date.prototype.toISOString !== Mr }, { toISOString: Mr });
  var Lr = Date.prototype,
    Ur = Lr.toString,
    Vr = Lr.getTime;
  new Date(NaN) + "" != "Invalid Date" &&
    te(Lr, "toString", function () {
      var e = Vr.call(this);
      return e == e ? Ur.call(this) : "Invalid Date";
    });
  var jr = w.f,
    Fr = i(function () {
      jr(1);
    });
  Ae(
    { target: "Object", stat: !0, forced: !o || Fr, sham: !o },
    {
      getOwnPropertyDescriptor: function (e, t) {
        return jr(m(e), t);
      },
    }
  );
  var Br = !i(function () {
      function e() {}
      return (e.prototype.constructor = null), Object.getPrototypeOf(new e()) !== e.prototype;
    }),
    zr = H("IE_PROTO"),
    Gr = Object.prototype,
    Hr = Br
      ? Object.getPrototypeOf
      : function (e) {
          return (
            (e = Ne(e)),
            y(e, zr)
              ? e[zr]
              : "function" == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? Gr
              : null
          );
        },
    Wr = i(function () {
      Hr(1);
    });
  Ae(
    { target: "Object", stat: !0, forced: Wr, sham: !Br },
    {
      getPrototypeOf: function (e) {
        return Hr(Ne(e));
      },
    }
  );
  var Jr = {};
  Jr[Be("toStringTag")] = "z";
  var Qr = "[object z]" === String(Jr),
    qr = Be("toStringTag"),
    Kr =
      "Arguments" ==
      l(
        (function () {
          return arguments;
        })()
      ),
    Xr = Qr
      ? l
      : function (e) {
          var t, n, r;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" ==
              typeof (n = (function (e, t) {
                try {
                  return e[t];
                } catch (n) {}
              })((t = Object(e)), qr))
            ? n
            : Kr
            ? l(t)
            : "Object" == (r = l(t)) && "function" == typeof t.callee
            ? "Arguments"
            : r;
        },
    $r = Qr
      ? {}.toString
      : function () {
          return "[object " + Xr(this) + "]";
        };
  Qr || te(Object.prototype, "toString", $r, { unsafe: !0 });
  var Yr = function () {
    var e = I(this),
      t = "";
    return (
      e.global && (t += "g"),
      e.ignoreCase && (t += "i"),
      e.multiline && (t += "m"),
      e.dotAll && (t += "s"),
      e.unicode && (t += "u"),
      e.sticky && (t += "y"),
      t
    );
  };
  function Zr(e, t) {
    return RegExp(e, t);
  }
  var ei = {
      UNSUPPORTED_Y: i(function () {
        var e = Zr("a", "y");
        return (e.lastIndex = 2), null != e.exec("abcd");
      }),
      BROKEN_CARET: i(function () {
        var e = Zr("^r", "gy");
        return (e.lastIndex = 2), null != e.exec("str");
      }),
    },
    ti = RegExp.prototype.exec,
    ni = String.prototype.replace,
    ri = ti,
    ii = (function () {
      var e = /a/,
        t = /b*/g;
      return ti.call(e, "a"), ti.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex;
    })(),
    oi = ei.UNSUPPORTED_Y || ei.BROKEN_CARET,
    ai = void 0 !== /()??/.exec("")[1];
  (ii || ai || oi) &&
    (ri = function (e) {
      var t,
        n,
        r,
        i,
        o = this,
        a = oi && o.sticky,
        s = Yr.call(o),
        c = o.source,
        u = 0,
        d = e;
      return (
        a &&
          (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"),
          (d = String(e).slice(o.lastIndex)),
          o.lastIndex > 0 &&
            (!o.multiline || (o.multiline && "\n" !== e[o.lastIndex - 1])) &&
            ((c = "(?: " + c + ")"), (d = " " + d), u++),
          (n = new RegExp("^(?:" + c + ")", s))),
        ai && (n = new RegExp("^" + c + "$(?!\\s)", s)),
        ii && (t = o.lastIndex),
        (r = ti.call(a ? n : o, d)),
        a
          ? r
            ? ((r.input = r.input.slice(u)),
              (r[0] = r[0].slice(u)),
              (r.index = o.lastIndex),
              (o.lastIndex += r[0].length))
            : (o.lastIndex = 0)
          : ii && r && (o.lastIndex = o.global ? r.index + r[0].length : t),
        ai &&
          r &&
          r.length > 1 &&
          ni.call(r[0], n, function () {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0);
          }),
        r
      );
    });
  var si = ri;
  Ae({ target: "RegExp", proto: !0, forced: /./.exec !== si }, { exec: si });
  var ci = RegExp.prototype,
    ui = ci.toString,
    di = i(function () {
      return "/a/b" != ui.call({ source: "a", flags: "b" });
    }),
    li = "toString" != ui.name;
  (di || li) &&
    te(
      RegExp.prototype,
      "toString",
      function () {
        var e = I(this),
          t = String(e.source),
          n = e.flags;
        return (
          "/" +
          t +
          "/" +
          String(void 0 === n && e instanceof RegExp && !("flags" in ci) ? Yr.call(e) : n)
        );
      },
      { unsafe: !0 }
    );
  var pi = Be("species"),
    hi = !i(function () {
      var e = /./;
      return (
        (e.exec = function () {
          var e = [];
          return (e.groups = { a: "7" }), e;
        }),
        "7" !== "".replace(e, "$<a>")
      );
    }),
    fi = "$0" === "a".replace(/./, "$0"),
    mi = Be("replace"),
    vi = !!/./[mi] && "" === /./[mi]("a", "$0"),
    gi = !i(function () {
      var e = /(?:)/,
        t = e.exec;
      e.exec = function () {
        return t.apply(this, arguments);
      };
      var n = "ab".split(e);
      return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
    }),
    _i = function (e, t, n, r) {
      var o = Be(e),
        a = !i(function () {
          var t = {};
          return (
            (t[o] = function () {
              return 7;
            }),
            7 != ""[e](t)
          );
        }),
        s =
          a &&
          !i(function () {
            var t = !1,
              n = /a/;
            return (
              "split" === e &&
                (((n = {}).constructor = {}),
                (n.constructor[pi] = function () {
                  return n;
                }),
                (n.flags = ""),
                (n[o] = /./[o])),
              (n.exec = function () {
                return (t = !0), null;
              }),
              n[o](""),
              !t
            );
          });
      if (!a || !s || ("replace" === e && (!hi || !fi || vi)) || ("split" === e && !gi)) {
        var c = /./[o],
          u = n(
            o,
            ""[e],
            function (e, t, n, r, i) {
              return t.exec === si
                ? a && !i
                  ? { done: !0, value: c.call(t, n, r) }
                  : { done: !0, value: e.call(n, t, r) }
                : { done: !1 };
            },
            { REPLACE_KEEPS_$0: fi, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: vi }
          ),
          d = u[0],
          l = u[1];
        te(String.prototype, e, d),
          te(
            RegExp.prototype,
            o,
            2 == t
              ? function (e, t) {
                  return l.call(e, this, t);
                }
              : function (e) {
                  return l.call(e, this);
                }
          );
      }
      r && x(RegExp.prototype[o], "sham", !0);
    },
    yi = function (e) {
      return function (t, n) {
        var r,
          i,
          o = String(f(t)),
          a = se(n),
          s = o.length;
        return a < 0 || a >= s
          ? e
            ? ""
            : void 0
          : (r = o.charCodeAt(a)) < 55296 ||
            r > 56319 ||
            a + 1 === s ||
            (i = o.charCodeAt(a + 1)) < 56320 ||
            i > 57343
          ? e
            ? o.charAt(a)
            : r
          : e
          ? o.slice(a, a + 2)
          : i - 56320 + ((r - 55296) << 10) + 65536;
      };
    },
    Si = { codeAt: yi(!1), charAt: yi(!0) },
    bi = Si.charAt,
    ki = function (e, t, n) {
      return t + (n ? bi(e, t).length : 1);
    },
    Ti = function (e, t) {
      var n = e.exec;
      if ("function" == typeof n) {
        var r = n.call(e, t);
        if ("object" != typeof r)
          throw TypeError("RegExp exec method returned something other than an Object or null");
        return r;
      }
      if ("RegExp" !== l(e)) throw TypeError("RegExp#exec called on incompatible receiver");
      return si.call(e, t);
    },
    Ri = Math.max,
    wi = Math.min,
    Ii = Math.floor,
    Ci = /\$([$&'`]|\d\d?|<[^>]*>)/g,
    Ei = /\$([$&'`]|\d\d?)/g;
  _i("replace", 2, function (e, t, n, r) {
    var i = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
      o = r.REPLACE_KEEPS_$0,
      a = i ? "$" : "$0";
    return [
      function (n, r) {
        var i = f(this),
          o = null == n ? void 0 : n[e];
        return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r);
      },
      function (e, r) {
        if ((!i && o) || ("string" == typeof r && -1 === r.indexOf(a))) {
          var c = n(t, e, this, r);
          if (c.done) return c.value;
        }
        var u = I(e),
          d = String(this),
          l = "function" == typeof r;
        l || (r = String(r));
        var p = u.global;
        if (p) {
          var h = u.unicode;
          u.lastIndex = 0;
        }
        for (var f = []; ; ) {
          var m = Ti(u, d);
          if (null === m) break;
          if ((f.push(m), !p)) break;
          "" === String(m[0]) && (u.lastIndex = ki(d, ue(u.lastIndex), h));
        }
        for (var v, g = "", _ = 0, y = 0; y < f.length; y++) {
          m = f[y];
          for (
            var S = String(m[0]), b = Ri(wi(se(m.index), d.length), 0), k = [], T = 1;
            T < m.length;
            T++
          )
            k.push(void 0 === (v = m[T]) ? v : String(v));
          var R = m.groups;
          if (l) {
            var w = [S].concat(k, b, d);
            void 0 !== R && w.push(R);
            var C = String(r.apply(void 0, w));
          } else C = s(S, d, b, k, R, r);
          b >= _ && ((g += d.slice(_, b) + C), (_ = b + S.length));
        }
        return g + d.slice(_);
      },
    ];
    function s(e, n, r, i, o, a) {
      var s = r + e.length,
        c = i.length,
        u = Ei;
      return (
        void 0 !== o && ((o = Ne(o)), (u = Ci)),
        t.call(a, u, function (t, a) {
          var u;
          switch (a.charAt(0)) {
            case "$":
              return "$";
            case "&":
              return e;
            case "`":
              return n.slice(0, r);
            case "'":
              return n.slice(s);
            case "<":
              u = o[a.slice(1, -1)];
              break;
            default:
              var d = +a;
              if (0 === d) return t;
              if (d > c) {
                var l = Ii(d / 10);
                return 0 === l
                  ? t
                  : l <= c
                  ? void 0 === i[l - 1]
                    ? a.charAt(1)
                    : i[l - 1] + a.charAt(1)
                  : t;
              }
              u = i[d - 1];
          }
          return void 0 === u ? "" : u;
        })
      );
    }
  });
  var xi = Be("match"),
    Pi = function (e) {
      var t;
      return v(e) && (void 0 !== (t = e[xi]) ? !!t : "RegExp" == l(e));
    },
    Ai = Be("species"),
    Di = function (e, t) {
      var n,
        r = I(e).constructor;
      return void 0 === r || null == (n = I(r)[Ai]) ? t : De(n);
    },
    Oi = [].push,
    Ni = Math.min,
    Mi = !i(function () {
      return !RegExp(4294967295, "y");
    });
  _i(
    "split",
    2,
    function (e, t, n) {
      var r;
      return (
        (r =
          "c" == "abbc".split(/(b)*/)[1] ||
          4 != "test".split(/(?:)/, -1).length ||
          2 != "ab".split(/(?:ab)*/).length ||
          4 != ".".split(/(.?)(.?)/).length ||
          ".".split(/()()/).length > 1 ||
          "".split(/.?/).length
            ? function (e, n) {
                var r = String(f(this)),
                  i = void 0 === n ? 4294967295 : n >>> 0;
                if (0 === i) return [];
                if (void 0 === e) return [r];
                if (!Pi(e)) return t.call(r, e, i);
                for (
                  var o,
                    a,
                    s,
                    c = [],
                    u =
                      (e.ignoreCase ? "i" : "") +
                      (e.multiline ? "m" : "") +
                      (e.unicode ? "u" : "") +
                      (e.sticky ? "y" : ""),
                    d = 0,
                    l = new RegExp(e.source, u + "g");
                  (o = si.call(l, r)) &&
                  !(
                    (a = l.lastIndex) > d &&
                    (c.push(r.slice(d, o.index)),
                    o.length > 1 && o.index < r.length && Oi.apply(c, o.slice(1)),
                    (s = o[0].length),
                    (d = a),
                    c.length >= i)
                  );

                )
                  l.lastIndex === o.index && l.lastIndex++;
                return (
                  d === r.length ? (!s && l.test("")) || c.push("") : c.push(r.slice(d)),
                  c.length > i ? c.slice(0, i) : c
                );
              }
            : "0".split(void 0, 0).length
            ? function (e, n) {
                return void 0 === e && 0 === n ? [] : t.call(this, e, n);
              }
            : t),
        [
          function (t, n) {
            var i = f(this),
              o = null == t ? void 0 : t[e];
            return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n);
          },
          function (e, i) {
            var o = n(r, e, this, i, r !== t);
            if (o.done) return o.value;
            var a = I(e),
              s = String(this),
              c = Di(a, RegExp),
              u = a.unicode,
              d =
                (a.ignoreCase ? "i" : "") +
                (a.multiline ? "m" : "") +
                (a.unicode ? "u" : "") +
                (Mi ? "y" : "g"),
              l = new c(Mi ? a : "^(?:" + a.source + ")", d),
              p = void 0 === i ? 4294967295 : i >>> 0;
            if (0 === p) return [];
            if (0 === s.length) return null === Ti(l, s) ? [s] : [];
            for (var h = 0, f = 0, m = []; f < s.length; ) {
              l.lastIndex = Mi ? f : 0;
              var v,
                g = Ti(l, Mi ? s : s.slice(f));
              if (null === g || (v = Ni(ue(l.lastIndex + (Mi ? 0 : f)), s.length)) === h)
                f = ki(s, f, u);
              else {
                if ((m.push(s.slice(h, f)), m.length === p)) return m;
                for (var _ = 1; _ <= g.length - 1; _++)
                  if ((m.push(g[_]), m.length === p)) return m;
                f = h = v;
              }
            }
            return m.push(s.slice(h)), m;
          },
        ]
      );
    },
    !Mi
  );
  var Li = function (e, t) {
      return function () {
        for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
        return e.apply(t, n);
      };
    },
    Ui = Object.prototype.toString;
  function Vi(e) {
    return "[object Array]" === Ui.call(e);
  }
  function ji(e) {
    return void 0 === e;
  }
  function Fi(e) {
    return null !== e && "object" == typeof e;
  }
  function Bi(e) {
    return "[object Function]" === Ui.call(e);
  }
  function zi(e, t) {
    if (null != e)
      if (("object" != typeof e && (e = [e]), Vi(e)))
        for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
      else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
  }
  var Gi = {
    isArray: Vi,
    isArrayBuffer: function (e) {
      return "[object ArrayBuffer]" === Ui.call(e);
    },
    isBuffer: function (e) {
      return (
        null !== e &&
        !ji(e) &&
        null !== e.constructor &&
        !ji(e.constructor) &&
        "function" == typeof e.constructor.isBuffer &&
        e.constructor.isBuffer(e)
      );
    },
    isFormData: function (e) {
      return "undefined" != typeof FormData && e instanceof FormData;
    },
    isArrayBufferView: function (e) {
      return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && e.buffer instanceof ArrayBuffer;
    },
    isString: function (e) {
      return "string" == typeof e;
    },
    isNumber: function (e) {
      return "number" == typeof e;
    },
    isObject: Fi,
    isUndefined: ji,
    isDate: function (e) {
      return "[object Date]" === Ui.call(e);
    },
    isFile: function (e) {
      return "[object File]" === Ui.call(e);
    },
    isBlob: function (e) {
      return "[object Blob]" === Ui.call(e);
    },
    isFunction: Bi,
    isStream: function (e) {
      return Fi(e) && Bi(e.pipe);
    },
    isURLSearchParams: function (e) {
      return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
    },
    isStandardBrowserEnv: function () {
      return (
        ("undefined" == typeof navigator ||
          ("ReactNative" !== navigator.product &&
            "NativeScript" !== navigator.product &&
            "NS" !== navigator.product)) &&
        "undefined" != typeof window &&
        "undefined" != typeof document
      );
    },
    forEach: zi,
    merge: function e() {
      var t = {};
      function n(n, r) {
        "object" == typeof t[r] && "object" == typeof n ? (t[r] = e(t[r], n)) : (t[r] = n);
      }
      for (var r = 0, i = arguments.length; r < i; r++) zi(arguments[r], n);
      return t;
    },
    deepMerge: function e() {
      var t = {};
      function n(n, r) {
        "object" == typeof t[r] && "object" == typeof n
          ? (t[r] = e(t[r], n))
          : (t[r] = "object" == typeof n ? e({}, n) : n);
      }
      for (var r = 0, i = arguments.length; r < i; r++) zi(arguments[r], n);
      return t;
    },
    extend: function (e, t, n) {
      return (
        zi(t, function (t, r) {
          e[r] = n && "function" == typeof t ? Li(t, n) : t;
        }),
        e
      );
    },
    trim: function (e) {
      return e.replace(/^\s*/, "").replace(/\s*$/, "");
    },
  };
  function Hi(e) {
    return encodeURIComponent(e)
      .replace(/%40/gi, "@")
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  var Wi = function (e, t, n) {
    if (!t) return e;
    var r;
    if (n) r = n(t);
    else if (Gi.isURLSearchParams(t)) r = t.toString();
    else {
      var i = [];
      Gi.forEach(t, function (e, t) {
        null != e &&
          (Gi.isArray(e) ? (t += "[]") : (e = [e]),
          Gi.forEach(e, function (e) {
            Gi.isDate(e) ? (e = e.toISOString()) : Gi.isObject(e) && (e = JSON.stringify(e)),
              i.push(Hi(t) + "=" + Hi(e));
          }));
      }),
        (r = i.join("&"));
    }
    if (r) {
      var o = e.indexOf("#");
      -1 !== o && (e = e.slice(0, o)), (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
    }
    return e;
  };
  function Ji() {
    this.handlers = [];
  }
  (Ji.prototype.use = function (e, t) {
    return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1;
  }),
    (Ji.prototype.eject = function (e) {
      this.handlers[e] && (this.handlers[e] = null);
    }),
    (Ji.prototype.forEach = function (e) {
      Gi.forEach(this.handlers, function (t) {
        null !== t && e(t);
      });
    });
  var Qi = Ji,
    qi = function (e, t, n) {
      return (
        Gi.forEach(n, function (n) {
          e = n(e, t);
        }),
        e
      );
    },
    Ki = function (e) {
      return !(!e || !e.__CANCEL__);
    },
    Xi =
      "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : {};
  function $i() {
    throw new Error("setTimeout has not been defined");
  }
  function Yi() {
    throw new Error("clearTimeout has not been defined");
  }
  var Zi = $i,
    eo = Yi;
  function to(e) {
    if (Zi === setTimeout) return setTimeout(e, 0);
    if ((Zi === $i || !Zi) && setTimeout) return (Zi = setTimeout), setTimeout(e, 0);
    try {
      return Zi(e, 0);
    } catch (t) {
      try {
        return Zi.call(null, e, 0);
      } catch (t) {
        return Zi.call(this, e, 0);
      }
    }
  }
  "function" == typeof Xi.setTimeout && (Zi = setTimeout),
    "function" == typeof Xi.clearTimeout && (eo = clearTimeout);
  var no,
    ro = [],
    io = !1,
    oo = -1;
  function ao() {
    io && no && ((io = !1), no.length ? (ro = no.concat(ro)) : (oo = -1), ro.length && so());
  }
  function so() {
    if (!io) {
      var e = to(ao);
      io = !0;
      for (var t = ro.length; t; ) {
        for (no = ro, ro = []; ++oo < t; ) no && no[oo].run();
        (oo = -1), (t = ro.length);
      }
      (no = null),
        (io = !1),
        (function (e) {
          if (eo === clearTimeout) return clearTimeout(e);
          if ((eo === Yi || !eo) && clearTimeout) return (eo = clearTimeout), clearTimeout(e);
          try {
            eo(e);
          } catch (t) {
            try {
              return eo.call(null, e);
            } catch (t) {
              return eo.call(this, e);
            }
          }
        })(e);
    }
  }
  function co(e, t) {
    (this.fun = e), (this.array = t);
  }
  co.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  function uo() {}
  var lo = uo,
    po = uo,
    ho = uo,
    fo = uo,
    mo = uo,
    vo = uo,
    go = uo;
  var _o = Xi.performance || {},
    yo =
      _o.now ||
      _o.mozNow ||
      _o.msNow ||
      _o.oNow ||
      _o.webkitNow ||
      function () {
        return new Date().getTime();
      };
  var So = new Date();
  var bo = {
      nextTick: function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        ro.push(new co(e, t)), 1 !== ro.length || io || to(so);
      },
      title: "browser",
      browser: !0,
      env: {},
      argv: [],
      version: "",
      versions: {},
      on: lo,
      addListener: po,
      once: ho,
      off: fo,
      removeListener: mo,
      removeAllListeners: vo,
      emit: go,
      binding: function (e) {
        throw new Error("process.binding is not supported");
      },
      cwd: function () {
        return "/";
      },
      chdir: function (e) {
        throw new Error("process.chdir is not supported");
      },
      umask: function () {
        return 0;
      },
      hrtime: function (e) {
        var t = 0.001 * yo.call(_o),
          n = Math.floor(t),
          r = Math.floor((t % 1) * 1e9);
        return e && ((n -= e[0]), (r -= e[1]) < 0 && (n--, (r += 1e9))), [n, r];
      },
      platform: "browser",
      release: {},
      config: {},
      uptime: function () {
        return (new Date() - So) / 1e3;
      },
    },
    ko = function (e, t) {
      Gi.forEach(e, function (n, r) {
        r !== t && r.toUpperCase() === t.toUpperCase() && ((e[t] = n), delete e[r]);
      });
    },
    To = function (e, t, n, r, i) {
      return (function (e, t, n, r, i) {
        return (
          (e.config = t),
          n && (e.code = n),
          (e.request = r),
          (e.response = i),
          (e.isAxiosError = !0),
          (e.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
            };
          }),
          e
        );
      })(new Error(e), t, n, r, i);
    },
    Ro = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ],
    wo = Gi.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
          function r(e) {
            var r = e;
            return (
              t && (n.setAttribute("href", r), (r = n.href)),
              n.setAttribute("href", r),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
              }
            );
          }
          return (
            (e = r(window.location.href)),
            function (t) {
              var n = Gi.isString(t) ? r(t) : t;
              return n.protocol === e.protocol && n.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        },
    Io = Gi.isStandardBrowserEnv()
      ? {
          write: function (e, t, n, r, i, o) {
            var a = [];
            a.push(e + "=" + encodeURIComponent(t)),
              Gi.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
              Gi.isString(r) && a.push("path=" + r),
              Gi.isString(i) && a.push("domain=" + i),
              !0 === o && a.push("secure"),
              (document.cookie = a.join("; "));
          },
          read: function (e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        },
    Co = function (e) {
      return new Promise(function (t, n) {
        var r = e.data,
          i = e.headers;
        Gi.isFormData(r) && delete i["Content-Type"];
        var o = new XMLHttpRequest();
        if (e.auth) {
          var a = e.auth.username || "",
            s = e.auth.password || "";
          i.Authorization = "Basic " + btoa(a + ":" + s);
        }
        var c,
          u,
          d =
            ((c = e.baseURL),
            (u = e.url),
            c && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u)
              ? (function (e, t) {
                  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
                })(c, u)
              : u);
        if (
          (o.open(e.method.toUpperCase(), Wi(d, e.params, e.paramsSerializer), !0),
          (o.timeout = e.timeout),
          (o.onreadystatechange = function () {
            if (
              o &&
              4 === o.readyState &&
              (0 !== o.status || (o.responseURL && 0 === o.responseURL.indexOf("file:")))
            ) {
              var r =
                  "getAllResponseHeaders" in o
                    ? (function (e) {
                        var t,
                          n,
                          r,
                          i = {};
                        return e
                          ? (Gi.forEach(e.split("\n"), function (e) {
                              if (
                                ((r = e.indexOf(":")),
                                (t = Gi.trim(e.substr(0, r)).toLowerCase()),
                                (n = Gi.trim(e.substr(r + 1))),
                                t)
                              ) {
                                if (i[t] && Ro.indexOf(t) >= 0) return;
                                i[t] =
                                  "set-cookie" === t
                                    ? (i[t] ? i[t] : []).concat([n])
                                    : i[t]
                                    ? i[t] + ", " + n
                                    : n;
                              }
                            }),
                            i)
                          : i;
                      })(o.getAllResponseHeaders())
                    : null,
                i = {
                  data: e.responseType && "text" !== e.responseType ? o.response : o.responseText,
                  status: o.status,
                  statusText: o.statusText,
                  headers: r,
                  config: e,
                  request: o,
                };
              !(function (e, t, n) {
                var r = n.config.validateStatus;
                !r || r(n.status)
                  ? e(n)
                  : t(
                      To(
                        "Request failed with status code " + n.status,
                        n.config,
                        null,
                        n.request,
                        n
                      )
                    );
              })(t, n, i),
                (o = null);
            }
          }),
          (o.onabort = function () {
            o && (n(To("Request aborted", e, "ECONNABORTED", o)), (o = null));
          }),
          (o.onerror = function () {
            n(To("Network Error", e, null, o)), (o = null);
          }),
          (o.ontimeout = function () {
            var t = "timeout of " + e.timeout + "ms exceeded";
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              n(To(t, e, "ECONNABORTED", o)),
              (o = null);
          }),
          Gi.isStandardBrowserEnv())
        ) {
          var l = Io,
            p =
              (e.withCredentials || wo(d)) && e.xsrfCookieName ? l.read(e.xsrfCookieName) : void 0;
          p && (i[e.xsrfHeaderName] = p);
        }
        if (
          ("setRequestHeader" in o &&
            Gi.forEach(i, function (e, t) {
              void 0 === r && "content-type" === t.toLowerCase()
                ? delete i[t]
                : o.setRequestHeader(t, e);
            }),
          Gi.isUndefined(e.withCredentials) || (o.withCredentials = !!e.withCredentials),
          e.responseType)
        )
          try {
            o.responseType = e.responseType;
          } catch (h) {
            if ("json" !== e.responseType) throw h;
          }
        "function" == typeof e.onDownloadProgress &&
          o.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress &&
            o.upload &&
            o.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              o && (o.abort(), n(e), (o = null));
            }),
          void 0 === r && (r = null),
          o.send(r);
      });
    },
    Eo = { "Content-Type": "application/x-www-form-urlencoded" };
  function xo(e, t) {
    !Gi.isUndefined(e) && Gi.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
  }
  var Po = {
    adapter: (function () {
      var e;
      return (
        ("undefined" != typeof XMLHttpRequest ||
          (void 0 !== bo && "[object process]" === Object.prototype.toString.call(bo))) &&
          (e = Co),
        e
      );
    })(),
    transformRequest: [
      function (e, t) {
        return (
          ko(t, "Accept"),
          ko(t, "Content-Type"),
          Gi.isFormData(e) ||
          Gi.isArrayBuffer(e) ||
          Gi.isBuffer(e) ||
          Gi.isStream(e) ||
          Gi.isFile(e) ||
          Gi.isBlob(e)
            ? e
            : Gi.isArrayBufferView(e)
            ? e.buffer
            : Gi.isURLSearchParams(e)
            ? (xo(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString())
            : Gi.isObject(e)
            ? (xo(t, "application/json;charset=utf-8"), JSON.stringify(e))
            : e
        );
      },
    ],
    transformResponse: [
      function (e) {
        if ("string" == typeof e)
          try {
            e = JSON.parse(e);
          } catch (t) {}
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
  Gi.forEach(["delete", "get", "head"], function (e) {
    Po.headers[e] = {};
  }),
    Gi.forEach(["post", "put", "patch"], function (e) {
      Po.headers[e] = Gi.merge(Eo);
    });
  var Ao = Po;
  function Do(e) {
    e.cancelToken && e.cancelToken.throwIfRequested();
  }
  var Oo = function (e) {
      return (
        Do(e),
        (e.headers = e.headers || {}),
        (e.data = qi(e.data, e.headers, e.transformRequest)),
        (e.headers = Gi.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers)),
        Gi.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
          delete e.headers[t];
        }),
        (e.adapter || Ao.adapter)(e).then(
          function (t) {
            return Do(e), (t.data = qi(t.data, t.headers, e.transformResponse)), t;
          },
          function (t) {
            return (
              Ki(t) ||
                (Do(e),
                t &&
                  t.response &&
                  (t.response.data = qi(t.response.data, t.response.headers, e.transformResponse))),
              Promise.reject(t)
            );
          }
        )
      );
    },
    No = function (e, t) {
      t = t || {};
      var n = {},
        r = ["url", "method", "params", "data"],
        i = ["headers", "auth", "proxy"],
        o = [
          "baseURL",
          "url",
          "transformRequest",
          "transformResponse",
          "paramsSerializer",
          "timeout",
          "withCredentials",
          "adapter",
          "responseType",
          "xsrfCookieName",
          "xsrfHeaderName",
          "onUploadProgress",
          "onDownloadProgress",
          "maxContentLength",
          "validateStatus",
          "maxRedirects",
          "httpAgent",
          "httpsAgent",
          "cancelToken",
          "socketPath",
        ];
      Gi.forEach(r, function (e) {
        void 0 !== t[e] && (n[e] = t[e]);
      }),
        Gi.forEach(i, function (r) {
          Gi.isObject(t[r])
            ? (n[r] = Gi.deepMerge(e[r], t[r]))
            : void 0 !== t[r]
            ? (n[r] = t[r])
            : Gi.isObject(e[r])
            ? (n[r] = Gi.deepMerge(e[r]))
            : void 0 !== e[r] && (n[r] = e[r]);
        }),
        Gi.forEach(o, function (r) {
          void 0 !== t[r] ? (n[r] = t[r]) : void 0 !== e[r] && (n[r] = e[r]);
        });
      var a = r.concat(i).concat(o),
        s = Object.keys(t).filter(function (e) {
          return -1 === a.indexOf(e);
        });
      return (
        Gi.forEach(s, function (r) {
          void 0 !== t[r] ? (n[r] = t[r]) : void 0 !== e[r] && (n[r] = e[r]);
        }),
        n
      );
    };
  function Mo(e) {
    (this.defaults = e), (this.interceptors = { request: new Qi(), response: new Qi() });
  }
  (Mo.prototype.request = function (e) {
    "string" == typeof e ? ((e = arguments[1] || {}).url = arguments[0]) : (e = e || {}),
      (e = No(this.defaults, e)).method
        ? (e.method = e.method.toLowerCase())
        : this.defaults.method
        ? (e.method = this.defaults.method.toLowerCase())
        : (e.method = "get");
    var t = [Oo, void 0],
      n = Promise.resolve(e);
    for (
      this.interceptors.request.forEach(function (e) {
        t.unshift(e.fulfilled, e.rejected);
      }),
        this.interceptors.response.forEach(function (e) {
          t.push(e.fulfilled, e.rejected);
        });
      t.length;

    )
      n = n.then(t.shift(), t.shift());
    return n;
  }),
    (Mo.prototype.getUri = function (e) {
      return (e = No(this.defaults, e)), Wi(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
    }),
    Gi.forEach(["delete", "get", "head", "options"], function (e) {
      Mo.prototype[e] = function (t, n) {
        return this.request(Gi.merge(n || {}, { method: e, url: t }));
      };
    }),
    Gi.forEach(["post", "put", "patch"], function (e) {
      Mo.prototype[e] = function (t, n, r) {
        return this.request(Gi.merge(r || {}, { method: e, url: t, data: n }));
      };
    });
  var Lo = Mo;
  function Uo(e) {
    this.message = e;
  }
  (Uo.prototype.toString = function () {
    return "Cancel" + (this.message ? ": " + this.message : "");
  }),
    (Uo.prototype.__CANCEL__ = !0);
  var Vo = Uo;
  function jo(e) {
    if ("function" != typeof e) throw new TypeError("executor must be a function.");
    var t;
    this.promise = new Promise(function (e) {
      t = e;
    });
    var n = this;
    e(function (e) {
      n.reason || ((n.reason = new Vo(e)), t(n.reason));
    });
  }
  (jo.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason;
  }),
    (jo.source = function () {
      var e;
      return {
        token: new jo(function (t) {
          e = t;
        }),
        cancel: e,
      };
    });
  var Fo = jo;
  function Bo(e) {
    var t = new Lo(e),
      n = Li(Lo.prototype.request, t);
    return Gi.extend(n, Lo.prototype, t), Gi.extend(n, t), n;
  }
  var zo = Bo(Ao);
  (zo.Axios = Lo),
    (zo.create = function (e) {
      return Bo(No(zo.defaults, e));
    }),
    (zo.Cancel = Vo),
    (zo.CancelToken = Fo),
    (zo.isCancel = Ki),
    (zo.all = function (e) {
      return Promise.all(e);
    }),
    (zo.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    });
  var Go = zo,
    Ho = zo;
  Go.default = Ho;
  var Wo,
    Jo = Go,
    Qo =
      Object.keys ||
      function (e) {
        return ve(e, ge);
      },
    qo = o
      ? Object.defineProperties
      : function (e, t) {
          I(e);
          for (var n, r = Qo(t), i = r.length, o = 0; i > o; ) E.f(e, (n = r[o++]), t[n]);
          return e;
        },
    Ko = ie("document", "documentElement"),
    Xo = H("IE_PROTO"),
    $o = function () {},
    Yo = function (e) {
      return "<script>" + e + "</script>";
    },
    Zo = function () {
      try {
        Wo = document.domain && new ActiveXObject("htmlfile");
      } catch (r) {}
      var e, t;
      Zo = Wo
        ? (function (e) {
            e.write(Yo("")), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          })(Wo)
        : (((t = k("iframe")).style.display = "none"),
          Ko.appendChild(t),
          (t.src = String("javascript:")),
          (e = t.contentWindow.document).open(),
          e.write(Yo("document.F=Object")),
          e.close(),
          e.F);
      for (var n = ge.length; n--; ) delete Zo.prototype[ge[n]];
      return Zo();
    };
  W[Xo] = !0;
  var ea =
      Object.create ||
      function (e, t) {
        var n;
        return (
          null !== e
            ? (($o.prototype = I(e)), (n = new $o()), ($o.prototype = null), (n[Xo] = e))
            : (n = Zo()),
          void 0 === t ? n : qo(n, t)
        );
      },
    ta = Be("unscopables"),
    na = Array.prototype;
  null == na[ta] && E.f(na, ta, { configurable: !0, value: ea(null) });
  var ra,
    ia,
    oa,
    aa = function (e) {
      na[ta][e] = !0;
    },
    sa = {},
    ca = Be("iterator"),
    ua = !1;
  [].keys &&
    ("next" in (oa = [].keys()) ? (ia = Hr(Hr(oa))) !== Object.prototype && (ra = ia) : (ua = !0)),
    null == ra && (ra = {}),
    y(ra, ca) ||
      x(ra, ca, function () {
        return this;
      });
  var da = { IteratorPrototype: ra, BUGGY_SAFARI_ITERATORS: ua },
    la = E.f,
    pa = Be("toStringTag"),
    ha = function (e, t, n) {
      e && !y((e = n ? e : e.prototype), pa) && la(e, pa, { configurable: !0, value: t });
    },
    fa = da.IteratorPrototype,
    ma = function () {
      return this;
    },
    va =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var e,
              t = !1,
              n = {};
            try {
              (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []),
                (t = n instanceof Array);
            } catch (r) {}
            return function (n, r) {
              return (
                I(n),
                (function (e) {
                  if (!v(e) && null !== e)
                    throw TypeError("Can't set " + String(e) + " as a prototype");
                })(r),
                t ? e.call(n, r) : (n.__proto__ = r),
                n
              );
            };
          })()
        : void 0),
    ga = da.IteratorPrototype,
    _a = da.BUGGY_SAFARI_ITERATORS,
    ya = Be("iterator"),
    Sa = function () {
      return this;
    },
    ba = function (e, t, n, r, i, o, a) {
      !(function (e, t, n) {
        var r = t + " Iterator";
        (e.prototype = ea(fa, { next: u(1, n) })), ha(e, r, !1), (sa[r] = ma);
      })(n, t, r);
      var s,
        c,
        d,
        l = function (e) {
          if (e === i && v) return v;
          if (!_a && e in f) return f[e];
          switch (e) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this);
          };
        },
        p = t + " Iterator",
        h = !1,
        f = e.prototype,
        m = f[ya] || f["@@iterator"] || (i && f[i]),
        v = (!_a && m) || l(i),
        g = ("Array" == t && f.entries) || m;
      if (
        (g &&
          ((s = Hr(g.call(new e()))),
          ga !== Object.prototype &&
            s.next &&
            (Hr(s) !== ga && (va ? va(s, ga) : "function" != typeof s[ya] && x(s, ya, Sa)),
            ha(s, p, !0))),
        "values" == i &&
          m &&
          "values" !== m.name &&
          ((h = !0),
          (v = function () {
            return m.call(this);
          })),
        f[ya] !== v && x(f, ya, v),
        (sa[t] = v),
        i)
      )
        if (((c = { values: l("values"), keys: o ? v : l("keys"), entries: l("entries") }), a))
          for (d in c) (_a || h || !(d in f)) && te(f, d, c[d]);
        else Ae({ target: t, proto: !0, forced: _a || h }, c);
      return c;
    },
    ka = ee.set,
    Ta = ee.getterFor("Array Iterator"),
    Ra = ba(
      Array,
      "Array",
      function (e, t) {
        ka(this, { type: "Array Iterator", target: m(e), index: 0, kind: t });
      },
      function () {
        var e = Ta(this),
          t = e.target,
          n = e.kind,
          r = e.index++;
        return !t || r >= t.length
          ? ((e.target = void 0), { value: void 0, done: !0 })
          : "keys" == n
          ? { value: r, done: !1 }
          : "values" == n
          ? { value: t[r], done: !1 }
          : { value: [r, t[r]], done: !1 };
      },
      "values"
    );
  (sa.Arguments = sa.Array),
    aa("keys"),
    aa("values"),
    aa("entries"),
    Ae(
      { target: "Date", stat: !0 },
      {
        now: function () {
          return new Date().getTime();
        },
      }
    );
  var wa = !i(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    Ia = t(function (e) {
      var t = E.f,
        n = z("meta"),
        r = 0,
        i =
          Object.isExtensible ||
          function () {
            return !0;
          },
        o = function (e) {
          t(e, n, { value: { objectID: "O" + ++r, weakData: {} } });
        },
        a = (e.exports = {
          REQUIRED: !1,
          fastKey: function (e, t) {
            if (!v(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!y(e, n)) {
              if (!i(e)) return "F";
              if (!t) return "E";
              o(e);
            }
            return e[n].objectID;
          },
          getWeakData: function (e, t) {
            if (!y(e, n)) {
              if (!i(e)) return !0;
              if (!t) return !1;
              o(e);
            }
            return e[n].weakData;
          },
          onFreeze: function (e) {
            return wa && a.REQUIRED && i(e) && !y(e, n) && o(e), e;
          },
        });
      W[n] = !0;
    }),
    Ca = (Ia.REQUIRED, Ia.fastKey, Ia.getWeakData, Ia.onFreeze, Be("iterator")),
    Ea = Array.prototype,
    xa = Be("iterator"),
    Pa = function (e) {
      var t = e.return;
      if (void 0 !== t) return I(t.call(e)).value;
    },
    Aa = function (e, t) {
      (this.stopped = e), (this.result = t);
    },
    Da = function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        c,
        u,
        d,
        l = n && n.that,
        p = !(!n || !n.AS_ENTRIES),
        h = !(!n || !n.IS_ITERATOR),
        f = !(!n || !n.INTERRUPTED),
        m = Oe(t, l, 1 + p + f),
        v = function (e) {
          return r && Pa(r), new Aa(!0, e);
        },
        g = function (e) {
          return p ? (I(e), f ? m(e[0], e[1], v) : m(e[0], e[1])) : f ? m(e, v) : m(e);
        };
      if (h) r = e;
      else {
        if (
          "function" !=
          typeof (i = (function (e) {
            if (null != e) return e[xa] || e["@@iterator"] || sa[Xr(e)];
          })(e))
        )
          throw TypeError("Target is not iterable");
        if (void 0 !== (d = i) && (sa.Array === d || Ea[Ca] === d)) {
          for (o = 0, a = ue(e.length); a > o; o++) if ((s = g(e[o])) && s instanceof Aa) return s;
          return new Aa(!1);
        }
        r = i.call(e);
      }
      for (c = r.next; !(u = c.call(r)).done; ) {
        try {
          s = g(u.value);
        } catch (_) {
          throw (Pa(r), _);
        }
        if ("object" == typeof s && s && s instanceof Aa) return s;
      }
      return new Aa(!1);
    },
    Oa = function (e, t, n) {
      if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return e;
    },
    Na = Be("iterator"),
    Ma = !1;
  try {
    var La = 0,
      Ua = {
        next: function () {
          return { done: !!La++ };
        },
        return: function () {
          Ma = !0;
        },
      };
    (Ua[Na] = function () {
      return this;
    }),
      Array.from(Ua, function () {
        throw 2;
      });
  } catch (Av) {}
  var Va = function (e, t) {
      if (!t && !Ma) return !1;
      var n = !1;
      try {
        var r = {};
        (r[Na] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          e(r);
      } catch (Av) {}
      return n;
    },
    ja = function (e, t, n) {
      var r, i;
      return (
        va &&
          "function" == typeof (r = t.constructor) &&
          r !== n &&
          v((i = r.prototype)) &&
          i !== n.prototype &&
          va(e, i),
        e
      );
    },
    Fa = function (e, t, n) {
      for (var r in t) te(e, r, t[r], n);
      return e;
    },
    Ba = Be("species"),
    za = function (e) {
      var t = ie(e),
        n = E.f;
      o &&
        t &&
        !t[Ba] &&
        n(t, Ba, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    },
    Ga = E.f,
    Ha = Ia.fastKey,
    Wa = ee.set,
    Ja = ee.getterFor,
    Qa =
      ((function (e, t, n) {
        var o = -1 !== e.indexOf("Map"),
          a = -1 !== e.indexOf("Weak"),
          s = o ? "set" : "add",
          c = r[e],
          u = c && c.prototype,
          d = c,
          l = {},
          p = function (e) {
            var t = u[e];
            te(
              u,
              e,
              "add" == e
                ? function (e) {
                    return t.call(this, 0 === e ? 0 : e), this;
                  }
                : "delete" == e
                ? function (e) {
                    return !(a && !v(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : "get" == e
                ? function (e) {
                    return a && !v(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                  }
                : "has" == e
                ? function (e) {
                    return !(a && !v(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : function (e, n) {
                    return t.call(this, 0 === e ? 0 : e, n), this;
                  }
            );
          };
        if (
          xe(
            e,
            "function" != typeof c ||
              !(
                a ||
                (u.forEach &&
                  !i(function () {
                    new c().entries().next();
                  }))
              )
          )
        )
          (d = n.getConstructor(t, e, o, s)), (Ia.REQUIRED = !0);
        else if (xe(e, !0)) {
          var h = new d(),
            f = h[s](a ? {} : -0, 1) != h,
            m = i(function () {
              h.has(1);
            }),
            g = Va(function (e) {
              new c(e);
            }),
            _ =
              !a &&
              i(function () {
                for (var e = new c(), t = 5; t--; ) e[s](t, t);
                return !e.has(-0);
              });
          g ||
            (((d = t(function (t, n) {
              Oa(t, d, e);
              var r = ja(new c(), t, d);
              return null != n && Da(n, r[s], { that: r, AS_ENTRIES: o }), r;
            })).prototype = u),
            (u.constructor = d)),
            (m || _) && (p("delete"), p("has"), o && p("get")),
            (_ || f) && p(s),
            a && u.clear && delete u.clear;
        }
        (l[e] = d), Ae({ global: !0, forced: d != c }, l), ha(d, e), a || n.setStrong(d, e, o);
      })(
        "Map",
        function (e) {
          return function () {
            return e(this, arguments.length ? arguments[0] : void 0);
          };
        },
        {
          getConstructor: function (e, t, n, r) {
            var i = e(function (e, a) {
                Oa(e, i, t),
                  Wa(e, { type: t, index: ea(null), first: void 0, last: void 0, size: 0 }),
                  o || (e.size = 0),
                  null != a && Da(a, e[r], { that: e, AS_ENTRIES: n });
              }),
              a = Ja(t),
              s = function (e, t, n) {
                var r,
                  i,
                  s = a(e),
                  u = c(e, t);
                return (
                  u
                    ? (u.value = n)
                    : ((s.last = u =
                        {
                          index: (i = Ha(t, !0)),
                          key: t,
                          value: n,
                          previous: (r = s.last),
                          next: void 0,
                          removed: !1,
                        }),
                      s.first || (s.first = u),
                      r && (r.next = u),
                      o ? s.size++ : e.size++,
                      "F" !== i && (s.index[i] = u)),
                  e
                );
              },
              c = function (e, t) {
                var n,
                  r = a(e),
                  i = Ha(t);
                if ("F" !== i) return r.index[i];
                for (n = r.first; n; n = n.next) if (n.key == t) return n;
              };
            return (
              Fa(i.prototype, {
                clear: function () {
                  for (var e = a(this), t = e.index, n = e.first; n; )
                    (n.removed = !0),
                      n.previous && (n.previous = n.previous.next = void 0),
                      delete t[n.index],
                      (n = n.next);
                  (e.first = e.last = void 0), o ? (e.size = 0) : (this.size = 0);
                },
                delete: function (e) {
                  var t = a(this),
                    n = c(this, e);
                  if (n) {
                    var r = n.next,
                      i = n.previous;
                    delete t.index[n.index],
                      (n.removed = !0),
                      i && (i.next = r),
                      r && (r.previous = i),
                      t.first == n && (t.first = r),
                      t.last == n && (t.last = i),
                      o ? t.size-- : this.size--;
                  }
                  return !!n;
                },
                forEach: function (e) {
                  for (
                    var t, n = a(this), r = Oe(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                    (t = t ? t.next : n.first);

                  )
                    for (r(t.value, t.key, this); t && t.removed; ) t = t.previous;
                },
                has: function (e) {
                  return !!c(this, e);
                },
              }),
              Fa(
                i.prototype,
                n
                  ? {
                      get: function (e) {
                        var t = c(this, e);
                        return t && t.value;
                      },
                      set: function (e, t) {
                        return s(this, 0 === e ? 0 : e, t);
                      },
                    }
                  : {
                      add: function (e) {
                        return s(this, (e = 0 === e ? 0 : e), e);
                      },
                    }
              ),
              o &&
                Ga(i.prototype, "size", {
                  get: function () {
                    return a(this).size;
                  },
                }),
              i
            );
          },
          setStrong: function (e, t, n) {
            var r = t + " Iterator",
              i = Ja(t),
              o = Ja(r);
            ba(
              e,
              t,
              function (e, t) {
                Wa(this, { type: r, target: e, state: i(e), kind: t, last: void 0 });
              },
              function () {
                for (var e = o(this), t = e.kind, n = e.last; n && n.removed; ) n = n.previous;
                return e.target && (e.last = n = n ? n.next : e.state.first)
                  ? "keys" == t
                    ? { value: n.key, done: !1 }
                    : "values" == t
                    ? { value: n.value, done: !1 }
                    : { value: [n.key, n.value], done: !1 }
                  : ((e.target = void 0), { value: void 0, done: !0 });
              },
              n ? "entries" : "values",
              !n,
              !0
            ),
              za(t);
          },
        }
      ),
      Si.charAt),
    qa = ee.set,
    Ka = ee.getterFor("String Iterator");
  ba(
    String,
    "String",
    function (e) {
      qa(this, { type: "String Iterator", string: String(e), index: 0 });
    },
    function () {
      var e,
        t = Ka(this),
        n = t.string,
        r = t.index;
      return r >= n.length
        ? { value: void 0, done: !0 }
        : ((e = Qa(n, r)), (t.index += e.length), { value: e, done: !1 });
    }
  );
  var Xa = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    },
    $a = Be("iterator"),
    Ya = Be("toStringTag"),
    Za = Ra.values;
  for (var es in Xa) {
    var ts = r[es],
      ns = ts && ts.prototype;
    if (ns) {
      if (ns[$a] !== Za)
        try {
          x(ns, $a, Za);
        } catch (Av) {
          ns[$a] = Za;
        }
      if ((ns[Ya] || x(ns, Ya, es), Xa[es]))
        for (var rs in Ra)
          if (ns[rs] !== Ra[rs])
            try {
              x(ns, rs, Ra[rs]);
            } catch (Av) {
              ns[rs] = Ra[rs];
            }
    }
  }
  var is = [].slice,
    os = /MSIE .\./.test(Qe),
    as = function (e) {
      return function (t, n) {
        var r = arguments.length > 2,
          i = r ? is.call(arguments, 2) : void 0;
        return e(
          r
            ? function () {
                ("function" == typeof t ? t : Function(t)).apply(this, i);
              }
            : t,
          n
        );
      };
    };
  Ae(
    { global: !0, bind: !0, forced: os },
    { setTimeout: as(r.setTimeout), setInterval: as(r.setInterval) }
  );
  var ss = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var t = (16 * Math.random()) | 0;
        return ("x" == e ? t : (3 & t) | 8).toString(16);
      });
    },
    cs = new ((function () {
      function e() {
        St(this, e), (this.intervalMap_ = new Map());
      }
      return (
        kt(e, [
          {
            key: "setInterval",
            value: function (e, t) {
              var n = this,
                r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                i = ss(),
                o = Date.now(),
                a = o;
              this.intervalMap_.set(i, { rafId: null, timeoutId: null, onVisibilityChange: null });
              var s = function s() {
                  if (r && document.hidden) {
                    e();
                    var c = setTimeout(s, t);
                    n.setTimeoutId(i, c), (o = Date.now()), (a = o);
                  } else {
                    (a = Date.now()) - o >= t && ((o = a), e());
                    var u = requestAnimationFrame(s);
                    n.setRafId(i, u);
                  }
                },
                c = requestAnimationFrame(s);
              if ((this.setRafId(i, c), r)) {
                var u = function () {
                  if (document.hidden) {
                    var e = Date.now() - o;
                    if (e >= t) s();
                    else {
                      var r = setTimeout(s, t - e);
                      n.setTimeoutId(i, r);
                    }
                  }
                };
                document.addEventListener("visibilitychange", u), this.setOnVisibilityChange(i, u);
              }
              return i;
            },
          },
          {
            key: "clearInterval",
            value: function (e) {
              if (this.intervalMap_.has(e)) {
                var t = this.intervalMap_.get(e),
                  n = t.rafId,
                  r = t.timeoutId,
                  i = t.onVisibilityChange;
                cancelAnimationFrame(n),
                  clearTimeout(r),
                  document.removeEventListener("visibilitychange", i),
                  this.intervalMap_.delete(e);
              }
            },
          },
          {
            key: "setTimeoutId",
            value: function (e, t) {
              if (this.intervalMap_.has(e)) {
                var n = this.intervalMap_.get(e);
                n.timeoutId && clearTimeout(n.timeoutId), (n.timeoutId = t);
              }
            },
          },
          {
            key: "setRafId",
            value: function (e, t) {
              if (this.intervalMap_.has(e)) {
                var n = this.intervalMap_.get(e);
                n.rafId && cancelAnimationFrame(n.rafId), (n.rafId = t);
              }
            },
          },
          {
            key: "setOnVisibilityChange",
            value: function (e, t) {
              this.intervalMap_.has(e) && (this.intervalMap_.get(e).onVisibilityChange = t);
            },
          },
        ]),
        e
      );
    })())(),
    us = (new Date().getTime(), 0),
    ds = function () {
      return new Date().getTime() + us;
    },
    ls = function () {
      var e = new Date();
      return e.setTime(ds()), e.toLocaleString();
    },
    ps = fe.indexOf,
    hs = [].indexOf,
    fs = !!hs && 1 / [1].indexOf(1, -0) < 0,
    ms = lr("indexOf"),
    vs = rt("indexOf", { ACCESSORS: !0, 1: 0 });
  Ae(
    { target: "Array", proto: !0, forced: fs || !ms || !vs },
    {
      indexOf: function (e) {
        return fs
          ? hs.apply(this, arguments) || 0
          : ps(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var gs = ie("Reflect", "apply"),
    _s = Function.apply,
    ys = !i(function () {
      gs(function () {});
    });
  Ae(
    { target: "Reflect", stat: !0, forced: ys },
    {
      apply: function (e, t, n) {
        return De(e), I(n), gs ? gs(e, t, n) : _s.call(e, t, n);
      },
    }
  );
  var Ss = E.f,
    bs = ye.f,
    ks = ee.set,
    Ts = Be("match"),
    Rs = r.RegExp,
    ws = Rs.prototype,
    Is = /a/g,
    Cs = /a/g,
    Es = new Rs(Is) !== Is,
    xs = ei.UNSUPPORTED_Y;
  if (
    o &&
    xe(
      "RegExp",
      !Es ||
        xs ||
        i(function () {
          return (Cs[Ts] = !1), Rs(Is) != Is || Rs(Cs) == Cs || "/a/i" != Rs(Is, "i");
        })
    )
  ) {
    for (
      var Ps = function (e, t) {
          var n,
            r = this instanceof Ps,
            i = Pi(e),
            o = void 0 === t;
          if (!r && i && e.constructor === Ps && o) return e;
          Es
            ? i && !o && (e = e.source)
            : e instanceof Ps && (o && (t = Yr.call(e)), (e = e.source)),
            xs && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
          var a = ja(Es ? new Rs(e, t) : Rs(e, t), r ? this : ws, Ps);
          return xs && n && ks(a, { sticky: n }), a;
        },
        As = function (e) {
          (e in Ps) ||
            Ss(Ps, e, {
              configurable: !0,
              get: function () {
                return Rs[e];
              },
              set: function (t) {
                Rs[e] = t;
              },
            });
        },
        Ds = bs(Rs),
        Os = 0;
      Ds.length > Os;

    )
      As(Ds[Os++]);
    (ws.constructor = Ps), (Ps.prototype = ws), te(r, "RegExp", Ps);
  }
  za("RegExp"),
    _i("match", 1, function (e, t, n) {
      return [
        function (t) {
          var n = f(this),
            r = null == t ? void 0 : t[e];
          return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n));
        },
        function (e) {
          var r = n(t, e, this);
          if (r.done) return r.value;
          var i = I(e),
            o = String(this);
          if (!i.global) return Ti(i, o);
          var a = i.unicode;
          i.lastIndex = 0;
          for (var s, c = [], u = 0; null !== (s = Ti(i, o)); ) {
            var d = String(s[0]);
            (c[u] = d), "" === d && (i.lastIndex = ki(o, ue(i.lastIndex), a)), u++;
          }
          return 0 === u ? null : c;
        },
      ];
    });
  var Ns =
    Object.is ||
    function (e, t) {
      return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    };
  _i("search", 1, function (e, t, n) {
    return [
      function (t) {
        var n = f(this),
          r = null == t ? void 0 : t[e];
        return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n));
      },
      function (e) {
        var r = n(t, e, this);
        if (r.done) return r.value;
        var i = I(e),
          o = String(this),
          a = i.lastIndex;
        Ns(a, 0) || (i.lastIndex = 0);
        var s = Ti(i, o);
        return Ns(i.lastIndex, a) || (i.lastIndex = a), null === s ? -1 : s.index;
      },
    ];
  });
  var Ms = mt.trim,
    Ls = r.parseFloat,
    Us =
      1 / Ls(dt + "-0") != -Infinity
        ? function (e) {
            var t = Ms(String(e)),
              n = Ls(t);
            return 0 === n && "-" == t.charAt(0) ? -0 : n;
          }
        : Ls;
  Ae({ global: !0, forced: parseFloat != Us }, { parseFloat: Us });
  var Vs = "undefined" != typeof window,
    js = "undefined" != typeof wx,
    Fs = (window.navigator && window.navigator.userAgent) || "",
    Bs = /AppleWebKit\/([\d.]+)/i.exec(Fs),
    zs = Bs ? parseFloat(Bs.pop()) : null,
    Gs = /iPad/i.test(Fs),
    Hs = /iPhone/i.test(Fs) && !Gs,
    Ws = /iPod/i.test(Fs),
    Js = Hs || Gs || Ws,
    Qs =
      Js &&
      (function () {
        var e = Fs.match(/OS (\d+)_/i);
        return e && e[1] ? e[1] : null;
      })(),
    qs = /Android/i.test(Fs),
    Ks =
      qs &&
      (function () {
        var e = Fs.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
        if (!e) return null;
        var t = e[1] && parseFloat(e[1]),
          n = e[2] && parseFloat(e[2]);
        return t && n ? parseFloat(e[1] + "." + e[2]) : t || null;
      })(),
    Xs = qs && /webkit/i.test(Fs) && Ks < 2.3,
    $s = qs && Ks < 5 && zs < 537,
    Ys = /Firefox/i.test(Fs),
    Zs =
      Ys &&
      (function () {
        var e = Fs.match(/Firefox\/(\d+)/);
        return e && e[1] ? parseFloat(e[1]) : null;
      })(),
    ec = /Edge\//i.test(Fs),
    tc =
      ec &&
      (function () {
        var e = Fs.match(/Edge\/(\d+)/i);
        if (e && e[1]) return e[1];
      })(),
    nc = /Edg\//i.test(Fs),
    rc =
      nc &&
      (function () {
        var e = Fs.match(/Edg\/(\d+)/);
        return e && e[1] ? parseFloat(e[1]) : null;
      })(),
    ic = /SogouMobileBrowser\//i.test(Fs),
    oc =
      ic &&
      (function () {
        var e = Fs.match(/SogouMobileBrowser\/(\d+)/);
        return e && e[1] ? parseFloat(e[1]) : null;
      })(),
    ac = /MetaSr\s/i.test(Fs),
    sc =
      ac &&
      (function () {
        var e = Fs.match(/MetaSr(\s\d+(\.\d+)+)/);
        return e && e[1] ? parseFloat(e[1]) : null;
      })(),
    cc = /TBS\/\d+/i.test(Fs),
    uc =
      cc &&
      (function () {
        var e = Fs.match(/TBS\/(\d+)/i);
        if (e && e[1]) return e[1];
      })(),
    dc = /XWEB\/\d+/i.test(Fs),
    lc =
      dc &&
      (function () {
        var e = Fs.match(/XWEB\/(\d+)/i);
        if (e && e[1]) return e[1];
      })(),
    pc = /MSIE\s8\.0/.test(Fs),
    hc = /MSIE\/\d+/i.test(Fs),
    fc =
      hc &&
      (function () {
        var e = /MSIE\s(\d+)\.\d/.exec(Fs),
          t = e && parseFloat(e[1]);
        return !t && /Trident\/7.0/i.test(Fs) && /rv:11.0/.test(Fs) && (t = 11), t;
      })(),
    mc = /(micromessenger|webbrowser)/i.test(Fs),
    vc =
      mc &&
      (function () {
        var e = Fs.match(/MicroMessenger\/(\d+)/i);
        if (e && e[1]) return e[1];
      })(),
    gc = !cc && /MQQBrowser\/\d+/i.test(Fs) && /COVC\/\d+/i.test(Fs),
    _c = !cc && /MQQBrowser\/\d+/i.test(Fs) && !/COVC\/\d+/i.test(Fs),
    yc =
      (_c || gc) &&
      (function () {
        var e = Fs.match(/ MQQBrowser\/([\d.]+)/);
        return e && e[1] ? e[1] : null;
      })(),
    Sc = !cc && / QQBrowser\/\d+/i.test(Fs),
    bc =
      Sc &&
      (function () {
        var e = Fs.match(/ QQBrowser\/([\d.]+)/);
        return e && e[1] ? e[1] : null;
      })(),
    kc = !cc && /QQBrowserLite\/\d+/i.test(Fs),
    Tc =
      kc &&
      (function () {
        var e = Fs.match(/QQBrowserLite\/([\d.]+)/);
        return e && e[1] ? e[1] : null;
      })(),
    Rc = !cc && /MQBHD\/\d+/i.test(Fs),
    wc =
      Rc &&
      (function () {
        var e = Fs.match(/MQBHD\/([\d.]+)/);
        return e && e[1] ? e[1] : null;
      })(),
    Ic = /Windows/i.test(Fs),
    Cc = !Js && /MAC OS X/i.test(Fs),
    Ec = !qs && /Linux/i.test(Fs),
    xc = /MicroMessenger/i.test(Fs),
    Pc = /UCBrowser/i.test(Fs),
    Ac = /Electron/i.test(Fs),
    Dc = /MiuiBrowser/i.test(Fs),
    Oc =
      Dc &&
      (function () {
        var e = Fs.match(/MiuiBrowser\/([\d.]+)/);
        return e && e[1] ? e[1] : null;
      })(),
    Nc = /HuaweiBrowser/i.test(Fs),
    Mc =
      Nc &&
      (function () {
        var e = Fs.match(/HuaweiBrowser\/([\d.]+)/);
        return e && e[1] ? e[1] : null;
      })(),
    Lc = /SamsungBrowser/i.test(Fs),
    Uc =
      Lc &&
      (function () {
        var e = Fs.match(/SamsungBrowser\/([\d.]+)/);
        return e && e[1] ? e[1] : null;
      })(),
    Vc = /HeyTapBrowser/i.test(Fs),
    jc =
      Vc &&
      (function () {
        var e = Fs.match(/HeyTapBrowser\/([\d.]+)/);
        return e && e[1] ? e[1] : null;
      })(),
    Fc = /VivoBrowser/i.test(Fs),
    Bc =
      Fc &&
      (function () {
        var e = Fs.match(/VivoBrowser\/([\d.]+)/);
        return e && e[1] ? e[1] : null;
      })(),
    zc = /Chrome/i.test(Fs),
    Gc =
      !ec &&
      !ac &&
      !ic &&
      !cc &&
      !dc &&
      !nc &&
      !Sc &&
      !Dc &&
      !Nc &&
      !Lc &&
      !Vc &&
      !Fc &&
      /Chrome/i.test(Fs),
    Hc =
      Gc &&
      (function () {
        var e = Fs.match(/Chrome\/(\d+)/);
        return e && e[1] ? parseFloat(e[1]) : null;
      })(),
    Wc =
      Gc &&
      (function () {
        var e = Fs.match(/Chrome\/([\d.]+)/);
        return e && e[1] ? e[1] : null;
      })(),
    Jc = !zc && !_c && !gc && !kc && !Rc && /Safari/i.test(Fs),
    Qc = Jc || Js,
    qc =
      Jc &&
      (function () {
        var e = Fs.match(/Version\/([\d.]+)/);
        return e && e[1] ? e[1] : null;
      })(),
    Kc = Gc ? "Chrome/" + Wc : Jc ? "Safari/" + qc : "NotSupportedBrowser",
    Xc =
      "file:" === location.protocol ||
      "localhost" === location.hostname ||
      /^\d+\.\d+\.\d+\.\d+$/.test(location.hostname),
    $c = Object.freeze({
      __proto__: null,
      IN_Browser: Vs,
      IN_WXMiniProgram: js,
      USER_AGENT: Fs,
      IS_IPAD: Gs,
      IS_IPHONE: Hs,
      IS_IPOD: Ws,
      IS_IOS: Js,
      IOS_VERSION: Qs,
      IS_ANDROID: qs,
      ANDROID_VERSION: Ks,
      IS_OLD_ANDROID: Xs,
      IS_NATIVE_ANDROID: $s,
      IS_FIREFOX: Ys,
      FIREFOX_VERSION: Zs,
      IS_EDGE: ec,
      EDGE_VERSION: tc,
      IS_EDG: nc,
      EDG_VERSION: rc,
      IS_SOGOUM: ic,
      SOGOUM_VERSION: oc,
      IS_SOGOU: ac,
      SOGOU_VERSION: sc,
      IS_TBS: cc,
      TBS_VERSION: uc,
      IS_XWEB: dc,
      XWEB_VERSION: lc,
      IS_IE8: pc,
      IS_IE: hc,
      IE_VERSION: fc,
      IS_WECHAT: mc,
      WECHAT_VERSION: vc,
      IS_X5MQQB: gc,
      IS_MQQB: _c,
      MQQB_VERSION: yc,
      IS_WQQB: Sc,
      WQQB_VERSION: bc,
      IS_MACQQB: kc,
      MACQQB_VERSION: Tc,
      IS_IPADQQB: Rc,
      IPADQQB_VERSION: wc,
      IS_WIN: Ic,
      IS_MAC: Cc,
      IS_LINUX: Ec,
      IS_WX: xc,
      IS_UCBROWSER: Pc,
      IS_ELECTRON: Ac,
      IS_MIBROWSER: Dc,
      MI_VERSION: Oc,
      IS_HUAWEIBROWSER: Nc,
      HUAWEI_VERSION: Mc,
      IS_SAMSUNGBROWSER: Lc,
      SAMSUNG_VERSION: Uc,
      IS_OPPOBROWSER: Vc,
      OPPO_VERSION: jc,
      IS_VIVOBROWSER: Fc,
      VIVO_VERSION: Bc,
      IS_CHROME_ONLY: zc,
      IS_CHROME: Gc,
      CHROME_MAJOR_VERSION: Hc,
      CHROME_VERSION: Wc,
      IS_SAFARI: Jc,
      IS_ANY_SAFARI: Qc,
      SAFARI_VERSION: qc,
      BROWSER_VERSION: Kc,
      IS_LOCAL: Xc,
    }),
    Yc = "wss://bk.rtc.qq.com",
    Zc = "wss://trtc.rtc.qq.com",
    eu = "wss://webrtc.qq.com",
    tu = "".concat("wss://qcloud.rtc.qq.com", ":443"),
    nu = "".concat(Yc, ":443"),
    ru = "",
    iu = function (e) {
      return (ru = e);
    },
    ou = 1,
    au = 2,
    su = 20,
    cu = 21,
    uu = "5Y2wZK8nANNAoVw6dSAHVjNxrD1ObBM2kBPV",
    du = "224d130c-7b5c-415b-aaa2-79c2eb5a6df2",
    lu = 2,
    pu = "DISCONNECTED",
    hu = "CONNECTING",
    fu = "RECONNECTING",
    mu = "CONNECTED",
    vu = "join",
    gu = "delta-join",
    _u = "rejoin",
    yu = "leave",
    Su = "delta-leave",
    bu = "publish",
    ku = "delta-publish",
    Tu = "unpublish",
    Ru = "subscribe",
    wu = "unsubscribe",
    Iu = "uplink-connection",
    Cu = "uplink-reconnection",
    Eu = "downlink-connection",
    xu = "downlink-reconnection",
    Pu = "setLocalDescription",
    Au = "setRemoteDescription",
    Du = "iceConnectionState",
    Ou = "stream-initialize",
    Nu = "websocketConnectionState",
    Mu = "websocketReconnectionState",
    Lu = "update-stream",
    Uu = "recover-subscription",
    Vu = "start-mix-transcode",
    ju = "stop-mix-transcode",
    Fu = "player-error",
    Bu = "unsubscribe",
    zu = "subscribe_change",
    Gu = { MANUAL: "manual", PRESET_LAYOUT: "preset-layout" },
    Hu = { REMOTE: "$PLACE_HOLDER_REMOTE$" },
    Wu = { IT_AUDIO_VIDEO: 0, IT_PICTURE: 2, IT_CANVAS: 3, IT_PURE_AUDIO: 4, IT_PURE_VIDEO: 5 },
    Ju = "String",
    Qu = "Number",
    qu = "Boolean",
    Ku = "Array",
    Xu = "audio",
    $u = "video",
    Yu = "auxiliary",
    Zu = "add",
    ed = "remove",
    td = { unknown: 0, wifi: 1, "3g": 2, "2g": 3, "4g": 4, wired: 5 },
    nd = -1,
    rd = 0,
    id = 1,
    od = function (e) {
      var t = window.location.search.match(new RegExp("(\\?|&)" + e + "=([^&]*)(&|$)"));
      return t ? decodeURIComponent(t[2]) : "";
    },
    ad = function () {
      return od("trtc_env");
    },
    sd = function (e) {
      var t = e,
        n = od("trtc_env");
      return n && (t = "wss://" + n + ".rtc.qq.com:443"), t;
    },
    cd = function () {
      return "".concat(
        ru || "https://yun.tim.qq.com",
        "/v5/AVQualityReportSvc/C2S?sdkappid=1&cmdtype=jssdk_log"
      );
    };
  function ud() {
    var e = navigator.userAgent,
      t = navigator.connection,
      n = e.match(/NetType\/\w+/) ? e.match(/NetType\/\w+/)[0] : "";
    "3gnet" === (n = n.toLowerCase().replace("nettype/", "")) && (n = "3g");
    var r = t && t.type && t.type.toLowerCase(),
      i = t && t.effectiveType && t.effectiveType.toLowerCase();
    "slow-2" === i && (i = "2g");
    var o = n || "unknown";
    if (r)
      switch (r) {
        case "cellular":
        case "wimax":
          o = i || "unknown";
          break;
        case "wifi":
          o = "wifi";
          break;
        case "ethernet":
          o = "wired";
          break;
        case "none":
        case "other":
        case "unknown":
          o = "unknown";
      }
    return or.info("networkType:", o), td[o];
  }
  var dd = function (e) {
    if (!e || "object" !== gt(e) || "[object Object]" != Object.prototype.toString.call(e))
      return !1;
    var t = Object.getPrototypeOf(e);
    if (null === t) return !0;
    var n = Object.prototype.hasOwnProperty.call(t, "constructor") && t.constructor;
    return (
      "function" == typeof n &&
      n instanceof n &&
      Function.prototype.toString.call(n) === Function.prototype.toString.call(Object)
    );
  };
  function ld(e) {
    var t = Math.round(e / 2) + 1;
    return t > 6
      ? 13e3
      : 1e3 *
          (function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            return t <= 1 ? r : e(t - 1, r, n + r);
          })(t);
  }
  var pd,
    hd = function (e) {
      return "function" == typeof e;
    },
    fd = function (e) {
      return void 0 === e;
    },
    md = function (e) {
      return "string" == typeof e;
    },
    vd = function (e) {
      return "number" == typeof e;
    };
  function gd(e) {
    return Reflect.apply(Object.prototype.toString, e, [])
      .replace(/^\[object\s(\w+)\]$/, "$1")
      .toLowerCase();
  }
  function _d(e, t) {
    for (var n in e)
      if (t[n] && "undefined" !== gd(e[n]) && gd(e[n]) !== t[n].toLowerCase())
        return { ret: !1, message: "".concat(n, " should be ").concat(t[n]) };
    return { ret: !0 };
  }
  function yd(e) {
    var t = {};
    return (
      (t.urls = "turn:".concat(e.url)),
      fd(e.username) ||
        fd(e.credential) ||
        ((t.username = e.username),
        (t.credential = e.credential),
        (t.credentialType = "password"),
        fd(e.credentialType) || (t.credentialType = e.credentialType)),
      t
    );
  }
  function Sd(e) {
    try {
      return JSON.stringify(e);
    } catch (Av) {
      if (!pd)
        try {
          var t = {};
          (t.a = t), JSON.stringify(t);
        } catch (n) {
          pd = n.message;
        }
      if (Av.message === pd) return "[Circular]";
      throw Av;
    }
  }
  function bd(e) {
    var t = "",
      n = 0;
    return (
      e.length > 1 &&
        "string" == typeof e[0] &&
        ((t = (t = e[0].replace(/(%?)(%([sdjo]))/g, function (t, r, i, o) {
          if (!r) {
            var a = e[(n += 1)],
              s = "";
            switch (o) {
              case "s":
                s += a;
                break;
              case "d":
                s += +a;
                break;
              case "j":
                s = Sd(a);
                break;
              case "o":
                var c = Sd(a);
                "{" !== c[0] && "[" !== c[0] && (c = "<".concat(c, ">")),
                  (s =
                    (function (e) {
                      if (!Object.getOwnPropertyDescriptor || !Object.getPrototypeOf)
                        return Object.prototype.toString.call(e).slice(8, -1);
                      for (; e; ) {
                        var t = Object.getOwnPropertyDescriptor(e, "constructor");
                        if (void 0 !== t && "function" == typeof t.value && "" !== t.value.name)
                          return t.value.name;
                        e = Object.getPrototypeOf(e);
                      }
                      return "";
                    })(a) + c);
            }
            return s;
          }
          return t;
        })).replace(/%{2,2}/g, "%")),
        (n += 1)),
      e.length > n && (t && (t += " "), (t += e.slice(n).join(" "))),
      t
    );
  }
  var kd = Object.prototype.hasOwnProperty;
  function Td() {
    try {
      throw new Error();
    } catch (e) {
      return e.stack;
    }
  }
  function Rd(e) {
    var t = this,
      n = [],
      r = [];
    (this.length = function () {
      return n.length;
    }),
      (this.sent = function () {
        return r.length;
      }),
      (this.push = function (t) {
        n.push(t), n.length > e && n.shift();
      }),
      (this.send = function () {
        return r.length || ((r = n), (n = [])), r;
      }),
      (this.confirm = function () {
        (r = []), (t.content = "");
      }),
      (this.fail = function () {
        (n = r.concat(n)), t.confirm();
        var i = 1 + n.length + r.length - e;
        i > 0 && (r.splice(0, i), (n = r.concat(n)), t.confirm());
      });
  }
  var wd,
    Id,
    Cd,
    Ed = !!Td();
  function xd(e) {
    return "["
      .concat(e.timestamp, "] <")
      .concat(e.level.label.toUpperCase(), ">")
      .concat(e.logger ? " (".concat(e.logger, ")") : "", ": ")
      .concat(e.message)
      .concat(e.stacktrace ? "\n".concat(e.stacktrace) : "");
  }
  var Pd = {
      interval: 1e3,
      level: "trace",
      capacity: 0,
      stacktrace: { levels: ["trace", "warn", "error"], depth: 3, excess: 0 },
      timestamp: function () {
        return new Date().toISOString();
      },
      format: xd,
    },
    Ad = -1,
    Dd = !1,
    Od = "",
    Nd = "",
    Md = "",
    Ld = function (e) {
      Dd ||
        ((Od = "".concat(e.sdkAppId)),
        (Nd = "".concat(e.userId)),
        (Md = "".concat(e.version)),
        (Dd = !0));
    },
    Ud = function (e, t) {
      if (!e || !e.getLogger) throw new TypeError("Argument is not a root loglevel object");
      if (wd) throw new Error("You can assign a plugin only one time");
      wd = e;
      var n = (function e() {
        for (var t = {}, n = 0; n < arguments.length; n += 1) {
          var r = Object(arguments[n]);
          for (var i in r)
            kd.call(r, i) &&
              (t[i] = "object" !== gt(r[i]) || Array.isArray(r[i]) ? r[i] : e(t[i], r[i]));
        }
        return t;
      })(Pd, t);
      n.capacity = n.capacity || 500;
      var r,
        i = n.interval;
      Ad = cs.setInterval(function () {
        if (!Dd) return;
        if (!o.sent()) {
          if (!o.length()) return;
          var e = o.send();
          (o.content = r ? '{"logs":['.concat(e.join(","), "]}") : e.join("\n")),
            (function (e) {
              if (!Dd) return;
              var t = JSON.stringify({
                timestamp: ls(),
                sdkAppId: Od,
                userId: Nd,
                version: Md,
                log: e,
              });
              Jo.post(cd(), t)
                .then(function () {
                  o.confirm();
                })
                .catch(function () {
                  o.fail();
                });
            })(o.content);
        }
      }, i);
      var o = new Rd(n.capacity);
      return (
        (Id = e.methodFactory),
        (Cd = function (e, t, i) {
          var a = Id(e, t, i),
            s =
              Ed &&
              n.stacktrace.levels.some(function (t) {
                return t === e;
              }),
            c = wd.levels[e.toUpperCase()];
          return function () {
            for (var u = arguments.length, d = new Array(u), l = 0; l < u; l++) d[l] = arguments[l];
            var p = bd(d),
              h = c >= t;
            if (h) {
              var f = new Date();
              f.setTime(ds());
              var m = f.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1"),
                v = "[" + m + "] <" + e.toUpperCase() + "> " + p;
              a.apply(void 0, [v]);
            }
            var g = ls(),
              _ = s ? Td() : "";
            if (_) {
              var y = _.split("\n");
              y.splice(0, n.stacktrace.excess + 3);
              var S = n.stacktrace.depth;
              if (S && y.length !== S + 1) {
                var b = y.splice(0, S);
                (_ = b.join("\n")), y.length && (_ += "\n    and ".concat(y.length, " more"));
              } else _ = y.join("\n");
            }
            var k = n.format({
              message: p,
              level: { label: e, value: c },
              logger: i || "",
              timestamp: g,
              stacktrace: _,
            });
            void 0 === r && (r = "string" != typeof k);
            var T = "";
            if (r)
              try {
                T += JSON.stringify(k);
              } catch (Av) {
                return a.apply(void 0, d), void wd.getLogger("logger").error(Av);
              }
            else T += k;
            o.push(T);
          };
        }),
        (e.methodFactory = Cd),
        e.setLevel(e.getLevel()),
        e
      );
    },
    Vd = function () {
      if (!wd) throw new Error("You can't disable a not appled plugin");
      if (Cd !== wd.methodFactory)
        throw new Error("You can't disable a plugin after appling another plugin");
      (wd.methodFactory = Id), wd.setLevel(wd.getLevel()), (wd = void 0), cs.clearInterval(Ad);
    },
    jd = !1;
  (or.setConfig = function (e) {
    Ld(e);
  }),
    (or.setLogLevel = function (e) {
      or.setLevel(e);
    }),
    (or.getLogLevel = function (e) {
      return or.getLevel(e);
    }),
    (or.enableUploadLog = function () {
      jd || (Ud(or), (jd = !0));
    }),
    (or.disableUploadLog = function () {
      jd &&
        (or.warn(
          "disable upload log! Without log we are difficult to help you triage the issue you might run into!"
        ),
        Vd(),
        (jd = !1));
    }),
    or.enableUploadLog(),
    or.setLevel("INFO");
  var Fd = !0,
    Bd = Je.findIndex,
    zd = !0,
    Gd = rt("findIndex");
  "findIndex" in [] &&
    Array(1).findIndex(function () {
      zd = !1;
    }),
    Ae(
      { target: "Array", proto: !0, forced: zd || !Gd },
      {
        findIndex: function (e) {
          return Bd(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
    aa("findIndex");
  var Hd = Je.forEach,
    Wd = lr("forEach"),
    Jd = rt("forEach"),
    Qd =
      Wd && Jd
        ? [].forEach
        : function (e) {
            return Hd(this, e, arguments.length > 1 ? arguments[1] : void 0);
          };
  Ae({ target: "Array", proto: !0, forced: [].forEach != Qd }, { forEach: Qd });
  var qd = ye.f,
    Kd = w.f,
    Xd = E.f,
    $d = mt.trim,
    Yd = r.Number,
    Zd = Yd.prototype,
    el = "Number" == l(ea(Zd)),
    tl = function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        c,
        u = g(e, !1);
      if ("string" == typeof u && u.length > 2)
        if (43 === (t = (u = $d(u)).charCodeAt(0)) || 45 === t) {
          if (88 === (n = u.charCodeAt(2)) || 120 === n) return NaN;
        } else if (48 === t) {
          switch (u.charCodeAt(1)) {
            case 66:
            case 98:
              (r = 2), (i = 49);
              break;
            case 79:
            case 111:
              (r = 8), (i = 55);
              break;
            default:
              return +u;
          }
          for (a = (o = u.slice(2)).length, s = 0; s < a; s++)
            if ((c = o.charCodeAt(s)) < 48 || c > i) return NaN;
          return parseInt(o, r);
        }
      return +u;
    };
  if (xe("Number", !Yd(" 0o1") || !Yd("0b1") || Yd("+0x1"))) {
    for (
      var nl,
        rl = function (e) {
          var t = arguments.length < 1 ? 0 : e,
            n = this;
          return n instanceof rl &&
            (el
              ? i(function () {
                  Zd.valueOf.call(n);
                })
              : "Number" != l(n))
            ? ja(new Yd(tl(t)), n, rl)
            : tl(t);
        },
        il = o
          ? qd(Yd)
          : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(
              ","
            ),
        ol = 0;
      il.length > ol;
      ol++
    )
      y(Yd, (nl = il[ol])) && !y(rl, nl) && Xd(rl, nl, Kd(Yd, nl));
    (rl.prototype = Zd), (Zd.constructor = rl), te(r, "Number", rl);
  }
  var al = Math.floor;
  Ae(
    { target: "Number", stat: !0 },
    {
      isInteger: function (e) {
        return !v(e) && isFinite(e) && al(e) === e;
      },
    }
  );
  var sl = mt.trim,
    cl = r.parseInt,
    ul = /^[+-]?0[Xx]/,
    dl =
      8 !== cl(dt + "08") || 22 !== cl(dt + "0x16")
        ? function (e, t) {
            var n = sl(String(e));
            return cl(n, t >>> 0 || (ul.test(n) ? 16 : 10));
          }
        : cl;
  Ae({ global: !0, forced: parseInt != dl }, { parseInt: dl });
  var ll,
    pl,
    hl,
    fl = r.Promise,
    ml = /(iphone|ipod|ipad).*applewebkit/i.test(Qe),
    vl = "process" == l(r.process),
    gl = r.location,
    _l = r.setImmediate,
    yl = r.clearImmediate,
    Sl = r.process,
    bl = r.MessageChannel,
    kl = r.Dispatch,
    Tl = 0,
    Rl = {},
    wl = function (e) {
      if (Rl.hasOwnProperty(e)) {
        var t = Rl[e];
        delete Rl[e], t();
      }
    },
    Il = function (e) {
      return function () {
        wl(e);
      };
    },
    Cl = function (e) {
      wl(e.data);
    },
    El = function (e) {
      r.postMessage(e + "", gl.protocol + "//" + gl.host);
    };
  (_l && yl) ||
    ((_l = function (e) {
      for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
      return (
        (Rl[++Tl] = function () {
          ("function" == typeof e ? e : Function(e)).apply(void 0, t);
        }),
        ll(Tl),
        Tl
      );
    }),
    (yl = function (e) {
      delete Rl[e];
    }),
    vl
      ? (ll = function (e) {
          Sl.nextTick(Il(e));
        })
      : kl && kl.now
      ? (ll = function (e) {
          kl.now(Il(e));
        })
      : bl && !ml
      ? ((hl = (pl = new bl()).port2), (pl.port1.onmessage = Cl), (ll = Oe(hl.postMessage, hl, 1)))
      : r.addEventListener &&
        "function" == typeof postMessage &&
        !r.importScripts &&
        gl &&
        "file:" !== gl.protocol &&
        !i(El)
      ? ((ll = El), r.addEventListener("message", Cl, !1))
      : (ll =
          "onreadystatechange" in k("script")
            ? function (e) {
                Ko.appendChild(k("script")).onreadystatechange = function () {
                  Ko.removeChild(this), wl(e);
                };
              }
            : function (e) {
                setTimeout(Il(e), 0);
              }));
  var xl,
    Pl,
    Al,
    Dl,
    Ol,
    Nl,
    Ml,
    Ll,
    Ul = { set: _l, clear: yl },
    Vl = w.f,
    jl = Ul.set,
    Fl = r.MutationObserver || r.WebKitMutationObserver,
    Bl = r.document,
    zl = r.process,
    Gl = r.Promise,
    Hl = Vl(r, "queueMicrotask"),
    Wl = Hl && Hl.value;
  Wl ||
    ((xl = function () {
      var e, t;
      for (vl && (e = zl.domain) && e.exit(); Pl; ) {
        (t = Pl.fn), (Pl = Pl.next);
        try {
          t();
        } catch (Av) {
          throw (Pl ? Dl() : (Al = void 0), Av);
        }
      }
      (Al = void 0), e && e.enter();
    }),
    !ml && !vl && Fl && Bl
      ? ((Ol = !0),
        (Nl = Bl.createTextNode("")),
        new Fl(xl).observe(Nl, { characterData: !0 }),
        (Dl = function () {
          Nl.data = Ol = !Ol;
        }))
      : Gl && Gl.resolve
      ? ((Ml = Gl.resolve(void 0)),
        (Ll = Ml.then),
        (Dl = function () {
          Ll.call(Ml, xl);
        }))
      : (Dl = vl
          ? function () {
              zl.nextTick(xl);
            }
          : function () {
              jl.call(r, xl);
            }));
  var Jl,
    Ql,
    ql,
    Kl,
    Xl =
      Wl ||
      function (e) {
        var t = { fn: e, next: void 0 };
        Al && (Al.next = t), Pl || ((Pl = t), Dl()), (Al = t);
      },
    $l = function (e) {
      var t, n;
      (this.promise = new e(function (e, r) {
        if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
        (t = e), (n = r);
      })),
        (this.resolve = De(t)),
        (this.reject = De(n));
    },
    Yl = {
      f: function (e) {
        return new $l(e);
      },
    },
    Zl = function (e, t) {
      if ((I(e), v(t) && t.constructor === e)) return t;
      var n = Yl.f(e);
      return (0, n.resolve)(t), n.promise;
    },
    ep = function (e) {
      try {
        return { error: !1, value: e() };
      } catch (Av) {
        return { error: !0, value: Av };
      }
    },
    tp = Ul.set,
    np = Be("species"),
    rp = "Promise",
    ip = ee.get,
    op = ee.set,
    ap = ee.getterFor(rp),
    sp = fl,
    cp = r.TypeError,
    up = r.document,
    dp = r.process,
    lp = ie("fetch"),
    pp = Yl.f,
    hp = pp,
    fp = !!(up && up.createEvent && r.dispatchEvent),
    mp = "function" == typeof PromiseRejectionEvent,
    vp = xe(rp, function () {
      if (!(L(sp) !== String(sp))) {
        if (66 === $e) return !0;
        if (!vl && !mp) return !0;
      }
      if ($e >= 51 && /native code/.test(sp)) return !1;
      var e = sp.resolve(1),
        t = function (e) {
          e(
            function () {},
            function () {}
          );
        };
      return ((e.constructor = {})[np] = t), !(e.then(function () {}) instanceof t);
    }),
    gp =
      vp ||
      !Va(function (e) {
        sp.all(e).catch(function () {});
      }),
    _p = function (e) {
      var t;
      return !(!v(e) || "function" != typeof (t = e.then)) && t;
    },
    yp = function (e, t) {
      if (!e.notified) {
        e.notified = !0;
        var n = e.reactions;
        Xl(function () {
          for (var r = e.value, i = 1 == e.state, o = 0; n.length > o; ) {
            var a,
              s,
              c,
              u = n[o++],
              d = i ? u.ok : u.fail,
              l = u.resolve,
              p = u.reject,
              h = u.domain;
            try {
              d
                ? (i || (2 === e.rejection && Tp(e), (e.rejection = 1)),
                  !0 === d ? (a = r) : (h && h.enter(), (a = d(r)), h && (h.exit(), (c = !0))),
                  a === u.promise
                    ? p(cp("Promise-chain cycle"))
                    : (s = _p(a))
                    ? s.call(a, l, p)
                    : l(a))
                : p(r);
            } catch (Av) {
              h && !c && h.exit(), p(Av);
            }
          }
          (e.reactions = []), (e.notified = !1), t && !e.rejection && bp(e);
        });
      }
    },
    Sp = function (e, t, n) {
      var i, o;
      fp
        ? (((i = up.createEvent("Event")).promise = t),
          (i.reason = n),
          i.initEvent(e, !1, !0),
          r.dispatchEvent(i))
        : (i = { promise: t, reason: n }),
        !mp && (o = r["on" + e])
          ? o(i)
          : "unhandledrejection" === e &&
            (function (e, t) {
              var n = r.console;
              n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t));
            })("Unhandled promise rejection", n);
    },
    bp = function (e) {
      tp.call(r, function () {
        var t,
          n = e.facade,
          r = e.value;
        if (
          kp(e) &&
          ((t = ep(function () {
            vl ? dp.emit("unhandledRejection", r, n) : Sp("unhandledrejection", n, r);
          })),
          (e.rejection = vl || kp(e) ? 2 : 1),
          t.error)
        )
          throw t.value;
      });
    },
    kp = function (e) {
      return 1 !== e.rejection && !e.parent;
    },
    Tp = function (e) {
      tp.call(r, function () {
        var t = e.facade;
        vl ? dp.emit("rejectionHandled", t) : Sp("rejectionhandled", t, e.value);
      });
    },
    Rp = function (e, t, n) {
      return function (r) {
        e(t, r, n);
      };
    },
    wp = function (e, t, n) {
      e.done || ((e.done = !0), n && (e = n), (e.value = t), (e.state = 2), yp(e, !0));
    },
    Ip = function (e, t, n) {
      if (!e.done) {
        (e.done = !0), n && (e = n);
        try {
          if (e.facade === t) throw cp("Promise can't be resolved itself");
          var r = _p(t);
          r
            ? Xl(function () {
                var n = { done: !1 };
                try {
                  r.call(t, Rp(Ip, n, e), Rp(wp, n, e));
                } catch (Av) {
                  wp(n, Av, e);
                }
              })
            : ((e.value = t), (e.state = 1), yp(e, !1));
        } catch (Av) {
          wp({ done: !1 }, Av, e);
        }
      }
    };
  vp &&
    ((sp = function (e) {
      Oa(this, sp, rp), De(e), Jl.call(this);
      var t = ip(this);
      try {
        e(Rp(Ip, t), Rp(wp, t));
      } catch (Av) {
        wp(t, Av);
      }
    }),
    ((Jl = function (e) {
      op(this, {
        type: rp,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: [],
        rejection: !1,
        state: 0,
        value: void 0,
      });
    }).prototype = Fa(sp.prototype, {
      then: function (e, t) {
        var n = ap(this),
          r = pp(Di(this, sp));
        return (
          (r.ok = "function" != typeof e || e),
          (r.fail = "function" == typeof t && t),
          (r.domain = vl ? dp.domain : void 0),
          (n.parent = !0),
          n.reactions.push(r),
          0 != n.state && yp(n, !1),
          r.promise
        );
      },
      catch: function (e) {
        return this.then(void 0, e);
      },
    })),
    (Ql = function () {
      var e = new Jl(),
        t = ip(e);
      (this.promise = e), (this.resolve = Rp(Ip, t)), (this.reject = Rp(wp, t));
    }),
    (Yl.f = pp =
      function (e) {
        return e === sp || e === ql ? new Ql(e) : hp(e);
      }),
    "function" == typeof fl &&
      ((Kl = fl.prototype.then),
      te(
        fl.prototype,
        "then",
        function (e, t) {
          var n = this;
          return new sp(function (e, t) {
            Kl.call(n, e, t);
          }).then(e, t);
        },
        { unsafe: !0 }
      ),
      "function" == typeof lp &&
        Ae(
          { global: !0, enumerable: !0, forced: !0 },
          {
            fetch: function (e) {
              return Zl(sp, lp.apply(r, arguments));
            },
          }
        ))),
    Ae({ global: !0, wrap: !0, forced: vp }, { Promise: sp }),
    ha(sp, rp, !1),
    za(rp),
    (ql = ie(rp)),
    Ae(
      { target: rp, stat: !0, forced: vp },
      {
        reject: function (e) {
          var t = pp(this);
          return t.reject.call(void 0, e), t.promise;
        },
      }
    ),
    Ae(
      { target: rp, stat: !0, forced: vp },
      {
        resolve: function (e) {
          return Zl(this, e);
        },
      }
    ),
    Ae(
      { target: rp, stat: !0, forced: gp },
      {
        all: function (e) {
          var t = this,
            n = pp(t),
            r = n.resolve,
            i = n.reject,
            o = ep(function () {
              var n = De(t.resolve),
                o = [],
                a = 0,
                s = 1;
              Da(e, function (e) {
                var c = a++,
                  u = !1;
                o.push(void 0),
                  s++,
                  n.call(t, e).then(function (e) {
                    u || ((u = !0), (o[c] = e), --s || r(o));
                  }, i);
              }),
                --s || r(o);
            });
          return o.error && i(o.value), n.promise;
        },
        race: function (e) {
          var t = this,
            n = pp(t),
            r = n.reject,
            i = ep(function () {
              var i = De(t.resolve);
              Da(e, function (e) {
                i.call(t, e).then(n.resolve, r);
              });
            });
          return i.error && r(i.value), n.promise;
        },
      }
    );
  var Cp,
    Ep = function (e) {
      if (Pi(e)) throw TypeError("The method doesn't accept regular expressions");
      return e;
    },
    xp = Be("match"),
    Pp = function (e) {
      var t = /./;
      try {
        "/./"[e](t);
      } catch (n) {
        try {
          return (t[xp] = !1), "/./"[e](t);
        } catch (r) {}
      }
      return !1;
    },
    Ap = w.f,
    Dp = "".startsWith,
    Op = Math.min,
    Np = Pp("startsWith"),
    Mp = !(Np || ((Cp = Ap(String.prototype, "startsWith")), !Cp || Cp.writable));
  for (var Lp in (Ae(
    { target: "String", proto: !0, forced: !Mp && !Np },
    {
      startsWith: function (e) {
        var t = String(f(this));
        Ep(e);
        var n = ue(Op(arguments.length > 1 ? arguments[1] : void 0, t.length)),
          r = String(e);
        return Dp ? Dp.call(t, r, n) : t.slice(n, n + r.length) === r;
      },
    }
  ),
  Xa)) {
    var Up = r[Lp],
      Vp = Up && Up.prototype;
    if (Vp && Vp.forEach !== Qd)
      try {
        x(Vp, "forEach", Qd);
      } catch (Av) {
        Vp.forEach = Qd;
      }
  }
  var jp = fe.includes,
    Fp = rt("indexOf", { ACCESSORS: !0, 1: 0 });
  Ae(
    { target: "Array", proto: !0, forced: !Fp },
    {
      includes: function (e) {
        return jp(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
    aa("includes");
  var Bp = i(function () {
    Qo(1);
  });
  Ae(
    { target: "Object", stat: !0, forced: Bp },
    {
      keys: function (e) {
        return Qo(Ne(e));
      },
    }
  );
  var zp = c.f,
    Gp = function (e) {
      return function (t) {
        for (var n, r = m(t), i = Qo(r), a = i.length, s = 0, c = []; a > s; )
          (n = i[s++]), (o && !zp.call(r, n)) || c.push(e ? [n, r[n]] : r[n]);
        return c;
      };
    },
    Hp = { entries: Gp(!0), values: Gp(!1) }.values;
  Ae(
    { target: "Object", stat: !0 },
    {
      values: function (e) {
        return Hp(e);
      },
    }
  ),
    Ae(
      { target: "String", proto: !0, forced: !Pp("includes") },
      {
        includes: function (e) {
          return !!~String(f(this)).indexOf(Ep(e), arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  var Wp = t(function (e) {
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function i(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function o(e, t, r, o, a) {
        if ("function" != typeof r) throw new TypeError("The listener must be a function");
        var s = new i(r, o || e, a),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], s])
              : e._events[c].push(s)
            : ((e._events[c] = s), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
      }
      function s() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create && ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (s.prototype.eventNames = function () {
          var e,
            r,
            i = [];
          if (0 === this._eventsCount) return i;
          for (r in (e = this._events)) t.call(e, r) && i.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i;
        }),
        (s.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var i = 0, o = r.length, a = new Array(o); i < o; i++) a[i] = r[i].fn;
          return a;
        }),
        (s.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (s.prototype.emit = function (e, t, r, i, o, a) {
          var s = n ? n + e : e;
          if (!this._events[s]) return !1;
          var c,
            u,
            d = this._events[s],
            l = arguments.length;
          if (d.fn) {
            switch ((d.once && this.removeListener(e, d.fn, void 0, !0), l)) {
              case 1:
                return d.fn.call(d.context), !0;
              case 2:
                return d.fn.call(d.context, t), !0;
              case 3:
                return d.fn.call(d.context, t, r), !0;
              case 4:
                return d.fn.call(d.context, t, r, i), !0;
              case 5:
                return d.fn.call(d.context, t, r, i, o), !0;
              case 6:
                return d.fn.call(d.context, t, r, i, o, a), !0;
            }
            for (u = 1, c = new Array(l - 1); u < l; u++) c[u - 1] = arguments[u];
            d.fn.apply(d.context, c);
          } else {
            var p,
              h = d.length;
            for (u = 0; u < h; u++)
              switch ((d[u].once && this.removeListener(e, d[u].fn, void 0, !0), l)) {
                case 1:
                  d[u].fn.call(d[u].context);
                  break;
                case 2:
                  d[u].fn.call(d[u].context, t);
                  break;
                case 3:
                  d[u].fn.call(d[u].context, t, r);
                  break;
                case 4:
                  d[u].fn.call(d[u].context, t, r, i);
                  break;
                default:
                  if (!c) for (p = 1, c = new Array(l - 1); p < l; p++) c[p - 1] = arguments[p];
                  d[u].fn.apply(d[u].context, c);
              }
          }
          return !0;
        }),
        (s.prototype.on = function (e, t, n) {
          return o(this, e, t, n, !1);
        }),
        (s.prototype.once = function (e, t, n) {
          return o(this, e, t, n, !0);
        }),
        (s.prototype.removeListener = function (e, t, r, i) {
          var o = n ? n + e : e;
          if (!this._events[o]) return this;
          if (!t) return a(this, o), this;
          var s = this._events[o];
          if (s.fn) s.fn !== t || (i && !s.once) || (r && s.context !== r) || a(this, o);
          else {
            for (var c = 0, u = [], d = s.length; c < d; c++)
              (s[c].fn !== t || (i && !s[c].once) || (r && s[c].context !== r)) && u.push(s[c]);
            u.length ? (this._events[o] = 1 === u.length ? u[0] : u) : a(this, o);
          }
          return this;
        }),
        (s.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && a(this, t))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.addListener = s.prototype.on),
        (s.prefixed = n),
        (s.EventEmitter = s),
        (e.exports = s);
    }),
    Jp = "connection-state-changed",
    Qp = "connected",
    qp = "error",
    Kp = "DISCONNECTED",
    Xp = "CONNECTING",
    $p = "RECONNECTING",
    Yp = "CONNECTED",
    Zp = {
      ON_PUBLISH_RESPONSE: 2,
      NEW_ICE_CANDIDATE: 4,
      CLINET_BANNED: 8,
      CHANNEL_SETUP_SUCCESS: 19,
      CHANNEL_SETUP_FAILED: 80,
      REBUILD_SESSION_RESULT: 514,
      JOIN_ROOM_RESULT: 20,
      PEER_JOIN: 4134,
      PEER_LEAVE: 4135,
      STREAM_ADDED: 16,
      STREAM_REMOVED: 18,
      UPDATE_REMOTE_SDP: 48,
      UPDATE_AUDIO_SSRC: 50,
      UPDATE_VIDEO_SSRC: 52,
      UPLINK_NETWORK_STATS: 22,
      UPDATE_REMOTE_MUTE_STAT: 23,
      CLOSE_PEER_ACK: 10,
      SUBSCRIBE_ACK: 26,
      PONG: 775,
      PUBLISH_RESULT: 4098,
      UNPUBLISH_RESULT: 4100,
      SUBSCRIBE_RESULT: 4102,
      UNSUBSCRIBE_RESULT: 4104,
      SUBSCRIBE_CHANGE_RESULT: 4106,
      UPDATE_OFFER_RESULT: 4128,
      REMOTE_STREAM_UPDATE: 4130,
      START_PUBLISH_TENCENT_CDN_RES: 1286,
      STOP_PUBLISH_TENCENT_CDN_RES: 1288,
      START_PUBLISH_GIVEN_CDN_RES: 777,
      STOP_PUBLISH_GIVEN_CDN_RES: 779,
      START_MIX_TRANSCODE_RES: 781,
      STOP_MIX_TRANSCODE_RES: 783,
      USER_LIST_RES: 4137,
      SWITCH_ROLE_RES: 4110,
    },
    eh = [
      Zp.UPDATE_REMOTE_MUTE_STAT,
      Zp.UPLINK_NETWORK_STATS,
      Zp.PONG,
      Zp.REMOTE_STREAM_UPDATE,
      Zp.USER_LIST_RES,
    ],
    th = {
      ON_PUBLISH_RESPONSE: "on-publish-response",
      NEW_ICE_CANDIDATE: "new-ice-candidate",
      CLINET_BANNED: "client-banned",
      CHANNEL_SETUP_SUCCESS: "channel-setup-success",
      CHANNEL_SETUP_FAILED: "channel-setup-failed",
      REBUILD_SESSION_RESULT: "channel-reconnect-result",
      JOIN_ROOM_RESULT: "join-room-result",
      PEER_JOIN: "peer-join",
      PEER_LEAVE: "peer-leave",
      STREAM_ADDED: "stream-added",
      STREAM_REMOVED: "stream-removed",
      UPDATE_REMOTE_SDP: "update-remote-sdp",
      UPDATE_AUDIO_SSRC: "update-audio-ssrc",
      UPDATE_VIDEO_SSRC: "update-video-ssrc",
      UPLINK_NETWORK_STATS: "uplink-network-stats",
      UPDATE_REMOTE_MUTE_STAT: "update-remote-mute-stat",
      CLOSE_PEER_ACK: "close-peer-ack",
      SUBSCRIBE_ACK: "subscribe-ack",
      REQUEST_REBUILD_SESSION: "request-rebuild-session",
      CLIENT_REJOIN: "client-rejoin",
      PONG: "pong",
      PUBLISH_RESULT: "publish-result",
      UNPUBLISH_RESULT: "unpublish-result",
      SUBSCRIBE_RESULT: "subscribe-result",
      SUBSCRIBE_CHANGE_RESULT: "subscribe-change-result",
      UNSUBSCRIBE_RESULT: "unsubscribe-result",
      UPDATE_OFFER_RESULT: "update-offer-result",
      REMOTE_STREAM_UPDATE: "remote-stream-update",
      START_PUBLISH_TENCENT_CDN_RES: "start-publish-tencent-cdn-res",
      STOP_PUBLISH_TENCENT_CDN_RES: "stop-publish-tencent-cdn-res",
      START_PUBLISH_GIVEN_CDN_RES: "start-publish-given-cdn-res",
      STOP_PUBLISH_GIVEN_CDN_RES: "stop-publish-given-cdn-res",
      START_MIX_TRANSCODE_RES: "start-mix-transcode-res",
      STOP_MIX_TRANSCODE_RES: "stop-mix-transcode-res",
      USER_LIST_RES: "user-list-res",
      SWITCH_ROLE_RES: "switch_role_res",
    },
    nh = "on_update_track",
    rh = "on_create_room",
    ih = "on_quit_room",
    oh = "on_quality_report",
    ah = "on_rebuild_session",
    sh = "on_mute_uplink",
    ch = "on_constraints_config",
    uh = "ping",
    dh = "on_publish",
    lh = "on_unpublish",
    ph = "on_sub",
    hh = "on_unsub",
    fh = "on_sub_change",
    mh = "on_start_publishing",
    vh = "on_stop_publishing",
    gh = "on_start_push_user_cdn",
    _h = "on_stop_push_user_cdn",
    yh = "on_start_mcu_mix",
    Sh = "on_stop_mcu_mix",
    bh = "on_get_user_list",
    kh = "on_switch_role",
    Th = {
      INVALID_PARAMETER: 4096,
      INVALID_OPERATION: 4097,
      NOT_SUPPORTED: 4098,
      DEVICE_NOT_FOUND: 4099,
      SIGNAL_CHANNEL_SETUP_FAILED: 16385,
      SIGNAL_CHANNEL_ERROR: 16386,
      ICE_TRANSPORT_ERROR: 16387,
      JOIN_ROOM_FAILED: 16388,
      CREATE_OFFER_FAILED: 16389,
      SIGNAL_CHANNEL_RECONNECTION_FAILED: 16390,
      UPLINK_RECONNECTION_FAILED: 16391,
      DOWNLINK_RECONNECTION_FAILED: 16392,
      CLIENT_BANNED: 16448,
      SERVER_TIMEOUT: 16449,
      SUBSCRIPTION_TIMEOUT: 16450,
      PLAY_NOT_ALLOWED: 16451,
      DEVICE_AUTO_RECOVER_FAILED: 16452,
      START_PUBLISH_CDN_FAILED: 16453,
      STOP_PUBLISH_CDN_FAILED: 16454,
      START_MIX_TRANSCODE_FAILED: 16455,
      STOP_MIX_TRANSCODE_FAILED: 16456,
      NOT_SUPPORTED_H264: 16457,
      SWITCH_ROLE_FAILED: 16458,
      UNKNOWN: 65535,
    },
    Rh = (function (e) {
      It(n, e);
      var t = Ot(n);
      function n(e) {
        var r,
          i = e.message,
          o = e.code,
          a = void 0 === o ? Th.UNKNOWN : o,
          s = e.extraCode,
          c = void 0 === s ? 0 : s;
        return (
          St(this, n),
          ((r = t.call(
            this,
            i +
              " <"
                .concat(
                  (function (e) {
                    for (var t in Th) if (Th[t] === e) return t;
                    return "UNKNOWN";
                  })(a),
                  " 0x"
                )
                .concat(
                  a.toString(16),
                  "> https://web.sdk.qcloud.com/trtc/webrtc/doc/zh-cn/module-ErrorCode.html"
                )
          )).code_ = a),
          (r.extraCode_ = c),
          (r.name = "RtcError"),
          (r.message_ = i),
          r
        );
      }
      return (
        kt(n, [
          {
            key: "getCode",
            value: function () {
              return this.code_;
            },
          },
          {
            key: "getExtraCode",
            value: function () {
              return this.extraCode_;
            },
          },
        ]),
        n
      );
    })(At(Error)),
    wh = 32768,
    Ih = 32769,
    Ch = 32770,
    Eh = 32771,
    xh = 32772,
    Ph = 32773,
    Ah = 32774,
    Dh = 32775,
    Oh = 32777,
    Nh = 32778,
    Mh = 32779,
    Lh = 32780,
    Uh = 32781,
    Vh = 32782,
    jh = 32783,
    Fh = 32784,
    Bh = 32785,
    zh = 32786,
    Gh = 32787,
    Hh = 32788,
    Wh = 32789,
    Jh = 32790,
    Qh = 32791,
    qh = 32792,
    Kh = 32793,
    Xh = 32794,
    $h = 32795,
    Yh = 32796,
    Zh = 32797,
    ef = 32798,
    tf = 32799,
    nf = 32800,
    rf = 32801,
    of = 32802,
    af = new Map(),
    sf = function (e, t) {
      var n = af.get(e);
      n || (af.set(e, []), (n = af.get(e))), n.push(t);
    },
    cf = function (e) {
      var t = af.get(e);
      return t ? af.delete(e) : (t = []), t;
    },
    uf = { sdkAppId: "", userId: "", version: "", env: "qcloud", browserVersion: "", ua: "" },
    df = function (e) {
      (uf.sdkAppId = "".concat(e.sdkAppId)),
        (uf.version = "".concat(e.version)),
        (uf.env = e.env),
        (uf.userId = e.userId),
        (uf.browserVersion = e.browserVersion),
        (uf.ua = e.ua);
    },
    lf = function (e, t) {
      var n = {
        timestamp: ls(),
        sdkAppId: uf.sdkAppId,
        userId: uf.userId,
        version: uf.version,
        log: e,
      };
      t && (n.errorInfo = t.message), Jo.post(cd(), JSON.stringify(n)).catch(function () {});
    },
    pf = function (e) {
      var t = "stat-".concat(e.eventType, "-").concat(e.result);
      ("delta-join" !== e.eventType &&
        "delta-leave" !== e.eventType &&
        "delta-publish" !== e.eventType) ||
        (t = "".concat(e.eventType, ":").concat(e.delta)),
        lf(t),
        "failed" === e.result &&
          ((t = "stat-".concat(e.eventType, "-").concat(e.result, "-").concat(e.code)),
          lf(t, e.error));
    },
    hf = function (e) {
      if (!Xc) {
        var t = wt(wt({}, e), uf);
        void 0 === t.code && (t.code = "failed" === t.result ? Th.UNKNOWN : 0),
          Jo.post(
            "".concat(
              ru || "https://yun.tim.qq.com",
              "/v5/AVQualityReportSvc/C2S?sdkappid=1&cmdtype=jssdk_event"
            ),
            JSON.stringify(t)
          ).catch(function () {});
      }
    },
    ff = function (e) {
      Xc ||
        (hf(wt(wt({}, e), {}, { result: "success" })),
        "qcloud" === uf.env && pf(wt(wt({}, e), {}, { result: "success" })));
    },
    mf = function (e) {
      if (!Xc) {
        var t = e.eventType,
          n = e.code,
          r = e.error,
          i = {
            eventType: t,
            result: "failed",
            code: n || (r instanceof Rh ? r.getExtraCode() || r.getCode() : Th.UNKNOWN),
          };
        hf(i), "qcloud" === uf.env && pf(wt(wt({}, i), {}, { error: r }));
      }
    },
    vf = Object.prototype.hasOwnProperty;
  function gf(e) {
    if (null == e) return !0;
    if ("boolean" == typeof e) return !1;
    if ("number" == typeof e) return 0 === e;
    if ("string" == typeof e) return 0 === e.length;
    if ("function" == typeof e) return 0 === e.length;
    if (Array.isArray(e)) return 0 === e.length;
    if (e instanceof Error) return "" === e.message;
    if (dd(e))
      switch (Object.prototype.toString.call(e)) {
        case "[object File]":
        case "[object Map]":
        case "[object Set]":
          return 0 === e.size;
        case "[object Object]":
          for (var t in e) if (vf.call(e, t)) return !1;
          return !0;
      }
    return !1;
  }
  var _f = (function () {
    function e(t) {
      St(this, e),
        (this.sdkAppId_ = t.sdkAppId),
        (this.userId_ = t.userId),
        (this.userSig_ = t.userSig),
        (this.url_ = t.url),
        (this.backupUrl_ = t.backupUrl),
        (this.version_ = t.version),
        (this.urlWithParam_ = ""
          .concat(this.url_, "?sdkAppid=")
          .concat(this.sdkAppId_, "&identifier=")
          .concat(this.userId_, "&userSig=")
          .concat(this.userSig_)),
        (this.backupUrlWithParam_ = ""
          .concat(this.backupUrl_, "?sdkAppid=")
          .concat(this.sdkAppId_, "&identifier=")
          .concat(this.userId_, "&userSig=")
          .concat(this.userSig_)),
        (this.isConnected_ = !1),
        (this.isConnecting_ = !1),
        (this.socketInUse_ = null),
        (this.socket_ = null),
        (this.backupSocket_ = null),
        (this.backupTimer_ = -1),
        (this.signalInfo_ = {}),
        (this.currentState_ = Kp),
        (this.reconnectionCount_ = 0),
        (this.reconnectionTimer_ = -1),
        (this.pingPongTimeoutId_ = -1),
        (this.pingTimeoutId_ = -1),
        (this.emitter_ = new Wp());
    }
    var t;
    return (
      kt(e, [
        {
          key: "connect",
          value: function () {
            var e = this;
            or.info("connect to url: ".concat(this.urlWithParam_)),
              this.emitter_.emit(Jp, { prevState: this.currentState_, state: Xp }),
              (this.currentState_ = Xp),
              (this.socket_ = new WebSocket(this.urlWithParam_)),
              this.bindSocket(this.socket_),
              (this.backupTimer_ = setTimeout(function () {
                e.isConnected_ || (or.info("trying to connect to backupUrl"), e.tryConnectBackup());
              }, 5e3));
          },
        },
        {
          key: "tryConnectBackup",
          value: function () {
            this.backupSocket_ ||
              (this.unbindAndCloseSocket("main"),
              or.debug("try to connect to url: ".concat(this.backupUrlWithParam_)),
              (this.backupSocket_ = new WebSocket(this.backupUrlWithParam_)),
              this.bindSocket(this.backupSocket_));
          },
        },
        {
          key: "bindSocket",
          value: function (e) {
            (e.onopen = this.onopen.bind(this)),
              (e.onclose = this.onclose.bind(this)),
              (e.onerror = this.onerror.bind(this)),
              (e.onmessage = this.onmessage.bind(this));
          },
        },
        {
          key: "unbindSocket",
          value: function (e) {
            (e.onopen = function () {}),
              (e.onclose = function () {}),
              (e.onerror = function () {}),
              (e.onmessage = function () {});
          },
        },
        {
          key: "unbindAndCloseSocket",
          value: function (e) {
            if ("main" === e) {
              if (this.socket_) {
                this.unbindSocket(this.socket_);
                try {
                  this.socket_.close(1e3);
                } catch (Av) {}
                this.socket_ = null;
              }
            } else if (this.backupSocket_) {
              this.unbindSocket(this.backupSocket_);
              try {
                this.backupSocket_.close(1e3);
              } catch (Av) {}
              this.backupSocket_ = null;
            }
          },
        },
        {
          key: "clearBackupTimer",
          value: function () {
            -1 !== this.backupTimer_ && (clearTimeout(this.backupTimer_), (this.backupTimer_ = -1));
          },
        },
        {
          key: "clearReconnectionTimer",
          value: function () {
            -1 !== this.reconnectionTimer_ &&
              (clearTimeout(this.reconnectionTimer_), (this.reconnectionTimer_ = -1));
          },
        },
        {
          key: "onopen",
          value: function (e) {
            if (!this.isConnected_) {
              (this.isConnected_ = !0),
                (this.isConnecting_ = !1),
                this.clearBackupTimer(),
                e.target === this.socket_
                  ? (this.unbindAndCloseSocket("backup"), (this.socketInUse_ = this.socket_))
                  : (this.unbindAndCloseSocket("main"), (this.socketInUse_ = this.backupSocket_));
              var t = e.target.url;
              or.info("[".concat(this.userId_, "] websocket[").concat(t, "] is connected")),
                this.emitter_.emit(Jp, { prevState: this.currentState_, state: Yp }),
                this.currentState_ === Xp
                  ? this.addSignalEvent(Qh, "signal channel is connected")
                  : this.currentState_ === $p &&
                    this.addSignalEvent($h, "signal channel reconnect success"),
                (this.currentState_ = Yp),
                this.emitter_.emit(Qp);
            }
          },
        },
        {
          key: "onclose",
          value: function (e) {
            var t = e.target.url,
              n = e.target === this.socketInUse_;
            or.info(
              "["
                .concat(this.userId_, "] websocket[")
                .concat(t, " InUse: ")
                .concat(n, "] is closed with code: ")
                .concat(e.code)
            ),
              e.target === this.socketInUse_ &&
                ((this.isConnected_ = !1),
                e.wasClean && 1e3 === e.code
                  ? (this.emitter_.emit(Jp, { prevState: this.currentState_, state: Kp }),
                    (this.currentState_ = Kp),
                    this.addSignalEvent(Jh, "signal channel is disconnected"))
                  : (or.warn(
                      "["
                        .concat(this.userId_, "] onclose code:")
                        .concat(e.code, " reason:")
                        .concat(e.reason)
                    ),
                    or.warn("close current websocket and schedule a reconnect timeout"),
                    (this.socketInUse_.onclose = function () {}),
                    this.socketInUse_.close(4011),
                    (this.socket_ = this.backupSocket_ = this.socketInUse_ = null),
                    this.reconnect("main")));
          },
        },
        {
          key: "onerror",
          value: function (e) {
            var t = e.target.url;
            or.debug("[".concat(this.userId_, "] websocket[").concat(t, "] error observed")),
              this.isConnected_
                ? e.target === this.socketInUse_ &&
                  ((this.isConnected_ = !1),
                  this.unbindAndCloseSocket("main"),
                  this.unbindAndCloseSocket("backup"),
                  (this.socketInUse_ = null),
                  this.reconnect("main"))
                : (this.isReconnecting_ || mf({ eventType: Nu, code: Th.UNKNOWN }),
                  e.target == this.socket_
                    ? (this.unbindAndCloseSocket("main"), this.reconnect("backup"))
                    : (this.unbindAndCloseSocket("backup"), this.reconnect("main"))),
              (this.isConnecting_ = !1),
              (this.isConnected_ = !1);
          },
        },
        {
          key: "onmessage",
          value: function (e) {
            var t = this;
            if (this.isConnected_) {
              var n = JSON.parse(e.data),
                r = n.cmd,
                i = n.content,
                o = Object.values(Zp),
                a = Object.keys(Zp)[o.indexOf(r)],
                s = th[a];
              if (!eh.includes(r)) {
                var c = e.target == this.socket_ ? this.url_ : this.backupUrl_;
                if (
                  (or.debug(
                    "["
                      .concat(this.userId_, "] websocket[")
                      .concat(c, "] received message: ")
                      .concat(e.data)
                  ),
                  or.info(
                    "["
                      .concat(this.userId_, "] Received event: [ ")
                      .concat(s || "unknown cmd: " + r, " ]")
                  ),
                  (s === th.UPDATE_REMOTE_SDP ||
                    s === th.UPDATE_AUDIO_SSRC ||
                    s === th.UPDATE_VIDEO_SSRC) &&
                    i.offersdp)
                )
                  try {
                    var u = JSON.parse(i.offersdp),
                      d = u.audiossrc,
                      l = u.videossrc,
                      p = u.rtxssrc;
                    or.info(
                      "["
                        .concat(this.userId_, "] ssrc info in offersdp: [ audiossrc: ")
                        .concat(d, " videossrc: ")
                        .concat(l, " rtxssrc: ")
                        .concat(p, " ]")
                    );
                  } catch (m) {}
              }
              switch (r) {
                case Zp.CHANNEL_SETUP_SUCCESS:
                  (this.signalInfo_.relayIp = i.relayip),
                    (this.signalInfo_.relayInnerIp = i.innerip),
                    (this.signalInfo_.signalIp = i.signalip),
                    (this.signalInfo_.localIp = i.localip),
                    (this.signalInfo_.dataPort = i.dataport),
                    (this.signalInfo_.stunPort = i.stunport),
                    (this.signalInfo_.checkSigSeq = i.checkSigSeq),
                    (this.signalInfo_.socketId = i.socketid),
                    (this.signalInfo_.tinyId = i.tinyid),
                    (this.signalInfo_.openId = i.openid),
                    (this.signalInfo_.stunPortList = i.stunportList),
                    !i.stunportList || i.stunportList.length <= 0
                      ? (this.signalInfo_.stunServers = "stun:" + i.relayip + ":" + i.stunport)
                      : ((this.signalInfo_.stunServers = []),
                        i.stunportList.forEach(function (e) {
                          var n = "stun:" + i.relayip + ":" + e;
                          t.signalInfo_.stunServers.push(n);
                        })),
                    i.cgiurl && (this.signalInfo_.logCgiUrl = i.cgiurl),
                    i.svrTime &&
                      (function (e) {
                        us = e - new Date().getTime();
                        var t = new Date();
                        t.setTime(e), or.info("baseTime from server: " + t + " offset: " + us);
                      })(i.svrTime),
                    or.info(
                      "ChannelSetup Success: signalIp:"
                        .concat(i.signalip, " relayIp:")
                        .concat(i.relayip, " clientIp:")
                        .concat(i.localip, " checkSigSeq:")
                        .concat(i.checkSigSeq)
                    ),
                    or.info("start ping pong"),
                    this.startPingPong(),
                    this.isReconnecting_ &&
                      ((this.reconnectionCount_ = 0),
                      this.clearReconnectionTimer(),
                      1 === i.rc &&
                        this.emitter_.emit(th.REQUEST_REBUILD_SESSION, {
                          signalInfo: this.signalInfo_,
                        })),
                    this.emitter_.emit(s, { signalInfo: this.signalInfo_ });
                  break;
                case Zp.REBUILD_SESSION_RESULT:
                  0 === i.result
                    ? or.info("reconnect - rebuild session succeeded")
                    : (this.emitter_.emit(th.CLIENT_REJOIN),
                      or.error("reconnect - rebuild session failed: ".concat(JSON.stringify(i))));
                  break;
                case Zp.CHANNEL_SETUP_FAILED:
                  if (!this.isReconnecting_) {
                    var h = "sdkAppId invalid",
                      f = "";
                    void 0 !== i.errorCode && ((h = i.errorCode), (f = i.errorMsg));
                    var m = new Rh({
                      code: Th.SIGNAL_CHANNEL_SETUP_FAILED,
                      message: "SignalChannel setup failure: ('errorCode': "
                        .concat(h, ", 'errorMsg': ")
                        .concat(f, " })"),
                    });
                    mf({ eventType: Nu, error: m }), this.emitter_.emit(qp, m);
                  }
                  break;
                default:
                  this.emitter_.emit(s, { data: n });
              }
            }
          },
        },
        {
          key: "addSignalEvent",
          value: function (e, t) {
            sf(this.userId_, {
              eventId: e,
              eventDesc: t,
              timestamp: ds(),
              userId: this.userId_,
              tinyId: this.signalInfo_.tinyId,
            });
          },
        },
        {
          key: "reconnect",
          value: function () {
            var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "main";
            if (this.isConnecting_ || -1 !== this.reconnectionTimer_)
              or.info("signal channel is reconnecting, ignoring current reconnection");
            else {
              if (this.reconnectionCount_ >= 30) {
                or.warn(
                  "SDK has tried reconnect signal channel for ".concat(
                    30,
                    " times, but all failed. please check your network"
                  )
                );
                var n = new Rh({
                  code: Th.SIGNAL_CHANNEL_RECONNECTION_FAILED,
                  message: "signal channel reconnection failed, please check your network",
                });
                return (
                  mf({ eventType: Mu, error: n }),
                  this.addSignalEvent(Yh, "signal channel reconnect fail"),
                  void this.emitter_.emit(qp, n)
                );
              }
              (this.isConnecting_ = !0),
                this.reconnectionCount_++,
                this.currentState_ !== $p &&
                  (this.emitter_.emit(Jp, { prevState: this.currentState_, state: $p }),
                  (this.currentState_ = $p),
                  this.addSignalEvent(Xh, "signal channel is reconnecting")),
                or.warn(
                  "reconnecting to "
                    .concat(t, " signal channel [")
                    .concat(this.reconnectionCount_, "/")
                    .concat(30, "]")
                );
              var r = this.getReconnectionUrl(t);
              "main" === t
                ? ((this.socket_ = new WebSocket(r)), this.bindSocket(this.socket_))
                : ((this.backupSocket_ = new WebSocket(r)), this.bindSocket(this.backupSocket_));
              var i = ld(this.reconnectionCount_);
              this.reconnectionTimer_ = setTimeout(function () {
                or.warn(
                  "reconnect "
                    .concat(t, " signal channel timeout(")
                    .concat(i / 1e3, "s), close and try again")
                ),
                  (e.isConnecting_ = !1),
                  e.clearReconnectionTimer(),
                  e.unbindAndCloseSocket(t),
                  e.reconnect("main" === t ? "backup" : "main");
              }, i);
            }
          },
        },
        {
          key: "isConnected",
          value: function () {
            return this.isConnected_;
          },
        },
        {
          key: "getReconnectionUrl",
          value: function (e) {
            var t = "main" === e ? this.urlWithParam_ : this.backupUrlWithParam_;
            return (
              gf(this.signalInfo_) ||
                -1 !== t.indexOf("&rc=1") ||
                (t +=
                  "&iip=" +
                  this.signalInfo_.relayInnerIp +
                  "&dp=" +
                  this.signalInfo_.dataPort +
                  "&oip=" +
                  this.signalInfo_.relayIp +
                  "&sp=" +
                  this.signalInfo_.stunPort +
                  "&rc=1"),
              t
            );
          },
        },
        {
          key: "send",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            if (this.isConnected_) {
              var r = this.createSendMessage(e);
              (r.data = t),
                void 0 !== n && (r.srctinyid = n),
                this.socketInUse_.send(JSON.stringify(r));
            }
          },
        },
        {
          key: "sendWithoutUA",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              n = arguments.length > 2 ? arguments[2] : void 0;
            if (this.isConnected_) {
              var r = this.createSendMessage(e, !1);
              (r.data = t),
                void 0 !== n && (r.srctinyid = n),
                this.socketInUse_.send(JSON.stringify(r));
            }
          },
        },
        {
          key: "sendWithReport",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              n = arguments.length > 2 ? arguments[2] : void 0;
            if (this.isConnected_) {
              var r = this.createSendMessage(e);
              (r.data = t), (r.report = n), this.socketInUse_.send(JSON.stringify(r));
            }
          },
        },
        {
          key: "startPingPong",
          value:
            ((t = yt(
              regeneratorRuntime.mark(function e() {
                var t = this;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.prev = 0), -1 === this.pingPongTimeoutId_)) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          return (e.next = 5), this.ping();
                        case 5:
                          (this.pingPongTimeoutId_ = setTimeout(function () {
                            (t.pingPongTimeoutId_ = -1), t.startPingPong();
                          }, 1e4)),
                            (e.next = 13);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(0)),
                            or.warn("ping-pong failed, start signal reconnection"),
                            this.close(),
                            this.reconnect("main");
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[0, 8]]
                );
              })
            )),
            function () {
              return t.apply(this, arguments);
            }),
        },
        {
          key: "stopPingPong",
          value: function () {
            or.info("stop ping pong"),
              clearTimeout(this.pingTimeoutId_),
              clearTimeout(this.pingPongTimeoutId_),
              (this.pingTimeoutId_ = -1),
              (this.pingPongTimeoutId_ = -1);
          },
        },
        {
          key: "ping",
          value: function () {
            var e = this;
            return new Promise(function (t, n) {
              if (-1 !== e.pingTimeoutId_) return t();
              e.sendWithoutUA(uh),
                e.once(th.PONG, function () {
                  clearTimeout(e.pingTimeoutId_), (e.pingTimeoutId_ = -1), t();
                }),
                (e.pingTimeoutId_ = setTimeout(function () {
                  (e.pingTimeoutId_ = -1), n();
                }, 1e4));
            });
          },
        },
        {
          key: "createSendMessage",
          value: function (e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              n = {
                tag_key: e,
                data: "",
                openid: this.userId_,
                tinyid: this.signalInfo_.tinyId,
                version: this.version_,
              };
            return t && (n.ua = navigator.userAgent), n;
          },
        },
        {
          key: "getCurrentState",
          value: function () {
            return this.currentState_;
          },
        },
        {
          key: "getSocketId",
          value: function () {
            return this.signalInfo_.socketId;
          },
        },
        {
          key: "close",
          value: function () {
            or.info("close SignalChannel"),
              this.clearBackupTimer(),
              this.clearReconnectionTimer(),
              this.stopPingPong(),
              (this.isConnecting_ = !1),
              (this.isConnected_ = !1),
              (this.socketInUse_ = null),
              this.unbindAndCloseSocket("main"),
              this.unbindAndCloseSocket("backup");
          },
        },
        {
          key: "on",
          value: function (e, t, n) {
            this.emitter_.on(e, t, n);
          },
        },
        {
          key: "removeListener",
          value: function (e, t, n) {
            this.emitter_.removeListener(e, t, n);
          },
        },
        {
          key: "once",
          value: function (e, t, n) {
            this.emitter_.once(e, t, n);
          },
        },
        {
          key: "off",
          value: function (e, t, n) {
            this.emitter_.off(e, t, n);
          },
        },
        {
          key: "isReconnecting_",
          get: function () {
            return -1 !== this.reconnectionTimer_;
          },
        },
      ]),
      e
    );
  })();
  window.addEventListener("message", function (e) {
    e.origin == window.location.origin &&
      (function (e) {
        if ("PermissionDeniedError" == e) throw new Error("PermissionDeniedError");
        e.sourceId, 0;
      })(e.data);
  });
  !!window.opera || navigator.userAgent.indexOf(" OPR/");
  var yf = {
      result: !1,
      detail: {
        isBrowserSupported: !1,
        isWebRTCSupported: !1,
        isMediaDevicesSupported: !1,
        isH264EncodeSupported: !1,
        isVp8EncodeSupported: !1,
        isH264DecodeSupported: !1,
        isVp8DecodeSupported: !1,
      },
    },
    Sf = new Map([
      [Ys, ["Firefox", Zs]],
      [nc, ["Edg", rc]],
      [Gc, ["Chrome", Wc]],
      [Jc, ["Safari", qc]],
      [cc, ["TBS", uc]],
      [dc, ["XWEB", lc]],
      [mc && Hs, ["WeChat", vc]],
      [Sc, ["QQ(Win)", bc]],
      [_c, ["QQ(Mobile)", yc]],
      [gc, ["QQ(Mobile X5)", yc]],
      [kc, ["QQ(Mac)", Tc]],
      [Rc, ["QQ(iPad)", wc]],
      [Dc, ["MI", Oc]],
      [Nc, ["HW", Mc]],
      [Lc, ["Samsung", Uc]],
      [Vc, ["OPPO", jc]],
      [Fc, ["VIVO", Bc]],
      [ec, ["EDGE", tc]],
      [ic, ["SogouMobile", oc]],
      [ac, ["Sogou", sc]],
    ]);
  function bf() {
    var e = "unknown",
      t = "unknown";
    return (
      Sf.get(!0) && ((e = Sf.get(!0)[0]), (t = Sf.get(!0)[1])),
      { browserName: e, browserVersion: t }
    );
  }
  var kf = function () {
      return (
        ["RTCPeerConnection", "webkitRTCPeerConnection", "RTCIceGatherer"].filter(function (e) {
          return e in window;
        }).length > 0
      );
    },
    Tf = function () {
      if (!navigator.mediaDevices) return !1;
      var e = ["getUserMedia", "enumerateDevices"];
      return (
        e.filter(function (e) {
          return e in navigator.mediaDevices;
        }).length === e.length
      );
    },
    Rf = (function () {
      var e = yt(
        regeneratorRuntime.mark(function e() {
          var t, n, r, i, o, a;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!yf.detail.isH264EncodeSupported && !yf.detail.isVp8EncodeSupported) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", {
                      isH264EncodeSupported: yf.detail.isH264EncodeSupported,
                      isVp8EncodeSupported: yf.detail.isVp8EncodeSupported,
                    });
                  case 2:
                    return (
                      (t = ""),
                      (n = !1),
                      (r = !1),
                      (e.prev = 5),
                      (i = new RTCPeerConnection()),
                      (o = document.createElement("canvas")).getContext("2d"),
                      (a = o.captureStream(0)),
                      i.addTrack(a.getVideoTracks()[0], a),
                      (e.next = 13),
                      i.createOffer()
                    );
                  case 13:
                    return (
                      -1 !== (t = e.sent).sdp.toLowerCase().indexOf("h264") && (n = !0),
                      -1 !== t.sdp.toLowerCase().indexOf("vp8") && (r = !0),
                      i.close(),
                      (yf.detail.isH264EncodeSupported = n),
                      (yf.detail.isVp8EncodeSupported = r),
                      e.abrupt("return", {
                        isH264EncodeSupported: yf.detail.isH264EncodeSupported,
                        isVp8EncodeSupported: yf.detail.isVp8EncodeSupported,
                      })
                    );
                  case 22:
                    return (
                      (e.prev = 22),
                      (e.t0 = e.catch(5)),
                      e.abrupt("return", { isH264EncodeSupported: !1, isVp8EncodeSupported: !1 })
                    );
                  case 25:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[5, 22]]
          );
        })
      );
      return function () {
        return e.apply(this, arguments);
      };
    })(),
    wf = (function () {
      var e = yt(
        regeneratorRuntime.mark(function e() {
          var t, n, r, i;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!yf.detail.isH264DecodeSupported && !yf.detail.isVp8DecodeSupported) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", {
                      isH264DecodeSupported: yf.detail.isH264DecodeSupported,
                      isVp8DecodeSupported: yf.detail.isVp8DecodeSupported,
                    });
                  case 2:
                    return (
                      (t = ""),
                      (n = !1),
                      (r = !1),
                      (e.prev = 5),
                      (i = new RTCPeerConnection()),
                      (e.next = 9),
                      i.createOffer({ offerToReceiveAudio: 1, offerToReceiveVideo: 1 })
                    );
                  case 9:
                    return (
                      -1 !== (t = e.sent).sdp.toLowerCase().indexOf("h264") && (n = !0),
                      -1 !== t.sdp.toLowerCase().indexOf("vp8") && (r = !0),
                      i.close(),
                      e.abrupt("return", { isH264DecodeSupported: n, isVp8DecodeSupported: r })
                    );
                  case 16:
                    return (
                      (e.prev = 16),
                      (e.t0 = e.catch(5)),
                      e.abrupt("return", { isH264DecodeSupported: !1, isVp8DecodeSupported: !1 })
                    );
                  case 19:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[5, 16]]
          );
        })
      );
      return function () {
        return e.apply(this, arguments);
      };
    })(),
    If = (function () {
      var e = yt(
        regeneratorRuntime.mark(function e() {
          var t, n, r, i, o, a, s, c, u;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!yf.result) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return", yf);
                case 2:
                  return (
                    (t = !(Pc || ec || (nc && rc < 80) || (Ys && Zs < 56))),
                    (n = kf()),
                    (r = Tf()),
                    (e.next = 7),
                    Rf()
                  );
                case 7:
                  return (
                    (i = e.sent),
                    (o = i.isH264EncodeSupported),
                    (a = i.isVp8EncodeSupported),
                    (e.next = 12),
                    wf()
                  );
                case 12:
                  return (
                    (s = e.sent),
                    (c = s.isH264DecodeSupported),
                    (u = s.isVp8DecodeSupported),
                    (yf.result = t && n && r && (o || a) && (c || u)),
                    (yf.detail.isBrowserSupported = t),
                    (yf.detail.isWebRTCSupported = n),
                    (yf.detail.isMediaDevicesSupported = r),
                    (yf.detail.isH264EncodeSupported = o),
                    (yf.detail.isVp8EncodeSupported = a),
                    (yf.detail.isH264DecodeSupported = c),
                    (yf.detail.isVp8DecodeSupported = u),
                    yf.result ||
                      or.error(
                        "".concat(navigator.userAgent, " isBrowserSupported: ").concat(t) +
                          "isWebRTCSupported: ".concat(n, " isMediaSupported: ").concat(r, " ") +
                          "isH264EncodeSupported: "
                            .concat(o, " isVp8EncodeSupported: ")
                            .concat(a, " ") +
                          "isH264DecodeSupported: "
                            .concat(c, " isVp8DecodeSupported: ")
                            .concat(u, " ")
                      ),
                    e.abrupt("return", yf)
                  );
                case 25:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function () {
        return e.apply(this, arguments);
      };
    })(),
    Cf = function () {
      return !(!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia);
    },
    Ef = function () {
      return "RTCPeerConnection" in window && "getReceivers" in window.RTCPeerConnection.prototype;
    },
    xf = function () {
      return "RTCPeerConnection" in window && "getSenders" in window.RTCPeerConnection.prototype;
    },
    Pf = function () {
      return "RTCRtpTransceiver" in window && "stop" in window.RTCRtpTransceiver.prototype;
    },
    Af = function () {
      return "RTCRtpSender" in window && "setParameters" in window.RTCRtpSender.prototype && xf();
    },
    Df = function () {
      return (
        !!fd(navigator.mediaDevices) &&
        (or.error("navigator.mediaDevices is not supported on your browser"), !0)
      );
    },
    Of = function () {
      return (
        "http:" === location.protocol &&
        !Xc &&
        (or.error("not supported in http protocol, please use https protocol"), !0)
      );
    },
    Nf = function (e) {
      return (
        !(
          "candidate-pair" !== e.type ||
          !e.nominated ||
          ("in-progress" !== e.state && "succeeded" !== e.state)
        ) && !("boolean" == typeof e.selected && !e.selected)
      );
    },
    Mf = new Map([
      [qs, "Android"],
      [Js, "iOS"],
      [Ic, "Windows"],
      [Cc, "MacOS"],
      [Ec, "Linux"],
    ]);
  function Lf() {
    var e = "";
    screen.width &&
      (e +=
        (screen.width ? screen.width * window.devicePixelRatio : "") +
        " * " +
        (screen.height ? screen.height * window.devicePixelRatio : ""));
    return e;
  }
  function Uf() {
    var e = !1;
    return (
      (navigator.getUserMedia || (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) &&
        (e = !0),
      e
    );
  }
  function Vf() {
    for (
      var e = { isSupported: !1 },
        t = ["AudioContext", "webkitAudioContext", "mozAudioContext", "msAudioContext"],
        n = 0;
      n < t.length;
      n++
    )
      if (t[n] in window) {
        e.isSupported = !0;
        break;
      }
    return e.isSupported;
  }
  If();
  var jf = "stream-added",
    Ff = "stream-removed",
    Bf = "stream-updated",
    zf = "stream-subscribed",
    Gf = "error",
    Hf = "connection-state-changed",
    Wf = "stream-added",
    Jf = "stream-removed",
    Qf = "stream-updated",
    qf = "stream-subscribed",
    Kf = "connection-state-changed",
    Xf = "peer-join",
    $f = "peer-leave",
    Yf = "mute-audio",
    Zf = "mute-video",
    em = "unmute-audio",
    tm = "unmute-video",
    nm = "client-banned",
    rm = "network-quality",
    im = "audio-volume",
    om = "error",
    am = "player-state-changed",
    sm = "screen-sharing-stopped",
    cm = "connection-state-changed",
    um = "error",
    dm = "player-state-changed",
    lm = (function () {
      function e(t) {
        St(this, e), (this.prevReport_ = {});
      }
      var t, n, r, i;
      return (
        kt(e, [
          {
            key: "getSenderStats",
            value:
              ((i = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = {
                                audio: {
                                  bytesSent: 0,
                                  packetsSent: 0,
                                  audioLevel: 0,
                                  totalAudioEnergy: 0,
                                },
                                video: {
                                  bytesSent: 0,
                                  packetsSent: 0,
                                  framesEncoded: 0,
                                  frameWidth: 0,
                                  frameHeight: 0,
                                  framesSent: 0,
                                },
                                rtt: 0,
                              }),
                              !(r = t.getPeerConnection()))
                            ) {
                              e.next = 13;
                              break;
                            }
                            return (e.prev = 3), (e.next = 6), r.getStats();
                          case 6:
                            e.sent.forEach(function (e) {
                              if ("outbound-rtp" === e.type)
                                if ("video" === e.mediaType) {
                                  if (!Ys && void 0 === e.trackId) return;
                                  (n.video.bytesSent = e.bytesSent),
                                    (n.video.packetsSent = e.packetsSent),
                                    (n.video.framesEncoded = e.framesEncoded);
                                } else
                                  "audio" === e.mediaType &&
                                    ((n.audio.bytesSent = e.bytesSent),
                                    (n.audio.packetsSent = e.packetsSent));
                              else
                                "candidate-pair" === e.type
                                  ? Nf(e) &&
                                    vd(e.currentRoundTripTime) &&
                                    (n.rtt = Math.floor(1e3 * e.currentRoundTripTime))
                                  : "track" === e.type
                                  ? (void 0 !== e.frameWidth &&
                                      ((n.video.frameWidth = e.frameWidth),
                                      (n.video.frameHeight = e.frameHeight),
                                      (n.video.framesSent = e.framesSent)),
                                    void 0 !== e.audioLevel &&
                                      (n.audio.audioLevel = e.audioLevel || 0))
                                  : "media-source" === e.type &&
                                    "audio" === e.kind &&
                                    ((n.audio.audioLevel = e.audioLevel || 0),
                                    (n.audio.totalAudioEnergy = e.totalAudioEnergy || 0));
                            }),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(3)),
                              or.warn("failed to getStats on sender connection");
                          case 13:
                            return e.abrupt("return", n);
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 10]]
                  );
                })
              )),
              function (e) {
                return i.apply(this, arguments);
              }),
          },
          {
            key: "getReceiverStats",
            value:
              ((r = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = {
                                tinyId: t.getTinyId(),
                                userId: t.getUserId(),
                                rtt: 0,
                                hasAudio: !1,
                                hasVideo: !1,
                                hasAuxiliary: !1,
                                audio: {
                                  bytesReceived: 0,
                                  packetsReceived: 0,
                                  packetsLost: 0,
                                  jitter: 0,
                                  audioLevel: 0,
                                  totalAudioEnergy: 0,
                                },
                                video: {
                                  bytesReceived: 0,
                                  packetsReceived: 0,
                                  packetsLost: 0,
                                  framesDecoded: 0,
                                  frameWidth: 0,
                                  frameHeight: 0,
                                },
                                auxiliary: {
                                  bytesReceived: 0,
                                  packetsReceived: 0,
                                  packetsLost: 0,
                                  framesDecoded: 0,
                                  frameWidth: 0,
                                  frameHeight: 0,
                                },
                              }),
                              !(r = t.getPeerConnection()))
                            ) {
                              e.next = 13;
                              break;
                            }
                            return (e.prev = 3), (e.next = 6), r.getStats();
                          case 6:
                            e.sent.forEach(function (e) {
                              if ("inbound-rtp" === e.type) {
                                if ("audio" === e.mediaType)
                                  (n.audio.packetsReceived = e.packetsReceived),
                                    (n.audio.bytesReceived = e.bytesReceived),
                                    (n.audio.packetsLost = e.packetsLost),
                                    (n.audio.jitter = e.jitter),
                                    (n.hasAudio = !0);
                                else if ("video" === e.mediaType) {
                                  if (Ys && 0 === e.bytesReceived) return;
                                  var r = t.getSSRC();
                                  e.ssrc === r.video &&
                                    ((n.video.packetsReceived = e.packetsReceived),
                                    (n.video.bytesReceived = e.bytesReceived),
                                    (n.video.packetsLost = e.packetsLost),
                                    (n.video.framesDecoded = e.framesDecoded),
                                    (n.hasVideo = !0)),
                                    e.ssrc === r.auxiliary &&
                                      ((n.auxiliary.packetsReceived = e.packetsReceived),
                                      (n.auxiliary.bytesReceived = e.bytesReceived),
                                      (n.auxiliary.packetsLost = e.packetsLost),
                                      (n.auxiliary.framesDecoded = e.framesDecoded),
                                      (n.hasAuxiliary = !0));
                                }
                              } else "track" === e.type ? (void 0 !== e.frameWidth && (e.trackIdentifier === t.getMainStreamVideoTrackId() && ((n.video.frameWidth = e.frameWidth), (n.video.frameHeight = e.frameHeight)), e.trackIdentifier === t.getAuxStreamVideoTrackId() && ((n.auxiliary.frameWidth = e.frameWidth), (n.auxiliary.frameHeight = e.frameHeight))), "audio" === e.kind && ((n.audio.audioLevel = e.audioLevel || 0), (n.audio.totalAudioEnergy = e.totalAudioEnergy || 0))) : "candidate-pair" === e.type && Nf(e) && vd(e.currentRoundTripTime) && (n.rtt = Math.floor(1e3 * e.currentRoundTripTime));
                            }),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(3)),
                              or.warn("failed to getStats on receiver connection");
                          case 13:
                            return e.abrupt("return", n);
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 10]]
                  );
                })
              )),
              function (e) {
                return r.apply(this, arguments);
              }),
          },
          {
            key: "getStats",
            value:
              ((n = yt(
                regeneratorRuntime.mark(function e(t, n) {
                  var r, i, o, a, s, c, u;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((r = {}), !t)) {
                              e.next = 5;
                              break;
                            }
                            return (e.next = 4), this.getSenderStats(t);
                          case 4:
                            r = e.sent;
                          case 5:
                            (i = []), (o = jt(n)), (e.prev = 7), o.s();
                          case 9:
                            if ((a = o.n()).done) {
                              e.next = 17;
                              break;
                            }
                            return (
                              (s = Mt(a.value, 2))[0],
                              (c = s[1]),
                              (e.next = 13),
                              this.getReceiverStats(c)
                            );
                          case 13:
                            (u = e.sent), i.push(u);
                          case 15:
                            e.next = 9;
                            break;
                          case 17:
                            e.next = 22;
                            break;
                          case 19:
                            (e.prev = 19), (e.t0 = e.catch(7)), o.e(e.t0);
                          case 22:
                            return (e.prev = 22), o.f(), e.finish(22);
                          case 25:
                            return e.abrupt("return", { senderStats: r, receiverStats: i });
                          case 26:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[7, 19, 22, 25]]
                  );
                })
              )),
              function (e, t) {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "prepareReport",
            value: function (e) {
              var t = e.stats,
                n = e.report,
                r = e.freezeMap;
              gf(t.senderStats) ||
                ((n.uint32_delay = t.senderStats.rtt),
                (n.RTTReportState.uint32_delay = t.senderStats.rtt),
                (n.AudioReportState.sentAudioLevel = t.senderStats.audio.audioLevel),
                (n.AudioReportState.sentAudioEnergy = t.senderStats.audio.totalAudioEnergy),
                (n.AudioReportState.uint32_audio_enc_pkg_br = t.senderStats.audio.bytesSent),
                (n.VideoReportState.uint32_video_snd_br = t.senderStats.video.bytesSent),
                (n.VideoReportState.uint32_send_total_pkg = t.senderStats.video.packetsSent),
                (n.VideoReportState.VideoEncState[0].uint32_enc_width =
                  t.senderStats.video.frameWidth),
                (n.VideoReportState.VideoEncState[0].uint32_enc_height =
                  t.senderStats.video.frameHeight),
                (n.VideoReportState.VideoEncState[0].uint32_enc_fps =
                  t.senderStats.video.framesSent)),
                t.receiverStats.forEach(function (e) {
                  var t = e.userId;
                  if (
                    (n.RTTReportState.RTTDecState.push({
                      uint32_delay: e.rtt,
                      uint64_sender_uin: e.tinyId,
                    }),
                    e.hasAudio &&
                      (n.AudioReportState.AudioDecState.push({
                        uint32_audio_delay: 0,
                        uint32_audio_jitter: e.audio.jitter,
                        uint32_audio_real_recv_pkg: e.audio.packetsReceived,
                        uint32_audio_flow: e.audio.bytesReceived,
                        uint32_audio_real_recv_br: 0,
                        uint64_sender_uin: e.tinyId,
                        packetsLost: e.audio.packetsLost,
                        totalPacketsLost: e.audio.packetsLost,
                        audioLevel: e.audio.audioLevel,
                        audioEnergy: e.audio.totalAudioEnergy,
                      }),
                      (n.AudioReportState.uint32_audio_real_recv_pkg += e.audio.packetsReceived),
                      (n.AudioReportState.uint32_audio_flow += e.audio.bytesReceived),
                      (n.uint32_real_num += e.audio.packetsReceived)),
                    e.hasVideo)
                  ) {
                    var i = r.get(t + "_main"),
                      o = i ? i.duration : 0;
                    n.VideoReportState.VideoDecState.push({
                      uint32_video_recv_fps: e.video.framesDecoded,
                      uint32_video_recv_br: e.video.bytesReceived,
                      uint32_video_real_recv_pkg: e.video.packetsReceived,
                      uint32_dec_height: e.video.frameHeight,
                      uint32_dec_width: e.video.frameWidth,
                      uint32_video_jitter: 0,
                      uint64_sender_uin: e.tinyId,
                      packetsLost: e.video.packetsLost,
                      totalPacketsLost: e.video.packetsLost,
                      uint32_video_strtype: 0,
                      int32_video_freeze_ms: o,
                    }),
                      (n.VideoReportState.uint32_video_total_real_recv_pkg +=
                        e.video.packetsReceived),
                      (n.VideoReportState.uint32_video_rcv_br += e.video.bytesReceived);
                  }
                  if (e.hasAuxiliary) {
                    var a = r.get(t + "_auxiliary"),
                      s = a ? a.duration : 0;
                    n.VideoReportState.VideoDecState.push({
                      uint32_video_recv_fps: e.auxiliary.framesDecoded,
                      uint32_video_recv_br: e.auxiliary.bytesReceived,
                      uint32_video_real_recv_pkg: e.auxiliary.packetsReceived,
                      uint32_dec_height: e.auxiliary.frameHeight,
                      uint32_dec_width: e.auxiliary.frameWidth,
                      uint32_video_jitter: 0,
                      uint64_sender_uin: e.tinyId,
                      packetsLost: e.auxiliary.packetsLost,
                      totalPacketsLost: e.auxiliary.packetsLost,
                      uint32_video_strtype: 2,
                      int32_video_freeze_ms: s,
                    });
                  }
                }),
                (n.uint64_end_utime = new Date().getTime());
              var i = this.prevReport_;
              if (((this.prevReport_ = JSON.parse(JSON.stringify(n))), gf(i)))
                (n.AudioReportState.uint32_audio_enc_pkg_br =
                  (8 * n.AudioReportState.uint32_audio_enc_pkg_br) / 2),
                  (n.VideoReportState.uint32_video_rcv_br =
                    (8 * n.VideoReportState.uint32_video_rcv_br) / 2),
                  (n.VideoReportState.uint32_video_snd_br =
                    (8 * n.VideoReportState.uint32_video_snd_br) / 2),
                  n.VideoReportState.VideoDecState.forEach(function (e) {
                    (e.uint32_video_recv_br = (8 * e.uint32_video_recv_br) / 2),
                      (n.uint32_total_send_bps =
                        n.AudioReportState.uint32_audio_enc_pkg_br +
                        n.VideoReportState.uint32_video_snd_br);
                  });
              else {
                (n.uint64_begine_utime = i.uint64_end_utime),
                  (n.uint32_real_num -= i.uint32_real_num),
                  n.uint32_real_num <= 0 && (n.uint32_real_num = 0),
                  (n.AudioReportState.uint32_audio_real_recv_pkg -=
                    i.AudioReportState.uint32_audio_real_recv_pkg),
                  n.AudioReportState.uint32_audio_real_recv_pkg <= 0 &&
                    (n.AudioReportState.uint32_audio_real_recv_pkg = 0),
                  (n.AudioReportState.uint32_audio_enc_pkg_br -=
                    i.AudioReportState.uint32_audio_enc_pkg_br),
                  n.AudioReportState.uint32_audio_enc_pkg_br <= 0 &&
                    (n.AudioReportState.uint32_audio_enc_pkg_br = 0),
                  (n.AudioReportState.uint32_audio_enc_pkg_br =
                    (8 * n.AudioReportState.uint32_audio_enc_pkg_br) / 2),
                  (n.VideoReportState.uint32_video_snd_br -=
                    i.VideoReportState.uint32_video_snd_br),
                  n.VideoReportState.uint32_video_snd_br <= 0 &&
                    (n.VideoReportState.uint32_video_snd_br = 0),
                  (n.VideoReportState.uint32_video_snd_br =
                    (8 * n.VideoReportState.uint32_video_snd_br) / 2),
                  (n.AudioReportState.uint32_audio_flow -= i.AudioReportState.uint32_audio_flow),
                  n.AudioReportState.uint32_audio_flow <= 0 &&
                    (n.AudioReportState.uint32_audio_flow = 0),
                  (n.VideoReportState.uint32_send_total_pkg -=
                    i.VideoReportState.uint32_send_total_pkg),
                  n.VideoReportState.uint32_send_total_pkg <= 0 &&
                    (n.VideoReportState.uint32_send_total_pkg = 0),
                  (n.VideoReportState.uint32_video_rcv_br -=
                    i.VideoReportState.uint32_video_rcv_br),
                  n.VideoReportState.uint32_video_rcv_br <= 0 &&
                    (n.VideoReportState.uint32_video_rcv_br = 0),
                  (n.VideoReportState.uint32_video_rcv_br =
                    (8 * n.VideoReportState.uint32_video_rcv_br) / 2),
                  (n.VideoReportState.uint32_video_total_real_recv_pkg -=
                    i.VideoReportState.uint32_video_total_real_recv_pkg),
                  n.VideoReportState.uint32_video_total_real_recv_pkg <= 0 &&
                    (n.VideoReportState.uint32_video_total_real_recv_pkg = 0),
                  (n.VideoReportState.VideoEncState[0].uint32_enc_fps -=
                    i.VideoReportState.VideoEncState[0].uint32_enc_fps),
                  n.VideoReportState.VideoEncState[0].uint32_enc_fps < 0 &&
                    (n.VideoReportState.VideoEncState[0].uint32_enc_fps = 0),
                  (n.VideoReportState.VideoEncState[0].uint32_enc_fps =
                    n.VideoReportState.VideoEncState[0].uint32_enc_fps / 2);
                for (var o = n.VideoReportState.VideoDecState.length, a = 0; a < o; a++) {
                  for (
                    var s = n.VideoReportState.VideoDecState[a],
                      c = s.uint64_sender_uin,
                      u = s.uint32_video_strtype,
                      d = s.uint32_video_real_recv_pkg,
                      l = s.uint32_video_recv_br,
                      p = s.uint32_video_recv_fps,
                      h = 0;
                    h < i.VideoReportState.VideoDecState.length;
                    h++
                  ) {
                    var f = i.VideoReportState.VideoDecState[h];
                    if (f.uint64_sender_uin === c && f.uint32_video_strtype === u) {
                      (s.packetsLost = s.totalPacketsLost - f.totalPacketsLost),
                        (d -= f.uint32_video_real_recv_pkg) <= 0 && (d = 0),
                        (l -= f.uint32_video_recv_br) <= 0 && (l = 0),
                        (p -= f.uint32_video_recv_fps) < 0 && (p = 0);
                      break;
                    }
                  }
                  (n.VideoReportState.VideoDecState[a].uint32_video_real_recv_pkg = d),
                    (n.VideoReportState.VideoDecState[a].uint32_video_recv_br = (8 * l) / 2),
                    (n.VideoReportState.VideoDecState[a].uint32_video_recv_fps = p / 2);
                }
                o = n.AudioReportState.AudioDecState.length;
                for (var m = 0; m < o; m++) {
                  for (
                    var v = n.AudioReportState.AudioDecState[m],
                      g = v.uint32_audio_real_recv_pkg,
                      _ = v.uint32_audio_flow,
                      y = v.uint64_sender_uin,
                      S = 0;
                    S < i.AudioReportState.AudioDecState.length;
                    S++
                  ) {
                    var b = i.AudioReportState.AudioDecState[S];
                    if (b.uint64_sender_uin === y) {
                      (v.packetsLost = v.totalPacketsLost - b.totalPacketsLost),
                        (g -= b.uint32_audio_real_recv_pkg) <= 0 && (g = 0),
                        (_ -= b.uint32_audio_flow) <= 0 && (_ = 0);
                      break;
                    }
                  }
                  (n.AudioReportState.AudioDecState[m].uint32_audio_real_recv_pkg = g),
                    (n.AudioReportState.AudioDecState[m].uint32_audio_flow = _),
                    (n.AudioReportState.AudioDecState[m].uint32_audio_real_recv_br = (8 * _) / 2);
                }
                (n.AudioReportState.uint32_audio_real_recv_br =
                  (8 * n.AudioReportState.uint32_audio_flow) / 2),
                  (n.uint32_real_num =
                    n.AudioReportState.uint32_audio_real_recv_pkg +
                    n.VideoReportState.uint32_video_total_real_recv_pkg),
                  (n.uint32_total_send_bps =
                    n.AudioReportState.uint32_audio_enc_pkg_br +
                    n.VideoReportState.uint32_video_snd_br),
                  (n.uint32_total_recv_bps =
                    n.AudioReportState.uint32_audio_real_recv_br +
                    n.VideoReportState.uint32_video_rcv_br);
              }
              return n;
            },
          },
          {
            key: "getStatsReport",
            value:
              ((t = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r, i, o, a;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t.uplinkConnection),
                              (r = t.downlinkConnections),
                              (i = t.freezeMap),
                              (o = {
                                uint64_begine_utime: new Date().getTime(),
                                uint64_end_utime: 0,
                                uint32_real_num: 0,
                                uint32_delay: 0,
                                uint32_CPU_curfreq: 0,
                                uint32_total_send_bps: 0,
                                uint32_total_recv_bps: 0,
                                AudioReportState: {
                                  uint32_audio_enc_pkg_br: 0,
                                  uint32_audio_real_recv_pkg: 0,
                                  uint32_audio_flow: 0,
                                  uint32_audio_real_recv_br: 0,
                                  uint32_audio_delay: 0,
                                  uint32_audio_jitter: 0,
                                  uint32_microphone_status: 1,
                                  sentAudioLevel: 0,
                                  sentAudioEnergy: 0,
                                  AudioDecState: [],
                                },
                                VideoReportState: {
                                  uint32_video_delay: 0,
                                  uint32_video_snd_br: 0,
                                  uint32_video_total_real_recv_pkg: 0,
                                  uint32_video_rcv_br: 0,
                                  uint32_send_total_pkg: 0,
                                  VideoEncState: [
                                    {
                                      uint32_enc_width: 0,
                                      uint32_enc_height: 0,
                                      uint32_capture_fps: 0,
                                      uint32_enc_fps: 0,
                                    },
                                  ],
                                  VideoDecState: [],
                                },
                                RTTReportState: { uint32_delay: 0, RTTDecState: [] },
                              }),
                              (e.next = 4),
                              this.getStats(n, r)
                            );
                          case 4:
                            return (
                              (a = e.sent),
                              this.prepareReport({ stats: a, report: o, freezeMap: i }),
                              e.abrupt("return", o)
                            );
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e) {
                return t.apply(this, arguments);
              }),
          },
        ]),
        e
      );
    })(),
    pm = (function () {
      function e(t) {
        St(this, e),
          (this.id_ = t.id),
          (this.direction_ = t.direction),
          (this.type_ = t.type),
          (this.directionPrefix_ = "local" === this.direction_ ? "" : "*");
      }
      return (
        kt(e, [
          {
            key: "log",
            value: function (e, t) {
              or[e](
                "["
                  .concat(this.directionPrefix_)
                  .concat(this.id_, "] ")
                  .concat(this.type_, " ")
                  .concat(t)
              );
            },
          },
          {
            key: "info",
            value: function (e) {
              this.log("info", e);
            },
          },
          {
            key: "debug",
            value: function (e) {
              this.log("debug", e);
            },
          },
          {
            key: "warn",
            value: function (e) {
              this.log("warn", e);
            },
          },
          {
            key: "error",
            value: function (e) {
              this.log("error", e);
            },
          },
        ]),
        e
      );
    })(),
    hm = (function () {
      function e(t) {
        var n = t.signalChannel,
          r = t.connections,
          i = t.userId;
        St(this, e),
          (this.signalChannel_ = n),
          (this.connections_ = r),
          (this.log_ = new pm({ id: "q|" + i, direction: "local", type: "" })),
          (this.uplinkConnection_ = null),
          (this.uplinkNetworkQuality_ = 0),
          (this.uplinkRTT_ = 0),
          (this.uplinkLoss_ = 0),
          (this.downlinkNetworkQuality_ = 0),
          (this.downlinkPrevStatMap_ = new Map()),
          (this.downlinkLossAndRTTMap_ = new Map()),
          (this.interval_ = -1),
          (this.emitter_ = new Wp()),
          this.initialize();
      }
      var t, n;
      return (
        kt(e, [
          {
            key: "initialize",
            value: function () {
              var e = this;
              this.signalChannel_.on(th.UPLINK_NETWORK_STATS, function (t) {
                e.handleUplinkNetworkQuality(t);
              }),
                this.signalChannel_.on(Jp, this.handleSignalConnectionStateChange.bind(this)),
                this.start();
            },
          },
          {
            key: "handleUplinkNetworkQuality",
            value: function (e) {
              if (!this.uplinkConnection_)
                return (
                  (this.uplinkNetworkQuality = 0),
                  (this.uplinkLoss_ = 0),
                  void (this.uplinkRTT_ = 0)
                );
              var t = this.uplinkConnection_.getPeerConnection();
              if (t && this.isPeerConnectionDisconnected(t))
                return (
                  (this.uplinkNetworkQuality = 6),
                  (this.uplinkLoss_ = 0),
                  void (this.uplinkRTT_ = 0)
                );
              var n = e.data.content;
              if (0 === n.result) {
                var r = n.expectAudPkg + n.expectVidPkg,
                  i = n.recvAudPkg + n.recvVidPkg,
                  o = r - i;
                if (0 === r && 0 === i) return;
                (this.uplinkLoss_ = o <= 0 ? 0 : Math.round((o / r) * 100)),
                  (this.uplinkRTT_ = n.rtt),
                  (this.uplinkNetworkQuality = this.getNetworkQuality(
                    this.uplinkLoss_,
                    this.uplinkRTT_
                  ));
              }
            },
          },
          {
            key: "handleDownlinkNetworkQuality",
            value:
              ((n = yt(
                regeneratorRuntime.mark(function e() {
                  var t,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    c,
                    u,
                    d,
                    l,
                    p,
                    h,
                    f,
                    m = this;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this.connections_ && 0 !== this.connections_.size) {
                              e.next = 3;
                              break;
                            }
                            return (this.downlinkNetworkQuality = 0), e.abrupt("return");
                          case 3:
                            if (
                              (t = Lt(this.connections_.values())
                                .map(function (e) {
                                  return e.getPeerConnection();
                                })
                                .filter(function (e) {
                                  return !!e;
                                })).filter(this.isPeerConnectionDisconnected).length !== t.length
                            ) {
                              e.next = 8;
                              break;
                            }
                            return (this.downlinkNetworkQuality = 6), e.abrupt("return");
                          case 8:
                            (n = t.filter(function (e) {
                              return "connected" === e.connectionState;
                            })),
                              (r = 0);
                          case 10:
                            if (!(r < n.length)) {
                              e.next = 30;
                              break;
                            }
                            return (e.next = 13), this.getStat(n[r]);
                          case 13:
                            if (
                              ((i = e.sent),
                              (o = i.rtt),
                              (a = i.totalPacketsLost),
                              (s = i.totalPacketsReceived),
                              this.downlinkPrevStatMap_.has(n[r]))
                            ) {
                              e.next = 20;
                              break;
                            }
                            return (
                              this.downlinkPrevStatMap_.set(n[r], {
                                totalPacketsLost: a,
                                totalPacketsReceived: s,
                              }),
                              e.abrupt("continue", 27)
                            );
                          case 20:
                            (c = 0),
                              (u = this.downlinkPrevStatMap_.get(n[r])),
                              (d = a - u.totalPacketsLost),
                              (l = s - u.totalPacketsReceived),
                              (c = d <= 0 || l < 0 ? 0 : Math.round((d / (d + l)) * 100)),
                              this.downlinkPrevStatMap_.set(n[r], {
                                totalPacketsLost: a,
                                totalPacketsReceived: s,
                              }),
                              this.downlinkLossAndRTTMap_.set(n[r], { rtt: o, loss: c });
                          case 27:
                            r++, (e.next = 10);
                            break;
                          case 30:
                            if (
                              (Lt(this.downlinkPrevStatMap_.keys()).forEach(function (e) {
                                m.isPeerConnectionDisconnected(e) &&
                                  (m.downlinkPrevStatMap_.delete(e),
                                  m.downlinkLossAndRTTMap_.delete(e));
                              }),
                              0 !== this.downlinkLossAndRTTMap_.size)
                            ) {
                              e.next = 33;
                              break;
                            }
                            return e.abrupt("return");
                          case 33:
                            (p = this.getAverageLossAndRTT(
                              Lt(this.downlinkLossAndRTTMap_.values())
                            )),
                              (h = p.rtt),
                              (f = p.loss),
                              (this.downlinkNetworkQuality = this.getNetworkQuality(f, h));
                          case 35:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function () {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "getStat",
            value:
              ((t = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r, i, o;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = { rtt: 0, totalPacketsLost: 0, totalPacketsReceived: 0 }),
                              t && Ef())
                            ) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return", n);
                          case 3:
                            (r = t.getReceivers()), (e.prev = 4), (i = 0);
                          case 6:
                            if (!(i < r.length)) {
                              e.next = 15;
                              break;
                            }
                            return (o = r[i]), (e.next = 10), o.getStats();
                          case 10:
                            e.sent.forEach(function (e) {
                              "candidate-pair" === e.type &&
                                "number" == typeof e.currentRoundTripTime &&
                                (n.rtt = Math.round(1e3 * e.currentRoundTripTime)),
                                "inbound-rtp" !== e.type ||
                                  ("audio" !== e.mediaType && "video" !== e.mediaType) ||
                                  ((n.totalPacketsLost += e.packetsLost),
                                  (n.totalPacketsReceived += e.packetsReceived));
                            });
                          case 12:
                            i++, (e.next = 6);
                            break;
                          case 15:
                            return e.abrupt("return", n);
                          case 18:
                            return (e.prev = 18), (e.t0 = e.catch(4)), e.abrupt("return", n);
                          case 21:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 18]]
                  );
                })
              )),
              function (e) {
                return t.apply(this, arguments);
              }),
          },
          {
            key: "getAverageLossAndRTT",
            value: function (e) {
              var t = { rtt: 0, loss: 0 };
              return (
                Array.isArray(e) &&
                  e.length > 0 &&
                  (e.forEach(function (e) {
                    (t.rtt += e.rtt), (t.loss += e.loss);
                  }),
                  Object.keys(t).forEach(function (n) {
                    t[n] = Math.round(t[n] / e.length);
                  })),
                t
              );
            },
          },
          {
            key: "getNetworkQuality",
            value: function (e, t) {
              return e > 50 || t > 500
                ? 5
                : e > 30 || t > 350
                ? 4
                : e > 20 || t > 200
                ? 3
                : e > 10 || t > 100
                ? 2
                : e >= 0 || t >= 0
                ? 1
                : 0;
            },
          },
          {
            key: "handleSignalConnectionStateChange",
            value: function (e) {
              e.state === Kp
                ? ((this.uplinkRTT_ = 0), (this.uplinkLoss_ = 0), (this.uplinkNetworkQuality = 6))
                : e.state === Yp &&
                  6 === this.uplinkNetworkQuality &&
                  (this.uplinkNetworkQuality = 5);
            },
          },
          {
            key: "handleUplinkConnectionStateChange",
            value: function (e) {
              var t = e.state;
              t === pu
                ? ((this.uplinkLoss_ = 0), (this.uplinkRTT_ = 0), (this.uplinkNetworkQuality = 6))
                : t === mu && 6 === this.uplinkNetworkQuality && (this.uplinkNetworkQuality = 5);
            },
          },
          {
            key: "isPeerConnectionDisconnected",
            value: function (e) {
              return !(
                !e ||
                ("disconnected" !== e.connectionState &&
                  "failed" !== e.connectionState &&
                  "closed" !== e.connectionState)
              );
            },
          },
          {
            key: "setUplinkConnection",
            value: function (e) {
              (this.uplinkConnection_ = e),
                this.uplinkConnection_
                  ? this.uplinkConnection_.on(Hf, this.handleUplinkConnectionStateChange.bind(this))
                  : ((this.uplinkNetworkQuality = 0),
                    (this.uplinkRTT_ = 0),
                    (this.uplinkLoss_ = 0));
            },
          },
          {
            key: "start",
            value: function () {
              var e = this;
              -1 === this.interval_
                ? (this.log_.info("start network quality calculating"),
                  (this.interval_ = cs.setInterval(function () {
                    e.handleDownlinkNetworkQuality(),
                      e.emitter_.emit(rm, {
                        uplinkNetworkQuality: e.uplinkNetworkQuality,
                        downlinkNetworkQuality: e.downlinkNetworkQuality,
                      });
                  }, 2e3)))
                : this.log_.info("network quality calculating is already started");
            },
          },
          {
            key: "stop",
            value: function () {
              this.log_.info("stop network quality calculating"),
                -1 !== this.interval_ && (cs.clearInterval(this.interval_), (this.interval_ = -1));
            },
          },
          {
            key: "on",
            value: function (e, t) {
              this.emitter_.on(e, t);
            },
          },
          {
            key: "uplinkNetworkQuality",
            get: function () {
              return this.uplinkNetworkQuality_;
            },
            set: function (e) {
              e !== this.uplinkNetworkQuality_ &&
                this.log_.info(
                  "uplink network quality change "
                    .concat(this.uplinkNetworkQuality, " -> ")
                    .concat(e, ", rtt: ")
                    .concat(this.uplinkRTT_, ", loss: ")
                    .concat(this.uplinkLoss_)
                ),
                (this.uplinkNetworkQuality_ = e);
            },
          },
          {
            key: "downlinkNetworkQuality",
            get: function () {
              return this.downlinkNetworkQuality_;
            },
            set: function (e) {
              if (e !== this.downlinkNetworkQuality_) {
                var t = this.getAverageLossAndRTT(Lt(this.downlinkLossAndRTTMap_.values())),
                  n = t.rtt,
                  r = t.loss;
                this.log_.info(
                  "downlink network quality change "
                    .concat(this.downlinkNetworkQuality, " -> ")
                    .concat(e, ", rtt: ")
                    .concat(n, ", loss: ")
                    .concat(r)
                );
              }
              this.downlinkNetworkQuality_ = e;
            },
          },
        ]),
        e
      );
    })(),
    fm = (function () {
      function e() {
        St(this, e),
          (this.log_ = or),
          (this.localStream_ = null),
          (this.prevDevices_ = []),
          this.initialize();
      }
      var t, n, r;
      return (
        kt(e, [
          {
            key: "initialize",
            value:
              ((r = yt(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            navigator.mediaDevices &&
                              navigator.mediaDevices.addEventListener(
                                "devicechange",
                                this.onDeviceChange.bind(this)
                              );
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function () {
                return r.apply(this, arguments);
              }),
          },
          {
            key: "onDeviceChange",
            value:
              ((n = yt(
                regeneratorRuntime.mark(function e() {
                  var t,
                    n,
                    r,
                    i = this;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              this.localStream_ &&
                              this.localStream_.getMediaStream() &&
                              !this.localStream_.getScreen()
                            ) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (e.next = 4), Pv.getDevices();
                          case 4:
                            (t = e.sent),
                              (n = t.filter(function (e) {
                                return (
                                  i.prevDevices_.findIndex(function (t) {
                                    var n = t.deviceId;
                                    return e.deviceId === n;
                                  }) < 0
                                );
                              })),
                              (r = this.prevDevices_.filter(function (e) {
                                return (
                                  t.findIndex(function (t) {
                                    var n = t.deviceId;
                                    return e.deviceId === n;
                                  }) < 0
                                );
                              })),
                              n.length > 0 && this.handleDeviceAdded(this.prevDevices_, n),
                              r.length > 0 && this.handleDeviceRemoved(t, r),
                              (this.prevDevices_ = t);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function () {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "setLocalStream",
            value:
              ((t = yt(
                regeneratorRuntime.mark(function e(t) {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!t) {
                              e.next = 4;
                              break;
                            }
                            return (e.next = 3), Pv.getDevices();
                          case 3:
                            this.prevDevices_ = e.sent;
                          case 4:
                            this.localStream_ = t;
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e) {
                return t.apply(this, arguments);
              }),
          },
          {
            key: "handleDeviceAdded",
            value: function (e, t) {
              this.log_.warn("devicesAdded: ".concat(JSON.stringify(t))),
                this.localStream_.updateDeviceIdInUse();
              var n = t.filter(function (e) {
                  return "videoinput" === e.kind;
                }),
                r = t.filter(function (e) {
                  return "audioinput" === e.kind;
                }),
                i = e.filter(function (e) {
                  return "videoinput" === e.kind;
                }),
                o = e.filter(function (e) {
                  return "audioinput" === e.kind;
                }),
                a = n.length > 0 && 0 === i.length && this.localStream_.getVideo(),
                s = r.length > 0 && 0 === o.length && this.localStream_.getAudio();
              if (s && a)
                return (
                  this.log_.info(
                    "new microphone and camera detected, but there was no device before."
                  ),
                  void this.localStream_.updateStream({
                    audio: !0,
                    video: !0,
                    cameraId: n[0].deviceId,
                    microphoneId: r[0].deviceId,
                  })
                );
              a &&
                (this.log_.info("new camera detected, but there was no camera before."),
                this.localStream_.updateStream({ audio: !1, video: !0, cameraId: n[0].deviceId })),
                s &&
                  (this.log_.info("new microphone detected, but there was no microphone before."),
                  this.localStream_.updateStream({
                    audio: !0,
                    video: !1,
                    microphoneId: r[0].deviceId,
                  }));
            },
          },
          {
            key: "handleDeviceRemoved",
            value: function (e, t) {
              this.log_.warn("devicesRemoved: ".concat(JSON.stringify(t))),
                this.localStream_.updateDeviceIdInUse();
              var n = !1,
                r = !1,
                i = this.localStream_.getCameraId(),
                o = this.localStream_.getMicrophoneId();
              if ("default" === o) {
                var a = this.localStream_.getMicrophoneGroupId(),
                  s = e.filter(function (e) {
                    return "default" === e.deviceId && "audioinput" === e.kind;
                  })[0];
                s && s.groupId !== a && (r = !0);
              }
              if (
                (t.forEach(function (e) {
                  var t = e.deviceId;
                  i.length > 0 && t === i ? (n = !0) : o.length > 0 && t === o && (r = !0);
                }),
                n && r)
              )
                return (
                  this.log_.warn(
                    "current camera and microphone in use is lost, cameraId: "
                      .concat(i, ", microphoneId: ")
                      .concat(o)
                  ),
                  void (
                    (this.localStream_.getAudio() || this.localStream_.getVideo()) &&
                    this.localStream_.updateStream({ video: !0, audio: !0 })
                  )
                );
              n &&
                (this.log_.warn("current camera in use is lost, deviceId: ".concat(i)),
                this.localStream_.getVideo() &&
                  this.localStream_.updateStream({ video: !0, audio: !1 })),
                r &&
                  (this.log_.warn("current microphone in use is lost, deviceId: ".concat(o)),
                  this.localStream_.getAudio() &&
                    this.localStream_.updateStream({ video: !1, audio: !0 }));
            },
          },
        ]),
        e
      );
    })(),
    mm = (1).toFixed,
    vm = Math.floor,
    gm = function (e, t, n) {
      return 0 === t ? n : t % 2 == 1 ? gm(e, t - 1, n * e) : gm(e * e, t / 2, n);
    },
    _m =
      (mm &&
        ("0.000" !== (8e-5).toFixed(3) ||
          "1" !== (0.9).toFixed(0) ||
          "1.25" !== (1.255).toFixed(2) ||
          "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))) ||
      !i(function () {
        mm.call({});
      });
  Ae(
    { target: "Number", proto: !0, forced: _m },
    {
      toFixed: function (e) {
        var t,
          n,
          r,
          i,
          o = (function (e) {
            if ("number" != typeof e && "Number" != l(e)) throw TypeError("Incorrect invocation");
            return +e;
          })(this),
          a = se(e),
          s = [0, 0, 0, 0, 0, 0],
          c = "",
          u = "0",
          d = function (e, t) {
            for (var n = -1, r = t; ++n < 6; ) (r += e * s[n]), (s[n] = r % 1e7), (r = vm(r / 1e7));
          },
          p = function (e) {
            for (var t = 6, n = 0; --t >= 0; ) (n += s[t]), (s[t] = vm(n / e)), (n = (n % e) * 1e7);
          },
          h = function () {
            for (var e = 6, t = ""; --e >= 0; )
              if ("" !== t || 0 === e || 0 !== s[e]) {
                var n = String(s[e]);
                t = "" === t ? n : t + Cr.call("0", 7 - n.length) + n;
              }
            return t;
          };
        if (a < 0 || a > 20) throw RangeError("Incorrect fraction digits");
        if (o != o) return "NaN";
        if (o <= -1e21 || o >= 1e21) return String(o);
        if ((o < 0 && ((c = "-"), (o = -o)), o > 1e-21))
          if (
            ((n =
              (t =
                (function (e) {
                  for (var t = 0, n = e; n >= 4096; ) (t += 12), (n /= 4096);
                  for (; n >= 2; ) (t += 1), (n /= 2);
                  return t;
                })(o * gm(2, 69, 1)) - 69) < 0
                ? o * gm(2, -t, 1)
                : o / gm(2, t, 1)),
            (n *= 4503599627370496),
            (t = 52 - t) > 0)
          ) {
            for (d(0, n), r = a; r >= 7; ) d(1e7, 0), (r -= 7);
            for (d(gm(10, r, 1), 0), r = t - 1; r >= 23; ) p(1 << 23), (r -= 23);
            p(1 << r), d(1, 1), p(2), (u = h());
          } else d(0, n), d(1 << -t, 0), (u = h() + Cr.call("0", a));
        return (u =
          a > 0
            ? c +
              ((i = u.length) <= a
                ? "0." + Cr.call("0", a - i) + u
                : u.slice(0, i - a) + "." + u.slice(i - a))
            : c + u);
      },
    }
  );
  var ym = window.AudioContext || window.webkitAudioContext,
    Sm = null,
    bm = (function () {
      function e() {
        var t = this;
        St(this, e),
          Sm || (Sm = new ym()),
          (this.context_ = Sm),
          (this.instant_ = 0),
          (this.slow_ = 0),
          (this.clip_ = 0),
          (this.script_ = this.context_.createScriptProcessor(2048, 1, 1)),
          (this.script_.onaudioprocess = function (e) {
            var n,
              r = e.inputBuffer.getChannelData(0),
              i = 0,
              o = 0;
            for (n = 0; n < r.length; ++n) (i += r[n] * r[n]), Math.abs(r[n]) > 0.99 && (o += 1);
            (t.instant_ = Math.sqrt(i / r.length)),
              (t.slow_ = 0.95 * t.slow_ + 0.05 * t.instant_),
              (t.clip_ = o / r.length);
          });
      }
      return (
        kt(e, [
          {
            key: "connectToSource",
            value: function (e, t) {
              try {
                var n = new MediaStream();
                n.addTrack(e),
                  (this.mic_ = this.context_.createMediaStreamSource(n)),
                  this.mic_.connect(this.script_),
                  this.script_.connect(this.context_.destination),
                  void 0 !== t && t(null);
              } catch (Av) {
                or.error("soundMeter connectToSource error: " + Av), void 0 !== t && t(Av);
              }
            },
          },
          {
            key: "stop",
            value: function () {
              this.mic_.disconnect(), this.script_.disconnect();
            },
          },
          {
            key: "resume",
            value: function () {
              this.context_ && this.context_.resume();
            },
          },
          {
            key: "getVolume",
            value: function () {
              return this.instant_.toFixed(2);
            },
          },
        ]),
        e
      );
    })(),
    km = (function () {
      function e(t) {
        St(this, e),
          (this.stream_ = t.stream),
          (this.userId_ = t.stream.getUserId()),
          (this.log_ = this.stream_.getIDLogger()),
          (this.track_ = t.track),
          (this.div_ = t.div),
          (this.muted_ = t.muted),
          (this.outputDeviceId_ = t.outputDeviceId),
          (this.volume_ = t.volume),
          (this.emitter_ = new Wp()),
          this.initializeElement(),
          (this.state_ = "NONE"),
          (this.soundMeter_ = null);
      }
      var t, n, r;
      return (
        kt(e, [
          {
            key: "initializeElement",
            value: function () {
              var e = new MediaStream();
              e.addTrack(this.track_);
              var t = document.createElement("audio");
              (t.srcObject = e),
                (t.muted = this.muted_),
                t.setAttribute("id", "audio_".concat(this.stream_.getId())),
                t.setAttribute("autoplay", "autoplay"),
                t.setAttribute("playsinline", "playsinline"),
                this.div_.appendChild(t),
                (this.element_ = t),
                this.handleEvents();
            },
          },
          {
            key: "play",
            value:
              ((r = yt(
                regeneratorRuntime.mark(function e() {
                  var t;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!this.outputDeviceId_) {
                              e.next = 3;
                              break;
                            }
                            return (e.next = 3), this.element_.setSinkId(this.outputDeviceId_);
                          case 3:
                            return (
                              this.setVolume(this.volume_),
                              (e.prev = 4),
                              (e.next = 7),
                              this.element_.play()
                            );
                          case 7:
                            e.next = 15;
                            break;
                          case 9:
                            if (
                              ((e.prev = 9),
                              (e.t0 = e.catch(4)),
                              this.log_.warn("<audio> play() error: " + e.t0),
                              !(t = e.t0.toString() + " <audio>").startsWith("NotAllowedError"))
                            ) {
                              e.next = 15;
                              break;
                            }
                            throw new Rh({ code: Th.PLAY_NOT_ALLOWED, message: t });
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[4, 9]]
                  );
                })
              )),
              function () {
                return r.apply(this, arguments);
              }),
          },
          {
            key: "handleEvents",
            value: function () {
              (this.handleElementEvent = this.handleElementEvent.bind(this)),
                (this.handleTrackEvent = this.handleTrackEvent.bind(this)),
                this.element_.addEventListener("playing", this.handleElementEvent),
                this.element_.addEventListener("ended", this.handleElementEvent),
                this.element_.addEventListener("pause", this.handleElementEvent),
                this.element_.addEventListener("error", this.handleElementEvent),
                this.track_.addEventListener("ended", this.handleTrackEvent),
                this.track_.addEventListener("mute", this.handleTrackEvent),
                this.track_.addEventListener("unmute", this.handleTrackEvent);
            },
          },
          {
            key: "handleElementEvent",
            value: function (e) {
              switch (e.type) {
                case "playing":
                  this.log_.info("stream - audio player is starting playing"),
                    (this.state_ = "PLAYING"),
                    this.emitter_.emit(dm, { state: this.state_, reason: "playing" });
                  break;
                case "ended":
                  this.log_.info("stream - audio player is ended"),
                    "STOPPED" !== this.state_ &&
                      ((this.state_ = "STOPPED"),
                      this.emitter_.emit(dm, { state: this.state_, reason: "ended" }));
                  break;
                case "pause":
                  this.log_.info("stream - audio player is paused"),
                    (this.state_ = "PAUSED"),
                    this.emitter_.emit(dm, { state: this.state_, reason: "pause" });
                  break;
                case "error":
                  this.element_ &&
                    this.element_.error &&
                    (this.log_.error(
                      "stream - audio player error observed. code: "
                        .concat(this.element_.error.code, " message: ")
                        .concat(this.element_.error.message)
                    ),
                    lf(
                      "stat-".concat(Fu, "-").concat(this.element_.error.code),
                      this.element_.error
                    ));
              }
            },
          },
          {
            key: "handleTrackEvent",
            value: function (e) {
              switch (e.type) {
                case "ended":
                  this.log_.info("stream - audio player track is ended"),
                    "STOPPED" !== this.state_ &&
                      ((this.state_ = "STOPPED"),
                      this.emitter_.emit(dm, { state: this.state_, reason: "ended" }));
                  break;
                case "mute":
                  this.log_.info("stream - audio track is unable to provide media output"),
                    "PAUSED" !== this.state_ &&
                      ((this.state_ = "PAUSED"),
                      this.emitter_.emit(dm, { state: this.state_, reason: "mute" }));
                  break;
                case "unmute":
                  this.log_.info("stream - audio track is able to provide media output"),
                    "PAUSED" === this.state_ &&
                      ((this.state_ = "PLAYING"),
                      this.emitter_.emit(dm, { state: this.state_, reason: "unmute" }));
              }
            },
          },
          {
            key: "unbindEvents",
            value: function () {
              this.element_ &&
                (this.element_.removeEventListener("playing", this.handleElementEvent),
                this.element_.removeEventListener("ended", this.handleElementEvent),
                this.element_.removeEventListener("pause", this.handleElementEvent),
                this.element_.removeEventListener("error", this.handleElementEvent)),
                this.track_ &&
                  (this.track_.removeEventListener("ended", this.handleTrackEvent),
                  this.track_.removeEventListener("mute", this.handleTrackEvent),
                  this.track_.removeEventListener("unmute", this.handleTrackEvent));
            },
          },
          {
            key: "setSinkId",
            value:
              ((n = yt(
                regeneratorRuntime.mark(function e(t) {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this.outputDeviceId_ === t) {
                              e.next = 4;
                              break;
                            }
                            return (e.next = 3), this.element_.setSinkId(t);
                          case 3:
                            this.outputDeviceId_ = t;
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e) {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "setVolume",
            value: function (e) {
              this.log_.info("stream - audioElement setVolume to : ".concat(e)),
                (this.element_.volume = e);
            },
          },
          {
            key: "getAudioLevel",
            value: function () {
              return (
                this.soundMeter_ ||
                  ((this.soundMeter_ = new bm()), this.soundMeter_.connectToSource(this.track_)),
                this.soundMeter_.getVolume()
              );
            },
          },
          {
            key: "stop",
            value: function () {
              this.unbindEvents(),
                this.div_.removeChild(this.element_),
                (this.element_.srcObject = null),
                this.soundMeter_ && (this.soundMeter_.stop(), (this.soundMeter_ = null)),
                (this.element_ = null);
            },
          },
          {
            key: "resume",
            value:
              ((t = yt(
                regeneratorRuntime.mark(function e() {
                  var t;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              this.soundMeter_ && this.soundMeter_.resume(),
                              (e.next = 4),
                              this.element_.play()
                            );
                          case 4:
                            e.next = 12;
                            break;
                          case 6:
                            if (
                              ((e.prev = 6),
                              (e.t0 = e.catch(0)),
                              this.log_.warn("<audio> play() error: " + e.t0),
                              !(t = e.t0.toString() + " <audio>").startsWith("NotAllowedError"))
                            ) {
                              e.next = 12;
                              break;
                            }
                            throw new Rh({ code: Th.PLAY_NOT_ALLOWED, message: t });
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[0, 6]]
                  );
                })
              )),
              function () {
                return t.apply(this, arguments);
              }),
          },
          {
            key: "on",
            value: function (e, t) {
              this.emitter_.on(e, t);
            },
          },
        ]),
        e
      );
    })(),
    Tm = new Wp(),
    Rm = 100,
    wm = 110,
    Im = 111,
    Cm = 112,
    Em = 120,
    xm = 130,
    Pm = 131,
    Am = (function () {
      function e(t) {
        St(this, e),
          (this.stream_ = t.stream),
          (this.userId_ = t.stream.getUserId()),
          (this.log_ = this.stream_.getIDLogger()),
          (this.track_ = t.track),
          (this.div_ = t.div),
          (this.muted_ = t.muted),
          (this.objectFit_ = t.objectFit),
          (this.mirror_ = t.mirror),
          (this.emitter_ = new Wp()),
          this.initializeElement(),
          (this.state_ = "NONE");
      }
      var t, n;
      return (
        kt(e, [
          {
            key: "initializeElement",
            value: function () {
              var e = new MediaStream();
              e.addTrack(this.track_);
              var t = document.createElement("video");
              (t.srcObject = e), (t.muted = !0);
              var n = "width: 100%; height: 100%; object-fit: ".concat(this.objectFit_, ";");
              this.mirror_ && (n += "transform: rotateY(180deg);"),
                t.setAttribute("id", "video_".concat(this.stream_.getId())),
                t.setAttribute("style", n),
                t.setAttribute("autoplay", "autoplay"),
                t.setAttribute("playsinline", "playsinline"),
                this.div_.appendChild(t),
                (this.element_ = t),
                this.handleEvents();
            },
          },
          {
            key: "play",
            value:
              ((n = yt(
                regeneratorRuntime.mark(function e() {
                  var t;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), this.element_.play();
                          case 3:
                            e.next = 11;
                            break;
                          case 5:
                            if (
                              ((e.prev = 5),
                              (e.t0 = e.catch(0)),
                              this.log_.warn("<video> play() error: " + e.t0),
                              !(t = e.t0.toString() + " <video>").startsWith("NotAllowedError"))
                            ) {
                              e.next = 11;
                              break;
                            }
                            throw new Rh({ code: Th.PLAY_NOT_ALLOWED, message: t });
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[0, 5]]
                  );
                })
              )),
              function () {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "handleEvents",
            value: function () {
              (this.handleElementEvent = this.handleElementEvent.bind(this)),
                (this.handleTrackEvent = this.handleTrackEvent.bind(this)),
                this.element_.addEventListener("playing", this.handleElementEvent),
                this.element_.addEventListener("ended", this.handleElementEvent),
                this.element_.addEventListener("pause", this.handleElementEvent),
                this.element_.addEventListener("error", this.handleElementEvent),
                this.track_.addEventListener("ended", this.handleTrackEvent),
                this.track_.addEventListener("mute", this.handleTrackEvent),
                this.track_.addEventListener("unmute", this.handleTrackEvent);
            },
          },
          {
            key: "handleElementEvent",
            value: function (e) {
              switch (e.type) {
                case "playing":
                  this.log_.info("stream - video player is starting playing"),
                    (this.state_ = "PLAYING"),
                    this.emitter_.emit(dm, { state: this.state_, reason: "playing" });
                  break;
                case "ended":
                  this.log_.info("stream - video player is ended"),
                    "STOPPED" !== this.state_ &&
                      ((this.state_ = "STOPPED"),
                      this.emitter_.emit(dm, { state: this.state_, reason: "ended" }));
                  break;
                case "pause":
                  this.log_.info("stream - video player is paused"),
                    (this.state_ = "PAUSED"),
                    this.emitter_.emit(dm, { state: this.state_, reason: "pause" });
                  break;
                case "error":
                  this.element_ &&
                    this.element_.error &&
                    (this.log_.error(
                      "stream - video player error observed. code: "
                        .concat(this.element_.error.code, " message: ")
                        .concat(this.element_.error.message)
                    ),
                    lf(
                      "stat-".concat(Fu, "-").concat(this.element_.error.code),
                      this.element_.error
                    ));
              }
            },
          },
          {
            key: "handleTrackEvent",
            value: function (e) {
              switch (e.type) {
                case "ended":
                  this.log_.info("stream - video player track is ended"),
                    "STOPPED" !== this.state_ &&
                      ((this.state_ = "STOPPED"),
                      this.emitter_.emit(dm, { state: this.state_, reason: "ended" }));
                  break;
                case "mute":
                  this.log_.info("stream - video track is unable to provide media output"),
                    "PAUSED" !== this.state_ &&
                      ((this.state_ = "PAUSED"),
                      this.emitter_.emit(dm, { state: this.state_, reason: "mute" }),
                      Tm.emit(xm, { stream: this.stream_ }));
                  break;
                case "unmute":
                  this.log_.info("stream - video track is able to provide media output"),
                    "PAUSED" === this.state_ &&
                      ((this.state_ = "PLAYING"),
                      this.emitter_.emit(dm, { state: this.state_, reason: "unmute" }),
                      Tm.emit(Pm, { stream: this.stream_ }));
              }
            },
          },
          {
            key: "unbindEvents",
            value: function () {
              this.element_ &&
                (this.element_.removeEventListener("playing", this.handleElementEvent),
                this.element_.removeEventListener("ended", this.handleElementEvent),
                this.element_.removeEventListener("pause", this.handleElementEvent),
                this.element_.removeEventListener("error", this.handleElementEvent)),
                this.track_ &&
                  (this.track_.removeEventListener("ended", this.handleTrackEvent),
                  this.track_.removeEventListener("mute", this.handleTrackEvent),
                  this.track_.removeEventListener("unmute", this.handleTrackEvent));
            },
          },
          {
            key: "stop",
            value: function () {
              this.unbindEvents(),
                this.div_.removeChild(this.element_),
                (this.element_.srcObject = null),
                (this.element_ = null);
            },
          },
          {
            key: "resume",
            value:
              ((t = yt(
                regeneratorRuntime.mark(function e() {
                  var t;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), this.element_.play();
                          case 3:
                            e.next = 11;
                            break;
                          case 5:
                            if (
                              ((e.prev = 5),
                              (e.t0 = e.catch(0)),
                              this.log_.warn("<video> play() error: " + e.t0),
                              !(t = e.t0.toString() + " <video>").startsWith("NotAllowedError"))
                            ) {
                              e.next = 11;
                              break;
                            }
                            throw new Rh({ code: Th.PLAY_NOT_ALLOWED, message: t });
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[0, 5]]
                  );
                })
              )),
              function () {
                return t.apply(this, arguments);
              }),
          },
          {
            key: "getVideoFrame",
            value: function () {
              var e = document.createElement("canvas");
              return (
                (e.width = this.element_.videoWidth),
                (e.height = this.element_.videoHeight),
                e.getContext("2d").drawImage(this.element_, 0, 0),
                e.toDataURL("image/png")
              );
            },
          },
          {
            key: "on",
            value: function (e, t) {
              this.emitter_.on(e, t);
            },
          },
        ]),
        e
      );
    })(),
    Dm = (function () {
      function e(t) {
        St(this, e),
          (this.userId_ = t.userId),
          (this.tinyId_ = t.tinyId),
          (this.client_ = t.client),
          (this.sdpSemantics_ = t.client.getSdpSemantics()),
          (this.isUplink_ = t.isUplink),
          (this.log_ = new pm({
            id: "n|" + this.userId_,
            direction: this.isUplink_ ? "local" : "remote",
            type: "",
          })),
          (this.signalChannel_ = t.signalChannel),
          (this.peerConnection_ = null),
          (this.connectTimer_ = -1),
          (this.isErrorObserved_ = !1),
          (this.emitter_ = new Wp()),
          (this.currentState_ = pu);
      }
      var t;
      return (
        kt(e, [
          {
            key: "initialize",
            value: function () {
              var e = {
                iceServers: this.client_.getIceServers(),
                iceTransportPolicy: "all",
                sdpSemantics: this.sdpSemantics_,
                bundlePolicy: "max-bundle",
                rtcpMuxPolicy: "require",
                tcpCandidatePolicy: "disable",
                IceTransportsType: "nohost",
              };
              (this.peerConnection_ = new RTCPeerConnection(e)),
                (this.peerConnection_.onconnectionstatechange =
                  this.onConnectionStateChange.bind(this));
            },
          },
          {
            key: "close",
            value: function () {
              this.log_.info("closing connection"),
                this.clearConnectTimer(),
                this.closePeerConnection();
            },
          },
          {
            key: "closePeerConnection",
            value: function () {
              this.peerConnection_ &&
                ((this.peerConnection_.onconnectionstatechange = function (e) {}),
                this.peerConnection_.close(),
                (this.peerConnection_ = null));
            },
          },
          {
            key: "getDTLSTransportState",
            value: function () {
              if (!this.peerConnection_) return "unknown";
              var e = null;
              if (this.isUplink_) {
                if (!xf() || 0 === this.peerConnection_.getSenders().length) return "unknown";
                e = this.peerConnection_.getSenders()[0].transport;
              } else {
                if (!Ef() || 0 === this.peerConnection_.getReceivers().length) return "unknown";
                e = this.peerConnection_.getReceivers()[0].transport;
              }
              return e ? e.state : "unknown";
            },
          },
          {
            key: "onConnectionStateChange",
            value: function (e) {
              var t = this,
                n = this.peerConnection_.iceConnectionState,
                r = this.getDTLSTransportState();
              if (
                (this.log_.info(
                  "onConnectionStateChange() connectionState: " + e.target.connectionState
                ),
                this.log_.info(
                  "ICE Transport state: ".concat(n, ", DTLS Transport state: ").concat(r)
                ),
                "connecting" === e.target.connectionState)
              ) {
                this.clearConnectTimer();
                (this.connectTimer_ = setTimeout(function () {
                  var e = ""
                    .concat(
                      t.isUplink_ ? "uplink" : "downlink",
                      " DTLS Transport connection timeout ("
                    )
                    .concat(10, "s). ICE Transport state: ")
                    .concat(t.peerConnection_.iceConnectionState, ", DTLS Transport state: ")
                    .concat(t.getDTLSTransportState());
                  t.emitConnectionStateChangedEvent(pu), (t.isErrorObserved_ = !0);
                  var n = new Rh({ message: e, code: Th.ICE_TRANSPORT_ERROR });
                  mf({ eventType: Du, error: n }), t.emitter_.emit(Gf, n);
                }, 1e4)),
                  this.emitConnectionStateChangedEvent(hu);
              } else this.clearConnectTimer();
              if ("failed" === e.target.connectionState || "closed" === e.target.connectionState) {
                var i = ""
                    .concat(
                      this.isUplink_ ? "uplink" : "downlink",
                      " ICE/DTLS Transport connection "
                    )
                    .concat(e.target.connectionState, ". ICE Transport state: ")
                    .concat(n, ", DTLS Transport state: ")
                    .concat(r),
                  o = new Rh({ message: i, code: Th.ICE_TRANSPORT_ERROR });
                mf({ eventType: Du, error: o }),
                  this.emitConnectionStateChangedEvent(pu),
                  this.isErrorObserved_ || this.emitter_.emit(Gf, o);
              }
              if (
                ("connected" === e.target.connectionState ||
                  "completed" === e.target.connectionState) &&
                (this.logSelectedCandidate(),
                ff({ eventType: Du }),
                this.emitConnectionStateChangedEvent(mu),
                !this.isUplink_ &&
                  !this.sentSubscriptionAfterConnected_ &&
                  this.pendingSubscription_.length > 0)
              ) {
                this.log_.info("send pending subscription after RTCPeerConnection is connected");
                var a = this.pendingSubscription_[0];
                this.doSendSubscription(a.data, a.stream, a.type),
                  (this.sentSubscriptionAfterConnected_ = !0);
              }
            },
          },
          {
            key: "emitConnectionStateChangedEvent",
            value: function (e) {
              e !== this.currentState_ &&
                ((this.currentState_ === fu && e === hu) ||
                  (this.emitter_.emit(Hf, { prevState: this.currentState_, state: e }),
                  (this.currentState_ = e)));
            },
          },
          {
            key: "hitTest",
            value: function (e) {
              return ((0 === e || "0" === e) && this.isUplink_) || e === this.tinyId_;
            },
          },
          {
            key: "addEventInternal",
            value: function (e, t) {
              var n = this.client_.getUserId(),
                r = {
                  eventId: e,
                  eventDesc: t,
                  timestamp: ds(),
                  userId: n,
                  tinyId: this.client_.getTinyId(),
                };
              this.isUplink_ || ((r.remoteUserId = this.userId_), (r.remoteTinyId = this.tinyId_)),
                sf(n, r);
            },
          },
          {
            key: "getPeerConnection",
            value: function () {
              return this.peerConnection_;
            },
          },
          {
            key: "getUserId",
            value: function () {
              return this.userId_;
            },
          },
          {
            key: "getTinyId",
            value: function () {
              return this.tinyId_;
            },
          },
          {
            key: "clearConnectTimer",
            value: function () {
              -1 !== this.connectTimer_ &&
                (clearTimeout(this.connectTimer_), (this.connectTimer_ = -1));
            },
          },
          {
            key: "logSelectedCandidate",
            value:
              ((t = yt(
                regeneratorRuntime.mark(function e() {
                  var t, n, r, i, o, a, s;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this.peerConnection_) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (e.next = 4), this.peerConnection_.getStats();
                          case 4:
                            (t = e.sent), (n = jt(t)), (e.prev = 6), n.s();
                          case 8:
                            if ((r = n.n()).done) {
                              e.next = 18;
                              break;
                            }
                            if (((i = Mt(r.value, 2))[0], (o = i[1]), !Nf(o))) {
                              e.next = 16;
                              break;
                            }
                            return (
                              (a = t.get(o.localCandidateId)),
                              (s = t.get(o.remoteCandidateId)),
                              a &&
                                this.log_.debug(
                                  "local candidate: "
                                    .concat(a.candidateType, " ")
                                    .concat(a.protocol, ":")
                                    .concat(a.ip || a.address, ":")
                                    .concat(a.port, " ")
                                    .concat(a.networkType || "", " ")
                                    .concat(
                                      "relay" === a.candidateType
                                        ? "relayProtocol:" + a.relayProtocol
                                        : ""
                                    )
                                ),
                              s &&
                                this.log_.debug(
                                  "remote candidate: "
                                    .concat(s.candidateType, " ")
                                    .concat(s.protocol, ":")
                                    .concat(s.ip || s.address, ":")
                                    .concat(s.port)
                                ),
                              e.abrupt("break", 18)
                            );
                          case 16:
                            e.next = 8;
                            break;
                          case 18:
                            e.next = 23;
                            break;
                          case 20:
                            (e.prev = 20), (e.t0 = e.catch(6)), n.e(e.t0);
                          case 23:
                            return (e.prev = 23), n.f(), e.finish(23);
                          case 26:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[6, 20, 23, 26]]
                  );
                })
              )),
              function () {
                return t.apply(this, arguments);
              }),
          },
          {
            key: "on",
            value: function (e, t, n) {
              this.emitter_.on(e, t, n);
            },
          },
          {
            key: "off",
            value: function (e, t, n) {
              this.emitter_.off(e, t, n);
            },
          },
        ]),
        e
      );
    })(),
    Om = (function () {
      function e(t) {
        St(this, e),
          (this.userId_ = t.userId),
          (this.isRemote_ = t.isRemote),
          (this.type_ = t.type),
          (this.log_ = new pm({
            id: "s|" + this.userId_,
            direction: this.isRemote_ ? "remote" : "local",
            type: this.isRemote_ ? this.type_ : "",
          })),
          (this.mirror_ = !1),
          this.isRemote_ || (this.mirror_ = !0),
          void 0 !== t.mirror && (this.mirror_ = t.mirror),
          (this.client_ = null),
          void 0 !== t.client && (this.client_ = t.client),
          (this.mediaStream_ = null),
          (this.div_ = null),
          (this.isPlaying_ = !1),
          (this.connection_ = null),
          (this.audioPlayer_ = null),
          (this.videoPlayer_ = null),
          (this.muted_ = !1),
          (this.objectFit_ = "cover"),
          (this.id_ = ss()),
          (this.audioOutputDeviceId_ = 0),
          (this.audioVolume_ = 1),
          (this.emitter_ = new Wp());
      }
      var t, n, r, i, o;
      return (
        kt(e, [
          {
            key: "getType",
            value: function () {
              return this.type_;
            },
          },
          {
            key: "getIDLogger",
            value: function () {
              return this.log_;
            },
          },
          {
            key: "emitConnectionStateChanged",
            value: function (e) {
              this.emitter_.emit(cm, e);
            },
          },
          {
            key: "setConnection",
            value: function (e) {
              this.connection_ !== e &&
                (e instanceof Dm
                  ? (null !== this.connection_ &&
                      this.connection_.off(Hf, this.emitConnectionStateChanged, this),
                    e.on(Hf, this.emitConnectionStateChanged, this))
                  : null === e && this.connection_.off(Hf, this.emitConnectionStateChanged, this),
                (this.connection_ = e));
            },
          },
          {
            key: "getConnection",
            value: function () {
              return this.connection_;
            },
          },
          {
            key: "play",
            value:
              ((o = yt(
                regeneratorRuntime.mark(function e(t, n) {
                  var r, i, o, a;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!this.isPlaying_) {
                              e.next = 2;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message: "duplicated play() call observed, please stop() firstly",
                            });
                          case 2:
                            if (
                              ((this.isPlaying_ = !0),
                              this.log_.info(
                                "stream start to play with options: ".concat(JSON.stringify(n))
                              ),
                              (r = document.createElement("div")).setAttribute(
                                "id",
                                "player_".concat(this.id_)
                              ),
                              r.setAttribute(
                                "style",
                                "width: 100%; height: 100%; position: relative; background-color: black; overflow: hidden;"
                              ),
                              (i = t),
                              "object" !== gt(t) && (i = document.getElementById(t)),
                              i.appendChild(r),
                              (this.div_ = r),
                              this.isRemote_ || (this.muted_ = !0),
                              n && void 0 !== n.muted && (this.muted_ = n.muted),
                              this.isRemote_ &&
                                "auxiliary" === this.getType() &&
                                (this.objectFit_ = "contain"),
                              n && void 0 !== n.objectFit && (this.objectFit_ = n.objectFit),
                              !this.isRemote_)
                            ) {
                              e.next = 41;
                              break;
                            }
                            if (
                              ((o = []),
                              (a = this.getSubscribedState()),
                              !this.hasVideo() || !a.video)
                            ) {
                              e.next = 27;
                              break;
                            }
                            return (e.prev = 19), (e.next = 22), this.playVideo();
                          case 22:
                            e.next = 27;
                            break;
                          case 24:
                            (e.prev = 24), (e.t0 = e.catch(19)), o.push(e.t0);
                          case 27:
                            if (!this.hasAudio() || !a.audio) {
                              e.next = 36;
                              break;
                            }
                            return (e.prev = 28), (e.next = 31), this.playAudio();
                          case 31:
                            e.next = 36;
                            break;
                          case 33:
                            (e.prev = 33), (e.t1 = e.catch(28)), o.push(e.t1);
                          case 36:
                            if (!(o.length > 0)) {
                              e.next = 39;
                              break;
                            }
                            throw new Rh({
                              code: Th.PLAY_NOT_ALLOWED,
                              message:
                                "NotAllowedError: autoplay is not allowed in the current browser, refer to https://web.sdk.qcloud.com/trtc/webrtc/doc/zh-cn/tutorial-21-advanced-auto-play-policy.html",
                            });
                          case 39:
                            e.next = 47;
                            break;
                          case 41:
                            if (!this.hasVideo()) {
                              e.next = 44;
                              break;
                            }
                            return (e.next = 44), this.playVideo();
                          case 44:
                            if (!this.hasAudio()) {
                              e.next = 47;
                              break;
                            }
                            return (e.next = 47), this.playAudio();
                          case 47:
                            Tm.emit(Rm, { stream: this });
                          case 48:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [
                      [19, 24],
                      [28, 33],
                    ]
                  );
                })
              )),
              function (e, t) {
                return o.apply(this, arguments);
              }),
          },
          {
            key: "playAudio",
            value:
              ((i = yt(
                regeneratorRuntime.mark(function e() {
                  var t,
                    n = this;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((t = this.getAudioTrack()), this.audioPlayer_ || !t)) {
                              e.next = 14;
                              break;
                            }
                            return (
                              this.log_.info("stream - create AudioPlayer and play"),
                              (this.audioPlayer_ = new km({
                                stream: this,
                                track: t,
                                div: this.div_,
                                muted: this.muted_,
                                outputDeviceId: this.audioOutputDeviceId_,
                                volume: this.audioVolume_,
                              })),
                              this.audioPlayer_.on(dm, function (e) {
                                n.emitter_.emit(am, {
                                  type: "audio",
                                  state: e.state,
                                  reason: e.reason,
                                });
                              }),
                              (e.prev = 5),
                              (e.next = 8),
                              this.audioPlayer_.play()
                            );
                          case 8:
                            e.next = 14;
                            break;
                          case 10:
                            throw (
                              ((e.prev = 10),
                              (e.t0 = e.catch(5)),
                              this.emitter_.emit(um, e.t0),
                              e.t0)
                            );
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[5, 10]]
                  );
                })
              )),
              function () {
                return i.apply(this, arguments);
              }),
          },
          {
            key: "playVideo",
            value:
              ((r = yt(
                regeneratorRuntime.mark(function e() {
                  var t,
                    n = this;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((t = this.getVideoTrack()), this.videoPlayer_ || !t)) {
                              e.next = 14;
                              break;
                            }
                            return (
                              this.log_.info("stream - create VideoPlayer and play"),
                              (this.videoPlayer_ = new Am({
                                stream: this,
                                track: t,
                                div: this.div_,
                                muted: this.muted_,
                                objectFit: this.objectFit_,
                                mirror: this.mirror_,
                              })),
                              this.videoPlayer_.on(dm, function (e) {
                                n.emitter_.emit(am, {
                                  type: "video",
                                  state: e.state,
                                  reason: e.reason,
                                });
                              }),
                              (e.prev = 5),
                              (e.next = 8),
                              this.videoPlayer_.play()
                            );
                          case 8:
                            e.next = 14;
                            break;
                          case 10:
                            throw (
                              ((e.prev = 10),
                              (e.t0 = e.catch(5)),
                              this.emitter_.emit(um, e.t0),
                              e.t0)
                            );
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[5, 10]]
                  );
                })
              )),
              function () {
                return r.apply(this, arguments);
              }),
          },
          {
            key: "stopAudio",
            value: function () {
              this.audioPlayer_ &&
                (this.log_.info("stream - stop AudioPlayer"),
                this.audioPlayer_.stop(),
                (this.audioPlayer_ = null));
            },
          },
          {
            key: "stopVideo",
            value: function () {
              this.videoPlayer_ &&
                (this.log_.info("stream - stop VideoPlayer"),
                this.videoPlayer_.stop(),
                (this.videoPlayer_ = null));
            },
          },
          {
            key: "restartAudio",
            value: function () {
              this.isPlaying_ && (this.stopAudio(), this.playAudio().catch(function (e) {}));
            },
          },
          {
            key: "restartVideo",
            value: function () {
              this.isPlaying_ && (this.stopVideo(), this.playVideo().catch(function (e) {}));
            },
          },
          {
            key: "stop",
            value: function () {
              this.isPlaying_ &&
                ((this.isPlaying_ = !1),
                this.stopAudio(),
                this.stopVideo(),
                this.div_.parentNode.removeChild(this.div_));
            },
          },
          {
            key: "resume",
            value:
              ((n = yt(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this.isPlaying_) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            if ((this.log_.info("stream - resume"), !this.audioPlayer_)) {
                              e.next = 6;
                              break;
                            }
                            return (e.next = 6), this.audioPlayer_.resume();
                          case 6:
                            if (!this.videoPlayer_) {
                              e.next = 9;
                              break;
                            }
                            return (e.next = 9), this.videoPlayer_.resume();
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function () {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "close",
            value: function () {
              this.isPlaying_ && this.stop(),
                this.mediaStream_ &&
                  ((this.mediaStream_.preventEvent = 1),
                  this.mediaStream_.getTracks().forEach(function (e) {
                    e.stop();
                  }),
                  (this.mediaStream_ = null));
            },
          },
          {
            key: "muteAudio",
            value: function () {
              return this.addRemoteEvent(!0, "audio"), this.doEnableTrack("audio", !1);
            },
          },
          {
            key: "muteVideo",
            value: function () {
              return this.addRemoteEvent(!0, "video"), this.doEnableTrack("video", !1);
            },
          },
          {
            key: "unmuteAudio",
            value: function () {
              return this.addRemoteEvent(!1, "audio"), this.doEnableTrack("audio", !0);
            },
          },
          {
            key: "unmuteVideo",
            value: function () {
              return this.addRemoteEvent(!1, "video"), this.doEnableTrack("video", !0);
            },
          },
          {
            key: "addRemoteEvent",
            value: function (e, t) {
              if (this.isRemote_ && this.client_) {
                var n = this.client_.getUserId(),
                  r = "".concat(e ? "mute" : "unmute", " remote ").concat(t);
                sf(n, {
                  eventId: "audio" === t ? (e ? Bh : Gh) : e ? Fh : zh,
                  eventDesc: r,
                  timestamp: new Date().getTime(),
                  userId: n,
                  tinyId: this.client_.getTinyId(),
                  remoteUserId: this.userId_,
                  remoteTinyId: this.connection_.getTinyId(),
                });
              }
            },
          },
          {
            key: "doEnableTrack",
            value: function (e, t) {
              var n = !1;
              return (
                "audio" === e
                  ? this.mediaStream_.getAudioTracks().forEach(function (e) {
                      (n = !0), (e.enabled = t);
                    })
                  : this.mediaStream_.getVideoTracks().forEach(function (e) {
                      (n = !0), (e.enabled = t);
                    }),
                n
              );
            },
          },
          {
            key: "getId",
            value: function () {
              return this.id_;
            },
          },
          {
            key: "getUserId",
            value: function () {
              return this.userId_;
            },
          },
          {
            key: "isPlaying",
            value: function () {
              return this.isPlaying_;
            },
          },
          {
            key: "setAudioOutput",
            value:
              ((t = yt(
                regeneratorRuntime.mark(function e(t) {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((this.audioOutputDeviceId_ = t), !this.audioPlayer_)) {
                              e.next = 4;
                              break;
                            }
                            return (e.next = 4), this.audioPlayer_.setSinkId(t);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e) {
                return t.apply(this, arguments);
              }),
          },
          {
            key: "setAudioVolume",
            value: function (e) {
              (this.audioVolume_ = e),
                this.log_.info("setAudioVolume to ".concat(e)),
                this.audioPlayer_ && this.audioPlayer_.setVolume(e);
            },
          },
          {
            key: "getAudioLevel",
            value: function () {
              var e = 0;
              return this.audioPlayer_ && (e = this.audioPlayer_.getAudioLevel()), e;
            },
          },
          {
            key: "hasAudio",
            value: function () {
              if (this.isRemote_) {
                if (!this.connection_) return !1;
                var e = this.connection_.getTrackState();
                return "main" === this.type_ && e.audio;
              }
              return !!this.getAudioTrack();
            },
          },
          {
            key: "hasVideo",
            value: function () {
              if (this.isRemote_) {
                if (!this.connection_) return !1;
                var e = this.connection_.getTrackState();
                return "auxiliary" === this.type_ ? e.auxiliary : e.video;
              }
              return !!this.getVideoTrack();
            },
          },
          {
            key: "getSubscribedState",
            value: function () {
              return this.isRemote_ ? this.connection_.getSubscribeState() : null;
            },
          },
          {
            key: "getAudioTrack",
            value: function () {
              var e = null;
              if (this.mediaStream_) {
                var t = this.mediaStream_.getAudioTracks();
                t.length > 0 && (e = t[0]);
              }
              return e;
            },
          },
          {
            key: "getVideoTrack",
            value: function () {
              var e = null;
              if (this.mediaStream_) {
                var t = this.mediaStream_.getVideoTracks();
                t.length > 0 && (e = t[0]);
              }
              return e;
            },
          },
          {
            key: "getVideoFrame",
            value: function () {
              return this.videoPlayer_ ? this.videoPlayer_.getVideoFrame() : null;
            },
          },
          {
            key: "getMediaStream",
            value: function () {
              return this.mediaStream_;
            },
          },
          {
            key: "setMediaStream",
            value: function (e) {
              e !== this.mediaStream_ &&
                (this.mediaStream_ &&
                  this.mediaStream_.getTracks().forEach(function (e) {
                    return e.stop();
                  }),
                (this.mediaStream_ = e));
            },
          },
          {
            key: "updateVideoPlayingState",
            value: function (e) {
              this.isPlaying_ &&
                (e
                  ? (this.log_.info("playing state updated, play video"),
                    this.playVideo().catch(function (e) {}))
                  : (this.log_.info("playing state updated, stop video"), this.stopVideo()));
            },
          },
          {
            key: "updateAudioPlayingState",
            value: function (e) {
              this.isPlaying_ &&
                (e
                  ? (this.log_.info("playing state updated, play audio"),
                    this.playAudio().catch(function (e) {}))
                  : (this.log_.info("playing state updated, stop audio"), this.stopAudio()));
            },
          },
          {
            key: "on",
            value: function (e, t, n) {
              this.emitter_.on(e, t, n);
            },
          },
          {
            key: "off",
            value: function (e, t, n) {
              "*" === e ? this.emitter_.removeAllListeners() : this.emitter_.off(e, t, n);
            },
          },
          {
            key: "isRemote",
            value: function () {
              return this.isRemote_;
            },
          },
          {
            key: "getDiv",
            value: function () {
              return this.div_;
            },
          },
          {
            key: "getObjectFit",
            value: function () {
              return this.objectFit_;
            },
          },
          {
            key: "getMuted",
            value: function () {
              return this.muted_;
            },
          },
          {
            key: "getClient",
            value: function () {
              return this.client_;
            },
          },
        ]),
        e
      );
    })(),
    Nm = (function (e) {
      It(n, e);
      var t = Ot(n);
      function n(e) {
        var r;
        St(this, n);
        var i = { isRemote: !0, type: e.type },
          o = wt(wt({}, e), i);
        return (
          ((r = t.call(this, o)).isInSubscriptionCycle_ = !1),
          (r.isStreamAddedEventEmitted_ = !1),
          r
        );
      }
      return (
        kt(n, [
          {
            key: "getType",
            value: function () {
              return Nt(Ct(n.prototype), "getType", this).call(this);
            },
          },
          {
            key: "setInSubscriptionCycle",
            value: function (e) {
              this.isInSubscriptionCycle_ = e;
            },
          },
          {
            key: "isInSubscriptionCycle",
            value: function () {
              return this.isInSubscriptionCycle_;
            },
          },
          {
            key: "setIsStreamAddedEventEmitted",
            value: function (e) {
              this.isStreamAddedEventEmitted_ = e;
            },
          },
          {
            key: "getIsStreamAddedEventEmitted",
            value: function () {
              return this.isStreamAddedEventEmitted_;
            },
          },
          {
            key: "getAudioTrack",
            value: function () {
              return this.connection_ && this.connection_.getTrackState().audio
                ? Nt(Ct(n.prototype), "getAudioTrack", this).call(this)
                : null;
            },
          },
          {
            key: "getVideoTrack",
            value: function () {
              if (!this.connection_) return null;
              var e = this.connection_.getTrackState();
              return ("main" !== this.type_ || e.video) &&
                ("auxiliary" !== this.type_ || e.auxiliary)
                ? Nt(Ct(n.prototype), "getVideoTrack", this).call(this)
                : null;
            },
          },
        ]),
        n
      );
    })(Om),
    Mm = (function () {
      function e(t) {
        St(this, e),
          (this.client_ = t.client),
          (this.subscribedStreams_ = new Map()),
          (this.unsubscribedStreams_ = new Map()),
          (this.subscriptedOptions_ = new Map()),
          (this.autoRecoveryFlags_ = new Map());
      }
      var t, n, r;
      return (
        kt(e, [
          {
            key: "recover",
            value:
              ((r = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r, i;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = t.getUserId()),
                              (r = t.getType()),
                              this.hasAutoRecoveryFlag(n, r))
                            ) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt("return");
                          case 5:
                            if (
                              ((i = this.getUnsubscribedStream(n, r) ? "unsubscribe" : "subscribe"),
                              (e.prev = 6),
                              or.warn(
                                "recover() try to recover subscription ["
                                  .concat(i, "][")
                                  .concat(n, "]")
                              ),
                              "subscribe" !== i)
                            ) {
                              e.next = 13;
                              break;
                            }
                            return (e.next = 11), this.recoverSubscription(n, t);
                          case 11:
                            e.next = 15;
                            break;
                          case 13:
                            return (e.next = 15), this.recoverUnsubscription(n, t);
                          case 15:
                            ff({ eventType: Uu }),
                              or.warn(
                                "recover() recover successfully [".concat(i, "][").concat(n, "]")
                              ),
                              (e.next = 23);
                            break;
                          case 19:
                            (e.prev = 19),
                              (e.t0 = e.catch(6)),
                              or.error("recover() recover failed ".concat(i), e.t0),
                              mf({ eventType: Uu, error: e.t0 });
                          case 23:
                            this.deleteAutoRecoveryFlag(n, r);
                          case 24:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[6, 19]]
                  );
                })
              )),
              function (e) {
                return r.apply(this, arguments);
              }),
          },
          {
            key: "recoverSubscription",
            value:
              ((n = yt(
                regeneratorRuntime.mark(function e(t, n) {
                  var r, i, o, a, s, c;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((r = this.getOptions(t, n.getType())),
                              (i = this.getSubscribedStream(t, n.getType())),
                              r && i)
                            ) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt("return");
                          case 4:
                            return (
                              (o = this.getStreamMuteState(i)),
                              (a = o.isAudioMuted),
                              (s = o.isVideoMuted),
                              this.mergeStream(i, n),
                              (c = i.getConnection()),
                              (e.next = 9),
                              c.subscribe(i, r)
                            );
                          case 9:
                            this.recoverPlayingState(i),
                              a && i.doEnableTrack("audio", !1),
                              s && i.doEnableTrack("video", !1);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e, t) {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "recoverUnsubscription",
            value:
              ((t = yt(
                regeneratorRuntime.mark(function e(t, n) {
                  var r, i;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((r = this.getUnsubscribedStream(t, n.getType()))) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return (
                              this.mergeStream(r, n),
                              (i = r.getConnection()),
                              (e.next = 7),
                              i.unsubscribe(r)
                            );
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e, n) {
                return t.apply(this, arguments);
              }),
          },
          {
            key: "getStreamMuteState",
            value: function (e) {
              var t = { isAudioMuted: !1, isVideoMuted: !1 },
                n = e.getMediaStream();
              return (
                n &&
                  ((t.isAudioMuted = n
                    .getAudioTracks()
                    .map(function (e) {
                      return e.enabled;
                    })
                    .includes(!1)),
                  (t.isVideoMuted = n
                    .getVideoTracks()
                    .map(function (e) {
                      return e.enabled;
                    })
                    .includes(!1))),
                t
              );
            },
          },
          {
            key: "recoverPlayingState",
            value: function (e) {
              var t = e.isPlaying(),
                n = e.getDiv();
              if (t && n) {
                var r = n.parentNode;
                e.stop(), e.play(r, { objectFit: e.getObjectFit(), muted: e.getMuted() });
              }
            },
          },
          {
            key: "mergeStream",
            value: function (e, t) {
              var n = t.getConnection(),
                r = t.getMediaStream();
              e.setConnection(n),
                n.setRemoteStream(r.id, e),
                e.setMediaStream(r),
                e.updateAudioPlayingState(t.hasAudio()),
                e.updateVideoPlayingState(t.hasVideo());
            },
          },
          {
            key: "addSubscriptionRecord",
            value: function (e, t, n) {
              var r = t.getType();
              if (this.subscribedStreams_.has(e)) this.subscribedStreams_.get(e).set(r, t);
              else {
                var i = new Map();
                i.set(t.getType(), t), this.subscribedStreams_.set(e, i);
              }
              if (this.subscriptedOptions_.has(e)) this.subscriptedOptions_.get(e).set(r, n);
              else {
                var o = new Map();
                o.set(t.getType(), n), this.subscriptedOptions_.set(e, o);
              }
              this.deleteUnsubscriptionRecord(e, r);
            },
          },
          {
            key: "addUnsubscriptionRecord",
            value: function (e, t) {
              if (this.unsubscribedStreams_.has(e))
                this.unsubscribedStreams_.get(e).set(t.getType(), t);
              else {
                var n = new Map();
                n.set(t.getType(), t), this.unsubscribedStreams_.set(e, n);
              }
              this.deleteSubscriptionRecord(e, t.getType());
            },
          },
          {
            key: "getSubscribedStream",
            value: function (e, t) {
              return this.subscribedStreams_.has(e) && this.subscribedStreams_.get(e).has(t)
                ? this.subscribedStreams_.get(e).get(t)
                : null;
            },
          },
          {
            key: "getOptions",
            value: function (e, t) {
              return this.subscriptedOptions_.has(e) && this.subscriptedOptions_.get(e).has(t)
                ? this.subscriptedOptions_.get(e).get(t)
                : null;
            },
          },
          {
            key: "getUnsubscribedStream",
            value: function (e, t) {
              return this.unsubscribedStreams_.has(e) && this.unsubscribedStreams_.get(e).has(t)
                ? this.unsubscribedStreams_.get(e).get(t)
                : null;
            },
          },
          {
            key: "deleteSubscriptionRecord",
            value: function (e, t) {
              this.subscribedStreams_.has(e) && this.subscribedStreams_.get(e).delete(t),
                this.subscriptedOptions_.has(e) && this.subscriptedOptions_.get(e).delete(t);
            },
          },
          {
            key: "deleteUnsubscriptionRecord",
            value: function (e, t) {
              this.unsubscribedStreams_.has(e) && this.unsubscribedStreams_.get(e).delete(t);
            },
          },
          {
            key: "markAllStream",
            value: function () {
              for (var e = 0, t = Lt(this.subscribedStreams_.entries()); e < t.length; e++)
                for (
                  var n = Mt(t[e], 2), r = n[0], i = 0, o = Lt(n[1].entries());
                  i < o.length;
                  i++
                ) {
                  var a = Mt(o[i], 1)[0];
                  this.setAutoRecoveryFlag(r, a);
                }
              for (var s = 0, c = Lt(this.unsubscribedStreams_.entries()); s < c.length; s++)
                for (
                  var u = Mt(c[s], 2), d = u[0], l = 0, p = Lt(u[1].entries());
                  l < p.length;
                  l++
                ) {
                  var h = Mt(p[l], 1)[0];
                  this.setAutoRecoveryFlag(d, h);
                }
            },
          },
          {
            key: "setAutoRecoveryFlag",
            value: function (e, t) {
              if (
                (or.info("setAutoRecoveryFlag() mark [".concat(e, "][").concat(t, "]")),
                this.autoRecoveryFlags_.has(e))
              )
                this.autoRecoveryFlags_.get(e).set(t);
              else {
                var n = new Map();
                n.set(t), this.autoRecoveryFlags_.set(e, n);
              }
            },
          },
          {
            key: "hasAutoRecoveryFlag",
            value: function (e, t) {
              return (
                !!this.isEnabled &&
                this.autoRecoveryFlags_.has(e) &&
                this.autoRecoveryFlags_.get(e).has(t)
              );
            },
          },
          {
            key: "deleteAutoRecoveryFlag",
            value: function (e, t) {
              this.autoRecoveryFlags_.has(e) && this.autoRecoveryFlags_.get(e).delete(t);
            },
          },
          {
            key: "delete",
            value: function (e) {
              this.unsubscribedStreams_.delete(e),
                this.subscribedStreams_.delete(e),
                this.subscriptedOptions_.delete(e),
                this.autoRecoveryFlags_.delete(e);
            },
          },
          {
            key: "isEnabled",
            get: function () {
              return "webrtc" !== this.client_.getEnv();
            },
          },
        ]),
        e
      );
    })(),
    Lm = Je.find,
    Um = !0,
    Vm = rt("find");
  "find" in [] &&
    Array(1).find(function () {
      Um = !1;
    }),
    Ae(
      { target: "Array", proto: !0, forced: Um || !Vm },
      {
        find: function (e) {
          return Lm(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
    aa("find");
  var jm = t(function (e) {
      var t = (e.exports = {
        v: [{ name: "version", reg: /^(\d*)$/ }],
        o: [
          {
            name: "origin",
            reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
            names: ["username", "sessionId", "sessionVersion", "netType", "ipVer", "address"],
            format: "%s %s %d %s IP%d %s",
          },
        ],
        s: [{ name: "name" }],
        i: [{ name: "description" }],
        u: [{ name: "uri" }],
        e: [{ name: "email" }],
        p: [{ name: "phone" }],
        z: [{ name: "timezones" }],
        r: [{ name: "repeats" }],
        t: [{ name: "timing", reg: /^(\d*) (\d*)/, names: ["start", "stop"], format: "%d %d" }],
        c: [
          {
            name: "connection",
            reg: /^IN IP(\d) (\S*)/,
            names: ["version", "ip"],
            format: "IN IP%d %s",
          },
        ],
        b: [
          {
            push: "bandwidth",
            reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
            names: ["type", "limit"],
            format: "%s:%s",
          },
        ],
        m: [
          {
            reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
            names: ["type", "port", "protocol", "payloads"],
            format: "%s %d %s %s",
          },
        ],
        a: [
          {
            push: "rtp",
            reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
            names: ["payload", "codec", "rate", "encoding"],
            format: function (e) {
              return e.encoding
                ? "rtpmap:%d %s/%s/%s"
                : e.rate
                ? "rtpmap:%d %s/%s"
                : "rtpmap:%d %s";
            },
          },
          {
            push: "fmtp",
            reg: /^fmtp:(\d*) ([\S| ]*)/,
            names: ["payload", "config"],
            format: "fmtp:%d %s",
          },
          { name: "control", reg: /^control:(.*)/, format: "control:%s" },
          {
            name: "rtcp",
            reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
            names: ["port", "netType", "ipVer", "address"],
            format: function (e) {
              return null != e.address ? "rtcp:%d %s IP%d %s" : "rtcp:%d";
            },
          },
          {
            push: "rtcpFbTrrInt",
            reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
            names: ["payload", "value"],
            format: "rtcp-fb:%s trr-int %d",
          },
          {
            push: "rtcpFb",
            reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
            names: ["payload", "type", "subtype"],
            format: function (e) {
              return null != e.subtype ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s";
            },
          },
          {
            push: "ext",
            reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
            names: ["value", "direction", "encrypt-uri", "uri", "config"],
            format: function (e) {
              return (
                "extmap:%d" +
                (e.direction ? "/%s" : "%v") +
                (e["encrypt-uri"] ? " %s" : "%v") +
                " %s" +
                (e.config ? " %s" : "")
              );
            },
          },
          { name: "extmapAllowMixed", reg: /^(extmap-allow-mixed)/ },
          {
            push: "crypto",
            reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
            names: ["id", "suite", "config", "sessionConfig"],
            format: function (e) {
              return null != e.sessionConfig ? "crypto:%d %s %s %s" : "crypto:%d %s %s";
            },
          },
          { name: "setup", reg: /^setup:(\w*)/, format: "setup:%s" },
          { name: "connectionType", reg: /^connection:(new|existing)/, format: "connection:%s" },
          { name: "mid", reg: /^mid:([^\s]*)/, format: "mid:%s" },
          { name: "msid", reg: /^msid:(.*)/, format: "msid:%s" },
          { name: "ptime", reg: /^ptime:(\d*(?:\.\d*)*)/, format: "ptime:%d" },
          { name: "maxptime", reg: /^maxptime:(\d*(?:\.\d*)*)/, format: "maxptime:%d" },
          { name: "direction", reg: /^(sendrecv|recvonly|sendonly|inactive)/ },
          { name: "icelite", reg: /^(ice-lite)/ },
          { name: "iceUfrag", reg: /^ice-ufrag:(\S*)/, format: "ice-ufrag:%s" },
          { name: "icePwd", reg: /^ice-pwd:(\S*)/, format: "ice-pwd:%s" },
          {
            name: "fingerprint",
            reg: /^fingerprint:(\S*) (\S*)/,
            names: ["type", "hash"],
            format: "fingerprint:%s %s",
          },
          {
            push: "candidates",
            reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
            names: [
              "foundation",
              "component",
              "transport",
              "priority",
              "ip",
              "port",
              "type",
              "raddr",
              "rport",
              "tcptype",
              "generation",
              "network-id",
              "network-cost",
            ],
            format: function (e) {
              var t = "candidate:%s %d %s %d %s %d typ %s";
              return (
                (t += null != e.raddr ? " raddr %s rport %d" : "%v%v"),
                (t += null != e.tcptype ? " tcptype %s" : "%v"),
                null != e.generation && (t += " generation %d"),
                (t += null != e["network-id"] ? " network-id %d" : "%v"),
                (t += null != e["network-cost"] ? " network-cost %d" : "%v")
              );
            },
          },
          { name: "endOfCandidates", reg: /^(end-of-candidates)/ },
          {
            name: "remoteCandidates",
            reg: /^remote-candidates:(.*)/,
            format: "remote-candidates:%s",
          },
          { name: "iceOptions", reg: /^ice-options:(\S*)/, format: "ice-options:%s" },
          {
            push: "ssrcs",
            reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
            names: ["id", "attribute", "value"],
            format: function (e) {
              var t = "ssrc:%d";
              return null != e.attribute && ((t += " %s"), null != e.value && (t += ":%s")), t;
            },
          },
          {
            push: "ssrcGroups",
            reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
            names: ["semantics", "ssrcs"],
            format: "ssrc-group:%s %s",
          },
          {
            name: "msidSemantic",
            reg: /^msid-semantic:\s?(\w*) (\S*)/,
            names: ["semantic", "token"],
            format: "msid-semantic: %s %s",
          },
          {
            push: "groups",
            reg: /^group:(\w*) (.*)/,
            names: ["type", "mids"],
            format: "group:%s %s",
          },
          { name: "rtcpMux", reg: /^(rtcp-mux)/ },
          { name: "rtcpRsize", reg: /^(rtcp-rsize)/ },
          {
            name: "sctpmap",
            reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
            names: ["sctpmapNumber", "app", "maxMessageSize"],
            format: function (e) {
              return null != e.maxMessageSize ? "sctpmap:%s %s %s" : "sctpmap:%s %s";
            },
          },
          { name: "xGoogleFlag", reg: /^x-google-flag:([^\s]*)/, format: "x-google-flag:%s" },
          {
            push: "rids",
            reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
            names: ["id", "direction", "params"],
            format: function (e) {
              return e.params ? "rid:%s %s %s" : "rid:%s %s";
            },
          },
          {
            push: "imageattrs",
            reg: new RegExp(
              "^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"
            ),
            names: ["pt", "dir1", "attrs1", "dir2", "attrs2"],
            format: function (e) {
              return "imageattr:%s %s %s" + (e.dir2 ? " %s %s" : "");
            },
          },
          {
            name: "simulcast",
            reg: new RegExp(
              "^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"
            ),
            names: ["dir1", "list1", "dir2", "list2"],
            format: function (e) {
              return "simulcast:%s %s" + (e.dir2 ? " %s %s" : "");
            },
          },
          {
            name: "simulcast_03",
            reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
            names: ["value"],
            format: "simulcast: %s",
          },
          { name: "framerate", reg: /^framerate:(\d+(?:$|\.\d+))/, format: "framerate:%s" },
          {
            name: "sourceFilter",
            reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
            names: ["filterMode", "netType", "addressTypes", "destAddress", "srcList"],
            format: "source-filter: %s %s %s %s %s",
          },
          { name: "bundleOnly", reg: /^(bundle-only)/ },
          { name: "label", reg: /^label:(.+)/, format: "label:%s" },
          { name: "sctpPort", reg: /^sctp-port:(\d+)$/, format: "sctp-port:%s" },
          {
            name: "maxMessageSize",
            reg: /^max-message-size:(\d+)$/,
            format: "max-message-size:%s",
          },
          {
            push: "tsRefClocks",
            reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
            names: ["clksrc", "clksrcExt"],
            format: function (e) {
              return "ts-refclk:%s" + (null != e.clksrcExt ? "=%s" : "");
            },
          },
          {
            name: "mediaClk",
            reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
            names: ["id", "mediaClockName", "mediaClockValue", "rateNumerator", "rateDenominator"],
            format: function (e) {
              var t = "mediaclk:";
              return (
                (t += null != e.id ? "id=%s %s" : "%v%s"),
                (t += null != e.mediaClockValue ? "=%s" : ""),
                (t += null != e.rateNumerator ? " rate=%s" : ""),
                (t += null != e.rateDenominator ? "/%s" : "")
              );
            },
          },
          { name: "keywords", reg: /^keywds:(.+)$/, format: "keywds:%s" },
          { name: "content", reg: /^content:(.+)/, format: "content:%s" },
          { name: "bfcpFloorCtrl", reg: /^floorctrl:(c-only|s-only|c-s)/, format: "floorctrl:%s" },
          { name: "bfcpConfId", reg: /^confid:(\d+)/, format: "confid:%s" },
          { name: "bfcpUserId", reg: /^userid:(\d+)/, format: "userid:%s" },
          {
            name: "bfcpFloorId",
            reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
            names: ["id", "mStream"],
            format: "floorid:%s mstrm:%s",
          },
          { push: "invalid", names: ["value"] },
        ],
      });
      Object.keys(t).forEach(function (e) {
        t[e].forEach(function (e) {
          e.reg || (e.reg = /(.*)/), e.format || (e.format = "%s");
        });
      });
    }),
    Fm =
      (jm.v,
      jm.o,
      jm.s,
      jm.i,
      jm.u,
      jm.e,
      jm.p,
      jm.z,
      jm.r,
      jm.t,
      jm.c,
      jm.b,
      jm.m,
      jm.a,
      t(function (e, t) {
        var n = function (e) {
            return String(Number(e)) === e ? Number(e) : e;
          },
          r = function (e, t, r) {
            var i = e.name && e.names;
            e.push && !t[e.push] ? (t[e.push] = []) : i && !t[e.name] && (t[e.name] = {});
            var o = e.push ? {} : i ? t[e.name] : t;
            !(function (e, t, r, i) {
              if (i && !r) t[i] = n(e[1]);
              else
                for (var o = 0; o < r.length; o += 1) null != e[o + 1] && (t[r[o]] = n(e[o + 1]));
            })(r.match(e.reg), o, e.names, e.name),
              e.push && t[e.push].push(o);
          },
          i = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
        t.parse = function (e) {
          var t = {},
            n = [],
            o = t;
          return (
            e
              .split(/(\r\n|\r|\n)/)
              .filter(i)
              .forEach(function (e) {
                var t = e[0],
                  i = e.slice(2);
                "m" === t && (n.push({ rtp: [], fmtp: [] }), (o = n[n.length - 1]));
                for (var a = 0; a < (jm[t] || []).length; a += 1) {
                  var s = jm[t][a];
                  if (s.reg.test(i)) return r(s, o, i);
                }
              }),
            (t.media = n),
            t
          );
        };
        var o = function (e, t) {
          var r = t.split(/=(.+)/, 2);
          return (
            2 === r.length
              ? (e[r[0]] = n(r[1]))
              : 1 === r.length && t.length > 1 && (e[r[0]] = void 0),
            e
          );
        };
        (t.parseParams = function (e) {
          return e.split(/;\s?/).reduce(o, {});
        }),
          (t.parseFmtpConfig = t.parseParams),
          (t.parsePayloads = function (e) {
            return e.toString().split(" ").map(Number);
          }),
          (t.parseRemoteCandidates = function (e) {
            for (var t = [], r = e.split(" ").map(n), i = 0; i < r.length; i += 3)
              t.push({ component: r[i], ip: r[i + 1], port: r[i + 2] });
            return t;
          }),
          (t.parseImageAttributes = function (e) {
            return e.split(" ").map(function (e) {
              return e
                .substring(1, e.length - 1)
                .split(",")
                .reduce(o, {});
            });
          }),
          (t.parseSimulcastStreamList = function (e) {
            return e.split(";").map(function (e) {
              return e.split(",").map(function (e) {
                var t,
                  r = !1;
                return (
                  "~" !== e[0] ? (t = n(e)) : ((t = n(e.substring(1, e.length))), (r = !0)),
                  { scid: t, paused: r }
                );
              });
            });
          });
      })),
    Bm =
      (Fm.parse,
      Fm.parseParams,
      Fm.parseFmtpConfig,
      Fm.parsePayloads,
      Fm.parseRemoteCandidates,
      Fm.parseImageAttributes,
      Fm.parseSimulcastStreamList,
      /%[sdv%]/g),
    zm = function (e) {
      var t = 1,
        n = arguments,
        r = n.length;
      return e.replace(Bm, function (e) {
        if (t >= r) return e;
        var i = n[t];
        switch (((t += 1), e)) {
          case "%%":
            return "%";
          case "%s":
            return String(i);
          case "%d":
            return Number(i);
          case "%v":
            return "";
        }
      });
    },
    Gm = function (e, t, n) {
      var r = [
        e + "=" + (t.format instanceof Function ? t.format(t.push ? n : n[t.name]) : t.format),
      ];
      if (t.names)
        for (var i = 0; i < t.names.length; i += 1) {
          var o = t.names[i];
          t.name ? r.push(n[t.name][o]) : r.push(n[t.names[i]]);
        }
      else r.push(n[t.name]);
      return zm.apply(null, r);
    },
    Hm = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"],
    Wm = ["i", "c", "b", "a"],
    Jm = {
      write: function (e, t) {
        (t = t || {}),
          null == e.version && (e.version = 0),
          null == e.name && (e.name = " "),
          e.media.forEach(function (e) {
            null == e.payloads && (e.payloads = "");
          });
        var n = t.outerOrder || Hm,
          r = t.innerOrder || Wm,
          i = [];
        return (
          n.forEach(function (t) {
            jm[t].forEach(function (n) {
              n.name in e && null != e[n.name]
                ? i.push(Gm(t, n, e))
                : n.push in e &&
                  null != e[n.push] &&
                  e[n.push].forEach(function (e) {
                    i.push(Gm(t, n, e));
                  });
            });
          }),
          e.media.forEach(function (e) {
            i.push(Gm("m", jm.m[0], e)),
              r.forEach(function (t) {
                jm[t].forEach(function (n) {
                  n.name in e && null != e[n.name]
                    ? i.push(Gm(t, n, e))
                    : n.push in e &&
                      null != e[n.push] &&
                      e[n.push].forEach(function (e) {
                        i.push(Gm(t, n, e));
                      });
                });
              });
          }),
          i.join("\r\n") + "\r\n"
        );
      },
      parse: Fm.parse,
      parseParams: Fm.parseParams,
      parseFmtpConfig: Fm.parseFmtpConfig,
      parsePayloads: Fm.parsePayloads,
      parseRemoteCandidates: Fm.parseRemoteCandidates,
      parseImageAttributes: Fm.parseImageAttributes,
      parseSimulcastStreamList: Fm.parseSimulcastStreamList,
    },
    Qm = function (e) {
      return Jm.parse(e);
    },
    qm = function (e) {
      return Jm.write(e);
    },
    Km = function (e) {
      var t = Qm(e);
      return (
        t.media.forEach(function (e) {
          "audio" === e.type &&
            e.fmtp.forEach(function (e) {
              e.config += ";sprop-stereo=1;stereo=1";
            });
        }),
        qm(t)
      );
    },
    Xm = { voiceActivityDetection: !1 },
    $m = (function (e) {
      It(h, e);
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        c,
        u,
        d,
        l,
        p = Ot(h);
      function h(e) {
        var t;
        return (
          St(this, h),
          ((t = p.call(this, e)).localStream_ = null),
          (t.publishTimeout_ = -1),
          (t.isReconnecting_ = !1),
          (t.reconnectionCount_ = 0),
          (t.reconnectionTimer_ = -1),
          (t.isFirstConnection_ = !0),
          t
        );
      }
      return (
        kt(h, [
          {
            key: "initialize",
            value: function () {
              Nt(Ct(h.prototype), "initialize", this).call(this), this.installEvents();
            },
          },
          {
            key: "reset",
            value: function () {
              Nt(Ct(h.prototype), "close", this).call(this),
                this.uninstallEvents(),
                this.clearPublishTimeout();
            },
          },
          {
            key: "close",
            value: function () {
              this.reset(), this.emitConnectionStateChangedEvent(pu);
            },
          },
          {
            key: "installEvents",
            value: function () {
              this.emitter_.on(Gf, this.handleError, this),
                this.emitter_.on(Hf, this.handleConnectionStateChange, this);
            },
          },
          {
            key: "uninstallEvents",
            value: function () {
              this.emitter_.off(Gf, this.handleError, this),
                this.emitter_.off(Hf, this.handleConnectionStateChange, this);
            },
          },
          {
            key: "publish",
            value:
              ((l = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r, i;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (this.localStream_ = t),
                              (n = t.getMediaStream()),
                              this.log_.info("is publishing stream: ".concat(t.getId())),
                              (r = this.localStream_.getAudioTrack()),
                              (i = this.localStream_.getVideoTrack()),
                              r && this.peerConnection_.addTrack(r, n),
                              i && this.peerConnection_.addTrack(i, n),
                              this.updateMediaSettings(n),
                              (e.next = 10),
                              this.exchangeSDP()
                            );
                          case 10:
                            return e.abrupt("return", t);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e) {
                return l.apply(this, arguments);
              }),
          },
          {
            key: "updateMediaSettings",
            value: function (e) {
              var t = this,
                n = this.client_.getSystemResult(),
                r = n.isH264EncodeSupported,
                i = n.isVp8EncodeSupported,
                o = "";
              r ? (o = "H264") : i && (o = "VP8");
              var a = {
                EncVideoCodec: o,
                EncVideoWidth: 0,
                EncVideoHeight: 0,
                EncVideoBr: "0",
                EncVideoFps: 0,
                EncAudioCodec: "opus",
                EncAudioFS: 0,
                EncAudioCh: 0,
                EncAudioBr: "0",
              };
              "getSettings" in MediaStreamTrack.prototype
                ? e.getTracks().forEach(function (e) {
                    var n = e.getSettings();
                    if ("audio" === e.kind) {
                      var r = 1;
                      n.channelCount && (r = n.channelCount),
                        (a.EncAudioCh = r),
                        (a.EncAudioBr = "".concat(1e3 * t.localStream_.getAudioBitrate())),
                        (a.EncAudioFS = n.sampleRate);
                    } else "video" === e.kind && ((a.EncVideoWidth = n.width), (a.EncVideoHeight = n.height), (a.EncVideoFps = n.frameRate), (a.EncVideoBr = "".concat(1e3 * t.localStream_.getVideoBitrate())));
                  })
                : (a = this.getMediaSettingsFromProfile(a)),
                this.log_.info("updateMediaSettings: " + JSON.stringify(a)),
                this.signalChannel_.send(ch, a);
            },
          },
          {
            key: "getMediaSettingsFromProfile",
            value: function (e) {
              var t = this.localStream_;
              if (t) {
                if (t.getAudioTrack()) {
                  var n = t.getAudioProfile();
                  (e.EncAudioCh = n.channelCount),
                    (e.EncAudioBr = "".concat(1e3 * n.bitrate)),
                    (e.EncAudioFS = n.sampleRate);
                }
                if (t.getVideoTrack()) {
                  var r = t.getVideoProfile();
                  (e.EncVideoWidth = r.width),
                    (e.EncVideoHeight = r.height),
                    (e.EncVideoFps = r.frameRate),
                    (e.EncVideoBr = "".concat(1e3 * r.bitrate));
                }
              }
              return e;
            },
          },
          {
            key: "addTrack",
            value:
              ((d = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r, i;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!this.peerConnection_) {
                              e.next = 19;
                              break;
                            }
                            if (
                              (this.log_.info(
                                "is adding ".concat(
                                  t.kind,
                                  " track to current published local stream"
                                )
                              ),
                              !(
                                this.peerConnection_.getTransceivers().findIndex(function (e) {
                                  return "stopped" === e.direction;
                                }) >= 0
                              ))
                            ) {
                              e.next = 6;
                              break;
                            }
                            return (
                              this.log_.warn("transceiver is stopping, negotiate sdp first"),
                              (e.next = 6),
                              this.updateOffer(ed, t)
                            );
                          case 6:
                            if (
                              !(n = this.peerConnection_.getSenders().find(function (e) {
                                return e.track && e.track.kind === t.kind;
                              }))
                            ) {
                              e.next = 13;
                              break;
                            }
                            return (
                              this.log_.warn("sender already exists, remove sender first"),
                              (r = n.track),
                              this.removeSender(n),
                              (e.next = 13),
                              this.updateOffer(ed, r)
                            );
                          case 13:
                            return (
                              (i = this.localStream_.getMediaStream()),
                              this.peerConnection_.addTrack(t, i),
                              this.updateMediaSettings(i),
                              (e.next = 18),
                              this.updateOffer(Zu, t)
                            );
                          case 18:
                            sf(this.userId_, {
                              eventId: t.kind === Xu ? Ih : wh,
                              eventDesc: "add ".concat(
                                t.kind,
                                " track to current published stream"
                              ),
                              timestamp: ds(),
                              userId: this.userId_,
                              tinyId: this.tinyId_,
                            });
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e) {
                return d.apply(this, arguments);
              }),
          },
          {
            key: "isNeedToResetOfferOrder",
            value: function () {
              if (
                "plan-b" === this.sdpSemantics_ ||
                !this.peerConnection_ ||
                !this.peerConnection_.localDescription
              )
                return !1;
              for (
                var e = this.peerConnection_.localDescription.sdp, t = Qm(e), n = 0;
                n < t.media.length;
                n++
              )
                if (0 === t.media[n].mid && "video" === t.media[n].type) return !0;
              return !1;
            },
          },
          {
            key: "removeSender",
            value: function (e) {
              var t = null;
              "RTCPeerConnection" in window &&
                "getTransceivers" in window.RTCPeerConnection.prototype &&
                (t = this.peerConnection_.getTransceivers().find(function (t) {
                  return t.sender && t.sender.track === e.track;
                })),
                this.peerConnection_.removeTrack(e),
                t && hd(t.stop) && (this.log_.info("stop transceiver"), t.stop());
            },
          },
          {
            key: "removeTrack",
            value:
              ((u = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!this.peerConnection_ || !xf()) {
                              e.next = 13;
                              break;
                            }
                            if (
                              (this.log_.info(
                                "is removing ".concat(
                                  t.kind,
                                  " track from current published local stream"
                                )
                              ),
                              "video" !== t.kind || !this.isNeedToResetOfferOrder())
                            ) {
                              e.next = 8;
                              break;
                            }
                            return (
                              this.reset(),
                              this.initialize(),
                              (e.next = 7),
                              this.publish(this.localStream_)
                            );
                          case 7:
                            return e.abrupt("return");
                          case 8:
                            return (
                              (n = this.peerConnection_.getSenders().find(function (e) {
                                return e.track === t;
                              })) &&
                                (this.removeSender(n),
                                this.updateMediaSettings(this.localStream_.getMediaStream())),
                              (e.next = 12),
                              this.updateOffer(ed, t)
                            );
                          case 12:
                            sf(this.userId_, {
                              eventId: t.kind === Xu ? Eh : Ch,
                              eventDesc: "remove ".concat(
                                t.kind,
                                " track from current published stream"
                              ),
                              timestamp: ds(),
                              userId: this.userId_,
                              tinyId: this.tinyId_,
                            });
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e) {
                return u.apply(this, arguments);
              }),
          },
          {
            key: "isReplaceTrackAvailable",
            value: function () {
              return "RTCRtpSender" in window && "replaceTrack" in window.RTCRtpSender.prototype;
            },
          },
          {
            key: "replaceTrack",
            value:
              ((c = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n,
                    r = this;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this.isReplaceTrackAvailable() && xf()) {
                              e.next = 2;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message:
                                "replaceTrack is not supported in this browser, please use switchDevice or addTrack instead",
                            });
                          case 2:
                            if (this.peerConnection_) {
                              e.next = 4;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message:
                                "replaceTrack() is only valid after the LocalStream has been published",
                            });
                          case 4:
                            if (0 !== (n = this.peerConnection_.getSenders()).length) {
                              e.next = 7;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message:
                                "replaceTrack() is only valid after the LocalStream has been published",
                            });
                          case 7:
                            n.forEach(function (e) {
                              e.track &&
                                e.track.kind === t.kind &&
                                (r.log_.info(
                                  "is replacing ".concat(
                                    t.kind,
                                    " track to current published local stream"
                                  )
                                ),
                                e.replaceTrack(t));
                            }),
                              sf(this.userId_, {
                                eventId: t.kind === Xu ? jh : Vh,
                                eventDesc: "replace ".concat(
                                  t.kind,
                                  " track from current published stream"
                                ),
                                timestamp: ds(),
                                userId: this.userId_,
                                tinyId: this.tinyId_,
                              });
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e) {
                return c.apply(this, arguments);
              }),
          },
          {
            key: "setBandwidth",
            value:
              ((s = yt(
                regeneratorRuntime.mark(function e(t, n, r) {
                  var i, o;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this.isUplink_) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return", r);
                          case 2:
                            if (Af()) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              "video" === n
                                ? this.updateVideoBandwidthRestriction(r, t)
                                : this.updateAudioBandwidthRestriction(r, t)
                            );
                          case 4:
                            if (
                              !(i = this.peerConnection_.getSenders().find(function (e) {
                                return e.track && e.track.kind === n;
                              }))
                            ) {
                              e.next = 20;
                              break;
                            }
                            return (
                              ((o = i.getParameters()).encodings && 0 !== o.encodings.length) ||
                                (o.encodings = [{}]),
                              "unlimited" === t
                                ? delete o.encodings[0].maxBitrate
                                : (o.encodings[0].maxBitrate = 1e3 * t),
                              (e.prev = 9),
                              (e.next = 12),
                              i.setParameters(o)
                            );
                          case 12:
                            return (
                              this.log_.debug(n + " bandwidth was set to " + t + " kbps"),
                              e.abrupt("return", r)
                            );
                          case 16:
                            return (
                              (e.prev = 16),
                              (e.t0 = e.catch(9)),
                              this.log_.info(
                                "failed to set bandwidth by setting maxBitrate: " + e.t0
                              ),
                              e.abrupt(
                                "return",
                                "video" === n
                                  ? this.updateVideoBandwidthRestriction(r, t)
                                  : this.updateAudioBandwidthRestriction(r, t)
                              )
                            );
                          case 20:
                            return e.abrupt("return", r);
                          case 21:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[9, 16]]
                  );
                })
              )),
              function (e, t, n) {
                return s.apply(this, arguments);
              }),
          },
          {
            key: "updateVideoBandwidthRestriction",
            value: function (e, t) {
              var n = "AS";
              return (
                Ys && ((n = "TIAS"), (t *= 1e3)),
                (e =
                  -1 === e.indexOf("b=" + n + ":")
                    ? e.replace(
                        /m=video (.*)\r\nc=IN (.*)\r\n/,
                        "m=video $1\r\nc=IN $2\r\nb=" + n + ":" + t + "\r\n"
                      )
                    : e.replace(new RegExp("b=" + n + ":.*\r\n"), "b=" + n + ":" + t + "\r\n"))
              );
            },
          },
          {
            key: "updateAudioBandwidthRestriction",
            value: function (e, t) {
              var n = "AS";
              return (
                Ys && ((n = "TIAS"), (t *= 1e3)),
                (e = e.replace(
                  /m=audio (.*)\r\nc=IN (.*)\r\n/,
                  "m=audio $1\r\nc=IN $2\r\nb=" + n + ":" + t + "\r\n"
                ))
              );
            },
          },
          {
            key: "removeBandwidthRestriction",
            value: function (e) {
              return e.replace(/b=AS:.*\r\n/, "").replace(/b=TIAS:.*\r\n/, "");
            },
          },
          {
            key: "removeVideoOrientation",
            value: function (e) {
              return e.replace(/urn:3gpp:video-orientation/, "");
            },
          },
          {
            key: "exchangeSDP",
            value:
              ((a = yt(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), this.createOffer();
                          case 2:
                            return (
                              this.log_.info("createOffer success, sending offer to remote server"),
                              (e.next = 5),
                              this.doExchangeSDP()
                            );
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function () {
                return a.apply(this, arguments);
              }),
          },
          {
            key: "createOffer",
            value:
              ((o = yt(
                regeneratorRuntime.mark(function e() {
                  var t;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), this.peerConnection_.createOffer(Xm);
                          case 3:
                            return (
                              (t = e.sent),
                              (e.next = 6),
                              this.peerConnection_.setLocalDescription(t)
                            );
                          case 6:
                            ff({ eventType: Pu, kind: "offer" }), (e.next = 13);
                            break;
                          case 9:
                            throw (
                              ((e.prev = 9),
                              (e.t0 = e.catch(0)),
                              mf({ eventType: Pu, kind: "offer", error: e.t0 }),
                              e.t0)
                            );
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[0, 9]]
                  );
                })
              )),
              function () {
                return o.apply(this, arguments);
              }),
          },
          {
            key: "doExchangeSDP",
            value: function () {
              var e = this;
              return new Promise(function (t, n) {
                e.publishTimeout_ = setTimeout(function () {
                  e.signalChannel_.off(th.PUBLISH_RESULT, r),
                    e.signalChannel_.off(th.ON_PUBLISH_RESPONSE, r);
                  var t = new Rh({ code: Th.UNKNOWN, message: "publish timeout" });
                  n(t);
                }, 1e4);
                var r = (function () {
                    var r = yt(
                      regeneratorRuntime.mark(function r(i) {
                        return regeneratorRuntime.wrap(
                          function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  return (
                                    (r.prev = 0),
                                    e.clearPublishTimeout(),
                                    (r.next = 4),
                                    e.acceptAnswer(i.data.content)
                                  );
                                case 4:
                                  t(), (r.next = 10);
                                  break;
                                case 7:
                                  (r.prev = 7), (r.t0 = r.catch(0)), n(r.t0);
                                case 10:
                                case "end":
                                  return r.stop();
                              }
                          },
                          r,
                          null,
                          [[0, 7]]
                        );
                      })
                    );
                    return function (e) {
                      return r.apply(this, arguments);
                    };
                  })(),
                  i = {
                    type: e.peerConnection_.localDescription.type,
                    sdp: e.removeVideoOrientation(e.peerConnection_.localDescription.sdp),
                  };
                e.signalChannel_.once(th.PUBLISH_RESULT, r),
                  e.signalChannel_.once(th.ON_PUBLISH_RESPONSE, r),
                  e.log_.debug("sending sdp offer: " + i.sdp),
                  e.signalChannel_.send(dh, i, 0);
              });
            },
          },
          {
            key: "setSDPDirection",
            value: function (e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "all",
                r = Qm(e);
              return (
                r.media.forEach(function (e) {
                  ("all" !== n && e.type !== n) || (e.direction = t);
                }),
                qm(r)
              );
            },
          },
          {
            key: "updateOffer",
            value:
              ((i = yt(
                regeneratorRuntime.mark(function e(t, n) {
                  var r, i;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), this.peerConnection_.createOffer(Xm);
                          case 3:
                            return (
                              (r = e.sent),
                              Ys && (r.sdp = this.setSDPDirection(r.sdp, "sendrecv")),
                              (e.next = 7),
                              this.peerConnection_.setLocalDescription(r)
                            );
                          case 7:
                            return (
                              (i = {
                                action: t,
                                trackId: n.id,
                                kind: n.kind,
                                type: "offer",
                                sdp: this.peerConnection_.localDescription.sdp,
                              }),
                              this.log_.info(
                                "createOffer success, sending updated offer to remote server"
                              ),
                              this.log_.debug("updatedOffer: " + i.sdp),
                              (e.next = 12),
                              this.doUpdateOffer(i)
                            );
                          case 12:
                            ff({ eventType: Pu, kind: "offer" }), (e.next = 20);
                            break;
                          case 15:
                            throw (
                              ((e.prev = 15),
                              (e.t0 = e.catch(0)),
                              this.log_.error(e.t0),
                              mf({ eventType: Pu, kind: "offer", error: e.t0 }),
                              e.t0)
                            );
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[0, 15]]
                  );
                })
              )),
              function (e, t) {
                return i.apply(this, arguments);
              }),
          },
          {
            key: "doUpdateOffer",
            value: function (e) {
              var t = this;
              return new Promise(function (n, r) {
                t.signalChannel_.send(nh, e, 0);
                var i = setTimeout(function () {
                    t.signalChannel_.off(th.UPDATE_OFFER_RESULT, o),
                      r(new Rh({ code: Th.UNKNOWN, message: "update offer timeout observed" }));
                  }, 1e4),
                  o = (function () {
                    var e = yt(
                      regeneratorRuntime.mark(function e(o) {
                        return regeneratorRuntime.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    clearTimeout(i),
                                    (e.next = 4),
                                    t.acceptAnswer(o.data.content)
                                  );
                                case 4:
                                  n(), (e.next = 10);
                                  break;
                                case 7:
                                  (e.prev = 7), (e.t0 = e.catch(0)), r(e.t0);
                                case 10:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 7]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })();
                t.signalChannel_.once(th.UPDATE_OFFER_RESULT, o);
              });
            },
          },
          {
            key: "acceptAnswer",
            value:
              ((r = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r, i, o;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (77393 !== t.result) {
                              e.next = 3;
                              break;
                            }
                            throw (
                              (this.log_.error("your device does not support H.264 encoding."),
                              new Rh({
                                code: Th.NOT_SUPPORTED_H264,
                                message: "your device does not support H.264 encoding.",
                              }))
                            );
                          case 3:
                            return (
                              (n = this.localStream_.getVideoBitrate()),
                              (r = this.localStream_.getAudioBitrate()),
                              (i = this.removeVideoOrientation(t.sdp)),
                              (e.prev = 6),
                              (e.next = 9),
                              this.setBandwidth(n, "video", i)
                            );
                          case 9:
                            return (i = e.sent), (e.next = 12), this.setBandwidth(r, "audio", i);
                          case 12:
                            return (
                              (i = e.sent),
                              (o = { type: t.type, sdp: i }),
                              (e.next = 16),
                              this.peerConnection_.setRemoteDescription(o)
                            );
                          case 16:
                            this.log_.debug("accepted answer: " + i),
                              ff({ eventType: Au, kind: "answer" }),
                              (e.next = 25);
                            break;
                          case 20:
                            throw (
                              ((e.prev = 20),
                              (e.t0 = e.catch(6)),
                              mf({ eventType: Au, kind: "answer", error: e.t0 }),
                              this.log_.error("failed to accept remote answer " + e.t0),
                              e.t0)
                            );
                          case 25:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[6, 20]]
                  );
                })
              )),
              function (e) {
                return r.apply(this, arguments);
              }),
          },
          {
            key: "sendMutedFlag",
            value: function (e) {
              var t = { srctinyid: 0, userid: this.userId_, flag: e };
              this.log_.info("send muted flag: ".concat(e)), this.signalChannel_.send(sh, t);
            },
          },
          {
            key: "getIsReconnecting",
            value: function () {
              return this.isReconnecting_;
            },
          },
          {
            key: "reconnect",
            value:
              ((n = yt(
                regeneratorRuntime.mark(function e() {
                  var t,
                    n,
                    r = this;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (-1 === this.reconnectionTimer_) {
                              e.next = 3;
                              break;
                            }
                            return (
                              this.log_.warn(
                                "reconnect() uplink is reconnecting, ignore current reconnection"
                              ),
                              e.abrupt("return")
                            );
                          case 3:
                            if (!(this.reconnectionCount_ >= 30)) {
                              e.next = 12;
                              break;
                            }
                            return (
                              this.log_.warn(
                                "SDK has tried reconnect uplink for ".concat(
                                  30,
                                  " times, but all failed, please check your network"
                                )
                              ),
                              this.stopReconnection(),
                              (t = new Rh({
                                code: Th.UPLINK_RECONNECTION_FAILED,
                                message:
                                  "uplink reconnect failed, please check your network and publish again",
                              })),
                              mf({ eventType: Cu, error: t }),
                              this.addEventInternal(tf, "uplink-connection reconnect fail"),
                              this.emitConnectionStateChangedEvent(pu),
                              this.emitter_.emit(Gf, t),
                              e.abrupt("return")
                            );
                          case 12:
                            if (this.signalChannel_.getCurrentState() === Yp) {
                              e.next = 16;
                              break;
                            }
                            return (
                              this.log_.warn(
                                "reconnect() signal channel is not connected, suspend reconnection until signal is connected"
                              ),
                              this.signalChannel_.once(Qp, this.reconnect, this),
                              e.abrupt("return")
                            );
                          case 16:
                            this.reconnectionCount_++;
                            try {
                              this.log_.warn(
                                "reconnect() try to reconnect uplink ["
                                  .concat(this.reconnectionCount_, "/")
                                  .concat(30, "]")
                              ),
                                (n = ld(this.reconnectionCount_)),
                                (this.reconnectionTimer_ = setTimeout(function () {
                                  r.log_.warn(
                                    "reconnect() uplink reconnect timeout(".concat(
                                      n / 1e3,
                                      "s), try again"
                                    )
                                  ),
                                    r.signalChannel_.off(
                                      th.UNPUBLISH_RESULT,
                                      r.onUnpublishResult,
                                      r
                                    ),
                                    r.clearReconnectionTimer(),
                                    r.reconnect();
                                }, n)),
                                this.signalChannel_.send(lh),
                                this.signalChannel_.once(
                                  th.UNPUBLISH_RESULT,
                                  this.onUnpublishResult,
                                  this
                                );
                            } catch (t) {}
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function () {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "onUnpublishResult",
            value:
              ((t = yt(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              this.reset(),
                              this.initialize(),
                              (e.next = 5),
                              this.publish(this.localStream_)
                            );
                          case 5:
                            e.next = 9;
                            break;
                          case 7:
                            (e.prev = 7), (e.t0 = e.catch(0));
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[0, 7]]
                  );
                })
              )),
              function () {
                return t.apply(this, arguments);
              }),
          },
          {
            key: "clearPublishTimeout",
            value: function () {
              -1 !== this.publishTimeout_ &&
                (clearTimeout(this.publishTimeout_), (this.publishTimeout_ = -1));
            },
          },
          {
            key: "clearReconnectionTimer",
            value: function () {
              -1 !== this.reconnectionTimer_ &&
                (clearTimeout(this.reconnectionTimer_), (this.reconnectionTimer_ = -1));
            },
          },
          {
            key: "stopReconnection",
            value: function () {
              this.log_.info("stop uplink reconnection"),
                (this.isReconnecting_ = !1),
                (this.reconnectionCount_ = 0),
                this.clearReconnectionTimer(),
                this.signalChannel_.off(Qp, this.reconnect, this);
            },
          },
          {
            key: "handleError",
            value: function (e) {
              e.getCode() === Th.ICE_TRANSPORT_ERROR &&
                (this.isFirstConnection_ &&
                  ((this.isFirstConnection_ = !1), mf({ eventType: Iu, error: e })),
                this.isReconnecting_ ||
                  ((this.isReconnecting_ = !0),
                  this.emitConnectionStateChangedEvent(fu),
                  this.reconnect(),
                  this.addEventInternal(Zh, "uplink-connection is reconnecting")));
            },
          },
          {
            key: "handleConnectionStateChange",
            value: function (e) {
              e.state === mu &&
                (this.isFirstConnection_ &&
                  ((this.isFirstConnection_ = !1),
                  ff({ eventType: Iu }),
                  this.addEventInternal(qh, "uplink-connection is connected")),
                this.isReconnecting_ &&
                  (ff({ eventType: Cu }),
                  this.log_.warn("reconnect() uplink reconnect successfully"),
                  this.addEventInternal(ef, "uplink-connection reconnect success"),
                  this.stopReconnection()));
            },
          },
        ]),
        h
      );
    })(Dm),
    Ym = (function (e) {
      It(o, e);
      var t,
        n,
        r,
        i = Ot(o);
      function o(e) {
        var t;
        return (
          St(this, o),
          ((t = i.call(this, e)).remoteStreams_ = new Map()),
          (t.autoSubscribe = e.autoSubscribe),
          (t.trackState_ = {
            audio: e.trackState.audio,
            video: e.trackState.video,
            auxiliary: e.trackState.auxiliary,
          }),
          (t.ssrc_ = { audio: 0, video: 0, auxiliary: 0 }),
          (t.subscribeState_ = {
            audio: e.autoSubscribe,
            video: e.autoSubscribe,
            auxiliary: e.autoSubscribe,
          }),
          (t.pendingSubscription_ = []),
          (t.pendingStreams_ = []),
          (t.subscriptionTimeout_ = -1),
          (t.subscriptionRetryCount_ = 0),
          (t.isSubscriptionPending_ = !1),
          (t.sentSubscriptionAfterConnected_ = !1),
          (t.isSDPExchanging_ = !1),
          (t.exchangeSDPResolve_ = null),
          (t.exchangeSDPReject_ = null),
          (t.isReconnecting_ = !1),
          (t.reconnectionCount_ = 0),
          (t.reconnectionTimer_ = -1),
          (t.isFirstConnection_ = !0),
          t.installEvents(),
          t
        );
      }
      return (
        kt(o, [
          {
            key: "initialize",
            value: function () {
              Nt(Ct(o.prototype), "initialize", this).call(this),
                (this.peerConnection_.ontrack = this.onTrack.bind(this));
            },
          },
          {
            key: "close",
            value: function () {
              var e = this;
              Nt(Ct(o.prototype), "close", this).call(this),
                this.emitConnectionStateChangedEvent(pu),
                -1 !== this.subscriptionTimeout_ &&
                  (clearTimeout(this.subscriptionTimeout_), (this.subscriptionTimeout_ = -1)),
                this.remoteStreams_.forEach(function (t) {
                  var n = t;
                  n.setConnection(null),
                    n.getIsStreamAddedEventEmitted() && e.emitter_.emit(Ff, { stream: n });
                }),
                this.remoteStreams_.clear(),
                this.uninstallEvents();
            },
          },
          {
            key: "installEvents",
            value: function () {
              var e = this;
              Tm.on(wm, this.onRemoteStreamUpdate, this),
                this.signalChannel_.on(th.SUBSCRIBE_RESULT, this.onSubscribeResult, this),
                this.signalChannel_.on(
                  th.SUBSCRIBE_CHANGE_RESULT,
                  this.onSubscribeChangeResult,
                  this
                ),
                this.signalChannel_.on(th.UNSUBSCRIBE_RESULT, this.onUnsubscribeResult, this),
                this.emitter_.on(Gf, function (t) {
                  if (
                    t.getCode() === Th.ICE_TRANSPORT_ERROR &&
                    (e.isFirstConnection_ &&
                      ((e.isFirstConnection_ = !1), mf({ eventType: Eu, error: t })),
                    !e.isReconnecting_)
                  ) {
                    e.isReconnecting_ = !0;
                    var n = e.client_.getSubscriptionManager();
                    if (n) {
                      var r,
                        i = jt(e.remoteStreams_.values());
                      try {
                        for (i.s(); !(r = i.n()).done; ) {
                          var o = r.value,
                            a = o.getType();
                          (("main" === a && (e.trackState_.audio || e.trackState_.video)) ||
                            ("auxiliary" === a && e.trackState_.auxiliary)) &&
                            n.setAutoRecoveryFlag(e.userId_, o.getType());
                        }
                      } catch (s) {
                        i.e(s);
                      } finally {
                        i.f();
                      }
                    }
                    e.emitConnectionStateChangedEvent(fu),
                      e.reconnect(),
                      e.addEventInternal(nf, "downlink-connection is reconnecting");
                  }
                }),
                this.emitter_.on(Hf, function (t) {
                  t.state === mu &&
                    (e.isFirstConnection_ &&
                      ((e.isFirstConnection_ = !1),
                      ff({ eventType: Eu }),
                      e.addEventInternal(Kh, "downlink-connection is connected")),
                    e.isReconnecting_ &&
                      (ff({ eventType: xu }),
                      e.log_.warn("reconnect() downlink reconnect successfully"),
                      e.addEventInternal(rf, "downlink-connection reconnect success"),
                      e.stopReconnection()));
                });
            },
          },
          {
            key: "uninstallEvents",
            value: function () {
              Tm.removeListener(wm, this.onRemoteStreamUpdate, this),
                this.signalChannel_.removeListener(
                  th.SUBSCRIBE_CHANGE_RESULT,
                  this.onSubscribeChangeResult,
                  this
                ),
                this.signalChannel_.removeListener(
                  th.UNSUBSCRIBE_RESULT,
                  this.onUnsubscribeResult,
                  this
                ),
                this.signalChannel_.removeListener(
                  th.SUBSCRIBE_RESULT,
                  this.onSubscribeResult,
                  this
                );
            },
          },
          {
            key: "onRemoteStreamUpdate",
            value: function (e) {
              if (this.hitTest(e.tinyId)) {
                this.updateTrackState(e.action, e.kind);
                var t = e.kind === Yu ? du : uu,
                  n = this.remoteStreams_.get(t);
                if (!n) return;
                e.action === Zu
                  ? this.handleRemoteAddTrack(e.kind, n)
                  : this.handleRemoteRemoveTrack(e.kind, n);
              }
            },
          },
          {
            key: "handleRemoteAddTrack",
            value: function (e, t) {
              this.log_.info("remote add ".concat(e, " track")),
                "audio" === e
                  ? t.updateAudioPlayingState(this.subscribeState_.audio)
                  : t.updateVideoPlayingState(
                      e === Yu ? this.subscribeState_.auxiliary : this.subscribeState_.video
                    ),
                t.getIsStreamAddedEventEmitted()
                  ? this.emitter_.emit(Bf, { stream: t })
                  : (this.emitter_.emit(jf, { stream: t }),
                    this.currentState_ === mu &&
                      t.emitConnectionStateChanged({ prevState: pu, state: mu }));
            },
          },
          {
            key: "handleRemoteRemoveTrack",
            value: function (e, t) {
              t.getIsStreamAddedEventEmitted() &&
                (this.log_.info("remote remove ".concat(e, " track")),
                (e !== Yu && (this.trackState_.audio || this.trackState_.video)) ||
                t.isInSubscriptionCycle()
                  ? ("audio" === e ? t.updateAudioPlayingState(!1) : t.updateVideoPlayingState(!1),
                    this.emitter_.emit(Bf, { stream: t }))
                  : (this.log_.info("remote stream ".concat(t.getType(), " removed")),
                    this.currentState_ === mu &&
                      t.emitConnectionStateChanged({ prevState: mu, state: pu }),
                    this.emitter_.emit(Ff, { stream: t })));
            },
          },
          {
            key: "updateTrackState",
            value: function (e, t) {
              var n = e === Zu;
              switch (t) {
                case Xu:
                  this.trackState_.audio = n;
                  break;
                case $u:
                  this.trackState_.video = n;
                  break;
                case Yu:
                  this.trackState_.auxiliary = n;
              }
              this.log_.info("trackState updated: ".concat(JSON.stringify(this.trackState_)));
            },
          },
          {
            key: "onTrack",
            value: function (e) {
              var t = e.streams[0],
                n = e.track;
              if (
                (this.log_.info(
                  "ontrack() kind: "
                    .concat(n.kind, " id: ")
                    .concat(n.id, " streamId: ")
                    .concat(t.id)
                ),
                "unified-plan" === this.sdpSemantics_)
              ) {
                var r = (function (e) {
                  var t = Jm.parse(e),
                    n = { audio: [], video: [] };
                  return (
                    t.media.forEach(function (e) {
                      if (e.ssrcs) {
                        var t = (e.ssrcs[0].id >> 16) & 255;
                        if ("audio" === e.type) n.audio.push(uu);
                        else if ("video" == e.type) {
                          var r = t === lu ? uu : du;
                          n.video.push(r);
                        }
                      }
                    }),
                    n
                  );
                })(this.peerConnection_.remoteDescription.sdp);
                if ("audio" === n.kind) {
                  if (0 === r.audio.length || t.id !== uu)
                    return void this.log_.debug("skip this invalid audio track");
                } else if (-1 === r.video.indexOf(t.id))
                  return void this.log_.debug(
                    "skip this invalid video track: ".concat(n.id, "  msid: ").concat(t.id)
                  );
              }
              hf({ eventType: "ontrack", kind: n.kind });
              var i = !1,
                o = this.remoteStreams_.get(t.id),
                a = t.id === uu ? "main" : "auxiliary";
              fd(o) &&
                ((o = new Nm({
                  type: a,
                  userId: this.userId_,
                  client: this.client_,
                })).setConnection(this),
                this.remoteStreams_.set(t.id, o),
                (i = !0)),
                o.setMediaStream(t),
                "audio" === n.kind
                  ? o.updateAudioPlayingState(this.subscribeState_.audio)
                  : "main" === a
                  ? o.updateVideoPlayingState(this.subscribeState_.video)
                  : o.updateVideoPlayingState(this.subscribeState_.auxiliary),
                ("auxiliary" !== a || this.trackState_.auxiliary) &&
                  ("main" !== a || this.trackState_.audio || this.trackState_.video) &&
                  (i
                    ? this.emitter_.emit(jf, { stream: o })
                    : this.emitter_.emit(Bf, { stream: o }));
            },
          },
          {
            key: "addRRTRLine",
            value: function (e) {
              var t = e.split("\r\n"),
                n = new Map();
              t.forEach(function (e, r) {
                /^a=rtcp-fb:/.test(e) &&
                  t[r + 1] &&
                  !/^a=rtcp-fb:/.test(t[r + 1]) &&
                  n.set(r + 1, e.match(/^a=rtcp-fb:\d+/)[0] + " rrtr");
              });
              for (var r = Lt(n), i = 0; i < r.length; i++) {
                var o = Mt(r[i], 2),
                  a = o[0],
                  s = o[1];
                t.splice(a + i, 0, s);
              }
              return t.join("\r\n");
            },
          },
          {
            key: "addSPSDescription",
            value: function (e) {
              var t = Qm(e);
              return (
                t.media.forEach(function (e) {
                  "video" === e.type &&
                    e.fmtp.forEach(function (e) {
                      e.config += ";sps-pps-idr-in-keyframe=1";
                    });
                }),
                qm(t)
              );
            },
          },
          {
            key: "removeSDESDescription",
            value: function (e) {
              var t = [
                  "urn:ietf:params:rtp-hdrext:sdes:mid",
                  "urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id",
                  "urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id",
                ],
                n = Qm(e);
              return (
                n.media.forEach(function (e) {
                  e.ext = e.ext.filter(function (e) {
                    return !t.includes(e.uri);
                  });
                }),
                qm(n)
              );
            },
          },
          {
            key: "subscribe",
            value:
              ((r = yt(
                regeneratorRuntime.mark(function e(t, n) {
                  var r, i;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ("main" !== (r = t.getType()) ||
                                fd(n.audio) ||
                                fd(n.video) ||
                                n.audio !== this.subscribeState_.audio ||
                                n.video !== this.subscribeState_.video) &&
                              ("auxiliary" !== r ||
                                fd(n.video) ||
                                this.subscribeState_.auxiliary !== n.video)
                            ) {
                              e.next = 4;
                              break;
                            }
                            return (
                              this.emitter_.emit(zf, { stream: t, result: !0 }),
                              e.abrupt("return", t)
                            );
                          case 4:
                            if (
                              ("main" === r
                                ? (fd(n.audio) || (this.subscribeState_.audio = n.audio),
                                  fd(n.video) || (this.subscribeState_.video = n.video),
                                  this.addEventInternal(
                                    this.subscribeState_.audio ? Oh : Mh,
                                    this.subscribeState_.audio
                                      ? "subscribe audio"
                                      : "unsubscribe audio"
                                  ),
                                  this.addEventInternal(
                                    this.subscribeState_.video ? Oh : Mh,
                                    this.subscribeState_.video
                                      ? "subscribe video"
                                      : "unsubscribe video"
                                  ))
                                : fd(n.video) || (this.subscribeState_.auxiliary = n.video),
                              this.log_.info(
                                "subscribe "
                                  .concat(r, " stream with options ")
                                  .concat(JSON.stringify(n), " current state: ")
                                  .concat(JSON.stringify(this.subscribeState_))
                              ),
                              !this.peerConnection_ && !this.isSDPExchanging_)
                            ) {
                              e.next = 14;
                              break;
                            }
                            return (
                              (i = zu),
                              this.isMainStreamSubscribed || this.isAuxStreamSubscribed || (i = Bu),
                              (e.next = 11),
                              this.sendSubscription(t, i)
                            );
                          case 11:
                            "main" === r
                              ? (t.updateAudioPlayingState(this.subscribeState_.audio),
                                t.updateVideoPlayingState(this.subscribeState_.video))
                              : t.updateVideoPlayingState(this.subscribeState_.auxiliary),
                              (e.next = 17);
                            break;
                          case 14:
                            return this.initialize(), (e.next = 17), this.exchangeSDP();
                          case 17:
                            return (
                              this.emitter_.emit(zf, { stream: t, result: !0 }),
                              e.abrupt("return", t)
                            );
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e, t) {
                return r.apply(this, arguments);
              }),
          },
          {
            key: "unsubscribe",
            value:
              ((n = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r, i;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("main" !== (n = t.getType())) {
                              e.next = 9;
                              break;
                            }
                            if (this.isMainStreamSubscribed) {
                              e.next = 5;
                              break;
                            }
                            return (
                              this.log_.info("main stream already unsubscribed"),
                              e.abrupt("return", t)
                            );
                          case 5:
                            (this.subscribeState_.audio = !1),
                              (this.subscribeState_.video = !1),
                              (e.next = 13);
                            break;
                          case 9:
                            if (this.isAuxStreamSubscribed) {
                              e.next = 12;
                              break;
                            }
                            return (
                              this.log_.info("auxiliary stream already unsubscribed"),
                              e.abrupt("return", t)
                            );
                          case 12:
                            this.subscribeState_.auxiliary = !1;
                          case 13:
                            return (
                              (r = Bu),
                              (("main" === n && this.isAuxStreamSubscribed) ||
                                ("auxiliary" === n && this.isMainStreamSubscribed)) &&
                                (r = zu),
                              this.log_.info(
                                "unsubscribe "
                                  .concat(n, " stream with ")
                                  .concat(JSON.stringify(this.subscribeState_))
                              ),
                              (e.next = 18),
                              this.sendSubscription(t, r)
                            );
                          case 18:
                            return (
                              t.updateVideoPlayingState(!1),
                              t.updateAudioPlayingState(!1),
                              r === Bu &&
                                ((i = t.getMediaStream()) &&
                                  i.getTracks().forEach(function (e) {
                                    return i.removeTrack(e);
                                  }),
                                this.closePeerConnection()),
                              this.addEventInternal(Mh, "unsubscribe audio"),
                              this.addEventInternal(Nh, "unsubscribe video"),
                              e.abrupt("return", t)
                            );
                          case 24:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e) {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "sendSubscription",
            value: function (e, t) {
              var n = this;
              return new Promise(function (r, i) {
                var o = {
                  srctinyid: n.tinyId_,
                  userid: n.userId_,
                  audio: n.subscribeState_.audio,
                  bigVideo: n.subscribeState_.video,
                  auxVideo: n.subscribeState_.auxiliary,
                };
                n.pendingSubscription_.length > 0
                  ? n.log_.debug("queue the subscription for later handling")
                  : n.doSendSubscription(o, e, t),
                  n.pendingSubscription_.push({
                    stream: e,
                    type: t,
                    data: o,
                    callback: function (e) {
                      var o = e.code,
                        a = e.message;
                      if (0 === o) r();
                      else {
                        var s = "".concat(t, " failed");
                        a && (s = "".concat(s, ": ").concat(a));
                        var c = new Rh({ code: o, message: s });
                        n.log_.error(c), i(c);
                      }
                    },
                  }),
                  e.setInSubscriptionCycle(!0);
              });
            },
          },
          {
            key: "doSendSubscription",
            value: function (e, t, n) {
              var r = this;
              if (
                !this.peerConnection_ ||
                ("connected" !== this.peerConnection_.connectionState &&
                  "completed" !== this.peerConnection_.connectionState)
              )
                return (
                  this.log_.debug(
                    "try to send subscription [".concat(n, "] when peeConnection connected")
                  ),
                  void (this.sentSubscriptionAfterConnected_ = !1)
                );
              t && this.pendingStreams_.push(t),
                this.log_.debug(
                  "doSendSubscription() send SUBSCRIBE command with data: ".concat(
                    JSON.stringify(e)
                  )
                ),
                n === zu
                  ? this.signalChannel_.send(fh, e)
                  : n === Bu && this.signalChannel_.send(hh, e),
                (this.isSubscriptionPending_ = !0),
                (this.subscriptionTimeout_ = setTimeout(function () {
                  if (r.isSubscriptionPending_)
                    if (
                      (r.log_.debug("subscription timeout"),
                      (r.subscriptionRetryCount_ += 1),
                      r.subscriptionRetryCount_ <= 3)
                    ) {
                      r.log_.debug("resend subscription");
                      var e = r.pendingSubscription_[0].data;
                      r.doSendSubscription(e, t, n);
                    } else
                      r.log_.error("remote server not response to subscription"),
                        r.pendingSubscription_.shift(),
                        r.pendingStreams_.shift(),
                        (r.isSubscriptionPending_ = !1),
                        (r.subscriptionRetryCount_ = 0),
                        r.emitter_.emit(
                          Gf,
                          new Rh({
                            code: Th.SUBSCRIPTION_TIMEOUT,
                            message: "remote server not response to subscription",
                          })
                        );
                }, 5e3));
            },
          },
          {
            key: "onSubscribeChangeResult",
            value: function (e) {
              var t = e.data.content,
                n = t.srctinyid;
              if (this.hitTest(n)) {
                var r = this.pendingSubscription_[0];
                r && r.type === zu && r.callback({ code: t.errCode, message: t.errMsg }),
                  this.sendNextSubscription();
              }
            },
          },
          {
            key: "onUnsubscribeResult",
            value: function (e) {
              var t = e.data.content,
                n = t.srctinyid;
              if (this.hitTest(n)) {
                var r = this.pendingSubscription_[0];
                r && r.type === Bu && r.callback({ code: t.errCode, message: t.errMsg }),
                  this.sendNextSubscription();
              }
            },
          },
          {
            key: "exchangeSDP",
            value: function () {
              var e = this;
              return new Promise(
                (function () {
                  var t = yt(
                    regeneratorRuntime.mark(function t(n, r) {
                      var i, o, a;
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  "RTCPeerConnection" in window &&
                                    "addTransceiver" in window.RTCPeerConnection.prototype &&
                                    "unified-plan" === e.sdpSemantics_ &&
                                    (e.peerConnection_.addTransceiver("audio", {
                                      direction: "recvonly",
                                    }),
                                    e.peerConnection_.addTransceiver("video", {
                                      direction: "recvonly",
                                    }),
                                    e.peerConnection_.addTransceiver("video", {
                                      direction: "recvonly",
                                    })),
                                  (e.isSDPExchanging_ = !0),
                                  (t.next = 5),
                                  e.peerConnection_.createOffer({
                                    offerToReceiveAudio: !0,
                                    offerToReceiveVideo: !0,
                                    voiceActivityDetection: !1,
                                  })
                                );
                              case 5:
                                return (
                                  ((i = t.sent).sdp = e.addRRTRLine(i.sdp)),
                                  (i.sdp = e.addSPSDescription(i.sdp)),
                                  (i.sdp = Km(i.sdp)),
                                  "unified-plan" === e.sdpSemantics_ &&
                                    (i.sdp = e.removeSDESDescription(i.sdp)),
                                  (t.next = 12),
                                  e.peerConnection_.setLocalDescription(i)
                                );
                              case 12:
                                e.log_.info("createOffer success, sending offer to remote server"),
                                  (o = e.peerConnection_.localDescription),
                                  (a = {
                                    type: o.type,
                                    sdp: o.sdp,
                                    userid: e.userId_,
                                    srctinyid: e.tinyId_,
                                    audio: e.subscribeState_.audio,
                                    bigVideo: e.subscribeState_.video,
                                    auxVideo: e.subscribeState_.auxiliary,
                                  }),
                                  (e.exchangeSDPResolve_ = n),
                                  (e.exchangeSDPReject_ = r),
                                  e.signalChannel_.send(ph, a),
                                  (t.next = 24);
                                break;
                              case 20:
                                (t.prev = 20),
                                  (t.t0 = t.catch(0)),
                                  (e.isSDPExchanging_ = !1),
                                  r(t.t0);
                              case 24:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 20]]
                      );
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })()
              );
            },
          },
          {
            key: "onSubscribeResult",
            value:
              ((t = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r, i, o, a, s, c;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!t.data.content || 77392 !== t.data.content.errCode) {
                              e.next = 3;
                              break;
                            }
                            throw (
                              (this.log_.error("your device does not support H.264 decoding."),
                              new Rh({
                                code: Th.NOT_SUPPORTED_H264,
                                message: "your device does not support H.264 decoding.",
                              }))
                            );
                          case 3:
                            if (
                              ((n = t.data.content),
                              (r = n.srctinyid),
                              (i = n.type),
                              (o = n.sdp),
                              (a = n.errCode),
                              (s = n.errMsg),
                              !this.hitTest(r))
                            ) {
                              e.next = 23;
                              break;
                            }
                            if (
                              ((e.prev = 5), this.log_.debug("accept remote answer: " + o), 0 !== a)
                            ) {
                              e.next = 13;
                              break;
                            }
                            return (
                              (e.next = 10),
                              this.peerConnection_.setRemoteDescription({ type: i, sdp: o })
                            );
                          case 10:
                            this.exchangeSDPResolve_ &&
                              (this.updateSSRC(o), this.exchangeSDPResolve_()),
                              (e.next = 14);
                            break;
                          case 13:
                            this.exchangeSDPReject_ &&
                              ((c = "exchange sdp failed"),
                              s && (c += " ".concat(s)),
                              this.exchangeSDPReject_(new Rh({ code: a, message: c })));
                          case 14:
                            e.next = 20;
                            break;
                          case 16:
                            (e.prev = 16),
                              (e.t0 = e.catch(5)),
                              this.log_.error("exchange sdp failed: " + e.t0),
                              this.exchangeSDPReject_ && this.exchangeSDPReject_(e.t0);
                          case 20:
                            (this.exchangeSDPResolve_ = null),
                              (this.exchangeSDPReject_ = null),
                              (this.isSDPExchanging_ = !1);
                          case 23:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[5, 16]]
                  );
                })
              )),
              function (e) {
                return t.apply(this, arguments);
              }),
          },
          {
            key: "updateSSRC",
            value: function (e) {
              var t = this;
              try {
                Qm(e).media.forEach(function (e) {
                  if ("audio" === e.type) {
                    var n = e.ssrcs.find(function (e) {
                      return e.value.includes(uu);
                    });
                    n && (t.ssrc_.audio = n.id);
                  } else {
                    var r = e.ssrcs.find(function (e) {
                        return e.value.includes(uu);
                      }),
                      i = e.ssrcs.find(function (e) {
                        return e.value.includes(du);
                      });
                    r && (t.ssrc_.video = r.id), i && (t.ssrc_.auxiliary = i.id);
                  }
                });
              } catch (Av) {}
            },
          },
          {
            key: "sendNextSubscription",
            value: function () {
              void 0 !== this.pendingSubscription_.shift() &&
                ((this.subscriptionRetryCount_ = 0),
                (this.isSubscriptionPending_ = !1),
                -1 !== this.subscriptionTimeout_ &&
                  (clearTimeout(this.subscriptionTimeout_), (this.subscriptionTimeout_ = -1)));
              var e = this.pendingStreams_.shift();
              if (
                (e &&
                  (this.log_.debug("mark ".concat(e.getType(), " stream exit subscription cycle")),
                  e.setInSubscriptionCycle(!1)),
                this.pendingSubscription_.length > 0)
              ) {
                var t = this.pendingSubscription_[0];
                this.log_.info("schedule a pending subscription"),
                  this.doSendSubscription(t.data, t.stream, t.type);
              }
            },
          },
          {
            key: "setRemoteStream",
            value: function (e, t) {
              this.remoteStreams_.set(e, t);
            },
          },
          {
            key: "getSubscribeState",
            value: function () {
              return this.subscribeState_;
            },
          },
          {
            key: "getTrackState",
            value: function () {
              return this.trackState_;
            },
          },
          {
            key: "getSSRC",
            value: function () {
              return this.ssrc_;
            },
          },
          {
            key: "getMainStream",
            value: function () {
              return this.remoteStreams_.get(uu);
            },
          },
          {
            key: "getAuxStream",
            value: function () {
              return this.remoteStreams_.get(du);
            },
          },
          {
            key: "getMainStreamVideoTrackId",
            value: function () {
              var e = this.getMainStream();
              if (e) {
                var t = e.getVideoTrack();
                if (t) return t.id;
              }
              return "";
            },
          },
          {
            key: "getAuxStreamVideoTrackId",
            value: function () {
              var e = this.getAuxStream();
              if (e) {
                var t = e.getVideoTrack();
                if (t) return t.id;
              }
              return "";
            },
          },
          {
            key: "reconnect",
            value: function () {
              var e = this;
              if (-1 === this.reconnectionTimer_) {
                if (this.reconnectionCount_ >= 30) {
                  this.log_.warn(
                    "SDK has tried reconnect downlink ["
                      .concat(this.userId_, "] for ")
                      .concat(30, " times, but all failed, please check your network")
                  ),
                    this.stopReconnection();
                  var t = new Rh({
                    code: Th.DOWNLINK_RECONNECTION_FAILED,
                    message:
                      "downlink reconnect failed, please check your network and re-join room",
                  });
                  return (
                    mf({ eventType: xu, error: t }),
                    this.addEventInternal(of, "downlink-connection reconnect fail"),
                    this.emitConnectionStateChangedEvent(pu),
                    void this.emitter_.emit(Gf, t)
                  );
                }
                if (this.signalChannel_.getCurrentState() !== Yp)
                  return (
                    this.log_.warn(
                      "reconnect() signal channel is not connected, suspend reconnection until signal is connected"
                    ),
                    void this.signalChannel_.once(Qp, this.reconnect, this)
                  );
                this.reconnectionCount_++,
                  this.log_.warn(
                    "reconnect() try to reconnect downlink ["
                      .concat(this.reconnectionCount_, "/")
                      .concat(30, "]")
                  );
                var n = ld(this.reconnectionCount_);
                (this.reconnectionTimer_ = setTimeout(function () {
                  e.log_.warn(
                    "reconnect() downlink ["
                      .concat(e.userId_, "] reconnect timeout(")
                      .concat(n / 1e3, "s), try again")
                  ),
                    e.clearReconnectionTimer(),
                    e.reconnect();
                }, n)),
                  this.closePeerConnection(),
                  (this.sentSubscriptionAfterConnected_ = !1),
                  this.remoteStreams_.forEach(function (e) {
                    e.setConnection(null);
                  }),
                  this.remoteStreams_.clear(),
                  this.initialize(),
                  this.exchangeSDP();
              } else
                this.log_.warn("reconnect() downlink is reconnecting, ignore current reconnection");
            },
          },
          {
            key: "getIsReconnecting",
            value: function () {
              return this.isReconnecting_;
            },
          },
          {
            key: "getSubscribedMainStream",
            value: function () {
              var e = null;
              return this.isMainStreamSubscribed && (e = this.remoteStreams_.get(uu)), e;
            },
          },
          {
            key: "clearReconnectionTimer",
            value: function () {
              -1 !== this.reconnectionTimer_ &&
                (clearTimeout(this.reconnectionTimer_), (this.reconnectionTimer_ = -1));
            },
          },
          {
            key: "stopReconnection",
            value: function () {
              this.log_.info("stop downlink reconnection"),
                (this.isReconnecting_ = !1),
                (this.reconnectionCount_ = 0),
                this.clearReconnectionTimer(),
                this.signalChannel_.off(Qp, this.reconnect, this);
            },
          },
          {
            key: "isMainStreamSubscribed",
            get: function () {
              return (
                (this.subscribeState_.audio || this.subscribeState_.video) &&
                (this.trackState_.audio || this.trackState_.video)
              );
            },
          },
          {
            key: "isAuxStreamSubscribed",
            get: function () {
              return this.subscribeState_.auxiliary && this.trackState_.auxiliary;
            },
          },
        ]),
        o
      );
    })(Dm),
    Zm = (function () {
      function e(t) {
        St(this, e),
          (this.client_ = t.client),
          (this.intervalId_ = -1),
          (this.statsCalculator_ = new lm()),
          (this.prevStats_ = null),
          (this.isUploadBlackVideo_ = !1),
          (this.blackVideoMap_ = new Map()),
          (this.renderFreezeMap_ = new Map()),
          (this.remoteStreamMap_ = new Map()),
          (this.dataFreezeMap_ = new Map()),
          (this.monitorFreezeData_ = new Map()),
          this.installEvents();
      }
      var t, n, r, i;
      return (
        kt(e, [
          {
            key: "installEvents",
            value: function () {
              Tm.on(Rm, this.onStreamPlaySuccess, this),
                Tm.on(xm, this.onVideoTrackMuted, this),
                Tm.on(Pm, this.onVideoTrackUnmuted, this);
            },
          },
          {
            key: "uninstallEvents",
            value: function () {
              Tm.off(Rm, this.onStreamPlaySuccess, this),
                Tm.off(xm, this.onVideoTrackMuted, this),
                Tm.off(Pm, this.onVideoTrackUnmuted, this);
            },
          },
          {
            key: "start",
            value: function () {
              var e = this;
              this.intervalId_ > 0 ||
                (this.intervalId_ = cs.setInterval(
                  yt(
                    regeneratorRuntime.mark(function t() {
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  (e.isUploadBlackVideo_ = !e.isUploadBlackVideo_),
                                  (t.next = 4),
                                  e.detectFPS()
                                );
                              case 4:
                                t.next = 8;
                                break;
                              case 6:
                                (t.prev = 6), (t.t0 = t.catch(0));
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 6]]
                      );
                    })
                  ),
                  1e3
                ));
            },
          },
          {
            key: "stop",
            value: function () {
              if (-1 !== this.intervalId_) {
                if (
                  (this.uninstallEvents(),
                  cs.clearInterval(this.intervalId_),
                  (this.intervalId_ = -1),
                  this.uploadBlackVideo(),
                  this.remoteStreamMap_.size > 0)
                ) {
                  var e = this.getBlackVideoRate();
                  lf("blackrate:" + e);
                }
                this.renderFreezeMap_.clear(), this.dataFreezeMap_.clear();
              }
            },
          },
          {
            key: "onVideoTrackMuted",
            value: function (e) {
              var t = e.stream,
                n = t.getClient();
              if (n && n.getUserId() === this.client_.getUserId() && t.isRemote()) {
                var r = t.userId_,
                  i = t.type_,
                  o = "".concat(r, "_").concat(i),
                  a = this.dataFreezeMap_.get(o),
                  s = Date.now();
                a
                  ? (a.freezeTimeline.push({ startTime: s, endTime: void 0 }), (a.isFreeze = !0))
                  : this.dataFreezeMap_.set(o, {
                      userId: r,
                      type: i,
                      isFreeze: !0,
                      freezeTimeline: [{ startTime: s, endTime: void 0 }],
                      dataFreezeTotal: 0,
                    });
              }
            },
          },
          {
            key: "onVideoTrackUnmuted",
            value: function (e) {
              var t = e.stream,
                n = t.getClient();
              if (n && n.getUserId() === this.client_.getUserId() && t.isRemote()) {
                var r = t.userId_,
                  i = t.type_,
                  o = "".concat(r, "_").concat(i),
                  a = this.dataFreezeMap_.get(o);
                if (!a || !a.isFreeze) return;
                var s = Date.now(),
                  c = a.freezeTimeline.pop(),
                  u = s - c.startTime;
                u > 500 &&
                  ((c.endTime = s),
                  a.freezeTimeline.push(c),
                  (a.dataFreezeTotal += u),
                  this.monitorFreezeData_.set(o, { userId: r, type: i, duration: u }));
              }
            },
          },
          {
            key: "deleteBlackVideoRecord",
            value: function (e) {
              var t = "".concat(e, "_").concat("main"),
                n = "".concat(e, "_").concat("auxiliary");
              (this.blackVideoMap_.has(t) || this.blackVideoMap_.has(n)) &&
                (this.blackVideoMap_.delete(t), this.blackVideoMap_.delete(n));
            },
          },
          {
            key: "getStats",
            value:
              ((i = yt(
                regeneratorRuntime.mark(function e() {
                  var t, n, r, i, o, a, s, c, u, d, l;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t = this.client_.getConnections()),
                              (n = {}),
                              (r = jt(t)),
                              (e.prev = 3),
                              r.s();
                          case 5:
                            if ((i = r.n()).done) {
                              e.next = 20;
                              break;
                            }
                            if (
                              ((o = Mt(i.value, 2)), (a = o[0]), (s = o[1]).getPeerConnection())
                            ) {
                              e.next = 9;
                              break;
                            }
                            return e.abrupt("continue", 18);
                          case 9:
                            return (
                              (c = s.getSubscribeState()),
                              (u = s.getTrackState()),
                              (e.next = 13),
                              this.statsCalculator_.getReceiverStats(s)
                            );
                          case 13:
                            (d = e.sent),
                              (l = {
                                userId: d.userId,
                                tinyId: a,
                                hasVideo: u.video && c.video,
                                hasAuxiliary: u.auxiliary && c.auxiliary,
                                video: { framesDecoded: 0 },
                                auxiliary: { framesDecoded: 0 },
                              }).hasVideo && (l.video.framesDecoded = d.video.framesDecoded),
                              l.hasAuxiliary &&
                                (l.auxiliary.framesDecoded = d.auxiliary.framesDecoded),
                              (n[d.userId] = l);
                          case 18:
                            e.next = 5;
                            break;
                          case 20:
                            e.next = 25;
                            break;
                          case 22:
                            (e.prev = 22), (e.t0 = e.catch(3)), r.e(e.t0);
                          case 25:
                            return (e.prev = 25), r.f(), e.finish(25);
                          case 28:
                            return e.abrupt("return", n);
                          case 29:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[3, 22, 25, 28]]
                  );
                })
              )),
              function () {
                return i.apply(this, arguments);
              }),
          },
          {
            key: "detectFPS",
            value:
              ((r = yt(
                regeneratorRuntime.mark(function e() {
                  var t, n, r, i, o, a;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), this.getStats();
                          case 2:
                            if (((t = e.sent), this.prevStats_)) {
                              e.next = 6;
                              break;
                            }
                            return (this.prevStats_ = t), e.abrupt("return");
                          case 6:
                            e.t0 = regeneratorRuntime.keys(t);
                          case 7:
                            if ((e.t1 = e.t0()).done) {
                              e.next = 17;
                              break;
                            }
                            if (((n = e.t1.value), this.prevStats_[n])) {
                              e.next = 11;
                              break;
                            }
                            return e.abrupt("continue", 7);
                          case 11:
                            (r = t[n].tinyId),
                              (i = this.client_.getMutedStates()),
                              t[n].hasVideo &&
                                this.prevStats_[n].hasVideo &&
                                i.has(r) &&
                                !i.get(r).videoMuted &&
                                ((o =
                                  t[n].video.framesDecoded -
                                  this.prevStats_[n].video.framesDecoded),
                                this.handleFPS({ userId: n, type: "main", fps: o })),
                              t[n].hasAuxiliary &&
                                this.prevStats_[n].hasAuxiliary &&
                                ((a =
                                  t[n].auxiliary.framesDecoded -
                                  this.prevStats_[n].auxiliary.framesDecoded),
                                this.handleFPS({ userId: n, type: "auxiliary", fps: a })),
                              (e.next = 7);
                            break;
                          case 17:
                            this.prevStats_ = t;
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function () {
                return r.apply(this, arguments);
              }),
          },
          {
            key: "handleFPS",
            value: function (e) {
              var t = e.userId,
                n = e.fps,
                r = e.type;
              this.handleRenderFreeze({ userId: t, fps: n, type: r }),
                this.isUploadBlackVideo_ && this.handleBlackVideo({ userId: t, fps: n, type: r });
            },
          },
          {
            key: "handleRenderFreeze",
            value:
              ((n = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r, i, o, a, s, c, u;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (n = t.userId),
                              (r = t.fps),
                              (i = t.type),
                              (o = "".concat(n, "_").concat(i)),
                              (a = this.renderFreezeMap_.get(o)),
                              r <= 2
                                ? ((s = Date.now()),
                                  a &&
                                    !a.isFreeze &&
                                    (a.freezeTimeline.push({ startTime: s, endTime: void 0 }),
                                    (a.isFreeze = !0)),
                                  a ||
                                    this.renderFreezeMap_.set(o, {
                                      userId: n,
                                      type: i,
                                      isFreeze: !0,
                                      freezeTimeline: [{ startTime: s, endTime: void 0 }],
                                      renderFreezeTotal: 0,
                                    }))
                                : a &&
                                  a.isFreeze &&
                                  ((a.isFreeze = !1),
                                  ((c = a.freezeTimeline.pop()).endTime = Date.now()),
                                  (u = c.endTime - c.startTime),
                                  a.freezeTimeline.push(c),
                                  (a.renderFreezeTotal += u));
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e) {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "uploadBlackVideo",
            value: function () {
              this.blackVideoMap_.forEach(function (e) {
                var t = e.userId,
                  n = e.type,
                  r = e.startTime,
                  i = Date.now() - r;
                lf("blackstats-" + JSON.stringify({ remoteUserId: t, type: n, delta: i }));
              }),
                this.blackVideoMap_.clear();
            },
          },
          {
            key: "handleBlackVideo",
            value:
              ((t = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r, i, o, a, s;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (n = t.userId),
                              (r = t.fps),
                              (i = t.type),
                              (o = "".concat(n, "_").concat(i)),
                              this.remoteStreamMap_.has(o) &&
                                (this.remoteStreamMap_.get(o).isFPSDetected = !0),
                              0 === r
                                ? this.blackVideoMap_.has(o) ||
                                  this.blackVideoMap_.set(o, {
                                    userId: n,
                                    type: i,
                                    startTime: Date.now(),
                                  })
                                : r > 0 &&
                                  (this.remoteStreamMap_.has(o) &&
                                    (this.remoteStreamMap_.get(o).isRendered = !0),
                                  this.blackVideoMap_.has(o) &&
                                    ((a = Date.now() - this.blackVideoMap_.get(o).startTime),
                                    (s = { remoteUserId: n, type: i, delta: a }),
                                    lf("blackstats-" + JSON.stringify(s)),
                                    this.blackVideoMap_.delete(o)));
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e) {
                return t.apply(this, arguments);
              }),
          },
          {
            key: "onStreamPlaySuccess",
            value: function (e) {
              var t = e.stream;
              if (t.isRemote()) {
                var n = "".concat(t.getUserId(), "_").concat(t.getType());
                if (this.remoteStreamMap_.has(n)) this.remoteStreamMap_.get(n).remoteStream = t;
                else
                  this.remoteStreamMap_.set(n, {
                    isRendered: !1,
                    isFPSDetected: !1,
                    remoteStream: t,
                  });
              }
            },
          },
          {
            key: "getBlackVideoRate",
            value: function () {
              return 0 === this.remoteStreamMap_.size
                ? 0
                : Lt(this.remoteStreamMap_.values()).filter(function (e) {
                    return e.isFPSDetected && !e.isRendered;
                  }).length / this.remoteStreamMap_.size;
            },
          },
          {
            key: "getDataFreezeDuration",
            value: function (e) {
              var t = this.dataFreezeMap_.get(e),
                n = 0;
              if (t) {
                if (t.isFreeze) {
                  var r = Date.now() - t.freezeTimeline.pop().startTime;
                  n = r > 500 ? t.dataFreezeTotal + r : t.dataFreezeTotal;
                } else n = t.dataFreezeTotal;
                this.dataFreezeMap_.delete(e);
              }
              return n;
            },
          },
          {
            key: "getRenderFreezeDuration",
            value: function (e) {
              var t = this.renderFreezeMap_.get(e),
                n = 0;
              if (t) {
                if (t.isFreeze) {
                  var r = Date.now() - t.freezeTimeline.pop().startTime;
                  n = t.renderFreezeTotal + r;
                } else n = t.renderFreezeTotal;
                this.renderFreezeMap_.delete(e);
              }
              return n;
            },
          },
          {
            key: "getMonitorFreeze",
            value: function () {
              return this.monitorFreezeData_;
            },
          },
          {
            key: "resetMonitor",
            value: function () {
              this.monitorFreezeData_.clear();
            },
          },
        ]),
        e
      );
    })(),
    ev = function e(t) {
      St(this, e),
        (this.userId = t.userId),
        (this.tinyId = t.tinyId),
        (this.role = t.role === su ? "anchor" : "audience");
    };
  function tv(e) {
    var t = e.retryFunction,
      n = e.settings,
      r = e.onError,
      i = e.onRetrying,
      o = e.context;
    return function () {
      for (var e = this, a = arguments.length, s = new Array(a), c = 0; c < a; c++)
        s[c] = arguments[c];
      var u = n.retries || 5,
        d = 0,
        l = -1,
        p = 0,
        h = (function () {
          var a = yt(
            regeneratorRuntime.mark(function a(c, f) {
              var m, v, g, _;
              return regeneratorRuntime.wrap(
                function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (a.prev = 0), (m = o || e), (a.next = 4), t.apply(m, s);
                      case 4:
                        (v = a.sent), (d = 0), c(v), (a.next = 14);
                        break;
                      case 9:
                        (a.prev = 9),
                          (a.t0 = a.catch(0)),
                          (g = function () {
                            clearTimeout(l), (d = 0), (p = 2), f(a.t0);
                          }),
                          (_ = function () {
                            2 !== p && d < u
                              ? (d++,
                                (p = 1),
                                hd(i) && i(d, g),
                                (l = setTimeout(function () {
                                  (l = -1), h(c, f);
                                }, n.timeout || 1e3)))
                              : g();
                          }),
                          r(a.t0, _, f);
                      case 14:
                      case "end":
                        return a.stop();
                    }
                },
                a,
                null,
                [[0, 9]]
              );
            })
          );
          return function (e, t) {
            return a.apply(this, arguments);
          };
        })();
      return new Promise(h);
    };
  }
  var nv = t(function (t) {
      !(function (e) {
        function n(e, t) {
          var n = (65535 & e) + (65535 & t);
          return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
        }
        function r(e, t, r, i, o, a) {
          return n(((s = n(n(t, e), n(i, a))) << (c = o)) | (s >>> (32 - c)), r);
          var s, c;
        }
        function i(e, t, n, i, o, a, s) {
          return r((t & n) | (~t & i), e, t, o, a, s);
        }
        function o(e, t, n, i, o, a, s) {
          return r((t & i) | (n & ~i), e, t, o, a, s);
        }
        function a(e, t, n, i, o, a, s) {
          return r(t ^ n ^ i, e, t, o, a, s);
        }
        function s(e, t, n, i, o, a, s) {
          return r(n ^ (t | ~i), e, t, o, a, s);
        }
        function c(e, t) {
          var r, c, u, d, l;
          (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
          var p = 1732584193,
            h = -271733879,
            f = -1732584194,
            m = 271733878;
          for (r = 0; r < e.length; r += 16)
            (c = p),
              (u = h),
              (d = f),
              (l = m),
              (p = i(p, h, f, m, e[r], 7, -680876936)),
              (m = i(m, p, h, f, e[r + 1], 12, -389564586)),
              (f = i(f, m, p, h, e[r + 2], 17, 606105819)),
              (h = i(h, f, m, p, e[r + 3], 22, -1044525330)),
              (p = i(p, h, f, m, e[r + 4], 7, -176418897)),
              (m = i(m, p, h, f, e[r + 5], 12, 1200080426)),
              (f = i(f, m, p, h, e[r + 6], 17, -1473231341)),
              (h = i(h, f, m, p, e[r + 7], 22, -45705983)),
              (p = i(p, h, f, m, e[r + 8], 7, 1770035416)),
              (m = i(m, p, h, f, e[r + 9], 12, -1958414417)),
              (f = i(f, m, p, h, e[r + 10], 17, -42063)),
              (h = i(h, f, m, p, e[r + 11], 22, -1990404162)),
              (p = i(p, h, f, m, e[r + 12], 7, 1804603682)),
              (m = i(m, p, h, f, e[r + 13], 12, -40341101)),
              (f = i(f, m, p, h, e[r + 14], 17, -1502002290)),
              (p = o(
                p,
                (h = i(h, f, m, p, e[r + 15], 22, 1236535329)),
                f,
                m,
                e[r + 1],
                5,
                -165796510
              )),
              (m = o(m, p, h, f, e[r + 6], 9, -1069501632)),
              (f = o(f, m, p, h, e[r + 11], 14, 643717713)),
              (h = o(h, f, m, p, e[r], 20, -373897302)),
              (p = o(p, h, f, m, e[r + 5], 5, -701558691)),
              (m = o(m, p, h, f, e[r + 10], 9, 38016083)),
              (f = o(f, m, p, h, e[r + 15], 14, -660478335)),
              (h = o(h, f, m, p, e[r + 4], 20, -405537848)),
              (p = o(p, h, f, m, e[r + 9], 5, 568446438)),
              (m = o(m, p, h, f, e[r + 14], 9, -1019803690)),
              (f = o(f, m, p, h, e[r + 3], 14, -187363961)),
              (h = o(h, f, m, p, e[r + 8], 20, 1163531501)),
              (p = o(p, h, f, m, e[r + 13], 5, -1444681467)),
              (m = o(m, p, h, f, e[r + 2], 9, -51403784)),
              (f = o(f, m, p, h, e[r + 7], 14, 1735328473)),
              (p = a(
                p,
                (h = o(h, f, m, p, e[r + 12], 20, -1926607734)),
                f,
                m,
                e[r + 5],
                4,
                -378558
              )),
              (m = a(m, p, h, f, e[r + 8], 11, -2022574463)),
              (f = a(f, m, p, h, e[r + 11], 16, 1839030562)),
              (h = a(h, f, m, p, e[r + 14], 23, -35309556)),
              (p = a(p, h, f, m, e[r + 1], 4, -1530992060)),
              (m = a(m, p, h, f, e[r + 4], 11, 1272893353)),
              (f = a(f, m, p, h, e[r + 7], 16, -155497632)),
              (h = a(h, f, m, p, e[r + 10], 23, -1094730640)),
              (p = a(p, h, f, m, e[r + 13], 4, 681279174)),
              (m = a(m, p, h, f, e[r], 11, -358537222)),
              (f = a(f, m, p, h, e[r + 3], 16, -722521979)),
              (h = a(h, f, m, p, e[r + 6], 23, 76029189)),
              (p = a(p, h, f, m, e[r + 9], 4, -640364487)),
              (m = a(m, p, h, f, e[r + 12], 11, -421815835)),
              (f = a(f, m, p, h, e[r + 15], 16, 530742520)),
              (p = s(p, (h = a(h, f, m, p, e[r + 2], 23, -995338651)), f, m, e[r], 6, -198630844)),
              (m = s(m, p, h, f, e[r + 7], 10, 1126891415)),
              (f = s(f, m, p, h, e[r + 14], 15, -1416354905)),
              (h = s(h, f, m, p, e[r + 5], 21, -57434055)),
              (p = s(p, h, f, m, e[r + 12], 6, 1700485571)),
              (m = s(m, p, h, f, e[r + 3], 10, -1894986606)),
              (f = s(f, m, p, h, e[r + 10], 15, -1051523)),
              (h = s(h, f, m, p, e[r + 1], 21, -2054922799)),
              (p = s(p, h, f, m, e[r + 8], 6, 1873313359)),
              (m = s(m, p, h, f, e[r + 15], 10, -30611744)),
              (f = s(f, m, p, h, e[r + 6], 15, -1560198380)),
              (h = s(h, f, m, p, e[r + 13], 21, 1309151649)),
              (p = s(p, h, f, m, e[r + 4], 6, -145523070)),
              (m = s(m, p, h, f, e[r + 11], 10, -1120210379)),
              (f = s(f, m, p, h, e[r + 2], 15, 718787259)),
              (h = s(h, f, m, p, e[r + 9], 21, -343485551)),
              (p = n(p, c)),
              (h = n(h, u)),
              (f = n(f, d)),
              (m = n(m, l));
          return [p, h, f, m];
        }
        function u(e) {
          var t,
            n = "",
            r = 32 * e.length;
          for (t = 0; t < r; t += 8) n += String.fromCharCode((e[t >> 5] >>> t % 32) & 255);
          return n;
        }
        function d(e) {
          var t,
            n = [];
          for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
          var r = 8 * e.length;
          for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
          return n;
        }
        function l(e) {
          var t,
            n,
            r = "";
          for (n = 0; n < e.length; n += 1)
            (t = e.charCodeAt(n)),
              (r += "0123456789abcdef".charAt((t >>> 4) & 15) + "0123456789abcdef".charAt(15 & t));
          return r;
        }
        function p(e) {
          return unescape(encodeURIComponent(e));
        }
        function h(e) {
          return (function (e) {
            return u(c(d(e), 8 * e.length));
          })(p(e));
        }
        function f(e, t) {
          return (function (e, t) {
            var n,
              r,
              i = d(e),
              o = [],
              a = [];
            for (
              o[15] = a[15] = void 0, i.length > 16 && (i = c(i, 8 * e.length)), n = 0;
              n < 16;
              n += 1
            )
              (o[n] = 909522486 ^ i[n]), (a[n] = 1549556828 ^ i[n]);
            return (r = c(o.concat(d(t)), 512 + 8 * t.length)), u(c(a.concat(r), 640));
          })(p(e), p(t));
        }
        function m(e, t, n) {
          return t ? (n ? f(t, e) : l(f(t, e))) : n ? h(e) : l(h(e));
        }
        t.exports ? (t.exports = m) : (e.md5 = m);
      })(e);
    }),
    rv = (function () {
      function e(t) {
        St(this, e),
          (this.client_ = t.client),
          (this.signalChannel_ = t.signalChannel),
          (this.isMixing_ = !1),
          (this.config_ = null),
          (this.data_ = null),
          (this.remoteStreamMap_ = new Map()),
          this.installEvents();
      }
      var t, n;
      return (
        kt(e, [
          {
            key: "installEvents",
            value: function () {
              Tm.on(Im, this.onStreamSubscribed, this),
                Tm.on(Cm, this.onStreamUnsubscribed, this),
                this.client_.on("stream-removed", this.onStreamRemoved, this);
            },
          },
          {
            key: "uninstallEvents",
            value: function () {
              Tm.off(Im, this.onStreamSubscribed, this),
                Tm.off(Cm, this.onStreamUnsubscribed, this),
                this.client_.off("stream-removed", this.onStreamRemoved, this);
            },
          },
          {
            key: "stop",
            value: function () {
              this.uninstallEvents();
            },
          },
          {
            key: "onStreamSubscribed",
            value: function (e) {
              var t = e.source,
                n = e.stream;
              t === this.client_ &&
                (this.remoteStreamMap_.set(n.getId(), { remoteStream: n, isUsed: !1 }),
                this.isMixing_ &&
                  this.hasAvailablePlaceHolder() &&
                  this.startMixTranscode(this.config_));
            },
          },
          {
            key: "onStreamUnsubscribed",
            value: function (e) {
              var t = e.source,
                n = e.stream;
              t === this.client_ && this.onStreamRemoved({ stream: n });
            },
          },
          {
            key: "onStreamRemoved",
            value: function (e) {
              var t = e.stream;
              if (this.remoteStreamMap_.has(t.getId())) {
                var n = this.remoteStreamMap_.get(t.getId()).isUsed;
                this.remoteStreamMap_.delete(t.getId()),
                  this.isMixing_ &&
                    this.isPresetLayoutMode &&
                    n &&
                    this.startMixTranscode(this.config_);
              }
            },
          },
          {
            key: "startMixTranscode",
            value:
              ((n = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r, i;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              this.resetIsUsedFlag(),
                              this.validateMixTranscodeParamsType(t),
                              (this.config_ = t),
                              (n = this.getInputParam(t, this.remoteStreamMap_)),
                              (r = this.getOutputParam(t)),
                              (i = this.getOutputSessionId({
                                config: t,
                                roomId: this.client_.getRoomId(),
                                userId: this.client_.getUserId(),
                              })),
                              this.validateMixTranscodeParamsValue(n, r),
                              !this.isMixing_ || !this.data_ || i === this.data_.outputSessionId)
                            ) {
                              e.next = 12;
                              break;
                            }
                            return (
                              or.info(
                                "startMixTranscode() streamId changed, stop mixing before start"
                              ),
                              (e.next = 12),
                              this.doStopMixTranscode()
                            );
                          case 12:
                            return (
                              (e.next = 14),
                              this.doStartMixTranscode({
                                outputSessionId: i,
                                inputParam: n,
                                outputParam: r,
                              })
                            );
                          case 14:
                            e.next = 20;
                            break;
                          case 16:
                            throw (
                              ((e.prev = 16), (e.t0 = e.catch(0)), this.resetIsUsedFlag(), e.t0)
                            );
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[0, 16]]
                  );
                })
              )),
              function (e) {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "doStartMixTranscode",
            value: function (e) {
              var t = this,
                n = e.outputSessionId,
                r = e.inputParam,
                i = e.outputParam;
              return new Promise(function (e, o) {
                var a = {
                  roomid: String(t.client_.getRoomId()),
                  sdkAppID: String(t.client_.getSDKAppId()),
                  socketid: t.signalChannel_.getSocketId(),
                  mcuRequestTime: Date.now(),
                  outputSessionId: n,
                  inputParam: r,
                  outputParam: i,
                };
                (t.data_ = a),
                  or.info("startMixTranscode: ".concat(JSON.stringify(a))),
                  t.signalChannel_.send(yh, a),
                  (t.isMixing_ = !0);
                var s = setTimeout(function () {
                    or.error("startMixTranscode timeout observed"),
                      (t.isMixing_ = !1),
                      t.signalChannel_.off(th.START_MIX_TRANSCODE_RES, c),
                      o(
                        new Rh({
                          code: Th.START_MIX_TRANSCODE_FAILED,
                          message: "startMixTranscode timeout",
                        })
                      );
                  }, 5e3),
                  c = function (n) {
                    clearTimeout(s),
                      n.data.content.errCode
                        ? (or.error(
                            "startMixTranscode failed, errCode: "
                              .concat(n.data.content.errCode, " errMsg: ")
                              .concat(n.data.content.errMsg)
                          ),
                          (t.isMixing_ = !1),
                          o(
                            new Rh({
                              code: Th.START_MIX_TRANSCODE_FAILED,
                              message: "startMixTranscode failed, errMsg: ".concat(
                                n.data.content.errMsg
                              ),
                            })
                          ))
                        : e();
                  };
                t.signalChannel_.once(th.START_MIX_TRANSCODE_RES, c);
              });
            },
          },
          {
            key: "stopMixTranscode",
            value:
              ((t = yt(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this.isMixing_) {
                              e.next = 2;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message: "mixTranscode hasn't been started",
                            });
                          case 2:
                            return (e.next = 4), this.doStopMixTranscode();
                          case 4:
                            this.resetIsUsedFlag();
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function () {
                return t.apply(this, arguments);
              }),
          },
          {
            key: "doStopMixTranscode",
            value: function () {
              var e = this;
              return new Promise(function (t, n) {
                var r = {
                  roomid: String(e.client_.getRoomId()),
                  sdkAppID: String(e.client_.getSDKAppId()),
                  socketid: e.signalChannel_.getSocketId(),
                  userid: e.client_.getUserId(),
                  mcuRequestTime: Date.now(),
                  outPutSessionId: e.data_.outputSessionId,
                  streamType: e.data_.outputParam.streamType,
                };
                or.info("stopMixTranscode: ".concat(JSON.stringify(r))),
                  e.signalChannel_.send(Sh, r);
                var i = setTimeout(function () {
                    or.error("stopMixTranscode timeout observed"),
                      e.signalChannel_.off(th.STOP_MIX_TRANSCODE_RES, o),
                      n(
                        new Rh({
                          code: Th.STOP_MIX_TRANSCODE_FAILED,
                          message: "stopMixTranscode timeout",
                        })
                      );
                  }, 5e3),
                  o = function (r) {
                    clearTimeout(i),
                      r.data.content.errCode
                        ? (or.error(
                            "stopMixTranscode failed, errCode: "
                              .concat(r.data.content.errCode, " errMsg: ")
                              .concat(r.data.content.errMsg)
                          ),
                          n(
                            new Rh({
                              code: Th.STOP_MIX_TRANSCODE_FAILED,
                              message: "stopMixTranscode failed, errMsg: ".concat(
                                r.data.content.errMsg
                              ),
                            })
                          ))
                        : ((e.isMixing_ = !1), t());
                  };
                e.signalChannel_.once(th.STOP_MIX_TRANSCODE_RES, o);
              });
            },
          },
          {
            key: "validateMixTranscodeParamsType",
            value: function (e) {
              if ("object" !== gd(e))
                throw new Rh({
                  code: Th.INVALID_PARAMETER,
                  message: "param should be object when start mix transcoding",
                });
              var t = _d(e, {
                streamId: Ju,
                videoWidth: Qu,
                videoHeight: Qu,
                videoBitrate: Qu,
                videoFramerate: Qu,
                videoGOP: Qu,
                audioSampleRate: Qu,
                audioBitrate: Qu,
                audioChannels: Qu,
                backgroundColor: Qu,
                backgroundImage: Ju,
                mixUsers: Ku,
              });
              if (!t.ret) throw new Rh({ code: Th.INVALID_PARAMETER, message: t.message });
              var n = {
                userId: Ju,
                pureAudio: qu,
                width: Qu,
                height: Qu,
                locationX: Qu,
                locationY: Qu,
                zOrder: Qu,
              };
              e.mixUsers.forEach(function (e) {
                var t = _d(e, n);
                if (!t.ret)
                  throw new Rh({
                    code: Th.INVALID_PARAMETER,
                    message: "mixUser.".concat(t.message),
                  });
              });
            },
          },
          {
            key: "getOutputSessionId",
            value: function (e) {
              var t = e.config,
                n = e.userId,
                r = e.roomId;
              return md(t.streamId) && t.streamId.length > 0
                ? t.streamId
                : nv("".concat(r, "_").concat(n, "_main"));
            },
          },
          {
            key: "getInputParam",
            value: function (e, t) {
              var n = e.mixUsers.map(function (e) {
                return {
                  userid: e.userId,
                  width: e.width || 0,
                  height: e.height || 0,
                  locationX: e.locationX || 0,
                  locationY: e.locationY || 0,
                  zOrder: e.zOrder,
                  streamType: fd(e.streamType) || "auxiliary" !== e.streamType ? 0 : 1,
                  inputType: e.pureAudio ? Wu.IT_PURE_AUDIO : Wu.IT_AUDIO_VIDEO,
                };
              });
              return (
                e.mode === Gu.PRESET_LAYOUT &&
                  (n.forEach(function (e) {
                    if (e.userid === Hu.REMOTE) {
                      var n = Lt(t.values()).find(function (e) {
                        return !e.isUsed;
                      });
                      n &&
                        ((e.userid = n.remoteStream.getUserId()),
                        (e.streamType = "auxiliary" === n.remoteStream.getType() ? 1 : 0),
                        (n.isUsed = !0));
                    }
                  }),
                  (n = n.filter(function (e) {
                    return e.userid !== Hu.REMOTE;
                  }))),
                n
              );
            },
          },
          {
            key: "getOutputParam",
            value: function (e) {
              var t = e.streamId || "";
              return {
                streamId: t,
                streamType: t.length > 0 ? 1 : 0,
                videoWidth: fd(e.videoWidth) ? 640 : e.videoWidth,
                videoHeight: fd(e.videoHeight) ? 480 : e.videoHeight,
                videoBitrate: e.videoBitrate || 0,
                videoFramerate: e.videoFramerate || 15,
                videoGOP: e.videoGOP || 2,
                audioSampleRate: e.audioSampleRate || 48e3,
                audioBitrate: e.audioBitrate || 64,
                audioChannels: e.audioChannels || 1,
                backgroundColor: e.backgroundColor || 0,
                backgroundImage: e.backgroundImage || "",
                extraInfo: "",
                VCodec: 2,
                ACodec: 0,
              };
            },
          },
          {
            key: "validateMixTranscodeParamsValue",
            value: function (e, t) {
              var n = 0,
                r = 0;
              if (
                (e.forEach(function (e) {
                  if (fd(e.userid))
                    throw new Rh({
                      code: Th.INVALID_PARAMETER,
                      message: "mixUser.userId is required",
                    });
                  if (e.inputType !== Wu.IT_PURE_AUDIO) {
                    if (e.width < 0 || e.height < 0)
                      throw new Rh({
                        code: Th.INVALID_PARAMETER,
                        message: "mixUser.width and mixUser.height can't be less than 0",
                      });
                    if (e.locationX < 0 || e.locationY < 0)
                      throw new Rh({
                        code: Th.INVALID_PARAMETER,
                        message: "mixUser.locationX and mixUser.locationY can't be less than 0",
                      });
                    if (!e.zOrder || e.zOrder < 1 || e > 15)
                      throw new Rh({
                        code: Th.INVALID_PARAMETER,
                        message: "mixUser.zOrder should between 1 and 15",
                      });
                    e.width + e.locationX > n && (n = e.width + e.locationX),
                      e.height + e.locationY > r && (r = e.height + e.locationY);
                  }
                }),
                t.videoWidth < 0 || t.videoWidth < 0)
              )
                throw new Rh({
                  code: Th.INVALID_PARAMETER,
                  message: "videoWidth and videoHeight of output stream can't be less than 0",
                });
              if (t.videoWidth < n || t.videoHeight < r)
                throw new Rh({
                  code: Th.INVALID_PARAMETER,
                  message:
                    "videoWidth and videoHeight of output stream should be contain all mix stream",
                });
            },
          },
          {
            key: "hasAvailablePlaceHolder",
            value: function () {
              return (
                !!this.isPresetLayoutMode &&
                this.data_.inputParam.length !== this.config_.mixUsers.length
              );
            },
          },
          {
            key: "resetIsUsedFlag",
            value: function () {
              this.remoteStreamMap_.forEach(function (e) {
                return (e.isUsed = !1);
              });
            },
          },
          {
            key: "isPresetLayoutMode",
            get: function () {
              return this.config_ && this.config_.mode === Gu.PRESET_LAYOUT;
            },
          },
        ]),
        e
      );
    })(),
    iv = (function () {
      function e(t) {
        St(this, e),
          (this.client_ = t.client),
          (this.signalChannel_ = t.signalChannel),
          (this.isPublishingTencentCDN_ = !1),
          (this.publishGivenCDNData_ = null),
          (this.isPublishingGivenCDN_ = !1);
      }
      return (
        kt(e, [
          {
            key: "getIsPublishingTencentCDN",
            value: function () {
              return this.isPublishingTencentCDN_;
            },
          },
          {
            key: "getIsPublishingGivenCDN",
            value: function () {
              return this.isPublishingGivenCDN_;
            },
          },
          {
            key: "startPublishTencentCDN",
            value: function (e) {
              var t = this;
              e =
                e ||
                ""
                  .concat(this.client_.getSDKAppId(), "_")
                  .concat(this.client_.getRoomId(), "_")
                  .concat(this.client_.getUserId(), "_main");
              var n = {
                roomid: String(this.client_.getRoomId()),
                sdkAppID: String(this.client_.getSDKAppId()),
                requestTime: Date.now(),
                sessionId: nv(
                  "".concat(this.client_.getRoomId(), "_").concat(this.client_.getUserId(), "_main")
                ),
                streamId: e,
                streamType: 0,
              };
              return (
                or.info("startPublishTencentCDN: " + JSON.stringify(n)),
                new Promise(function (e, r) {
                  t.isPublishingTencentCDN_ = !0;
                  var i = setTimeout(function () {
                      or.error("startPublishTencentCDN timeout observed"),
                        (t.isPublishingTencentCDN_ = !1),
                        t.signalChannel_.off(th.START_PUBLISH_TENCENT_CDN_RES, o),
                        r(new Error("startPublishTencentCDN timeout"));
                    }, 5e3),
                    o = function (n) {
                      clearTimeout(i);
                      var o = n.data.content,
                        a = o.errCode,
                        s = o.errMsg;
                      0 === a
                        ? e()
                        : ((t.isPublishingTencentCDN_ = !1),
                          -102083 === a &&
                            (s =
                              "Please enable relayed-push in https://console.cloud.tencent.com/trtc/ and try later, refer to https://web.sdk.qcloud.com/trtc/webrtc/doc/zh-cn/tutorial-26-advanced-publish-cdn-stream.html"),
                          or.error(
                            "startPublishTencentCDN failed, errCode: "
                              .concat(a, ", errMsg: ")
                              .concat(s)
                          ),
                          r(new Error(s)));
                    };
                  t.signalChannel_.once(th.START_PUBLISH_TENCENT_CDN_RES, o),
                    t.signalChannel_.send(mh, n);
                })
              );
            },
          },
          {
            key: "stopPublishTencentCDN",
            value: function () {
              var e = this,
                t = {
                  roomid: String(this.client_.getRoomId()),
                  sdkAppID: String(this.client_.getSDKAppId()),
                  requestTime: Date.now(),
                  sessionId: nv(
                    ""
                      .concat(this.client_.getRoomId(), "_")
                      .concat(this.client_.getUserId(), "_main")
                  ),
                };
              return (
                or.info("stopPublishTencentCDN: " + JSON.stringify(t)),
                new Promise(function (n, r) {
                  var i = setTimeout(function () {
                      or.error("stopPublishTencentCDN timeout observed"),
                        e.signalChannel_.off(th.STOP_PUBLISH_TENCENT_CDN_RES, o),
                        r(new Error("stopPublishTencentCDN timeout"));
                    }, 5e3),
                    o = function (t) {
                      clearTimeout(i);
                      var o = t.data.content,
                        a = o.errCode,
                        s = o.errMsg;
                      0 === a
                        ? ((e.isPublishingTencentCDN_ = !1), n())
                        : -102069 === a
                        ? (or.warn(
                            "stopPublishTencentCDN failed, can not stopPublishTencentCDN in auto relayed-push mode"
                          ),
                          (e.isPublishingTencentCDN_ = !1),
                          n())
                        : (or.error(
                            "stopPublishTencentCDN failed, errCode: "
                              .concat(a, " errMsg: ")
                              .concat(s)
                          ),
                          r(new Error(s)));
                    };
                  e.signalChannel_.once(th.STOP_PUBLISH_TENCENT_CDN_RES, o),
                    e.signalChannel_.send(vh, t);
                })
              );
            },
          },
          {
            key: "startPublishGivenCDN",
            value: function (e) {
              var t = this,
                n = {
                  roomid: String(this.client_.getRoomId()),
                  sdkAppID: String(this.client_.getSDKAppId()),
                  socketid: this.signalChannel_.getSocketId(),
                  pushRequestTime: Date.now(),
                  pushAppid: e.appId,
                  pushBizId: e.bizId,
                  pushCdnUrl: e.url,
                  pushStreamType: "main",
                };
              return (
                or.info("startPublishGivenCDN: " + JSON.stringify(n)),
                (this.publishGivenCDNData_ = n),
                new Promise(function (e, r) {
                  t.isPublishingGivenCDN_ = !0;
                  var i = setTimeout(function () {
                      or.error("startPublishGivenCDN timeout observed"),
                        (t.isPublishingGivenCDN_ = !1),
                        t.signalChannel_.off(th.START_PUBLISH_GIVEN_CDN_RES, o),
                        r(new Error("startPublishGivenCDN timeout"));
                    }, 5e3),
                    o = function (n) {
                      clearTimeout(i);
                      var o = n.data.content,
                        a = o.errCode,
                        s = o.errMsg;
                      0 === a
                        ? e()
                        : (or.error(
                            "startPublishGivenCDN failed, errCode: "
                              .concat(a, ", errMsg: ")
                              .concat(s)
                          ),
                          (t.isPublishingGivenCDN_ = !1),
                          r(new Error(s)));
                    };
                  t.signalChannel_.once(th.START_PUBLISH_GIVEN_CDN_RES, o),
                    t.signalChannel_.send(gh, n);
                })
              );
            },
          },
          {
            key: "stopPublishGivenCDN",
            value: function () {
              var e = this,
                t = this.publishGivenCDNData_,
                n = t.pushAppid,
                r = t.pushBizId,
                i = t.pushCdnUrl,
                o = t.pushStreamType,
                a = {
                  roomid: String(this.client_.getRoomId()),
                  sdkAppID: String(this.client_.getSDKAppId()),
                  socketid: this.signalChannel_.getSocketId(),
                  pushRequestTime: Date.now(),
                  pushAppid: n,
                  pushBizId: r,
                  pushCdnUrl: i,
                  pushStreamType: o,
                };
              return (
                or.info("stopPublishGivenCDN: " + JSON.stringify(a)),
                new Promise(function (t, n) {
                  var r = setTimeout(function () {
                      or.error("stopPublishGivenCDN timeout observed"),
                        e.signalChannel_.off(th.STOP_PUBLISH_GIVEN_CDN_RES, i),
                        n(new Error("stopPublishGivenCDN timeout"));
                    }, 5e3),
                    i = function (i) {
                      clearTimeout(r);
                      var o = i.data.content,
                        a = o.errCode,
                        s = o.errMsg;
                      0 === a
                        ? ((e.isPublishingGivenCDN_ = !1), t())
                        : (or.error(
                            "stopPublishGivenCDN failed, errCode: ".concat(a, " errMsg: ").concat(s)
                          ),
                          n(new Error(s)));
                    };
                  e.signalChannel_.once(th.STOP_PUBLISH_GIVEN_CDN_RES, i),
                    e.signalChannel_.send(_h, a);
                })
              );
            },
          },
        ]),
        e
      );
    })(),
    ov = (function () {
      function e(t) {
        St(this, e), (this.client_ = t.client), (this.durationMap_ = new Map());
      }
      return (
        kt(e, [
          {
            key: "isCalculated",
            value: function (e) {
              var t = e.stream;
              if (t.isRemote()) {
                var n = t.getUserId(),
                  r = t.getType(),
                  i = "".concat(n, "_").concat(r);
                return this.durationMap_.has(i);
              }
              return !1;
            },
          },
          {
            key: "startCalculate",
            value: function (e) {
              var t = e.stream;
              if (t.isRemote()) {
                var n = t.getUserId(),
                  r = t.getType(),
                  i = "".concat(n, "_").concat(r),
                  o = Date.now();
                this.durationMap_.delete(i),
                  this.durationMap_.set(i, {
                    userId: n,
                    type: r,
                    startTime: o,
                    endTime: void 0,
                    duration: 0,
                  });
              }
            },
          },
          {
            key: "stopCalculate",
            value: function (e) {
              var t = e.stream;
              if (t.isRemote()) {
                var n = t.getUserId(),
                  r = t.getType(),
                  i = "".concat(n, "_").concat(r),
                  o = this.durationMap_.get(i);
                (o.endTime = Date.now()),
                  (o.duration = o.endTime - o.startTime),
                  this.durationMap_.set(i, o);
              }
            },
          },
          {
            key: "getDuration",
            value: function (e) {
              var t = this.durationMap_.get(e).duration;
              return this.durationMap_.delete(e), t;
            },
          },
          {
            key: "getDurationMap",
            value: function () {
              return this.durationMap_;
            },
          },
          {
            key: "reset",
            value: function () {
              this.durationMap_.clear();
            },
          },
        ]),
        e
      );
    })(),
    av = (function () {
      function e(t) {
        if (
          (St(this, e),
          (this.mode_ = t.mode),
          (this.sdpSemantics_ = "plan-b"),
          void 0 !== t.sdpSemantics
            ? (this.sdpSemantics_ = t.sdpSemantics)
            : (function () {
                if (!Pf()) return !1;
                if ("undefined" == typeof RTCRtpTransceiver) return !1;
                if (!("currentDirection" in RTCRtpTransceiver.prototype)) return !1;
                var e = new RTCPeerConnection(),
                  t = !1;
                try {
                  e.addTransceiver("audio"), (t = !0);
                } catch (Av) {}
                return e.close(), t;
              })() && (this.sdpSemantics_ = "unified-plan"),
          (this.sdkAppId_ = t.sdkAppId),
          (this.userId_ = t.userId),
          (this.log_ = new pm({ id: "c|" + this.userId_, direction: "local", type: "" })),
          (this.userSig_ = t.userSig),
          (this.roomId_ = 0),
          (this.useStringRoomId_ = t.useStringRoomId || !1),
          (this.recordId_ = null),
          (this.pureAudioPushMode_ = null),
          (this.version_ = t.version),
          this.log_.info("using sdpSemantics: " + this.sdpSemantics_),
          or.setConfig({ sdkAppId: this.sdkAppId_, userId: this.userId_, version: this.version_ }),
          void 0 !== t.recordId)
        ) {
          if (!Number.isInteger(Number(t.recordId)))
            throw new Rh({
              code: Th.INVALID_PARAMETER,
              message: "recordId must be an integer number",
            });
          this.recordId_ = t.recordId;
        }
        var n;
        (this.signalChannel_ = null),
          (this.isScreenShareOnly_ = 0),
          void 0 !== t.isScreenShareOnly && (this.isScreenShareOnly_ = t.isScreenShareOnly ? 1 : 0),
          (this.role_ = "anchor"),
          (this.privateMapKey_ = ""),
          (this.tinyId_ = 0),
          (this.env_ = ""),
          (this.proxy_ = null),
          (this.turnServers_ = []),
          (this.connections_ = new Map()),
          (this.mutedStates_ = new Map()),
          (this.userMap_ = new Map()),
          (this.syncUserListInterval_ = -1),
          (this.localStream_ = null),
          (this.isPublishing_ = !1),
          (this.isUplinkClosing_ = !1),
          (this.uplinkConnection_ = null),
          (this.emitter_ = new Wp()),
          (this.signalInfo_ = {}),
          (this.isSignalReady_ = !1),
          (this.isJoined_ = !1),
          (this.heartbeat_ = -1),
          (this.stats_ = new lm()),
          (this.joinTimeout_ = -1),
          (this.unpublishTimeout_ = -1),
          (this.networkQuality_ = null),
          (this.badCaseDetector_ = null),
          (this.autoSubscribe_ = !!fd(t.autoSubscribe) || t.autoSubscribe),
          (this.startJoinTimestamp_ = new Date()),
          (this.joinedTimestamp_ = new Date()),
          (this.joinOptions = {}),
          (this.basis_ = {
            browser: bf().browserName + "/" + bf().browserVersion,
            os: ((n = "unknown"), Mf.get(!0) && (n = Mf.get(!0)), n),
            displayResolution: Lf(),
            isScreenShareSupported: Cf(),
            isWebRTCSupported: kf(),
            isGetUserMediaSupported: Uf(),
            isWebAudioSupported: Vf(),
            isWebSocketsSupported: "WebSocket" in window && 2 === window.WebSocket.CLOSING,
          }),
          this.initBussinessInfo_(t),
          (this.publishedCDN_ = !1),
          (this.publishCDNData_ = null),
          (this.mixedMCU_ = !1),
          (this.mixTranscodeData_ = null),
          (this.checkSystemResult_ = null),
          (this.enableAudioVolumeEvaluation_ = !1),
          (this.audioVolumeIntervalId_ = null),
          (this.mixTranscodeManager_ = null),
          (this.publishCDNManager_ = null);
      }
      var t, n, r, i, o, a, s, c, u, d, l, p, h, f, m, v, g, _, y, S, b;
      return (
        kt(e, [
          {
            key: "initBussinessInfo_",
            value: function (e) {
              this.bussinessInfo_ = e.bussinessInfo;
              var t = {};
              if (
                ("string" == typeof e.bussinessInfo && (t = JSON.parse(e.bussinessInfo)),
                void 0 !== e.pureAudioPushMode)
              ) {
                if (!Number.isInteger(Number(e.pureAudioPushMode)))
                  throw new Rh({
                    code: Th.INVALID_PARAMETER,
                    message: "pureAudioPushMode must be an integer number",
                  });
                (this.pureAudioPushMode_ = e.pureAudioPushMode),
                  t.Str_uc_params || (t.Str_uc_params = {}),
                  (t.Str_uc_params.pure_audio_push_mod = this.pureAudioPushMode_);
              }
              if (void 0 !== e.streamId) {
                if (
                  !(
                    "string" == typeof e.streamId &&
                    String(e.streamId) &&
                    String(e.streamId).length <= 64
                  )
                )
                  throw new Rh({
                    code: Th.INVALID_PARAMETER,
                    message: "streamId must be a sting literal within 64 bytes, and not be empty",
                  });
                t.Str_uc_params || (t.Str_uc_params = {}),
                  (t.Str_uc_params.userdefine_streamid_main = e.streamId);
              }
              if (void 0 !== e.userDefineRecordId) {
                if (null === e.userDefineRecordId.match(/^[A-Za-z0-9_-]{1,64}$/gi))
                  throw new Rh({
                    code: Th.INVALID_PARAMETER,
                    message:
                      "userDefineRecordId must be a sting literal contains (a-zA-Z),(0-9), underline and hyphen, within 64 bytes, and not be empty",
                  });
                t.Str_uc_params || (t.Str_uc_params = {}),
                  (t.Str_uc_params.userdefine_record_id = e.userDefineRecordId);
              }
              if (void 0 !== e.userDefinePushArgs) {
                if (
                  !(
                    "string" == typeof e.userDefinePushArgs &&
                    String(e.userDefinePushArgs) &&
                    String(e.userDefinePushArgs).length <= 256
                  )
                )
                  throw new Rh({
                    code: Th.INVALID_PARAMETER,
                    message:
                      "userDefinePushArgs must be a sting literal within 256 bytes, and not be empty",
                  });
                t.Str_uc_params || (t.Str_uc_params = {}),
                  (t.Str_uc_params.userdefine_push_args = e.userDefinePushArgs);
              }
              gf(t) || (this.bussinessInfo_ = JSON.stringify(t));
            },
          },
          {
            key: "setProxyServer",
            value: function (e) {
              if (
                (this.log_.info("set proxy server: ".concat(JSON.stringify(e))),
                "string" == typeof e)
              ) {
                if (!e.startsWith("wss://"))
                  throw new Rh({
                    code: Th.INVALID_PARAMETER,
                    message: 'proxy server url shall be started with "wss://"',
                  });
                this.proxy_ = e;
              } else if (dd(e)) {
                var t = e.websocketProxy,
                  n = e.loggerProxy;
                t && (this.proxy_ = t), n && iu(n);
              }
            },
          },
          {
            key: "getUrl",
            value: function (e) {
              var t = sd(e);
              return !ad() && this.proxy_ && (t = this.proxy_), t;
            },
          },
          {
            key: "getBackupUrl",
            value: function () {
              return this.proxy_ ? this.proxy_ : sd(nu);
            },
          },
          {
            key: "getUserId",
            value: function () {
              return this.userId_;
            },
          },
          {
            key: "getRoomId",
            value: function () {
              return this.roomId_;
            },
          },
          {
            key: "getSDKAppId",
            value: function () {
              return this.sdkAppId_;
            },
          },
          {
            key: "getTinyId",
            value: function () {
              return this.tinyId_;
            },
          },
          {
            key: "setTurnServer",
            value: function (e) {
              this.log_.info("set turn server: " + JSON.stringify(e));
              var t = [];
              Array.isArray(e)
                ? e.forEach(function (e) {
                    return t.push(yd(e));
                  })
                : dd(e) && t.push(yd(e)),
                (this.turnServers_ = t);
            },
          },
          {
            key: "initialize",
            value: function () {
              var e = this;
              return new Promise(function (t, n) {
                e.log_.info("setup signal channel"),
                  (e.signalChannel_ = new _f({
                    sdkAppId: e.sdkAppId_,
                    userId: e.userId_,
                    userSig: e.userSig_,
                    url: e.getUrl(tu),
                    backupUrl: e.getUrl(nu),
                    version: e.version_,
                  })),
                  e.networkQuality_ ||
                    ((e.networkQuality_ = new hm({
                      connections: e.connections_,
                      signalChannel: e.signalChannel_,
                      userId: e.userId_,
                    })),
                    e.networkQuality_.on(rm, function (t) {
                      e.emitter_.emit(rm, t);
                    })),
                  e.deviceDetector_ || (e.deviceDetector_ = new fm()),
                  e.subscriptionManager_ || (e.subscriptionManager_ = new Mm({ client: e })),
                  e.badCaseDetector_ || (e.badCaseDetector_ = new Zm({ client: e })),
                  e.callDurationCalculator_ || (e.callDurationCalculator_ = new ov({ client: e })),
                  e.mixTranscodeManager_ ||
                    (e.mixTranscodeManager_ = new rv({
                      client: e,
                      signalChannel: e.signalChannel_,
                    })),
                  e.publishCDNManager_ ||
                    (e.publishCDNManager_ = new iv({ client: e, signalChannel: e.signalChannel_ })),
                  e.signalChannel_.on(Jp, function (t) {
                    switch (
                      (e.log_.info(
                        "SignalChannel state changed from "
                          .concat(t.prevState, " to ")
                          .concat(t.state)
                      ),
                      t.state)
                    ) {
                      case Yp:
                        t.prevState === $p
                          ? (e.log_.warn("signal channel reconnect successfully"),
                            e.syncUserList(),
                            ff({ eventType: Mu }))
                          : t.prevState === Xp && ff({ eventType: Nu });
                    }
                    e.emitter_.emit(Kf, t);
                  }),
                  e.signalChannel_.on(qp, function (t) {
                    e.isSignalReady_
                      ? (e.closeUplink(), e.closeConnections(), e.emitter_.emit(om, t))
                      : n(t);
                  }),
                  e.signalChannel_.on(th.CHANNEL_SETUP_FAILED, function (t) {
                    e.log_.error("signal channel setup failed"), n(t);
                  }),
                  e.signalChannel_.on(th.CHANNEL_SETUP_SUCCESS, function (n) {
                    (e.signalInfo_ = n.signalInfo),
                      (e.tinyId_ = e.signalInfo_.tinyId),
                      e.isSignalReady_ || ((e.isSignalReady_ = !0), t());
                  }),
                  e.signalChannel_.on(th.PEER_JOIN, e.onPeerJoin, e),
                  e.signalChannel_.on(th.PEER_LEAVE, e.onPeerLeave, e),
                  e.signalChannel_.on(th.STREAM_ADDED, function (t) {
                    e.onRemoteStreamAdded(t.data);
                  }),
                  e.signalChannel_.on(th.STREAM_REMOVED, function (t) {
                    e.onRemoteStreamRemoved(t.data);
                  }),
                  e.signalChannel_.on(th.UPDATE_REMOTE_MUTE_STAT, function (t) {
                    e.onPublishedUserList(t.data), e.onUpdateRemoteMuteStat(t.data);
                  }),
                  e.signalChannel_.on(
                    th.CLINET_BANNED,
                    (function () {
                      var t = yt(
                        regeneratorRuntime.mark(function t(n) {
                          var r, i;
                          return regeneratorRuntime.wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (r = n.data.content), (t.next = 3), e.reset();
                                case 3:
                                  (i = r.type),
                                    "banned" === r.type
                                      ? (i = "you got banned by account admin")
                                      : "kick" === r.type &&
                                        (i = "duplicated userId joining the room"),
                                    e.log_.error(
                                      "user was banned because of [".concat(r.type, "]")
                                    ),
                                    e.onClientBanned(i);
                                case 7:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()
                  ),
                  e.signalChannel_.on(th.REQUEST_REBUILD_SESSION, function (t) {
                    e.signalInfo_ = t.signalInfo;
                    var n = [];
                    e.connections_ && n.push(0);
                    var r,
                      i = [],
                      o = jt(e.connections_);
                    try {
                      for (o.s(); !(r = o.n()).done; ) {
                        var a = Mt(r.value, 2),
                          s = a[0],
                          c = a[1];
                        n.push(s);
                        var u = c.getPeerConnection();
                        if (u) {
                          var d = u.remoteDescription;
                          d && i.push(d.sdp);
                        }
                      }
                    } catch (p) {
                      o.e(p);
                    } finally {
                      o.f();
                    }
                    var l = {
                      socketid: e.signalInfo_.socketId,
                      tinyid: e.tinyId_,
                      appid: e.sdkAppId_,
                      openid: e.userId_,
                      sessionid: String(e.roomId_),
                      sids: n,
                      relayInfo: e.signalInfo_.relayInnerIp,
                      remotesdp: i,
                      useStrRoomid: !!e.useStringRoomId_ && 1,
                    };
                    e.log_.debug(
                      "reconnect - rebuild session with data: ".concat(JSON.stringify(l))
                    ),
                      e.signalChannel_.send(ah, l);
                  }),
                  e.signalChannel_.on(
                    th.CLIENT_REJOIN,
                    (function () {
                      var t = yt(
                        regeneratorRuntime.mark(function t(n) {
                          return regeneratorRuntime.wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.next = 2), e.reJoin();
                                case 2:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()
                  ),
                  (e.getUserList = tv({
                    retryFunction: e.getUserList,
                    settings: { retries: 3 },
                    onError: function (e, t) {
                      return t();
                    },
                    onRetrying: function (t) {
                      e.log_.info("retrying to get user list [".concat(t, "/3]"));
                    },
                  })),
                  e.signalChannel_.connect();
              });
            },
          },
          {
            key: "join",
            value:
              ((b = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r, i, o, a, s;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (n = bf()), (e.next = 3), If();
                          case 3:
                            if (
                              ((this.checkSystemResult_ = e.sent),
                              (r = ad()) ||
                                ((r = "qcloud"),
                                this.proxy_ &&
                                  (this.proxy_.startsWith(Zc)
                                    ? (r = "trtc")
                                    : this.proxy_.startsWith(eu) && (r = "webrtc"))),
                              (this.env_ = r),
                              df({
                                env: r,
                                sdkAppId: this.sdkAppId_,
                                userId: this.userId_,
                                version: this.version_,
                                browserVersion: n.name + n.version,
                                ua: navigator.userAgent,
                              }),
                              this.uploadTrtcStats(),
                              (i = this.checkSystemResult_.detail),
                              (o = i.isH264EncodeSupported),
                              (a = i.isVp8EncodeSupported),
                              kf() && (o || a))
                            ) {
                              e.next = 12;
                              break;
                            }
                            throw new Rh({
                              code: Th.NOT_SUPPORTED,
                              message: "the browser does NOT support WebRTC!",
                            });
                          case 12:
                            if (!this.useStringRoomId_) {
                              e.next = 18;
                              break;
                            }
                            if (
                              md(t.roomId) &&
                              /^[A-Za-z\d\s!#$%&()+\-:;<=.>?@[\]^_{}|~,]{1,64}$/.test(t.roomId)
                            ) {
                              e.next = 16;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_PARAMETER,
                              message:
                                "roomId must be validate string when useStringRoomId is true",
                            });
                          case 16:
                            e.next = 21;
                            break;
                          case 18:
                            if (
                              vd(t.roomId) &&
                              /^[1-9]\d*$/.test(String(t.roomId)) &&
                              t.roomId < 4294967295
                            ) {
                              e.next = 21;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_PARAMETER,
                              message:
                                "roomId must be validate integer when useStringRoomId is false",
                            });
                          case 21:
                            return (
                              (this.joinOptions = t),
                              (this.startJoinTimestamp_ = new Date()),
                              sf(this.userId_, {
                                eventId: Hh,
                                eventDesc: "joining room",
                                timestamp: ds(),
                                userId: this.userId_,
                                tinyId: this.tinyId_,
                              }),
                              (e.prev = 24),
                              (e.next = 27),
                              this.initialize()
                            );
                          case 27:
                            e.next = 33;
                            break;
                          case 29:
                            throw (
                              ((e.prev = 29),
                              (e.t0 = e.catch(24)),
                              mf({ eventType: vu, error: e.t0 }),
                              e.t0)
                            );
                          case 33:
                            return (e.prev = 33), (e.next = 36), this.doJoin(t);
                          case 36:
                            e.next = 42;
                            break;
                          case 38:
                            throw (
                              ((e.prev = 38),
                              (e.t1 = e.catch(33)),
                              mf({ eventType: vu, error: e.t1 }),
                              e.t1)
                            );
                          case 42:
                            (this.joinedTimestamp_ = new Date()),
                              (s = this.joinedTimestamp_ - this.startJoinTimestamp_),
                              ff({ eventType: gu, delta: s }),
                              ff({ eventType: vu });
                          case 46:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [
                      [24, 29],
                      [33, 38],
                    ]
                  );
                })
              )),
              function (e) {
                return b.apply(this, arguments);
              }),
          },
          {
            key: "uploadTrtcStats",
            value:
              ((S = yt(
                regeneratorRuntime.mark(function e() {
                  var t, n, r, i, o, a, s, c, u, d, l, p;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = "undefined"),
                              (n = "undefined"),
                              (e.prev = 2),
                              (e.next = 5),
                              Pv.getMicrophones()
                            );
                          case 5:
                            (r = e.sent), (t = r && r.length), (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9), (e.t0 = e.catch(2)), (t = "undefined");
                          case 12:
                            return (e.prev = 12), (e.next = 15), Pv.getCameras();
                          case 15:
                            (i = e.sent), (n = i && i.length), (e.next = 22);
                            break;
                          case 19:
                            (e.prev = 19), (e.t1 = e.catch(12)), (n = "undefined");
                          case 22:
                            (o = { microphone: t, camera: n }),
                              (a = this.checkSystemResult_.detail),
                              (s = a.isH264EncodeSupported),
                              (c = a.isVp8EncodeSupported),
                              (u = a.isH264DecodeSupported),
                              (d = a.isVp8DecodeSupported),
                              (l = {
                                webRTC: this.basis_.isWebRTCSupported,
                                getUserMedia: this.basis_.isGetUserMediaSupported,
                                webSocket: this.basis_.isWebSocketsSupported,
                                screenShare: this.basis_.isScreenShareSupported,
                                webAudio: this.basis_.isWebAudioSupported,
                                h264Encode: s,
                                h264Decode: u,
                                vp8Encode: c,
                                vp8Decode: d,
                              }),
                              (p = {
                                browser: this.basis_.browser,
                                os: this.basis_.os,
                                trtc: l,
                                devices: o,
                              }),
                              lf("trtcstats-" + JSON.stringify(p)),
                              this.log_.info("TrtcStats-" + JSON.stringify(p));
                          case 28:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [
                      [2, 9],
                      [12, 19],
                    ]
                  );
                })
              )),
              function () {
                return S.apply(this, arguments);
              }),
          },
          {
            key: "getVersion",
            value: function () {
              var e = this.version_.split(".");
              return 1e3 * parseInt(e[0]) + 100 * parseInt(e[1]) + parseInt(e[2]);
            },
          },
          {
            key: "doJoin",
            value: function (e) {
              var t = this;
              return new Promise(function (n, r) {
                if (!t.isSignalReady_)
                  throw new Rh({
                    code: Th.INVALID_OPERATION,
                    message: "SignalChannel is not ready yet",
                  });
                if (t.isJoined_)
                  throw new Rh({ code: Th.INVALID_OPERATION, message: "duplicate join() called" });
                (t.roomId_ = e.roomId), void 0 !== e.role && (t.role_ = e.role);
                var i = "";
                void 0 !== e.privateMapKey && (i = e.privateMapKey),
                  (t.privateMapKey_ = i),
                  t.log_.info(
                    "Join() => joining room: "
                      .concat(e.roomId, " useStringRoomId: ")
                      .concat(t.useStringRoomId_, " mode: ")
                      .concat(t.mode_, " role: ")
                      .concat(t.role_)
                  );
                var o = t.signalInfo_,
                  a = {
                    openid: o.openId,
                    tinyid: o.tinyId,
                    peerconnectionport: "",
                    useStrRoomid: !!t.useStringRoomId_ && 1,
                    roomid: String(e.roomId),
                    sdkAppID: String(t.sdkAppId_),
                    socketid: o.socketId,
                    userSig: t.userSig_,
                    privMapEncrypt: i,
                    privMap: "",
                    relayip: o.relayInnerIp,
                    dataport: o.dataPort,
                    stunport: o.stunPort,
                    checkSigSeq: o.checkSigSeq,
                    pstnBizType: 0,
                    pstnPhoneNumber: null,
                    recordId: t.recordId_,
                    role: "user",
                    jsSdkVersion: String(t.getVersion()),
                    sdpSemantics: t.sdpSemantics_,
                    browserVersion: Kc,
                    closeLocalMedia: !0,
                    trtcscene: "live" === t.mode_ ? au : ou,
                    trtcrole: "anchor" === t.role_ ? su : cu,
                    bussinessInfo: t.bussinessInfo_,
                    isAuxUser: t.isScreenShareOnly_,
                    autoSubscribe: t.autoSubscribe_,
                  };
                (t.joinTimeout_ = setTimeout(function () {
                  t.log_.error("join room timeout observed"),
                    r(new Rh({ code: Th.JOIN_ROOM_FAILED, message: "join room timeout" }));
                }, 5e3)),
                  t.signalChannel_.sendWithReport(rh, a, {
                    AbilityOption: {
                      GeneralLimit: {
                        CPULimit: {
                          uint32_CPU_num: String(navigator.hardwareConcurrency || 0),
                          str_CPU_name: String(navigator.platform),
                          uint32_CPU_maxfreq: String(0),
                          model: "",
                          uint32_total_memory: String(0),
                        },
                        uint32_terminal_type: String(
                          qs ? 4 : Hs ? 2 : Gs ? 3 : Cc ? 12 : Ic ? 5 : Ec ? 13 : 1
                        ),
                        uint32_device_type: String(0),
                        str_os_verion: qs
                          ? "Android"
                          : Hs
                          ? "iPhone"
                          : Gs
                          ? "iPad"
                          : Cc
                          ? "Mac"
                          : Ic
                          ? "Windows"
                          : Ec
                          ? "Linux"
                          : "unknown",
                        uint32_link_type: String(1),
                        str_client_version: "4.10.1",
                        uint32_net_type: String(ud()),
                        ua: navigator.userAgent,
                        version: "",
                      },
                    },
                  }),
                  t.signalChannel_.once(th.JOIN_ROOM_RESULT, function (e) {
                    clearTimeout(t.joinTimeout_), (t.joinTimeout_ = -1);
                    var i = e.data.content.ret;
                    i
                      ? (t.log_.error(
                          "Join room failed result: " + i + " error: " + e.data.content.error
                        ),
                        r(
                          new Rh({
                            code: Th.JOIN_ROOM_FAILED,
                            extraCode: i,
                            message: "Failed to join room - " + e.data.content.error,
                          })
                        ))
                      : ((t.isJoined_ = !0),
                        t.log_.info("Join room success, start heartbeat"),
                        t.startHeartbeat(),
                        t.badCaseDetector_ && t.badCaseDetector_.start(),
                        t.syncUserList(),
                        t.startSyncUserListInterval(),
                        n());
                  });
              });
            },
          },
          {
            key: "connectSignalBeforeReJoin",
            value: function () {
              var e = this;
              return new Promise(function (t, n) {
                e.log_.warn("connectSignalBeforeReJoin() try to connect signal before reJoin"),
                  (e.isSignalReady_ = !1),
                  e.signalChannel_.close(),
                  e.signalChannel_.once(th.CHANNEL_SETUP_SUCCESS, function (n) {
                    e.log_.warn("connectSignalBeforeReJoin() signal setup successfully"), t();
                  }),
                  e.signalChannel_.once(qp, function (t) {
                    e.log_.warn("connectSignalBeforeReJoin() signal setup failed"), n(t);
                  }),
                  e.signalChannel_.connect();
              });
            },
          },
          {
            key: "reJoin",
            value:
              ((y = yt(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this.isJoined_) {
                              e.next = 3;
                              break;
                            }
                            return (
                              this.log_.warn("reJoin() you haven't join room yet, abort reJoin"),
                              e.abrupt("return")
                            );
                          case 3:
                            return (
                              (this.isJoined_ = !1),
                              (e.prev = 4),
                              this.log_.warn(
                                "reJoin() try to reJoin room: ".concat(this.joinOptions.roomId)
                              ),
                              this.subscriptionManager_ &&
                                this.subscriptionManager_.markAllStream(),
                              (e.next = 9),
                              this.connectSignalBeforeReJoin()
                            );
                          case 9:
                            return (e.next = 11), this.doJoin(this.joinOptions);
                          case 11:
                            if (
                              (this.log_.warn("reJoin() reJoin successfully"),
                              ff({ eventType: _u }),
                              (e.prev = 13),
                              !this.uplinkConnection_ ||
                                !this.localStream_ ||
                                this.uplinkConnection_.getIsReconnecting())
                            ) {
                              e.next = 17;
                              break;
                            }
                            return (e.next = 17), this.republish();
                          case 17:
                            e.next = 21;
                            break;
                          case 19:
                            (e.prev = 19), (e.t0 = e.catch(13));
                          case 21:
                            e.next = 28;
                            break;
                          case 23:
                            (e.prev = 23),
                              (e.t1 = e.catch(4)),
                              this.log_.warn("reJoin() reJoin failed" + e.t1),
                              mf({ eventType: _u, error: e.t1 }),
                              this.emitter_.emit(
                                om,
                                new Rh({
                                  code: Th.JOIN_ROOM_FAILED,
                                  message: "reJoin room: ".concat(
                                    this.joinOptions.roomId,
                                    " failed, please check your network"
                                  ),
                                })
                              );
                          case 28:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [
                      [4, 23],
                      [13, 19],
                    ]
                  );
                })
              )),
              function () {
                return y.apply(this, arguments);
              }),
          },
          {
            key: "republish",
            value:
              ((_ = yt(
                regeneratorRuntime.mark(function e() {
                  var t;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              this.log_.warn("republish() try to re-publish localStream"),
                              (t = this.localStream_),
                              (e.next = 5),
                              this.doUnpublish(t)
                            );
                          case 5:
                            return (e.next = 7), this.publish(t);
                          case 7:
                            this.log_.warn("republish() re-publish localStream successfully"),
                              (e.next = 14);
                            break;
                          case 10:
                            throw (
                              ((e.prev = 10),
                              (e.t0 = e.catch(0)),
                              this.log_.warn("republish() re-publish localStream failed " + e.t0),
                              e.t0)
                            );
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[0, 10]]
                  );
                })
              )),
              function () {
                return _.apply(this, arguments);
              }),
          },
          {
            key: "leave",
            value:
              ((g = yt(
                regeneratorRuntime.mark(function e() {
                  var t;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              sf(this.userId_, {
                                eventId: Wh,
                                eventDesc: "leaving room",
                                timestamp: ds(),
                                userId: this.userId_,
                                tinyId: this.tinyId_,
                              }),
                              (e.prev = 1),
                              (e.next = 4),
                              this.doHeartbeat()
                            );
                          case 4:
                            e.next = 8;
                            break;
                          case 6:
                            (e.prev = 6), (e.t0 = e.catch(1));
                          case 8:
                            return (e.prev = 8), (e.next = 11), this.doLeave();
                          case 11:
                            e.next = 15;
                            break;
                          case 13:
                            (e.prev = 13), (e.t1 = e.catch(8));
                          case 15:
                            ff({ eventType: yu }),
                              (t = Math.floor((new Date() - this.joinedTimestamp_) / 1e3)),
                              ff({ eventType: Su, delta: t });
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [
                      [1, 6],
                      [8, 13],
                    ]
                  );
                })
              )),
              function () {
                return g.apply(this, arguments);
              }),
          },
          {
            key: "doLeave",
            value: function () {
              var e = this;
              return new Promise(
                (function () {
                  var t = yt(
                    regeneratorRuntime.mark(function t(n, r) {
                      return regeneratorRuntime.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (e.isJoined_) {
                                t.next = 2;
                                break;
                              }
                              return t.abrupt("return", n());
                            case 2:
                              return (
                                e.log_.info("leave() => leaving room"),
                                e.signalChannel_.send(ih),
                                (t.next = 6),
                                e.reset()
                              );
                            case 6:
                              return t.abrupt("return", n());
                            case 7:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })()
              );
            },
          },
          {
            key: "clearUnpublishTimeout",
            value: function () {
              this.unpublishTimeout_ &&
                (clearTimeout(this.unpublishTimeout_), (this.unpublishTimeout_ = -1));
            },
          },
          {
            key: "clearNetworkQuality",
            value: function () {
              this.networkQuality_ && (this.networkQuality_.stop(), (this.networkQuality_ = null));
            },
          },
          {
            key: "closeConnections",
            value: function () {
              var e = this;
              this.connections_.forEach(function (t) {
                e.closeDownLink(t.getTinyId());
              });
            },
          },
          {
            key: "destroy",
            value: function () {
              if (this.isJoined_)
                throw (
                  (this.log_.warn("please call leave() before destroy() client"),
                  new Rh({
                    code: Th.INVALID_OPERATION,
                    message: "Please call leave() before destory() the client",
                  }))
                );
              this.log_.info("destroying SignalChannel"),
                this.signalChannel_ && (this.signalChannel_.close(), (this.signalChannel_ = null));
            },
          },
          {
            key: "reset",
            value:
              ((v = yt(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              this.mixTranscodeManager_ &&
                                (this.mixTranscodeManager_.stop(),
                                (this.mixTranscodeManager_ = null)),
                              this.publishCDNManager_ && (this.publishCDNManager_ = null),
                              this.stopSyncUserListInterval(),
                              this.stopHeartbeat(),
                              this.closeConnections(),
                              this.mutedStates_.clear(),
                              this.clearUnpublishTimeout(),
                              this.clearNetworkQuality(),
                              this.badCaseDetector_ &&
                                this.callDurationCalculator_ &&
                                this.uploadAllCallStats(),
                              (e.prev = 9),
                              (e.next = 12),
                              this.closeUplink()
                            );
                          case 12:
                            e.next = 16;
                            break;
                          case 14:
                            (e.prev = 14), (e.t0 = e.catch(9));
                          case 16:
                            (this.isJoined_ = !1), (this.isSignalReady_ = !1), this.destroy();
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[9, 14]]
                  );
                })
              )),
              function () {
                return v.apply(this, arguments);
              }),
          },
          {
            key: "startSyncUserListInterval",
            value: function () {
              "live" === this.mode_ &&
                "audience" === this.role_ &&
                -1 === this.syncUserListInterval_ &&
                (this.syncUserListInterval_ = cs.setInterval(this.syncUserList.bind(this), 1e4));
            },
          },
          {
            key: "stopSyncUserListInterval",
            value: function () {
              cs.clearInterval(this.syncUserListInterval_), (this.syncUserListInterval_ = -1);
            },
          },
          {
            key: "syncUserList",
            value:
              ((m = yt(
                regeneratorRuntime.mark(function e() {
                  var t,
                    n = this;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), this.getUserList();
                          case 3:
                            (t = e.sent),
                              0 !== this.userMap_.size &&
                                this.userMap_.forEach(function (e) {
                                  t.findIndex(function (t) {
                                    return t.userId === e.userId;
                                  }) < 0 &&
                                    (n.log_.info("peer leave detected: ".concat(e.userId)),
                                    n.cleanUser({ userId: e.userId, tinyId: e.tinyId }));
                                }),
                              t.forEach(function (e) {
                                var t = e.userId;
                                n.userMap_.has(t) ||
                                  t === n.userId_ ||
                                  (n.userMap_.set(t, e), n.emitter_.emit(Xf, { userId: t }));
                              }),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              this.log_.warn("sync user list failed: " + e.t0);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[0, 8]]
                  );
                })
              )),
              function () {
                return m.apply(this, arguments);
              }),
          },
          {
            key: "getUserList",
            value: function () {
              var e = this;
              return new Promise(function (t, n) {
                e.signalChannel_.send(bh),
                  e.signalChannel_.once(th.USER_LIST_RES, function (e) {
                    var n = e.data.content.userlist.map(function (e) {
                      var t = e.userid,
                        n = e.srctinyid,
                        r = e.role;
                      return new ev({ userId: t, tinyId: n, role: r });
                    });
                    t(n);
                  }),
                  setTimeout(n, 2e3);
              });
            },
          },
          {
            key: "publish",
            value: function (e) {
              var t = this;
              return new Promise(
                (function () {
                  var n = yt(
                    regeneratorRuntime.mark(function n(r, i) {
                      var o, a, s, c;
                      return regeneratorRuntime.wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                if (yf.result) {
                                  n.next = 2;
                                  break;
                                }
                                throw new Rh({
                                  code: Th.NOT_SUPPORTED,
                                  message: "the browser does NOT support TRTC!",
                                });
                              case 2:
                                if (t.isJoined_) {
                                  n.next = 4;
                                  break;
                                }
                                throw new Rh({
                                  code: Th.INVALID_OPERATION,
                                  message: "please call join() before publish()",
                                });
                              case 4:
                                if ("live" !== t.mode_ || "audience" !== t.role_) {
                                  n.next = 6;
                                  break;
                                }
                                throw new Rh({
                                  code: Th.INVALID_OPERATION,
                                  message: "no permission to publish() under live/"
                                    .concat("audience", ', please call switchRole("')
                                    .concat("anchor", '") firstly before publish()'),
                                });
                              case 6:
                                if (!t.localStream_) {
                                  n.next = 8;
                                  break;
                                }
                                throw new Rh({
                                  code: Th.INVALID_OPERATION,
                                  message:
                                    "duplicate publishing, please unpublish and then re-publish",
                                });
                              case 8:
                                if (!t.isPublishing_) {
                                  n.next = 10;
                                  break;
                                }
                                throw new Rh({
                                  code: Th.INVALID_OPERATION,
                                  message:
                                    "previous publishing is ongoing, please avoid re-publishing",
                                });
                              case 10:
                                if (e.getIsReadyToPublish()) {
                                  n.next = 12;
                                  break;
                                }
                                throw new Rh({
                                  code: Th.INVALID_OPERATION,
                                  message:
                                    "cannot publish stream because stream is not initialized or is switching device",
                                });
                              case 12:
                                return (
                                  (t.isPublishing_ = !0),
                                  e.setPublishState(rd),
                                  (o = new Date()),
                                  t.log_.info("publish() => publishing local stream"),
                                  (a = new $m({
                                    userId: t.userId_,
                                    tinyId: t.tinyId_,
                                    client: t,
                                    isUplink: !0,
                                    signalChannel: t.signalChannel_,
                                  })).initialize(),
                                  (n.prev = 18),
                                  (n.next = 21),
                                  a.publish(e)
                                );
                              case 21:
                                (t.localStream_ = n.sent),
                                  t.log_.info("local stream publish successfully"),
                                  (t.isPublishing_ = !1),
                                  e.setPublishState(id),
                                  t.localStream_.setConnection(a),
                                  (t.uplinkConnection_ = a),
                                  (s = new Date()),
                                  (c = s - o),
                                  ff({ eventType: bu }),
                                  ff({ eventType: ku, delta: c }),
                                  e.hasAudio() &&
                                    sf(t.userId_, {
                                      eventId: Ih,
                                      eventDesc: "publish audio track",
                                      timestamp: ds(),
                                      userId: t.userId_,
                                      tinyId: t.tinyId_,
                                    }),
                                  e.hasVideo() &&
                                    sf(t.userId_, {
                                      eventId: wh,
                                      eventDesc: "publish video track",
                                      timestamp: ds(),
                                      userId: t.userId_,
                                      tinyId: t.tinyId_,
                                    }),
                                  t.networkQuality_ &&
                                    t.networkQuality_.setUplinkConnection(t.uplinkConnection_),
                                  t.deviceDetector_ &&
                                    t.deviceDetector_.setLocalStream(t.localStream_),
                                  Tm.emit(Em, { localStream: t.localStream_ }),
                                  r(),
                                  (n.next = 47);
                                break;
                              case 39:
                                (n.prev = 39),
                                  (n.t0 = n.catch(18)),
                                  (t.isPublishing_ = !1),
                                  e.setPublishState(nd),
                                  a.close(),
                                  t.log_.error("failed to publish stream " + n.t0),
                                  mf({ eventType: bu, error: n.t0 }),
                                  i(n.t0);
                              case 47:
                                a.on(
                                  Gf,
                                  (function () {
                                    var e = yt(
                                      regeneratorRuntime.mark(function e(n) {
                                        var r;
                                        return regeneratorRuntime.wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                if ((r = n.getCode()) !== Th.ICE_TRANSPORT_ERROR) {
                                                  e.next = 3;
                                                  break;
                                                }
                                                return e.abrupt("return");
                                              case 3:
                                                if (r !== Th.UPLINK_RECONNECTION_FAILED) {
                                                  e.next = 6;
                                                  break;
                                                }
                                                return (e.next = 6), t.closeUplink();
                                              case 6:
                                                t.emitter_.emit(om, n);
                                              case 7:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      })
                                    );
                                    return function (t) {
                                      return e.apply(this, arguments);
                                    };
                                  })()
                                );
                              case 48:
                              case "end":
                                return n.stop();
                            }
                        },
                        n,
                        null,
                        [[18, 39]]
                      );
                    })
                  );
                  return function (e, t) {
                    return n.apply(this, arguments);
                  };
                })()
              );
            },
          },
          {
            key: "unpublish",
            value: function (e) {
              var t = this;
              return new Promise(function (n, r) {
                if (t.isPublishing_)
                  throw new Rh({
                    code: Th.INVALID_OPERATION,
                    message: "unpublish() is being called during publish() is ongoing",
                  });
                if (e !== t.localStream_)
                  throw new Rh({
                    code: Th.INVALID_PARAMETER,
                    message: "stream has not been published yet",
                  });
                t.log_.info("unpublish() => unpublishing local stream"),
                  t
                    .doUnpublish()
                    .then(function () {
                      ff({ eventType: Tu }), n();
                    })
                    .catch(function (e) {
                      mf({ eventType: Tu, error: e }), r(e);
                    });
              });
            },
          },
          {
            key: "doUnpublish",
            value: function () {
              var e = this;
              return new Promise(function (t, n) {
                e.signalChannel_.send(lh),
                  (e.unpublishTimeout_ = setTimeout(
                    yt(
                      regeneratorRuntime.mark(function n() {
                        return regeneratorRuntime.wrap(function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  e.log_.warn("unpublish() timeout observed"),
                                  (n.next = 3),
                                  e.closeUplink()
                                );
                              case 3:
                                return n.abrupt("return", t());
                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                      })
                    ),
                    5e3
                  )),
                  e.signalChannel_.once(
                    th.UNPUBLISH_RESULT,
                    (function () {
                      var n = yt(
                        regeneratorRuntime.mark(function n(r) {
                          return regeneratorRuntime.wrap(function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  return (
                                    e.clearUnpublishTimeout(),
                                    e.log_.info(
                                      "received UNPUBLISH_RESULT, close uplink connection"
                                    ),
                                    (n.next = 4),
                                    e.closeUplink()
                                  );
                                case 4:
                                  return n.abrupt("return", t());
                                case 5:
                                case "end":
                                  return n.stop();
                              }
                          }, n);
                        })
                      );
                      return function (e) {
                        return n.apply(this, arguments);
                      };
                    })()
                  );
              });
            },
          },
          {
            key: "closeUplink",
            value:
              ((f = yt(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!this.isUplinkClosing_) {
                              e.next = 3;
                              break;
                            }
                            return (
                              this.log_.warn(
                                "uplink is closing, abort current closeUplink request"
                              ),
                              e.abrupt("return")
                            );
                          case 3:
                            (this.isUplinkClosing_ = !0),
                              this.uplinkConnection_ &&
                                (this.uplinkConnection_.getIsReconnecting() &&
                                  this.uplinkConnection_.stopReconnection(),
                                this.uplinkConnection_.close(),
                                (this.uplinkConnection_ = null),
                                this.networkQuality_ &&
                                  this.networkQuality_.setUplinkConnection(null),
                                this.localStream_.hasAudio() &&
                                  sf(this.userId_, {
                                    eventId: Eh,
                                    eventDesc: "unpublish audio track",
                                    timestamp: ds(),
                                    userId: this.userId_,
                                    tinyId: this.tinyId_,
                                  }),
                                this.localStream_.hasVideo() &&
                                  sf(this.userId_, {
                                    eventId: Ch,
                                    eventDesc: "unpublish video track",
                                    timestamp: ds(),
                                    userId: this.userId_,
                                    tinyId: this.tinyId_,
                                  }),
                                this.localStream_.setConnection(null),
                                (this.localStream_ = null),
                                this.deviceDetector_ && this.deviceDetector_.setLocalStream(null)),
                              (this.isUplinkClosing_ = !1);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function () {
                return f.apply(this, arguments);
              }),
          },
          {
            key: "closeDownLink",
            value: function (e) {
              var t = this.connections_.get(e);
              t &&
                (t.getIsReconnecting() && t.stopReconnection(),
                this.subscriptionManager_ && this.subscriptionManager_.delete(t.getUserId()),
                t.close(),
                this.connections_.delete(e),
                this.mutedStates_.delete(e));
            },
          },
          {
            key: "subscribe",
            value:
              ((h = yt(
                regeneratorRuntime.mark(function e(t, n) {
                  var r;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (t) {
                              e.next = 2;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_PARAMETER,
                              message: "stream is undefined or null",
                            });
                          case 2:
                            if (t.isRemote()) {
                              e.next = 4;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_PARAMETER,
                              message: "try to subscribe a local stream",
                            });
                          case 4:
                            return (
                              this.log_.info(
                                "subscribe() => subscribe to ["
                                  .concat(t.getUserId(), "] ")
                                  .concat(t.getType(), " stream with options: ")
                                  .concat(JSON.stringify(n))
                              ),
                              fd(n) && (n = { audio: !0, video: !0 }),
                              fd(n.video) && (n.video = !0),
                              fd(n.audio) && (n.audio = !0),
                              (r = t.getConnection()),
                              (e.prev = 9),
                              (e.next = 12),
                              r.subscribe(t, n)
                            );
                          case 12:
                            this.subscriptionManager_ &&
                              this.subscriptionManager_.addSubscriptionRecord(t.getUserId(), t, n),
                              Tm.emit(Im, { source: this, stream: t }),
                              ff({ eventType: Ru }),
                              (e.next = 21);
                            break;
                          case 17:
                            throw (
                              ((e.prev = 17),
                              (e.t0 = e.catch(9)),
                              mf({ eventType: Ru, error: e.t0 }),
                              e.t0)
                            );
                          case 21:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[9, 17]]
                  );
                })
              )),
              function (e, t) {
                return h.apply(this, arguments);
              }),
          },
          {
            key: "unsubscribe",
            value:
              ((p = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (t) {
                              e.next = 2;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_PARAMETER,
                              message: "stream is undefined or null",
                            });
                          case 2:
                            if (t.isRemote()) {
                              e.next = 4;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_PARAMETER,
                              message: "try to unsubscribe a local stream",
                            });
                          case 4:
                            return (
                              this.log_.info(
                                "unsubscribe() => unsubscribe to ["
                                  .concat(t.getUserId(), "] ")
                                  .concat(t.getType(), " stream")
                              ),
                              (n = t.getConnection()),
                              (e.prev = 6),
                              (e.next = 9),
                              n.unsubscribe(t)
                            );
                          case 9:
                            this.subscriptionManager_ &&
                              this.subscriptionManager_.addUnsubscriptionRecord(t.getUserId(), t),
                              Tm.emit(Cm, { source: this, stream: t }),
                              ff({ eventType: wu }),
                              (e.next = 18);
                            break;
                          case 14:
                            throw (
                              ((e.prev = 14),
                              (e.t0 = e.catch(6)),
                              mf({ eventType: wu, error: e.t0 }),
                              e.t0)
                            );
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[6, 14]]
                  );
                })
              )),
              function (e) {
                return p.apply(this, arguments);
              }),
          },
          {
            key: "switchRole",
            value:
              ((l = yt(
                regeneratorRuntime.mark(function e(t) {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("live" === this.mode_) {
                              e.next = 2;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_PARAMETER,
                              message: "role is only valid in live mode",
                            });
                          case 2:
                            if ("anchor" === t || "audience" === t) {
                              e.next = 4;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_PARAMETER,
                              message: "role could only be set to a value as "
                                .concat("anchor", " or ")
                                .concat("audience"),
                            });
                          case 4:
                            if (this.isJoined_) {
                              e.next = 6;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message: "Please call join() before switchRole()",
                            });
                          case 6:
                            if (this.role_ !== t) {
                              e.next = 8;
                              break;
                            }
                            return e.abrupt("return");
                          case 8:
                            if ("audience" !== t || !this.localStream_) {
                              e.next = 11;
                              break;
                            }
                            return (e.next = 11), this.unpublish(this.localStream_);
                          case 11:
                            return (
                              this.log_.info("switchRole() => switch role to: " + t),
                              (e.next = 14),
                              this.doSwitchRole(t)
                            );
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e) {
                return l.apply(this, arguments);
              }),
          },
          {
            key: "doSwitchRole",
            value: function (e) {
              var t = this;
              return new Promise(function (n, r) {
                var i = {
                  trtcscene: "live" === t.mode_ ? au : ou,
                  trtcrole: "anchor" === e ? su : cu,
                };
                t.log_.info("switchRole signal data: " + JSON.stringify(i));
                var o = setTimeout(function () {
                    t.log_.error("switchRole timeout observed"),
                      t.signalChannel_.off(th.SWITCH_ROLE_RES, a),
                      r(new Rh({ code: Th.SWITCH_ROLE_FAILED, message: "switchRole timeout" }));
                  }, 5e3),
                  a = function (i) {
                    clearTimeout(o);
                    var a = i.data.content,
                      s = a.errCode,
                      c = a.errMsg;
                    0 === s
                      ? ((t.role_ = e), n())
                      : (t.log_.error(
                          "switchRole failed, errCode: ".concat(s, ", errMsg: ").concat(c)
                        ),
                        r(
                          new Rh({
                            code: Th.SWITCH_ROLE_FAILED,
                            message: "switchRole failed, errMsg: ".concat(c),
                          })
                        ));
                  };
                t.signalChannel_.once(th.SWITCH_ROLE_RES, a), t.signalChannel_.send(kh, i);
              });
            },
          },
          {
            key: "on",
            value: function (e, t, n) {
              this.emitter_.on(e, t, n);
            },
          },
          {
            key: "off",
            value: function (e, t, n) {
              "*" === e ? this.emitter_.removeAllListeners() : this.emitter_.off(e, t, n);
            },
          },
          {
            key: "getRemoteMutedState",
            value: function () {
              var e = this,
                t = [];
              return (
                this.mutedStates_.forEach(function (n, r, i) {
                  var o = e.connections_.get(r);
                  o && t.push(wt({ userId: o.getUserId() }, n));
                }),
                t
              );
            },
          },
          {
            key: "getTransportStats",
            value:
              ((d = yt(
                regeneratorRuntime.mark(function e() {
                  var t, n, r, i, o, a, s;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((t = { rtt: 0, downlinksRTT: {} }), !this.uplinkConnection_)) {
                              e.next = 6;
                              break;
                            }
                            return (e.next = 4), this.stats_.getSenderStats(this.uplinkConnection_);
                          case 4:
                            (n = e.sent), (t.rtt = n.rtt);
                          case 6:
                            (r = jt(this.connections_)), (e.prev = 7), r.s();
                          case 9:
                            if ((i = r.n()).done) {
                              e.next = 17;
                              break;
                            }
                            return (
                              (o = Mt(i.value, 2))[0],
                              (a = o[1]),
                              (e.next = 13),
                              this.stats_.getReceiverStats(a)
                            );
                          case 13:
                            (s = e.sent), (t.downlinksRTT[s.userId] = s.rtt);
                          case 15:
                            e.next = 9;
                            break;
                          case 17:
                            e.next = 22;
                            break;
                          case 19:
                            (e.prev = 19), (e.t0 = e.catch(7)), r.e(e.t0);
                          case 22:
                            return (e.prev = 22), r.f(), e.finish(22);
                          case 25:
                            return e.abrupt("return", t);
                          case 26:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[7, 19, 22, 25]]
                  );
                })
              )),
              function () {
                return d.apply(this, arguments);
              }),
          },
          {
            key: "getLocalAudioStats",
            value:
              ((u = yt(
                regeneratorRuntime.mark(function e() {
                  var t, n;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (((t = {})[this.userId_] = { bytesSent: 0, packetsSent: 0 }),
                              !this.uplinkConnection_)
                            ) {
                              e.next = 7;
                              break;
                            }
                            return (e.next = 5), this.stats_.getSenderStats(this.uplinkConnection_);
                          case 5:
                            (n = e.sent),
                              (t[this.userId_] = {
                                bytesSent: n.audio.bytesSent,
                                packetsSent: n.audio.packetsSent,
                              });
                          case 7:
                            return e.abrupt("return", t);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function () {
                return u.apply(this, arguments);
              }),
          },
          {
            key: "getLocalVideoStats",
            value:
              ((c = yt(
                regeneratorRuntime.mark(function e() {
                  var t, n;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (((t = {})[this.userId_] = {
                                bytesSent: 0,
                                packetsSent: 0,
                                framesEncoded: 0,
                                framesSent: 0,
                                frameWidth: 0,
                                frameHeight: 0,
                              }),
                              !this.uplinkConnection_)
                            ) {
                              e.next = 7;
                              break;
                            }
                            return (e.next = 5), this.stats_.getSenderStats(this.uplinkConnection_);
                          case 5:
                            (n = e.sent),
                              (t[this.userId_] = {
                                bytesSent: n.video.bytesSent,
                                packetsSent: n.video.packetsSent,
                                framesEncoded: n.video.framesEncoded,
                                framesSent: n.video.framesSent,
                                frameWidth: n.video.frameWidth,
                                frameHeight: n.video.frameHeight,
                              });
                          case 7:
                            return e.abrupt("return", t);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function () {
                return c.apply(this, arguments);
              }),
          },
          {
            key: "getRemoteAudioStats",
            value:
              ((s = yt(
                regeneratorRuntime.mark(function e() {
                  var t, n, r, i, o, a;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t = {}), (n = jt(this.connections_)), (e.prev = 2), n.s();
                          case 4:
                            if ((r = n.n()).done) {
                              e.next = 12;
                              break;
                            }
                            return (
                              (i = Mt(r.value, 2))[0],
                              (o = i[1]),
                              (e.next = 8),
                              this.stats_.getReceiverStats(o)
                            );
                          case 8:
                            (a = e.sent).hasAudio &&
                              (t[a.userId] = {
                                bytesReceived: a.audio.bytesReceived,
                                packetsReceived: a.audio.packetsReceived,
                                packetsLost: a.audio.packetsLost,
                              });
                          case 10:
                            e.next = 4;
                            break;
                          case 12:
                            e.next = 17;
                            break;
                          case 14:
                            (e.prev = 14), (e.t0 = e.catch(2)), n.e(e.t0);
                          case 17:
                            return (e.prev = 17), n.f(), e.finish(17);
                          case 20:
                            return e.abrupt("return", t);
                          case 21:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[2, 14, 17, 20]]
                  );
                })
              )),
              function () {
                return s.apply(this, arguments);
              }),
          },
          {
            key: "getRemoteVideoStats",
            value:
              ((a = yt(
                regeneratorRuntime.mark(function e() {
                  var t,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s,
                    c = arguments;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (t = c.length > 0 && void 0 !== c[0] ? c[0] : "main"),
                              (n = {}),
                              (r = jt(this.connections_)),
                              (e.prev = 3),
                              r.s();
                          case 5:
                            if ((i = r.n()).done) {
                              e.next = 14;
                              break;
                            }
                            return (
                              (o = Mt(i.value, 2))[0],
                              (a = o[1]),
                              (e.next = 9),
                              this.stats_.getReceiverStats(a)
                            );
                          case 9:
                            (s = e.sent),
                              "main" === t &&
                                s.hasVideo &&
                                (n[s.userId] = {
                                  bytesReceived: s.video.bytesReceived,
                                  packetsReceived: s.video.packetsReceived,
                                  packetsLost: s.video.packetsLost,
                                  framesDecoded: s.video.framesDecoded,
                                  frameWidth: s.video.frameWidth,
                                  frameHeight: s.video.frameHeight,
                                }),
                              "auxiliary" === t &&
                                s.hasAuxiliary &&
                                (n[s.userId] = {
                                  bytesReceived: s.auxiliary.bytesReceived,
                                  packetsReceived: s.auxiliary.packetsReceived,
                                  packetsLost: s.auxiliary.packetsLost,
                                  framesDecoded: s.auxiliary.framesDecoded,
                                  frameWidth: s.auxiliary.frameWidth,
                                  frameHeight: s.auxiliary.frameHeight,
                                });
                          case 12:
                            e.next = 5;
                            break;
                          case 14:
                            e.next = 19;
                            break;
                          case 16:
                            (e.prev = 16), (e.t0 = e.catch(3)), r.e(e.t0);
                          case 19:
                            return (e.prev = 19), r.f(), e.finish(19);
                          case 22:
                            return e.abrupt("return", n);
                          case 23:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[3, 16, 19, 22]]
                  );
                })
              )),
              function () {
                return a.apply(this, arguments);
              }),
          },
          {
            key: "getSdpSemantics",
            value: function () {
              return this.sdpSemantics_;
            },
          },
          {
            key: "getIceServers",
            value: function () {
              return this.turnServers_;
            },
          },
          {
            key: "getConnections",
            value: function () {
              return this.connections_;
            },
          },
          {
            key: "getMutedStates",
            value: function () {
              return this.mutedStates_;
            },
          },
          {
            key: "startHeartbeat",
            value: function () {
              if (-1 === this.heartbeat_) {
                this.log_.info("startHeartbeat..."),
                  (this.heartbeat_ = cs.setInterval(this.doHeartbeat.bind(this), 2e3));
              }
            },
          },
          {
            key: "stopHeartbeat",
            value: function () {
              -1 !== this.heartbeat_ &&
                (this.log_.info("stopHeartbeat"),
                cs.clearInterval(this.heartbeat_),
                (this.heartbeat_ = -1));
            },
          },
          {
            key: "doHeartbeat",
            value:
              ((o = yt(
                regeneratorRuntime.mark(function e() {
                  var t, n, r, i, o, a;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = this.badCaseDetector_.getMonitorFreeze()),
                              (e.next = 3),
                              this.stats_.getStatsReport({
                                uplinkConnection: this.uplinkConnection_,
                                downlinkConnections: this.connections_,
                                freezeMap: t,
                              })
                            );
                          case 3:
                            if (
                              ((n = e.sent),
                              this.badCaseDetector_.resetMonitor(),
                              this.signalChannel_)
                            ) {
                              e.next = 7;
                              break;
                            }
                            return e.abrupt("return");
                          case 7:
                            (r = this.signalChannel_.isConnected() ? cf(this.userId_) : []),
                              (i = {
                                WebRTCQualityReq: n,
                                eventList: r,
                                sdkAppId: this.sdkAppId_,
                                tinyid: this.tinyId_,
                                roomid: this.roomId_,
                                socketid: this.signalInfo_.socketId,
                                clientip: this.signalInfo_.localIp,
                                serverip: this.signalInfo_.relayIp,
                                cpunumber: navigator.hardwareConcurrency || 0,
                                cpudevice: navigator.platform,
                                devicename: navigator.platform,
                                ostype: navigator.platform,
                                mode: this.localStream_
                                  ? this.localStream_.getScreen()
                                    ? "screen"
                                    : "video"
                                  : "",
                              }),
                              (o = 0),
                              this.localStream_ &&
                                this.localStream_.getMediaStream() &&
                                ((a = this.localStream_.getMediaStream().getAudioTracks()),
                                (o = a.length > 0 && a[0].muted ? 3 : 1)),
                              (i.WebRTCQualityReq.AudioReportState.uint32_microphone_status = o),
                              this.signalChannel_.send(oh, i);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function () {
                return o.apply(this, arguments);
              }),
          },
          {
            key: "onRemoteStreamAdded",
            value: function (e) {
              var t = e.content,
                n = t.srcopenid,
                r = t.srctinyid;
              if (null !== n) {
                "live" !== this.mode_ ||
                  "audience" !== this.role_ ||
                  this.userMap_.has(n) ||
                  (this.userMap_.set(n, new ev({ userId: n, tinyId: r, role: "anchor" })),
                  this.emitter_.emit(Xf, { userId: n }));
                var i = this.connections_.get(r);
                if (i) {
                  if (i.getIsReconnecting()) return;
                  this.log_.warn("duplicated stream-added observed, rebuild the connection"),
                    i.close(),
                    this.connections_.delete(r);
                }
                var o = { audio: t.audio, video: t.bigVideo, auxiliary: t.auxVideo };
                this.log_.info(
                  "remote peer ["
                    .concat(n, "] published stream. trackState: ")
                    .concat(JSON.stringify(o))
                ),
                  this.createDownlinkConnection({ userId: n, tinyId: r, trackState: o });
              } else this.log_.warn("received null userId on stream added");
            },
          },
          {
            key: "createDownlinkConnection",
            value: function (e) {
              var t = e.userId,
                n = e.tinyId,
                r = e.trackState,
                i = new Ym({
                  userId: t,
                  tinyId: n,
                  client: this,
                  isUplink: !1,
                  signalChannel: this.signalChannel_,
                  autoSubscribe: this.autoSubscribe_,
                  trackState: r,
                });
              if (
                (this.connections_.set(n, i),
                this.installDownlinkEvents(i, t, n),
                this.autoSubscribe_)
              )
                i.initialize(), i.exchangeSDP();
              else {
                if (r.audio || r.video) {
                  var o = new Nm({ type: "main", userId: t, client: this });
                  o.setConnection(i),
                    i.setRemoteStream(uu, o),
                    o.setIsStreamAddedEventEmitted(!0),
                    this.emitter_.emit(Wf, { stream: o });
                }
                if (r.auxiliary) {
                  var a = new Nm({ type: "auxiliary", userId: t, client: this });
                  a.setConnection(i),
                    i.setRemoteStream(du, a),
                    a.setIsStreamAddedEventEmitted(!0),
                    this.emitter_.emit(Wf, { stream: a });
                }
              }
            },
          },
          {
            key: "installDownlinkEvents",
            value: function (e, t, n) {
              var r = this;
              e.on(jf, function (e) {
                r.subscriptionManager_.hasAutoRecoveryFlag(t, e.stream.getType())
                  ? r.subscriptionManager_.recover(e.stream)
                  : (e.stream.setIsStreamAddedEventEmitted(!0),
                    r.emitter_.emit(Wf, { stream: e.stream }));
              }),
                e.on(Ff, function (e) {
                  r.subscriptionManager_.hasAutoRecoveryFlag(t, e.stream.getType()) ||
                    (e.stream.setIsStreamAddedEventEmitted(!1),
                    r.callDurationCalculator_.isCalculated({ stream: e.stream }) &&
                      (r.callDurationCalculator_.stopCalculate({ stream: e.stream }),
                      r.uploadCallStat(e.stream)),
                    r.emitter_.emit(Jf, { stream: e.stream }));
                }),
                e.on(Bf, function (e) {
                  r.subscriptionManager_.hasAutoRecoveryFlag(t, e.stream.getType()) ||
                    r.emitter_.emit(Qf, { stream: e.stream });
                }),
                e.on(zf, function (e) {
                  r.subscriptionManager_.hasAutoRecoveryFlag(t, e.stream.getType()) ||
                    (r.callDurationCalculator_.startCalculate({ stream: e.stream }),
                    r.emitter_.emit(qf, { stream: e.stream }));
                }),
                e.on(Gf, function (e) {
                  var t = e.getCode();
                  t !== Th.ICE_TRANSPORT_ERROR &&
                    (t === Th.DOWNLINK_RECONNECTION_FAILED && r.closeDownLink(n),
                    r.emitter_.emit(om, e));
                });
            },
          },
          {
            key: "onRemoteStreamRemoved",
            value: function (e) {
              var t = e.content,
                n = t.srctinyid,
                r = t.srcopenid,
                i = this.connections_.get(n);
              i &&
                (void 0 === r && (r = i.getUserId()),
                this.log_.info("remote peer [".concat(r, "] unpublished stream")),
                this.closeDownLink(n),
                this.badCaseDetector_ && this.badCaseDetector_.deleteBlackVideoRecord(r));
            },
          },
          {
            key: "onPeerJoin",
            value: function (e) {
              var t = e.data.content,
                n = t.srctinyid,
                r = t.userid,
                i = t.role;
              this.userMap_.has(r) ||
                (this.userMap_.set(r, new ev({ userId: r, tinyId: n, role: i })),
                this.emitter_.emit(Xf, { userId: r }));
            },
          },
          {
            key: "onPeerLeave",
            value: function (e) {
              var t = e.data.content,
                n = t.srctinyid,
                r = t.userid;
              this.log_.info("peer leave [".concat(r, "]")),
                this.cleanUser({ userId: r, tinyId: n });
            },
          },
          {
            key: "cleanUser",
            value: function (e) {
              var t = e.userId,
                n = e.tinyId;
              this.userMap_.delete(t), this.closeDownLink(n), this.emitter_.emit($f, { userId: t });
            },
          },
          {
            key: "onPublishedUserList",
            value: function (e) {
              var t = this;
              try {
                var n = e.content.userlist.map(function (e) {
                  return e.userid;
                });
                this.connections_.forEach(function (e) {
                  var r = e.getUserId(),
                    i = e.getTinyId();
                  n.findIndex(function (e) {
                    return e === r;
                  }) < 0 &&
                    (t.log_.info("peer unpublished detected [".concat(r, "]")), t.closeDownLink(i));
                }),
                  e.content.userlist.forEach(function (e) {
                    var n = e.userid,
                      r = e.srctinyid,
                      i = e.flag;
                    if (n !== t.userId_ && t.connections_.has(r)) {
                      var o = 1 & i,
                        a = 8 & i,
                        s = 4 & i,
                        c = t.connections_.get(r).getTrackState(),
                        u = c.audio,
                        d = c.video,
                        l = c.auxiliary;
                      !d && o && Tm.emit(wm, { tinyId: r, userId: n, action: Zu, kind: $u }),
                        !u && a && Tm.emit(wm, { tinyId: r, userId: n, action: Zu, kind: Xu }),
                        !l && s && Tm.emit(wm, { tinyId: r, userId: n, action: Zu, kind: Yu }),
                        d && !o && Tm.emit(wm, { tinyId: r, userId: n, action: ed, kind: $u }),
                        u && !a && Tm.emit(wm, { tinyId: r, userId: n, action: ed, kind: Xu }),
                        l && !s && Tm.emit(wm, { tinyId: r, userId: n, action: ed, kind: Yu });
                    }
                  });
              } catch (Av) {}
            },
          },
          {
            key: "onUpdateRemoteMuteStat",
            value: function (e) {
              var t = this,
                n = e.content;
              n.userlist.forEach(function (e) {
                var n = e.srctinyid,
                  r = e.userid;
                if (0 !== n && n !== t.tinyId_) {
                  var i = t.connections_.get(n);
                  if (i) {
                    var o = i.getMainStream();
                    if (!o || o.getIsStreamAddedEventEmitted()) {
                      var a = !!(1 & e.flag),
                        s = !!(8 & e.flag),
                        c = !!(64 & e.flag),
                        u = !!(16 & e.flag),
                        d = t.mutedStates_.get(n);
                      if (void 0 === d)
                        return (
                          t.mutedStates_.set(n, {
                            hasAudio: s,
                            hasVideo: a,
                            audioMuted: c,
                            videoMuted: u,
                          }),
                          a
                            ? u
                              ? t.emitter_.emit(Zf, { userId: r })
                              : t.emitter_.emit(tm, { userId: r })
                            : t.emitter_.emit(Zf, { userId: r }),
                          void (s
                            ? c
                              ? t.emitter_.emit(Yf, { userId: r })
                              : t.emitter_.emit(em, { userId: r })
                            : t.emitter_.emit(Yf, { userId: r }))
                        );
                      var l = !c && s;
                      (!d.audioMuted && d.hasAudio) !== l &&
                        (l
                          ? t.emitter_.emit(em, { userId: r })
                          : t.emitter_.emit(Yf, { userId: r }));
                      var p = !u && a;
                      (!d.videoMuted && d.hasVideo) !== p &&
                        (p
                          ? t.emitter_.emit(tm, { userId: r })
                          : t.emitter_.emit(Zf, { userId: r })),
                        t.mutedStates_.set(n, {
                          hasAudio: s,
                          hasVideo: a,
                          audioMuted: c,
                          videoMuted: u,
                        });
                    }
                  } else t.mutedStates_.delete(n);
                }
              });
            },
          },
          {
            key: "onClientBanned",
            value: function (e) {
              this.emitter_.emit(
                nm,
                new Rh({ code: Th.CLIENT_BANNED, message: "client was banned because of " + e })
              );
            },
          },
          {
            key: "getEnv",
            value: function () {
              return this.env_;
            },
          },
          {
            key: "getSubscriptionManager",
            value: function () {
              return this.subscriptionManager_;
            },
          },
          {
            key: "startPublishCDNStream",
            value:
              ((i = yt(
                regeneratorRuntime.mark(function e(t) {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this.localStream_) {
                              e.next = 2;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message: "please call publish() before startPublishCDNStream()",
                            });
                          case 2:
                            if (fd(t.streamId) || md(t.streamId)) {
                              e.next = 4;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_PARAMETER,
                              message: "option.streamId must be valid string or undefined",
                            });
                          case 4:
                            return (
                              this.log_.info(
                                "startPublishCDNStream params: ".concat(JSON.stringify(t))
                              ),
                              (e.prev = 5),
                              (e.next = 8),
                              this.publishCDNManager_.startPublishTencentCDN(t.streamId)
                            );
                          case 8:
                            if (!(t.appId && t.bizId && t.url)) {
                              e.next = 11;
                              break;
                            }
                            return (e.next = 11), this.publishCDNManager_.startPublishGivenCDN(t);
                          case 11:
                            e.next = 16;
                            break;
                          case 13:
                            throw (
                              ((e.prev = 13),
                              (e.t0 = e.catch(5)),
                              new Rh({
                                code: Th.START_PUBLISH_CDN_FAILED,
                                message: "startPublishCDNStream failed, errMsg: ".concat(
                                  e.t0.message
                                ),
                              }))
                            );
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[5, 13]]
                  );
                })
              )),
              function (e) {
                return i.apply(this, arguments);
              }),
          },
          {
            key: "stopPublishCDNStream",
            value:
              ((r = yt(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this.publishCDNManager_.getIsPublishingTencentCDN()) {
                              e.next = 2;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message:
                                "please call startPublishCDNStream() before stopPublishCDNStream()",
                            });
                          case 2:
                            return (
                              this.log_.info("stopPublishCDNStream"),
                              (e.prev = 3),
                              (e.next = 6),
                              this.publishCDNManager_.stopPublishTencentCDN()
                            );
                          case 6:
                            if (!this.publishCDNManager_.getIsPublishingGivenCDN()) {
                              e.next = 9;
                              break;
                            }
                            return (e.next = 9), this.publishCDNManager_.stopPublishGivenCDN();
                          case 9:
                            e.next = 14;
                            break;
                          case 11:
                            throw (
                              ((e.prev = 11),
                              (e.t0 = e.catch(3)),
                              new Rh({
                                code: Th.STOP_PUBLISH_CDN_FAILED,
                                message: "stopPublishCDNStream failed, errMsg: ".concat(
                                  e.t0.message
                                ),
                              }))
                            );
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[3, 11]]
                  );
                })
              )),
              function () {
                return r.apply(this, arguments);
              }),
          },
          {
            key: "startMixTranscode",
            value:
              ((n = yt(
                regeneratorRuntime.mark(function e(t) {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this.isJoined_ && this.mixTranscodeManager_) {
                              e.next = 2;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message: "please call startMixTranscode() after join()",
                            });
                          case 2:
                            return (
                              fd(t.mode) && (t.mode = Gu.MANUAL),
                              (e.prev = 3),
                              this.log_.info(
                                "startMixTranscode with config ".concat(JSON.stringify(t))
                              ),
                              lf("mix-transcode-mode:".concat(t.mode)),
                              (e.next = 8),
                              this.mixTranscodeManager_.startMixTranscode(t)
                            );
                          case 8:
                            ff({ eventType: Vu }), (e.next = 15);
                            break;
                          case 11:
                            throw (
                              ((e.prev = 11),
                              (e.t0 = e.catch(3)),
                              mf({ eventType: Vu, error: e.t0 }),
                              e.t0)
                            );
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[3, 11]]
                  );
                })
              )),
              function (e) {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "stopMixTranscode",
            value:
              ((t = yt(
                regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this.isJoined_ && this.mixTranscodeManager_) {
                              e.next = 2;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message: "please call startMixTranscode() after join()",
                            });
                          case 2:
                            return (
                              (e.prev = 2),
                              (e.next = 5),
                              this.mixTranscodeManager_.stopMixTranscode()
                            );
                          case 5:
                            ff({ eventType: ju }), (e.next = 12);
                            break;
                          case 8:
                            throw (
                              ((e.prev = 8),
                              (e.t0 = e.catch(2)),
                              mf({ eventType: ju, error: e.t0 }),
                              e.t0)
                            );
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[2, 8]]
                  );
                })
              )),
              function () {
                return t.apply(this, arguments);
              }),
          },
          {
            key: "getSystemResult",
            value: function () {
              return this.checkSystemResult_;
            },
          },
          {
            key: "enableAudioVolumeEvaluation",
            value: function () {
              var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e3,
                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!vd(t))
                throw new Rh({
                  code: Th.INVALID_PARAMETER,
                  message: "parameter must be numeric type",
                });
              if ((this.log_.info("enableAudioVolumeEvaluation with interval: " + t), t <= 0))
                return (
                  (this.enableAudioVolumeEvaluation_ = !1),
                  cs.clearInterval(this.audioVolumeIntervalId_),
                  void (this.audioVolumeIntervalId_ = null)
                );
              (t = Math.floor(Math.max(t, 16))),
                this.audioVolumeIntervalId_ &&
                  (cs.clearInterval(this.audioVolumeIntervalId_),
                  (this.audioVolumeIntervalId_ = null)),
                (this.enableAudioVolumeEvaluation_ = !0),
                (this.audioVolumeIntervalId_ = cs.setInterval(
                  function () {
                    var t = [];
                    if (e.localStream_) {
                      var n = Math.floor(100 * e.localStream_.getAudioLevel());
                      t.push({ userId: e.userId_, audioVolume: n, stream: e.localStream_ });
                    }
                    e.connections_.forEach(function (e) {
                      var n = e.getSubscribedMainStream();
                      if (n) {
                        var r = Math.floor(100 * n.getAudioLevel());
                        t.push({ userId: e.getUserId(), audioVolume: r, stream: n });
                      }
                    }),
                      e.emitter_.emit(im, { result: t });
                  },
                  t,
                  n
                ));
            },
          },
          {
            key: "uploadCallStat",
            value: function (e) {
              if (e.isRemote()) {
                var t = e.getUserId(),
                  n = e.getType(),
                  r = "".concat(t, "_").concat(n),
                  i = {
                    userId: t,
                    type: n,
                    duration: this.callDurationCalculator_.getDuration(r),
                    dataFreeze: this.badCaseDetector_.getDataFreezeDuration(r),
                    renderFreeze: this.badCaseDetector_.getRenderFreezeDuration(r),
                  };
                lf("callStats-" + JSON.stringify(i));
              }
            },
          },
          {
            key: "uploadAllCallStats",
            value: function () {
              var e = this;
              this.callDurationCalculator_.getDurationMap().forEach(function (t) {
                var n = Date.now(),
                  r = t.userId,
                  i = t.type,
                  o = t.startTime,
                  a = t.endTime,
                  s = t.duration,
                  c = "".concat(r, "_").concat(i);
                a || (s = n - o);
                var u = {
                  userId: r,
                  type: i,
                  duration: s,
                  dataFreeze: e.badCaseDetector_.getDataFreezeDuration(c),
                  renderFreeze: e.badCaseDetector_.getRenderFreezeDuration(c),
                };
                lf("callStats-" + JSON.stringify(u));
              }),
                this.badCaseDetector_.stop(),
                this.callDurationCalculator_.reset();
            },
          },
        ]),
        e
      );
    })(),
    sv = tv({
      retryFunction: (function () {
        var e = yt(
          regeneratorRuntime.mark(function e(t) {
            var n, r, i;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!Df()) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    return (e.next = 4), cv(t);
                  case 4:
                    if (
                      ((n = e.sent),
                      or.info("getUserMedia with constraints: " + JSON.stringify(n)),
                      !n.audio)
                    ) {
                      e.next = 13;
                      break;
                    }
                    return (e.next = 9), Pv.getMicrophones();
                  case 9:
                    if (
                      ((r = e.sent),
                      or.info("microphones: ".concat(JSON.stringify(r))),
                      0 !== r.length)
                    ) {
                      e.next = 13;
                      break;
                    }
                    throw new Rh({
                      code: Th.DEVICE_NOT_FOUND,
                      message:
                        "no microphone detected, but you are trying to get audio stream, please check your microphone and the configeration on TRTC.createStream.",
                    });
                  case 13:
                    if (!n.video) {
                      e.next = 20;
                      break;
                    }
                    return (e.next = 16), Pv.getCameras();
                  case 16:
                    if (
                      ((i = e.sent), or.info("cameras: ".concat(JSON.stringify(i))), 0 !== i.length)
                    ) {
                      e.next = 20;
                      break;
                    }
                    throw new Rh({
                      code: Th.DEVICE_NOT_FOUND,
                      message:
                        "no camera detected, but you are trying to get video stream, please check your camera and the configeration on TRTC.createStream.",
                    });
                  case 20:
                    return (e.next = 22), navigator.mediaDevices.getUserMedia(n);
                  case 22:
                    return e.abrupt("return", e.sent);
                  case 23:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      settings: { retries: 5, timeout: 2e3 },
      onError: function (e, t, n) {
        "NotReadableError" === e.name ? t() : n(e);
      },
      onRetrying: function (e) {
        or.warn("getUserMedia NotReadableError observed, retrying [".concat(e, "/5]"));
      },
    });
  function cv(e) {
    return uv.apply(this, arguments);
  }
  function uv() {
    return (uv = yt(
      regeneratorRuntime.mark(function e(t) {
        var n, r, i, o;
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((n = { echoCancellation: !0, autoGainControl: !0, noiseSuppression: !0 }),
                  t.audio)
                ) {
                  e.next = 5;
                  break;
                }
                (n = !1), (e.next = 15);
                break;
              case 5:
                if (gf(t.microphoneId)) {
                  e.next = 9;
                  break;
                }
                (n = wt(
                  {
                    deviceId: { exact: t.microphoneId },
                    sampleRate: t.sampleRate,
                    channelCount: t.channelCount,
                  },
                  n
                )),
                  (e.next = 15);
                break;
              case 9:
                return (
                  (n = wt({ sampleRate: t.sampleRate, channelCount: t.channelCount }, n)),
                  (e.next = 12),
                  Pv.getMicrophones()
                );
              case 12:
                (r = e.sent),
                  (i = r.filter(function (e) {
                    var t = e.deviceId;
                    return t.length > 0 && "default" !== t;
                  })).length > 0 && (n.deviceId = { exact: i[0].deviceId });
              case 15:
                return (
                  (o = {}),
                  (o =
                    void 0 !== t.facingMode && t.video
                      ? {
                          facingMode: t.facingMode,
                          width: t.width,
                          height: t.height,
                          frameRate: t.frameRate,
                        }
                      : !gf(t.cameraId) && t.video
                      ? {
                          deviceId: { exact: t.cameraId },
                          width: t.width,
                          height: t.height,
                          frameRate: t.frameRate,
                        }
                      : !!t.video &&
                        (void 0 === t.width || {
                          width: t.width,
                          height: t.height,
                          frameRate: t.frameRate,
                        })),
                  e.abrupt("return", { audio: n, video: o })
                );
              case 18:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  var dv = (function () {
    var e = yt(
      regeneratorRuntime.mark(function e(t) {
        var n, r, i, o, a, s, c, u, d;
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (!Df()) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");
              case 2:
                if (((n = null), !((Gc && Hc < 74) || Jc))) {
                  e.next = 27;
                  break;
                }
                return (
                  (r = pv(t)),
                  or.info("getDisplayMedia with constraints: " + JSON.stringify(r)),
                  (e.next = 8),
                  navigator.mediaDevices.getDisplayMedia(r)
                );
              case 8:
                if (((i = e.sent), !t.screenAudio)) {
                  e.next = 14;
                  break;
                }
                return (
                  or.warn("Your browser not support capture system audio"), e.abrupt("return", i)
                );
              case 14:
                if (!t.audio) {
                  e.next = 24;
                  break;
                }
                return (
                  (o = lv(t)),
                  or.info("getUserMedia with constraints: " + JSON.stringify(o)),
                  (e.next = 19),
                  navigator.mediaDevices.getUserMedia(o)
                );
              case 19:
                return (n = e.sent), i.addTrack(n.getAudioTracks()[0]), e.abrupt("return", i);
              case 24:
                return e.abrupt("return", i);
              case 25:
                e.next = 53;
                break;
              case 27:
                if (!t.screenAudio) {
                  e.next = 37;
                  break;
                }
                return (
                  (t.audioConstraints = {
                    echoCancellation: !0,
                    noiseSuppression: !0,
                    sampleRate: 44100,
                  }),
                  (a = pv(t)),
                  or.info("getDisplayMedia with constraints: " + JSON.stringify(a)),
                  (e.next = 33),
                  navigator.mediaDevices.getDisplayMedia(a)
                );
              case 33:
                return (s = e.sent), e.abrupt("return", s);
              case 37:
                return (
                  (c = pv(t)),
                  or.info("getDisplayMedia with constraints: " + JSON.stringify(c)),
                  (e.next = 41),
                  navigator.mediaDevices.getDisplayMedia(c)
                );
              case 41:
                if (((u = e.sent), !t.audio)) {
                  e.next = 52;
                  break;
                }
                return (
                  (d = lv(t)),
                  or.info("getUserMedia with constraints: " + JSON.stringify(d)),
                  (e.next = 47),
                  navigator.mediaDevices.getUserMedia(d)
                );
              case 47:
                return (n = e.sent), u.addTrack(n.getAudioTracks()[0]), e.abrupt("return", u);
              case 52:
                return e.abrupt("return", u);
              case 53:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
    return function (t) {
      return e.apply(this, arguments);
    };
  })();
  function lv(e) {
    return {
      audio:
        void 0 !== e.microphoneId
          ? {
              deviceId: { exact: e.microphoneId },
              sampleRate: e.sampleRate,
              channelCount: e.channelCount,
            }
          : { sampleRate: e.sampleRate, channelCount: e.channelCount },
      video: !1,
    };
  }
  function pv(e) {
    var t = {},
      n = { width: e.width, height: e.height, frameRate: e.frameRate };
    return (
      void 0 !== e.screenSource && (n.displaySurface = e.screenSource),
      (t.video = n),
      void 0 !== e.audioConstraints && (t.audio = e.audioConstraints),
      t
    );
  }
  var hv = new Map();
  hv.set("120p", { width: 160, height: 120, frameRate: 15, bitrate: 200 }),
    hv.set("180p", { width: 320, height: 180, frameRate: 15, bitrate: 350 }),
    hv.set("240p", { width: 320, height: 240, frameRate: 15, bitrate: 400 }),
    hv.set("360p", { width: 640, height: 360, frameRate: 15, bitrate: 800 }),
    hv.set("480p", { width: 640, height: 480, frameRate: 15, bitrate: 900 }),
    hv.set("720p", { width: 1280, height: 720, frameRate: 15, bitrate: 1500 }),
    hv.set("1080p", { width: 1920, height: 1080, frameRate: 15, bitrate: 2e3 }),
    hv.set("1440p", { width: 2560, height: 1440, frameRate: 30, bitrate: 4860 }),
    hv.set("4K", { width: 3840, height: 2160, frameRate: 30, bitrate: 9e3 });
  var fv = new Map();
  fv.set("480p", { width: 640, height: 480, frameRate: 5, bitrate: 900 }),
    fv.set("480p_2", { width: 640, height: 480, frameRate: 30, bitrate: 1e3 }),
    fv.set("720p", { width: 1280, height: 720, frameRate: 5, bitrate: 1200 }),
    fv.set("720p_2", { width: 1280, height: 720, frameRate: 30, bitrate: 3e3 }),
    fv.set("1080p", { width: 1920, height: 1080, frameRate: 5, bitrate: 1600 }),
    fv.set("1080p_2", { width: 1920, height: 1080, frameRate: 30, bitrate: 4e3 });
  var mv = new Map();
  mv.set("standard", { sampleRate: 48e3, channelCount: 1, bitrate: 40 }),
    mv.set("high", { sampleRate: 48e3, channelCount: 1, bitrate: 128 });
  var vv = (function (e) {
      It(u, e);
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        c = Ot(u);
      function u(e) {
        var t;
        St(this, u);
        var n = wt(wt({}, e), { isRemote: !1, type: "local" });
        return (
          e.screen && (n.mirror = !1),
          ((t = c.call(this, n)).video_ = e.video),
          (t.audio_ = e.audio),
          (t.cameraId_ = e.cameraId),
          (t.cameraGroupId_ = ""),
          (t.facingMode_ = e.facingMode),
          (t.microphoneId_ = e.microphoneId),
          (t.microphoneGroupId_ = ""),
          (t.videoSource_ = e.videoSource),
          (t.audioSource_ = e.audioSource),
          (t.screen_ = e.screen),
          (t.screenSource_ = e.screenSource),
          (t.screenAudio_ = e.screenAudio),
          (t.audioProfile_ = { sampleRate: 48e3, channelCount: 1, bitrate: 40 }),
          (t.videoProfile_ = { width: 640, height: 480, frameRate: 15, bitrate: 900 }),
          (t.screenProfile_ = { width: 1920, height: 1080, frameRate: 5, bitrate: 1600 }),
          (t.videoBitrate_ = t.screen_ ? 1600 : 900),
          (t.videoSetting_ = null),
          (t.mutedFlag_ = 0),
          t.initState(),
          t.installEvents(),
          t
        );
      }
      return (
        kt(u, [
          {
            key: "initState",
            value: function () {
              (this.isAddingTrack_ = !1),
                (this.isRemovingTrack_ = !1),
                this.setIsReadyToPublish(!1),
                this.setPublishState(nd);
            },
          },
          {
            key: "installEvents",
            value: function () {
              Tm.on(Em, this.onStreamPublished, this);
            },
          },
          {
            key: "uninstallEvents",
            value: function () {
              Tm.off(Em, this.onStreamPublished, this);
            },
          },
          {
            key: "initialize",
            value: function () {
              var e = this;
              return new Promise(function (t, n) {
                if (Of())
                  n(
                    new Rh({
                      code: Th.INVALID_OPERATION,
                      message: "not supported in http protocol, please use https protocol",
                    })
                  );
                else {
                  if (void 0 === e.audio_) {
                    var r = new MediaStream();
                    return (
                      void 0 !== e.audioSource_ &&
                        (r.addTrack(e.audioSource_), e.updateAudioPlayingState(!0)),
                      void 0 !== e.videoSource_ &&
                        (r.addTrack(e.videoSource_), e.updateVideoPlayingState(!0)),
                      e.setMediaStream(r),
                      ff({ eventType: Ou, kind: "custom" }),
                      e.setIsReadyToPublish(!0),
                      t()
                    );
                  }
                  e.screen_
                    ? (e.log_.info(
                        "initialize stream audio: " +
                          e.audio_ +
                          " screenAudio: " +
                          e.screenAudio_ +
                          " screen: " +
                          e.screen_
                      ),
                      dv({
                        audio: e.audio_,
                        screenAudio: e.screenAudio_,
                        microphoneId: e.microphoneId_,
                        screenSource: e.screenSource_,
                        width: e.screenProfile_.width,
                        height: e.screenProfile_.height,
                        frameRate: e.screenProfile_.frameRate,
                        sampleRate: e.audioProfile_.sampleRate,
                        channelCount: e.audioProfile_.channelCount,
                      })
                        .then(function (n) {
                          return (
                            e.setMediaStream(n),
                            e.updateAudioPlayingState(e.audio_ || e.screenAudio_),
                            e.updateVideoPlayingState(!0),
                            e.listenForScreenSharingStopped(e.getVideoTrack()),
                            e.setVideoContentHint("detail"),
                            e.updateDeviceIdInUse(),
                            e.setIsReadyToPublish(!0),
                            ff({ eventType: Ou, kind: "getDisplayMedia" }),
                            t()
                          );
                        })
                        .catch(function (t) {
                          mf({ eventType: Ou, kind: "getDisplayMedia", error: t }),
                            e.log_.error("getDisplayMedia error observed " + t),
                            n(t);
                        }))
                    : (e.log_.info("initialize stream audio: " + e.audio_ + " video: " + e.video_),
                      sv({
                        audio: e.audio_,
                        video: e.video_,
                        facingMode: e.facingMode_,
                        cameraId: e.cameraId_,
                        microphoneId: e.microphoneId_,
                        width: e.videoProfile_.width,
                        height: e.videoProfile_.height,
                        frameRate: e.videoProfile_.frameRate,
                        sampleRate: e.audioProfile_.sampleRate,
                        channelCount: e.audioProfile_.channelCount,
                      })
                        .then(function (n) {
                          return (
                            "getSettings" in MediaStreamTrack.prototype &&
                              (e.videoSetting_ =
                                n.getVideoTracks().length > 0 &&
                                n.getVideoTracks()[0].getSettings()),
                            e.setMediaStream(n),
                            e.updateAudioPlayingState(e.audio_),
                            e.updateVideoPlayingState(e.video_),
                            e.updateDeviceIdInUse(),
                            e.log_.debug(
                              "gotStream hasAudio: " + e.hasAudio() + " hasVideo: " + e.hasVideo()
                            ),
                            e.setIsReadyToPublish(!0),
                            ff({ eventType: Ou, kind: "getUserMedia" }),
                            t()
                          );
                        })
                        .catch(function (t) {
                          mf({ eventType: Ou, kind: "getUserMedia", error: t }),
                            e.log_.error("getUserMedia error observed " + t),
                            n(t);
                        }));
                }
              });
            },
          },
          {
            key: "listenForScreenSharingStopped",
            value: function (e) {
              var t = this;
              e.addEventListener("ended", function (e) {
                t.log_.info("screen sharing was stopped because the video track is ended"),
                  t.emitter_.emit(sm);
              });
            },
          },
          {
            key: "muteAudio",
            value: function () {
              var e = Nt(Ct(u.prototype), "muteAudio", this).call(this);
              return e && (this.log_.info("localStream mute audio"), this.sendMutedFlag(Xu, !0)), e;
            },
          },
          {
            key: "muteVideo",
            value: function () {
              var e = Nt(Ct(u.prototype), "muteVideo", this).call(this);
              return e && (this.log_.info("localStream mute video"), this.sendMutedFlag($u, !0)), e;
            },
          },
          {
            key: "unmuteAudio",
            value: function () {
              var e = Nt(Ct(u.prototype), "unmuteAudio", this).call(this);
              return (
                e && (this.log_.info("localStream unmute audio"), this.sendMutedFlag(Xu, !1)), e
              );
            },
          },
          {
            key: "unmuteVideo",
            value: function () {
              var e = Nt(Ct(u.prototype), "unmuteVideo", this).call(this);
              return (
                e && (this.log_.info("localStream unmute video"), this.sendMutedFlag($u, !1)), e
              );
            },
          },
          {
            key: "sendMutedFlag",
            value: function (e, t) {
              this.setMutedFlag(e, t);
              var n = this.getConnection();
              if (n) {
                n.sendMutedFlag(this.mutedFlag_);
                var r = n.getUserId(),
                  i = n.getTinyId(),
                  o = "".concat(t ? "mute" : "unmute", " local ").concat(e, " track");
                sf(r, {
                  eventId: e === Xu ? (t ? xh : Ah) : t ? Ph : Dh,
                  eventDesc: o,
                  timestamp: ds(),
                  userId: r,
                  tinyId: i,
                });
              }
            },
          },
          {
            key: "setMutedFlag",
            value: function (e, t) {
              e === Xu
                ? t
                  ? (this.mutedFlag_ |= 4)
                  : (this.mutedFlag_ &= -5)
                : t
                ? (this.mutedFlag_ |= 1)
                : (this.mutedFlag_ &= -2),
                this.log_.info(
                  "set ".concat(e, " muted state: [").concat(t ? "mute" : "unmute", "]")
                );
            },
          },
          {
            key: "setAudioProfile",
            value: function (e) {
              var t;
              "object" === gt(e) ? (t = e) : void 0 === (t = mv.get(e)) && (t = mv.get("standard")),
                this.log_.info("setAudioProfile: " + JSON.stringify(t)),
                (this.audioProfile_ = t);
            },
          },
          {
            key: "setVideoProfile",
            value:
              ((s = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!this.connection_ || Af()) {
                              e.next = 2;
                              break;
                            }
                            throw new Rh({
                              code: Th.NOT_SUPPORTED,
                              message: "not supported on current browser",
                            });
                          case 2:
                            if (
                              (dd(t)
                                ? (n = wt(wt({}, this.videoProfile_), t))
                                : md(t) && ((n = hv.get(t)), fd(n) && (n = hv.get("480p"))),
                              this.log_.info("setVideoProfile " + JSON.stringify(n)),
                              !(r = this.getVideoTrack()))
                            ) {
                              e.next = 8;
                              break;
                            }
                            return (e.next = 8), r.applyConstraints(n);
                          case 8:
                            if (this.videoBitrate_ === n.bitrate) {
                              e.next = 13;
                              break;
                            }
                            if (!this.connection_) {
                              e.next = 12;
                              break;
                            }
                            return (e.next = 12), this.connection_.setBandwidth(n.bitrate, "video");
                          case 12:
                            this.videoBitrate_ = n.bitrate;
                          case 13:
                            this.videoProfile_ = n;
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e) {
                return s.apply(this, arguments);
              }),
          },
          {
            key: "getVideoBitrate",
            value: function () {
              return this.videoBitrate_;
            },
          },
          {
            key: "getAudioBitrate",
            value: function () {
              return this.audioProfile_.bitrate;
            },
          },
          {
            key: "setScreenProfile",
            value: function (e) {
              var t = e;
              "object" !== gt(e) && void 0 === (t = fv.get(e)) && (t = fv.get("1080p")),
                this.log_.info("setScreenProfile " + JSON.stringify(e)),
                (this.screenProfile_ = t),
                (this.videoBitrate_ = t.bitrate);
            },
          },
          {
            key: "getVideoProfile",
            value: function () {
              return this.screen_ ? this.screenProfile_ : this.videoProfile_;
            },
          },
          {
            key: "getAudioProfile",
            value: function () {
              return this.audioProfile_;
            },
          },
          {
            key: "setVideoContentHint",
            value: function (e) {
              var t = this.getVideoTrack();
              t &&
                "contentHint" in t &&
                (this.log_.info("set video track contentHint to: " + e),
                (t.contentHint = e),
                t.contentHint !== e && this.log_.warn("Invalid video track contentHint: " + e));
            },
          },
          {
            key: "switchDevice",
            value:
              ((a = yt(
                regeneratorRuntime.mark(function e(t, n) {
                  var r, i, o, a, s, c, u, d, l, p, h, f, m, v;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!(this.screen_ || this.audioSource_ || this.videoSource_)) {
                              e.next = 2;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message: "cannot switch device on current stream",
                            });
                          case 2:
                            if (this.publishState_ !== rd) {
                              e.next = 4;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message: "cannot switch device when publishing localStream",
                            });
                          case 4:
                            if (
                              !(
                                ("audio" === t && this.microphoneId_ === n) ||
                                ("video" === t && this.cameraId_ === n)
                              )
                            ) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt("return");
                          case 6:
                            if (
                              ("audio" === t &&
                                ((this.microphoneId_ = n), this.audio_ || (this.audio_ = !0)),
                              "video" === t &&
                                ("user" === n || "environment" === n
                                  ? (this.facingMode_ = n)
                                  : (this.cameraId_ = n),
                                this.video_ || (this.video_ = !0)),
                              this.getMediaStream())
                            ) {
                              e.next = 10;
                              break;
                            }
                            return e.abrupt("return");
                          case 10:
                            return (
                              this.setIsReadyToPublish(!1),
                              this.log_.info("switchDevice " + t + " to: " + n),
                              "video" === t &&
                                (qs || Js || Ys) &&
                                (r = this.getVideoTrack()) &&
                                r.stop(),
                              "audio" === t &&
                                Ys &&
                                ((i = this.getAudioTrack()),
                                (o = this.getMicrophoneTrackMixed()),
                                i && i.stop(),
                                o && o.stop()),
                              (e.next = 16),
                              sv({
                                audio: this.audio_ && "audio" === t,
                                video: this.video_ && "video" === t,
                                facingMode: this.facingMode_,
                                cameraId: this.cameraId_,
                                microphoneId: this.microphoneId_,
                                width: this.videoProfile_.width,
                                height: this.videoProfile_.height,
                                frameRate: this.videoProfile_.frameRate,
                                sampleRate: this.audioProfile_.sampleRate,
                                channelCount: this.audioProfile_.channelCount,
                              })
                            );
                          case 16:
                            return (
                              (a = e.sent),
                              (s = null),
                              "audio" === t
                                ? (c = a.getAudioTracks()[0]) && this.isAudioTrackMixed()
                                  ? ((u = this.getAudioTrack()),
                                    (d = Pv.AudioMixerPlugin.getAudioTrackMap()),
                                    (l = Pv.AudioMixerPlugin.mix({
                                      targetTrack: c,
                                      sourceList: d.get(u.id).sourceList,
                                    })),
                                    (s = l))
                                  : (s = c)
                                : (s = a.getVideoTracks()[0]),
                              (e.next = 21),
                              this.replaceTrack_(s)
                            );
                          case 21:
                            this.updateDeviceIdInUse(),
                              (p = this.getConnection()) &&
                                ((h = p.getUserId()),
                                (f = p.getTinyId()),
                                (m = Lh),
                                (v = "switch camera"),
                                "audio" === t && ((m = Uh), (v = "switch microphone")),
                                sf(h, {
                                  eventId: m,
                                  eventDesc: v,
                                  timestamp: ds(),
                                  userId: h,
                                  tinyId: f,
                                })),
                              this.log_.info(
                                "switch ".concat(
                                  "audio" === t ? "microphone" : "camera",
                                  " success "
                                )
                              ),
                              this.setIsReadyToPublish(!0);
                          case 26:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e, t) {
                return a.apply(this, arguments);
              }),
          },
          {
            key: "addTrack",
            value:
              ((o = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r, i;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!this.isAddingTrack_) {
                              e.next = 2;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message:
                                "previous addTrack is ongoing, please avoid repetitive execution",
                            });
                          case 2:
                            if (!this.isRemovingTrack_) {
                              e.next = 4;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message: "cannot add track when a track is removing",
                            });
                          case 4:
                            if (this.publishState_ !== rd) {
                              e.next = 6;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message: "cannot add track when publishing localStream",
                            });
                          case 6:
                            if ((n = this.getMediaStream())) {
                              e.next = 9;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message: "the local stream is not initialized yet",
                            });
                          case 9:
                            if (
                              !(
                                ("audio" === t.kind && n.getAudioTracks().length > 0) ||
                                ("video" === t.kind && n.getVideoTracks().length > 0)
                              )
                            ) {
                              e.next = 11;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message: "A Stream has at most one audio track and one video track",
                            });
                          case 11:
                            if (
                              ("video" === t.kind &&
                                "getSettings" in MediaStreamTrack.prototype &&
                                ((r = t.getSettings()),
                                !this.videoSetting_ ||
                                  (r.width === this.videoSetting_.width &&
                                    r.height === this.videoSetting_.height) ||
                                  this.log_.warn(
                                    "video resolution of the track ("
                                      .concat(r.width, " x ")
                                      .concat(
                                        r.height,
                                        ") shall be kept the same as the previous: "
                                      )
                                      .concat(this.videoSetting_.width, " x ")
                                      .concat(
                                        this.videoSetting_.height,
                                        ". It may cause abnormal Cloud Recording."
                                      )
                                  )),
                              (e.prev = 12),
                              (this.isAddingTrack_ = !0),
                              !(i = this.getConnection()))
                            ) {
                              e.next = 18;
                              break;
                            }
                            return (e.next = 18), i.addTrack(t);
                          case 18:
                            n.addTrack(t),
                              "audio" === t.kind
                                ? ((this.audio_ = !0), this.updateAudioPlayingState(!0))
                                : ((this.video_ = !0), this.updateVideoPlayingState(!0)),
                              (this.isAddingTrack_ = !1),
                              (e.next = 27);
                            break;
                          case 23:
                            throw (
                              ((e.prev = 23),
                              (e.t0 = e.catch(12)),
                              (this.isAddingTrack_ = !1),
                              e.t0)
                            );
                          case 27:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[12, 23]]
                  );
                })
              )),
              function (e) {
                return o.apply(this, arguments);
              }),
          },
          {
            key: "removeTrack",
            value:
              ((i = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("audio" !== t.kind) {
                              e.next = 2;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_PARAMETER,
                              message: "remove audio track is not supported",
                            });
                          case 2:
                            if (!this.isAddingTrack_) {
                              e.next = 4;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message: "cannot remove track when a track is adding",
                            });
                          case 4:
                            if (!this.isRemovingTrack_) {
                              e.next = 6;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message:
                                "previous removeTrack is ongoing, please avoid repetitive execution",
                            });
                          case 6:
                            if (this.publishState_ !== rd) {
                              e.next = 8;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message: "cannot remove track when publishing localStream",
                            });
                          case 8:
                            if ((n = this.getMediaStream())) {
                              e.next = 11;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message: "the local stream is not initialized yet",
                            });
                          case 11:
                            if (-1 !== n.getTracks().indexOf(t)) {
                              e.next = 13;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_PARAMETER,
                              message: "the track to be removed is not being publishing",
                            });
                          case 13:
                            if (1 !== n.getTracks().length) {
                              e.next = 15;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message:
                                "remove the only video track is not supported, please use replaceTrack or muteVideo",
                            });
                          case 15:
                            if (
                              ((e.prev = 15),
                              (this.isRemovingTrack_ = !0),
                              !(r = this.getConnection()))
                            ) {
                              e.next = 21;
                              break;
                            }
                            return (e.next = 21), r.removeTrack(t);
                          case 21:
                            n.removeTrack(t),
                              "audio" === t.kind
                                ? ((this.audio_ = !1), this.updateAudioPlayingState(!1))
                                : ((this.video_ = !1), this.updateVideoPlayingState(!1)),
                              (this.isRemovingTrack_ = !1),
                              (e.next = 30);
                            break;
                          case 26:
                            throw (
                              ((e.prev = 26),
                              (e.t0 = e.catch(15)),
                              (this.isRemovingTrack_ = !1),
                              e.t0)
                            );
                          case 30:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[15, 26]]
                  );
                })
              )),
              function (e) {
                return i.apply(this, arguments);
              }),
          },
          {
            key: "replaceTrack",
            value:
              ((r = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r, i;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((n = this.getMediaStream())) {
                              e.next = 3;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message: "the local stream is not initialized yet",
                            });
                          case 3:
                            if (this.publishState_ !== rd) {
                              e.next = 5;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_OPERATION,
                              message: "cannot replace track when publishing localStream",
                            });
                          case 5:
                            if (
                              !(
                                ("audio" === t.kind && n.getAudioTracks().length <= 0) ||
                                ("video" === t.kind && n.getVideoTracks().length <= 0)
                              )
                            ) {
                              e.next = 7;
                              break;
                            }
                            throw new Rh({
                              code: Th.INVALID_PARAMETER,
                              message: "try to replace "
                                .concat(t.kind, " track but there's no previous ")
                                .concat(t.kind, " being published"),
                            });
                          case 7:
                            if (
                              ("video" === t.kind &&
                                "getSettings" in MediaStreamTrack.prototype &&
                                ((r = t.getSettings()),
                                !this.videoSetting_ ||
                                  (r.width === this.videoSetting_.width &&
                                    r.height === this.videoSetting_.height) ||
                                  this.log_.warn(
                                    "video resolution of the track ("
                                      .concat(r.width, " x ")
                                      .concat(
                                        r.height,
                                        ") shall be kept the same as the previous: "
                                      )
                                      .concat(this.videoSetting_.width, " x ")
                                      .concat(
                                        this.videoSetting_.height,
                                        ". It may cause abnormal Cloud Recording."
                                      )
                                  )),
                              "audio" === t.kind
                                ? (n.removeTrack(n.getAudioTracks()[0]),
                                  n.addTrack(t),
                                  Nt(Ct(u.prototype), "restartAudio", this).call(this))
                                : (n.removeTrack(n.getVideoTracks()[0]),
                                  n.addTrack(t),
                                  Nt(Ct(u.prototype), "restartVideo", this).call(this)),
                              !(i = this.getConnection()))
                            ) {
                              e.next = 13;
                              break;
                            }
                            return (e.next = 13), i.replaceTrack(t);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e) {
                return r.apply(this, arguments);
              }),
          },
          {
            key: "updateStream",
            value:
              ((n = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r, i, o, a, s, c, u, d, l, p, h, f, m, v, g;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (this.mediaStream_) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (
                              this.log_.info("updateStream() try to recover local stream"),
                              (e.prev = 3),
                              (e.next = 6),
                              Pv.getCameras()
                            );
                          case 6:
                            return (n = e.sent), (e.next = 9), Pv.getMicrophones();
                          case 9:
                            if (
                              ((r = e.sent),
                              (i = this.audio_ && t.audio),
                              (o = this.video_ && t.video) &&
                                0 === n.length &&
                                ((o = !1),
                                this.log_.info(
                                  "updateStream() video flag is true, but no camera detected, set video to false"
                                )),
                              i &&
                                0 === r.length &&
                                ((i = !1),
                                this.log_.info(
                                  "updateStream() audio flag is true, but no microphone detected, set audio to false"
                                )),
                              !1 !== i || !1 !== o)
                            ) {
                              e.next = 17;
                              break;
                            }
                            return (
                              this.log_.info(
                                "updateStream() both audio and video are false, recover stream aborted"
                              ),
                              e.abrupt("return")
                            );
                          case 17:
                            return (
                              (a = this.mediaStream_
                                .getAudioTracks()
                                .map(function (e) {
                                  return e.enabled;
                                })
                                .includes(!1)),
                              (s = this.mediaStream_
                                .getVideoTracks()
                                .map(function (e) {
                                  return e.enabled;
                                })
                                .includes(!1)),
                              (c =
                                t &&
                                n.findIndex(function (e) {
                                  return e.deviceId === t.cameraId;
                                }) >= 0),
                              (u =
                                t &&
                                r.findIndex(function (e) {
                                  return e.deviceId === t.microphoneId;
                                }) >= 0),
                              (e.next = 23),
                              sv({
                                audio: i,
                                video: o,
                                cameraId: c ? t.cameraId : void 0,
                                microphoneId: u ? t.microphoneId : void 0,
                                facingMode: this.facingMode_,
                                width: this.videoProfile_.width,
                                height: this.videoProfile_.height,
                                frameRate: this.videoProfile_.frameRate,
                                sampleRate: this.audioProfile_.sampleRate,
                                channelCount: this.audioProfile_.channelCount,
                              })
                            );
                          case 23:
                            (d = e.sent), (l = d.getTracks()), (p = 0);
                          case 26:
                            if (!(p < l.length)) {
                              e.next = 44;
                              break;
                            }
                            if ("audio" !== (h = l[p]).kind || !this.isAudioTrackMixed()) {
                              e.next = 39;
                              break;
                            }
                            if (
                              ((f = this.getAudioTrack()),
                              (m = Pv.AudioMixerPlugin.getAudioTrackMap()),
                              (v = m.get(f.id)).hasMicrophone)
                            ) {
                              e.next = 35;
                              break;
                            }
                            return h.stop(), e.abrupt("continue", 41);
                          case 35:
                            return (
                              (g = Pv.AudioMixerPlugin.mix({
                                targetTrack: h,
                                sourceList: v.sourceList,
                              })),
                              (e.next = 38),
                              this.replaceTrack_(g)
                            );
                          case 38:
                            return e.abrupt("continue", 41);
                          case 39:
                            return (e.next = 41), this.replaceTrack_(h);
                          case 41:
                            p++, (e.next = 26);
                            break;
                          case 44:
                            a &&
                              (this.log_.info(
                                "updateStream() prev audio tracks is muted, keep current audio tracks muted"
                              ),
                              this.doEnableTrack("audio", !1)),
                              s &&
                                (this.log_.info(
                                  "updateStream() prev video tracks is muted, keep current video tracks muted"
                                ),
                                this.doEnableTrack("video", !1)),
                              this.updateDeviceIdInUse(),
                              ff({ eventType: Lu }),
                              this.log_.info("updateStream() recover local stream successfully"),
                              (e.next = 56);
                            break;
                          case 51:
                            (e.prev = 51),
                              (e.t0 = e.catch(3)),
                              mf({ eventType: Lu, error: e.t0 }),
                              this.log_.error(
                                "updateStream() failed to recover local stream, " + e.t0
                              ),
                              this.emitter_.emit(
                                um,
                                new Rh({
                                  code: Th.DEVICE_AUTO_RECOVER_FAILED,
                                  message: e.t0.message,
                                })
                              );
                          case 56:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[3, 51]]
                  );
                })
              )),
              function (e) {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "replaceTrack_",
            value:
              ((t = yt(
                regeneratorRuntime.mark(function e(t) {
                  var n, r, i, o;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = this.mediaStream_.getAudioTracks()),
                              (r = this.mediaStream_.getVideoTracks()),
                              !(
                                ("audio" === t.kind && n.length <= 0) ||
                                ("video" === t.kind && r.length <= 0)
                              ))
                            ) {
                              e.next = 5;
                              break;
                            }
                            return (
                              this.log_.info(
                                "there is no previous ".concat(
                                  t.kind,
                                  " track, replacement ignored"
                                )
                              ),
                              e.abrupt("return")
                            );
                          case 5:
                            if (
                              ("audio" === t.kind
                                ? (this.mediaStream_.removeTrack(n[0]),
                                  this.mediaStream_.addTrack(t),
                                  Nt(Ct(u.prototype), "restartAudio", this).call(this))
                                : ("getSettings" in MediaStreamTrack.prototype &&
                                    ((i = t.getSettings()),
                                    !this.videoSetting_ ||
                                      (i.width === this.videoSetting_.width &&
                                        i.height === this.videoSetting_.height) ||
                                      this.log_.warn(
                                        "the resolution of video track to be replaced ("
                                          .concat(i.width, " x ")
                                          .concat(
                                            i.height,
                                            ") is different from the previous video settings ("
                                          )
                                          .concat(this.videoSetting_.width, " x ")
                                          .concat(
                                            this.videoSetting_.height,
                                            "). It may cause a cloud recording exception"
                                          )
                                      )),
                                  this.mediaStream_.removeTrack(r[0]),
                                  this.mediaStream_.addTrack(t),
                                  Nt(Ct(u.prototype), "restartVideo", this).call(this)),
                              !(o = this.getConnection()))
                            ) {
                              e.next = 10;
                              break;
                            }
                            return (e.next = 10), o.replaceTrack(t);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e) {
                return t.apply(this, arguments);
              }),
          },
          {
            key: "updateDeviceIdInUse",
            value: function () {
              var e = this;
              if (!this.mediaStream_)
                return (
                  (this.cameraId_ = ""),
                  (this.cameraGroupId_ = ""),
                  (this.microphoneId_ = ""),
                  void (this.microphoneGroupId_ = "")
                );
              "getSettings" in MediaStreamTrack.prototype &&
                this.mediaStream_.getTracks().forEach(function (t) {
                  if ("audio" === t.kind && e.isAudioTrackMixed()) {
                    var n = e.getMicrophoneTrackMixed();
                    if (n) {
                      var r = n.getSettings(),
                        i = r.deviceId,
                        o = r.groupId;
                      i && ((e.microphoneId_ = i), (e.microphoneGroupId_ = o));
                    }
                  } else {
                    var a = t.getSettings(),
                      s = a.deviceId,
                      c = a.groupId;
                    s &&
                      ("audio" === t.kind
                        ? ((e.microphoneId_ = s), (e.microphoneGroupId_ = c))
                        : "video" !== t.kind ||
                          e.screen_ ||
                          ((e.cameraId_ = s), (e.cameraGroupId_ = c)));
                  }
                });
              var t = this.mediaStream_.getAudioTracks(),
                n = this.mediaStream_.getVideoTracks();
              t && 0 === t.length && ((this.microphoneId_ = ""), (this.microphoneGroupId_ = "")),
                n && 0 === n.length && ((this.cameraId_ = ""), (this.cameraGroupId_ = ""));
            },
          },
          {
            key: "isAudioTrackMixed",
            value: function () {
              if (Pv.AudioMixerPlugin) {
                var e = Pv.AudioMixerPlugin.getAudioTrackMap(),
                  t = this.getAudioTrack();
                if (e && t && e.has(t.id)) return !0;
              }
              return !1;
            },
          },
          {
            key: "getMicrophoneTrackMixed",
            value: function () {
              if (Pv.AudioMixerPlugin) {
                var e = Pv.AudioMixerPlugin.getAudioTrackMap(),
                  t = this.getAudioTrack();
                if (e && t && e.has(t.id)) {
                  var n = e.get(t.id);
                  return n.hasMicrophone ? n.microphoneTrack : null;
                }
              }
              return null;
            },
          },
          {
            key: "getScreen",
            value: function () {
              return this.screen_;
            },
          },
          {
            key: "getVideo",
            value: function () {
              return this.video_;
            },
          },
          {
            key: "getAudio",
            value: function () {
              return this.audio_;
            },
          },
          {
            key: "getCameraId",
            value: function () {
              return this.cameraId_;
            },
          },
          {
            key: "getMicrophoneId",
            value: function () {
              return this.microphoneId_;
            },
          },
          {
            key: "getMicrophoneGroupId",
            value: function () {
              return this.microphoneGroupId_;
            },
          },
          {
            key: "getIsReadyToPublish",
            value: function () {
              return this.isReadyToPublish_;
            },
          },
          {
            key: "setIsReadyToPublish",
            value: function (e) {
              this.isReadyToPublish_ = e;
            },
          },
          {
            key: "setPublishState",
            value: function (e) {
              this.publishState_ = e;
            },
          },
          {
            key: "onStreamPublished",
            value: function (e) {
              if (e.localStream === this) {
                var t = this.getAudioTrack(),
                  n = this.getVideoTrack();
                if (t) {
                  var r = !t.enabled;
                  this.setMutedFlag(Xu, r);
                }
                if (n) {
                  var i = !n.enabled;
                  this.setMutedFlag($u, i);
                }
                this.connection_ && this.connection_.sendMutedFlag(this.mutedFlag_);
              }
            },
          },
          {
            key: "setAudioVolume",
            value: function (e) {
              Nt(Ct(u.prototype), "setAudioVolume", this).call(this, e);
            },
          },
          {
            key: "close",
            value: function () {
              Nt(Ct(u.prototype), "close", this).call(this), this.uninstallEvents();
            },
          },
        ]),
        u
      );
    })(Om),
    gv = $c.IS_ELECTRON,
    _v = $c.IS_XWEB;
  function yv(e) {
    if (!gv && !_v)
      return (e = window.localStorage
        ? localStorage.getItem(e) || sessionStorage.getItem(e)
        : (e = document.cookie.match(new RegExp("(?:^|;\\s)" + e + "=(.*?)(?:;\\s|$)")))
        ? e[1]
        : "");
  }
  function Sv(e, t, n) {
    if (!gv && !_v && window.localStorage)
      try {
        n ? localStorage.setItem(e, t) : sessionStorage.setItem(e, t);
      } catch (r) {}
  }
  function bv(e, t) {
    var n,
      r = {};
    if (void 0 === t)
      var i = window.location,
        o = i.host,
        a = i.pathname,
        s = i.search.substr(1),
        c = i.hash;
    else
      (o = (i =
        t.match(
          /\w+:\/\/((?:[\w-]+\.)+\w+)(?::\d+)?(\/[^\?\\"'\|:<>]*)?(?:\?([^'"\\<>#]*))?(?:#(\w+))?/i
        ) || [])[1]),
        (a = i[2]),
        (s = i[3]),
        (c = i[4]);
    return (
      void 0 !== c && (c = c.replace(/"|'|<|>/gi, "M")),
      s &&
        (function () {
          for (var e = s.split("&"), t = 0, n = e.length; t < n; t++)
            if (-1 != e[t].indexOf("=")) {
              var i = e[t].indexOf("="),
                o = e[t].slice(0, i);
              (i = e[t].slice(i + 1)), (r[o] = i);
            }
        })(),
      (s = (function () {
        if (void 0 === s) return s;
        for (var t = s.split("&"), n = [], r = 0, i = t.length; r < i; r++)
          if (-1 != t[r].indexOf("=")) {
            var o = t[r].indexOf("="),
              a = t[r].slice(0, o);
            (o = t[r].slice(o + 1)),
              (e.ignoreParams && -1 != e.ignoreParams.indexOf(a)) || n.push(a + "=" + o);
          }
        return n.join("&");
      })()),
      c &&
        (function () {
          for (
            var e = 0 == c.indexOf("#") ? c.substr(1).split("&") : c.split("&"),
              t = 0,
              r = e.length;
            t < r;
            t++
          )
            if (-1 != e[t].indexOf("=")) {
              var i = e[t].indexOf("="),
                o = e[t].slice(0, i);
              if (((i = e[t].slice(i + 1)), "adtag" === o.toLowerCase())) {
                n = i;
                break;
              }
            }
        })(),
      { host: o, path: a, search: s, hash: c, param: r, adtag: n }
    );
  }
  function kv(e) {
    var t,
      n = bv(e),
      r = {
        dm: n.host,
        pvi: "",
        si: "",
        url: n.path,
        arg: encodeURIComponent(n.search || "").substr(0, 512),
        ty: 0,
      };
    return (
      (r.pvi = (function () {
        var t = new Date(new Date().getTime() + 63072e6).toGMTString();
        if (e.userReport) {
          var n = yv("pgv_uid");
          (n && n == e.user.user_id) || ((r.ty = 1), Sv("pgv_uid", e.user.user_id, t)),
            (n = e.user.user_id);
        } else (n = yv("pgv_pvi")) || ((r.ty = 1), Sv("pgv_pvi", (n = Tv()), t));
        return n;
      })()),
      (r.si = ((t = yv("pgv_si")) || Sv("pgv_si", (t = Tv("s"))), t)),
      (r.url = (function () {
        var t = n.path;
        return (
          e.senseQuery &&
            (t += n.search ? "?" + encodeURIComponent(n.search || "").substr(0, 512) : ""),
          e.senseHash && (t += n.hash ? encodeURIComponent(n.hash) : ""),
          t
        );
      })()),
      r
    );
  }
  function Tv(e) {
    for (var t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], n = 10; 1 < n; n--) {
      var r = Math.floor(10 * Math.random()),
        i = t[r];
      (t[r] = t[n - 1]), (t[n - 1] = i);
    }
    for (n = r = 0; 5 > n; n++) r = 10 * r + t[n];
    return (e || "") + (r + "") + +new Date();
  }
  function Rv(e) {
    return { r2: e.sid };
  }
  function wv(e) {
    var t = {};
    if (e) {
      var n,
        r = [];
      for (n in e)
        e.hasOwnProperty(n) && r.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
      (e = r.join(";")), (t.ext = e);
    }
    return t;
  }
  function Iv(e) {
    var t = bv(e, document.referrer);
    return (
      (e = bv(e)),
      {
        rdm: t.host,
        rurl: t.path,
        rarg: encodeURIComponent(t.search || "").substr(0, 512),
        adt:
          e.param.ADTAG ||
          e.param.adtag ||
          e.param.CKTAG ||
          e.param.cktag ||
          e.param.PTAG ||
          e.param.ptag ||
          e.adtag,
      }
    );
  }
  function Cv() {
    try {
      var e = navigator,
        t = screen || { width: "", height: "", colorDepth: "" },
        n = {
          scr: t.width + "x" + t.height,
          scl: t.colorDepth + "-bit",
          lg: (e.language || e.userLanguage).toLowerCase(),
          tz: new Date().getTimezoneOffset() / 60,
        };
    } catch (r) {
      return {};
    }
    return n;
  }
  var Ev = {
      conf: {},
      version: "2.0.19",
      init: function (e) {
        var t = {
          sid: 0,
          cid: 0,
          autoReport: 0,
          senseHash: 0,
          senseQuery: 0,
          userReport: 0,
          performanceMonitor: 0,
          ignoreParams: [],
        };
        if (e) for (var n in e) e.hasOwnProperty(n) && t.hasOwnProperty(n) && (t[n] = e[n]);
        (this.conf = t), this.conf.autoReport && this.pgv();
      },
      pgv: function () {
        var e = this.conf,
          t = [],
          n = this.version;
        if (e.sid)
          if (
            !e.userReport ||
            (e.user && e.user.user_id && !parseInt(e.user.user_id, 10) !== conf.user.user_id)
          ) {
            for (
              var r = 0,
                i = [kv(e), Iv(e), Rv(e), Cv(), wv({ version: n }), { random: +new Date() }],
                o = i.length;
              r < o;
              r++
            )
              for (var a in i[r])
                i[r].hasOwnProperty(a) && t.push(a + "=" + (void 0 === i[r][a] ? "" : i[r][a]));
            var s = function (e) {
              e = "https://pingtas.qq.com/webview/pingd?" + e.join("&").toLowerCase();
              var t = new Image();
              (t.onload =
                t.onerror =
                t.onabort =
                  function () {
                    t = t.onload = t.onerror = t.onabort = null;
                  }),
                (t.src = e);
            };
            s(t),
              e.performanceMonitor &&
                ((t = function () {
                  for (
                    var t = (function () {
                        if (window.performance) {
                          var e = window.performance.timing,
                            t = { value: e.domainLookupEnd - e.domainLookupStart },
                            n = { value: e.connectEnd - e.connectStart },
                            r = {
                              value: e.responseStart - (e.requestStart || e.responseStart + 1),
                            },
                            i = e.responseEnd - e.responseStart;
                          e.domContentLoadedEventStart ? 0 > i && (i = 0) : (i = -1),
                            (e = {
                              domainLookupTime: t,
                              connectTime: n,
                              requestTime: r,
                              resourcesLoadedTime: { value: i },
                              domParsingTime: {
                                value: e.domContentLoadedEventStart
                                  ? e.domInteractive - e.domLoading
                                  : -1,
                              },
                              domContentLoadedTime: {
                                value: e.domContentLoadedEventStart
                                  ? e.domContentLoadedEventStart - e.fetchStart
                                  : -1,
                              },
                            });
                        } else e = "";
                        return e;
                      })(),
                      r = [],
                      i = [],
                      o = 0,
                      a = [kv(e), { r2: e.cid }, Cv(), { random: +new Date() }],
                      c = a.length;
                    o < c;
                    o++
                  )
                    for (var u in a[o])
                      a[o].hasOwnProperty(u) &&
                        i.push(u + "=" + (void 0 === a[o][u] ? "" : a[o][u]));
                  for (u in t)
                    t.hasOwnProperty(u) &&
                      ("domContentLoadedTime" == u
                        ? i.push("r3=" + t[u].value)
                        : r.push(t[u].value));
                  (t = wv({ pfm: r.join("_"), version: n })), i.push("ext=" + t.ext), s(i);
                }),
                void 0 !== window.performance &&
                void 0 !== window.performance.timing &&
                0 != window.performance.timing.loadEventEnd
                  ? t()
                  : window.attachEvent
                  ? window.attachEvent("onload", t)
                  : window.addEventListener && window.addEventListener("load", t, !1));
          } else
            console.log("MTA H5分析错误提示：您选择了用户统计uv，请设置业务的user_id，需为int类型");
        else console.log("MTA H5分析错误提示：您没有设置sid");
      },
      clickStat: function (e, t) {
        var n = this.conf,
          r = [],
          i = kv(n),
          o = Rv(n);
        if (n.cid) {
          (i.dm = "taclick"),
            (i.url = e),
            (o.r2 = n.cid),
            (o.r5 = (function (e) {
              e = void 0 === e ? {} : e;
              var t,
                n = [];
              for (t in e) e.hasOwnProperty(t) && n.push(t + "=" + encodeURIComponent(e[t]));
              return n.join(";");
            })(t));
          var a = 0;
          for (
            i = (n = [i, Iv(n), o, Cv(), wv({ version: this.version }), { random: +new Date() }])
              .length;
            a < i;
            a++
          )
            for (var s in n[a])
              n[a].hasOwnProperty(s) && r.push(s + "=" + (void 0 === n[a][s] ? "" : n[a][s]));
          r = "https://pingtas.qq.com/webview/pingd?" + r.join("&");
          var c = new Image();
          (c.onload =
            c.onerror =
            c.onabort =
              function () {
                c = c.onload = c.onerror = c.onabort = null;
              }),
            (c.src = r);
        } else
          console.log("MTA H5分析错误提示：您没有设置cid,请到管理台开通自定义事件并更新统计代码");
      },
      clickShare: function (e) {
        var t,
          n,
          r = this.conf,
          i = bv(r),
          o = void 0 === (i = i.param.CKTAG || i.param.ckatg) ? [] : i.split(".");
        if (r.cid) {
          i = [];
          var a = kv(r),
            s = Rv(r);
          for (
            a.dm = "taclick_share",
              a.url = "mtah5-share-" + e,
              s.r2 = r.cid,
              s.r5 =
                ((n = []),
                2 === (t = o).length && "mtah5_share" == t[0] && n.push(t[0] + "=" + t[1]),
                n.join(";")),
              e = 0,
              a = (r = [a, Iv(r), s, Cv(), wv({ version: this.version }), { random: +new Date() }])
                .length;
            e < a;
            e++
          )
            for (var c in r[e])
              r[e].hasOwnProperty(c) && i.push(c + "=" + (void 0 === r[e][c] ? "" : r[e][c]));
          c = "https://pingtas.qq.com/webview/pingd?" + i.join("&");
          var u = new Image();
          (u.onload =
            u.onerror =
            u.onabort =
              function () {
                u = u.onload = u.onerror = u.onabort = null;
              }),
            (u.src = c);
        } else
          console.log("MTA H5分析错误提示：您没有设置cid,请到管理台开通自定义事件并更新统计代码");
      },
    },
    xv = new ((function () {
      function e() {
        St(this, e), this.init();
      }
      return (
        kt(e, [
          {
            key: "report",
            value: function (e, t) {
              try {
                Ev.clickStat(e, t);
              } catch (Av) {}
            },
          },
          {
            key: "stat",
            value: function () {
              try {
                Ev.pgv();
              } catch (Av) {}
            },
          },
          {
            key: "init",
            value: function () {
              try {
                Ev.init({
                  sid: "500699039",
                  cid: "500699088",
                  autoReport: 1,
                  senseHash: 0,
                  senseQuery: 0,
                  performanceMonitor: 0,
                  ignoreParams: [],
                });
              } catch (Av) {}
            },
          },
        ]),
        e
      );
    })())(),
    Pv = {
      VERSION: "4.10.1",
      Logger: {
        LogLevel: { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, NONE: 5 },
        setLogLevel: function (e) {
          or.setLogLevel(e);
        },
        enableUploadLog: function () {
          or.enableUploadLog();
        },
        disableUploadLog: function () {
          or.disableUploadLog();
        },
      },
      checkSystemRequirements: function () {
        return yt(
          regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), If();
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )();
      },
      isScreenShareSupported: function () {
        return Cf();
      },
      getDevices: function () {
        return yt(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!Of() && !Df()) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", []);
                  case 2:
                    return (e.next = 4), navigator.mediaDevices.enumerateDevices();
                  case 4:
                    return (
                      (t = e.sent),
                      e.abrupt(
                        "return",
                        t.map(function (e, t) {
                          var n = e.label;
                          e.label || (n = e.kind + "_" + t);
                          var r = { label: n, deviceId: e.deviceId, kind: e.kind };
                          return e.groupId && (r.groupId = e.groupId), r;
                        })
                      )
                    );
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )();
      },
      getCameras: function () {
        return yt(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!Of() && !Df()) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", []);
                  case 2:
                    return (e.next = 4), navigator.mediaDevices.enumerateDevices();
                  case 4:
                    return (
                      (t = e.sent),
                      e.abrupt(
                        "return",
                        t
                          .filter(function (e) {
                            return "videoinput" === e.kind;
                          })
                          .map(function (e, t) {
                            var n = e.label;
                            e.label || (n = "camera_" + t);
                            var r = { label: n, deviceId: e.deviceId, kind: e.kind };
                            return e.groupId && (r.groupId = e.groupId), r;
                          })
                      )
                    );
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )();
      },
      getMicrophones: function () {
        return yt(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!Of() && !Df()) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", []);
                  case 2:
                    return (e.next = 4), navigator.mediaDevices.enumerateDevices();
                  case 4:
                    return (
                      (t = e.sent),
                      e.abrupt(
                        "return",
                        t
                          .filter(function (e) {
                            return "audioinput" === e.kind;
                          })
                          .map(function (e, t) {
                            var n = e.label;
                            e.label || (n = "microphone_" + t);
                            var r = { label: n, deviceId: e.deviceId, kind: e.kind };
                            return e.groupId && (r.groupId = e.groupId), r;
                          })
                      )
                    );
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )();
      },
      getSpeakers: function () {
        return yt(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), navigator.mediaDevices.enumerateDevices();
                  case 2:
                    return (
                      (t = e.sent),
                      e.abrupt(
                        "return",
                        t
                          .filter(function (e) {
                            return "audiooutput" === e.kind;
                          })
                          .map(function (e, t) {
                            var n = e.label;
                            e.label || (n = "speaker_" + t);
                            var r = { label: n, deviceId: e.deviceId, kind: e.kind };
                            return e.groupId && (r.groupId = e.groupId), r;
                          })
                      )
                    );
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )();
      },
      createClient: function (e) {
        if (!("" !== e.userId.trim()))
          throw new Rh({ code: Th.INVALID_PARAMETER, message: "userId cannot be all spaces" });
        xv.report("sdkAppID", { value: e.sdkAppId }),
          xv.report("version", { value: this.VERSION }),
          Fd &&
            ((Fd = !1),
            or.getLogLevel() != Pv.Logger.LogLevel.NONE &&
              (console.info(
                "******************************************************************************"
              ),
              console.info("*   欢迎使用 TRTC Web SDK - 腾讯云实时音视频通信"),
              console.info(
                "*   API 文档：https://web.sdk.qcloud.com/trtc/webrtc/doc/zh-cn/index.html"
              ),
              console.info(
                "*   版本更新日志：https://cloud.tencent.com/document/product/647/38958"
              ),
              console.info("*   反馈问题：https://github.com/tencentyun/TRTCSDK/issues"),
              console.info(
                "******************************************************************************"
              )),
            or.info("TRTC Web SDK Version: 4.10.1"),
            or.info("UserAgent: " + navigator.userAgent),
            or.info("URL of current page: " + location.href));
        var t = { version: this.VERSION };
        return new av(wt(wt({}, t), e));
      },
      createStream: function (e) {
        if (
          (void 0 !== e.screen && e.screen && void 0 === e.audio && (e.audio = !1),
          !(
            (void 0 === e.audio && void 0 === e.video) ||
            (void 0 === e.audioSource && void 0 === e.videoSource)
          ))
        )
          throw new Rh({
            code: Th.INVALID_PARAMETER,
            message:
              "LocalStream must be created by createStream() with either audio/video or audioSource/videoSourcebut can not be mixed with audio/video and audioSource/videoSource",
          });
        if (void 0 !== e.screen && !0 === e.screen && !0 === e.video)
          throw new Rh({
            code: Th.INVALID_PARAMETER,
            message: "screen/video options are mutually exclusive, they can not be both true",
          });
        if (e.audio && e.screenAudio)
          throw new Rh({
            code: Th.INVALID_PARAMETER,
            message: "audio/screenAudio options are mutually exclusive, they can not be both true",
          });
        if (!0 !== e.screen && !0 === e.screenAudio)
          throw new Rh({
            code: Th.INVALID_PARAMETER,
            message: "screenAudio options are configurable while screen options is true",
          });
        if (void 0 !== e.screen && !0 === e.screen && !this.isScreenShareSupported())
          throw new Rh({
            code: Th.INVALID_OPERATION,
            message: "screen capture is not supported, please use the latest chrome browser",
          });
        return new vv(e);
      },
    };
  return Pv;
});
