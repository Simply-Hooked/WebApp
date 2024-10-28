var rt = !1
    , st = !1
    , Q = []
    , at = -1;
function Yi(e) {
    Xi(e)
}
function Xi(e) {
    Q.includes(e) || Q.push(e),
        Ui()
}
function bn(e) {
    let t = Q.indexOf(e);
    t !== -1 && t > at && Q.splice(t, 1)
}
function Ui() {
    !st && !rt && (rt = !0,
        queueMicrotask(Ji))
}
function Ji() {
    rt = !1,
        st = !0;
    for (let e = 0; e < Q.length; e++)
        Q[e](),
            at = e;
    Q.length = 0,
        at = -1,
        st = !1
}
var ae, oe, xe, yn, ot = !0;
function Qi(e) {
    ot = !1,
        e(),
        ot = !0
}
function Zi(e) {
    ae = e.reactive,
        xe = e.release,
        oe = t=>e.effect(t, {
            scheduler: n=>{
                ot ? Yi(n) : n()
            }
        }),
        yn = e.raw
}
function Kt(e) {
    oe = e
}
function er(e) {
    let t = ()=>{}
    ;
    return [i=>{
        let r = oe(i);
        return e._x_effects || (e._x_effects = new Set,
                e._x_runEffects = ()=>{
                    e._x_effects.forEach(s=>s())
                }
        ),
            e._x_effects.add(r),
            t = ()=>{
                r !== void 0 && (e._x_effects.delete(r),
                    xe(r))
            }
            ,
            r
    }
        , ()=>{
            t()
        }
    ]
}
var xn = []
    , Sn = []
    , En = [];
function tr(e) {
    En.push(e)
}
function _n(e, t) {
    typeof t == "function" ? (e._x_cleanups || (e._x_cleanups = []),
        e._x_cleanups.push(t)) : (t = e,
        Sn.push(t))
}
function nr(e) {
    xn.push(e)
}
function ir(e, t, n) {
    e._x_attributeCleanups || (e._x_attributeCleanups = {}),
    e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
        e._x_attributeCleanups[t].push(n)
}
function Tn(e, t) {
    e._x_attributeCleanups && Object.entries(e._x_attributeCleanups).forEach(([n,i])=>{
            (t === void 0 || t.includes(n)) && (i.forEach(r=>r()),
                delete e._x_attributeCleanups[n])
        }
    )
}
var Et = new MutationObserver(wt)
    , _t = !1;
function Tt() {
    Et.observe(document, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeOldValue: !0
    }),
        _t = !0
}
function Cn() {
    rr(),
        Et.disconnect(),
        _t = !1
}
var he = []
    , Ye = !1;
function rr() {
    he = he.concat(Et.takeRecords()),
    he.length && !Ye && (Ye = !0,
        queueMicrotask(()=>{
                sr(),
                    Ye = !1
            }
        ))
}
function sr() {
    wt(he),
        he.length = 0
}
function P(e) {
    if (!_t)
        return e();
    Cn();
    let t = e();
    return Tt(),
        t
}
var Ct = !1
    , Le = [];
function ar() {
    Ct = !0
}
function or() {
    Ct = !1,
        wt(Le),
        Le = []
}
function wt(e) {
    if (Ct) {
        Le = Le.concat(e);
        return
    }
    let t = []
        , n = []
        , i = new Map
        , r = new Map;
    for (let s = 0; s < e.length; s++)
        if (!e[s].target._x_ignoreMutationObserver && (e[s].type === "childList" && (e[s].addedNodes.forEach(a=>a.nodeType === 1 && t.push(a)),
            e[s].removedNodes.forEach(a=>a.nodeType === 1 && n.push(a))),
        e[s].type === "attributes")) {
            let a = e[s].target
                , o = e[s].attributeName
                , l = e[s].oldValue
                , u = ()=>{
                    i.has(a) || i.set(a, []),
                        i.get(a).push({
                            name: o,
                            value: a.getAttribute(o)
                        })
                }
                , c = ()=>{
                    r.has(a) || r.set(a, []),
                        r.get(a).push(o)
                }
            ;
            a.hasAttribute(o) && l === null ? u() : a.hasAttribute(o) ? (c(),
                u()) : c()
        }
    r.forEach((s,a)=>{
            Tn(a, s)
        }
    ),
        i.forEach((s,a)=>{
                xn.forEach(o=>o(a, s))
            }
        );
    for (let s of n)
        if (!t.includes(s) && (Sn.forEach(a=>a(s)),
            s._x_cleanups))
            for (; s._x_cleanups.length; )
                s._x_cleanups.pop()();
    t.forEach(s=>{
            s._x_ignoreSelf = !0,
                s._x_ignore = !0
        }
    );
    for (let s of t)
        n.includes(s) || s.isConnected && (delete s._x_ignoreSelf,
            delete s._x_ignore,
            En.forEach(a=>a(s)),
            s._x_ignore = !0,
            s._x_ignoreSelf = !0);
    t.forEach(s=>{
            delete s._x_ignoreSelf,
                delete s._x_ignore
        }
    ),
        t = null,
        n = null,
        i = null,
        r = null
}
function wn(e) {
    return Ee(ie(e))
}
function Se(e, t, n) {
    return e._x_dataStack = [t, ...ie(n || e)],
        ()=>{
            e._x_dataStack = e._x_dataStack.filter(i=>i !== t)
        }
}
function Yt(e, t) {
    let n = e._x_dataStack[0];
    Object.entries(t).forEach(([i,r])=>{
            n[i] = r
        }
    )
}
function ie(e) {
    return e._x_dataStack ? e._x_dataStack : typeof ShadowRoot == "function" && e instanceof ShadowRoot ? ie(e.host) : e.parentNode ? ie(e.parentNode) : []
}
function Ee(e) {
    let t = new Proxy({},{
        ownKeys: ()=>Array.from(new Set(e.flatMap(n=>Object.keys(n)))),
        has: (n,i)=>e.some(r=>r.hasOwnProperty(i)),
        get: (n,i)=>(e.find(r=>{
                if (r.hasOwnProperty(i)) {
                    let s = Object.getOwnPropertyDescriptor(r, i);
                    if (s.get && s.get._x_alreadyBound || s.set && s.set._x_alreadyBound)
                        return !0;
                    if ((s.get || s.set) && s.enumerable) {
                        let a = s.get
                            , o = s.set
                            , l = s;
                        a = a && a.bind(t),
                            o = o && o.bind(t),
                        a && (a._x_alreadyBound = !0),
                        o && (o._x_alreadyBound = !0),
                            Object.defineProperty(r, i, {
                                ...l,
                                get: a,
                                set: o
                            })
                    }
                    return !0
                }
                return !1
            }
        ) || {})[i],
        set: (n,i,r)=>{
            let s = e.find(a=>a.hasOwnProperty(i));
            return s ? s[i] = r : e[e.length - 1][i] = r,
                !0
        }
    });
    return t
}
function On(e) {
    let t = i=>typeof i == "object" && !Array.isArray(i) && i !== null
        , n = (i,r="")=>{
            Object.entries(Object.getOwnPropertyDescriptors(i)).forEach(([s,{value: a, enumerable: o}])=>{
                    if (o === !1 || a === void 0)
                        return;
                    let l = r === "" ? s : `${r}.${s}`;
                    typeof a == "object" && a !== null && a._x_interceptor ? i[s] = a.initialize(e, l, s) : t(a) && a !== i && !(a instanceof Element) && n(a, l)
                }
            )
        }
    ;
    return n(e)
}
function Mn(e, t=()=>{}
) {
    let n = {
        initialValue: void 0,
        _x_interceptor: !0,
        initialize(i, r, s) {
            return e(this.initialValue, ()=>lr(i, r), a=>lt(i, r, a), r, s)
        }
    };
    return t(n),
        i=>{
            if (typeof i == "object" && i !== null && i._x_interceptor) {
                let r = n.initialize.bind(n);
                n.initialize = (s,a,o)=>{
                    let l = i.initialize(s, a, o);
                    return n.initialValue = l,
                        r(s, a, o)
                }
            } else
                n.initialValue = i;
            return n
        }
}
function lr(e, t) {
    return t.split(".").reduce((n,i)=>n[i], e)
}
function lt(e, t, n) {
    if (typeof t == "string" && (t = t.split(".")),
    t.length === 1)
        e[t[0]] = n;
    else {
        if (t.length === 0)
            throw error;
        return e[t[0]] || (e[t[0]] = {}),
            lt(e[t[0]], t.slice(1), n)
    }
}
var $n = {};
function B(e, t) {
    $n[e] = t
}
function ut(e, t) {
    return Object.entries($n).forEach(([n,i])=>{
            Object.defineProperty(e, `$ ${n}`, {
                get() {
                    let[r,s] = In(t);
                    return r = {
                        interceptor: Mn,
                        ...r
                    },
                        _n(t, s),
                        i(t, r)
                },
                enumerable: !1
            })
        }
    ),
        e
}
function ur(e, t, n, ...i) {
    try {
        return n(...i)
    } catch (r) {
        ve(r, e, t)
    }
}
function ve(e, t, n=void 0) {
    Object.assign(e, {
        el: t,
        expression: n
    }),
        console.warn(`Alpine Expression Error: ${e.message}

${n ? 'Expression: "' + n + `"

` : ""}`, t),
        setTimeout(()=>{
                throw e
            }
            , 0)
}
var $e = !0;
function cr(e) {
    let t = $e;
    $e = !1,
        e(),
        $e = t
}
function ne(e, t, n={}) {
    let i;
    return D(e, t)(r=>i = r, n),
        i
}
function D(...e) {
    return Ln(...e)
}
var Ln = An;
function dr(e) {
    Ln = e
}
function An(e, t) {
    let n = {};
    ut(n, e);
    let i = [n, ...ie(e)]
        , r = typeof t == "function" ? fr(i, t) : hr(i, t, e);
    return ur.bind(null, e, t, r)
}
function fr(e, t) {
    return (n=()=>{}
        ,{scope: i={}, params: r=[]}={})=>{
        let s = t.apply(Ee([i, ...e]), r);
        Ae(n, s)
    }
}
var Xe = {};
function pr(e, t) {
    if (Xe[e])
        return Xe[e];
    let n = Object.getPrototypeOf(async function() {}).constructor
        , i = /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e) ? `(async()=>{ ${e} })()` : e
        , s = (()=>{
            try {
                return new n(["__self", "scope"],`with (scope) { __self.result = ${i} }; __self.finished = true; return __self.result;`)
            } catch (a) {
                return ve(a, t, e),
                    Promise.resolve()
            }
        }
    )();
    return Xe[e] = s,
        s
}
function hr(e, t, n) {
    let i = pr(t, n);
    return (r=()=>{}
        ,{scope: s={}, params: a=[]}={})=>{
        i.result = void 0,
            i.finished = !1;
        let o = Ee([s, ...e]);
        if (typeof i == "function") {
            let l = i(i, o).catch(u=>ve(u, n, t));
            i.finished ? (Ae(r, i.result, o, a, n),
                i.result = void 0) : l.then(u=>{
                    Ae(r, u, o, a, n)
                }
            ).catch(u=>ve(u, n, t)).finally(()=>i.result = void 0)
        }
    }
}
function Ae(e, t, n, i, r) {
    if ($e && typeof t == "function") {
        let s = t.apply(n, i);
        s instanceof Promise ? s.then(a=>Ae(e, a, n, i)).catch(a=>ve(a, r, t)) : e(s)
    } else
        typeof t == "object" && t instanceof Promise ? t.then(s=>e(s)) : e(t)
}
var Ot = "x-";
function le(e="") {
    return Ot + e
}
function mr(e) {
    Ot = e
}
var ct = {};
function A(e, t) {
    return ct[e] = t,
        {
            before(n) {
                if (!ct[n]) {
                    console.warn("Cannot find directive `${directive}`. `${name}` will use the default order of execution");
                    return
                }
                const i = J.indexOf(n);
                J.splice(i >= 0 ? i : J.indexOf("DEFAULT"), 0, e)
            }
        }
}
function Mt(e, t, n) {
    if (t = Array.from(t),
        e._x_virtualDirectives) {
        let s = Object.entries(e._x_virtualDirectives).map(([o,l])=>({
            name: o,
            value: l
        }))
            , a = Pn(s);
        s = s.map(o=>a.find(l=>l.name === o.name) ? {
            name: `x-bind:${o.name}`,
            value: `"${o.value}"`
        } : o),
            t = t.concat(s)
    }
    let i = {};
    return t.map(Fn((s,a)=>i[s] = a)).filter(Rn).map(br(i, n)).sort(yr).map(s=>vr(e, s))
}
function Pn(e) {
    return Array.from(e).map(Fn()).filter(t=>!Rn(t))
}
var dt = !1
    , pe = new Map
    , kn = Symbol();
function gr(e) {
    dt = !0;
    let t = Symbol();
    kn = t,
        pe.set(t, []);
    let n = ()=>{
            for (; pe.get(t).length; )
                pe.get(t).shift()();
            pe.delete(t)
        }
        , i = ()=>{
            dt = !1,
                n()
        }
    ;
    e(n),
        i()
}
function In(e) {
    let t = []
        , n = o=>t.push(o)
        , [i,r] = er(e);
    return t.push(r),
        [{
            Alpine: Te,
            effect: i,
            cleanup: n,
            evaluateLater: D.bind(D, e),
            evaluate: ne.bind(ne, e)
        }, ()=>t.forEach(o=>o())]
}
function vr(e, t) {
    let n = ()=>{}
        , i = ct[t.type] || n
        , [r,s] = In(e);
    ir(e, t.original, s);
    let a = ()=>{
            e._x_ignore || e._x_ignoreSelf || (i.inline && i.inline(e, t, r),
                i = i.bind(i, e, t, r),
                dt ? pe.get(kn).push(i) : i())
        }
    ;
    return a.runCleanups = s,
        a
}
var Nn = (e,t)=>({name: n, value: i})=>(n.startsWith(e) && (n = n.replace(e, t)),
    {
        name: n,
        value: i
    })
    , Dn = e=>e;
function Fn(e=()=>{}
) {
    return ({name: t, value: n})=>{
        let {name: i, value: r} = zn.reduce((s,a)=>a(s), {
            name: t,
            value: n
        });
        return i !== t && e(i, t),
            {
                name: i,
                value: r
            }
    }
}
var zn = [];
function $t(e) {
    zn.push(e)
}
function Rn({name: e}) {
    return Bn().test(e)
}
var Bn = ()=>new RegExp(`^${Ot}([^:^.]+)\\b`);
function br(e, t) {
    return ({name: n, value: i})=>{
        let r = n.match(Bn())
            , s = n.match(/:([a-zA-Z0-9\-:]+)/)
            , a = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || []
            , o = t || e[n] || n;
        return {
            type: r ? r[1] : null,
            value: s ? s[1] : null,
            modifiers: a.map(l=>l.replace(".", "")),
            expression: i,
            original: o
        }
    }
}
var ft = "DEFAULT"
    , J = ["ignore", "ref", "data", "id", "bind", "init", "for", "model", "modelable", "transition", "show", "if", ft, "teleport"];
function yr(e, t) {
    let n = J.indexOf(e.type) === -1 ? ft : e.type
        , i = J.indexOf(t.type) === -1 ? ft : t.type;
    return J.indexOf(n) - J.indexOf(i)
}
function me(e, t, n={}) {
    e.dispatchEvent(new CustomEvent(t,{
        detail: n,
        bubbles: !0,
        composed: !0,
        cancelable: !0
    }))
}
function q(e, t) {
    if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
        Array.from(e.children).forEach(r=>q(r, t));
        return
    }
    let n = !1;
    if (t(e, ()=>n = !0),
        n)
        return;
    let i = e.firstElementChild;
    for (; i; )
        q(i, t),
            i = i.nextElementSibling
}
function re(e, ...t) {
    console.warn(`Alpine Warning: ${e}`, ...t)
}
function xr() {
    document.body || re("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),
        me(document, "alpine:init"),
        me(document, "alpine:initializing"),
        Tt(),
        tr(t=>K(t, q)),
        _n(t=>Kn(t)),
        nr((t,n)=>{
                Mt(t, n).forEach(i=>i())
            }
        );
    let e = t=>!De(t.parentElement, !0);
    Array.from(document.querySelectorAll(Hn())).filter(e).forEach(t=>{
            K(t)
        }
    ),
        me(document, "alpine:initialized")
}
var Lt = []
    , jn = [];
function Gn() {
    return Lt.map(e=>e())
}
function Hn() {
    return Lt.concat(jn).map(e=>e())
}
function Vn(e) {
    Lt.push(e)
}
function Wn(e) {
    jn.push(e)
}
function De(e, t=!1) {
    return Fe(e, n=>{
            if ((t ? Hn() : Gn()).some(r=>n.matches(r)))
                return !0
        }
    )
}
function Fe(e, t) {
    if (e) {
        if (t(e))
            return e;
        if (e._x_teleportBack && (e = e._x_teleportBack),
            !!e.parentElement)
            return Fe(e.parentElement, t)
    }
}
function Sr(e) {
    return Gn().some(t=>e.matches(t))
}
var qn = [];
function Er(e) {
    qn.push(e)
}
function K(e, t=q, n=()=>{}
) {
    gr(()=>{
            t(e, (i,r)=>{
                    n(i, r),
                        qn.forEach(s=>s(i, r)),
                        Mt(i, i.attributes).forEach(s=>s()),
                    i._x_ignore && r()
                }
            )
        }
    )
}
function Kn(e) {
    q(e, t=>Tn(t))
}
var pt = []
    , At = !1;
function Pt(e=()=>{}
) {
    return queueMicrotask(()=>{
            At || setTimeout(()=>{
                    ht()
                }
            )
        }
    ),
        new Promise(t=>{
                pt.push(()=>{
                        e(),
                            t()
                    }
                )
            }
        )
}
function ht() {
    for (At = !1; pt.length; )
        pt.shift()()
}
function _r() {
    At = !0
}
function kt(e, t) {
    return Array.isArray(t) ? Xt(e, t.join(" ")) : typeof t == "object" && t !== null ? Tr(e, t) : typeof t == "function" ? kt(e, t()) : Xt(e, t)
}
function Xt(e, t) {
    let n = r=>r.split(" ").filter(s=>!e.classList.contains(s)).filter(Boolean)
        , i = r=>(e.classList.add(...r),
            ()=>{
                e.classList.remove(...r)
            }
    );
    return t = t === !0 ? t = "" : t || "",
        i(n(t))
}
function Tr(e, t) {
    let n = o=>o.split(" ").filter(Boolean)
        , i = Object.entries(t).flatMap(([o,l])=>l ? n(o) : !1).filter(Boolean)
        , r = Object.entries(t).flatMap(([o,l])=>l ? !1 : n(o)).filter(Boolean)
        , s = []
        , a = [];
    return r.forEach(o=>{
            e.classList.contains(o) && (e.classList.remove(o),
                a.push(o))
        }
    ),
        i.forEach(o=>{
                e.classList.contains(o) || (e.classList.add(o),
                    s.push(o))
            }
        ),
        ()=>{
            a.forEach(o=>e.classList.add(o)),
                s.forEach(o=>e.classList.remove(o))
        }
}
function ze(e, t) {
    return typeof t == "object" && t !== null ? Cr(e, t) : wr(e, t)
}
function Cr(e, t) {
    let n = {};
    return Object.entries(t).forEach(([i,r])=>{
            n[i] = e.style[i],
            i.startsWith("--") || (i = Or(i)),
                e.style.setProperty(i, r)
        }
    ),
        setTimeout(()=>{
                e.style.length === 0 && e.removeAttribute("style")
            }
        ),
        ()=>{
            ze(e, n)
        }
}
function wr(e, t) {
    let n = e.getAttribute("style", t);
    return e.setAttribute("style", t),
        ()=>{
            e.setAttribute("style", n || "")
        }
}
function Or(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}
function mt(e, t=()=>{}
) {
    let n = !1;
    return function() {
        n ? t.apply(this, arguments) : (n = !0,
            e.apply(this, arguments))
    }
}
A("transition", (e,{value: t, modifiers: n, expression: i},{evaluate: r})=>{
        typeof i == "function" && (i = r(i)),
            i ? Mr(e, i, t) : $r(e, n, t)
    }
);
function Mr(e, t, n) {
    Yn(e, kt, ""),
        {
            enter: r=>{
                e._x_transition.enter.during = r
            }
            ,
            "enter-start": r=>{
                e._x_transition.enter.start = r
            }
            ,
            "enter-end": r=>{
                e._x_transition.enter.end = r
            }
            ,
            leave: r=>{
                e._x_transition.leave.during = r
            }
            ,
            "leave-start": r=>{
                e._x_transition.leave.start = r
            }
            ,
            "leave-end": r=>{
                e._x_transition.leave.end = r
            }
        }[n](t)
}
function $r(e, t, n) {
    Yn(e, ze);
    let i = !t.includes("in") && !t.includes("out") && !n
        , r = i || t.includes("in") || ["enter"].includes(n)
        , s = i || t.includes("out") || ["leave"].includes(n);
    t.includes("in") && !i && (t = t.filter((g,x)=>x < t.indexOf("out"))),
    t.includes("out") && !i && (t = t.filter((g,x)=>x > t.indexOf("out")));
    let a = !t.includes("opacity") && !t.includes("scale")
        , o = a || t.includes("opacity")
        , l = a || t.includes("scale")
        , u = o ? 0 : 1
        , c = l ? ce(t, "scale", 95) / 100 : 1
        , p = ce(t, "delay", 0)
        , f = ce(t, "origin", "center")
        , m = "opacity, transform"
        , v = ce(t, "duration", 150) / 1e3
        , h = ce(t, "duration", 75) / 1e3
        , d = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    r && (e._x_transition.enter.during = {
        transformOrigin: f,
        transitionDelay: p,
        transitionProperty: m,
        transitionDuration: `${v}s`,
        transitionTimingFunction: d
    },
        e._x_transition.enter.start = {
            opacity: u,
            transform: `scale(${c})`
        },
        e._x_transition.enter.end = {
            opacity: 1,
            transform: "scale(1)"
        }),
    s && (e._x_transition.leave.during = {
        transformOrigin: f,
        transitionDelay: p,
        transitionProperty: m,
        transitionDuration: `${h}s`,
        transitionTimingFunction: d
    },
        e._x_transition.leave.start = {
            opacity: 1,
            transform: "scale(1)"
        },
        e._x_transition.leave.end = {
            opacity: u,
            transform: `scale(${c})`
        })
}
function Yn(e, t, n={}) {
    e._x_transition || (e._x_transition = {
        enter: {
            during: n,
            start: n,
            end: n
        },
        leave: {
            during: n,
            start: n,
            end: n
        },
        in(i=()=>{}
            , r=()=>{}
        ) {
            gt(e, t, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, i, r)
        },
        out(i=()=>{}
            , r=()=>{}
        ) {
            gt(e, t, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, i, r)
        }
    })
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(e, t, n, i) {
    const r = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let s = ()=>r(n);
    if (t) {
        e._x_transition && (e._x_transition.enter || e._x_transition.leave) ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length) ? e._x_transition.in(n) : s() : e._x_transition ? e._x_transition.in(n) : s();
        return
    }
    e._x_hidePromise = e._x_transition ? new Promise((a,o)=>{
            e._x_transition.out(()=>{}
                , ()=>a(i)),
                e._x_transitioning.beforeCancel(()=>o({
                    isFromCancelledTransition: !0
                }))
        }
    ) : Promise.resolve(i),
        queueMicrotask(()=>{
                let a = Xn(e);
                a ? (a._x_hideChildren || (a._x_hideChildren = []),
                    a._x_hideChildren.push(e)) : r(()=>{
                        let o = l=>{
                                let u = Promise.all([l._x_hidePromise, ...(l._x_hideChildren || []).map(o)]).then(([c])=>c());
                                return delete l._x_hidePromise,
                                    delete l._x_hideChildren,
                                    u
                            }
                        ;
                        o(e).catch(l=>{
                                if (!l.isFromCancelledTransition)
                                    throw l
                            }
                        )
                    }
                )
            }
        )
}
;
function Xn(e) {
    let t = e.parentNode;
    if (t)
        return t._x_hidePromise ? t : Xn(t)
}
function gt(e, t, {during: n, start: i, end: r}={}, s=()=>{}
    , a=()=>{}
) {
    if (e._x_transitioning && e._x_transitioning.cancel(),
    Object.keys(n).length === 0 && Object.keys(i).length === 0 && Object.keys(r).length === 0) {
        s(),
            a();
        return
    }
    let o, l, u;
    Lr(e, {
        start() {
            o = t(e, i)
        },
        during() {
            l = t(e, n)
        },
        before: s,
        end() {
            o(),
                u = t(e, r)
        },
        after: a,
        cleanup() {
            l(),
                u()
        }
    })
}
function Lr(e, t) {
    let n, i, r, s = mt(()=>{
            P(()=>{
                    n = !0,
                    i || t.before(),
                    r || (t.end(),
                        ht()),
                        t.after(),
                    e.isConnected && t.cleanup(),
                        delete e._x_transitioning
                }
            )
        }
    );
    e._x_transitioning = {
        beforeCancels: [],
        beforeCancel(a) {
            this.beforeCancels.push(a)
        },
        cancel: mt(function() {
            for (; this.beforeCancels.length; )
                this.beforeCancels.shift()();
            s()
        }),
        finish: s
    },
        P(()=>{
                t.start(),
                    t.during()
            }
        ),
        _r(),
        requestAnimationFrame(()=>{
                if (n)
                    return;
                let a = Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3
                    , o = Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
                a === 0 && (a = Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3),
                    P(()=>{
                            t.before()
                        }
                    ),
                    i = !0,
                    requestAnimationFrame(()=>{
                            n || (P(()=>{
                                    t.end()
                                }
                            ),
                                ht(),
                                setTimeout(e._x_transitioning.finish, a + o),
                                r = !0)
                        }
                    )
            }
        )
}
function ce(e, t, n) {
    if (e.indexOf(t) === -1)
        return n;
    const i = e[e.indexOf(t) + 1];
    if (!i || t === "scale" && isNaN(i))
        return n;
    if (t === "duration") {
        let r = i.match(/([0-9]+)ms/);
        if (r)
            return r[1]
    }
    return t === "origin" && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [i, e[e.indexOf(t) + 2]].join(" ") : i
}
var be = !1;
function _e(e, t=()=>{}
) {
    return (...n)=>be ? t(...n) : e(...n)
}
function Ar(e) {
    return (...t)=>be && e(...t)
}
function Pr(e, t) {
    t._x_dataStack || (t._x_dataStack = e._x_dataStack),
        be = !0,
        Ir(()=>{
                kr(t)
            }
        ),
        be = !1
}
function kr(e) {
    let t = !1;
    K(e, (i,r)=>{
            q(i, (s,a)=>{
                    if (t && Sr(s))
                        return a();
                    t = !0,
                        r(s, a)
                }
            )
        }
    )
}
function Ir(e) {
    let t = oe;
    Kt((n,i)=>{
            let r = t(n);
            return xe(r),
                ()=>{}
        }
    ),
        e(),
        Kt(t)
}
function Un(e, t, n, i=[]) {
    switch (e._x_bindings || (e._x_bindings = ae({})),
        e._x_bindings[t] = n,
        t = i.includes("camel") ? jr(t) : t,
        t) {
        case "value":
            Nr(e, n);
            break;
        case "style":
            Fr(e, n);
            break;
        case "class":
            Dr(e, n);
            break;
        default:
            zr(e, t, n);
            break
    }
}
function Nr(e, t) {
    if (e.type === "radio")
        e.attributes.value === void 0 && (e.value = t),
        window.fromModel && (e.checked = Ut(e.value, t));
    else if (e.type === "checkbox")
        Number.isInteger(t) ? e.value = t : !Number.isInteger(t) && !Array.isArray(t) && typeof t != "boolean" && ![null, void 0].includes(t) ? e.value = String(t) : Array.isArray(t) ? e.checked = t.some(n=>Ut(n, e.value)) : e.checked = !!t;
    else if (e.tagName === "SELECT")
        Br(e, t);
    else {
        if (e.value === t)
            return;
        e.value = t
    }
}
function Dr(e, t) {
    e._x_undoAddedClasses && e._x_undoAddedClasses(),
        e._x_undoAddedClasses = kt(e, t)
}
function Fr(e, t) {
    e._x_undoAddedStyles && e._x_undoAddedStyles(),
        e._x_undoAddedStyles = ze(e, t)
}
function zr(e, t, n) {
    [null, void 0, !1].includes(n) && Gr(t) ? e.removeAttribute(t) : (Jn(t) && (n = t),
        Rr(e, t, n))
}
function Rr(e, t, n) {
    e.getAttribute(t) != n && e.setAttribute(t, n)
}
function Br(e, t) {
    const n = [].concat(t).map(i=>i + "");
    Array.from(e.options).forEach(i=>{
            i.selected = n.includes(i.value)
        }
    )
}
function jr(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t,n)=>n.toUpperCase())
}
function Ut(e, t) {
    return e == t
}
function Jn(e) {
    return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e)
}
function Gr(e) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(e)
}
function Hr(e, t, n) {
    if (e._x_bindings && e._x_bindings[t] !== void 0)
        return e._x_bindings[t];
    let i = e.getAttribute(t);
    return i === null ? typeof n == "function" ? n() : n : i === "" ? !0 : Jn(t) ? !![t, "true"].includes(i) : i
}
function Qn(e, t) {
    var n;
    return function() {
        var i = this
            , r = arguments
            , s = function() {
            n = null,
                e.apply(i, r)
        };
        clearTimeout(n),
            n = setTimeout(s, t)
    }
}
function Zn(e, t) {
    let n;
    return function() {
        let i = this
            , r = arguments;
        n || (e.apply(i, r),
            n = !0,
            setTimeout(()=>n = !1, t))
    }
}
function Vr(e) {
    e(Te)
}
var U = {}
    , Jt = !1;
