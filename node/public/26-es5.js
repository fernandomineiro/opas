(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2-ios.entry.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-infinite-scroll_2-ios.entry.js ***!
  \**********************************************************************************/
/*! exports provided: ion_infinite_scroll, ion_infinite_scroll_content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_infinite_scroll", function() { return InfiniteScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_infinite_scroll_content", function() { return InfiniteScrollContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-29df6f59.js */ "./node_modules/@ionic/core/dist/esm-es5/index-29df6f59.js");
/* harmony import */ var _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-08f4fb8a.js */ "./node_modules/@ionic/core/dist/esm-es5/ionic-global-08f4fb8a.js");
/* harmony import */ var _index_79d74e0b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-79d74e0b.js */ "./node_modules/@ionic/core/dist/esm-es5/index-79d74e0b.js");




var infiniteScrollCss = "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";
var InfiniteScroll = /** @class */ (function () {
    function InfiniteScroll(hostRef) {
        var _this = this;
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.thrPx = 0;
        this.thrPc = 0;
        this.didFire = false;
        this.isBusy = false;
        this.isLoading = false;
        /**
         * The threshold distance from the bottom
         * of the content to call the `infinite` output event when scrolled.
         * The threshold value can be either a percent, or
         * in pixels. For example, use the value of `10%` for the `infinite`
         * output event to get called when the user has scrolled 10%
         * from the bottom of the page. Use the value `100px` when the
         * scroll is within 100 pixels from the bottom of the page.
         */
        this.threshold = '15%';
        /**
         * If `true`, the infinite scroll will be hidden and scroll event listeners
         * will be removed.
         *
         * Set this to true to disable the infinite scroll from actively
         * trying to receive new data while scrolling. This is useful
         * when it is known that there is no more data that can be added, and
         * the infinite scroll is no longer needed.
         */
        this.disabled = false;
        /**
         * The position of the infinite scroll element.
         * The value can be either `top` or `bottom`.
         */
        this.position = 'bottom';
        this.onScroll = function () {
            var scrollEl = _this.scrollEl;
            if (!scrollEl || !_this.canStart()) {
                return 1;
            }
            var infiniteHeight = _this.el.offsetHeight;
            if (infiniteHeight === 0) {
                // if there is no height of this element then do nothing
                return 2;
            }
            var scrollTop = scrollEl.scrollTop;
            var scrollHeight = scrollEl.scrollHeight;
            var height = scrollEl.offsetHeight;
            var threshold = _this.thrPc !== 0 ? (height * _this.thrPc) : _this.thrPx;
            var distanceFromInfinite = (_this.position === 'bottom')
                ? scrollHeight - infiniteHeight - scrollTop - threshold - height
                : scrollTop - infiniteHeight - threshold;
            if (distanceFromInfinite < 0) {
                if (!_this.didFire) {
                    _this.isLoading = true;
                    _this.didFire = true;
                    _this.ionInfinite.emit();
                    return 3;
                }
            }
            else {
                _this.didFire = false;
            }
            return 4;
        };
        this.ionInfinite = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionInfinite", 7);
    }
    InfiniteScroll.prototype.thresholdChanged = function () {
        var val = this.threshold;
        if (val.lastIndexOf('%') > -1) {
            this.thrPx = 0;
            this.thrPc = (parseFloat(val) / 100);
        }
        else {
            this.thrPx = parseFloat(val);
            this.thrPc = 0;
        }
    };
    InfiniteScroll.prototype.disabledChanged = function () {
        var disabled = this.disabled;
        if (disabled) {
            this.isLoading = false;
            this.isBusy = false;
        }
        this.enableScrollEvents(!disabled);
    };
    InfiniteScroll.prototype.connectedCallback = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var contentEl, _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        contentEl = this.el.closest('ion-content');
                        if (!contentEl) {
                            console.error('<ion-infinite-scroll> must be used inside an <ion-content>');
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, contentEl.getScrollElement()];
                    case 1:
                        _a.scrollEl = _b.sent();
                        this.thresholdChanged();
                        this.disabledChanged();
                        if (this.position === 'top') {
                            Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["w"])(function () {
                                if (_this.scrollEl) {
                                    _this.scrollEl.scrollTop = _this.scrollEl.scrollHeight - _this.scrollEl.clientHeight;
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    InfiniteScroll.prototype.disconnectedCallback = function () {
        this.enableScrollEvents(false);
        this.scrollEl = undefined;
    };
    /**
     * Call `complete()` within the `ionInfinite` output event handler when
     * your async operation has completed. For example, the `loading`
     * state is while the app is performing an asynchronous operation,
     * such as receiving more data from an AJAX request to add more items
     * to a data list. Once the data has been received and UI updated, you
     * then call this method to signify that the loading has completed.
     * This method will change the infinite scroll's state from `loading`
     * to `enabled`.
     */
    InfiniteScroll.prototype.complete = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var scrollEl, prev_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                scrollEl = this.scrollEl;
                if (!this.isLoading || !scrollEl) {
                    return [2 /*return*/];
                }
                this.isLoading = false;
                if (this.position === 'top') {
                    /**
                     * New content is being added at the top, but the scrollTop position stays the same,
                     * which causes a scroll jump visually. This algorithm makes sure to prevent this.
                     * (Frame 1)
                     *    - complete() is called, but the UI hasn't had time to update yet.
                     *    - Save the current content dimensions.
                     *    - Wait for the next frame using _dom.read, so the UI will be updated.
                     * (Frame 2)
                     *    - Read the new content dimensions.
                     *    - Calculate the height difference and the new scroll position.
                     *    - Delay the scroll position change until other possible dom reads are done using _dom.write to be performant.
                     * (Still frame 2, if I'm correct)
                     *    - Change the scroll position (= visually maintain the scroll position).
                     *    - Change the state to re-enable the InfiniteScroll.
                     *    - This should be after changing the scroll position, or it could
                     *    cause the InfiniteScroll to be triggered again immediately.
                     * (Frame 3)
                     *    Done.
                     */
                    this.isBusy = true;
                    prev_1 = scrollEl.scrollHeight - scrollEl.scrollTop;
                    // ******** DOM READ ****************
                    requestAnimationFrame(function () {
                        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["d"])(function () {
                            // UI has updated, save the new content dimensions
                            var scrollHeight = scrollEl.scrollHeight;
                            // New content was added on top, so the scroll position should be changed immediately to prevent it from jumping around
                            var newScrollTop = scrollHeight - prev_1;
                            // ******** DOM WRITE ****************
                            requestAnimationFrame(function () {
                                Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["w"])(function () {
                                    scrollEl.scrollTop = newScrollTop;
                                    _this.isBusy = false;
                                });
                            });
                        });
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    InfiniteScroll.prototype.canStart = function () {
        return (!this.disabled &&
            !this.isBusy &&
            !!this.scrollEl &&
            !this.isLoading);
    };
    InfiniteScroll.prototype.enableScrollEvents = function (shouldListen) {
        if (this.scrollEl) {
            if (shouldListen) {
                this.scrollEl.addEventListener('scroll', this.onScroll);
            }
            else {
                this.scrollEl.removeEventListener('scroll', this.onScroll);
            }
        }
    };
    InfiniteScroll.prototype.render = function () {
        var _a;
        var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
        var disabled = this.disabled;
        return (Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: (_a = {},
                _a[mode] = true,
                _a['infinite-scroll-loading'] = this.isLoading,
                _a['infinite-scroll-enabled'] = !disabled,
                _a) }));
    };
    Object.defineProperty(InfiniteScroll.prototype, "el", {
        get: function () { return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InfiniteScroll, "watchers", {
        get: function () {
            return {
                "threshold": ["thresholdChanged"],
                "disabled": ["disabledChanged"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return InfiniteScroll;
}());
InfiniteScroll.style = infiniteScrollCss;
var infiniteScrollContentIosCss = "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}";
var infiniteScrollContentMdCss = "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}";
var InfiniteScrollContent = /** @class */ (function () {
    function InfiniteScrollContent(hostRef) {
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    }
    InfiniteScrollContent.prototype.componentDidLoad = function () {
        if (this.loadingSpinner === undefined) {
            var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
            this.loadingSpinner = _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_2__["c"].get('infiniteLoadingSpinner', _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_2__["c"].get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
        }
    };
    InfiniteScrollContent.prototype.render = function () {
        var _a;
        var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
        return (Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: (_a = {},
                _a[mode] = true,
                // Used internally for styling
                _a["infinite-scroll-content-" + mode] = true,
                _a) }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "infinite-loading" }, this.loadingSpinner && (Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "infinite-loading-spinner" }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-spinner", { name: this.loadingSpinner }))), this.loadingText && (Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "infinite-loading-text", innerHTML: Object(_index_79d74e0b_js__WEBPACK_IMPORTED_MODULE_3__["s"])(this.loadingText) })))));
    };
    return InfiniteScrollContent;
}());
InfiniteScrollContent.style = {
    /*STENCIL:MODE:ios*/ ios: infiniteScrollContentIosCss,
    /*STENCIL:MODE:md*/ md: infiniteScrollContentMdCss
};



/***/ })

}]);
//# sourceMappingURL=26-es5.js.map