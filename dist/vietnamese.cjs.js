'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./vietnamese.cjs.prod.js");
} else {
  module.exports = require("./vietnamese.cjs.dev.js");
}
