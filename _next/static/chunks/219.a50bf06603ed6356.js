"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [219],
  {
    40044: function (n, e) {
      e.Z = {
        src: "/_next/static/media/light-blue-close.ea74b237.webp",
        height: 72,
        width: 72,
        blurDataURL:
          "data:image/webp;base64,UklGRrQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDsAAAABT6CgjSQ1d/yMBtDBR0SAa+HPF5dCSWxb0WVHEmK3RCAFMZBIHJ7KlIjofwCEO1mx2/Oa/ysOF+4WAABWUDggUgAAAFACAJ0BKggACAACQDglqDbBegNNAD6K3+CAwAD+72W/unnNunQcCzHyNei6TMcyWEtLa9TLhlgHar1i3vAP/+U7neEIX9Df+/m/lQ/58H5bwAA=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    88358: function (n, e) {
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
    92733: function (n, e, r) {
      r.d(e, {
        D: function () {
          return i;
        },
      });
      var t = r(4480);
      let i = (0, t.cn)({
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
    6280: function (n, e, r) {
      r.d(e, {
        x: function () {
          return s;
        },
      });
      var t = r(85893),
        i = r(76459),
        a = r(7297),
        o = r(15437);
      function d() {
        let n = (0, a.Z)([
          "\n  position: relative;\n  z-index: ",
          ";\n  display: flex;\n  flex-direction: column;\n  width: ",
          ";\n  min-width: ",
          ";\n  height: ",
          ";\n  min-height: ",
          ";\n  border-radius: ",
          ";\n  padding: ",
          ";\n  padding-bottom: ",
          ";\n  overflow: ",
          ";\n  margin-top: ",
          ";\n  margin-left: ",
          ";\n  margin-bottom: ",
          ";\n  background: ",
          ";\n\n  &::before {\n    content: '';\n    display: none;\n    z-index: -1;\n    position: absolute;\n    display: ",
          ";\n    inset: 0;\n    border-radius: ",
          ";\n    padding: 0.08rem;\n    background: linear-gradient(\n      ",
          ",\n      var(--primary-900) 50%,\n      var(--secondary-200) 100.08%\n    );\n    -webkit-mask: linear-gradient(var(--neutral-white) 0 0) content-box,\n      linear-gradient(var(--neutral-white) 0 0);\n    -webkit-mask-composite: xor;\n    mask-composite: exclude;\n  }\n\n  ",
          "\n  transition: all 0.2s;\n",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      let l = o.zo.div(
          d(),
          (n) => {
            let { $zIndex: e } = n;
            return e || "1";
          },
          (n) => {
            let { width: e } = n;
            return e || "100%";
          },
          (n) => {
            let { width: e } = n;
            return e || "100%";
          },
          (n) => {
            let { height: e } = n;
            return e || "min-content";
          },
          (n) => {
            let { $minHeight: e } = n;
            return e || "";
          },
          (n) => {
            let { $borderRadius: e } = n;
            return e || "1rem";
          },
          (n) => {
            let { $padding: e } = n;
            return e || "1rem";
          },
          (n) => {
            let { $paddingBottom: e } = n;
            return e;
          },
          (n) => (n.$isHidden ? "hidden" : ""),
          (n) => {
            let { $marginTop: e } = n;
            return e || "";
          },
          (n) => {
            let { $marginLeft: e } = n;
            return e || "";
          },
          (n) => {
            let { $marginBottom: e } = n;
            return e || "";
          },
          (n) => {
            let { $hasGradient: e, theme: r, $isLoadingBackground: t } = n;
            return t
              ? "linear-gradient(133deg, rgba(128, 128, 128, 0.30) 1.71%, rgba(128, 128, 128, 0.05) 98.28%)"
              : e && "light" === r.currentTheme
              ? "\n    radial-gradient(\n      102.14% 78.98% at 50% 141.52%,\n      var(--modal-5) 0%,\n      rgba(20, 105, 133, 0) 100%\n    ),\n    ".concat(
                  r.components.box.backgroundColor,
                  "\n  "
                )
              : "".concat(r.components.box.backgroundColor);
          },
          (n) => {
            let { $hasNoBorder: e } = n;
            return e ? "none" : "block";
          },
          (n) => {
            let { $borderRadius: e } = n;
            return e || "1rem";
          },
          (n) => {
            let { $degree: e } = n;
            return e ? "".concat(e, "deg") : "160deg";
          },
          (n) =>
            n.animationToOpen &&
            "@keyframes animationToOpen {\n    from {\n      width: 0;\n      height: 0;\n    }\n    to {\n      width: "
              .concat(n.width || "100%", ";\n      height: ")
              .concat(
                n.height || "min-content",
                ";\n    }\n  }\n\n  animation: animationToOpen 0.3s;\n\n  "
              )
        ),
        c = { Container: l },
        s = (n) => {
          let {
            children: e,
            width: r,
            height: a,
            minHeight: o,
            paddingBottom: d,
            animationToOpen: l,
            className: s,
            isHidden: m,
            padding: u,
            degree: g,
            borderRadius: h,
            $zIndex: f,
            $hasGradient: A,
            marginTop: p,
            marginLeft: b,
            marginBottom: x,
            $hasNoBorder: y,
            dataTestId: w,
            $isLoadingBackground: v,
            ref: k,
          } = n;
          return (0, t.jsx)(i._, {
            children: (0, t.jsx)(c.Container, {
              width: r,
              height: a,
              $paddingBottom: d,
              animationToOpen: l,
              className: s,
              $isHidden: m,
              $padding: u,
              $degree: g,
              $borderRadius: h,
              $minHeight: o,
              $zIndex: f,
              $hasGradient: A,
              $marginTop: p,
              $marginLeft: b,
              $marginBottom: x,
              $hasNoBorder: y,
              "data-testid": w,
              $isLoadingBackground: v,
              ref: k,
              children: e,
            }),
          });
        };
    },
    90219: function (n, e, r) {
      r.r(e),
        r.d(e, {
          OrderPreferences: function () {
            return P;
          },
        });
      var t = r(85893),
        i = r(25675),
        a = r.n(i),
        o = r(67294),
        d = r(4480),
        l = r(40797),
        c = r(92733),
        s = r(94452),
        m = r(40044),
        u = r(6280),
        g = r(63114),
        h = r(7297),
        f = r(15437),
        A = r(88358),
        p = r(36055);
      function b() {
        let n = (0, h.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-family: ",
          ";\n  font-weight: 700;\n  color: var(--secondary);\n  font-size: 0.75rem;\n\n  > img {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      function x() {
        let n = (0, h.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  margin: 1rem 0 0 0;\n",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      function y() {
        let n = (0, h.Z)([
          "\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem 0;\n  margin-bottom: 1.5rem;\n\n  > div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 0.2rem;\n\n    > span {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 0 0.25rem;\n      font-family: ",
          ";\n      font-weight: 400;\n      font-size: 0.75rem;\n      color: var(--secondary);\n\n      &:hover {\n        cursor: pointer;\n      }\n\n      > input {\n        appearance: none;\n        -webkit-appearance: none;\n        width: 0.75rem;\n        height: 0.75rem;\n        border: 0.0625rem solid var(--secondary);\n        border-radius: 0.25rem;\n        background: transparent;\n        margin-top: -0.057rem;\n\n        &:hover {\n          cursor: pointer;\n        }\n\n        &:checked {\n          background-size: cover;\n          background-image: url(",
          ");\n          border: none;\n        }\n      }\n    }\n\n    > small {\n      font-family: ",
          ";\n      font-weight: 400;\n      color: var(--secondary);\n      font-size: 0.75rem;\n    }\n  }\n\n  > p {\n    font-family: ",
          ";\n    font-weight: 400;\n    font-size: 0.625rem;\n    line-height: 1rem;\n    color: var(--neutral-white);\n  }\n",
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      function w() {
        let n = (0, h.Z)([
          "\n  display: flex;\n  padding: 0.5rem 0;\n  justify-content: center;\n  align-items: center;\n  gap: 0 0.5rem;\n",
        ]);
        return (
          (w = function () {
            return n;
          }),
          n
        );
      }
      let v = f.ZP.div.withConfig({
          displayName: "OrderPreferences.styles__Header",
          componentId: "sc-fdf514d8-0",
        })(b(), p.i),
        k = f.ZP.div.withConfig({
          displayName: "OrderPreferences.styles__Content",
          componentId: "sc-fdf514d8-1",
        })(x()),
        C = f.ZP.div.withConfig({
          displayName: "OrderPreferences.styles__OrderType",
          componentId: "sc-fdf514d8-2",
        })(y(), p.i, A.Z.src, p.i, p.i),
        B = f.ZP.div.withConfig({
          displayName: "OrderPreferences.styles__ButtonsContainer",
          componentId: "sc-fdf514d8-3",
        })(w()),
        j = { Header: v, Content: k, OrderType: C, ButtonsContainer: B },
        P = () => {
          let [n, e] = (0, d.FV)(c.D),
            { simplifiedSymbol: r } = (0, d.sJ)(l.xY),
            { handleClose: i } = (0, s.d)(),
            h = localStorage.getItem("userSelection"),
            [f, A] = (0, o.useState)("Value" === h || n.orderByValue),
            p = () => {
              e((n) => ({ ...n, orderByValue: f, orderBySize: !f })),
                localStorage.setItem("userSelection", f ? "Value" : "Size"),
                i();
            };
          return (0, t.jsxs)(u.x, {
            width: "23.375rem",
            padding: "1rem 1rem 0.75rem 1rem",
            borderRadius: "0.5rem ",
            children: [
              (0, t.jsxs)(j.Header, {
                children: [
                  "Order Placement Preferences",
                  (0, t.jsx)("img", {
                    src: m.Z.src,
                    alt: "close button",
                    width: 24,
                    onClick: i,
                  }),
                ],
              }),
              (0, t.jsxs)(j.Content, {
                children: [
                  (0, t.jsxs)(j.OrderType, {
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsxs)("span", {
                            onClick: () => {
                              A(!1);
                            },
                            children: [
                              (0, t.jsx)("input", {
                                type: "checkbox",
                                checked: !f,
                                onChange: () => {
                                  A(!1);
                                },
                              }),
                              "Order by Size",
                            ],
                          }),
                          (0, t.jsx)("small", { children: r }),
                        ],
                      }),
                      (0, t.jsxs)("p", {
                        children: [
                          "Please enter your size denominated in ",
                          r,
                          " terms.",
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)(j.OrderType, {
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsxs)("span", {
                            onClick: () => {
                              A(!0);
                            },
                            children: [
                              (0, t.jsx)("input", {
                                type: "checkbox",
                                checked: f,
                                onChange: () => {
                                  A(!0);
                                },
                              }),
                              "Order by Value",
                            ],
                          }),
                          (0, t.jsx)("small", { children: "USD" }),
                        ],
                      }),
                      (0, t.jsx)("p", {
                        children:
                          "Please enter your desired order value. You can modify the required margin by adjusting the applied leverage",
                      }),
                    ],
                  }),
                  (0, t.jsxs)(j.ButtonsContainer, {
                    children: [
                      (0, t.jsx)(g.z.StandardOutlined, {
                        width: "100%",
                        height: "2rem",
                        "data-testid": "cancel-order-placement-button",
                        onClick: i,
                        children: "Cancel",
                      }),
                      (0, t.jsx)(g.z.StandardDefault, {
                        width: "100%",
                        height: "2rem",
                        "data-testid": "confirm-order-placement-button",
                        onClick: p,
                        children: "Confirm",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
  },
]);
