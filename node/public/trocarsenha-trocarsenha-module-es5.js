function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trocarsenha-trocarsenha-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/trocarsenha/trocarsenha.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trocarsenha/trocarsenha.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTrocarsenhaTrocarsenhaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<ion-content>\r\n  <nav class=\"sb-topnav navbar navbar-expand navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" href=\"index.html\">BIG BIG - Trocar senha</a><button class=\"btn btn-link btn-sm order-1 order-lg-0\" id=\"sidebarToggle\" href=\"#\"><i class=\"fas fa-bars\"></i></button\r\n    ><!-- Navbar Search-->\r\n    <form class=\"d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0\">\r\n        <div class=\"input-group\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\" />\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-primary\" type=\"button\"><i class=\"fas fa-search\"></i></button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <!-- Navbar-->\r\n    <ul class=\"navbar-nav ml-auto ml-md-0\">\r\n        <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" id=\"userDropdown\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"fas fa-user fa-fw\"></i></a>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"userDropdown\">\r\n                \r\n                <a class=\"dropdown-item\" routerLink='../central'>Voltar</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item\" routerLink='../home'>Sair</a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</nav>\r\n<div id=\"layoutSidenav\">\r\n    <div id=\"layoutSidenav_nav\">\r\n        <nav class=\"sb-sidenav accordion sb-sidenav-dark\" id=\"sidenavAccordion\">\r\n            <div class=\"sb-sidenav-menu\">\r\n               \r\n            </div>\r\n            \r\n        </nav>\r\n    </div>\r\n    <div id=\"layoutSidenav_content\">\r\n        <main>\r\n            <div class=\"container-fluid\">\r\n                <h1 class=\"mt-4\">{{nome}}</h1>\r\n                \r\n                </div>\r\n                </main>\r\n    </div>\r\n</div>\r\n \r\n<div class=\"form-group mx-sm-3 mb-2\">\r\n  <label for=\"inputPassword2\"  class=\"sr-only\">Senha antiga</label><br>\r\n  <input type=\"text\"[(ngModel)]=\"data.senha\" required class=\"form-control\" id=\"inputPassword2\" placeholder=\"Senha antiga\">\r\n</div>\r\n<div class=\"form-group mx-sm-3 mb-2\">\r\n  <label for=\"inputPassword2\"  class=\"sr-only\">Nova senha</label><br>\r\n  <input type=\"text\" [(ngModel)]=\"data.novasenha\" required class=\"form-control\" id=\"inputPassword2\" placeholder=\"Nova senha\">\r\n</div>\r\n<div class=\"form-group mx-sm-3 mb-2\">\r\n  <label for=\"inputPassword2\"  class=\"sr-only\">Senha antiga</label><br>\r\n  <input type=\"password\" [(ngModel)]=\"data.repetesenha\" required class=\"form-control\" id=\"inputPassword2\" placeholder=\"Repita sua senha\">\r\n</div>\r\n\r\n<button (click)=\"submitForm()\" style=\"text-align: center;\" type=\"button\" class=\"btn btn-primary mb-2\">Atualizar</button>\r\n\r\n</ion-content>";
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
  },

  /***/
  "./src/app/trocarsenha/trocarsenha-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/trocarsenha/trocarsenha-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: TrocarsenhaPageRoutingModule */

  /***/
  function srcAppTrocarsenhaTrocarsenhaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrocarsenhaPageRoutingModule", function () {
      return TrocarsenhaPageRoutingModule;
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


    var _trocarsenha_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./trocarsenha.page */
    "./src/app/trocarsenha/trocarsenha.page.ts");

    var routes = [{
      path: '',
      component: _trocarsenha_page__WEBPACK_IMPORTED_MODULE_3__["TrocarsenhaPage"]
    }];

    var TrocarsenhaPageRoutingModule = function TrocarsenhaPageRoutingModule() {
      _classCallCheck(this, TrocarsenhaPageRoutingModule);
    };

    TrocarsenhaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TrocarsenhaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/trocarsenha/trocarsenha.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/trocarsenha/trocarsenha.module.ts ***!
    \***************************************************/

  /*! exports provided: TrocarsenhaPageModule */

  /***/
  function srcAppTrocarsenhaTrocarsenhaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrocarsenhaPageModule", function () {
      return TrocarsenhaPageModule;
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


    var _trocarsenha_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./trocarsenha-routing.module */
    "./src/app/trocarsenha/trocarsenha-routing.module.ts");
    /* harmony import */


    var _trocarsenha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./trocarsenha.page */
    "./src/app/trocarsenha/trocarsenha.page.ts");

    var TrocarsenhaPageModule = function TrocarsenhaPageModule() {
      _classCallCheck(this, TrocarsenhaPageModule);
    };

    TrocarsenhaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _trocarsenha_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrocarsenhaPageRoutingModule"]],
      declarations: [_trocarsenha_page__WEBPACK_IMPORTED_MODULE_6__["TrocarsenhaPage"]]
    })], TrocarsenhaPageModule);
    /***/
  },

  /***/
  "./src/app/trocarsenha/trocarsenha.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/trocarsenha/trocarsenha.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTrocarsenhaTrocarsenhaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Ryb2NhcnNlbmhhL3Ryb2NhcnNlbmhhLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/trocarsenha/trocarsenha.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/trocarsenha/trocarsenha.page.ts ***!
    \*************************************************/

  /*! exports provided: TrocarsenhaPage */

  /***/
  function srcAppTrocarsenhaTrocarsenhaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrocarsenhaPage", function () {
      return TrocarsenhaPage;
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

    var TrocarsenhaPage = /*#__PURE__*/function () {
      function TrocarsenhaPage(apiService, router) {
        _classCallCheck(this, TrocarsenhaPage);

        this.apiService = apiService;
        this.router = router;
        this.data = new _models_student__WEBPACK_IMPORTED_MODULE_4__["Student"]();
      }

      _createClass(TrocarsenhaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.telefone = localStorage.getItem("telefone");
          console.log(this.telefone);
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this = this;

          if (this.data.senha != null) {
            if (this.data.novasenha != this.data.repetesenha) {
              console.log('senha diferentes');
            } else {
              this.apiService.encontrasenha(this.data.senha).subscribe(function (response) {
                if (response == null) {
                  console.log('senha não encontrada');
                } else {
                  _this.apiService.alterasenha(_this.telefone, _this.data.novasenha).subscribe(function (response) {
                    if (response == 1) {
                      console.log('sucesso');
                    }
                  });
                }
              });
            } // this.apiService.alterasenha(this.telefone, this.data.senha).subscribe((response)=>{
            //  console.log(response);
            //})

          } else {
            console.log('Deve preencher o campo senha');
          }
        }
      }]);

      return TrocarsenhaPage;
    }();

    TrocarsenhaPage.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    TrocarsenhaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-trocarsenha',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./trocarsenha.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/trocarsenha/trocarsenha.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./trocarsenha.page.scss */
      "./src/app/trocarsenha/trocarsenha.page.scss"))["default"]]
    })], TrocarsenhaPage);
    /***/
  }
}]);
//# sourceMappingURL=trocarsenha-trocarsenha-module-es5.js.map