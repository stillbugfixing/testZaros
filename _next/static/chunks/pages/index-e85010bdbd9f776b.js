(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    19494: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(83862);
        },
      ]);
    },
    78775: function (n, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/Edit.373c08d5.png",
        height: 16,
        width: 16,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEX///////////////////////////////////8HBRbfAAAACXRSTlMBQTwWc1tmjivc/IqaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nCWMyQkAMAzDZOfcf+IS6pdAwpQl24WACHSw0xixmYkx033KTAa/uYmy76AeFLkAjPS4c5gAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    45130: function (n, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/down.fc1d63fd.png",
        height: 48,
        width: 48,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEVMaXFX/+pa//Ja//Fa//NKN9N+AAAABXRSTlMAD2RIflrL7C0AAAAJcEhZcwAAITgAACE4AUWWMWAAAAAcSURBVHicY2DAAhjBiIGBgZmJmQUixMQCEcEFAANpABbFmm7vAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    88358: function (n, e) {
      "use strict";
      e.Z = {
        src: "/_next/static/media/verified.8a784730.webp",
        height: 36,
        width: 36,
        blurDataURL:
          "data:image/webp;base64,UklGRqoAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDMAAAABN6CQbQQoQznsc/00IiKeCw9qIsltTnKoBUFk7DoRiPxZmENE/3Oq1QxNwPkULMF64gUAVlA4IFAAAAAwAgCdASoIAAgAAkA4JagCdLoAEIeTgGMOQAD+9SRiFJAGzO9VG/udnwwAS7LrDrlYRQU9psKTTN9ci3xPF26rf/WWhGCP/+ej/89H+cAAAA==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    52523: function (n, e, t) {
      "use strict";
      t.d(e, {
        h: function () {
          return a;
        },
      });
      var r = t(67294),
        i = t(90994),
        o = t(95417);
      let a = () => {
        let { perpsEngineContract: n, accountIdsStates: e } = (0, i.O)(),
          [t, a] = (0, r.useState)(),
          [l, s] = (0, r.useState)(),
          [d, c] = (0, r.useState)(),
          [u, f] = (0, r.useState)(),
          [m, p] = (0, r.useState)(),
          g = async () => {
            try {
              if (!e.accountIdSelected) {
                a(void 0), s(void 0), c(void 0), f(void 0), p(void 0);
                return;
              }
              let t = await (null == n
                ? void 0
                : n.getAccountMarginBreakdown(e.accountIdSelected));
              if (t) {
                let n = Number(t[0]) / 1e18,
                  e = Number(t[1]) / 1e18,
                  r = Number(t[2]) / 1e18,
                  i = Number(t[3]) / 1e18;
                return (
                  a(n),
                  s((0, o.T5)(n, 2)),
                  c((0, o.T5)(i, 2)),
                  f(e),
                  p(r),
                  {
                    marginBalance: n,
                    marginBalanceFormatted: (0, o.T5)(n, 2),
                    availableBalance: i,
                    availableMarginFormatted: (0, o.T5)(i, 2),
                    initialMargin: e,
                    maintenanceMargin: r,
                  }
                );
              }
            } catch (n) {
              console.log("Error getAccountMarginInformations", n);
            }
          };
        return (
          (0, r.useEffect)(() => {
            null == g || g();
          }, [e.accountIdSelected]),
          {
            marginBalance: t,
            marginBalanceFormatted: l,
            availableMargin: d,
            initialMargin: u,
            maintenanceMargin: m,
            callAccountMarginBreakdown: g,
          }
        );
      };
    },
    63060: function (n, e, t) {
      "use strict";
      t.d(e, {
        x: function () {
          return c;
        },
      });
      var r = t(55850),
        i = t(77985),
        o = t(4480),
        a = t(31909),
        l = t(80533),
        s = t(90994),
        d = t(65328);
      let c = () => {
        var n;
        let [e, t] = (0, o.FV)(a.X),
          { account: c } = (0, i.useWeb3React)(),
          { accountIdsStates: u } = (0, s.O)(),
          { loading: f } = (0, r.a)(d.Nl, {
            variables: {
              accountAddress: c,
              accountId:
                null === (n = u.accountIdSelected) || void 0 === n
                  ? void 0
                  : n.toString(),
            },
            skip: !u.accountIdSelected,
            onCompleted: (n) => {
              let e = (0, l.i)({
                orders: null == n ? void 0 : n.logCreateMarketOrders,
              }).sort((n, e) => (new Date(n.time) < new Date(e.time) ? 1 : -1));
              t(e);
            },
          });
        return { ordersHistory: e, loading: f };
      };
    },
    81025: function (n, e, t) {
      "use strict";
      t.d(e, {
        d: function () {
          return p;
        },
      });
      var r = t(77985),
        i = t(85051);
      BigInt(
        "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
      ),
        BigInt("1000000000000000000");
      let o = BigInt(
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      );
      BigInt(
        "0x8000000000000000000000000000000000000000000000000000000000000000"
      ),
        BigInt(-1),
        BigInt(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
      var a = t(67294),
        l = t(4480),
        s = t(92733),
        d = t(90994),
        c = t(64173),
        u = t(74653),
        f = t(45610),
        m = t(95417);
      let p = () => {
        let { signer: n, account: e } = (0, d.O)(),
          { provider: t } = (0, r.useWeb3React)(),
          [p, g] = (0, a.useState)(""),
          [h, x] = (0, a.useState)(""),
          y = (0, l.Zl)(s.D),
          b = async (t) => {
            let { tokenContract: r, applicationContract: o } = t;
            try {
              if (n) {
                let t = new i.CH(r, f.Y, n),
                  a = Number(await t.decimals()),
                  l = await t.allowance(e, o);
                return Number(l) / 10 ** a;
              }
            } catch (n) {
              console.log('Error "verifyTokenAllowance"', n);
            }
            return 0;
          },
          A = async (n) => {
            let {
              tokenContract: e,
              amount: t,
              spender: r = u.cQ,
              callApproveMethod: i = !0,
            } = n;
            try {
              g("loading");
              let n = await b({ tokenContract: e, applicationContract: r });
              if (n < t || 0 === n) {
                let n;
                if (
                  (g("waiting_approve"),
                  i &&
                    (n = await w({ tokenContract: e, applicationContract: r })),
                  !n)
                )
                  return g("not_allowed"), !1;
              }
              return g("allowed"), !0;
            } catch (n) {}
          },
          w = async (e) => {
            let { tokenContract: r, applicationContract: a } = e;
            try {
              if (n) {
                let e = new i.CH(r, f.Y, n),
                  l = await e.approve(a, BigInt(o.toString()));
                g("waiting_transaction");
                let s = await (null == t
                  ? void 0
                  : t.waitForTransaction((null == l ? void 0 : l.hash) || ""));
                return (null == s ? void 0 : s.status) === 1;
              }
            } catch (n) {
              console.log('Error "requestApprovalToTransactToken"', n);
            }
            return !1;
          },
          v = async (t) => {
            let { tokenContract: r } = t;
            try {
              if (n && e) {
                x(void 0);
                let t = new i.CH(r, f.Y, n),
                  o = Number(await t.balanceOf(e)),
                  a = Number(await t.decimals()),
                  l = (0, c.VZ)(r) || 2;
                if (o > 0) {
                  let n = (0, m.T5)(o / 10 ** a, l);
                  return x(n), n;
                }
                x("0");
              }
            } catch (n) {
              x(void 0);
            }
          },
          C = async (n) => {
            let e,
              {
                percentage: t,
                setTokenBalanceValue: r,
                hasFixedValue: i,
                hasSize: o,
                currentCoinPrice: a,
                amountBalance: l,
                onChangeValue: s,
                multiplier: d = 1,
                orderFee: c = 0,
                settlementFee: u = 0,
              } = n,
              f = Number((0, m.Bb)(l)) * Number(t) * d,
              p = f / (1 + c) - u;
            o && void 0 !== a
              ? ((e = (0, m.Bw)((Number(p) / a).toFixed(6).toString(), null)),
                y((n) => ({ ...n, sizeValue: e })),
                null == s || s({ target: { value: e } }))
              : !o && s && s({ target: { value: Number(p) } }),
              r(Number(p));
          };
        return {
          userAllowedAndApprove: p,
          verifyIfHasPermission: A,
          getTokenBalance: v,
          handlePercentage: C,
          tokenBalance: h,
        };
      };
    },
    92733: function (n, e, t) {
      "use strict";
      t.d(e, {
        D: function () {
          return i;
        },
      });
      var r = t(4480);
      let i = (0, r.cn)({
        key: "tradeConsoleAtom",
        default: {
          orderType: "MARKET",
          mode: "Long",
          shouldOpenModal: !1,
          leverage: 2,
          value: "",
          sizeValue: "",
          orderBySize: !0,
          orderByValue: !1,
          initialMargin: void 0,
          maintenanceMargin: void 0,
          marginBalanceFormatted: void 0,
          availableBalance: void 0,
          availableBalanceFormatted: void 0,
          checkTPSL: !1,
          isHidden: !1,
          marginBalance: 0,
          maintenanceMarginRate: 0.01,
          maxLeverage: 0,
          settlementFee: 0,
          estimatedGasFee: 0,
          orderFeePercentage: 0,
          limitPrice: 0,
          tpPrice: 0,
          slPrice: 0,
        },
      });
    },
    56993: function (n, e, t) {
      "use strict";
      t.d(e, {
        x: function () {
          return o;
        },
      });
      var r = t(4480),
        i = t(93206);
      let o = (0, r.cn)({ key: "selected-interval", default: i.PS });
    },
    45610: function (n, e, t) {
      "use strict";
      t.d(e, {
        Y: function () {
          return r;
        },
      });
      let r = [
        "function name() public view returns (string)",
        "function symbol() public view returns (string)",
        "function decimals() public view returns (uint8)",
        "function totalSupply() public view returns (uint256)",
        "function balanceOf(address _owner) public view returns (uint256 balance)",
        "function transfer(address _to, uint256 _value) public returns (bool success)",
        "function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)",
        "function approve(address _spender, uint256 _value) public returns (bool success)",
        "function allowance(address _owner, address _spender) public view returns (uint256 remaining)",
      ];
    },
    65323: function (n, e, t) {
      "use strict";
      t.d(e, {
        $: function () {
          return i;
        },
        z: function () {
          return r;
        },
      });
      let r = { 1: "Eth", 2: "Link" },
        i = ["1", "2"];
    },
    83862: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          __N_SSP: function () {
            return rn;
          },
          default: function () {
            return re;
          },
        });
      var r = t(85893),
        i = t(67294),
        o = t(4480),
        a = t(40797),
        l = t(56993),
        s = t(64173),
        d = t(95417);
      let c = (n, e) => {
        let [t, r] = (0, o.FV)(a.Y4),
          c = (0, o.Zl)(a.xY),
          u = (0, o.Zl)(l.x);
        return (
          (0, i.useEffect)(() => {
            if (n) {
              let t = (0, s.JB)(n);
              (null == t ? void 0 : t.marketId) &&
                (c((0, d.To)(t)), r(t.marketId), u(e));
            } else c(a.wp), r(3);
          }, [n]),
          Boolean(t)
        );
      };
      var u = t(5152),
        f = t.n(u);
      let m = (0, o.cn)({
          key: "custom-layout-trade-atom",
          default: { positions: !0, consoleTrade: !0 },
        }),
        p = () => {
          let [n, e] = (0, o.FV)(m);
          return [n, e];
        };
      var g = t(63060),
        h = t(25675),
        x = t.n(h),
        y = t(91590),
        b = t(38987),
        A = t(79162),
        w = {
          src: "/_next/static/media/Down.55799f19.webp",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/webp;base64,UklGRpgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSCsAAAABP6CmbSQ2eV+31wP5tUZEgML7s2Aoso2dEcZVGQF00P9Ghoj+pxtFL5N+AFZQOCBGAAAA0AEAnQEqCAAIAAJAOCUG2CcABFACdAAA/nDQnCrNt6KH07tyMpvpr4TEVpkrKnu6s5n8449JChYw34RP/EB8eEv+QAAAAA==",
          blurWidth: 8,
          blurHeight: 8,
        },
        v = t(6280),
        C = t(7297),
        j = t(15437),
        I = t(36055);
      function P() {
        let n = (0, C.Z)([
          "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.3rem 0.25rem 0rem 0.25rem;\n\n  margin-bottom: 1rem;\n\n  .tabs {\n    display: flex;\n    align-items: center;\n    gap: 1.5rem;\n  }\n\n  div:last-child {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n\n    img {\n      cursor: pointer;\n    }\n  }\n",
        ]);
        return (
          (P = function () {
            return n;
          }),
          n
        );
      }
      function k() {
        let n = (0, C.Z)(["\n  opacity: 0.5;\n  cursor: not-allowed;\n"]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      function B() {
        let n = (0, C.Z)([
          "\n  position: relative;\n  padding: 0.125rem 0.5rem;\n  height: 1.375rem;\n  list-style: none;\n  font-family: ",
          ";\n  font-weight: 700;\n  font-size: 0.75rem;\n  cursor: pointer;\n\n  ",
          ";\n\n  p {\n    transition: opacity 0.2s;\n    font-family: ",
          ";\n    font-weight: 700;\n    font-size: 0.875rem;\n    color: var(--secondary);\n    opacity: ",
          ";\n    border-bottom: ",
          ";\n\n    transition: all 0.2s ease;\n\n    &:hover {\n      opacity: 1;\n    }\n  }\n",
        ]);
        return (
          (B = function () {
            return n;
          }),
          n
        );
      }
      function T() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  position: relative;\n\n  ",
          "\n\n  img {\n    transform: rotate(",
          ");\n    transition: all 0.2s;\n\n    &:last-child {\n      margin-top: -1.5rem;\n    }\n  }\n",
        ]);
        return (
          (T = function () {
            return n;
          }),
          n
        );
      }
      let _ = j.ZP.div.withConfig({
          displayName: "InfosTrade.styles__Tabs",
          componentId: "sc-9a84519c-0",
        })(P()),
        Z = (0, j.iv)(k()),
        S = j.ZP.li.withConfig({
          displayName: "InfosTrade.styles__Tab",
          componentId: "sc-9a84519c-1",
        })(
          B(),
          I.i,
          (n) => {
            let { disabled: e } = n;
            return e ? Z : null;
          },
          I.i,
          (n) => {
            let { $active: e } = n;
            return e ? "1" : "0.5";
          },
          (n) => {
            let { $active: e } = n;
            return e ? "2px solid var(--secondary)" : "0";
          }
        ),
        N = j.ZP.div.withConfig({
          displayName: "InfosTrade.styles__Expand",
          componentId: "sc-9a84519c-2",
        })(
          T(),
          (n) => {
            let { $expanded: e, theme: t } = n;
            return e
              ? null
              : "\n        width: 4rem;\n        border-radius: 0.25rem;\n        background: "
                  .concat(
                    t.colors.background["01"],
                    ";\n        margin-top: -0.3rem;\n\n        &::before {\n          content: '';\n          z-index: -1;\n          position: absolute;\n          inset: 0;\n          border-radius: 0.25rem;\n          padding: 0.08rem;\n          background: linear-gradient(\n            230deg,\n            "
                  )
                  .concat(t.colors.secondary["900"], " 50%,\n            ")
                  .concat(
                    t.colors.secondary["200"],
                    " 100.08%\n          );\n          -webkit-mask: linear-gradient("
                  )
                  .concat(
                    t.colors.neutral.white,
                    " 0 0) content-box,\n            linear-gradient("
                  )
                  .concat(
                    t.colors.neutral.white,
                    " 0 0);\n          -webkit-mask-composite: xor;\n          mask-composite: exclude;\n        }\n  "
                  );
          },
          (n) => {
            let { $expanded: e } = n;
            return e ? null : "180deg";
          }
        ),
        z = { Tabs: _, Tab: S, Expand: N };
      var M = t(86422),
        L = t(15177),
        D = t(70139),
        F = t(94452),
        R = t(31909);
      let E = () => {
        let n = (0, o.sJ)(R.X),
          e = (e) => {
            let t = e.size,
              r = n.filter((n) => parseInt(n.marketId) === e.market),
              i = [],
              o = 0;
            if (
              (r.forEach((n) => {
                if (n.sizeDelta === t) {
                  let e = parseFloat(
                    n.filledPrice.replace("$", "").replace(",", "")
                  );
                  return e;
                }
                o !== t &&
                  ((o = parseFloat((n.sizeDelta + o).toFixed(7))), i.push(n));
              }),
              o === t)
            ) {
              let n = 0,
                e = [],
                r = 0;
              return (
                i.reverse().forEach((i) => {
                  if (n === t) return;
                  n = parseFloat((i.sizeDelta + n).toFixed(7));
                  let o = parseFloat(i.filledPrice.replace(/[,$]/g, ""));
                  0 !== n &&
                    (e[0] || (r = o),
                    e.push(i),
                    Math.abs(n - i.sizeDelta) < Math.abs(i.sizeDelta) &&
                      (r = o),
                    Math.abs(n - i.sizeDelta) > Math.abs(i.sizeDelta) &&
                      0 !== i.sizeDelta &&
                      ((e) => {
                        let t = n / e,
                          i = r / (1 - t);
                        r = t * o + i;
                      })(i.sizeDelta));
                }),
                r
              );
            }
          };
        return { getEntryPrice: e };
      };
      var U = t(77935);
      let V = (n) => {
        var e, t;
        let { positions: r, market: i } = n;
        return {
          entryPrice: (0, U.v)({ value: Number(r[4]) }),
          market: i,
          size: (0, U.v)({ value: Number(r[0]) }),
          initialMargin: (0, U.v)({ value: Number(r[2]) }),
          notionalValue: (0, U.v)({ value: Number(r[1]) }),
          maintenanceMargin: (0, U.v)({ value: Number(r[3]) }),
          accruedFunding:
            ((t = null === (e = r[5]) || void 0 === e ? void 0 : e.toString()),
            (0, d.n9)(Number(t) / 1e18)),
          unrealizedPnl: (0, U.v)({ value: Number(r[6]) }),
          closePosition: Number(r[0]),
        };
      };
      var Q = t(90994),
        H = t(6314);
      let $ = () => {
        let [n, e] = (0, i.useState)(!0),
          [t, r] = (0, o.FV)(b.x),
          {
            perpsEngineContract: a,
            accountIdsStates: { accountIdSelected: l },
          } = (0, Q.O)(),
          s = (0, i.useCallback)(async () => {
            try {
              if (void 0 === l) {
                r([]);
                return;
              }
              e(!0), r([]);
              let n = H.U.map((n) => {
                  let { marketId: e } = n;
                  return { marketId: e };
                }).map(async (n) => {
                  let { marketId: e } = n;
                  try {
                    let n = await (null == a
                      ? void 0
                      : a.getPositionState(l, e));
                    return V({ positions: n, market: e });
                  } catch (n) {
                    return { size: 0 };
                  }
                }),
                t = (await Promise.all(n)).filter(
                  (n) => (null == n ? void 0 : n.size) !== 0
                );
              r(t), e(!1);
              return;
            } catch (n) {
              e(!1);
              return;
            }
          }, [l]);
        return (
          (0, i.useEffect)(() => {
            l && s();
          }, [l]),
          (0, i.useEffect)(() => {
            l || e(!1);
          }, [l]),
          { positions: t, getPositions: s, isLoading: n }
        );
      };
      var O = t(40767),
        J = t(27452),
        W = t(78775),
        G = {
          src: "/_next/static/media/share-position.c44cc346.webp",
          height: 28,
          width: 28,
          blurDataURL:
            "data:image/webp;base64,UklGRoQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDsAAAABYFTbtpKz/h//BB+3IiySuDSAkVPEgj5CRMQEAARjgFztCUlafFNJslydNoheGSDJ8ntukbs9fqLRBwBWUDggIgAAAHABAJ0BKggACAACQDglpAAB2yIAAPdJQA3Jm18BlRbLAAA=",
          blurWidth: 8,
          blurHeight: 8,
        },
        Y = t(71357),
        X = t(50578),
        K = t(74653);
      let q = function () {
          let n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "0",
            e = arguments.length > 1 ? arguments[1] : void 0;
          if (!n) return 0;
          {
            let t = e * parseFloat(n.replace(/,/g, ""));
            return t;
          }
        },
        nn = function () {
          let n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "0",
            e = arguments.length > 1 ? arguments[1] : void 0;
          if (!n) return 0;
          {
            let t = parseFloat(n.replace(/,/g, "")) / e;
            return t;
          }
        },
        ne = (n, e, t) => {
          var r;
          return n
            ? (parseFloat(
                null == n
                  ? void 0
                  : null === (r = n.replace) || void 0 === r
                  ? void 0
                  : r.call(n, /,/g, "")
              ) *
                e) /
                t
            : 0;
        },
        nt = (n) => (n ? parseFloat(n.replace(/,/g, "")) : 0),
        nr = (n, e, t) =>
          "Long" === n ? Math.abs(e - e / t) : Math.abs(e + e / t),
        ni = (n, e, t) => {
          let r = Boolean("." === n || 0 === Number(n));
          return {
            valueBySize: r ? 0 : q(n, e),
            positionSize: r ? 0 : nn(n, e),
            costValueBySize: r ? 0 : ne(n, e, t),
            costValueByValue: r ? 0 : nt(n),
          };
        },
        no = (n, e, t) => {
          let r = (r) => {
            let i = r.target.getBoundingClientRect(),
              o = i.left + i.width / 2,
              a = i.top + i.height / 2,
              l = Math.atan2(r.clientY - a, r.clientX - o),
              c = l * (180 / Math.PI) + 180;
            c >= 145 && c <= 300
              ? e((e) =>
                  (0, d.Bw)((e ? parseFloat(e) - 1 : n).toFixed((0, s.IL)(t)))
                )
              : e((e) =>
                  (0, d.Bw)((e ? parseFloat(e) + 1 : n).toFixed((0, s.IL)(t)))
                );
          };
          return r;
        },
        na = () => {
          try {
            if (!K.C6 || !K.ab) return !0;
            let n = new Date(),
              e = new Date(K.ab);
            if (n >= e) return !0;
            return !1;
          } catch (n) {
            return !0;
          }
        };
      function nl(n) {
        return n ? parseFloat(n.replace(/,/g, "")) : NaN;
      }
      var ns = t(65323);
      function nd() {
        let n = (0, C.Z)([
          "\n  position: relative;\n  overflow: hidden auto;\n  height: 100%;\n\n  table {\n    width: calc(100% - 0.2rem);\n    margin: 0 auto;\n  }\n\n  thead {\n    position: sticky;\n    top: 0.5rem;\n    z-index: 50;\n    background: ",
          ";\n    transition: 0;\n\n    td {\n      background-color: ",
          ";\n    }\n\n    &::before {\n      height: 0.0625rem;\n      background: ",
          ";\n      box-shadow: none;\n      width: 98.9%;\n      margin: 0 0 0 0.75rem;\n      transition: all 0.2s;\n\n      @media (min-width: 3000px) {\n        margin: 1rem 0 0 0.75rem;\n      }\n    }\n\n    &::after {\n      width: calc(100% + 3rem);\n      height: 4.0625rem;\n      z-index: -1;\n      top: -1.6rem;\n      left: 0.5rem;\n      background: ",
          ";\n      position: absolute;\n      content: '';\n      transition: all 0.2s;\n    }\n  }\n",
        ]);
        return (
          (nd = function () {
            return n;
          }),
          n
        );
      }
      function nc() {
        let n = (0, C.Z)([
          "\n  position: relative;\n  font-family: ",
          ";\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: ",
          ";\n\n  > small {\n    display: none;\n  }\n\n  &:hover {\n    cursor: pointer;\n    > small {\n      display: flex;\n    }\n  }\n\n  &:first-child {\n    position: relative;\n    visibility: hidden;\n    width: 5.75rem;\n\n    &::before {\n      content: 'Market';\n      visibility: visible;\n      position: absolute;\n      left: 0.8rem;\n      width: fit-content;\n      height: 100%;\n      background: ",
          ";\n    }\n  }\n\n  &:nth-child(5) {\n    padding: 0 1rem;\n  }\n",
        ]);
        return (
          (nc = function () {
            return n;
          }),
          n
        );
      }
      function nu() {
        let n = (0, C.Z)([
          "\n  position: relative;\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.1);\n  }\n\n  p {\n    font-family: ",
          ";\n    font-size: 0.75rem;\n    color: white;\n  }\n",
        ]);
        return (
          (nu = function () {
            return n;
          }),
          n
        );
      }
      function nf() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  p {\n    width: 2.8125rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 0.25rem;\n    color: ",
          ";\n    width: min-content;\n    font-size: 0.75rem;\n    font-family: ",
          ";\n    font-weight: 700;\n    padding: 0.4rem 1rem;\n    cursor: pointer;\n    background-color: var(--divide);\n\n    &:hover {\n      background: rgba(255, 255, 255, 0.1);\n    }\n\n    &:first-child {\n      margin-right: 0.5rem;\n    }\n  }\n",
        ]);
        return (
          (nf = function () {
            return n;
          }),
          n
        );
      }
      function nm() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  align-items: center;\n\n  img {\n    cursor: not-allowed;\n    opacity: 0.8;\n  }\n\n  p {\n    font-family: ",
          ";\n    background-color: transparent;\n    cursor: auto;\n    margin: 0;\n\n    &:first-child {\n      color: ",
          ";\n    }\n\n    &:last-child {\n      color: ",
          ";\n      span {\n        color: ",
          ";\n      }\n    }\n  }\n",
        ]);
        return (
          (nm = function () {
            return n;
          }),
          n
        );
      }
      function np() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.375rem;\n\n  img {\n    cursor: pointer;\n  }\n\n  div {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem 0;\n\n    &:hover {\n      cursor: pointer;\n\n      > small {\n        display: flex;\n      }\n    }\n\n    > small {\n      display: none;\n    }\n\n    p {\n      color: ",
          ";\n    }\n  }\n",
        ]);
        return (
          (np = function () {
            return n;
          }),
          n
        );
      }
      function ng() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.375rem;\n\n  p {\n    /* Commented because its not being used now, but it will be used when the contract is updated */\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (ng = function () {
            return n;
          }),
          n
        );
      }
      function nh() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  justify-content: center;\n\n  p {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: ",
          ";\n    font-family: ",
          ";\n    font-size: 0.875rem;\n    padding: 0.5rem 1rem;\n    border-radius: 1.875rem;\n    width: min-content;\n    text-transform: uppercase;\n  }\n",
        ]);
        return (
          (nh = function () {
            return n;
          }),
          n
        );
      }
      function nx() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  padding-left: 1.5rem;\n\n  p {\n    position: relative;\n    color: ",
          ";\n    font-family: 'Inter', sans-serif;\n    font-weight: 700;\n\n    &::before {\n      content: '';\n      position: absolute;\n      top: -10px;\n      left: -9.6px;\n      width: 0.125rem;\n      height: 2.25rem;\n      background-color: ",
          ";\n    }\n  }\n",
        ]);
        return (
          (nx = function () {
            return n;
          }),
          n
        );
      }
      function ny() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  &:hover {\n    > div {\n      cursor: pointer;\n\n      > span {\n        display: block;\n        position: relative;\n\n        > p {\n          display: flex;\n          justify-content: center;\n          position: absolute;\n          top: 10px;\n          left: -35px;\n          font-size: 0.75rem;\n          background: ",
          ";\n          padding: 0.5rem;\n          border-radius: 0.125rem;\n          transition: all 0.2s;\n          z-index: 2;\n          min-width: 6rem;\n\n          &:nth-child(2) {\n            top: 9px;\n            width: 20px;\n            height: 20px;\n            left: 22px;\n            border-radius: 0;\n            transform: rotate(45deg);\n            z-index: 1;\n            min-width: unset;\n          }\n        }\n      }\n    }\n  }\n\n  > div {\n    > span {\n      position: relative;\n      display: none;\n    }\n  }\n",
        ]);
        return (
          (ny = function () {
            return n;
          }),
          n
        );
      }
      function nb() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: ",
          ";\n\n  &:hover {\n    > div {\n      cursor: pointer;\n\n      > span {\n        display: block;\n        position: relative;\n\n        > p {\n          display: flex;\n          justify-content: center;\n          position: absolute;\n          top: 10px;\n          left: -75px;\n          background: ",
          ";\n          padding: 0.5rem;\n          border-radius: 0.125rem;\n          transition: all 0.2s;\n          z-index: 2;\n          min-width: 6rem;\n          color: ",
          ";\n\n          &:nth-child(2) {\n            top: 9px;\n            width: 20px;\n            height: 20px;\n            left: -15px;\n            border-radius: 0;\n            transform: rotate(45deg);\n            z-index: 1;\n            min-width: unset;\n          }\n        }\n      }\n    }\n  }\n\n  > div {\n    > span {\n      position: relative;\n      display: none;\n    }\n  }\n\n  > p {\n    color: var(--primary-400);\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (nb = function () {
            return n;
          }),
          n
        );
      }
      let nA = j.ZP.div.withConfig({
          displayName: "Positions.styles__ContainerTable",
          componentId: "sc-b47fdfde-0",
        })(
          nd(),
          (n) => {
            let { theme: e } = n;
            return e.components.table.header.background;
          },
          (n) => {
            let { theme: e } = n;
            return e.components.table.header.background;
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.divide["01"];
          },
          (n) => {
            let { theme: e } = n;
            return e.components.table.header.background;
          }
        ),
        nw = j.ZP.th.withConfig({
          displayName: "Positions.styles__HeaderItem",
          componentId: "sc-b47fdfde-1",
        })(
          nc(),
          I.i,
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          (n) => {
            let { theme: e } = n;
            return e.components.table.header.background;
          }
        ),
        nv = j.ZP.tr.withConfig({
          displayName: "Positions.styles__BodyItem",
          componentId: "sc-b47fdfde-2",
        })(nu(), I.i),
        nC = j.ZP.div.withConfig({
          displayName: "Positions.styles__Actions",
          componentId: "sc-b47fdfde-3",
        })(
          nf(),
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          I.i
        ),
        nj = j.ZP.div.withConfig({
          displayName: "Positions.styles__TPSL",
          componentId: "sc-b47fdfde-4",
        })(
          nm(),
          I.i,
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.green;
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.red;
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          }
        ),
        nI = j.ZP.div.withConfig({
          displayName: "Positions.styles__Unrealized",
          componentId: "sc-b47fdfde-5",
        })(np(), (n) => {
          let { theme: e, $color: t } = n;
          return e.colors.neutral[t];
        }),
        nP = j.ZP.div.withConfig({
          displayName: "Positions.styles__Realized",
          componentId: "sc-b47fdfde-6",
        })(ng(), (n) => {
          let { theme: e } = n;
          return e.colors.neutral.white;
        }),
        nk = j.ZP.div.withConfig({
          displayName: "Positions.styles__Size",
          componentId: "sc-b47fdfde-7",
        })(
          nh(),
          (n) => {
            let { type: e, theme: t } = n;
            return "Long" === e
              ? "".concat(t.colors.neutral.green)
              : "".concat(t.colors.neutral.red);
          },
          I.i
        ),
        nB = j.ZP.div.withConfig({
          displayName: "Positions.styles__Market",
          componentId: "sc-b47fdfde-8",
        })(
          nx(),
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          (n) => {
            let { type: e, theme: t } = n;
            return "Long" === e
              ? "".concat(t.colors.neutral.green)
              : "".concat(t.colors.neutral.red);
          }
        ),
        nT = j.ZP.div.withConfig({
          displayName: "Positions.styles__Content",
          componentId: "sc-b47fdfde-9",
        })(ny(), (n) => {
          let { theme: e } = n;
          return e.components.tradeConsole.tradeInfo.background;
        }),
        n_ = j.ZP.div.withConfig({
          displayName: "Positions.styles__Liq",
          componentId: "sc-b47fdfde-10",
        })(
          nb(),
          (n) => {
            let { theme: e } = n;
            return e.colors.primary["500"];
          },
          (n) => {
            let { theme: e } = n;
            return e.components.tradeConsole.tradeInfo.background;
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.primary["400"];
          }
        ),
        nZ = {
          HeaderItem: nw,
          BodyItem: nv,
          Size: nk,
          Unrealized: nI,
          Market: nB,
          Content: nT,
          Actions: nC,
          ContainerTable: nA,
          Liq: n_,
          Realized: nP,
          TPSL: nj,
        },
        nS = () => {
          let { setIsOpen: n } = (0, F.d)(),
            { setIsShareableCardOpen: e } = (0, O.Y)(),
            { positions: t, isLoading: o } = $(),
            { getStats: a } = (0, D.F8)(),
            l = (0, i.useMemo)(() => t, [t]),
            s =
              Array.isArray(t) &&
              t.every((n) => (null == n ? void 0 : n.size) === 0),
            { getEntryPrice: c } = E();
          if (s) return { body: [], isLoading: o };
          let u =
            null == l
              ? void 0
              : l.map((t) => {
                  var i;
                  let o = c(t),
                    l = t.size >= 0 ? "Long" : "Short",
                    s = t.notionalValue / t.initialMargin,
                    u = nr(l, t.notionalValue / t.size, s),
                    f =
                      null ===
                        (i = (0, Y.U)(a).find((n) => {
                          let { id: e } = n;
                          return e === t.market;
                        })) || void 0 === i
                        ? void 0
                        : i.price,
                    m = Number(f) - (null != o ? o : 0),
                    p = t.size * m,
                    g = ((t.unrealizedPnl / t.notionalValue) * 100).toFixed(2),
                    h = (0, d.eX)(g);
                  return {
                    market: (0, r.jsx)(nZ.Market, {
                      "data-testid": "order",
                      type: l,
                      children: (0, r.jsx)("div", {
                        children: (0, r.jsx)("p", {
                          children: (0, J.A)(t.market),
                        }),
                      }),
                    }),
                    size: (0, r.jsx)(nZ.Size, {
                      type: l,
                      children: (0, r.jsx)("p", {
                        children: t.size.toFixed(2),
                      }),
                    }),
                    value: (0, r.jsx)(nZ.Content, {
                      children: (0, r.jsxs)("p", {
                        children: [(0, d.T5)(t.notionalValue, 2), " USD"],
                      }),
                    }),
                    entryPrice: (0, r.jsx)(nZ.Content, {
                      children: (0, r.jsxs)("p", {
                        children: [" ", t.entryPrice],
                      }),
                    }),
                    clPrice: (0, r.jsx)(nZ.Content, {
                      children: (0, r.jsxs)("p", { children: [" ", f] }),
                    }),
                    liq: (0, r.jsx)(nZ.Liq, {
                      children: (0, r.jsxs)("p", {
                        children: [(0, d.T5)(u, 2), " USD"],
                      }),
                    }),
                    im: (0, r.jsx)(nZ.Content, {
                      children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("p", {
                          children: [t.initialMargin, " USD"],
                        }),
                      }),
                    }),
                    mm: (0, r.jsx)(nZ.Content, {
                      children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("p", {
                          children: [(0, d.T5)(t.maintenanceMargin, 2), " USD"],
                        }),
                      }),
                    }),
                    unrealized: (0, r.jsxs)(nZ.Unrealized, {
                      $color: h,
                      children: [
                        (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsxs)("p", {
                              children: [" ", t.unrealizedPnl, " USD"],
                            }),
                            (0, r.jsxs)("p", { children: ["(", g, "%)"] }),
                            (0, r.jsxs)(X.u, {
                              $width: "12.275rem",
                              $boxTop: "-85px",
                              $boxLeft: "-50px",
                              $arrowBottom: "0px",
                              $arrowLeft: "80px",
                              children: [
                                "By default, the unrealized profit and loss are calculated based on the last traded price. When you move your cursor here, the unrealized profit and loss shown are calculated based on the mark price.",
                                (0, r.jsx)("p", {}),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsx)("img", {
                          src: G.src,
                          alt: "share position",
                          width: 14,
                          height: 14,
                          onClick: () =>
                            e({
                              name: "shareRoi",
                              props: {
                                positionMarket: t.market,
                                markPrice: (0, d.T5)(f, 2),
                                percentageRoi: g,
                                entryPrice: t.entryPrice,
                                usdzRoi: (0, d.T5)(p, 2),
                                operationType: l,
                                leverage: s
                                  .toPrecision(3)
                                  .toString()
                                  .replace("e-10", ""),
                              },
                            }),
                        }),
                      ],
                    }),
                    realized: (0, r.jsx)(nZ.Realized, {
                      children: (0, r.jsx)("div", {
                        children: (0, r.jsx)("p", { children: "--" }),
                      }),
                    }),
                    tpsl: (0, r.jsx)(nZ.Actions, {
                      "data-testid": "close-position",
                      className: "actions",
                      children: (0, r.jsxs)(nZ.TPSL, {
                        children: [
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("p", { children: "-" }),
                              (0, r.jsx)("p", { children: "-" }),
                            ],
                          }),
                          (0, r.jsx)("img", { src: W.Z.src, alt: "edit icon" }),
                        ],
                      }),
                    }),
                    closed: (0, r.jsx)(nZ.Actions, {
                      "data-testid": "close-position",
                      className: "actions",
                      children: (0, r.jsx)("p", {
                        onClick: () =>
                          n({
                            name: "closePosition",
                            props: {
                              unrealized: t.unrealizedPnl,
                              orderType: "MARKET",
                              closePosition: t.size,
                              token: ns.z[t.market],
                              marketId: t.market,
                            },
                          }),
                        children: "Market",
                      }),
                    }),
                  };
                });
          return { body: u, isLoading: o };
        },
        nN = [
          "Market",
          {
            label: "Size",
            tooltip: {
              width: "13.625rem",
              text: "Size of a cryptocurrency involved in a trade, whether it's buying or selling.",
              boxPosition: { top: "-70px", left: "-85px" },
              arrowPosition: { bottom: "0px", left: "100px" },
            },
          },
          {
            label: "Value",
            tooltip: {
              width: "9.125rem",
              text: "Pertains to the current market price.",
              boxPosition: { top: "-55px", left: "-40px" },
              arrowPosition: { bottom: "0px", left: "60px" },
            },
          },
          {
            label: "Entry Price",
            tooltip: {
              width: "14rem",
              text: "Price at which decides to initiate a position. If you have multiple entries, it is the weighted average.",
              boxPosition: { top: "-70px", left: "-40px" },
              arrowPosition: { bottom: "0px", left: "100px" },
            },
          },
          {
            label: "Mark Price",
            tooltip: {
              width: "8.25rem",
              text: "Mark Price of Chainlink (LINK).",
              boxPosition: { top: "-55px", left: "25px" },
              arrowPosition: { bottom: "0px", left: "55px" },
            },
          },
          {
            label: "Liq. Price",
            tooltip: {
              width: "6.5rem",
              text: "Liquidation Price",
              boxPosition: { top: "-55px", left: "0px" },
              arrowPosition: { bottom: "0px", left: "40px" },
            },
          },
          {
            label: "IM",
            tooltip: {
              width: "6.5rem",
              text: "Initial Margin",
              boxPosition: { top: "-55px", left: "-35px" },
              arrowPosition: { bottom: "0px", left: "40px" },
            },
          },
          {
            label: "MM",
            tooltip: {
              width: "6.5rem",
              text: "Maintenance Margin",
              boxPosition: { top: "-55px", left: "-25px" },
              arrowPosition: { bottom: "0px", left: "35px" },
            },
          },
          {
            label: "Unrealized P&L (%)",
            tooltip: {
              width: "11.69rem",
              text: "Represents the potential profit or loss on an open trade position.",
              boxPosition: { top: "-70px", left: "15px" },
              arrowPosition: { bottom: "0px", left: "80px" },
            },
          },
          {
            label: "Realized P&L",
            tooltip: {
              width: "13.25rem",
              text: "Profit or loss made from completed trades.\n  It represents the difference between the entry and exit prices for trading positions.",
              boxPosition: { top: "-85px", left: "-15px" },
              arrowPosition: { bottom: "0px", left: "80px" },
            },
          },
          {
            label: "TP / SL",
            tooltip: {
              width: "13.25rem",
              text: "Take Profit (TP) orders automatically sell a cryptocurrency position when the price reaches a predetermined level to secure profits, while Stop Loss (SL) orders automatically sell to limit potential losses if the price reaches a specified level.",
              boxPosition: { top: "-110px", left: "-125px" },
              arrowPosition: { bottom: "0px", left: "150px" },
            },
          },
          { label: "Close by" },
        ],
        nz = () => {
          let { body: n, isLoading: e } = nS();
          return (0, r.jsx)(nZ.ContainerTable, {
            children: (0, r.jsx)(M.i, {
              dataTestID: "positions-table",
              HeaderItem: nZ.HeaderItem,
              header: nN,
              BodyItem: nZ.BodyItem,
              body: n,
              loading: e ? (0, r.jsx)(L.g, {}) : null,
              bodyMessage: "You have no open positions.",
              divide: !0,
            }),
          });
        },
        nM = f()(
          () =>
            t
              .e(8255)
              .then(t.bind(t, 78255))
              .then((n) => n.CurrentOrders),
          { loadableGenerated: { webpack: () => [78255] }, ssr: !1 }
        ),
        nL = f()(
          () =>
            t
              .e(2160)
              .then(t.bind(t, 82160))
              .then((n) => n.OrdersHistory),
          { loadableGenerated: { webpack: () => [82160] }, ssr: !1 }
        ),
        nD = f()(
          () =>
            t
              .e(2937)
              .then(t.bind(t, 12937))
              .then((n) => n.TradeHistory),
          { loadableGenerated: { webpack: () => [12937] }, ssr: !1 }
        ),
        nF = () => ({
          Positions: (0, r.jsx)(nz, {}),
          "Current Orders": (0, r.jsx)(nM, {}),
          "Orders History": (0, r.jsx)(nL, {}),
          "Trades History": (0, r.jsx)(nD, {}),
        }),
        nR = () => {
          (0, A.h)();
          let [n, e] = p(),
            [t, a] = (0, i.useState)("Positions"),
            l = nF(),
            s = [],
            d = (0, o.sJ)(y.y),
            c = (0, o.sJ)(b.x),
            u = (n) => {
              switch (n) {
                case "Current Orders":
                  return d.filter((n) => n.sizeDelta).length;
                case "Positions":
                  return c.length;
                default:
                  return 0;
              }
            };
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(v.x, {
              degree: "175",
              borderRadius: "0.5rem",
              height: n.positions ? "20.1875rem" : "4.1875rem",
              marginTop: "0.52rem",
              padding: "1rem .75rem 1rem 0",
              children: [
                (0, r.jsxs)(z.Tabs, {
                  children: [
                    (0, r.jsx)("ul", {
                      className: "tabs",
                      children: [
                        "Positions",
                        "Current Orders",
                        "Orders History",
                        "Trades History",
                      ].map((n) => {
                        let e = s.includes(n),
                          i = u(n);
                        return (0, r.jsx)(
                          z.Tab,
                          {
                            $active: t === n,
                            disabled: e,
                            onClick: () => (e ? null : a(n)),
                            "data-testid": n,
                            children: (0, r.jsxs)("p", {
                              children: [n, " ", i ? "(".concat(i, ")") : null],
                            }),
                          },
                          n
                        );
                      }),
                    }),
                    (0, r.jsxs)(z.Expand, {
                      $expanded: n.positions,
                      children: [
                        (0, r.jsx)("img", {
                          src: w.src,
                          alt: "arrow down",
                          width: 24,
                          height: 24,
                          onClick: () => e({ ...n, positions: !n.positions }),
                        }),
                        (0, r.jsx)("img", {
                          src: w.src,
                          alt: "arrow down",
                          width: 24,
                          height: 24,
                          onClick: () => e({ ...n, positions: !n.positions }),
                        }),
                      ],
                    }),
                  ],
                }),
                n.positions ? l[t] : null,
              ],
            }),
          });
        };
      var nE = t(55850),
        nU = t(58975),
        nV = t(65328);
      let nQ = () => {
        let n = (0, o.sJ)(a.Y4),
          { data: e, loading: t } = (0, nE.a)(nV.oC, {
            variables: { marketId: n },
          });
        if (t) return { data: [], loading: !0 };
        let r = (null == e ? void 0 : e.logCreateMarketOrders) || [],
          i = r
            .map((n) => {
              let e = parseInt(n.marketOrder_sizeDelta) / 1e18;
              return {
                price: parseInt(n.marketOrder_acceptablePrice) / 1e18,
                size: e,
                time: (0, nU.B)({
                  timestampStr: n.marketOrder_timestamp,
                  onlyTime: !0,
                }),
                type: e > 0 ? "Long" : "Short",
                side: parseInt(n.marketOrder_sizeDelta) > 0 ? "up" : "down",
              };
            })
            .filter((n) => null !== n);
        return { data: i, loading: !1 };
      };
      function nH() {
        let n = (0, C.Z)([
          "\n  color: var(--secondary);\n  font-family: ",
          ";\n  font-weight: 700;\n  font-size: 0.875rem;\n  padding-bottom: 0.3rem;\n  border-bottom: 1px solid var(--divide);\n",
        ]);
        return (
          (nH = function () {
            return n;
          }),
          n
        );
      }
      function n$() {
        let n = (0, C.Z)([
          "\n  color: var(--secondary);\n  text-align: left;\n  font-family: ",
          ";\n  font-weight: 400;\n  font-size: 0.875rem;\n\n  &:nth-child(2) {\n    text-align: center;\n  }\n\n  &:last-child {\n    text-align: right;\n  }\n\n  padding: 0.25rem 0 0.62rem;\n",
        ]);
        return (
          (n$ = function () {
            return n;
          }),
          n
        );
      }
      function nO() {
        let n = (0, C.Z)([
          "\n  td {\n    color: var(--neutral-white);\n    text-align: left;\n    font-family: ",
          ";\n    font-weight: 400;\n    font-size: 0.875rem;\n\n    &:nth-child(2) {\n      text-align: end;\n      padding-right: 0.5rem;\n    }\n\n    &:nth-child(3) {\n      text-align: right;\n    }\n  }\n",
        ]);
        return (
          (nO = function () {
            return n;
          }),
          n
        );
      }
      function nJ() {
        let n = (0, C.Z)([
          "\n  white-space: nowrap;\n  width: 6.5rem;\n  text-overflow: ellipsis;\n  overflow-x: hidden;\n",
        ]);
        return (
          (nJ = function () {
            return n;
          }),
          n
        );
      }
      function nW() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  align-items: center;\n  color: ",
          ";\n  margin-bottom: 0.25rem;\n  img {\n    width: 1rem;\n    height: 1rem;\n  }\n",
        ]);
        return (
          (nW = function () {
            return n;
          }),
          n
        );
      }
      function nG() {
        let n = (0, C.Z)(["\n  text-align: right;\n"]);
        return (
          (nG = function () {
            return n;
          }),
          n
        );
      }
      let nY = j.ZP.h3.withConfig({
          displayName: "RecentTrades.styles__Title",
          componentId: "sc-4f222033-0",
        })(nH(), I.i),
        nX = j.ZP.th.withConfig({
          displayName: "RecentTrades.styles__HeaderItem",
          componentId: "sc-4f222033-1",
        })(n$(), I.i),
        nK = j.ZP.tr.withConfig({
          displayName: "RecentTrades.styles__BodyItem",
          componentId: "sc-4f222033-2",
        })(nO(), I.i),
        nq = j.ZP.p.withConfig({
          displayName: "RecentTrades.styles__Size",
          componentId: "sc-4f222033-3",
        })(nJ()),
        n0 = j.ZP.p.withConfig({
          displayName: "RecentTrades.styles__Price",
          componentId: "sc-4f222033-4",
        })(nW(), (n) => {
          let { $side: e } = n;
          return "up" === e ? "var(--green)" : "var(--red)";
        }),
        n5 = j.ZP.div.withConfig({
          displayName: "RecentTrades.styles__Time",
          componentId: "sc-4f222033-5",
        })(nG()),
        n1 = {
          Title: nY,
          HeaderItem: nX,
          BodyItem: nK,
          Price: n0,
          Time: n5,
          Size: nq,
        };
      var n2 = {
          src: "/_next/static/media/arrow-down-trades.f93b80d0.webp",
          height: 32,
          width: 32,
          blurDataURL:
            "data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSC8AAAABN6CobRs4W/XV97HBGINFROAs7kM1ZCvU6fUfQhRxBJG/xXWI6H+ibTAOv3CFAgBWUDggIgAAADABAJ0BKggACAACQDglAACYwAD8xv+eJ/5gPnxlp/hU4AA=",
          blurWidth: 8,
          blurHeight: 8,
        },
        n8 = {
          src: "/_next/static/media/arrow-up-trades.43acaf77.webp",
          height: 32,
          width: 32,
          blurDataURL:
            "data:image/webp;base64,UklGRnoAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSC8AAAABN6CobRs4W/XV97HBGINFROAs7kNNIynQ8vVIQA01HvAv4zxE9D/RK/iFcWhDAQBWUDggJAAAADABAJ0BKggACAACQDglAABuAAD+h6f9Wv/pAfHjLT/KxCAAAA==",
          blurWidth: 8,
          blurHeight: 8,
        };
      let n4 = (n) => {
        let { trades: e, symbol: t } = n;
        return e.map((n, e) => ({
          price: (0, r.jsxs)(
            n1.Price,
            {
              $side: n.side,
              "data-testid": "recent-trades-".concat(e),
              children: [
                (0, d.Bw)(n.price),
                (0, r.jsx)("img", {
                  src: "up" === n.side ? n8.src : n2.src,
                  alt: "indicator",
                }),
              ],
            },
            "recent-trades-".concat(e)
          ),
          size: (0, r.jsx)(n1.Size, { children: (0, d.Bw)(n.size, t) }),
          time: (0, r.jsx)("p", { children: n.time }),
        }));
      };
      var n7 = t(24561),
        n3 = t(96964);
      let n6 = () =>
          (0, r.jsxs)(n7.ZP, {
            speed: 1,
            backgroundColor: n3.y0.skeleton["01"],
            foregroundColor: n3.y0.skeleton["02"],
            uniqueKey: "recent-trades-loading",
            style: { marginTop: "-0.5rem" },
            children: [
              (0, r.jsx)("rect", {
                x: "0",
                y: "10",
                rx: "4",
                ry: "4",
                width: "100%",
                height: "16",
              }),
              (0, r.jsx)("rect", {
                x: "0",
                y: "30",
                rx: "4",
                ry: "4",
                width: "100%",
                height: "16",
              }),
              (0, r.jsx)("rect", {
                x: "0",
                y: "50",
                rx: "4",
                ry: "4",
                width: "100%",
                height: "16",
              }),
              (0, r.jsx)("rect", {
                x: "0",
                y: "70",
                rx: "4",
                ry: "4",
                width: "100%",
                height: "16",
              }),
              (0, r.jsx)("rect", {
                x: "0",
                y: "90",
                rx: "4",
                ry: "4",
                width: "100%",
                height: "16",
              }),
            ],
          }),
        n9 = () => {
          var n;
          let { data: e, loading: t } = nQ(),
            i = (0, o.sJ)(a.xY),
            [l] = p(),
            s = n4({ trades: e, symbol: null == i ? void 0 : i.symbol });
          return (0, r.jsx)(v.x, {
            width: l.consoleTrade ? "18.5rem" : "3.0rem",
            height: "20.1875rem",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            marginTop: "0.25rem",
            minHeight: "20.1875rem",
            dataTestId: "recent-trades-0",
            children: l.consoleTrade
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(n1.Title, { children: "Recent Trades" }),
                    (0, r.jsx)(M.i, {
                      HeaderItem: n1.HeaderItem,
                      header: [
                        "Price(USD)",
                        "Size (".concat(
                          null === (n = null == i ? void 0 : i.symbol) ||
                            void 0 === n
                            ? void 0
                            : n.replace("USD", ""),
                          ")"
                        ),
                        "Time",
                      ],
                      BodyItem: n1.BodyItem,
                      body: null != s ? s : [],
                      $hasNoBorderSpacing: !0,
                      loading: t ? (0, r.jsx)(n6, {}) : null,
                    }),
                  ],
                })
              : null,
          });
        };
      var en = t(92733),
        ee = t(30381),
        et = t.n(ee);
      let er = (n) => {
        var e, t, r, o;
        let { targetDate: a } = n,
          [l, s] = (0, i.useState)(et()()),
          d = et()(a),
          c = et().duration(d.diff(l));
        (0, i.useEffect)(() => {
          let n = setInterval(() => {
            s(et()());
          }, 1e3);
          return () => clearTimeout(n);
        });
        let u = {
          day:
            Number(c) > 0
              ? null === (e = String(null == c ? void 0 : c.days())) ||
                void 0 === e
                ? void 0
                : e.padStart(2, "0")
              : "00",
          hours:
            Number(c) > 0
              ? null === (t = String(null == c ? void 0 : c.hours())) ||
                void 0 === t
                ? void 0
                : t.padStart(2, "0")
              : "00",
          minutes:
            Number(c) > 0
              ? null === (r = String(null == c ? void 0 : c.minutes())) ||
                void 0 === r
                ? void 0
                : r.padStart(2, "0")
              : "00",
          seconds:
            Number(c) > 0
              ? null === (o = String(null == c ? void 0 : c.seconds())) ||
                void 0 === o
                ? void 0
                : o.padStart(2, "0")
              : "00",
        };
        return { timer: u, date: c };
      };
      var ei = t(4881),
        eo = t(38417),
        ea = t(81025),
        el = t(52523);
      let es = () => {
        let { setIsOpen: n } = (0, F.d)(),
          { getTokenBalance: e } = (0, ea.d)(),
          t = (0, o.sJ)(b.x),
          {
            account: r,
            signer: l,
            accountIdsStates: s,
            perpsEngineContract: c,
          } = (0, Q.O)(),
          u = (0, o.sJ)(a.xY),
          [f, m] = (0, o.FV)(en.D),
          { callAccountMarginBreakdown: p } = (0, el.h)(),
          { currentPrice: g } = (0, ei.D)(),
          [h, x] = (0, i.useState)(!1),
          {
            mode: y,
            orderType: A,
            value: w,
            orderByValue: v,
            orderFeePercentage: C,
          } = f,
          j = s.accountIdSelected,
          I = null == u ? void 0 : u.marketId,
          P = (0, eo.D)(I),
          k = () => {
            na() &&
              n({
                name: "confirmPosition",
                props: { mode: y, orderType: A, marketId: I },
              });
          };
        (0, i.useEffect)(() => {
          let n = localStorage.getItem("userSelection") || "Size";
          m((e) => ({
            ...e,
            orderByValue: "Value" === n,
            orderBySize: "Size" === n,
          }));
        }, []);
        let B = async () => {
          try {
            let n = await p();
            if (n) {
              let {
                marginBalanceFormatted: e,
                availableBalance: t,
                availableMarginFormatted: r,
                initialMargin: i,
                maintenanceMargin: o,
                marginBalance: a,
              } = n;
              m((n) => ({
                ...n,
                initialMargin: i,
                maintenanceMargin: o,
                marginBalanceFormatted: e,
                availableBalanceFormatted: r,
                availableBalance: t,
                marginBalance: a,
              }));
            }
          } catch (n) {
            console.log("Error callAccountMarginBreakdown", p);
          }
        };
        (0, i.useEffect)(() => {
          m((n) => ({ ...n, value: "" }));
        }, [I]),
          (0, i.useEffect)(() => {
            let n = async () => {
              try {
                j
                  ? await B()
                  : m((n) => ({
                      ...n,
                      initialMargin: void 0,
                      maintenanceMargin: void 0,
                      marginBalanceFormatted: "",
                      availableBalanceFormatted: "",
                      value: "",
                      marginBalance: 0,
                      availableBalance: void 0,
                    }));
              } catch (n) {
                console.log("Error getAccountInformations", n);
              }
            };
            n();
          }, [I, j, t]),
          (0, i.useEffect)(() => {
            let n = localStorage.getItem("userSelection") || "Size",
              e = Number(localStorage.getItem("leverage") || "2");
            m((t) => ({
              ...t,
              orderByValue: "Value" === n,
              orderBySize: "Size" === n,
              leverage: e,
            }));
          }, []),
          (0, i.useEffect)(() => {
            e({ tokenContract: K.mr });
          }, [r, l]),
          (0, i.useEffect)(() => {
            let n = Number(
              localStorage.getItem(
                "".concat(null == u ? void 0 : u.symbol, "-leverage")
              )
            );
            m((e) => ({ ...e, leverage: n || 1 }));
          }, [u]),
          (0, i.useEffect)(() => {
            m((n) => ({ ...n, value: "" }));
          }, [f.orderByValue]),
          (0, i.useEffect)(() => {
            f.shouldOpenModal &&
              (k(), m((n) => ({ ...n, shouldOpenModal: !1 })));
          }, [f.shouldOpenModal]);
        let T = async () => {
          if (I && j)
            try {
              x(!0);
              let n = parseInt(((300 / g) * 1e18).toString()),
                e = await (null == c
                  ? void 0
                  : c.simulateTrade(j, I, "MARKET" === A ? 0 : 1, BigInt(n)));
              if (e) {
                let n = Number(e[3]) / 1e18,
                  t = Number(e[4]) / 1e18;
                m((e) => ({
                  ...e,
                  orderFeePercentage: n / 300,
                  settlementFee: t,
                }));
              }
              return e;
            } catch (n) {
              return;
            }
        };
        (0, i.useEffect)(() => {
          !I || !g || h || (P === I && P && C) || T();
        }, [I, g, P, h, j]),
          (0, i.useEffect)(() => {
            P !== I && x(!1);
          }, [P, I]);
        let _ = async () => {
          try {
            if (!I || !c) return;
            let n = await (null == c ? void 0 : c.getMarketData(I));
            if (n) {
              let e = Number(n[2]) / 1e18,
                t = Number(n[3]) / 1e18,
                r = Math.floor(1 / (e + t));
              r && r !== 1 / 0
                ? m((n) => ({ ...n, maxLeverage: r, maintenanceMarginRate: t }))
                : m((n) => ({
                    ...n,
                    maxLeverage: 50,
                    maintenanceMarginRate: 0.01,
                  }));
            }
          } catch (n) {
            console.log("Error setMaxLeverage", n);
          }
        };
        (0, i.useEffect)(() => {
          I && c && _();
        }, [I, c]);
        let Z = async () => {
          try {
            if (!j || !I || !w) return;
            let n = Number((0, d.Bb)(w)),
              e = v ? Number(n / g) : n,
              t = e.toString().split(".");
            if (t.length > 1) return;
            let r = BigInt(1e18 * e),
              i = BigInt(1e18 * g),
              o = await (null == c
                ? void 0
                : c.createMarketOrder.estimateGas(j, I, r, i)),
              a = (Number(o) / 1e9) * g;
            m((n) => ({ ...n, estimatedGasFee: a }));
          } catch (n) {
            console.log("Error call", n);
          }
        };
        return (
          (0, i.useEffect)(() => {
            Z();
          }, [w, I, j]),
          { isConnected: r }
        );
      };
      var ed = {
          src: "/_next/static/media/calculator.362dc268.webp",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/webp;base64,UklGRqIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSC0AAAABUFTbSvTXUII2aot5CsLKY2qkQ0RMAHxeOU8CRFtXAeSe80xJof6ioZnzYvgAVlA4IE4AAABwAgCdASoIAAgAAkA4JagCdG1/DxBPADfaIjAAAP7J+RzlvFDrYwufxOoYy8X2K+3XbgS0MYltor2hvuv8W/8XGb/x4yHfQ39hb/XUMAA=",
          blurWidth: 8,
          blurHeight: 8,
        },
        ec = t(45130),
        eu = t(63114),
        ef = {
          src: "/_next/static/media/tool-order-price.1a21cfa5.png",
          height: 32,
          width: 32,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEX////////////////////////////+/v5G9asoAAAACHRSTlMBNBEecmdFo35E1wMAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAqSURBVHicY2BAAEYmBiYwzc7GzAIRYWQBizAwszAzgVmszIysjEh6YAAACcsAQAT8RZsAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        em = t(88358);
      function ep() {
        let n = (0, C.Z)([
          "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0 0.5rem;\n  margin: 0 0 0.75rem 0;\n\n  p {\n    font-family: ",
          ";\n    font-size: 0.875rem;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.125rem;\n    color: ",
          ";\n    text-wrap: nowrap;\n  }\n\n  img {\n    cursor: pointer;\n  }\n\n  .info {\n    margin: 0 1.9rem 0 0.25rem;\n  }\n\n  .react-switch-handle {\n    width: 0.75rem !important;\n    height: 0.75rem !important;\n    margin-top: -2px;\n  }\n\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid ",
          ";\n",
        ]);
        return (
          (ep = function () {
            return n;
          }),
          n
        );
      }
      function eg() {
        let n = (0, C.Z)([
          "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  list-style: none;\n\n  > img {\n    margin-left: 51%;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n",
        ]);
        return (
          (eg = function () {
            return n;
          }),
          n
        );
      }
      function eh() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  transition: all 0.5s;\n  border-bottom: 1px solid\n    ",
          ";\n  margin-bottom: ",
          ";\n\n  img {\n    transform: rotate(",
          ");\n    transition: all 0.2s;\n    cursor: pointer;\n    margin-left: -0.4rem;\n    margin-top: ",
          ";\n\n    &:last-child {\n      margin-left: -1.1rem;\n    }\n  }\n",
        ]);
        return (
          (eh = function () {
            return n;
          }),
          n
        );
      }
      function ex() {
        let n = (0, C.Z)([
          "\n  position: relative;\n  color: var(--secondary);\n  font-family: ",
          ";\n  font-weight: 400;\n  font-size: 0.875rem;\n  cursor: block;\n  transition: all 0.2s ease;\n\n  &:hover {\n    cursor: pointer;\n\n    > small {\n      display: flex;\n      opacity: 1;\n    }\n  }\n\n  > small {\n    opacity: 0;\n    display: none;\n  }\n\n  &:hover {\n    opacity: 1;\n  }\n\n  opacity: ",
          ";\n",
        ]);
        return (
          (ex = function () {
            return n;
          }),
          n
        );
      }
      function ey() {
        let n = (0, C.Z)([
          "\n  position: relative;\n  color: var(--secondary);\n  font-family: ",
          ";\n  font-weight: 400;\n  font-size: 0.875rem;\n  cursor: not-allowed;\n  transition: all 0.2s ease;\n\n  &:hover {\n    cursor: not-allowed;\n\n    > small {\n      display: flex;\n      opacity: 1;\n    }\n  }\n\n  > small {\n    opacity: 0;\n    display: none;\n  }\n\n  &:hover {\n    opacity: 1;\n  }\n\n  opacity: ",
          ";\n",
        ]);
        return (
          (ey = function () {
            return n;
          }),
          n
        );
      }
      function eb() {
        let n = (0, C.Z)([
          "\n  position: absolute;\n  font-size: 0.75rem;\n  bottom: -40%;\n  left: 0;\n  display: flex;\n  align-items: center;\n  gap: 0 0.25rem;\n  cursor: not-allowed;\n  color: var(--secondary);\n  font-family: ",
          ";\n  font-weight: 400;\n\n  > small {\n    background-color: ",
          ";\n  }\n\n\n  &:hover {\n    cursor: not-allowed;\n\n    > small {\n      display: flex;\n      opacity: 1;\n    }\n  }\n\n  > small {\n    opacity: 0;\n    display: none;\n  }\n\n  &:hover {\n    opacity: 3;\n  }\n",
        ]);
        return (
          (eb = function () {
            return n;
          }),
          n
        );
      }
      function eA() {
        let n = (0, C.Z)([
          "\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  > div {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    &:first-child {\n      margin: 0.75rem 0 0 0;\n    }\n\n    button,\n    label {\n      background: transparent;\n      border: none;\n      font-family: ",
          ";\n      font-weight: 400;\n      font-size: 0.75rem;\n      color: var(--secondary);\n      width: fit-content;\n      line-height: 1rem;\n      > img {\n        cursor: pointer;\n        position: unset;\n        margin: 0 0 -0.4rem 0;\n      }\n\n      &:hover {\n        cursor: pointer;\n      }\n    }\n\n    label {\n      &:hover {\n        cursor: auto;\n      }\n    }\n\n    img {\n      cursor: pointer;\n    }\n  }\n",
        ]);
        return (
          (eA = function () {
            return n;
          }),
          n
        );
      }
      function ew() {
        let n = (0, C.Z)([
          "\n  margin-top: 8px;\n\n  > img {\n    transition: all 0.2s ease;\n\n    &:hover {\n      opacity: 0.75;\n    }\n  }\n",
        ]);
        return (
          (ew = function () {
            return n;
          }),
          n
        );
      }
      function ev() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  align-items: center;\n\n  p {\n    &:first-child {\n      font-family: ",
          ";\n      font-weight: 300;\n      color: var(--secondary);\n    }\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    img {\n      width: 1.375rem;\n      height: 1.375rem;\n    }\n  }\n\n  span {\n    margin: 0 0.25rem;\n    color: var(--neutral-white) !important;\n  }\n",
        ]);
        return (
          (ev = function () {
            return n;
          }),
          n
        );
      }
      function eC() {
        let n = (0, C.Z)([
          "\n  transition: all 0.5s ease;\n  width: 100%;\n  font-size: 0.75rem;\n  box-shadow: 2px 2px 4px 0px rgba(14, 22, 25, 0.9) inset,\n    -2px -2px 3px 0px rgba(58, 90, 101, 0.9) inset,\n    2px -2px 3px 0px rgba(14, 22, 25, 0.2) inset,\n    -2px 2px 3px 0px rgba(14, 22, 25, 0.2) inset;\n  background-color: ",
          ";\n  border-radius: 0.25rem;\n  padding: 0.5rem 0.2rem;\n  height: 1.5rem;\n\n  div {\n    > p {\n      font-family: ",
          ";\n      font-weight: 700;\n      color: var(--neutral-white);\n    }\n  }\n\n  > div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n  }\n\n  span {\n    color: var(--secondary);\n    font-family: ",
          ";\n    font-weight: 300;\n    font-size: 0.75rem;\n  }\n\n  small {\n    color: var(--secondary);\n    font-family: ",
          ";\n    font-weight: 300;\n    font-size: 0.625rem;\n    margin-bottom: 0.2rem;\n  }\n\n  input {\n    color: white;\n    font-family: ",
          ";\n    font-weight: 700;\n    font-size: 0.875rem;\n    background-color: transparent;\n    border: none;\n    width: 100%;\n    margin-right: 2rem;\n    padding-left: 0.25rem;\n\n    &::placeholder {\n      color: var(--neutral-grey-3);\n    }\n  }\n",
        ]);
        return (
          (eC = function () {
            return n;
          }),
          n
        );
      }
      function ej() {
        let n = (0, C.Z)([
          "\n  width: 100%;\n  margin: 0.5rem 0;\n\n  p {\n    color: var(--secondary);\n    font-family: ",
          ";\n    font-weight: 300;\n    font-size: 0.75rem;\n  }\n\n  input[type='range'] {\n    width: 100%;\n    background: var(--secondary);\n    -webkit-appearance: none;\n    appearance: none;\n    height: 0.125rem;\n\n    &::-webkit-slider-thumb {\n      position: relative;\n      z-index: 1;\n      -webkit-appearance: none;\n      appearance: none;\n      height: 0.5rem;\n      width: 0.5rem;\n      border-radius: 100%;\n      background: var(\n        --gradiente-02,\n        linear-gradient(315deg, var(--secondary) 0%, var(--primary) 52.08%)\n      );\n    }\n  }\n",
        ]);
        return (
          (ej = function () {
            return n;
          }),
          n
        );
      }
      function eI() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: -0.5625rem;\n  width: 102%;\n  margin-left: -0.0625rem;\n\n  div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n\n  p {\n    height: 0.5rem;\n    width: 0.5rem;\n    border-radius: 6.25rem;\n    background-color: var(--primary-600);\n  }\n\n  small {\n    color: var(--secondary);\n    text-align: center;\n    font-family: ",
          ";\n    font-weight: 300;\n    font-size: 0.4547rem;\n  }\n",
        ]);
        return (
          (eI = function () {
            return n;
          }),
          n
        );
      }
      function eP() {
        let n = (0, C.Z)(["\n  position: relative;\n  width: 100%;\n"]);
        return (
          (eP = function () {
            return n;
          }),
          n
        );
      }
      function ek() {
        let n = (0, C.Z)([
          "\n      button {\n        background: ",
          ";\n        &:hover {\n          background: ",
          ";\n        }\n      }\n    ",
        ]);
        return (
          (ek = function () {
            return n;
          }),
          n
        );
      }
      function eB() {
        let n = (0, C.Z)([
          "\n      button {\n        color: ",
          ";\n        &:hover {\n          background: ",
          ";\n          filter: grayscale(0.25) brightness(1.075);\n        }\n      }\n    ",
        ]);
        return (
          (eB = function () {
            return n;
          }),
          n
        );
      }
      function eT() {
        let n = (0, C.Z)([
          "\n  width: 100%;\n  position: relative;\n  display: flex;\n  gap: 0 0.5rem;\n  margin: 1rem 0 1rem 0;\n\n  button {\n    font-size: 0.75rem;\n    font-style: normal;\n    font-weight: 700;\n\n    color: var(--neutral-white);\n    background: ",
          ";\n  }\n\n  ",
          ";\n\n  ",
          ";\n\n  > small {\n    opacity: 0;\n    display: none;\n  }\n\n  &:hover {\n    > small {\n      display: flex;\n      opacity: 1;\n    }\n  }\n",
        ]);
        return (
          (eT = function () {
            return n;
          }),
          n
        );
      }
      function e_() {
        let n = (0, C.Z)([
          "\n  width: 100%;\n  height: 0.25rem;\n  margin: calc(1rem - 0.625rem) 0 16px 0;\n  border-radius: 0.5rem;\n  background: var(--neutral-bottom);\n  box-shadow: 2px 2px 4px 0px rgba(14, 22, 25, 0.9) inset,\n    -2px -2px 3px 0px rgba(58, 90, 101, 0.9) inset,\n    2px -2px 3px 0px rgba(14, 22, 25, 0.2) inset,\n    -2px 2px 3px 0px rgba(14, 22, 25, 0.2) inset;\n  border: 0;\n  margin: 1rem 0;\n",
        ]);
        return (
          (e_ = function () {
            return n;
          }),
          n
        );
      }
      function eZ() {
        let n = (0, C.Z)([
          "\n  width: 100%;\n\n  p {\n    color: var(--secondary);\n    font-family: ",
          ";\n    font-weight: 500;\n    font-size: 0.75rem;\n  }\n\n  #infos-price {\n    padding: 0.25rem;\n    width: 100%;\n    background: linear-gradient(\n      135deg,\n      var(--modal-1) 0%,\n      var(--modal-2) 54.3%,\n      var(--modal-3) 100%\n    );\n    margin: 0.5rem 0;\n    border-radius: 0.25rem;\n\n    div {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 0.2rem;\n\n      small {\n        color: var(--primary-900);\n        font-family: ",
          ";\n        font-weight: 500;\n        font-size: 0.625rem;\n      }\n    }\n  }\n",
        ]);
        return (
          (eZ = function () {
            return n;
          }),
          n
        );
      }
      function eS() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  align-items: center;\n  gap: 0 0.1rem;\n  width: min-content;\n  padding: 0.35rem 0.75rem 0.35rem 0.25rem;\n  height: 2.2em;\n  border: 1px solid var(--secondary);\n  border-radius: 3.125rem;\n\n  p {\n    font-family: ",
          ";\n    font-weight: 800;\n    font-size: 0.75rem;\n    color: var(--neutral-white);\n  }\n",
        ]);
        return (
          (eS = function () {
            return n;
          }),
          n
        );
      }
      function eN() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  align-items: flex-end;\n  flex: 1;\n",
        ]);
        return (
          (eN = function () {
            return n;
          }),
          n
        );
      }
      function ez() {
        let n = (0, C.Z)([
          "\n  width: 1.6rem;\n  height: 1.6rem;\n  object-fit: scale-down;\n  margin-right: 0.25rem;\n  border-radius: 50%;\n  box-shadow: 3px 7px 5px -3px rgba(0, 0, 0, 0.5),\n    -2px -1.5px 5px 0px rgba(255, 255, 255, 0.2);\n",
        ]);
        return (
          (ez = function () {
            return n;
          }),
          n
        );
      }
      function eM() {
        let n = (0, C.Z)([
          "\n  position: absolute;\n  bottom: -40%;\n  left: 0;\n  display: flex;\n  align-items: center;\n  gap: 0 0.25rem;\n  cursor: not-allowed;\n\n  &:hover {\n    cursor: not-allowed;\n    opacity: 1;\n  }\n  > p {\n    font-family: ",
          ";\n    font-weight: 400;\n    font-size: 0.75rem;\n    color: var(--secondary);\n  }\n",
        ]);
        return (
          (eM = function () {
            return n;
          }),
          n
        );
      }
      function eL() {
        let n = (0, C.Z)([
          "\n  appearance: none;\n  -webkit-appearance: none;\n  width: 0.75rem;\n  height: 0.75rem;\n  border: 0.0625rem solid var(--secondary);\n  border-radius: 0.25rem;\n  background: transparent;\n  transition: all 0.2s ease;\n  cursor: not-allowed;\n\n  &:checked {\n    background-size: cover;\n    background-image: url(",
          ");\n    border: none;\n  }\n",
        ]);
        return (
          (eL = function () {
            return n;
          }),
          n
        );
      }
      function eD() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  padding: 0.25rem;\n  font-size: 0.875rem;\n  justify-content: center;\n  align-items: center;\n  gap: 0.25rem;\n  flex: 1 0 0;\n  border-radius: 0.25rem;\n  background: ",
          ";\n\n  border: 0;\n  color: ",
          ";\n\n  cursor: pointer;\n",
        ]);
        return (
          (eD = function () {
            return n;
          }),
          n
        );
      }
      function eF() {
        let n = (0, C.Z)([
          "\n  width: 100%;\n  min-height: 1.875rem;\n\n  display: flex;\n  justify-content: space-between;\n\n  border: 1px solid ",
          ";\n  padding: 0.1rem;\n\n  border-radius: 0.25rem;\n\n  background: ",
          ";\n\n  margin: 0 0 1rem 0;\n",
        ]);
        return (
          (eF = function () {
            return n;
          }),
          n
        );
      }
      function eR() {
        let n = (0, C.Z)([
          "\n      background-color: ",
          ";\n      color: ",
          ";\n    ",
        ]);
        return (
          (eR = function () {
            return n;
          }),
          n
        );
      }
      function eE() {
        let n = (0, C.Z)([
          "\n  width: 100%;\n\n  &:hover {\n    filter: grayscale(0.225) brightness(1.075);\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 0.875rem;\n  font-style: normal;\n  font-weight: 700;\n\n  border-radius: 0.2rem 0 0 0.2rem;\n\n  cursor: pointer;\n\n  color: ",
          ";\n\n  ",
          "\n",
        ]);
        return (
          (eE = function () {
            return n;
          }),
          n
        );
      }
      function eU() {
        let n = (0, C.Z)([
          "\n      background-color: ",
          ";\n      color: ",
          ";\n    ",
        ]);
        return (
          (eU = function () {
            return n;
          }),
          n
        );
      }
      function eV() {
        let n = (0, C.Z)([
          "\n  width: 100%;\n\n  &:hover {\n    filter: grayscale(0.25) brightness(1.075);\n  }\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 0.875rem;\n  font-style: normal;\n  font-weight: 700;\n\n  border-radius: 0 0.2rem 0.2rem 0;\n\n  cursor: pointer;\n\n  color: ",
          ";\n\n  ",
          "\n",
        ]);
        return (
          (eV = function () {
            return n;
          }),
          n
        );
      }
      function eQ() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 3.5rem;\n  padding: 0.5rem;\n  gap: 0.5rem;\n  background-color: #24383f;\n  border-radius: 0.25rem;\n  border: 1px solid ",
          ";\n  margin-bottom: 0.8rem;\n\n  > span {\n    font-size: 0.7rem;\n    font-weight: 500;\n    font-family: ",
          ";\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (eQ = function () {
            return n;
          }),
          n
        );
      }
      let eH = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__Header",
          componentId: "sc-528f8dd-0",
        })(
          ep(),
          I.i,
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.shared["02"];
          }
        ),
        e$ = j.ZP.ul.withConfig({
          displayName: "TradeConsole.styles__Tabs",
          componentId: "sc-528f8dd-1",
        })(eg()),
        eO = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__Expand",
          componentId: "sc-528f8dd-2",
        })(
          eh(),
          (n) => {
            let { theme: e, $expanded: t } = n;
            return t ? e.colors.shared["02"] : "transparent";
          },
          (n) => {
            let { $expanded: e } = n;
            return e ? "0.5rem" : "0";
          },
          (n) => {
            let { $expanded: e } = n;
            return e ? "270deg" : "90deg";
          },
          (n) => {
            let { $expanded: e } = n;
            return e ? 0 : "1rem";
          }
        ),
        eJ = j.ZP.li.withConfig({
          displayName: "TradeConsole.styles__Tab",
          componentId: "sc-528f8dd-3",
        })(ex(), I.i, (n) => {
          let { $active: e } = n;
          return e ? "1" : "0.5";
        }),
        eW = j.ZP.li.withConfig({
          displayName: "TradeConsole.styles__TabLimit",
          componentId: "sc-528f8dd-4",
        })(ey(), I.i, (n) => {
          let { $active: e } = n;
          return e ? "1" : "0.5";
        }),
        eG = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__TPSLBlock",
          componentId: "sc-528f8dd-5",
        })(eb(), I.i, (n) => {
          let { theme: e } = n;
          return e.colors.shared["02"];
        }),
        eY = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__ItemsContainer",
          componentId: "sc-528f8dd-6",
        })(eA(), I.i),
        eX = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__InputContainer",
          componentId: "sc-528f8dd-7",
        })(ew()),
        eK = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__Tools",
          componentId: "sc-528f8dd-8",
        })(ev(), I.i),
        eq = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__Item",
          componentId: "sc-528f8dd-9",
        })(
          eC(),
          (n) => {
            let { theme: e } = n;
            return e.colors.shared["02"];
          },
          I.i,
          I.i,
          I.i,
          I.i
        ),
        e0 = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__Leverage",
          componentId: "sc-528f8dd-10",
        })(ej(), I.i),
        e5 = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__Leverages",
          componentId: "sc-528f8dd-11",
        })(eI(), I.i),
        e1 = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__ContentTooltip",
          componentId: "sc-528f8dd-12",
        })(eP()),
        e2 = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__ModeContainer",
          componentId: "sc-528f8dd-13",
        })(
          eT(),
          (n) => {
            let { theme: e } = n;
            return "light" === e.currentTheme
              ? e.colors.primary["1000"]
              : e.colors.secondary["1100"];
          },
          (n) => {
            let { $disabled: e } = n;
            return (
              e &&
              (0, j.iv)(
                ek(),
                (n) => {
                  let { theme: e } = n;
                  return e.colors.neutral["grey-6"];
                },
                (n) => {
                  let { theme: e } = n;
                  return e.colors.neutral["grey-6"];
                }
              )
            );
          },
          (n) => {
            let { $disabled: e } = n;
            return (
              !e &&
              (0, j.iv)(
                eB(),
                (n) => {
                  let { theme: e } = n;
                  return e.colors.primary["900"];
                },
                (n) => {
                  let { theme: e } = n;
                  return "light" === e.currentTheme
                    ? e.colors.primary["1000"]
                    : e.colors.secondary["1100"];
                }
              )
            );
          }
        ),
        e8 = j.ZP.hr.withConfig({
          displayName: "TradeConsole.styles__Divide",
          componentId: "sc-528f8dd-14",
        })(e_()),
        e4 = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__Price",
          componentId: "sc-528f8dd-15",
        })(eZ(), I.i, I.i),
        e7 = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__CoinContainer",
          componentId: "sc-528f8dd-16",
        })(eS(), I.i),
        e3 = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__ContainerAccount",
          componentId: "sc-528f8dd-17",
        })(eN()),
        e6 = (0, j.ZP)(x()).withConfig({
          displayName: "TradeConsole.styles__Coin",
          componentId: "sc-528f8dd-18",
        })(ez()),
        e9 = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__TPSLContainer",
          componentId: "sc-528f8dd-19",
        })(eM(), I.i),
        tn = j.ZP.input.withConfig({
          displayName: "TradeConsole.styles__TPSL",
          componentId: "sc-528f8dd-20",
        })(eL(), em.Z.src),
        te = j.ZP.button.withConfig({
          displayName: "TradeConsole.styles__LeverageButton",
          componentId: "sc-528f8dd-21",
        })(
          eD(),
          (n) => {
            let { theme: e } = n;
            return e.colors.shared["02"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          }
        ),
        tt = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__ConsoleButtonsContainer",
          componentId: "sc-528f8dd-22",
        })(
          eF(),
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.shared["02"];
          }
        ),
        tr = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__LongButton",
          componentId: "sc-528f8dd-23",
        })(
          eE(),
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          (n) => {
            let { $selected: e } = n;
            return (
              e &&
              (0, j.iv)(
                eR(),
                (n) => {
                  let { theme: e } = n;
                  return e.colors.neutral.green;
                },
                (n) => {
                  let { theme: e } = n;
                  return e.colors.neutral.white;
                }
              )
            );
          }
        ),
        ti = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__ShortButton",
          componentId: "sc-528f8dd-24",
        })(
          eV(),
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          (n) => {
            let { $selected: e } = n;
            return (
              e &&
              (0, j.iv)(
                eU(),
                (n) => {
                  let { theme: e } = n;
                  return e.colors.neutral.red;
                },
                (n) => {
                  let { theme: e } = n;
                  return e.colors.neutral.white;
                }
              )
            );
          }
        ),
        to = j.ZP.div.withConfig({
          displayName: "TradeConsole.styles__MinimumTrade",
          componentId: "sc-528f8dd-25",
        })(
          eQ(),
          (n) => {
            let { theme: e } = n;
            return e.colors.modal["01"];
          },
          I.i,
          (n) => {
            let { theme: e } = n;
            return e.colors.trading.orange;
          }
        ),
        ta = {
          Header: eH,
          Tabs: e$,
          Tab: eJ,
          ItemsContainer: eY,
          Item: eq,
          Leverage: e0,
          ModeContainer: e2,
          Divide: e8,
          Price: e4,
          CoinContainer: e7,
          Coin: e6,
          Leverages: e5,
          TPSLContainer: e9,
          TPSL: tn,
          Tools: eK,
          ContainerAccount: e3,
          Expand: eO,
          LeverageButton: te,
          ConsoleButtonsContainer: tt,
          LongButton: tr,
          ContentTooltip: e1,
          ShortButton: ti,
          MinimumTrade: to,
          TabLimit: eW,
          TPSLBlock: eG,
        },
        tl = () => {
          let { currentPrice: n, symbol: e } = (0, ei.D)(),
            [t, a] = (0, i.useState)(""),
            l = (0, o.Zl)(en.D),
            c = (n) => {
              a((0, d.Bw)(n.target.value));
              let e = parseFloat((0, d.Bb)(n.target.value));
              l((n) => ({ ...n, limitPrice: e }));
            },
            u = () => {
              a((0, d.Bw)(n.toFixed((0, s.IL)(e))));
            },
            f = no(n, a, e);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("div", {
                children: (0, r.jsx)("label", { children: "Order Price" }),
              }),
              (0, r.jsx)(ta.Item, {
                children: (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("input", {
                      "data-testid": ts,
                      type: "text",
                      placeholder: "Price",
                      name: "orderPriceValue",
                      value: t,
                      onChange: c,
                    }),
                    (0, r.jsxs)(ta.Tools, {
                      children: [
                        (0, r.jsx)("p", {
                          style: { cursor: "pointer" },
                          onClick: u,
                          children: "Last",
                        }),
                        (0, r.jsx)("span", { children: "|" }),
                        (0, r.jsx)("div", {
                          onClick: f,
                          children: (0, r.jsx)("img", {
                            src: ef.src,
                            alt: "icon",
                            width: 26,
                            height: 26,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        ts = "input-price";
      function td() {
        let n = (0, C.Z)([
          "\n  position: relative;\n  padding: 0.5rem;\n  width: 100%;\n  background: ",
          ";\n  border-radius: 0.25rem;\n  color: var(--secondary);\n\n  div {\n    display: flex;\n    justify-content: space-between;\n\n    > h1 {\n      display: flex;\n      gap: 0 0.25rem;\n      align-items: center;\n      justify-content: center;\n      font-family: ",
          ";\n      font-weight: 700;\n      font-size: 0.875rem;\n      color: var(--secondary);\n      padding-top: 0.25rem;\n      margin-bottom: 0.25rem;\n      transition: all 0.2s ease;\n\n      &:hover {\n        img {\n          opacity: 0.75;\n        }\n      }\n\n      > img {\n        cursor: pointer;\n      }\n    }\n\n    > span {\n    }\n  }\n",
        ]);
        return (
          (td = function () {
            return n;
          }),
          n
        );
      }
      function tc() {
        let n = (0, C.Z)([
          "\n  color: var(--secondary);\n  font-family: ",
          ";\n  font-weight: 400;\n  font-size: 0.875rem;\n",
        ]);
        return (
          (tc = function () {
            return n;
          }),
          n
        );
      }
      function tu() {
        let n = (0, C.Z)([
          "\n  color: ",
          ";\n  font-family: ",
          ";\n  font-weight: 700;\n  font-size: 0.875rem;\n  display: flex;\n  gap: 0 0.25rem;\n\n  > p {\n    font-family: ",
          ";\n    font-weight: 400;\n    font-size: 0.875rem;\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (tu = function () {
            return n;
          }),
          n
        );
      }
      function tf() {
        let n = (0, C.Z)([
          "\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  gap: 0 0.25rem;\n  flex-direction: column;\n",
        ]);
        return (
          (tf = function () {
            return n;
          }),
          n
        );
      }
      function tm() {
        let n = (0, C.Z)(["\n          min-width: 2.2rem;\n        "]);
        return (
          (tm = function () {
            return n;
          }),
          n
        );
      }
      function tp() {
        let n = (0, C.Z)([
          "\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  gap: 0 0.25rem;\n  flex-direction: column;\n\n  > p {\n    margin-top: 0.25rem;\n    font-family: ",
          ";\n    font-weight: 700;\n    font-size: 0.75rem;\n    color: var(--neutral-white);\n    justify-content: flex-end;\n    display: flex;\n    margin-right: ",
          ";\n\n    ",
          "\n  }\n",
        ]);
        return (
          (tp = function () {
            return n;
          }),
          n
        );
      }
      function tg() {
        let n = (0, C.Z)([
          "\n  margin-right: 100%;\n  position: absolute;\n  top: 4px;\n  left: calc(",
          " - 4px);\n  opacity: 100%;\n  display: none;\n",
        ]);
        return (
          (tg = function () {
            return n;
          }),
          n
        );
      }
      function th() {
        let n = (0, C.Z)([
          "\n  position: relative;\n  width: 4rem;\n  height: 0.5rem;\n  background: #222; // Dark background for the whole bar\n  border-radius: 1.25rem;\n  overflow: hidden;\n",
        ]);
        return (
          (th = function () {
            return n;
          }),
          n
        );
      }
      function tx() {
        let n = (0, C.Z)([
          "\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: ",
          ";\n  border-radius: 1.25rem;\n  background: linear-gradient(\n    to right,\n    #0ecb81 8.4%,\n    #ff9900 45.4%,\n    #ff9900 57.4%,\n    #f6465d 92.9%\n  );\n\n  background-size: 4rem 100%; // Stretch the gradient to fill the full width of the bar\n  background-clip: content-box;\n",
        ]);
        return (
          (tx = function () {
            return n;
          }),
          n
        );
      }
      function ty() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 0.25rem 0;\n  margin: 0.5rem 0;\n",
        ]);
        return (
          (ty = function () {
            return n;
          }),
          n
        );
      }
      function tb() {
        let n = (0, C.Z)([
          "\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  border-radius: 0.25rem;\n\n  background: var(\n    --Glass_Fill,\n    linear-gradient(\n      133deg,\n      rgba(90, 255, 243, 0.3) 1.71%,\n      rgba(90, 255, 243, 0.03) 98.28%\n    )\n  );\n  margin-bottom: 0.5rem;\n",
        ]);
        return (
          (tb = function () {
            return n;
          }),
          n
        );
      }
      function tA() {
        let n = (0, C.Z)(["\n  margin-top: 0.5rem;\n  width: 100%;\n"]);
        return (
          (tA = function () {
            return n;
          }),
          n
        );
      }
      let tw = j.ZP.div.withConfig({
          displayName: "TradeInfo.styles__Container",
          componentId: "sc-d62f0f7-0",
        })(
          td(),
          (n) => {
            let { theme: e } = n;
            return e.components.tradeConsole.tradeInfo.background;
          },
          I.i
        ),
        tv = j.ZP.p.withConfig({
          displayName: "TradeInfo.styles__LabelStyled",
          componentId: "sc-d62f0f7-1",
        })(tc(), I.i),
        tC = j.ZP.p.withConfig({
          displayName: "TradeInfo.styles__ValueStyled",
          componentId: "sc-d62f0f7-2",
        })(
          tu(),
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          I.i,
          I.i,
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          }
        ),
        tj = j.ZP.div.withConfig({
          displayName: "TradeInfo.styles__ProgressBarContainer",
          componentId: "sc-d62f0f7-3",
        })(tf()),
        tI = j.ZP.div.withConfig({
          displayName: "TradeInfo.styles__MarginContent",
          componentId: "sc-d62f0f7-4",
        })(
          tp(),
          I.i,
          (n) => {
            let { $progressPercentage: e } = n;
            return "0" === e ? "-0.2rem" : "unset";
          },
          (n) => {
            let { $isHidden: e } = n;
            if (e) return (0, j.iv)(tm());
          }
        ),
        tP = j.ZP.div.withConfig({
          displayName: "TradeInfo.styles__ArrowContainer",
          componentId: "sc-d62f0f7-5",
        })(tg(), (n) => {
          let { $progressPercentage: e } = n;
          return e;
        }),
        tk = j.ZP.div.withConfig({
          displayName: "TradeInfo.styles__ProgressBarWrapper",
          componentId: "sc-d62f0f7-6",
        })(th()),
        tB = j.ZP.div.withConfig({
          displayName: "TradeInfo.styles__ProgressBar",
          componentId: "sc-d62f0f7-7",
        })(tx(), (n) => {
          let { $progressPercentage: e } = n;
          return e;
        }),
        tT = j.ZP.div.withConfig({
          displayName: "TradeInfo.styles__AccountLeverageContainer",
          componentId: "sc-d62f0f7-8",
        })(ty()),
        t_ = j.ZP.div.withConfig({
          displayName: "TradeInfo.styles__MarginConsoleContainer",
          componentId: "sc-d62f0f7-9",
        })(tb()),
        tZ = j.ZP.div.withConfig({
          displayName: "TradeInfo.styles__AccountBalanceContainer",
          componentId: "sc-d62f0f7-10",
        })(tA()),
        tS = {
          Container: tw,
          ProgressBarContainer: tj,
          ProgressBar: tB,
          AccountLeverageContainer: tT,
          LabelStyled: tv,
          ValueStyled: tC,
        },
        tN = (n) => {
          let { isHidden: e, leverage: t, expectedLeverage: i } = n;
          return (0, r.jsxs)(tS.AccountLeverageContainer, {
            children: [
              (0, r.jsxs)("div", {
                "data-testid": "account-leverage",
                children: [
                  (0, r.jsx)(tS.LabelStyled, { children: "Account Leverage" }),
                  (0, r.jsxs)(tS.ValueStyled, {
                    children: [
                      e ? "--/--" : "".concat((0, d.Bw)(t), "x"),
                      " ",
                      !e && !!i && "-> ".concat((i / 1e18).toFixed(0), "x"),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "278",
                height: "2",
                viewBox: "0 0 278 2",
                fill: "none",
                children: (0, r.jsx)("path", {
                  d: "M0 1H260",
                  stroke: "#5AFFF3",
                  strokeOpacity: "0.15",
                }),
              }),
            ],
          });
        };
      var tz = {
          src: "/_next/static/media/eye-closed.a046dd07.webp",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/webp;base64,UklGRqwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDcAAAABd6CojRQ4urvA7zSAEyIiEEt7pZzkCapq24bePAXwLYoKGimig2BqkCGi/wnfJcPP3dVnY3gAAFZQOCBOAAAAkAEAnQEqCAAIAAJAOCWoNsAQ4AigAP7tscR+wLFXSkV++PurTg++brz+/358vh+4r+rnjn9/xYu2VFvbd+tr/8JqSDjp+/ZU/+VE4gAA",
          blurWidth: 8,
          blurHeight: 8,
        },
        tM = {
          src: "/_next/static/media/eye-opened.09fb4b6f.webp",
          height: 48,
          width: 48,
          blurDataURL:
            "data:image/webp;base64,UklGRrAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDwAAAABZ6AmAAg2Zu+LLCIi4Khx8BcNEYiy7cW3jQ4quIkggtuuSiwINUiggoIR/Q8AujHuyyu87vAyz8+0BABWUDggTgAAADACAJ0BKggACAACQDglqAJ0bX8CyJ/sSGmAAP7zqUMqdj1R/WIm+jZEjQmZyNAB+ASJYi9a6TJ00guD6//J79n+oibxfX8EPUfegAAAAA==",
          blurWidth: 8,
          blurHeight: 8,
        };
      function tL() {
        let n = (0, C.Z)(["\n  cursor: pointer;\n"]);
        return (
          (tL = function () {
            return n;
          }),
          n
        );
      }
      function tD() {
        let n = (0, C.Z)([
          "\n  font-size: 0.875rem;\n  display: flex;\n  gap: 0.25rem;\n",
        ]);
        return (
          (tD = function () {
            return n;
          }),
          n
        );
      }
      let tF = j.ZP.div.withConfig({
          displayName: "EyesToHide.styles__EyesToHideContainer",
          componentId: "sc-972a6164-0",
        })(tL()),
        tR = j.ZP.h2.withConfig({
          displayName: "EyesToHide.styles__AccountConsoleTitle",
          componentId: "sc-972a6164-1",
        })(tD()),
        tE = (n) => {
          let { isHidden: e } = n,
            t = (0, o.Zl)(en.D),
            { accountIdsStates: i } = (0, Q.O)(),
            a = null == i ? void 0 : i.accountIdSelected;
          return (0, r.jsxs)(tR, {
            children: [
              a ? "Account #".concat(a) : "Account -",
              (0, r.jsx)(tF, {
                children: e
                  ? (0, r.jsx)("img", {
                      src: tz.src,
                      alt: "opened eye",
                      width: 16,
                      onClick: () => {
                        t((n) => ({ ...n, isHidden: !1 }));
                      },
                    })
                  : (0, r.jsx)("img", {
                      src: tM.src,
                      alt: "closed eye",
                      width: 16,
                      onClick: () => {
                        t((n) => ({ ...n, isHidden: !0 }));
                      },
                    }),
              }),
            ],
          });
        },
        tU = (n) => {
          let {
              isHidden: e,
              initialMargin: t,
              currentImPercentage: i,
              totalExpectedImPercentage: o,
            } = n,
            a = e || i === -1 / 0 || void 0 === t;
          return (0, r.jsxs)(t_, {
            "data-testid": "initial-margin",
            children: [
              (0, r.jsx)(tS.LabelStyled, { children: "Initial Margin" }),
              (0, r.jsxs)(tI, {
                $isHidden: e || !t,
                $progressPercentage: e || !t ? "0" : "".concat(t, "%"),
                children: [
                  (0, r.jsxs)(tS.ProgressBarContainer, {
                    children: [
                      (0, r.jsx)(tk, {
                        children: (0, r.jsx)(tS.ProgressBar, {
                          $progressPercentage: "100%",
                        }),
                      }),
                      (0, r.jsx)(tP, {
                        $progressPercentage: "".concat(t, "%"),
                        children:
                          !e &&
                          !a &&
                          (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "8",
                            height: "6",
                            viewBox: "0 0 8 6",
                            fill: "none",
                            children: (0, r.jsx)("path", {
                              d: "M4 0L7.4641 6H0.535898L4 0Z",
                              fill: "#5AFFF3",
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("p", {
                    children: [
                      a ? "--/--" : "".concat((0, d.Bw)(i), "%"),
                      !e && Boolean(o) && "-> ".concat((0, d.Bw)(o), "%"),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        tV = (n) => {
          let {
              isHidden: e,
              maintenanceMargin: t,
              expectedMaintenanceMargin: i,
            } = n,
            o = e || void 0 === t;
          return (0, r.jsxs)(t_, {
            "data-testid": "maintenance-margin",
            children: [
              (0, r.jsx)(tS.LabelStyled, { children: "Maintenance Margin" }),
              (0, r.jsxs)(tI, {
                $isHidden: e || !t,
                $progressPercentage: e || !t ? "0" : "".concat(t, "%"),
                children: [
                  (0, r.jsxs)(tS.ProgressBarContainer, {
                    children: [
                      (0, r.jsx)(tk, {
                        children: (0, r.jsx)(tS.ProgressBar, {
                          $progressPercentage: "100%",
                        }),
                      }),
                      (0, r.jsx)(tP, {
                        $progressPercentage: "".concat(t, "%"),
                        children:
                          !e &&
                          !o &&
                          (0, r.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "8",
                            height: "6",
                            viewBox: "0 0 8 6",
                            fill: "none",
                            children: (0, r.jsx)("path", {
                              d: "M4 0L7.4641 6H0.535898L4 0Z",
                              fill: "#5AFFF3",
                            }),
                          }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("p", {
                    children: [
                      o ? "--/--" : "".concat((0, d.Bw)(t), "%"),
                      !e &&
                        Boolean(i) &&
                        i !== 1 / 0 &&
                        " -> ".concat((0, d.Bw)(i), "%"),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        tQ = () => {
          let { currentPrice: n } = (0, ei.D)(),
            { isActive: e } = (0, Q.O)(),
            {
              isHidden: t,
              maintenanceMargin: i,
              initialMargin: a,
              availableBalance: l = 0,
              marginBalance: s,
              value: c,
              orderBySize: u,
              maxLeverage: f,
              maintenanceMarginRate: m,
              orderFeePercentage: p,
              settlementFee: g,
              mode: h,
            } = (0, o.sJ)(en.D),
            x = (100 * ((s - l) * f)) / (s * f),
            y = u ? nl(c) * n : nl(c),
            b = y + y * ("Short" === h ? 2 * p : p) + g,
            A = l && 100 - (100 * l) / s;
          return (0, r.jsxs)(tS.Container, {
            children: [
              (0, r.jsx)(tE, { isHidden: t }),
              (0, r.jsx)(tN, {
                isHidden: t || !e,
                leverage: x,
                expectedLeverage: (((100 * b) / (s * f) + x) / 100) * f,
              }),
              (0, r.jsx)(tV, {
                isHidden: t,
                maintenanceMargin: i,
                expectedMaintenanceMargin: b ? ((100 * b) / (s * f)) * m : 0,
              }),
              (0, r.jsx)(tU, {
                isHidden: t || !e,
                initialMargin: a,
                currentImPercentage: A,
                totalExpectedImPercentage: A + (100 * b) / (l * f),
              }),
              (0, r.jsx)("div", {
                children: (0, r.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "280",
                  height: "2",
                  viewBox: "0 0 260 2",
                  fill: "none",
                  children: (0, r.jsx)("path", {
                    d: "M0 1H260",
                    stroke: "#5AFFF3",
                    strokeOpacity: "0.15",
                  }),
                }),
              }),
              (0, r.jsxs)(tZ, {
                "data-testid": "margin-balance",
                children: [
                  (0, r.jsx)(tS.LabelStyled, { children: "Margin Balance" }),
                  (0, r.jsx)(tS.ValueStyled, {
                    children: t || !s ? "--/--" : (0, d.n9)(s),
                  }),
                ],
              }),
              (0, r.jsxs)(tZ, {
                "data-testid": "available-balance",
                children: [
                  (0, r.jsx)(tS.LabelStyled, { children: "Available Balance" }),
                  (0, r.jsx)(tS.ValueStyled, {
                    children: t || !l ? "--/--" : (0, d.n9)(l),
                  }),
                ],
              }),
            ],
          });
        };
      function tH() {
        let n = (0, C.Z)([
          "\n  position: relative;\n  padding: 0.5rem;\n  width: 100%;\n  background: ",
          ";\n  margin: 0.6rem 0 1rem 0;\n  border-radius: 0.25rem;\n  color: var(--secondary);\n  transition: all 0.2s ease;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n\n  div {\n    display: flex;\n    justify-content: space-between;\n\n    small {\n      color: var(--secondary);\n      font-family: ",
          ";\n      font-weight: 400;\n      font-size: 0.875rem;\n    }\n\n    > span {\n      color: var(--neutral-white);\n      font-family: ",
          ";\n      font-weight: 700;\n      font-size: 0.875rem;\n      display: flex;\n      gap: 0 0.25rem;\n      > p {\n        font-family: ",
          ";\n        font-weight: 400;\n        color: var(--neutral-white);\n      }\n    }\n  }\n",
        ]);
        return (
          (tH = function () {
            return n;
          }),
          n
        );
      }
      let t$ = j.ZP.div.withConfig({
          displayName: "OrderModeInfo.styles__OrderModeInfoStyles",
          componentId: "sc-853011fa-0",
        })(
          tH(),
          (n) => {
            let { theme: e } = n;
            return e.components.tradeConsole.tradeInfo.background;
          },
          I.i,
          I.i,
          I.i
        ),
        tO = (n) => {
          let {
              positionSize: e,
              valueBySize: t,
              costValueByValue: i,
              costValueBySize: l,
              children: c,
            } = n,
            {
              orderByValue: u,
              orderFeePercentage: f,
              settlementFee: m,
              mode: p,
              orderBySize: g,
              leverage: h,
              maxLeverage: x,
            } = (0, o.sJ)(en.D),
            y = (0, o.sJ)(a.Y4),
            b = x || 50,
            A = g ? l * h : i,
            w = "Short" === p ? 2 * f * A + m : f * A + m;
          return (0, r.jsxs)(t$, {
            children: [
              (0, r.jsxs)("div", {
                children: [
                  (0, r.jsxs)("small", {
                    children: [" ", u ? "Size" : "Value"],
                  }),
                  (0, r.jsxs)("span", {
                    children: [
                      u
                        ? 0 !== e
                          ? (0, d.T5)(e, u ? 5 : 2)
                          : "-"
                        : 0 !== t
                        ? (0, d.T5)(t, u ? 5 : 2)
                        : "-",
                      (0, r.jsxs)("p", {
                        children: [" ", u && y ? (0, s.A3)(y) : "USD"],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)("small", { children: "Margin Cost" }),
                  (0, r.jsxs)("span", {
                    children: [
                      u
                        ? Boolean(i)
                          ? (0, d.Bw)(((i + w) / b).toString())
                          : "-"
                        : Boolean(l)
                        ? (0, d.Bw)((l * h + w) / b)
                        : "-",
                      (0, r.jsx)("p", { children: " USD" }),
                    ],
                  }),
                ],
              }),
              c,
            ],
          });
        };
      function tJ() {
        let n = (0, C.Z)([
          "\n  width: 100%;\n  display: flex;\n  gap: 0px 0.125rem;\n  align-items: center;\n  justify-content: center;\n  margin: 0.7rem 0px 0.1rem;\n",
        ]);
        return (
          (tJ = function () {
            return n;
          }),
          n
        );
      }
      function tW() {
        let n = (0, C.Z)([
          "\n  background: ",
          ";\n  border: none;\n  color: ",
          ";\n  padding: 0.2rem 0.6rem;\n  font-size: 0.75rem;\n  transition: 0.2s all ease;\n  font-family: ",
          ";\n  font-weight: 700;\n  text-transform: uppercase;\n  opacity: ",
          ";\n  cursor: ",
          ";\n  border-top-left-radius: ",
          ";\n  border-bottom-left-radius: ",
          ";\n  border-top-right-radius: ",
          ";\n  border-bottom-right-radius: ",
          ";\n\n  &:hover {\n    color: ",
          ";\n    background: ",
          ";\n    opacity: 0.5;\n  }\n  width: 100%;\n",
        ]);
        return (
          (tW = function () {
            return n;
          }),
          n
        );
      }
      let tG = j.ZP.div.withConfig({
          displayName: "SegmentedControl.styles__Container",
          componentId: "sc-679c0e55-0",
        })(tJ()),
        tY = j.ZP.button.withConfig({
          displayName: "SegmentedControl.styles__Control",
          componentId: "sc-679c0e55-1",
        })(
          tW(),
          (n) => {
            let { $isSelected: e, theme: t } = n;
            return e ? "var(--secondary)" : t.colors.shared["02"];
          },
          (n) => {
            let { $isSelected: e } = n;
            return e ? "var(--primary-900)" : "var(--secondary)";
          },
          I.i,
          (n) => {
            let { $isDisabled: e } = n;
            return e ? "0.5" : "1";
          },
          (n) => {
            let { $isDisabled: e } = n;
            return e ? "not-allowed" : "pointer";
          },
          (n) => {
            let { $hasLeftBorderRadius: e } = n;
            return e ? "0.25rem" : "0";
          },
          (n) => {
            let { $hasLeftBorderRadius: e } = n;
            return e ? "0.25rem" : "0";
          },
          (n) => {
            let { $hasRightBorderRadius: e } = n;
            return e ? "0.25rem" : "0";
          },
          (n) => {
            let { $hasRightBorderRadius: e } = n;
            return e ? "0.25rem" : "0";
          },
          (n) => {
            let { $isDisabled: e } = n;
            return e ? n3.y0.secondary[1100] : n3.y0.secondary[900];
          },
          (n) => {
            let { $isDisabled: e, theme: t } = n;
            return e
              ? t.components.segmentedControl.background
              : n3.y0.secondary[1100];
          }
        ),
        tX = { Container: tG, Control: tY };
      var tK = t(68526);
      let tq = (n) => {
        let {
            selectedButtons: e,
            setSelectedButtons: t,
            selectedMarketPrice: a,
            orderByValue: l,
            tokenBalance: s,
            $isDisabled: d,
            multiplier: c = 1,
          } = n,
          { currentPrice: u } = (0, ei.D)(),
          { handlePercentage: f } = (0, ea.d)(),
          [m, p] = (0, o.FV)(en.D),
          {
            value: g,
            leverage: h,
            marginBalance: x,
            availableBalance: y = 0,
            maxLeverage: b,
            orderFeePercentage: A,
            settlementFee: w,
            mode: v,
          } = m,
          { valueBySize: C } = ni(g, u, h);
        (0, i.useEffect)(() => {
          (0, tK.Dc)({
            value: l ? Number(g.replaceAll(",", "")) : C,
            availableBalance: y,
            setSelectedButtons: t,
            sliceStart: 1,
            sliceEnd: 5,
            leverage: h,
            maxLeverage: b,
            orderFeePercentage: ("Long" === v ? 1 : 2) * A,
            settlementFee: w,
          });
        }, [g, t, x]);
        let j = (n) => {
          var e;
          let t =
            null == n
              ? void 0
              : null === (e = n.target) || void 0 === e
              ? void 0
              : e.value;
          if (t) {
            let n = Number(t) * h;
            p((e) => ({
              ...e,
              value: String(n.toFixed(1)),
              sizeValue: String(n.toFixed(1)),
            }));
          }
        };
        return (0, r.jsx)(tX.Container, {
          children: tK.H6.slice(1).map((n, t) =>
            (0, r.jsx)(
              tX.Control,
              {
                $isDisabled: d,
                $hasLeftBorderRadius: 0 === t,
                $hasRightBorderRadius: 3 === t,
                $isSelected: e.includes(n.id),
                onClick: d
                  ? () => {}
                  : () =>
                      (0, tK.or)({
                        clickedId: n.id,
                        desiredFunction: async () => {
                          await f({
                            percentage: n.percentage,
                            tokenContract: K.mr,
                            setTokenBalanceValue: () => {},
                            hasSize: !l,
                            currentCoinPrice: a,
                            amountBalance: s || 0,
                            onChangeValue: j,
                            multiplier: c,
                            orderFee: ("Long" === v ? 1 : 2) * A,
                            settlementFee: w,
                          });
                        },
                      }),
                children: n.value,
              },
              n.id
            )
          ),
        });
      };
      var t0 = t(52390);
      let t5 = () => {
          var n, e, t, l;
          let { isConnected: s } = es(),
            { currentPrice: c } = (0, ei.D)(),
            [u, f] = p(),
            { setIsOpen: m } = (0, F.d)(),
            [g, h] = (0, i.useState)([]),
            { date: y } = er({ targetDate: K.lI }),
            [b, A] = (0, o.FV)(en.D),
            C = (0, o.sJ)(a.xY),
            j = (0, i.useRef)(),
            I = null == C ? void 0 : C.marketId,
            P = null == C ? void 0 : C.simplifiedSymbol,
            {
              orderType: k,
              orderByValue: B,
              value: T,
              leverage: _,
              availableBalance: Z = 0,
              settlementFee: S,
              orderFeePercentage: N,
              mode: z,
            } = b,
            {
              valueBySize: M,
              positionSize: L,
              costValueBySize: D,
              costValueByValue: R,
            } = ni(T, c, _),
            E =
              !(null === (n = j.current) || void 0 === n ? void 0 : n.value) ||
              0 ===
                Number(
                  null === (e = j.current) || void 0 === e ? void 0 : e.value
                ) ||
              (null === (t = j.current) || void 0 === t ? void 0 : t.value) ===
                "." ||
              (null === (l = j.current) || void 0 === l ? void 0 : l.value) <
                250 ||
              !na() ||
              (B ? R / _ : D) > Z ||
              Number(y) > 0,
            U = () => f({ ...u, consoleTrade: !u.consoleTrade }),
            V = (n) => {
              na() && A((e) => ({ ...e, orderType: n, shouldOpenModal: !1 }));
            },
            Q = () => {
              na() && m({ name: "orderPreferences" });
            },
            H = (n) => {
              let e = n.target.value;
              if (!s) {
                A((n) => ({ ...n, value: e }));
                return;
              }
              let t = B ? Number(e) : Number(e) * c,
                r = ((Z - S) * _) / (1 + ("Long" === z ? 1 : 2) * N);
              if (t > r) {
                let n = r / c;
                A((t) => ({ ...t, value: B ? e : String(n) }));
              } else A((n) => ({ ...n, value: e }));
            },
            $ = (n) => {
              na() &&
                m({
                  name: "confirmPosition",
                  props: {
                    amount: j.current.value,
                    orderType: k,
                    mode: n,
                    orderSize: B ? L : T,
                    orderValue: B ? T : Number(M),
                    orderCost: B ? R : D,
                    orderLeverage: _,
                    liqPrice: nr(n, c, _),
                    marketId: I,
                  },
                });
            };
          return (0, r.jsxs)(v.x, {
            width: "18.5rem",
            padding: "0.5rem",
            degree: "120",
            borderRadius: "0.5rem",
            height: u.consoleTrade ? "40.5rem" : "4.4rem",
            className: "trade-console",
            children: [
              (0, r.jsxs)(ta.Expand, {
                $expanded: u.consoleTrade,
                children: [
                  (0, r.jsx)("img", {
                    src: w.src,
                    alt: "arrow down",
                    width: 24,
                    height: 24,
                    onClick: U,
                  }),
                  (0, r.jsx)("img", {
                    src: w.src,
                    alt: "arrow down",
                    width: 24,
                    height: 24,
                    onClick: U,
                  }),
                ],
              }),
              u.consoleTrade
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsxs)(ta.Header, {
                        children: [
                          (0, r.jsx)("p", { children: "Cross Margin" }),
                          (0, r.jsxs)(ta.LeverageButton, {
                            onClick: () => m({ name: "marginLeverage" }),
                            disabled: !na() || !s,
                            "data-testid": t1,
                            children: [
                              "Leverage: ",
                              (0, r.jsxs)("b", {
                                children: [(0, d.pZ)(_), "x"],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)(ta.ConsoleButtonsContainer, {
                        children: [
                          (0, r.jsx)(ta.LongButton, {
                            $selected: "Long" === z,
                            onClick: () =>
                              A((n) => ({ ...n, mode: "Long", value: "" })),
                            children: "Buy/Long",
                          }),
                          (0, r.jsx)(ta.ShortButton, {
                            $selected: "Short" === z,
                            onClick: () =>
                              A((n) => ({ ...n, mode: "Short", value: "" })),
                            children: "Sell/Short",
                          }),
                        ],
                      }),
                      (0, r.jsxs)(ta.Tabs, {
                        children: [
                          (0, r.jsxs)(ta.Tab, {
                            onClick: () => V("MARKET"),
                            $active: "MARKET" === k,
                            children: [
                              "Market",
                              (0, r.jsxs)(X.u, {
                                $boxTop: "-78px",
                                $boxLeft: "0px",
                                $arrowBottom: "0px",
                                $arrowLeft: "10px",
                                $width: "8.81rem",
                                children: [
                                  " A market order is an order to buy or sell a stock at the\n                market's current best available price.",
                                  (0, r.jsx)("p", {}),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsxs)(ta.TabLimit, {
                            $active: "LIMIT" === k,
                            "data-testid": t2,
                            children: [
                              (0, r.jsxs)(X.u, {
                                $boxTop: "-40px",
                                $boxLeft: "0px",
                                $arrowBottom: "0px",
                                $arrowLeft: "10px",
                                $width: "8rem",
                                children: [
                                  "Feature available soon",
                                  (0, r.jsx)("p", {}),
                                ],
                              }),
                              "Limit",
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)(ta.ItemsContainer, {
                        children: [
                          "LIMIT" === k ? (0, r.jsx)(tl, {}) : null,
                          (0, r.jsxs)(eX, {
                            children: [
                              (0, r.jsxs)("button", {
                                onClick: Q,
                                "data-testid": t8,
                                children: [
                                  "Order By ",
                                  B ? "Value" : "Size",
                                  (0, r.jsx)("img", {
                                    src: ec.Z.src,
                                    alt: "arrow-down",
                                    width: 20,
                                  }),
                                ],
                              }),
                              (0, r.jsx)("img", {
                                src: ed.src,
                                alt: "calculator",
                                className: "info",
                                width: 20,
                              }),
                            ],
                          }),
                          (0, r.jsx)(ta.Item, {
                            children: (0, r.jsxs)("div", {
                              children: [
                                (0, r.jsx)("input", {
                                  "data-testid": "value",
                                  type: "value",
                                  placeholder: "0",
                                  value: T,
                                  onChange: H,
                                  ref: j,
                                  onKeyDown: t0._,
                                  disabled: !na() || !c,
                                }),
                                (0, r.jsx)("p", {
                                  children: B || !I ? "USD" : P,
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)(tq, {
                        selectedButtons: g,
                        selectedMarketPrice: c,
                        setSelectedButtons: h,
                        orderByValue: B,
                        tokenBalance: Z,
                        $isDisabled: !c || !na() || !s,
                        multiplier: _,
                      }),
                      (0, r.jsx)(tO, {
                        positionSize: L,
                        valueBySize: M,
                        costValueByValue: R,
                        costValueBySize: D,
                        children: (0, r.jsx)(ta.TPSLContainer, {
                          children: (0, r.jsxs)(ta.TPSLBlock, {
                            children: [
                              (0, r.jsx)(ta.TPSL, {}),
                              (0, r.jsxs)(X.u, {
                                $boxTop: "-55px",
                                $boxLeft: "0px",
                                $arrowBottom: "0px",
                                $arrowLeft: "10px",
                                $width: "10.8rem",
                                $height: "41px",
                                children: [
                                  "Feature available soon",
                                  (0, r.jsx)("small", {}),
                                ],
                              }),
                              (0, r.jsx)("p", { children: "TP/SL" }),
                            ],
                          }),
                        }),
                      }),
                      (0, r.jsxs)(ta.ModeContainer, {
                        $disabled: E,
                        children: [
                          (0, r.jsx)(eu.z.StandardDefault, {
                            $fontSize: "0.875rem",
                            height: "2rem",
                            width: "100%",
                            disabled: !0,
                            dataTestId: t4,
                            onClick: () => $(z),
                            children: "Coming Soon",
                          }),
                          (0, r.jsxs)(X.u, {
                            $boxTop: "-5rem",
                            $boxLeft: "0px",
                            $arrowBottom: "0px",
                            $arrowLeft: "10px",
                            $width: "100%",
                            $fontSize: "0.8rem",
                            $id: "create-order",
                            children: ["Available soon.", (0, r.jsx)("p", {})],
                          }),
                        ],
                      }),
                      (0, r.jsx)(ta.MinimumTrade, {
                        children: (0, r.jsx)("span", {
                          children:
                            "The minimum value to open a position is $250",
                        }),
                      }),
                      (0, r.jsx)("div", { style: { flexGrow: 1 } }),
                      (0, r.jsx)(tQ, {}),
                    ],
                  })
                : null,
            ],
          });
        },
        t1 = "cross-button",
        t2 = "limit-tab",
        t8 = "order-by-button",
        t4 = "create-order-button";
      var t7 = t(67624);
      let t3 = f()(
          () =>
            t
              .e(1303)
              .then(t.bind(t, 21303))
              .then((n) => n.TradingViewChart),
          { loadableGenerated: { webpack: () => [21303] }, ssr: !1 }
        ),
        t6 = f()(
          () =>
            Promise.all([t.e(9153), t.e(3534)])
              .then(t.bind(t, 3534))
              .then((n) => n.InfoCoin),
          { loadableGenerated: { webpack: () => [3534] }, ssr: !1 }
        ),
        t9 = () => {
          let [n] = p();
          return (
            (0, g.x)(),
            (0, r.jsxs)(t7.j.Container, {
              $expanded: n.consoleTrade,
              children: [
                (0, r.jsxs)(t7.j.ContainerInfoCoin, {
                  children: [
                    (0, r.jsx)(t6, {}),
                    (0, r.jsxs)("div", {
                      id: "chart",
                      children: [
                        (0, r.jsx)(t7.M, {
                          $expanded: n.positions,
                          children: (0, r.jsx)(t3, {}),
                        }),
                        (0, r.jsx)("div", {
                          className: "infos-trade",
                          children: (0, r.jsx)(nR, {}),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)(t7.j.Content, {
                  $expanded: n.consoleTrade,
                  children: (0, r.jsxs)("div", {
                    id: "trade-console",
                    children: [
                      (0, r.jsx)(t5, {}),
                      (0, r.jsx)("div", {
                        id: "recent-trades",
                        children: (0, r.jsx)(n9, {}),
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        };
      var rn = !0;
      function re(n) {
        let { symbol: e, interval: t } = n,
          i = c(e, t);
        return i ? (0, r.jsx)(t9, {}) : null;
      }
    },
    67624: function (n, e, t) {
      "use strict";
      t.d(e, {
        M: function () {
          return h;
        },
        j: function () {
          return x;
        },
      });
      var r = t(7297),
        i = t(15437);
      function o() {
        let n = (0, r.Z)([
          "\n  width: 100%;\n  overflow-x: hidden;\n  /* padding: ",
          "; */\n  display: flex;\n  flex-wrap: nowrap;\n  margin-top: 0.3rem;\n  gap: 0.25rem;\n  margin-bottom: 2rem;\n\n  .info-coin {\n    width: ",
          ";\n    min-width: auto;\n  }\n\n  .trade-console {\n    margin-left: ",
          ";\n    ",
          "\n\n    #chart {\n      width: ",
          ";\n    }\n  }\n",
        ]);
        return (
          (o = function () {
            return n;
          }),
          n
        );
      }
      function a() {
        let n = (0, r.Z)([
          "\n  width: 100%;\n  height: calc(100% - 3rem);\n\n  iframe {\n    border-bottom-left-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n  }\n\n  opacity: 1;\n  ",
          "\n  transition: all 0.5s ease-out;\n",
        ]);
        return (
          (a = function () {
            return n;
          }),
          n
        );
      }
      function l() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  align-items: start;\n\n  gap: 0.5rem;\n\n  #trade-console {\n    width: ",
          ";\n    transition: all 0.2s;\n  }\n\n  #recent-trades {\n    display: ",
          ";\n  }\n",
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      function s() {
        let n = (0, r.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  min-height: fit-content;\n  width: 100%;\n  gap: 0.25rem;\n  margin-bottom: 0.5rem;\n",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        let n = (0, r.Z)([
          "\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  width: 100%;\n  height: 100%;\n",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function c() {
        let n = (0, r.Z)([
          "\n  position: relative;\n  width: 100%;\n  border-radius: 0.5rem;\n  height: ",
          ";\n  padding: 0rem;\n\n  background: linear-gradient(\n    133deg,\n    rgba(128, 128, 128, 0.3) 1.71%,\n    rgba(128, 128, 128, 0.05) 98.28%\n  );\n  transition: all 0.2s;\n",
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      let u = i.ZP.div.withConfig({
          displayName: "Trade.styles__Container",
          componentId: "sc-9bf67c2c-0",
        })(
          o(),
          (n) => {
            let { $expanded: e } = n;
            return e ? "0.5rem 0 0 0" : "0";
          },
          (n) => {
            let { $expanded: e } = n;
            return e ? "100%" : "calc(100% - 1.75rem)";
          },
          (n) => {
            let { $expanded: e } = n;
            return e ? "0" : "-1.8rem";
          },
          (n) => {
            let { $expanded: e, theme: t } = n;
            return e
              ? null
              : "\n        background: linear-gradient(133deg, rgba(90, 255, 243, 0.30) 1.71%, rgba(90, 255, 243, 0.03) 98.28%);\n        width: 3.5rem;\n        min-width: auto;\n\n        ::before {\n          content: '';\n          z-index: -1;\n          position: absolute;\n          inset: 0;\n          border-radius: 0.5rem;\n          padding: 0.08rem;\n          background: linear-gradient(\n            230deg,\n            "
                  .concat(t.colors.secondary["900"], " 50%,\n            ")
                  .concat(
                    t.colors.secondary["200"],
                    " 100.08%\n          );\n          -webkit-mask: linear-gradient("
                  )
                  .concat(
                    t.colors.neutral.white,
                    " 0 0) content-box,\n            linear-gradient("
                  )
                  .concat(
                    t.colors.neutral.white,
                    " 0 0);\n          -webkit-mask-composite: xor;\n          mask-composite: exclude;\n        }\n      "
                  );
          },
          (n) => {
            let { $expanded: e } = n;
            return e ? "100%" : "calc(100% + 0.5rem)";
          }
        ),
        f = i.ZP.div.withConfig({
          displayName: "Trade.styles__ContainerTrade",
          componentId: "sc-9bf67c2c-1",
        })(a(), (n) => {
          let { $isHidden: e } = n;
          return e && "\n      opacity: 0;\n\n    ";
        }),
        m = i.ZP.div.withConfig({
          displayName: "Trade.styles__Content",
          componentId: "sc-9bf67c2c-2",
        })(
          l(),
          (n) => {
            let { $expanded: e } = n;
            return e ? "18.5rem" : "0.5rem";
          },
          (n) => {
            let { $expanded: e } = n;
            return e ? "block" : "none !important";
          }
        ),
        p = i.ZP.div.withConfig({
          displayName: "Trade.styles__ContainerInfoCoin",
          componentId: "sc-9bf67c2c-3",
        })(s()),
        g = i.ZP.div.withConfig({
          displayName: "Trade.styles__Loading",
          componentId: "sc-9bf67c2c-4",
        })(d()),
        h = i.ZP.div.withConfig({
          displayName: "Trade.styles__TradingViewBox",
          componentId: "sc-9bf67c2c-5",
        })(c(), (n) => {
          let { $expanded: e } = n;
          return e ? "35.6rem" : "51.5rem";
        }),
        x = {
          Container: u,
          Content: m,
          ContainerInfoCoin: p,
          ContainerTrade: f,
          Loading: g,
        };
    },
    15177: function (n, e, t) {
      "use strict";
      t.d(e, {
        g: function () {
          return a;
        },
      });
      var r = t(85893),
        i = t(24561),
        o = t(96964);
      let a = () =>
        (0, r.jsxs)(i.ZP, {
          speed: 2,
          width: "100%",
          height: "100%",
          backgroundColor: o.y0.skeleton["01"],
          foregroundColor: o.y0.skeleton["02"],
          style: { padding: "0 1rem" },
          children: [
            (0, r.jsx)("rect", { width: "100%", height: "4rem", rx: 4 }),
            (0, r.jsx)("rect", {
              width: "100%",
              height: "4rem",
              y: "80",
              rx: 4,
            }),
            (0, r.jsx)("rect", {
              width: "100%",
              height: "4rem",
              y: "160",
              rx: 4,
            }),
          ],
        });
    },
    68526: function (n, e, t) {
      "use strict";
      t.d(e, {
        Dc: function () {
          return o;
        },
        H6: function () {
          return r;
        },
        or: function () {
          return i;
        },
      });
      let r = [
          { id: 0, value: "10%", percentage: "0.10" },
          { id: 1, value: "25%", percentage: "0.25" },
          { id: 2, value: "50%", percentage: "0.50" },
          { id: 3, value: "75%", percentage: "0.75" },
          { id: 4, value: "100%", percentage: "1" },
        ],
        i = (n) => {
          let { clickedId: e, desiredFunction: t } = n,
            i = r.find((n) => n.id === e);
          i && t({ percentage: i.percentage });
        },
        o = (n) => {
          let {
              value: e,
              availableBalance: t = NaN,
              setSelectedButtons: i,
              sliceStart: o,
              sliceEnd: a,
              leverage: l = 1,
              maxLeverage: s = 1,
              orderFeePercentage: d = 0,
              settlementFee: c = 0,
            } = n,
            u = r;
          void 0 !== o && (u = u.slice(o, a));
          let f =
              Math.round((e / ((t * s) / (1 + d) - c)) * (s / l) * 100) / 100,
            m = u.filter((n) => f >= Number(n.percentage)).map((n) => n.id);
          i(m);
        };
    },
  },
  function (n) {
    n.O(0, [4885, 1527, 9400, 5014, 9774, 2888, 179], function () {
      return n((n.s = 19494));
    }),
      (_N_E = n.O());
  },
]);
