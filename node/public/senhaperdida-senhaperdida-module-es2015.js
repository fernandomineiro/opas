(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["senhaperdida-senhaperdida-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/senhaperdida/senhaperdida.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/senhaperdida/senhaperdida.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"container\">\r\n\r\n      <div class=\"row\" style=\"margin-top:20px\">\r\n          <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\r\n              <form role=\"form\">\r\n                  <fieldset>\r\n                      <h2>Recuperar senha do BIG BIG</h2>\r\n                      <hr class=\"colorgraph\">\r\n                      <div class=\"form-group\">\r\n                          <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control input-lg\" placeholder=\"Digite seu email\">\r\n                      </div>\r\n                      <hr class=\"colorgraph\">\r\n                      <div class=\"row\">\r\n                          <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                              <input type=\"submit\" class=\"btn btn-lg btn-success btn-block\" value=\"Enviar\">\r\n                          </div>\r\n                          <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                              <a [routerLink]=\"['/login']\" class=\"btn btn-lg btn-primary btn-block\">Voltar</a>\r\n                          </div>\r\n                      </div>\r\n                  </fieldset>\r\n              </form>\r\n          </div>\r\n      </div>\r\n      \r\n      </div>\t<script type=\"text/javascript\">\r\n          $(function(){\r\n          $('.button-checkbox').each(function(){\r\n              var $widget = $(this),\r\n                  $button = $widget.find('button'),\r\n                  $checkbox = $widget.find('input:checkbox'),\r\n                  color = $button.data('color'),\r\n                  settings = {\r\n                          on: {\r\n                              icon: 'glyphicon glyphicon-check'\r\n                          },\r\n                          off: {\r\n                              icon: 'glyphicon glyphicon-unchecked'\r\n                          }\r\n                  };\r\n      \r\n              $button.on('click', function () {\r\n                  $checkbox.prop('checked', !$checkbox.is(':checked'));\r\n                  $checkbox.triggerHandler('change');\r\n                  updateDisplay();\r\n              });\r\n      \r\n              $checkbox.on('change', function () {\r\n                  updateDisplay();\r\n              });\r\n      \r\n              function updateDisplay() {\r\n                  var isChecked = $checkbox.is(':checked');\r\n                  // Set the button's state\r\n                  $button.data('state', (isChecked) ? \"on\" : \"off\");\r\n      \r\n                  // Set the button's icon\r\n                  $button.find('.state-icon')\r\n                      .removeClass()\r\n                      .addClass('state-icon ' + settings[$button.data('state')].icon);\r\n      \r\n                  // Update the button's color\r\n                  if (isChecked) {\r\n                      $button\r\n                          .removeClass('btn-default')\r\n                          .addClass('btn-' + color + ' active');\r\n                  }\r\n                  else\r\n                  {\r\n                      $button\r\n                          .removeClass('btn-' + color + ' active')\r\n                          .addClass('btn-default');\r\n                  }\r\n              }\r\n              function init() {\r\n                  updateDisplay();\r\n                  // Inject the icon if applicable\r\n                  if ($button.find('.state-icon').length == 0) {\r\n                      $button.prepend('<i class=\"state-icon ' + settings[$button.data('state')].icon + '\"></i> ');\r\n                  }\r\n              }\r\n              init();\r\n          });\r\n      });\t</script>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/senhaperdida/senhaperdida-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/senhaperdida/senhaperdida-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SenhaperdidaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenhaperdidaPageRoutingModule", function() { return SenhaperdidaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _senhaperdida_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./senhaperdida.page */ "./src/app/senhaperdida/senhaperdida.page.ts");




const routes = [
    {
        path: '',
        component: _senhaperdida_page__WEBPACK_IMPORTED_MODULE_3__["SenhaperdidaPage"]
    }
];
let SenhaperdidaPageRoutingModule = class SenhaperdidaPageRoutingModule {
};
SenhaperdidaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SenhaperdidaPageRoutingModule);



/***/ }),

/***/ "./src/app/senhaperdida/senhaperdida.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/senhaperdida/senhaperdida.module.ts ***!
  \*****************************************************/
