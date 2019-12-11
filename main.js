window.onload = function () {
  new Vue({
    el: '#app',
    data: {
      page: "home",
      oldY: -1,
      maxScroll: 0
    },
    methods: {
      changeBack: function () {
        var Y = window.scrollY;
        if (this.oldY != Y) {
          this.oldY = Y;
          if (this.maxScroll == Infinity) {
            this.maxScroll = 0;
          }
          var hue = (Y * this.maxScroll + 185) | 0;
          var hsl = "hsl(" + hue + ", 93%, 51%)";
          document.body.style.backgroundColor = hsl;
        }
      }
    },
    mounted: function () {
      window.addEventListener("scroll", () => {
        this.changeBack();
      });
    },
    updated: function () {
      this.maxScroll = 50 / (window.scrollMaxY || document.documentElement.scrollHeight - document.documentElement.clientHeight);
    }
  })
}

// 185 - 235