(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n    <div class=\"login-form\">\r\n      <form role=\"form\">\r\n          <fieldset>\r\n              <h2>Login</h2>\r\n              <hr class=\"colorgraph\">\r\n              <div class=\"form-group\">\r\n                  <input type=\"number\" [(ngModel)]=\"data.telefone\" name=\"dfsdfsd\" id=\"asdasd\" class=\"form-control input-lg\" placeholder=\"Digite telefone\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <input type=\"password\" [(ngModel)]=\"data.password\" name=\"password\" id=\"password\" class=\"form-control input-lg\" placeholder=\"Digite sua senha\">\r\n              </div>\r\n              <span class=\"button-checkbox\">\r\n                  <button type=\"button\" class=\"btn\" data-color=\"info\">Me lembre</button>\r\n                  <input type=\"checkbox\" name=\"remember_me\" id=\"remember_me\" checked=\"checked\" class=\"hidden\">\r\n                  <span>\r\n                    <a routerLink='../senhaperdida' class=\"btn btn-link pull-right\">Perdeu a senha?</a>\r\n              </span>\r\n              </span>\r\n              <hr class=\"colorgraph\">\r\n              <div class=\"buttons-login\">\r\n                  <div  class=\"btn-inputs\">\r\n                    <a routerLink='../registro' class=\"btn btn-lg btn-primary btn-block\">Registrar</a>\r\n                     \r\n                  </div>\r\n                  <div class=\"btn-inside\"> </div>\r\n                  <div class=\"btn-inputs\" id=\"registrar\" >\r\n                    <input type=\"button\"  (click)=\"submitForm()\" class=\"btn btn-lg btn-success btn-block\" value=\"Logar\">\r\n                  </div>\r\n              </div>\r\n          </fieldset>\r\n      </form>\r\n    </div>\r\n    \r\n    <script type=\"text/javascript\">\r\n    $(function(){\r\n    $('.button-checkbox').each(function(){\r\n      var $widget = $(this),\r\n          $button = $widget.find('button'),\r\n          $checkbox = $widget.find('input:checkbox'),\r\n          color = $button.data('color'),\r\n          settings = {\r\n                  on: {\r\n                      icon: 'glyphicon glyphicon-check'\r\n                  },\r\n                  off: {\r\n                      icon: 'glyphicon glyphicon-unchecked'\r\n                  }\r\n          };\r\n    \r\n      $button.on('click', function () {\r\n          $checkbox.prop('checked', !$checkbox.is(':checked'));\r\n          $checkbox.triggerHandler('change');\r\n          updateDisplay();\r\n      });\r\n    \r\n      $checkbox.on('change', function () {\r\n          updateDisplay();\r\n      });\r\n    \r\n      function updateDisplay() {\r\n          var isChecked = $checkbox.is(':checked');\r\n          // Set the button's state\r\n          $button.data('state', (isChecked) ? \"on\" : \"off\");\r\n    \r\n          // Set the button's icon\r\n          $button.find('.state-icon')\r\n              .removeClass()\r\n              .addClass('state-icon ' + settings[$button.data('state')].icon);\r\n    \r\n          // Update the button's color\r\n          if (isChecked) {\r\n              $button\r\n                  .removeClass('btn-default')\r\n                  .addClass('btn-' + color + ' active');\r\n          }\r\n          else\r\n          {\r\n              $button\r\n                  .removeClass('btn-' + color + ' active')\r\n                  .addClass('btn-default');\r\n          }\r\n      }\r\n      function init() {\r\n          updateDisplay();\r\n          // Inject the icon if applicable\r\n          if ($button.find('.state-icon').length == 0) {\r\n              $button.prepend('<i class=\"state-icon ' + settings[$button.data('state')].icon + '\"></i> ');\r\n          }\r\n      }\r\n      init();\r\n    });\r\n    });\t\r\n    </script>\r\n    </ion-content>\r\n    <style>\r\n        .login-form{\r\n        padding-top: 30px;\r\n        margin: 0;\r\n        display: -webkit-box;\r\n        display: -moz-box;\r\n        display: -ms-flexbox;\r\n        display: -webkit-flex;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        }\r\n    \r\n        .buttons-login{\r\n        display:flex;\r\n        justify-content: center;\r\n        flex-direction: row;  \r\n        flex-grow: 1;  \r\n        align-content: space-between;\r\n        flex-wrap: nowrap;\r\n    \r\n        }\r\n    \r\n        .btn-inputs {\r\n        width: 45%;\r\n        }\r\n        .btn-inside{\r\n        width: 10%;\r\n        }\r\n    </style>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".colorgraph {\n  height: 5px;\n  border-top: 0;\n  background: #c4e17f;\n  border-radius: 5px;\n  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBSWxCLG1RQUFtUTtBQUN2USIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvcmdyYXBoIHtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYm9yZGVyLXRvcDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNjNGUxN2Y7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjYzRlMTdmLCAjYzRlMTdmIDEyLjUlLCAjZjdmZGNhIDEyLjUlLCAjZjdmZGNhIDI1JSwgI2ZlY2Y3MSAyNSUsICNmZWNmNzEgMzcuNSUsICNmMDc3NmMgMzcuNSUsICNmMDc3NmMgNTAlLCAjZGI5ZGJlIDUwJSwgI2RiOWRiZSA2Mi41JSwgI2M0OWNkZSA2Mi41JSwgI2M0OWNkZSA3NSUsICM2NjlhZTEgNzUlLCAjNjY5YWUxIDg3LjUlLCAjNjJjMmU0IDg3LjUlLCAjNjJjMmU0KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICNjNGUxN2YsICNjNGUxN2YgMTIuNSUsICNmN2ZkY2EgMTIuNSUsICNmN2ZkY2EgMjUlLCAjZmVjZjcxIDI1JSwgI2ZlY2Y3MSAzNy41JSwgI2YwNzc2YyAzNy41JSwgI2YwNzc2YyA1MCUsICNkYjlkYmUgNTAlLCAjZGI5ZGJlIDYyLjUlLCAjYzQ5Y2RlIDYyLjUlLCAjYzQ5Y2RlIDc1JSwgIzY2OWFlMSA3NSUsICM2NjlhZTEgODcuNSUsICM2MmMyZTQgODcuNSUsICM2MmMyZTQpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICNjNGUxN2YsICNjNGUxN2YgMTIuNSUsICNmN2ZkY2EgMTIuNSUsICNmN2ZkY2EgMjUlLCAjZmVjZjcxIDI1JSwgI2ZlY2Y3MSAzNy41JSwgI2YwNzc2YyAzNy41JSwgI2YwNzc2YyA1MCUsICNkYjlkYmUgNTAlLCAjZGI5ZGJlIDYyLjUlLCAjYzQ5Y2RlIDYyLjUlLCAjYzQ5Y2RlIDc1JSwgIzY2OWFlMSA3NSUsICM2NjlhZTEgODcuNSUsICM2MmMyZTQgODcuNSUsICM2MmMyZTQpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYzRlMTdmLCAjYzRlMTdmIDEyLjUlLCAjZjdmZGNhIDEyLjUlLCAjZjdmZGNhIDI1JSwgI2ZlY2Y3MSAyNSUsICNmZWNmNzEgMzcuNSUsICNmMDc3NmMgMzcuNSUsICNmMDc3NmMgNTAlLCAjZGI5ZGJlIDUwJSwgI2RiOWRiZSA2Mi41JSwgI2M0OWNkZSA2Mi41JSwgI2M0OWNkZSA3NSUsICM2NjlhZTEgNzUlLCAjNjY5YWUxIDg3LjUlLCAjNjJjMmU0IDg3LjUlLCAjNjJjMmU0KTtcclxuICB9ICAgIl19 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_student__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/student */ "./src/app/models/student.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let LoginPage = class LoginPage {
    constructor(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.data = new _models_student__WEBPACK_IMPORTED_MODULE_2__["Student"]();
    }
    ngOnInit() {
    }
    submitForm() {
        console.log(this.data.password);
        console.log(this.data.telefone);
        // this.router.navigate(['central']);
        this.apiService.login(this.data.telefone, this.data.password).subscribe((response) => {
            // console.log(response);
            if (response !== null && response !== undefined) {
                if (response['indicou'] == '0000000000') {
                    this.router.navigate(['joguinho']);
                }
                else {
                    if (response['banido'] != 1) {
                        localStorage.setItem("telefone", response['telefone']);
                        localStorage.setItem("indicou", response['indicou']);
                        this.router.navigate(['central']);
                    }
                    else {
                        alert('Usuario banido!');
                    }
                }
            }
            else {
                alert('Usuario ou senha incorretos');
                this.router.navigate(['login']);
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        // API path
        this.base_path = 'https://bigbig.net.br/bingao';
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // Handle API errors
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
    ;
    // Create a new item
    // Get single student data by ID
    traz() {
        return this.http
            .get(this.base_path)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    sorteio(bola) {
        return this.http
            .get(this.base_path + '/a/' + bola)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    login(telefone, senha) {
        return this.http
            .get(this.base_path + '/buscalogin/' + telefone + '/' + senha)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    registro(nome, sobre, senha, telefone, indicou) {
        return this.http
            .get(this.base_path + '/buscaregistro/' + nome + '/' + sobre + '/' + telefone + '/' + senha + '/' + indicou)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    pegaagente(nome) {
        return this.http
            .get(this.base_path + '/pegaagente/' + nome)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    compracartela(nome, quantidade) {
        return this.http
            .get(this.base_path + '/inserecartao1/' + nome + '/' + quantidade)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    home(telefone) {
        return this.http
            .get(this.base_path + '/buscahome/' + telefone)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    buscapartida(partida) {
        return this.http
            .get(this.base_path + '/buscapartida/' + partida)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    alterasaldo(telefone, saldo) {
        return this.http
            .get(this.base_path + '/alterasaldo/' + telefone + '/' + saldo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    ganhadorlinha(telefone, linha) {
        return this.http
            .get(this.base_path + '/ganhadorlinha/' + telefone + '/' + linha)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    ganhadorbingo(telefone, bingo) {
        return this.http
            .get(this.base_path + '/ganhadorbingo/' + telefone + '/' + bingo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    buscacartela(cartela, nome, partida) {
        return this.http
            .get(this.base_path + `/compra/${nome}/` + cartela + `/` + partida)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    trazcartela(jogador) {
        return this.http
            .get(this.base_path + '/trazcartela/' + jogador)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    trazsala() {
        return this.http
            .get(this.base_path + '/salas')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    alterasenha(telefone, senha) {
        return this.http
            .get(this.base_path + '/alterasenha/' + telefone + '/' + senha)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    encontrasenha(telefone) {
        return this.http
            .get(this.base_path + '/encontrasenha/' + telefone)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    pegaposicao(telefone) {
        return this.http
            .get(this.base_path + '/pegaposicao/' + telefone)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    comecajogo(sala, dia, mes) {
        return this.http
            .get(this.base_path + '/pegarpartida/' + sala + '/' + dia + '/' + mes)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    fezlinha(jogador, linha, partida) {
        return this.http
            .get(this.base_path + '/ganhadorlinha/' + jogador + '/' + linha + '/' + partida)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    fezbingo(jogador, bingo, partida) {
        return this.http
            .get(this.base_path + '/ganhadorbingo/' + jogador + '/' + bingo + '/' + partida)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    mudapartida(sala, partida) {
        return this.http
            .get(this.base_path + '/proxima/' + sala + '/' + partida)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deulinha(partida) {
        return this.http
            .get(this.base_path + '/fezlinha/' + partida)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deubingo(partida) {
        return this.http
            .get(this.base_path + '/fezbingo/' + partida)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    proxima(sala, proxima) {
        return this.http
            .get(this.base_path + '/proxima/' + sala + '/' + proxima)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map