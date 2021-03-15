//burger
// document.getElementById("navBtn").onclick = function () {
//   document.querySelector("html").classList.toggle("open");
// };

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
