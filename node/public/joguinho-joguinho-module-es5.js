(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["joguinho-joguinho-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/joguinho/joguinho.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/joguinho/joguinho.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppJoguinhoJoguinhoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"game\">\r\n    <div class=itens-left>\r\n\r\n      <div class=\"itens-buttom\">\r\n\r\n\r\n        <div class=\"sorteio b\">\r\n          <div class=\"bigNumberDisplay\">\r\n          </div>\r\n          <span>Bola</span>\r\n          <img src=\"assets/b{{data.bola}}.gif\">\r\n\r\n          <audio #audioPlayer>\r\n            <!-- <source src=\"assets/{{data.bola}}.mp3\"> -->\r\n          </audio>\r\n          <span class=\"text-center\"></span>\r\n          <span class=\"text-center\">Sorteio {{data.tipo}}</span>\r\n\r\n        </div>\r\n      </div>\r\n      <button type=\"button\" (click)=\"start()\" class=\"btn btn-primary\">Iniciar</button>\r\n      <button type=\"button\" (click)=\"stop()\" class=\"btn btn-secondary\">Pausar</button>\r\n      <button type=\"button\" (click)=\"restart()\" class=\"btn btn-success\">Reiniciar</button>\r\n    </div>\r\n\r\n    <div class=\"leftColum \">\r\n\r\n      <div class=\"dados-cartoes\">\r\n        <span class=\"text-center\">Número de bolas sorteadas</span>\r\n        <span id=\"numero-sorteado\">{{data.sorteadas}}</span>\r\n        \r\n\r\n      </div>\r\n      <div class=\"bolas-que-sairam\">\r\n        <table>\r\n          <tr>\r\n            <td [ngClass]=\"{'marcar' : data.a[1] }\">{{data.a[1]||1}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[2] }\">{{data.a[2]|| 2}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[3] }\">{{data.a[3] || 3}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[4] }\">{{data.a[4] || 4}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[5] }\">{{data.a[5]|| 5}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[6] }\">{{data.a[6]|| 6}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[7] }\">{{data.a[7]||7}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[8] }\">{{data.a[8]||8}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[9] }\">{{data.a[9]||9}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[10] }\">{{data.a[10]||10}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td [ngClass]=\"{'marcar' : data.a[11] }\">{{data.a[11] || 11 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[12] }\">{{data.a[12]|| 12}} </td>\r\n            <td [ngClass]=\"{'marcar' : data.a[13] }\">{{data.a[13] || 13}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[14] }\">{{data.a[14] || 14}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[15] }\">{{data.a[15] || 15 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[16] }\">{{data.a[16] || 16 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[17] }\">{{data.a[17] || 17 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[18] }\">{{data.a[18] || 18}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[19] }\">{{data.a[19] || 19 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[20] }\">{{data.a[20] || 20 }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td [ngClass]=\"{'marcar' : data.a[21] }\">{{data.a[21] || 21 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[22] }\">{{data.a[22] || 22 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[23] }\">{{data.a[23] || 23}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[24] }\">{{data.a[24] || 24}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[25] }\">{{data.a[25] || 25 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[26] }\">{{data.a[26] || 26 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[27] }\">{{data.a[27] || 27 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[28] }\">{{data.a[28] || 28}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[29] }\">{{data.a[29] || 29 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[30] }\">{{data.a[30] || 30 }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td [ngClass]=\"{'marcar' : data.a[31] }\">{{data.a[31] || 31 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[32] }\">{{data.a[32] || 32 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[33] }\">{{data.a[33] || 33}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[34] }\">{{data.a[34] || 34}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[35] }\">{{data.a[35] || 35 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[36] }\">{{data.a[36] || 36 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[37] }\">{{data.a[37] || 37 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[38] }\">{{data.a[38] || 38}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[39] }\">{{data.a[39] || 39 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[40] }\">{{data.a[40] || 40 }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td [ngClass]=\"{'marcar' : data.a[41] }\">{{data.a[41] || 41 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[42] }\">{{data.a[42] || 42 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[43] }\">{{data.a[43] || 43}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[44] }\">{{data.a[44] || 44}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[45] }\">{{data.a[45] || 45 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[46] }\">{{data.a[46] || 46 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[47] }\">{{data.a[47] || 47 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[48] }\">{{data.a[48] || 48}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[49] }\">{{data.a[49] || 49 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[50] }\">{{data.a[50] || 50 }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td [ngClass]=\"{'marcar' : data.a[51] }\">{{data.a[51] || 51 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[52] }\">{{data.a[52] || 52 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[53] }\">{{data.a[53] || 53}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[54] }\">{{data.a[54] || 54}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[55] }\">{{data.a[55] || 55 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[56] }\">{{data.a[56] || 56 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[57] }\">{{data.a[57] || 57 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[58] }\">{{data.a[58] || 58}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[59] }\">{{data.a[59] || 59 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[60] }\">{{data.a[60] || 60 }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td [ngClass]=\"{'marcar' : data.a[61] }\">{{data.a[61] || 61 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[62] }\">{{data.a[62] || 62 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[63] }\">{{data.a[63] || 63}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[64] }\">{{data.a[64] || 64}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[65] }\">{{data.a[65] || 65 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[66] }\">{{data.a[66] || 66 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[67] }\">{{data.a[67] || 67 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[68] }\">{{data.a[68] || 68}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[69] }\">{{data.a[69] || 69 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[70] }\">{{data.a[70] || 70 }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td [ngClass]=\"{'marcar' : data.a[71] }\">{{data.a[71] || 71 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[72] }\">{{data.a[72] || 72 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[73] }\">{{data.a[73] || 73}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[74] }\">{{data.a[74] || 74}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[75] }\">{{data.a[75] || 75 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[76] }\">{{data.a[76] || 76 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[77] }\">{{data.a[77] || 77 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[78] }\">{{data.a[78] || 78}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[79] }\">{{data.a[79] || 79 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[80] }\">{{data.a[80] || 80 }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td [ngClass]=\"{'marcar' : data.a[81] }\">{{data.a[81] || 81 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[82] }\">{{data.a[82] || 82 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[83] }\">{{data.a[83] || 83}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[84] }\">{{data.a[84] || 84}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[85] }\">{{data.a[85] || 85 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[86] }\">{{data.a[86] || 86 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[87] }\">{{data.a[87] || 87 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[88] }\">{{data.a[88] || 88}}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[89] }\">{{data.a[89] || 89 }}</td>\r\n            <td [ngClass]=\"{'marcar' : data.a[90] }\">{{data.a[90] || 90 }}</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<style>\r\n  .diamante {\r\n    background-image: url(\"assets/a.png\");\r\n  }\r\n</style>";
      /***/
    },

    /***/
    "./src/app/joguinho/joguinho-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/joguinho/joguinho-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: JoguinhoPageRoutingModule */

    /***/
    function srcAppJoguinhoJoguinhoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JoguinhoPageRoutingModule", function () {
        return JoguinhoPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _joguinho_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./joguinho.page */
      "./src/app/joguinho/joguinho.page.ts");

      var routes = [{
        path: '',
        component: _joguinho_page__WEBPACK_IMPORTED_MODULE_3__["JoguinhoPage"]
      }];

      var JoguinhoPageRoutingModule = function JoguinhoPageRoutingModule() {
        _classCallCheck(this, JoguinhoPageRoutingModule);
      };

      JoguinhoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], JoguinhoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/joguinho/joguinho.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/joguinho/joguinho.module.ts ***!
      \*********************************************/

    /*! exports provided: JoguinhoPageModule */

    /***/
    function srcAppJoguinhoJoguinhoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JoguinhoPageModule", function () {
        return JoguinhoPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _joguinho_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./joguinho-routing.module */
      "./src/app/joguinho/joguinho-routing.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _joguinho_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./joguinho.page */
      "./src/app/joguinho/joguinho.page.ts");

      var JoguinhoPageModule = function JoguinhoPageModule() {
        _classCallCheck(this, JoguinhoPageModule);
      };

      JoguinhoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _joguinho_routing_module__WEBPACK_IMPORTED_MODULE_5__["JoguinhoPageRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
        declarations: [_joguinho_page__WEBPACK_IMPORTED_MODULE_7__["JoguinhoPage"]]
      })], JoguinhoPageModule);
      /***/
    },

    /***/
    "./src/app/joguinho/joguinho.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/joguinho/joguinho.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppJoguinhoJoguinhoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#mostra-numero {\n  border: 1px solid yellow;\n  color: yellow;\n  padding: 1px;\n  min-width: 60px;\n  text-align: center;\n  font-weight: 800;\n}\n\n.cartao-dados {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.cartela-diamante {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.cartela-diamante table {\n  text-align: center;\n  border: 3px inset white;\n}\n\n.chat-toggle {\n  display: flex;\n  justify-content: center;\n  max-height: 400px;\n  width: 100%;\n  transition: 1s;\n}\n\n.bolas-que-sairam table {\n  color: rgba(216, 217, 218, 0.952);\n  width: 100%;\n  text-align: center;\n  font-size: 0.8em;\n  font-weight: 700;\n  border: 2px outset white;\n}\n\n.marcar {\n  color: #0508d1;\n}\n\n.marcar-vela {\n  -webkit-text-decoration: line-through black solid;\n          text-decoration: line-through black solid;\n  color: orangered;\n}\n\n.info {\n  display: flex;\n  font-size: 10px;\n  width: 100px;\n  font-weight: 900;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n}\n\n.membronome {\n  font-weight: 900;\n}\n\n.cartoes-em-jogo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.6em;\n  font-weight: 900;\n}\n\n.saldo {\n  font-weight: 900;\n  font-size: 12px;\n}\n\n.confirma-compra {\n  margin-top: 3px;\n  font-weight: 900;\n  font-size: 10px;\n}\n\n.b {\n  box-sizing: border-box;\n  border: 2px outset white;\n  border-radius: 5px;\n  margin: 1px 1px 1px 1px;\n}\n\n.game {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  padding: 5px;\n  justify-content: center;\n  align-items: center;\n  background-color: #87cefa;\n}\n\n.itens-left {\n  display: flex;\n  height: 100%;\n  width: 60%;\n  border-radius: 2px;\n  flex-direction: column;\n}\n\n.itens-buttom {\n  padding-top: 10px;\n  display: flex;\n  height: 60%;\n}\n\n.membro-info {\n  width: 30%;\n  display: flex;\n  padding-bottom: 20px;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.compra-input {\n  border: solid 1px black;\n  height: 20px;\n  width: 30%;\n}\n\n.compra-serie {\n  display: flex;\n  flex-direction: column;\n  width: 100px;\n  font-weight: 900;\n  font-size: 8pt;\n  text-align: center;\n}\n\n.partida-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 35%;\n  padding: 3px 0 5px 0;\n}\n\n.sorteio {\n  width: 35%;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  font-weight: 800;\n  background-color: white;\n}\n\n.leftColum {\n  display: flex;\n  width: 40%;\n  height: 100%;\n  justify-content: space-around;\n  flex-direction: column;\n}\n\n.blackboard {\n  padding: 2px;\n  padding-left: 5px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  height: 50%;\n  width: 100%;\n  border: 3px ridge white;\n  border-radius: 10px;\n  background-color: black;\n}\n\n.topfive {\n  height: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n\n.cartelas {\n  color: white;\n  font-size: medium;\n  border: 1px solid white;\n  background-color: #009a98;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 2px;\n  text-align: center;\n  margin-right: 10px;\n  min-width: 80px;\n}\n\n.numeros {\n  min-width: 250px;\n  font: 1em sans-serif;\n  text-align: center;\n  color: white;\n  text-align: left;\n}\n\n.dados-cartoes {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n  min-width: 65px;\n  background-color: black;\n  font-size: 7px;\n  font-weight: 700;\n  color: darkgoldenrod;\n  font-size: 15px;\n}\n\n#numero-sorteado {\n  color: blanchedalmond;\n  font-weight: 700;\n  font-size: 15px;\n}\n\ninput:focus {\n  background-color: lightblue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9ndWluaG8vam9ndWluaG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUU7RUFFRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUF2Qjs7QUFJRTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBRDFCOztBQUtFO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUYzQjs7QUFNRTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxjQUFjO0FBSGxCOztBQU1FO0VBQ0UsaUNBQWlDO0VBQ2pDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUVoQix3QkFBd0I7QUFKNUI7O0FBT0U7RUFDRSxjQUFxQjtBQUp6Qjs7QUFPRTtFQUNFLGlEQUF5QztVQUF6Qyx5Q0FBeUM7RUFDekMsZ0JBQWdCO0FBSnBCOztBQVNFO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBTjFCOztBQVVFO0VBQ0UsZ0JBQWdCO0FBUHBCOztBQVVFO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFQcEI7O0FBV0U7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQVJuQjs7QUFZRTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQVRuQjs7QUFZRTtFQUNFLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQVQzQjs7QUFZRTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQVQ3Qjs7QUFZRTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osVUFBVTtFQUVWLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFWMUI7O0FBY0U7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFdBQVc7QUFYZjs7QUFlRTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBWnZCOztBQWVFO0VBRUUsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixVQUFVO0FBYmQ7O0FBZ0JFO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFidEI7O0FBa0JFO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixvQkFBb0I7QUFmeEI7O0FBbUJFO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFoQjNCOztBQW1CRTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFoQjFCOztBQW9CRTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBRW5CLHVCQUF1QjtBQWxCM0I7O0FBcUJFO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0FBbEJ2Qjs7QUFzQkU7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0FBbkJuQjs7QUFzQkU7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0FBbkJwQjs7QUFzQkU7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixlQUFlO0FBbkJuQjs7QUF3QkU7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFyQm5COztBQXlCRTtFQUNFLDJCQUEyQjtBQXRCL0IiLCJmaWxlIjoic3JjL2FwcC9qb2d1aW5oby9qb2d1aW5oby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbW9zdHJhLW51bWVybyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7XHJcbiAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgbWluLXdpZHRoOiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB9XHJcblxyXG4gIC5jYXJ0YW8tZGFkb3Mge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIH1cclxuXHJcbiAgLmNhcnRlbGEtZGlhbWFudGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG5cclxuICAuY2FydGVsYS1kaWFtYW50ZSB0YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDNweCBpbnNldCB3aGl0ZTtcclxuXHJcbiAgfVxyXG5cclxuICAuY2hhdC10b2dnbGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gIH1cclxuXHJcbiAgLmJvbGFzLXF1ZS1zYWlyYW0gdGFibGUge1xyXG4gICAgY29sb3I6IHJnYmEoMjE2LCAyMTcsIDIxOCwgMC45NTIpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbiAgICBib3JkZXI6IDJweCBvdXRzZXQgd2hpdGU7XHJcbiAgfVxyXG5cclxuICAubWFyY2FyIHtcclxuICAgIGNvbG9yOiByZ2IoNSwgOCwgMjA5KTtcclxuICB9XHJcblxyXG4gIC5tYXJjYXItdmVsYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCBibGFjayBzb2xpZDtcclxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgLmluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIH1cclxuXHJcbiAgLm1lbWJyb25vbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB9XHJcblxyXG4gIC5jYXJ0b2VzLWVtLWpvZ28ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuNmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuXHJcbiAgfVxyXG5cclxuICAuc2FsZG8ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgfVxyXG5cclxuICAuY29uZmlybWEtY29tcHJhIHtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAycHggb3V0c2V0IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAxcHggMXB4IDFweCAxcHg7XHJcbiAgfVxyXG5cclxuICAuZ2FtZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdjZWZhO1xyXG4gIH1cclxuXHJcbiAgLml0ZW5zLWxlZnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA2MCU7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgfVxyXG5cclxuICAuaXRlbnMtYnV0dG9tIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogNjAlO1xyXG5cclxuICB9XHJcblxyXG4gIC5tZW1icm8taW5mbyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29tcHJhLWlucHV0IHtcclxuXHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG5cclxuICAuY29tcHJhLXNlcmllIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogOHB0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICB9XHJcblxyXG5cclxuICAucGFydGlkYS1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBwYWRkaW5nOiAzcHggMCA1cHggMDtcclxuXHJcbiAgfVxyXG5cclxuICAuc29ydGVpbyB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAubGVmdENvbHVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICB9XHJcblxyXG4gIC5ibGFja2JvYXJkIHtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAzcHggcmlkZ2Ugd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLnRvcGZpdmUge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgfVxyXG5cclxuICAuY2FydGVsYXMge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlhOTg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1pbi13aWR0aDogODBweDtcclxuICB9XHJcblxyXG4gIC5udW1lcm9zIHtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBmb250OiAxZW0gc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAuZGFkb3MtY2FydG9lcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtaW4td2lkdGg6IDY1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICAjbnVtZXJvLXNvcnRlYWRvIHtcclxuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcblxyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/joguinho/joguinho.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/joguinho/joguinho.page.ts ***!
      \*******************************************/

    /*! exports provided: JoguinhoPage */

    /***/
    function srcAppJoguinhoJoguinhoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JoguinhoPage", function () {
        return JoguinhoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/api.service */
      "./src/app/services/api.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _models_student__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/student */
      "./src/app/models/student.ts");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "./node_modules/@ionic-native/screen-orientation/__ivy_ngcc__/ngx/index.js");

      var JoguinhoPage = /*#__PURE__*/function () {
        function JoguinhoPage(apiService, router, screenOrientation) {
          _classCallCheck(this, JoguinhoPage);

          this.apiService = apiService;
          this.router = router;
          this.screenOrientation = screenOrientation;
          this.bolasSorteadas = [];
          this.data = new _models_student__WEBPACK_IMPORTED_MODULE_4__["Student"]();
        }

        _createClass(JoguinhoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setLandscape();
            this.ball();
          }
        }, {
          key: "ball",
          value: function ball() {
            this.data.numeros = new Set();

            while (this.data.numeros.size < 90) {
              this.data.numeros.add(Math.floor(Math.random() * 90) + 1);
            }

            this.data.numeros = Array.from(this.data.numeros);
          }
        }, {
          key: "setLandscape",
          value: function setLandscape() {
            // set to landscape
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE).then(function () {})["catch"](function (err) {
              return console.log('device não suporta screenOrientation');
            });
          }
        }, {
          key: "timer",
          value: function timer(time) {
            return new Promise(function (resolve) {
              return setTimeout(resolve, time);
            });
          }
        }, {
          key: "start",
          value: function start() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _iterator, _step, bola, audio;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.parar = false;
                      _iterator = _createForOfIteratorHelper(this.data.numeros);
                      _context.prev = 2;

                      _iterator.s();

                    case 4:
                      if ((_step = _iterator.n()).done) {
                        _context.next = 17;
                        break;
                      }

                      bola = _step.value;

                      if (!this.parar) {
                        _context.next = 8;
                        break;
                      }

                      return _context.abrupt("break", 17);

                    case 8:
                      this.data.bola = bola;
                      audio = new Audio();
                      audio.src = "assets/".concat(bola, ".mp3");
                      audio.load();
                      audio.play();
                      _context.next = 15;
                      return this.timer(3000);

                    case 15:
                      _context.next = 4;
                      break;

                    case 17:
                      _context.next = 22;
                      break;

                    case 19:
                      _context.prev = 19;
                      _context.t0 = _context["catch"](2);

                      _iterator.e(_context.t0);

                    case 22:
                      _context.prev = 22;

                      _iterator.f();

                      return _context.finish(22);

                    case 25:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[2, 19, 22, 25]]);
            }));
          }
        }, {
          key: "stop",
          value: function stop() {
            this.parar = true;
          }
        }, {
          key: "restart",
          value: function restart() {
            this.parar = true;
            this.ball();
            this.start();
          }
        }]);

        return JoguinhoPage;
      }();

      JoguinhoPage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__["ScreenOrientation"]
        }];
      };

      JoguinhoPage.propDecorators = {
        audioPlayerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['audioOption']
        }]
      };
      JoguinhoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-joguinho',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./joguinho.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/joguinho/joguinho.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./joguinho.page.scss */
        "./src/app/joguinho/joguinho.page.scss"))["default"]]
      })], JoguinhoPage);
      /***/
    },

    /***/
    "./src/app/services/api.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/services/api.service.ts ***!
      \*****************************************/

    /*! exports provided: ApiService */

    /***/
    function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http; // API path

          this.base_path = 'https://bigbig.net.br/bingao'; // Http Options

          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        } // Handle API errors


        _createClass(ApiService, [{
          key: "handleError",
          value: function handleError(error) {
            if (error.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('An error occurred:', error.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
            } // return an observable with a user-facing error message


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
          }
        }, {
          key: "traz",
          // Create a new item
          // Get single student data by ID
          value: function traz() {
            return this.http.get(this.base_path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "sorteio",
          value: function sorteio(bola) {
            return this.http.get(this.base_path + '/a/' + bola).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "login",
          value: function login(telefone, senha) {
            return this.http.get(this.base_path + '/buscalogin/' + telefone + '/' + senha).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "registro",
          value: function registro(nome, sobre, senha, telefone, indicou) {
            return this.http.get(this.base_path + '/buscaregistro/' + nome + '/' + sobre + '/' + telefone + '/' + senha + '/' + indicou).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "pegaagente",
          value: function pegaagente(nome) {
            return this.http.get(this.base_path + '/pegaagente/' + nome).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "compracartela",
          value: function compracartela(nome, quantidade) {
            return this.http.get(this.base_path + '/inserecartao1/' + nome + '/' + quantidade).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "home",
          value: function home(telefone) {
            return this.http.get(this.base_path + '/buscahome/' + telefone).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "buscapartida",
          value: function buscapartida(partida) {
            return this.http.get(this.base_path + '/buscapartida/' + partida).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "alterasaldo",
          value: function alterasaldo(telefone, saldo) {
            return this.http.get(this.base_path + '/alterasaldo/' + telefone + '/' + saldo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "ganhadorlinha",
          value: function ganhadorlinha(telefone, linha) {
            return this.http.get(this.base_path + '/ganhadorlinha/' + telefone + '/' + linha).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "ganhadorbingo",
          value: function ganhadorbingo(telefone, bingo) {
            return this.http.get(this.base_path + '/ganhadorbingo/' + telefone + '/' + bingo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "buscacartela",
          value: function buscacartela(cartela, nome, partida) {
            return this.http.get(this.base_path + "/compra/".concat(nome, "/") + cartela + "/" + partida).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "trazcartela",
          value: function trazcartela(jogador) {
            return this.http.get(this.base_path + '/trazcartela/' + jogador).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "trazsala",
          value: function trazsala() {
            return this.http.get(this.base_path + '/salas').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "alterasenha",
          value: function alterasenha(telefone, senha) {
            return this.http.get(this.base_path + '/alterasenha/' + telefone + '/' + senha).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "encontrasenha",
          value: function encontrasenha(telefone) {
            return this.http.get(this.base_path + '/encontrasenha/' + telefone).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "pegaposicao",
          value: function pegaposicao(telefone) {
            return this.http.get(this.base_path + '/pegaposicao/' + telefone).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "comecajogo",
          value: function comecajogo(sala, dia, mes) {
            return this.http.get(this.base_path + '/pegarpartida/' + sala + '/' + dia + '/' + mes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "fezlinha",
          value: function fezlinha(jogador, linha, partida) {
            return this.http.get(this.base_path + '/ganhadorlinha/' + jogador + '/' + linha + '/' + partida).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "fezbingo",
          value: function fezbingo(jogador, bingo, partida) {
            return this.http.get(this.base_path + '/ganhadorbingo/' + jogador + '/' + bingo + '/' + partida).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "mudapartida",
          value: function mudapartida(sala, partida) {
            return this.http.get(this.base_path + '/proxima/' + sala + '/' + partida).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "deulinha",
          value: function deulinha(partida) {
            return this.http.get(this.base_path + '/fezlinha/' + partida).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "deubingo",
          value: function deubingo(partida) {
            return this.http.get(this.base_path + '/fezbingo/' + partida).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "proxima",
          value: function proxima(sala, _proxima) {
            return this.http.get(this.base_path + '/proxima/' + sala + '/' + _proxima).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ApiService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=joguinho-joguinho-module-es5.js.map