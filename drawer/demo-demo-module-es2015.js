(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-demo-module"],{

/***/ "./node_modules/@angular/cdk/esm2015/a11y.js":
/*!***************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/a11y.js ***!
  \***************************************************/
/*! exports provided: ARIA_DESCRIBER_PROVIDER_FACTORY, MESSAGES_CONTAINER_ID, CDK_DESCRIBEDBY_ID_PREFIX, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, AriaDescriber, ARIA_DESCRIBER_PROVIDER, ActiveDescendantKeyManager, FocusKeyManager, ListKeyManager, FocusTrap, FocusTrapFactory, CdkTrapFocus, InteractivityChecker, LIVE_ANNOUNCER_PROVIDER_FACTORY, LiveAnnouncer, CdkAriaLive, LIVE_ANNOUNCER_PROVIDER, LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_DEFAULT_OPTIONS, FOCUS_MONITOR_PROVIDER_FACTORY, TOUCH_BUFFER_MS, FocusMonitor, CdkMonitorFocus, FOCUS_MONITOR_PROVIDER, isFakeMousedownFromScreenReader, A11yModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARIA_DESCRIBER_PROVIDER_FACTORY", function() { return ARIA_DESCRIBER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES_CONTAINER_ID", function() { return MESSAGES_CONTAINER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_ID_PREFIX", function() { return CDK_DESCRIBEDBY_ID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_HOST_ATTRIBUTE", function() { return CDK_DESCRIBEDBY_HOST_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AriaDescriber", function() { return AriaDescriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARIA_DESCRIBER_PROVIDER", function() { return ARIA_DESCRIBER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveDescendantKeyManager", function() { return ActiveDescendantKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusKeyManager", function() { return FocusKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListKeyManager", function() { return ListKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return FocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function() { return FocusTrapFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTrapFocus", function() { return CdkTrapFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractivityChecker", function() { return InteractivityChecker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_PROVIDER_FACTORY", function() { return LIVE_ANNOUNCER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveAnnouncer", function() { return LiveAnnouncer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAriaLive", function() { return CdkAriaLive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_PROVIDER", function() { return LIVE_ANNOUNCER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY", function() { return LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN", function() { return LIVE_ANNOUNCER_ELEMENT_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_DEFAULT_OPTIONS", function() { return LIVE_ANNOUNCER_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_PROVIDER_FACTORY", function() { return FOCUS_MONITOR_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_BUFFER_MS", function() { return TOUCH_BUFFER_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusMonitor", function() { return FocusMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkMonitorFocus", function() { return CdkMonitorFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_PROVIDER", function() { return FOCUS_MONITOR_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFakeMousedownFromScreenReader", function() { return isFakeMousedownFromScreenReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A11yModule", function() { return A11yModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm2015/observers.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * IDs are deliminated by an empty space, as per the spec.
 * @type {?}
 */
const ID_DELIMINATOR = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @param {?} id
 * @return {?}
 */
function addAriaReferencedId(el, attr, id) {
    /** @type {?} */
    const ids = getAriaReferenceIds(el, attr);
    if (ids.some((/**
     * @param {?} existingId
     * @return {?}
     */
    existingId => existingId.trim() == id.trim()))) {
        return;
    }
    ids.push(id.trim());
    el.setAttribute(attr, ids.join(ID_DELIMINATOR));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @param {?} id
 * @return {?}
 */
function removeAriaReferencedId(el, attr, id) {
    /** @type {?} */
    const ids = getAriaReferenceIds(el, attr);
    /** @type {?} */
    const filteredIds = ids.filter((/**
     * @param {?} val
     * @return {?}
     */
    val => val != id.trim()));
    if (filteredIds.length) {
        el.setAttribute(attr, filteredIds.join(ID_DELIMINATOR));
    }
    else {
        el.removeAttribute(attr);
    }
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @return {?}
 */
function getAriaReferenceIds(el, attr) {
    // Get string array of all individual ids (whitespace deliminated) in the attribute value
    return (el.getAttribute(attr) || '').match(/\S+/g) || [];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * ID used for the body container where all messages are appended.
 * @type {?}
 */
const MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/**
 * ID prefix used for each created message element.
 * @type {?}
 */
const CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/**
 * Attribute given to each host element that is described by a message element.
 * @type {?}
 */
const CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/**
 * Global incremental identifier for each registered message element.
 * @type {?}
 */
let nextId = 0;
/**
 * Global map of all registered message elements that have been placed into the document.
 * @type {?}
 */
const messageRegistry = new Map();
/**
 * Container for all registered messages.
 * @type {?}
 */
let messagesContainer = null;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 */
class AriaDescriber {
    /**
     * @param {?} _document
     */
    constructor(_document) {
        this._document = _document;
    }
    /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    describe(hostElement, message) {
        if (!this._canBeDescribed(hostElement, message)) {
            return;
        }
        if (typeof message !== 'string') {
            // We need to ensure that the element has an ID.
            this._setMessageId(message);
            messageRegistry.set(message, { messageElement: message, referenceCount: 0 });
        }
        else if (!messageRegistry.has(message)) {
            this._createMessageElement(message);
        }
        if (!this._isElementDescribedByMessage(hostElement, message)) {
            this._addMessageReference(hostElement, message);
        }
    }
    /**
     * Removes the host element's aria-describedby reference to the message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    removeDescription(hostElement, message) {
        if (!this._isElementNode(hostElement)) {
            return;
        }
        if (this._isElementDescribedByMessage(hostElement, message)) {
            this._removeMessageReference(hostElement, message);
        }
        // If the message is a string, it means that it's one that we created for the
        // consumer so we can remove it safely, otherwise we should leave it in place.
        if (typeof message === 'string') {
            /** @type {?} */
            const registeredMessage = messageRegistry.get(message);
            if (registeredMessage && registeredMessage.referenceCount === 0) {
                this._deleteMessageElement(message);
            }
        }
        if (messagesContainer && messagesContainer.childNodes.length === 0) {
            this._deleteMessagesContainer();
        }
    }
    /**
     * Unregisters all created message elements and removes the message container.
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}]`);
        for (let i = 0; i < describedElements.length; i++) {
            this._removeCdkDescribedByReferenceIds(describedElements[i]);
            describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        if (messagesContainer) {
            this._deleteMessagesContainer();
        }
        messageRegistry.clear();
    }
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     * @private
     * @param {?} message
     * @return {?}
     */
    _createMessageElement(message) {
        /** @type {?} */
        const messageElement = this._document.createElement('div');
        this._setMessageId(messageElement);
        messageElement.textContent = message;
        this._createMessagesContainer();
        (/** @type {?} */ (messagesContainer)).appendChild(messageElement);
        messageRegistry.set(message, { messageElement, referenceCount: 0 });
    }
    /**
     * Assigns a unique ID to an element, if it doesn't have one already.
     * @private
     * @param {?} element
     * @return {?}
     */
    _setMessageId(element) {
        if (!element.id) {
            element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${nextId++}`;
        }
    }
    /**
     * Deletes the message element from the global messages container.
     * @private
     * @param {?} message
     * @return {?}
     */
    _deleteMessageElement(message) {
        /** @type {?} */
        const registeredMessage = messageRegistry.get(message);
        /** @type {?} */
        const messageElement = registeredMessage && registeredMessage.messageElement;
        if (messagesContainer && messageElement) {
            messagesContainer.removeChild(messageElement);
        }
        messageRegistry.delete(message);
    }
    /**
     * Creates the global container for all aria-describedby messages.
     * @private
     * @return {?}
     */
    _createMessagesContainer() {
        if (!messagesContainer) {
            /** @type {?} */
            const preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID);
            // When going from the server to the client, we may end up in a situation where there's
            // already a container on the page, but we don't have a reference to it. Clear the
            // old container so we don't get duplicates. Doing this, instead of emptying the previous
            // container, should be slightly faster.
            if (preExistingContainer) {
                (/** @type {?} */ (preExistingContainer.parentNode)).removeChild(preExistingContainer);
            }
            messagesContainer = this._document.createElement('div');
            messagesContainer.id = MESSAGES_CONTAINER_ID;
            messagesContainer.setAttribute('aria-hidden', 'true');
            messagesContainer.style.display = 'none';
            this._document.body.appendChild(messagesContainer);
        }
    }
    /**
     * Deletes the global messages container.
     * @private
     * @return {?}
     */
    _deleteMessagesContainer() {
        if (messagesContainer && messagesContainer.parentNode) {
            messagesContainer.parentNode.removeChild(messagesContainer);
            messagesContainer = null;
        }
    }
    /**
     * Removes all cdk-describedby messages that are hosted through the element.
     * @private
     * @param {?} element
     * @return {?}
     */
    _removeCdkDescribedByReferenceIds(element) {
        // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
        /** @type {?} */
        const originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby')
            .filter((/**
         * @param {?} id
         * @return {?}
         */
        id => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0));
        element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
    }
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    _addMessageReference(element, message) {
        /** @type {?} */
        const registeredMessage = (/** @type {?} */ (messageRegistry.get(message)));
        // Add the aria-describedby reference and set the
        // describedby_host attribute to mark the element.
        addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
        registeredMessage.referenceCount++;
    }
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    _removeMessageReference(element, message) {
        /** @type {?} */
        const registeredMessage = (/** @type {?} */ (messageRegistry.get(message)));
        registeredMessage.referenceCount--;
        removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    /**
     * Returns true if the element has been described by the provided message ID.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    _isElementDescribedByMessage(element, message) {
        /** @type {?} */
        const referenceIds = getAriaReferenceIds(element, 'aria-describedby');
        /** @type {?} */
        const registeredMessage = messageRegistry.get(message);
        /** @type {?} */
        const messageId = registeredMessage && registeredMessage.messageElement.id;
        return !!messageId && referenceIds.indexOf(messageId) != -1;
    }
    /**
     * Determines whether a message can be described on a particular element.
     * @private
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    _canBeDescribed(element, message) {
        if (!this._isElementNode(element)) {
            return false;
        }
        if (message && typeof message === 'object') {
            // We'd have to make some assumptions about the description element's text, if the consumer
            // passed in an element. Assume that if an element is passed in, the consumer has verified
            // that it can be used as a description.
            return true;
        }
        /** @type {?} */
        const trimmedMessage = message == null ? '' : `${message}`.trim();
        /** @type {?} */
        const ariaLabel = element.getAttribute('aria-label');
        // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
        // element, because screen readers will end up reading out the same text twice in a row.
        return trimmedMessage ? (!ariaLabel || ariaLabel.trim() !== trimmedMessage) : false;
    }
    /**
     * Checks whether a node is an Element node.
     * @private
     * @param {?} element
     * @return {?}
     */
    _isElementNode(element) {
        return element.nodeType === this._document.ELEMENT_NODE;
    }
}
AriaDescriber.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
AriaDescriber.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
];
/** @nocollapse */ AriaDescriber.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function AriaDescriber_Factory() { return new AriaDescriber(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: AriaDescriber, providedIn: "root" });
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentDispatcher
 * @param {?} _document
 * @return {?}
 */
function ARIA_DESCRIBER_PROVIDER_FACTORY(parentDispatcher, _document) {
    return parentDispatcher || new AriaDescriber(_document);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
const ARIA_DESCRIBER_PROVIDER = {
    // If there is already an AriaDescriber available, use that. Otherwise, provide a new one.
    provide: AriaDescriber,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), AriaDescriber],
        (/** @type {?} */ (_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]))
    ],
    useFactory: ARIA_DESCRIBER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 * @template T
 */
class ListKeyManager {
    /**
     * @param {?} _items
     */
    constructor(_items) {
        this._items = _items;
        this._activeItemIndex = -1;
        this._activeItem = null;
        this._wrap = false;
        this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this._vertical = true;
        this._allowedModifierKeys = [];
        /**
         * Predicate function that can be used to check whether an item should be skipped
         * by the key manager. By default, disabled items are skipped.
         */
        this._skipPredicateFn = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.disabled);
        // Buffer for the letters that the user has pressed when the typeahead option is turned on.
        this._pressedLetters = [];
        /**
         * Stream that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */
        this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Stream that emits whenever the active item of the list manager changes.
         */
        this.change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // We allow for the items to be an array because, in some cases, the consumer may
        // not have access to a QueryList of the items they want to manage (e.g. when the
        // items aren't being collected via `ViewChildren` or `ContentChildren`).
        if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]) {
            _items.changes.subscribe((/**
             * @param {?} newItems
             * @return {?}
             */
            (newItems) => {
                if (this._activeItem) {
                    /** @type {?} */
                    const itemArray = newItems.toArray();
                    /** @type {?} */
                    const newIndex = itemArray.indexOf(this._activeItem);
                    if (newIndex > -1 && newIndex !== this._activeItemIndex) {
                        this._activeItemIndex = newIndex;
                    }
                }
            }));
        }
    }
    /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @template THIS
     * @this {THIS}
     * @param {?} predicate Function that determines whether the given item should be skipped.
     * @return {THIS}
     */
    skipPredicate(predicate) {
        (/** @type {?} */ (this))._skipPredicateFn = predicate;
        return (/** @type {?} */ (this));
    }
    /**
     * Configures wrapping mode, which determines whether the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @template THIS
     * @this {THIS}
     * @param {?=} shouldWrap Whether the list should wrap when reaching the end.
     * @return {THIS}
     */
    withWrap(shouldWrap = true) {
        (/** @type {?} */ (this))._wrap = shouldWrap;
        return (/** @type {?} */ (this));
    }
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @template THIS
     * @this {THIS}
     * @param {?=} enabled Whether vertical selection should be enabled.
     * @return {THIS}
     */
    withVerticalOrientation(enabled = true) {
        (/** @type {?} */ (this))._vertical = enabled;
        return (/** @type {?} */ (this));
    }
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @template THIS
     * @this {THIS}
     * @param {?} direction Direction in which the selection can be moved.
     * @return {THIS}
     */
    withHorizontalOrientation(direction) {
        (/** @type {?} */ (this))._horizontal = direction;
        return (/** @type {?} */ (this));
    }
    /**
     * Modifier keys which are allowed to be held down and whose default actions will be prevented
     * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
     * @template THIS
     * @this {THIS}
     * @param {?} keys
     * @return {THIS}
     */
    withAllowedModifierKeys(keys) {
        (/** @type {?} */ (this))._allowedModifierKeys = keys;
        return (/** @type {?} */ (this));
    }
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @template THIS
     * @this {THIS}
     * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
     * @return {THIS}
     */
    withTypeAhead(debounceInterval = 200) {
        if ((/** @type {?} */ (this))._items.length && (/** @type {?} */ (this))._items.some((/**
         * @param {?} item
         * @return {?}
         */
        item => typeof item.getLabel !== 'function'))) {
            throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
        }
        (/** @type {?} */ (this))._typeaheadSubscription.unsubscribe();
        // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
        // and convert those letters back into a string. Afterwards find the first item that starts
        // with that string and select it.
        (/** @type {?} */ (this))._typeaheadSubscription = (/** @type {?} */ (this))._letterKeyStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((/**
         * @param {?} keyCode
         * @return {?}
         */
        keyCode => (/** @type {?} */ (this))._pressedLetters.push(keyCode))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(debounceInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((/**
         * @return {?}
         */
        () => (/** @type {?} */ (this))._pressedLetters.length > 0)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((/**
         * @return {?}
         */
        () => (/** @type {?} */ (this))._pressedLetters.join('')))).subscribe((/**
         * @param {?} inputString
         * @return {?}
         */
        inputString => {
            /** @type {?} */
            const items = (/** @type {?} */ (this))._getItemsArray();
            // Start at 1 because we want to start searching at the item immediately
            // following the current active item.
            for (let i = 1; i < items.length + 1; i++) {
                /** @type {?} */
                const index = ((/** @type {?} */ (this))._activeItemIndex + i) % items.length;
                /** @type {?} */
                const item = items[index];
                if (!(/** @type {?} */ (this))._skipPredicateFn(item) &&
                    (/** @type {?} */ (item.getLabel))().toUpperCase().trim().indexOf(inputString) === 0) {
                    (/** @type {?} */ (this)).setActiveItem(index);
                    break;
                }
            }
            (/** @type {?} */ (this))._pressedLetters = [];
        }));
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    setActiveItem(item) {
        /** @type {?} */
        const previousIndex = this._activeItemIndex;
        this.updateActiveItem(item);
        if (this._activeItemIndex !== previousIndex) {
            this.change.next(this._activeItemIndex);
        }
    }
    /**
     * Sets the active item depending on the key event passed in.
     * @param {?} event Keyboard event to be used for determining which element should be active.
     * @return {?}
     */
    onKeydown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */
        const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
        /** @type {?} */
        const isModifierAllowed = modifiers.every((/**
         * @param {?} modifier
         * @return {?}
         */
        modifier => {
            return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
        }));
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["TAB"]:
                this.tabOut.next();
                return;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                if (this._vertical && isModifierAllowed) {
                    this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                if (this._vertical && isModifierAllowed) {
                    this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                if (this._horizontal && isModifierAllowed) {
                    this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                if (this._horizontal && isModifierAllowed) {
                    this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            default:
                if (isModifierAllowed || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["hasModifierKey"])(event, 'shiftKey')) {
                    // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                    // otherwise fall back to resolving alphanumeric characters via the keyCode.
                    if (event.key && event.key.length === 1) {
                        this._letterKeyStream.next(event.key.toLocaleUpperCase());
                    }
                    else if ((keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["Z"]) || (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["NINE"])) {
                        this._letterKeyStream.next(String.fromCharCode(keyCode));
                    }
                }
                // Note that we return here, in order to avoid preventing
                // the default action of non-navigational keys.
                return;
        }
        this._pressedLetters = [];
        event.preventDefault();
    }
    /**
     * Index of the currently active item.
     * @return {?}
     */
    get activeItemIndex() {
        return this._activeItemIndex;
    }
    /**
     * The active item.
     * @return {?}
     */
    get activeItem() {
        return this._activeItem;
    }
    /**
     * Sets the active item to the first enabled item in the list.
     * @return {?}
     */
    setFirstItemActive() {
        this._setActiveItemByIndex(0, 1);
    }
    /**
     * Sets the active item to the last enabled item in the list.
     * @return {?}
     */
    setLastItemActive() {
        this._setActiveItemByIndex(this._items.length - 1, -1);
    }
    /**
     * Sets the active item to the next enabled item in the list.
     * @return {?}
     */
    setNextItemActive() {
        this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
    }
    /**
     * Sets the active item to a previous enabled item in the list.
     * @return {?}
     */
    setPreviousItemActive() {
        this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    updateActiveItem(item) {
        /** @type {?} */
        const itemArray = this._getItemsArray();
        /** @type {?} */
        const index = typeof item === 'number' ? item : itemArray.indexOf(item);
        /** @type {?} */
        const activeItem = itemArray[index];
        // Explicitly check for `null` and `undefined` because other falsy values are valid.
        this._activeItem = activeItem == null ? null : activeItem;
        this._activeItemIndex = index;
    }
    /**
     * Allows setting of the activeItemIndex without any other effects.
     * @deprecated Use `updateActiveItem` instead.
     * \@breaking-change 8.0.0
     * @param {?} index The new activeItemIndex.
     * @return {?}
     */
    updateActiveItemIndex(index) {
        this.updateActiveItem(index);
    }
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     * @private
     * @param {?} delta
     * @return {?}
     */
    _setActiveItemByDelta(delta) {
        this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
    }
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     * @private
     * @param {?} delta
     * @return {?}
     */
    _setActiveInWrapMode(delta) {
        /** @type {?} */
        const items = this._getItemsArray();
        for (let i = 1; i <= items.length; i++) {
            /** @type {?} */
            const index = (this._activeItemIndex + (delta * i) + items.length) % items.length;
            /** @type {?} */
            const item = items[index];
            if (!this._skipPredicateFn(item)) {
                this.setActiveItem(index);
                return;
            }
        }
    }
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     * @private
     * @param {?} delta
     * @return {?}
     */
    _setActiveInDefaultMode(delta) {
        this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
    }
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     * @private
     * @param {?} index
     * @param {?} fallbackDelta
     * @return {?}
     */
    _setActiveItemByIndex(index, fallbackDelta) {
        /** @type {?} */
        const items = this._getItemsArray();
        if (!items[index]) {
            return;
        }
        while (this._skipPredicateFn(items[index])) {
            index += fallbackDelta;
            if (!items[index]) {
                return;
            }
        }
        this.setActiveItem(index);
    }
    /**
     * Returns the items as an array.
     * @private
     * @return {?}
     */
    _getItemsArray() {
        return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"] ? this._items.toArray() : this._items;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class ActiveDescendantKeyManager extends ListKeyManager {
    /**
     * @param {?} index
     * @return {?}
     */
    setActiveItem(index) {
        if (this.activeItem) {
            this.activeItem.setInactiveStyles();
        }
        super.setActiveItem(index);
        if (this.activeItem) {
            this.activeItem.setActiveStyles();
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class FocusKeyManager extends ListKeyManager {
    constructor() {
        super(...arguments);
        this._origin = 'program';
    }
    /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @template THIS
     * @this {THIS}
     * @param {?} origin Focus origin to be used when focusing items.
     * @return {THIS}
     */
    setFocusOrigin(origin) {
        (/** @type {?} */ (this))._origin = origin;
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    setActiveItem(item) {
        super.setActiveItem(item);
        if (this.activeItem) {
            this.activeItem.focus(this._origin);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// The InteractivityChecker leans heavily on the ally.js accessibility utilities.
// Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
// supported.
/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */
class InteractivityChecker {
    /**
     * @param {?} _platform
     */
    constructor(_platform) {
        this._platform = _platform;
    }
    /**
     * Gets whether an element is disabled.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is disabled.
     */
    isDisabled(element) {
        // This does not capture some cases, such as a non-form control with a disabled attribute or
        // a form control inside of a disabled form, but should capture the most common cases.
        return element.hasAttribute('disabled');
    }
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @param {?} element
     * @return {?} Whether the element is visible.
     */
    isVisible(element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    }
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is tabbable.
     */
    isTabbable(element) {
        // Nothing is tabbable on the server 😎
        if (!this._platform.isBrowser) {
            return false;
        }
        /** @type {?} */
        const frameElement = getFrameElement(getWindow(element));
        if (frameElement) {
            /** @type {?} */
            const frameType = frameElement && frameElement.nodeName.toLowerCase();
            // Frame elements inherit their tabindex onto all child elements.
            if (getTabIndexValue(frameElement) === -1) {
                return false;
            }
            // Webkit and Blink consider anything inside of an <object> element as non-tabbable.
            if ((this._platform.BLINK || this._platform.WEBKIT) && frameType === 'object') {
                return false;
            }
            // Webkit and Blink disable tabbing to an element inside of an invisible frame.
            if ((this._platform.BLINK || this._platform.WEBKIT) && !this.isVisible(frameElement)) {
                return false;
            }
        }
        /** @type {?} */
        let nodeName = element.nodeName.toLowerCase();
        /** @type {?} */
        let tabIndexValue = getTabIndexValue(element);
        if (element.hasAttribute('contenteditable')) {
            return tabIndexValue !== -1;
        }
        if (nodeName === 'iframe') {
            // The frames may be tabbable depending on content, but it's not possibly to reliably
            // investigate the content of the frames.
            return false;
        }
        if (nodeName === 'audio') {
            if (!element.hasAttribute('controls')) {
                // By default an <audio> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK) {
                // In Blink <audio controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'video') {
            if (!element.hasAttribute('controls') && this._platform.TRIDENT) {
                // In Trident a <video> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK || this._platform.FIREFOX) {
                // In Chrome and Firefox <video controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'object' && (this._platform.BLINK || this._platform.WEBKIT)) {
            // In all Blink and WebKit based browsers <object> elements are never tabbable.
            return false;
        }
        // In iOS the browser only considers some specific elements as tabbable.
        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
            return false;
        }
        return element.tabIndex >= 0;
    }
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is focusable.
     */
    isFocusable(element) {
        // Perform checks in order of left to most expensive.
        // Again, naive approach that does not capture many edge cases and browser quirks.
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
    }
}
InteractivityChecker.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
InteractivityChecker.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
/** @nocollapse */ InteractivityChecker.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function InteractivityChecker_Factory() { return new InteractivityChecker(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"])); }, token: InteractivityChecker, providedIn: "root" });
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 * @param {?} window
 * @return {?}
 */
function getFrameElement(window) {
    try {
        return (/** @type {?} */ (window.frameElement));
    }
    catch (_a) {
        return null;
    }
}
/**
 * Checks whether the specified element has any geometry / rectangles.
 * @param {?} element
 * @return {?}
 */
function hasGeometry(element) {
    // Use logic from jQuery to check for an invisible element.
    // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
    return !!(element.offsetWidth || element.offsetHeight ||
        (typeof element.getClientRects === 'function' && element.getClientRects().length));
}
/**
 * Gets whether an element's
 * @param {?} element
 * @return {?}
 */
function isNativeFormElement(element) {
    /** @type {?} */
    let nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' ||
        nodeName === 'select' ||
        nodeName === 'button' ||
        nodeName === 'textarea';
}
/**
 * Gets whether an element is an `<input type="hidden">`.
 * @param {?} element
 * @return {?}
 */
function isHiddenInput(element) {
    return isInputElement(element) && element.type == 'hidden';
}
/**
 * Gets whether an element is an anchor that has an href attribute.
 * @param {?} element
 * @return {?}
 */
function isAnchorWithHref(element) {
    return isAnchorElement(element) && element.hasAttribute('href');
}
/**
 * Gets whether an element is an input element.
 * @param {?} element
 * @return {?}
 */
function isInputElement(element) {
    return element.nodeName.toLowerCase() == 'input';
}
/**
 * Gets whether an element is an anchor element.
 * @param {?} element
 * @return {?}
 */
function isAnchorElement(element) {
    return element.nodeName.toLowerCase() == 'a';
}
/**
 * Gets whether an element has a valid tabindex.
 * @param {?} element
 * @return {?}
 */
function hasValidTabIndex(element) {
    if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
    }
    /** @type {?} */
    let tabIndex = element.getAttribute('tabindex');
    // IE11 parses tabindex="" as the value "-32768"
    if (tabIndex == '-32768') {
        return false;
    }
    return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 * @param {?} element
 * @return {?}
 */
function getTabIndexValue(element) {
    if (!hasValidTabIndex(element)) {
        return null;
    }
    // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    /** @type {?} */
    const tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
    return isNaN(tabIndex) ? -1 : tabIndex;
}
/**
 * Checks whether the specified element is potentially tabbable on iOS
 * @param {?} element
 * @return {?}
 */
function isPotentiallyTabbableIOS(element) {
    /** @type {?} */
    let nodeName = element.nodeName.toLowerCase();
    /** @type {?} */
    let inputType = nodeName === 'input' && ((/** @type {?} */ (element))).type;
    return inputType === 'text'
        || inputType === 'password'
        || nodeName === 'select'
        || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 * @param {?} element
 * @return {?}
 */
function isPotentiallyFocusable(element) {
    // Inputs are potentially focusable *unless* they're type="hidden".
    if (isHiddenInput(element)) {
        return false;
    }
    return isNativeFormElement(element) ||
        isAnchorWithHref(element) ||
        element.hasAttribute('contenteditable') ||
        hasValidTabIndex(element);
}
/**
 * Gets the parent window of a DOM node with regards of being inside of an iframe.
 * @param {?} node
 * @return {?}
 */
function getWindow(node) {
    // ownerDocument is null if `node` itself *is* a document.
    return node.ownerDocument && node.ownerDocument.defaultView || window;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
 */
class FocusTrap {
    /**
     * @param {?} _element
     * @param {?} _checker
     * @param {?} _ngZone
     * @param {?} _document
     * @param {?=} deferAnchors
     */
    constructor(_element, _checker, _ngZone, _document, deferAnchors = false) {
        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._hasAttached = false;
        // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
        this.startAnchorListener = (/**
         * @return {?}
         */
        () => this.focusLastTabbableElement());
        this.endAnchorListener = (/**
         * @return {?}
         */
        () => this.focusFirstTabbableElement());
        this._enabled = true;
        if (!deferAnchors) {
            this.attachAnchors();
        }
    }
    /**
     * Whether the focus trap is active.
     * @return {?}
     */
    get enabled() { return this._enabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set enabled(value) {
        this._enabled = value;
        if (this._startAnchor && this._endAnchor) {
            this._toggleAnchorTabIndex(value, this._startAnchor);
            this._toggleAnchorTabIndex(value, this._endAnchor);
        }
    }
    /**
     * Destroys the focus trap by cleaning up the anchors.
     * @return {?}
     */
    destroy() {
        /** @type {?} */
        const startAnchor = this._startAnchor;
        /** @type {?} */
        const endAnchor = this._endAnchor;
        if (startAnchor) {
            startAnchor.removeEventListener('focus', this.startAnchorListener);
            if (startAnchor.parentNode) {
                startAnchor.parentNode.removeChild(startAnchor);
            }
        }
        if (endAnchor) {
            endAnchor.removeEventListener('focus', this.endAnchorListener);
            if (endAnchor.parentNode) {
                endAnchor.parentNode.removeChild(endAnchor);
            }
        }
        this._startAnchor = this._endAnchor = null;
    }
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @return {?} Whether the focus trap managed to attach successfuly. This may not be the case
     * if the target element isn't currently in the DOM.
     */
    attachAnchors() {
        // If we're not on the browser, there can be no focus to trap.
        if (this._hasAttached) {
            return true;
        }
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (!this._startAnchor) {
                this._startAnchor = this._createAnchor();
                (/** @type {?} */ (this._startAnchor)).addEventListener('focus', this.startAnchorListener);
            }
            if (!this._endAnchor) {
                this._endAnchor = this._createAnchor();
                (/** @type {?} */ (this._endAnchor)).addEventListener('focus', this.endAnchorListener);
            }
        }));
        if (this._element.parentNode) {
            this._element.parentNode.insertBefore((/** @type {?} */ (this._startAnchor)), this._element);
            this._element.parentNode.insertBefore((/** @type {?} */ (this._endAnchor)), this._element.nextSibling);
            this._hasAttached = true;
        }
        return this._hasAttached;
    }
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    focusInitialElementWhenReady() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this._executeOnStable((/**
             * @return {?}
             */
            () => resolve(this.focusInitialElement())));
        }));
    }
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    focusFirstTabbableElementWhenReady() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this._executeOnStable((/**
             * @return {?}
             */
            () => resolve(this.focusFirstTabbableElement())));
        }));
    }
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    focusLastTabbableElementWhenReady() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this._executeOnStable((/**
             * @return {?}
             */
            () => resolve(this.focusLastTabbableElement())));
        }));
    }
    /**
     * Get the specified boundary element of the trapped region.
     * @private
     * @param {?} bound The boundary to get (start or end of trapped region).
     * @return {?} The boundary element.
     */
    _getRegionBoundary(bound) {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        /** @type {?} */
        let markers = (/** @type {?} */ (this._element.querySelectorAll(`[cdk-focus-region-${bound}], ` +
            `[cdkFocusRegion${bound}], ` +
            `[cdk-focus-${bound}]`)));
        for (let i = 0; i < markers.length; i++) {
            // @breaking-change 8.0.0
            if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
                console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', ` +
                    `use 'cdkFocusRegion${bound}' instead. The deprecated ` +
                    `attribute will be removed in 8.0.0.`, markers[i]);
            }
            else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
                console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', ` +
                    `use 'cdkFocusRegion${bound}' instead. The deprecated attribute ` +
                    `will be removed in 8.0.0.`, markers[i]);
            }
        }
        if (bound == 'start') {
            return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }
        return markers.length ?
            markers[markers.length - 1] : this._getLastTabbableElement(this._element);
    }
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @return {?} Whether focus was moved successfuly.
     */
    focusInitialElement() {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        /** @type {?} */
        const redirectToElement = (/** @type {?} */ (this._element.querySelector(`[cdk-focus-initial], ` +
            `[cdkFocusInitial]`)));
        if (redirectToElement) {
            // @breaking-change 8.0.0
            if (redirectToElement.hasAttribute(`cdk-focus-initial`)) {
                console.warn(`Found use of deprecated attribute 'cdk-focus-initial', ` +
                    `use 'cdkFocusInitial' instead. The deprecated attribute ` +
                    `will be removed in 8.0.0`, redirectToElement);
            }
            // Warn the consumer if the element they've pointed to
            // isn't focusable, when not in production mode.
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && !this._checker.isFocusable(redirectToElement)) {
                console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
            }
            redirectToElement.focus();
            return true;
        }
        return this.focusFirstTabbableElement();
    }
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    focusFirstTabbableElement() {
        /** @type {?} */
        const redirectToElement = this._getRegionBoundary('start');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    }
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    focusLastTabbableElement() {
        /** @type {?} */
        const redirectToElement = this._getRegionBoundary('end');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    }
    /**
     * Checks whether the focus trap has successfuly been attached.
     * @return {?}
     */
    hasAttached() {
        return this._hasAttached;
    }
    /**
     * Get the first tabbable element from a DOM subtree (inclusive).
     * @private
     * @param {?} root
     * @return {?}
     */
    _getFirstTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
        // back to `childNodes` which includes text nodes, comments etc.
        /** @type {?} */
        let children = root.children || root.childNodes;
        for (let i = 0; i < children.length; i++) {
            /** @type {?} */
            let tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getFirstTabbableElement((/** @type {?} */ (children[i]))) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    }
    /**
     * Get the last tabbable element from a DOM subtree (inclusive).
     * @private
     * @param {?} root
     * @return {?}
     */
    _getLastTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in reverse DOM order.
        /** @type {?} */
        let children = root.children || root.childNodes;
        for (let i = children.length - 1; i >= 0; i--) {
            /** @type {?} */
            let tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getLastTabbableElement((/** @type {?} */ (children[i]))) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    }
    /**
     * Creates an anchor element.
     * @private
     * @return {?}
     */
    _createAnchor() {
        /** @type {?} */
        const anchor = this._document.createElement('div');
        this._toggleAnchorTabIndex(this._enabled, anchor);
        anchor.classList.add('cdk-visually-hidden');
        anchor.classList.add('cdk-focus-trap-anchor');
        anchor.setAttribute('aria-hidden', 'true');
        return anchor;
    }
    /**
     * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
     * @private
     * @param {?} isEnabled Whether the focus trap is enabled.
     * @param {?} anchor Anchor on which to toggle the tabindex.
     * @return {?}
     */
    _toggleAnchorTabIndex(isEnabled, anchor) {
        // Remove the tabindex completely, rather than setting it to -1, because if the
        // element has a tabindex, the user might still hit it when navigating with the arrow keys.
        isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
    }
    /**
     * Executes a function when the zone is stable.
     * @private
     * @param {?} fn
     * @return {?}
     */
    _executeOnStable(fn) {
        if (this._ngZone.isStable) {
            fn();
        }
        else {
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(fn);
        }
    }
}
/**
 * Factory that allows easy instantiation of focus traps.
 */
class FocusTrapFactory {
    /**
     * @param {?} _checker
     * @param {?} _ngZone
     * @param {?} _document
     */
    constructor(_checker, _ngZone, _document) {
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
    }
    /**
     * Creates a focus-trapped region around the given element.
     * @param {?} element The element around which focus will be trapped.
     * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @return {?} The created focus trap instance.
     */
    create(element, deferCaptureElements = false) {
        return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
    }
}
FocusTrapFactory.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
FocusTrapFactory.ctorParameters = () => [
    { type: InteractivityChecker },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
];
/** @nocollapse */ FocusTrapFactory.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FocusTrapFactory_Factory() { return new FocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: FocusTrapFactory, providedIn: "root" });
/**
 * Directive for trapping focus within a region.
 */
class CdkTrapFocus {
    /**
     * @param {?} _elementRef
     * @param {?} _focusTrapFactory
     * @param {?} _document
     */
    constructor(_elementRef, _focusTrapFactory, _document) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        /**
         * Previously focused element to restore focus to upon destroy when using autoCapture.
         */
        this._previouslyFocusedElement = null;
        this._document = _document;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    /**
     * Whether the focus trap is active.
     * @return {?}
     */
    get enabled() { return this.focusTrap.enabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set enabled(value) { this.focusTrap.enabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value); }
    /**
     * Whether the directive should automatially move focus into the trapped region upon
     * initialization and return focus to the previous activeElement upon destruction.
     * @return {?}
     */
    get autoCapture() { return this._autoCapture; }
    /**
     * @param {?} value
     * @return {?}
     */
    set autoCapture(value) { this._autoCapture = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value); }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.focusTrap.destroy();
        // If we stored a previously focused element when using autoCapture, return focus to that
        // element now that the trapped region is being destroyed.
        if (this._previouslyFocusedElement) {
            this._previouslyFocusedElement.focus();
            this._previouslyFocusedElement = null;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.focusTrap.attachAnchors();
        if (this.autoCapture) {
            this._previouslyFocusedElement = (/** @type {?} */ (this._document.activeElement));
            this.focusTrap.focusInitialElementWhenReady();
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (!this.focusTrap.hasAttached()) {
            this.focusTrap.attachAnchors();
        }
    }
}
CdkTrapFocus.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[cdkTrapFocus]',
                exportAs: 'cdkTrapFocus',
            },] },
];
/** @nocollapse */
CdkTrapFocus.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: FocusTrapFactory },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
];
CdkTrapFocus.propDecorators = {
    enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkTrapFocus',] }],
    autoCapture: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkTrapFocusAutoCapture',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('liveAnnouncerElement', {
    providedIn: 'root',
    factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
    return null;
}
/**
 * Injection token that can be used to configure the default options for the LiveAnnouncer.
 * @type {?}
 */
const LIVE_ANNOUNCER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('LIVE_ANNOUNCER_DEFAULT_OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LiveAnnouncer {
    /**
     * @param {?} elementToken
     * @param {?} _ngZone
     * @param {?} _document
     * @param {?=} _defaultOptions
     */
    constructor(elementToken, _ngZone, _document, _defaultOptions) {
        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions;
        // We inject the live element and document as `any` because the constructor signature cannot
        // reference browser globals (HTMLElement, Document) on non-browser environments, since having
        // a class decorator causes TypeScript to preserve the constructor signature types.
        this._document = _document;
        this._liveElement = elementToken || this._createLiveElement();
    }
    /**
     * @param {?} message
     * @param {...?} args
     * @return {?}
     */
    announce(message, ...args) {
        /** @type {?} */
        const defaultOptions = this._defaultOptions;
        /** @type {?} */
        let politeness;
        /** @type {?} */
        let duration;
        if (args.length === 1 && typeof args[0] === 'number') {
            duration = args[0];
        }
        else {
            [politeness, duration] = args;
        }
        this.clear();
        clearTimeout(this._previousTimeout);
        if (!politeness) {
            politeness =
                (defaultOptions && defaultOptions.politeness) ? defaultOptions.politeness : 'polite';
        }
        if (duration == null && defaultOptions) {
            duration = defaultOptions.duration;
        }
        // TODO: ensure changing the politeness works on all environments we support.
        this._liveElement.setAttribute('aria-live', politeness);
        // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).
        return this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            resolve => {
                clearTimeout(this._previousTimeout);
                this._previousTimeout = setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this._liveElement.textContent = message;
                    resolve();
                    if (typeof duration === 'number') {
                        this._previousTimeout = setTimeout((/**
                         * @return {?}
                         */
                        () => this.clear()), duration);
                    }
                }), 100);
            }));
        }));
    }
    /**
     * Clears the current text from the announcer element. Can be used to prevent
     * screen readers from reading the text out again while the user is going
     * through the page landmarks.
     * @return {?}
     */
    clear() {
        if (this._liveElement) {
            this._liveElement.textContent = '';
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearTimeout(this._previousTimeout);
        if (this._liveElement && this._liveElement.parentNode) {
            this._liveElement.parentNode.removeChild(this._liveElement);
            this._liveElement = (/** @type {?} */ (null));
        }
    }
    /**
     * @private
     * @return {?}
     */
    _createLiveElement() {
        /** @type {?} */
        const elementClass = 'cdk-live-announcer-element';
        /** @type {?} */
        const previousElements = this._document.getElementsByClassName(elementClass);
        /** @type {?} */
        const liveEl = this._document.createElement('div');
        // Remove any old containers. This can happen when coming in from a server-side-rendered page.
        for (let i = 0; i < previousElements.length; i++) {
            (/** @type {?} */ (previousElements[i].parentNode)).removeChild(previousElements[i]);
        }
        liveEl.classList.add(elementClass);
        liveEl.classList.add('cdk-visually-hidden');
        liveEl.setAttribute('aria-atomic', 'true');
        liveEl.setAttribute('aria-live', 'polite');
        this._document.body.appendChild(liveEl);
        return liveEl;
    }
}
LiveAnnouncer.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
LiveAnnouncer.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [LIVE_ANNOUNCER_ELEMENT_TOKEN,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS,] }] }
];
/** @nocollapse */ LiveAnnouncer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function LiveAnnouncer_Factory() { return new LiveAnnouncer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8)); }, token: LiveAnnouncer, providedIn: "root" });
/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */
class CdkAriaLive {
    /**
     * @param {?} _elementRef
     * @param {?} _liveAnnouncer
     * @param {?} _contentObserver
     * @param {?} _ngZone
     */
    constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
        this._elementRef = _elementRef;
        this._liveAnnouncer = _liveAnnouncer;
        this._contentObserver = _contentObserver;
        this._ngZone = _ngZone;
        this._politeness = 'off';
    }
    /**
     * The aria-live politeness level to use when announcing messages.
     * @return {?}
     */
    get politeness() { return this._politeness; }
    /**
     * @param {?} value
     * @return {?}
     */
    set politeness(value) {
        this._politeness = value === 'polite' || value === 'assertive' ? value : 'off';
        if (this._politeness === 'off') {
            if (this._subscription) {
                this._subscription.unsubscribe();
                this._subscription = null;
            }
        }
        else if (!this._subscription) {
            this._subscription = this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                return this._contentObserver
                    .observe(this._elementRef)
                    .subscribe((/**
                 * @return {?}
                 */
                () => {
                    // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
                    /** @type {?} */
                    const elementText = this._elementRef.nativeElement.textContent;
                    // The `MutationObserver` fires also for attribute
                    // changes which we don't want to announce.
                    if (elementText !== this._previousAnnouncedText) {
                        this._liveAnnouncer.announce(elementText, this._politeness);
                        this._previousAnnouncedText = elementText;
                    }
                }));
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
}
CdkAriaLive.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[cdkAriaLive]',
                exportAs: 'cdkAriaLive',
            },] },
];
/** @nocollapse */
CdkAriaLive.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: LiveAnnouncer },
    { type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ContentObserver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
CdkAriaLive.propDecorators = {
    politeness: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkAriaLive',] }]
};
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentAnnouncer
 * @param {?} liveElement
 * @param {?} _document
 * @param {?} ngZone
 * @return {?}
 */
function LIVE_ANNOUNCER_PROVIDER_FACTORY(parentAnnouncer, liveElement, _document, ngZone) {
    return parentAnnouncer || new LiveAnnouncer(liveElement, ngZone, _document);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
const LIVE_ANNOUNCER_PROVIDER = {
    // If there is already a LiveAnnouncer available, use that. Otherwise, provide a new one.
    provide: LiveAnnouncer,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), LiveAnnouncer],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"](LIVE_ANNOUNCER_ELEMENT_TOKEN)],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
    ],
    useFactory: LIVE_ANNOUNCER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
// that a value of around 650ms seems appropriate.
/** @type {?} */
const TOUCH_BUFFER_MS = 650;
/**
 * Event listener options that enable capturing and also
 * mark the listener as passive if the browser supports it.
 * @type {?}
 */
const captureEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["normalizePassiveListenerOptions"])({
    passive: true,
    capture: true
});
/**
 * Monitors mouse and keyboard events to determine the cause of focus events.
 */
class FocusMonitor {
    /**
     * @param {?} _ngZone
     * @param {?} _platform
     */
    constructor(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * The focus origin that the next focus event is a result of.
         */
        this._origin = null;
        /**
         * Whether the window has just been focused.
         */
        this._windowFocused = false;
        /**
         * Map of elements being monitored to their info.
         */
        this._elementInfo = new Map();
        /**
         * The number of elements currently being monitored.
         */
        this._monitoredElementCount = 0;
        /**
         * Event listener for `keydown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._documentKeydownListener = (/**
         * @return {?}
         */
        () => {
            // On keydown record the origin and clear any touch event that may be in progress.
            this._lastTouchTarget = null;
            this._setOriginForCurrentEventQueue('keyboard');
        });
        /**
         * Event listener for `mousedown` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._documentMousedownListener = (/**
         * @return {?}
         */
        () => {
            // On mousedown record the origin only if there is not touch
            // target, since a mousedown can happen as a result of a touch event.
            if (!this._lastTouchTarget) {
                this._setOriginForCurrentEventQueue('mouse');
            }
        });
        /**
         * Event listener for `touchstart` events on the document.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._documentTouchstartListener = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            // When the touchstart event fires the focus event is not yet in the event queue. This means
            // we can't rely on the trick used above (setting timeout of 1ms). Instead we wait 650ms to
            // see if a focus happens.
            if (this._touchTimeoutId != null) {
                clearTimeout(this._touchTimeoutId);
            }
            // Since this listener is bound on the `document` level, any events coming from the shadow DOM
            // will have their `target` set to the shadow root. If available, use `composedPath` to
            // figure out the event target.
            this._lastTouchTarget = event.composedPath ? event.composedPath()[0] : event.target;
            this._touchTimeoutId = setTimeout((/**
             * @return {?}
             */
            () => this._lastTouchTarget = null), TOUCH_BUFFER_MS);
        });
        /**
         * Event listener for `focus` events on the window.
         * Needs to be an arrow function in order to preserve the context when it gets bound.
         */
        this._windowFocusListener = (/**
         * @return {?}
         */
        () => {
            // Make a note of when the window regains focus, so we can
            // restore the origin info for the focused element.
            this._windowFocused = true;
            this._windowFocusTimeoutId = setTimeout((/**
             * @return {?}
             */
            () => this._windowFocused = false));
        });
    }
    /**
     * @param {?} element
     * @param {?=} checkChildren
     * @return {?}
     */
    monitor(element, checkChildren = false) {
        // Do nothing if we're not on the browser platform.
        if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
        /** @type {?} */
        const nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceElement"])(element);
        // Check if we're already monitoring this element.
        if (this._elementInfo.has(nativeElement)) {
            /** @type {?} */
            let cachedInfo = this._elementInfo.get(nativeElement);
            (/** @type {?} */ (cachedInfo)).checkChildren = checkChildren;
            return (/** @type {?} */ (cachedInfo)).subject.asObservable();
        }
        // Create monitored element info.
        /** @type {?} */
        let info = {
            unlisten: (/**
             * @return {?}
             */
            () => { }),
            checkChildren: checkChildren,
            subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]()
        };
        this._elementInfo.set(nativeElement, info);
        this._incrementMonitoredElementCount();
        // Start listening. We need to listen in capture phase since focus events don't bubble.
        /** @type {?} */
        let focusListener = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this._onFocus(event, nativeElement));
        /** @type {?} */
        let blurListener = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this._onBlur(event, nativeElement));
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            nativeElement.addEventListener('focus', focusListener, true);
            nativeElement.addEventListener('blur', blurListener, true);
        }));
        // Create an unlisten function for later.
        info.unlisten = (/**
         * @return {?}
         */
        () => {
            nativeElement.removeEventListener('focus', focusListener, true);
            nativeElement.removeEventListener('blur', blurListener, true);
        });
        return info.subject.asObservable();
    }
    /**
     * @param {?} element
     * @return {?}
     */
    stopMonitoring(element) {
        /** @type {?} */
        const nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceElement"])(element);
        /** @type {?} */
        const elementInfo = this._elementInfo.get(nativeElement);
        if (elementInfo) {
            elementInfo.unlisten();
            elementInfo.subject.complete();
            this._setClasses(nativeElement);
            this._elementInfo.delete(nativeElement);
            this._decrementMonitoredElementCount();
        }
    }
    /**
     * @param {?} element
     * @param {?} origin
     * @param {?=} options
     * @return {?}
     */
    focusVia(element, origin, options) {
        /** @type {?} */
        const nativeElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceElement"])(element);
        this._setOriginForCurrentEventQueue(origin);
        // `focus` isn't available on the server
        if (typeof nativeElement.focus === 'function') {
            // Cast the element to `any`, because the TS typings don't have the `options` parameter yet.
            ((/** @type {?} */ (nativeElement))).focus(options);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._elementInfo.forEach((/**
         * @param {?} _info
         * @param {?} element
         * @return {?}
         */
        (_info, element) => this.stopMonitoring(element)));
    }
    /**
     * @private
     * @param {?} element
     * @param {?} className
     * @param {?} shouldSet
     * @return {?}
     */
    _toggleClass(element, className, shouldSet) {
        if (shouldSet) {
            element.classList.add(className);
        }
        else {
            element.classList.remove(className);
        }
    }
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @private
     * @param {?} element The element to update the classes on.
     * @param {?=} origin The focus origin.
     * @return {?}
     */
    _setClasses(element, origin) {
        /** @type {?} */
        const elementInfo = this._elementInfo.get(element);
        if (elementInfo) {
            this._toggleClass(element, 'cdk-focused', !!origin);
            this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');
            this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');
            this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');
            this._toggleClass(element, 'cdk-program-focused', origin === 'program');
        }
    }
    /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * @private
     * @param {?} origin The origin to set.
     * @return {?}
     */
    _setOriginForCurrentEventQueue(origin) {
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._origin = origin;
            // Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
            // tick after the interaction event fired. To ensure the focus origin is always correct,
            // the focus origin will be determined at the beginning of the next tick.
            this._originTimeoutId = setTimeout((/**
             * @return {?}
             */
            () => this._origin = null), 1);
        }));
    }
    /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @private
     * @param {?} event The focus event to check.
     * @return {?} Whether the event was caused by a touch.
     */
    _wasCausedByTouch(event) {
        // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
        // Consider the following dom structure:
        //
        // <div #parent tabindex="0" cdkFocusClasses>
        //   <div #child (click)="#parent.focus()"></div>
        // </div>
        //
        // If the user touches the #child element and the #parent is programmatically focused as a
        // result, this code will still consider it to have been caused by the touch event and will
        // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
        // relatively small edge-case that can be worked around by using
        // focusVia(parentEl, 'program') to focus the parent element.
        //
        // If we decide that we absolutely must handle this case correctly, we can do so by listening
        // for the first focus event after the touchstart, and then the first blur event after that
        // focus event. When that blur event fires we know that whatever follows is not a result of the
        // touchstart.
        /** @type {?} */
        let focusTarget = event.target;
        return this._lastTouchTarget instanceof Node && focusTarget instanceof Node &&
            (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
    }
    /**
     * Handles focus events on a registered element.
     * @private
     * @param {?} event The focus event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    _onFocus(event, element) {
        // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
        // focus event affecting the monitored element. If we want to use the origin of the first event
        // instead we should check for the cdk-focused class here and return if the element already has
        // it. (This only matters for elements that have includesChildren = true).
        // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
        // focus event affecting the monitored element. If we want to use the origin of the first event
        // instead we should check for the cdk-focused class here and return if the element already has
        // it. (This only matters for elements that have includesChildren = true).
        // If we are not counting child-element-focus as focused, make sure that the event target is the
        // monitored element itself.
        /** @type {?} */
        const elementInfo = this._elementInfo.get(element);
        if (!elementInfo || (!elementInfo.checkChildren && element !== event.target)) {
            return;
        }
        // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
        // 1) The window has just regained focus, in which case we want to restore the focused state of
        //    the element from before the window blurred.
        // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
        // 3) The element was programmatically focused, in which case we should mark the origin as
        //    'program'.
        /** @type {?} */
        let origin = this._origin;
        if (!origin) {
            if (this._windowFocused && this._lastFocusOrigin) {
                origin = this._lastFocusOrigin;
            }
            else if (this._wasCausedByTouch(event)) {
                origin = 'touch';
            }
            else {
                origin = 'program';
            }
        }
        this._setClasses(element, origin);
        this._emitOrigin(elementInfo.subject, origin);
        this._lastFocusOrigin = origin;
    }
    /**
     * Handles blur events on a registered element.
     * @param {?} event The blur event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    _onBlur(event, element) {
        // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
        // order to focus another child of the monitored element.
        /** @type {?} */
        const elementInfo = this._elementInfo.get(element);
        if (!elementInfo || (elementInfo.checkChildren && event.relatedTarget instanceof Node &&
            element.contains(event.relatedTarget))) {
            return;
        }
        this._setClasses(element);
        this._emitOrigin(elementInfo.subject, null);
    }
    /**
     * @private
     * @param {?} subject
     * @param {?} origin
     * @return {?}
     */
    _emitOrigin(subject, origin) {
        this._ngZone.run((/**
         * @return {?}
         */
        () => subject.next(origin)));
    }
    /**
     * @private
     * @return {?}
     */
    _incrementMonitoredElementCount() {
        // Register global listeners when first element is monitored.
        if (++this._monitoredElementCount == 1 && this._platform.isBrowser) {
            // Note: we listen to events in the capture phase so we
            // can detect them even if the user stops propagation.
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                document.addEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);
                document.addEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);
                document.addEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);
                window.addEventListener('focus', this._windowFocusListener);
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    _decrementMonitoredElementCount() {
        // Unregister global listeners when last element is unmonitored.
        if (!--this._monitoredElementCount) {
            document.removeEventListener('keydown', this._documentKeydownListener, captureEventListenerOptions);
            document.removeEventListener('mousedown', this._documentMousedownListener, captureEventListenerOptions);
            document.removeEventListener('touchstart', this._documentTouchstartListener, captureEventListenerOptions);
            window.removeEventListener('focus', this._windowFocusListener);
            // Clear timeouts for all potentially pending timeouts to prevent the leaks.
            clearTimeout(this._windowFocusTimeoutId);
            clearTimeout(this._touchTimeoutId);
            clearTimeout(this._originTimeoutId);
        }
    }
}
FocusMonitor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
FocusMonitor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
/** @nocollapse */ FocusMonitor.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function FocusMonitor_Factory() { return new FocusMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"])); }, token: FocusMonitor, providedIn: "root" });
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */
class CdkMonitorFocus {
    /**
     * @param {?} _elementRef
     * @param {?} _focusMonitor
     */
    constructor(_elementRef, _focusMonitor) {
        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._monitorSubscription = this._focusMonitor.monitor(this._elementRef, this._elementRef.nativeElement.hasAttribute('cdkMonitorSubtreeFocus'))
            .subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        origin => this.cdkFocusChange.emit(origin)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._monitorSubscription.unsubscribe();
    }
}
CdkMonitorFocus.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]',
            },] },
];
/** @nocollapse */
CdkMonitorFocus.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: FocusMonitor }
];
CdkMonitorFocus.propDecorators = {
    cdkFocusChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function FOCUS_MONITOR_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new FocusMonitor(ngZone, platform);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
const FOCUS_MONITOR_PROVIDER = {
    // If there is already a FocusMonitor available, use that. Otherwise, provide a new one.
    provide: FocusMonitor,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), FocusMonitor], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]],
    useFactory: FOCUS_MONITOR_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Screenreaders will often fire fake mousedown events when a focusable element
 * is activated using the keyboard. We can typically distinguish between these faked
 * mousedown events and real mousedown events using the "buttons" property. While
 * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
 * the left mouse button), faked mousedowns will usually set the property value to 0.
 * @param {?} event
 * @return {?}
 */
function isFakeMousedownFromScreenReader(event) {
    return event.buttons === 0;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class A11yModule {
}
A11yModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"]],
                declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
                exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=a11y.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm2015/cdk.js":
/*!**************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/cdk.js ***!
  \**************************************************/
/*! exports provided: VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Current version of the Angular Component Development Kit.
 * @type {?}
 */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=cdk.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm2015/keycodes.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/keycodes.js ***!
  \*******************************************************/
/*! exports provided: MAC_ENTER, BACKSPACE, TAB, NUM_CENTER, ENTER, SHIFT, CONTROL, ALT, PAUSE, CAPS_LOCK, ESCAPE, SPACE, PAGE_UP, PAGE_DOWN, END, HOME, LEFT_ARROW, UP_ARROW, RIGHT_ARROW, DOWN_ARROW, PLUS_SIGN, PRINT_SCREEN, INSERT, DELETE, ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, FF_SEMICOLON, FF_EQUALS, QUESTION_MARK, AT_SIGN, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, CONTEXT_MENU, NUMPAD_ZERO, NUMPAD_ONE, NUMPAD_TWO, NUMPAD_THREE, NUMPAD_FOUR, NUMPAD_FIVE, NUMPAD_SIX, NUMPAD_SEVEN, NUMPAD_EIGHT, NUMPAD_NINE, NUMPAD_MULTIPLY, NUMPAD_PLUS, NUMPAD_MINUS, NUMPAD_PERIOD, NUMPAD_DIVIDE, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, NUM_LOCK, SCROLL_LOCK, FIRST_MEDIA, FF_MINUS, MUTE, VOLUME_DOWN, VOLUME_UP, FF_MUTE, FF_VOLUME_DOWN, LAST_MEDIA, FF_VOLUME_UP, SEMICOLON, EQUALS, COMMA, DASH, SLASH, APOSTROPHE, TILDE, OPEN_SQUARE_BRACKET, BACKSLASH, CLOSE_SQUARE_BRACKET, SINGLE_QUOTE, MAC_META, hasModifierKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function() { return MAC_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSPACE", function() { return BACKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function() { return NUM_CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHIFT", function() { return SHIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL", function() { return CONTROL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALT", function() { return ALT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAUSE", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function() { return CAPS_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESCAPE", function() { return ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_UP", function() { return PAGE_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function() { return PAGE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function() { return LEFT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP_ARROW", function() { return UP_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function() { return RIGHT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function() { return DOWN_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function() { return PLUS_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function() { return PRINT_SCREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSERT", function() { return INSERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO", function() { return ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE", function() { return ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO", function() { return TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THREE", function() { return THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOUR", function() { return FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIVE", function() { return FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIX", function() { return SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEVEN", function() { return SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIGHT", function() { return EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NINE", function() { return NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function() { return FF_SEMICOLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function() { return FF_EQUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function() { return QUESTION_MARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AT_SIGN", function() { return AT_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META", function() { return META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function() { return MAC_WK_CMD_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function() { return MAC_WK_CMD_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function() { return CONTEXT_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function() { return NUMPAD_ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function() { return NUMPAD_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function() { return NUMPAD_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function() { return NUMPAD_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function() { return NUMPAD_FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function() { return NUMPAD_FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function() { return NUMPAD_SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function() { return NUMPAD_SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function() { return NUMPAD_EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function() { return NUMPAD_NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function() { return NUMPAD_MULTIPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function() { return NUMPAD_PLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function() { return NUMPAD_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function() { return NUMPAD_PERIOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function() { return NUMPAD_DIVIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F1", function() { return F1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F2", function() { return F2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F3", function() { return F3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F4", function() { return F4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F5", function() { return F5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F6", function() { return F6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F7", function() { return F7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F8", function() { return F8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F9", function() { return F9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F10", function() { return F10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F11", function() { return F11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F12", function() { return F12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function() { return NUM_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function() { return SCROLL_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function() { return FIRST_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_MINUS", function() { return FF_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUTE", function() { return MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function() { return VOLUME_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function() { return VOLUME_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_MUTE", function() { return FF_MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function() { return FF_VOLUME_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function() { return LAST_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function() { return FF_VOLUME_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEMICOLON", function() { return SEMICOLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQUALS", function() { return EQUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMA", function() { return COMMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASH", function() { return DASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLASH", function() { return SLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function() { return APOSTROPHE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILDE", function() { return TILDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function() { return OPEN_SQUARE_BRACKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSLASH", function() { return BACKSLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function() { return CLOSE_SQUARE_BRACKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function() { return SINGLE_QUOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_META", function() { return MAC_META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasModifierKey", function() { return hasModifierKey; });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */
const MAC_ENTER = 3;
/** @type {?} */
const BACKSPACE = 8;
/** @type {?} */
const TAB = 9;
/** @type {?} */
const NUM_CENTER = 12;
/** @type {?} */
const ENTER = 13;
/** @type {?} */
const SHIFT = 16;
/** @type {?} */
const CONTROL = 17;
/** @type {?} */
const ALT = 18;
/** @type {?} */
const PAUSE = 19;
/** @type {?} */
const CAPS_LOCK = 20;
/** @type {?} */
const ESCAPE = 27;
/** @type {?} */
const SPACE = 32;
/** @type {?} */
const PAGE_UP = 33;
/** @type {?} */
const PAGE_DOWN = 34;
/** @type {?} */
const END = 35;
/** @type {?} */
const HOME = 36;
/** @type {?} */
const LEFT_ARROW = 37;
/** @type {?} */
const UP_ARROW = 38;
/** @type {?} */
const RIGHT_ARROW = 39;
/** @type {?} */
const DOWN_ARROW = 40;
/** @type {?} */
const PLUS_SIGN = 43;
/** @type {?} */
const PRINT_SCREEN = 44;
/** @type {?} */
const INSERT = 45;
/** @type {?} */
const DELETE = 46;
/** @type {?} */
const ZERO = 48;
/** @type {?} */
const ONE = 49;
/** @type {?} */
const TWO = 50;
/** @type {?} */
const THREE = 51;
/** @type {?} */
const FOUR = 52;
/** @type {?} */
const FIVE = 53;
/** @type {?} */
const SIX = 54;
/** @type {?} */
const SEVEN = 55;
/** @type {?} */
const EIGHT = 56;
/** @type {?} */
const NINE = 57;
/** @type {?} */
const FF_SEMICOLON = 59;
// Firefox (Gecko) fires this for semicolon instead of 186
/** @type {?} */
const FF_EQUALS = 61;
// Firefox (Gecko) fires this for equals instead of 187
/** @type {?} */
const QUESTION_MARK = 63;
/** @type {?} */
const AT_SIGN = 64;
/** @type {?} */
const A = 65;
/** @type {?} */
const B = 66;
/** @type {?} */
const C = 67;
/** @type {?} */
const D = 68;
/** @type {?} */
const E = 69;
/** @type {?} */
const F = 70;
/** @type {?} */
const G = 71;
/** @type {?} */
const H = 72;
/** @type {?} */
const I = 73;
/** @type {?} */
const J = 74;
/** @type {?} */
const K = 75;
/** @type {?} */
const L = 76;
/** @type {?} */
const M = 77;
/** @type {?} */
const N = 78;
/** @type {?} */
const O = 79;
/** @type {?} */
const P = 80;
/** @type {?} */
const Q = 81;
/** @type {?} */
const R = 82;
/** @type {?} */
const S = 83;
/** @type {?} */
const T = 84;
/** @type {?} */
const U = 85;
/** @type {?} */
const V = 86;
/** @type {?} */
const W = 87;
/** @type {?} */
const X = 88;
/** @type {?} */
const Y = 89;
/** @type {?} */
const Z = 90;
/** @type {?} */
const META = 91;
// WIN_KEY_LEFT
/** @type {?} */
const MAC_WK_CMD_LEFT = 91;
/** @type {?} */
const MAC_WK_CMD_RIGHT = 93;
/** @type {?} */
const CONTEXT_MENU = 93;
/** @type {?} */
const NUMPAD_ZERO = 96;
/** @type {?} */
const NUMPAD_ONE = 97;
/** @type {?} */
const NUMPAD_TWO = 98;
/** @type {?} */
const NUMPAD_THREE = 99;
/** @type {?} */
const NUMPAD_FOUR = 100;
/** @type {?} */
const NUMPAD_FIVE = 101;
/** @type {?} */
const NUMPAD_SIX = 102;
/** @type {?} */
const NUMPAD_SEVEN = 103;
/** @type {?} */
const NUMPAD_EIGHT = 104;
/** @type {?} */
const NUMPAD_NINE = 105;
/** @type {?} */
const NUMPAD_MULTIPLY = 106;
/** @type {?} */
const NUMPAD_PLUS = 107;
/** @type {?} */
const NUMPAD_MINUS = 109;
/** @type {?} */
const NUMPAD_PERIOD = 110;
/** @type {?} */
const NUMPAD_DIVIDE = 111;
/** @type {?} */
const F1 = 112;
/** @type {?} */
const F2 = 113;
/** @type {?} */
const F3 = 114;
/** @type {?} */
const F4 = 115;
/** @type {?} */
const F5 = 116;
/** @type {?} */
const F6 = 117;
/** @type {?} */
const F7 = 118;
/** @type {?} */
const F8 = 119;
/** @type {?} */
const F9 = 120;
/** @type {?} */
const F10 = 121;
/** @type {?} */
const F11 = 122;
/** @type {?} */
const F12 = 123;
/** @type {?} */
const NUM_LOCK = 144;
/** @type {?} */
const SCROLL_LOCK = 145;
/** @type {?} */
const FIRST_MEDIA = 166;
/** @type {?} */
const FF_MINUS = 173;
/** @type {?} */
const MUTE = 173;
// Firefox (Gecko) fires 181 for MUTE
/** @type {?} */
const VOLUME_DOWN = 174;
// Firefox (Gecko) fires 182 for VOLUME_DOWN
/** @type {?} */
const VOLUME_UP = 175;
// Firefox (Gecko) fires 183 for VOLUME_UP
/** @type {?} */
const FF_MUTE = 181;
/** @type {?} */
const FF_VOLUME_DOWN = 182;
/** @type {?} */
const LAST_MEDIA = 183;
/** @type {?} */
const FF_VOLUME_UP = 183;
/** @type {?} */
const SEMICOLON = 186;
// Firefox (Gecko) fires 59 for SEMICOLON
/** @type {?} */
const EQUALS = 187;
// Firefox (Gecko) fires 61 for EQUALS
/** @type {?} */
const COMMA = 188;
/** @type {?} */
const DASH = 189;
// Firefox (Gecko) fires 173 for DASH/MINUS
/** @type {?} */
const SLASH = 191;
/** @type {?} */
const APOSTROPHE = 192;
/** @type {?} */
const TILDE = 192;
/** @type {?} */
const OPEN_SQUARE_BRACKET = 219;
/** @type {?} */
const BACKSLASH = 220;
/** @type {?} */
const CLOSE_SQUARE_BRACKET = 221;
/** @type {?} */
const SINGLE_QUOTE = 222;
/** @type {?} */
const MAC_META = 224;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Checks whether a modifier key is pressed.
 * @param {?} event Event to be checked.
 * @param {...?} modifiers
 * @return {?}
 */
function hasModifierKey(event, ...modifiers) {
    if (modifiers.length) {
        return modifiers.some((/**
         * @param {?} modifier
         * @return {?}
         */
        modifier => event[modifier]));
    }
    return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=keycodes.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm2015/observers.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/observers.js ***!
  \********************************************************/
/*! exports provided: MutationObserverFactory, ContentObserver, CdkObserveContent, ObserversModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationObserverFactory", function() { return MutationObserverFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentObserver", function() { return ContentObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkObserveContent", function() { return CdkObserveContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserversModule", function() { return ObserversModule; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * \@docs-private
 */
class MutationObserverFactory {
    /**
     * @param {?} callback
     * @return {?}
     */
    create(callback) {
        return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    }
}
MutationObserverFactory.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */ MutationObserverFactory.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function MutationObserverFactory_Factory() { return new MutationObserverFactory(); }, token: MutationObserverFactory, providedIn: "root" });
/**
 * An injectable service that allows watching elements for changes to their content.
 */
class ContentObserver {
    /**
     * @param {?} _mutationObserverFactory
     */
    constructor(_mutationObserverFactory) {
        this._mutationObserverFactory = _mutationObserverFactory;
        /**
         * Keeps track of the existing MutationObservers so they can be reused.
         */
        this._observedElements = new Map();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._observedElements.forEach((/**
         * @param {?} _
         * @param {?} element
         * @return {?}
         */
        (_, element) => this._cleanupObserver(element)));
    }
    /**
     * @param {?} elementOrRef
     * @return {?}
     */
    observe(elementOrRef) {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(elementOrRef);
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            const stream = this._observeElement(element);
            /** @type {?} */
            const subscription = stream.subscribe(observer);
            return (/**
             * @return {?}
             */
            () => {
                subscription.unsubscribe();
                this._unobserveElement(element);
            });
        }));
    }
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     * @private
     * @param {?} element
     * @return {?}
     */
    _observeElement(element) {
        if (!this._observedElements.has(element)) {
            /** @type {?} */
            const stream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /** @type {?} */
            const observer = this._mutationObserverFactory.create((/**
             * @param {?} mutations
             * @return {?}
             */
            mutations => stream.next(mutations)));
            if (observer) {
                observer.observe(element, {
                    characterData: true,
                    childList: true,
                    subtree: true
                });
            }
            this._observedElements.set(element, { observer, stream, count: 1 });
        }
        else {
            (/** @type {?} */ (this._observedElements.get(element))).count++;
        }
        return (/** @type {?} */ (this._observedElements.get(element))).stream;
    }
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     * @private
     * @param {?} element
     * @return {?}
     */
    _unobserveElement(element) {
        if (this._observedElements.has(element)) {
            (/** @type {?} */ (this._observedElements.get(element))).count--;
            if (!(/** @type {?} */ (this._observedElements.get(element))).count) {
                this._cleanupObserver(element);
            }
        }
    }
    /**
     * Clean up the underlying MutationObserver for the specified element.
     * @private
     * @param {?} element
     * @return {?}
     */
    _cleanupObserver(element) {
        if (this._observedElements.has(element)) {
            const { observer, stream } = (/** @type {?} */ (this._observedElements.get(element)));
            if (observer) {
                observer.disconnect();
            }
            stream.complete();
            this._observedElements.delete(element);
        }
    }
}
ContentObserver.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
ContentObserver.ctorParameters = () => [
    { type: MutationObserverFactory }
];
/** @nocollapse */ ContentObserver.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ContentObserver_Factory() { return new ContentObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MutationObserverFactory)); }, token: ContentObserver, providedIn: "root" });
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
class CdkObserveContent {
    /**
     * @param {?} _contentObserver
     * @param {?} _elementRef
     * @param {?} _ngZone
     */
    constructor(_contentObserver, _elementRef, _ngZone) {
        this._contentObserver = _contentObserver;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * Event emitted for each change in the element's content.
         */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._disabled = false;
        this._currentSubscription = null;
    }
    /**
     * Whether observing content is disabled. This option can be used
     * to disconnect the underlying MutationObserver until it is needed.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        this._disabled ? this._unsubscribe() : this._subscribe();
    }
    /**
     * Debounce interval for emitting the changes.
     * @return {?}
     */
    get debounce() { return this._debounce; }
    /**
     * @param {?} value
     * @return {?}
     */
    set debounce(value) {
        this._debounce = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        this._subscribe();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this._currentSubscription && !this.disabled) {
            this._subscribe();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._unsubscribe();
    }
    /**
     * @private
     * @return {?}
     */
    _subscribe() {
        this._unsubscribe();
        /** @type {?} */
        const stream = this._contentObserver.observe(this._elementRef);
        // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
        // Consider brining it back inside the zone next time we're making breaking changes.
        // Bringing it back inside can cause things like infinite change detection loops and changed
        // after checked errors if people's code isn't handling it properly.
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._currentSubscription =
                (this.debounce ? stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.debounce)) : stream).subscribe(this.event);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _unsubscribe() {
        if (this._currentSubscription) {
            this._currentSubscription.unsubscribe();
        }
    }
}
CdkObserveContent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[cdkObserveContent]',
                exportAs: 'cdkObserveContent',
            },] },
];
/** @nocollapse */
CdkObserveContent.ctorParameters = () => [
    { type: ContentObserver },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
CdkObserveContent.propDecorators = {
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['cdkObserveContent',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkObserveContentDisabled',] }],
    debounce: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
class ObserversModule {
}
ObserversModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                exports: [CdkObserveContent],
                declarations: [CdkObserveContent],
                providers: [MutationObserverFactory]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=observers.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm2015/platform.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm2015/platform.js ***!
  \*******************************************************/
/*! exports provided: Platform, PlatformModule, getSupportedInputTypes, supportsPassiveEventListeners, normalizePassiveListenerOptions, supportsScrollBehavior, getRtlScrollAxisType, RtlScrollAxisType, _supportsShadowDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function() { return normalizePassiveListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function() { return supportsScrollBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function() { return getRtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtlScrollAxisType", function() { return RtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function() { return _supportsShadowDom; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
/** @type {?} */
let hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    hasV8BreakIterator = (typeof Intl !== 'undefined' && ((/** @type {?} */ (Intl))).v8BreakIterator);
}
catch (_a) {
    hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
class Platform {
    /**
     * \@breaking-change 8.0.0 remove optional decorator
     * @param {?=} _platformId
     */
    constructor(_platformId) {
        this._platformId = _platformId;
        /**
         * Whether the Angular application is being rendered in the browser.
         * We want to use the Angular platform check because if the Document is shimmed
         * without the navigator, the following checks will fail. This is preferred because
         * sometimes the Document may be shimmed without the user's knowledge or intention
         */
        this.isBrowser = this._platformId ?
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /**
         * Whether the current browser is Microsoft Edge.
         */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Microsoft Trident.
         */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Blink.
         */
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        this.BLINK = this.isBrowser && (!!(((/** @type {?} */ (window))).chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        /**
         * Whether the current rendering engine is WebKit.
         */
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current platform is Apple iOS.
         */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !('MSStream' in window);
        /**
         * Whether the current browser is Firefox.
         */
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /**
         * Whether the current platform is Android.
         */
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        /**
         * Whether the current browser is Safari.
         */
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
}
Platform.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
Platform.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
/** @nocollapse */ Platform.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); }, token: Platform, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlatformModule {
}
PlatformModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result Set of input types support by the current browser.
 * @type {?}
 */
let supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 * @type {?}
 */
const candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/**
 * @return {?} The input types supported by this browser.
 */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    /** @type {?} */
    let featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter((/**
     * @param {?} value
     * @return {?}
     */
    value => {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    })));
    return supportedInputTypes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result of whether the user's browser supports passive event listeners.
 * @type {?}
 */
let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', (/** @type {?} */ (null)), Object.defineProperty({}, 'passive', {
                get: (/**
                 * @return {?}
                 */
                () => supportsPassiveEvents = true)
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param {?} options Object to be normalized.
 * @return {?}
 */
function normalizePassiveListenerOptions(options) {
    return supportsPassiveEventListeners() ? options : !!options.capture;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {number} */
const RtlScrollAxisType = {
    /**
     * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
     * all the way right.
     */
    NORMAL: 0,
    /**
     * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    NEGATED: 1,
    /**
     * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    INVERTED: 2,
};
RtlScrollAxisType[RtlScrollAxisType.NORMAL] = 'NORMAL';
RtlScrollAxisType[RtlScrollAxisType.NEGATED] = 'NEGATED';
RtlScrollAxisType[RtlScrollAxisType.INVERTED] = 'INVERTED';
/**
 * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
 * @type {?}
 */
let rtlScrollAxisType;
/**
 * Check whether the browser supports scroll behaviors.
 * @return {?}
 */
function supportsScrollBehavior() {
    return !!(typeof document == 'object' && 'scrollBehavior' in (/** @type {?} */ (document.documentElement)).style);
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 * @return {?}
 */
function getRtlScrollAxisType() {
    // We can't check unless we're on the browser. Just assume 'normal' if we're not.
    if (typeof document !== 'object' || !document) {
        return RtlScrollAxisType.NORMAL;
    }
    if (!rtlScrollAxisType) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        /** @type {?} */
        const scrollContainer = document.createElement('div');
        /** @type {?} */
        const containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        /** @type {?} */
        const content = document.createElement('div');
        /** @type {?} */
        const contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = RtlScrollAxisType.NORMAL;
        // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.
        if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType =
                scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
        }
        (/** @type {?} */ (scrollContainer.parentNode)).removeChild(scrollContainer);
    }
    return rtlScrollAxisType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */
let shadowDomIsSupported;
/**
 * Checks whether the user's browser support Shadow DOM.
 * @return {?}
 */
function _supportsShadowDom() {
    if (shadowDomIsSupported == null) {
        /** @type {?} */
        const head = typeof document !== 'undefined' ? document.head : null;
        shadowDomIsSupported = !!(head && (((/** @type {?} */ (head))).createShadowRoot || head.attachShadow));
    }
    return shadowDomIsSupported;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=platform.js.map


/***/ }),

/***/ "./node_modules/@angular/common/fesm2015/http.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/common/fesm2015/http.js ***!
  \*******************************************************/
/*! exports provided: ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, HttpBackend, HttpHandler, HttpClient, HttpHeaders, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, ɵHttpInterceptingHandler, HttpParams, HttpUrlEncodingCodec, HttpRequest, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory, HttpXsrfTokenExtractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function() { return NoopInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function() { return JsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function() { return jsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function() { return HttpXsrfCookieExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function() { return HttpXsrfInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function() { return XSRF_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function() { return XSRF_HEADER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function() { return HttpBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function() { return HttpHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function() { return HttpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function() { return HTTP_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function() { return JsonpClientBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function() { return JsonpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function() { return HttpClientJsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function() { return HttpClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function() { return HttpClientXsrfModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function() { return HttpInterceptingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function() { return HttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function() { return HttpUrlEncodingCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function() { return HttpErrorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function() { return HttpEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function() { return HttpHeaderResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function() { return HttpResponseBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function() { return HttpXhrBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function() { return XhrFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function() { return HttpXsrfTokenExtractor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/**
 * @license Angular v8.2.11
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * \@publicApi
 * @abstract
 */
class HttpHandler {
}
if (false) {}
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * \@publicApi
 * @abstract
 */
class HttpBackend {
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @record
 */
function Update() { }
if (false) {}
/**
 * Represents the header configuration options for an HTTP request.
 * Instances are immutable. Modifying methods return a cloned
 * instance with the change. The original object is never changed.
 *
 * \@publicApi
 */
class HttpHeaders {
    /**
     * Constructs a new HTTP header object with the given values.
     * @param {?=} headers
     */
    constructor(headers) {
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = (/**
             * @return {?}
             */
            () => {
                this.headers = new Map();
                headers.split('\n').forEach((/**
                 * @param {?} line
                 * @return {?}
                 */
                line => {
                    /** @type {?} */
                    const index = line.indexOf(':');
                    if (index > 0) {
                        /** @type {?} */
                        const name = line.slice(0, index);
                        /** @type {?} */
                        const key = name.toLowerCase();
                        /** @type {?} */
                        const value = line.slice(index + 1).trim();
                        this.maybeSetNormalizedName(name, key);
                        if (this.headers.has(key)) {
                            (/** @type {?} */ (this.headers.get(key))).push(value);
                        }
                        else {
                            this.headers.set(key, [value]);
                        }
                    }
                }));
            });
        }
        else {
            this.lazyInit = (/**
             * @return {?}
             */
            () => {
                this.headers = new Map();
                Object.keys(headers).forEach((/**
                 * @param {?} name
                 * @return {?}
                 */
                name => {
                    /** @type {?} */
                    let values = headers[name];
                    /** @type {?} */
                    const key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        this.headers.set(key, values);
                        this.maybeSetNormalizedName(name, key);
                    }
                }));
            });
        }
    }
    /**
     * Checks for existence of a given header.
     *
     * @param {?} name The header name to check for existence.
     *
     * @return {?} True if the header exists, false otherwise.
     */
    has(name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    }
    /**
     * Retrieves the first value of a given header.
     *
     * @param {?} name The header name.
     *
     * @return {?} The value string if the header exists, null otherwise
     */
    get(name) {
        this.init();
        /** @type {?} */
        const values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    }
    /**
     * Retrieves the names of the headers.
     *
     * @return {?} A list of header names.
     */
    keys() {
        this.init();
        return Array.from(this.normalizedNames.values());
    }
    /**
     * Retrieves a list of values for a given header.
     *
     * @param {?} name The header name from which to retrieve values.
     *
     * @return {?} A string of values if the header exists, null otherwise.
     */
    getAll(name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    }
    /**
     * Appends a new value to the existing set of values for a header
     * and returns them in a clone of the original instance.
     *
     * @param {?} name The header name for which to append the value or values.
     * @param {?} value The new value or array of values.
     *
     * @return {?} A clone of the HTTP headers object with the value appended to the given header.
     */
    append(name, value) {
        return this.clone({ name, value, op: 'a' });
    }
    /**
     * Sets or modifies a value for a given header in a clone of the original instance.
     * If the header already exists, its value is replaced with the given value
     * in the returned object.
     *
     * @param {?} name The header name.
     * @param {?} value The value or values to set or overide for the given header.
     *
     * @return {?} A clone of the HTTP headers object with the newly set header value.
     */
    set(name, value) {
        return this.clone({ name, value, op: 's' });
    }
    /**
     * Deletes values for a given header in a clone of the original instance.
     *
     * @param {?} name The header name.
     * @param {?=} value The value or values to delete for the given header.
     *
     * @return {?} A clone of the HTTP headers object with the given value deleted.
     */
    delete(name, value) {
        return this.clone({ name, value, op: 'd' });
    }
    /**
     * @private
     * @param {?} name
     * @param {?} lcName
     * @return {?}
     */
    maybeSetNormalizedName(name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach((/**
                 * @param {?} update
                 * @return {?}
                 */
                update => this.applyUpdate(update)));
                this.lazyUpdate = null;
            }
        }
    }
    /**
     * @private
     * @param {?} other
     * @return {?}
     */
    copyFrom(other) {
        other.init();
        Array.from(other.headers.keys()).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            this.headers.set(key, (/** @type {?} */ (other.headers.get(key))));
            this.normalizedNames.set(key, (/** @type {?} */ (other.normalizedNames.get(key))));
        }));
    }
    /**
     * @private
     * @param {?} update
     * @return {?}
     */
    clone(update) {
        /** @type {?} */
        const clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    }
    /**
     * @private
     * @param {?} update
     * @return {?}
     */
    applyUpdate(update) {
        /** @type {?} */
        const key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                /** @type {?} */
                let value = (/** @type {?} */ (update.value));
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                /** @type {?} */
                const base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push(...value);
                this.headers.set(key, base);
                break;
            case 'd':
                /** @type {?} */
                const toDelete = (/** @type {?} */ (update.value));
                if (!toDelete) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    /** @type {?} */
                    let existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter((/**
                     * @param {?} value
                     * @return {?}
                     */
                    value => toDelete.indexOf(value) === -1));
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    }
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    forEach(fn) {
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => fn((/** @type {?} */ (this.normalizedNames.get(key))), (/** @type {?} */ (this.headers.get(key))))));
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A codec for encoding and decoding parameters in URLs.
 *
 * Used by `HttpParams`.
 *
 * \@publicApi
 *
 * @record
 */
function HttpParameterCodec() { }
if (false) {}
/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * \@publicApi
 */
class HttpUrlEncodingCodec {
    /**
     * Encodes a key name for a URL parameter or query-string.
     * @param {?} key The key name.
     * @return {?} The encoded key name.
     */
    encodeKey(key) { return standardEncoding(key); }
    /**
     * Encodes the value of a URL parameter or query-string.
     * @param {?} value The value.
     * @return {?} The encoded value.
     */
    encodeValue(value) { return standardEncoding(value); }
    /**
     * Decodes an encoded URL parameter or query-string key.
     * @param {?} key The encoded key name.
     * @return {?} The decoded key name.
     */
    decodeKey(key) { return decodeURIComponent(key); }
    /**
     * Decodes an encoded URL parameter or query-string value.
     * @param {?} value The encoded value.
     * @return {?} The decoded value.
     */
    decodeValue(value) { return decodeURIComponent(value); }
}
/**
 * @param {?} rawParams
 * @param {?} codec
 * @return {?}
 */
function paramParser(rawParams, codec) {
    /** @type {?} */
    const map = new Map();
    if (rawParams.length > 0) {
        /** @type {?} */
        const params = rawParams.split('&');
        params.forEach((/**
         * @param {?} param
         * @return {?}
         */
        (param) => {
            /** @type {?} */
            const eqIdx = param.indexOf('=');
            const [key, val] = eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
            /** @type {?} */
            const list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        }));
    }
    return map;
}
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * @record
 */
function Update$1() { }
if (false) {}
/**
 * Options used to construct an `HttpParams` instance.
 *
 * \@publicApi
 * @record
 */
function HttpParamsOptions() { }
if (false) {}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * \@publicApi
 */
class HttpParams {
    /**
     * @param {?=} options
     */
    constructor(options = (/** @type {?} */ ({}))) {
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error(`Cannot specify both fromString and fromObject.`);
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                /** @type {?} */
                const value = ((/** @type {?} */ (options.fromObject)))[key];
                (/** @type {?} */ (this.map)).set(key, Array.isArray(value) ? value : [value]);
            }));
        }
        else {
            this.map = null;
        }
    }
    /**
     * Reports whether the body includes one or more values for a given parameter.
     * @param {?} param The parameter name.
     * @return {?} True if the parameter has one or more values,
     * false if it has no value or is not present.
     */
    has(param) {
        this.init();
        return (/** @type {?} */ (this.map)).has(param);
    }
    /**
     * Retrieves the first value for a parameter.
     * @param {?} param The parameter name.
     * @return {?} The first value of the given parameter,
     * or `null` if the parameter is not present.
     */
    get(param) {
        this.init();
        /** @type {?} */
        const res = (/** @type {?} */ (this.map)).get(param);
        return !!res ? res[0] : null;
    }
    /**
     * Retrieves all values for a  parameter.
     * @param {?} param The parameter name.
     * @return {?} All values in a string array,
     * or `null` if the parameter not present.
     */
    getAll(param) {
        this.init();
        return (/** @type {?} */ (this.map)).get(param) || null;
    }
    /**
     * Retrieves all the parameters for this body.
     * @return {?} The parameter names in a string array.
     */
    keys() {
        this.init();
        return Array.from((/** @type {?} */ (this.map)).keys());
    }
    /**
     * Appends a new value to existing values for a parameter.
     * @param {?} param The parameter name.
     * @param {?} value The new value to add.
     * @return {?} A new body with the appended value.
     */
    append(param, value) { return this.clone({ param, value, op: 'a' }); }
    /**
     * Replaces the value for a parameter.
     * @param {?} param The parameter name.
     * @param {?} value The new value.
     * @return {?} A new body with the new value.
     */
    set(param, value) { return this.clone({ param, value, op: 's' }); }
    /**
     * Removes a given value or all values from a parameter.
     * @param {?} param The parameter name.
     * @param {?=} value The value to remove, if provided.
     * @return {?} A new body with the given value removed, or with all values
     * removed if no value is specified.
     */
    delete(param, value) { return this.clone({ param, value, op: 'd' }); }
    /**
     * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     * @return {?}
     */
    toString() {
        this.init();
        return this.keys()
            .map((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            /** @type {?} */
            const eKey = this.encoder.encodeKey(key);
            return (/** @type {?} */ ((/** @type {?} */ (this.map)).get(key))).map((/**
             * @param {?} value
             * @return {?}
             */
            value => eKey + '=' + this.encoder.encodeValue(value)))
                .join('&');
        }))
            .join('&');
    }
    /**
     * @private
     * @param {?} update
     * @return {?}
     */
    clone(update) {
        /** @type {?} */
        const clone = new HttpParams((/** @type {?} */ ({ encoder: this.encoder })));
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => (/** @type {?} */ (this.map)).set(key, (/** @type {?} */ ((/** @type {?} */ ((/** @type {?} */ (this.cloneFrom)).map)).get(key))))));
            (/** @type {?} */ (this.updates)).forEach((/**
             * @param {?} update
             * @return {?}
             */
            update => {
                switch (update.op) {
                    case 'a':
                    case 's':
                        /** @type {?} */
                        const base = (update.op === 'a' ? (/** @type {?} */ (this.map)).get(update.param) : undefined) || [];
                        base.push((/** @type {?} */ (update.value)));
                        (/** @type {?} */ (this.map)).set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            /** @type {?} */
                            let base = (/** @type {?} */ (this.map)).get(update.param) || [];
                            /** @type {?} */
                            const idx = base.indexOf(update.value);
                            if (idx !== -1) {
                                base.splice(idx, 1);
                            }
                            if (base.length > 0) {
                                (/** @type {?} */ (this.map)).set(update.param, base);
                            }
                            else {
                                (/** @type {?} */ (this.map)).delete(update.param);
                            }
                        }
                        else {
                            (/** @type {?} */ (this.map)).delete(update.param);
                            break;
                        }
                }
            }));
            this.cloneFrom = this.updates = null;
        }
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Construction interface for `HttpRequest`s.
 *
 * All values are optional and will override default values if provided.
 * @record
 */
function HttpRequestInit() { }
if (false) {}
/**
 * Determine whether the given HTTP method may include a body.
 * @param {?} method
 * @return {?}
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 * @param {?} value
 * @return {?}
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 * @param {?} value
 * @return {?}
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 * @param {?} value
 * @return {?}
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * \@publicApi
 * @template T
 */
class HttpRequest {
    /**
     * @param {?} method
     * @param {?} url
     * @param {?=} third
     * @param {?=} fourth
     */
    constructor(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        /** @type {?} */
        let options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? (/** @type {?} */ (third)) : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = (/** @type {?} */ (third));
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            /** @type {?} */
            const params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                /** @type {?} */
                const qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                /** @type {?} */
                const sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     * @return {?}
     */
    serializeBody() {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return ((/** @type {?} */ (this.body))).toString();
    }
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     * @return {?}
     */
    detectContentTypeHeader() {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    }
    /**
     * @param {?=} update
     * @return {?}
     */
    clone(update = {}) {
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        /** @type {?} */
        const method = update.method || this.method;
        /** @type {?} */
        const url = update.url || this.url;
        /** @type {?} */
        const responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        /** @type {?} */
        const body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        /** @type {?} */
        const withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        /** @type {?} */
        const reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        /** @type {?} */
        let headers = update.headers || this.headers;
        /** @type {?} */
        let params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce((/**
                 * @param {?} headers
                 * @param {?} name
                 * @return {?}
                 */
                (headers, name) => headers.set(name, (/** @type {?} */ (update.setHeaders))[name])), headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce((/**
             * @param {?} params
             * @param {?} param
             * @return {?}
             */
            (params, param) => params.set(param, (/** @type {?} */ (update.setParams))[param])), params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params, headers, reportProgress, responseType, withCredentials,
        });
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const HttpEventType = {
    /**
     * The request was sent out over the wire.
     */
    Sent: 0,
    /**
     * An upload progress event was received.
     */
    UploadProgress: 1,
    /**
     * The response status code and headers were received.
     */
    ResponseHeader: 2,
    /**
     * A download progress event was received.
     */
    DownloadProgress: 3,
    /**
     * The full response including the body was received.
     */
    Response: 4,
    /**
     * A custom event from an interceptor or a backend.
     */
    User: 5,
};
HttpEventType[HttpEventType.Sent] = 'Sent';
HttpEventType[HttpEventType.UploadProgress] = 'UploadProgress';
HttpEventType[HttpEventType.ResponseHeader] = 'ResponseHeader';
HttpEventType[HttpEventType.DownloadProgress] = 'DownloadProgress';
HttpEventType[HttpEventType.Response] = 'Response';
HttpEventType[HttpEventType.User] = 'User';
/**
 * Base interface for progress events.
 *
 * \@publicApi
 * @record
 */
function HttpProgressEvent() { }
if (false) {}
/**
 * A download progress event.
 *
 * \@publicApi
 * @record
 */
function HttpDownloadProgressEvent() { }
if (false) {}
/**
 * An upload progress event.
 *
 * \@publicApi
 * @record
 */
function HttpUploadProgressEvent() { }
if (false) {}
/**
 * An event indicating that the request was sent to the server. Useful
 * when a request may be retried multiple times, to distinguish between
 * retries on the final event stream.
 *
 * \@publicApi
 * @record
 */
function HttpSentEvent() { }
if (false) {}
/**
 * A user-defined event.
 *
 * Grouping all custom events under this type ensures they will be handled
 * and forwarded by all implementations of interceptors.
 *
 * \@publicApi
 * @record
 * @template T
 */
function HttpUserEvent() { }
if (false) {}
/**
 * An error that represents a failed attempt to JSON.parse text coming back
 * from the server.
 *
 * It bundles the Error object with the actual response body that failed to parse.
 *
 *
 * @record
 */
function HttpJsonParseError() { }
if (false) {}
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * \@publicApi
 * @abstract
 */
class HttpResponseBase {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     * @param {?} init
     * @param {?=} defaultStatus
     * @param {?=} defaultStatusText
     */
    constructor(init, defaultStatus = 200, defaultStatusText = 'OK') {
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
}
if (false) {}
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * \@publicApi
 */
class HttpHeaderResponse extends HttpResponseBase {
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     * @param {?=} init
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.ResponseHeader;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     * @param {?=} update
     * @return {?}
     */
    clone(update = {}) {
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
if (false) {}
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * \@publicApi
 * @template T
 */
class HttpResponse extends HttpResponseBase {
    /**
     * Construct a new `HttpResponse`.
     * @param {?=} init
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.Response;
        this.body = init.body !== undefined ? init.body : null;
    }
    /**
     * @param {?=} update
     * @return {?}
     */
    clone(update = {}) {
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
if (false) {}
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * \@publicApi
 */
class HttpErrorResponse extends HttpResponseBase {
    /**
     * @param {?} init
     */
    constructor(init) {
        // Initialize with a default status of 0 / Unknown Error.
        super(init, 0, 'Unknown Error');
        this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (this.status >= 200 && this.status < 300) {
            this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`;
        }
        else {
            this.message =
                `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`;
        }
        this.error = init.error || null;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.
 *
 * @template T
 * @param {?} options
 * @param {?} body
 * @return {?}
 */
function addBody(options, body) {
    return {
        body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Performs HTTP requests.
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.
 *
 * \@usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 *
 * \@publicApi
 */
class HttpClient {
    /**
     * @param {?} handler
     */
    constructor(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an observable for a generic HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * You can pass an `HttpRequest` directly as the only parameter. In this case,
     * the call returns an observable of the raw `HttpEvent` stream.
     *
     * Alternatively you can pass an HTTP method as the first parameter,
     * a URL string as the second, and an options hash containing the request body as the third.
     * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
     * type of returned observable.
     *   * The `responseType` value determines how a successful response body is parsed.
     *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
     * object as a type parameter to the call.
     *
     * The `observe` value determines the return type, according to what you are interested in
     * observing.
     *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
     * progress events by default.
     *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
     * where the `T` parameter depends on the `responseType` and any optionally provided type
     * parameter.
     *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
     *
     * @param {?} first
     * @param {?=} url
     * @param {?=} options
     * @return {?}
     */
    request(first, url, options = {}) {
        /** @type {?} */
        let req;
        // First, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = (/** @type {?} */ (first));
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.
            /** @type {?} */
            let headers = undefined;
            if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new HttpHeaders(options.headers);
            }
            // Sort out parameters.
            /** @type {?} */
            let params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams((/** @type {?} */ ({ fromObject: options.params })));
                }
            }
            // Construct the request.
            req = new HttpRequest(first, (/** @type {?} */ (url)), (options.body !== undefined ? options.body : null), {
                headers,
                params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        /** @type {?} */
        const events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((/**
         * @param {?} req
         * @return {?}
         */
        (req) => this.handler.handle(req))));
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        /** @type {?} */
        const res$ = (/** @type {?} */ (events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        (event) => event instanceof HttpResponse)))));
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                         * @param {?} res
                         * @return {?}
                         */
                        (res) => {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        })));
                    case 'blob':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                         * @param {?} res
                         * @return {?}
                         */
                        (res) => {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        })));
                    case 'text':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                         * @param {?} res
                         * @return {?}
                         */
                        (res) => {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        })));
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                         * @param {?} res
                         * @return {?}
                         */
                        (res) => res.body)));
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
        }
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `DELETE` request to execute on the server. See the individual overloads for
     * details on the return type.
     *
     * @param {?} url     The endpoint URL.
     * @param {?=} options The HTTP options to send with the request.
     *
     * @return {?}
     */
    delete(url, options = {}) {
        return this.request('DELETE', url, (/** @type {?} */ (options)));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `GET` request to execute on the server. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    get(url, options = {}) {
        return this.request('GET', url, (/** @type {?} */ (options)));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `HEAD` request to execute on the server. The `HEAD` method returns
     * meta information about the resource without transferring the
     * resource itself. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    head(url, options = {}) {
        return this.request('HEAD', url, (/** @type {?} */ (options)));
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes a request with the special method
     * `JSONP` to be dispatched via the interceptor pipeline.
     * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
     * API endpoints that don't support newer,
     * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
     * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
     * requests even if the API endpoint is not located on the same domain (origin) as the client-side
     * application making the request.
     * The endpoint API must support JSONP callback for JSONP requests to work.
     * The resource API returns the JSON response wrapped in a callback function.
     * You can pass the callback function name as one of the query parameters.
     * Note that JSONP requests can only be used with `GET` requests.
     *
     * @template T
     * @param {?} url The resource URL.
     * @param {?} callbackParam The callback function name.
     *
     * @return {?}
     */
    jsonp(url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes the configured
     * `OPTIONS` request to execute on the server. This method allows the client
     * to determine the supported HTTP methods and other capabilites of an endpoint,
     * without implying a resource action. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    options(url, options = {}) {
        return this.request('OPTIONS', url, (/** @type {?} */ (options)));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PATCH` request to execute on the server. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    patch(url, body, options = {}) {
        return this.request('PATCH', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `POST` request to execute on the server. The server responds with the location of
     * the replaced resource. See the individual overloads for
     * details on the return type.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    post(url, body, options = {}) {
        return this.request('POST', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
     * with a new set of values.
     * See the individual overloads for details on the return type.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    put(url, body, options = {}) {
        return this.request('PUT', url, addBody(options, body));
    }
}
HttpClient.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
HttpClient.ctorParameters = () => [
    { type: HttpHandler }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Intercepts and handles an `HttpRequest` or `HttpResponse`.
 *
 * Most interceptors transform the outgoing request before passing it to the
 * next interceptor in the chain, by calling `next.handle(transformedReq)`.
 * An interceptor may transform the
 * response event stream as well, by applying additional RxJS operators on the stream
 * returned by `next.handle()`.
 *
 * More rarely, an interceptor may handle the request entirely,
 * and compose a new event stream instead of invoking `next.handle()`. This is an
 * acceptable behavior, but keep in mind that further interceptors will be skipped entirely.
 *
 * It is also rare but valid for an interceptor to return multiple responses on the
 * event stream for a single request.
 *
 * \@publicApi
 *
 * @see [HTTP Guide](guide/http#intercepting-requests-and-responses)
 *
 * \@usageNotes
 *
 * To use the same instance of `HttpInterceptors` for the entire app, import the `HttpClientModule`
 * only in your `AppModule`, and add the interceptors to the root application injector .
 * If you import `HttpClientModule` multiple times across different modules (for example, in lazy
 * loading modules), each import creates a new copy of the `HttpClientModule`, which overwrites the interceptors
 * provided in the root module.
 *
 * @record
 */
function HttpInterceptor() { }
if (false) {}
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
class HttpInterceptorHandler {
    /**
     * @param {?} next
     * @param {?} interceptor
     */
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    handle(req) {
        return this.interceptor.intercept(req, this.next);
    }
}
if (false) {}
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * \@publicApi
 * @type {?}
 */
const HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_INTERCEPTORS');
class NoopInterceptor {
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        return next.handle(req);
    }
}
NoopInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
/** @type {?} */
let nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
/** @type {?} */
const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
/** @type {?} */
const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
/** @type {?} */
const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 * @abstract
 */
class JsonpCallbackContext {
}
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * \@publicApi
 */
class JsonpClientBackend {
    /**
     * @param {?} callbackMap
     * @param {?} document
     */
    constructor(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     * @private
     * @return {?}
     */
    nextCallback() { return `ng_jsonp_callback_${nextRequestId++}`; }
    /**
     * Processes a JSONP request and returns an event stream of the results.
     * @param {?} req The request object.
     * @return {?} An observable of the response events.
     *
     */
    handle(req) {
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            /** @type {?} */
            const callback = this.nextCallback();
            /** @type {?} */
            const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
            // Construct the <script> tag and point it at the URL.
            /** @type {?} */
            const node = this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            /** @type {?} */
            let body = null;
            // Whether the response callback has been called.
            /** @type {?} */
            let finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            /** @type {?} */
            let cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            this.callbackMap[callback] = (/**
             * @param {?=} data
             * @return {?}
             */
            (data) => {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            });
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            /** @type {?} */
            const cleanup = (/**
             * @return {?}
             */
            () => {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete this.callbackMap[callback];
            });
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            /** @type {?} */
            const onLoad = (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body,
                    status: 200,
                    statusText: 'OK', url,
                }));
                // Complete the stream, the response is over.
                observer.complete();
            });
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            /** @type {?} */
            const onError = (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error,
                    status: 0,
                    statusText: 'JSONP Error', url,
                }));
            });
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return (/**
             * @return {?}
             */
            () => {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            });
        }));
    }
}
JsonpClientBackend.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
JsonpClientBackend.ctorParameters = () => [
    { type: JsonpCallbackContext },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
if (false) {}
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * \@publicApi
 */
class JsonpInterceptor {
    /**
     * @param {?} jsonp
     */
    constructor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * Identifies and handles a given JSONP request.
     * @param {?} req The outgoing request object to handle.
     * @param {?} next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @return {?} An observable of the event stream.
     */
    intercept(req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle((/** @type {?} */ (req)));
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    }
}
JsonpInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
JsonpInterceptor.ctorParameters = () => [
    { type: JsonpClientBackend }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 * @param {?} xhr
 * @return {?}
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * \@publicApi
 * @abstract
 */
class XhrFactory {
}
if (false) {}
/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 *
 */
class BrowserXhr {
    constructor() { }
    /**
     * @return {?}
     */
    build() { return (/** @type {?} */ ((new XMLHttpRequest()))); }
}
BrowserXhr.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
BrowserXhr.ctorParameters = () => [];
/**
 * Tracks a response from the server that does not yet have a body.
 * @record
 */
function PartialResponse() { }
if (false) {}
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * \@publicApi
 */
class HttpXhrBackend {
    /**
     * @param {?} xhrFactory
     */
    constructor(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Processes a request and returns a stream of response events.
     * @param {?} req The request object.
     * @return {?} An observable of the response events.
     */
    handle(req) {
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
            throw new Error(`Attempted to construct Jsonp request without JsonpClientModule installed.`);
        }
        // Everything happens on Observable subscription.
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            /** @type {?} */
            const xhr = this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach((/**
             * @param {?} name
             * @param {?} values
             * @return {?}
             */
            (name, values) => xhr.setRequestHeader(name, values.join(','))));
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                /** @type {?} */
                const detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                /** @type {?} */
                const responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = (/** @type {?} */ (((responseType !== 'json') ? responseType : 'text')));
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            /** @type {?} */
            const reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            /** @type {?} */
            let headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            /** @type {?} */
            const partialFromXhr = (/**
             * @return {?}
             */
            () => {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                /** @type {?} */
                const status = xhr.status === 1223 ? 204 : xhr.status;
                /** @type {?} */
                const statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                /** @type {?} */
                const headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                /** @type {?} */
                const url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers, status, statusText, url });
                return headerResponse;
            });
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            /** @type {?} */
            const onLoad = (/**
             * @return {?}
             */
            () => {
                // Read response state from the memoized partial data.
                let { headers, status, statusText, url } = partialFromXhr();
                // The body will be read out if present.
                /** @type {?} */
                let body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                /** @type {?} */
                let ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    /** @type {?} */
                    const originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = (/** @type {?} */ ({ error, text: body }));
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body,
                        headers,
                        status,
                        statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers,
                        status,
                        statusText,
                        url: url || undefined,
                    }));
                }
            });
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            /** @type {?} */
            const onError = (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                const { url } = partialFromXhr();
                /** @type {?} */
                const res = new HttpErrorResponse({
                    error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                    url: url || undefined,
                });
                observer.error(res);
            });
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            /** @type {?} */
            let sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            /** @type {?} */
            const onDownProgress = (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                /** @type {?} */
                let progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            });
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            /** @type {?} */
            const onUpProgress = (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                // Upload progress events are simpler. Begin building the progress
                // event.
                /** @type {?} */
                let progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            });
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send((/** @type {?} */ (reqBody)));
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return (/**
             * @return {?}
             */
            () => {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                xhr.abort();
            });
        }));
    }
}
HttpXhrBackend.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
HttpXhrBackend.ctorParameters = () => [
    { type: XhrFactory }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_COOKIE_NAME');
/** @type {?} */
const XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * \@publicApi
 * @abstract
 */
class HttpXsrfTokenExtractor {
}
if (false) {}
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
class HttpXsrfCookieExtractor {
    /**
     * @param {?} doc
     * @param {?} platform
     * @param {?} cookieName
     */
    constructor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * \@internal for testing
         */
        this.parseCount = 0;
    }
    /**
     * @return {?}
     */
    getToken() {
        if (this.platform === 'server') {
            return null;
        }
        /** @type {?} */
        const cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    }
}
HttpXsrfCookieExtractor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
HttpXsrfCookieExtractor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_COOKIE_NAME,] }] }
];
if (false) {}
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
class HttpXsrfInterceptor {
    /**
     * @param {?} tokenService
     * @param {?} headerName
     */
    constructor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        /** @type {?} */
        const lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        /** @type {?} */
        const token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    }
}
HttpXsrfInterceptor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
HttpXsrfInterceptor.ctorParameters = () => [
    { type: HttpXsrfTokenExtractor },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [XSRF_HEADER_NAME,] }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
class HttpInterceptingHandler {
    /**
     * @param {?} backend
     * @param {?} injector
     */
    constructor(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    handle(req) {
        if (this.chain === null) {
            /** @type {?} */
            const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight((/**
             * @param {?} next
             * @param {?} interceptor
             * @return {?}
             */
            (next, interceptor) => new HttpInterceptorHandler(next, interceptor)), this.backend);
        }
        return this.chain.handle(req);
    }
}
HttpInterceptingHandler.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
HttpInterceptingHandler.ctorParameters = () => [
    { type: HttpBackend },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
if (false) {}
/**
 * Constructs an `HttpHandler` that applies interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * Use as a factory function within `HttpClientModule`.
 *
 *
 * @param {?} backend
 * @param {?=} interceptors
 * @return {?}
 */
function interceptingHandler(backend, interceptors = []) {
    if (!interceptors) {
        return backend;
    }
    return interceptors.reduceRight((/**
     * @param {?} next
     * @param {?} interceptor
     * @return {?}
     */
    (next, interceptor) => new HttpInterceptorHandler(next, interceptor)), backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 * @return {?}
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * \@publicApi
 */
class HttpClientXsrfModule {
    /**
     * Disable the default XSRF protection.
     * @return {?}
     */
    static disable() {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    }
    /**
     * Configure XSRF protection.
     * @param {?=} options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     * @return {?}
     */
    static withOptions(options = {}) {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    }
}
HttpClientXsrfModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                providers: [
                    HttpXsrfInterceptor,
                    { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                    { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                    { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                    { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                ],
            },] }
];
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * \@publicApi
 */
class HttpClientModule {
}
HttpClientModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                /**
                 * Optional configuration for XSRF protection.
                 */
                imports: [
                    HttpClientXsrfModule.withOptions({
                        cookieName: 'XSRF-TOKEN',
                        headerName: 'X-XSRF-TOKEN',
                    }),
                ],
                /**
                 * Configures the [dependency injector](guide/glossary#injector) where it is imported
                 * with supporting services for HTTP communications.
                 */
                providers: [
                    HttpClient,
                    { provide: HttpHandler, useClass: HttpInterceptingHandler },
                    HttpXhrBackend,
                    { provide: HttpBackend, useExisting: HttpXhrBackend },
                    BrowserXhr,
                    { provide: XhrFactory, useExisting: BrowserXhr },
                ],
            },] }
];
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * \@publicApi
 */
class HttpClientJsonpModule {
}
HttpClientJsonpModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                providers: [
                    JsonpClientBackend,
                    { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm2015/button.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/button.js ***!
  \**********************************************************/
/*! exports provided: MatButtonModule, MatButton, MatAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonModule", function() { return MatButtonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButton", function() { return MatButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAnchor", function() { return MatAnchor; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default color palette for round buttons (mat-fab and mat-mini-fab)
 * @type {?}
 */
const DEFAULT_ROUND_BUTTON_COLOR = 'accent';
/**
 * List of classes to add to MatButton instances based on host attributes to
 * style as different variants.
 * @type {?}
 */
const BUTTON_HOST_ATTRIBUTES = [
    'mat-button',
    'mat-flat-button',
    'mat-icon-button',
    'mat-raised-button',
    'mat-stroked-button',
    'mat-mini-fab',
    'mat-fab',
];
// Boilerplate for applying mixins to MatButton.
/**
 * \@docs-private
 */
class MatButtonBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
/** @type {?} */
const _MatButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatButtonBase)));
/**
 * Material design button.
 */
class MatButton extends _MatButtonMixinBase {
    /**
     * @param {?} elementRef
     * @param {?} _focusMonitor
     * @param {?} _animationMode
     */
    constructor(elementRef, _focusMonitor, _animationMode) {
        super(elementRef);
        this._focusMonitor = _focusMonitor;
        this._animationMode = _animationMode;
        /**
         * Whether the button is round.
         */
        this.isRoundButton = this._hasHostAttributes('mat-fab', 'mat-mini-fab');
        /**
         * Whether the button is icon button.
         */
        this.isIconButton = this._hasHostAttributes('mat-icon-button');
        // For each of the variant selectors that is present in the button's host
        // attributes, add the correct corresponding class.
        for (const attr of BUTTON_HOST_ATTRIBUTES) {
            if (this._hasHostAttributes(attr)) {
                ((/** @type {?} */ (this._getHostElement()))).classList.add(attr);
            }
        }
        // Add a class that applies to all buttons. This makes it easier to target if somebody
        // wants to target all Material buttons. We do it here rather than `host` to ensure that
        // the class is applied to derived classes.
        elementRef.nativeElement.classList.add('mat-button-base');
        this._focusMonitor.monitor(this._elementRef, true);
        if (this.isRoundButton) {
            this.color = DEFAULT_ROUND_BUTTON_COLOR;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /**
     * Focuses the button.
     * @param {?=} origin
     * @param {?=} options
     * @return {?}
     */
    focus(origin = 'program', options) {
        this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    }
    /**
     * @return {?}
     */
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    _isRippleDisabled() {
        return this.disableRipple || this.disabled;
    }
    /**
     * Gets whether the button has one of the given attributes.
     * @param {...?} attributes
     * @return {?}
     */
    _hasHostAttributes(...attributes) {
        return attributes.some((/**
         * @param {?} attribute
         * @return {?}
         */
        attribute => this._getHostElement().hasAttribute(attribute)));
    }
}
MatButton.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: `button[mat-button], button[mat-raised-button], button[mat-icon-button],
             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],
             button[mat-flat-button]`,
                exportAs: 'matButton',
                host: {
                    '[attr.disabled]': 'disabled || null',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                },
                template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div matRipple class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"isIconButton\" [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\"></div>",
                styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],
                inputs: ['disabled', 'disableRipple', 'color'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            },] },
];
/** @nocollapse */
MatButton.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"],] }] }
];
MatButton.propDecorators = {
    ripple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], { static: false },] }]
};
/**
 * Material design anchor button.
 */
class MatAnchor extends MatButton {
    /**
     * @param {?} focusMonitor
     * @param {?} elementRef
     * @param {?} animationMode
     */
    constructor(focusMonitor, elementRef, animationMode) {
        super(elementRef, focusMonitor, animationMode);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _haltDisabledEvents(event) {
        // A disabled button shouldn't apply any actions
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
}
MatAnchor.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: `a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],
             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]`,
                exportAs: 'matButton, matAnchor',
                host: {
                    // Note that we ignore the user-specified tabindex when it's disabled for
                    // consistency with the `mat-button` applied on native buttons where even
                    // though they have an index, they're not tabbable.
                    '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '(click)': '_haltDisabledEvents($event)',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                },
                inputs: ['disabled', 'disableRipple', 'color'],
                template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div matRipple class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"isIconButton\" [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\"></div>",
                styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            },] },
];
/** @nocollapse */
MatAnchor.ctorParameters = () => [
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"],] }] }
];
MatAnchor.propDecorators = {
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatButtonModule {
}
MatButtonModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                ],
                exports: [
                    MatButton,
                    MatAnchor,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
                ],
                declarations: [
                    MatButton,
                    MatAnchor,
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=button.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm2015/core.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/core.js ***!
  \********************************************************/
/*! exports provided: VERSION, AnimationCurves, AnimationDurations, MatCommonModule, MATERIAL_SANITY_CHECKS, mixinDisabled, mixinColor, mixinDisableRipple, mixinTabIndex, mixinErrorState, mixinInitialized, NativeDateModule, MatNativeDateModule, MAT_DATE_LOCALE_FACTORY, MAT_DATE_LOCALE, MAT_DATE_LOCALE_PROVIDER, DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter, MAT_NATIVE_DATE_FORMATS, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher, MAT_HAMMER_OPTIONS, GestureConfig, setLines, MatLine, MatLineSetter, MatLineModule, MatOptionModule, _countGroupLabelsBeforeOption, _getOptionScrollPosition, MatOptionSelectionChange, MAT_OPTION_PARENT_COMPONENT, MatOption, MatOptgroup, MAT_LABEL_GLOBAL_OPTIONS, MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple, RippleState, RippleRef, defaultRippleAnimationConfig, RippleRenderer, MatPseudoCheckboxModule, MatPseudoCheckbox, JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC, ɵa1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationCurves", function() { return AnimationCurves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationDurations", function() { return AnimationDurations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCommonModule", function() { return MatCommonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function() { return MATERIAL_SANITY_CHECKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinDisabled", function() { return mixinDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinColor", function() { return mixinColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function() { return mixinDisableRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function() { return mixinTabIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinErrorState", function() { return mixinErrorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinInitialized", function() { return mixinInitialized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeDateModule", function() { return NativeDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function() { return MatNativeDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function() { return MAT_DATE_LOCALE_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function() { return MAT_DATE_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_PROVIDER", function() { return MAT_DATE_LOCALE_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAdapter", function() { return DateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function() { return MAT_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function() { return NativeDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function() { return MAT_NATIVE_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function() { return ShowOnDirtyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function() { return ErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_HAMMER_OPTIONS", function() { return MAT_HAMMER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestureConfig", function() { return GestureConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLines", function() { return setLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLine", function() { return MatLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLineSetter", function() { return MatLineSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLineModule", function() { return MatLineModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptionModule", function() { return MatOptionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function() { return _countGroupLabelsBeforeOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function() { return _getOptionScrollPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function() { return MatOptionSelectionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function() { return MAT_OPTION_PARENT_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOption", function() { return MatOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptgroup", function() { return MatOptgroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_LABEL_GLOBAL_OPTIONS", function() { return MAT_LABEL_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRippleModule", function() { return MatRippleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function() { return MAT_RIPPLE_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRipple", function() { return MatRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleState", function() { return RippleState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleRef", function() { return RippleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function() { return defaultRippleAnimationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleRenderer", function() { return RippleRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function() { return MatPseudoCheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function() { return MatPseudoCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JAN", function() { return JAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEB", function() { return FEB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAR", function() { return MAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APR", function() { return APR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAY", function() { return MAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JUN", function() { return JUN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JUL", function() { return JUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUG", function() { return AUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEP", function() { return SEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCT", function() { return OCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOV", function() { return NOV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEC", function() { return DEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa1", function() { return MATERIAL_SANITY_CHECKS_FACTORY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk */ "./node_modules/@angular/cdk/esm2015/cdk.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Current version of Angular Material.
 * @type {?}
 */
const VERSION$1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * \@docs-private
 */
class AnimationCurves {
}
AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
/**
 * \@docs-private
 */
class AnimationDurations {
}
AnimationDurations.COMPLEX = '375ms';
AnimationDurations.ENTERING = '225ms';
AnimationDurations.EXITING = '195ms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Private version constant to circumvent test/build issues,
// i.e. avoid core to depend on the @angular/material primary entry-point
// Can be removed once the Material primary entry-point no longer
// re-exports all secondary entry-points
/** @type {?} */
const VERSION$2 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');
/**
 * \@docs-private
 * @return {?}
 */
function MATERIAL_SANITY_CHECKS_FACTORY() {
    return true;
}
/**
 * Injection token that configures whether the Material sanity checks are enabled.
 * @type {?}
 */
const MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-sanity-checks', {
    providedIn: 'root',
    factory: MATERIAL_SANITY_CHECKS_FACTORY,
});
/**
 * Module that captures anything that should be loaded and/or run for *all* Angular Material
 * components. This includes Bidi, etc.
 *
 * This module should be imported to each top-level component module (e.g., MatTabsModule).
 */
class MatCommonModule {
    /**
     * @param {?} _sanityChecksEnabled
     * @param {?=} _hammerLoader
     */
    constructor(_sanityChecksEnabled, _hammerLoader) {
        this._sanityChecksEnabled = _sanityChecksEnabled;
        this._hammerLoader = _hammerLoader;
        /**
         * Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype).
         */
        this._hasDoneGlobalChecks = false;
        /**
         * Whether we've already checked for HammerJs availability.
         */
        this._hasCheckedHammer = false;
        /**
         * Reference to the global `document` object.
         */
        this._document = typeof document === 'object' && document ? document : null;
        /**
         * Reference to the global 'window' object.
         */
        this._window = typeof window === 'object' && window ? window : null;
        if (this._areChecksEnabled() && !this._hasDoneGlobalChecks) {
            this._checkDoctypeIsDefined();
            this._checkThemeIsPresent();
            this._checkCdkVersionMatch();
            this._hasDoneGlobalChecks = true;
        }
    }
    /**
     * Whether any sanity checks are enabled
     * @private
     * @return {?}
     */
    _areChecksEnabled() {
        return this._sanityChecksEnabled && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !this._isTestEnv();
    }
    /**
     * Whether the code is running in tests.
     * @private
     * @return {?}
     */
    _isTestEnv() {
        /** @type {?} */
        const window = (/** @type {?} */ (this._window));
        return window && (window.__karma__ || window.jasmine);
    }
    /**
     * @private
     * @return {?}
     */
    _checkDoctypeIsDefined() {
        if (this._document && !this._document.doctype) {
            console.warn('Current document does not have a doctype. This may cause ' +
                'some Angular Material components not to behave as expected.');
        }
    }
    /**
     * @private
     * @return {?}
     */
    _checkThemeIsPresent() {
        // We need to assert that the `body` is defined, because these checks run very early
        // and the `body` won't be defined if the consumer put their scripts in the `head`.
        if (!this._document || !this._document.body || typeof getComputedStyle !== 'function') {
            return;
        }
        /** @type {?} */
        const testElement = this._document.createElement('div');
        testElement.classList.add('mat-theme-loaded-marker');
        this._document.body.appendChild(testElement);
        /** @type {?} */
        const computedStyle = getComputedStyle(testElement);
        // In some situations the computed style of the test element can be null. For example in
        // Firefox, the computed style is null if an application is running inside of a hidden iframe.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        if (computedStyle && computedStyle.display !== 'none') {
            console.warn('Could not find Angular Material core theme. Most Material ' +
                'components may not work as expected. For more info refer ' +
                'to the theming guide: https://material.angular.io/guide/theming');
        }
        this._document.body.removeChild(testElement);
    }
    /**
     * Checks whether the material version matches the cdk version
     * @private
     * @return {?}
     */
    _checkCdkVersionMatch() {
        if (VERSION$2.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full) {
            console.warn('The Angular Material version (' + VERSION$2.full + ') does not match ' +
                'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full + ').\n' +
                'Please ensure the versions of these two packages exactly match.');
        }
    }
    /**
     * Checks whether HammerJS is available.
     * @return {?}
     */
    _checkHammerIsAvailable() {
        if (this._hasCheckedHammer || !this._window) {
            return;
        }
        if (this._areChecksEnabled() && !((/** @type {?} */ (this._window)))['Hammer'] && !this._hammerLoader) {
            console.warn('Could not find HammerJS. Certain Angular Material components may not work correctly.');
        }
        this._hasCheckedHammer = true;
    }
}
MatCommonModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
                exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
            },] },
];
/** @nocollapse */
MatCommonModule.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MATERIAL_SANITY_CHECKS,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_LOADER"],] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin to augment a directive with a `disabled` property.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinDisabled(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._disabled = false;
        }
        /**
         * @return {?}
         */
        get disabled() { return this._disabled; }
        /**
         * @param {?} value
         * @return {?}
         */
        set disabled(value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin to augment a directive with a `color` property.
 * @template T
 * @param {?} base
 * @param {?=} defaultColor
 * @return {?}
 */
function mixinColor(base, defaultColor) {
    return class extends base {
        /**
         * @return {?}
         */
        get color() { return this._color; }
        /**
         * @param {?} value
         * @return {?}
         */
        set color(value) {
            /** @type {?} */
            const colorPalette = value || defaultColor;
            if (colorPalette !== this._color) {
                if (this._color) {
                    this._elementRef.nativeElement.classList.remove(`mat-${this._color}`);
                }
                if (colorPalette) {
                    this._elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
                }
                this._color = colorPalette;
            }
        }
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            // Set the default color that can be specified from the mixin.
            this.color = defaultColor;
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin to augment a directive with a `disableRipple` property.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinDisableRipple(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._disableRipple = false;
        }
        /**
         * Whether the ripple effect is disabled or not.
         * @return {?}
         */
        get disableRipple() { return this._disableRipple; }
        /**
         * @param {?} value
         * @return {?}
         */
        set disableRipple(value) { this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin to augment a directive with a `tabIndex` property.
 * @template T
 * @param {?} base
 * @param {?=} defaultTabIndex
 * @return {?}
 */
function mixinTabIndex(base, defaultTabIndex = 0) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            this._tabIndex = defaultTabIndex;
        }
        /**
         * @return {?}
         */
        get tabIndex() { return this.disabled ? -1 : this._tabIndex; }
        /**
         * @param {?} value
         * @return {?}
         */
        set tabIndex(value) {
            // If the specified tabIndex value is null or undefined, fall back to the default value.
            this._tabIndex = value != null ? value : defaultTabIndex;
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin to augment a directive with updateErrorState method.
 * For component with `errorState` and need to update `errorState`.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinErrorState(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            /**
             * Whether the component is in an error state.
             */
            this.errorState = false;
            /**
             * Stream that emits whenever the state of the input changes such that the wrapping
             * `MatFormField` needs to run change detection.
             */
            this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        }
        /**
         * @return {?}
         */
        updateErrorState() {
            /** @type {?} */
            const oldState = this.errorState;
            /** @type {?} */
            const parent = this._parentFormGroup || this._parentForm;
            /** @type {?} */
            const matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
            /** @type {?} */
            const control = this.ngControl ? (/** @type {?} */ (this.ngControl.control)) : null;
            /** @type {?} */
            const newState = matcher.isErrorState(control, parent);
            if (newState !== oldState) {
                this.errorState = newState;
                this.stateChanges.next();
            }
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Mixin to augment a directive with an initialized property that will emits when ngOnInit ends.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinInitialized(base) {
    return class extends base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
            /**
             * Whether this directive has been marked as initialized.
             */
            this._isInitialized = false;
            /**
             * List of subscribers that subscribed before the directive was initialized. Should be notified
             * during _markInitialized. Set to null after pending subscribers are notified, and should
             * not expect to be populated after.
             */
            this._pendingSubscribers = [];
            /**
             * Observable stream that emits when the directive initializes. If already initialized, the
             * subscriber is stored to be notified once _markInitialized is called.
             */
            this.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]((/**
             * @param {?} subscriber
             * @return {?}
             */
            subscriber => {
                // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
                // when _markInitialized is called.
                if (this._isInitialized) {
                    this._notifySubscriber(subscriber);
                }
                else {
                    (/** @type {?} */ (this._pendingSubscribers)).push(subscriber);
                }
            }));
        }
        /**
         * Marks the state as initialized and notifies pending subscribers. Should be called at the end
         * of ngOnInit.
         * \@docs-private
         * @return {?}
         */
        _markInitialized() {
            if (this._isInitialized) {
                throw Error('This directive has already been marked as initialized and ' +
                    'should not be called twice.');
            }
            this._isInitialized = true;
            (/** @type {?} */ (this._pendingSubscribers)).forEach(this._notifySubscriber);
            this._pendingSubscribers = null;
        }
        /**
         * Emits and completes the subscriber stream (should only emit once).
         * @param {?} subscriber
         * @return {?}
         */
        _notifySubscriber(subscriber) {
            subscriber.next();
            subscriber.complete();
        }
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * InjectionToken for datepicker that can be used to override default locale code.
 * @type {?}
 */
const MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_DATE_LOCALE', {
    providedIn: 'root',
    factory: MAT_DATE_LOCALE_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_DATE_LOCALE_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]);
}
/**
 * No longer needed since MAT_DATE_LOCALE has been changed to a scoped injectable.
 * If you are importing and providing this in your code you can simply remove it.
 * @deprecated
 * \@breaking-change 8.0.0
 * @type {?}
 */
const MAT_DATE_LOCALE_PROVIDER = { provide: MAT_DATE_LOCALE, useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"] };
/**
 * Adapts type `D` to be usable as a date by cdk-based components that work with dates.
 * @abstract
 * @template D
 */
class DateAdapter {
    constructor() {
        this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    /**
     * A stream that emits when the locale changes.
     * @return {?}
     */
    get localeChanges() { return this._localeChanges; }
    /**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of its `\@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     * @param {?} value The value to be deserialized into a date object.
     * @return {?} The deserialized date object, either a valid date, null if the value can be
     *     deserialized into a null date (e.g. the empty string), or an invalid date.
     */
    deserialize(value) {
        if (value == null || this.isDateInstance(value) && this.isValid(value)) {
            return value;
        }
        return this.invalid();
    }
    /**
     * Sets the locale used for all dates.
     * @param {?} locale The new locale.
     * @return {?}
     */
    setLocale(locale) {
        this.locale = locale;
        this._localeChanges.next();
    }
    /**
     * Compares two dates.
     * @param {?} first The first date to compare.
     * @param {?} second The second date to compare.
     * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    compareDate(first, second) {
        return this.getYear(first) - this.getYear(second) ||
            this.getMonth(first) - this.getMonth(second) ||
            this.getDate(first) - this.getDate(second);
    }
    /**
     * Checks if two dates are equal.
     * @param {?} first The first date to check.
     * @param {?} second The second date to check.
     * @return {?} Whether the two dates are equal.
     *     Null dates are considered equal to other null dates.
     */
    sameDate(first, second) {
        if (first && second) {
            /** @type {?} */
            let firstValid = this.isValid(first);
            /** @type {?} */
            let secondValid = this.isValid(second);
            if (firstValid && secondValid) {
                return !this.compareDate(first, second);
            }
            return firstValid == secondValid;
        }
        return first == second;
    }
    /**
     * Clamp the given date between min and max dates.
     * @param {?} date The date to clamp.
     * @param {?=} min The minimum value to allow. If null or omitted no min is enforced.
     * @param {?=} max The maximum value to allow. If null or omitted no max is enforced.
     * @return {?} `min` if `date` is less than `min`, `max` if date is greater than `max`,
     *     otherwise `date`.
     */
    clampDate(date, min, max) {
        if (min && this.compareDate(date, min) < 0) {
            return min;
        }
        if (max && this.compareDate(date, max) > 0) {
            return max;
        }
        return date;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-date-formats');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO(mmalerba): Remove when we no longer support safari 9.
/**
 * Whether the browser supports the Intl API.
 * @type {?}
 */
let SUPPORTS_INTL_API;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    SUPPORTS_INTL_API = typeof Intl != 'undefined';
}
catch (_a) {
    SUPPORTS_INTL_API = false;
}
/**
 * The default month names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_MONTH_NAMES = {
    'long': [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ],
    'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
};
const ɵ0 = /**
 * @param {?} i
 * @return {?}
 */
i => String(i + 1);
/**
 * The default date names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_DATE_NAMES = range(31, (ɵ0));
/**
 * The default day of the week names to use if Intl API is not available.
 * @type {?}
 */
const DEFAULT_DAY_OF_WEEK_NAMES = {
    'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
/**
 * Matches strings that have the form of a valid RFC 3339 string
 * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
 * because the regex will match strings an with out of bounds month, date, etc.
 * @type {?}
 */
const ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/**
 * Creates an array and fills it with values.
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    /** @type {?} */
    const valuesArray = Array(length);
    for (let i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
/**
 * Adapts the native JS Date for use with cdk-based components that work with dates.
 */
class NativeDateAdapter extends DateAdapter {
    /**
     * @param {?} matDateLocale
     * @param {?} platform
     */
    constructor(matDateLocale, platform) {
        super();
        /**
         * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
         * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
         * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
         * will produce `'8/13/1800'`.
         *
         * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
         * getting the string representation of a Date object from its utc representation. We're keeping
         * it here for sometime, just for precaution, in case we decide to revert some of these changes
         * though.
         */
        this.useUtcForDisplay = true;
        super.setLocale(matDateLocale);
        // IE does its own time zone correction, so we disable this on IE.
        this.useUtcForDisplay = !platform.TRIDENT;
        this._clampDate = platform.TRIDENT || platform.EDGE;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getYear(date) {
        return date.getFullYear();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getMonth(date) {
        return date.getMonth();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDate(date) {
        return date.getDate();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDayOfWeek(date) {
        return date.getDay();
    }
    /**
     * @param {?} style
     * @return {?}
     */
    getMonthNames(style) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { month: style, timeZone: 'utc' });
            return range(12, (/**
             * @param {?} i
             * @return {?}
             */
            i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, i, 1)))));
        }
        return DEFAULT_MONTH_NAMES[style];
    }
    /**
     * @return {?}
     */
    getDateNames() {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { day: 'numeric', timeZone: 'utc' });
            return range(31, (/**
             * @param {?} i
             * @return {?}
             */
            i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1)))));
        }
        return DEFAULT_DATE_NAMES;
    }
    /**
     * @param {?} style
     * @return {?}
     */
    getDayOfWeekNames(style) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { weekday: style, timeZone: 'utc' });
            return range(7, (/**
             * @param {?} i
             * @return {?}
             */
            i => this._stripDirectionalityCharacters(this._format(dtf, new Date(2017, 0, i + 1)))));
        }
        return DEFAULT_DAY_OF_WEEK_NAMES[style];
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getYearName(date) {
        if (SUPPORTS_INTL_API) {
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, { year: 'numeric', timeZone: 'utc' });
            return this._stripDirectionalityCharacters(this._format(dtf, date));
        }
        return String(this.getYear(date));
    }
    /**
     * @return {?}
     */
    getFirstDayOfWeek() {
        // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
        return 0;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getNumDaysInMonth(date) {
        return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    clone(date) {
        return new Date(date.getTime());
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    createDate(year, month, date) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11) {
            throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
        }
        if (date < 1) {
            throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
        }
        /** @type {?} */
        let result = this._createDateWithOverflow(year, month, date);
        // Check that the date wasn't above the upper bound for the month, causing the month to overflow
        if (result.getMonth() != month) {
            throw Error(`Invalid date "${date}" for month with index "${month}".`);
        }
        return result;
    }
    /**
     * @return {?}
     */
    today() {
        return new Date();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    parse(value) {
        // We have no way using the native JS Date to set the parse format or locale, so we ignore these
        // parameters.
        if (typeof value == 'number') {
            return new Date(value);
        }
        return value ? new Date(Date.parse(value)) : null;
    }
    /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    format(date, displayFormat) {
        if (!this.isValid(date)) {
            throw Error('NativeDateAdapter: Cannot format invalid date.');
        }
        if (SUPPORTS_INTL_API) {
            // On IE and Edge the i18n API will throw a hard error that can crash the entire app
            // if we attempt to format a date whose year is less than 1 or greater than 9999.
            if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
                date = this.clone(date);
                date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
            }
            displayFormat = Object.assign({}, displayFormat, { timeZone: 'utc' });
            /** @type {?} */
            const dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this._stripDirectionalityCharacters(this._format(dtf, date));
        }
        return this._stripDirectionalityCharacters(date.toDateString());
    }
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    addCalendarYears(date, years) {
        return this.addCalendarMonths(date, years * 12);
    }
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    addCalendarMonths(date, months) {
        /** @type {?} */
        let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
        // It's possible to wind up in the wrong month if the original month has more days than the new
        // month. In this case we want to go to the last day of the desired month.
        // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
        // guarantee this.
        if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
        }
        return newDate;
    }
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    addCalendarDays(date, days) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    toIso8601(date) {
        return [
            date.getUTCFullYear(),
            this._2digit(date.getUTCMonth() + 1),
            this._2digit(date.getUTCDate())
        ].join('-');
    }
    /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    deserialize(value) {
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
            // string is the right format first.
            if (ISO_8601_REGEX.test(value)) {
                /** @type {?} */
                let date = new Date(value);
                if (this.isValid(date)) {
                    return date;
                }
            }
        }
        return super.deserialize(value);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    isDateInstance(obj) {
        return obj instanceof Date;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isValid(date) {
        return !isNaN(date.getTime());
    }
    /**
     * @return {?}
     */
    invalid() {
        return new Date(NaN);
    }
    /**
     * Creates a date but allows the month and date to overflow.
     * @private
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    _createDateWithOverflow(year, month, date) {
        /** @type {?} */
        const result = new Date(year, month, date);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
        }
        return result;
    }
    /**
     * Pads a number to make it two digits.
     * @private
     * @param {?} n The number to pad.
     * @return {?} The padded number.
     */
    _2digit(n) {
        return ('00' + n).slice(-2);
    }
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @private
     * @param {?} str The string to strip direction characters from.
     * @return {?} The stripped string.
     */
    _stripDirectionalityCharacters(str) {
        return str.replace(/[\u200e\u200f]/g, '');
    }
    /**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     * @private
     * @param {?} dtf Intl.DateTimeFormat object, containg the desired string format. It must have
     *    timeZone set to 'utc' to work fine.
     * @param {?} date Date from which we want to get the string representation according to dtf
     * @return {?} A Date object with its UTC representation based on the passed in date info
     */
    _format(dtf, date) {
        /** @type {?} */
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
        return dtf.format(d);
    }
}
NativeDateAdapter.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
NativeDateAdapter.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_DATE_LOCALE,] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */
const MAT_NATIVE_DATE_FORMATS = {
    parse: {
        dateInput: null,
    },
    display: {
        dateInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NativeDateModule {
}
NativeDateModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]],
                providers: [
                    { provide: DateAdapter, useClass: NativeDateAdapter },
                ],
            },] },
];
const ɵ0$1 = MAT_NATIVE_DATE_FORMATS;
class MatNativeDateModule {
}
MatNativeDateModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [NativeDateModule],
                providers: [{ provide: MAT_DATE_FORMATS, useValue: ɵ0$1 }],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Error state matcher that matches when a control is invalid and dirty.
 */
class ShowOnDirtyErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        return !!(control && control.invalid && (control.dirty || (form && form.submitted)));
    }
}
ShowOnDirtyErrorStateMatcher.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * Provider that defines how form controls behave with regards to displaying error messages.
 */
class ErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        return !!(control && control.invalid && (control.touched || (form && form.submitted)));
    }
}
ErrorStateMatcher.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */ ErrorStateMatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ErrorStateMatcher_Factory() { return new ErrorStateMatcher(); }, token: ErrorStateMatcher, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to provide options to the Hammerjs instance.
 * More info at http://hammerjs.github.io/api/.
 * @type {?}
 */
const MAT_HAMMER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_HAMMER_OPTIONS');
/** @type {?} */
const ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES = [
    'longpress',
    'slide',
    'slidestart',
    'slideend',
    'slideright',
    'slideleft'
];
const ɵ0$2 = /**
 * @return {?}
 */
() => { }, ɵ1 = /**
 * @return {?}
 */
() => { };
/**
 * Fake HammerInstance that is used when a Hammer instance is requested when HammerJS has not
 * been loaded on the page.
 * @type {?}
 */
const noopHammerInstance = {
    on: (ɵ0$2),
    off: (ɵ1),
};
/**
 * Adjusts configuration of our gesture library, Hammer.
 */
class GestureConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"] {
    /**
     * @param {?=} _hammerOptions
     * @param {?=} commonModule
     */
    constructor(_hammerOptions, commonModule) {
        super();
        this._hammerOptions = _hammerOptions;
        /**
         * List of new event names to add to the gesture support list
         */
        this.events = ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES;
        if (commonModule) {
            commonModule._checkHammerIsAvailable();
        }
    }
    /**
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
     *
     * Our gesture names come from the Material Design gestures spec:
     * https://material.io/design/#gestures-touch-mechanics
     *
     * More information on default recognizers can be found in Hammer docs:
     * http://hammerjs.github.io/recognizer-pan/
     * http://hammerjs.github.io/recognizer-press/
     *
     * @param {?} element Element to which to assign the new HammerJS gestures.
     * @return {?} Newly-created HammerJS instance.
     */
    buildHammer(element) {
        /** @type {?} */
        const hammer = typeof window !== 'undefined' ? ((/** @type {?} */ (window))).Hammer : null;
        if (!hammer) {
            // If HammerJS is not loaded here, return the noop HammerInstance. This is necessary to
            // ensure that omitting HammerJS completely will not cause any errors while *also* supporting
            // the lazy-loading of HammerJS via the HAMMER_LOADER token introduced in Angular 6.1.
            // Because we can't depend on HAMMER_LOADER's existance until 7.0, we have to always set
            // `this.events` to the set we support, instead of conditionally setting it to `[]` if
            // `HAMMER_LOADER` is present (and then throwing an Error here if `window.Hammer` is
            // undefined).
            // @breaking-change 8.0.0
            return noopHammerInstance;
        }
        /** @type {?} */
        const mc = new hammer(element, this._hammerOptions || undefined);
        // Default Hammer Recognizers.
        /** @type {?} */
        const pan = new hammer.Pan();
        /** @type {?} */
        const swipe = new hammer.Swipe();
        /** @type {?} */
        const press = new hammer.Press();
        // Notice that a HammerJS recognizer can only depend on one other recognizer once.
        // Otherwise the previous `recognizeWith` will be dropped.
        // TODO: Confirm threshold numbers with Material Design UX Team
        /** @type {?} */
        const slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
        /** @type {?} */
        const longpress = this._createRecognizer(press, { event: 'longpress', time: 500 });
        // Overwrite the default `pan` event to use the swipe event.
        pan.recognizeWith(swipe);
        // Since the slide event threshold is set to zero, the slide recognizer can fire and
        // accidentally reset the longpress recognizer. In order to make sure that the two
        // recognizers can run simultaneously but don't affect each other, we allow the slide
        // recognizer to recognize while a longpress is being processed.
        // See: https://github.com/hammerjs/hammer.js/blob/master/src/manager.js#L123-L124
        longpress.recognizeWith(slide);
        // Add customized gestures to Hammer manager
        mc.add([swipe, press, pan, slide, longpress]);
        return (/** @type {?} */ (mc));
    }
    /**
     * Creates a new recognizer, without affecting the default recognizers of HammerJS
     * @private
     * @param {?} base
     * @param {?} options
     * @param {...?} inheritances
     * @return {?}
     */
    _createRecognizer(base, options, ...inheritances) {
        /** @type {?} */
        let recognizer = new ((/** @type {?} */ (base.constructor)))(options);
        inheritances.push(base);
        inheritances.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => recognizer.recognizeWith(item)));
        return recognizer;
    }
}
GestureConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
GestureConfig.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_HAMMER_OPTIONS,] }] },
    { type: MatCommonModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a \@ContentChildren(MatLine) query, then
 * counted by checking the query list's length.
 */
class MatLine {
}
MatLine.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mat-line], [matLine]',
                host: { 'class': 'mat-line' }
            },] },
];
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * \@docs-private
 * @param {?} lines
 * @param {?} element
 * @return {?}
 */
function setLines(lines, element) {
    // Note: doesn't need to unsubscribe, because `changes`
    // gets completed by Angular when the view is destroyed.
    lines.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(lines)).subscribe((/**
     * @param {?} __0
     * @return {?}
     */
    ({ length }) => {
        setClass(element, 'mat-2-line', false);
        setClass(element, 'mat-3-line', false);
        setClass(element, 'mat-multi-line', false);
        if (length === 2 || length === 3) {
            setClass(element, `mat-${length}-line`, true);
        }
        else if (length > 3) {
            setClass(element, `mat-multi-line`, true);
        }
    }));
}
/**
 * Adds or removes a class from an element.
 * @param {?} element
 * @param {?} className
 * @param {?} isAdd
 * @return {?}
 */
function setClass(element, className, isAdd) {
    /** @type {?} */
    const classList = element.nativeElement.classList;
    isAdd ? classList.add(className) : classList.remove(className);
}
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * \@docs-private
 * @deprecated Use `setLines` instead.
 * \@breaking-change 8.0.0
 */
class MatLineSetter {
    /**
     * @param {?} lines
     * @param {?} element
     */
    constructor(lines, element) {
        setLines(lines, element);
    }
}
class MatLineModule {
}
MatLineModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [MatCommonModule],
                exports: [MatLine, MatCommonModule],
                declarations: [MatLine],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {number} */
const RippleState = {
    FADING_IN: 0, VISIBLE: 1, FADING_OUT: 2, HIDDEN: 3,
};
RippleState[RippleState.FADING_IN] = 'FADING_IN';
RippleState[RippleState.VISIBLE] = 'VISIBLE';
RippleState[RippleState.FADING_OUT] = 'FADING_OUT';
RippleState[RippleState.HIDDEN] = 'HIDDEN';
/**
 * Reference to a previously launched ripple element.
 */
class RippleRef {
    /**
     * @param {?} _renderer
     * @param {?} element
     * @param {?} config
     */
    constructor(_renderer, element, config) {
        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        /**
         * Current state of the ripple.
         */
        this.state = RippleState.HIDDEN;
    }
    /**
     * Fades out the ripple element.
     * @return {?}
     */
    fadeOut() {
        this._renderer.fadeOutRipple(this);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default ripple animation configuration for ripples without an explicit
 * animation config specified.
 * @type {?}
 */
const defaultRippleAnimationConfig = {
    enterDuration: 450,
    exitDuration: 400
};
/**
 * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
 * events to avoid synthetic mouse events.
 * @type {?}
 */
const ignoreMouseEventsTimeout = 800;
/**
 * Options that apply to all the event listeners that are bound by the ripple renderer.
 * @type {?}
 */
const passiveEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * \@docs-private
 */
class RippleRenderer {
    /**
     * @param {?} _target
     * @param {?} _ngZone
     * @param {?} elementOrElementRef
     * @param {?} platform
     */
    constructor(_target, _ngZone, elementOrElementRef, platform) {
        this._target = _target;
        this._ngZone = _ngZone;
        /**
         * Whether the pointer is currently down or not.
         */
        this._isPointerDown = false;
        /**
         * Events to be registered on the trigger element.
         */
        this._triggerEvents = new Map();
        /**
         * Set of currently active ripple references.
         */
        this._activeRipples = new Set();
        /**
         * Function being called whenever the trigger is being pressed using mouse.
         */
        this._onMousedown = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            // Screen readers will fire fake mouse events for space/enter. Skip launching a
            // ripple in this case for consistency with the non-screen-reader experience.
            /** @type {?} */
            const isFakeMousedown = Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["isFakeMousedownFromScreenReader"])(event);
            /** @type {?} */
            const isSyntheticEvent = this._lastTouchStartEvent &&
                Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
            if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
                this._isPointerDown = true;
                this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
            }
        });
        /**
         * Function being called whenever the trigger is being pressed using touch.
         */
        this._onTouchStart = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (!this._target.rippleDisabled) {
                // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
                // events will launch a second ripple if we don't ignore mouse events for a specific
                // time after a touchstart event.
                this._lastTouchStartEvent = Date.now();
                this._isPointerDown = true;
                // Use `changedTouches` so we skip any touches where the user put
                // their finger down, but used another finger to tap the element again.
                /** @type {?} */
                const touches = event.changedTouches;
                for (let i = 0; i < touches.length; i++) {
                    this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
                }
            }
        });
        /**
         * Function being called whenever the trigger is being released.
         */
        this._onPointerUp = (/**
         * @return {?}
         */
        () => {
            if (!this._isPointerDown) {
                return;
            }
            this._isPointerDown = false;
            // Fade-out all ripples that are visible and not persistent.
            this._activeRipples.forEach((/**
             * @param {?} ripple
             * @return {?}
             */
            ripple => {
                // By default, only ripples that are completely visible will fade out on pointer release.
                // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
                /** @type {?} */
                const isVisible = ripple.state === RippleState.VISIBLE ||
                    ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
                if (!ripple.config.persistent && isVisible) {
                    ripple.fadeOut();
                }
            }));
        });
        // Only do anything if we're on the browser.
        if (platform.isBrowser) {
            this._containerElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrElementRef);
            // Specify events which need to be registered on the trigger.
            this._triggerEvents
                .set('mousedown', this._onMousedown)
                .set('mouseup', this._onPointerUp)
                .set('mouseleave', this._onPointerUp)
                .set('touchstart', this._onTouchStart)
                .set('touchend', this._onPointerUp)
                .set('touchcancel', this._onPointerUp);
        }
    }
    /**
     * Fades in a ripple at the given coordinates.
     * @param {?} x Coordinate within the element, along the X axis at which to start the ripple.
     * @param {?} y Coordinate within the element, along the Y axis at which to start the ripple.
     * @param {?=} config Extra ripple options.
     * @return {?}
     */
    fadeInRipple(x, y, config = {}) {
        /** @type {?} */
        const containerRect = this._containerRect =
            this._containerRect || this._containerElement.getBoundingClientRect();
        /** @type {?} */
        const animationConfig = Object.assign({}, defaultRippleAnimationConfig, config.animation);
        if (config.centered) {
            x = containerRect.left + containerRect.width / 2;
            y = containerRect.top + containerRect.height / 2;
        }
        /** @type {?} */
        const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
        /** @type {?} */
        const offsetX = x - containerRect.left;
        /** @type {?} */
        const offsetY = y - containerRect.top;
        /** @type {?} */
        const duration = animationConfig.enterDuration;
        /** @type {?} */
        const ripple = document.createElement('div');
        ripple.classList.add('mat-ripple-element');
        ripple.style.left = `${offsetX - radius}px`;
        ripple.style.top = `${offsetY - radius}px`;
        ripple.style.height = `${radius * 2}px`;
        ripple.style.width = `${radius * 2}px`;
        // If the color is not set, the default CSS color will be used.
        ripple.style.backgroundColor = config.color || null;
        ripple.style.transitionDuration = `${duration}ms`;
        this._containerElement.appendChild(ripple);
        // By default the browser does not recalculate the styles of dynamically created
        // ripple elements. This is critical because then the `scale` would not animate properly.
        enforceStyleRecalculation(ripple);
        ripple.style.transform = 'scale(1)';
        // Exposed reference to the ripple that will be returned.
        /** @type {?} */
        const rippleRef = new RippleRef(this, ripple, config);
        rippleRef.state = RippleState.FADING_IN;
        // Add the ripple reference to the list of all active ripples.
        this._activeRipples.add(rippleRef);
        if (!config.persistent) {
            this._mostRecentTransientRipple = rippleRef;
        }
        // Wait for the ripple element to be completely faded in.
        // Once it's faded in, the ripple can be hidden immediately if the mouse is released.
        this._runTimeoutOutsideZone((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
            rippleRef.state = RippleState.VISIBLE;
            // When the timer runs out while the user has kept their pointer down, we want to
            // keep only the persistent ripples and the latest transient ripple. We do this,
            // because we don't want stacked transient ripples to appear after their enter
            // animation has finished.
            if (!config.persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
                rippleRef.fadeOut();
            }
        }), duration);
        return rippleRef;
    }
    /**
     * Fades out a ripple reference.
     * @param {?} rippleRef
     * @return {?}
     */
    fadeOutRipple(rippleRef) {
        /** @type {?} */
        const wasActive = this._activeRipples.delete(rippleRef);
        if (rippleRef === this._mostRecentTransientRipple) {
            this._mostRecentTransientRipple = null;
        }
        // Clear out the cached bounding rect if we have no more ripples.
        if (!this._activeRipples.size) {
            this._containerRect = null;
        }
        // For ripples that are not active anymore, don't re-run the fade-out animation.
        if (!wasActive) {
            return;
        }
        /** @type {?} */
        const rippleEl = rippleRef.element;
        /** @type {?} */
        const animationConfig = Object.assign({}, defaultRippleAnimationConfig, rippleRef.config.animation);
        rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
        rippleEl.style.opacity = '0';
        rippleRef.state = RippleState.FADING_OUT;
        // Once the ripple faded out, the ripple can be safely removed from the DOM.
        this._runTimeoutOutsideZone((/**
         * @return {?}
         */
        () => {
            rippleRef.state = RippleState.HIDDEN;
            (/** @type {?} */ (rippleEl.parentNode)).removeChild(rippleEl);
        }), animationConfig.exitDuration);
    }
    /**
     * Fades out all currently active ripples.
     * @return {?}
     */
    fadeOutAll() {
        this._activeRipples.forEach((/**
         * @param {?} ripple
         * @return {?}
         */
        ripple => ripple.fadeOut()));
    }
    /**
     * Sets up the trigger event listeners
     * @param {?} elementOrElementRef
     * @return {?}
     */
    setupTriggerEvents(elementOrElementRef) {
        /** @type {?} */
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrElementRef);
        if (!element || element === this._triggerElement) {
            return;
        }
        // Remove all previously registered event listeners from the trigger element.
        this._removeTriggerEvents();
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._triggerEvents.forEach((/**
             * @param {?} fn
             * @param {?} type
             * @return {?}
             */
            (fn, type) => {
                element.addEventListener(type, fn, passiveEventOptions);
            }));
        }));
        this._triggerElement = element;
    }
    /**
     * Runs a timeout outside of the Angular zone to avoid triggering the change detection.
     * @private
     * @param {?} fn
     * @param {?=} delay
     * @return {?}
     */
    _runTimeoutOutsideZone(fn, delay = 0) {
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout(fn, delay)));
    }
    /**
     * Removes previously registered event listeners from the trigger element.
     * @return {?}
     */
    _removeTriggerEvents() {
        if (this._triggerElement) {
            this._triggerEvents.forEach((/**
             * @param {?} fn
             * @param {?} type
             * @return {?}
             */
            (fn, type) => {
                (/** @type {?} */ (this._triggerElement)).removeEventListener(type, fn, passiveEventOptions);
            }));
        }
    }
}
/**
 * Enforces a style recalculation of a DOM element by computing its styles.
 * @param {?} element
 * @return {?}
 */
function enforceStyleRecalculation(element) {
    // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
    // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
    // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    window.getComputedStyle(element).getPropertyValue('opacity');
}
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 * @param {?} x
 * @param {?} y
 * @param {?} rect
 * @return {?}
 */
function distanceToFurthestCorner(x, y, rect) {
    /** @type {?} */
    const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    /** @type {?} */
    const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to specify the global ripple options.
 * @type {?}
 */
const MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-ripple-global-options');
class MatRipple {
    /**
     * @param {?} _elementRef
     * @param {?} ngZone
     * @param {?} platform
     * @param {?=} globalOptions
     * @param {?=} animationMode
     */
    constructor(_elementRef, ngZone, platform, globalOptions, animationMode) {
        this._elementRef = _elementRef;
        /**
         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
         * will be the distance from the center of the ripple to the furthest corner of the host element's
         * bounding rectangle.
         */
        this.radius = 0;
        this._disabled = false;
        /**
         * Whether ripple directive is initialized and the input bindings are set.
         */
        this._isInitialized = false;
        this._globalOptions = globalOptions || {};
        this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
        if (animationMode === 'NoopAnimations') {
            this._globalOptions.animation = { enterDuration: 0, exitDuration: 0 };
        }
    }
    /**
     * Whether click events will not trigger the ripple. Ripples can be still launched manually
     * by using the `launch()` method.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = value;
        this._setupTriggerEventsIfEnabled();
    }
    /**
     * The element that triggers the ripple when click events are received.
     * Defaults to the directive's host element.
     * @return {?}
     */
    get trigger() { return this._trigger || this._elementRef.nativeElement; }
    /**
     * @param {?} trigger
     * @return {?}
     */
    set trigger(trigger) {
        this._trigger = trigger;
        this._setupTriggerEventsIfEnabled();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._isInitialized = true;
        this._setupTriggerEventsIfEnabled();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
    }
    /**
     * Fades out all currently showing ripple elements.
     * @return {?}
     */
    fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
    }
    /**
     * Ripple configuration from the directive's input values.
     * \@docs-private Implemented as part of RippleTarget
     * @return {?}
     */
    get rippleConfig() {
        return {
            centered: this.centered,
            radius: this.radius,
            color: this.color,
            animation: Object.assign({}, this._globalOptions.animation, this.animation),
            terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
        };
    }
    /**
     * Whether ripples on pointer-down are disabled or not.
     * \@docs-private Implemented as part of RippleTarget
     * @return {?}
     */
    get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
    }
    /**
     * Sets up the trigger event listeners if ripples are enabled.
     * @private
     * @return {?}
     */
    _setupTriggerEventsIfEnabled() {
        if (!this.disabled && this._isInitialized) {
            this._rippleRenderer.setupTriggerEvents(this.trigger);
        }
    }
    /**
     * Launches a manual ripple at the specified coordinated or just by the ripple config.
     * @param {?} configOrX
     * @param {?=} y
     * @param {?=} config
     * @return {?}
     */
    launch(configOrX, y = 0, config) {
        if (typeof configOrX === 'number') {
            return this._rippleRenderer.fadeInRipple(configOrX, y, Object.assign({}, this.rippleConfig, config));
        }
        else {
            return this._rippleRenderer.fadeInRipple(0, 0, Object.assign({}, this.rippleConfig, configOrX));
        }
    }
}
MatRipple.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mat-ripple], [matRipple]',
                exportAs: 'matRipple',
                host: {
                    'class': 'mat-ripple',
                    '[class.mat-ripple-unbounded]': 'unbounded'
                }
            },] },
];
/** @nocollapse */
MatRipple.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_RIPPLE_GLOBAL_OPTIONS,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"],] }] }
];
MatRipple.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleColor',] }],
    unbounded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleUnbounded',] }],
    centered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleCentered',] }],
    radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleRadius',] }],
    animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleAnimation',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleDisabled',] }],
    trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleTrigger',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatRippleModule {
}
MatRippleModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]],
                exports: [MatRipple, MatCommonModule],
                declarations: [MatRipple],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 * Note that theming is meant to be handled by the parent element, e.g.
 * `mat-primary .mat-pseudo-checkbox`.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
 * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
 * of more complex components that appropriately handle selected / checked state.
 * \@docs-private
 */
class MatPseudoCheckbox {
    /**
     * @param {?=} _animationMode
     */
    constructor(_animationMode) {
        this._animationMode = _animationMode;
        /**
         * Display state of the checkbox.
         */
        this.state = 'unchecked';
        /**
         * Whether the checkbox is disabled.
         */
        this.disabled = false;
    }
}
MatPseudoCheckbox.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'mat-pseudo-checkbox',
                styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0,0,.2,.1),background-color 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}"],
                template: '',
                host: {
                    'class': 'mat-pseudo-checkbox',
                    '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
                    '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
                    '[class.mat-pseudo-checkbox-disabled]': 'disabled',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                },
            },] },
];
/** @nocollapse */
MatPseudoCheckbox.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"],] }] }
];
MatPseudoCheckbox.propDecorators = {
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatPseudoCheckboxModule {
}
MatPseudoCheckboxModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                exports: [MatPseudoCheckbox],
                declarations: [MatPseudoCheckbox]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Boilerplate for applying mixins to MatOptgroup.
/**
 * \@docs-private
 */
class MatOptgroupBase {
}
/** @type {?} */
const _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase);
// Counter for unique group ids.
/** @type {?} */
let _uniqueOptgroupIdCounter = 0;
/**
 * Component that is used to group instances of `mat-option`.
 */
class MatOptgroup extends _MatOptgroupMixinBase {
    constructor() {
        super(...arguments);
        /**
         * Unique id for the underlying label.
         */
        this._labelId = `mat-optgroup-label-${_uniqueOptgroupIdCounter++}`;
    }
}
MatOptgroup.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-optgroup',
                exportAs: 'matOptgroup',
                template: "<label class=\"mat-optgroup-label\" [id]=\"_labelId\">{{ label }}<ng-content></ng-content></label><ng-content select=\"mat-option, ng-container\"></ng-content>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                inputs: ['disabled'],
                styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"],
                host: {
                    'class': 'mat-optgroup',
                    'role': 'group',
                    '[class.mat-optgroup-disabled]': 'disabled',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-labelledby]': '_labelId',
                }
            },] },
];
MatOptgroup.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 * @type {?}
 */
let _uniqueIdCounter = 0;
/**
 * Event object emitted by MatOption when selected or deselected.
 */
class MatOptionSelectionChange {
    /**
     * @param {?} source
     * @param {?=} isUserInput
     */
    constructor(source, isUserInput = false) {
        this.source = source;
        this.isUserInput = isUserInput;
    }
}
/**
 * Injection token used to provide the parent component to options.
 * @type {?}
 */
const MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_OPTION_PARENT_COMPONENT');
/**
 * Single option inside of a `<mat-select>` element.
 */
class MatOption {
    /**
     * @param {?} _element
     * @param {?} _changeDetectorRef
     * @param {?} _parent
     * @param {?} group
     */
    constructor(_element, _changeDetectorRef, _parent, group) {
        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._parent = _parent;
        this.group = group;
        this._selected = false;
        this._active = false;
        this._disabled = false;
        this._mostRecentViewValue = '';
        /**
         * The unique ID of the option.
         */
        this.id = `mat-option-${_uniqueIdCounter++}`;
        /**
         * Event emitted when the option is selected or deselected.
         */
        // tslint:disable-next-line:no-output-on-prefix
        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the state of the option changes and any parents have to be notified.
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    /**
     * Whether the wrapping component is in multiple selection mode.
     * @return {?}
     */
    get multiple() { return this._parent && this._parent.multiple; }
    /**
     * Whether or not the option is currently selected.
     * @return {?}
     */
    get selected() { return this._selected; }
    /**
     * Whether the option is disabled.
     * @return {?}
     */
    get disabled() { return (this.group && this.group.disabled) || this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); }
    /**
     * Whether ripples for the option are disabled.
     * @return {?}
     */
    get disableRipple() { return this._parent && this._parent.disableRipple; }
    /**
     * Whether or not the option is currently active and ready to be selected.
     * An active option displays styles as if it is focused, but the
     * focus is actually retained somewhere else. This comes in handy
     * for components like autocomplete where focus must remain on the input.
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * The displayed value of the option. It is necessary to show the selected option in the
     * select's trigger.
     * @return {?}
     */
    get viewValue() {
        // TODO(kara): Add input property alternative for node envs.
        return (this._getHostElement().textContent || '').trim();
    }
    /**
     * Selects the option.
     * @return {?}
     */
    select() {
        if (!this._selected) {
            this._selected = true;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent();
        }
    }
    /**
     * Deselects the option.
     * @return {?}
     */
    deselect() {
        if (this._selected) {
            this._selected = false;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent();
        }
    }
    /**
     * Sets focus onto this option.
     * @param {?=} _origin
     * @param {?=} options
     * @return {?}
     */
    focus(_origin, options) {
        // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
        // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
        /** @type {?} */
        const element = this._getHostElement();
        if (typeof element.focus === 'function') {
            element.focus(options);
        }
    }
    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     * @return {?}
     */
    setActiveStyles() {
        if (!this._active) {
            this._active = true;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     * @return {?}
     */
    setInactiveStyles() {
        if (this._active) {
            this._active = false;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Gets the label to be used when determining whether the option should be focused.
     * @return {?}
     */
    getLabel() {
        return this.viewValue;
    }
    /**
     * Ensures the option is selected when activated from the keyboard.
     * @param {?} event
     * @return {?}
     */
    _handleKeydown(event) {
        if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]) && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
            this._selectViaInteraction();
            // Prevent the page from scrolling down and form submits.
            event.preventDefault();
        }
    }
    /**
     * `Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.`
     * @return {?}
     */
    _selectViaInteraction() {
        if (!this.disabled) {
            this._selected = this.multiple ? !this._selected : true;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent(true);
        }
    }
    /**
     * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
     * attribute from single-selection, unselected options. Including the `aria-selected="false"`
     * attributes adds a significant amount of noise to screen-reader users without providing useful
     * information.
     * @return {?}
     */
    _getAriaSelected() {
        return this.selected || (this.multiple ? false : null);
    }
    /**
     * Returns the correct tabindex for the option depending on disabled state.
     * @return {?}
     */
    _getTabIndex() {
        return this.disabled ? '-1' : '0';
    }
    /**
     * Gets the host DOM element.
     * @return {?}
     */
    _getHostElement() {
        return this._element.nativeElement;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        // Since parent components could be using the option's label to display the selected values
        // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
        // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
        // relatively cheap, however we still limit them only to selected options in order to avoid
        // hitting the DOM too often.
        if (this._selected) {
            /** @type {?} */
            const viewValue = this.viewValue;
            if (viewValue !== this._mostRecentViewValue) {
                this._mostRecentViewValue = viewValue;
                this._stateChanges.next();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._stateChanges.complete();
    }
    /**
     * Emits the selection change event.
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */
    _emitSelectionChangeEvent(isUserInput = false) {
        this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
    }
}
MatOption.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-option',
                exportAs: 'matOption',
                host: {
                    'role': 'option',
                    '[attr.tabindex]': '_getTabIndex()',
                    '[class.mat-selected]': 'selected',
                    '[class.mat-option-multiple]': 'multiple',
                    '[class.mat-active]': 'active',
                    '[id]': 'id',
                    '[attr.aria-selected]': '_getAriaSelected()',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[class.mat-option-disabled]': 'disabled',
                    '(click)': '_selectViaInteraction()',
                    '(keydown)': '_handleKeydown($event)',
                    'class': 'mat-option',
                },
                styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:0;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}@media (-ms-high-contrast:active){.mat-option{margin:0 1px}.mat-option.mat-active{border:solid 1px currentColor;margin:0}}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}@media (-ms-high-contrast:active){.mat-option .mat-option-ripple{opacity:.5}}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}"],
                template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\" [state]=\"selected ? 'checked' : ''\" [disabled]=\"disabled\"></mat-pseudo-checkbox><span class=\"mat-option-text\"><ng-content></ng-content></span><div class=\"mat-option-ripple\" mat-ripple [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"disabled || disableRipple\"></div>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            },] },
];
/** @nocollapse */
MatOption.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_OPTION_PARENT_COMPONENT,] }] },
    { type: MatOptgroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
MatOption.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onSelectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/**
 * Counts the amount of option group labels that precede the specified option.
 * \@docs-private
 * @param {?} optionIndex Index of the option at which to start counting.
 * @param {?} options Flat list of all of the options.
 * @param {?} optionGroups Flat list of all of the option groups.
 * @return {?}
 */
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
    if (optionGroups.length) {
        /** @type {?} */
        let optionsArray = options.toArray();
        /** @type {?} */
        let groups = optionGroups.toArray();
        /** @type {?} */
        let groupCounter = 0;
        for (let i = 0; i < optionIndex + 1; i++) {
            if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
                groupCounter++;
            }
        }
        return groupCounter;
    }
    return 0;
}
/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * \@docs-private
 * @param {?} optionIndex Index of the option to be scrolled into the view.
 * @param {?} optionHeight Height of the options.
 * @param {?} currentScrollPosition Current scroll position of the panel.
 * @param {?} panelHeight Height of the panel.
 * @return {?}
 */
function _getOptionScrollPosition(optionIndex, optionHeight, currentScrollPosition, panelHeight) {
    /** @type {?} */
    const optionOffset = optionIndex * optionHeight;
    if (optionOffset < currentScrollPosition) {
        return optionOffset;
    }
    if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
        return Math.max(0, optionOffset - panelHeight + optionHeight);
    }
    return currentScrollPosition;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatOptionModule {
}
MatOptionModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], MatPseudoCheckboxModule],
                exports: [MatOption, MatOptgroup],
                declarations: [MatOption, MatOptgroup]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * InjectionToken that can be used to specify the global label options.
 * @type {?}
 */
const MAT_LABEL_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-label-global-options');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * When constructing a Date, the month is zero-based. This can be confusing, since people are
 * used to seeing them one-based. So we create these aliases to make writing the tests easier.
 * \@docs-private
 * \@breaking-change 8.0.0 Remove this with V8 since it was only targeted for testing.
 * @type {?}
 */
const JAN = 0;
/** @type {?} */
const FEB = 1;
/** @type {?} */
const MAR = 2;
/** @type {?} */
const APR = 3;
/** @type {?} */
const MAY = 4;
/** @type {?} */
const JUN = 5;
/** @type {?} */
const JUL = 6;
/** @type {?} */
const AUG = 7;
/** @type {?} */
const SEP = 8;
/** @type {?} */
const OCT = 9;
/** @type {?} */
const NOV = 10;
/** @type {?} */
const DEC = 11;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=core.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm2015/icon.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/material/esm2015/icon.js ***!
  \********************************************************/
/*! exports provided: MatIconModule, MAT_ICON_LOCATION_FACTORY, MAT_ICON_LOCATION, MatIcon, getMatIconNameNotFoundError, getMatIconNoHttpProviderError, getMatIconFailedToSanitizeUrlError, getMatIconFailedToSanitizeLiteralError, ICON_REGISTRY_PROVIDER_FACTORY, MatIconRegistry, ICON_REGISTRY_PROVIDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconModule", function() { return MatIconModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION_FACTORY", function() { return MAT_ICON_LOCATION_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION", function() { return MAT_ICON_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIcon", function() { return MatIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconNameNotFoundError", function() { return getMatIconNameNotFoundError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconNoHttpProviderError", function() { return getMatIconNoHttpProviderError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeUrlError", function() { return getMatIconFailedToSanitizeUrlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeLiteralError", function() { return getMatIconFailedToSanitizeLiteralError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER_FACTORY", function() { return ICON_REGISTRY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconRegistry", function() { return MatIconRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER", function() { return ICON_REGISTRY_PROVIDER; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm2015/coercion.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns an exception to be thrown in the case when attempting to
 * load an icon with a name that cannot be found.
 * \@docs-private
 * @param {?} iconName
 * @return {?}
 */
function getMatIconNameNotFoundError(iconName) {
    return Error(`Unable to find icon with the name "${iconName}"`);
}
/**
 * Returns an exception to be thrown when the consumer attempts to use
 * `<mat-icon>` without including \@angular/common/http.
 * \@docs-private
 * @return {?}
 */
function getMatIconNoHttpProviderError() {
    return Error('Could not find HttpClient provider for use with Angular Material icons. ' +
        'Please include the HttpClientModule from @angular/common/http in your ' +
        'app imports.');
}
/**
 * Returns an exception to be thrown when a URL couldn't be sanitized.
 * \@docs-private
 * @param {?} url URL that was attempted to be sanitized.
 * @return {?}
 */
function getMatIconFailedToSanitizeUrlError(url) {
    return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL ` +
        `via Angular's DomSanitizer. Attempted URL was "${url}".`);
}
/**
 * Returns an exception to be thrown when a HTML string couldn't be sanitized.
 * \@docs-private
 * @param {?} literal HTML that was attempted to be sanitized.
 * @return {?}
 */
function getMatIconFailedToSanitizeLiteralError(literal) {
    return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by ` +
        `Angular's DomSanitizer. Attempted literal was "${literal}".`);
}
/**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * \@docs-private
 */
class SvgIconConfig {
    /**
     * @param {?} data
     * @param {?=} options
     */
    constructor(data, options) {
        this.options = options;
        // Note that we can't use `instanceof SVGElement` here,
        // because it'll break during server-side rendering.
        if (!!((/** @type {?} */ (data))).nodeName) {
            this.svgElement = (/** @type {?} */ (data));
        }
        else {
            this.url = (/** @type {?} */ (data));
        }
    }
}
/**
 * Service to register and display icons used by the `<mat-icon>` component.
 * - Registers icon URLs by namespace and name.
 * - Registers icon set URLs by namespace.
 * - Registers aliases for CSS classes, for use with icon fonts.
 * - Loads icons from URLs and extracts individual icons from icon sets.
 */
class MatIconRegistry {
    /**
     * @param {?} _httpClient
     * @param {?} _sanitizer
     * @param {?} document
     * @param {?=} _errorHandler
     */
    constructor(_httpClient, _sanitizer, document, _errorHandler) {
        this._httpClient = _httpClient;
        this._sanitizer = _sanitizer;
        this._errorHandler = _errorHandler;
        /**
         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
         */
        this._svgIconConfigs = new Map();
        /**
         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
         * Multiple icon sets can be registered under the same namespace.
         */
        this._iconSetConfigs = new Map();
        /**
         * Cache for icons loaded by direct URLs.
         */
        this._cachedIconsByUrl = new Map();
        /**
         * In-progress icon fetches. Used to coalesce multiple requests to the same URL.
         */
        this._inProgressUrlFetches = new Map();
        /**
         * Map from font identifiers to their CSS class names. Used for icon fonts.
         */
        this._fontCssClassesByAlias = new Map();
        /**
         * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
         * The default 'material-icons' value assumes that the material icon font has been loaded as
         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
         */
        this._defaultFontSetClass = 'material-icons';
        this._document = document;
    }
    /**
     * Registers an icon by URL in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} url
     * @param {?=} options
     * @return {THIS}
     */
    addSvgIcon(iconName, url, options) {
        return (/** @type {?} */ (this)).addSvgIconInNamespace('', iconName, url, options);
    }
    /**
     * Registers an icon using an HTML string in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} literal SVG source of the icon.
     * @param {?=} options
     * @return {THIS}
     */
    addSvgIconLiteral(iconName, literal, options) {
        return (/** @type {?} */ (this)).addSvgIconLiteralInNamespace('', iconName, literal, options);
    }
    /**
     * Registers an icon by URL in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which the icon should be registered.
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} url
     * @param {?=} options
     * @return {THIS}
     */
    addSvgIconInNamespace(namespace, iconName, url, options) {
        return (/** @type {?} */ (this))._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, options));
    }
    /**
     * Registers an icon using an HTML string in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which the icon should be registered.
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} literal SVG source of the icon.
     * @param {?=} options
     * @return {THIS}
     */
    addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
        /** @type {?} */
        const sanitizedLiteral = (/** @type {?} */ (this))._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, literal);
        if (!sanitizedLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        /** @type {?} */
        const svgElement = (/** @type {?} */ (this))._createSvgElementForSingleIcon(sanitizedLiteral, options);
        return (/** @type {?} */ (this))._addSvgIconConfig(namespace, iconName, new SvgIconConfig(svgElement, options));
    }
    /**
     * Registers an icon set by URL in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} url
     * @param {?=} options
     * @return {THIS}
     */
    addSvgIconSet(url, options) {
        return (/** @type {?} */ (this)).addSvgIconSetInNamespace('', url, options);
    }
    /**
     * Registers an icon set using an HTML string in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} literal SVG source of the icon set.
     * @param {?=} options
     * @return {THIS}
     */
    addSvgIconSetLiteral(literal, options) {
        return (/** @type {?} */ (this)).addSvgIconSetLiteralInNamespace('', literal, options);
    }
    /**
     * Registers an icon set by URL in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon set.
     * @param {?} url
     * @param {?=} options
     * @return {THIS}
     */
    addSvgIconSetInNamespace(namespace, url, options) {
        return (/** @type {?} */ (this))._addSvgIconSetConfig(namespace, new SvgIconConfig(url, options));
    }
    /**
     * Registers an icon set using an HTML string in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon set.
     * @param {?} literal SVG source of the icon set.
     * @param {?=} options
     * @return {THIS}
     */
    addSvgIconSetLiteralInNamespace(namespace, literal, options) {
        /** @type {?} */
        const sanitizedLiteral = (/** @type {?} */ (this))._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, literal);
        if (!sanitizedLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        /** @type {?} */
        const svgElement = (/** @type {?} */ (this))._svgElementFromString(sanitizedLiteral);
        return (/** @type {?} */ (this))._addSvgIconSetConfig(namespace, new SvgIconConfig(svgElement, options));
    }
    /**
     * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
     * component with the alias as the fontSet input will cause the class name to be applied
     * to the `<mat-icon>` element.
     *
     * @template THIS
     * @this {THIS}
     * @param {?} alias Alias for the font.
     * @param {?=} className Class name override to be used instead of the alias.
     * @return {THIS}
     */
    registerFontClassAlias(alias, className = alias) {
        (/** @type {?} */ (this))._fontCssClassesByAlias.set(alias, className);
        return (/** @type {?} */ (this));
    }
    /**
     * Returns the CSS class name associated with the alias by a previous call to
     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     * @param {?} alias
     * @return {?}
     */
    classNameForFontAlias(alias) {
        return this._fontCssClassesByAlias.get(alias) || alias;
    }
    /**
     * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     *
     * @template THIS
     * @this {THIS}
     * @param {?} className
     * @return {THIS}
     */
    setDefaultFontSetClass(className) {
        (/** @type {?} */ (this))._defaultFontSetClass = className;
        return (/** @type {?} */ (this));
    }
    /**
     * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     * @return {?}
     */
    getDefaultFontSetClass() {
        return this._defaultFontSetClass;
    }
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param {?} safeUrl URL from which to fetch the SVG icon.
     * @return {?}
     */
    getSvgIconFromUrl(safeUrl) {
        /** @type {?} */
        const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL, safeUrl);
        if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        /** @type {?} */
        const cachedIcon = this._cachedIconsByUrl.get(url);
        if (cachedIcon) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(cachedIcon));
        }
        return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((/**
         * @param {?} svg
         * @return {?}
         */
        svg => this._cachedIconsByUrl.set((/** @type {?} */ (url)), svg))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} svg
         * @return {?}
         */
        svg => cloneSvg(svg))));
    }
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an error.
     *
     * @param {?} name Name of the icon to be retrieved.
     * @param {?=} namespace Namespace in which to look for the icon.
     * @return {?}
     */
    getNamedSvgIcon(name, namespace = '') {
        // Return (copy of) cached icon if possible.
        /** @type {?} */
        const key = iconKey(namespace, name);
        /** @type {?} */
        const config = this._svgIconConfigs.get(key);
        if (config) {
            return this._getSvgFromConfig(config);
        }
        // See if we have any icon sets registered for the namespace.
        /** @type {?} */
        const iconSetConfigs = this._iconSetConfigs.get(namespace);
        if (iconSetConfigs) {
            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(getMatIconNameNotFoundError(key));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._svgIconConfigs.clear();
        this._iconSetConfigs.clear();
        this._cachedIconsByUrl.clear();
    }
    /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     * @private
     * @param {?} config
     * @return {?}
     */
    _getSvgFromConfig(config) {
        if (config.svgElement) {
            // We already have the SVG element for this icon, return a copy.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(config.svgElement));
        }
        else {
            // Fetch the icon from the config's URL, cache it, and return a copy.
            return this._loadSvgIconFromConfig(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((/**
             * @param {?} svg
             * @return {?}
             */
            svg => config.svgElement = svg)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
             * @param {?} svg
             * @return {?}
             */
            svg => cloneSvg(svg))));
        }
    }
    /**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
     * First searches the available cached icons for a nested element with a matching name, and
     * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
     * that have not been cached, and searches again after all fetches are completed.
     * The returned Observable produces the SVG element if possible, and throws
     * an error if no icon with the specified name can be found.
     * @private
     * @param {?} name
     * @param {?} iconSetConfigs
     * @return {?}
     */
    _getSvgFromIconSetConfigs(name, iconSetConfigs) {
        // For all the icon set SVG elements we've fetched, see if any contain an icon with the
        // requested name.
        /** @type {?} */
        const namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
        if (namedIcon) {
            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
            // time anyway, there's probably not much advantage compared to just always extracting
            // it from the icon set.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(namedIcon);
        }
        // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
        // fetched, fetch them now and look for iconName in the results.
        /** @type {?} */
        const iconSetFetchRequests = iconSetConfigs
            .filter((/**
         * @param {?} iconSetConfig
         * @return {?}
         */
        iconSetConfig => !iconSetConfig.svgElement))
            .map((/**
         * @param {?} iconSetConfig
         * @return {?}
         */
        iconSetConfig => {
            return this._loadSvgIconSetFromConfig(iconSetConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                /** @type {?} */
                const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL, iconSetConfig.url);
                // Swallow errors fetching individual URLs so the
                // combined Observable won't necessarily fail.
                /** @type {?} */
                const errorMessage = `Loading icon set URL: ${url} failed: ${err.message}`;
                // @breaking-change 9.0.0 _errorHandler parameter to be made required
                if (this._errorHandler) {
                    this._errorHandler.handleError(new Error(errorMessage));
                }
                else {
                    console.error(errorMessage);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            })));
        }));
        // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
        // cached SVG element (unless the request failed), and we can check again for the icon.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(iconSetFetchRequests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const foundIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
            if (!foundIcon) {
                throw getMatIconNameNotFoundError(name);
            }
            return foundIcon;
        })));
    }
    /**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     * @private
     * @param {?} iconName
     * @param {?} iconSetConfigs
     * @return {?}
     */
    _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
        // Iterate backwards, so icon sets added later have precedence.
        for (let i = iconSetConfigs.length - 1; i >= 0; i--) {
            /** @type {?} */
            const config = iconSetConfigs[i];
            if (config.svgElement) {
                /** @type {?} */
                const foundIcon = this._extractSvgIconFromSet(config.svgElement, iconName, config.options);
                if (foundIcon) {
                    return foundIcon;
                }
            }
        }
        return null;
    }
    /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     * @private
     * @param {?} config
     * @return {?}
     */
    _loadSvgIconFromConfig(config) {
        return this._fetchUrl(config.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} svgText
         * @return {?}
         */
        svgText => this._createSvgElementForSingleIcon(svgText, config.options))));
    }
    /**
     * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     * @private
     * @param {?} config
     * @return {?}
     */
    _loadSvgIconSetFromConfig(config) {
        // If the SVG for this icon set has already been parsed, do nothing.
        if (config.svgElement) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(config.svgElement);
        }
        return this._fetchUrl(config.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} svgText
         * @return {?}
         */
        svgText => {
            // It is possible that the icon set was parsed and cached by an earlier request, so parsing
            // only needs to occur if the cache is yet unset.
            if (!config.svgElement) {
                config.svgElement = this._svgElementFromString(svgText);
            }
            return config.svgElement;
        })));
    }
    /**
     * Creates a DOM element from the given SVG string, and adds default attributes.
     * @private
     * @param {?} responseText
     * @param {?=} options
     * @return {?}
     */
    _createSvgElementForSingleIcon(responseText, options) {
        /** @type {?} */
        const svg = this._svgElementFromString(responseText);
        this._setSvgAttributes(svg, options);
        return svg;
    }
    /**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     * @private
     * @param {?} iconSet
     * @param {?} iconName
     * @param {?=} options
     * @return {?}
     */
    _extractSvgIconFromSet(iconSet, iconName, options) {
        // Use the `id="iconName"` syntax in order to escape special
        // characters in the ID (versus using the #iconName syntax).
        /** @type {?} */
        const iconSource = iconSet.querySelector(`[id="${iconName}"]`);
        if (!iconSource) {
            return null;
        }
        // Clone the element and remove the ID to prevent multiple elements from being added
        // to the page with the same ID.
        /** @type {?} */
        const iconElement = (/** @type {?} */ (iconSource.cloneNode(true)));
        iconElement.removeAttribute('id');
        // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
        // the content of a new <svg> node.
        if (iconElement.nodeName.toLowerCase() === 'svg') {
            return this._setSvgAttributes((/** @type {?} */ (iconElement)), options);
        }
        // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
        // that the same could be achieved by referring to it via <use href="#id">, however the <use>
        // tag is problematic on Firefox, because it needs to include the current page path.
        if (iconElement.nodeName.toLowerCase() === 'symbol') {
            return this._setSvgAttributes(this._toSvgElement(iconElement), options);
        }
        // createElement('SVG') doesn't work as expected; the DOM ends up with
        // the correct nodes, but the SVG content doesn't render. Instead we
        // have to create an empty SVG node using innerHTML and append its content.
        // Elements created using DOMParser.parseFromString have the same problem.
        // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
        /** @type {?} */
        const svg = this._svgElementFromString('<svg></svg>');
        // Clone the node so we don't remove it from the parent icon set element.
        svg.appendChild(iconElement);
        return this._setSvgAttributes(svg, options);
    }
    /**
     * Creates a DOM element from the given SVG string.
     * @private
     * @param {?} str
     * @return {?}
     */
    _svgElementFromString(str) {
        /** @type {?} */
        const div = this._document.createElement('DIV');
        div.innerHTML = str;
        /** @type {?} */
        const svg = (/** @type {?} */ (div.querySelector('svg')));
        if (!svg) {
            throw Error('<svg> tag not found');
        }
        return svg;
    }
    /**
     * Converts an element into an SVG node by cloning all of its children.
     * @private
     * @param {?} element
     * @return {?}
     */
    _toSvgElement(element) {
        /** @type {?} */
        const svg = this._svgElementFromString('<svg></svg>');
        /** @type {?} */
        const attributes = element.attributes;
        // Copy over all the attributes from the `symbol` to the new SVG, except the id.
        for (let i = 0; i < attributes.length; i++) {
            const { name, value } = attributes[i];
            if (name !== 'id') {
                svg.setAttribute(name, value);
            }
        }
        for (let i = 0; i < element.childNodes.length; i++) {
            if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
                svg.appendChild(element.childNodes[i].cloneNode(true));
            }
        }
        return svg;
    }
    /**
     * Sets the default attributes for an SVG element to be used as an icon.
     * @private
     * @param {?} svg
     * @param {?=} options
     * @return {?}
     */
    _setSvgAttributes(svg, options) {
        svg.setAttribute('fit', '');
        svg.setAttribute('height', '100%');
        svg.setAttribute('width', '100%');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
        if (options && options.viewBox) {
            svg.setAttribute('viewBox', options.viewBox);
        }
        return svg;
    }
    /**
     * Returns an Observable which produces the string contents of the given URL. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     * @private
     * @param {?} safeUrl
     * @return {?}
     */
    _fetchUrl(safeUrl) {
        if (!this._httpClient) {
            throw getMatIconNoHttpProviderError();
        }
        if (safeUrl == null) {
            throw Error(`Cannot fetch icon from URL "${safeUrl}".`);
        }
        /** @type {?} */
        const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL, safeUrl);
        if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
        // already a request in progress for that URL. It's necessary to call share() on the
        // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
        /** @type {?} */
        const inProgressFetch = this._inProgressUrlFetches.get(url);
        if (inProgressFetch) {
            return inProgressFetch;
        }
        // TODO(jelbourn): for some reason, the `finalize` operator "loses" the generic type on the
        // Observable. Figure out why and fix it.
        /** @type {?} */
        const req = this._httpClient.get(url, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])((/**
         * @return {?}
         */
        () => this._inProgressUrlFetches.delete(url))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
        this._inProgressUrlFetches.set(url, req);
        return req;
    }
    /**
     * Registers an icon config by name in the specified namespace.
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon config.
     * @param {?} iconName Name under which to register the config.
     * @param {?} config Config to be registered.
     * @return {THIS}
     */
    _addSvgIconConfig(namespace, iconName, config) {
        (/** @type {?} */ (this))._svgIconConfigs.set(iconKey(namespace, iconName), config);
        return (/** @type {?} */ (this));
    }
    /**
     * Registers an icon set config in the specified namespace.
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon config.
     * @param {?} config Config to be registered.
     * @return {THIS}
     */
    _addSvgIconSetConfig(namespace, config) {
        /** @type {?} */
        const configNamespace = (/** @type {?} */ (this))._iconSetConfigs.get(namespace);
        if (configNamespace) {
            configNamespace.push(config);
        }
        else {
            (/** @type {?} */ (this))._iconSetConfigs.set(namespace, [config]);
        }
        return (/** @type {?} */ (this));
    }
}
MatIconRegistry.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{ providedIn: 'root' },] },
];
/** @nocollapse */
MatIconRegistry.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
/** @nocollapse */ MatIconRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function MatIconRegistry_Factory() { return new MatIconRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], 8)); }, token: MatIconRegistry, providedIn: "root" });
/**
 * \@docs-private
 * @param {?} parentRegistry
 * @param {?} httpClient
 * @param {?} sanitizer
 * @param {?=} document
 * @param {?=} errorHandler
 * @return {?}
 */
function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, document, errorHandler) {
    return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
}
/**
 * \@docs-private
 * @type {?}
 */
const ICON_REGISTRY_PROVIDER = {
    // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
    provide: MatIconRegistry,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), MatIconRegistry],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"]],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), (/** @type {?} */ (_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]))],
    ],
    useFactory: ICON_REGISTRY_PROVIDER_FACTORY,
};
/**
 * Clones an SVGElement while preserving type information.
 * @param {?} svg
 * @return {?}
 */
function cloneSvg(svg) {
    return (/** @type {?} */ (svg.cloneNode(true)));
}
/**
 * Returns the cache key to use for an icon namespace and name.
 * @param {?} namespace
 * @param {?} name
 * @return {?}
 */
function iconKey(namespace, name) {
    return namespace + ':' + name;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Boilerplate for applying mixins to MatIcon.
/**
 * \@docs-private
 */
class MatIconBase {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
/** @type {?} */
const _MatIconMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinColor"])(MatIconBase);
/**
 * Injection token used to provide the current location to `MatIcon`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * \@docs-private
 * @type {?}
 */
const MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-icon-location', {
    providedIn: 'root',
    factory: MAT_ICON_LOCATION_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_ICON_LOCATION_FACTORY() {
    /** @type {?} */
    const _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
    /** @type {?} */
    const _location = _document ? _document.location : null;
    return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname: (/**
         * @return {?}
         */
        () => _location ? (_location.pathname + _location.search) : '')
    };
}
/**
 * SVG attributes that accept a FuncIRI (e.g. `url(<something>)`).
 * @type {?}
 */
const funcIriAttributes = [
    'clip-path',
    'color-profile',
    'src',
    'cursor',
    'fill',
    'filter',
    'marker',
    'marker-start',
    'marker-mid',
    'marker-end',
    'mask',
    'stroke'
];
const ɵ0 = /**
 * @param {?} attr
 * @return {?}
 */
attr => `[${attr}]`;
/**
 * Selector that can be used to find all elements that are using a `FuncIRI`.
 * @type {?}
 */
const funcIriAttributeSelector = funcIriAttributes.map((ɵ0)).join(', ');
/**
 * Regex that can be used to extract the id out of a FuncIRI.
 * @type {?}
 */
const funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
/**
 * Component to display an icon. It can be used in the following ways:
 *
 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
 *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
 *   Examples:
 *     `<mat-icon svgIcon="left-arrow"></mat-icon>
 *     <mat-icon svgIcon="animals:cat"></mat-icon>`
 *
 * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
 *   component. By default the Material icons font is used as described at
 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
 *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
 *   Examples:
 *     `<mat-icon>home</mat-icon>
 *     <mat-icon fontSet="myfont">sun</mat-icon>`
 *
 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
 *   CSS class which causes the glyph to be displayed via a :before selector, as in
 *   https://fortawesome.github.io/Font-Awesome/examples/
 *   Example:
 *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
 */
class MatIcon extends _MatIconMixinBase {
    /**
     * @param {?} elementRef
     * @param {?} _iconRegistry
     * @param {?} ariaHidden
     * @param {?=} _location
     * @param {?=} _errorHandler
     */
    constructor(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
        super(elementRef);
        this._iconRegistry = _iconRegistry;
        this._location = _location;
        this._errorHandler = _errorHandler;
        this._inline = false;
        // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
        // the right thing to do for the majority of icon use-cases.
        if (!ariaHidden) {
            elementRef.nativeElement.setAttribute('aria-hidden', 'true');
        }
    }
    /**
     * Whether the icon should be inlined, automatically sizing the icon to match the font size of
     * the element the icon is contained in.
     * @return {?}
     */
    get inline() {
        return this._inline;
    }
    /**
     * @param {?} inline
     * @return {?}
     */
    set inline(inline) {
        this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(inline);
    }
    /**
     * Font set that the icon is a part of.
     * @return {?}
     */
    get fontSet() { return this._fontSet; }
    /**
     * @param {?} value
     * @return {?}
     */
    set fontSet(value) {
        this._fontSet = this._cleanupFontValue(value);
    }
    /**
     * Name of an icon within a font set.
     * @return {?}
     */
    get fontIcon() { return this._fontIcon; }
    /**
     * @param {?} value
     * @return {?}
     */
    set fontIcon(value) {
        this._fontIcon = this._cleanupFontValue(value);
    }
    /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws an error if the name contains two or more ':' separators.
     * Examples:
     *   `'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws Error)`
     * @private
     * @param {?} iconName
     * @return {?}
     */
    _splitIconName(iconName) {
        if (!iconName) {
            return ['', ''];
        }
        /** @type {?} */
        const parts = iconName.split(':');
        switch (parts.length) {
            case 1: return ['', parts[0]]; // Use default namespace.
            case 2: return (/** @type {?} */ (parts));
            default: throw Error(`Invalid icon name: "${iconName}"`);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.
        /** @type {?} */
        const svgIconChanges = changes['svgIcon'];
        if (svgIconChanges) {
            if (this.svgIcon) {
                const [namespace, iconName] = this._splitIconName(this.svgIcon);
                this._iconRegistry.getNamedSvgIcon(iconName, namespace)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                    .subscribe((/**
                 * @param {?} svg
                 * @return {?}
                 */
                svg => this._setSvgElement(svg)), (/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    /** @type {?} */
                    const errorMessage = `Error retrieving icon ${namespace}:${iconName}! ${err.message}`;
                    // @breaking-change 9.0.0 _errorHandler parameter to be made required.
                    if (this._errorHandler) {
                        this._errorHandler.handleError(new Error(errorMessage));
                    }
                    else {
                        console.error(errorMessage);
                    }
                }));
            }
            else if (svgIconChanges.previousValue) {
                this._clearSvgElement();
            }
        }
        if (this._usingFontIcon()) {
            this._updateFontIconClasses();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Update font classes because ngOnChanges won't be called if none of the inputs are present,
        // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
        if (this._usingFontIcon()) {
            this._updateFontIconClasses();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        /** @type {?} */
        const cachedElements = this._elementsWithExternalReferences;
        if (cachedElements && this._location && cachedElements.size) {
            /** @type {?} */
            const newPath = this._location.getPathname();
            // We need to check whether the URL has changed on each change detection since
            // the browser doesn't have an API that will let us react on link clicks and
            // we can't depend on the Angular router. The references need to be updated,
            // because while most browsers don't care whether the URL is correct after
            // the first render, Safari will break if the user navigates to a different
            // page and the SVG isn't re-rendered.
            if (newPath !== this._previousPath) {
                this._previousPath = newPath;
                this._prependPathToReferences(newPath);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _usingFontIcon() {
        return !this.svgIcon;
    }
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    _setSvgElement(svg) {
        this._clearSvgElement();
        // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
        // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
        // Do this before inserting the element into the DOM, in order to avoid a style recalculation.
        /** @type {?} */
        const styleTags = (/** @type {?} */ (svg.querySelectorAll('style')));
        for (let i = 0; i < styleTags.length; i++) {
            styleTags[i].textContent += ' ';
        }
        // Note: we do this fix here, rather than the icon registry, because the
        // references have to point to the URL at the time that the icon was created.
        if (this._location) {
            /** @type {?} */
            const path = this._location.getPathname();
            this._previousPath = path;
            this._cacheChildrenWithExternalReferences(svg);
            this._prependPathToReferences(path);
        }
        this._elementRef.nativeElement.appendChild(svg);
    }
    /**
     * @private
     * @return {?}
     */
    _clearSvgElement() {
        /** @type {?} */
        const layoutElement = this._elementRef.nativeElement;
        /** @type {?} */
        let childCount = layoutElement.childNodes.length;
        if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
        }
        // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
        // we can't use innerHTML, because IE will throw if the element has a data binding.
        while (childCount--) {
            /** @type {?} */
            const child = layoutElement.childNodes[childCount];
            // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
            // of any loose text nodes, as well as any SVG elements in order to remove any old icons.
            if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
                layoutElement.removeChild(child);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    _updateFontIconClasses() {
        if (!this._usingFontIcon()) {
            return;
        }
        /** @type {?} */
        const elem = this._elementRef.nativeElement;
        /** @type {?} */
        const fontSetClass = this.fontSet ?
            this._iconRegistry.classNameForFontAlias(this.fontSet) :
            this._iconRegistry.getDefaultFontSetClass();
        if (fontSetClass != this._previousFontSetClass) {
            if (this._previousFontSetClass) {
                elem.classList.remove(this._previousFontSetClass);
            }
            if (fontSetClass) {
                elem.classList.add(fontSetClass);
            }
            this._previousFontSetClass = fontSetClass;
        }
        if (this.fontIcon != this._previousFontIconClass) {
            if (this._previousFontIconClass) {
                elem.classList.remove(this._previousFontIconClass);
            }
            if (this.fontIcon) {
                elem.classList.add(this.fontIcon);
            }
            this._previousFontIconClass = this.fontIcon;
        }
    }
    /**
     * Cleans up a value to be used as a fontIcon or fontSet.
     * Since the value ends up being assigned as a CSS class, we
     * have to trim the value and omit space-separated values.
     * @private
     * @param {?} value
     * @return {?}
     */
    _cleanupFontValue(value) {
        return typeof value === 'string' ? value.trim().split(' ')[0] : value;
    }
    /**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     * @private
     * @param {?} path
     * @return {?}
     */
    _prependPathToReferences(path) {
        /** @type {?} */
        const elements = this._elementsWithExternalReferences;
        if (elements) {
            elements.forEach((/**
             * @param {?} attrs
             * @param {?} element
             * @return {?}
             */
            (attrs, element) => {
                attrs.forEach((/**
                 * @param {?} attr
                 * @return {?}
                 */
                attr => {
                    element.setAttribute(attr.name, `url('${path}#${attr.value}')`);
                }));
            }));
        }
    }
    /**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     * @private
     * @param {?} element
     * @return {?}
     */
    _cacheChildrenWithExternalReferences(element) {
        /** @type {?} */
        const elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
        /** @type {?} */
        const elements = this._elementsWithExternalReferences =
            this._elementsWithExternalReferences || new Map();
        for (let i = 0; i < elementsWithFuncIri.length; i++) {
            funcIriAttributes.forEach((/**
             * @param {?} attr
             * @return {?}
             */
            attr => {
                /** @type {?} */
                const elementWithReference = elementsWithFuncIri[i];
                /** @type {?} */
                const value = elementWithReference.getAttribute(attr);
                /** @type {?} */
                const match = value ? value.match(funcIriPattern) : null;
                if (match) {
                    /** @type {?} */
                    let attributes = elements.get(elementWithReference);
                    if (!attributes) {
                        attributes = [];
                        elements.set(elementWithReference, attributes);
                    }
                    (/** @type {?} */ (attributes)).push({ name: attr, value: match[1] });
                }
            }));
        }
    }
}
MatIcon.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{template: '<ng-content></ng-content>',
                selector: 'mat-icon',
                exportAs: 'matIcon',
                styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1,1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],
                inputs: ['color'],
                host: {
                    'role': 'img',
                    'class': 'mat-icon notranslate',
                    '[class.mat-icon-inline]': 'inline',
                    '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"',
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            },] },
];
/** @nocollapse */
MatIcon.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: MatIconRegistry },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"], args: ['aria-hidden',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_ICON_LOCATION,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
MatIcon.propDecorators = {
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    svgIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    fontSet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    fontIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatIconModule {
}
MatIconModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
                exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
                declarations: [MatIcon],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=icon.js.map


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.draggable.js/src/svg.draggable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.draggable.js/src/svg.draggable.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/src/main.js");


const getCoordsFromEvent = (ev) => {
  if (ev.changedTouches) {
    ev = ev.changedTouches[0]
  }
  return { x: ev.clientX, y: ev.clientY }
}

// Creates handler, saves it
class DragHandler {
  constructor (el) {
    el.remember('_draggable', this)
    this.el = el

    this.drag = this.drag.bind(this)
    this.startDrag = this.startDrag.bind(this)
    this.endDrag = this.endDrag.bind(this)
  }

  // Enables or disabled drag based on input
  init (enabled) {
    if (enabled) {
      this.el.on('mousedown.drag', this.startDrag)
      this.el.on('touchstart.drag', this.startDrag)
    } else {
      this.el.off('mousedown.drag')
      this.el.off('touchstart.drag')
    }
  }

  // Start dragging
  startDrag (ev) {
    const isMouse = !ev.type.indexOf('mouse')

    // Check for left button
    if (isMouse && (ev.which || ev.buttons) !== 1) {
      return
    }

    // Fire beforedrag event
    if (this.el.dispatch('beforedrag', { event: ev, handler: this }).defaultPrevented) {
      return
    }

    // Prevent browser drag behavior as soon as possible
    ev.preventDefault()

    // Prevent propagation to a parent that might also have dragging enabled
    ev.stopPropagation()

    // Make sure that start events are unbound so that one element
    // is only dragged by one input only
    this.init(false)

    this.box = this.el.bbox()
    this.lastClick = this.el.point(getCoordsFromEvent(ev))

    // We consider the drag done, when a touch is canceled, too
    const eventMove = (isMouse ? 'mousemove' : 'touchmove') + '.drag'
    const eventEnd = (isMouse ? 'mouseup' : 'touchcancel.drag touchend') + '.drag'

    // Bind drag and end events to window
    Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__["on"])(window, eventMove, this.drag)
    Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__["on"])(window, eventEnd, this.endDrag)

    // Fire dragstart event
    this.el.fire('dragstart', { event: ev, handler: this, box: this.box })
  }

  // While dragging
  drag (ev) {

    const { box, lastClick } = this

    const currentClick = this.el.point(getCoordsFromEvent(ev))
    const x = box.x + (currentClick.x - lastClick.x)
    const y = box.y + (currentClick.y - lastClick.y)
    const newBox = new _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__["Box"](x, y, box.w, box.h)

    if (this.el.dispatch('dragmove', {
      event: ev,
      handler: this,
      box: newBox
    }).defaultPrevented) return

    this.move(x, y)
    return newBox
  }

  move (x, y) {
    // Svg elements bbox depends on their content even though they have
    // x, y, width and height - strange!
    // Thats why we handle them the same as groups
    if (this.el.type === 'svg') {
      _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__["G"].prototype.move.call(this.el, x, y)
    } else {
      this.el.move(x, y)
    }
  }

  endDrag (ev) {
    // final drag
    const box = this.drag(ev)

    // fire dragend event
    this.el.fire('dragend', { event: ev, handler: this, box })

    // unbind events
    Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__["off"])(window, 'mousemove.drag')
    Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__["off"])(window, 'touchmove.drag')
    Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__["off"])(window, 'mouseup.drag')
    Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__["off"])(window, 'touchend.drag')

    // Rebind initial Events
    this.init(true)
  }
}

Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__["Element"], {
  draggable (enable = true) {
    const dragHandler = this.remember('_draggable') || new DragHandler(this)
    dragHandler.init(enable)
    return this
  }
})


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/animation/Animator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/animation/Animator.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/window.js */ "./node_modules/@svgdotjs/svg.js/src/utils/window.js");
/* harmony import */ var _Queue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Queue.js */ "./node_modules/@svgdotjs/svg.js/src/animation/Queue.js");



const Animator = {
  nextDraw: null,
  frames: new _Queue_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
  timeouts: new _Queue_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
  immediates: new _Queue_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
  timer: () => _utils_window_js__WEBPACK_IMPORTED_MODULE_0__["globals"].window.performance || _utils_window_js__WEBPACK_IMPORTED_MODULE_0__["globals"].window.Date,
  transforms: [],

  frame (fn) {
    // Store the node
    var node = Animator.frames.push({ run: fn })

    // Request an animation frame if we don't have one
    if (Animator.nextDraw === null) {
      Animator.nextDraw = _utils_window_js__WEBPACK_IMPORTED_MODULE_0__["globals"].window.requestAnimationFrame(Animator._draw)
    }

    // Return the node so we can remove it easily
    return node
  },

  timeout (fn, delay) {
    delay = delay || 0

    // Work out when the event should fire
    var time = Animator.timer().now() + delay

    // Add the timeout to the end of the queue
    var node = Animator.timeouts.push({ run: fn, time: time })

    // Request another animation frame if we need one
    if (Animator.nextDraw === null) {
      Animator.nextDraw = _utils_window_js__WEBPACK_IMPORTED_MODULE_0__["globals"].window.requestAnimationFrame(Animator._draw)
    }

    return node
  },

  immediate (fn) {
    // Add the immediate fn to the end of the queue
    var node = Animator.immediates.push(fn)
    // Request another animation frame if we need one
    if (Animator.nextDraw === null) {
      Animator.nextDraw = _utils_window_js__WEBPACK_IMPORTED_MODULE_0__["globals"].window.requestAnimationFrame(Animator._draw)
    }

    return node
  },

  cancelFrame (node) {
    node != null && Animator.frames.remove(node)
  },

  clearTimeout (node) {
    node != null && Animator.timeouts.remove(node)
  },

  cancelImmediate (node) {
    node != null && Animator.immediates.remove(node)
  },

  _draw (now) {
    // Run all the timeouts we can run, if they are not ready yet, add them
    // to the end of the queue immediately! (bad timeouts!!! [sarcasm])
    var nextTimeout = null
    var lastTimeout = Animator.timeouts.last()
    while ((nextTimeout = Animator.timeouts.shift())) {
      // Run the timeout if its time, or push it to the end
      if (now >= nextTimeout.time) {
        nextTimeout.run()
      } else {
        Animator.timeouts.push(nextTimeout)
      }

      // If we hit the last item, we should stop shifting out more items
      if (nextTimeout === lastTimeout) break
    }

    // Run all of the animation frames
    var nextFrame = null
    var lastFrame = Animator.frames.last()
    while ((nextFrame !== lastFrame) && (nextFrame = Animator.frames.shift())) {
      nextFrame.run(now)
    }

    var nextImmediate = null
    while ((nextImmediate = Animator.immediates.shift())) {
      nextImmediate()
    }

    // If we have remaining timeouts or frames, draw until we don't anymore
    Animator.nextDraw = Animator.timeouts.first() || Animator.frames.first()
      ? _utils_window_js__WEBPACK_IMPORTED_MODULE_0__["globals"].window.requestAnimationFrame(Animator._draw)
      : null
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Animator);


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/animation/Controller.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/animation/Controller.js ***!
  \*******************************************************************/
/*! exports provided: easing, Stepper, Ease, Controller, Spring, PID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stepper", function() { return Stepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return Ease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spring", function() { return Spring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PID", function() { return PID; });
/* harmony import */ var _modules_core_defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/core/defaults.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/defaults.js");
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");



/***
Base Class
==========
The base stepper class that will be
***/

function makeSetterGetter (k, f) {
  return function (v) {
    if (v == null) return this[v]
    this[k] = v
    if (f) f.call(this)
    return this
  }
}

let easing = {
  '-': function (pos) {
    return pos
  },
  '<>': function (pos) {
    return -Math.cos(pos * Math.PI) / 2 + 0.5
  },
  '>': function (pos) {
    return Math.sin(pos * Math.PI / 2)
  },
  '<': function (pos) {
    return -Math.cos(pos * Math.PI / 2) + 1
  },
  bezier: function (x1, y1, x2, y2) {
    // see https://www.w3.org/TR/css-easing-1/#cubic-bezier-algo
    return function (t) {
      if (t < 0) {
        if (x1 > 0) {
          return y1 / x1 * t
        } else if (x2 > 0) {
          return y2 / x2 * t
        } else {
          return 0
        }
      } else if (t > 1) {
        if (x2 < 1) {
          return (1 - y2) / (1 - x2) * t + (y2 - x2) / (1 - x2)
        } else if (x1 < 1) {
          return (1 - y1) / (1 - x1) * t + (y1 - x1) / (1 - x1)
        } else {
          return 1
        }
      } else {
        return 3 * t * (1 - t) ** 2 * y1 + 3 * t ** 2 * (1 - t) * y2 + t ** 3
      }
    }
  },
  // see https://www.w3.org/TR/css-easing-1/#step-timing-function-algo
  steps: function (steps, stepPosition = 'end') {
    // deal with "jump-" prefix
    stepPosition = stepPosition.split('-').reverse()[0]

    let jumps = steps
    if (stepPosition === 'none') {
      --jumps
    } else if (stepPosition === 'both') {
      ++jumps
    }

    // The beforeFlag is essentially useless
    return (t, beforeFlag = false) => {
      // Step is called currentStep in referenced url
      let step = Math.floor(t * steps)
      const jumping = (t * step) % 1 === 0

      if (stepPosition === 'start' || stepPosition === 'both') {
        ++step
      }

      if (beforeFlag && jumping) {
        --step
      }

      if (t >= 0 && step < 0) {
        step = 0
      }

      if (t <= 1 && step > jumps) {
        step = jumps
      }

      return step / jumps
    }
  }
}

class Stepper {
  done () {
    return false
  }
}

/***
Easing Functions
================
***/

class Ease extends Stepper {
  constructor (fn) {
    super()
    this.ease = easing[fn || _modules_core_defaults_js__WEBPACK_IMPORTED_MODULE_0__["timeline"].ease] || fn
  }

  step (from, to, pos) {
    if (typeof from !== 'number') {
      return pos < 1 ? from : to
    }
    return from + (to - from) * this.ease(pos)
  }
}

/***
Controller Types
================
***/

class Controller extends Stepper {
  constructor (fn) {
    super()
    this.stepper = fn
  }

  step (current, target, dt, c) {
    return this.stepper(current, target, dt, c)
  }

  done (c) {
    return c.done
  }
}

function recalculate () {
  // Apply the default parameters
  var duration = (this._duration || 500) / 1000
  var overshoot = this._overshoot || 0

  // Calculate the PID natural response
  var eps = 1e-10
  var pi = Math.PI
  var os = Math.log(overshoot / 100 + eps)
  var zeta = -os / Math.sqrt(pi * pi + os * os)
  var wn = 3.9 / (zeta * duration)

  // Calculate the Spring values
  this.d = 2 * zeta * wn
  this.k = wn * wn
}

class Spring extends Controller {
  constructor (duration, overshoot) {
    super()
    this.duration(duration || 500)
      .overshoot(overshoot || 0)
  }

  step (current, target, dt, c) {
    if (typeof current === 'string') return current
    c.done = dt === Infinity
    if (dt === Infinity) return target
    if (dt === 0) return current

    if (dt > 100) dt = 16

    dt /= 1000

    // Get the previous velocity
    var velocity = c.velocity || 0

    // Apply the control to get the new position and store it
    var acceleration = -this.d * velocity - this.k * (current - target)
    var newPosition = current
      + velocity * dt
      + acceleration * dt * dt / 2

    // Store the velocity
    c.velocity = velocity + acceleration * dt

    // Figure out if we have converged, and if so, pass the value
    c.done = Math.abs(target - newPosition) + Math.abs(velocity) < 0.002
    return c.done ? target : newPosition
  }
}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["extend"])(Spring, {
  duration: makeSetterGetter('_duration', recalculate),
  overshoot: makeSetterGetter('_overshoot', recalculate)
})

class PID extends Controller {
  constructor (p, i, d, windup) {
    super()

    p = p == null ? 0.1 : p
    i = i == null ? 0.01 : i
    d = d == null ? 0 : d
    windup = windup == null ? 1000 : windup
    this.p(p).i(i).d(d).windup(windup)
  }

  step (current, target, dt, c) {
    if (typeof current === 'string') return current
    c.done = dt === Infinity

    if (dt === Infinity) return target
    if (dt === 0) return current

    var p = target - current
    var i = (c.integral || 0) + p * dt
    var d = (p - (c.error || 0)) / dt
    var windup = this.windup

    // antiwindup
    if (windup !== false) {
      i = Math.max(-windup, Math.min(i, windup))
    }

    c.error = p
    c.integral = i

    c.done = Math.abs(p) < 0.001

    return c.done ? target : current + (this.P * p + this.I * i + this.D * d)
  }
}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["extend"])(PID, {
  windup: makeSetterGetter('windup'),
  p: makeSetterGetter('P'),
  i: makeSetterGetter('I'),
  d: makeSetterGetter('D')
})


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/animation/Morphable.js":
/*!******************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/animation/Morphable.js ***!
  \******************************************************************/
/*! exports provided: default, NonMorphable, TransformBag, ObjectBag, registerMorphableType, makeMorphable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Morphable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonMorphable", function() { return NonMorphable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformBag", function() { return TransformBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectBag", function() { return ObjectBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerMorphableType", function() { return registerMorphableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMorphable", function() { return makeMorphable; });
/* harmony import */ var _Controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller.js */ "./node_modules/@svgdotjs/svg.js/src/animation/Controller.js");
/* harmony import */ var _modules_core_regex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/core/regex.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/regex.js");
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _types_Color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/Color.js */ "./node_modules/@svgdotjs/svg.js/src/types/Color.js");
/* harmony import */ var _types_PathArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/PathArray.js */ "./node_modules/@svgdotjs/svg.js/src/types/PathArray.js");
/* harmony import */ var _types_SVGArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/SVGArray.js */ "./node_modules/@svgdotjs/svg.js/src/types/SVGArray.js");
/* harmony import */ var _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types/SVGNumber.js */ "./node_modules/@svgdotjs/svg.js/src/types/SVGNumber.js");








class Morphable {
  constructor (stepper) {
    this._stepper = stepper || new _Controller_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]('-')

    this._from = null
    this._to = null
    this._type = null
    this._context = null
    this._morphObj = null
  }

  from (val) {
    if (val == null) {
      return this._from
    }

    this._from = this._set(val)
    return this
  }

  to (val) {
    if (val == null) {
      return this._to
    }

    this._to = this._set(val)
    return this
  }

  type (type) {
    // getter
    if (type == null) {
      return this._type
    }

    // setter
    this._type = type
    return this
  }

  _set (value) {
    if (!this._type) {
      var type = typeof value

      if (type === 'number') {
        this.type(_types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])
      } else if (type === 'string') {
        if (_types_Color_js__WEBPACK_IMPORTED_MODULE_3__["default"].isColor(value)) {
          this.type(_types_Color_js__WEBPACK_IMPORTED_MODULE_3__["default"])
        } else if (_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_1__["delimiter"].test(value)) {
          this.type(_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_1__["pathLetters"].test(value)
            ? _types_PathArray_js__WEBPACK_IMPORTED_MODULE_4__["default"]
            : _types_SVGArray_js__WEBPACK_IMPORTED_MODULE_5__["default"]
          )
        } else if (_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_1__["numberAndUnit"].test(value)) {
          this.type(_types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_6__["default"])
        } else {
          this.type(NonMorphable)
        }
      } else if (morphableTypes.indexOf(value.constructor) > -1) {
        this.type(value.constructor)
      } else if (Array.isArray(value)) {
        this.type(_types_SVGArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])
      } else if (type === 'object') {
        this.type(ObjectBag)
      } else {
        this.type(NonMorphable)
      }
    }

    var result = (new this._type(value))
    if (this._type === _types_Color_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      result = this._to ? result[this._to[4]]()
        : this._from ? result[this._from[4]]()
        : result
    }
    result = result.toArray()

    this._morphObj = this._morphObj || new this._type()
    this._context = this._context
      || Array.apply(null, Array(result.length))
        .map(Object)
        .map(function (o) {
          o.done = true
          return o
        })
    return result
  }

  stepper (stepper) {
    if (stepper == null) return this._stepper
    this._stepper = stepper
    return this
  }

  done () {
    var complete = this._context
      .map(this._stepper.done)
      .reduce(function (last, curr) {
        return last && curr
      }, true)
    return complete
  }

  at (pos) {
    var _this = this

    return this._morphObj.fromArray(
      this._from.map(function (i, index) {
        return _this._stepper.step(i, _this._to[index], pos, _this._context[index], _this._context)
      })
    )
  }
}

class NonMorphable {
  constructor (...args) {
    this.init(...args)
  }

  init (val) {
    val = Array.isArray(val) ? val[0] : val
    this.value = val
    return this
  }

  valueOf () {
    return this.value
  }

  toArray () {
    return [ this.value ]
  }
}

class TransformBag {
  constructor (...args) {
    this.init(...args)
  }

  init (obj) {
    if (Array.isArray(obj)) {
      obj = {
        scaleX: obj[0],
        scaleY: obj[1],
        shear: obj[2],
        rotate: obj[3],
        translateX: obj[4],
        translateY: obj[5],
        originX: obj[6],
        originY: obj[7]
      }
    }

    Object.assign(this, TransformBag.defaults, obj)
    return this
  }

  toArray () {
    var v = this

    return [
      v.scaleX,
      v.scaleY,
      v.shear,
      v.rotate,
      v.translateX,
      v.translateY,
      v.originX,
      v.originY
    ]
  }
}

TransformBag.defaults = {
  scaleX: 1,
  scaleY: 1,
  shear: 0,
  rotate: 0,
  translateX: 0,
  translateY: 0,
  originX: 0,
  originY: 0
}

class ObjectBag {
  constructor (...args) {
    this.init(...args)
  }

  init (objOrArr) {
    this.values = []

    if (Array.isArray(objOrArr)) {
      this.values = objOrArr
      return
    }

    objOrArr = objOrArr || {}
    var entries = []

    for (let i in objOrArr) {
      entries.push([i, objOrArr[i]])
    }

    entries.sort((a, b) => {
      return a[0] - b[0]
    })

    this.values = entries.reduce((last, curr) => last.concat(curr), [])
    return this
  }

  valueOf () {
    var obj = {}
    var arr = this.values

    for (var i = 0, len = arr.length; i < len; i += 2) {
      obj[arr[i]] = arr[i + 1]
    }

    return obj
  }

  toArray () {
    return this.values
  }
}

const morphableTypes = [
  NonMorphable,
  TransformBag,
  ObjectBag
]

function registerMorphableType (type = []) {
  morphableTypes.push(...[].concat(type))
}

function makeMorphable () {
  Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_2__["extend"])(morphableTypes, {
    to (val) {
      return new Morphable()
        .type(this.constructor)
        .from(this.valueOf())
        .to(val)
    },
    fromArray (arr) {
      this.init(arr)
      return this
    }
  })
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/animation/Queue.js":
/*!**************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/animation/Queue.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Queue; });
class Queue {
  constructor () {
    this._first = null
    this._last = null
  }

  push (value) {
    // An item stores an id and the provided value
    var item = value.next ? value : { value: value, next: null, prev: null }

    // Deal with the queue being empty or populated
    if (this._last) {
      item.prev = this._last
      this._last.next = item
      this._last = item
    } else {
      this._last = item
      this._first = item
    }

    // Return the current item
    return item
  }

  shift () {
    // Check if we have a value
    var remove = this._first
    if (!remove) return null

    // If we do, remove it and relink things
    this._first = remove.next
    if (this._first) this._first.prev = null
    this._last = this._first ? this._last : null
    return remove.value
  }

  // Shows us the first item in the list
  first () {
    return this._first && this._first.value
  }

  // Shows us the last item in the list
  last () {
    return this._last && this._last.value
  }

  // Removes the item that was returned from the push
  remove (item) {
    // Relink the previous item
    if (item.prev) item.prev.next = item.next
    if (item.next) item.next.prev = item.prev
    if (item === this._last) this._last = item.prev
    if (item === this._first) this._first = item.next

    // Invalidate item
    item.prev = null
    item.next = null
  }
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/animation/Runner.js":
/*!***************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/animation/Runner.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Runner; });
/* harmony import */ var _Controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller.js */ "./node_modules/@svgdotjs/svg.js/src/animation/Controller.js");
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _modules_core_gradiented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/core/gradiented.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/gradiented.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/@svgdotjs/svg.js/src/utils/utils.js");
/* harmony import */ var _modules_core_defaults_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/core/defaults.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/defaults.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _modules_core_circled_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/core/circled.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/circled.js");
/* harmony import */ var _Animator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Animator.js */ "./node_modules/@svgdotjs/svg.js/src/animation/Animator.js");
/* harmony import */ var _types_Box_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../types/Box.js */ "./node_modules/@svgdotjs/svg.js/src/types/Box.js");
/* harmony import */ var _types_EventTarget_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../types/EventTarget.js */ "./node_modules/@svgdotjs/svg.js/src/types/EventTarget.js");
/* harmony import */ var _types_Matrix_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../types/Matrix.js */ "./node_modules/@svgdotjs/svg.js/src/types/Matrix.js");
/* harmony import */ var _Morphable_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Morphable.js */ "./node_modules/@svgdotjs/svg.js/src/animation/Morphable.js");
/* harmony import */ var _types_Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../types/Point.js */ "./node_modules/@svgdotjs/svg.js/src/types/Point.js");
/* harmony import */ var _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../types/SVGNumber.js */ "./node_modules/@svgdotjs/svg.js/src/types/SVGNumber.js");
/* harmony import */ var _Timeline_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Timeline.js */ "./node_modules/@svgdotjs/svg.js/src/animation/Timeline.js");
















class Runner extends _types_EventTarget_js__WEBPACK_IMPORTED_MODULE_9__["default"] {
  constructor (options) {
    super()

    // Store a unique id on the runner, so that we can identify it later
    this.id = Runner.id++

    // Ensure a default value
    options = options == null
      ? _modules_core_defaults_js__WEBPACK_IMPORTED_MODULE_4__["timeline"].duration
      : options

    // Ensure that we get a controller
    options = typeof options === 'function'
      ? new _Controller_js__WEBPACK_IMPORTED_MODULE_0__["Controller"](options)
      : options

    // Declare all of the variables
    this._element = null
    this._timeline = null
    this.done = false
    this._queue = []

    // Work out the stepper and the duration
    this._duration = typeof options === 'number' && options
    this._isDeclarative = options instanceof _Controller_js__WEBPACK_IMPORTED_MODULE_0__["Controller"]
    this._stepper = this._isDeclarative ? options : new _Controller_js__WEBPACK_IMPORTED_MODULE_0__["Ease"]()

    // We copy the current values from the timeline because they can change
    this._history = {}

    // Store the state of the runner
    this.enabled = true
    this._time = 0
    this._lastTime = 0

    // At creation, the runner is in reseted state
    this._reseted = true

    // Save transforms applied to this runner
    this.transforms = new _types_Matrix_js__WEBPACK_IMPORTED_MODULE_10__["default"]()
    this.transformId = 1

    // Looping variables
    this._haveReversed = false
    this._reverse = false
    this._loopsDone = 0
    this._swing = false
    this._wait = 0
    this._times = 1

    this._frameId = null

    // Stores how long a runner is stored after beeing done
    this._persist = this._isDeclarative ? true : null
  }

  /*
  Runner Definitions
  ==================
  These methods help us define the runtime behaviour of the Runner or they
  help us make new runners from the current runner
  */

  element (element) {
    if (element == null) return this._element
    this._element = element
    element._prepareRunner()
    return this
  }

  timeline (timeline) {
    // check explicitly for undefined so we can set the timeline to null
    if (typeof timeline === 'undefined') return this._timeline
    this._timeline = timeline
    return this
  }

  animate (duration, delay, when) {
    var o = Runner.sanitise(duration, delay, when)
    var runner = new Runner(o.duration)
    if (this._timeline) runner.timeline(this._timeline)
    if (this._element) runner.element(this._element)
    return runner.loop(o).schedule(delay, when)
  }

  schedule (timeline, delay, when) {
    // The user doesn't need to pass a timeline if we already have one
    if (!(timeline instanceof _Timeline_js__WEBPACK_IMPORTED_MODULE_14__["default"])) {
      when = delay
      delay = timeline
      timeline = this.timeline()
    }

    // If there is no timeline, yell at the user...
    if (!timeline) {
      throw Error('Runner cannot be scheduled without timeline')
    }

    // Schedule the runner on the timeline provided
    timeline.schedule(this, delay, when)
    return this
  }

  unschedule () {
    var timeline = this.timeline()
    timeline && timeline.unschedule(this)
    return this
  }

  loop (times, swing, wait) {
    // Deal with the user passing in an object
    if (typeof times === 'object') {
      swing = times.swing
      wait = times.wait
      times = times.times
    }

    // Sanitise the values and store them
    this._times = times || Infinity
    this._swing = swing || false
    this._wait = wait || 0

    // Allow true to be passed
    if (this._times === true) { this._times = Infinity }

    return this
  }

  delay (delay) {
    return this.animate(0, delay)
  }

  /*
  Basic Functionality
  ===================
  These methods allow us to attach basic functions to the runner directly
  */

  queue (initFn, runFn, retargetFn, isTransform) {
    this._queue.push({
      initialiser: initFn || _modules_core_defaults_js__WEBPACK_IMPORTED_MODULE_4__["noop"],
      runner: runFn || _modules_core_defaults_js__WEBPACK_IMPORTED_MODULE_4__["noop"],
      retarget: retargetFn,
      isTransform: isTransform,
      initialised: false,
      finished: false
    })
    var timeline = this.timeline()
    timeline && this.timeline()._continue()
    return this
  }

  during (fn) {
    return this.queue(null, fn)
  }

  after (fn) {
    return this.on('finished', fn)
  }

  /*
  Runner animation methods
  ========================
  Control how the animation plays
  */

  time (time) {
    if (time == null) {
      return this._time
    }
    let dt = time - this._time
    this.step(dt)
    return this
  }

  duration () {
    return this._times * (this._wait + this._duration) - this._wait
  }

  loops (p) {
    var loopDuration = this._duration + this._wait
    if (p == null) {
      var loopsDone = Math.floor(this._time / loopDuration)
      var relativeTime = (this._time - loopsDone * loopDuration)
      var position = relativeTime / this._duration
      return Math.min(loopsDone + position, this._times)
    }
    var whole = Math.floor(p)
    var partial = p % 1
    var time = loopDuration * whole + this._duration * partial
    return this.time(time)
  }

  persist (dtOrForever) {
    if (dtOrForever == null) return this._persist
    this._persist = dtOrForever
    return this
  }

  position (p) {
    // Get all of the variables we need
    var x = this._time
    var d = this._duration
    var w = this._wait
    var t = this._times
    var s = this._swing
    var r = this._reverse
    var position

    if (p == null) {
      /*
      This function converts a time to a position in the range [0, 1]
      The full explanation can be found in this desmos demonstration
        https://www.desmos.com/calculator/u4fbavgche
      The logic is slightly simplified here because we can use booleans
      */

      // Figure out the value without thinking about the start or end time
      const f = function (x) {
        var swinging = s * Math.floor(x % (2 * (w + d)) / (w + d))
        var backwards = (swinging && !r) || (!swinging && r)
        var uncliped = Math.pow(-1, backwards) * (x % (w + d)) / d + backwards
        var clipped = Math.max(Math.min(uncliped, 1), 0)
        return clipped
      }

      // Figure out the value by incorporating the start time
      var endTime = t * (w + d) - w
      position = x <= 0 ? Math.round(f(1e-5))
        : x < endTime ? f(x)
        : Math.round(f(endTime - 1e-5))
      return position
    }

    // Work out the loops done and add the position to the loops done
    var loopsDone = Math.floor(this.loops())
    var swingForward = s && (loopsDone % 2 === 0)
    var forwards = (swingForward && !r) || (r && swingForward)
    position = loopsDone + (forwards ? p : 1 - p)
    return this.loops(position)
  }

  progress (p) {
    if (p == null) {
      return Math.min(1, this._time / this.duration())
    }
    return this.time(p * this.duration())
  }

  step (dt) {
    // If we are inactive, this stepper just gets skipped
    if (!this.enabled) return this

    // Update the time and get the new position
    dt = dt == null ? 16 : dt
    this._time += dt
    var position = this.position()

    // Figure out if we need to run the stepper in this frame
    var running = this._lastPosition !== position && this._time >= 0
    this._lastPosition = position

    // Figure out if we just started
    var duration = this.duration()
    var justStarted = this._lastTime <= 0 && this._time > 0
    var justFinished = this._lastTime < duration && this._time >= duration

    this._lastTime = this._time
    if (justStarted) {
      this.fire('start', this)
    }

    // Work out if the runner is finished set the done flag here so animations
    // know, that they are running in the last step (this is good for
    // transformations which can be merged)
    var declarative = this._isDeclarative
    this.done = !declarative && !justFinished && this._time >= duration

    // Runner is running. So its not in reseted state anymore
    this._reseted = false

    // Call initialise and the run function
    if (running || declarative) {
      this._initialise(running)

      // clear the transforms on this runner so they dont get added again and again
      this.transforms = new _types_Matrix_js__WEBPACK_IMPORTED_MODULE_10__["default"]()
      var converged = this._run(declarative ? dt : position)

      this.fire('step', this)
    }
    // correct the done flag here
    // declaritive animations itself know when they converged
    this.done = this.done || (converged && declarative)
    if (justFinished) {
      this.fire('finished', this)
    }
    return this
  }

  reset () {
    if (this._reseted) return this
    this.time(0)
    this._reseted = true
    return this
  }

  finish () {
    return this.step(Infinity)
  }

  reverse (reverse) {
    this._reverse = reverse == null ? !this._reverse : reverse
    return this
  }

  ease (fn) {
    this._stepper = new _Controller_js__WEBPACK_IMPORTED_MODULE_0__["Ease"](fn)
    return this
  }

  active (enabled) {
    if (enabled == null) return this.enabled
    this.enabled = enabled
    return this
  }

  /*
  Private Methods
  ===============
  Methods that shouldn't be used externally
  */

  // Save a morpher to the morpher list so that we can retarget it later
  _rememberMorpher (method, morpher) {
    this._history[method] = {
      morpher: morpher,
      caller: this._queue[this._queue.length - 1]
    }

    // We have to resume the timeline in case a controller
    // is already done without beeing ever run
    // This can happen when e.g. this is done:
    //    anim = el.animate(new SVG.Spring)
    // and later
    //    anim.move(...)
    if (this._isDeclarative) {
      var timeline = this.timeline()
      timeline && timeline.play()
    }
  }

  // Try to set the target for a morpher if the morpher exists, otherwise
  // do nothing and return false
  _tryRetarget (method, target, extra) {
    if (this._history[method]) {
      // if the last method wasnt even initialised, throw it away
      if (!this._history[method].caller.initialised) {
        let index = this._queue.indexOf(this._history[method].caller)
        this._queue.splice(index, 1)
        return false
      }

      // for the case of transformations, we use the special retarget function
      // which has access to the outer scope
      if (this._history[method].caller.retarget) {
        this._history[method].caller.retarget(target, extra)
        // for everything else a simple morpher change is sufficient
      } else {
        this._history[method].morpher.to(target)
      }

      this._history[method].caller.finished = false
      var timeline = this.timeline()
      timeline && timeline.play()
      return true
    }
    return false
  }

  // Run each initialise function in the runner if required
  _initialise (running) {
    // If we aren't running, we shouldn't initialise when not declarative
    if (!running && !this._isDeclarative) return

    // Loop through all of the initialisers
    for (var i = 0, len = this._queue.length; i < len; ++i) {
      // Get the current initialiser
      var current = this._queue[i]

      // Determine whether we need to initialise
      var needsIt = this._isDeclarative || (!current.initialised && running)
      running = !current.finished

      // Call the initialiser if we need to
      if (needsIt && running) {
        current.initialiser.call(this)
        current.initialised = true
      }
    }
  }

  // Run each run function for the position or dt given
  _run (positionOrDt) {
    // Run all of the _queue directly
    var allfinished = true
    for (var i = 0, len = this._queue.length; i < len; ++i) {
      // Get the current function to run
      var current = this._queue[i]

      // Run the function if its not finished, we keep track of the finished
      // flag for the sake of declarative _queue
      var converged = current.runner.call(this, positionOrDt)
      current.finished = current.finished || (converged === true)
      allfinished = allfinished && current.finished
    }

    // We report when all of the constructors are finished
    return allfinished
  }

  addTransform (transform, index) {
    this.transforms.lmultiplyO(transform)
    return this
  }

  clearTransform () {
    this.transforms = new _types_Matrix_js__WEBPACK_IMPORTED_MODULE_10__["default"]()
    return this
  }

  // TODO: Keep track of all transformations so that deletion is faster
  clearTransformsFromQueue () {
    if (!this.done || !this._timeline || !this._timeline._runnerIds.includes(this.id)) {
      this._queue = this._queue.filter((item) => {
        return !item.isTransform
      })
    }
  }

  static sanitise (duration, delay, when) {
    // Initialise the default parameters
    var times = 1
    var swing = false
    var wait = 0
    duration = duration || _modules_core_defaults_js__WEBPACK_IMPORTED_MODULE_4__["timeline"].duration
    delay = delay || _modules_core_defaults_js__WEBPACK_IMPORTED_MODULE_4__["timeline"].delay
    when = when || 'last'

    // If we have an object, unpack the values
    if (typeof duration === 'object' && !(duration instanceof _Controller_js__WEBPACK_IMPORTED_MODULE_0__["Stepper"])) {
      delay = duration.delay || delay
      when = duration.when || when
      swing = duration.swing || swing
      times = duration.times || times
      wait = duration.wait || wait
      duration = duration.duration || _modules_core_defaults_js__WEBPACK_IMPORTED_MODULE_4__["timeline"].duration
    }

    return {
      duration: duration,
      delay: delay,
      swing: swing,
      times: times,
      wait: wait,
      when: when
    }
  }
}

Runner.id = 0

class FakeRunner {
  constructor (transforms = new _types_Matrix_js__WEBPACK_IMPORTED_MODULE_10__["default"](), id = -1, done = true) {
    this.transforms = transforms
    this.id = id
    this.done = done
  }

  clearTransformsFromQueue () { }
}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["extend"])([ Runner, FakeRunner ], {
  mergeWith (runner) {
    return new FakeRunner(
      runner.transforms.lmultiply(this.transforms),
      runner.id
    )
  }
})

// FakeRunner.emptyRunner = new FakeRunner()

const lmultiply = (last, curr) => last.lmultiplyO(curr)
const getRunnerTransform = (runner) => runner.transforms

function mergeTransforms () {
  // Find the matrix to apply to the element and apply it
  let runners = this._transformationRunners.runners
  let netTransform = runners
    .map(getRunnerTransform)
    .reduce(lmultiply, new _types_Matrix_js__WEBPACK_IMPORTED_MODULE_10__["default"]())

  this.transform(netTransform)

  this._transformationRunners.merge()

  if (this._transformationRunners.length() === 1) {
    this._frameId = null
  }
}

class RunnerArray {
  constructor () {
    this.runners = []
    this.ids = []
  }

  add (runner) {
    if (this.runners.includes(runner)) return
    let id = runner.id + 1

    this.runners.push(runner)
    this.ids.push(id)

    return this
  }

  getByID (id) {
    return this.runners[this.ids.indexOf(id + 1)]
  }

  remove (id) {
    let index = this.ids.indexOf(id + 1)
    this.ids.splice(index, 1)
    this.runners.splice(index, 1)
    return this
  }

  merge () {
    let lastRunner = null
    this.runners.forEach((runner, i) => {

      const condition = lastRunner
        && runner.done && lastRunner.done
        // don't merge runner when persisted on timeline
        && (!runner._timeline || !runner._timeline._runnerIds.includes(runner.id))
        && (!lastRunner._timeline || !lastRunner._timeline._runnerIds.includes(lastRunner.id))

      if (condition) {
        // the +1 happens in the function
        this.remove(runner.id)
        this.edit(lastRunner.id, runner.mergeWith(lastRunner))
      }

      lastRunner = runner
    })

    return this
  }

  edit (id, newRunner) {
    let index = this.ids.indexOf(id + 1)
    this.ids.splice(index, 1, id + 1)
    this.runners.splice(index, 1, newRunner)
    return this
  }

  length () {
    return this.ids.length
  }

  clearBefore (id) {
    let deleteCnt = this.ids.indexOf(id + 1) || 1
    this.ids.splice(0, deleteCnt, 0)
    this.runners.splice(0, deleteCnt, new FakeRunner())
      .forEach((r) => r.clearTransformsFromQueue())
    return this
  }
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_5__["registerMethods"])({
  Element: {
    animate (duration, delay, when) {
      var o = Runner.sanitise(duration, delay, when)
      var timeline = this.timeline()
      return new Runner(o.duration)
        .loop(o)
        .element(this)
        .timeline(timeline.play())
        .schedule(delay, when)
    },

    delay (by, when) {
      return this.animate(0, by, when)
    },

    // this function searches for all runners on the element and deletes the ones
    // which run before the current one. This is because absolute transformations
    // overwfrite anything anyway so there is no need to waste time computing
    // other runners
    _clearTransformRunnersBefore (currentRunner) {
      this._transformationRunners.clearBefore(currentRunner.id)
    },

    _currentTransform (current) {
      return this._transformationRunners.runners
        // we need the equal sign here to make sure, that also transformations
        // on the same runner which execute before the current transformation are
        // taken into account
        .filter((runner) => runner.id <= current.id)
        .map(getRunnerTransform)
        .reduce(lmultiply, new _types_Matrix_js__WEBPACK_IMPORTED_MODULE_10__["default"]())
    },

    _addRunner (runner) {
      this._transformationRunners.add(runner)

      // Make sure that the runner merge is executed at the very end of
      // all Animator functions. Thats why we use immediate here to execute
      // the merge right after all frames are run
      _Animator_js__WEBPACK_IMPORTED_MODULE_7__["default"].cancelImmediate(this._frameId)
      this._frameId = _Animator_js__WEBPACK_IMPORTED_MODULE_7__["default"].immediate(mergeTransforms.bind(this))
    },

    _prepareRunner () {
      if (this._frameId == null) {
        this._transformationRunners = new RunnerArray()
          .add(new FakeRunner(new _types_Matrix_js__WEBPACK_IMPORTED_MODULE_10__["default"](this)))
      }
    }
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["extend"])(Runner, {
  attr (a, v) {
    return this.styleAttr('attr', a, v)
  },

  // Add animatable styles
  css (s, v) {
    return this.styleAttr('css', s, v)
  },

  styleAttr (type, name, val) {
    // apply attributes individually
    if (typeof name === 'object') {
      for (var key in name) {
        this.styleAttr(type, key, name[key])
      }
      return this
    }

    var morpher = new _Morphable_js__WEBPACK_IMPORTED_MODULE_11__["default"](this._stepper).to(val)

    this.queue(function () {
      morpher = morpher.from(this.element()[type](name))
    }, function (pos) {
      this.element()[type](name, morpher.at(pos))
      return morpher.done()
    })

    return this
  },

  zoom (level, point) {
    if (this._tryRetarget('zoom', _modules_core_gradiented_js__WEBPACK_IMPORTED_MODULE_2__["to"], point)) return this

    var morpher = new _Morphable_js__WEBPACK_IMPORTED_MODULE_11__["default"](this._stepper).to(new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_13__["default"](level))

    this.queue(function () {
      morpher = morpher.from(this.element().zoom())
    }, function (pos) {
      this.element().zoom(morpher.at(pos), point)
      return morpher.done()
    }, function (newLevel, newPoint) {
      point = newPoint
      morpher.to(newLevel)
    })

    this._rememberMorpher('zoom', morpher)
    return this
  },

  /**
   ** absolute transformations
   **/

  //
  // M v -----|-----(D M v = F v)------|----->  T v
  //
  // 1. define the final state (T) and decompose it (once)
  //    t = [tx, ty, the, lam, sy, sx]
  // 2. on every frame: pull the current state of all previous transforms
  //    (M - m can change)
  //   and then write this as m = [tx0, ty0, the0, lam0, sy0, sx0]
  // 3. Find the interpolated matrix F(pos) = m + pos * (t - m)
  //   - Note F(0) = M
  //   - Note F(1) = T
  // 4. Now you get the delta matrix as a result: D = F * inv(M)

  transform (transforms, relative, affine) {
    // If we have a declarative function, we should retarget it if possible
    relative = transforms.relative || relative
    if (this._isDeclarative && !relative && this._tryRetarget('transform', transforms)) {
      return this
    }

    // Parse the parameters
    var isMatrix = _types_Matrix_js__WEBPACK_IMPORTED_MODULE_10__["default"].isMatrixLike(transforms)
    affine = transforms.affine != null
      ? transforms.affine
      : (affine != null ? affine : !isMatrix)

    // Create a morepher and set its type
    const morpher = new _Morphable_js__WEBPACK_IMPORTED_MODULE_11__["default"](this._stepper)
      .type(affine ? _Morphable_js__WEBPACK_IMPORTED_MODULE_11__["TransformBag"] : _types_Matrix_js__WEBPACK_IMPORTED_MODULE_10__["default"])

    let origin
    let element
    let current
    let currentAngle
    let startTransform

    function setup () {
      // make sure element and origin is defined
      element = element || this.element()
      origin = origin || Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["getOrigin"])(transforms, element)

      startTransform = new _types_Matrix_js__WEBPACK_IMPORTED_MODULE_10__["default"](relative ? undefined : element)

      // add the runner to the element so it can merge transformations
      element._addRunner(this)

      // Deactivate all transforms that have run so far if we are absolute
      if (!relative) {
        element._clearTransformRunnersBefore(this)
      }
    }

    function run (pos) {
      // clear all other transforms before this in case something is saved
      // on this runner. We are absolute. We dont need these!
      if (!relative) this.clearTransform()

      let { x, y } = new _types_Point_js__WEBPACK_IMPORTED_MODULE_12__["default"](origin).transform(element._currentTransform(this))

      let target = new _types_Matrix_js__WEBPACK_IMPORTED_MODULE_10__["default"]({ ...transforms, origin: [ x, y ] })
      let start = this._isDeclarative && current
        ? current
        : startTransform

      if (affine) {
        target = target.decompose(x, y)
        start = start.decompose(x, y)

        // Get the current and target angle as it was set
        const rTarget = target.rotate
        const rCurrent = start.rotate

        // Figure out the shortest path to rotate directly
        const possibilities = [ rTarget - 360, rTarget, rTarget + 360 ]
        const distances = possibilities.map(a => Math.abs(a - rCurrent))
        const shortest = Math.min(...distances)
        const index = distances.indexOf(shortest)
        target.rotate = possibilities[index]
      }

      if (relative) {
        // we have to be careful here not to overwrite the rotation
        // with the rotate method of Matrix
        if (!isMatrix) {
          target.rotate = transforms.rotate || 0
        }
        if (this._isDeclarative && currentAngle) {
          start.rotate = currentAngle
        }
      }

      morpher.from(start)
      morpher.to(target)

      let affineParameters = morpher.at(pos)
      currentAngle = affineParameters.rotate
      current = new _types_Matrix_js__WEBPACK_IMPORTED_MODULE_10__["default"](affineParameters)

      this.addTransform(current)
      element._addRunner(this)
      return morpher.done()
    }

    function retarget (newTransforms) {
      // only get a new origin if it changed since the last call
      if (
        (newTransforms.origin || 'center').toString()
        !== (transforms.origin || 'center').toString()
      ) {
        origin = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["getOrigin"])(transforms, element)
      }

      // overwrite the old transformations with the new ones
      transforms = { ...newTransforms, origin }
    }

    this.queue(setup, run, retarget, true)
    this._isDeclarative && this._rememberMorpher('transform', morpher)
    return this
  },

  // Animatable x-axis
  x (x, relative) {
    return this._queueNumber('x', x)
  },

  // Animatable y-axis
  y (y) {
    return this._queueNumber('y', y)
  },

  dx (x) {
    return this._queueNumberDelta('x', x)
  },

  dy (y) {
    return this._queueNumberDelta('y', y)
  },

  _queueNumberDelta (method, to) {
    to = new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_13__["default"](to)

    // Try to change the target if we have this method already registerd
    if (this._tryRetarget(method, to)) return this

    // Make a morpher and queue the animation
    var morpher = new _Morphable_js__WEBPACK_IMPORTED_MODULE_11__["default"](this._stepper).to(to)
    var from = null
    this.queue(function () {
      from = this.element()[method]()
      morpher.from(from)
      morpher.to(from + to)
    }, function (pos) {
      this.element()[method](morpher.at(pos))
      return morpher.done()
    }, function (newTo) {
      morpher.to(from + new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_13__["default"](newTo))
    })

    // Register the morpher so that if it is changed again, we can retarget it
    this._rememberMorpher(method, morpher)
    return this
  },

  _queueObject (method, to) {
    // Try to change the target if we have this method already registerd
    if (this._tryRetarget(method, to)) return this

    // Make a morpher and queue the animation
    var morpher = new _Morphable_js__WEBPACK_IMPORTED_MODULE_11__["default"](this._stepper).to(to)
    this.queue(function () {
      morpher.from(this.element()[method]())
    }, function (pos) {
      this.element()[method](morpher.at(pos))
      return morpher.done()
    })

    // Register the morpher so that if it is changed again, we can retarget it
    this._rememberMorpher(method, morpher)
    return this
  },

  _queueNumber (method, value) {
    return this._queueObject(method, new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_13__["default"](value))
  },

  // Animatable center x-axis
  cx (x) {
    return this._queueNumber('cx', x)
  },

  // Animatable center y-axis
  cy (y) {
    return this._queueNumber('cy', y)
  },

  // Add animatable move
  move (x, y) {
    return this.x(x).y(y)
  },

  // Add animatable center
  center (x, y) {
    return this.cx(x).cy(y)
  },

  // Add animatable size
  size (width, height) {
    // animate bbox based size for all other elements
    var box

    if (!width || !height) {
      box = this._element.bbox()
    }

    if (!width) {
      width = box.width / box.height * height
    }

    if (!height) {
      height = box.height / box.width * width
    }

    return this
      .width(width)
      .height(height)
  },

  // Add animatable width
  width (width) {
    return this._queueNumber('width', width)
  },

  // Add animatable height
  height (height) {
    return this._queueNumber('height', height)
  },

  // Add animatable plot
  plot (a, b, c, d) {
    // Lines can be plotted with 4 arguments
    if (arguments.length === 4) {
      return this.plot([ a, b, c, d ])
    }

    if (this._tryRetarget('plot', a)) return this

    var morpher = new _Morphable_js__WEBPACK_IMPORTED_MODULE_11__["default"](this._stepper)
      .type(this._element.MorphArray).to(a)

    this.queue(function () {
      morpher.from(this._element.array())
    }, function (pos) {
      this._element.plot(morpher.at(pos))
      return morpher.done()
    })

    this._rememberMorpher('plot', morpher)
    return this
  },

  // Add leading method
  leading (value) {
    return this._queueNumber('leading', value)
  },

  // Add animatable viewbox
  viewbox (x, y, width, height) {
    return this._queueObject('viewbox', new _types_Box_js__WEBPACK_IMPORTED_MODULE_8__["default"](x, y, width, height))
  },

  update (o) {
    if (typeof o !== 'object') {
      return this.update({
        offset: arguments[0],
        color: arguments[1],
        opacity: arguments[2]
      })
    }

    if (o.opacity != null) this.attr('stop-opacity', o.opacity)
    if (o.color != null) this.attr('stop-color', o.color)
    if (o.offset != null) this.attr('offset', o.offset)

    return this
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["extend"])(Runner, { rx: _modules_core_circled_js__WEBPACK_IMPORTED_MODULE_6__["rx"], ry: _modules_core_circled_js__WEBPACK_IMPORTED_MODULE_6__["ry"], from: _modules_core_gradiented_js__WEBPACK_IMPORTED_MODULE_2__["from"], to: _modules_core_gradiented_js__WEBPACK_IMPORTED_MODULE_2__["to"] })
Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["register"])(Runner, 'Runner')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/animation/Timeline.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/animation/Timeline.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timeline; });
/* harmony import */ var _utils_window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/window.js */ "./node_modules/@svgdotjs/svg.js/src/utils/window.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _Animator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Animator.js */ "./node_modules/@svgdotjs/svg.js/src/animation/Animator.js");
/* harmony import */ var _types_EventTarget_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/EventTarget.js */ "./node_modules/@svgdotjs/svg.js/src/types/EventTarget.js");





var makeSchedule = function (runnerInfo) {
  var start = runnerInfo.start
  var duration = runnerInfo.runner.duration()
  var end = start + duration
  return { start: start, duration: duration, end: end, runner: runnerInfo.runner }
}

const defaultSource = function () {
  let w = _utils_window_js__WEBPACK_IMPORTED_MODULE_0__["globals"].window
  return (w.performance || w.Date).now()
}

class Timeline extends _types_EventTarget_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  // Construct a new timeline on the given element
  constructor (timeSource = defaultSource) {
    super()

    this._timeSource = timeSource

    // Store the timing variables
    this._startTime = 0
    this._speed = 1.0

    // Determines how long a runner is hold in memory. Can be a dt or true/false
    this._persist = 0

    // Keep track of the running animations and their starting parameters
    this._nextFrame = null
    this._paused = true
    this._runners = []
    this._runnerIds = []
    this._lastRunnerId = -1
    this._time = 0
    this._lastSourceTime = 0
    this._lastStepTime = 0

    // Make sure that step is always called in class context
    this._step = this._stepFn.bind(this, false)
    this._stepImmediate = this._stepFn.bind(this, true)
  }

  // schedules a runner on the timeline
  schedule (runner, delay, when) {
    if (runner == null) {
      return this._runners.map(makeSchedule)
    }

    // The start time for the next animation can either be given explicitly,
    // derived from the current timeline time or it can be relative to the
    // last start time to chain animations direclty

    var absoluteStartTime = 0
    var endTime = this.getEndTime()
    delay = delay || 0

    // Work out when to start the animation
    if (when == null || when === 'last' || when === 'after') {
      // Take the last time and increment
      absoluteStartTime = endTime
    } else if (when === 'absolute' || when === 'start') {
      absoluteStartTime = delay
      delay = 0
    } else if (when === 'now') {
      absoluteStartTime = this._time
    } else if (when === 'relative') {
      let runnerInfo = this._runners[runner.id]
      if (runnerInfo) {
        absoluteStartTime = runnerInfo.start + delay
        delay = 0
      }
    } else {
      throw new Error('Invalid value for the "when" parameter')
    }

    // Manage runner
    runner.unschedule()
    runner.timeline(this)

    const persist = runner.persist()
    const runnerInfo = {
      persist: persist === null ? this._persist : persist,
      start: absoluteStartTime + delay,
      runner
    }

    this._lastRunnerId = runner.id

    this._runners.push(runnerInfo)
    this._runners.sort((a, b) => a.start - b.start)
    this._runnerIds = this._runners.map(info => info.runner.id)

    this.updateTime()._continue()
    return this
  }

  // Remove the runner from this timeline
  unschedule (runner) {
    var index = this._runnerIds.indexOf(runner.id)
    if (index < 0) return this

    this._runners.splice(index, 1)
    this._runnerIds.splice(index, 1)

    runner.timeline(null)
    return this
  }

  // Calculates the end of the timeline
  getEndTime () {
    var lastRunnerInfo = this._runners[this._runnerIds.indexOf(this._lastRunnerId)]
    var lastDuration = lastRunnerInfo ? lastRunnerInfo.runner.duration() : 0
    var lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : 0
    return lastStartTime + lastDuration
  }

  getEndTimeOfTimeline () {
    let lastEndTime = 0
    for (var i = 0; i < this._runners.length; i++) {
      let runnerInfo = this._runners[i]
      var duration = runnerInfo ? runnerInfo.runner.duration() : 0
      var startTime = runnerInfo ? runnerInfo.start : 0
      let endTime = startTime + duration
      if (endTime > lastEndTime) {
        lastEndTime = endTime
      }
    }
    return lastEndTime
  }

  // Makes sure, that after pausing the time doesn't jump
  updateTime () {
    if (!this.active()) {
      this._lastSourceTime = this._timeSource()
    }
    return this
  }

  play () {
    // Now make sure we are not paused and continue the animation
    this._paused = false
    return this.updateTime()._continue()
  }

  pause () {
    this._paused = true
    return this._continue()
  }

  stop () {
    // Go to start and pause
    this.time(0)
    return this.pause()
  }

  finish () {
    // Go to end and pause
    this.time(this.getEndTimeOfTimeline() + 1)
    return this.pause()
  }

  speed (speed) {
    if (speed == null) return this._speed
    this._speed = speed
    return this
  }

  reverse (yes) {
    var currentSpeed = this.speed()
    if (yes == null) return this.speed(-currentSpeed)

    var positive = Math.abs(currentSpeed)
    return this.speed(yes ? positive : -positive)
  }

  seek (dt) {
    return this.time(this._time + dt)
  }

  time (time) {
    if (time == null) return this._time
    this._time = time
    return this._continue(true)
  }

  persist (dtOrForever) {
    if (dtOrForever == null) return this._persist
    this._persist = dtOrForever
    return this
  }

  source (fn) {
    if (fn == null) return this._timeSource
    this._timeSource = fn
    return this
  }

  _stepFn (immediateStep = false) {
    // Get the time delta from the last time and update the time
    var time = this._timeSource()
    var dtSource = time - this._lastSourceTime

    if (immediateStep) dtSource = 0

    var dtTime = this._speed * dtSource + (this._time - this._lastStepTime)
    this._lastSourceTime = time

    // Only update the time if we use the timeSource.
    // Otherwise use the current time
    if (!immediateStep) {
      // Update the time
      this._time += dtTime
      this._time = this._time < 0 ? 0 : this._time
    }
    this._lastStepTime = this._time
    this.fire('time', this._time)

    // This is for the case that the timeline was seeked so that the time
    // is now before the startTime of the runner. Thats why we need to set
    // the runner to position 0

    // FIXME:
    // However, reseting in insertion order leads to bugs. Considering the case,
    // where 2 runners change the same attriute but in different times,
    // reseting both of them will lead to the case where the later defined
    // runner always wins the reset even if the other runner started earlier
    // and therefore should win the attribute battle
    // this can be solved by reseting them backwards
    for (var k = this._runners.length; k--;) {
      // Get and run the current runner and ignore it if its inactive
      let runnerInfo = this._runners[k]
      let runner = runnerInfo.runner

      // Make sure that we give the actual difference
      // between runner start time and now
      let dtToStart = this._time - runnerInfo.start

      // Dont run runner if not started yet
      // and try to reset it
      if (dtToStart <= 0) {
        runner.reset()
      }
    }

    // Run all of the runners directly
    var runnersLeft = false
    for (var i = 0, len = this._runners.length; i < len; i++) {
      // Get and run the current runner and ignore it if its inactive
      let runnerInfo = this._runners[i]
      let runner = runnerInfo.runner
      let dt = dtTime

      // Make sure that we give the actual difference
      // between runner start time and now
      let dtToStart = this._time - runnerInfo.start

      // Dont run runner if not started yet
      if (dtToStart <= 0) {
        runnersLeft = true
        continue
      } else if (dtToStart < dt) {
        // Adjust dt to make sure that animation is on point
        dt = dtToStart
      }

      if (!runner.active()) continue

      // If this runner is still going, signal that we need another animation
      // frame, otherwise, remove the completed runner
      var finished = runner.step(dt).done
      if (!finished) {
        runnersLeft = true
        // continue
      } else if (runnerInfo.persist !== true) {
        // runner is finished. And runner might get removed
        var endTime = runner.duration() - runner.time() + this._time

        if (endTime + runnerInfo.persist < this._time) {
          // Delete runner and correct index
          runner.unschedule()
          --i
          --len
        }
      }
    }

    // Basically: we continue when there are runners right from us in time
    // when -->, and when runners are left from us when <--
    if ((runnersLeft && !(this._speed < 0 && this._time === 0)) || (this._runnerIds.length && this._speed < 0 && this._time > 0)) {
      this._continue()
    } else {
      this.pause()
      this.fire('finished')
    }

    return this
  }

  // Checks if we are running and continues the animation
  _continue (immediateStep = false) {
    _Animator_js__WEBPACK_IMPORTED_MODULE_2__["default"].cancelFrame(this._nextFrame)
    this._nextFrame = null

    if (immediateStep) return this._stepImmediate()
    if (this._paused) return this

    this._nextFrame = _Animator_js__WEBPACK_IMPORTED_MODULE_2__["default"].frame(this._step)
    return this
  }

  active () {
    return !!this._nextFrame
  }
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])({
  Element: {
    timeline: function (timeline) {
      if (timeline == null) {
        this._timeline = (this._timeline || new Timeline())
        return this._timeline
      } else {
        this._timeline = timeline
        return this
      }
    }
  }
})


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/A.js":
/*!*********************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/A.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return A; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/core/namespaces.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/namespaces.js");
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Container.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Container.js");





class A extends _Container_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('a', node), node)
  }

  // Link url
  to (url) {
    return this.attr('href', url, _modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_2__["xlink"])
  }

  // Link target attribute
  target (target) {
    return this.attr('target', target)
  }
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])({
  Container: {
    // Create a hyperlink element
    link: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (url) {
      return this.put(new A()).to(url)
    })
  },
  Element: {
    // Create a hyperlink element
    linkTo: function (url) {
      var link = new A()

      if (typeof url === 'function') {
        url.call(link, link)
      } else {
        link.to(url)
      }

      return this.parent().put(link).put(this)
    }
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(A, 'A')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Circle.js":
/*!**************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Circle.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Circle; });
/* harmony import */ var _modules_core_circled_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/core/circled.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/circled.js");
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/SVGNumber.js */ "./node_modules/@svgdotjs/svg.js/src/types/SVGNumber.js");
/* harmony import */ var _Shape_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shape.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Shape.js");






class Circle extends _Shape_js__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["nodeOrNew"])('circle', node), node)
  }

  radius (r) {
    return this.attr('r', r)
  }

  // Radius x value
  rx (rx) {
    return this.attr('r', rx)
  }

  // Alias radius x value
  ry (ry) {
    return this.rx(ry)
  }

  size (size) {
    return this.radius(new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_3__["default"](size).divide(2))
  }
}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["extend"])(Circle, { x: _modules_core_circled_js__WEBPACK_IMPORTED_MODULE_0__["x"], y: _modules_core_circled_js__WEBPACK_IMPORTED_MODULE_0__["y"], cx: _modules_core_circled_js__WEBPACK_IMPORTED_MODULE_0__["cx"], cy: _modules_core_circled_js__WEBPACK_IMPORTED_MODULE_0__["cy"], width: _modules_core_circled_js__WEBPACK_IMPORTED_MODULE_0__["width"], height: _modules_core_circled_js__WEBPACK_IMPORTED_MODULE_0__["height"] })

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_2__["registerMethods"])({
  Container: {
    // Create circle element
    circle: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["wrapWithAttrCheck"])(function (size) {
      return this.put(new Circle())
        .size(size)
        .move(0, 0)
    })
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["register"])(Circle, 'Circle')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/ClipPath.js":
/*!****************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/ClipPath.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClipPath; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Container.js");
/* harmony import */ var _modules_core_selector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/core/selector.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/selector.js");





class ClipPath extends _Container_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('clipPath', node), node)
  }

  // Unclip all clipped elements and remove itself
  remove () {
    // unclip all targets
    this.targets().forEach(function (el) {
      el.unclip()
    })

    // remove clipPath from parent
    return super.remove()
  }

  targets () {
    return Object(_modules_core_selector_js__WEBPACK_IMPORTED_MODULE_3__["default"])('svg [clip-path*="' + this.id() + '"]')
  }
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])({
  Container: {
    // Create clipping element
    clip: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function () {
      return this.defs().put(new ClipPath())
    })
  },
  Element: {
    // Distribute clipPath to svg element
    clipWith (element) {
      // use given clip or create a new one
      let clipper = element instanceof ClipPath
        ? element
        : this.parent().clip().add(element)

      // apply mask
      return this.attr('clip-path', 'url("#' + clipper.id() + '")')
    },

    // Unclip element
    unclip () {
      return this.attr('clip-path', null)
    },

    clipper () {
      return this.reference('clip-path')
    }
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(ClipPath, 'ClipPath')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Container.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Container.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Element.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Element.js");



class Container extends _Element_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  flatten (parent) {
    this.each(function () {
      if (this instanceof Container) return this.flatten(parent).ungroup(parent)
      return this.toParent(parent)
    })

    // we need this so that the root does not get removed
    this.node.firstElementChild || this.remove()

    return this
  }

  ungroup (parent) {
    parent = parent || this.parent()

    this.each(function () {
      return this.toParent(parent)
    })

    this.remove()

    return this
  }
}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Container, 'Container')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Defs.js":
/*!************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Defs.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Defs; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Container.js");



class Defs extends _Container_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('defs', node), node)
  }

  flatten () {
    return this
  }
  ungroup () {
    return this
  }
}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Defs, 'Defs')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Dom.js":
/*!***********************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Dom.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dom; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _modules_core_selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/core/selector.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/selector.js");
/* harmony import */ var _utils_window_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/window.js */ "./node_modules/@svgdotjs/svg.js/src/utils/window.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/@svgdotjs/svg.js/src/utils/utils.js");
/* harmony import */ var _modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/core/namespaces.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/namespaces.js");
/* harmony import */ var _types_EventTarget_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/EventTarget.js */ "./node_modules/@svgdotjs/svg.js/src/types/EventTarget.js");
/* harmony import */ var _types_List_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types/List.js */ "./node_modules/@svgdotjs/svg.js/src/types/List.js");
/* harmony import */ var _modules_core_attr_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/core/attr.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/attr.js");









class Dom extends _types_EventTarget_js__WEBPACK_IMPORTED_MODULE_5__["default"] {
  constructor (node, attrs) {
    super(node)
    this.node = node
    this.type = node.nodeName

    if (attrs && node !== attrs) {
      this.attr(attrs)
    }
  }

  // Add given element at a position
  add (element, i) {
    element = Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["makeInstance"])(element)

    if (i == null) {
      this.node.appendChild(element.node)
    } else if (element.node !== this.node.childNodes[i]) {
      this.node.insertBefore(element.node, this.node.childNodes[i])
    }

    return this
  }

  // Add element to given container and return self
  addTo (parent) {
    return Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["makeInstance"])(parent).put(this)
  }

  // Returns all child elements
  children () {
    return new _types_List_js__WEBPACK_IMPORTED_MODULE_6__["default"](Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__["map"])(this.node.children, function (node) {
      return Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["adopt"])(node)
    }))
  }

  // Remove all elements in this container
  clear () {
    // remove children
    while (this.node.hasChildNodes()) {
      this.node.removeChild(this.node.lastChild)
    }

    return this
  }

  // Clone element
  clone () {
    // write dom data to the dom so the clone can pickup the data
    this.writeDataToDom()

    // clone element and assign new id
    return Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["assignNewId"])(this.node.cloneNode(true))
  }

  // Iterates over all children and invokes a given block
  each (block, deep) {
    var children = this.children()
    var i, il

    for (i = 0, il = children.length; i < il; i++) {
      block.apply(children[i], [ i, children ])

      if (deep) {
        children[i].each(block, deep)
      }
    }

    return this
  }

  element (nodeName) {
    return this.put(new Dom(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["create"])(nodeName)))
  }

  // Get first child
  first () {
    return Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["adopt"])(this.node.firstChild)
  }

  // Get a element at the given index
  get (i) {
    return Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["adopt"])(this.node.childNodes[i])
  }

  getEventHolder () {
    return this.node
  }

  getEventTarget () {
    return this.node
  }

  // Checks if the given element is a child
  has (element) {
    return this.index(element) >= 0
  }

  // Get / set id
  id (id) {
    // generate new id if no id set
    if (typeof id === 'undefined' && !this.node.id) {
      this.node.id = Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["eid"])(this.type)
    }

    // dont't set directly width this.node.id to make `null` work correctly
    return this.attr('id', id)
  }

  // Gets index of given element
  index (element) {
    return [].slice.call(this.node.childNodes).indexOf(element.node)
  }

  // Get the last child
  last () {
    return Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["adopt"])(this.node.lastChild)
  }

  // matches the element vs a css selector
  matches (selector) {
    const el = this.node
    return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector)
  }

  // Returns the parent element instance
  parent (type) {
    var parent = this

    // check for parent
    if (!parent.node.parentNode) return null

    // get parent element
    parent = Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["adopt"])(parent.node.parentNode)

    if (!type) return parent

    // loop trough ancestors if type is given
    while (parent) {
      if (typeof type === 'string' ? parent.matches(type) : parent instanceof type) return parent
      if (!parent.node.parentNode || parent.node.parentNode.nodeName === '#document' || parent.node.parentNode.nodeName === '#document-fragment') return null // #759, #720
      parent = Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["adopt"])(parent.node.parentNode)
    }
  }

  // Basically does the same as `add()` but returns the added element instead
  put (element, i) {
    this.add(element, i)
    return element
  }

  // Add element to given container and return container
  putIn (parent) {
    return Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["makeInstance"])(parent).add(this)
  }

  // Remove element
  remove () {
    if (this.parent()) {
      this.parent().removeElement(this)
    }

    return this
  }

  // Remove a given child
  removeElement (element) {
    this.node.removeChild(element.node)

    return this
  }

  // Replace this with element
  replace (element) {
    element = Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["makeInstance"])(element)
    this.node.parentNode.replaceChild(element.node, this.node)
    return element
  }

  round (precision = 2, map) {
    const factor = 10 ** precision
    const attrs = this.attr()

    // If we have no map, build one from attrs
    if (!map) {
      map = Object.keys(attrs)
    }

    // Holds rounded attributes
    const newAttrs = {}
    map.forEach((key) => {
      newAttrs[key] = Math.round(attrs[key] * factor) / factor
    })

    this.attr(newAttrs)
    return this
  }

  // Return id on string conversion
  toString () {
    return this.id()
  }

  // Import raw svg
  svg (svgOrFn, outerHTML) {
    var well, len, fragment

    if (svgOrFn === false) {
      outerHTML = false
      svgOrFn = null
    }

    // act as getter if no svg string is given
    if (svgOrFn == null || typeof svgOrFn === 'function') {
      // The default for exports is, that the outerNode is included
      outerHTML = outerHTML == null ? true : outerHTML

      // write svgjs data to the dom
      this.writeDataToDom()
      let current = this

      // An export modifier was passed
      if (svgOrFn != null) {
        current = Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["adopt"])(current.node.cloneNode(true))

        // If the user wants outerHTML we need to process this node, too
        if (outerHTML) {
          let result = svgOrFn(current)
          current = result || current

          // The user does not want this node? Well, then he gets nothing
          if (result === false) return ''
        }

        // Deep loop through all children and apply modifier
        current.each(function () {
          let result = svgOrFn(this)
          let _this = result || this

          // If modifier returns false, discard node
          if (result === false) {
            this.remove()

            // If modifier returns new node, use it
          } else if (result && this !== _this) {
            this.replace(_this)
          }
        }, true)
      }

      // Return outer or inner content
      return outerHTML
        ? current.node.outerHTML
        : current.node.innerHTML
    }

    // Act as setter if we got a string

    // The default for import is, that the current node is not replaced
    outerHTML = outerHTML == null ? false : outerHTML

    // Create temporary holder
    well = _utils_window_js__WEBPACK_IMPORTED_MODULE_2__["globals"].document.createElementNS(_modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_4__["ns"], 'svg')
    fragment = _utils_window_js__WEBPACK_IMPORTED_MODULE_2__["globals"].document.createDocumentFragment()

    // Dump raw svg
    well.innerHTML = svgOrFn

    // Transplant nodes into the fragment
    for (len = well.children.length; len--;) {
      fragment.appendChild(well.firstElementChild)
    }

    let parent = this.parent()

    // Add the whole fragment at once
    return outerHTML
      ? this.replace(fragment) && parent
      : this.add(fragment)
  }

  words (text) {
    // This is faster than removing all children and adding a new one
    this.node.textContent = text
    return this
  }

  // write svgjs data to the dom
  writeDataToDom () {
    // dump variables recursively
    this.each(function () {
      this.writeDataToDom()
    })

    return this
  }
}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Dom, { attr: _modules_core_attr_js__WEBPACK_IMPORTED_MODULE_7__["default"], find: _modules_core_selector_js__WEBPACK_IMPORTED_MODULE_1__["find"], findOne: _modules_core_selector_js__WEBPACK_IMPORTED_MODULE_1__["findOne"] })
Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Dom, 'Dom')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Element.js":
/*!***************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Element.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Element; });
/* harmony import */ var _types_Box_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/Box.js */ "./node_modules/@svgdotjs/svg.js/src/types/Box.js");
/* harmony import */ var _types_Matrix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/Matrix.js */ "./node_modules/@svgdotjs/svg.js/src/types/Matrix.js");
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_window_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/window.js */ "./node_modules/@svgdotjs/svg.js/src/utils/window.js");
/* harmony import */ var _types_Point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/Point.js */ "./node_modules/@svgdotjs/svg.js/src/types/Point.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/@svgdotjs/svg.js/src/utils/utils.js");
/* harmony import */ var _modules_core_regex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/core/regex.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/regex.js");
/* harmony import */ var _Dom_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dom.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Dom.js");
/* harmony import */ var _types_List_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../types/List.js */ "./node_modules/@svgdotjs/svg.js/src/types/List.js");
/* harmony import */ var _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../types/SVGNumber.js */ "./node_modules/@svgdotjs/svg.js/src/types/SVGNumber.js");











class Element extends _Dom_js__WEBPACK_IMPORTED_MODULE_7__["default"] {
  constructor (node, attrs) {
    super(node, attrs)

    // initialize data object
    this.dom = {}

    // create circular reference
    this.node.instance = this

    if (node.hasAttribute('svgjs:data')) {
      // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
      this.setData(JSON.parse(node.getAttribute('svgjs:data')) || {})
    }
  }

  // Move element by its center
  center (x, y) {
    return this.cx(x).cy(y)
  }

  // Move by center over x-axis
  cx (x) {
    return x == null ? this.x() + this.width() / 2 : this.x(x - this.width() / 2)
  }

  // Move by center over y-axis
  cy (y) {
    return y == null
      ? this.y() + this.height() / 2
      : this.y(y - this.height() / 2)
  }

  // Get defs
  defs () {
    return this.root().defs()
  }

  // Relative move over x and y axes
  dmove (x, y) {
    return this.dx(x).dy(y)
  }

  // Relative move over x axis
  dx (x) {
    return this.x(new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_9__["default"](x).plus(this.x()))
  }

  // Relative move over y axis
  dy (y) {
    return this.y(new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_9__["default"](y).plus(this.y()))
  }

  // Get parent document
  root () {
    let p = this.parent(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_2__["getClass"])(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_2__["root"]))
    return p && p.root()
  }

  getEventHolder () {
    return this
  }

  // Set height of element
  height (height) {
    return this.attr('height', height)
  }

  // Checks whether the given point inside the bounding box of the element
  inside (x, y) {
    let box = this.bbox()

    return x > box.x
      && y > box.y
      && x < box.x + box.width
      && y < box.y + box.height
  }

  // Move element to given x and y values
  move (x, y) {
    return this.x(x).y(y)
  }

  // return array of all ancestors of given type up to the root svg
  parents (until = _utils_window_js__WEBPACK_IMPORTED_MODULE_3__["globals"].document) {
    until = Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_2__["makeInstance"])(until)
    let parents = new _types_List_js__WEBPACK_IMPORTED_MODULE_8__["default"]()
    let parent = this

    while (
      (parent = parent.parent())
      && parent.node !== until.node
      && parent.node !== _utils_window_js__WEBPACK_IMPORTED_MODULE_3__["globals"].document
    ) {
      parents.push(parent)
    }

    return parents
  }

  // Get referenced element form attribute value
  reference (attr) {
    attr = this.attr(attr)
    if (!attr) return null

    const m = attr.match(_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_6__["reference"])
    return m ? Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_2__["makeInstance"])(m[1]) : null
  }

  // set given data to the elements data property
  setData (o) {
    this.dom = o
    return this
  }

  // Set element size to given width and height
  size (width, height) {
    let p = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__["proportionalSize"])(this, width, height)

    return this
      .width(new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_9__["default"](p.width))
      .height(new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_9__["default"](p.height))
  }

  // Set width of element
  width (width) {
    return this.attr('width', width)
  }

  // write svgjs data to the dom
  writeDataToDom () {
    // remove previously set data
    this.node.removeAttribute('svgjs:data')

    if (Object.keys(this.dom).length) {
      this.node.setAttribute('svgjs:data', JSON.stringify(this.dom)) // see #428
    }

    return super.writeDataToDom()
  }

  // Move over x-axis
  x (x) {
    return this.attr('x', x)
  }

  // Move over y-axis
  y (y) {
    return this.attr('y', y)
  }
}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_2__["extend"])(Element, {
  bbox: _types_Box_js__WEBPACK_IMPORTED_MODULE_0__["bbox"], rbox: _types_Box_js__WEBPACK_IMPORTED_MODULE_0__["rbox"], point: _types_Point_js__WEBPACK_IMPORTED_MODULE_4__["point"], ctm: _types_Matrix_js__WEBPACK_IMPORTED_MODULE_1__["ctm"], screenCTM: _types_Matrix_js__WEBPACK_IMPORTED_MODULE_1__["screenCTM"]
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_2__["register"])(Element, 'Element')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Ellipse.js":
/*!***************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Ellipse.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ellipse; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/@svgdotjs/svg.js/src/utils/utils.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/SVGNumber.js */ "./node_modules/@svgdotjs/svg.js/src/types/SVGNumber.js");
/* harmony import */ var _Shape_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shape.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Shape.js");
/* harmony import */ var _modules_core_circled_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/core/circled.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/circled.js");







class Ellipse extends _Shape_js__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('ellipse', node), node)
  }

  size (width, height) {
    var p = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["proportionalSize"])(this, width, height)

    return this
      .rx(new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_3__["default"](p.width).divide(2))
      .ry(new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_3__["default"](p.height).divide(2))
  }
}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Ellipse, _modules_core_circled_js__WEBPACK_IMPORTED_MODULE_5__)

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_2__["registerMethods"])('Container', {
  // Create an ellipse
  ellipse: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (width = 0, height = width) {
    return this.put(new Ellipse()).size(width, height).move(0, 0)
  })
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Ellipse, 'Ellipse')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/ForeignObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/ForeignObject.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForeignObject; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Element.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Element.js");




class ForeignObject extends _Element_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('foreignObject', node), node)
  }
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])({
  Container: {
    foreignObject: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (width, height) {
      return this.put(new ForeignObject()).size(width, height)
    })
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(ForeignObject, 'ForeignObject')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/G.js":
/*!*********************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/G.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return G; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/@svgdotjs/svg.js/src/utils/utils.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Container.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Container.js");
/* harmony import */ var _types_Matrix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/Matrix.js */ "./node_modules/@svgdotjs/svg.js/src/types/Matrix.js");
/* harmony import */ var _types_Point_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/Point.js */ "./node_modules/@svgdotjs/svg.js/src/types/Point.js");







class G extends _Container_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('g', node), node)
  }

  x (x, box = this.bbox()) {
    if (x == null) return box.x
    return this.move(x, box.y, box)
  }

  y (y, box = this.bbox()) {
    if (y == null) return box.y
    return this.move(box.x, y, box)
  }

  move (x = 0, y = 0, box = this.bbox()) {
    const dx = x - box.x
    const dy = y - box.y

    return this.dmove(dx, dy)
  }

  dx (dx) {
    return this.dmove(dx, 0)
  }

  dy (dy) {
    return this.dmove(0, dy)
  }

  dmove (dx, dy) {
    this.children().forEach((child, i) => {
      // Get the childs bbox
      const bbox = child.bbox()
      // Get childs matrix
      const m = new _types_Matrix_js__WEBPACK_IMPORTED_MODULE_4__["default"](child)
      // Translate childs matrix by amount and
      // transform it back into parents space
      const matrix = m.translate(dx, dy).transform(m.inverse())
      // Calculate new x and y from old box
      const p = new _types_Point_js__WEBPACK_IMPORTED_MODULE_5__["default"](bbox.x, bbox.y).transform(matrix)
      // Move element
      child.move(p.x, p.y)
    })

    return this
  }

  width (width, box = this.bbox()) {
    if (width == null) return box.width
    return this.size(width, box.height, box)
  }

  height (height, box = this.bbox()) {
    if (height == null) return box.height
    return this.size(box.width, height, box)
  }

  size (width, height, box = this.bbox()) {
    const p = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["proportionalSize"])(this, width, height, box)
    const scaleX = p.width / box.width
    const scaleY = p.height / box.height

    this.children().forEach((child, i) => {
      const o = new _types_Point_js__WEBPACK_IMPORTED_MODULE_5__["default"](box).transform(new _types_Matrix_js__WEBPACK_IMPORTED_MODULE_4__["default"](child).inverse())
      child.scale(scaleX, scaleY, o.x, o.y)
    })

    return this
  }
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_2__["registerMethods"])({
  Container: {
    // Create a group element
    group: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function () {
      return this.put(new G())
    })
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(G, 'G')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Gradient.js":
/*!****************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Gradient.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gradient; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _types_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/Box.js */ "./node_modules/@svgdotjs/svg.js/src/types/Box.js");
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Container.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Container.js");
/* harmony import */ var _Stop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Stop.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Stop.js");
/* harmony import */ var _modules_core_selector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/core/selector.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/selector.js");
/* harmony import */ var _modules_core_gradiented_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/core/gradiented.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/gradiented.js");








class Gradient extends _Container_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor (type, attrs) {
    super(
      Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])(type + 'Gradient', typeof type === 'string' ? null : type),
      attrs
    )
  }

  // Add a color stop
  stop (offset, color, opacity) {
    return this.put(new _Stop_js__WEBPACK_IMPORTED_MODULE_4__["default"]()).update(offset, color, opacity)
  }

  // Update gradient
  update (block) {
    // remove all stops
    this.clear()

    // invoke passed block
    if (typeof block === 'function') {
      block.call(this, this)
    }

    return this
  }

  // Return the fill id
  url () {
    return 'url(#' + this.id() + ')'
  }

  // Alias string convertion to fill
  toString () {
    return this.url()
  }

  // custom attr to handle transform
  attr (a, b, c) {
    if (a === 'transform') a = 'gradientTransform'
    return super.attr(a, b, c)
  }

  targets () {
    return Object(_modules_core_selector_js__WEBPACK_IMPORTED_MODULE_5__["default"])('svg [fill*="' + this.id() + '"]')
  }

  bbox () {
    return new _types_Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]()
  }
}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Gradient, _modules_core_gradiented_js__WEBPACK_IMPORTED_MODULE_6__)

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])({
  Container: {
    // Create gradient element in defs
    gradient: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (type, block) {
      return this.defs().gradient(type, block)
    })
  },
  // define gradient
  Defs: {
    gradient: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (type, block) {
      return this.put(new Gradient(type)).update(block)
    })
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Gradient, 'Gradient')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Image.js":
/*!*************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Image.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var _modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/core/regex.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/regex.js");
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _modules_core_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/core/event.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/event.js");
/* harmony import */ var _modules_core_attr_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/core/attr.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/attr.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/core/namespaces.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/namespaces.js");
/* harmony import */ var _Pattern_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pattern.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Pattern.js");
/* harmony import */ var _Shape_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Shape.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Shape.js");
/* harmony import */ var _utils_window_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/window.js */ "./node_modules/@svgdotjs/svg.js/src/utils/window.js");










class Image extends _Shape_js__WEBPACK_IMPORTED_MODULE_7__["default"] {
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["nodeOrNew"])('image', node), node)
  }

  // (re)load image
  load (url, callback) {
    if (!url) return this

    var img = new _utils_window_js__WEBPACK_IMPORTED_MODULE_8__["globals"].window.Image()

    Object(_modules_core_event_js__WEBPACK_IMPORTED_MODULE_2__["on"])(img, 'load', function (e) {
      var p = this.parent(_Pattern_js__WEBPACK_IMPORTED_MODULE_6__["default"])

      // ensure image size
      if (this.width() === 0 && this.height() === 0) {
        this.size(img.width, img.height)
      }

      if (p instanceof _Pattern_js__WEBPACK_IMPORTED_MODULE_6__["default"]) {
        // ensure pattern size if not set
        if (p.width() === 0 && p.height() === 0) {
          p.size(this.width(), this.height())
        }
      }

      if (typeof callback === 'function') {
        callback.call(this, e)
      }
    }, this)

    Object(_modules_core_event_js__WEBPACK_IMPORTED_MODULE_2__["on"])(img, 'load error', function () {
      // dont forget to unbind memory leaking events
      Object(_modules_core_event_js__WEBPACK_IMPORTED_MODULE_2__["off"])(img)
    })

    return this.attr('href', (img.src = url), _modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_5__["xlink"])
  }
}

Object(_modules_core_attr_js__WEBPACK_IMPORTED_MODULE_3__["registerAttrHook"])(function (attr, val, _this) {
  // convert image fill and stroke to patterns
  if (attr === 'fill' || attr === 'stroke') {
    if (_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["isImage"].test(val)) {
      val = _this.root().defs().image(val)
    }
  }

  if (val instanceof Image) {
    val = _this.root().defs().pattern(0, 0, (pattern) => {
      pattern.add(val)
    })
  }

  return val
})

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_4__["registerMethods"])({
  Container: {
    // create image element, load image and set its size
    image: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["wrapWithAttrCheck"])(function (source, callback) {
      return this.put(new Image()).size(0, 0).load(source, callback)
    })
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["register"])(Image, 'Image')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Line.js":
/*!************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Line.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Line; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/@svgdotjs/svg.js/src/utils/utils.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _types_PointArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/PointArray.js */ "./node_modules/@svgdotjs/svg.js/src/types/PointArray.js");
/* harmony import */ var _Shape_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shape.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Shape.js");
/* harmony import */ var _modules_core_pointed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/core/pointed.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/pointed.js");







class Line extends _Shape_js__WEBPACK_IMPORTED_MODULE_4__["default"] {
  // Initialize node
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('line', node), node)
  }

  // Get array
  array () {
    return new _types_PointArray_js__WEBPACK_IMPORTED_MODULE_3__["default"]([
      [ this.attr('x1'), this.attr('y1') ],
      [ this.attr('x2'), this.attr('y2') ]
    ])
  }

  // Overwrite native plot() method
  plot (x1, y1, x2, y2) {
    if (x1 == null) {
      return this.array()
    } else if (typeof y1 !== 'undefined') {
      x1 = { x1: x1, y1: y1, x2: x2, y2: y2 }
    } else {
      x1 = new _types_PointArray_js__WEBPACK_IMPORTED_MODULE_3__["default"](x1).toLine()
    }

    return this.attr(x1)
  }

  // Move by left top corner
  move (x, y) {
    return this.attr(this.array().move(x, y).toLine())
  }

  // Set element size to given width and height
  size (width, height) {
    var p = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["proportionalSize"])(this, width, height)
    return this.attr(this.array().size(p.width, p.height).toLine())
  }
}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Line, _modules_core_pointed_js__WEBPACK_IMPORTED_MODULE_5__)

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_2__["registerMethods"])({
  Container: {
    // Create a line element
    line: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (...args) {
      // make sure plot is called as a setter
      // x1 is not necessarily a number, it can also be an array, a string and a PointArray
      return Line.prototype.plot.apply(
        this.put(new Line())
        , args[0] != null ? args : [ 0, 0, 0, 0 ]
      )
    })
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Line, 'Line')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Marker.js":
/*!**************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Marker.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Marker; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Container.js");




class Marker extends _Container_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  // Initialize node
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('marker', node), node)
  }

  // Set width of element
  width (width) {
    return this.attr('markerWidth', width)
  }

  // Set height of element
  height (height) {
    return this.attr('markerHeight', height)
  }

  // Set marker refX and refY
  ref (x, y) {
    return this.attr('refX', x).attr('refY', y)
  }

  // Update marker
  update (block) {
    // remove all content
    this.clear()

    // invoke passed block
    if (typeof block === 'function') {
      block.call(this, this)
    }

    return this
  }

  // Return the fill id
  toString () {
    return 'url(#' + this.id() + ')'
  }
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])({
  Container: {
    marker (...args) {
      // Create marker element in defs
      return this.defs().marker(...args)
    }
  },
  Defs: {
    // Create marker
    marker: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (width, height, block) {
      // Set default viewbox to match the width and height, set ref to cx and cy and set orient to auto
      return this.put(new Marker())
        .size(width, height)
        .ref(width / 2, height / 2)
        .viewbox(0, 0, width, height)
        .attr('orient', 'auto')
        .update(block)
    })
  },
  marker: {
    // Create and attach markers
    marker (marker, width, height, block) {
      var attr = [ 'marker' ]

      // Build attribute name
      if (marker !== 'all') attr.push(marker)
      attr = attr.join('-')

      // Set marker attribute
      marker = arguments[1] instanceof Marker
        ? arguments[1]
        : this.defs().marker(width, height, block)

      return this.attr(attr, marker)
    }
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Marker, 'Marker')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Mask.js":
/*!************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Mask.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mask; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Container.js");
/* harmony import */ var _modules_core_selector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/core/selector.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/selector.js");





class Mask extends _Container_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  // Initialize node
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('mask', node), node)
  }

  // Unmask all masked elements and remove itself
  remove () {
    // unmask all targets
    this.targets().forEach(function (el) {
      el.unmask()
    })

    // remove mask from parent
    return super.remove()
  }

  targets () {
    return Object(_modules_core_selector_js__WEBPACK_IMPORTED_MODULE_3__["default"])('svg [mask*="' + this.id() + '"]')
  }
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])({
  Container: {
    mask: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function () {
      return this.defs().put(new Mask())
    })
  },
  Element: {
    // Distribute mask to svg element
    maskWith (element) {
      // use given mask or create a new one
      var masker = element instanceof Mask
        ? element
        : this.parent().mask().add(element)

      // apply mask
      return this.attr('mask', 'url("#' + masker.id() + '")')
    },

    // Unmask element
    unmask () {
      return this.attr('mask', null)
    },

    masker () {
      return this.reference('mask')
    }
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Mask, 'Mask')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Path.js":
/*!************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Path.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/@svgdotjs/svg.js/src/utils/utils.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _types_PathArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/PathArray.js */ "./node_modules/@svgdotjs/svg.js/src/types/PathArray.js");
/* harmony import */ var _Shape_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shape.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Shape.js");
/* harmony import */ var _modules_core_selector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/core/selector.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/selector.js");







class Path extends _Shape_js__WEBPACK_IMPORTED_MODULE_4__["default"] {
  // Initialize node
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('path', node), node)
  }

  // Get array
  array () {
    return this._array || (this._array = new _types_PathArray_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.attr('d')))
  }

  // Plot new path
  plot (d) {
    return (d == null) ? this.array()
      : this.clear().attr('d', typeof d === 'string' ? d : (this._array = new _types_PathArray_js__WEBPACK_IMPORTED_MODULE_3__["default"](d)))
  }

  // Clear array cache
  clear () {
    delete this._array
    return this
  }

  // Move by left top corner
  move (x, y) {
    return this.attr('d', this.array().move(x, y))
  }

  // Move by left top corner over x-axis
  x (x) {
    return x == null ? this.bbox().x : this.move(x, this.bbox().y)
  }

  // Move by left top corner over y-axis
  y (y) {
    return y == null ? this.bbox().y : this.move(this.bbox().x, y)
  }

  // Set element size to given width and height
  size (width, height) {
    var p = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["proportionalSize"])(this, width, height)
    return this.attr('d', this.array().size(p.width, p.height))
  }

  // Set width of element
  width (width) {
    return width == null ? this.bbox().width : this.size(width, this.bbox().height)
  }

  // Set height of element
  height (height) {
    return height == null ? this.bbox().height : this.size(this.bbox().width, height)
  }

  targets () {
    return Object(_modules_core_selector_js__WEBPACK_IMPORTED_MODULE_5__["default"])('svg textpath [href*="' + this.id() + '"]')
  }
}

// Define morphable array
Path.prototype.MorphArray = _types_PathArray_js__WEBPACK_IMPORTED_MODULE_3__["default"]

// Add parent method
Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_2__["registerMethods"])({
  Container: {
    // Create a wrapped path element
    path: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (d) {
      // make sure plot is called as a setter
      return this.put(new Path()).plot(d || new _types_PathArray_js__WEBPACK_IMPORTED_MODULE_3__["default"]())
    })
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Path, 'Path')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Pattern.js":
/*!***************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Pattern.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pattern; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _types_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/Box.js */ "./node_modules/@svgdotjs/svg.js/src/types/Box.js");
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Container.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Container.js");
/* harmony import */ var _modules_core_selector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/core/selector.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/selector.js");






class Pattern extends _Container_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  // Initialize node
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('pattern', node), node)
  }

  // Return the fill id
  url () {
    return 'url(#' + this.id() + ')'
  }

  // Update pattern by rebuilding
  update (block) {
    // remove content
    this.clear()

    // invoke passed block
    if (typeof block === 'function') {
      block.call(this, this)
    }

    return this
  }

  // Alias string convertion to fill
  toString () {
    return this.url()
  }

  // custom attr to handle transform
  attr (a, b, c) {
    if (a === 'transform') a = 'patternTransform'
    return super.attr(a, b, c)
  }

  targets () {
    return Object(_modules_core_selector_js__WEBPACK_IMPORTED_MODULE_4__["default"])('svg [fill*="' + this.id() + '"]')
  }

  bbox () {
    return new _types_Box_js__WEBPACK_IMPORTED_MODULE_2__["default"]()
  }
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])({
  Container: {
    // Create pattern element in defs
    pattern (...args) {
      return this.defs().pattern(...args)
    }
  },
  Defs: {
    pattern: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (width, height, block) {
      return this.put(new Pattern()).update(block).attr({
        x: 0,
        y: 0,
        width: width,
        height: height,
        patternUnits: 'userSpaceOnUse'
      })
    })
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Pattern, 'Pattern')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Polygon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Polygon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Polygon; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _types_PointArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/PointArray.js */ "./node_modules/@svgdotjs/svg.js/src/types/PointArray.js");
/* harmony import */ var _Shape_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shape.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Shape.js");
/* harmony import */ var _modules_core_pointed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/core/pointed.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/pointed.js");
/* harmony import */ var _modules_core_poly_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/core/poly.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/poly.js");







class Polygon extends _Shape_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  // Initialize node
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('polygon', node), node)
  }
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])({
  Container: {
    // Create a wrapped polygon element
    polygon: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (p) {
      // make sure plot is called as a setter
      return this.put(new Polygon()).plot(p || new _types_PointArray_js__WEBPACK_IMPORTED_MODULE_2__["default"]())
    })
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Polygon, _modules_core_pointed_js__WEBPACK_IMPORTED_MODULE_4__)
Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Polygon, _modules_core_poly_js__WEBPACK_IMPORTED_MODULE_5__)
Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Polygon, 'Polygon')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Polyline.js":
/*!****************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Polyline.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Polyline; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _types_PointArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/PointArray.js */ "./node_modules/@svgdotjs/svg.js/src/types/PointArray.js");
/* harmony import */ var _Shape_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shape.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Shape.js");
/* harmony import */ var _modules_core_pointed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/core/pointed.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/pointed.js");
/* harmony import */ var _modules_core_poly_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/core/poly.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/poly.js");







class Polyline extends _Shape_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  // Initialize node
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('polyline', node), node)
  }
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])({
  Container: {
    // Create a wrapped polygon element
    polyline: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (p) {
      // make sure plot is called as a setter
      return this.put(new Polyline()).plot(p || new _types_PointArray_js__WEBPACK_IMPORTED_MODULE_2__["default"]())
    })
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Polyline, _modules_core_pointed_js__WEBPACK_IMPORTED_MODULE_4__)
Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Polyline, _modules_core_poly_js__WEBPACK_IMPORTED_MODULE_5__)
Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Polyline, 'Polyline')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Rect.js":
/*!************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Rect.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rect; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _modules_core_circled_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/core/circled.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/circled.js");
/* harmony import */ var _Shape_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shape.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Shape.js");





class Rect extends _Shape_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  // Initialize node
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('rect', node), node)
  }
}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Rect, { rx: _modules_core_circled_js__WEBPACK_IMPORTED_MODULE_2__["rx"], ry: _modules_core_circled_js__WEBPACK_IMPORTED_MODULE_2__["ry"] })

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])({
  Container: {
    // Create a rect element
    rect: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (width, height) {
      return this.put(new Rect()).size(width, height)
    })
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Rect, 'Rect')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Shape.js":
/*!*************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Shape.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shape; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Element.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Element.js");



class Shape extends _Element_js__WEBPACK_IMPORTED_MODULE_1__["default"] {}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Shape, 'Shape')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Stop.js":
/*!************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Stop.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stop; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Element.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Element.js");
/* harmony import */ var _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/SVGNumber.js */ "./node_modules/@svgdotjs/svg.js/src/types/SVGNumber.js");




class Stop extends _Element_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('stop', node), node)
  }

  // add color stops
  update (o) {
    if (typeof o === 'number' || o instanceof _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      o = {
        offset: arguments[0],
        color: arguments[1],
        opacity: arguments[2]
      }
    }

    // set attributes
    if (o.opacity != null) this.attr('stop-opacity', o.opacity)
    if (o.color != null) this.attr('stop-color', o.color)
    if (o.offset != null) this.attr('offset', new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"](o.offset))

    return this
  }
}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Stop, 'Stop')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Style.js":
/*!*************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Style.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Style; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/@svgdotjs/svg.js/src/utils/utils.js");
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Element.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Element.js");





function cssRule (selector, rule) {
  if (!selector) return ''
  if (!rule) return selector

  var ret = selector + '{'

  for (var i in rule) {
    ret += Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__["unCamelCase"])(i) + ':' + rule[i] + ';'
  }

  ret += '}'

  return ret
}

class Style extends _Element_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('style', node), node)
  }

  addText (w = '') {
    this.node.textContent += w
    return this
  }

  font (name, src, params = {}) {
    return this.rule('@font-face', {
      fontFamily: name,
      src: src,
      ...params
    })
  }

  rule (selector, obj) {
    return this.addText(cssRule(selector, obj))
  }
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])('Dom', {
  style: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (selector, obj) {
    return this.put(new Style()).rule(selector, obj)
  }),
  fontface: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (name, src, params) {
    return this.put(new Style()).font(name, src, params)
  })
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Style, 'Style')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Svg.js":
/*!***********************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Svg.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Svg; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/core/namespaces.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/namespaces.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Container.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Container.js");
/* harmony import */ var _Defs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Defs.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Defs.js");
/* harmony import */ var _utils_window_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/window.js */ "./node_modules/@svgdotjs/svg.js/src/utils/window.js");







class Svg extends _Container_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('svg', node), node)
    this.namespace()
  }

  isRoot () {
    return !this.node.parentNode
      || !(this.node.parentNode instanceof _utils_window_js__WEBPACK_IMPORTED_MODULE_5__["globals"].window.SVGElement)
      || this.node.parentNode.nodeName === '#document'
  }

  // Check if this is a root svg
  // If not, call docs from this element
  root () {
    if (this.isRoot()) return this
    return super.root()
  }

  // Add namespaces
  namespace () {
    if (!this.isRoot()) return this.root().namespace()
    return this
      .attr({ xmlns: _modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_1__["ns"], version: '1.1' })
      .attr('xmlns:xlink', _modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_1__["xlink"], _modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_1__["xmlns"])
      .attr('xmlns:svgjs', _modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_1__["svgjs"], _modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_1__["xmlns"])
  }

  // Creates and returns defs element
  defs () {
    if (!this.isRoot()) return this.root().defs()

    return Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["adopt"])(this.node.querySelector('defs'))
      || this.put(new _Defs_js__WEBPACK_IMPORTED_MODULE_4__["default"]())
  }

  // custom parent method
  parent (type) {
    if (this.isRoot()) {
      return this.node.parentNode.nodeName === '#document'
        ? null
        : Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["adopt"])(this.node.parentNode)
    }

    return super.parent(type)
  }

  clear () {
    // remove children
    while (this.node.hasChildNodes()) {
      this.node.removeChild(this.node.lastChild)
    }

    // remove defs reference
    delete this._defs

    return this
  }
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_2__["registerMethods"])({
  Container: {
    // Create nested svg document
    nested: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function () {
      return this.put(new Svg())
    })
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Svg, 'Svg', true)


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Symbol.js":
/*!**************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Symbol.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Symbol; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Container.js");




class Symbol extends _Container_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  // Initialize node
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('symbol', node), node)
  }
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])({
  Container: {
    symbol: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function () {
      return this.put(new Symbol())
    })
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Symbol, 'Symbol')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Text.js":
/*!************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Text.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/SVGNumber.js */ "./node_modules/@svgdotjs/svg.js/src/types/SVGNumber.js");
/* harmony import */ var _Shape_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shape.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Shape.js");
/* harmony import */ var _utils_window_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/window.js */ "./node_modules/@svgdotjs/svg.js/src/utils/window.js");
/* harmony import */ var _modules_core_textable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/core/textable.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/textable.js");







class Text extends _Shape_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  // Initialize node
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('text', node), node)

    this.dom.leading = new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"](1.3) // store leading value for rebuilding
    this._rebuild = true // enable automatic updating of dy values
    this._build = false // disable build mode for adding multiple lines
  }

  // Move over x-axis
  // Text is moved its bounding box
  // text-anchor does NOT matter
  x (x, box = this.bbox()) {
    if (x == null) {
      return box.x
    }

    return this.attr('x', this.attr('x') + x - box.x)
  }

  // Move over y-axis
  y (y, box = this.bbox()) {
    if (y == null) {
      return box.y
    }

    return this.attr('y', this.attr('y') + y - box.y)
  }

  move (x, y, box = this.bbox()) {
    return this.x(x, box).y(y, box)
  }

  // Move center over x-axis
  cx (x, box = this.bbox()) {
    if (x == null) {
      return box.cx
    }

    return this.attr('x', this.attr('x') + x - box.cx)
  }

  // Move center over y-axis
  cy (y, box = this.bbox()) {
    if (y == null) {
      return box.cy
    }

    return this.attr('y', this.attr('y') + y - box.cy)
  }

  center (x, y, box = this.bbox()) {
    return this.cx(x, box).cy(y, box)
  }

  // Set the text content
  text (text) {
    // act as getter
    if (text === undefined) {
      var children = this.node.childNodes
      var firstLine = 0
      text = ''

      for (var i = 0, len = children.length; i < len; ++i) {
        // skip textPaths - they are no lines
        if (children[i].nodeName === 'textPath') {
          if (i === 0) firstLine = 1
          continue
        }

        // add newline if its not the first child and newLined is set to true
        if (i !== firstLine && children[i].nodeType !== 3 && Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["adopt"])(children[i]).dom.newLined === true) {
          text += '\n'
        }

        // add content of this node
        text += children[i].textContent
      }

      return text
    }

    // remove existing content
    this.clear().build(true)

    if (typeof text === 'function') {
      // call block
      text.call(this, this)
    } else {
      // store text and make sure text is not blank
      text = text.split('\n')

      // build new lines
      for (var j = 0, jl = text.length; j < jl; j++) {
        this.tspan(text[j]).newLine()
      }
    }

    // disable build mode and rebuild lines
    return this.build(false).rebuild()
  }

  // Set / get leading
  leading (value) {
    // act as getter
    if (value == null) {
      return this.dom.leading
    }

    // act as setter
    this.dom.leading = new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"](value)

    return this.rebuild()
  }

  // Rebuild appearance type
  rebuild (rebuild) {
    // store new rebuild flag if given
    if (typeof rebuild === 'boolean') {
      this._rebuild = rebuild
    }

    // define position of all lines
    if (this._rebuild) {
      var self = this
      var blankLineOffset = 0
      var leading = this.dom.leading

      this.each(function () {
        var fontSize = _utils_window_js__WEBPACK_IMPORTED_MODULE_4__["globals"].window.getComputedStyle(this.node)
          .getPropertyValue('font-size')
        var dy = leading * new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"](fontSize)

        if (this.dom.newLined) {
          this.attr('x', self.attr('x'))

          if (this.text() === '\n') {
            blankLineOffset += dy
          } else {
            this.attr('dy', dy + blankLineOffset)
            blankLineOffset = 0
          }
        }
      })

      this.fire('rebuild')
    }

    return this
  }

  // Enable / disable build mode
  build (build) {
    this._build = !!build
    return this
  }

  // overwrite method from parent to set data properly
  setData (o) {
    this.dom = o
    this.dom.leading = new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"](o.leading || 1.3)
    return this
  }
}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Text, _modules_core_textable_js__WEBPACK_IMPORTED_MODULE_5__)

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])({
  Container: {
    // Create text element
    text: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (text) {
      return this.put(new Text()).text(text)
    }),

    // Create plain text element
    plain: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (text) {
      return this.put(new Text()).plain(text)
    })
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Text, 'Text')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/TextPath.js":
/*!****************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/TextPath.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextPath; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/core/namespaces.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/namespaces.js");
/* harmony import */ var _Path_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Path.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Path.js");
/* harmony import */ var _types_PathArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/PathArray.js */ "./node_modules/@svgdotjs/svg.js/src/types/PathArray.js");
/* harmony import */ var _Text_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Text.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Text.js");
/* harmony import */ var _modules_core_selector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/core/selector.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/selector.js");








class TextPath extends _Text_js__WEBPACK_IMPORTED_MODULE_5__["default"] {
  // Initialize node
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('textPath', node), node)
  }

  // return the array of the path track element
  array () {
    var track = this.track()

    return track ? track.array() : null
  }

  // Plot path if any
  plot (d) {
    var track = this.track()
    var pathArray = null

    if (track) {
      pathArray = track.plot(d)
    }

    return (d == null) ? pathArray : this
  }

  // Get the path element
  track () {
    return this.reference('href')
  }
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])({
  Container: {
    textPath: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (text, path) {
      // Convert text to instance if needed
      if (!(text instanceof _Text_js__WEBPACK_IMPORTED_MODULE_5__["default"])) {
        text = this.text(text)
      }

      return text.path(path)
    })
  },
  Text: {
    // Create path for text to run on
    path: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (track, importNodes = true) {
      var textPath = new TextPath()

      // if track is a path, reuse it
      if (!(track instanceof _Path_js__WEBPACK_IMPORTED_MODULE_3__["default"])) {
        // create path element
        track = this.defs().path(track)
      }

      // link textPath to path and add content
      textPath.attr('href', '#' + track, _modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_2__["xlink"])

      // Transplant all nodes from text to textPath
      let node
      if (importNodes) {
        while ((node = this.node.firstChild)) {
          textPath.node.appendChild(node)
        }
      }

      // add textPath element as child node and return textPath
      return this.put(textPath)
    }),

    // Get the textPath children
    textPath () {
      return this.findOne('textPath')
    }
  },
  Path: {
    // creates a textPath from this path
    text: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (text) {
      // Convert text to instance if needed
      if (!(text instanceof _Text_js__WEBPACK_IMPORTED_MODULE_5__["default"])) {
        text = new _Text_js__WEBPACK_IMPORTED_MODULE_5__["default"]().addTo(this.parent()).text(text)
      }

      // Create textPath from text and path and return
      return text.path(this)
    }),

    targets () {
      return Object(_modules_core_selector_js__WEBPACK_IMPORTED_MODULE_6__["default"])('svg [href*="' + this.id() + '"]')
    }
  }
})

TextPath.prototype.MorphArray = _types_PathArray_js__WEBPACK_IMPORTED_MODULE_4__["default"]
Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(TextPath, 'TextPath')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Tspan.js":
/*!*************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Tspan.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tspan; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_window_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/window.js */ "./node_modules/@svgdotjs/svg.js/src/utils/window.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/SVGNumber.js */ "./node_modules/@svgdotjs/svg.js/src/types/SVGNumber.js");
/* harmony import */ var _Text_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Text.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Text.js");
/* harmony import */ var _modules_core_textable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/core/textable.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/textable.js");







class Tspan extends _Text_js__WEBPACK_IMPORTED_MODULE_4__["default"] {
  // Initialize node
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('tspan', node), node)
  }

  // Set text content
  text (text) {
    if (text == null) return this.node.textContent + (this.dom.newLined ? '\n' : '')

    typeof text === 'function' ? text.call(this, this) : this.plain(text)

    return this
  }

  // Shortcut dx
  dx (dx) {
    return this.attr('dx', dx)
  }

  // Shortcut dy
  dy (dy) {
    return this.attr('dy', dy)
  }

  x (x) {
    return this.attr('x', x)
  }

  y (y) {
    return this.attr('x', y)
  }

  move (x, y) {
    return this.x(x).y(y)
  }

  // Create new line
  newLine () {
    // fetch text parent
    var t = this.parent(_Text_js__WEBPACK_IMPORTED_MODULE_4__["default"])

    // mark new line
    this.dom.newLined = true

    var fontSize = _utils_window_js__WEBPACK_IMPORTED_MODULE_1__["globals"].window.getComputedStyle(this.node)
      .getPropertyValue('font-size')
    var dy = t.dom.leading * new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_3__["default"](fontSize)

    // apply new position
    return this.dy(dy).attr('x', t.x())
  }
}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Tspan, _modules_core_textable_js__WEBPACK_IMPORTED_MODULE_5__)

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_2__["registerMethods"])({
  Tspan: {
    tspan: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (text) {
      var tspan = new Tspan()

      // clear if build mode is disabled
      if (!this._build) {
        this.clear()
      }

      // add new tspan
      this.node.appendChild(tspan.node)

      return tspan.text(text)
    })
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Tspan, 'Tspan')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/elements/Use.js":
/*!***********************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/elements/Use.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Use; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/core/namespaces.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/namespaces.js");
/* harmony import */ var _Shape_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Shape.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Shape.js");





class Use extends _Shape_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor (node) {
    super(Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["nodeOrNew"])('use', node), node)
  }

  // Use element as a reference
  element (element, file) {
    // Set lined element
    return this.attr('href', (file || '') + '#' + element, _modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_2__["xlink"])
  }
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])({
  Container: {
    // Create a use element
    use: Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["wrapWithAttrCheck"])(function (element, file) {
      return this.put(new Use()).element(element, file)
    })
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["register"])(Use, 'Use')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/main.js":
/*!***************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/main.js ***!
  \***************************************************/
/*! exports provided: Morphable, registerMorphableType, makeMorphable, TransformBag, ObjectBag, NonMorphable, defaults, utils, namespaces, regex, SVG, parser, find, registerWindow, Animator, Controller, Ease, PID, Spring, easing, Queue, Runner, Timeline, Array, Box, Color, EventTarget, Matrix, Number, PathArray, Point, PointArray, List, Circle, ClipPath, Container, Defs, Dom, Element, Ellipse, ForeignObject, Gradient, G, A, Image, Line, Marker, Mask, Path, Pattern, Polygon, Polyline, Rect, Shape, Stop, Style, Svg, Symbol, Text, TextPath, Tspan, Use, on, off, dispatch, root, create, makeInstance, nodeOrNew, adopt, mockAdopt, register, getClass, eid, assignNewId, extend, wrapWithAttrCheck, invent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG", function() { return SVG; });
/* harmony import */ var _modules_optional_arrange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/optional/arrange.js */ "./node_modules/@svgdotjs/svg.js/src/modules/optional/arrange.js");
/* harmony import */ var _modules_optional_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/optional/class.js */ "./node_modules/@svgdotjs/svg.js/src/modules/optional/class.js");
/* harmony import */ var _modules_optional_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/optional/css.js */ "./node_modules/@svgdotjs/svg.js/src/modules/optional/css.js");
/* harmony import */ var _modules_optional_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/optional/data.js */ "./node_modules/@svgdotjs/svg.js/src/modules/optional/data.js");
/* harmony import */ var _modules_optional_memory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/optional/memory.js */ "./node_modules/@svgdotjs/svg.js/src/modules/optional/memory.js");
/* harmony import */ var _modules_optional_sugar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/optional/sugar.js */ "./node_modules/@svgdotjs/svg.js/src/modules/optional/sugar.js");
/* harmony import */ var _modules_optional_transform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/optional/transform.js */ "./node_modules/@svgdotjs/svg.js/src/modules/optional/transform.js");
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _types_Box_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types/Box.js */ "./node_modules/@svgdotjs/svg.js/src/types/Box.js");
/* harmony import */ var _elements_Circle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./elements/Circle.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Circle.js");
/* harmony import */ var _types_Color_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./types/Color.js */ "./node_modules/@svgdotjs/svg.js/src/types/Color.js");
/* harmony import */ var _elements_Container_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./elements/Container.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Container.js");
/* harmony import */ var _elements_Defs_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./elements/Defs.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Defs.js");
/* harmony import */ var _elements_Dom_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./elements/Dom.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Dom.js");
/* harmony import */ var _elements_Element_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./elements/Element.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Element.js");
/* harmony import */ var _elements_Ellipse_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./elements/Ellipse.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Ellipse.js");
/* harmony import */ var _types_EventTarget_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./types/EventTarget.js */ "./node_modules/@svgdotjs/svg.js/src/types/EventTarget.js");
/* harmony import */ var _elements_Gradient_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./elements/Gradient.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Gradient.js");
/* harmony import */ var _elements_Image_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./elements/Image.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Image.js");
/* harmony import */ var _elements_Line_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./elements/Line.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Line.js");
/* harmony import */ var _types_List_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./types/List.js */ "./node_modules/@svgdotjs/svg.js/src/types/List.js");
/* harmony import */ var _elements_Marker_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./elements/Marker.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Marker.js");
/* harmony import */ var _types_Matrix_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./types/Matrix.js */ "./node_modules/@svgdotjs/svg.js/src/types/Matrix.js");
/* harmony import */ var _animation_Morphable_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./animation/Morphable.js */ "./node_modules/@svgdotjs/svg.js/src/animation/Morphable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Morphable", function() { return _animation_Morphable_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerMorphableType", function() { return _animation_Morphable_js__WEBPACK_IMPORTED_MODULE_24__["registerMorphableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMorphable", function() { return _animation_Morphable_js__WEBPACK_IMPORTED_MODULE_24__["makeMorphable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransformBag", function() { return _animation_Morphable_js__WEBPACK_IMPORTED_MODULE_24__["TransformBag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectBag", function() { return _animation_Morphable_js__WEBPACK_IMPORTED_MODULE_24__["ObjectBag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NonMorphable", function() { return _animation_Morphable_js__WEBPACK_IMPORTED_MODULE_24__["NonMorphable"]; });

/* harmony import */ var _elements_Path_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./elements/Path.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Path.js");
/* harmony import */ var _types_PathArray_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./types/PathArray.js */ "./node_modules/@svgdotjs/svg.js/src/types/PathArray.js");
/* harmony import */ var _elements_Pattern_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./elements/Pattern.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Pattern.js");
/* harmony import */ var _types_PointArray_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./types/PointArray.js */ "./node_modules/@svgdotjs/svg.js/src/types/PointArray.js");
/* harmony import */ var _elements_Polygon_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./elements/Polygon.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Polygon.js");
/* harmony import */ var _elements_Polyline_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./elements/Polyline.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Polyline.js");
/* harmony import */ var _elements_Rect_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./elements/Rect.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Rect.js");
/* harmony import */ var _animation_Runner_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./animation/Runner.js */ "./node_modules/@svgdotjs/svg.js/src/animation/Runner.js");
/* harmony import */ var _types_SVGArray_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./types/SVGArray.js */ "./node_modules/@svgdotjs/svg.js/src/types/SVGArray.js");
/* harmony import */ var _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./types/SVGNumber.js */ "./node_modules/@svgdotjs/svg.js/src/types/SVGNumber.js");
/* harmony import */ var _elements_Shape_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./elements/Shape.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Shape.js");
/* harmony import */ var _elements_Svg_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./elements/Svg.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Svg.js");
/* harmony import */ var _elements_Symbol_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./elements/Symbol.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Symbol.js");
/* harmony import */ var _elements_Text_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./elements/Text.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Text.js");
/* harmony import */ var _elements_Tspan_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./elements/Tspan.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Tspan.js");
/* harmony import */ var _modules_core_defaults_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./modules/core/defaults.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/defaults.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _modules_core_defaults_js__WEBPACK_IMPORTED_MODULE_40__; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./utils/utils.js */ "./node_modules/@svgdotjs/svg.js/src/utils/utils.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils_utils_js__WEBPACK_IMPORTED_MODULE_41__; });
/* harmony import */ var _modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./modules/core/namespaces.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/namespaces.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return _modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_42__; });
/* harmony import */ var _modules_core_regex_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./modules/core/regex.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/regex.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "regex", function() { return _modules_core_regex_js__WEBPACK_IMPORTED_MODULE_43__; });
/* harmony import */ var _modules_core_parser_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./modules/core/parser.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/parser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return _modules_core_parser_js__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _modules_core_selector_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./modules/core/selector.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/selector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _modules_core_selector_js__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _modules_core_event_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./modules/core/event.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/event.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "on", function() { return _modules_core_event_js__WEBPACK_IMPORTED_MODULE_46__["on"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "off", function() { return _modules_core_event_js__WEBPACK_IMPORTED_MODULE_46__["off"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return _modules_core_event_js__WEBPACK_IMPORTED_MODULE_46__["dispatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "root", function() { return _utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["root"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["create"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeInstance", function() { return _utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["makeInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nodeOrNew", function() { return _utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["nodeOrNew"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adopt", function() { return _utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["adopt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mockAdopt", function() { return _utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["mockAdopt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "register", function() { return _utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["register"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClass", function() { return _utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["getClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eid", function() { return _utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["eid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignNewId", function() { return _utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["assignNewId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapWithAttrCheck", function() { return _utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["wrapWithAttrCheck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invent", function() { return _utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["invent"]; });

/* harmony import */ var _utils_window_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./utils/window.js */ "./node_modules/@svgdotjs/svg.js/src/utils/window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerWindow", function() { return _utils_window_js__WEBPACK_IMPORTED_MODULE_47__["registerWindow"]; });

/* harmony import */ var _animation_Animator_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./animation/Animator.js */ "./node_modules/@svgdotjs/svg.js/src/animation/Animator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animator", function() { return _animation_Animator_js__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _animation_Controller_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./animation/Controller.js */ "./node_modules/@svgdotjs/svg.js/src/animation/Controller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _animation_Controller_js__WEBPACK_IMPORTED_MODULE_49__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return _animation_Controller_js__WEBPACK_IMPORTED_MODULE_49__["Ease"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PID", function() { return _animation_Controller_js__WEBPACK_IMPORTED_MODULE_49__["PID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spring", function() { return _animation_Controller_js__WEBPACK_IMPORTED_MODULE_49__["Spring"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return _animation_Controller_js__WEBPACK_IMPORTED_MODULE_49__["easing"]; });

/* harmony import */ var _animation_Queue_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./animation/Queue.js */ "./node_modules/@svgdotjs/svg.js/src/animation/Queue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return _animation_Queue_js__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Runner", function() { return _animation_Runner_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _animation_Timeline_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./animation/Timeline.js */ "./node_modules/@svgdotjs/svg.js/src/animation/Timeline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return _animation_Timeline_js__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Array", function() { return _types_SVGArray_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _types_Box_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return _types_Color_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventTarget", function() { return _types_EventTarget_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return _types_Matrix_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Number", function() { return _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PathArray", function() { return _types_PathArray_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _types_Point_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./types/Point.js */ "./node_modules/@svgdotjs/svg.js/src/types/Point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return _types_Point_js__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointArray", function() { return _types_PointArray_js__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _types_List_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _elements_Circle_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _elements_ClipPath_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./elements/ClipPath.js */ "./node_modules/@svgdotjs/svg.js/src/elements/ClipPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipPath", function() { return _elements_ClipPath_js__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _elements_Container_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Defs", function() { return _elements_Defs_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dom", function() { return _elements_Dom_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return _elements_Element_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ellipse", function() { return _elements_Ellipse_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _elements_ForeignObject_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./elements/ForeignObject.js */ "./node_modules/@svgdotjs/svg.js/src/elements/ForeignObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForeignObject", function() { return _elements_ForeignObject_js__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gradient", function() { return _elements_Gradient_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _elements_G_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./elements/G.js */ "./node_modules/@svgdotjs/svg.js/src/elements/G.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "G", function() { return _elements_G_js__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _elements_A_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./elements/A.js */ "./node_modules/@svgdotjs/svg.js/src/elements/A.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "A", function() { return _elements_A_js__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _elements_Image_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _elements_Line_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return _elements_Marker_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _elements_Mask_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./elements/Mask.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Mask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mask", function() { return _elements_Mask_js__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return _elements_Path_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pattern", function() { return _elements_Pattern_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return _elements_Polygon_js__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return _elements_Polyline_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return _elements_Rect_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return _elements_Shape_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _elements_Stop_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./elements/Stop.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Stop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stop", function() { return _elements_Stop_js__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _elements_Style_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./elements/Style.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return _elements_Style_js__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Svg", function() { return _elements_Svg_js__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Symbol", function() { return _elements_Symbol_js__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _elements_Text_js__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _elements_TextPath_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./elements/TextPath.js */ "./node_modules/@svgdotjs/svg.js/src/elements/TextPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextPath", function() { return _elements_TextPath_js__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tspan", function() { return _elements_Tspan_js__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _elements_Use_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./elements/Use.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Use.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Use", function() { return _elements_Use_js__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* Optional Modules */

















































const SVG = _utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["makeInstance"]






/* Animation Modules */






/* Types */











/* Elements */






























Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["extend"])([
  _elements_Svg_js__WEBPACK_IMPORTED_MODULE_36__["default"],
  _elements_Symbol_js__WEBPACK_IMPORTED_MODULE_37__["default"],
  _elements_Image_js__WEBPACK_IMPORTED_MODULE_19__["default"],
  _elements_Pattern_js__WEBPACK_IMPORTED_MODULE_27__["default"],
  _elements_Marker_js__WEBPACK_IMPORTED_MODULE_22__["default"]
], Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_8__["getMethodsFor"])('viewbox'))

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["extend"])([
  _elements_Line_js__WEBPACK_IMPORTED_MODULE_20__["default"],
  _elements_Polyline_js__WEBPACK_IMPORTED_MODULE_30__["default"],
  _elements_Polygon_js__WEBPACK_IMPORTED_MODULE_29__["default"],
  _elements_Path_js__WEBPACK_IMPORTED_MODULE_25__["default"]
], Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_8__["getMethodsFor"])('marker'))

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["extend"])(_elements_Text_js__WEBPACK_IMPORTED_MODULE_38__["default"], Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_8__["getMethodsFor"])('Text'))
Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["extend"])(_elements_Path_js__WEBPACK_IMPORTED_MODULE_25__["default"], Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_8__["getMethodsFor"])('Path'))

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["extend"])(_elements_Defs_js__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_8__["getMethodsFor"])('Defs'))

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["extend"])([
  _elements_Text_js__WEBPACK_IMPORTED_MODULE_38__["default"],
  _elements_Tspan_js__WEBPACK_IMPORTED_MODULE_39__["default"]
], Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_8__["getMethodsFor"])('Tspan'))

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["extend"])([
  _elements_Rect_js__WEBPACK_IMPORTED_MODULE_31__["default"],
  _elements_Ellipse_js__WEBPACK_IMPORTED_MODULE_16__["default"],
  _elements_Circle_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  _elements_Gradient_js__WEBPACK_IMPORTED_MODULE_18__["default"]
], Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_8__["getMethodsFor"])('radius'))

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["extend"])(_types_EventTarget_js__WEBPACK_IMPORTED_MODULE_17__["default"], Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_8__["getMethodsFor"])('EventTarget'))
Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["extend"])(_elements_Dom_js__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_8__["getMethodsFor"])('Dom'))
Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["extend"])(_elements_Element_js__WEBPACK_IMPORTED_MODULE_15__["default"], Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_8__["getMethodsFor"])('Element'))
Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["extend"])(_elements_Shape_js__WEBPACK_IMPORTED_MODULE_35__["default"], Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_8__["getMethodsFor"])('Shape'))
// extend(Element, getConstructor('Memory'))
Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["extend"])(_elements_Container_js__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_8__["getMethodsFor"])('Container'))

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_7__["extend"])(_animation_Runner_js__WEBPACK_IMPORTED_MODULE_32__["default"], Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_8__["getMethodsFor"])('Runner'))

_types_List_js__WEBPACK_IMPORTED_MODULE_21__["default"].extend(Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_8__["getMethodNames"])())

Object(_animation_Morphable_js__WEBPACK_IMPORTED_MODULE_24__["registerMorphableType"])([
  _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_34__["default"],
  _types_Color_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  _types_Box_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  _types_Matrix_js__WEBPACK_IMPORTED_MODULE_23__["default"],
  _types_SVGArray_js__WEBPACK_IMPORTED_MODULE_33__["default"],
  _types_PointArray_js__WEBPACK_IMPORTED_MODULE_28__["default"],
  _types_PathArray_js__WEBPACK_IMPORTED_MODULE_26__["default"]
])

Object(_animation_Morphable_js__WEBPACK_IMPORTED_MODULE_24__["makeMorphable"])()


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/core/attr.js":
/*!****************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/core/attr.js ***!
  \****************************************************************/
/*! exports provided: registerAttrHook, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAttrHook", function() { return registerAttrHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return attr; });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/defaults.js");
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regex.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/regex.js");
/* harmony import */ var _types_Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/Color.js */ "./node_modules/@svgdotjs/svg.js/src/types/Color.js");
/* harmony import */ var _types_SVGArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/SVGArray.js */ "./node_modules/@svgdotjs/svg.js/src/types/SVGArray.js");
/* harmony import */ var _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types/SVGNumber.js */ "./node_modules/@svgdotjs/svg.js/src/types/SVGNumber.js");






const hooks = []
function registerAttrHook (fn) {
  hooks.push(fn)
}

// Set svg element attribute
function attr (attr, val, ns) {
  // act as full getter
  if (attr == null) {
    // get an object of attributes
    attr = {}
    val = this.node.attributes

    for (let node of val) {
      attr[node.nodeName] = _regex_js__WEBPACK_IMPORTED_MODULE_1__["isNumber"].test(node.nodeValue)
        ? parseFloat(node.nodeValue)
        : node.nodeValue
    }

    return attr
  } else if (attr instanceof Array) {
    // loop through array and get all values
    return attr.reduce((last, curr) => {
      last[curr] = this.attr(curr)
      return last
    }, {})
  } else if (typeof attr === 'object' && attr.constructor === Object) {
    // apply every attribute individually if an object is passed
    for (val in attr) this.attr(val, attr[val])
  } else if (val === null) {
    // remove value
    this.node.removeAttribute(attr)
  } else if (val == null) {
    // act as a getter if the first and only argument is not an object
    val = this.node.getAttribute(attr)
    return val == null ? _defaults_js__WEBPACK_IMPORTED_MODULE_0__["attrs"][attr]
      : _regex_js__WEBPACK_IMPORTED_MODULE_1__["isNumber"].test(val) ? parseFloat(val)
      : val
  } else {
    // Loop through hooks and execute them to convert value
    val = hooks.reduce((_val, hook) => {
      return hook(attr, _val, this)
    }, val)

    // ensure correct numeric values (also accepts NaN and Infinity)
    if (typeof val === 'number') {
      val = new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_4__["default"](val)
    } else if (_types_Color_js__WEBPACK_IMPORTED_MODULE_2__["default"].isColor(val)) {
      // ensure full hex color
      val = new _types_Color_js__WEBPACK_IMPORTED_MODULE_2__["default"](val)
    } else if (val.constructor === Array) {
      // Check for plain arrays and parse array values
      val = new _types_SVGArray_js__WEBPACK_IMPORTED_MODULE_3__["default"](val)
    }

    // if the passed attribute is leading...
    if (attr === 'leading') {
      // ... call the leading method instead
      if (this.leading) {
        this.leading(val)
      }
    } else {
      // set given attribute on node
      typeof ns === 'string' ? this.node.setAttributeNS(ns, attr, val.toString())
        : this.node.setAttribute(attr, val.toString())
    }

    // rebuild if required
    if (this.rebuild && (attr === 'font-size' || attr === 'x')) {
      this.rebuild()
    }
  }

  return this
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/core/circled.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/core/circled.js ***!
  \*******************************************************************/
/*! exports provided: rx, ry, x, y, cx, cy, width, height */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rx", function() { return rx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ry", function() { return ry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cx", function() { return cx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cy", function() { return cy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony import */ var _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/SVGNumber.js */ "./node_modules/@svgdotjs/svg.js/src/types/SVGNumber.js");


// Radius x value
function rx (rx) {
  return this.attr('rx', rx)
}

// Radius y value
function ry (ry) {
  return this.attr('ry', ry)
}

// Move over x-axis
function x (x) {
  return x == null
    ? this.cx() - this.rx()
    : this.cx(x + this.rx())
}

// Move over y-axis
function y (y) {
  return y == null
    ? this.cy() - this.ry()
    : this.cy(y + this.ry())
}

// Move by center over x-axis
function cx (x) {
  return x == null
    ? this.attr('cx')
    : this.attr('cx', x)
}

// Move by center over y-axis
function cy (y) {
  return y == null
    ? this.attr('cy')
    : this.attr('cy', y)
}

// Set width of element
function width (width) {
  return width == null
    ? this.rx() * 2
    : this.rx(new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](width).divide(2))
}

// Set height of element
function height (height) {
  return height == null
    ? this.ry() * 2
    : this.ry(new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](height).divide(2))
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/core/defaults.js":
/*!********************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/core/defaults.js ***!
  \********************************************************************/
/*! exports provided: noop, timeline, attrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeline", function() { return timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attrs", function() { return attrs; });

function noop () {}

// Default animation values
let timeline = {
  duration: 400,
  ease: '>',
  delay: 0
}

// Default attribute values
let attrs = {

  // fill and stroke
  'fill-opacity': 1,
  'stroke-opacity': 1,
  'stroke-width': 0,
  'stroke-linejoin': 'miter',
  'stroke-linecap': 'butt',
  fill: '#000000',
  stroke: '#000000',
  opacity: 1,

  // position
  x: 0,
  y: 0,
  cx: 0,
  cy: 0,

  // size
  width: 0,
  height: 0,

  // radius
  r: 0,
  rx: 0,
  ry: 0,

  // gradient
  offset: 0,
  'stop-opacity': 1,
  'stop-color': '#000000',

  // text
  'text-anchor': 'start'
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/core/event.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/core/event.js ***!
  \*****************************************************************/
/*! exports provided: on, off, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/regex.js");
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_window_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/window.js */ "./node_modules/@svgdotjs/svg.js/src/utils/window.js");




let listenerId = 0
let windowEvents = {}

function getEvents (instance) {
  let n = instance.getEventHolder()

  // We dont want to save events in global space
  if (n === _utils_window_js__WEBPACK_IMPORTED_MODULE_2__["globals"].window) n = windowEvents
  if (!n.events) n.events = {}
  return n.events
}

function getEventTarget (instance) {
  return instance.getEventTarget()
}

function clearEvents (instance) {
  const n = instance.getEventHolder()
  if (n.events) n.events = {}
}

// Add event binder in the SVG namespace
function on (node, events, listener, binding, options) {
  var l = listener.bind(binding || node)
  var instance = Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["makeInstance"])(node)
  var bag = getEvents(instance)
  var n = getEventTarget(instance)

  // events can be an array of events or a string of events
  events = Array.isArray(events) ? events : events.split(_regex_js__WEBPACK_IMPORTED_MODULE_0__["delimiter"])

  // add id to listener
  if (!listener._svgjsListenerId) {
    listener._svgjsListenerId = ++listenerId
  }

  events.forEach(function (event) {
    var ev = event.split('.')[0]
    var ns = event.split('.')[1] || '*'

    // ensure valid object
    bag[ev] = bag[ev] || {}
    bag[ev][ns] = bag[ev][ns] || {}

    // reference listener
    bag[ev][ns][listener._svgjsListenerId] = l

    // add listener
    n.addEventListener(ev, l, options || false)
  })
}

// Add event unbinder in the SVG namespace
function off (node, events, listener, options) {
  var instance = Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["makeInstance"])(node)
  var bag = getEvents(instance)
  var n = getEventTarget(instance)

  // listener can be a function or a number
  if (typeof listener === 'function') {
    listener = listener._svgjsListenerId
    if (!listener) return
  }

  // events can be an array of events or a string or undefined
  events = Array.isArray(events) ? events : (events || '').split(_regex_js__WEBPACK_IMPORTED_MODULE_0__["delimiter"])

  events.forEach(function (event) {
    var ev = event && event.split('.')[0]
    var ns = event && event.split('.')[1]
    var namespace, l

    if (listener) {
      // remove listener reference
      if (bag[ev] && bag[ev][ns || '*']) {
        // removeListener
        n.removeEventListener(ev, bag[ev][ns || '*'][listener], options || false)

        delete bag[ev][ns || '*'][listener]
      }
    } else if (ev && ns) {
      // remove all listeners for a namespaced event
      if (bag[ev] && bag[ev][ns]) {
        for (l in bag[ev][ns]) {
          off(n, [ ev, ns ].join('.'), l)
        }

        delete bag[ev][ns]
      }
    } else if (ns) {
      // remove all listeners for a specific namespace
      for (event in bag) {
        for (namespace in bag[event]) {
          if (ns === namespace) {
            off(n, [ event, ns ].join('.'))
          }
        }
      }
    } else if (ev) {
      // remove all listeners for the event
      if (bag[ev]) {
        for (namespace in bag[ev]) {
          off(n, [ ev, namespace ].join('.'))
        }

        delete bag[ev]
      }
    } else {
      // remove all listeners on a given node
      for (event in bag) {
        off(n, event)
      }

      clearEvents(instance)
    }
  })
}

function dispatch (node, event, data) {
  var n = getEventTarget(node)

  // Dispatch event
  if (event instanceof _utils_window_js__WEBPACK_IMPORTED_MODULE_2__["globals"].window.Event) {
    n.dispatchEvent(event)
  } else {
    event = new _utils_window_js__WEBPACK_IMPORTED_MODULE_2__["globals"].window.CustomEvent(event, { detail: data, cancelable: true })
    n.dispatchEvent(event)
  }
  return event
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/core/gradiented.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/core/gradiented.js ***!
  \**********************************************************************/
/*! exports provided: from, to */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to", function() { return to; });
/* harmony import */ var _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/SVGNumber.js */ "./node_modules/@svgdotjs/svg.js/src/types/SVGNumber.js");


function from (x, y) {
  return (this._element || this).type === 'radialGradient'
    ? this.attr({ fx: new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](x), fy: new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](y) })
    : this.attr({ x1: new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](x), y1: new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](y) })
}

function to (x, y) {
  return (this._element || this).type === 'radialGradient'
    ? this.attr({ cx: new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](x), cy: new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](y) })
    : this.attr({ x2: new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](x), y2: new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"](y) })
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/core/namespaces.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/core/namespaces.js ***!
  \**********************************************************************/
/*! exports provided: ns, xmlns, xlink, svgjs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ns", function() { return ns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xmlns", function() { return xmlns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xlink", function() { return xlink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgjs", function() { return svgjs; });
// Default namespaces
let ns = 'http://www.w3.org/2000/svg'
let xmlns = 'http://www.w3.org/2000/xmlns/'
let xlink = 'http://www.w3.org/1999/xlink'
let svgjs = 'http://svgjs.com/svgjs'


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/core/parser.js":
/*!******************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/core/parser.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parser; });
/* harmony import */ var _utils_window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/window.js */ "./node_modules/@svgdotjs/svg.js/src/utils/window.js");
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");



function parser () {
  // Reuse cached element if possible
  if (!parser.nodes) {
    let svg = Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["makeInstance"])().size(2, 0)
    svg.node.style.cssText = [
      'opacity: 0',
      'position: absolute',
      'left: -100%',
      'top: -100%',
      'overflow: hidden'
    ].join(';')

    svg.attr('focusable', 'false')

    let path = svg.path().node

    parser.nodes = { svg, path }
  }

  if (!parser.nodes.svg.node.parentNode) {
    let b = _utils_window_js__WEBPACK_IMPORTED_MODULE_0__["globals"].document.body || _utils_window_js__WEBPACK_IMPORTED_MODULE_0__["globals"].document.documentElement
    parser.nodes.svg.addTo(b)
  }

  return parser.nodes
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/core/pointed.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/core/pointed.js ***!
  \*******************************************************************/
/*! exports provided: MorphArray, x, y, width, height */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorphArray", function() { return MorphArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony import */ var _types_PointArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/PointArray.js */ "./node_modules/@svgdotjs/svg.js/src/types/PointArray.js");


let MorphArray = _types_PointArray_js__WEBPACK_IMPORTED_MODULE_0__["default"]

// Move by left top corner over x-axis
function x (x) {
  return x == null ? this.bbox().x : this.move(x, this.bbox().y)
}

// Move by left top corner over y-axis
function y (y) {
  return y == null ? this.bbox().y : this.move(this.bbox().x, y)
}

// Set width of element
function width (width) {
  let b = this.bbox()
  return width == null ? b.width : this.size(width, b.height)
}

// Set height of element
function height (height) {
  let b = this.bbox()
  return height == null ? b.height : this.size(b.width, height)
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/core/poly.js":
/*!****************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/core/poly.js ***!
  \****************************************************************/
/*! exports provided: array, plot, clear, move, size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plot", function() { return plot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "move", function() { return move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils.js */ "./node_modules/@svgdotjs/svg.js/src/utils/utils.js");
/* harmony import */ var _types_PointArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/PointArray.js */ "./node_modules/@svgdotjs/svg.js/src/types/PointArray.js");



// Get array
function array () {
  return this._array || (this._array = new _types_PointArray_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.attr('points')))
}

// Plot new path
function plot (p) {
  return (p == null) ? this.array()
    : this.clear().attr('points', typeof p === 'string' ? p
    : (this._array = new _types_PointArray_js__WEBPACK_IMPORTED_MODULE_1__["default"](p)))
}

// Clear array cache
function clear () {
  delete this._array
  return this
}

// Move by left top corner
function move (x, y) {
  return this.attr('points', this.array().move(x, y))
}

// Set element size to given width and height
function size (width, height) {
  let p = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["proportionalSize"])(this, width, height)
  return this.attr('points', this.array().size(p.width, p.height))
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/core/regex.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/core/regex.js ***!
  \*****************************************************************/
/*! exports provided: numberAndUnit, hex, rgb, reference, transforms, whitespace, isHex, isRgb, isCss, isBlank, isNumber, isPercent, isImage, delimiter, hyphen, pathLetters, isPathLetter, numbersWithDots, dots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberAndUnit", function() { return numberAndUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transforms", function() { return transforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whitespace", function() { return whitespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHex", function() { return isHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRgb", function() { return isRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCss", function() { return isCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlank", function() { return isBlank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPercent", function() { return isPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImage", function() { return isImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delimiter", function() { return delimiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hyphen", function() { return hyphen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathLetters", function() { return pathLetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPathLetter", function() { return isPathLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbersWithDots", function() { return numbersWithDots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dots", function() { return dots; });
// Parse unit value
let numberAndUnit = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i

// Parse hex value
let hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i

// Parse rgb value
let rgb = /rgb\((\d+),(\d+),(\d+)\)/

// Parse reference id
let reference = /(#[a-z0-9\-_]+)/i

// splits a transformation chain
let transforms = /\)\s*,?\s*/

// Whitespace
let whitespace = /\s/g

// Test hex value
let isHex = /^#[a-f0-9]{3,6}$/i

// Test rgb value
let isRgb = /^rgb\(/

// Test css declaration
let isCss = /[^:]+:[^;]+;?/

// Test for blank string
let isBlank = /^(\s+)?$/

// Test for numeric string
let isNumber = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i

// Test for percent value
let isPercent = /^-?[\d.]+%$/

// Test for image url
let isImage = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i

// split at whitespace and comma
let delimiter = /[\s,]+/

// The following regex are used to parse the d attribute of a path

// Matches all hyphens which are not after an exponent
let hyphen = /([^e])-/gi

// Replaces and tests for all path letters
let pathLetters = /[MLHVCSQTAZ]/gi

// yes we need this one, too
let isPathLetter = /[MLHVCSQTAZ]/i

// matches 0.154.23.45
let numbersWithDots = /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi

// matches .
let dots = /\./g


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/core/selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/core/selector.js ***!
  \********************************************************************/
/*! exports provided: default, find, findOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return baseFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findOne", function() { return findOne; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_window_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/window.js */ "./node_modules/@svgdotjs/svg.js/src/utils/window.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils.js */ "./node_modules/@svgdotjs/svg.js/src/utils/utils.js");
/* harmony import */ var _types_List_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/List.js */ "./node_modules/@svgdotjs/svg.js/src/types/List.js");





function baseFind (query, parent) {
  return new _types_List_js__WEBPACK_IMPORTED_MODULE_3__["default"](Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__["map"])((parent || _utils_window_js__WEBPACK_IMPORTED_MODULE_1__["globals"].document).querySelectorAll(query), function (node) {
    return Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["adopt"])(node)
  }))
}

// Scoped find method
function find (query) {
  return baseFind(query, this.node)
}

function findOne (query) {
  return Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["adopt"])(this.node.querySelector(query))
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/core/textable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/core/textable.js ***!
  \********************************************************************/
/*! exports provided: plain, length */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plain", function() { return plain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony import */ var _utils_window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/window.js */ "./node_modules/@svgdotjs/svg.js/src/utils/window.js");


// Create plain text node
function plain (text) {
  // clear if build mode is disabled
  if (this._build === false) {
    this.clear()
  }

  // create text node
  this.node.appendChild(_utils_window_js__WEBPACK_IMPORTED_MODULE_0__["globals"].document.createTextNode(text))

  return this
}

// Get length of text element
function length () {
  return this.node.getComputedTextLength()
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/optional/arrange.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/optional/arrange.js ***!
  \***********************************************************************/
/*! exports provided: siblings, position, next, prev, forward, backward, front, back, before, after, insertBefore, insertAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return siblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "next", function() { return next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prev", function() { return prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backward", function() { return backward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "front", function() { return front; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "back", function() { return back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "before", function() { return before; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return after; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");



// Get all siblings, including myself
function siblings () {
  return this.parent().children()
}

// Get the curent position siblings
function position () {
  return this.parent().index(this)
}

// Get the next element (will return null if there is none)
function next () {
  return this.siblings()[this.position() + 1]
}

// Get the next element (will return null if there is none)
function prev () {
  return this.siblings()[this.position() - 1]
}

// Send given element one step forward
function forward () {
  var i = this.position() + 1
  var p = this.parent()

  // move node one step forward
  p.removeElement(this).add(this, i)

  // make sure defs node is always at the top
  if (typeof p.isRoot === 'function' && p.isRoot()) {
    p.node.appendChild(p.defs().node)
  }

  return this
}

// Send given element one step backward
function backward () {
  var i = this.position()

  if (i > 0) {
    this.parent().removeElement(this).add(this, i - 1)
  }

  return this
}

// Send given element all the way to the front
function front () {
  var p = this.parent()

  // Move node forward
  p.node.appendChild(this.node)

  // Make sure defs node is always at the top
  if (typeof p.isRoot === 'function' && p.isRoot()) {
    p.node.appendChild(p.defs().node)
  }

  return this
}

// Send given element all the way to the back
function back () {
  if (this.position() > 0) {
    this.parent().removeElement(this).add(this, 0)
  }

  return this
}

// Inserts a given element before the targeted element
function before (element) {
  element = Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["makeInstance"])(element)
  element.remove()

  var i = this.position()

  this.parent().add(element, i)

  return this
}

// Inserts a given element after the targeted element
function after (element) {
  element = Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["makeInstance"])(element)
  element.remove()

  var i = this.position()

  this.parent().add(element, i + 1)

  return this
}

function insertBefore (element) {
  element = Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["makeInstance"])(element)
  element.before(this)
  return this
}

function insertAfter (element) {
  element = Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["makeInstance"])(element)
  element.after(this)
  return this
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])('Dom', {
  siblings,
  position,
  next,
  prev,
  forward,
  backward,
  front,
  back,
  before,
  after,
  insertBefore,
  insertAfter
})


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/optional/class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/optional/class.js ***!
  \*********************************************************************/
/*! exports provided: classes, hasClass, addClass, removeClass, toggleClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony import */ var _core_regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/regex.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/regex.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");



// Return array of classes on the node
function classes () {
  var attr = this.attr('class')
  return attr == null ? [] : attr.trim().split(_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["delimiter"])
}

// Return true if class exists on the node, false otherwise
function hasClass (name) {
  return this.classes().indexOf(name) !== -1
}

// Add class to the node
function addClass (name) {
  if (!this.hasClass(name)) {
    var array = this.classes()
    array.push(name)
    this.attr('class', array.join(' '))
  }

  return this
}

// Remove class from the node
function removeClass (name) {
  if (this.hasClass(name)) {
    this.attr('class', this.classes().filter(function (c) {
      return c !== name
    }).join(' '))
  }

  return this
}

// Toggle the presence of a class on the node
function toggleClass (name) {
  return this.hasClass(name) ? this.removeClass(name) : this.addClass(name)
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])('Dom', {
  classes, hasClass, addClass, removeClass, toggleClass
})


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/optional/css.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/optional/css.js ***!
  \*******************************************************************/
/*! exports provided: css, show, hide, visible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visible", function() { return visible; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils.js */ "./node_modules/@svgdotjs/svg.js/src/utils/utils.js");
/* harmony import */ var _core_regex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/regex.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/regex.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");




// Dynamic style generator
function css (style, val) {
  let ret = {}
  if (arguments.length === 0) {
    // get full style as object
    this.node.style.cssText.split(/\s*;\s*/)
      .filter(function (el) {
        return !!el.length
      })
      .forEach(function (el) {
        let t = el.split(/\s*:\s*/)
        ret[t[0]] = t[1]
      })
    return ret
  }

  if (arguments.length < 2) {
    // get style properties in the array
    if (Array.isArray(style)) {
      for (let name of style) {
        let cased = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["camelCase"])(name)
        ret[cased] = this.node.style[cased]
      }
      return ret
    }

    // get style for property
    if (typeof style === 'string') {
      return this.node.style[Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["camelCase"])(style)]
    }

    // set styles in object
    if (typeof style === 'object') {
      for (let name in style) {
        // set empty string if null/undefined/'' was given
        this.node.style[Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["camelCase"])(name)]
          = (style[name] == null || _core_regex_js__WEBPACK_IMPORTED_MODULE_1__["isBlank"].test(style[name])) ? '' : style[name]
      }
    }
  }

  // set style for property
  if (arguments.length === 2) {
    this.node.style[Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["camelCase"])(style)]
      = (val == null || _core_regex_js__WEBPACK_IMPORTED_MODULE_1__["isBlank"].test(val)) ? '' : val
  }

  return this
}

// Show element
function show () {
  return this.css('display', '')
}

// Hide element
function hide () {
  return this.css('display', 'none')
}

// Is element visible?
function visible () {
  return this.css('display') !== 'none'
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_2__["registerMethods"])('Dom', {
  css, show, hide, visible
})


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/optional/data.js":
/*!********************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/optional/data.js ***!
  \********************************************************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");


// Store data values on svg nodes
function data (a, v, r) {
  if (typeof a === 'object') {
    for (v in a) {
      this.data(v, a[v])
    }
  } else if (arguments.length < 2) {
    try {
      return JSON.parse(this.attr('data-' + a))
    } catch (e) {
      return this.attr('data-' + a)
    }
  } else {
    this.attr('data-' + a,
      v === null ? null
      : r === true || typeof v === 'string' || typeof v === 'number' ? v
      : JSON.stringify(v)
    )
  }

  return this
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_0__["registerMethods"])('Dom', { data })


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/optional/memory.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/optional/memory.js ***!
  \**********************************************************************/
/*! exports provided: remember, forget, memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remember", function() { return remember; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forget", function() { return forget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memory", function() { return memory; });
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");


// Remember arbitrary data
function remember (k, v) {
  // remember every item in an object individually
  if (typeof arguments[0] === 'object') {
    for (var key in k) {
      this.remember(key, k[key])
    }
  } else if (arguments.length === 1) {
    // retrieve memory
    return this.memory()[k]
  } else {
    // store memory
    this.memory()[k] = v
  }

  return this
}

// Erase a given memory
function forget () {
  if (arguments.length === 0) {
    this._memory = {}
  } else {
    for (var i = arguments.length - 1; i >= 0; i--) {
      delete this.memory()[arguments[i]]
    }
  }
  return this
}

// This triggers creation of a new hidden class which is not performant
// However, this function is not rarely used so it will not happen frequently
// Return local memory object
function memory () {
  return (this._memory = this._memory || {})
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_0__["registerMethods"])('Dom', { remember, forget, memory })


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/optional/sugar.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/optional/sugar.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/event.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/event.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _types_Color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/Color.js */ "./node_modules/@svgdotjs/svg.js/src/types/Color.js");
/* harmony import */ var _elements_Element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/Element.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Element.js");
/* harmony import */ var _types_Matrix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types/Matrix.js */ "./node_modules/@svgdotjs/svg.js/src/types/Matrix.js");
/* harmony import */ var _types_Point_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types/Point.js */ "./node_modules/@svgdotjs/svg.js/src/types/Point.js");
/* harmony import */ var _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../types/SVGNumber.js */ "./node_modules/@svgdotjs/svg.js/src/types/SVGNumber.js");








// Define list of available attributes for stroke and fill
var sugar = {
  stroke: [ 'color', 'width', 'opacity', 'linecap', 'linejoin', 'miterlimit', 'dasharray', 'dashoffset' ],
  fill: [ 'color', 'opacity', 'rule' ],
  prefix: function (t, a) {
    return a === 'color' ? t : t + '-' + a
  }
}

// Add sugar for fill and stroke
;[ 'fill', 'stroke' ].forEach(function (m) {
  var extension = {}
  var i

  extension[m] = function (o) {
    if (typeof o === 'undefined') {
      return this.attr(m)
    }
    if (typeof o === 'string' || o instanceof _types_Color_js__WEBPACK_IMPORTED_MODULE_2__["default"] || _types_Color_js__WEBPACK_IMPORTED_MODULE_2__["default"].isRgb(o) || (o instanceof _elements_Element_js__WEBPACK_IMPORTED_MODULE_3__["default"])) {
      this.attr(m, o)
    } else {
      // set all attributes from sugar.fill and sugar.stroke list
      for (i = sugar[m].length - 1; i >= 0; i--) {
        if (o[sugar[m][i]] != null) {
          this.attr(sugar.prefix(m, sugar[m][i]), o[sugar[m][i]])
        }
      }
    }

    return this
  }

  Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])([ 'Element', 'Runner' ], extension)
})

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])([ 'Element', 'Runner' ], {
  // Let the user set the matrix directly
  matrix: function (mat, b, c, d, e, f) {
    // Act as a getter
    if (mat == null) {
      return new _types_Matrix_js__WEBPACK_IMPORTED_MODULE_4__["default"](this)
    }

    // Act as a setter, the user can pass a matrix or a set of numbers
    return this.attr('transform', new _types_Matrix_js__WEBPACK_IMPORTED_MODULE_4__["default"](mat, b, c, d, e, f))
  },

  // Map rotation to transform
  rotate: function (angle, cx, cy) {
    return this.transform({ rotate: angle, ox: cx, oy: cy }, true)
  },

  // Map skew to transform
  skew: function (x, y, cx, cy) {
    return arguments.length === 1 || arguments.length === 3
      ? this.transform({ skew: x, ox: y, oy: cx }, true)
      : this.transform({ skew: [ x, y ], ox: cx, oy: cy }, true)
  },

  shear: function (lam, cx, cy) {
    return this.transform({ shear: lam, ox: cx, oy: cy }, true)
  },

  // Map scale to transform
  scale: function (x, y, cx, cy) {
    return arguments.length === 1 || arguments.length === 3
      ? this.transform({ scale: x, ox: y, oy: cx }, true)
      : this.transform({ scale: [ x, y ], ox: cx, oy: cy }, true)
  },

  // Map translate to transform
  translate: function (x, y) {
    return this.transform({ translate: [ x, y ] }, true)
  },

  // Map relative translations to transform
  relative: function (x, y) {
    return this.transform({ relative: [ x, y ] }, true)
  },

  // Map flip to transform
  flip: function (direction, around) {
    var directionString = typeof direction === 'string' ? direction
      : isFinite(direction) ? 'both'
      : 'both'
    var origin = (direction === 'both' && isFinite(around)) ? [ around, around ]
      : (direction === 'x') ? [ around, 0 ]
      : (direction === 'y') ? [ 0, around ]
      : isFinite(direction) ? [ direction, direction ]
      : [ 0, 0 ]
    return this.transform({ flip: directionString, origin: origin }, true)
  },

  // Opacity
  opacity: function (value) {
    return this.attr('opacity', value)
  }
})

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])('radius', {
  // Add x and y radius
  radius: function (x, y) {
    var type = (this._element || this).type
    return type === 'radialGradient' || type === 'radialGradient'
      ? this.attr('r', new _types_SVGNumber_js__WEBPACK_IMPORTED_MODULE_6__["default"](x))
      : this.rx(x).ry(y == null ? x : y)
  }
})

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])('Path', {
  // Get path length
  length: function () {
    return this.node.getTotalLength()
  },
  // Get point at length
  pointAt: function (length) {
    return new _types_Point_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.node.getPointAtLength(length))
  }
})

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])([ 'Element', 'Runner' ], {
  // Set font
  font: function (a, v) {
    if (typeof a === 'object') {
      for (v in a) this.font(v, a[v])
      return this
    }

    return a === 'leading'
      ? this.leading(v)
      : a === 'anchor'
        ? this.attr('text-anchor', v)
        : a === 'size' || a === 'family' || a === 'weight' || a === 'stretch' || a === 'variant' || a === 'style'
          ? this.attr('font-' + a, v)
          : this.attr(a, v)
  }
})

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])('Text', {
  ax (x) {
    return this.attr('x', x)
  },
  ay (y) {
    return this.attr('y', y)
  },
  amove (x, y) {
    return this.ax(x).ay(y)
  }
})

// Add events to elements
const methods = [ 'click',
  'dblclick',
  'mousedown',
  'mouseup',
  'mouseover',
  'mouseout',
  'mousemove',
  'mouseenter',
  'mouseleave',
  'touchstart',
  'touchmove',
  'touchleave',
  'touchend',
  'touchcancel' ].reduce(function (last, event) {
  // add event to Element
  const fn = function (f) {
    if (f === null) {
      Object(_core_event_js__WEBPACK_IMPORTED_MODULE_0__["off"])(this, event)
    } else {
      Object(_core_event_js__WEBPACK_IMPORTED_MODULE_0__["on"])(this, event, f)
    }
    return this
  }

  last[event] = fn
  return last
}, {})

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_1__["registerMethods"])('Element', methods)


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/modules/optional/transform.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/modules/optional/transform.js ***!
  \*************************************************************************/
/*! exports provided: untransform, matrixify, toParent, toRoot, transform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untransform", function() { return untransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matrixify", function() { return matrixify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toParent", function() { return toParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRoot", function() { return toRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils.js */ "./node_modules/@svgdotjs/svg.js/src/utils/utils.js");
/* harmony import */ var _core_regex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/regex.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/regex.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _types_Matrix_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/Matrix.js */ "./node_modules/@svgdotjs/svg.js/src/types/Matrix.js");





// Reset all transformations
function untransform () {
  return this.attr('transform', null)
}

// merge the whole transformation chain into one matrix and returns it
function matrixify () {
  var matrix = (this.attr('transform') || '')
    // split transformations
    .split(_core_regex_js__WEBPACK_IMPORTED_MODULE_1__["transforms"]).slice(0, -1).map(function (str) {
      // generate key => value pairs
      var kv = str.trim().split('(')
      return [ kv[0],
        kv[1].split(_core_regex_js__WEBPACK_IMPORTED_MODULE_1__["delimiter"])
          .map(function (str) {
            return parseFloat(str)
          })
      ]
    })
    .reverse()
    // merge every transformation into one matrix
    .reduce(function (matrix, transform) {
      if (transform[0] === 'matrix') {
        return matrix.lmultiply(_types_Matrix_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromArray(transform[1]))
      }
      return matrix[transform[0]].apply(matrix, transform[1])
    }, new _types_Matrix_js__WEBPACK_IMPORTED_MODULE_3__["default"]())

  return matrix
}

// add an element to another parent without changing the visual representation on the screen
function toParent (parent) {
  if (this === parent) return this
  var ctm = this.screenCTM()
  var pCtm = parent.screenCTM().inverse()

  this.addTo(parent).untransform().transform(pCtm.multiply(ctm))

  return this
}

// same as above with parent equals root-svg
function toRoot () {
  return this.toParent(this.root())
}

// Add transformations
function transform (o, relative) {
  // Act as a getter if no object was passed
  if (o == null || typeof o === 'string') {
    var decomposed = new _types_Matrix_js__WEBPACK_IMPORTED_MODULE_3__["default"](this).decompose()
    return o == null ? decomposed : decomposed[o]
  }

  if (!_types_Matrix_js__WEBPACK_IMPORTED_MODULE_3__["default"].isMatrixLike(o)) {
    // Set the origin according to the defined transform
    o = { ...o, origin: Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getOrigin"])(o, this) }
  }

  // The user can pass a boolean, an Element or an Matrix or nothing
  var cleanRelative = relative === true ? this : (relative || false)
  var result = new _types_Matrix_js__WEBPACK_IMPORTED_MODULE_3__["default"](cleanRelative).transform(o)
  return this.attr('transform', result)
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_2__["registerMethods"])('Element', {
  untransform, matrixify, toParent, toRoot, transform
})


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/types/ArrayPolyfill.js":
/*!******************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/types/ArrayPolyfill.js ***!
  \******************************************************************/
/*! exports provided: subClassArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subClassArray", function() { return subClassArray; });
/* eslint no-new-func: "off" */
const subClassArray = (function () {
  try {
    // try es6 subclassing
    return Function('name', 'baseClass', '_constructor', [
      'baseClass = baseClass || Array',
      'return {',
      '  [name]: class extends baseClass {',
      '    constructor (...args) {',
      '      super(...args)',
      '      _constructor && _constructor.apply(this, args)',
      '    }',
      '  }',
      '}[name]'
    ].join('\n'))
  } catch (e) {
    // Use es5 approach
    return (name, baseClass = Array, _constructor) => {
      const Arr = function () {
        baseClass.apply(this, arguments)
        _constructor && _constructor.apply(this, arguments)
      }

      Arr.prototype = Object.create(baseClass.prototype)
      Arr.prototype.constructor = Arr

      Arr.prototype.map = function (fn) {
        const arr = new Arr()
        arr.push.apply(arr, Array.prototype.map.call(this, fn))
        return arr
      }

      return Arr
    }
  }
})()


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/types/Base.js":
/*!*********************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/types/Base.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
class Base {
  // constructor (node/*, {extensions = []} */) {
  //   // this.tags = []
  //   //
  //   // for (let extension of extensions) {
  //   //   extension.setup.call(this, node)
  //   //   this.tags.push(extension.name)
  //   // }
  // }
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/types/Box.js":
/*!********************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/types/Box.js ***!
  \********************************************************/
/*! exports provided: default, bbox, rbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bbox", function() { return bbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rbox", function() { return rbox; });
/* harmony import */ var _modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/core/regex.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/regex.js");
/* harmony import */ var _utils_window_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/window.js */ "./node_modules/@svgdotjs/svg.js/src/utils/window.js");
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _utils_methods_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _Matrix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Matrix.js */ "./node_modules/@svgdotjs/svg.js/src/types/Matrix.js");
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Point.js */ "./node_modules/@svgdotjs/svg.js/src/types/Point.js");
/* harmony import */ var _modules_core_parser_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/core/parser.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/parser.js");








function isNulledBox (box) {
  return !box.width && !box.height && !box.x && !box.y
}

function domContains (node) {
  return node === _utils_window_js__WEBPACK_IMPORTED_MODULE_1__["globals"].document
    || (_utils_window_js__WEBPACK_IMPORTED_MODULE_1__["globals"].document.documentElement.contains || function (node) {
      // This is IE - it does not support contains() for top-level SVGs
      while (node.parentNode) {
        node = node.parentNode
      }
      return node === _utils_window_js__WEBPACK_IMPORTED_MODULE_1__["globals"].document
    }).call(_utils_window_js__WEBPACK_IMPORTED_MODULE_1__["globals"].document.documentElement, node)
}

class Box {
  constructor (...args) {
    this.init(...args)
  }

  init (source) {
    var base = [ 0, 0, 0, 0 ]
    source = typeof source === 'string' ? source.split(_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["delimiter"]).map(parseFloat)
      : Array.isArray(source) ? source
      : typeof source === 'object' ? [ source.left != null ? source.left
      : source.x, source.top != null ? source.top : source.y, source.width, source.height ]
      : arguments.length === 4 ? [].slice.call(arguments)
      : base

    this.x = source[0] || 0
    this.y = source[1] || 0
    this.width = this.w = source[2] || 0
    this.height = this.h = source[3] || 0

    // Add more bounding box properties
    this.x2 = this.x + this.w
    this.y2 = this.y + this.h
    this.cx = this.x + this.w / 2
    this.cy = this.y + this.h / 2

    return this
  }

  // Merge rect box with another, return a new instance
  merge (box) {
    let x = Math.min(this.x, box.x)
    let y = Math.min(this.y, box.y)
    let width = Math.max(this.x + this.width, box.x + box.width) - x
    let height = Math.max(this.y + this.height, box.y + box.height) - y

    return new Box(x, y, width, height)
  }

  transform (m) {
    if (!(m instanceof _Matrix_js__WEBPACK_IMPORTED_MODULE_4__["default"])) {
      m = new _Matrix_js__WEBPACK_IMPORTED_MODULE_4__["default"](m)
    }

    let xMin = Infinity
    let xMax = -Infinity
    let yMin = Infinity
    let yMax = -Infinity

    let pts = [
      new _Point_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.x, this.y),
      new _Point_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.x2, this.y),
      new _Point_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.x, this.y2),
      new _Point_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.x2, this.y2)
    ]

    pts.forEach(function (p) {
      p = p.transform(m)
      xMin = Math.min(xMin, p.x)
      xMax = Math.max(xMax, p.x)
      yMin = Math.min(yMin, p.y)
      yMax = Math.max(yMax, p.y)
    })

    return new Box(
      xMin, yMin,
      xMax - xMin,
      yMax - yMin
    )
  }

  addOffset () {
    // offset by window scroll position, because getBoundingClientRect changes when window is scrolled
    this.x += _utils_window_js__WEBPACK_IMPORTED_MODULE_1__["globals"].window.pageXOffset
    this.y += _utils_window_js__WEBPACK_IMPORTED_MODULE_1__["globals"].window.pageYOffset
    return this
  }

  toString () {
    return this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height
  }

  toArray () {
    return [ this.x, this.y, this.width, this.height ]
  }

  isNulled () {
    return isNulledBox(this)
  }
}

function getBox (cb, retry) {
  let box

  try {
    box = cb(this.node)

    if (isNulledBox(box) && !domContains(this.node)) {
      throw new Error('Element not in the dom')
    }
  } catch (e) {
    box = retry(this)
  }

  return box
}

function bbox () {
  return new Box(getBox.call(this, (node) => node.getBBox(), (el) => {
    try {
      let clone = el.clone().addTo(Object(_modules_core_parser_js__WEBPACK_IMPORTED_MODULE_6__["default"])().svg).show()
      let box = clone.node.getBBox()
      clone.remove()
      return box
    } catch (e) {
      throw new Error('Getting bbox of element "' + el.node.nodeName + '" is not possible. ' + e.toString())
    }
  }))
}

function rbox (el) {
  let box = new Box(getBox.call(this, (node) => node.getBoundingClientRect(), (el) => {
    throw new Error('Getting rbox of element "' + el.node.nodeName + '" is not possible')
  }))
  if (el) return box.transform(el.screenCTM().inverse())
  return box.addOffset()
}

Object(_utils_methods_js__WEBPACK_IMPORTED_MODULE_3__["registerMethods"])({
  viewbox: {
    viewbox (x, y, width, height) {
      // act as getter
      if (x == null) return new Box(this.attr('viewBox'))

      // act as setter
      return this.attr('viewBox', new Box(x, y, width, height))
    },

    zoom (level, point) {
      let width = this.node.clientWidth
      let height = this.node.clientHeight
      const v = this.viewbox()

      // Firefox does not support clientHeight and returns 0
      // https://bugzilla.mozilla.org/show_bug.cgi?id=874811
      if (!width && !height) {
        var style = window.getComputedStyle(this.node)
        width = parseFloat(style.getPropertyValue('width'))
        height = parseFloat(style.getPropertyValue('height'))
      }

      const zoomX = width / v.width
      const zoomY = height / v.height
      const zoom = Math.min(zoomX, zoomY)

      if (level == null) {
        return zoom
      }

      let zoomAmount = zoom / level
      if (zoomAmount === Infinity) zoomAmount = Number.MIN_VALUE

      point = point || new _Point_js__WEBPACK_IMPORTED_MODULE_5__["default"](width / 2 / zoomX + v.x, height / 2 / zoomY + v.y)

      const box = new Box(v).transform(
        new _Matrix_js__WEBPACK_IMPORTED_MODULE_4__["default"]({ scale: zoomAmount, origin: point })
      )

      return this.viewbox(box)
    }
  }
})

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_2__["register"])(Box, 'Box')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/types/Color.js":
/*!**********************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/types/Color.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Color; });
/* harmony import */ var _modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/core/regex.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/regex.js");



function sixDigitHex (hex) {
  return hex.length === 4
    ? [ '#',
      hex.substring(1, 2), hex.substring(1, 2),
      hex.substring(2, 3), hex.substring(2, 3),
      hex.substring(3, 4), hex.substring(3, 4)
    ].join('')
    : hex
}

function componentHex (component) {
  const integer = Math.round(component)
  const bounded = Math.max(0, Math.min(255, integer))
  const hex = bounded.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}

function is (object, space) {
  for (let i = space.length; i--;) {
    if (object[space[i]] == null) {
      return false
    }
  }
  return true
}

function getParameters (a, b) {
  const params = is(a, 'rgb') ? { _a: a.r, _b: a.g, _c: a.b, space: 'rgb' }
    : is(a, 'xyz') ? { _a: a.x, _b: a.y, _c: a.z, _d: 0, space: 'xyz' }
    : is(a, 'hsl') ? { _a: a.h, _b: a.s, _c: a.l, _d: 0, space: 'hsl' }
    : is(a, 'lab') ? { _a: a.l, _b: a.a, _c: a.b, _d: 0, space: 'lab' }
    : is(a, 'lch') ? { _a: a.l, _b: a.c, _c: a.h, _d: 0, space: 'lch' }
    : is(a, 'cmyk') ? { _a: a.c, _b: a.m, _c: a.y, _d: a.k, space: 'cmyk' }
    : { _a: 0, _b: 0, _c: 0, space: 'rgb' }

  params.space = b || params.space
  return params
}

function cieSpace (space) {
  if (space === 'lab' || space === 'xyz' || space === 'lch') {
    return true
  } else {
    return false
  }
}

function hueToRgb (p, q, t) {
  if (t < 0) t += 1
  if (t > 1) t -= 1
  if (t < 1 / 6) return p + (q - p) * 6 * t
  if (t < 1 / 2) return q
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
  return p
}

class Color {
  constructor (...inputs) {
    this.init(...inputs)
  }

  init (a = 0, b = 0, c = 0, d = 0, space = 'rgb') {
    // This catches the case when a falsy value is passed like ''
    a = !a ? 0 : a

    // Reset all values in case the init function is rerun with new color space
    if (this.space) {
      for (let component in this.space) {
        delete this[this.space[component]]
      }
    }

    if (typeof a === 'number') {
      // Allow for the case that we don't need d...
      space = typeof d === 'string' ? d : space
      d = typeof d === 'string' ? 0 : d

      // Assign the values straight to the color
      Object.assign(this, { _a: a, _b: b, _c: c, _d: d, space })
    // If the user gave us an array, make the color from it
    } else if (a instanceof Array) {
      this.space = b || (typeof a[3] === 'string' ? a[3] : a[4]) || 'rgb'
      Object.assign(this, { _a: a[0], _b: a[1], _c: a[2], _d: a[3] || 0 })
    } else if (a instanceof Object) {
      // Set the object up and assign its values directly
      const values = getParameters(a, b)
      Object.assign(this, values)
    } else if (typeof a === 'string') {
      if (_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["isRgb"].test(a)) {
        const noWhitespace = a.replace(_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["whitespace"], '')
        const [ _a, _b, _c ] = _modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["rgb"].exec(noWhitespace)
          .slice(1, 4).map(v => parseInt(v))
        Object.assign(this, { _a, _b, _c, _d: 0, space: 'rgb' })
      } else if (_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["isHex"].test(a)) {
        const hexParse = v => parseInt(v, 16)
        const [ , _a, _b, _c ] = _modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["hex"].exec(sixDigitHex(a)).map(hexParse)
        Object.assign(this, { _a, _b, _c, _d: 0, space: 'rgb' })
      } else throw Error(`Unsupported string format, can't construct Color`)
    }

    // Now add the components as a convenience
    const { _a, _b, _c, _d } = this
    const components = this.space === 'rgb' ? { r: _a, g: _b, b: _c }
      : this.space === 'xyz' ? { x: _a, y: _b, z: _c }
      : this.space === 'hsl' ? { h: _a, s: _b, l: _c }
      : this.space === 'lab' ? { l: _a, a: _b, b: _c }
      : this.space === 'lch' ? { l: _a, c: _b, h: _c }
      : this.space === 'cmyk' ? { c: _a, m: _b, y: _c, k: _d }
      : {}
    Object.assign(this, components)
  }

  /*
  Conversion Methods
  */

  rgb () {
    if (this.space === 'rgb') {
      return this
    } else if (cieSpace(this.space)) {
      // Convert to the xyz color space
      let { x, y, z } = this
      if (this.space === 'lab' || this.space === 'lch') {
        // Get the values in the lab space
        let { l, a, b } = this
        if (this.space === 'lch') {
          let { c, h } = this
          const dToR = Math.PI / 180
          a = c * Math.cos(dToR * h)
          b = c * Math.sin(dToR * h)
        }

        // Undo the nonlinear function
        const yL = (l + 16) / 116
        const xL = a / 500 + yL
        const zL = yL - b / 200

        // Get the xyz values
        const ct = 16 / 116
        const mx = 0.008856
        const nm = 7.787
        x = 0.95047 * ((xL ** 3 > mx) ? xL ** 3 : (xL - ct) / nm)
        y = 1.00000 * ((yL ** 3 > mx) ? yL ** 3 : (yL - ct) / nm)
        z = 1.08883 * ((zL ** 3 > mx) ? zL ** 3 : (zL - ct) / nm)
      }

      // Convert xyz to unbounded rgb values
      const rU = x * 3.2406 + y * -1.5372 + z * -0.4986
      const gU = x * -0.9689 + y * 1.8758 + z * 0.0415
      const bU = x * 0.0557 + y * -0.2040 + z * 1.0570

      // Convert the values to true rgb values
      let pow = Math.pow
      let bd = 0.0031308
      const r = (rU > bd) ? (1.055 * pow(rU, 1 / 2.4) - 0.055) : 12.92 * rU
      const g = (gU > bd) ? (1.055 * pow(gU, 1 / 2.4) - 0.055) : 12.92 * gU
      const b = (bU > bd) ? (1.055 * pow(bU, 1 / 2.4) - 0.055) : 12.92 * bU

      // Make and return the color
      const color = new Color(255 * r, 255 * g, 255 * b)
      return color
    } else if (this.space === 'hsl') {
      // https://bgrins.github.io/TinyColor/docs/tinycolor.html
      // Get the current hsl values
      let { h, s, l } = this
      h /= 360
      s /= 100
      l /= 100

      // If we are grey, then just make the color directly
      if (s === 0) {
        l *= 255
        let color = new Color(l, l, l)
        return color
      }

      // TODO I have no idea what this does :D If you figure it out, tell me!
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q

      // Get the rgb values
      const r = 255 * hueToRgb(p, q, h + 1 / 3)
      const g = 255 * hueToRgb(p, q, h)
      const b = 255 * hueToRgb(p, q, h - 1 / 3)

      // Make a new color
      const color = new Color(r, g, b)
      return color
    } else if (this.space === 'cmyk') {
      // https://gist.github.com/felipesabino/5066336
      // Get the normalised cmyk values
      const { c, m, y, k } = this

      // Get the rgb values
      const r = 255 * (1 - Math.min(1, c * (1 - k) + k))
      const g = 255 * (1 - Math.min(1, m * (1 - k) + k))
      const b = 255 * (1 - Math.min(1, y * (1 - k) + k))

      // Form the color and return it
      const color = new Color(r, g, b)
      return color
    } else {
      return this
    }
  }

  lab () {
    // Get the xyz color
    const { x, y, z } = this.xyz()

    // Get the lab components
    const l = (116 * y) - 16
    const a = 500 * (x - y)
    const b = 200 * (y - z)

    // Construct and return a new color
    const color = new Color(l, a, b, 'lab')
    return color
  }

  xyz () {

    // Normalise the red, green and blue values
    const { _a: r255, _b: g255, _c: b255 } = this.rgb()
    const [ r, g, b ] = [ r255, g255, b255 ].map(v => v / 255)

    // Convert to the lab rgb space
    const rL = (r > 0.04045) ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92
    const gL = (g > 0.04045) ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92
    const bL = (b > 0.04045) ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92

    // Convert to the xyz color space without bounding the values
    const xU = (rL * 0.4124 + gL * 0.3576 + bL * 0.1805) / 0.95047
    const yU = (rL * 0.2126 + gL * 0.7152 + bL * 0.0722) / 1.00000
    const zU = (rL * 0.0193 + gL * 0.1192 + bL * 0.9505) / 1.08883

    // Get the proper xyz values by applying the bounding
    const x = (xU > 0.008856) ? Math.pow(xU, 1 / 3) : (7.787 * xU) + 16 / 116
    const y = (yU > 0.008856) ? Math.pow(yU, 1 / 3) : (7.787 * yU) + 16 / 116
    const z = (zU > 0.008856) ? Math.pow(zU, 1 / 3) : (7.787 * zU) + 16 / 116

    // Make and return the color
    const color = new Color(x, y, z, 'xyz')
    return color
  }

  lch () {

    // Get the lab color directly
    const { l, a, b } = this.lab()

    // Get the chromaticity and the hue using polar coordinates
    const c = Math.sqrt(a ** 2 + b ** 2)
    let h = 180 * Math.atan2(b, a) / Math.PI
    if (h < 0) {
      h *= -1
      h = 360 - h
    }

    // Make a new color and return it
    const color = new Color(l, c, h, 'lch')
    return color
  }

  hsl () {

    // Get the rgb values
    const { _a, _b, _c } = this.rgb()
    const [ r, g, b ] = [ _a, _b, _c ].map(v => v / 255)

    // Find the maximum and minimum values to get the lightness
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const l = (max + min) / 2

    // If the r, g, v values are identical then we are grey
    const isGrey = max === min

    // Calculate the hue and saturation
    const delta = max - min
    const s = isGrey ? 0
      : l > 0.5 ? delta / (2 - max - min)
      : delta / (max + min)
    const h = isGrey ? 0
      : max === r ? ((g - b) / delta + (g < b ? 6 : 0)) / 6
      : max === g ? ((b - r) / delta + 2) / 6
      : max === b ? ((r - g) / delta + 4) / 6
      : 0

    // Construct and return the new color
    const color = new Color(360 * h, 100 * s, 100 * l, 'hsl')
    return color
  }

  cmyk () {

    // Get the rgb values for the current color
    const { _a, _b, _c } = this.rgb()
    const [ r, g, b ] = [ _a, _b, _c ].map(v => v / 255)

    // Get the cmyk values in an unbounded format
    const k = Math.min(1 - r, 1 - g, 1 - b)

    if (k === 1) {
      // Catch the black case
      return new Color(0, 0, 0, 1, 'cmyk')
    }

    const c = (1 - r - k) / (1 - k)
    const m = (1 - g - k) / (1 - k)
    const y = (1 - b - k) / (1 - k)

    // Construct the new color
    const color = new Color(c, m, y, k, 'cmyk')
    return color
  }

  /*
  Input and Output methods
  */

  _clamped () {
    let { _a, _b, _c } = this.rgb()
    let { max, min, round } = Math
    let format = v => max(0, min(round(v), 255))
    return [ _a, _b, _c ].map(format)
  }

  toHex () {
    let [ r, g, b ] = this._clamped().map(componentHex)
    return `#${r}${g}${b}`
  }

  toString () {
    return this.toHex()
  }

  toRgb () {
    let [ rV, gV, bV ] = this._clamped()
    let string = `rgb(${rV},${gV},${bV})`
    return string
  }

  toArray () {
    let { _a, _b, _c, _d, space } = this
    return [ _a, _b, _c, _d, space ]
  }

  /*
  Generating random colors
  */

  static random (mode = 'vibrant', t, u) {

    // Get the math modules
    const { random, round, sin, PI: pi } = Math

    // Run the correct generator
    if (mode === 'vibrant') {

      const l = (81 - 57) * random() + 57
      const c = (83 - 45) * random() + 45
      const h = 360 * random()
      const color = new Color(l, c, h, 'lch')
      return color

    } else if (mode === 'sine') {

      t = t == null ? random() : t
      const r = round(80 * sin(2 * pi * t / 0.5 + 0.01) + 150)
      const g = round(50 * sin(2 * pi * t / 0.5 + 4.6) + 200)
      const b = round(100 * sin(2 * pi * t / 0.5 + 2.3) + 150)
      const color = new Color(r, g, b)
      return color

    } else if (mode === 'pastel') {

      const l = (94 - 86) * random() + 86
      const c = (26 - 9) * random() + 9
      const h = 360 * random()
      const color = new Color(l, c, h, 'lch')
      return color

    } else if (mode === 'dark') {

      const l = 10 + 10 * random()
      const c = (125 - 75) * random() + 86
      const h = 360 * random()
      const color = new Color(l, c, h, 'lch')
      return color

    } else if (mode === 'rgb') {

      const r = 255 * random()
      const g = 255 * random()
      const b = 255 * random()
      const color = new Color(r, g, b)
      return color

    } else if (mode === 'lab') {

      const l = 100 * random()
      const a = 256 * random() - 128
      const b = 256 * random() - 128
      const color = new Color(l, a, b, 'lab')
      return color

    } else if (mode === 'grey') {

      const grey = 255 * random()
      const color = new Color(grey, grey, grey)
      return color

    }
  }

  /*
  Constructing colors
  */

  // Test if given value is a color string
  static test (color) {
    return (typeof color === 'string')
      && (_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["isHex"].test(color) || _modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["isRgb"].test(color))
  }

  // Test if given value is an rgb object
  static isRgb (color) {
    return color && typeof color.r === 'number'
      && typeof color.g === 'number'
      && typeof color.b === 'number'
  }

  // Test if given value is a color
  static isColor (color) {
    return color && (
      color instanceof Color
      || this.isRgb(color)
      || this.test(color)
    )
  }
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/types/EventTarget.js":
/*!****************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/types/EventTarget.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventTarget; });
/* harmony import */ var _modules_core_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/core/event.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/event.js");
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _Base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base.js */ "./node_modules/@svgdotjs/svg.js/src/types/Base.js");




class EventTarget extends _Base_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor ({ events = {} } = {}) {
    super()
    this.events = events
  }

  addEventListener () {}

  dispatch (event, data) {
    return Object(_modules_core_event_js__WEBPACK_IMPORTED_MODULE_0__["dispatch"])(this, event, data)
  }

  dispatchEvent (event) {
    const bag = this.getEventHolder().events
    if (!bag) return true

    const events = bag[event.type]

    for (let i in events) {
      for (let j in events[i]) {
        events[i][j](event)
      }
    }

    return !event.defaultPrevented
  }

  // Fire given event
  fire (event, data) {
    this.dispatch(event, data)
    return this
  }

  getEventHolder () {
    return this
  }

  getEventTarget () {
    return this
  }

  // Unbind event from listener
  off (event, listener) {
    Object(_modules_core_event_js__WEBPACK_IMPORTED_MODULE_0__["off"])(this, event, listener)
    return this
  }

  // Bind given event to listener
  on (event, listener, binding, options) {
    Object(_modules_core_event_js__WEBPACK_IMPORTED_MODULE_0__["on"])(this, event, listener, binding, options)
    return this
  }

  removeEventListener () {}
}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["register"])(EventTarget, 'EventTarget')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/types/List.js":
/*!*********************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/types/List.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _ArrayPolyfill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArrayPolyfill.js */ "./node_modules/@svgdotjs/svg.js/src/types/ArrayPolyfill.js");



const List = Object(_ArrayPolyfill_js__WEBPACK_IMPORTED_MODULE_1__["subClassArray"])('List', Array, function (arr = []) {
  // This catches the case, that native map tries to create an array with new Array(1)
  if (typeof arr === 'number') return this
  this.length = 0
  this.push(...arr)
})

/* harmony default export */ __webpack_exports__["default"] = (List);

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(List, {
  each (fnOrMethodName, ...args) {
    if (typeof fnOrMethodName === 'function') {
      return this.map((el) => {
        return fnOrMethodName.call(el, el)
      })
    } else {
      return this.map(el => {
        return el[fnOrMethodName](...args)
      })
    }
  },

  toArray () {
    return Array.prototype.concat.apply([], this)
  }
})

const reserved = ['toArray', 'constructor', 'each']

List.extend = function (methods) {
  methods = methods.reduce((obj, name) => {
    // Don't overwrite own methods
    if (reserved.includes(name)) return obj

    // Don't add private methods
    if (name[0] === '_') return obj

    // Relay every call to each()
    obj[name] = function (...attrs) {
      return this.each(name, ...attrs)
    }
    return obj
  }, {})

  Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(List, methods)
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/types/Matrix.js":
/*!***********************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/types/Matrix.js ***!
  \***********************************************************/
/*! exports provided: default, ctm, screenCTM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Matrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ctm", function() { return ctm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenCTM", function() { return screenCTM; });
/* harmony import */ var _modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/core/regex.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/regex.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/@svgdotjs/svg.js/src/utils/utils.js");
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _elements_Element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/Element.js */ "./node_modules/@svgdotjs/svg.js/src/elements/Element.js");
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Point.js */ "./node_modules/@svgdotjs/svg.js/src/types/Point.js");






function closeEnough (a, b, threshold) {
  return Math.abs(b - a) < (threshold || 1e-6)
}

class Matrix {
  constructor (...args) {
    this.init(...args)
  }

  // Initialize
  init (source) {
    var base = Matrix.fromArray([ 1, 0, 0, 1, 0, 0 ])

    // ensure source as object
    source = source instanceof _elements_Element_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? source.matrixify()
      : typeof source === 'string' ? Matrix.fromArray(source.split(_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["delimiter"]).map(parseFloat))
      : Array.isArray(source) ? Matrix.fromArray(source)
      : (typeof source === 'object' && Matrix.isMatrixLike(source)) ? source
      : (typeof source === 'object') ? new Matrix().transform(source)
      : arguments.length === 6 ? Matrix.fromArray([].slice.call(arguments))
      : base

    // Merge the source matrix with the base matrix
    this.a = source.a != null ? source.a : base.a
    this.b = source.b != null ? source.b : base.b
    this.c = source.c != null ? source.c : base.c
    this.d = source.d != null ? source.d : base.d
    this.e = source.e != null ? source.e : base.e
    this.f = source.f != null ? source.f : base.f

    return this
  }

  // Clones this matrix
  clone () {
    return new Matrix(this)
  }

  // Transform a matrix into another matrix by manipulating the space
  transform (o) {
    // Check if o is a matrix and then left multiply it directly
    if (Matrix.isMatrixLike(o)) {
      var matrix = new Matrix(o)
      return matrix.multiplyO(this)
    }

    // Get the proposed transformations and the current transformations
    var t = Matrix.formatTransforms(o)
    var current = this
    let { x: ox, y: oy } = new _Point_js__WEBPACK_IMPORTED_MODULE_4__["default"](t.ox, t.oy).transform(current)

    // Construct the resulting matrix
    var transformer = new Matrix()
      .translateO(t.rx, t.ry)
      .lmultiplyO(current)
      .translateO(-ox, -oy)
      .scaleO(t.scaleX, t.scaleY)
      .skewO(t.skewX, t.skewY)
      .shearO(t.shear)
      .rotateO(t.theta)
      .translateO(ox, oy)

    // If we want the origin at a particular place, we force it there
    if (isFinite(t.px) || isFinite(t.py)) {
      const origin = new _Point_js__WEBPACK_IMPORTED_MODULE_4__["default"](ox, oy).transform(transformer)
      // TODO: Replace t.px with isFinite(t.px)
      const dx = t.px ? t.px - origin.x : 0
      const dy = t.py ? t.py - origin.y : 0
      transformer.translateO(dx, dy)
    }

    // Translate now after positioning
    transformer.translateO(t.tx, t.ty)
    return transformer
  }

  // Applies a matrix defined by its affine parameters
  compose (o) {
    if (o.origin) {
      o.originX = o.origin[0]
      o.originY = o.origin[1]
    }
    // Get the parameters
    var ox = o.originX || 0
    var oy = o.originY || 0
    var sx = o.scaleX || 1
    var sy = o.scaleY || 1
    var lam = o.shear || 0
    var theta = o.rotate || 0
    var tx = o.translateX || 0
    var ty = o.translateY || 0

    // Apply the standard matrix
    var result = new Matrix()
      .translateO(-ox, -oy)
      .scaleO(sx, sy)
      .shearO(lam)
      .rotateO(theta)
      .translateO(tx, ty)
      .lmultiplyO(this)
      .translateO(ox, oy)
    return result
  }

  // Decomposes this matrix into its affine parameters
  decompose (cx = 0, cy = 0) {
    // Get the parameters from the matrix
    var a = this.a
    var b = this.b
    var c = this.c
    var d = this.d
    var e = this.e
    var f = this.f

    // Figure out if the winding direction is clockwise or counterclockwise
    var determinant = a * d - b * c
    var ccw = determinant > 0 ? 1 : -1

    // Since we only shear in x, we can use the x basis to get the x scale
    // and the rotation of the resulting matrix
    var sx = ccw * Math.sqrt(a * a + b * b)
    var thetaRad = Math.atan2(ccw * b, ccw * a)
    var theta = 180 / Math.PI * thetaRad
    var ct = Math.cos(thetaRad)
    var st = Math.sin(thetaRad)

    // We can then solve the y basis vector simultaneously to get the other
    // two affine parameters directly from these parameters
    var lam = (a * c + b * d) / determinant
    var sy = ((c * sx) / (lam * a - b)) || ((d * sx) / (lam * b + a))

    // Use the translations
    let tx = e - cx + cx * ct * sx + cy * (lam * ct * sx - st * sy)
    let ty = f - cy + cx * st * sx + cy * (lam * st * sx + ct * sy)

    // Construct the decomposition and return it
    return {
      // Return the affine parameters
      scaleX: sx,
      scaleY: sy,
      shear: lam,
      rotate: theta,
      translateX: tx,
      translateY: ty,
      originX: cx,
      originY: cy,

      // Return the matrix parameters
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    }
  }

  // Left multiplies by the given matrix
  multiply (matrix) {
    return this.clone().multiplyO(matrix)
  }

  multiplyO (matrix) {
    // Get the matrices
    var l = this
    var r = matrix instanceof Matrix
      ? matrix
      : new Matrix(matrix)

    return Matrix.matrixMultiply(l, r, this)
  }

  lmultiply (matrix) {
    return this.clone().lmultiplyO(matrix)
  }

  lmultiplyO (matrix) {
    var r = this
    var l = matrix instanceof Matrix
      ? matrix
      : new Matrix(matrix)

    return Matrix.matrixMultiply(l, r, this)
  }

  // Inverses matrix
  inverseO () {
    // Get the current parameters out of the matrix
    var a = this.a
    var b = this.b
    var c = this.c
    var d = this.d
    var e = this.e
    var f = this.f

    // Invert the 2x2 matrix in the top left
    var det = a * d - b * c
    if (!det) throw new Error('Cannot invert ' + this)

    // Calculate the top 2x2 matrix
    var na = d / det
    var nb = -b / det
    var nc = -c / det
    var nd = a / det

    // Apply the inverted matrix to the top right
    var ne = -(na * e + nc * f)
    var nf = -(nb * e + nd * f)

    // Construct the inverted matrix
    this.a = na
    this.b = nb
    this.c = nc
    this.d = nd
    this.e = ne
    this.f = nf

    return this
  }

  inverse () {
    return this.clone().inverseO()
  }

  // Translate matrix
  translate (x, y) {
    return this.clone().translateO(x, y)
  }

  translateO (x, y) {
    this.e += x || 0
    this.f += y || 0
    return this
  }

  // Scale matrix
  scale (x, y, cx, cy) {
    return this.clone().scaleO(...arguments)
  }

  scaleO (x, y = x, cx = 0, cy = 0) {
    // Support uniform scaling
    if (arguments.length === 3) {
      cy = cx
      cx = y
      y = x
    }

    let { a, b, c, d, e, f } = this

    this.a = a * x
    this.b = b * y
    this.c = c * x
    this.d = d * y
    this.e = e * x - cx * x + cx
    this.f = f * y - cy * y + cy

    return this
  }

  // Rotate matrix
  rotate (r, cx, cy) {
    return this.clone().rotateO(r, cx, cy)
  }

  rotateO (r, cx = 0, cy = 0) {
    // Convert degrees to radians
    r = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["radians"])(r)

    let cos = Math.cos(r)
    let sin = Math.sin(r)

    let { a, b, c, d, e, f } = this

    this.a = a * cos - b * sin
    this.b = b * cos + a * sin
    this.c = c * cos - d * sin
    this.d = d * cos + c * sin
    this.e = e * cos - f * sin + cy * sin - cx * cos + cx
    this.f = f * cos + e * sin - cx * sin - cy * cos + cy

    return this
  }

  // Flip matrix on x or y, at a given offset
  flip (axis, around) {
    return this.clone().flipO(axis, around)
  }

  flipO (axis, around) {
    return axis === 'x' ? this.scaleO(-1, 1, around, 0)
      : axis === 'y' ? this.scaleO(1, -1, 0, around)
      : this.scaleO(-1, -1, axis, around || axis) // Define an x, y flip point
  }

  // Shear matrix
  shear (a, cx, cy) {
    return this.clone().shearO(a, cx, cy)
  }

  shearO (lx, cx = 0, cy = 0) {
    let { a, b, c, d, e, f } = this

    this.a = a + b * lx
    this.c = c + d * lx
    this.e = e + f * lx - cy * lx

    return this
  }

  // Skew Matrix
  skew (x, y, cx, cy) {
    return this.clone().skewO(...arguments)
  }

  skewO (x, y = x, cx = 0, cy = 0) {
    // support uniformal skew
    if (arguments.length === 3) {
      cy = cx
      cx = y
      y = x
    }

    // Convert degrees to radians
    x = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["radians"])(x)
    y = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["radians"])(y)

    let lx = Math.tan(x)
    let ly = Math.tan(y)

    let { a, b, c, d, e, f } = this

    this.a = a + b * lx
    this.b = b + a * ly
    this.c = c + d * lx
    this.d = d + c * ly
    this.e = e + f * lx - cy * lx
    this.f = f + e * ly - cx * ly

    return this
  }

  // SkewX
  skewX (x, cx, cy) {
    return this.skew(x, 0, cx, cy)
  }

  skewXO (x, cx, cy) {
    return this.skewO(x, 0, cx, cy)
  }

  // SkewY
  skewY (y, cx, cy) {
    return this.skew(0, y, cx, cy)
  }

  skewYO (y, cx, cy) {
    return this.skewO(0, y, cx, cy)
  }

  // Transform around a center point
  aroundO (cx, cy, matrix) {
    var dx = cx || 0
    var dy = cy || 0
    return this.translateO(-dx, -dy).lmultiplyO(matrix).translateO(dx, dy)
  }

  around (cx, cy, matrix) {
    return this.clone().aroundO(cx, cy, matrix)
  }

  // Check if two matrices are equal
  equals (other) {
    var comp = new Matrix(other)
    return closeEnough(this.a, comp.a) && closeEnough(this.b, comp.b)
      && closeEnough(this.c, comp.c) && closeEnough(this.d, comp.d)
      && closeEnough(this.e, comp.e) && closeEnough(this.f, comp.f)
  }

  // Convert matrix to string
  toString () {
    return 'matrix(' + this.a + ',' + this.b + ',' + this.c + ',' + this.d + ',' + this.e + ',' + this.f + ')'
  }

  toArray () {
    return [ this.a, this.b, this.c, this.d, this.e, this.f ]
  }

  valueOf () {
    return {
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    }
  }

  static fromArray (a) {
    return { a: a[0], b: a[1], c: a[2], d: a[3], e: a[4], f: a[5] }
  }

  static isMatrixLike (o) {
    return (
      o.a != null
      || o.b != null
      || o.c != null
      || o.d != null
      || o.e != null
      || o.f != null
    )
  }

  static formatTransforms (o) {
    // Get all of the parameters required to form the matrix
    var flipBoth = o.flip === 'both' || o.flip === true
    var flipX = o.flip && (flipBoth || o.flip === 'x') ? -1 : 1
    var flipY = o.flip && (flipBoth || o.flip === 'y') ? -1 : 1
    var skewX = o.skew && o.skew.length ? o.skew[0]
      : isFinite(o.skew) ? o.skew
      : isFinite(o.skewX) ? o.skewX
      : 0
    var skewY = o.skew && o.skew.length ? o.skew[1]
      : isFinite(o.skew) ? o.skew
      : isFinite(o.skewY) ? o.skewY
      : 0
    var scaleX = o.scale && o.scale.length ? o.scale[0] * flipX
      : isFinite(o.scale) ? o.scale * flipX
      : isFinite(o.scaleX) ? o.scaleX * flipX
      : flipX
    var scaleY = o.scale && o.scale.length ? o.scale[1] * flipY
      : isFinite(o.scale) ? o.scale * flipY
      : isFinite(o.scaleY) ? o.scaleY * flipY
      : flipY
    var shear = o.shear || 0
    var theta = o.rotate || o.theta || 0
    var origin = new _Point_js__WEBPACK_IMPORTED_MODULE_4__["default"](o.origin || o.around || o.ox || o.originX, o.oy || o.originY)
    var ox = origin.x
    var oy = origin.y
    var position = new _Point_js__WEBPACK_IMPORTED_MODULE_4__["default"](o.position || o.px || o.positionX, o.py || o.positionY)
    var px = position.x
    var py = position.y
    var translate = new _Point_js__WEBPACK_IMPORTED_MODULE_4__["default"](o.translate || o.tx || o.translateX, o.ty || o.translateY)
    var tx = translate.x
    var ty = translate.y
    var relative = new _Point_js__WEBPACK_IMPORTED_MODULE_4__["default"](o.relative || o.rx || o.relativeX, o.ry || o.relativeY)
    var rx = relative.x
    var ry = relative.y

    // Populate all of the values
    return {
      scaleX, scaleY, skewX, skewY, shear, theta, rx, ry, tx, ty, ox, oy, px, py
    }
  }

  // left matrix, right matrix, target matrix which is overwritten
  static matrixMultiply (l, r, o) {
    // Work out the product directly
    var a = l.a * r.a + l.c * r.b
    var b = l.b * r.a + l.d * r.b
    var c = l.a * r.c + l.c * r.d
    var d = l.b * r.c + l.d * r.d
    var e = l.e + l.a * r.e + l.c * r.f
    var f = l.f + l.b * r.e + l.d * r.f

    // make sure to use local variables because l/r and o could be the same
    o.a = a
    o.b = b
    o.c = c
    o.d = d
    o.e = e
    o.f = f

    return o
  }
}

function ctm () {
  return new Matrix(this.node.getCTM())
}

function screenCTM () {
  /* https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
     This is needed because FF does not return the transformation matrix
     for the inner coordinate system when getScreenCTM() is called on nested svgs.
     However all other Browsers do that */
  if (typeof this.isRoot === 'function' && !this.isRoot()) {
    var rect = this.rect(1, 1)
    var m = rect.node.getScreenCTM()
    rect.remove()
    return new Matrix(m)
  }
  return new Matrix(this.node.getScreenCTM())
}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_2__["register"])(Matrix, 'Matrix')


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/types/PathArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/types/PathArray.js ***!
  \**************************************************************/
/*! exports provided: default, pathRegReplace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathRegReplace", function() { return pathRegReplace; });
/* harmony import */ var _modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/core/regex.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/regex.js");
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _ArrayPolyfill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArrayPolyfill.js */ "./node_modules/@svgdotjs/svg.js/src/types/ArrayPolyfill.js");
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Point.js */ "./node_modules/@svgdotjs/svg.js/src/types/Point.js");
/* harmony import */ var _SVGArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SVGArray.js */ "./node_modules/@svgdotjs/svg.js/src/types/SVGArray.js");
/* harmony import */ var _modules_core_parser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/core/parser.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/parser.js");







const PathArray = Object(_ArrayPolyfill_js__WEBPACK_IMPORTED_MODULE_2__["subClassArray"])('PathArray', _SVGArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])

/* harmony default export */ __webpack_exports__["default"] = (PathArray);

function pathRegReplace (a, b, c, d) {
  return c + d.replace(_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["dots"], ' .')
}

function arrayToString (a) {
  for (var i = 0, il = a.length, s = ''; i < il; i++) {
    s += a[i][0]

    if (a[i][1] != null) {
      s += a[i][1]

      if (a[i][2] != null) {
        s += ' '
        s += a[i][2]

        if (a[i][3] != null) {
          s += ' '
          s += a[i][3]
          s += ' '
          s += a[i][4]

          if (a[i][5] != null) {
            s += ' '
            s += a[i][5]
            s += ' '
            s += a[i][6]

            if (a[i][7] != null) {
              s += ' '
              s += a[i][7]
            }
          }
        }
      }
    }
  }

  return s + ' '
}

const pathHandlers = {
  M: function (c, p, p0) {
    p.x = p0.x = c[0]
    p.y = p0.y = c[1]

    return [ 'M', p.x, p.y ]
  },
  L: function (c, p) {
    p.x = c[0]
    p.y = c[1]
    return [ 'L', c[0], c[1] ]
  },
  H: function (c, p) {
    p.x = c[0]
    return [ 'H', c[0] ]
  },
  V: function (c, p) {
    p.y = c[0]
    return [ 'V', c[0] ]
  },
  C: function (c, p) {
    p.x = c[4]
    p.y = c[5]
    return [ 'C', c[0], c[1], c[2], c[3], c[4], c[5] ]
  },
  S: function (c, p) {
    p.x = c[2]
    p.y = c[3]
    return [ 'S', c[0], c[1], c[2], c[3] ]
  },
  Q: function (c, p) {
    p.x = c[2]
    p.y = c[3]
    return [ 'Q', c[0], c[1], c[2], c[3] ]
  },
  T: function (c, p) {
    p.x = c[0]
    p.y = c[1]
    return [ 'T', c[0], c[1] ]
  },
  Z: function (c, p, p0) {
    p.x = p0.x
    p.y = p0.y
    return [ 'Z' ]
  },
  A: function (c, p) {
    p.x = c[5]
    p.y = c[6]
    return [ 'A', c[0], c[1], c[2], c[3], c[4], c[5], c[6] ]
  }
}

let mlhvqtcsaz = 'mlhvqtcsaz'.split('')

for (var i = 0, il = mlhvqtcsaz.length; i < il; ++i) {
  pathHandlers[mlhvqtcsaz[i]] = (function (i) {
    return function (c, p, p0) {
      if (i === 'H') c[0] = c[0] + p.x
      else if (i === 'V') c[0] = c[0] + p.y
      else if (i === 'A') {
        c[5] = c[5] + p.x
        c[6] = c[6] + p.y
      } else {
        for (var j = 0, jl = c.length; j < jl; ++j) {
          c[j] = c[j] + (j % 2 ? p.y : p.x)
        }
      }

      return pathHandlers[i](c, p, p0)
    }
  })(mlhvqtcsaz[i].toUpperCase())
}

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["extend"])(PathArray, {
  // Convert array to string
  toString () {
    return arrayToString(this)
  },

  // Move path string
  move (x, y) {
    // get bounding box of current situation
    var box = this.bbox()

    // get relative offset
    x -= box.x
    y -= box.y

    if (!isNaN(x) && !isNaN(y)) {
      // move every point
      for (var l, i = this.length - 1; i >= 0; i--) {
        l = this[i][0]

        if (l === 'M' || l === 'L' || l === 'T') {
          this[i][1] += x
          this[i][2] += y
        } else if (l === 'H') {
          this[i][1] += x
        } else if (l === 'V') {
          this[i][1] += y
        } else if (l === 'C' || l === 'S' || l === 'Q') {
          this[i][1] += x
          this[i][2] += y
          this[i][3] += x
          this[i][4] += y

          if (l === 'C') {
            this[i][5] += x
            this[i][6] += y
          }
        } else if (l === 'A') {
          this[i][6] += x
          this[i][7] += y
        }
      }
    }

    return this
  },

  // Resize path string
  size (width, height) {
    // get bounding box of current situation
    var box = this.bbox()
    var i, l

    // If the box width or height is 0 then we ignore
    // transformations on the respective axis
    box.width = box.width === 0 ? 1 : box.width
    box.height = box.height === 0 ? 1 : box.height

    // recalculate position of all points according to new size
    for (i = this.length - 1; i >= 0; i--) {
      l = this[i][0]

      if (l === 'M' || l === 'L' || l === 'T') {
        this[i][1] = ((this[i][1] - box.x) * width) / box.width + box.x
        this[i][2] = ((this[i][2] - box.y) * height) / box.height + box.y
      } else if (l === 'H') {
        this[i][1] = ((this[i][1] - box.x) * width) / box.width + box.x
      } else if (l === 'V') {
        this[i][1] = ((this[i][1] - box.y) * height) / box.height + box.y
      } else if (l === 'C' || l === 'S' || l === 'Q') {
        this[i][1] = ((this[i][1] - box.x) * width) / box.width + box.x
        this[i][2] = ((this[i][2] - box.y) * height) / box.height + box.y
        this[i][3] = ((this[i][3] - box.x) * width) / box.width + box.x
        this[i][4] = ((this[i][4] - box.y) * height) / box.height + box.y

        if (l === 'C') {
          this[i][5] = ((this[i][5] - box.x) * width) / box.width + box.x
          this[i][6] = ((this[i][6] - box.y) * height) / box.height + box.y
        }
      } else if (l === 'A') {
        // resize radii
        this[i][1] = (this[i][1] * width) / box.width
        this[i][2] = (this[i][2] * height) / box.height

        // move position values
        this[i][6] = ((this[i][6] - box.x) * width) / box.width + box.x
        this[i][7] = ((this[i][7] - box.y) * height) / box.height + box.y
      }
    }

    return this
  },

  // Test if the passed path array use the same path data commands as this path array
  equalCommands (pathArray) {
    var i, il, equalCommands

    pathArray = new PathArray(pathArray)

    equalCommands = this.length === pathArray.length
    for (i = 0, il = this.length; equalCommands && i < il; i++) {
      equalCommands = this[i][0] === pathArray[i][0]
    }

    return equalCommands
  },

  // Make path array morphable
  morph (pathArray) {
    pathArray = new PathArray(pathArray)

    if (this.equalCommands(pathArray)) {
      this.destination = pathArray
    } else {
      this.destination = null
    }

    return this
  },

  // Get morphed path array at given position
  at (pos) {
    // make sure a destination is defined
    if (!this.destination) return this

    var sourceArray = this
    var destinationArray = this.destination.value
    var array = []
    var pathArray = new PathArray()
    var i, il, j, jl

    // Animate has specified in the SVG spec
    // See: https://www.w3.org/TR/SVG11/paths.html#PathElement
    for (i = 0, il = sourceArray.length; i < il; i++) {
      array[i] = [ sourceArray[i][0] ]
      for (j = 1, jl = sourceArray[i].length; j < jl; j++) {
        array[i][j] = sourceArray[i][j] + (destinationArray[i][j] - sourceArray[i][j]) * pos
      }
      // For the two flags of the elliptical arc command, the SVG spec say:
      // Flags and booleans are interpolated as fractions between zero and one, with any non-zero value considered to be a value of one/true
      // Elliptical arc command as an array followed by corresponding indexes:
      // ['A', rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]
      //   0    1   2        3                 4             5      6  7
      if (array[i][0] === 'A') {
        array[i][4] = +(array[i][4] !== 0)
        array[i][5] = +(array[i][5] !== 0)
      }
    }

    // Directly modify the value of a path array, this is done this way for performance
    pathArray.value = array
    return pathArray
  },

  // Absolutize and parse path to array
  parse (array = [ [ 'M', 0, 0 ] ]) {
    // if it's already a patharray, no need to parse it
    if (array instanceof PathArray) return array

    // prepare for parsing
    var s
    var paramCnt = { 'M': 2, 'L': 2, 'H': 1, 'V': 1, 'C': 6, 'S': 4, 'Q': 4, 'T': 2, 'A': 7, 'Z': 0 }

    if (typeof array === 'string') {
      array = array
        .replace(_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["numbersWithDots"], pathRegReplace) // convert 45.123.123 to 45.123 .123
        .replace(_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["pathLetters"], ' $& ') // put some room between letters and numbers
        .replace(_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["hyphen"], '$1 -') // add space before hyphen
        .trim() // trim
        .split(_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["delimiter"]) // split into array
    } else {
      array = array.reduce(function (prev, curr) {
        return [].concat.call(prev, curr)
      }, [])
    }

    // array now is an array containing all parts of a path e.g. ['M', '0', '0', 'L', '30', '30' ...]
    var result = []
    var p = new _Point_js__WEBPACK_IMPORTED_MODULE_3__["default"]()
    var p0 = new _Point_js__WEBPACK_IMPORTED_MODULE_3__["default"]()
    var index = 0
    var len = array.length

    do {
      // Test if we have a path letter
      if (_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["isPathLetter"].test(array[index])) {
        s = array[index]
        ++index
        // If last letter was a move command and we got no new, it defaults to [L]ine
      } else if (s === 'M') {
        s = 'L'
      } else if (s === 'm') {
        s = 'l'
      }

      result.push(pathHandlers[s].call(null,
        array.slice(index, (index = index + paramCnt[s.toUpperCase()])).map(parseFloat),
        p, p0
      )
      )
    } while (len > index)

    return result
  },

  // Get bounding box of path
  bbox () {
    Object(_modules_core_parser_js__WEBPACK_IMPORTED_MODULE_5__["default"])().path.setAttribute('d', this.toString())
    return _modules_core_parser_js__WEBPACK_IMPORTED_MODULE_5__["default"].nodes.path.getBBox()
  }
})


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/types/Point.js":
/*!**********************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/types/Point.js ***!
  \**********************************************************/
/*! exports provided: default, point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var _Matrix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matrix.js */ "./node_modules/@svgdotjs/svg.js/src/types/Matrix.js");


class Point {
  // Initialize
  constructor (...args) {
    this.init(...args)
  }

  init (x, y) {
    let source
    let base = { x: 0, y: 0 }

    // ensure source as object
    source = Array.isArray(x) ? { x: x[0], y: x[1] }
      : typeof x === 'object' ? { x: x.x, y: x.y }
      : { x: x, y: y }

    // merge source
    this.x = source.x == null ? base.x : source.x
    this.y = source.y == null ? base.y : source.y

    return this
  }

  // Clone point
  clone () {
    return new Point(this)
  }

  transform (m) {
    return this.clone().transformO(m)
  }

  // Transform point with matrix
  transformO (m) {
    if (!_Matrix_js__WEBPACK_IMPORTED_MODULE_0__["default"].isMatrixLike(m)) {
      m = new _Matrix_js__WEBPACK_IMPORTED_MODULE_0__["default"](m)
    }

    let { x, y } = this

    // Perform the matrix multiplication
    this.x = m.a * x + m.c * y + m.e
    this.y = m.b * x + m.d * y + m.f

    return this
  }

  toArray () {
    return [ this.x, this.y ]
  }
}

function point (x, y) {
  return new Point(x, y).transform(this.screenCTM().inverse())
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/types/PointArray.js":
/*!***************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/types/PointArray.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/core/regex.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/regex.js");
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _ArrayPolyfill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArrayPolyfill.js */ "./node_modules/@svgdotjs/svg.js/src/types/ArrayPolyfill.js");
/* harmony import */ var _SVGArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVGArray.js */ "./node_modules/@svgdotjs/svg.js/src/types/SVGArray.js");





const PointArray = Object(_ArrayPolyfill_js__WEBPACK_IMPORTED_MODULE_2__["subClassArray"])('PointArray', _SVGArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])

/* harmony default export */ __webpack_exports__["default"] = (PointArray);

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["extend"])(PointArray, {
  // Convert array to string
  toString () {
    // convert to a poly point string
    for (var i = 0, il = this.length, array = []; i < il; i++) {
      array.push(this[i].join(','))
    }

    return array.join(' ')
  },

  // Convert array to line object
  toLine () {
    return {
      x1: this[0][0],
      y1: this[0][1],
      x2: this[1][0],
      y2: this[1][1]
    }
  },

  // Get morphed array at given position
  at (pos) {
    // make sure a destination is defined
    if (!this.destination) return this

    // generate morphed point string
    for (var i = 0, il = this.length, array = []; i < il; i++) {
      array.push([
        this[i][0] + (this.destination[i][0] - this[i][0]) * pos,
        this[i][1] + (this.destination[i][1] - this[i][1]) * pos
      ])
    }

    return new PointArray(array)
  },

  // Parse point string and flat array
  parse (array = [ [ 0, 0 ] ]) {
    var points = []

    // if it is an array
    if (array instanceof Array) {
      // and it is not flat, there is no need to parse it
      if (array[0] instanceof Array) {
        return array
      }
    } else { // Else, it is considered as a string
      // parse points
      array = array.trim().split(_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["delimiter"]).map(parseFloat)
    }

    // validate points - https://svgwg.org/svg2-draft/shapes.html#DataTypePoints
    // Odd number of coordinates is an error. In such cases, drop the last odd coordinate.
    if (array.length % 2 !== 0) array.pop()

    // wrap points in two-tuples
    for (var i = 0, len = array.length; i < len; i = i + 2) {
      points.push([ array[i], array[i + 1] ])
    }

    return points
  },

  // transform points with matrix (similar to Point.transform)
  transform (m) {
    const points = []

    for (let i = 0; i < this.length; i++) {
      const point = this[i]
      // Perform the matrix multiplication
      points.push([
        m.a * point[0] + m.c * point[1] + m.e,
        m.b * point[0] + m.d * point[1] + m.f
      ])
    }

    // Return the required point
    return new PointArray(points)
  },

  // Move point string
  move (x, y) {
    var box = this.bbox()

    // get relative offset
    x -= box.x
    y -= box.y

    // move every point
    if (!isNaN(x) && !isNaN(y)) {
      for (var i = this.length - 1; i >= 0; i--) {
        this[i] = [ this[i][0] + x, this[i][1] + y ]
      }
    }

    return this
  },

  // Resize poly string
  size (width, height) {
    var i
    var box = this.bbox()

    // recalculate position of all points according to new size
    for (i = this.length - 1; i >= 0; i--) {
      if (box.width) this[i][0] = ((this[i][0] - box.x) * width) / box.width + box.x
      if (box.height) this[i][1] = ((this[i][1] - box.y) * height) / box.height + box.y
    }

    return this
  },

  // Get bounding box of points
  bbox () {
    var maxX = -Infinity
    var maxY = -Infinity
    var minX = Infinity
    var minY = Infinity
    this.forEach(function (el) {
      maxX = Math.max(el[0], maxX)
      maxY = Math.max(el[1], maxY)
      minX = Math.min(el[0], minX)
      minY = Math.min(el[1], minY)
    })
    return { x: minX, y: minY, width: maxX - minX, height: maxY - minY }
  }
})


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/types/SVGArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/types/SVGArray.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/core/regex.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/regex.js");
/* harmony import */ var _utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/adopter.js */ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js");
/* harmony import */ var _ArrayPolyfill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArrayPolyfill.js */ "./node_modules/@svgdotjs/svg.js/src/types/ArrayPolyfill.js");




const SVGArray = Object(_ArrayPolyfill_js__WEBPACK_IMPORTED_MODULE_2__["subClassArray"])('SVGArray', Array, function (arr) {
  this.init(arr)
})

/* harmony default export */ __webpack_exports__["default"] = (SVGArray);

Object(_utils_adopter_js__WEBPACK_IMPORTED_MODULE_1__["extend"])(SVGArray, {
  init (arr) {
    // This catches the case, that native map tries to create an array with new Array(1)
    if (typeof arr === 'number') return this
    this.length = 0
    this.push(...this.parse(arr))
    return this
  },

  toArray () {
    return Array.prototype.concat.apply([], this)
  },

  toString () {
    return this.join(' ')
  },

  // Flattens the array if needed
  valueOf () {
    const ret = []
    ret.push(...this)
    return ret
  },

  // Parse whitespace separated string
  parse (array = []) {
    // If already is an array, no need to parse it
    if (array instanceof Array) return array

    return array.trim().split(_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["delimiter"]).map(parseFloat)
  },

  clone () {
    return new this.constructor(this)
  },

  toSet () {
    return new Set(this)
  }
})


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/types/SVGNumber.js":
/*!**************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/types/SVGNumber.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SVGNumber; });
/* harmony import */ var _modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/core/regex.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/regex.js");


// Module for unit convertions
class SVGNumber {
  // Initialize
  constructor (...args) {
    this.init(...args)
  }

  init (value, unit) {
    unit = Array.isArray(value) ? value[1] : unit
    value = Array.isArray(value) ? value[0] : value

    // initialize defaults
    this.value = 0
    this.unit = unit || ''

    // parse value
    if (typeof value === 'number') {
      // ensure a valid numeric value
      this.value = isNaN(value) ? 0 : !isFinite(value) ? (value < 0 ? -3.4e+38 : +3.4e+38) : value
    } else if (typeof value === 'string') {
      unit = value.match(_modules_core_regex_js__WEBPACK_IMPORTED_MODULE_0__["numberAndUnit"])

      if (unit) {
        // make value numeric
        this.value = parseFloat(unit[1])

        // normalize
        if (unit[5] === '%') {
          this.value /= 100
        } else if (unit[5] === 's') {
          this.value *= 1000
        }

        // store unit
        this.unit = unit[5]
      }
    } else {
      if (value instanceof SVGNumber) {
        this.value = value.valueOf()
        this.unit = value.unit
      }
    }

    return this
  }

  toString () {
    return (this.unit === '%' ? ~~(this.value * 1e8) / 1e6
      : this.unit === 's' ? this.value / 1e3
      : this.value
    ) + this.unit
  }

  toJSON () {
    return this.toString()
  }

  toArray () {
    return [ this.value, this.unit ]
  }

  valueOf () {
    return this.value
  }

  // Add number
  plus (number) {
    number = new SVGNumber(number)
    return new SVGNumber(this + number, this.unit || number.unit)
  }

  // Subtract number
  minus (number) {
    number = new SVGNumber(number)
    return new SVGNumber(this - number, this.unit || number.unit)
  }

  // Multiply number
  times (number) {
    number = new SVGNumber(number)
    return new SVGNumber(this * number, this.unit || number.unit)
  }

  // Divide number
  divide (number) {
    number = new SVGNumber(number)
    return new SVGNumber(this / number, this.unit || number.unit)
  }

  convert (unit) {
    return new SVGNumber(this.value, unit)
  }
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/utils/adopter.js":
/*!************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/utils/adopter.js ***!
  \************************************************************/
/*! exports provided: root, create, makeInstance, nodeOrNew, adopt, mockAdopt, register, getClass, eid, assignNewId, extend, wrapWithAttrCheck, invent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeInstance", function() { return makeInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeOrNew", function() { return nodeOrNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adopt", function() { return adopt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockAdopt", function() { return mockAdopt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClass", function() { return getClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eid", function() { return eid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignNewId", function() { return assignNewId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapWithAttrCheck", function() { return wrapWithAttrCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invent", function() { return invent; });
/* harmony import */ var _methods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods.js */ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@svgdotjs/svg.js/src/utils/utils.js");
/* harmony import */ var _modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/core/namespaces.js */ "./node_modules/@svgdotjs/svg.js/src/modules/core/namespaces.js");
/* harmony import */ var _utils_window_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/window.js */ "./node_modules/@svgdotjs/svg.js/src/utils/window.js");
/* harmony import */ var _types_Base_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/Base.js */ "./node_modules/@svgdotjs/svg.js/src/types/Base.js");






const elements = {}
const root = '___SYMBOL___ROOT___'

// Method for element creation
function create (name) {
  // create element
  return _utils_window_js__WEBPACK_IMPORTED_MODULE_3__["globals"].document.createElementNS(_modules_core_namespaces_js__WEBPACK_IMPORTED_MODULE_2__["ns"], name)
}

function makeInstance (element) {
  if (element instanceof _types_Base_js__WEBPACK_IMPORTED_MODULE_4__["default"]) return element

  if (typeof element === 'object') {
    return adopter(element)
  }

  if (element == null) {
    return new elements[root]()
  }

  if (typeof element === 'string' && element.charAt(0) !== '<') {
    return adopter(_utils_window_js__WEBPACK_IMPORTED_MODULE_3__["globals"].document.querySelector(element))
  }

  var node = create('svg')
  node.innerHTML = element

  // We can use firstChild here because we know,
  // that the first char is < and thus an element
  element = adopter(node.firstChild)

  return element
}

function nodeOrNew (name, node) {
  return node instanceof _utils_window_js__WEBPACK_IMPORTED_MODULE_3__["globals"].window.Node ? node : create(name)
}

// Adopt existing svg elements
function adopt (node) {
  // check for presence of node
  if (!node) return null

  // make sure a node isn't already adopted
  if (node.instance instanceof _types_Base_js__WEBPACK_IMPORTED_MODULE_4__["default"]) return node.instance

  // initialize variables
  var className = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(node.nodeName || 'Dom')

  // Make sure that gradients are adopted correctly
  if (className === 'LinearGradient' || className === 'RadialGradient') {
    className = 'Gradient'

  // Fallback to Dom if element is not known
  } else if (!elements[className]) {
    className = 'Dom'
  }

  return new elements[className](node)
}

let adopter = adopt

function mockAdopt (mock = adopt) {
  adopter = mock
}

function register (element, name = element.name, asRoot = false) {
  elements[name] = element
  if (asRoot) elements[root] = element

  Object(_methods_js__WEBPACK_IMPORTED_MODULE_0__["addMethodNames"])(Object.getOwnPropertyNames(element.prototype))

  return element
}

function getClass (name) {
  return elements[name]
}

// Element id sequence
let did = 1000

// Get next named element id
function eid (name) {
  return 'Svgjs' + Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(name) + (did++)
}

// Deep new id assignment
function assignNewId (node) {
  // do the same for SVG child nodes as well
  for (var i = node.children.length - 1; i >= 0; i--) {
    assignNewId(node.children[i])
  }

  if (node.id) {
    return adopt(node).id(eid(node.nodeName))
  }

  return adopt(node)
}

// Method for extending objects
function extend (modules, methods, attrCheck) {
  var key, i

  modules = Array.isArray(modules) ? modules : [ modules ]

  for (i = modules.length - 1; i >= 0; i--) {
    for (key in methods) {
      let method = methods[key]
      if (attrCheck) {
        method = wrapWithAttrCheck(methods[key])
      }
      modules[i].prototype[key] = method
    }
  }
}

// export function extendWithAttrCheck (...args) {
//   extend(...args, true)
// }

function wrapWithAttrCheck (fn) {
  return function (...args) {
    let o = args[args.length - 1]

    if (o && o.constructor === Object && !(o instanceof Array)) {
      return fn.apply(this, args.slice(0, -1)).attr(o)
    } else {
      return fn.apply(this, args)
    }
  }
}

function invent (config) {
  // Create element initializer
  var initializer = typeof config.create === 'function'
    ? config.create
    : function (node) {
      this.constructor(node || create(config.create))
    }

  // Inherit prototype
  if (config.inherit) {
    /* eslint new-cap: off */
    initializer.prototype = new config.inherit()
    initializer.prototype.constructor = initializer
  }

  // Extend with methods
  if (config.extend) { extend(initializer, config.extend) }

  // Attach construct method to parent
  if (config.construct) { extend(config.parent || elements['Container'], config.construct) }

  return initializer
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/utils/methods.js":
/*!************************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/utils/methods.js ***!
  \************************************************************/
/*! exports provided: registerMethods, getMethodsFor, getMethodNames, addMethodNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerMethods", function() { return registerMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMethodsFor", function() { return getMethodsFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMethodNames", function() { return getMethodNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMethodNames", function() { return addMethodNames; });
const methods = {}
const names = []

function registerMethods (name, m) {
  if (Array.isArray(name)) {
    for (let _name of name) {
      registerMethods(_name, m)
    }
    return
  }

  if (typeof name === 'object') {
    for (let _name in name) {
      registerMethods(_name, name[_name])
    }
    return
  }

  addMethodNames(Object.getOwnPropertyNames(m))
  methods[name] = Object.assign(methods[name] || {}, m)
}

function getMethodsFor (name) {
  return methods[name] || {}
}

function getMethodNames () {
  return [ ...new Set(names) ]
}

function addMethodNames (_names) {
  names.push(..._names)
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/utils/utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/utils/utils.js ***!
  \**********************************************************/
/*! exports provided: map, filter, radians, degrees, camelCase, unCamelCase, capitalize, proportionalSize, getOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radians", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return camelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unCamelCase", function() { return unCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proportionalSize", function() { return proportionalSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrigin", function() { return getOrigin; });
// Map function
function map (array, block) {
  var i
  var il = array.length
  var result = []

  for (i = 0; i < il; i++) {
    result.push(block(array[i]))
  }

  return result
}

// Filter function
function filter (array, block) {
  var i
  var il = array.length
  var result = []

  for (i = 0; i < il; i++) {
    if (block(array[i])) {
      result.push(array[i])
    }
  }

  return result
}

// Degrees to radians
function radians (d) {
  return d % 360 * Math.PI / 180
}

// Radians to degrees
function degrees (r) {
  return r * 180 / Math.PI % 360
}

// Convert dash-separated-string to camelCase
function camelCase (s) {
  return s.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase()
  })
}

// Convert camel cased string to string seperated
function unCamelCase (s) {
  return s.replace(/([A-Z])/g, function (m, g) {
    return '-' + g.toLowerCase()
  })
}

// Capitalize first letter of a string
function capitalize (s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// Calculate proportional width and height values when necessary
function proportionalSize (element, width, height, box) {
  if (width == null || height == null) {
    box = box || element.bbox()

    if (width == null) {
      width = box.width / box.height * height
    } else if (height == null) {
      height = box.height / box.width * width
    }
  }

  return {
    width: width,
    height: height
  }
}

function getOrigin (o, element) {
  // Allow origin or around as the names
  let origin = o.origin // o.around == null ? o.origin : o.around
  let ox, oy

  // Allow the user to pass a string to rotate around a given point
  if (typeof origin === 'string' || origin == null) {
    // Get the bounding box of the element with no transformations applied
    const string = (origin || 'center').toLowerCase().trim()
    const { height, width, x, y } = element.bbox()

    // Calculate the transformed x and y coordinates
    let bx = string.includes('left') ? x
      : string.includes('right') ? x + width
      : x + width / 2
    let by = string.includes('top') ? y
      : string.includes('bottom') ? y + height
      : y + height / 2

    // Set the bounds eg : "bottom-left", "Top right", "middle" etc...
    ox = o.ox != null ? o.ox : bx
    oy = o.oy != null ? o.oy : by
  } else {
    ox = origin[0]
    oy = origin[1]
  }

  // Return the origin as it is if it wasn't a string
  return [ ox, oy ]
}


/***/ }),

/***/ "./node_modules/@svgdotjs/svg.js/src/utils/window.js":
/*!***********************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/src/utils/window.js ***!
  \***********************************************************/
/*! exports provided: globals, registerWindow, saveWindow, restoreWindow, withWindow, getWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerWindow", function() { return registerWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveWindow", function() { return saveWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreWindow", function() { return restoreWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withWindow", function() { return withWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return getWindow; });
const globals = {
  window: typeof window === 'undefined' ? null : window,
  document: typeof document === 'undefined' ? null : document
}

function registerWindow (win = null, doc = null) {
  globals.window = win
  globals.document = doc
}

const save = {}

function saveWindow () {
  save.window = globals.window
  save.document = globals.document
}

function restoreWindow () {
  globals.window = save.window
  globals.document = save.document
}

function withWindow (win, fn) {
  saveWindow()
  registerWindow(win, win.document)
  fn(win, win.document)
  restoreWindow()
}

function getWindow () {
  return globals.window
}


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/components/demo/demo.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/components/demo/demo.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mdo-draw-demo-container\">\n\n  <div fxLayout=\"row\">\n    <div fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\n      <div class=\"mdo-draw-demo-item\">\n        <h2>mdo form graphic input</h2>\n      </div>\n    </div>\n  </div>\n\n\n  <div fxLayout=\"row wrap\">\n\n    <div fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\n      <div class=\"mdo-draw-demo-item\">\n        <p>{{examples.sample.description}}</p>\n        <mdo-draw [def]=\"examples.sample.def\"></mdo-draw>\n      </div>\n    </div>\n\n    <div fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\n      <div class=\"mdo-draw-demo-item\">\n        <p>{{examples.otherIcons.description}}</p>\n        <mdo-draw [def]=\"examples.otherIcons.def\"></mdo-draw>\n      </div>\n    </div>\n\n  </div>\n\n\n  <div fxLayout=\"row wrap\">\n\n    <div fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\n      <div class=\"mdo-draw-demo-item\">\n        <p>{{examples.preselected.description}}</p>\n        <mdo-draw [def]=\"examples.preselected.def\"></mdo-draw>\n      </div>\n    </div>\n\n    <div fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\n      <div class=\"mdo-draw-demo-item\">\n        <p style=\"margin-bottom: 5.5rem;\">{{examples.notoolbar.description}}</p>\n        <mdo-draw [def]=\"examples.notoolbar.def\"></mdo-draw>\n      </div>\n    </div>\n\n  </div>\n\n\n  <div fxLayout=\"row wrap\">\n\n    <div fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\n      <div class=\"mdo-draw-demo-item\">\n        <p>{{examples.withdata1.description}}</p>\n        <mdo-draw [def]=\"examples.withdata1.def\" [data]=\"examples.withdata1.data\"></mdo-draw>\n      </div>\n    </div>\n\n    <div fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\n      <div class=\"mdo-draw-demo-item\">\n        <p>{{examples.withdata2.description}}</p>\n        <mdo-draw [def]=\"examples.withdata2.def\" [data]=\"examples.withdata2.data\"></mdo-draw>\n      </div>\n    </div>\n\n  </div>\n\n  <div fxLayout=\"row wrap\">\n\n    <div fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\n      <div class=\"mdo-draw-demo-item\">\n        <p>{{examples.backgrounds.description}}</p>\n        <mdo-draw [def]=\"examples.backgrounds.def\"></mdo-draw>\n      </div>\n    </div>\n\n  </div>\n\n\n  <div class=\"mdo-demo-divider\"></div>\n\n  <div fxLayout=\"row wrap\">\n\n    <div fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\n      <div class=\"mdo-draw-notes-item\">\n        <h4>About</h4>\n        <p>\n          the main idea was to create component which is:\n        </p>\n        <ul>\n          <li> reusable\n          <li> responsive\n          <li> performant\n          <li> painless\n        </ul>\n        <p><b>reusable</b> - configurable, extendable</p>\n        <p><b>responsive</b> - adaptive for screen sizes, touch support</p>\n        <p><b>performant</b> - fast, lightweight, many instances on page, leackless</p>\n        <p><b>painless</b> - has simple api; single line in template to integrate with any angular form</p>\n\n        <br><br>\n\n\n      </div>\n      <div class=\"mdo-demo-divider\"></div>\n    </div>\n\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/components/dev/dev.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/components/dev/dev.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdo-draw [def]=\"sample.def\"></mdo-draw>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/draw/components/draw/draw.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/draw/components/draw/draw.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mdo-draw-container\" fxLayout=\"row\">\n  <div fxFlex=\"100px\" *ngIf=\"def.backgrounds\" class=\"mdo-draw-sidebar\">\n\n    <button mat-button *ngFor=\"let bg of def.backgrounds\" class=\"mdo-draw-bg-button\" [class.active]=\"background === bg\"\n      (click)=\"renderBg(bg)\">\n      <img src=\"{{bg}}\" alt=\"\">\n    </button>\n\n  </div>\n  <div fxFlex=\"auto\" class=\"mdo-draw-main\">\n\n\n\n    <div class=\"mdo-draw-toolbar\" *ngIf=\"!def.toolbarHidden\">\n      <!-- drawing buttons -->\n      <button mat-button *ngFor=\"let tool of def.toolbar\" class=\"mdo-draw-tool-button\"\n        [class.active]=\"activeTool === tool\" (click)=\"setTool(tool)\">\n        <img *ngIf=\"tool.src\" src=\"{{tool.src}}\" alt=\"\">\n        <mat-icon *ngIf=\"tool.icon\" [style.color]=\"tool.color\">{{tool.icon}}</mat-icon>\n      </button>\n\n      <!-- util buttons -->\n      <button mat-button class=\"mdo-draw-tool-button\" [disabled]=\"deleteDisabled\" (click)=\"deleteObject()\">\n        <mat-icon>delete</mat-icon>\n      </button>\n      <span class=\"flex-fill\"></span>\n      <button mat-button class=\"mdo-draw-tool-button\" (click)=\"def.debug = !def.debug\">\n        <mat-icon>info</mat-icon>\n      </button>\n      <button mat-button class=\"mdo-draw-tool-button\" (click)=\"download()\">\n        <mat-icon>cloud_download</mat-icon>\n      </button>\n\n    </div>\n\n    <div class=\"mdo-draw-viewport\" [class.active]=\"!!activeTool\">\n      <svg id=\"drawing\" class=\"mdo-draw-svg\" #svg></svg>\n    </div>\n\n  </div>\n\n\n</div>\n<pre *ngIf=\"def.debug\">{{ { \"component setup\": def, \"user data\": data} | json}}</pre>");

/***/ }),

/***/ "./node_modules/save-svg-as-png/lib/saveSvgAsPng.js":
/*!**********************************************************!*\
  !*** ./node_modules/save-svg-as-png/lib/saveSvgAsPng.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

(function () {
  var out$ =  true && exports ||  true && {} || this || window;
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return out$;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  out$.default = out$;

  var xmlNs = 'http://www.w3.org/2000/xmlns/';
  var xhtmlNs = 'http://www.w3.org/1999/xhtml';
  var svgNs = 'http://www.w3.org/2000/svg';
  var doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [<!ENTITY nbsp "&#160;">]>';
  var urlRegex = /url\(["']?(.+?)["']?\)/;
  var fontFormats = {
    woff2: 'font/woff2',
    woff: 'font/woff',
    otf: 'application/x-font-opentype',
    ttf: 'application/x-font-ttf',
    eot: 'application/vnd.ms-fontobject',
    sfnt: 'application/font-sfnt',
    svg: 'image/svg+xml'
  };

  var isElement = function isElement(obj) {
    return obj instanceof HTMLElement || obj instanceof SVGElement;
  };
  var requireDomNode = function requireDomNode(el) {
    if (!isElement(el)) throw new Error('an HTMLElement or SVGElement is required; got ' + el);
  };
  var requireDomNodePromise = function requireDomNodePromise(el) {
    return new Promise(function (resolve, reject) {
      if (isElement(el)) resolve(el);else reject(new Error('an HTMLElement or SVGElement is required; got ' + el));
    });
  };
  var isExternal = function isExternal(url) {
    return url && url.lastIndexOf('http', 0) === 0 && url.lastIndexOf(window.location.host) === -1;
  };

  var getFontMimeTypeFromUrl = function getFontMimeTypeFromUrl(fontUrl) {
    var formats = Object.keys(fontFormats).filter(function (extension) {
      return fontUrl.indexOf('.' + extension) > 0;
    }).map(function (extension) {
      return fontFormats[extension];
    });
    if (formats) return formats[0];
    console.error('Unknown font format for ' + fontUrl + '. Fonts may not be working correctly.');
    return 'application/octet-stream';
  };

  var arrayBufferToBase64 = function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    for (var i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }return window.btoa(binary);
  };

  var getDimension = function getDimension(el, clone, dim) {
    var v = el.viewBox && el.viewBox.baseVal && el.viewBox.baseVal[dim] || clone.getAttribute(dim) !== null && !clone.getAttribute(dim).match(/%$/) && parseInt(clone.getAttribute(dim)) || el.getBoundingClientRect()[dim] || parseInt(clone.style[dim]) || parseInt(window.getComputedStyle(el).getPropertyValue(dim));
    return typeof v === 'undefined' || v === null || isNaN(parseFloat(v)) ? 0 : v;
  };

  var getDimensions = function getDimensions(el, clone, width, height) {
    if (el.tagName === 'svg') return {
      width: width || getDimension(el, clone, 'width'),
      height: height || getDimension(el, clone, 'height')
    };else if (el.getBBox) {
      var _el$getBBox = el.getBBox(),
          x = _el$getBBox.x,
          y = _el$getBBox.y,
          _width = _el$getBBox.width,
          _height = _el$getBBox.height;

      return {
        width: x + _width,
        height: y + _height
      };
    }
  };

  var reEncode = function reEncode(data) {
    return decodeURIComponent(encodeURIComponent(data).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      var c = String.fromCharCode('0x' + p1);
      return c === '%' ? '%25' : c;
    }));
  };

  var uriToBlob = function uriToBlob(uri) {
    var byteString = window.atob(uri.split(',')[1]);
    var mimeString = uri.split(',')[0].split(':')[1].split(';')[0];
    var buffer = new ArrayBuffer(byteString.length);
    var intArray = new Uint8Array(buffer);
    for (var i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([buffer], { type: mimeString });
  };

  var query = function query(el, selector) {
    if (!selector) return;
    try {
      return el.querySelector(selector) || el.parentNode && el.parentNode.querySelector(selector);
    } catch (err) {
      console.warn('Invalid CSS selector "' + selector + '"', err);
    }
  };

  var detectCssFont = function detectCssFont(rule, href) {
    // Match CSS font-face rules to external links.
    // @font-face {
    //   src: local('Abel'), url(https://fonts.gstatic.com/s/abel/v6/UzN-iejR1VoXU2Oc-7LsbvesZW2xOQ-xsNqO47m55DA.woff2);
    // }
    var match = rule.cssText.match(urlRegex);
    var url = match && match[1] || '';
    if (!url || url.match(/^data:/) || url === 'about:blank') return;
    var fullUrl = url.startsWith('../') ? href + '/../' + url : url.startsWith('./') ? href + '/.' + url : url;
    return {
      text: rule.cssText,
      format: getFontMimeTypeFromUrl(fullUrl),
      url: fullUrl
    };
  };

  var inlineImages = function inlineImages(el) {
    return Promise.all(Array.from(el.querySelectorAll('image')).map(function (image) {
      var href = image.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || image.getAttribute('href');
      if (!href) return Promise.resolve(null);
      if (isExternal(href)) {
        href += (href.indexOf('?') === -1 ? '?' : '&') + 't=' + new Date().valueOf();
      }
      return new Promise(function (resolve, reject) {
        var canvas = document.createElement('canvas');
        var img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = href;
        img.onerror = function () {
          return reject(new Error('Could not load ' + href));
        };
        img.onload = function () {
          canvas.width = img.width;
          canvas.height = img.height;
          canvas.getContext('2d').drawImage(img, 0, 0);
          image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', canvas.toDataURL('image/png'));
          resolve(true);
        };
      });
    }));
  };

  var cachedFonts = {};
  var inlineFonts = function inlineFonts(fonts) {
    return Promise.all(fonts.map(function (font) {
      return new Promise(function (resolve, reject) {
        if (cachedFonts[font.url]) return resolve(cachedFonts[font.url]);

        var req = new XMLHttpRequest();
        req.addEventListener('load', function () {
          // TODO: it may also be worth it to wait until fonts are fully loaded before
          // attempting to rasterize them. (e.g. use https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet)
          var fontInBase64 = arrayBufferToBase64(req.response);
          var fontUri = font.text.replace(urlRegex, 'url("data:' + font.format + ';base64,' + fontInBase64 + '")') + '\n';
          cachedFonts[font.url] = fontUri;
          resolve(fontUri);
        });
        req.addEventListener('error', function (e) {
          console.warn('Failed to load font from: ' + font.url, e);
          cachedFonts[font.url] = null;
          resolve(null);
        });
        req.addEventListener('abort', function (e) {
          console.warn('Aborted loading font from: ' + font.url, e);
          resolve(null);
        });
        req.open('GET', font.url);
        req.responseType = 'arraybuffer';
        req.send();
      });
    })).then(function (fontCss) {
      return fontCss.filter(function (x) {
        return x;
      }).join('');
    });
  };

  var cachedRules = null;
  var styleSheetRules = function styleSheetRules() {
    if (cachedRules) return cachedRules;
    return cachedRules = Array.from(document.styleSheets).map(function (sheet) {
      try {
        return { rules: sheet.cssRules, href: sheet.href };
      } catch (e) {
        console.warn('Stylesheet could not be loaded: ' + sheet.href, e);
        return {};
      }
    });
  };

  var inlineCss = function inlineCss(el, options) {
    var _ref = options || {},
        selectorRemap = _ref.selectorRemap,
        modifyStyle = _ref.modifyStyle,
        modifyCss = _ref.modifyCss,
        fonts = _ref.fonts;

    var generateCss = modifyCss || function (selector, properties) {
      var sel = selectorRemap ? selectorRemap(selector) : selector;
      var props = modifyStyle ? modifyStyle(properties) : properties;
      return sel + '{' + props + '}\n';
    };
    var css = [];
    var detectFonts = typeof fonts === 'undefined';
    var fontList = fonts || [];
    styleSheetRules().forEach(function (_ref2) {
      var rules = _ref2.rules,
          href = _ref2.href;

      if (!rules) return;
      Array.from(rules).forEach(function (rule) {
        if (typeof rule.style != 'undefined') {
          if (query(el, rule.selectorText)) css.push(generateCss(rule.selectorText, rule.style.cssText));else if (detectFonts && rule.cssText.match(/^@font-face/)) {
            var font = detectCssFont(rule, href);
            if (font) fontList.push(font);
          } else css.push(rule.cssText);
        }
      });
    });

    return inlineFonts(fontList).then(function (fontCss) {
      return css.join('\n') + fontCss;
    });
  };

  var downloadOptions = function downloadOptions() {
    if (!navigator.msSaveOrOpenBlob && !('download' in document.createElement('a'))) {
      return { popup: window.open() };
    }
  };

  out$.prepareSvg = function (el, options, done) {
    requireDomNode(el);

    var _ref3 = options || {},
        _ref3$left = _ref3.left,
        left = _ref3$left === undefined ? 0 : _ref3$left,
        _ref3$top = _ref3.top,
        top = _ref3$top === undefined ? 0 : _ref3$top,
        w = _ref3.width,
        h = _ref3.height,
        _ref3$scale = _ref3.scale,
        scale = _ref3$scale === undefined ? 1 : _ref3$scale,
        _ref3$responsive = _ref3.responsive,
        responsive = _ref3$responsive === undefined ? false : _ref3$responsive;

    return inlineImages(el).then(function () {
      var clone = el.cloneNode(true);
      clone.style.backgroundColor = (options || {}).backgroundColor || el.style.backgroundColor;

      var _getDimensions = getDimensions(el, clone, w, h),
          width = _getDimensions.width,
          height = _getDimensions.height;

      if (el.tagName !== 'svg') {
        if (el.getBBox) {
          if (clone.getAttribute('transform') != null) {
            clone.setAttribute('transform', clone.getAttribute('transform').replace(/translate\(.*?\)/, ''));
          }
          var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.appendChild(clone);
          clone = svg;
        } else {
          console.error('Attempted to render non-SVG element', el);
          return;
        }
      }

      clone.setAttribute('version', '1.1');
      clone.setAttribute('viewBox', [left, top, width, height].join(' '));
      if (!clone.getAttribute('xmlns')) clone.setAttributeNS(xmlNs, 'xmlns', svgNs);
      if (!clone.getAttribute('xmlns:xlink')) clone.setAttributeNS(xmlNs, 'xmlns:xlink', 'http://www.w3.org/1999/xlink');

      if (responsive) {
        clone.removeAttribute('width');
        clone.removeAttribute('height');
        clone.setAttribute('preserveAspectRatio', 'xMinYMin meet');
      } else {
        clone.setAttribute('width', width * scale);
        clone.setAttribute('height', height * scale);
      }

      Array.from(clone.querySelectorAll('foreignObject > *')).forEach(function (foreignObject) {
        foreignObject.setAttributeNS(xmlNs, 'xmlns', foreignObject.tagName === 'svg' ? svgNs : xhtmlNs);
      });

      return inlineCss(el, options).then(function (css) {
        var style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.innerHTML = '<![CDATA[\n' + css + '\n]]>';

        var defs = document.createElement('defs');
        defs.appendChild(style);
        clone.insertBefore(defs, clone.firstChild);

        var outer = document.createElement('div');
        outer.appendChild(clone);
        var src = outer.innerHTML.replace(/NS\d+:href/gi, 'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href');

        if (typeof done === 'function') done(src, width, height);else return { src: src, width: width, height: height };
      });
    });
  };

  out$.svgAsDataUri = function (el, options, done) {
    requireDomNode(el);
    return out$.prepareSvg(el, options).then(function (_ref4) {
      var src = _ref4.src,
          width = _ref4.width,
          height = _ref4.height;

      var svgXml = 'data:image/svg+xml;base64,' + window.btoa(reEncode(doctype + src));
      if (typeof done === 'function') {
        done(svgXml, width, height);
      }
      return svgXml;
    });
  };

  out$.svgAsPngUri = function (el, options, done) {
    requireDomNode(el);

    var _ref5 = options || {},
        _ref5$encoderType = _ref5.encoderType,
        encoderType = _ref5$encoderType === undefined ? 'image/png' : _ref5$encoderType,
        _ref5$encoderOptions = _ref5.encoderOptions,
        encoderOptions = _ref5$encoderOptions === undefined ? 0.8 : _ref5$encoderOptions,
        canvg = _ref5.canvg;

    var convertToPng = function convertToPng(_ref6) {
      var src = _ref6.src,
          width = _ref6.width,
          height = _ref6.height;

      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var pixelRatio = window.devicePixelRatio || 1;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = canvas.width + 'px';
      canvas.style.height = canvas.height + 'px';
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      if (canvg) canvg(canvas, src);else context.drawImage(src, 0, 0);

      var png = void 0;
      try {
        png = canvas.toDataURL(encoderType, encoderOptions);
      } catch (e) {
        if (typeof SecurityError !== 'undefined' && e instanceof SecurityError || e.name === 'SecurityError') {
          console.error('Rendered SVG images cannot be downloaded in this browser.');
          return;
        } else throw e;
      }
      if (typeof done === 'function') done(png, canvas.width, canvas.height);
      return Promise.resolve(png);
    };

    if (canvg) return out$.prepareSvg(el, options).then(convertToPng);else return out$.svgAsDataUri(el, options).then(function (uri) {
      return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload = function () {
          return resolve(convertToPng({
            src: image,
            width: image.width,
            height: image.height
          }));
        };
        image.onerror = function () {
          reject('There was an error loading the data URI as an image on the following SVG\n' + window.atob(uri.slice(26)) + 'Open the following link to see browser\'s diagnosis\n' + uri);
        };
        image.src = uri;
      });
    });
  };

  out$.download = function (name, uri, options) {
    if (navigator.msSaveOrOpenBlob) navigator.msSaveOrOpenBlob(uriToBlob(uri), name);else {
      var saveLink = document.createElement('a');
      if ('download' in saveLink) {
        saveLink.download = name;
        saveLink.style.display = 'none';
        document.body.appendChild(saveLink);
        try {
          var blob = uriToBlob(uri);
          var url = URL.createObjectURL(blob);
          saveLink.href = url;
          saveLink.onclick = function () {
            return requestAnimationFrame(function () {
              return URL.revokeObjectURL(url);
            });
          };
        } catch (e) {
          console.error(e);
          console.warn('Error while getting object URL. Falling back to string URL.');
          saveLink.href = uri;
        }
        saveLink.click();
        document.body.removeChild(saveLink);
      } else if (options && options.popup) {
        options.popup.document.title = name;
        options.popup.location.replace(uri);
      }
    }
  };

  out$.saveSvg = function (el, name, options) {
    var downloadOpts = downloadOptions(); // don't inline, can't be async
    return requireDomNodePromise(el).then(function (el) {
      return out$.svgAsDataUri(el, options || {});
    }).then(function (uri) {
      return out$.download(name, uri, downloadOpts);
    });
  };

  out$.saveSvgAsPng = function (el, name, options) {
    var downloadOpts = downloadOptions(); // don't inline, can't be async
    return requireDomNodePromise(el).then(function (el) {
      return out$.svgAsPngUri(el, options || {});
    }).then(function (uri) {
      return out$.download(name, uri, downloadOpts);
    });
  };
})();

/***/ }),

/***/ "./node_modules/subsink/dist/index.js":
/*!********************************************!*\
  !*** ./node_modules/subsink/dist/index.js ***!
  \********************************************/
/*! exports provided: SubSink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subsink */ "./node_modules/subsink/dist/subsink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubSink", function() { return _subsink__WEBPACK_IMPORTED_MODULE_0__["SubSink"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/subsink/dist/subsink.js":
/*!**********************************************!*\
  !*** ./node_modules/subsink/dist/subsink.js ***!
  \**********************************************/
/*! exports provided: SubSink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubSink", function() { return SubSink; });
var isFunction = function (fn) { return typeof fn === 'function'; };
/**
 * Subscription sink that holds Observable subscriptions
 * until you call unsubscribe on it in ngOnDestroy.
 */
var SubSink = /** @class */ (function () {
    /**
     * Subscription sink that holds Observable subscriptions
     * until you call unsubscribe on it in ngOnDestroy.
     *
     * @example
     * In Angular:
     * ```
     *   private subs = new SubSink();
     *   ...
     *   this.subs.sink = observable$.subscribe(
     *   this.subs.add(observable$.subscribe(...));
     *   ...
     *   ngOnDestroy() {
     *     this.subs.unsubscribe();
     *   }
     * ```
     */
    function SubSink() {
        this._subs = [];
    }
    /**
     * Add subscriptions to the tracked subscriptions
     * @example
     *  this.subs.add(observable$.subscribe(...));
     */
    SubSink.prototype.add = function () {
        var subscriptions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            subscriptions[_i] = arguments[_i];
        }
        this._subs = this._subs.concat(subscriptions);
    };
    Object.defineProperty(SubSink.prototype, "sink", {
        /**
         * Assign subscription to this sink to add it to the tracked subscriptions
         * @example
         *  this.subs.sink = observable$.subscribe(...);
         */
        set: function (subscription) {
            this._subs.push(subscription);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Unsubscribe to all subscriptions in ngOnDestroy()
     * @example
     *   ngOnDestroy() {
     *     this.subs.unsubscribe();
     *   }
     */
    SubSink.prototype.unsubscribe = function () {
        this._subs.forEach(function (sub) { return sub && isFunction(sub.unsubscribe) && sub.unsubscribe(); });
        this._subs = [];
    };
    return SubSink;
}());

//# sourceMappingURL=subsink.js.map

/***/ }),

/***/ "./src/app/demo/components/demo/demo.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/demo/components/demo/demo.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mdo-draw-demo-container {\n  max-width: 1200px;\n  margin: auto;\n}\n\n.mdo-draw-demo-item {\n  max-width: 420px;\n  margin: 4rem auto 1rem;\n}\n\n.mdo-draw-notes-item {\n  max-width: 420px;\n  margin: 4rem auto 1rem;\n  padding-left: 1rem;\n}\n\n.mdo-demo-divider {\n  margin: 5rem;\n  border-bottom: 1px dashed #bbb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hvcGVsZXNzbmVzcy9ncmlnYS9tZWRvbmRvL2RyYXdlci9zcmMvYXBwL2RlbW8vY29tcG9uZW50cy9kZW1vL2RlbW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbW8vY29tcG9uZW50cy9kZW1vL2RlbW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9kZW1vL2NvbXBvbmVudHMvZGVtby9kZW1vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kby1kcmF3LWRlbW8tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5tZG8tZHJhdy1kZW1vLWl0ZW0ge1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBtYXJnaW46IDRyZW0gYXV0byAxcmVtO1xufVxuXG4ubWRvLWRyYXctbm90ZXMtaXRlbSB7XG4gIG1heC13aWR0aDogNDIwcHg7XG4gIG1hcmdpbjogNHJlbSBhdXRvIDFyZW07XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cblxuLm1kby1kZW1vLWRpdmlkZXIge1xuICBtYXJnaW46IDVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2JiYjtcbn1cbiIsIi5tZG8tZHJhdy1kZW1vLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5tZG8tZHJhdy1kZW1vLWl0ZW0ge1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBtYXJnaW46IDRyZW0gYXV0byAxcmVtO1xufVxuXG4ubWRvLWRyYXctbm90ZXMtaXRlbSB7XG4gIG1heC13aWR0aDogNDIwcHg7XG4gIG1hcmdpbjogNHJlbSBhdXRvIDFyZW07XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cblxuLm1kby1kZW1vLWRpdmlkZXIge1xuICBtYXJnaW46IDVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2JiYjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/demo/components/demo/demo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/demo/components/demo/demo.component.ts ***!
  \********************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_examples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../demo.examples */ "./src/app/demo/demo.examples.ts");



let DemoComponent = class DemoComponent {
    constructor() {
        this.examples = _demo_examples__WEBPACK_IMPORTED_MODULE_2__["EXAMPLES"];
    }
};
DemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-demo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./demo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/components/demo/demo.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./demo.component.scss */ "./src/app/demo/components/demo/demo.component.scss")).default]
    })
], DemoComponent);



/***/ }),

/***/ "./src/app/demo/components/dev/dev.component.scss":
/*!********************************************************!*\
  !*** ./src/app/demo/components/dev/dev.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vY29tcG9uZW50cy9kZXYvZGV2LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/demo/components/dev/dev.component.ts":
/*!******************************************************!*\
  !*** ./src/app/demo/components/dev/dev.component.ts ***!
  \******************************************************/
/*! exports provided: DevComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevComponent", function() { return DevComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_examples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../demo.examples */ "./src/app/demo/demo.examples.ts");



let DevComponent = class DevComponent {
    constructor() {
        this.sample = _demo_examples__WEBPACK_IMPORTED_MODULE_2__["DEV_SAMPLE"];
    }
    ngOnInit() { }
};
DevComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mdo-dev',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dev.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/components/dev/dev.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dev.component.scss */ "./src/app/demo/components/dev/dev.component.scss")).default]
    })
], DevComponent);



/***/ }),

/***/ "./src/app/demo/demo.examples.ts":
/*!***************************************!*\
  !*** ./src/app/demo/demo.examples.ts ***!
  \***************************************/
/*! exports provided: DEV_SAMPLE, EXAMPLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEV_SAMPLE", function() { return DEV_SAMPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLES", function() { return EXAMPLES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/draw/draw.models */ "./src/app/draw/draw.models.ts");


const DEV_SAMPLE = {
    def: {
        background: 'assets/draw/bg/cmd_head_left_side_big.svg',
        activeTool: 0,
        toolbar: [
            {
                toolId: 'red arrow',
                kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].ARROW,
                src: 'assets/draw/icon/arrow-right-red.svg',
                color: 'red',
                width: 30
            },
            {
                toolId: 'red cross',
                kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].IMAGE,
                src: 'assets/draw/icon/close-red.svg',
                color: 'red'
            },
            {
                toolId: 'red brush',
                kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].BRUSH,
                color: 'red',
                icon: 'create',
                width: 7
            }
        ]
    }
};
const EXAMPLES = {
    sample: {
        description: 'simple example. press *i* button to look at widget config',
        def: {
            background: 'assets/draw/bg/cmd_head_left_side_big.svg',
            toolbar: [
                {
                    toolId: 'red arrow',
                    kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].ARROW,
                    src: 'assets/draw/icon/arrow-right-red.svg',
                    color: 'red',
                    width: 30
                },
                {
                    toolId: 'red cross',
                    kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].IMAGE,
                    src: 'assets/draw/icon/close-red.svg',
                    color: 'red'
                },
                {
                    toolId: 'red brush',
                    kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].BRUSH,
                    color: 'red',
                    icon: 'create',
                    width: 7
                }
            ]
        }
    },
    otherIcons: {
        description: 'icons are configurable. use any svg icons',
        def: {
            background: 'assets/draw/bg/cmd_head_left_side_big.svg',
            toolbar: [
                {
                    toolId: 'pill',
                    kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].IMAGE,
                    src: 'assets/draw/icon/pill.svg'
                },
                {
                    toolId: 'marker',
                    kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].IMAGE,
                    src: 'assets/draw/icon/marker.svg'
                },
                {
                    toolId: 'blue brush',
                    kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].BRUSH,
                    icon: 'create',
                    color: '#16ade1',
                    width: 9
                }
            ]
        }
    },
    preselected: {
        description: 'widget can have preselected tool',
        def: {
            background: 'assets/draw/bg/cmd_head_left_side_big.svg',
            activeTool: 0,
            toolbar: [
                {
                    toolId: 'red arrow',
                    kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].ARROW,
                    src: 'assets/draw/icon/arrow-right-red.svg',
                    color: 'red',
                    width: 30
                },
                {
                    toolId: 'red cross',
                    kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].IMAGE,
                    src: 'assets/draw/icon/close-red.svg',
                    color: 'red'
                },
                {
                    toolId: 'red brush',
                    kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].BRUSH,
                    color: 'red',
                    icon: 'create',
                    width: 7
                }
            ]
        }
    },
    notoolbar: {
        description: 'Toolbar hiden. Hover image to see marker',
        def: {
            toolbarHidden: true,
            background: 'assets/draw/bg/cmd_head_left_side_big.svg',
            activeTool: 0,
            toolbar: [
                {
                    toolId: 'red cross',
                    kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].IMAGE,
                    src: 'assets/draw/icon/close-red.svg'
                }
            ]
        }
    },
    withdata1: {
        description: 'we can save/load user data into widget',
        def: {
            background: 'assets/draw/bg/cmd_head_left_side_big.svg',
            toolbar: [
                {
                    toolId: 'red arrow',
                    kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].ARROW,
                    src: 'assets/draw/icon/arrow-right-red.svg',
                    color: 'red',
                    width: 30
                },
                {
                    toolId: 'red cross',
                    kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].IMAGE,
                    src: 'assets/draw/icon/close-red.svg',
                    color: 'red'
                },
                {
                    toolId: 'red brush',
                    kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].BRUSH,
                    color: 'red',
                    icon: 'create',
                    width: 15
                }
            ]
        },
        data: [
            {
                toolId: 'red brush',
                payload: 'M 123.84 601.92L 123.84 601.92 126.44 601.92 129.04 601.92 131.64 601.92 131.64 601.92 136.84 601.92 144.63 601.92 149.83 601.92 157.63 601.92 165.42 601.92 170.62 601.92 175.82 601.92 183.61 601.92 191.41 601.92 196.61 601.92 204.4 601.92 209.6 601.92 217.39 601.92 227.79 601.92 232.99 601.92 238.18 601.92 245.98 601.92 251.18 601.92 256.37 601.92 261.57 601.92 266.77 601.92 269.37 601.92 274.57 601.92 287.56 601.92 292.76 601.92 295.35 601.92 295.35 601.92 297.95 601.92 300.55 601.92 300.55 601.92 303.15 601.92 305.75 601.92'
            },
            {
                toolId: 'red brush',
                payload: 'M 129.04 456.4L 134.24 456.4 147.23 456.4 160.22 456.4 173.22 456.4 188.81 456.4 201.8 456.4 212.2 456.4 222.59 456.4 232.99 456.4 269.37 456.4 274.57 456.4 279.76 456.4 284.96 456.4 290.16 456.4 292.76 456.4 297.95 456.4 303.15 456.4 305.75 456.4 310.95 456.4 313.55 456.4 316.14 456.4 318.74 456.4 318.74 456.4'
            },
            {
                toolId: 'red brush',
                payload: 'M 318.74 459L 318.74 461.59 318.74 461.59 318.74 464.19 316.14 466.79 313.55 469.39 313.55 474.59 310.95 477.19 308.35 484.98 305.75 492.78 303.15 503.17 300.55 510.97 297.95 523.96 295.35 531.76 290.16 542.15 287.56 549.95 287.56 555.15 284.96 560.35 282.36 568.14 279.76 578.54 277.16 583.73 274.57 588.93 274.57 594.13 271.97 596.73 271.97 599.33 271.97 601.92 271.97 604.52'
            },
            {
                toolId: 'red brush',
                payload: 'M 134.24 464.19L 134.24 466.79 131.64 474.59 129.04 482.38 126.44 492.78 123.84 503.17 121.24 513.57 121.24 523.96 118.65 534.36 116.05 544.75 113.45 552.55 110.85 560.35 108.25 568.14 108.25 575.94 105.65 581.14 105.65 583.73 105.65 586.33 105.65 591.53 105.65 596.73 105.65 599.33 105.65 601.92 105.65 601.92 105.65 604.52 105.65 604.52 105.65 604.52 113.45 604.52 116.05 604.52 118.65 604.52 126.44 604.52 129.04 604.52 131.64 604.52 136.84 601.92 139.43 599.33 144.63 599.33 147.23 599.33 152.43 599.33 157.63 599.33 157.63 599.33 160.22 599.33 162.82 599.33 165.42 599.33 165.42 599.33 168.02 599.33'
            },
            {
                toolId: 'red arrow',
                payload: 'M 297.95 531.76 L 565.62 500.58'
            },
            {
                toolId: 'red cross',
                payload: {
                    x: 612.39,
                    y: 698.08
                }
            }
        ]
    },
    withdata2: {
        description: 'open *i* debug and search for user data',
        def: {
            background: 'assets/draw/bg/cmd_head_left_side_big.svg',
            toolbar: [
                {
                    toolId: 'red arrow',
                    kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].ARROW,
                    src: 'assets/draw/icon/arrow-right-red.svg',
                    color: 'red',
                    width: 30
                },
                {
                    toolId: 'green arrow',
                    kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].ARROW,
                    src: 'assets/draw/icon/arrow-right-green.svg',
                    color: 'green',
                    width: 30
                }
            ]
        },
        data: [
            {
                toolId: 'green arrow',
                payload: 'M 294.06 154.95 L 314.84 456.4'
            },
            {
                toolId: 'green arrow',
                payload: 'M444.78 82.18L481.16 381.03 '
            },
            {
                toolId: 'green arrow',
                payload: 'M 556.52 108.17 L 582.51 323.86'
            },
            {
                toolId: 'red arrow',
                payload: 'M 390.21 820.22 L 353.82 557.75'
            },
            {
                toolId: 'red arrow',
                payload: 'M 527.94 659.1 L 507.15 477.19'
            },
            {
                toolId: 'red arrow',
                payload: 'M 631.88 536.96 L 613.69 422.61'
            }
        ]
    },
    backgrounds: {
        description: 'backgrounds are configurable',
        def: {
            background: 'assets/draw/bg/cmd_head_frontal_side_big.svg',
            backgrounds: [
                'assets/draw/bg/cmd_head_frontal_side_big.svg',
                'assets/draw/bg/cmd_head_left_side_big.svg',
                'assets/draw/bg/cmd_head_right_side_big.svg'
            ],
            toolbar: [
                {
                    toolId: 'arrow down',
                    kind: src_app_draw_draw_models__WEBPACK_IMPORTED_MODULE_1__["DrawToolKinds"].IMAGE,
                    src: 'assets/draw/icon/arrow-down.svg'
                }
            ]
        }
    }
};


/***/ }),

/***/ "./src/app/demo/demo.module.ts":
/*!*************************************!*\
  !*** ./src/app/demo/demo.module.ts ***!
  \*************************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/demo/demo.component */ "./src/app/demo/components/demo/demo.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _draw_draw_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../draw/draw.module */ "./src/app/draw/draw.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _components_dev_dev_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dev/dev.component */ "./src/app/demo/components/dev/dev.component.ts");








let DemoModule = class DemoModule {
};
DemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_3__["DemoComponent"], _components_dev_dev_component__WEBPACK_IMPORTED_MODULE_7__["DevComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _components_dev_dev_component__WEBPACK_IMPORTED_MODULE_7__["DevComponent"] }]),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: 'demo', component: _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_3__["DemoComponent"] }]),
            _draw_draw_module__WEBPACK_IMPORTED_MODULE_5__["DrawModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"]
        ]
    })
], DemoModule);



/***/ }),

/***/ "./src/app/draw/components/draw/draw-handlers/draw-arrow-handler.ts":
/*!**************************************************************************!*\
  !*** ./src/app/draw/components/draw/draw-handlers/draw-arrow-handler.ts ***!
  \**************************************************************************/
/*! exports provided: DrawArrowHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawArrowHandler", function() { return DrawArrowHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _draw_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw-handler */ "./src/app/draw/components/draw/draw-handlers/draw-handler.ts");


class DrawArrowHandler extends _draw_handler__WEBPACK_IMPORTED_MODULE_1__["DrawHandler"] {
    constructor(draw, tool, source) {
        super(draw, tool, source);
        source.hide();
        draw.add(source);
    }
    handleMouseMove({ x: x2, y: y2 }) {
        if (!this._pointerActive || !this._line) {
            return;
        }
        const { x: x1, y: y1 } = this._pointFrom;
        const distance = this.getDistance(x1, y1, x2, y2);
        if (distance < 10) {
            return;
        }
        this._line.plot(`M ${x1} ${y1} L ${x2} ${y2}`);
        const headAngle = this.getAngle(x1, y1, x2, y2);
        this.source
            .show()
            .center(x2, y2)
            .attr('transform', `rotate(${headAngle} ${x2} ${y2})`);
    }
    handleMouseDown({ x, y }) {
        this._pointerActive = true;
        this._pointFrom = { x, y };
        this._line = this.draw
            .path()
            .stroke({
            width: this.tool.width || 1,
            color: this.tool.color || 'black'
        })
            .fill('none');
    }
    handleMouseUp() {
        this._pointerActive = false;
        const group = this.draw.group();
        group.add(this._line);
        group.add(this.source.clone());
        this.source.hide();
        this.onShape$.next(group);
    }
    renderData(object) {
        const group = this.draw.group();
        const line = this.draw
            .path()
            .stroke({
            width: this.tool.width || 1,
            color: this.tool.color || 'black'
        })
            .fill('none')
            .plot(object.payload);
        group.add(line);
        const [[, x1, y1], [, x2, y2]] = line.array();
        const headAngle = this.getAngle(x1, y1, x2, y2);
        const head = this.source
            .clone()
            .show()
            .center(x2, y2)
            .attr('transform', `rotate(${headAngle} ${x2} ${y2})`);
        group.add(head);
        return group;
    }
    getData(object) {
        const path = object.shape.first();
        return path.node.getAttribute('d');
    }
    getAngle(x1, y1, x2, y2) {
        return Math.round((Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI);
    }
    getDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    }
}


/***/ }),

/***/ "./src/app/draw/components/draw/draw-handlers/draw-brush-handler.ts":
/*!**************************************************************************!*\
  !*** ./src/app/draw/components/draw/draw-handlers/draw-brush-handler.ts ***!
  \**************************************************************************/
/*! exports provided: DrawBrushHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawBrushHandler", function() { return DrawBrushHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _draw_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw-handler */ "./src/app/draw/components/draw/draw-handlers/draw-handler.ts");


class DrawBrushHandler extends _draw_handler__WEBPACK_IMPORTED_MODULE_1__["DrawHandler"] {
    constructor(draw, tool, source) {
        super(draw, tool, source);
        this._cursor = draw
            .circle(tool.width || 1)
            .fill(tool.color || 'black')
            .hide();
    }
    handleMouseEnter({ x, y }) {
        this._cursor.center(x, y);
        this._cursor.show();
    }
    handleMouseMove({ x, y }) {
        this._cursor.center(x, y);
        if (!this._pointerActive || !this._path) {
            return;
        }
        this._points.push({ x, y });
        const plot = this._points
            .map((point, idx) => {
            return idx === 0
                ? `M ${point.x} ${point.y}`
                : idx === 1
                    ? `L ${point.x} ${point.y}`
                    : ` ${point.x} ${point.y}`;
        })
            .join('');
        this._path.plot(plot);
    }
    handleMouseDown() {
        this._pointerActive = true;
        this._points = [];
        this._path = this.draw
            .path()
            .stroke({
            width: this.tool.width || 1,
            color: this.tool.color || 'black'
        })
            .fill('none');
    }
    handleMouseUp() {
        this._pointerActive = false;
        this.onShape$.next(this._path);
    }
    handleMouseLeave() {
        this._cursor.hide();
    }
    renderData(object) {
        return this.draw
            .path()
            .stroke({
            width: this.tool.width || 1,
            color: this.tool.color || 'black'
        })
            .fill('none')
            .plot(object.payload);
    }
    getData(object) {
        return object.shape.node.getAttribute('d');
    }
}


/***/ }),

/***/ "./src/app/draw/components/draw/draw-handlers/draw-handler.ts":
/*!********************************************************************!*\
  !*** ./src/app/draw/components/draw/draw-handlers/draw-handler.ts ***!
  \********************************************************************/
/*! exports provided: DrawHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawHandler", function() { return DrawHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


// partial realization of common stuff for han all handlers
class DrawHandler {
    constructor(draw, tool, source) {
        this.onShape$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.draw = draw;
        this.tool = tool;
        this.source = source;
    }
    // default empty implementations to not implement in every handler
    render(object) { }
    handleMouseEnter(xy) { }
    handleMouseDown(xy) { }
    handleMouseMove(xy) { }
    handleMouseUp(xy) { }
    handleMouseLeave(xy) { }
    renderData(object) {
        return null;
    }
    getData(object) { }
    destory() { }
}


/***/ }),

/***/ "./src/app/draw/components/draw/draw-handlers/draw-image-handler.ts":
/*!**************************************************************************!*\
  !*** ./src/app/draw/components/draw/draw-handlers/draw-image-handler.ts ***!
  \**************************************************************************/
/*! exports provided: DrawImageHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawImageHandler", function() { return DrawImageHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _draw_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw-handler */ "./src/app/draw/components/draw/draw-handlers/draw-handler.ts");


class DrawImageHandler extends _draw_handler__WEBPACK_IMPORTED_MODULE_1__["DrawHandler"] {
    constructor(draw, tool, source) {
        super(draw, tool, source);
        source.hide();
        this.draw.add(source);
        this._cursor = source.clone();
        this.draw.add(this._cursor);
    }
    handleMouseEnter({ x, y }) {
        this._cursor.center(x, y);
        this._cursor.show();
    }
    handleMouseMove({ x, y }) {
        this._cursor.center(x, y);
    }
    handleMouseDown({ x, y }) {
        const image = this.addImage({ x, y });
        this.onShape$.next(image);
    }
    handleMouseLeave() {
        this._cursor.hide();
    }
    addImage({ x, y }) {
        const image = this.source
            .clone()
            .center(x, y)
            .show();
        this.draw.add(image);
        return image;
    }
    renderData(object) {
        return this.addImage(object.payload);
    }
    getData(object) {
        return {
            x: object.shape.cx(),
            y: object.shape.cy()
        };
    }
}


/***/ }),

/***/ "./src/app/draw/components/draw/draw-handlers/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/draw/components/draw/draw-handlers/index.ts ***!
  \*************************************************************/
/*! exports provided: DrawHandler, DrawArrowHandler, DrawBrushHandler, DrawImageHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _draw_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw-handler */ "./src/app/draw/components/draw/draw-handlers/draw-handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawHandler", function() { return _draw_handler__WEBPACK_IMPORTED_MODULE_1__["DrawHandler"]; });

/* harmony import */ var _draw_arrow_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draw-arrow-handler */ "./src/app/draw/components/draw/draw-handlers/draw-arrow-handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawArrowHandler", function() { return _draw_arrow_handler__WEBPACK_IMPORTED_MODULE_2__["DrawArrowHandler"]; });

/* harmony import */ var _draw_brush_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draw-brush-handler */ "./src/app/draw/components/draw/draw-handlers/draw-brush-handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawBrushHandler", function() { return _draw_brush_handler__WEBPACK_IMPORTED_MODULE_3__["DrawBrushHandler"]; });

/* harmony import */ var _draw_image_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./draw-image-handler */ "./src/app/draw/components/draw/draw-handlers/draw-image-handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawImageHandler", function() { return _draw_image_handler__WEBPACK_IMPORTED_MODULE_4__["DrawImageHandler"]; });








/***/ }),

/***/ "./src/app/draw/components/draw/draw.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/draw/components/draw/draw.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  flex-direction: column;\n  max-width: 1000px;\n}\n\n.mdo-draw-container {\n  padding: 1rem 0.1rem;\n}\n\n.mdo-draw-container .mdo-draw-sidebar {\n  padding-top: 4.5rem;\n}\n\n.mdo-draw-container .mdo-draw-sidebar .mdo-draw-bg-button {\n  width: 90px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  padding: 0.5rem;\n  box-sizing: border-box;\n  background: transparent;\n}\n\n.mdo-draw-container .mdo-draw-sidebar .mdo-draw-bg-button img {\n  display: block;\n  width: 100%;\n}\n\n.mdo-draw-container .mdo-draw-sidebar .mdo-draw-bg-button.active {\n  border: 1px dashed rgba(119, 136, 153, 0.4);\n}\n\n.mdo-draw-container .mdo-draw-main {\n  padding: 0 1rem;\n}\n\n.mdo-draw-container .mdo-draw-main .mdo-draw-toolbar {\n  margin: 0 0 0.5rem;\n  height: 4rem;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.mdo-draw-container .mdo-draw-main .mdo-draw-toolbar .mdo-draw-tool-button {\n  height: 3rem;\n  min-width: 3rem;\n  padding: 0;\n}\n\n.mdo-draw-container .mdo-draw-main .mdo-draw-toolbar .mdo-draw-tool-button:not([disabled]) {\n  color: #777;\n}\n\n.mdo-draw-container .mdo-draw-main .mdo-draw-toolbar .mdo-draw-tool-button img {\n  max-width: 1.5rem;\n}\n\n.mdo-draw-container .mdo-draw-main .mdo-draw-toolbar .mdo-draw-tool-button.active {\n  border: 1px dashed rgba(119, 136, 153, 0.4);\n}\n\n.mdo-draw-container .mdo-draw-main .mdo-draw-toolbar .mdo-draw-toolbar-spacer {\n  height: 2rem;\n}\n\n.mdo-draw-container .mdo-draw-main .mdo-draw-viewport.active {\n  cursor: crosshair;\n}\n\n.mdo-draw-container .mdo-draw-main .mdo-draw-viewport .mdo-draw-svg {\n  margin: 0;\n  display: block;\n}\n\npre {\n  background: rgba(153, 136, 119, 0.2);\n  padding: 1rem;\n  margin: 0;\n  max-height: 400px;\n  overflow: auto;\n}\n\n.flex-fill {\n  flex: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hvcGVsZXNzbmVzcy9ncmlnYS9tZWRvbmRvL2RyYXdlci9zcmMvYXBwL2RyYXcvY29tcG9uZW50cy9kcmF3L2RyYXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RyYXcvY29tcG9uZW50cy9kcmF3L2RyYXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7QUNFRjs7QURDRTtFQUNFLG1CQUFBO0FDQ0o7O0FEQUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNFTjs7QURETTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDR1I7O0FERE07RUFDRSwyQ0FBQTtBQ0dSOztBREVFO0VBQ0UsZUFBQTtBQ0FKOztBRENJO0VBQ0Usa0JBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0FOOztBRENNO0VBQ0UsWUFBQTtFQUVBLGVBQUE7RUFDQSxVQUFBO0FDQVI7O0FERVE7RUFDRSxXQUFBO0FDQVY7O0FERVE7RUFDRSxpQkFBQTtBQ0FWOztBREdRO0VBR0UsMkNBQUE7QUNIVjs7QURNTTtFQUNFLFlBQUE7QUNKUjs7QURZTTtFQUNFLGlCQUFBO0FDVlI7O0FEWU07RUFDRSxTQUFBO0VBQ0EsY0FBQTtBQ1ZSOztBRGlCQTtFQUNFLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7QUNmRjs7QURrQkE7RUFDRSxVQUFBO0FDZkYiLCJmaWxlIjoic3JjL2FwcC9kcmF3L2NvbXBvbmVudHMvZHJhdy9kcmF3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbn1cbi5tZG8tZHJhdy1jb250YWluZXIge1xuICBwYWRkaW5nOiAxcmVtIDAuMXJlbTtcbiAgLy8gYmFja2dyb3VuZDogcmdiYShyZWQsIDAuOSk7XG5cbiAgLm1kby1kcmF3LXNpZGViYXIge1xuICAgIHBhZGRpbmctdG9wOiA0LjVyZW07XG4gICAgLm1kby1kcmF3LWJnLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogOTBweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBpbWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKCM3ODksIDAuNCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1kby1kcmF3LW1haW4ge1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAubWRvLWRyYXctdG9vbGJhciB7XG4gICAgICBtYXJnaW46IDAgMCAwLjVyZW07XG5cbiAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAubWRvLWRyYXctdG9vbC1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIC8vIG1hcmdpbjogMC4xMjVyZW07XG4gICAgICAgIG1pbi13aWR0aDogM3JlbTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNHJlbTtcbiAgICAgICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgLy8gYmFja2dyb3VuZDogIzY5ZjBhZTtcblxuICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKCM3ODksIDAuNCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5tZG8tZHJhdy10b29sYmFyLXNwYWNlciB7XG4gICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgLy8gbWFyZ2luOiAxLjI1cmVtIDFyZW07XG4gICAgICAgIC8vIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VkZWRlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWRvLWRyYXctdmlld3BvcnQge1xuICAgICAgLy8gbWFyZ2luOiAxcmVtO1xuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgICAgIH1cbiAgICAgIC5tZG8tZHJhdy1zdmcge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiByZ2JhKCM5MDkzMTYsIDAuMik7c3ZnLXN2Zy1jb250YWluZXJjb250YWluZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxucHJlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgjOTg3LCAwLjIpO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW46IDA7XG5cbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZmxleC1maWxsIHtcbiAgZmxleDogYXV0bztcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG59XG5cbi5tZG8tZHJhdy1jb250YWluZXIge1xuICBwYWRkaW5nOiAxcmVtIDAuMXJlbTtcbn1cbi5tZG8tZHJhdy1jb250YWluZXIgLm1kby1kcmF3LXNpZGViYXIge1xuICBwYWRkaW5nLXRvcDogNC41cmVtO1xufVxuLm1kby1kcmF3LWNvbnRhaW5lciAubWRvLWRyYXctc2lkZWJhciAubWRvLWRyYXctYmctYnV0dG9uIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1kby1kcmF3LWNvbnRhaW5lciAubWRvLWRyYXctc2lkZWJhciAubWRvLWRyYXctYmctYnV0dG9uIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tZG8tZHJhdy1jb250YWluZXIgLm1kby1kcmF3LXNpZGViYXIgLm1kby1kcmF3LWJnLWJ1dHRvbi5hY3RpdmUge1xuICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgxMTksIDEzNiwgMTUzLCAwLjQpO1xufVxuLm1kby1kcmF3LWNvbnRhaW5lciAubWRvLWRyYXctbWFpbiB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cbi5tZG8tZHJhdy1jb250YWluZXIgLm1kby1kcmF3LW1haW4gLm1kby1kcmF3LXRvb2xiYXIge1xuICBtYXJnaW46IDAgMCAwLjVyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWRvLWRyYXctY29udGFpbmVyIC5tZG8tZHJhdy1tYWluIC5tZG8tZHJhdy10b29sYmFyIC5tZG8tZHJhdy10b29sLWJ1dHRvbiB7XG4gIGhlaWdodDogM3JlbTtcbiAgbWluLXdpZHRoOiAzcmVtO1xuICBwYWRkaW5nOiAwO1xufVxuLm1kby1kcmF3LWNvbnRhaW5lciAubWRvLWRyYXctbWFpbiAubWRvLWRyYXctdG9vbGJhciAubWRvLWRyYXctdG9vbC1idXR0b246bm90KFtkaXNhYmxlZF0pIHtcbiAgY29sb3I6ICM3Nzc7XG59XG4ubWRvLWRyYXctY29udGFpbmVyIC5tZG8tZHJhdy1tYWluIC5tZG8tZHJhdy10b29sYmFyIC5tZG8tZHJhdy10b29sLWJ1dHRvbiBpbWcge1xuICBtYXgtd2lkdGg6IDEuNXJlbTtcbn1cbi5tZG8tZHJhdy1jb250YWluZXIgLm1kby1kcmF3LW1haW4gLm1kby1kcmF3LXRvb2xiYXIgLm1kby1kcmF3LXRvb2wtYnV0dG9uLmFjdGl2ZSB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDExOSwgMTM2LCAxNTMsIDAuNCk7XG59XG4ubWRvLWRyYXctY29udGFpbmVyIC5tZG8tZHJhdy1tYWluIC5tZG8tZHJhdy10b29sYmFyIC5tZG8tZHJhdy10b29sYmFyLXNwYWNlciB7XG4gIGhlaWdodDogMnJlbTtcbn1cbi5tZG8tZHJhdy1jb250YWluZXIgLm1kby1kcmF3LW1haW4gLm1kby1kcmF3LXZpZXdwb3J0LmFjdGl2ZSB7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuLm1kby1kcmF3LWNvbnRhaW5lciAubWRvLWRyYXctbWFpbiAubWRvLWRyYXctdmlld3BvcnQgLm1kby1kcmF3LXN2ZyB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnByZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTUzLCAxMzYsIDExOSwgMC4yKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAwO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5mbGV4LWZpbGwge1xuICBmbGV4OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/draw/components/draw/draw.component.ts":
/*!********************************************************!*\
  !*** ./src/app/draw/components/draw/draw.component.ts ***!
  \********************************************************/
/*! exports provided: DrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawComponent", function() { return DrawComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/src/main.js");
/* harmony import */ var _svgdotjs_svg_draggable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @svgdotjs/svg.draggable.js */ "./node_modules/@svgdotjs/svg.draggable.js/src/svg.draggable.js");
/* harmony import */ var save_svg_as_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! save-svg-as-png */ "./node_modules/save-svg-as-png/lib/saveSvgAsPng.js");
/* harmony import */ var save_svg_as_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(save_svg_as_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! subsink */ "./node_modules/subsink/dist/index.js");
/* harmony import */ var _draw_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../draw.models */ "./src/app/draw/draw.models.ts");
/* harmony import */ var _draw_handlers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./draw-handlers */ "./src/app/draw/components/draw/draw-handlers/index.ts");










let DrawComponent = class DrawComponent {
    constructor(ngZone, changeDetector) {
        this.ngZone = ngZone;
        this.changeDetector = changeDetector;
        this.data = [
        // {
        //   toolId: 'red arrow',
        //   payload: 'M 418.25 180.72 L 629.08 524.94'
        // }
        ];
        this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.background = null;
        this.activeTool = null;
        this.objects = [];
        this.toolHandlers = {};
        this.sub = new subsink__WEBPACK_IMPORTED_MODULE_7__["SubSink"]();
        this.select = (_) => {
            this.objects.forEach(this.deselect);
            _.outline.stroke({
                color: '#987',
                dasharray: '5,5'
            });
            _.selected = true;
        };
        this.deselect = (_) => {
            _.outline.stroke('transparent');
            _.selected = false;
        };
        this.loadImage = (url) => {
            return new Promise(resolve => {
                const image = this.draw.image(url, () => resolve(image));
            });
        };
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.def) {
                throw new Error('DrawComponent [def] input of DrawDef type is required');
            }
            this.draw = this.createDrawSVG();
            const imageMap = yield this.preloadImages(this.def);
            this.renderBg(this.def.background);
            this.createToolbar(imageMap);
            if (this.data) {
                this.renderData(this.data);
            }
        });
    }
    createDrawSVG() {
        const draw = Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_1__["SVG"])(this.svgRef.nativeElement);
        draw.size('100%', '100%');
        return draw;
    }
    createToolbar(imageMap) {
        this.bindEvents();
        const tool = typeof this.def.activeTool === 'number' ? this.def.toolbar[this.def.activeTool] : null;
        this.setTool(tool);
        this.renderBg(this.def.background);
        this.createToolHandlers(this.def.toolbar, this.draw, imageMap);
        this.changeDetector.markForCheck();
    }
    createToolHandlers(toolbar, draw, imageMap) {
        const handlerMapping = {
            [_draw_models__WEBPACK_IMPORTED_MODULE_8__["DrawToolKinds"].IMAGE]: _draw_handlers__WEBPACK_IMPORTED_MODULE_9__["DrawImageHandler"],
            [_draw_models__WEBPACK_IMPORTED_MODULE_8__["DrawToolKinds"].BRUSH]: _draw_handlers__WEBPACK_IMPORTED_MODULE_9__["DrawBrushHandler"],
            [_draw_models__WEBPACK_IMPORTED_MODULE_8__["DrawToolKinds"].ARROW]: _draw_handlers__WEBPACK_IMPORTED_MODULE_9__["DrawArrowHandler"]
        };
        toolbar.forEach(tool => {
            this.toolHandlers[tool.toolId] = new handlerMapping[tool.kind](draw, tool, imageMap[tool.toolId]);
            this.sub.sink = this.toolHandlers[tool.toolId].onShape$.subscribe(_ => {
                this.addObject(_, tool.toolId);
                this.dumpData();
            });
        });
    }
    // mouse events outside angular
    bindEvents() {
        const bindings = {
            mouseenter: 'handleMouseEnter',
            mousemove: 'handleMouseMove',
            mousedown: 'handleMouseDown',
            mouseup: 'handleMouseUp',
            mouseleave: 'handleMouseLeave'
        };
        const bindFunc = () => Object.entries(bindings).forEach(([eventname, method]) => (this.sub.sink = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.svgRef.nativeElement, eventname)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(_ => !!this.activeTool), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["throttleTime"])(15), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(event => {
            const { x, y } = this.mouseXYtoViewBox(event);
            const handler = this.toolHandlers[this.activeTool.toolId];
            handler[method]({ x, y });
        }))
            .subscribe()));
        this.ngZone.runOutsideAngular(bindFunc);
    }
    mouseXYtoViewBox($event) {
        const rect = this.svgRef.nativeElement.getBoundingClientRect();
        const realLeft = $event.clientX - rect.left;
        const realTop = $event.clientY - rect.top;
        const viewbox = this.bgImage.bbox();
        const x = (viewbox.w / rect.width) * realLeft;
        const y = (viewbox.h / rect.height) * realTop;
        const round = (_) => Math.round(_ * 100) / 100;
        return { x: round(x), y: round(y) };
    }
    ngOnChanges(changes) { }
    renderBg(backgroundUrl) {
        this.background = backgroundUrl;
        this.draw.clear();
        this.bgImage = this.draw.image(backgroundUrl, () => {
            const bbox = this.bgImage.bbox();
            this.draw.viewbox(`0 0 ${bbox.w} ${bbox.h}`);
        });
    }
    setTool(tool) {
        tool = tool === this.activeTool ? null : tool;
        this.activeTool = tool;
    }
    addObject(shape, toolId) {
        const outline = this.draw
            .rect()
            .fill('transparent')
            .draggable();
        const object = {
            shape,
            outline,
            toolId,
            selected: false
        };
        outline.on('beforedrag', e => {
            if (this.activeTool) {
                e.preventDefault();
            }
        });
        outline.on('dragmove', () => {
            this.positionByOutline(object);
        });
        outline.on('dragend', () => {
            this.dumpData();
        });
        outline.on('mousedown', () => {
            if (this.activeTool) {
                return;
            }
            this.select(object);
            this.changeDetector.detectChanges();
        });
        this.positionOutline(object);
        this.objects.push(object);
    }
    positionOutline(_) {
        const bbox = _.shape.bbox();
        _.outline.size(bbox.w + 20, bbox.h + 20);
        _.outline.move(bbox.x - 10, bbox.y - 10);
    }
    positionByOutline(_) {
        const bbox = _.outline.bbox();
        _.shape.move(bbox.x + 10, bbox.y + 10);
    }
    get deleteDisabled() {
        return this.objects.every(_ => !_.selected);
    }
    deleteObject() {
        this.objects.filter(_ => !!_.selected).forEach(this.removeObject);
        this.objects = this.objects.filter(_ => !_.selected);
        this.dumpData();
    }
    removeObject({ shape, outline }) {
        shape.off().remove();
        outline.off().remove();
    }
    download() {
        this.objects.forEach(this.deselect);
        Object(save_svg_as_png__WEBPACK_IMPORTED_MODULE_3__["saveSvgAsPng"])(this.svgRef.nativeElement, 'mdo-drawing.png');
        this.changeDetector.detectChanges();
    }
    dumpData() {
        const data = this.objects.map(object => ({
            toolId: object.toolId,
            payload: this.toolHandlers[object.toolId].getData(object)
        }));
        this.data = data;
        this.dataChange.next(data);
        this.changeDetector.detectChanges();
    }
    renderData(data) {
        data
            .filter(_ => !!this.toolHandlers[_.toolId])
            .forEach(object => {
            let shape = this.toolHandlers[object.toolId].renderData(object);
            this.addObject(shape, object.toolId);
        });
    }
    preloadImages(def) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let urls = [def.background];
            const result = {};
            if (def.backgrounds) {
                urls = urls.concat(def.backgrounds);
            }
            if (def.toolbar) {
                urls = urls.concat(def.toolbar.filter(_ => !!_.src).map(_ => _.src));
            }
            const images = yield Promise.all(urls.map(_ => this.loadImage(_)));
            result['background'] = images.shift();
            if (def.backgrounds) {
                def.backgrounds.forEach((bg, idx) => (result['background' + idx] = images.shift()));
            }
            if (def.toolbar) {
                def.toolbar.filter(_ => !!_.src).forEach(tool => (result[tool.toolId] = images.shift()));
            }
            return result;
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
DrawComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()
], DrawComponent.prototype, "def", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()
], DrawComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])()
], DrawComponent.prototype, "dataChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('svg', { static: true })
], DrawComponent.prototype, "svgRef", void 0);
DrawComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'mdo-draw',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./draw.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/draw/components/draw/draw.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./draw.component.scss */ "./src/app/draw/components/draw/draw.component.scss")).default]
    })
], DrawComponent);



/***/ }),

/***/ "./src/app/draw/draw.models.ts":
/*!*************************************!*\
  !*** ./src/app/draw/draw.models.ts ***!
  \*************************************/
/*! exports provided: DrawToolKinds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawToolKinds", function() { return DrawToolKinds; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var DrawToolKinds;
(function (DrawToolKinds) {
    DrawToolKinds["ARROW"] = "ARROW";
    DrawToolKinds["IMAGE"] = "IMAGE";
    DrawToolKinds["BRUSH"] = "BRUSH";
})(DrawToolKinds || (DrawToolKinds = {}));


/***/ }),

/***/ "./src/app/draw/draw.module.ts":
/*!*************************************!*\
  !*** ./src/app/draw/draw.module.ts ***!
  \*************************************/
/*! exports provided: DrawModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawModule", function() { return DrawModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_draw_draw_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/draw/draw.component */ "./src/app/draw/components/draw/draw.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");







let DrawModule = class DrawModule {
};
DrawModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_draw_draw_component__WEBPACK_IMPORTED_MODULE_3__["DrawComponent"]],
        exports: [_components_draw_draw_component__WEBPACK_IMPORTED_MODULE_3__["DrawComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]]
    })
], DrawModule);



/***/ })

}]);
//# sourceMappingURL=demo-demo-module-es2015.js.map