function Wr(e, t) {
    if (Jt || (U = ae(U),
        Jt = !0),
    t === void 0)
        return U[e];
    U[e] = t,
    typeof t == "object" && t !== null && t.hasOwnProperty("init") && typeof t.init == "function" && U[e].init(),
        On(U[e])
}
function qr() {
    return U
}
var ei = {};
function Kr(e, t) {
    let n = typeof t != "function" ? ()=>t : t;
    e instanceof Element ? ti(e, n()) : ei[e] = n
}
function Yr(e) {
    return Object.entries(ei).forEach(([t,n])=>{
            Object.defineProperty(e, t, {
                get() {
                    return (...i)=>n(...i)
                }
            })
        }
    ),
        e
}
function ti(e, t, n) {
    let i = [];
    for (; i.length; )
        i.pop()();
    let r = Object.entries(t).map(([a,o])=>({
        name: a,
        value: o
    }))
        , s = Pn(r);
    r = r.map(a=>s.find(o=>o.name === a.name) ? {
        name: `x-bind:${a.name}`,
        value: `"${a.value}"`
    } : a),
        Mt(e, r, n).map(a=>{
                i.push(a.runCleanups),
                    a()
            }
        )
}
var ni = {};
function Xr(e, t) {
    ni[e] = t
}
function Ur(e, t) {
    return Object.entries(ni).forEach(([n,i])=>{
            Object.defineProperty(e, n, {
                get() {
                    return (...r)=>i.bind(t)(...r)
                },
                enumerable: !1
            })
        }
    ),
        e
}
var Jr = {
    get reactive() {
        return ae
    },
    get release() {
        return xe
    },
    get effect() {
        return oe
    },
    get raw() {
        return yn
    },
    version: "3.12.0",
    flushAndStopDeferringMutations: or,
    dontAutoEvaluateFunctions: cr,
    disableEffectScheduling: Qi,
    startObservingMutations: Tt,
    stopObservingMutations: Cn,
    setReactivityEngine: Zi,
    closestDataStack: ie,
    skipDuringClone: _e,
    onlyDuringClone: Ar,
    addRootSelector: Vn,
    addInitSelector: Wn,
    addScopeToNode: Se,
    deferMutations: ar,
    mapAttributes: $t,
    evaluateLater: D,
    interceptInit: Er,
    setEvaluator: dr,
    mergeProxies: Ee,
    findClosest: Fe,
    closestRoot: De,
    destroyTree: Kn,
    interceptor: Mn,
    transition: gt,
    setStyles: ze,
    mutateDom: P,
    directive: A,
    throttle: Zn,
    debounce: Qn,
    evaluate: ne,
    initTree: K,
    nextTick: Pt,
    prefixed: le,
    prefix: mr,
    plugin: Vr,
    magic: B,
    store: Wr,
    start: xr,
    clone: Pr,
    bound: Hr,
    $data: wn,
    walk: q,
    data: Xr,
    bind: Kr
}
    , Te = Jr;
function Qr(e, t) {
    const n = Object.create(null)
        , i = e.split(",");
    for (let r = 0; r < i.length; r++)
        n[i[r]] = !0;
    return t ? r=>!!n[r.toLowerCase()] : r=>!!n[r]
}
var Zr = Object.freeze({}), ii = Object.assign, es = Object.prototype.hasOwnProperty, Re = (e,t)=>es.call(e, t), Z = Array.isArray, ge = e=>ri(e) === "[object Map]", ts = e=>typeof e == "string", It = e=>typeof e == "symbol", Be = e=>e !== null && typeof e == "object", ns = Object.prototype.toString, ri = e=>ns.call(e), si = e=>ri(e).slice(8, -1), Nt = e=>ts(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, is = e=>{
    const t = Object.create(null);
    return n=>t[n] || (t[n] = e(n))
}
    , rs = is(e=>e.charAt(0).toUpperCase() + e.slice(1)), ai = (e,t)=>e !== t && (e === e || t === t), vt = new WeakMap, de = [], j, ee = Symbol("iterate"), bt = Symbol("Map key iterate");
function ss(e) {
    return e && e._isEffect === !0
}
function as(e, t=Zr) {
    ss(e) && (e = e.raw);
    const n = us(e, t);
    return t.lazy || n(),
        n
}
function os(e) {
    e.active && (oi(e),
    e.options.onStop && e.options.onStop(),
        e.active = !1)
}
var ls = 0;
function us(e, t) {
    const n = function() {
        if (!n.active)
            return e();
        if (!de.includes(n)) {
            oi(n);
            try {
                return ds(),
                    de.push(n),
                    j = n,
                    e()
            } finally {
                de.pop(),
                    li(),
                    j = de[de.length - 1]
            }
        }
    };
    return n.id = ls++,
        n.allowRecurse = !!t.allowRecurse,
        n._isEffect = !0,
        n.active = !0,
        n.raw = e,
        n.deps = [],
        n.options = t,
        n
}
function oi(e) {
    const {deps: t} = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++)
            t[n].delete(e);
        t.length = 0
    }
}
var se = !0
    , Dt = [];
function cs() {
    Dt.push(se),
        se = !1
}
function ds() {
    Dt.push(se),
        se = !0
}
function li() {
    const e = Dt.pop();
    se = e === void 0 ? !0 : e
}
function R(e, t, n) {
    if (!se || j === void 0)
        return;
    let i = vt.get(e);
    i || vt.set(e, i = new Map);
    let r = i.get(n);
    r || i.set(n, r = new Set),
    r.has(j) || (r.add(j),
        j.deps.push(r),
    j.options.onTrack && j.options.onTrack({
        effect: j,
        target: e,
        type: t,
        key: n
    }))
}
function Y(e, t, n, i, r, s) {
    const a = vt.get(e);
    if (!a)
        return;
    const o = new Set
        , l = c=>{
            c && c.forEach(p=>{
                    (p !== j || p.allowRecurse) && o.add(p)
                }
            )
        }
    ;
    if (t === "clear")
        a.forEach(l);
    else if (n === "length" && Z(e))
        a.forEach((c,p)=>{
                (p === "length" || p >= i) && l(c)
            }
        );
    else
        switch (n !== void 0 && l(a.get(n)),
            t) {
            case "add":
                Z(e) ? Nt(n) && l(a.get("length")) : (l(a.get(ee)),
                ge(e) && l(a.get(bt)));
                break;
            case "delete":
                Z(e) || (l(a.get(ee)),
                ge(e) && l(a.get(bt)));
                break;
            case "set":
                ge(e) && l(a.get(ee));
                break
        }
    const u = c=>{
            c.options.onTrigger && c.options.onTrigger({
                effect: c,
                target: e,
                key: n,
                type: t,
                newValue: i,
                oldValue: r,
                oldTarget: s
            }),
                c.options.scheduler ? c.options.scheduler(c) : c()
        }
    ;
    o.forEach(u)
}
var fs = Qr("__proto__,__v_isRef,__isVue")
    , ui = new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(It))
    , ps = je()
    , hs = je(!1, !0)
    , ms = je(!0)
    , gs = je(!0, !0)
    , Pe = {};
["includes", "indexOf", "lastIndexOf"].forEach(e=>{
        const t = Array.prototype[e];
        Pe[e] = function(...n) {
            const i = L(this);
            for (let s = 0, a = this.length; s < a; s++)
                R(i, "get", s + "");
            const r = t.apply(i, n);
            return r === -1 || r === !1 ? t.apply(i, n.map(L)) : r
        }
    }
);
["push", "pop", "shift", "unshift", "splice"].forEach(e=>{
        const t = Array.prototype[e];
        Pe[e] = function(...n) {
            cs();
            const i = t.apply(this, n);
            return li(),
                i
        }
    }
);
function je(e=!1, t=!1) {
    return function(i, r, s) {
        if (r === "__v_isReactive")
            return !e;
        if (r === "__v_isReadonly")
            return e;
        if (r === "__v_raw" && s === (e ? t ? ws : Ti : t ? Cs : _i).get(i))
            return i;
        const a = Z(i);
        if (!e && a && Re(Pe, r))
            return Reflect.get(Pe, r, s);
        const o = Reflect.get(i, r, s);
        return (It(r) ? ui.has(r) : fs(r)) || (e || R(i, "get", r),
            t) ? o : yt(o) ? !a || !Nt(r) ? o.value : o : Be(o) ? e ? Ci(o) : Bt(o) : o
    }
}
var vs = ci()
    , bs = ci(!0);
