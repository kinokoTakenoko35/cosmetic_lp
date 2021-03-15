//logo disable
window.onscroll = function () {
  let logoI = document.getElementById("logo");
  let scroll_len = $(window).scrollTop();
  let bottom_len = $("body").height() - $(window).height();
  if (scroll_len > 0 && scroll_len < bottom_len - 50) {
    logoI.style.display = "none";
  } else {
    logoI.style.display = "block";
  }
};

// webpack.config.js
var webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      IScroll: "iscroll",
    }),
  ],
};

// your-project.js
var IScroll = require("iscroll");
var $ = require("jquery");
require("jquery-drawer");

$(".drawer").drawer();

// your-project.js
IScroll = require("iscroll");
var $ = (jQuery = require("jquery"));
require("jquery-drawer");

$(".drawer").drawer();
