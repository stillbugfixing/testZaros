"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2444],
  {
    45130: function (n, e) {
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
    90812: function (n, e, t) {
      t.d(e, {
        Cn: function () {
          return o.C;
        },
        h: function () {
          return i.h;
        },
        mA: function () {
          return r.m;
        },
      });
      var r = t(13355),
        i = t(52523);
      t(83338);
      var o = t(94205);
    },
    94762: function (n, e, t) {
      t.d(e, {
        d: function () {
          return g;
        },
      });
      var r = t(77985),
        i = t(6154),
        o = t(67294),
        a = t(55678),
        l = t(4480),
        s = t(44334),
        d = t(41976),
        c = t(23006),
        u = t(90994);
      let m = (n) => {
          let { keys: e } = n;
          return e.map((n) => {
            var e;
            return {
              key:
                null == n
                  ? void 0
                  : null === (e = n[0]) || void 0 === e
                  ? void 0
                  : e.replace("0x", ""),
              creator: null == n ? void 0 : n[1],
              activatorLabel: ""
                .concat(null == n ? void 0 : n[2].substring(0, 6), "...")
                .concat(null == n ? void 0 : n[2].substring(37)),
              activactor: null == n ? void 0 : n[2],
              available: "Used",
            };
          });
        },
        f = (n) => {
          let { userKeys: e = [], account: t } = n,
            r = e.map((n) => {
              let e = Number(n[0]) + 1,
                r = n[1].replace("0x", "zrs-");
              return {
                id: e >= 10 ? "#".concat(e) : "#0".concat(e),
                key: r,
                referral: "-",
                status: "loading",
                user: ""
                  .concat(t.substring(0, 6), "...")
                  .concat(t.substring(37)),
                full_user: t,
              };
            });
          return r;
        },
        g = () => {
          let [n, e] = (0, o.useState)(!1),
            [t, g] = (0, o.useState)("Activate"),
            h = (0, l.Zl)(c.w),
            p = (0, l.Zl)(d.kb),
            x = (0, l.Zl)(d.Jh),
            b = (0, l.Zl)(d.$h),
            [A, y] = (0, o.useState)(!1),
            [w, v] = (0, o.useState)(!1),
            { provider: C } = (0, r.useWeb3React)(),
            { account: j, accessKeyManagerContract: k } = (0, u.O)(),
            Z = async (n) => {
              let { key: e } = n;
              v(!0);
              try {
                g("Activating..."),
                  await (null == k ? void 0 : k.activateKey("0x".concat(e))),
                  y(!1),
                  v(!1),
                  h((n) => ({ ...n, isAuthenticated: !0, loading: !1 })),
                  a.Am.success(
                    "Congrats, Boosted Chad. Key activated successfully",
                    {
                      autoClose: 5e3,
                      closeOnClick: !1,
                      pauseOnHover: !1,
                      position: "bottom-right",
                    }
                  );
              } catch (n) {
                return (
                  v(!1),
                  h((n) => ({ ...n, isAuthenticated: !1, loading: !1 })),
                  a.Am.error("Error on activating key", {
                    autoClose: 5e3,
                    closeOnClick: !1,
                    pauseOnHover: !1,
                    position: "bottom-right",
                  }),
                  g("Activate"),
                  y(!0)
                );
              }
            },
            I = async () => {
              if (j)
                try {
                  let { data: n } = await (0, i.Z)(
                      "/api/spearmint/?address=".concat(j)
                    ),
                    { signature: e } = null == n ? void 0 : n.data;
                  return e;
                } catch (n) {
                  return;
                }
            },
            _ = async () => {
              try {
                if (!j) return;
                e(!0);
                let n = await z(),
                  t = await (null == k
                    ? void 0
                    : k.createKey({ availableKeys: 1 }, n));
                null == C ||
                  C.waitForTransaction(
                    (null == t ? void 0 : t.hash) || ""
                  ).then(async (n) => {
                    1 === n.status && (await B()), e(!1);
                  });
              } catch (n) {
                return;
              }
            },
            P = async () => {
              try {
                if (!j) return;
                let n = await (null == k ? void 0 : k.getUsedKeysByUser(j));
                return n;
              } catch (n) {
                return;
              }
            },
            S = async (n) => {
              let { userKeys: e = [], selectedAccount: t } = n;
              try {
                if (!t) return;
                let n = await P(),
                  r = m({ keys: n }),
                  i = await Promise.all(
                    e.map((n) => {
                      let e = r.find((e) => {
                        var t;
                        return (
                          e.key ===
                          (null === (t = n.key) || void 0 === t
                            ? void 0
                            : t.replace("zrs-", ""))
                        );
                      });
                      try {
                        if (e)
                          return {
                            ...n,
                            status: null == e ? void 0 : e.available,
                            referral: null == e ? void 0 : e.activatorLabel,
                          };
                        return { ...n, status: "New" };
                      } catch (e) {
                        return { ...n, status: "-" };
                      }
                    })
                  );
                return p([...i]), i;
              } catch (n) {
                return e;
              }
            },
            B = async () => {
              try {
                if (!j) {
                  p([]);
                  return;
                }
                x(!0);
                let n = await (null == k ? void 0 : k.getKeysByUser());
                if (Array.isArray(n) && n.length > 0) {
                  let e = f({ userKeys: n, account: j });
                  e && p(e), x(!1), S({ userKeys: e, selectedAccount: j });
                } else p([]);
              } catch (n) {
                p([]);
              } finally {
                x(!1);
              }
            },
            N = async () => {
              if (j)
                try {
                  var n;
                  let e = await z();
                  if (!e) {
                    b(0);
                    return;
                  }
                  let { data: t } = await (0, i.Z)("/api/spearmintAttestation"),
                    r = Number(
                      (null == t
                        ? void 0
                        : null === (n = t.data) || void 0 === n
                        ? void 0
                        : n[0].defaultValue) || 0
                    );
                  b(r);
                } catch (n) {
                  b(0);
                }
              else b(0);
            },
            { trigger: z } = (0, s.Z)("alpha-keys", I);
          return {
            getAttestationSchema: N,
            getUserKeys: B,
            generateKey: _,
            isLoadingGenerateKey: n,
            activateKey: Z,
            error: A,
            loading: w,
            keyText: t,
          };
        };
    },
    69409: function (n, e, t) {
      t.d(e, {
        z: function () {
          return a;
        },
      });
      var r = t(94452),
        i = t(90994);
      let o = "0x50100D8227f0840DeA0a0cD2B85075685d62F42e",
        a = (n) => {
          let { setIsOpen: e } = (0, r.d)(),
            {
              account: t,
              zarosContract: a,
              accountIdsStates: l,
              setShowChooseWalletComponent: s,
              setOpenMenuWalletComponent: d,
              setTransactionHash: c,
            } = (0, i.O)(),
            u = async () => {
              if (!t) {
                s(!0), d(!0);
                return;
              }
              try {
                var r;
                if (!l.accountIdSelected) return null;
                e({ name: "claimWaitingForConfirmation" });
                let t = await (null == a
                    ? void 0
                    : a.claimRewards.estimateGas(
                        BigInt(l.accountIdSelected),
                        n,
                        o
                      )),
                  i = await (null == a
                    ? void 0
                    : a.claimRewards(BigInt(l.accountIdSelected), n, o, {
                        gasLimit: Number(t),
                      })),
                  s = await (null === (r = i.provider) || void 0 === r
                    ? void 0
                    : r.waitForTransaction(
                        (null == i ? void 0 : i.hash) || ""
                      ));
                c(null == i ? void 0 : i.hash),
                  (null == s ? void 0 : s.status) === 1
                    ? e({ name: "mintsuccess" })
                    : e({ name: "claimerror" });
              } catch (n) {
                e({ name: "claimerror" });
              }
            };
          return { claim: u };
        };
    },
    4350: function (n, e, t) {
      t.d(e, {
        J: function () {
          return c;
        },
      });
      var r = t(67294),
        i = t(5792),
        o = t(21665),
        a = t(64173),
        l = t(95417);
      let s = (n) => ("number" == typeof n ? (0, l.n9)(n) : "-");
      var d = t(90994);
      let c = () => {
        let { accountIdsStates: n, zarosContract: e, signer: t } = (0, d.O)(),
          [c, u] = (0, r.useState)({}),
          [m, f] = (0, r.useState)(""),
          [g, h] = (0, r.useState)(!1),
          p = n.accountIdSelected,
          x = (n) => ("number" == typeof n ? s(n) : "-"),
          b = async (n) => {
            try {
              if (!p || !e || !t || !n) return;
              let r = await (null == e
                  ? void 0
                  : e.getPositionCollateral(p, n)),
                i = Number(r[0]) / 1e18,
                o = Number(r[1]);
              return {
                balance: Number.isInteger(i)
                  ? Number(i).toFixed(2).toString()
                  : i.toFixed(2).toString(),
                valueInDolar: o / 1e18,
              };
            } catch (n) {
              console.log("error getTokenBalance", n);
              return;
            }
          },
          A = async (r) => {
            try {
              let i = n.accountIdSelected;
              if (!i || !e || !t || !r) return;
              let o = await (null == e ? void 0 : e.getCollateralConfig(r)),
                a = (Number(o[2]) / 1e18).toString(),
                l = Number(o[8]) / 1e18;
              return { liquidationRatioString: a + "%", tokenCap: l };
            } catch (n) {
              console.log("error getTokenLiquidationRatio", n);
              return;
            }
          },
          y = async (r) => {
            try {
              let i = n.accountIdSelected;
              if (!i || !e || !t || !r) return;
              let o = await (null == e
                  ? void 0
                  : e.getPositionCollateralRatio.staticCall(i, r)),
                a = Number(o) / 1e18,
                l = a.toString();
              if (a > 5e3) return "Healthy";
              return l + "%";
            } catch (n) {
              console.log("error getTokenLiquidationRatio", n);
              return;
            }
          },
          w = async (r) => {
            try {
              let i = n.accountIdSelected;
              if (!i || !e || !t || !r) return;
              let o = await (null == e
                  ? void 0
                  : e.getPositionDebt.staticCall(i, r)),
                a = Number(o) / 1e18;
              return a;
            } catch (n) {
              console.log("error getTokenDebt", n);
              return;
            }
          },
          v = async (r, i) => {
            try {
              let o = n.accountIdSelected;
              if (!o || !e || !t || !r) return;
              let a = await (null == e
                  ? void 0
                  : e.claimRewards.staticCall(n.accountIdSelected, r, i)),
                l = Number(a) / 1e18;
              return l;
            } catch (n) {
              console.log("error getTokenFee", n);
              return;
            }
          },
          C = async (e) => {
            let t, r;
            let i = n.accountIdSelected,
              o = [];
            if ((u({}), !i)) return;
            for (let n of e) {
              let e = await b(n.contract),
                i = await A(n.contract),
                s = await w(n.contract),
                d = await y(n.contract),
                c = await v(n.contract, n.distributionRewards);
              t && c ? (t += c) : t || (t = c),
                r && (null == e ? void 0 : e.valueInDolar)
                  ? (r += e.valueInDolar)
                  : r || (r = null == e ? void 0 : e.valueInDolar);
              let u = (0, a.VZ)(n.contract);
              o.push({
                token: n.name,
                balance: (0, l.T5)(Number(null == e ? void 0 : e.balance), u),
                icon: n.icon,
                liquidationRate: null == i ? void 0 : i.liquidationRatioString,
                cap: null == i ? void 0 : i.tokenCap,
                debt: s,
                cRatio: d,
                fees: c,
              });
            }
            let s = (0, l.T5)(t, 2);
            i &&
              (u({
                tokens: o,
                acumulatedFees: s.toString(),
                totalBalance: (0, l.T5)(r, 2).toString(),
              }),
              f(s.toString()));
          },
          j = () =>
            (null == c ? void 0 : c.acumulatedFees) &&
            Number(null == c ? void 0 : c.acumulatedFees) > 0,
          k = () => {
            C([
              {
                name: "USDC",
                icon: o.Z,
                contract: "0x50100D8227f0840DeA0a0cD2B85075685d62F42e",
                distributionRewards:
                  "0x50100D8227f0840DeA0a0cD2B85075685d62F42e",
              },
              {
                name: "ETH",
                icon: i.Z,
                contract: "0xeCFADd3972750067e024862436Ac03A4feD49888",
                distributionRewards:
                  "0xe6c67dedd9039810edF942aE265b2Ff3e9cEc5Ae",
              },
            ]);
          };
        return (
          (0, r.useEffect)(() => {}, [n.accountIdSelected, g]),
          {
            earnTableData: c,
            formatNumber: x,
            verifyIfClaimIsAvailable: j,
            triggerEarnData: k,
            accumulatedFees: m,
            setTriggerCallEarnData: h,
          }
        );
      };
    },
    43082: function (n, e, t) {
      t.d(e, {
        D: function () {
          return l;
        },
      });
      var r = t(77985),
        i = t(67294),
        o = t(55678),
        a = t(90994);
      let l = () => {
        let { zrsUsdContract: n, account: e } = (0, a.O)(),
          { provider: t } = (0, r.useWeb3React)(),
          [l, s] = (0, i.useState)("Mint"),
          [d, c] = (0, i.useState)(!1),
          u = BigInt(1e5 * 1e18),
          m = async () => {
            try {
              if (!e) return;
              s("Minting...");
              let r = await (null == n ? void 0 : n.mint(e, u));
              null == t ||
                t
                  .waitForTransaction((null == r ? void 0 : r.hash) || "")
                  .then((n) => {
                    1 === n.status &&
                      (o.Am.success("100,000 USDC minted successfully", {
                        position: "bottom-right",
                      }),
                      c(!1));
                  });
            } catch (n) {
              console.log(n),
                o.Am.error("Error minting USDC", { position: "bottom-right" });
            }
            s("Mint");
          },
          f = async () => {
            let t = await (null == n ? void 0 : n.balanceOf(e));
            t && t > 0 ? c(!1) : c(!0);
          };
        return (
          (0, i.useEffect)(() => {
            f();
          }, [e]),
          {
            mint: m,
            mintButtonText: l,
            verifyIfUserIsEnabledToMint: f,
            isUserEnabledToMint: d,
          }
        );
      };
    },
    10088: function (n, e, t) {
      t.d(e, {
        p: function () {
          return a;
        },
      });
      var r = t(4480),
        i = t(92920),
        o = t(90994);
      let a = () => {
        var n;
        let { account: e, perpsEngineContract: t } = (0, o.O)(),
          [a, l] = (0, r.FV)(i.v),
          s = "".concat(
            e
              ? ""
                  .concat(
                    "".concat(
                      null == window
                        ? void 0
                        : null === (n = window.location) || void 0 === n
                        ? void 0
                        : n.origin
                    ),
                    "/?ref="
                  )
                  .concat(e)
              : "-"
          ),
          d = (n) => {
            let { event: e, setChangeableInput: t } = n;
            t(c({ value: e.target.value })), l(c({ value: e.target.value }));
          },
          c = (n) => {
            let { value: e } = n;
            if (e.includes("ref=")) {
              let n = e.split("ref=");
              return l(n[1]), n[1];
            }
            return e;
          },
          u = async (n) => {
            let { referral: e } = n,
              r = await (null == t
                ? void 0
                : t.getCustomReferralCodeReferee(e));
            return "0x0000000000000000000000000000000000000000" !== r;
          };
        return {
          referral: s,
          handleOnChange: d,
          inputReferralvalue: a,
          setInputReferralValue: l,
          formatInputReferral: c,
          verifyCustomReferral: u,
        };
      };
    },
    41976: function (n, e, t) {
      t.d(e, {
        $h: function () {
          return a;
        },
        BP: function () {
          return l;
        },
        Jh: function () {
          return o;
        },
        kb: function () {
          return i;
        },
      });
      var r = t(4480);
      let i = (0, r.cn)({ key: "userKeysAtom", default: [] }),
        o = (0, r.cn)({ key: "isLoadingUserKeysAtom", default: !1 }),
        a = (0, r.cn)({ key: "maxSpearmintKeysQuantityAtom", default: 0 }),
        l = (0, r.cn)({
          key: "isLoadingQuantityAvailableKeysAtom",
          default: !1,
        });
    },
    32154: function (n, e, t) {
      t.d(e, {
        K: function () {
          return d;
        },
      });
      var r = t(85893),
        i = t(7297),
        o = t(15437),
        a = t(36055);
      function l() {
        let n = (0, i.Z)([
          "\n  width: 100%;\n  height: 3.4375rem;\n  box-shadow: inset -0.1875rem 0.1875rem 0.375rem rgba(14, 22, 25, 0.2),\n    inset 0.1875rem -0.1875rem 0.375rem rgba(14, 22, 25, 0.2),\n    inset -0.1875rem -0.1875rem 0.375rem rgba(58, 90, 101, 0.9),\n    inset 0.1875rem 0.1875rem 0.5rem rgba(14, 22, 25, 0.9);\n  background-color: ",
          ";\n  border-radius: 0.5rem;\n\n  td {\n    font-family: ",
          ";\n    font-weight: 400;\n    font-size: 1.125rem;\n    text-align: center;\n    color: var(--secondary);\n  }\n\n  td:first-child {\n    border-bottom-left-radius: 0.5rem;\n    border-top-left-radius: 0.5rem;\n\n    div {\n      display: flex;\n      align-items: center;\n      margin: 0 0 0 1rem;\n      font-family: ",
          ";\n      font-weight: 700;\n      text-align: center;\n      color: var(--neutral-white);\n\n      img {\n        width: 2rem;\n        height: 2rem;\n        margin-right: 0.5rem;\n        border-radius: 50%;\n        box-shadow: 3px 7px 5px -3px rgba(0, 0, 0, 0.5),\n          -2px -1.5px 5px 0px rgba(255, 255, 255, 0.2);\n      }\n    }\n\n    td:last-child {\n      border-bottom-right-radius: 0.5rem;\n      border-top-right-radius: 0.5rem;\n    }\n  }\n",
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      let s = o.ZP.tr.withConfig({
          displayName: "DefaultTableBoxItem.styles__BoxItem",
          componentId: "sc-c18d4a44-0",
        })(
          l(),
          (n) => {
            let { theme: e } = n;
            return e.colors.shared["01"];
          },
          a.i,
          a.i
        ),
        d = (n) => {
          let { children: e } = n;
          return (0, r.jsx)(s, { children: e });
        };
    },
    86422: function (n, e, t) {
      t.d(e, {
        i: function () {
          return h;
        },
      });
      var r = t(85893),
        i = t(32154),
        o = t(7297),
        a = t(15437),
        l = t(36055);
      function s() {
        let n = (0, o.Z)([
          "\n  width: ",
          ";\n  min-width: ",
          ";\n  border-spacing: ",
          ";\n  border-collapse: separate;\n  overflow-x: scroll;\n\n  ",
          "\n\n  ",
          "\n",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      function d() {
        let n = (0, o.Z)([
          "\n  font-family: ",
          ";\n  font-weight: 300;\n  font-size: 0.75rem;\n  color: var(--neutral-white);\n  margin: 5rem auto 0;\n  text-align: center;\n",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      let c = a.ZP.table.withConfig({
          displayName: "Table.styles__Table",
          componentId: "sc-73b64050-0",
        })(
          s(),
          (n) => {
            let { $width: e } = n;
            return e;
          },
          (n) => {
            let { $minWidth: e } = n;
            return e || "unset";
          },
          (n) => {
            let { $hasNoBorderSpacing: e } = n;
            return e ? "unset" : "0 0.5rem";
          },
          (n) => {
            let { $divide: e } = n;
            return e
              ? "thead {\n    position: relative;\n\n    .divide {\n      height: 15px;\n    }\n\n    &::before {\n      content: '';\n      position: absolute;\n      top: 30px;\n      width: 100%;\n      height: 0.25rem;\n      margin-top: 10px;\n      border-radius: 0.5rem;\n      background: var(--neutral-bottom);\n      box-shadow: 2px 2px 4px 0px rgba(14, 22, 25, 0.9) inset,\n        -2px -2px 3px 0px rgba(58, 90, 101, 0.9) inset,\n        2px -2px 3px 0px rgba(14, 22, 25, 0.2) inset,\n        -2px 2px 3px 0px rgba(14, 22, 25, 0.2) inset;\n      border: 0;\n    }\n  }"
              : null;
          },
          (n) => {
            let { $hasHeaderStyles: e, $isLeaderboardTable: t } = n;
            return e
              ? null
              : "thead {\n      margin-bottom: 0.625rem;\n\n      th {\n        width: "
                  .concat(t ? "unset" : "9.375rem", " ;\n        font-family: ")
                  .concat(
                    l.i,
                    ";\nfont-weight: 300;\n        font-style: normal;\n        font-weight: 400;\n        font-size:  "
                  )
                  .concat(
                    t ? ".75rem" : "0.875rem",
                    " ;\n        text-align: center;\n        color: "
                  )
                  .concat(
                    t ? "var(--secondary)" : "var(--neutral-white)",
                    " ;\n      }\n    }"
                  );
          }
        ),
        u = a.ZP.p.withConfig({
          displayName: "Table.styles__Message",
          componentId: "sc-73b64050-1",
        })(d(), l.i),
        m = { Table: c, Message: u };
      var f = t(50578);
      let g = (n, e) => {
          let t = "object" == typeof n,
            i = t ? n.label : n,
            o = t ? n.tooltip : null;
          if (e) {
            var a, l, s, d, c, u, m, g;
            return (0, r.jsxs)(
              e,
              {
                children: [
                  i,
                  o &&
                    (0, r.jsxs)(f.u, {
                      $width: o.width,
                      $boxTop:
                        null === (a = o.boxPosition) || void 0 === a
                          ? void 0
                          : a.top,
                      $boxRight:
                        null === (l = o.boxPosition) || void 0 === l
                          ? void 0
                          : l.right,
                      $boxBottom:
                        null === (s = o.boxPosition) || void 0 === s
                          ? void 0
                          : s.bottom,
                      $boxLeft:
                        null === (d = o.boxPosition) || void 0 === d
                          ? void 0
                          : d.left,
                      $arrowTop:
                        null === (c = o.arrowPosition) || void 0 === c
                          ? void 0
                          : c.top,
                      $arrowRight:
                        null === (u = o.arrowPosition) || void 0 === u
                          ? void 0
                          : u.right,
                      $arrowBottom:
                        null === (m = o.arrowPosition) || void 0 === m
                          ? void 0
                          : m.bottom,
                      $arrowLeft:
                        null === (g = o.arrowPosition) || void 0 === g
                          ? void 0
                          : g.left,
                      children: [
                        (0, r.jsx)("span", { children: i }),
                        o.text,
                        (0, r.jsx)("p", {}),
                      ],
                    }),
                ],
              },
              i
            );
          }
          return i
            ? (0, r.jsx)("th", { children: i }, String(i))
            : (0, r.jsx)("th", { children: n }, n.key);
        },
        h = (n) => {
          var e;
          let {
            header: t,
            body: o = [],
            BodyItem: a = i.K,
            HeaderItem: l,
            bodyMessage: s,
            divide: d,
            $hasNoBorderSpacing: c,
            $isLeaderboardTable: u,
            $minWidth: f,
            $hasRoundedBorder: h,
            $width: p = "100%",
            loading: x,
            dataTestID: b,
            $hasHeaderStyles: A,
            $hasTooltip: y,
            messageComponent: w,
          } = n;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(m.Table, {
                $divide: d,
                $hasHeaderStyles: void 0 === A ? Boolean(l) : A,
                $hasNoBorderSpacing: c,
                $isLeaderboardTable: u,
                $minWidth: f,
                $hasRoundedBorder: h,
                $width: p,
                "data-testid": b,
                $hasTooltip: y,
                children: [
                  (0, r.jsxs)("thead", {
                    children: [
                      Array.isArray(t) &&
                        (0, r.jsx)("tr", { children: t.map((n) => g(n, l)) }),
                      d ? (0, r.jsx)("tr", { className: "divide" }) : null,
                    ],
                  }),
                  (null == o ? void 0 : o.length) && !x
                    ? (0, r.jsx)("tbody", {
                        children:
                          null == o
                            ? void 0
                            : o.map((n, e) => {
                                let t = Object.values(n);
                                return (0, r.jsx)(
                                  a,
                                  {
                                    $hasRoundedBorder: 0 === e || 1 === n.id,
                                    $roiColor:
                                      n.roi && n.roi.includes("-")
                                        ? "var(--red)"
                                        : "var(--green)",
                                    children:
                                      null == t
                                        ? void 0
                                        : t.map((n, e) =>
                                            (0, r.jsx)(
                                              "td",
                                              { children: n },
                                              "inner-".concat(e)
                                            )
                                          ),
                                  },
                                  "body-item-".concat(e, " ")
                                );
                              }),
                      })
                    : null,
                ],
              }),
              x || null,
              null !== (e = !o.length && !x && w) && void 0 !== e ? e : w,
              o.length || x || !s
                ? null
                : (0, r.jsx)(m.Message, { children: s }),
            ],
          });
        };
    },
    67624: function (n, e, t) {
      t.d(e, {
        M: function () {
          return p;
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
        m = i.ZP.div.withConfig({
          displayName: "Trade.styles__ContainerTrade",
          componentId: "sc-9bf67c2c-1",
        })(a(), (n) => {
          let { $isHidden: e } = n;
          return e && "\n      opacity: 0;\n\n    ";
        }),
        f = i.ZP.div.withConfig({
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
        g = i.ZP.div.withConfig({
          displayName: "Trade.styles__ContainerInfoCoin",
          componentId: "sc-9bf67c2c-3",
        })(s()),
        h = i.ZP.div.withConfig({
          displayName: "Trade.styles__Loading",
          componentId: "sc-9bf67c2c-4",
        })(d()),
        p = i.ZP.div.withConfig({
          displayName: "Trade.styles__TradingViewBox",
          componentId: "sc-9bf67c2c-5",
        })(c(), (n) => {
          let { $expanded: e } = n;
          return e ? "35.6rem" : "51.5rem";
        }),
        x = {
          Container: u,
          Content: f,
          ContainerInfoCoin: g,
          ContainerTrade: m,
          Loading: h,
        };
    },
    42444: function (n, e, t) {
      t.d(e, {
        mR: function () {
          return tm;
        },
        h: function () {
          return rk;
        },
        s3: function () {
          return tO;
        },
        pI: function () {
          return ox;
        },
      });
      var r = t(85893);
      t(69409), t(4350);
      var i = t(94452),
        o = t(90994);
      t(11160);
      var a = t(6280),
        l = t(63114);
      t(32154), t(86422);
      var s = t(7297),
        d = t(25675),
        c = t.n(d),
        u = t(15437),
        m = t(36055);
      function f() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n\n  p {\n    background: linear-gradient(\n      315deg,\n      var(--secondary) 0%,\n      var(--primary) 52.08%\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n    font-size: 1.5rem;\n    font-family: ",
          ";\n    font-weight: 700;\n\n    &:first-child {\n      font-size: 1.25rem;\n    }\n\n    small {\n      font-size: 1rem;\n      font-family: ",
          ";\n      font-weight: 300;\n      font-weight: 500;\n      text-fill-color: var(--neutral-white);\n      -webkit-text-fill-color: var(--neutral-white);\n    }\n\n    span {\n      font-size: 1.15rem;\n    }\n  }\n",
        ]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      function g() {
        let n = (0, s.Z)(["\n  margin-top: 3.03rem;\n  margin-left: 1rem;\n"]);
        return (
          (g = function () {
            return n;
          }),
          n
        );
      }
      function h() {
        let n = (0, s.Z)([
          "\n  width: 2.1rem;\n  height: 2.1rem;\n  border-radius: 50%;\n  margin-bottom: -0.4rem;\n  object-fit: scale-down;\n  box-shadow: 3px 7px 5px -3px rgba(0, 0, 0, 0.5),\n    -2px -1.5px 5px 0px rgba(255, 255, 255, 0.2);\n",
        ]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      function p() {
        let n = (0, s.Z)([
          "\n  border-radius: 0.5rem;\n  box-shadow: 2px 2px 4px 0px rgba(14, 22, 25, 0.9) inset,\n    -2px -2px 3px 0px rgba(58, 90, 101, 0.9) inset,\n    2px -2px 3px 0px rgba(14, 22, 25, 0.2) inset,\n    -2px 2px 3px 0px rgba(14, 22, 25, 0.2) inset;\n  height: 0.25rem;\n  margin: 1rem 0;\n",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      function x() {
        let n = (0, s.Z)([
          "\n  position: absolute;\n  bottom: 1rem;\n  right: 1.2rem;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  width: 18.75rem;\n  padding: 0.8rem 1rem;\n  border: 1px solid var(--secondary);\n  border-radius: 0.5rem;\n  background: linear-gradient(\n    135deg,\n    rgba(90, 255, 243, 0.3) 0%,\n    rgba(90, 255, 243, 0.03) 100%\n  );\n  backdrop-filter: blur(10px);\n\n  > div {\n    display: flex;\n    align-items: center;\n    color: var(--secondary);\n    text-align: right;\n    font-size: 1.5rem;\n    font-family: ",
          ";\n    font-weight: 400;\n    font-weight: 700;\n  }\n",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      function b() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  gap: 0 0.4rem;\n  margin: 0 0 0.1rem 0rem;\n",
        ]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      function A() {
        let n = (0, s.Z)([
          "\n  margin: 0 0 0.2rem 0.4rem;\n  > p {\n    font-size: 1rem;\n    margin: 0 0 -0.7rem 0;\n    > span {\n      font-size: 1.5rem;\n      margin: 0 0 0 0.2rem;\n    }\n  }\n\n  > small {\n    position: absolute;\n    top: 0.4rem;\n    left: 1.1rem;\n    font-size: 0.75rem;\n    line-height: 1rem;\n    font-family: ",
          ";\n    font-weight: 400;\n    background: linear-gradient(\n      135deg,\n      var(--modal-1) 0%,\n      var(--modal-2) 54.3%,\n      var(--modal-3) 100%\n    );\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n  }\n",
        ]);
        return (
          (A = function () {
            return n;
          }),
          n
        );
      }
      function y() {
        let n = (0, s.Z)([
          "\n  width: 100%;\n  margin-top: 0.1rem;\n  margin-bottom: 0.72rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  button {\n    width: 7.375rem;\n\n    &:first-child {\n      margin-right: 1rem;\n    }\n  }\n",
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      u.ZP.div.withConfig({
        displayName: "Earn.styles__Header",
        componentId: "sc-f126284d-0",
      })(f(), m.i, m.i),
        u.ZP.div.withConfig({
          displayName: "Earn.styles__Container",
          componentId: "sc-f126284d-1",
        })(g()),
        (0, u.ZP)(c()).withConfig({
          displayName: "Earn.styles__ZrsUsd",
          componentId: "sc-f126284d-2",
        })(h()),
        u.ZP.div.withConfig({
          displayName: "Earn.styles__Divide",
          componentId: "sc-f126284d-3",
        })(p()),
        u.ZP.div.withConfig({
          displayName: "Earn.styles__Footer",
          componentId: "sc-f126284d-4",
        })(x(), m.i),
        u.ZP.div.withConfig({
          displayName: "Earn.styles__FooterContent",
          componentId: "sc-f126284d-5",
        })(b()),
        u.ZP.div.withConfig({
          displayName: "Earn.styles__FeesAmount",
          componentId: "sc-f126284d-6",
        })(A(), m.i),
        u.ZP.div.withConfig({
          displayName: "Earn.styles__ContentButtons",
          componentId: "sc-f126284d-7",
        })(y());
      var w = t(5792),
        v = t(21665);
      c(), v.Z, c(), w.Z, t(64173);
      var C = t(67294);
      t(47041), t(2568);
      var j = t(4480);
      function k() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.5rem;\n",
        ]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      function Z() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 6rem);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.5rem;\n",
        ]);
        return (
          (Z = function () {
            return n;
          }),
          n
        );
      }
      function I() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  margin: 10px 0px;\n  background: rgba(90, 255, 243, 0.3);\n  border-radius: 8px;\n",
        ]);
        return (
          (I = function () {
            return n;
          }),
          n
        );
      }
      function _() {
        let n = (0, s.Z)([
          "\n  font-family: ",
          ";\n  font-weight: 400;\n  font-size: 0.8rem;\n  color: var(--neutral-white);\n  background-color: rgba(0, 0, 0, 0);\n  background: transparent;\n  border: none;\n  width: 100%;\n\n  &::placeholder {\n    /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: var(--neutral-white);\n    opacity: 1; /* Firefox */\n  }\n\n  &:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    color: var(--neutral-white);\n  }\n\n  &::-ms-input-placeholder {\n    /* Microsoft Edge */\n    color: var(--neutral-white);\n  }\n",
        ]);
        return (
          (_ = function () {
            return n;
          }),
          n
        );
      }
      function P() {
        let n = (0, s.Z)(["\n  margin-bottom: 1rem;\n"]);
        return (
          (P = function () {
            return n;
          }),
          n
        );
      }
      t(23006),
        "5dfaddce76ffe27b55361a816bb5fdcc"
          .substring(6, 2)
          .concat("77c68269527dae19e7ed5bb1b7a0cda6".substring(3, 9)),
        t(74653),
        u.ZP.div.withConfig({
          displayName: "Login.styles__ContainerBg",
          componentId: "sc-189209cf-0",
        })(k()),
        u.ZP.div.withConfig({
          displayName: "Login.styles__ContainerPassword",
          componentId: "sc-189209cf-1",
        })(Z()),
        u.ZP.div.withConfig({
          displayName: "Login.styles__ContainerInput",
          componentId: "sc-189209cf-2",
        })(I()),
        u.ZP.input.withConfig({
          displayName: "Login.styles__Input",
          componentId: "sc-189209cf-3",
        })(_(), m.i),
        u.ZP.div.withConfig({
          displayName: "Login.styles__ContainerAllInputs",
          componentId: "sc-189209cf-4",
        })(P());
      var S = t(41664),
        B = t.n(S),
        N = t(90812);
      function z() {
        let n = (0, s.Z)([
          "\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 0.5rem;\n  display: ",
          ";\n",
        ]);
        return (
          (z = function () {
            return n;
          }),
          n
        );
      }
      function R() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding: 0.5rem 0;\n  gap: 1rem 0;\n  width: 100%;\n\n  @media (max-width: 899px) {\n    flex-wrap: wrap;\n  }\n",
        ]);
        return (
          (R = function () {
            return n;
          }),
          n
        );
      }
      function T() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  width: 100%;\n",
        ]);
        return (
          (T = function () {
            return n;
          }),
          n
        );
      }
      function D() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 1rem 0;\n\n  > small {\n    font-size: 1rem;\n    font-family: ",
          ";\n    font-weight: 300;\n    font-weight: 500;\n    color: ",
          ";\n    max-width: 34.5rem;\n  }\n\n  > p {\n    background: ",
          ";\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    font-size: 1.5rem;\n    font-family: ",
          ";\n    font-weight: 700;\n\n    &:first-child {\n      font-size: 1rem;\n    }\n  }\n",
        ]);
        return (
          (D = function () {
            return n;
          }),
          n
        );
      }
      function U() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 0.5rem;\n  border: 2px solid ",
          ";\n  background: linear-gradient(\n    133deg,\n    rgba(90, 255, 243, 0.3) 1.71%,\n    rgba(90, 255, 243, 0.09) 98.28%\n  );\n  padding: 0.5rem 0.9rem;\n  gap: 1rem;\n  max-width: 43.75rem;\n  backdrop-filter: blur(39.09342956542969px);\n\n  @media (max-width: 899px) {\n    flex-wrap: wrap;\n  }\n\n  > a {\n    button {\n      min-width: 8rem;\n      width: 8rem;\n      height: 2rem;\n      font-size: 0.81819rem;\n      background: linear-gradient(\n        135deg,\n        #56cfe1 5%,\n        #45bfbd 47.53%,\n        #6affdb 83.33%\n      );\n    }\n  }\n\n  > div {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 0.25rem 0;\n\n    > h1 {\n      font-size: 1rem;\n      font-family: 'Presta Medium';\n      background: linear-gradient(\n        135deg,\n        #56cfe1 5%,\n        #45bfbd 47.53%,\n        #6affdb 83.33%\n      );\n      background-clip: text;\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n    }\n\n    > div {\n      display: flex;\n\n      > small {\n        font-size: 0.75rem;\n        color: ",
          ";\n        font-weight: 400;\n        min-width: 28.91rem;\n\n        @media (max-width: 899px) {\n          min-width: unset;\n        }\n\n        > span {\n          font-weight: 700;\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (U = function () {
            return n;
          }),
          n
        );
      }
      function L() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 4rem;\n  margin-top: ",
          ";\n  gap: 0.5rem 0;\n  width: 100%;\n  padding: 0 1rem;\n",
        ]);
        return (
          (L = function () {
            return n;
          }),
          n
        );
      }
      let M = u.ZP.div.withConfig({
          displayName: "Account.styles__Header",
          componentId: "sc-dc4a831b-0",
        })(z(), (n) => {
          let { $isVisible: e } = n;
          return e ? "flex" : "none";
        }),
        E = u.ZP.div.withConfig({
          displayName: "Account.styles__HeaderContent",
          componentId: "sc-dc4a831b-1",
        })(R()),
        F = u.ZP.div.withConfig({
          displayName: "Account.styles__WelcomeContainer",
          componentId: "sc-dc4a831b-2",
        })(T()),
        H = u.ZP.div.withConfig({
          displayName: "Account.styles__Welcome",
          componentId: "sc-dc4a831b-3",
        })(
          D(),
          m.i,
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          (n) => {
            let { theme: e } = n;
            return "linear-gradient(315deg, "
              .concat(e.colors.secondary["1100"], " 0%, ")
              .concat(e.colors.primary["1000"], " 52.08%)\n      ");
          },
          m.i
        ),
        Q = u.ZP.div.withConfig({
          displayName: "Account.styles__FaucetBox",
          componentId: "sc-dc4a831b-4",
        })(
          U(),
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          }
        ),
        V = u.ZP.div.withConfig({
          displayName: "Account.styles__Container",
          componentId: "sc-dc4a831b-5",
        })(L(), (n) => (n ? "1rem" : "4rem")),
        W = {
          Header: M,
          Container: V,
          WelcomeContainer: F,
          Welcome: H,
          FaucetBox: Q,
          HeaderContent: E,
        };
      var O = t(26026),
        $ = t(13355),
        K = t(44334),
        J = t(74559);
      let G = async (n) => {
          try {
            let { data: e } = await J.h.get(n);
            return e || [];
          } catch (n) {
            return [];
          }
        },
        X = (n) => {
          let { interval: e } = n,
            {
              accountIdsStates: { accountIdSelected: t },
              account: r,
            } = (0, o.O)(),
            {
              data: i,
              isMutating: a,
              trigger: l,
            } = (0, K.Z)(
              "/margin?timePeriod="
                .concat(e.toLowerCase(), "&sender=")
                .concat(r, "&accountId=")
                .concat(t),
              G
            );
          return (
            (0, C.useEffect)(() => {
              l();
            }, [e, t]),
            { data: i, loading: a }
          );
        };
      var q = t(9253),
        Y = t(17577),
        nn = t(14195),
        ne = t(3023),
        nt = t(75358),
        nr = t(14888),
        ni = t(86108),
        no = t(96964);
      let na = (n) => {
        let { data: e } = n;
        return (0, r.jsx)(q.h, {
          width: "100%",
          height: "100%",
          children: (0, r.jsxs)(Y.T, {
            data: e,
            margin: { top: 10, bottom: -5 },
            children: [
              (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                  id: "colorUv",
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "1",
                  children: [
                    (0, r.jsx)("stop", {
                      offset: "5%",
                      stopColor: "rgba(90, 255, 243, 0.30)",
                      stopOpacity: 1.7,
                    }),
                    (0, r.jsx)("stop", {
                      offset: "95%",
                      stopColor: "rgba(90, 255, 243, 0.03)",
                      stopOpacity: 1,
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(nn.q, { color: "#fff", style: { opacity: 0.05 } }),
              (0, r.jsx)(ne.K, {
                dataKey: "name",
                tickLine: !1,
                axisLine: !1,
                fontSize: 8,
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                padding: { left: 0, right: 35 },
              }),
              (0, r.jsx)(nt.B, {
                tickLine: !1,
                axisLine: !1,
                fontSize: 8,
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                padding: { bottom: 20 },
              }),
              (0, r.jsx)(nr.u, {
                formatter: (n, e, t) => {
                  var r;
                  return [
                    "".concat(
                      new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(
                        null === (r = t.payload) || void 0 === r
                          ? void 0
                          : r.amt
                      )
                    ),
                  ];
                },
                contentStyle: {
                  backgroundColor: no.y0.neutral.bottom,
                  border: 0,
                  borderRadius: 2,
                  color: no.y0.neutral.white,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                },
                labelStyle: { fontSize: 8 },
                itemStyle: { color: no.y0.neutral.white, fontSize: 16 },
              }),
              (0, r.jsx)(ni.u, {
                type: "monotone",
                dataKey: "uv",
                stroke: no.y0.secondary[1100],
                strokeWidth: 2,
                activeDot: {
                  r: 10,
                  fill: no.y0.secondary[1100],
                  stroke: "transparent",
                },
                fill: "url(#colorUv)",
              }),
            ],
          }),
        });
      };
      function nl() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  height: 22.5rem;\n  border-radius: 8px;\n  padding: 0;\n  transition: all 0.2s;\n",
        ]);
        return (
          (nl = function () {
            return n;
          }),
          n
        );
      }
      function ns() {
        let n = (0, s.Z)([
          "\n  width: 100%;\n  height: 3.75rem;\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  margin: 0 -0.5rem 0 1.25rem;\n",
        ]);
        return (
          (ns = function () {
            return n;
          }),
          n
        );
      }
      function nd() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: center;\n  margin-left: 2.5rem;\n",
        ]);
        return (
          (nd = function () {
            return n;
          }),
          n
        );
      }
      function nc() {
        let n = (0, s.Z)([
          "\n  border: 0;\n  border-radius: 0.5rem;\n  border: 1px solid ",
          ";\n  background: linear-gradient(\n    133deg,\n    rgba(90, 255, 243, 0.3) 1.71%,\n    rgba(90, 255, 243, 0.03) 98.28%\n  );\n  backdrop-filter: blur(10px);\n  cursor: ",
          ";\n  color: ",
          ";\n  font-family: ",
          ";\n  font-weight: 300;\n  font-size: 0.875rem;\n  padding: 0 0.5rem;\n  z-index: 1;\n\n  ",
          "\n",
        ]);
        return (
          (nc = function () {
            return n;
          }),
          n
        );
      }
      function nu() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n",
        ]);
        return (
          (nu = function () {
            return n;
          }),
          n
        );
      }
      function nm() {
        let n = (0, s.Z)([
          "\n  color: ",
          ";\n  font-family: ",
          ";\n  font-weight: 300;\n  font-size: 0.75rem;\n  list-style-type: none;\n  cursor: pointer;\n  opacity: ",
          ";\n",
        ]);
        return (
          (nm = function () {
            return n;
          }),
          n
        );
      }
      function nf() {
        let n = (0, s.Z)([
          "\n  width: 100%;\n  height: 100%;\n  opacity: 0.1;\n  transition: all 0.5s ease-out;\n",
        ]);
        return (
          (nf = function () {
            return n;
          }),
          n
        );
      }
      let ng = u.ZP.div.withConfig({
          displayName: "Chart.styles__Container",
          componentId: "sc-db3f3450-0",
        })(nl()),
        nh = u.ZP.div.withConfig({
          displayName: "Chart.styles__Menu",
          componentId: "sc-db3f3450-1",
        })(ns()),
        np = u.ZP.div.withConfig({
          displayName: "Chart.styles__Options",
          componentId: "sc-db3f3450-2",
        })(nd()),
        nx = u.ZP.button.withConfig({
          displayName: "Chart.styles__Option",
          componentId: "sc-db3f3450-3",
        })(
          nc(),
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          (n) => {
            let { disabled: e } = n;
            return e ? "not-allowed" : "pointer";
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          m.i,
          (n) => {
            let { active: e, option: t } = n;
            return e
              ? null
              : "\n    z-index: 0;\n    padding: 0 1.125rem;\n    opacity: 0.8;\n    margin: ".concat(
                  "margin" === t ? "0 -0.75rem 0 0" : "0 0 0 -0.75rem",
                  ";\n  "
                );
          }
        ),
        nb = u.ZP.ul.withConfig({
          displayName: "Chart.styles__TimeFrames",
          componentId: "sc-db3f3450-4",
        })(nu()),
        nA = u.ZP.li.withConfig({
          displayName: "Chart.styles__TimeFrame",
          componentId: "sc-db3f3450-5",
        })(
          nm(),
          (n) => {
            let { theme: e, selected: t } = n;
            return t ? e.colors.secondary["1100"] : e.colors.neutral.white;
          },
          m.i,
          (n) => {
            let { selected: e } = n;
            return e ? "1" : "0.5";
          }
        ),
        ny = u.ZP.div.withConfig({
          displayName: "Chart.styles__ContainerLoading",
          componentId: "sc-db3f3450-6",
        })(nf()),
        nw = {
          Container: ng,
          ContainerLoading: ny,
          Menu: nh,
          Options: np,
          Option: nx,
          TimeFrames: nb,
          TimeFrame: nA,
        };
      var nv = t(52523),
        nC = t(30381),
        nj = t.n(nC);
      let nk = (n) => {
          var e, t, r, i, o, a, l, s, d, c, u, m;
          let { filter: f, data: g, margin: h } = n,
            p = (n) => {
              let { name: e } = n;
              return g
                .filter((n) => {
                  var t, r;
                  let { name: i } = n;
                  return (
                    (null === (t = i.split("T")) || void 0 === t
                      ? void 0
                      : t[0]) ===
                    (null === (r = e.split("T")) || void 0 === r
                      ? void 0
                      : r[0])
                  );
                })
                .reduce((n, e) => n + Number(e.amt), 0);
            },
            x = (n) => {
              var e, t, r;
              let { name: i } = n;
              return "".concat(
                null ===
                  (e =
                    null === (t = i.split("T")) || void 0 === t
                      ? void 0
                      : null === (r = t[0]) || void 0 === r
                      ? void 0
                      : r.split(".")) || void 0 === e
                  ? void 0
                  : e[0]
              );
            },
            b = (n) => {
              let { data: e } = n;
              return null == e
                ? void 0
                : e.filter(
                    (n, e, t) =>
                      t.findIndex((e) => {
                        var t, r, i;
                        let { name: o } = e;
                        return (
                          (null === (t = null == o ? void 0 : o.split(",")) ||
                          void 0 === t
                            ? void 0
                            : t[0]) ===
                          (null ===
                            (r =
                              null === (i = n.name) || void 0 === i
                                ? void 0
                                : i.split(",")) || void 0 === r
                            ? void 0
                            : r[0])
                        );
                      }) === e
                  );
            };
          switch (f) {
            case "24H": {
              let n = nj()().add(-1, "day").toString(),
                o =
                  null ===
                    (e =
                      null == g
                        ? void 0
                        : g.filter((e) => {
                            let { name: t } = e;
                            return nj()(t).isBetween(n, new Date());
                          })) || void 0 === e
                    ? void 0
                    : e.map((n, e, t) => {
                        let { name: r } = n,
                          i =
                            null == g
                              ? void 0
                              : g
                                  .filter((n) => {
                                    var e, t;
                                    let { name: i } = n;
                                    return (
                                      (null === (e = i.split("T")) ||
                                      void 0 === e
                                        ? void 0
                                        : e[1]) ===
                                      (null === (t = r.split("T")) ||
                                      void 0 === t
                                        ? void 0
                                        : t[1])
                                    );
                                  })
                                  .reduce((n, e) => n + Number(e.amt), 0),
                          o = new Date(r).toLocaleTimeString();
                        return { ...t[e], name: o, amt: i, uv: i };
                      });
              if ((null == o ? void 0 : o.length) === 1) {
                let n =
                  null ===
                    (t =
                      null ===
                        (r = nj()(new Date(o[0].date))
                          .add(-1, "day")
                          .toISOString()
                          .split("T")) || void 0 === r
                        ? void 0
                        : null === (i = r[1]) || void 0 === i
                        ? void 0
                        : i.split(".")) || void 0 === t
                    ? void 0
                    : t[0];
                return (
                  delete o[0].date, [{ name: n, amt: 0, uv: 0, pv: n }, ...o]
                );
              }
              if (!(null == o ? void 0 : o.length)) {
                let e = x({ name: new Date(n).toISOString() }),
                  t = x({ name: new Date().toISOString() });
                return [
                  { name: e, amt: h, uv: h, pv: e },
                  { name: t, amt: h, uv: h, pv: t },
                ];
              }
            }
            case "7D": {
              let n = nj()().add(-7, "days").toString(),
                e =
                  null ===
                    (o =
                      null ===
                        (a =
                          null === (l = b({ data: g })) || void 0 === l
                            ? void 0
                            : l.filter((e) => {
                                let { name: t } = e;
                                return nj()(t).isBetween(n, new Date());
                              })) || void 0 === a
                        ? void 0
                        : a.map((n, e, t) => {
                            let { name: r } = n,
                              i = p({ name: r }),
                              o = x({ name: r });
                            return { ...t[e], name: o, amt: i, uv: i };
                          })) || void 0 === o
                    ? void 0
                    : o.filter(
                        (n, e, t) =>
                          t.findIndex((e) => {
                            var t, r, i;
                            let { name: o } = e;
                            return (
                              (null ===
                                (t = null == o ? void 0 : o.split(",")) ||
                              void 0 === t
                                ? void 0
                                : t[0]) ===
                              (null ===
                                (r =
                                  null === (i = n.name) || void 0 === i
                                    ? void 0
                                    : i.split(",")) || void 0 === r
                                ? void 0
                                : r[0])
                            );
                          }) === e
                      );
              if ((null == e ? void 0 : e.length) === 1) {
                let n = nj()(new Date(e[0].date)).add(-7, "days").toString(),
                  t = x({ name: new Date(n).toISOString() });
                return (
                  delete e[0].date, [{ name: t, amt: 0, uv: 0, pv: t }, ...e]
                );
              }
              if (!(null == e ? void 0 : e.length)) {
                let e = x({ name: new Date(n).toISOString() }),
                  t = x({ name: new Date().toISOString() });
                return [
                  { name: e, amt: h, uv: h, pv: e },
                  { name: t, amt: h, uv: h, pv: t },
                ];
              }
              return e || [];
            }
            case "30D": {
              let n = nj()().add(-30, "days").toString(),
                e =
                  null ===
                    (s =
                      null ===
                        (d =
                          null === (c = b({ data: g })) || void 0 === c
                            ? void 0
                            : c.filter((e) => {
                                let { name: t } = e;
                                return nj()(t).isBetween(n, new Date());
                              })) || void 0 === d
                        ? void 0
                        : d.map((n, e, t) => {
                            let { name: r } = n,
                              i = p({ name: r }),
                              o = x({ name: r });
                            return { ...t[e], name: o, amt: i, uv: i };
                          })) || void 0 === s
                    ? void 0
                    : s.filter(
                        (n, e, t) =>
                          t.findIndex((e) => {
                            var t, r, i;
                            let { name: o } = e;
                            return (
                              (null ===
                                (t = null == o ? void 0 : o.split(",")) ||
                              void 0 === t
                                ? void 0
                                : t[0]) ===
                              (null ===
                                (r =
                                  null === (i = n.name) || void 0 === i
                                    ? void 0
                                    : i.split(",")) || void 0 === r
                                ? void 0
                                : r[0])
                            );
                          }) === e
                      );
              if ((null == e ? void 0 : e.length) === 1) {
                let n = nj()(new Date(e[0].date)).add(-30, "days").toString(),
                  t = x({ name: new Date(n).toISOString() });
                return (
                  delete e[0].date, [{ name: t, amt: 0, uv: 0, pv: t }, ...e]
                );
              }
              if (!(null == e ? void 0 : e.length)) {
                let e = x({ name: new Date(n).toISOString() }),
                  t = x({ name: new Date().toISOString() });
                return [
                  { name: e, amt: h, uv: h, pv: e },
                  { name: t, amt: h, uv: h, pv: t },
                ];
              }
              return e || [];
            }
            case "ALL": {
              let n =
                null ===
                  (u =
                    null === (m = b({ data: g })) || void 0 === m
                      ? void 0
                      : m.map((n, e, t) => {
                          let { name: r } = n,
                            i = p({ name: r }),
                            o = x({ name: r });
                          return { ...t[e], name: o, amt: i, uv: i };
                        })) || void 0 === u
                  ? void 0
                  : u.filter(
                      (n, e, t) =>
                        t.findIndex((e) => {
                          var t, r, i;
                          let { name: o } = e;
                          return (
                            (null === (t = null == o ? void 0 : o.split(",")) ||
                            void 0 === t
                              ? void 0
                              : t[0]) ===
                            (null ===
                              (r =
                                null === (i = n.name) || void 0 === i
                                  ? void 0
                                  : i.split(",")) || void 0 === r
                              ? void 0
                              : r[0])
                          );
                        }) === e
                    );
              if ((null == n ? void 0 : n.length) === 1) {
                let e = nj()(new Date(n[0].date)).add(-1, "day").toString(),
                  t = x({ name: new Date(e).toISOString() });
                return (
                  delete n[0].date, [{ name: t, amt: 0, uv: 0, pv: t }, ...n]
                );
              }
              if (!(null == n ? void 0 : n.length)) {
                let n = nj()().add(-30, "days").toString(),
                  e = x({ name: new Date(n).toISOString() }),
                  t = x({ name: new Date().toISOString() });
                return [
                  { name: e, amt: h, uv: h, pv: e },
                  { name: t, amt: h, uv: h, pv: t },
                ];
              }
              return n || [];
            }
            default:
              return [];
          }
        },
        nZ = (n) => {
          var e;
          let { data: t, filter: r } = n,
            { callAccountMarginBreakdown: i, marginBalance: a } = (0, nv.h)(),
            {
              accountIdsStates: { accountIdSelected: l },
            } = (0, o.O)();
          (0, C.useEffect)(() => {
            null == i || i();
          }, [l, i]);
          let s = (null == t ? void 0 : t.length)
              ? null == t
                ? void 0
                : t.map((n) => {
                    let { blockTimestamp: e, amount: t } = n,
                      r = 1e3 * parseInt(e, 10),
                      i = new Date(r).toISOString();
                    return {
                      name: i,
                      uv: Number(t),
                      pv: i,
                      amt: Number(t),
                      date: new Date(i),
                    };
                  })
              : [],
            d =
              null === (e = nk({ data: s, filter: r, margin: a })) ||
              void 0 === e
                ? void 0
                : e.sort(
                    (n, e) =>
                      new Date(n.name).getTime() - new Date(e.name).getTime()
                  );
          return d;
        },
        nI = ["24H", "7D", "30D", "ALL"],
        n_ = () => {
          let [n, e] = (0, C.useState)("7D"),
            [t, i] = (0, C.useState)("margin"),
            { data: a } = X({ interval: n }),
            l = nZ({ data: a, filter: n }),
            { getAllInformationsPerpsAccount: s } = (0, $.m)(),
            { accountIdsStates: d } = (0, o.O)();
          return (
            (0, C.useEffect)(() => {
              s();
            }, [d.accountIdSelected]),
            (0, r.jsxs)(nw.Container, {
              "data-testid": "chart-account",
              children: [
                (0, r.jsxs)(nw.Menu, {
                  children: [
                    (0, r.jsxs)(nw.Options, {
                      children: [
                        (0, r.jsx)(nw.Option, {
                          onClick: () => i("margin"),
                          active: "margin" === t,
                          option: "margin",
                          "data-testid": "margin-balance",
                          children: "Margin Balance",
                        }),
                        (0, r.jsx)(nw.Option, {
                          onClick: () => i("pnl"),
                          active: "pnl" === t,
                          option: "pnl",
                          disabled: !0,
                          "data-testid": "pnl",
                          children: "PnL",
                        }),
                      ],
                    }),
                    (0, r.jsx)(nw.TimeFrames, {
                      children: nI.map((t) =>
                        (0, r.jsx)(
                          nw.TimeFrame,
                          {
                            selected: t === n,
                            onClick: () => e(t),
                            children: t,
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
                (0, r.jsx)(na, { data: l }),
              ],
            })
          );
        };
      function nP() {
        let n = (0, s.Z)([
          "\n  border-radius: 0.5rem;\n  background: ",
          ";\n  strokewidth: 1px;\n  height: 0.1rem;\n  margin: 0.6rem 0;\n  width: 100%;\n",
        ]);
        return (
          (nP = function () {
            return n;
          }),
          n
        );
      }
      function nS() {
        let n = (0, s.Z)([
          "\n  > div {\n    font-family: ",
          ";\n    font-weight: 400;\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1.125rem;\n  }\n\n  > p {\n    -webkit-background-clip: text;\n    background-clip: text;\n    /* Headline/H4 */\n    font-family: ",
          ";\n    font-weight: 400;\n    font-size: 2rem;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 2.5rem;\n    margin-top: 0.4rem;\n\n    &:first-child {\n      font-size: 1.25rem;\n    }\n\n    color: ",
          ";\n  }\n  width: 100%;\n",
        ]);
        return (
          (nS = function () {
            return n;
          }),
          n
        );
      }
      function nB() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 100%;\n  gap: 1rem;\n",
        ]);
        return (
          (nB = function () {
            return n;
          }),
          n
        );
      }
      function nN() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem;\n  height: 16.75rem;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: ",
          ";\n  border: 1px solid var(--gradiente-02, #5afff3);\n  background: linear-gradient(\n    133deg,\n    rgba(90, 255, 243, 0.3) 1.71%,\n    rgba(90, 255, 243, 0.03) 98.28%\n  );\n  backdrop-filter: blur(10px);\n  width: fit-content;\n  color: var(--secondary);\n\n  /* Button/Button */\n  font-family: ",
          ";\n  font-weight: 400;\n  font-size: 0.875rem;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1.125rem; /* 128.571% */\n",
        ]);
        return (
          (nN = function () {
            return n;
          }),
          n
        );
      }
      function nz() {
        let n = (0, s.Z)([
          "\n  width: 100%;\n  font-family: ",
          ";\n  font-size: 0.875rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.125rem;\n  padding: 1rem;\n",
        ]);
        return (
          (nz = function () {
            return n;
          }),
          n
        );
      }
      function nR() {
        let n = (0, s.Z)([
          "\n  text-align: left;\n  width: 100%;\n  margin-bottom: 0.5rem;\n",
        ]);
        return (
          (nR = function () {
            return n;
          }),
          n
        );
      }
      function nT() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n",
        ]);
        return (
          (nT = function () {
            return n;
          }),
          n
        );
      }
      function nD() {
        let n = (0, s.Z)([
          "\n  margin-bottom: 0.5rem;\n  color: ",
          ";\n\n  > p {\n    font-weight: 400;\n  }\n  > span {\n    font-weight: 700;\n  }\n\n  > small {\n    width: 100%;\n    height: 1px;\n    background: ",
          ";\n    margin-bottom: 0.5rem;\n\n    &:nth-of-type(2) {\n      margin-top: 0.5rem;\n      margin-bottom: unset;\n    }\n  }\n\n  ",
          "\n",
        ]);
        return (
          (nD = function () {
            return n;
          }),
          n
        );
      }
      function nU() {
        let n = (0, s.Z)(["\n  gap: 0.5rem;\n"]);
        return (
          (nU = function () {
            return n;
          }),
          n
        );
      }
      function nL() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 0.5rem;\n",
        ]);
        return (
          (nL = function () {
            return n;
          }),
          n
        );
      }
      function nM() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n\n  color: ",
          ";\n",
        ]);
        return (
          (nM = function () {
            return n;
          }),
          n
        );
      }
      function nE() {
        let n = (0, s.Z)(["\n  width: 100%;\n  margin: 0.5rem 0;\n"]);
        return (
          (nE = function () {
            return n;
          }),
          n
        );
      }
      let nF = u.ZP.div.withConfig({
          displayName: "ChartInformations.styles__Divide",
          componentId: "sc-6221f164-0",
        })(nP(), (n) => {
          let { theme: e } = n;
          return e.colors.background["01"];
        }),
        nH = u.ZP.div.withConfig({
          displayName: "ChartInformations.styles__Value",
          componentId: "sc-6221f164-1",
        })(nS(), m.i, m.i, (n) => {
          let { theme: e } = n;
          return e.colors.neutral.white;
        }),
        nQ = u.ZP.div.withConfig({
          displayName: "ChartInformations.styles__ContainerProgress",
          componentId: "sc-6221f164-2",
        })(nB()),
        nV = u.ZP.div.withConfig({
          displayName: "ChartInformations.styles__ContainerInformation",
          componentId: "sc-6221f164-3",
        })(
          nN(),
          (n) => {
            let { $roundedEdge: e } = n;
            return !1 === e ? "0.25rem" : "0.5rem";
          },
          m.i
        ),
        nW = (0, u.ZP)(nV).withConfig({
          displayName: "ChartInformations.styles__ContainerAccountInformation",
          componentId: "sc-6221f164-4",
        })(nz(), m.i),
        nO = u.ZP.div.withConfig({
          displayName: "ChartInformations.styles__TitleAccountInformation",
          componentId: "sc-6221f164-5",
        })(nR()),
        n$ = u.ZP.div.withConfig({
          displayName: "ChartInformations.styles__Row",
          componentId: "sc-6221f164-6",
        })(nT()),
        nK = (0, u.ZP)(n$).withConfig({
          displayName: "ChartInformations.styles__RowAccountInformation",
          componentId: "sc-6221f164-7",
        })(
          nD(),
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.divide["01"];
          },
          (n) => {
            let { $hasDivider: e } = n;
            return (
              e &&
              "\n    display: flex;\n    flex-direction: column;\n    align-items: space-between;\n    justify-content: center;\n\n\n    > div {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n\n      > p {\n        font-weight: 400;\n      }\n\n      > span {\n        font-weight: 700;\n    }\n    "
            );
          }
        ),
        nJ = (0, u.ZP)(n$).withConfig({
          displayName: "ChartInformations.styles__ContainerChartInformations",
          componentId: "sc-6221f164-8",
        })(nU()),
        nG = u.ZP.div.withConfig({
          displayName: "ChartInformations.styles__Column",
          componentId: "sc-6221f164-9",
        })(nL()),
        nX = u.ZP.div.withConfig({
          displayName: "ChartInformations.styles__TitlePreZRS",
          componentId: "sc-6221f164-10",
        })(nM(), (n) => {
          let { theme: e } = n;
          return e.colors.neutral.white;
        }),
        nq = u.ZP.div.withConfig({
          displayName: "ChartInformations.styles__ContainerPreZRSButton",
          componentId: "sc-6221f164-11",
        })(nE()),
        nY = {
          Divide: nF,
          ContainerProgress: nQ,
          ContainerInformation: nV,
          Row: n$,
          Value: nH,
          Column: nG,
          ContainerChartInformations: nJ,
          ContainerAccountInformation: nW,
          RowAccountInformation: nK,
          TitleAccountInformation: nO,
          TitlePreZRS: nX,
          ContainerPreZRSButton: nq,
        },
        n0 = () =>
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
          });
      var n1 = t(16520),
        n5 = t(50578),
        n2 = t(95417),
        n4 = t(24561);
      let n3 = (n) => {
        let { width: e, height: t, margin: i } = n;
        return (0, r.jsx)(n4.ZP, {
          speed: 1,
          backgroundColor: no.y0.skeleton["01"],
          foregroundColor: no.y0.skeleton["02"],
          style: {
            width: e,
            maxWidth: e,
            height: t || "1.75rem",
            margin: i || "-0.6rem 0 0 0",
            borderRadius: "0.25rem",
          },
          children: (0, r.jsx)("rect", {
            x: "0",
            y: "10",
            rx: "0.25rem",
            ry: "0.25rem",
            width: "100%",
            height: "2.5rem",
          }),
        });
      };
      function n8() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: 100%;\n",
        ]);
        return (
          (n8 = function () {
            return n;
          }),
          n
        );
      }
      function n7() {
        let n = (0, s.Z)([
          "\n  color: ",
          ";\n\n  /* Body/Body Small */\n  font-family: ",
          ";\n  font-weight: 400;\n  font-size: 0.875rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.125rem; /* 128.571% */\n  min-width: 1.5rem;\n",
        ]);
        return (
          (n7 = function () {
            return n;
          }),
          n
        );
      }
      function n6() {
        let n = (0, s.Z)([
          "\n  color: ",
          ";\n  text-align: right;\n\n  /* Body/Body Small */\n  font-family: ",
          ";\n  font-weight: 400;\n  font-size: 0.875rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.125rem;\n",
        ]);
        return (
          (n6 = function () {
            return n;
          }),
          n
        );
      }
      function n9() {
        let n = (0, s.Z)([
          "\n  color: var(--neutral-white);\n\n  /* Body/Body Small */\n  font-family: ",
          ";\n  font-weight: 400;\n  font-size: 0.875rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.125rem;\n  white-space: nowrap;\n",
        ]);
        return (
          (n9 = function () {
            return n;
          }),
          n
        );
      }
      function en() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  background: linear-gradient(115deg, #0ecb81, #ff9900, #ff9900, #f6465d);\n  height: 0.5rem;\n  width: ",
          ";\n  border-radius: 1rem;\n",
        ]);
        return (
          (en = function () {
            return n;
          }),
          n
        );
      }
      function ee() {
        let n = (0, s.Z)([
          "\n  position: absolute;\n  height: 0.4rem;\n  width: ",
          "%;\n  background-color: ",
          ";\n  border-radius: 1rem;\n  transition: all 1s;\n",
        ]);
        return (
          (ee = function () {
            return n;
          }),
          n
        );
      }
      function et() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: ",
          ";\n\n  > span {\n    position: relative;\n\n    &:hover {\n      cursor: pointer;\n\n      > small {\n        display: flex;\n      }\n    }\n\n    > small {\n      display: none;\n    }\n  }\n",
        ]);
        return (
          (et = function () {
            return n;
          }),
          n
        );
      }
      function er() {
        let n = (0, s.Z)([
          "\n  position: absolute;\n  z-index: 3;\n  top: -4px;\n  left: 0;\n",
        ]);
        return (
          (er = function () {
            return n;
          }),
          n
        );
      }
      let ei = u.ZP.div.withConfig({
          displayName: "Progress.styles__Container",
          componentId: "sc-578b5d93-0",
        })(n8()),
        eo = u.ZP.div.withConfig({
          displayName: "Progress.styles__Text",
          componentId: "sc-578b5d93-1",
        })(
          n7(),
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          m.i
        ),
        ea = u.ZP.div.withConfig({
          displayName: "Progress.styles__Percentage",
          componentId: "sc-578b5d93-2",
        })(
          n6(),
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          m.i
        ),
        el = u.ZP.div.withConfig({
          displayName: "Progress.styles__ValueUSD",
          componentId: "sc-578b5d93-3",
        })(n9(), m.i),
        es = u.ZP.div.withConfig({
          displayName: "Progress.styles__BarOfProgress",
          componentId: "sc-578b5d93-4",
        })(en(), (n) => {
          let { $width: e } = n;
          return e;
        }),
        ed = u.ZP.div.withConfig({
          displayName: "Progress.styles__FilledProgress",
          componentId: "sc-578b5d93-5",
        })(
          ee(),
          (n) => {
            let { percentage: e } = n;
            return Math.ceil(e);
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          }
        ),
        ec = u.ZP.div.withConfig({
          displayName: "Progress.styles__Row",
          componentId: "sc-578b5d93-6",
        })(et(), (n) => {
          let { $width: e } = n;
          return "100%" !== e ? "fit-content" : e;
        }),
        eu = u.ZP.div.withConfig({
          displayName: "Progress.styles__ArrowContainer",
          componentId: "sc-578b5d93-7",
        })(er()),
        em = {
          Container: ei,
          Text: eo,
          Percentage: ea,
          ValueUSD: el,
          BarOfProgress: es,
          FilledProgress: ed,
          Row: ec,
          ArrowContainer: eu,
        },
        ef = (n) => {
          let {
              text: e,
              value: t,
              maxValue: i,
              showOnlyPercentage: a = !1,
              skeletonWidth: l,
              skeletonHeight: s,
              skeletonMargin: d,
              $width: u = "100%",
              $tooltipText: m,
              $tooltipBoxLeft: f,
              $tooltipBoxTop: g,
            } = n,
            h =
              "number" != typeof t ||
              "number" != typeof i ||
              ("number" == typeof i && 0 === i)
                ? 0
                : (100 * t) / i,
            { getAllInformationsPerpsAccount: p } = (0, N.mA)(),
            { accountIdsStates: x } = (0, o.O)(),
            { initialMargin: b } = (0, N.h)();
          return (
            (0, C.useEffect)(() => {
              p();
            }, [x.accountIdSelected]),
            (0, r.jsxs)(em.Container, {
              children: [
                (0, r.jsx)(em.Text, { "data-testid": "progress", children: e }),
                void 0 !== b
                  ? (0, r.jsxs)(em.Row, {
                      $width: u,
                      children: [
                        !a &&
                          (0, r.jsxs)("span", {
                            children: [
                              (0, r.jsx)("img", {
                                src: n1.Z.src,
                                alt: "Info Icon",
                                className: "info",
                                width: 12,
                              }),
                              (0, r.jsxs)(n5.u, {
                                $fontSize: "0.75rem",
                                $boxLeft: f,
                                $boxTop: g,
                                $arrowBottom: "0px",
                                $width: "14.437rem",
                                children: [m, (0, r.jsx)("p", {})],
                              }),
                            ],
                          }),
                        (0, r.jsxs)(em.BarOfProgress, {
                          $width: u,
                          children: [
                            (0, r.jsx)(em.FilledProgress, { percentage: h }),
                            (0, r.jsx)(em.ArrowContainer, {
                              children: (0, r.jsx)(n0, {}),
                            }),
                          ],
                        }),
                        (0, r.jsxs)(em.Percentage, {
                          $showOnlyPercentage: a,
                          children: [h.toFixed(2), "%"],
                        }),
                      ],
                    })
                  : x.accountIdSelected
                  ? n3({ width: l || "45%", margin: d, height: s })
                  : "-",
                a
                  ? !a && n3({ width: l || "35%" })
                  : (0, r.jsxs)(em.ValueUSD, {
                      children: [
                        void 0 !== t && t > 0
                          ? (0, n2.T5)(Number(t) / 1e18, 2)
                          : "-",
                        " ",
                        "USD",
                      ],
                    }),
              ],
            })
          );
        };
      var eg = t(67624),
        eh = {
          src: "/_next/static/media/zaros-logo-loading.474abb50.gif",
          height: 1080,
          width: 1080,
          blurWidth: 0,
          blurHeight: 0,
        };
      let ep = () => {
        let { getAllInformationsPerpsAccount: n, accountLeverage: e } = (0,
          N.mA)(),
          { data: t } = (0, O.z)(),
          {
            marginBalanceFormatted: i,
            initialMargin: l,
            maintenanceMargin: s,
            marginBalance: d,
          } = (0, N.h)(),
          { accountIdsStates: u } = (0, o.O)(),
          m = (0, r.jsxs)(r.Fragment, {
            children: [
              "Initial Margin: 3,715.6913 USD Margin Balance: 215,154.3233 USD Initial Margin Rate (IMR) = Initial Margin / (Margin Balance - Haircut Loss)* 100%",
              (0, r.jsx)("div", {}),
              "When IMR is ≥ 100%, it indicates that all the margin balance has been deployed to your positions and orders. In this case, you can no longer place any orders that may increase your position size.",
              (0, r.jsx)("div", {}),
              "The initial margin for all positions and orders under the Trading Account will be converted to USD in real time to derive the total initial margin under the account.",
            ],
          }),
          f = (0, r.jsxs)(r.Fragment, {
            children: [
              "Maintenance Margin: 193.5331 USD Margin Balance: 215,100.2439 USD Maintenance Margin Rate (MMR) = Maintenance Margin / (Margin Balance - Haircut Loss)* 100%",
              (0, r.jsx)("div", {}),
              "When MMR is ",
              ">=",
              " 100%, all positions under the Trading Account will be liquidated to meet the maintenance margin requirements.",
              (0, r.jsx)("div", {}),
              "The maintenance margin for all positions and orders under the Trading Account will be converted to USD in real-time to derive the total maintenance margin under the account.",
              " ",
            ],
          });
        return (
          (0, C.useEffect)(() => {
            n();
          }, [u.accountIdSelected]),
          (0, r.jsxs)(nY.ContainerChartInformations, {
            "data-testid": "chart-informations",
            children: [
              (0, r.jsx)(a.x, {
                height: "22.75rem",
                width: "72.5%",
                padding: "0",
                borderRadius: "8px",
                $isLoadingBackground: void 0 === i,
                $hasNoBorder: void 0 === i,
                children:
                  void 0 !== i
                    ? (0, r.jsx)(n_, {})
                    : (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(eg.j.Loading, {
                            children: (0, r.jsx)("img", {
                              src: eh.src,
                              alt: "Inova Loading",
                              width: 150,
                              height: 150,
                            }),
                          }),
                          (0, r.jsx)(nw.ContainerLoading, {}),
                        ],
                      }),
              }),
              (0, r.jsxs)(nY.Column, {
                children: [
                  (0, r.jsx)(a.x, {
                    padding: "0",
                    $hasNoBorder: !0,
                    children: (0, r.jsx)(nY.ContainerAccountInformation, {
                      children: (0, r.jsxs)(nY.Value, {
                        children: [
                          (0, r.jsx)(nY.TitleAccountInformation, {
                            children: "Account Information",
                          }),
                          (0, r.jsxs)(nY.RowAccountInformation, {
                            children: [
                              (0, r.jsx)("p", { children: "Open Interest" }),
                              void 0 !== i
                                ? (0, r.jsx)("span", { children: " - " })
                                : u.accountIdSelected
                                ? n3({ width: "6.625rem" })
                                : "-",
                            ],
                          }),
                          (0, r.jsxs)(nY.RowAccountInformation, {
                            children: [
                              (0, r.jsx)("p", { children: "Account Leverage" }),
                              void 0 !== i
                                ? (0, r.jsxs)("span", {
                                    children: [
                                      " ",
                                      0 === Number(e)
                                        ? "-"
                                        : "".concat(e, " x"),
                                    ],
                                  })
                                : u.accountIdSelected
                                ? n3({ width: "5.5625rem" })
                                : "-",
                            ],
                          }),
                          (0, r.jsxs)(nY.RowAccountInformation, {
                            $hasDivider: !0,
                            children: [
                              (0, r.jsx)("small", {}),
                              (0, r.jsxs)("div", {
                                children: [
                                  (0, r.jsx)("p", {
                                    children: "Pre-season Ranking",
                                  }),
                                  void 0 !== i
                                    ? (0, r.jsx)("span", { children: " -" })
                                    : u.accountIdSelected
                                    ? n3({ width: "2.3125rem" })
                                    : "-",
                                ],
                              }),
                              (0, r.jsx)("small", {}),
                            ],
                          }),
                          (0, r.jsxs)(nY.RowAccountInformation, {
                            children: [
                              (0, r.jsx)("p", { children: "Inova Points" }),
                              void 0 !== i
                                ? (0, r.jsxs)("span", {
                                    children: [
                                      " ",
                                      (null == t ? void 0 : t.points)
                                        ? "".concat(
                                            null == t ? void 0 : t.points,
                                            " pts"
                                          )
                                        : "-",
                                    ],
                                  })
                                : u.accountIdSelected
                                ? n3({ width: "2.3125rem" })
                                : "-",
                            ],
                          }),
                          (0, r.jsxs)(nY.RowAccountInformation, {
                            children: [
                              (0, r.jsx)("p", { children: "Points Ranking" }),
                              void 0 !== i
                                ? (0, r.jsxs)("span", {
                                    children: [
                                      " ",
                                      (null == t ? void 0 : t.rank)
                                        ? "".concat(null == t ? void 0 : t.rank)
                                        : "-",
                                    ],
                                  })
                                : u.accountIdSelected
                                ? n3({ width: "2.3125rem" })
                                : "-",
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, r.jsx)(a.x, {
                    borderRadius: "8px",
                    children: (0, r.jsxs)(nY.ContainerProgress, {
                      children: [
                        (0, r.jsx)(ef, {
                          text: "IM",
                          value: l,
                          maxValue: d,
                          $tooltipText: m,
                          $tooltipBoxTop: "-270px",
                          $tooltipBoxLeft: "-12px",
                          $width: "6.875rem",
                        }),
                        (0, r.jsx)(ef, {
                          text: "MM",
                          value: s,
                          maxValue: d,
                          $tooltipText: f,
                          $tooltipBoxLeft: "-12px",
                          $width: "6.875rem",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var ex = t(43082);
      function eb() {
        let n = (0, s.Z)([
          "\n  width: fit-content;\n  margin-top: 1.5rem;\n  display: flex;\n  align-items: flex-end;\n  gap: 0.5rem;\n",
        ]);
        return (
          (eb = function () {
            return n;
          }),
          n
        );
      }
      function eA() {
        let n = (0, s.Z)([
          "\n  width: 100%;\n  margin-top: 1.5rem;\n  margin-bottom: 0.72rem;\n  display: flex;\n  align-items: center;\n  gap: 2.5rem;\n",
        ]);
        return (
          (eA = function () {
            return n;
          }),
          n
        );
      }
      function ey() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 0.5rem;\n\n  > div {\n    color: var(--secondary);\n\n    font-family: ",
          ";\n    font-weight: 400;\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1.125rem; /* 128.571% */\n  }\n\n  > p {\n    color: var(--secondary);\n    -webkit-background-clip: text;\n    background-clip: text;\n    /* Headline/H4 */\n    font-family: ",
          ";\n    font-weight: 400;\n    font-size: 1.5rem;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 2.5rem;\n    margin-top: 0.4rem;\n    margin-bottom: -1rem;\n    white-space: nowrap;\n\n    &:first-child {\n      font-size: 1.25rem;\n    }\n\n    small {\n      font-size: 1rem;\n      font-family: ",
          ";\n      font-weight: 300;\n      font-weight: 500;\n      text-fill-color: var(--neutral-white);\n      -webkit-text-fill-color: var(--neutral-white);\n    }\n\n    span {\n      font-size: 1.15rem;\n    }\n  }\n",
        ]);
        return (
          (ey = function () {
            return n;
          }),
          n
        );
      }
      function ew() {
        let n = (0, s.Z)([
          "\n  > div {\n    color: ",
          ";\n    font-family: ",
          ";\n    font-weight: 400;\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1.125rem; /* 128.571% */\n    height: 1.5rem;\n  }\n\n  > p {\n    -webkit-background-clip: text;\n    background-clip: text;\n    font-family: ",
          ";\n    font-weight: 500;\n    font-size: 1.5rem;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 2.5rem;\n    margin-top: 0.4rem;\n\n    &:first-child {\n      font-size: 1.25rem;\n    }\n\n    color: white;\n  }\n  width: 100%;\n",
        ]);
        return (
          (ew = function () {
            return n;
          }),
          n
        );
      }
      function ev() {
        let n = (0, s.Z)(["\n          color: white;\n        "]);
        return (
          (ev = function () {
            return n;
          }),
          n
        );
      }
      function eC() {
        let n = (0, s.Z)([
          "\n          color: var(--green) !important;\n        ",
        ]);
        return (
          (eC = function () {
            return n;
          }),
          n
        );
      }
      function ej() {
        let n = (0, s.Z)([
          "\n          color: var(--red) !important;\n        ",
        ]);
        return (
          (ej = function () {
            return n;
          }),
          n
        );
      }
      function ek() {
        let n = (0, s.Z)(["\n        color: var(--green) !important;\n      "]);
        return (
          (ek = function () {
            return n;
          }),
          n
        );
      }
      function eZ() {
        let n = (0, s.Z)([
          "\n  -webkit-background-clip: text;\n  background-clip: text;\n  /* Headline/H4 */\n  font-family: ",
          ";\n  font-weight: 400;\n  font-size: 2rem;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 2.5rem;\n  margin-top: 0.4rem;\n\n  &:first-child {\n    font-size: 1.25rem;\n  }\n\n  small {\n    font-size: 1rem;\n    font-family: ",
          ";\n    font-weight: 300;\n    font-weight: 500;\n    text-fill-color: var(--neutral-white);\n    -webkit-text-fill-color: var(--neutral-white);\n  }\n\n  span {\n    font-size: 1.15rem;\n  }\n\n  ",
          "\n",
        ]);
        return (
          (eZ = function () {
            return n;
          }),
          n
        );
      }
      function eI() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem;\n  justify-content: center;\n  align-items: center;\n  border-radius: ",
          ";\n  background: linear-gradient(\n    133deg,\n    rgba(90, 255, 243, 0.3) 1.71%,\n    rgba(90, 255, 243, 0.03) 98.28%\n  );\n  backdrop-filter: blur(10px);\n  width: fit-content;\n  color: var(--secondary);\n\n  /* Button/Button */\n  font-family: ",
          ";\n  font-weight: 400;\n  font-size: 0.875rem;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1.125rem; /* 128.571% */\n  height: 5.125rem;\n  min-width: 12rem;\n\n  &:first-child {\n    margin: ",
          ";\n  }\n\n  &:nth-child(1),\n  &:nth-child(2) {\n    margin-right: 0.5rem;\n  }\n\n  &::before {\n    content: '';\n    display: none;\n    z-index: -1;\n    position: absolute;\n    display: block;\n    inset: 0;\n    border-radius: 0.5rem;\n    padding: 0.08rem;\n    background: linear-gradient(\n      160deg,\n      var(--secondary-600) 30%,\n      var(--secondary-200) 100.08%\n    );\n    -webkit-mask: linear-gradient(var(--neutral-white) 0 0) content-box,\n      linear-gradient(var(--neutral-white) 0 0);\n    -webkit-mask-composite: xor;\n    mask-composite: exclude;\n  }\n",
        ]);
        return (
          (eI = function () {
            return n;
          }),
          n
        );
      }
      function e_() {
        let n = (0, s.Z)([
          "\n      &:hover {\n        > small {\n          display: flex;\n          opacity: 1;\n        }\n      }\n    ",
        ]);
        return (
          (e_ = function () {
            return n;
          }),
          n
        );
      }
      function eP() {
        let n = (0, s.Z)([
          "\n  border: none;\n  padding: 0.5rem 1rem;\n\n  > small {\n    opacity: 0;\n    display: none;\n  }\n\n  ",
          "\n\n  &::before {\n    content: '';\n    display: none;\n    z-index: -1;\n    position: absolute;\n    display: block;\n    inset: 0;\n    border-radius: 0.25rem;\n    padding: 0.08rem;\n    background: linear-gradient(\n      160deg,\n      var(--primary-900) 50%,\n      var(--secondary-200) 100.08%\n    );\n    -webkit-mask: linear-gradient(var(--neutral-white) 0 0) content-box,\n      linear-gradient(var(--neutral-white) 0 0);\n    -webkit-mask-composite: xor;\n    mask-composite: exclude;\n  }\n",
        ]);
        return (
          (eP = function () {
            return n;
          }),
          n
        );
      }
      function eS() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 0.4rem;\n\n  > img {\n    width: 1.8rem;\n    height: 1.8rem;\n    border-radius: 50%;\n    box-shadow: 3px 7px 5px -3px rgba(0, 0, 0, 0.5),\n      -2px -1.5px 5px 0px rgba(255, 255, 255, 0.2);\n  }\n",
        ]);
        return (
          (eS = function () {
            return n;
          }),
          n
        );
      }
      function eB() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  justify-content: ",
          ";\n  width: 100%;\n  gap: 2rem 1rem;\n  max-width: 1440px;\n\n  @media (max-width: 1440px) {\n    flex-wrap: wrap;\n  }\n",
        ]);
        return (
          (eB = function () {
            return n;
          }),
          n
        );
      }
      function eN() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n\n  > span {\n    display: ",
          ";\n  }\n",
        ]);
        return (
          (eN = function () {
            return n;
          }),
          n
        );
      }
      function ez() {
        let n = (0, s.Z)([
          "\n  font-family: ",
          ";\n  font-weight: 700;\n  text-align: left;\n  width: 100%;\n  margin-left: 1rem;\n",
        ]);
        return (
          (ez = function () {
            return n;
          }),
          n
        );
      }
      let eR = u.ZP.div.withConfig({
          displayName: "HeaderInformations.styles__ContentButtons",
          componentId: "sc-54e7f6d8-0",
        })(eb()),
        eT = u.ZP.div.withConfig({
          displayName: "HeaderInformations.styles__ContentInformations",
          componentId: "sc-54e7f6d8-1",
        })(eA()),
        eD = u.ZP.div.withConfig({
          displayName: "HeaderInformations.styles__NetBalanceContainer",
          componentId: "sc-54e7f6d8-2",
        })(ey(), m.i, m.i, m.i),
        eU = u.ZP.div.withConfig({
          displayName: "HeaderInformations.styles__Value",
          componentId: "sc-54e7f6d8-3",
        })(
          ew(),
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          m.i,
          m.i
        ),
        eL = u.ZP.p.withConfig({
          displayName: "HeaderInformations.styles__UnrealizedPnlValue",
          componentId: "sc-54e7f6d8-4",
        })(eZ(), m.i, m.i, (n) => {
          let { value: e } = n;
          return "number" != typeof e
            ? (0, u.iv)(ek())
            : 0 === e
            ? (0, u.iv)(ev())
            : e > 0
            ? (0, u.iv)(eC())
            : (0, u.iv)(ej());
        }),
        eM = u.ZP.div.withConfig({
          displayName: "HeaderInformations.styles__ContainerInformation",
          componentId: "sc-54e7f6d8-5",
        })(
          eI(),
          (n) => {
            let { $roundedEdge: e } = n;
            return !1 === e ? "0.25rem" : "0.5rem";
          },
          m.i,
          (n) => {
            let { $isVisible: e } = n;
            return e ? "0 1.5rem 0 0" : "0 0 0 3rem";
          }
        ),
        eE = (0, u.ZP)(eM).withConfig({
          displayName: "HeaderInformations.styles__ContainerMint",
          componentId: "sc-54e7f6d8-6",
        })(eP(), (n) => !n.$isUserEnabledToMint && (0, u.iv)(e_())),
        eF = u.ZP.div.withConfig({
          displayName: "HeaderInformations.styles__ContentMint",
          componentId: "sc-54e7f6d8-7",
        })(eS()),
        eH = u.ZP.div.withConfig({
          displayName: "HeaderInformations.styles__Row",
          componentId: "sc-54e7f6d8-8",
        })(eB(), (n) => {
          let { $hasAccount: e } = n;
          return e ? "space-between" : "unset";
        }),
        eQ = u.ZP.div.withConfig({
          displayName: "HeaderInformations.styles__BalanceInformations",
          componentId: "sc-54e7f6d8-9",
        })(eN(), (n) => {
          let { $isVisible: e } = n;
          return e ? "flex" : "none";
        }),
        eV = u.ZP.div.withConfig({
          displayName: "HeaderInformations.styles__MintTitle",
          componentId: "sc-54e7f6d8-10",
        })(ez(), m.i),
        eW = {
          ContentButtons: eR,
          NetBalanceContainer: eD,
          ContentInformations: eT,
          UnrealizedPnlValue: eL,
          ContainerInformation: eM,
          ContentMint: eF,
          Row: eH,
          Value: eU,
          BalanceInformations: eQ,
          MintTitle: eV,
          ContainerMint: eE,
        };
      function eO() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  padding: 0.25rem;\n  justify-content: flex-end;\n  align-items: center;\n  border-radius: 0.25rem;\n  gap: 0 0.25rem;\n  background: #1c2022;\n  color: ",
          ";\n  font-family: ",
          ";\n  font-size: 0.75rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n\n  > img {\n    width: 1rem;\n    height: 1rem;\n  }\n",
        ]);
        return (
          (eO = function () {
            return n;
          }),
          n
        );
      }
      let e$ = u.ZP.div.withConfig({
          displayName: "Percentage.styles__Container",
          componentId: "sc-b8ef346a-0",
        })(
          eO(),
          (n) => {
            let { $color: e, theme: t } = n;
            return t.colors.neutral[e];
          },
          m.i
        ),
        eK = { Container: e$ },
        eJ = (n) => {
          let { value: e = 0 } = n;
          return (0, r.jsxs)(eK.Container, {
            $color: (0, n2.eX)(e),
            "data-testid": "percentage-container",
            children: [
              "".concat((0, n2.T5)(e, 2), "%"),
              (0, r.jsx)("p", { children: "-" }),
            ],
          });
        },
        eG = (n) => {
          let { width: e, height: t, margin: i } = n;
          return (0, r.jsx)(n4.ZP, {
            speed: 1,
            backgroundColor: no.y0.skeleton["01"],
            foregroundColor: no.y0.skeleton["02"],
            style: {
              width: e || "5.1875rem",
              maxWidth: e || "5.1875rem",
              height: t || "2.5rem",
              margin: i || "-0.6rem 0 0 0",
              borderRadius: "0.25rem",
            },
            children: (0, r.jsx)("rect", {
              x: "0",
              y: "10",
              rx: "0.25rem",
              ry: "0.25rem",
              width: "100%",
              height: "2.25rem",
            }),
          });
        },
        eX = () => {
          var n;
          let [e, t] = (0, C.useState)(!1),
            { accountIdsStates: r, disconnect: i, isActive: a } = (0, o.O)(),
            l =
              (null === (n = r.accountIds) || void 0 === n
                ? void 0
                : n.length) > 0 && e;
          (0, C.useEffect)(() => {
            t(a);
          }, [a, i]);
          let s = (n) => {
              let {
                skeletonWidth: e,
                skeletonHeight: t,
                skeletonMargin: r,
                skeleton: i,
                value: o,
              } = n;
              return void 0 !== o
                ? o
                  ? "$ ".concat(o)
                  : "-"
                : l
                ? i({ width: e, height: t, margin: r })
                : "$ -";
            },
            d = (n) => {
              let { width: e, height: t, buttonsAmount: r } = n,
                i = [];
              for (let n = 0; n < r; n++) i.push(eG({ width: e, height: t }));
              return i;
            };
          return {
            handleSkeletonLoading: s,
            loadButtonsSkeleton: d,
            isAccountVisible: l,
          };
        },
        eq = (n) => {
          let { width: e, height: t, margin: i } = n;
          return (0, r.jsx)(n4.ZP, {
            speed: 1,
            backgroundColor: no.y0.skeleton["01"],
            foregroundColor: no.y0.skeleton["02"],
            style: {
              width: e,
              maxWidth: e,
              height: t || "2.5rem",
              margin: i,
              marginBottom: "-0.75rem",
              borderRadius: "0.25rem",
            },
            children: (0, r.jsx)("rect", {
              x: "0",
              y: "10",
              rx: "0.25rem",
              ry: "0.25rem",
              width: "100%",
              height: "2.5rem",
            }),
          });
        },
        eY = () => {
          let { setIsOpen: n } = (0, i.d)(),
            { isAccountVisible: e, handleSkeletonLoading: t } = eX(),
            { loadCollateralsDataToTable: s } = (0, N.Cn)(),
            {
              mint: d,
              mintButtonText: u,
              verifyIfUserIsEnabledToMint: m,
              isUserEnabledToMint: f,
            } = (0, ex.D)(),
            { getAllInformationsPerpsAccount: g, equityUsd: h } = (0, N.mA)(),
            {
              account: p,
              setShowChooseWalletComponent: x,
              setOpenMenuWalletComponent: b,
              accountIdsStates: A,
            } = (0, o.O)(),
            { marginBalanceFormatted: y, availableMargin: w } = (0, N.h)(),
            j = (e) => {
              if (!p) {
                x(!0), b(!0);
                return;
              }
              n({ name: e });
            },
            k = () => {
              if (!p) {
                x(!0), b(!0);
                return;
              }
              d();
            };
          return (
            (0, C.useEffect)(() => {
              g(), s(), m();
            }, [A.accountIdSelected]),
            (0, r.jsx)(a.x, {
              borderRadius: "0.5rem",
              padding: "1rem 0.6rem 1rem 1rem",
              dataTestId: "header-informations",
              children: (0, r.jsxs)(eW.Row, {
                $hasAccount: e,
                children: [
                  (0, r.jsxs)(eW.NetBalanceContainer, {
                    children: [
                      (0, r.jsx)("div", { children: "Equity" }),
                      (0, r.jsx)("p", {
                        children: t({
                          skeleton: eq,
                          value: null == h ? void 0 : h.slice(1),
                          skeletonWidth: "23rem",
                          skeletonHeight: "3rem",
                          skeletonMargin: "-2rem 0 0 0",
                        }),
                      }),
                    ],
                  }),
                  void 0 === h && e
                    ? null
                    : (0, r.jsxs)(eW.ContentButtons, {
                        children: [
                          (0, r.jsx)(l.z.Secondary, {
                            $borderRadius: "0.25rem",
                            width: "5.5rem",
                            $hasNoAccount: !e,
                            height: "2rem",
                            $fontSize: "0.81819rem",
                            onClick: () => {
                              e && j("deposit");
                            },
                            "data-testid": "deposit-button",
                            children: "Deposit",
                          }),
                          (0, r.jsx)(l.z.Outlined, {
                            $borderRadius: "0.25rem",
                            width: "5.5rem",
                            height: "2rem",
                            $hasNoAccount: !e,
                            $fontSize: "0.81819rem",
                            onClick: () => {
                              e && j("withdraw");
                            },
                            "data-testid": "withdraw-button",
                            children: "Withdraw",
                          }),
                        ],
                      }),
                  (0, r.jsxs)(eW.BalanceInformations, {
                    $isVisible: e,
                    children: [
                      (0, r.jsxs)(eW.ContainerMint, {
                        $roundedEdge: !1,
                        $isUserEnabledToMint: f,
                        children: [
                          (0, r.jsxs)(n5.u, {
                            $fontSize: "0.75rem",
                            $arrowBottom: "0px",
                            $width: "14.437rem",
                            $boxBottom: "3rem",
                            children: [
                              "You already minted 100,000.00 USDC",
                              (0, r.jsx)("p", {}),
                            ],
                          }),
                          (0, r.jsx)(eW.MintTitle, {
                            children: "Mint 100,000.00 USDC",
                          }),
                          (0, r.jsxs)(eW.ContentMint, {
                            children: [
                              (0, r.jsx)("img", { src: v.Z.src, alt: "USDz Icon" }),
                              (0, r.jsx)(l.z.Secondary, {
                                $borderRadius: "0.25rem",
                                width: "7rem",
                                height: "2rem",
                                $fontSize: "0.81819rem",
                                $bgColor:
                                  "var(--gradiente-05, linear-gradient(135deg, #56CFE1 5%, #45BFBD 47.53%, #6AFFDB 83.33%))",
                                onClick: () => k(),
                                "data-testid": "mint-button",
                                disabled: !f,
                                children: u,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("span", {
                        children: [
                          (0, r.jsx)(eW.ContainerInformation, {
                            "data-testid": "margin-balance",
                            children: (0, r.jsxs)(eW.Value, {
                              children: [
                                (0, r.jsxs)(eW.Row, {
                                  children: [
                                    (0, r.jsx)("div", {
                                      children: "Margin Balance",
                                    }),
                                    " ",
                                    A.accountIdSelected && void 0 === y
                                      ? eq({
                                          width: "3rem",
                                          height: "1.5rem",
                                          margin: "-.5rem 0 0 0",
                                        })
                                      : (0, r.jsx)(eJ, { value: 0 }),
                                  ],
                                }),
                                (0, r.jsx)("p", {
                                  children: t({
                                    skeleton: eq,
                                    value: y,
                                    skeletonWidth: "6rem",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)(eW.ContainerInformation, {
                            children: (0, r.jsxs)(eW.Value, {
                              "data-testid": "available-margin",
                              children: [
                                (0, r.jsx)("div", {
                                  children: "Available Margin",
                                }),
                                (0, r.jsx)("p", {
                                  children: t({
                                    skeleton: eq,
                                    value: w,
                                    skeletonWidth: "6rem",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)(eW.ContainerInformation, {
                            "data-testid": "unrealized-pnl",
                            children: (0, r.jsxs)(eW.Value, {
                              children: [
                                (0, r.jsxs)(eW.Row, {
                                  children: [
                                    (0, r.jsx)("div", {
                                      children: "Unrealized PnL",
                                    }),
                                    " ",
                                    (0, r.jsx)(eJ, { value: 0 }),
                                  ],
                                }),
                                (0, r.jsx)(eW.UnrealizedPnlValue, {
                                  value: 0,
                                  children: "$ -",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
      var e0 = t(61744);
      function e1() {
        let n = (0, s.Z)([
          "\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  gap: 0.5rem 0;\n  align-items: center;\n  justify-content: center;\n\n  > span {\n    color: var(--neutral-white);\n    font-family: 'Inter', sans-serif;\n    font-size: 0.875rem;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.125rem;\n  }\n",
        ]);
        return (
          (e1 = function () {
            return n;
          }),
          n
        );
      }
      let e5 = u.ZP.div.withConfig({
          displayName: "NoAccountInfo.styles__Content",
          componentId: "sc-71ebb5e0-0",
        })(e1()),
        e2 = { Content: e5 },
        e4 = () => {
          let {
              isActive: n,
              disconnect: e,
              setOpenMenuWalletComponent: t,
              setShowChooseWalletComponent: s,
            } = (0, o.O)(),
            [d, u] = (0, C.useState)(!1),
            { setIsOpen: m } = (0, i.d)();
          (0, C.useEffect)(() => {
            u(n);
          }, [n, e]);
          let f = () => {
              t(!0), s(!0);
            },
            g = () => (d ? m({ name: "createAccount" }) : f());
          return (0, r.jsx)(a.x, {
            borderRadius: "0.5rem",
            padding: "1rem 1rem 1rem 1rem",
            height: "13.5rem",
            children: (0, r.jsxs)(e2.Content, {
              children: [
                (0, r.jsx)("span", {
                  children: "Create Trading Account to start trading.",
                }),
                (0, r.jsxs)(l.z.CreateAccount, {
                  height: "1.75rem",
                  width: "15rem",
                  onClick: g,
                  dataTestId: "no-account-info",
                  children: [
                    (0, r.jsx)("img", {
                      src: e0.Z.src,
                      alt: "Inova Icon",
                      width: 16,
                    }),
                    "Deposit & Create Trading Account",
                  ],
                }),
              ],
            }),
          });
        };
      function e3() {
        let n = (0, s.Z)([
          "\n  width: 100%;\n  height: 3.4375rem;\n  box-shadow: inset -0.1875rem 0.1875rem 0.375rem rgba(14, 22, 25, 0.2),\n    inset 0.1875rem -0.1875rem 0.375rem rgba(14, 22, 25, 0.2),\n    inset -0.1875rem -0.1875rem 0.375rem rgba(58, 90, 101, 0.9),\n    inset 0.1875rem 0.1875rem 0.5rem rgba(14, 22, 25, 0.9);\n  background-color: ",
          ";\n  border-radius: 0.5rem;\n\n  td {\n    font-family: ",
          ";\n    font-weight: 400;\n    font-size: 1.125rem;\n    text-align: initial;\n    color: var(--secondary);\n    width: fit-content;\n  }\n\n  td:first-child {\n    width: 14.2rem;\n    border-bottom-left-radius: 0.5rem;\n    border-top-left-radius: 0.5rem;\n\n    div {\n      display: flex;\n      align-items: center;\n      margin: 0 0 0 1rem;\n      text-align: center;\n      color: var(--neutral-white);\n\n      img {\n        width: 1.5rem;\n        height: 1.5rem;\n        margin-right: 0.5rem;\n        border-radius: 50%;\n        box-shadow: 3px 7px 5px -3px rgba(0, 0, 0, 0.5),\n          -2px -1.5px 5px 0px rgba(255, 255, 255, 0.2);\n      }\n      > span {\n        > img {\n          object-fit: scale-down;\n          width: 12px;\n          height: 12px;\n          box-shadow: unset;\n        }\n      }\n    }\n\n    td:last-child {\n      border-bottom-right-radius: 0.5rem;\n      border-top-right-radius: 0.5rem;\n    }\n  }\n\n  td:first-child + td {\n    width: 14.2rem;\n  }\n",
        ]);
        return (
          (e3 = function () {
            return n;
          }),
          n
        );
      }
      function e8() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  justify-content: end;\n  margin-top: 0.7rem;\n  margin-right: 1rem;\n  gap: 1rem;\n",
        ]);
        return (
          (e8 = function () {
            return n;
          }),
          n
        );
      }
      let e7 = u.ZP.tr.withConfig({
          displayName: "Default.styles__BoxItem",
          componentId: "sc-cac9b75a-0",
        })(e3(), (n) => n.theme.components.table.line.background, m.i),
        e6 = u.ZP.div.withConfig({
          displayName: "Default.styles__ContainerButtons",
          componentId: "sc-cac9b75a-1",
        })(e8()),
        e9 = (n) => {
          var e;
          let { children: t, index: a, symbol: s } = n,
            { getAllInformationsPerpsAccount: d } = (0, N.mA)(),
            { marginBalance: c } = (0, N.h)(),
            { accountIdsStates: u } = (0, o.O)(),
            { collateralsData: m } = (0, N.Cn)(),
            { loadButtonsSkeleton: f } = eX(),
            { setIsOpen: g } = (0, i.d)();
          (0, C.useEffect)(() => {
            d();
          }, []);
          let h =
            null === (e = m[Number(a)]) || void 0 === e ? void 0 : e.disabled;
          return (0, r.jsxs)(e7, {
            children: [
              t,
              " ",
              (0, r.jsx)(e6, {
                children:
                  void 0 === c && 0 === a && u.accountIdSelected
                    ? f({
                        width: "5.5rem",
                        height: "2.75rem",
                        buttonsAmount: 2,
                      })
                    : (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(l.z.Tertiary, {
                            $borderRadius: "0.25rem",
                            width: "5.5rem",
                            height: "2rem",
                            $fontSize: "0.81819rem",
                            disabled: h,
                            onClick: () => {
                              g({ name: "deposit", props: { symbol: s } });
                            },
                            "data-testid": "deposit-button",
                            children: "Deposit",
                          }),
                          (0, r.jsx)(l.z.Tertiary, {
                            $borderRadius: "0.25rem",
                            width: "5.5rem",
                            height: "2rem",
                            $fontSize: "0.81819rem",
                            disabled: h,
                            onClick: () => {
                              g({ name: "withdraw", props: { symbol: s } });
                            },
                            "data-testid": "withdraw-button",
                            children: "Withdraw",
                          }),
                        ],
                      }),
              }),
            ],
          });
        };
      var tn = t(73553);
      let te = (n) => {
        let {
          header: e,
          body: t = [],
          BodyItem: i = e9,
          HeaderItem: o,
          bodyMessage: a,
          divide: l,
          $hasNoBorderSpacing: s,
          style: d,
        } = n;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(tn.H.Table, {
              $divide: l,
              $hasHeaderStyles: Boolean(o),
              $hasNoBorderSpacing: s,
              style: d,
              children: [
                (0, r.jsxs)("thead", {
                  children: [
                    (0, r.jsx)("tr", {
                      children:
                        null == e
                          ? void 0
                          : e.map((n) =>
                              o
                                ? (0, r.jsx)(o, { children: n }, n)
                                : (0, r.jsx)("th", { children: n }, n)
                            ),
                    }),
                    l ? (0, r.jsx)("tr", { className: "divide" }) : null,
                  ],
                }),
                (null == t ? void 0 : t.length)
                  ? (0, r.jsx)("tbody", {
                      children:
                        null == t
                          ? void 0
                          : t.map((n, e) => {
                              let t = Object.values(n),
                                o = n.token.props.children[1];
                              return (0, r.jsx)(
                                i,
                                {
                                  index: e,
                                  symbol: o,
                                  children:
                                    null == t
                                      ? void 0
                                      : t.map((n, e) =>
                                          (0, r.jsx)(
                                            "td",
                                            { children: n },
                                            n + e
                                          )
                                        ),
                                },
                                "".concat(t.join("")).concat(e)
                              );
                            }),
                    })
                  : null,
              ],
            }),
            t.length ? null : (0, r.jsx)(tn.H.Message, { children: a }),
          ],
        });
      };
      function tt() {
        let n = (0, s.Z)([
          "\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding: 4px 0px 0px 0px;\n\n  margin-bottom: 0.5rem;\n\n  .tabs {\n    display: flex;\n    align-items: center;\n    gap: 1.5rem;\n  }\n\n  div:last-child {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n\n    img {\n      cursor: pointer;\n    }\n  }\n\n  .options {\n    img {\n      width: 1rem;\n      height: 1rem;\n    }\n  }\n\n  border-bottom: 1px solid #275b69;\n  padding-bottom: 0.35rem;\n",
        ]);
        return (
          (tt = function () {
            return n;
          }),
          n
        );
      }
      function tr() {
        let n = (0, s.Z)(["\n  opacity: 0.5;\n  cursor: not-allowed;\n"]);
        return (
          (tr = function () {
            return n;
          }),
          n
        );
      }
      function ti() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  padding: 0.125rem 0rem;\n  height: 1.375rem;\n  list-style: none;\n  font-family: ",
          ";\n  font-weight: 700;\n  font-size: 0.75rem;\n  cursor: pointer;\n\n  ",
          ";\n\n  p {\n    transition: opacity 0.5s;\n    font-family: ",
          ";\n    font-weight: 700;\n    font-size: 0.875rem;\n    color: var(--secondary);\n    opacity: ",
          ";\n    border-bottom: ",
          ";\n    padding-bottom: 0.5rem;\n  }\n",
        ]);
        return (
          (ti = function () {
            return n;
          }),
          n
        );
      }
      function to() {
        let n = (0, s.Z)([
          "\n  color: ",
          ";\n  width: fit-content;\n  font-size: 0.875rem;\n  line-height: 1.125rem;\n  text-align: initial;\n\n  &:nth-child(4) {\n    padding-left: 8rem;\n\n    div {\n      display: flex;\n      align-items: center;\n      margin: 0 0 0 1rem;\n      text-align: center;\n      color: var(--neutral-white);\n\n      img {\n        width: 1.5rem;\n        height: 1.5rem;\n        margin-right: 0.5rem;\n        border-radius: 50%;\n        box-shadow: 3px 7px 5px -3px rgba(0, 0, 0, 0.5),\n          -2px -1.5px 5px 0px rgba(255, 255, 255, 0.2);\n      }\n      > span {\n        > img {\n          object-fit: scale-down;\n          width: 12px;\n          height: 12px;\n          box-shadow: unset;\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (to = function () {
            return n;
          }),
          n
        );
      }
      let ta = u.ZP.div.withConfig({
          displayName: "TableInformations.styles__Tabs",
          componentId: "sc-b07e4cc1-0",
        })(tt()),
        tl = (0, u.iv)(tr()),
        ts = u.ZP.li.withConfig({
          displayName: "TableInformations.styles__Tab",
          componentId: "sc-b07e4cc1-1",
        })(
          ti(),
          m.i,
          (n) => {
            let { disabled: e } = n;
            return e ? tl : null;
          },
          m.i,
          (n) => {
            let { $active: e } = n;
            return e ? "1" : "0.5";
          },
          (n) => {
            let { $active: e } = n;
            return e ? "2px solid var(--secondary)" : "0";
          }
        ),
        td = u.ZP.td.withConfig({
          displayName: "TableInformations.styles__HeaderItem",
          componentId: "sc-b07e4cc1-2",
        })(to(), (n) => {
          let { theme: e } = n;
          return e.colors.secondary["1100"];
        }),
        tc = { Tab: ts, Tabs: ta, HeaderItem: td },
        tu = () => {
          let [n, e] = (0, C.useState)("Balances"),
            { accountIdsStates: t } = (0, o.O)(),
            { getAllInformationsPerpsAccount: i } = (0, N.mA)(),
            { loadCollateralsDataToTable: l, collateralsData: s } = (0, N.Cn)(),
            d = s.map((n) => ({
              token: n.token,
              balance: n.balance,
              ltv: n.ltv,
              cap: n.cap,
            })),
            c = ["Positions", "FAQ", "Deposits & Withdrawals"],
            u = {
              Balances: (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)(te, {
                  BodyItem: e9,
                  header: ["Asset", "Balance", "LTV", "Cap"],
                  body: d,
                  HeaderItem: tc.HeaderItem,
                }),
              }),
              Positions: (0, r.jsx)(r.Fragment, {}),
              FAQ: (0, r.jsx)(r.Fragment, {}),
              "Deposits & Withdrawals": (0, r.jsx)(r.Fragment, {}),
            };
          return (
            (0, C.useEffect)(() => {
              i(), l();
            }, [t.accountIdSelected]),
            (0, r.jsxs)(a.x, {
              $zIndex: "0",
              degree: "175",
              height: "21.6875rem",
              borderRadius: "0.5rem",
              dataTestId: "table-informations",
              children: [
                (0, r.jsx)(tc.Tabs, {
                  children: (0, r.jsx)("ul", {
                    className: "tabs",
                    children: [
                      "Balances",
                      "Positions",
                      "FAQ",
                      "Deposits & Withdrawals",
                    ].map((t) => {
                      let i = c.includes(t);
                      return (0, r.jsx)(
                        tc.Tab,
                        {
                          $active: n === t,
                          disabled: i,
                          onClick: () => (i ? null : e(t)),
                          children: (0, r.jsx)("p", { children: t }),
                        },
                        t
                      );
                    }),
                  }),
                }),
                (0, r.jsx)("div", {
                  style: { overflow: "hidden auto" },
                  children: u[n],
                }),
              ],
            })
          );
        },
        tm = () => {
          var n;
          let { isActive: e, accountIdsStates: t, disconnect: i } = (0, o.O)(),
            { getAllInformationsPerpsAccount: a } = (0, N.mA)(),
            { loadCollateralsDataToTable: s } = (0, N.Cn)(),
            [d, c] = (0, C.useState)(!1);
          (0, C.useEffect)(() => {
            a(), s();
          }, [t.accountIdSelected]),
            (0, C.useEffect)(() => {
              c(e);
            }, [e, i]);
          let u =
            (null === (n = t.accountIds) || void 0 === n ? void 0 : n.length) >
              0 && d;
          return (0, r.jsxs)(W.Container, {
            $hasMarginTop: u,
            children: [
              (0, r.jsx)(W.Header, {
                $isVisible: !0,
                children: (0, r.jsx)(W.HeaderContent, {
                  children: (0, r.jsxs)(W.WelcomeContainer, {
                    children: [
                      (0, r.jsxs)(W.Welcome, {
                        children: [
                          (0, r.jsx)("p", { children: "Welcome" }),
                          u
                            ? (0, r.jsxs)("p", {
                                "data-testid": "user-accountid",
                                children: [
                                  "Trading Account",
                                  " ",
                                  (null == t ? void 0 : t.accountIdSelected) &&
                                    "#".concat(
                                      null == t ? void 0 : t.accountIdSelected
                                    ),
                                  " ",
                                  "Overview",
                                ],
                              })
                            : (0, r.jsx)("p", {
                                children:
                                  "Create an account before trading on Inova.",
                              }),
                        ],
                      }),
                      (0, r.jsxs)(W.FaucetBox, {
                        children: [
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("h1", {
                                children: "Get Arbitrum Sepolia ETH",
                              }),
                              (0, r.jsx)("div", {
                                children: (0, r.jsxs)("small", {
                                  children: [
                                    "In order to trade on ",
                                    (0, r.jsx)("span", {
                                      children: "Inova' Alpha Testnet",
                                    }),
                                    ", you need some",
                                    (0, r.jsx)("span", {
                                      children: " Arbitrum Sepolia ETH",
                                    }),
                                    ". You can get some for free at one of the faucets listed below.",
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, r.jsx)(B(), {
                            href: "https://www.alchemy.com/faucets/arbitrum-sepolia",
                            target: "_blank",
                            children: (0, r.jsx)(l.z.Secondary, {
                              $borderRadius: "0.25rem",
                              $fontSize: "0.81819rem",
                              children: "Go to Faucet",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, r.jsx)(eY, {}),
              u
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(ep, {}),
                      (0, r.jsx)(tu, { "data-testid": "table-informations" }),
                    ],
                  })
                : (0, r.jsx)(e4, {}),
            ],
          });
        };
      var tf = t(76459),
        tg = {
          src: "/_next/static/media/comming-soon.281a8213.webp",
          height: 244,
          width: 295,
          blurDataURL:
            "data:image/webp;base64,UklGRq4AAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAAAAIQBAMQAgAEQnk4NXlGBQptWHVzWm4LAS89TFA7MQEAAAAREQAAAAACAAIAAAABHE1JWU1PTRgAVlA4IE4AAADwAQCdASoIAAcAAkA4JbACdLoAAwdEwoAA/vPI6ieUJzYILP73zsKOF59PHZcx/ihM4wiPVGMP/Y7Ae7xkkf9u63i7l+pv/7Gb+soAAAA=",
          blurWidth: 8,
          blurHeight: 7,
        },
        th = t(98260);
      function tp() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  gap: 0.5rem;\n\n  margin-top: 8rem;\n",
        ]);
        return (
          (tp = function () {
            return n;
          }),
          n
        );
      }
      function tx() {
        let n = (0, s.Z)([
          "\n  color: ",
          ";\n  text-align: center;\n\n  font-family: ",
          ";\n  font-size: 0.75rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1rem; /* 133.333% */\n",
        ]);
        return (
          (tx = function () {
            return n;
          }),
          n
        );
      }
      function tb() {
        let n = (0, s.Z)(["\n  margin-top: 1.35rem;\n"]);
        return (
          (tb = function () {
            return n;
          }),
          n
        );
      }
      function tA() {
        let n = (0, s.Z)([""]);
        return (
          (tA = function () {
            return n;
          }),
          n
        );
      }
      function ty() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ",
          ";\n  height: ",
          ";\n  padding: 0.5rem 2rem;\n  align-self: stretch;\n  border-radius: ",
          ";\n  border: 1px solid ",
          ";\n  background: linear-gradient(\n    133deg,\n    rgba(90, 255, 243, 0.3) 1.71%,\n    rgba(90, 255, 243, 0.03) 98.28%\n  );\n  backdrop-filter: blur(10px);\n  margin-top: 0.5rem;\n\n  p {\n    color: ",
          ";\n    font-family: ",
          ";\n    font-size: 0.875rem;\n    font-style: normal;\n    font-weight: 700;\n    text-align: right;\n  }\n\n  span {\n    color: ",
          ";\n    font-family: ",
          ";\n    font-size: 1.5rem;\n    font-style: normal;\n    font-weight: 500;\n  }\n",
        ]);
        return (
          (ty = function () {
            return n;
          }),
          n
        );
      }
      function tw() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n",
        ]);
        return (
          (tw = function () {
            return n;
          }),
          n
        );
      }
      let tv = u.ZP.div.withConfig({
          displayName: "CommingSoon.styles__Container",
          componentId: "sc-611519ab-0",
        })(tp()),
        tC = u.ZP.div.withConfig({
          displayName: "CommingSoon.styles__Text",
          componentId: "sc-611519ab-1",
        })(tx(), no.y0.secondary[1100], m.i),
        tj = u.ZP.div.withConfig({
          displayName: "CommingSoon.styles__RankingContainer",
          componentId: "sc-611519ab-2",
        })(tb()),
        tk = u.ZP.div.withConfig({
          displayName: "CommingSoon.styles__UserStatsContainer",
          componentId: "sc-611519ab-3",
        })(tA()),
        tZ = u.ZP.div.withConfig({
          displayName: "CommingSoon.styles__Box",
          componentId: "sc-611519ab-4",
        })(
          ty(),
          (n) => {
            let { $width: e } = n;
            return e;
          },
          (n) => {
            let { $height: e } = n;
            return e;
          },
          (n) => {
            let { $borderRadius: e } = n;
            return e;
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.modal["01"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          m.i,
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          m.i
        ),
        tI = u.ZP.div.withConfig({
          displayName: "CommingSoon.styles__Header",
          componentId: "sc-611519ab-5",
        })(tw()),
        t_ = {
          Container: tv,
          RankingContainer: tj,
          UserStatsContainer: tk,
          Box: tZ,
          Text: tC,
          Header: tI,
        },
        tP = () => {
          let n = [{ name: "Pre-Season" }];
          return (0, r.jsxs)(t_.Container, {
            children: [
              (0, r.jsxs)(t_.RankingContainer, {
                children: [
                  (0, r.jsx)(t_.Text, { children: "Rank" }),
                  (0, r.jsx)(t_.Box, {
                    $width: "5.1875rem",
                    $height: "17.5rem",
                    $borderRadius: "0.5rem 0rem 0rem 0rem",
                  }),
                ],
              }),
              (0, r.jsxs)(t_.UserStatsContainer, {
                children: [
                  (0, r.jsxs)(t_.Header, {
                    children: [
                      (0, r.jsx)(t_.Text, {}),
                      (0, r.jsx)(t_.Text, { children: "User" }),
                      (0, r.jsx)(t_.Text, { children: "Pre-Season ROI" }),
                      (0, r.jsx)(t_.Text, {
                        children: "Pre-Season PnL (USDz)",
                      }),
                      (0, r.jsx)(th.Dropdown.PreSeason, {
                        currentValue: n[0],
                        options: n,
                        onChange: () => {},
                      }),
                    ],
                  }),
                  (0, r.jsx)(t_.Box, {
                    $width: "51rem",
                    $height: "17.5rem",
                    $borderRadius: "0rem 0.5rem 0rem 0rem",
                    children: (0, r.jsx)("img", {
                      width: 150,
                      src: tg.src,
                      alt: "Comming Soon",
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      var tS = {
        src: "/_next/static/media/elo-gigachad.65cb7ce5.webp",
        height: 547,
        width: 918,
        blurDataURL:
          "data:image/webp;base64,UklGRqoAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAASG4KQUEKbkgI7dL4+NLuCQCY/v///pkAAAKg8vKgAgAAABdQUBcAAABWUDggWgAAAPABAJ0BKggABQACQDglsAJ0MpuBWSEvYAD+gq9tmR63Gvz+7UlW1W2E/GqSFxuY2Imwg0TQNvuOpn4tU6btqNtTv+UT/5hV6/Xv8siCS/GV4nQG/5iPn0YQAA==",
        blurWidth: 8,
        blurHeight: 5,
      };
      function tB() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem 0;\n  min-width: 43.75rem;\n  z-index: 3;\n",
        ]);
        return (
          (tB = function () {
            return n;
          }),
          n
        );
      }
      function tN() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem 0;\n  width: 100%;\n  padding: 1rem 2rem 0.5rem 2rem;\n  border-radius: 0.5rem;\n  border: 1.872px solid rgba(90, 255, 243, 0.8);\n  background: linear-gradient(\n    133deg,\n    rgba(90, 255, 243, 0.27) 0%,\n    rgba(90, 255, 243, 0.1) 51.24%,\n    rgba(90, 255, 243, 0.03) 72.61%\n  );\n  backdrop-filter: blur(9.359756469726562px);\n\n  > h1 {\n    font-family: 'Presta Extended';\n    background: var(\n      --gradiente-01,\n      linear-gradient(135deg, var(--primary) 19.44%, var(--secondary) 75%)\n    );\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  > span {\n    color: var(--neutral-white, #fff);\n    font-family: ",
          ";\n    font-weight: 500;\n    line-height: 1.25rem;\n  }\n\n  > img {\n    position: absolute;\n    right: -20%;\n    top: -55%;\n    filter: drop-shadow(\n      0px 1.5rem 2.5rem\n        ",
          "\n    );\n  }\n",
        ]);
        return (
          (tN = function () {
            return n;
          }),
          n
        );
      }
      function tz() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0 0.5rem;\n  margin-left: -10rem;\n\n  > small {\n    font-family: ",
          ";\n    font-weight: 400;\n    font-size: 0.75rem;\n    color: var(--neutral-white);\n    width: 18rem;\n    margin-bottom: -0.5%;\n\n    > span {\n      font-family: ",
          ";\n      font-weight: 700;\n      color: var(--secondary);\n      text-decoration-line: underline;\n    }\n  }\n",
        ]);
        return (
          (tz = function () {
            return n;
          }),
          n
        );
      }
      function tR() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  font-family: ",
          ";\n  font-weight: 400;\n  color: var(--secondary);\n  font-size: 0.75rem;\n\n  > p {\n    margin-left: -10rem;\n    padding-top: 0.25rem;\n  }\n",
        ]);
        return (
          (tR = function () {
            return n;
          }),
          n
        );
      }
      let tT = u.ZP.div.withConfig({
          displayName: "Title.styles__Container",
          componentId: "sc-2974173c-0",
        })(tB()),
        tD = u.ZP.div.withConfig({
          displayName: "Title.styles__SeasonTitle",
          componentId: "sc-2974173c-1",
        })(tN(), m.i, (n) => {
          let { theme: e } = n;
          return e.components.leaderboard.firstPosition.filterColor;
        }),
        tU = u.ZP.div.withConfig({
          displayName: "Title.styles__SeasonRewardsContainer",
          componentId: "sc-2974173c-2",
        })(tz(), m.i, m.i),
        tL = u.ZP.div.withConfig({
          displayName: "Title.styles__CountdownContainer",
          componentId: "sc-2974173c-3",
        })(tR(), m.i),
        tM = {
          Container: tT,
          SeasonTitle: tD,
          SeasonRewardsContainer: tU,
          CountdownContainer: tL,
        },
        tE = () =>
          (0, r.jsx)(tM.Container, {
            children: (0, r.jsxs)(tM.SeasonTitle, {
              children: [
                (0, r.jsx)("h1", { children: "LEADERBOARD" }),
                (0, r.jsxs)("span", {
                  children: [" ", "".concat("Pre-Season")],
                }),
                (0, r.jsx)("img", { src: tS.src, alt: "Giga Chad elo", width: 300 }),
              ],
            }),
          });
      function tF() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  min-height: calc(100vh - 3.75rem);\n  margin: 4.0625rem auto 0 auto;\n",
        ]);
        return (
          (tF = function () {
            return n;
          }),
          n
        );
      }
      function tH() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem 0;\n  justify-content: center;\n",
        ]);
        return (
          (tH = function () {
            return n;
          }),
          n
        );
      }
      let tQ = u.ZP.div.withConfig({
          displayName: "Leaderboard.styles__Container",
          componentId: "sc-ded730b3-0",
        })(tF()),
        tV = u.ZP.div.withConfig({
          displayName: "Leaderboard.styles__Content",
          componentId: "sc-ded730b3-1",
        })(tH()),
        tW = { Container: tQ, Content: tV },
        tO = () =>
          (0, r.jsx)(tf._, {
            children: (0, r.jsx)(tW.Container, {
              children: (0, r.jsxs)(tW.Content, {
                children: [(0, r.jsx)(tE, {}), (0, r.jsx)(tP, {})],
              }),
            }),
          });
      var t$ = t(94762),
        tK =
          (t(45130),
          {
            src: "/_next/static/media/icon-active-keys.68d07789.webp",
            height: 294,
            width: 331,
            blurDataURL:
              "data:image/webp;base64,UklGRroAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAAAAEJGRgJAQACEU7Dw0wSAghc8///9GoIDn//////dwoNkPb///E1BAMUVba6Vw4BAAIJExMJAgAAVlA4IFoAAAAwAgCdASoIAAcAAkA4JbACdAYoBvuq5yMFwAD+Cdtb/5CBlDO8BUcvRyld5wJfpt6w/ndASSiHccYxvJOxTKZ20AWG7v1Z/+YLOOelZao//wQFDf+mVbvgAAA=",
            blurWidth: 8,
            blurHeight: 7,
          });
      let tJ = () =>
        (0, r.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "21",
          height: "20",
          viewBox: "0 0 21 20",
          fill: "none",
          children: [
            (0, r.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.18115 8.17028C7.18115 7.91761 7.38597 7.71279 7.63863 7.71279H11.2985C11.5512 7.71279 11.756 7.91761 11.756 8.17028C11.756 8.42294 11.5512 8.62776 11.2985 8.62776H7.63863C7.38597 8.62776 7.18115 8.42294 7.18115 8.17028Z",
              fill: "#003F59",
            }),
            (0, r.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14.9096 9.20721C14.6905 9.20721 14.4978 9.29214 14.3589 9.43483C14.3562 9.4376 14.3535 9.44034 14.3507 9.44305C14.1885 9.60144 14.0978 9.82698 14.1206 10.0666C14.1208 10.0684 14.121 10.0702 14.1211 10.072C14.1534 10.4593 14.5258 10.7931 14.9827 10.7931H16.1678C16.2664 10.7868 16.3308 10.7097 16.3308 10.6285V9.37187C16.3308 9.29068 16.2664 9.21357 16.1678 9.20721H14.9096ZM13.7074 8.79238C14.0195 8.47406 14.4475 8.29224 14.9096 8.29224H16.1783C16.1838 8.29224 16.1892 8.29234 16.1947 8.29253C16.776 8.31329 17.2458 8.78368 17.2458 9.37187V10.6285C17.2458 11.2167 16.7759 11.687 16.1947 11.7078C16.1892 11.708 16.1838 11.7081 16.1783 11.7081H14.9827C14.1229 11.7081 13.2884 11.0794 13.2095 10.1506C13.1603 9.62476 13.3604 9.13344 13.7074 8.79238Z",
              fill: "#003F59",
            }),
            (0, r.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.63861 5.27288C7.48962 5.27288 7.34824 5.28352 7.21409 5.30416C7.2099 5.3048 7.20569 5.30539 7.20149 5.30592C6.52604 5.39068 5.99507 5.67986 5.6315 6.10642C5.26699 6.53408 5.04619 7.12896 5.04619 7.86529V12.1351C5.04619 12.9462 5.31453 13.5864 5.75092 14.0228C6.18731 14.4592 6.8276 14.7276 7.63861 14.7276H13.1284C13.9394 14.7276 14.5797 14.4592 15.0161 14.0228C15.4525 13.5864 15.7208 12.9462 15.7208 12.1351V11.7082L14.9827 11.7081C14.1229 11.7081 13.2884 11.0794 13.2095 10.1506C13.1603 9.62476 13.3604 9.13344 13.7074 8.79238C14.0195 8.47406 14.4475 8.29224 14.9096 8.29224L15.7208 8.29228V7.86529C15.7208 7.12398 15.4962 6.52539 15.1259 6.09635C14.7565 5.66828 14.2173 5.37987 13.5331 5.30031C13.5256 5.29944 13.5181 5.29839 13.5107 5.29715C13.401 5.27886 13.2776 5.27288 13.1284 5.27288H7.63861ZM7.08128 4.39886C7.26232 4.37135 7.44822 4.35791 7.63861 4.35791H13.1284C13.2929 4.35791 13.4705 4.36386 13.6496 4.39275C14.5344 4.49805 15.2874 4.88304 15.8186 5.49857C16.3511 6.11565 16.6358 6.93526 16.6358 7.86529V8.74977C16.6358 9.00243 16.431 9.20725 16.1783 9.20725L14.9096 9.20721C14.6905 9.20721 14.4978 9.29214 14.3589 9.43483C14.3562 9.4376 14.3535 9.44034 14.3507 9.44305C14.1885 9.60144 14.0978 9.82698 14.1206 10.0666C14.1208 10.0684 14.121 10.0702 14.1211 10.072C14.1534 10.4593 14.5258 10.7931 14.9827 10.7931L16.1783 10.7932C16.431 10.7932 16.6358 10.998 16.6358 11.2507V12.1351C16.6358 13.1541 16.2942 14.0387 15.6631 14.6698C15.032 15.3009 14.1474 15.6425 13.1284 15.6425H7.63861C6.61968 15.6425 5.73502 15.3009 5.10394 14.6698C4.47287 14.0387 4.13123 13.1541 4.13123 12.1351V7.86529C4.13123 6.94248 4.41061 6.12831 4.93515 5.5129C5.45937 4.89786 6.20401 4.51035 7.08128 4.39886Z",
              fill: "#003F59",
            }),
          ],
        });
      function tG() {
        let n = (0, s.Z)([
          "\n  font-weight: 700;\n  font-size: 1rem;\n  margin-bottom: 1rem;\n\n  p {\n    font-weight: 700;\n    background: ",
          ";\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n\n    &:first-child {\n      font-size: 1rem;\n    }\n\n    &:last-child {\n      font-size: 1.5rem;\n    }\n  }\n\n  width: 100%;\n",
        ]);
        return (
          (tG = function () {
            return n;
          }),
          n
        );
      }
      function tX() {
        let n = (0, s.Z)([
          "\n  color: ",
          ";\n  text-align: center;\n  font-family: ",
          ";\n  font-size: 0.625rem;\n  font-weight: 400;\n",
        ]);
        return (
          (tX = function () {
            return n;
          }),
          n
        );
      }
      function tq() {
        let n = (0, s.Z)([
          "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  height: calc(100vh - 4.375rem);\n",
        ]);
        return (
          (tq = function () {
            return n;
          }),
          n
        );
      }
      function tY() {
        let n = (0, s.Z)([
          "\n  width: 42.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n",
        ]);
        return (
          (tY = function () {
            return n;
          }),
          n
        );
      }
      function t0() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n",
        ]);
        return (
          (t0 = function () {
            return n;
          }),
          n
        );
      }
      function t1() {
        let n = (0, s.Z)([
          "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  h2 {\n    font-weight: 700;\n    font-size: 1.125rem;\n    text-align: center;\n\n    background: ",
          ";\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    margin-bottom: 0.5rem;\n    margin-top: 2rem;\n  }\n\n  p {\n    color: ",
          ";\n    font-weight: 300;\n    font-size: 0.875rem;\n    text-align: center;\n    width: 14.375rem;\n    line-height: 1.125rem;\n\n    span {\n      color: ",
          ";\n    }\n  }\n",
        ]);
        return (
          (t1 = function () {
            return n;
          }),
          n
        );
      }
      function t5() {
        let n = (0, s.Z)([
          "\n  border-radius: 0rem 0.5rem 0.5rem 0rem;\n  background-image: url(",
          ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  transition: all 0.2s;\n\n  width: 21.125rem;\n  height: 32.625rem;\n",
        ]);
        return (
          (t5 = function () {
            return n;
          }),
          n
        );
      }
      function t2() {
        let n = (0, s.Z)([
          "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n\n  button:first-child {\n    a {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-decoration: none;\n      color: ",
          ";\n    }\n\n    img {\n      margin: 0;\n      margin-right: 0.25rem;\n    }\n  }\n",
        ]);
        return (
          (t2 = function () {
            return n;
          }),
          n
        );
      }
      function t4() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  justify-content: center;\n  margin-top: -1.5rem;\n",
        ]);
        return (
          (t4 = function () {
            return n;
          }),
          n
        );
      }
      function t3() {
        let n = (0, s.Z)([
          "\n  color: ",
          ";\n  font-weight: 700;\n  font-size: 0.75rem;\n",
        ]);
        return (
          (t3 = function () {
            return n;
          }),
          n
        );
      }
      function t8() {
        let n = (0, s.Z)([
          "\n  width: 100%;\n\n  button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 1rem;\n  }\n",
        ]);
        return (
          (t8 = function () {
            return n;
          }),
          n
        );
      }
      function t7() {
        let n = (0, s.Z)([
          "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  position: relative;\n",
        ]);
        return (
          (t7 = function () {
            return n;
          }),
          n
        );
      }
      function t6() {
        let n = (0, s.Z)([
          "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  position: absolute;\n  bottom: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n",
        ]);
        return (
          (t6 = function () {
            return n;
          }),
          n
        );
      }
      function t9() {
        let n = (0, s.Z)([
          "\n  width: 100%;\n  height: 2rem;\n  border-radius: 0.25rem;\n  margin: 0.5rem 0 0 0;\n\n  font-size: 0.75rem;\n  color: ",
          ";\n  padding: 0 0 0 3rem;\n\n  border-radius: 0.25rem;\n  background: ",
          ";\n  box-shadow: 2px 2px 4px 0px rgba(14, 22, 25, 0.9) inset,\n    -2px -2px 3px 0px rgba(58, 90, 101, 0.9) inset,\n    2px -2px 3px 0px rgba(14, 22, 25, 0.2) inset,\n    -2px 2px 3px 0px rgba(14, 22, 25, 0.2) inset;\n  font-size: 0.875rem;\n\n  font-weight: 400;\n  line-height: 1.125rem;\n",
        ]);
        return (
          (t9 = function () {
            return n;
          }),
          n
        );
      }
      function rn() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",
          ";\n  text-align: center;\n  font-weight: 300;\n  font-size: 0.625rem;\n  margin-top: 1rem;\n  height: 4.375rem;\n  width: 100%;\n\n  border-radius: 4px;\n  background: ",
          ";\n",
        ]);
        return (
          (rn = function () {
            return n;
          }),
          n
        );
      }
      function re() {
        let n = (0, s.Z)([
          "\n  div {\n    display: flex;\n    align-items: center;\n\n    p {\n      font-weight: 300;\n      font-size: 0.75rem;\n      color: ",
          ";\n      cursor: pointer;\n    }\n\n    img {\n      width: 1rem;\n      height: 1rem;\n      transform: rotate(90deg);\n    }\n  }\n",
        ]);
        return (
          (re = function () {
            return n;
          }),
          n
        );
      }
      function rt() {
        let n = (0, s.Z)([
          "\n  color: ",
          ";\n  font-size: 1.125rem;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1.5rem;\n",
        ]);
        return (
          (rt = function () {
            return n;
          }),
          n
        );
      }
      function rr() {
        let n = (0, s.Z)([
          "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-bottom: 1.5rem;\n\n  p {\n    color: ",
          ";\n    text-align: center;\n\n    font-size: 0.75rem;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1rem;\n    padding: 0.5rem 0rem;\n  }\n",
        ]);
        return (
          (rr = function () {
            return n;
          }),
          n
        );
      }
      function ri() {
        let n = (0, s.Z)([
          "\n  position: absolute;\n  left: 0.5rem;\n  color: ",
          ";\n  text-wrap: nowrap;\n  font-size: 0.875rem;\n  top: 0.95rem;\n",
        ]);
        return (
          (ri = function () {
            return n;
          }),
          n
        );
      }
      let ro = u.ZP.div.withConfig({
          displayName: "ActivateKeys.styles__Title",
          componentId: "sc-9bd146a0-0",
        })(tG(), (n) => {
          let { theme: e } = n;
          return "linear-gradient(315deg, "
            .concat(e.colors.secondary["1100"], " 0%, ")
            .concat(e.colors.primary["1000"], " 52.08%)\n      ");
        }),
        ra = u.ZP.small.withConfig({
          displayName: "ActivateKeys.styles__Error",
          componentId: "sc-9bd146a0-1",
        })(
          tX(),
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.red;
          },
          m.i
        ),
        rl = u.ZP.div.withConfig({
          displayName: "ActivateKeys.styles__Container",
          componentId: "sc-9bd146a0-2",
        })(tq()),
        rs = u.ZP.div.withConfig({
          displayName: "ActivateKeys.styles__SubContainer",
          componentId: "sc-9bd146a0-3",
        })(tY()),
        rd = u.ZP.div.withConfig({
          displayName: "ActivateKeys.styles__Cards",
          componentId: "sc-9bd146a0-4",
        })(t0()),
        rc = u.ZP.div.withConfig({
          displayName: "ActivateKeys.styles__Content",
          componentId: "sc-9bd146a0-5",
        })(
          t1(),
          (n) => {
            let { theme: e } = n;
            return "linear-gradient(135deg, "
              .concat(e.colors.modal["01"], " 5%, ")
              .concat(e.colors.modal["02"], " 47.53%, ")
              .concat(e.colors.modal["03"], " 83.33%)");
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          }
        ),
        ru = u.ZP.div.withConfig({
          displayName: "ActivateKeys.styles__Card",
          componentId: "sc-9bd146a0-6",
        })(t5(), "/_next/static/media/bg-active-kkeys.4048ea1a.webp"),
        rm = u.ZP.div.withConfig({
          displayName: "ActivateKeys.styles__ContainerButtons",
          componentId: "sc-9bd146a0-7",
        })(t2(), (n) => {
          let { theme: e } = n;
          return e.colors.primary["900"];
        }),
        rf = u.ZP.div.withConfig({
          displayName: "ActivateKeys.styles__Icon",
          componentId: "sc-9bd146a0-8",
        })(t4()),
        rg = u.ZP.label.withConfig({
          displayName: "ActivateKeys.styles__Label",
          componentId: "sc-9bd146a0-9",
        })(t3(), (n) => {
          let { theme: e } = n;
          return e.colors.secondary["1100"];
        }),
        rh = u.ZP.div.withConfig({
          displayName: "ActivateKeys.styles__EnteringKey",
          componentId: "sc-9bd146a0-10",
        })(t8()),
        rp = u.ZP.div.withConfig({
          displayName: "ActivateKeys.styles__ContainerInput",
          componentId: "sc-9bd146a0-11",
        })(t7()),
        rx = u.ZP.div.withConfig({
          displayName: "ActivateKeys.styles__SocialMedias",
          componentId: "sc-9bd146a0-12",
        })(t6()),
        rb = u.ZP.input.withConfig({
          displayName: "ActivateKeys.styles__Input",
          componentId: "sc-9bd146a0-13",
        })(
          t9(),
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.shared["01"];
          }
        ),
        rA = u.ZP.div.withConfig({
          displayName: "ActivateKeys.styles__Notice",
          componentId: "sc-9bd146a0-14",
        })(
          rn(),
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.shared["02"];
          }
        ),
        ry = u.ZP.div.withConfig({
          displayName: "ActivateKeys.styles__Back",
          componentId: "sc-9bd146a0-15",
        })(re(), (n) => {
          let { theme: e } = n;
          return e.colors.secondary["1100"];
        }),
        rw = u.ZP.h2.withConfig({
          displayName: "ActivateKeys.styles__ContentHeading",
          componentId: "sc-9bd146a0-16",
        })(rt(), (n) => {
          let { theme: e } = n;
          return e.colors.secondary["1100"];
        }),
        rv = u.ZP.div.withConfig({
          displayName: "ActivateKeys.styles__ActiveKeysTextContainer",
          componentId: "sc-9bd146a0-17",
        })(rr(), (n) => {
          let { theme: e } = n;
          return e.colors.neutral.white;
        }),
        rC = u.ZP.div.withConfig({
          displayName: "ActivateKeys.styles__Sufix",
          componentId: "sc-9bd146a0-18",
        })(ri(), (n) => {
          let { theme: e } = n;
          return e.colors.neutral.white;
        }),
        rj = {
          Title: ro,
          Container: rl,
          Content: rc,
          Cards: rd,
          Card: ru,
          ContainerButtons: rm,
          Icon: rf,
          Label: rg,
          EnteringKey: rh,
          Input: rb,
          Notice: rA,
          Back: ry,
          ContainerInput: rp,
          SubContainer: rs,
          ContentHeading: rw,
          ActiveKeysTextContainer: rv,
          Sufix: rC,
          SocialMedias: rx,
          Error: ra,
        },
        rk = () => {
          let {
              isActive: n,
              setShowChooseWalletComponent: e,
              setOpenMenuWalletComponent: t,
            } = (0, o.O)(),
            { activateKey: i, loading: s, error: d } = (0, t$.d)(),
            [u, m] = (0, C.useState)(""),
            f = (n) => {
              m(n.target.value.replace(/zrs-/g, ""));
            };
          return (0, r.jsx)(rj.Container, {
            "data-testid": "active-keys",
            children: (0, r.jsx)(rj.SubContainer, {
              children: (0, r.jsxs)(rj.Cards, {
                children: [
                  (0, r.jsxs)(a.x, {
                    width: "21.125rem",
                    height: "32.625rem",
                    borderRadius: "0.5rem 0rem 0rem 0.5rem",
                    padding: "1.5rem",
                    children: [
                      null,
                      (0, r.jsx)(rj.Icon, {
                        children: (0, r.jsx)("img", {
                          width: 165,
                          src: tK.src,
                          alt: "Icon Inova",
                        }),
                      }),
                      (0, r.jsxs)(rv, {
                        children: [
                          (0, r.jsx)(rj.ContentHeading, {
                            children: "Trading League",
                          }),
                          (0, r.jsxs)("p", {
                            children: [
                              "Validate your Inova Alpha Key below to be part of the Pre-Season 1 and earn Inova Points using the Alpha Testnet dApp. You can either get an alpha key with a friend or through ",
                              "Inova'",
                              "community activities.",
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)(rj.EnteringKey, {
                        "data-testid": "entering-active-keys",
                        children: [
                          (0, r.jsx)(rj.Label, { children: "Enter the key" }),
                          (0, r.jsxs)(rj.ContainerInput, {
                            children: [
                              (0, r.jsx)(rj.Sufix, { children: "zrs -" }),
                              (0, r.jsx)(rj.Input, {
                                placeholder: "000000000000000",
                                value: u,
                                onChange: f,
                                disabled: !n,
                              }),
                            ],
                          }),
                          d
                            ? (0, r.jsx)(rj.Error, {
                                children: "Expired or invalid key",
                              })
                            : null,
                          n
                            ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(l.z.Default, {
                                  width: "100%",
                                  height: "2rem",
                                  $borderRadius: "0.25rem",
                                  $fontSize: "0.875rem",
                                  onClick: () => i({ key: u }),
                                  disabled: s,
                                  children: s ? "Activating..." : "Activate",
                                }),
                              })
                            : (0, r.jsxs)(l.z.StandardDefault, {
                                width: "100%",
                                height: "2rem",
                                $borderRadius: "0.25rem",
                                $fontSize: "0.875rem",
                                onClick: () => {
                                  e(!0), t((n) => !n);
                                },
                                disabled: s,
                                children: [
                                  (0, r.jsx)(tJ, {}),
                                  " Connect Wallet",
                                ],
                              }),
                          (0, r.jsx)(B(), {
                            style: {
                              textDecoration: "none",
                              fontSize: ".75rem",
                              color: "#5afff3",
                              marginBottom: "-1rem",
                            },
                            target: "_blank",
                            href: "https://www.alchemy.com/faucets/arbitrum-sepolia",
                            children: "Arbitrum Sepolia ETH Faucet",
                          }),
                        ],
                      }),
                      (0, r.jsxs)(rj.SocialMedias, {
                        children: [
                          (0, r.jsx)(B(), {
                            href: "https://twitter.com/zarosfi",
                            target: "_blank",
                            children: (0, r.jsx)(c(), {
                              src: "/assets/icons/x.svg",
                              alt: "Inova Twitter",
                              width: 24,
                              height: 24,
                            }),
                          }),
                          (0, r.jsx)(B(), {
                            href: "https://discord.gg/zarosfi",
                            target: "_blank",
                            children: (0, r.jsx)(c(), {
                              src: "/assets/icons/discord.svg",
                              alt: "Inova Discord",
                              width: 24,
                              height: 24,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)(rj.Card, {}),
                ],
              }),
            }),
          });
        };
      var rZ = t(55678),
        rI = t(32975);
      function r_() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  position: relative;\n  width: fit-content;\n  height: auto;\n  gap: 0 0.5rem;\n\n  > table {\n    &:first-child {\n      > tbody {\n        position: relative;\n\n        &::before {\n          content: '';\n          position: absolute;\n          inset: 0;\n          z-index: 1;\n          border-top-left-radius: 0.5rem;\n          padding: 0.0625rem;\n          background: ",
          ";\n          -webkit-mask: ",
          ";\n          -webkit-mask-composite: xor;\n          mask-composite: exclude;\n        }\n      }\n    }\n\n    &:nth-child(2) {\n      > tbody {\n        position: relative;\n\n        &::before {\n          content: '';\n          position: absolute;\n          inset: 0;\n          z-index: 1;\n          border-top-right-radius: 0.5rem;\n          padding: 0.0625rem;\n          background: ",
          ";\n          -webkit-mask: ",
          ";\n          -webkit-mask-composite: xor;\n          mask-composite: exclude;\n        }\n      }\n    }\n  }\n",
        ]);
        return (
          (r_ = function () {
            return n;
          }),
          n
        );
      }
      function rP() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n",
        ]);
        return (
          (rP = function () {
            return n;
          }),
          n
        );
      }
      function rS() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  transition: all 0.2s;\n\n  > td {\n    background: ",
          ";\n    font-family: ",
          ";\n    font-weight: 700;\n    backdrop-filter: blur(10px);\n    font-size: 1rem;\n    color: var(--neutral-white);\n    text-align: center;\n    line-height: 1.25rem;\n    padding: 0.5rem 0.75rem;\n    border-top: 1px solid ",
          ";\n    border-bottom: 1px solid ",
          ";\n    width: 5.1875rem;\n    justify-content: center;\n\n    &:first-child {\n      display: flex;\n      align-items: center;\n      border-top-left-radius: ",
          ";\n      height: 4.19rem;\n    }\n  }\n",
        ]);
        return (
          (rS = function () {
            return n;
          }),
          n
        );
      }
      function rB() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  backdrop-filter: blur(10px);\n  transition: all 0.2s;\n\n  td {\n    position: relative;\n    font-family: ",
          ";\n    font-weight: 700;\n    font-size: 1rem;\n    color: var(--neutral-white);\n    text-align: center;\n    line-height: 1.25rem;\n    padding: 0;\n    height: 4.19rem;\n    border-top: 1px solid ",
          ";\n    border-bottom: 1px solid ",
          ";\n\n    &:first-child {\n      font-family: ",
          ";\n      font-weight: 400;\n      padding: unset;\n      color: var(--secondary);\n      width: 13rem;\n    }\n\n    &:nth-child(2) {\n      color: ",
          ";\n      min-width: 5.5rem;\n    }\n\n    &:nth-child(4) {\n      position: relative;\n      min-width: 1rem;\n      border-top-right-radius: ",
          ";\n      button {\n        margin: 0 -1.05rem 0 1.05rem;\n      }\n    }\n  }\n",
        ]);
        return (
          (rB = function () {
            return n;
          }),
          n
        );
      }
      function rN() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0 1.5rem;\n",
        ]);
        return (
          (rN = function () {
            return n;
          }),
          n
        );
      }
      function rz() {
        let n = (0, s.Z)([
          "\n  display: inline-flex;\n  justify-content: center;\n  border-radius: 1.875rem;\n  border: 1px solid ",
          ";\n  min-width: 16rem;\n  background: linear-gradient(\n    133deg,\n    rgba(90, 255, 243, 0.3) 1.71%,\n    rgba(90, 255, 243, 0.03) 98.28%\n  );\n  backdrop-filter: blur(10px);\n  margin: 0.25rem 0 1rem 0;\n",
        ]);
        return (
          (rz = function () {
            return n;
          }),
          n
        );
      }
      function rR() {
        let n = (0, s.Z)([
          "\n  display: ",
          ";\n  align-items: center;\n  justify-content: center;\n  gap: 0 0.5rem;\n  height: 4.19rem;\n\n  > div {\n    &:first-child {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-family: ",
          ";\n      font-weight: 700;\n      font-size: 1rem;\n      color: var(--neutral-white);\n      width: 5.1875rem;\n      height: 100%;\n      padding: 0 0.5rem;\n      border: 1px solid ",
          ";\n      background: ",
          ";\n      backdrop-filter: blur(10px);\n    }\n\n    &:nth-child(2) {\n      position: relative;\n      width: 51rem;\n      border: 1px solid ",
          ";\n      display: flex;\n      height: 100%;\n      gap: 0 1rem;\n      align-items: center;\n      justify-content: flex-start;\n      padding: 0.5rem 0.75rem;\n      background: ",
          ";\n      backdrop-filter: blur(10px);\n      font-family: ",
          ";\n      font-weight: 400;\n      color: var(--secondary);\n\n      > span {\n        display: flex;\n        gap: 0 1.5rem;\n        align-items: center;\n        justify-content: flex-start;\n        width: 18rem;\n      }\n    }\n  }\n",
        ]);
        return (
          (rR = function () {
            return n;
          }),
          n
        );
      }
      function rT() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0 1.5rem;\n  width: 100%;\n\n  > div {\n    font-weight: 700;\n    &:nth-child(1) {\n      width: 12.65rem;\n      color: ",
          ";\n      > p {\n        margin-left: 1rem;\n      }\n    }\n\n    &:nth-child(2) {\n      color: ",
          ";\n      min-width: 5.7rem;\n    }\n\n    &:nth-child(3) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 0 1.6rem;\n    }\n  }\n",
        ]);
        return (
          (rT = function () {
            return n;
          }),
          n
        );
      }
      function rD() {
        let n = (0, s.Z)([
          "\n  min-width: 1.25rem;\n  min-height: 1.25rem;\n  padding: 0 0.1rem;\n  margin: 4px;\n  border-radius: 50%;\n  border: none;\n  font-size: 0.875rem;\n  font-family: ",
          ";\n  font-weight: ",
          ";\n  background-color: ",
          ";\n  color: ",
          ";\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (rD = function () {
            return n;
          }),
          n
        );
      }
      function rU() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1rem;\n",
        ]);
        return (
          (rU = function () {
            return n;
          }),
          n
        );
      }
      let rL = u.ZP.div.withConfig({
          displayName: "RankingTable.styles__TablesContainer",
          componentId: "sc-8562ea8-0",
        })(
          r_(),
          (n) => {
            let { theme: e } = n;
            return e.colors.gradient["06"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.gradient.mask;
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.gradient["06"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.gradient.mask;
          }
        ),
        rM = u.ZP.div.withConfig({
          displayName: "RankingTable.styles__StatsContainer",
          componentId: "sc-8562ea8-1",
        })(rP()),
        rE = u.ZP.tr.withConfig({
          displayName: "RankingTable.styles__RankBodyItem",
          componentId: "sc-8562ea8-2",
        })(
          rS(),
          (n) => {
            let { $isPodium: e } = n;
            return e
              ? "linear-gradient(\n    133deg,\n    rgba(90, 255, 243, 0.3) 1.71%,\n    rgba(90, 255, 243, 0.03) 98.28%\n  )"
              : "transparent";
          },
          m.i,
          (n) => {
            let { theme: e } = n;
            return e.colors.modal["01"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          (n) => {
            let { $hasRoundedBorder: e } = n;
            return e ? "0.5rem" : "unset";
          }
        ),
        rF = u.ZP.tr.withConfig({
          displayName: "RankingTable.styles__BodyItem",
          componentId: "sc-8562ea8-3",
        })(
          rB(),
          m.i,
          (n) => {
            let { theme: e } = n;
            return e.colors.modal["01"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          m.i,
          (n) => {
            let { $roiColor: e } = n;
            return e;
          },
          (n) => {
            let { $hasRoundedBorder: e } = n;
            return e ? "0.5rem" : "unset";
          }
        ),
        rH = u.ZP.div.withConfig({
          displayName: "RankingTable.styles__EloContainer",
          componentId: "sc-8562ea8-4",
        })(rN()),
        rQ = u.ZP.div.withConfig({
          displayName: "RankingTable.styles__PageButtonContainer",
          componentId: "sc-8562ea8-5",
        })(rz(), (n) => {
          let { theme: e } = n;
          return e.colors.modal["01"];
        }),
        rV = u.ZP.div.withConfig({
          displayName: "RankingTable.styles__UserStats",
          componentId: "sc-8562ea8-6",
        })(
          rR(),
          (n) => {
            let { $isVisible: e } = n;
            return e ? "flex" : "none";
          },
          m.i,
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.background["01"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.background["01"];
          },
          m.i
        ),
        rW = u.ZP.div.withConfig({
          displayName: "RankingTable.styles__UserStatsItems",
          componentId: "sc-8562ea8-7",
        })(
          rT(),
          (n) => {
            let { theme: e, $isGaining: t } = n;
            return t ? e.colors.neutral.green : e.colors.neutral.red;
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          }
        ),
        rO = u.ZP.button.withConfig({
          displayName: "RankingTable.styles__PageButton",
          componentId: "sc-8562ea8-8",
        })(
          rD(),
          m.i,
          (n) => {
            let { active: e } = n;
            return e ? "700" : "400";
          },
          (n) => {
            let { active: e } = n;
            return e ? "var(--secondary)" : "transparent";
          },
          (n) => {
            let { active: e } = n;
            return e ? "var(--primary-900)" : "var(--neutral-white)";
          }
        ),
        r$ = u.ZP.div.withConfig({
          displayName: "RankingTable.styles__Pagination",
          componentId: "sc-8562ea8-9",
        })(rU()),
        rK = {
          BodyItem: rF,
          RankBodyItem: rE,
          Pagination: r$,
          PageButtonContainer: rQ,
          PageButton: rO,
          TablesContainer: rL,
          StatsContainer: rM,
          UserStats: rV,
          UserStatsItems: rW,
          EloContainer: rH,
        },
        rJ = () => {
          let { accountIdsStates: n } = (0, o.O)(),
            [e, t] = (0, C.useState)(1),
            [i, a] = (0, C.useState)(1),
            [s, d] = (0, C.useState)({
              accountId: 0,
              roi: 0,
              pnl: 0,
              elo: "",
              rank: 0,
            }),
            [u, m] = (0, C.useState)([]),
            f = () =>
              (0, r.jsx)(l.z.Secondary, {
                $borderRadius: "0.5rem",
                width: " 6.125rem",
                height: "2.25rem",
                disabled: !0,
                $fontSize: "0.875rem",
                children: "Follow",
              }),
            g = async (n) => {
              let { page: e = "1", pageSize: t = "4" } = n,
                r = new URLSearchParams({ page: e, pageSize: t });
              try {
                let n = await J.h.get("/leaderboard?".concat(r.toString())),
                  e = await n.data;
                m(e.leaderboard), a(Math.ceil(e.total / 4));
              } catch (n) {
                console.log(n);
              }
            },
            h = (n) =>
              (null == u
                ? void 0
                : u.map((e) => {
                    let t = {};
                    return (
                      null == n ||
                        n.forEach((n) => {
                          switch (n) {
                            case "user":
                              t.user = (0, r.jsxs)(rK.EloContainer, {
                                children: [
                                  (0, r.jsx)("img", {
                                    src: tS.src,
                                    alt: "Elo Logo",
                                    width: 65,
                                  }),
                                  "Account #",
                                  null == e ? void 0 : e.accountId,
                                ],
                              });
                              break;
                            case "roi":
                              t.roi = (0, n2.c3)({
                                roi: null == e ? void 0 : e.roi,
                              });
                              break;
                            case "pnl":
                              t.pnl = (0, n2.BE)({
                                pnl: null == e ? void 0 : e.pnl,
                              });
                              break;
                            case "followButton":
                              t.followButton = (0, r.jsx)(f, {});
                              break;
                            case "rank":
                              t.rank = null == e ? void 0 : e.rank;
                          }
                        }),
                      t
                    );
                  })) || [],
            p = async () => {
              var e;
              let t = new URLSearchParams({
                accountId:
                  (null === (e = n.accountIdSelected) || void 0 === e
                    ? void 0
                    : e.toString()) || "",
              });
              try {
                let n = await J.h.get("/leader?".concat(t.toString())),
                  e = await n.data;
                d(e);
              } catch (n) {
                console.log(n);
              }
            };
          (0, C.useEffect)(() => {
            p(), g({ pageSize: "4" });
          }, []);
          let x = (n) => {
              t("number" == typeof n ? n : 1);
            },
            b = () => {
              let n = [],
                t = (e) => n.push(e),
                o = () => n.push("..."),
                a = (n, e) => {
                  for (let r = n; r <= e; r++) t(r);
                };
              if (i <= 9) a(1, i);
              else if (e <= 6) a(1, 8), o(), t(i);
              else if (e >= i - 9 + 2) {
                t(1), o();
                let n = Math.max(1, i - 9 + 4 - Math.floor(3));
                a(n, Math.min(i, n + 9 - 3)), t(i);
              } else {
                let n = Math.max(1, e - Math.floor(3));
                t(1), o(), a(n, Math.min(i, n + 9 - 3)), o(), t(i);
              }
              return n.map((n, t) =>
                (0, r.jsx)(
                  rK.PageButton,
                  {
                    onClick: () => {
                      "number" == typeof n &&
                        n !== e &&
                        (g({ page: n.toString() }), x(n));
                    },
                    active: "number" == typeof n && n === e,
                    children: n,
                  },
                  t
                )
              );
            };
          return {
            renderPageButtons: b,
            totalPages: i,
            currentPage: e,
            handlePageChange: x,
            userData: s,
            leaderboardData: u,
            leaderboardTableBody: h,
          };
        };
      var rG = t(10088);
      let rX = () => {
        let n = (0, C.useRef)(null),
          e = () => {
            var e;
            if (
              (null == n
                ? void 0
                : null === (e = n.current) || void 0 === e
                ? void 0
                : e.children.length) === 0
            ) {
              let e = document.createElement("script");
              (e.src = "https://www.tideprotocol.xyz/embed.js"), (e.async = !0);
              let t = document.createElement("div");
              (t.className = "tide-embedded"),
                t.setAttribute("data-background-color", "rgb(11, 37, 47)"),
                t.setAttribute("data-text-color", "#ecfbfa"),
                t.setAttribute("dark-mode", ""),
                t.setAttribute("data-space-id", "1531"),
                n.current.appendChild(t),
                n.current.appendChild(e);
            }
          };
        return (
          (0, C.useEffect)(() => {
            e();
          }, []),
          { tideEmbedRef: n }
        );
      };
      var rq = {
          src: "/_next/static/media/chad.b311ff4e.png",
          height: 253,
          width: 245,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXFRxK89p6Rx//ZMxsg5i4c5l53J//8xdXh3//9d8vt0hX9obWI0f4R+fW42h4EyQEZijItMUlJWaGE4ZWVIc3IlXmOiR9o3AAAAFHRSTlMAloQsNdXAA/0PHv387P3z/P38/Oy2HnIAAAAJcEhZcwAAITgAACE4AUWWMWAAAAA/SURBVHicHctHEoAwDMBApdnpoRj+/1Qm6LQXAVoLuypjeAWVp/fsIeazTUsb92xvUjTZdZgDouTl/q+EoPABQkYB09hfiyQAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        rY = {
          src: "/_next/static/media/elo-bronze.eb93d98a.webp",
          height: 561,
          width: 917,
          blurDataURL:
            "data:image/webp;base64,UklGRqIAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAAAAOh4cOAAAAAIX//4QAAAAo1P//1SkAAAJLzs5LAgAAAAAFBQAAAABWUDggUgAAALABAJ0BKggABQACQDgloAJ0APH5cEAA/rf93fGgaLZ+B32CuHLepuNJ25eh5nMXAVOqsjwxtbBpG4WghCrUX6aJwHHFih+9F0ccC/wb7nnvAAA=",
          blurWidth: 8,
          blurHeight: 5,
        },
        r0 = {
          src: "/_next/static/media/elo-chad.ff6f3d7b.webp",
          height: 547,
          width: 918,
          blurDataURL:
            "data:image/webp;base64,UklGRqoAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAASG4KQEAKbkgJ7tL4+NLtCACZ/v///pgAAAFH2thGAQAAAAAsKwAAAABWUDggWgAAANABAJ0BKggABQACQDglsAJ0AR9oT9mAAP4JseqG+Zdc8XSKnw9JiS9e6bV+NPzfb+2a6uXRY8m/W0q7YDQShdD7g/+TlJ//LZj+D98OfnVF/g3+s1D8AAAAAA==",
          blurWidth: 8,
          blurHeight: 5,
        },
        r1 = {
          src: "/_next/static/media/elo-gold.d97e8b94.webp",
          height: 547,
          width: 918,
          blurDataURL:
            "data:image/webp;base64,UklGRqQAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAABgEVFgEGQABfsX//8aHAQGM+P//+JEBAA5e2dxgEAAAAAAKCwAAAABWUDggVAAAALABAJ0BKggABQACQDglsAJ0APH4cQAA/vKP+G5wvcZkuyaAZi75grR/Ao3ERjz3IP9ej0dk3S92W5M2ADG1ai/SDApj/yjPUfv2y8Yno1kdrdgAAA==",
          blurWidth: 8,
          blurHeight: 5,
        },
        r5 = {
          src: "/_next/static/media/elo-platinum.8f09d488.webp",
          height: 561,
          width: 917,
          blurDataURL:
            "data:image/webp;base64,UklGRqAAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAAAsBPUUBCwAAX6/8/LFmAABj9f//9WcAAAQ+4eNBBAAAAAAGBgAAAABWUDggUAAAAPABAJ0BKggABQACQDglsAJ0a4ACy1iLgAD+7jW/sfbN9KaaZ7W7D1rsFdZuzzuacll1565QMe3S+irixr7/xcwQNo3L9/wopgaxt34X1UgA",
          blurWidth: 8,
          blurHeight: 5,
        },
        r2 = {
          src: "/_next/static/media/elo-silver.c7a4f10a.webp",
          height: 561,
          width: 917,
          blurDataURL:
            "data:image/webp;base64,UklGRqIAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAAAADWF0EAAABP3v//4RAAgCE+P//+YwBAAhJyMxNCgAAAAAEBAAAAABWUDggUgAAALABAJ0BKggABQACQDglsAJ0APJ+/gAA/uJ7XFAgfeYYfGzWKdq4x5qHkAbOMWszIDrMaT5fwTODvANxydMhB+f+RuVFF01F/2n9h3IbcEYEdgA=",
          blurWidth: 8,
          blurHeight: 5,
        },
        r4 = {
          src: "/_next/static/media/logo-league.fce096bb.png",
          height: 358,
          width: 403,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAARVBMVEVMaXFbnLkoTVt90/Vx//9+zO4lVHEv+P9N3v9qobYwbItUlK8HK0RJgpcOQ2g2ep5MdX9IfZBDaHFFlsBIos0VQVgiSFWiOzaXAAAAFXRSTlMAgP01F1L8CA1bbpf7wPpi6r300NIKti/qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVR4nBXKSRKAIAwAwQGBhFVB4/+fStHnBgiBQ+L3RgHulMwXkOpH+x2oW2bPBWiePZ8DqsAGK9IBcIfsdNYAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 7,
        },
        r3 = {
          src: "/_next/static/media/logo-league-dark.fc10fec2.png",
          height: 357,
          width: 403,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAP1BMVEVMaXEoNTdXfXodW15y599dsahk//9R//+E7u4pQURNkIxIjo5DiookbG4THyNgsrQ7fHt7oKF+qKodVVc9Tk8luoryAAAAE3RSTlMA/b5vRlkYCwP9fZjqY/uC9MzOAuHpRgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADhJREFUeJwdylkSgCAMBcEBAi9xQ8H7n9XC/m6A1ljcxmNyOONNqYD2GdfcQP2OOAxcNeeqf2vVDytoAWHhgCxiAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 7,
        },
        r8 = {
          src: "/_next/static/media/season.0da9db87.png",
          height: 65,
          width: 64,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVNmZlo/Npq/9tIwsFZ39JMx89Pzc9Nyc1Hw8Jg79VQytZIyMhU2NNKx8tJxsRLysdX5t1U2slU28tn+N1LyMto/Npg7dJQ2dBV28lb5M9t//S834gmAAAAGnRSTlMBfDMzGWV/P31zdQ6SsPTI/oXLVFTBqvyqMq5nYU8AAAAJcEhZcwAACxMAAAsTAQCanBgAAABASURBVHicBcGHEcAgDACxBww2nfRc9h80EmiK0RS0UCumJKF3ZKO0OcbeMvFcz/qOjIX53pd3BBMQ5yGknJ3nB0ywAhhb9uPrAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        r7 = {
          src: "/_next/static/media/ranking.24e80136.png",
          height: 129,
          width: 128,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVLz8Ro/Nph8ddR0NBMx81S2spLxctx//9PytRJw8RSzNBNxc5S2Mls/99T2stf7tNQ1s9U1N5a5NBW2tJW3MhR1dNLzczagzdKAAAAFXRSTlMLfXVUMTmsAXh7IGt9P7Rp5ea0dBg0nDG8AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAPklEQVR4nAXBiRHAIAgAwVNBwDfJjPZfanYxcY8QQxwzQvDWa+1t4OU99ykZp96zyASsDxIapmppYjr2TtN+RaoB+DKW0TcAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        r6 = {
          src: "/_next/static/media/warning.12372e45.png",
          height: 32,
          width: 32,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVMaXH/mAD/mQD/mgD/ngD/mgD/mAAinKBOAAAAB3RSTlMAXUY6Dih3NPMjYgAAAAlwSFlzAAALEwAACxMBAJqcGAAAACxJREFUeJxNi8kJACAQxObc/ksWFcR8kk+AD/G6pE9Qnm2zlQBM6kwAHvLeBQo8AFbp85aVAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        r9 = t(1653),
        ie = t(40767),
        it = {
          src: "/_next/static/media/download-blueish.29f4ea0a.png",
          height: 63,
          width: 62,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVc//la//Za/fNZ//JLyMFEralV6+JJv7pX8OhGuLJO1M1N0Mg9lJM8kY8FbrFHAAAABnRSTlP98fys/v5+FmqIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAN0lEQVR4nBXLQRKAMAwDsbVTnLTA/7/LoLsoS5ILYIJBeLUxnvt5T4B9PL1B3WtdDThJDPVvqT4fRADn1uWh+wAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        ir = t(70384);
      function ii() {
        let n = (0, s.Z)([
          "\n  width: 1.5rem;\n  height: 1.5rem;\n  cursor: pointer;\n  z-index: 3;\n",
        ]);
        return (
          (ii = function () {
            return n;
          }),
          n
        );
      }
      function io() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  height: fit-content;\n  overflow: hidden;\n  /* border-radius: 8px; */\n\n  > img {\n    &:first-child {\n      top: 15px;\n      right: 20px;\n      position: absolute;\n      z-index: 100;\n      cursor: pointer;\n    }\n  }\n",
        ]);
        return (
          (io = function () {
            return n;
          }),
          n
        );
      }
      function ia() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  width: 26.875rem;\n  height: 17rem;\n  padding: 2rem 2rem;\n  justify-content: space-between;\n  align-items: center;\n  align-self: stretch;\n  border-radius: 0.5rem;\n  border: 1px solid ",
          ";\n  background: ",
          ";\n",
        ]);
        return (
          (ia = function () {
            return n;
          }),
          n
        );
      }
      function il() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n\n  /* padding: 16px 24px 24px 8px; */\n",
        ]);
        return (
          (il = function () {
            return n;
          }),
          n
        );
      }
      function is() {
        let n = (0, s.Z)([
          "\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: ",
          ";\n  z-index: 2;\n  min-width: 50%;\n  margin-top: -5px;\n\n  > img {\n    width: 8.25rem;\n    object-fit: contain;\n    margin: 0px 0 32px 0;\n  }\n\n  > p {\n    font-family: ",
          ";\n    font-size: 1.125rem;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 18px;\n    color: ",
          ";\n    margin: -20px 0 20px 0;\n  }\n\n  > small {\n    display: flex;\n    align-items: center;\n    gap: 0 9.6px;\n    font-family: ",
          ";\n    font-weight: 400;\n    font-size: 1.125rem;\n    margin-bottom: 10px;\n    text-align: center;\n    color: ",
          ";\n    margin-bottom: 24px;\n  }\n\n  > div {\n    color: ",
          ";\n    margin-bottom: 70px;\n    font-size: 1.125rem;\n    > p {\n      font-size: 23.2px;\n      font-style: normal;\n      font-weight: 700;\n      line-height: 48px;\n      background: unset;\n    }\n  }\n\n  > span {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px 0;\n    justify-content: center;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 20px;\n    color: ",
          ";\n\n    > p {\n      font-size: 18px;\n      font-style: normal;\n      font-weight: 700;\n      line-height: 24px;\n      border-radius: 4px;\n      padding: 8px;\n      background: ",
          ";\n      color: ",
          ";\n    }\n  }\n",
        ]);
        return (
          (is = function () {
            return n;
          }),
          n
        );
      }
      function id() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  display: flex;\n  right: 0;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 0 8px;\n  width: 50%;\n  font-family: ",
          ";\n  font-weight: 700;\n  color: ",
          ";\n  margin: 0px 0 0 30px;\n\n  > small {\n    top: 10px;\n    font-size: 1rem;\n    border-radius: 4px;\n    font-weight: 500;\n    padding: 4px;\n    white-space: nowrap;\n  }\n",
        ]);
        return (
          (id = function () {
            return n;
          }),
          n
        );
      }
      function ic() {
        let n = (0, s.Z)([
          "\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0 1rem;\n  z-index: 3;\n  border-bottom-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  width: 100%;\n  height: 50px;\n  left: 0;\n  bottom: 0.625rem;\n\n  > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 20.625rem;\n    border: 1px solid ",
          ";\n    padding: 0 2.5rem;\n    height: 2.66rem;\n    gap: 0 0.5rem;\n    font-size: 1.125rem;\n    border-radius: 0.5rem;\n    font-weight: 400;\n    color: ",
          ";\n    white-space: nowrap;\n    > p {\n      font-style: normal;\n      line-height: 48px;\n      font-weight: 700;\n      background: unset;\n\n      color: ",
          ";\n    }\n  }\n",
        ]);
        return (
          (ic = function () {
            return n;
          }),
          n
        );
      }
      function iu() {
        let n = (0, s.Z)([
          "\n  position: absolute;\n  bottom: 70px;\n  height: 1px;\n  width: 90%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin: 0 auto;\n  background: ",
          ";\n",
        ]);
        return (
          (iu = function () {
            return n;
          }),
          n
        );
      }
      let im = (0, u.ZP)(c()).withConfig({
          displayName: "SharePoints.styles__DownloadButton",
          componentId: "sc-8e179d5b-0",
        })(ii()),
        ig = u.ZP.div.withConfig({
          displayName: "SharePoints.styles__Container",
          componentId: "sc-8e179d5b-1",
        })(io()),
        ih = u.ZP.div.withConfig({
          displayName: "SharePoints.styles__BoxPositionInfo",
          componentId: "sc-8e179d5b-2",
        })(
          ia(),
          (n) => {
            let { theme: e } = n;
            return e.colors.modal["01"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.input.board;
          }
        ),
        ip = u.ZP.div.withConfig({
          displayName: "SharePoints.styles__Content",
          componentId: "sc-8e179d5b-3",
        })(il()),
        ix = u.ZP.div.withConfig({
          displayName: "SharePoints.styles__UserStats",
          componentId: "sc-8e179d5b-4",
        })(
          is(),
          m.i,
          m.i,
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          m.i,
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.background["01"];
          },
          (n) => {
            let { $isGaining: e, theme: t } = n;
            return e ? t.colors.neutral.green : t.colors.neutral.red;
          }
        ),
        ib = u.ZP.div.withConfig({
          displayName: "SharePoints.styles__Rank",
          componentId: "sc-8e179d5b-5",
        })(id(), m.i, (n) => {
          let { theme: e } = n;
          return e.colors.secondary["1100"];
        }),
        iA = u.ZP.div.withConfig({
          displayName: "SharePoints.styles__ButtonsContainer",
          componentId: "sc-8e179d5b-6",
        })(
          ic(),
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          }
        ),
        iy = u.ZP.div.withConfig({
          displayName: "SharePoints.styles__Divider",
          componentId: "sc-8e179d5b-7",
        })(iu(), (n) => {
          let { theme: e } = n;
          return e.colors.secondary["1100"];
        }),
        iw = {
          BoxPositionInfo: ih,
          DownloadButton: im,
          Content: ip,
          Container: ig,
          UserStats: ix,
          Rank: ib,
          ButtonsContainer: iA,
          Divider: iy,
        },
        iv = (n) => {
          let { elo: e, referralEarnedPoints: t, totalPoints: i } = n,
            { exportAsImage: o } = (0, ie.Y)(),
            a = (0, C.useRef)(null),
            { referral: l } = (0, rG.p)();
          return (0, r.jsxs)(iw.Container, {
            children: [
              (0, r.jsx)("img", {
                src: it.src,
                width: 24,
                height: 24,
                alt: "download button",
                onClick: () => {
                  o(a, "user-points");
                },
              }),
              (0, r.jsxs)(iw.BoxPositionInfo, {
                ref: a,
                children: [
                  (0, r.jsxs)(iw.Content, {
                    children: [
                      (0, r.jsxs)(iw.UserStats, {
                        children: [
                          (0, r.jsx)("img", {
                            src: '/_next/static/media/inova2.png',
                            alt: "inova title",
                          }),
                          (0, r.jsxs)("div", {
                            children: [
                              "Total zPoints ",
                              (0, r.jsx)("p", { children: i }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)(iw.Rank, {
                        children: [
                          (0, r.jsx)("img", {
                            src: null == e ? void 0 : e.src,
                            alt: "Rank image ",
                            width: 200,
                            height: 125,
                          }),
                          " ",
                          (0, r.jsx)("small", { children: "Current Elo" }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)(iw.ButtonsContainer, {
                    children: [
                      (0, r.jsxs)("div", {
                        children: [
                          "Referral Earned Points ",
                          (0, r.jsx)("p", { children: t }),
                        ],
                      }),
                      (0, r.jsx)(r9.ZP, { value: l, size: 50 }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      function iC() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1rem 0;\n  border-radius: 0.5rem;\n  border: 1px solid rgba(90, 255, 243, 1);\n  background: linear-gradient(\n    133deg,\n    rgba(90, 255, 243, 0.27) 0%,\n    rgba(90, 255, 243, 0.1) 51.24%,\n    rgba(90, 255, 243, 0.03) 72.61%\n  );\n  background: ",
          ";\n  backdrop-filter: blur(9.359756469726562px);\n  width: 100%;\n  padding-right: 1rem;\n  height: 4.7rem;\n",
        ]);
        return (
          (iC = function () {
            return n;
          }),
          n
        );
      }
      function ij() {
        let n = (0, s.Z)(["\n  height: 100%;\n"]);
        return (
          (ij = function () {
            return n;
          }),
          n
        );
      }
      function ik() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  border-right: 1px solid rgba(90, 255, 243, 1);\n  background: linear-gradient(\n    133deg,\n    rgba(90, 255, 243, 0.27) 0%,\n    rgba(90, 255, 243, 0.1) 51.24%,\n    rgba(90, 255, 243, 0.03) 72.61%\n  );\n  color: ",
          ";\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n  padding: 0rem 0 1rem 0;\n  height: 100%;\n  width: 5.5rem;\n  margin-bottom: -0.5rem;\n\n  > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background: linear-gradient(\n      133deg,\n      rgba(90, 255, 243, 0.27) 0%,\n      rgba(90, 255, 243, 0.1) 51.24%,\n      rgba(90, 255, 243, 0.03) 72.61%\n    );\n    gap: 0.25rem;\n  }\n\n  > span {\n    font-size: 1.1rem;\n    font-weight: 700;\n\n    > p {\n      font-weight: 600;\n      font-size: 0.7rem;\n      text-align: center;\n      /* margin-bottom: -10px; */\n    }\n  }\n",
        ]);
        return (
          (ik = function () {
            return n;
          }),
          n
        );
      }
      function iZ() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: 1rem;\n  width: 19rem;\n  height: 4.75rem;\n",
        ]);
        return (
          (iZ = function () {
            return n;
          }),
          n
        );
      }
      function iI() {
        let n = (0, s.Z)([
          "\n  > a {\n    > button {\n      visibility: ",
          ";\n      border-radius: 0.25rem;\n      width: 5rem;\n      height: 2.25rem;\n      background: linear-gradient(\n        135deg,\n        #56cfe1 5%,\n        #45bfbd 47.53%,\n        #6affdb 83.33%\n      );\n    }\n  }\n",
        ]);
        return (
          (iI = function () {
            return n;
          }),
          n
        );
      }
      function i_() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  gap: 0.4rem 0;\n\n  > div {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    font-size: 0.875rem;\n    font-weight: 700;\n    color: ",
          ";\n\n    > small {\n      display: none;\n    }\n\n    > img {\n      object-fit: contain;\n      z-index: 10;\n      cursor: pointer;\n    }\n  }\n  > p {\n    font-size: 0.75rem;\n    font-weight: 400;\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (i_ = function () {
            return n;
          }),
          n
        );
      }
      function iP() {
        let n = (0, s.Z)([
          "\n  left: 5px;\n  top: 5px;\n  padding: 0.125rem 0.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  background: ",
          ";\n  min-width: 2.5rem;\n  font-size: 0.625rem;\n  color: ",
          ";\n  border-radius: 0.25rem;\n  font-weight: 700;\n",
        ]);
        return (
          (iP = function () {
            return n;
          }),
          n
        );
      }
      function iS() {
        let n = (0, s.Z)([
          "\n\n  line-height: 0.7rem;\n\n  > img {\n    object-fit: contain;\n  }\n\n  > small {\n    display: none;\n  }\n\n  &:hover {\n    cursor: pointer;\n    > small {\n      display: block;\n    }\n  }\n",
        ]);
        return (
          (iS = function () {
            return n;
          }),
          n
        );
      }
      let iB = u.ZP.div.withConfig({
          displayName: "Tasks.styles__Container",
          componentId: "sc-523688fe-0",
        })(iC(), (n) => {
          let { theme: e } = n;
          return e.colors.shared["01"];
        }),
        iN = u.ZP.div.withConfig({
          displayName: "Tasks.styles__PointsContainer",
          componentId: "sc-523688fe-1",
        })(ij()),
        iz = u.ZP.div.withConfig({
          displayName: "Tasks.styles__Points",
          componentId: "sc-523688fe-2",
        })(ik(), (n) => {
          let { theme: e } = n;
          return e.colors.neutral.white;
        }),
        iR = u.ZP.div.withConfig({
          displayName: "Tasks.styles__DescriptionContainer",
          componentId: "sc-523688fe-3",
        })(iZ()),
        iT = u.ZP.div.withConfig({
          displayName: "Tasks.styles__ButtonContainer",
          componentId: "sc-523688fe-4",
        })(iI(), (n) => {
          let { $isVisible: e } = n;
          return e ? "visible" : "hidden";
        }),
        iD = u.ZP.div.withConfig({
          displayName: "Tasks.styles__Title",
          componentId: "sc-523688fe-5",
        })(
          i_(),
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          }
        ),
        iU = u.ZP.p.withConfig({
          displayName: "Tasks.styles__Label",
          componentId: "sc-523688fe-6",
        })(
          iP(),
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.primary["900"];
          }
        ),
        iL = u.ZP.div.withConfig({
          displayName: "Tasks.styles__TooltipContainer",
          componentId: "sc-523688fe-7",
        })(iS()),
        iM = {
          Container: iB,
          PointsContainer: iN,
          Points: iz,
          DescriptionContainer: iR,
          Title: iD,
          ButtonContainer: iT,
          TooltipContainer: iL,
          Label: iU,
        },
        iE = (n) => {
          let {
            id: e,
            points: t,
            title: i,
            label: o,
            goLink: a,
            description: s,
            claimMessage: d,
          } = n;
          return (0, r.jsxs)(
            iM.Container,
            {
              children: [
                (0, r.jsx)(iM.PointsContainer, {
                  children: (0, r.jsxs)(iM.Points, {
                    children: [
                      (0, r.jsx)(iM.Label, { children: o }),
                      (0, r.jsx)("span", { children: t }),
                      (0, r.jsxs)("span", {
                        children: [
                          " ",
                          (0, r.jsx)("p", { children: "Inova Points" }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, r.jsxs)(iM.DescriptionContainer, {
                  children: [
                    (0, r.jsxs)(iM.Title, {
                      children: [
                        (0, r.jsxs)("div", {
                          style: { display: "flex" },
                          children: [
                            (0, r.jsx)("div", { children: i }),
                            (0, r.jsxs)(iM.TooltipContainer, {
                              children: [
                                (0, r.jsx)("img", {
                                  src: n1.Z.src,
                                  alt: "info",
                                  width: 16,
                                  height: 16,
                                }),
                                (0, r.jsx)("small", {
                                  children:
                                    s &&
                                    (0, r.jsx)(n5.u, {
                                      $boxLeft: "90px",
                                      $boxTop: "-10px",
                                      children: s,
                                    }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("p", { children: [d, " "] }),
                      ],
                    }),
                    (0, r.jsx)(iM.ButtonContainer, {
                      $isVisible: "" !== a,
                      children: (0, r.jsx)(B(), {
                        href: a,
                        target: "http" === a.slice(0, 3) ? "_blank" : "self",
                        children: (0, r.jsx)(l.z.Secondary, { children: "Go" }),
                      }),
                    }),
                  ],
                }),
              ],
            },
            e
          );
        },
        iF = () => {
          var n, e, t;
          let { data: i } = (0, O.z)(),
            o = (null == i ? void 0 : i.referrals.referees.length) || 0,
            a = (null == i ? void 0 : i.referralData.refereesAmount) || 0,
            l = [
              {
                id: 1,
                zarosPoints: 25,
                title: "Daily access",
                goLink: "",
                label: "dApp",
                description: "Access the dApp daily",
                claimMessage: "Claimed  times: ".concat(
                  (null == i ? void 0 : i.analytics.daily_access) || "-",
                  " "
                ),
              },
              {
                id: 2,
                zarosPoints: "20%",
                title: "Complete a referral",
                goLink: "",
                label: "dApp",
                description:
                  "Invite a friend to join Inova using your referral code",
                claimMessage: "Referees amount: ".concat(
                  void 0 !== i && o + a > 0
                    ? (null == i
                        ? void 0
                        : null === (n = i.referrals) || void 0 === n
                        ? void 0
                        : null === (e = n.referees) || void 0 === e
                        ? void 0
                        : e.length) +
                        (null == i
                          ? void 0
                          : null === (t = i.referralData) || void 0 === t
                          ? void 0
                          : t.refereesAmount)
                    : "-",
                  " "
                ),
              },
              {
                id: 3,
                zarosPoints: 500,
                title: "Trade $10,000 ",
                goLink: "/",
                label: "Trade",
                description: "Open a $10,000 trade position",
                claimMessage: "Claimed times: - ",
              },
              {
                id: 4,
                zarosPoints: 1e3,
                title: "Earn $10,000 in PnL",
                goLink: "/",
                label: "Trade",
                description: "Earn $10,000 in PnL from trading",
                claimMessage: "Claimed times: - ",
              },
              {
                id: 5,
                zarosPoints: 50,
                title: "Subscribe on Tide",
                goLink: "https://www.tideprotocol.xyz/users/spaces/1531",
                label: "Community",
                description:
                  "Complete at least one Tide task and earn the points",
                claimMessage: "".concat(
                  (null == i ? void 0 : i.tide.address) === ""
                    ? "Not completed"
                    : "Completed"
                ),
              },
              {
                id: 6,
                zarosPoints: 50,
                title: "Subscribe on Galxe ",
                goLink: "https://galxe.com/WCNdyj3vjUkDFK59xk2pKr",
                label: "Community",
                description:
                  "Complete at least one Galxe task and earn the points",
                claimMessage: "Not completed",
              },
            ],
            s = () => {
              let n = l.map((n) =>
                (0, r.jsx)(
                  iE,
                  {
                    title: n.title,
                    points: n.zarosPoints,
                    goLink: n.goLink ? n.goLink : "",
                    label: n.label,
                    description: n.description,
                    claimMessage: n.claimMessage,
                  },
                  n.id
                )
              );
              return n;
            };
          return { getListedTasks: s };
        };
      function iH() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n",
        ]);
        return (
          (iH = function () {
            return n;
          }),
          n
        );
      }
      function iQ() {
        let n = (0, s.Z)([
          "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 2rem;\n",
        ]);
        return (
          (iQ = function () {
            return n;
          }),
          n
        );
      }
      function iV() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  display: flex;\n  width: 43.7048rem;\n  height: 4.6682rem;\n  padding: 1rem 2rem 0.5rem 2rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  border-radius: 0.5rem;\n  background: linear-gradient(\n    174deg,\n    rgba(90, 255, 243, 0.27) 0%,\n    rgba(90, 255, 243, 0.1) 51.24%,\n    rgba(90, 255, 243, 0.03) 72.61%\n  );\n  backdrop-filter: blur(9.359756469726562px);\n  margin-top: 4.0625rem;\n\n  h2 {\n    text-align: center;\n    font-family: Presta Extended;\n    font-size: 32px;\n    font-weight: 400;\n    text-transform: uppercase;\n    background: var(\n      --Gradiente-01,\n      linear-gradient(135deg, #44adda 19.44%, #5afff3 75%)\n    );\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  img {\n    position: absolute;\n    right: -2.5rem;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    inset: 0;\n    border-radius: 0.5rem;\n    padding: 0.0625rem;\n    z-index: 0;\n    background: linear-gradient(\n      133deg,\n      rgba(90, 255, 243, 0.8) 0%,\n      rgba(90, 255, 243, 0.2) 51.24%,\n      rgba(90, 255, 243, 0.1) 72.61%\n    );\n    -webkit-mask: linear-gradient(var(--neutral-white) 0 0) content-box,\n      linear-gradient(var(--neutral-white) 0 0);\n    -webkit-mask-composite: xor;\n    mask-composite: exclude;\n  }\n",
        ]);
        return (
          (iV = function () {
            return n;
          }),
          n
        );
      }
      function iW() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  justify-content: center;\n  gap: 0 1rem;\n  align-items: center;\n  width: 60rem;\n  margin-bottom: 2rem;\n\n  > div {\n    img {\n      margin-bottom: -3.5rem;\n      object-fit: contain;\n    }\n  }\n",
        ]);
        return (
          (iW = function () {
            return n;
          }),
          n
        );
      }
      function iO() {
        let n = (0, s.Z)([
          "\n  h3 {\n    margin-top: 4.375rem;\n    font-family: ",
          ";\n    font-size: 2rem;\n    font-weight: 700;\n    background: var(\n      --Gradient-5,\n      linear-gradient(135deg, #56cfe1 5%, #45bfbd 47.53%, #6affdb 83.33%)\n    );\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    margin-bottom: 0.5rem;\n  }\n\n  p,\n  span {\n    line-height: 1.125rem;\n    margin-top: 0.5rem;\n    margin-bottom: 1.875rem;\n    width: 36.875rem;\n    color: ",
          ";\n    font-family: ",
          ";\n    font-size: 0.875rem;\n    font-weight: 400;\n  }\n",
        ]);
        return (
          (iO = function () {
            return n;
          }),
          n
        );
      }
      function i$() {
        let n = (0, s.Z)([
          "\n  gap: 0 0.8rem;\n  border-radius: 0.5rem;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n",
        ]);
        return (
          (i$ = function () {
            return n;
          }),
          n
        );
      }
      function iK() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n",
        ]);
        return (
          (iK = function () {
            return n;
          }),
          n
        );
      }
      function iJ() {
        let n = (0, s.Z)([
          "\n  position: relative;\n  display: flex;\n  width: 26.875rem;\n  height: 5.2188rem;\n  padding: 0.5rem 2rem;\n  justify-content: space-between;\n  align-items: center;\n  align-self: stretch;\n  border-radius: 0.5rem;\n  border: 1px solid ",
          ";\n  background: linear-gradient(\n    133deg,\n    rgba(90, 255, 243, 0.3) 1.71%,\n    rgba(90, 255, 243, 0.03) 98.28%\n  );\n  backdrop-filter: blur(10px);\n\n  p {\n    color: ",
          ";\n    font-family: ",
          ";\n    font-size: 0.875rem;\n    font-style: normal;\n    font-weight: 700;\n    text-align: right;\n  }\n\n  span {\n    color: ",
          ";\n    font-family: ",
          ";\n    font-size: 1.5rem;\n    font-style: normal;\n    font-weight: 500;\n    display: block;\n    text-align: center;\n  }\n",
        ]);
        return (
          (iJ = function () {
            return n;
          }),
          n
        );
      }
      function iG() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 60rem;\n  height: 4.0816rem;\n  border-radius: 8px;\n  background: linear-gradient(\n    133deg,\n    rgba(90, 255, 243, 0.27) 0%,\n    rgba(90, 255, 243, 0.1) 51.24%,\n    rgba(90, 255, 243, 0.03) 72.61%\n  );\n  backdrop-filter: blur(9.359756469726562px);\n  margin-top: 1rem;\n\n  h3 {\n    color: ",
          ";\n    font-family: ",
          ";\n    font-size: 0.875rem;\n    font-weight: 700;\n    margin-bottom: 0.5rem;\n  }\n\n  p {\n    color: ",
          ";\n    font-family: ",
          ";\n    font-size: 1rem;\n    font-weight: 400;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    inset: 0;\n    border-radius: 0.5rem;\n    padding: 0.0625rem;\n    z-index: 0;\n    background: linear-gradient(\n      133deg,\n      rgba(90, 255, 243, 0.8) 0%,\n      rgba(90, 255, 243, 0.2) 51.24%,\n      rgba(90, 255, 243, 0.1) 72.61%\n    );\n    -webkit-mask: linear-gradient(var(--neutral-white) 0 0) content-box,\n      linear-gradient(var(--neutral-white) 0 0);\n    -webkit-mask-composite: xor;\n    mask-composite: exclude;\n  }\n",
        ]);
        return (
          (iG = function () {
            return n;
          }),
          n
        );
      }
      function iX() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0 2rem;\n  width: 57.5rem;\n",
        ]);
        return (
          (iX = function () {
            return n;
          }),
          n
        );
      }
      function iq() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  width: 100%;\n  height: 4.75rem;\n  padding: 0.5rem 1.25rem;\n  background: linear-gradient(\n    133deg,\n    rgba(90, 255, 243, 0.27) 0%,\n    rgba(90, 255, 243, 0.1) 51.24%,\n    rgba(90, 255, 243, 0.03) 72.61%\n  );\n  backdrop-filter: blur(9.359756469726562px);\n  border-radius: 0.5rem;\n  border: 1px solid ",
          ";\n\n  > div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.5rem 0;\n\n    > p {\n      font-family: 'Presta Medium';\n      font-size: 1.75rem;\n      font-style: normal;\n      font-weight: 500;\n      line-height: 100%;\n      white-space: nowrap;\n      background: var(\n        --Gradient-5,\n        linear-gradient(135deg, #56cfe1 5%, #45bfbd 47.53%, #6affdb 83.33%)\n      );\n      background-clip: text;\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n      margin-bottom: -0.5rem;\n    }\n    > div {\n      > small {\n        display: none;\n      }\n\n      &:hover {\n        cursor: pointer;\n        > small {\n          display: block;\n        }\n      }\n      img {\n        margin: 0 0 -0.35rem 0.5rem;\n      }\n    }\n  }\n",
        ]);
        return (
          (iq = function () {
            return n;
          }),
          n
        );
      }
      function iY() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 1rem;\n  width: 100%;\n\n  > h1 {\n    font-family: ",
          ";\n    font-size: 1.5rem;\n    font-weight: 700;\n    background: var(\n      --Gradient-5,\n      linear-gradient(135deg, #56cfe1 5%, #45bfbd 47.53%, #6affdb 83.33%)\n    );\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    margin: -0.35rem 0 1.15rem 0;\n  }\n",
        ]);
        return (
          (iY = function () {
            return n;
          }),
          n
        );
      }
      function i0() {
        let n = (0, s.Z)([
          "\n  border-radius: 0.5rem;\n  border: 1px solid var(--Gradient-5, #56cfe1);\n  padding: 0.5rem 1rem;\n  width: 100%;\n  height: 25.38rem;\n\n  > h1 {\n    font-family: ",
          ";\n    font-size: 1.5rem;\n    font-weight: 700;\n    background: var(\n      --Gradient-5,\n      linear-gradient(135deg, #56cfe1 5%, #45bfbd 47.53%, #6affdb 83.33%)\n    );\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    margin-bottom: 0.5rem;\n  }\n",
        ]);
        return (
          (i0 = function () {
            return n;
          }),
          n
        );
      }
      function i1() {
        let n = (0, s.Z)([
          "\n  width: 100%;\n  overflow-y: auto;\n  height: 21rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.6rem 0;\n  padding: 12rem 1rem 1rem 0;\n  margin-top: -0.5rem;\n",
        ]);
        return (
          (i1 = function () {
            return n;
          }),
          n
        );
      }
      function i5() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  width: 26.875rem;\n  height: 5.2188rem;\n  padding: 0.5rem 2rem;\n  align-items: center;\n  align-self: stretch;\n  border-radius: 0.5rem;\n  background: ",
          ";\n  border: 1px solid ",
          ";\n\n  backdrop-filter: blur(10px);\n\n  > div {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background: linear-gradient(\n      133deg,\n      rgba(90, 255, 243, 0.3) 1.71%,\n      rgba(90, 255, 243, 0.03) 98.28%\n    );\n    padding-left: 1rem;\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n\n    > input {\n      color: ",
          ";\n      font-family: ",
          ";\n      font-size: 0.875rem;\n      font-style: normal;\n      border: none;\n      background: transparent;\n      font-weight: 700;\n      padding-right: 1rem;\n      width: 100%;\n    }\n\n    > button {\n      border-radius: 0.25rem;\n      width: 11rem;\n      font-size: 0.875rem;\n      height: 2.25rem;\n      background: linear-gradient(\n        135deg,\n        #56cfe1 5%,\n        #45bfbd 47.53%,\n        #6affdb 83.33%\n      );\n    }\n  }\n",
        ]);
        return (
          (i5 = function () {
            return n;
          }),
          n
        );
      }
      function i2() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 3.5rem;\n  padding: 0.5rem 1rem;\n  gap: 0.5rem;\n  margin: -0.04rem 0 0.04rem 0;\n  background-color: #24383f;\n  border-radius: 0.5rem;\n  border: 1px solid ",
          ";\n\n  > h3 {\n    font-size: 0.875rem;\n    font-weight: 400;\n    font-family: ",
          ";\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (i2 = function () {
            return n;
          }),
          n
        );
      }
      function i4() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  width: 100%;\n  height: 4.75rem;\n  padding: 0.5rem 1.25rem;\n  align-items: center;\n  align-self: stretch;\n  border-radius: 0.5rem;\n  background: ",
          ";\n  border: 1px solid ",
          ";\n  gap: 0 1rem;\n  backdrop-filter: blur(10px);\n\n  > span {\n    > small {\n      display: none;\n    }\n    &:hover {\n      cursor: pointer;\n      > small {\n        display: block;\n      }\n    }\n  }\n\n  > div {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    background: linear-gradient(\n      133deg,\n      rgba(90, 255, 243, 0.3) 1.71%,\n      rgba(90, 255, 243, 0.03) 98.28%\n    );\n    padding-left: 1rem;\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n    width: 100%;\n\n    > input {\n      color: ",
          ";\n      font-family: ",
          ";\n      font-size: 0.875rem;\n      font-style: normal;\n      border: none;\n      background: transparent;\n      font-weight: 700;\n      padding-right: 1rem;\n      width: 100%;\n    }\n\n    > button {\n      border-radius: 0.25rem;\n      width: 11rem;\n      font-size: 0.875rem;\n      height: 2.25rem;\n      background: linear-gradient(\n        135deg,\n        #56cfe1 5%,\n        #45bfbd 47.53%,\n        #6affdb 83.33%\n      );\n    }\n  }\n",
        ]);
        return (
          (i4 = function () {
            return n;
          }),
          n
        );
      }
      function i3() {
        let n = (0, s.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 1rem;\n  background: linear-gradient(\n    133deg,\n    rgba(90, 255, 243, 0.3) 1.71%,\n    rgba(90, 255, 243, 0.03) 98.28%\n  );\n  border: 1px solid ",
          ";\n  backdrop-filter: blur(10px);\n  border-radius: 0.5rem;\n  padding: 1rem 1rem;\n  min-height: 10rem;\n\n  > h3 {\n    max-width: 25rem;\n    font-family: ",
          ";\n    font-size: 1.5rem;\n    font-weight: 700;\n    background: var(\n      --Gradient-5,\n      linear-gradient(135deg, #56cfe1 5%, #45bfbd 47.53%, #6affdb 83.33%)\n    );\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    margin-bottom: 0.5rem;\n  }\n",
        ]);
        return (
          (i3 = function () {
            return n;
          }),
          n
        );
      }
      function i8() {
        let n = (0, s.Z)([
          "\n  width: fit-content;\n  border-radius: 0.5rem;\n  border: 1px solid ",
          ";\n\n  > div {\n    min-width: 25rem;\n  }\n",
        ]);
        return (
          (i8 = function () {
            return n;
          }),
          n
        );
      }
      let i7 = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__MainContent",
          componentId: "sc-e9ef67c8-0",
        })(iH()),
        i6 = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__Container",
          componentId: "sc-e9ef67c8-1",
        })(iQ()),
        i9 = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__Title",
          componentId: "sc-e9ef67c8-2",
        })(iV()),
        on = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__ContentContainer",
          componentId: "sc-e9ef67c8-3",
        })(iW()),
        oe = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__Content",
          componentId: "sc-e9ef67c8-4",
        })(
          iO(),
          m.i,
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          m.i
        ),
        ot = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__Infos",
          componentId: "sc-e9ef67c8-5",
        })(i$()),
        or = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__InfosLeft",
          componentId: "sc-e9ef67c8-6",
        })(iK()),
        oi = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__Info",
          componentId: "sc-e9ef67c8-7",
        })(
          iJ(),
          (n) => {
            let { theme: e } = n;
            return e.colors.modal["01"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          m.i,
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          m.i
        ),
        oo = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__Points",
          componentId: "sc-e9ef67c8-8",
        })(
          iG(),
          (n) => {
            let { theme: e } = n;
            return e.colors.secondary["1100"];
          },
          m.i,
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          m.i
        ),
        oa = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__HeaderContainer",
          componentId: "sc-e9ef67c8-9",
        })(iX()),
        ol = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__Chads",
          componentId: "sc-e9ef67c8-10",
        })(iq(), (n) => {
          let { theme: e } = n;
          return e.colors.modal["01"];
        }),
        os = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__RightSide",
          componentId: "sc-e9ef67c8-11",
        })(iY(), m.i),
        od = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__TasksContainer",
          componentId: "sc-e9ef67c8-12",
        })(i0(), m.i),
        oc = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__Tasks",
          componentId: "sc-e9ef67c8-13",
        })(i1()),
        ou = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__ReferralContainer",
          componentId: "sc-e9ef67c8-14",
        })(
          i5(),
          (n) => {
            let { theme: e } = n;
            return e.colors.shared["01"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.modal["01"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          m.i
        ),
        om = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__WarningUpdate",
          componentId: "sc-e9ef67c8-15",
        })(
          i2(),
          (n) => {
            let { theme: e } = n;
            return e.colors.modal["01"];
          },
          m.i,
          (n) => {
            let { theme: e } = n;
            return e.colors.trading.orange;
          }
        ),
        of = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__AlphaKeyContainer",
          componentId: "sc-e9ef67c8-16",
        })(
          i4(),
          (n) => {
            let { theme: e } = n;
            return e.colors.shared["01"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.modal["01"];
          },
          (n) => {
            let { theme: e } = n;
            return e.colors.neutral.white;
          },
          m.i
        ),
        og = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__TideContainer",
          componentId: "sc-e9ef67c8-17",
        })(
          i3(),
          (n) => {
            let { theme: e } = n;
            return e.colors.modal["01"];
          },
          m.i
        ),
        oh = u.ZP.div.withConfig({
          displayName: "LeaderboardPoints.styles__Tide",
          componentId: "sc-e9ef67c8-18",
        })(i8(), (n) => {
          let { theme: e } = n;
          return e.colors.modal["01"];
        }),
        op = {
          MainContent: i7,
          Container: i6,
          Title: i9,
          Content: oe,
          ContentContainer: on,
          Infos: ot,
          Info: oi,
          InfosLeft: or,
          Points: oo,
          TasksContainer: od,
          RightSide: os,
          ReferralContainer: ou,
          Tasks: oc,
          AlphaKeyContainer: of,
          HeaderContainer: oa,
          Chads: ol,
          WarningUpdate: om,
          TideContainer: og,
          Tide: oh,
        },
        ox = () => {
          let { data: n, onChainPoints: e } = (0, O.z)(),
            { getListedTasks: t } = iF(),
            { referral: i } = (0, rG.p)(),
            { activateKey: o, keyText: a } = (0, t$.d)(),
            [s, d] = (0, C.useState)(""),
            { userData: u } = rJ(),
            { tideEmbedRef: m } = rX(),
            f = (() => {
              switch (null == u ? void 0 : u.elo) {
                case "gigachad":
                  return tS;
                case "chad":
                  return r0;
                case "platinum":
                  return r5;
                case "gold":
                  return r1;
                case "silver":
                  return r2;
                default:
                  return rY;
              }
            })(),
            g = (null == n ? void 0 : n.tide.address) !== "" ? 50 : 0,
            h = (null == n ? void 0 : n.points)
              ? (null == n ? void 0 : n.points) + g
              : 0 + (e || 0),
            p = () => {
              navigator.clipboard.writeText(i),
                rZ.Am.success("Referral code copied to clipboard!", {
                  position: "bottom-right",
                  autoClose: 3e3,
                  hideProgressBar: !1,
                  closeOnClick: !0,
                  pauseOnHover: !0,
                  draggable: !0,
                  progress: void 0,
                });
            },
            x = (0, j.sJ)(rI.T),
            b = (n) => {
              d(n.target.value.replace(/zrs-/g, ""));
            };
          return (0, r.jsx)(op.Container, {
            children: (0, r.jsxs)(op.MainContent, {
              children: [
                (0, r.jsxs)(op.ContentContainer, {
                  children: [
                    (0, r.jsx)("div", {
                      children: (0, r.jsx)("img", {
                        src: "light" === x ? r4.src : r3.src,
                        alt: "Inova League",
                        width: 300,
                      }),
                    }),
                    (0, r.jsxs)(op.Content, {
                      children: [
                        (0, r.jsx)("h3", { children: "Alpha Testnet Rewards" }),
                        (0, r.jsxs)("span", {
                          children: [
                            "Inova Points ",
                            "(zPoints)",
                            " can be earned by using the ",
                            "Inova’",
                            " ",
                            "Alpha Testnet 1.0, and they can also be directly converted into $ZRS (conversion ratio yet to be determined).",
                            (0, r.jsx)("p", {
                              children:
                                "These points can be earned in various ways, including trading, using other features of the dApp, and participating in community activities, such as Tide. Moreover, climbing up the Pre-Season Leaderboard will help users attain higher ranks, which correspond to a higher Points multiplier.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)(op.TideContainer, {
                  children: [
                    (0, r.jsx)("h3", {
                      children:
                        "Join our Tide to earn zPoints and compete for rewards.",
                    }),                    
                  ],
                }),
                (0, r.jsxs)(op.Infos, {
                  children: [
                    (0, r.jsxs)(op.InfosLeft, {
                      children: [
                        (0, r.jsx)(iv, {
                          totalPoints: h,
                          referralEarnedPoints:
                            (null == n ? void 0 : n.referralsPoints) || 0,
                          elo: f,
                        }),
                        (0, r.jsx)(op.ReferralContainer, {
                          children: (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("input", {
                                type: "text",
                                value: i,
                                readOnly: !0,
                              }),
                              (0, r.jsx)(l.z.Secondary, {
                                onClick: p,
                                children: "Copy Referral",
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsxs)(op.Info, {
                          children: [
                            (0, r.jsx)("img", {
                              src: r7.src,
                              alt: "ranking",
                              width: 64,
                              height: 64,
                            }),
                            (0, r.jsxs)("div", {
                              children: [
                                (0, r.jsx)("p", { children: "Your Ranking" }),
                                (0, r.jsx)("span", {
                                  children: (null == n ? void 0 : n.rank)
                                    ? "".concat(null == n ? void 0 : n.rank)
                                    : "-",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)(op.Info, {
                          children: [
                            (0, r.jsx)("img", { src: r8.src, alt: "ranking" }),
                            (0, r.jsxs)("div", {
                              children: [
                                (0, r.jsx)("p", { children: "End Season" }),
                                (0, r.jsx)("span", { children: "-" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)(op.RightSide, {
                      children: [
                        (null == n ? void 0 : n.isAlphaBoosted)
                          ? (0, r.jsx)(op.Chads, {
                              children: (0, r.jsxs)("div", {
                                children: [
                                  (0, r.jsx)("img", {
                                    src: rq.src,
                                    alt: "chad",
                                    width: 70,
                                    height: 70,
                                  }),
                                  (0, r.jsxs)("p", {
                                    children: [
                                      "Alpha Boosted ",
                                      null == n ? void 0 : n.multiplier,
                                      "x",
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    children: [
                                      (0, r.jsx)("img", {
                                        src: n1.Z.src,
                                        alt: "info",
                                        width: 15,
                                        height: 16,
                                      }),
                                      (0, r.jsxs)(n5.u, {
                                        $boxTop: "10px",
                                        children: [
                                          "Gives you ",
                                          null == n ? void 0 : n.multiplier,
                                          "x boosted points during the alpha testnet 1.0",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            })
                          : (0, r.jsxs)(op.AlphaKeyContainer, {
                              children: [
                                (0, r.jsxs)("div", {
                                  children: [
                                    (0, r.jsx)("input", {
                                      type: "text",
                                      placeholder: "Enter the Alpha Boost key",
                                      value: s,
                                      onChange: b,
                                    }),
                                    (0, r.jsx)(l.z.Secondary, {
                                      disabled: "" === s,
                                      onClick: () => o({ key: s }),
                                      children: a,
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("span", {
                                  children: [
                                    (0, r.jsx)("img", {
                                      src: n1.Z.src,
                                      alt: "info",
                                      width: 15,
                                      height: 16,
                                    }),
                                    (0, r.jsx)(n5.u, {
                                      $boxTop: "5px",
                                      children:
                                        "Gives you 2x boosted points during the alpha testnet 1.0",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        (0, r.jsxs)(op.TasksContainer, {
                          children: [
                            (0, r.jsx)("h1", { children: "Tasks" }),
                            (0, r.jsxs)(op.Tasks, { children: [" ", t()] }),
                          ],
                        }),
                        (0, r.jsxs)(op.WarningUpdate, {
                          children: [
                            (0, r.jsx)("img", {
                              src: r6.src,
                              alt: "Warning",
                              width: 32,
                              height: 32,
                            }),
                            (0, r.jsx)("h3", {
                              children:
                                "The Points Leaderboard is updated every 12 hours.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)(op.Points, {
                  children: [
                    (0, r.jsx)("h3", { children: "Inova Points Multiplier" }),
                    (0, r.jsxs)("p", {
                      children: [
                        (0, r.jsx)("b", { children: "Bronze:" }),
                        " 1.0x | ",
                        (0, r.jsx)("b", { children: "Silver:" }),
                        " 1.25x | ",
                        (0, r.jsx)("b", { children: "Gold:" }),
                        " 1.5x |",
                        " ",
                        (0, r.jsx)("b", { children: "Platinum:" }),
                        " 2x | ",
                        (0, r.jsx)("b", { children: "Chad:" }),
                        " 2.5x | ",
                        (0, r.jsx)("b", { children: "Giga Chad:" }),
                        " 3x",
                        " ",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
    },
  },
]);
