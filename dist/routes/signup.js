"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express["default"])();
router.get('/signup', function (req, res, next) {
  res.status(200).json({
    message: 'Please sign up'
  });
});
var _default = router;
exports["default"] = _default;