function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuracao-configuracao-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/configuracao/configuracao.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/configuracao/configuracao.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfiguracaoConfiguracaoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<ion-content>\r\n  <nav class=\"sb-topnav navbar navbar-expand navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" href=\"index.html\">BIG BIG - Configuração</a><button class=\"btn btn-link btn-sm order-1 order-lg-0\" id=\"sidebarToggle\" href=\"#\"><i class=\"fas fa-bars\"></i></button\r\n    ><!-- Navbar Search-->\r\n    <form class=\"d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0\">\r\n        <div class=\"input-group\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\" />\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-primary\" type=\"button\"><i class=\"fas fa-search\"></i></button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <!-- Navbar-->\r\n    <ul class=\"navbar-nav ml-auto ml-md-0\">\r\n        <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" id=\"userDropdown\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fas fa-user fa-fw\"></i></a>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"userDropdown\">\r\n                \r\n                <a class=\"dropdown-item\" routerLink='../central'>Voltar</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item\" routerLink='../home'>Sair</a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</nav>\r\n<div id=\"layoutSidenav\">\r\n    <div id=\"layoutSidenav_nav\">\r\n        <nav class=\"sb-sidenav accordion sb-sidenav-dark\" id=\"sidenavAccordion\">\r\n            <div class=\"sb-sidenav-menu\">\r\n               \r\n            </div>\r\n            \r\n        </nav>\r\n    </div>\r\n    <div id=\"layoutSidenav_content\">\r\n        <main>\r\n            <div class=\"container-fluid\">\r\n                <h1 class=\"mt-4\">Bem vindo {{nome}}</h1>\r\n                <ol class=\"breadcrumb mb-4\">\r\n                    <li class=\"breadcrumb-item active\">Você tem  de saldo {{saldo}}</li>\r\n                </ol>\r\n                </div>\r\n                </main>\r\n    </div>\r\n</div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/configuracao/configuracao-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/configuracao/configuracao-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ConfiguracaoPageRoutingModule */

  /***/
  function srcAppConfiguracaoConfiguracaoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguracaoPageRoutingModule", function () {
      return ConfiguracaoPageRoutingModule;
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


    var _configuracao_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./configuracao.page */
    "./src/app/configuracao/configuracao.page.ts");

    var routes = [{
      path: '',
      component: _configuracao_page__WEBPACK_IMPORTED_MODULE_3__["ConfiguracaoPage"]
    }];

    var ConfiguracaoPageRoutingModule = function ConfiguracaoPageRoutingModule() {
      _classCallCheck(this, ConfiguracaoPageRoutingModule);
    };

    ConfiguracaoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConfiguracaoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/configuracao/configuracao.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/configuracao/configuracao.module.ts ***!
    \*****************************************************/

  /*! exports provided: ConfiguracaoPageModule */

  /***/
  function srcAppConfiguracaoConfiguracaoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguracaoPageModule", function () {
      return ConfiguracaoPageModule;
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


    var _configuracao_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./configuracao-routing.module */
    "./src/app/configuracao/configuracao-routing.module.ts");
    /* harmony import */


    var _configuracao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./configuracao.page */
    "./src/app/configuracao/configuracao.page.ts");

    var ConfiguracaoPageModule = function ConfiguracaoPageModule() {
      _classCallCheck(this, ConfiguracaoPageModule);
    };

    ConfiguracaoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _configuracao_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfiguracaoPageRoutingModule"]],
      declarations: [_configuracao_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracaoPage"]]
    })], ConfiguracaoPageModule);
    /***/
  },

  /***/
  "./src/app/configuracao/configuracao.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/configuracao/configuracao.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfiguracaoConfiguracaoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNhby9jb25maWd1cmFjYW8ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/configuracao/configuracao.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/configuracao/configuracao.page.ts ***!
    \***************************************************/

  /*! exports provided: ConfiguracaoPage */

  /***/
  function srcAppConfiguracaoConfiguracaoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfiguracaoPage", function () {
      return ConfiguracaoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ConfiguracaoPage = /*#__PURE__*/function () {
      function ConfiguracaoPage() {
        _classCallCheck(this, ConfiguracaoPage);
      }

      _createClass(ConfiguracaoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConfiguracaoPage;
    }();

    ConfiguracaoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-configuracao',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./configuracao.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/configuracao/configuracao.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./configuracao.page.scss */
      "./src/app/configuracao/configuracao.page.scss"))["default"]]
    })], ConfiguracaoPage);
    /***/
  }
}]);
//# sourceMappingURL=configuracao-configuracao-module-es5.js.map