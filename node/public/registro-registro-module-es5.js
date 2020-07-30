function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-registro-module"], {
  /***/
  "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js ***!
    \*****************************************************************/

  /*! exports provided: INITIAL_CONFIG, MaskApplierService, MaskDirective, MaskPipe, MaskService, NEW_CONFIG, NgxMaskModule, _configFactory, config, initialConfig, timeMasks, withoutValidation */

  /***/
  function node_modulesNgxMask__ivy_ngcc__Fesm2015NgxMaskJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "INITIAL_CONFIG", function () {
      return INITIAL_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaskApplierService", function () {
      return MaskApplierService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaskDirective", function () {
      return MaskDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaskPipe", function () {
      return MaskPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaskService", function () {
      return MaskService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NEW_CONFIG", function () {
      return NEW_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMaskModule", function () {
      return NgxMaskModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_configFactory", function () {
      return _configFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "config", function () {
      return config;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialConfig", function () {
      return initialConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "timeMasks", function () {
      return timeMasks;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "withoutValidation", function () {
      return withoutValidation;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var config = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('config');
    var NEW_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NEW_CONFIG');
    var INITIAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('INITIAL_CONFIG');
    var initialConfig = {
      suffix: '',
      prefix: '',
      thousandSeparator: ' ',
      decimalMarker: '.',
      clearIfNotMatch: false,
      showTemplate: false,
      showMaskTyped: false,
      placeHolderCharacter: '_',
      dropSpecialCharacters: true,
      hiddenInput: undefined,
      shownMaskExpression: '',
      separatorLimit: '',
      allowNegativeNumbers: false,
      validation: true,
      // tslint:disable-next-line: quotemark
      specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '"', "'"],
      patterns: {
        '0': {
          pattern: new RegExp('\\d')
        },
        '9': {
          pattern: new RegExp('\\d'),
          optional: true
        },
        X: {
          pattern: new RegExp('\\d'),
          symbol: '*'
        },
        A: {
          pattern: new RegExp('[a-zA-Z0-9]')
        },
        S: {
          pattern: new RegExp('[a-zA-Z]')
        },
        d: {
          pattern: new RegExp('\\d')
        },
        m: {
          pattern: new RegExp('\\d')
        },
        M: {
          pattern: new RegExp('\\d')
        },
        H: {
          pattern: new RegExp('\\d')
        },
        h: {
          pattern: new RegExp('\\d')
        },
        s: {
          pattern: new RegExp('\\d')
        }
      }
    };
    var timeMasks = ['Hh:m0:s0', 'Hh:m0', 'm0:s0'];
    var withoutValidation = ['percent', 'Hh', 's0', 'm0', 'separator', 'd0/M0/0000', 'd0/M0', 'd0', 'M0'];

    var MaskApplierService = /*#__PURE__*/function () {
      function MaskApplierService(_config) {
        var _this = this;

        _classCallCheck(this, MaskApplierService);

        this._config = _config;
        this.maskExpression = '';
        this.actualValue = '';
        this.shownMaskExpression = '';

        this._formatWithSeparators = function (str, thousandSeparatorChar, decimalChar, precision) {
          var x = str.split(decimalChar);
          var decimals = x.length > 1 ? "".concat(decimalChar).concat(x[1]) : '';
          var res = x[0];

          var separatorLimit = _this.separatorLimit.replace(/\s/g, '');

          if (separatorLimit && +separatorLimit) {
            if (res[0] === '-') {
              res = "-".concat(res.slice(1, res.length).slice(0, separatorLimit.length));
            } else {
              res = res.slice(0, separatorLimit.length);
            }
          }

          var rgx = /(\d+)(\d{3})/;

          while (thousandSeparatorChar && rgx.test(res)) {
            res = res.replace(rgx, '$1' + thousandSeparatorChar + '$2');
          }

          if (precision === undefined) {
            return res + decimals;
          } else if (precision === 0) {
            return res;
          }

          return res + decimals.substr(0, precision + 1);
        };

        this.percentage = function (str) {
          return Number(str) >= 0 && Number(str) <= 100;
        };

        this.getPrecision = function (maskExpression) {
          var x = maskExpression.split('.');

          if (x.length > 1) {
            return Number(x[x.length - 1]);
          }

          return Infinity;
        };

        this.checkInputPrecision = function (inputValue, precision, decimalMarker) {
          if (precision < Infinity) {
            var precisionRegEx = new RegExp(_this._charToRegExpExpression(decimalMarker) + "\\d{".concat(precision, "}.*$"));
            var precisionMatch = inputValue.match(precisionRegEx);

            if (precisionMatch && precisionMatch[0].length - 1 > precision) {
              inputValue = inputValue.substring(0, inputValue.length - 1);
            } else if (precision === 0 && inputValue.endsWith(decimalMarker)) {
              inputValue = inputValue.substring(0, inputValue.length - 1);
            }
          }

          return inputValue;
        };

        this._shift = new Set();
        this.clearIfNotMatch = this._config.clearIfNotMatch;
        this.dropSpecialCharacters = this._config.dropSpecialCharacters;
        this.maskSpecialCharacters = this._config.specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.prefix = this._config.prefix;
        this.suffix = this._config.suffix;
        this.thousandSeparator = this._config.thousandSeparator;
        this.decimalMarker = this._config.decimalMarker;
        this.hiddenInput = this._config.hiddenInput;
        this.showMaskTyped = this._config.showMaskTyped;
        this.placeHolderCharacter = this._config.placeHolderCharacter;
        this.validation = this._config.validation;
        this.separatorLimit = this._config.separatorLimit;
        this.allowNegativeNumbers = this._config.allowNegativeNumbers;
      }

      _createClass(MaskApplierService, [{
        key: "applyMaskWithPattern",
        value: function applyMaskWithPattern(inputValue, maskAndPattern) {
          var _maskAndPattern = _slicedToArray(maskAndPattern, 2),
              mask = _maskAndPattern[0],
              customPattern = _maskAndPattern[1];

          this.customPattern = customPattern;
          return this.applyMask(inputValue, mask);
        }
      }, {
        key: "applyMask",
        value: function applyMask(inputValue, maskExpression) {
          var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

          if (inputValue === undefined || inputValue === null || maskExpression === undefined) {
            return '';
          }

          var cursor = 0;
          var result = '';
          var multi = false;
          var backspaceShift = false;
          var shift = 1;
          var stepBack = false;

          if (inputValue.slice(0, this.prefix.length) === this.prefix) {
            inputValue = inputValue.slice(this.prefix.length, inputValue.length);
          }

          if (!!this.suffix && inputValue.endsWith(this.suffix)) {
            inputValue = inputValue.slice(0, inputValue.length - this.suffix.length);
          }

          var inputArray = inputValue.toString().split('');

          if (maskExpression === 'IP') {
            this.ipError = !!(inputArray.filter(function (i) {
              return i === '.';
            }).length < 3 && inputArray.length < 7);
            maskExpression = '099.099.099.099';
          }

          var arr = [];

          for (var i = 0; i < inputValue.length; i++) {
            if (inputValue[i].match('\\d')) {
              arr.push(inputValue[i]);
            }
          }

          if (maskExpression === 'CPF_CNPJ') {
            this.cpfCnpjError = !!(arr.length !== 11 && arr.length !== 14);

            if (arr.length > 11) {
              maskExpression = '00.000.000/0000-00';
            } else {
              maskExpression = '000.000.000-00';
            }
          }

          if (maskExpression.startsWith('percent')) {
            if (inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/)) {
              inputValue = this._stripToDecimal(inputValue);
              var precision = this.getPrecision(maskExpression);
              inputValue = this.checkInputPrecision(inputValue, precision, '.');
            }

            if (inputValue.indexOf('.') > 0 && !this.percentage(inputValue.substring(0, inputValue.indexOf('.')))) {
              var base = inputValue.substring(0, inputValue.indexOf('.') - 1);
              inputValue = "".concat(base).concat(inputValue.substring(inputValue.indexOf('.'), inputValue.length));
            }

            if (this.percentage(inputValue)) {
              result = inputValue;
            } else {
              result = inputValue.substring(0, inputValue.length - 1);
            }
          } else if (maskExpression.startsWith('separator')) {
            if (inputValue.match('[wа-яА-Я]') || inputValue.match('[ЁёА-я]') || inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-@#!$%\\^&*()_£¬'+|~=`{}\[\]:";<>.?\/]/) || inputValue.match('[^A-Za-z0-9,]')) {
              inputValue = this._stripToDecimal(inputValue);
            }

            inputValue = inputValue.length > 1 && inputValue[0] === '0' && inputValue[1] !== this.decimalMarker ? inputValue.slice(1, inputValue.length) : inputValue; // TODO: we had different rexexps here for the different cases... but tests dont seam to bother - check this
            //  separator: no COMMA, dot-sep: no SPACE, COMMA OK, comma-sep: no SPACE, COMMA OK

            var thousandSeperatorCharEscaped = this._charToRegExpExpression(this.thousandSeparator);

            var decimalMarkerEscaped = this._charToRegExpExpression(this.decimalMarker);

            var invalidChars = '@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(thousandSeperatorCharEscaped, '').replace(decimalMarkerEscaped, '');
            var invalidCharRegexp = new RegExp('[' + invalidChars + ']');

            if (inputValue.match(invalidCharRegexp)) {
              inputValue = inputValue.substring(0, inputValue.length - 1);
            }

            var _precision = this.getPrecision(maskExpression);

            inputValue = this.checkInputPrecision(inputValue, _precision, this.decimalMarker);
            var strForSep = inputValue.replace(new RegExp(thousandSeperatorCharEscaped, 'g'), '');
            result = this._formatWithSeparators(strForSep, this.thousandSeparator, this.decimalMarker, _precision);
            var commaShift = result.indexOf(',') - inputValue.indexOf(',');
            var shiftStep = result.length - inputValue.length;

            if (shiftStep > 0 && result[position] !== ',') {
              backspaceShift = true;
              var _shift = 0;

              do {
                this._shift.add(position + _shift);

                _shift++;
              } while (_shift < shiftStep);
            } else if (commaShift !== 0 && position > 0 && !(result.indexOf(',') >= position && position > 3) || !(result.indexOf('.') >= position && position > 3) && shiftStep <= 0) {
              this._shift.clear();

              backspaceShift = true;
              shift = shiftStep;
              position += shiftStep;

              this._shift.add(position);
            } else {
              this._shift.clear();
            }
          } else {
            for ( // tslint:disable-next-line
            var _i2 = 0, inputSymbol = inputArray[0]; _i2 < inputArray.length; _i2++, inputSymbol = inputArray[_i2]) {
              if (cursor === maskExpression.length) {
                break;
              }

              if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '?') {
                result += inputSymbol;
                cursor += 2;
              } else if (maskExpression[cursor + 1] === '*' && multi && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                result += inputSymbol;
                cursor += 3;
                multi = false;
              } else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '*') {
                result += inputSymbol;
                multi = true;
              } else if (maskExpression[cursor + 1] === '?' && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                result += inputSymbol;
                cursor += 3;
              } else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) || this.hiddenInput && this.maskAvailablePatterns[maskExpression[cursor]] && this.maskAvailablePatterns[maskExpression[cursor]].symbol === inputSymbol) {
                if (maskExpression[cursor] === 'H') {
                  if (Number(inputSymbol) > 2) {
                    cursor += 1;

                    var _shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

                    this._shift.add(_shiftStep + this.prefix.length || 0);

                    _i2--;
                    continue;
                  }
                }

                if (maskExpression[cursor] === 'h') {
                  if (result === '2' && Number(inputSymbol) > 3) {
                    cursor += 1;
                    _i2--;
                    continue;
                  }
                }

                if (maskExpression[cursor] === 'm') {
                  if (Number(inputSymbol) > 5) {
                    cursor += 1;

                    var _shiftStep2 = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

                    this._shift.add(_shiftStep2 + this.prefix.length || 0);

                    _i2--;
                    continue;
                  }
                }

                if (maskExpression[cursor] === 's') {
                  if (Number(inputSymbol) > 5) {
                    cursor += 1;

                    var _shiftStep3 = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

                    this._shift.add(_shiftStep3 + this.prefix.length || 0);

                    _i2--;
                    continue;
                  }
                }

                var daysCount = 31;

                if (maskExpression[cursor] === 'd') {
                  if (Number(inputValue.slice(cursor, cursor + 2)) > daysCount || inputValue[cursor + 1] === '/') {
                    cursor += 1;

                    var _shiftStep4 = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

                    this._shift.add(_shiftStep4 + this.prefix.length || 0);

                    _i2--;
                    continue;
                  }
                }

                if (maskExpression[cursor] === 'M') {
                  var monthsCount = 12; // mask without day

                  var withoutDays = cursor === 0 && (Number(inputSymbol) > 2 || Number(inputValue.slice(cursor, cursor + 2)) > monthsCount || inputValue[cursor + 1] === '/'); // day<10 && month<12 for input

                  var day1monthInput = inputValue.slice(cursor - 3, cursor - 1).includes('/') && (inputValue[cursor - 2] === '/' && Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount && inputValue[cursor] !== '/' || inputValue[cursor] === '/' || inputValue[cursor - 3] === '/' && Number(inputValue.slice(cursor - 2, cursor)) > monthsCount && inputValue[cursor - 1] !== '/' || inputValue[cursor - 1] === '/'); // 10<day<31 && month<12 for input

                  var day2monthInput = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && inputValue[cursor - 1] === '/' && (Number(inputValue.slice(cursor, cursor + 2)) > monthsCount || inputValue[cursor + 1] === '/'); // day<10 && month<12 for paste whole data

                  var day1monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) > daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && !inputValue.slice(cursor - 2, cursor).includes('/') && Number(inputValue.slice(cursor - 2, cursor)) > monthsCount; // 10<day<31 && month<12 for paste whole data

                  var day2monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount && !inputValue.slice(cursor - 3, cursor - 1).includes('/') && inputValue[cursor - 1] !== '/' && Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount;

                  if (withoutDays || day1monthInput || day2monthInput || day1monthPaste || day2monthPaste) {
                    cursor += 1;

                    var _shiftStep5 = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

                    this._shift.add(_shiftStep5 + this.prefix.length || 0);

                    _i2--;
                    continue;
                  }
                }

                result += inputSymbol;
                cursor++;
              } else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
                result += maskExpression[cursor];
                cursor++;

                var _shiftStep6 = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;

                this._shift.add(_shiftStep6 + this.prefix.length || 0);

                _i2--;
              } else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1 && this.maskAvailablePatterns[maskExpression[cursor]] && this.maskAvailablePatterns[maskExpression[cursor]].optional) {
                if (!!inputArray[cursor] && maskExpression !== '099.099.099.099' && maskExpression !== '000.000.000-00' && maskExpression !== '00.000.000/0000-00') {
                  result += inputArray[cursor];
                }

                cursor++;
                _i2--;
              } else if (this.maskExpression[cursor + 1] === '*' && this._findSpecialChar(this.maskExpression[cursor + 2]) && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
                cursor += 3;
                result += inputSymbol;
              } else if (this.maskExpression[cursor + 1] === '?' && this._findSpecialChar(this.maskExpression[cursor + 2]) && this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] && multi) {
                cursor += 3;
                result += inputSymbol;
              } else if (this.showMaskTyped && this.maskSpecialCharacters.indexOf(inputSymbol) < 0 && inputSymbol !== this.placeHolderCharacter) {
                stepBack = true;
              }
            }
          }

          if (result.length + 1 === maskExpression.length && this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
            result += maskExpression[maskExpression.length - 1];
          }

          var newPosition = position + 1;

          while (this._shift.has(newPosition)) {
            shift++;
            newPosition++;
          }

          var actualShift = this._shift.has(position) ? shift : 0;

          if (stepBack) {
            actualShift--;
          }

          cb(actualShift, backspaceShift);

          if (shift < 0) {
            this._shift.clear();
          }

          var res = "".concat(this.prefix).concat(result).concat(this.suffix);

          if (result.length === 0) {
            res = "".concat(this.prefix).concat(result);
          }

          return res;
        }
      }, {
        key: "_findSpecialChar",
        value: function _findSpecialChar(inputSymbol) {
          return this.maskSpecialCharacters.find(function (val) {
            return val === inputSymbol;
          });
        }
      }, {
        key: "_checkSymbolMask",
        value: function _checkSymbolMask(inputSymbol, maskSymbol) {
          this.maskAvailablePatterns = this.customPattern ? this.customPattern : this.maskAvailablePatterns;
          return this.maskAvailablePatterns[maskSymbol] && this.maskAvailablePatterns[maskSymbol].pattern && this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol);
        }
      }, {
        key: "_stripToDecimal",
        value: function _stripToDecimal(str) {
          var _this2 = this;

          return str.split('').filter(function (i, idx) {
            return i.match('^-?\\d') || i === '.' || i === ',' || i === '-' && idx === 0 && _this2.allowNegativeNumbers;
          }).join('');
        }
      }, {
        key: "_charToRegExpExpression",
        value: function _charToRegExpExpression(_char) {
          if (_char) {
            var charsToEscape = '[\\^$.|?*+()';
            return _char === ' ' ? '\\s' : charsToEscape.indexOf(_char) >= 0 ? '\\' + _char : _char;
          }

          return _char;
        }
      }]);

      return MaskApplierService;
    }();

    MaskApplierService.ɵfac = function MaskApplierService_Factory(t) {
      return new (t || MaskApplierService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](config));
    };

    MaskApplierService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MaskApplierService,
      factory: MaskApplierService.ɵfac
    });

    MaskApplierService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [config]
        }]
      }];
    };

    MaskApplierService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(config)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], MaskApplierService);

    var MaskService = /*#__PURE__*/function (_MaskApplierService) {
      _inherits(MaskService, _MaskApplierService);

      var _super = _createSuper(MaskService);

      function MaskService(document, _config, _elementRef, _renderer) {
        var _this3;

        _classCallCheck(this, MaskService);

        _this3 = _super.call(this, _config);
        _this3.document = document;
        _this3._config = _config;
        _this3._elementRef = _elementRef;
        _this3._renderer = _renderer;
        _this3.maskExpression = '';
        _this3.isNumberValue = false;
        _this3.placeHolderCharacter = '_';
        _this3.maskIsShown = '';
        _this3.selStart = null;
        _this3.selEnd = null;
        /**
         * Whether we are currently in writeValue function, in this case when applying the mask we don't want to trigger onChange function,
         * since writeValue should be a one way only process of writing the DOM value based on the Angular model value.
         */

        _this3.writingValue = false;

        _this3.onChange = function (_) {};

        _this3._formElement = _this3._elementRef.nativeElement;
        return _this3;
      } // tslint:disable-next-line:cyclomatic-complexity


      _createClass(MaskService, [{
        key: "applyMask",
        value: function applyMask(inputValue, maskExpression) {
          var _this4 = this;

          var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

          if (!maskExpression) {
            return inputValue;
          }

          this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : '';

          if (this.maskExpression === 'IP' && this.showMaskTyped) {
            this.maskIsShown = this.showMaskInInput(inputValue || '#');
          }

          if (this.maskExpression === 'CPF_CNPJ' && this.showMaskTyped) {
            this.maskIsShown = this.showMaskInInput(inputValue || '#');
          }

          if (!inputValue && this.showMaskTyped) {
            this.formControlResult(this.prefix);
            return this.prefix + this.maskIsShown;
          }

          var getSymbol = !!inputValue && typeof this.selStart === 'number' ? inputValue[this.selStart] : '';
          var newInputValue = '';

          if (this.hiddenInput !== undefined) {
            var actualResult = this.actualValue.split(''); // tslint:disable no-unused-expression

            inputValue !== '' && actualResult.length ? typeof this.selStart === 'number' && typeof this.selEnd === 'number' ? inputValue.length > actualResult.length ? actualResult.splice(this.selStart, 0, getSymbol) : inputValue.length < actualResult.length ? actualResult.length - inputValue.length === 1 ? actualResult.splice(this.selStart - 1, 1) : actualResult.splice(this.selStart, this.selEnd - this.selStart) : null : null : actualResult = []; // tslint:enable no-unused-expression

            newInputValue = this.actualValue.length ? this.shiftTypedSymbols(actualResult.join('')) : inputValue;
          }

          newInputValue = Boolean(newInputValue) && newInputValue.length ? newInputValue : inputValue;

          var result = _get(_getPrototypeOf(MaskService.prototype), "applyMask", this).call(this, newInputValue, maskExpression, position, cb);

          this.actualValue = this.getActualValue(result); // handle some separator implications:
          // a.) adjust decimalMarker default (. -> ,) if thousandSeparator is a dot

          if (this.thousandSeparator === '.' && this.decimalMarker === '.') {
            this.decimalMarker = ',';
          } // b) remove decimal marker from list of special characters to mask


          if (this.maskExpression.startsWith('separator') && this.dropSpecialCharacters === true) {
            this.maskSpecialCharacters = this.maskSpecialCharacters.filter(function (item) {
              return item !== _this4.decimalMarker;
            });
          }

          this.formControlResult(result);

          if (!this.showMaskTyped) {
            if (this.hiddenInput) {
              return result && result.length ? this.hideInput(result, this.maskExpression) : result;
            }

            return result;
          }

          var resLen = result.length;
          var prefNmask = this.prefix + this.maskIsShown;
          return result + (this.maskExpression === 'IP' || this.maskExpression === 'CPF_CNPJ' ? prefNmask : prefNmask.slice(resLen));
        }
      }, {
        key: "applyValueChanges",
        value: function applyValueChanges() {
          var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
          this._formElement.value = this.applyMask(this._formElement.value, this.maskExpression, position, cb);

          if (this._formElement === this.document.activeElement) {
            return;
          }

          this.clearIfNotMatchFn();
        }
      }, {
        key: "hideInput",
        value: function hideInput(inputValue, maskExpression) {
          var _this5 = this;

          return inputValue.split('').map(function (curr, index) {
            if (_this5.maskAvailablePatterns && _this5.maskAvailablePatterns[maskExpression[index]] && _this5.maskAvailablePatterns[maskExpression[index]].symbol) {
              return _this5.maskAvailablePatterns[maskExpression[index]].symbol;
            }

            return curr;
          }).join('');
        } // this function is not necessary, it checks result against maskExpression

      }, {
        key: "getActualValue",
        value: function getActualValue(res) {
          var _this6 = this;

          var compare = res.split('').filter(function (symbol, i) {
            return _this6._checkSymbolMask(symbol, _this6.maskExpression[i]) || _this6.maskSpecialCharacters.includes(_this6.maskExpression[i]) && symbol === _this6.maskExpression[i];
          });

          if (compare.join('') === res) {
            return compare.join('');
          }

          return res;
        }
      }, {
        key: "shiftTypedSymbols",
        value: function shiftTypedSymbols(inputValue) {
          var _this7 = this;

          var symbolToReplace = '';
          var newInputValue = inputValue && inputValue.split('').map(function (currSymbol, index) {
            if (_this7.maskSpecialCharacters.includes(inputValue[index + 1]) && inputValue[index + 1] !== _this7.maskExpression[index + 1]) {
              symbolToReplace = currSymbol;
              return inputValue[index + 1];
            }

            if (symbolToReplace.length) {
              var replaceSymbol = symbolToReplace;
              symbolToReplace = '';
              return replaceSymbol;
            }

            return currSymbol;
          }) || [];
          return newInputValue.join('');
        }
      }, {
        key: "showMaskInInput",
        value: function showMaskInInput(inputVal) {
          if (this.showMaskTyped && !!this.shownMaskExpression) {
            if (this.maskExpression.length !== this.shownMaskExpression.length) {
              throw new Error('Mask expression must match mask placeholder length');
            } else {
              return this.shownMaskExpression;
            }
          } else if (this.showMaskTyped) {
            if (inputVal) {
              if (this.maskExpression === 'IP') {
                return this._checkForIp(inputVal);
              }

              if (this.maskExpression === 'CPF_CNPJ') {
                return this._checkForCpfCnpj(inputVal);
              }
            }

            return this.maskExpression.replace(/\w/g, this.placeHolderCharacter);
          }

          return '';
        }
      }, {
        key: "clearIfNotMatchFn",
        value: function clearIfNotMatchFn() {
          if (this.clearIfNotMatch && this.prefix.length + this.maskExpression.length + this.suffix.length !== this._formElement.value.replace(/_/g, '').length) {
            this.formElementProperty = ['value', ''];
            this.applyMask(this._formElement.value, this.maskExpression);
          }
        }
      }, {
        key: "checkSpecialCharAmount",
        value: function checkSpecialCharAmount(mask) {
          var _this8 = this;

          var chars = mask.split('').filter(function (item) {
            return _this8._findSpecialChar(item);
          });
          return chars.length;
        }
      }, {
        key: "removeMask",
        value: function removeMask(inputValue) {
          return this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.maskSpecialCharacters.concat('_').concat(this.placeHolderCharacter));
        }
      }, {
        key: "_checkForIp",
        value: function _checkForIp(inputVal) {
          if (inputVal === '#') {
            return "".concat(this.placeHolderCharacter, ".").concat(this.placeHolderCharacter, ".").concat(this.placeHolderCharacter, ".").concat(this.placeHolderCharacter);
          }

          var arr = [];

          for (var i = 0; i < inputVal.length; i++) {
            if (inputVal[i].match('\\d')) {
              arr.push(inputVal[i]);
            }
          }

          if (arr.length <= 3) {
            return "".concat(this.placeHolderCharacter, ".").concat(this.placeHolderCharacter, ".").concat(this.placeHolderCharacter);
          }

          if (arr.length > 3 && arr.length <= 6) {
            return "".concat(this.placeHolderCharacter, ".").concat(this.placeHolderCharacter);
          }

          if (arr.length > 6 && arr.length <= 9) {
            return this.placeHolderCharacter;
          }

          if (arr.length > 9 && arr.length <= 12) {
            return '';
          }

          return '';
        }
      }, {
        key: "_checkForCpfCnpj",
        value: function _checkForCpfCnpj(inputVal) {
          var cpf = "".concat(this.placeHolderCharacter).concat(this.placeHolderCharacter).concat(this.placeHolderCharacter) + ".".concat(this.placeHolderCharacter).concat(this.placeHolderCharacter).concat(this.placeHolderCharacter) + ".".concat(this.placeHolderCharacter).concat(this.placeHolderCharacter).concat(this.placeHolderCharacter) + "-".concat(this.placeHolderCharacter).concat(this.placeHolderCharacter);
          var cnpj = "".concat(this.placeHolderCharacter).concat(this.placeHolderCharacter) + ".".concat(this.placeHolderCharacter).concat(this.placeHolderCharacter).concat(this.placeHolderCharacter) + ".".concat(this.placeHolderCharacter).concat(this.placeHolderCharacter).concat(this.placeHolderCharacter) + "/".concat(this.placeHolderCharacter).concat(this.placeHolderCharacter).concat(this.placeHolderCharacter).concat(this.placeHolderCharacter) + "-".concat(this.placeHolderCharacter).concat(this.placeHolderCharacter);

          if (inputVal === '#') {
            return cpf;
          }

          var arr = [];

          for (var i = 0; i < inputVal.length; i++) {
            if (inputVal[i].match('\\d')) {
              arr.push(inputVal[i]);
            }
          }

          if (arr.length <= 3) {
            return cpf.slice(arr.length, cpf.length);
          }

          if (arr.length > 3 && arr.length <= 6) {
            return cpf.slice(arr.length + 1, cpf.length);
          }

          if (arr.length > 6 && arr.length <= 9) {
            return cpf.slice(arr.length + 2, cpf.length);
          }

          if (arr.length > 9 && arr.length < 11) {
            return cpf.slice(arr.length + 3, cpf.length);
          }

          if (arr.length === 11) {
            return '';
          }

          if (arr.length === 12) {
            if (inputVal.length === 17) {
              return cnpj.slice(16, cnpj.length);
            }

            return cnpj.slice(15, cnpj.length);
          }

          if (arr.length > 12 && arr.length <= 14) {
            return cnpj.slice(arr.length + 4, cnpj.length);
          }

          return '';
        }
        /**
         * Propogates the input value back to the Angular model by triggering the onChange function. It won't do this if writingValue
         * is true. If that is true it means we are currently in the writeValue function, which is supposed to only update the actual
         * DOM element based on the Angular model value. It should be a one way process, i.e. writeValue should not be modifying the Angular
         * model value too. Therefore, we don't trigger onChange in this scenario.
         * @param inputValue the current form input value
         */

      }, {
        key: "formControlResult",
        value: function formControlResult(inputValue) {
          if (!this.writingValue) {
            if (Array.isArray(this.dropSpecialCharacters)) {
              this.onChange(this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.dropSpecialCharacters));
            } else if (this.dropSpecialCharacters) {
              this.onChange(this._checkSymbols(inputValue));
            } else {
              this.onChange(this._removeSuffix(this._removePrefix(inputValue)));
            }
          }
        }
      }, {
        key: "_removeMask",
        value: function _removeMask(value, specialCharactersForRemove) {
          return value ? value.replace(this._regExpForRemove(specialCharactersForRemove), '') : value;
        }
      }, {
        key: "_removePrefix",
        value: function _removePrefix(value) {
          if (!this.prefix) {
            return value;
          }

          return value ? value.replace(this.prefix, '') : value;
        }
      }, {
        key: "_removeSuffix",
        value: function _removeSuffix(value) {
          if (!this.suffix) {
            return value;
          }

          return value ? value.replace(this.suffix, '') : value;
        }
      }, {
        key: "_retrieveSeparatorValue",
        value: function _retrieveSeparatorValue(result) {
          return this._removeMask(this._removeSuffix(this._removePrefix(result)), this.maskSpecialCharacters);
        }
      }, {
        key: "_regExpForRemove",
        value: function _regExpForRemove(specialCharactersForRemove) {
          return new RegExp(specialCharactersForRemove.map(function (item) {
            return "\\".concat(item);
          }).join('|'), 'gi');
        }
      }, {
        key: "_checkSymbols",
        value: function _checkSymbols(result) {
          if (result === '') {
            return result;
          }

          var separatorPrecision = this._retrieveSeparatorPrecision(this.maskExpression);

          var separatorValue = this._retrieveSeparatorValue(result);

          if (this.decimalMarker !== '.') {
            separatorValue = separatorValue.replace(this.decimalMarker, '.');
          }

          if (this.isNumberValue) {
            if (separatorPrecision) {
              if (result === this.decimalMarker) {
                return null;
              }

              return this._checkPrecision(this.maskExpression, separatorValue);
            } else {
              return Number(separatorValue);
            }
          } else {
            return separatorValue;
          }
        } // TODO should think about helpers or separting decimal precision to own property

      }, {
        key: "_retrieveSeparatorPrecision",
        value: function _retrieveSeparatorPrecision(maskExpretion) {
          var matcher = maskExpretion.match(new RegExp("^separator\\.([^d]*)"));
          return matcher ? Number(matcher[1]) : null;
        }
      }, {
        key: "_checkPrecision",
        value: function _checkPrecision(separatorExpression, separatorValue) {
          if (separatorExpression.indexOf('2') > 0) {
            return Number(separatorValue).toFixed(2);
          }

          return Number(separatorValue);
        }
      }, {
        key: "formElementProperty",
        set: function set(_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              name = _ref2[0],
              value = _ref2[1];

          this._renderer.setProperty(this._formElement, name, value);
        }
      }]);

      return MaskService;
    }(MaskApplierService);

    MaskService.ɵfac = function MaskService_Factory(t) {
      return new (t || MaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](config), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
    };

    MaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MaskService,
      factory: MaskService.ɵfac
    });

    MaskService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [config]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    MaskService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(config)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])], MaskService);
    var MaskDirective_1; // tslint:disable deprecation
    // tslint:disable no-input-rename

    var MaskDirective = MaskDirective_1 = /*#__PURE__*/function () {
      function MaskDirective(document, _maskService, _config) {
        _classCallCheck(this, MaskDirective);

        this.document = document;
        this._maskService = _maskService;
        this._config = _config;
        this.maskExpression = '';
        this.specialCharacters = [];
        this.patterns = {};
        this.prefix = '';
        this.suffix = '';
        this.thousandSeparator = ' ';
        this.decimalMarker = '.';
        this.dropSpecialCharacters = null;
        this.hiddenInput = null;
        this.showMaskTyped = null;
        this.placeHolderCharacter = null;
        this.shownMaskExpression = null;
        this.showTemplate = null;
        this.clearIfNotMatch = null;
        this.validation = null;
        this.separatorLimit = null;
        this.allowNegativeNumbers = null;
        this._maskValue = '';
        this._position = null;
        this._maskExpressionArray = [];

        this.onChange = function (_) {};

        this.onTouch = function () {};
      }

      _createClass(MaskDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var maskExpression = changes.maskExpression,
              specialCharacters = changes.specialCharacters,
              patterns = changes.patterns,
              prefix = changes.prefix,
              suffix = changes.suffix,
              thousandSeparator = changes.thousandSeparator,
              decimalMarker = changes.decimalMarker,
              dropSpecialCharacters = changes.dropSpecialCharacters,
              hiddenInput = changes.hiddenInput,
              showMaskTyped = changes.showMaskTyped,
              placeHolderCharacter = changes.placeHolderCharacter,
              shownMaskExpression = changes.shownMaskExpression,
              showTemplate = changes.showTemplate,
              clearIfNotMatch = changes.clearIfNotMatch,
              validation = changes.validation,
              separatorLimit = changes.separatorLimit,
              allowNegativeNumbers = changes.allowNegativeNumbers;

          if (maskExpression) {
            this._maskValue = maskExpression.currentValue || '';

            if (maskExpression.currentValue && maskExpression.currentValue.split('||').length > 1) {
              this._maskExpressionArray = maskExpression.currentValue.split('||').sort(function (a, b) {
                return a.length - b.length;
              });
              this._maskValue = this._maskExpressionArray[0];
              this.maskExpression = this._maskExpressionArray[0];
              this._maskService.maskExpression = this._maskExpressionArray[0];
            }
          }

          if (specialCharacters) {
            if (!specialCharacters.currentValue || !Array.isArray(specialCharacters.currentValue)) {
              return;
            } else {
              this._maskService.maskSpecialCharacters = specialCharacters.currentValue || [];
            }
          } // Only overwrite the mask available patterns if a pattern has actually been passed in


          if (patterns && patterns.currentValue) {
            this._maskService.maskAvailablePatterns = patterns.currentValue;
          }

          if (prefix) {
            this._maskService.prefix = prefix.currentValue;
          }

          if (suffix) {
            this._maskService.suffix = suffix.currentValue;
          }

          if (thousandSeparator) {
            this._maskService.thousandSeparator = thousandSeparator.currentValue;
          }

          if (decimalMarker) {
            this._maskService.decimalMarker = decimalMarker.currentValue;
          }

          if (dropSpecialCharacters) {
            this._maskService.dropSpecialCharacters = dropSpecialCharacters.currentValue;
          }

          if (hiddenInput) {
            this._maskService.hiddenInput = hiddenInput.currentValue;
          }

          if (showMaskTyped) {
            this._maskService.showMaskTyped = showMaskTyped.currentValue;
          }

          if (placeHolderCharacter) {
            this._maskService.placeHolderCharacter = placeHolderCharacter.currentValue;
          }

          if (shownMaskExpression) {
            this._maskService.shownMaskExpression = shownMaskExpression.currentValue;
          }

          if (showTemplate) {
            this._maskService.showTemplate = showTemplate.currentValue;
          }

          if (clearIfNotMatch) {
            this._maskService.clearIfNotMatch = clearIfNotMatch.currentValue;
          }

          if (validation) {
            this._maskService.validation = validation.currentValue;
          }

          if (separatorLimit) {
            this._maskService.separatorLimit = separatorLimit.currentValue;
          }

          if (allowNegativeNumbers) {
            this._maskService.allowNegativeNumbers = allowNegativeNumbers.currentValue;

            if (this._maskService.allowNegativeNumbers) {
              this._maskService.maskSpecialCharacters = this._maskService.maskSpecialCharacters.filter(function (c) {
                return c !== '-';
              });
            }
          }

          this._applyMask();
        } // tslint:disable-next-line: cyclomatic-complexity

      }, {
        key: "validate",
        value: function validate(_ref3) {
          var _this9 = this;

          var value = _ref3.value;

          if (!this._maskService.validation || !this._maskValue) {
            return null;
          }

          if (this._maskService.ipError) {
            return this._createValidationError(value);
          }

          if (this._maskService.cpfCnpjError) {
            return this._createValidationError(value);
          }

          if (this._maskValue.startsWith('separator')) {
            return null;
          }

          if (withoutValidation.includes(this._maskValue)) {
            return null;
          }

          if (this._maskService.clearIfNotMatch) {
            return null;
          }

          if (timeMasks.includes(this._maskValue)) {
            return this._validateTime(value);
          }

          if (value && value.toString().length >= 1) {
            var counterOfOpt = 0;

            var _loop = function _loop(key) {
              if (_this9._maskService.maskAvailablePatterns[key].optional && _this9._maskService.maskAvailablePatterns[key].optional === true) {
                if (_this9._maskValue.indexOf(key) !== _this9._maskValue.lastIndexOf(key)) {
                  var opt = _this9._maskValue.split('').filter(function (i) {
                    return i === key;
                  }).join('');

                  counterOfOpt += opt.length;
                } else if (_this9._maskValue.indexOf(key) !== -1) {
                  counterOfOpt++;
                }

                if (_this9._maskValue.indexOf(key) !== -1 && value.toString().length >= _this9._maskValue.indexOf(key)) {
                  return {
                    v: null
                  };
                }

                if (counterOfOpt === _this9._maskValue.length) {
                  return {
                    v: null
                  };
                }
              }
            };

            for (var key in this._maskService.maskAvailablePatterns) {
              var _ret = _loop(key);

              if (typeof _ret === "object") return _ret.v;
            }

            if (this._maskValue.indexOf('{') === 1 && value.toString().length === this._maskValue.length + Number(this._maskValue.split('{')[1].split('}')[0]) - 4) {
              return null;
            }

            if (this._maskValue.indexOf('*') === 1 || this._maskValue.indexOf('?') === 1) {
              return null;
            } else if (this._maskValue.indexOf('*') > 1 && value.toString().length < this._maskValue.indexOf('*') || this._maskValue.indexOf('?') > 1 && value.toString().length < this._maskValue.indexOf('?') || this._maskValue.indexOf('{') === 1) {
              return this._createValidationError(value);
            }

            if (this._maskValue.indexOf('*') === -1 || this._maskValue.indexOf('?') === -1) {
              var length = this._maskService.dropSpecialCharacters ? this._maskValue.length - this._maskService.checkSpecialCharAmount(this._maskValue) - counterOfOpt : this._maskValue.length - counterOfOpt;

              if (value.toString().length < length) {
                return this._createValidationError(value);
              }
            }
          }

          return null;
        }
      }, {
        key: "onInput",
        value: function onInput(e) {
          var el = e.target;
          this._inputValue = el.value;

          this._setMask();

          if (!this._maskValue) {
            this.onChange(el.value);
            return;
          }

          var position = el.selectionStart === 1 ? el.selectionStart + this._maskService.prefix.length : el.selectionStart;
          var caretShift = 0;
          var backspaceShift = false;

          this._maskService.applyValueChanges(position, function (shift, _backspaceShift) {
            caretShift = shift;
            backspaceShift = _backspaceShift;
          }); // only set the selection if the element is active


          if (this.document.activeElement !== el) {
            return;
          }

          this._position = this._position === 1 && this._inputValue.length === 1 ? null : this._position;
          var positionToApply = this._position ? this._inputValue.length + position + caretShift : position + (this._code === 'Backspace' && !backspaceShift ? 0 : caretShift);

          if (positionToApply > this._getActualInputLength()) {
            positionToApply = this._getActualInputLength();
          }

          el.setSelectionRange(positionToApply, positionToApply);

          if ((this.maskExpression.includes('H') || this.maskExpression.includes('M')) && caretShift === 0) {
            el.setSelectionRange(el.selectionStart + 1, el.selectionStart + 1);
          }

          this._position = null;
        }
      }, {
        key: "onBlur",
        value: function onBlur() {
          if (this._maskValue) {
            this._maskService.clearIfNotMatchFn();
          }

          this.onTouch();
        }
      }, {
        key: "onFocus",
        value: function onFocus(e) {
          if (!this._maskValue) {
            return;
          }

          var el = e.target;
          var posStart = 0;
          var posEnd = 0;
          if (el !== null && el.selectionStart !== null && el.selectionStart === el.selectionEnd && el.selectionStart > this._maskService.prefix.length && // tslint:disable-next-line
          e.keyCode !== 38) if (this._maskService.showMaskTyped) {
            // We are showing the mask in the input
            this._maskService.maskIsShown = this._maskService.showMaskInInput();

            if (el.setSelectionRange && this._maskService.prefix + this._maskService.maskIsShown === el.value) {
              // the input ONLY contains the mask, so position the cursor at the start
              el.focus();
              el.setSelectionRange(posStart, posEnd);
            } else {
              // the input contains some characters already
              if (el.selectionStart > this._maskService.actualValue.length) {
                // if the user clicked beyond our value's length, position the cursor at the end of our value
                el.setSelectionRange(this._maskService.actualValue.length, this._maskService.actualValue.length);
              }
            }
          }
          var nextValue = !el.value || el.value === this._maskService.prefix ? this._maskService.prefix + this._maskService.maskIsShown : el.value;
          /** Fix of cursor position jumping to end in most browsers no matter where cursor is inserted onFocus */

          if (el.value !== nextValue) {
            el.value = nextValue;
          }
          /** fix of cursor position with prefix when mouse click occur */


          if ((el.selectionStart || el.selectionEnd) <= this._maskService.prefix.length) {
            el.selectionStart = this._maskService.prefix.length;
            return;
          }
          /** select only inserted text */


          if (el.selectionEnd > this._getActualInputLength()) {
            el.selectionEnd = this._getActualInputLength();
          }
        } // tslint:disable-next-line: cyclomatic-complexity

      }, {
        key: "onKeyDown",
        value: function onKeyDown(e) {
          if (!this._maskValue) {
            return;
          }

          this._code = e.code ? e.code : e.key;
          var el = e.target;
          this._inputValue = el.value;

          this._setMask();

          if (e.keyCode === 38) {
            e.preventDefault();
          }

          if (e.keyCode === 37 || e.keyCode === 8 || e.keyCode === 46) {
            if (e.keyCode === 8 && el.value.length === 0) {
              el.selectionStart = el.selectionEnd;
            }

            if (e.keyCode === 8 && el.selectionStart !== 0) {
              // If specialChars is false, (shouldn't ever happen) then set to the defaults
              this.specialCharacters = this.specialCharacters || this._config.specialCharacters;

              if (this.prefix.length > 1 && el.selectionStart <= this.prefix.length) {
                el.setSelectionRange(this.prefix.length, this.prefix.length);
              } else {
                if (this._inputValue.length !== el.selectionStart && el.selectionStart !== 1) {
                  while (this.specialCharacters.includes(this._inputValue[el.selectionStart - 1].toString()) && (this.prefix.length >= 1 && el.selectionStart > this.prefix.length || this.prefix.length === 0)) {
                    el.setSelectionRange(el.selectionStart - 1, el.selectionStart - 1);
                  }
                }

                this.suffixCheckOnPressDelete(e.keyCode, el);
              }
            }

            this.suffixCheckOnPressDelete(e.keyCode, el);

            if (this._maskService.prefix.length && el.selectionStart <= this._maskService.prefix.length && el.selectionEnd <= this._maskService.prefix.length) {
              e.preventDefault();
            }

            var cursorStart = el.selectionStart; // this.onFocus(e);

            if (e.keyCode === 8 && !el.readOnly && cursorStart === 0 && el.selectionEnd === el.value.length && el.value.length !== 0) {
              this._position = this._maskService.prefix ? this._maskService.prefix.length : 0;

              this._maskService.applyMask(this._maskService.prefix, this._maskService.maskExpression, this._position);
            }
          }

          if (!!this.suffix && this.suffix.length > 1 && this._inputValue.length - this.suffix.length < el.selectionStart) {
            el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
          } else if (e.keyCode === 65 && e.ctrlKey === true || // Ctrl+ A
          e.keyCode === 65 && e.metaKey === true // Cmd + A (Mac)
          ) {
              el.setSelectionRange(0, this._getActualInputLength());
              e.preventDefault();
            }

          this._maskService.selStart = el.selectionStart;
          this._maskService.selEnd = el.selectionEnd;
        }
        /** It writes the value in the input */

      }, {
        key: "writeValue",
        value: function writeValue(inputValue) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (inputValue === undefined) {
                      inputValue = '';
                    }

                    if (typeof inputValue === 'number') {
                      inputValue = String(inputValue);
                      inputValue = this.decimalMarker !== '.' ? inputValue.replace('.', this.decimalMarker) : inputValue;
                      this._maskService.isNumberValue = true;
                    }

                    if (inputValue && this._maskService.maskExpression || this._maskService.maskExpression && (this._maskService.prefix || this._maskService.showMaskTyped)) {
                      // Let the service we know we are writing value so that triggering onChange function wont happen during applyMask
                      this._maskService.writingValue = true;
                      this._maskService.formElementProperty = ['value', this._maskService.applyMask(inputValue, this._maskService.maskExpression)]; // Let the service know we've finished writing value

                      this._maskService.writingValue = false;
                    } else {
                      this._maskService.formElementProperty = ['value', inputValue];
                    }

                    this._inputValue = inputValue;

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
          this._maskService.onChange = this.onChange;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouch = fn;
        }
      }, {
        key: "suffixCheckOnPressDelete",
        value: function suffixCheckOnPressDelete(keyCode, el) {
          if (keyCode === 46 && this.suffix.length > 0) {
            if (this._inputValue.length - this.suffix.length <= el.selectionStart) {
              el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
            }
          }

          if (keyCode === 8) {
            if (this.suffix.length > 1 && this._inputValue.length - this.suffix.length < el.selectionStart) {
              el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
            }

            if (this.suffix.length === 1 && this._inputValue.length === el.selectionStart) {
              el.setSelectionRange(el.selectionStart - 1, el.selectionStart - 1);
            }
          }
        }
        /** It disables the input element */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._maskService.formElementProperty = ['disabled', isDisabled];
        }
      }, {
        key: "onModelChange",
        value: function onModelChange(e) {
          if (!e) {
            this._maskService.actualValue = '';
          }
        }
      }, {
        key: "_repeatPatternSymbols",
        value: function _repeatPatternSymbols(maskExp) {
          var _this10 = this;

          return maskExp.match(/{[0-9]+}/) && maskExp.split('').reduce(function (accum, currval, index) {
            _this10._start = currval === '{' ? index : _this10._start;

            if (currval !== '}') {
              return _this10._maskService._findSpecialChar(currval) ? accum + currval : accum;
            }

            _this10._end = index;
            var repeatNumber = Number(maskExp.slice(_this10._start + 1, _this10._end));
            var repaceWith = new Array(repeatNumber + 1).join(maskExp[_this10._start - 1]);
            return accum + repaceWith;
          }, '') || maskExp;
        } // tslint:disable-next-line:no-any

      }, {
        key: "_applyMask",
        value: function _applyMask() {
          this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue || '');
          this._maskService.formElementProperty = ['value', this._maskService.applyMask(this._inputValue, this._maskService.maskExpression)];
        }
      }, {
        key: "_validateTime",
        value: function _validateTime(value) {
          var rowMaskLen = this._maskValue.split('').filter(function (s) {
            return s !== ':';
          }).length;

          if (value === null || value.length === 0) {
            return null; // Don't validate empty values to allow for optional form control
          }

          if (+value[value.length - 1] === 0 && value.length < rowMaskLen || value.length <= rowMaskLen - 2) {
            return this._createValidationError(value);
          }

          return null;
        }
      }, {
        key: "_getActualInputLength",
        value: function _getActualInputLength() {
          return this._maskService.actualValue.length || this._maskService.actualValue.length + this._maskService.prefix.length;
        }
      }, {
        key: "_createValidationError",
        value: function _createValidationError(actualValue) {
          return {
            mask: {
              requiredMask: this._maskValue,
              actualValue: actualValue
            }
          };
        }
      }, {
        key: "_setMask",
        value: function _setMask() {
          var _this11 = this;

          if (this._maskExpressionArray.length > 0) {
            this._maskExpressionArray.some(function (mask) {
              var test = _this11._maskService.removeMask(_this11._inputValue).length <= _this11._maskService.removeMask(mask).length;

              if (_this11._inputValue && test) {
                _this11._maskValue = mask;
                _this11.maskExpression = mask;
                _this11._maskService.maskExpression = mask;
                return test;
              } else {
                _this11._maskValue = _this11._maskExpressionArray[_this11._maskExpressionArray.length - 1];
                _this11.maskExpression = _this11._maskExpressionArray[_this11._maskExpressionArray.length - 1];
                _this11._maskService.maskExpression = _this11._maskExpressionArray[_this11._maskExpressionArray.length - 1];
              }
            });
          }
        }
      }]);

      return MaskDirective;
    }();

    MaskDirective.ɵfac = function MaskDirective_Factory(t) {
      return new (t || MaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MaskService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](config));
    };

    MaskDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MaskDirective,
      selectors: [["input", "mask", ""], ["textarea", "mask", ""]],
      hostBindings: function MaskDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function MaskDirective_input_HostBindingHandler($event) {
            return ctx.onInput($event);
          })("blur", function MaskDirective_blur_HostBindingHandler() {
            return ctx.onBlur();
          })("click", function MaskDirective_click_HostBindingHandler($event) {
            return ctx.onFocus($event);
          })("keydown", function MaskDirective_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("ngModelChange", function MaskDirective_ngModelChange_HostBindingHandler($event) {
            return ctx.onModelChange($event);
          });
        }
      },
      inputs: {
        maskExpression: ["mask", "maskExpression"],
        specialCharacters: "specialCharacters",
        patterns: "patterns",
        prefix: "prefix",
        suffix: "suffix",
        thousandSeparator: "thousandSeparator",
        decimalMarker: "decimalMarker",
        dropSpecialCharacters: "dropSpecialCharacters",
        hiddenInput: "hiddenInput",
        showMaskTyped: "showMaskTyped",
        placeHolderCharacter: "placeHolderCharacter",
        shownMaskExpression: "shownMaskExpression",
        showTemplate: "showTemplate",
        clearIfNotMatch: "clearIfNotMatch",
        validation: "validation",
        separatorLimit: "separatorLimit",
        allowNegativeNumbers: "allowNegativeNumbers"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MaskDirective_1;
        }),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MaskDirective_1;
        }),
        multi: true
      }, MaskService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    MaskDirective.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: MaskService
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [config]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mask'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], MaskDirective.prototype, "maskExpression", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MaskDirective.prototype, "specialCharacters", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MaskDirective.prototype, "patterns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MaskDirective.prototype, "prefix", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MaskDirective.prototype, "suffix", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MaskDirective.prototype, "thousandSeparator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MaskDirective.prototype, "decimalMarker", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MaskDirective.prototype, "dropSpecialCharacters", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MaskDirective.prototype, "hiddenInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MaskDirective.prototype, "showMaskTyped", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MaskDirective.prototype, "placeHolderCharacter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MaskDirective.prototype, "shownMaskExpression", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MaskDirective.prototype, "showTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MaskDirective.prototype, "clearIfNotMatch", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MaskDirective.prototype, "validation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MaskDirective.prototype, "separatorLimit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MaskDirective.prototype, "allowNegativeNumbers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], MaskDirective.prototype, "onInput", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], MaskDirective.prototype, "onBlur", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], MaskDirective.prototype, "onFocus", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], MaskDirective.prototype, "onKeyDown", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('ngModelChange', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], MaskDirective.prototype, "onModelChange", null);
    MaskDirective = MaskDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(config)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, MaskService, Object])], MaskDirective);

    var MaskPipe = /*#__PURE__*/function () {
      function MaskPipe(_maskService) {
        _classCallCheck(this, MaskPipe);

        this._maskService = _maskService;
      }

      _createClass(MaskPipe, [{
        key: "transform",
        value: function transform(value, mask) {
          var thousandSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          if (!value && typeof value !== 'number') {
            return '';
          }

          if (thousandSeparator) {
            this._maskService.thousandSeparator = thousandSeparator;
          }

          if (typeof mask === 'string') {
            return this._maskService.applyMask("".concat(value), mask);
          }

          return this._maskService.applyMaskWithPattern("".concat(value), mask);
        }
      }]);

      return MaskPipe;
    }();

    MaskPipe.ɵfac = function MaskPipe_Factory(t) {
      return new (t || MaskPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MaskApplierService));
    };

    MaskPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "mask",
      type: MaskPipe,
      pure: true
    });

    MaskPipe.ctorParameters = function () {
      return [{
        type: MaskApplierService
      }];
    };

    MaskPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MaskApplierService])], MaskPipe);
    var NgxMaskModule_1;

    var NgxMaskModule = NgxMaskModule_1 = /*#__PURE__*/function () {
      function NgxMaskModule() {
        _classCallCheck(this, NgxMaskModule);
      }

      _createClass(NgxMaskModule, null, [{
        key: "forRoot",
        value: function forRoot(configValue) {
          return {
            ngModule: NgxMaskModule_1,
            providers: [{
              provide: NEW_CONFIG,
              useValue: configValue
            }, {
              provide: INITIAL_CONFIG,
              useValue: initialConfig
            }, {
              provide: config,
              useFactory: _configFactory,
              deps: [INITIAL_CONFIG, NEW_CONFIG]
            }, MaskApplierService]
          };
        }
      }, {
        key: "forChild",
        value: function forChild() {
          return {
            ngModule: NgxMaskModule_1
          };
        }
      }]);

      return NgxMaskModule;
    }();

    NgxMaskModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NgxMaskModule
    });
    NgxMaskModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NgxMaskModule_Factory(t) {
        return new (t || NgxMaskModule)();
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaskApplierService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [config]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [config]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaskDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'input[mask], textarea[mask]',
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return MaskDirective_1;
            }),
            multi: true
          }, {
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return MaskDirective_1;
            }),
            multi: true
          }, MaskService]
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }, {
          type: MaskService
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [config]
          }]
        }];
      }, {
        maskExpression: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['mask']
        }],
        specialCharacters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        patterns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        prefix: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        suffix: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        thousandSeparator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        decimalMarker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dropSpecialCharacters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hiddenInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showMaskTyped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeHolderCharacter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        shownMaskExpression: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        clearIfNotMatch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        validation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        separatorLimit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        allowNegativeNumbers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['input', ['$event']]
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['blur']
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['click', ['$event']]
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['keydown', ['$event']]
        }],
        onModelChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['ngModelChange', ['$event']]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaskPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
          name: 'mask',
          pure: true
        }]
      }], function () {
        return [{
          type: MaskApplierService
        }];
      }, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxMaskModule, {
        declarations: [MaskDirective, MaskPipe],
        exports: [MaskDirective, MaskPipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMaskModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [MaskDirective, MaskPipe],
          declarations: [MaskDirective, MaskPipe]
        }]
      }], null, null);
    })();
    /**
     * @internal
     */


    function _configFactory(initConfig, configValue) {
      return configValue instanceof Function ? Object.assign(Object.assign({}, initConfig), configValue()) : Object.assign(Object.assign({}, initConfig), configValue);
    }
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-mask.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistroRegistroPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <ion-content>\r\n    <div class=\"container\">\r\n\r\n        <div class=\"row\" style=\"margin-top:20px\">\r\n            <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\r\n                <form role=\"form\">\r\n                    <fieldset>\r\n                        <h2>Registro do BIG BIG</h2>\r\n                        <hr class=\"colorgraph\">\r\n                        <div class=\"form-group\">\r\n                          <input type=\"text\" name=\"eadasd\" [(ngModel)]=\"data.nome\"  class=\"form-control input-lg\" placeholder=\"Digite seu nome\">\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <input type=\"text\" name=\"dasdsad\" id=\"\" [(ngModel)]=\"data.sobre\" class=\"form-control input-lg\" placeholder=\"Digite seu segundo nome\">\r\n                    </div>\r\n                      <div class=\"form-group\">\r\n                      <input type=\"text\" name=\"eadasdas\" id=\"\" [(ngModel)]=\"data.telefone\" class=\"form-control input-lg\" mask='00000000000' [dropSpecialCharacters]=\"false\" placeholder=\"Digite seu telefone com DDD\">\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <input type=\"text\" name=\"easdasda\" [(ngModel)]=\"data.indicou\" class=\"form-control input-lg\" placeholder=\"Digite quem te indicou\">\r\n                        </div>\r\n                       \r\n                        <div class=\"form-group\">\r\n                          <input type=\"password\" name=\"adasdasl\" [(ngModel)]=\"data.password\" class=\"form-control input-lg\" placeholder=\"Digite sua senha\">\r\n                      </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"password\" name=\"password\" [(ngModel)]=\"data.repita\" class=\"form-control input-lg\" placeholder=\"Repita sua senha\">\r\n                        </div>\r\n                        \r\n                        <hr class=\"colorgraph\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                                <input (click)=\"submitForm()\" type=\"submit\" class=\"btn btn-lg btn-success btn-block\" value=\"Registar\">\r\n                            </div>\r\n                             <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                                <a routerLink='../login' class=\"btn btn-lg btn-primary btn-block\">Voltar</a>\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        \r\n        </div>\t<script type=\"text/javascript\">\r\n            $(function(){\r\n            $('.button-checkbox').each(function(){\r\n                var $widget = $(this),\r\n                    $button = $widget.find('button'),\r\n                    $checkbox = $widget.find('input:checkbox'),\r\n                    color = $button.data('color'),\r\n                    settings = {\r\n                            on: {\r\n                                icon: 'glyphicon glyphicon-check'\r\n                            },\r\n                            off: {\r\n                                icon: 'glyphicon glyphicon-unchecked'\r\n                            }\r\n                    };\r\n        \r\n                $button.on('click', function () {\r\n                    $checkbox.prop('checked', !$checkbox.is(':checked'));\r\n                    $checkbox.triggerHandler('change');\r\n                    updateDisplay();\r\n                });\r\n        \r\n                $checkbox.on('change', function () {\r\n                    updateDisplay();\r\n                });\r\n        \r\n                function updateDisplay() {\r\n                    var isChecked = $checkbox.is(':checked');\r\n                    // Set the button's state\r\n                    $button.data('state', (isChecked) ? \"on\" : \"off\");\r\n        \r\n                    // Set the button's icon\r\n                    $button.find('.state-icon')\r\n                        .removeClass()\r\n                        .addClass('state-icon ' + settings[$button.data('state')].icon);\r\n        \r\n                    // Update the button's color\r\n                    if (isChecked) {\r\n                        $button\r\n                            .removeClass('btn-default')\r\n                            .addClass('btn-' + color + ' active');\r\n                    }\r\n                    else\r\n                    {\r\n                        $button\r\n                            .removeClass('btn-' + color + ' active')\r\n                            .addClass('btn-default');\r\n                    }\r\n                }\r\n                function init() {\r\n                    updateDisplay();\r\n                    // Inject the icon if applicable\r\n                    if ($button.find('.state-icon').length == 0) {\r\n                        $button.prepend('<i class=\"state-icon ' + settings[$button.data('state')].icon + '\"></i> ');\r\n                    }\r\n                }\r\n                init();\r\n            });\r\n        });\t</script>\r\n  </ion-content>\r\n  ";
    /***/
  },

  /***/
  "./src/app/registro/registro-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/registro/registro-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: RegistroPageRoutingModule */

  /***/
  function srcAppRegistroRegistroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPageRoutingModule", function () {
      return RegistroPageRoutingModule;
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


    var _registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registro.page */
    "./src/app/registro/registro.page.ts");

    var routes = [{
      path: '',
      component: _registro_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPage"]
    }];

    var RegistroPageRoutingModule = function RegistroPageRoutingModule() {
      _classCallCheck(this, RegistroPageRoutingModule);
    };

    RegistroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistroPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/registro/registro.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/registro/registro.module.ts ***!
    \*********************************************/

  /*! exports provided: options, RegistroPageModule */

  /***/
  function srcAppRegistroRegistroModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "options", function () {
      return options;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function () {
      return RegistroPageModule;
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


    var _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registro-routing.module */
    "./src/app/registro/registro-routing.module.ts");
    /* harmony import */


    var _registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registro.page */
    "./src/app/registro/registro.page.ts");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");

    var options;

    var RegistroPageModule = function RegistroPageModule() {
      _classCallCheck(this, RegistroPageModule);
    };

    RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPageRoutingModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot(options)],
      declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPage"]]
    })], RegistroPageModule);
    /***/
  },

  /***/
  "./src/app/registro/registro.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/registro/registro.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistroRegistroPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".colorgraph {\n  height: 5px;\n  border-top: 0;\n  background: #c4e17f;\n  border-radius: 5px;\n  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm8vQzpcXHByb2plY3RzXFxvcGFzL3NyY1xcYXBwXFxyZWdpc3Ryb1xccmVnaXN0cm8ucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Ryby9yZWdpc3Ryby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFJbEIsbVFBQW1RO0FDQ3ZRIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cm8vcmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yZ3JhcGgge1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2M0ZTE3ZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNjNGUxN2YsICNjNGUxN2YgMTIuNSUsICNmN2ZkY2EgMTIuNSUsICNmN2ZkY2EgMjUlLCAjZmVjZjcxIDI1JSwgI2ZlY2Y3MSAzNy41JSwgI2YwNzc2YyAzNy41JSwgI2YwNzc2YyA1MCUsICNkYjlkYmUgNTAlLCAjZGI5ZGJlIDYyLjUlLCAjYzQ5Y2RlIDYyLjUlLCAjYzQ5Y2RlIDc1JSwgIzY2OWFlMSA3NSUsICM2NjlhZTEgODcuNSUsICM2MmMyZTQgODcuNSUsICM2MmMyZTQpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgI2M0ZTE3ZiwgI2M0ZTE3ZiAxMi41JSwgI2Y3ZmRjYSAxMi41JSwgI2Y3ZmRjYSAyNSUsICNmZWNmNzEgMjUlLCAjZmVjZjcxIDM3LjUlLCAjZjA3NzZjIDM3LjUlLCAjZjA3NzZjIDUwJSwgI2RiOWRiZSA1MCUsICNkYjlkYmUgNjIuNSUsICNjNDljZGUgNjIuNSUsICNjNDljZGUgNzUlLCAjNjY5YWUxIDc1JSwgIzY2OWFlMSA4Ny41JSwgIzYyYzJlNCA4Ny41JSwgIzYyYzJlNCk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgI2M0ZTE3ZiwgI2M0ZTE3ZiAxMi41JSwgI2Y3ZmRjYSAxMi41JSwgI2Y3ZmRjYSAyNSUsICNmZWNmNzEgMjUlLCAjZmVjZjcxIDM3LjUlLCAjZjA3NzZjIDM3LjUlLCAjZjA3NzZjIDUwJSwgI2RiOWRiZSA1MCUsICNkYjlkYmUgNjIuNSUsICNjNDljZGUgNjIuNSUsICNjNDljZGUgNzUlLCAjNjY5YWUxIDc1JSwgIzY2OWFlMSA4Ny41JSwgIzYyYzJlNCA4Ny41JSwgIzYyYzJlNCk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjNGUxN2YsICNjNGUxN2YgMTIuNSUsICNmN2ZkY2EgMTIuNSUsICNmN2ZkY2EgMjUlLCAjZmVjZjcxIDI1JSwgI2ZlY2Y3MSAzNy41JSwgI2YwNzc2YyAzNy41JSwgI2YwNzc2YyA1MCUsICNkYjlkYmUgNTAlLCAjZGI5ZGJlIDYyLjUlLCAjYzQ5Y2RlIDYyLjUlLCAjYzQ5Y2RlIDc1JSwgIzY2OWFlMSA3NSUsICM2NjlhZTEgODcuNSUsICM2MmMyZTQgODcuNSUsICM2MmMyZTQpO1xyXG4gIH0gICAiLCIuY29sb3JncmFwaCB7XG4gIGhlaWdodDogNXB4O1xuICBib3JkZXItdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiAjYzRlMTdmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNjNGUxN2YsICNjNGUxN2YgMTIuNSUsICNmN2ZkY2EgMTIuNSUsICNmN2ZkY2EgMjUlLCAjZmVjZjcxIDI1JSwgI2ZlY2Y3MSAzNy41JSwgI2YwNzc2YyAzNy41JSwgI2YwNzc2YyA1MCUsICNkYjlkYmUgNTAlLCAjZGI5ZGJlIDYyLjUlLCAjYzQ5Y2RlIDYyLjUlLCAjYzQ5Y2RlIDc1JSwgIzY2OWFlMSA3NSUsICM2NjlhZTEgODcuNSUsICM2MmMyZTQgODcuNSUsICM2MmMyZTQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjYzRlMTdmLCAjYzRlMTdmIDEyLjUlLCAjZjdmZGNhIDEyLjUlLCAjZjdmZGNhIDI1JSwgI2ZlY2Y3MSAyNSUsICNmZWNmNzEgMzcuNSUsICNmMDc3NmMgMzcuNSUsICNmMDc3NmMgNTAlLCAjZGI5ZGJlIDUwJSwgI2RiOWRiZSA2Mi41JSwgI2M0OWNkZSA2Mi41JSwgI2M0OWNkZSA3NSUsICM2NjlhZTEgNzUlLCAjNjY5YWUxIDg3LjUlLCAjNjJjMmU0IDg3LjUlLCAjNjJjMmU0KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICNjNGUxN2YsICNjNGUxN2YgMTIuNSUsICNmN2ZkY2EgMTIuNSUsICNmN2ZkY2EgMjUlLCAjZmVjZjcxIDI1JSwgI2ZlY2Y3MSAzNy41JSwgI2YwNzc2YyAzNy41JSwgI2YwNzc2YyA1MCUsICNkYjlkYmUgNTAlLCAjZGI5ZGJlIDYyLjUlLCAjYzQ5Y2RlIDYyLjUlLCAjYzQ5Y2RlIDc1JSwgIzY2OWFlMSA3NSUsICM2NjlhZTEgODcuNSUsICM2MmMyZTQgODcuNSUsICM2MmMyZTQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjNGUxN2YsICNjNGUxN2YgMTIuNSUsICNmN2ZkY2EgMTIuNSUsICNmN2ZkY2EgMjUlLCAjZmVjZjcxIDI1JSwgI2ZlY2Y3MSAzNy41JSwgI2YwNzc2YyAzNy41JSwgI2YwNzc2YyA1MCUsICNkYjlkYmUgNTAlLCAjZGI5ZGJlIDYyLjUlLCAjYzQ5Y2RlIDYyLjUlLCAjYzQ5Y2RlIDc1JSwgIzY2OWFlMSA3NSUsICM2NjlhZTEgODcuNSUsICM2MmMyZTQgODcuNSUsICM2MmMyZTQpO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/registro/registro.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/registro/registro.page.ts ***!
    \*******************************************/

  /*! exports provided: RegistroPage */

  /***/
  function srcAppRegistroRegistroPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPage", function () {
      return RegistroPage;
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


    var _models_student__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/student */
    "./src/app/models/student.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RegistroPage = /*#__PURE__*/function () {
      function RegistroPage(apiService, router) {
        _classCallCheck(this, RegistroPage);

        this.apiService = apiService;
        this.router = router;
        this.data = new _models_student__WEBPACK_IMPORTED_MODULE_2__["Student"]();
      }

      _createClass(RegistroPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this12 = this;

          if (this.data.indicou === undefined) {
            this.data.indicou = "";
          }

          console.log(this.data.indicou);

          if (this.data.indicou != "") {
            this.apiService.pegaagente(this.data.indicou).subscribe(function (response) {
              var g = response;
              console.log(g);
              console.log(response);

              if (g == 'sim') {
                if (_this12.data.password == _this12.data.repita) {
                  _this12.apiService.registro(_this12.data.nome, _this12.data.sobre, _this12.data.telefone, _this12.data.password, _this12.data.indicou).subscribe(function (response) {
                    if (response != "") {
                      _this12.router.navigate(['login']);
                    } else {
                      alert('Já possui registro!');
                    }
                  });
                }
              } else {
                _this12.data.indicou = '0000000000';

                if (_this12.data.password == _this12.data.repita) {
                  _this12.apiService.registro(_this12.data.nome, _this12.data.sobre, _this12.data.telefone, _this12.data.password, _this12.data.indicou).subscribe(function (response) {
                    if (response != "") {
                      _this12.router.navigate(['login']);
                    } else {
                      alert('Já possui registro!');
                    }
                  });
                }
              }
            });
          } else {
            this.data.indicou = '0000000000';

            if (this.data.password == this.data.repita) {
              this.apiService.registro(this.data.nome, this.data.sobre, this.data.telefone, this.data.password, this.data.indicou).subscribe(function (response) {
                console.log(response);

                if (response != "") {
                  _this12.router.navigate(['login']);
                } else {
                  alert('Já possui registro!');
                }
              });
            } else {
              alert('senha não sao iguais');
            }
          }
          /*  if(this.data.password == this.data.repita){
              this.apiService.registro(this.data.nome,this.data.sobre,this.data.telefone,this.data.password,this.data.indicou).subscribe((response) => {
                if(response == null){
                  this.router.navigate(['login']);
                }
                else{
                  alert('Já possui registro!');
                }
              });
            }
            else{
              console.log('senha não sao iguais')
            }
                  */

        }
      }]);

      return RegistroPage;
    }();

    RegistroPage.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registro',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./registro.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./registro.page.scss */
      "./src/app/registro/registro.page.scss"))["default"]]
    })], RegistroPage);
    /***/
  }
}]);
//# sourceMappingURL=registro-registro-module-es5.js.map