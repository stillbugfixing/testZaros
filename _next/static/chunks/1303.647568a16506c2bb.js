"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1303],
  {
    8463: function (e, t, n) {
      n.d(t, {
        f: function () {
          return a;
        },
      });
      var i = n(11163),
        r = n(94133),
        s = n(93206);
      let o = () => {
          var e, t, n;
          let o = (0, i.useRouter)(),
            a =
              null === (e = o.asPath) || void 0 === e
                ? void 0
                : e.split("?")[1],
            l = new URLSearchParams(a),
            d =
              null !== (t = l.get("symbol")) && void 0 !== t ? t : r.Fk.BTCUSD,
            h = null !== (n = l.get("interval")) && void 0 !== n ? n : s.PS;
          return { symbolParam: d, intervalParam: h };
        },
        a = () => {
          let { symbolParam: e, intervalParam: t } = o(),
            n = (n, i) => {
              let r = new URLSearchParams();
              n ? r.append("symbol", n) : r.append("symbol", e),
                i ? r.append("interval", i) : r.append("interval", t),
                window.history.replaceState(
                  {},
                  "",
                  "".concat(window.location.pathname, "?").concat(r.toString())
                );
            };
          return n;
        };
    },
    88891: function (e, t, n) {
      n.d(t, {
        R: function () {
          return r;
        },
      });
      var i = n(85893);
      let r = () =>
        (0, i.jsxs)("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "time-frames",
          children: [
            (0, i.jsx)("path", {
              d: "M5 10L9.5 8.5L12 5L14 9L19 10L15.5 13L16.5 18.5L12 16L7.5 18L8 13.5L5 10Z",
              fill: "#F9C74F",
              className: "time-frames",
            }),
            (0, i.jsx)("path", {
              d: "M5 10L9.5 8.5L12 5L14 9L19 10L15.5 13L16.5 18.5L12 16L7.5 18L8 13.5L5 10Z",
              fill: "#44ADDA",
              fillOpacity: "0.2",
              className: "time-frames",
            }),
            (0, i.jsx)("path", {
              d: "M19.6938 9.64568C19.6257 9.43828 19.4974 9.25526 19.3248 9.11941C19.1521 8.98357 18.9429 8.9009 18.723 8.8817L14.5481 8.5261L12.9116 4.68119C12.8264 4.47944 12.6827 4.30711 12.4985 4.1859C12.3144 4.06468 12.0981 4 11.8768 4C11.6555 4 11.4392 4.06468 11.2551 4.1859C11.071 4.30711 10.9272 4.47944 10.842 4.68119L9.21044 8.5261L5.03057 8.88378C4.80986 8.9021 4.59954 8.9844 4.42599 9.12035C4.25243 9.25629 4.12336 9.43984 4.05497 9.64797C3.98657 9.8561 3.9819 10.0796 4.04153 10.2903C4.10116 10.501 4.22244 10.6897 4.39016 10.8326L7.56127 13.5704L6.61085 17.6362C6.56059 17.849 6.57493 18.0717 6.65208 18.2764C6.72922 18.4812 6.86575 18.6589 7.04458 18.7874C7.22341 18.9159 7.43663 18.9895 7.65756 18.999C7.87849 19.0084 8.09733 18.9533 8.28673 18.8405L11.8719 16.6875L15.4648 18.8405C15.6542 18.9533 15.873 19.0084 16.0939 18.999C16.3149 18.9895 16.5281 18.9159 16.7069 18.7874C16.8858 18.6589 17.0223 18.4812 17.0994 18.2764C17.1766 18.0717 17.1909 17.849 17.1407 17.6362L16.1909 13.5663L19.3613 10.8326C19.529 10.6892 19.6501 10.5 19.7092 10.2888C19.7684 10.0776 19.7631 9.85387 19.6938 9.64568ZM18.6239 9.99294L15.4535 12.7266C15.2992 12.8592 15.1844 13.0309 15.1215 13.2231C15.0586 13.4154 15.0499 13.6209 15.0964 13.8177L16.0489 17.8904L12.4589 15.7374C12.2837 15.632 12.0826 15.5762 11.8775 15.5762C11.6724 15.5762 11.4713 15.632 11.2962 15.7374L7.711 17.8904L8.6572 13.8205C8.7037 13.6237 8.69502 13.4182 8.6321 13.2259C8.56918 13.0337 8.45439 12.862 8.30009 12.7294L5.12828 9.99711C5.12803 9.99503 5.12803 9.99293 5.12828 9.99086L9.30675 9.63387C9.51075 9.6161 9.70597 9.54364 9.87135 9.42431C10.0367 9.30498 10.166 9.14329 10.2452 8.9567L11.8768 5.11666L13.5077 8.9567C13.5869 9.14329 13.7162 9.30498 13.8816 9.42431C14.0469 9.54364 14.2422 9.6161 14.4462 9.63387L18.6253 9.99086V9.99572L18.6239 9.99294Z",
              fill: "#F9C74F",
              className: "time-frames",
            }),
            (0, i.jsx)("path", {
              d: "M19.6938 9.64568C19.6257 9.43828 19.4974 9.25526 19.3248 9.11941C19.1521 8.98357 18.9429 8.9009 18.723 8.8817L14.5481 8.5261L12.9116 4.68119C12.8264 4.47944 12.6827 4.30711 12.4985 4.1859C12.3144 4.06468 12.0981 4 11.8768 4C11.6555 4 11.4392 4.06468 11.2551 4.1859C11.071 4.30711 10.9272 4.47944 10.842 4.68119L9.21044 8.5261L5.03057 8.88378C4.80986 8.9021 4.59954 8.9844 4.42599 9.12035C4.25243 9.25629 4.12336 9.43984 4.05497 9.64797C3.98657 9.8561 3.9819 10.0796 4.04153 10.2903C4.10116 10.501 4.22244 10.6897 4.39016 10.8326L7.56127 13.5704L6.61085 17.6362C6.56059 17.849 6.57493 18.0717 6.65208 18.2764C6.72922 18.4812 6.86575 18.6589 7.04458 18.7874C7.22341 18.9159 7.43663 18.9895 7.65756 18.999C7.87849 19.0084 8.09733 18.9533 8.28673 18.8405L11.8719 16.6875L15.4648 18.8405C15.6542 18.9533 15.873 19.0084 16.0939 18.999C16.3149 18.9895 16.5281 18.9159 16.7069 18.7874C16.8858 18.6589 17.0223 18.4812 17.0994 18.2764C17.1766 18.0717 17.1909 17.849 17.1407 17.6362L16.1909 13.5663L19.3613 10.8326C19.529 10.6892 19.6501 10.5 19.7092 10.2888C19.7684 10.0776 19.7631 9.85387 19.6938 9.64568ZM18.6239 9.99294L15.4535 12.7266C15.2992 12.8592 15.1844 13.0309 15.1215 13.2231C15.0586 13.4154 15.0499 13.6209 15.0964 13.8177L16.0489 17.8904L12.4589 15.7374C12.2837 15.632 12.0826 15.5762 11.8775 15.5762C11.6724 15.5762 11.4713 15.632 11.2962 15.7374L7.711 17.8904L8.6572 13.8205C8.7037 13.6237 8.69502 13.4182 8.6321 13.2259C8.56918 13.0337 8.45439 12.862 8.30009 12.7294L5.12828 9.99711C5.12803 9.99503 5.12803 9.99293 5.12828 9.99086L9.30675 9.63387C9.51075 9.6161 9.70597 9.54364 9.87135 9.42431C10.0367 9.30498 10.166 9.14329 10.2452 8.9567L11.8768 5.11666L13.5077 8.9567C13.5869 9.14329 13.7162 9.30498 13.8816 9.42431C14.0469 9.54364 14.2422 9.6161 14.4462 9.63387L18.6253 9.99086V9.99572L18.6239 9.99294Z",
              fill: "#44ADDA",
              fillOpacity: "0.2",
              className: "time-frames",
            }),
            (0, i.jsx)("path", {
              d: "M19.6938 9.64568C19.6257 9.43828 19.4974 9.25526 19.3248 9.11941C19.1521 8.98357 18.9429 8.9009 18.723 8.8817L14.5481 8.5261L12.9116 4.68119C12.8264 4.47944 12.6827 4.30711 12.4985 4.1859C12.3144 4.06468 12.0981 4 11.8768 4C11.6555 4 11.4392 4.06468 11.2551 4.1859C11.071 4.30711 10.9272 4.47944 10.842 4.68119L9.21044 8.5261L5.03057 8.88378C4.80986 8.9021 4.59954 8.9844 4.42599 9.12035C4.25243 9.25629 4.12336 9.43984 4.05497 9.64797C3.98657 9.8561 3.9819 10.0796 4.04153 10.2903C4.10116 10.501 4.22244 10.6897 4.39016 10.8326L7.56127 13.5704L6.61085 17.6362C6.56059 17.849 6.57493 18.0717 6.65208 18.2764C6.72922 18.4812 6.86575 18.6589 7.04458 18.7874C7.22341 18.9159 7.43663 18.9895 7.65756 18.999C7.87849 19.0084 8.09733 18.9533 8.28673 18.8405L11.8719 16.6875L15.4648 18.8405C15.6542 18.9533 15.873 19.0084 16.0939 18.999C16.3149 18.9895 16.5281 18.9159 16.7069 18.7874C16.8858 18.6589 17.0223 18.4812 17.0994 18.2764C17.1766 18.0717 17.1909 17.849 17.1407 17.6362L16.1909 13.5663L19.3613 10.8326C19.529 10.6892 19.6501 10.5 19.7092 10.2888C19.7684 10.0776 19.7631 9.85387 19.6938 9.64568ZM18.6239 9.99294L15.4535 12.7266C15.2992 12.8592 15.1844 13.0309 15.1215 13.2231C15.0586 13.4154 15.0499 13.6209 15.0964 13.8177L16.0489 17.8904L12.4589 15.7374C12.2837 15.632 12.0826 15.5762 11.8775 15.5762C11.6724 15.5762 11.4713 15.632 11.2962 15.7374L7.711 17.8904L8.6572 13.8205C8.7037 13.6237 8.69502 13.4182 8.6321 13.2259C8.56918 13.0337 8.45439 12.862 8.30009 12.7294L5.12828 9.99711C5.12803 9.99503 5.12803 9.99293 5.12828 9.99086L9.30675 9.63387C9.51075 9.6161 9.70597 9.54364 9.87135 9.42431C10.0367 9.30498 10.166 9.14329 10.2452 8.9567L11.8768 5.11666L13.5077 8.9567C13.5869 9.14329 13.7162 9.30498 13.8816 9.42431C14.0469 9.54364 14.2422 9.6161 14.4462 9.63387L18.6253 9.99086V9.99572L18.6239 9.99294Z",
              stroke: "#F9C74F",
              className: "time-frames",
            }),
            (0, i.jsx)("path", {
              d: "M19.6938 9.64568C19.6257 9.43828 19.4974 9.25526 19.3248 9.11941C19.1521 8.98357 18.9429 8.9009 18.723 8.8817L14.5481 8.5261L12.9116 4.68119C12.8264 4.47944 12.6827 4.30711 12.4985 4.1859C12.3144 4.06468 12.0981 4 11.8768 4C11.6555 4 11.4392 4.06468 11.2551 4.1859C11.071 4.30711 10.9272 4.47944 10.842 4.68119L9.21044 8.5261L5.03057 8.88378C4.80986 8.9021 4.59954 8.9844 4.42599 9.12035C4.25243 9.25629 4.12336 9.43984 4.05497 9.64797C3.98657 9.8561 3.9819 10.0796 4.04153 10.2903C4.10116 10.501 4.22244 10.6897 4.39016 10.8326L7.56127 13.5704L6.61085 17.6362C6.56059 17.849 6.57493 18.0717 6.65208 18.2764C6.72922 18.4812 6.86575 18.6589 7.04458 18.7874C7.22341 18.9159 7.43663 18.9895 7.65756 18.999C7.87849 19.0084 8.09733 18.9533 8.28673 18.8405L11.8719 16.6875L15.4648 18.8405C15.6542 18.9533 15.873 19.0084 16.0939 18.999C16.3149 18.9895 16.5281 18.9159 16.7069 18.7874C16.8858 18.6589 17.0223 18.4812 17.0994 18.2764C17.1766 18.0717 17.1909 17.849 17.1407 17.6362L16.1909 13.5663L19.3613 10.8326C19.529 10.6892 19.6501 10.5 19.7092 10.2888C19.7684 10.0776 19.7631 9.85387 19.6938 9.64568ZM18.6239 9.99294L15.4535 12.7266C15.2992 12.8592 15.1844 13.0309 15.1215 13.2231C15.0586 13.4154 15.0499 13.6209 15.0964 13.8177L16.0489 17.8904L12.4589 15.7374C12.2837 15.632 12.0826 15.5762 11.8775 15.5762C11.6724 15.5762 11.4713 15.632 11.2962 15.7374L7.711 17.8904L8.6572 13.8205C8.7037 13.6237 8.69502 13.4182 8.6321 13.2259C8.56918 13.0337 8.45439 12.862 8.30009 12.7294L5.12828 9.99711C5.12803 9.99503 5.12803 9.99293 5.12828 9.99086L9.30675 9.63387C9.51075 9.6161 9.70597 9.54364 9.87135 9.42431C10.0367 9.30498 10.166 9.14329 10.2452 8.9567L11.8768 5.11666L13.5077 8.9567C13.5869 9.14329 13.7162 9.30498 13.8816 9.42431C14.0469 9.54364 14.2422 9.6161 14.4462 9.63387L18.6253 9.99086V9.99572L18.6239 9.99294Z",
              stroke: "#44ADDA",
              strokeOpacity: "0.2",
              className: "time-frames",
            }),
          ],
        });
    },
    44537: function (e, t, n) {
      n.d(t, {
        r: function () {
          return r;
        },
      });
      var i = n(85893);
      let r = () =>
        (0, i.jsxs)("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "time-frames",
          children: [
            (0, i.jsx)("path", {
              d: "M19.6938 9.64568C19.6257 9.43828 19.4974 9.25526 19.3248 9.11941C19.1521 8.98357 18.9429 8.9009 18.723 8.8817L14.5481 8.5261L12.9116 4.68119C12.8264 4.47944 12.6827 4.30711 12.4985 4.1859C12.3144 4.06468 12.0981 4 11.8768 4C11.6555 4 11.4392 4.06468 11.2551 4.1859C11.071 4.30711 10.9272 4.47944 10.842 4.68119L9.21044 8.5261L5.03057 8.88378C4.80986 8.9021 4.59954 8.9844 4.42599 9.12035C4.25243 9.25629 4.12336 9.43984 4.05497 9.64797C3.98657 9.8561 3.9819 10.0796 4.04153 10.2903C4.10116 10.501 4.22244 10.6897 4.39016 10.8326L7.56127 13.5704L6.61085 17.6362C6.56059 17.849 6.57493 18.0717 6.65208 18.2764C6.72922 18.4812 6.86575 18.6589 7.04458 18.7874C7.22341 18.9159 7.43663 18.9895 7.65756 18.999C7.87849 19.0084 8.09733 18.9533 8.28673 18.8405L11.8719 16.6875L15.4648 18.8405C15.6542 18.9533 15.873 19.0084 16.0939 18.999C16.3149 18.9895 16.5281 18.9159 16.7069 18.7874C16.8858 18.6589 17.0223 18.4812 17.0994 18.2764C17.1766 18.0717 17.1909 17.849 17.1407 17.6362L16.1909 13.5663L19.3613 10.8326C19.529 10.6892 19.6501 10.5 19.7092 10.2888C19.7684 10.0776 19.7631 9.85387 19.6938 9.64568ZM18.6239 9.99294L15.4535 12.7266C15.2992 12.8592 15.1844 13.0309 15.1215 13.2231C15.0586 13.4154 15.0499 13.6209 15.0964 13.8177L16.0489 17.8904L12.4589 15.7374C12.2837 15.632 12.0826 15.5762 11.8775 15.5762C11.6724 15.5762 11.4713 15.632 11.2962 15.7374L7.711 17.8904L8.6572 13.8205C8.7037 13.6237 8.69502 13.4182 8.6321 13.2259C8.56918 13.0337 8.45439 12.862 8.30009 12.7294L5.12828 9.99711C5.12803 9.99503 5.12803 9.99293 5.12828 9.99086L9.30675 9.63387C9.51075 9.6161 9.70597 9.54364 9.87135 9.42431C10.0367 9.30498 10.166 9.14329 10.2452 8.9567L11.8768 5.11666L13.5077 8.9567C13.5869 9.14329 13.7162 9.30498 13.8816 9.42431C14.0469 9.54364 14.2422 9.6161 14.4462 9.63387L18.6253 9.99086V9.99572L18.6239 9.99294Z",
              fill: "#E7E7E7",
              className: "time-frames",
            }),
            (0, i.jsx)("path", {
              d: "M19.6938 9.64568C19.6257 9.43828 19.4974 9.25526 19.3248 9.11941C19.1521 8.98357 18.9429 8.9009 18.723 8.8817L14.5481 8.5261L12.9116 4.68119C12.8264 4.47944 12.6827 4.30711 12.4985 4.1859C12.3144 4.06468 12.0981 4 11.8768 4C11.6555 4 11.4392 4.06468 11.2551 4.1859C11.071 4.30711 10.9272 4.47944 10.842 4.68119L9.21044 8.5261L5.03057 8.88378C4.80986 8.9021 4.59954 8.9844 4.42599 9.12035C4.25243 9.25629 4.12336 9.43984 4.05497 9.64797C3.98657 9.8561 3.9819 10.0796 4.04153 10.2903C4.10116 10.501 4.22244 10.6897 4.39016 10.8326L7.56127 13.5704L6.61085 17.6362C6.56059 17.849 6.57493 18.0717 6.65208 18.2764C6.72922 18.4812 6.86575 18.6589 7.04458 18.7874C7.22341 18.9159 7.43663 18.9895 7.65756 18.999C7.87849 19.0084 8.09733 18.9533 8.28673 18.8405L11.8719 16.6875L15.4648 18.8405C15.6542 18.9533 15.873 19.0084 16.0939 18.999C16.3149 18.9895 16.5281 18.9159 16.7069 18.7874C16.8858 18.6589 17.0223 18.4812 17.0994 18.2764C17.1766 18.0717 17.1909 17.849 17.1407 17.6362L16.1909 13.5663L19.3613 10.8326C19.529 10.6892 19.6501 10.5 19.7092 10.2888C19.7684 10.0776 19.7631 9.85387 19.6938 9.64568ZM18.6239 9.99294L15.4535 12.7266C15.2992 12.8592 15.1844 13.0309 15.1215 13.2231C15.0586 13.4154 15.0499 13.6209 15.0964 13.8177L16.0489 17.8904L12.4589 15.7374C12.2837 15.632 12.0826 15.5762 11.8775 15.5762C11.6724 15.5762 11.4713 15.632 11.2962 15.7374L7.711 17.8904L8.6572 13.8205C8.7037 13.6237 8.69502 13.4182 8.6321 13.2259C8.56918 13.0337 8.45439 12.862 8.30009 12.7294L5.12828 9.99711C5.12803 9.99503 5.12803 9.99293 5.12828 9.99086L9.30675 9.63387C9.51075 9.6161 9.70597 9.54364 9.87135 9.42431C10.0367 9.30498 10.166 9.14329 10.2452 8.9567L11.8768 5.11666L13.5077 8.9567C13.5869 9.14329 13.7162 9.30498 13.8816 9.42431C14.0469 9.54364 14.2422 9.6161 14.4462 9.63387L18.6253 9.99086V9.99572L18.6239 9.99294Z",
              stroke: "#E7E7E7",
              className: "time-frames",
            }),
            (0, i.jsx)("path", {
              d: "M19.6938 9.64568C19.6257 9.43828 19.4974 9.25526 19.3248 9.11941C19.1521 8.98357 18.9429 8.9009 18.723 8.8817L14.5481 8.5261L12.9116 4.68119C12.8264 4.47944 12.6827 4.30711 12.4985 4.1859C12.3144 4.06468 12.0981 4 11.8768 4C11.6555 4 11.4392 4.06468 11.2551 4.1859C11.071 4.30711 10.9272 4.47944 10.842 4.68119L9.21044 8.5261L5.03057 8.88378C4.80986 8.9021 4.59954 8.9844 4.42599 9.12035C4.25243 9.25629 4.12336 9.43984 4.05497 9.64797C3.98657 9.8561 3.9819 10.0796 4.04153 10.2903C4.10116 10.501 4.22244 10.6897 4.39016 10.8326L7.56127 13.5704L6.61085 17.6362C6.56059 17.849 6.57493 18.0717 6.65208 18.2764C6.72922 18.4812 6.86575 18.6589 7.04458 18.7874C7.22341 18.9159 7.43663 18.9895 7.65756 18.999C7.87849 19.0084 8.09733 18.9533 8.28673 18.8405L11.8719 16.6875L15.4648 18.8405C15.6542 18.9533 15.873 19.0084 16.0939 18.999C16.3149 18.9895 16.5281 18.9159 16.7069 18.7874C16.8858 18.6589 17.0223 18.4812 17.0994 18.2764C17.1766 18.0717 17.1909 17.849 17.1407 17.6362L16.1909 13.5663L19.3613 10.8326C19.529 10.6892 19.6501 10.5 19.7092 10.2888C19.7684 10.0776 19.7631 9.85387 19.6938 9.64568ZM18.6239 9.99294L15.4535 12.7266C15.2992 12.8592 15.1844 13.0309 15.1215 13.2231C15.0586 13.4154 15.0499 13.6209 15.0964 13.8177L16.0489 17.8904L12.4589 15.7374C12.2837 15.632 12.0826 15.5762 11.8775 15.5762C11.6724 15.5762 11.4713 15.632 11.2962 15.7374L7.711 17.8904L8.6572 13.8205C8.7037 13.6237 8.69502 13.4182 8.6321 13.2259C8.56918 13.0337 8.45439 12.862 8.30009 12.7294L5.12828 9.99711C5.12803 9.99503 5.12803 9.99293 5.12828 9.99086L9.30675 9.63387C9.51075 9.6161 9.70597 9.54364 9.87135 9.42431C10.0367 9.30498 10.166 9.14329 10.2452 8.9567L11.8768 5.11666L13.5077 8.9567C13.5869 9.14329 13.7162 9.30498 13.8816 9.42431C14.0469 9.54364 14.2422 9.6161 14.4462 9.63387L18.6253 9.99086V9.99572L18.6239 9.99294Z",
              stroke: "#E7E7E7",
              strokeOpacity: "0.2",
              className: "time-frames",
            }),
          ],
        });
    },
    21303: function (e, t, n) {
      n.r(t),
        n.d(t, {
          TradingViewChart: function () {
            return eq;
          },
        });
      var i = n(85893),
        r = n(25675),
        s = n.n(r),
        o = n(67294),
        a = n(4480),
        l = n(32975),
        d = n(40797),
        h = n(56993);
      let c = (0, a.cn)({
          key: "trading-view-loading-atom",
          default: !0,
          dangerouslyAllowMutability: !0,
        }),
        u = (0, a.cn)({
          key: "trading-view-widget-atom",
          default: {},
          dangerouslyAllowMutability: !0,
        }),
        m = () => {
          let [e, t] = (0, o.useState)(!1);
          return (
            (0, o.useEffect)(() => {
              let e = document.createElement("script");
              return (
                (e.src = "/datafeeds/udf/dist/bundle.js"),
                (e.async = !0),
                (e.onload = () => {
                  t(!0);
                }),
                document.body.appendChild(e),
                () => {
                  document.body.removeChild(e);
                }
              );
            }, []),
            e
          );
        };
      var v = n(94133);
      let p = (e) => {
        let t = e.result,
          n = JSON.parse(t),
          i = {
            time: 1e3 * n.observationsTimestamp,
            open: n.benchmarkPrice,
            high: n.benchmarkPrice,
            low: n.benchmarkPrice,
            close: n.benchmarkPrice,
            volume: void 0,
          };
        return { bar: i, feedID: n.feedID };
      };
      var C = n(64173),
        g = n(74653),
        _ = n(74559);
      let w = ["5", "15", "60", "240", "1D", "2D", "3D"],
        f = (e, t) => {
          let n = {
            symbol: e.split(":")[1],
            ticker: e,
            name: e,
            type: "crypto",
            currency: "USD",
            session: "24x7",
            timezone: "Etc/UTC",
            minmov: 1,
            minmov2: 0,
            pricescale: (0, C.jb)(e),
            supported_resolutions: w,
            has_intraday: !0,
            has_daily: !0,
            has_weekly_and_monthly: !0,
            data_status: "streaming",
          };
          setTimeout(function () {
            t(n);
          }, 0);
        },
        y = {
          5: 300,
          15: 900,
          60: 3600,
          240: 14400,
          "1D": 86400,
          "2D": 172800,
          "3D": 259200,
          "1W": 604800,
          "3W": 1814400,
          "1M": 2592e3,
          "6M": 15552e3,
        },
        L = (e) => y[e] || 0,
        x = async (e, t) => {
          let n = (function (e) {
              let t = new Date();
              switch ((t.setHours(0, 0, 0, 0), e)) {
                case "1D":
                  break;
                case "2D":
                  t.setDate(t.getDate() - 1);
                  break;
                case "3D":
                  t.setDate(t.getDate() - 2);
                  break;
                case "1W":
                  t.setDate(t.getDate() - t.getDay());
                  break;
                case "3W":
                  t.setDate(t.getDate() - t.getDay() - 14);
                  break;
                case "1M":
                  t.setDate(1);
                  break;
                case "6M":
                  t.setMonth(t.getMonth() - 5, 1);
                  break;
                default:
                  return console.error("Unsupported resolution: " + e), null;
              }
              return Math.floor(t.getTime() / 1e3);
            })(t),
            i = Math.ceil(new Date().getTime() / 1e3),
            r = new URLSearchParams(
              (0, _.n)({ symbol: e, resolution: t, from: n, to: i })
            ).toString(),
            s = "".concat(g.JG, "/history?").concat(r);
          try {
            let e = await fetch(s),
              t = await e.json();
            return t;
          } catch (e) {
            return console.error(e), null;
          }
        },
        b = ["1D", "2D", "3D", "W", "3W", "M", "6M"],
        j = (e, t) => e - (e % t),
        S = (e, t, n) => {
          if (!e) return null;
          let i = j(Date.now() / 1e3, L(n)),
            r = e.open,
            s = Math.max(e.high, t),
            o = Math.min(e.low, t);
          (null == e ? void 0 : e.time) &&
            Math.floor(e.time / 1e3) <= i &&
            ((r = e.close), (s = t), (o = t));
          let a = { time: e.time, open: r, high: s, low: o, close: t };
          return a;
        },
        I = [],
        k = "".concat(g.Ds, "/all"),
        P = null,
        A = () => {
          let e =
            P &&
            (P.readyState === WebSocket.CONNECTING ||
              (P && P.readyState === WebSocket.CONNECTING));
          if (!e)
            return (
              ((P = new WebSocket(k)).onerror = () => {
                null == P || P.close();
              }),
              P
            );
        },
        H = () => A(),
        Z = () => {
          let { setCurrentBar: e } = (0, v.sN)();
          (0, o.useEffect)(
            () => (
              A(),
              () => {
                P &&
                  (null == P ? void 0 : P.readyState) !==
                    WebSocket.CONNECTING &&
                  (null == P || P.close());
              }
            ),
            []
          );
          let t = async (e, i, r, s) => {
              let o = (0, C.oG)(e.full_name),
                a = async () => {
                  let t;
                  let n = b.includes(i);
                  if (n) {
                    var r, s, o;
                    let n = await x(
                      "".concat(
                        null === (r = e.base_name) || void 0 === r
                          ? void 0
                          : null === (s = r[0]) || void 0 === s
                          ? void 0
                          : s.split(" / ")[0]
                      ),
                      i
                    );
                    t = (function (e, t) {
                      if (!e) return null;
                      let n = e.t.length - 1,
                        i = {
                          time: 1e3 * e.t[n],
                          open: e.o[n],
                          high: Math.max(e.h[n], t),
                          low: Math.min(e.l[n], t),
                          close: t,
                        };
                      return i;
                    })(
                      n,
                      null == n
                        ? void 0
                        : null === (o = n.c) || void 0 === o
                        ? void 0
                        : o[n.c.length - 1]
                    );
                  }
                  return t;
                },
                l = {
                  listener: r,
                  resolution: i,
                  symbolInfo: e,
                  channelString: "".concat(o, "-").concat(i),
                  uid: s,
                  lastBar: await a(),
                };
              I.push(l);
              let d = (e) => {
                (e.onmessage = (e) => {
                  n(e.data, i);
                }),
                  (e.onclose = (t) => {
                    if (
                      !t.wasClean &&
                      (null == e ? void 0 : e.readyState) === WebSocket.CLOSED
                    ) {
                      let e = H();
                      e && d(e);
                    }
                  });
              };
              return P && d(P), t;
            },
            n = (0, o.useCallback)(
              async (t, n) => {
                let i = new FileReader();
                (i.onload = async () => {
                  let { bar: t, feedID: r } = p(i),
                    s = I.find(
                      (e) => e.channelString === "".concat(r, "-").concat(n)
                    ),
                    o = (0, C._O)(r),
                    a = null == s ? void 0 : s.lastBar,
                    l = S(a, t.close, n),
                    d = null != l ? l : t;
                  if ((o && e(o, d), s)) {
                    let e = { ...d, time: t.time };
                    (s.lastBar = e), s.listener(e);
                  }
                }),
                  i.readAsText(t);
              },
              [e, P]
            ),
            i = (e) => {
              let t = I.findIndex((t) => t.uid === e);
              -1 !== t && I.splice(t, 1);
            };
          return { subscribeBars: t, unsubscribeBars: i };
        },
        N = (e, t, n) => {
          let i = "dark" === t ? "#1C2022" : "#0B252F";
          e.onChartReady(() => {
            (null == e ? void 0 : e.setCSSCustomProperty) &&
              (null == e ||
                e.setCSSCustomProperty("--tv-color-pane-background", i),
              null == e ||
                e.setCSSCustomProperty(
                  "--tv-color-toolbar-divider-background",
                  "transparent"
                ),
              null == e ||
                e.setCSSCustomProperty(
                  "--tv-color-toolbar-button-text",
                  "#fff"
                ),
              null == e ||
                e.setCSSCustomProperty("--tv-color-platform-background", i)),
              n();
          });
        },
        M = (e, t, n) => {
          e.onChartReady(() => {
            let i = e.chart();
            i.onVisibleRangeChanged().subscribe(null, () => {
              t(i.resolution()), n();
            });
          });
        };
      var F = n(93206);
      function D(e, t) {
        let n = { ...e };
        for (let i in t)
          "object" != typeof e[i] || null === e[i] || Array.isArray(e[i])
            ? void 0 !== t[i] && (n[i] = t[i])
            : (n[i] = D(e[i], t[i]));
        return n;
      }
      let W = {
          width: 800,
          height: 500,
          interval: "1D",
          timezone: "Etc/UTC",
          container: "",
          library_path: "",
          locale: "en",
          widgetbar: {
            details: !1,
            watchlist: !1,
            news: !1,
            datawindow: !1,
            watchlist_settings: { default_symbols: [] },
          },
          overrides: { "mainSeriesProperties.showCountdown": !1 },
          studies_overrides: {},
          trading_customization: { position: {}, order: {} },
          brokerConfig: { configFlags: {} },
          fullscreen: !1,
          autosize: !1,
          disabled_features: [],
          enabled_features: [],
          debug: !1,
          logo: {},
          time_frames: [
            { text: "5y", resolution: "1W" },
            { text: "1y", resolution: "1W" },
            { text: "6m", resolution: "120" },
            { text: "3m", resolution: "60" },
            { text: "1m", resolution: "30" },
            { text: "5d", resolution: "5" },
            { text: "1d", resolution: "1" },
          ],
          client_id: "0",
          user_id: "0",
          charts_storage_api_version: "1.0",
          favorites: {
            intervals: [],
            chartTypes: [],
            indicators: [],
            drawingTools: [],
          },
        },
        z = JSON.parse(
          '[{"iso":"ar","dir":"rtl","language":"ar"},{"iso":"pt","dir":"ltr","language":"pt"},{"iso":"ca","dir":"ltr","language":"ca_ES"},{"iso":"cs","dir":"ltr","language":"cs"},{"iso":"de","dir":"ltr","language":"de"},{"iso":"en","dir":"ltr","language":"en"},{"iso":"es","dir":"ltr","language":"es"},{"iso":"fa","dir":"rtl","language":"fa"},{"iso":"fr","dir":"ltr","language":"fr"},{"iso":"he","dir":"rtl","language":"he_IL"},{"iso":"hu","dir":"ltr","language":"hu_HU"},{"iso":"id","dir":"ltr","language":"id_ID"},{"iso":"en","dir":"ltr","language":"en"},{"iso":"it","dir":"ltr","language":"it"},{"iso":"ja","dir":"ltr","language":"ja"},{"iso":"ko","dir":"ltr","language":"ko"},{"iso":"ms","dir":"ltr","language":"ms_MY"},{"iso":"pl","dir":"ltr","language":"pl"},{"iso":"ru","dir":"ltr","language":"ru"},{"iso":"sv","dir":"ltr","language":"sv"},{"iso":"th","dir":"ltr","language":"th"},{"iso":"tr","dir":"ltr","language":"tr"},{"iso":"vi","dir":"ltr","language":"vi"},{"iso":"zh-Hans","dir":"ltr","language":"zh"},{"iso":"zh-Hant","dir":"ltr","language":"zh_TW"},{"iso":"el","dir":"ltr","language":"el"},{"iso":"nl","dir":"ltr","language":"nl_NL"},{"iso":"ro","dir":"ltr","language":"ro"}]'
        ),
        R = !1,
        V = class {
          setDebugMode(e) {
            this._innerAPI().setDebugMode(e);
          }
          onChartReady(e) {
            this._ready ? e.call(this) : this._readyHandlers.push(e);
          }
          headerReady() {
            return this._innerWindowLoaded.then(() =>
              this._innerWindow().headerReady()
            );
          }
          onGrayedObjectClicked(e) {
            this._doWhenInnerApiLoaded((t) => {
              t.onGrayedObjectClicked(e);
            });
          }
          onShortcut(e, t) {
            this._doWhenInnerWindowLoaded((n) => {
              n.createShortcutAction(e, t);
            });
          }
          subscribe(e, t) {
            this._doWhenInnerApiLoaded((n) => {
              n.subscribe(e, t);
            });
          }
          unsubscribe(e, t) {
            this._doWhenInnerApiLoaded((n) => {
              n.unsubscribe(e, t);
            });
          }
          chart(e) {
            return this._innerAPI().chart(e);
          }
          getLanguage() {
            return this._options.locale;
          }
          setSymbol(e, t, n) {
            this._innerAPI().changeSymbol(e, t, n);
          }
          remove() {
            window.removeEventListener("resize", this._onWindowResize),
              this._readyHandlers.splice(0, this._readyHandlers.length),
              delete window[this._id],
              this._iFrame.parentNode &&
                this._iFrame.parentNode.removeChild(this._iFrame);
          }
          closePopupsAndDialogs() {
            this._doWhenInnerApiLoaded((e) => {
              e.closePopupsAndDialogs();
            });
          }
          selectLineTool(e, t) {
            this._innerAPI().selectLineTool(e, t);
          }
          selectedLineTool() {
            return this._innerAPI().selectedLineTool();
          }
          save(e) {
            this._innerAPI().saveChart(e);
          }
          load(e, t) {
            this._innerAPI().loadChart({ json: e, extendedData: t });
          }
          getSavedCharts(e) {
            this._innerAPI().getSavedCharts(e);
          }
          loadChartFromServer(e) {
            this._innerAPI().loadChartFromServer(e);
          }
          saveChartToServer(e, t, n) {
            this._innerAPI().saveChartToServer(e, t, n);
          }
          removeChartFromServer(e, t) {
            this._innerAPI().removeChartFromServer(e, t);
          }
          onContextMenu(e) {
            this._doWhenInnerApiLoaded((t) => {
              t.onContextMenu(e);
            });
          }
          createButton(e) {
            return this._innerWindow().createButton(e);
          }
          createDropdown(e) {
            return this._innerWindow().createDropdown(e);
          }
          showNoticeDialog(e) {
            this._doWhenInnerApiLoaded((t) => {
              t.showNoticeDialog(e);
            });
          }
          showConfirmDialog(e) {
            this._doWhenInnerApiLoaded((t) => {
              t.showConfirmDialog(e);
            });
          }
          showLoadChartDialog() {
            this._innerAPI().showLoadChartDialog();
          }
          showSaveAsChartDialog() {
            this._innerAPI().showSaveAsChartDialog();
          }
          symbolInterval() {
            return this._innerAPI().getSymbolInterval();
          }
          mainSeriesPriceFormatter() {
            return this._innerAPI().mainSeriesPriceFormatter();
          }
          getIntervals() {
            return this._innerAPI().getIntervals();
          }
          getStudiesList() {
            return this._innerAPI().getStudiesList();
          }
          getStudyInputs(e) {
            return this._innerAPI().getStudyInputs(e);
          }
          getStudyStyles(e) {
            return this._innerAPI().getStudyStyles(e);
          }
          addCustomCSSFile(e) {
            this._innerWindow().addCustomCSSFile(e);
          }
          applyOverrides(e) {
            (this._options = D(this._options, { overrides: e })),
              this._doWhenInnerWindowLoaded((t) => {
                t.applyOverrides(e);
              });
          }
          applyStudiesOverrides(e) {
            this._doWhenInnerWindowLoaded((t) => {
              t.applyStudiesOverrides(e);
            });
          }
          watchList() {
            return this._innerAPI().watchlist();
          }
          news() {
            return this._innerAPI().news();
          }
          widgetbar() {
            return this._innerAPI().widgetbar();
          }
          activeChart() {
            var e;
            return null === (e = this._innerAPI()) || void 0 === e
              ? void 0
              : e.activeChart();
          }
          activeChartIndex() {
            return this._innerAPI().activeChartIndex();
          }
          setActiveChart(e) {
            return this._innerAPI().setActiveChart(e);
          }
          chartsCount() {
            return this._innerAPI().chartsCount();
          }
          layout() {
            return this._innerAPI().layout();
          }
          setLayout(e) {
            this._innerAPI().setLayout(e);
          }
          layoutName() {
            return this._innerAPI().layoutName();
          }
          changeTheme(e, t) {
            return this._innerWindow().changeTheme(e, t);
          }
          getTheme() {
            return this._innerWindow().getTheme();
          }
          takeScreenshot() {
            this._doWhenInnerApiLoaded((e) => {
              e.takeScreenshot();
            });
          }
          lockAllDrawingTools() {
            return this._innerAPI().lockAllDrawingTools();
          }
          hideAllDrawingTools() {
            return this._innerAPI().hideAllDrawingTools();
          }
          drawOnAllCharts(e) {
            this._innerAPI().drawOnAllCharts(e);
          }
          magnetEnabled() {
            return this._innerAPI().magnetEnabled();
          }
          magnetMode() {
            return this._innerAPI().magnetMode();
          }
          undoRedoState() {
            var e;
            return null === (e = this._innerAPI()) || void 0 === e
              ? void 0
              : e.undoRedoState();
          }
          setIntervalLinkingEnabled(e) {
            this._innerAPI().setIntervalLinkingEnabled(e);
          }
          setTimeFrame(e) {
            this._innerAPI().setTimeFrame(e);
          }
          symbolSync() {
            return this._innerAPI().symbolSync();
          }
          intervalSync() {
            return this._innerAPI().intervalSync();
          }
          crosshairSync() {
            return this._innerAPI().crosshairSync();
          }
          timeSync() {
            return this._innerAPI().timeSync();
          }
          dateRangeSync() {
            return this._innerAPI().dateRangeSync();
          }
          setFeatureEnabled(e, t) {
            this._innerAPI().setFeatureEnabled(e, t);
          }
          getAllFeatures() {
            return this._innerWindow().getAllFeatures();
          }
          clearUndoHistory() {
            return this._innerAPI().clearUndoHistory();
          }
          undo() {
            return this._innerAPI().undo();
          }
          redo() {
            return this._innerAPI().redo();
          }
          startFullscreen() {
            this._innerAPI().startFullscreen();
          }
          exitFullscreen() {
            this._innerAPI().exitFullscreen();
          }
          takeClientScreenshot(e) {
            return this._innerAPI().takeClientScreenshot(e);
          }
          navigationButtonsVisibility() {
            return this._innerWindow().getNavigationButtonsVisibility();
          }
          paneButtonsVisibility() {
            return this._innerWindow().getPaneButtonsVisibility();
          }
          dateFormat() {
            return this._innerWindow().getDateFormat();
          }
          timeHoursFormat() {
            return this._innerWindow().getTimeHoursFormat();
          }
          currencyAndUnitVisibility() {
            return this._innerWindow().getCurrencyAndUnitVisibility();
          }
          supportedChartTypes() {
            return this._innerAPI().supportedChartTypes();
          }
          watermark() {
            return this._innerAPI().watermark();
          }
          customSymbolStatus() {
            return this._innerWindow().customSymbolStatus();
          }
          setCSSCustomProperty(e, t) {
            if (!1 === e.startsWith("--"))
              throw Error(
                "customPropertyName should begin with a double hyphen"
              );
            this._innerWindow().document.body.style.setProperty(e, t);
          }
          getCSSCustomPropertyValue(e) {
            if (!1 === e.startsWith("--"))
              throw Error(
                "customPropertyName should begin with a double hyphen"
              );
            let t = this._innerWindow().document.body,
              n = t.style.getPropertyValue(e);
            return n || getComputedStyle(t).getPropertyValue(e);
          }
          linking() {
            return this._innerAPI().linking;
          }
          _innerAPI() {
            var e;
            return null === (e = this._innerWindow()) || void 0 === e
              ? void 0
              : e.tradingViewApi;
          }
          _innerWindow() {
            return this._iFrame.contentWindow;
          }
          _doWhenInnerWindowLoaded(e) {
            this._ready
              ? e(this._innerWindow())
              : this._innerWindowLoaded.then(() => {
                  e(this._innerWindow());
                });
          }
          _doWhenInnerApiLoaded(e) {
            this._doWhenInnerWindowLoaded((t) => {
              t.doWhenApiIsReady(() => e(this._innerAPI()));
            });
          }
          _autoResizeChart() {
            this._options.fullscreen &&
              ((this._iFrame.style.height = window.innerHeight + "px"),
              T &&
                setTimeout(() => {
                  this._iFrame.style.height = window.innerHeight + "px";
                }, 30));
          }
          _create() {
            var e, t;
            let n =
                null !==
                  (t =
                    null === (e = this._options.enabled_features) ||
                    void 0 === e
                      ? void 0
                      : e.includes("iframe_loading_compatibility_mode")) &&
                void 0 !== t &&
                t,
              [i, r] = this._render(!n),
              s = this._options.container,
              o = "string" == typeof s ? document.getElementById(s) : s;
            if (null === o)
              throw Error(
                "There is no such element - #".concat(this._options.container)
              );
            (o.innerHTML = i),
              (this._iFrame = o.querySelector("#".concat(this._id)));
            let a = this._iFrame;
            n &&
              (a.contentWindow
                ? (a.contentWindow.document.open(),
                  a.contentWindow.document.write(r),
                  a.contentWindow.document.close())
                : console.warn(
                    "Unable to locate contentWindow for the created iframe. Please try disabling the `iframe_loading_compatibility_mode` featureset."
                  )),
              (this._options.autosize || this._options.fullscreen) &&
                ((a.style.width = "100%"),
                this._options.fullscreen || (a.style.height = "100%")),
              window.addEventListener("resize", this._onWindowResize),
              this._onWindowResize(),
              (this._innerWindowLoaded = new Promise((e) => {
                let t = () => {
                  a.removeEventListener("load", t, !1), e();
                };
                a.addEventListener("load", t, !1);
              })),
              this._innerWindowLoaded.then(() => {
                try {
                  this._innerWindow().widgetReady(() => {
                    for (let e of ((this._ready = !0), this._readyHandlers))
                      try {
                        e.call(this);
                      } catch (e) {
                        console.error(e);
                      }
                    this._innerWindow().initializationFinished();
                  });
                } catch (e) {
                  if (
                    e instanceof Error &&
                    /widgetReady is not a function/.test(e.message)
                  )
                    throw Error(
                      "There was an error when loading the library. Usually this error means the library failed to load its static files. Check that the library files are available at "
                        .concat(window.location.host, "/")
                        .concat(
                          this._options.library_path || "",
                          " or correct the library_path option."
                        )
                    );
                }
              });
          }
          _render(e) {
            let t = window;
            if (
              ((t[this._id] = {
                datafeed: this._options.datafeed,
                customFormatters:
                  this._options.custom_formatters ||
                  this._options.customFormatters,
                brokerFactory:
                  this._options.broker_factory || this._options.brokerFactory,
                overrides: this._options.overrides,
                studiesOverrides: this._options.studies_overrides,
                tradingCustomization: this._options.trading_customization,
                disabledFeatures: this._options.disabled_features,
                enabledFeatures: this._options.enabled_features,
                brokerConfig:
                  this._options.broker_config || this._options.brokerConfig,
                restConfig: this._options.restConfig,
                favorites: this._options.favorites,
                logo: this._options.logo,
                numeric_formatting: this._options.numeric_formatting,
                rss_news_feed: this._options.rss_news_feed,
                newsProvider: this._options.news_provider,
                loadLastChart: this._options.load_last_chart,
                saveLoadAdapter: this._options.save_load_adapter,
                loading_screen: this._options.loading_screen,
                settingsAdapter: this._options.settings_adapter,
                getCustomIndicators: this._options.custom_indicators_getter,
                additionalSymbolInfoFields:
                  this._options.additional_symbol_info_fields,
                headerWidgetButtonsMode:
                  this._options.header_widget_buttons_mode,
                customTranslateFunction:
                  this._options.custom_translate_function,
                symbolSearchComplete: this._options.symbol_search_complete,
                contextMenu: this._options.context_menu,
                settingsOverrides: this._options.settings_overrides,
                timeframe: this._options.timeframe,
                customTimezones: this._options.custom_timezones,
              }),
              this._options.saved_data)
            )
              (t[this._id].chartContent = { json: this._options.saved_data }),
                this._options.saved_data_meta_info &&
                  (t[this._id].chartContentExtendedData =
                    this._options.saved_data_meta_info);
            else if (!this._options.load_last_chart && !this._options.symbol)
              throw Error(
                "Symbol is not defined: either 'symbol' or 'load_last_chart' option must be set"
              );
            if (
              (this._options.library_path &&
                !this._options.library_path.endsWith("/") &&
                console.warn(
                  "library_path option should contain a trailing forward slash"
                ),
              this._options.locale)
            ) {
              let e = encodeURIComponent(this._options.locale);
              z.findIndex((t) => t.language === e) >= 0 ||
                (console.warn("locale isn't supported. Using default of `en`."),
                (this._options.locale = "en"));
            }
            let n = (function (e, t) {
                var n, i;
                let r = new URL("".concat(e || ""), location.href).href,
                  s = JSON.parse(
                    '["bundles/runtime.93ba548e6a7994d2a8f1.js","bundles/__LANG__.5008.e5d7d914577969582fa4.js","bundles/3515.2f722d33cebe31a154b1.css","bundles/1564.94d55d014a317059a934.js","bundles/library.0f3decc3cfc32a3eb326.js"]'
                  ),
                  o = encodeURIComponent(t),
                  a =
                    null !== (i = z.find((e) => e.language === o)) &&
                    void 0 !== i
                      ? i
                      : { iso: "en", dir: "ltr" },
                  l = 'lang="'.concat(a.iso, '" dir="').concat(a.dir, '"'),
                  d = "\n".concat(
                    (function (e, t, n) {
                      if (void 0 === e) return "";
                      let i = [],
                        r = [];
                      for (let s of e)
                        s.endsWith(".js")
                          ? i.push(
                              '<script defer crossorigin="anonymous" src="'.concat(
                                s.replace("__LANG__", n),
                                '"></script>'
                              )
                            )
                          : s.endsWith(".css") &&
                            r.push(
                              '<link type="text/css" href="'.concat(
                                t ? s.replace(/\.css$/i, ".rtl.css") : s,
                                '" rel="stylesheet"/>'
                              )
                            );
                      return [...i, ...r].join("\n");
                    })(s, "rtl" === a.dir, o),
                    "\n"
                  );
                return "<!DOCTYPE html><html "
                  .concat(
                    (n = {
                      bundles: d,
                      localeLanguage: o,
                      htmlAttrs: l,
                      libraryPath: r,
                    }).htmlAttrs,
                    '><head><base href="'
                  )
                  .concat(
                    n.libraryPath,
                    '"><meta charset="utf-8"><script>window===window.parent&&(location.href="about:blank")</script> '
                  )
                  .concat(
                    n.bundles,
                    ' </head><body class="chart-page unselectable on-widget"><div class="loading-indicator" id="loading-indicator"></div><script>var JSServer={},__initialEnabledFeaturesets=["charting_library"]</script><script>(function() {\n		window.urlParams = (function () {\n			var match,\n				pl	 = /\\+/g,  // Regex for replacing addition symbol with a space\n				search = /([^&=]+)=?([^&]*)/g,\n				decode = function (s) { return decodeURIComponent(s.replace(pl, \' \')).replace(/<\\/?[^>]+(>|$)/g, \'\'); },\n				query = function() {\n					// We don\'t use hash on the url because: safari 13 throws an error if you attempt this\n					// on a blob, and safari 14 will strip hash from blob urls.\n					if (frameElement && frameElement.dataset.widgetOptions) {\n						return frameElement.dataset.widgetOptions;\n					} else {\n						throw "Unexpected use of this page";\n					}\n				}(),\n				result = {};\n\n			while (match = search.exec(query)) {\n				result[decode(match[1])] = decode(match[2]);\n			}\n\n			var additionalSettingsObject = window.parent[result.uid];\n\n			var customObjectNames = [\'datafeed\', \'customFormatters\', \'brokerFactory\', \'save_load_adapter\', \'customTranslateFunction\', \'contextMenu\'];\n\n			for (var p in additionalSettingsObject) {\n				if (customObjectNames.indexOf(p) === -1) {\n					result[p] = JSON.stringify(additionalSettingsObject[p]);\n				}\n			}\n\n			return result;\n		})();\n\n		window.locale = urlParams.locale;\n		window.language = urlParams.locale; // a very big attention needed here\n		window.customTranslateFunction = window.parent[urlParams.uid].customTranslateFunction;\n\n		window.addCustomCSSFile = function(href) {\n			var link = document.createElement(\'link\');\n			link.setAttribute(\'type\', \'text/css\');\n			link.setAttribute(\'rel\', \'stylesheet\');\n			link.setAttribute(\'href\', href);\n			link.setAttribute(\'cross-origin\', \'anonymous\');\n\n			window.loadedCustomCss = new Promise((resolve) => {\n				link.onload = resolve;\n				link.onerror = resolve;\n			});\n			document.body.appendChild(link);\n		};\n\n		window.loadedCustomCss = Promise.resolve();\n		if (!!urlParams.customCSS) {\n			window.addCustomCSSFile(urlParams.customCSS);\n		}\n\n		var loadingScreenParams = {};\n\n		if (typeof urlParams.loading_screen === \'string\') {\n			try {\n				loadingScreenParams = JSON.parse(urlParams.loading_screen);\n			} catch(e) {}\n		}\n\n		var loadingIndicatorElement = document.getElementById(\'loading-indicator\');\n\n		if (loadingScreenParams.backgroundColor) {\n			loadingIndicatorElement.style = \'background-color: \' + loadingScreenParams.backgroundColor;\n		}\n\n		!function(){"use strict";var t,e=new WeakMap;!function(t){t[t.Element=1]="Element",t[t.Document=9]="Document"}(t||(t={}));var n={mini:"xsmall",xsmall:"xsmall",small:"small",medium:"medium",large:"large"};var i,s,o,r,l,c=(void 0===l&&(l=""),i=\'<div class="tv-spinner \'.concat(l,\'" role="progressbar"></div>\'),o=function(n,i){var s,o;return s=null==i?document.documentElement:i.nodeType===t.Document?i.documentElement:i,e&&(o=e.get(s)),o||((o=s.ownerDocument.createRange()).selectNodeContents(s),e&&e.set(s,o)),o.createContextualFragment(n)}(i,s),null!==(r=o.firstElementChild)&&o.removeChild(r),r),a=function(){function t(t){this._shown=!1,this._el=c.cloneNode(!0),this.setSize(n[t||"large"])}return t.prototype.spin=function(t){return this._el.classList.add("tv-spinner--shown"),void 0===this._container&&(this._container=t,void 0!==t&&t.appendChild(this._el)),this._shown=!0,this},t.prototype.stop=function(t){return t&&void 0!==this._container&&this._container.removeChild(this._el),this._el&&this._el.classList.remove("tv-spinner--shown"),this._shown=!1,this},t.prototype.setStyle=function(t){var e=this;return Object.keys(t).forEach((function(n){var i=t[n];void 0!==i&&e._el.style.setProperty(n,i)})),this},t.prototype.style=function(){return this._el.style},t.prototype.setSize=function(t){var e=void 0!==t?"tv-spinner--size_".concat(t):"";return this._el.className="tv-spinner ".concat(e," ").concat(this._shown?"tv-spinner--shown":""),this},t.prototype.getEl=function(){return this._el},t.prototype.destroy=function(){this.stop(),delete this._el,delete this._container},t}();window.Spinner=a}();\n\n\n		var spinnerColor = (loadingScreenParams.foregroundColor) ? loadingScreenParams.foregroundColor : undefined;\n\n		var loadingSpinner = new Spinner(\'large\').setStyle({\n			\'--tv-spinner-color\': spinnerColor,\n			zIndex: String(2e9),\n		});\n		loadingSpinner.getEl().classList.add(\'spinner\');\n		loadingSpinner.spin(loadingIndicatorElement);\n	})();</script></body></html>'
                  );
              })(this._options.library_path || "", this._options.locale),
              i = new URL("about:blank");
            if (e) {
              let e = new Blob([n], { type: "text/html" }),
                t = URL.createObjectURL(e);
              i = new URL(t);
            }
            let r =
              "symbol=" +
              encodeURIComponent(this._options.symbol || "") +
              "&interval=" +
              encodeURIComponent(this._options.interval) +
              (this._options.toolbar_bg
                ? "&toolbarbg=" +
                  encodeURIComponent(this._options.toolbar_bg.replace("#", ""))
                : "") +
              (this._options.studies_access
                ? "&studiesAccess=" +
                  encodeURIComponent(
                    JSON.stringify(this._options.studies_access)
                  )
                : "") +
              "&widgetbar=" +
              encodeURIComponent(JSON.stringify(this._options.widgetbar)) +
              (this._options.drawings_access
                ? "&drawingsAccess=" +
                  encodeURIComponent(
                    JSON.stringify(this._options.drawings_access)
                  )
                : "") +
              "&timeFrames=" +
              encodeURIComponent(JSON.stringify(this._options.time_frames)) +
              "&locale=" +
              encodeURIComponent(this._options.locale) +
              "&uid=" +
              encodeURIComponent(this._id) +
              "&clientId=" +
              encodeURIComponent(String(this._options.client_id)) +
              "&userId=" +
              encodeURIComponent(String(this._options.user_id)) +
              (this._options.charts_storage_url
                ? "&chartsStorageUrl=" +
                  encodeURIComponent(this._options.charts_storage_url)
                : "") +
              (this._options.charts_storage_api_version
                ? "&chartsStorageVer=" +
                  encodeURIComponent(this._options.charts_storage_api_version)
                : "") +
              (this._options.custom_css_url
                ? "&customCSS=" +
                  encodeURIComponent(this._options.custom_css_url)
                : "") +
              (this._options.custom_font_family
                ? "&customFontFamily=" +
                  encodeURIComponent(this._options.custom_font_family)
                : "") +
              (this._options.auto_save_delay
                ? "&autoSaveDelay=" +
                  encodeURIComponent(String(this._options.auto_save_delay))
                : "") +
              "&debug=" +
              encodeURIComponent(String(this._options.debug)) +
              (this._options.snapshot_url
                ? "&snapshotUrl=" +
                  encodeURIComponent(this._options.snapshot_url)
                : "") +
              (this._options.timezone
                ? "&timezone=" + encodeURIComponent(this._options.timezone)
                : "") +
              (this._options.study_count_limit
                ? "&studyCountLimit=" +
                  encodeURIComponent(String(this._options.study_count_limit))
                : "") +
              (this._options.symbol_search_request_delay
                ? "&ssreqdelay=" +
                  encodeURIComponent(
                    String(this._options.symbol_search_request_delay)
                  )
                : "") +
              (this._options.compare_symbols
                ? "&compareSymbols=" +
                  encodeURIComponent(
                    JSON.stringify(this._options.compare_symbols)
                  )
                : "") +
              (this._options.theme
                ? "&theme=" + encodeURIComponent(String(this._options.theme))
                : "") +
              (this._options.header_widget_buttons_mode
                ? "&header_widget_buttons_mode=" +
                  encodeURIComponent(
                    String(this._options.header_widget_buttons_mode)
                  )
                : "") +
              (this._options.time_scale
                ? "&time_scale=" +
                  encodeURIComponent(JSON.stringify(this._options.time_scale))
                : "");
            return [
              '<iframe\n		id="'
                .concat(this._id, '" name="')
                .concat(this._id, '" src="')
                .concat(i.href, '" data-widget-options="')
                .concat(r, '"\n		')
                .concat(
                  this._options.autosize || this._options.fullscreen
                    ? ""
                    : 'width="'
                        .concat(this._options.width, '" height="')
                        .concat(this._options.height, '"'),
                  ' title="Financial Chart" frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;">\n	</iframe>'
                ),
              n,
            ];
          }
          constructor(e) {
            var t, n;
            if (
              ((this._id = "tradingview_".concat(
                ((1048576 * (1 + Math.random())) | 0).toString(16).substring(1)
              )),
              (this._ready = !1),
              (this._readyHandlers = []),
              (this._onWindowResize = this._autoResizeChart.bind(this)),
              !e.datafeed)
            )
              throw Error("Datafeed is not defined");
            (null === (t = e.overrides) || void 0 === t
              ? void 0
              : t["mainSeriesProperties.priceAxisProperties.lockScale"]) &&
              (console.warn(
                "mainSeriesProperties.priceAxisProperties.lockScale can not be set to true within the widget constructor"
              ),
              delete e.overrides[
                "mainSeriesProperties.priceAxisProperties.lockScale"
              ]),
              (this._options = D(W, e)),
              "dark" ===
                (null !== (n = this._options.theme) && void 0 !== n
                  ? n
                  : "light"
                ).toLowerCase() &&
                void 0 === this._options.loading_screen &&
                (this._options.loading_screen = { backgroundColor: "#131722" }),
              this._options.debug &&
                (R ||
                  ((R = !0),
                  console.log(
                    "Using CL v26.001 (internal id 04caa94e @ 2023-08-09T11:45:15.021Z)"
                  ))),
              this._create();
          }
        };
      (window.TradingView = window.TradingView || {}),
        (window.TradingView.version = function () {
          return "CL v26.001 (internal id 04caa94e @ 2023-08-09T11:45:15.021Z)";
        });
      let T =
          !(!window.navigator || !window.navigator.userAgent) &&
          window.navigator.userAgent.includes("CriOS"),
        E = () => {
          let e = (0, o.useRef)(null),
            t = m(),
            n = (0, a.Zl)(u),
            i = (0, a.sJ)(d.xY),
            r = (0, a.sJ)(l.T),
            [s, v] = (0, a.FV)(c),
            { subscribeBars: p, unsubscribeBars: C } = Z(),
            [g, _] = (0, a.FV)(h.x),
            w = null == i ? void 0 : i.symbol;
          return (
            (0, o.useEffect)(() => {
              if (!t) return;
              v(!0);
              let i = new window.Datafeeds.UDFCompatibleDatafeed(
                F.lG.datafeedUrl
              );
              (i.resolveSymbol = f),
                (i.subscribeBars = p),
                (i.unsubscribeBars = C);
              let s = (0, F.zL)(w, i, e, r, g),
                o = new V(s);
              return (
                n(o),
                N(o, r, () => v(!1)),
                M(o, _, () => v(!1)),
                () => {
                  o.remove();
                }
              );
            }, [w, t, r]),
            { chartContainerRef: e, isTwLoaded: s }
          );
        };
      var U = n(67624),
        O = n(8463);
      let B = () =>
          (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            children: (0, i.jsx)("path", {
              d: "M20.25 4.5V9C20.25 9.19891 20.171 9.38968 20.0303 9.53033C19.8897 9.67098 19.6989 9.75 19.5 9.75C19.3011 9.75 19.1103 9.67098 18.9697 9.53033C18.829 9.38968 18.75 9.19891 18.75 9V6.31031L14.7806 10.2806C14.6399 10.4214 14.449 10.5004 14.25 10.5004C14.051 10.5004 13.8601 10.4214 13.7194 10.2806C13.5786 10.1399 13.4996 9.94902 13.4996 9.75C13.4996 9.55098 13.5786 9.36011 13.7194 9.21937L17.6897 5.25H15C14.8011 5.25 14.6103 5.17098 14.4697 5.03033C14.329 4.88968 14.25 4.69891 14.25 4.5C14.25 4.30109 14.329 4.11032 14.4697 3.96967C14.6103 3.82902 14.8011 3.75 15 3.75H19.5C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5ZM9.21937 13.7194L5.25 17.6897V15C5.25 14.8011 5.17098 14.6103 5.03033 14.4697C4.88968 14.329 4.69891 14.25 4.5 14.25C4.30109 14.25 4.11032 14.329 3.96967 14.4697C3.82902 14.6103 3.75 14.8011 3.75 15V19.5C3.75 19.6989 3.82902 19.8897 3.96967 20.0303C4.11032 20.171 4.30109 20.25 4.5 20.25H9C9.19891 20.25 9.38968 20.171 9.53033 20.0303C9.67098 19.8897 9.75 19.6989 9.75 19.5C9.75 19.3011 9.67098 19.1103 9.53033 18.9697C9.38968 18.829 9.19891 18.75 9 18.75H6.31031L10.2806 14.7806C10.4214 14.6399 10.5004 14.449 10.5004 14.25C10.5004 14.051 10.4214 13.8601 10.2806 13.7194C10.1399 13.5786 9.94902 13.4996 9.75 13.4996C9.55098 13.4996 9.36011 13.5786 9.21937 13.7194ZM19.5 14.25C19.3011 14.25 19.1103 14.329 18.9697 14.4697C18.829 14.6103 18.75 14.8011 18.75 15V17.6897L14.7806 13.7194C14.6399 13.5786 14.449 13.4996 14.25 13.4996C14.051 13.4996 13.8601 13.5786 13.7194 13.7194C13.5786 13.8601 13.4996 14.051 13.4996 14.25C13.4996 14.449 13.5786 14.6399 13.7194 14.7806L17.6897 18.75H15C14.8011 18.75 14.6103 18.829 14.4697 18.9697C14.329 19.1103 14.25 19.3011 14.25 19.5C14.25 19.6989 14.329 19.8897 14.4697 20.0303C14.6103 20.171 14.8011 20.25 15 20.25H19.5C19.6989 20.25 19.8897 20.171 20.0303 20.0303C20.171 19.8897 20.25 19.6989 20.25 19.5V15C20.25 14.8011 20.171 14.6103 20.0303 14.4697C19.8897 14.329 19.6989 14.25 19.5 14.25ZM6.31031 5.25H9C9.19891 5.25 9.38968 5.17098 9.53033 5.03033C9.67098 4.88968 9.75 4.69891 9.75 4.5C9.75 4.30109 9.67098 4.11032 9.53033 3.96967C9.38968 3.82902 9.19891 3.75 9 3.75H4.5C4.30109 3.75 4.11032 3.82902 3.96967 3.96967C3.82902 4.11032 3.75 4.30109 3.75 4.5V9C3.75 9.19891 3.82902 9.38968 3.96967 9.53033C4.11032 9.67098 4.30109 9.75 4.5 9.75C4.69891 9.75 4.88968 9.67098 5.03033 9.53033C5.17098 9.38968 5.25 9.19891 5.25 9V6.31031L9.21937 10.2806C9.36011 10.4214 9.55098 10.5004 9.75 10.5004C9.94902 10.5004 10.1399 10.4214 10.2806 10.2806C10.4214 10.1399 10.5004 9.94902 10.5004 9.75C10.5004 9.55098 10.4214 9.36011 10.2806 9.21937L6.31031 5.25Z",
              fill: "white",
            }),
          }),
        J = () =>
          (0, i.jsxs)("svg", {
            width: "25",
            height: "24",
            viewBox: "0 0 25 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, i.jsx)("path", {
                d: "M19.4838 15.4545L21.052 18.1307L22.6202 15.4545H23.7793L21.6656 18.7273L23.7793 22H22.6202L21.052 19.4602L19.4838 22H18.3247L20.4043 18.7273L18.3247 15.4545H19.4838Z",
                fill: "white",
              }),
              (0, i.jsx)("path", {
                d: "M20.0536 3.75C20.0536 3.94891 19.9746 4.13968 19.8339 4.28033C19.6933 4.42098 19.5025 4.5 19.3036 4.5H16.5577C16.0306 4.49986 15.5202 4.68476 15.1155 5.02246C14.7108 5.36016 14.4375 5.82922 14.3433 6.34781L13.4527 11.25H17.8036C18.0025 11.25 18.1933 11.329 18.3339 11.4697C18.4746 11.6103 18.5536 11.8011 18.5536 12C18.5536 12.1989 18.4746 12.3897 18.3339 12.5303C18.1933 12.671 18.0025 12.75 17.8036 12.75H13.1798L12.2423 17.9213C12.085 18.7858 11.6292 19.5676 10.9542 20.1303C10.2793 20.693 9.42824 21.0008 8.54953 21H5.80359C5.60468 21 5.41391 20.921 5.27326 20.7803C5.13261 20.6397 5.05359 20.4489 5.05359 20.25C5.05359 20.0511 5.13261 19.8603 5.27326 19.7197C5.41391 19.579 5.60468 19.5 5.80359 19.5H8.54953C9.07661 19.5001 9.58701 19.3152 9.9917 18.9775C10.3964 18.6398 10.6697 18.1708 10.7639 17.6522L11.6545 12.75H7.30359C7.10468 12.75 6.91391 12.671 6.77326 12.5303C6.63261 12.3897 6.55359 12.1989 6.55359 12C6.55359 11.8011 6.63261 11.6103 6.77326 11.4697C6.91391 11.329 7.10468 11.25 7.30359 11.25H11.9273L12.8648 6.07875C13.0221 5.21423 13.478 4.4324 14.1529 3.86971C14.8279 3.30702 15.6789 2.99921 16.5577 3H19.3036C19.5025 3 19.6933 3.07902 19.8339 3.21967C19.9746 3.36032 20.0536 3.55109 20.0536 3.75Z",
                fill: "white",
              }),
            ],
          }),
        G = () =>
          (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 28 28",
            width: "28",
            height: "28",
            children: (0, i.jsx)("path", {
              fill: "currentColor",
              d: "M18.293 13l-2.647 2.646.707.708 3.854-3.854-3.854-3.854-.707.708L18.293 12H12.5A5.5 5.5 0 0 0 7 17.5V19h1v-1.5a4.5 4.5 0 0 1 4.5-4.5h5.793z",
            }),
          }),
        q = () =>
          (0, i.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            children: [
              (0, i.jsx)("path", {
                d: "M16.0106 7.40907C16.5122 7.49161 17.0414 7.45661 17.5559 7.28334L17.8931 7.16978C18.283 7.03848 18.6991 7.20045 18.8896 7.52042L19.4956 8.53802C19.6804 8.84826 19.6177 9.2448 19.3251 9.48998L19.0552 9.71625C17.589 10.945 17.589 13.1632 19.0552 14.3919L19.3251 14.6181C19.6177 14.8634 19.6804 15.2599 19.4956 15.5702L18.8896 16.5877C18.6991 16.9077 18.283 17.0697 17.8931 16.9383L17.556 16.8248C15.7699 16.2232 13.8062 17.288 13.438 19.152L13.3709 19.4918C13.302 19.8404 12.9763 20.1236 12.5614 20.1236H11.3493C10.9345 20.1236 10.6088 19.8405 10.5399 19.4918L10.4727 19.1518C10.1045 17.288 8.14075 16.2232 6.35471 16.8248L6.0177 16.9383C5.62783 17.0697 5.21172 16.9077 5.02117 16.5877L4.41519 15.5701C4.23044 15.2599 4.29311 14.8634 4.58565 14.6181L4.85565 14.3919C6.32173 13.1631 6.32172 10.9451 4.85565 9.7163L4.58565 9.48999C4.29311 9.24482 4.23044 8.84828 4.41519 8.53805L5.0212 7.52044C5.21174 7.20046 5.62784 7.03849 6.0177 7.1698L6.3548 7.28333C8.14081 7.88484 10.1044 6.82011 10.4727 4.95626L10.5399 4.61635C10.6088 4.26773 10.9345 3.98459 11.3493 3.98459H12.5614C12.9763 3.98459 13.302 4.26775 13.3709 4.61637L13.438 4.95615C13.5073 5.30707 13.6332 5.62967 13.8038 5.91815",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("ellipse", {
                cx: "12.0069",
                cy: "11.9916",
                rx: "1.90574",
                ry: "1.90574",
                stroke: "white",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          }),
        $ = () =>
          (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 28 28",
            width: "28",
            height: "28",
            children: (0, i.jsx)("path", {
              fill: "currentColor",
              d: "M8.707 13l2.647 2.646-.707.708L6.792 12.5l3.853-3.854.708.708L8.707 12H14.5a5.5 5.5 0 0 1 5.5 5.5V19h-1v-1.5a4.5 4.5 0 0 0-4.5-4.5H8.707z",
            }),
          }),
        Y = (e) => {
          let { handleClose: t, className: n } = e;
          (0, o.useEffect)(() => {
            null == window ||
              window.addEventListener("blur", () => {
                document.activeElement === document.querySelector("iframe") &&
                  t();
              }),
              null == document ||
                document.addEventListener("click", (e) => {
                  e.target.classList.contains(n) || t();
                });
          }, [t, n]);
        };
      var K = n(7297),
        Q = n(15437),
        X = n(36055);
      function ee() {
        let e = (0, K.Z)([
          "\n  position: absolute;\n  z-index: 10;\n  width: 10rem;\n  background-color: ",
          ";\n  visibility: ",
          ";\n  top: 2.1875rem;\n  left: 13.5rem;\n  padding: 0.75rem 0;\n\n  -webkit-box-shadow: 11px 13px 25px -22px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 11px 13px 25px -22px rgba(0, 0, 0, 0.75);\n  box-shadow: 11px 13px 25px -22px rgba(0, 0, 0, 0.75);\n\n  ul {\n    list-style: none;\n\n    li {\n      width: 100%;\n      height: 2.5rem;\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      gap: 0.5rem;\n      padding: 0.5rem 0.5rem 0.5rem 1.25rem;\n\n      svg {\n        color: ",
          ";\n      }\n\n      p {\n        color: ",
          ";\n\n        font-family: ",
          ";\n        font-size: 0.875rem;\n        font-weight: 400;\n      }\n\n      &:hover {\n        background: rgba(255, 255, 255, 0.1);\n      }\n    }\n  }\n",
        ]);
        return (
          (ee = function () {
            return e;
          }),
          e
        );
      }
      let et = Q.ZP.div.withConfig({
          displayName: "ChartTypes.styles__Container",
          componentId: "sc-4bf5184d-0",
        })(
          ee(),
          (e) => {
            let { theme: t } = e;
            return t.colors.shared["02"];
          },
          (e) => {
            let { $isOpen: t } = e;
            return t ? "visible" : "hidden";
          },
          (e) => {
            let { theme: t } = e;
            return t.colors.neutral.white;
          },
          (e) => {
            let { theme: t } = e;
            return t.colors.neutral.white;
          },
          X.i
        ),
        en = { Container: et },
        ei = () =>
          (0, i.jsx)("svg", {
            className: "chart-types",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 28 28",
            width: "28",
            height: "28",
            fill: "currentColor",
            children: (0, i.jsx)("path", {
              d: "M19 5h5v1h-4v13h-6v-7h-4v12H5v-1h4V11h6v7h4V5Z",
            }),
          }),
        er = () =>
          (0, i.jsx)("svg", {
            className: "chart-types",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 28 28",
            width: "28",
            height: "28",
            children: (0, i.jsx)("g", {
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "square",
              children: (0, i.jsx)("path", {
                d: "M10.5 7.5v15M7.5 20.5H10M13.5 11.5H11M19.5 6.5v15M16.5 9.5H19M22.5 16.5H20",
              }),
            }),
          }),
        es = () =>
          (0, i.jsx)("svg", {
            className: "chart-types",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 28 28",
            width: "28",
            height: "28",
            children: (0, i.jsx)("path", {
              fill: "currentColor",
              d: "m10.49 7.55-.42.7-2.1 3.5.86.5 1.68-2.8 1.8 2.82.84-.54-2.23-3.5-.43-.68Zm12.32 4.72-.84-.54 2.61-4 .84.54-2.61 4Zm-5.3 6.3 1.2-1.84.84.54-1.63 2.5-.43.65-.41-.65-1.6-2.5.85-.54 1.17 1.85ZM4.96 16.75l.86.52-2.4 4-.86-.52 2.4-4ZM3 14v1h1v-1H3Zm2 0h1v1H5v-1Zm2 0v1h1v-1H7Zm2 0h1v1H9v-1Zm2 0v1h1v-1h-1Zm2 0h1v1h-1v-1Zm2 0v1h1v-1h-1Zm2 0h1v1h-1v-1Zm2 0v1h1v-1h-1Zm2 0h1v1h-1v-1Zm2 0v1h1v-1h-1Zm2 0h1v1h-1v-1Z",
            }),
          }),
        eo = () =>
          (0, i.jsxs)("svg", {
            className: "chart-types",
            width: "25",
            height: "24",
            viewBox: "0 0 25 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, i.jsx)("mask", {
                id: "path-1-inside-1_12717_19857",
                fill: "white",
                className: "chart-types",
                children: (0, i.jsx)("rect", {
                  x: "13.2831",
                  y: "7.86136",
                  width: "5.60795",
                  height: "8.97273",
                  rx: "0.75",
                }),
              }),
              (0, i.jsx)("rect", {
                className: "chart-types",
                x: "13.2831",
                y: "7.86136",
                width: "5.60795",
                height: "8.97273",
                rx: "0.75",
                stroke: "white",
                strokeWidth: "2.25",
                mask: "url(#path-1-inside-1_12717_19857)",
              }),
              (0, i.jsx)("line", {
                className: "chart-types",
                x1: "16.0888",
                y1: "3.9375",
                x2: "16.0888",
                y2: "8.1",
                stroke: "white",
                strokeWidth: "1.125",
                strokeLinecap: "round",
              }),
              (0, i.jsx)("path", {
                className: "chart-types",
                d: "M16.5294 16.5938L16.5294 16.0313L15.4044 16.0312L15.4044 16.5937L16.5294 16.5938ZM15.4044 21C15.4044 21.3107 15.6563 21.5625 15.9669 21.5625C16.2776 21.5625 16.5294 21.3107 16.5294 21L15.4044 21ZM15.4044 16.5937L15.4044 21L16.5294 21L16.5294 16.5938L15.4044 16.5937Z",
                fill: "white",
              }),
              (0, i.jsx)("mask", {
                id: "path-4-inside-2_12717_19857",
                fill: "white",
                className: "chart-types",
                children: (0, i.jsx)("rect", {
                  x: "6.55359",
                  y: "5.61818",
                  width: "5.60795",
                  height: "13.4591",
                  rx: "0.75",
                  className: "chart-types",
                }),
              }),
              (0, i.jsx)("rect", {
                x: "6.55359",
                y: "5.61818",
                width: "5.60795",
                height: "13.4591",
                rx: "0.75",
                stroke: "white",
                strokeWidth: "2.25",
                mask: "url(#path-4-inside-2_12717_19857)",
                className: "chart-types",
              }),
              (0, i.jsx)("path", {
                d: "M9.7999 3.81563C9.7999 3.50497 9.54806 3.25313 9.2374 3.25313C8.92674 3.25313 8.6749 3.50497 8.6749 3.81563L9.7999 3.81563ZM8.6749 5.17756L8.6749 5.74006L9.7999 5.74006L9.7999 5.17756L8.6749 5.17756ZM8.6749 3.81563L8.6749 5.17756L9.7999 5.17756L9.7999 3.81563L8.6749 3.81563Z",
                fill: "white",
                className: "chart-types",
              }),
              (0, i.jsx)("path", {
                d: "M9.7999 19.5179L9.7999 18.9554L8.6749 18.9554L8.6749 19.5179L9.7999 19.5179ZM8.6749 20.8798C8.6749 21.1905 8.92674 21.4423 9.2374 21.4423C9.54806 21.4423 9.7999 21.1905 9.7999 20.8798L8.6749 20.8798ZM8.6749 19.5179L8.6749 20.8798L9.7999 20.8798L9.7999 19.5179L8.6749 19.5179Z",
                fill: "white",
                className: "chart-types",
              }),
            ],
          }),
        ea = () =>
          (0, i.jsx)("svg", {
            className: "chart-types",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 28 28",
            width: "28",
            height: "28",
            children: (0, i.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M12 7v14h5V7h-5Zm4 1h-3v12h3V8ZM19 15v6h5v-6h-5Zm4 1h-3v4h3v-4ZM5 12h5v9H5v-9Zm1 1h3v7H6v-7Z",
            }),
          }),
        el = () =>
          (0, i.jsxs)("svg", {
            className: "chart-types",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 28 28",
            width: "28",
            height: "28",
            fill: "currentColor",
            children: [
              (0, i.jsx)("path", {
                d: "M9 8v12h3V8H9zm-1-.502C8 7.223 8.215 7 8.498 7h4.004c.275 0 .498.22.498.498v13.004a.493.493 0 0 1-.498.498H8.498A.496.496 0 0 1 8 20.502V7.498z",
              }),
              (0, i.jsx)("path", { d: "M10 4h1v3.5h-1z" }),
              (0, i.jsx)("path", {
                d: "M17 6v6h3V6h-3zm-1-.5c0-.276.215-.5.498-.5h4.004c.275 0 .498.23.498.5v7c0 .276-.215.5-.498.5h-4.004a.503.503 0 0 1-.498-.5v-7z",
              }),
              (0, i.jsx)("path", { d: "M18 2h1v3.5h-1z" }),
            ],
          }),
        ed = () =>
          (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            className: "chart-types",
            children: (0, i.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.5 7H7v14h5V7H7.5zM8 20V8h3v12H8zm7.5-11H15v10h5V9h-4.5zm.5 9v-8h3v8h-3z",
            }),
          }),
        eh = () =>
          (0, i.jsx)("svg", {
            className: "chart-types",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 28 28",
            width: "28",
            height: "28",
            fill: "currentColor",
            children: (0, i.jsx)("path", {
              fillRule: "evenodd",
              d: "M22 3h1v1h-1V3Zm0 2V4h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1V9h-1V8h-1V7h-1V6h-1V5h-1v1H9v1H8v1H7v1H6v1H5v1H4v1h1v1H4v1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1v1h1v1h1v1h1v1h1v1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h-1Zm-1 1V5h1v1h-1Zm-1 1V6h1v1h-1Zm-1 1V7h1v1h-1Zm-1 1V8h1v1h-1Zm-1 1V9h1v1h-1Zm-1 1v-1h1v1h-1Zm-1 0v-1h-1V9h-1V8h-1V7h-1V6h-1v1H9v1H8v1H7v1H6v1H5v1h1v-1h1v-1h1V9h1V8h1V7h1v1h1v1h1v1h1v1h1Zm0 0h1v1h-1v-1Zm.84 6.37 7.5-7-.68-.74-7.15 6.67-4.66-4.65-.33-.34-.36.32-5.5 5 .68.74 5.14-4.68 4.67 4.66.34.35.35-.33ZM6 23H5v1h1v-1Zm0-1H5v-1h1v1Zm1 0v1H6v-1h1Zm0-1H6v-1h1v1Zm1 0v1H7v-1h1Zm0-1H7v-1h1v1Zm1 0v1H8v-1h1Zm0-1H8v-1h1v1Zm1 0v1H9v-1h1Zm0-1H9v-1h1v1Zm1 0h-1v1h1v1h1v1h1v1h1v1h1v1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v1h1v1Zm0 0h1v1h-1v-1Zm2 2v1h1v1h1v1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1Zm0 0v-1h-1v1h1Z",
            }),
          }),
        ec = () =>
          (0, i.jsxs)("svg", {
            className: "chart-types",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 28 28",
            width: "28",
            height: "28",
            fill: "currentColor",
            children: [
              (0, i.jsx)("path", {
                d: "M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z",
              }),
              (0, i.jsx)("path", { d: "M18 7h1v3.5h-1zm0 10.5h1V21h-1z" }),
              (0, i.jsx)("path", {
                d: "M9 8v11h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5z",
              }),
              (0, i.jsx)("path", {
                d: "M10 4h1v5h-1zm0 14h1v5h-1zM8.5 9H10v1H8.5zM11 9h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11z",
              }),
            ],
          }),
        eu = () =>
          (0, i.jsx)("svg", {
            className: "chart-types",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 28 28",
            width: "28",
            height: "28",
            children: (0, i.jsx)("path", {
              fill: "currentColor",
              d: "m25.39 7.31-8.83 10.92-6.02-5.47-7.16 8.56-.76-.64 7.82-9.36 6 5.45L24.61 6.7l.78.62Z",
            }),
          }),
        em = () =>
          (0, i.jsxs)("svg", {
            className: "chart-types",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 28 28",
            width: "28",
            height: "28",
            fill: "currentColor",
            children: [
              (0, i.jsx)("path", {
                fillRule: "evenodd",
                d: "m18.43 15.91 6.96-8.6-.78-.62-6.96 8.6a2.49 2.49 0 0 0-2.63.2l-2.21-2.02A2.5 2.5 0 0 0 10.5 10a2.5 2.5 0 1 0 1.73 4.3l2.12 1.92a2.5 2.5 0 1 0 4.08-.31ZM10.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
              }),
              (0, i.jsx)("path", {
                d: "M8.37 13.8c.17.3.4.54.68.74l-5.67 6.78-.76-.64 5.75-6.88Z",
              }),
            ],
          }),
        ev = () =>
          (0, i.jsx)("svg", {
            className: "chart-types",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 28 28",
            width: "28",
            height: "28",
            fill: "currentColor",
            children: (0, i.jsx)("path", {
              d: "M19 5h5v1h-4v13h-6v-7h-4v12H5v-1h4V11h6v7h4V5Z",
            }),
          }),
        ep = [
          { icon: (0, i.jsx)(er, {}), name: "Bars", type: 0 },
          { icon: (0, i.jsx)(eo, {}), name: "CandleStick", type: 1 },
          { icon: (0, i.jsx)(ec, {}), name: "Hollow candles", type: 9 },
          { icon: (0, i.jsx)(ea, {}), name: "Columns", type: 13 },
          { icon: (0, i.jsx)(eu, {}), name: "Line", type: 2 },
          { icon: (0, i.jsx)(em, {}), name: "Line with markers", type: 14 },
          { icon: (0, i.jsx)(ev, {}), name: "StepLine", type: 15 },
          { icon: (0, i.jsx)(ei, {}), name: "Area", type: 3 },
          { icon: (0, i.jsx)(eh, {}), name: "HLC area", type: 16 },
          { icon: (0, i.jsx)(es, {}), name: "Baseline", type: 10 },
          { icon: (0, i.jsx)(ed, {}), name: "High Low", type: 12 },
          { icon: (0, i.jsx)(el, {}), name: "Heikin Ashi", type: 8 },
        ],
        eC = (e) => {
          var t, n, r, s;
          let { handleTrigger: l } = e,
            d = (0, a.sJ)(u),
            [h, c] = (0, o.useState)(!1);
          Y({ handleClose: () => c(!1), className: "chart-types" });
          let m =
              null == d
                ? void 0
                : null === (t = d.activeChart) || void 0 === t
                ? void 0
                : null === (n = t.call(d)) || void 0 === n
                ? void 0
                : null === (r = n.chartType) || void 0 === r
                ? void 0
                : r.call(n),
            v =
              null ===
                (s =
                  null == ep ? void 0 : ep.find((e) => e.type === (m || 1))) ||
              void 0 === s
                ? void 0
                : s.icon;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", {
                onClick: () => c(!h),
                className: "chart-types",
                children: v,
              }),
              (0, i.jsx)(en.Container, {
                $isOpen: h,
                className: "chart-types",
                children: (0, i.jsx)("ul", {
                  children: ep.map((e) => {
                    let { icon: t, name: n, type: r } = e;
                    return (0, i.jsxs)(
                      "li",
                      {
                        onClick: () => {
                          var e, t, n;
                          null == d ||
                            null === (e = d.activeChart) ||
                            void 0 === e ||
                            null === (t = e.call(d)) ||
                            void 0 === t ||
                            null === (n = t.setChartType) ||
                            void 0 === n ||
                            n.call(t, r),
                            c(!1),
                            l();
                        },
                        children: [t, (0, i.jsx)("p", { children: n })],
                      },
                      n
                    );
                  }),
                }),
              }),
            ],
          });
        },
        eg = () =>
          (0, i.jsx)("svg", {
            className: "time-frames",
            xmlns: "http://www.w3.org/2000/svg",
            width: "17",
            height: "16",
            viewBox: "0 0 17 16",
            fill: "none",
            children: (0, i.jsx)("path", {
              d: "M5.63159 6.39999L7.85782 8.62622C8.24834 9.01675 8.88151 9.01675 9.27203 8.62622L11.4983 6.39999",
              stroke: "white",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "time-frames",
            }),
          });
      var e_ = n(44537),
        ew = n(88891);
      let ef = (e) => {
        let { favorites: t, setFavorites: n } = e,
          i = (e) => {
            let { favorite: n } = e;
            return t.some((e) => {
              let { fav: t } = e;
              return t === n;
            });
          },
          r = (e) => {
            let { favorite: r } = e,
              s = (e, t) => e.sort - t.sort;
            if (!i({ favorite: r.fav })) {
              let e = [...t, r].sort(s);
              return (
                localStorage.setItem("favorites-timeframes", JSON.stringify(e)),
                n(e)
              );
            }
            let o = t
              .filter((e) => {
                let { fav: t } = e;
                return t !== r.fav;
              })
              .sort(s);
            return (
              localStorage.setItem("favorites-timeframes", JSON.stringify(o)),
              n([...o])
            );
          };
        return (
          (0, o.useEffect)(() => {
            let e = localStorage.getItem("favorites-timeframes");
            e && n(JSON.parse(e));
          }, [n]),
          { handleFavorites: r, checkFavorites: i }
        );
      };
      function ey() {
        let e = (0, K.Z)([
          "\n  position: absolute;\n  z-index: 10;\n  width: 11.25rem;\n  background-color: ",
          ";\n  visibility: ",
          ";\n  top: 2.1875rem;\n  left: 10.5rem;\n  padding: 0.75rem 0;\n\n  -webkit-box-shadow: 11px 13px 25px -22px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 11px 13px 25px -22px rgba(0, 0, 0, 0.75);\n  box-shadow: 11px 13px 25px -22px rgba(0, 0, 0, 0.75);\n\n  details {\n    &:nth-child(1) {\n      border-bottom: 1px solid ",
          ";\n    }\n    &:nth-child(2) {\n      border-bottom: 1px solid ",
          ";\n    }\n  }\n",
        ]);
        return (
          (ey = function () {
            return e;
          }),
          e
        );
      }
      function eL() {
        let e = (0, K.Z)([
          "\n  summary {\n    width: 100%;\n    height: 2.1875rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    padding: 0.5rem 0.5rem 0.5rem 1.25rem;\n\n    p {\n      color: ",
          ";\n      font-size: 0.875rem;\n    }\n\n    svg {\n      path {\n        stroke: ",
          ";\n      }\n    }\n  }\n\n  ul {\n    list-style: none;\n\n    li {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      width: 100%;\n      height: 2.5rem;\n      cursor: pointer;\n      position: relative;\n\n      p {\n        width: 100%;\n        color: ",
          ";\n        font-family: ",
          ";\n        font-size: 0.875rem;\n        font-weight: 700;\n        position: relative;\n        padding: 0.5rem 0 0.5rem 1.25rem;\n      }\n\n      span {\n        padding-right: 0.5rem;\n      }\n\n      &:hover {\n        background: rgba(255, 255, 255, 0.1);\n      }\n    }\n  }\n",
        ]);
        return (
          (eL = function () {
            return e;
          }),
          e
        );
      }
      function ex() {
        let e = (0, K.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n\n  &:hover {\n    svg {\n      path {\n        stroke: ",
          ";\n      }\n    }\n  }\n",
        ]);
        return (
          (ex = function () {
            return e;
          }),
          e
        );
      }
      let eb = Q.ZP.div.withConfig({
          displayName: "TimeFrames.styles__Container",
          componentId: "sc-3153b135-0",
        })(
          ey(),
          (e) => {
            let { theme: t } = e;
            return t.colors.shared["02"];
          },
          (e) => {
            let { $isOpen: t } = e;
            return t ? "visible" : "hidden";
          },
          (e) => {
            let { theme: t } = e;
            return t.colors.neutral["grey-1"];
          },
          (e) => {
            let { theme: t } = e;
            return t.colors.neutral["grey-1"];
          }
        ),
        ej = Q.ZP.details.withConfig({
          displayName: "TimeFrames.styles__Header",
          componentId: "sc-3153b135-1",
        })(
          eL(),
          (e) => {
            let { theme: t } = e;
            return t.colors.neutral["grey-1"];
          },
          (e) => {
            let { theme: t } = e;
            return t.colors.neutral["grey-1"];
          },
          (e) => {
            let { theme: t } = e;
            return t.colors.neutral.white;
          },
          X.i
        ),
        eS = Q.ZP.div.withConfig({
          displayName: "TimeFrames.styles__ArrowDown",
          componentId: "sc-3153b135-2",
        })(ex(), (e) => {
          let { theme: t } = e;
          return t.colors.secondary["1100"];
        }),
        eI = { Container: eb, Header: ej, ArrowDown: eS },
        ek = {
          minutes: [
            { title: "5 minutes", res: "5", value: "10h", fav: "5m", sort: 5 },
            {
              title: "15 minutes",
              res: "15",
              value: "1D",
              fav: "15m",
              sort: 15,
            },
          ],
          hours: [
            { title: "1 hour", res: "60", value: "5D", fav: "1h", sort: 60 },
            {
              title: "4 hours",
              res: "240",
              value: "20D",
              fav: "4h",
              sort: 240,
            },
          ],
          days: [
            { title: "1 day", res: "1D", value: "40D", fav: "1d", sort: 1440 },
            { title: "2 days", res: "2D", value: "60D", fav: "2d", sort: 2880 },
            {
              title: "3 days",
              res: "3D",
              value: "120D",
              fav: "3d",
              sort: 4320,
            },
          ],
        },
        eP = {
          5: "5m",
          15: "15m",
          60: "1h",
          240: "4h",
          "1D": "1d",
          "2D": "2d",
          "3D": "3d",
        },
        eA = (e) => eP[e],
        eH = (e) => {
          let { favorites: t, setFavorites: n, setTimeFrame: r } = e,
            s = (0, a.sJ)(u),
            l = (0, a.Zl)(c),
            { handleFavorites: d, checkFavorites: h } = ef({
              favorites: t,
              setFavorites: n,
            }),
            [m, v] = (0, o.useState)(!1);
          return (
            Y({ handleClose: () => v(!1), className: "time-frames" }),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(eI.ArrowDown, {
                  onClick: () => v(!m),
                  className: "time-frames",
                  children: (0, i.jsx)(eg, {}),
                }),
                (0, i.jsxs)(eI.Container, {
                  $isOpen: m,
                  className: "time-frames",
                  children: [
                    (0, i.jsxs)(eI.Header, {
                      open: !0,
                      className: "time-frames",
                      children: [
                        (0, i.jsxs)("summary", {
                          className: "time-frames",
                          children: [
                            (0, i.jsx)("p", { children: "MINUTES" }),
                            (0, i.jsx)(eg, {}),
                          ],
                        }),
                        (0, i.jsx)("ul", {
                          children: ek.minutes.map((e) => {
                            let {
                              title: t,
                              value: n,
                              res: o,
                              fav: a,
                              sort: c,
                            } = e;
                            return (0, i.jsxs)(
                              "li",
                              {
                                children: [
                                  (0, i.jsx)("p", {
                                    onClick: () => {
                                      var e, t;
                                      r(a),
                                        null == s ||
                                          null === (e = s.chart) ||
                                          void 0 === e ||
                                          null === (t = e.call(s)) ||
                                          void 0 === t ||
                                          t.setTimeFrame({
                                            val: {
                                              type: "period-back",
                                              value: n,
                                            },
                                            res: o,
                                          }),
                                        v(!1),
                                        l(!0);
                                    },
                                    children: t,
                                  }),
                                  (0, i.jsx)("span", {
                                    className: "time-frames",
                                    onClick: () => {
                                      d({
                                        favorite: {
                                          title: t,
                                          value: n,
                                          res: o,
                                          fav: a,
                                          sort: c,
                                        },
                                      });
                                    },
                                    children: h({ favorite: a })
                                      ? (0, i.jsx)(ew.R, {})
                                      : (0, i.jsx)(e_.r, {}),
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(eI.Header, {
                      open: !0,
                      className: "time-frames",
                      children: [
                        (0, i.jsxs)("summary", {
                          className: "time-frames",
                          children: [
                            (0, i.jsx)("p", { children: "HOURS" }),
                            (0, i.jsx)(eg, {}),
                          ],
                        }),
                        (0, i.jsx)("ul", {
                          children: ek.hours.map((e) => {
                            let {
                              title: t,
                              value: n,
                              res: o,
                              fav: a,
                              sort: c,
                            } = e;
                            return (0, i.jsxs)(
                              "li",
                              {
                                children: [
                                  (0, i.jsx)("p", {
                                    onClick: () => {
                                      var e, t;
                                      r(a),
                                        null == s ||
                                          null === (e = s.chart) ||
                                          void 0 === e ||
                                          null === (t = e.call(s)) ||
                                          void 0 === t ||
                                          t.setTimeFrame({
                                            val: {
                                              type: "period-back",
                                              value: n,
                                            },
                                            res: o,
                                          }),
                                        v(!1),
                                        l(!0);
                                    },
                                    children: t,
                                  }),
                                  (0, i.jsx)("span", {
                                    className: "time-frames",
                                    onClick: () => {
                                      d({
                                        favorite: {
                                          title: t,
                                          value: n,
                                          res: o,
                                          fav: a,
                                          sort: c,
                                        },
                                      });
                                    },
                                    children: h({ favorite: a })
                                      ? (0, i.jsx)(ew.R, {})
                                      : (0, i.jsx)(e_.r, {}),
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)(eI.Header, {
                      open: !0,
                      className: "time-frames",
                      children: [
                        (0, i.jsxs)("summary", {
                          className: "time-frames",
                          children: [
                            (0, i.jsx)("p", { children: "DAYS" }),
                            (0, i.jsx)(eg, {}),
                          ],
                        }),
                        (0, i.jsx)("ul", {
                          children: ek.days.map((e) => {
                            let {
                              title: t,
                              value: n,
                              res: o,
                              fav: a,
                              sort: c,
                            } = e;
                            return (0, i.jsxs)(
                              "li",
                              {
                                children: [
                                  (0, i.jsx)("p", {
                                    onClick: () => {
                                      var e, t;
                                      r(a),
                                        null == s ||
                                          null === (e = s.chart) ||
                                          void 0 === e ||
                                          null === (t = e.call(s)) ||
                                          void 0 === t ||
                                          t.setTimeFrame({
                                            val: {
                                              type: "period-back",
                                              value: n,
                                            },
                                            res: o,
                                          }),
                                        v(!1),
                                        l(!0);
                                    },
                                    children: t,
                                  }),
                                  (0, i.jsx)("span", {
                                    onClick: () => {
                                      d({
                                        favorite: {
                                          title: t,
                                          value: n,
                                          res: o,
                                          fav: a,
                                          sort: c,
                                        },
                                      });
                                    },
                                    children: h({ favorite: a })
                                      ? (0, i.jsx)(ew.R, {})
                                      : (0, i.jsx)(e_.r, {}),
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
      function eZ() {
        let e = (0, K.Z)([
          "\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 3.25rem;\n  background-color: ",
          ";\n  padding: 0.5rem;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n\n  svg {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (eZ = function () {
            return e;
          }),
          e
        );
      }
      function eN() {
        let e = (0, K.Z)(["\n  display: flex;\n  align-items: center;\n"]);
        return (
          (eN = function () {
            return e;
          }),
          e
        );
      }
      function eM() {
        let e = (0, K.Z)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.4069rem;\n  height: 1.5625rem;\n  padding: 0.2188rem 0.4376rem;\n  cursor: pointer;\n  background-color: ",
          ";\n\n  &:first-child {\n    border-top-left-radius: 0.2188rem;\n    border-bottom-left-radius: 0.2188rem;\n  }\n\n  &:last-child {\n    border-top-right-radius: 0.2188rem;\n    border-bottom-right-radius: 0.2188rem;\n  }\n\n  p {\n    font-family: ",
          ";\n    font-weight: 400;\n    font-size: 0.75rem;\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (eM = function () {
            return e;
          }),
          e
        );
      }
      function eF() {
        let e = (0, K.Z)([
          "\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-left: 1rem;\n\n  div {\n    display: flex;\n    align-items: center;\n  }\n\n  img {\n    cursor: pointer;\n  }\n\n  p {\n    display: flex;\n    align-items: center;\n    font-family: ",
          ";\n    font-weight: 400;\n    font-size: 0.75rem;\n    color: ",
          ";\n    cursor: pointer;\n\n    span {\n      margin-left: 0.5rem;\n    }\n  }\n",
        ]);
        return (
          (eF = function () {
            return e;
          }),
          e
        );
      }
      function eD() {
        let e = (0, K.Z)([
          "\n  height: 100%;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n\n  p {\n    display: flex;\n    align-items: center;\n    color: ",
          ";\n    font-family: ",
          ";\n    font-weight: 400;\n    font-size: 0.75rem;\n    cursor: pointer;\n\n    img {\n      margin-left: 0.375rem;\n    }\n  }\n\n  img {\n    cursor: pointer;\n  }\n",
        ]);
        return (
          (eD = function () {
            return e;
          }),
          e
        );
      }
      function eW() {
        let e = (0, K.Z)([
          "\n  display: flex;\n  align-items: center;\n\n  svg {\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (eW = function () {
            return e;
          }),
          e
        );
      }
      function ez() {
        let e = (0, K.Z)([
          "\n  svg {\n    opacity: ",
          ";\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (ez = function () {
            return e;
          }),
          e
        );
      }
      let eR = Q.ZP.div.withConfig({
          displayName: "Header.styles__Header",
          componentId: "sc-fadb8d1b-0",
        })(eZ(), (e) => {
          let { theme: t } = e;
          return t.colors.shared["01"];
        }),
        eV = Q.ZP.div.withConfig({
          displayName: "Header.styles__TimeFrames",
          componentId: "sc-fadb8d1b-1",
        })(eN()),
        eT = Q.ZP.div.withConfig({
          displayName: "Header.styles__TimeFrame",
          componentId: "sc-fadb8d1b-2",
        })(
          eM(),
          (e) => {
            let { theme: t, $selected: n } = e;
            return n ? t.colors.shared["01"] : t.colors.shared["02"];
          },
          X.i,
          (e) => {
            let { theme: t } = e;
            return t.colors.neutral.white;
          }
        ),
        eE = Q.ZP.div.withConfig({
          displayName: "Header.styles__Tools",
          componentId: "sc-fadb8d1b-3",
        })(eF(), X.i, (e) => {
          let { theme: t } = e;
          return t.colors.neutral.white;
        }),
        eU = Q.ZP.div.withConfig({
          displayName: "Header.styles__Functionalities",
          componentId: "sc-fadb8d1b-4",
        })(
          eD(),
          (e) => {
            let { theme: t } = e;
            return t.colors.neutral.white;
          },
          X.i
        ),
        eO = Q.ZP.div.withConfig({
          displayName: "Header.styles__ContentLeft",
          componentId: "sc-fadb8d1b-5",
        })(eW(), (e) => {
          let { theme: t } = e;
          return t.colors.neutral.white;
        }),
        eB = Q.ZP.div.withConfig({
          displayName: "Header.styles__UndoRedo",
          componentId: "sc-fadb8d1b-6",
        })(
          ez(),
          (e) => {
            let { $enable: t } = e;
            return t ? 1 : 0.5;
          },
          (e) => {
            let { theme: t } = e;
            return t.colors.neutral.white;
          }
        ),
        eJ = {
          Header: eR,
          TimeFrame: eT,
          TimeFrames: eV,
          Tools: eE,
          Functionalities: eU,
          ContentLeft: eO,
          UndoRedo: eB,
        },
        eG = () => {
          var e, t, n, r;
          let s = (0, a.sJ)(d.xY),
            l = (0, a.sJ)(u),
            m = (0, a.Zl)(c),
            v = (0, O.f)(),
            [p, C] = (0, a.FV)(h.x),
            [g, _] = (0, o.useState)(eA(p)),
            [w, f] = (0, o.useState)(!1),
            [y, L] = (0, o.useState)([...ek.minutes, ...ek.hours]),
            x = () => {
              f(!w);
            },
            b =
              null == l
                ? void 0
                : null === (e = l.undoRedoState) || void 0 === e
                ? void 0
                : null === (t = e.call(l)) || void 0 === t
                ? void 0
                : t.enableUndo,
            j =
              null == l
                ? void 0
                : null === (n = l.undoRedoState) || void 0 === n
                ? void 0
                : null === (r = n.call(l)) || void 0 === r
                ? void 0
                : r.enableRedo;
          return (0, i.jsxs)(eJ.Header, {
            children: [
              (0, i.jsxs)(eJ.ContentLeft, {
                children: [
                  (0, i.jsxs)(eJ.TimeFrames, {
                    children: [
                      y.map((e) =>
                        (0, i.jsx)(
                          eJ.TimeFrame,
                          {
                            $selected: e.fav === g,
                            onClick: () => {
                              var t, n;
                              g !== e.fav &&
                                (null == l ||
                                  null === (t = l.chart) ||
                                  void 0 === t ||
                                  null === (n = t.call(l)) ||
                                  void 0 === n ||
                                  n.setTimeFrame({
                                    val: {
                                      type: "period-back",
                                      value: e.value,
                                    },
                                    res: e.res,
                                  }),
                                _(e.fav),
                                v(s.symbol, e.res),
                                C(e.res),
                                m(!0));
                            },
                            children: (0, i.jsx)("p", { children: e.fav }),
                          },
                          e.res
                        )
                      ),
                      (0, i.jsx)(eJ.TimeFrame, {
                        className: "time-frames",
                        children: (0, i.jsx)(eH, {
                          favorites: y,
                          setFavorites: L,
                          setTimeFrame: _,
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)(eJ.Tools, {
                    children: [
                      (0, i.jsx)(eC, { handleTrigger: x }),
                      (0, i.jsxs)("p", {
                        onClick: () => {
                          var e, t, n;
                          return null == l
                            ? void 0
                            : null === (e = l.chart) || void 0 === e
                            ? void 0
                            : null === (t = e.call(l)) || void 0 === t
                            ? void 0
                            : null === (n = t.executeActionById) || void 0 === n
                            ? void 0
                            : n.call(t, "insertIndicator");
                        },
                        children: [
                          (0, i.jsx)(J, {}),
                          (0, i.jsx)("span", { children: "Indicators" }),
                        ],
                      }),
                      (0, i.jsx)(eJ.UndoRedo, {
                        $enable: Boolean(b),
                        onClick: () => {
                          var e, t, n;
                          null == l ||
                            null === (e = l.chart) ||
                            void 0 === e ||
                            null === (t = e.call(l)) ||
                            void 0 === t ||
                            null === (n = t.executeActionById) ||
                            void 0 === n ||
                            n.call(t, "undo"),
                            x();
                        },
                        children: (0, i.jsx)($, {}),
                      }),
                      (0, i.jsx)(eJ.UndoRedo, {
                        $enable: Boolean(j),
                        onClick: () => {
                          var e, t, n;
                          null == l ||
                            null === (e = l.chart) ||
                            void 0 === e ||
                            null === (t = e.call(l)) ||
                            void 0 === t ||
                            null === (n = t.executeActionById) ||
                            void 0 === n ||
                            n.call(t, "redo"),
                            x();
                        },
                        children: (0, i.jsx)(G, {}),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)(eJ.Functionalities, {
                children: [
                  (0, i.jsx)("div", {
                    onClick: () => {
                      var e, t, n;
                      return null == l
                        ? void 0
                        : null === (e = l.chart) || void 0 === e
                        ? void 0
                        : null === (t = e.call(l)) || void 0 === t
                        ? void 0
                        : null === (n = t.executeActionById) || void 0 === n
                        ? void 0
                        : n.call(t, "chartProperties");
                    },
                    children: (0, i.jsx)(q, {}),
                  }),
                  (0, i.jsx)("div", {
                    onClick: () => (null == l ? void 0 : l.startFullscreen()),
                    children: (0, i.jsx)(B, {}),
                  }),
                ],
              }),
            ],
          });
        },
        eq = () => {
          let { chartContainerRef: e, isTwLoaded: t } = E();
          return (0, i.jsxs)(i.Fragment, {
            children: [
              t &&
                (0, i.jsx)(U.j.Loading, {
                  children: (0, i.jsx)("img", {
                    src: "/zaros-logo-loading.gif",
                    alt: "Zaros Loading",
                    width: 210,
                    height: 210,
                    priority: !0,
                  }),
                }),
              (0, i.jsx)(eG, {}),
              (0, i.jsx)(U.j.ContainerTrade, {
                ref: e,
                id: "container-trade",
                $isHidden: t,
              }),
            ],
          });
        };
    },
  },
]);
