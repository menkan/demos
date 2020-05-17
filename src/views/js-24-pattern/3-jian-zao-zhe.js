/**
 * 建造者模式
 * Description：将一个复杂的逻辑有条理的分工来一步步的实现
 *
 * effect:
 * 分布创建一个复杂的对象或实现一个复杂的功能
 * 解耦封装过程、不关注具体细节
 */

/**
 * HTML
<canvas id="canvas"></canvas>
 */

(function (global) {
  "use strict";

  function DrawVerificationCode(el, options) {
    this.el = typeof el === "string" ? document.querySelector(el) : el;
    this.options = (options && options) || {};
  }
  DrawVerificationCode.prototype = {
    constructor: DrawVerificationCode,
    // 初始化 Draw verification code Event
    init: function () {
      const el = this.el;
      if (!el.getContext) {
        console.error(">>>>>>> Error, 该Dom元素不是Canvas标签");
        return false;
      }
      const _OPTIONS = this.options;
      let ctx = el.getContext("2d"),
        cw = (el.width = _OPTIONS.width || 120),
        ch = (el.height = _OPTIONS.height || 50),
        textLen = _OPTIONS.textLen || 4,
        lineNum = _OPTIONS.lineNum || 4;
      let text = this.randomText(textLen);

      this.onClick(ctx, textLen, lineNum, cw, ch);
      this.drawLine(ctx, lineNum, cw, ch);
      this.drawText(ctx, text, ch);
    },

    onClick(ctx, textLen, lineNum, cw, ch) {
      let _ = this;
      _.el.addEventListener(
        "click",
        function () {
          let text = _.randomText(textLen);
          _.drawLine(ctx, lineNum, cw, ch);
          _.drawText(ctx, text, ch);
        },
        false
      );
    },

    drawLine(ctx, lineNum, cw, ch) {
      ctx.clearRect(0, 0, cw, ch);
      for (let i = 0; i < lineNum; i++) {
        let dx1 = Math.random() * cw,
          dy1 = Math.random() * ch,
          dx2 = Math.random() * cw,
          dy2 = Math.random() * ch;
        ctx.strokeStyle = `rgb(${Math.random() * 255}, ${
          Math.random() * 255
        }, ${Math.random() * 255})`;
        ctx.beginPath();
        ctx.moveTo(dx1, dy1);
        ctx.lineTo(dx2, dy2);
        ctx.stroke();
      }
    },
    drawText(ctx, text, ch) {
      let len = text.length;
      for (let i = 0; i < len; i++) {
        let dx = 30 * Math.random() + 30 * i,
          dy = Math.random() * 5 + ch / 2;
        ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        })`;
        ctx.font = "30px Helvetica";
        ctx.textBaseline = "middle";
        ctx.fillText(text[i], dx, dy);
      }
    },

    //  随机文字
    randomText(len) {
      let source = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      let result = [];
      let sourceLen = source.length;
      for (let i = 0; i < len; i++) {
        result.push(this.generateUniqueText(source, result, sourceLen));
      }
      return result;
    },

    //  唯一文字
    generateUniqueText(source, hasList, limit) {
      let text = source[Math.floor(Math.random() * limit)];
      if (hasList.indexOf(text) > -1)
        return this.generateUniqueText(source, hasList, limit);
      else return text;
    },
  };
  global.DrawVerificationCode = DrawVerificationCode;
})(window);

let drawVification = new DrawVerificationCode("#canvas", {
  lineNum: 6,
});
drawVification.init();
