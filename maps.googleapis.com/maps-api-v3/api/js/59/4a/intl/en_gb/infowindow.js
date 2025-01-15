google.maps.__gjsload__('infowindow', function(_) {
    var qN = function(a) {
            return !!a.infoWindow.get("logAsInternal")
        },
        DSa = function(a, b) {
            if (a.Eg.size === 1) {
                const c = Array.from(a.Eg.values())[0];
                c.jv !== b.jv && (c.set("map", null), a.Eg.delete(c))
            }
            a.Eg.add(b)
        },
        FSa = function(a, b) {
            var c = a.__gm;
            a = c.get("panes");
            c = c.get("innerContainer");
            b = {
                Rl: a,
                Ej: _.Wy.Ej(),
                bx: c,
                shouldFocus: b
            };
            return new ESa(b)
        },
        rN = function(a, b) {
            a.Yg.style.visibility = b ? "" : "hidden";
            b && a.shouldFocus && (a.focus(), a.shouldFocus = !1);
            b ? GSa(a) : a.Pg = !1
        },
        HSa = function(a) {
            a.Mi.setAttribute("aria-labelledby", a.Kg.id)
        },
        ISa = function(a) {
            const b = !!a.get("open");
            var c = a.get("content");
            c = b ? c : null;
            if (c == a.Ig) rN(a, b && a.get("position"));
            else {
                if (a.Ig) {
                    const d = a.Ig.parentNode;
                    d == a.Eg && d.removeChild(a.Ig)
                }
                c && (a.Og = !1, a.Eg.appendChild(c));
                rN(a, b && a.get("position"));
                a.Ig = c;
                sN(a)
            }
        },
        tN = function(a) {
            var b = !!a.get("open"),
                c = a.get("headerContent");
            const d = !!a.get("ariaLabel"),
                e = !a.get("headerDisabled");
            b = b ? c : null;
            a.Mi.style.paddingTop = e ? "0" : "12px";
            b === a.Jg ? a.Hg.style.display = e ? "" : "none" : (a.Jg && (c = a.Jg.parentNode, c === a.Kg && c.removeChild(a.Jg)),
                b && (a.Og = !1, a.Kg.appendChild(b), e && !d && HSa(a)), a.Hg.style.display = e ? "" : "none", a.Jg = b, sN(a))
        },
        sN = function(a) {
            var b = a.getSize();
            if (b) {
                var c = b.fm;
                b = b.minWidth;
                a.Mi.style.maxWidth = _.ns(c.width);
                a.Mi.style.maxHeight = _.ns(c.height);
                a.Mi.style.minWidth = _.ns(b);
                a.Eg.style.maxHeight = _.on.Eg ? _.ns(c.height - 18) : _.ns(c.height - 36);
                uN(a);
                a.Ng.start()
            }
        },
        JSa = function(a) {
            const b = a.get("pixelOffset") || new _.Kl(0, 0);
            var c = new _.Kl(a.Mi.offsetWidth, a.Mi.offsetHeight);
            a = -b.height + c.height + 11 + 60;
            let d = b.height + 60;
            const e = -b.width + c.width / 2 + 60;
            c = b.width + c.width / 2 + 60;
            b.height < 0 && (d -= b.height);
            return {
                top: a,
                bottom: d,
                left: e,
                right: c
            }
        },
        GSa = function(a) {
            !a.Pg && a.get("open") && a.get("visible") && a.get("position") && (_.Sk(a, "visible"), a.Pg = !0)
        },
        uN = function(a) {
            var b = a.get("position");
            if (b && a.get("pixelOffset")) {
                var c = JSa(a);
                const d = b.x - c.left,
                    e = b.y - c.top,
                    f = b.x + c.right;
                c = b.y + c.bottom;
                _.Rs(a.anchor, b);
                b = a.get("zIndex");
                _.Ts(a.Yg, _.Lj(b) ? b : e + 60);
                a.set("pixelBounds", _.Am(d, e, f, c))
            }
        },
        LSa = function(a, b, c) {
            return b instanceof _.nl ? new KSa(a,
                b, c) : new KSa(a, b)
        },
        NSa = function(a) {
            a.Eg && a.ri.push(_.Qk(a.Eg, "pixelposition_changed", () => {
                MSa(a)
            }))
        },
        MSa = function(a) {
            const b = a.model.get("pixelPosition") || a.Eg && a.Eg.get("pixelPosition");
            a.Ig.set("position", b)
        },
        PSa = function(a) {
            a = a.__gm;
            a.get("IW_AUTO_CLOSER") || a.set("IW_AUTO_CLOSER", new OSa);
            return a.get("IW_AUTO_CLOSER")
        },
        OSa = class {
            constructor() {
                this.Eg = new Set
            }
        };
    var ESa = class extends _.Vk {
        constructor(a) {
            super();
            this.Ig = this.Jg = this.Mg = null;
            this.Pg = this.Og = !1;
            this.bx = a.bx;
            this.shouldFocus = a.shouldFocus;
            this.Yg = document.createElement("div");
            this.Yg.style.cursor = "default";
            this.Yg.style.position = "absolute";
            this.Yg.style.left = this.Yg.style.top = "0";
            a.Rl.floatPane.appendChild(this.Yg);
            this.anchor = _.Ss("div", this.Yg);
            this.Lg = _.Ss("div", this.anchor);
            this.Mi = _.Ss("div", this.Lg);
            this.Mi.setAttribute("role", "dialog");
            this.Mi.tabIndex = -1;
            this.Hg = _.Ss("div", this.Mi);
            this.Kg =
                _.Ss("div", this.Hg);
            this.Sg = _.Ss("div", this.Lg);
            this.Eg = _.Ss("div", this.Mi);
            _.aJa(this.Yg);
            _.Ms(this.Mi, "gm-style-iw");
            _.Ms(this.anchor, "gm-style-iw-a");
            _.Ms(this.Lg, "gm-style-iw-t");
            _.Ms(this.Sg, "gm-style-iw-tc");
            _.Ms(this.Mi, "gm-style-iw-c");
            _.Ms(this.Hg, "gm-style-iw-chr");
            _.Ms(this.Kg, "gm-style-iw-ch");
            _.Ms(this.Eg, "gm-style-iw-d");
            this.Kg.setAttribute("id", _.ro());
            _.on.Eg && !_.on.Mg && (this.Mi.style.paddingInlineEnd = "0", this.Mi.style.paddingBottom = "0", this.Eg.style.overflow = "scroll");
            rN(this, !1);
            _.Mk(this.Yg, "mousedown", _.Ek);
            _.Mk(this.Yg, "mouseup", _.Ek);
            _.Mk(this.Yg, "mousemove", _.Ek);
            _.Mk(this.Yg, "pointerdown", _.Ek);
            _.Mk(this.Yg, "pointerup", _.Ek);
            _.Mk(this.Yg, "pointermove", _.Ek);
            _.Mk(this.Yg, "dblclick", _.Ek);
            _.Mk(this.Yg, "click", _.Ek);
            _.Mk(this.Yg, "touchstart", _.Ek);
            _.Mk(this.Yg, "touchend", _.Ek);
            _.Mk(this.Yg, "touchmove", _.Ek);
            _.ys(this.Yg, "contextmenu", this, this.Rg);
            _.ys(this.Yg, "wheel", this, _.Ek);
            _.ys(this.Yg, "mousewheel", this, _.Bk);
            _.ys(this.Yg, "MozMousePixelScroll", this, _.Bk);
            this.Fg =
                new _.xy({
                    xq: new _.Il(12, 12),
                    Or: new _.Kl(24, 24),
                    offset: new _.Il(-6, -6),
                    BB: !0,
                    ownerElement: this.Hg
                });
            this.Hg.appendChild(this.Fg.element);
            _.Mk(this.Fg.element, "click", b => {
                _.Ek(b);
                _.Sk(this, "closeclick");
                this.set("open", !1)
            });
            this.Ng = new _.Zm(() => {
                !this.Og && this.get("content") && this.get("visible") && (_.Sk(this, "domready"), this.Og = !0)
            }, 0);
            this.Qg = _.Mk(this.Yg, "keydown", b => {
                b.key !== "Escape" && b.key !== "Esc" || !this.Mi.contains(document.activeElement) || (b.stopPropagation(), _.Sk(this, "closeclick"), this.set("open", !1))
            })
        }
        ariaLabel_changed() {
            const a = this.get("ariaLabel");
            a ? this.Mi.setAttribute("aria-label", a) : (this.Mi.removeAttribute("aria-label"), this.get("headerDisabled") || HSa(this))
        }
        open_changed() {
            ISa(this);
            tN(this)
        }
        headerContent_changed() {
            tN(this)
        }
        headerDisabled_changed() {
            tN(this)
        }
        content_changed() {
            ISa(this)
        }
        pendingFocus_changed() {
            this.get("pendingFocus") && (this.get("open") && this.get("visible") && this.get("position") ? _.rn(this.Mi, !0) : console.warn("Setting focus on InfoWindow was ignored. This is most likely due to InfoWindow not being visible yet."),
                this.set("pendingFocus", !1))
        }
        dispose() {
            setTimeout(() => {
                document.activeElement && document.activeElement !== document.body || (this.Mg && this.Mg !== document.body ? _.rn(this.Mg, !0) || _.rn(this.bx, !0) : _.rn(this.bx, !0))
            });
            this.Qg && _.Ik(this.Qg);
            this.Yg.parentNode.removeChild(this.Yg);
            this.Ng.stop();
            this.Ng.dispose()
        }
        getSize() {
            var a = this.get("layoutPixelBounds"),
                b = this.get("pixelOffset");
            const c = this.get("maxWidth") || 648,
                d = this.get("minWidth") || 0;
            if (!b) return null;
            a ? (b = a.maxY - a.minY - (11 + -b.height), a = a.maxX - a.minX -
                6, a >= 240 && (a -= 120), b >= 240 && (b -= 120)) : (a = 648, b = 654);
            a = Math.min(a, c);
            a = Math.max(d, a);
            a = Math.max(0, a);
            b = Math.max(0, b);
            return {
                fm: new _.Kl(a, b),
                minWidth: d
            }
        }
        pixelOffset_changed() {
            const a = this.get("pixelOffset") || new _.Kl(0, 0);
            this.Lg.style.right = _.ns(-a.width);
            this.Lg.style.bottom = _.ns(-a.height + 11);
            sN(this)
        }
        layoutPixelBounds_changed() {
            sN(this)
        }
        position_changed() {
            this.get("position") ? (uN(this), rN(this, !!this.get("open"))) : rN(this, !1)
        }
        zIndex_changed() {
            uN(this)
        }
        visible_changed() {
            this.Yg.style.display = this.get("visible") ?
                "" : "none";
            this.Ng.start();
            if (this.get("visible")) {
                const a = this.Fg.element.style.display;
                this.Fg.element.style.display = "none";
                this.Fg.element.getBoundingClientRect();
                this.Fg.element.style.display = a;
                GSa(this)
            } else this.Pg = !1
        }
        Rg(a) {
            let b = !1;
            const c = this.get("content");
            let d = a.target;
            for (; !b && d;) b = d == c, d = d.parentNode;
            b ? _.Bk(a) : _.Dk(a)
        }
        focus() {
            this.Mg = document.activeElement;
            let a;
            _.on.Ng && (a = this.Eg.getBoundingClientRect());
            if (this.get("disableAutoPan")) _.rn(this.Mi, !0);
            else {
                var b = _.Ys(this.Eg);
                if (b.length) {
                    b =
                        b[0];
                    a = a || this.Eg.getBoundingClientRect();
                    var c = b.getBoundingClientRect();
                    _.rn(c.bottom <= a.bottom && c.right <= a.right ? b : this.Mi, !0)
                } else _.rn(this.Fg.element, !0)
            }
        }
    };
    var KSa = class {
        constructor(a, b, c) {
            this.model = a;
            this.isOpen = !0;
            this.Eg = this.Hg = this.ah = null;
            this.ri = [];
            var d = a.get("shouldFocus");
            this.Ig = FSa(b, d);
            const e = b.__gm;
            (d = b instanceof _.nl) && c ? c.then(h => {
                this.isOpen && (this.ah = h, this.Eg = new _.FK(k => {
                    this.Hg = new _.ry(b, h, k, () => {});
                    h.Ii(this.Hg);
                    return this.Hg
                }), this.Eg.bindTo("latLngPosition", a, "position"), NSa(this))
            }) : (this.Eg = new _.FK, this.Eg.bindTo("latLngPosition", a, "position"), this.Eg.bindTo("center", e, "projectionCenterQ"), this.Eg.bindTo("zoom", e), this.Eg.bindTo("offset",
                e), this.Eg.bindTo("projection", b), this.Eg.bindTo("focus", b, "position"), NSa(this));
            this.Jg = d ? qN(a) ? "Ia" : "Id" : null;
            this.Kg = d ? qN(a) ? 148284 : 148285 : null;
            const f = new _.gK(["scale"], "visible", h => h == null || h >= .3);
            this.Eg && f.bindTo("scale", this.Eg);
            const g = this.Ig;
            g.set("logAsInternal", qN(a));
            g.bindTo("ariaLabel", a);
            g.bindTo("zIndex", a);
            g.bindTo("layoutPixelBounds", e, "pixelBounds");
            g.bindTo("disableAutoPan", a);
            g.bindTo("pendingFocus", a);
            g.bindTo("maxWidth", a);
            g.bindTo("minWidth", a);
            g.bindTo("content", a);
            g.bindTo("headerContent",
                a);
            g.bindTo("headerDisabled", a);
            g.bindTo("pixelOffset", a);
            g.bindTo("visible", f);
            this.Fg = new _.Zm(() => {
                if (b instanceof _.nl)
                    if (this.ah) {
                        var h = a.get("position");
                        h && (0, _.doa.DE)(b, this.ah, new _.tl(h), JSa(g))
                    } else c.then(() => {
                        this.Fg.start()
                    });
                else(h = g.get("pixelBounds")) ? _.Sk(e, "pantobounds", h) : this.Fg.start()
            }, 150);
            if (d) {
                let h = null;
                this.ri.push(_.Qk(a, "position_changed", () => {
                    const k = a.get("position");
                    !k || a.get("disableAutoPan") || k.equals(h) || (this.Fg.start(), h = k)
                }))
            } else a.get("disableAutoPan") || this.Fg.start();
            g.set("open", !0);
            this.ri.push(_.Gk(g, "domready", () => {
                a.trigger("domready")
            }));
            this.ri.push(_.Gk(g, "visible", () => {
                a.trigger("visible")
            }));
            this.ri.push(_.Gk(g, "closeclick", () => {
                a.close();
                a.trigger("closeclick")
            }));
            this.ri.push(_.Qk(a, "pixelposition_changed", () => {
                MSa(this)
            }));
            this.Jg && _.Cl(b, this.Jg);
            this.Kg && _.M(b, this.Kg)
        }
        close() {
            if (this.isOpen) {
                this.isOpen = !1;
                this.model.trigger("close");
                for (var a of this.ri) _.Ik(a);
                this.ri.length = 0;
                this.Fg.stop();
                this.Fg.dispose();
                this.ah && this.Hg && this.ah.vl(this.Hg);
                a = this.Ig;
                a.unbindAll();
                a.set("open", !1);
                a.dispose();
                this.Eg && this.Eg.unbindAll()
            }
        }
    };
    _.xj("infowindow", {
        JG: function(a) {
            let b = null;
            _.Qk(a, "map_changed", function d() {
                const e = a.get("map");
                b && (b.DC.Eg.delete(a), b.zK.close(), b = null);
                if (e) {
                    const f = e.__gm;
                    f.get("panes") ? f.get("innerContainer") ? (b = {
                        zK: LSa(a, e, e instanceof _.nl ? f.Fg.then(({
                            ah: g
                        }) => g) : void 0),
                        DC: PSa(e)
                    }, DSa(b.DC, a)) : _.Pk(f, "innercontainer_changed", d) : _.Pk(f, "panes_changed", d)
                }
            })
        }
    });
});