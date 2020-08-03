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


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>joguinho</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
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


    var _joguinho_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./joguinho.page */
    "./src/app/joguinho/joguinho.page.ts");

    var JoguinhoPageModule = function JoguinhoPageModule() {
      _classCallCheck(this, JoguinhoPageModule);
    };

    JoguinhoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _joguinho_routing_module__WEBPACK_IMPORTED_MODULE_5__["JoguinhoPageRoutingModule"]],
      declarations: [_joguinho_page__WEBPACK_IMPORTED_MODULE_6__["JoguinhoPage"]]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvZ3VpbmhvL2pvZ3VpbmhvLnBhZ2Uuc2NzcyJ9 */";
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

    var JoguinhoPage = /*#__PURE__*/function () {
      function JoguinhoPage() {
        _classCallCheck(this, JoguinhoPage);
      }

      _createClass(JoguinhoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JoguinhoPage;
    }();

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
  }
}]);
//# sourceMappingURL=joguinho-joguinho-module-es5.js.map