/*! exports provided: SenhaperdidaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenhaperdidaPageModule", function() { return SenhaperdidaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _senhaperdida_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./senhaperdida-routing.module */ "./src/app/senhaperdida/senhaperdida-routing.module.ts");
/* harmony import */ var _senhaperdida_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./senhaperdida.page */ "./src/app/senhaperdida/senhaperdida.page.ts");







let SenhaperdidaPageModule = class SenhaperdidaPageModule {
};
SenhaperdidaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _senhaperdida_routing_module__WEBPACK_IMPORTED_MODULE_5__["SenhaperdidaPageRoutingModule"]
        ],
        declarations: [_senhaperdida_page__WEBPACK_IMPORTED_MODULE_6__["SenhaperdidaPage"]]
    })
], SenhaperdidaPageModule);



/***/ }),

/***/ "./src/app/senhaperdida/senhaperdida.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/senhaperdida/senhaperdida.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".colorgraph {\n  height: 5px;\n  border-top: 0;\n  background: #c4e17f;\n  border-radius: 5px;\n  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VuaGFwZXJkaWRhL0M6XFxwcm9qZWN0c1xcb3Bhcy9zcmNcXGFwcFxcc2VuaGFwZXJkaWRhXFxzZW5oYXBlcmRpZGEucGFnZS5zY3NzIiwic3JjL2FwcC9zZW5oYXBlcmRpZGEvc2VuaGFwZXJkaWRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUlsQixtUUFBbVE7QUNDdlEiLCJmaWxlIjoic3JjL2FwcC9zZW5oYXBlcmRpZGEvc2VuaGFwZXJkaWRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvcmdyYXBoIHtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYm9yZGVyLXRvcDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNjNGUxN2Y7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjYzRlMTdmLCAjYzRlMTdmIDEyLjUlLCAjZjdmZGNhIDEyLjUlLCAjZjdmZGNhIDI1JSwgI2ZlY2Y3MSAyNSUsICNmZWNmNzEgMzcuNSUsICNmMDc3NmMgMzcuNSUsICNmMDc3NmMgNTAlLCAjZGI5ZGJlIDUwJSwgI2RiOWRiZSA2Mi41JSwgI2M0OWNkZSA2Mi41JSwgI2M0OWNkZSA3NSUsICM2NjlhZTEgNzUlLCAjNjY5YWUxIDg3LjUlLCAjNjJjMmU0IDg3LjUlLCAjNjJjMmU0KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICNjNGUxN2YsICNjNGUxN2YgMTIuNSUsICNmN2ZkY2EgMTIuNSUsICNmN2ZkY2EgMjUlLCAjZmVjZjcxIDI1JSwgI2ZlY2Y3MSAzNy41JSwgI2YwNzc2YyAzNy41JSwgI2YwNzc2YyA1MCUsICNkYjlkYmUgNTAlLCAjZGI5ZGJlIDYyLjUlLCAjYzQ5Y2RlIDYyLjUlLCAjYzQ5Y2RlIDc1JSwgIzY2OWFlMSA3NSUsICM2NjlhZTEgODcuNSUsICM2MmMyZTQgODcuNSUsICM2MmMyZTQpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICNjNGUxN2YsICNjNGUxN2YgMTIuNSUsICNmN2ZkY2EgMTIuNSUsICNmN2ZkY2EgMjUlLCAjZmVjZjcxIDI1JSwgI2ZlY2Y3MSAzNy41JSwgI2YwNzc2YyAzNy41JSwgI2YwNzc2YyA1MCUsICNkYjlkYmUgNTAlLCAjZGI5ZGJlIDYyLjUlLCAjYzQ5Y2RlIDYyLjUlLCAjYzQ5Y2RlIDc1JSwgIzY2OWFlMSA3NSUsICM2NjlhZTEgODcuNSUsICM2MmMyZTQgODcuNSUsICM2MmMyZTQpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYzRlMTdmLCAjYzRlMTdmIDEyLjUlLCAjZjdmZGNhIDEyLjUlLCAjZjdmZGNhIDI1JSwgI2ZlY2Y3MSAyNSUsICNmZWNmNzEgMzcuNSUsICNmMDc3NmMgMzcuNSUsICNmMDc3NmMgNTAlLCAjZGI5ZGJlIDUwJSwgI2RiOWRiZSA2Mi41JSwgI2M0OWNkZSA2Mi41JSwgI2M0OWNkZSA3NSUsICM2NjlhZTEgNzUlLCAjNjY5YWUxIDg3LjUlLCAjNjJjMmU0IDg3LjUlLCAjNjJjMmU0KTtcclxuICB9ICAgIiwiLmNvbG9yZ3JhcGgge1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXRvcDogMDtcbiAgYmFja2dyb3VuZDogI2M0ZTE3ZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjYzRlMTdmLCAjYzRlMTdmIDEyLjUlLCAjZjdmZGNhIDEyLjUlLCAjZjdmZGNhIDI1JSwgI2ZlY2Y3MSAyNSUsICNmZWNmNzEgMzcuNSUsICNmMDc3NmMgMzcuNSUsICNmMDc3NmMgNTAlLCAjZGI5ZGJlIDUwJSwgI2RiOWRiZSA2Mi41JSwgI2M0OWNkZSA2Mi41JSwgI2M0OWNkZSA3NSUsICM2NjlhZTEgNzUlLCAjNjY5YWUxIDg3LjUlLCAjNjJjMmU0IDg3LjUlLCAjNjJjMmU0KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgI2M0ZTE3ZiwgI2M0ZTE3ZiAxMi41JSwgI2Y3ZmRjYSAxMi41JSwgI2Y3ZmRjYSAyNSUsICNmZWNmNzEgMjUlLCAjZmVjZjcxIDM3LjUlLCAjZjA3NzZjIDM3LjUlLCAjZjA3NzZjIDUwJSwgI2RiOWRiZSA1MCUsICNkYjlkYmUgNjIuNSUsICNjNDljZGUgNjIuNSUsICNjNDljZGUgNzUlLCAjNjY5YWUxIDc1JSwgIzY2OWFlMSA4Ny41JSwgIzYyYzJlNCA4Ny41JSwgIzYyYzJlNCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjYzRlMTdmLCAjYzRlMTdmIDEyLjUlLCAjZjdmZGNhIDEyLjUlLCAjZjdmZGNhIDI1JSwgI2ZlY2Y3MSAyNSUsICNmZWNmNzEgMzcuNSUsICNmMDc3NmMgMzcuNSUsICNmMDc3NmMgNTAlLCAjZGI5ZGJlIDUwJSwgI2RiOWRiZSA2Mi41JSwgI2M0OWNkZSA2Mi41JSwgI2M0OWNkZSA3NSUsICM2NjlhZTEgNzUlLCAjNjY5YWUxIDg3LjUlLCAjNjJjMmU0IDg3LjUlLCAjNjJjMmU0KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYzRlMTdmLCAjYzRlMTdmIDEyLjUlLCAjZjdmZGNhIDEyLjUlLCAjZjdmZGNhIDI1JSwgI2ZlY2Y3MSAyNSUsICNmZWNmNzEgMzcuNSUsICNmMDc3NmMgMzcuNSUsICNmMDc3NmMgNTAlLCAjZGI5ZGJlIDUwJSwgI2RiOWRiZSA2Mi41JSwgI2M0OWNkZSA2Mi41JSwgI2M0OWNkZSA3NSUsICM2NjlhZTEgNzUlLCAjNjY5YWUxIDg3LjUlLCAjNjJjMmU0IDg3LjUlLCAjNjJjMmU0KTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/senhaperdida/senhaperdida.page.ts":
/*!***************************************************!*\
  !*** ./src/app/senhaperdida/senhaperdida.page.ts ***!
  \***************************************************/
/*! exports provided: SenhaperdidaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenhaperdidaPage", function() { return SenhaperdidaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SenhaperdidaPage = class SenhaperdidaPage {
    constructor() { }
    ngOnInit() {
    }
};
SenhaperdidaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-senhaperdida',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./senhaperdida.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/senhaperdida/senhaperdida.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./senhaperdida.page.scss */ "./src/app/senhaperdida/senhaperdida.page.scss")).default]
    })
], SenhaperdidaPage);



/***/ })

}]);
//# sourceMappingURL=senhaperdida-senhaperdida-module-es2015.js.map