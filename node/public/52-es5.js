(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-reorder_2-md.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-reorder_2-md.entry.js ***!
  \*************************************************************************/
/*! exports provided: ion_reorder, ion_reorder_group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_reorder", function() { return Reorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_reorder_group", function() { return ReorderGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-29df6f59.js */ "./node_modules/@ionic/core/dist/esm-es5/index-29df6f59.js");
/* harmony import */ var _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-08f4fb8a.js */ "./node_modules/@ionic/core/dist/esm-es5/ionic-global-08f4fb8a.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm-es5/haptic-7b8ba70a.js");




var reorderIosCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}";
var reorderMdCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}";
/**
 * @part icon - The icon of the reorder handle (uses ion-icon).
 */
var Reorder = /** @class */ (function () {
    function Reorder(hostRef) {
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
    }
    Reorder.prototype.onClick = function (ev) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
    };
    Reorder.prototype.render = function () {
        var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
        var reorderIcon = mode === 'ios' ? 'reorder-three-outline' : 'reorder-two-sharp';
        return (Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: mode }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { name: reorderIcon, lazy: false, class: "reorder-icon", part: "icon" }))));
    };
    return Reorder;
}());
Reorder.style = {
    /*STENCIL:MODE:ios*/ ios: reorderIosCss,
    /*STENCIL:MODE:md*/ md: reorderMdCss
};
var reorderGroupCss = ".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}";
var ReorderGroup = /** @class */ (function () {
    function ReorderGroup(hostRef) {
        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.lastToIndex = -1;
        this.cachedHeights = [];
        this.scrollElTop = 0;
        this.scrollElBottom = 0;
        this.scrollElInitial = 0;
        this.containerTop = 0;
        this.containerBottom = 0;
        this.state = 0 /* Idle */;
        /**
         * If `true`, the reorder will be hidden.
         */
        this.disabled = true;
        this.ionItemReorder = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this, "ionItemReorder", 7);
    }
    ReorderGroup.prototype.disabledChanged = function () {
        if (this.gesture) {
            this.gesture.enable(!this.disabled);
        }
    };
    ReorderGroup.prototype.connectedCallback = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var contentEl, _a, _b;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        contentEl = this.el.closest('ion-content');
                        if (!contentEl) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, contentEl.getScrollElement()];
                    case 1:
                        _a.scrollEl = _c.sent();
                        _c.label = 2;
                    case 2:
                        _b = this;
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm-es5/index-eea61379.js"))];
                    case 3:
                        _b.gesture = (_c.sent()).createGesture({
                            el: this.el,
                            gestureName: 'reorder',
                            gesturePriority: 110,
                            threshold: 0,
                            direction: 'y',
                            passive: false,
                            canStart: function (detail) { return _this.canStart(detail); },
                            onStart: function (ev) { return _this.onStart(ev); },
                            onMove: function (ev) { return _this.onMove(ev); },
                            onEnd: function () { return _this.onEnd(); },
                        });
                        this.disabledChanged();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReorderGroup.prototype.disconnectedCallback = function () {
        this.onEnd();
        if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
        }
    };
    /**
     * Completes the reorder operation. Must be called by the `ionItemReorder` event.
     *
     * If a list of items is passed, the list will be reordered and returned in the
     * proper order.
     *
     * If no parameters are passed or if `true` is passed in, the reorder will complete
     * and the item will remain in the position it was dragged to. If `false` is passed,
     * the reorder will complete and the item will bounce back to its original position.
     *
     * @param listOrReorder A list of items to be sorted and returned in the new order or a
     * boolean of whether or not the reorder should reposition the item.
     */
    ReorderGroup.prototype.complete = function (listOrReorder) {
        return Promise.resolve(this.completeSync(listOrReorder));
    };
    ReorderGroup.prototype.canStart = function (ev) {
        if (this.selectedItemEl || this.state !== 0 /* Idle */) {
            return false;
        }
        var target = ev.event.target;
        var reorderEl = target.closest('ion-reorder');
        if (!reorderEl) {
            return false;
        }
        var item = findReorderItem(reorderEl, this.el);
        if (!item) {
            return false;
        }
        ev.data = item;
        return true;
    };
    ReorderGroup.prototype.onStart = function (ev) {
        ev.event.preventDefault();
        var item = this.selectedItemEl = ev.data;
        var heights = this.cachedHeights;
        heights.length = 0;
        var el = this.el;
        var children = el.children;
        if (!children || children.length === 0) {
            return;
        }
        var sum = 0;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            sum += child.offsetHeight;
            heights.push(sum);
            child.$ionIndex = i;
        }
        var box = el.getBoundingClientRect();
        this.containerTop = box.top;
        this.containerBottom = box.bottom;
        if (this.scrollEl) {
            var scrollBox = this.scrollEl.getBoundingClientRect();
            this.scrollElInitial = this.scrollEl.scrollTop;
            this.scrollElTop = scrollBox.top + AUTO_SCROLL_MARGIN;
            this.scrollElBottom = scrollBox.bottom - AUTO_SCROLL_MARGIN;
        }
        else {
            this.scrollElInitial = 0;
            this.scrollElTop = 0;
            this.scrollElBottom = 0;
        }
        this.lastToIndex = indexForItem(item);
        this.selectedItemHeight = item.offsetHeight;
        this.state = 1 /* Active */;
        item.classList.add(ITEM_REORDER_SELECTED);
        Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_3__["a"])();
    };
    ReorderGroup.prototype.onMove = function (ev) {
        var selectedItem = this.selectedItemEl;
        if (!selectedItem) {
            return;
        }
        // Scroll if we reach the scroll margins
        var scroll = this.autoscroll(ev.currentY);
        // // Get coordinate
        var top = this.containerTop - scroll;
        var bottom = this.containerBottom - scroll;
        var currentY = Math.max(top, Math.min(ev.currentY, bottom));
        var deltaY = scroll + currentY - ev.startY;
        var normalizedY = currentY - top;
        var toIndex = this.itemIndexForTop(normalizedY);
        if (toIndex !== this.lastToIndex) {
            var fromIndex = indexForItem(selectedItem);
            this.lastToIndex = toIndex;
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_3__["b"])();
            this.reorderMove(fromIndex, toIndex);
        }
        // Update selected item position
        selectedItem.style.transform = "translateY(" + deltaY + "px)";
    };
    ReorderGroup.prototype.onEnd = function () {
        var selectedItemEl = this.selectedItemEl;
        this.state = 2 /* Complete */;
        if (!selectedItemEl) {
            this.state = 0 /* Idle */;
            return;
        }
        var toIndex = this.lastToIndex;
        var fromIndex = indexForItem(selectedItemEl);
        if (toIndex === fromIndex) {
            this.completeSync();
        }
        else {
            this.ionItemReorder.emit({
                from: fromIndex,
                to: toIndex,
                complete: this.completeSync.bind(this)
            });
        }
        Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_3__["h"])();
    };
    ReorderGroup.prototype.completeSync = function (listOrReorder) {
        var selectedItemEl = this.selectedItemEl;
        if (selectedItemEl && this.state === 2 /* Complete */) {
            var children = this.el.children;
            var len = children.length;
            var toIndex = this.lastToIndex;
            var fromIndex = indexForItem(selectedItemEl);
            if (toIndex !== fromIndex && (listOrReorder === undefined || listOrReorder === true)) {
                var ref = (fromIndex < toIndex)
                    ? children[toIndex + 1]
                    : children[toIndex];
                this.el.insertBefore(selectedItemEl, ref);
            }
            if (Array.isArray(listOrReorder)) {
                listOrReorder = reorderArray(listOrReorder, fromIndex, toIndex);
            }
            for (var i = 0; i < len; i++) {
                children[i].style['transform'] = '';
            }
            selectedItemEl.style.transition = '';
            selectedItemEl.classList.remove(ITEM_REORDER_SELECTED);
            this.selectedItemEl = undefined;
            this.state = 0 /* Idle */;
        }
        return listOrReorder;
    };
    ReorderGroup.prototype.itemIndexForTop = function (deltaY) {
        var heights = this.cachedHeights;
        var i = 0;
        // TODO: since heights is a sorted array of integers, we can do
        // speed up the search using binary search. Remember that linear-search is still
        // faster than binary-search for small arrays (<64) due CPU branch misprediction.
        for (i = 0; i < heights.length; i++) {
            if (heights[i] > deltaY) {
                break;
            }
        }
        return i;
    };
    /********* DOM WRITE ********* */
    ReorderGroup.prototype.reorderMove = function (fromIndex, toIndex) {
        var itemHeight = this.selectedItemHeight;
        var children = this.el.children;
        for (var i = 0; i < children.length; i++) {
            var style = children[i].style;
            var value = '';
            if (i > fromIndex && i <= toIndex) {
                value = "translateY(" + -itemHeight + "px)";
            }
            else if (i < fromIndex && i >= toIndex) {
                value = "translateY(" + itemHeight + "px)";
            }
            style['transform'] = value;
        }
    };
    ReorderGroup.prototype.autoscroll = function (posY) {
        if (!this.scrollEl) {
            return 0;
        }
        var amount = 0;
        if (posY < this.scrollElTop) {
            amount = -SCROLL_JUMP;
        }
        else if (posY > this.scrollElBottom) {
            amount = SCROLL_JUMP;
        }
        if (amount !== 0) {
            this.scrollEl.scrollBy(0, amount);
        }
        return this.scrollEl.scrollTop - this.scrollElInitial;
    };
    ReorderGroup.prototype.render = function () {
        var _a;
        var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
        return (Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["H"], { class: (_a = {},
                _a[mode] = true,
                _a['reorder-enabled'] = !this.disabled,
                _a['reorder-list-active'] = this.state !== 0 /* Idle */,
                _a) }));
    };
    Object.defineProperty(ReorderGroup.prototype, "el", {
        get: function () { return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReorderGroup, "watchers", {
        get: function () {
            return {
                "disabled": ["disabledChanged"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return ReorderGroup;
}());
var indexForItem = function (element) {
    return element['$ionIndex'];
};
var findReorderItem = function (node, container) {
    var parent;
    while (node) {
        parent = node.parentElement;
        if (parent === container) {
            return node;
        }
        node = parent;
    }
    return undefined;
};
var AUTO_SCROLL_MARGIN = 60;
var SCROLL_JUMP = 10;
var ITEM_REORDER_SELECTED = 'reorder-selected';
var reorderArray = function (array, from, to) {
    var element = array[from];
    array.splice(from, 1);
    array.splice(to, 0, element);
    return array.slice();
};
ReorderGroup.style = reorderGroupCss;



/***/ })

}]);
//# sourceMappingURL=52-es5.js.map