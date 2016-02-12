(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//simple representation of the API

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var IVPAIDAdUnit = exports.IVPAIDAdUnit = function () {
    function IVPAIDAdUnit() {
        _classCallCheck(this, IVPAIDAdUnit);
    }

    _createClass(IVPAIDAdUnit, [{
        key: 'handshakeVersion',

        //all methods below
        //are async methods
        value: function handshakeVersion() {
            var playerVPAIDVersion = arguments.length <= 0 || arguments[0] === undefined ? '2.0' : arguments[0];
            var callback = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];
        }

        //creativeData is an object to be consistent with VPAIDHTML

    }, {
        key: 'initAd',
        value: function initAd(width, height, viewMode, desiredBitrate) {
            var creativeData = arguments.length <= 4 || arguments[4] === undefined ? { AdParameters: '' } : arguments[4];
            var environmentVars = arguments.length <= 5 || arguments[5] === undefined ? { flashVars: '' } : arguments[5];
            var callback = arguments.length <= 6 || arguments[6] === undefined ? undefined : arguments[6];
        }
    }, {
        key: 'resizeAd',
        value: function resizeAd(width, height, viewMode) {
            var callback = arguments.length <= 3 || arguments[3] === undefined ? undefined : arguments[3];
        }
    }, {
        key: 'startAd',
        value: function startAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
        }
    }, {
        key: 'stopAd',
        value: function stopAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
        }
    }, {
        key: 'pauseAd',
        value: function pauseAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
        }
    }, {
        key: 'resumeAd',
        value: function resumeAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
        }
    }, {
        key: 'expandAd',
        value: function expandAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
        }
    }, {
        key: 'collapseAd',
        value: function collapseAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
        }
    }, {
        key: 'skipAd',
        value: function skipAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
        }

        //properties that will be treat as async methods

    }, {
        key: 'getAdLinear',
        value: function getAdLinear(callback) {}
    }, {
        key: 'getAdWidth',
        value: function getAdWidth(callback) {}
    }, {
        key: 'getAdHeight',
        value: function getAdHeight(callback) {}
    }, {
        key: 'getAdExpanded',
        value: function getAdExpanded(callback) {}
    }, {
        key: 'getAdSkippableState',
        value: function getAdSkippableState(callback) {}
    }, {
        key: 'getAdRemainingTime',
        value: function getAdRemainingTime(callback) {}
    }, {
        key: 'getAdDuration',
        value: function getAdDuration(callback) {}
    }, {
        key: 'setAdVolume',
        value: function setAdVolume(soundVolume) {
            var callback = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];
        }
    }, {
        key: 'getAdVolume',
        value: function getAdVolume(callback) {}
    }, {
        key: 'getAdCompanions',
        value: function getAdCompanions(callback) {}
    }, {
        key: 'getAdIcons',
        value: function getAdIcons(callback) {}
    }]);

    return IVPAIDAdUnit;
}();

Object.defineProperty(IVPAIDAdUnit, 'EVENTS', {
    writable: false,
    configurable: false,
    value: ['AdLoaded', 'AdStarted', 'AdStopped', 'AdSkipped', 'AdSkippableStateChange', // VPAID 2.0 new event
    'AdSizeChange', // VPAID 2.0 new event
    'AdLinearChange', 'AdDurationChange', // VPAID 2.0 new event
    'AdExpandedChange', 'AdRemainingTimeChange', // [Deprecated in 2.0] but will be still fired for backwards compatibility
    'AdVolumeChange', 'AdImpression', 'AdVideoStart', 'AdVideoFirstQuartile', 'AdVideoMidpoint', 'AdVideoThirdQuartile', 'AdVideoComplete', 'AdClickThru', 'AdInteraction', // VPAID 2.0 new event
    'AdUserAcceptInvitation', 'AdUserMinimize', 'AdUserClose', 'AdPaused', 'AdPlaying', 'AdLog', 'AdError']
});

},{}],2:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var IVPAIDAdUnit = require('./IVPAIDAdUnit').IVPAIDAdUnit;
var ALL_VPAID_METHODS = Object.getOwnPropertyNames(IVPAIDAdUnit.prototype).filter(function (property) {
    return ['constructor'].indexOf(property) === -1;
});

var VPAIDAdUnit = exports.VPAIDAdUnit = function (_IVPAIDAdUnit) {
    _inherits(VPAIDAdUnit, _IVPAIDAdUnit);

    function VPAIDAdUnit(flash) {
        _classCallCheck(this, VPAIDAdUnit);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VPAIDAdUnit).call(this));

        _this._destroyed = false;
        _this._flash = flash;
        return _this;
    }

    _createClass(VPAIDAdUnit, [{
        key: '_destroy',
        value: function _destroy() {
            var _this2 = this;

            this._destroyed = true;
            ALL_VPAID_METHODS.forEach(function (methodName) {
                _this2._flash.removeCallbackByMethodName(methodName);
            });
            IVPAIDAdUnit.EVENTS.forEach(function (event) {
                _this2._flash.offEvent(event);
            });

            this._flash = null;
        }
    }, {
        key: 'isDestroyed',
        value: function isDestroyed() {
            return this._destroyed;
        }
    }, {
        key: 'on',
        value: function on(eventName, callback) {
            this._flash.on(eventName, callback);
        }
    }, {
        key: 'off',
        value: function off(eventName, callback) {
            this._flash.off(eventName, callback);
        }

        //VPAID interface

    }, {
        key: 'handshakeVersion',
        value: function handshakeVersion() {
            var playerVPAIDVersion = arguments.length <= 0 || arguments[0] === undefined ? '2.0' : arguments[0];
            var callback = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];

            this._flash.callFlashMethod('handshakeVersion', [playerVPAIDVersion], callback);
        }
    }, {
        key: 'initAd',
        value: function initAd(width, height, viewMode, desiredBitrate) {
            var creativeData = arguments.length <= 4 || arguments[4] === undefined ? { AdParameters: '' } : arguments[4];
            var environmentVars = arguments.length <= 5 || arguments[5] === undefined ? { flashVars: '' } : arguments[5];
            var callback = arguments.length <= 6 || arguments[6] === undefined ? undefined : arguments[6];

            //resize element that has the flash object
            this._flash.setSize(width, height);
            creativeData = creativeData || { AdParameters: '' };
            environmentVars = environmentVars || { flashVars: '' };

            this._flash.callFlashMethod('initAd', [this._flash.getWidth(), this._flash.getHeight(), viewMode, desiredBitrate, creativeData.AdParameters || '', environmentVars.flashVars || ''], callback);
        }
    }, {
        key: 'resizeAd',
        value: function resizeAd(width, height, viewMode) {
            var callback = arguments.length <= 3 || arguments[3] === undefined ? undefined : arguments[3];

            //resize element that has the flash object
            this._flash.setSize(width, height);

            //resize ad inside the flash
            this._flash.callFlashMethod('resizeAd', [this._flash.getWidth(), this._flash.getHeight(), viewMode], callback);
        }
    }, {
        key: 'startAd',
        value: function startAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            this._flash.callFlashMethod('startAd', [], callback);
        }
    }, {
        key: 'stopAd',
        value: function stopAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            this._flash.callFlashMethod('stopAd', [], callback);
        }
    }, {
        key: 'pauseAd',
        value: function pauseAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            this._flash.callFlashMethod('pauseAd', [], callback);
        }
    }, {
        key: 'resumeAd',
        value: function resumeAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            this._flash.callFlashMethod('resumeAd', [], callback);
        }
    }, {
        key: 'expandAd',
        value: function expandAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            this._flash.callFlashMethod('expandAd', [], callback);
        }
    }, {
        key: 'collapseAd',
        value: function collapseAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            this._flash.callFlashMethod('collapseAd', [], callback);
        }
    }, {
        key: 'skipAd',
        value: function skipAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            this._flash.callFlashMethod('skipAd', [], callback);
        }

        //properties that will be treat as async methods

    }, {
        key: 'getAdLinear',
        value: function getAdLinear(callback) {
            this._flash.callFlashMethod('getAdLinear', [], callback);
        }
    }, {
        key: 'getAdWidth',
        value: function getAdWidth(callback) {
            this._flash.callFlashMethod('getAdWidth', [], callback);
        }
    }, {
        key: 'getAdHeight',
        value: function getAdHeight(callback) {
            this._flash.callFlashMethod('getAdHeight', [], callback);
        }
    }, {
        key: 'getAdExpanded',
        value: function getAdExpanded(callback) {
            this._flash.callFlashMethod('getAdExpanded', [], callback);
        }
    }, {
        key: 'getAdSkippableState',
        value: function getAdSkippableState(callback) {
            this._flash.callFlashMethod('getAdSkippableState', [], callback);
        }
    }, {
        key: 'getAdRemainingTime',
        value: function getAdRemainingTime(callback) {
            this._flash.callFlashMethod('getAdRemainingTime', [], callback);
        }
    }, {
        key: 'getAdDuration',
        value: function getAdDuration(callback) {
            this._flash.callFlashMethod('getAdDuration', [], callback);
        }
    }, {
        key: 'setAdVolume',
        value: function setAdVolume(volume) {
            var callback = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];

            this._flash.callFlashMethod('setAdVolume', [volume], callback);
        }
    }, {
        key: 'getAdVolume',
        value: function getAdVolume(callback) {
            this._flash.callFlashMethod('getAdVolume', [], callback);
        }
    }, {
        key: 'getAdCompanions',
        value: function getAdCompanions(callback) {
            this._flash.callFlashMethod('getAdCompanions', [], callback);
        }
    }, {
        key: 'getAdIcons',
        value: function getAdIcons(callback) {
            this._flash.callFlashMethod('getAdIcons', [], callback);
        }
    }]);

    return VPAIDAdUnit;
}(IVPAIDAdUnit);

},{"./IVPAIDAdUnit":1}],3:[function(require,module,exports){
'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var JSFlashBridge = require('./jsFlashBridge').JSFlashBridge;
var VPAIDAdUnit = require('./VPAIDAdUnit').VPAIDAdUnit;

var noop = require('./utils').noop;
var callbackTimeout = require('./utils').callbackTimeout;
var isPositiveInt = require('./utils').isPositiveInt;
var createElementWithID = require('./utils').createElementWithID;
var uniqueVPAID = require('./utils').unique('vpaid');
var createFlashTester = require('./flashTester.js').createFlashTester;

var ERROR = 'error';
var FLASH_VERSION = '10.1.0';

var flashTester = { isSupported: function isSupported() {
        return true;
    } }; // if the runFlashTest is not run the flashTester will always return true

var VPAIDFLASHClient = function () {
    function VPAIDFLASHClient(vpaidParentEl, callback) {
        var swfConfig = arguments.length <= 2 || arguments[2] === undefined ? { data: 'VPAIDFlash.swf', width: 800, height: 400 } : arguments[2];

        var _this = this;

        var params = arguments.length <= 3 || arguments[3] === undefined ? { wmode: 'transparent', salign: 'tl', align: 'left', allowScriptAccess: 'always', scale: 'noScale', allowFullScreen: 'true', quality: 'high' } : arguments[3];
        var vpaidOptions = arguments.length <= 4 || arguments[4] === undefined ? { debug: false, timeout: 10000 } : arguments[4];

        _classCallCheck(this, VPAIDFLASHClient);

        if (!VPAIDFLASHClient.hasExternalDependencies()) {
            return onError('no swfobject in global scope. check: https://github.com/swfobject/swfobject or https://code.google.com/p/swfobject/');
        }

        this._vpaidParentEl = vpaidParentEl;
        this._flashID = uniqueVPAID();
        this._destroyed = false;
        callback = callback || noop;

        swfConfig.width = isPositiveInt(swfConfig.width, 800);
        swfConfig.height = isPositiveInt(swfConfig.height, 400);

        createElementWithID(vpaidParentEl, this._flashID, true);

        params.movie = swfConfig.data;
        params.FlashVars = 'flashid=' + this._flashID + '&handler=' + JSFlashBridge.VPAID_FLASH_HANDLER + '&debug=' + vpaidOptions.debug + '&salign=' + params.salign;

        if (!VPAIDFLASHClient.isSupported()) {
            return onError('user don\'t support flash or doesn\'t have the minimum required version of flash ' + FLASH_VERSION);
        }

        this.el = swfobject.createSWF(swfConfig, params, this._flashID);

        if (!this.el) {
            return onError('swfobject failed to create object in element');
        }

        var handler = callbackTimeout(vpaidOptions.timeout, function (err, data) {
            $loadPendedAdUnit.call(_this);
            callback(err, data);
        }, function () {
            callback('vpaid flash load timeout ' + vpaidOptions.timeout);
        });

        this._flash = new JSFlashBridge(this.el, swfConfig.data, this._flashID, swfConfig.width, swfConfig.height, handler);

        function onError(error) {
            setTimeout(function () {
                callback(new Error(error));
            }, 0);
            return this;
        }
    }

    _createClass(VPAIDFLASHClient, [{
        key: 'destroy',
        value: function destroy() {
            this._destroyAdUnit();

            if (this._flash) {
                this._flash.destroy();
                this._flash = null;
            }
            this.el = null;
            this._destroyed = true;
        }
    }, {
        key: 'isDestroyed',
        value: function isDestroyed() {
            return this._destroyed;
        }
    }, {
        key: '_destroyAdUnit',
        value: function _destroyAdUnit() {
            delete this._loadLater;

            if (this._adUnitLoad) {
                this._adUnitLoad = null;
                this._flash.removeCallback(this._adUnitLoad);
            }

            if (this._adUnit) {
                this._adUnit._destroy();
                this._adUnit = null;
            }
        }
    }, {
        key: 'loadAdUnit',
        value: function loadAdUnit(adURL, callback) {
            var _this2 = this;

            $throwIfDestroyed.call(this);

            if (this._adUnit) {
                this._destroyAdUnit();
            }

            if (this._flash.isReady()) {
                this._adUnitLoad = function (err, message) {
                    if (!err) {
                        _this2._adUnit = new VPAIDAdUnit(_this2._flash);
                    }
                    _this2._adUnitLoad = null;
                    callback(err, _this2._adUnit);
                };

                this._flash.callFlashMethod('loadAdUnit', [adURL], this._adUnitLoad);
            } else {
                this._loadLater = { url: adURL, callback: callback };
            }
        }
    }, {
        key: 'unloadAdUnit',
        value: function unloadAdUnit() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            $throwIfDestroyed.call(this);

            this._destroyAdUnit();
            this._flash.callFlashMethod('unloadAdUnit', [], callback);
        }
    }, {
        key: 'getFlashID',
        value: function getFlashID() {
            $throwIfDestroyed.call(this);
            return this._flash.getFlashID();
        }
    }, {
        key: 'getFlashURL',
        value: function getFlashURL() {
            $throwIfDestroyed.call(this);
            return this._flash.getFlashURL();
        }
    }]);

    return VPAIDFLASHClient;
}();

setStaticProperty('isSupported', function () {
    return VPAIDFLASHClient.hasExternalDependencies() && swfobject.hasFlashPlayerVersion(FLASH_VERSION) && flashTester.isSupported();
}, true);

setStaticProperty('hasExternalDependencies', function () {
    return !!window.swfobject;
});

setStaticProperty('runFlashTest', function (swfConfig) {
    flashTester = createFlashTester(document.body, swfConfig);
});

function $throwIfDestroyed() {
    if (this._destroyed) {
        throw new Error('VPAIDFlashToJS is destroyed!');
    }
}

function $loadPendedAdUnit() {
    if (this._loadLater) {
        this.loadAdUnit(this._loadLater.url, this._loadLater.callback);
        delete this._loadLater;
    }
}

function setStaticProperty(propertyName, value) {
    var writable = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

    Object.defineProperty(VPAIDFLASHClient, propertyName, {
        writable: writable,
        configurable: false,
        value: value
    });
}

module.exports = VPAIDFLASHClient;

},{"./VPAIDAdUnit":2,"./flashTester.js":4,"./jsFlashBridge":5,"./utils":8}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var FLASH_TEST = 'vpaid_video_flash_tester';
var FLASH_TEST_EL = 'vpaid_video_flash_tester_el';
var JSFlashBridge = require('./jsFlashBridge').JSFlashBridge;
var utils = require('./utils');
var MultipleValuesRegistry = require('./registry').MultipleValuesRegistry;

var FlashTester = function () {
    function FlashTester(parent) {
        var _this = this;

        var swfConfig = arguments.length <= 1 || arguments[1] === undefined ? { data: 'VPAIDFlash.swf', width: 800, height: 400 } : arguments[1];

        _classCallCheck(this, FlashTester);

        this.parentEl = utils.createElementWithID(parent, FLASH_TEST_EL); // some browsers create global variables using the element id http://stackoverflow.com/questions/3434278/do-dom-tree-elements-with-ids-become-global-variables
        utils.hideFlashEl(this.parentEl);
        var params = {};
        params.movie = swfConfig.data;
        params.FlashVars = 'flashid=' + FLASH_TEST_EL + '&handler=' + JSFlashBridge.VPAID_FLASH_HANDLER;

        this.el = swfobject.createSWF(swfConfig, params, FLASH_TEST_EL);
        this._handlers = new MultipleValuesRegistry();
        this._isSupported = false;
        if (this.el) {
            utils.hideFlashEl(this.el);
            this._flash = new JSFlashBridge(this.el, swfConfig.data, FLASH_TEST_EL, 400, 400, function () {
                var support = true;
                _this._isSupported = support;
                _this._handlers.get('change').forEach(function (callback) {
                    setTimeout(function () {
                        callback('change', support);
                    }, 0);
                });
            });
        }
    }

    _createClass(FlashTester, [{
        key: 'isSupported',
        value: function isSupported() {
            return this._isSupported;
        }
    }, {
        key: 'on',
        value: function on(eventName, callback) {
            this._handlers.add(eventName, callback);
        }
    }]);

    return FlashTester;
}();

var createFlashTester = exports.createFlashTester = function createFlashTester(el, swfConfig) {
    if (!window[FLASH_TEST]) {
        window[FLASH_TEST] = new FlashTester(el, swfConfig);
    }
    return window[FLASH_TEST];
};

},{"./jsFlashBridge":5,"./registry":7,"./utils":8}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var unique = require('./utils').unique;
var isPositiveInt = require('./utils').isPositiveInt;
var stringEndsWith = require('./utils').stringEndsWith;
var SingleValueRegistry = require('./registry').SingleValueRegistry;
var MultipleValuesRegistry = require('./registry').MultipleValuesRegistry;
var registry = require('./jsFlashBridgeRegistry');
var VPAID_FLASH_HANDLER = 'vpaid_video_flash_handler';
var ERROR = 'AdError';

var JSFlashBridge = exports.JSFlashBridge = function () {
    function JSFlashBridge(el, flashURL, flashID, width, height, loadHandShake) {
        _classCallCheck(this, JSFlashBridge);

        this._el = el;
        this._flashID = flashID;
        this._flashURL = flashURL;
        this._width = width;
        this._height = height;
        this._handlers = new MultipleValuesRegistry();
        this._callbacks = new SingleValueRegistry();
        this._uniqueMethodIdentifier = unique(this._flashID);
        this._ready = false;
        this._handShakeHandler = loadHandShake;

        registry.addInstance(this._flashID, this);
    }

    _createClass(JSFlashBridge, [{
        key: 'on',
        value: function on(eventName, callback) {
            this._handlers.add(eventName, callback);
        }
    }, {
        key: 'off',
        value: function off(eventName, callback) {
            return this._handlers.remove(eventName, callback);
        }
    }, {
        key: 'offEvent',
        value: function offEvent(eventName) {
            return this._handlers.removeByKey(eventName);
        }
    }, {
        key: 'offAll',
        value: function offAll() {
            return this._handlers.removeAll();
        }
    }, {
        key: 'callFlashMethod',
        value: function callFlashMethod(methodName) {
            var args = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
            var callback = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];

            var callbackID = '';
            // if no callback, some methods the return is void so they don't need callback
            if (callback) {
                callbackID = this._uniqueMethodIdentifier() + '_' + methodName;
                this._callbacks.add(callbackID, callback);
            }

            try {
                //methods are created by ExternalInterface.addCallback in as3 code, if for some reason it failed
                //this code will throw an error
                this._el[methodName]([callbackID].concat(args));
            } catch (e) {
                if (callback) {
                    $asyncCallback.call(this, callbackID, e);
                } else {

                    //if there isn't any callback to return error use error event handler
                    this._trigger(ERROR, e);
                }
            }
        }
    }, {
        key: 'removeCallback',
        value: function removeCallback(callback) {
            return this._callbacks.removeByValue(callback);
        }
    }, {
        key: 'removeCallbackByMethodName',
        value: function removeCallbackByMethodName(suffix) {
            var _this = this;

            this._callbacks.filterKeys(function (key) {
                return stringEndsWith(key, suffix);
            }).forEach(function (key) {
                _this._callbacks.remove(key);
            });
        }
    }, {
        key: 'removeAllCallbacks',
        value: function removeAllCallbacks() {
            return this._callbacks.removeAll();
        }
    }, {
        key: '_trigger',
        value: function _trigger(eventName, event) {
            var _this2 = this;

            this._handlers.get(eventName).forEach(function (callback) {
                //clickThru has to be sync, if not will be block by the popupblocker
                if (eventName === 'AdClickThru') {
                    callback(event);
                } else {
                    setTimeout(function () {
                        if (_this2._handlers.get(eventName).length > 0) {
                            callback(event);
                        }
                    }, 0);
                }
            });
        }
    }, {
        key: '_callCallback',
        value: function _callCallback(methodName, callbackID, err, result) {

            var callback = this._callbacks.get(callbackID);

            //not all methods callback's are mandatory
            //but if there exist an error, fire the error event
            if (!callback) {
                if (err && callbackID === '') {
                    this.trigger(ERROR, err);
                }
                return;
            }

            $asyncCallback.call(this, callbackID, err, result);
        }
    }, {
        key: '_handShake',
        value: function _handShake(err, data) {
            this._ready = true;
            if (this._handShakeHandler) {
                this._handShakeHandler(err, data);
                delete this._handShakeHandler;
            }
        }

        //methods like properties specific to this implementation of VPAID

    }, {
        key: 'getSize',
        value: function getSize() {
            return { width: this._width, height: this._height };
        }
    }, {
        key: 'setSize',
        value: function setSize(newWidth, newHeight) {
            this._width = isPositiveInt(newWidth, this._width);
            this._height = isPositiveInt(newHeight, this._height);
            this._el.setAttribute('width', this._width);
            this._el.setAttribute('height', this._height);
        }
    }, {
        key: 'getWidth',
        value: function getWidth() {
            return this._width;
        }
    }, {
        key: 'setWidth',
        value: function setWidth(newWidth) {
            this.setSize(newWidth, this._height);
        }
    }, {
        key: 'getHeight',
        value: function getHeight() {
            return this._height;
        }
    }, {
        key: 'setHeight',
        value: function setHeight(newHeight) {
            this.setSize(this._width, newHeight);
        }
    }, {
        key: 'getFlashID',
        value: function getFlashID() {
            return this._flashID;
        }
    }, {
        key: 'getFlashURL',
        value: function getFlashURL() {
            return this._flashURL;
        }
    }, {
        key: 'isReady',
        value: function isReady() {
            return this._ready;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.offAll();
            this.removeAllCallbacks();
            registry.removeInstanceByID(this._flashID);
            if (this._el.parentElement) {
                this._el.parentElement.removeChild(this._el);
            }
        }
    }]);

    return JSFlashBridge;
}();

function $asyncCallback(callbackID, err, result) {
    var _this3 = this;

    setTimeout(function () {
        var callback = _this3._callbacks.get(callbackID);
        if (callback) {
            _this3._callbacks.remove(callbackID);
            callback(err, result);
        }
    }, 0);
}

Object.defineProperty(JSFlashBridge, 'VPAID_FLASH_HANDLER', {
    writable: false,
    configurable: false,
    value: VPAID_FLASH_HANDLER
});

/**
 * External interface handler
 *
 * @param {string} flashID identifier of the flash who call this
 * @param {string} typeID what type of message is, can be 'event' or 'callback'
 * @param {string} typeName if the typeID is a event the typeName will be the eventName, if is a callback the typeID is the methodName that is related this callback
 * @param {string} callbackID only applies when the typeID is 'callback', identifier of the callback to call
 * @param {object} error error object
 * @param {object} data
 */
window[VPAID_FLASH_HANDLER] = function (flashID, typeID, typeName, callbackID, error, data) {
    var instance = registry.getInstanceByID(flashID);
    if (!instance) return;
    if (typeName === 'handShake') {
        instance._handShake(error, data);
    } else {
        if (typeID !== 'event') {
            instance._callCallback(typeName, callbackID, error, data);
        } else {
            instance._trigger(typeName, data);
        }
    }
};

},{"./jsFlashBridgeRegistry":6,"./registry":7,"./utils":8}],6:[function(require,module,exports){
'use strict';

var SingleValueRegistry = require('./registry').SingleValueRegistry;
var instances = new SingleValueRegistry();

var JSFlashBridgeRegistry = {};
Object.defineProperty(JSFlashBridgeRegistry, 'addInstance', {
    writable: false,
    configurable: false,
    value: function value(id, instance) {
        instances.add(id, instance);
    }
});

Object.defineProperty(JSFlashBridgeRegistry, 'getInstanceByID', {
    writable: false,
    configurable: false,
    value: function value(id) {
        return instances.get(id);
    }
});

Object.defineProperty(JSFlashBridgeRegistry, 'removeInstanceByID', {
    writable: false,
    configurable: false,
    value: function value(id) {
        return instances.remove(id);
    }
});

module.exports = JSFlashBridgeRegistry;

},{"./registry":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var MultipleValuesRegistry = exports.MultipleValuesRegistry = function () {
    function MultipleValuesRegistry() {
        _classCallCheck(this, MultipleValuesRegistry);

        this._registries = {};
    }

    _createClass(MultipleValuesRegistry, [{
        key: 'add',
        value: function add(id, value) {
            if (!this._registries[id]) {
                this._registries[id] = [];
            }
            if (this._registries[id].indexOf(value) === -1) {
                this._registries[id].push(value);
            }
        }
    }, {
        key: 'get',
        value: function get(id) {
            return this._registries[id] || [];
        }
    }, {
        key: 'filterKeys',
        value: function filterKeys(handler) {
            return Object.keys(this._registries).filter(handler);
        }
    }, {
        key: 'findByValue',
        value: function findByValue(value) {
            var _this = this;

            var keys = Object.keys(this._registries).filter(function (key) {
                return _this._registries[key].indexOf(value) !== -1;
            });

            return keys;
        }
    }, {
        key: 'remove',
        value: function remove(key, value) {
            if (!this._registries[key]) {
                return;
            }

            var index = this._registries[key].indexOf(value);

            if (index < 0) {
                return;
            }
            return this._registries[key].splice(index, 1);
        }
    }, {
        key: 'removeByKey',
        value: function removeByKey(id) {
            var old = this._registries[id];
            delete this._registries[id];
            return old;
        }
    }, {
        key: 'removeByValue',
        value: function removeByValue(value) {
            var _this2 = this;

            var keys = this.findByValue(value);
            return keys.map(function (key) {
                return _this2.remove(key, value);
            });
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            var old = this._registries;
            this._registries = {};
            return old;
        }
    }, {
        key: 'size',
        value: function size() {
            return Object.keys(this._registries).length;
        }
    }]);

    return MultipleValuesRegistry;
}();

var SingleValueRegistry = exports.SingleValueRegistry = function () {
    function SingleValueRegistry() {
        _classCallCheck(this, SingleValueRegistry);

        this._registries = {};
    }

    _createClass(SingleValueRegistry, [{
        key: 'add',
        value: function add(id, value) {
            this._registries[id] = value;
        }
    }, {
        key: 'get',
        value: function get(id) {
            return this._registries[id];
        }
    }, {
        key: 'filterKeys',
        value: function filterKeys(handler) {
            return Object.keys(this._registries).filter(handler);
        }
    }, {
        key: 'findByValue',
        value: function findByValue(value) {
            var _this3 = this;

            var keys = Object.keys(this._registries).filter(function (key) {
                return _this3._registries[key] === value;
            });

            return keys;
        }
    }, {
        key: 'remove',
        value: function remove(id) {
            var old = this._registries[id];
            delete this._registries[id];
            return old;
        }
    }, {
        key: 'removeByValue',
        value: function removeByValue(value) {
            var _this4 = this;

            var keys = this.findByValue(value);
            return keys.map(function (key) {
                return _this4.remove(key);
            });
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            var old = this._registries;
            this._registries = {};
            return old;
        }
    }, {
        key: 'size',
        value: function size() {
            return Object.keys(this._registries).length;
        }
    }]);

    return SingleValueRegistry;
}();

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unique = unique;
exports.noop = noop;
exports.callbackTimeout = callbackTimeout;
exports.createElementWithID = createElementWithID;
exports.isPositiveInt = isPositiveInt;
exports.stringEndsWith = stringEndsWith;
exports.hideFlashEl = hideFlashEl;
function unique(prefix) {
    var count = -1;
    return function (f) {
        return prefix + '_' + ++count;
    };
}

function noop() {}

function callbackTimeout(timer, onSuccess, onTimeout) {

    var timeout = setTimeout(function () {

        onSuccess = noop;
        onTimeout();
    }, timer);

    return function () {
        clearTimeout(timeout);
        onSuccess.apply(this, arguments);
    };
}

function createElementWithID(parent, id) {
    var cleanContent = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

    var nEl = document.createElement('div');
    nEl.id = id;
    if (cleanContent) {
        parent.innerHTML = '';
    }
    parent.appendChild(nEl);
    return nEl;
}

function isPositiveInt(newVal, oldVal) {
    return !isNaN(parseFloat(newVal)) && isFinite(newVal) && newVal > 0 ? newVal : oldVal;
}

var endsWith = function () {
    if (String.prototype.endsWith) return String.prototype.endsWith;
    return function endsWith(searchString, position) {
        var subjectString = this.toString();
        if (position === undefined || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}();

function stringEndsWith(string, search) {
    return endsWith.call(string, search);
}

function hideFlashEl(el) {
    // can't use display none or visibility none because will block flash in some browsers
    el.style.position = 'absolute';
    el.style.left = '-1px';
    el.style.top = '-1px';
    el.style.width = '1px';
    el.style.height = '1px';
}

},{}],9:[function(require,module,exports){
'use strict';

var METHODS = [
    'handshakeVersion',
    'initAd',
    'startAd',
    'stopAd',
    'skipAd', // VPAID 2.0 new method
    'resizeAd',
    'pauseAd',
    'resumeAd',
    'expandAd',
    'collapseAd',
    'subscribe',
    'unsubscribe'
];

var EVENTS = [
    'AdLoaded',
    'AdStarted',
    'AdStopped',
    'AdSkipped',
    'AdSkippableStateChange', // VPAID 2.0 new event
    'AdSizeChange', // VPAID 2.0 new event
    'AdLinearChange',
    'AdDurationChange', // VPAID 2.0 new event
    'AdExpandedChange',
    'AdRemainingTimeChange', // [Deprecated in 2.0] but will be still fired for backwards compatibility
    'AdVolumeChange',
    'AdImpression',
    'AdVideoStart',
    'AdVideoFirstQuartile',
    'AdVideoMidpoint',
    'AdVideoThirdQuartile',
    'AdVideoComplete',
    'AdClickThru',
    'AdInteraction', // VPAID 2.0 new event
    'AdUserAcceptInvitation',
    'AdUserMinimize',
    'AdUserClose',
    'AdPaused',
    'AdPlaying',
    'AdLog',
    'AdError'
];

var GETTERS = [
    'getAdLinear',
    'getAdWidth', // VPAID 2.0 new getter
    'getAdHeight', // VPAID 2.0 new getter
    'getAdExpanded',
    'getAdSkippableState', // VPAID 2.0 new getter
    'getAdRemainingTime',
    'getAdDuration', // VPAID 2.0 new getter
    'getAdVolume',
    'getAdCompanions', // VPAID 2.0 new getter
    'getAdIcons' // VPAID 2.0 new getter
];

var SETTERS = [
    'setAdVolume'
];


/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */


/**
 * IVPAIDAdUnit
 *
 * @class
 *
 * @param {object} creative
 * @param {HTMLElement} el
 * @param {HTMLVideoElement} video
 */
function IVPAIDAdUnit(creative, el, video) {}


/**
 * handshakeVersion
 *
 * @param {string} VPAIDVersion
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.handshakeVersion = function (VPAIDVersion, callback) {};

/**
 * initAd
 *
 * @param {number} width
 * @param {number} height
 * @param {string} viewMode can be 'normal', 'thumbnail' or 'fullscreen'
 * @param {number} desiredBitrate indicates the desired bitrate in kbps
 * @param {object} [creativeData] used for additional initialization data
 * @param {object} [environmentVars] used for passing implementation-specific of js version
 * @param {NodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.initAd = function(width, height, viewMode, desiredBitrate, creativeData, environmentVars, callback) {};

/**
 * startAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.startAd = function(callback) {};

/**
 * stopAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.stopAd = function(callback) {};

/**
 * skipAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.skipAd = function(callback) {};

/**
 * resizeAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.resizeAd = function(width, height, viewMode, callback) {};

/**
 * pauseAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.pauseAd = function(callback) {};

/**
 * resumeAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.resumeAd = function(callback) {};

/**
 * expandAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.expandAd = function(callback) {};

/**
 * collapseAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.collapseAd = function(callback) {};

/**
 * subscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 * @param {object} context
 */
IVPAIDAdUnit.prototype.subscribe = function(event, handler, context) {};

/**
 * startAd
 *
 * @param {string} event
 * @param {function} handler
 */
IVPAIDAdUnit.prototype.unsubscribe = function(event, handler) {};



/**
 * getAdLinear
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdLinear = function(callback) {};

/**
 * getAdWidth
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdWidth = function(callback) {};

/**
 * getAdHeight
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdHeight = function(callback) {};

/**
 * getAdExpanded
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdExpanded = function(callback) {};

/**
 * getAdSkippableState
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdSkippableState = function(callback) {};

/**
 * getAdRemainingTime
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdRemainingTime = function(callback) {};

/**
 * getAdDuration
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdDuration = function(callback) {};

/**
 * getAdVolume
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdVolume = function(callback) {};

/**
 * getAdCompanions
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdCompanions = function(callback) {};

/**
 * getAdIcons
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdIcons = function(callback) {};

/**
 * setAdVolume
 *
 * @param {number} volume
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.setAdVolume = function(volume, callback) {};

addStaticToInterface(IVPAIDAdUnit, 'METHODS', METHODS);
addStaticToInterface(IVPAIDAdUnit, 'GETTERS', GETTERS);
addStaticToInterface(IVPAIDAdUnit, 'SETTERS', SETTERS);
addStaticToInterface(IVPAIDAdUnit, 'EVENTS',  EVENTS);


var VPAID1_METHODS = METHODS.filter(function(method) {
    return ['skipAd'].indexOf(method) === -1;
});

addStaticToInterface(IVPAIDAdUnit, 'checkVPAIDInterface', function checkVPAIDInterface (creative) {
    var result = VPAID1_METHODS.every(function(key) {
        return typeof creative[key] === 'function';
    });
    return result;
});

module.exports = IVPAIDAdUnit;

function addStaticToInterface(Interface, name, value) {
    Object.defineProperty(Interface, name, {
        writable: false,
        configurable: false,
        value: value
    });
}


},{}],10:[function(require,module,exports){
'use strict';

var IVPAIDAdUnit = require('./IVPAIDAdUnit');
var Subscriber = require('./subscriber');
var checkVPAIDInterface = IVPAIDAdUnit.checkVPAIDInterface;
var utils = require('./utils');
var METHODS = IVPAIDAdUnit.METHODS;
var ERROR = 'AdError';
var AD_CLICK = 'AdClickThru';
var FILTERED_EVENTS = IVPAIDAdUnit.EVENTS.filter(function (event) {
    return event != AD_CLICK;
});

/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */


/**
 * VPAIDAdUnit
 * @class
 *
 * @param VPAIDCreative
 * @param {HTMLElement} [el] this will be used in initAd environmentVars.slot if defined
 * @param {HTMLVideoElement} [video] this will be used in initAd environmentVars.videoSlot if defined
 */
function VPAIDAdUnit(VPAIDCreative, el, video, iframe) {
    this._isValid = checkVPAIDInterface(VPAIDCreative);
    if (this._isValid) {
        this._creative = VPAIDCreative;
        this._el = el;
        this._videoEl = video;
        this._iframe = iframe;
        this._subscribers = new Subscriber();
        $addEventsSubscribers.call(this);
    }
}

VPAIDAdUnit.prototype = Object.create(IVPAIDAdUnit.prototype);

/**
 * isValidVPAIDAd will return if the VPAIDCreative passed in constructor is valid or not
 *
 * @return {boolean}
 */
VPAIDAdUnit.prototype.isValidVPAIDAd = function isValidVPAIDAd() {
    return this._isValid;
};

IVPAIDAdUnit.METHODS.forEach(function(method) {
    //NOTE: this methods arguments order are implemented differently from the spec
    var ignores = [
        'subscribe',
        'unsubscribe',
        'initAd'
    ];

    if (ignores.indexOf(method) !== -1) return;

    VPAIDAdUnit.prototype[method] = function () {
        var ariaty = IVPAIDAdUnit.prototype[method].length;
        // TODO avoid leaking arguments
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        var args = Array.prototype.slice.call(arguments);
        var callback = (ariaty === args.length) ? args.pop() : undefined;

        setTimeout(function () {
            var result, error = null;
            try {
                result = this._creative[method].apply(this._creative, args);
            } catch(e) {
                error = e;
            }

            callOrTriggerEvent(callback, this._subscribers, error, result);
        }.bind(this), 0);
    };
});


/**
 * initAd concreate implementation
 *
 * @param {number} width
 * @param {number} height
 * @param {string} viewMode can be 'normal', 'thumbnail' or 'fullscreen'
 * @param {number} desiredBitrate indicates the desired bitrate in kbps
 * @param {object} [creativeData] used for additional initialization data
 * @param {object} [environmentVars] used for passing implementation-specific of js version, if el & video was used in constructor slot & videoSlot will be added to the object
 * @param {NodeStyleCallback} callback
 */
VPAIDAdUnit.prototype.initAd = function initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars, callback) {
    creativeData = creativeData || {};
    environmentVars = utils.extend({
        slot: this._el,
        videoSlot: this._videoEl
    }, environmentVars || {});

    setTimeout(function () {
        var error;
        try {
            this._creative.initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars);
        } catch (e) {
            error = e;
        }

        callOrTriggerEvent(callback, this._subscribers, error);
    }.bind(this), 0);
};

/**
 * subscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 * @param {object} context
 */
VPAIDAdUnit.prototype.subscribe = function subscribe(event, handler, context) {
    this._subscribers.subscribe(handler, event, context);
};


/**
 * unsubscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 */
VPAIDAdUnit.prototype.unsubscribe = function unsubscribe(event, handler) {
    this._subscribers.unsubscribe(handler, event);
};

//alias
VPAIDAdUnit.prototype.on = VPAIDAdUnit.prototype.subscribe;
VPAIDAdUnit.prototype.off = VPAIDAdUnit.prototype.unsubscribe;

IVPAIDAdUnit.GETTERS.forEach(function(getter) {
    VPAIDAdUnit.prototype[getter] = function (callback) {
        setTimeout(function () {

            var result, error = null;
            try {
                result = this._creative[getter]();
            } catch(e) {
                error = e;
            }

            callOrTriggerEvent(callback, this._subscribers, error, result);
        }.bind(this), 0);
    };
});

/**
 * setAdVolume
 *
 * @param volume
 * @param {nodeStyleCallback} callback
 */
VPAIDAdUnit.prototype.setAdVolume = function setAdVolume(volume, callback) {
    setTimeout(function () {

        var result, error = null;
        try {
            this._creative.setAdVolume(volume);
            result = this._creative.getAdVolume();
        } catch(e) {
            error = e;
        }

        if (!error) {
            error = utils.validate(result === volume, 'failed to apply volume: ' + volume);
        }
        callOrTriggerEvent(callback, this._subscribers, error, result);
    }.bind(this), 0);
};

VPAIDAdUnit.prototype._destroy = function destroy() {
    this.stopAd();
    this._subscribers.unsubscribeAll();
};

function $addEventsSubscribers() {
    // some ads implement
    // so they only handle one subscriber
    // to handle this we create our one
    FILTERED_EVENTS.forEach(function (event) {
        this._creative.subscribe($trigger.bind(this, event), event);
    }.bind(this));

    // map the click event to be an object instead of depending of the order of the arguments
    // and to be consistent with the flash
    this._creative.subscribe($clickThruHook.bind(this), AD_CLICK);

    // because we are adding the element inside the iframe
    // the user is not able to click in the video
    if (this._videoEl) {
        var documentElement = this._iframe.contentDocument.documentElement;
        var videoEl = this._videoEl;
        documentElement.addEventListener('click', function(e) {
            if (e.target === documentElement) {
                videoEl.click();
            }
        });
    }
}

function $clickThruHook(url, id, playerHandles) {
    this._subscribers.triggerSync(AD_CLICK, {url: url, id: id, playerHandles: playerHandles});
}

function $trigger(event) {
    // TODO avoid leaking arguments
    // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
    this._subscribers.trigger(event, Array.prototype.slice(arguments, 1));
}

function callOrTriggerEvent(callback, subscribers, error, result) {
    if (callback) {
        callback(error, result);
    } else if (error) {
        subscribers.trigger(ERROR, error);
    }
}

module.exports = VPAIDAdUnit;


},{"./IVPAIDAdUnit":9,"./subscriber":12,"./utils":13}],11:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var unique = utils.unique('vpaidIframe');
var VPAIDAdUnit = require('./VPAIDAdUnit');

var defaultTemplate = '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head><meta charset="UTF-8"></head>' +
    '<body style="margin:0;padding:0"><div class="ad-element"></div>' +
    '<script type="text/javascript" src="{{iframeURL_JS}}"></script>' +
    '<script type="text/javascript">' +
    'window.parent.postMessage(\'{"event": "ready", "id": "{{iframeID}}"}\', \'{{origin}}\');' +
    '</script>' +
    '</body>' +
    '</html>';

var AD_STOPPED = 'AdStopped';

/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */

/**
 * VPAIDHTML5Client
 * @class
 *
 * @param {HTMLElement} el that will contain the iframe to load adUnit and a el to add to adUnit slot
 * @param {HTMLVideoElement} video default video element to be used by adUnit
 * @param {object} [templateConfig] template: html template to be used instead of the default, extraOptions: to be used when rendering the template
 * @param {object} [vpaidOptions] timeout: when loading adUnit
 */
function VPAIDHTML5Client(el, video, templateConfig, vpaidOptions) {
    templateConfig = templateConfig || {};

    this._id = unique();
    this._destroyed = false;

    this._frameContainer = utils.createElementInEl(el, 'div');
    this._videoEl = video;
    this._vpaidOptions = vpaidOptions || {timeout: 10000};

    this._templateConfig = {
        template: templateConfig.template || defaultTemplate,
        extraOptions: templateConfig.extraOptions || {}
    };
}

/**
 * destroy
 *
 */
VPAIDHTML5Client.prototype.destroy = function destroy() {
    if (this._destroyed) {
        return;
    }
    this._destroyed = true;
    $unloadPreviousAdUnit.call(this);
};

/**
 * isDestroyed
 *
 * @return {boolean}
 */
VPAIDHTML5Client.prototype.isDestroyed = function isDestroyed() {
    return this._destroyed;
};

/**
 * loadAdUnit
 *
 * @param {string} adURL url of the js of the adUnit
 * @param {nodeStyleCallback} callback
 */
VPAIDHTML5Client.prototype.loadAdUnit = function loadAdUnit(adURL, callback) {
    $throwIfDestroyed.call(this);
    $unloadPreviousAdUnit.call(this);
    var that = this;

    var frame = utils.createIframeWithContent(
        this._frameContainer,
        this._templateConfig.template,
        utils.extend({
            iframeURL_JS: adURL,
            iframeID: this.getID(),
            origin: getOrigin()
        }, this._templateConfig.extraOptions)
    );

    this._frame = frame;

    this._onLoad = utils.callbackTimeout(
        this._vpaidOptions.timeout,
        onLoad.bind(this),
        onTimeout.bind(this)
    );

    window.addEventListener('message', this._onLoad);

    function onLoad (e) {
        /*jshint validthis: false */
        //don't clear timeout
        if (e.origin !== getOrigin()) return;
        var result = JSON.parse(e.data);

        //don't clear timeout
        if (result.id !== that.getID()) return;

        var adUnit, error, createAd;
        if (!that._frame.contentWindow) {

            error = 'the iframe is not anymore in the DOM tree';

        } else {
            createAd = that._frame.contentWindow.getVPAIDAd;
            error = utils.validate(typeof createAd === 'function', 'the ad didn\'t return a function to create an ad');
        }

        if (!error) {
            var adEl = that._frame.contentWindow.document.querySelector('.ad-element');
            adUnit = new VPAIDAdUnit(createAd(), adEl, that._videoEl, that._frame);
            adUnit.subscribe(AD_STOPPED, $adDestroyed.bind(that));
            error = utils.validate(adUnit.isValidVPAIDAd(), 'the add is not fully complaint with VPAID specification');
        }

        that._adUnit = adUnit;
        $destroyLoadListener.call(that);
        callback(error, error ? null : adUnit);

        //clear timeout
        return true;
    }

    function onTimeout() {
        callback('timeout', null);
    }
};

/**
 * unloadAdUnit
 *
 */
VPAIDHTML5Client.prototype.unloadAdUnit = function unloadAdUnit() {
    $unloadPreviousAdUnit.call(this);
};

/**
 * getID will return the unique id
 *
 * @return {string}
 */
VPAIDHTML5Client.prototype.getID = function () {
    return this._id;
};


/**
 * $removeEl
 *
 * @param {string} key
 */
function $removeEl(key) {
    var el = this[key];
    if (el) {
        el.remove();
        delete this[key];
    }
}

function $adDestroyed() {
    $removeAdElements.call(this);
    delete this._adUnit;
}

function $unloadPreviousAdUnit() {
    $removeAdElements.call(this);
    $destroyAdUnit.call(this);
}

function $removeAdElements() {
    $removeEl.call(this, '_frame');
    $destroyLoadListener.call(this);
}

/**
 * $destroyLoadListener
 *
 */
function $destroyLoadListener() {
    if (this._onLoad) {
        window.removeEventListener('message', this._onLoad);
        utils.clearCallbackTimeout(this._onLoad);
        delete this._onLoad;
    }
}


function $destroyAdUnit() {
    if (this._adUnit) {
        this._adUnit.stopAd();
        delete this._adUnit;
    }
}

/**
 * $throwIfDestroyed
 *
 */
function $throwIfDestroyed() {
    if (this._destroyed) {
        throw new Error ('VPAIDHTML5Client already destroyed!');
    }
}

function getOrigin() {
    if( window.location.origin ) {
        return window.location.origin;
    }
    else {
        return window.location.protocol + "//" +
            window.location.hostname +
            (window.location.port ? ':' + window.location.port: '');
    }
}

module.exports = VPAIDHTML5Client;
window.VPAIDHTML5Client = VPAIDHTML5Client;


},{"./VPAIDAdUnit":10,"./utils":13}],12:[function(require,module,exports){
'use strict';

function Subscriber() {
    this._subscribers = {};
}

Subscriber.prototype.subscribe = function subscribe(handler, eventName, context) {
    if (!this.isHandlerAttached(handler, eventName)) {
        this.get(eventName).push({handler: handler, context: context, eventName: eventName});
    }
};

Subscriber.prototype.unsubscribe = function unsubscribe(handler, eventName) {
    this._subscribers[eventName] = this.get(eventName).filter(function (subscriber) {
        return handler !== subscriber.handler;
    });
};

Subscriber.prototype.unsubscribeAll = function unsubscribeAll() {
    this._subscribers = {};
};

Subscriber.prototype.trigger = function(eventName, data) {
    var that = this;
    var subscribers = this.get(eventName)
        .concat(this.get('*'));

    subscribers.forEach(function (subscriber) {
        setTimeout(function () {
            if (that.isHandlerAttached(subscriber.handler, subscriber.eventName)) {
                subscriber.handler.call(subscriber.context, data);
            }
        }, 0);
    });
};

Subscriber.prototype.triggerSync = function(eventName, data) {
    var subscribers = this.get(eventName)
        .concat(this.get('*'));

    subscribers.forEach(function (subscriber) {
        subscriber.handler.call(subscriber.context, data);
    });
};

Subscriber.prototype.get = function get(eventName) {
    if (!this._subscribers[eventName]) {
        this._subscribers[eventName] = [];
    }
    return this._subscribers[eventName];
};

Subscriber.prototype.isHandlerAttached = function isHandlerAttached(handler, eventName) {
    return this.get(eventName).some(function(subscriber) {
        return handler === subscriber.handler;
    })
};

module.exports = Subscriber;


},{}],13:[function(require,module,exports){
'use strict';

/**
 * noop a empty function
 */
function noop() {}

/**
 * validate if is not validate will return an Error with the message
 *
 * @param {boolean} isValid
 * @param {string} message
 */
function validate(isValid, message) {
    return isValid ? null : new Error(message);
}

var timeouts = {};
/**
 * clearCallbackTimeout
 *
 * @param {function} func handler to remove
 */
function clearCallbackTimeout(func) {
    var timeout = timeouts[func];
    if (timeout) {
        clearTimeout(timeout);
        delete timeouts[func];
    }
}

/**
 * callbackTimeout if the onSuccess is not called and returns true in the timelimit then onTimeout will be called
 *
 * @param {number} timer
 * @param {function} onSuccess
 * @param {function} onTimeout
 */
function callbackTimeout(timer, onSuccess, onTimeout) {
    var callback, timeout;

    timeout = setTimeout(function () {
        onSuccess = noop;
        delete timeout[callback];
        onTimeout();
    }, timer);

    callback = function () {
        // TODO avoid leaking arguments
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        if (onSuccess.apply(this, arguments)) {
            clearCallbackTimeout(callback);
        }
    };

    timeouts[callback] = timeout;

    return callback;
}


/**
 * createElementInEl
 *
 * @param {HTMLElement} parent
 * @param {string} tagName
 * @param {string} id
 */
function createElementInEl(parent, tagName, id) {
    var nEl = document.createElement(tagName);
    if (id) nEl.id = id;
    parent.appendChild(nEl);
    return nEl;
}

/**
 * createIframeWithContent
 *
 * @param {HTMLElement} parent
 * @param {string} template simple template using {{var}}
 * @param {object} data
 */
function createIframeWithContent(parent, template, data) {
    var iframe = createIframe(parent, null, data.zIndex);
    if (!setIframeContent(iframe, simpleTemplate(template, data))) return;
    return iframe;
}

/**
 * createIframe
 *
 * @param {HTMLElement} parent
 * @param {string} url
 */
function createIframe(parent, url, zIndex) {
    var nEl = document.createElement('iframe');
    nEl.src = url || 'about:blank';
    nEl.marginWidth = '0';
    nEl.marginHeight = '0';
    nEl.frameBorder = '0';
    nEl.width = '100%';
    nEl.height = '100%';
    nEl.style.position = 'absolute';
    nEl.style.left = '0';
    nEl.style.top = '0';
    nEl.style.margin = '0px';
    nEl.style.padding = '0px';
    nEl.style.border = 'none';

    if(zIndex){
        nEl.style.zIndex = zIndex;
    }

    nEl.setAttribute('SCROLLING','NO');
    parent.innerHTML = '';
    parent.appendChild(nEl);
    return nEl;
}

/**
 * simpleTemplate
 *
 * @param {string} template
 * @param {object} data
 */
function simpleTemplate(template, data) {
    Object.keys(data).forEach(function (key) {
        var value = (typeof value === 'object') ? JSON.stringify(data[key]) : data[key];
        template = template.replace(new RegExp('{{' + key + '}}', 'g'), value);
    });
    return template;
}

/**
 * setIframeContent
 *
 * @param {HTMLIframeElement} iframeEl
 * @param content
 */
function setIframeContent(iframeEl, content) {
    var iframeDoc = iframeEl.contentWindow && iframeEl.contentWindow.document;
    if (!iframeDoc) return false;

    iframeDoc.write(content);

    return true;
}


/**
 * extend object with keys from another object
 *
 * @param {object} toExtend
 * @param {object} fromSource
 */
function extend(toExtend, fromSource) {
    Object.keys(fromSource).forEach(function(key) {
        toExtend[key] = fromSource[key];
    });
    return toExtend;
}


/**
 * unique will create a unique string everytime is called, sequentially and prefixed
 *
 * @param {string} prefix
 */
function unique(prefix) {
    var count = -1;
    return function () {
        return prefix + '_' + (++count);
    };
}

module.exports = {
    noop: noop,
    validate: validate,
    clearCallbackTimeout: clearCallbackTimeout,
    callbackTimeout: callbackTimeout,
    createElementInEl: createElementInEl,
    createIframeWithContent: createIframeWithContent,
    createIframe: createIframe,
    simpleTemplate: simpleTemplate,
    setIframeContent: setIframeContent,
    extend: extend,
    unique: unique
};


},{}],14:[function(require,module,exports){
'use strict';

var InLine = require('./InLine');
var Wrapper = require('./Wrapper');

function Ad(adJTree) {
  if (!(this instanceof Ad)) {
    return new Ad(adJTree);
  }
  this.initialize(adJTree);
}

Ad.prototype.initialize = function(adJTree) {
  this.id = adJTree.attr('id');
  this.sequence = adJTree.attr('sequence');

  if(adJTree.inLine) {
    this.inLine = new InLine(adJTree.inLine);
  }

  if(adJTree.wrapper){
    this.wrapper = new Wrapper(adJTree.wrapper);
  }
};

module.exports = Ad;
},{"./InLine":17,"./Wrapper":27}],15:[function(require,module,exports){
'use strict';

var TrackingEvent = require('./TrackingEvent');

var utilities = require('../../utils/utilityFunctions');

var xml = require('../../utils/xml');


function Companion(companionJTree) {
  if (!(this instanceof Companion)) {
    return new Companion(companionJTree);
  }

  //Required Elements
  this.creativeType = xml.attr(companionJTree.staticResource, 'creativeType');
  this.staticResource = xml.keyValue(companionJTree.staticResource);

  // Weird bug when the JXON tree is built it doesn't handle casing properly in this situation...
  var htmlResource = null;
  if (xml.keyValue(companionJTree.HTMLResource)) {
    htmlResource = xml.keyValue(companionJTree.HTMLResource);
  } else if (xml.keyValue(companionJTree.hTMLResource)) {
    htmlResource = xml.keyValue(companionJTree.hTMLResource);
  }
  this.htmlResource = htmlResource;

  var iframeResource = null;
  if (xml.keyValue(companionJTree.IFrameResource)) {
    iframeResource = xml.keyValue(companionJTree.IFrameResource);
  } else if (xml.keyValue(companionJTree.iFrameresource)) {
    iframeResource = xml.keyValue(companionJTree.iFrameresource);
  }
  this.iframeResource = iframeResource;

  //Optional fields
  this.id = xml.attr(companionJTree, 'id');
  this.width = xml.attr(companionJTree, 'width');
  this.height = xml.attr(companionJTree, 'height');
  this.expandedWidth = xml.attr(companionJTree, 'expandedWidth');
  this.expandedHeight = xml.attr(companionJTree, 'expandedHeight');
  this.scalable = xml.attr(companionJTree, 'scalable');
  this.maintainAspectRatio = xml.attr(companionJTree, 'maintainAspectRatio');
  this.minSuggestedDuration = xml.attr(companionJTree, 'minSuggestedDuration');
  this.apiFramework = xml.attr(companionJTree, 'apiFramework');
  this.companionClickThrough = xml.keyValue(companionJTree.companionClickThrough);
  this.trackingEvents = parseTrackingEvents(companionJTree.trackingEvents && companionJTree.trackingEvents.tracking);

  /*** Local functions ***/
  function parseTrackingEvents(trackingEvents) {
    var trackings = [];
    if (utilities.isDefined(trackingEvents)) {
      trackingEvents = utilities.isArray(trackingEvents) ? trackingEvents : [trackingEvents];
      trackingEvents.forEach(function (trackingData) {
        trackings.push(new TrackingEvent(trackingData));
      });
    }
    return trackings;
  }
}

module.exports = Companion;
},{"../../utils/utilityFunctions":44,"../../utils/xml":45,"./TrackingEvent":20}],16:[function(require,module,exports){
'use strict';

var Linear = require('./Linear');
var Companion = require('./Companion');
var utilities = require('../../utils/utilityFunctions');

function Creative(creativeJTree) {
  if(!(this instanceof Creative)) {
    return new Creative(creativeJTree);
  }

  this.id = creativeJTree.attr('id');
  this.sequence = creativeJTree.attr('sequence');
  this.adId = creativeJTree.attr('adId');
  this.apiFramework = creativeJTree.attr('apiFramework');

  if(creativeJTree.linear) {
    this.linear = new Linear(creativeJTree.linear);
  }

  if (creativeJTree.companionAds) {
    var companions = [];
    var companionAds = creativeJTree.companionAds && creativeJTree.companionAds.companion;
    if (utilities.isDefined(companionAds)) {
      companionAds = utilities.isArray(companionAds) ? companionAds : [companionAds];
      companionAds.forEach(function (companionData) {
        companions.push(new Companion(companionData));
      });
    }
    this.companionAds = companions;
  }
}

/**
 * Returns true if the browser supports at the creative.
 */
Creative.prototype.isSupported = function(){
  if(this.linear) {
    return this.linear.isSupported();
  }

  return true;
};

Creative.parseCreatives = function parseCreatives(creativesJTree) {
  var creatives = [];
  var creativesData;
  if (utilities.isDefined(creativesJTree) && utilities.isDefined(creativesJTree.creative)) {
    creativesData = utilities.isArray(creativesJTree.creative) ? creativesJTree.creative : [creativesJTree.creative];
    creativesData.forEach(function (creative) {
      creatives.push(new Creative(creative));
    });
  }
  return creatives;
};

module.exports = Creative;

},{"../../utils/utilityFunctions":44,"./Companion":15,"./Linear":18}],17:[function(require,module,exports){
'use strict';

var vastUtil = require('./vastUtil');
var Creative = require('./Creative');

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function InLine(inlineJTree) {
  if (!(this instanceof InLine)) {
    return new InLine(inlineJTree);
  }

  //Required Fields
  this.adTitle = xml.keyValue(inlineJTree.adTitle);
  this.adSystem = xml.keyValue(inlineJTree.adSystem);
  this.impressions = vastUtil.parseImpressions(inlineJTree.impression);
  this.creatives = Creative.parseCreatives(inlineJTree.creatives);

  //Optional Fields
  this.description = xml.keyValue(inlineJTree.description);
  this.advertiser = xml.keyValue(inlineJTree.advertiser);
  this.surveys = parseSurveys(inlineJTree.survey);
  this.error = xml.keyValue(inlineJTree.error);
  this.pricing = xml.keyValue(inlineJTree.pricing);
  this.extensions = inlineJTree.extensions;

  /*** Local Functions ***/
  function parseSurveys(inlineSurveys) {
    if (inlineSurveys) {
      return utilities.transformArray(utilities.isArray(inlineSurveys) ? inlineSurveys : [inlineSurveys], function (survey) {
        if(utilities.isNotEmptyString(survey.keyValue)){
          return {
            uri: survey.keyValue,
            type: survey.attr('type')
          };
        }

        return undefined;
      });
    }
    return [];
  }
}


/**
 * Returns true if the browser supports all the creatives.
 */
InLine.prototype.isSupported = function(){
  var i,len;

  if(this.creatives.length === 0) {
    return false;
  }

  for(i = 0, len = this.creatives.length; i< len; i+=1){
    if(!this.creatives[i].isSupported()){
      return false;
    }
  }
  return true;
};

module.exports = InLine;

},{"../../utils/utilityFunctions":44,"../../utils/xml":45,"./Creative":16,"./vastUtil":29}],18:[function(require,module,exports){
'use strict';

var TrackingEvent = require('./TrackingEvent');
var MediaFile = require('./MediaFile');
var VideoClicks = require('./VideoClicks');

var utilities = require('../../utils/utilityFunctions');
var parsers = require('./parsers');

var xml = require('../../utils/xml');


function Linear(linearJTree) {
  if (!(this instanceof Linear)) {
    return new Linear(linearJTree);
  }

  //Required Elements
  this.duration = parsers.duration(xml.keyValue(linearJTree.duration));
  this.mediaFiles = parseMediaFiles(linearJTree.mediaFiles && linearJTree.mediaFiles.mediaFile);

  //Optional fields
  this.trackingEvents = parseTrackingEvents(linearJTree.trackingEvents && linearJTree.trackingEvents.tracking, this.duration);
  this.skipoffset = parsers.offset(xml.attr(linearJTree, 'skipoffset'), this.duration);

  if (linearJTree.videoClicks) {
    this.videoClicks = new VideoClicks(linearJTree.videoClicks);
  }

  if(linearJTree.adParameters) {
    this.adParameters = xml.keyValue(linearJTree.adParameters);

    if(xml.attr(linearJTree.adParameters, 'xmlEncoded')){
      this.adParameters = xml.decode(this.adParameters);
    }
  }

  /*** Local functions ***/
  function parseTrackingEvents(trackingEvents, duration) {
    var trackings = [];
    if (utilities.isDefined(trackingEvents)) {
      trackingEvents = utilities.isArray(trackingEvents) ? trackingEvents : [trackingEvents];
      trackingEvents.forEach(function (trackingData) {
        trackings.push(new TrackingEvent(trackingData, duration));
      });
    }
    return trackings;
  }

  function parseMediaFiles(mediaFilesJxonTree) {
    var mediaFiles = [];
    if (utilities.isDefined(mediaFilesJxonTree)) {
      mediaFilesJxonTree = utilities.isArray(mediaFilesJxonTree) ? mediaFilesJxonTree : [mediaFilesJxonTree];

      mediaFilesJxonTree.forEach(function (mfData) {
        mediaFiles.push(new MediaFile(mfData));
      });
    }
    return mediaFiles;
  }
}

/**
 * Must return true if at least one of the MediaFiles' type is supported
 */
Linear.prototype.isSupported = function () {
  var i, len;
  for(i=0, len=this.mediaFiles.length; i<len; i+=1) {
    if(this.mediaFiles[i].isSupported()) {
      return true;
    }
  }

  return false;
};

module.exports = Linear;
},{"../../utils/utilityFunctions":44,"../../utils/xml":45,"./MediaFile":19,"./TrackingEvent":20,"./VideoClicks":26,"./parsers":28}],19:[function(require,module,exports){
'use strict';

var xml = require('../../utils/xml');
var vastUtil = require('./vastUtil');

var attributesList = [
  //Required attributes
  'delivery',
  'type',
  'width',
  'height',
  //Optional attributes
  'codec',
  'id',
  'bitrate',
  'minBitrate',
  'maxBitrate',
  'scalable',
  'maintainAspectRatio',
  'apiFramework'
];

function MediaFile(mediaFileJTree) {
  if (!(this instanceof MediaFile)) {
    return new MediaFile(mediaFileJTree);
  }

  //Required attributes
  this.src = xml.keyValue(mediaFileJTree);

  for(var x=0; x<attributesList.length; x++) {
    var attribute = attributesList[x];
    this[attribute] = mediaFileJTree.attr(attribute);
  }
}

MediaFile.prototype.isSupported = function(){
  if(vastUtil.isVPAID(this)) {
    return !!vastUtil.findSupportedVPAIDTech(this.type);
  }

  if (this.type === 'video/x-flv') {
    return vastUtil.isFlashSupported();
  }

  return true;
};

module.exports = MediaFile;

},{"../../utils/xml":45,"./vastUtil":29}],20:[function(require,module,exports){
'use strict';

var parsers = require('./parsers');

var xml = require('../../utils/xml');

function TrackingEvent(trackingJTree, duration) {
  if (!(this instanceof TrackingEvent)) {
    return new TrackingEvent(trackingJTree, duration);
  }

  this.name = trackingJTree.attr('event');
  this.uri = xml.keyValue(trackingJTree);

  if('progress' === this.name) {
    this.offset = parsers.offset(trackingJTree.attr('offset'), duration);
  }
}

module.exports = TrackingEvent;
},{"../../utils/xml":45,"./parsers":28}],21:[function(require,module,exports){
'use strict';

var Ad = require('./Ad');
var VASTError = require('./VASTError');
var VASTResponse = require('./VASTResponse');
var vastUtil = require('./vastUtil');

var async = require('../../utils/async');
var http = require('../../utils/http').http;
var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function VASTClient(options) {
  if (!(this instanceof VASTClient)) {
    return new VASTClient(options);
  }
  var defaultOptions = {
    WRAPPER_LIMIT: 5
  };

  options = options || {};
  this.settings = utilities.extend({}, options, defaultOptions);
  this.errorURLMacros = [];
}

VASTClient.prototype.getVASTResponse = function getVASTResponse(adTagUrl, callback) {
  var that = this;

  var error = sanityCheck(adTagUrl, callback);
  if (error) {
    if (utilities.isFunction(callback)) {
      return callback(error);
    }
    throw error;
  }

  async.waterfall([
      this._getVASTAd.bind(this, adTagUrl),
      buildVASTResponse
    ],
    callback);

  /*** Local functions ***/
  function buildVASTResponse(adsChain, cb) {
    try {
      var response = that._buildVASTResponse(adsChain);
      cb(null, response);
    } catch (e) {
      cb(e);
    }
  }

  function sanityCheck(adTagUrl, cb) {
    if (!adTagUrl) {
      return new VASTError('on VASTClient.getVASTResponse, missing ad tag URL');
    }

    if (!utilities.isFunction(cb)) {
      return new VASTError('on VASTClient.getVASTResponse, missing callback function');
    }
  }
};

VASTClient.prototype._getVASTAd = function (adTagUrl, callback) {
  var that = this;

  getAdWaterfall(adTagUrl, function (error, vastTree) {
    var waterfallAds = vastTree && utilities.isArray(vastTree.ads) ? vastTree.ads : null;
    if (error) {
      that._trackError(error, waterfallAds);
      return callback(error, waterfallAds);
    }

    getAd(waterfallAds.shift(), [], waterfallHandler);

    /*** Local functions ***/
    function waterfallHandler(error, adChain) {
      if (error) {
        that._trackError(error, adChain);
        if (waterfallAds.length > 0) {
          getAd(waterfallAds.shift(),[], waterfallHandler);
        } else {
          callback(error, adChain);
        }
      } else {
        callback(null, adChain);
      }
    }
  });

  /*** Local functions ***/
  function getAdWaterfall(adTagUrl, callback) {
    var requestVastXML = that._requestVASTXml.bind(that, adTagUrl);
    async.waterfall([
      requestVastXML,
      buildVastWaterfall
    ], callback);
  }

  function buildVastWaterfall(xmlStr, callback) {
    var vastTree;
    try {
      vastTree = xml.toJXONTree(xmlStr);

      if(utilities.isArray(vastTree.ad)) {
        vastTree.ads = vastTree.ad;
      } else if(vastTree.ad){
        vastTree.ads = [vastTree.ad];
      } else {
        vastTree.ads = [];
      }
      callback(validateVASTTree(vastTree), vastTree);

    } catch (e) {
      callback(new VASTError("on VASTClient.getVASTAd.buildVastWaterfall, error parsing xml", 100), null);
    }
  }

  function validateVASTTree(vastTree) {
    var vastVersion = xml.attr(vastTree, 'version');

    if (!vastTree.ad) {
      return new VASTError('on VASTClient.getVASTAd.validateVASTTree, no Ad in VAST tree', 303);
    }

    if (vastVersion && (vastVersion != 3 && vastVersion != 2)) {
      return new VASTError('on VASTClient.getVASTAd.validateVASTTree, not supported VAST version "' + vastVersion + '"', 102);
    }

    return null;
  }

  function getAd(adTagUrl, adChain, callback) {
    if (adChain.length >= that.WRAPPER_LIMIT) {
      return callback(new VASTError("on VASTClient.getVASTAd.getAd, players wrapper limit reached (the limit is " + that.WRAPPER_LIMIT + ")", 302), adChain);
    }

    async.waterfall([
      function (next) {
        if (utilities.isString(adTagUrl)) {
          requestVASTAd(adTagUrl, next);
        } else {
          next(null, adTagUrl);
        }
      },
      buildAd
    ], function (error, ad) {
      if (ad) {
        adChain.push(ad);
      }

      if (error) {
        return callback(error, adChain);
      }

      if (ad.wrapper) {
        return getAd(ad.wrapper.VASTAdTagURI, adChain, callback);
      }

      return callback(null, adChain);
    });
  }

  function buildAd(adJxonTree, callback) {
    try {
      var ad = new Ad(adJxonTree);
      callback(validateAd(ad), ad);
    } catch (e) {
      callback(new VASTError('on VASTClient.getVASTAd.buildAd, error parsing xml', 100), null);
    }
  }

  function validateAd(ad) {
    var wrapper = ad.wrapper;
    var inLine = ad.inLine;
    var errMsgPrefix = 'on VASTClient.getVASTAd.validateAd, ';

    if (inLine && wrapper) {
      return new VASTError(errMsgPrefix +"InLine and Wrapper both found on the same Ad", 101);
    }

    if (!inLine && !wrapper) {
      return new VASTError(errMsgPrefix + "nor wrapper nor inline elements found on the Ad", 101);
    }

    if (inLine && !inLine.isSupported()) {
      return new VASTError(errMsgPrefix + "could not find MediaFile that is supported by this video player", 403);
    }

    if (wrapper && !wrapper.VASTAdTagURI) {
      return new VASTError(errMsgPrefix + "missing 'VASTAdTagURI' in wrapper", 101);
    }

    return null;
  }

  function requestVASTAd(adTagUrl, callback) {
    that._requestVASTXml(adTagUrl, function (error, xmlStr) {
      if (error) {
        return callback(error);
      }
      try {
        var vastTree = xml.toJXONTree(xmlStr);
        callback(validateVASTTree(vastTree), vastTree.ad);
      } catch (e) {
        callback(new VASTError("on VASTClient.getVASTAd.requestVASTAd, error parsing xml", 100));
      }
    });
  }
};

VASTClient.prototype._requestVASTXml = function requestVASTXml(adTagUrl, callback) {
  try {
    if (utilities.isFunction(adTagUrl)) {
      adTagUrl(requestHandler);
    } else {
      http.get(adTagUrl, requestHandler, {
        withCredentials: true
      });
    }
  } catch (e) {
    callback(e);
  }

  /*** Local functions ***/
  function requestHandler(error, response, status) {
    if (error) {
      var errMsg = utilities.isDefined(status) ?
      "on VASTClient.requestVastXML, HTTP request error with status '" + status + "'" :
        "on VASTClient.requestVastXML, Error getting the the VAST XML with he passed adTagXML fn";
      return callback(new VASTError(errMsg, 301), null);
    }

    callback(null, response);
  }
};

VASTClient.prototype._buildVASTResponse = function buildVASTResponse(adsChain) {
  var response = new VASTResponse();
  addAdsToResponse(response, adsChain);
  validateResponse(response);

  return response;

  //*** Local function ****
  function addAdsToResponse(response, ads) {
    ads.forEach(function (ad) {
      response.addAd(ad);
    });
  }

  function validateResponse(response) {
    var progressEvents = response.trackingEvents.progress;

    if (!response.hasLinear()) {
      throw new VASTError("on VASTClient._buildVASTResponse, Received an Ad type that is not supported", 200);
    }

    if (response.duration === undefined) {
      throw new VASTError("on VASTClient._buildVASTResponse, Missing duration field in VAST response", 101);
    }

    if (progressEvents) {
      progressEvents.forEach(function (progressEvent) {
        if (!utilities.isNumber(progressEvent.offset)) {
          throw new VASTError("on VASTClient._buildVASTResponse, missing or wrong offset attribute on progress tracking event", 101);
        }
      });
    }
  }
};

VASTClient.prototype._trackError = function (error, adChain) {
  if (!utilities.isArray(adChain) || adChain.length === 0) { //There is nothing to track
    return;
  }

  var errorURLMacros = [];
  adChain.forEach(addErrorUrlMacros);
  vastUtil.track(errorURLMacros, {ERRORCODE: error.code || 900});  //900 <== Undefined error

  /*** Local functions  ***/
  function addErrorUrlMacros(ad) {
    if (ad.wrapper && ad.wrapper.error) {
      errorURLMacros.push(ad.wrapper.error);
    }

    if (ad.inLine && ad.inLine.error) {
      errorURLMacros.push(ad.inLine.error);
    }
  }
};

module.exports = VASTClient;

},{"../../utils/async":39,"../../utils/http":41,"../../utils/utilityFunctions":44,"../../utils/xml":45,"./Ad":14,"./VASTError":22,"./VASTResponse":24,"./vastUtil":29}],22:[function(require,module,exports){
'use strict';

function VASTError(message, code) {
  this.message = 'VAST Error: ' + (message || '');
  if (code) {
    this.code = code;
  }
}

VASTError.prototype = new Error();
VASTError.prototype.name = "VAST Error";

module.exports = VASTError;
},{}],23:[function(require,module,exports){
'use strict';

/**
 * Inner helper class that deals with the logic of the individual steps needed to setup an ad in the player.
 *
 * @param player {object} instance of the player that will play the ad. It assumes that the videojs-contrib-ads plugin
 *                        has been initialized when you use its utility functions.
 *
 * @constructor
 */

var VASTResponse = require('./VASTResponse');
var VASTError = require('./VASTError');
var VASTTracker = require('./VASTTracker');
var vastUtil = require('./vastUtil');

var async = require('../../utils/async');
var dom = require('../../utils/dom');
var playerUtils = require('../../utils/playerUtils');
var utilities = require('../../utils/utilityFunctions');

function VASTIntegrator(player) {
  if (!(this instanceof VASTIntegrator)) {
    return new VASTIntegrator(player);
  }

  this.player = player;
}

VASTIntegrator.prototype.playAd = function playAd(vastResponse, callback) {
  var that = this;
  callback = callback || utilities.noop;

  if (!(vastResponse instanceof VASTResponse)) {
    return callback(new VASTError('On VASTIntegrator, missing required VASTResponse'));
  }

  async.waterfall([
    function (next) {
      next(null, vastResponse);
    },
    this._selectAdSource.bind(this),
    this._createVASTTracker.bind(this),
    this._addClickThrough.bind(this),
    this._addSkipButton.bind(this),
    this._setupEvents.bind(this),
    this._playSelectedAd.bind(this)
  ], function (error, response) {
    if (error && response) {
      that._trackError(error, response);
    }
    callback(error, response);
  });

  this._adUnit = {
    _src: null,
    type: 'VAST',
    pauseAd: function () {
      that.player.pause(true);
    },

    resumeAd: function () {
      that.player.play(true);
    },

    isPaused: function () {
      return that.player.paused(true);
    },

    getSrc: function () {
      return this._src;
    }
  };

  return this._adUnit;
};

VASTIntegrator.prototype._selectAdSource = function selectAdSource(response, callback) {
  var source;

  var playerWidth = dom.getDimension(this.player.el()).width;
  response.mediaFiles.sort(function compareTo(a, b) {
    var deltaA = Math.abs(playerWidth - a.width);
    var deltaB = Math.abs(playerWidth - b.width);
    return deltaA - deltaB;
  });

  source = this.player.selectSource(response.mediaFiles).source;

  if (source) {
    if (this._adUnit) {
      this._adUnit._src = source;
    }
    return callback(null, source, response);
  }

  // code 403 <== Couldn't find MediaFile that is supported by this video player
  callback(new VASTError("Could not find Ad mediafile supported by this player", 403), response);
};

VASTIntegrator.prototype._createVASTTracker = function createVASTTracker(adMediaFile, response, callback) {
  try {
    callback(null, adMediaFile, new VASTTracker(adMediaFile.src, response), response);
  } catch (e) {
    callback(e, response);
  }
};

VASTIntegrator.prototype._setupEvents = function setupEvents(adMediaFile, tracker, response, callback) {
  var previouslyMuted;
  var player = this.player;
  player.on('fullscreenchange', trackFullscreenChange);
  player.on('vast.adStart', trackImpressions);
  player.on('pause', trackPause);
  player.on('timeupdate', trackProgress);
  player.on('volumechange', trackVolumeChange);

  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], unbindEvents);
  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel', 'vast.adSkip'], function(evt){
    if(evt.type === 'vast.adEnd'){
      tracker.trackComplete();
    }
  });

  return callback(null, adMediaFile, response);

  /*** Local Functions ***/
  function unbindEvents() {
    player.off('fullscreenchange', trackFullscreenChange);
    player.off('vast.adStart', trackImpressions);
    player.off('pause', trackPause);
    player.off('timeupdate', trackProgress);
    player.off('volumechange', trackVolumeChange);
  }

  function trackFullscreenChange() {
    if (player.isFullscreen()) {
      tracker.trackFullscreen();
    } else {
      tracker.trackExitFullscreen();
    }
  }

  function trackPause() {
    //NOTE: whenever a video ends the video Element triggers a 'pause' event before the 'ended' event.
    //      We should not track this pause event because it makes the VAST tracking confusing again we use a
    //      Threshold of 2 seconds to prevent false positives on IOS.
    if (Math.abs(player.duration() - player.currentTime()) < 2) {
      return;
    }

    tracker.trackPause();
    playerUtils.once(player, ['play', 'vast.adEnd', 'vast.adsCancel'], function (evt) {
      if(evt.type === 'play'){
        tracker.trackResume();
      }
    });
  }

  function trackProgress() {
    var currentTimeInMs = player.currentTime() * 1000;
    tracker.trackProgress(currentTimeInMs);
  }

  function trackImpressions() {
    tracker.trackImpressions();
    tracker.trackCreativeView();
  }

  function trackVolumeChange() {
    var muted = player.muted();
    if (muted) {
      tracker.trackMute();
    } else if (previouslyMuted) {
      tracker.trackUnmute();
    }
    previouslyMuted = muted;
  }
};

VASTIntegrator.prototype._addSkipButton = function addSkipButton(source, tracker, response, callback) {
  var skipOffsetInSec;
  var that = this;

  if (utilities.isNumber(response.skipoffset)) {
    skipOffsetInSec = response.skipoffset / 1000;
    addSkipButtonToPlayer(this.player, skipOffsetInSec);
  }
  callback(null, source, tracker, response);

  /*** Local function ***/
  function addSkipButtonToPlayer(player, skipOffset) {
    var skipButton = createSkipButton(player);
    var updateSkipButton = updateSkipButtonState.bind(that, skipButton, skipOffset, player);

    player.el().appendChild(skipButton);
    player.on('timeupdate', updateSkipButton);

    playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeSkipButton);

    function removeSkipButton() {
      player.off('timeupdate', updateSkipButton);
      dom.remove(skipButton);
    }
  }

  function createSkipButton(player) {
    var skipButton = window.document.createElement("div");
    dom.addClass(skipButton, "vast-skip-button");

    skipButton.onclick = function (e) {
      if (dom.hasClass(skipButton, 'enabled')) {
        tracker.trackSkip();
        player.trigger('vast.adSkip');
      }

      //We prevent event propagation to avoid problems with the clickThrough and so on
      if (window.Event.prototype.stopPropagation !== undefined) {
        e.stopPropagation();
      } else {
        return false;
      }
    };

    return skipButton;
  }

  function updateSkipButtonState(skipButton, skipOffset, player) {
    var timeLeft = Math.ceil(skipOffset - player.currentTime());
    if (timeLeft > 0) {
      skipButton.innerHTML = "Skip in " + utilities.toFixedDigits(timeLeft, 2) + "...";
    } else {
      if (!dom.hasClass(skipButton, 'enabled')) {
        dom.addClass(skipButton, 'enabled');
        skipButton.innerHTML = "Skip ad";
      }
    }
  }
};

VASTIntegrator.prototype._addClickThrough = function addClickThrough(mediaFile, tracker, response, callback) {
  var player = this.player;
  var blocker = createClickThroughBlocker(player, tracker, response);
  var updateBlocker = updateBlockerURL.bind(this, blocker, response, player);

  player.el().insertBefore(blocker, player.controlBar.el());
  player.on('timeupdate', updateBlocker);
  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeBlocker);

  return callback(null, mediaFile, tracker, response);

  /*** Local Functions ***/

  function createClickThroughBlocker(player, tracker, response) {
    var blocker = window.document.createElement("a");
    var clickThroughMacro = response.clickThrough;

    dom.addClass(blocker, 'vast-blocker');
    blocker.href = generateClickThroughURL(clickThroughMacro, player);

    if (utilities.isString(clickThroughMacro)) {
      blocker.target = "_blank";
    }

    blocker.onclick = function (e) {
      if (player.paused()) {
        player.play();

        //We prevent event propagation to avoid problems with the player's normal pause mechanism
        if (window.Event.prototype.stopPropagation !== undefined) {
          e.stopPropagation();
        }
        return false;
      }

      player.pause();
      tracker.trackClick();
    };

    return blocker;
  }

  function updateBlockerURL(blocker, response, player) {
    blocker.href = generateClickThroughURL(response.clickThrough, player);
  }

  function generateClickThroughURL(clickThroughMacro, player) {
    var variables = {
      ASSETURI: mediaFile.src,
      CONTENTPLAYHEAD: vastUtil.formatProgress(player.currentTime() * 1000)
    };

    return clickThroughMacro ? vastUtil.parseURLMacro(clickThroughMacro, variables) : '#';
  }

  function removeBlocker() {
    player.off('timeupdate', updateBlocker);
    dom.remove(blocker);
  }
};

VASTIntegrator.prototype._playSelectedAd = function playSelectedAd(source, response, callback) {
  var player = this.player;

  player.preload("auto"); //without preload=auto the durationchange event is never fired
  player.src(source);

  playerUtils.once(player, ['durationchange', 'error', 'vast.adsCancel'], function (evt) {
    if (evt.type === 'durationchange') {
      playAd();
    } else if(evt.type === 'error') {
      callback(new VASTError("on VASTIntegrator, Player is unable to play the Ad", 400), response);
    }
    //NOTE: If the ads get canceled we do nothing/
  });

  /**** local functions ******/
  function playAd() {

    playerUtils.once(player, ['playing', 'vast.adsCancel'], function (evt) {
      if(evt.type === 'vast.adsCancel'){
        return;
      }

      player.trigger('vast.adStart');

      player.on('ended', proceed);
      player.on('vast.adsCancel', proceed);
      player.on('vast.adSkip', proceed);

      function proceed(evt) {

        if(evt.type === 'ended' && (player.duration() - player.currentTime()) > 3 ) {
          // Ignore ended event if the Ad time was not 'near' the end
          // avoids issues where IOS controls could skip the Ad
          return;
        }

        player.off('ended', proceed);
        player.off('vast.adsCancel', proceed);
        player.off('vast.adSkip', proceed);

        //NOTE: if the ads get cancel we do nothing apart removing the listners
        if(evt.type === 'ended' || evt.type === 'vast.adSkip'){
          callback(null, response);
        }
      }
    });

    player.play();
  }
};

VASTIntegrator.prototype._trackError = function trackError(error, response) {
  vastUtil.track(response.errorURLMacros, {ERRORCODE: error.code || 900});
};

module.exports = VASTIntegrator;
},{"../../utils/async":39,"../../utils/dom":40,"../../utils/playerUtils":42,"../../utils/utilityFunctions":44,"./VASTError":22,"./VASTResponse":24,"./VASTTracker":25,"./vastUtil":29}],24:[function(require,module,exports){
'use strict';

var Ad = require('./Ad');
var VideoClicks = require('./VideoClicks');
var Linear = require('./Linear');
var InLine = require('./InLine');
var Wrapper = require('./Wrapper');

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

window.InLine__A = InLine;
function VASTResponse() {
  if (!(this instanceof VASTResponse)) {
    return new VASTResponse();
  }

  this._linearAdded = false;
  this.ads = [];
  this.errorURLMacros = [];
  this.impressions = [];
  this.clickTrackings = [];
  this.customClicks = [];
  this.trackingEvents = {};
  this.mediaFiles = [];
  this.clickThrough = undefined;
  this.adTitle = '';
  this.duration = undefined;
  this.skipoffset = undefined;
}

VASTResponse.prototype.addAd = function (ad) {
  var inLine, wrapper;
  if (ad instanceof Ad) {
    inLine = ad.inLine;
    wrapper = ad.wrapper;

    this.ads.push(ad);

    if (inLine) {
      this._addInLine(inLine);
    }

    if (wrapper) {
      this._addWrapper(wrapper);
    }
  }
};

VASTResponse.prototype._addErrorTrackUrl = function (error) {
  var errorURL = error instanceof xml.JXONTree ? xml.keyValue(error) : error;
  if (errorURL) {
    this.errorURLMacros.push(errorURL);
  }
};

VASTResponse.prototype._addImpressions = function (impressions) {
  utilities.isArray(impressions) && appendToArray(this.impressions, impressions);
};

VASTResponse.prototype._addClickThrough = function (clickThrough) {
  if (utilities.isNotEmptyString(clickThrough)) {
    this.clickThrough = clickThrough;
  }
};

VASTResponse.prototype._addClickTrackings = function (clickTrackings) {
  utilities.isArray(clickTrackings) && appendToArray(this.clickTrackings, clickTrackings);
};

VASTResponse.prototype._addCustomClicks = function (customClicks) {
  utilities.isArray(customClicks) && appendToArray(this.customClicks, customClicks);
};

VASTResponse.prototype._addTrackingEvents = function (trackingEvents) {
  var eventsMap = this.trackingEvents;

  if (trackingEvents) {
    trackingEvents = utilities.isArray(trackingEvents) ? trackingEvents : [trackingEvents];
    trackingEvents.forEach(function (trackingEvent) {
      if (!eventsMap[trackingEvent.name]) {
        eventsMap[trackingEvent.name] = [];
      }
      eventsMap[trackingEvent.name].push(trackingEvent);
    });
  }
};

VASTResponse.prototype._addTitle = function (title) {
  if (utilities.isNotEmptyString(title)) {
    this.adTitle = title;
  }
};

VASTResponse.prototype._addDuration = function (duration) {
  if (utilities.isNumber(duration)) {
    this.duration = duration;
  }
};

VASTResponse.prototype._addVideoClicks = function (videoClicks) {
  if (videoClicks instanceof VideoClicks) {
    this._addClickThrough(videoClicks.clickThrough);
    this._addClickTrackings(videoClicks.clickTrackings);
    this._addCustomClicks(videoClicks.customClicks);
  }
};

VASTResponse.prototype._addMediaFiles = function (mediaFiles) {
  utilities.isArray(mediaFiles) && appendToArray(this.mediaFiles, mediaFiles);
};

VASTResponse.prototype._addSkipoffset = function (offset) {
  if (offset) {
    this.skipoffset = offset;
  }
};

VASTResponse.prototype._addAdParameters = function (adParameters) {
  if (adParameters) {
    this.adParameters = adParameters;
  }
};

VASTResponse.prototype._addLinear = function (linear) {
  if (linear instanceof Linear) {
    this._addDuration(linear.duration);
    this._addTrackingEvents(linear.trackingEvents);
    this._addVideoClicks(linear.videoClicks);
    this._addMediaFiles(linear.mediaFiles);
    this._addSkipoffset(linear.skipoffset);
    this._addAdParameters(linear.adParameters);
    this._linearAdded = true;
  }
};

VASTResponse.prototype._addInLine = function (inLine) {
  var that = this;

  if (inLine instanceof InLine) {
    this._addTitle(inLine.adTitle);
    this._addErrorTrackUrl(inLine.error);
    this._addImpressions(inLine.impressions);

    inLine.creatives.forEach(function (creative) {
      if (creative.linear) {
        that._addLinear(creative.linear);
      }
    });
  }
};

VASTResponse.prototype._addWrapper = function (wrapper) {
  var that = this;

  if (wrapper instanceof Wrapper) {
    this._addErrorTrackUrl(wrapper.error);
    this._addImpressions(wrapper.impressions);

    wrapper.creatives.forEach(function (creative) {
      var linear = creative.linear;
      if (linear) {
        that._addVideoClicks(linear.videoClicks);
        that.clickThrough = undefined;//We ensure that no clickThrough has been added
        that._addTrackingEvents(linear.trackingEvents);
      }
    });
  }
};

VASTResponse.prototype.hasLinear = function(){
  return this._linearAdded;
};

function appendToArray(array, items) {
  items.forEach(function (item) {
    array.push(item);
  });
}

module.exports = VASTResponse;


},{"../../utils/utilityFunctions":44,"../../utils/xml":45,"./Ad":14,"./InLine":17,"./Linear":18,"./VideoClicks":26,"./Wrapper":27}],25:[function(require,module,exports){
'use strict';

var VASTError = require('./VASTError');
var VASTResponse = require('./VASTResponse');
var vastUtil = require('./vastUtil');
var utilities = require('../../utils/utilityFunctions');

function VASTTracker(assetURI, vastResponse) {
  if (!(this instanceof VASTTracker)) {
    return new VASTTracker(assetURI, vastResponse);
  }

  this.sanityCheck(assetURI, vastResponse);
  this.initialize(assetURI, vastResponse);

}

VASTTracker.prototype.initialize = function(assetURI, vastResponse) {
  this.response = vastResponse;
  this.assetURI = assetURI;
  this.progress = 0;
  this.quartiles = {
    firstQuartile: {tracked: false, time: Math.round(25 * vastResponse.duration) / 100},
    midpoint: {tracked: false, time: Math.round(50 * vastResponse.duration) / 100},
    thirdQuartile: {tracked: false, time: Math.round(75 * vastResponse.duration) / 100}
  };
};

VASTTracker.prototype.sanityCheck = function(assetURI, vastResponse) {
  if (!utilities.isString(assetURI) || utilities.isEmptyString(assetURI)) {
    throw new VASTError('on VASTTracker constructor, missing required the URI of the ad asset being played');
  }

  if (!(vastResponse instanceof VASTResponse)) {
    throw new VASTError('on VASTTracker constructor, missing required VAST response');
  }
};

VASTTracker.prototype.trackURLs = function trackURLs(urls, variables) {
  if (utilities.isArray(urls) && urls.length > 0) {
    variables = utilities.extend({
      ASSETURI: this.assetURI,
      CONTENTPLAYHEAD: vastUtil.formatProgress(this.progress)
    }, variables || {});

    vastUtil.track(urls, variables);
  }
};

VASTTracker.prototype.trackEvent = function trackEvent(eventName, trackOnce) {
  this.trackURLs(getEventUris(this.response.trackingEvents[eventName]));
  if (trackOnce) {
    this.response.trackingEvents[eventName] = undefined;
  }

  /*** Local function ***/
  function getEventUris(trackingEvents) {
    var uris;

    if (trackingEvents) {
      uris = [];
      trackingEvents.forEach(function (event) {
        uris.push(event.uri);
      });
    }
    return uris;
  }
};

VASTTracker.prototype.trackProgress = function trackProgress(newProgressInMs) {
  var that = this;
  var events = [];
  var ONCE = true;
  var ALWAYS = false;
  var trackingEvents = this.response.trackingEvents;

  if (utilities.isNumber(newProgressInMs)) {
    addTrackEvent('start', ONCE, newProgressInMs > 0);
    addTrackEvent('rewind', ALWAYS, hasRewound(this.progress, newProgressInMs));
    addQuartileEvents(newProgressInMs);
    trackProgressEvents(newProgressInMs);
    trackEvents();
    this.progress = newProgressInMs;
  }

  /*** Local function ***/
  function hasRewound(currentProgress, newProgress) {
    var REWIND_THRESHOLD = 3000; //IOS video clock is very unreliable and we need a 3 seconds threshold to ensure that there was a rewind an that it was on purpose.
    return currentProgress > newProgressInMs && Math.abs(newProgress - currentProgress) > REWIND_THRESHOLD;
  }

  function addTrackEvent(eventName, trackOnce, canBeAdded) {
    if (trackingEvents[eventName] && canBeAdded) {
      events.push({
        name: eventName,
        trackOnce: !!trackOnce
      });
    }
  }

  function addQuartileEvents(progress) {
    var quartiles = that.quartiles;
    var firstQuartile = that.quartiles.firstQuartile;
    var midpoint = that.quartiles.midpoint;
    var thirdQuartile = that.quartiles.thirdQuartile;

    if (!firstQuartile.tracked) {
      trackQuartile('firstQuartile', progress);
    } else if (!midpoint.tracked) {
      trackQuartile('midpoint', progress);
    } else if (!thirdQuartile.tracked){
      trackQuartile('thirdQuartile', progress);
    }

    /*** Local function ***/
    function trackQuartile(quartileName, progress){
      var quartile = quartiles[quartileName];
      if(canBeTracked(quartile, progress)){
        quartile.tracked = true;
        addTrackEvent(quartileName, ONCE, true);
      }
    }
  }

  function canBeTracked(quartile, progress) {
    var quartileTime = quartile.time;
    //We only fire the quartile event if the progress is bigger than the quartile time by 5 seconds at most.
    return progress >= quartileTime && progress <= (quartileTime + 5000);
  }

  function trackProgressEvents(progress) {
    if (!utilities.isArray(trackingEvents.progress)) {
      return; //Nothing to track
    }

    var pendingProgressEvts = [];

    trackingEvents.progress.forEach(function (evt) {
      if (evt.offset <= progress) {
        that.trackURLs([evt.uri]);
      } else {
        pendingProgressEvts.push(evt);
      }
    });
    trackingEvents.progress = pendingProgressEvts;
  }

  function trackEvents() {
    events.forEach(function (event) {
      that.trackEvent(event.name, event.trackOnce);
    });
  }
};

[
  'rewind',
  'fullscreen',
  'exitFullscreen',
  'pause',
  'resume',
  'mute',
  'unmute',
  'acceptInvitation',
  'acceptInvitationLinear',
  'collapse',
  'expand'
].forEach(function (eventName) {
    VASTTracker.prototype['track' + utilities.capitalize(eventName)] = function () {
      this.trackEvent(eventName);
    };
  });

[
  'start',
  'skip',
  'close',
  'closeLinear'
].forEach(function (eventName) {
    VASTTracker.prototype['track' + utilities.capitalize(eventName)] = function () {
      this.trackEvent(eventName, true);
    };
  });

[
  'firstQuartile',
  'midpoint',
  'thirdQuartile'
].forEach(function (quartile) {
    VASTTracker.prototype['track' + utilities.capitalize(quartile)] = function () {
      this.quartiles[quartile].tracked = true;
      this.trackEvent(quartile, true);
    };
  });

VASTTracker.prototype.trackComplete = function () {
  if(this.quartiles.thirdQuartile.tracked){
    this.trackEvent('complete', true);
  }
};

VASTTracker.prototype.trackErrorWithCode = function trackErrorWithCode(errorcode) {
  if (utilities.isNumber(errorcode)) {
    this.trackURLs(this.response.errorURLMacros, {ERRORCODE: errorcode});
  }
};

VASTTracker.prototype.trackImpressions = function trackImpressions() {
  this.trackURLs(this.response.impressions);
};

VASTTracker.prototype.trackCreativeView = function trackCreativeView() {
  this.trackEvent('creativeView');
};

VASTTracker.prototype.trackClick = function trackClick() {
  this.trackURLs(this.response.clickTrackings);
};

module.exports = VASTTracker;

},{"../../utils/utilityFunctions":44,"./VASTError":22,"./VASTResponse":24,"./vastUtil":29}],26:[function(require,module,exports){
'use strict';

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function VideoClicks(videoClickJTree) {
  if (!(this instanceof VideoClicks)) {
    return new VideoClicks(videoClickJTree);
  }

  this.clickThrough = xml.keyValue(videoClickJTree.clickThrough);
  this.clickTrackings = parseClickTrackings(videoClickJTree.clickTracking);
  this.customClicks = parseClickTrackings(videoClickJTree.customClick);

  /*** Local functions ***/
  function parseClickTrackings(trackingData) {
    var clickTrackings = [];
    if (trackingData) {
      trackingData = utilities.isArray(trackingData) ? trackingData : [trackingData];
      trackingData.forEach(function (clickTrackingData) {
        clickTrackings.push(xml.keyValue(clickTrackingData));
      });
    }
    return clickTrackings;
  }
}

module.exports = VideoClicks;
},{"../../utils/utilityFunctions":44,"../../utils/xml":45}],27:[function(require,module,exports){
'use strict';

var vastUtil = require('./vastUtil');
var Creative = require('./Creative');

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function Wrapper(wrapperJTree) {
  if(!(this instanceof Wrapper)) {
    return new Wrapper(wrapperJTree);
  }

  //Required elements
  this.adSystem = xml.keyValue(wrapperJTree.adSystem);
  this.impressions = vastUtil.parseImpressions(wrapperJTree.impression);
  this.VASTAdTagURI = xml.keyValue(wrapperJTree.vASTAdTagURI);

  //Optional elements
  this.creatives = Creative.parseCreatives(wrapperJTree.creatives);
  this.error = xml.keyValue(wrapperJTree.error);
  this.extensions = wrapperJTree.extensions;

  //Optional attrs
  this.followAdditionalWrappers = utilities.isDefined(xml.attr(wrapperJTree, 'followAdditionalWrappers'))? xml.attr(wrapperJTree, 'followAdditionalWrappers'): true;
  this.allowMultipleAds = xml.attr(wrapperJTree, 'allowMultipleAds');
  this.fallbackOnNoAd = xml.attr(wrapperJTree, 'fallbackOnNoAd');
}

module.exports = Wrapper;

},{"../../utils/utilityFunctions":44,"../../utils/xml":45,"./Creative":16,"./vastUtil":29}],28:[function(require,module,exports){
'use strict';

var utilities = require('../../utils/utilityFunctions');

var durationRegex = /(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/;

var parsers = {

  duration: function parseDuration(durationStr) {

    var match, durationInMs;

    if (utilities.isString(durationStr)) {
      match = durationStr.match(durationRegex);
      if (match) {
        durationInMs = parseHoursToMs(match[1]) + parseMinToMs(match[2]) + parseSecToMs(match[3]) + parseInt(match[5] || 0);
      }
    }

    return isNaN(durationInMs) ? null : durationInMs;

    /*** local functions ***/
    function parseHoursToMs(hourStr) {
      return parseInt(hourStr, 10) * 60 * 60 * 1000;
    }

    function parseMinToMs(minStr) {
      return parseInt(minStr, 10) * 60 * 1000;
    }

    function parseSecToMs(secStr) {
      return parseInt(secStr, 10) * 1000;
    }
  },

  offset: function parseOffset(offset, duration) {
    if(isPercentage(offset)){
      return calculatePercentage(offset, duration);
    }
    return parsers.duration(offset);

    /*** Local function ***/
    function isPercentage(offset) {
      var percentageRegex = /^\d+(\.\d+)?%$/g;
      return percentageRegex.test(offset);
    }

    function calculatePercentage(percentStr, duration) {
      if(duration) {
        return calcPercent(duration, parseFloat(percentStr.replace('%', '')));
      }
      return null;
    }

    function calcPercent(quantity, percent){
      return quantity * percent / 100;
    }
  }

};


module.exports = parsers;
},{"../../utils/utilityFunctions":44}],29:[function(require,module,exports){
'use strict';

var utilities = require('../../utils/utilityFunctions');
var VPAIDHTML5Tech = require('../vpaid/VPAIDHTML5Tech');
var VPAIDFlashTech = require('../vpaid/VPAIDFlashTech');
var VPAIDFLASHClient = require('VPAIDFLASHClient/js/VPAIDFLASHClient');

var vastUtil = {

  track: function track(URLMacros, variables) {
    var sources = vastUtil.parseURLMacros(URLMacros, variables);
    var trackImgs = [];
    sources.forEach(function (src) {
      var img = new Image();
      img.src = src;
      trackImgs.push(img);
    });
    return trackImgs;
  },

  parseURLMacros: function parseMacros(URLMacros, variables) {
    var parsedURLs = [];

    variables = variables || {};

    if (!(variables["CACHEBUSTING"])) {
      variables["CACHEBUSTING"] = Math.round(Math.random() * 1.0e+10);
    }

    URLMacros.forEach(function (URLMacro) {
      parsedURLs.push(vastUtil._parseURLMacro(URLMacro, variables));
    });

    return parsedURLs;
  },

  parseURLMacro: function parseMacro(URLMacro, variables) {
    variables = variables || {};

    if (!(variables["CACHEBUSTING"])) {
      variables["CACHEBUSTING"] = Math.round(Math.random() * 1.0e+10);
    }

    return vastUtil._parseURLMacro(URLMacro, variables);
  },

  _parseURLMacro: function parseMacro(URLMacro, variables) {
    variables = variables || {};

    utilities.forEach(variables, function (value, key) {
      URLMacro = URLMacro.replace(new RegExp("\\[" + key + "\\\]", 'gm'), value);
    });

    return URLMacro;
  },

  parseDuration: function parseDuration(durationStr) {
    var durationRegex = /(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/;
    var match, durationInMs;

    if (utilities.isString(durationStr)) {
      match = durationStr.match(durationRegex);
      if (match) {
        durationInMs = parseHoursToMs(match[1]) + parseMinToMs(match[2]) + parseSecToMs(match[3]) + parseInt(match[5] || 0);
      }
    }

    return isNaN(durationInMs) ? null : durationInMs;

    /*** local functions ***/
    function parseHoursToMs(hourStr) {
      return parseInt(hourStr, 10) * 60 * 60 * 1000;
    }

    function parseMinToMs(minStr) {
      return parseInt(minStr, 10) * 60 * 1000;
    }

    function parseSecToMs(secStr) {
      return parseInt(secStr, 10) * 1000;
    }
  },

  parseImpressions: function parseImpressions(impressions) {
    if (impressions) {
      impressions = utilities.isArray(impressions) ? impressions : [impressions];
      return utilities.transformArray(impressions, function (impression) {
        if (utilities.isNotEmptyString(impression.keyValue)) {
          return impression.keyValue;
        }
        return undefined;
      });
    }
    return [];
  },


  //We assume that the progress is going to arrive in milliseconds
  formatProgress: function formatProgress(progress) {
    var hours, minutes, seconds, milliseconds;
    hours = progress / (60 * 60 * 1000);
    hours = Math.floor(hours);
    minutes = (progress / (60 * 1000)) % 60;
    minutes = Math.floor(minutes);
    seconds = (progress / 1000) % 60;
    seconds = Math.floor(seconds);
    milliseconds = progress % 1000;
    return utilities.toFixedDigits(hours, 2) + ':' + utilities.toFixedDigits(minutes, 2) + ':' + utilities.toFixedDigits(seconds, 2) + '.' + utilities.toFixedDigits(milliseconds, 3);
  },

  parseOffset: function parseOffset(offset, duration) {
    if (isPercentage(offset)) {
      return calculatePercentage(offset, duration);
    }
    return vastUtil.parseDuration(offset);

    /*** Local function ***/
    function isPercentage(offset) {
      var percentageRegex = /^\d+(\.\d+)?%$/g;
      return percentageRegex.test(offset);
    }

    function calculatePercentage(percentStr, duration) {
      if (duration) {
        return calcPercent(duration, parseFloat(percentStr.replace('%', '')));
      }
      return null;
    }

    function calcPercent(quantity, percent) {
      return quantity * percent / 100;
    }
  },


  //List of supported VPAID technologies
  VPAID_techs: [
    VPAIDFlashTech,
    VPAIDHTML5Tech
  ],

  isVPAID: function isVPAIDMediaFile(mediaFile) {
    return !!mediaFile && mediaFile.apiFramework === 'VPAID';
  },

  findSupportedVPAIDTech: function findSupportedVPAIDTech(mimeType) {
    var i, len, VPAIDTech;

    for (i = 0, len = this.VPAID_techs.length; i < len; i += 1) {
      VPAIDTech = this.VPAID_techs[i];
      if (VPAIDTech.supports(mimeType)) {
        return VPAIDTech;
      }
    }
    return null;
  },

  isFlashSupported: function isFlashSupported() {
    return VPAIDFLASHClient.isSupported();
  },

  /**
   * Necessary step for VPAIDFLAShClient to know if flash is supported and not blocked.
   * IMPORTANT NOTE: This is an async test and needs to be run as soon as possible.
   *
   * @param vpaidFlashLoaderPath the path to the vpaidFlashLoader swf obj.
   */
  runFlashSupportCheck: function runFlashSupportCheck(vpaidFlashLoaderPath) {
    VPAIDFLASHClient.runFlashTest({data: vpaidFlashLoaderPath});
  }

};

module.exports = vastUtil;

},{"../../utils/utilityFunctions":44,"../vpaid/VPAIDFlashTech":31,"../vpaid/VPAIDHTML5Tech":32,"VPAIDFLASHClient/js/VPAIDFLASHClient":3}],30:[function(require,module,exports){
'use strict';

var VASTError = require('../vast/VASTError');

var utilities = require('../../utils/utilityFunctions');

function VPAIDAdUnitWrapper(vpaidAdUnit, opts) {
  if (!(this instanceof VPAIDAdUnitWrapper)) {
    return new VPAIDAdUnitWrapper(vpaidAdUnit, opts);
  }
  sanityCheck(vpaidAdUnit, opts);

  this.options = utilities.extend({}, opts);

  this._adUnit = vpaidAdUnit;

  /*** Local Functions ***/
  function sanityCheck(adUnit, opts) {
    if (!adUnit || !VPAIDAdUnitWrapper.checkVPAIDInterface(adUnit)) {
      throw new VASTError('on VPAIDAdUnitWrapper, the passed VPAID adUnit does not fully implement the VPAID interface');
    }

    if (!utilities.isObject(opts)) {
      throw new VASTError("on VPAIDAdUnitWrapper, expected options hash  but got '" + opts + "'");
    }

    if (!("responseTimeout" in opts) || !utilities.isNumber(opts.responseTimeout) ){
      throw new VASTError("on VPAIDAdUnitWrapper, expected responseTimeout in options");
    }
  }
}

VPAIDAdUnitWrapper.checkVPAIDInterface = function checkVPAIDInterface(VPAIDAdUnit) {
  //NOTE: skipAd is not part of the method list because it only appears in VPAID 2.0 and we support VPAID 1.0
  var VPAIDInterfaceMethods = [
    'handshakeVersion', 'initAd', 'startAd', 'stopAd', 'resizeAd', 'pauseAd', 'expandAd', 'collapseAd'
  ];

  for (var i = 0, len = VPAIDInterfaceMethods.length; i < len; i++) {
    if (!VPAIDAdUnit || !utilities.isFunction(VPAIDAdUnit[VPAIDInterfaceMethods[i]])) {
      return false;
    }
  }


  return canSubscribeToEvents(VPAIDAdUnit) && canUnsubscribeFromEvents(VPAIDAdUnit);

  /*** Local Functions ***/

  function canSubscribeToEvents(adUnit) {
    return utilities.isFunction(adUnit.subscribe) || utilities.isFunction(adUnit.addEventListener) || utilities.isFunction(adUnit.on);
  }

  function canUnsubscribeFromEvents(adUnit) {
    return utilities.isFunction(adUnit.unsubscribe) || utilities.isFunction(adUnit.removeEventListener) || utilities.isFunction(adUnit.off);

  }
};

VPAIDAdUnitWrapper.prototype.adUnitAsyncCall = function () {
  var args = utilities.arrayLikeObjToArray(arguments);
  var method = args.shift();
  var cb = args.pop();
  var timeoutId;

  sanityCheck(method, cb, this._adUnit);
  args.push(wrapCallback());

  this._adUnit[method].apply(this._adUnit, args);
  timeoutId = setTimeout(function () {
    timeoutId = null;
    cb(new VASTError("on VPAIDAdUnitWrapper, timeout while waiting for a response on call '" + method + "'"));
    cb = utilities.noop;
  }, this.options.responseTimeout);

  /*** Local functions ***/
  function sanityCheck(method, cb, adUnit) {
    if (!utilities.isString(method) || !utilities.isFunction(adUnit[method])) {
      throw new VASTError("on VPAIDAdUnitWrapper.adUnitAsyncCall, invalid method name");
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError("on VPAIDAdUnitWrapper.adUnitAsyncCall, missing callback");
    }
  }

  function wrapCallback() {
    return function () {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      cb.apply(this, arguments);
    };
  }
};

VPAIDAdUnitWrapper.prototype.on = function (evtName, handler) {
  var addEventListener = this._adUnit.addEventListener || this._adUnit.subscribe || this._adUnit.on;
  addEventListener.call(this._adUnit, evtName, handler);
};

VPAIDAdUnitWrapper.prototype.off = function (evtName, handler) {
  var removeEventListener = this._adUnit.removeEventListener || this._adUnit.unsubscribe || this._adUnit.off;
  removeEventListener.call(this._adUnit, evtName, handler);
};

VPAIDAdUnitWrapper.prototype.waitForEvent = function (evtName, cb, context) {
  var timeoutId;
  sanityCheck(evtName, cb);
  context = context || null;

  this.on(evtName, responseListener);

  timeoutId = setTimeout(function () {
    cb(new VASTError("on VPAIDAdUnitWrapper.waitForEvent, timeout while waiting for event '" + evtName + "'"));
    timeoutId = null;
    cb = utilities.noop;
  }, this.options.responseTimeout);

  /*** Local functions ***/
  function sanityCheck(evtName, cb) {
    if (!utilities.isString(evtName)) {
      throw new VASTError("on VPAIDAdUnitWrapper.waitForEvent, missing evt name");
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError("on VPAIDAdUnitWrapper.waitForEvent, missing callback");
    }
  }

  function responseListener() {
    var args = utilities.arrayLikeObjToArray(arguments);

    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    args.unshift(null);
    cb.apply(context, args);
  }
};

// VPAID METHODS
VPAIDAdUnitWrapper.prototype.handshakeVersion = function (version, cb) {
  this.adUnitAsyncCall('handshakeVersion', version, cb);
};

/* jshint maxparams:6 */
VPAIDAdUnitWrapper.prototype.initAd = function (width, height, viewMode, desiredBitrate, adUnitData, cb) {
  this.waitForEvent('AdLoaded', cb);
  this._adUnit.initAd(width, height, viewMode, desiredBitrate, adUnitData);
};

VPAIDAdUnitWrapper.prototype.resizeAd = function (width, height, viewMode, cb) {
  // NOTE: AdSizeChange event is only supported on VPAID 2.0 so for the moment we are not going to use it
  // and will assume that everything is fine after the async call
  this.adUnitAsyncCall('resizeAd', width, height, viewMode, cb);
};

VPAIDAdUnitWrapper.prototype.startAd = function (cb) {
  this.waitForEvent('AdStarted', cb);
  this._adUnit.startAd();
};

VPAIDAdUnitWrapper.prototype.stopAd = function (cb) {
  this.waitForEvent('AdStopped', cb);
  this._adUnit.stopAd();
};

VPAIDAdUnitWrapper.prototype.pauseAd = function (cb) {
  this.waitForEvent('AdPaused', cb);
  this._adUnit.pauseAd();
};

VPAIDAdUnitWrapper.prototype.resumeAd = function (cb) {
  this.waitForEvent('AdPlaying', cb);
  this._adUnit.resumeAd();
};

VPAIDAdUnitWrapper.prototype.expandAd = function (cb) {
  this.waitForEvent('AdExpandedChange', cb);
  this._adUnit.expandAd();
};

VPAIDAdUnitWrapper.prototype.collapseAd = function (cb) {
  this.waitForEvent('AdExpandedChange', cb);
  this._adUnit.collapseAd();
};

VPAIDAdUnitWrapper.prototype.skipAd = function (cb) {
  this.waitForEvent('AdSkipped', cb);
  this._adUnit.skipAd();
};

//VPAID property getters
[
  'adLinear',
  'adWidth',
  'adHeight',
  'adExpanded',
  'adSkippableState',
  'adRemainingTime',
  'adDuration',
  'adVolume',
  'adCompanions',
  'adIcons'
].forEach(function (property) {
  var getterName = 'get' + utilities.capitalize(property);

  VPAIDAdUnitWrapper.prototype[getterName] = function (cb) {
    this.adUnitAsyncCall(getterName, cb);
  };
});

//VPAID property setters
VPAIDAdUnitWrapper.prototype.setAdVolume = function(volume, cb){
  this.adUnitAsyncCall('setAdVolume',volume, cb);
};

module.exports = VPAIDAdUnitWrapper;

},{"../../utils/utilityFunctions":44,"../vast/VASTError":22}],31:[function(require,module,exports){
'use strict';

var VASTError = require('../vast/VASTError');

var VPAIDFLASHClient = require('VPAIDFLASHClient/js/VPAIDFLASHClient');

var utilities = require('../../utils/utilityFunctions');
var dom = require('../../utils/dom');

function VPAIDFlashTech(mediaFile, settings) {
  if (!(this instanceof VPAIDFlashTech)) {
    return new VPAIDFlashTech(mediaFile);
  }
  sanityCheck(mediaFile);
  this.name = 'vpaid-flash';
  this.mediaFile = mediaFile;
  this.containerEl = null;
  this.vpaidFlashClient = null;
  this.settings = settings;

  /*** local functions ***/
  function sanityCheck(mediaFile) {
    if (!mediaFile || !utilities.isString(mediaFile.src)) {
      throw new VASTError('on VPAIDFlashTech, invalid MediaFile');
    }
  }
}

VPAIDFlashTech.VPAIDFLASHClient = VPAIDFLASHClient;

VPAIDFlashTech.supports = function (type) {
  return type === 'application/x-shockwave-flash' && VPAIDFlashTech.VPAIDFLASHClient.isSupported();
};

VPAIDFlashTech.prototype.loadAdUnit = function loadFlashCreative(containerEl, objectEl, callback) {
  var that = this;
  var flashClientOpts = this.settings && this.settings.vpaidFlashLoaderPath ? {data: this.settings.vpaidFlashLoaderPath} : undefined;
  sanityCheck(containerEl, callback);

  this.containerEl = containerEl;
  this.vpaidFlashClient = new VPAIDFlashTech.VPAIDFLASHClient(containerEl, function (error) {
    if (error) {
      return callback(error);
    }

    that.vpaidFlashClient.loadAdUnit(that.mediaFile.src, callback);
  }, flashClientOpts);

  /*** Local Functions ***/
  function sanityCheck(container, cb) {

    if (!dom.isDomElement(container)) {
      throw new VASTError('on VPAIDFlashTech.loadAdUnit, invalid dom container element');
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError('on VPAIDFlashTech.loadAdUnit, missing valid callback');
    }
  }
};

VPAIDFlashTech.prototype.unloadAdUnit = function () {
  if (this.vpaidFlashClient) {
    try{
      this.vpaidFlashClient.destroy();
    } catch(e){
      if(console && utilities.isFunction(console.log)){
        console.log('VAST ERROR: trying to unload the VPAID adunit');
      }
    }
    this.vpaidFlashClient = null;
  }

  if (this.containerEl) {
    dom.remove(this.containerEl);
    this.containerEl = null;
  }
};

module.exports = VPAIDFlashTech;

},{"../../utils/dom":40,"../../utils/utilityFunctions":44,"../vast/VASTError":22,"VPAIDFLASHClient/js/VPAIDFLASHClient":3}],32:[function(require,module,exports){
'use strict';

var VASTError = require('../vast/VASTError');

var VPAIDHTML5Client = require('VPAIDHTML5Client/js/VPAIDHTML5Client');

var utilities = require('../../utils/utilityFunctions');
var dom = require('../../utils/dom');

function VPAIDHTML5Tech(mediaFile) {

  if(!(this instanceof VPAIDHTML5Tech)) {
    return new VPAIDHTML5Tech(mediaFile);
  }

  sanityCheck(mediaFile);

  this.name = 'vpaid-html5';
  this.containerEl = null;
  this.videoEl = null;
  this.vpaidHTMLClient = null;

  this.mediaFile = mediaFile;

  function sanityCheck(mediaFile) {
      if (!mediaFile || !utilities.isString(mediaFile.src)) {
        throw new VASTError(VPAIDHTML5Tech.INVALID_MEDIA_FILE);
      }
  }
}

VPAIDHTML5Tech.VPAIDHTML5Client = VPAIDHTML5Client;

VPAIDHTML5Tech.supports = function (type) {
  return !utilities.isOldIE() && type === 'application/javascript';
};

VPAIDHTML5Tech.prototype.loadAdUnit = function loadAdUnit(containerEl, videoEl, callback) {
  sanityCheck(containerEl, videoEl, callback);

  this.containerEl = containerEl;
  this.videoEl = videoEl;
  this.vpaidHTMLClient = new VPAIDHTML5Tech.VPAIDHTML5Client(containerEl, videoEl, {});
  this.vpaidHTMLClient.loadAdUnit(this.mediaFile.src, callback);

  function sanityCheck(container, video, cb) {
    if (!dom.isDomElement(container)) {
      throw new VASTError(VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL);
    }

    if (!dom.isDomElement(video) || video.tagName.toLowerCase() !== 'video') {
      throw new VASTError(VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL);
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError(VPAIDHTML5Tech.MISSING_CALLBACK);
    }
  }
};

VPAIDHTML5Tech.prototype.unloadAdUnit = function unloadAdUnit() {
  if (this.vpaidHTMLClient) {
    try {
      this.vpaidHTMLClient.destroy();
    } catch(e) {
      if (console && utilities.isFunction(console.log)) {
        console.log('VAST ERROR: trying to unload the VPAID adunit');
      }
    }

    this.vpaidHTMLClient = null;
  }

  if (this.containerEl) {
    dom.remove(this.containerEl);
    this.containerEl = null;
  }
};

var PREFIX = 'on VPAIDHTML5Tech';
VPAIDHTML5Tech.INVALID_MEDIA_FILE = PREFIX + ', invalid MediaFile';
VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL = PREFIX + ', invalid container HtmlElement';
VPAIDHTML5Tech.INVALID_DOM_VIDEO_EL = PREFIX + ', invalid HTMLVideoElement';
VPAIDHTML5Tech.MISSING_CALLBACK = PREFIX + ', missing valid callback';

module.exports = VPAIDHTML5Tech;
},{"../../utils/dom":40,"../../utils/utilityFunctions":44,"../vast/VASTError":22,"VPAIDHTML5Client/js/VPAIDHTML5Client":11}],33:[function(require,module,exports){
'use strict';

var VASTError = require('../vast/VASTError');
var VASTResponse = require('../vast/VASTResponse');
var VASTTracker = require('../vast/VASTTracker');
var vastUtil = require('../vast/vastUtil');

var VPAIDAdUnitWrapper = require('./VPAIDAdUnitWrapper');

var async = require('../../utils/async');
var dom = require('../../utils/dom');
var playerUtils = require('../../utils/playerUtils');
var utilities = require('../../utils/utilityFunctions');

function VPAIDIntegrator(player, settings) {
  if (!(this instanceof VPAIDIntegrator)) {
    return new VPAIDIntegrator(player);
  }

  this.VIEW_MODE = {
    NORMAL: 'normal',
    FULLSCREEN: "fullscreen",
    THUMBNAIL: "thumbnail"
  };
  this.player = player;
  this.containerEl = createVPAIDContainerEl(player);
  this.options = {
    responseTimeout: 5000,
    VPAID_VERSION: '2.0'
  };
  this.settings = settings;

  /*** Local functions ***/

  function createVPAIDContainerEl() {
    var containerEl = document.createElement('div');
    dom.addClass(containerEl, 'VPAID-container');
    player.el().insertBefore(containerEl, player.controlBar.el());
    return containerEl;

  }
}

VPAIDIntegrator.prototype.playAd = function playVPaidAd(vastResponse, callback) {
  if (!(vastResponse instanceof VASTResponse)) {
    return callback(new VASTError('on VASTIntegrator.playAd, missing required VASTResponse'));
  }

  var that = this;
  var player = this.player;
  var tech = this._findSupportedTech(vastResponse, this.settings);

  callback = callback || utilities.noop;

  this._adUnit = null;

  dom.addClass(player.el(), 'vjs-vpaid-ad');

  player.on('vast.adsCancel', triggerVpaidAdEnd);
  player.one('vpaid.adEnd', function(){
    player.off('vast.adsCancel', triggerVpaidAdEnd);
    removeAdUnit();
  });

  if (tech) {
    async.waterfall([
      function (next) {
        next(null, tech, vastResponse);
      },
      this._loadAdUnit.bind(this),
      this._playAdUnit.bind(this),
      this._finishPlaying.bind(this)

    ], adComplete);

    this._adUnit = {
      _paused: true,
      type: 'VPAID',
      pauseAd: function() {
        player.trigger('vpaid.pauseAd');
        player.pause(true);//we make sure that the video content gets stopped.
      },
      resumeAd: function() {
          player.trigger('vpaid.resumeAd');
      },
      isPaused: function() {
        return this._paused;
      },
      getSrc: function() {
        return tech.mediaFile;
      }
    };

  } else {
    var error = new VASTError('on VPAIDIntegrator.playAd, could not find a supported mediaFile', 403);
    adComplete(error, this._adUnit, vastResponse);
  }

  return this._adUnit;

  /*** Local functions ***/
  function adComplete(error, adUnit, vastResponse) {
    if (error && vastResponse) {
      that._trackError(vastResponse, error.code);
    }
    player.trigger('vpaid.adEnd');
    callback(error, vastResponse);
  }

  function triggerVpaidAdEnd(){
    player.trigger('vpaid.adEnd');
  }

  function removeAdUnit() {
    if (tech) {
      tech.unloadAdUnit();
    }
    dom.removeClass(player.el(), 'vjs-vpaid-ad');
  }
};

VPAIDIntegrator.prototype._findSupportedTech = function (vastResponse, settings) {
  if (!(vastResponse instanceof VASTResponse)) {
    return null;
  }

  var vpaidMediaFiles = vastResponse.mediaFiles.filter(vastUtil.isVPAID);
  var i, len, mediaFile, VPAIDTech;

  for (i = 0, len = vpaidMediaFiles.length; i < len; i += 1) {
    mediaFile = vpaidMediaFiles[i];
    VPAIDTech = vastUtil.findSupportedVPAIDTech(mediaFile.type);
    if (VPAIDTech) {
      return new VPAIDTech(mediaFile, settings);
    }
  }
  return null;
};

VPAIDIntegrator.prototype._createVPAIDAdUnitWrapper = function(adUnit, src, responseTimeout) {
  return new VPAIDAdUnitWrapper(adUnit, {src: src, responseTimeout: responseTimeout});
};

VPAIDIntegrator.prototype._loadAdUnit = function (tech, vastResponse, next) {
  var that = this;
  var player = this.player;
  var vjsTechEl = player.el().querySelector('.vjs-tech');
  var responseTimeout = this.settings.responseTimeout || this.options.responseTimeout;
  tech.loadAdUnit(this.containerEl, vjsTechEl, function (error, adUnit) {
    if (error) {
      return next(error, adUnit, vastResponse);
    }

    try {
      var WrappedAdUnit = that._createVPAIDAdUnitWrapper(adUnit, tech.mediaFile.src, responseTimeout);
      var techClass = 'vjs-' + tech.name + '-ad';
      dom.addClass(player.el(), techClass);
      player.one('vpaid.adEnd', function() {
        dom.removeClass(player.el(),techClass);
      });
      next(null, WrappedAdUnit, vastResponse);
    } catch (e) {
      next(e, adUnit, vastResponse);
    }
  });
};

VPAIDIntegrator.prototype._playAdUnit = function (adUnit, vastResponse, callback) {
  async.waterfall([
    function (next) {
      next(null, adUnit, vastResponse);
    },
    this._handshake.bind(this),
    this._initAd.bind(this),
    this._setupEvents.bind(this),
    this._addSkipButton.bind(this),
    this._linkPlayerControls.bind(this),
    this._startAd.bind(this)
  ], callback);
};

VPAIDIntegrator.prototype._handshake = function handshake(adUnit, vastResponse, next) {
  adUnit.handshakeVersion(this.options.VPAID_VERSION, function (error, version) {
    if (error) {
      return next(error, adUnit, vastResponse);
    }

    if (version && isSupportedVersion(version)) {
      return next(null, adUnit, vastResponse);
    }

    return next(new VASTError('on VPAIDIntegrator._handshake, unsupported version "' + version + '"'), adUnit, vastResponse);
  });

  function isSupportedVersion(version) {
    var majorNum = major(version);
    return majorNum >= 1 && majorNum <= 2;
  }

  function major(version) {
    var parts = version.split('.');
    return parseInt(parts[0], 10);
  }
};

VPAIDIntegrator.prototype._initAd = function (adUnit, vastResponse, next) {
  var tech = this.player.el().querySelector('.vjs-tech');
  var dimension = dom.getDimension(tech);
  adUnit.initAd(dimension.width, dimension.height, this.VIEW_MODE.NORMAL, -1, {AdParameters: vastResponse.adParameters || ''}, function (error) {
    next(error, adUnit, vastResponse);
  });
};

VPAIDIntegrator.prototype._createVASTTracker = function(adUnitSrc, vastResponse) {
  return new VASTTracker(adUnitSrc, vastResponse);
};

VPAIDIntegrator.prototype._setupEvents = function (adUnit, vastResponse, next) {
  var adUnitSrc = adUnit.options.src;
  var tracker = this._createVASTTracker(adUnitSrc, vastResponse);
  var player = this.player;
  var that = this;

  adUnit.on('AdSkipped', function () {
    player.trigger('vpaid.AdSkipped');
    tracker.trackSkip();
  });

  adUnit.on('AdImpression', function () {
    player.trigger('vpaid.AdImpression');
    tracker.trackImpressions();
  });

  adUnit.on('AdStarted', function () {
    player.trigger('vpaid.AdStarted');
    tracker.trackCreativeView();
    notifyPlayToPlayer();
  });

  adUnit.on('AdVideoStart', function () {
    player.trigger('vpaid.AdVideoStart');
    tracker.trackStart();
    notifyPlayToPlayer();
  });

  adUnit.on('AdPlaying', function () {
    player.trigger('vpaid.AdPlaying');
    tracker.trackResume();
    notifyPlayToPlayer();
  });

  adUnit.on('AdPaused', function () {
    player.trigger('vpaid.AdPaused');
    tracker.trackPause();
    notifyPauseToPlayer();
  });

  function notifyPlayToPlayer(){
    if(that._adUnit && that._adUnit.isPaused()){
      that._adUnit._paused = false;
    }
    player.trigger('play');

  }

  function notifyPauseToPlayer() {
    if(that._adUnit){
      that._adUnit._paused = true;
    }
    player.trigger('pause');
  }

  adUnit.on('AdVideoFirstQuartile', function () {
    player.trigger('vpaid.AdVideoFirstQuartile');
    tracker.trackFirstQuartile();
  });

  adUnit.on('AdVideoMidpoint', function () {
    player.trigger('vpaid.AdVideoMidpoint');
    tracker.trackMidpoint();
  });

  adUnit.on('AdVideoThirdQuartile', function () {
    player.trigger('vpaid.AdVideoThirdQuartile');
    tracker.trackThirdQuartile();
  });

  adUnit.on('AdVideoComplete', function () {
    player.trigger('vpaid.AdVideoComplete');
    tracker.trackComplete();
  });

  adUnit.on('AdClickThru', function (data) {
    player.trigger('vpaid.AdClickThru');
    var url = data.url;
    var playerHandles = data.playerHandles;
    var clickThruUrl = utilities.isNotEmptyString(url) ? url : generateClickThroughURL(vastResponse.clickThrough);

    tracker.trackClick();
    if (playerHandles && clickThruUrl) {
      window.open(clickThruUrl, '_blank');
    }

    function generateClickThroughURL(clickThroughMacro) {
      var variables = {
        ASSETURI: adUnit.options.src,
        CONTENTPLAYHEAD: 0 //In VPAID there is no method to know the current time from the adUnit
      };

      return clickThroughMacro ? vastUtil.parseURLMacro(clickThroughMacro, variables) : null;
    }
  });

  adUnit.on('AdUserAcceptInvitation', function () {
    player.trigger('vpaid.AdUserAcceptInvitation');
    tracker.trackAcceptInvitation();
    tracker.trackAcceptInvitationLinear();
  });

  adUnit.on('AdUserClose', function () {
    player.trigger('vpaid.AdUserClose');
    tracker.trackClose();
    tracker.trackCloseLinear();
  });

  adUnit.on('AdUserMinimize', function () {
    player.trigger('vpaid.AdUserMinimize');
    tracker.trackCollapse();
  });

  adUnit.on('AdError', function () {
    player.trigger('vpaid.AdError');
    //NOTE: we track errors code 901, as noted in VAST 3.0
    tracker.trackErrorWithCode(901);
  });

  adUnit.on('AdVolumeChange', function () {
    player.trigger('vpaid.AdVolumeChange');
    var lastVolume = player.volume();
    adUnit.getAdVolume(function (error, currentVolume) {
      if (currentVolume === 0 && lastVolume > 0) {
        tracker.trackMute();
      }

      if (currentVolume > 0 && lastVolume === 0) {
        tracker.trackUnmute();
      }

      player.volume(currentVolume);
    });
  });

  var updateViewSize = resizeAd.bind(this, player, adUnit, this.VIEW_MODE);
  var updateViewSizeThrottled = utilities.throttle(updateViewSize, 100);
  var autoResize = this.settings.autoResize;

  if (autoResize) {
    dom.addEventListener(window, 'resize', updateViewSizeThrottled);
    dom.addEventListener(window, 'orientationchange', updateViewSizeThrottled);
  }

  player.on('vast.resize', updateViewSize);
  player.on('vpaid.pauseAd', pauseAdUnit);
  player.on('vpaid.resumeAd', resumeAdUnit);

  player.one('vpaid.adEnd', function () {
    player.off('vast.resize', updateViewSize);
    player.off('vpaid.pauseAd', pauseAdUnit);
    player.off('vpaid.resumeAd', resumeAdUnit);

    if (autoResize) {
      dom.removeEventListener(window, 'resize', updateViewSizeThrottled);
      dom.removeEventListener(window, 'orientationchange', updateViewSizeThrottled);
    }
  });

  next(null, adUnit, vastResponse);

  /*** Local Functions ***/
  function pauseAdUnit() {
    adUnit.pauseAd(utilities.noop);
  }

  function resumeAdUnit() {
    adUnit.resumeAd(utilities.noop);
  }
};

VPAIDIntegrator.prototype._addSkipButton = function (adUnit, vastResponse, next) {
  var skipButton;
  var player = this.player;

  adUnit.on('AdSkippableStateChange', updateSkipButtonState);

  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeSkipButton);

  next(null, adUnit, vastResponse);

  /*** Local function ***/
  function updateSkipButtonState() {
    player.trigger('vpaid.AdSkippableStateChange');
    adUnit.getAdSkippableState(function (error, isSkippable) {
      if (isSkippable) {
        if (!skipButton) {
          addSkipButton(player);
        }
      } else {
        removeSkipButton(player);
      }
    });
  }

  function addSkipButton(player) {
    skipButton = createSkipButton(player);
    player.el().appendChild(skipButton);
  }

  function removeSkipButton() {
    dom.remove(skipButton);
    skipButton = null;
  }

  function createSkipButton() {
    var skipButton = window.document.createElement("div");
    dom.addClass(skipButton, "vast-skip-button");
    dom.addClass(skipButton, "enabled");
    skipButton.innerHTML = "Skip ad";

    skipButton.onclick = function (e) {
      adUnit.skipAd(utilities.noop);//We skip the adUnit

      //We prevent event propagation to avoid problems with the clickThrough and so on
      if (window.Event.prototype.stopPropagation !== undefined) {
        e.stopPropagation();
      } else {
        return false;
      }
    };

    return skipButton;
  }
};

VPAIDIntegrator.prototype._linkPlayerControls = function (adUnit, vastResponse, next) {
  var that = this;
  linkVolumeControl(this.player, adUnit);
  linkFullScreenControl(this.player, adUnit, this.VIEW_MODE);

  next(null, adUnit, vastResponse);

  /*** Local functions ***/
  function linkVolumeControl(player, adUnit) {
    player.on('volumechange', updateAdUnitVolume);
    adUnit.on('AdVolumeChange', updatePlayerVolume);

    player.one('vpaid.adEnd', function () {
      player.off('volumechange', updateAdUnitVolume);
    });


    /*** local functions ***/
    function updateAdUnitVolume() {
      var vol = player.muted() ? 0 : player.volume();
      adUnit.setAdVolume(vol, logError);
    }

    function updatePlayerVolume() {
      player.trigger('vpaid.AdVolumeChange');
      adUnit.getAdVolume(function (error, vol) {
        if (error) {
          logError(error);
        } else {
          player.volume(vol);
        }
      });
    }
  }

  function linkFullScreenControl(player, adUnit, VIEW_MODE) {
    var updateViewSize = resizeAd.bind(that, player, adUnit, VIEW_MODE);

    player.on('fullscreenchange', updateViewSize);

    player.one('vpaid.adEnd', function () {
      player.off('fullscreenchange', updateViewSize);
    });
  }
};

VPAIDIntegrator.prototype._startAd = function (adUnit, vastResponse, next) {
  var player = this.player;

  adUnit.startAd(function (error) {
    if (!error) {
      player.trigger('vast.adStart');
    }
    next(error, adUnit, vastResponse);
  });
};

VPAIDIntegrator.prototype._finishPlaying = function (adUnit, vastResponse, next) {
  var player = this.player;
  adUnit.on('AdStopped', function () {
   player.trigger('vpaid.AdStopped');
   finishPlayingAd(null);
  });

  adUnit.on('AdError', function (error) {
    var errMsg = error? error.message : 'on VPAIDIntegrator, error while waiting for the adUnit to finish playing';
    finishPlayingAd(new VASTError(errMsg));
  });

  /*** local functions ***/
  function finishPlayingAd(error) {
    next(error, adUnit, vastResponse);
  }
};

VPAIDIntegrator.prototype._trackError = function trackError(response, errorCode) {
  vastUtil.track(response.errorURLMacros, {ERRORCODE: errorCode || 901});
};

function resizeAd(player, adUnit, VIEW_MODE) {
  var tech = player.el().querySelector('.vjs-tech');
  var dimension = dom.getDimension(tech);
  var MODE = player.isFullscreen() ? VIEW_MODE.FULLSCREEN : VIEW_MODE.NORMAL;
  adUnit.resizeAd(dimension.width, dimension.height, MODE, logError);
}

function logError(error) {
  if (error && console && console.log) {
    console.log('ERROR: ' + error.message, error);
  }
}

module.exports = VPAIDIntegrator;
},{"../../utils/async":39,"../../utils/dom":40,"../../utils/playerUtils":42,"../../utils/utilityFunctions":44,"../vast/VASTError":22,"../vast/VASTResponse":24,"../vast/VASTTracker":25,"../vast/vastUtil":29,"./VPAIDAdUnitWrapper":30}],34:[function(require,module,exports){
'use strict';

var dom = require('../../utils/dom');

var element = document.createElement('div');
element.className = 'vjs-ads-label vjs-control vjs-label-hidden';
element.innerHTML = 'Advertisement';

var AdsLabelFactory = function(baseComponent) {
  return {
    /** @constructor */
    init: function init(player, options) {
      options.el = element;
      baseComponent.call(this, player, options);

      // We asynchronously reposition the ads label element
      setTimeout(function () {
        var currentTimeComp = player.controlBar &&( player.controlBar.getChild("timerControls") || player.controlBar.getChild("currentTimeDisplay") );
        if(currentTimeComp) {
          player.controlBar.el().insertBefore(element, currentTimeComp.el());
        }
        dom.removeClass(element, 'vjs-label-hidden');
      }, 0);
    },

    el: function getElement() {
      return element;
    }
  };
};

module.exports = AdsLabelFactory;
},{"../../utils/dom":40}],35:[function(require,module,exports){
'use strict';

var baseVideoJsComponent = videojs.Component;

var AdsLabel = require('./ads-label')(baseVideoJsComponent);

videojs.AdsLabel = videojs.Component.extend(AdsLabel);

},{"./ads-label":34}],36:[function(require,module,exports){
'use strict';

/**
 * The component that shows a black screen until the ads plugin has decided if it can or it can not play the ad.
 *
 * Note: In case you wonder why instead of this black poster we don't just show the spinner loader.
 *       IOS devices do not work well with animations and the browser chrashes from time to time That is why we chose to
 *       have a secondary black poster.
 *
 *       It also makes it much more easier for the users of the plugin since it does not change the default behaviour of the
 *       spinner and the player works the same way with and without the plugin.
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
var element = document.createElement('div');

var BlackPosterFactory = function(baseComponent) {
  return {
    /** @constructor */
    init: function init(player, options) {
      options.el = element;
      element.className = 'vjs-black-poster';
      baseComponent.call(this, player, options);

      var posterImg = player.getChild('posterImage');

      //We need to do it asynchronously to be sure that the black poster el is on the dom.
      setTimeout(function() {
        if(posterImg && player && player.el()) {
          player.el().insertBefore(element, posterImg.el());
        }
      }, 0);
    },
    el: function getElement() {
      return element;
    }
  };
};

module.exports = BlackPosterFactory;
},{}],37:[function(require,module,exports){
'use strict';

var baseVideoJsComponent = videojs.Component;

var BlackPoster = require('./black-poster')(baseVideoJsComponent);

videojs.BlackPoster = videojs.Component.extend(BlackPoster);

},{"./black-poster":36}],38:[function(require,module,exports){
'use strict';

var VASTClient = require('../ads/vast/VASTClient');
var VASTError = require('../ads/vast/VASTError');
var vastUtil = require('../ads/vast/vastUtil');

var VASTIntegrator = require('../ads/vast/VASTIntegrator');
var VPAIDIntegrator = require('../ads/vpaid/VPAIDIntegrator');

var async = require('../utils/async');
var dom = require('../utils/dom');
var playerUtils = require('../utils/playerUtils');
var utilities = require('../utils/utilityFunctions');

module.exports = function VASTPlugin(options) {
  var snapshot;
  var player = this;
  var vast = new VASTClient();
  var adsCanceled = false;
  var defaultOpts = {
    // maximum amount of time in ms to wait to receive `adsready` from the ad
    // implementation after play has been requested. Ad implementations are
    // expected to load any dynamic libraries and make any requests to determine
    // ad policies for a video during this time.
    timeout: 500,

    //TODO:finish this IOS FIX
    //Whenever you play an add on IOS, the native player kicks in and we loose control of it. On very heavy pages the 'play' event
    // May occur after the video content has already started. This is wrong if you want to play a preroll ad that needs to happen before the user
    // starts watching the content. To prevent this usec
    iosPrerollCancelTimeout: 2000,

    // maximun amount of time for the ad to actually start playing. If this timeout gets
    // triggered the ads will be cancelled
    adCancelTimeout: 3000,

    // Boolean flag that configures the player to play a new ad before the user sees the video again
    // the current video
    playAdAlways: false,

    // Flag to enable or disable the ads by default.
    adsEnabled: true,

    // Boolean flag to enable or disable the resize with window.resize or orientationchange
    autoResize: true,

    // Path to the VPAID flash ad's loader
    vpaidFlashLoaderPath: '/VPAIDFlash.swf'
  };

  var settings = utilities.extend({}, defaultOpts, options || {});

  if(utilities.isUndefined(settings.adTagUrl) && utilities.isDefined(settings.url)){
    settings.adTagUrl = settings.url;
  }

  if (utilities.isString(settings.adTagUrl)) {
    settings.adTagUrl = utilities.echoFn(settings.adTagUrl);
  }

  if (utilities.isDefined(settings.adTagXML) && !utilities.isFunction(settings.adTagXML)) {
    return trackAdError(new VASTError('on VideoJS VAST plugin, the passed adTagXML option does not contain a function'));
  }

  if (!utilities.isDefined(settings.adTagUrl) && !utilities.isFunction(settings.adTagXML)) {
    return trackAdError(new VASTError('on VideoJS VAST plugin, missing adTagUrl on options object'));
  }

  vastUtil.runFlashSupportCheck(settings.vpaidFlashLoaderPath);// Necessary step for VPAIDFLASHClient to work.

  playerUtils.prepareForAds(player);

  if (settings.playAdAlways) {
    // No matter what happens we play a new ad before the user sees the video again.
    player.on('vast.contentEnd', function () {
      setTimeout(function () {
        player.trigger('vast.reset');
      }, 0);
    });
  }

  if (settings.prefetchAdTag) {
    tryToPlayPrerollAd();
  } else {
    player.on('vast.firstPlay', tryToPlayPrerollAd);
  }

  player.on('vast.reset', function () {
    //If we are reseting the plugin, we don't want to restore the content
    snapshot = null;
    cancelAds();
  });

  player.vast = {
    isEnabled: function () {
      return settings.adsEnabled;
    },

    enable: function () {
      settings.adsEnabled = true;
    },

    disable: function () {
      settings.adsEnabled = false;
    }
  };

  return player.vast;

  /**** Local functions ****/
  function tryToPlayPrerollAd() {
    //We remove the poster to prevent flickering whenever the content starts playing
    playerUtils.removeNativePoster(player);

    playerUtils.once(player, ['vast.adsCancel', 'vast.adEnd'], function () {
      removeAdUnit();
      restoreVideoContent();
    });

    async.waterfall([
      checkAdsEnabled,
      preparePlayerForAd,
      startAdCancelTimeout,
      getVastResponse,
      playPrerollAd
    ], function (error, response) {
      if (error) {
        trackAdError(error, response);
      } else {
        player.trigger('vast.adEnd');
      }
    });

    /*** Local functions ***/

    function removeAdUnit() {
      if (player.vast && player.vast.adUnit) {
        player.vast.adUnit = null; //We remove the adUnit
      }
    }

    function restoreVideoContent() {
      setupContentEvents();
      if (snapshot) {
        playerUtils.restorePlayerSnapshot(player, snapshot);
        snapshot = null;
      }
    }

    function setupContentEvents() {
      playerUtils.once(player, ['playing', 'vast.reset', 'vast.firstPlay'], function (evt) {
        if (evt.type !== 'playing') {
          return;
        }

        player.trigger('vast.contentStart');

        playerUtils.once(player, ['ended', 'vast.reset', 'vast.firstPlay'], function (evt) {
          if (evt.type === 'ended') {
            player.trigger('vast.contentEnd');
          }
        });
      });
    }

    function checkAdsEnabled(next) {
      if (settings.adsEnabled) {
        return next(null);
      }
      next(new VASTError('Ads are not enabled'));
    }

    function preparePlayerForAd(next) {
      if (canPlayPrerollAd()) {
        snapshot = playerUtils.getPlayerSnapshot(player);
        player.pause();
        addSpinnerIcon();

        if(player.paused()) {
          next(null);
        } else {
          playerUtils.once(player, ['playing'], function() {
            player.pause();
            next(null);
          });
        }
      } else {
        next(new VASTError('video content has been playing before preroll ad'));
      }
    }

    function canPlayPrerollAd() {
      return !utilities.isIPhone() || player.currentTime() <= settings.iosPrerollCancelTimeout;
    }

    function startAdCancelTimeout(next) {
      var adCancelTimeoutId;
      adsCanceled = false;

      adCancelTimeoutId = setTimeout(function () {
        trackAdError(new VASTError('timeout while waiting for the video to start playing', 402));
      }, settings.adCancelTimeout);

      playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], clearAdCancelTimeout);

      /*** local functions ***/
      function clearAdCancelTimeout() {
        if (adCancelTimeoutId) {
          clearTimeout(adCancelTimeoutId);
          adCancelTimeoutId = null;
        }
      }

      next(null);
    }

    function addSpinnerIcon() {
      dom.addClass(player.el(), 'vjs-vast-ad-loading');
      playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], removeSpinnerIcon);
    }

    function removeSpinnerIcon() {
      //IMPORTANT NOTE: We remove the spinnerIcon asynchronously to give time to the browser to start the video.
      // If we remove it synchronously we see a flash of the content video before the ad starts playing.
      setTimeout(function () {
        dom.removeClass(player.el(), 'vjs-vast-ad-loading');
      }, 100);
    }

  }

  function cancelAds() {
    player.trigger('vast.adsCancel');
    adsCanceled = true;
  }

  function playPrerollAd(callback) {
    async.waterfall([
      playAd
    ], callback);
  }

  function getVastResponse(callback) {
    vast.getVASTResponse(settings.adTagUrl ? settings.adTagUrl() : settings.adTagXML, callback);
  }

  function playAd(vastResponse, callback) {
    //TODO: Find a better way to stop the play. The 'playPrerollWaterfall' ends in an inconsistent situation
    //If the state is not 'preroll?' it means the ads were canceled therefore, we break the waterfall
    if (adsCanceled) {
      return;
    }

    var adIntegrator = isVPAID(vastResponse) ? new VPAIDIntegrator(player, settings) : new VASTIntegrator(player);
    var adFinished = false;

    playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], function (evt) {
      if (evt.type === 'vast.adStart') {
        addAdsLabel();
      }
    });

    playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeAdsLabel);

    if (utilities.isIDevice()) {
      preventManualProgress();
    }

    player.vast.vastResponse = vastResponse;
    
    if (settings.prefetchAdTag) {
      player.one('play', _playAd);
    } else {
      _playAd();
    }

    function _playAd() {
      player.vast.adUnit = adIntegrator.playAd(vastResponse, callback);
    }

    /*** Local functions ****/
    function addAdsLabel() {
      if (adFinished || player.controlBar.getChild('AdsLabel')) {
        return;
      }

      player.controlBar.addChild('AdsLabel');
    }

    function removeAdsLabel() {
      player.controlBar.removeChild('AdsLabel');
      adFinished = true;
    }

    function preventManualProgress() {
      //IOS video clock is very unreliable and we need a 3 seconds threshold to ensure that the user forwarded/rewound the ad
      var PROGRESS_THRESHOLD = 3;
      var previousTime = 0;
      var skipad_attempts = 0;

      player.on('timeupdate', preventAdSeek);
      player.on('ended', preventAdSkip);

      playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel', 'vast.adError'], stopPreventManualProgress);

      /*** Local functions ***/
      function preventAdSkip() {
        // Ignore ended event if the Ad time was not 'near' the end
        // and revert time to the previous 'valid' time
        if ((player.duration() - previousTime) > PROGRESS_THRESHOLD) {
          player.pause(true); // this reduce the video jitter if the IOS skip button is pressed
          player.play(true); // we need to trigger the play to put the video element back in a valid state
          player.currentTime(previousTime);
        }
      }

      function preventAdSeek() {
        var currentTime = player.currentTime();
        var progressDelta = Math.abs(currentTime - previousTime);
        if (progressDelta > PROGRESS_THRESHOLD) {
          skipad_attempts += 1;
          if (skipad_attempts >= 2) {
            player.pause(true);
          }
          player.currentTime(previousTime);
        } else {
          previousTime = currentTime;
        }
      }

      function stopPreventManualProgress() {
        player.off('timeupdate', preventAdSeek);
        player.off('ended', preventAdSkip);
      }
    }
  }

  function trackAdError(error, vastResponse) {
    player.trigger({type: 'vast.adError', error: error});
    cancelAds();
    if (console && console.log) {
      console.log('AD ERROR:', error.message, error, vastResponse);
    }
  }

  function isVPAID(vastResponse) {
    var i, len;
    var mediaFiles = vastResponse.mediaFiles;
    for (i = 0, len = mediaFiles.length; i < len; i++) {
      if (vastUtil.isVPAID(mediaFiles[i])) {
        return true;
      }
    }
    return false;
  }
};

},{"../ads/vast/VASTClient":21,"../ads/vast/VASTError":22,"../ads/vast/VASTIntegrator":23,"../ads/vast/vastUtil":29,"../ads/vpaid/VPAIDIntegrator":33,"../utils/async":39,"../utils/dom":40,"../utils/playerUtils":42,"../utils/utilityFunctions":44}],39:[function(require,module,exports){
//Small subset of async

var utilities = require('./utilityFunctions');

var async = {};

async.setImmediate = function (fn) {
  setTimeout(fn, 0);
};

async.iterator = function (tasks) {
  var makeCallback = function (index) {
    var fn = function () {
      if (tasks.length) {
        tasks[index].apply(null, arguments);
      }
      return fn.next();
    };
    fn.next = function () {
      return (index < tasks.length - 1) ? makeCallback(index + 1) : null;
    };
    return fn;
  };
  return makeCallback(0);
};


async.waterfall = function (tasks, callback) {
  callback = callback || function () { };
  if (!utilities.isArray(tasks)) {
    var err = new Error('First argument to waterfall must be an array of functions');
    return callback(err);
  }
  if (!tasks.length) {
    return callback();
  }
  var wrapIterator = function (iterator) {
    return function (err) {
      if (err) {
        callback.apply(null, arguments);
        callback = function () {
        };
      }
      else {
        var args = Array.prototype.slice.call(arguments, 1);
        var next = iterator.next();
        if (next) {
          args.push(wrapIterator(next));
        }
        else {
          args.push(callback);
        }
        async.setImmediate(function () {
          iterator.apply(null, args);
        });
      }
    };
  };
  wrapIterator(async.iterator(tasks))();
};

async.when = function (condition, callback) {
  if (!utilities.isFunction(callback)) {
    throw new Error("async.when error: missing callback argument");
  }

  var isAllowed = utilities.isFunction(condition) ? condition : function () {
    return !!condition;
  };

  return function () {
    var args = utilities.arrayLikeObjToArray(arguments);
    var next = args.pop();

    if (isAllowed.apply(null, args)) {
      return callback.apply(this, arguments);
    }

    args.unshift(null);
    return next.apply(null, args);
  };
};

module.exports = async;


},{"./utilityFunctions":44}],40:[function(require,module,exports){
'use strict';

var utilities = require('./utilityFunctions');

var dom = {};

dom.isVisible = function isVisible(el) {
  var style = window.getComputedStyle(el);
  return style.visibility !== 'hidden';
};

dom.isHidden = function isHidden(el) {
  var style = window.getComputedStyle(el);
  return style.display === 'none';
};

dom.isShown = function isShown(el) {
  return !dom.isHidden(el);
};

dom.hide = function hide(el) {
  el.__prev_style_display_ = el.style.display;
  el.style.display = 'none';
};

dom.show = function show(el) {
  if (dom.isHidden(el)) {
    el.style.display = el.__prev_style_display_;
  }
  el.__prev_style_display_ = undefined;
};

dom.hasClass = function hasClass(el, cssClass) {
  var classes, i, len;

  if (utilities.isNotEmptyString(cssClass)) {
    if (el.classList) {
      return el.classList.contains(cssClass);
    }

    classes = utilities.isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\s+/) : [];
    cssClass = (cssClass || '');

    for (i = 0, len = classes.length; i < len; i += 1) {
      if (classes[i] === cssClass) {
        return true;
      }
    }
  }
  return false;
};

dom.addClass = function (el, cssClass) {
  var classes;

  if (utilities.isNotEmptyString(cssClass)) {
    if (el.classList) {
      return el.classList.add(cssClass);
    }

    classes = utilities.isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\s+/) : [];
    if (utilities.isString(cssClass) && utilities.isNotEmptyString(cssClass.replace(/\s+/, ''))) {
      classes.push(cssClass);
      el.setAttribute('class', classes.join(' '));
    }
  }
};

dom.removeClass = function (el, cssClass) {
  var classes;

  if (utilities.isNotEmptyString(cssClass)) {
    if (el.classList) {
      return el.classList.remove(cssClass);
    }

    classes = utilities.isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\s+/) : [];
    var newClasses = [];
    var i, len;
    if (utilities.isString(cssClass) && utilities.isNotEmptyString(cssClass.replace(/\s+/, ''))) {

      for (i = 0, len = classes.length; i < len; i += 1) {
        if (cssClass !== classes[i]) {
          newClasses.push(classes[i]);
        }
      }
      el.setAttribute('class', newClasses.join(' '));
    }
  }
};

dom.addEventListener = function addEventListener(el, type, handler) {
  if(utilities.isArray(el)){
    utilities.forEach(el, function(e) {
      dom.addEventListener(e, type, handler);
    });
    return;
  }

  if(utilities.isArray(type)){
    utilities.forEach(type, function(t) {
      dom.addEventListener(el, t, handler);
    });
    return;
  }

  if (el.addEventListener) {
    el.addEventListener(type, handler, false);
  } else if (el.attachEvent) {
    // WARNING!!! this is a very naive implementation !
    // the event object that should be passed to the handler
    // would not be there for IE8
    // we should use "window.event" and then "event.srcElement"
    // instead of "event.target"
    el.attachEvent("on" + type, handler);
  }
};

dom.removeEventListener = function removeEventListener(el, type, handler) {
  if(utilities.isArray(el)){
    utilities.forEach(el, function(e) {
      dom.removeEventListener(e, type, handler);
    });
    return;
  }

  if(utilities.isArray(type)){
    utilities.forEach(type, function(t) {
      dom.removeEventListener(el, t, handler);
    });
    return;
  }

  if (el.removeEventListener) {
    el.removeEventListener(type, handler, false);
  } else if (el.detachEvent) {
    el.detachEvent("on" + type, handler);
  } else {
    el["on" + type] = null;
  }
};

dom.dispatchEvent = function dispatchEvent(el, event) {
  if (el.dispatchEvent) {
    el.dispatchEvent(event);
  } else {
    el.fireEvent("on" + event.eventType, event);
  }
};

dom.isDescendant = function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

dom.getTextContent = function getTextContent(el){
  return el.textContent || el.text;
};

dom.prependChild = function prependChild(parent, child) {
  if(child.parentNode){
    child.parentNode.removeChild(child);
  }
  return parent.insertBefore(child, parent.firstChild);
};

dom.remove = function removeNode(node){
  if(node && node.parentNode){
    node.parentNode.removeChild(node);
  }
};

dom.isDomElement = function isDomElement(o) {
  return o instanceof Element;
};

dom.click = function(el, handler) {
  dom.addEventListener(el, 'click', handler);
};

dom.once = function(el, type, handler) {
  function handlerWrap() {
    handler.apply(null, arguments);
    dom.removeEventListener(el, type, handlerWrap);
  }

  dom.addEventListener(el, type, handlerWrap);
};

//Note: there is no getBoundingClientRect on iPad so we need a fallback
dom.getDimension = function getDimension(element) {
  var rect;

  //On IE9 and below getBoundingClientRect does not work consistently
  if(!utilities.isOldIE() && element.getBoundingClientRect) {
    rect = element.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height
    };
  }

  return {
    width: element.offsetWidth,
    height: element.offsetHeight
  };
};

module.exports = dom;
},{"./utilityFunctions":44}],41:[function(require,module,exports){
'use strict';

var urlUtils = require('./urlUtils');
var utilities = require('./utilityFunctions');

function HttpRequestError(message) {
  this.message = 'HttpRequest Error: ' + (message || '');
}
HttpRequestError.prototype = new Error();
HttpRequestError.prototype.name = "HttpRequest Error";

function HttpRequest(createXhr) {
  if (!utilities.isFunction(createXhr)) {
    throw new HttpRequestError('Missing XMLHttpRequest factory method');
  }

  this.createXhr = createXhr;
}

HttpRequest.prototype.run = function (method, url, callback, options) {
  sanityCheck(url, callback, options);
  var timeout, timeoutId;
  var xhr = this.createXhr();
  options = options || {};
  timeout = utilities.isNumber(options.timeout) ? options.timeout : 0;

  xhr.open(method, urlUtils.urlParts(url).href, true);

  if (options.headers) {
    setHeaders(xhr, options.headers);
  }

  if (options.withCredentials) {
    xhr.withCredentials = true;
  }

  xhr.onload = function () {
    var statusText, response, status;

    /**
     * The only way to do a secure request on IE8 and IE9 is with the XDomainRequest object. Unfortunately, microsoft is
     * so nice that decided that the status property and the 'getAllResponseHeaders' method where not needed so we have to
     * fake them. If the request gets done with an XDomainRequest instance, we will assume that there are no headers and
     * the status will always be 200. If you don't like it, DO NOT USE ANCIENT BROWSERS!!!
     *
     * For mor info go to: https://msdn.microsoft.com/en-us/library/cc288060(v=vs.85).aspx
     */
    if (!xhr.getAllResponseHeaders) {
      xhr.getAllResponseHeaders = function () {
        return null;
      };
    }

    if (!xhr.status) {
      xhr.status = 200;
    }

    if (utilities.isDefined(timeoutId)) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }

    statusText = xhr.statusText || '';

    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
    // response/responseType properties were introduced in XHR Level2 spec (supported by IE10)
    response = ('response' in xhr) ? xhr.response : xhr.responseText;

    // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
    status = xhr.status === 1223 ? 204 : xhr.status;

    callback(
      status,
      response,
      xhr.getAllResponseHeaders(),
      statusText);
  };

  xhr.onerror = requestError;
  xhr.onabort = requestError;

  xhr.send();

  if (timeout > 0) {
    timeoutId = setTimeout(function () {
      xhr && xhr.abort();
    }, timeout);
  }

  function sanityCheck(url, callback, options) {
    if (!utilities.isString(url) || utilities.isEmptyString(url)) {
      throw new HttpRequestError("Invalid url '" + url + "'");
    }

    if (!utilities.isFunction(callback)) {
      throw new HttpRequestError("Invalid handler '" + callback + "' for the http request");
    }

    if (utilities.isDefined(options) && !utilities.isObject(options)) {
      throw new HttpRequestError("Invalid options map '" + options + "'");
    }
  }

  function setHeaders(xhr, headers) {
    utilities.forEach(headers, function (value, key) {
      if (utilities.isDefined(value)) {
        xhr.setRequestHeader(key, value);
      }
    });
  }

  function requestError() {
    callback(-1, null, null, '');
  }
};

HttpRequest.prototype.get = function (url, callback, options) {
  this.run('GET', url, processResponse, options);

  function processResponse(status, response, headersString, statusText) {
    if (isSuccess(status)) {
      callback(null, response, status, headersString, statusText);
    } else {
      callback(new HttpRequestError(statusText), response, status, headersString, statusText);
    }
  }

  function isSuccess(status) {
    return 200 <= status && status < 300;
  }
};

function createXhr() {
  var xhr = new XMLHttpRequest();
  if (!("withCredentials" in xhr)) {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
  }
  return xhr;
}

var http = new HttpRequest(createXhr);

module.exports = {
  http: http,
  HttpRequest: HttpRequest,
  HttpRequestError: HttpRequestError,
  createXhr: createXhr
};

},{"./urlUtils":43,"./utilityFunctions":44}],42:[function(require,module,exports){
'use strict';

var dom = require('./dom');
var utilities = require('./utilityFunctions');

var playerUtils = {};

/**
 * Returns an object that captures the portions of player state relevant to
 * video playback. The result of this function can be passed to
 * restorePlayerSnapshot with a player to return the player to the state it
 * was in when this function was invoked.
 * @param {object} player The videojs player object
 */
playerUtils.getPlayerSnapshot = function getPlayerSnapshot(player) {
  var tech = player.el().querySelector('.vjs-tech');

  var snapshot = {
    ended: player.ended(),
    src: player.currentSrc(),
    currentTime: player.currentTime(),
    type: player.currentType(),
    playing: !player.paused(),
    suppressedTracks: getSuppressedTracks(player)
  };

  if (tech) {
    snapshot.nativePoster = tech.poster;
    snapshot.style = tech.getAttribute('style');
  }
  return snapshot;

  /**** Local Functions ****/
  function getSuppressedTracks(player) {
    var tracks = player.remoteTextTracks ? player.remoteTextTracks() : [];

    if (tracks && utilities.isArray(tracks.tracks_)) {
      tracks = tracks.tracks_;
    }

    if (!utilities.isArray(tracks)) {
      tracks = [];
    }

    var suppressedTracks = [];
    tracks.forEach(function (track) {
      suppressedTracks.push({
        track: track,
        mode: track.mode
      });
      track.mode = 'disabled';
    });

    return suppressedTracks;
  }
};

/**
 * Attempts to modify the specified player so that its state is equivalent to
 * the state of the snapshot.
 * @param {object} snapshot - the player state to apply
 */
playerUtils.restorePlayerSnapshot = function restorePlayerSnapshot(player, snapshot) {
  var tech = player.el().querySelector('.vjs-tech');
  var attempts = 20; // the number of remaining attempts to restore the snapshot

  if (snapshot.nativePoster) {
    tech.poster = snapshot.nativePoster;
  }

  if ('style' in snapshot) {
    // overwrite all css style properties to restore state precisely
    tech.setAttribute('style', snapshot.style || '');
  }

  if (hasSrcChanged(player, snapshot)) {

    // on ios7, fiddling with textTracks too early will cause safari to crash
    player.one('contentloadedmetadata', restoreTracks);

    player.one('canplay', tryToResume);
    ensureCanplayEvtGetsFired();

    // if the src changed for ad playback, reset it
    player.src({src: snapshot.src, type: snapshot.type});

    // safari requires a call to `load` to pick up a changed source
    player.load();

  } else {
    restoreTracks();

    if (snapshot.playing) {
      player.play();
    }
  }

  /*** Local Functions ***/

  /**
   * Sometimes firefox does not trigger the 'canplay' evt.
   * This code ensure that it always gets triggered triggered.
   */
  function ensureCanplayEvtGetsFired() {
    var timeoutId = setTimeout(function() {
      player.trigger('canplay');
    }, 1000);

    player.one('canplay', function(){
      clearTimeout(timeoutId);
    });
  }

  /**
   * Determine whether the player needs to be restored to its state
   * before ad playback began. With a custom ad display or burned-in
   * ads, the content player state hasn't been modified and so no
   * restoration is required
   */
  function hasSrcChanged(player, snapshot) {
    if (player.src()) {
      return player.src() !== snapshot.src;
    }
    // the player was configured through source element children
    return player.currentSrc() !== snapshot.src;
  }

  function restoreTracks() {
    var suppressedTracks = snapshot.suppressedTracks;
    suppressedTracks.forEach(function (trackSnapshot) {
      trackSnapshot.track.mode = trackSnapshot.mode;
    });
  }

  /**
   * Determine if the video element has loaded enough of the snapshot source
   * to be ready to apply the rest of the state
   */
  function tryToResume() {

    // if some period of the video is seekable, resume playback
    // otherwise delay a bit and then check again unless we're out of attempts

    if (!playerUtils.isReadyToResume(player) && attempts--) {
      setTimeout(tryToResume, 50);
    } else {
      try {
        if(player.currentTime() !== snapshot.currentTime) {
          if (snapshot.playing) { // if needed restore playing status after seek completes
            player.one('seeked', function() {
              player.play();
            });
          }
          player.currentTime(snapshot.currentTime);

        } else if (snapshot.playing) {
          // if needed and no seek has been performed, restore playing status immediately
          player.play();
        }

      } catch (e) {
        videojs.log.warn('Failed to resume the content after an advertisement', e);
      }
    }
  }
};

playerUtils.isReadyToResume = function (player) {

  if (player.readyState() > 1) {
    // some browsers and media aren't "seekable".
    // readyState greater than 1 allows for seeking without exceptions
    return true;
  }

  if (player.seekable() === undefined) {
    // if the player doesn't expose the seekable time ranges, try to
    // resume playback immediately
    return true;
  }

  if (player.seekable().length > 0) {
    // if some period of the video is seekable, resume playback
    return true;
  }

  return false;
};

/**
 * This function prepares the player to display ads.
 * Adding convenience events like the 'vast.firsPlay' that gets fired when the video is first played
 * and ads the blackPoster to the player to prevent content from being displayed before the preroll ad.
 *
 * @param player
 */
playerUtils.prepareForAds = function (player) {
  var blackPoster = player.addChild('blackPoster');
  var _firstPlay = true;
  var volumeSnapshot;


  monkeyPatchPlayerApi();

  player.on('play', tryToTriggerFirstPlay);
  player.on('vast.reset', resetFirstPlay);//Every time we change the sources we reset the first play.
  player.on('vast.firstPlay', restoreContentVolume);
  player.on('error', hideBlackPoster);//If there is an error in the player we remove the blackposter to show the err msg
  player.on('vast.adStart', hideBlackPoster);
  player.on('vast.adsCancel', hideBlackPoster);
  player.on('vast.adError', hideBlackPoster);
  player.on('vast.adStart', addStyles);
  player.on('vast.adEnd', removeStyles);
  player.on('vast.adsCancel', removeStyles);

  /*** Local Functions ***/

  /**
   What this function does is ugly and horrible and I should think twice before calling myself a good developer. With that said,
   it is the best solution I could find to mute the video until the 'play' event happens (on mobile devices) and the plugin can decide whether
   to play the ad or not.

   We also need this monkeypatch to be able to pause and resume an ad using the player's API

   If you have a better solution please do tell me.
   */
  function monkeyPatchPlayerApi() {

    /**
     * Monkey patch needed to handle firstPlay and resume of playing ad.
     *
     * @param callOrigPlay necessary flag to prevent infinite loop when you are restoring a VAST ad.
     * @returns {player}
     */
    var origPlay = player.play;
    player.play = function (callOrigPlay) {
      var that = this;

      if (isFirstPlay()) {
        firstPlay();
      } else {
        resume(callOrigPlay);
      }

      return this;

      /*** local functions ***/
      function firstPlay() {
        if (!utilities.isIPhone()) {
          volumeSnapshot = saveVolumeSnapshot();
          player.muted(true);
        }

        origPlay.apply(that, arguments);
      }

      function resume(callOrigPlay) {
        if (isAdPlaying() && !callOrigPlay) {
          player.vast.adUnit.resumeAd();
        } else {
          origPlay.apply(that, arguments);
        }
      }
    };


    /**
     * Needed monkey patch to handle pause of playing ad.
     *
     * @param callOrigPlay necessary flag to prevent infinite loop when you are pausing a VAST ad.
     * @returns {player}
     */
    var origPause = player.pause;
    player.pause = function (callOrigPause) {
      if (isAdPlaying() && !callOrigPause) {
        player.vast.adUnit.pauseAd();
      } else {
        origPause.apply(this, arguments);
      }
      return this;
    };


    /**
     * Needed monkey patch to handle paused state of the player when ads are playing.
     *
     * @param callOrigPlay necessary flag to prevent infinite loop when you are pausing a VAST ad.
     * @returns {player}
     */
    var origPaused = player.paused;
    player.paused = function (callOrigPaused) {
      if (isAdPlaying() && !callOrigPaused) {
        return player.vast.adUnit.isPaused();
      }
      return origPaused.apply(this, arguments);
    };
  }

  function isAdPlaying() {
    return player.vast && player.vast.adUnit;
  }

  function tryToTriggerFirstPlay() {
    if (isFirstPlay()) {
      _firstPlay = false;
      player.trigger('vast.firstPlay');
    }
  }

  function resetFirstPlay() {
    _firstPlay = true;
    blackPoster.show();
    restoreContentVolume();
  }

  function isFirstPlay() {
    return _firstPlay;
  }

  function saveVolumeSnapshot() {
    return {
      muted: player.muted(),
      volume: player.volume()
    };
  }

  function restoreContentVolume() {
    if (volumeSnapshot) {
      player.currentTime(0);
      restoreVolumeSnapshot(volumeSnapshot);
      volumeSnapshot = null;
    }
  }

  function restoreVolumeSnapshot(snapshot) {
    if (utilities.isObject(snapshot)) {
      player.volume(snapshot.volume);
      player.muted(snapshot.muted);
    }
  }

  function hideBlackPoster() {
    if (!dom.hasClass(blackPoster.el(), 'vjs-hidden')) {
      blackPoster.hide();
    }
  }

  function addStyles() {
    dom.addClass(player.el(), 'vjs-ad-playing');
  }

  function removeStyles() {
    dom.removeClass(player.el(), 'vjs-ad-playing');
  }
};

/**
 * Remove the poster attribute from the video element tech, if present. When
 * reusing a video element for multiple videos, the poster image will briefly
 * reappear while the new source loads. Removing the attribute ahead of time
 * prevents the poster from showing up between videos.
 * @param {object} player The videojs player object
 */
playerUtils.removeNativePoster = function (player) {
  var tech = player.el().querySelector('.vjs-tech');
  if (tech) {
    tech.removeAttribute('poster');
  }
};

/**
 * Helper function to listen to many events until one of them gets fired, then we
 * execute the handler and unsubscribe all the event listeners;
 *
 * @param player specific player from where to listen for the events
 * @param events array of events
 * @param handler function to execute once one of the events fires
 */
playerUtils.once = function once(player, events, handler) {
  function listener() {
    handler.apply(null, arguments);

    events.forEach(function (event) {
      player.off(event, listener);
    });
  }

  events.forEach(function (event) {
    player.on(event, listener);
  });
};


module.exports = playerUtils;
},{"./dom":40,"./utilityFunctions":44}],43:[function(require,module,exports){
'use strict';

var utilities = require('./utilityFunctions');

/**
 *
 * IMPORTANT NOTE: This function comes from angularJs and was originally called urlResolve
 *                 you can take a look at the original code here https://github.com/angular/angular.js/blob/master/src/ng/urlUtils.js
 *
 * Implementation Notes for non-IE browsers
 * ----------------------------------------
 * Assigning a URL to the href property of an anchor DOM node, even one attached to the DOM,
 * results both in the normalizing and parsing of the URL.  Normalizing means that a relative
 * URL will be resolved into an absolute URL in the context of the application document.
 * Parsing means that the anchor node's host, hostname, protocol, port, pathname and related
 * properties are all populated to reflect the normalized URL.  This approach has wide
 * compatibility - Safari 1+, Mozilla 1+, Opera 7+,e etc.  See
 * http://www.aptana.com/reference/html/api/HTMLAnchorElement.html
 *
 * Implementation Notes for IE
 * ---------------------------
 * IE >= 8 and <= 10 normalizes the URL when assigned to the anchor node similar to the other
 * browsers.  However, the parsed components will not be set if the URL assigned did not specify
 * them.  (e.g. if you assign a.href = "foo", then a.protocol, a.host, etc. will be empty.)  We
 * work around that by performing the parsing in a 2nd step by taking a previously normalized
 * URL (e.g. by assigning to a.href) and assigning it a.href again.  This correctly populates the
 * properties such as protocol, hostname, port, etc.
 *
 * IE7 does not normalize the URL when assigned to an anchor node.  (Apparently, it does, if one
 * uses the inner HTML approach to assign the URL as part of an HTML snippet -
 * http://stackoverflow.com/a/472729)  However, setting img[src] does normalize the URL.
 * Unfortunately, setting img[src] to something like "javascript:foo" on IE throws an exception.
 * Since the primary usage for normalizing URLs is to sanitize such URLs, we can't use that
 * method and IE < 8 is unsupported.
 *
 * References:
 *   http://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement
 *   http://www.aptana.com/reference/html/api/HTMLAnchorElement.html
 *   http://url.spec.whatwg.org/#urlutils
 *   https://github.com/angular/angular.js/pull/2902
 *   http://james.padolsey.com/javascript/parsing-urls-with-the-dom/
 *
 * @kind function
 * @param {string} url The URL to be parsed.
 * @description Normalizes and parses a URL.
 * @returns {object} Returns the normalized URL as a dictionary.
 *
 *   | member name   | Description    |
 *   |---------------|----------------|
 *   | href          | A normalized version of the provided URL if it was not an absolute URL |
 *   | protocol      | The protocol including the trailing colon                              |
 *   | host          | The host and port (if the port is non-default) of the normalizedUrl    |
 *   | search        | The search params, minus the question mark                             |
 *   | hash          | The hash string, minus the hash symbol
 *   | hostname      | The hostname
 *   | port          | The port, without ":"
 *   | pathname      | The pathname, beginning with "/"
 *
 */

var urlParsingNode = document.createElement("a");
/**
 * documentMode is an IE-only property
 * http://msdn.microsoft.com/en-us/library/ie/cc196988(v=vs.85).aspx
 */
var msie = document.documentMode;

function urlParts(url) {
  var href = url;

  if (msie) {
    // Normalize before parse.  Refer Implementation Notes on why this is
    // done in two steps on IE.
    urlParsingNode.setAttribute("href", href);
    href = urlParsingNode.href;
  }

  urlParsingNode.setAttribute('href', href);

  // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
  return {
    href: urlParsingNode.href,
    protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
    host: urlParsingNode.host,
    search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
    hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
    hostname: urlParsingNode.hostname,
    port: utilities.isNotEmptyString(urlParsingNode.port)? urlParsingNode.port: 80,
    pathname: (urlParsingNode.pathname.charAt(0) === '/')
      ? urlParsingNode.pathname
      : '/' + urlParsingNode.pathname
  };
}


/**
 * This function accepts a query string (search part of a url) and returns a dictionary with
 * the different key value pairs
 * @param {string} qs queryString
 */
function queryStringToObj(qs, cond) {
  var pairs, qsObj;

  cond = utilities.isFunction(cond)? cond : function() {
    return true;
  };

  qs = qs.trim().replace(/^\?/, '');
  pairs = qs.split('&');
  qsObj = {};

  utilities.forEach(pairs, function (pair) {
    var keyValue, key, value;
    if (pair !== '') {
      keyValue = pair.split('=');
      key = keyValue[0];
      value = keyValue[1];
      if(cond(key, value)){
        qsObj[key] = value;
      }
    }
  });

  return qsObj;
}

/**
 * This function accepts an object and serializes it into a query string without the leading '?'
 * @param obj
 * @returns {string}
 */
function objToQueryString(obj) {
  var pairs = [];
  utilities.forEach(obj, function (value, key) {
    pairs.push(key + '=' + value);
  });
  return pairs.join('&');
}

module.exports = {
  urlParts: urlParts,
  queryStringToObj: queryStringToObj,
  objToQueryString: objToQueryString
};

},{"./utilityFunctions":44}],44:[function(require,module,exports){
/*jshint unused:false */
"use strict";

var NODE_TYPE_ELEMENT = 1;
var SNAKE_CASE_REGEXP = /[A-Z]/g;
var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i;
/*jslint maxlen: 500 */
var ISO8086_REGEXP = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;


function noop(){ }

function isNull(o) {
  return o === null;
}

function isDefined(o){
  return o !== undefined;
}

function isUndefined(o){
  return o === undefined;
}

function isObject(obj) {
  return typeof obj === 'object';
}

function isFunction(str){
  return typeof str === 'function';
}

function isNumber(num){
  return typeof num === 'number';
}

function isWindow(obj) {
  return utilities.isObject(obj) && obj.window === obj;
}

function isArray(array){
  return Object.prototype.toString.call( array ) === '[object Array]';
}

function isArrayLike(obj) {
  if (obj === null || utilities.isWindow(obj) || utilities.isFunction(obj) || utilities.isUndefined(obj)) {
    return false;
  }

  var length = obj.length;

  if (obj.nodeType === NODE_TYPE_ELEMENT && length) {
    return true;
  }

  return utilities.isString(obj) || utilities.isArray(obj) || length === 0 ||
    typeof length === 'number' && length > 0 && (length - 1) in obj;
}

function isString(str){
  return typeof str === 'string';
}

function isEmptyString(str) {
  return utilities.isString(str) && str.length === 0;
}

function isNotEmptyString(str) {
  return utilities.isString(str) && str.length !== 0;
}

function arrayLikeObjToArray(args) {
  return Array.prototype.slice.call(args);
}

function forEach(obj, iterator, context) {
  var key, length;
  if (obj) {
    if (isFunction(obj)) {
      for (key in obj) {
        // Need to check if hasOwnProperty exists,
        // as on IE8 the result of querySelectorAll is an object without a hasOwnProperty function
        if (key !== 'prototype' && key !== 'length' && key !== 'name' && (!obj.hasOwnProperty || obj.hasOwnProperty(key))) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else if (isArray(obj)) {
      var isPrimitive = typeof obj !== 'object';
      for (key = 0, length = obj.length; key < length; key++) {
        if (isPrimitive || key in obj) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else if (obj.forEach && obj.forEach !== forEach) {
      obj.forEach(iterator, context, obj);
    } else {
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    }
  }
  return obj;
}

function snake_case(name, separator) {
  separator = separator || '_';
  return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
    return (pos ? separator : '') + letter.toLowerCase();
  });
}

function isValidEmail(email){
  if(!utilities.isString(email)){
    return false;
  }

  return EMAIL_REGEXP.test(email.trim());
}

function extend (obj) {
  var arg, i, k;
  for (i = 1; i < arguments.length; i++) {
    arg = arguments[i];
    for (k in arg) {
      if (arg.hasOwnProperty(k)) {
        if(isObject(obj[k]) && !isNull(obj[k]) && isObject(arg[k])){
          obj[k] = extend({}, obj[k], arg[k]);
        }else {
          obj[k] = arg[k];
        }
      }
    }
  }
  return obj;
}

function capitalize(s){
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function decapitalize(s) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

/**
 * This method works the same way array.prototype.map works but if the transformer returns undefine, then
 * it won't be added to the transformed Array.
 */
function transformArray(array, transformer) {
  var transformedArray = [];

  array.forEach(function(item, index){
    var transformedItem = transformer(item, index);
    if(utilities.isDefined(transformedItem)) {
      transformedArray.push(transformedItem);
    }
  });

  return transformedArray;
}

function toFixedDigits(num, digits) {
  var formattedNum = num + '';
  digits = utilities.isNumber(digits) ? digits : 0;
  num = utilities.isNumber(num) ? num : parseInt(num, 10);
  if(utilities.isNumber(num) && !isNaN(num)){
    formattedNum = num + '';
    while(formattedNum.length < digits) {
      formattedNum = '0' + formattedNum;
    }
    return formattedNum;
  }
  return NaN + '';
}

function throttle(callback, delay) {
  var previousCall = new Date().getTime() - (delay + 1);
  return function() {
    var time = new Date().getTime();
    if ((time - previousCall) >= delay) {
      previousCall = time;
      callback.apply(this, arguments);
    }
  };
}

function debounce (callback, wait) {
  var timeoutId;

  return function (){
    if(timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function(){
      callback.apply(this, arguments);
      timeoutId = undefined;
    }, wait);
  };
}

// a function designed to blow up the stack in a naive way
// but it is ok for videoJs children components
function treeSearch(root, getChildren, found){
  var children = getChildren(root);
  for (var i = 0; i < children.length; i++){
    if (found(children[i])) {
      return children[i];
    }
    else {
      var el = treeSearch(children[i], getChildren, found);
      if (el){
        return el;
      }
    }
  }
}

function echoFn(val) {
  return function () {
    return val;
  };
}

//Note: Supported formats come from http://www.w3.org/TR/NOTE-datetime
// and the iso8601 regex comes from http://www.pelagodesign.com/blog/2009/05/20/iso-8601-date-validation-that-doesnt-suck/
function isISO8601(value) {
  if(utilities.isNumber(value)){
    value = value + '';  //we make sure that we are working with strings
  }

  if(!utilities.isString(value)){
    return false;
  }

  return ISO8086_REGEXP.test(value.trim());
}

/**
 * Checks if the Browser is IE9 and below
 * @returns {boolean}
 */
function isOldIE() {
  var version = utilities.getInternetExplorerVersion(navigator);
  if (version === -1) {
    return false;
  }

  return version < 10;
}

/**
 * Returns the version of Internet Explorer or a -1 (indicating the use of another browser).
 * Source: https://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx
 * @returns {number} the version of Internet Explorer or a -1 (indicating the use of another browser).
 */
function getInternetExplorerVersion(navigator) {
  var rv = -1;

  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    var res = re.exec(ua);
    if (res !== null) {
      rv = parseFloat(res[1]);
    }
  }

  return rv;
}

/*** Mobile Utility functions ***/
function isIDevice() {
  return /iP(hone|ad)/.test(utilities._UA);
}

function isMobile() {
  return /iP(hone|ad|od)|Android|Windows Phone/.test(utilities._UA);
}

function isIPhone() {
  return /iP(hone|od)/.test(utilities._UA);
}

function isAndroid() {
  return /Android/.test(utilities._UA);
}

var utilities = {
  _UA: navigator.userAgent,
  noop: noop,
  isNull: isNull,
  isDefined: isDefined,
  isUndefined: isUndefined,
  isObject: isObject,
  isFunction: isFunction,
  isNumber: isNumber,
  isWindow: isWindow,
  isArray: isArray,
  isArrayLike: isArrayLike,
  isString: isString,
  isEmptyString: isEmptyString,
  isNotEmptyString: isNotEmptyString,
  arrayLikeObjToArray: arrayLikeObjToArray,
  forEach: forEach,
  snake_case: snake_case,
  isValidEmail: isValidEmail,
  extend: extend,
  capitalize: capitalize,
  decapitalize: decapitalize,
  transformArray: transformArray,
  toFixedDigits: toFixedDigits,
  throttle: throttle,
  debounce: debounce,
  treeSearch: treeSearch,
  echoFn: echoFn,
  isISO8601: isISO8601,
  isOldIE: isOldIE,
  getInternetExplorerVersion: getInternetExplorerVersion,
  isIDevice: isIDevice,
  isMobile: isMobile,
  isIPhone: isIPhone,
  isAndroid: isAndroid
};

module.exports = utilities;
},{}],45:[function(require,module,exports){
'use strict';

var utilities = require('./utilityFunctions');

var xml = {};

xml.strToXMLDoc = function strToXMLDoc(stringContainingXMLSource){
  //IE 8
  if(typeof window.DOMParser === 'undefined'){
    var xmlDocument = new ActiveXObject('Microsoft.XMLDOM');
    xmlDocument.async = false;
    xmlDocument.loadXML(stringContainingXMLSource);
    return xmlDocument;
  }

  return parseString(stringContainingXMLSource);

  function parseString(stringContainingXMLSource){
    var parser = new DOMParser();
    var parsedDocument;

    //Note: This try catch is to deal with the fact that on IE parser.parseFromString does throw an error but the rest of the browsers don't.
    try {
      parsedDocument = parser.parseFromString(stringContainingXMLSource, "application/xml");

      if(isParseError(parsedDocument) || utilities.isEmptyString(stringContainingXMLSource)){
        throw new Error();
      }
    }catch(e){
      throw new Error("xml.strToXMLDOC: Error parsing the string: '" + stringContainingXMLSource + "'");
    }

    return parsedDocument;
  }

  function isParseError(parsedDocument) {
    try { // parser and parsererrorNS could be cached on startup for efficiency
      var parser = new DOMParser(),
        erroneousParse = parser.parseFromString('INVALID', 'text/xml'),
        parsererrorNS = erroneousParse.getElementsByTagName("parsererror")[0].namespaceURI;

      if (parsererrorNS === 'http://www.w3.org/1999/xhtml') {
        // In PhantomJS the parseerror element doesn't seem to have a special namespace, so we are just guessing here :(
        return parsedDocument.getElementsByTagName("parsererror").length > 0;
      }

      return parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0;
    } catch (e) {
      //Note on IE parseString throws an error by itself and it will never reach this code. Because it will have failed before
    }
  }
};

xml.parseText = function parseText (sValue) {
  if (/^\s*$/.test(sValue)) { return null; }
  if (/^(?:true|false)$/i.test(sValue)) { return sValue.toLowerCase() === "true"; }
  if (isFinite(sValue)) { return parseFloat(sValue); }
  if (utilities.isISO8601(sValue)) { return new Date(sValue); }
  return sValue.trim();
};

xml.JXONTree = function JXONTree (oXMLParent) {
  var parseText = xml.parseText;

  //The document object is an especial object that it may miss some functions or attrs depending on the browser.
  //To prevent this problem with create the JXONTree using the root childNode which is a fully fleshed node on all supported
  //browsers.
  if(oXMLParent.documentElement){
    return new xml.JXONTree(oXMLParent.documentElement);
  }

  if (oXMLParent.hasChildNodes()) {
    var sCollectedTxt = "";
    for (var oNode, sProp, vContent, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
      oNode = oXMLParent.childNodes.item(nItem);
      /*jshint bitwise: false*/
      if ((oNode.nodeType - 1 | 1) === 3) { sCollectedTxt += oNode.nodeType === 3 ? oNode.nodeValue.trim() : oNode.nodeValue; }
      else if (oNode.nodeType === 1 && !oNode.prefix) {
        sProp = utilities.decapitalize(oNode.nodeName);
        vContent = new xml.JXONTree(oNode);
        if (this.hasOwnProperty(sProp)) {
          if (this[sProp].constructor !== Array) { this[sProp] = [this[sProp]]; }
          this[sProp].push(vContent);
        } else { this[sProp] = vContent; }
      }
    }
    if (sCollectedTxt) { this.keyValue = parseText(sCollectedTxt); }
  }

  //IE8 Stupid fix
  var hasAttr = typeof oXMLParent.hasAttributes === 'undefined'? oXMLParent.attributes.length > 0: oXMLParent.hasAttributes();
  if (hasAttr) {
    var oAttrib;
    for (var nAttrib = 0; nAttrib < oXMLParent.attributes.length; nAttrib++) {
      oAttrib = oXMLParent.attributes.item(nAttrib);
      this["@" + utilities.decapitalize(oAttrib.name)] = parseText(oAttrib.value.trim());
    }
  }
};

xml.JXONTree.prototype.attr = function(attr) {
  return this['@' + utilities.decapitalize(attr)];
};

xml.toJXONTree = function toJXONTree(xmlString){
  var xmlDoc = xml.strToXMLDoc(xmlString);
  return new xml.JXONTree(xmlDoc);
};

/**
 * Helper function to extract the keyvalue of a JXONTree obj
 *
 * @param xmlObj {JXONTree}
 * return the key value or undefined;
 */
xml.keyValue = function getKeyValue(xmlObj) {
  if(xmlObj){
    return xmlObj.keyValue;
  }
  return undefined;
};

xml.attr = function getAttrValue(xmlObj, attr) {
  if(xmlObj) {
    return xmlObj['@' + utilities.decapitalize(attr)];
  }
  return undefined;
};

xml.encode = function encodeXML(str) {
  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

xml.decode = function decodeXML(str) {
  return str.replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&');
};

module.exports = xml;
},{"./utilityFunctions":44}],46:[function(require,module,exports){
'use strict';

require('./plugin/components/ads-label_4');
require('./plugin/components/black-poster_4');

var videoJsVAST = require('./plugin/videojs.vast.vpaid');

videojs.plugin('vastClient', videoJsVAST);


},{"./plugin/components/ads-label_4":35,"./plugin/components/black-poster_4":37,"./plugin/videojs.vast.vpaid":38}]},{},[46])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xcSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50c1xcVlBBSURGTEFTSENsaWVudFxcanNcXFZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50c1xcVlBBSURGTEFTSENsaWVudFxcanNcXFZQQUlERkxBU0hDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xcZmxhc2hUZXN0ZXIuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xcanNGbGFzaEJyaWRnZS5qcyIsImJvd2VyX2NvbXBvbmVudHNcXFZQQUlERkxBU0hDbGllbnRcXGpzXFxqc0ZsYXNoQnJpZGdlUmVnaXN0cnkuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xccmVnaXN0cnkuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xcdXRpbHMuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvc3Vic2NyaWJlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvVlBBSURIVE1MNUNsaWVudC9qcy91dGlscy5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0FkLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvQ29tcGFuaW9uLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvQ3JlYXRpdmUuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9JbkxpbmUuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9MaW5lYXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9NZWRpYUZpbGUuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9UcmFja2luZ0V2ZW50LmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVENsaWVudC5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZBU1RFcnJvci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZBU1RJbnRlZ3JhdG9yLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVFJlc3BvbnNlLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVFRyYWNrZXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WaWRlb0NsaWNrcy5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1dyYXBwZXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9wYXJzZXJzLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvdmFzdFV0aWwuanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURBZFVuaXRXcmFwcGVyLmpzIiwic3JjL3NjcmlwdHMvYWRzL3ZwYWlkL1ZQQUlERmxhc2hUZWNoLmpzIiwic3JjL3NjcmlwdHMvYWRzL3ZwYWlkL1ZQQUlESFRNTDVUZWNoLmpzIiwic3JjL3NjcmlwdHMvYWRzL3ZwYWlkL1ZQQUlESW50ZWdyYXRvci5qcyIsInNyYy9zY3JpcHRzL3BsdWdpbi9jb21wb25lbnRzL2Fkcy1sYWJlbC5qcyIsInNyYy9zY3JpcHRzL3BsdWdpbi9jb21wb25lbnRzL2Fkcy1sYWJlbF80LmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYmxhY2stcG9zdGVyLmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYmxhY2stcG9zdGVyXzQuanMiLCJzcmMvc2NyaXB0cy9wbHVnaW4vdmlkZW9qcy52YXN0LnZwYWlkLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvYXN5bmMuanMiLCJzcmMvc2NyaXB0cy91dGlscy9kb20uanMiLCJzcmMvc2NyaXB0cy91dGlscy9odHRwLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvcGxheWVyVXRpbHMuanMiLCJzcmMvc2NyaXB0cy91dGlscy91cmxVdGlscy5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMuanMiLCJzcmMvc2NyaXB0cy91dGlscy94bWwuanMiLCJzcmMvc2NyaXB0cy92aWRlb2pzXzQudmFzdC52cGFpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHYTs7Ozs7Ozs7OzsyQ0FJMEQ7Z0JBQWxELDJFQUFxQixrQkFBNkI7Z0JBQXRCLGlFQUFXLHNCQUFXOzs7Ozs7OytCQUczRCxPQUFPLFFBQVEsVUFBVSxnQkFBMkc7Z0JBQTNGLHFFQUFlLEVBQUMsY0FBQSxBQUFhLGlCQUE4RDtnQkFBekQsd0VBQWtCLEVBQUMsV0FBQSxBQUFXLGlCQUEyQjtnQkFBdEIsaUVBQVcsc0JBQVc7Ozs7aUNBQ25JLE9BQU8sUUFBUSxVQUFnQztnQkFBdEIsaUVBQVcsc0JBQVc7Ozs7a0NBRTFCO2dCQUF0QixpRUFBVyxzQkFBVzs7OztpQ0FDRDtnQkFBdEIsaUVBQVcsc0JBQVc7Ozs7a0NBQ0M7Z0JBQXRCLGlFQUFXLHNCQUFXOzs7O21DQUNDO2dCQUF0QixpRUFBVyxzQkFBVzs7OzttQ0FDQTtnQkFBdEIsaUVBQVcsc0JBQVc7Ozs7cUNBQ0U7Z0JBQXRCLGlFQUFXLHNCQUFXOzs7O2lDQUNKO2dCQUF0QixpRUFBVyxzQkFBVzs7Ozs7OztvQ0FHakIsVUFBVTs7O21DQUNYLFVBQVU7OztvQ0FDVCxVQUFVOzs7c0NBQ1IsVUFBVTs7OzRDQUNKLFVBQVU7OzsyQ0FDWCxVQUFVOzs7c0NBQ2YsVUFBVTs7O29DQUNaLGFBQW1DO2dCQUF0QixpRUFBVyxzQkFBVzs7OztvQ0FDbkMsVUFBVTs7O3dDQUNOLFVBQVU7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2aEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG4vL3NpbXBsZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgQVBJXG5leHBvcnQgY2xhc3MgSVZQQUlEQWRVbml0IHtcblxuICAgIC8vYWxsIG1ldGhvZHMgYmVsb3dcbiAgICAvL2FyZSBhc3luYyBtZXRob2RzXG4gICAgaGFuZHNoYWtlVmVyc2lvbihwbGF5ZXJWUEFJRFZlcnNpb24gPSAnMi4wJywgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG5cbiAgICAvL2NyZWF0aXZlRGF0YSBpcyBhbiBvYmplY3QgdG8gYmUgY29uc2lzdGVudCB3aXRoIFZQQUlESFRNTFxuICAgIGluaXRBZCAod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEgPSB7QWRQYXJhbWV0ZXJzOicnfSwgZW52aXJvbm1lbnRWYXJzID0ge2ZsYXNoVmFyczogJyd9LCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cbiAgICByZXNpemVBZCh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG5cbiAgICBzdGFydEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxuICAgIHN0b3BBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cbiAgICBwYXVzZUFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxuICAgIHJlc3VtZUFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxuICAgIGV4cGFuZEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxuICAgIGNvbGxhcHNlQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgc2tpcEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxuXG4gICAgLy9wcm9wZXJ0aWVzIHRoYXQgd2lsbCBiZSB0cmVhdCBhcyBhc3luYyBtZXRob2RzXG4gICAgZ2V0QWRMaW5lYXIoY2FsbGJhY2spIHt9XG4gICAgZ2V0QWRXaWR0aChjYWxsYmFjaykge31cbiAgICBnZXRBZEhlaWdodChjYWxsYmFjaykge31cbiAgICBnZXRBZEV4cGFuZGVkKGNhbGxiYWNrKSB7fVxuICAgIGdldEFkU2tpcHBhYmxlU3RhdGUoY2FsbGJhY2spIHt9XG4gICAgZ2V0QWRSZW1haW5pbmdUaW1lKGNhbGxiYWNrKSB7fVxuICAgIGdldEFkRHVyYXRpb24oY2FsbGJhY2spIHt9XG4gICAgc2V0QWRWb2x1bWUoc291bmRWb2x1bWUsIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxuICAgIGdldEFkVm9sdW1lKGNhbGxiYWNrKSB7fVxuICAgIGdldEFkQ29tcGFuaW9ucyhjYWxsYmFjaykge31cbiAgICBnZXRBZEljb25zKGNhbGxiYWNrKSB7fVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSVZQQUlEQWRVbml0LCAnRVZFTlRTJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBbXG4gICAgICAgICdBZExvYWRlZCcsXG4gICAgICAgICdBZFN0YXJ0ZWQnLFxuICAgICAgICAnQWRTdG9wcGVkJyxcbiAgICAgICAgJ0FkU2tpcHBlZCcsXG4gICAgICAgICdBZFNraXBwYWJsZVN0YXRlQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICAgICAnQWRTaXplQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICAgICAnQWRMaW5lYXJDaGFuZ2UnLFxuICAgICAgICAnQWREdXJhdGlvbkNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAgICAgJ0FkRXhwYW5kZWRDaGFuZ2UnLFxuICAgICAgICAnQWRSZW1haW5pbmdUaW1lQ2hhbmdlJywgLy8gW0RlcHJlY2F0ZWQgaW4gMi4wXSBidXQgd2lsbCBiZSBzdGlsbCBmaXJlZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgICAgJ0FkVm9sdW1lQ2hhbmdlJyxcbiAgICAgICAgJ0FkSW1wcmVzc2lvbicsXG4gICAgICAgICdBZFZpZGVvU3RhcnQnLFxuICAgICAgICAnQWRWaWRlb0ZpcnN0UXVhcnRpbGUnLFxuICAgICAgICAnQWRWaWRlb01pZHBvaW50JyxcbiAgICAgICAgJ0FkVmlkZW9UaGlyZFF1YXJ0aWxlJyxcbiAgICAgICAgJ0FkVmlkZW9Db21wbGV0ZScsXG4gICAgICAgICdBZENsaWNrVGhydScsXG4gICAgICAgICdBZEludGVyYWN0aW9uJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICAgICAnQWRVc2VyQWNjZXB0SW52aXRhdGlvbicsXG4gICAgICAgICdBZFVzZXJNaW5pbWl6ZScsXG4gICAgICAgICdBZFVzZXJDbG9zZScsXG4gICAgICAgICdBZFBhdXNlZCcsXG4gICAgICAgICdBZFBsYXlpbmcnLFxuICAgICAgICAnQWRMb2cnLFxuICAgICAgICAnQWRFcnJvcidcbiAgICBdXG59KTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgSVZQQUlEQWRVbml0ID0gcmVxdWlyZSgnLi9JVlBBSURBZFVuaXQnKS5JVlBBSURBZFVuaXQ7XG5sZXQgQUxMX1ZQQUlEX01FVEhPRFMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhJVlBBSURBZFVuaXQucHJvdG90eXBlKS5maWx0ZXIoZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIFsnY29uc3RydWN0b3InXS5pbmRleE9mKHByb3BlcnR5KSA9PT0gLTE7XG59KTtcblxuZXhwb3J0IGNsYXNzIFZQQUlEQWRVbml0IGV4dGVuZHMgSVZQQUlEQWRVbml0IHtcbiAgICBjb25zdHJ1Y3RvciAoZmxhc2gpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2ZsYXNoID0gZmxhc2g7XG4gICAgfVxuXG4gICAgX2Rlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIEFMTF9WUEFJRF9NRVRIT0RTLmZvckVhY2goKG1ldGhvZE5hbWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2ZsYXNoLnJlbW92ZUNhbGxiYWNrQnlNZXRob2ROYW1lKG1ldGhvZE5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgSVZQQUlEQWRVbml0LkVWRU5UUy5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZmxhc2gub2ZmRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9mbGFzaCA9IG51bGw7XG4gICAgfVxuXG4gICAgaXNEZXN0cm95ZWQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzdHJveWVkO1xuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2gub24oZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgb2ZmKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2gub2ZmKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8vVlBBSUQgaW50ZXJmYWNlXG4gICAgaGFuZHNoYWtlVmVyc2lvbihwbGF5ZXJWUEFJRFZlcnNpb24gPSAnMi4wJywgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdoYW5kc2hha2VWZXJzaW9uJywgW3BsYXllclZQQUlEVmVyc2lvbl0sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgaW5pdEFkICh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSA9IHtBZFBhcmFtZXRlcnM6ICcnfSwgZW52aXJvbm1lbnRWYXJzID0ge2ZsYXNoVmFyczogJyd9LCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICAvL3Jlc2l6ZSBlbGVtZW50IHRoYXQgaGFzIHRoZSBmbGFzaCBvYmplY3RcbiAgICAgICAgdGhpcy5fZmxhc2guc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY3JlYXRpdmVEYXRhID0gY3JlYXRpdmVEYXRhIHx8IHtBZFBhcmFtZXRlcnM6ICcnfTtcbiAgICAgICAgZW52aXJvbm1lbnRWYXJzID0gZW52aXJvbm1lbnRWYXJzIHx8IHtmbGFzaFZhcnM6ICcnfTtcblxuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2luaXRBZCcsIFt0aGlzLl9mbGFzaC5nZXRXaWR0aCgpLCB0aGlzLl9mbGFzaC5nZXRIZWlnaHQoKSwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEuQWRQYXJhbWV0ZXJzIHx8ICcnLCBlbnZpcm9ubWVudFZhcnMuZmxhc2hWYXJzIHx8ICcnXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICByZXNpemVBZCh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy9yZXNpemUgZWxlbWVudCB0aGF0IGhhcyB0aGUgZmxhc2ggb2JqZWN0XG4gICAgICAgIHRoaXMuX2ZsYXNoLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgLy9yZXNpemUgYWQgaW5zaWRlIHRoZSBmbGFzaFxuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ3Jlc2l6ZUFkJywgW3RoaXMuX2ZsYXNoLmdldFdpZHRoKCksIHRoaXMuX2ZsYXNoLmdldEhlaWdodCgpLCB2aWV3TW9kZV0sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc3RhcnRBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ3N0YXJ0QWQnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBzdG9wQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdzdG9wQWQnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBwYXVzZUFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgncGF1c2VBZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHJlc3VtZUFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgncmVzdW1lQWQnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBleHBhbmRBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2V4cGFuZEFkJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgY29sbGFwc2VBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2NvbGxhcHNlQWQnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBza2lwQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdza2lwQWQnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8vcHJvcGVydGllcyB0aGF0IHdpbGwgYmUgdHJlYXQgYXMgYXN5bmMgbWV0aG9kc1xuICAgIGdldEFkTGluZWFyKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWRMaW5lYXInLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZFdpZHRoKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWRXaWR0aCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkSGVpZ2h0KGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWRIZWlnaHQnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZEV4cGFuZGVkKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWRFeHBhbmRlZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkU2tpcHBhYmxlU3RhdGUoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZFNraXBwYWJsZVN0YXRlJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0QWRSZW1haW5pbmdUaW1lKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWRSZW1haW5pbmdUaW1lJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0QWREdXJhdGlvbihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkRHVyYXRpb24nLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBzZXRBZFZvbHVtZSh2b2x1bWUsIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnc2V0QWRWb2x1bWUnLCBbdm9sdW1lXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZFZvbHVtZShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkVm9sdW1lJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0QWRDb21wYW5pb25zKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWRDb21wYW5pb25zJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0QWRJY29ucyhjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkSWNvbnMnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbn1cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBKU0ZsYXNoQnJpZGdlID0gcmVxdWlyZSgnLi9qc0ZsYXNoQnJpZGdlJykuSlNGbGFzaEJyaWRnZTtcbmNvbnN0IFZQQUlEQWRVbml0ID0gcmVxdWlyZSgnLi9WUEFJREFkVW5pdCcpLlZQQUlEQWRVbml0O1xuXG5jb25zdCBub29wID0gcmVxdWlyZSgnLi91dGlscycpLm5vb3A7XG5jb25zdCBjYWxsYmFja1RpbWVvdXQgPSByZXF1aXJlKCcuL3V0aWxzJykuY2FsbGJhY2tUaW1lb3V0O1xuY29uc3QgaXNQb3NpdGl2ZUludCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5pc1Bvc2l0aXZlSW50O1xuY29uc3QgY3JlYXRlRWxlbWVudFdpdGhJRCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5jcmVhdGVFbGVtZW50V2l0aElEO1xuY29uc3QgdW5pcXVlVlBBSUQgPSByZXF1aXJlKCcuL3V0aWxzJykudW5pcXVlKCd2cGFpZCcpO1xuY29uc3QgY3JlYXRlRmxhc2hUZXN0ZXIgPSByZXF1aXJlKCcuL2ZsYXNoVGVzdGVyLmpzJykuY3JlYXRlRmxhc2hUZXN0ZXI7XG5cbmNvbnN0IEVSUk9SID0gJ2Vycm9yJztcbmNvbnN0IEZMQVNIX1ZFUlNJT04gPSAnMTAuMS4wJztcblxubGV0IGZsYXNoVGVzdGVyID0ge2lzU3VwcG9ydGVkOiAoKT0+IHRydWV9OyAvLyBpZiB0aGUgcnVuRmxhc2hUZXN0IGlzIG5vdCBydW4gdGhlIGZsYXNoVGVzdGVyIHdpbGwgYWx3YXlzIHJldHVybiB0cnVlXG5cbmNsYXNzIFZQQUlERkxBU0hDbGllbnQge1xuICAgIGNvbnN0cnVjdG9yICh2cGFpZFBhcmVudEVsLCBjYWxsYmFjaywgc3dmQ29uZmlnID0ge2RhdGE6ICdWUEFJREZsYXNoLnN3ZicsIHdpZHRoOiA4MDAsIGhlaWdodDogNDAwfSwgcGFyYW1zID0geyB3bW9kZTogJ3RyYW5zcGFyZW50Jywgc2FsaWduOiAndGwnLCBhbGlnbjogJ2xlZnQnLCBhbGxvd1NjcmlwdEFjY2VzczogJ2Fsd2F5cycsIHNjYWxlOiAnbm9TY2FsZScsIGFsbG93RnVsbFNjcmVlbjogJ3RydWUnLCBxdWFsaXR5OiAnaGlnaCd9LCB2cGFpZE9wdGlvbnMgPSB7IGRlYnVnOiBmYWxzZSwgdGltZW91dDogMTAwMDAgfSkge1xuXG4gICAgICAgIGlmICghVlBBSURGTEFTSENsaWVudC5oYXNFeHRlcm5hbERlcGVuZGVuY2llcygpKSB7XG4gICAgICAgICAgICByZXR1cm4gb25FcnJvcignbm8gc3dmb2JqZWN0IGluIGdsb2JhbCBzY29wZS4gY2hlY2s6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2ZvYmplY3Qvc3dmb2JqZWN0IG9yIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3Avc3dmb2JqZWN0LycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdnBhaWRQYXJlbnRFbCA9IHZwYWlkUGFyZW50RWw7XG4gICAgICAgIHRoaXMuX2ZsYXNoSUQgPSB1bmlxdWVWUEFJRCgpO1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuXG4gICAgICAgIHN3ZkNvbmZpZy53aWR0aCA9IGlzUG9zaXRpdmVJbnQoc3dmQ29uZmlnLndpZHRoLCA4MDApO1xuICAgICAgICBzd2ZDb25maWcuaGVpZ2h0ID0gaXNQb3NpdGl2ZUludChzd2ZDb25maWcuaGVpZ2h0LCA0MDApO1xuXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRXaXRoSUQodnBhaWRQYXJlbnRFbCwgdGhpcy5fZmxhc2hJRCwgdHJ1ZSk7XG5cbiAgICAgICAgcGFyYW1zLm1vdmllID0gc3dmQ29uZmlnLmRhdGE7XG4gICAgICAgIHBhcmFtcy5GbGFzaFZhcnMgPSBgZmxhc2hpZD0ke3RoaXMuX2ZsYXNoSUR9JmhhbmRsZXI9JHtKU0ZsYXNoQnJpZGdlLlZQQUlEX0ZMQVNIX0hBTkRMRVJ9JmRlYnVnPSR7dnBhaWRPcHRpb25zLmRlYnVnfSZzYWxpZ249JHtwYXJhbXMuc2FsaWdufWA7XG5cbiAgICAgICAgaWYgKCFWUEFJREZMQVNIQ2xpZW50LmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBvbkVycm9yKCd1c2VyIGRvblxcJ3Qgc3VwcG9ydCBmbGFzaCBvciBkb2VzblxcJ3QgaGF2ZSB0aGUgbWluaW11bSByZXF1aXJlZCB2ZXJzaW9uIG9mIGZsYXNoICcgKyBGTEFTSF9WRVJTSU9OKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwgPSBzd2ZvYmplY3QuY3JlYXRlU1dGKHN3ZkNvbmZpZywgcGFyYW1zLCB0aGlzLl9mbGFzaElEKTtcblxuICAgICAgICBpZiAoIXRoaXMuZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBvbkVycm9yKCAnc3dmb2JqZWN0IGZhaWxlZCB0byBjcmVhdGUgb2JqZWN0IGluIGVsZW1lbnQnICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaGFuZGxlciA9IGNhbGxiYWNrVGltZW91dCh2cGFpZE9wdGlvbnMudGltZW91dCxcbiAgICAgICAgICAgIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAkbG9hZFBlbmRlZEFkVW5pdC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgZGF0YSk7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soJ3ZwYWlkIGZsYXNoIGxvYWQgdGltZW91dCAnICsgdnBhaWRPcHRpb25zLnRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuX2ZsYXNoID0gbmV3IEpTRmxhc2hCcmlkZ2UodGhpcy5lbCwgc3dmQ29uZmlnLmRhdGEsIHRoaXMuX2ZsYXNoSUQsIHN3ZkNvbmZpZy53aWR0aCwgc3dmQ29uZmlnLmhlaWdodCwgaGFuZGxlcik7XG5cbiAgICAgICAgZnVuY3Rpb24gb25FcnJvcihlcnJvcikge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKGVycm9yKSk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBkZXN0cm95ICgpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveUFkVW5pdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLl9mbGFzaCkge1xuICAgICAgICAgICAgdGhpcy5fZmxhc2guZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5fZmxhc2ggPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwgPSBudWxsO1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlzRGVzdHJveWVkICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc3Ryb3llZDtcbiAgICB9XG5cbiAgICBfZGVzdHJveUFkVW5pdCgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2xvYWRMYXRlcjtcblxuICAgICAgICBpZiAodGhpcy5fYWRVbml0TG9hZCkge1xuICAgICAgICAgICAgdGhpcy5fYWRVbml0TG9hZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9mbGFzaC5yZW1vdmVDYWxsYmFjayh0aGlzLl9hZFVuaXRMb2FkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9hZFVuaXQpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkVW5pdC5fZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5fYWRVbml0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRBZFVuaXQoYWRVUkwsIGNhbGxiYWNrKSB7XG4gICAgICAgICR0aHJvd0lmRGVzdHJveWVkLmNhbGwodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2FkVW5pdCkge1xuICAgICAgICAgICAgdGhpcy5fZGVzdHJveUFkVW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2ZsYXNoLmlzUmVhZHkoKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRVbml0TG9hZCA9IChlcnIsIG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZFVuaXQgPSBuZXcgVlBBSURBZFVuaXQodGhpcy5fZmxhc2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9hZFVuaXRMb2FkID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIsIHRoaXMuX2FkVW5pdCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2xvYWRBZFVuaXQnLCBbYWRVUkxdLCB0aGlzLl9hZFVuaXRMb2FkKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbG9hZExhdGVyID0ge3VybDogYWRVUkwsIGNhbGxiYWNrfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVubG9hZEFkVW5pdChjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICAkdGhyb3dJZkRlc3Ryb3llZC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lBZFVuaXQoKTtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCd1bmxvYWRBZFVuaXQnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRGbGFzaElEKCkge1xuICAgICAgICAkdGhyb3dJZkRlc3Ryb3llZC5jYWxsKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZmxhc2guZ2V0Rmxhc2hJRCgpO1xuICAgIH1cbiAgICBnZXRGbGFzaFVSTCgpIHtcbiAgICAgICAgJHRocm93SWZEZXN0cm95ZWQuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZsYXNoLmdldEZsYXNoVVJMKCk7XG4gICAgfVxufVxuXG5zZXRTdGF0aWNQcm9wZXJ0eSgnaXNTdXBwb3J0ZWQnLCAoKSA9PiB7XG4gICAgcmV0dXJuIFZQQUlERkxBU0hDbGllbnQuaGFzRXh0ZXJuYWxEZXBlbmRlbmNpZXMoKSAmJiBzd2ZvYmplY3QuaGFzRmxhc2hQbGF5ZXJWZXJzaW9uKEZMQVNIX1ZFUlNJT04pICYmIGZsYXNoVGVzdGVyLmlzU3VwcG9ydGVkKCk7XG59LCB0cnVlKTtcblxuc2V0U3RhdGljUHJvcGVydHkoJ2hhc0V4dGVybmFsRGVwZW5kZW5jaWVzJywgKCkgPT4ge1xuICAgIHJldHVybiAhIXdpbmRvdy5zd2ZvYmplY3Q7XG59KTtcblxuc2V0U3RhdGljUHJvcGVydHkoJ3J1bkZsYXNoVGVzdCcsIChzd2ZDb25maWcpID0+IHtcbiAgICBmbGFzaFRlc3RlciA9IGNyZWF0ZUZsYXNoVGVzdGVyKGRvY3VtZW50LmJvZHksIHN3ZkNvbmZpZyk7XG59KTtcblxuZnVuY3Rpb24gJHRocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgaWYodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVlBBSURGbGFzaFRvSlMgaXMgZGVzdHJveWVkIScpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gJGxvYWRQZW5kZWRBZFVuaXQoKSB7XG4gICAgaWYgKHRoaXMuX2xvYWRMYXRlcikge1xuICAgICAgICB0aGlzLmxvYWRBZFVuaXQodGhpcy5fbG9hZExhdGVyLnVybCwgdGhpcy5fbG9hZExhdGVyLmNhbGxiYWNrKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2xvYWRMYXRlcjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFN0YXRpY1Byb3BlcnR5KHByb3BlcnR5TmFtZSwgdmFsdWUsIHdyaXRhYmxlID0gZmFsc2UpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVlBBSURGTEFTSENsaWVudCwgcHJvcGVydHlOYW1lLCB7XG4gICAgICAgIHdyaXRhYmxlOiB3cml0YWJsZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURGTEFTSENsaWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRkxBU0hfVEVTVCA9ICd2cGFpZF92aWRlb19mbGFzaF90ZXN0ZXInO1xuY29uc3QgRkxBU0hfVEVTVF9FTCA9ICd2cGFpZF92aWRlb19mbGFzaF90ZXN0ZXJfZWwnO1xuY29uc3QgSlNGbGFzaEJyaWRnZSA9IHJlcXVpcmUoJy4vanNGbGFzaEJyaWRnZScpLkpTRmxhc2hCcmlkZ2U7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbmNvbnN0IE11bHRpcGxlVmFsdWVzUmVnaXN0cnkgPSByZXF1aXJlKCcuL3JlZ2lzdHJ5JykuTXVsdGlwbGVWYWx1ZXNSZWdpc3RyeTtcblxuY2xhc3MgRmxhc2hUZXN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgc3dmQ29uZmlnID0ge2RhdGE6ICdWUEFJREZsYXNoLnN3ZicsIHdpZHRoOiA4MDAsIGhlaWdodDogNDAwfSkge1xuICAgICAgICB0aGlzLnBhcmVudEVsID0gdXRpbHMuY3JlYXRlRWxlbWVudFdpdGhJRChwYXJlbnQsIEZMQVNIX1RFU1RfRUwpOyAvLyBzb21lIGJyb3dzZXJzIGNyZWF0ZSBnbG9iYWwgdmFyaWFibGVzIHVzaW5nIHRoZSBlbGVtZW50IGlkIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzQzNDI3OC9kby1kb20tdHJlZS1lbGVtZW50cy13aXRoLWlkcy1iZWNvbWUtZ2xvYmFsLXZhcmlhYmxlc1xuICAgICAgICB1dGlscy5oaWRlRmxhc2hFbCh0aGlzLnBhcmVudEVsKTtcbiAgICAgICAgdmFyIHBhcmFtcyA9IHt9O1xuICAgICAgICBwYXJhbXMubW92aWUgPSBzd2ZDb25maWcuZGF0YTtcbiAgICAgICAgcGFyYW1zLkZsYXNoVmFycyA9IGBmbGFzaGlkPSR7RkxBU0hfVEVTVF9FTH0maGFuZGxlcj0ke0pTRmxhc2hCcmlkZ2UuVlBBSURfRkxBU0hfSEFORExFUn1gO1xuXG4gICAgICAgIHRoaXMuZWwgPSBzd2ZvYmplY3QuY3JlYXRlU1dGKHN3ZkNvbmZpZywgcGFyYW1zLCBGTEFTSF9URVNUX0VMKTtcbiAgICAgICAgdGhpcy5faGFuZGxlcnMgPSBuZXcgTXVsdGlwbGVWYWx1ZXNSZWdpc3RyeSgpO1xuICAgICAgICB0aGlzLl9pc1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5lbCkge1xuICAgICAgICAgICAgdXRpbHMuaGlkZUZsYXNoRWwodGhpcy5lbCk7XG4gICAgICAgICAgICB0aGlzLl9mbGFzaCA9IG5ldyBKU0ZsYXNoQnJpZGdlKHRoaXMuZWwsIHN3ZkNvbmZpZy5kYXRhLCBGTEFTSF9URVNUX0VMLCA0MDAsIDQwMCwgKCk9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VwcG9ydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNTdXBwb3J0ZWQgPSBzdXBwb3J0O1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZXJzLmdldCgnY2hhbmdlJykuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCdjaGFuZ2UnLCBzdXBwb3J0KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc1N1cHBvcnRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU3VwcG9ydGVkO1xuICAgIH1cbiAgICBvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzLmFkZChldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG59XG5cbmV4cG9ydCB2YXIgY3JlYXRlRmxhc2hUZXN0ZXIgPSBmdW5jdGlvbiBjcmVhdGVGbGFzaFRlc3RlcihlbCwgc3dmQ29uZmlnKSB7XG4gICAgaWYgKCF3aW5kb3dbRkxBU0hfVEVTVF0pIHtcbiAgICAgICAgd2luZG93W0ZMQVNIX1RFU1RdID0gbmV3IEZsYXNoVGVzdGVyKGVsLCBzd2ZDb25maWcpO1xuICAgIH1cbiAgICByZXR1cm4gd2luZG93W0ZMQVNIX1RFU1RdO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubGV0IHVuaXF1ZSA9IHJlcXVpcmUoJy4vdXRpbHMnKS51bmlxdWU7XG5sZXQgaXNQb3NpdGl2ZUludCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5pc1Bvc2l0aXZlSW50O1xubGV0IHN0cmluZ0VuZHNXaXRoID0gcmVxdWlyZSgnLi91dGlscycpLnN0cmluZ0VuZHNXaXRoO1xubGV0IFNpbmdsZVZhbHVlUmVnaXN0cnkgPSByZXF1aXJlKCcuL3JlZ2lzdHJ5JykuU2luZ2xlVmFsdWVSZWdpc3RyeTtcbmxldCBNdWx0aXBsZVZhbHVlc1JlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9yZWdpc3RyeScpLk11bHRpcGxlVmFsdWVzUmVnaXN0cnk7XG5jb25zdCByZWdpc3RyeSA9IHJlcXVpcmUoJy4vanNGbGFzaEJyaWRnZVJlZ2lzdHJ5Jyk7XG5jb25zdCBWUEFJRF9GTEFTSF9IQU5ETEVSID0gJ3ZwYWlkX3ZpZGVvX2ZsYXNoX2hhbmRsZXInO1xuY29uc3QgRVJST1IgPSAnQWRFcnJvcic7XG5cbmV4cG9ydCBjbGFzcyBKU0ZsYXNoQnJpZGdlIHtcbiAgICBjb25zdHJ1Y3RvciAoZWwsIGZsYXNoVVJMLCBmbGFzaElELCB3aWR0aCwgaGVpZ2h0LCBsb2FkSGFuZFNoYWtlKSB7XG4gICAgICAgIHRoaXMuX2VsID0gZWw7XG4gICAgICAgIHRoaXMuX2ZsYXNoSUQgPSBmbGFzaElEO1xuICAgICAgICB0aGlzLl9mbGFzaFVSTCA9IGZsYXNoVVJMO1xuICAgICAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzID0gbmV3IE11bHRpcGxlVmFsdWVzUmVnaXN0cnkoKTtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0gbmV3IFNpbmdsZVZhbHVlUmVnaXN0cnkoKTtcbiAgICAgICAgdGhpcy5fdW5pcXVlTWV0aG9kSWRlbnRpZmllciA9IHVuaXF1ZSh0aGlzLl9mbGFzaElEKTtcbiAgICAgICAgdGhpcy5fcmVhZHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faGFuZFNoYWtlSGFuZGxlciA9IGxvYWRIYW5kU2hha2U7XG5cbiAgICAgICAgcmVnaXN0cnkuYWRkSW5zdGFuY2UodGhpcy5fZmxhc2hJRCwgdGhpcyk7XG4gICAgfVxuXG4gICAgb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9oYW5kbGVycy5hZGQoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgb2ZmKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJzLnJlbW92ZShldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBvZmZFdmVudChldmVudE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJzLnJlbW92ZUJ5S2V5KGV2ZW50TmFtZSk7XG4gICAgfVxuXG4gICAgb2ZmQWxsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlcnMucmVtb3ZlQWxsKCk7XG4gICAgfVxuXG4gICAgY2FsbEZsYXNoTWV0aG9kKG1ldGhvZE5hbWUsIGFyZ3MgPSBbXSwgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrSUQgPSAnJztcbiAgICAgICAgLy8gaWYgbm8gY2FsbGJhY2ssIHNvbWUgbWV0aG9kcyB0aGUgcmV0dXJuIGlzIHZvaWQgc28gdGhleSBkb24ndCBuZWVkIGNhbGxiYWNrXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2tJRCA9IGAke3RoaXMuX3VuaXF1ZU1ldGhvZElkZW50aWZpZXIoKX1fJHttZXRob2ROYW1lfWA7XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrSUQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vbWV0aG9kcyBhcmUgY3JlYXRlZCBieSBFeHRlcm5hbEludGVyZmFjZS5hZGRDYWxsYmFjayBpbiBhczMgY29kZSwgaWYgZm9yIHNvbWUgcmVhc29uIGl0IGZhaWxlZFxuICAgICAgICAgICAgLy90aGlzIGNvZGUgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgICAgICAgICAgdGhpcy5fZWxbbWV0aG9kTmFtZV0oW2NhbGxiYWNrSURdLmNvbmNhdChhcmdzKSk7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgJGFzeW5jQ2FsbGJhY2suY2FsbCh0aGlzLCBjYWxsYmFja0lELCBlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvL2lmIHRoZXJlIGlzbid0IGFueSBjYWxsYmFjayB0byByZXR1cm4gZXJyb3IgdXNlIGVycm9yIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmlnZ2VyKEVSUk9SLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxsYmFja3MucmVtb3ZlQnlWYWx1ZShjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2FsbGJhY2tCeU1ldGhvZE5hbWUoc3VmZml4KSB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5maWx0ZXJLZXlzKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdFbmRzV2l0aChrZXksIHN1ZmZpeCk7XG4gICAgICAgIH0pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnJlbW92ZShrZXkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVBbGxDYWxsYmFja3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxsYmFja3MucmVtb3ZlQWxsKCk7XG4gICAgfVxuXG4gICAgX3RyaWdnZXIoZXZlbnROYW1lLCBldmVudCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVycy5nZXQoZXZlbnROYW1lKS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgLy9jbGlja1RocnUgaGFzIHRvIGJlIHN5bmMsIGlmIG5vdCB3aWxsIGJlIGJsb2NrIGJ5IHRoZSBwb3B1cGJsb2NrZXJcbiAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09ICdBZENsaWNrVGhydScpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFuZGxlcnMuZ2V0KGV2ZW50TmFtZSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9jYWxsQ2FsbGJhY2sobWV0aG9kTmFtZSwgY2FsbGJhY2tJRCwgZXJyLCByZXN1bHQpIHtcblxuICAgICAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLl9jYWxsYmFja3MuZ2V0KGNhbGxiYWNrSUQpO1xuXG4gICAgICAgIC8vbm90IGFsbCBtZXRob2RzIGNhbGxiYWNrJ3MgYXJlIG1hbmRhdG9yeVxuICAgICAgICAvL2J1dCBpZiB0aGVyZSBleGlzdCBhbiBlcnJvciwgZmlyZSB0aGUgZXJyb3IgZXZlbnRcbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKGVyciAmJiBjYWxsYmFja0lEID09PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcihFUlJPUiwgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRhc3luY0NhbGxiYWNrLmNhbGwodGhpcywgY2FsbGJhY2tJRCwgZXJyLCByZXN1bHQpO1xuXG4gICAgfVxuXG4gICAgX2hhbmRTaGFrZShlcnIsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5fcmVhZHkgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5faGFuZFNoYWtlSGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5faGFuZFNoYWtlSGFuZGxlcihlcnIsIGRhdGEpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2hhbmRTaGFrZUhhbmRsZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL21ldGhvZHMgbGlrZSBwcm9wZXJ0aWVzIHNwZWNpZmljIHRvIHRoaXMgaW1wbGVtZW50YXRpb24gb2YgVlBBSURcbiAgICBnZXRTaXplKCkge1xuICAgICAgICByZXR1cm4ge3dpZHRoOiB0aGlzLl93aWR0aCwgaGVpZ2h0OiB0aGlzLl9oZWlnaHR9O1xuICAgIH1cbiAgICBzZXRTaXplKG5ld1dpZHRoLCBuZXdIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5fd2lkdGggPSBpc1Bvc2l0aXZlSW50KG5ld1dpZHRoLCB0aGlzLl93aWR0aCk7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGlzUG9zaXRpdmVJbnQobmV3SGVpZ2h0LCB0aGlzLl9oZWlnaHQpO1xuICAgICAgICB0aGlzLl9lbC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgdGhpcy5fd2lkdGgpO1xuICAgICAgICB0aGlzLl9lbC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHRoaXMuX2hlaWdodCk7XG4gICAgfVxuICAgIGdldFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gICAgfVxuICAgIHNldFdpZHRoKG5ld1dpZHRoKSB7XG4gICAgICAgIHRoaXMuc2V0U2l6ZShuZXdXaWR0aCwgdGhpcy5faGVpZ2h0KTtcbiAgICB9XG4gICAgZ2V0SGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICAgIH1cbiAgICBzZXRIZWlnaHQobmV3SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuc2V0U2l6ZSh0aGlzLl93aWR0aCwgbmV3SGVpZ2h0KTtcbiAgICB9XG4gICAgZ2V0Rmxhc2hJRCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZsYXNoSUQ7XG4gICAgfVxuICAgIGdldEZsYXNoVVJMKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmxhc2hVUkw7XG4gICAgfVxuICAgIGlzUmVhZHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWFkeTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5vZmZBbGwoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgcmVnaXN0cnkucmVtb3ZlSW5zdGFuY2VCeUlEKHRoaXMuX2ZsYXNoSUQpO1xuICAgICAgICBpZiAodGhpcy5fZWwucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5fZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLl9lbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uICRhc3luY0NhbGxiYWNrKGNhbGxiYWNrSUQsIGVyciwgcmVzdWx0KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBjYWxsYmFjayA9IHRoaXMuX2NhbGxiYWNrcy5nZXQoY2FsbGJhY2tJRCk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnJlbW92ZShjYWxsYmFja0lEKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH0sIDApO1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSlNGbGFzaEJyaWRnZSwgJ1ZQQUlEX0ZMQVNIX0hBTkRMRVInLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IFZQQUlEX0ZMQVNIX0hBTkRMRVJcbn0pO1xuXG4vKipcbiAqIEV4dGVybmFsIGludGVyZmFjZSBoYW5kbGVyXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZsYXNoSUQgaWRlbnRpZmllciBvZiB0aGUgZmxhc2ggd2hvIGNhbGwgdGhpc1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVJRCB3aGF0IHR5cGUgb2YgbWVzc2FnZSBpcywgY2FuIGJlICdldmVudCcgb3IgJ2NhbGxiYWNrJ1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVOYW1lIGlmIHRoZSB0eXBlSUQgaXMgYSBldmVudCB0aGUgdHlwZU5hbWUgd2lsbCBiZSB0aGUgZXZlbnROYW1lLCBpZiBpcyBhIGNhbGxiYWNrIHRoZSB0eXBlSUQgaXMgdGhlIG1ldGhvZE5hbWUgdGhhdCBpcyByZWxhdGVkIHRoaXMgY2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBjYWxsYmFja0lEIG9ubHkgYXBwbGllcyB3aGVuIHRoZSB0eXBlSUQgaXMgJ2NhbGxiYWNrJywgaWRlbnRpZmllciBvZiB0aGUgY2FsbGJhY2sgdG8gY2FsbFxuICogQHBhcmFtIHtvYmplY3R9IGVycm9yIGVycm9yIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAqL1xud2luZG93W1ZQQUlEX0ZMQVNIX0hBTkRMRVJdID0gKGZsYXNoSUQsIHR5cGVJRCwgdHlwZU5hbWUsIGNhbGxiYWNrSUQsIGVycm9yLCBkYXRhKSA9PiB7XG4gICAgbGV0IGluc3RhbmNlID0gcmVnaXN0cnkuZ2V0SW5zdGFuY2VCeUlEKGZsYXNoSUQpO1xuICAgIGlmICghaW5zdGFuY2UpIHJldHVybjtcbiAgICBpZiAodHlwZU5hbWUgPT09ICdoYW5kU2hha2UnKSB7XG4gICAgICAgIGluc3RhbmNlLl9oYW5kU2hha2UoZXJyb3IsIGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlSUQgIT09ICdldmVudCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLl9jYWxsQ2FsbGJhY2sodHlwZU5hbWUsIGNhbGxiYWNrSUQsIGVycm9yLCBkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluc3RhbmNlLl90cmlnZ2VyKHR5cGVOYW1lLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbiIsIid1c2Ugc3RyaWN0JztcblxubGV0IFNpbmdsZVZhbHVlUmVnaXN0cnkgPSByZXF1aXJlKCcuL3JlZ2lzdHJ5JykuU2luZ2xlVmFsdWVSZWdpc3RyeTtcbmxldCBpbnN0YW5jZXMgPSBuZXcgU2luZ2xlVmFsdWVSZWdpc3RyeSgpO1xuXG5jb25zdCBKU0ZsYXNoQnJpZGdlUmVnaXN0cnkgPSB7fTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShKU0ZsYXNoQnJpZGdlUmVnaXN0cnksICdhZGRJbnN0YW5jZScsIHtcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24gKGlkLCBpbnN0YW5jZSkge1xuICAgICAgICBpbnN0YW5jZXMuYWRkKGlkLCBpbnN0YW5jZSk7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShKU0ZsYXNoQnJpZGdlUmVnaXN0cnksICdnZXRJbnN0YW5jZUJ5SUQnLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2VzLmdldChpZCk7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShKU0ZsYXNoQnJpZGdlUmVnaXN0cnksICdyZW1vdmVJbnN0YW5jZUJ5SUQnLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2VzLnJlbW92ZShpZCk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBjbGFzcyBNdWx0aXBsZVZhbHVlc1JlZ2lzdHJ5IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJpZXMgPSB7fTtcbiAgICB9XG4gICAgYWRkIChpZCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9yZWdpc3RyaWVzW2lkXSkge1xuICAgICAgICAgICAgdGhpcy5fcmVnaXN0cmllc1tpZF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcmVnaXN0cmllc1tpZF0uaW5kZXhPZih2YWx1ZSkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RyaWVzW2lkXS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyaWVzW2lkXSB8fCBbXTtcbiAgICB9XG4gICAgZmlsdGVyS2V5cyAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fcmVnaXN0cmllcykuZmlsdGVyKGhhbmRsZXIpO1xuICAgIH1cbiAgICBmaW5kQnlWYWx1ZSAodmFsdWUpIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9yZWdpc3RyaWVzKS5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdHJpZXNba2V5XS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH1cbiAgICByZW1vdmUoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuX3JlZ2lzdHJpZXNba2V5XSkgeyByZXR1cm47IH1cblxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9yZWdpc3RyaWVzW2tleV0uaW5kZXhPZih2YWx1ZSk7XG5cbiAgICAgICAgaWYgKGluZGV4IDwgMCkgeyByZXR1cm47IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdHJpZXNba2V5XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICByZW1vdmVCeUtleSAoaWQpIHtcbiAgICAgICAgbGV0IG9sZCA9IHRoaXMuX3JlZ2lzdHJpZXNbaWRdO1xuICAgICAgICBkZWxldGUgdGhpcy5fcmVnaXN0cmllc1tpZF07XG4gICAgICAgIHJldHVybiBvbGQ7XG4gICAgfVxuICAgIHJlbW92ZUJ5VmFsdWUgKHZhbHVlKSB7XG4gICAgICAgIGxldCBrZXlzID0gdGhpcy5maW5kQnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBrZXlzLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVBbGwoKSB7XG4gICAgICAgIGxldCBvbGQgPSB0aGlzLl9yZWdpc3RyaWVzO1xuICAgICAgICB0aGlzLl9yZWdpc3RyaWVzID0ge307XG4gICAgICAgIHJldHVybiBvbGQ7XG4gICAgfVxuICAgIHNpemUoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9yZWdpc3RyaWVzKS5sZW5ndGg7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2luZ2xlVmFsdWVSZWdpc3RyeSB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLl9yZWdpc3RyaWVzID0ge307XG4gICAgfVxuICAgIGFkZCAoaWQsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJpZXNbaWRdID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdHJpZXNbaWRdO1xuICAgIH1cbiAgICBmaWx0ZXJLZXlzIChoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9yZWdpc3RyaWVzKS5maWx0ZXIoaGFuZGxlcik7XG4gICAgfVxuICAgIGZpbmRCeVZhbHVlICh2YWx1ZSkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX3JlZ2lzdHJpZXMpLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0cmllc1trZXldID09PSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfVxuICAgIHJlbW92ZSAoaWQpIHtcbiAgICAgICAgbGV0IG9sZCA9IHRoaXMuX3JlZ2lzdHJpZXNbaWRdO1xuICAgICAgICBkZWxldGUgdGhpcy5fcmVnaXN0cmllc1tpZF07XG4gICAgICAgIHJldHVybiBvbGQ7XG4gICAgfVxuICAgIHJlbW92ZUJ5VmFsdWUgKHZhbHVlKSB7XG4gICAgICAgIGxldCBrZXlzID0gdGhpcy5maW5kQnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBrZXlzLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUoa2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZUFsbCgpIHtcbiAgICAgICAgbGV0IG9sZCA9IHRoaXMuX3JlZ2lzdHJpZXM7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJpZXMgPSB7fTtcbiAgICAgICAgcmV0dXJuIG9sZDtcbiAgICB9XG4gICAgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3JlZ2lzdHJpZXMpLmxlbmd0aDtcbiAgICB9XG59XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIHVuaXF1ZShwcmVmaXgpIHtcbiAgICBsZXQgY291bnQgPSAtMTtcbiAgICByZXR1cm4gZiA9PiB7XG4gICAgICAgIHJldHVybiBgJHtwcmVmaXh9XyR7Kytjb3VudH1gO1xuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsYmFja1RpbWVvdXQodGltZXIsIG9uU3VjY2Vzcywgb25UaW1lb3V0KSB7XG5cbiAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgIG9uU3VjY2VzcyA9IG5vb3A7XG4gICAgICAgIG9uVGltZW91dCgpO1xuXG4gICAgfSwgdGltZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICBvblN1Y2Nlc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aElEKHBhcmVudCwgaWQsIGNsZWFuQ29udGVudCA9IGZhbHNlKSB7XG4gICAgdmFyIG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5FbC5pZCA9IGlkO1xuICAgIGlmIChjbGVhbkNvbnRlbnQpIHtcbiAgICAgICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICAgIH1cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobkVsKTtcbiAgICByZXR1cm4gbkVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQb3NpdGl2ZUludChuZXdWYWwsIG9sZFZhbCkge1xuICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChuZXdWYWwpKSAmJiBpc0Zpbml0ZShuZXdWYWwpICYmIG5ld1ZhbCA+IDAgPyBuZXdWYWwgOiBvbGRWYWw7XG59XG5cbmxldCBlbmRzV2l0aCA9IChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGgpIHJldHVybiBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoO1xuICAgIHJldHVybiBmdW5jdGlvbiBlbmRzV2l0aCAoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbikge1xuICAgICAgICB2YXIgc3ViamVjdFN0cmluZyA9IHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgcG9zaXRpb24gPiBzdWJqZWN0U3RyaW5nLmxlbmd0aCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBzdWJqZWN0U3RyaW5nLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbiAtPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuICAgICAgICB2YXIgbGFzdEluZGV4ID0gc3ViamVjdFN0cmluZy5pbmRleE9mKHNlYXJjaFN0cmluZywgcG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gbGFzdEluZGV4ICE9PSAtMSAmJiBsYXN0SW5kZXggPT09IHBvc2l0aW9uO1xuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRW5kc1dpdGgoc3RyaW5nLCBzZWFyY2gpIHtcbiAgICByZXR1cm4gZW5kc1dpdGguY2FsbChzdHJpbmcsIHNlYXJjaCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlRmxhc2hFbChlbCkge1xuICAgIC8vIGNhbid0IHVzZSBkaXNwbGF5IG5vbmUgb3IgdmlzaWJpbGl0eSBub25lIGJlY2F1c2Ugd2lsbCBibG9jayBmbGFzaCBpbiBzb21lIGJyb3dzZXJzXG4gICAgZWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGVsLnN0eWxlLmxlZnQgPSAnLTFweCc7XG4gICAgZWwuc3R5bGUudG9wID0gJy0xcHgnO1xuICAgIGVsLnN0eWxlLndpZHRoID0gJzFweCc7XG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gJzFweCc7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBNRVRIT0RTID0gW1xuICAgICdoYW5kc2hha2VWZXJzaW9uJyxcbiAgICAnaW5pdEFkJyxcbiAgICAnc3RhcnRBZCcsXG4gICAgJ3N0b3BBZCcsXG4gICAgJ3NraXBBZCcsIC8vIFZQQUlEIDIuMCBuZXcgbWV0aG9kXG4gICAgJ3Jlc2l6ZUFkJyxcbiAgICAncGF1c2VBZCcsXG4gICAgJ3Jlc3VtZUFkJyxcbiAgICAnZXhwYW5kQWQnLFxuICAgICdjb2xsYXBzZUFkJyxcbiAgICAnc3Vic2NyaWJlJyxcbiAgICAndW5zdWJzY3JpYmUnXG5dO1xuXG52YXIgRVZFTlRTID0gW1xuICAgICdBZExvYWRlZCcsXG4gICAgJ0FkU3RhcnRlZCcsXG4gICAgJ0FkU3RvcHBlZCcsXG4gICAgJ0FkU2tpcHBlZCcsXG4gICAgJ0FkU2tpcHBhYmxlU3RhdGVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgJ0FkU2l6ZUNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRMaW5lYXJDaGFuZ2UnLFxuICAgICdBZER1cmF0aW9uQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZEV4cGFuZGVkQ2hhbmdlJyxcbiAgICAnQWRSZW1haW5pbmdUaW1lQ2hhbmdlJywgLy8gW0RlcHJlY2F0ZWQgaW4gMi4wXSBidXQgd2lsbCBiZSBzdGlsbCBmaXJlZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAnQWRWb2x1bWVDaGFuZ2UnLFxuICAgICdBZEltcHJlc3Npb24nLFxuICAgICdBZFZpZGVvU3RhcnQnLFxuICAgICdBZFZpZGVvRmlyc3RRdWFydGlsZScsXG4gICAgJ0FkVmlkZW9NaWRwb2ludCcsXG4gICAgJ0FkVmlkZW9UaGlyZFF1YXJ0aWxlJyxcbiAgICAnQWRWaWRlb0NvbXBsZXRlJyxcbiAgICAnQWRDbGlja1RocnUnLFxuICAgICdBZEludGVyYWN0aW9uJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZFVzZXJBY2NlcHRJbnZpdGF0aW9uJyxcbiAgICAnQWRVc2VyTWluaW1pemUnLFxuICAgICdBZFVzZXJDbG9zZScsXG4gICAgJ0FkUGF1c2VkJyxcbiAgICAnQWRQbGF5aW5nJyxcbiAgICAnQWRMb2cnLFxuICAgICdBZEVycm9yJ1xuXTtcblxudmFyIEdFVFRFUlMgPSBbXG4gICAgJ2dldEFkTGluZWFyJyxcbiAgICAnZ2V0QWRXaWR0aCcsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkSGVpZ2h0JywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRFeHBhbmRlZCcsXG4gICAgJ2dldEFkU2tpcHBhYmxlU3RhdGUnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZFJlbWFpbmluZ1RpbWUnLFxuICAgICdnZXRBZER1cmF0aW9uJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRWb2x1bWUnLFxuICAgICdnZXRBZENvbXBhbmlvbnMnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZEljb25zJyAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuXTtcblxudmFyIFNFVFRFUlMgPSBbXG4gICAgJ3NldEFkVm9sdW1lJ1xuXTtcblxuXG4vKipcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGdsb2JhbCBtZW1iZXIuIFRoZSBjYWxsYmFjayB1c2Ugbm9kZWpzIGVycm9yLWZpcnN0IGNhbGxiYWNrIHN0eWxlXG4gKiBAY2FsbGJhY2sgTm9kZVN0eWxlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9XG4gKiBAcGFyYW0ge3VuZGVmaW5lZHxvYmplY3R9XG4gKi9cblxuXG4vKipcbiAqIElWUEFJREFkVW5pdFxuICpcbiAqIEBjbGFzc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjcmVhdGl2ZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7SFRNTFZpZGVvRWxlbWVudH0gdmlkZW9cbiAqL1xuZnVuY3Rpb24gSVZQQUlEQWRVbml0KGNyZWF0aXZlLCBlbCwgdmlkZW8pIHt9XG5cblxuLyoqXG4gKiBoYW5kc2hha2VWZXJzaW9uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFZQQUlEVmVyc2lvblxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5oYW5kc2hha2VWZXJzaW9uID0gZnVuY3Rpb24gKFZQQUlEVmVyc2lvbiwgY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGluaXRBZFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICogQHBhcmFtIHtzdHJpbmd9IHZpZXdNb2RlIGNhbiBiZSAnbm9ybWFsJywgJ3RodW1ibmFpbCcgb3IgJ2Z1bGxzY3JlZW4nXG4gKiBAcGFyYW0ge251bWJlcn0gZGVzaXJlZEJpdHJhdGUgaW5kaWNhdGVzIHRoZSBkZXNpcmVkIGJpdHJhdGUgaW4ga2Jwc1xuICogQHBhcmFtIHtvYmplY3R9IFtjcmVhdGl2ZURhdGFdIHVzZWQgZm9yIGFkZGl0aW9uYWwgaW5pdGlhbGl6YXRpb24gZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IFtlbnZpcm9ubWVudFZhcnNdIHVzZWQgZm9yIHBhc3NpbmcgaW1wbGVtZW50YXRpb24tc3BlY2lmaWMgb2YganMgdmVyc2lvblxuICogQHBhcmFtIHtOb2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5pbml0QWQgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSwgZW52aXJvbm1lbnRWYXJzLCBjYWxsYmFjaykge307XG5cbi8qKlxuICogc3RhcnRBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc3RhcnRBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBzdG9wQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnN0b3BBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBza2lwQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnNraXBBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiByZXNpemVBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUucmVzaXplQWQgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHBhdXNlQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnBhdXNlQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogcmVzdW1lQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnJlc3VtZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGV4cGFuZEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5leHBhbmRBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBjb2xsYXBzZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5jb2xsYXBzZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHN1YnNjcmliZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gaGFuZGxlclxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlciwgY29udGV4dCkge307XG5cbi8qKlxuICogc3RhcnRBZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlclxuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIpIHt9O1xuXG5cblxuLyoqXG4gKiBnZXRBZExpbmVhclxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRMaW5lYXIgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRXaWR0aFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRXaWR0aCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZEhlaWdodFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRIZWlnaHQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRFeHBhbmRlZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRFeHBhbmRlZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZFNraXBwYWJsZVN0YXRlXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZFNraXBwYWJsZVN0YXRlID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkUmVtYWluaW5nVGltZVxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRSZW1haW5pbmdUaW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkRHVyYXRpb25cbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkRHVyYXRpb24gPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRWb2x1bWVcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkVm9sdW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkQ29tcGFuaW9uc1xuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRDb21wYW5pb25zID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkSWNvbnNcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkSWNvbnMgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc2V0QWRWb2x1bWVcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdm9sdW1lXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnNldEFkVm9sdW1lID0gZnVuY3Rpb24odm9sdW1lLCBjYWxsYmFjaykge307XG5cbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ01FVEhPRFMnLCBNRVRIT0RTKTtcbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ0dFVFRFUlMnLCBHRVRURVJTKTtcbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ1NFVFRFUlMnLCBTRVRURVJTKTtcbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ0VWRU5UUycsICBFVkVOVFMpO1xuXG5cbnZhciBWUEFJRDFfTUVUSE9EUyA9IE1FVEhPRFMuZmlsdGVyKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIHJldHVybiBbJ3NraXBBZCddLmluZGV4T2YobWV0aG9kKSA9PT0gLTE7XG59KTtcblxuYWRkU3RhdGljVG9JbnRlcmZhY2UoSVZQQUlEQWRVbml0LCAnY2hlY2tWUEFJREludGVyZmFjZScsIGZ1bmN0aW9uIGNoZWNrVlBBSURJbnRlcmZhY2UgKGNyZWF0aXZlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFZQQUlEMV9NRVRIT0RTLmV2ZXJ5KGZ1bmN0aW9uKGtleSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGNyZWF0aXZlW2tleV0gPT09ICdmdW5jdGlvbic7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElWUEFJREFkVW5pdDtcblxuZnVuY3Rpb24gYWRkU3RhdGljVG9JbnRlcmZhY2UoSW50ZXJmYWNlLCBuYW1lLCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbnRlcmZhY2UsIG5hbWUsIHtcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbn1cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSVZQQUlEQWRVbml0ID0gcmVxdWlyZSgnLi9JVlBBSURBZFVuaXQnKTtcbnZhciBTdWJzY3JpYmVyID0gcmVxdWlyZSgnLi9zdWJzY3JpYmVyJyk7XG52YXIgY2hlY2tWUEFJREludGVyZmFjZSA9IElWUEFJREFkVW5pdC5jaGVja1ZQQUlESW50ZXJmYWNlO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIE1FVEhPRFMgPSBJVlBBSURBZFVuaXQuTUVUSE9EUztcbnZhciBFUlJPUiA9ICdBZEVycm9yJztcbnZhciBBRF9DTElDSyA9ICdBZENsaWNrVGhydSc7XG52YXIgRklMVEVSRURfRVZFTlRTID0gSVZQQUlEQWRVbml0LkVWRU5UUy5maWx0ZXIoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuIGV2ZW50ICE9IEFEX0NMSUNLO1xufSk7XG5cbi8qKlxuICogVGhpcyBjYWxsYmFjayBpcyBkaXNwbGF5ZWQgYXMgZ2xvYmFsIG1lbWJlci4gVGhlIGNhbGxiYWNrIHVzZSBub2RlanMgZXJyb3ItZmlyc3QgY2FsbGJhY2sgc3R5bGVcbiAqIEBjYWxsYmFjayBOb2RlU3R5bGVDYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd8bnVsbH1cbiAqIEBwYXJhbSB7dW5kZWZpbmVkfG9iamVjdH1cbiAqL1xuXG5cbi8qKlxuICogVlBBSURBZFVuaXRcbiAqIEBjbGFzc1xuICpcbiAqIEBwYXJhbSBWUEFJRENyZWF0aXZlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbZWxdIHRoaXMgd2lsbCBiZSB1c2VkIGluIGluaXRBZCBlbnZpcm9ubWVudFZhcnMuc2xvdCBpZiBkZWZpbmVkXG4gKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IFt2aWRlb10gdGhpcyB3aWxsIGJlIHVzZWQgaW4gaW5pdEFkIGVudmlyb25tZW50VmFycy52aWRlb1Nsb3QgaWYgZGVmaW5lZFxuICovXG5mdW5jdGlvbiBWUEFJREFkVW5pdChWUEFJRENyZWF0aXZlLCBlbCwgdmlkZW8sIGlmcmFtZSkge1xuICAgIHRoaXMuX2lzVmFsaWQgPSBjaGVja1ZQQUlESW50ZXJmYWNlKFZQQUlEQ3JlYXRpdmUpO1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0aXZlID0gVlBBSURDcmVhdGl2ZTtcbiAgICAgICAgdGhpcy5fZWwgPSBlbDtcbiAgICAgICAgdGhpcy5fdmlkZW9FbCA9IHZpZGVvO1xuICAgICAgICB0aGlzLl9pZnJhbWUgPSBpZnJhbWU7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzID0gbmV3IFN1YnNjcmliZXIoKTtcbiAgICAgICAgJGFkZEV2ZW50c1N1YnNjcmliZXJzLmNhbGwodGhpcyk7XG4gICAgfVxufVxuXG5WUEFJREFkVW5pdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKElWUEFJREFkVW5pdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIGlzVmFsaWRWUEFJREFkIHdpbGwgcmV0dXJuIGlmIHRoZSBWUEFJRENyZWF0aXZlIHBhc3NlZCBpbiBjb25zdHJ1Y3RvciBpcyB2YWxpZCBvciBub3RcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuaXNWYWxpZFZQQUlEQWQgPSBmdW5jdGlvbiBpc1ZhbGlkVlBBSURBZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNWYWxpZDtcbn07XG5cbklWUEFJREFkVW5pdC5NRVRIT0RTLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgLy9OT1RFOiB0aGlzIG1ldGhvZHMgYXJndW1lbnRzIG9yZGVyIGFyZSBpbXBsZW1lbnRlZCBkaWZmZXJlbnRseSBmcm9tIHRoZSBzcGVjXG4gICAgdmFyIGlnbm9yZXMgPSBbXG4gICAgICAgICdzdWJzY3JpYmUnLFxuICAgICAgICAndW5zdWJzY3JpYmUnLFxuICAgICAgICAnaW5pdEFkJ1xuICAgIF07XG5cbiAgICBpZiAoaWdub3Jlcy5pbmRleE9mKG1ldGhvZCkgIT09IC0xKSByZXR1cm47XG5cbiAgICBWUEFJREFkVW5pdC5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyaWF0eSA9IElWUEFJREFkVW5pdC5wcm90b3R5cGVbbWV0aG9kXS5sZW5ndGg7XG4gICAgICAgIC8vIFRPRE8gYXZvaWQgbGVha2luZyBhcmd1bWVudHNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzMyLWxlYWtpbmctYXJndW1lbnRzXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gKGFyaWF0eSA9PT0gYXJncy5sZW5ndGgpID8gYXJncy5wb3AoKSA6IHVuZGVmaW5lZDtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQsIGVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fY3JlYXRpdmVbbWV0aG9kXS5hcHBseSh0aGlzLl9jcmVhdGl2ZSwgYXJncyk7XG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgdGhpcy5fc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpO1xuICAgICAgICB9LmJpbmQodGhpcyksIDApO1xuICAgIH07XG59KTtcblxuXG4vKipcbiAqIGluaXRBZCBjb25jcmVhdGUgaW1wbGVtZW50YXRpb25cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAqIEBwYXJhbSB7c3RyaW5nfSB2aWV3TW9kZSBjYW4gYmUgJ25vcm1hbCcsICd0aHVtYm5haWwnIG9yICdmdWxsc2NyZWVuJ1xuICogQHBhcmFtIHtudW1iZXJ9IGRlc2lyZWRCaXRyYXRlIGluZGljYXRlcyB0aGUgZGVzaXJlZCBiaXRyYXRlIGluIGticHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY3JlYXRpdmVEYXRhXSB1c2VkIGZvciBhZGRpdGlvbmFsIGluaXRpYWxpemF0aW9uIGRhdGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBbZW52aXJvbm1lbnRWYXJzXSB1c2VkIGZvciBwYXNzaW5nIGltcGxlbWVudGF0aW9uLXNwZWNpZmljIG9mIGpzIHZlcnNpb24sIGlmIGVsICYgdmlkZW8gd2FzIHVzZWQgaW4gY29uc3RydWN0b3Igc2xvdCAmIHZpZGVvU2xvdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqIEBwYXJhbSB7Tm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS5pbml0QWQgPSBmdW5jdGlvbiBpbml0QWQod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEsIGVudmlyb25tZW50VmFycywgY2FsbGJhY2spIHtcbiAgICBjcmVhdGl2ZURhdGEgPSBjcmVhdGl2ZURhdGEgfHwge307XG4gICAgZW52aXJvbm1lbnRWYXJzID0gdXRpbHMuZXh0ZW5kKHtcbiAgICAgICAgc2xvdDogdGhpcy5fZWwsXG4gICAgICAgIHZpZGVvU2xvdDogdGhpcy5fdmlkZW9FbFxuICAgIH0sIGVudmlyb25tZW50VmFycyB8fCB7fSk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRpdmUuaW5pdEFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhLCBlbnZpcm9ubWVudFZhcnMpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvcik7XG4gICAgfS5iaW5kKHRoaXMpLCAwKTtcbn07XG5cbi8qKlxuICogc3Vic2NyaWJlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBoYW5kbGVyXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50LCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMuc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50LCBjb250ZXh0KTtcbn07XG5cblxuLyoqXG4gKiB1bnN1YnNjcmliZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gaGFuZGxlclxuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZShldmVudCwgaGFuZGxlcikge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnVuc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50KTtcbn07XG5cbi8vYWxpYXNcblZQQUlEQWRVbml0LnByb3RvdHlwZS5vbiA9IFZQQUlEQWRVbml0LnByb3RvdHlwZS5zdWJzY3JpYmU7XG5WUEFJREFkVW5pdC5wcm90b3R5cGUub2ZmID0gVlBBSURBZFVuaXQucHJvdG90eXBlLnVuc3Vic2NyaWJlO1xuXG5JVlBBSURBZFVuaXQuR0VUVEVSUy5mb3JFYWNoKGZ1bmN0aW9uKGdldHRlcikge1xuICAgIFZQQUlEQWRVbml0LnByb3RvdHlwZVtnZXR0ZXJdID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0LCBlcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0aXZlW2dldHRlcl0oKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgMCk7XG4gICAgfTtcbn0pO1xuXG4vKipcbiAqIHNldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHZvbHVtZVxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLnNldEFkVm9sdW1lID0gZnVuY3Rpb24gc2V0QWRWb2x1bWUodm9sdW1lLCBjYWxsYmFjaykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciByZXN1bHQsIGVycm9yID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0aXZlLnNldEFkVm9sdW1lKHZvbHVtZSk7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9jcmVhdGl2ZS5nZXRBZFZvbHVtZSgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIGVycm9yID0gdXRpbHMudmFsaWRhdGUocmVzdWx0ID09PSB2b2x1bWUsICdmYWlsZWQgdG8gYXBwbHkgdm9sdW1lOiAnICsgdm9sdW1lKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvciwgcmVzdWx0KTtcbiAgICB9LmJpbmQodGhpcyksIDApO1xufTtcblxuVlBBSURBZFVuaXQucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB0aGlzLnN0b3BBZCgpO1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnVuc3Vic2NyaWJlQWxsKCk7XG59O1xuXG5mdW5jdGlvbiAkYWRkRXZlbnRzU3Vic2NyaWJlcnMoKSB7XG4gICAgLy8gc29tZSBhZHMgaW1wbGVtZW50XG4gICAgLy8gc28gdGhleSBvbmx5IGhhbmRsZSBvbmUgc3Vic2NyaWJlclxuICAgIC8vIHRvIGhhbmRsZSB0aGlzIHdlIGNyZWF0ZSBvdXIgb25lXG4gICAgRklMVEVSRURfRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2NyZWF0aXZlLnN1YnNjcmliZSgkdHJpZ2dlci5iaW5kKHRoaXMsIGV2ZW50KSwgZXZlbnQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAvLyBtYXAgdGhlIGNsaWNrIGV2ZW50IHRvIGJlIGFuIG9iamVjdCBpbnN0ZWFkIG9mIGRlcGVuZGluZyBvZiB0aGUgb3JkZXIgb2YgdGhlIGFyZ3VtZW50c1xuICAgIC8vIGFuZCB0byBiZSBjb25zaXN0ZW50IHdpdGggdGhlIGZsYXNoXG4gICAgdGhpcy5fY3JlYXRpdmUuc3Vic2NyaWJlKCRjbGlja1RocnVIb29rLmJpbmQodGhpcyksIEFEX0NMSUNLKTtcblxuICAgIC8vIGJlY2F1c2Ugd2UgYXJlIGFkZGluZyB0aGUgZWxlbWVudCBpbnNpZGUgdGhlIGlmcmFtZVxuICAgIC8vIHRoZSB1c2VyIGlzIG5vdCBhYmxlIHRvIGNsaWNrIGluIHRoZSB2aWRlb1xuICAgIGlmICh0aGlzLl92aWRlb0VsKSB7XG4gICAgICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSB0aGlzLl9pZnJhbWUuY29udGVudERvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHZpZGVvRWwgPSB0aGlzLl92aWRlb0VsO1xuICAgICAgICBkb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZpZGVvRWwuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiAkY2xpY2tUaHJ1SG9vayh1cmwsIGlkLCBwbGF5ZXJIYW5kbGVzKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMudHJpZ2dlclN5bmMoQURfQ0xJQ0ssIHt1cmw6IHVybCwgaWQ6IGlkLCBwbGF5ZXJIYW5kbGVzOiBwbGF5ZXJIYW5kbGVzfSk7XG59XG5cbmZ1bmN0aW9uICR0cmlnZ2VyKGV2ZW50KSB7XG4gICAgLy8gVE9ETyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50c1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRrYWFudG9ub3YvYmx1ZWJpcmQvd2lraS9PcHRpbWl6YXRpb24ta2lsbGVycyMzMi1sZWFraW5nLWFyZ3VtZW50c1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnRyaWdnZXIoZXZlbnQsIEFycmF5LnByb3RvdHlwZS5zbGljZShhcmd1bWVudHMsIDEpKTtcbn1cblxuZnVuY3Rpb24gY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCBzdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCkge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhlcnJvciwgcmVzdWx0KTtcbiAgICB9IGVsc2UgaWYgKGVycm9yKSB7XG4gICAgICAgIHN1YnNjcmliZXJzLnRyaWdnZXIoRVJST1IsIGVycm9yKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURBZFVuaXQ7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIHVuaXF1ZSA9IHV0aWxzLnVuaXF1ZSgndnBhaWRJZnJhbWUnKTtcbnZhciBWUEFJREFkVW5pdCA9IHJlcXVpcmUoJy4vVlBBSURBZFVuaXQnKTtcblxudmFyIGRlZmF1bHRUZW1wbGF0ZSA9ICc8IURPQ1RZUEUgaHRtbD4nICtcbiAgICAnPGh0bWwgbGFuZz1cImVuXCI+JyArXG4gICAgJzxoZWFkPjxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPjwvaGVhZD4nICtcbiAgICAnPGJvZHkgc3R5bGU9XCJtYXJnaW46MDtwYWRkaW5nOjBcIj48ZGl2IGNsYXNzPVwiYWQtZWxlbWVudFwiPjwvZGl2PicgK1xuICAgICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJ7e2lmcmFtZVVSTF9KU319XCI+PC9zY3JpcHQ+JyArXG4gICAgJzxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPicgK1xuICAgICd3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKFxcJ3tcImV2ZW50XCI6IFwicmVhZHlcIiwgXCJpZFwiOiBcInt7aWZyYW1lSUR9fVwifVxcJywgXFwne3tvcmlnaW59fVxcJyk7JyArXG4gICAgJzwvc2NyaXB0PicgK1xuICAgICc8L2JvZHk+JyArXG4gICAgJzwvaHRtbD4nO1xuXG52YXIgQURfU1RPUFBFRCA9ICdBZFN0b3BwZWQnO1xuXG4vKipcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGdsb2JhbCBtZW1iZXIuIFRoZSBjYWxsYmFjayB1c2Ugbm9kZWpzIGVycm9yLWZpcnN0IGNhbGxiYWNrIHN0eWxlXG4gKiBAY2FsbGJhY2sgTm9kZVN0eWxlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9XG4gKiBAcGFyYW0ge3VuZGVmaW5lZHxvYmplY3R9XG4gKi9cblxuLyoqXG4gKiBWUEFJREhUTUw1Q2xpZW50XG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCB0aGF0IHdpbGwgY29udGFpbiB0aGUgaWZyYW1lIHRvIGxvYWQgYWRVbml0IGFuZCBhIGVsIHRvIGFkZCB0byBhZFVuaXQgc2xvdFxuICogQHBhcmFtIHtIVE1MVmlkZW9FbGVtZW50fSB2aWRlbyBkZWZhdWx0IHZpZGVvIGVsZW1lbnQgdG8gYmUgdXNlZCBieSBhZFVuaXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBbdGVtcGxhdGVDb25maWddIHRlbXBsYXRlOiBodG1sIHRlbXBsYXRlIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCwgZXh0cmFPcHRpb25zOiB0byBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFt2cGFpZE9wdGlvbnNdIHRpbWVvdXQ6IHdoZW4gbG9hZGluZyBhZFVuaXRcbiAqL1xuZnVuY3Rpb24gVlBBSURIVE1MNUNsaWVudChlbCwgdmlkZW8sIHRlbXBsYXRlQ29uZmlnLCB2cGFpZE9wdGlvbnMpIHtcbiAgICB0ZW1wbGF0ZUNvbmZpZyA9IHRlbXBsYXRlQ29uZmlnIHx8IHt9O1xuXG4gICAgdGhpcy5faWQgPSB1bmlxdWUoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuX2ZyYW1lQ29udGFpbmVyID0gdXRpbHMuY3JlYXRlRWxlbWVudEluRWwoZWwsICdkaXYnKTtcbiAgICB0aGlzLl92aWRlb0VsID0gdmlkZW87XG4gICAgdGhpcy5fdnBhaWRPcHRpb25zID0gdnBhaWRPcHRpb25zIHx8IHt0aW1lb3V0OiAxMDAwMH07XG5cbiAgICB0aGlzLl90ZW1wbGF0ZUNvbmZpZyA9IHtcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlQ29uZmlnLnRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZSxcbiAgICAgICAgZXh0cmFPcHRpb25zOiB0ZW1wbGF0ZUNvbmZpZy5leHRyYU9wdGlvbnMgfHwge31cbiAgICB9O1xufVxuXG4vKipcbiAqIGRlc3Ryb3lcbiAqXG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBpc0Rlc3Ryb3llZFxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmlzRGVzdHJveWVkID0gZnVuY3Rpb24gaXNEZXN0cm95ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3Ryb3llZDtcbn07XG5cbi8qKlxuICogbG9hZEFkVW5pdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhZFVSTCB1cmwgb2YgdGhlIGpzIG9mIHRoZSBhZFVuaXRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmxvYWRBZFVuaXQgPSBmdW5jdGlvbiBsb2FkQWRVbml0KGFkVVJMLCBjYWxsYmFjaykge1xuICAgICR0aHJvd0lmRGVzdHJveWVkLmNhbGwodGhpcyk7XG4gICAgJHVubG9hZFByZXZpb3VzQWRVbml0LmNhbGwodGhpcyk7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgdmFyIGZyYW1lID0gdXRpbHMuY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQoXG4gICAgICAgIHRoaXMuX2ZyYW1lQ29udGFpbmVyLFxuICAgICAgICB0aGlzLl90ZW1wbGF0ZUNvbmZpZy50ZW1wbGF0ZSxcbiAgICAgICAgdXRpbHMuZXh0ZW5kKHtcbiAgICAgICAgICAgIGlmcmFtZVVSTF9KUzogYWRVUkwsXG4gICAgICAgICAgICBpZnJhbWVJRDogdGhpcy5nZXRJRCgpLFxuICAgICAgICAgICAgb3JpZ2luOiBnZXRPcmlnaW4oKVxuICAgICAgICB9LCB0aGlzLl90ZW1wbGF0ZUNvbmZpZy5leHRyYU9wdGlvbnMpXG4gICAgKTtcblxuICAgIHRoaXMuX2ZyYW1lID0gZnJhbWU7XG5cbiAgICB0aGlzLl9vbkxvYWQgPSB1dGlscy5jYWxsYmFja1RpbWVvdXQoXG4gICAgICAgIHRoaXMuX3ZwYWlkT3B0aW9ucy50aW1lb3V0LFxuICAgICAgICBvbkxvYWQuYmluZCh0aGlzKSxcbiAgICAgICAgb25UaW1lb3V0LmJpbmQodGhpcylcbiAgICApO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLl9vbkxvYWQpO1xuXG4gICAgZnVuY3Rpb24gb25Mb2FkIChlKSB7XG4gICAgICAgIC8qanNoaW50IHZhbGlkdGhpczogZmFsc2UgKi9cbiAgICAgICAgLy9kb24ndCBjbGVhciB0aW1lb3V0XG4gICAgICAgIGlmIChlLm9yaWdpbiAhPT0gZ2V0T3JpZ2luKCkpIHJldHVybjtcbiAgICAgICAgdmFyIHJlc3VsdCA9IEpTT04ucGFyc2UoZS5kYXRhKTtcblxuICAgICAgICAvL2Rvbid0IGNsZWFyIHRpbWVvdXRcbiAgICAgICAgaWYgKHJlc3VsdC5pZCAhPT0gdGhhdC5nZXRJRCgpKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGFkVW5pdCwgZXJyb3IsIGNyZWF0ZUFkO1xuICAgICAgICBpZiAoIXRoYXQuX2ZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcblxuICAgICAgICAgICAgZXJyb3IgPSAndGhlIGlmcmFtZSBpcyBub3QgYW55bW9yZSBpbiB0aGUgRE9NIHRyZWUnO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjcmVhdGVBZCA9IHRoYXQuX2ZyYW1lLmNvbnRlbnRXaW5kb3cuZ2V0VlBBSURBZDtcbiAgICAgICAgICAgIGVycm9yID0gdXRpbHMudmFsaWRhdGUodHlwZW9mIGNyZWF0ZUFkID09PSAnZnVuY3Rpb24nLCAndGhlIGFkIGRpZG5cXCd0IHJldHVybiBhIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhbiBhZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgdmFyIGFkRWwgPSB0aGF0Ll9mcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZC1lbGVtZW50Jyk7XG4gICAgICAgICAgICBhZFVuaXQgPSBuZXcgVlBBSURBZFVuaXQoY3JlYXRlQWQoKSwgYWRFbCwgdGhhdC5fdmlkZW9FbCwgdGhhdC5fZnJhbWUpO1xuICAgICAgICAgICAgYWRVbml0LnN1YnNjcmliZShBRF9TVE9QUEVELCAkYWREZXN0cm95ZWQuYmluZCh0aGF0KSk7XG4gICAgICAgICAgICBlcnJvciA9IHV0aWxzLnZhbGlkYXRlKGFkVW5pdC5pc1ZhbGlkVlBBSURBZCgpLCAndGhlIGFkZCBpcyBub3QgZnVsbHkgY29tcGxhaW50IHdpdGggVlBBSUQgc3BlY2lmaWNhdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhhdC5fYWRVbml0ID0gYWRVbml0O1xuICAgICAgICAkZGVzdHJveUxvYWRMaXN0ZW5lci5jYWxsKHRoYXQpO1xuICAgICAgICBjYWxsYmFjayhlcnJvciwgZXJyb3IgPyBudWxsIDogYWRVbml0KTtcblxuICAgICAgICAvL2NsZWFyIHRpbWVvdXRcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgICBjYWxsYmFjaygndGltZW91dCcsIG51bGwpO1xuICAgIH1cbn07XG5cbi8qKlxuICogdW5sb2FkQWRVbml0XG4gKlxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS51bmxvYWRBZFVuaXQgPSBmdW5jdGlvbiB1bmxvYWRBZFVuaXQoKSB7XG4gICAgJHVubG9hZFByZXZpb3VzQWRVbml0LmNhbGwodGhpcyk7XG59O1xuXG4vKipcbiAqIGdldElEIHdpbGwgcmV0dXJuIHRoZSB1bmlxdWUgaWRcbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmdldElEID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbn07XG5cblxuLyoqXG4gKiAkcmVtb3ZlRWxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cbmZ1bmN0aW9uICRyZW1vdmVFbChrZXkpIHtcbiAgICB2YXIgZWwgPSB0aGlzW2tleV07XG4gICAgaWYgKGVsKSB7XG4gICAgICAgIGVsLnJlbW92ZSgpO1xuICAgICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gJGFkRGVzdHJveWVkKCkge1xuICAgICRyZW1vdmVBZEVsZW1lbnRzLmNhbGwodGhpcyk7XG4gICAgZGVsZXRlIHRoaXMuX2FkVW5pdDtcbn1cblxuZnVuY3Rpb24gJHVubG9hZFByZXZpb3VzQWRVbml0KCkge1xuICAgICRyZW1vdmVBZEVsZW1lbnRzLmNhbGwodGhpcyk7XG4gICAgJGRlc3Ryb3lBZFVuaXQuY2FsbCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gJHJlbW92ZUFkRWxlbWVudHMoKSB7XG4gICAgJHJlbW92ZUVsLmNhbGwodGhpcywgJ19mcmFtZScpO1xuICAgICRkZXN0cm95TG9hZExpc3RlbmVyLmNhbGwodGhpcyk7XG59XG5cbi8qKlxuICogJGRlc3Ryb3lMb2FkTGlzdGVuZXJcbiAqXG4gKi9cbmZ1bmN0aW9uICRkZXN0cm95TG9hZExpc3RlbmVyKCkge1xuICAgIGlmICh0aGlzLl9vbkxvYWQpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLl9vbkxvYWQpO1xuICAgICAgICB1dGlscy5jbGVhckNhbGxiYWNrVGltZW91dCh0aGlzLl9vbkxvYWQpO1xuICAgICAgICBkZWxldGUgdGhpcy5fb25Mb2FkO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiAkZGVzdHJveUFkVW5pdCgpIHtcbiAgICBpZiAodGhpcy5fYWRVbml0KSB7XG4gICAgICAgIHRoaXMuX2FkVW5pdC5zdG9wQWQoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2FkVW5pdDtcbiAgICB9XG59XG5cbi8qKlxuICogJHRocm93SWZEZXN0cm95ZWRcbiAqXG4gKi9cbmZ1bmN0aW9uICR0aHJvd0lmRGVzdHJveWVkKCkge1xuICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yICgnVlBBSURIVE1MNUNsaWVudCBhbHJlYWR5IGRlc3Ryb3llZCEnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldE9yaWdpbigpIHtcbiAgICBpZiggd2luZG93LmxvY2F0aW9uLm9yaWdpbiApIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArXG4gICAgICAgICAgICAod2luZG93LmxvY2F0aW9uLnBvcnQgPyAnOicgKyB3aW5kb3cubG9jYXRpb24ucG9ydDogJycpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREhUTUw1Q2xpZW50O1xud2luZG93LlZQQUlESFRNTDVDbGllbnQgPSBWUEFJREhUTUw1Q2xpZW50O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFN1YnNjcmliZXIoKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSB7fTtcbn1cblxuU3Vic2NyaWJlci5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50TmFtZSwgY29udGV4dCkge1xuICAgIGlmICghdGhpcy5pc0hhbmRsZXJBdHRhY2hlZChoYW5kbGVyLCBldmVudE5hbWUpKSB7XG4gICAgICAgIHRoaXMuZ2V0KGV2ZW50TmFtZSkucHVzaCh7aGFuZGxlcjogaGFuZGxlciwgY29udGV4dDogY29udGV4dCwgZXZlbnROYW1lOiBldmVudE5hbWV9KTtcbiAgICB9XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50TmFtZSkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSB0aGlzLmdldChldmVudE5hbWUpLmZpbHRlcihmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICByZXR1cm4gaGFuZGxlciAhPT0gc3Vic2NyaWJlci5oYW5kbGVyO1xuICAgIH0pO1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmVBbGwgPSBmdW5jdGlvbiB1bnN1YnNjcmliZUFsbCgpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IHt9O1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgc3Vic2NyaWJlcnMgPSB0aGlzLmdldChldmVudE5hbWUpXG4gICAgICAgIC5jb25jYXQodGhpcy5nZXQoJyonKSk7XG5cbiAgICBzdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoYXQuaXNIYW5kbGVyQXR0YWNoZWQoc3Vic2NyaWJlci5oYW5kbGVyLCBzdWJzY3JpYmVyLmV2ZW50TmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmhhbmRsZXIuY2FsbChzdWJzY3JpYmVyLmNvbnRleHQsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnRyaWdnZXJTeW5jID0gZnVuY3Rpb24oZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgdmFyIHN1YnNjcmliZXJzID0gdGhpcy5nZXQoZXZlbnROYW1lKVxuICAgICAgICAuY29uY2F0KHRoaXMuZ2V0KCcqJykpO1xuXG4gICAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBzdWJzY3JpYmVyLmhhbmRsZXIuY2FsbChzdWJzY3JpYmVyLmNvbnRleHQsIGRhdGEpO1xuICAgIH0pO1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGV2ZW50TmFtZSkge1xuICAgIGlmICghdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkge1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdO1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUuaXNIYW5kbGVyQXR0YWNoZWQgPSBmdW5jdGlvbiBpc0hhbmRsZXJBdHRhY2hlZChoYW5kbGVyLCBldmVudE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoZXZlbnROYW1lKS5zb21lKGZ1bmN0aW9uKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIgPT09IHN1YnNjcmliZXIuaGFuZGxlcjtcbiAgICB9KVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdWJzY3JpYmVyO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogbm9vcCBhIGVtcHR5IGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vKipcbiAqIHZhbGlkYXRlIGlmIGlzIG5vdCB2YWxpZGF0ZSB3aWxsIHJldHVybiBhbiBFcnJvciB3aXRoIHRoZSBtZXNzYWdlXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBpc1ZhbGlkXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZShpc1ZhbGlkLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGlzVmFsaWQgPyBudWxsIDogbmV3IEVycm9yKG1lc3NhZ2UpO1xufVxuXG52YXIgdGltZW91dHMgPSB7fTtcbi8qKlxuICogY2xlYXJDYWxsYmFja1RpbWVvdXRcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIGhhbmRsZXIgdG8gcmVtb3ZlXG4gKi9cbmZ1bmN0aW9uIGNsZWFyQ2FsbGJhY2tUaW1lb3V0KGZ1bmMpIHtcbiAgICB2YXIgdGltZW91dCA9IHRpbWVvdXRzW2Z1bmNdO1xuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgZGVsZXRlIHRpbWVvdXRzW2Z1bmNdO1xuICAgIH1cbn1cblxuLyoqXG4gKiBjYWxsYmFja1RpbWVvdXQgaWYgdGhlIG9uU3VjY2VzcyBpcyBub3QgY2FsbGVkIGFuZCByZXR1cm5zIHRydWUgaW4gdGhlIHRpbWVsaW1pdCB0aGVuIG9uVGltZW91dCB3aWxsIGJlIGNhbGxlZFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lclxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25TdWNjZXNzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblRpbWVvdXRcbiAqL1xuZnVuY3Rpb24gY2FsbGJhY2tUaW1lb3V0KHRpbWVyLCBvblN1Y2Nlc3MsIG9uVGltZW91dCkge1xuICAgIHZhciBjYWxsYmFjaywgdGltZW91dDtcblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25TdWNjZXNzID0gbm9vcDtcbiAgICAgICAgZGVsZXRlIHRpbWVvdXRbY2FsbGJhY2tdO1xuICAgICAgICBvblRpbWVvdXQoKTtcbiAgICB9LCB0aW1lcik7XG5cbiAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVE9ETyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50c1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkL3dpa2kvT3B0aW1pemF0aW9uLWtpbGxlcnMjMzItbGVha2luZy1hcmd1bWVudHNcbiAgICAgICAgaWYgKG9uU3VjY2Vzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICBjbGVhckNhbGxiYWNrVGltZW91dChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGltZW91dHNbY2FsbGJhY2tdID0gdGltZW91dDtcblxuICAgIHJldHVybiBjYWxsYmFjaztcbn1cblxuXG4vKipcbiAqIGNyZWF0ZUVsZW1lbnRJbkVsXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRJbkVsKHBhcmVudCwgdGFnTmFtZSwgaWQpIHtcbiAgICB2YXIgbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICBpZiAoaWQpIG5FbC5pZCA9IGlkO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuRWwpO1xuICAgIHJldHVybiBuRWw7XG59XG5cbi8qKlxuICogY3JlYXRlSWZyYW1lV2l0aENvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSBzaW1wbGUgdGVtcGxhdGUgdXNpbmcge3t2YXJ9fVxuICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQocGFyZW50LCB0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIHZhciBpZnJhbWUgPSBjcmVhdGVJZnJhbWUocGFyZW50LCBudWxsLCBkYXRhLnpJbmRleCk7XG4gICAgaWYgKCFzZXRJZnJhbWVDb250ZW50KGlmcmFtZSwgc2ltcGxlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpKSkgcmV0dXJuO1xuICAgIHJldHVybiBpZnJhbWU7XG59XG5cbi8qKlxuICogY3JlYXRlSWZyYW1lXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUlmcmFtZShwYXJlbnQsIHVybCwgekluZGV4KSB7XG4gICAgdmFyIG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIG5FbC5zcmMgPSB1cmwgfHwgJ2Fib3V0OmJsYW5rJztcbiAgICBuRWwubWFyZ2luV2lkdGggPSAnMCc7XG4gICAgbkVsLm1hcmdpbkhlaWdodCA9ICcwJztcbiAgICBuRWwuZnJhbWVCb3JkZXIgPSAnMCc7XG4gICAgbkVsLndpZHRoID0gJzEwMCUnO1xuICAgIG5FbC5oZWlnaHQgPSAnMTAwJSc7XG4gICAgbkVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBuRWwuc3R5bGUubGVmdCA9ICcwJztcbiAgICBuRWwuc3R5bGUudG9wID0gJzAnO1xuICAgIG5FbC5zdHlsZS5tYXJnaW4gPSAnMHB4JztcbiAgICBuRWwuc3R5bGUucGFkZGluZyA9ICcwcHgnO1xuICAgIG5FbC5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG5cbiAgICBpZih6SW5kZXgpe1xuICAgICAgICBuRWwuc3R5bGUuekluZGV4ID0gekluZGV4O1xuICAgIH1cblxuICAgIG5FbC5zZXRBdHRyaWJ1dGUoJ1NDUk9MTElORycsJ05PJyk7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuRWwpO1xuICAgIHJldHVybiBuRWw7XG59XG5cbi8qKlxuICogc2ltcGxlVGVtcGxhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbmZ1bmN0aW9uIHNpbXBsZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKSB7XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9ICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSA/IEpTT04uc3RyaW5naWZ5KGRhdGFba2V5XSkgOiBkYXRhW2tleV07XG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShuZXcgUmVnRXhwKCd7eycgKyBrZXkgKyAnfX0nLCAnZycpLCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vKipcbiAqIHNldElmcmFtZUNvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxJZnJhbWVFbGVtZW50fSBpZnJhbWVFbFxuICogQHBhcmFtIGNvbnRlbnRcbiAqL1xuZnVuY3Rpb24gc2V0SWZyYW1lQ29udGVudChpZnJhbWVFbCwgY29udGVudCkge1xuICAgIHZhciBpZnJhbWVEb2MgPSBpZnJhbWVFbC5jb250ZW50V2luZG93ICYmIGlmcmFtZUVsLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gICAgaWYgKCFpZnJhbWVEb2MpIHJldHVybiBmYWxzZTtcblxuICAgIGlmcmFtZURvYy53cml0ZShjb250ZW50KTtcblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5cbi8qKlxuICogZXh0ZW5kIG9iamVjdCB3aXRoIGtleXMgZnJvbSBhbm90aGVyIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0b0V4dGVuZFxuICogQHBhcmFtIHtvYmplY3R9IGZyb21Tb3VyY2VcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKHRvRXh0ZW5kLCBmcm9tU291cmNlKSB7XG4gICAgT2JqZWN0LmtleXMoZnJvbVNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgdG9FeHRlbmRba2V5XSA9IGZyb21Tb3VyY2Vba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG9FeHRlbmQ7XG59XG5cblxuLyoqXG4gKiB1bmlxdWUgd2lsbCBjcmVhdGUgYSB1bmlxdWUgc3RyaW5nIGV2ZXJ5dGltZSBpcyBjYWxsZWQsIHNlcXVlbnRpYWxseSBhbmQgcHJlZml4ZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gKi9cbmZ1bmN0aW9uIHVuaXF1ZShwcmVmaXgpIHtcbiAgICB2YXIgY291bnQgPSAtMTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgJ18nICsgKCsrY291bnQpO1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG5vb3A6IG5vb3AsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlLFxuICAgIGNsZWFyQ2FsbGJhY2tUaW1lb3V0OiBjbGVhckNhbGxiYWNrVGltZW91dCxcbiAgICBjYWxsYmFja1RpbWVvdXQ6IGNhbGxiYWNrVGltZW91dCxcbiAgICBjcmVhdGVFbGVtZW50SW5FbDogY3JlYXRlRWxlbWVudEluRWwsXG4gICAgY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQ6IGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50LFxuICAgIGNyZWF0ZUlmcmFtZTogY3JlYXRlSWZyYW1lLFxuICAgIHNpbXBsZVRlbXBsYXRlOiBzaW1wbGVUZW1wbGF0ZSxcbiAgICBzZXRJZnJhbWVDb250ZW50OiBzZXRJZnJhbWVDb250ZW50LFxuICAgIGV4dGVuZDogZXh0ZW5kLFxuICAgIHVuaXF1ZTogdW5pcXVlXG59O1xuXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgSW5MaW5lID0gcmVxdWlyZSgnLi9JbkxpbmUnKTtcclxudmFyIFdyYXBwZXIgPSByZXF1aXJlKCcuL1dyYXBwZXInKTtcclxuXHJcbmZ1bmN0aW9uIEFkKGFkSlRyZWUpIHtcclxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQWQpKSB7XHJcbiAgICByZXR1cm4gbmV3IEFkKGFkSlRyZWUpO1xyXG4gIH1cclxuICB0aGlzLmluaXRpYWxpemUoYWRKVHJlZSk7XHJcbn1cclxuXHJcbkFkLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oYWRKVHJlZSkge1xyXG4gIHRoaXMuaWQgPSBhZEpUcmVlLmF0dHIoJ2lkJyk7XHJcbiAgdGhpcy5zZXF1ZW5jZSA9IGFkSlRyZWUuYXR0cignc2VxdWVuY2UnKTtcclxuXHJcbiAgaWYoYWRKVHJlZS5pbkxpbmUpIHtcclxuICAgIHRoaXMuaW5MaW5lID0gbmV3IEluTGluZShhZEpUcmVlLmluTGluZSk7XHJcbiAgfVxyXG5cclxuICBpZihhZEpUcmVlLndyYXBwZXIpe1xyXG4gICAgdGhpcy53cmFwcGVyID0gbmV3IFdyYXBwZXIoYWRKVHJlZS53cmFwcGVyKTtcclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFkOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBUcmFja2luZ0V2ZW50ID0gcmVxdWlyZSgnLi9UcmFja2luZ0V2ZW50Jyk7XHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENvbXBhbmlvbihjb21wYW5pb25KVHJlZSkge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb21wYW5pb24pKSB7XHJcbiAgICByZXR1cm4gbmV3IENvbXBhbmlvbihjb21wYW5pb25KVHJlZSk7XHJcbiAgfVxyXG5cclxuICAvL1JlcXVpcmVkIEVsZW1lbnRzXHJcbiAgdGhpcy5jcmVhdGl2ZVR5cGUgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZS5zdGF0aWNSZXNvdXJjZSwgJ2NyZWF0aXZlVHlwZScpO1xyXG4gIHRoaXMuc3RhdGljUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuc3RhdGljUmVzb3VyY2UpO1xyXG5cclxuICAvLyBXZWlyZCBidWcgd2hlbiB0aGUgSlhPTiB0cmVlIGlzIGJ1aWx0IGl0IGRvZXNuJ3QgaGFuZGxlIGNhc2luZyBwcm9wZXJseSBpbiB0aGlzIHNpdHVhdGlvbi4uLlxyXG4gIHZhciBodG1sUmVzb3VyY2UgPSBudWxsO1xyXG4gIGlmICh4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuSFRNTFJlc291cmNlKSkge1xyXG4gICAgaHRtbFJlc291cmNlID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLkhUTUxSZXNvdXJjZSk7XHJcbiAgfSBlbHNlIGlmICh4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuaFRNTFJlc291cmNlKSkge1xyXG4gICAgaHRtbFJlc291cmNlID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmhUTUxSZXNvdXJjZSk7XHJcbiAgfVxyXG4gIHRoaXMuaHRtbFJlc291cmNlID0gaHRtbFJlc291cmNlO1xyXG5cclxuICB2YXIgaWZyYW1lUmVzb3VyY2UgPSBudWxsO1xyXG4gIGlmICh4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuSUZyYW1lUmVzb3VyY2UpKSB7XHJcbiAgICBpZnJhbWVSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5JRnJhbWVSZXNvdXJjZSk7XHJcbiAgfSBlbHNlIGlmICh4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuaUZyYW1lcmVzb3VyY2UpKSB7XHJcbiAgICBpZnJhbWVSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5pRnJhbWVyZXNvdXJjZSk7XHJcbiAgfVxyXG4gIHRoaXMuaWZyYW1lUmVzb3VyY2UgPSBpZnJhbWVSZXNvdXJjZTtcclxuXHJcbiAgLy9PcHRpb25hbCBmaWVsZHNcclxuICB0aGlzLmlkID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdpZCcpO1xyXG4gIHRoaXMud2lkdGggPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ3dpZHRoJyk7XHJcbiAgdGhpcy5oZWlnaHQgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2hlaWdodCcpO1xyXG4gIHRoaXMuZXhwYW5kZWRXaWR0aCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnZXhwYW5kZWRXaWR0aCcpO1xyXG4gIHRoaXMuZXhwYW5kZWRIZWlnaHQgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2V4cGFuZGVkSGVpZ2h0Jyk7XHJcbiAgdGhpcy5zY2FsYWJsZSA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnc2NhbGFibGUnKTtcclxuICB0aGlzLm1haW50YWluQXNwZWN0UmF0aW8gPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ21haW50YWluQXNwZWN0UmF0aW8nKTtcclxuICB0aGlzLm1pblN1Z2dlc3RlZER1cmF0aW9uID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdtaW5TdWdnZXN0ZWREdXJhdGlvbicpO1xyXG4gIHRoaXMuYXBpRnJhbWV3b3JrID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdhcGlGcmFtZXdvcmsnKTtcclxuICB0aGlzLmNvbXBhbmlvbkNsaWNrVGhyb3VnaCA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5jb21wYW5pb25DbGlja1Rocm91Z2gpO1xyXG4gIHRoaXMudHJhY2tpbmdFdmVudHMgPSBwYXJzZVRyYWNraW5nRXZlbnRzKGNvbXBhbmlvbkpUcmVlLnRyYWNraW5nRXZlbnRzICYmIGNvbXBhbmlvbkpUcmVlLnRyYWNraW5nRXZlbnRzLnRyYWNraW5nKTtcclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIHBhcnNlVHJhY2tpbmdFdmVudHModHJhY2tpbmdFdmVudHMpIHtcclxuICAgIHZhciB0cmFja2luZ3MgPSBbXTtcclxuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKHRyYWNraW5nRXZlbnRzKSkge1xyXG4gICAgICB0cmFja2luZ0V2ZW50cyA9IHV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRXZlbnRzKSA/IHRyYWNraW5nRXZlbnRzIDogW3RyYWNraW5nRXZlbnRzXTtcclxuICAgICAgdHJhY2tpbmdFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tpbmdEYXRhKSB7XHJcbiAgICAgICAgdHJhY2tpbmdzLnB1c2gobmV3IFRyYWNraW5nRXZlbnQodHJhY2tpbmdEYXRhKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRyYWNraW5ncztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tcGFuaW9uOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBMaW5lYXIgPSByZXF1aXJlKCcuL0xpbmVhcicpO1xyXG52YXIgQ29tcGFuaW9uID0gcmVxdWlyZSgnLi9Db21wYW5pb24nKTtcclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxuXHJcbmZ1bmN0aW9uIENyZWF0aXZlKGNyZWF0aXZlSlRyZWUpIHtcclxuICBpZighKHRoaXMgaW5zdGFuY2VvZiBDcmVhdGl2ZSkpIHtcclxuICAgIHJldHVybiBuZXcgQ3JlYXRpdmUoY3JlYXRpdmVKVHJlZSk7XHJcbiAgfVxyXG5cclxuICB0aGlzLmlkID0gY3JlYXRpdmVKVHJlZS5hdHRyKCdpZCcpO1xyXG4gIHRoaXMuc2VxdWVuY2UgPSBjcmVhdGl2ZUpUcmVlLmF0dHIoJ3NlcXVlbmNlJyk7XHJcbiAgdGhpcy5hZElkID0gY3JlYXRpdmVKVHJlZS5hdHRyKCdhZElkJyk7XHJcbiAgdGhpcy5hcGlGcmFtZXdvcmsgPSBjcmVhdGl2ZUpUcmVlLmF0dHIoJ2FwaUZyYW1ld29yaycpO1xyXG5cclxuICBpZihjcmVhdGl2ZUpUcmVlLmxpbmVhcikge1xyXG4gICAgdGhpcy5saW5lYXIgPSBuZXcgTGluZWFyKGNyZWF0aXZlSlRyZWUubGluZWFyKTtcclxuICB9XHJcblxyXG4gIGlmIChjcmVhdGl2ZUpUcmVlLmNvbXBhbmlvbkFkcykge1xyXG4gICAgdmFyIGNvbXBhbmlvbnMgPSBbXTtcclxuICAgIHZhciBjb21wYW5pb25BZHMgPSBjcmVhdGl2ZUpUcmVlLmNvbXBhbmlvbkFkcyAmJiBjcmVhdGl2ZUpUcmVlLmNvbXBhbmlvbkFkcy5jb21wYW5pb247XHJcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChjb21wYW5pb25BZHMpKSB7XHJcbiAgICAgIGNvbXBhbmlvbkFkcyA9IHV0aWxpdGllcy5pc0FycmF5KGNvbXBhbmlvbkFkcykgPyBjb21wYW5pb25BZHMgOiBbY29tcGFuaW9uQWRzXTtcclxuICAgICAgY29tcGFuaW9uQWRzLmZvckVhY2goZnVuY3Rpb24gKGNvbXBhbmlvbkRhdGEpIHtcclxuICAgICAgICBjb21wYW5pb25zLnB1c2gobmV3IENvbXBhbmlvbihjb21wYW5pb25EYXRhKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb21wYW5pb25BZHMgPSBjb21wYW5pb25zO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBhdCB0aGUgY3JlYXRpdmUuXHJcbiAqL1xyXG5DcmVhdGl2ZS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpe1xyXG4gIGlmKHRoaXMubGluZWFyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5saW5lYXIuaXNTdXBwb3J0ZWQoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuQ3JlYXRpdmUucGFyc2VDcmVhdGl2ZXMgPSBmdW5jdGlvbiBwYXJzZUNyZWF0aXZlcyhjcmVhdGl2ZXNKVHJlZSkge1xyXG4gIHZhciBjcmVhdGl2ZXMgPSBbXTtcclxuICB2YXIgY3JlYXRpdmVzRGF0YTtcclxuICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChjcmVhdGl2ZXNKVHJlZSkgJiYgdXRpbGl0aWVzLmlzRGVmaW5lZChjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZSkpIHtcclxuICAgIGNyZWF0aXZlc0RhdGEgPSB1dGlsaXRpZXMuaXNBcnJheShjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZSkgPyBjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZSA6IFtjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZV07XHJcbiAgICBjcmVhdGl2ZXNEYXRhLmZvckVhY2goZnVuY3Rpb24gKGNyZWF0aXZlKSB7XHJcbiAgICAgIGNyZWF0aXZlcy5wdXNoKG5ldyBDcmVhdGl2ZShjcmVhdGl2ZSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBjcmVhdGl2ZXM7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENyZWF0aXZlO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XHJcbnZhciBDcmVhdGl2ZSA9IHJlcXVpcmUoJy4vQ3JlYXRpdmUnKTtcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcclxuXHJcbmZ1bmN0aW9uIEluTGluZShpbmxpbmVKVHJlZSkge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBJbkxpbmUpKSB7XHJcbiAgICByZXR1cm4gbmV3IEluTGluZShpbmxpbmVKVHJlZSk7XHJcbiAgfVxyXG5cclxuICAvL1JlcXVpcmVkIEZpZWxkc1xyXG4gIHRoaXMuYWRUaXRsZSA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5hZFRpdGxlKTtcclxuICB0aGlzLmFkU3lzdGVtID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmFkU3lzdGVtKTtcclxuICB0aGlzLmltcHJlc3Npb25zID0gdmFzdFV0aWwucGFyc2VJbXByZXNzaW9ucyhpbmxpbmVKVHJlZS5pbXByZXNzaW9uKTtcclxuICB0aGlzLmNyZWF0aXZlcyA9IENyZWF0aXZlLnBhcnNlQ3JlYXRpdmVzKGlubGluZUpUcmVlLmNyZWF0aXZlcyk7XHJcblxyXG4gIC8vT3B0aW9uYWwgRmllbGRzXHJcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5kZXNjcmlwdGlvbik7XHJcbiAgdGhpcy5hZHZlcnRpc2VyID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmFkdmVydGlzZXIpO1xyXG4gIHRoaXMuc3VydmV5cyA9IHBhcnNlU3VydmV5cyhpbmxpbmVKVHJlZS5zdXJ2ZXkpO1xyXG4gIHRoaXMuZXJyb3IgPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuZXJyb3IpO1xyXG4gIHRoaXMucHJpY2luZyA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5wcmljaW5nKTtcclxuICB0aGlzLmV4dGVuc2lvbnMgPSBpbmxpbmVKVHJlZS5leHRlbnNpb25zO1xyXG5cclxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gcGFyc2VTdXJ2ZXlzKGlubGluZVN1cnZleXMpIHtcclxuICAgIGlmIChpbmxpbmVTdXJ2ZXlzKSB7XHJcbiAgICAgIHJldHVybiB1dGlsaXRpZXMudHJhbnNmb3JtQXJyYXkodXRpbGl0aWVzLmlzQXJyYXkoaW5saW5lU3VydmV5cykgPyBpbmxpbmVTdXJ2ZXlzIDogW2lubGluZVN1cnZleXNdLCBmdW5jdGlvbiAoc3VydmV5KSB7XHJcbiAgICAgICAgaWYodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoc3VydmV5LmtleVZhbHVlKSl7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1cmk6IHN1cnZleS5rZXlWYWx1ZSxcclxuICAgICAgICAgICAgdHlwZTogc3VydmV5LmF0dHIoJ3R5cGUnKVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYWxsIHRoZSBjcmVhdGl2ZXMuXHJcbiAqL1xyXG5JbkxpbmUucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24oKXtcclxuICB2YXIgaSxsZW47XHJcblxyXG4gIGlmKHRoaXMuY3JlYXRpdmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZm9yKGkgPSAwLCBsZW4gPSB0aGlzLmNyZWF0aXZlcy5sZW5ndGg7IGk8IGxlbjsgaSs9MSl7XHJcbiAgICBpZighdGhpcy5jcmVhdGl2ZXNbaV0uaXNTdXBwb3J0ZWQoKSl7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEluTGluZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFRyYWNraW5nRXZlbnQgPSByZXF1aXJlKCcuL1RyYWNraW5nRXZlbnQnKTtcclxudmFyIE1lZGlhRmlsZSA9IHJlcXVpcmUoJy4vTWVkaWFGaWxlJyk7XHJcbnZhciBWaWRlb0NsaWNrcyA9IHJlcXVpcmUoJy4vVmlkZW9DbGlja3MnKTtcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcbnZhciBwYXJzZXJzID0gcmVxdWlyZSgnLi9wYXJzZXJzJyk7XHJcblxyXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XHJcblxyXG5cclxuZnVuY3Rpb24gTGluZWFyKGxpbmVhckpUcmVlKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIExpbmVhcikpIHtcclxuICAgIHJldHVybiBuZXcgTGluZWFyKGxpbmVhckpUcmVlKTtcclxuICB9XHJcblxyXG4gIC8vUmVxdWlyZWQgRWxlbWVudHNcclxuICB0aGlzLmR1cmF0aW9uID0gcGFyc2Vycy5kdXJhdGlvbih4bWwua2V5VmFsdWUobGluZWFySlRyZWUuZHVyYXRpb24pKTtcclxuICB0aGlzLm1lZGlhRmlsZXMgPSBwYXJzZU1lZGlhRmlsZXMobGluZWFySlRyZWUubWVkaWFGaWxlcyAmJiBsaW5lYXJKVHJlZS5tZWRpYUZpbGVzLm1lZGlhRmlsZSk7XHJcblxyXG4gIC8vT3B0aW9uYWwgZmllbGRzXHJcbiAgdGhpcy50cmFja2luZ0V2ZW50cyA9IHBhcnNlVHJhY2tpbmdFdmVudHMobGluZWFySlRyZWUudHJhY2tpbmdFdmVudHMgJiYgbGluZWFySlRyZWUudHJhY2tpbmdFdmVudHMudHJhY2tpbmcsIHRoaXMuZHVyYXRpb24pO1xyXG4gIHRoaXMuc2tpcG9mZnNldCA9IHBhcnNlcnMub2Zmc2V0KHhtbC5hdHRyKGxpbmVhckpUcmVlLCAnc2tpcG9mZnNldCcpLCB0aGlzLmR1cmF0aW9uKTtcclxuXHJcbiAgaWYgKGxpbmVhckpUcmVlLnZpZGVvQ2xpY2tzKSB7XHJcbiAgICB0aGlzLnZpZGVvQ2xpY2tzID0gbmV3IFZpZGVvQ2xpY2tzKGxpbmVhckpUcmVlLnZpZGVvQ2xpY2tzKTtcclxuICB9XHJcblxyXG4gIGlmKGxpbmVhckpUcmVlLmFkUGFyYW1ldGVycykge1xyXG4gICAgdGhpcy5hZFBhcmFtZXRlcnMgPSB4bWwua2V5VmFsdWUobGluZWFySlRyZWUuYWRQYXJhbWV0ZXJzKTtcclxuXHJcbiAgICBpZih4bWwuYXR0cihsaW5lYXJKVHJlZS5hZFBhcmFtZXRlcnMsICd4bWxFbmNvZGVkJykpe1xyXG4gICAgICB0aGlzLmFkUGFyYW1ldGVycyA9IHhtbC5kZWNvZGUodGhpcy5hZFBhcmFtZXRlcnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIHBhcnNlVHJhY2tpbmdFdmVudHModHJhY2tpbmdFdmVudHMsIGR1cmF0aW9uKSB7XHJcbiAgICB2YXIgdHJhY2tpbmdzID0gW107XHJcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh0cmFja2luZ0V2ZW50cykpIHtcclxuICAgICAgdHJhY2tpbmdFdmVudHMgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0V2ZW50cykgPyB0cmFja2luZ0V2ZW50cyA6IFt0cmFja2luZ0V2ZW50c107XHJcbiAgICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNraW5nRGF0YSkge1xyXG4gICAgICAgIHRyYWNraW5ncy5wdXNoKG5ldyBUcmFja2luZ0V2ZW50KHRyYWNraW5nRGF0YSwgZHVyYXRpb24pKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJhY2tpbmdzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGFyc2VNZWRpYUZpbGVzKG1lZGlhRmlsZXNKeG9uVHJlZSkge1xyXG4gICAgdmFyIG1lZGlhRmlsZXMgPSBbXTtcclxuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKG1lZGlhRmlsZXNKeG9uVHJlZSkpIHtcclxuICAgICAgbWVkaWFGaWxlc0p4b25UcmVlID0gdXRpbGl0aWVzLmlzQXJyYXkobWVkaWFGaWxlc0p4b25UcmVlKSA/IG1lZGlhRmlsZXNKeG9uVHJlZSA6IFttZWRpYUZpbGVzSnhvblRyZWVdO1xyXG5cclxuICAgICAgbWVkaWFGaWxlc0p4b25UcmVlLmZvckVhY2goZnVuY3Rpb24gKG1mRGF0YSkge1xyXG4gICAgICAgIG1lZGlhRmlsZXMucHVzaChuZXcgTWVkaWFGaWxlKG1mRGF0YSkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBtZWRpYUZpbGVzO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE11c3QgcmV0dXJuIHRydWUgaWYgYXQgbGVhc3Qgb25lIG9mIHRoZSBNZWRpYUZpbGVzJyB0eXBlIGlzIHN1cHBvcnRlZFxyXG4gKi9cclxuTGluZWFyLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgaSwgbGVuO1xyXG4gIGZvcihpPTAsIGxlbj10aGlzLm1lZGlhRmlsZXMubGVuZ3RoOyBpPGxlbjsgaSs9MSkge1xyXG4gICAgaWYodGhpcy5tZWRpYUZpbGVzW2ldLmlzU3VwcG9ydGVkKCkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IExpbmVhcjsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XHJcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcclxuXHJcbnZhciBhdHRyaWJ1dGVzTGlzdCA9IFtcclxuICAvL1JlcXVpcmVkIGF0dHJpYnV0ZXNcclxuICAnZGVsaXZlcnknLFxyXG4gICd0eXBlJyxcclxuICAnd2lkdGgnLFxyXG4gICdoZWlnaHQnLFxyXG4gIC8vT3B0aW9uYWwgYXR0cmlidXRlc1xyXG4gICdjb2RlYycsXHJcbiAgJ2lkJyxcclxuICAnYml0cmF0ZScsXHJcbiAgJ21pbkJpdHJhdGUnLFxyXG4gICdtYXhCaXRyYXRlJyxcclxuICAnc2NhbGFibGUnLFxyXG4gICdtYWludGFpbkFzcGVjdFJhdGlvJyxcclxuICAnYXBpRnJhbWV3b3JrJ1xyXG5dO1xyXG5cclxuZnVuY3Rpb24gTWVkaWFGaWxlKG1lZGlhRmlsZUpUcmVlKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1lZGlhRmlsZSkpIHtcclxuICAgIHJldHVybiBuZXcgTWVkaWFGaWxlKG1lZGlhRmlsZUpUcmVlKTtcclxuICB9XHJcblxyXG4gIC8vUmVxdWlyZWQgYXR0cmlidXRlc1xyXG4gIHRoaXMuc3JjID0geG1sLmtleVZhbHVlKG1lZGlhRmlsZUpUcmVlKTtcclxuXHJcbiAgZm9yKHZhciB4PTA7IHg8YXR0cmlidXRlc0xpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgIHZhciBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzTGlzdFt4XTtcclxuICAgIHRoaXNbYXR0cmlidXRlXSA9IG1lZGlhRmlsZUpUcmVlLmF0dHIoYXR0cmlidXRlKTtcclxuICB9XHJcbn1cclxuXHJcbk1lZGlhRmlsZS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpe1xyXG4gIGlmKHZhc3RVdGlsLmlzVlBBSUQodGhpcykpIHtcclxuICAgIHJldHVybiAhIXZhc3RVdGlsLmZpbmRTdXBwb3J0ZWRWUEFJRFRlY2godGhpcy50eXBlKTtcclxuICB9XHJcblxyXG4gIGlmICh0aGlzLnR5cGUgPT09ICd2aWRlby94LWZsdicpIHtcclxuICAgIHJldHVybiB2YXN0VXRpbC5pc0ZsYXNoU3VwcG9ydGVkKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWVkaWFGaWxlO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgcGFyc2VycyA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xyXG5cclxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xyXG5cclxuZnVuY3Rpb24gVHJhY2tpbmdFdmVudCh0cmFja2luZ0pUcmVlLCBkdXJhdGlvbikge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUcmFja2luZ0V2ZW50KSkge1xyXG4gICAgcmV0dXJuIG5ldyBUcmFja2luZ0V2ZW50KHRyYWNraW5nSlRyZWUsIGR1cmF0aW9uKTtcclxuICB9XHJcblxyXG4gIHRoaXMubmFtZSA9IHRyYWNraW5nSlRyZWUuYXR0cignZXZlbnQnKTtcclxuICB0aGlzLnVyaSA9IHhtbC5rZXlWYWx1ZSh0cmFja2luZ0pUcmVlKTtcclxuXHJcbiAgaWYoJ3Byb2dyZXNzJyA9PT0gdGhpcy5uYW1lKSB7XHJcbiAgICB0aGlzLm9mZnNldCA9IHBhcnNlcnMub2Zmc2V0KHRyYWNraW5nSlRyZWUuYXR0cignb2Zmc2V0JyksIGR1cmF0aW9uKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVHJhY2tpbmdFdmVudDsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgQWQgPSByZXF1aXJlKCcuL0FkJyk7XHJcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuL1ZBU1RFcnJvcicpO1xyXG52YXIgVkFTVFJlc3BvbnNlID0gcmVxdWlyZSgnLi9WQVNUUmVzcG9uc2UnKTtcclxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xyXG5cclxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXN5bmMnKTtcclxudmFyIGh0dHAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9odHRwJykuaHR0cDtcclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xyXG5cclxuZnVuY3Rpb24gVkFTVENsaWVudChvcHRpb25zKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RDbGllbnQpKSB7XHJcbiAgICByZXR1cm4gbmV3IFZBU1RDbGllbnQob3B0aW9ucyk7XHJcbiAgfVxyXG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgIFdSQVBQRVJfTElNSVQ6IDVcclxuICB9O1xyXG5cclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICB0aGlzLnNldHRpbmdzID0gdXRpbGl0aWVzLmV4dGVuZCh7fSwgb3B0aW9ucywgZGVmYXVsdE9wdGlvbnMpO1xyXG4gIHRoaXMuZXJyb3JVUkxNYWNyb3MgPSBbXTtcclxufVxyXG5cclxuVkFTVENsaWVudC5wcm90b3R5cGUuZ2V0VkFTVFJlc3BvbnNlID0gZnVuY3Rpb24gZ2V0VkFTVFJlc3BvbnNlKGFkVGFnVXJsLCBjYWxsYmFjaykge1xyXG4gIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgdmFyIGVycm9yID0gc2FuaXR5Q2hlY2soYWRUYWdVcmwsIGNhbGxiYWNrKTtcclxuICBpZiAoZXJyb3IpIHtcclxuICAgIGlmICh1dGlsaXRpZXMuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcclxuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcclxuICAgIH1cclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMud2F0ZXJmYWxsKFtcclxuICAgICAgdGhpcy5fZ2V0VkFTVEFkLmJpbmQodGhpcywgYWRUYWdVcmwpLFxyXG4gICAgICBidWlsZFZBU1RSZXNwb25zZVxyXG4gICAgXSxcclxuICAgIGNhbGxiYWNrKTtcclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIGJ1aWxkVkFTVFJlc3BvbnNlKGFkc0NoYWluLCBjYikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIHJlc3BvbnNlID0gdGhhdC5fYnVpbGRWQVNUUmVzcG9uc2UoYWRzQ2hhaW4pO1xyXG4gICAgICBjYihudWxsLCByZXNwb25zZSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNiKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soYWRUYWdVcmwsIGNiKSB7XHJcbiAgICBpZiAoIWFkVGFnVXJsKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKCdvbiBWQVNUQ2xpZW50LmdldFZBU1RSZXNwb25zZSwgbWlzc2luZyBhZCB0YWcgVVJMJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcclxuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVFJlc3BvbnNlLCBtaXNzaW5nIGNhbGxiYWNrIGZ1bmN0aW9uJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVENsaWVudC5wcm90b3R5cGUuX2dldFZBU1RBZCA9IGZ1bmN0aW9uIChhZFRhZ1VybCwgY2FsbGJhY2spIHtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gIGdldEFkV2F0ZXJmYWxsKGFkVGFnVXJsLCBmdW5jdGlvbiAoZXJyb3IsIHZhc3RUcmVlKSB7XHJcbiAgICB2YXIgd2F0ZXJmYWxsQWRzID0gdmFzdFRyZWUgJiYgdXRpbGl0aWVzLmlzQXJyYXkodmFzdFRyZWUuYWRzKSA/IHZhc3RUcmVlLmFkcyA6IG51bGw7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdGhhdC5fdHJhY2tFcnJvcihlcnJvciwgd2F0ZXJmYWxsQWRzKTtcclxuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yLCB3YXRlcmZhbGxBZHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFkKHdhdGVyZmFsbEFkcy5zaGlmdCgpLCBbXSwgd2F0ZXJmYWxsSGFuZGxlcik7XHJcblxyXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gICAgZnVuY3Rpb24gd2F0ZXJmYWxsSGFuZGxlcihlcnJvciwgYWRDaGFpbikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICB0aGF0Ll90cmFja0Vycm9yKGVycm9yLCBhZENoYWluKTtcclxuICAgICAgICBpZiAod2F0ZXJmYWxsQWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGdldEFkKHdhdGVyZmFsbEFkcy5zaGlmdCgpLFtdLCB3YXRlcmZhbGxIYW5kbGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2FsbGJhY2soZXJyb3IsIGFkQ2hhaW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYWxsYmFjayhudWxsLCBhZENoYWluKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gZ2V0QWRXYXRlcmZhbGwoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgcmVxdWVzdFZhc3RYTUwgPSB0aGF0Ll9yZXF1ZXN0VkFTVFhtbC5iaW5kKHRoYXQsIGFkVGFnVXJsKTtcclxuICAgIGFzeW5jLndhdGVyZmFsbChbXHJcbiAgICAgIHJlcXVlc3RWYXN0WE1MLFxyXG4gICAgICBidWlsZFZhc3RXYXRlcmZhbGxcclxuICAgIF0sIGNhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGJ1aWxkVmFzdFdhdGVyZmFsbCh4bWxTdHIsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgdmFzdFRyZWU7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YXN0VHJlZSA9IHhtbC50b0pYT05UcmVlKHhtbFN0cik7XHJcblxyXG4gICAgICBpZih1dGlsaXRpZXMuaXNBcnJheSh2YXN0VHJlZS5hZCkpIHtcclxuICAgICAgICB2YXN0VHJlZS5hZHMgPSB2YXN0VHJlZS5hZDtcclxuICAgICAgfSBlbHNlIGlmKHZhc3RUcmVlLmFkKXtcclxuICAgICAgICB2YXN0VHJlZS5hZHMgPSBbdmFzdFRyZWUuYWRdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhc3RUcmVlLmFkcyA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGNhbGxiYWNrKHZhbGlkYXRlVkFTVFRyZWUodmFzdFRyZWUpLCB2YXN0VHJlZSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5nZXRWQVNUQWQuYnVpbGRWYXN0V2F0ZXJmYWxsLCBlcnJvciBwYXJzaW5nIHhtbFwiLCAxMDApLCBudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlVkFTVFRyZWUodmFzdFRyZWUpIHtcclxuICAgIHZhciB2YXN0VmVyc2lvbiA9IHhtbC5hdHRyKHZhc3RUcmVlLCAndmVyc2lvbicpO1xyXG5cclxuICAgIGlmICghdmFzdFRyZWUuYWQpIHtcclxuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLnZhbGlkYXRlVkFTVFRyZWUsIG5vIEFkIGluIFZBU1QgdHJlZScsIDMwMyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhc3RWZXJzaW9uICYmICh2YXN0VmVyc2lvbiAhPSAzICYmIHZhc3RWZXJzaW9uICE9IDIpKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKCdvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC52YWxpZGF0ZVZBU1RUcmVlLCBub3Qgc3VwcG9ydGVkIFZBU1QgdmVyc2lvbiBcIicgKyB2YXN0VmVyc2lvbiArICdcIicsIDEwMik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRBZChhZFRhZ1VybCwgYWRDaGFpbiwgY2FsbGJhY2spIHtcclxuICAgIGlmIChhZENoYWluLmxlbmd0aCA+PSB0aGF0LldSQVBQRVJfTElNSVQpIHtcclxuICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC5nZXRBZCwgcGxheWVycyB3cmFwcGVyIGxpbWl0IHJlYWNoZWQgKHRoZSBsaW1pdCBpcyBcIiArIHRoYXQuV1JBUFBFUl9MSU1JVCArIFwiKVwiLCAzMDIpLCBhZENoYWluKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYy53YXRlcmZhbGwoW1xyXG4gICAgICBmdW5jdGlvbiAobmV4dCkge1xyXG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoYWRUYWdVcmwpKSB7XHJcbiAgICAgICAgICByZXF1ZXN0VkFTVEFkKGFkVGFnVXJsLCBuZXh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV4dChudWxsLCBhZFRhZ1VybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBidWlsZEFkXHJcbiAgICBdLCBmdW5jdGlvbiAoZXJyb3IsIGFkKSB7XHJcbiAgICAgIGlmIChhZCkge1xyXG4gICAgICAgIGFkQ2hhaW4ucHVzaChhZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvciwgYWRDaGFpbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChhZC53cmFwcGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldEFkKGFkLndyYXBwZXIuVkFTVEFkVGFnVVJJLCBhZENoYWluLCBjYWxsYmFjayk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBhZENoYWluKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYnVpbGRBZChhZEp4b25UcmVlLCBjYWxsYmFjaykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIGFkID0gbmV3IEFkKGFkSnhvblRyZWUpO1xyXG4gICAgICBjYWxsYmFjayh2YWxpZGF0ZUFkKGFkKSwgYWQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKCdvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC5idWlsZEFkLCBlcnJvciBwYXJzaW5nIHhtbCcsIDEwMCksIG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVBZChhZCkge1xyXG4gICAgdmFyIHdyYXBwZXIgPSBhZC53cmFwcGVyO1xyXG4gICAgdmFyIGluTGluZSA9IGFkLmluTGluZTtcclxuICAgIHZhciBlcnJNc2dQcmVmaXggPSAnb24gVkFTVENsaWVudC5nZXRWQVNUQWQudmFsaWRhdGVBZCwgJztcclxuXHJcbiAgICBpZiAoaW5MaW5lICYmIHdyYXBwZXIpIHtcclxuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoZXJyTXNnUHJlZml4ICtcIkluTGluZSBhbmQgV3JhcHBlciBib3RoIGZvdW5kIG9uIHRoZSBzYW1lIEFkXCIsIDEwMSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpbkxpbmUgJiYgIXdyYXBwZXIpIHtcclxuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoZXJyTXNnUHJlZml4ICsgXCJub3Igd3JhcHBlciBub3IgaW5saW5lIGVsZW1lbnRzIGZvdW5kIG9uIHRoZSBBZFwiLCAxMDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpbkxpbmUgJiYgIWluTGluZS5pc1N1cHBvcnRlZCgpKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArIFwiY291bGQgbm90IGZpbmQgTWVkaWFGaWxlIHRoYXQgaXMgc3VwcG9ydGVkIGJ5IHRoaXMgdmlkZW8gcGxheWVyXCIsIDQwMyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHdyYXBwZXIgJiYgIXdyYXBwZXIuVkFTVEFkVGFnVVJJKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArIFwibWlzc2luZyAnVkFTVEFkVGFnVVJJJyBpbiB3cmFwcGVyXCIsIDEwMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXF1ZXN0VkFTVEFkKGFkVGFnVXJsLCBjYWxsYmFjaykge1xyXG4gICAgdGhhdC5fcmVxdWVzdFZBU1RYbWwoYWRUYWdVcmwsIGZ1bmN0aW9uIChlcnJvciwgeG1sU3RyKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgICAgdHJ5IHtcclxuICAgICAgICB2YXIgdmFzdFRyZWUgPSB4bWwudG9KWE9OVHJlZSh4bWxTdHIpO1xyXG4gICAgICAgIGNhbGxiYWNrKHZhbGlkYXRlVkFTVFRyZWUodmFzdFRyZWUpLCB2YXN0VHJlZS5hZCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5nZXRWQVNUQWQucmVxdWVzdFZBU1RBZCwgZXJyb3IgcGFyc2luZyB4bWxcIiwgMTAwKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RDbGllbnQucHJvdG90eXBlLl9yZXF1ZXN0VkFTVFhtbCA9IGZ1bmN0aW9uIHJlcXVlc3RWQVNUWG1sKGFkVGFnVXJsLCBjYWxsYmFjaykge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAodXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRUYWdVcmwpKSB7XHJcbiAgICAgIGFkVGFnVXJsKHJlcXVlc3RIYW5kbGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGh0dHAuZ2V0KGFkVGFnVXJsLCByZXF1ZXN0SGFuZGxlciwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjYWxsYmFjayhlKTtcclxuICB9XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiByZXF1ZXN0SGFuZGxlcihlcnJvciwgcmVzcG9uc2UsIHN0YXR1cykge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHZhciBlcnJNc2cgPSB1dGlsaXRpZXMuaXNEZWZpbmVkKHN0YXR1cykgP1xyXG4gICAgICBcIm9uIFZBU1RDbGllbnQucmVxdWVzdFZhc3RYTUwsIEhUVFAgcmVxdWVzdCBlcnJvciB3aXRoIHN0YXR1cyAnXCIgKyBzdGF0dXMgKyBcIidcIiA6XHJcbiAgICAgICAgXCJvbiBWQVNUQ2xpZW50LnJlcXVlc3RWYXN0WE1MLCBFcnJvciBnZXR0aW5nIHRoZSB0aGUgVkFTVCBYTUwgd2l0aCBoZSBwYXNzZWQgYWRUYWdYTUwgZm5cIjtcclxuICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoZXJyTXNnLCAzMDEpLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVENsaWVudC5wcm90b3R5cGUuX2J1aWxkVkFTVFJlc3BvbnNlID0gZnVuY3Rpb24gYnVpbGRWQVNUUmVzcG9uc2UoYWRzQ2hhaW4pIHtcclxuICB2YXIgcmVzcG9uc2UgPSBuZXcgVkFTVFJlc3BvbnNlKCk7XHJcbiAgYWRkQWRzVG9SZXNwb25zZShyZXNwb25zZSwgYWRzQ2hhaW4pO1xyXG4gIHZhbGlkYXRlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG5cclxuICByZXR1cm4gcmVzcG9uc2U7XHJcblxyXG4gIC8vKioqIExvY2FsIGZ1bmN0aW9uICoqKipcclxuICBmdW5jdGlvbiBhZGRBZHNUb1Jlc3BvbnNlKHJlc3BvbnNlLCBhZHMpIHtcclxuICAgIGFkcy5mb3JFYWNoKGZ1bmN0aW9uIChhZCkge1xyXG4gICAgICByZXNwb25zZS5hZGRBZChhZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuICAgIHZhciBwcm9ncmVzc0V2ZW50cyA9IHJlc3BvbnNlLnRyYWNraW5nRXZlbnRzLnByb2dyZXNzO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2UuaGFzTGluZWFyKCkpIHtcclxuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuX2J1aWxkVkFTVFJlc3BvbnNlLCBSZWNlaXZlZCBhbiBBZCB0eXBlIHRoYXQgaXMgbm90IHN1cHBvcnRlZFwiLCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXNwb25zZS5kdXJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50Ll9idWlsZFZBU1RSZXNwb25zZSwgTWlzc2luZyBkdXJhdGlvbiBmaWVsZCBpbiBWQVNUIHJlc3BvbnNlXCIsIDEwMSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb2dyZXNzRXZlbnRzKSB7XHJcbiAgICAgIHByb2dyZXNzRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHByb2dyZXNzRXZlbnQpIHtcclxuICAgICAgICBpZiAoIXV0aWxpdGllcy5pc051bWJlcihwcm9ncmVzc0V2ZW50Lm9mZnNldCkpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50Ll9idWlsZFZBU1RSZXNwb25zZSwgbWlzc2luZyBvciB3cm9uZyBvZmZzZXQgYXR0cmlidXRlIG9uIHByb2dyZXNzIHRyYWNraW5nIGV2ZW50XCIsIDEwMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fdHJhY2tFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgYWRDaGFpbikge1xyXG4gIGlmICghdXRpbGl0aWVzLmlzQXJyYXkoYWRDaGFpbikgfHwgYWRDaGFpbi5sZW5ndGggPT09IDApIHsgLy9UaGVyZSBpcyBub3RoaW5nIHRvIHRyYWNrXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB2YXIgZXJyb3JVUkxNYWNyb3MgPSBbXTtcclxuICBhZENoYWluLmZvckVhY2goYWRkRXJyb3JVcmxNYWNyb3MpO1xyXG4gIHZhc3RVdGlsLnRyYWNrKGVycm9yVVJMTWFjcm9zLCB7RVJST1JDT0RFOiBlcnJvci5jb2RlIHx8IDkwMH0pOyAgLy85MDAgPD09IFVuZGVmaW5lZCBlcnJvclxyXG5cclxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAgKioqL1xyXG4gIGZ1bmN0aW9uIGFkZEVycm9yVXJsTWFjcm9zKGFkKSB7XHJcbiAgICBpZiAoYWQud3JhcHBlciAmJiBhZC53cmFwcGVyLmVycm9yKSB7XHJcbiAgICAgIGVycm9yVVJMTWFjcm9zLnB1c2goYWQud3JhcHBlci5lcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFkLmluTGluZSAmJiBhZC5pbkxpbmUuZXJyb3IpIHtcclxuICAgICAgZXJyb3JVUkxNYWNyb3MucHVzaChhZC5pbkxpbmUuZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVkFTVENsaWVudDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gVkFTVEVycm9yKG1lc3NhZ2UsIGNvZGUpIHtcclxuICB0aGlzLm1lc3NhZ2UgPSAnVkFTVCBFcnJvcjogJyArIChtZXNzYWdlIHx8ICcnKTtcclxuICBpZiAoY29kZSkge1xyXG4gICAgdGhpcy5jb2RlID0gY29kZTtcclxuICB9XHJcbn1cclxuXHJcblZBU1RFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcclxuVkFTVEVycm9yLnByb3RvdHlwZS5uYW1lID0gXCJWQVNUIEVycm9yXCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RFcnJvcjsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogSW5uZXIgaGVscGVyIGNsYXNzIHRoYXQgZGVhbHMgd2l0aCB0aGUgbG9naWMgb2YgdGhlIGluZGl2aWR1YWwgc3RlcHMgbmVlZGVkIHRvIHNldHVwIGFuIGFkIGluIHRoZSBwbGF5ZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSBwbGF5ZXIge29iamVjdH0gaW5zdGFuY2Ugb2YgdGhlIHBsYXllciB0aGF0IHdpbGwgcGxheSB0aGUgYWQuIEl0IGFzc3VtZXMgdGhhdCB0aGUgdmlkZW9qcy1jb250cmliLWFkcyBwbHVnaW5cclxuICogICAgICAgICAgICAgICAgICAgICAgICBoYXMgYmVlbiBpbml0aWFsaXplZCB3aGVuIHlvdSB1c2UgaXRzIHV0aWxpdHkgZnVuY3Rpb25zLlxyXG4gKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcblxyXG52YXIgVkFTVFJlc3BvbnNlID0gcmVxdWlyZSgnLi9WQVNUUmVzcG9uc2UnKTtcclxudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4vVkFTVEVycm9yJyk7XHJcbnZhciBWQVNUVHJhY2tlciA9IHJlcXVpcmUoJy4vVkFTVFRyYWNrZXInKTtcclxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xyXG5cclxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXN5bmMnKTtcclxudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xyXG52YXIgcGxheWVyVXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9wbGF5ZXJVdGlscycpO1xyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxuZnVuY3Rpb24gVkFTVEludGVncmF0b3IocGxheWVyKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RJbnRlZ3JhdG9yKSkge1xyXG4gICAgcmV0dXJuIG5ldyBWQVNUSW50ZWdyYXRvcihwbGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbn1cclxuXHJcblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5wbGF5QWQgPSBmdW5jdGlvbiBwbGF5QWQodmFzdFJlc3BvbnNlLCBjYWxsYmFjaykge1xyXG4gIHZhciB0aGF0ID0gdGhpcztcclxuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IHV0aWxpdGllcy5ub29wO1xyXG5cclxuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XHJcbiAgICByZXR1cm4gY2FsbGJhY2sobmV3IFZBU1RFcnJvcignT24gVkFTVEludGVncmF0b3IsIG1pc3NpbmcgcmVxdWlyZWQgVkFTVFJlc3BvbnNlJykpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMud2F0ZXJmYWxsKFtcclxuICAgIGZ1bmN0aW9uIChuZXh0KSB7XHJcbiAgICAgIG5leHQobnVsbCwgdmFzdFJlc3BvbnNlKTtcclxuICAgIH0sXHJcbiAgICB0aGlzLl9zZWxlY3RBZFNvdXJjZS5iaW5kKHRoaXMpLFxyXG4gICAgdGhpcy5fY3JlYXRlVkFTVFRyYWNrZXIuYmluZCh0aGlzKSxcclxuICAgIHRoaXMuX2FkZENsaWNrVGhyb3VnaC5iaW5kKHRoaXMpLFxyXG4gICAgdGhpcy5fYWRkU2tpcEJ1dHRvbi5iaW5kKHRoaXMpLFxyXG4gICAgdGhpcy5fc2V0dXBFdmVudHMuYmluZCh0aGlzKSxcclxuICAgIHRoaXMuX3BsYXlTZWxlY3RlZEFkLmJpbmQodGhpcylcclxuICBdLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlKSB7XHJcbiAgICBpZiAoZXJyb3IgJiYgcmVzcG9uc2UpIHtcclxuICAgICAgdGhhdC5fdHJhY2tFcnJvcihlcnJvciwgcmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gICAgY2FsbGJhY2soZXJyb3IsIHJlc3BvbnNlKTtcclxuICB9KTtcclxuXHJcbiAgdGhpcy5fYWRVbml0ID0ge1xyXG4gICAgX3NyYzogbnVsbCxcclxuICAgIHR5cGU6ICdWQVNUJyxcclxuICAgIHBhdXNlQWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhhdC5wbGF5ZXIucGF1c2UodHJ1ZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlc3VtZUFkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoYXQucGxheWVyLnBsYXkodHJ1ZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGlzUGF1c2VkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB0aGF0LnBsYXllci5wYXVzZWQodHJ1ZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFNyYzogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc3JjO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB0aGlzLl9hZFVuaXQ7XHJcbn07XHJcblxyXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3NlbGVjdEFkU291cmNlID0gZnVuY3Rpb24gc2VsZWN0QWRTb3VyY2UocmVzcG9uc2UsIGNhbGxiYWNrKSB7XHJcbiAgdmFyIHNvdXJjZTtcclxuXHJcbiAgdmFyIHBsYXllcldpZHRoID0gZG9tLmdldERpbWVuc2lvbih0aGlzLnBsYXllci5lbCgpKS53aWR0aDtcclxuICByZXNwb25zZS5tZWRpYUZpbGVzLnNvcnQoZnVuY3Rpb24gY29tcGFyZVRvKGEsIGIpIHtcclxuICAgIHZhciBkZWx0YUEgPSBNYXRoLmFicyhwbGF5ZXJXaWR0aCAtIGEud2lkdGgpO1xyXG4gICAgdmFyIGRlbHRhQiA9IE1hdGguYWJzKHBsYXllcldpZHRoIC0gYi53aWR0aCk7XHJcbiAgICByZXR1cm4gZGVsdGFBIC0gZGVsdGFCO1xyXG4gIH0pO1xyXG5cclxuICBzb3VyY2UgPSB0aGlzLnBsYXllci5zZWxlY3RTb3VyY2UocmVzcG9uc2UubWVkaWFGaWxlcykuc291cmNlO1xyXG5cclxuICBpZiAoc291cmNlKSB7XHJcbiAgICBpZiAodGhpcy5fYWRVbml0KSB7XHJcbiAgICAgIHRoaXMuX2FkVW5pdC5fc3JjID0gc291cmNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHNvdXJjZSwgcmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgLy8gY29kZSA0MDMgPD09IENvdWxkbid0IGZpbmQgTWVkaWFGaWxlIHRoYXQgaXMgc3VwcG9ydGVkIGJ5IHRoaXMgdmlkZW8gcGxheWVyXHJcbiAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIkNvdWxkIG5vdCBmaW5kIEFkIG1lZGlhZmlsZSBzdXBwb3J0ZWQgYnkgdGhpcyBwbGF5ZXJcIiwgNDAzKSwgcmVzcG9uc2UpO1xyXG59O1xyXG5cclxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9jcmVhdGVWQVNUVHJhY2tlciA9IGZ1bmN0aW9uIGNyZWF0ZVZBU1RUcmFja2VyKGFkTWVkaWFGaWxlLCByZXNwb25zZSwgY2FsbGJhY2spIHtcclxuICB0cnkge1xyXG4gICAgY2FsbGJhY2sobnVsbCwgYWRNZWRpYUZpbGUsIG5ldyBWQVNUVHJhY2tlcihhZE1lZGlhRmlsZS5zcmMsIHJlc3BvbnNlKSwgcmVzcG9uc2UpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNhbGxiYWNrKGUsIHJlc3BvbnNlKTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3NldHVwRXZlbnRzID0gZnVuY3Rpb24gc2V0dXBFdmVudHMoYWRNZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xyXG4gIHZhciBwcmV2aW91c2x5TXV0ZWQ7XHJcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gIHBsYXllci5vbignZnVsbHNjcmVlbmNoYW5nZScsIHRyYWNrRnVsbHNjcmVlbkNoYW5nZSk7XHJcbiAgcGxheWVyLm9uKCd2YXN0LmFkU3RhcnQnLCB0cmFja0ltcHJlc3Npb25zKTtcclxuICBwbGF5ZXIub24oJ3BhdXNlJywgdHJhY2tQYXVzZSk7XHJcbiAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdHJhY2tQcm9ncmVzcyk7XHJcbiAgcGxheWVyLm9uKCd2b2x1bWVjaGFuZ2UnLCB0cmFja1ZvbHVtZUNoYW5nZSk7XHJcblxyXG4gIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgdW5iaW5kRXZlbnRzKTtcclxuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJywgJ3Zhc3QuYWRTa2lwJ10sIGZ1bmN0aW9uKGV2dCl7XHJcbiAgICBpZihldnQudHlwZSA9PT0gJ3Zhc3QuYWRFbmQnKXtcclxuICAgICAgdHJhY2tlci50cmFja0NvbXBsZXRlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjYWxsYmFjayhudWxsLCBhZE1lZGlhRmlsZSwgcmVzcG9uc2UpO1xyXG5cclxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gdW5iaW5kRXZlbnRzKCkge1xyXG4gICAgcGxheWVyLm9mZignZnVsbHNjcmVlbmNoYW5nZScsIHRyYWNrRnVsbHNjcmVlbkNoYW5nZSk7XHJcbiAgICBwbGF5ZXIub2ZmKCd2YXN0LmFkU3RhcnQnLCB0cmFja0ltcHJlc3Npb25zKTtcclxuICAgIHBsYXllci5vZmYoJ3BhdXNlJywgdHJhY2tQYXVzZSk7XHJcbiAgICBwbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgdHJhY2tQcm9ncmVzcyk7XHJcbiAgICBwbGF5ZXIub2ZmKCd2b2x1bWVjaGFuZ2UnLCB0cmFja1ZvbHVtZUNoYW5nZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0cmFja0Z1bGxzY3JlZW5DaGFuZ2UoKSB7XHJcbiAgICBpZiAocGxheWVyLmlzRnVsbHNjcmVlbigpKSB7XHJcbiAgICAgIHRyYWNrZXIudHJhY2tGdWxsc2NyZWVuKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cmFja2VyLnRyYWNrRXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRyYWNrUGF1c2UoKSB7XHJcbiAgICAvL05PVEU6IHdoZW5ldmVyIGEgdmlkZW8gZW5kcyB0aGUgdmlkZW8gRWxlbWVudCB0cmlnZ2VycyBhICdwYXVzZScgZXZlbnQgYmVmb3JlIHRoZSAnZW5kZWQnIGV2ZW50LlxyXG4gICAgLy8gICAgICBXZSBzaG91bGQgbm90IHRyYWNrIHRoaXMgcGF1c2UgZXZlbnQgYmVjYXVzZSBpdCBtYWtlcyB0aGUgVkFTVCB0cmFja2luZyBjb25mdXNpbmcgYWdhaW4gd2UgdXNlIGFcclxuICAgIC8vICAgICAgVGhyZXNob2xkIG9mIDIgc2Vjb25kcyB0byBwcmV2ZW50IGZhbHNlIHBvc2l0aXZlcyBvbiBJT1MuXHJcbiAgICBpZiAoTWF0aC5hYnMocGxheWVyLmR1cmF0aW9uKCkgLSBwbGF5ZXIuY3VycmVudFRpbWUoKSkgPCAyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cmFja2VyLnRyYWNrUGF1c2UoKTtcclxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXknLCAndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGlmKGV2dC50eXBlID09PSAncGxheScpe1xyXG4gICAgICAgIHRyYWNrZXIudHJhY2tSZXN1bWUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0cmFja1Byb2dyZXNzKCkge1xyXG4gICAgdmFyIGN1cnJlbnRUaW1lSW5NcyA9IHBsYXllci5jdXJyZW50VGltZSgpICogMTAwMDtcclxuICAgIHRyYWNrZXIudHJhY2tQcm9ncmVzcyhjdXJyZW50VGltZUluTXMpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdHJhY2tJbXByZXNzaW9ucygpIHtcclxuICAgIHRyYWNrZXIudHJhY2tJbXByZXNzaW9ucygpO1xyXG4gICAgdHJhY2tlci50cmFja0NyZWF0aXZlVmlldygpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdHJhY2tWb2x1bWVDaGFuZ2UoKSB7XHJcbiAgICB2YXIgbXV0ZWQgPSBwbGF5ZXIubXV0ZWQoKTtcclxuICAgIGlmIChtdXRlZCkge1xyXG4gICAgICB0cmFja2VyLnRyYWNrTXV0ZSgpO1xyXG4gICAgfSBlbHNlIGlmIChwcmV2aW91c2x5TXV0ZWQpIHtcclxuICAgICAgdHJhY2tlci50cmFja1VubXV0ZSgpO1xyXG4gICAgfVxyXG4gICAgcHJldmlvdXNseU11dGVkID0gbXV0ZWQ7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9hZGRTa2lwQnV0dG9uID0gZnVuY3Rpb24gYWRkU2tpcEJ1dHRvbihzb3VyY2UsIHRyYWNrZXIsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xyXG4gIHZhciBza2lwT2Zmc2V0SW5TZWM7XHJcbiAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKHJlc3BvbnNlLnNraXBvZmZzZXQpKSB7XHJcbiAgICBza2lwT2Zmc2V0SW5TZWMgPSByZXNwb25zZS5za2lwb2Zmc2V0IC8gMTAwMDtcclxuICAgIGFkZFNraXBCdXR0b25Ub1BsYXllcih0aGlzLnBsYXllciwgc2tpcE9mZnNldEluU2VjKTtcclxuICB9XHJcbiAgY2FsbGJhY2sobnVsbCwgc291cmNlLCB0cmFja2VyLCByZXNwb25zZSk7XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xyXG4gIGZ1bmN0aW9uIGFkZFNraXBCdXR0b25Ub1BsYXllcihwbGF5ZXIsIHNraXBPZmZzZXQpIHtcclxuICAgIHZhciBza2lwQnV0dG9uID0gY3JlYXRlU2tpcEJ1dHRvbihwbGF5ZXIpO1xyXG4gICAgdmFyIHVwZGF0ZVNraXBCdXR0b24gPSB1cGRhdGVTa2lwQnV0dG9uU3RhdGUuYmluZCh0aGF0LCBza2lwQnV0dG9uLCBza2lwT2Zmc2V0LCBwbGF5ZXIpO1xyXG5cclxuICAgIHBsYXllci5lbCgpLmFwcGVuZENoaWxkKHNraXBCdXR0b24pO1xyXG4gICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdXBkYXRlU2tpcEJ1dHRvbik7XHJcblxyXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVTa2lwQnV0dG9uKTtcclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVTa2lwQnV0dG9uKCkge1xyXG4gICAgICBwbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgdXBkYXRlU2tpcEJ1dHRvbik7XHJcbiAgICAgIGRvbS5yZW1vdmUoc2tpcEJ1dHRvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVTa2lwQnV0dG9uKHBsYXllcikge1xyXG4gICAgdmFyIHNraXBCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCBcInZhc3Qtc2tpcC1idXR0b25cIik7XHJcblxyXG4gICAgc2tpcEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaWYgKGRvbS5oYXNDbGFzcyhza2lwQnV0dG9uLCAnZW5hYmxlZCcpKSB7XHJcbiAgICAgICAgdHJhY2tlci50cmFja1NraXAoKTtcclxuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZFNraXAnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy9XZSBwcmV2ZW50IGV2ZW50IHByb3BhZ2F0aW9uIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggdGhlIGNsaWNrVGhyb3VnaCBhbmQgc28gb25cclxuICAgICAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gc2tpcEJ1dHRvbjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVNraXBCdXR0b25TdGF0ZShza2lwQnV0dG9uLCBza2lwT2Zmc2V0LCBwbGF5ZXIpIHtcclxuICAgIHZhciB0aW1lTGVmdCA9IE1hdGguY2VpbChza2lwT2Zmc2V0IC0gcGxheWVyLmN1cnJlbnRUaW1lKCkpO1xyXG4gICAgaWYgKHRpbWVMZWZ0ID4gMCkge1xyXG4gICAgICBza2lwQnV0dG9uLmlubmVySFRNTCA9IFwiU2tpcCBpbiBcIiArIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKHRpbWVMZWZ0LCAyKSArIFwiLi4uXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIWRvbS5oYXNDbGFzcyhza2lwQnV0dG9uLCAnZW5hYmxlZCcpKSB7XHJcbiAgICAgICAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sICdlbmFibGVkJyk7XHJcbiAgICAgICAgc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNraXAgYWRcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fYWRkQ2xpY2tUaHJvdWdoID0gZnVuY3Rpb24gYWRkQ2xpY2tUaHJvdWdoKG1lZGlhRmlsZSwgdHJhY2tlciwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XHJcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gIHZhciBibG9ja2VyID0gY3JlYXRlQ2xpY2tUaHJvdWdoQmxvY2tlcihwbGF5ZXIsIHRyYWNrZXIsIHJlc3BvbnNlKTtcclxuICB2YXIgdXBkYXRlQmxvY2tlciA9IHVwZGF0ZUJsb2NrZXJVUkwuYmluZCh0aGlzLCBibG9ja2VyLCByZXNwb25zZSwgcGxheWVyKTtcclxuXHJcbiAgcGxheWVyLmVsKCkuaW5zZXJ0QmVmb3JlKGJsb2NrZXIsIHBsYXllci5jb250cm9sQmFyLmVsKCkpO1xyXG4gIHBsYXllci5vbigndGltZXVwZGF0ZScsIHVwZGF0ZUJsb2NrZXIpO1xyXG4gIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcmVtb3ZlQmxvY2tlcik7XHJcblxyXG4gIHJldHVybiBjYWxsYmFjayhudWxsLCBtZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlKTtcclxuXHJcbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVDbGlja1Rocm91Z2hCbG9ja2VyKHBsYXllciwgdHJhY2tlciwgcmVzcG9uc2UpIHtcclxuICAgIHZhciBibG9ja2VyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgdmFyIGNsaWNrVGhyb3VnaE1hY3JvID0gcmVzcG9uc2UuY2xpY2tUaHJvdWdoO1xyXG5cclxuICAgIGRvbS5hZGRDbGFzcyhibG9ja2VyLCAndmFzdC1ibG9ja2VyJyk7XHJcbiAgICBibG9ja2VyLmhyZWYgPSBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChjbGlja1Rocm91Z2hNYWNybywgcGxheWVyKTtcclxuXHJcbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGNsaWNrVGhyb3VnaE1hY3JvKSkge1xyXG4gICAgICBibG9ja2VyLnRhcmdldCA9IFwiX2JsYW5rXCI7XHJcbiAgICB9XHJcblxyXG4gICAgYmxvY2tlci5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaWYgKHBsYXllci5wYXVzZWQoKSkge1xyXG4gICAgICAgIHBsYXllci5wbGF5KCk7XHJcblxyXG4gICAgICAgIC8vV2UgcHJldmVudCBldmVudCBwcm9wYWdhdGlvbiB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBwbGF5ZXIncyBub3JtYWwgcGF1c2UgbWVjaGFuaXNtXHJcbiAgICAgICAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcGxheWVyLnBhdXNlKCk7XHJcbiAgICAgIHRyYWNrZXIudHJhY2tDbGljaygpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gYmxvY2tlcjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUJsb2NrZXJVUkwoYmxvY2tlciwgcmVzcG9uc2UsIHBsYXllcikge1xyXG4gICAgYmxvY2tlci5ocmVmID0gZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwocmVzcG9uc2UuY2xpY2tUaHJvdWdoLCBwbGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwoY2xpY2tUaHJvdWdoTWFjcm8sIHBsYXllcikge1xyXG4gICAgdmFyIHZhcmlhYmxlcyA9IHtcclxuICAgICAgQVNTRVRVUkk6IG1lZGlhRmlsZS5zcmMsXHJcbiAgICAgIENPTlRFTlRQTEFZSEVBRDogdmFzdFV0aWwuZm9ybWF0UHJvZ3Jlc3MocGxheWVyLmN1cnJlbnRUaW1lKCkgKiAxMDAwKVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gY2xpY2tUaHJvdWdoTWFjcm8gPyB2YXN0VXRpbC5wYXJzZVVSTE1hY3JvKGNsaWNrVGhyb3VnaE1hY3JvLCB2YXJpYWJsZXMpIDogJyMnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlQmxvY2tlcigpIHtcclxuICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB1cGRhdGVCbG9ja2VyKTtcclxuICAgIGRvbS5yZW1vdmUoYmxvY2tlcik7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9wbGF5U2VsZWN0ZWRBZCA9IGZ1bmN0aW9uIHBsYXlTZWxlY3RlZEFkKHNvdXJjZSwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XHJcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG5cclxuICBwbGF5ZXIucHJlbG9hZChcImF1dG9cIik7IC8vd2l0aG91dCBwcmVsb2FkPWF1dG8gdGhlIGR1cmF0aW9uY2hhbmdlIGV2ZW50IGlzIG5ldmVyIGZpcmVkXHJcbiAgcGxheWVyLnNyYyhzb3VyY2UpO1xyXG5cclxuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydkdXJhdGlvbmNoYW5nZScsICdlcnJvcicsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICBpZiAoZXZ0LnR5cGUgPT09ICdkdXJhdGlvbmNoYW5nZScpIHtcclxuICAgICAgcGxheUFkKCk7XHJcbiAgICB9IGVsc2UgaWYoZXZ0LnR5cGUgPT09ICdlcnJvcicpIHtcclxuICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIm9uIFZBU1RJbnRlZ3JhdG9yLCBQbGF5ZXIgaXMgdW5hYmxlIHRvIHBsYXkgdGhlIEFkXCIsIDQwMCksIHJlc3BvbnNlKTtcclxuICAgIH1cclxuICAgIC8vTk9URTogSWYgdGhlIGFkcyBnZXQgY2FuY2VsZWQgd2UgZG8gbm90aGluZy9cclxuICB9KTtcclxuXHJcbiAgLyoqKiogbG9jYWwgZnVuY3Rpb25zICoqKioqKi9cclxuICBmdW5jdGlvbiBwbGF5QWQoKSB7XHJcblxyXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsncGxheWluZycsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGlmKGV2dC50eXBlID09PSAndmFzdC5hZHNDYW5jZWwnKXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkU3RhcnQnKTtcclxuXHJcbiAgICAgIHBsYXllci5vbignZW5kZWQnLCBwcm9jZWVkKTtcclxuICAgICAgcGxheWVyLm9uKCd2YXN0LmFkc0NhbmNlbCcsIHByb2NlZWQpO1xyXG4gICAgICBwbGF5ZXIub24oJ3Zhc3QuYWRTa2lwJywgcHJvY2VlZCk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBwcm9jZWVkKGV2dCkge1xyXG5cclxuICAgICAgICBpZihldnQudHlwZSA9PT0gJ2VuZGVkJyAmJiAocGxheWVyLmR1cmF0aW9uKCkgLSBwbGF5ZXIuY3VycmVudFRpbWUoKSkgPiAzICkge1xyXG4gICAgICAgICAgLy8gSWdub3JlIGVuZGVkIGV2ZW50IGlmIHRoZSBBZCB0aW1lIHdhcyBub3QgJ25lYXInIHRoZSBlbmRcclxuICAgICAgICAgIC8vIGF2b2lkcyBpc3N1ZXMgd2hlcmUgSU9TIGNvbnRyb2xzIGNvdWxkIHNraXAgdGhlIEFkXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwbGF5ZXIub2ZmKCdlbmRlZCcsIHByb2NlZWQpO1xyXG4gICAgICAgIHBsYXllci5vZmYoJ3Zhc3QuYWRzQ2FuY2VsJywgcHJvY2VlZCk7XHJcbiAgICAgICAgcGxheWVyLm9mZigndmFzdC5hZFNraXAnLCBwcm9jZWVkKTtcclxuXHJcbiAgICAgICAgLy9OT1RFOiBpZiB0aGUgYWRzIGdldCBjYW5jZWwgd2UgZG8gbm90aGluZyBhcGFydCByZW1vdmluZyB0aGUgbGlzdG5lcnNcclxuICAgICAgICBpZihldnQudHlwZSA9PT0gJ2VuZGVkJyB8fCBldnQudHlwZSA9PT0gJ3Zhc3QuYWRTa2lwJyl7XHJcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwbGF5ZXIucGxheSgpO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fdHJhY2tFcnJvciA9IGZ1bmN0aW9uIHRyYWNrRXJyb3IoZXJyb3IsIHJlc3BvbnNlKSB7XHJcbiAgdmFzdFV0aWwudHJhY2socmVzcG9uc2UuZXJyb3JVUkxNYWNyb3MsIHtFUlJPUkNPREU6IGVycm9yLmNvZGUgfHwgOTAwfSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RJbnRlZ3JhdG9yOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBBZCA9IHJlcXVpcmUoJy4vQWQnKTtcclxudmFyIFZpZGVvQ2xpY2tzID0gcmVxdWlyZSgnLi9WaWRlb0NsaWNrcycpO1xyXG52YXIgTGluZWFyID0gcmVxdWlyZSgnLi9MaW5lYXInKTtcclxudmFyIEluTGluZSA9IHJlcXVpcmUoJy4vSW5MaW5lJyk7XHJcbnZhciBXcmFwcGVyID0gcmVxdWlyZSgnLi9XcmFwcGVyJyk7XHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XHJcblxyXG53aW5kb3cuSW5MaW5lX19BID0gSW5MaW5lO1xyXG5mdW5jdGlvbiBWQVNUUmVzcG9uc2UoKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcclxuICAgIHJldHVybiBuZXcgVkFTVFJlc3BvbnNlKCk7XHJcbiAgfVxyXG5cclxuICB0aGlzLl9saW5lYXJBZGRlZCA9IGZhbHNlO1xyXG4gIHRoaXMuYWRzID0gW107XHJcbiAgdGhpcy5lcnJvclVSTE1hY3JvcyA9IFtdO1xyXG4gIHRoaXMuaW1wcmVzc2lvbnMgPSBbXTtcclxuICB0aGlzLmNsaWNrVHJhY2tpbmdzID0gW107XHJcbiAgdGhpcy5jdXN0b21DbGlja3MgPSBbXTtcclxuICB0aGlzLnRyYWNraW5nRXZlbnRzID0ge307XHJcbiAgdGhpcy5tZWRpYUZpbGVzID0gW107XHJcbiAgdGhpcy5jbGlja1Rocm91Z2ggPSB1bmRlZmluZWQ7XHJcbiAgdGhpcy5hZFRpdGxlID0gJyc7XHJcbiAgdGhpcy5kdXJhdGlvbiA9IHVuZGVmaW5lZDtcclxuICB0aGlzLnNraXBvZmZzZXQgPSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuYWRkQWQgPSBmdW5jdGlvbiAoYWQpIHtcclxuICB2YXIgaW5MaW5lLCB3cmFwcGVyO1xyXG4gIGlmIChhZCBpbnN0YW5jZW9mIEFkKSB7XHJcbiAgICBpbkxpbmUgPSBhZC5pbkxpbmU7XHJcbiAgICB3cmFwcGVyID0gYWQud3JhcHBlcjtcclxuXHJcbiAgICB0aGlzLmFkcy5wdXNoKGFkKTtcclxuXHJcbiAgICBpZiAoaW5MaW5lKSB7XHJcbiAgICAgIHRoaXMuX2FkZEluTGluZShpbkxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3cmFwcGVyKSB7XHJcbiAgICAgIHRoaXMuX2FkZFdyYXBwZXIod3JhcHBlcik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkRXJyb3JUcmFja1VybCA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gIHZhciBlcnJvclVSTCA9IGVycm9yIGluc3RhbmNlb2YgeG1sLkpYT05UcmVlID8geG1sLmtleVZhbHVlKGVycm9yKSA6IGVycm9yO1xyXG4gIGlmIChlcnJvclVSTCkge1xyXG4gICAgdGhpcy5lcnJvclVSTE1hY3Jvcy5wdXNoKGVycm9yVVJMKTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRJbXByZXNzaW9ucyA9IGZ1bmN0aW9uIChpbXByZXNzaW9ucykge1xyXG4gIHV0aWxpdGllcy5pc0FycmF5KGltcHJlc3Npb25zKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMuaW1wcmVzc2lvbnMsIGltcHJlc3Npb25zKTtcclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZENsaWNrVGhyb3VnaCA9IGZ1bmN0aW9uIChjbGlja1Rocm91Z2gpIHtcclxuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY2xpY2tUaHJvdWdoKSkge1xyXG4gICAgdGhpcy5jbGlja1Rocm91Z2ggPSBjbGlja1Rocm91Z2g7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkQ2xpY2tUcmFja2luZ3MgPSBmdW5jdGlvbiAoY2xpY2tUcmFja2luZ3MpIHtcclxuICB1dGlsaXRpZXMuaXNBcnJheShjbGlja1RyYWNraW5ncykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmNsaWNrVHJhY2tpbmdzLCBjbGlja1RyYWNraW5ncyk7XHJcbn07XHJcblxyXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRDdXN0b21DbGlja3MgPSBmdW5jdGlvbiAoY3VzdG9tQ2xpY2tzKSB7XHJcbiAgdXRpbGl0aWVzLmlzQXJyYXkoY3VzdG9tQ2xpY2tzKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMuY3VzdG9tQ2xpY2tzLCBjdXN0b21DbGlja3MpO1xyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkVHJhY2tpbmdFdmVudHMgPSBmdW5jdGlvbiAodHJhY2tpbmdFdmVudHMpIHtcclxuICB2YXIgZXZlbnRzTWFwID0gdGhpcy50cmFja2luZ0V2ZW50cztcclxuXHJcbiAgaWYgKHRyYWNraW5nRXZlbnRzKSB7XHJcbiAgICB0cmFja2luZ0V2ZW50cyA9IHV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRXZlbnRzKSA/IHRyYWNraW5nRXZlbnRzIDogW3RyYWNraW5nRXZlbnRzXTtcclxuICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNraW5nRXZlbnQpIHtcclxuICAgICAgaWYgKCFldmVudHNNYXBbdHJhY2tpbmdFdmVudC5uYW1lXSkge1xyXG4gICAgICAgIGV2ZW50c01hcFt0cmFja2luZ0V2ZW50Lm5hbWVdID0gW107XHJcbiAgICAgIH1cclxuICAgICAgZXZlbnRzTWFwW3RyYWNraW5nRXZlbnQubmFtZV0ucHVzaCh0cmFja2luZ0V2ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFRpdGxlID0gZnVuY3Rpb24gKHRpdGxlKSB7XHJcbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHRpdGxlKSkge1xyXG4gICAgdGhpcy5hZFRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkRHVyYXRpb24gPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcclxuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKGR1cmF0aW9uKSkge1xyXG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFZpZGVvQ2xpY2tzID0gZnVuY3Rpb24gKHZpZGVvQ2xpY2tzKSB7XHJcbiAgaWYgKHZpZGVvQ2xpY2tzIGluc3RhbmNlb2YgVmlkZW9DbGlja3MpIHtcclxuICAgIHRoaXMuX2FkZENsaWNrVGhyb3VnaCh2aWRlb0NsaWNrcy5jbGlja1Rocm91Z2gpO1xyXG4gICAgdGhpcy5fYWRkQ2xpY2tUcmFja2luZ3ModmlkZW9DbGlja3MuY2xpY2tUcmFja2luZ3MpO1xyXG4gICAgdGhpcy5fYWRkQ3VzdG9tQ2xpY2tzKHZpZGVvQ2xpY2tzLmN1c3RvbUNsaWNrcyk7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkTWVkaWFGaWxlcyA9IGZ1bmN0aW9uIChtZWRpYUZpbGVzKSB7XHJcbiAgdXRpbGl0aWVzLmlzQXJyYXkobWVkaWFGaWxlcykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLm1lZGlhRmlsZXMsIG1lZGlhRmlsZXMpO1xyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkU2tpcG9mZnNldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcclxuICBpZiAob2Zmc2V0KSB7XHJcbiAgICB0aGlzLnNraXBvZmZzZXQgPSBvZmZzZXQ7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkQWRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKGFkUGFyYW1ldGVycykge1xyXG4gIGlmIChhZFBhcmFtZXRlcnMpIHtcclxuICAgIHRoaXMuYWRQYXJhbWV0ZXJzID0gYWRQYXJhbWV0ZXJzO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZExpbmVhciA9IGZ1bmN0aW9uIChsaW5lYXIpIHtcclxuICBpZiAobGluZWFyIGluc3RhbmNlb2YgTGluZWFyKSB7XHJcbiAgICB0aGlzLl9hZGREdXJhdGlvbihsaW5lYXIuZHVyYXRpb24pO1xyXG4gICAgdGhpcy5fYWRkVHJhY2tpbmdFdmVudHMobGluZWFyLnRyYWNraW5nRXZlbnRzKTtcclxuICAgIHRoaXMuX2FkZFZpZGVvQ2xpY2tzKGxpbmVhci52aWRlb0NsaWNrcyk7XHJcbiAgICB0aGlzLl9hZGRNZWRpYUZpbGVzKGxpbmVhci5tZWRpYUZpbGVzKTtcclxuICAgIHRoaXMuX2FkZFNraXBvZmZzZXQobGluZWFyLnNraXBvZmZzZXQpO1xyXG4gICAgdGhpcy5fYWRkQWRQYXJhbWV0ZXJzKGxpbmVhci5hZFBhcmFtZXRlcnMpO1xyXG4gICAgdGhpcy5fbGluZWFyQWRkZWQgPSB0cnVlO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEluTGluZSA9IGZ1bmN0aW9uIChpbkxpbmUpIHtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gIGlmIChpbkxpbmUgaW5zdGFuY2VvZiBJbkxpbmUpIHtcclxuICAgIHRoaXMuX2FkZFRpdGxlKGluTGluZS5hZFRpdGxlKTtcclxuICAgIHRoaXMuX2FkZEVycm9yVHJhY2tVcmwoaW5MaW5lLmVycm9yKTtcclxuICAgIHRoaXMuX2FkZEltcHJlc3Npb25zKGluTGluZS5pbXByZXNzaW9ucyk7XHJcblxyXG4gICAgaW5MaW5lLmNyZWF0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChjcmVhdGl2ZSkge1xyXG4gICAgICBpZiAoY3JlYXRpdmUubGluZWFyKSB7XHJcbiAgICAgICAgdGhhdC5fYWRkTGluZWFyKGNyZWF0aXZlLmxpbmVhcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFdyYXBwZXIgPSBmdW5jdGlvbiAod3JhcHBlcikge1xyXG4gIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgaWYgKHdyYXBwZXIgaW5zdGFuY2VvZiBXcmFwcGVyKSB7XHJcbiAgICB0aGlzLl9hZGRFcnJvclRyYWNrVXJsKHdyYXBwZXIuZXJyb3IpO1xyXG4gICAgdGhpcy5fYWRkSW1wcmVzc2lvbnMod3JhcHBlci5pbXByZXNzaW9ucyk7XHJcblxyXG4gICAgd3JhcHBlci5jcmVhdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoY3JlYXRpdmUpIHtcclxuICAgICAgdmFyIGxpbmVhciA9IGNyZWF0aXZlLmxpbmVhcjtcclxuICAgICAgaWYgKGxpbmVhcikge1xyXG4gICAgICAgIHRoYXQuX2FkZFZpZGVvQ2xpY2tzKGxpbmVhci52aWRlb0NsaWNrcyk7XHJcbiAgICAgICAgdGhhdC5jbGlja1Rocm91Z2ggPSB1bmRlZmluZWQ7Ly9XZSBlbnN1cmUgdGhhdCBubyBjbGlja1Rocm91Z2ggaGFzIGJlZW4gYWRkZWRcclxuICAgICAgICB0aGF0Ll9hZGRUcmFja2luZ0V2ZW50cyhsaW5lYXIudHJhY2tpbmdFdmVudHMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLmhhc0xpbmVhciA9IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHRoaXMuX2xpbmVhckFkZGVkO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYXBwZW5kVG9BcnJheShhcnJheSwgaXRlbXMpIHtcclxuICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICBhcnJheS5wdXNoKGl0ZW0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RSZXNwb25zZTtcclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuL1ZBU1RFcnJvcicpO1xyXG52YXIgVkFTVFJlc3BvbnNlID0gcmVxdWlyZSgnLi9WQVNUUmVzcG9uc2UnKTtcclxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxuZnVuY3Rpb24gVkFTVFRyYWNrZXIoYXNzZXRVUkksIHZhc3RSZXNwb25zZSkge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWQVNUVHJhY2tlcikpIHtcclxuICAgIHJldHVybiBuZXcgVkFTVFRyYWNrZXIoYXNzZXRVUkksIHZhc3RSZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICB0aGlzLnNhbml0eUNoZWNrKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpO1xyXG4gIHRoaXMuaW5pdGlhbGl6ZShhc3NldFVSSSwgdmFzdFJlc3BvbnNlKTtcclxuXHJcbn1cclxuXHJcblZBU1RUcmFja2VyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oYXNzZXRVUkksIHZhc3RSZXNwb25zZSkge1xyXG4gIHRoaXMucmVzcG9uc2UgPSB2YXN0UmVzcG9uc2U7XHJcbiAgdGhpcy5hc3NldFVSSSA9IGFzc2V0VVJJO1xyXG4gIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gIHRoaXMucXVhcnRpbGVzID0ge1xyXG4gICAgZmlyc3RRdWFydGlsZToge3RyYWNrZWQ6IGZhbHNlLCB0aW1lOiBNYXRoLnJvdW5kKDI1ICogdmFzdFJlc3BvbnNlLmR1cmF0aW9uKSAvIDEwMH0sXHJcbiAgICBtaWRwb2ludDoge3RyYWNrZWQ6IGZhbHNlLCB0aW1lOiBNYXRoLnJvdW5kKDUwICogdmFzdFJlc3BvbnNlLmR1cmF0aW9uKSAvIDEwMH0sXHJcbiAgICB0aGlyZFF1YXJ0aWxlOiB7dHJhY2tlZDogZmFsc2UsIHRpbWU6IE1hdGgucm91bmQoNzUgKiB2YXN0UmVzcG9uc2UuZHVyYXRpb24pIC8gMTAwfVxyXG4gIH07XHJcbn07XHJcblxyXG5WQVNUVHJhY2tlci5wcm90b3R5cGUuc2FuaXR5Q2hlY2sgPSBmdW5jdGlvbihhc3NldFVSSSwgdmFzdFJlc3BvbnNlKSB7XHJcbiAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcoYXNzZXRVUkkpIHx8IHV0aWxpdGllcy5pc0VtcHR5U3RyaW5nKGFzc2V0VVJJKSkge1xyXG4gICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVkFTVFRyYWNrZXIgY29uc3RydWN0b3IsIG1pc3NpbmcgcmVxdWlyZWQgdGhlIFVSSSBvZiB0aGUgYWQgYXNzZXQgYmVpbmcgcGxheWVkJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XHJcbiAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWQVNUVHJhY2tlciBjb25zdHJ1Y3RvciwgbWlzc2luZyByZXF1aXJlZCBWQVNUIHJlc3BvbnNlJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrVVJMcyA9IGZ1bmN0aW9uIHRyYWNrVVJMcyh1cmxzLCB2YXJpYWJsZXMpIHtcclxuICBpZiAodXRpbGl0aWVzLmlzQXJyYXkodXJscykgJiYgdXJscy5sZW5ndGggPiAwKSB7XHJcbiAgICB2YXJpYWJsZXMgPSB1dGlsaXRpZXMuZXh0ZW5kKHtcclxuICAgICAgQVNTRVRVUkk6IHRoaXMuYXNzZXRVUkksXHJcbiAgICAgIENPTlRFTlRQTEFZSEVBRDogdmFzdFV0aWwuZm9ybWF0UHJvZ3Jlc3ModGhpcy5wcm9ncmVzcylcclxuICAgIH0sIHZhcmlhYmxlcyB8fCB7fSk7XHJcblxyXG4gICAgdmFzdFV0aWwudHJhY2sodXJscywgdmFyaWFibGVzKTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tFdmVudCA9IGZ1bmN0aW9uIHRyYWNrRXZlbnQoZXZlbnROYW1lLCB0cmFja09uY2UpIHtcclxuICB0aGlzLnRyYWNrVVJMcyhnZXRFdmVudFVyaXModGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50c1tldmVudE5hbWVdKSk7XHJcbiAgaWYgKHRyYWNrT25jZSkge1xyXG4gICAgdGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50c1tldmVudE5hbWVdID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXHJcbiAgZnVuY3Rpb24gZ2V0RXZlbnRVcmlzKHRyYWNraW5nRXZlbnRzKSB7XHJcbiAgICB2YXIgdXJpcztcclxuXHJcbiAgICBpZiAodHJhY2tpbmdFdmVudHMpIHtcclxuICAgICAgdXJpcyA9IFtdO1xyXG4gICAgICB0cmFja2luZ0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHVyaXMucHVzaChldmVudC51cmkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB1cmlzO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja1Byb2dyZXNzID0gZnVuY3Rpb24gdHJhY2tQcm9ncmVzcyhuZXdQcm9ncmVzc0luTXMpIHtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgdmFyIGV2ZW50cyA9IFtdO1xyXG4gIHZhciBPTkNFID0gdHJ1ZTtcclxuICB2YXIgQUxXQVlTID0gZmFsc2U7XHJcbiAgdmFyIHRyYWNraW5nRXZlbnRzID0gdGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50cztcclxuXHJcbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihuZXdQcm9ncmVzc0luTXMpKSB7XHJcbiAgICBhZGRUcmFja0V2ZW50KCdzdGFydCcsIE9OQ0UsIG5ld1Byb2dyZXNzSW5NcyA+IDApO1xyXG4gICAgYWRkVHJhY2tFdmVudCgncmV3aW5kJywgQUxXQVlTLCBoYXNSZXdvdW5kKHRoaXMucHJvZ3Jlc3MsIG5ld1Byb2dyZXNzSW5NcykpO1xyXG4gICAgYWRkUXVhcnRpbGVFdmVudHMobmV3UHJvZ3Jlc3NJbk1zKTtcclxuICAgIHRyYWNrUHJvZ3Jlc3NFdmVudHMobmV3UHJvZ3Jlc3NJbk1zKTtcclxuICAgIHRyYWNrRXZlbnRzKCk7XHJcbiAgICB0aGlzLnByb2dyZXNzID0gbmV3UHJvZ3Jlc3NJbk1zO1xyXG4gIH1cclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXHJcbiAgZnVuY3Rpb24gaGFzUmV3b3VuZChjdXJyZW50UHJvZ3Jlc3MsIG5ld1Byb2dyZXNzKSB7XHJcbiAgICB2YXIgUkVXSU5EX1RIUkVTSE9MRCA9IDMwMDA7IC8vSU9TIHZpZGVvIGNsb2NrIGlzIHZlcnkgdW5yZWxpYWJsZSBhbmQgd2UgbmVlZCBhIDMgc2Vjb25kcyB0aHJlc2hvbGQgdG8gZW5zdXJlIHRoYXQgdGhlcmUgd2FzIGEgcmV3aW5kIGFuIHRoYXQgaXQgd2FzIG9uIHB1cnBvc2UuXHJcbiAgICByZXR1cm4gY3VycmVudFByb2dyZXNzID4gbmV3UHJvZ3Jlc3NJbk1zICYmIE1hdGguYWJzKG5ld1Byb2dyZXNzIC0gY3VycmVudFByb2dyZXNzKSA+IFJFV0lORF9USFJFU0hPTEQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRUcmFja0V2ZW50KGV2ZW50TmFtZSwgdHJhY2tPbmNlLCBjYW5CZUFkZGVkKSB7XHJcbiAgICBpZiAodHJhY2tpbmdFdmVudHNbZXZlbnROYW1lXSAmJiBjYW5CZUFkZGVkKSB7XHJcbiAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICBuYW1lOiBldmVudE5hbWUsXHJcbiAgICAgICAgdHJhY2tPbmNlOiAhIXRyYWNrT25jZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFF1YXJ0aWxlRXZlbnRzKHByb2dyZXNzKSB7XHJcbiAgICB2YXIgcXVhcnRpbGVzID0gdGhhdC5xdWFydGlsZXM7XHJcbiAgICB2YXIgZmlyc3RRdWFydGlsZSA9IHRoYXQucXVhcnRpbGVzLmZpcnN0UXVhcnRpbGU7XHJcbiAgICB2YXIgbWlkcG9pbnQgPSB0aGF0LnF1YXJ0aWxlcy5taWRwb2ludDtcclxuICAgIHZhciB0aGlyZFF1YXJ0aWxlID0gdGhhdC5xdWFydGlsZXMudGhpcmRRdWFydGlsZTtcclxuXHJcbiAgICBpZiAoIWZpcnN0UXVhcnRpbGUudHJhY2tlZCkge1xyXG4gICAgICB0cmFja1F1YXJ0aWxlKCdmaXJzdFF1YXJ0aWxlJywgcHJvZ3Jlc3MpO1xyXG4gICAgfSBlbHNlIGlmICghbWlkcG9pbnQudHJhY2tlZCkge1xyXG4gICAgICB0cmFja1F1YXJ0aWxlKCdtaWRwb2ludCcsIHByb2dyZXNzKTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXJkUXVhcnRpbGUudHJhY2tlZCl7XHJcbiAgICAgIHRyYWNrUXVhcnRpbGUoJ3RoaXJkUXVhcnRpbGUnLCBwcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXHJcbiAgICBmdW5jdGlvbiB0cmFja1F1YXJ0aWxlKHF1YXJ0aWxlTmFtZSwgcHJvZ3Jlc3Mpe1xyXG4gICAgICB2YXIgcXVhcnRpbGUgPSBxdWFydGlsZXNbcXVhcnRpbGVOYW1lXTtcclxuICAgICAgaWYoY2FuQmVUcmFja2VkKHF1YXJ0aWxlLCBwcm9ncmVzcykpe1xyXG4gICAgICAgIHF1YXJ0aWxlLnRyYWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIGFkZFRyYWNrRXZlbnQocXVhcnRpbGVOYW1lLCBPTkNFLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FuQmVUcmFja2VkKHF1YXJ0aWxlLCBwcm9ncmVzcykge1xyXG4gICAgdmFyIHF1YXJ0aWxlVGltZSA9IHF1YXJ0aWxlLnRpbWU7XHJcbiAgICAvL1dlIG9ubHkgZmlyZSB0aGUgcXVhcnRpbGUgZXZlbnQgaWYgdGhlIHByb2dyZXNzIGlzIGJpZ2dlciB0aGFuIHRoZSBxdWFydGlsZSB0aW1lIGJ5IDUgc2Vjb25kcyBhdCBtb3N0LlxyXG4gICAgcmV0dXJuIHByb2dyZXNzID49IHF1YXJ0aWxlVGltZSAmJiBwcm9ncmVzcyA8PSAocXVhcnRpbGVUaW1lICsgNTAwMCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0cmFja1Byb2dyZXNzRXZlbnRzKHByb2dyZXNzKSB7XHJcbiAgICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRXZlbnRzLnByb2dyZXNzKSkge1xyXG4gICAgICByZXR1cm47IC8vTm90aGluZyB0byB0cmFja1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwZW5kaW5nUHJvZ3Jlc3NFdnRzID0gW107XHJcblxyXG4gICAgdHJhY2tpbmdFdmVudHMucHJvZ3Jlc3MuZm9yRWFjaChmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGlmIChldnQub2Zmc2V0IDw9IHByb2dyZXNzKSB7XHJcbiAgICAgICAgdGhhdC50cmFja1VSTHMoW2V2dC51cmldKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwZW5kaW5nUHJvZ3Jlc3NFdnRzLnB1c2goZXZ0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0cmFja2luZ0V2ZW50cy5wcm9ncmVzcyA9IHBlbmRpbmdQcm9ncmVzc0V2dHM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0cmFja0V2ZW50cygpIHtcclxuICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICB0aGF0LnRyYWNrRXZlbnQoZXZlbnQubmFtZSwgZXZlbnQudHJhY2tPbmNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbltcclxuICAncmV3aW5kJyxcclxuICAnZnVsbHNjcmVlbicsXHJcbiAgJ2V4aXRGdWxsc2NyZWVuJyxcclxuICAncGF1c2UnLFxyXG4gICdyZXN1bWUnLFxyXG4gICdtdXRlJyxcclxuICAndW5tdXRlJyxcclxuICAnYWNjZXB0SW52aXRhdGlvbicsXHJcbiAgJ2FjY2VwdEludml0YXRpb25MaW5lYXInLFxyXG4gICdjb2xsYXBzZScsXHJcbiAgJ2V4cGFuZCdcclxuXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcclxuICAgIFZBU1RUcmFja2VyLnByb3RvdHlwZVsndHJhY2snICsgdXRpbGl0aWVzLmNhcGl0YWxpemUoZXZlbnROYW1lKV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMudHJhY2tFdmVudChldmVudE5hbWUpO1xyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbltcclxuICAnc3RhcnQnLFxyXG4gICdza2lwJyxcclxuICAnY2xvc2UnLFxyXG4gICdjbG9zZUxpbmVhcidcclxuXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcclxuICAgIFZBU1RUcmFja2VyLnByb3RvdHlwZVsndHJhY2snICsgdXRpbGl0aWVzLmNhcGl0YWxpemUoZXZlbnROYW1lKV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMudHJhY2tFdmVudChldmVudE5hbWUsIHRydWUpO1xyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbltcclxuICAnZmlyc3RRdWFydGlsZScsXHJcbiAgJ21pZHBvaW50JyxcclxuICAndGhpcmRRdWFydGlsZSdcclxuXS5mb3JFYWNoKGZ1bmN0aW9uIChxdWFydGlsZSkge1xyXG4gICAgVkFTVFRyYWNrZXIucHJvdG90eXBlWyd0cmFjaycgKyB1dGlsaXRpZXMuY2FwaXRhbGl6ZShxdWFydGlsZSldID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnF1YXJ0aWxlc1txdWFydGlsZV0udHJhY2tlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMudHJhY2tFdmVudChxdWFydGlsZSwgdHJ1ZSk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYodGhpcy5xdWFydGlsZXMudGhpcmRRdWFydGlsZS50cmFja2VkKXtcclxuICAgIHRoaXMudHJhY2tFdmVudCgnY29tcGxldGUnLCB0cnVlKTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tFcnJvcldpdGhDb2RlID0gZnVuY3Rpb24gdHJhY2tFcnJvcldpdGhDb2RlKGVycm9yY29kZSkge1xyXG4gIGlmICh1dGlsaXRpZXMuaXNOdW1iZXIoZXJyb3Jjb2RlKSkge1xyXG4gICAgdGhpcy50cmFja1VSTHModGhpcy5yZXNwb25zZS5lcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3Jjb2RlfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrSW1wcmVzc2lvbnMgPSBmdW5jdGlvbiB0cmFja0ltcHJlc3Npb25zKCkge1xyXG4gIHRoaXMudHJhY2tVUkxzKHRoaXMucmVzcG9uc2UuaW1wcmVzc2lvbnMpO1xyXG59O1xyXG5cclxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrQ3JlYXRpdmVWaWV3ID0gZnVuY3Rpb24gdHJhY2tDcmVhdGl2ZVZpZXcoKSB7XHJcbiAgdGhpcy50cmFja0V2ZW50KCdjcmVhdGl2ZVZpZXcnKTtcclxufTtcclxuXHJcblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0NsaWNrID0gZnVuY3Rpb24gdHJhY2tDbGljaygpIHtcclxuICB0aGlzLnRyYWNrVVJMcyh0aGlzLnJlc3BvbnNlLmNsaWNrVHJhY2tpbmdzKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVkFTVFRyYWNrZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcclxuXHJcbmZ1bmN0aW9uIFZpZGVvQ2xpY2tzKHZpZGVvQ2xpY2tKVHJlZSkge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWaWRlb0NsaWNrcykpIHtcclxuICAgIHJldHVybiBuZXcgVmlkZW9DbGlja3ModmlkZW9DbGlja0pUcmVlKTtcclxuICB9XHJcblxyXG4gIHRoaXMuY2xpY2tUaHJvdWdoID0geG1sLmtleVZhbHVlKHZpZGVvQ2xpY2tKVHJlZS5jbGlja1Rocm91Z2gpO1xyXG4gIHRoaXMuY2xpY2tUcmFja2luZ3MgPSBwYXJzZUNsaWNrVHJhY2tpbmdzKHZpZGVvQ2xpY2tKVHJlZS5jbGlja1RyYWNraW5nKTtcclxuICB0aGlzLmN1c3RvbUNsaWNrcyA9IHBhcnNlQ2xpY2tUcmFja2luZ3ModmlkZW9DbGlja0pUcmVlLmN1c3RvbUNsaWNrKTtcclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIHBhcnNlQ2xpY2tUcmFja2luZ3ModHJhY2tpbmdEYXRhKSB7XHJcbiAgICB2YXIgY2xpY2tUcmFja2luZ3MgPSBbXTtcclxuICAgIGlmICh0cmFja2luZ0RhdGEpIHtcclxuICAgICAgdHJhY2tpbmdEYXRhID0gdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdEYXRhKSA/IHRyYWNraW5nRGF0YSA6IFt0cmFja2luZ0RhdGFdO1xyXG4gICAgICB0cmFja2luZ0RhdGEuZm9yRWFjaChmdW5jdGlvbiAoY2xpY2tUcmFja2luZ0RhdGEpIHtcclxuICAgICAgICBjbGlja1RyYWNraW5ncy5wdXNoKHhtbC5rZXlWYWx1ZShjbGlja1RyYWNraW5nRGF0YSkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbGlja1RyYWNraW5ncztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVmlkZW9DbGlja3M7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xyXG52YXIgQ3JlYXRpdmUgPSByZXF1aXJlKCcuL0NyZWF0aXZlJyk7XHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XHJcblxyXG5mdW5jdGlvbiBXcmFwcGVyKHdyYXBwZXJKVHJlZSkge1xyXG4gIGlmKCEodGhpcyBpbnN0YW5jZW9mIFdyYXBwZXIpKSB7XHJcbiAgICByZXR1cm4gbmV3IFdyYXBwZXIod3JhcHBlckpUcmVlKTtcclxuICB9XHJcblxyXG4gIC8vUmVxdWlyZWQgZWxlbWVudHNcclxuICB0aGlzLmFkU3lzdGVtID0geG1sLmtleVZhbHVlKHdyYXBwZXJKVHJlZS5hZFN5c3RlbSk7XHJcbiAgdGhpcy5pbXByZXNzaW9ucyA9IHZhc3RVdGlsLnBhcnNlSW1wcmVzc2lvbnMod3JhcHBlckpUcmVlLmltcHJlc3Npb24pO1xyXG4gIHRoaXMuVkFTVEFkVGFnVVJJID0geG1sLmtleVZhbHVlKHdyYXBwZXJKVHJlZS52QVNUQWRUYWdVUkkpO1xyXG5cclxuICAvL09wdGlvbmFsIGVsZW1lbnRzXHJcbiAgdGhpcy5jcmVhdGl2ZXMgPSBDcmVhdGl2ZS5wYXJzZUNyZWF0aXZlcyh3cmFwcGVySlRyZWUuY3JlYXRpdmVzKTtcclxuICB0aGlzLmVycm9yID0geG1sLmtleVZhbHVlKHdyYXBwZXJKVHJlZS5lcnJvcik7XHJcbiAgdGhpcy5leHRlbnNpb25zID0gd3JhcHBlckpUcmVlLmV4dGVuc2lvbnM7XHJcblxyXG4gIC8vT3B0aW9uYWwgYXR0cnNcclxuICB0aGlzLmZvbGxvd0FkZGl0aW9uYWxXcmFwcGVycyA9IHV0aWxpdGllcy5pc0RlZmluZWQoeG1sLmF0dHIod3JhcHBlckpUcmVlLCAnZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzJykpPyB4bWwuYXR0cih3cmFwcGVySlRyZWUsICdmb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnMnKTogdHJ1ZTtcclxuICB0aGlzLmFsbG93TXVsdGlwbGVBZHMgPSB4bWwuYXR0cih3cmFwcGVySlRyZWUsICdhbGxvd011bHRpcGxlQWRzJyk7XHJcbiAgdGhpcy5mYWxsYmFja09uTm9BZCA9IHhtbC5hdHRyKHdyYXBwZXJKVHJlZSwgJ2ZhbGxiYWNrT25Ob0FkJyk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gV3JhcHBlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxuXHJcbnZhciBkdXJhdGlvblJlZ2V4ID0gLyhcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpKFxcLihcXGRcXGRcXGQpKT8vO1xyXG5cclxudmFyIHBhcnNlcnMgPSB7XHJcblxyXG4gIGR1cmF0aW9uOiBmdW5jdGlvbiBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uU3RyKSB7XHJcblxyXG4gICAgdmFyIG1hdGNoLCBkdXJhdGlvbkluTXM7XHJcblxyXG4gICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhkdXJhdGlvblN0cikpIHtcclxuICAgICAgbWF0Y2ggPSBkdXJhdGlvblN0ci5tYXRjaChkdXJhdGlvblJlZ2V4KTtcclxuICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgZHVyYXRpb25Jbk1zID0gcGFyc2VIb3Vyc1RvTXMobWF0Y2hbMV0pICsgcGFyc2VNaW5Ub01zKG1hdGNoWzJdKSArIHBhcnNlU2VjVG9NcyhtYXRjaFszXSkgKyBwYXJzZUludChtYXRjaFs1XSB8fCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc05hTihkdXJhdGlvbkluTXMpID8gbnVsbCA6IGR1cmF0aW9uSW5NcztcclxuXHJcbiAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgICBmdW5jdGlvbiBwYXJzZUhvdXJzVG9Ncyhob3VyU3RyKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChob3VyU3RyLCAxMCkgKiA2MCAqIDYwICogMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZU1pblRvTXMobWluU3RyKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChtaW5TdHIsIDEwKSAqIDYwICogMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZVNlY1RvTXMoc2VjU3RyKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChzZWNTdHIsIDEwKSAqIDEwMDA7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgb2Zmc2V0OiBmdW5jdGlvbiBwYXJzZU9mZnNldChvZmZzZXQsIGR1cmF0aW9uKSB7XHJcbiAgICBpZihpc1BlcmNlbnRhZ2Uob2Zmc2V0KSl7XHJcbiAgICAgIHJldHVybiBjYWxjdWxhdGVQZXJjZW50YWdlKG9mZnNldCwgZHVyYXRpb24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlcnMuZHVyYXRpb24ob2Zmc2V0KTtcclxuXHJcbiAgICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cclxuICAgIGZ1bmN0aW9uIGlzUGVyY2VudGFnZShvZmZzZXQpIHtcclxuICAgICAgdmFyIHBlcmNlbnRhZ2VSZWdleCA9IC9eXFxkKyhcXC5cXGQrKT8lJC9nO1xyXG4gICAgICByZXR1cm4gcGVyY2VudGFnZVJlZ2V4LnRlc3Qob2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVQZXJjZW50YWdlKHBlcmNlbnRTdHIsIGR1cmF0aW9uKSB7XHJcbiAgICAgIGlmKGR1cmF0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbGNQZXJjZW50KGR1cmF0aW9uLCBwYXJzZUZsb2F0KHBlcmNlbnRTdHIucmVwbGFjZSgnJScsICcnKSkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNQZXJjZW50KHF1YW50aXR5LCBwZXJjZW50KXtcclxuICAgICAgcmV0dXJuIHF1YW50aXR5ICogcGVyY2VudCAvIDEwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG59O1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcGFyc2VyczsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG52YXIgVlBBSURIVE1MNVRlY2ggPSByZXF1aXJlKCcuLi92cGFpZC9WUEFJREhUTUw1VGVjaCcpO1xyXG52YXIgVlBBSURGbGFzaFRlY2ggPSByZXF1aXJlKCcuLi92cGFpZC9WUEFJREZsYXNoVGVjaCcpO1xyXG52YXIgVlBBSURGTEFTSENsaWVudCA9IHJlcXVpcmUoJ1ZQQUlERkxBU0hDbGllbnQvanMvVlBBSURGTEFTSENsaWVudCcpO1xyXG5cclxudmFyIHZhc3RVdGlsID0ge1xyXG5cclxuICB0cmFjazogZnVuY3Rpb24gdHJhY2soVVJMTWFjcm9zLCB2YXJpYWJsZXMpIHtcclxuICAgIHZhciBzb3VyY2VzID0gdmFzdFV0aWwucGFyc2VVUkxNYWNyb3MoVVJMTWFjcm9zLCB2YXJpYWJsZXMpO1xyXG4gICAgdmFyIHRyYWNrSW1ncyA9IFtdO1xyXG4gICAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzcmMpIHtcclxuICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWcuc3JjID0gc3JjO1xyXG4gICAgICB0cmFja0ltZ3MucHVzaChpbWcpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdHJhY2tJbWdzO1xyXG4gIH0sXHJcblxyXG4gIHBhcnNlVVJMTWFjcm9zOiBmdW5jdGlvbiBwYXJzZU1hY3JvcyhVUkxNYWNyb3MsIHZhcmlhYmxlcykge1xyXG4gICAgdmFyIHBhcnNlZFVSTHMgPSBbXTtcclxuXHJcbiAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgfHwge307XHJcblxyXG4gICAgaWYgKCEodmFyaWFibGVzW1wiQ0FDSEVCVVNUSU5HXCJdKSkge1xyXG4gICAgICB2YXJpYWJsZXNbXCJDQUNIRUJVU1RJTkdcIl0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxLjBlKzEwKTtcclxuICAgIH1cclxuXHJcbiAgICBVUkxNYWNyb3MuZm9yRWFjaChmdW5jdGlvbiAoVVJMTWFjcm8pIHtcclxuICAgICAgcGFyc2VkVVJMcy5wdXNoKHZhc3RVdGlsLl9wYXJzZVVSTE1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwYXJzZWRVUkxzO1xyXG4gIH0sXHJcblxyXG4gIHBhcnNlVVJMTWFjcm86IGZ1bmN0aW9uIHBhcnNlTWFjcm8oVVJMTWFjcm8sIHZhcmlhYmxlcykge1xyXG4gICAgdmFyaWFibGVzID0gdmFyaWFibGVzIHx8IHt9O1xyXG5cclxuICAgIGlmICghKHZhcmlhYmxlc1tcIkNBQ0hFQlVTVElOR1wiXSkpIHtcclxuICAgICAgdmFyaWFibGVzW1wiQ0FDSEVCVVNUSU5HXCJdID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMS4wZSsxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhc3RVdGlsLl9wYXJzZVVSTE1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpO1xyXG4gIH0sXHJcblxyXG4gIF9wYXJzZVVSTE1hY3JvOiBmdW5jdGlvbiBwYXJzZU1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpIHtcclxuICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyB8fCB7fTtcclxuXHJcbiAgICB1dGlsaXRpZXMuZm9yRWFjaCh2YXJpYWJsZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgIFVSTE1hY3JvID0gVVJMTWFjcm8ucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXFtcIiArIGtleSArIFwiXFxcXFxcXVwiLCAnZ20nKSwgdmFsdWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIFVSTE1hY3JvO1xyXG4gIH0sXHJcblxyXG4gIHBhcnNlRHVyYXRpb246IGZ1bmN0aW9uIHBhcnNlRHVyYXRpb24oZHVyYXRpb25TdHIpIHtcclxuICAgIHZhciBkdXJhdGlvblJlZ2V4ID0gLyhcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpKFxcLihcXGRcXGRcXGQpKT8vO1xyXG4gICAgdmFyIG1hdGNoLCBkdXJhdGlvbkluTXM7XHJcblxyXG4gICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhkdXJhdGlvblN0cikpIHtcclxuICAgICAgbWF0Y2ggPSBkdXJhdGlvblN0ci5tYXRjaChkdXJhdGlvblJlZ2V4KTtcclxuICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgZHVyYXRpb25Jbk1zID0gcGFyc2VIb3Vyc1RvTXMobWF0Y2hbMV0pICsgcGFyc2VNaW5Ub01zKG1hdGNoWzJdKSArIHBhcnNlU2VjVG9NcyhtYXRjaFszXSkgKyBwYXJzZUludChtYXRjaFs1XSB8fCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc05hTihkdXJhdGlvbkluTXMpID8gbnVsbCA6IGR1cmF0aW9uSW5NcztcclxuXHJcbiAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgICBmdW5jdGlvbiBwYXJzZUhvdXJzVG9Ncyhob3VyU3RyKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChob3VyU3RyLCAxMCkgKiA2MCAqIDYwICogMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZU1pblRvTXMobWluU3RyKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChtaW5TdHIsIDEwKSAqIDYwICogMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZVNlY1RvTXMoc2VjU3RyKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChzZWNTdHIsIDEwKSAqIDEwMDA7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcGFyc2VJbXByZXNzaW9uczogZnVuY3Rpb24gcGFyc2VJbXByZXNzaW9ucyhpbXByZXNzaW9ucykge1xyXG4gICAgaWYgKGltcHJlc3Npb25zKSB7XHJcbiAgICAgIGltcHJlc3Npb25zID0gdXRpbGl0aWVzLmlzQXJyYXkoaW1wcmVzc2lvbnMpID8gaW1wcmVzc2lvbnMgOiBbaW1wcmVzc2lvbnNdO1xyXG4gICAgICByZXR1cm4gdXRpbGl0aWVzLnRyYW5zZm9ybUFycmF5KGltcHJlc3Npb25zLCBmdW5jdGlvbiAoaW1wcmVzc2lvbikge1xyXG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhpbXByZXNzaW9uLmtleVZhbHVlKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGltcHJlc3Npb24ua2V5VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH0sXHJcblxyXG5cclxuICAvL1dlIGFzc3VtZSB0aGF0IHRoZSBwcm9ncmVzcyBpcyBnb2luZyB0byBhcnJpdmUgaW4gbWlsbGlzZWNvbmRzXHJcbiAgZm9ybWF0UHJvZ3Jlc3M6IGZ1bmN0aW9uIGZvcm1hdFByb2dyZXNzKHByb2dyZXNzKSB7XHJcbiAgICB2YXIgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG1pbGxpc2Vjb25kcztcclxuICAgIGhvdXJzID0gcHJvZ3Jlc3MgLyAoNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgaG91cnMgPSBNYXRoLmZsb29yKGhvdXJzKTtcclxuICAgIG1pbnV0ZXMgPSAocHJvZ3Jlc3MgLyAoNjAgKiAxMDAwKSkgJSA2MDtcclxuICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKG1pbnV0ZXMpO1xyXG4gICAgc2Vjb25kcyA9IChwcm9ncmVzcyAvIDEwMDApICUgNjA7XHJcbiAgICBzZWNvbmRzID0gTWF0aC5mbG9vcihzZWNvbmRzKTtcclxuICAgIG1pbGxpc2Vjb25kcyA9IHByb2dyZXNzICUgMTAwMDtcclxuICAgIHJldHVybiB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhob3VycywgMikgKyAnOicgKyB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhtaW51dGVzLCAyKSArICc6JyArIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKHNlY29uZHMsIDIpICsgJy4nICsgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHMobWlsbGlzZWNvbmRzLCAzKTtcclxuICB9LFxyXG5cclxuICBwYXJzZU9mZnNldDogZnVuY3Rpb24gcGFyc2VPZmZzZXQob2Zmc2V0LCBkdXJhdGlvbikge1xyXG4gICAgaWYgKGlzUGVyY2VudGFnZShvZmZzZXQpKSB7XHJcbiAgICAgIHJldHVybiBjYWxjdWxhdGVQZXJjZW50YWdlKG9mZnNldCwgZHVyYXRpb24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhc3RVdGlsLnBhcnNlRHVyYXRpb24ob2Zmc2V0KTtcclxuXHJcbiAgICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cclxuICAgIGZ1bmN0aW9uIGlzUGVyY2VudGFnZShvZmZzZXQpIHtcclxuICAgICAgdmFyIHBlcmNlbnRhZ2VSZWdleCA9IC9eXFxkKyhcXC5cXGQrKT8lJC9nO1xyXG4gICAgICByZXR1cm4gcGVyY2VudGFnZVJlZ2V4LnRlc3Qob2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVQZXJjZW50YWdlKHBlcmNlbnRTdHIsIGR1cmF0aW9uKSB7XHJcbiAgICAgIGlmIChkdXJhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBjYWxjUGVyY2VudChkdXJhdGlvbiwgcGFyc2VGbG9hdChwZXJjZW50U3RyLnJlcGxhY2UoJyUnLCAnJykpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjUGVyY2VudChxdWFudGl0eSwgcGVyY2VudCkge1xyXG4gICAgICByZXR1cm4gcXVhbnRpdHkgKiBwZXJjZW50IC8gMTAwO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG5cclxuICAvL0xpc3Qgb2Ygc3VwcG9ydGVkIFZQQUlEIHRlY2hub2xvZ2llc1xyXG4gIFZQQUlEX3RlY2hzOiBbXHJcbiAgICBWUEFJREZsYXNoVGVjaCxcclxuICAgIFZQQUlESFRNTDVUZWNoXHJcbiAgXSxcclxuXHJcbiAgaXNWUEFJRDogZnVuY3Rpb24gaXNWUEFJRE1lZGlhRmlsZShtZWRpYUZpbGUpIHtcclxuICAgIHJldHVybiAhIW1lZGlhRmlsZSAmJiBtZWRpYUZpbGUuYXBpRnJhbWV3b3JrID09PSAnVlBBSUQnO1xyXG4gIH0sXHJcblxyXG4gIGZpbmRTdXBwb3J0ZWRWUEFJRFRlY2g6IGZ1bmN0aW9uIGZpbmRTdXBwb3J0ZWRWUEFJRFRlY2gobWltZVR5cGUpIHtcclxuICAgIHZhciBpLCBsZW4sIFZQQUlEVGVjaDtcclxuXHJcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSB0aGlzLlZQQUlEX3RlY2hzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XHJcbiAgICAgIFZQQUlEVGVjaCA9IHRoaXMuVlBBSURfdGVjaHNbaV07XHJcbiAgICAgIGlmIChWUEFJRFRlY2guc3VwcG9ydHMobWltZVR5cGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIFZQQUlEVGVjaDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfSxcclxuXHJcbiAgaXNGbGFzaFN1cHBvcnRlZDogZnVuY3Rpb24gaXNGbGFzaFN1cHBvcnRlZCgpIHtcclxuICAgIHJldHVybiBWUEFJREZMQVNIQ2xpZW50LmlzU3VwcG9ydGVkKCk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogTmVjZXNzYXJ5IHN0ZXAgZm9yIFZQQUlERkxBU2hDbGllbnQgdG8ga25vdyBpZiBmbGFzaCBpcyBzdXBwb3J0ZWQgYW5kIG5vdCBibG9ja2VkLlxyXG4gICAqIElNUE9SVEFOVCBOT1RFOiBUaGlzIGlzIGFuIGFzeW5jIHRlc3QgYW5kIG5lZWRzIHRvIGJlIHJ1biBhcyBzb29uIGFzIHBvc3NpYmxlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHZwYWlkRmxhc2hMb2FkZXJQYXRoIHRoZSBwYXRoIHRvIHRoZSB2cGFpZEZsYXNoTG9hZGVyIHN3ZiBvYmouXHJcbiAgICovXHJcbiAgcnVuRmxhc2hTdXBwb3J0Q2hlY2s6IGZ1bmN0aW9uIHJ1bkZsYXNoU3VwcG9ydENoZWNrKHZwYWlkRmxhc2hMb2FkZXJQYXRoKSB7XHJcbiAgICBWUEFJREZMQVNIQ2xpZW50LnJ1bkZsYXNoVGVzdCh7ZGF0YTogdnBhaWRGbGFzaExvYWRlclBhdGh9KTtcclxuICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB2YXN0VXRpbDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVEVycm9yJyk7XHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxuZnVuY3Rpb24gVlBBSURBZFVuaXRXcmFwcGVyKHZwYWlkQWRVbml0LCBvcHRzKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZQQUlEQWRVbml0V3JhcHBlcikpIHtcclxuICAgIHJldHVybiBuZXcgVlBBSURBZFVuaXRXcmFwcGVyKHZwYWlkQWRVbml0LCBvcHRzKTtcclxuICB9XHJcbiAgc2FuaXR5Q2hlY2sodnBhaWRBZFVuaXQsIG9wdHMpO1xyXG5cclxuICB0aGlzLm9wdGlvbnMgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBvcHRzKTtcclxuXHJcbiAgdGhpcy5fYWRVbml0ID0gdnBhaWRBZFVuaXQ7XHJcblxyXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhhZFVuaXQsIG9wdHMpIHtcclxuICAgIGlmICghYWRVbml0IHx8ICFWUEFJREFkVW5pdFdyYXBwZXIuY2hlY2tWUEFJREludGVyZmFjZShhZFVuaXQpKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoJ29uIFZQQUlEQWRVbml0V3JhcHBlciwgdGhlIHBhc3NlZCBWUEFJRCBhZFVuaXQgZG9lcyBub3QgZnVsbHkgaW1wbGVtZW50IHRoZSBWUEFJRCBpbnRlcmZhY2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXV0aWxpdGllcy5pc09iamVjdChvcHRzKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLCBleHBlY3RlZCBvcHRpb25zIGhhc2ggIGJ1dCBnb3QgJ1wiICsgb3B0cyArIFwiJ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIShcInJlc3BvbnNlVGltZW91dFwiIGluIG9wdHMpIHx8ICF1dGlsaXRpZXMuaXNOdW1iZXIob3B0cy5yZXNwb25zZVRpbWVvdXQpICl7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIGV4cGVjdGVkIHJlc3BvbnNlVGltZW91dCBpbiBvcHRpb25zXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuVlBBSURBZFVuaXRXcmFwcGVyLmNoZWNrVlBBSURJbnRlcmZhY2UgPSBmdW5jdGlvbiBjaGVja1ZQQUlESW50ZXJmYWNlKFZQQUlEQWRVbml0KSB7XHJcbiAgLy9OT1RFOiBza2lwQWQgaXMgbm90IHBhcnQgb2YgdGhlIG1ldGhvZCBsaXN0IGJlY2F1c2UgaXQgb25seSBhcHBlYXJzIGluIFZQQUlEIDIuMCBhbmQgd2Ugc3VwcG9ydCBWUEFJRCAxLjBcclxuICB2YXIgVlBBSURJbnRlcmZhY2VNZXRob2RzID0gW1xyXG4gICAgJ2hhbmRzaGFrZVZlcnNpb24nLCAnaW5pdEFkJywgJ3N0YXJ0QWQnLCAnc3RvcEFkJywgJ3Jlc2l6ZUFkJywgJ3BhdXNlQWQnLCAnZXhwYW5kQWQnLCAnY29sbGFwc2VBZCdcclxuICBdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gVlBBSURJbnRlcmZhY2VNZXRob2RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICBpZiAoIVZQQUlEQWRVbml0IHx8ICF1dGlsaXRpZXMuaXNGdW5jdGlvbihWUEFJREFkVW5pdFtWUEFJREludGVyZmFjZU1ldGhvZHNbaV1dKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIGNhblN1YnNjcmliZVRvRXZlbnRzKFZQQUlEQWRVbml0KSAmJiBjYW5VbnN1YnNjcmliZUZyb21FdmVudHMoVlBBSURBZFVuaXQpO1xyXG5cclxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXHJcblxyXG4gIGZ1bmN0aW9uIGNhblN1YnNjcmliZVRvRXZlbnRzKGFkVW5pdCkge1xyXG4gICAgcmV0dXJuIHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5zdWJzY3JpYmUpIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5hZGRFdmVudExpc3RlbmVyKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQub24pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FuVW5zdWJzY3JpYmVGcm9tRXZlbnRzKGFkVW5pdCkge1xyXG4gICAgcmV0dXJuIHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC51bnN1YnNjcmliZSkgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5vZmYpO1xyXG5cclxuICB9XHJcbn07XHJcblxyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLmFkVW5pdEFzeW5jQ2FsbCA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgYXJncyA9IHV0aWxpdGllcy5hcnJheUxpa2VPYmpUb0FycmF5KGFyZ3VtZW50cyk7XHJcbiAgdmFyIG1ldGhvZCA9IGFyZ3Muc2hpZnQoKTtcclxuICB2YXIgY2IgPSBhcmdzLnBvcCgpO1xyXG4gIHZhciB0aW1lb3V0SWQ7XHJcblxyXG4gIHNhbml0eUNoZWNrKG1ldGhvZCwgY2IsIHRoaXMuX2FkVW5pdCk7XHJcbiAgYXJncy5wdXNoKHdyYXBDYWxsYmFjaygpKTtcclxuXHJcbiAgdGhpcy5fYWRVbml0W21ldGhvZF0uYXBwbHkodGhpcy5fYWRVbml0LCBhcmdzKTtcclxuICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgIHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICBjYihuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLCB0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIGEgcmVzcG9uc2Ugb24gY2FsbCAnXCIgKyBtZXRob2QgKyBcIidcIikpO1xyXG4gICAgY2IgPSB1dGlsaXRpZXMubm9vcDtcclxuICB9LCB0aGlzLm9wdGlvbnMucmVzcG9uc2VUaW1lb3V0KTtcclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKG1ldGhvZCwgY2IsIGFkVW5pdCkge1xyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcobWV0aG9kKSB8fCAhdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0W21ldGhvZF0pKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIuYWRVbml0QXN5bmNDYWxsLCBpbnZhbGlkIG1ldGhvZCBuYW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIuYWRVbml0QXN5bmNDYWxsLCBtaXNzaW5nIGNhbGxiYWNrXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gd3JhcENhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHRpbWVvdXRJZCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgICB9XHJcbiAgICAgIGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXZ0TmFtZSwgaGFuZGxlcikge1xyXG4gIHZhciBhZGRFdmVudExpc3RlbmVyID0gdGhpcy5fYWRVbml0LmFkZEV2ZW50TGlzdGVuZXIgfHwgdGhpcy5fYWRVbml0LnN1YnNjcmliZSB8fCB0aGlzLl9hZFVuaXQub247XHJcbiAgYWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMuX2FkVW5pdCwgZXZ0TmFtZSwgaGFuZGxlcik7XHJcbn07XHJcblxyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChldnROYW1lLCBoYW5kbGVyKSB7XHJcbiAgdmFyIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLl9hZFVuaXQucmVtb3ZlRXZlbnRMaXN0ZW5lciB8fCB0aGlzLl9hZFVuaXQudW5zdWJzY3JpYmUgfHwgdGhpcy5fYWRVbml0Lm9mZjtcclxuICByZW1vdmVFdmVudExpc3RlbmVyLmNhbGwodGhpcy5fYWRVbml0LCBldnROYW1lLCBoYW5kbGVyKTtcclxufTtcclxuXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUud2FpdEZvckV2ZW50ID0gZnVuY3Rpb24gKGV2dE5hbWUsIGNiLCBjb250ZXh0KSB7XHJcbiAgdmFyIHRpbWVvdXRJZDtcclxuICBzYW5pdHlDaGVjayhldnROYW1lLCBjYik7XHJcbiAgY29udGV4dCA9IGNvbnRleHQgfHwgbnVsbDtcclxuXHJcbiAgdGhpcy5vbihldnROYW1lLCByZXNwb25zZUxpc3RlbmVyKTtcclxuXHJcbiAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICBjYihuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLndhaXRGb3JFdmVudCwgdGltZW91dCB3aGlsZSB3YWl0aW5nIGZvciBldmVudCAnXCIgKyBldnROYW1lICsgXCInXCIpKTtcclxuICAgIHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICBjYiA9IHV0aWxpdGllcy5ub29wO1xyXG4gIH0sIHRoaXMub3B0aW9ucy5yZXNwb25zZVRpbWVvdXQpO1xyXG5cclxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soZXZ0TmFtZSwgY2IpIHtcclxuICAgIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKGV2dE5hbWUpKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIud2FpdEZvckV2ZW50LCBtaXNzaW5nIGV2dCBuYW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIud2FpdEZvckV2ZW50LCBtaXNzaW5nIGNhbGxiYWNrXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzcG9uc2VMaXN0ZW5lcigpIHtcclxuICAgIHZhciBhcmdzID0gdXRpbGl0aWVzLmFycmF5TGlrZU9ialRvQXJyYXkoYXJndW1lbnRzKTtcclxuXHJcbiAgICBpZiAodGltZW91dElkKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgICB0aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFyZ3MudW5zaGlmdChudWxsKTtcclxuICAgIGNiLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIFZQQUlEIE1FVEhPRFNcclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5oYW5kc2hha2VWZXJzaW9uID0gZnVuY3Rpb24gKHZlcnNpb24sIGNiKSB7XHJcbiAgdGhpcy5hZFVuaXRBc3luY0NhbGwoJ2hhbmRzaGFrZVZlcnNpb24nLCB2ZXJzaW9uLCBjYik7XHJcbn07XHJcblxyXG4vKiBqc2hpbnQgbWF4cGFyYW1zOjYgKi9cclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5pbml0QWQgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBhZFVuaXREYXRhLCBjYikge1xyXG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZExvYWRlZCcsIGNiKTtcclxuICB0aGlzLl9hZFVuaXQuaW5pdEFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgYWRVbml0RGF0YSk7XHJcbn07XHJcblxyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnJlc2l6ZUFkID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBjYikge1xyXG4gIC8vIE5PVEU6IEFkU2l6ZUNoYW5nZSBldmVudCBpcyBvbmx5IHN1cHBvcnRlZCBvbiBWUEFJRCAyLjAgc28gZm9yIHRoZSBtb21lbnQgd2UgYXJlIG5vdCBnb2luZyB0byB1c2UgaXRcclxuICAvLyBhbmQgd2lsbCBhc3N1bWUgdGhhdCBldmVyeXRoaW5nIGlzIGZpbmUgYWZ0ZXIgdGhlIGFzeW5jIGNhbGxcclxuICB0aGlzLmFkVW5pdEFzeW5jQ2FsbCgncmVzaXplQWQnLCB3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgY2IpO1xyXG59O1xyXG5cclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5zdGFydEFkID0gZnVuY3Rpb24gKGNiKSB7XHJcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkU3RhcnRlZCcsIGNiKTtcclxuICB0aGlzLl9hZFVuaXQuc3RhcnRBZCgpO1xyXG59O1xyXG5cclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5zdG9wQWQgPSBmdW5jdGlvbiAoY2IpIHtcclxuICB0aGlzLndhaXRGb3JFdmVudCgnQWRTdG9wcGVkJywgY2IpO1xyXG4gIHRoaXMuX2FkVW5pdC5zdG9wQWQoKTtcclxufTtcclxuXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUucGF1c2VBZCA9IGZ1bmN0aW9uIChjYikge1xyXG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFBhdXNlZCcsIGNiKTtcclxuICB0aGlzLl9hZFVuaXQucGF1c2VBZCgpO1xyXG59O1xyXG5cclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5yZXN1bWVBZCA9IGZ1bmN0aW9uIChjYikge1xyXG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFBsYXlpbmcnLCBjYik7XHJcbiAgdGhpcy5fYWRVbml0LnJlc3VtZUFkKCk7XHJcbn07XHJcblxyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLmV4cGFuZEFkID0gZnVuY3Rpb24gKGNiKSB7XHJcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkRXhwYW5kZWRDaGFuZ2UnLCBjYik7XHJcbiAgdGhpcy5fYWRVbml0LmV4cGFuZEFkKCk7XHJcbn07XHJcblxyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLmNvbGxhcHNlQWQgPSBmdW5jdGlvbiAoY2IpIHtcclxuICB0aGlzLndhaXRGb3JFdmVudCgnQWRFeHBhbmRlZENoYW5nZScsIGNiKTtcclxuICB0aGlzLl9hZFVuaXQuY29sbGFwc2VBZCgpO1xyXG59O1xyXG5cclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5za2lwQWQgPSBmdW5jdGlvbiAoY2IpIHtcclxuICB0aGlzLndhaXRGb3JFdmVudCgnQWRTa2lwcGVkJywgY2IpO1xyXG4gIHRoaXMuX2FkVW5pdC5za2lwQWQoKTtcclxufTtcclxuXHJcbi8vVlBBSUQgcHJvcGVydHkgZ2V0dGVyc1xyXG5bXHJcbiAgJ2FkTGluZWFyJyxcclxuICAnYWRXaWR0aCcsXHJcbiAgJ2FkSGVpZ2h0JyxcclxuICAnYWRFeHBhbmRlZCcsXHJcbiAgJ2FkU2tpcHBhYmxlU3RhdGUnLFxyXG4gICdhZFJlbWFpbmluZ1RpbWUnLFxyXG4gICdhZER1cmF0aW9uJyxcclxuICAnYWRWb2x1bWUnLFxyXG4gICdhZENvbXBhbmlvbnMnLFxyXG4gICdhZEljb25zJ1xyXG5dLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XHJcbiAgdmFyIGdldHRlck5hbWUgPSAnZ2V0JyArIHV0aWxpdGllcy5jYXBpdGFsaXplKHByb3BlcnR5KTtcclxuXHJcbiAgVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZVtnZXR0ZXJOYW1lXSA9IGZ1bmN0aW9uIChjYikge1xyXG4gICAgdGhpcy5hZFVuaXRBc3luY0NhbGwoZ2V0dGVyTmFtZSwgY2IpO1xyXG4gIH07XHJcbn0pO1xyXG5cclxuLy9WUEFJRCBwcm9wZXJ0eSBzZXR0ZXJzXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc2V0QWRWb2x1bWUgPSBmdW5jdGlvbih2b2x1bWUsIGNiKXtcclxuICB0aGlzLmFkVW5pdEFzeW5jQ2FsbCgnc2V0QWRWb2x1bWUnLHZvbHVtZSwgY2IpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREFkVW5pdFdyYXBwZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RFcnJvcicpO1xyXG5cclxudmFyIFZQQUlERkxBU0hDbGllbnQgPSByZXF1aXJlKCdWUEFJREZMQVNIQ2xpZW50L2pzL1ZQQUlERkxBU0hDbGllbnQnKTtcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcclxuXHJcbmZ1bmN0aW9uIFZQQUlERmxhc2hUZWNoKG1lZGlhRmlsZSwgc2V0dGluZ3MpIHtcclxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVlBBSURGbGFzaFRlY2gpKSB7XHJcbiAgICByZXR1cm4gbmV3IFZQQUlERmxhc2hUZWNoKG1lZGlhRmlsZSk7XHJcbiAgfVxyXG4gIHNhbml0eUNoZWNrKG1lZGlhRmlsZSk7XHJcbiAgdGhpcy5uYW1lID0gJ3ZwYWlkLWZsYXNoJztcclxuICB0aGlzLm1lZGlhRmlsZSA9IG1lZGlhRmlsZTtcclxuICB0aGlzLmNvbnRhaW5lckVsID0gbnVsbDtcclxuICB0aGlzLnZwYWlkRmxhc2hDbGllbnQgPSBudWxsO1xyXG4gIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuXHJcbiAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKG1lZGlhRmlsZSkge1xyXG4gICAgaWYgKCFtZWRpYUZpbGUgfHwgIXV0aWxpdGllcy5pc1N0cmluZyhtZWRpYUZpbGUuc3JjKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWUEFJREZsYXNoVGVjaCwgaW52YWxpZCBNZWRpYUZpbGUnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblZQQUlERmxhc2hUZWNoLlZQQUlERkxBU0hDbGllbnQgPSBWUEFJREZMQVNIQ2xpZW50O1xyXG5cclxuVlBBSURGbGFzaFRlY2guc3VwcG9ydHMgPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gIHJldHVybiB0eXBlID09PSAnYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnICYmIFZQQUlERmxhc2hUZWNoLlZQQUlERkxBU0hDbGllbnQuaXNTdXBwb3J0ZWQoKTtcclxufTtcclxuXHJcblZQQUlERmxhc2hUZWNoLnByb3RvdHlwZS5sb2FkQWRVbml0ID0gZnVuY3Rpb24gbG9hZEZsYXNoQ3JlYXRpdmUoY29udGFpbmVyRWwsIG9iamVjdEVsLCBjYWxsYmFjaykge1xyXG4gIHZhciB0aGF0ID0gdGhpcztcclxuICB2YXIgZmxhc2hDbGllbnRPcHRzID0gdGhpcy5zZXR0aW5ncyAmJiB0aGlzLnNldHRpbmdzLnZwYWlkRmxhc2hMb2FkZXJQYXRoID8ge2RhdGE6IHRoaXMuc2V0dGluZ3MudnBhaWRGbGFzaExvYWRlclBhdGh9IDogdW5kZWZpbmVkO1xyXG4gIHNhbml0eUNoZWNrKGNvbnRhaW5lckVsLCBjYWxsYmFjayk7XHJcblxyXG4gIHRoaXMuY29udGFpbmVyRWwgPSBjb250YWluZXJFbDtcclxuICB0aGlzLnZwYWlkRmxhc2hDbGllbnQgPSBuZXcgVlBBSURGbGFzaFRlY2guVlBBSURGTEFTSENsaWVudChjb250YWluZXJFbCwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGF0LnZwYWlkRmxhc2hDbGllbnQubG9hZEFkVW5pdCh0aGF0Lm1lZGlhRmlsZS5zcmMsIGNhbGxiYWNrKTtcclxuICB9LCBmbGFzaENsaWVudE9wdHMpO1xyXG5cclxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soY29udGFpbmVyLCBjYikge1xyXG5cclxuICAgIGlmICghZG9tLmlzRG9tRWxlbWVudChjb250YWluZXIpKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoJ29uIFZQQUlERmxhc2hUZWNoLmxvYWRBZFVuaXQsIGludmFsaWQgZG9tIGNvbnRhaW5lciBlbGVtZW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcclxuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVlBBSURGbGFzaFRlY2gubG9hZEFkVW5pdCwgbWlzc2luZyB2YWxpZCBjYWxsYmFjaycpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcblZQQUlERmxhc2hUZWNoLnByb3RvdHlwZS51bmxvYWRBZFVuaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKHRoaXMudnBhaWRGbGFzaENsaWVudCkge1xyXG4gICAgdHJ5e1xyXG4gICAgICB0aGlzLnZwYWlkRmxhc2hDbGllbnQuZGVzdHJveSgpO1xyXG4gICAgfSBjYXRjaChlKXtcclxuICAgICAgaWYoY29uc29sZSAmJiB1dGlsaXRpZXMuaXNGdW5jdGlvbihjb25zb2xlLmxvZykpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdWQVNUIEVSUk9SOiB0cnlpbmcgdG8gdW5sb2FkIHRoZSBWUEFJRCBhZHVuaXQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy52cGFpZEZsYXNoQ2xpZW50ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGlmICh0aGlzLmNvbnRhaW5lckVsKSB7XHJcbiAgICBkb20ucmVtb3ZlKHRoaXMuY29udGFpbmVyRWwpO1xyXG4gICAgdGhpcy5jb250YWluZXJFbCA9IG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREZsYXNoVGVjaDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVEVycm9yJyk7XHJcblxyXG52YXIgVlBBSURIVE1MNUNsaWVudCA9IHJlcXVpcmUoJ1ZQQUlESFRNTDVDbGllbnQvanMvVlBBSURIVE1MNUNsaWVudCcpO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xyXG5cclxuZnVuY3Rpb24gVlBBSURIVE1MNVRlY2gobWVkaWFGaWxlKSB7XHJcblxyXG4gIGlmKCEodGhpcyBpbnN0YW5jZW9mIFZQQUlESFRNTDVUZWNoKSkge1xyXG4gICAgcmV0dXJuIG5ldyBWUEFJREhUTUw1VGVjaChtZWRpYUZpbGUpO1xyXG4gIH1cclxuXHJcbiAgc2FuaXR5Q2hlY2sobWVkaWFGaWxlKTtcclxuXHJcbiAgdGhpcy5uYW1lID0gJ3ZwYWlkLWh0bWw1JztcclxuICB0aGlzLmNvbnRhaW5lckVsID0gbnVsbDtcclxuICB0aGlzLnZpZGVvRWwgPSBudWxsO1xyXG4gIHRoaXMudnBhaWRIVE1MQ2xpZW50ID0gbnVsbDtcclxuXHJcbiAgdGhpcy5tZWRpYUZpbGUgPSBtZWRpYUZpbGU7XHJcblxyXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKG1lZGlhRmlsZSkge1xyXG4gICAgICBpZiAoIW1lZGlhRmlsZSB8fCAhdXRpbGl0aWVzLmlzU3RyaW5nKG1lZGlhRmlsZS5zcmMpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5JTlZBTElEX01FRElBX0ZJTEUpO1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5WUEFJREhUTUw1VGVjaC5WUEFJREhUTUw1Q2xpZW50ID0gVlBBSURIVE1MNUNsaWVudDtcclxuXHJcblZQQUlESFRNTDVUZWNoLnN1cHBvcnRzID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICByZXR1cm4gIXV0aWxpdGllcy5pc09sZElFKCkgJiYgdHlwZSA9PT0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xyXG59O1xyXG5cclxuVlBBSURIVE1MNVRlY2gucHJvdG90eXBlLmxvYWRBZFVuaXQgPSBmdW5jdGlvbiBsb2FkQWRVbml0KGNvbnRhaW5lckVsLCB2aWRlb0VsLCBjYWxsYmFjaykge1xyXG4gIHNhbml0eUNoZWNrKGNvbnRhaW5lckVsLCB2aWRlb0VsLCBjYWxsYmFjayk7XHJcblxyXG4gIHRoaXMuY29udGFpbmVyRWwgPSBjb250YWluZXJFbDtcclxuICB0aGlzLnZpZGVvRWwgPSB2aWRlb0VsO1xyXG4gIHRoaXMudnBhaWRIVE1MQ2xpZW50ID0gbmV3IFZQQUlESFRNTDVUZWNoLlZQQUlESFRNTDVDbGllbnQoY29udGFpbmVyRWwsIHZpZGVvRWwsIHt9KTtcclxuICB0aGlzLnZwYWlkSFRNTENsaWVudC5sb2FkQWRVbml0KHRoaXMubWVkaWFGaWxlLnNyYywgY2FsbGJhY2spO1xyXG5cclxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhjb250YWluZXIsIHZpZGVvLCBjYikge1xyXG4gICAgaWYgKCFkb20uaXNEb21FbGVtZW50KGNvbnRhaW5lcikpIHtcclxuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9DT05UQUlORVJfRUwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZG9tLmlzRG9tRWxlbWVudCh2aWRlbykgfHwgdmlkZW8udGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAndmlkZW8nKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoVlBBSURIVE1MNVRlY2guSU5WQUxJRF9ET01fQ09OVEFJTkVSX0VMKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNiKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFZQQUlESFRNTDVUZWNoLk1JU1NJTkdfQ0FMTEJBQ0spO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcblZQQUlESFRNTDVUZWNoLnByb3RvdHlwZS51bmxvYWRBZFVuaXQgPSBmdW5jdGlvbiB1bmxvYWRBZFVuaXQoKSB7XHJcbiAgaWYgKHRoaXMudnBhaWRIVE1MQ2xpZW50KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLnZwYWlkSFRNTENsaWVudC5kZXN0cm95KCk7XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgaWYgKGNvbnNvbGUgJiYgdXRpbGl0aWVzLmlzRnVuY3Rpb24oY29uc29sZS5sb2cpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1ZBU1QgRVJST1I6IHRyeWluZyB0byB1bmxvYWQgdGhlIFZQQUlEIGFkdW5pdCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy52cGFpZEhUTUxDbGllbnQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgaWYgKHRoaXMuY29udGFpbmVyRWwpIHtcclxuICAgIGRvbS5yZW1vdmUodGhpcy5jb250YWluZXJFbCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lckVsID0gbnVsbDtcclxuICB9XHJcbn07XHJcblxyXG52YXIgUFJFRklYID0gJ29uIFZQQUlESFRNTDVUZWNoJztcclxuVlBBSURIVE1MNVRlY2guSU5WQUxJRF9NRURJQV9GSUxFID0gUFJFRklYICsgJywgaW52YWxpZCBNZWRpYUZpbGUnO1xyXG5WUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9DT05UQUlORVJfRUwgPSBQUkVGSVggKyAnLCBpbnZhbGlkIGNvbnRhaW5lciBIdG1sRWxlbWVudCc7XHJcblZQQUlESFRNTDVUZWNoLklOVkFMSURfRE9NX1ZJREVPX0VMID0gUFJFRklYICsgJywgaW52YWxpZCBIVE1MVmlkZW9FbGVtZW50JztcclxuVlBBSURIVE1MNVRlY2guTUlTU0lOR19DQUxMQkFDSyA9IFBSRUZJWCArICcsIG1pc3NpbmcgdmFsaWQgY2FsbGJhY2snO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREhUTUw1VGVjaDsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNURXJyb3InKTtcclxudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVFJlc3BvbnNlJyk7XHJcbnZhciBWQVNUVHJhY2tlciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVFRyYWNrZXInKTtcclxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi4vdmFzdC92YXN0VXRpbCcpO1xyXG5cclxudmFyIFZQQUlEQWRVbml0V3JhcHBlciA9IHJlcXVpcmUoJy4vVlBBSURBZFVuaXRXcmFwcGVyJyk7XHJcblxyXG52YXIgYXN5bmMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9hc3luYycpO1xyXG52YXIgZG9tID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZG9tJyk7XHJcbnZhciBwbGF5ZXJVdGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3BsYXllclV0aWxzJyk7XHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcblxyXG5mdW5jdGlvbiBWUEFJREludGVncmF0b3IocGxheWVyLCBzZXR0aW5ncykge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWUEFJREludGVncmF0b3IpKSB7XHJcbiAgICByZXR1cm4gbmV3IFZQQUlESW50ZWdyYXRvcihwbGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5WSUVXX01PREUgPSB7XHJcbiAgICBOT1JNQUw6ICdub3JtYWwnLFxyXG4gICAgRlVMTFNDUkVFTjogXCJmdWxsc2NyZWVuXCIsXHJcbiAgICBUSFVNQk5BSUw6IFwidGh1bWJuYWlsXCJcclxuICB9O1xyXG4gIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gIHRoaXMuY29udGFpbmVyRWwgPSBjcmVhdGVWUEFJRENvbnRhaW5lckVsKHBsYXllcik7XHJcbiAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgcmVzcG9uc2VUaW1lb3V0OiA1MDAwLFxyXG4gICAgVlBBSURfVkVSU0lPTjogJzIuMCdcclxuICB9O1xyXG4gIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVWUEFJRENvbnRhaW5lckVsKCkge1xyXG4gICAgdmFyIGNvbnRhaW5lckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkb20uYWRkQ2xhc3MoY29udGFpbmVyRWwsICdWUEFJRC1jb250YWluZXInKTtcclxuICAgIHBsYXllci5lbCgpLmluc2VydEJlZm9yZShjb250YWluZXJFbCwgcGxheWVyLmNvbnRyb2xCYXIuZWwoKSk7XHJcbiAgICByZXR1cm4gY29udGFpbmVyRWw7XHJcblxyXG4gIH1cclxufVxyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5wbGF5QWQgPSBmdW5jdGlvbiBwbGF5VlBhaWRBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XHJcbiAgaWYgKCEodmFzdFJlc3BvbnNlIGluc3RhbmNlb2YgVkFTVFJlc3BvbnNlKSkge1xyXG4gICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoJ29uIFZBU1RJbnRlZ3JhdG9yLnBsYXlBZCwgbWlzc2luZyByZXF1aXJlZCBWQVNUUmVzcG9uc2UnKSk7XHJcbiAgfVxyXG5cclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gIHZhciB0ZWNoID0gdGhpcy5fZmluZFN1cHBvcnRlZFRlY2godmFzdFJlc3BvbnNlLCB0aGlzLnNldHRpbmdzKTtcclxuXHJcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCB1dGlsaXRpZXMubm9vcDtcclxuXHJcbiAgdGhpcy5fYWRVbml0ID0gbnVsbDtcclxuXHJcbiAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCAndmpzLXZwYWlkLWFkJyk7XHJcblxyXG4gIHBsYXllci5vbigndmFzdC5hZHNDYW5jZWwnLCB0cmlnZ2VyVnBhaWRBZEVuZCk7XHJcbiAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgcGxheWVyLm9mZigndmFzdC5hZHNDYW5jZWwnLCB0cmlnZ2VyVnBhaWRBZEVuZCk7XHJcbiAgICByZW1vdmVBZFVuaXQoKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKHRlY2gpIHtcclxuICAgIGFzeW5jLndhdGVyZmFsbChbXHJcbiAgICAgIGZ1bmN0aW9uIChuZXh0KSB7XHJcbiAgICAgICAgbmV4dChudWxsLCB0ZWNoLCB2YXN0UmVzcG9uc2UpO1xyXG4gICAgICB9LFxyXG4gICAgICB0aGlzLl9sb2FkQWRVbml0LmJpbmQodGhpcyksXHJcbiAgICAgIHRoaXMuX3BsYXlBZFVuaXQuYmluZCh0aGlzKSxcclxuICAgICAgdGhpcy5fZmluaXNoUGxheWluZy5iaW5kKHRoaXMpXHJcblxyXG4gICAgXSwgYWRDb21wbGV0ZSk7XHJcblxyXG4gICAgdGhpcy5fYWRVbml0ID0ge1xyXG4gICAgICBfcGF1c2VkOiB0cnVlLFxyXG4gICAgICB0eXBlOiAnVlBBSUQnLFxyXG4gICAgICBwYXVzZUFkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQucGF1c2VBZCcpO1xyXG4gICAgICAgIHBsYXllci5wYXVzZSh0cnVlKTsvL3dlIG1ha2Ugc3VyZSB0aGF0IHRoZSB2aWRlbyBjb250ZW50IGdldHMgc3RvcHBlZC5cclxuICAgICAgfSxcclxuICAgICAgcmVzdW1lQWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLnJlc3VtZUFkJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGlzUGF1c2VkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGF1c2VkO1xyXG4gICAgICB9LFxyXG4gICAgICBnZXRTcmM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0ZWNoLm1lZGlhRmlsZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBlcnJvciA9IG5ldyBWQVNURXJyb3IoJ29uIFZQQUlESW50ZWdyYXRvci5wbGF5QWQsIGNvdWxkIG5vdCBmaW5kIGEgc3VwcG9ydGVkIG1lZGlhRmlsZScsIDQwMyk7XHJcbiAgICBhZENvbXBsZXRlKGVycm9yLCB0aGlzLl9hZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcy5fYWRVbml0O1xyXG5cclxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gYWRDb21wbGV0ZShlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpIHtcclxuICAgIGlmIChlcnJvciAmJiB2YXN0UmVzcG9uc2UpIHtcclxuICAgICAgdGhhdC5fdHJhY2tFcnJvcih2YXN0UmVzcG9uc2UsIGVycm9yLmNvZGUpO1xyXG4gICAgfVxyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLmFkRW5kJyk7XHJcbiAgICBjYWxsYmFjayhlcnJvciwgdmFzdFJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRyaWdnZXJWcGFpZEFkRW5kKCl7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuYWRFbmQnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUFkVW5pdCgpIHtcclxuICAgIGlmICh0ZWNoKSB7XHJcbiAgICAgIHRlY2gudW5sb2FkQWRVbml0KCk7XHJcbiAgICB9XHJcbiAgICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmVsKCksICd2anMtdnBhaWQtYWQnKTtcclxuICB9XHJcbn07XHJcblxyXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9maW5kU3VwcG9ydGVkVGVjaCA9IGZ1bmN0aW9uICh2YXN0UmVzcG9uc2UsIHNldHRpbmdzKSB7XHJcbiAgaWYgKCEodmFzdFJlc3BvbnNlIGluc3RhbmNlb2YgVkFTVFJlc3BvbnNlKSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICB2YXIgdnBhaWRNZWRpYUZpbGVzID0gdmFzdFJlc3BvbnNlLm1lZGlhRmlsZXMuZmlsdGVyKHZhc3RVdGlsLmlzVlBBSUQpO1xyXG4gIHZhciBpLCBsZW4sIG1lZGlhRmlsZSwgVlBBSURUZWNoO1xyXG5cclxuICBmb3IgKGkgPSAwLCBsZW4gPSB2cGFpZE1lZGlhRmlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcclxuICAgIG1lZGlhRmlsZSA9IHZwYWlkTWVkaWFGaWxlc1tpXTtcclxuICAgIFZQQUlEVGVjaCA9IHZhc3RVdGlsLmZpbmRTdXBwb3J0ZWRWUEFJRFRlY2gobWVkaWFGaWxlLnR5cGUpO1xyXG4gICAgaWYgKFZQQUlEVGVjaCkge1xyXG4gICAgICByZXR1cm4gbmV3IFZQQUlEVGVjaChtZWRpYUZpbGUsIHNldHRpbmdzKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9jcmVhdGVWUEFJREFkVW5pdFdyYXBwZXIgPSBmdW5jdGlvbihhZFVuaXQsIHNyYywgcmVzcG9uc2VUaW1lb3V0KSB7XHJcbiAgcmV0dXJuIG5ldyBWUEFJREFkVW5pdFdyYXBwZXIoYWRVbml0LCB7c3JjOiBzcmMsIHJlc3BvbnNlVGltZW91dDogcmVzcG9uc2VUaW1lb3V0fSk7XHJcbn07XHJcblxyXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9sb2FkQWRVbml0ID0gZnVuY3Rpb24gKHRlY2gsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xyXG4gIHZhciB0aGF0ID0gdGhpcztcclxuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcbiAgdmFyIHZqc1RlY2hFbCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xyXG4gIHZhciByZXNwb25zZVRpbWVvdXQgPSB0aGlzLnNldHRpbmdzLnJlc3BvbnNlVGltZW91dCB8fCB0aGlzLm9wdGlvbnMucmVzcG9uc2VUaW1lb3V0O1xyXG4gIHRlY2gubG9hZEFkVW5pdCh0aGlzLmNvbnRhaW5lckVsLCB2anNUZWNoRWwsIGZ1bmN0aW9uIChlcnJvciwgYWRVbml0KSB7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIG5leHQoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICB2YXIgV3JhcHBlZEFkVW5pdCA9IHRoYXQuX2NyZWF0ZVZQQUlEQWRVbml0V3JhcHBlcihhZFVuaXQsIHRlY2gubWVkaWFGaWxlLnNyYywgcmVzcG9uc2VUaW1lb3V0KTtcclxuICAgICAgdmFyIHRlY2hDbGFzcyA9ICd2anMtJyArIHRlY2gubmFtZSArICctYWQnO1xyXG4gICAgICBkb20uYWRkQ2xhc3MocGxheWVyLmVsKCksIHRlY2hDbGFzcyk7XHJcbiAgICAgIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHBsYXllci5lbCgpLHRlY2hDbGFzcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBuZXh0KG51bGwsIFdyYXBwZWRBZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIG5leHQoZSwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fcGxheUFkVW5pdCA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgY2FsbGJhY2spIHtcclxuICBhc3luYy53YXRlcmZhbGwoW1xyXG4gICAgZnVuY3Rpb24gKG5leHQpIHtcclxuICAgICAgbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcbiAgICB9LFxyXG4gICAgdGhpcy5faGFuZHNoYWtlLmJpbmQodGhpcyksXHJcbiAgICB0aGlzLl9pbml0QWQuYmluZCh0aGlzKSxcclxuICAgIHRoaXMuX3NldHVwRXZlbnRzLmJpbmQodGhpcyksXHJcbiAgICB0aGlzLl9hZGRTa2lwQnV0dG9uLmJpbmQodGhpcyksXHJcbiAgICB0aGlzLl9saW5rUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKSxcclxuICAgIHRoaXMuX3N0YXJ0QWQuYmluZCh0aGlzKVxyXG4gIF0sIGNhbGxiYWNrKTtcclxufTtcclxuXHJcblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2hhbmRzaGFrZSA9IGZ1bmN0aW9uIGhhbmRzaGFrZShhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xyXG4gIGFkVW5pdC5oYW5kc2hha2VWZXJzaW9uKHRoaXMub3B0aW9ucy5WUEFJRF9WRVJTSU9OLCBmdW5jdGlvbiAoZXJyb3IsIHZlcnNpb24pIHtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2ZXJzaW9uICYmIGlzU3VwcG9ydGVkVmVyc2lvbih2ZXJzaW9uKSkge1xyXG4gICAgICByZXR1cm4gbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5leHQobmV3IFZBU1RFcnJvcignb24gVlBBSURJbnRlZ3JhdG9yLl9oYW5kc2hha2UsIHVuc3VwcG9ydGVkIHZlcnNpb24gXCInICsgdmVyc2lvbiArICdcIicpLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGlzU3VwcG9ydGVkVmVyc2lvbih2ZXJzaW9uKSB7XHJcbiAgICB2YXIgbWFqb3JOdW0gPSBtYWpvcih2ZXJzaW9uKTtcclxuICAgIHJldHVybiBtYWpvck51bSA+PSAxICYmIG1ham9yTnVtIDw9IDI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtYWpvcih2ZXJzaW9uKSB7XHJcbiAgICB2YXIgcGFydHMgPSB2ZXJzaW9uLnNwbGl0KCcuJyk7XHJcbiAgICByZXR1cm4gcGFyc2VJbnQocGFydHNbMF0sIDEwKTtcclxuICB9XHJcbn07XHJcblxyXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9pbml0QWQgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcclxuICB2YXIgdGVjaCA9IHRoaXMucGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XHJcbiAgdmFyIGRpbWVuc2lvbiA9IGRvbS5nZXREaW1lbnNpb24odGVjaCk7XHJcbiAgYWRVbml0LmluaXRBZChkaW1lbnNpb24ud2lkdGgsIGRpbWVuc2lvbi5oZWlnaHQsIHRoaXMuVklFV19NT0RFLk5PUk1BTCwgLTEsIHtBZFBhcmFtZXRlcnM6IHZhc3RSZXNwb25zZS5hZFBhcmFtZXRlcnMgfHwgJyd9LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIG5leHQoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcclxuICB9KTtcclxufTtcclxuXHJcblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2NyZWF0ZVZBU1RUcmFja2VyID0gZnVuY3Rpb24oYWRVbml0U3JjLCB2YXN0UmVzcG9uc2UpIHtcclxuICByZXR1cm4gbmV3IFZBU1RUcmFja2VyKGFkVW5pdFNyYywgdmFzdFJlc3BvbnNlKTtcclxufTtcclxuXHJcblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX3NldHVwRXZlbnRzID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XHJcbiAgdmFyIGFkVW5pdFNyYyA9IGFkVW5pdC5vcHRpb25zLnNyYztcclxuICB2YXIgdHJhY2tlciA9IHRoaXMuX2NyZWF0ZVZBU1RUcmFja2VyKGFkVW5pdFNyYywgdmFzdFJlc3BvbnNlKTtcclxuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcbiAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICBhZFVuaXQub24oJ0FkU2tpcHBlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFNraXBwZWQnKTtcclxuICAgIHRyYWNrZXIudHJhY2tTa2lwKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRJbXByZXNzaW9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkSW1wcmVzc2lvbicpO1xyXG4gICAgdHJhY2tlci50cmFja0ltcHJlc3Npb25zKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRTdGFydGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU3RhcnRlZCcpO1xyXG4gICAgdHJhY2tlci50cmFja0NyZWF0aXZlVmlldygpO1xyXG4gICAgbm90aWZ5UGxheVRvUGxheWVyKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRWaWRlb1N0YXJ0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9TdGFydCcpO1xyXG4gICAgdHJhY2tlci50cmFja1N0YXJ0KCk7XHJcbiAgICBub3RpZnlQbGF5VG9QbGF5ZXIoKTtcclxuICB9KTtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZFBsYXlpbmcnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRQbGF5aW5nJyk7XHJcbiAgICB0cmFja2VyLnRyYWNrUmVzdW1lKCk7XHJcbiAgICBub3RpZnlQbGF5VG9QbGF5ZXIoKTtcclxuICB9KTtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZFBhdXNlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFBhdXNlZCcpO1xyXG4gICAgdHJhY2tlci50cmFja1BhdXNlKCk7XHJcbiAgICBub3RpZnlQYXVzZVRvUGxheWVyKCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIG5vdGlmeVBsYXlUb1BsYXllcigpe1xyXG4gICAgaWYodGhhdC5fYWRVbml0ICYmIHRoYXQuX2FkVW5pdC5pc1BhdXNlZCgpKXtcclxuICAgICAgdGhhdC5fYWRVbml0Ll9wYXVzZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHBsYXllci50cmlnZ2VyKCdwbGF5Jyk7XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbm90aWZ5UGF1c2VUb1BsYXllcigpIHtcclxuICAgIGlmKHRoYXQuX2FkVW5pdCl7XHJcbiAgICAgIHRoYXQuX2FkVW5pdC5fcGF1c2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHBsYXllci50cmlnZ2VyKCdwYXVzZScpO1xyXG4gIH1cclxuXHJcbiAgYWRVbml0Lm9uKCdBZFZpZGVvRmlyc3RRdWFydGlsZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvRmlyc3RRdWFydGlsZScpO1xyXG4gICAgdHJhY2tlci50cmFja0ZpcnN0UXVhcnRpbGUoKTtcclxuICB9KTtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZFZpZGVvTWlkcG9pbnQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb01pZHBvaW50Jyk7XHJcbiAgICB0cmFja2VyLnRyYWNrTWlkcG9pbnQoKTtcclxuICB9KTtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZFZpZGVvVGhpcmRRdWFydGlsZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvVGhpcmRRdWFydGlsZScpO1xyXG4gICAgdHJhY2tlci50cmFja1RoaXJkUXVhcnRpbGUoKTtcclxuICB9KTtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZFZpZGVvQ29tcGxldGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb0NvbXBsZXRlJyk7XHJcbiAgICB0cmFja2VyLnRyYWNrQ29tcGxldGUoKTtcclxuICB9KTtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZENsaWNrVGhydScsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRDbGlja1RocnUnKTtcclxuICAgIHZhciB1cmwgPSBkYXRhLnVybDtcclxuICAgIHZhciBwbGF5ZXJIYW5kbGVzID0gZGF0YS5wbGF5ZXJIYW5kbGVzO1xyXG4gICAgdmFyIGNsaWNrVGhydVVybCA9IHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHVybCkgPyB1cmwgOiBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTCh2YXN0UmVzcG9uc2UuY2xpY2tUaHJvdWdoKTtcclxuXHJcbiAgICB0cmFja2VyLnRyYWNrQ2xpY2soKTtcclxuICAgIGlmIChwbGF5ZXJIYW5kbGVzICYmIGNsaWNrVGhydVVybCkge1xyXG4gICAgICB3aW5kb3cub3BlbihjbGlja1RocnVVcmwsICdfYmxhbmsnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChjbGlja1Rocm91Z2hNYWNybykge1xyXG4gICAgICB2YXIgdmFyaWFibGVzID0ge1xyXG4gICAgICAgIEFTU0VUVVJJOiBhZFVuaXQub3B0aW9ucy5zcmMsXHJcbiAgICAgICAgQ09OVEVOVFBMQVlIRUFEOiAwIC8vSW4gVlBBSUQgdGhlcmUgaXMgbm8gbWV0aG9kIHRvIGtub3cgdGhlIGN1cnJlbnQgdGltZSBmcm9tIHRoZSBhZFVuaXRcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybiBjbGlja1Rocm91Z2hNYWNybyA/IHZhc3RVdGlsLnBhcnNlVVJMTWFjcm8oY2xpY2tUaHJvdWdoTWFjcm8sIHZhcmlhYmxlcykgOiBudWxsO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkVXNlckFjY2VwdEludml0YXRpb24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRVc2VyQWNjZXB0SW52aXRhdGlvbicpO1xyXG4gICAgdHJhY2tlci50cmFja0FjY2VwdEludml0YXRpb24oKTtcclxuICAgIHRyYWNrZXIudHJhY2tBY2NlcHRJbnZpdGF0aW9uTGluZWFyKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRVc2VyQ2xvc2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRVc2VyQ2xvc2UnKTtcclxuICAgIHRyYWNrZXIudHJhY2tDbG9zZSgpO1xyXG4gICAgdHJhY2tlci50cmFja0Nsb3NlTGluZWFyKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRVc2VyTWluaW1pemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRVc2VyTWluaW1pemUnKTtcclxuICAgIHRyYWNrZXIudHJhY2tDb2xsYXBzZSgpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkRXJyb3InLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRFcnJvcicpO1xyXG4gICAgLy9OT1RFOiB3ZSB0cmFjayBlcnJvcnMgY29kZSA5MDEsIGFzIG5vdGVkIGluIFZBU1QgMy4wXHJcbiAgICB0cmFja2VyLnRyYWNrRXJyb3JXaXRoQ29kZSg5MDEpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkVm9sdW1lQ2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVm9sdW1lQ2hhbmdlJyk7XHJcbiAgICB2YXIgbGFzdFZvbHVtZSA9IHBsYXllci52b2x1bWUoKTtcclxuICAgIGFkVW5pdC5nZXRBZFZvbHVtZShmdW5jdGlvbiAoZXJyb3IsIGN1cnJlbnRWb2x1bWUpIHtcclxuICAgICAgaWYgKGN1cnJlbnRWb2x1bWUgPT09IDAgJiYgbGFzdFZvbHVtZSA+IDApIHtcclxuICAgICAgICB0cmFja2VyLnRyYWNrTXV0ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY3VycmVudFZvbHVtZSA+IDAgJiYgbGFzdFZvbHVtZSA9PT0gMCkge1xyXG4gICAgICAgIHRyYWNrZXIudHJhY2tVbm11dGUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcGxheWVyLnZvbHVtZShjdXJyZW50Vm9sdW1lKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgdXBkYXRlVmlld1NpemUgPSByZXNpemVBZC5iaW5kKHRoaXMsIHBsYXllciwgYWRVbml0LCB0aGlzLlZJRVdfTU9ERSk7XHJcbiAgdmFyIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkID0gdXRpbGl0aWVzLnRocm90dGxlKHVwZGF0ZVZpZXdTaXplLCAxMDApO1xyXG4gIHZhciBhdXRvUmVzaXplID0gdGhpcy5zZXR0aW5ncy5hdXRvUmVzaXplO1xyXG5cclxuICBpZiAoYXV0b1Jlc2l6ZSkge1xyXG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xyXG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnb3JpZW50YXRpb25jaGFuZ2UnLCB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCk7XHJcbiAgfVxyXG5cclxuICBwbGF5ZXIub24oJ3Zhc3QucmVzaXplJywgdXBkYXRlVmlld1NpemUpO1xyXG4gIHBsYXllci5vbigndnBhaWQucGF1c2VBZCcsIHBhdXNlQWRVbml0KTtcclxuICBwbGF5ZXIub24oJ3ZwYWlkLnJlc3VtZUFkJywgcmVzdW1lQWRVbml0KTtcclxuXHJcbiAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIub2ZmKCd2YXN0LnJlc2l6ZScsIHVwZGF0ZVZpZXdTaXplKTtcclxuICAgIHBsYXllci5vZmYoJ3ZwYWlkLnBhdXNlQWQnLCBwYXVzZUFkVW5pdCk7XHJcbiAgICBwbGF5ZXIub2ZmKCd2cGFpZC5yZXN1bWVBZCcsIHJlc3VtZUFkVW5pdCk7XHJcblxyXG4gICAgaWYgKGF1dG9SZXNpemUpIHtcclxuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xyXG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdvcmllbnRhdGlvbmNoYW5nZScsIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcblxyXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBwYXVzZUFkVW5pdCgpIHtcclxuICAgIGFkVW5pdC5wYXVzZUFkKHV0aWxpdGllcy5ub29wKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc3VtZUFkVW5pdCgpIHtcclxuICAgIGFkVW5pdC5yZXN1bWVBZCh1dGlsaXRpZXMubm9vcCk7XHJcbiAgfVxyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fYWRkU2tpcEJ1dHRvbiA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xyXG4gIHZhciBza2lwQnV0dG9uO1xyXG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZFNraXBwYWJsZVN0YXRlQ2hhbmdlJywgdXBkYXRlU2tpcEJ1dHRvblN0YXRlKTtcclxuXHJcbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVTa2lwQnV0dG9uKTtcclxuXHJcbiAgbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xyXG4gIGZ1bmN0aW9uIHVwZGF0ZVNraXBCdXR0b25TdGF0ZSgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFNraXBwYWJsZVN0YXRlQ2hhbmdlJyk7XHJcbiAgICBhZFVuaXQuZ2V0QWRTa2lwcGFibGVTdGF0ZShmdW5jdGlvbiAoZXJyb3IsIGlzU2tpcHBhYmxlKSB7XHJcbiAgICAgIGlmIChpc1NraXBwYWJsZSkge1xyXG4gICAgICAgIGlmICghc2tpcEJ1dHRvbikge1xyXG4gICAgICAgICAgYWRkU2tpcEJ1dHRvbihwbGF5ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZW1vdmVTa2lwQnV0dG9uKHBsYXllcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkU2tpcEJ1dHRvbihwbGF5ZXIpIHtcclxuICAgIHNraXBCdXR0b24gPSBjcmVhdGVTa2lwQnV0dG9uKHBsYXllcik7XHJcbiAgICBwbGF5ZXIuZWwoKS5hcHBlbmRDaGlsZChza2lwQnV0dG9uKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZVNraXBCdXR0b24oKSB7XHJcbiAgICBkb20ucmVtb3ZlKHNraXBCdXR0b24pO1xyXG4gICAgc2tpcEJ1dHRvbiA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVTa2lwQnV0dG9uKCkge1xyXG4gICAgdmFyIHNraXBCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCBcInZhc3Qtc2tpcC1idXR0b25cIik7XHJcbiAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgXCJlbmFibGVkXCIpO1xyXG4gICAgc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNraXAgYWRcIjtcclxuXHJcbiAgICBza2lwQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBhZFVuaXQuc2tpcEFkKHV0aWxpdGllcy5ub29wKTsvL1dlIHNraXAgdGhlIGFkVW5pdFxyXG5cclxuICAgICAgLy9XZSBwcmV2ZW50IGV2ZW50IHByb3BhZ2F0aW9uIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggdGhlIGNsaWNrVGhyb3VnaCBhbmQgc28gb25cclxuICAgICAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gc2tpcEJ1dHRvbjtcclxuICB9XHJcbn07XHJcblxyXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9saW5rUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgbGlua1ZvbHVtZUNvbnRyb2wodGhpcy5wbGF5ZXIsIGFkVW5pdCk7XHJcbiAgbGlua0Z1bGxTY3JlZW5Db250cm9sKHRoaXMucGxheWVyLCBhZFVuaXQsIHRoaXMuVklFV19NT0RFKTtcclxuXHJcbiAgbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBsaW5rVm9sdW1lQ29udHJvbChwbGF5ZXIsIGFkVW5pdCkge1xyXG4gICAgcGxheWVyLm9uKCd2b2x1bWVjaGFuZ2UnLCB1cGRhdGVBZFVuaXRWb2x1bWUpO1xyXG4gICAgYWRVbml0Lm9uKCdBZFZvbHVtZUNoYW5nZScsIHVwZGF0ZVBsYXllclZvbHVtZSk7XHJcblxyXG4gICAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHBsYXllci5vZmYoJ3ZvbHVtZWNoYW5nZScsIHVwZGF0ZUFkVW5pdFZvbHVtZSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gICAgZnVuY3Rpb24gdXBkYXRlQWRVbml0Vm9sdW1lKCkge1xyXG4gICAgICB2YXIgdm9sID0gcGxheWVyLm11dGVkKCkgPyAwIDogcGxheWVyLnZvbHVtZSgpO1xyXG4gICAgICBhZFVuaXQuc2V0QWRWb2x1bWUodm9sLCBsb2dFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUGxheWVyVm9sdW1lKCkge1xyXG4gICAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWb2x1bWVDaGFuZ2UnKTtcclxuICAgICAgYWRVbml0LmdldEFkVm9sdW1lKGZ1bmN0aW9uIChlcnJvciwgdm9sKSB7XHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICBsb2dFcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBsYXllci52b2x1bWUodm9sKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbGlua0Z1bGxTY3JlZW5Db250cm9sKHBsYXllciwgYWRVbml0LCBWSUVXX01PREUpIHtcclxuICAgIHZhciB1cGRhdGVWaWV3U2l6ZSA9IHJlc2l6ZUFkLmJpbmQodGhhdCwgcGxheWVyLCBhZFVuaXQsIFZJRVdfTU9ERSk7XHJcblxyXG4gICAgcGxheWVyLm9uKCdmdWxsc2NyZWVuY2hhbmdlJywgdXBkYXRlVmlld1NpemUpO1xyXG5cclxuICAgIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBwbGF5ZXIub2ZmKCdmdWxsc2NyZWVuY2hhbmdlJywgdXBkYXRlVmlld1NpemUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fc3RhcnRBZCA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xyXG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuXHJcbiAgYWRVbml0LnN0YXJ0QWQoZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICBpZiAoIWVycm9yKSB7XHJcbiAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkU3RhcnQnKTtcclxuICAgIH1cclxuICAgIG5leHQoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcclxuICB9KTtcclxufTtcclxuXHJcblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2ZpbmlzaFBsYXlpbmcgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcclxuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcbiAgYWRVbml0Lm9uKCdBZFN0b3BwZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFN0b3BwZWQnKTtcclxuICAgZmluaXNoUGxheWluZ0FkKG51bGwpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkRXJyb3InLCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIHZhciBlcnJNc2cgPSBlcnJvcj8gZXJyb3IubWVzc2FnZSA6ICdvbiBWUEFJREludGVncmF0b3IsIGVycm9yIHdoaWxlIHdhaXRpbmcgZm9yIHRoZSBhZFVuaXQgdG8gZmluaXNoIHBsYXlpbmcnO1xyXG4gICAgZmluaXNoUGxheWluZ0FkKG5ldyBWQVNURXJyb3IoZXJyTXNnKSk7XHJcbiAgfSk7XHJcblxyXG4gIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBmaW5pc2hQbGF5aW5nQWQoZXJyb3IpIHtcclxuICAgIG5leHQoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcclxuICB9XHJcbn07XHJcblxyXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl90cmFja0Vycm9yID0gZnVuY3Rpb24gdHJhY2tFcnJvcihyZXNwb25zZSwgZXJyb3JDb2RlKSB7XHJcbiAgdmFzdFV0aWwudHJhY2socmVzcG9uc2UuZXJyb3JVUkxNYWNyb3MsIHtFUlJPUkNPREU6IGVycm9yQ29kZSB8fCA5MDF9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlc2l6ZUFkKHBsYXllciwgYWRVbml0LCBWSUVXX01PREUpIHtcclxuICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xyXG4gIHZhciBkaW1lbnNpb24gPSBkb20uZ2V0RGltZW5zaW9uKHRlY2gpO1xyXG4gIHZhciBNT0RFID0gcGxheWVyLmlzRnVsbHNjcmVlbigpID8gVklFV19NT0RFLkZVTExTQ1JFRU4gOiBWSUVXX01PREUuTk9STUFMO1xyXG4gIGFkVW5pdC5yZXNpemVBZChkaW1lbnNpb24ud2lkdGgsIGRpbWVuc2lvbi5oZWlnaHQsIE1PREUsIGxvZ0Vycm9yKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9nRXJyb3IoZXJyb3IpIHtcclxuICBpZiAoZXJyb3IgJiYgY29uc29sZSAmJiBjb25zb2xlLmxvZykge1xyXG4gICAgY29uc29sZS5sb2coJ0VSUk9SOiAnICsgZXJyb3IubWVzc2FnZSwgZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREludGVncmF0b3I7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xyXG5cclxudmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZWxlbWVudC5jbGFzc05hbWUgPSAndmpzLWFkcy1sYWJlbCB2anMtY29udHJvbCB2anMtbGFiZWwtaGlkZGVuJztcclxuZWxlbWVudC5pbm5lckhUTUwgPSAnQWR2ZXJ0aXNlbWVudCc7XHJcblxyXG52YXIgQWRzTGFiZWxGYWN0b3J5ID0gZnVuY3Rpb24oYmFzZUNvbXBvbmVudCkge1xyXG4gIHJldHVybiB7XHJcbiAgICAvKiogQGNvbnN0cnVjdG9yICovXHJcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHBsYXllciwgb3B0aW9ucykge1xyXG4gICAgICBvcHRpb25zLmVsID0gZWxlbWVudDtcclxuICAgICAgYmFzZUNvbXBvbmVudC5jYWxsKHRoaXMsIHBsYXllciwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAvLyBXZSBhc3luY2hyb25vdXNseSByZXBvc2l0aW9uIHRoZSBhZHMgbGFiZWwgZWxlbWVudFxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3VycmVudFRpbWVDb21wID0gcGxheWVyLmNvbnRyb2xCYXIgJiYoIHBsYXllci5jb250cm9sQmFyLmdldENoaWxkKFwidGltZXJDb250cm9sc1wiKSB8fCBwbGF5ZXIuY29udHJvbEJhci5nZXRDaGlsZChcImN1cnJlbnRUaW1lRGlzcGxheVwiKSApO1xyXG4gICAgICAgIGlmKGN1cnJlbnRUaW1lQ29tcCkge1xyXG4gICAgICAgICAgcGxheWVyLmNvbnRyb2xCYXIuZWwoKS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgY3VycmVudFRpbWVDb21wLmVsKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb20ucmVtb3ZlQ2xhc3MoZWxlbWVudCwgJ3Zqcy1sYWJlbC1oaWRkZW4nKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGVsOiBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xyXG4gICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBZHNMYWJlbEZhY3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGJhc2VWaWRlb0pzQ29tcG9uZW50ID0gdmlkZW9qcy5Db21wb25lbnQ7XHJcblxyXG52YXIgQWRzTGFiZWwgPSByZXF1aXJlKCcuL2Fkcy1sYWJlbCcpKGJhc2VWaWRlb0pzQ29tcG9uZW50KTtcclxuXHJcbnZpZGVvanMuQWRzTGFiZWwgPSB2aWRlb2pzLkNvbXBvbmVudC5leHRlbmQoQWRzTGFiZWwpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogVGhlIGNvbXBvbmVudCB0aGF0IHNob3dzIGEgYmxhY2sgc2NyZWVuIHVudGlsIHRoZSBhZHMgcGx1Z2luIGhhcyBkZWNpZGVkIGlmIGl0IGNhbiBvciBpdCBjYW4gbm90IHBsYXkgdGhlIGFkLlxyXG4gKlxyXG4gKiBOb3RlOiBJbiBjYXNlIHlvdSB3b25kZXIgd2h5IGluc3RlYWQgb2YgdGhpcyBibGFjayBwb3N0ZXIgd2UgZG9uJ3QganVzdCBzaG93IHRoZSBzcGlubmVyIGxvYWRlci5cclxuICogICAgICAgSU9TIGRldmljZXMgZG8gbm90IHdvcmsgd2VsbCB3aXRoIGFuaW1hdGlvbnMgYW5kIHRoZSBicm93c2VyIGNocmFzaGVzIGZyb20gdGltZSB0byB0aW1lIFRoYXQgaXMgd2h5IHdlIGNob3NlIHRvXHJcbiAqICAgICAgIGhhdmUgYSBzZWNvbmRhcnkgYmxhY2sgcG9zdGVyLlxyXG4gKlxyXG4gKiAgICAgICBJdCBhbHNvIG1ha2VzIGl0IG11Y2ggbW9yZSBlYXNpZXIgZm9yIHRoZSB1c2VycyBvZiB0aGUgcGx1Z2luIHNpbmNlIGl0IGRvZXMgbm90IGNoYW5nZSB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgb2YgdGhlXHJcbiAqICAgICAgIHNwaW5uZXIgYW5kIHRoZSBwbGF5ZXIgd29ya3MgdGhlIHNhbWUgd2F5IHdpdGggYW5kIHdpdGhvdXQgdGhlIHBsdWdpbi5cclxuICpcclxuICogQHBhcmFtIHt2anMuUGxheWVyfE9iamVjdH0gcGxheWVyXHJcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbnZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG52YXIgQmxhY2tQb3N0ZXJGYWN0b3J5ID0gZnVuY3Rpb24oYmFzZUNvbXBvbmVudCkge1xyXG4gIHJldHVybiB7XHJcbiAgICAvKiogQGNvbnN0cnVjdG9yICovXHJcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHBsYXllciwgb3B0aW9ucykge1xyXG4gICAgICBvcHRpb25zLmVsID0gZWxlbWVudDtcclxuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAndmpzLWJsYWNrLXBvc3Rlcic7XHJcbiAgICAgIGJhc2VDb21wb25lbnQuY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgdmFyIHBvc3RlckltZyA9IHBsYXllci5nZXRDaGlsZCgncG9zdGVySW1hZ2UnKTtcclxuXHJcbiAgICAgIC8vV2UgbmVlZCB0byBkbyBpdCBhc3luY2hyb25vdXNseSB0byBiZSBzdXJlIHRoYXQgdGhlIGJsYWNrIHBvc3RlciBlbCBpcyBvbiB0aGUgZG9tLlxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKHBvc3RlckltZyAmJiBwbGF5ZXIgJiYgcGxheWVyLmVsKCkpIHtcclxuICAgICAgICAgIHBsYXllci5lbCgpLmluc2VydEJlZm9yZShlbGVtZW50LCBwb3N0ZXJJbWcuZWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAwKTtcclxuICAgIH0sXHJcbiAgICBlbDogZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmxhY2tQb3N0ZXJGYWN0b3J5OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBiYXNlVmlkZW9Kc0NvbXBvbmVudCA9IHZpZGVvanMuQ29tcG9uZW50O1xyXG5cclxudmFyIEJsYWNrUG9zdGVyID0gcmVxdWlyZSgnLi9ibGFjay1wb3N0ZXInKShiYXNlVmlkZW9Kc0NvbXBvbmVudCk7XHJcblxyXG52aWRlb2pzLkJsYWNrUG9zdGVyID0gdmlkZW9qcy5Db21wb25lbnQuZXh0ZW5kKEJsYWNrUG9zdGVyKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFZBU1RDbGllbnQgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC9WQVNUQ2xpZW50Jyk7XHJcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC9WQVNURXJyb3InKTtcclxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi4vYWRzL3Zhc3QvdmFzdFV0aWwnKTtcclxuXHJcbnZhciBWQVNUSW50ZWdyYXRvciA9IHJlcXVpcmUoJy4uL2Fkcy92YXN0L1ZBU1RJbnRlZ3JhdG9yJyk7XHJcbnZhciBWUEFJREludGVncmF0b3IgPSByZXF1aXJlKCcuLi9hZHMvdnBhaWQvVlBBSURJbnRlZ3JhdG9yJyk7XHJcblxyXG52YXIgYXN5bmMgPSByZXF1aXJlKCcuLi91dGlscy9hc3luYycpO1xyXG52YXIgZG9tID0gcmVxdWlyZSgnLi4vdXRpbHMvZG9tJyk7XHJcbnZhciBwbGF5ZXJVdGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3BsYXllclV0aWxzJyk7XHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFZBU1RQbHVnaW4ob3B0aW9ucykge1xyXG4gIHZhciBzbmFwc2hvdDtcclxuICB2YXIgcGxheWVyID0gdGhpcztcclxuICB2YXIgdmFzdCA9IG5ldyBWQVNUQ2xpZW50KCk7XHJcbiAgdmFyIGFkc0NhbmNlbGVkID0gZmFsc2U7XHJcbiAgdmFyIGRlZmF1bHRPcHRzID0ge1xyXG4gICAgLy8gbWF4aW11bSBhbW91bnQgb2YgdGltZSBpbiBtcyB0byB3YWl0IHRvIHJlY2VpdmUgYGFkc3JlYWR5YCBmcm9tIHRoZSBhZFxyXG4gICAgLy8gaW1wbGVtZW50YXRpb24gYWZ0ZXIgcGxheSBoYXMgYmVlbiByZXF1ZXN0ZWQuIEFkIGltcGxlbWVudGF0aW9ucyBhcmVcclxuICAgIC8vIGV4cGVjdGVkIHRvIGxvYWQgYW55IGR5bmFtaWMgbGlicmFyaWVzIGFuZCBtYWtlIGFueSByZXF1ZXN0cyB0byBkZXRlcm1pbmVcclxuICAgIC8vIGFkIHBvbGljaWVzIGZvciBhIHZpZGVvIGR1cmluZyB0aGlzIHRpbWUuXHJcbiAgICB0aW1lb3V0OiA1MDAsXHJcblxyXG4gICAgLy9UT0RPOmZpbmlzaCB0aGlzIElPUyBGSVhcclxuICAgIC8vV2hlbmV2ZXIgeW91IHBsYXkgYW4gYWRkIG9uIElPUywgdGhlIG5hdGl2ZSBwbGF5ZXIga2lja3MgaW4gYW5kIHdlIGxvb3NlIGNvbnRyb2wgb2YgaXQuIE9uIHZlcnkgaGVhdnkgcGFnZXMgdGhlICdwbGF5JyBldmVudFxyXG4gICAgLy8gTWF5IG9jY3VyIGFmdGVyIHRoZSB2aWRlbyBjb250ZW50IGhhcyBhbHJlYWR5IHN0YXJ0ZWQuIFRoaXMgaXMgd3JvbmcgaWYgeW91IHdhbnQgdG8gcGxheSBhIHByZXJvbGwgYWQgdGhhdCBuZWVkcyB0byBoYXBwZW4gYmVmb3JlIHRoZSB1c2VyXHJcbiAgICAvLyBzdGFydHMgd2F0Y2hpbmcgdGhlIGNvbnRlbnQuIFRvIHByZXZlbnQgdGhpcyB1c2VjXHJcbiAgICBpb3NQcmVyb2xsQ2FuY2VsVGltZW91dDogMjAwMCxcclxuXHJcbiAgICAvLyBtYXhpbXVuIGFtb3VudCBvZiB0aW1lIGZvciB0aGUgYWQgdG8gYWN0dWFsbHkgc3RhcnQgcGxheWluZy4gSWYgdGhpcyB0aW1lb3V0IGdldHNcclxuICAgIC8vIHRyaWdnZXJlZCB0aGUgYWRzIHdpbGwgYmUgY2FuY2VsbGVkXHJcbiAgICBhZENhbmNlbFRpbWVvdXQ6IDMwMDAsXHJcblxyXG4gICAgLy8gQm9vbGVhbiBmbGFnIHRoYXQgY29uZmlndXJlcyB0aGUgcGxheWVyIHRvIHBsYXkgYSBuZXcgYWQgYmVmb3JlIHRoZSB1c2VyIHNlZXMgdGhlIHZpZGVvIGFnYWluXHJcbiAgICAvLyB0aGUgY3VycmVudCB2aWRlb1xyXG4gICAgcGxheUFkQWx3YXlzOiBmYWxzZSxcclxuXHJcbiAgICAvLyBGbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBhZHMgYnkgZGVmYXVsdC5cclxuICAgIGFkc0VuYWJsZWQ6IHRydWUsXHJcblxyXG4gICAgLy8gQm9vbGVhbiBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSByZXNpemUgd2l0aCB3aW5kb3cucmVzaXplIG9yIG9yaWVudGF0aW9uY2hhbmdlXHJcbiAgICBhdXRvUmVzaXplOiB0cnVlLFxyXG5cclxuICAgIC8vIFBhdGggdG8gdGhlIFZQQUlEIGZsYXNoIGFkJ3MgbG9hZGVyXHJcbiAgICB2cGFpZEZsYXNoTG9hZGVyUGF0aDogJy9WUEFJREZsYXNoLnN3ZidcclxuICB9O1xyXG5cclxuICB2YXIgc2V0dGluZ3MgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0cywgb3B0aW9ucyB8fCB7fSk7XHJcblxyXG4gIGlmKHV0aWxpdGllcy5pc1VuZGVmaW5lZChzZXR0aW5ncy5hZFRhZ1VybCkgJiYgdXRpbGl0aWVzLmlzRGVmaW5lZChzZXR0aW5ncy51cmwpKXtcclxuICAgIHNldHRpbmdzLmFkVGFnVXJsID0gc2V0dGluZ3MudXJsO1xyXG4gIH1cclxuXHJcbiAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhzZXR0aW5ncy5hZFRhZ1VybCkpIHtcclxuICAgIHNldHRpbmdzLmFkVGFnVXJsID0gdXRpbGl0aWVzLmVjaG9GbihzZXR0aW5ncy5hZFRhZ1VybCk7XHJcbiAgfVxyXG5cclxuICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChzZXR0aW5ncy5hZFRhZ1hNTCkgJiYgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKHNldHRpbmdzLmFkVGFnWE1MKSkge1xyXG4gICAgcmV0dXJuIHRyYWNrQWRFcnJvcihuZXcgVkFTVEVycm9yKCdvbiBWaWRlb0pTIFZBU1QgcGx1Z2luLCB0aGUgcGFzc2VkIGFkVGFnWE1MIG9wdGlvbiBkb2VzIG5vdCBjb250YWluIGEgZnVuY3Rpb24nKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoIXV0aWxpdGllcy5pc0RlZmluZWQoc2V0dGluZ3MuYWRUYWdVcmwpICYmICF1dGlsaXRpZXMuaXNGdW5jdGlvbihzZXR0aW5ncy5hZFRhZ1hNTCkpIHtcclxuICAgIHJldHVybiB0cmFja0FkRXJyb3IobmV3IFZBU1RFcnJvcignb24gVmlkZW9KUyBWQVNUIHBsdWdpbiwgbWlzc2luZyBhZFRhZ1VybCBvbiBvcHRpb25zIG9iamVjdCcpKTtcclxuICB9XHJcblxyXG4gIHZhc3RVdGlsLnJ1bkZsYXNoU3VwcG9ydENoZWNrKHNldHRpbmdzLnZwYWlkRmxhc2hMb2FkZXJQYXRoKTsvLyBOZWNlc3Nhcnkgc3RlcCBmb3IgVlBBSURGTEFTSENsaWVudCB0byB3b3JrLlxyXG5cclxuICBwbGF5ZXJVdGlscy5wcmVwYXJlRm9yQWRzKHBsYXllcik7XHJcblxyXG4gIGlmIChzZXR0aW5ncy5wbGF5QWRBbHdheXMpIHtcclxuICAgIC8vIE5vIG1hdHRlciB3aGF0IGhhcHBlbnMgd2UgcGxheSBhIG5ldyBhZCBiZWZvcmUgdGhlIHVzZXIgc2VlcyB0aGUgdmlkZW8gYWdhaW4uXHJcbiAgICBwbGF5ZXIub24oJ3Zhc3QuY29udGVudEVuZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QucmVzZXQnKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmIChzZXR0aW5ncy5wcmVmZXRjaEFkVGFnKSB7XHJcbiAgICB0cnlUb1BsYXlQcmVyb2xsQWQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcGxheWVyLm9uKCd2YXN0LmZpcnN0UGxheScsIHRyeVRvUGxheVByZXJvbGxBZCk7XHJcbiAgfVxyXG5cclxuICBwbGF5ZXIub24oJ3Zhc3QucmVzZXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvL0lmIHdlIGFyZSByZXNldGluZyB0aGUgcGx1Z2luLCB3ZSBkb24ndCB3YW50IHRvIHJlc3RvcmUgdGhlIGNvbnRlbnRcclxuICAgIHNuYXBzaG90ID0gbnVsbDtcclxuICAgIGNhbmNlbEFkcygpO1xyXG4gIH0pO1xyXG5cclxuICBwbGF5ZXIudmFzdCA9IHtcclxuICAgIGlzRW5hYmxlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gc2V0dGluZ3MuYWRzRW5hYmxlZDtcclxuICAgIH0sXHJcblxyXG4gICAgZW5hYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldHRpbmdzLmFkc0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaXNhYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldHRpbmdzLmFkc0VuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gcGxheWVyLnZhc3Q7XHJcblxyXG4gIC8qKioqIExvY2FsIGZ1bmN0aW9ucyAqKioqL1xyXG4gIGZ1bmN0aW9uIHRyeVRvUGxheVByZXJvbGxBZCgpIHtcclxuICAgIC8vV2UgcmVtb3ZlIHRoZSBwb3N0ZXIgdG8gcHJldmVudCBmbGlja2VyaW5nIHdoZW5ldmVyIHRoZSBjb250ZW50IHN0YXJ0cyBwbGF5aW5nXHJcbiAgICBwbGF5ZXJVdGlscy5yZW1vdmVOYXRpdmVQb3N0ZXIocGxheWVyKTtcclxuXHJcbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkc0NhbmNlbCcsICd2YXN0LmFkRW5kJ10sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmVtb3ZlQWRVbml0KCk7XHJcbiAgICAgIHJlc3RvcmVWaWRlb0NvbnRlbnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFzeW5jLndhdGVyZmFsbChbXHJcbiAgICAgIGNoZWNrQWRzRW5hYmxlZCxcclxuICAgICAgcHJlcGFyZVBsYXllckZvckFkLFxyXG4gICAgICBzdGFydEFkQ2FuY2VsVGltZW91dCxcclxuICAgICAgZ2V0VmFzdFJlc3BvbnNlLFxyXG4gICAgICBwbGF5UHJlcm9sbEFkXHJcbiAgICBdLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHRyYWNrQWRFcnJvcihlcnJvciwgcmVzcG9uc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkRW5kJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVBZFVuaXQoKSB7XHJcbiAgICAgIGlmIChwbGF5ZXIudmFzdCAmJiBwbGF5ZXIudmFzdC5hZFVuaXQpIHtcclxuICAgICAgICBwbGF5ZXIudmFzdC5hZFVuaXQgPSBudWxsOyAvL1dlIHJlbW92ZSB0aGUgYWRVbml0XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXN0b3JlVmlkZW9Db250ZW50KCkge1xyXG4gICAgICBzZXR1cENvbnRlbnRFdmVudHMoKTtcclxuICAgICAgaWYgKHNuYXBzaG90KSB7XHJcbiAgICAgICAgcGxheWVyVXRpbHMucmVzdG9yZVBsYXllclNuYXBzaG90KHBsYXllciwgc25hcHNob3QpO1xyXG4gICAgICAgIHNuYXBzaG90ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldHVwQ29udGVudEV2ZW50cygpIHtcclxuICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsncGxheWluZycsICd2YXN0LnJlc2V0JywgJ3Zhc3QuZmlyc3RQbGF5J10sIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBpZiAoZXZ0LnR5cGUgIT09ICdwbGF5aW5nJykge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuY29udGVudFN0YXJ0Jyk7XHJcblxyXG4gICAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ2VuZGVkJywgJ3Zhc3QucmVzZXQnLCAndmFzdC5maXJzdFBsYXknXSwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgaWYgKGV2dC50eXBlID09PSAnZW5kZWQnKSB7XHJcbiAgICAgICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmNvbnRlbnRFbmQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tBZHNFbmFibGVkKG5leHQpIHtcclxuICAgICAgaWYgKHNldHRpbmdzLmFkc0VuYWJsZWQpIHtcclxuICAgICAgICByZXR1cm4gbmV4dChudWxsKTtcclxuICAgICAgfVxyXG4gICAgICBuZXh0KG5ldyBWQVNURXJyb3IoJ0FkcyBhcmUgbm90IGVuYWJsZWQnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJlcGFyZVBsYXllckZvckFkKG5leHQpIHtcclxuICAgICAgaWYgKGNhblBsYXlQcmVyb2xsQWQoKSkge1xyXG4gICAgICAgIHNuYXBzaG90ID0gcGxheWVyVXRpbHMuZ2V0UGxheWVyU25hcHNob3QocGxheWVyKTtcclxuICAgICAgICBwbGF5ZXIucGF1c2UoKTtcclxuICAgICAgICBhZGRTcGlubmVySWNvbigpO1xyXG5cclxuICAgICAgICBpZihwbGF5ZXIucGF1c2VkKCkpIHtcclxuICAgICAgICAgIG5leHQobnVsbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnXSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHBsYXllci5wYXVzZSgpO1xyXG4gICAgICAgICAgICBuZXh0KG51bGwpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5leHQobmV3IFZBU1RFcnJvcigndmlkZW8gY29udGVudCBoYXMgYmVlbiBwbGF5aW5nIGJlZm9yZSBwcmVyb2xsIGFkJykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FuUGxheVByZXJvbGxBZCgpIHtcclxuICAgICAgcmV0dXJuICF1dGlsaXRpZXMuaXNJUGhvbmUoKSB8fCBwbGF5ZXIuY3VycmVudFRpbWUoKSA8PSBzZXR0aW5ncy5pb3NQcmVyb2xsQ2FuY2VsVGltZW91dDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydEFkQ2FuY2VsVGltZW91dChuZXh0KSB7XHJcbiAgICAgIHZhciBhZENhbmNlbFRpbWVvdXRJZDtcclxuICAgICAgYWRzQ2FuY2VsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIGFkQ2FuY2VsVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdHJhY2tBZEVycm9yKG5ldyBWQVNURXJyb3IoJ3RpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgdGhlIHZpZGVvIHRvIHN0YXJ0IHBsYXlpbmcnLCA0MDIpKTtcclxuICAgICAgfSwgc2V0dGluZ3MuYWRDYW5jZWxUaW1lb3V0KTtcclxuXHJcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRTdGFydCcsICd2YXN0LmFkc0NhbmNlbCddLCBjbGVhckFkQ2FuY2VsVGltZW91dCk7XHJcblxyXG4gICAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgICAgIGZ1bmN0aW9uIGNsZWFyQWRDYW5jZWxUaW1lb3V0KCkge1xyXG4gICAgICAgIGlmIChhZENhbmNlbFRpbWVvdXRJZCkge1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGFkQ2FuY2VsVGltZW91dElkKTtcclxuICAgICAgICAgIGFkQ2FuY2VsVGltZW91dElkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5leHQobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkU3Bpbm5lckljb24oKSB7XHJcbiAgICAgIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy12YXN0LWFkLWxvYWRpbmcnKTtcclxuICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZFN0YXJ0JywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZVNwaW5uZXJJY29uKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVTcGlubmVySWNvbigpIHtcclxuICAgICAgLy9JTVBPUlRBTlQgTk9URTogV2UgcmVtb3ZlIHRoZSBzcGlubmVySWNvbiBhc3luY2hyb25vdXNseSB0byBnaXZlIHRpbWUgdG8gdGhlIGJyb3dzZXIgdG8gc3RhcnQgdGhlIHZpZGVvLlxyXG4gICAgICAvLyBJZiB3ZSByZW1vdmUgaXQgc3luY2hyb25vdXNseSB3ZSBzZWUgYSBmbGFzaCBvZiB0aGUgY29udGVudCB2aWRlbyBiZWZvcmUgdGhlIGFkIHN0YXJ0cyBwbGF5aW5nLlxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmVsKCksICd2anMtdmFzdC1hZC1sb2FkaW5nJyk7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FuY2VsQWRzKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRzQ2FuY2VsJyk7XHJcbiAgICBhZHNDYW5jZWxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGF5UHJlcm9sbEFkKGNhbGxiYWNrKSB7XHJcbiAgICBhc3luYy53YXRlcmZhbGwoW1xyXG4gICAgICBwbGF5QWRcclxuICAgIF0sIGNhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFZhc3RSZXNwb25zZShjYWxsYmFjaykge1xyXG4gICAgdmFzdC5nZXRWQVNUUmVzcG9uc2Uoc2V0dGluZ3MuYWRUYWdVcmwgPyBzZXR0aW5ncy5hZFRhZ1VybCgpIDogc2V0dGluZ3MuYWRUYWdYTUwsIGNhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XHJcbiAgICAvL1RPRE86IEZpbmQgYSBiZXR0ZXIgd2F5IHRvIHN0b3AgdGhlIHBsYXkuIFRoZSAncGxheVByZXJvbGxXYXRlcmZhbGwnIGVuZHMgaW4gYW4gaW5jb25zaXN0ZW50IHNpdHVhdGlvblxyXG4gICAgLy9JZiB0aGUgc3RhdGUgaXMgbm90ICdwcmVyb2xsPycgaXQgbWVhbnMgdGhlIGFkcyB3ZXJlIGNhbmNlbGVkIHRoZXJlZm9yZSwgd2UgYnJlYWsgdGhlIHdhdGVyZmFsbFxyXG4gICAgaWYgKGFkc0NhbmNlbGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYWRJbnRlZ3JhdG9yID0gaXNWUEFJRCh2YXN0UmVzcG9uc2UpID8gbmV3IFZQQUlESW50ZWdyYXRvcihwbGF5ZXIsIHNldHRpbmdzKSA6IG5ldyBWQVNUSW50ZWdyYXRvcihwbGF5ZXIpO1xyXG4gICAgdmFyIGFkRmluaXNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkU3RhcnQnLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBpZiAoZXZ0LnR5cGUgPT09ICd2YXN0LmFkU3RhcnQnKSB7XHJcbiAgICAgICAgYWRkQWRzTGFiZWwoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVBZHNMYWJlbCk7XHJcblxyXG4gICAgaWYgKHV0aWxpdGllcy5pc0lEZXZpY2UoKSkge1xyXG4gICAgICBwcmV2ZW50TWFudWFsUHJvZ3Jlc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXIudmFzdC52YXN0UmVzcG9uc2UgPSB2YXN0UmVzcG9uc2U7XHJcbiAgICBcclxuICAgIGlmIChzZXR0aW5ncy5wcmVmZXRjaEFkVGFnKSB7XHJcbiAgICAgIHBsYXllci5vbmUoJ3BsYXknLCBfcGxheUFkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9wbGF5QWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfcGxheUFkKCkge1xyXG4gICAgICBwbGF5ZXIudmFzdC5hZFVuaXQgPSBhZEludGVncmF0b3IucGxheUFkKHZhc3RSZXNwb25zZSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKiovXHJcbiAgICBmdW5jdGlvbiBhZGRBZHNMYWJlbCgpIHtcclxuICAgICAgaWYgKGFkRmluaXNoZWQgfHwgcGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoJ0Fkc0xhYmVsJykpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBsYXllci5jb250cm9sQmFyLmFkZENoaWxkKCdBZHNMYWJlbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUFkc0xhYmVsKCkge1xyXG4gICAgICBwbGF5ZXIuY29udHJvbEJhci5yZW1vdmVDaGlsZCgnQWRzTGFiZWwnKTtcclxuICAgICAgYWRGaW5pc2hlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJldmVudE1hbnVhbFByb2dyZXNzKCkge1xyXG4gICAgICAvL0lPUyB2aWRlbyBjbG9jayBpcyB2ZXJ5IHVucmVsaWFibGUgYW5kIHdlIG5lZWQgYSAzIHNlY29uZHMgdGhyZXNob2xkIHRvIGVuc3VyZSB0aGF0IHRoZSB1c2VyIGZvcndhcmRlZC9yZXdvdW5kIHRoZSBhZFxyXG4gICAgICB2YXIgUFJPR1JFU1NfVEhSRVNIT0xEID0gMztcclxuICAgICAgdmFyIHByZXZpb3VzVGltZSA9IDA7XHJcbiAgICAgIHZhciBza2lwYWRfYXR0ZW1wdHMgPSAwO1xyXG5cclxuICAgICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgcHJldmVudEFkU2Vlayk7XHJcbiAgICAgIHBsYXllci5vbignZW5kZWQnLCBwcmV2ZW50QWRTa2lwKTtcclxuXHJcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnLCAndmFzdC5hZEVycm9yJ10sIHN0b3BQcmV2ZW50TWFudWFsUHJvZ3Jlc3MpO1xyXG5cclxuICAgICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gICAgICBmdW5jdGlvbiBwcmV2ZW50QWRTa2lwKCkge1xyXG4gICAgICAgIC8vIElnbm9yZSBlbmRlZCBldmVudCBpZiB0aGUgQWQgdGltZSB3YXMgbm90ICduZWFyJyB0aGUgZW5kXHJcbiAgICAgICAgLy8gYW5kIHJldmVydCB0aW1lIHRvIHRoZSBwcmV2aW91cyAndmFsaWQnIHRpbWVcclxuICAgICAgICBpZiAoKHBsYXllci5kdXJhdGlvbigpIC0gcHJldmlvdXNUaW1lKSA+IFBST0dSRVNTX1RIUkVTSE9MRCkge1xyXG4gICAgICAgICAgcGxheWVyLnBhdXNlKHRydWUpOyAvLyB0aGlzIHJlZHVjZSB0aGUgdmlkZW8gaml0dGVyIGlmIHRoZSBJT1Mgc2tpcCBidXR0b24gaXMgcHJlc3NlZFxyXG4gICAgICAgICAgcGxheWVyLnBsYXkodHJ1ZSk7IC8vIHdlIG5lZWQgdG8gdHJpZ2dlciB0aGUgcGxheSB0byBwdXQgdGhlIHZpZGVvIGVsZW1lbnQgYmFjayBpbiBhIHZhbGlkIHN0YXRlXHJcbiAgICAgICAgICBwbGF5ZXIuY3VycmVudFRpbWUocHJldmlvdXNUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHByZXZlbnRBZFNlZWsoKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gcGxheWVyLmN1cnJlbnRUaW1lKCk7XHJcbiAgICAgICAgdmFyIHByb2dyZXNzRGVsdGEgPSBNYXRoLmFicyhjdXJyZW50VGltZSAtIHByZXZpb3VzVGltZSk7XHJcbiAgICAgICAgaWYgKHByb2dyZXNzRGVsdGEgPiBQUk9HUkVTU19USFJFU0hPTEQpIHtcclxuICAgICAgICAgIHNraXBhZF9hdHRlbXB0cyArPSAxO1xyXG4gICAgICAgICAgaWYgKHNraXBhZF9hdHRlbXB0cyA+PSAyKSB7XHJcbiAgICAgICAgICAgIHBsYXllci5wYXVzZSh0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHBsYXllci5jdXJyZW50VGltZShwcmV2aW91c1RpbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwcmV2aW91c1RpbWUgPSBjdXJyZW50VGltZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHN0b3BQcmV2ZW50TWFudWFsUHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgcGxheWVyLm9mZigndGltZXVwZGF0ZScsIHByZXZlbnRBZFNlZWspO1xyXG4gICAgICAgIHBsYXllci5vZmYoJ2VuZGVkJywgcHJldmVudEFkU2tpcCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRyYWNrQWRFcnJvcihlcnJvciwgdmFzdFJlc3BvbnNlKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3Zhc3QuYWRFcnJvcicsIGVycm9yOiBlcnJvcn0pO1xyXG4gICAgY2FuY2VsQWRzKCk7XHJcbiAgICBpZiAoY29uc29sZSAmJiBjb25zb2xlLmxvZykge1xyXG4gICAgICBjb25zb2xlLmxvZygnQUQgRVJST1I6JywgZXJyb3IubWVzc2FnZSwgZXJyb3IsIHZhc3RSZXNwb25zZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc1ZQQUlEKHZhc3RSZXNwb25zZSkge1xyXG4gICAgdmFyIGksIGxlbjtcclxuICAgIHZhciBtZWRpYUZpbGVzID0gdmFzdFJlc3BvbnNlLm1lZGlhRmlsZXM7XHJcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBtZWRpYUZpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgIGlmICh2YXN0VXRpbC5pc1ZQQUlEKG1lZGlhRmlsZXNbaV0pKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcbiIsIi8vU21hbGwgc3Vic2V0IG9mIGFzeW5jXHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XHJcblxyXG52YXIgYXN5bmMgPSB7fTtcclxuXHJcbmFzeW5jLnNldEltbWVkaWF0ZSA9IGZ1bmN0aW9uIChmbikge1xyXG4gIHNldFRpbWVvdXQoZm4sIDApO1xyXG59O1xyXG5cclxuYXN5bmMuaXRlcmF0b3IgPSBmdW5jdGlvbiAodGFza3MpIHtcclxuICB2YXIgbWFrZUNhbGxiYWNrID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICB2YXIgZm4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcclxuICAgICAgICB0YXNrc1tpbmRleF0uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZm4ubmV4dCgpO1xyXG4gICAgfTtcclxuICAgIGZuLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiAoaW5kZXggPCB0YXNrcy5sZW5ndGggLSAxKSA/IG1ha2VDYWxsYmFjayhpbmRleCArIDEpIDogbnVsbDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZm47XHJcbiAgfTtcclxuICByZXR1cm4gbWFrZUNhbGxiYWNrKDApO1xyXG59O1xyXG5cclxuXHJcbmFzeW5jLndhdGVyZmFsbCA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcclxuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHsgfTtcclxuICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KHRhc2tzKSkge1xyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgdG8gd2F0ZXJmYWxsIG11c3QgYmUgYW4gYXJyYXkgb2YgZnVuY3Rpb25zJyk7XHJcbiAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcclxuICB9XHJcbiAgaWYgKCF0YXNrcy5sZW5ndGgpIHtcclxuICAgIHJldHVybiBjYWxsYmFjaygpO1xyXG4gIH1cclxuICB2YXIgd3JhcEl0ZXJhdG9yID0gZnVuY3Rpb24gKGl0ZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVycikge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcclxuICAgICAgICB2YXIgbmV4dCA9IGl0ZXJhdG9yLm5leHQoKTtcclxuICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgYXJncy5wdXNoKHdyYXBJdGVyYXRvcihuZXh0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgYXJncy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMuc2V0SW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGl0ZXJhdG9yLmFwcGx5KG51bGwsIGFyZ3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgd3JhcEl0ZXJhdG9yKGFzeW5jLml0ZXJhdG9yKHRhc2tzKSkoKTtcclxufTtcclxuXHJcbmFzeW5jLndoZW4gPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBjYWxsYmFjaykge1xyXG4gIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJhc3luYy53aGVuIGVycm9yOiBtaXNzaW5nIGNhbGxiYWNrIGFyZ3VtZW50XCIpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGlzQWxsb3dlZCA9IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNvbmRpdGlvbikgPyBjb25kaXRpb24gOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gISFjb25kaXRpb247XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhcmdzID0gdXRpbGl0aWVzLmFycmF5TGlrZU9ialRvQXJyYXkoYXJndW1lbnRzKTtcclxuICAgIHZhciBuZXh0ID0gYXJncy5wb3AoKTtcclxuXHJcbiAgICBpZiAoaXNBbGxvd2VkLmFwcGx5KG51bGwsIGFyZ3MpKSB7XHJcbiAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFyZ3MudW5zaGlmdChudWxsKTtcclxuICAgIHJldHVybiBuZXh0LmFwcGx5KG51bGwsIGFyZ3MpO1xyXG4gIH07XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFzeW5jO1xyXG5cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxudmFyIGRvbSA9IHt9O1xyXG5cclxuZG9tLmlzVmlzaWJsZSA9IGZ1bmN0aW9uIGlzVmlzaWJsZShlbCkge1xyXG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcclxuICByZXR1cm4gc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbic7XHJcbn07XHJcblxyXG5kb20uaXNIaWRkZW4gPSBmdW5jdGlvbiBpc0hpZGRlbihlbCkge1xyXG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcclxuICByZXR1cm4gc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnO1xyXG59O1xyXG5cclxuZG9tLmlzU2hvd24gPSBmdW5jdGlvbiBpc1Nob3duKGVsKSB7XHJcbiAgcmV0dXJuICFkb20uaXNIaWRkZW4oZWwpO1xyXG59O1xyXG5cclxuZG9tLmhpZGUgPSBmdW5jdGlvbiBoaWRlKGVsKSB7XHJcbiAgZWwuX19wcmV2X3N0eWxlX2Rpc3BsYXlfID0gZWwuc3R5bGUuZGlzcGxheTtcclxuICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59O1xyXG5cclxuZG9tLnNob3cgPSBmdW5jdGlvbiBzaG93KGVsKSB7XHJcbiAgaWYgKGRvbS5pc0hpZGRlbihlbCkpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBlbC5fX3ByZXZfc3R5bGVfZGlzcGxheV87XHJcbiAgfVxyXG4gIGVsLl9fcHJldl9zdHlsZV9kaXNwbGF5XyA9IHVuZGVmaW5lZDtcclxufTtcclxuXHJcbmRvbS5oYXNDbGFzcyA9IGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjc3NDbGFzcykge1xyXG4gIHZhciBjbGFzc2VzLCBpLCBsZW47XHJcblxyXG4gIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcykpIHtcclxuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcclxuICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3NlcyA9IHV0aWxpdGllcy5pc1N0cmluZyhlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpID8gZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KC9cXHMrLykgOiBbXTtcclxuICAgIGNzc0NsYXNzID0gKGNzc0NsYXNzIHx8ICcnKTtcclxuXHJcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBjbGFzc2VzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XHJcbiAgICAgIGlmIChjbGFzc2VzW2ldID09PSBjc3NDbGFzcykge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmRvbS5hZGRDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY3NzQ2xhc3MpIHtcclxuICB2YXIgY2xhc3NlcztcclxuXHJcbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzKSkge1xyXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xyXG4gICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3NlcyA9IHV0aWxpdGllcy5pc1N0cmluZyhlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpID8gZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KC9cXHMrLykgOiBbXTtcclxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoY3NzQ2xhc3MpICYmIHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzLnJlcGxhY2UoL1xccysvLCAnJykpKSB7XHJcbiAgICAgIGNsYXNzZXMucHVzaChjc3NDbGFzcyk7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc2VzLmpvaW4oJyAnKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZG9tLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGVsLCBjc3NDbGFzcykge1xyXG4gIHZhciBjbGFzc2VzO1xyXG5cclxuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MpKSB7XHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzc2VzID0gdXRpbGl0aWVzLmlzU3RyaW5nKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkgPyBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoL1xccysvKSA6IFtdO1xyXG4gICAgdmFyIG5ld0NsYXNzZXMgPSBbXTtcclxuICAgIHZhciBpLCBsZW47XHJcbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGNzc0NsYXNzKSAmJiB1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcy5yZXBsYWNlKC9cXHMrLywgJycpKSkge1xyXG5cclxuICAgICAgZm9yIChpID0gMCwgbGVuID0gY2xhc3Nlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xyXG4gICAgICAgIGlmIChjc3NDbGFzcyAhPT0gY2xhc3Nlc1tpXSkge1xyXG4gICAgICAgICAgbmV3Q2xhc3Nlcy5wdXNoKGNsYXNzZXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbmV3Q2xhc3Nlcy5qb2luKCcgJykpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmRvbS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcikge1xyXG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KGVsKSl7XHJcbiAgICB1dGlsaXRpZXMuZm9yRWFjaChlbCwgZnVuY3Rpb24oZSkge1xyXG4gICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlLCB0eXBlLCBoYW5kbGVyKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYodXRpbGl0aWVzLmlzQXJyYXkodHlwZSkpe1xyXG4gICAgdXRpbGl0aWVzLmZvckVhY2godHlwZSwgZnVuY3Rpb24odCkge1xyXG4gICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlbCwgdCwgaGFuZGxlcik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICB9IGVsc2UgaWYgKGVsLmF0dGFjaEV2ZW50KSB7XHJcbiAgICAvLyBXQVJOSU5HISEhIHRoaXMgaXMgYSB2ZXJ5IG5haXZlIGltcGxlbWVudGF0aW9uICFcclxuICAgIC8vIHRoZSBldmVudCBvYmplY3QgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBoYW5kbGVyXHJcbiAgICAvLyB3b3VsZCBub3QgYmUgdGhlcmUgZm9yIElFOFxyXG4gICAgLy8gd2Ugc2hvdWxkIHVzZSBcIndpbmRvdy5ldmVudFwiIGFuZCB0aGVuIFwiZXZlbnQuc3JjRWxlbWVudFwiXHJcbiAgICAvLyBpbnN0ZWFkIG9mIFwiZXZlbnQudGFyZ2V0XCJcclxuICAgIGVsLmF0dGFjaEV2ZW50KFwib25cIiArIHR5cGUsIGhhbmRsZXIpO1xyXG4gIH1cclxufTtcclxuXHJcbmRvbS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcikge1xyXG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KGVsKSl7XHJcbiAgICB1dGlsaXRpZXMuZm9yRWFjaChlbCwgZnVuY3Rpb24oZSkge1xyXG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCB0eXBlLCBoYW5kbGVyKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYodXRpbGl0aWVzLmlzQXJyYXkodHlwZSkpe1xyXG4gICAgdXRpbGl0aWVzLmZvckVhY2godHlwZSwgZnVuY3Rpb24odCkge1xyXG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdCwgaGFuZGxlcik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChlbC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XHJcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICB9IGVsc2UgaWYgKGVsLmRldGFjaEV2ZW50KSB7XHJcbiAgICBlbC5kZXRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBoYW5kbGVyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZWxbXCJvblwiICsgdHlwZV0gPSBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbmRvbS5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbCwgZXZlbnQpIHtcclxuICBpZiAoZWwuZGlzcGF0Y2hFdmVudCkge1xyXG4gICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVsLmZpcmVFdmVudChcIm9uXCIgKyBldmVudC5ldmVudFR5cGUsIGV2ZW50KTtcclxuICB9XHJcbn07XHJcblxyXG5kb20uaXNEZXNjZW5kYW50ID0gZnVuY3Rpb24gaXNEZXNjZW5kYW50KHBhcmVudCwgY2hpbGQpIHtcclxuICB2YXIgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGU7XHJcbiAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcclxuICAgIGlmIChub2RlID09PSBwYXJlbnQpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5kb20uZ2V0VGV4dENvbnRlbnQgPSBmdW5jdGlvbiBnZXRUZXh0Q29udGVudChlbCl7XHJcbiAgcmV0dXJuIGVsLnRleHRDb250ZW50IHx8IGVsLnRleHQ7XHJcbn07XHJcblxyXG5kb20ucHJlcGVuZENoaWxkID0gZnVuY3Rpb24gcHJlcGVuZENoaWxkKHBhcmVudCwgY2hpbGQpIHtcclxuICBpZihjaGlsZC5wYXJlbnROb2RlKXtcclxuICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gIH1cclxuICByZXR1cm4gcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xyXG59O1xyXG5cclxuZG9tLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSl7XHJcbiAgaWYobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpe1xyXG4gICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmRvbS5pc0RvbUVsZW1lbnQgPSBmdW5jdGlvbiBpc0RvbUVsZW1lbnQobykge1xyXG4gIHJldHVybiBvIGluc3RhbmNlb2YgRWxlbWVudDtcclxufTtcclxuXHJcbmRvbS5jbGljayA9IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKSB7XHJcbiAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZWwsICdjbGljaycsIGhhbmRsZXIpO1xyXG59O1xyXG5cclxuZG9tLm9uY2UgPSBmdW5jdGlvbihlbCwgdHlwZSwgaGFuZGxlcikge1xyXG4gIGZ1bmN0aW9uIGhhbmRsZXJXcmFwKCkge1xyXG4gICAgaGFuZGxlci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG4gICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsIHR5cGUsIGhhbmRsZXJXcmFwKTtcclxuICB9XHJcblxyXG4gIGRvbS5hZGRFdmVudExpc3RlbmVyKGVsLCB0eXBlLCBoYW5kbGVyV3JhcCk7XHJcbn07XHJcblxyXG4vL05vdGU6IHRoZXJlIGlzIG5vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBvbiBpUGFkIHNvIHdlIG5lZWQgYSBmYWxsYmFja1xyXG5kb20uZ2V0RGltZW5zaW9uID0gZnVuY3Rpb24gZ2V0RGltZW5zaW9uKGVsZW1lbnQpIHtcclxuICB2YXIgcmVjdDtcclxuXHJcbiAgLy9PbiBJRTkgYW5kIGJlbG93IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBkb2VzIG5vdCB3b3JrIGNvbnNpc3RlbnRseVxyXG4gIGlmKCF1dGlsaXRpZXMuaXNPbGRJRSgpICYmIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XHJcbiAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxyXG4gICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodFxyXG4gIH07XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRvbTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXJsVXRpbHMgPSByZXF1aXJlKCcuL3VybFV0aWxzJyk7XHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxuXHJcbmZ1bmN0aW9uIEh0dHBSZXF1ZXN0RXJyb3IobWVzc2FnZSkge1xyXG4gIHRoaXMubWVzc2FnZSA9ICdIdHRwUmVxdWVzdCBFcnJvcjogJyArIChtZXNzYWdlIHx8ICcnKTtcclxufVxyXG5IdHRwUmVxdWVzdEVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xyXG5IdHRwUmVxdWVzdEVycm9yLnByb3RvdHlwZS5uYW1lID0gXCJIdHRwUmVxdWVzdCBFcnJvclwiO1xyXG5cclxuZnVuY3Rpb24gSHR0cFJlcXVlc3QoY3JlYXRlWGhyKSB7XHJcbiAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjcmVhdGVYaHIpKSB7XHJcbiAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcignTWlzc2luZyBYTUxIdHRwUmVxdWVzdCBmYWN0b3J5IG1ldGhvZCcpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5jcmVhdGVYaHIgPSBjcmVhdGVYaHI7XHJcbn1cclxuXHJcbkh0dHBSZXF1ZXN0LnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwsIGNhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgc2FuaXR5Q2hlY2sodXJsLCBjYWxsYmFjaywgb3B0aW9ucyk7XHJcbiAgdmFyIHRpbWVvdXQsIHRpbWVvdXRJZDtcclxuICB2YXIgeGhyID0gdGhpcy5jcmVhdGVYaHIoKTtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICB0aW1lb3V0ID0gdXRpbGl0aWVzLmlzTnVtYmVyKG9wdGlvbnMudGltZW91dCkgPyBvcHRpb25zLnRpbWVvdXQgOiAwO1xyXG5cclxuICB4aHIub3BlbihtZXRob2QsIHVybFV0aWxzLnVybFBhcnRzKHVybCkuaHJlZiwgdHJ1ZSk7XHJcblxyXG4gIGlmIChvcHRpb25zLmhlYWRlcnMpIHtcclxuICAgIHNldEhlYWRlcnMoeGhyLCBvcHRpb25zLmhlYWRlcnMpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XHJcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc3RhdHVzVGV4dCwgcmVzcG9uc2UsIHN0YXR1cztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvbmx5IHdheSB0byBkbyBhIHNlY3VyZSByZXF1ZXN0IG9uIElFOCBhbmQgSUU5IGlzIHdpdGggdGhlIFhEb21haW5SZXF1ZXN0IG9iamVjdC4gVW5mb3J0dW5hdGVseSwgbWljcm9zb2Z0IGlzXHJcbiAgICAgKiBzbyBuaWNlIHRoYXQgZGVjaWRlZCB0aGF0IHRoZSBzdGF0dXMgcHJvcGVydHkgYW5kIHRoZSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBtZXRob2Qgd2hlcmUgbm90IG5lZWRlZCBzbyB3ZSBoYXZlIHRvXHJcbiAgICAgKiBmYWtlIHRoZW0uIElmIHRoZSByZXF1ZXN0IGdldHMgZG9uZSB3aXRoIGFuIFhEb21haW5SZXF1ZXN0IGluc3RhbmNlLCB3ZSB3aWxsIGFzc3VtZSB0aGF0IHRoZXJlIGFyZSBubyBoZWFkZXJzIGFuZFxyXG4gICAgICogdGhlIHN0YXR1cyB3aWxsIGFsd2F5cyBiZSAyMDAuIElmIHlvdSBkb24ndCBsaWtlIGl0LCBETyBOT1QgVVNFIEFOQ0lFTlQgQlJPV1NFUlMhISFcclxuICAgICAqXHJcbiAgICAgKiBGb3IgbW9yIGluZm8gZ28gdG86IGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvY2MyODgwNjAodj12cy44NSkuYXNweFxyXG4gICAgICovXHJcbiAgICBpZiAoIXhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMpIHtcclxuICAgICAgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXhoci5zdGF0dXMpIHtcclxuICAgICAgeGhyLnN0YXR1cyA9IDIwMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh0aW1lb3V0SWQpKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgICB0aW1lb3V0SWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0IHx8ICcnO1xyXG5cclxuICAgIC8vIHJlc3BvbnNlVGV4dCBpcyB0aGUgb2xkLXNjaG9vbCB3YXkgb2YgcmV0cmlldmluZyByZXNwb25zZSAoc3VwcG9ydGVkIGJ5IElFOCAmIDkpXHJcbiAgICAvLyByZXNwb25zZS9yZXNwb25zZVR5cGUgcHJvcGVydGllcyB3ZXJlIGludHJvZHVjZWQgaW4gWEhSIExldmVsMiBzcGVjIChzdXBwb3J0ZWQgYnkgSUUxMClcclxuICAgIHJlc3BvbnNlID0gKCdyZXNwb25zZScgaW4geGhyKSA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHQ7XHJcblxyXG4gICAgLy8gbm9ybWFsaXplIElFOSBidWcgKGh0dHA6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzE0NTApXHJcbiAgICBzdGF0dXMgPSB4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cztcclxuXHJcbiAgICBjYWxsYmFjayhcclxuICAgICAgc3RhdHVzLFxyXG4gICAgICByZXNwb25zZSxcclxuICAgICAgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLFxyXG4gICAgICBzdGF0dXNUZXh0KTtcclxuICB9O1xyXG5cclxuICB4aHIub25lcnJvciA9IHJlcXVlc3RFcnJvcjtcclxuICB4aHIub25hYm9ydCA9IHJlcXVlc3RFcnJvcjtcclxuXHJcbiAgeGhyLnNlbmQoKTtcclxuXHJcbiAgaWYgKHRpbWVvdXQgPiAwKSB7XHJcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgeGhyICYmIHhoci5hYm9ydCgpO1xyXG4gICAgfSwgdGltZW91dCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayh1cmwsIGNhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyh1cmwpIHx8IHV0aWxpdGllcy5pc0VtcHR5U3RyaW5nKHVybCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEh0dHBSZXF1ZXN0RXJyb3IoXCJJbnZhbGlkIHVybCAnXCIgKyB1cmwgKyBcIidcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcclxuICAgICAgdGhyb3cgbmV3IEh0dHBSZXF1ZXN0RXJyb3IoXCJJbnZhbGlkIGhhbmRsZXIgJ1wiICsgY2FsbGJhY2sgKyBcIicgZm9yIHRoZSBodHRwIHJlcXVlc3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQob3B0aW9ucykgJiYgIXV0aWxpdGllcy5pc09iamVjdChvcHRpb25zKSkge1xyXG4gICAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcihcIkludmFsaWQgb3B0aW9ucyBtYXAgJ1wiICsgb3B0aW9ucyArIFwiJ1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldEhlYWRlcnMoeGhyLCBoZWFkZXJzKSB7XHJcbiAgICB1dGlsaXRpZXMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh2YWx1ZSkpIHtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXF1ZXN0RXJyb3IoKSB7XHJcbiAgICBjYWxsYmFjaygtMSwgbnVsbCwgbnVsbCwgJycpO1xyXG4gIH1cclxufTtcclxuXHJcbkh0dHBSZXF1ZXN0LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAodXJsLCBjYWxsYmFjaywgb3B0aW9ucykge1xyXG4gIHRoaXMucnVuKCdHRVQnLCB1cmwsIHByb2Nlc3NSZXNwb25zZSwgb3B0aW9ucyk7XHJcblxyXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZXNwb25zZShzdGF0dXMsIHJlc3BvbnNlLCBoZWFkZXJzU3RyaW5nLCBzdGF0dXNUZXh0KSB7XHJcbiAgICBpZiAoaXNTdWNjZXNzKHN0YXR1cykpIHtcclxuICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYWxsYmFjayhuZXcgSHR0cFJlcXVlc3RFcnJvcihzdGF0dXNUZXh0KSwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc1N1Y2Nlc3Moc3RhdHVzKSB7XHJcbiAgICByZXR1cm4gMjAwIDw9IHN0YXR1cyAmJiBzdGF0dXMgPCAzMDA7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlWGhyKCkge1xyXG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICBpZiAoIShcIndpdGhDcmVkZW50aWFsc1wiIGluIHhocikpIHtcclxuICAgIC8vIFhEb21haW5SZXF1ZXN0IGZvciBJRS5cclxuICAgIHhociA9IG5ldyBYRG9tYWluUmVxdWVzdCgpO1xyXG4gIH1cclxuICByZXR1cm4geGhyO1xyXG59XHJcblxyXG52YXIgaHR0cCA9IG5ldyBIdHRwUmVxdWVzdChjcmVhdGVYaHIpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgaHR0cDogaHR0cCxcclxuICBIdHRwUmVxdWVzdDogSHR0cFJlcXVlc3QsXHJcbiAgSHR0cFJlcXVlc3RFcnJvcjogSHR0cFJlcXVlc3RFcnJvcixcclxuICBjcmVhdGVYaHI6IGNyZWF0ZVhoclxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgZG9tID0gcmVxdWlyZSgnLi9kb20nKTtcclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxudmFyIHBsYXllclV0aWxzID0ge307XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjYXB0dXJlcyB0aGUgcG9ydGlvbnMgb2YgcGxheWVyIHN0YXRlIHJlbGV2YW50IHRvXHJcbiAqIHZpZGVvIHBsYXliYWNrLiBUaGUgcmVzdWx0IG9mIHRoaXMgZnVuY3Rpb24gY2FuIGJlIHBhc3NlZCB0b1xyXG4gKiByZXN0b3JlUGxheWVyU25hcHNob3Qgd2l0aCBhIHBsYXllciB0byByZXR1cm4gdGhlIHBsYXllciB0byB0aGUgc3RhdGUgaXRcclxuICogd2FzIGluIHdoZW4gdGhpcyBmdW5jdGlvbiB3YXMgaW52b2tlZC5cclxuICogQHBhcmFtIHtvYmplY3R9IHBsYXllciBUaGUgdmlkZW9qcyBwbGF5ZXIgb2JqZWN0XHJcbiAqL1xyXG5wbGF5ZXJVdGlscy5nZXRQbGF5ZXJTbmFwc2hvdCA9IGZ1bmN0aW9uIGdldFBsYXllclNuYXBzaG90KHBsYXllcikge1xyXG4gIHZhciB0ZWNoID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XHJcblxyXG4gIHZhciBzbmFwc2hvdCA9IHtcclxuICAgIGVuZGVkOiBwbGF5ZXIuZW5kZWQoKSxcclxuICAgIHNyYzogcGxheWVyLmN1cnJlbnRTcmMoKSxcclxuICAgIGN1cnJlbnRUaW1lOiBwbGF5ZXIuY3VycmVudFRpbWUoKSxcclxuICAgIHR5cGU6IHBsYXllci5jdXJyZW50VHlwZSgpLFxyXG4gICAgcGxheWluZzogIXBsYXllci5wYXVzZWQoKSxcclxuICAgIHN1cHByZXNzZWRUcmFja3M6IGdldFN1cHByZXNzZWRUcmFja3MocGxheWVyKVxyXG4gIH07XHJcblxyXG4gIGlmICh0ZWNoKSB7XHJcbiAgICBzbmFwc2hvdC5uYXRpdmVQb3N0ZXIgPSB0ZWNoLnBvc3RlcjtcclxuICAgIHNuYXBzaG90LnN0eWxlID0gdGVjaC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgfVxyXG4gIHJldHVybiBzbmFwc2hvdDtcclxuXHJcbiAgLyoqKiogTG9jYWwgRnVuY3Rpb25zICoqKiovXHJcbiAgZnVuY3Rpb24gZ2V0U3VwcHJlc3NlZFRyYWNrcyhwbGF5ZXIpIHtcclxuICAgIHZhciB0cmFja3MgPSBwbGF5ZXIucmVtb3RlVGV4dFRyYWNrcyA/IHBsYXllci5yZW1vdGVUZXh0VHJhY2tzKCkgOiBbXTtcclxuXHJcbiAgICBpZiAodHJhY2tzICYmIHV0aWxpdGllcy5pc0FycmF5KHRyYWNrcy50cmFja3NfKSkge1xyXG4gICAgICB0cmFja3MgPSB0cmFja3MudHJhY2tzXztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KHRyYWNrcykpIHtcclxuICAgICAgdHJhY2tzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHN1cHByZXNzZWRUcmFja3MgPSBbXTtcclxuICAgIHRyYWNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFjaykge1xyXG4gICAgICBzdXBwcmVzc2VkVHJhY2tzLnB1c2goe1xyXG4gICAgICAgIHRyYWNrOiB0cmFjayxcclxuICAgICAgICBtb2RlOiB0cmFjay5tb2RlXHJcbiAgICAgIH0pO1xyXG4gICAgICB0cmFjay5tb2RlID0gJ2Rpc2FibGVkJztcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzdXBwcmVzc2VkVHJhY2tzO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBBdHRlbXB0cyB0byBtb2RpZnkgdGhlIHNwZWNpZmllZCBwbGF5ZXIgc28gdGhhdCBpdHMgc3RhdGUgaXMgZXF1aXZhbGVudCB0b1xyXG4gKiB0aGUgc3RhdGUgb2YgdGhlIHNuYXBzaG90LlxyXG4gKiBAcGFyYW0ge29iamVjdH0gc25hcHNob3QgLSB0aGUgcGxheWVyIHN0YXRlIHRvIGFwcGx5XHJcbiAqL1xyXG5wbGF5ZXJVdGlscy5yZXN0b3JlUGxheWVyU25hcHNob3QgPSBmdW5jdGlvbiByZXN0b3JlUGxheWVyU25hcHNob3QocGxheWVyLCBzbmFwc2hvdCkge1xyXG4gIHZhciB0ZWNoID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XHJcbiAgdmFyIGF0dGVtcHRzID0gMjA7IC8vIHRoZSBudW1iZXIgb2YgcmVtYWluaW5nIGF0dGVtcHRzIHRvIHJlc3RvcmUgdGhlIHNuYXBzaG90XHJcblxyXG4gIGlmIChzbmFwc2hvdC5uYXRpdmVQb3N0ZXIpIHtcclxuICAgIHRlY2gucG9zdGVyID0gc25hcHNob3QubmF0aXZlUG9zdGVyO1xyXG4gIH1cclxuXHJcbiAgaWYgKCdzdHlsZScgaW4gc25hcHNob3QpIHtcclxuICAgIC8vIG92ZXJ3cml0ZSBhbGwgY3NzIHN0eWxlIHByb3BlcnRpZXMgdG8gcmVzdG9yZSBzdGF0ZSBwcmVjaXNlbHlcclxuICAgIHRlY2guc2V0QXR0cmlidXRlKCdzdHlsZScsIHNuYXBzaG90LnN0eWxlIHx8ICcnKTtcclxuICB9XHJcblxyXG4gIGlmIChoYXNTcmNDaGFuZ2VkKHBsYXllciwgc25hcHNob3QpKSB7XHJcblxyXG4gICAgLy8gb24gaW9zNywgZmlkZGxpbmcgd2l0aCB0ZXh0VHJhY2tzIHRvbyBlYXJseSB3aWxsIGNhdXNlIHNhZmFyaSB0byBjcmFzaFxyXG4gICAgcGxheWVyLm9uZSgnY29udGVudGxvYWRlZG1ldGFkYXRhJywgcmVzdG9yZVRyYWNrcyk7XHJcblxyXG4gICAgcGxheWVyLm9uZSgnY2FucGxheScsIHRyeVRvUmVzdW1lKTtcclxuICAgIGVuc3VyZUNhbnBsYXlFdnRHZXRzRmlyZWQoKTtcclxuXHJcbiAgICAvLyBpZiB0aGUgc3JjIGNoYW5nZWQgZm9yIGFkIHBsYXliYWNrLCByZXNldCBpdFxyXG4gICAgcGxheWVyLnNyYyh7c3JjOiBzbmFwc2hvdC5zcmMsIHR5cGU6IHNuYXBzaG90LnR5cGV9KTtcclxuXHJcbiAgICAvLyBzYWZhcmkgcmVxdWlyZXMgYSBjYWxsIHRvIGBsb2FkYCB0byBwaWNrIHVwIGEgY2hhbmdlZCBzb3VyY2VcclxuICAgIHBsYXllci5sb2FkKCk7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXN0b3JlVHJhY2tzKCk7XHJcblxyXG4gICAgaWYgKHNuYXBzaG90LnBsYXlpbmcpIHtcclxuICAgICAgcGxheWVyLnBsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cclxuXHJcbiAgLyoqXHJcbiAgICogU29tZXRpbWVzIGZpcmVmb3ggZG9lcyBub3QgdHJpZ2dlciB0aGUgJ2NhbnBsYXknIGV2dC5cclxuICAgKiBUaGlzIGNvZGUgZW5zdXJlIHRoYXQgaXQgYWx3YXlzIGdldHMgdHJpZ2dlcmVkIHRyaWdnZXJlZC5cclxuICAgKi9cclxuICBmdW5jdGlvbiBlbnN1cmVDYW5wbGF5RXZ0R2V0c0ZpcmVkKCkge1xyXG4gICAgdmFyIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHBsYXllci50cmlnZ2VyKCdjYW5wbGF5Jyk7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICBwbGF5ZXIub25lKCdjYW5wbGF5JywgZnVuY3Rpb24oKXtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBwbGF5ZXIgbmVlZHMgdG8gYmUgcmVzdG9yZWQgdG8gaXRzIHN0YXRlXHJcbiAgICogYmVmb3JlIGFkIHBsYXliYWNrIGJlZ2FuLiBXaXRoIGEgY3VzdG9tIGFkIGRpc3BsYXkgb3IgYnVybmVkLWluXHJcbiAgICogYWRzLCB0aGUgY29udGVudCBwbGF5ZXIgc3RhdGUgaGFzbid0IGJlZW4gbW9kaWZpZWQgYW5kIHNvIG5vXHJcbiAgICogcmVzdG9yYXRpb24gaXMgcmVxdWlyZWRcclxuICAgKi9cclxuICBmdW5jdGlvbiBoYXNTcmNDaGFuZ2VkKHBsYXllciwgc25hcHNob3QpIHtcclxuICAgIGlmIChwbGF5ZXIuc3JjKCkpIHtcclxuICAgICAgcmV0dXJuIHBsYXllci5zcmMoKSAhPT0gc25hcHNob3Quc3JjO1xyXG4gICAgfVxyXG4gICAgLy8gdGhlIHBsYXllciB3YXMgY29uZmlndXJlZCB0aHJvdWdoIHNvdXJjZSBlbGVtZW50IGNoaWxkcmVuXHJcbiAgICByZXR1cm4gcGxheWVyLmN1cnJlbnRTcmMoKSAhPT0gc25hcHNob3Quc3JjO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzdG9yZVRyYWNrcygpIHtcclxuICAgIHZhciBzdXBwcmVzc2VkVHJhY2tzID0gc25hcHNob3Quc3VwcHJlc3NlZFRyYWNrcztcclxuICAgIHN1cHByZXNzZWRUcmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tTbmFwc2hvdCkge1xyXG4gICAgICB0cmFja1NuYXBzaG90LnRyYWNrLm1vZGUgPSB0cmFja1NuYXBzaG90Lm1vZGU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBpZiB0aGUgdmlkZW8gZWxlbWVudCBoYXMgbG9hZGVkIGVub3VnaCBvZiB0aGUgc25hcHNob3Qgc291cmNlXHJcbiAgICogdG8gYmUgcmVhZHkgdG8gYXBwbHkgdGhlIHJlc3Qgb2YgdGhlIHN0YXRlXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdHJ5VG9SZXN1bWUoKSB7XHJcblxyXG4gICAgLy8gaWYgc29tZSBwZXJpb2Qgb2YgdGhlIHZpZGVvIGlzIHNlZWthYmxlLCByZXN1bWUgcGxheWJhY2tcclxuICAgIC8vIG90aGVyd2lzZSBkZWxheSBhIGJpdCBhbmQgdGhlbiBjaGVjayBhZ2FpbiB1bmxlc3Mgd2UncmUgb3V0IG9mIGF0dGVtcHRzXHJcblxyXG4gICAgaWYgKCFwbGF5ZXJVdGlscy5pc1JlYWR5VG9SZXN1bWUocGxheWVyKSAmJiBhdHRlbXB0cy0tKSB7XHJcbiAgICAgIHNldFRpbWVvdXQodHJ5VG9SZXN1bWUsIDUwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYocGxheWVyLmN1cnJlbnRUaW1lKCkgIT09IHNuYXBzaG90LmN1cnJlbnRUaW1lKSB7XHJcbiAgICAgICAgICBpZiAoc25hcHNob3QucGxheWluZykgeyAvLyBpZiBuZWVkZWQgcmVzdG9yZSBwbGF5aW5nIHN0YXR1cyBhZnRlciBzZWVrIGNvbXBsZXRlc1xyXG4gICAgICAgICAgICBwbGF5ZXIub25lKCdzZWVrZWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICBwbGF5ZXIucGxheSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHBsYXllci5jdXJyZW50VGltZShzbmFwc2hvdC5jdXJyZW50VGltZSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoc25hcHNob3QucGxheWluZykge1xyXG4gICAgICAgICAgLy8gaWYgbmVlZGVkIGFuZCBubyBzZWVrIGhhcyBiZWVuIHBlcmZvcm1lZCwgcmVzdG9yZSBwbGF5aW5nIHN0YXR1cyBpbW1lZGlhdGVseVxyXG4gICAgICAgICAgcGxheWVyLnBsYXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdmlkZW9qcy5sb2cud2FybignRmFpbGVkIHRvIHJlc3VtZSB0aGUgY29udGVudCBhZnRlciBhbiBhZHZlcnRpc2VtZW50JywgZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5wbGF5ZXJVdGlscy5pc1JlYWR5VG9SZXN1bWUgPSBmdW5jdGlvbiAocGxheWVyKSB7XHJcblxyXG4gIGlmIChwbGF5ZXIucmVhZHlTdGF0ZSgpID4gMSkge1xyXG4gICAgLy8gc29tZSBicm93c2VycyBhbmQgbWVkaWEgYXJlbid0IFwic2Vla2FibGVcIi5cclxuICAgIC8vIHJlYWR5U3RhdGUgZ3JlYXRlciB0aGFuIDEgYWxsb3dzIGZvciBzZWVraW5nIHdpdGhvdXQgZXhjZXB0aW9uc1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAocGxheWVyLnNlZWthYmxlKCkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gaWYgdGhlIHBsYXllciBkb2Vzbid0IGV4cG9zZSB0aGUgc2Vla2FibGUgdGltZSByYW5nZXMsIHRyeSB0b1xyXG4gICAgLy8gcmVzdW1lIHBsYXliYWNrIGltbWVkaWF0ZWx5XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChwbGF5ZXIuc2Vla2FibGUoKS5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyBpZiBzb21lIHBlcmlvZCBvZiB0aGUgdmlkZW8gaXMgc2Vla2FibGUsIHJlc3VtZSBwbGF5YmFja1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBwcmVwYXJlcyB0aGUgcGxheWVyIHRvIGRpc3BsYXkgYWRzLlxyXG4gKiBBZGRpbmcgY29udmVuaWVuY2UgZXZlbnRzIGxpa2UgdGhlICd2YXN0LmZpcnNQbGF5JyB0aGF0IGdldHMgZmlyZWQgd2hlbiB0aGUgdmlkZW8gaXMgZmlyc3QgcGxheWVkXHJcbiAqIGFuZCBhZHMgdGhlIGJsYWNrUG9zdGVyIHRvIHRoZSBwbGF5ZXIgdG8gcHJldmVudCBjb250ZW50IGZyb20gYmVpbmcgZGlzcGxheWVkIGJlZm9yZSB0aGUgcHJlcm9sbCBhZC5cclxuICpcclxuICogQHBhcmFtIHBsYXllclxyXG4gKi9cclxucGxheWVyVXRpbHMucHJlcGFyZUZvckFkcyA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcclxuICB2YXIgYmxhY2tQb3N0ZXIgPSBwbGF5ZXIuYWRkQ2hpbGQoJ2JsYWNrUG9zdGVyJyk7XHJcbiAgdmFyIF9maXJzdFBsYXkgPSB0cnVlO1xyXG4gIHZhciB2b2x1bWVTbmFwc2hvdDtcclxuXHJcblxyXG4gIG1vbmtleVBhdGNoUGxheWVyQXBpKCk7XHJcblxyXG4gIHBsYXllci5vbigncGxheScsIHRyeVRvVHJpZ2dlckZpcnN0UGxheSk7XHJcbiAgcGxheWVyLm9uKCd2YXN0LnJlc2V0JywgcmVzZXRGaXJzdFBsYXkpOy8vRXZlcnkgdGltZSB3ZSBjaGFuZ2UgdGhlIHNvdXJjZXMgd2UgcmVzZXQgdGhlIGZpcnN0IHBsYXkuXHJcbiAgcGxheWVyLm9uKCd2YXN0LmZpcnN0UGxheScsIHJlc3RvcmVDb250ZW50Vm9sdW1lKTtcclxuICBwbGF5ZXIub24oJ2Vycm9yJywgaGlkZUJsYWNrUG9zdGVyKTsvL0lmIHRoZXJlIGlzIGFuIGVycm9yIGluIHRoZSBwbGF5ZXIgd2UgcmVtb3ZlIHRoZSBibGFja3Bvc3RlciB0byBzaG93IHRoZSBlcnIgbXNnXHJcbiAgcGxheWVyLm9uKCd2YXN0LmFkU3RhcnQnLCBoaWRlQmxhY2tQb3N0ZXIpO1xyXG4gIHBsYXllci5vbigndmFzdC5hZHNDYW5jZWwnLCBoaWRlQmxhY2tQb3N0ZXIpO1xyXG4gIHBsYXllci5vbigndmFzdC5hZEVycm9yJywgaGlkZUJsYWNrUG9zdGVyKTtcclxuICBwbGF5ZXIub24oJ3Zhc3QuYWRTdGFydCcsIGFkZFN0eWxlcyk7XHJcbiAgcGxheWVyLm9uKCd2YXN0LmFkRW5kJywgcmVtb3ZlU3R5bGVzKTtcclxuICBwbGF5ZXIub24oJ3Zhc3QuYWRzQ2FuY2VsJywgcmVtb3ZlU3R5bGVzKTtcclxuXHJcbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xyXG5cclxuICAvKipcclxuICAgV2hhdCB0aGlzIGZ1bmN0aW9uIGRvZXMgaXMgdWdseSBhbmQgaG9ycmlibGUgYW5kIEkgc2hvdWxkIHRoaW5rIHR3aWNlIGJlZm9yZSBjYWxsaW5nIG15c2VsZiBhIGdvb2QgZGV2ZWxvcGVyLiBXaXRoIHRoYXQgc2FpZCxcclxuICAgaXQgaXMgdGhlIGJlc3Qgc29sdXRpb24gSSBjb3VsZCBmaW5kIHRvIG11dGUgdGhlIHZpZGVvIHVudGlsIHRoZSAncGxheScgZXZlbnQgaGFwcGVucyAob24gbW9iaWxlIGRldmljZXMpIGFuZCB0aGUgcGx1Z2luIGNhbiBkZWNpZGUgd2hldGhlclxyXG4gICB0byBwbGF5IHRoZSBhZCBvciBub3QuXHJcblxyXG4gICBXZSBhbHNvIG5lZWQgdGhpcyBtb25rZXlwYXRjaCB0byBiZSBhYmxlIHRvIHBhdXNlIGFuZCByZXN1bWUgYW4gYWQgdXNpbmcgdGhlIHBsYXllcidzIEFQSVxyXG5cclxuICAgSWYgeW91IGhhdmUgYSBiZXR0ZXIgc29sdXRpb24gcGxlYXNlIGRvIHRlbGwgbWUuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gbW9ua2V5UGF0Y2hQbGF5ZXJBcGkoKSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNb25rZXkgcGF0Y2ggbmVlZGVkIHRvIGhhbmRsZSBmaXJzdFBsYXkgYW5kIHJlc3VtZSBvZiBwbGF5aW5nIGFkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjYWxsT3JpZ1BsYXkgbmVjZXNzYXJ5IGZsYWcgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wIHdoZW4geW91IGFyZSByZXN0b3JpbmcgYSBWQVNUIGFkLlxyXG4gICAgICogQHJldHVybnMge3BsYXllcn1cclxuICAgICAqL1xyXG4gICAgdmFyIG9yaWdQbGF5ID0gcGxheWVyLnBsYXk7XHJcbiAgICBwbGF5ZXIucGxheSA9IGZ1bmN0aW9uIChjYWxsT3JpZ1BsYXkpIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKGlzRmlyc3RQbGF5KCkpIHtcclxuICAgICAgICBmaXJzdFBsYXkoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bWUoY2FsbE9yaWdQbGF5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcblxyXG4gICAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgICAgIGZ1bmN0aW9uIGZpcnN0UGxheSgpIHtcclxuICAgICAgICBpZiAoIXV0aWxpdGllcy5pc0lQaG9uZSgpKSB7XHJcbiAgICAgICAgICB2b2x1bWVTbmFwc2hvdCA9IHNhdmVWb2x1bWVTbmFwc2hvdCgpO1xyXG4gICAgICAgICAgcGxheWVyLm11dGVkKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3JpZ1BsYXkuYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gcmVzdW1lKGNhbGxPcmlnUGxheSkge1xyXG4gICAgICAgIGlmIChpc0FkUGxheWluZygpICYmICFjYWxsT3JpZ1BsYXkpIHtcclxuICAgICAgICAgIHBsYXllci52YXN0LmFkVW5pdC5yZXN1bWVBZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBvcmlnUGxheS5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOZWVkZWQgbW9ua2V5IHBhdGNoIHRvIGhhbmRsZSBwYXVzZSBvZiBwbGF5aW5nIGFkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjYWxsT3JpZ1BsYXkgbmVjZXNzYXJ5IGZsYWcgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wIHdoZW4geW91IGFyZSBwYXVzaW5nIGEgVkFTVCBhZC5cclxuICAgICAqIEByZXR1cm5zIHtwbGF5ZXJ9XHJcbiAgICAgKi9cclxuICAgIHZhciBvcmlnUGF1c2UgPSBwbGF5ZXIucGF1c2U7XHJcbiAgICBwbGF5ZXIucGF1c2UgPSBmdW5jdGlvbiAoY2FsbE9yaWdQYXVzZSkge1xyXG4gICAgICBpZiAoaXNBZFBsYXlpbmcoKSAmJiAhY2FsbE9yaWdQYXVzZSkge1xyXG4gICAgICAgIHBsYXllci52YXN0LmFkVW5pdC5wYXVzZUFkKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3JpZ1BhdXNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5lZWRlZCBtb25rZXkgcGF0Y2ggdG8gaGFuZGxlIHBhdXNlZCBzdGF0ZSBvZiB0aGUgcGxheWVyIHdoZW4gYWRzIGFyZSBwbGF5aW5nLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjYWxsT3JpZ1BsYXkgbmVjZXNzYXJ5IGZsYWcgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wIHdoZW4geW91IGFyZSBwYXVzaW5nIGEgVkFTVCBhZC5cclxuICAgICAqIEByZXR1cm5zIHtwbGF5ZXJ9XHJcbiAgICAgKi9cclxuICAgIHZhciBvcmlnUGF1c2VkID0gcGxheWVyLnBhdXNlZDtcclxuICAgIHBsYXllci5wYXVzZWQgPSBmdW5jdGlvbiAoY2FsbE9yaWdQYXVzZWQpIHtcclxuICAgICAgaWYgKGlzQWRQbGF5aW5nKCkgJiYgIWNhbGxPcmlnUGF1c2VkKSB7XHJcbiAgICAgICAgcmV0dXJuIHBsYXllci52YXN0LmFkVW5pdC5pc1BhdXNlZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBvcmlnUGF1c2VkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNBZFBsYXlpbmcoKSB7XHJcbiAgICByZXR1cm4gcGxheWVyLnZhc3QgJiYgcGxheWVyLnZhc3QuYWRVbml0O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdHJ5VG9UcmlnZ2VyRmlyc3RQbGF5KCkge1xyXG4gICAgaWYgKGlzRmlyc3RQbGF5KCkpIHtcclxuICAgICAgX2ZpcnN0UGxheSA9IGZhbHNlO1xyXG4gICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5maXJzdFBsYXknKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0Rmlyc3RQbGF5KCkge1xyXG4gICAgX2ZpcnN0UGxheSA9IHRydWU7XHJcbiAgICBibGFja1Bvc3Rlci5zaG93KCk7XHJcbiAgICByZXN0b3JlQ29udGVudFZvbHVtZSgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNGaXJzdFBsYXkoKSB7XHJcbiAgICByZXR1cm4gX2ZpcnN0UGxheTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNhdmVWb2x1bWVTbmFwc2hvdCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG11dGVkOiBwbGF5ZXIubXV0ZWQoKSxcclxuICAgICAgdm9sdW1lOiBwbGF5ZXIudm9sdW1lKClcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXN0b3JlQ29udGVudFZvbHVtZSgpIHtcclxuICAgIGlmICh2b2x1bWVTbmFwc2hvdCkge1xyXG4gICAgICBwbGF5ZXIuY3VycmVudFRpbWUoMCk7XHJcbiAgICAgIHJlc3RvcmVWb2x1bWVTbmFwc2hvdCh2b2x1bWVTbmFwc2hvdCk7XHJcbiAgICAgIHZvbHVtZVNuYXBzaG90ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc3RvcmVWb2x1bWVTbmFwc2hvdChzbmFwc2hvdCkge1xyXG4gICAgaWYgKHV0aWxpdGllcy5pc09iamVjdChzbmFwc2hvdCkpIHtcclxuICAgICAgcGxheWVyLnZvbHVtZShzbmFwc2hvdC52b2x1bWUpO1xyXG4gICAgICBwbGF5ZXIubXV0ZWQoc25hcHNob3QubXV0ZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGlkZUJsYWNrUG9zdGVyKCkge1xyXG4gICAgaWYgKCFkb20uaGFzQ2xhc3MoYmxhY2tQb3N0ZXIuZWwoKSwgJ3Zqcy1oaWRkZW4nKSkge1xyXG4gICAgICBibGFja1Bvc3Rlci5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRTdHlsZXMoKSB7XHJcbiAgICBkb20uYWRkQ2xhc3MocGxheWVyLmVsKCksICd2anMtYWQtcGxheWluZycpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlU3R5bGVzKCkge1xyXG4gICAgZG9tLnJlbW92ZUNsYXNzKHBsYXllci5lbCgpLCAndmpzLWFkLXBsYXlpbmcnKTtcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBwb3N0ZXIgYXR0cmlidXRlIGZyb20gdGhlIHZpZGVvIGVsZW1lbnQgdGVjaCwgaWYgcHJlc2VudC4gV2hlblxyXG4gKiByZXVzaW5nIGEgdmlkZW8gZWxlbWVudCBmb3IgbXVsdGlwbGUgdmlkZW9zLCB0aGUgcG9zdGVyIGltYWdlIHdpbGwgYnJpZWZseVxyXG4gKiByZWFwcGVhciB3aGlsZSB0aGUgbmV3IHNvdXJjZSBsb2Fkcy4gUmVtb3ZpbmcgdGhlIGF0dHJpYnV0ZSBhaGVhZCBvZiB0aW1lXHJcbiAqIHByZXZlbnRzIHRoZSBwb3N0ZXIgZnJvbSBzaG93aW5nIHVwIGJldHdlZW4gdmlkZW9zLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcGxheWVyIFRoZSB2aWRlb2pzIHBsYXllciBvYmplY3RcclxuICovXHJcbnBsYXllclV0aWxzLnJlbW92ZU5hdGl2ZVBvc3RlciA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcclxuICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xyXG4gIGlmICh0ZWNoKSB7XHJcbiAgICB0ZWNoLnJlbW92ZUF0dHJpYnV0ZSgncG9zdGVyJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBsaXN0ZW4gdG8gbWFueSBldmVudHMgdW50aWwgb25lIG9mIHRoZW0gZ2V0cyBmaXJlZCwgdGhlbiB3ZVxyXG4gKiBleGVjdXRlIHRoZSBoYW5kbGVyIGFuZCB1bnN1YnNjcmliZSBhbGwgdGhlIGV2ZW50IGxpc3RlbmVycztcclxuICpcclxuICogQHBhcmFtIHBsYXllciBzcGVjaWZpYyBwbGF5ZXIgZnJvbSB3aGVyZSB0byBsaXN0ZW4gZm9yIHRoZSBldmVudHNcclxuICogQHBhcmFtIGV2ZW50cyBhcnJheSBvZiBldmVudHNcclxuICogQHBhcmFtIGhhbmRsZXIgZnVuY3Rpb24gdG8gZXhlY3V0ZSBvbmNlIG9uZSBvZiB0aGUgZXZlbnRzIGZpcmVzXHJcbiAqL1xyXG5wbGF5ZXJVdGlscy5vbmNlID0gZnVuY3Rpb24gb25jZShwbGF5ZXIsIGV2ZW50cywgaGFuZGxlcikge1xyXG4gIGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xyXG4gICAgaGFuZGxlci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG5cclxuICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBwbGF5ZXIub2ZmKGV2ZW50LCBsaXN0ZW5lcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgcGxheWVyLm9uKGV2ZW50LCBsaXN0ZW5lcik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXJVdGlsczsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XHJcblxyXG4vKipcclxuICpcclxuICogSU1QT1JUQU5UIE5PVEU6IFRoaXMgZnVuY3Rpb24gY29tZXMgZnJvbSBhbmd1bGFySnMgYW5kIHdhcyBvcmlnaW5hbGx5IGNhbGxlZCB1cmxSZXNvbHZlXHJcbiAqICAgICAgICAgICAgICAgICB5b3UgY2FuIHRha2UgYSBsb29rIGF0IHRoZSBvcmlnaW5hbCBjb2RlIGhlcmUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iL21hc3Rlci9zcmMvbmcvdXJsVXRpbHMuanNcclxuICpcclxuICogSW1wbGVtZW50YXRpb24gTm90ZXMgZm9yIG5vbi1JRSBicm93c2Vyc1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEFzc2lnbmluZyBhIFVSTCB0byB0aGUgaHJlZiBwcm9wZXJ0eSBvZiBhbiBhbmNob3IgRE9NIG5vZGUsIGV2ZW4gb25lIGF0dGFjaGVkIHRvIHRoZSBET00sXHJcbiAqIHJlc3VsdHMgYm90aCBpbiB0aGUgbm9ybWFsaXppbmcgYW5kIHBhcnNpbmcgb2YgdGhlIFVSTC4gIE5vcm1hbGl6aW5nIG1lYW5zIHRoYXQgYSByZWxhdGl2ZVxyXG4gKiBVUkwgd2lsbCBiZSByZXNvbHZlZCBpbnRvIGFuIGFic29sdXRlIFVSTCBpbiB0aGUgY29udGV4dCBvZiB0aGUgYXBwbGljYXRpb24gZG9jdW1lbnQuXHJcbiAqIFBhcnNpbmcgbWVhbnMgdGhhdCB0aGUgYW5jaG9yIG5vZGUncyBob3N0LCBob3N0bmFtZSwgcHJvdG9jb2wsIHBvcnQsIHBhdGhuYW1lIGFuZCByZWxhdGVkXHJcbiAqIHByb3BlcnRpZXMgYXJlIGFsbCBwb3B1bGF0ZWQgdG8gcmVmbGVjdCB0aGUgbm9ybWFsaXplZCBVUkwuICBUaGlzIGFwcHJvYWNoIGhhcyB3aWRlXHJcbiAqIGNvbXBhdGliaWxpdHkgLSBTYWZhcmkgMSssIE1vemlsbGEgMSssIE9wZXJhIDcrLGUgZXRjLiAgU2VlXHJcbiAqIGh0dHA6Ly93d3cuYXB0YW5hLmNvbS9yZWZlcmVuY2UvaHRtbC9hcGkvSFRNTEFuY2hvckVsZW1lbnQuaHRtbFxyXG4gKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBOb3RlcyBmb3IgSUVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIElFID49IDggYW5kIDw9IDEwIG5vcm1hbGl6ZXMgdGhlIFVSTCB3aGVuIGFzc2lnbmVkIHRvIHRoZSBhbmNob3Igbm9kZSBzaW1pbGFyIHRvIHRoZSBvdGhlclxyXG4gKiBicm93c2Vycy4gIEhvd2V2ZXIsIHRoZSBwYXJzZWQgY29tcG9uZW50cyB3aWxsIG5vdCBiZSBzZXQgaWYgdGhlIFVSTCBhc3NpZ25lZCBkaWQgbm90IHNwZWNpZnlcclxuICogdGhlbS4gIChlLmcuIGlmIHlvdSBhc3NpZ24gYS5ocmVmID0gXCJmb29cIiwgdGhlbiBhLnByb3RvY29sLCBhLmhvc3QsIGV0Yy4gd2lsbCBiZSBlbXB0eS4pICBXZVxyXG4gKiB3b3JrIGFyb3VuZCB0aGF0IGJ5IHBlcmZvcm1pbmcgdGhlIHBhcnNpbmcgaW4gYSAybmQgc3RlcCBieSB0YWtpbmcgYSBwcmV2aW91c2x5IG5vcm1hbGl6ZWRcclxuICogVVJMIChlLmcuIGJ5IGFzc2lnbmluZyB0byBhLmhyZWYpIGFuZCBhc3NpZ25pbmcgaXQgYS5ocmVmIGFnYWluLiAgVGhpcyBjb3JyZWN0bHkgcG9wdWxhdGVzIHRoZVxyXG4gKiBwcm9wZXJ0aWVzIHN1Y2ggYXMgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0LCBldGMuXHJcbiAqXHJcbiAqIElFNyBkb2VzIG5vdCBub3JtYWxpemUgdGhlIFVSTCB3aGVuIGFzc2lnbmVkIHRvIGFuIGFuY2hvciBub2RlLiAgKEFwcGFyZW50bHksIGl0IGRvZXMsIGlmIG9uZVxyXG4gKiB1c2VzIHRoZSBpbm5lciBIVE1MIGFwcHJvYWNoIHRvIGFzc2lnbiB0aGUgVVJMIGFzIHBhcnQgb2YgYW4gSFRNTCBzbmlwcGV0IC1cclxuICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDcyNzI5KSAgSG93ZXZlciwgc2V0dGluZyBpbWdbc3JjXSBkb2VzIG5vcm1hbGl6ZSB0aGUgVVJMLlxyXG4gKiBVbmZvcnR1bmF0ZWx5LCBzZXR0aW5nIGltZ1tzcmNdIHRvIHNvbWV0aGluZyBsaWtlIFwiamF2YXNjcmlwdDpmb29cIiBvbiBJRSB0aHJvd3MgYW4gZXhjZXB0aW9uLlxyXG4gKiBTaW5jZSB0aGUgcHJpbWFyeSB1c2FnZSBmb3Igbm9ybWFsaXppbmcgVVJMcyBpcyB0byBzYW5pdGl6ZSBzdWNoIFVSTHMsIHdlIGNhbid0IHVzZSB0aGF0XHJcbiAqIG1ldGhvZCBhbmQgSUUgPCA4IGlzIHVuc3VwcG9ydGVkLlxyXG4gKlxyXG4gKiBSZWZlcmVuY2VzOlxyXG4gKiAgIGh0dHA6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxBbmNob3JFbGVtZW50XHJcbiAqICAgaHR0cDovL3d3dy5hcHRhbmEuY29tL3JlZmVyZW5jZS9odG1sL2FwaS9IVE1MQW5jaG9yRWxlbWVudC5odG1sXHJcbiAqICAgaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXHJcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9wdWxsLzI5MDJcclxuICogICBodHRwOi8vamFtZXMucGFkb2xzZXkuY29tL2phdmFzY3JpcHQvcGFyc2luZy11cmxzLXdpdGgtdGhlLWRvbS9cclxuICpcclxuICogQGtpbmQgZnVuY3Rpb25cclxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZC5cclxuICogQGRlc2NyaXB0aW9uIE5vcm1hbGl6ZXMgYW5kIHBhcnNlcyBhIFVSTC5cclxuICogQHJldHVybnMge29iamVjdH0gUmV0dXJucyB0aGUgbm9ybWFsaXplZCBVUkwgYXMgYSBkaWN0aW9uYXJ5LlxyXG4gKlxyXG4gKiAgIHwgbWVtYmVyIG5hbWUgICB8IERlc2NyaXB0aW9uICAgIHxcclxuICogICB8LS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS18XHJcbiAqICAgfCBocmVmICAgICAgICAgIHwgQSBub3JtYWxpemVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIFVSTCBpZiBpdCB3YXMgbm90IGFuIGFic29sdXRlIFVSTCB8XHJcbiAqICAgfCBwcm90b2NvbCAgICAgIHwgVGhlIHByb3RvY29sIGluY2x1ZGluZyB0aGUgdHJhaWxpbmcgY29sb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICAgfCBob3N0ICAgICAgICAgIHwgVGhlIGhvc3QgYW5kIHBvcnQgKGlmIHRoZSBwb3J0IGlzIG5vbi1kZWZhdWx0KSBvZiB0aGUgbm9ybWFsaXplZFVybCAgICB8XHJcbiAqICAgfCBzZWFyY2ggICAgICAgIHwgVGhlIHNlYXJjaCBwYXJhbXMsIG1pbnVzIHRoZSBxdWVzdGlvbiBtYXJrICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICAgfCBoYXNoICAgICAgICAgIHwgVGhlIGhhc2ggc3RyaW5nLCBtaW51cyB0aGUgaGFzaCBzeW1ib2xcclxuICogICB8IGhvc3RuYW1lICAgICAgfCBUaGUgaG9zdG5hbWVcclxuICogICB8IHBvcnQgICAgICAgICAgfCBUaGUgcG9ydCwgd2l0aG91dCBcIjpcIlxyXG4gKiAgIHwgcGF0aG5hbWUgICAgICB8IFRoZSBwYXRobmFtZSwgYmVnaW5uaW5nIHdpdGggXCIvXCJcclxuICpcclxuICovXHJcblxyXG52YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuLyoqXHJcbiAqIGRvY3VtZW50TW9kZSBpcyBhbiBJRS1vbmx5IHByb3BlcnR5XHJcbiAqIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9jYzE5Njk4OCh2PXZzLjg1KS5hc3B4XHJcbiAqL1xyXG52YXIgbXNpZSA9IGRvY3VtZW50LmRvY3VtZW50TW9kZTtcclxuXHJcbmZ1bmN0aW9uIHVybFBhcnRzKHVybCkge1xyXG4gIHZhciBocmVmID0gdXJsO1xyXG5cclxuICBpZiAobXNpZSkge1xyXG4gICAgLy8gTm9ybWFsaXplIGJlZm9yZSBwYXJzZS4gIFJlZmVyIEltcGxlbWVudGF0aW9uIE5vdGVzIG9uIHdoeSB0aGlzIGlzXHJcbiAgICAvLyBkb25lIGluIHR3byBzdGVwcyBvbiBJRS5cclxuICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XHJcbiAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcclxuICB9XHJcblxyXG4gIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xyXG5cclxuICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXHJcbiAgcmV0dXJuIHtcclxuICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXHJcbiAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxyXG4gICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcclxuICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcclxuICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXHJcbiAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXHJcbiAgICBwb3J0OiB1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyh1cmxQYXJzaW5nTm9kZS5wb3J0KT8gdXJsUGFyc2luZ05vZGUucG9ydDogODAsXHJcbiAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKVxyXG4gICAgICA/IHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXHJcbiAgICAgIDogJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcclxuICB9O1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhIHF1ZXJ5IHN0cmluZyAoc2VhcmNoIHBhcnQgb2YgYSB1cmwpIGFuZCByZXR1cm5zIGEgZGljdGlvbmFyeSB3aXRoXHJcbiAqIHRoZSBkaWZmZXJlbnQga2V5IHZhbHVlIHBhaXJzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBxcyBxdWVyeVN0cmluZ1xyXG4gKi9cclxuZnVuY3Rpb24gcXVlcnlTdHJpbmdUb09iaihxcywgY29uZCkge1xyXG4gIHZhciBwYWlycywgcXNPYmo7XHJcblxyXG4gIGNvbmQgPSB1dGlsaXRpZXMuaXNGdW5jdGlvbihjb25kKT8gY29uZCA6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxuXHJcbiAgcXMgPSBxcy50cmltKCkucmVwbGFjZSgvXlxcPy8sICcnKTtcclxuICBwYWlycyA9IHFzLnNwbGl0KCcmJyk7XHJcbiAgcXNPYmogPSB7fTtcclxuXHJcbiAgdXRpbGl0aWVzLmZvckVhY2gocGFpcnMsIGZ1bmN0aW9uIChwYWlyKSB7XHJcbiAgICB2YXIga2V5VmFsdWUsIGtleSwgdmFsdWU7XHJcbiAgICBpZiAocGFpciAhPT0gJycpIHtcclxuICAgICAga2V5VmFsdWUgPSBwYWlyLnNwbGl0KCc9Jyk7XHJcbiAgICAgIGtleSA9IGtleVZhbHVlWzBdO1xyXG4gICAgICB2YWx1ZSA9IGtleVZhbHVlWzFdO1xyXG4gICAgICBpZihjb25kKGtleSwgdmFsdWUpKXtcclxuICAgICAgICBxc09ialtrZXldID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHFzT2JqO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuIG9iamVjdCBhbmQgc2VyaWFsaXplcyBpdCBpbnRvIGEgcXVlcnkgc3RyaW5nIHdpdGhvdXQgdGhlIGxlYWRpbmcgJz8nXHJcbiAqIEBwYXJhbSBvYmpcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmZ1bmN0aW9uIG9ialRvUXVlcnlTdHJpbmcob2JqKSB7XHJcbiAgdmFyIHBhaXJzID0gW107XHJcbiAgdXRpbGl0aWVzLmZvckVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgcGFpcnMucHVzaChrZXkgKyAnPScgKyB2YWx1ZSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgdXJsUGFydHM6IHVybFBhcnRzLFxyXG4gIHF1ZXJ5U3RyaW5nVG9PYmo6IHF1ZXJ5U3RyaW5nVG9PYmosXHJcbiAgb2JqVG9RdWVyeVN0cmluZzogb2JqVG9RdWVyeVN0cmluZ1xyXG59O1xyXG4iLCIvKmpzaGludCB1bnVzZWQ6ZmFsc2UgKi9cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgTk9ERV9UWVBFX0VMRU1FTlQgPSAxO1xyXG52YXIgU05BS0VfQ0FTRV9SRUdFWFAgPSAvW0EtWl0vZztcclxudmFyIEVNQUlMX1JFR0VYUCA9IC9eW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykrJC9pO1xyXG4vKmpzbGludCBtYXhsZW46IDUwMCAqL1xyXG52YXIgSVNPODA4Nl9SRUdFWFAgPSAvXihbXFwrLV0/XFxkezR9KD8hXFxkezJ9XFxiKSkoKC0/KSgoMFsxLTldfDFbMC0yXSkoXFwzKFsxMl1cXGR8MFsxLTldfDNbMDFdKSk/fFcoWzAtNF1cXGR8NVswLTJdKSgtP1sxLTddKT98KDAwWzEtOV18MFsxLTldXFxkfFsxMl1cXGR7Mn18MyhbMC01XVxcZHw2WzEtNl0pKSkoW1RcXHNdKCgoWzAxXVxcZHwyWzAtM10pKCg6PylbMC01XVxcZCk/fDI0XFw6PzAwKShbXFwuLF1cXGQrKD8hOikpPyk/KFxcMTdbMC01XVxcZChbXFwuLF1cXGQrKT8pPyhbelpdfChbXFwrLV0pKFswMV1cXGR8MlswLTNdKTo/KFswLTVdXFxkKT8pPyk/KT8kLztcclxuXHJcblxyXG5mdW5jdGlvbiBub29wKCl7IH1cclxuXHJcbmZ1bmN0aW9uIGlzTnVsbChvKSB7XHJcbiAgcmV0dXJuIG8gPT09IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRGVmaW5lZChvKXtcclxuICByZXR1cm4gbyAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvKXtcclxuICByZXR1cm4gbyA9PT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcclxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24oc3RyKXtcclxuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNOdW1iZXIobnVtKXtcclxuICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzV2luZG93KG9iaikge1xyXG4gIHJldHVybiB1dGlsaXRpZXMuaXNPYmplY3Qob2JqKSAmJiBvYmoud2luZG93ID09PSBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQXJyYXkoYXJyYXkpe1xyXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIGFycmF5ICkgPT09ICdbb2JqZWN0IEFycmF5XSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKG9iaikge1xyXG4gIGlmIChvYmogPT09IG51bGwgfHwgdXRpbGl0aWVzLmlzV2luZG93KG9iaikgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24ob2JqKSB8fCB1dGlsaXRpZXMuaXNVbmRlZmluZWQob2JqKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdmFyIGxlbmd0aCA9IG9iai5sZW5ndGg7XHJcblxyXG4gIGlmIChvYmoubm9kZVR5cGUgPT09IE5PREVfVFlQRV9FTEVNRU5UICYmIGxlbmd0aCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdXRpbGl0aWVzLmlzU3RyaW5nKG9iaikgfHwgdXRpbGl0aWVzLmlzQXJyYXkob2JqKSB8fCBsZW5ndGggPT09IDAgfHxcclxuICAgIHR5cGVvZiBsZW5ndGggPT09ICdudW1iZXInICYmIGxlbmd0aCA+IDAgJiYgKGxlbmd0aCAtIDEpIGluIG9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTdHJpbmcoc3RyKXtcclxuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRW1wdHlTdHJpbmcoc3RyKSB7XHJcbiAgcmV0dXJuIHV0aWxpdGllcy5pc1N0cmluZyhzdHIpICYmIHN0ci5sZW5ndGggPT09IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTm90RW1wdHlTdHJpbmcoc3RyKSB7XHJcbiAgcmV0dXJuIHV0aWxpdGllcy5pc1N0cmluZyhzdHIpICYmIHN0ci5sZW5ndGggIT09IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFycmF5TGlrZU9ialRvQXJyYXkoYXJncykge1xyXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XHJcbiAgdmFyIGtleSwgbGVuZ3RoO1xyXG4gIGlmIChvYmopIHtcclxuICAgIGlmIChpc0Z1bmN0aW9uKG9iaikpIHtcclxuICAgICAgZm9yIChrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgLy8gTmVlZCB0byBjaGVjayBpZiBoYXNPd25Qcm9wZXJ0eSBleGlzdHMsXHJcbiAgICAgICAgLy8gYXMgb24gSUU4IHRoZSByZXN1bHQgb2YgcXVlcnlTZWxlY3RvckFsbCBpcyBhbiBvYmplY3Qgd2l0aG91dCBhIGhhc093blByb3BlcnR5IGZ1bmN0aW9uXHJcbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb3RvdHlwZScgJiYga2V5ICE9PSAnbGVuZ3RoJyAmJiBrZXkgIT09ICduYW1lJyAmJiAoIW9iai5oYXNPd25Qcm9wZXJ0eSB8fCBvYmouaGFzT3duUHJvcGVydHkoa2V5KSkpIHtcclxuICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleV0sIGtleSwgb2JqKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgIHZhciBpc1ByaW1pdGl2ZSA9IHR5cGVvZiBvYmogIT09ICdvYmplY3QnO1xyXG4gICAgICBmb3IgKGtleSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGtleSA8IGxlbmd0aDsga2V5KyspIHtcclxuICAgICAgICBpZiAoaXNQcmltaXRpdmUgfHwga2V5IGluIG9iaikge1xyXG4gICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChvYmouZm9yRWFjaCAmJiBvYmouZm9yRWFjaCAhPT0gZm9yRWFjaCkge1xyXG4gICAgICBvYmouZm9yRWFjaChpdGVyYXRvciwgY29udGV4dCwgb2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAoa2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzbmFrZV9jYXNlKG5hbWUsIHNlcGFyYXRvcikge1xyXG4gIHNlcGFyYXRvciA9IHNlcGFyYXRvciB8fCAnXyc7XHJcbiAgcmV0dXJuIG5hbWUucmVwbGFjZShTTkFLRV9DQVNFX1JFR0VYUCwgZnVuY3Rpb24obGV0dGVyLCBwb3MpIHtcclxuICAgIHJldHVybiAocG9zID8gc2VwYXJhdG9yIDogJycpICsgbGV0dGVyLnRvTG93ZXJDYXNlKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWRFbWFpbChlbWFpbCl7XHJcbiAgaWYoIXV0aWxpdGllcy5pc1N0cmluZyhlbWFpbCkpe1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIEVNQUlMX1JFR0VYUC50ZXN0KGVtYWlsLnRyaW0oKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4dGVuZCAob2JqKSB7XHJcbiAgdmFyIGFyZywgaSwgaztcclxuICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBhcmcgPSBhcmd1bWVudHNbaV07XHJcbiAgICBmb3IgKGsgaW4gYXJnKSB7XHJcbiAgICAgIGlmIChhcmcuaGFzT3duUHJvcGVydHkoaykpIHtcclxuICAgICAgICBpZihpc09iamVjdChvYmpba10pICYmICFpc051bGwob2JqW2tdKSAmJiBpc09iamVjdChhcmdba10pKXtcclxuICAgICAgICAgIG9ialtrXSA9IGV4dGVuZCh7fSwgb2JqW2tdLCBhcmdba10pO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgIG9ialtrXSA9IGFyZ1trXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzKXtcclxuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlY2FwaXRhbGl6ZShzKSB7XHJcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBtZXRob2Qgd29ya3MgdGhlIHNhbWUgd2F5IGFycmF5LnByb3RvdHlwZS5tYXAgd29ya3MgYnV0IGlmIHRoZSB0cmFuc2Zvcm1lciByZXR1cm5zIHVuZGVmaW5lLCB0aGVuXHJcbiAqIGl0IHdvbid0IGJlIGFkZGVkIHRvIHRoZSB0cmFuc2Zvcm1lZCBBcnJheS5cclxuICovXHJcbmZ1bmN0aW9uIHRyYW5zZm9ybUFycmF5KGFycmF5LCB0cmFuc2Zvcm1lcikge1xyXG4gIHZhciB0cmFuc2Zvcm1lZEFycmF5ID0gW107XHJcblxyXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaW5kZXgpe1xyXG4gICAgdmFyIHRyYW5zZm9ybWVkSXRlbSA9IHRyYW5zZm9ybWVyKGl0ZW0sIGluZGV4KTtcclxuICAgIGlmKHV0aWxpdGllcy5pc0RlZmluZWQodHJhbnNmb3JtZWRJdGVtKSkge1xyXG4gICAgICB0cmFuc2Zvcm1lZEFycmF5LnB1c2godHJhbnNmb3JtZWRJdGVtKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHRyYW5zZm9ybWVkQXJyYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvRml4ZWREaWdpdHMobnVtLCBkaWdpdHMpIHtcclxuICB2YXIgZm9ybWF0dGVkTnVtID0gbnVtICsgJyc7XHJcbiAgZGlnaXRzID0gdXRpbGl0aWVzLmlzTnVtYmVyKGRpZ2l0cykgPyBkaWdpdHMgOiAwO1xyXG4gIG51bSA9IHV0aWxpdGllcy5pc051bWJlcihudW0pID8gbnVtIDogcGFyc2VJbnQobnVtLCAxMCk7XHJcbiAgaWYodXRpbGl0aWVzLmlzTnVtYmVyKG51bSkgJiYgIWlzTmFOKG51bSkpe1xyXG4gICAgZm9ybWF0dGVkTnVtID0gbnVtICsgJyc7XHJcbiAgICB3aGlsZShmb3JtYXR0ZWROdW0ubGVuZ3RoIDwgZGlnaXRzKSB7XHJcbiAgICAgIGZvcm1hdHRlZE51bSA9ICcwJyArIGZvcm1hdHRlZE51bTtcclxuICAgIH1cclxuICAgIHJldHVybiBmb3JtYXR0ZWROdW07XHJcbiAgfVxyXG4gIHJldHVybiBOYU4gKyAnJztcclxufVxyXG5cclxuZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2ssIGRlbGF5KSB7XHJcbiAgdmFyIHByZXZpb3VzQ2FsbCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gKGRlbGF5ICsgMSk7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGlmICgodGltZSAtIHByZXZpb3VzQ2FsbCkgPj0gZGVsYXkpIHtcclxuICAgICAgcHJldmlvdXNDYWxsID0gdGltZTtcclxuICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWJvdW5jZSAoY2FsbGJhY2ssIHdhaXQpIHtcclxuICB2YXIgdGltZW91dElkO1xyXG5cclxuICByZXR1cm4gZnVuY3Rpb24gKCl7XHJcbiAgICBpZih0aW1lb3V0SWQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgICB9XHJcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIHRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcclxuICAgIH0sIHdhaXQpO1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIGEgZnVuY3Rpb24gZGVzaWduZWQgdG8gYmxvdyB1cCB0aGUgc3RhY2sgaW4gYSBuYWl2ZSB3YXlcclxuLy8gYnV0IGl0IGlzIG9rIGZvciB2aWRlb0pzIGNoaWxkcmVuIGNvbXBvbmVudHNcclxuZnVuY3Rpb24gdHJlZVNlYXJjaChyb290LCBnZXRDaGlsZHJlbiwgZm91bmQpe1xyXG4gIHZhciBjaGlsZHJlbiA9IGdldENoaWxkcmVuKHJvb3QpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xyXG4gICAgaWYgKGZvdW5kKGNoaWxkcmVuW2ldKSkge1xyXG4gICAgICByZXR1cm4gY2hpbGRyZW5baV07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdmFyIGVsID0gdHJlZVNlYXJjaChjaGlsZHJlbltpXSwgZ2V0Q2hpbGRyZW4sIGZvdW5kKTtcclxuICAgICAgaWYgKGVsKXtcclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVjaG9Gbih2YWwpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9O1xyXG59XHJcblxyXG4vL05vdGU6IFN1cHBvcnRlZCBmb3JtYXRzIGNvbWUgZnJvbSBodHRwOi8vd3d3LnczLm9yZy9UUi9OT1RFLWRhdGV0aW1lXHJcbi8vIGFuZCB0aGUgaXNvODYwMSByZWdleCBjb21lcyBmcm9tIGh0dHA6Ly93d3cucGVsYWdvZGVzaWduLmNvbS9ibG9nLzIwMDkvMDUvMjAvaXNvLTg2MDEtZGF0ZS12YWxpZGF0aW9uLXRoYXQtZG9lc250LXN1Y2svXHJcbmZ1bmN0aW9uIGlzSVNPODYwMSh2YWx1ZSkge1xyXG4gIGlmKHV0aWxpdGllcy5pc051bWJlcih2YWx1ZSkpe1xyXG4gICAgdmFsdWUgPSB2YWx1ZSArICcnOyAgLy93ZSBtYWtlIHN1cmUgdGhhdCB3ZSBhcmUgd29ya2luZyB3aXRoIHN0cmluZ3NcclxuICB9XHJcblxyXG4gIGlmKCF1dGlsaXRpZXMuaXNTdHJpbmcodmFsdWUpKXtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBJU084MDg2X1JFR0VYUC50ZXN0KHZhbHVlLnRyaW0oKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgdGhlIEJyb3dzZXIgaXMgSUU5IGFuZCBiZWxvd1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzT2xkSUUoKSB7XHJcbiAgdmFyIHZlcnNpb24gPSB1dGlsaXRpZXMuZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24obmF2aWdhdG9yKTtcclxuICBpZiAodmVyc2lvbiA9PT0gLTEpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB2ZXJzaW9uIDwgMTA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSB2ZXJzaW9uIG9mIEludGVybmV0IEV4cGxvcmVyIG9yIGEgLTEgKGluZGljYXRpbmcgdGhlIHVzZSBvZiBhbm90aGVyIGJyb3dzZXIpLlxyXG4gKiBTb3VyY2U6IGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1Mzc1MDkodj12cy44NSkuYXNweFxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgdmVyc2lvbiBvZiBJbnRlcm5ldCBFeHBsb3JlciBvciBhIC0xIChpbmRpY2F0aW5nIHRoZSB1c2Ugb2YgYW5vdGhlciBicm93c2VyKS5cclxuICovXHJcbmZ1bmN0aW9uIGdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uKG5hdmlnYXRvcikge1xyXG4gIHZhciBydiA9IC0xO1xyXG5cclxuICBpZiAobmF2aWdhdG9yLmFwcE5hbWUgPT0gJ01pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlcicpIHtcclxuICAgIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiTVNJRSAoWzAtOV17MSx9W1xcLjAtOV17MCx9KVwiKTtcclxuICAgIHZhciByZXMgPSByZS5leGVjKHVhKTtcclxuICAgIGlmIChyZXMgIT09IG51bGwpIHtcclxuICAgICAgcnYgPSBwYXJzZUZsb2F0KHJlc1sxXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcnY7XHJcbn1cclxuXHJcbi8qKiogTW9iaWxlIFV0aWxpdHkgZnVuY3Rpb25zICoqKi9cclxuZnVuY3Rpb24gaXNJRGV2aWNlKCkge1xyXG4gIHJldHVybiAvaVAoaG9uZXxhZCkvLnRlc3QodXRpbGl0aWVzLl9VQSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTW9iaWxlKCkge1xyXG4gIHJldHVybiAvaVAoaG9uZXxhZHxvZCl8QW5kcm9pZHxXaW5kb3dzIFBob25lLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0lQaG9uZSgpIHtcclxuICByZXR1cm4gL2lQKGhvbmV8b2QpLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FuZHJvaWQoKSB7XHJcbiAgcmV0dXJuIC9BbmRyb2lkLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xyXG59XHJcblxyXG52YXIgdXRpbGl0aWVzID0ge1xyXG4gIF9VQTogbmF2aWdhdG9yLnVzZXJBZ2VudCxcclxuICBub29wOiBub29wLFxyXG4gIGlzTnVsbDogaXNOdWxsLFxyXG4gIGlzRGVmaW5lZDogaXNEZWZpbmVkLFxyXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcclxuICBpc09iamVjdDogaXNPYmplY3QsXHJcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcclxuICBpc051bWJlcjogaXNOdW1iZXIsXHJcbiAgaXNXaW5kb3c6IGlzV2luZG93LFxyXG4gIGlzQXJyYXk6IGlzQXJyYXksXHJcbiAgaXNBcnJheUxpa2U6IGlzQXJyYXlMaWtlLFxyXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcclxuICBpc0VtcHR5U3RyaW5nOiBpc0VtcHR5U3RyaW5nLFxyXG4gIGlzTm90RW1wdHlTdHJpbmc6IGlzTm90RW1wdHlTdHJpbmcsXHJcbiAgYXJyYXlMaWtlT2JqVG9BcnJheTogYXJyYXlMaWtlT2JqVG9BcnJheSxcclxuICBmb3JFYWNoOiBmb3JFYWNoLFxyXG4gIHNuYWtlX2Nhc2U6IHNuYWtlX2Nhc2UsXHJcbiAgaXNWYWxpZEVtYWlsOiBpc1ZhbGlkRW1haWwsXHJcbiAgZXh0ZW5kOiBleHRlbmQsXHJcbiAgY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZSxcclxuICBkZWNhcGl0YWxpemU6IGRlY2FwaXRhbGl6ZSxcclxuICB0cmFuc2Zvcm1BcnJheTogdHJhbnNmb3JtQXJyYXksXHJcbiAgdG9GaXhlZERpZ2l0czogdG9GaXhlZERpZ2l0cyxcclxuICB0aHJvdHRsZTogdGhyb3R0bGUsXHJcbiAgZGVib3VuY2U6IGRlYm91bmNlLFxyXG4gIHRyZWVTZWFyY2g6IHRyZWVTZWFyY2gsXHJcbiAgZWNob0ZuOiBlY2hvRm4sXHJcbiAgaXNJU084NjAxOiBpc0lTTzg2MDEsXHJcbiAgaXNPbGRJRTogaXNPbGRJRSxcclxuICBnZXRJbnRlcm5ldEV4cGxvcmVyVmVyc2lvbjogZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24sXHJcbiAgaXNJRGV2aWNlOiBpc0lEZXZpY2UsXHJcbiAgaXNNb2JpbGU6IGlzTW9iaWxlLFxyXG4gIGlzSVBob25lOiBpc0lQaG9uZSxcclxuICBpc0FuZHJvaWQ6IGlzQW5kcm9pZFxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB1dGlsaXRpZXM7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxudmFyIHhtbCA9IHt9O1xyXG5cclxueG1sLnN0clRvWE1MRG9jID0gZnVuY3Rpb24gc3RyVG9YTUxEb2Moc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSl7XHJcbiAgLy9JRSA4XHJcbiAgaWYodHlwZW9mIHdpbmRvdy5ET01QYXJzZXIgPT09ICd1bmRlZmluZWQnKXtcclxuICAgIHZhciB4bWxEb2N1bWVudCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MRE9NJyk7XHJcbiAgICB4bWxEb2N1bWVudC5hc3luYyA9IGZhbHNlO1xyXG4gICAgeG1sRG9jdW1lbnQubG9hZFhNTChzdHJpbmdDb250YWluaW5nWE1MU291cmNlKTtcclxuICAgIHJldHVybiB4bWxEb2N1bWVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiBwYXJzZVN0cmluZyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlKTtcclxuXHJcbiAgZnVuY3Rpb24gcGFyc2VTdHJpbmcoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSl7XHJcbiAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG4gICAgdmFyIHBhcnNlZERvY3VtZW50O1xyXG5cclxuICAgIC8vTm90ZTogVGhpcyB0cnkgY2F0Y2ggaXMgdG8gZGVhbCB3aXRoIHRoZSBmYWN0IHRoYXQgb24gSUUgcGFyc2VyLnBhcnNlRnJvbVN0cmluZyBkb2VzIHRocm93IGFuIGVycm9yIGJ1dCB0aGUgcmVzdCBvZiB0aGUgYnJvd3NlcnMgZG9uJ3QuXHJcbiAgICB0cnkge1xyXG4gICAgICBwYXJzZWREb2N1bWVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSwgXCJhcHBsaWNhdGlvbi94bWxcIik7XHJcblxyXG4gICAgICBpZihpc1BhcnNlRXJyb3IocGFyc2VkRG9jdW1lbnQpIHx8IHV0aWxpdGllcy5pc0VtcHR5U3RyaW5nKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UpKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfWNhdGNoKGUpe1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ4bWwuc3RyVG9YTUxET0M6IEVycm9yIHBhcnNpbmcgdGhlIHN0cmluZzogJ1wiICsgc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSArIFwiJ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFyc2VkRG9jdW1lbnQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc1BhcnNlRXJyb3IocGFyc2VkRG9jdW1lbnQpIHtcclxuICAgIHRyeSB7IC8vIHBhcnNlciBhbmQgcGFyc2VyZXJyb3JOUyBjb3VsZCBiZSBjYWNoZWQgb24gc3RhcnR1cCBmb3IgZWZmaWNpZW5jeVxyXG4gICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpLFxyXG4gICAgICAgIGVycm9uZW91c1BhcnNlID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZygnSU5WQUxJRCcsICd0ZXh0L3htbCcpLFxyXG4gICAgICAgIHBhcnNlcmVycm9yTlMgPSBlcnJvbmVvdXNQYXJzZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpWzBdLm5hbWVzcGFjZVVSSTtcclxuXHJcbiAgICAgIGlmIChwYXJzZXJlcnJvck5TID09PSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcpIHtcclxuICAgICAgICAvLyBJbiBQaGFudG9tSlMgdGhlIHBhcnNlZXJyb3IgZWxlbWVudCBkb2Vzbid0IHNlZW0gdG8gaGF2ZSBhIHNwZWNpYWwgbmFtZXNwYWNlLCBzbyB3ZSBhcmUganVzdCBndWVzc2luZyBoZXJlIDooXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlZERvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RoID4gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHBhcnNlZERvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lTlMocGFyc2VyZXJyb3JOUywgJ3BhcnNlcmVycm9yJykubGVuZ3RoID4gMDtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgLy9Ob3RlIG9uIElFIHBhcnNlU3RyaW5nIHRocm93cyBhbiBlcnJvciBieSBpdHNlbGYgYW5kIGl0IHdpbGwgbmV2ZXIgcmVhY2ggdGhpcyBjb2RlLiBCZWNhdXNlIGl0IHdpbGwgaGF2ZSBmYWlsZWQgYmVmb3JlXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxueG1sLnBhcnNlVGV4dCA9IGZ1bmN0aW9uIHBhcnNlVGV4dCAoc1ZhbHVlKSB7XHJcbiAgaWYgKC9eXFxzKiQvLnRlc3Qoc1ZhbHVlKSkgeyByZXR1cm4gbnVsbDsgfVxyXG4gIGlmICgvXig/OnRydWV8ZmFsc2UpJC9pLnRlc3Qoc1ZhbHVlKSkgeyByZXR1cm4gc1ZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IFwidHJ1ZVwiOyB9XHJcbiAgaWYgKGlzRmluaXRlKHNWYWx1ZSkpIHsgcmV0dXJuIHBhcnNlRmxvYXQoc1ZhbHVlKTsgfVxyXG4gIGlmICh1dGlsaXRpZXMuaXNJU084NjAxKHNWYWx1ZSkpIHsgcmV0dXJuIG5ldyBEYXRlKHNWYWx1ZSk7IH1cclxuICByZXR1cm4gc1ZhbHVlLnRyaW0oKTtcclxufTtcclxuXHJcbnhtbC5KWE9OVHJlZSA9IGZ1bmN0aW9uIEpYT05UcmVlIChvWE1MUGFyZW50KSB7XHJcbiAgdmFyIHBhcnNlVGV4dCA9IHhtbC5wYXJzZVRleHQ7XHJcblxyXG4gIC8vVGhlIGRvY3VtZW50IG9iamVjdCBpcyBhbiBlc3BlY2lhbCBvYmplY3QgdGhhdCBpdCBtYXkgbWlzcyBzb21lIGZ1bmN0aW9ucyBvciBhdHRycyBkZXBlbmRpbmcgb24gdGhlIGJyb3dzZXIuXHJcbiAgLy9UbyBwcmV2ZW50IHRoaXMgcHJvYmxlbSB3aXRoIGNyZWF0ZSB0aGUgSlhPTlRyZWUgdXNpbmcgdGhlIHJvb3QgY2hpbGROb2RlIHdoaWNoIGlzIGEgZnVsbHkgZmxlc2hlZCBub2RlIG9uIGFsbCBzdXBwb3J0ZWRcclxuICAvL2Jyb3dzZXJzLlxyXG4gIGlmKG9YTUxQYXJlbnQuZG9jdW1lbnRFbGVtZW50KXtcclxuICAgIHJldHVybiBuZXcgeG1sLkpYT05UcmVlKG9YTUxQYXJlbnQuZG9jdW1lbnRFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGlmIChvWE1MUGFyZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgdmFyIHNDb2xsZWN0ZWRUeHQgPSBcIlwiO1xyXG4gICAgZm9yICh2YXIgb05vZGUsIHNQcm9wLCB2Q29udGVudCwgbkl0ZW0gPSAwOyBuSXRlbSA8IG9YTUxQYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7IG5JdGVtKyspIHtcclxuICAgICAgb05vZGUgPSBvWE1MUGFyZW50LmNoaWxkTm9kZXMuaXRlbShuSXRlbSk7XHJcbiAgICAgIC8qanNoaW50IGJpdHdpc2U6IGZhbHNlKi9cclxuICAgICAgaWYgKChvTm9kZS5ub2RlVHlwZSAtIDEgfCAxKSA9PT0gMykgeyBzQ29sbGVjdGVkVHh0ICs9IG9Ob2RlLm5vZGVUeXBlID09PSAzID8gb05vZGUubm9kZVZhbHVlLnRyaW0oKSA6IG9Ob2RlLm5vZGVWYWx1ZTsgfVxyXG4gICAgICBlbHNlIGlmIChvTm9kZS5ub2RlVHlwZSA9PT0gMSAmJiAhb05vZGUucHJlZml4KSB7XHJcbiAgICAgICAgc1Byb3AgPSB1dGlsaXRpZXMuZGVjYXBpdGFsaXplKG9Ob2RlLm5vZGVOYW1lKTtcclxuICAgICAgICB2Q29udGVudCA9IG5ldyB4bWwuSlhPTlRyZWUob05vZGUpO1xyXG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHNQcm9wKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXNbc1Byb3BdLmNvbnN0cnVjdG9yICE9PSBBcnJheSkgeyB0aGlzW3NQcm9wXSA9IFt0aGlzW3NQcm9wXV07IH1cclxuICAgICAgICAgIHRoaXNbc1Byb3BdLnB1c2godkNvbnRlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7IHRoaXNbc1Byb3BdID0gdkNvbnRlbnQ7IH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNDb2xsZWN0ZWRUeHQpIHsgdGhpcy5rZXlWYWx1ZSA9IHBhcnNlVGV4dChzQ29sbGVjdGVkVHh0KTsgfVxyXG4gIH1cclxuXHJcbiAgLy9JRTggU3R1cGlkIGZpeFxyXG4gIHZhciBoYXNBdHRyID0gdHlwZW9mIG9YTUxQYXJlbnQuaGFzQXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCc/IG9YTUxQYXJlbnQuYXR0cmlidXRlcy5sZW5ndGggPiAwOiBvWE1MUGFyZW50Lmhhc0F0dHJpYnV0ZXMoKTtcclxuICBpZiAoaGFzQXR0cikge1xyXG4gICAgdmFyIG9BdHRyaWI7XHJcbiAgICBmb3IgKHZhciBuQXR0cmliID0gMDsgbkF0dHJpYiA8IG9YTUxQYXJlbnQuYXR0cmlidXRlcy5sZW5ndGg7IG5BdHRyaWIrKykge1xyXG4gICAgICBvQXR0cmliID0gb1hNTFBhcmVudC5hdHRyaWJ1dGVzLml0ZW0obkF0dHJpYik7XHJcbiAgICAgIHRoaXNbXCJAXCIgKyB1dGlsaXRpZXMuZGVjYXBpdGFsaXplKG9BdHRyaWIubmFtZSldID0gcGFyc2VUZXh0KG9BdHRyaWIudmFsdWUudHJpbSgpKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG54bWwuSlhPTlRyZWUucHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbihhdHRyKSB7XHJcbiAgcmV0dXJuIHRoaXNbJ0AnICsgdXRpbGl0aWVzLmRlY2FwaXRhbGl6ZShhdHRyKV07XHJcbn07XHJcblxyXG54bWwudG9KWE9OVHJlZSA9IGZ1bmN0aW9uIHRvSlhPTlRyZWUoeG1sU3RyaW5nKXtcclxuICB2YXIgeG1sRG9jID0geG1sLnN0clRvWE1MRG9jKHhtbFN0cmluZyk7XHJcbiAgcmV0dXJuIG5ldyB4bWwuSlhPTlRyZWUoeG1sRG9jKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gZXh0cmFjdCB0aGUga2V5dmFsdWUgb2YgYSBKWE9OVHJlZSBvYmpcclxuICpcclxuICogQHBhcmFtIHhtbE9iaiB7SlhPTlRyZWV9XHJcbiAqIHJldHVybiB0aGUga2V5IHZhbHVlIG9yIHVuZGVmaW5lZDtcclxuICovXHJcbnhtbC5rZXlWYWx1ZSA9IGZ1bmN0aW9uIGdldEtleVZhbHVlKHhtbE9iaikge1xyXG4gIGlmKHhtbE9iail7XHJcbiAgICByZXR1cm4geG1sT2JqLmtleVZhbHVlO1xyXG4gIH1cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59O1xyXG5cclxueG1sLmF0dHIgPSBmdW5jdGlvbiBnZXRBdHRyVmFsdWUoeG1sT2JqLCBhdHRyKSB7XHJcbiAgaWYoeG1sT2JqKSB7XHJcbiAgICByZXR1cm4geG1sT2JqWydAJyArIHV0aWxpdGllcy5kZWNhcGl0YWxpemUoYXR0cildO1xyXG4gIH1cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59O1xyXG5cclxueG1sLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZVhNTChzdHIpIHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcclxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcclxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcclxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcclxuICAgIC5yZXBsYWNlKC8nL2csICcmYXBvczsnKTtcclxufTtcclxuXHJcbnhtbC5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGVYTUwoc3RyKSB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mYXBvczsvZywgXCInXCIpXHJcbiAgICAucmVwbGFjZSgvJnF1b3Q7L2csICdcIicpXHJcbiAgICAucmVwbGFjZSgvJmd0Oy9nLCAnPicpXHJcbiAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXHJcbiAgICAucmVwbGFjZSgvJmFtcDsvZywgJyYnKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0geG1sOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnJlcXVpcmUoJy4vcGx1Z2luL2NvbXBvbmVudHMvYWRzLWxhYmVsXzQnKTtcclxucmVxdWlyZSgnLi9wbHVnaW4vY29tcG9uZW50cy9ibGFjay1wb3N0ZXJfNCcpO1xyXG5cclxudmFyIHZpZGVvSnNWQVNUID0gcmVxdWlyZSgnLi9wbHVnaW4vdmlkZW9qcy52YXN0LnZwYWlkJyk7XHJcblxyXG52aWRlb2pzLnBsdWdpbigndmFzdENsaWVudCcsIHZpZGVvSnNWQVNUKTtcclxuXHJcbiJdfQ==