function ci(e=!1) {
    return function(n, i, r, s) {
        let a = n[i];
        if (!e && (r = L(r),
            a = L(a),
        !Z(n) && yt(a) && !yt(r)))
            return a.value = r,
                !0;
        const o = Z(n) && Nt(i) ? Number(i) < n.length : Re(n, i)
            , l = Reflect.set(n, i, r, s);
        return n === L(s) && (o ? ai(r, a) && Y(n, "set", i, r, a) : Y(n, "add", i, r)),
            l
    }
}
function ys(e, t) {
    const n = Re(e, t)
        , i = e[t]
        , r = Reflect.deleteProperty(e, t);
    return r && n && Y(e, "delete", t, void 0, i),
        r
}
function xs(e, t) {
    const n = Reflect.has(e, t);
    return (!It(t) || !ui.has(t)) && R(e, "has", t),
        n
}
function Ss(e) {
    return R(e, "iterate", Z(e) ? "length" : ee),
        Reflect.ownKeys(e)
}
var di = {
    get: ps,
    set: vs,
    deleteProperty: ys,
    has: xs,
    ownKeys: Ss
}
    , fi = {
    get: ms,
    set(e, t) {
        return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`, e),
            !0
    },
    deleteProperty(e, t) {
        return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e),
            !0
    }
};
ii({}, di, {
    get: hs,
    set: bs
});
ii({}, fi, {
    get: gs
});
var Ft = e=>Be(e) ? Bt(e) : e
    , zt = e=>Be(e) ? Ci(e) : e
    , Rt = e=>e
    , Ge = e=>Reflect.getPrototypeOf(e);
function He(e, t, n=!1, i=!1) {
    e = e.__v_raw;
    const r = L(e)
        , s = L(t);
    t !== s && !n && R(r, "get", t),
    !n && R(r, "get", s);
    const {has: a} = Ge(r)
        , o = i ? Rt : n ? zt : Ft;
    if (a.call(r, t))
        return o(e.get(t));
    if (a.call(r, s))
        return o(e.get(s));
    e !== r && e.get(t)
}
function Ve(e, t=!1) {
    const n = this.__v_raw
        , i = L(n)
        , r = L(e);
    return e !== r && !t && R(i, "has", e),
    !t && R(i, "has", r),
        e === r ? n.has(e) : n.has(e) || n.has(r)
}
function We(e, t=!1) {
    return e = e.__v_raw,
    !t && R(L(e), "iterate", ee),
        Reflect.get(e, "size", e)
}
function pi(e) {
    e = L(e);
    const t = L(this);
    return Ge(t).has.call(t, e) || (t.add(e),
        Y(t, "add", e, e)),
        this
}
function hi(e, t) {
    t = L(t);
    const n = L(this)
        , {has: i, get: r} = Ge(n);
    let s = i.call(n, e);
    s ? Ei(n, i, e) : (e = L(e),
        s = i.call(n, e));
    const a = r.call(n, e);
    return n.set(e, t),
        s ? ai(t, a) && Y(n, "set", e, t, a) : Y(n, "add", e, t),
        this
}
function mi(e) {
    const t = L(this)
        , {has: n, get: i} = Ge(t);
    let r = n.call(t, e);
    r ? Ei(t, n, e) : (e = L(e),
        r = n.call(t, e));
    const s = i ? i.call(t, e) : void 0
        , a = t.delete(e);
    return r && Y(t, "delete", e, void 0, s),
        a
}
function gi() {
    const e = L(this)
        , t = e.size !== 0
        , n = ge(e) ? new Map(e) : new Set(e)
        , i = e.clear();
    return t && Y(e, "clear", void 0, void 0, n),
        i
}
function qe(e, t) {
    return function(i, r) {
        const s = this
            , a = s.__v_raw
            , o = L(a)
            , l = t ? Rt : e ? zt : Ft;
        return !e && R(o, "iterate", ee),
            a.forEach((u,c)=>i.call(r, l(u), l(c), s))
    }
}
function we(e, t, n) {
    return function(...i) {
        const r = this.__v_raw
            , s = L(r)
            , a = ge(s)
            , o = e === "entries" || e === Symbol.iterator && a
            , l = e === "keys" && a
            , u = r[e](...i)
            , c = n ? Rt : t ? zt : Ft;
        return !t && R(s, "iterate", l ? bt : ee),
            {
                next() {
                    const {value: p, done: f} = u.next();
                    return f ? {
                        value: p,
                        done: f
                    } : {
                        value: o ? [c(p[0]), c(p[1])] : c(p),
                        done: f
                    }
                },
                [Symbol.iterator]() {
                    return this
                }
            }
    }
}
function V(e) {
    return function(...t) {
        {
            const n = t[0] ? `on key "${t[0]}" ` : "";
            console.warn(`${rs(e)} operation ${n}failed: target is readonly.`, L(this))
        }
        return e === "delete" ? !1 : this
    }
}
var vi = {
    get(e) {
        return He(this, e)
    },
    get size() {
        return We(this)
    },
    has: Ve,
    add: pi,
    set: hi,
    delete: mi,
    clear: gi,
    forEach: qe(!1, !1)
}
    , bi = {
    get(e) {
        return He(this, e, !1, !0)
    },
    get size() {
        return We(this)
    },
    has: Ve,
    add: pi,
    set: hi,
    delete: mi,
    clear: gi,
    forEach: qe(!1, !0)
}
    , yi = {
    get(e) {
        return He(this, e, !0)
    },
    get size() {
        return We(this, !0)
    },
    has(e) {
        return Ve.call(this, e, !0)
    },
    add: V("add"),
    set: V("set"),
    delete: V("delete"),
    clear: V("clear"),
    forEach: qe(!0, !1)
}
    , xi = {
    get(e) {
        return He(this, e, !0, !0)
    },
    get size() {
        return We(this, !0)
    },
    has(e) {
        return Ve.call(this, e, !0)
    },
    add: V("add"),
    set: V("set"),
    delete: V("delete"),
    clear: V("clear"),
    forEach: qe(!0, !0)
}
    , Es = ["keys", "values", "entries", Symbol.iterator];
Es.forEach(e=>{
        vi[e] = we(e, !1, !1),
            yi[e] = we(e, !0, !1),
            bi[e] = we(e, !1, !0),
            xi[e] = we(e, !0, !0)
    }
);
function Si(e, t) {
    const n = t ? e ? xi : bi : e ? yi : vi;
    return (i,r,s)=>r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? i : Reflect.get(Re(n, r) && r in i ? n : i, r, s)
}
var _s = {
    get: Si(!1, !1)
}
    , Ts = {
    get: Si(!0, !1)
};
function Ei(e, t, n) {
    const i = L(n);
    if (i !== n && t.call(e, i)) {
        const r = si(e);
        console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object ${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
    }
}
var _i = new WeakMap
    , Cs = new WeakMap
    , Ti = new WeakMap
    , ws = new WeakMap;
function Os(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}
function Ms(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Os(si(e))
}
function Bt(e) {
    return e && e.__v_isReadonly ? e : wi(e, !1, di, _s, _i)
}
function Ci(e) {
    return wi(e, !0, fi, Ts, Ti)
}
function wi(e, t, n, i, r) {
    if (!Be(e))
        return console.warn(`value cannot be made reactive: ${String(e)}`),
            e;
    if (e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const s = r.get(e);
    if (s)
        return s;
    const a = Ms(e);
    if (a === 0)
        return e;
    const o = new Proxy(e,a === 2 ? i : n);
    return r.set(e, o),
        o
}
function L(e) {
    return e && L(e.__v_raw) || e
}
function yt(e) {
    return !!(e && e.__v_isRef === !0)
}
B("nextTick", ()=>Pt);
B("dispatch", e=>me.bind(me, e));
B("watch", (e,{evaluateLater: t, effect: n})=>(i,r)=>{
        let s = t(i), a = !0, o, l = n(()=>s(u=>{
                JSON.stringify(u),
                    a ? o = u : queueMicrotask(()=>{
                            r(u, o),
                                o = u
                        }
                    ),
                    a = !1
            }
        ));
        e._x_effects.delete(l)
    }
);
B("store", qr);
B("data", e=>wn(e));
B("root", e=>De(e));
B("refs", e=>(e._x_refs_proxy || (e._x_refs_proxy = Ee($s(e))),
    e._x_refs_proxy));
function $s(e) {
    let t = []
        , n = e;
    for (; n; )
        n._x_refs && t.push(n._x_refs),
            n = n.parentNode;
    return t
}
var Ue = {};
function Oi(e) {
    return Ue[e] || (Ue[e] = 0),
        ++Ue[e]
}
function Ls(e, t) {
    return Fe(e, n=>{
            if (n._x_ids && n._x_ids[t])
                return !0
        }
    )
}
function As(e, t) {
    e._x_ids || (e._x_ids = {}),
    e._x_ids[t] || (e._x_ids[t] = Oi(t))
}
B("id", e=>(t,n=null)=>{
        let i = Ls(e, t)
            , r = i ? i._x_ids[t] : Oi(t);
        return n ? `${t}-${r}-${n}` : `${t}-${r}`
    }
);
B("el", e=>e);
Mi("Focus", "focus", "focus");
Mi("Persist", "persist", "persist");
function Mi(e, t, n) {
    B(t, i=>re(`You can't use [$ ${directiveName}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`, i))
}
function Ps({get: e, set: t}, {get: n, set: i}) {
    let r = !0, s, a, o = oe(()=>{
            let l, u;
            r ? (l = e(),
                i(l),
                u = n(),
                r = !1) : (l = e(),
                u = n(),
                a = JSON.stringify(l),
                JSON.stringify(u),
                a !== s ? (u = n(),
                    i(l),
                    u = l) : (t(u),
                    l = u)),
                s = JSON.stringify(l),
                JSON.stringify(u)
        }
    );
    return ()=>{
        xe(o)
    }
}
A("modelable", (e,{expression: t},{effect: n, evaluateLater: i, cleanup: r})=>{
        let s = i(t)
            , a = ()=>{
            let c;
            return s(p=>c = p),
                c
        }
            , o = i(`${t} = __placeholder`)
            , l = c=>o(()=>{}
            , {
                scope: {
                    __placeholder: c
                }
            })
            , u = a();
        l(u),
            queueMicrotask(()=>{
                    if (!e._x_model)
                        return;
                    e._x_removeModelListeners.default();
                    let c = e._x_model.get
                        , p = e._x_model.set
                        , f = Ps({
                        get() {
                            return c()
                        },
                        set(m) {
                            p(m)
                        }
                    }, {
                        get() {
                            return a()
                        },
                        set(m) {
                            l(m)
                        }
                    });
                    r(f)
                }
            )
    }
);
var ks = document.createElement("div");
A("teleport", (e,{modifiers: t, expression: n},{cleanup: i})=>{
        e.tagName.toLowerCase() !== "template" && re("x-teleport can only be used on a <template> tag", e);
        let r = _e(()=>document.querySelector(n), ()=>ks)();
        r || re(`Cannot find x-teleport element for selector: "${n}"`);
        let s = e.content.cloneNode(!0).firstElementChild;
        e._x_teleport = s,
            s._x_teleportBack = e,
        e._x_forwardEvents && e._x_forwardEvents.forEach(a=>{
                s.addEventListener(a, o=>{
                        o.stopPropagation(),
                            e.dispatchEvent(new o.constructor(o.type,o))
                    }
                )
            }
        ),
            Se(s, {}, e),
            P(()=>{
                    t.includes("prepend") ? r.parentNode.insertBefore(s, r) : t.includes("append") ? r.parentNode.insertBefore(s, r.nextSibling) : r.appendChild(s),
                        K(s),
                        s._x_ignore = !0
                }
            ),
            i(()=>s.remove())
    }
);
var $i = ()=>{}
;
$i.inline = (e,{modifiers: t},{cleanup: n})=>{
    t.includes("self") ? e._x_ignoreSelf = !0 : e._x_ignore = !0,
        n(()=>{
                t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore
            }
        )
}
;
A("ignore", $i);
A("effect", (e,{expression: t},{effect: n})=>n(D(e, t)));
function xt(e, t, n, i) {
    let r = e
        , s = l=>i(l)
        , a = {}
        , o = (l,u)=>c=>u(l, c);
    if (n.includes("dot") && (t = Is(t)),
    n.includes("camel") && (t = Ns(t)),
    n.includes("passive") && (a.passive = !0),
    n.includes("capture") && (a.capture = !0),
    n.includes("window") && (r = window),
    n.includes("document") && (r = document),
    n.includes("prevent") && (s = o(s, (l,u)=>{
            u.preventDefault(),
                l(u)
        }
    )),
    n.includes("stop") && (s = o(s, (l,u)=>{
            u.stopPropagation(),
                l(u)
        }
    )),
    n.includes("self") && (s = o(s, (l,u)=>{
            u.target === e && l(u)
        }
    )),
    (n.includes("away") || n.includes("outside")) && (r = document,
        s = o(s, (l,u)=>{
                e.contains(u.target) || u.target.isConnected !== !1 && (e.offsetWidth < 1 && e.offsetHeight < 1 || e._x_isShown !== !1 && l(u))
            }
        )),
    n.includes("once") && (s = o(s, (l,u)=>{
            l(u),
                r.removeEventListener(t, s, a)
        }
    )),
        s = o(s, (l,u)=>{
                Fs(t) && zs(u, n) || l(u)
            }
        ),
        n.includes("debounce")) {
        let l = n[n.indexOf("debounce") + 1] || "invalid-wait"
            , u = ke(l.split("ms")[0]) ? Number(l.split("ms")[0]) : 250;
        s = Qn(s, u)
    }
    if (n.includes("throttle")) {
        let l = n[n.indexOf("throttle") + 1] || "invalid-wait"
            , u = ke(l.split("ms")[0]) ? Number(l.split("ms")[0]) : 250;
        s = Zn(s, u)
    }
    return r.addEventListener(t, s, a),
        ()=>{
            r.removeEventListener(t, s, a)
        }
}
function Is(e) {
    return e.replace(/-/g, ".")
}
function Ns(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t,n)=>n.toUpperCase())
}
function ke(e) {
    return !Array.isArray(e) && !isNaN(e)
}
function Ds(e) {
    return [" ", "_"].includes(e) ? e : e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase()
}
function Fs(e) {
    return ["keydown", "keyup"].includes(e)
}
function zs(e, t) {
    let n = t.filter(s=>!["window", "document", "prevent", "stop", "once", "capture"].includes(s));
    if (n.includes("debounce")) {
        let s = n.indexOf("debounce");
        n.splice(s, ke((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
    }
    if (n.includes("throttle")) {
        let s = n.indexOf("throttle");
        n.splice(s, ke((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
    }
    if (n.length === 0 || n.length === 1 && Qt(e.key).includes(n[0]))
        return !1;
    const r = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(s=>n.includes(s));
    return n = n.filter(s=>!r.includes(s)),
        !(r.length > 0 && r.filter(a=>((a === "cmd" || a === "super") && (a = "meta"),
            e[`${a}Key`])).length === r.length && Qt(e.key).includes(n[0]))
}
function Qt(e) {
    if (!e)
        return [];
    e = Ds(e);
    let t = {
        ctrl: "control",
        slash: "/",
        space: " ",
        spacebar: " ",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        equal: "=",
        minus: "-",
        underscore: "_"
    };
    return t[e] = e,
        Object.keys(t).map(n=>{
                if (t[n] === e)
                    return n
            }
        ).filter(n=>n)
}
A("model", (e,{modifiers: t, expression: n},{effect: i, cleanup: r})=>{
        let s = e;
        t.includes("parent") && (s = e.parentNode);
        let a = D(s, n), o;
        typeof n == "string" ? o = D(s, `${n} = __placeholder`) : typeof n == "function" && typeof n() == "string" ? o = D(s, `${n()} = __placeholder`) : o = ()=>{}
        ;
        let l = ()=>{
                let f;
                return a(m=>f = m),
                    Zt(f) ? f.get() : f
            }
            , u = f=>{
                let m;
                a(v=>m = v),
                    Zt(m) ? m.set(f) : o(()=>{}
                        , {
                            scope: {
                                __placeholder: f
                            }
                        })
            }
        ;
        t.includes("fill") && e.hasAttribute("value") && (l() === null || l() === "") && u(e.value),
        typeof n == "string" && e.type === "radio" && P(()=>{
                e.hasAttribute("name") || e.setAttribute("name", n)
            }
        );
        var c = e.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input";
        let p = be ? ()=>{}
            : xt(e, c, t, f=>{
                    u(Rs(e, t, f, l()))
                }
            );
        if (e._x_removeModelListeners || (e._x_removeModelListeners = {}),
            e._x_removeModelListeners.default = p,
            r(()=>e._x_removeModelListeners.default()),
            e.form) {
            let f = xt(e.form, "reset", [], m=>{
                    Pt(()=>e._x_model && e._x_model.set(e.value))
                }
            );
            r(()=>f())
        }
        e._x_model = {
            get() {
                return l()
            },
            set(f) {
                u(f)
            }
        },
            e._x_forceModelUpdate = f=>{
                f = f === void 0 ? l() : f,
                f === void 0 && typeof n == "string" && n.match(/\./) && (f = ""),
                    window.fromModel = !0,
                    P(()=>Un(e, "value", f)),
                    delete window.fromModel
            }
            ,
            i(()=>{
                    let f = l();
                    t.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate(f)
                }
            )
    }
);
function Rs(e, t, n, i) {
    return P(()=>{
            if (n instanceof CustomEvent && n.detail !== void 0)
                return typeof n.detail < "u" ? n.detail : n.target.value;
            if (e.type === "checkbox")
                if (Array.isArray(i)) {
                    let r = t.includes("number") ? Je(n.target.value) : n.target.value;
                    return n.target.checked ? i.concat([r]) : i.filter(s=>!Bs(s, r))
                } else
                    return n.target.checked;
            else {
                if (e.tagName.toLowerCase() === "select" && e.multiple)
                    return t.includes("number") ? Array.from(n.target.selectedOptions).map(r=>{
                            let s = r.value || r.text;
                            return Je(s)
                        }
                    ) : Array.from(n.target.selectedOptions).map(r=>r.value || r.text);
                {
                    let r = n.target.value;
                    return t.includes("number") ? Je(r) : t.includes("trim") ? r.trim() : r
                }
            }
        }
    )
}
function Je(e) {
    let t = e ? parseFloat(e) : null;
    return js(t) ? t : e
}
function Bs(e, t) {
    return e == t
}
function js(e) {
    return !Array.isArray(e) && !isNaN(e)
}
function Zt(e) {
    return e !== null && typeof e == "object" && typeof e.get == "function" && typeof e.set == "function"
}
A("cloak", e=>queueMicrotask(()=>P(()=>e.removeAttribute(le("cloak")))));
Wn(()=>`[${le("init")}]`);
A("init", _e((e,{expression: t},{evaluate: n})=>typeof t == "string" ? !!t.trim() && n(t, {}, !1) : n(t, {}, !1)));
A("text", (e,{expression: t},{effect: n, evaluateLater: i})=>{
        let r = i(t);
        n(()=>{
                r(s=>{
                        P(()=>{
                                e.textContent = s
                            }
                        )
                    }
                )
            }
        )
    }
);
A("html", (e,{expression: t},{effect: n, evaluateLater: i})=>{
        let r = i(t);
        n(()=>{
                r(s=>{
                        P(()=>{
                                e.innerHTML = s,
                                    e._x_ignoreSelf = !0,
                                    K(e),
                                    delete e._x_ignoreSelf
                            }
                        )
                    }
                )
            }
        )
    }
);
$t(Nn(":", Dn(le("bind:"))));
A("bind", (e,{value: t, modifiers: n, expression: i, original: r},{effect: s})=>{
        if (!t) {
            let o = {};
            Yr(o),
                D(e, i)(u=>{
                        ti(e, u, r)
                    }
                    , {
                        scope: o
                    });
            return
        }
        if (t === "key")
            return Gs(e, i);
        let a = D(e, i);
        s(()=>a(o=>{
                o === void 0 && typeof i == "string" && i.match(/\./) && (o = ""),
                    P(()=>Un(e, t, o, n))
            }
        ))
    }
);
function Gs(e, t) {
    e._x_keyExpression = t
}
Vn(()=>`[${le("data")}]`);
A("data", _e((e,{expression: t},{cleanup: n})=>{
        t = t === "" ? "{}" : t;
        let i = {};
        ut(i, e);
        let r = {};
        Ur(r, i);
        let s = ne(e, t, {
            scope: r
        });
        (s === void 0 || s === !0) && (s = {}),
            ut(s, e);
        let a = ae(s);
        On(a);
        let o = Se(e, a);
        a.init && ne(e, a.init),
            n(()=>{
                    a.destroy && ne(e, a.destroy),
                        o()
                }
            )
    }
));
A("show", (e,{modifiers: t, expression: n},{effect: i})=>{
        let r = D(e, n);
        e._x_doHide || (e._x_doHide = ()=>{
                P(()=>{
                        e.style.setProperty("display", "none", t.includes("important") ? "important" : void 0)
                    }
                )
            }
        ),
        e._x_doShow || (e._x_doShow = ()=>{
                P(()=>{
                        e.style.length === 1 && e.style.display === "none" ? e.removeAttribute("style") : e.style.removeProperty("display")
                    }
                )
            }
        );
        let s = ()=>{
            e._x_doHide(),
                e._x_isShown = !1
        }
            , a = ()=>{
            e._x_doShow(),
                e._x_isShown = !0
        }
            , o = ()=>setTimeout(a), l = mt(p=>p ? a() : s(), p=>{
                typeof e._x_toggleAndCascadeWithTransitions == "function" ? e._x_toggleAndCascadeWithTransitions(e, p, a, s) : p ? o() : s()
            }
        ), u, c = !0;
        i(()=>r(p=>{
                !c && p === u || (t.includes("immediate") && (p ? o() : s()),
                    l(p),
                    u = p,
                    c = !1)
            }
        ))
    }
);
A("for", (e,{expression: t},{effect: n, cleanup: i})=>{
        let r = Vs(t)
            , s = D(e, r.items)
            , a = D(e, e._x_keyExpression || "index");
        e._x_prevKeys = [],
            e._x_lookup = {},
            n(()=>Hs(e, r, s, a)),
            i(()=>{
                    Object.values(e._x_lookup).forEach(o=>o.remove()),
                        delete e._x_prevKeys,
                        delete e._x_lookup
                }
            )
    }
);
function Hs(e, t, n, i) {
    let r = a=>typeof a == "object" && !Array.isArray(a)
        , s = e;
    n(a=>{
            Ws(a) && a >= 0 && (a = Array.from(Array(a).keys(), d=>d + 1)),
            a === void 0 && (a = []);
            let o = e._x_lookup
                , l = e._x_prevKeys
                , u = []
                , c = [];
            if (r(a))
                a = Object.entries(a).map(([d,g])=>{
                        let x = en(t, g, d, a);
                        i(S=>c.push(S), {
                            scope: {
                                index: d,
                                ...x
                            }
                        }),
                            u.push(x)
                    }
                );
            else
                for (let d = 0; d < a.length; d++) {
                    let g = en(t, a[d], d, a);
                    i(x=>c.push(x), {
                        scope: {
                            index: d,
                            ...g
                        }
                    }),
                        u.push(g)
                }
            let p = []
                , f = []
                , m = []
                , v = [];
            for (let d = 0; d < l.length; d++) {
                let g = l[d];
                c.indexOf(g) === -1 && m.push(g)
            }
            l = l.filter(d=>!m.includes(d));
            let h = "template";
            for (let d = 0; d < c.length; d++) {
                let g = c[d]
                    , x = l.indexOf(g);
                if (x === -1)
                    l.splice(d, 0, g),
                        p.push([h, d]);
                else if (x !== d) {
                    let S = l.splice(d, 1)[0]
                        , E = l.splice(x - 1, 1)[0];
                    l.splice(d, 0, E),
                        l.splice(x, 0, S),
                        f.push([S, E])
                } else
                    v.push(g);
                h = g
            }
            for (let d = 0; d < m.length; d++) {
                let g = m[d];
                o[g]._x_effects && o[g]._x_effects.forEach(bn),
                    o[g].remove(),
                    o[g] = null,
                    delete o[g]
            }
            for (let d = 0; d < f.length; d++) {
                let[g,x] = f[d]
                    , S = o[g]
                    , E = o[x]
                    , y = document.createElement("div");
                P(()=>{
                        E.after(y),
                            S.after(E),
                        E._x_currentIfEl && E.after(E._x_currentIfEl),
                            y.before(S),
                        S._x_currentIfEl && S.after(S._x_currentIfEl),
                            y.remove()
                    }
                ),
                    Yt(E, u[c.indexOf(x)])
            }
            for (let d = 0; d < p.length; d++) {
                let[g,x] = p[d]
                    , S = g === "template" ? s : o[g];
                S._x_currentIfEl && (S = S._x_currentIfEl);
                let E = u[x]
                    , y = c[x]
                    , b = document.importNode(s.content, !0).firstElementChild;
                Se(b, ae(E), s),
                    P(()=>{
                            S.after(b),
                                K(b)
                        }
                    ),
                typeof y == "object" && re("x-for key cannot be an object, it must be a string or an integer", s),
                    o[y] = b
            }
            for (let d = 0; d < v.length; d++)
                Yt(o[v[d]], u[c.indexOf(v[d])]);
            s._x_prevKeys = c
        }
    )
}
function Vs(e) {
    let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/
        , n = /^\s*\(|\)\s*$/g
        , i = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
        , r = e.match(i);
    if (!r)
        return;
    let s = {};
    s.items = r[2].trim();
    let a = r[1].replace(n, "").trim()
        , o = a.match(t);
    return o ? (s.item = a.replace(t, "").trim(),
        s.index = o[1].trim(),
    o[2] && (s.collection = o[2].trim())) : s.item = a,
        s
}
function en(e, t, n, i) {
    let r = {};
    return /^\[.*\]$/.test(e.item) && Array.isArray(t) ? e.item.replace("[", "").replace("]", "").split(",").map(a=>a.trim()).forEach((a,o)=>{
            r[a] = t[o]
        }
    ) : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object" ? e.item.replace("{", "").replace("}", "").split(",").map(a=>a.trim()).forEach(a=>{
            r[a] = t[a]
        }
    ) : r[e.item] = t,
    e.index && (r[e.index] = n),
    e.collection && (r[e.collection] = i),
        r
}
function Ws(e) {
    return !Array.isArray(e) && !isNaN(e)
}
function Li() {}
Li.inline = (e,{expression: t},{cleanup: n})=>{
    let i = De(e);
    i._x_refs || (i._x_refs = {}),
        i._x_refs[t] = e,
        n(()=>delete i._x_refs[t])
}
;
A("ref", Li);
A("if", (e,{expression: t},{effect: n, cleanup: i})=>{
        let r = D(e, t)
            , s = ()=>{
                if (e._x_currentIfEl)
                    return e._x_currentIfEl;
                let o = e.content.cloneNode(!0).firstElementChild;
                return Se(o, {}, e),
                    P(()=>{
                            e.after(o),
                                K(o)
                        }
                    ),
                    e._x_currentIfEl = o,
                    e._x_undoIf = ()=>{
                        q(o, l=>{
                                l._x_effects && l._x_effects.forEach(bn)
                            }
                        ),
                            o.remove(),
                            delete e._x_currentIfEl
                    }
                    ,
                    o
            }
            , a = ()=>{
                e._x_undoIf && (e._x_undoIf(),
                    delete e._x_undoIf)
            }
        ;
        n(()=>r(o=>{
                o ? s() : a()
            }
        )),
            i(()=>e._x_undoIf && e._x_undoIf())
    }
);
A("id", (e,{expression: t},{evaluate: n})=>{
        n(t).forEach(r=>As(e, r))
    }
);
$t(Nn("@", Dn(le("on:"))));
A("on", _e((e,{value: t, modifiers: n, expression: i},{cleanup: r})=>{
        let s = i ? D(e, i) : ()=>{}
        ;
        e.tagName.toLowerCase() === "template" && (e._x_forwardEvents || (e._x_forwardEvents = []),
        e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
        let a = xt(e, t, n, o=>{
                s(()=>{}
                    , {
                        scope: {
                            $event: o
                        },
                        params: [o]
                    })
            }
        );
        r(()=>a())
    }
));
Ke("Collapse", "collapse", "collapse");
Ke("Intersect", "intersect", "intersect");
Ke("Focus", "trap", "focus");
Ke("Mask", "mask", "mask");
function Ke(e, t, n) {
    A(t, i=>re(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`, i))
}
Te.setEvaluator(An);
Te.setReactivityEngine({
    reactive: Bt,
    effect: as,
    release: os,
    raw: L
});
var qs = Te
    , G = qs;
function Ks(e) {
    e.directive("collapse", t),
        t.inline = (n,{modifiers: i})=>{
            i.includes("min") && (n._x_doShow = ()=>{}
                    ,
                    n._x_doHide = ()=>{}
            )
        }
    ;
    function t(n, {modifiers: i}) {
        let r = tn(i, "duration", 250) / 1e3
            , s = tn(i, "min", 0)
            , a = !i.includes("min");
        n._x_isShown || (n.style.height = `${s}px`),
        !n._x_isShown && a && (n.hidden = !0),
        n._x_isShown || (n.style.overflow = "hidden");
        let o = (u,c)=>{
            let p = e.setStyles(u, c);
            return c.height ? ()=>{}
                : p
        }
            , l = {
            transitionProperty: "height",
            transitionDuration: `${r}s`,
            transitionTimingFunction: "cubic-bezier(0.4, 0.0, 0.2, 1)"
        };
        n._x_transition = {
            in(u=()=>{}
                , c=()=>{}
            ) {
                a && (n.hidden = !1),
                a && (n.style.display = null);
                let p = n.getBoundingClientRect().height;
                n.style.height = "auto";
                let f = n.getBoundingClientRect().height;
                p === f && (p = s),
                    e.transition(n, e.setStyles, {
                            during: l,
                            start: {
                                height: p + "px"
                            },
                            end: {
                                height: f + "px"
                            }
                        }, ()=>n._x_isShown = !0, ()=>{
                            n.getBoundingClientRect().height == f && (n.style.overflow = null)
                        }
                    )
            },
            out(u=()=>{}
                , c=()=>{}
            ) {
                let p = n.getBoundingClientRect().height;
                e.transition(n, o, {
                        during: l,
                        start: {
                            height: p + "px"
                        },
                        end: {
                            height: s + "px"
                        }
                    }, ()=>n.style.overflow = "hidden", ()=>{
                        n._x_isShown = !1,
                        n.style.height == `${s}px` && a && (n.style.display = "none",
                            n.hidden = !0)
                    }
                )
            }
        }
    }
}
function tn(e, t, n) {
    if (e.indexOf(t) === -1)
        return n;
    const i = e[e.indexOf(t) + 1];
    if (!i)
        return n;
    if (t === "duration") {
        let r = i.match(/([0-9]+)ms/);
        if (r)
            return r[1]
    }
    if (t === "min") {
        let r = i.match(/([0-9]+)px/);
        if (r)
            return r[1]
    }
    return i
}
var Ys = Ks;
function Xs(e) {
    let t = ()=>{
            let n, i = localStorage;
            return e.interceptor((r,s,a,o,l)=>{
                    let u = n || `_x_ ${o}`
                        , c = nn(u, i) ? rn(u, i) : r;
                    return a(c),
                        e.effect(()=>{
                                let p = s();
                                sn(u, p, i),
                                    a(p)
                            }
                        ),
                        c
                }
                , r=>{
                    r.as = s=>(n = s,
                        r),
                        r.using = s=>(i = s,
                            r)
                }
            )
        }
    ;
    Object.defineProperty(e, "$persist", {
        get: ()=>t()
    }),
        e.magic("persist", t),
        e.persist = (n,{get: i, set: r},s=localStorage)=>{
            let a = nn(n, s) ? rn(n, s) : i();
            r(a),
                e.effect(()=>{
                        let o = i();
                        sn(n, o, s),
                            r(o)
                    }
                )
        }
}
function nn(e, t) {
    return t.getItem(e) !== null
}
function rn(e, t) {
    return JSON.parse(t.getItem(e, t))
}
function sn(e, t, n) {
    n.setItem(e, JSON.stringify(t))
}
var Us = Xs;
/*!
* tabbable 5.2.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Ai = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"]
    , an = Ai.join(",")
    , Ie = typeof Element > "u" ? function() {}
    : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
    , Pi = function(t, n, i) {
    var r = Array.prototype.slice.apply(t.querySelectorAll(an));
    return n && Ie.call(t, an) && r.unshift(t),
        r = r.filter(i),
        r
}
    , Js = function(t) {
    return t.contentEditable === "true"
}
    , ki = function(t) {
    var n = parseInt(t.getAttribute("tabindex"), 10);
    return isNaN(n) ? Js(t) || (t.nodeName === "AUDIO" || t.nodeName === "VIDEO" || t.nodeName === "DETAILS") && t.getAttribute("tabindex") === null ? 0 : t.tabIndex : n
}
    , Qs = function(t, n) {
    return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex
}
    , jt = function(t) {
    return t.tagName === "INPUT"
}
    , Zs = function(t) {
    return jt(t) && t.type === "hidden"
}
    , ea = function(t) {
    var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
        return i.tagName === "SUMMARY"
    });
    return n
}
    , ta = function(t, n) {
    for (var i = 0; i < t.length; i++)
        if (t[i].checked && t[i].form === n)
            return t[i]
}
    , na = function(t) {
    if (!t.name)
        return !0;
    var n = t.form || t.ownerDocument, i = function(o) {
        return n.querySelectorAll('input[type="radio"][name="' + o + '"]')
    }, r;
    if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
        r = i(window.CSS.escape(t.name));
    else
        try {
            r = i(t.name)
        } catch (a) {
            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message),
                !1
        }
    var s = ta(r, t.form);
    return !s || s === t
}
    , ia = function(t) {
    return jt(t) && t.type === "radio"
}
    , ra = function(t) {
    return ia(t) && !na(t)
}
    , sa = function(t, n) {
    if (getComputedStyle(t).visibility === "hidden")
        return !0;
    var i = Ie.call(t, "details>summary:first-of-type")
        , r = i ? t.parentElement : t;
    if (Ie.call(r, "details:not([open]) *"))
        return !0;
    if (!n || n === "full")
        for (; t; ) {
            if (getComputedStyle(t).display === "none")
                return !0;
            t = t.parentElement
        }
    else if (n === "non-zero-area") {
        var s = t.getBoundingClientRect()
            , a = s.width
            , o = s.height;
        return a === 0 && o === 0
    }
    return !1
}
    , aa = function(t) {
    if (jt(t) || t.tagName === "SELECT" || t.tagName === "TEXTAREA" || t.tagName === "BUTTON")
        for (var n = t.parentElement; n; ) {
            if (n.tagName === "FIELDSET" && n.disabled) {
                for (var i = 0; i < n.children.length; i++) {
                    var r = n.children.item(i);
                    if (r.tagName === "LEGEND")
                        return !r.contains(t)
                }
                return !0
            }
            n = n.parentElement
        }
    return !1
}
    , Gt = function(t, n) {
    return !(n.disabled || Zs(n) || sa(n, t.displayCheck) || ea(n) || aa(n))
}
    , oa = function(t, n) {
    return !(!Gt(t, n) || ra(n) || ki(n) < 0)
}
    , la = function(t, n) {
    n = n || {};
    var i = []
        , r = []
        , s = Pi(t, n.includeContainer, oa.bind(null, n));
    s.forEach(function(o, l) {
        var u = ki(o);
        u === 0 ? i.push(o) : r.push({
            documentOrder: l,
            tabIndex: u,
            node: o
        })
    });
    var a = r.sort(Qs).map(function(o) {
        return o.node
    }).concat(i);
    return a
}
    , ua = function(t, n) {
    n = n || {};
    var i = Pi(t, n.includeContainer, Gt.bind(null, n));
    return i
}
    , ca = Ai.concat("iframe").join(",")
    , Ii = function(t, n) {
    if (n = n || {},
        !t)
        throw new Error("No node provided");
    return Ie.call(t, ca) === !1 ? !1 : Gt(n, t)
};
/*!
* focus-trap 6.6.1
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function on(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
        })),
            n.push.apply(n, i)
    }
    return n
}
function da(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? on(Object(n), !0).forEach(function(i) {
            fa(e, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : on(Object(n)).forEach(function(i) {
            Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i))
        })
    }
    return e
}
function fa(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
        e
}
var ln = function() {
    var e = [];
    return {
        activateTrap: function(n) {
            if (e.length > 0) {
                var i = e[e.length - 1];
                i !== n && i.pause()
            }
            var r = e.indexOf(n);
            r === -1 || e.splice(r, 1),
                e.push(n)
        },
        deactivateTrap: function(n) {
            var i = e.indexOf(n);
            i !== -1 && e.splice(i, 1),
            e.length > 0 && e[e.length - 1].unpause()
        }
    }
}()
    , pa = function(t) {
    return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function"
}
    , ha = function(t) {
    return t.key === "Escape" || t.key === "Esc" || t.keyCode === 27
}
    , ma = function(t) {
    return t.key === "Tab" || t.keyCode === 9
}
    , un = function(t) {
    return setTimeout(t, 0)
}
    , Qe = function(t, n) {
    var i = -1;
    return t.every(function(r, s) {
        return n(r) ? (i = s,
            !1) : !0
    }),
        i
}
    , fe = function(t) {
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
        i[r - 1] = arguments[r];
    return typeof t == "function" ? t.apply(void 0, i) : t
}
    , ga = function(t, n) {
    var i = document, r = da({
        returnFocusOnDeactivate: !0,
        escapeDeactivates: !0,
        delayInitialFocus: !0
    }, n), s = {
        containers: [],
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1,
        delayInitialFocusTimer: void 0
    }, a, o = function(b, T, O) {
        return b && b[T] !== void 0 ? b[T] : r[O || T]
    }, l = function(b) {
        return s.containers.some(function(T) {
            return T.contains(b)
        })
    }, u = function(b) {
        var T = r[b];
        if (!T)
            return null;
        var O = T;
        if (typeof T == "string" && (O = i.querySelector(T),
            !O))
            throw new Error("`".concat(b, "` refers to no known node"));
        if (typeof T == "function" && (O = T(),
            !O))
            throw new Error("`".concat(b, "` did not return a node"));
        return O
    }, c = function() {
        var b;
        if (o({}, "initialFocus") === !1)
            return !1;
        if (u("initialFocus") !== null)
            b = u("initialFocus");
        else if (l(i.activeElement))
            b = i.activeElement;
        else {
            var T = s.tabbableGroups[0]
                , O = T && T.firstTabbableNode;
            b = O || u("fallbackFocus")
        }
        if (!b)
            throw new Error("Your focus-trap needs to have at least one focusable element");
        return b
    }, p = function() {
        if (s.tabbableGroups = s.containers.map(function(b) {
            var T = la(b);
            if (T.length > 0)
                return {
                    container: b,
                    firstTabbableNode: T[0],
                    lastTabbableNode: T[T.length - 1]
                }
        }).filter(function(b) {
            return !!b
        }),
        s.tabbableGroups.length <= 0 && !u("fallbackFocus"))
            throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")
    }, f = function y(b) {
        if (b !== !1 && b !== i.activeElement) {
            if (!b || !b.focus) {
                y(c());
                return
            }
            b.focus({
                preventScroll: !!r.preventScroll
            }),
                s.mostRecentlyFocusedNode = b,
            pa(b) && b.select()
        }
    }, m = function(b) {
        var T = u("setReturnFocus");
        return T || b
    }, v = function(b) {
        if (!l(b.target)) {
            if (fe(r.clickOutsideDeactivates, b)) {
                a.deactivate({
                    returnFocus: r.returnFocusOnDeactivate && !Ii(b.target)
                });
                return
            }
            fe(r.allowOutsideClick, b) || b.preventDefault()
        }
    }, h = function(b) {
        var T = l(b.target);
        T || b.target instanceof Document ? T && (s.mostRecentlyFocusedNode = b.target) : (b.stopImmediatePropagation(),
            f(s.mostRecentlyFocusedNode || c()))
    }, d = function(b) {
        p();
        var T = null;
        if (s.tabbableGroups.length > 0) {
            var O = Qe(s.tabbableGroups, function(H) {
                var X = H.container;
                return X.contains(b.target)
            });
            if (O < 0)
                b.shiftKey ? T = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : T = s.tabbableGroups[0].firstTabbableNode;
            else if (b.shiftKey) {
                var $ = Qe(s.tabbableGroups, function(H) {
                    var X = H.firstTabbableNode;
                    return b.target === X
                });
                if ($ < 0 && s.tabbableGroups[O].container === b.target && ($ = O),
                $ >= 0) {
                    var C = $ === 0 ? s.tabbableGroups.length - 1 : $ - 1
                        , w = s.tabbableGroups[C];
                    T = w.lastTabbableNode
                }
            } else {
                var M = Qe(s.tabbableGroups, function(H) {
                    var X = H.lastTabbableNode;
                    return b.target === X
                });
                if (M < 0 && s.tabbableGroups[O].container === b.target && (M = O),
                M >= 0) {
                    var I = M === s.tabbableGroups.length - 1 ? 0 : M + 1
                        , ue = s.tabbableGroups[I];
                    T = ue.firstTabbableNode
                }
            }
        } else
            T = u("fallbackFocus");
        T && (b.preventDefault(),
            f(T))
    }, g = function(b) {
        if (ha(b) && fe(r.escapeDeactivates) !== !1) {
            b.preventDefault(),
                a.deactivate();
            return
        }
        if (ma(b)) {
            d(b);
            return
        }
    }, x = function(b) {
        fe(r.clickOutsideDeactivates, b) || l(b.target) || fe(r.allowOutsideClick, b) || (b.preventDefault(),
            b.stopImmediatePropagation())
    }, S = function() {
        if (s.active)
            return ln.activateTrap(a),
                s.delayInitialFocusTimer = r.delayInitialFocus ? un(function() {
                    f(c())
                }) : f(c()),
                i.addEventListener("focusin", h, !0),
                i.addEventListener("mousedown", v, {
                    capture: !0,
                    passive: !1
                }),
                i.addEventListener("touchstart", v, {
                    capture: !0,
                    passive: !1
                }),
                i.addEventListener("click", x, {
                    capture: !0,
                    passive: !1
                }),
                i.addEventListener("keydown", g, {
                    capture: !0,
                    passive: !1
                }),
                a
    }, E = function() {
        if (s.active)
            return i.removeEventListener("focusin", h, !0),
                i.removeEventListener("mousedown", v, !0),
                i.removeEventListener("touchstart", v, !0),
                i.removeEventListener("click", x, !0),
                i.removeEventListener("keydown", g, !0),
                a
    };
    return a = {
        activate: function(b) {
            if (s.active)
                return this;
            var T = o(b, "onActivate")
                , O = o(b, "onPostActivate")
                , $ = o(b, "checkCanFocusTrap");
            $ || p(),
                s.active = !0,
                s.paused = !1,
                s.nodeFocusedBeforeActivation = i.activeElement,
            T && T();
            var C = function() {
                $ && p(),
                    S(),
                O && O()
            };
            return $ ? ($(s.containers.concat()).then(C, C),
                this) : (C(),
                this)
        },
        deactivate: function(b) {
            if (!s.active)
                return this;
            clearTimeout(s.delayInitialFocusTimer),
                s.delayInitialFocusTimer = void 0,
                E(),
                s.active = !1,
                s.paused = !1,
                ln.deactivateTrap(a);
            var T = o(b, "onDeactivate")
                , O = o(b, "onPostDeactivate")
                , $ = o(b, "checkCanReturnFocus");
            T && T();
            var C = o(b, "returnFocus", "returnFocusOnDeactivate")
                , w = function() {
                un(function() {
                    C && f(m(s.nodeFocusedBeforeActivation)),
                    O && O()
                })
            };
            return C && $ ? ($(m(s.nodeFocusedBeforeActivation)).then(w, w),
                this) : (w(),
                this)
        },
        pause: function() {
            return s.paused || !s.active ? this : (s.paused = !0,
                E(),
                this)
        },
        unpause: function() {
            return !s.paused || !s.active ? this : (s.paused = !1,
                p(),
                S(),
                this)
        },
        updateContainerElements: function(b) {
            var T = [].concat(b).filter(Boolean);
            return s.containers = T.map(function(O) {
                return typeof O == "string" ? i.querySelector(O) : O
            }),
            s.active && p(),
                this
        }
    },
        a.updateContainerElements(t),
        a
};
function va(e) {
    let t, n;
    window.addEventListener("focusin", ()=>{
            t = n,
                n = document.activeElement
        }
    ),
        e.magic("focus", i=>{
                let r = i;
                return {
                    __noscroll: !1,
                    __wrapAround: !1,
                    within(s) {
                        return r = s,
                            this
                    },
                    withoutScrolling() {
                        return this.__noscroll = !0,
                            this
                    },
                    noscroll() {
                        return this.__noscroll = !0,
                            this
                    },
                    withWrapAround() {
                        return this.__wrapAround = !0,
                            this
                    },
                    wrap() {
                        return this.withWrapAround()
                    },
                    focusable(s) {
                        return Ii(s)
                    },
                    previouslyFocused() {
                        return t
                    },
                    lastFocused() {
                        return t
                    },
                    focused() {
                        return n
                    },
                    focusables() {
                        return Array.isArray(r) ? r : ua(r, {
                            displayCheck: "none"
                        })
                    },
                    all() {
                        return this.focusables()
                    },
                    isFirst(s) {
                        let a = this.all();
                        return a[0] && a[0].isSameNode(s)
                    },
                    isLast(s) {
                        let a = this.all();
                        return a.length && a.slice(-1)[0].isSameNode(s)
                    },
                    getFirst() {
                        return this.all()[0]
                    },
                    getLast() {
                        return this.all().slice(-1)[0]
                    },
                    getNext() {
                        let s = this.all()
                            , a = document.activeElement;
                        if (s.indexOf(a) !== -1)
                            return this.__wrapAround && s.indexOf(a) === s.length - 1 ? s[0] : s[s.indexOf(a) + 1]
                    },
                    getPrevious() {
                        let s = this.all()
                            , a = document.activeElement;
                        if (s.indexOf(a) !== -1)
                            return this.__wrapAround && s.indexOf(a) === 0 ? s.slice(-1)[0] : s[s.indexOf(a) - 1]
                    },
                    first() {
                        this.focus(this.getFirst())
                    },
                    last() {
                        this.focus(this.getLast())
                    },
                    next() {
                        this.focus(this.getNext())
                    },
                    previous() {
                        this.focus(this.getPrevious())
                    },
                    prev() {
                        return this.previous()
                    },
                    focus(s) {
                        s && setTimeout(()=>{
                                s.hasAttribute("tabindex") || s.setAttribute("tabindex", "0"),
                                    s.focus({
                                        preventScroll: this._noscroll
                                    })
                            }
                        )
                    }
                }
            }
        ),
        e.directive("trap", e.skipDuringClone((i,{expression: r, modifiers: s},{effect: a, evaluateLater: o, cleanup: l})=>{
                let u = o(r)
                    , c = !1
                    , p = {
                    escapeDeactivates: !1,
                    allowOutsideClick: !0,
                    fallbackFocus: ()=>i
                }
                    , f = i.querySelector("[autofocus]");
                f && (p.initialFocus = f);
                let m = ga(i, p)
                    , v = ()=>{}
                    , h = ()=>{}
                ;
                const d = ()=>{
                        v(),
                            v = ()=>{}
                            ,
                            h(),
                            h = ()=>{}
                            ,
                            m.deactivate({
                                returnFocus: !s.includes("noreturn")
                            })
                    }
                ;
                a(()=>u(g=>{
                        c !== g && (g && !c && setTimeout(()=>{
                                s.includes("inert") && (v = cn(i)),
                                s.includes("noscroll") && (h = ba()),
                                    m.activate()
                            }
                        ),
                        !g && c && d(),
                            c = !!g)
                    }
                )),
                    l(d)
            }
            , (i,{expression: r, modifiers: s},{evaluate: a})=>{
                s.includes("inert") && a(r) && cn(i)
            }
        ))
}
function cn(e) {
    let t = [];
    return Ni(e, n=>{
            let i = n.hasAttribute("aria-hidden");
            n.setAttribute("aria-hidden", "true"),
                t.push(()=>i || n.removeAttribute("aria-hidden"))
        }
    ),
        ()=>{
            for (; t.length; )
                t.pop()()
        }
}
function Ni(e, t) {
    e.isSameNode(document.body) || !e.parentNode || Array.from(e.parentNode.children).forEach(n=>{
            n.isSameNode(e) ? Ni(e.parentNode, t) : t(n)
        }
    )
}
function ba() {
    let e = document.documentElement.style.overflow
        , t = document.documentElement.style.paddingRight
        , n = window.innerWidth - document.documentElement.clientWidth;
    return document.documentElement.style.overflow = "hidden",
        document.documentElement.style.paddingRight = `${n}px`,
        ()=>{
            document.documentElement.style.overflow = e,
                document.documentElement.style.paddingRight = t
        }
}
var ya = va;
let Di = ()=>{}
;
const dn = e=>(typeof e == "function" && (e = e()),
typeof e == "object" && (e = JSON.stringify(e)),
    window.navigator.clipboard.writeText(e).then(Di));
function St(e) {
    e.magic("clipboard", ()=>dn),
        e.directive("clipboard", (t,{modifiers: n, expression: i},{evaluateLater: r, cleanup: s})=>{
                const a = n.includes("raw") ? l=>l(i) : r(i)
                    , o = ()=>a(dn);
                t.addEventListener("click", o),
                    s(()=>{
                            t.removeEventListener("click", o)
                        }
                    )
            }
        )
}
St.configure = e=>(e.hasOwnProperty("onCopy") && typeof e.onCopy == "function" && (Di = e.onCopy),
    St);
var xa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
(function(e, t) {
        (function(n, i) {
                i()
            }
        )(xa, function() {
            function n(r) {
                var s = !0
                    , a = !1
                    , o = null
                    , l = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function u(y) {
                    return !!(y && y !== document && y.nodeName !== "HTML" && y.nodeName !== "BODY" && "classList"in y && "contains"in y.classList)
                }
                function c(y) {
                    var b = y.type
                        , T = y.tagName;
                    return !!(T === "INPUT" && l[b] && !y.readOnly || T === "TEXTAREA" && !y.readOnly || y.isContentEditable)
                }
                function p(y) {
                    y.classList.contains("focus-visible") || (y.classList.add("focus-visible"),
                        y.setAttribute("data-focus-visible-added", ""))
                }
                function f(y) {
                    y.hasAttribute("data-focus-visible-added") && (y.classList.remove("focus-visible"),
                        y.removeAttribute("data-focus-visible-added"))
                }
                function m(y) {
                    y.metaKey || y.altKey || y.ctrlKey || (u(r.activeElement) && p(r.activeElement),
                        s = !0)
                }
                function v(y) {
                    s = !1
                }
                function h(y) {
                    u(y.target) && (s || c(y.target)) && p(y.target)
                }
                function d(y) {
                    u(y.target) && (y.target.classList.contains("focus-visible") || y.target.hasAttribute("data-focus-visible-added")) && (a = !0,
                        window.clearTimeout(o),
                        o = window.setTimeout(function() {
                            a = !1
                        }, 100),
                        f(y.target))
                }
                function g(y) {
                    document.visibilityState === "hidden" && (a && (s = !0),
                        x())
                }
                function x() {
                    document.addEventListener("mousemove", E),
                        document.addEventListener("mousedown", E),
                        document.addEventListener("mouseup", E),
                        document.addEventListener("pointermove", E),
                        document.addEventListener("pointerdown", E),
                        document.addEventListener("pointerup", E),
                        document.addEventListener("touchmove", E),
                        document.addEventListener("touchstart", E),
                        document.addEventListener("touchend", E)
                }
                function S() {
                    document.removeEventListener("mousemove", E),
                        document.removeEventListener("mousedown", E),
                        document.removeEventListener("mouseup", E),
                        document.removeEventListener("pointermove", E),
                        document.removeEventListener("pointerdown", E),
                        document.removeEventListener("pointerup", E),
                        document.removeEventListener("touchmove", E),
                        document.removeEventListener("touchstart", E),
                        document.removeEventListener("touchend", E)
                }
                function E(y) {
                    y.target.nodeName && y.target.nodeName.toLowerCase() === "html" || (s = !1,
                        S())
                }
                document.addEventListener("keydown", m, !0),
                    document.addEventListener("mousedown", v, !0),
                    document.addEventListener("pointerdown", v, !0),
                    document.addEventListener("touchstart", v, !0),
                    document.addEventListener("visibilitychange", g, !0),
                    x(),
                    r.addEventListener("focus", h, !0),
                    r.addEventListener("blur", d, !0),
                    r.nodeType === Node.DOCUMENT_FRAGMENT_NODE && r.host ? r.host.setAttribute("data-js-focus-visible", "") : r.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"),
                        document.documentElement.setAttribute("data-js-focus-visible", ""))
            }
            if (typeof window < "u" && typeof document < "u") {
                window.applyFocusVisiblePolyfill = n;
                var i;
                try {
                    i = new CustomEvent("focus-visible-polyfill-ready")
                } catch {
                    i = document.createEvent("CustomEvent"),
                        i.initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
                }
                window.dispatchEvent(i)
            }
            typeof document < "u" && n(document)
        })
    }
)();
function Sa(e) {
    e.directive("intersect", (t,{value: n, expression: i, modifiers: r},{evaluateLater: s, cleanup: a})=>{
            let o = s(i)
                , l = {
                rootMargin: Ta(r),
                threshold: Ea(r)
            }
                , u = new IntersectionObserver(c=>{
                    c.forEach(p=>{
                            p.isIntersecting !== (n === "leave") && (o(),
                            r.includes("once") && u.disconnect())
                        }
                    )
                }
                ,l);
            u.observe(t),
                a(()=>{
                        u.disconnect()
                    }
                )
        }
    )
}
function Ea(e) {
    if (e.includes("full"))
        return .99;
    if (e.includes("half"))
        return .5;
    if (!e.includes("threshold"))
        return 0;
    let t = e[e.indexOf("threshold") + 1];
    return t === "100" ? 1 : t === "0" ? 0 : +`.${t}`
}
function _a(e) {
    let t = e.match(/^(-?[0-9]+)(px|%)?$/);
    return t ? t[1] + (t[2] || "px") : void 0
}
function Ta(e) {
    const t = "margin"
        , n = "0px 0px 0px 0px"
        , i = e.indexOf(t);
    if (i === -1)
        return n;
    let r = [];
    for (let s = 1; s < 5; s++)
        r.push(_a(e[i + s] || ""));
    return r = r.filter(s=>s !== void 0),
        r.length ? r.join(" ").trim() : n
}
var Ca = Sa;
function wa(e, t, n=0, i=1, r=0) {
    const s = t - n
        , a = i - r;
    return (e - n) * a / s + r
}
function Oa(e, t, n) {
    const i = new Date().getTime();
    function r() {
        requestAnimationFrame(()=>{
                const s = new Date().getTime() - i
                    , a = wa(s, e);
                n(t(a)),
                s < e && r()
            }
        )
    }
    r()
}
function Ma(e) {
    return e === 1 ? 1 : 1 - Math.pow(2, -10 * e)
}
const $a = {
    animateWithEasing: Oa,
    easeOutExpo: Ma
};
function La(e) {
    e.easing = $a
}
function Fi(e) {
    e.querySelectorAll("source[data-src]").forEach(n=>{
            const i = n.getAttribute("data-src");
            n.removeAttribute("data-src"),
                n.setAttribute("src", i),
                e.load()
        }
    )
}
function Aa(e) {
    addEventListener("load", Fi.bind(this, e), {
        once: !0
    })
}
function Pa(e) {
    e.directive("lazy-video", Aa),
        e.replaceVideoSrc = Fi
}
function fn(e) {
    return e !== null && typeof e == "object" && "constructor"in e && e.constructor === Object
}
function Ht(e={}, t={}) {
    Object.keys(t).forEach(n=>{
            typeof e[n] > "u" ? e[n] = t[n] : fn(t[n]) && fn(e[n]) && Object.keys(t[n]).length > 0 && Ht(e[n], t[n])
        }
    )
}
const zi = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function N() {
    const e = typeof document < "u" ? document : {};
    return Ht(e, zi),
        e
}
const ka = {
    document: zi,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(e) {
        return typeof setTimeout > "u" ? (e(),
            null) : setTimeout(e, 0)
    },
    cancelAnimationFrame(e) {
        typeof setTimeout > "u" || clearTimeout(e)
    }
};
function k() {
    const e = typeof window < "u" ? window : {};
    return Ht(e, ka),
        e
}
function Ia(e) {
    const t = e.__proto__;
    Object.defineProperty(e, "__proto__", {
        get() {
            return t
        },
        set(n) {
            t.__proto__ = n
        }
    })
}
class W extends Array {
    constructor(t) {
        typeof t == "number" ? super(t) : (super(...t || []),
            Ia(this))
    }
}
function Ce(e=[]) {
    const t = [];
    return e.forEach(n=>{
            Array.isArray(n) ? t.push(...Ce(n)) : t.push(n)
        }
    ),
        t
}
function Ri(e, t) {
    return Array.prototype.filter.call(e, t)
}
function Na(e) {
    const t = [];
    for (let n = 0; n < e.length; n += 1)
        t.indexOf(e[n]) === -1 && t.push(e[n]);
    return t
}
function Da(e, t) {
    if (typeof e != "string")
        return [e];
    const n = []
        , i = t.querySelectorAll(e);
    for (let r = 0; r < i.length; r += 1)
        n.push(i[r]);
    return n
}
function _(e, t) {
    const n = k()
        , i = N();
    let r = [];
    if (!t && e instanceof W)
        return e;
    if (!e)
        return new W(r);
    if (typeof e == "string") {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
            let a = "div";
            s.indexOf("<li") === 0 && (a = "ul"),
            s.indexOf("<tr") === 0 && (a = "tbody"),
            (s.indexOf("<td") === 0 || s.indexOf("<th") === 0) && (a = "tr"),
            s.indexOf("<tbody") === 0 && (a = "table"),
            s.indexOf("<option") === 0 && (a = "select");
            const o = i.createElement(a);
            o.innerHTML = s;
            for (let l = 0; l < o.childNodes.length; l += 1)
                r.push(o.childNodes[l])
        } else
            r = Da(e.trim(), t || i)
    } else if (e.nodeType || e === n || e === i)
        r.push(e);
    else if (Array.isArray(e)) {
        if (e instanceof W)
            return e;
        r = e
    }
    return new W(Na(r))
}
_.fn = W.prototype;
function Fa(...e) {
    const t = Ce(e.map(n=>n.split(" ")));
    return this.forEach(n=>{
            n.classList.add(...t)
        }
    ),
        this
}
function za(...e) {
    const t = Ce(e.map(n=>n.split(" ")));
    return this.forEach(n=>{
            n.classList.remove(...t)
        }
    ),
        this
}
function Ra(...e) {
    const t = Ce(e.map(n=>n.split(" ")));
    this.forEach(n=>{
            t.forEach(i=>{
                    n.classList.toggle(i)
                }
            )
        }
    )
}
function Ba(...e) {
    const t = Ce(e.map(n=>n.split(" ")));
    return Ri(this, n=>t.filter(i=>n.classList.contains(i)).length > 0).length > 0
}
function ja(e, t) {
    if (arguments.length === 1 && typeof e == "string")
        return this[0] ? this[0].getAttribute(e) : void 0;
    for (let n = 0; n < this.length; n += 1)
        if (arguments.length === 2)
            this[n].setAttribute(e, t);
        else
            for (const i in e)
                this[n][i] = e[i],
                    this[n].setAttribute(i, e[i]);
    return this
}
function Ga(e) {
    for (let t = 0; t < this.length; t += 1)
        this[t].removeAttribute(e);
    return this
}
function Ha(e) {
    for (let t = 0; t < this.length; t += 1)
        this[t].style.transform = e;
    return this
}
function Va(e) {
    for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
    return this
}
function Wa(...e) {
    let[t,n,i,r] = e;
    typeof e[1] == "function" && ([t,i,r] = e,
        n = void 0),
    r || (r = !1);
    function s(u) {
        const c = u.target;
        if (!c)
            return;
        const p = u.target.dom7EventData || [];
        if (p.indexOf(u) < 0 && p.unshift(u),
            _(c).is(n))
            i.apply(c, p);
        else {
            const f = _(c).parents();
            for (let m = 0; m < f.length; m += 1)
                _(f[m]).is(n) && i.apply(f[m], p)
        }
    }
    function a(u) {
        const c = u && u.target ? u.target.dom7EventData || [] : [];
        c.indexOf(u) < 0 && c.unshift(u),
            i.apply(this, c)
    }
    const o = t.split(" ");
    let l;
    for (let u = 0; u < this.length; u += 1) {
        const c = this[u];
        if (n)
            for (l = 0; l < o.length; l += 1) {
                const p = o[l];
                c.dom7LiveListeners || (c.dom7LiveListeners = {}),
                c.dom7LiveListeners[p] || (c.dom7LiveListeners[p] = []),
                    c.dom7LiveListeners[p].push({
                        listener: i,
                        proxyListener: s
                    }),
                    c.addEventListener(p, s, r)
            }
        else
            for (l = 0; l < o.length; l += 1) {
                const p = o[l];
                c.dom7Listeners || (c.dom7Listeners = {}),
                c.dom7Listeners[p] || (c.dom7Listeners[p] = []),
                    c.dom7Listeners[p].push({
                        listener: i,
                        proxyListener: a
                    }),
                    c.addEventListener(p, a, r)
            }
    }
    return this
}
function qa(...e) {
    let[t,n,i,r] = e;
    typeof e[1] == "function" && ([t,i,r] = e,
        n = void 0),
    r || (r = !1);
    const s = t.split(" ");
    for (let a = 0; a < s.length; a += 1) {
        const o = s[a];
        for (let l = 0; l < this.length; l += 1) {
            const u = this[l];
            let c;
            if (!n && u.dom7Listeners ? c = u.dom7Listeners[o] : n && u.dom7LiveListeners && (c = u.dom7LiveListeners[o]),
            c && c.length)
                for (let p = c.length - 1; p >= 0; p -= 1) {
                    const f = c[p];
                    i && f.listener === i || i && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === i ? (u.removeEventListener(o, f.proxyListener, r),
                        c.splice(p, 1)) : i || (u.removeEventListener(o, f.proxyListener, r),
                        c.splice(p, 1))
                }
        }
    }
    return this
}
function Ka(...e) {
    const t = k()
        , n = e[0].split(" ")
        , i = e[1];
    for (let r = 0; r < n.length; r += 1) {
        const s = n[r];
        for (let a = 0; a < this.length; a += 1) {
            const o = this[a];
            if (t.CustomEvent) {
                const l = new t.CustomEvent(s,{
                    detail: i,
                    bubbles: !0,
                    cancelable: !0
                });
                o.dom7EventData = e.filter((u,c)=>c > 0),
                    o.dispatchEvent(l),
                    o.dom7EventData = [],
                    delete o.dom7EventData
            }
        }
    }
    return this
}
function Ya(e) {
    const t = this;
    function n(i) {
        i.target === this && (e.call(this, i),
            t.off("transitionend", n))
    }
    return e && t.on("transitionend", n),
        this
}
function Xa(e) {
    if (this.length > 0) {
        if (e) {
            const t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
        }
        return this[0].offsetWidth
    }
    return null
}
function Ua(e) {
    if (this.length > 0) {
        if (e) {
            const t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
        }
        return this[0].offsetHeight
    }
    return null
}
function Ja() {
    if (this.length > 0) {
        const e = k()
            , t = N()
            , n = this[0]
            , i = n.getBoundingClientRect()
            , r = t.body
            , s = n.clientTop || r.clientTop || 0
            , a = n.clientLeft || r.clientLeft || 0
            , o = n === e ? e.scrollY : n.scrollTop
            , l = n === e ? e.scrollX : n.scrollLeft;
        return {
            top: i.top + o - s,
            left: i.left + l - a
        }
    }
    return null
}
function Qa() {
    const e = k();
    return this[0] ? e.getComputedStyle(this[0], null) : {}
}
function Za(e, t) {
    const n = k();
    let i;
    if (arguments.length === 1)
        if (typeof e == "string") {
            if (this[0])
                return n.getComputedStyle(this[0], null).getPropertyValue(e)
        } else {
            for (i = 0; i < this.length; i += 1)
                for (const r in e)
                    this[i].style[r] = e[r];
            return this
        }
    if (arguments.length === 2 && typeof e == "string") {
        for (i = 0; i < this.length; i += 1)
            this[i].style[e] = t;
        return this
    }
    return this
}
function eo(e) {
    return e ? (this.forEach((t,n)=>{
            e.apply(t, [t, n])
        }
    ),
        this) : this
}
function to(e) {
    const t = Ri(this, e);
    return _(t)
}
function no(e) {
    if (typeof e > "u")
        return this[0] ? this[0].innerHTML : null;
    for (let t = 0; t < this.length; t += 1)
        this[t].innerHTML = e;
    return this
}
function io(e) {
    if (typeof e > "u")
        return this[0] ? this[0].textContent.trim() : null;
    for (let t = 0; t < this.length; t += 1)
        this[t].textContent = e;
    return this
}
function ro(e) {
    const t = k()
        , n = N()
        , i = this[0];
    let r, s;
    if (!i || typeof e > "u")
        return !1;
    if (typeof e == "string") {
        if (i.matches)
            return i.matches(e);
        if (i.webkitMatchesSelector)
            return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector)
            return i.msMatchesSelector(e);
        for (r = _(e),
                 s = 0; s < r.length; s += 1)
            if (r[s] === i)
                return !0;
        return !1
    }
    if (e === n)
        return i === n;
    if (e === t)
        return i === t;
    if (e.nodeType || e instanceof W) {
        for (r = e.nodeType ? [e] : e,
                 s = 0; s < r.length; s += 1)
            if (r[s] === i)
                return !0;
        return !1
    }
    return !1
}
function so() {
    let e = this[0], t;
    if (e) {
        for (t = 0; (e = e.previousSibling) !== null; )
            e.nodeType === 1 && (t += 1);
        return t
    }
}
function ao(e) {
    if (typeof e > "u")
        return this;
    const t = this.length;
    if (e > t - 1)
        return _([]);
    if (e < 0) {
        const n = t + e;
        return n < 0 ? _([]) : _([this[n]])
    }
    return _([this[e]])
}
function oo(...e) {
    let t;
    const n = N();
    for (let i = 0; i < e.length; i += 1) {
        t = e[i];
        for (let r = 0; r < this.length; r += 1)
            if (typeof t == "string") {
                const s = n.createElement("div");
                for (s.innerHTML = t; s.firstChild; )
                    this[r].appendChild(s.firstChild)
            } else if (t instanceof W)
                for (let s = 0; s < t.length; s += 1)
                    this[r].appendChild(t[s]);
            else
                this[r].appendChild(t)
    }
    return this
}
function lo(e) {
    const t = N();
    let n, i;
    for (n = 0; n < this.length; n += 1)
        if (typeof e == "string") {
            const r = t.createElement("div");
            for (r.innerHTML = e,
                     i = r.childNodes.length - 1; i >= 0; i -= 1)
                this[n].insertBefore(r.childNodes[i], this[n].childNodes[0])
        } else if (e instanceof W)
            for (i = 0; i < e.length; i += 1)
                this[n].insertBefore(e[i], this[n].childNodes[0]);
        else
            this[n].insertBefore(e, this[n].childNodes[0]);
    return this
}
function uo(e) {
    return this.length > 0 ? e ? this[0].nextElementSibling && _(this[0].nextElementSibling).is(e) ? _([this[0].nextElementSibling]) : _([]) : this[0].nextElementSibling ? _([this[0].nextElementSibling]) : _([]) : _([])
}
function co(e) {
    const t = [];
    let n = this[0];
    if (!n)
        return _([]);
    for (; n.nextElementSibling; ) {
        const i = n.nextElementSibling;
        e ? _(i).is(e) && t.push(i) : t.push(i),
            n = i
    }
    return _(t)
}
function fo(e) {
    if (this.length > 0) {
        const t = this[0];
        return e ? t.previousElementSibling && _(t.previousElementSibling).is(e) ? _([t.previousElementSibling]) : _([]) : t.previousElementSibling ? _([t.previousElementSibling]) : _([])
    }
    return _([])
}
function po(e) {
    const t = [];
    let n = this[0];
    if (!n)
        return _([]);
    for (; n.previousElementSibling; ) {
        const i = n.previousElementSibling;
        e ? _(i).is(e) && t.push(i) : t.push(i),
            n = i
    }
    return _(t)
}
function ho(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1)
        this[n].parentNode !== null && (e ? _(this[n].parentNode).is(e) && t.push(this[n].parentNode) : t.push(this[n].parentNode));
    return _(t)
}
function mo(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1) {
        let i = this[n].parentNode;
        for (; i; )
            e ? _(i).is(e) && t.push(i) : t.push(i),
                i = i.parentNode
    }
    return _(t)
}
function go(e) {
    let t = this;
    return typeof e > "u" ? _([]) : (t.is(e) || (t = t.parents(e).eq(0)),
        t)
}
function vo(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1) {
        const i = this[n].querySelectorAll(e);
        for (let r = 0; r < i.length; r += 1)
            t.push(i[r])
    }
    return _(t)
}
function bo(e) {
    const t = [];
    for (let n = 0; n < this.length; n += 1) {
        const i = this[n].children;
        for (let r = 0; r < i.length; r += 1)
            (!e || _(i[r]).is(e)) && t.push(i[r])
    }
    return _(t)
}
function yo() {
    for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
    return this
}
const pn = {
    addClass: Fa,
    removeClass: za,
    hasClass: Ba,
    toggleClass: Ra,
    attr: ja,
    removeAttr: Ga,
    transform: Ha,
    transition: Va,
    on: Wa,
    off: qa,
    trigger: Ka,
    transitionEnd: Ya,
    outerWidth: Xa,
    outerHeight: Ua,
    styles: Qa,
    offset: Ja,
    css: Za,
    each: eo,
    html: no,
    text: io,
    is: ro,
    index: so,
    eq: ao,
    append: oo,
    prepend: lo,
    next: uo,
    nextAll: co,
    prev: fo,
    prevAll: po,
    parent: ho,
    parents: mo,
    closest: go,
    find: vo,
    children: bo,
    filter: to,
    remove: yo
};
Object.keys(pn).forEach(e=>{
        Object.defineProperty(_.fn, e, {
            value: pn[e],
            writable: !0
        })
    }
);
function xo(e) {
    const t = e;
    Object.keys(t).forEach(n=>{
            try {
                t[n] = null
            } catch {}
            try {
                delete t[n]
            } catch {}
        }
    )
}
function Ne(e, t=0) {
    return setTimeout(e, t)
}
function ye() {
    return Date.now()
}
function So(e) {
    const t = k();
    let n;
    return t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
        n
}
function Eo(e, t="x") {
    const n = k();
    let i, r, s;
    const a = So(e);
    return n.WebKitCSSMatrix ? (r = a.transform || a.webkitTransform,
    r.split(",").length > 6 && (r = r.split(", ").map(o=>o.replace(",", ".")).join(", ")),
        s = new n.WebKitCSSMatrix(r === "none" ? "" : r)) : (s = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
        i = s.toString().split(",")),
    t === "x" && (n.WebKitCSSMatrix ? r = s.m41 : i.length === 16 ? r = parseFloat(i[12]) : r = parseFloat(i[4])),
    t === "y" && (n.WebKitCSSMatrix ? r = s.m42 : i.length === 16 ? r = parseFloat(i[13]) : r = parseFloat(i[5])),
    r || 0
}
function Oe(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}
function _o(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11)
}
function z(...e) {
    const t = Object(e[0])
        , n = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < e.length; i += 1) {
        const r = e[i];
        if (r != null && !_o(r)) {
            const s = Object.keys(Object(r)).filter(a=>n.indexOf(a) < 0);
            for (let a = 0, o = s.length; a < o; a += 1) {
                const l = s[a]
                    , u = Object.getOwnPropertyDescriptor(r, l);
                u !== void 0 && u.enumerable && (Oe(t[l]) && Oe(r[l]) ? r[l].__swiper__ ? t[l] = r[l] : z(t[l], r[l]) : !Oe(t[l]) && Oe(r[l]) ? (t[l] = {},
                    r[l].__swiper__ ? t[l] = r[l] : z(t[l], r[l])) : t[l] = r[l])
            }
        }
    }
    return t
}
function Me(e, t, n) {
    e.style.setProperty(t, n)
}
function Bi({swiper: e, targetPosition: t, side: n}) {
    const i = k()
        , r = -e.translate;
    let s = null, a;
    const o = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none",
        i.cancelAnimationFrame(e.cssModeFrameID);
    const l = t > r ? "next" : "prev"
        , u = (p,f)=>l === "next" && p >= f || l === "prev" && p <= f
        , c = ()=>{
            a = new Date().getTime(),
            s === null && (s = a);
            const p = Math.max(Math.min((a - s) / o, 1), 0)
                , f = .5 - Math.cos(p * Math.PI) / 2;
            let m = r + f * (t - r);
            if (u(m, t) && (m = t),
                e.wrapperEl.scrollTo({
                    [n]: m
                }),
                u(m, t)) {
                e.wrapperEl.style.overflow = "hidden",
                    e.wrapperEl.style.scrollSnapType = "",
                    setTimeout(()=>{
                            e.wrapperEl.style.overflow = "",
                                e.wrapperEl.scrollTo({
                                    [n]: m
                                })
                        }
                    ),
                    i.cancelAnimationFrame(e.cssModeFrameID);
                return
            }
            e.cssModeFrameID = i.requestAnimationFrame(c)
        }
    ;
    c()
}
let Ze;
function To() {
    const e = k()
        , t = N();
    return {
        smoothScroll: t.documentElement && "scrollBehavior"in t.documentElement.style,
        touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch),
        passiveListener: function() {
            let i = !1;
            try {
                const r = Object.defineProperty({}, "passive", {
                    get() {
                        i = !0
                    }
                });
                e.addEventListener("testPassiveListener", null, r)
            } catch {}
            return i
        }(),
        gestures: function() {
            return "ongesturestart"in e
        }()
    }
}
function ji() {
    return Ze || (Ze = To()),
        Ze
}
let et;
function Co({userAgent: e}={}) {
    const t = ji()
        , n = k()
        , i = n.navigator.platform
        , r = e || n.navigator.userAgent
        , s = {
        ios: !1,
        android: !1
    }
        , a = n.screen.width
        , o = n.screen.height
        , l = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let u = r.match(/(iPad).*OS\s([\d_]+)/);
    const c = r.match(/(iPod)(.*OS\s([\d_]+))?/)
        , p = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
        , f = i === "Win32";
    let m = i === "MacIntel";
    const v = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !u && m && t.touch && v.indexOf(`${a}x ${o}`) >= 0 && (u = r.match(/(Version)\/([\d.]+)/),
    u || (u = [0, 1, "13_0_0"]),
        m = !1),
    l && !f && (s.os = "android",
        s.android = !0),
    (u || p || c) && (s.os = "ios",
        s.ios = !0),
        s
}
function wo(e={}) {
    return et || (et = Co(e)),
        et
}
let tt;
function Oo() {
    const e = k();
    function t() {
        const n = e.navigator.userAgent.toLowerCase();
        return n.indexOf("safari") >= 0 && n.indexOf("chrome") < 0 && n.indexOf("android") < 0
    }
    return {
        isSafari: t(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
    }
}
function Mo() {
    return tt || (tt = Oo()),
        tt
}
function $o({swiper: e, on: t, emit: n}) {
    const i = k();
    let r = null
        , s = null;
    const a = ()=>{
            !e || e.destroyed || !e.initialized || (n("beforeResize"),
                n("resize"))
        }
        , o = ()=>{
            !e || e.destroyed || !e.initialized || (r = new ResizeObserver(c=>{
                    s = i.requestAnimationFrame(()=>{
                            const {width: p, height: f} = e;
                            let m = p
                                , v = f;
                            c.forEach(({contentBoxSize: h, contentRect: d, target: g})=>{
                                    g && g !== e.el || (m = d ? d.width : (h[0] || h).inlineSize,
                                        v = d ? d.height : (h[0] || h).blockSize)
                                }
                            ),
                            (m !== p || v !== f) && a()
                        }
                    )
                }
            ),
                r.observe(e.el))
        }
        , l = ()=>{
            s && i.cancelAnimationFrame(s),
            r && r.unobserve && e.el && (r.unobserve(e.el),
                r = null)
        }
        , u = ()=>{
            !e || e.destroyed || !e.initialized || n("orientationchange")
        }
    ;
    t("init", ()=>{
            if (e.params.resizeObserver && typeof i.ResizeObserver < "u") {
                o();
                return
            }
            i.addEventListener("resize", a),
                i.addEventListener("orientationchange", u)
        }
    ),
        t("destroy", ()=>{
                l(),
                    i.removeEventListener("resize", a),
                    i.removeEventListener("orientationchange", u)
            }
        )
}
function Lo({swiper: e, extendParams: t, on: n, emit: i}) {
    const r = []
        , s = k()
        , a = (u,c={})=>{
            const p = s.MutationObserver || s.WebkitMutationObserver
                , f = new p(m=>{
                    if (m.length === 1) {
                        i("observerUpdate", m[0]);
                        return
                    }
                    const v = function() {
                        i("observerUpdate", m[0])
                    };
                    s.requestAnimationFrame ? s.requestAnimationFrame(v) : s.setTimeout(v, 0)
                }
            );
            f.observe(u, {
                attributes: typeof c.attributes > "u" ? !0 : c.attributes,
                childList: typeof c.childList > "u" ? !0 : c.childList,
                characterData: typeof c.characterData > "u" ? !0 : c.characterData
            }),
                r.push(f)
        }
        , o = ()=>{
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const u = e.$el.parents();
                    for (let c = 0; c < u.length; c += 1)
                        a(u[c])
                }
                a(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }),
                    a(e.$wrapperEl[0], {
                        attributes: !1
                    })
            }
        }
        , l = ()=>{
            r.forEach(u=>{
                    u.disconnect()
                }
            ),
                r.splice(0, r.length)
        }
    ;
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
        n("init", o),
        n("destroy", l)
}
const Ao = {
    on(e, t, n) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof t != "function")
            return i;
        const r = n ? "unshift" : "push";
        return e.split(" ").forEach(s=>{
                i.eventsListeners[s] || (i.eventsListeners[s] = []),
                    i.eventsListeners[s][r](t)
            }
        ),
            i
    },
    once(e, t, n) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof t != "function")
            return i;
        function r(...s) {
            i.off(e, r),
            r.__emitterProxy && delete r.__emitterProxy,
                t.apply(i, s)
        }
        return r.__emitterProxy = t,
            i.on(e, r, n)
    },
    onAny(e, t) {
        const n = this;
        if (!n.eventsListeners || n.destroyed || typeof e != "function")
            return n;
        const i = t ? "unshift" : "push";
        return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e),
            n
    },
    offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners)
            return t;
        const n = t.eventsAnyListeners.indexOf(e);
        return n >= 0 && t.eventsAnyListeners.splice(n, 1),
            t
    },
    off(e, t) {
        const n = this;
        return !n.eventsListeners || n.destroyed || !n.eventsListeners || e.split(" ").forEach(i=>{
                typeof t > "u" ? n.eventsListeners[i] = [] : n.eventsListeners[i] && n.eventsListeners[i].forEach((r,s)=>{
                        (r === t || r.__emitterProxy && r.__emitterProxy === t) && n.eventsListeners[i].splice(s, 1)
                    }
                )
            }
        ),
            n
    },
    emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsListeners)
            return t;
        let n, i, r;
        return typeof e[0] == "string" || Array.isArray(e[0]) ? (n = e[0],
            i = e.slice(1, e.length),
            r = t) : (n = e[0].events,
            i = e[0].data,
            r = e[0].context || t),
            i.unshift(r),
            (Array.isArray(n) ? n : n.split(" ")).forEach(a=>{
                    t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(o=>{
                            o.apply(r, [a, ...i])
                        }
                    ),
                    t.eventsListeners && t.eventsListeners[a] && t.eventsListeners[a].forEach(o=>{
                            o.apply(r, i)
                        }
                    )
                }
            ),
            t
    }
};
function Po() {
    const e = this;
    let t, n;
    const i = e.$el;
    typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = i[0].clientWidth,
        typeof e.params.height < "u" && e.params.height !== null ? n = e.params.height : n = i[0].clientHeight,
    !(t === 0 && e.isHorizontal() || n === 0 && e.isVertical()) && (t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10),
        n = n - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10),
    Number.isNaN(t) && (t = 0),
    Number.isNaN(n) && (n = 0),
        Object.assign(e, {
            width: t,
            height: n,
            size: e.isHorizontal() ? t : n
        }))
}
function ko() {
    const e = this;
    function t(C) {
        return e.isHorizontal() ? C : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[C]
    }
    function n(C, w) {
        return parseFloat(C.getPropertyValue(t(w)) || 0)
    }
    const i = e.params
        , {$wrapperEl: r, size: s, rtlTranslate: a, wrongRTL: o} = e
        , l = e.virtual && i.virtual.enabled
        , u = l ? e.virtual.slides.length : e.slides.length
        , c = r.children(`.${e.params.slideClass}`)
        , p = l ? e.virtual.slides.length : c.length;
    let f = [];
    const m = []
        , v = [];
    let h = i.slidesOffsetBefore;
    typeof h == "function" && (h = i.slidesOffsetBefore.call(e));
    let d = i.slidesOffsetAfter;
    typeof d == "function" && (d = i.slidesOffsetAfter.call(e));
    const g = e.snapGrid.length
        , x = e.slidesGrid.length;
    let S = i.spaceBetween
        , E = -h
        , y = 0
        , b = 0;
    if (typeof s > "u")
        return;
    typeof S == "string" && S.indexOf("%") >= 0 && (S = parseFloat(S.replace("%", "")) / 100 * s),
        e.virtualSize = -S,
        a ? c.css({
            marginLeft: "",
            marginBottom: "",
            marginTop: ""
        }) : c.css({
            marginRight: "",
            marginBottom: "",
            marginTop: ""
        }),
    i.centeredSlides && i.cssMode && (Me(e.wrapperEl, "--swiper-centered-offset-before", ""),
        Me(e.wrapperEl, "--swiper-centered-offset-after", ""));
    const T = i.grid && i.grid.rows > 1 && e.grid;
    T && e.grid.initSlides(p);
    let O;
    const $ = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter(C=>typeof i.breakpoints[C].slidesPerView < "u").length > 0;
    for (let C = 0; C < p; C += 1) {
        O = 0;
        const w = c.eq(C);
        if (T && e.grid.updateSlide(C, w, p, t),
        w.css("display") !== "none") {
            if (i.slidesPerView === "auto") {
                $ && (c[C].style[t("width")] = "");
                const M = getComputedStyle(w[0])
                    , I = w[0].style.transform
                    , ue = w[0].style.webkitTransform;
                if (I && (w[0].style.transform = "none"),
                ue && (w[0].style.webkitTransform = "none"),
                    i.roundLengths)
                    O = e.isHorizontal() ? w.outerWidth(!0) : w.outerHeight(!0);
                else {
                    const H = n(M, "width")
                        , X = n(M, "padding-left")
                        , Wi = n(M, "padding-right")
                        , Vt = n(M, "margin-left")
                        , Wt = n(M, "margin-right")
                        , qt = M.getPropertyValue("box-sizing");
                    if (qt && qt === "border-box")
                        O = H + Vt + Wt;
                    else {
                        const {clientWidth: qi, offsetWidth: Ki} = w[0];
                        O = H + X + Wi + Vt + Wt + (Ki - qi)
                    }
                }
                I && (w[0].style.transform = I),
                ue && (w[0].style.webkitTransform = ue),
                i.roundLengths && (O = Math.floor(O))
            } else
                O = (s - (i.slidesPerView - 1) * S) / i.slidesPerView,
                i.roundLengths && (O = Math.floor(O)),
                c[C] && (c[C].style[t("width")] = `${O}px`);
            c[C] && (c[C].swiperSlideSize = O),
                v.push(O),
                i.centeredSlides ? (E = E + O / 2 + y / 2 + S,
                y === 0 && C !== 0 && (E = E - s / 2 - S),
                C === 0 && (E = E - s / 2 - S),
                Math.abs(E) < 1 / 1e3 && (E = 0),
                i.roundLengths && (E = Math.floor(E)),
                b % i.slidesPerGroup === 0 && f.push(E),
                    m.push(E)) : (i.roundLengths && (E = Math.floor(E)),
                (b - Math.min(e.params.slidesPerGroupSkip, b)) % e.params.slidesPerGroup === 0 && f.push(E),
                    m.push(E),
                    E = E + O + S),
                e.virtualSize += O + S,
                y = O,
                b += 1
        }
    }
    if (e.virtualSize = Math.max(e.virtualSize, s) + d,
    a && o && (i.effect === "slide" || i.effect === "coverflow") && r.css({
        width: `${e.virtualSize + i.spaceBetween}px`
    }),
    i.setWrapperSize && r.css({
        [t("width")]: `${e.virtualSize + i.spaceBetween}px`
    }),
    T && e.grid.updateWrapperSize(O, f, t),
        !i.centeredSlides) {
        const C = [];
        for (let w = 0; w < f.length; w += 1) {
            let M = f[w];
            i.roundLengths && (M = Math.floor(M)),
            f[w] <= e.virtualSize - s && C.push(M)
        }
        f = C,
        Math.floor(e.virtualSize - s) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - s)
    }
    if (f.length === 0 && (f = [0]),
    i.spaceBetween !== 0) {
        const C = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
        c.filter((w,M)=>i.cssMode ? M !== c.length - 1 : !0).css({
            [C]: `${S}px`
        })
    }
    if (i.centeredSlides && i.centeredSlidesBounds) {
        let C = 0;
        v.forEach(M=>{
                C += M + (i.spaceBetween ? i.spaceBetween : 0)
            }
        ),
            C -= i.spaceBetween;
        const w = C - s;
        f = f.map(M=>M < 0 ? -h : M > w ? w + d : M)
    }
    if (i.centerInsufficientSlides) {
        let C = 0;
        if (v.forEach(w=>{
                C += w + (i.spaceBetween ? i.spaceBetween : 0)
            }
        ),
            C -= i.spaceBetween,
        C < s) {
            const w = (s - C) / 2;
            f.forEach((M,I)=>{
                    f[I] = M - w
                }
            ),
                m.forEach((M,I)=>{
                        m[I] = M + w
                    }
                )
        }
    }
    if (Object.assign(e, {
        slides: c,
        snapGrid: f,
        slidesGrid: m,
        slidesSizesGrid: v
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
        Me(e.wrapperEl, "--swiper-centered-offset-before", `${-f[0]}px`),
            Me(e.wrapperEl, "--swiper-centered-offset-after", `${e.size / 2 - v[v.length - 1] / 2}px`);
        const C = -e.snapGrid[0]
            , w = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(M=>M + C),
            e.slidesGrid = e.slidesGrid.map(M=>M + w)
    }
    if (p !== u && e.emit("slidesLengthChange"),
    f.length !== g && (e.params.watchOverflow && e.checkOverflow(),
        e.emit("snapGridLengthChange")),
    m.length !== x && e.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && e.updateSlidesOffset(),
    !l && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
        const C = `${i.containerModifierClass}backface-hidden`
            , w = e.$el.hasClass(C);
        p <= i.maxBackfaceHiddenSlides ? w || e.$el.addClass(C) : w && e.$el.removeClass(C)
    }
}
function Io(e) {
    const t = this
        , n = []
        , i = t.virtual && t.params.virtual.enabled;
    let r = 0, s;
    typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
    const a = o=>i ? t.slides.filter(l=>parseInt(l.getAttribute("data-swiper-slide-index"), 10) === o)[0] : t.slides.eq(o)[0];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
            (t.visibleSlides || _([])).each(o=>{
                    n.push(o)
                }
            );
        else
            for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                const o = t.activeIndex + s;
                if (o > t.slides.length && !i)
                    break;
                n.push(a(o))
            }
    else
        n.push(a(t.activeIndex));
    for (s = 0; s < n.length; s += 1)
        if (typeof n[s] < "u") {
            const o = n[s].offsetHeight;
            r = o > r ? o : r
        }
    (r || r === 0) && t.$wrapperEl.css("height", `${r}px`)
}
function No() {
    const e = this
        , t = e.slides;
    for (let n = 0; n < t.length; n += 1)
        t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
}
function Do(e=this && this.translate || 0) {
    const t = this
        , n = t.params
        , {slides: i, rtlTranslate: r, snapGrid: s} = t;
    if (i.length === 0)
        return;
    typeof i[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let a = -e;
    r && (a = e),
        i.removeClass(n.slideVisibleClass),
        t.visibleSlidesIndexes = [],
        t.visibleSlides = [];
    for (let o = 0; o < i.length; o += 1) {
        const l = i[o];
        let u = l.swiperSlideOffset;
        n.cssMode && n.centeredSlides && (u -= i[0].swiperSlideOffset);
        const c = (a + (n.centeredSlides ? t.minTranslate() : 0) - u) / (l.swiperSlideSize + n.spaceBetween)
            , p = (a - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) / (l.swiperSlideSize + n.spaceBetween)
            , f = -(a - u)
            , m = f + t.slidesSizesGrid[o];
        (f >= 0 && f < t.size - 1 || m > 1 && m <= t.size || f <= 0 && m >= t.size) && (t.visibleSlides.push(l),
            t.visibleSlidesIndexes.push(o),
            i.eq(o).addClass(n.slideVisibleClass)),
            l.progress = r ? -c : c,
            l.originalProgress = r ? -p : p
    }
    t.visibleSlides = _(t.visibleSlides)
}
function Fo(e) {
    const t = this;
    if (typeof e > "u") {
        const u = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * u || 0
    }
    const n = t.params
        , i = t.maxTranslate() - t.minTranslate();
    let {progress: r, isBeginning: s, isEnd: a} = t;
    const o = s
        , l = a;
    i === 0 ? (r = 0,
        s = !0,
        a = !0) : (r = (e - t.minTranslate()) / i,
        s = r <= 0,
        a = r >= 1),
        Object.assign(t, {
            progress: r,
            isBeginning: s,
            isEnd: a
        }),
    (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e),
    s && !o && t.emit("reachBeginning toEdge"),
    a && !l && t.emit("reachEnd toEdge"),
    (o && !s || l && !a) && t.emit("fromEdge"),
        t.emit("progress", r)
}
function zo() {
    const e = this
        , {slides: t, params: n, $wrapperEl: i, activeIndex: r, realIndex: s} = e
        , a = e.virtual && n.virtual.enabled;
    t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`);
    let o;
    a ? o = e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${r}"]`) : o = t.eq(r),
        o.addClass(n.slideActiveClass),
    n.loop && (o.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`).addClass(n.slideDuplicateActiveClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`).addClass(n.slideDuplicateActiveClass));
    let l = o.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
    n.loop && l.length === 0 && (l = t.eq(0),
        l.addClass(n.slideNextClass));
    let u = o.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
    n.loop && u.length === 0 && (u = t.eq(-1),
        u.addClass(n.slidePrevClass)),
    n.loop && (l.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass),
        u.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)),
        e.emitSlidesClasses()
}
function Ro(e) {
    const t = this
        , n = t.rtlTranslate ? t.translate : -t.translate
        , {slidesGrid: i, snapGrid: r, params: s, activeIndex: a, realIndex: o, snapIndex: l} = t;
    let u = e, c;
    if (typeof u > "u") {
        for (let f = 0; f < i.length; f += 1)
            typeof i[f + 1] < "u" ? n >= i[f] && n < i[f + 1] - (i[f + 1] - i[f]) / 2 ? u = f : n >= i[f] && n < i[f + 1] && (u = f + 1) : n >= i[f] && (u = f);
        s.normalizeSlideIndex && (u < 0 || typeof u > "u") && (u = 0)
    }
    if (r.indexOf(n) >= 0)
        c = r.indexOf(n);
    else {
        const f = Math.min(s.slidesPerGroupSkip, u);
        c = f + Math.floor((u - f) / s.slidesPerGroup)
    }
    if (c >= r.length && (c = r.length - 1),
    u === a) {
        c !== l && (t.snapIndex = c,
            t.emit("snapIndexChange"));
        return
    }
    const p = parseInt(t.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
    Object.assign(t, {
        snapIndex: c,
        realIndex: p,
        previousIndex: a,
        activeIndex: u
    }),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
    o !== p && t.emit("realIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
}
function Bo(e) {
    const t = this
        , n = t.params
        , i = _(e).closest(`.${n.slideClass}`)[0];
    let r = !1, s;
    if (i) {
        for (let a = 0; a < t.slides.length; a += 1)
            if (t.slides[a] === i) {
                r = !0,
                    s = a;
                break
            }
    }
    if (i && r)
        t.clickedSlide = i,
            t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(_(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = s;
    else {
        t.clickedSlide = void 0,
            t.clickedIndex = void 0;
        return
    }
    n.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
const jo = {
    updateSize: Po,
    updateSlides: ko,
    updateAutoHeight: Io,
    updateSlidesOffset: No,
    updateSlidesProgress: Do,
    updateProgress: Fo,
    updateSlidesClasses: zo,
    updateActiveIndex: Ro,
    updateClickedSlide: Bo
};
function Go(e=this.isHorizontal() ? "x" : "y") {
    const t = this
        , {params: n, rtlTranslate: i, translate: r, $wrapperEl: s} = t;
    if (n.virtualTranslate)
        return i ? -r : r;
    if (n.cssMode)
        return r;
    let a = Eo(s[0], e);
    return i && (a = -a),
    a || 0
}
function Ho(e, t) {
    const n = this
        , {rtlTranslate: i, params: r, $wrapperEl: s, wrapperEl: a, progress: o} = n;
    let l = 0
        , u = 0;
    const c = 0;
    n.isHorizontal() ? l = i ? -e : e : u = e,
    r.roundLengths && (l = Math.floor(l),
        u = Math.floor(u)),
        r.cssMode ? a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -l : -u : r.virtualTranslate || s.transform(`translate3d(${l}px, ${u}px, ${c}px)`),
        n.previousTranslate = n.translate,
        n.translate = n.isHorizontal() ? l : u;
    let p;
    const f = n.maxTranslate() - n.minTranslate();
    f === 0 ? p = 0 : p = (e - n.minTranslate()) / f,
    p !== o && n.updateProgress(e),
        n.emit("setTranslate", n.translate, t)
}
function Vo() {
    return -this.snapGrid[0]
}
function Wo() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function qo(e=0, t=this.params.speed, n=!0, i=!0, r) {
    const s = this
        , {params: a, wrapperEl: o} = s;
    if (s.animating && a.preventInteractionOnTransition)
        return !1;
    const l = s.minTranslate()
        , u = s.maxTranslate();
    let c;
    if (i && e > l ? c = l : i && e < u ? c = u : c = e,
        s.updateProgress(c),
        a.cssMode) {
        const p = s.isHorizontal();
        if (t === 0)
            o[p ? "scrollLeft" : "scrollTop"] = -c;
        else {
            if (!s.support.smoothScroll)
                return Bi({
                    swiper: s,
                    targetPosition: -c,
                    side: p ? "left" : "top"
                }),
                    !0;
            o.scrollTo({
                [p ? "left" : "top"]: -c,
                behavior: "smooth"
            })
        }
        return !0
    }
    return t === 0 ? (s.setTransition(0),
        s.setTranslate(c),
    n && (s.emit("beforeTransitionStart", t, r),
        s.emit("transitionEnd"))) : (s.setTransition(t),
        s.setTranslate(c),
    n && (s.emit("beforeTransitionStart", t, r),
        s.emit("transitionStart")),
    s.animating || (s.animating = !0,
    s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(f) {
            !s || s.destroyed || f.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd),
                s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd),
                s.onTranslateToWrapperTransitionEnd = null,
                delete s.onTranslateToWrapperTransitionEnd,
            n && s.emit("transitionEnd"))
        }
    ),
        s.$wrapperEl[0].addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd),
        s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd))),
        !0
}
const Ko = {
    getTranslate: Go,
    setTranslate: Ho,
    minTranslate: Vo,
    maxTranslate: Wo,
    translateTo: qo
};
function Yo(e, t) {
    const n = this;
    n.params.cssMode || n.$wrapperEl.transition(e),
        n.emit("setTransition", e, t)
}
function Gi({swiper: e, runCallbacks: t, direction: n, step: i}) {
    const {activeIndex: r, previousIndex: s} = e;
    let a = n;
    if (a || (r > s ? a = "next" : r < s ? a = "prev" : a = "reset"),
        e.emit(`transition ${i}`),
    t && r !== s) {
        if (a === "reset") {
            e.emit(`slideResetTransition ${i}`);
            return
        }
        e.emit(`slideChangeTransition ${i}`),
            a === "next" ? e.emit(`slideNextTransition ${i}`) : e.emit(`slidePrevTransition ${i}`)
    }
}
function Xo(e=!0, t) {
    const n = this
        , {params: i} = n;
    i.cssMode || (i.autoHeight && n.updateAutoHeight(),
        Gi({
            swiper: n,
            runCallbacks: e,
            direction: t,
            step: "Start"
        }))
}
function Uo(e=!0, t) {
    const n = this
        , {params: i} = n;
    n.animating = !1,
    !i.cssMode && (n.setTransition(0),
        Gi({
            swiper: n,
            runCallbacks: e,
            direction: t,
            step: "End"
        }))
}
const Jo = {
    setTransition: Yo,
    transitionStart: Xo,
    transitionEnd: Uo
};
function Qo(e=0, t=this.params.speed, n=!0, i, r) {
    if (typeof e != "number" && typeof e != "string")
        throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
    if (typeof e == "string") {
        const S = parseInt(e, 10);
        if (!isFinite(S))
            throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
        e = S
    }
    const s = this;
    let a = e;
    a < 0 && (a = 0);
    const {params: o, snapGrid: l, slidesGrid: u, previousIndex: c, activeIndex: p, rtlTranslate: f, wrapperEl: m, enabled: v} = s;
    if (s.animating && o.preventInteractionOnTransition || !v && !i && !r)
        return !1;
    const h = Math.min(s.params.slidesPerGroupSkip, a);
    let d = h + Math.floor((a - h) / s.params.slidesPerGroup);
    d >= l.length && (d = l.length - 1);
    const g = -l[d];
    if (o.normalizeSlideIndex)
        for (let S = 0; S < u.length; S += 1) {
            const E = -Math.floor(g * 100)
                , y = Math.floor(u[S] * 100)
                , b = Math.floor(u[S + 1] * 100);
            typeof u[S + 1] < "u" ? E >= y && E < b - (b - y) / 2 ? a = S : E >= y && E < b && (a = S + 1) : E >= y && (a = S)
        }
    if (s.initialized && a !== p && (!s.allowSlideNext && g < s.translate && g < s.minTranslate() || !s.allowSlidePrev && g > s.translate && g > s.maxTranslate() && (p || 0) !== a))
        return !1;
    a !== (c || 0) && n && s.emit("beforeSlideChangeStart"),
        s.updateProgress(g);
    let x;
    if (a > p ? x = "next" : a < p ? x = "prev" : x = "reset",
    f && -g === s.translate || !f && g === s.translate)
        return s.updateActiveIndex(a),
        o.autoHeight && s.updateAutoHeight(),
            s.updateSlidesClasses(),
        o.effect !== "slide" && s.setTranslate(g),
        x !== "reset" && (s.transitionStart(n, x),
            s.transitionEnd(n, x)),
            !1;
    if (o.cssMode) {
        const S = s.isHorizontal()
            , E = f ? g : -g;
        if (t === 0) {
            const y = s.virtual && s.params.virtual.enabled;
            y && (s.wrapperEl.style.scrollSnapType = "none",
                s._immediateVirtual = !0),
                m[S ? "scrollLeft" : "scrollTop"] = E,
            y && requestAnimationFrame(()=>{
                    s.wrapperEl.style.scrollSnapType = "",
                        s._swiperImmediateVirtual = !1
                }
            )
        } else {
            if (!s.support.smoothScroll)
                return Bi({
                    swiper: s,
                    targetPosition: E,
                    side: S ? "left" : "top"
                }),
                    !0;
            m.scrollTo({
                [S ? "left" : "top"]: E,
                behavior: "smooth"
            })
        }
        return !0
    }
    return s.setTransition(t),
        s.setTranslate(g),
        s.updateActiveIndex(a),
        s.updateSlidesClasses(),
        s.emit("beforeTransitionStart", t, i),
        s.transitionStart(n, x),
        t === 0 ? s.transitionEnd(n, x) : s.animating || (s.animating = !0,
        s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(E) {
                !s || s.destroyed || E.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                    s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd),
                    s.onSlideToWrapperTransitionEnd = null,
                    delete s.onSlideToWrapperTransitionEnd,
                    s.transitionEnd(n, x))
            }
        ),
            s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
            s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd)),
        !0
}
function Zo(e=0, t=this.params.speed, n=!0, i) {
    if (typeof e == "string") {
        const a = parseInt(e, 10);
        if (!isFinite(a))
            throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
        e = a
    }
    const r = this;
    let s = e;
    return r.params.loop && (s += r.loopedSlides),
        r.slideTo(s, t, n, i)
}
function el(e=this.params.speed, t=!0, n) {
    const i = this
        , {animating: r, enabled: s, params: a} = i;
    if (!s)
        return i;
    let o = a.slidesPerGroup;
    a.slidesPerView === "auto" && a.slidesPerGroup === 1 && a.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o;
    if (a.loop) {
        if (r && a.loopPreventsSlide)
            return !1;
        i.loopFix(),
            i._clientLeft = i.$wrapperEl[0].clientLeft
    }
    return a.rewind && i.isEnd ? i.slideTo(0, e, t, n) : i.slideTo(i.activeIndex + l, e, t, n)
}
function tl(e=this.params.speed, t=!0, n) {
    const i = this
        , {params: r, animating: s, snapGrid: a, slidesGrid: o, rtlTranslate: l, enabled: u} = i;
    if (!u)
        return i;
    if (r.loop) {
        if (s && r.loopPreventsSlide)
            return !1;
        i.loopFix(),
            i._clientLeft = i.$wrapperEl[0].clientLeft
    }
    const c = l ? i.translate : -i.translate;
    function p(d) {
        return d < 0 ? -Math.floor(Math.abs(d)) : Math.floor(d)
    }
    const f = p(c)
        , m = a.map(d=>p(d));
    let v = a[m.indexOf(f) - 1];
    if (typeof v > "u" && r.cssMode) {
        let d;
        a.forEach((g,x)=>{
                f >= g && (d = x)
            }
        ),
        typeof d < "u" && (v = a[d > 0 ? d - 1 : d])
    }
    let h = 0;
    if (typeof v < "u" && (h = o.indexOf(v),
    h < 0 && (h = i.activeIndex - 1),
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (h = h - i.slidesPerViewDynamic("previous", !0) + 1,
        h = Math.max(h, 0))),
    r.rewind && i.isBeginning) {
        const d = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(d, e, t, n)
    }
    return i.slideTo(h, e, t, n)
}
function nl(e=this.params.speed, t=!0, n) {
    const i = this;
    return i.slideTo(i.activeIndex, e, t, n)
}
function il(e=this.params.speed, t=!0, n, i=.5) {
    const r = this;
    let s = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, s)
        , o = a + Math.floor((s - a) / r.params.slidesPerGroup)
        , l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[o]) {
        const u = r.snapGrid[o]
            , c = r.snapGrid[o + 1];
        l - u > (c - u) * i && (s += r.params.slidesPerGroup)
    } else {
        const u = r.snapGrid[o - 1]
            , c = r.snapGrid[o];
        l - u <= (c - u) * i && (s -= r.params.slidesPerGroup)
    }
    return s = Math.max(s, 0),
        s = Math.min(s, r.slidesGrid.length - 1),
        r.slideTo(s, e, t, n)
}
function rl() {
    const e = this
        , {params: t, $wrapperEl: n} = e
        , i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let r = e.clickedIndex, s;
    if (t.loop) {
        if (e.animating)
            return;
        s = parseInt(_(e.clickedSlide).attr("data-swiper-slide-index"), 10),
            t.centeredSlides ? r < e.loopedSlides - i / 2 || r > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(),
                r = n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                Ne(()=>{
                        e.slideTo(r)
                    }
                )) : e.slideTo(r) : r > e.slides.length - i ? (e.loopFix(),
                r = n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                Ne(()=>{
                        e.slideTo(r)
                    }
                )) : e.slideTo(r)
    } else
        e.slideTo(r)
}
const sl = {
    slideTo: Qo,
    slideToLoop: Zo,
    slideNext: el,
    slidePrev: tl,
    slideReset: nl,
    slideToClosest: il,
    slideToClickedSlide: rl
};
function al() {
    const e = this
        , t = N()
        , {params: n, $wrapperEl: i} = e
        , r = i.children().length > 0 ? _(i.children()[0].parentNode) : i;
    r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
    let s = r.children(`.${n.slideClass}`);
    if (n.loopFillGroupWithBlank) {
        const l = n.slidesPerGroup - s.length % n.slidesPerGroup;
        if (l !== n.slidesPerGroup) {
            for (let u = 0; u < l; u += 1) {
                const c = _(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
                r.append(c)
            }
            s = r.children(`.${n.slideClass}`)
        }
    }
    n.slidesPerView === "auto" && !n.loopedSlides && (n.loopedSlides = s.length),
        e.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)),
        e.loopedSlides += n.loopAdditionalSlides,
    e.loopedSlides > s.length && e.params.loopedSlidesLimit && (e.loopedSlides = s.length);
    const a = []
        , o = [];
    s.each((l,u)=>{
            _(l).attr("data-swiper-slide-index", u)
        }
    );
    for (let l = 0; l < e.loopedSlides; l += 1) {
        const u = l - Math.floor(l / s.length) * s.length;
        o.push(s.eq(u)[0]),
            a.unshift(s.eq(s.length - u - 1)[0])
    }
    for (let l = 0; l < o.length; l += 1)
        r.append(_(o[l].cloneNode(!0)).addClass(n.slideDuplicateClass));
    for (let l = a.length - 1; l >= 0; l -= 1)
        r.prepend(_(a[l].cloneNode(!0)).addClass(n.slideDuplicateClass))
}
function ol() {
    const e = this;
    e.emit("beforeLoopFix");
    const {activeIndex: t, slides: n, loopedSlides: i, allowSlidePrev: r, allowSlideNext: s, snapGrid: a, rtlTranslate: o} = e;
    let l;
    e.allowSlidePrev = !0,
        e.allowSlideNext = !0;
    const c = -a[t] - e.getTranslate();
    t < i ? (l = n.length - i * 3 + t,
        l += i,
    e.slideTo(l, 0, !1, !0) && c !== 0 && e.setTranslate((o ? -e.translate : e.translate) - c)) : t >= n.length - i && (l = -n.length + t + i,
        l += i,
    e.slideTo(l, 0, !1, !0) && c !== 0 && e.setTranslate((o ? -e.translate : e.translate) - c)),
        e.allowSlidePrev = r,
        e.allowSlideNext = s,
        e.emit("loopFix")
}
function ll() {
    const e = this
        , {$wrapperEl: t, params: n, slides: i} = e;
    t.children(`.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`).remove(),
        i.removeAttr("data-swiper-slide-index")
}
const ul = {
    loopCreate: al,
    loopFix: ol,
    loopDestroy: ll
};
function cl(e) {
    const t = this;
    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
        return;
    const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    n.style.cursor = "move",
        n.style.cursor = e ? "grabbing" : "grab"
}
function dl() {
    const e = this;
    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "")
}
const fl = {
    setGrabCursor: cl,
    unsetGrabCursor: dl
};
function pl(e, t=this) {
    function n(i) {
        if (!i || i === N() || i === k())
            return null;
        i.assignedSlot && (i = i.assignedSlot);
        const r = i.closest(e);
        return !r && !i.getRootNode ? null : r || n(i.getRootNode().host)
    }
    return n(t)
}
function hl(e) {
    const t = this
        , n = N()
        , i = k()
        , r = t.touchEventsData
        , {params: s, touches: a, enabled: o} = t;
    if (!o || t.animating && s.preventInteractionOnTransition)
        return;
    !t.animating && s.cssMode && s.loop && t.loopFix();
    let l = e;
    l.originalEvent && (l = l.originalEvent);
    let u = _(l.target);
    if (s.touchEventsTarget === "wrapper" && !u.closest(t.wrapperEl).length || (r.isTouchEvent = l.type === "touchstart",
    !r.isTouchEvent && "which"in l && l.which === 3) || !r.isTouchEvent && "button"in l && l.button > 0 || r.isTouched && r.isMoved)
        return;
    const c = !!s.noSwipingClass && s.noSwipingClass !== ""
        , p = e.composedPath ? e.composedPath() : e.path;
    c && l.target && l.target.shadowRoot && p && (u = _(p[0]));
    const f = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`
        , m = !!(l.target && l.target.shadowRoot);
    if (s.noSwiping && (m ? pl(f, u[0]) : u.closest(f)[0])) {
        t.allowClick = !0;
        return
    }
    if (s.swipeHandler && !u.closest(s.swipeHandler)[0])
        return;
    a.currentX = l.type === "touchstart" ? l.targetTouches[0].pageX : l.pageX,
        a.currentY = l.type === "touchstart" ? l.targetTouches[0].pageY : l.pageY;
    const v = a.currentX
        , h = a.currentY
        , d = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection
        , g = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
    if (d && (v <= g || v >= i.innerWidth - g))
        if (d === "prevent")
            e.preventDefault();
        else
            return;
    if (Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
        a.startX = v,
        a.startY = h,
        r.touchStartTime = ye(),
        t.allowClick = !0,
        t.updateSize(),
        t.swipeDirection = void 0,
    s.threshold > 0 && (r.allowThresholdMove = !1),
    l.type !== "touchstart") {
        let x = !0;
        u.is(r.focusableElements) && (x = !1,
        u[0].nodeName === "SELECT" && (r.isTouched = !1)),
        n.activeElement && _(n.activeElement).is(r.focusableElements) && n.activeElement !== u[0] && n.activeElement.blur();
        const S = x && t.allowTouchMove && s.touchStartPreventDefault;
        (s.touchStartForcePreventDefault || S) && !u[0].isContentEditable && l.preventDefault()
    }
    t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !s.cssMode && t.freeMode.onTouchStart(),
        t.emit("touchStart", l)
}
function ml(e) {
    const t = N()
        , n = this
        , i = n.touchEventsData
        , {params: r, touches: s, rtlTranslate: a, enabled: o} = n;
    if (!o)
        return;
    let l = e;
    if (l.originalEvent && (l = l.originalEvent),
        !i.isTouched) {
        i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", l);
        return
    }
    if (i.isTouchEvent && l.type !== "touchmove")
        return;
    const u = l.type === "touchmove" && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0])
        , c = l.type === "touchmove" ? u.pageX : l.pageX
        , p = l.type === "touchmove" ? u.pageY : l.pageY;
    if (l.preventedByNestedSwiper) {
        s.startX = c,
            s.startY = p;
        return
    }
    if (!n.allowTouchMove) {
        _(l.target).is(i.focusableElements) || (n.allowClick = !1),
        i.isTouched && (Object.assign(s, {
            startX: c,
            startY: p,
            currentX: c,
            currentY: p
        }),
            i.touchStartTime = ye());
        return
    }
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
        if (n.isVertical()) {
            if (p < s.startY && n.translate <= n.maxTranslate() || p > s.startY && n.translate >= n.minTranslate()) {
                i.isTouched = !1,
                    i.isMoved = !1;
                return
            }
        } else if (c < s.startX && n.translate <= n.maxTranslate() || c > s.startX && n.translate >= n.minTranslate())
            return
    }
    if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && _(l.target).is(i.focusableElements)) {
        i.isMoved = !0,
            n.allowClick = !1;
        return
    }
    if (i.allowTouchCallbacks && n.emit("touchMove", l),
    l.targetTouches && l.targetTouches.length > 1)
        return;
    s.currentX = c,
        s.currentY = p;
    const f = s.currentX - s.startX
        , m = s.currentY - s.startY;
    if (n.params.threshold && Math.sqrt(f ** 2 + m ** 2) < n.params.threshold)
        return;
    if (typeof i.isScrolling > "u") {
        let g;
        n.isHorizontal() && s.currentY === s.startY || n.isVertical() && s.currentX === s.startX ? i.isScrolling = !1 : f * f + m * m >= 25 && (g = Math.atan2(Math.abs(m), Math.abs(f)) * 180 / Math.PI,
            i.isScrolling = n.isHorizontal() ? g > r.touchAngle : 90 - g > r.touchAngle)
    }
    if (i.isScrolling && n.emit("touchMoveOpposite", l),
    typeof i.startMoving > "u" && (s.currentX !== s.startX || s.currentY !== s.startY) && (i.startMoving = !0),
        i.isScrolling) {
        i.isTouched = !1;
        return
    }
    if (!i.startMoving)
        return;
    n.allowClick = !1,
    !r.cssMode && l.cancelable && l.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
    i.isMoved || (r.loop && !r.cssMode && n.loopFix(),
        i.startTranslate = n.getTranslate(),
        n.setTransition(0),
    n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        i.allowMomentumBounce = !1,
    r.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0),
        n.emit("sliderFirstMove", l)),
        n.emit("sliderMove", l),
        i.isMoved = !0;
    let v = n.isHorizontal() ? f : m;
    s.diff = v,
        v *= r.touchRatio,
    a && (v = -v),
        n.swipeDirection = v > 0 ? "prev" : "next",
        i.currentTranslate = v + i.startTranslate;
    let h = !0
        , d = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (d = 0),
        v > 0 && i.currentTranslate > n.minTranslate() ? (h = !1,
        r.resistance && (i.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + i.startTranslate + v) ** d)) : v < 0 && i.currentTranslate < n.maxTranslate() && (h = !1,
        r.resistance && (i.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - i.startTranslate - v) ** d)),
    h && (l.preventedByNestedSwiper = !0),
    !n.allowSlideNext && n.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
    !n.allowSlidePrev && n.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
    !n.allowSlidePrev && !n.allowSlideNext && (i.currentTranslate = i.startTranslate),
    r.threshold > 0)
        if (Math.abs(v) > r.threshold || i.allowThresholdMove) {
            if (!i.allowThresholdMove) {
                i.allowThresholdMove = !0,
                    s.startX = s.currentX,
                    s.startY = s.currentY,
                    i.currentTranslate = i.startTranslate,
                    s.diff = n.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY;
                return
            }
        } else {
            i.currentTranslate = i.startTranslate;
            return
        }
    !r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && n.freeMode || r.watchSlidesProgress) && (n.updateActiveIndex(),
        n.updateSlidesClasses()),
    n.params.freeMode && r.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
        n.updateProgress(i.currentTranslate),
        n.setTranslate(i.currentTranslate))
}
function gl(e) {
    const t = this
        , n = t.touchEventsData
        , {params: i, touches: r, rtlTranslate: s, slidesGrid: a, enabled: o} = t;
    if (!o)
        return;
    let l = e;
    if (l.originalEvent && (l = l.originalEvent),
    n.allowTouchCallbacks && t.emit("touchEnd", l),
        n.allowTouchCallbacks = !1,
        !n.isTouched) {
        n.isMoved && i.grabCursor && t.setGrabCursor(!1),
            n.isMoved = !1,
            n.startMoving = !1;
        return
    }
    i.grabCursor && n.isMoved && n.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const u = ye()
        , c = u - n.touchStartTime;
    if (t.allowClick) {
        const x = l.path || l.composedPath && l.composedPath();
        t.updateClickedSlide(x && x[0] || l.target),
            t.emit("tap click", l),
        c < 300 && u - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
    }
    if (n.lastClickTime = ye(),
        Ne(()=>{
                t.destroyed || (t.allowClick = !0)
            }
        ),
    !n.isTouched || !n.isMoved || !t.swipeDirection || r.diff === 0 || n.currentTranslate === n.startTranslate) {
        n.isTouched = !1,
            n.isMoved = !1,
            n.startMoving = !1;
        return
    }
    n.isTouched = !1,
        n.isMoved = !1,
        n.startMoving = !1;
    let p;
    if (i.followFinger ? p = s ? t.translate : -t.translate : p = -n.currentTranslate,
        i.cssMode)
        return;
    if (t.params.freeMode && i.freeMode.enabled) {
        t.freeMode.onTouchEnd({
            currentPos: p
        });
        return
    }
    let f = 0
        , m = t.slidesSizesGrid[0];
    for (let x = 0; x < a.length; x += x < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
        const S = x < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        typeof a[x + S] < "u" ? p >= a[x] && p < a[x + S] && (f = x,
            m = a[x + S] - a[x]) : p >= a[x] && (f = x,
            m = a[a.length - 1] - a[a.length - 2])
    }
    let v = null
        , h = null;
    i.rewind && (t.isBeginning ? h = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
    const d = (p - a[f]) / m
        , g = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (c > i.longSwipesMs) {
        if (!i.longSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.swipeDirection === "next" && (d >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? v : f + g) : t.slideTo(f)),
        t.swipeDirection === "prev" && (d > 1 - i.longSwipesRatio ? t.slideTo(f + g) : h !== null && d < 0 && Math.abs(d) > i.longSwipesRatio ? t.slideTo(h) : t.slideTo(f))
    } else {
        if (!i.shortSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.navigation && (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl) ? l.target === t.navigation.nextEl ? t.slideTo(f + g) : t.slideTo(f) : (t.swipeDirection === "next" && t.slideTo(v !== null ? v : f + g),
        t.swipeDirection === "prev" && t.slideTo(h !== null ? h : f))
    }
}
function hn() {
    const e = this
        , {params: t, el: n} = e;
    if (n && n.offsetWidth === 0)
        return;
    t.breakpoints && e.setBreakpoint();
    const {allowSlideNext: i, allowSlidePrev: r, snapGrid: s} = e;
    e.allowSlideNext = !0,
        e.allowSlidePrev = !0,
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
        e.allowSlidePrev = r,
        e.allowSlideNext = i,
    e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
}
function vl(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
    t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
        e.stopImmediatePropagation())))
}
function bl() {
    const e = this
        , {wrapperEl: t, rtlTranslate: n, enabled: i} = e;
    if (!i)
        return;
    e.previousTranslate = e.translate,
        e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
    e.translate === 0 && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    let r;
    const s = e.maxTranslate() - e.minTranslate();
    s === 0 ? r = 0 : r = (e.translate - e.minTranslate()) / s,
    r !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1)
}
let mn = !1;
function yl() {}
const Hi = (e,t)=>{
        const n = N()
            , {params: i, touchEvents: r, el: s, wrapperEl: a, device: o, support: l} = e
            , u = !!i.nested
            , c = t === "on" ? "addEventListener" : "removeEventListener"
            , p = t;
        if (!l.touch)
            s[c](r.start, e.onTouchStart, !1),
                n[c](r.move, e.onTouchMove, u),
                n[c](r.end, e.onTouchEnd, !1);
        else {
            const f = r.start === "touchstart" && l.passiveListener && i.passiveListeners ? {
                passive: !0,
                capture: !1
            } : !1;
            s[c](r.start, e.onTouchStart, f),
                s[c](r.move, e.onTouchMove, l.passiveListener ? {
                    passive: !1,
                    capture: u
                } : u),
                s[c](r.end, e.onTouchEnd, f),
            r.cancel && s[c](r.cancel, e.onTouchEnd, f)
        }
        (i.preventClicks || i.preventClicksPropagation) && s[c]("click", e.onClick, !0),
        i.cssMode && a[c]("scroll", e.onScroll),
            i.updateOnWindowResize ? e[p](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", hn, !0) : e[p]("observerUpdate", hn, !0)
    }
;
function xl() {
    const e = this
        , t = N()
        , {params: n, support: i} = e;
    e.onTouchStart = hl.bind(e),
        e.onTouchMove = ml.bind(e),
        e.onTouchEnd = gl.bind(e),
    n.cssMode && (e.onScroll = bl.bind(e)),
        e.onClick = vl.bind(e),
    i.touch && !mn && (t.addEventListener("touchstart", yl),
        mn = !0),
        Hi(e, "on")
}
function Sl() {
    Hi(this, "off")
}
const El = {
    attachEvents: xl,
    detachEvents: Sl
}
    , gn = (e,t)=>e.grid && t.grid && t.grid.rows > 1;
function _l() {
    const e = this
        , {activeIndex: t, initialized: n, loopedSlides: i=0, params: r, $el: s} = e
        , a = r.breakpoints;
    if (!a || a && Object.keys(a).length === 0)
        return;
    const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
    if (!o || e.currentBreakpoint === o)
        return;
    const u = (o in a ? a[o] : void 0) || e.originalParams
        , c = gn(e, r)
        , p = gn(e, u)
        , f = r.enabled;
    c && !p ? (s.removeClass(`${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`),
        e.emitContainerClasses()) : !c && p && (s.addClass(`${r.containerModifierClass}grid`),
    (u.grid.fill && u.grid.fill === "column" || !u.grid.fill && r.grid.fill === "column") && s.addClass(`${r.containerModifierClass}grid-column`),
        e.emitContainerClasses()),
        ["navigation", "pagination", "scrollbar"].forEach(d=>{
                const g = r[d] && r[d].enabled
                    , x = u[d] && u[d].enabled;
                g && !x && e[d].disable(),
                !g && x && e[d].enable()
            }
        );
    const m = u.direction && u.direction !== r.direction
        , v = r.loop && (u.slidesPerView !== r.slidesPerView || m);
    m && n && e.changeDirection(),
        z(e.params, u);
    const h = e.params.enabled;
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
    }),
        f && !h ? e.disable() : !f && h && e.enable(),
        e.currentBreakpoint = o,
        e.emit("_beforeBreakpoint", u),
    v && n && (e.loopDestroy(),
        e.loopCreate(),
        e.updateSlides(),
        e.slideTo(t - i + e.loopedSlides, 0, !1)),
        e.emit("breakpoint", u)
}
function Tl(e, t="window", n) {
    if (!e || t === "container" && !n)
        return;
    let i = !1;
    const r = k()
        , s = t === "window" ? r.innerHeight : n.clientHeight
        , a = Object.keys(e).map(o=>{
            if (typeof o == "string" && o.indexOf("@") === 0) {
                const l = parseFloat(o.substr(1));
                return {
                    value: s * l,
                    point: o
                }
            }
            return {
                value: o,
                point: o
            }
        }
    );
    a.sort((o,l)=>parseInt(o.value, 10) - parseInt(l.value, 10));
    for (let o = 0; o < a.length; o += 1) {
        const {point: l, value: u} = a[o];
        t === "window" ? r.matchMedia(`(min-width: ${u}px)`).matches && (i = l) : u <= n.clientWidth && (i = l)
    }
    return i || "max"
}
const Cl = {
    setBreakpoint: _l,
    getBreakpoint: Tl
};
function wl(e, t) {
    const n = [];
    return e.forEach(i=>{
            typeof i == "object" ? Object.keys(i).forEach(r=>{
                    i[r] && n.push(t + r)
                }
            ) : typeof i == "string" && n.push(t + i)
        }
    ),
        n
}
function Ol() {
    const e = this
        , {classNames: t, params: n, rtl: i, $el: r, device: s, support: a} = e
        , o = wl(["initialized", n.direction, {
        "pointer-events": !a.touch
    }, {
        "free-mode": e.params.freeMode && n.freeMode.enabled
    }, {
        autoheight: n.autoHeight
    }, {
        rtl: i
    }, {
        grid: n.grid && n.grid.rows > 1
    }, {
        "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column"
    }, {
        android: s.android
    }, {
        ios: s.ios
    }, {
        "css-mode": n.cssMode
    }, {
        centered: n.cssMode && n.centeredSlides
    }, {
        "watch-progress": n.watchSlidesProgress
    }], n.containerModifierClass);
    t.push(...o),
        r.addClass([...t].join(" ")),
        e.emitContainerClasses()
}
function Ml() {
    const e = this
        , {$el: t, classNames: n} = e;
    t.removeClass(n.join(" ")),
        e.emitContainerClasses()
}
const $l = {
    addClasses: Ol,
    removeClasses: Ml
};
function Ll(e, t, n, i, r, s) {
    const a = k();
    let o;
    function l() {
        s && s()
    }
    !_(e).parent("picture")[0] && (!e.complete || !r) && t ? (o = new a.Image,
        o.onload = l,
        o.onerror = l,
    i && (o.sizes = i),
    n && (o.srcset = n),
    t && (o.src = t)) : l()
}
function Al() {
    const e = this;
    e.imagesToLoad = e.$el.find("img");
    function t() {
        typeof e > "u" || e === null || !e || e.destroyed || (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1),
        e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
            e.emit("imagesReady")))
    }
    for (let n = 0; n < e.imagesToLoad.length; n += 1) {
        const i = e.imagesToLoad[n];
        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
    }
}
const Pl = {
    loadImage: Ll,
    preloadImages: Al
};
function kl() {
    const e = this
        , {isLocked: t, params: n} = e
        , {slidesOffsetBefore: i} = n;
    if (i) {
        const r = e.slides.length - 1
            , s = e.slidesGrid[r] + e.slidesSizesGrid[r] + i * 2;
        e.isLocked = e.size > s
    } else
        e.isLocked = e.snapGrid.length === 1;
    n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
const Il = {
    checkOverflow: kl
}
    , vn = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: !0,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function Nl(e, t) {
    return function(i={}) {
        const r = Object.keys(i)[0]
            , s = i[r];
        if (typeof s != "object" || s === null) {
            z(t, i);
            return
        }
        if (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 && e[r] === !0 && (e[r] = {
            auto: !0
        }),
            !(r in e && "enabled"in s)) {
            z(t, i);
            return
        }
        e[r] === !0 && (e[r] = {
            enabled: !0
        }),
        typeof e[r] == "object" && !("enabled"in e[r]) && (e[r].enabled = !0),
        e[r] || (e[r] = {
            enabled: !1
        }),
            z(t, i)
    }
}
const nt = {
    eventsEmitter: Ao,
    update: jo,
    translate: Ko,
    transition: Jo,
    slide: sl,
    loop: ul,
    grabCursor: fl,
    events: El,
    breakpoints: Cl,
    checkOverflow: Il,
    classes: $l,
    images: Pl
}
    , it = {};
class F {
    constructor(...t) {
        let n, i;
        if (t.length === 1 && t[0].constructor && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? i = t[0] : [n,i] = t,
        i || (i = {}),
            i = z({}, i),
        n && !i.el && (i.el = n),
        i.el && _(i.el).length > 1) {
            const o = [];
            return _(i.el).each(l=>{
                    const u = z({}, i, {
                        el: l
                    });
                    o.push(new F(u))
                }
            ),
                o
        }
        const r = this;
        r.__swiper__ = !0,
            r.support = ji(),
            r.device = wo({
                userAgent: i.userAgent
            }),
            r.browser = Mo(),
            r.eventsListeners = {},
            r.eventsAnyListeners = [],
            r.modules = [...r.__modules__],
        i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules);
        const s = {};
        r.modules.forEach(o=>{
                o({
                    swiper: r,
                    extendParams: Nl(i, s),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    emit: r.emit.bind(r)
                })
            }
        );
        const a = z({}, vn, s);
        return r.params = z({}, a, it, i),
            r.originalParams = z({}, r.params),
            r.passedParams = z({}, i),
        r.params && r.params.on && Object.keys(r.params.on).forEach(o=>{
                r.on(o, r.params.on[o])
            }
        ),
        r.params && r.params.onAny && r.onAny(r.params.onAny),
            r.$ = _,
            Object.assign(r, {
                enabled: r.params.enabled,
                el: n,
                classNames: [],
                slides: _(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal() {
                    return r.params.direction === "horizontal"
                },
                isVertical() {
                    return r.params.direction === "vertical"
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEvents: function() {
                    const l = ["touchstart", "touchmove", "touchend", "touchcancel"]
                        , u = ["pointerdown", "pointermove", "pointerup"];
                    return r.touchEventsTouch = {
                        start: l[0],
                        move: l[1],
                        end: l[2],
                        cancel: l[3]
                    },
                        r.touchEventsDesktop = {
                            start: u[0],
                            move: u[1],
                            end: u[2]
                        },
                        r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: r.params.focusableElements,
                    lastClickTime: ye(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }),
            r.emit("_swiper"),
        r.params.init && r.init(),
            r
    }
    enable() {
        const t = this;
        t.enabled || (t.enabled = !0,
        t.params.grabCursor && t.setGrabCursor(),
            t.emit("enable"))
    }
    disable() {
        const t = this;
        t.enabled && (t.enabled = !1,
        t.params.grabCursor && t.unsetGrabCursor(),
            t.emit("disable"))
    }
    setProgress(t, n) {
        const i = this;
        t = Math.min(Math.max(t, 0), 1);
        const r = i.minTranslate()
            , a = (i.maxTranslate() - r) * t + r;
        i.translateTo(a, typeof n > "u" ? 0 : n),
            i.updateActiveIndex(),
            i.updateSlidesClasses()
    }
    emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
            return;
        const n = t.el.className.split(" ").filter(i=>i.indexOf("swiper") === 0 || i.indexOf(t.params.containerModifierClass) === 0);
        t.emit("_containerClasses", n.join(" "))
    }
    getSlideClasses(t) {
        const n = this;
        return n.destroyed ? "" : t.className.split(" ").filter(i=>i.indexOf("swiper-slide") === 0 || i.indexOf(n.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
            return;
        const n = [];
        t.slides.each(i=>{
                const r = t.getSlideClasses(i);
                n.push({
                    slideEl: i,
                    classNames: r
                }),
                    t.emit("_slideClass", i, r)
            }
        ),
            t.emit("_slideClasses", n)
    }
    slidesPerViewDynamic(t="current", n=!1) {
        const i = this
            , {params: r, slides: s, slidesGrid: a, slidesSizesGrid: o, size: l, activeIndex: u} = i;
        let c = 1;
        if (r.centeredSlides) {
            let p = s[u].swiperSlideSize, f;
            for (let m = u + 1; m < s.length; m += 1)
                s[m] && !f && (p += s[m].swiperSlideSize,
                    c += 1,
                p > l && (f = !0));
            for (let m = u - 1; m >= 0; m -= 1)
                s[m] && !f && (p += s[m].swiperSlideSize,
                    c += 1,
                p > l && (f = !0))
        } else if (t === "current")
            for (let p = u + 1; p < s.length; p += 1)
                (n ? a[p] + o[p] - a[u] < l : a[p] - a[u] < l) && (c += 1);
        else
            for (let p = u - 1; p >= 0; p -= 1)
                a[u] - a[p] < l && (c += 1);
        return c
    }
    update() {
        const t = this;
        if (!t || t.destroyed)
            return;
        const {snapGrid: n, params: i} = t;
        i.breakpoints && t.setBreakpoint(),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses();
        function r() {
            const a = t.rtlTranslate ? t.translate * -1 : t.translate
                , o = Math.min(Math.max(a, t.maxTranslate()), t.minTranslate());
            t.setTranslate(o),
                t.updateActiveIndex(),
                t.updateSlidesClasses()
        }
        let s;
        t.params.freeMode && t.params.freeMode.enabled ? (r(),
        t.params.autoHeight && t.updateAutoHeight()) : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? s = t.slideTo(t.slides.length - 1, 0, !1, !0) : s = t.slideTo(t.activeIndex, 0, !1, !0),
        s || r()),
        i.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
            t.emit("update")
    }
    changeDirection(t, n=!0) {
        const i = this
            , r = i.params.direction;
        return t || (t = r === "horizontal" ? "vertical" : "horizontal"),
        t === r || t !== "horizontal" && t !== "vertical" || (i.$el.removeClass(`${i.params.containerModifierClass}${r}`).addClass(`${i.params.containerModifierClass}${t}`),
            i.emitContainerClasses(),
            i.params.direction = t,
            i.slides.each(s=>{
                    t === "vertical" ? s.style.width = "" : s.style.height = ""
                }
            ),
            i.emit("changeDirection"),
        n && i.update()),
            i
    }
    changeLanguageDirection(t) {
        const n = this;
        n.rtl && t === "rtl" || !n.rtl && t === "ltr" || (n.rtl = t === "rtl",
            n.rtlTranslate = n.params.direction === "horizontal" && n.rtl,
            n.rtl ? (n.$el.addClass(`${n.params.containerModifierClass}rtl`),
                n.el.dir = "rtl") : (n.$el.removeClass(`${n.params.containerModifierClass}rtl`),
                n.el.dir = "ltr"),
            n.update())
    }
    mount(t) {
        const n = this;
        if (n.mounted)
            return !0;
        const i = _(t || n.params.el);
        if (t = i[0],
            !t)
            return !1;
        t.swiper = n;
        const r = ()=>`.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let a = (()=>{
                if (t && t.shadowRoot && t.shadowRoot.querySelector) {
                    const o = _(t.shadowRoot.querySelector(r()));
                    return o.children = l=>i.children(l),
                        o
                }
                return i.children ? i.children(r()) : _(i).children(r())
            }
        )();
        if (a.length === 0 && n.params.createElements) {
            const l = N().createElement("div");
            a = _(l),
                l.className = n.params.wrapperClass,
                i.append(l),
                i.children(`.${n.params.slideClass}`).each(u=>{
                        a.append(u)
                    }
                )
        }
        return Object.assign(n, {
            $el: i,
            el: t,
            $wrapperEl: a,
            wrapperEl: a[0],
            mounted: !0,
            rtl: t.dir.toLowerCase() === "rtl" || i.css("direction") === "rtl",
            rtlTranslate: n.params.direction === "horizontal" && (t.dir.toLowerCase() === "rtl" || i.css("direction") === "rtl"),
            wrongRTL: a.css("display") === "-webkit-box"
        }),
            !0
    }
    init(t) {
        const n = this;
        return n.initialized || n.mount(t) === !1 || (n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
            n.addClasses(),
        n.params.loop && n.loopCreate(),
            n.updateSize(),
            n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.preloadImages && n.preloadImages(),
            n.params.loop ? n.slideTo(n.params.initialSlide + n.loopedSlides, 0, n.params.runCallbacksOnInit, !1, !0) : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0),
            n.attachEvents(),
            n.initialized = !0,
            n.emit("init"),
            n.emit("afterInit")),
            n
    }
    destroy(t=!0, n=!0) {
        const i = this
            , {params: r, $el: s, $wrapperEl: a, slides: o} = i;
        return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"),
            i.initialized = !1,
            i.detachEvents(),
        r.loop && i.loopDestroy(),
        n && (i.removeClasses(),
            s.removeAttr("style"),
            a.removeAttr("style"),
        o && o.length && o.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach(l=>{
                    i.off(l)
                }
            ),
        t !== !1 && (i.$el[0].swiper = null,
            xo(i)),
            i.destroyed = !0),
            null
    }
    static extendDefaults(t) {
        z(it, t)
    }
    static get extendedDefaults() {
        return it
    }
    static get defaults() {
        return vn
    }
    static installModule(t) {
        F.prototype.__modules__ || (F.prototype.__modules__ = []);
        const n = F.prototype.__modules__;
        typeof t == "function" && n.indexOf(t) < 0 && n.push(t)
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach(n=>F.installModule(n)),
            F) : (F.installModule(t),
            F)
    }
}
Object.keys(nt).forEach(e=>{
        Object.keys(nt[e]).forEach(t=>{
                F.prototype[t] = nt[e][t]
            }
        )
    }
);
F.use([$o, Lo]);
function Vi(e, t, n, i) {
    const r = N();
    return e.params.createElements && Object.keys(i).forEach(s=>{
            if (!n[s] && n.auto === !0) {
                let a = e.$el.children(`.${i[s]}`)[0];
                a || (a = r.createElement("div"),
                    a.className = i[s],
                    e.$el.append(a)),
                    n[s] = a,
                    t[s] = a
            }
        }
    ),
        n
}
function Dl({swiper: e, extendParams: t, on: n, emit: i}) {
    t({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }),
        e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        };
    function r(m) {
        let v;
        return m && (v = _(m),
        e.params.uniqueNavElements && typeof m == "string" && v.length > 1 && e.$el.find(m).length === 1 && (v = e.$el.find(m))),
            v
    }
    function s(m, v) {
        const h = e.params.navigation;
        m && m.length > 0 && (m[v ? "addClass" : "removeClass"](h.disabledClass),
        m[0] && m[0].tagName === "BUTTON" && (m[0].disabled = v),
        e.params.watchOverflow && e.enabled && m[e.isLocked ? "addClass" : "removeClass"](h.lockClass))
    }
    function a() {
        if (e.params.loop)
            return;
        const {$nextEl: m, $prevEl: v} = e.navigation;
        s(v, e.isBeginning && !e.params.rewind),
            s(m, e.isEnd && !e.params.rewind)
    }
    function o(m) {
        m.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(),
            i("navigationPrev"))
    }
    function l(m) {
        m.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(),
            i("navigationNext"))
    }
    function u() {
        const m = e.params.navigation;
        if (e.params.navigation = Vi(e, e.originalParams.navigation, e.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        }),
            !(m.nextEl || m.prevEl))
            return;
        const v = r(m.nextEl)
            , h = r(m.prevEl);
        v && v.length > 0 && v.on("click", l),
        h && h.length > 0 && h.on("click", o),
            Object.assign(e.navigation, {
                $nextEl: v,
                nextEl: v && v[0],
                $prevEl: h,
                prevEl: h && h[0]
            }),
        e.enabled || (v && v.addClass(m.lockClass),
        h && h.addClass(m.lockClass))
    }
    function c() {
        const {$nextEl: m, $prevEl: v} = e.navigation;
        m && m.length && (m.off("click", l),
            m.removeClass(e.params.navigation.disabledClass)),
        v && v.length && (v.off("click", o),
            v.removeClass(e.params.navigation.disabledClass))
    }
    n("init", ()=>{
            e.params.navigation.enabled === !1 ? f() : (u(),
                a())
        }
    ),
        n("toEdge fromEdge lock unlock", ()=>{
                a()
            }
        ),
        n("destroy", ()=>{
                c()
            }
        ),
        n("enable disable", ()=>{
                const {$nextEl: m, $prevEl: v} = e.navigation;
                m && m[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass),
                v && v[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
            }
        ),
        n("click", (m,v)=>{
                const {$nextEl: h, $prevEl: d} = e.navigation
                    , g = v.target;
                if (e.params.navigation.hideOnClick && !_(g).is(d) && !_(g).is(h)) {
                    if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === g || e.pagination.el.contains(g)))
                        return;
                    let x;
                    h ? x = h.hasClass(e.params.navigation.hiddenClass) : d && (x = d.hasClass(e.params.navigation.hiddenClass)),
                        i(x === !0 ? "navigationShow" : "navigationHide"),
                    h && h.toggleClass(e.params.navigation.hiddenClass),
                    d && d.toggleClass(e.params.navigation.hiddenClass)
                }
            }
        );
    const p = ()=>{
            e.$el.removeClass(e.params.navigation.navigationDisabledClass),
                u(),
                a()
        }
        , f = ()=>{
            e.$el.addClass(e.params.navigation.navigationDisabledClass),
                c()
        }
    ;
    Object.assign(e.navigation, {
        enable: p,
        disable: f,
        update: a,
        init: u,
        destroy: c
    })
}
function te(e="") {
    return `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
}
function Fl({swiper: e, extendParams: t, on: n, emit: i}) {
    const r = "swiper-pagination";
    t({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: h=>h,
            formatFractionTotal: h=>h,
            bulletClass: `${r}-bullet`,
            bulletActiveClass: `${r}-bullet-active`,
            modifierClass: `${r}-`,
            currentClass: `${r}-current`,
            totalClass: `${r}-total`,
            hiddenClass: `${r}-hidden`,
            progressbarFillClass: `${r}-progressbar-fill`,
            progressbarOppositeClass: `${r}-progressbar-opposite`,
            clickableClass: `${r}-clickable`,
            lockClass: `${r}-lock`,
            horizontalClass: `${r}-horizontal`,
            verticalClass: `${r}-vertical`,
            paginationDisabledClass: `${r}-disabled`
        }
    }),
        e.pagination = {
            el: null,
            $el: null,
            bullets: []
        };
    let s, a = 0;
    function o() {
        return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0
    }
    function l(h, d) {
        const {bulletActiveClass: g} = e.params.pagination;
        h[d]().addClass(`${g}-${d}`)[d]().addClass(`${g}-${d}-${d}`)
    }
    function u() {
        const h = e.rtl
            , d = e.params.pagination;
        if (o())
            return;
        const g = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
            , x = e.pagination.$el;
        let S;
        const E = e.params.loop ? Math.ceil((g - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? (S = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup),
        S > g - 1 - e.loopedSlides * 2 && (S -= g - e.loopedSlides * 2),
        S > E - 1 && (S -= E),
        S < 0 && e.params.paginationType !== "bullets" && (S = E + S)) : typeof e.snapIndex < "u" ? S = e.snapIndex : S = e.activeIndex || 0,
        d.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const y = e.pagination.bullets;
            let b, T, O;
            if (d.dynamicBullets && (s = y.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                x.css(e.isHorizontal() ? "width" : "height", `${s * (d.dynamicMainBullets + 4)}px`),
            d.dynamicMainBullets > 1 && e.previousIndex !== void 0 && (a += S - (e.previousIndex - e.loopedSlides || 0),
                a > d.dynamicMainBullets - 1 ? a = d.dynamicMainBullets - 1 : a < 0 && (a = 0)),
                b = Math.max(S - a, 0),
                T = b + (Math.min(y.length, d.dynamicMainBullets) - 1),
                O = (T + b) / 2),
                y.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map($=>`${d.bulletActiveClass}${$}`).join(" ")),
            x.length > 1)
                y.each($=>{
                        const C = _($)
                            , w = C.index();
                        w === S && C.addClass(d.bulletActiveClass),
                        d.dynamicBullets && (w >= b && w <= T && C.addClass(`${d.bulletActiveClass}-main`),
                        w === b && l(C, "prev"),
                        w === T && l(C, "next"))
                    }
                );
            else {
                const $ = y.eq(S)
                    , C = $.index();
                if ($.addClass(d.bulletActiveClass),
                    d.dynamicBullets) {
                    const w = y.eq(b)
                        , M = y.eq(T);
                    for (let I = b; I <= T; I += 1)
                        y.eq(I).addClass(`${d.bulletActiveClass}-main`);
                    if (e.params.loop)
                        if (C >= y.length) {
                            for (let I = d.dynamicMainBullets; I >= 0; I -= 1)
                                y.eq(y.length - I).addClass(`${d.bulletActiveClass}-main`);
                            y.eq(y.length - d.dynamicMainBullets - 1).addClass(`${d.bulletActiveClass}-prev`)
                        } else
                            l(w, "prev"),
                                l(M, "next");
                    else
                        l(w, "prev"),
                            l(M, "next")
                }
            }
            if (d.dynamicBullets) {
                const $ = Math.min(y.length, d.dynamicMainBullets + 4)
                    , C = (s * $ - s) / 2 - O * s
                    , w = h ? "right" : "left";
                y.css(e.isHorizontal() ? w : "top", `${C}px`)
            }
        }
        if (d.type === "fraction" && (x.find(te(d.currentClass)).text(d.formatFractionCurrent(S + 1)),
            x.find(te(d.totalClass)).text(d.formatFractionTotal(E))),
        d.type === "progressbar") {
            let y;
            d.progressbarOpposite ? y = e.isHorizontal() ? "vertical" : "horizontal" : y = e.isHorizontal() ? "horizontal" : "vertical";
            const b = (S + 1) / E;
            let T = 1
                , O = 1;
            y === "horizontal" ? T = b : O = b,
                x.find(te(d.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${T}) scaleY(${O})`).transition(e.params.speed)
        }
        d.type === "custom" && d.renderCustom ? (x.html(d.renderCustom(e, S + 1, E)),
            i("paginationRender", x[0])) : i("paginationUpdate", x[0]),
        e.params.watchOverflow && e.enabled && x[e.isLocked ? "addClass" : "removeClass"](d.lockClass)
    }
    function c() {
        const h = e.params.pagination;
        if (o())
            return;
        const d = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
            , g = e.pagination.$el;
        let x = "";
        if (h.type === "bullets") {
            let S = e.params.loop ? Math.ceil((d - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && S > d && (S = d);
            for (let E = 0; E < S; E += 1)
                h.renderBullet ? x += h.renderBullet.call(e, E, h.bulletClass) : x += `<${h.bulletElement} class="${h.bulletClass}"></${h.bulletElement}>`;
            g.html(x),
                e.pagination.bullets = g.find(te(h.bulletClass))
        }
        h.type === "fraction" && (h.renderFraction ? x = h.renderFraction.call(e, h.currentClass, h.totalClass) : x = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`,
            g.html(x)),
        h.type === "progressbar" && (h.renderProgressbar ? x = h.renderProgressbar.call(e, h.progressbarFillClass) : x = `<span class="${h.progressbarFillClass}"></span>`,
            g.html(x)),
        h.type !== "custom" && i("paginationRender", e.pagination.$el[0])
    }
    function p() {
        e.params.pagination = Vi(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination"
        });
        const h = e.params.pagination;
        if (!h.el)
            return;
        let d = _(h.el);
        d.length !== 0 && (e.params.uniqueNavElements && typeof h.el == "string" && d.length > 1 && (d = e.$el.find(h.el),
        d.length > 1 && (d = d.filter(g=>_(g).parents(".swiper")[0] === e.el))),
        h.type === "bullets" && h.clickable && d.addClass(h.clickableClass),
            d.addClass(h.modifierClass + h.type),
            d.addClass(e.isHorizontal() ? h.horizontalClass : h.verticalClass),
        h.type === "bullets" && h.dynamicBullets && (d.addClass(`${h.modifierClass}${h.type}-dynamic`),
            a = 0,
        h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)),
        h.type === "progressbar" && h.progressbarOpposite && d.addClass(h.progressbarOppositeClass),
        h.clickable && d.on("click", te(h.bulletClass), function(x) {
            x.preventDefault();
            let S = _(this).index() * e.params.slidesPerGroup;
            e.params.loop && (S += e.loopedSlides),
                e.slideTo(S)
        }),
            Object.assign(e.pagination, {
                $el: d,
                el: d[0]
            }),
        e.enabled || d.addClass(h.lockClass))
    }
    function f() {
        const h = e.params.pagination;
        if (o())
            return;
        const d = e.pagination.$el;
        d.removeClass(h.hiddenClass),
            d.removeClass(h.modifierClass + h.type),
            d.removeClass(e.isHorizontal() ? h.horizontalClass : h.verticalClass),
        e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(h.bulletActiveClass),
        h.clickable && d.off("click", te(h.bulletClass))
    }
    n("init", ()=>{
            e.params.pagination.enabled === !1 ? v() : (p(),
                c(),
                u())
        }
    ),
        n("activeIndexChange", ()=>{
                (e.params.loop || typeof e.snapIndex > "u") && u()
            }
        ),
        n("snapIndexChange", ()=>{
                e.params.loop || u()
            }
        ),
        n("slidesLengthChange", ()=>{
                e.params.loop && (c(),
                    u())
            }
        ),
        n("snapGridLengthChange", ()=>{
                e.params.loop || (c(),
                    u())
            }
        ),
        n("destroy", ()=>{
                f()
            }
        ),
        n("enable disable", ()=>{
                const {$el: h} = e.pagination;
                h && h[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
            }
        ),
        n("lock unlock", ()=>{
                u()
            }
        ),
        n("click", (h,d)=>{
                const g = d.target
                    , {$el: x} = e.pagination;
                if (e.params.pagination.el && e.params.pagination.hideOnClick && x && x.length > 0 && !_(g).hasClass(e.params.pagination.bulletClass)) {
                    if (e.navigation && (e.navigation.nextEl && g === e.navigation.nextEl || e.navigation.prevEl && g === e.navigation.prevEl))
                        return;
                    const S = x.hasClass(e.params.pagination.hiddenClass);
                    i(S === !0 ? "paginationShow" : "paginationHide"),
                        x.toggleClass(e.params.pagination.hiddenClass)
                }
            }
        );
    const m = ()=>{
            e.$el.removeClass(e.params.pagination.paginationDisabledClass),
            e.pagination.$el && e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass),
                p(),
                c(),
                u()
        }
        , v = ()=>{
            e.$el.addClass(e.params.pagination.paginationDisabledClass),
            e.pagination.$el && e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass),
                f()
        }
    ;
    Object.assign(e.pagination, {
        enable: m,
        disable: v,
        render: c,
        update: u,
        init: p,
        destroy: f
    })
}
function zl({swiper: e, extendParams: t, on: n, emit: i}) {
    let r;
    e.autoplay = {
        running: !1,
        paused: !1
    },
        t({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        });
    function s() {
        if (!e.size) {
            e.autoplay.running = !1,
                e.autoplay.paused = !1;
            return
        }
        const h = e.slides.eq(e.activeIndex);
        let d = e.params.autoplay.delay;
        h.attr("data-swiper-autoplay") && (d = h.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(r),
            r = Ne(()=>{
                    let g;
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                        g = e.slidePrev(e.params.speed, !0, !0),
                        i("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? o() : (g = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                        i("autoplay")) : (g = e.slidePrev(e.params.speed, !0, !0),
                        i("autoplay")) : e.params.loop ? (e.loopFix(),
                        g = e.slideNext(e.params.speed, !0, !0),
                        i("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? o() : (g = e.slideTo(0, e.params.speed, !0, !0),
                        i("autoplay")) : (g = e.slideNext(e.params.speed, !0, !0),
                        i("autoplay")),
                    (e.params.cssMode && e.autoplay.running || g === !1) && s()
                }
                , d)
    }
    function a() {
        return typeof r < "u" || e.autoplay.running ? !1 : (e.autoplay.running = !0,
            i("autoplayStart"),
            s(),
            !0)
    }
    function o() {
        return !e.autoplay.running || typeof r > "u" ? !1 : (r && (clearTimeout(r),
            r = void 0),
            e.autoplay.running = !1,
            i("autoplayStop"),
            !0)
    }
    function l(h) {
        e.autoplay.running && (e.autoplay.paused || (r && clearTimeout(r),
            e.autoplay.paused = !0,
            h === 0 || !e.params.autoplay.waitForTransition ? (e.autoplay.paused = !1,
                s()) : ["transitionend", "webkitTransitionEnd"].forEach(d=>{
                    e.$wrapperEl[0].addEventListener(d, c)
                }
            )))
    }
    function u() {
        const h = N();
        h.visibilityState === "hidden" && e.autoplay.running && l(),
        h.visibilityState === "visible" && e.autoplay.paused && (s(),
            e.autoplay.paused = !1)
    }
    function c(h) {
        !e || e.destroyed || !e.$wrapperEl || h.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(d=>{
                e.$wrapperEl[0].removeEventListener(d, c)
            }
        ),
            e.autoplay.paused = !1,
            e.autoplay.running ? s() : o())
    }
    function p() {
        e.params.autoplay.disableOnInteraction ? o() : (i("autoplayPause"),
            l()),
            ["transitionend", "webkitTransitionEnd"].forEach(h=>{
                    e.$wrapperEl[0].removeEventListener(h, c)
                }
            )
    }
    function f() {
        e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1,
            i("autoplayResume"),
            s())
    }
    function m() {
        e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", p),
            e.$el.on("mouseleave", f))
    }
    function v() {
        e.$el.off("mouseenter", p),
            e.$el.off("mouseleave", f)
    }
    n("init", ()=>{
            e.params.autoplay.enabled && (a(),
                N().addEventListener("visibilitychange", u),
                m())
        }
    ),
        n("beforeTransitionStart", (h,d,g)=>{
                e.autoplay.running && (g || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(d) : o())
            }
        ),
        n("sliderFirstMove", ()=>{
                e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : l())
            }
        ),
        n("touchEnd", ()=>{
                e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && s()
            }
        ),
        n("destroy", ()=>{
                v(),
                e.autoplay.running && o(),
                    N().removeEventListener("visibilitychange", u)
            }
        ),
        Object.assign(e.autoplay, {
            pause: l,
            run: s,
            start: a,
            stop: o
        })
}
G.plugin(La);
G.plugin(Ca);
G.plugin(Pa);
window.getToken = async()=>await fetch("/!/DynamicToken/refresh").then(e=>e.json()).then(e=>e.csrf_token).catch(function(e) {
    this.error = "Something went wrong. Please try again later."
});
F.use([Dl, Fl, zl]);
window.Alpine = G;
window.Swiper = F;
G.plugin(Ys);
G.plugin(Us);
G.plugin(ya);
G.plugin(St);
G.start();
