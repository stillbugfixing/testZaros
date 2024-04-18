"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3608],
  {
    40044: function (n, t) {
      t.Z = {
        src: "/_next/static/media/light-blue-close.ea74b237.webp",
        height: 72,
        width: 72,
        blurDataURL:
          "data:image/webp;base64,UklGRrQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDsAAAABT6CgjSQ1d/yMBtDBR0SAa+HPF5dCSWxb0WVHEmK3RCAFMZBIHJ7KlIjofwCEO1mx2/Oa/ysOF+4WAABWUDggUgAAAFACAJ0BKggACAACQDglqDbBegNNAD6K3+CAwAD+72W/unnNunQcCzHyNei6TMcyWEtLa9TLhlgHar1i3vAP/+U7neEIX9Df+/m/lQ/58H5bwAA=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    6280: function (n, t, e) {
      e.d(t, {
        x: function () {
          return s;
        },
      });
      var A = e(85893),
        i = e(76459),
        r = e(7297),
        a = e(15437);
      function o() {
        let n = (0, r.Z)([
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
          (o = function () {
            return n;
          }),
          n
        );
      }
      let l = a.zo.div(
          o(),
          (n) => {
            let { $zIndex: t } = n;
            return t || "1";
          },
          (n) => {
            let { width: t } = n;
            return t || "100%";
          },
          (n) => {
            let { width: t } = n;
            return t || "100%";
          },
          (n) => {
            let { height: t } = n;
            return t || "min-content";
          },
          (n) => {
            let { $minHeight: t } = n;
            return t || "";
          },
          (n) => {
            let { $borderRadius: t } = n;
            return t || "1rem";
          },
          (n) => {
            let { $padding: t } = n;
            return t || "1rem";
          },
          (n) => {
            let { $paddingBottom: t } = n;
            return t;
          },
          (n) => (n.$isHidden ? "hidden" : ""),
          (n) => {
            let { $marginTop: t } = n;
            return t || "";
          },
          (n) => {
            let { $marginLeft: t } = n;
            return t || "";
          },
          (n) => {
            let { $marginBottom: t } = n;
            return t || "";
          },
          (n) => {
            let { $hasGradient: t, theme: e, $isLoadingBackground: A } = n;
            return A
              ? "linear-gradient(133deg, rgba(128, 128, 128, 0.30) 1.71%, rgba(128, 128, 128, 0.05) 98.28%)"
              : t && "light" === e.currentTheme
              ? "\n    radial-gradient(\n      102.14% 78.98% at 50% 141.52%,\n      var(--modal-5) 0%,\n      rgba(20, 105, 133, 0) 100%\n    ),\n    ".concat(
                  e.components.box.backgroundColor,
                  "\n  "
                )
              : "".concat(e.components.box.backgroundColor);
          },
          (n) => {
            let { $hasNoBorder: t } = n;
            return t ? "none" : "block";
          },
          (n) => {
            let { $borderRadius: t } = n;
            return t || "1rem";
          },
          (n) => {
            let { $degree: t } = n;
            return t ? "".concat(t, "deg") : "160deg";
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
        d = { Container: l },
        s = (n) => {
          let {
            children: t,
            width: e,
            height: r,
            minHeight: a,
            paddingBottom: o,
            animationToOpen: l,
            className: s,
            isHidden: c,
            padding: g,
            degree: m,
            borderRadius: u,
            $zIndex: h,
            $hasGradient: b,
            marginTop: C,
            marginLeft: w,
            marginBottom: f,
            $hasNoBorder: Q,
            dataTestId: x,
            $isLoadingBackground: p,
            ref: B,
          } = n;
          return (0, A.jsx)(i._, {
            children: (0, A.jsx)(d.Container, {
              width: e,
              height: r,
              $paddingBottom: o,
              animationToOpen: l,
              className: s,
              $isHidden: c,
              $padding: g,
              $degree: m,
              $borderRadius: u,
              $minHeight: a,
              $zIndex: h,
              $hasGradient: b,
              $marginTop: C,
              $marginLeft: w,
              $marginBottom: f,
              $hasNoBorder: Q,
              "data-testid": x,
              $isLoadingBackground: p,
              ref: B,
              children: t,
            }),
          });
        };
    },
    3608: function (n, t, e) {
      e.r(t),
        e.d(t, {
          ConnectWalletStatus: function () {
            return Z;
          },
        });
      var A = e(85893),
        i = e(25675),
        r = e.n(i),
        a = e(94452),
        o = e(90994),
        l = {
          src: "/_next/static/media/CoinbaseConnected.8e7e6703.webp",
          height: 625,
          width: 613,
          blurDataURL:
            "data:image/webp;base64,UklGRswAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAEIEREJAQAACW7AwHIJAAARvP//wBIAABG7///AEgAACmKxsWUJAAMsPlBRPSQDAylFS1RQNQMAAgQEBAQDAABWUDggZAAAADACAJ0BKggACAACQDglsAJ0a4ACSLWCnCqAAP7n4uPgvYm+UR8P5ZCJ5m4fHtcpErFvv7asKDTX2+PfSgXzXa4Md+Dkvjv7x13jWMzHnG4lJ/+fty/0+8PMfv/6n3dT/sDsQAA=",
          blurWidth: 8,
          blurHeight: 8,
        },
        d = {
          src: "/_next/static/media/CoinbaseDisconnected.4ffeaf52.webp",
          height: 210,
          width: 205,
          blurDataURL:
            "data:image/webp;base64,UklGRrQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAEJEREJAQAACXPCwnMJAAASwf//wRIAABHA///AEQAACmaxsWUJAAMvP1BRPSUCAytFSlNPNQMAAgMEBAQCAABWUDggTAAAANABAJ0BKggACAACQDglAE6AIH8OQEYwAP7WEWo0PVbb6W2KvvjB/MHlBQtcxYsec+xvtJrRTvD2r+BHEKujkBkkg9k2cKgkY8gYgAA=",
          blurWidth: 8,
          blurHeight: 8,
        },
        s = e(40044),
        c = {
          src: "/_next/static/media/MetamaskConnected.12fbf77e.webp",
          height: 598,
          width: 655,
          blurDataURL:
            "data:image/webp;base64,UklGRsYAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAAAAEHCAgHAQAABWyamXAGAAAHi///kAgAAAZ51dZ9BgADITA1LyUZAgRHYmRjbEMEAQMFBgYGBAEAVlA4IGYAAAAQAgCdASoIAAcAAkA4JbACdDKgAYS+g7+gAP7rhiFgokJDkkKbFiTX5dYPjqxSfmjmQ5Uvm8G7GRXCmx+mWFvDe5X7Lxd/37MP/5sttH8wH5Nv42/6Q//sb6j/JyZg3//67P+34AA=",
          blurWidth: 8,
          blurHeight: 7,
        },
        g = {
          src: "/_next/static/media/MetamaskDisconnected.63de160a.webp",
          height: 201,
          width: 219,
          blurDataURL:
            "data:image/webp;base64,UklGRrQAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAAAAEHCAgHAQAABXGbm3EFAAAIkP//kAgAAAZ+1tZ+BgADJTE2MScaAgVJYmRha0QEAAMFBQUFAwAAVlA4IFQAAAAQAgCdASoIAAcAAkA4JbACdAYoB2/RYnIAAP7ojltbsH0n9Jpmipvj+cePlmLJtq1/qRH7AsdyyToLNtT1HXkQst0JjPPzMsRo2mzRdxmsnc9zAAA=",
          blurWidth: 8,
          blurHeight: 7,
        },
        m = {
          src: "/_next/static/media/rabby.4779b530.png",
          height: 84,
          width: 96,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAARVBMVEWNjf+cqv6Jmf2Ckvt3ifmir/6NnP2Lm/2Nnv+HmP9+jvhrffmxv/6ir/+Sov9vgvRnfPSGmP+Km/2puP+Nnv+Zqf95jP13O7C2AAAAE3RSTlMBs8Od937hOl77lBXgTZJ5L9XraLMzUQAAAAlwSFlzAAAsSwAALEsBpT2WqQAAADlJREFUeJwdykkSwCAIAMFRUUGzQ/L/p6bKPjdAyZ2lj6aA3u1IvqMW9rpv5DCJVCuzyCfnqs+YF/wtiQGqnLsaiwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 7,
        },
        u = {
          src: "/_next/static/media/WalletConnectConnected.d88e50f9.webp",
          height: 626,
          width: 841,
          blurDataURL:
            "data:image/webp;base64,UklGRrIAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAAAAACEhICAAAAACHa3CQAAAAAPf7/QQAAAQcRbW4QBQEGY2piV1xUBgEICgkJCQcBAFZQOCBaAAAAMAIAnQEqCAAGAAJAOCWwAnQylUFxS4bHn+AA/vCHjgBoSxrSvfbGe6TfaeocSCpJ+Ygf6d8fz0HxOvrzVn2e8royv/kKr1JHfw2xb/g/X/git8EP+wMnQAAA",
          blurWidth: 8,
          blurHeight: 6,
        },
        h = {
          src: "/_next/static/media/WalletConnectDisconnected.da3cdef7.webp",
          height: 211,
          width: 282,
          blurDataURL:
            "data:image/webp;base64,UklGRp4AAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAAAAACEhICAAAAACTd3SQAAAAAQP7+QAAAAQcRbWwQBQEHZWphV1xVBgEHCQgICAcBAFZQOCBGAAAA8AEAnQEqCAAGAAJAOCWUAnQGK3ZJpFuQAP7ru+Vs5Dw2UxQlBKzg+YObozbwwdCbNuaPYs4VO2uqkBeLb52St0YdoZAAAA==",
          blurWidth: 8,
          blurHeight: 6,
        },
        b = e(6280),
        C = e(63114),
        w = e(41120),
        f = e(7297),
        Q = e(15437),
        x = e(36055);
      function p() {
        let n = (0, f.Z)([
          "\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 2rem;\n",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      function B() {
        let n = (0, f.Z)([
          "\n  width: 1.5rem;\n  height: 1.5rem;\n  cursor: pointer;\n",
        ]);
        return (
          (B = function () {
            return n;
          }),
          n
        );
      }
      function R() {
        let n = (0, f.Z)([
          "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 3.125rem 0;\n\n  h4 {\n    color: var(--neutral-white);\n    text-align: center;\n    font-size: 1.797rem;\n    font-family: ",
          ";\n    font-weight: 700;\n    font-weight: 700;\n    line-height: normal;\n  }\n\n  p {\n    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n    text-align: center;\n    font-size: 1.25rem;\n    font-family: ",
          ";\n    font-weight: 700;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 1.75rem;\n    color: var(--secondary);\n    margin: 1rem 0;\n    margin-bottom: -1rem;\n    margin-top: -1rem;\n  }\n",
        ]);
        return (
          (R = function () {
            return n;
          }),
          n
        );
      }
      function W() {
        let n = (0, f.Z)([
          "\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: -0.1rem;\n",
        ]);
        return (
          (W = function () {
            return n;
          }),
          n
        );
      }
      function k() {
        let n = (0, f.Z)([
          "\n          max-width: 13.6875rem;\n          max-height: 12.5rem;\n        ",
        ]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      function v() {
        let n = (0, f.Z)([
          "\n          max-width: 17.5rem;\n          max-height: 13.125rem;\n        ",
        ]);
        return (
          (v = function () {
            return n;
          }),
          n
        );
      }
      function U() {
        let n = (0, f.Z)([
          "\n          max-width: 12.75rem;\n          max-height: 13.0625rem;\n        ",
        ]);
        return (
          (U = function () {
            return n;
          }),
          n
        );
      }
      function y() {
        let n = (0, f.Z)([
          "\n  > img {\n    ",
          "\n  }\n  margin-top: -6rem;\n",
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      function E() {
        let n = (0, f.Z)(["\n  display: flex;\n  gap: 0.5rem;\n"]);
        return (
          (E = function () {
            return n;
          }),
          n
        );
      }
      let S = Q.ZP.div.withConfig({
          displayName: "ConnectWalletStatus.styles__Header",
          componentId: "sc-74b58796-0",
        })(p()),
        D = (0, Q.ZP)(r()).withConfig({
          displayName: "ConnectWalletStatus.styles__CloseButton",
          componentId: "sc-74b58796-1",
        })(B()),
        H = Q.ZP.div.withConfig({
          displayName: "ConnectWalletStatus.styles__Content",
          componentId: "sc-74b58796-2",
        })(R(), x.i, x.i),
        J = Q.ZP.div.withConfig({
          displayName: "ConnectWalletStatus.styles__ContentButtons",
          componentId: "sc-74b58796-3",
        })(W()),
        P = Q.ZP.div.withConfig({
          displayName: "ConnectWalletStatus.styles__ContainerIcon",
          componentId: "sc-74b58796-4",
        })(y(), (n) => {
          let { $selectedWallet: t } = n;
          return "MetaMask" === t
            ? (0, Q.iv)(k())
            : "WalletConnect" === t
            ? (0, Q.iv)(v())
            : "Coinbase" === t
            ? (0, Q.iv)(U())
            : void 0;
        }),
        j = Q.ZP.div.withConfig({
          displayName: "ConnectWalletStatus.styles__Row",
          componentId: "sc-74b58796-5",
        })(E()),
        M = {
          Header: S,
          CloseButton: D,
          Content: H,
          ContentButtons: J,
          ContainerIcon: P,
          Row: j,
        },
        Z = () => {
          let { handleClose: n } = (0, a.d)(),
            {
              lastWalletSelected: t,
              isActive: e,
              lastConnectorSelected: i,
              switchChain: f,
              lastChainSelected: Q,
            } = (0, o.O)(),
            x = () =>
              (0, A.jsx)(C.z.StandardOutlined, {
                width: "100%",
                "data-testid": "close-button-wallet-connected",
                onClick: n,
                $borderRadius: "0.5rem",
                $fontSize: "1.125rem",
                children: "Close",
              });
          return (0, A.jsxs)(b.x, {
            width: "27.625rem",
            height: e ? "auto" : i ? "21.5rem" : "15.5rem",
            padding: "1rem 0.8rem",
            borderRadius: "0.5rem",
            animationToOpen: !0,
            children: [
              (0, A.jsx)(M.Header, {
                children: (0, A.jsx)("img", {
                  className: "hover-animation",
                  src: s.Z.src,
                  alt: "close button",
                  width: 25,
                  height: 25,
                  "data-testid": "close-modal",
                  onClick: n,
                }),
              }),
              (0, A.jsxs)(M.Content, {
                children: [
                  (0, A.jsx)(M.ContainerIcon, {
                    $selectedWallet: t,
                    children: (() => {
                      switch (t) {
                        case "MetaMask":
                          if ((0, w.Q)())
                            return (0, A.jsx)("img", {
                              src: m.src,
                              alt: "Rabby Connected",
                              style: { marginBottom: "1rem" },
                            });
                          return e
                            ? (0, A.jsx)("img", {
                                src: c.src,
                                alt: "Metamask Connected",
                              })
                            : (0, A.jsx)("img", {
                                src: g.src,
                                alt: "Metamask Disconnected",
                              });
                        case "WalletConnect":
                          return e
                            ? (0, A.jsx)("img", {
                                src: u.src,
                                alt: "WalletConnect Connected",
                              })
                            : (0, A.jsx)("img", {
                                src: h.src,
                                alt: "WalletConnect Disconnected",
                              });
                        case "CoinbaseWallet":
                          return e
                            ? (0, A.jsx)("img", {
                                src: l.src,
                                alt: "Coinbase Connected",
                              })
                            : (0, A.jsx)("img", {
                                src: d.src,
                                alt: "Coinbase Disconnected",
                              });
                      }
                    })(),
                  }),
                  (0, A.jsx)("p", {
                    children: e
                      ? "Successfully connected wallet"
                      : "Unable to connect your wallet",
                  }),
                ],
              }),
              (0, A.jsxs)(M.ContentButtons, {
                children: [
                  !e &&
                    (0, A.jsxs)(M.Row, {
                      children: [
                        x(),
                        (0, A.jsx)(C.z.StandardDefault, {
                          $fontSize: "1.125rem",
                          width: "100%",
                          onClick: () => {
                            f({ desiredChainId: Q, connectorWallet: i }), n();
                          },
                          $borderRadius: "0.5rem",
                          children: "Try again",
                        }),
                      ],
                    }),
                  e && (0, A.jsx)(A.Fragment, { children: x() }),
                ],
              }),
            ],
          });
        };
    },
  },
]);
