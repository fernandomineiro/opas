(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-textarea-md.entry.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-textarea-md.entry.js ***!
  \************************************************************************/
/*! exports provided: ion_textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_textarea", function() { return Textarea; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-29df6f59.js */ "./node_modules/@ionic/core/dist/esm-es5/index-29df6f59.js");
/* harmony import */ var _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-08f4fb8a.js */ "./node_modules/@ionic/core/dist/esm-es5/ionic-global-08f4fb8a.js");
/* harmony import */ var _helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-5c745fbd.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-5c745fbd.js");
/* harmony import */ var _theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-3f0b0c04.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-3f0b0c04.js");





var textareaIosCss = ".sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);white-space:pre-wrap;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-textarea-ios-h{background:initial}.ion-color.sc-ion-textarea-ios-h{color:var(--ion-color-base)}ion-item.sc-ion-textarea-ios-h,ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-ios-h:not(.item-label),ion-item:not(.item-label) .sc-ion-textarea-ios-h{--padding-start:0}.textarea-wrapper.sc-ion-textarea-ios{min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit}.native-textarea.sc-ion-textarea-ios{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-textarea.sc-ion-textarea-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-ios{opacity:0.4}.cloned-input.sc-ion-textarea-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-ios .cloned-input.sc-ion-textarea-ios,[dir=rtl].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios,[dir=rtl] .sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios{left:unset;right:unset;right:0}.sc-ion-textarea-ios-h{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-stacked.sc-ion-textarea-ios-h,.item-label-stacked .sc-ion-textarea-ios-h,.item-label-floating.sc-ion-textarea-ios-h,.item-label-floating .sc-ion-textarea-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}";
var textareaMdCss = ".sc-ion-textarea-md-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);white-space:pre-wrap;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-textarea-md-h{background:initial}.ion-color.sc-ion-textarea-md-h{color:var(--ion-color-base)}ion-item.sc-ion-textarea-md-h,ion-item .sc-ion-textarea-md-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-md-h:not(.item-label),ion-item:not(.item-label) .sc-ion-textarea-md-h{--padding-start:0}.textarea-wrapper.sc-ion-textarea-md{min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit}.native-textarea.sc-ion-textarea-md{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-textarea.sc-ion-textarea-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-md::-webkit-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-moz-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md:-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-ms-input-placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::placeholder{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-md{opacity:0.4}.cloned-input.sc-ion-textarea-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-md .cloned-input.sc-ion-textarea-md,[dir=rtl].sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md,[dir=rtl] .sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md{left:unset;right:unset;right:0}.sc-ion-textarea-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:8px;margin-left:0;margin-right:0;margin-top:8px;margin-bottom:0;font-size:inherit}.item-label-stacked.sc-ion-textarea-md-h,.item-label-stacked .sc-ion-textarea-md-h,.item-label-floating.sc-ion-textarea-md-h,.item-label-floating .sc-ion-textarea-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}";
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
var Textarea = /** @class */ (function () {
    function Textarea(hostRef) {
        var _this = this;
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.inputId = "ion-input-" + textareaIds++;
        this.didBlurAfterEdit = false;
        this.hasFocus = false;
        /**
         * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
         */
        this.autocapitalize = 'none';
        /**
         * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
         */
        this.autofocus = false;
        /**
         * If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.
         */
        this.clearOnEdit = false;
        /**
         * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
         */
        this.debounce = 0;
        /**
         * If `true`, the user cannot interact with the textarea.
         */
        this.disabled = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the user cannot modify the value.
         */
        this.readonly = false;
        /**
         * If `true`, the user must fill in a value before submitting a form.
         */
        this.required = false;
        /**
         * If `true`, the element will have its spelling and grammar checked.
         */
        this.spellcheck = false;
        /**
         * If `true`, the element height will increase based on the value.
         */
        this.autoGrow = false;
        /**
         * The value of the textarea.
         */
        this.value = '';
        this.onInput = function (ev) {
            if (_this.nativeInput) {
                _this.value = _this.nativeInput.value;
            }
            _this.emitStyle();
            _this.ionInput.emit(ev);
        };
        this.onFocus = function () {
            _this.hasFocus = true;
            _this.focusChange();
            _this.ionFocus.emit();
        };
        this.onBlur = function () {
            _this.hasFocus = false;
            _this.focusChange();
            _this.ionBlur.emit();
        };
        this.onKeyDown = function () {
            _this.checkClearOnEdit();
        };
        this.ionChange = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionChange", 7);
        this.ionInput = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionInput", 7);
        this.ionStyle = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionStyle", 7);
        this.ionBlur = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionBlur", 7);
        this.ionFocus = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionFocus", 7);
    }
    Textarea.prototype.debounceChanged = function () {
        this.ionChange = Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this.ionChange, this.debounce);
    };
    Textarea.prototype.disabledChanged = function () {
        this.emitStyle();
    };
    /**
     * Update the native input element when the value changes
     */
    Textarea.prototype.valueChanged = function () {
        var nativeInput = this.nativeInput;
        var value = this.getValue();
        if (nativeInput && nativeInput.value !== value) {
            nativeInput.value = value;
        }
        this.runAutoGrow();
        this.emitStyle();
        this.ionChange.emit({ value: value });
    };
    Textarea.prototype.connectedCallback = function () {
        this.emitStyle();
        this.debounceChanged();
        {
            document.dispatchEvent(new CustomEvent('ionInputDidLoad', {
                detail: this.el
            }));
        }
    };
    Textarea.prototype.disconnectedCallback = function () {
        {
            document.dispatchEvent(new CustomEvent('ionInputDidUnload', {
                detail: this.el
            }));
        }
    };
    Textarea.prototype.componentDidLoad = function () {
        var _this = this;
        Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_3__["r"])(function () { return _this.runAutoGrow(); });
    };
    Textarea.prototype.runAutoGrow = function () {
        var _this = this;
        var nativeInput = this.nativeInput;
        if (nativeInput && this.autoGrow) {
            Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["d"])(function () {
                nativeInput.style.height = 'auto';
                nativeInput.style.height = nativeInput.scrollHeight + 'px';
                if (_this.textareaWrapper) {
                    _this.textareaWrapper.style.height = nativeInput.scrollHeight + 'px';
                }
            });
        }
    };
    /**
     * Sets focus on the specified `ion-textarea`. Use this method instead of the global
     * `input.focus()`.
     */
    Textarea.prototype.setFocus = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.nativeInput) {
                    this.nativeInput.focus();
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Returns the native `<textarea>` element used under the hood.
     */
    Textarea.prototype.getInputElement = function () {
        return Promise.resolve(this.nativeInput);
    };
    Textarea.prototype.emitStyle = function () {
        this.ionStyle.emit({
            'interactive': true,
            'textarea': true,
            'input': true,
            'interactive-disabled': this.disabled,
            'has-placeholder': this.placeholder != null,
            'has-value': this.hasValue(),
            'has-focus': this.hasFocus
        });
    };
    /**
     * Check if we need to clear the text input if clearOnEdit is enabled
     */
    Textarea.prototype.checkClearOnEdit = function () {
        if (!this.clearOnEdit) {
            return;
        }
        // Did the input value change after it was blurred and edited?
        if (this.didBlurAfterEdit && this.hasValue()) {
            // Clear the input
            this.value = '';
        }
        // Reset the flag
        this.didBlurAfterEdit = false;
    };
    Textarea.prototype.focusChange = function () {
        // If clearOnEdit is enabled and the input blurred but has a value, set a flag
        if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
            this.didBlurAfterEdit = true;
        }
        this.emitStyle();
    };
    Textarea.prototype.hasValue = function () {
        return this.getValue() !== '';
    };
    Textarea.prototype.getValue = function () {
        return this.value || '';
    };
    Textarea.prototype.render = function () {
        var _a;
        var _this = this;
        var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
        var value = this.getValue();
        var labelId = this.inputId + '-lbl';
        var label = Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_3__["f"])(this.el);
        if (label) {
            label.id = labelId;
        }
        return (Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["H"], { "aria-disabled": this.disabled ? 'true' : null, class: Object.assign(Object.assign({}, Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this.color)), (_a = {}, _a[mode] = true, _a)) }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "textarea-wrapper", ref: function (el) { return _this.textareaWrapper = el; } }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["h"])("textarea", { class: "native-textarea", "aria-labelledby": labelId, ref: function (el) { return _this.nativeInput = el; }, autoCapitalize: this.autocapitalize, autoFocus: this.autofocus, enterKeyHint: this.enterkeyhint, inputMode: this.inputmode, disabled: this.disabled, maxLength: this.maxlength, minLength: this.minlength, name: this.name, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, spellcheck: this.spellcheck, cols: this.cols, rows: this.rows, wrap: this.wrap, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown }, value))));
    };
    Object.defineProperty(Textarea.prototype, "el", {
        get: function () { return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Textarea, "watchers", {
        get: function () {
            return {
                "debounce": ["debounceChanged"],
                "disabled": ["disabledChanged"],
                "value": ["valueChanged"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return Textarea;
}());
var textareaIds = 0;
Textarea.style = {
    /*STENCIL:MODE:ios*/ ios: textareaIosCss,
    /*STENCIL:MODE:md*/ md: textareaMdCss
};



/***/ })

}]);
//# sourceMappingURL=71-es5.js.map