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

var baseVideoJsComponent = videojs.getComponent('Component');

var AdsLabel = require('./ads-label')(baseVideoJsComponent);

videojs.registerComponent('AdsLabel', videojs.extend(baseVideoJsComponent, AdsLabel));

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

var baseVideoJsComponent = videojs.getComponent('Component');

var BlackPoster = require('./black-poster')(baseVideoJsComponent);

videojs.registerComponent('BlackPoster', videojs.extend(baseVideoJsComponent, BlackPoster));

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

require('./plugin/components/ads-label_5');
require('./plugin/components/black-poster_5');

var videoJsVAST = require('./plugin/videojs.vast.vpaid');

videojs.plugin('vastClient', videoJsVAST);

},{"./plugin/components/ads-label_5":35,"./plugin/components/black-poster_5":37,"./plugin/videojs.vast.vpaid":38}]},{},[46])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xcSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50c1xcVlBBSURGTEFTSENsaWVudFxcanNcXFZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50c1xcVlBBSURGTEFTSENsaWVudFxcanNcXFZQQUlERkxBU0hDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xcZmxhc2hUZXN0ZXIuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xcanNGbGFzaEJyaWRnZS5qcyIsImJvd2VyX2NvbXBvbmVudHNcXFZQQUlERkxBU0hDbGllbnRcXGpzXFxqc0ZsYXNoQnJpZGdlUmVnaXN0cnkuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xccmVnaXN0cnkuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xcdXRpbHMuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvc3Vic2NyaWJlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvVlBBSURIVE1MNUNsaWVudC9qcy91dGlscy5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0FkLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvQ29tcGFuaW9uLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvQ3JlYXRpdmUuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9JbkxpbmUuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9MaW5lYXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9NZWRpYUZpbGUuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9UcmFja2luZ0V2ZW50LmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVENsaWVudC5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZBU1RFcnJvci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZBU1RJbnRlZ3JhdG9yLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVFJlc3BvbnNlLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVFRyYWNrZXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WaWRlb0NsaWNrcy5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1dyYXBwZXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9wYXJzZXJzLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvdmFzdFV0aWwuanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURBZFVuaXRXcmFwcGVyLmpzIiwic3JjL3NjcmlwdHMvYWRzL3ZwYWlkL1ZQQUlERmxhc2hUZWNoLmpzIiwic3JjL3NjcmlwdHMvYWRzL3ZwYWlkL1ZQQUlESFRNTDVUZWNoLmpzIiwic3JjL3NjcmlwdHMvYWRzL3ZwYWlkL1ZQQUlESW50ZWdyYXRvci5qcyIsInNyYy9zY3JpcHRzL3BsdWdpbi9jb21wb25lbnRzL2Fkcy1sYWJlbC5qcyIsInNyYy9zY3JpcHRzL3BsdWdpbi9jb21wb25lbnRzL2Fkcy1sYWJlbF81LmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYmxhY2stcG9zdGVyLmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYmxhY2stcG9zdGVyXzUuanMiLCJzcmMvc2NyaXB0cy9wbHVnaW4vdmlkZW9qcy52YXN0LnZwYWlkLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvYXN5bmMuanMiLCJzcmMvc2NyaXB0cy91dGlscy9kb20uanMiLCJzcmMvc2NyaXB0cy91dGlscy9odHRwLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvcGxheWVyVXRpbHMuanMiLCJzcmMvc2NyaXB0cy91dGlscy91cmxVdGlscy5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMuanMiLCJzcmMvc2NyaXB0cy91dGlscy94bWwuanMiLCJzcmMvc2NyaXB0cy92aWRlb2pzXzUudmFzdC52cGFpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHYTs7Ozs7Ozs7OzsyQ0FJMEQ7Z0JBQWxELDJFQUFxQixrQkFBNkI7Z0JBQXRCLGlFQUFXLHNCQUFXOzs7Ozs7OytCQUczRCxPQUFPLFFBQVEsVUFBVSxnQkFBMkc7Z0JBQTNGLHFFQUFlLEVBQUMsY0FBQSxBQUFhLGlCQUE4RDtnQkFBekQsd0VBQWtCLEVBQUMsV0FBQSxBQUFXLGlCQUEyQjtnQkFBdEIsaUVBQVcsc0JBQVc7Ozs7aUNBQ25JLE9BQU8sUUFBUSxVQUFnQztnQkFBdEIsaUVBQVcsc0JBQVc7Ozs7a0NBRTFCO2dCQUF0QixpRUFBVyxzQkFBVzs7OztpQ0FDRDtnQkFBdEIsaUVBQVcsc0JBQVc7Ozs7a0NBQ0M7Z0JBQXRCLGlFQUFXLHNCQUFXOzs7O21DQUNDO2dCQUF0QixpRUFBVyxzQkFBVzs7OzttQ0FDQTtnQkFBdEIsaUVBQVcsc0JBQVc7Ozs7cUNBQ0U7Z0JBQXRCLGlFQUFXLHNCQUFXOzs7O2lDQUNKO2dCQUF0QixpRUFBVyxzQkFBVzs7Ozs7OztvQ0FHakIsVUFBVTs7O21DQUNYLFVBQVU7OztvQ0FDVCxVQUFVOzs7c0NBQ1IsVUFBVTs7OzRDQUNKLFVBQVU7OzsyQ0FDWCxVQUFVOzs7c0NBQ2YsVUFBVTs7O29DQUNaLGFBQW1DO2dCQUF0QixpRUFBVyxzQkFBVzs7OztvQ0FDbkMsVUFBVTs7O3dDQUNOLFVBQVU7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2aEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuLy9zaW1wbGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIEFQSVxuZXhwb3J0IGNsYXNzIElWUEFJREFkVW5pdCB7XG5cbiAgICAvL2FsbCBtZXRob2RzIGJlbG93XG4gICAgLy9hcmUgYXN5bmMgbWV0aG9kc1xuICAgIGhhbmRzaGFrZVZlcnNpb24ocGxheWVyVlBBSURWZXJzaW9uID0gJzIuMCcsIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxuXG4gICAgLy9jcmVhdGl2ZURhdGEgaXMgYW4gb2JqZWN0IHRvIGJlIGNvbnNpc3RlbnQgd2l0aCBWUEFJREhUTUxcbiAgICBpbml0QWQgKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhID0ge0FkUGFyYW1ldGVyczonJ30sIGVudmlyb25tZW50VmFycyA9IHtmbGFzaFZhcnM6ICcnfSwgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgcmVzaXplQWQod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxuXG4gICAgc3RhcnRBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cbiAgICBzdG9wQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgcGF1c2VBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cbiAgICByZXN1bWVBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cbiAgICBleHBhbmRBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cbiAgICBjb2xsYXBzZUFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxuICAgIHNraXBBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cblxuICAgIC8vcHJvcGVydGllcyB0aGF0IHdpbGwgYmUgdHJlYXQgYXMgYXN5bmMgbWV0aG9kc1xuICAgIGdldEFkTGluZWFyKGNhbGxiYWNrKSB7fVxuICAgIGdldEFkV2lkdGgoY2FsbGJhY2spIHt9XG4gICAgZ2V0QWRIZWlnaHQoY2FsbGJhY2spIHt9XG4gICAgZ2V0QWRFeHBhbmRlZChjYWxsYmFjaykge31cbiAgICBnZXRBZFNraXBwYWJsZVN0YXRlKGNhbGxiYWNrKSB7fVxuICAgIGdldEFkUmVtYWluaW5nVGltZShjYWxsYmFjaykge31cbiAgICBnZXRBZER1cmF0aW9uKGNhbGxiYWNrKSB7fVxuICAgIHNldEFkVm9sdW1lKHNvdW5kVm9sdW1lLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cbiAgICBnZXRBZFZvbHVtZShjYWxsYmFjaykge31cbiAgICBnZXRBZENvbXBhbmlvbnMoY2FsbGJhY2spIHt9XG4gICAgZ2V0QWRJY29ucyhjYWxsYmFjaykge31cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KElWUEFJREFkVW5pdCwgJ0VWRU5UUycsIHtcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogW1xuICAgICAgICAnQWRMb2FkZWQnLFxuICAgICAgICAnQWRTdGFydGVkJyxcbiAgICAgICAgJ0FkU3RvcHBlZCcsXG4gICAgICAgICdBZFNraXBwZWQnLFxuICAgICAgICAnQWRTa2lwcGFibGVTdGF0ZUNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAgICAgJ0FkU2l6ZUNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAgICAgJ0FkTGluZWFyQ2hhbmdlJyxcbiAgICAgICAgJ0FkRHVyYXRpb25DaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgICAgICdBZEV4cGFuZGVkQ2hhbmdlJyxcbiAgICAgICAgJ0FkUmVtYWluaW5nVGltZUNoYW5nZScsIC8vIFtEZXByZWNhdGVkIGluIDIuMF0gYnV0IHdpbGwgYmUgc3RpbGwgZmlyZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICAgICdBZFZvbHVtZUNoYW5nZScsXG4gICAgICAgICdBZEltcHJlc3Npb24nLFxuICAgICAgICAnQWRWaWRlb1N0YXJ0JyxcbiAgICAgICAgJ0FkVmlkZW9GaXJzdFF1YXJ0aWxlJyxcbiAgICAgICAgJ0FkVmlkZW9NaWRwb2ludCcsXG4gICAgICAgICdBZFZpZGVvVGhpcmRRdWFydGlsZScsXG4gICAgICAgICdBZFZpZGVvQ29tcGxldGUnLFxuICAgICAgICAnQWRDbGlja1RocnUnLFxuICAgICAgICAnQWRJbnRlcmFjdGlvbicsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAgICAgJ0FkVXNlckFjY2VwdEludml0YXRpb24nLFxuICAgICAgICAnQWRVc2VyTWluaW1pemUnLFxuICAgICAgICAnQWRVc2VyQ2xvc2UnLFxuICAgICAgICAnQWRQYXVzZWQnLFxuICAgICAgICAnQWRQbGF5aW5nJyxcbiAgICAgICAgJ0FkTG9nJyxcbiAgICAgICAgJ0FkRXJyb3InXG4gICAgXVxufSk7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxubGV0IElWUEFJREFkVW5pdCA9IHJlcXVpcmUoJy4vSVZQQUlEQWRVbml0JykuSVZQQUlEQWRVbml0O1xubGV0IEFMTF9WUEFJRF9NRVRIT0RTID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoSVZQQUlEQWRVbml0LnByb3RvdHlwZSkuZmlsdGVyKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiBbJ2NvbnN0cnVjdG9yJ10uaW5kZXhPZihwcm9wZXJ0eSkgPT09IC0xO1xufSk7XG5cbmV4cG9ydCBjbGFzcyBWUEFJREFkVW5pdCBleHRlbmRzIElWUEFJREFkVW5pdCB7XG4gICAgY29uc3RydWN0b3IgKGZsYXNoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9mbGFzaCA9IGZsYXNoO1xuICAgIH1cblxuICAgIF9kZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICBBTExfVlBBSURfTUVUSE9EUy5mb3JFYWNoKChtZXRob2ROYW1lKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9mbGFzaC5yZW1vdmVDYWxsYmFja0J5TWV0aG9kTmFtZShtZXRob2ROYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIElWUEFJREFkVW5pdC5FVkVOVFMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2ZsYXNoLm9mZkV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fZmxhc2ggPSBudWxsO1xuICAgIH1cblxuICAgIGlzRGVzdHJveWVkICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc3Ryb3llZDtcbiAgICB9XG5cbiAgICBvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLm9uKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIG9mZihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLm9mZihldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvL1ZQQUlEIGludGVyZmFjZVxuICAgIGhhbmRzaGFrZVZlcnNpb24ocGxheWVyVlBBSURWZXJzaW9uID0gJzIuMCcsIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnaGFuZHNoYWtlVmVyc2lvbicsIFtwbGF5ZXJWUEFJRFZlcnNpb25dLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGluaXRBZCAod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEgPSB7QWRQYXJhbWV0ZXJzOiAnJ30sIGVudmlyb25tZW50VmFycyA9IHtmbGFzaFZhcnM6ICcnfSwgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy9yZXNpemUgZWxlbWVudCB0aGF0IGhhcyB0aGUgZmxhc2ggb2JqZWN0XG4gICAgICAgIHRoaXMuX2ZsYXNoLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGNyZWF0aXZlRGF0YSA9IGNyZWF0aXZlRGF0YSB8fCB7QWRQYXJhbWV0ZXJzOiAnJ307XG4gICAgICAgIGVudmlyb25tZW50VmFycyA9IGVudmlyb25tZW50VmFycyB8fCB7Zmxhc2hWYXJzOiAnJ307XG5cbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdpbml0QWQnLCBbdGhpcy5fZmxhc2guZ2V0V2lkdGgoKSwgdGhpcy5fZmxhc2guZ2V0SGVpZ2h0KCksIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhLkFkUGFyYW1ldGVycyB8fCAnJywgZW52aXJvbm1lbnRWYXJzLmZsYXNoVmFycyB8fCAnJ10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgcmVzaXplQWQod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vcmVzaXplIGVsZW1lbnQgdGhhdCBoYXMgdGhlIGZsYXNoIG9iamVjdFxuICAgICAgICB0aGlzLl9mbGFzaC5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIC8vcmVzaXplIGFkIGluc2lkZSB0aGUgZmxhc2hcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdyZXNpemVBZCcsIFt0aGlzLl9mbGFzaC5nZXRXaWR0aCgpLCB0aGlzLl9mbGFzaC5nZXRIZWlnaHQoKSwgdmlld01vZGVdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHN0YXJ0QWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdzdGFydEFkJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc3RvcEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnc3RvcEFkJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgcGF1c2VBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ3BhdXNlQWQnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICByZXN1bWVBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ3Jlc3VtZUFkJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZXhwYW5kQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdleHBhbmRBZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGNvbGxhcHNlQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdjb2xsYXBzZUFkJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc2tpcEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnc2tpcEFkJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvL3Byb3BlcnRpZXMgdGhhdCB3aWxsIGJlIHRyZWF0IGFzIGFzeW5jIG1ldGhvZHNcbiAgICBnZXRBZExpbmVhcihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkTGluZWFyJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0QWRXaWR0aChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkV2lkdGgnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZEhlaWdodChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkSGVpZ2h0JywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0QWRFeHBhbmRlZChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkRXhwYW5kZWQnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZFNraXBwYWJsZVN0YXRlKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWRTa2lwcGFibGVTdGF0ZScsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkUmVtYWluaW5nVGltZShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkUmVtYWluaW5nVGltZScsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkRHVyYXRpb24oY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZER1cmF0aW9uJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc2V0QWRWb2x1bWUodm9sdW1lLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ3NldEFkVm9sdW1lJywgW3ZvbHVtZV0sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0QWRWb2x1bWUoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZFZvbHVtZScsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkQ29tcGFuaW9ucyhjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkQ29tcGFuaW9ucycsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkSWNvbnMoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZEljb25zJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG59XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSlNGbGFzaEJyaWRnZSA9IHJlcXVpcmUoJy4vanNGbGFzaEJyaWRnZScpLkpTRmxhc2hCcmlkZ2U7XG5jb25zdCBWUEFJREFkVW5pdCA9IHJlcXVpcmUoJy4vVlBBSURBZFVuaXQnKS5WUEFJREFkVW5pdDtcblxuY29uc3Qgbm9vcCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5ub29wO1xuY29uc3QgY2FsbGJhY2tUaW1lb3V0ID0gcmVxdWlyZSgnLi91dGlscycpLmNhbGxiYWNrVGltZW91dDtcbmNvbnN0IGlzUG9zaXRpdmVJbnQgPSByZXF1aXJlKCcuL3V0aWxzJykuaXNQb3NpdGl2ZUludDtcbmNvbnN0IGNyZWF0ZUVsZW1lbnRXaXRoSUQgPSByZXF1aXJlKCcuL3V0aWxzJykuY3JlYXRlRWxlbWVudFdpdGhJRDtcbmNvbnN0IHVuaXF1ZVZQQUlEID0gcmVxdWlyZSgnLi91dGlscycpLnVuaXF1ZSgndnBhaWQnKTtcbmNvbnN0IGNyZWF0ZUZsYXNoVGVzdGVyID0gcmVxdWlyZSgnLi9mbGFzaFRlc3Rlci5qcycpLmNyZWF0ZUZsYXNoVGVzdGVyO1xuXG5jb25zdCBFUlJPUiA9ICdlcnJvcic7XG5jb25zdCBGTEFTSF9WRVJTSU9OID0gJzEwLjEuMCc7XG5cbmxldCBmbGFzaFRlc3RlciA9IHtpc1N1cHBvcnRlZDogKCk9PiB0cnVlfTsgLy8gaWYgdGhlIHJ1bkZsYXNoVGVzdCBpcyBub3QgcnVuIHRoZSBmbGFzaFRlc3RlciB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZVxuXG5jbGFzcyBWUEFJREZMQVNIQ2xpZW50IHtcbiAgICBjb25zdHJ1Y3RvciAodnBhaWRQYXJlbnRFbCwgY2FsbGJhY2ssIHN3ZkNvbmZpZyA9IHtkYXRhOiAnVlBBSURGbGFzaC5zd2YnLCB3aWR0aDogODAwLCBoZWlnaHQ6IDQwMH0sIHBhcmFtcyA9IHsgd21vZGU6ICd0cmFuc3BhcmVudCcsIHNhbGlnbjogJ3RsJywgYWxpZ246ICdsZWZ0JywgYWxsb3dTY3JpcHRBY2Nlc3M6ICdhbHdheXMnLCBzY2FsZTogJ25vU2NhbGUnLCBhbGxvd0Z1bGxTY3JlZW46ICd0cnVlJywgcXVhbGl0eTogJ2hpZ2gnfSwgdnBhaWRPcHRpb25zID0geyBkZWJ1ZzogZmFsc2UsIHRpbWVvdXQ6IDEwMDAwIH0pIHtcblxuICAgICAgICBpZiAoIVZQQUlERkxBU0hDbGllbnQuaGFzRXh0ZXJuYWxEZXBlbmRlbmNpZXMoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9uRXJyb3IoJ25vIHN3Zm9iamVjdCBpbiBnbG9iYWwgc2NvcGUuIGNoZWNrOiBodHRwczovL2dpdGh1Yi5jb20vc3dmb2JqZWN0L3N3Zm9iamVjdCBvciBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3N3Zm9iamVjdC8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3ZwYWlkUGFyZW50RWwgPSB2cGFpZFBhcmVudEVsO1xuICAgICAgICB0aGlzLl9mbGFzaElEID0gdW5pcXVlVlBBSUQoKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcblxuICAgICAgICBzd2ZDb25maWcud2lkdGggPSBpc1Bvc2l0aXZlSW50KHN3ZkNvbmZpZy53aWR0aCwgODAwKTtcbiAgICAgICAgc3dmQ29uZmlnLmhlaWdodCA9IGlzUG9zaXRpdmVJbnQoc3dmQ29uZmlnLmhlaWdodCwgNDAwKTtcblxuICAgICAgICBjcmVhdGVFbGVtZW50V2l0aElEKHZwYWlkUGFyZW50RWwsIHRoaXMuX2ZsYXNoSUQsIHRydWUpO1xuXG4gICAgICAgIHBhcmFtcy5tb3ZpZSA9IHN3ZkNvbmZpZy5kYXRhO1xuICAgICAgICBwYXJhbXMuRmxhc2hWYXJzID0gYGZsYXNoaWQ9JHt0aGlzLl9mbGFzaElEfSZoYW5kbGVyPSR7SlNGbGFzaEJyaWRnZS5WUEFJRF9GTEFTSF9IQU5ETEVSfSZkZWJ1Zz0ke3ZwYWlkT3B0aW9ucy5kZWJ1Z30mc2FsaWduPSR7cGFyYW1zLnNhbGlnbn1gO1xuXG4gICAgICAgIGlmICghVlBBSURGTEFTSENsaWVudC5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gb25FcnJvcigndXNlciBkb25cXCd0IHN1cHBvcnQgZmxhc2ggb3IgZG9lc25cXCd0IGhhdmUgdGhlIG1pbmltdW0gcmVxdWlyZWQgdmVyc2lvbiBvZiBmbGFzaCAnICsgRkxBU0hfVkVSU0lPTik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsID0gc3dmb2JqZWN0LmNyZWF0ZVNXRihzd2ZDb25maWcsIHBhcmFtcywgdGhpcy5fZmxhc2hJRCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmVsKSB7XG4gICAgICAgICAgICByZXR1cm4gb25FcnJvciggJ3N3Zm9iamVjdCBmYWlsZWQgdG8gY3JlYXRlIG9iamVjdCBpbiBlbGVtZW50JyApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhhbmRsZXIgPSBjYWxsYmFja1RpbWVvdXQodnBhaWRPcHRpb25zLnRpbWVvdXQsXG4gICAgICAgICAgICAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgJGxvYWRQZW5kZWRBZFVuaXQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIsIGRhdGEpO1xuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCd2cGFpZCBmbGFzaCBsb2FkIHRpbWVvdXQgJyArIHZwYWlkT3B0aW9ucy50aW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLl9mbGFzaCA9IG5ldyBKU0ZsYXNoQnJpZGdlKHRoaXMuZWwsIHN3ZkNvbmZpZy5kYXRhLCB0aGlzLl9mbGFzaElELCBzd2ZDb25maWcud2lkdGgsIHN3ZkNvbmZpZy5oZWlnaHQsIGhhbmRsZXIpO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZGVzdHJveSAoKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lBZFVuaXQoKTtcblxuICAgICAgICBpZiAodGhpcy5fZmxhc2gpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZsYXNoLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX2ZsYXNoID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpc0Rlc3Ryb3llZCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXN0cm95ZWQ7XG4gICAgfVxuXG4gICAgX2Rlc3Ryb3lBZFVuaXQoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9sb2FkTGF0ZXI7XG5cbiAgICAgICAgaWYgKHRoaXMuX2FkVW5pdExvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkVW5pdExvYWQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fZmxhc2gucmVtb3ZlQ2FsbGJhY2sodGhpcy5fYWRVbml0TG9hZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYWRVbml0KSB7XG4gICAgICAgICAgICB0aGlzLl9hZFVuaXQuX2Rlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX2FkVW5pdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkQWRVbml0KGFkVVJMLCBjYWxsYmFjaykge1xuICAgICAgICAkdGhyb3dJZkRlc3Ryb3llZC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLl9hZFVuaXQpIHtcbiAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lBZFVuaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9mbGFzaC5pc1JlYWR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkVW5pdExvYWQgPSAoZXJyLCBtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRVbml0ID0gbmV3IFZQQUlEQWRVbml0KHRoaXMuX2ZsYXNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRVbml0TG9hZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLCB0aGlzLl9hZFVuaXQpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdsb2FkQWRVbml0JywgW2FkVVJMXSwgdGhpcy5fYWRVbml0TG9hZCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRMYXRlciA9IHt1cmw6IGFkVVJMLCBjYWxsYmFja307XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmxvYWRBZFVuaXQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgJHRocm93SWZEZXN0cm95ZWQuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9kZXN0cm95QWRVbml0KCk7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgndW5sb2FkQWRVbml0JywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0Rmxhc2hJRCgpIHtcbiAgICAgICAgJHRocm93SWZEZXN0cm95ZWQuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZsYXNoLmdldEZsYXNoSUQoKTtcbiAgICB9XG4gICAgZ2V0Rmxhc2hVUkwoKSB7XG4gICAgICAgICR0aHJvd0lmRGVzdHJveWVkLmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9mbGFzaC5nZXRGbGFzaFVSTCgpO1xuICAgIH1cbn1cblxuc2V0U3RhdGljUHJvcGVydHkoJ2lzU3VwcG9ydGVkJywgKCkgPT4ge1xuICAgIHJldHVybiBWUEFJREZMQVNIQ2xpZW50Lmhhc0V4dGVybmFsRGVwZW5kZW5jaWVzKCkgJiYgc3dmb2JqZWN0Lmhhc0ZsYXNoUGxheWVyVmVyc2lvbihGTEFTSF9WRVJTSU9OKSAmJiBmbGFzaFRlc3Rlci5pc1N1cHBvcnRlZCgpO1xufSwgdHJ1ZSk7XG5cbnNldFN0YXRpY1Byb3BlcnR5KCdoYXNFeHRlcm5hbERlcGVuZGVuY2llcycsICgpID0+IHtcbiAgICByZXR1cm4gISF3aW5kb3cuc3dmb2JqZWN0O1xufSk7XG5cbnNldFN0YXRpY1Byb3BlcnR5KCdydW5GbGFzaFRlc3QnLCAoc3dmQ29uZmlnKSA9PiB7XG4gICAgZmxhc2hUZXN0ZXIgPSBjcmVhdGVGbGFzaFRlc3Rlcihkb2N1bWVudC5ib2R5LCBzd2ZDb25maWcpO1xufSk7XG5cbmZ1bmN0aW9uICR0aHJvd0lmRGVzdHJveWVkKCkge1xuICAgIGlmKHRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZQQUlERmxhc2hUb0pTIGlzIGRlc3Ryb3llZCEnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uICRsb2FkUGVuZGVkQWRVbml0KCkge1xuICAgIGlmICh0aGlzLl9sb2FkTGF0ZXIpIHtcbiAgICAgICAgdGhpcy5sb2FkQWRVbml0KHRoaXMuX2xvYWRMYXRlci51cmwsIHRoaXMuX2xvYWRMYXRlci5jYWxsYmFjayk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9sb2FkTGF0ZXI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRTdGF0aWNQcm9wZXJ0eShwcm9wZXJ0eU5hbWUsIHZhbHVlLCB3cml0YWJsZSA9IGZhbHNlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZQQUlERkxBU0hDbGllbnQsIHByb3BlcnR5TmFtZSwge1xuICAgICAgICB3cml0YWJsZTogd3JpdGFibGUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlERkxBU0hDbGllbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZMQVNIX1RFU1QgPSAndnBhaWRfdmlkZW9fZmxhc2hfdGVzdGVyJztcbmNvbnN0IEZMQVNIX1RFU1RfRUwgPSAndnBhaWRfdmlkZW9fZmxhc2hfdGVzdGVyX2VsJztcbmNvbnN0IEpTRmxhc2hCcmlkZ2UgPSByZXF1aXJlKCcuL2pzRmxhc2hCcmlkZ2UnKS5KU0ZsYXNoQnJpZGdlO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5jb25zdCBNdWx0aXBsZVZhbHVlc1JlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9yZWdpc3RyeScpLk11bHRpcGxlVmFsdWVzUmVnaXN0cnk7XG5cbmNsYXNzIEZsYXNoVGVzdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHN3ZkNvbmZpZyA9IHtkYXRhOiAnVlBBSURGbGFzaC5zd2YnLCB3aWR0aDogODAwLCBoZWlnaHQ6IDQwMH0pIHtcbiAgICAgICAgdGhpcy5wYXJlbnRFbCA9IHV0aWxzLmNyZWF0ZUVsZW1lbnRXaXRoSUQocGFyZW50LCBGTEFTSF9URVNUX0VMKTsgLy8gc29tZSBicm93c2VycyBjcmVhdGUgZ2xvYmFsIHZhcmlhYmxlcyB1c2luZyB0aGUgZWxlbWVudCBpZCBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM0MzQyNzgvZG8tZG9tLXRyZWUtZWxlbWVudHMtd2l0aC1pZHMtYmVjb21lLWdsb2JhbC12YXJpYWJsZXNcbiAgICAgICAgdXRpbHMuaGlkZUZsYXNoRWwodGhpcy5wYXJlbnRFbCk7XG4gICAgICAgIHZhciBwYXJhbXMgPSB7fTtcbiAgICAgICAgcGFyYW1zLm1vdmllID0gc3dmQ29uZmlnLmRhdGE7XG4gICAgICAgIHBhcmFtcy5GbGFzaFZhcnMgPSBgZmxhc2hpZD0ke0ZMQVNIX1RFU1RfRUx9JmhhbmRsZXI9JHtKU0ZsYXNoQnJpZGdlLlZQQUlEX0ZMQVNIX0hBTkRMRVJ9YDtcblxuICAgICAgICB0aGlzLmVsID0gc3dmb2JqZWN0LmNyZWF0ZVNXRihzd2ZDb25maWcsIHBhcmFtcywgRkxBU0hfVEVTVF9FTCk7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzID0gbmV3IE11bHRpcGxlVmFsdWVzUmVnaXN0cnkoKTtcbiAgICAgICAgdGhpcy5faXNTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZWwpIHtcbiAgICAgICAgICAgIHV0aWxzLmhpZGVGbGFzaEVsKHRoaXMuZWwpO1xuICAgICAgICAgICAgdGhpcy5fZmxhc2ggPSBuZXcgSlNGbGFzaEJyaWRnZSh0aGlzLmVsLCBzd2ZDb25maWcuZGF0YSwgRkxBU0hfVEVTVF9FTCwgNDAwLCA0MDAsICgpPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1cHBvcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzU3VwcG9ydGVkID0gc3VwcG9ydDtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVycy5nZXQoJ2NoYW5nZScpLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygnY2hhbmdlJywgc3VwcG9ydCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNTdXBwb3J0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1N1cHBvcnRlZDtcbiAgICB9XG4gICAgb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9oYW5kbGVycy5hZGQoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxufVxuXG5leHBvcnQgdmFyIGNyZWF0ZUZsYXNoVGVzdGVyID0gZnVuY3Rpb24gY3JlYXRlRmxhc2hUZXN0ZXIoZWwsIHN3ZkNvbmZpZykge1xuICAgIGlmICghd2luZG93W0ZMQVNIX1RFU1RdKSB7XG4gICAgICAgIHdpbmRvd1tGTEFTSF9URVNUXSA9IG5ldyBGbGFzaFRlc3RlcihlbCwgc3dmQ29uZmlnKTtcbiAgICB9XG4gICAgcmV0dXJuIHdpbmRvd1tGTEFTSF9URVNUXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmxldCB1bmlxdWUgPSByZXF1aXJlKCcuL3V0aWxzJykudW5pcXVlO1xubGV0IGlzUG9zaXRpdmVJbnQgPSByZXF1aXJlKCcuL3V0aWxzJykuaXNQb3NpdGl2ZUludDtcbmxldCBzdHJpbmdFbmRzV2l0aCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5zdHJpbmdFbmRzV2l0aDtcbmxldCBTaW5nbGVWYWx1ZVJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9yZWdpc3RyeScpLlNpbmdsZVZhbHVlUmVnaXN0cnk7XG5sZXQgTXVsdGlwbGVWYWx1ZXNSZWdpc3RyeSA9IHJlcXVpcmUoJy4vcmVnaXN0cnknKS5NdWx0aXBsZVZhbHVlc1JlZ2lzdHJ5O1xuY29uc3QgcmVnaXN0cnkgPSByZXF1aXJlKCcuL2pzRmxhc2hCcmlkZ2VSZWdpc3RyeScpO1xuY29uc3QgVlBBSURfRkxBU0hfSEFORExFUiA9ICd2cGFpZF92aWRlb19mbGFzaF9oYW5kbGVyJztcbmNvbnN0IEVSUk9SID0gJ0FkRXJyb3InO1xuXG5leHBvcnQgY2xhc3MgSlNGbGFzaEJyaWRnZSB7XG4gICAgY29uc3RydWN0b3IgKGVsLCBmbGFzaFVSTCwgZmxhc2hJRCwgd2lkdGgsIGhlaWdodCwgbG9hZEhhbmRTaGFrZSkge1xuICAgICAgICB0aGlzLl9lbCA9IGVsO1xuICAgICAgICB0aGlzLl9mbGFzaElEID0gZmxhc2hJRDtcbiAgICAgICAgdGhpcy5fZmxhc2hVUkwgPSBmbGFzaFVSTDtcbiAgICAgICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLl9oYW5kbGVycyA9IG5ldyBNdWx0aXBsZVZhbHVlc1JlZ2lzdHJ5KCk7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IG5ldyBTaW5nbGVWYWx1ZVJlZ2lzdHJ5KCk7XG4gICAgICAgIHRoaXMuX3VuaXF1ZU1ldGhvZElkZW50aWZpZXIgPSB1bmlxdWUodGhpcy5fZmxhc2hJRCk7XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2hhbmRTaGFrZUhhbmRsZXIgPSBsb2FkSGFuZFNoYWtlO1xuXG4gICAgICAgIHJlZ2lzdHJ5LmFkZEluc3RhbmNlKHRoaXMuX2ZsYXNoSUQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnMuYWRkKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIG9mZihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVycy5yZW1vdmUoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgb2ZmRXZlbnQoZXZlbnROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVycy5yZW1vdmVCeUtleShldmVudE5hbWUpO1xuICAgIH1cblxuICAgIG9mZkFsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJzLnJlbW92ZUFsbCgpO1xuICAgIH1cblxuICAgIGNhbGxGbGFzaE1ldGhvZChtZXRob2ROYW1lLCBhcmdzID0gW10sIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBjYWxsYmFja0lEID0gJyc7XG4gICAgICAgIC8vIGlmIG5vIGNhbGxiYWNrLCBzb21lIG1ldGhvZHMgdGhlIHJldHVybiBpcyB2b2lkIHNvIHRoZXkgZG9uJ3QgbmVlZCBjYWxsYmFja1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrSUQgPSBgJHt0aGlzLl91bmlxdWVNZXRob2RJZGVudGlmaWVyKCl9XyR7bWV0aG9kTmFtZX1gO1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLmFkZChjYWxsYmFja0lELCBjYWxsYmFjayk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvL21ldGhvZHMgYXJlIGNyZWF0ZWQgYnkgRXh0ZXJuYWxJbnRlcmZhY2UuYWRkQ2FsbGJhY2sgaW4gYXMzIGNvZGUsIGlmIGZvciBzb21lIHJlYXNvbiBpdCBmYWlsZWRcbiAgICAgICAgICAgIC8vdGhpcyBjb2RlIHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgICAgIHRoaXMuX2VsW21ldGhvZE5hbWVdKFtjYWxsYmFja0lEXS5jb25jYXQoYXJncykpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICRhc3luY0NhbGxiYWNrLmNhbGwodGhpcywgY2FsbGJhY2tJRCwgZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy9pZiB0aGVyZSBpc24ndCBhbnkgY2FsbGJhY2sgdG8gcmV0dXJuIGVycm9yIHVzZSBlcnJvciBldmVudCBoYW5kbGVyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJpZ2dlcihFUlJPUiwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVDYWxsYmFjayhjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzLnJlbW92ZUJ5VmFsdWUoY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHJlbW92ZUNhbGxiYWNrQnlNZXRob2ROYW1lKHN1ZmZpeCkge1xuICAgICAgICB0aGlzLl9jYWxsYmFja3MuZmlsdGVyS2V5cygoa2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nRW5kc1dpdGgoa2V5LCBzdWZmaXgpO1xuICAgICAgICB9KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcy5yZW1vdmUoa2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsQ2FsbGJhY2tzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzLnJlbW92ZUFsbCgpO1xuICAgIH1cblxuICAgIF90cmlnZ2VyKGV2ZW50TmFtZSwgZXZlbnQpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnMuZ2V0KGV2ZW50TmFtZSkuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIC8vY2xpY2tUaHJ1IGhhcyB0byBiZSBzeW5jLCBpZiBub3Qgd2lsbCBiZSBibG9jayBieSB0aGUgcG9wdXBibG9ja2VyXG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnQWRDbGlja1RocnUnKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzLmdldChldmVudE5hbWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY2FsbENhbGxiYWNrKG1ldGhvZE5hbWUsIGNhbGxiYWNrSUQsIGVyciwgcmVzdWx0KSB7XG5cbiAgICAgICAgbGV0IGNhbGxiYWNrID0gdGhpcy5fY2FsbGJhY2tzLmdldChjYWxsYmFja0lEKTtcblxuICAgICAgICAvL25vdCBhbGwgbWV0aG9kcyBjYWxsYmFjaydzIGFyZSBtYW5kYXRvcnlcbiAgICAgICAgLy9idXQgaWYgdGhlcmUgZXhpc3QgYW4gZXJyb3IsIGZpcmUgdGhlIGVycm9yIGV2ZW50XG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmIChlcnIgJiYgY2FsbGJhY2tJRCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoRVJST1IsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkYXN5bmNDYWxsYmFjay5jYWxsKHRoaXMsIGNhbGxiYWNrSUQsIGVyciwgcmVzdWx0KTtcblxuICAgIH1cblxuICAgIF9oYW5kU2hha2UoZXJyLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2hhbmRTaGFrZUhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRTaGFrZUhhbmRsZXIoZXJyLCBkYXRhKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9oYW5kU2hha2VIYW5kbGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9tZXRob2RzIGxpa2UgcHJvcGVydGllcyBzcGVjaWZpYyB0byB0aGlzIGltcGxlbWVudGF0aW9uIG9mIFZQQUlEXG4gICAgZ2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHt3aWR0aDogdGhpcy5fd2lkdGgsIGhlaWdodDogdGhpcy5faGVpZ2h0fTtcbiAgICB9XG4gICAgc2V0U2l6ZShuZXdXaWR0aCwgbmV3SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gaXNQb3NpdGl2ZUludChuZXdXaWR0aCwgdGhpcy5fd2lkdGgpO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBpc1Bvc2l0aXZlSW50KG5ld0hlaWdodCwgdGhpcy5faGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fZWwuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMuX3dpZHRoKTtcbiAgICAgICAgdGhpcy5fZWwuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLl9oZWlnaHQpO1xuICAgIH1cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICAgIH1cbiAgICBzZXRXaWR0aChuZXdXaWR0aCkge1xuICAgICAgICB0aGlzLnNldFNpemUobmV3V2lkdGgsIHRoaXMuX2hlaWdodCk7XG4gICAgfVxuICAgIGdldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgICB9XG4gICAgc2V0SGVpZ2h0KG5ld0hlaWdodCkge1xuICAgICAgICB0aGlzLnNldFNpemUodGhpcy5fd2lkdGgsIG5ld0hlaWdodCk7XG4gICAgfVxuICAgIGdldEZsYXNoSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mbGFzaElEO1xuICAgIH1cbiAgICBnZXRGbGFzaFVSTCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZsYXNoVVJMO1xuICAgIH1cbiAgICBpc1JlYWR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZHk7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub2ZmQWxsKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIHJlZ2lzdHJ5LnJlbW92ZUluc3RhbmNlQnlJRCh0aGlzLl9mbGFzaElEKTtcbiAgICAgICAgaWYgKHRoaXMuX2VsLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5fZWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiAkYXN5bmNDYWxsYmFjayhjYWxsYmFja0lELCBlcnIsIHJlc3VsdCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLl9jYWxsYmFja3MuZ2V0KGNhbGxiYWNrSUQpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcy5yZW1vdmUoY2FsbGJhY2tJRCk7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9LCAwKTtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTRmxhc2hCcmlkZ2UsICdWUEFJRF9GTEFTSF9IQU5ETEVSJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBWUEFJRF9GTEFTSF9IQU5ETEVSXG59KTtcblxuLyoqXG4gKiBFeHRlcm5hbCBpbnRlcmZhY2UgaGFuZGxlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmbGFzaElEIGlkZW50aWZpZXIgb2YgdGhlIGZsYXNoIHdobyBjYWxsIHRoaXNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlSUQgd2hhdCB0eXBlIG9mIG1lc3NhZ2UgaXMsIGNhbiBiZSAnZXZlbnQnIG9yICdjYWxsYmFjaydcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlTmFtZSBpZiB0aGUgdHlwZUlEIGlzIGEgZXZlbnQgdGhlIHR5cGVOYW1lIHdpbGwgYmUgdGhlIGV2ZW50TmFtZSwgaWYgaXMgYSBjYWxsYmFjayB0aGUgdHlwZUlEIGlzIHRoZSBtZXRob2ROYW1lIHRoYXQgaXMgcmVsYXRlZCB0aGlzIGNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ30gY2FsbGJhY2tJRCBvbmx5IGFwcGxpZXMgd2hlbiB0aGUgdHlwZUlEIGlzICdjYWxsYmFjaycsIGlkZW50aWZpZXIgb2YgdGhlIGNhbGxiYWNrIHRvIGNhbGxcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvciBlcnJvciBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbndpbmRvd1tWUEFJRF9GTEFTSF9IQU5ETEVSXSA9IChmbGFzaElELCB0eXBlSUQsIHR5cGVOYW1lLCBjYWxsYmFja0lELCBlcnJvciwgZGF0YSkgPT4ge1xuICAgIGxldCBpbnN0YW5jZSA9IHJlZ2lzdHJ5LmdldEluc3RhbmNlQnlJRChmbGFzaElEKTtcbiAgICBpZiAoIWluc3RhbmNlKSByZXR1cm47XG4gICAgaWYgKHR5cGVOYW1lID09PSAnaGFuZFNoYWtlJykge1xuICAgICAgICBpbnN0YW5jZS5faGFuZFNoYWtlKGVycm9yLCBkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZUlEICE9PSAnZXZlbnQnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5fY2FsbENhbGxiYWNrKHR5cGVOYW1lLCBjYWxsYmFja0lELCBlcnJvciwgZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5fdHJpZ2dlcih0eXBlTmFtZSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmxldCBTaW5nbGVWYWx1ZVJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9yZWdpc3RyeScpLlNpbmdsZVZhbHVlUmVnaXN0cnk7XG5sZXQgaW5zdGFuY2VzID0gbmV3IFNpbmdsZVZhbHVlUmVnaXN0cnkoKTtcblxuY29uc3QgSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5ID0ge307XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5LCAnYWRkSW5zdGFuY2UnLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIChpZCwgaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2VzLmFkZChpZCwgaW5zdGFuY2UpO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5LCAnZ2V0SW5zdGFuY2VCeUlEJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlcy5nZXQoaWQpO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5LCAncmVtb3ZlSW5zdGFuY2VCeUlEJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlcy5yZW1vdmUoaWQpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEpTRmxhc2hCcmlkZ2VSZWdpc3RyeTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVWYWx1ZXNSZWdpc3RyeSB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLl9yZWdpc3RyaWVzID0ge307XG4gICAgfVxuICAgIGFkZCAoaWQsIHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5fcmVnaXN0cmllc1tpZF0pIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZ2lzdHJpZXNbaWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3JlZ2lzdHJpZXNbaWRdLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fcmVnaXN0cmllc1tpZF0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0cmllc1tpZF0gfHwgW107XG4gICAgfVxuICAgIGZpbHRlcktleXMgKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3JlZ2lzdHJpZXMpLmZpbHRlcihoYW5kbGVyKTtcbiAgICB9XG4gICAgZmluZEJ5VmFsdWUgKHZhbHVlKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5fcmVnaXN0cmllcykuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyaWVzW2tleV0uaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG4gICAgcmVtb3ZlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9yZWdpc3RyaWVzW2tleV0pIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fcmVnaXN0cmllc1trZXldLmluZGV4T2YodmFsdWUpO1xuXG4gICAgICAgIGlmIChpbmRleCA8IDApIHsgcmV0dXJuOyB9XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyaWVzW2tleV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgcmVtb3ZlQnlLZXkgKGlkKSB7XG4gICAgICAgIGxldCBvbGQgPSB0aGlzLl9yZWdpc3RyaWVzW2lkXTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3JlZ2lzdHJpZXNbaWRdO1xuICAgICAgICByZXR1cm4gb2xkO1xuICAgIH1cbiAgICByZW1vdmVCeVZhbHVlICh2YWx1ZSkge1xuICAgICAgICBsZXQga2V5cyA9IHRoaXMuZmluZEJ5VmFsdWUodmFsdWUpO1xuICAgICAgICByZXR1cm4ga2V5cy5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVtb3ZlQWxsKCkge1xuICAgICAgICBsZXQgb2xkID0gdGhpcy5fcmVnaXN0cmllcztcbiAgICAgICAgdGhpcy5fcmVnaXN0cmllcyA9IHt9O1xuICAgICAgICByZXR1cm4gb2xkO1xuICAgIH1cbiAgICBzaXplKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fcmVnaXN0cmllcykubGVuZ3RoO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpbmdsZVZhbHVlUmVnaXN0cnkge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5fcmVnaXN0cmllcyA9IHt9O1xuICAgIH1cbiAgICBhZGQgKGlkLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9yZWdpc3RyaWVzW2lkXSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyaWVzW2lkXTtcbiAgICB9XG4gICAgZmlsdGVyS2V5cyAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fcmVnaXN0cmllcykuZmlsdGVyKGhhbmRsZXIpO1xuICAgIH1cbiAgICBmaW5kQnlWYWx1ZSAodmFsdWUpIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9yZWdpc3RyaWVzKS5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdHJpZXNba2V5XSA9PT0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH1cbiAgICByZW1vdmUgKGlkKSB7XG4gICAgICAgIGxldCBvbGQgPSB0aGlzLl9yZWdpc3RyaWVzW2lkXTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3JlZ2lzdHJpZXNbaWRdO1xuICAgICAgICByZXR1cm4gb2xkO1xuICAgIH1cbiAgICByZW1vdmVCeVZhbHVlICh2YWx1ZSkge1xuICAgICAgICBsZXQga2V5cyA9IHRoaXMuZmluZEJ5VmFsdWUodmFsdWUpO1xuICAgICAgICByZXR1cm4ga2V5cy5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKGtleSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVBbGwoKSB7XG4gICAgICAgIGxldCBvbGQgPSB0aGlzLl9yZWdpc3RyaWVzO1xuICAgICAgICB0aGlzLl9yZWdpc3RyaWVzID0ge307XG4gICAgICAgIHJldHVybiBvbGQ7XG4gICAgfVxuICAgIHNpemUoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9yZWdpc3RyaWVzKS5sZW5ndGg7XG4gICAgfVxufVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWUocHJlZml4KSB7XG4gICAgbGV0IGNvdW50ID0gLTE7XG4gICAgcmV0dXJuIGYgPT4ge1xuICAgICAgICByZXR1cm4gYCR7cHJlZml4fV8keysrY291bnR9YDtcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbGJhY2tUaW1lb3V0KHRpbWVyLCBvblN1Y2Nlc3MsIG9uVGltZW91dCkge1xuXG4gICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICBvblN1Y2Nlc3MgPSBub29wO1xuICAgICAgICBvblRpbWVvdXQoKTtcblxuICAgIH0sIHRpbWVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgb25TdWNjZXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhJRChwYXJlbnQsIGlkLCBjbGVhbkNvbnRlbnQgPSBmYWxzZSkge1xuICAgIHZhciBuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuRWwuaWQgPSBpZDtcbiAgICBpZiAoY2xlYW5Db250ZW50KSB7XG4gICAgICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5FbCk7XG4gICAgcmV0dXJuIG5FbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUG9zaXRpdmVJbnQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobmV3VmFsKSkgJiYgaXNGaW5pdGUobmV3VmFsKSAmJiBuZXdWYWwgPiAwID8gbmV3VmFsIDogb2xkVmFsO1xufVxuXG5sZXQgZW5kc1dpdGggPSAoZnVuY3Rpb24gKCkge1xuICAgIGlmIChTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKSByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aDtcbiAgICByZXR1cm4gZnVuY3Rpb24gZW5kc1dpdGggKHNlYXJjaFN0cmluZywgcG9zaXRpb24pIHtcbiAgICAgICAgdmFyIHN1YmplY3RTdHJpbmcgPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHBvc2l0aW9uID4gc3ViamVjdFN0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gc3ViamVjdFN0cmluZy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcG9zaXRpb24gLT0gc2VhcmNoU3RyaW5nLmxlbmd0aDtcbiAgICAgICAgdmFyIGxhc3RJbmRleCA9IHN1YmplY3RTdHJpbmcuaW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIGxhc3RJbmRleCAhPT0gLTEgJiYgbGFzdEluZGV4ID09PSBwb3NpdGlvbjtcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0VuZHNXaXRoKHN0cmluZywgc2VhcmNoKSB7XG4gICAgcmV0dXJuIGVuZHNXaXRoLmNhbGwoc3RyaW5nLCBzZWFyY2gpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUZsYXNoRWwoZWwpIHtcbiAgICAvLyBjYW4ndCB1c2UgZGlzcGxheSBub25lIG9yIHZpc2liaWxpdHkgbm9uZSBiZWNhdXNlIHdpbGwgYmxvY2sgZmxhc2ggaW4gc29tZSBicm93c2Vyc1xuICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBlbC5zdHlsZS5sZWZ0ID0gJy0xcHgnO1xuICAgIGVsLnN0eWxlLnRvcCA9ICctMXB4JztcbiAgICBlbC5zdHlsZS53aWR0aCA9ICcxcHgnO1xuICAgIGVsLnN0eWxlLmhlaWdodCA9ICcxcHgnO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTUVUSE9EUyA9IFtcbiAgICAnaGFuZHNoYWtlVmVyc2lvbicsXG4gICAgJ2luaXRBZCcsXG4gICAgJ3N0YXJ0QWQnLFxuICAgICdzdG9wQWQnLFxuICAgICdza2lwQWQnLCAvLyBWUEFJRCAyLjAgbmV3IG1ldGhvZFxuICAgICdyZXNpemVBZCcsXG4gICAgJ3BhdXNlQWQnLFxuICAgICdyZXN1bWVBZCcsXG4gICAgJ2V4cGFuZEFkJyxcbiAgICAnY29sbGFwc2VBZCcsXG4gICAgJ3N1YnNjcmliZScsXG4gICAgJ3Vuc3Vic2NyaWJlJ1xuXTtcblxudmFyIEVWRU5UUyA9IFtcbiAgICAnQWRMb2FkZWQnLFxuICAgICdBZFN0YXJ0ZWQnLFxuICAgICdBZFN0b3BwZWQnLFxuICAgICdBZFNraXBwZWQnLFxuICAgICdBZFNraXBwYWJsZVN0YXRlQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZFNpemVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgJ0FkTGluZWFyQ2hhbmdlJyxcbiAgICAnQWREdXJhdGlvbkNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRFeHBhbmRlZENoYW5nZScsXG4gICAgJ0FkUmVtYWluaW5nVGltZUNoYW5nZScsIC8vIFtEZXByZWNhdGVkIGluIDIuMF0gYnV0IHdpbGwgYmUgc3RpbGwgZmlyZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgJ0FkVm9sdW1lQ2hhbmdlJyxcbiAgICAnQWRJbXByZXNzaW9uJyxcbiAgICAnQWRWaWRlb1N0YXJ0JyxcbiAgICAnQWRWaWRlb0ZpcnN0UXVhcnRpbGUnLFxuICAgICdBZFZpZGVvTWlkcG9pbnQnLFxuICAgICdBZFZpZGVvVGhpcmRRdWFydGlsZScsXG4gICAgJ0FkVmlkZW9Db21wbGV0ZScsXG4gICAgJ0FkQ2xpY2tUaHJ1JyxcbiAgICAnQWRJbnRlcmFjdGlvbicsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRVc2VyQWNjZXB0SW52aXRhdGlvbicsXG4gICAgJ0FkVXNlck1pbmltaXplJyxcbiAgICAnQWRVc2VyQ2xvc2UnLFxuICAgICdBZFBhdXNlZCcsXG4gICAgJ0FkUGxheWluZycsXG4gICAgJ0FkTG9nJyxcbiAgICAnQWRFcnJvcidcbl07XG5cbnZhciBHRVRURVJTID0gW1xuICAgICdnZXRBZExpbmVhcicsXG4gICAgJ2dldEFkV2lkdGgnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZEhlaWdodCcsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkRXhwYW5kZWQnLFxuICAgICdnZXRBZFNraXBwYWJsZVN0YXRlJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRSZW1haW5pbmdUaW1lJyxcbiAgICAnZ2V0QWREdXJhdGlvbicsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkVm9sdW1lJyxcbiAgICAnZ2V0QWRDb21wYW5pb25zJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRJY29ucycgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbl07XG5cbnZhciBTRVRURVJTID0gW1xuICAgICdzZXRBZFZvbHVtZSdcbl07XG5cblxuLyoqXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBnbG9iYWwgbWVtYmVyLiBUaGUgY2FsbGJhY2sgdXNlIG5vZGVqcyBlcnJvci1maXJzdCBjYWxsYmFjayBzdHlsZVxuICogQGNhbGxiYWNrIE5vZGVTdHlsZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfVxuICogQHBhcmFtIHt1bmRlZmluZWR8b2JqZWN0fVxuICovXG5cblxuLyoqXG4gKiBJVlBBSURBZFVuaXRcbiAqXG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY3JlYXRpdmVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IHZpZGVvXG4gKi9cbmZ1bmN0aW9uIElWUEFJREFkVW5pdChjcmVhdGl2ZSwgZWwsIHZpZGVvKSB7fVxuXG5cbi8qKlxuICogaGFuZHNoYWtlVmVyc2lvblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBWUEFJRFZlcnNpb25cbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuaGFuZHNoYWtlVmVyc2lvbiA9IGZ1bmN0aW9uIChWUEFJRFZlcnNpb24sIGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBpbml0QWRcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAqIEBwYXJhbSB7c3RyaW5nfSB2aWV3TW9kZSBjYW4gYmUgJ25vcm1hbCcsICd0aHVtYm5haWwnIG9yICdmdWxsc2NyZWVuJ1xuICogQHBhcmFtIHtudW1iZXJ9IGRlc2lyZWRCaXRyYXRlIGluZGljYXRlcyB0aGUgZGVzaXJlZCBiaXRyYXRlIGluIGticHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY3JlYXRpdmVEYXRhXSB1c2VkIGZvciBhZGRpdGlvbmFsIGluaXRpYWxpemF0aW9uIGRhdGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBbZW52aXJvbm1lbnRWYXJzXSB1c2VkIGZvciBwYXNzaW5nIGltcGxlbWVudGF0aW9uLXNwZWNpZmljIG9mIGpzIHZlcnNpb25cbiAqIEBwYXJhbSB7Tm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuaW5pdEFkID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEsIGVudmlyb25tZW50VmFycywgY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHN0YXJ0QWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnN0YXJ0QWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc3RvcEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zdG9wQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc2tpcEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5za2lwQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogcmVzaXplQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnJlc2l6ZUFkID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBwYXVzZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5wYXVzZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHJlc3VtZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5yZXN1bWVBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBleHBhbmRBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZXhwYW5kQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogY29sbGFwc2VBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuY29sbGFwc2VBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBzdWJzY3JpYmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGhhbmRsZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIsIGNvbnRleHQpIHt9O1xuXG4vKipcbiAqIHN0YXJ0QWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyKSB7fTtcblxuXG5cbi8qKlxuICogZ2V0QWRMaW5lYXJcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkTGluZWFyID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkV2lkdGhcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkV2lkdGggPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRIZWlnaHRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkSGVpZ2h0ID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkRXhwYW5kZWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkRXhwYW5kZWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRTa2lwcGFibGVTdGF0ZVxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRTa2lwcGFibGVTdGF0ZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZFJlbWFpbmluZ1RpbWVcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkUmVtYWluaW5nVGltZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZER1cmF0aW9uXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZER1cmF0aW9uID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZFZvbHVtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZENvbXBhbmlvbnNcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkQ29tcGFuaW9ucyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZEljb25zXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZEljb25zID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHNldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZVxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zZXRBZFZvbHVtZSA9IGZ1bmN0aW9uKHZvbHVtZSwgY2FsbGJhY2spIHt9O1xuXG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdNRVRIT0RTJywgTUVUSE9EUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdHRVRURVJTJywgR0VUVEVSUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdTRVRURVJTJywgU0VUVEVSUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdFVkVOVFMnLCAgRVZFTlRTKTtcblxuXG52YXIgVlBBSUQxX01FVEhPRFMgPSBNRVRIT0RTLmZpbHRlcihmdW5jdGlvbihtZXRob2QpIHtcbiAgICByZXR1cm4gWydza2lwQWQnXS5pbmRleE9mKG1ldGhvZCkgPT09IC0xO1xufSk7XG5cbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ2NoZWNrVlBBSURJbnRlcmZhY2UnLCBmdW5jdGlvbiBjaGVja1ZQQUlESW50ZXJmYWNlIChjcmVhdGl2ZSkge1xuICAgIHZhciByZXN1bHQgPSBWUEFJRDFfTUVUSE9EUy5ldmVyeShmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjcmVhdGl2ZVtrZXldID09PSAnZnVuY3Rpb24nO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJVlBBSURBZFVuaXQ7XG5cbmZ1bmN0aW9uIGFkZFN0YXRpY1RvSW50ZXJmYWNlKEludGVyZmFjZSwgbmFtZSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSW50ZXJmYWNlLCBuYW1lLCB7XG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG59XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIElWUEFJREFkVW5pdCA9IHJlcXVpcmUoJy4vSVZQQUlEQWRVbml0Jyk7XG52YXIgU3Vic2NyaWJlciA9IHJlcXVpcmUoJy4vc3Vic2NyaWJlcicpO1xudmFyIGNoZWNrVlBBSURJbnRlcmZhY2UgPSBJVlBBSURBZFVuaXQuY2hlY2tWUEFJREludGVyZmFjZTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBNRVRIT0RTID0gSVZQQUlEQWRVbml0Lk1FVEhPRFM7XG52YXIgRVJST1IgPSAnQWRFcnJvcic7XG52YXIgQURfQ0xJQ0sgPSAnQWRDbGlja1RocnUnO1xudmFyIEZJTFRFUkVEX0VWRU5UUyA9IElWUEFJREFkVW5pdC5FVkVOVFMuZmlsdGVyKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBldmVudCAhPSBBRF9DTElDSztcbn0pO1xuXG4vKipcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGdsb2JhbCBtZW1iZXIuIFRoZSBjYWxsYmFjayB1c2Ugbm9kZWpzIGVycm9yLWZpcnN0IGNhbGxiYWNrIHN0eWxlXG4gKiBAY2FsbGJhY2sgTm9kZVN0eWxlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9XG4gKiBAcGFyYW0ge3VuZGVmaW5lZHxvYmplY3R9XG4gKi9cblxuXG4vKipcbiAqIFZQQUlEQWRVbml0XG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0gVlBBSURDcmVhdGl2ZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2VsXSB0aGlzIHdpbGwgYmUgdXNlZCBpbiBpbml0QWQgZW52aXJvbm1lbnRWYXJzLnNsb3QgaWYgZGVmaW5lZFxuICogQHBhcmFtIHtIVE1MVmlkZW9FbGVtZW50fSBbdmlkZW9dIHRoaXMgd2lsbCBiZSB1c2VkIGluIGluaXRBZCBlbnZpcm9ubWVudFZhcnMudmlkZW9TbG90IGlmIGRlZmluZWRcbiAqL1xuZnVuY3Rpb24gVlBBSURBZFVuaXQoVlBBSURDcmVhdGl2ZSwgZWwsIHZpZGVvLCBpZnJhbWUpIHtcbiAgICB0aGlzLl9pc1ZhbGlkID0gY2hlY2tWUEFJREludGVyZmFjZShWUEFJRENyZWF0aXZlKTtcbiAgICBpZiAodGhpcy5faXNWYWxpZCkge1xuICAgICAgICB0aGlzLl9jcmVhdGl2ZSA9IFZQQUlEQ3JlYXRpdmU7XG4gICAgICAgIHRoaXMuX2VsID0gZWw7XG4gICAgICAgIHRoaXMuX3ZpZGVvRWwgPSB2aWRlbztcbiAgICAgICAgdGhpcy5faWZyYW1lID0gaWZyYW1lO1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVycyA9IG5ldyBTdWJzY3JpYmVyKCk7XG4gICAgICAgICRhZGRFdmVudHNTdWJzY3JpYmVycy5jYWxsKHRoaXMpO1xuICAgIH1cbn1cblxuVlBBSURBZFVuaXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJVlBBSURBZFVuaXQucHJvdG90eXBlKTtcblxuLyoqXG4gKiBpc1ZhbGlkVlBBSURBZCB3aWxsIHJldHVybiBpZiB0aGUgVlBBSURDcmVhdGl2ZSBwYXNzZWQgaW4gY29uc3RydWN0b3IgaXMgdmFsaWQgb3Igbm90XG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLmlzVmFsaWRWUEFJREFkID0gZnVuY3Rpb24gaXNWYWxpZFZQQUlEQWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQ7XG59O1xuXG5JVlBBSURBZFVuaXQuTUVUSE9EUy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIC8vTk9URTogdGhpcyBtZXRob2RzIGFyZ3VtZW50cyBvcmRlciBhcmUgaW1wbGVtZW50ZWQgZGlmZmVyZW50bHkgZnJvbSB0aGUgc3BlY1xuICAgIHZhciBpZ25vcmVzID0gW1xuICAgICAgICAnc3Vic2NyaWJlJyxcbiAgICAgICAgJ3Vuc3Vic2NyaWJlJyxcbiAgICAgICAgJ2luaXRBZCdcbiAgICBdO1xuXG4gICAgaWYgKGlnbm9yZXMuaW5kZXhPZihtZXRob2QpICE9PSAtMSkgcmV0dXJuO1xuXG4gICAgVlBBSURBZFVuaXQucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmlhdHkgPSBJVlBBSURBZFVuaXQucHJvdG90eXBlW21ldGhvZF0ubGVuZ3RoO1xuICAgICAgICAvLyBUT0RPIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRrYWFudG9ub3YvYmx1ZWJpcmQvd2lraS9PcHRpbWl6YXRpb24ta2lsbGVycyMzMi1sZWFraW5nLWFyZ3VtZW50c1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IChhcmlhdHkgPT09IGFyZ3MubGVuZ3RoKSA/IGFyZ3MucG9wKCkgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0LCBlcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0aXZlW21ldGhvZF0uYXBwbHkodGhpcy5fY3JlYXRpdmUsIGFyZ3MpO1xuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvciwgcmVzdWx0KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAwKTtcbiAgICB9O1xufSk7XG5cblxuLyoqXG4gKiBpbml0QWQgY29uY3JlYXRlIGltcGxlbWVudGF0aW9uXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKiBAcGFyYW0ge3N0cmluZ30gdmlld01vZGUgY2FuIGJlICdub3JtYWwnLCAndGh1bWJuYWlsJyBvciAnZnVsbHNjcmVlbidcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXNpcmVkQml0cmF0ZSBpbmRpY2F0ZXMgdGhlIGRlc2lyZWQgYml0cmF0ZSBpbiBrYnBzXG4gKiBAcGFyYW0ge29iamVjdH0gW2NyZWF0aXZlRGF0YV0gdXNlZCBmb3IgYWRkaXRpb25hbCBpbml0aWFsaXphdGlvbiBkYXRhXG4gKiBAcGFyYW0ge29iamVjdH0gW2Vudmlyb25tZW50VmFyc10gdXNlZCBmb3IgcGFzc2luZyBpbXBsZW1lbnRhdGlvbi1zcGVjaWZpYyBvZiBqcyB2ZXJzaW9uLCBpZiBlbCAmIHZpZGVvIHdhcyB1c2VkIGluIGNvbnN0cnVjdG9yIHNsb3QgJiB2aWRlb1Nsb3Qgd2lsbCBiZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiBAcGFyYW0ge05vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuaW5pdEFkID0gZnVuY3Rpb24gaW5pdEFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhLCBlbnZpcm9ubWVudFZhcnMsIGNhbGxiYWNrKSB7XG4gICAgY3JlYXRpdmVEYXRhID0gY3JlYXRpdmVEYXRhIHx8IHt9O1xuICAgIGVudmlyb25tZW50VmFycyA9IHV0aWxzLmV4dGVuZCh7XG4gICAgICAgIHNsb3Q6IHRoaXMuX2VsLFxuICAgICAgICB2aWRlb1Nsb3Q6IHRoaXMuX3ZpZGVvRWxcbiAgICB9LCBlbnZpcm9ubWVudFZhcnMgfHwge30pO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0aXZlLmluaXRBZCh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSwgZW52aXJvbm1lbnRWYXJzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IpO1xuICAgIH0uYmluZCh0aGlzKSwgMCk7XG59O1xuXG4vKipcbiAqIHN1YnNjcmliZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gaGFuZGxlclxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShldmVudCwgaGFuZGxlciwgY29udGV4dCkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnN1YnNjcmliZShoYW5kbGVyLCBldmVudCwgY29udGV4dCk7XG59O1xuXG5cbi8qKlxuICogdW5zdWJzY3JpYmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGhhbmRsZXJcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy51bnN1YnNjcmliZShoYW5kbGVyLCBldmVudCk7XG59O1xuXG4vL2FsaWFzXG5WUEFJREFkVW5pdC5wcm90b3R5cGUub24gPSBWUEFJREFkVW5pdC5wcm90b3R5cGUuc3Vic2NyaWJlO1xuVlBBSURBZFVuaXQucHJvdG90eXBlLm9mZiA9IFZQQUlEQWRVbml0LnByb3RvdHlwZS51bnN1YnNjcmliZTtcblxuSVZQQUlEQWRVbml0LkdFVFRFUlMuZm9yRWFjaChmdW5jdGlvbihnZXR0ZXIpIHtcbiAgICBWUEFJREFkVW5pdC5wcm90b3R5cGVbZ2V0dGVyXSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCwgZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9jcmVhdGl2ZVtnZXR0ZXJdKCk7XG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgdGhpcy5fc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpO1xuICAgICAgICB9LmJpbmQodGhpcyksIDApO1xuICAgIH07XG59KTtcblxuLyoqXG4gKiBzZXRBZFZvbHVtZVxuICpcbiAqIEBwYXJhbSB2b2x1bWVcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS5zZXRBZFZvbHVtZSA9IGZ1bmN0aW9uIHNldEFkVm9sdW1lKHZvbHVtZSwgY2FsbGJhY2spIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgcmVzdWx0LCBlcnJvciA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGl2ZS5zZXRBZFZvbHVtZSh2b2x1bWUpO1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fY3JlYXRpdmUuZ2V0QWRWb2x1bWUoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICBlcnJvciA9IHV0aWxzLnZhbGlkYXRlKHJlc3VsdCA9PT0gdm9sdW1lLCAnZmFpbGVkIHRvIGFwcGx5IHZvbHVtZTogJyArIHZvbHVtZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCk7XG4gICAgfS5iaW5kKHRoaXMpLCAwKTtcbn07XG5cblZQQUlEQWRVbml0LnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdG9wQWQoKTtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy51bnN1YnNjcmliZUFsbCgpO1xufTtcblxuZnVuY3Rpb24gJGFkZEV2ZW50c1N1YnNjcmliZXJzKCkge1xuICAgIC8vIHNvbWUgYWRzIGltcGxlbWVudFxuICAgIC8vIHNvIHRoZXkgb25seSBoYW5kbGUgb25lIHN1YnNjcmliZXJcbiAgICAvLyB0byBoYW5kbGUgdGhpcyB3ZSBjcmVhdGUgb3VyIG9uZVxuICAgIEZJTFRFUkVEX0VWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLl9jcmVhdGl2ZS5zdWJzY3JpYmUoJHRyaWdnZXIuYmluZCh0aGlzLCBldmVudCksIGV2ZW50KTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgLy8gbWFwIHRoZSBjbGljayBldmVudCB0byBiZSBhbiBvYmplY3QgaW5zdGVhZCBvZiBkZXBlbmRpbmcgb2YgdGhlIG9yZGVyIG9mIHRoZSBhcmd1bWVudHNcbiAgICAvLyBhbmQgdG8gYmUgY29uc2lzdGVudCB3aXRoIHRoZSBmbGFzaFxuICAgIHRoaXMuX2NyZWF0aXZlLnN1YnNjcmliZSgkY2xpY2tUaHJ1SG9vay5iaW5kKHRoaXMpLCBBRF9DTElDSyk7XG5cbiAgICAvLyBiZWNhdXNlIHdlIGFyZSBhZGRpbmcgdGhlIGVsZW1lbnQgaW5zaWRlIHRoZSBpZnJhbWVcbiAgICAvLyB0aGUgdXNlciBpcyBub3QgYWJsZSB0byBjbGljayBpbiB0aGUgdmlkZW9cbiAgICBpZiAodGhpcy5fdmlkZW9FbCkge1xuICAgICAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gdGhpcy5faWZyYW1lLmNvbnRlbnREb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciB2aWRlb0VsID0gdGhpcy5fdmlkZW9FbDtcbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2aWRlb0VsLmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gJGNsaWNrVGhydUhvb2sodXJsLCBpZCwgcGxheWVySGFuZGxlcykge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnRyaWdnZXJTeW5jKEFEX0NMSUNLLCB7dXJsOiB1cmwsIGlkOiBpZCwgcGxheWVySGFuZGxlczogcGxheWVySGFuZGxlc30pO1xufVxuXG5mdW5jdGlvbiAkdHJpZ2dlcihldmVudCkge1xuICAgIC8vIFRPRE8gYXZvaWQgbGVha2luZyBhcmd1bWVudHNcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkL3dpa2kvT3B0aW1pemF0aW9uLWtpbGxlcnMjMzItbGVha2luZy1hcmd1bWVudHNcbiAgICB0aGlzLl9zdWJzY3JpYmVycy50cmlnZ2VyKGV2ZW50LCBBcnJheS5wcm90b3R5cGUuc2xpY2UoYXJndW1lbnRzLCAxKSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIHJlc3VsdCk7XG4gICAgfSBlbHNlIGlmIChlcnJvcikge1xuICAgICAgICBzdWJzY3JpYmVycy50cmlnZ2VyKEVSUk9SLCBlcnJvcik7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlEQWRVbml0O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciB1bmlxdWUgPSB1dGlscy51bmlxdWUoJ3ZwYWlkSWZyYW1lJyk7XG52YXIgVlBBSURBZFVuaXQgPSByZXF1aXJlKCcuL1ZQQUlEQWRVbml0Jyk7XG5cbnZhciBkZWZhdWx0VGVtcGxhdGUgPSAnPCFET0NUWVBFIGh0bWw+JyArXG4gICAgJzxodG1sIGxhbmc9XCJlblwiPicgK1xuICAgICc8aGVhZD48bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L2hlYWQ+JyArXG4gICAgJzxib2R5IHN0eWxlPVwibWFyZ2luOjA7cGFkZGluZzowXCI+PGRpdiBjbGFzcz1cImFkLWVsZW1lbnRcIj48L2Rpdj4nICtcbiAgICAnPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwie3tpZnJhbWVVUkxfSlN9fVwiPjwvc2NyaXB0PicgK1xuICAgICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj4nICtcbiAgICAnd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShcXCd7XCJldmVudFwiOiBcInJlYWR5XCIsIFwiaWRcIjogXCJ7e2lmcmFtZUlEfX1cIn1cXCcsIFxcJ3t7b3JpZ2lufX1cXCcpOycgK1xuICAgICc8L3NjcmlwdD4nICtcbiAgICAnPC9ib2R5PicgK1xuICAgICc8L2h0bWw+JztcblxudmFyIEFEX1NUT1BQRUQgPSAnQWRTdG9wcGVkJztcblxuLyoqXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBnbG9iYWwgbWVtYmVyLiBUaGUgY2FsbGJhY2sgdXNlIG5vZGVqcyBlcnJvci1maXJzdCBjYWxsYmFjayBzdHlsZVxuICogQGNhbGxiYWNrIE5vZGVTdHlsZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfVxuICogQHBhcmFtIHt1bmRlZmluZWR8b2JqZWN0fVxuICovXG5cbi8qKlxuICogVlBBSURIVE1MNUNsaWVudFxuICogQGNsYXNzXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGlmcmFtZSB0byBsb2FkIGFkVW5pdCBhbmQgYSBlbCB0byBhZGQgdG8gYWRVbml0IHNsb3RcbiAqIEBwYXJhbSB7SFRNTFZpZGVvRWxlbWVudH0gdmlkZW8gZGVmYXVsdCB2aWRlbyBlbGVtZW50IHRvIGJlIHVzZWQgYnkgYWRVbml0XG4gKiBAcGFyYW0ge29iamVjdH0gW3RlbXBsYXRlQ29uZmlnXSB0ZW1wbGF0ZTogaHRtbCB0ZW1wbGF0ZSB0byBiZSB1c2VkIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQsIGV4dHJhT3B0aW9uczogdG8gYmUgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgdGVtcGxhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbdnBhaWRPcHRpb25zXSB0aW1lb3V0OiB3aGVuIGxvYWRpbmcgYWRVbml0XG4gKi9cbmZ1bmN0aW9uIFZQQUlESFRNTDVDbGllbnQoZWwsIHZpZGVvLCB0ZW1wbGF0ZUNvbmZpZywgdnBhaWRPcHRpb25zKSB7XG4gICAgdGVtcGxhdGVDb25maWcgPSB0ZW1wbGF0ZUNvbmZpZyB8fCB7fTtcblxuICAgIHRoaXMuX2lkID0gdW5pcXVlKCk7XG4gICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICB0aGlzLl9mcmFtZUNvbnRhaW5lciA9IHV0aWxzLmNyZWF0ZUVsZW1lbnRJbkVsKGVsLCAnZGl2Jyk7XG4gICAgdGhpcy5fdmlkZW9FbCA9IHZpZGVvO1xuICAgIHRoaXMuX3ZwYWlkT3B0aW9ucyA9IHZwYWlkT3B0aW9ucyB8fCB7dGltZW91dDogMTAwMDB9O1xuXG4gICAgdGhpcy5fdGVtcGxhdGVDb25maWcgPSB7XG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZUNvbmZpZy50ZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGUsXG4gICAgICAgIGV4dHJhT3B0aW9uczogdGVtcGxhdGVDb25maWcuZXh0cmFPcHRpb25zIHx8IHt9XG4gICAgfTtcbn1cblxuLyoqXG4gKiBkZXN0cm95XG4gKlxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAkdW5sb2FkUHJldmlvdXNBZFVuaXQuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogaXNEZXN0cm95ZWRcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5pc0Rlc3Ryb3llZCA9IGZ1bmN0aW9uIGlzRGVzdHJveWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXN0cm95ZWQ7XG59O1xuXG4vKipcbiAqIGxvYWRBZFVuaXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYWRVUkwgdXJsIG9mIHRoZSBqcyBvZiB0aGUgYWRVbml0XG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5sb2FkQWRVbml0ID0gZnVuY3Rpb24gbG9hZEFkVW5pdChhZFVSTCwgY2FsbGJhY2spIHtcbiAgICAkdGhyb3dJZkRlc3Ryb3llZC5jYWxsKHRoaXMpO1xuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIHZhciBmcmFtZSA9IHV0aWxzLmNyZWF0ZUlmcmFtZVdpdGhDb250ZW50KFxuICAgICAgICB0aGlzLl9mcmFtZUNvbnRhaW5lcixcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVDb25maWcudGVtcGxhdGUsXG4gICAgICAgIHV0aWxzLmV4dGVuZCh7XG4gICAgICAgICAgICBpZnJhbWVVUkxfSlM6IGFkVVJMLFxuICAgICAgICAgICAgaWZyYW1lSUQ6IHRoaXMuZ2V0SUQoKSxcbiAgICAgICAgICAgIG9yaWdpbjogZ2V0T3JpZ2luKClcbiAgICAgICAgfSwgdGhpcy5fdGVtcGxhdGVDb25maWcuZXh0cmFPcHRpb25zKVxuICAgICk7XG5cbiAgICB0aGlzLl9mcmFtZSA9IGZyYW1lO1xuXG4gICAgdGhpcy5fb25Mb2FkID0gdXRpbHMuY2FsbGJhY2tUaW1lb3V0KFxuICAgICAgICB0aGlzLl92cGFpZE9wdGlvbnMudGltZW91dCxcbiAgICAgICAgb25Mb2FkLmJpbmQodGhpcyksXG4gICAgICAgIG9uVGltZW91dC5iaW5kKHRoaXMpXG4gICAgKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5fb25Mb2FkKTtcblxuICAgIGZ1bmN0aW9uIG9uTG9hZCAoZSkge1xuICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6IGZhbHNlICovXG4gICAgICAgIC8vZG9uJ3QgY2xlYXIgdGltZW91dFxuICAgICAgICBpZiAoZS5vcmlnaW4gIT09IGdldE9yaWdpbigpKSByZXR1cm47XG4gICAgICAgIHZhciByZXN1bHQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG5cbiAgICAgICAgLy9kb24ndCBjbGVhciB0aW1lb3V0XG4gICAgICAgIGlmIChyZXN1bHQuaWQgIT09IHRoYXQuZ2V0SUQoKSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBhZFVuaXQsIGVycm9yLCBjcmVhdGVBZDtcbiAgICAgICAgaWYgKCF0aGF0Ll9mcmFtZS5jb250ZW50V2luZG93KSB7XG5cbiAgICAgICAgICAgIGVycm9yID0gJ3RoZSBpZnJhbWUgaXMgbm90IGFueW1vcmUgaW4gdGhlIERPTSB0cmVlJztcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3JlYXRlQWQgPSB0aGF0Ll9mcmFtZS5jb250ZW50V2luZG93LmdldFZQQUlEQWQ7XG4gICAgICAgICAgICBlcnJvciA9IHV0aWxzLnZhbGlkYXRlKHR5cGVvZiBjcmVhdGVBZCA9PT0gJ2Z1bmN0aW9uJywgJ3RoZSBhZCBkaWRuXFwndCByZXR1cm4gYSBmdW5jdGlvbiB0byBjcmVhdGUgYW4gYWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBhZEVsID0gdGhhdC5fZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWQtZWxlbWVudCcpO1xuICAgICAgICAgICAgYWRVbml0ID0gbmV3IFZQQUlEQWRVbml0KGNyZWF0ZUFkKCksIGFkRWwsIHRoYXQuX3ZpZGVvRWwsIHRoYXQuX2ZyYW1lKTtcbiAgICAgICAgICAgIGFkVW5pdC5zdWJzY3JpYmUoQURfU1RPUFBFRCwgJGFkRGVzdHJveWVkLmJpbmQodGhhdCkpO1xuICAgICAgICAgICAgZXJyb3IgPSB1dGlscy52YWxpZGF0ZShhZFVuaXQuaXNWYWxpZFZQQUlEQWQoKSwgJ3RoZSBhZGQgaXMgbm90IGZ1bGx5IGNvbXBsYWludCB3aXRoIFZQQUlEIHNwZWNpZmljYXRpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoYXQuX2FkVW5pdCA9IGFkVW5pdDtcbiAgICAgICAgJGRlc3Ryb3lMb2FkTGlzdGVuZXIuY2FsbCh0aGF0KTtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIGVycm9yID8gbnVsbCA6IGFkVW5pdCk7XG5cbiAgICAgICAgLy9jbGVhciB0aW1lb3V0XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgICAgY2FsbGJhY2soJ3RpbWVvdXQnLCBudWxsKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIHVubG9hZEFkVW5pdFxuICpcbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUudW5sb2FkQWRVbml0ID0gZnVuY3Rpb24gdW5sb2FkQWRVbml0KCkge1xuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBnZXRJRCB3aWxsIHJldHVybiB0aGUgdW5pcXVlIGlkXG4gKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5nZXRJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG59O1xuXG5cbi8qKlxuICogJHJlbW92ZUVsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5mdW5jdGlvbiAkcmVtb3ZlRWwoa2V5KSB7XG4gICAgdmFyIGVsID0gdGhpc1trZXldO1xuICAgIGlmIChlbCkge1xuICAgICAgICBlbC5yZW1vdmUoKTtcbiAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uICRhZERlc3Ryb3llZCgpIHtcbiAgICAkcmVtb3ZlQWRFbGVtZW50cy5jYWxsKHRoaXMpO1xuICAgIGRlbGV0ZSB0aGlzLl9hZFVuaXQ7XG59XG5cbmZ1bmN0aW9uICR1bmxvYWRQcmV2aW91c0FkVW5pdCgpIHtcbiAgICAkcmVtb3ZlQWRFbGVtZW50cy5jYWxsKHRoaXMpO1xuICAgICRkZXN0cm95QWRVbml0LmNhbGwodGhpcyk7XG59XG5cbmZ1bmN0aW9uICRyZW1vdmVBZEVsZW1lbnRzKCkge1xuICAgICRyZW1vdmVFbC5jYWxsKHRoaXMsICdfZnJhbWUnKTtcbiAgICAkZGVzdHJveUxvYWRMaXN0ZW5lci5jYWxsKHRoaXMpO1xufVxuXG4vKipcbiAqICRkZXN0cm95TG9hZExpc3RlbmVyXG4gKlxuICovXG5mdW5jdGlvbiAkZGVzdHJveUxvYWRMaXN0ZW5lcigpIHtcbiAgICBpZiAodGhpcy5fb25Mb2FkKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5fb25Mb2FkKTtcbiAgICAgICAgdXRpbHMuY2xlYXJDYWxsYmFja1RpbWVvdXQodGhpcy5fb25Mb2FkKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX29uTG9hZDtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gJGRlc3Ryb3lBZFVuaXQoKSB7XG4gICAgaWYgKHRoaXMuX2FkVW5pdCkge1xuICAgICAgICB0aGlzLl9hZFVuaXQuc3RvcEFkKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9hZFVuaXQ7XG4gICAgfVxufVxuXG4vKipcbiAqICR0aHJvd0lmRGVzdHJveWVkXG4gKlxuICovXG5mdW5jdGlvbiAkdGhyb3dJZkRlc3Ryb3llZCgpIHtcbiAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvciAoJ1ZQQUlESFRNTDVDbGllbnQgYWxyZWFkeSBkZXN0cm95ZWQhJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRPcmlnaW4oKSB7XG4gICAgaWYoIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgK1xuICAgICAgICAgICAgKHdpbmRvdy5sb2NhdGlvbi5wb3J0ID8gJzonICsgd2luZG93LmxvY2F0aW9uLnBvcnQ6ICcnKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURIVE1MNUNsaWVudDtcbndpbmRvdy5WUEFJREhUTUw1Q2xpZW50ID0gVlBBSURIVE1MNUNsaWVudDtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBTdWJzY3JpYmVyKCkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzID0ge307XG59XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShoYW5kbGVyLCBldmVudE5hbWUsIGNvbnRleHQpIHtcbiAgICBpZiAoIXRoaXMuaXNIYW5kbGVyQXR0YWNoZWQoaGFuZGxlciwgZXZlbnROYW1lKSkge1xuICAgICAgICB0aGlzLmdldChldmVudE5hbWUpLnB1c2goe2hhbmRsZXI6IGhhbmRsZXIsIGNvbnRleHQ6IGNvbnRleHQsIGV2ZW50TmFtZTogZXZlbnROYW1lfSk7XG4gICAgfVxufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZShoYW5kbGVyLCBldmVudE5hbWUpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdID0gdGhpcy5nZXQoZXZlbnROYW1lKS5maWx0ZXIoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIgIT09IHN1YnNjcmliZXIuaGFuZGxlcjtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlQWxsID0gZnVuY3Rpb24gdW5zdWJzY3JpYmVBbGwoKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSB7fTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIHN1YnNjcmliZXJzID0gdGhpcy5nZXQoZXZlbnROYW1lKVxuICAgICAgICAuY29uY2F0KHRoaXMuZ2V0KCcqJykpO1xuXG4gICAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGF0LmlzSGFuZGxlckF0dGFjaGVkKHN1YnNjcmliZXIuaGFuZGxlciwgc3Vic2NyaWJlci5ldmVudE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5oYW5kbGVyLmNhbGwoc3Vic2NyaWJlci5jb250ZXh0LCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgfSk7XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS50cmlnZ2VyU3luYyA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciBzdWJzY3JpYmVycyA9IHRoaXMuZ2V0KGV2ZW50TmFtZSlcbiAgICAgICAgLmNvbmNhdCh0aGlzLmdldCgnKicpKTtcblxuICAgIHN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgc3Vic2NyaWJlci5oYW5kbGVyLmNhbGwoc3Vic2NyaWJlci5jb250ZXh0LCBkYXRhKTtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChldmVudE5hbWUpIHtcbiAgICBpZiAoIXRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLmlzSGFuZGxlckF0dGFjaGVkID0gZnVuY3Rpb24gaXNIYW5kbGVyQXR0YWNoZWQoaGFuZGxlciwgZXZlbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGV2ZW50TmFtZSkuc29tZShmdW5jdGlvbihzdWJzY3JpYmVyKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyID09PSBzdWJzY3JpYmVyLmhhbmRsZXI7XG4gICAgfSlcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3Vic2NyaWJlcjtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIG5vb3AgYSBlbXB0eSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBub29wKCkge31cblxuLyoqXG4gKiB2YWxpZGF0ZSBpZiBpcyBub3QgdmFsaWRhdGUgd2lsbCByZXR1cm4gYW4gRXJyb3Igd2l0aCB0aGUgbWVzc2FnZVxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWYWxpZFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGUoaXNWYWxpZCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBpc1ZhbGlkID8gbnVsbCA6IG5ldyBFcnJvcihtZXNzYWdlKTtcbn1cblxudmFyIHRpbWVvdXRzID0ge307XG4vKipcbiAqIGNsZWFyQ2FsbGJhY2tUaW1lb3V0XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBoYW5kbGVyIHRvIHJlbW92ZVxuICovXG5mdW5jdGlvbiBjbGVhckNhbGxiYWNrVGltZW91dChmdW5jKSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aW1lb3V0c1tmdW5jXTtcbiAgICBpZiAodGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIGRlbGV0ZSB0aW1lb3V0c1tmdW5jXTtcbiAgICB9XG59XG5cbi8qKlxuICogY2FsbGJhY2tUaW1lb3V0IGlmIHRoZSBvblN1Y2Nlc3MgaXMgbm90IGNhbGxlZCBhbmQgcmV0dXJucyB0cnVlIGluIHRoZSB0aW1lbGltaXQgdGhlbiBvblRpbWVvdXQgd2lsbCBiZSBjYWxsZWRcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZXJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uU3VjY2Vzc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gb25UaW1lb3V0XG4gKi9cbmZ1bmN0aW9uIGNhbGxiYWNrVGltZW91dCh0aW1lciwgb25TdWNjZXNzLCBvblRpbWVvdXQpIHtcbiAgICB2YXIgY2FsbGJhY2ssIHRpbWVvdXQ7XG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uU3VjY2VzcyA9IG5vb3A7XG4gICAgICAgIGRlbGV0ZSB0aW1lb3V0W2NhbGxiYWNrXTtcbiAgICAgICAgb25UaW1lb3V0KCk7XG4gICAgfSwgdGltZXIpO1xuXG4gICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRPRE8gYXZvaWQgbGVha2luZyBhcmd1bWVudHNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzMyLWxlYWtpbmctYXJndW1lbnRzXG4gICAgICAgIGlmIChvblN1Y2Nlc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgY2xlYXJDYWxsYmFja1RpbWVvdXQoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRpbWVvdXRzW2NhbGxiYWNrXSA9IHRpbWVvdXQ7XG5cbiAgICByZXR1cm4gY2FsbGJhY2s7XG59XG5cblxuLyoqXG4gKiBjcmVhdGVFbGVtZW50SW5FbFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICovXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50SW5FbChwYXJlbnQsIHRhZ05hbWUsIGlkKSB7XG4gICAgdmFyIG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgaWYgKGlkKSBuRWwuaWQgPSBpZDtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobkVsKTtcbiAgICByZXR1cm4gbkVsO1xufVxuXG4vKipcbiAqIGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgc2ltcGxlIHRlbXBsYXRlIHVzaW5nIHt7dmFyfX1cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50KHBhcmVudCwgdGVtcGxhdGUsIGRhdGEpIHtcbiAgICB2YXIgaWZyYW1lID0gY3JlYXRlSWZyYW1lKHBhcmVudCwgbnVsbCwgZGF0YS56SW5kZXgpO1xuICAgIGlmICghc2V0SWZyYW1lQ29udGVudChpZnJhbWUsIHNpbXBsZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKSkpIHJldHVybjtcbiAgICByZXR1cm4gaWZyYW1lO1xufVxuXG4vKipcbiAqIGNyZWF0ZUlmcmFtZVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5mdW5jdGlvbiBjcmVhdGVJZnJhbWUocGFyZW50LCB1cmwsIHpJbmRleCkge1xuICAgIHZhciBuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICBuRWwuc3JjID0gdXJsIHx8ICdhYm91dDpibGFuayc7XG4gICAgbkVsLm1hcmdpbldpZHRoID0gJzAnO1xuICAgIG5FbC5tYXJnaW5IZWlnaHQgPSAnMCc7XG4gICAgbkVsLmZyYW1lQm9yZGVyID0gJzAnO1xuICAgIG5FbC53aWR0aCA9ICcxMDAlJztcbiAgICBuRWwuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIG5FbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgbkVsLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgbkVsLnN0eWxlLnRvcCA9ICcwJztcbiAgICBuRWwuc3R5bGUubWFyZ2luID0gJzBweCc7XG4gICAgbkVsLnN0eWxlLnBhZGRpbmcgPSAnMHB4JztcbiAgICBuRWwuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuXG4gICAgaWYoekluZGV4KXtcbiAgICAgICAgbkVsLnN0eWxlLnpJbmRleCA9IHpJbmRleDtcbiAgICB9XG5cbiAgICBuRWwuc2V0QXR0cmlidXRlKCdTQ1JPTExJTkcnLCdOTycpO1xuICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobkVsKTtcbiAgICByZXR1cm4gbkVsO1xufVxuXG4vKipcbiAqIHNpbXBsZVRlbXBsYXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICovXG5mdW5jdGlvbiBzaW1wbGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgPyBKU09OLnN0cmluZ2lmeShkYXRhW2tleV0pIDogZGF0YVtrZXldO1xuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UobmV3IFJlZ0V4cCgne3snICsga2V5ICsgJ319JywgJ2cnKSwgdmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn1cblxuLyoqXG4gKiBzZXRJZnJhbWVDb250ZW50XG4gKlxuICogQHBhcmFtIHtIVE1MSWZyYW1lRWxlbWVudH0gaWZyYW1lRWxcbiAqIEBwYXJhbSBjb250ZW50XG4gKi9cbmZ1bmN0aW9uIHNldElmcmFtZUNvbnRlbnQoaWZyYW1lRWwsIGNvbnRlbnQpIHtcbiAgICB2YXIgaWZyYW1lRG9jID0gaWZyYW1lRWwuY29udGVudFdpbmRvdyAmJiBpZnJhbWVFbC5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICAgIGlmICghaWZyYW1lRG9jKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZnJhbWVEb2Mud3JpdGUoY29udGVudCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuXG4vKipcbiAqIGV4dGVuZCBvYmplY3Qgd2l0aCBrZXlzIGZyb20gYW5vdGhlciBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdG9FeHRlbmRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmcm9tU291cmNlXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCh0b0V4dGVuZCwgZnJvbVNvdXJjZSkge1xuICAgIE9iamVjdC5rZXlzKGZyb21Tb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHRvRXh0ZW5kW2tleV0gPSBmcm9tU291cmNlW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIHRvRXh0ZW5kO1xufVxuXG5cbi8qKlxuICogdW5pcXVlIHdpbGwgY3JlYXRlIGEgdW5pcXVlIHN0cmluZyBldmVyeXRpbWUgaXMgY2FsbGVkLCBzZXF1ZW50aWFsbHkgYW5kIHByZWZpeGVkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuICovXG5mdW5jdGlvbiB1bmlxdWUocHJlZml4KSB7XG4gICAgdmFyIGNvdW50ID0gLTE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdfJyArICgrK2NvdW50KTtcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBub29wOiBub29wLFxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZSxcbiAgICBjbGVhckNhbGxiYWNrVGltZW91dDogY2xlYXJDYWxsYmFja1RpbWVvdXQsXG4gICAgY2FsbGJhY2tUaW1lb3V0OiBjYWxsYmFja1RpbWVvdXQsXG4gICAgY3JlYXRlRWxlbWVudEluRWw6IGNyZWF0ZUVsZW1lbnRJbkVsLFxuICAgIGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50OiBjcmVhdGVJZnJhbWVXaXRoQ29udGVudCxcbiAgICBjcmVhdGVJZnJhbWU6IGNyZWF0ZUlmcmFtZSxcbiAgICBzaW1wbGVUZW1wbGF0ZTogc2ltcGxlVGVtcGxhdGUsXG4gICAgc2V0SWZyYW1lQ29udGVudDogc2V0SWZyYW1lQ29udGVudCxcbiAgICBleHRlbmQ6IGV4dGVuZCxcbiAgICB1bmlxdWU6IHVuaXF1ZVxufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIEluTGluZSA9IHJlcXVpcmUoJy4vSW5MaW5lJyk7XHJcbnZhciBXcmFwcGVyID0gcmVxdWlyZSgnLi9XcmFwcGVyJyk7XHJcblxyXG5mdW5jdGlvbiBBZChhZEpUcmVlKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEFkKSkge1xyXG4gICAgcmV0dXJuIG5ldyBBZChhZEpUcmVlKTtcclxuICB9XHJcbiAgdGhpcy5pbml0aWFsaXplKGFkSlRyZWUpO1xyXG59XHJcblxyXG5BZC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKGFkSlRyZWUpIHtcclxuICB0aGlzLmlkID0gYWRKVHJlZS5hdHRyKCdpZCcpO1xyXG4gIHRoaXMuc2VxdWVuY2UgPSBhZEpUcmVlLmF0dHIoJ3NlcXVlbmNlJyk7XHJcblxyXG4gIGlmKGFkSlRyZWUuaW5MaW5lKSB7XHJcbiAgICB0aGlzLmluTGluZSA9IG5ldyBJbkxpbmUoYWRKVHJlZS5pbkxpbmUpO1xyXG4gIH1cclxuXHJcbiAgaWYoYWRKVHJlZS53cmFwcGVyKXtcclxuICAgIHRoaXMud3JhcHBlciA9IG5ldyBXcmFwcGVyKGFkSlRyZWUud3JhcHBlcik7XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBZDsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgVHJhY2tpbmdFdmVudCA9IHJlcXVpcmUoJy4vVHJhY2tpbmdFdmVudCcpO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxuXHJcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcclxuXHJcblxyXG5mdW5jdGlvbiBDb21wYW5pb24oY29tcGFuaW9uSlRyZWUpIHtcclxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFuaW9uKSkge1xyXG4gICAgcmV0dXJuIG5ldyBDb21wYW5pb24oY29tcGFuaW9uSlRyZWUpO1xyXG4gIH1cclxuXHJcbiAgLy9SZXF1aXJlZCBFbGVtZW50c1xyXG4gIHRoaXMuY3JlYXRpdmVUeXBlID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUuc3RhdGljUmVzb3VyY2UsICdjcmVhdGl2ZVR5cGUnKTtcclxuICB0aGlzLnN0YXRpY1Jlc291cmNlID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLnN0YXRpY1Jlc291cmNlKTtcclxuXHJcbiAgLy8gV2VpcmQgYnVnIHdoZW4gdGhlIEpYT04gdHJlZSBpcyBidWlsdCBpdCBkb2Vzbid0IGhhbmRsZSBjYXNpbmcgcHJvcGVybHkgaW4gdGhpcyBzaXR1YXRpb24uLi5cclxuICB2YXIgaHRtbFJlc291cmNlID0gbnVsbDtcclxuICBpZiAoeG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLkhUTUxSZXNvdXJjZSkpIHtcclxuICAgIGh0bWxSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5IVE1MUmVzb3VyY2UpO1xyXG4gIH0gZWxzZSBpZiAoeG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmhUTUxSZXNvdXJjZSkpIHtcclxuICAgIGh0bWxSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5oVE1MUmVzb3VyY2UpO1xyXG4gIH1cclxuICB0aGlzLmh0bWxSZXNvdXJjZSA9IGh0bWxSZXNvdXJjZTtcclxuXHJcbiAgdmFyIGlmcmFtZVJlc291cmNlID0gbnVsbDtcclxuICBpZiAoeG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLklGcmFtZVJlc291cmNlKSkge1xyXG4gICAgaWZyYW1lUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuSUZyYW1lUmVzb3VyY2UpO1xyXG4gIH0gZWxzZSBpZiAoeG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmlGcmFtZXJlc291cmNlKSkge1xyXG4gICAgaWZyYW1lUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuaUZyYW1lcmVzb3VyY2UpO1xyXG4gIH1cclxuICB0aGlzLmlmcmFtZVJlc291cmNlID0gaWZyYW1lUmVzb3VyY2U7XHJcblxyXG4gIC8vT3B0aW9uYWwgZmllbGRzXHJcbiAgdGhpcy5pZCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnaWQnKTtcclxuICB0aGlzLndpZHRoID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICd3aWR0aCcpO1xyXG4gIHRoaXMuaGVpZ2h0ID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdoZWlnaHQnKTtcclxuICB0aGlzLmV4cGFuZGVkV2lkdGggPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2V4cGFuZGVkV2lkdGgnKTtcclxuICB0aGlzLmV4cGFuZGVkSGVpZ2h0ID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdleHBhbmRlZEhlaWdodCcpO1xyXG4gIHRoaXMuc2NhbGFibGUgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ3NjYWxhYmxlJyk7XHJcbiAgdGhpcy5tYWludGFpbkFzcGVjdFJhdGlvID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdtYWludGFpbkFzcGVjdFJhdGlvJyk7XHJcbiAgdGhpcy5taW5TdWdnZXN0ZWREdXJhdGlvbiA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnbWluU3VnZ2VzdGVkRHVyYXRpb24nKTtcclxuICB0aGlzLmFwaUZyYW1ld29yayA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnYXBpRnJhbWV3b3JrJyk7XHJcbiAgdGhpcy5jb21wYW5pb25DbGlja1Rocm91Z2ggPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuY29tcGFuaW9uQ2xpY2tUaHJvdWdoKTtcclxuICB0aGlzLnRyYWNraW5nRXZlbnRzID0gcGFyc2VUcmFja2luZ0V2ZW50cyhjb21wYW5pb25KVHJlZS50cmFja2luZ0V2ZW50cyAmJiBjb21wYW5pb25KVHJlZS50cmFja2luZ0V2ZW50cy50cmFja2luZyk7XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBwYXJzZVRyYWNraW5nRXZlbnRzKHRyYWNraW5nRXZlbnRzKSB7XHJcbiAgICB2YXIgdHJhY2tpbmdzID0gW107XHJcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh0cmFja2luZ0V2ZW50cykpIHtcclxuICAgICAgdHJhY2tpbmdFdmVudHMgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0V2ZW50cykgPyB0cmFja2luZ0V2ZW50cyA6IFt0cmFja2luZ0V2ZW50c107XHJcbiAgICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNraW5nRGF0YSkge1xyXG4gICAgICAgIHRyYWNraW5ncy5wdXNoKG5ldyBUcmFja2luZ0V2ZW50KHRyYWNraW5nRGF0YSkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cmFja2luZ3M7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBhbmlvbjsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgTGluZWFyID0gcmVxdWlyZSgnLi9MaW5lYXInKTtcclxudmFyIENvbXBhbmlvbiA9IHJlcXVpcmUoJy4vQ29tcGFuaW9uJyk7XHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcblxyXG5mdW5jdGlvbiBDcmVhdGl2ZShjcmVhdGl2ZUpUcmVlKSB7XHJcbiAgaWYoISh0aGlzIGluc3RhbmNlb2YgQ3JlYXRpdmUpKSB7XHJcbiAgICByZXR1cm4gbmV3IENyZWF0aXZlKGNyZWF0aXZlSlRyZWUpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5pZCA9IGNyZWF0aXZlSlRyZWUuYXR0cignaWQnKTtcclxuICB0aGlzLnNlcXVlbmNlID0gY3JlYXRpdmVKVHJlZS5hdHRyKCdzZXF1ZW5jZScpO1xyXG4gIHRoaXMuYWRJZCA9IGNyZWF0aXZlSlRyZWUuYXR0cignYWRJZCcpO1xyXG4gIHRoaXMuYXBpRnJhbWV3b3JrID0gY3JlYXRpdmVKVHJlZS5hdHRyKCdhcGlGcmFtZXdvcmsnKTtcclxuXHJcbiAgaWYoY3JlYXRpdmVKVHJlZS5saW5lYXIpIHtcclxuICAgIHRoaXMubGluZWFyID0gbmV3IExpbmVhcihjcmVhdGl2ZUpUcmVlLmxpbmVhcik7XHJcbiAgfVxyXG5cclxuICBpZiAoY3JlYXRpdmVKVHJlZS5jb21wYW5pb25BZHMpIHtcclxuICAgIHZhciBjb21wYW5pb25zID0gW107XHJcbiAgICB2YXIgY29tcGFuaW9uQWRzID0gY3JlYXRpdmVKVHJlZS5jb21wYW5pb25BZHMgJiYgY3JlYXRpdmVKVHJlZS5jb21wYW5pb25BZHMuY29tcGFuaW9uO1xyXG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQoY29tcGFuaW9uQWRzKSkge1xyXG4gICAgICBjb21wYW5pb25BZHMgPSB1dGlsaXRpZXMuaXNBcnJheShjb21wYW5pb25BZHMpID8gY29tcGFuaW9uQWRzIDogW2NvbXBhbmlvbkFkc107XHJcbiAgICAgIGNvbXBhbmlvbkFkcy5mb3JFYWNoKGZ1bmN0aW9uIChjb21wYW5pb25EYXRhKSB7XHJcbiAgICAgICAgY29tcGFuaW9ucy5wdXNoKG5ldyBDb21wYW5pb24oY29tcGFuaW9uRGF0YSkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuY29tcGFuaW9uQWRzID0gY29tcGFuaW9ucztcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYXQgdGhlIGNyZWF0aXZlLlxyXG4gKi9cclxuQ3JlYXRpdmUucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24oKXtcclxuICBpZih0aGlzLmxpbmVhcikge1xyXG4gICAgcmV0dXJuIHRoaXMubGluZWFyLmlzU3VwcG9ydGVkKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbkNyZWF0aXZlLnBhcnNlQ3JlYXRpdmVzID0gZnVuY3Rpb24gcGFyc2VDcmVhdGl2ZXMoY3JlYXRpdmVzSlRyZWUpIHtcclxuICB2YXIgY3JlYXRpdmVzID0gW107XHJcbiAgdmFyIGNyZWF0aXZlc0RhdGE7XHJcbiAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQoY3JlYXRpdmVzSlRyZWUpICYmIHV0aWxpdGllcy5pc0RlZmluZWQoY3JlYXRpdmVzSlRyZWUuY3JlYXRpdmUpKSB7XHJcbiAgICBjcmVhdGl2ZXNEYXRhID0gdXRpbGl0aWVzLmlzQXJyYXkoY3JlYXRpdmVzSlRyZWUuY3JlYXRpdmUpID8gY3JlYXRpdmVzSlRyZWUuY3JlYXRpdmUgOiBbY3JlYXRpdmVzSlRyZWUuY3JlYXRpdmVdO1xyXG4gICAgY3JlYXRpdmVzRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChjcmVhdGl2ZSkge1xyXG4gICAgICBjcmVhdGl2ZXMucHVzaChuZXcgQ3JlYXRpdmUoY3JlYXRpdmUpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gY3JlYXRpdmVzO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDcmVhdGl2ZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xyXG52YXIgQ3JlYXRpdmUgPSByZXF1aXJlKCcuL0NyZWF0aXZlJyk7XHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XHJcblxyXG5mdW5jdGlvbiBJbkxpbmUoaW5saW5lSlRyZWUpIHtcclxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgSW5MaW5lKSkge1xyXG4gICAgcmV0dXJuIG5ldyBJbkxpbmUoaW5saW5lSlRyZWUpO1xyXG4gIH1cclxuXHJcbiAgLy9SZXF1aXJlZCBGaWVsZHNcclxuICB0aGlzLmFkVGl0bGUgPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuYWRUaXRsZSk7XHJcbiAgdGhpcy5hZFN5c3RlbSA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5hZFN5c3RlbSk7XHJcbiAgdGhpcy5pbXByZXNzaW9ucyA9IHZhc3RVdGlsLnBhcnNlSW1wcmVzc2lvbnMoaW5saW5lSlRyZWUuaW1wcmVzc2lvbik7XHJcbiAgdGhpcy5jcmVhdGl2ZXMgPSBDcmVhdGl2ZS5wYXJzZUNyZWF0aXZlcyhpbmxpbmVKVHJlZS5jcmVhdGl2ZXMpO1xyXG5cclxuICAvL09wdGlvbmFsIEZpZWxkc1xyXG4gIHRoaXMuZGVzY3JpcHRpb24gPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuZGVzY3JpcHRpb24pO1xyXG4gIHRoaXMuYWR2ZXJ0aXNlciA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5hZHZlcnRpc2VyKTtcclxuICB0aGlzLnN1cnZleXMgPSBwYXJzZVN1cnZleXMoaW5saW5lSlRyZWUuc3VydmV5KTtcclxuICB0aGlzLmVycm9yID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmVycm9yKTtcclxuICB0aGlzLnByaWNpbmcgPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUucHJpY2luZyk7XHJcbiAgdGhpcy5leHRlbnNpb25zID0gaW5saW5lSlRyZWUuZXh0ZW5zaW9ucztcclxuXHJcbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIHBhcnNlU3VydmV5cyhpbmxpbmVTdXJ2ZXlzKSB7XHJcbiAgICBpZiAoaW5saW5lU3VydmV5cykge1xyXG4gICAgICByZXR1cm4gdXRpbGl0aWVzLnRyYW5zZm9ybUFycmF5KHV0aWxpdGllcy5pc0FycmF5KGlubGluZVN1cnZleXMpID8gaW5saW5lU3VydmV5cyA6IFtpbmxpbmVTdXJ2ZXlzXSwgZnVuY3Rpb24gKHN1cnZleSkge1xyXG4gICAgICAgIGlmKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHN1cnZleS5rZXlWYWx1ZSkpe1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXJpOiBzdXJ2ZXkua2V5VmFsdWUsXHJcbiAgICAgICAgICAgIHR5cGU6IHN1cnZleS5hdHRyKCd0eXBlJylcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIGFsbCB0aGUgY3JlYXRpdmVzLlxyXG4gKi9cclxuSW5MaW5lLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCl7XHJcbiAgdmFyIGksbGVuO1xyXG5cclxuICBpZih0aGlzLmNyZWF0aXZlcy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGZvcihpID0gMCwgbGVuID0gdGhpcy5jcmVhdGl2ZXMubGVuZ3RoOyBpPCBsZW47IGkrPTEpe1xyXG4gICAgaWYoIXRoaXMuY3JlYXRpdmVzW2ldLmlzU3VwcG9ydGVkKCkpe1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBJbkxpbmU7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBUcmFja2luZ0V2ZW50ID0gcmVxdWlyZSgnLi9UcmFja2luZ0V2ZW50Jyk7XHJcbnZhciBNZWRpYUZpbGUgPSByZXF1aXJlKCcuL01lZGlhRmlsZScpO1xyXG52YXIgVmlkZW9DbGlja3MgPSByZXF1aXJlKCcuL1ZpZGVvQ2xpY2tzJyk7XHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG52YXIgcGFyc2VycyA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xyXG5cclxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIExpbmVhcihsaW5lYXJKVHJlZSkge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBMaW5lYXIpKSB7XHJcbiAgICByZXR1cm4gbmV3IExpbmVhcihsaW5lYXJKVHJlZSk7XHJcbiAgfVxyXG5cclxuICAvL1JlcXVpcmVkIEVsZW1lbnRzXHJcbiAgdGhpcy5kdXJhdGlvbiA9IHBhcnNlcnMuZHVyYXRpb24oeG1sLmtleVZhbHVlKGxpbmVhckpUcmVlLmR1cmF0aW9uKSk7XHJcbiAgdGhpcy5tZWRpYUZpbGVzID0gcGFyc2VNZWRpYUZpbGVzKGxpbmVhckpUcmVlLm1lZGlhRmlsZXMgJiYgbGluZWFySlRyZWUubWVkaWFGaWxlcy5tZWRpYUZpbGUpO1xyXG5cclxuICAvL09wdGlvbmFsIGZpZWxkc1xyXG4gIHRoaXMudHJhY2tpbmdFdmVudHMgPSBwYXJzZVRyYWNraW5nRXZlbnRzKGxpbmVhckpUcmVlLnRyYWNraW5nRXZlbnRzICYmIGxpbmVhckpUcmVlLnRyYWNraW5nRXZlbnRzLnRyYWNraW5nLCB0aGlzLmR1cmF0aW9uKTtcclxuICB0aGlzLnNraXBvZmZzZXQgPSBwYXJzZXJzLm9mZnNldCh4bWwuYXR0cihsaW5lYXJKVHJlZSwgJ3NraXBvZmZzZXQnKSwgdGhpcy5kdXJhdGlvbik7XHJcblxyXG4gIGlmIChsaW5lYXJKVHJlZS52aWRlb0NsaWNrcykge1xyXG4gICAgdGhpcy52aWRlb0NsaWNrcyA9IG5ldyBWaWRlb0NsaWNrcyhsaW5lYXJKVHJlZS52aWRlb0NsaWNrcyk7XHJcbiAgfVxyXG5cclxuICBpZihsaW5lYXJKVHJlZS5hZFBhcmFtZXRlcnMpIHtcclxuICAgIHRoaXMuYWRQYXJhbWV0ZXJzID0geG1sLmtleVZhbHVlKGxpbmVhckpUcmVlLmFkUGFyYW1ldGVycyk7XHJcblxyXG4gICAgaWYoeG1sLmF0dHIobGluZWFySlRyZWUuYWRQYXJhbWV0ZXJzLCAneG1sRW5jb2RlZCcpKXtcclxuICAgICAgdGhpcy5hZFBhcmFtZXRlcnMgPSB4bWwuZGVjb2RlKHRoaXMuYWRQYXJhbWV0ZXJzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBwYXJzZVRyYWNraW5nRXZlbnRzKHRyYWNraW5nRXZlbnRzLCBkdXJhdGlvbikge1xyXG4gICAgdmFyIHRyYWNraW5ncyA9IFtdO1xyXG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQodHJhY2tpbmdFdmVudHMpKSB7XHJcbiAgICAgIHRyYWNraW5nRXZlbnRzID0gdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdFdmVudHMpID8gdHJhY2tpbmdFdmVudHMgOiBbdHJhY2tpbmdFdmVudHNdO1xyXG4gICAgICB0cmFja2luZ0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFja2luZ0RhdGEpIHtcclxuICAgICAgICB0cmFja2luZ3MucHVzaChuZXcgVHJhY2tpbmdFdmVudCh0cmFja2luZ0RhdGEsIGR1cmF0aW9uKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRyYWNraW5ncztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBhcnNlTWVkaWFGaWxlcyhtZWRpYUZpbGVzSnhvblRyZWUpIHtcclxuICAgIHZhciBtZWRpYUZpbGVzID0gW107XHJcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChtZWRpYUZpbGVzSnhvblRyZWUpKSB7XHJcbiAgICAgIG1lZGlhRmlsZXNKeG9uVHJlZSA9IHV0aWxpdGllcy5pc0FycmF5KG1lZGlhRmlsZXNKeG9uVHJlZSkgPyBtZWRpYUZpbGVzSnhvblRyZWUgOiBbbWVkaWFGaWxlc0p4b25UcmVlXTtcclxuXHJcbiAgICAgIG1lZGlhRmlsZXNKeG9uVHJlZS5mb3JFYWNoKGZ1bmN0aW9uIChtZkRhdGEpIHtcclxuICAgICAgICBtZWRpYUZpbGVzLnB1c2gobmV3IE1lZGlhRmlsZShtZkRhdGEpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWVkaWFGaWxlcztcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNdXN0IHJldHVybiB0cnVlIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGUgTWVkaWFGaWxlcycgdHlwZSBpcyBzdXBwb3J0ZWRcclxuICovXHJcbkxpbmVhci5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGksIGxlbjtcclxuICBmb3IoaT0wLCBsZW49dGhpcy5tZWRpYUZpbGVzLmxlbmd0aDsgaTxsZW47IGkrPTEpIHtcclxuICAgIGlmKHRoaXMubWVkaWFGaWxlc1tpXS5pc1N1cHBvcnRlZCgpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBMaW5lYXI7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xyXG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XHJcblxyXG52YXIgYXR0cmlidXRlc0xpc3QgPSBbXHJcbiAgLy9SZXF1aXJlZCBhdHRyaWJ1dGVzXHJcbiAgJ2RlbGl2ZXJ5JyxcclxuICAndHlwZScsXHJcbiAgJ3dpZHRoJyxcclxuICAnaGVpZ2h0JyxcclxuICAvL09wdGlvbmFsIGF0dHJpYnV0ZXNcclxuICAnY29kZWMnLFxyXG4gICdpZCcsXHJcbiAgJ2JpdHJhdGUnLFxyXG4gICdtaW5CaXRyYXRlJyxcclxuICAnbWF4Qml0cmF0ZScsXHJcbiAgJ3NjYWxhYmxlJyxcclxuICAnbWFpbnRhaW5Bc3BlY3RSYXRpbycsXHJcbiAgJ2FwaUZyYW1ld29yaydcclxuXTtcclxuXHJcbmZ1bmN0aW9uIE1lZGlhRmlsZShtZWRpYUZpbGVKVHJlZSkge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNZWRpYUZpbGUpKSB7XHJcbiAgICByZXR1cm4gbmV3IE1lZGlhRmlsZShtZWRpYUZpbGVKVHJlZSk7XHJcbiAgfVxyXG5cclxuICAvL1JlcXVpcmVkIGF0dHJpYnV0ZXNcclxuICB0aGlzLnNyYyA9IHhtbC5rZXlWYWx1ZShtZWRpYUZpbGVKVHJlZSk7XHJcblxyXG4gIGZvcih2YXIgeD0wOyB4PGF0dHJpYnV0ZXNMaXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICB2YXIgYXR0cmlidXRlID0gYXR0cmlidXRlc0xpc3RbeF07XHJcbiAgICB0aGlzW2F0dHJpYnV0ZV0gPSBtZWRpYUZpbGVKVHJlZS5hdHRyKGF0dHJpYnV0ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5NZWRpYUZpbGUucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24oKXtcclxuICBpZih2YXN0VXRpbC5pc1ZQQUlEKHRoaXMpKSB7XHJcbiAgICByZXR1cm4gISF2YXN0VXRpbC5maW5kU3VwcG9ydGVkVlBBSURUZWNoKHRoaXMudHlwZSk7XHJcbiAgfVxyXG5cclxuICBpZiAodGhpcy50eXBlID09PSAndmlkZW8veC1mbHYnKSB7XHJcbiAgICByZXR1cm4gdmFzdFV0aWwuaXNGbGFzaFN1cHBvcnRlZCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhRmlsZTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHBhcnNlcnMgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcclxuXHJcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcclxuXHJcbmZ1bmN0aW9uIFRyYWNraW5nRXZlbnQodHJhY2tpbmdKVHJlZSwgZHVyYXRpb24pIHtcclxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVHJhY2tpbmdFdmVudCkpIHtcclxuICAgIHJldHVybiBuZXcgVHJhY2tpbmdFdmVudCh0cmFja2luZ0pUcmVlLCBkdXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICB0aGlzLm5hbWUgPSB0cmFja2luZ0pUcmVlLmF0dHIoJ2V2ZW50Jyk7XHJcbiAgdGhpcy51cmkgPSB4bWwua2V5VmFsdWUodHJhY2tpbmdKVHJlZSk7XHJcblxyXG4gIGlmKCdwcm9ncmVzcycgPT09IHRoaXMubmFtZSkge1xyXG4gICAgdGhpcy5vZmZzZXQgPSBwYXJzZXJzLm9mZnNldCh0cmFja2luZ0pUcmVlLmF0dHIoJ29mZnNldCcpLCBkdXJhdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRyYWNraW5nRXZlbnQ7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIEFkID0gcmVxdWlyZSgnLi9BZCcpO1xyXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi9WQVNURXJyb3InKTtcclxudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4vVkFTVFJlc3BvbnNlJyk7XHJcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcclxuXHJcbnZhciBhc3luYyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2FzeW5jJyk7XHJcbnZhciBodHRwID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvaHR0cCcpLmh0dHA7XHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcclxuXHJcbmZ1bmN0aW9uIFZBU1RDbGllbnQob3B0aW9ucykge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWQVNUQ2xpZW50KSkge1xyXG4gICAgcmV0dXJuIG5ldyBWQVNUQ2xpZW50KG9wdGlvbnMpO1xyXG4gIH1cclxuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBXUkFQUEVSX0xJTUlUOiA1XHJcbiAgfTtcclxuXHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgdGhpcy5zZXR0aW5ncyA9IHV0aWxpdGllcy5leHRlbmQoe30sIG9wdGlvbnMsIGRlZmF1bHRPcHRpb25zKTtcclxuICB0aGlzLmVycm9yVVJMTWFjcm9zID0gW107XHJcbn1cclxuXHJcblZBU1RDbGllbnQucHJvdG90eXBlLmdldFZBU1RSZXNwb25zZSA9IGZ1bmN0aW9uIGdldFZBU1RSZXNwb25zZShhZFRhZ1VybCwgY2FsbGJhY2spIHtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gIHZhciBlcnJvciA9IHNhbml0eUNoZWNrKGFkVGFnVXJsLCBjYWxsYmFjayk7XHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICBpZiAodXRpbGl0aWVzLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XHJcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcblxyXG4gIGFzeW5jLndhdGVyZmFsbChbXHJcbiAgICAgIHRoaXMuX2dldFZBU1RBZC5iaW5kKHRoaXMsIGFkVGFnVXJsKSxcclxuICAgICAgYnVpbGRWQVNUUmVzcG9uc2VcclxuICAgIF0sXHJcbiAgICBjYWxsYmFjayk7XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBidWlsZFZBU1RSZXNwb25zZShhZHNDaGFpbiwgY2IpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciByZXNwb25zZSA9IHRoYXQuX2J1aWxkVkFTVFJlc3BvbnNlKGFkc0NoYWluKTtcclxuICAgICAgY2IobnVsbCwgcmVzcG9uc2UpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjYihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGFkVGFnVXJsLCBjYikge1xyXG4gICAgaWYgKCFhZFRhZ1VybCkge1xyXG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUUmVzcG9uc2UsIG1pc3NpbmcgYWQgdGFnIFVSTCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKCdvbiBWQVNUQ2xpZW50LmdldFZBU1RSZXNwb25zZSwgbWlzc2luZyBjYWxsYmFjayBmdW5jdGlvbicpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcblZBU1RDbGllbnQucHJvdG90eXBlLl9nZXRWQVNUQWQgPSBmdW5jdGlvbiAoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XHJcbiAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICBnZXRBZFdhdGVyZmFsbChhZFRhZ1VybCwgZnVuY3Rpb24gKGVycm9yLCB2YXN0VHJlZSkge1xyXG4gICAgdmFyIHdhdGVyZmFsbEFkcyA9IHZhc3RUcmVlICYmIHV0aWxpdGllcy5pc0FycmF5KHZhc3RUcmVlLmFkcykgPyB2YXN0VHJlZS5hZHMgOiBudWxsO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHRoYXQuX3RyYWNrRXJyb3IoZXJyb3IsIHdhdGVyZmFsbEFkcyk7XHJcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvciwgd2F0ZXJmYWxsQWRzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBZCh3YXRlcmZhbGxBZHMuc2hpZnQoKSwgW10sIHdhdGVyZmFsbEhhbmRsZXIpO1xyXG5cclxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICAgIGZ1bmN0aW9uIHdhdGVyZmFsbEhhbmRsZXIoZXJyb3IsIGFkQ2hhaW4pIHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgdGhhdC5fdHJhY2tFcnJvcihlcnJvciwgYWRDaGFpbik7XHJcbiAgICAgICAgaWYgKHdhdGVyZmFsbEFkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBnZXRBZCh3YXRlcmZhbGxBZHMuc2hpZnQoKSxbXSwgd2F0ZXJmYWxsSGFuZGxlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBhZENoYWluKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgYWRDaGFpbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIGdldEFkV2F0ZXJmYWxsKGFkVGFnVXJsLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIHJlcXVlc3RWYXN0WE1MID0gdGhhdC5fcmVxdWVzdFZBU1RYbWwuYmluZCh0aGF0LCBhZFRhZ1VybCk7XHJcbiAgICBhc3luYy53YXRlcmZhbGwoW1xyXG4gICAgICByZXF1ZXN0VmFzdFhNTCxcclxuICAgICAgYnVpbGRWYXN0V2F0ZXJmYWxsXHJcbiAgICBdLCBjYWxsYmFjayk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBidWlsZFZhc3RXYXRlcmZhbGwoeG1sU3RyLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIHZhc3RUcmVlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFzdFRyZWUgPSB4bWwudG9KWE9OVHJlZSh4bWxTdHIpO1xyXG5cclxuICAgICAgaWYodXRpbGl0aWVzLmlzQXJyYXkodmFzdFRyZWUuYWQpKSB7XHJcbiAgICAgICAgdmFzdFRyZWUuYWRzID0gdmFzdFRyZWUuYWQ7XHJcbiAgICAgIH0gZWxzZSBpZih2YXN0VHJlZS5hZCl7XHJcbiAgICAgICAgdmFzdFRyZWUuYWRzID0gW3Zhc3RUcmVlLmFkXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXN0VHJlZS5hZHMgPSBbXTtcclxuICAgICAgfVxyXG4gICAgICBjYWxsYmFjayh2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSwgdmFzdFRyZWUpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLmJ1aWxkVmFzdFdhdGVyZmFsbCwgZXJyb3IgcGFyc2luZyB4bWxcIiwgMTAwKSwgbnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSB7XHJcbiAgICB2YXIgdmFzdFZlcnNpb24gPSB4bWwuYXR0cih2YXN0VHJlZSwgJ3ZlcnNpb24nKTtcclxuXHJcbiAgICBpZiAoIXZhc3RUcmVlLmFkKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKCdvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC52YWxpZGF0ZVZBU1RUcmVlLCBubyBBZCBpbiBWQVNUIHRyZWUnLCAzMDMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YXN0VmVyc2lvbiAmJiAodmFzdFZlcnNpb24gIT0gMyAmJiB2YXN0VmVyc2lvbiAhPSAyKSkge1xyXG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUQWQudmFsaWRhdGVWQVNUVHJlZSwgbm90IHN1cHBvcnRlZCBWQVNUIHZlcnNpb24gXCInICsgdmFzdFZlcnNpb24gKyAnXCInLCAxMDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0QWQoYWRUYWdVcmwsIGFkQ2hhaW4sIGNhbGxiYWNrKSB7XHJcbiAgICBpZiAoYWRDaGFpbi5sZW5ndGggPj0gdGhhdC5XUkFQUEVSX0xJTUlUKSB7XHJcbiAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5nZXRWQVNUQWQuZ2V0QWQsIHBsYXllcnMgd3JhcHBlciBsaW1pdCByZWFjaGVkICh0aGUgbGltaXQgaXMgXCIgKyB0aGF0LldSQVBQRVJfTElNSVQgKyBcIilcIiwgMzAyKSwgYWRDaGFpbik7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMud2F0ZXJmYWxsKFtcclxuICAgICAgZnVuY3Rpb24gKG5leHQpIHtcclxuICAgICAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGFkVGFnVXJsKSkge1xyXG4gICAgICAgICAgcmVxdWVzdFZBU1RBZChhZFRhZ1VybCwgbmV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5leHQobnVsbCwgYWRUYWdVcmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYnVpbGRBZFxyXG4gICAgXSwgZnVuY3Rpb24gKGVycm9yLCBhZCkge1xyXG4gICAgICBpZiAoYWQpIHtcclxuICAgICAgICBhZENoYWluLnB1c2goYWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IsIGFkQ2hhaW4pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoYWQud3JhcHBlcikge1xyXG4gICAgICAgIHJldHVybiBnZXRBZChhZC53cmFwcGVyLlZBU1RBZFRhZ1VSSSwgYWRDaGFpbiwgY2FsbGJhY2spO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgYWRDaGFpbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGJ1aWxkQWQoYWRKeG9uVHJlZSwgY2FsbGJhY2spIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBhZCA9IG5ldyBBZChhZEp4b25UcmVlKTtcclxuICAgICAgY2FsbGJhY2sodmFsaWRhdGVBZChhZCksIGFkKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUQWQuYnVpbGRBZCwgZXJyb3IgcGFyc2luZyB4bWwnLCAxMDApLCBudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlQWQoYWQpIHtcclxuICAgIHZhciB3cmFwcGVyID0gYWQud3JhcHBlcjtcclxuICAgIHZhciBpbkxpbmUgPSBhZC5pbkxpbmU7XHJcbiAgICB2YXIgZXJyTXNnUHJlZml4ID0gJ29uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLnZhbGlkYXRlQWQsICc7XHJcblxyXG4gICAgaWYgKGluTGluZSAmJiB3cmFwcGVyKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArXCJJbkxpbmUgYW5kIFdyYXBwZXIgYm90aCBmb3VuZCBvbiB0aGUgc2FtZSBBZFwiLCAxMDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaW5MaW5lICYmICF3cmFwcGVyKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArIFwibm9yIHdyYXBwZXIgbm9yIGlubGluZSBlbGVtZW50cyBmb3VuZCBvbiB0aGUgQWRcIiwgMTAxKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW5MaW5lICYmICFpbkxpbmUuaXNTdXBwb3J0ZWQoKSkge1xyXG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcihlcnJNc2dQcmVmaXggKyBcImNvdWxkIG5vdCBmaW5kIE1lZGlhRmlsZSB0aGF0IGlzIHN1cHBvcnRlZCBieSB0aGlzIHZpZGVvIHBsYXllclwiLCA0MDMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3cmFwcGVyICYmICF3cmFwcGVyLlZBU1RBZFRhZ1VSSSkge1xyXG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcihlcnJNc2dQcmVmaXggKyBcIm1pc3NpbmcgJ1ZBU1RBZFRhZ1VSSScgaW4gd3JhcHBlclwiLCAxMDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVxdWVzdFZBU1RBZChhZFRhZ1VybCwgY2FsbGJhY2spIHtcclxuICAgIHRoYXQuX3JlcXVlc3RWQVNUWG1sKGFkVGFnVXJsLCBmdW5jdGlvbiAoZXJyb3IsIHhtbFN0cikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIHZhc3RUcmVlID0geG1sLnRvSlhPTlRyZWUoeG1sU3RyKTtcclxuICAgICAgICBjYWxsYmFjayh2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSwgdmFzdFRyZWUuYWQpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLnJlcXVlc3RWQVNUQWQsIGVycm9yIHBhcnNpbmcgeG1sXCIsIDEwMCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fcmVxdWVzdFZBU1RYbWwgPSBmdW5jdGlvbiByZXF1ZXN0VkFTVFhtbChhZFRhZ1VybCwgY2FsbGJhY2spIHtcclxuICB0cnkge1xyXG4gICAgaWYgKHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVGFnVXJsKSkge1xyXG4gICAgICBhZFRhZ1VybChyZXF1ZXN0SGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBodHRwLmdldChhZFRhZ1VybCwgcmVxdWVzdEhhbmRsZXIsIHtcclxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY2FsbGJhY2soZSk7XHJcbiAgfVxyXG5cclxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gcmVxdWVzdEhhbmRsZXIoZXJyb3IsIHJlc3BvbnNlLCBzdGF0dXMpIHtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB2YXIgZXJyTXNnID0gdXRpbGl0aWVzLmlzRGVmaW5lZChzdGF0dXMpID9cclxuICAgICAgXCJvbiBWQVNUQ2xpZW50LnJlcXVlc3RWYXN0WE1MLCBIVFRQIHJlcXVlc3QgZXJyb3Igd2l0aCBzdGF0dXMgJ1wiICsgc3RhdHVzICsgXCInXCIgOlxyXG4gICAgICAgIFwib24gVkFTVENsaWVudC5yZXF1ZXN0VmFzdFhNTCwgRXJyb3IgZ2V0dGluZyB0aGUgdGhlIFZBU1QgWE1MIHdpdGggaGUgcGFzc2VkIGFkVGFnWE1MIGZuXCI7XHJcbiAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKGVyck1zZywgMzAxKSwgbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UpO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RDbGllbnQucHJvdG90eXBlLl9idWlsZFZBU1RSZXNwb25zZSA9IGZ1bmN0aW9uIGJ1aWxkVkFTVFJlc3BvbnNlKGFkc0NoYWluKSB7XHJcbiAgdmFyIHJlc3BvbnNlID0gbmV3IFZBU1RSZXNwb25zZSgpO1xyXG4gIGFkZEFkc1RvUmVzcG9uc2UocmVzcG9uc2UsIGFkc0NoYWluKTtcclxuICB2YWxpZGF0ZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlO1xyXG5cclxuICAvLyoqKiBMb2NhbCBmdW5jdGlvbiAqKioqXHJcbiAgZnVuY3Rpb24gYWRkQWRzVG9SZXNwb25zZShyZXNwb25zZSwgYWRzKSB7XHJcbiAgICBhZHMuZm9yRWFjaChmdW5jdGlvbiAoYWQpIHtcclxuICAgICAgcmVzcG9uc2UuYWRkQWQoYWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgICB2YXIgcHJvZ3Jlc3NFdmVudHMgPSByZXNwb25zZS50cmFja2luZ0V2ZW50cy5wcm9ncmVzcztcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLmhhc0xpbmVhcigpKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50Ll9idWlsZFZBU1RSZXNwb25zZSwgUmVjZWl2ZWQgYW4gQWQgdHlwZSB0aGF0IGlzIG5vdCBzdXBwb3J0ZWRcIiwgMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZHVyYXRpb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5fYnVpbGRWQVNUUmVzcG9uc2UsIE1pc3NpbmcgZHVyYXRpb24gZmllbGQgaW4gVkFTVCByZXNwb25zZVwiLCAxMDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9ncmVzc0V2ZW50cykge1xyXG4gICAgICBwcm9ncmVzc0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9ncmVzc0V2ZW50KSB7XHJcbiAgICAgICAgaWYgKCF1dGlsaXRpZXMuaXNOdW1iZXIocHJvZ3Jlc3NFdmVudC5vZmZzZXQpKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5fYnVpbGRWQVNUUmVzcG9uc2UsIG1pc3Npbmcgb3Igd3Jvbmcgb2Zmc2V0IGF0dHJpYnV0ZSBvbiBwcm9ncmVzcyB0cmFja2luZyBldmVudFwiLCAxMDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVENsaWVudC5wcm90b3R5cGUuX3RyYWNrRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIGFkQ2hhaW4pIHtcclxuICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KGFkQ2hhaW4pIHx8IGFkQ2hhaW4ubGVuZ3RoID09PSAwKSB7IC8vVGhlcmUgaXMgbm90aGluZyB0byB0cmFja1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdmFyIGVycm9yVVJMTWFjcm9zID0gW107XHJcbiAgYWRDaGFpbi5mb3JFYWNoKGFkZEVycm9yVXJsTWFjcm9zKTtcclxuICB2YXN0VXRpbC50cmFjayhlcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3IuY29kZSB8fCA5MDB9KTsgIC8vOTAwIDw9PSBVbmRlZmluZWQgZXJyb3JcclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgICoqKi9cclxuICBmdW5jdGlvbiBhZGRFcnJvclVybE1hY3JvcyhhZCkge1xyXG4gICAgaWYgKGFkLndyYXBwZXIgJiYgYWQud3JhcHBlci5lcnJvcikge1xyXG4gICAgICBlcnJvclVSTE1hY3Jvcy5wdXNoKGFkLndyYXBwZXIuZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhZC5pbkxpbmUgJiYgYWQuaW5MaW5lLmVycm9yKSB7XHJcbiAgICAgIGVycm9yVVJMTWFjcm9zLnB1c2goYWQuaW5MaW5lLmVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RDbGllbnQ7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIFZBU1RFcnJvcihtZXNzYWdlLCBjb2RlKSB7XHJcbiAgdGhpcy5tZXNzYWdlID0gJ1ZBU1QgRXJyb3I6ICcgKyAobWVzc2FnZSB8fCAnJyk7XHJcbiAgaWYgKGNvZGUpIHtcclxuICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgfVxyXG59XHJcblxyXG5WQVNURXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XHJcblZBU1RFcnJvci5wcm90b3R5cGUubmFtZSA9IFwiVkFTVCBFcnJvclwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBWQVNURXJyb3I7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIElubmVyIGhlbHBlciBjbGFzcyB0aGF0IGRlYWxzIHdpdGggdGhlIGxvZ2ljIG9mIHRoZSBpbmRpdmlkdWFsIHN0ZXBzIG5lZWRlZCB0byBzZXR1cCBhbiBhZCBpbiB0aGUgcGxheWVyLlxyXG4gKlxyXG4gKiBAcGFyYW0gcGxheWVyIHtvYmplY3R9IGluc3RhbmNlIG9mIHRoZSBwbGF5ZXIgdGhhdCB3aWxsIHBsYXkgdGhlIGFkLiBJdCBhc3N1bWVzIHRoYXQgdGhlIHZpZGVvanMtY29udHJpYi1hZHMgcGx1Z2luXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgd2hlbiB5b3UgdXNlIGl0cyB1dGlsaXR5IGZ1bmN0aW9ucy5cclxuICpcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5cclxudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4vVkFTVFJlc3BvbnNlJyk7XHJcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuL1ZBU1RFcnJvcicpO1xyXG52YXIgVkFTVFRyYWNrZXIgPSByZXF1aXJlKCcuL1ZBU1RUcmFja2VyJyk7XHJcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcclxuXHJcbnZhciBhc3luYyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2FzeW5jJyk7XHJcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcclxudmFyIHBsYXllclV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvcGxheWVyVXRpbHMnKTtcclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxuXHJcbmZ1bmN0aW9uIFZBU1RJbnRlZ3JhdG9yKHBsYXllcikge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWQVNUSW50ZWdyYXRvcikpIHtcclxuICAgIHJldHVybiBuZXcgVkFTVEludGVncmF0b3IocGxheWVyKTtcclxuICB9XHJcblxyXG4gIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG59XHJcblxyXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUucGxheUFkID0gZnVuY3Rpb24gcGxheUFkKHZhc3RSZXNwb25zZSwgY2FsbGJhY2spIHtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCB1dGlsaXRpZXMubm9vcDtcclxuXHJcbiAgaWYgKCEodmFzdFJlc3BvbnNlIGluc3RhbmNlb2YgVkFTVFJlc3BvbnNlKSkge1xyXG4gICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoJ09uIFZBU1RJbnRlZ3JhdG9yLCBtaXNzaW5nIHJlcXVpcmVkIFZBU1RSZXNwb25zZScpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jLndhdGVyZmFsbChbXHJcbiAgICBmdW5jdGlvbiAobmV4dCkge1xyXG4gICAgICBuZXh0KG51bGwsIHZhc3RSZXNwb25zZSk7XHJcbiAgICB9LFxyXG4gICAgdGhpcy5fc2VsZWN0QWRTb3VyY2UuYmluZCh0aGlzKSxcclxuICAgIHRoaXMuX2NyZWF0ZVZBU1RUcmFja2VyLmJpbmQodGhpcyksXHJcbiAgICB0aGlzLl9hZGRDbGlja1Rocm91Z2guYmluZCh0aGlzKSxcclxuICAgIHRoaXMuX2FkZFNraXBCdXR0b24uYmluZCh0aGlzKSxcclxuICAgIHRoaXMuX3NldHVwRXZlbnRzLmJpbmQodGhpcyksXHJcbiAgICB0aGlzLl9wbGF5U2VsZWN0ZWRBZC5iaW5kKHRoaXMpXHJcbiAgXSwgZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSkge1xyXG4gICAgaWYgKGVycm9yICYmIHJlc3BvbnNlKSB7XHJcbiAgICAgIHRoYXQuX3RyYWNrRXJyb3IoZXJyb3IsIHJlc3BvbnNlKTtcclxuICAgIH1cclxuICAgIGNhbGxiYWNrKGVycm9yLCByZXNwb25zZSk7XHJcbiAgfSk7XHJcblxyXG4gIHRoaXMuX2FkVW5pdCA9IHtcclxuICAgIF9zcmM6IG51bGwsXHJcbiAgICB0eXBlOiAnVkFTVCcsXHJcbiAgICBwYXVzZUFkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoYXQucGxheWVyLnBhdXNlKHRydWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZXN1bWVBZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGF0LnBsYXllci5wbGF5KHRydWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBpc1BhdXNlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gdGhhdC5wbGF5ZXIucGF1c2VkKHRydWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRTcmM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3NyYztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gdGhpcy5fYWRVbml0O1xyXG59O1xyXG5cclxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9zZWxlY3RBZFNvdXJjZSA9IGZ1bmN0aW9uIHNlbGVjdEFkU291cmNlKHJlc3BvbnNlLCBjYWxsYmFjaykge1xyXG4gIHZhciBzb3VyY2U7XHJcblxyXG4gIHZhciBwbGF5ZXJXaWR0aCA9IGRvbS5nZXREaW1lbnNpb24odGhpcy5wbGF5ZXIuZWwoKSkud2lkdGg7XHJcbiAgcmVzcG9uc2UubWVkaWFGaWxlcy5zb3J0KGZ1bmN0aW9uIGNvbXBhcmVUbyhhLCBiKSB7XHJcbiAgICB2YXIgZGVsdGFBID0gTWF0aC5hYnMocGxheWVyV2lkdGggLSBhLndpZHRoKTtcclxuICAgIHZhciBkZWx0YUIgPSBNYXRoLmFicyhwbGF5ZXJXaWR0aCAtIGIud2lkdGgpO1xyXG4gICAgcmV0dXJuIGRlbHRhQSAtIGRlbHRhQjtcclxuICB9KTtcclxuXHJcbiAgc291cmNlID0gdGhpcy5wbGF5ZXIuc2VsZWN0U291cmNlKHJlc3BvbnNlLm1lZGlhRmlsZXMpLnNvdXJjZTtcclxuXHJcbiAgaWYgKHNvdXJjZSkge1xyXG4gICAgaWYgKHRoaXMuX2FkVW5pdCkge1xyXG4gICAgICB0aGlzLl9hZFVuaXQuX3NyYyA9IHNvdXJjZTtcclxuICAgIH1cclxuICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBzb3VyY2UsIHJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIC8vIGNvZGUgNDAzIDw9PSBDb3VsZG4ndCBmaW5kIE1lZGlhRmlsZSB0aGF0IGlzIHN1cHBvcnRlZCBieSB0aGlzIHZpZGVvIHBsYXllclxyXG4gIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJDb3VsZCBub3QgZmluZCBBZCBtZWRpYWZpbGUgc3VwcG9ydGVkIGJ5IHRoaXMgcGxheWVyXCIsIDQwMyksIHJlc3BvbnNlKTtcclxufTtcclxuXHJcblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fY3JlYXRlVkFTVFRyYWNrZXIgPSBmdW5jdGlvbiBjcmVhdGVWQVNUVHJhY2tlcihhZE1lZGlhRmlsZSwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNhbGxiYWNrKG51bGwsIGFkTWVkaWFGaWxlLCBuZXcgVkFTVFRyYWNrZXIoYWRNZWRpYUZpbGUuc3JjLCByZXNwb25zZSksIHJlc3BvbnNlKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjYWxsYmFjayhlLCByZXNwb25zZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9zZXR1cEV2ZW50cyA9IGZ1bmN0aW9uIHNldHVwRXZlbnRzKGFkTWVkaWFGaWxlLCB0cmFja2VyLCByZXNwb25zZSwgY2FsbGJhY2spIHtcclxuICB2YXIgcHJldmlvdXNseU11dGVkO1xyXG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICBwbGF5ZXIub24oJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB0cmFja0Z1bGxzY3JlZW5DaGFuZ2UpO1xyXG4gIHBsYXllci5vbigndmFzdC5hZFN0YXJ0JywgdHJhY2tJbXByZXNzaW9ucyk7XHJcbiAgcGxheWVyLm9uKCdwYXVzZScsIHRyYWNrUGF1c2UpO1xyXG4gIHBsYXllci5vbigndGltZXVwZGF0ZScsIHRyYWNrUHJvZ3Jlc3MpO1xyXG4gIHBsYXllci5vbigndm9sdW1lY2hhbmdlJywgdHJhY2tWb2x1bWVDaGFuZ2UpO1xyXG5cclxuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHVuYmluZEV2ZW50cyk7XHJcbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCcsICd2YXN0LmFkU2tpcCddLCBmdW5jdGlvbihldnQpe1xyXG4gICAgaWYoZXZ0LnR5cGUgPT09ICd2YXN0LmFkRW5kJyl7XHJcbiAgICAgIHRyYWNrZXIudHJhY2tDb21wbGV0ZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2FsbGJhY2sobnVsbCwgYWRNZWRpYUZpbGUsIHJlc3BvbnNlKTtcclxuXHJcbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHtcclxuICAgIHBsYXllci5vZmYoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB0cmFja0Z1bGxzY3JlZW5DaGFuZ2UpO1xyXG4gICAgcGxheWVyLm9mZigndmFzdC5hZFN0YXJ0JywgdHJhY2tJbXByZXNzaW9ucyk7XHJcbiAgICBwbGF5ZXIub2ZmKCdwYXVzZScsIHRyYWNrUGF1c2UpO1xyXG4gICAgcGxheWVyLm9mZigndGltZXVwZGF0ZScsIHRyYWNrUHJvZ3Jlc3MpO1xyXG4gICAgcGxheWVyLm9mZigndm9sdW1lY2hhbmdlJywgdHJhY2tWb2x1bWVDaGFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdHJhY2tGdWxsc2NyZWVuQ2hhbmdlKCkge1xyXG4gICAgaWYgKHBsYXllci5pc0Z1bGxzY3JlZW4oKSkge1xyXG4gICAgICB0cmFja2VyLnRyYWNrRnVsbHNjcmVlbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJhY2tlci50cmFja0V4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0cmFja1BhdXNlKCkge1xyXG4gICAgLy9OT1RFOiB3aGVuZXZlciBhIHZpZGVvIGVuZHMgdGhlIHZpZGVvIEVsZW1lbnQgdHJpZ2dlcnMgYSAncGF1c2UnIGV2ZW50IGJlZm9yZSB0aGUgJ2VuZGVkJyBldmVudC5cclxuICAgIC8vICAgICAgV2Ugc2hvdWxkIG5vdCB0cmFjayB0aGlzIHBhdXNlIGV2ZW50IGJlY2F1c2UgaXQgbWFrZXMgdGhlIFZBU1QgdHJhY2tpbmcgY29uZnVzaW5nIGFnYWluIHdlIHVzZSBhXHJcbiAgICAvLyAgICAgIFRocmVzaG9sZCBvZiAyIHNlY29uZHMgdG8gcHJldmVudCBmYWxzZSBwb3NpdGl2ZXMgb24gSU9TLlxyXG4gICAgaWYgKE1hdGguYWJzKHBsYXllci5kdXJhdGlvbigpIC0gcGxheWVyLmN1cnJlbnRUaW1lKCkpIDwgMikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdHJhY2tlci50cmFja1BhdXNlKCk7XHJcbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydwbGF5JywgJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBpZihldnQudHlwZSA9PT0gJ3BsYXknKXtcclxuICAgICAgICB0cmFja2VyLnRyYWNrUmVzdW1lKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdHJhY2tQcm9ncmVzcygpIHtcclxuICAgIHZhciBjdXJyZW50VGltZUluTXMgPSBwbGF5ZXIuY3VycmVudFRpbWUoKSAqIDEwMDA7XHJcbiAgICB0cmFja2VyLnRyYWNrUHJvZ3Jlc3MoY3VycmVudFRpbWVJbk1zKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRyYWNrSW1wcmVzc2lvbnMoKSB7XHJcbiAgICB0cmFja2VyLnRyYWNrSW1wcmVzc2lvbnMoKTtcclxuICAgIHRyYWNrZXIudHJhY2tDcmVhdGl2ZVZpZXcoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRyYWNrVm9sdW1lQ2hhbmdlKCkge1xyXG4gICAgdmFyIG11dGVkID0gcGxheWVyLm11dGVkKCk7XHJcbiAgICBpZiAobXV0ZWQpIHtcclxuICAgICAgdHJhY2tlci50cmFja011dGUoKTtcclxuICAgIH0gZWxzZSBpZiAocHJldmlvdXNseU11dGVkKSB7XHJcbiAgICAgIHRyYWNrZXIudHJhY2tVbm11dGUoKTtcclxuICAgIH1cclxuICAgIHByZXZpb3VzbHlNdXRlZCA9IG11dGVkO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fYWRkU2tpcEJ1dHRvbiA9IGZ1bmN0aW9uIGFkZFNraXBCdXR0b24oc291cmNlLCB0cmFja2VyLCByZXNwb25zZSwgY2FsbGJhY2spIHtcclxuICB2YXIgc2tpcE9mZnNldEluU2VjO1xyXG4gIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihyZXNwb25zZS5za2lwb2Zmc2V0KSkge1xyXG4gICAgc2tpcE9mZnNldEluU2VjID0gcmVzcG9uc2Uuc2tpcG9mZnNldCAvIDEwMDA7XHJcbiAgICBhZGRTa2lwQnV0dG9uVG9QbGF5ZXIodGhpcy5wbGF5ZXIsIHNraXBPZmZzZXRJblNlYyk7XHJcbiAgfVxyXG4gIGNhbGxiYWNrKG51bGwsIHNvdXJjZSwgdHJhY2tlciwgcmVzcG9uc2UpO1xyXG5cclxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cclxuICBmdW5jdGlvbiBhZGRTa2lwQnV0dG9uVG9QbGF5ZXIocGxheWVyLCBza2lwT2Zmc2V0KSB7XHJcbiAgICB2YXIgc2tpcEJ1dHRvbiA9IGNyZWF0ZVNraXBCdXR0b24ocGxheWVyKTtcclxuICAgIHZhciB1cGRhdGVTa2lwQnV0dG9uID0gdXBkYXRlU2tpcEJ1dHRvblN0YXRlLmJpbmQodGhhdCwgc2tpcEJ1dHRvbiwgc2tpcE9mZnNldCwgcGxheWVyKTtcclxuXHJcbiAgICBwbGF5ZXIuZWwoKS5hcHBlbmRDaGlsZChza2lwQnV0dG9uKTtcclxuICAgIHBsYXllci5vbigndGltZXVwZGF0ZScsIHVwZGF0ZVNraXBCdXR0b24pO1xyXG5cclxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcmVtb3ZlU2tpcEJ1dHRvbik7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU2tpcEJ1dHRvbigpIHtcclxuICAgICAgcGxheWVyLm9mZigndGltZXVwZGF0ZScsIHVwZGF0ZVNraXBCdXR0b24pO1xyXG4gICAgICBkb20ucmVtb3ZlKHNraXBCdXR0b24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlU2tpcEJ1dHRvbihwbGF5ZXIpIHtcclxuICAgIHZhciBza2lwQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgXCJ2YXN0LXNraXAtYnV0dG9uXCIpO1xyXG5cclxuICAgIHNraXBCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmIChkb20uaGFzQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKSkge1xyXG4gICAgICAgIHRyYWNrZXIudHJhY2tTa2lwKCk7XHJcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRTa2lwJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vV2UgcHJldmVudCBldmVudCBwcm9wYWdhdGlvbiB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBjbGlja1Rocm91Z2ggYW5kIHNvIG9uXHJcbiAgICAgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHNraXBCdXR0b247XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVTa2lwQnV0dG9uU3RhdGUoc2tpcEJ1dHRvbiwgc2tpcE9mZnNldCwgcGxheWVyKSB7XHJcbiAgICB2YXIgdGltZUxlZnQgPSBNYXRoLmNlaWwoc2tpcE9mZnNldCAtIHBsYXllci5jdXJyZW50VGltZSgpKTtcclxuICAgIGlmICh0aW1lTGVmdCA+IDApIHtcclxuICAgICAgc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNraXAgaW4gXCIgKyB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyh0aW1lTGVmdCwgMikgKyBcIi4uLlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFkb20uaGFzQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKSkge1xyXG4gICAgICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCAnZW5hYmxlZCcpO1xyXG4gICAgICAgIHNraXBCdXR0b24uaW5uZXJIVE1MID0gXCJTa2lwIGFkXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX2FkZENsaWNrVGhyb3VnaCA9IGZ1bmN0aW9uIGFkZENsaWNrVGhyb3VnaChtZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xyXG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICB2YXIgYmxvY2tlciA9IGNyZWF0ZUNsaWNrVGhyb3VnaEJsb2NrZXIocGxheWVyLCB0cmFja2VyLCByZXNwb25zZSk7XHJcbiAgdmFyIHVwZGF0ZUJsb2NrZXIgPSB1cGRhdGVCbG9ja2VyVVJMLmJpbmQodGhpcywgYmxvY2tlciwgcmVzcG9uc2UsIHBsYXllcik7XHJcblxyXG4gIHBsYXllci5lbCgpLmluc2VydEJlZm9yZShibG9ja2VyLCBwbGF5ZXIuY29udHJvbEJhci5lbCgpKTtcclxuICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB1cGRhdGVCbG9ja2VyKTtcclxuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZUJsb2NrZXIpO1xyXG5cclxuICByZXR1cm4gY2FsbGJhY2sobnVsbCwgbWVkaWFGaWxlLCB0cmFja2VyLCByZXNwb25zZSk7XHJcblxyXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQ2xpY2tUaHJvdWdoQmxvY2tlcihwbGF5ZXIsIHRyYWNrZXIsIHJlc3BvbnNlKSB7XHJcbiAgICB2YXIgYmxvY2tlciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIHZhciBjbGlja1Rocm91Z2hNYWNybyA9IHJlc3BvbnNlLmNsaWNrVGhyb3VnaDtcclxuXHJcbiAgICBkb20uYWRkQ2xhc3MoYmxvY2tlciwgJ3Zhc3QtYmxvY2tlcicpO1xyXG4gICAgYmxvY2tlci5ocmVmID0gZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwoY2xpY2tUaHJvdWdoTWFjcm8sIHBsYXllcik7XHJcblxyXG4gICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhjbGlja1Rocm91Z2hNYWNybykpIHtcclxuICAgICAgYmxvY2tlci50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGJsb2NrZXIub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmIChwbGF5ZXIucGF1c2VkKCkpIHtcclxuICAgICAgICBwbGF5ZXIucGxheSgpO1xyXG5cclxuICAgICAgICAvL1dlIHByZXZlbnQgZXZlbnQgcHJvcGFnYXRpb24gdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgcGxheWVyJ3Mgbm9ybWFsIHBhdXNlIG1lY2hhbmlzbVxyXG4gICAgICAgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBsYXllci5wYXVzZSgpO1xyXG4gICAgICB0cmFja2VyLnRyYWNrQ2xpY2soKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGJsb2NrZXI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVCbG9ja2VyVVJMKGJsb2NrZXIsIHJlc3BvbnNlLCBwbGF5ZXIpIHtcclxuICAgIGJsb2NrZXIuaHJlZiA9IGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKHJlc3BvbnNlLmNsaWNrVGhyb3VnaCwgcGxheWVyKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKGNsaWNrVGhyb3VnaE1hY3JvLCBwbGF5ZXIpIHtcclxuICAgIHZhciB2YXJpYWJsZXMgPSB7XHJcbiAgICAgIEFTU0VUVVJJOiBtZWRpYUZpbGUuc3JjLFxyXG4gICAgICBDT05URU5UUExBWUhFQUQ6IHZhc3RVdGlsLmZvcm1hdFByb2dyZXNzKHBsYXllci5jdXJyZW50VGltZSgpICogMTAwMClcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGNsaWNrVGhyb3VnaE1hY3JvID8gdmFzdFV0aWwucGFyc2VVUkxNYWNybyhjbGlja1Rocm91Z2hNYWNybywgdmFyaWFibGVzKSA6ICcjJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUJsb2NrZXIoKSB7XHJcbiAgICBwbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgdXBkYXRlQmxvY2tlcik7XHJcbiAgICBkb20ucmVtb3ZlKGJsb2NrZXIpO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fcGxheVNlbGVjdGVkQWQgPSBmdW5jdGlvbiBwbGF5U2VsZWN0ZWRBZChzb3VyY2UsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xyXG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuXHJcbiAgcGxheWVyLnByZWxvYWQoXCJhdXRvXCIpOyAvL3dpdGhvdXQgcHJlbG9hZD1hdXRvIHRoZSBkdXJhdGlvbmNoYW5nZSBldmVudCBpcyBuZXZlciBmaXJlZFxyXG4gIHBsYXllci5zcmMoc291cmNlKTtcclxuXHJcbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsnZHVyYXRpb25jaGFuZ2UnLCAnZXJyb3InLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgaWYgKGV2dC50eXBlID09PSAnZHVyYXRpb25jaGFuZ2UnKSB7XHJcbiAgICAgIHBsYXlBZCgpO1xyXG4gICAgfSBlbHNlIGlmKGV2dC50eXBlID09PSAnZXJyb3InKSB7XHJcbiAgICAgIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUSW50ZWdyYXRvciwgUGxheWVyIGlzIHVuYWJsZSB0byBwbGF5IHRoZSBBZFwiLCA0MDApLCByZXNwb25zZSk7XHJcbiAgICB9XHJcbiAgICAvL05PVEU6IElmIHRoZSBhZHMgZ2V0IGNhbmNlbGVkIHdlIGRvIG5vdGhpbmcvXHJcbiAgfSk7XHJcblxyXG4gIC8qKioqIGxvY2FsIGZ1bmN0aW9ucyAqKioqKiovXHJcbiAgZnVuY3Rpb24gcGxheUFkKCkge1xyXG5cclxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBpZihldnQudHlwZSA9PT0gJ3Zhc3QuYWRzQ2FuY2VsJyl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZFN0YXJ0Jyk7XHJcblxyXG4gICAgICBwbGF5ZXIub24oJ2VuZGVkJywgcHJvY2VlZCk7XHJcbiAgICAgIHBsYXllci5vbigndmFzdC5hZHNDYW5jZWwnLCBwcm9jZWVkKTtcclxuICAgICAgcGxheWVyLm9uKCd2YXN0LmFkU2tpcCcsIHByb2NlZWQpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gcHJvY2VlZChldnQpIHtcclxuXHJcbiAgICAgICAgaWYoZXZ0LnR5cGUgPT09ICdlbmRlZCcgJiYgKHBsYXllci5kdXJhdGlvbigpIC0gcGxheWVyLmN1cnJlbnRUaW1lKCkpID4gMyApIHtcclxuICAgICAgICAgIC8vIElnbm9yZSBlbmRlZCBldmVudCBpZiB0aGUgQWQgdGltZSB3YXMgbm90ICduZWFyJyB0aGUgZW5kXHJcbiAgICAgICAgICAvLyBhdm9pZHMgaXNzdWVzIHdoZXJlIElPUyBjb250cm9scyBjb3VsZCBza2lwIHRoZSBBZFxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGxheWVyLm9mZignZW5kZWQnLCBwcm9jZWVkKTtcclxuICAgICAgICBwbGF5ZXIub2ZmKCd2YXN0LmFkc0NhbmNlbCcsIHByb2NlZWQpO1xyXG4gICAgICAgIHBsYXllci5vZmYoJ3Zhc3QuYWRTa2lwJywgcHJvY2VlZCk7XHJcblxyXG4gICAgICAgIC8vTk9URTogaWYgdGhlIGFkcyBnZXQgY2FuY2VsIHdlIGRvIG5vdGhpbmcgYXBhcnQgcmVtb3ZpbmcgdGhlIGxpc3RuZXJzXHJcbiAgICAgICAgaWYoZXZ0LnR5cGUgPT09ICdlbmRlZCcgfHwgZXZ0LnR5cGUgPT09ICd2YXN0LmFkU2tpcCcpe1xyXG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcGxheWVyLnBsYXkoKTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3RyYWNrRXJyb3IgPSBmdW5jdGlvbiB0cmFja0Vycm9yKGVycm9yLCByZXNwb25zZSkge1xyXG4gIHZhc3RVdGlsLnRyYWNrKHJlc3BvbnNlLmVycm9yVVJMTWFjcm9zLCB7RVJST1JDT0RFOiBlcnJvci5jb2RlIHx8IDkwMH0pO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBWQVNUSW50ZWdyYXRvcjsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgQWQgPSByZXF1aXJlKCcuL0FkJyk7XHJcbnZhciBWaWRlb0NsaWNrcyA9IHJlcXVpcmUoJy4vVmlkZW9DbGlja3MnKTtcclxudmFyIExpbmVhciA9IHJlcXVpcmUoJy4vTGluZWFyJyk7XHJcbnZhciBJbkxpbmUgPSByZXF1aXJlKCcuL0luTGluZScpO1xyXG52YXIgV3JhcHBlciA9IHJlcXVpcmUoJy4vV3JhcHBlcicpO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xyXG5cclxud2luZG93LkluTGluZV9fQSA9IEluTGluZTtcclxuZnVuY3Rpb24gVkFTVFJlc3BvbnNlKCkge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XHJcbiAgICByZXR1cm4gbmV3IFZBU1RSZXNwb25zZSgpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5fbGluZWFyQWRkZWQgPSBmYWxzZTtcclxuICB0aGlzLmFkcyA9IFtdO1xyXG4gIHRoaXMuZXJyb3JVUkxNYWNyb3MgPSBbXTtcclxuICB0aGlzLmltcHJlc3Npb25zID0gW107XHJcbiAgdGhpcy5jbGlja1RyYWNraW5ncyA9IFtdO1xyXG4gIHRoaXMuY3VzdG9tQ2xpY2tzID0gW107XHJcbiAgdGhpcy50cmFja2luZ0V2ZW50cyA9IHt9O1xyXG4gIHRoaXMubWVkaWFGaWxlcyA9IFtdO1xyXG4gIHRoaXMuY2xpY2tUaHJvdWdoID0gdW5kZWZpbmVkO1xyXG4gIHRoaXMuYWRUaXRsZSA9ICcnO1xyXG4gIHRoaXMuZHVyYXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgdGhpcy5za2lwb2Zmc2V0ID0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLmFkZEFkID0gZnVuY3Rpb24gKGFkKSB7XHJcbiAgdmFyIGluTGluZSwgd3JhcHBlcjtcclxuICBpZiAoYWQgaW5zdGFuY2VvZiBBZCkge1xyXG4gICAgaW5MaW5lID0gYWQuaW5MaW5lO1xyXG4gICAgd3JhcHBlciA9IGFkLndyYXBwZXI7XHJcblxyXG4gICAgdGhpcy5hZHMucHVzaChhZCk7XHJcblxyXG4gICAgaWYgKGluTGluZSkge1xyXG4gICAgICB0aGlzLl9hZGRJbkxpbmUoaW5MaW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAod3JhcHBlcikge1xyXG4gICAgICB0aGlzLl9hZGRXcmFwcGVyKHdyYXBwZXIpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEVycm9yVHJhY2tVcmwgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICB2YXIgZXJyb3JVUkwgPSBlcnJvciBpbnN0YW5jZW9mIHhtbC5KWE9OVHJlZSA/IHhtbC5rZXlWYWx1ZShlcnJvcikgOiBlcnJvcjtcclxuICBpZiAoZXJyb3JVUkwpIHtcclxuICAgIHRoaXMuZXJyb3JVUkxNYWNyb3MucHVzaChlcnJvclVSTCk7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkSW1wcmVzc2lvbnMgPSBmdW5jdGlvbiAoaW1wcmVzc2lvbnMpIHtcclxuICB1dGlsaXRpZXMuaXNBcnJheShpbXByZXNzaW9ucykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmltcHJlc3Npb25zLCBpbXByZXNzaW9ucyk7XHJcbn07XHJcblxyXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRDbGlja1Rocm91Z2ggPSBmdW5jdGlvbiAoY2xpY2tUaHJvdWdoKSB7XHJcbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNsaWNrVGhyb3VnaCkpIHtcclxuICAgIHRoaXMuY2xpY2tUaHJvdWdoID0gY2xpY2tUaHJvdWdoO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZENsaWNrVHJhY2tpbmdzID0gZnVuY3Rpb24gKGNsaWNrVHJhY2tpbmdzKSB7XHJcbiAgdXRpbGl0aWVzLmlzQXJyYXkoY2xpY2tUcmFja2luZ3MpICYmIGFwcGVuZFRvQXJyYXkodGhpcy5jbGlja1RyYWNraW5ncywgY2xpY2tUcmFja2luZ3MpO1xyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkQ3VzdG9tQ2xpY2tzID0gZnVuY3Rpb24gKGN1c3RvbUNsaWNrcykge1xyXG4gIHV0aWxpdGllcy5pc0FycmF5KGN1c3RvbUNsaWNrcykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmN1c3RvbUNsaWNrcywgY3VzdG9tQ2xpY2tzKTtcclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFRyYWNraW5nRXZlbnRzID0gZnVuY3Rpb24gKHRyYWNraW5nRXZlbnRzKSB7XHJcbiAgdmFyIGV2ZW50c01hcCA9IHRoaXMudHJhY2tpbmdFdmVudHM7XHJcblxyXG4gIGlmICh0cmFja2luZ0V2ZW50cykge1xyXG4gICAgdHJhY2tpbmdFdmVudHMgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0V2ZW50cykgPyB0cmFja2luZ0V2ZW50cyA6IFt0cmFja2luZ0V2ZW50c107XHJcbiAgICB0cmFja2luZ0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFja2luZ0V2ZW50KSB7XHJcbiAgICAgIGlmICghZXZlbnRzTWFwW3RyYWNraW5nRXZlbnQubmFtZV0pIHtcclxuICAgICAgICBldmVudHNNYXBbdHJhY2tpbmdFdmVudC5uYW1lXSA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGV2ZW50c01hcFt0cmFja2luZ0V2ZW50Lm5hbWVdLnB1c2godHJhY2tpbmdFdmVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRUaXRsZSA9IGZ1bmN0aW9uICh0aXRsZSkge1xyXG4gIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyh0aXRsZSkpIHtcclxuICAgIHRoaXMuYWRUaXRsZSA9IHRpdGxlO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZER1cmF0aW9uID0gZnVuY3Rpb24gKGR1cmF0aW9uKSB7XHJcbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihkdXJhdGlvbikpIHtcclxuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRWaWRlb0NsaWNrcyA9IGZ1bmN0aW9uICh2aWRlb0NsaWNrcykge1xyXG4gIGlmICh2aWRlb0NsaWNrcyBpbnN0YW5jZW9mIFZpZGVvQ2xpY2tzKSB7XHJcbiAgICB0aGlzLl9hZGRDbGlja1Rocm91Z2godmlkZW9DbGlja3MuY2xpY2tUaHJvdWdoKTtcclxuICAgIHRoaXMuX2FkZENsaWNrVHJhY2tpbmdzKHZpZGVvQ2xpY2tzLmNsaWNrVHJhY2tpbmdzKTtcclxuICAgIHRoaXMuX2FkZEN1c3RvbUNsaWNrcyh2aWRlb0NsaWNrcy5jdXN0b21DbGlja3MpO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZE1lZGlhRmlsZXMgPSBmdW5jdGlvbiAobWVkaWFGaWxlcykge1xyXG4gIHV0aWxpdGllcy5pc0FycmF5KG1lZGlhRmlsZXMpICYmIGFwcGVuZFRvQXJyYXkodGhpcy5tZWRpYUZpbGVzLCBtZWRpYUZpbGVzKTtcclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFNraXBvZmZzZXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XHJcbiAgaWYgKG9mZnNldCkge1xyXG4gICAgdGhpcy5za2lwb2Zmc2V0ID0gb2Zmc2V0O1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEFkUGFyYW1ldGVycyA9IGZ1bmN0aW9uIChhZFBhcmFtZXRlcnMpIHtcclxuICBpZiAoYWRQYXJhbWV0ZXJzKSB7XHJcbiAgICB0aGlzLmFkUGFyYW1ldGVycyA9IGFkUGFyYW1ldGVycztcclxuICB9XHJcbn07XHJcblxyXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRMaW5lYXIgPSBmdW5jdGlvbiAobGluZWFyKSB7XHJcbiAgaWYgKGxpbmVhciBpbnN0YW5jZW9mIExpbmVhcikge1xyXG4gICAgdGhpcy5fYWRkRHVyYXRpb24obGluZWFyLmR1cmF0aW9uKTtcclxuICAgIHRoaXMuX2FkZFRyYWNraW5nRXZlbnRzKGxpbmVhci50cmFja2luZ0V2ZW50cyk7XHJcbiAgICB0aGlzLl9hZGRWaWRlb0NsaWNrcyhsaW5lYXIudmlkZW9DbGlja3MpO1xyXG4gICAgdGhpcy5fYWRkTWVkaWFGaWxlcyhsaW5lYXIubWVkaWFGaWxlcyk7XHJcbiAgICB0aGlzLl9hZGRTa2lwb2Zmc2V0KGxpbmVhci5za2lwb2Zmc2V0KTtcclxuICAgIHRoaXMuX2FkZEFkUGFyYW1ldGVycyhsaW5lYXIuYWRQYXJhbWV0ZXJzKTtcclxuICAgIHRoaXMuX2xpbmVhckFkZGVkID0gdHJ1ZTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRJbkxpbmUgPSBmdW5jdGlvbiAoaW5MaW5lKSB7XHJcbiAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICBpZiAoaW5MaW5lIGluc3RhbmNlb2YgSW5MaW5lKSB7XHJcbiAgICB0aGlzLl9hZGRUaXRsZShpbkxpbmUuYWRUaXRsZSk7XHJcbiAgICB0aGlzLl9hZGRFcnJvclRyYWNrVXJsKGluTGluZS5lcnJvcik7XHJcbiAgICB0aGlzLl9hZGRJbXByZXNzaW9ucyhpbkxpbmUuaW1wcmVzc2lvbnMpO1xyXG5cclxuICAgIGluTGluZS5jcmVhdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoY3JlYXRpdmUpIHtcclxuICAgICAgaWYgKGNyZWF0aXZlLmxpbmVhcikge1xyXG4gICAgICAgIHRoYXQuX2FkZExpbmVhcihjcmVhdGl2ZS5saW5lYXIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRXcmFwcGVyID0gZnVuY3Rpb24gKHdyYXBwZXIpIHtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gIGlmICh3cmFwcGVyIGluc3RhbmNlb2YgV3JhcHBlcikge1xyXG4gICAgdGhpcy5fYWRkRXJyb3JUcmFja1VybCh3cmFwcGVyLmVycm9yKTtcclxuICAgIHRoaXMuX2FkZEltcHJlc3Npb25zKHdyYXBwZXIuaW1wcmVzc2lvbnMpO1xyXG5cclxuICAgIHdyYXBwZXIuY3JlYXRpdmVzLmZvckVhY2goZnVuY3Rpb24gKGNyZWF0aXZlKSB7XHJcbiAgICAgIHZhciBsaW5lYXIgPSBjcmVhdGl2ZS5saW5lYXI7XHJcbiAgICAgIGlmIChsaW5lYXIpIHtcclxuICAgICAgICB0aGF0Ll9hZGRWaWRlb0NsaWNrcyhsaW5lYXIudmlkZW9DbGlja3MpO1xyXG4gICAgICAgIHRoYXQuY2xpY2tUaHJvdWdoID0gdW5kZWZpbmVkOy8vV2UgZW5zdXJlIHRoYXQgbm8gY2xpY2tUaHJvdWdoIGhhcyBiZWVuIGFkZGVkXHJcbiAgICAgICAgdGhhdC5fYWRkVHJhY2tpbmdFdmVudHMobGluZWFyLnRyYWNraW5nRXZlbnRzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5oYXNMaW5lYXIgPSBmdW5jdGlvbigpe1xyXG4gIHJldHVybiB0aGlzLl9saW5lYXJBZGRlZDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFwcGVuZFRvQXJyYXkoYXJyYXksIGl0ZW1zKSB7XHJcbiAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgYXJyYXkucHVzaChpdGVtKTtcclxuICB9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBWQVNUUmVzcG9uc2U7XHJcblxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi9WQVNURXJyb3InKTtcclxudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4vVkFTVFJlc3BvbnNlJyk7XHJcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxuXHJcbmZ1bmN0aW9uIFZBU1RUcmFja2VyKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpIHtcclxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVkFTVFRyYWNrZXIpKSB7XHJcbiAgICByZXR1cm4gbmV3IFZBU1RUcmFja2VyKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5zYW5pdHlDaGVjayhhc3NldFVSSSwgdmFzdFJlc3BvbnNlKTtcclxuICB0aGlzLmluaXRpYWxpemUoYXNzZXRVUkksIHZhc3RSZXNwb25zZSk7XHJcblxyXG59XHJcblxyXG5WQVNUVHJhY2tlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpIHtcclxuICB0aGlzLnJlc3BvbnNlID0gdmFzdFJlc3BvbnNlO1xyXG4gIHRoaXMuYXNzZXRVUkkgPSBhc3NldFVSSTtcclxuICB0aGlzLnByb2dyZXNzID0gMDtcclxuICB0aGlzLnF1YXJ0aWxlcyA9IHtcclxuICAgIGZpcnN0UXVhcnRpbGU6IHt0cmFja2VkOiBmYWxzZSwgdGltZTogTWF0aC5yb3VuZCgyNSAqIHZhc3RSZXNwb25zZS5kdXJhdGlvbikgLyAxMDB9LFxyXG4gICAgbWlkcG9pbnQ6IHt0cmFja2VkOiBmYWxzZSwgdGltZTogTWF0aC5yb3VuZCg1MCAqIHZhc3RSZXNwb25zZS5kdXJhdGlvbikgLyAxMDB9LFxyXG4gICAgdGhpcmRRdWFydGlsZToge3RyYWNrZWQ6IGZhbHNlLCB0aW1lOiBNYXRoLnJvdW5kKDc1ICogdmFzdFJlc3BvbnNlLmR1cmF0aW9uKSAvIDEwMH1cclxuICB9O1xyXG59O1xyXG5cclxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnNhbml0eUNoZWNrID0gZnVuY3Rpb24oYXNzZXRVUkksIHZhc3RSZXNwb25zZSkge1xyXG4gIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKGFzc2V0VVJJKSB8fCB1dGlsaXRpZXMuaXNFbXB0eVN0cmluZyhhc3NldFVSSSkpIHtcclxuICAgIHRocm93IG5ldyBWQVNURXJyb3IoJ29uIFZBU1RUcmFja2VyIGNvbnN0cnVjdG9yLCBtaXNzaW5nIHJlcXVpcmVkIHRoZSBVUkkgb2YgdGhlIGFkIGFzc2V0IGJlaW5nIHBsYXllZCcpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCEodmFzdFJlc3BvbnNlIGluc3RhbmNlb2YgVkFTVFJlc3BvbnNlKSkge1xyXG4gICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVkFTVFRyYWNrZXIgY29uc3RydWN0b3IsIG1pc3NpbmcgcmVxdWlyZWQgVkFTVCByZXNwb25zZScpO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja1VSTHMgPSBmdW5jdGlvbiB0cmFja1VSTHModXJscywgdmFyaWFibGVzKSB7XHJcbiAgaWYgKHV0aWxpdGllcy5pc0FycmF5KHVybHMpICYmIHVybHMubGVuZ3RoID4gMCkge1xyXG4gICAgdmFyaWFibGVzID0gdXRpbGl0aWVzLmV4dGVuZCh7XHJcbiAgICAgIEFTU0VUVVJJOiB0aGlzLmFzc2V0VVJJLFxyXG4gICAgICBDT05URU5UUExBWUhFQUQ6IHZhc3RVdGlsLmZvcm1hdFByb2dyZXNzKHRoaXMucHJvZ3Jlc3MpXHJcbiAgICB9LCB2YXJpYWJsZXMgfHwge30pO1xyXG5cclxuICAgIHZhc3RVdGlsLnRyYWNrKHVybHMsIHZhcmlhYmxlcyk7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrRXZlbnQgPSBmdW5jdGlvbiB0cmFja0V2ZW50KGV2ZW50TmFtZSwgdHJhY2tPbmNlKSB7XHJcbiAgdGhpcy50cmFja1VSTHMoZ2V0RXZlbnRVcmlzKHRoaXMucmVzcG9uc2UudHJhY2tpbmdFdmVudHNbZXZlbnROYW1lXSkpO1xyXG4gIGlmICh0cmFja09uY2UpIHtcclxuICAgIHRoaXMucmVzcG9uc2UudHJhY2tpbmdFdmVudHNbZXZlbnROYW1lXSA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xyXG4gIGZ1bmN0aW9uIGdldEV2ZW50VXJpcyh0cmFja2luZ0V2ZW50cykge1xyXG4gICAgdmFyIHVyaXM7XHJcblxyXG4gICAgaWYgKHRyYWNraW5nRXZlbnRzKSB7XHJcbiAgICAgIHVyaXMgPSBbXTtcclxuICAgICAgdHJhY2tpbmdFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB1cmlzLnB1c2goZXZlbnQudXJpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJpcztcclxuICB9XHJcbn07XHJcblxyXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tQcm9ncmVzcyA9IGZ1bmN0aW9uIHRyYWNrUHJvZ3Jlc3MobmV3UHJvZ3Jlc3NJbk1zKSB7XHJcbiAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gIHZhciBldmVudHMgPSBbXTtcclxuICB2YXIgT05DRSA9IHRydWU7XHJcbiAgdmFyIEFMV0FZUyA9IGZhbHNlO1xyXG4gIHZhciB0cmFja2luZ0V2ZW50cyA9IHRoaXMucmVzcG9uc2UudHJhY2tpbmdFdmVudHM7XHJcblxyXG4gIGlmICh1dGlsaXRpZXMuaXNOdW1iZXIobmV3UHJvZ3Jlc3NJbk1zKSkge1xyXG4gICAgYWRkVHJhY2tFdmVudCgnc3RhcnQnLCBPTkNFLCBuZXdQcm9ncmVzc0luTXMgPiAwKTtcclxuICAgIGFkZFRyYWNrRXZlbnQoJ3Jld2luZCcsIEFMV0FZUywgaGFzUmV3b3VuZCh0aGlzLnByb2dyZXNzLCBuZXdQcm9ncmVzc0luTXMpKTtcclxuICAgIGFkZFF1YXJ0aWxlRXZlbnRzKG5ld1Byb2dyZXNzSW5Ncyk7XHJcbiAgICB0cmFja1Byb2dyZXNzRXZlbnRzKG5ld1Byb2dyZXNzSW5Ncyk7XHJcbiAgICB0cmFja0V2ZW50cygpO1xyXG4gICAgdGhpcy5wcm9ncmVzcyA9IG5ld1Byb2dyZXNzSW5NcztcclxuICB9XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xyXG4gIGZ1bmN0aW9uIGhhc1Jld291bmQoY3VycmVudFByb2dyZXNzLCBuZXdQcm9ncmVzcykge1xyXG4gICAgdmFyIFJFV0lORF9USFJFU0hPTEQgPSAzMDAwOyAvL0lPUyB2aWRlbyBjbG9jayBpcyB2ZXJ5IHVucmVsaWFibGUgYW5kIHdlIG5lZWQgYSAzIHNlY29uZHMgdGhyZXNob2xkIHRvIGVuc3VyZSB0aGF0IHRoZXJlIHdhcyBhIHJld2luZCBhbiB0aGF0IGl0IHdhcyBvbiBwdXJwb3NlLlxyXG4gICAgcmV0dXJuIGN1cnJlbnRQcm9ncmVzcyA+IG5ld1Byb2dyZXNzSW5NcyAmJiBNYXRoLmFicyhuZXdQcm9ncmVzcyAtIGN1cnJlbnRQcm9ncmVzcykgPiBSRVdJTkRfVEhSRVNIT0xEO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkVHJhY2tFdmVudChldmVudE5hbWUsIHRyYWNrT25jZSwgY2FuQmVBZGRlZCkge1xyXG4gICAgaWYgKHRyYWNraW5nRXZlbnRzW2V2ZW50TmFtZV0gJiYgY2FuQmVBZGRlZCkge1xyXG4gICAgICBldmVudHMucHVzaCh7XHJcbiAgICAgICAgbmFtZTogZXZlbnROYW1lLFxyXG4gICAgICAgIHRyYWNrT25jZTogISF0cmFja09uY2VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRRdWFydGlsZUV2ZW50cyhwcm9ncmVzcykge1xyXG4gICAgdmFyIHF1YXJ0aWxlcyA9IHRoYXQucXVhcnRpbGVzO1xyXG4gICAgdmFyIGZpcnN0UXVhcnRpbGUgPSB0aGF0LnF1YXJ0aWxlcy5maXJzdFF1YXJ0aWxlO1xyXG4gICAgdmFyIG1pZHBvaW50ID0gdGhhdC5xdWFydGlsZXMubWlkcG9pbnQ7XHJcbiAgICB2YXIgdGhpcmRRdWFydGlsZSA9IHRoYXQucXVhcnRpbGVzLnRoaXJkUXVhcnRpbGU7XHJcblxyXG4gICAgaWYgKCFmaXJzdFF1YXJ0aWxlLnRyYWNrZWQpIHtcclxuICAgICAgdHJhY2tRdWFydGlsZSgnZmlyc3RRdWFydGlsZScsIHByb2dyZXNzKTtcclxuICAgIH0gZWxzZSBpZiAoIW1pZHBvaW50LnRyYWNrZWQpIHtcclxuICAgICAgdHJhY2tRdWFydGlsZSgnbWlkcG9pbnQnLCBwcm9ncmVzcyk7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlyZFF1YXJ0aWxlLnRyYWNrZWQpe1xyXG4gICAgICB0cmFja1F1YXJ0aWxlKCd0aGlyZFF1YXJ0aWxlJywgcHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xyXG4gICAgZnVuY3Rpb24gdHJhY2tRdWFydGlsZShxdWFydGlsZU5hbWUsIHByb2dyZXNzKXtcclxuICAgICAgdmFyIHF1YXJ0aWxlID0gcXVhcnRpbGVzW3F1YXJ0aWxlTmFtZV07XHJcbiAgICAgIGlmKGNhbkJlVHJhY2tlZChxdWFydGlsZSwgcHJvZ3Jlc3MpKXtcclxuICAgICAgICBxdWFydGlsZS50cmFja2VkID0gdHJ1ZTtcclxuICAgICAgICBhZGRUcmFja0V2ZW50KHF1YXJ0aWxlTmFtZSwgT05DRSwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhbkJlVHJhY2tlZChxdWFydGlsZSwgcHJvZ3Jlc3MpIHtcclxuICAgIHZhciBxdWFydGlsZVRpbWUgPSBxdWFydGlsZS50aW1lO1xyXG4gICAgLy9XZSBvbmx5IGZpcmUgdGhlIHF1YXJ0aWxlIGV2ZW50IGlmIHRoZSBwcm9ncmVzcyBpcyBiaWdnZXIgdGhhbiB0aGUgcXVhcnRpbGUgdGltZSBieSA1IHNlY29uZHMgYXQgbW9zdC5cclxuICAgIHJldHVybiBwcm9ncmVzcyA+PSBxdWFydGlsZVRpbWUgJiYgcHJvZ3Jlc3MgPD0gKHF1YXJ0aWxlVGltZSArIDUwMDApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdHJhY2tQcm9ncmVzc0V2ZW50cyhwcm9ncmVzcykge1xyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0V2ZW50cy5wcm9ncmVzcykpIHtcclxuICAgICAgcmV0dXJuOyAvL05vdGhpbmcgdG8gdHJhY2tcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGVuZGluZ1Byb2dyZXNzRXZ0cyA9IFtdO1xyXG5cclxuICAgIHRyYWNraW5nRXZlbnRzLnByb2dyZXNzLmZvckVhY2goZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBpZiAoZXZ0Lm9mZnNldCA8PSBwcm9ncmVzcykge1xyXG4gICAgICAgIHRoYXQudHJhY2tVUkxzKFtldnQudXJpXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGVuZGluZ1Byb2dyZXNzRXZ0cy5wdXNoKGV2dCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdHJhY2tpbmdFdmVudHMucHJvZ3Jlc3MgPSBwZW5kaW5nUHJvZ3Jlc3NFdnRzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdHJhY2tFdmVudHMoKSB7XHJcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgdGhhdC50cmFja0V2ZW50KGV2ZW50Lm5hbWUsIGV2ZW50LnRyYWNrT25jZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5bXHJcbiAgJ3Jld2luZCcsXHJcbiAgJ2Z1bGxzY3JlZW4nLFxyXG4gICdleGl0RnVsbHNjcmVlbicsXHJcbiAgJ3BhdXNlJyxcclxuICAncmVzdW1lJyxcclxuICAnbXV0ZScsXHJcbiAgJ3VubXV0ZScsXHJcbiAgJ2FjY2VwdEludml0YXRpb24nLFxyXG4gICdhY2NlcHRJbnZpdGF0aW9uTGluZWFyJyxcclxuICAnY29sbGFwc2UnLFxyXG4gICdleHBhbmQnXHJcbl0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XHJcbiAgICBWQVNUVHJhY2tlci5wcm90b3R5cGVbJ3RyYWNrJyArIHV0aWxpdGllcy5jYXBpdGFsaXplKGV2ZW50TmFtZSldID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnRyYWNrRXZlbnQoZXZlbnROYW1lKTtcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG5bXHJcbiAgJ3N0YXJ0JyxcclxuICAnc2tpcCcsXHJcbiAgJ2Nsb3NlJyxcclxuICAnY2xvc2VMaW5lYXInXHJcbl0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XHJcbiAgICBWQVNUVHJhY2tlci5wcm90b3R5cGVbJ3RyYWNrJyArIHV0aWxpdGllcy5jYXBpdGFsaXplKGV2ZW50TmFtZSldID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnRyYWNrRXZlbnQoZXZlbnROYW1lLCB0cnVlKTtcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG5bXHJcbiAgJ2ZpcnN0UXVhcnRpbGUnLFxyXG4gICdtaWRwb2ludCcsXHJcbiAgJ3RoaXJkUXVhcnRpbGUnXHJcbl0uZm9yRWFjaChmdW5jdGlvbiAocXVhcnRpbGUpIHtcclxuICAgIFZBU1RUcmFja2VyLnByb3RvdHlwZVsndHJhY2snICsgdXRpbGl0aWVzLmNhcGl0YWxpemUocXVhcnRpbGUpXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5xdWFydGlsZXNbcXVhcnRpbGVdLnRyYWNrZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnRyYWNrRXZlbnQocXVhcnRpbGUsIHRydWUpO1xyXG4gICAgfTtcclxuICB9KTtcclxuXHJcblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmKHRoaXMucXVhcnRpbGVzLnRoaXJkUXVhcnRpbGUudHJhY2tlZCl7XHJcbiAgICB0aGlzLnRyYWNrRXZlbnQoJ2NvbXBsZXRlJywgdHJ1ZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrRXJyb3JXaXRoQ29kZSA9IGZ1bmN0aW9uIHRyYWNrRXJyb3JXaXRoQ29kZShlcnJvcmNvZGUpIHtcclxuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKGVycm9yY29kZSkpIHtcclxuICAgIHRoaXMudHJhY2tVUkxzKHRoaXMucmVzcG9uc2UuZXJyb3JVUkxNYWNyb3MsIHtFUlJPUkNPREU6IGVycm9yY29kZX0pO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0ltcHJlc3Npb25zID0gZnVuY3Rpb24gdHJhY2tJbXByZXNzaW9ucygpIHtcclxuICB0aGlzLnRyYWNrVVJMcyh0aGlzLnJlc3BvbnNlLmltcHJlc3Npb25zKTtcclxufTtcclxuXHJcblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0NyZWF0aXZlVmlldyA9IGZ1bmN0aW9uIHRyYWNrQ3JlYXRpdmVWaWV3KCkge1xyXG4gIHRoaXMudHJhY2tFdmVudCgnY3JlYXRpdmVWaWV3Jyk7XHJcbn07XHJcblxyXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tDbGljayA9IGZ1bmN0aW9uIHRyYWNrQ2xpY2soKSB7XHJcbiAgdGhpcy50cmFja1VSTHModGhpcy5yZXNwb25zZS5jbGlja1RyYWNraW5ncyk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RUcmFja2VyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XHJcblxyXG5mdW5jdGlvbiBWaWRlb0NsaWNrcyh2aWRlb0NsaWNrSlRyZWUpIHtcclxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmlkZW9DbGlja3MpKSB7XHJcbiAgICByZXR1cm4gbmV3IFZpZGVvQ2xpY2tzKHZpZGVvQ2xpY2tKVHJlZSk7XHJcbiAgfVxyXG5cclxuICB0aGlzLmNsaWNrVGhyb3VnaCA9IHhtbC5rZXlWYWx1ZSh2aWRlb0NsaWNrSlRyZWUuY2xpY2tUaHJvdWdoKTtcclxuICB0aGlzLmNsaWNrVHJhY2tpbmdzID0gcGFyc2VDbGlja1RyYWNraW5ncyh2aWRlb0NsaWNrSlRyZWUuY2xpY2tUcmFja2luZyk7XHJcbiAgdGhpcy5jdXN0b21DbGlja3MgPSBwYXJzZUNsaWNrVHJhY2tpbmdzKHZpZGVvQ2xpY2tKVHJlZS5jdXN0b21DbGljayk7XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBwYXJzZUNsaWNrVHJhY2tpbmdzKHRyYWNraW5nRGF0YSkge1xyXG4gICAgdmFyIGNsaWNrVHJhY2tpbmdzID0gW107XHJcbiAgICBpZiAodHJhY2tpbmdEYXRhKSB7XHJcbiAgICAgIHRyYWNraW5nRGF0YSA9IHV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRGF0YSkgPyB0cmFja2luZ0RhdGEgOiBbdHJhY2tpbmdEYXRhXTtcclxuICAgICAgdHJhY2tpbmdEYXRhLmZvckVhY2goZnVuY3Rpb24gKGNsaWNrVHJhY2tpbmdEYXRhKSB7XHJcbiAgICAgICAgY2xpY2tUcmFja2luZ3MucHVzaCh4bWwua2V5VmFsdWUoY2xpY2tUcmFja2luZ0RhdGEpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xpY2tUcmFja2luZ3M7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFZpZGVvQ2xpY2tzOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcclxudmFyIENyZWF0aXZlID0gcmVxdWlyZSgnLi9DcmVhdGl2ZScpO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xyXG5cclxuZnVuY3Rpb24gV3JhcHBlcih3cmFwcGVySlRyZWUpIHtcclxuICBpZighKHRoaXMgaW5zdGFuY2VvZiBXcmFwcGVyKSkge1xyXG4gICAgcmV0dXJuIG5ldyBXcmFwcGVyKHdyYXBwZXJKVHJlZSk7XHJcbiAgfVxyXG5cclxuICAvL1JlcXVpcmVkIGVsZW1lbnRzXHJcbiAgdGhpcy5hZFN5c3RlbSA9IHhtbC5rZXlWYWx1ZSh3cmFwcGVySlRyZWUuYWRTeXN0ZW0pO1xyXG4gIHRoaXMuaW1wcmVzc2lvbnMgPSB2YXN0VXRpbC5wYXJzZUltcHJlc3Npb25zKHdyYXBwZXJKVHJlZS5pbXByZXNzaW9uKTtcclxuICB0aGlzLlZBU1RBZFRhZ1VSSSA9IHhtbC5rZXlWYWx1ZSh3cmFwcGVySlRyZWUudkFTVEFkVGFnVVJJKTtcclxuXHJcbiAgLy9PcHRpb25hbCBlbGVtZW50c1xyXG4gIHRoaXMuY3JlYXRpdmVzID0gQ3JlYXRpdmUucGFyc2VDcmVhdGl2ZXMod3JhcHBlckpUcmVlLmNyZWF0aXZlcyk7XHJcbiAgdGhpcy5lcnJvciA9IHhtbC5rZXlWYWx1ZSh3cmFwcGVySlRyZWUuZXJyb3IpO1xyXG4gIHRoaXMuZXh0ZW5zaW9ucyA9IHdyYXBwZXJKVHJlZS5leHRlbnNpb25zO1xyXG5cclxuICAvL09wdGlvbmFsIGF0dHJzXHJcbiAgdGhpcy5mb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnMgPSB1dGlsaXRpZXMuaXNEZWZpbmVkKHhtbC5hdHRyKHdyYXBwZXJKVHJlZSwgJ2ZvbGxvd0FkZGl0aW9uYWxXcmFwcGVycycpKT8geG1sLmF0dHIod3JhcHBlckpUcmVlLCAnZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzJyk6IHRydWU7XHJcbiAgdGhpcy5hbGxvd011bHRpcGxlQWRzID0geG1sLmF0dHIod3JhcHBlckpUcmVlLCAnYWxsb3dNdWx0aXBsZUFkcycpO1xyXG4gIHRoaXMuZmFsbGJhY2tPbk5vQWQgPSB4bWwuYXR0cih3cmFwcGVySlRyZWUsICdmYWxsYmFja09uTm9BZCcpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFdyYXBwZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcblxyXG52YXIgZHVyYXRpb25SZWdleCA9IC8oXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKShcXC4oXFxkXFxkXFxkKSk/LztcclxuXHJcbnZhciBwYXJzZXJzID0ge1xyXG5cclxuICBkdXJhdGlvbjogZnVuY3Rpb24gcGFyc2VEdXJhdGlvbihkdXJhdGlvblN0cikge1xyXG5cclxuICAgIHZhciBtYXRjaCwgZHVyYXRpb25Jbk1zO1xyXG5cclxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoZHVyYXRpb25TdHIpKSB7XHJcbiAgICAgIG1hdGNoID0gZHVyYXRpb25TdHIubWF0Y2goZHVyYXRpb25SZWdleCk7XHJcbiAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgIGR1cmF0aW9uSW5NcyA9IHBhcnNlSG91cnNUb01zKG1hdGNoWzFdKSArIHBhcnNlTWluVG9NcyhtYXRjaFsyXSkgKyBwYXJzZVNlY1RvTXMobWF0Y2hbM10pICsgcGFyc2VJbnQobWF0Y2hbNV0gfHwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNOYU4oZHVyYXRpb25Jbk1zKSA/IG51bGwgOiBkdXJhdGlvbkluTXM7XHJcblxyXG4gICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gICAgZnVuY3Rpb24gcGFyc2VIb3Vyc1RvTXMoaG91clN0cikge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQoaG91clN0ciwgMTApICogNjAgKiA2MCAqIDEwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VNaW5Ub01zKG1pblN0cikge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQobWluU3RyLCAxMCkgKiA2MCAqIDEwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VTZWNUb01zKHNlY1N0cikge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQoc2VjU3RyLCAxMCkgKiAxMDAwO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9mZnNldDogZnVuY3Rpb24gcGFyc2VPZmZzZXQob2Zmc2V0LCBkdXJhdGlvbikge1xyXG4gICAgaWYoaXNQZXJjZW50YWdlKG9mZnNldCkpe1xyXG4gICAgICByZXR1cm4gY2FsY3VsYXRlUGVyY2VudGFnZShvZmZzZXQsIGR1cmF0aW9uKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJzZXJzLmR1cmF0aW9uKG9mZnNldCk7XHJcblxyXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXHJcbiAgICBmdW5jdGlvbiBpc1BlcmNlbnRhZ2Uob2Zmc2V0KSB7XHJcbiAgICAgIHZhciBwZXJjZW50YWdlUmVnZXggPSAvXlxcZCsoXFwuXFxkKyk/JSQvZztcclxuICAgICAgcmV0dXJuIHBlcmNlbnRhZ2VSZWdleC50ZXN0KG9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlUGVyY2VudGFnZShwZXJjZW50U3RyLCBkdXJhdGlvbikge1xyXG4gICAgICBpZihkdXJhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBjYWxjUGVyY2VudChkdXJhdGlvbiwgcGFyc2VGbG9hdChwZXJjZW50U3RyLnJlcGxhY2UoJyUnLCAnJykpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjUGVyY2VudChxdWFudGl0eSwgcGVyY2VudCl7XHJcbiAgICAgIHJldHVybiBxdWFudGl0eSAqIHBlcmNlbnQgLyAxMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlcnM7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxudmFyIFZQQUlESFRNTDVUZWNoID0gcmVxdWlyZSgnLi4vdnBhaWQvVlBBSURIVE1MNVRlY2gnKTtcclxudmFyIFZQQUlERmxhc2hUZWNoID0gcmVxdWlyZSgnLi4vdnBhaWQvVlBBSURGbGFzaFRlY2gnKTtcclxudmFyIFZQQUlERkxBU0hDbGllbnQgPSByZXF1aXJlKCdWUEFJREZMQVNIQ2xpZW50L2pzL1ZQQUlERkxBU0hDbGllbnQnKTtcclxuXHJcbnZhciB2YXN0VXRpbCA9IHtcclxuXHJcbiAgdHJhY2s6IGZ1bmN0aW9uIHRyYWNrKFVSTE1hY3JvcywgdmFyaWFibGVzKSB7XHJcbiAgICB2YXIgc291cmNlcyA9IHZhc3RVdGlsLnBhcnNlVVJMTWFjcm9zKFVSTE1hY3JvcywgdmFyaWFibGVzKTtcclxuICAgIHZhciB0cmFja0ltZ3MgPSBbXTtcclxuICAgIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc3JjKSB7XHJcbiAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgaW1nLnNyYyA9IHNyYztcclxuICAgICAgdHJhY2tJbWdzLnB1c2goaW1nKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRyYWNrSW1ncztcclxuICB9LFxyXG5cclxuICBwYXJzZVVSTE1hY3JvczogZnVuY3Rpb24gcGFyc2VNYWNyb3MoVVJMTWFjcm9zLCB2YXJpYWJsZXMpIHtcclxuICAgIHZhciBwYXJzZWRVUkxzID0gW107XHJcblxyXG4gICAgdmFyaWFibGVzID0gdmFyaWFibGVzIHx8IHt9O1xyXG5cclxuICAgIGlmICghKHZhcmlhYmxlc1tcIkNBQ0hFQlVTVElOR1wiXSkpIHtcclxuICAgICAgdmFyaWFibGVzW1wiQ0FDSEVCVVNUSU5HXCJdID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMS4wZSsxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgVVJMTWFjcm9zLmZvckVhY2goZnVuY3Rpb24gKFVSTE1hY3JvKSB7XHJcbiAgICAgIHBhcnNlZFVSTHMucHVzaCh2YXN0VXRpbC5fcGFyc2VVUkxNYWNybyhVUkxNYWNybywgdmFyaWFibGVzKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcGFyc2VkVVJMcztcclxuICB9LFxyXG5cclxuICBwYXJzZVVSTE1hY3JvOiBmdW5jdGlvbiBwYXJzZU1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpIHtcclxuICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyB8fCB7fTtcclxuXHJcbiAgICBpZiAoISh2YXJpYWJsZXNbXCJDQUNIRUJVU1RJTkdcIl0pKSB7XHJcbiAgICAgIHZhcmlhYmxlc1tcIkNBQ0hFQlVTVElOR1wiXSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEuMGUrMTApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YXN0VXRpbC5fcGFyc2VVUkxNYWNybyhVUkxNYWNybywgdmFyaWFibGVzKTtcclxuICB9LFxyXG5cclxuICBfcGFyc2VVUkxNYWNybzogZnVuY3Rpb24gcGFyc2VNYWNybyhVUkxNYWNybywgdmFyaWFibGVzKSB7XHJcbiAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgfHwge307XHJcblxyXG4gICAgdXRpbGl0aWVzLmZvckVhY2godmFyaWFibGVzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICBVUkxNYWNybyA9IFVSTE1hY3JvLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxbXCIgKyBrZXkgKyBcIlxcXFxcXF1cIiwgJ2dtJyksIHZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBVUkxNYWNybztcclxuICB9LFxyXG5cclxuICBwYXJzZUR1cmF0aW9uOiBmdW5jdGlvbiBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uU3RyKSB7XHJcbiAgICB2YXIgZHVyYXRpb25SZWdleCA9IC8oXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKShcXC4oXFxkXFxkXFxkKSk/LztcclxuICAgIHZhciBtYXRjaCwgZHVyYXRpb25Jbk1zO1xyXG5cclxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoZHVyYXRpb25TdHIpKSB7XHJcbiAgICAgIG1hdGNoID0gZHVyYXRpb25TdHIubWF0Y2goZHVyYXRpb25SZWdleCk7XHJcbiAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgIGR1cmF0aW9uSW5NcyA9IHBhcnNlSG91cnNUb01zKG1hdGNoWzFdKSArIHBhcnNlTWluVG9NcyhtYXRjaFsyXSkgKyBwYXJzZVNlY1RvTXMobWF0Y2hbM10pICsgcGFyc2VJbnQobWF0Y2hbNV0gfHwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNOYU4oZHVyYXRpb25Jbk1zKSA/IG51bGwgOiBkdXJhdGlvbkluTXM7XHJcblxyXG4gICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gICAgZnVuY3Rpb24gcGFyc2VIb3Vyc1RvTXMoaG91clN0cikge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQoaG91clN0ciwgMTApICogNjAgKiA2MCAqIDEwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VNaW5Ub01zKG1pblN0cikge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQobWluU3RyLCAxMCkgKiA2MCAqIDEwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VTZWNUb01zKHNlY1N0cikge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQoc2VjU3RyLCAxMCkgKiAxMDAwO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHBhcnNlSW1wcmVzc2lvbnM6IGZ1bmN0aW9uIHBhcnNlSW1wcmVzc2lvbnMoaW1wcmVzc2lvbnMpIHtcclxuICAgIGlmIChpbXByZXNzaW9ucykge1xyXG4gICAgICBpbXByZXNzaW9ucyA9IHV0aWxpdGllcy5pc0FycmF5KGltcHJlc3Npb25zKSA/IGltcHJlc3Npb25zIDogW2ltcHJlc3Npb25zXTtcclxuICAgICAgcmV0dXJuIHV0aWxpdGllcy50cmFuc2Zvcm1BcnJheShpbXByZXNzaW9ucywgZnVuY3Rpb24gKGltcHJlc3Npb24pIHtcclxuICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoaW1wcmVzc2lvbi5rZXlWYWx1ZSkpIHtcclxuICAgICAgICAgIHJldHVybiBpbXByZXNzaW9uLmtleVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxuICB9LFxyXG5cclxuXHJcbiAgLy9XZSBhc3N1bWUgdGhhdCB0aGUgcHJvZ3Jlc3MgaXMgZ29pbmcgdG8gYXJyaXZlIGluIG1pbGxpc2Vjb25kc1xyXG4gIGZvcm1hdFByb2dyZXNzOiBmdW5jdGlvbiBmb3JtYXRQcm9ncmVzcyhwcm9ncmVzcykge1xyXG4gICAgdmFyIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBtaWxsaXNlY29uZHM7XHJcbiAgICBob3VycyA9IHByb2dyZXNzIC8gKDYwICogNjAgKiAxMDAwKTtcclxuICAgIGhvdXJzID0gTWF0aC5mbG9vcihob3Vycyk7XHJcbiAgICBtaW51dGVzID0gKHByb2dyZXNzIC8gKDYwICogMTAwMCkpICUgNjA7XHJcbiAgICBtaW51dGVzID0gTWF0aC5mbG9vcihtaW51dGVzKTtcclxuICAgIHNlY29uZHMgPSAocHJvZ3Jlc3MgLyAxMDAwKSAlIDYwO1xyXG4gICAgc2Vjb25kcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyk7XHJcbiAgICBtaWxsaXNlY29uZHMgPSBwcm9ncmVzcyAlIDEwMDA7XHJcbiAgICByZXR1cm4gdXRpbGl0aWVzLnRvRml4ZWREaWdpdHMoaG91cnMsIDIpICsgJzonICsgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHMobWludXRlcywgMikgKyAnOicgKyB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhzZWNvbmRzLCAyKSArICcuJyArIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKG1pbGxpc2Vjb25kcywgMyk7XHJcbiAgfSxcclxuXHJcbiAgcGFyc2VPZmZzZXQ6IGZ1bmN0aW9uIHBhcnNlT2Zmc2V0KG9mZnNldCwgZHVyYXRpb24pIHtcclxuICAgIGlmIChpc1BlcmNlbnRhZ2Uob2Zmc2V0KSkge1xyXG4gICAgICByZXR1cm4gY2FsY3VsYXRlUGVyY2VudGFnZShvZmZzZXQsIGR1cmF0aW9uKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YXN0VXRpbC5wYXJzZUR1cmF0aW9uKG9mZnNldCk7XHJcblxyXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXHJcbiAgICBmdW5jdGlvbiBpc1BlcmNlbnRhZ2Uob2Zmc2V0KSB7XHJcbiAgICAgIHZhciBwZXJjZW50YWdlUmVnZXggPSAvXlxcZCsoXFwuXFxkKyk/JSQvZztcclxuICAgICAgcmV0dXJuIHBlcmNlbnRhZ2VSZWdleC50ZXN0KG9mZnNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlUGVyY2VudGFnZShwZXJjZW50U3RyLCBkdXJhdGlvbikge1xyXG4gICAgICBpZiAoZHVyYXRpb24pIHtcclxuICAgICAgICByZXR1cm4gY2FsY1BlcmNlbnQoZHVyYXRpb24sIHBhcnNlRmxvYXQocGVyY2VudFN0ci5yZXBsYWNlKCclJywgJycpKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY1BlcmNlbnQocXVhbnRpdHksIHBlcmNlbnQpIHtcclxuICAgICAgcmV0dXJuIHF1YW50aXR5ICogcGVyY2VudCAvIDEwMDtcclxuICAgIH1cclxuICB9LFxyXG5cclxuXHJcbiAgLy9MaXN0IG9mIHN1cHBvcnRlZCBWUEFJRCB0ZWNobm9sb2dpZXNcclxuICBWUEFJRF90ZWNoczogW1xyXG4gICAgVlBBSURGbGFzaFRlY2gsXHJcbiAgICBWUEFJREhUTUw1VGVjaFxyXG4gIF0sXHJcblxyXG4gIGlzVlBBSUQ6IGZ1bmN0aW9uIGlzVlBBSURNZWRpYUZpbGUobWVkaWFGaWxlKSB7XHJcbiAgICByZXR1cm4gISFtZWRpYUZpbGUgJiYgbWVkaWFGaWxlLmFwaUZyYW1ld29yayA9PT0gJ1ZQQUlEJztcclxuICB9LFxyXG5cclxuICBmaW5kU3VwcG9ydGVkVlBBSURUZWNoOiBmdW5jdGlvbiBmaW5kU3VwcG9ydGVkVlBBSURUZWNoKG1pbWVUeXBlKSB7XHJcbiAgICB2YXIgaSwgbGVuLCBWUEFJRFRlY2g7XHJcblxyXG4gICAgZm9yIChpID0gMCwgbGVuID0gdGhpcy5WUEFJRF90ZWNocy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xyXG4gICAgICBWUEFJRFRlY2ggPSB0aGlzLlZQQUlEX3RlY2hzW2ldO1xyXG4gICAgICBpZiAoVlBBSURUZWNoLnN1cHBvcnRzKG1pbWVUeXBlKSkge1xyXG4gICAgICAgIHJldHVybiBWUEFJRFRlY2g7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0sXHJcblxyXG4gIGlzRmxhc2hTdXBwb3J0ZWQ6IGZ1bmN0aW9uIGlzRmxhc2hTdXBwb3J0ZWQoKSB7XHJcbiAgICByZXR1cm4gVlBBSURGTEFTSENsaWVudC5pc1N1cHBvcnRlZCgpO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIE5lY2Vzc2FyeSBzdGVwIGZvciBWUEFJREZMQVNoQ2xpZW50IHRvIGtub3cgaWYgZmxhc2ggaXMgc3VwcG9ydGVkIGFuZCBub3QgYmxvY2tlZC5cclxuICAgKiBJTVBPUlRBTlQgTk9URTogVGhpcyBpcyBhbiBhc3luYyB0ZXN0IGFuZCBuZWVkcyB0byBiZSBydW4gYXMgc29vbiBhcyBwb3NzaWJsZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB2cGFpZEZsYXNoTG9hZGVyUGF0aCB0aGUgcGF0aCB0byB0aGUgdnBhaWRGbGFzaExvYWRlciBzd2Ygb2JqLlxyXG4gICAqL1xyXG4gIHJ1bkZsYXNoU3VwcG9ydENoZWNrOiBmdW5jdGlvbiBydW5GbGFzaFN1cHBvcnRDaGVjayh2cGFpZEZsYXNoTG9hZGVyUGF0aCkge1xyXG4gICAgVlBBSURGTEFTSENsaWVudC5ydW5GbGFzaFRlc3Qoe2RhdGE6IHZwYWlkRmxhc2hMb2FkZXJQYXRofSk7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdmFzdFV0aWw7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RFcnJvcicpO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxuXHJcbmZ1bmN0aW9uIFZQQUlEQWRVbml0V3JhcHBlcih2cGFpZEFkVW5pdCwgb3B0cykge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWUEFJREFkVW5pdFdyYXBwZXIpKSB7XHJcbiAgICByZXR1cm4gbmV3IFZQQUlEQWRVbml0V3JhcHBlcih2cGFpZEFkVW5pdCwgb3B0cyk7XHJcbiAgfVxyXG4gIHNhbml0eUNoZWNrKHZwYWlkQWRVbml0LCBvcHRzKTtcclxuXHJcbiAgdGhpcy5vcHRpb25zID0gdXRpbGl0aWVzLmV4dGVuZCh7fSwgb3B0cyk7XHJcblxyXG4gIHRoaXMuX2FkVW5pdCA9IHZwYWlkQWRVbml0O1xyXG5cclxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soYWRVbml0LCBvcHRzKSB7XHJcbiAgICBpZiAoIWFkVW5pdCB8fCAhVlBBSURBZFVuaXRXcmFwcGVyLmNoZWNrVlBBSURJbnRlcmZhY2UoYWRVbml0KSkge1xyXG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWUEFJREFkVW5pdFdyYXBwZXIsIHRoZSBwYXNzZWQgVlBBSUQgYWRVbml0IGRvZXMgbm90IGZ1bGx5IGltcGxlbWVudCB0aGUgVlBBSUQgaW50ZXJmYWNlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNPYmplY3Qob3B0cykpIHtcclxuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlciwgZXhwZWN0ZWQgb3B0aW9ucyBoYXNoICBidXQgZ290ICdcIiArIG9wdHMgKyBcIidcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCEoXCJyZXNwb25zZVRpbWVvdXRcIiBpbiBvcHRzKSB8fCAhdXRpbGl0aWVzLmlzTnVtYmVyKG9wdHMucmVzcG9uc2VUaW1lb3V0KSApe1xyXG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLCBleHBlY3RlZCByZXNwb25zZVRpbWVvdXQgaW4gb3B0aW9uc1wiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblZQQUlEQWRVbml0V3JhcHBlci5jaGVja1ZQQUlESW50ZXJmYWNlID0gZnVuY3Rpb24gY2hlY2tWUEFJREludGVyZmFjZShWUEFJREFkVW5pdCkge1xyXG4gIC8vTk9URTogc2tpcEFkIGlzIG5vdCBwYXJ0IG9mIHRoZSBtZXRob2QgbGlzdCBiZWNhdXNlIGl0IG9ubHkgYXBwZWFycyBpbiBWUEFJRCAyLjAgYW5kIHdlIHN1cHBvcnQgVlBBSUQgMS4wXHJcbiAgdmFyIFZQQUlESW50ZXJmYWNlTWV0aG9kcyA9IFtcclxuICAgICdoYW5kc2hha2VWZXJzaW9uJywgJ2luaXRBZCcsICdzdGFydEFkJywgJ3N0b3BBZCcsICdyZXNpemVBZCcsICdwYXVzZUFkJywgJ2V4cGFuZEFkJywgJ2NvbGxhcHNlQWQnXHJcbiAgXTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IFZQQUlESW50ZXJmYWNlTWV0aG9kcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgaWYgKCFWUEFJREFkVW5pdCB8fCAhdXRpbGl0aWVzLmlzRnVuY3Rpb24oVlBBSURBZFVuaXRbVlBBSURJbnRlcmZhY2VNZXRob2RzW2ldXSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiBjYW5TdWJzY3JpYmVUb0V2ZW50cyhWUEFJREFkVW5pdCkgJiYgY2FuVW5zdWJzY3JpYmVGcm9tRXZlbnRzKFZQQUlEQWRVbml0KTtcclxuXHJcbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xyXG5cclxuICBmdW5jdGlvbiBjYW5TdWJzY3JpYmVUb0V2ZW50cyhhZFVuaXQpIHtcclxuICAgIHJldHVybiB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQuc3Vic2NyaWJlKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQuYWRkRXZlbnRMaXN0ZW5lcikgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0Lm9uKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhblVuc3Vic2NyaWJlRnJvbUV2ZW50cyhhZFVuaXQpIHtcclxuICAgIHJldHVybiB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQudW5zdWJzY3JpYmUpIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5yZW1vdmVFdmVudExpc3RlbmVyKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQub2ZmKTtcclxuXHJcbiAgfVxyXG59O1xyXG5cclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5hZFVuaXRBc3luY0NhbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGFyZ3MgPSB1dGlsaXRpZXMuYXJyYXlMaWtlT2JqVG9BcnJheShhcmd1bWVudHMpO1xyXG4gIHZhciBtZXRob2QgPSBhcmdzLnNoaWZ0KCk7XHJcbiAgdmFyIGNiID0gYXJncy5wb3AoKTtcclxuICB2YXIgdGltZW91dElkO1xyXG5cclxuICBzYW5pdHlDaGVjayhtZXRob2QsIGNiLCB0aGlzLl9hZFVuaXQpO1xyXG4gIGFyZ3MucHVzaCh3cmFwQ2FsbGJhY2soKSk7XHJcblxyXG4gIHRoaXMuX2FkVW5pdFttZXRob2RdLmFwcGx5KHRoaXMuX2FkVW5pdCwgYXJncyk7XHJcbiAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICB0aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgY2IobmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlciwgdGltZW91dCB3aGlsZSB3YWl0aW5nIGZvciBhIHJlc3BvbnNlIG9uIGNhbGwgJ1wiICsgbWV0aG9kICsgXCInXCIpKTtcclxuICAgIGNiID0gdXRpbGl0aWVzLm5vb3A7XHJcbiAgfSwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dCk7XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhtZXRob2QsIGNiLCBhZFVuaXQpIHtcclxuICAgIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKG1ldGhvZCkgfHwgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdFttZXRob2RdKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLmFkVW5pdEFzeW5jQ2FsbCwgaW52YWxpZCBtZXRob2QgbmFtZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNiKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLmFkVW5pdEFzeW5jQ2FsbCwgbWlzc2luZyBjYWxsYmFja1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHdyYXBDYWxsYmFjaygpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0aW1lb3V0SWQpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgICAgfVxyXG4gICAgICBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxuICB9XHJcbn07XHJcblxyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2dE5hbWUsIGhhbmRsZXIpIHtcclxuICB2YXIgYWRkRXZlbnRMaXN0ZW5lciA9IHRoaXMuX2FkVW5pdC5hZGRFdmVudExpc3RlbmVyIHx8IHRoaXMuX2FkVW5pdC5zdWJzY3JpYmUgfHwgdGhpcy5fYWRVbml0Lm9uO1xyXG4gIGFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLl9hZFVuaXQsIGV2dE5hbWUsIGhhbmRsZXIpO1xyXG59O1xyXG5cclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoZXZ0TmFtZSwgaGFuZGxlcikge1xyXG4gIHZhciByZW1vdmVFdmVudExpc3RlbmVyID0gdGhpcy5fYWRVbml0LnJlbW92ZUV2ZW50TGlzdGVuZXIgfHwgdGhpcy5fYWRVbml0LnVuc3Vic2NyaWJlIHx8IHRoaXMuX2FkVW5pdC5vZmY7XHJcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMuX2FkVW5pdCwgZXZ0TmFtZSwgaGFuZGxlcik7XHJcbn07XHJcblxyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLndhaXRGb3JFdmVudCA9IGZ1bmN0aW9uIChldnROYW1lLCBjYiwgY29udGV4dCkge1xyXG4gIHZhciB0aW1lb3V0SWQ7XHJcbiAgc2FuaXR5Q2hlY2soZXZ0TmFtZSwgY2IpO1xyXG4gIGNvbnRleHQgPSBjb250ZXh0IHx8IG51bGw7XHJcblxyXG4gIHRoaXMub24oZXZ0TmFtZSwgcmVzcG9uc2VMaXN0ZW5lcik7XHJcblxyXG4gIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgY2IobmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlci53YWl0Rm9yRXZlbnQsIHRpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgZXZlbnQgJ1wiICsgZXZ0TmFtZSArIFwiJ1wiKSk7XHJcbiAgICB0aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgY2IgPSB1dGlsaXRpZXMubm9vcDtcclxuICB9LCB0aGlzLm9wdGlvbnMucmVzcG9uc2VUaW1lb3V0KTtcclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGV2dE5hbWUsIGNiKSB7XHJcbiAgICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhldnROYW1lKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLndhaXRGb3JFdmVudCwgbWlzc2luZyBldnQgbmFtZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNiKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLndhaXRGb3JFdmVudCwgbWlzc2luZyBjYWxsYmFja1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc3BvbnNlTGlzdGVuZXIoKSB7XHJcbiAgICB2YXIgYXJncyA9IHV0aWxpdGllcy5hcnJheUxpa2VPYmpUb0FycmF5KGFyZ3VtZW50cyk7XHJcblxyXG4gICAgaWYgKHRpbWVvdXRJZCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgICAgdGltZW91dElkID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhcmdzLnVuc2hpZnQobnVsbCk7XHJcbiAgICBjYi5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBWUEFJRCBNRVRIT0RTXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuaGFuZHNoYWtlVmVyc2lvbiA9IGZ1bmN0aW9uICh2ZXJzaW9uLCBjYikge1xyXG4gIHRoaXMuYWRVbml0QXN5bmNDYWxsKCdoYW5kc2hha2VWZXJzaW9uJywgdmVyc2lvbiwgY2IpO1xyXG59O1xyXG5cclxuLyoganNoaW50IG1heHBhcmFtczo2ICovXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuaW5pdEFkID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgYWRVbml0RGF0YSwgY2IpIHtcclxuICB0aGlzLndhaXRGb3JFdmVudCgnQWRMb2FkZWQnLCBjYik7XHJcbiAgdGhpcy5fYWRVbml0LmluaXRBZCh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGFkVW5pdERhdGEpO1xyXG59O1xyXG5cclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5yZXNpemVBZCA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgY2IpIHtcclxuICAvLyBOT1RFOiBBZFNpemVDaGFuZ2UgZXZlbnQgaXMgb25seSBzdXBwb3J0ZWQgb24gVlBBSUQgMi4wIHNvIGZvciB0aGUgbW9tZW50IHdlIGFyZSBub3QgZ29pbmcgdG8gdXNlIGl0XHJcbiAgLy8gYW5kIHdpbGwgYXNzdW1lIHRoYXQgZXZlcnl0aGluZyBpcyBmaW5lIGFmdGVyIHRoZSBhc3luYyBjYWxsXHJcbiAgdGhpcy5hZFVuaXRBc3luY0NhbGwoJ3Jlc2l6ZUFkJywgd2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNiKTtcclxufTtcclxuXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc3RhcnRBZCA9IGZ1bmN0aW9uIChjYikge1xyXG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFN0YXJ0ZWQnLCBjYik7XHJcbiAgdGhpcy5fYWRVbml0LnN0YXJ0QWQoKTtcclxufTtcclxuXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc3RvcEFkID0gZnVuY3Rpb24gKGNiKSB7XHJcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkU3RvcHBlZCcsIGNiKTtcclxuICB0aGlzLl9hZFVuaXQuc3RvcEFkKCk7XHJcbn07XHJcblxyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnBhdXNlQWQgPSBmdW5jdGlvbiAoY2IpIHtcclxuICB0aGlzLndhaXRGb3JFdmVudCgnQWRQYXVzZWQnLCBjYik7XHJcbiAgdGhpcy5fYWRVbml0LnBhdXNlQWQoKTtcclxufTtcclxuXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUucmVzdW1lQWQgPSBmdW5jdGlvbiAoY2IpIHtcclxuICB0aGlzLndhaXRGb3JFdmVudCgnQWRQbGF5aW5nJywgY2IpO1xyXG4gIHRoaXMuX2FkVW5pdC5yZXN1bWVBZCgpO1xyXG59O1xyXG5cclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5leHBhbmRBZCA9IGZ1bmN0aW9uIChjYikge1xyXG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZEV4cGFuZGVkQ2hhbmdlJywgY2IpO1xyXG4gIHRoaXMuX2FkVW5pdC5leHBhbmRBZCgpO1xyXG59O1xyXG5cclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5jb2xsYXBzZUFkID0gZnVuY3Rpb24gKGNiKSB7XHJcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkRXhwYW5kZWRDaGFuZ2UnLCBjYik7XHJcbiAgdGhpcy5fYWRVbml0LmNvbGxhcHNlQWQoKTtcclxufTtcclxuXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc2tpcEFkID0gZnVuY3Rpb24gKGNiKSB7XHJcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkU2tpcHBlZCcsIGNiKTtcclxuICB0aGlzLl9hZFVuaXQuc2tpcEFkKCk7XHJcbn07XHJcblxyXG4vL1ZQQUlEIHByb3BlcnR5IGdldHRlcnNcclxuW1xyXG4gICdhZExpbmVhcicsXHJcbiAgJ2FkV2lkdGgnLFxyXG4gICdhZEhlaWdodCcsXHJcbiAgJ2FkRXhwYW5kZWQnLFxyXG4gICdhZFNraXBwYWJsZVN0YXRlJyxcclxuICAnYWRSZW1haW5pbmdUaW1lJyxcclxuICAnYWREdXJhdGlvbicsXHJcbiAgJ2FkVm9sdW1lJyxcclxuICAnYWRDb21wYW5pb25zJyxcclxuICAnYWRJY29ucydcclxuXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xyXG4gIHZhciBnZXR0ZXJOYW1lID0gJ2dldCcgKyB1dGlsaXRpZXMuY2FwaXRhbGl6ZShwcm9wZXJ0eSk7XHJcblxyXG4gIFZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGVbZ2V0dGVyTmFtZV0gPSBmdW5jdGlvbiAoY2IpIHtcclxuICAgIHRoaXMuYWRVbml0QXN5bmNDYWxsKGdldHRlck5hbWUsIGNiKTtcclxuICB9O1xyXG59KTtcclxuXHJcbi8vVlBBSUQgcHJvcGVydHkgc2V0dGVyc1xyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnNldEFkVm9sdW1lID0gZnVuY3Rpb24odm9sdW1lLCBjYil7XHJcbiAgdGhpcy5hZFVuaXRBc3luY0NhbGwoJ3NldEFkVm9sdW1lJyx2b2x1bWUsIGNiKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVlBBSURBZFVuaXRXcmFwcGVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNURXJyb3InKTtcclxuXHJcbnZhciBWUEFJREZMQVNIQ2xpZW50ID0gcmVxdWlyZSgnVlBBSURGTEFTSENsaWVudC9qcy9WUEFJREZMQVNIQ2xpZW50Jyk7XHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG52YXIgZG9tID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZG9tJyk7XHJcblxyXG5mdW5jdGlvbiBWUEFJREZsYXNoVGVjaChtZWRpYUZpbGUsIHNldHRpbmdzKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZQQUlERmxhc2hUZWNoKSkge1xyXG4gICAgcmV0dXJuIG5ldyBWUEFJREZsYXNoVGVjaChtZWRpYUZpbGUpO1xyXG4gIH1cclxuICBzYW5pdHlDaGVjayhtZWRpYUZpbGUpO1xyXG4gIHRoaXMubmFtZSA9ICd2cGFpZC1mbGFzaCc7XHJcbiAgdGhpcy5tZWRpYUZpbGUgPSBtZWRpYUZpbGU7XHJcbiAgdGhpcy5jb250YWluZXJFbCA9IG51bGw7XHJcbiAgdGhpcy52cGFpZEZsYXNoQ2xpZW50ID0gbnVsbDtcclxuICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XHJcblxyXG4gIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhtZWRpYUZpbGUpIHtcclxuICAgIGlmICghbWVkaWFGaWxlIHx8ICF1dGlsaXRpZXMuaXNTdHJpbmcobWVkaWFGaWxlLnNyYykpIHtcclxuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVlBBSURGbGFzaFRlY2gsIGludmFsaWQgTWVkaWFGaWxlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5WUEFJREZsYXNoVGVjaC5WUEFJREZMQVNIQ2xpZW50ID0gVlBBSURGTEFTSENsaWVudDtcclxuXHJcblZQQUlERmxhc2hUZWNoLnN1cHBvcnRzID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICByZXR1cm4gdHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJyAmJiBWUEFJREZsYXNoVGVjaC5WUEFJREZMQVNIQ2xpZW50LmlzU3VwcG9ydGVkKCk7XHJcbn07XHJcblxyXG5WUEFJREZsYXNoVGVjaC5wcm90b3R5cGUubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIGxvYWRGbGFzaENyZWF0aXZlKGNvbnRhaW5lckVsLCBvYmplY3RFbCwgY2FsbGJhY2spIHtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgdmFyIGZsYXNoQ2xpZW50T3B0cyA9IHRoaXMuc2V0dGluZ3MgJiYgdGhpcy5zZXR0aW5ncy52cGFpZEZsYXNoTG9hZGVyUGF0aCA/IHtkYXRhOiB0aGlzLnNldHRpbmdzLnZwYWlkRmxhc2hMb2FkZXJQYXRofSA6IHVuZGVmaW5lZDtcclxuICBzYW5pdHlDaGVjayhjb250YWluZXJFbCwgY2FsbGJhY2spO1xyXG5cclxuICB0aGlzLmNvbnRhaW5lckVsID0gY29udGFpbmVyRWw7XHJcbiAgdGhpcy52cGFpZEZsYXNoQ2xpZW50ID0gbmV3IFZQQUlERmxhc2hUZWNoLlZQQUlERkxBU0hDbGllbnQoY29udGFpbmVyRWwsIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhhdC52cGFpZEZsYXNoQ2xpZW50LmxvYWRBZFVuaXQodGhhdC5tZWRpYUZpbGUuc3JjLCBjYWxsYmFjayk7XHJcbiAgfSwgZmxhc2hDbGllbnRPcHRzKTtcclxuXHJcbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGNvbnRhaW5lciwgY2IpIHtcclxuXHJcbiAgICBpZiAoIWRvbS5pc0RvbUVsZW1lbnQoY29udGFpbmVyKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWUEFJREZsYXNoVGVjaC5sb2FkQWRVbml0LCBpbnZhbGlkIGRvbSBjb250YWluZXIgZWxlbWVudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoJ29uIFZQQUlERmxhc2hUZWNoLmxvYWRBZFVuaXQsIG1pc3NpbmcgdmFsaWQgY2FsbGJhY2snKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5WUEFJREZsYXNoVGVjaC5wcm90b3R5cGUudW5sb2FkQWRVbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICh0aGlzLnZwYWlkRmxhc2hDbGllbnQpIHtcclxuICAgIHRyeXtcclxuICAgICAgdGhpcy52cGFpZEZsYXNoQ2xpZW50LmRlc3Ryb3koKTtcclxuICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgIGlmKGNvbnNvbGUgJiYgdXRpbGl0aWVzLmlzRnVuY3Rpb24oY29uc29sZS5sb2cpKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnVkFTVCBFUlJPUjogdHJ5aW5nIHRvIHVubG9hZCB0aGUgVlBBSUQgYWR1bml0Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMudnBhaWRGbGFzaENsaWVudCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBpZiAodGhpcy5jb250YWluZXJFbCkge1xyXG4gICAgZG9tLnJlbW92ZSh0aGlzLmNvbnRhaW5lckVsKTtcclxuICAgIHRoaXMuY29udGFpbmVyRWwgPSBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVlBBSURGbGFzaFRlY2g7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RFcnJvcicpO1xyXG5cclxudmFyIFZQQUlESFRNTDVDbGllbnQgPSByZXF1aXJlKCdWUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQnKTtcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcclxuXHJcbmZ1bmN0aW9uIFZQQUlESFRNTDVUZWNoKG1lZGlhRmlsZSkge1xyXG5cclxuICBpZighKHRoaXMgaW5zdGFuY2VvZiBWUEFJREhUTUw1VGVjaCkpIHtcclxuICAgIHJldHVybiBuZXcgVlBBSURIVE1MNVRlY2gobWVkaWFGaWxlKTtcclxuICB9XHJcblxyXG4gIHNhbml0eUNoZWNrKG1lZGlhRmlsZSk7XHJcblxyXG4gIHRoaXMubmFtZSA9ICd2cGFpZC1odG1sNSc7XHJcbiAgdGhpcy5jb250YWluZXJFbCA9IG51bGw7XHJcbiAgdGhpcy52aWRlb0VsID0gbnVsbDtcclxuICB0aGlzLnZwYWlkSFRNTENsaWVudCA9IG51bGw7XHJcblxyXG4gIHRoaXMubWVkaWFGaWxlID0gbWVkaWFGaWxlO1xyXG5cclxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhtZWRpYUZpbGUpIHtcclxuICAgICAgaWYgKCFtZWRpYUZpbGUgfHwgIXV0aWxpdGllcy5pc1N0cmluZyhtZWRpYUZpbGUuc3JjKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoVlBBSURIVE1MNVRlY2guSU5WQUxJRF9NRURJQV9GSUxFKTtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuVlBBSURIVE1MNVRlY2guVlBBSURIVE1MNUNsaWVudCA9IFZQQUlESFRNTDVDbGllbnQ7XHJcblxyXG5WUEFJREhUTUw1VGVjaC5zdXBwb3J0cyA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgcmV0dXJuICF1dGlsaXRpZXMuaXNPbGRJRSgpICYmIHR5cGUgPT09ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JztcclxufTtcclxuXHJcblZQQUlESFRNTDVUZWNoLnByb3RvdHlwZS5sb2FkQWRVbml0ID0gZnVuY3Rpb24gbG9hZEFkVW5pdChjb250YWluZXJFbCwgdmlkZW9FbCwgY2FsbGJhY2spIHtcclxuICBzYW5pdHlDaGVjayhjb250YWluZXJFbCwgdmlkZW9FbCwgY2FsbGJhY2spO1xyXG5cclxuICB0aGlzLmNvbnRhaW5lckVsID0gY29udGFpbmVyRWw7XHJcbiAgdGhpcy52aWRlb0VsID0gdmlkZW9FbDtcclxuICB0aGlzLnZwYWlkSFRNTENsaWVudCA9IG5ldyBWUEFJREhUTUw1VGVjaC5WUEFJREhUTUw1Q2xpZW50KGNvbnRhaW5lckVsLCB2aWRlb0VsLCB7fSk7XHJcbiAgdGhpcy52cGFpZEhUTUxDbGllbnQubG9hZEFkVW5pdCh0aGlzLm1lZGlhRmlsZS5zcmMsIGNhbGxiYWNrKTtcclxuXHJcbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soY29udGFpbmVyLCB2aWRlbywgY2IpIHtcclxuICAgIGlmICghZG9tLmlzRG9tRWxlbWVudChjb250YWluZXIpKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoVlBBSURIVE1MNVRlY2guSU5WQUxJRF9ET01fQ09OVEFJTkVSX0VMKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWRvbS5pc0RvbUVsZW1lbnQodmlkZW8pIHx8IHZpZGVvLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3ZpZGVvJykge1xyXG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFZQQUlESFRNTDVUZWNoLklOVkFMSURfRE9NX0NPTlRBSU5FUl9FTCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcclxuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5NSVNTSU5HX0NBTExCQUNLKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5WUEFJREhUTUw1VGVjaC5wcm90b3R5cGUudW5sb2FkQWRVbml0ID0gZnVuY3Rpb24gdW5sb2FkQWRVbml0KCkge1xyXG4gIGlmICh0aGlzLnZwYWlkSFRNTENsaWVudCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy52cGFpZEhUTUxDbGllbnQuZGVzdHJveSgpO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIGlmIChjb25zb2xlICYmIHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNvbnNvbGUubG9nKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdWQVNUIEVSUk9SOiB0cnlpbmcgdG8gdW5sb2FkIHRoZSBWUEFJRCBhZHVuaXQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudnBhaWRIVE1MQ2xpZW50ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGlmICh0aGlzLmNvbnRhaW5lckVsKSB7XHJcbiAgICBkb20ucmVtb3ZlKHRoaXMuY29udGFpbmVyRWwpO1xyXG4gICAgdGhpcy5jb250YWluZXJFbCA9IG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxudmFyIFBSRUZJWCA9ICdvbiBWUEFJREhUTUw1VGVjaCc7XHJcblZQQUlESFRNTDVUZWNoLklOVkFMSURfTUVESUFfRklMRSA9IFBSRUZJWCArICcsIGludmFsaWQgTWVkaWFGaWxlJztcclxuVlBBSURIVE1MNVRlY2guSU5WQUxJRF9ET01fQ09OVEFJTkVSX0VMID0gUFJFRklYICsgJywgaW52YWxpZCBjb250YWluZXIgSHRtbEVsZW1lbnQnO1xyXG5WUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9WSURFT19FTCA9IFBSRUZJWCArICcsIGludmFsaWQgSFRNTFZpZGVvRWxlbWVudCc7XHJcblZQQUlESFRNTDVUZWNoLk1JU1NJTkdfQ0FMTEJBQ0sgPSBQUkVGSVggKyAnLCBtaXNzaW5nIHZhbGlkIGNhbGxiYWNrJztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVlBBSURIVE1MNVRlY2g7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVEVycm9yJyk7XHJcbnZhciBWQVNUUmVzcG9uc2UgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RSZXNwb25zZScpO1xyXG52YXIgVkFTVFRyYWNrZXIgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RUcmFja2VyJyk7XHJcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4uL3Zhc3QvdmFzdFV0aWwnKTtcclxuXHJcbnZhciBWUEFJREFkVW5pdFdyYXBwZXIgPSByZXF1aXJlKCcuL1ZQQUlEQWRVbml0V3JhcHBlcicpO1xyXG5cclxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXN5bmMnKTtcclxudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xyXG52YXIgcGxheWVyVXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9wbGF5ZXJVdGlscycpO1xyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxuZnVuY3Rpb24gVlBBSURJbnRlZ3JhdG9yKHBsYXllciwgc2V0dGluZ3MpIHtcclxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVlBBSURJbnRlZ3JhdG9yKSkge1xyXG4gICAgcmV0dXJuIG5ldyBWUEFJREludGVncmF0b3IocGxheWVyKTtcclxuICB9XHJcblxyXG4gIHRoaXMuVklFV19NT0RFID0ge1xyXG4gICAgTk9STUFMOiAnbm9ybWFsJyxcclxuICAgIEZVTExTQ1JFRU46IFwiZnVsbHNjcmVlblwiLFxyXG4gICAgVEhVTUJOQUlMOiBcInRodW1ibmFpbFwiXHJcbiAgfTtcclxuICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICB0aGlzLmNvbnRhaW5lckVsID0gY3JlYXRlVlBBSURDb250YWluZXJFbChwbGF5ZXIpO1xyXG4gIHRoaXMub3B0aW9ucyA9IHtcclxuICAgIHJlc3BvbnNlVGltZW91dDogNTAwMCxcclxuICAgIFZQQUlEX1ZFUlNJT046ICcyLjAnXHJcbiAgfTtcclxuICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlVlBBSURDb250YWluZXJFbCgpIHtcclxuICAgIHZhciBjb250YWluZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZG9tLmFkZENsYXNzKGNvbnRhaW5lckVsLCAnVlBBSUQtY29udGFpbmVyJyk7XHJcbiAgICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoY29udGFpbmVyRWwsIHBsYXllci5jb250cm9sQmFyLmVsKCkpO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lckVsO1xyXG5cclxuICB9XHJcbn1cclxuXHJcblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUucGxheUFkID0gZnVuY3Rpb24gcGxheVZQYWlkQWQodmFzdFJlc3BvbnNlLCBjYWxsYmFjaykge1xyXG4gIGlmICghKHZhc3RSZXNwb25zZSBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcclxuICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKCdvbiBWQVNUSW50ZWdyYXRvci5wbGF5QWQsIG1pc3NpbmcgcmVxdWlyZWQgVkFTVFJlc3BvbnNlJykpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICB2YXIgdGVjaCA9IHRoaXMuX2ZpbmRTdXBwb3J0ZWRUZWNoKHZhc3RSZXNwb25zZSwgdGhpcy5zZXR0aW5ncyk7XHJcblxyXG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgdXRpbGl0aWVzLm5vb3A7XHJcblxyXG4gIHRoaXMuX2FkVW5pdCA9IG51bGw7XHJcblxyXG4gIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy12cGFpZC1hZCcpO1xyXG5cclxuICBwbGF5ZXIub24oJ3Zhc3QuYWRzQ2FuY2VsJywgdHJpZ2dlclZwYWlkQWRFbmQpO1xyXG4gIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24oKXtcclxuICAgIHBsYXllci5vZmYoJ3Zhc3QuYWRzQ2FuY2VsJywgdHJpZ2dlclZwYWlkQWRFbmQpO1xyXG4gICAgcmVtb3ZlQWRVbml0KCk7XHJcbiAgfSk7XHJcblxyXG4gIGlmICh0ZWNoKSB7XHJcbiAgICBhc3luYy53YXRlcmZhbGwoW1xyXG4gICAgICBmdW5jdGlvbiAobmV4dCkge1xyXG4gICAgICAgIG5leHQobnVsbCwgdGVjaCwgdmFzdFJlc3BvbnNlKTtcclxuICAgICAgfSxcclxuICAgICAgdGhpcy5fbG9hZEFkVW5pdC5iaW5kKHRoaXMpLFxyXG4gICAgICB0aGlzLl9wbGF5QWRVbml0LmJpbmQodGhpcyksXHJcbiAgICAgIHRoaXMuX2ZpbmlzaFBsYXlpbmcuYmluZCh0aGlzKVxyXG5cclxuICAgIF0sIGFkQ29tcGxldGUpO1xyXG5cclxuICAgIHRoaXMuX2FkVW5pdCA9IHtcclxuICAgICAgX3BhdXNlZDogdHJ1ZSxcclxuICAgICAgdHlwZTogJ1ZQQUlEJyxcclxuICAgICAgcGF1c2VBZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLnBhdXNlQWQnKTtcclxuICAgICAgICBwbGF5ZXIucGF1c2UodHJ1ZSk7Ly93ZSBtYWtlIHN1cmUgdGhhdCB0aGUgdmlkZW8gY29udGVudCBnZXRzIHN0b3BwZWQuXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc3VtZUFkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5yZXN1bWVBZCcpO1xyXG4gICAgICB9LFxyXG4gICAgICBpc1BhdXNlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdXNlZDtcclxuICAgICAgfSxcclxuICAgICAgZ2V0U3JjOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGVjaC5tZWRpYUZpbGU7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgZXJyb3IgPSBuZXcgVkFTVEVycm9yKCdvbiBWUEFJREludGVncmF0b3IucGxheUFkLCBjb3VsZCBub3QgZmluZCBhIHN1cHBvcnRlZCBtZWRpYUZpbGUnLCA0MDMpO1xyXG4gICAgYWRDb21wbGV0ZShlcnJvciwgdGhpcy5fYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXMuX2FkVW5pdDtcclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIGFkQ29tcGxldGUoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKSB7XHJcbiAgICBpZiAoZXJyb3IgJiYgdmFzdFJlc3BvbnNlKSB7XHJcbiAgICAgIHRoYXQuX3RyYWNrRXJyb3IodmFzdFJlc3BvbnNlLCBlcnJvci5jb2RlKTtcclxuICAgIH1cclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5hZEVuZCcpO1xyXG4gICAgY2FsbGJhY2soZXJyb3IsIHZhc3RSZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0cmlnZ2VyVnBhaWRBZEVuZCgpe1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLmFkRW5kJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVBZFVuaXQoKSB7XHJcbiAgICBpZiAodGVjaCkge1xyXG4gICAgICB0ZWNoLnVubG9hZEFkVW5pdCgpO1xyXG4gICAgfVxyXG4gICAgZG9tLnJlbW92ZUNsYXNzKHBsYXllci5lbCgpLCAndmpzLXZwYWlkLWFkJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fZmluZFN1cHBvcnRlZFRlY2ggPSBmdW5jdGlvbiAodmFzdFJlc3BvbnNlLCBzZXR0aW5ncykge1xyXG4gIGlmICghKHZhc3RSZXNwb25zZSBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgdmFyIHZwYWlkTWVkaWFGaWxlcyA9IHZhc3RSZXNwb25zZS5tZWRpYUZpbGVzLmZpbHRlcih2YXN0VXRpbC5pc1ZQQUlEKTtcclxuICB2YXIgaSwgbGVuLCBtZWRpYUZpbGUsIFZQQUlEVGVjaDtcclxuXHJcbiAgZm9yIChpID0gMCwgbGVuID0gdnBhaWRNZWRpYUZpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XHJcbiAgICBtZWRpYUZpbGUgPSB2cGFpZE1lZGlhRmlsZXNbaV07XHJcbiAgICBWUEFJRFRlY2ggPSB2YXN0VXRpbC5maW5kU3VwcG9ydGVkVlBBSURUZWNoKG1lZGlhRmlsZS50eXBlKTtcclxuICAgIGlmIChWUEFJRFRlY2gpIHtcclxuICAgICAgcmV0dXJuIG5ldyBWUEFJRFRlY2gobWVkaWFGaWxlLCBzZXR0aW5ncyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fY3JlYXRlVlBBSURBZFVuaXRXcmFwcGVyID0gZnVuY3Rpb24oYWRVbml0LCBzcmMsIHJlc3BvbnNlVGltZW91dCkge1xyXG4gIHJldHVybiBuZXcgVlBBSURBZFVuaXRXcmFwcGVyKGFkVW5pdCwge3NyYzogc3JjLCByZXNwb25zZVRpbWVvdXQ6IHJlc3BvbnNlVGltZW91dH0pO1xyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fbG9hZEFkVW5pdCA9IGZ1bmN0aW9uICh0ZWNoLCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gIHZhciB2anNUZWNoRWwgPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcclxuICB2YXIgcmVzcG9uc2VUaW1lb3V0ID0gdGhpcy5zZXR0aW5ncy5yZXNwb25zZVRpbWVvdXQgfHwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dDtcclxuICB0ZWNoLmxvYWRBZFVuaXQodGhpcy5jb250YWluZXJFbCwgdmpzVGVjaEVsLCBmdW5jdGlvbiAoZXJyb3IsIGFkVW5pdCkge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIFdyYXBwZWRBZFVuaXQgPSB0aGF0Ll9jcmVhdGVWUEFJREFkVW5pdFdyYXBwZXIoYWRVbml0LCB0ZWNoLm1lZGlhRmlsZS5zcmMsIHJlc3BvbnNlVGltZW91dCk7XHJcbiAgICAgIHZhciB0ZWNoQ2xhc3MgPSAndmpzLScgKyB0ZWNoLm5hbWUgKyAnLWFkJztcclxuICAgICAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCB0ZWNoQ2xhc3MpO1xyXG4gICAgICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSx0ZWNoQ2xhc3MpO1xyXG4gICAgICB9KTtcclxuICAgICAgbmV4dChudWxsLCBXcmFwcGVkQWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBuZXh0KGUsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX3BsYXlBZFVuaXQgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XHJcbiAgYXN5bmMud2F0ZXJmYWxsKFtcclxuICAgIGZ1bmN0aW9uIChuZXh0KSB7XHJcbiAgICAgIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG4gICAgfSxcclxuICAgIHRoaXMuX2hhbmRzaGFrZS5iaW5kKHRoaXMpLFxyXG4gICAgdGhpcy5faW5pdEFkLmJpbmQodGhpcyksXHJcbiAgICB0aGlzLl9zZXR1cEV2ZW50cy5iaW5kKHRoaXMpLFxyXG4gICAgdGhpcy5fYWRkU2tpcEJ1dHRvbi5iaW5kKHRoaXMpLFxyXG4gICAgdGhpcy5fbGlua1BsYXllckNvbnRyb2xzLmJpbmQodGhpcyksXHJcbiAgICB0aGlzLl9zdGFydEFkLmJpbmQodGhpcylcclxuICBdLCBjYWxsYmFjayk7XHJcbn07XHJcblxyXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9oYW5kc2hha2UgPSBmdW5jdGlvbiBoYW5kc2hha2UoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcclxuICBhZFVuaXQuaGFuZHNoYWtlVmVyc2lvbih0aGlzLm9wdGlvbnMuVlBBSURfVkVSU0lPTiwgZnVuY3Rpb24gKGVycm9yLCB2ZXJzaW9uKSB7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIG5leHQoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmVyc2lvbiAmJiBpc1N1cHBvcnRlZFZlcnNpb24odmVyc2lvbikpIHtcclxuICAgICAgcmV0dXJuIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXh0KG5ldyBWQVNURXJyb3IoJ29uIFZQQUlESW50ZWdyYXRvci5faGFuZHNoYWtlLCB1bnN1cHBvcnRlZCB2ZXJzaW9uIFwiJyArIHZlcnNpb24gKyAnXCInKSwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBpc1N1cHBvcnRlZFZlcnNpb24odmVyc2lvbikge1xyXG4gICAgdmFyIG1ham9yTnVtID0gbWFqb3IodmVyc2lvbik7XHJcbiAgICByZXR1cm4gbWFqb3JOdW0gPj0gMSAmJiBtYWpvck51bSA8PSAyO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbWFqb3IodmVyc2lvbikge1xyXG4gICAgdmFyIHBhcnRzID0gdmVyc2lvbi5zcGxpdCgnLicpO1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KHBhcnRzWzBdLCAxMCk7XHJcbiAgfVxyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5faW5pdEFkID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XHJcbiAgdmFyIHRlY2ggPSB0aGlzLnBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xyXG4gIHZhciBkaW1lbnNpb24gPSBkb20uZ2V0RGltZW5zaW9uKHRlY2gpO1xyXG4gIGFkVW5pdC5pbml0QWQoZGltZW5zaW9uLndpZHRoLCBkaW1lbnNpb24uaGVpZ2h0LCB0aGlzLlZJRVdfTU9ERS5OT1JNQUwsIC0xLCB7QWRQYXJhbWV0ZXJzOiB2YXN0UmVzcG9uc2UuYWRQYXJhbWV0ZXJzIHx8ICcnfSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9jcmVhdGVWQVNUVHJhY2tlciA9IGZ1bmN0aW9uKGFkVW5pdFNyYywgdmFzdFJlc3BvbnNlKSB7XHJcbiAgcmV0dXJuIG5ldyBWQVNUVHJhY2tlcihhZFVuaXRTcmMsIHZhc3RSZXNwb25zZSk7XHJcbn07XHJcblxyXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9zZXR1cEV2ZW50cyA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xyXG4gIHZhciBhZFVuaXRTcmMgPSBhZFVuaXQub3B0aW9ucy5zcmM7XHJcbiAgdmFyIHRyYWNrZXIgPSB0aGlzLl9jcmVhdGVWQVNUVHJhY2tlcihhZFVuaXRTcmMsIHZhc3RSZXNwb25zZSk7XHJcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgYWRVbml0Lm9uKCdBZFNraXBwZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRTa2lwcGVkJyk7XHJcbiAgICB0cmFja2VyLnRyYWNrU2tpcCgpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkSW1wcmVzc2lvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZEltcHJlc3Npb24nKTtcclxuICAgIHRyYWNrZXIudHJhY2tJbXByZXNzaW9ucygpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkU3RhcnRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFN0YXJ0ZWQnKTtcclxuICAgIHRyYWNrZXIudHJhY2tDcmVhdGl2ZVZpZXcoKTtcclxuICAgIG5vdGlmeVBsYXlUb1BsYXllcigpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkVmlkZW9TdGFydCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvU3RhcnQnKTtcclxuICAgIHRyYWNrZXIudHJhY2tTdGFydCgpO1xyXG4gICAgbm90aWZ5UGxheVRvUGxheWVyKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRQbGF5aW5nJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkUGxheWluZycpO1xyXG4gICAgdHJhY2tlci50cmFja1Jlc3VtZSgpO1xyXG4gICAgbm90aWZ5UGxheVRvUGxheWVyKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRQYXVzZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRQYXVzZWQnKTtcclxuICAgIHRyYWNrZXIudHJhY2tQYXVzZSgpO1xyXG4gICAgbm90aWZ5UGF1c2VUb1BsYXllcigpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBub3RpZnlQbGF5VG9QbGF5ZXIoKXtcclxuICAgIGlmKHRoYXQuX2FkVW5pdCAmJiB0aGF0Ll9hZFVuaXQuaXNQYXVzZWQoKSl7XHJcbiAgICAgIHRoYXQuX2FkVW5pdC5fcGF1c2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigncGxheScpO1xyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG5vdGlmeVBhdXNlVG9QbGF5ZXIoKSB7XHJcbiAgICBpZih0aGF0Ll9hZFVuaXQpe1xyXG4gICAgICB0aGF0Ll9hZFVuaXQuX3BhdXNlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigncGF1c2UnKTtcclxuICB9XHJcblxyXG4gIGFkVW5pdC5vbignQWRWaWRlb0ZpcnN0UXVhcnRpbGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb0ZpcnN0UXVhcnRpbGUnKTtcclxuICAgIHRyYWNrZXIudHJhY2tGaXJzdFF1YXJ0aWxlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRWaWRlb01pZHBvaW50JywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9NaWRwb2ludCcpO1xyXG4gICAgdHJhY2tlci50cmFja01pZHBvaW50KCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRWaWRlb1RoaXJkUXVhcnRpbGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb1RoaXJkUXVhcnRpbGUnKTtcclxuICAgIHRyYWNrZXIudHJhY2tUaGlyZFF1YXJ0aWxlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRWaWRlb0NvbXBsZXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9Db21wbGV0ZScpO1xyXG4gICAgdHJhY2tlci50cmFja0NvbXBsZXRlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRDbGlja1RocnUnLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkQ2xpY2tUaHJ1Jyk7XHJcbiAgICB2YXIgdXJsID0gZGF0YS51cmw7XHJcbiAgICB2YXIgcGxheWVySGFuZGxlcyA9IGRhdGEucGxheWVySGFuZGxlcztcclxuICAgIHZhciBjbGlja1RocnVVcmwgPSB1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyh1cmwpID8gdXJsIDogZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwodmFzdFJlc3BvbnNlLmNsaWNrVGhyb3VnaCk7XHJcblxyXG4gICAgdHJhY2tlci50cmFja0NsaWNrKCk7XHJcbiAgICBpZiAocGxheWVySGFuZGxlcyAmJiBjbGlja1RocnVVcmwpIHtcclxuICAgICAgd2luZG93Lm9wZW4oY2xpY2tUaHJ1VXJsLCAnX2JsYW5rJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwoY2xpY2tUaHJvdWdoTWFjcm8pIHtcclxuICAgICAgdmFyIHZhcmlhYmxlcyA9IHtcclxuICAgICAgICBBU1NFVFVSSTogYWRVbml0Lm9wdGlvbnMuc3JjLFxyXG4gICAgICAgIENPTlRFTlRQTEFZSEVBRDogMCAvL0luIFZQQUlEIHRoZXJlIGlzIG5vIG1ldGhvZCB0byBrbm93IHRoZSBjdXJyZW50IHRpbWUgZnJvbSB0aGUgYWRVbml0XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gY2xpY2tUaHJvdWdoTWFjcm8gPyB2YXN0VXRpbC5wYXJzZVVSTE1hY3JvKGNsaWNrVGhyb3VnaE1hY3JvLCB2YXJpYWJsZXMpIDogbnVsbDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZFVzZXJBY2NlcHRJbnZpdGF0aW9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVXNlckFjY2VwdEludml0YXRpb24nKTtcclxuICAgIHRyYWNrZXIudHJhY2tBY2NlcHRJbnZpdGF0aW9uKCk7XHJcbiAgICB0cmFja2VyLnRyYWNrQWNjZXB0SW52aXRhdGlvbkxpbmVhcigpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkVXNlckNsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVXNlckNsb3NlJyk7XHJcbiAgICB0cmFja2VyLnRyYWNrQ2xvc2UoKTtcclxuICAgIHRyYWNrZXIudHJhY2tDbG9zZUxpbmVhcigpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkVXNlck1pbmltaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVXNlck1pbmltaXplJyk7XHJcbiAgICB0cmFja2VyLnRyYWNrQ29sbGFwc2UoKTtcclxuICB9KTtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZEVycm9yJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkRXJyb3InKTtcclxuICAgIC8vTk9URTogd2UgdHJhY2sgZXJyb3JzIGNvZGUgOTAxLCBhcyBub3RlZCBpbiBWQVNUIDMuMFxyXG4gICAgdHJhY2tlci50cmFja0Vycm9yV2l0aENvZGUoOTAxKTtcclxuICB9KTtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZFZvbHVtZUNoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZvbHVtZUNoYW5nZScpO1xyXG4gICAgdmFyIGxhc3RWb2x1bWUgPSBwbGF5ZXIudm9sdW1lKCk7XHJcbiAgICBhZFVuaXQuZ2V0QWRWb2x1bWUoZnVuY3Rpb24gKGVycm9yLCBjdXJyZW50Vm9sdW1lKSB7XHJcbiAgICAgIGlmIChjdXJyZW50Vm9sdW1lID09PSAwICYmIGxhc3RWb2x1bWUgPiAwKSB7XHJcbiAgICAgICAgdHJhY2tlci50cmFja011dGUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGN1cnJlbnRWb2x1bWUgPiAwICYmIGxhc3RWb2x1bWUgPT09IDApIHtcclxuICAgICAgICB0cmFja2VyLnRyYWNrVW5tdXRlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBsYXllci52b2x1bWUoY3VycmVudFZvbHVtZSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgdmFyIHVwZGF0ZVZpZXdTaXplID0gcmVzaXplQWQuYmluZCh0aGlzLCBwbGF5ZXIsIGFkVW5pdCwgdGhpcy5WSUVXX01PREUpO1xyXG4gIHZhciB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCA9IHV0aWxpdGllcy50aHJvdHRsZSh1cGRhdGVWaWV3U2l6ZSwgMTAwKTtcclxuICB2YXIgYXV0b1Jlc2l6ZSA9IHRoaXMuc2V0dGluZ3MuYXV0b1Jlc2l6ZTtcclxuXHJcbiAgaWYgKGF1dG9SZXNpemUpIHtcclxuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3Jlc2l6ZScsIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkKTtcclxuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ29yaWVudGF0aW9uY2hhbmdlJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xyXG4gIH1cclxuXHJcbiAgcGxheWVyLm9uKCd2YXN0LnJlc2l6ZScsIHVwZGF0ZVZpZXdTaXplKTtcclxuICBwbGF5ZXIub24oJ3ZwYWlkLnBhdXNlQWQnLCBwYXVzZUFkVW5pdCk7XHJcbiAgcGxheWVyLm9uKCd2cGFpZC5yZXN1bWVBZCcsIHJlc3VtZUFkVW5pdCk7XHJcblxyXG4gIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLm9mZigndmFzdC5yZXNpemUnLCB1cGRhdGVWaWV3U2l6ZSk7XHJcbiAgICBwbGF5ZXIub2ZmKCd2cGFpZC5wYXVzZUFkJywgcGF1c2VBZFVuaXQpO1xyXG4gICAgcGxheWVyLm9mZigndnBhaWQucmVzdW1lQWQnLCByZXN1bWVBZFVuaXQpO1xyXG5cclxuICAgIGlmIChhdXRvUmVzaXplKSB7XHJcbiAgICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ3Jlc2l6ZScsIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkKTtcclxuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnb3JpZW50YXRpb25jaGFuZ2UnLCB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG5cclxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gcGF1c2VBZFVuaXQoKSB7XHJcbiAgICBhZFVuaXQucGF1c2VBZCh1dGlsaXRpZXMubm9vcCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXN1bWVBZFVuaXQoKSB7XHJcbiAgICBhZFVuaXQucmVzdW1lQWQodXRpbGl0aWVzLm5vb3ApO1xyXG4gIH1cclxufTtcclxuXHJcblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2FkZFNraXBCdXR0b24gPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcclxuICB2YXIgc2tpcEJ1dHRvbjtcclxuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcblxyXG4gIGFkVW5pdC5vbignQWRTa2lwcGFibGVTdGF0ZUNoYW5nZScsIHVwZGF0ZVNraXBCdXR0b25TdGF0ZSk7XHJcblxyXG4gIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcmVtb3ZlU2tpcEJ1dHRvbik7XHJcblxyXG4gIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG5cclxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cclxuICBmdW5jdGlvbiB1cGRhdGVTa2lwQnV0dG9uU3RhdGUoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRTa2lwcGFibGVTdGF0ZUNoYW5nZScpO1xyXG4gICAgYWRVbml0LmdldEFkU2tpcHBhYmxlU3RhdGUoZnVuY3Rpb24gKGVycm9yLCBpc1NraXBwYWJsZSkge1xyXG4gICAgICBpZiAoaXNTa2lwcGFibGUpIHtcclxuICAgICAgICBpZiAoIXNraXBCdXR0b24pIHtcclxuICAgICAgICAgIGFkZFNraXBCdXR0b24ocGxheWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVtb3ZlU2tpcEJ1dHRvbihwbGF5ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFNraXBCdXR0b24ocGxheWVyKSB7XHJcbiAgICBza2lwQnV0dG9uID0gY3JlYXRlU2tpcEJ1dHRvbihwbGF5ZXIpO1xyXG4gICAgcGxheWVyLmVsKCkuYXBwZW5kQ2hpbGQoc2tpcEJ1dHRvbik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVTa2lwQnV0dG9uKCkge1xyXG4gICAgZG9tLnJlbW92ZShza2lwQnV0dG9uKTtcclxuICAgIHNraXBCdXR0b24gPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlU2tpcEJ1dHRvbigpIHtcclxuICAgIHZhciBza2lwQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgXCJ2YXN0LXNraXAtYnV0dG9uXCIpO1xyXG4gICAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sIFwiZW5hYmxlZFwiKTtcclxuICAgIHNraXBCdXR0b24uaW5uZXJIVE1MID0gXCJTa2lwIGFkXCI7XHJcblxyXG4gICAgc2tpcEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgYWRVbml0LnNraXBBZCh1dGlsaXRpZXMubm9vcCk7Ly9XZSBza2lwIHRoZSBhZFVuaXRcclxuXHJcbiAgICAgIC8vV2UgcHJldmVudCBldmVudCBwcm9wYWdhdGlvbiB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBjbGlja1Rocm91Z2ggYW5kIHNvIG9uXHJcbiAgICAgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHNraXBCdXR0b247XHJcbiAgfVxyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fbGlua1BsYXllckNvbnRyb2xzID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XHJcbiAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gIGxpbmtWb2x1bWVDb250cm9sKHRoaXMucGxheWVyLCBhZFVuaXQpO1xyXG4gIGxpbmtGdWxsU2NyZWVuQ29udHJvbCh0aGlzLnBsYXllciwgYWRVbml0LCB0aGlzLlZJRVdfTU9ERSk7XHJcblxyXG4gIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG5cclxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gbGlua1ZvbHVtZUNvbnRyb2wocGxheWVyLCBhZFVuaXQpIHtcclxuICAgIHBsYXllci5vbigndm9sdW1lY2hhbmdlJywgdXBkYXRlQWRVbml0Vm9sdW1lKTtcclxuICAgIGFkVW5pdC5vbignQWRWb2x1bWVDaGFuZ2UnLCB1cGRhdGVQbGF5ZXJWb2x1bWUpO1xyXG5cclxuICAgIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBwbGF5ZXIub2ZmKCd2b2x1bWVjaGFuZ2UnLCB1cGRhdGVBZFVuaXRWb2x1bWUpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUFkVW5pdFZvbHVtZSgpIHtcclxuICAgICAgdmFyIHZvbCA9IHBsYXllci5tdXRlZCgpID8gMCA6IHBsYXllci52b2x1bWUoKTtcclxuICAgICAgYWRVbml0LnNldEFkVm9sdW1lKHZvbCwgbG9nRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBsYXllclZvbHVtZSgpIHtcclxuICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVm9sdW1lQ2hhbmdlJyk7XHJcbiAgICAgIGFkVW5pdC5nZXRBZFZvbHVtZShmdW5jdGlvbiAoZXJyb3IsIHZvbCkge1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgbG9nRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwbGF5ZXIudm9sdW1lKHZvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxpbmtGdWxsU2NyZWVuQ29udHJvbChwbGF5ZXIsIGFkVW5pdCwgVklFV19NT0RFKSB7XHJcbiAgICB2YXIgdXBkYXRlVmlld1NpemUgPSByZXNpemVBZC5iaW5kKHRoYXQsIHBsYXllciwgYWRVbml0LCBWSUVXX01PREUpO1xyXG5cclxuICAgIHBsYXllci5vbignZnVsbHNjcmVlbmNoYW5nZScsIHVwZGF0ZVZpZXdTaXplKTtcclxuXHJcbiAgICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcGxheWVyLm9mZignZnVsbHNjcmVlbmNoYW5nZScsIHVwZGF0ZVZpZXdTaXplKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX3N0YXJ0QWQgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcclxuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcblxyXG4gIGFkVW5pdC5zdGFydEFkKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgaWYgKCFlcnJvcikge1xyXG4gICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZFN0YXJ0Jyk7XHJcbiAgICB9XHJcbiAgICBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9maW5pc2hQbGF5aW5nID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XHJcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xyXG4gIGFkVW5pdC5vbignQWRTdG9wcGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRTdG9wcGVkJyk7XHJcbiAgIGZpbmlzaFBsYXlpbmdBZChudWxsKTtcclxuICB9KTtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZEVycm9yJywgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICB2YXIgZXJyTXNnID0gZXJyb3I/IGVycm9yLm1lc3NhZ2UgOiAnb24gVlBBSURJbnRlZ3JhdG9yLCBlcnJvciB3aGlsZSB3YWl0aW5nIGZvciB0aGUgYWRVbml0IHRvIGZpbmlzaCBwbGF5aW5nJztcclxuICAgIGZpbmlzaFBsYXlpbmdBZChuZXcgVkFTVEVycm9yKGVyck1zZykpO1xyXG4gIH0pO1xyXG5cclxuICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gZmluaXNoUGxheWluZ0FkKGVycm9yKSB7XHJcbiAgICBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fdHJhY2tFcnJvciA9IGZ1bmN0aW9uIHRyYWNrRXJyb3IocmVzcG9uc2UsIGVycm9yQ29kZSkge1xyXG4gIHZhc3RVdGlsLnRyYWNrKHJlc3BvbnNlLmVycm9yVVJMTWFjcm9zLCB7RVJST1JDT0RFOiBlcnJvckNvZGUgfHwgOTAxfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZXNpemVBZChwbGF5ZXIsIGFkVW5pdCwgVklFV19NT0RFKSB7XHJcbiAgdmFyIHRlY2ggPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcclxuICB2YXIgZGltZW5zaW9uID0gZG9tLmdldERpbWVuc2lvbih0ZWNoKTtcclxuICB2YXIgTU9ERSA9IHBsYXllci5pc0Z1bGxzY3JlZW4oKSA/IFZJRVdfTU9ERS5GVUxMU0NSRUVOIDogVklFV19NT0RFLk5PUk1BTDtcclxuICBhZFVuaXQucmVzaXplQWQoZGltZW5zaW9uLndpZHRoLCBkaW1lbnNpb24uaGVpZ2h0LCBNT0RFLCBsb2dFcnJvcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0Vycm9yKGVycm9yKSB7XHJcbiAgaWYgKGVycm9yICYmIGNvbnNvbGUgJiYgY29uc29sZS5sb2cpIHtcclxuICAgIGNvbnNvbGUubG9nKCdFUlJPUjogJyArIGVycm9yLm1lc3NhZ2UsIGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVlBBSURJbnRlZ3JhdG9yOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcclxuXHJcbnZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmVsZW1lbnQuY2xhc3NOYW1lID0gJ3Zqcy1hZHMtbGFiZWwgdmpzLWNvbnRyb2wgdmpzLWxhYmVsLWhpZGRlbic7XHJcbmVsZW1lbnQuaW5uZXJIVE1MID0gJ0FkdmVydGlzZW1lbnQnO1xyXG5cclxudmFyIEFkc0xhYmVsRmFjdG9yeSA9IGZ1bmN0aW9uKGJhc2VDb21wb25lbnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgLyoqIEBjb25zdHJ1Y3RvciAqL1xyXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgb3B0aW9ucy5lbCA9IGVsZW1lbnQ7XHJcbiAgICAgIGJhc2VDb21wb25lbnQuY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgLy8gV2UgYXN5bmNocm9ub3VzbHkgcmVwb3NpdGlvbiB0aGUgYWRzIGxhYmVsIGVsZW1lbnRcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lQ29tcCA9IHBsYXllci5jb250cm9sQmFyICYmKCBwbGF5ZXIuY29udHJvbEJhci5nZXRDaGlsZChcInRpbWVyQ29udHJvbHNcIikgfHwgcGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoXCJjdXJyZW50VGltZURpc3BsYXlcIikgKTtcclxuICAgICAgICBpZihjdXJyZW50VGltZUNvbXApIHtcclxuICAgICAgICAgIHBsYXllci5jb250cm9sQmFyLmVsKCkuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGN1cnJlbnRUaW1lQ29tcC5lbCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKGVsZW1lbnQsICd2anMtbGFiZWwtaGlkZGVuJyk7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfSxcclxuXHJcbiAgICBlbDogZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQWRzTGFiZWxGYWN0b3J5OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBiYXNlVmlkZW9Kc0NvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcclxuXHJcbnZhciBBZHNMYWJlbCA9IHJlcXVpcmUoJy4vYWRzLWxhYmVsJykoYmFzZVZpZGVvSnNDb21wb25lbnQpO1xyXG5cclxudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnQWRzTGFiZWwnLCB2aWRlb2pzLmV4dGVuZChiYXNlVmlkZW9Kc0NvbXBvbmVudCwgQWRzTGFiZWwpKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgdGhhdCBzaG93cyBhIGJsYWNrIHNjcmVlbiB1bnRpbCB0aGUgYWRzIHBsdWdpbiBoYXMgZGVjaWRlZCBpZiBpdCBjYW4gb3IgaXQgY2FuIG5vdCBwbGF5IHRoZSBhZC5cclxuICpcclxuICogTm90ZTogSW4gY2FzZSB5b3Ugd29uZGVyIHdoeSBpbnN0ZWFkIG9mIHRoaXMgYmxhY2sgcG9zdGVyIHdlIGRvbid0IGp1c3Qgc2hvdyB0aGUgc3Bpbm5lciBsb2FkZXIuXHJcbiAqICAgICAgIElPUyBkZXZpY2VzIGRvIG5vdCB3b3JrIHdlbGwgd2l0aCBhbmltYXRpb25zIGFuZCB0aGUgYnJvd3NlciBjaHJhc2hlcyBmcm9tIHRpbWUgdG8gdGltZSBUaGF0IGlzIHdoeSB3ZSBjaG9zZSB0b1xyXG4gKiAgICAgICBoYXZlIGEgc2Vjb25kYXJ5IGJsYWNrIHBvc3Rlci5cclxuICpcclxuICogICAgICAgSXQgYWxzbyBtYWtlcyBpdCBtdWNoIG1vcmUgZWFzaWVyIGZvciB0aGUgdXNlcnMgb2YgdGhlIHBsdWdpbiBzaW5jZSBpdCBkb2VzIG5vdCBjaGFuZ2UgdGhlIGRlZmF1bHQgYmVoYXZpb3VyIG9mIHRoZVxyXG4gKiAgICAgICBzcGlubmVyIGFuZCB0aGUgcGxheWVyIHdvcmtzIHRoZSBzYW1lIHdheSB3aXRoIGFuZCB3aXRob3V0IHRoZSBwbHVnaW4uXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmpzLlBsYXllcnxPYmplY3R9IHBsYXllclxyXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG52YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxudmFyIEJsYWNrUG9zdGVyRmFjdG9yeSA9IGZ1bmN0aW9uKGJhc2VDb21wb25lbnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgLyoqIEBjb25zdHJ1Y3RvciAqL1xyXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgb3B0aW9ucy5lbCA9IGVsZW1lbnQ7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gJ3Zqcy1ibGFjay1wb3N0ZXInO1xyXG4gICAgICBiYXNlQ29tcG9uZW50LmNhbGwodGhpcywgcGxheWVyLCBvcHRpb25zKTtcclxuXHJcbiAgICAgIHZhciBwb3N0ZXJJbWcgPSBwbGF5ZXIuZ2V0Q2hpbGQoJ3Bvc3RlckltYWdlJyk7XHJcblxyXG4gICAgICAvL1dlIG5lZWQgdG8gZG8gaXQgYXN5bmNocm9ub3VzbHkgdG8gYmUgc3VyZSB0aGF0IHRoZSBibGFjayBwb3N0ZXIgZWwgaXMgb24gdGhlIGRvbS5cclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZihwb3N0ZXJJbWcgJiYgcGxheWVyICYmIHBsYXllci5lbCgpKSB7XHJcbiAgICAgICAgICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgcG9zdGVySW1nLmVsKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMCk7XHJcbiAgICB9LFxyXG4gICAgZWw6IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJsYWNrUG9zdGVyRmFjdG9yeTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgYmFzZVZpZGVvSnNDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XHJcblxyXG52YXIgQmxhY2tQb3N0ZXIgPSByZXF1aXJlKCcuL2JsYWNrLXBvc3RlcicpKGJhc2VWaWRlb0pzQ29tcG9uZW50KTtcclxuXHJcbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ0JsYWNrUG9zdGVyJywgdmlkZW9qcy5leHRlbmQoYmFzZVZpZGVvSnNDb21wb25lbnQsIEJsYWNrUG9zdGVyKSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBWQVNUQ2xpZW50ID0gcmVxdWlyZSgnLi4vYWRzL3Zhc3QvVkFTVENsaWVudCcpO1xyXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vYWRzL3Zhc3QvVkFTVEVycm9yJyk7XHJcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4uL2Fkcy92YXN0L3Zhc3RVdGlsJyk7XHJcblxyXG52YXIgVkFTVEludGVncmF0b3IgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC9WQVNUSW50ZWdyYXRvcicpO1xyXG52YXIgVlBBSURJbnRlZ3JhdG9yID0gcmVxdWlyZSgnLi4vYWRzL3ZwYWlkL1ZQQUlESW50ZWdyYXRvcicpO1xyXG5cclxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vdXRpbHMvYXN5bmMnKTtcclxudmFyIGRvbSA9IHJlcXVpcmUoJy4uL3V0aWxzL2RvbScpO1xyXG52YXIgcGxheWVyVXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy9wbGF5ZXJVdGlscycpO1xyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBWQVNUUGx1Z2luKG9wdGlvbnMpIHtcclxuICB2YXIgc25hcHNob3Q7XHJcbiAgdmFyIHBsYXllciA9IHRoaXM7XHJcbiAgdmFyIHZhc3QgPSBuZXcgVkFTVENsaWVudCgpO1xyXG4gIHZhciBhZHNDYW5jZWxlZCA9IGZhbHNlO1xyXG4gIHZhciBkZWZhdWx0T3B0cyA9IHtcclxuICAgIC8vIG1heGltdW0gYW1vdW50IG9mIHRpbWUgaW4gbXMgdG8gd2FpdCB0byByZWNlaXZlIGBhZHNyZWFkeWAgZnJvbSB0aGUgYWRcclxuICAgIC8vIGltcGxlbWVudGF0aW9uIGFmdGVyIHBsYXkgaGFzIGJlZW4gcmVxdWVzdGVkLiBBZCBpbXBsZW1lbnRhdGlvbnMgYXJlXHJcbiAgICAvLyBleHBlY3RlZCB0byBsb2FkIGFueSBkeW5hbWljIGxpYnJhcmllcyBhbmQgbWFrZSBhbnkgcmVxdWVzdHMgdG8gZGV0ZXJtaW5lXHJcbiAgICAvLyBhZCBwb2xpY2llcyBmb3IgYSB2aWRlbyBkdXJpbmcgdGhpcyB0aW1lLlxyXG4gICAgdGltZW91dDogNTAwLFxyXG5cclxuICAgIC8vVE9ETzpmaW5pc2ggdGhpcyBJT1MgRklYXHJcbiAgICAvL1doZW5ldmVyIHlvdSBwbGF5IGFuIGFkZCBvbiBJT1MsIHRoZSBuYXRpdmUgcGxheWVyIGtpY2tzIGluIGFuZCB3ZSBsb29zZSBjb250cm9sIG9mIGl0LiBPbiB2ZXJ5IGhlYXZ5IHBhZ2VzIHRoZSAncGxheScgZXZlbnRcclxuICAgIC8vIE1heSBvY2N1ciBhZnRlciB0aGUgdmlkZW8gY29udGVudCBoYXMgYWxyZWFkeSBzdGFydGVkLiBUaGlzIGlzIHdyb25nIGlmIHlvdSB3YW50IHRvIHBsYXkgYSBwcmVyb2xsIGFkIHRoYXQgbmVlZHMgdG8gaGFwcGVuIGJlZm9yZSB0aGUgdXNlclxyXG4gICAgLy8gc3RhcnRzIHdhdGNoaW5nIHRoZSBjb250ZW50LiBUbyBwcmV2ZW50IHRoaXMgdXNlY1xyXG4gICAgaW9zUHJlcm9sbENhbmNlbFRpbWVvdXQ6IDIwMDAsXHJcblxyXG4gICAgLy8gbWF4aW11biBhbW91bnQgb2YgdGltZSBmb3IgdGhlIGFkIHRvIGFjdHVhbGx5IHN0YXJ0IHBsYXlpbmcuIElmIHRoaXMgdGltZW91dCBnZXRzXHJcbiAgICAvLyB0cmlnZ2VyZWQgdGhlIGFkcyB3aWxsIGJlIGNhbmNlbGxlZFxyXG4gICAgYWRDYW5jZWxUaW1lb3V0OiAzMDAwLFxyXG5cclxuICAgIC8vIEJvb2xlYW4gZmxhZyB0aGF0IGNvbmZpZ3VyZXMgdGhlIHBsYXllciB0byBwbGF5IGEgbmV3IGFkIGJlZm9yZSB0aGUgdXNlciBzZWVzIHRoZSB2aWRlbyBhZ2FpblxyXG4gICAgLy8gdGhlIGN1cnJlbnQgdmlkZW9cclxuICAgIHBsYXlBZEFsd2F5czogZmFsc2UsXHJcblxyXG4gICAgLy8gRmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYWRzIGJ5IGRlZmF1bHQuXHJcbiAgICBhZHNFbmFibGVkOiB0cnVlLFxyXG5cclxuICAgIC8vIEJvb2xlYW4gZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgcmVzaXplIHdpdGggd2luZG93LnJlc2l6ZSBvciBvcmllbnRhdGlvbmNoYW5nZVxyXG4gICAgYXV0b1Jlc2l6ZTogdHJ1ZSxcclxuXHJcbiAgICAvLyBQYXRoIHRvIHRoZSBWUEFJRCBmbGFzaCBhZCdzIGxvYWRlclxyXG4gICAgdnBhaWRGbGFzaExvYWRlclBhdGg6ICcvVlBBSURGbGFzaC5zd2YnXHJcbiAgfTtcclxuXHJcbiAgdmFyIHNldHRpbmdzID0gdXRpbGl0aWVzLmV4dGVuZCh7fSwgZGVmYXVsdE9wdHMsIG9wdGlvbnMgfHwge30pO1xyXG5cclxuICBpZih1dGlsaXRpZXMuaXNVbmRlZmluZWQoc2V0dGluZ3MuYWRUYWdVcmwpICYmIHV0aWxpdGllcy5pc0RlZmluZWQoc2V0dGluZ3MudXJsKSl7XHJcbiAgICBzZXR0aW5ncy5hZFRhZ1VybCA9IHNldHRpbmdzLnVybDtcclxuICB9XHJcblxyXG4gIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoc2V0dGluZ3MuYWRUYWdVcmwpKSB7XHJcbiAgICBzZXR0aW5ncy5hZFRhZ1VybCA9IHV0aWxpdGllcy5lY2hvRm4oc2V0dGluZ3MuYWRUYWdVcmwpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQoc2V0dGluZ3MuYWRUYWdYTUwpICYmICF1dGlsaXRpZXMuaXNGdW5jdGlvbihzZXR0aW5ncy5hZFRhZ1hNTCkpIHtcclxuICAgIHJldHVybiB0cmFja0FkRXJyb3IobmV3IFZBU1RFcnJvcignb24gVmlkZW9KUyBWQVNUIHBsdWdpbiwgdGhlIHBhc3NlZCBhZFRhZ1hNTCBvcHRpb24gZG9lcyBub3QgY29udGFpbiBhIGZ1bmN0aW9uJykpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF1dGlsaXRpZXMuaXNEZWZpbmVkKHNldHRpbmdzLmFkVGFnVXJsKSAmJiAhdXRpbGl0aWVzLmlzRnVuY3Rpb24oc2V0dGluZ3MuYWRUYWdYTUwpKSB7XHJcbiAgICByZXR1cm4gdHJhY2tBZEVycm9yKG5ldyBWQVNURXJyb3IoJ29uIFZpZGVvSlMgVkFTVCBwbHVnaW4sIG1pc3NpbmcgYWRUYWdVcmwgb24gb3B0aW9ucyBvYmplY3QnKSk7XHJcbiAgfVxyXG5cclxuICB2YXN0VXRpbC5ydW5GbGFzaFN1cHBvcnRDaGVjayhzZXR0aW5ncy52cGFpZEZsYXNoTG9hZGVyUGF0aCk7Ly8gTmVjZXNzYXJ5IHN0ZXAgZm9yIFZQQUlERkxBU0hDbGllbnQgdG8gd29yay5cclxuXHJcbiAgcGxheWVyVXRpbHMucHJlcGFyZUZvckFkcyhwbGF5ZXIpO1xyXG5cclxuICBpZiAoc2V0dGluZ3MucGxheUFkQWx3YXlzKSB7XHJcbiAgICAvLyBObyBtYXR0ZXIgd2hhdCBoYXBwZW5zIHdlIHBsYXkgYSBuZXcgYWQgYmVmb3JlIHRoZSB1c2VyIHNlZXMgdGhlIHZpZGVvIGFnYWluLlxyXG4gICAgcGxheWVyLm9uKCd2YXN0LmNvbnRlbnRFbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LnJlc2V0Jyk7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoc2V0dGluZ3MucHJlZmV0Y2hBZFRhZykge1xyXG4gICAgdHJ5VG9QbGF5UHJlcm9sbEFkKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHBsYXllci5vbigndmFzdC5maXJzdFBsYXknLCB0cnlUb1BsYXlQcmVyb2xsQWQpO1xyXG4gIH1cclxuXHJcbiAgcGxheWVyLm9uKCd2YXN0LnJlc2V0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy9JZiB3ZSBhcmUgcmVzZXRpbmcgdGhlIHBsdWdpbiwgd2UgZG9uJ3Qgd2FudCB0byByZXN0b3JlIHRoZSBjb250ZW50XHJcbiAgICBzbmFwc2hvdCA9IG51bGw7XHJcbiAgICBjYW5jZWxBZHMoKTtcclxuICB9KTtcclxuXHJcbiAgcGxheWVyLnZhc3QgPSB7XHJcbiAgICBpc0VuYWJsZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHNldHRpbmdzLmFkc0VuYWJsZWQ7XHJcbiAgICB9LFxyXG5cclxuICAgIGVuYWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXR0aW5ncy5hZHNFbmFibGVkID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgZGlzYWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXR0aW5ncy5hZHNFbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHBsYXllci52YXN0O1xyXG5cclxuICAvKioqKiBMb2NhbCBmdW5jdGlvbnMgKioqKi9cclxuICBmdW5jdGlvbiB0cnlUb1BsYXlQcmVyb2xsQWQoKSB7XHJcbiAgICAvL1dlIHJlbW92ZSB0aGUgcG9zdGVyIHRvIHByZXZlbnQgZmxpY2tlcmluZyB3aGVuZXZlciB0aGUgY29udGVudCBzdGFydHMgcGxheWluZ1xyXG4gICAgcGxheWVyVXRpbHMucmVtb3ZlTmF0aXZlUG9zdGVyKHBsYXllcik7XHJcblxyXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZHNDYW5jZWwnLCAndmFzdC5hZEVuZCddLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJlbW92ZUFkVW5pdCgpO1xyXG4gICAgICByZXN0b3JlVmlkZW9Db250ZW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhc3luYy53YXRlcmZhbGwoW1xyXG4gICAgICBjaGVja0Fkc0VuYWJsZWQsXHJcbiAgICAgIHByZXBhcmVQbGF5ZXJGb3JBZCxcclxuICAgICAgc3RhcnRBZENhbmNlbFRpbWVvdXQsXHJcbiAgICAgIGdldFZhc3RSZXNwb25zZSxcclxuICAgICAgcGxheVByZXJvbGxBZFxyXG4gICAgXSwgZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSkge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICB0cmFja0FkRXJyb3IoZXJyb3IsIHJlc3BvbnNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZEVuZCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWRVbml0KCkge1xyXG4gICAgICBpZiAocGxheWVyLnZhc3QgJiYgcGxheWVyLnZhc3QuYWRVbml0KSB7XHJcbiAgICAgICAgcGxheWVyLnZhc3QuYWRVbml0ID0gbnVsbDsgLy9XZSByZW1vdmUgdGhlIGFkVW5pdFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzdG9yZVZpZGVvQ29udGVudCgpIHtcclxuICAgICAgc2V0dXBDb250ZW50RXZlbnRzKCk7XHJcbiAgICAgIGlmIChzbmFwc2hvdCkge1xyXG4gICAgICAgIHBsYXllclV0aWxzLnJlc3RvcmVQbGF5ZXJTbmFwc2hvdChwbGF5ZXIsIHNuYXBzaG90KTtcclxuICAgICAgICBzbmFwc2hvdCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXR1cENvbnRlbnRFdmVudHMoKSB7XHJcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnLCAndmFzdC5yZXNldCcsICd2YXN0LmZpcnN0UGxheSddLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgaWYgKGV2dC50eXBlICE9PSAncGxheWluZycpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmNvbnRlbnRTdGFydCcpO1xyXG5cclxuICAgICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydlbmRlZCcsICd2YXN0LnJlc2V0JywgJ3Zhc3QuZmlyc3RQbGF5J10sIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2VuZGVkJykge1xyXG4gICAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5jb250ZW50RW5kJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrQWRzRW5hYmxlZChuZXh0KSB7XHJcbiAgICAgIGlmIChzZXR0aW5ncy5hZHNFbmFibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5leHQobnVsbCk7XHJcbiAgICAgIH1cclxuICAgICAgbmV4dChuZXcgVkFTVEVycm9yKCdBZHMgYXJlIG5vdCBlbmFibGVkJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHByZXBhcmVQbGF5ZXJGb3JBZChuZXh0KSB7XHJcbiAgICAgIGlmIChjYW5QbGF5UHJlcm9sbEFkKCkpIHtcclxuICAgICAgICBzbmFwc2hvdCA9IHBsYXllclV0aWxzLmdldFBsYXllclNuYXBzaG90KHBsYXllcik7XHJcbiAgICAgICAgcGxheWVyLnBhdXNlKCk7XHJcbiAgICAgICAgYWRkU3Bpbm5lckljb24oKTtcclxuXHJcbiAgICAgICAgaWYocGxheWVyLnBhdXNlZCgpKSB7XHJcbiAgICAgICAgICBuZXh0KG51bGwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydwbGF5aW5nJ10sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcclxuICAgICAgICAgICAgbmV4dChudWxsKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXh0KG5ldyBWQVNURXJyb3IoJ3ZpZGVvIGNvbnRlbnQgaGFzIGJlZW4gcGxheWluZyBiZWZvcmUgcHJlcm9sbCBhZCcpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhblBsYXlQcmVyb2xsQWQoKSB7XHJcbiAgICAgIHJldHVybiAhdXRpbGl0aWVzLmlzSVBob25lKCkgfHwgcGxheWVyLmN1cnJlbnRUaW1lKCkgPD0gc2V0dGluZ3MuaW9zUHJlcm9sbENhbmNlbFRpbWVvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnRBZENhbmNlbFRpbWVvdXQobmV4dCkge1xyXG4gICAgICB2YXIgYWRDYW5jZWxUaW1lb3V0SWQ7XHJcbiAgICAgIGFkc0NhbmNlbGVkID0gZmFsc2U7XHJcblxyXG4gICAgICBhZENhbmNlbFRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRyYWNrQWRFcnJvcihuZXcgVkFTVEVycm9yKCd0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIHRoZSB2aWRlbyB0byBzdGFydCBwbGF5aW5nJywgNDAyKSk7XHJcbiAgICAgIH0sIHNldHRpbmdzLmFkQ2FuY2VsVGltZW91dCk7XHJcblxyXG4gICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkU3RhcnQnLCAndmFzdC5hZHNDYW5jZWwnXSwgY2xlYXJBZENhbmNlbFRpbWVvdXQpO1xyXG5cclxuICAgICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gICAgICBmdW5jdGlvbiBjbGVhckFkQ2FuY2VsVGltZW91dCgpIHtcclxuICAgICAgICBpZiAoYWRDYW5jZWxUaW1lb3V0SWQpIHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dChhZENhbmNlbFRpbWVvdXRJZCk7XHJcbiAgICAgICAgICBhZENhbmNlbFRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBuZXh0KG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFNwaW5uZXJJY29uKCkge1xyXG4gICAgICBkb20uYWRkQ2xhc3MocGxheWVyLmVsKCksICd2anMtdmFzdC1hZC1sb2FkaW5nJyk7XHJcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRTdGFydCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVTcGlubmVySWNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3Bpbm5lckljb24oKSB7XHJcbiAgICAgIC8vSU1QT1JUQU5UIE5PVEU6IFdlIHJlbW92ZSB0aGUgc3Bpbm5lckljb24gYXN5bmNocm9ub3VzbHkgdG8gZ2l2ZSB0aW1lIHRvIHRoZSBicm93c2VyIHRvIHN0YXJ0IHRoZSB2aWRlby5cclxuICAgICAgLy8gSWYgd2UgcmVtb3ZlIGl0IHN5bmNocm9ub3VzbHkgd2Ugc2VlIGEgZmxhc2ggb2YgdGhlIGNvbnRlbnQgdmlkZW8gYmVmb3JlIHRoZSBhZCBzdGFydHMgcGxheWluZy5cclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHBsYXllci5lbCgpLCAndmpzLXZhc3QtYWQtbG9hZGluZycpO1xyXG4gICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhbmNlbEFkcygpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkc0NhbmNlbCcpO1xyXG4gICAgYWRzQ2FuY2VsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheVByZXJvbGxBZChjYWxsYmFjaykge1xyXG4gICAgYXN5bmMud2F0ZXJmYWxsKFtcclxuICAgICAgcGxheUFkXHJcbiAgICBdLCBjYWxsYmFjayk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRWYXN0UmVzcG9uc2UoY2FsbGJhY2spIHtcclxuICAgIHZhc3QuZ2V0VkFTVFJlc3BvbnNlKHNldHRpbmdzLmFkVGFnVXJsID8gc2V0dGluZ3MuYWRUYWdVcmwoKSA6IHNldHRpbmdzLmFkVGFnWE1MLCBjYWxsYmFjayk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGF5QWQodmFzdFJlc3BvbnNlLCBjYWxsYmFjaykge1xyXG4gICAgLy9UT0RPOiBGaW5kIGEgYmV0dGVyIHdheSB0byBzdG9wIHRoZSBwbGF5LiBUaGUgJ3BsYXlQcmVyb2xsV2F0ZXJmYWxsJyBlbmRzIGluIGFuIGluY29uc2lzdGVudCBzaXR1YXRpb25cclxuICAgIC8vSWYgdGhlIHN0YXRlIGlzIG5vdCAncHJlcm9sbD8nIGl0IG1lYW5zIHRoZSBhZHMgd2VyZSBjYW5jZWxlZCB0aGVyZWZvcmUsIHdlIGJyZWFrIHRoZSB3YXRlcmZhbGxcclxuICAgIGlmIChhZHNDYW5jZWxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFkSW50ZWdyYXRvciA9IGlzVlBBSUQodmFzdFJlc3BvbnNlKSA/IG5ldyBWUEFJREludGVncmF0b3IocGxheWVyLCBzZXR0aW5ncykgOiBuZXcgVkFTVEludGVncmF0b3IocGxheWVyKTtcclxuICAgIHZhciBhZEZpbmlzaGVkID0gZmFsc2U7XHJcblxyXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZFN0YXJ0JywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgaWYgKGV2dC50eXBlID09PSAndmFzdC5hZFN0YXJ0Jykge1xyXG4gICAgICAgIGFkZEFkc0xhYmVsKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcmVtb3ZlQWRzTGFiZWwpO1xyXG5cclxuICAgIGlmICh1dGlsaXRpZXMuaXNJRGV2aWNlKCkpIHtcclxuICAgICAgcHJldmVudE1hbnVhbFByb2dyZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyLnZhc3QudmFzdFJlc3BvbnNlID0gdmFzdFJlc3BvbnNlO1xyXG4gICAgXHJcbiAgICBpZiAoc2V0dGluZ3MucHJlZmV0Y2hBZFRhZykge1xyXG4gICAgICBwbGF5ZXIub25lKCdwbGF5JywgX3BsYXlBZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfcGxheUFkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX3BsYXlBZCgpIHtcclxuICAgICAgcGxheWVyLnZhc3QuYWRVbml0ID0gYWRJbnRlZ3JhdG9yLnBsYXlBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKioqL1xyXG4gICAgZnVuY3Rpb24gYWRkQWRzTGFiZWwoKSB7XHJcbiAgICAgIGlmIChhZEZpbmlzaGVkIHx8IHBsYXllci5jb250cm9sQmFyLmdldENoaWxkKCdBZHNMYWJlbCcpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwbGF5ZXIuY29udHJvbEJhci5hZGRDaGlsZCgnQWRzTGFiZWwnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVBZHNMYWJlbCgpIHtcclxuICAgICAgcGxheWVyLmNvbnRyb2xCYXIucmVtb3ZlQ2hpbGQoJ0Fkc0xhYmVsJyk7XHJcbiAgICAgIGFkRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHByZXZlbnRNYW51YWxQcm9ncmVzcygpIHtcclxuICAgICAgLy9JT1MgdmlkZW8gY2xvY2sgaXMgdmVyeSB1bnJlbGlhYmxlIGFuZCB3ZSBuZWVkIGEgMyBzZWNvbmRzIHRocmVzaG9sZCB0byBlbnN1cmUgdGhhdCB0aGUgdXNlciBmb3J3YXJkZWQvcmV3b3VuZCB0aGUgYWRcclxuICAgICAgdmFyIFBST0dSRVNTX1RIUkVTSE9MRCA9IDM7XHJcbiAgICAgIHZhciBwcmV2aW91c1RpbWUgPSAwO1xyXG4gICAgICB2YXIgc2tpcGFkX2F0dGVtcHRzID0gMDtcclxuXHJcbiAgICAgIHBsYXllci5vbigndGltZXVwZGF0ZScsIHByZXZlbnRBZFNlZWspO1xyXG4gICAgICBwbGF5ZXIub24oJ2VuZGVkJywgcHJldmVudEFkU2tpcCk7XHJcblxyXG4gICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJywgJ3Zhc3QuYWRFcnJvciddLCBzdG9wUHJldmVudE1hbnVhbFByb2dyZXNzKTtcclxuXHJcbiAgICAgIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICAgICAgZnVuY3Rpb24gcHJldmVudEFkU2tpcCgpIHtcclxuICAgICAgICAvLyBJZ25vcmUgZW5kZWQgZXZlbnQgaWYgdGhlIEFkIHRpbWUgd2FzIG5vdCAnbmVhcicgdGhlIGVuZFxyXG4gICAgICAgIC8vIGFuZCByZXZlcnQgdGltZSB0byB0aGUgcHJldmlvdXMgJ3ZhbGlkJyB0aW1lXHJcbiAgICAgICAgaWYgKChwbGF5ZXIuZHVyYXRpb24oKSAtIHByZXZpb3VzVGltZSkgPiBQUk9HUkVTU19USFJFU0hPTEQpIHtcclxuICAgICAgICAgIHBsYXllci5wYXVzZSh0cnVlKTsgLy8gdGhpcyByZWR1Y2UgdGhlIHZpZGVvIGppdHRlciBpZiB0aGUgSU9TIHNraXAgYnV0dG9uIGlzIHByZXNzZWRcclxuICAgICAgICAgIHBsYXllci5wbGF5KHRydWUpOyAvLyB3ZSBuZWVkIHRvIHRyaWdnZXIgdGhlIHBsYXkgdG8gcHV0IHRoZSB2aWRlbyBlbGVtZW50IGJhY2sgaW4gYSB2YWxpZCBzdGF0ZVxyXG4gICAgICAgICAgcGxheWVyLmN1cnJlbnRUaW1lKHByZXZpb3VzVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBwcmV2ZW50QWRTZWVrKCkge1xyXG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IHBsYXllci5jdXJyZW50VGltZSgpO1xyXG4gICAgICAgIHZhciBwcm9ncmVzc0RlbHRhID0gTWF0aC5hYnMoY3VycmVudFRpbWUgLSBwcmV2aW91c1RpbWUpO1xyXG4gICAgICAgIGlmIChwcm9ncmVzc0RlbHRhID4gUFJPR1JFU1NfVEhSRVNIT0xEKSB7XHJcbiAgICAgICAgICBza2lwYWRfYXR0ZW1wdHMgKz0gMTtcclxuICAgICAgICAgIGlmIChza2lwYWRfYXR0ZW1wdHMgPj0gMikge1xyXG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UodHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwbGF5ZXIuY3VycmVudFRpbWUocHJldmlvdXNUaW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcHJldmlvdXNUaW1lID0gY3VycmVudFRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBzdG9wUHJldmVudE1hbnVhbFByb2dyZXNzKCkge1xyXG4gICAgICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCBwcmV2ZW50QWRTZWVrKTtcclxuICAgICAgICBwbGF5ZXIub2ZmKCdlbmRlZCcsIHByZXZlbnRBZFNraXApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0cmFja0FkRXJyb3IoZXJyb3IsIHZhc3RSZXNwb25zZSkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoe3R5cGU6ICd2YXN0LmFkRXJyb3InLCBlcnJvcjogZXJyb3J9KTtcclxuICAgIGNhbmNlbEFkcygpO1xyXG4gICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS5sb2cpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0FEIEVSUk9SOicsIGVycm9yLm1lc3NhZ2UsIGVycm9yLCB2YXN0UmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNWUEFJRCh2YXN0UmVzcG9uc2UpIHtcclxuICAgIHZhciBpLCBsZW47XHJcbiAgICB2YXIgbWVkaWFGaWxlcyA9IHZhc3RSZXNwb25zZS5tZWRpYUZpbGVzO1xyXG4gICAgZm9yIChpID0gMCwgbGVuID0gbWVkaWFGaWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBpZiAodmFzdFV0aWwuaXNWUEFJRChtZWRpYUZpbGVzW2ldKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG4iLCIvL1NtYWxsIHN1YnNldCBvZiBhc3luY1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxudmFyIGFzeW5jID0ge307XHJcblxyXG5hc3luYy5zZXRJbW1lZGlhdGUgPSBmdW5jdGlvbiAoZm4pIHtcclxuICBzZXRUaW1lb3V0KGZuLCAwKTtcclxufTtcclxuXHJcbmFzeW5jLml0ZXJhdG9yID0gZnVuY3Rpb24gKHRhc2tzKSB7XHJcbiAgdmFyIG1ha2VDYWxsYmFjayA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgdmFyIGZuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodGFza3MubGVuZ3RoKSB7XHJcbiAgICAgICAgdGFza3NbaW5kZXhdLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZuLm5leHQoKTtcclxuICAgIH07XHJcbiAgICBmbi5uZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gKGluZGV4IDwgdGFza3MubGVuZ3RoIC0gMSkgPyBtYWtlQ2FsbGJhY2soaW5kZXggKyAxKSA6IG51bGw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZuO1xyXG4gIH07XHJcbiAgcmV0dXJuIG1ha2VDYWxsYmFjaygwKTtcclxufTtcclxuXHJcblxyXG5hc3luYy53YXRlcmZhbGwgPSBmdW5jdGlvbiAodGFza3MsIGNhbGxiYWNrKSB7XHJcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7IH07XHJcbiAgaWYgKCF1dGlsaXRpZXMuaXNBcnJheSh0YXNrcykpIHtcclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IHRvIHdhdGVyZmFsbCBtdXN0IGJlIGFuIGFycmF5IG9mIGZ1bmN0aW9ucycpO1xyXG4gICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XHJcbiAgfVxyXG4gIGlmICghdGFza3MubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gY2FsbGJhY2soKTtcclxuICB9XHJcbiAgdmFyIHdyYXBJdGVyYXRvciA9IGZ1bmN0aW9uIChpdGVyYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XHJcbiAgICAgICAgdmFyIG5leHQgPSBpdGVyYXRvci5uZXh0KCk7XHJcbiAgICAgICAgaWYgKG5leHQpIHtcclxuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwSXRlcmF0b3IobmV4dCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGFyZ3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jLnNldEltbWVkaWF0ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpdGVyYXRvci5hcHBseShudWxsLCBhcmdzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9O1xyXG4gIHdyYXBJdGVyYXRvcihhc3luYy5pdGVyYXRvcih0YXNrcykpKCk7XHJcbn07XHJcblxyXG5hc3luYy53aGVuID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgY2FsbGJhY2spIHtcclxuICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiYXN5bmMud2hlbiBlcnJvcjogbWlzc2luZyBjYWxsYmFjayBhcmd1bWVudFwiKTtcclxuICB9XHJcblxyXG4gIHZhciBpc0FsbG93ZWQgPSB1dGlsaXRpZXMuaXNGdW5jdGlvbihjb25kaXRpb24pID8gY29uZGl0aW9uIDogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICEhY29uZGl0aW9uO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXJncyA9IHV0aWxpdGllcy5hcnJheUxpa2VPYmpUb0FycmF5KGFyZ3VtZW50cyk7XHJcbiAgICB2YXIgbmV4dCA9IGFyZ3MucG9wKCk7XHJcblxyXG4gICAgaWYgKGlzQWxsb3dlZC5hcHBseShudWxsLCBhcmdzKSkge1xyXG4gICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBhcmdzLnVuc2hpZnQobnVsbCk7XHJcbiAgICByZXR1cm4gbmV4dC5hcHBseShudWxsLCBhcmdzKTtcclxuICB9O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhc3luYztcclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxuXHJcbnZhciBkb20gPSB7fTtcclxuXHJcbmRvbS5pc1Zpc2libGUgPSBmdW5jdGlvbiBpc1Zpc2libGUoZWwpIHtcclxuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XHJcbiAgcmV0dXJuIHN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nO1xyXG59O1xyXG5cclxuZG9tLmlzSGlkZGVuID0gZnVuY3Rpb24gaXNIaWRkZW4oZWwpIHtcclxuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XHJcbiAgcmV0dXJuIHN0eWxlLmRpc3BsYXkgPT09ICdub25lJztcclxufTtcclxuXHJcbmRvbS5pc1Nob3duID0gZnVuY3Rpb24gaXNTaG93bihlbCkge1xyXG4gIHJldHVybiAhZG9tLmlzSGlkZGVuKGVsKTtcclxufTtcclxuXHJcbmRvbS5oaWRlID0gZnVuY3Rpb24gaGlkZShlbCkge1xyXG4gIGVsLl9fcHJldl9zdHlsZV9kaXNwbGF5XyA9IGVsLnN0eWxlLmRpc3BsYXk7XHJcbiAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufTtcclxuXHJcbmRvbS5zaG93ID0gZnVuY3Rpb24gc2hvdyhlbCkge1xyXG4gIGlmIChkb20uaXNIaWRkZW4oZWwpKSB7XHJcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX19wcmV2X3N0eWxlX2Rpc3BsYXlfO1xyXG4gIH1cclxuICBlbC5fX3ByZXZfc3R5bGVfZGlzcGxheV8gPSB1bmRlZmluZWQ7XHJcbn07XHJcblxyXG5kb20uaGFzQ2xhc3MgPSBmdW5jdGlvbiBoYXNDbGFzcyhlbCwgY3NzQ2xhc3MpIHtcclxuICB2YXIgY2xhc3NlcywgaSwgbGVuO1xyXG5cclxuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MpKSB7XHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoY3NzQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzZXMgPSB1dGlsaXRpZXMuaXNTdHJpbmcoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpKSA/IGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5zcGxpdCgvXFxzKy8pIDogW107XHJcbiAgICBjc3NDbGFzcyA9IChjc3NDbGFzcyB8fCAnJyk7XHJcblxyXG4gICAgZm9yIChpID0gMCwgbGVuID0gY2xhc3Nlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xyXG4gICAgICBpZiAoY2xhc3Nlc1tpXSA9PT0gY3NzQ2xhc3MpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5kb20uYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNzc0NsYXNzKSB7XHJcbiAgdmFyIGNsYXNzZXM7XHJcblxyXG4gIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcykpIHtcclxuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcclxuICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzZXMgPSB1dGlsaXRpZXMuaXNTdHJpbmcoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpKSA/IGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5zcGxpdCgvXFxzKy8pIDogW107XHJcbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGNzc0NsYXNzKSAmJiB1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcy5yZXBsYWNlKC9cXHMrLywgJycpKSkge1xyXG4gICAgICBjbGFzc2VzLnB1c2goY3NzQ2xhc3MpO1xyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3Nlcy5qb2luKCcgJykpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmRvbS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY3NzQ2xhc3MpIHtcclxuICB2YXIgY2xhc3NlcztcclxuXHJcbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzKSkge1xyXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xyXG4gICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3NlcyA9IHV0aWxpdGllcy5pc1N0cmluZyhlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpID8gZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KC9cXHMrLykgOiBbXTtcclxuICAgIHZhciBuZXdDbGFzc2VzID0gW107XHJcbiAgICB2YXIgaSwgbGVuO1xyXG4gICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhjc3NDbGFzcykgJiYgdXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MucmVwbGFjZSgvXFxzKy8sICcnKSkpIHtcclxuXHJcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGNsYXNzZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcclxuICAgICAgICBpZiAoY3NzQ2xhc3MgIT09IGNsYXNzZXNbaV0pIHtcclxuICAgICAgICAgIG5ld0NsYXNzZXMucHVzaChjbGFzc2VzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIG5ld0NsYXNzZXMuam9pbignICcpKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5kb20uYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZWwsIHR5cGUsIGhhbmRsZXIpIHtcclxuICBpZih1dGlsaXRpZXMuaXNBcnJheShlbCkpe1xyXG4gICAgdXRpbGl0aWVzLmZvckVhY2goZWwsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZSwgdHlwZSwgaGFuZGxlcik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KHR5cGUpKXtcclxuICAgIHV0aWxpdGllcy5mb3JFYWNoKHR5cGUsIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZWwsIHQsIGhhbmRsZXIpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgfSBlbHNlIGlmIChlbC5hdHRhY2hFdmVudCkge1xyXG4gICAgLy8gV0FSTklORyEhISB0aGlzIGlzIGEgdmVyeSBuYWl2ZSBpbXBsZW1lbnRhdGlvbiAhXHJcbiAgICAvLyB0aGUgZXZlbnQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgaGFuZGxlclxyXG4gICAgLy8gd291bGQgbm90IGJlIHRoZXJlIGZvciBJRThcclxuICAgIC8vIHdlIHNob3VsZCB1c2UgXCJ3aW5kb3cuZXZlbnRcIiBhbmQgdGhlbiBcImV2ZW50LnNyY0VsZW1lbnRcIlxyXG4gICAgLy8gaW5zdGVhZCBvZiBcImV2ZW50LnRhcmdldFwiXHJcbiAgICBlbC5hdHRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBoYW5kbGVyKTtcclxuICB9XHJcbn07XHJcblxyXG5kb20ucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsIHR5cGUsIGhhbmRsZXIpIHtcclxuICBpZih1dGlsaXRpZXMuaXNBcnJheShlbCkpe1xyXG4gICAgdXRpbGl0aWVzLmZvckVhY2goZWwsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSwgdHlwZSwgaGFuZGxlcik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KHR5cGUpKXtcclxuICAgIHV0aWxpdGllcy5mb3JFYWNoKHR5cGUsIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsIHQsIGhhbmRsZXIpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XHJcbiAgfSBlbHNlIGlmIChlbC5kZXRhY2hFdmVudCkge1xyXG4gICAgZWwuZGV0YWNoRXZlbnQoXCJvblwiICsgdHlwZSwgaGFuZGxlcik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVsW1wib25cIiArIHR5cGVdID0gbnVsbDtcclxuICB9XHJcbn07XHJcblxyXG5kb20uZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoZWwsIGV2ZW50KSB7XHJcbiAgaWYgKGVsLmRpc3BhdGNoRXZlbnQpIHtcclxuICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbC5maXJlRXZlbnQoXCJvblwiICsgZXZlbnQuZXZlbnRUeXBlLCBldmVudCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZG9tLmlzRGVzY2VuZGFudCA9IGZ1bmN0aW9uIGlzRGVzY2VuZGFudChwYXJlbnQsIGNoaWxkKSB7XHJcbiAgdmFyIG5vZGUgPSBjaGlsZC5wYXJlbnROb2RlO1xyXG4gIHdoaWxlIChub2RlICE9PSBudWxsKSB7XHJcbiAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuZG9tLmdldFRleHRDb250ZW50ID0gZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnQoZWwpe1xyXG4gIHJldHVybiBlbC50ZXh0Q29udGVudCB8fCBlbC50ZXh0O1xyXG59O1xyXG5cclxuZG9tLnByZXBlbmRDaGlsZCA9IGZ1bmN0aW9uIHByZXBlbmRDaGlsZChwYXJlbnQsIGNoaWxkKSB7XHJcbiAgaWYoY2hpbGQucGFyZW50Tm9kZSl7XHJcbiAgICBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICB9XHJcbiAgcmV0dXJuIHBhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIHBhcmVudC5maXJzdENoaWxkKTtcclxufTtcclxuXHJcbmRvbS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpe1xyXG4gIGlmKG5vZGUgJiYgbm9kZS5wYXJlbnROb2RlKXtcclxuICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxuICB9XHJcbn07XHJcblxyXG5kb20uaXNEb21FbGVtZW50ID0gZnVuY3Rpb24gaXNEb21FbGVtZW50KG8pIHtcclxuICByZXR1cm4gbyBpbnN0YW5jZW9mIEVsZW1lbnQ7XHJcbn07XHJcblxyXG5kb20uY2xpY2sgPSBmdW5jdGlvbihlbCwgaGFuZGxlcikge1xyXG4gIGRvbS5hZGRFdmVudExpc3RlbmVyKGVsLCAnY2xpY2snLCBoYW5kbGVyKTtcclxufTtcclxuXHJcbmRvbS5vbmNlID0gZnVuY3Rpb24oZWwsIHR5cGUsIGhhbmRsZXIpIHtcclxuICBmdW5jdGlvbiBoYW5kbGVyV3JhcCgpIHtcclxuICAgIGhhbmRsZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKGVsLCB0eXBlLCBoYW5kbGVyV3JhcCk7XHJcbiAgfVxyXG5cclxuICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcldyYXApO1xyXG59O1xyXG5cclxuLy9Ob3RlOiB0aGVyZSBpcyBubyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gaVBhZCBzbyB3ZSBuZWVkIGEgZmFsbGJhY2tcclxuZG9tLmdldERpbWVuc2lvbiA9IGZ1bmN0aW9uIGdldERpbWVuc2lvbihlbGVtZW50KSB7XHJcbiAgdmFyIHJlY3Q7XHJcblxyXG4gIC8vT24gSUU5IGFuZCBiZWxvdyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZG9lcyBub3Qgd29yayBjb25zaXN0ZW50bHlcclxuICBpZighdXRpbGl0aWVzLmlzT2xkSUUoKSAmJiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xyXG4gICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB3aWR0aDogcmVjdC53aWR0aCxcclxuICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcclxuICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHRcclxuICB9O1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkb207IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHVybFV0aWxzID0gcmVxdWlyZSgnLi91cmxVdGlscycpO1xyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XHJcblxyXG5mdW5jdGlvbiBIdHRwUmVxdWVzdEVycm9yKG1lc3NhZ2UpIHtcclxuICB0aGlzLm1lc3NhZ2UgPSAnSHR0cFJlcXVlc3QgRXJyb3I6ICcgKyAobWVzc2FnZSB8fCAnJyk7XHJcbn1cclxuSHR0cFJlcXVlc3RFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcclxuSHR0cFJlcXVlc3RFcnJvci5wcm90b3R5cGUubmFtZSA9IFwiSHR0cFJlcXVlc3QgRXJyb3JcIjtcclxuXHJcbmZ1bmN0aW9uIEh0dHBSZXF1ZXN0KGNyZWF0ZVhocikge1xyXG4gIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY3JlYXRlWGhyKSkge1xyXG4gICAgdGhyb3cgbmV3IEh0dHBSZXF1ZXN0RXJyb3IoJ01pc3NpbmcgWE1MSHR0cFJlcXVlc3QgZmFjdG9yeSBtZXRob2QnKTtcclxuICB9XHJcblxyXG4gIHRoaXMuY3JlYXRlWGhyID0gY3JlYXRlWGhyO1xyXG59XHJcblxyXG5IdHRwUmVxdWVzdC5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKG1ldGhvZCwgdXJsLCBjYWxsYmFjaywgb3B0aW9ucykge1xyXG4gIHNhbml0eUNoZWNrKHVybCwgY2FsbGJhY2ssIG9wdGlvbnMpO1xyXG4gIHZhciB0aW1lb3V0LCB0aW1lb3V0SWQ7XHJcbiAgdmFyIHhociA9IHRoaXMuY3JlYXRlWGhyKCk7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgdGltZW91dCA9IHV0aWxpdGllcy5pc051bWJlcihvcHRpb25zLnRpbWVvdXQpID8gb3B0aW9ucy50aW1lb3V0IDogMDtcclxuXHJcbiAgeGhyLm9wZW4obWV0aG9kLCB1cmxVdGlscy51cmxQYXJ0cyh1cmwpLmhyZWYsIHRydWUpO1xyXG5cclxuICBpZiAob3B0aW9ucy5oZWFkZXJzKSB7XHJcbiAgICBzZXRIZWFkZXJzKHhociwgb3B0aW9ucy5oZWFkZXJzKTtcclxuICB9XHJcblxyXG4gIGlmIChvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xyXG4gICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHN0YXR1c1RleHQsIHJlc3BvbnNlLCBzdGF0dXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgb25seSB3YXkgdG8gZG8gYSBzZWN1cmUgcmVxdWVzdCBvbiBJRTggYW5kIElFOSBpcyB3aXRoIHRoZSBYRG9tYWluUmVxdWVzdCBvYmplY3QuIFVuZm9ydHVuYXRlbHksIG1pY3Jvc29mdCBpc1xyXG4gICAgICogc28gbmljZSB0aGF0IGRlY2lkZWQgdGhhdCB0aGUgc3RhdHVzIHByb3BlcnR5IGFuZCB0aGUgJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgbWV0aG9kIHdoZXJlIG5vdCBuZWVkZWQgc28gd2UgaGF2ZSB0b1xyXG4gICAgICogZmFrZSB0aGVtLiBJZiB0aGUgcmVxdWVzdCBnZXRzIGRvbmUgd2l0aCBhbiBYRG9tYWluUmVxdWVzdCBpbnN0YW5jZSwgd2Ugd2lsbCBhc3N1bWUgdGhhdCB0aGVyZSBhcmUgbm8gaGVhZGVycyBhbmRcclxuICAgICAqIHRoZSBzdGF0dXMgd2lsbCBhbHdheXMgYmUgMjAwLiBJZiB5b3UgZG9uJ3QgbGlrZSBpdCwgRE8gTk9UIFVTRSBBTkNJRU5UIEJST1dTRVJTISEhXHJcbiAgICAgKlxyXG4gICAgICogRm9yIG1vciBpbmZvIGdvIHRvOiBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2NjMjg4MDYwKHY9dnMuODUpLmFzcHhcclxuICAgICAqL1xyXG4gICAgaWYgKCF4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKSB7XHJcbiAgICAgIHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF4aHIuc3RhdHVzKSB7XHJcbiAgICAgIHhoci5zdGF0dXMgPSAyMDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQodGltZW91dElkKSkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgICAgdGltZW91dElkID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dCB8fCAnJztcclxuXHJcbiAgICAvLyByZXNwb25zZVRleHQgaXMgdGhlIG9sZC1zY2hvb2wgd2F5IG9mIHJldHJpZXZpbmcgcmVzcG9uc2UgKHN1cHBvcnRlZCBieSBJRTggJiA5KVxyXG4gICAgLy8gcmVzcG9uc2UvcmVzcG9uc2VUeXBlIHByb3BlcnRpZXMgd2VyZSBpbnRyb2R1Y2VkIGluIFhIUiBMZXZlbDIgc3BlYyAoc3VwcG9ydGVkIGJ5IElFMTApXHJcbiAgICByZXNwb25zZSA9ICgncmVzcG9uc2UnIGluIHhocikgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0O1xyXG5cclxuICAgIC8vIG5vcm1hbGl6ZSBJRTkgYnVnIChodHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xNDUwKVxyXG4gICAgc3RhdHVzID0geGhyLnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHhoci5zdGF0dXM7XHJcblxyXG4gICAgY2FsbGJhY2soXHJcbiAgICAgIHN0YXR1cyxcclxuICAgICAgcmVzcG9uc2UsXHJcbiAgICAgIHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSxcclxuICAgICAgc3RhdHVzVGV4dCk7XHJcbiAgfTtcclxuXHJcbiAgeGhyLm9uZXJyb3IgPSByZXF1ZXN0RXJyb3I7XHJcbiAgeGhyLm9uYWJvcnQgPSByZXF1ZXN0RXJyb3I7XHJcblxyXG4gIHhoci5zZW5kKCk7XHJcblxyXG4gIGlmICh0aW1lb3V0ID4gMCkge1xyXG4gICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHhociAmJiB4aHIuYWJvcnQoKTtcclxuICAgIH0sIHRpbWVvdXQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2sodXJsLCBjYWxsYmFjaywgb3B0aW9ucykge1xyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcodXJsKSB8fCB1dGlsaXRpZXMuaXNFbXB0eVN0cmluZyh1cmwpKSB7XHJcbiAgICAgIHRocm93IG5ldyBIdHRwUmVxdWVzdEVycm9yKFwiSW52YWxpZCB1cmwgJ1wiICsgdXJsICsgXCInXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XHJcbiAgICAgIHRocm93IG5ldyBIdHRwUmVxdWVzdEVycm9yKFwiSW52YWxpZCBoYW5kbGVyICdcIiArIGNhbGxiYWNrICsgXCInIGZvciB0aGUgaHR0cCByZXF1ZXN0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKG9wdGlvbnMpICYmICF1dGlsaXRpZXMuaXNPYmplY3Qob3B0aW9ucykpIHtcclxuICAgICAgdGhyb3cgbmV3IEh0dHBSZXF1ZXN0RXJyb3IoXCJJbnZhbGlkIG9wdGlvbnMgbWFwICdcIiArIG9wdGlvbnMgKyBcIidcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRIZWFkZXJzKHhociwgaGVhZGVycykge1xyXG4gICAgdXRpbGl0aWVzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQodmFsdWUpKSB7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVxdWVzdEVycm9yKCkge1xyXG4gICAgY2FsbGJhY2soLTEsIG51bGwsIG51bGwsICcnKTtcclxuICB9XHJcbn07XHJcblxyXG5IdHRwUmVxdWVzdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHVybCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcclxuICB0aGlzLnJ1bignR0VUJywgdXJsLCBwcm9jZXNzUmVzcG9uc2UsIG9wdGlvbnMpO1xyXG5cclxuICBmdW5jdGlvbiBwcm9jZXNzUmVzcG9uc2Uoc3RhdHVzLCByZXNwb25zZSwgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCkge1xyXG4gICAgaWYgKGlzU3VjY2VzcyhzdGF0dXMpKSB7XHJcbiAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnNTdHJpbmcsIHN0YXR1c1RleHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FsbGJhY2sobmV3IEh0dHBSZXF1ZXN0RXJyb3Ioc3RhdHVzVGV4dCksIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnNTdHJpbmcsIHN0YXR1c1RleHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNTdWNjZXNzKHN0YXR1cykge1xyXG4gICAgcmV0dXJuIDIwMCA8PSBzdGF0dXMgJiYgc3RhdHVzIDwgMzAwO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVhocigpIHtcclxuICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgaWYgKCEoXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB4aHIpKSB7XHJcbiAgICAvLyBYRG9tYWluUmVxdWVzdCBmb3IgSUUuXHJcbiAgICB4aHIgPSBuZXcgWERvbWFpblJlcXVlc3QoKTtcclxuICB9XHJcbiAgcmV0dXJuIHhocjtcclxufVxyXG5cclxudmFyIGh0dHAgPSBuZXcgSHR0cFJlcXVlc3QoY3JlYXRlWGhyKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGh0dHA6IGh0dHAsXHJcbiAgSHR0cFJlcXVlc3Q6IEh0dHBSZXF1ZXN0LFxyXG4gIEh0dHBSZXF1ZXN0RXJyb3I6IEh0dHBSZXF1ZXN0RXJyb3IsXHJcbiAgY3JlYXRlWGhyOiBjcmVhdGVYaHJcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGRvbSA9IHJlcXVpcmUoJy4vZG9tJyk7XHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxuXHJcbnZhciBwbGF5ZXJVdGlscyA9IHt9O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY2FwdHVyZXMgdGhlIHBvcnRpb25zIG9mIHBsYXllciBzdGF0ZSByZWxldmFudCB0b1xyXG4gKiB2aWRlbyBwbGF5YmFjay4gVGhlIHJlc3VsdCBvZiB0aGlzIGZ1bmN0aW9uIGNhbiBiZSBwYXNzZWQgdG9cclxuICogcmVzdG9yZVBsYXllclNuYXBzaG90IHdpdGggYSBwbGF5ZXIgdG8gcmV0dXJuIHRoZSBwbGF5ZXIgdG8gdGhlIHN0YXRlIGl0XHJcbiAqIHdhcyBpbiB3aGVuIHRoaXMgZnVuY3Rpb24gd2FzIGludm9rZWQuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwbGF5ZXIgVGhlIHZpZGVvanMgcGxheWVyIG9iamVjdFxyXG4gKi9cclxucGxheWVyVXRpbHMuZ2V0UGxheWVyU25hcHNob3QgPSBmdW5jdGlvbiBnZXRQbGF5ZXJTbmFwc2hvdChwbGF5ZXIpIHtcclxuICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xyXG5cclxuICB2YXIgc25hcHNob3QgPSB7XHJcbiAgICBlbmRlZDogcGxheWVyLmVuZGVkKCksXHJcbiAgICBzcmM6IHBsYXllci5jdXJyZW50U3JjKCksXHJcbiAgICBjdXJyZW50VGltZTogcGxheWVyLmN1cnJlbnRUaW1lKCksXHJcbiAgICB0eXBlOiBwbGF5ZXIuY3VycmVudFR5cGUoKSxcclxuICAgIHBsYXlpbmc6ICFwbGF5ZXIucGF1c2VkKCksXHJcbiAgICBzdXBwcmVzc2VkVHJhY2tzOiBnZXRTdXBwcmVzc2VkVHJhY2tzKHBsYXllcilcclxuICB9O1xyXG5cclxuICBpZiAodGVjaCkge1xyXG4gICAgc25hcHNob3QubmF0aXZlUG9zdGVyID0gdGVjaC5wb3N0ZXI7XHJcbiAgICBzbmFwc2hvdC5zdHlsZSA9IHRlY2guZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xyXG4gIH1cclxuICByZXR1cm4gc25hcHNob3Q7XHJcblxyXG4gIC8qKioqIExvY2FsIEZ1bmN0aW9ucyAqKioqL1xyXG4gIGZ1bmN0aW9uIGdldFN1cHByZXNzZWRUcmFja3MocGxheWVyKSB7XHJcbiAgICB2YXIgdHJhY2tzID0gcGxheWVyLnJlbW90ZVRleHRUcmFja3MgPyBwbGF5ZXIucmVtb3RlVGV4dFRyYWNrcygpIDogW107XHJcblxyXG4gICAgaWYgKHRyYWNrcyAmJiB1dGlsaXRpZXMuaXNBcnJheSh0cmFja3MudHJhY2tzXykpIHtcclxuICAgICAgdHJhY2tzID0gdHJhY2tzLnRyYWNrc187XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNBcnJheSh0cmFja3MpKSB7XHJcbiAgICAgIHRyYWNrcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzdXBwcmVzc2VkVHJhY2tzID0gW107XHJcbiAgICB0cmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHtcclxuICAgICAgc3VwcHJlc3NlZFRyYWNrcy5wdXNoKHtcclxuICAgICAgICB0cmFjazogdHJhY2ssXHJcbiAgICAgICAgbW9kZTogdHJhY2subW9kZVxyXG4gICAgICB9KTtcclxuICAgICAgdHJhY2subW9kZSA9ICdkaXNhYmxlZCc7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc3VwcHJlc3NlZFRyYWNrcztcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQXR0ZW1wdHMgdG8gbW9kaWZ5IHRoZSBzcGVjaWZpZWQgcGxheWVyIHNvIHRoYXQgaXRzIHN0YXRlIGlzIGVxdWl2YWxlbnQgdG9cclxuICogdGhlIHN0YXRlIG9mIHRoZSBzbmFwc2hvdC5cclxuICogQHBhcmFtIHtvYmplY3R9IHNuYXBzaG90IC0gdGhlIHBsYXllciBzdGF0ZSB0byBhcHBseVxyXG4gKi9cclxucGxheWVyVXRpbHMucmVzdG9yZVBsYXllclNuYXBzaG90ID0gZnVuY3Rpb24gcmVzdG9yZVBsYXllclNuYXBzaG90KHBsYXllciwgc25hcHNob3QpIHtcclxuICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xyXG4gIHZhciBhdHRlbXB0cyA9IDIwOyAvLyB0aGUgbnVtYmVyIG9mIHJlbWFpbmluZyBhdHRlbXB0cyB0byByZXN0b3JlIHRoZSBzbmFwc2hvdFxyXG5cclxuICBpZiAoc25hcHNob3QubmF0aXZlUG9zdGVyKSB7XHJcbiAgICB0ZWNoLnBvc3RlciA9IHNuYXBzaG90Lm5hdGl2ZVBvc3RlcjtcclxuICB9XHJcblxyXG4gIGlmICgnc3R5bGUnIGluIHNuYXBzaG90KSB7XHJcbiAgICAvLyBvdmVyd3JpdGUgYWxsIGNzcyBzdHlsZSBwcm9wZXJ0aWVzIHRvIHJlc3RvcmUgc3RhdGUgcHJlY2lzZWx5XHJcbiAgICB0ZWNoLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzbmFwc2hvdC5zdHlsZSB8fCAnJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoaGFzU3JjQ2hhbmdlZChwbGF5ZXIsIHNuYXBzaG90KSkge1xyXG5cclxuICAgIC8vIG9uIGlvczcsIGZpZGRsaW5nIHdpdGggdGV4dFRyYWNrcyB0b28gZWFybHkgd2lsbCBjYXVzZSBzYWZhcmkgdG8gY3Jhc2hcclxuICAgIHBsYXllci5vbmUoJ2NvbnRlbnRsb2FkZWRtZXRhZGF0YScsIHJlc3RvcmVUcmFja3MpO1xyXG5cclxuICAgIHBsYXllci5vbmUoJ2NhbnBsYXknLCB0cnlUb1Jlc3VtZSk7XHJcbiAgICBlbnN1cmVDYW5wbGF5RXZ0R2V0c0ZpcmVkKCk7XHJcblxyXG4gICAgLy8gaWYgdGhlIHNyYyBjaGFuZ2VkIGZvciBhZCBwbGF5YmFjaywgcmVzZXQgaXRcclxuICAgIHBsYXllci5zcmMoe3NyYzogc25hcHNob3Quc3JjLCB0eXBlOiBzbmFwc2hvdC50eXBlfSk7XHJcblxyXG4gICAgLy8gc2FmYXJpIHJlcXVpcmVzIGEgY2FsbCB0byBgbG9hZGAgdG8gcGljayB1cCBhIGNoYW5nZWQgc291cmNlXHJcbiAgICBwbGF5ZXIubG9hZCgpO1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzdG9yZVRyYWNrcygpO1xyXG5cclxuICAgIGlmIChzbmFwc2hvdC5wbGF5aW5nKSB7XHJcbiAgICAgIHBsYXllci5wbGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXHJcblxyXG4gIC8qKlxyXG4gICAqIFNvbWV0aW1lcyBmaXJlZm94IGRvZXMgbm90IHRyaWdnZXIgdGhlICdjYW5wbGF5JyBldnQuXHJcbiAgICogVGhpcyBjb2RlIGVuc3VyZSB0aGF0IGl0IGFsd2F5cyBnZXRzIHRyaWdnZXJlZCB0cmlnZ2VyZWQuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZW5zdXJlQ2FucGxheUV2dEdldHNGaXJlZCgpIHtcclxuICAgIHZhciB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBwbGF5ZXIudHJpZ2dlcignY2FucGxheScpO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgcGxheWVyLm9uZSgnY2FucGxheScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgcGxheWVyIG5lZWRzIHRvIGJlIHJlc3RvcmVkIHRvIGl0cyBzdGF0ZVxyXG4gICAqIGJlZm9yZSBhZCBwbGF5YmFjayBiZWdhbi4gV2l0aCBhIGN1c3RvbSBhZCBkaXNwbGF5IG9yIGJ1cm5lZC1pblxyXG4gICAqIGFkcywgdGhlIGNvbnRlbnQgcGxheWVyIHN0YXRlIGhhc24ndCBiZWVuIG1vZGlmaWVkIGFuZCBzbyBub1xyXG4gICAqIHJlc3RvcmF0aW9uIGlzIHJlcXVpcmVkXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gaGFzU3JjQ2hhbmdlZChwbGF5ZXIsIHNuYXBzaG90KSB7XHJcbiAgICBpZiAocGxheWVyLnNyYygpKSB7XHJcbiAgICAgIHJldHVybiBwbGF5ZXIuc3JjKCkgIT09IHNuYXBzaG90LnNyYztcclxuICAgIH1cclxuICAgIC8vIHRoZSBwbGF5ZXIgd2FzIGNvbmZpZ3VyZWQgdGhyb3VnaCBzb3VyY2UgZWxlbWVudCBjaGlsZHJlblxyXG4gICAgcmV0dXJuIHBsYXllci5jdXJyZW50U3JjKCkgIT09IHNuYXBzaG90LnNyYztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc3RvcmVUcmFja3MoKSB7XHJcbiAgICB2YXIgc3VwcHJlc3NlZFRyYWNrcyA9IHNuYXBzaG90LnN1cHByZXNzZWRUcmFja3M7XHJcbiAgICBzdXBwcmVzc2VkVHJhY2tzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNrU25hcHNob3QpIHtcclxuICAgICAgdHJhY2tTbmFwc2hvdC50cmFjay5tb2RlID0gdHJhY2tTbmFwc2hvdC5tb2RlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIHZpZGVvIGVsZW1lbnQgaGFzIGxvYWRlZCBlbm91Z2ggb2YgdGhlIHNuYXBzaG90IHNvdXJjZVxyXG4gICAqIHRvIGJlIHJlYWR5IHRvIGFwcGx5IHRoZSByZXN0IG9mIHRoZSBzdGF0ZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHRyeVRvUmVzdW1lKCkge1xyXG5cclxuICAgIC8vIGlmIHNvbWUgcGVyaW9kIG9mIHRoZSB2aWRlbyBpcyBzZWVrYWJsZSwgcmVzdW1lIHBsYXliYWNrXHJcbiAgICAvLyBvdGhlcndpc2UgZGVsYXkgYSBiaXQgYW5kIHRoZW4gY2hlY2sgYWdhaW4gdW5sZXNzIHdlJ3JlIG91dCBvZiBhdHRlbXB0c1xyXG5cclxuICAgIGlmICghcGxheWVyVXRpbHMuaXNSZWFkeVRvUmVzdW1lKHBsYXllcikgJiYgYXR0ZW1wdHMtLSkge1xyXG4gICAgICBzZXRUaW1lb3V0KHRyeVRvUmVzdW1lLCA1MCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmKHBsYXllci5jdXJyZW50VGltZSgpICE9PSBzbmFwc2hvdC5jdXJyZW50VGltZSkge1xyXG4gICAgICAgICAgaWYgKHNuYXBzaG90LnBsYXlpbmcpIHsgLy8gaWYgbmVlZGVkIHJlc3RvcmUgcGxheWluZyBzdGF0dXMgYWZ0ZXIgc2VlayBjb21wbGV0ZXNcclxuICAgICAgICAgICAgcGxheWVyLm9uZSgnc2Vla2VkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgcGxheWVyLnBsYXkoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwbGF5ZXIuY3VycmVudFRpbWUoc25hcHNob3QuY3VycmVudFRpbWUpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHNuYXBzaG90LnBsYXlpbmcpIHtcclxuICAgICAgICAgIC8vIGlmIG5lZWRlZCBhbmQgbm8gc2VlayBoYXMgYmVlbiBwZXJmb3JtZWQsIHJlc3RvcmUgcGxheWluZyBzdGF0dXMgaW1tZWRpYXRlbHlcclxuICAgICAgICAgIHBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHZpZGVvanMubG9nLndhcm4oJ0ZhaWxlZCB0byByZXN1bWUgdGhlIGNvbnRlbnQgYWZ0ZXIgYW4gYWR2ZXJ0aXNlbWVudCcsIGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxucGxheWVyVXRpbHMuaXNSZWFkeVRvUmVzdW1lID0gZnVuY3Rpb24gKHBsYXllcikge1xyXG5cclxuICBpZiAocGxheWVyLnJlYWR5U3RhdGUoKSA+IDEpIHtcclxuICAgIC8vIHNvbWUgYnJvd3NlcnMgYW5kIG1lZGlhIGFyZW4ndCBcInNlZWthYmxlXCIuXHJcbiAgICAvLyByZWFkeVN0YXRlIGdyZWF0ZXIgdGhhbiAxIGFsbG93cyBmb3Igc2Vla2luZyB3aXRob3V0IGV4Y2VwdGlvbnNcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBsYXllci5zZWVrYWJsZSgpID09PSB1bmRlZmluZWQpIHtcclxuICAgIC8vIGlmIHRoZSBwbGF5ZXIgZG9lc24ndCBleHBvc2UgdGhlIHNlZWthYmxlIHRpbWUgcmFuZ2VzLCB0cnkgdG9cclxuICAgIC8vIHJlc3VtZSBwbGF5YmFjayBpbW1lZGlhdGVseVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAocGxheWVyLnNlZWthYmxlKCkubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gaWYgc29tZSBwZXJpb2Qgb2YgdGhlIHZpZGVvIGlzIHNlZWthYmxlLCByZXN1bWUgcGxheWJhY2tcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gcHJlcGFyZXMgdGhlIHBsYXllciB0byBkaXNwbGF5IGFkcy5cclxuICogQWRkaW5nIGNvbnZlbmllbmNlIGV2ZW50cyBsaWtlIHRoZSAndmFzdC5maXJzUGxheScgdGhhdCBnZXRzIGZpcmVkIHdoZW4gdGhlIHZpZGVvIGlzIGZpcnN0IHBsYXllZFxyXG4gKiBhbmQgYWRzIHRoZSBibGFja1Bvc3RlciB0byB0aGUgcGxheWVyIHRvIHByZXZlbnQgY29udGVudCBmcm9tIGJlaW5nIGRpc3BsYXllZCBiZWZvcmUgdGhlIHByZXJvbGwgYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSBwbGF5ZXJcclxuICovXHJcbnBsYXllclV0aWxzLnByZXBhcmVGb3JBZHMgPSBmdW5jdGlvbiAocGxheWVyKSB7XHJcbiAgdmFyIGJsYWNrUG9zdGVyID0gcGxheWVyLmFkZENoaWxkKCdibGFja1Bvc3RlcicpO1xyXG4gIHZhciBfZmlyc3RQbGF5ID0gdHJ1ZTtcclxuICB2YXIgdm9sdW1lU25hcHNob3Q7XHJcblxyXG5cclxuICBtb25rZXlQYXRjaFBsYXllckFwaSgpO1xyXG5cclxuICBwbGF5ZXIub24oJ3BsYXknLCB0cnlUb1RyaWdnZXJGaXJzdFBsYXkpO1xyXG4gIHBsYXllci5vbigndmFzdC5yZXNldCcsIHJlc2V0Rmlyc3RQbGF5KTsvL0V2ZXJ5IHRpbWUgd2UgY2hhbmdlIHRoZSBzb3VyY2VzIHdlIHJlc2V0IHRoZSBmaXJzdCBwbGF5LlxyXG4gIHBsYXllci5vbigndmFzdC5maXJzdFBsYXknLCByZXN0b3JlQ29udGVudFZvbHVtZSk7XHJcbiAgcGxheWVyLm9uKCdlcnJvcicsIGhpZGVCbGFja1Bvc3Rlcik7Ly9JZiB0aGVyZSBpcyBhbiBlcnJvciBpbiB0aGUgcGxheWVyIHdlIHJlbW92ZSB0aGUgYmxhY2twb3N0ZXIgdG8gc2hvdyB0aGUgZXJyIG1zZ1xyXG4gIHBsYXllci5vbigndmFzdC5hZFN0YXJ0JywgaGlkZUJsYWNrUG9zdGVyKTtcclxuICBwbGF5ZXIub24oJ3Zhc3QuYWRzQ2FuY2VsJywgaGlkZUJsYWNrUG9zdGVyKTtcclxuICBwbGF5ZXIub24oJ3Zhc3QuYWRFcnJvcicsIGhpZGVCbGFja1Bvc3Rlcik7XHJcbiAgcGxheWVyLm9uKCd2YXN0LmFkU3RhcnQnLCBhZGRTdHlsZXMpO1xyXG4gIHBsYXllci5vbigndmFzdC5hZEVuZCcsIHJlbW92ZVN0eWxlcyk7XHJcbiAgcGxheWVyLm9uKCd2YXN0LmFkc0NhbmNlbCcsIHJlbW92ZVN0eWxlcyk7XHJcblxyXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cclxuXHJcbiAgLyoqXHJcbiAgIFdoYXQgdGhpcyBmdW5jdGlvbiBkb2VzIGlzIHVnbHkgYW5kIGhvcnJpYmxlIGFuZCBJIHNob3VsZCB0aGluayB0d2ljZSBiZWZvcmUgY2FsbGluZyBteXNlbGYgYSBnb29kIGRldmVsb3Blci4gV2l0aCB0aGF0IHNhaWQsXHJcbiAgIGl0IGlzIHRoZSBiZXN0IHNvbHV0aW9uIEkgY291bGQgZmluZCB0byBtdXRlIHRoZSB2aWRlbyB1bnRpbCB0aGUgJ3BsYXknIGV2ZW50IGhhcHBlbnMgKG9uIG1vYmlsZSBkZXZpY2VzKSBhbmQgdGhlIHBsdWdpbiBjYW4gZGVjaWRlIHdoZXRoZXJcclxuICAgdG8gcGxheSB0aGUgYWQgb3Igbm90LlxyXG5cclxuICAgV2UgYWxzbyBuZWVkIHRoaXMgbW9ua2V5cGF0Y2ggdG8gYmUgYWJsZSB0byBwYXVzZSBhbmQgcmVzdW1lIGFuIGFkIHVzaW5nIHRoZSBwbGF5ZXIncyBBUElcclxuXHJcbiAgIElmIHlvdSBoYXZlIGEgYmV0dGVyIHNvbHV0aW9uIHBsZWFzZSBkbyB0ZWxsIG1lLlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIG1vbmtleVBhdGNoUGxheWVyQXBpKCkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTW9ua2V5IHBhdGNoIG5lZWRlZCB0byBoYW5kbGUgZmlyc3RQbGF5IGFuZCByZXN1bWUgb2YgcGxheWluZyBhZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2FsbE9yaWdQbGF5IG5lY2Vzc2FyeSBmbGFnIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCB3aGVuIHlvdSBhcmUgcmVzdG9yaW5nIGEgVkFTVCBhZC5cclxuICAgICAqIEByZXR1cm5zIHtwbGF5ZXJ9XHJcbiAgICAgKi9cclxuICAgIHZhciBvcmlnUGxheSA9IHBsYXllci5wbGF5O1xyXG4gICAgcGxheWVyLnBsYXkgPSBmdW5jdGlvbiAoY2FsbE9yaWdQbGF5KSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChpc0ZpcnN0UGxheSgpKSB7XHJcbiAgICAgICAgZmlyc3RQbGF5KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdW1lKGNhbGxPcmlnUGxheSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gICAgICBmdW5jdGlvbiBmaXJzdFBsYXkoKSB7XHJcbiAgICAgICAgaWYgKCF1dGlsaXRpZXMuaXNJUGhvbmUoKSkge1xyXG4gICAgICAgICAgdm9sdW1lU25hcHNob3QgPSBzYXZlVm9sdW1lU25hcHNob3QoKTtcclxuICAgICAgICAgIHBsYXllci5tdXRlZCh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9yaWdQbGF5LmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlc3VtZShjYWxsT3JpZ1BsYXkpIHtcclxuICAgICAgICBpZiAoaXNBZFBsYXlpbmcoKSAmJiAhY2FsbE9yaWdQbGF5KSB7XHJcbiAgICAgICAgICBwbGF5ZXIudmFzdC5hZFVuaXQucmVzdW1lQWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb3JpZ1BsYXkuYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmVlZGVkIG1vbmtleSBwYXRjaCB0byBoYW5kbGUgcGF1c2Ugb2YgcGxheWluZyBhZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2FsbE9yaWdQbGF5IG5lY2Vzc2FyeSBmbGFnIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCB3aGVuIHlvdSBhcmUgcGF1c2luZyBhIFZBU1QgYWQuXHJcbiAgICAgKiBAcmV0dXJucyB7cGxheWVyfVxyXG4gICAgICovXHJcbiAgICB2YXIgb3JpZ1BhdXNlID0gcGxheWVyLnBhdXNlO1xyXG4gICAgcGxheWVyLnBhdXNlID0gZnVuY3Rpb24gKGNhbGxPcmlnUGF1c2UpIHtcclxuICAgICAgaWYgKGlzQWRQbGF5aW5nKCkgJiYgIWNhbGxPcmlnUGF1c2UpIHtcclxuICAgICAgICBwbGF5ZXIudmFzdC5hZFVuaXQucGF1c2VBZCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9yaWdQYXVzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOZWVkZWQgbW9ua2V5IHBhdGNoIHRvIGhhbmRsZSBwYXVzZWQgc3RhdGUgb2YgdGhlIHBsYXllciB3aGVuIGFkcyBhcmUgcGxheWluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2FsbE9yaWdQbGF5IG5lY2Vzc2FyeSBmbGFnIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCB3aGVuIHlvdSBhcmUgcGF1c2luZyBhIFZBU1QgYWQuXHJcbiAgICAgKiBAcmV0dXJucyB7cGxheWVyfVxyXG4gICAgICovXHJcbiAgICB2YXIgb3JpZ1BhdXNlZCA9IHBsYXllci5wYXVzZWQ7XHJcbiAgICBwbGF5ZXIucGF1c2VkID0gZnVuY3Rpb24gKGNhbGxPcmlnUGF1c2VkKSB7XHJcbiAgICAgIGlmIChpc0FkUGxheWluZygpICYmICFjYWxsT3JpZ1BhdXNlZCkge1xyXG4gICAgICAgIHJldHVybiBwbGF5ZXIudmFzdC5hZFVuaXQuaXNQYXVzZWQoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gb3JpZ1BhdXNlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzQWRQbGF5aW5nKCkge1xyXG4gICAgcmV0dXJuIHBsYXllci52YXN0ICYmIHBsYXllci52YXN0LmFkVW5pdDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRyeVRvVHJpZ2dlckZpcnN0UGxheSgpIHtcclxuICAgIGlmIChpc0ZpcnN0UGxheSgpKSB7XHJcbiAgICAgIF9maXJzdFBsYXkgPSBmYWxzZTtcclxuICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuZmlyc3RQbGF5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldEZpcnN0UGxheSgpIHtcclxuICAgIF9maXJzdFBsYXkgPSB0cnVlO1xyXG4gICAgYmxhY2tQb3N0ZXIuc2hvdygpO1xyXG4gICAgcmVzdG9yZUNvbnRlbnRWb2x1bWUoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzRmlyc3RQbGF5KCkge1xyXG4gICAgcmV0dXJuIF9maXJzdFBsYXk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzYXZlVm9sdW1lU25hcHNob3QoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtdXRlZDogcGxheWVyLm11dGVkKCksXHJcbiAgICAgIHZvbHVtZTogcGxheWVyLnZvbHVtZSgpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzdG9yZUNvbnRlbnRWb2x1bWUoKSB7XHJcbiAgICBpZiAodm9sdW1lU25hcHNob3QpIHtcclxuICAgICAgcGxheWVyLmN1cnJlbnRUaW1lKDApO1xyXG4gICAgICByZXN0b3JlVm9sdW1lU25hcHNob3Qodm9sdW1lU25hcHNob3QpO1xyXG4gICAgICB2b2x1bWVTbmFwc2hvdCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXN0b3JlVm9sdW1lU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgIGlmICh1dGlsaXRpZXMuaXNPYmplY3Qoc25hcHNob3QpKSB7XHJcbiAgICAgIHBsYXllci52b2x1bWUoc25hcHNob3Qudm9sdW1lKTtcclxuICAgICAgcGxheWVyLm11dGVkKHNuYXBzaG90Lm11dGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpZGVCbGFja1Bvc3RlcigpIHtcclxuICAgIGlmICghZG9tLmhhc0NsYXNzKGJsYWNrUG9zdGVyLmVsKCksICd2anMtaGlkZGVuJykpIHtcclxuICAgICAgYmxhY2tQb3N0ZXIuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkU3R5bGVzKCkge1xyXG4gICAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCAndmpzLWFkLXBsYXlpbmcnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZVN0eWxlcygpIHtcclxuICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy1hZC1wbGF5aW5nJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgcG9zdGVyIGF0dHJpYnV0ZSBmcm9tIHRoZSB2aWRlbyBlbGVtZW50IHRlY2gsIGlmIHByZXNlbnQuIFdoZW5cclxuICogcmV1c2luZyBhIHZpZGVvIGVsZW1lbnQgZm9yIG11bHRpcGxlIHZpZGVvcywgdGhlIHBvc3RlciBpbWFnZSB3aWxsIGJyaWVmbHlcclxuICogcmVhcHBlYXIgd2hpbGUgdGhlIG5ldyBzb3VyY2UgbG9hZHMuIFJlbW92aW5nIHRoZSBhdHRyaWJ1dGUgYWhlYWQgb2YgdGltZVxyXG4gKiBwcmV2ZW50cyB0aGUgcG9zdGVyIGZyb20gc2hvd2luZyB1cCBiZXR3ZWVuIHZpZGVvcy5cclxuICogQHBhcmFtIHtvYmplY3R9IHBsYXllciBUaGUgdmlkZW9qcyBwbGF5ZXIgb2JqZWN0XHJcbiAqL1xyXG5wbGF5ZXJVdGlscy5yZW1vdmVOYXRpdmVQb3N0ZXIgPSBmdW5jdGlvbiAocGxheWVyKSB7XHJcbiAgdmFyIHRlY2ggPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcclxuICBpZiAodGVjaCkge1xyXG4gICAgdGVjaC5yZW1vdmVBdHRyaWJ1dGUoJ3Bvc3RlcicpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gbGlzdGVuIHRvIG1hbnkgZXZlbnRzIHVudGlsIG9uZSBvZiB0aGVtIGdldHMgZmlyZWQsIHRoZW4gd2VcclxuICogZXhlY3V0ZSB0aGUgaGFuZGxlciBhbmQgdW5zdWJzY3JpYmUgYWxsIHRoZSBldmVudCBsaXN0ZW5lcnM7XHJcbiAqXHJcbiAqIEBwYXJhbSBwbGF5ZXIgc3BlY2lmaWMgcGxheWVyIGZyb20gd2hlcmUgdG8gbGlzdGVuIGZvciB0aGUgZXZlbnRzXHJcbiAqIEBwYXJhbSBldmVudHMgYXJyYXkgb2YgZXZlbnRzXHJcbiAqIEBwYXJhbSBoYW5kbGVyIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgb25jZSBvbmUgb2YgdGhlIGV2ZW50cyBmaXJlc1xyXG4gKi9cclxucGxheWVyVXRpbHMub25jZSA9IGZ1bmN0aW9uIG9uY2UocGxheWVyLCBldmVudHMsIGhhbmRsZXIpIHtcclxuICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcclxuICAgIGhhbmRsZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuXHJcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgcGxheWVyLm9mZihldmVudCwgbGlzdGVuZXIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHBsYXllci5vbihldmVudCwgbGlzdGVuZXIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcGxheWVyVXRpbHM7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIElNUE9SVEFOVCBOT1RFOiBUaGlzIGZ1bmN0aW9uIGNvbWVzIGZyb20gYW5ndWxhckpzIGFuZCB3YXMgb3JpZ2luYWxseSBjYWxsZWQgdXJsUmVzb2x2ZVxyXG4gKiAgICAgICAgICAgICAgICAgeW91IGNhbiB0YWtlIGEgbG9vayBhdCB0aGUgb3JpZ2luYWwgY29kZSBoZXJlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi9tYXN0ZXIvc3JjL25nL3VybFV0aWxzLmpzXHJcbiAqXHJcbiAqIEltcGxlbWVudGF0aW9uIE5vdGVzIGZvciBub24tSUUgYnJvd3NlcnNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBBc3NpZ25pbmcgYSBVUkwgdG8gdGhlIGhyZWYgcHJvcGVydHkgb2YgYW4gYW5jaG9yIERPTSBub2RlLCBldmVuIG9uZSBhdHRhY2hlZCB0byB0aGUgRE9NLFxyXG4gKiByZXN1bHRzIGJvdGggaW4gdGhlIG5vcm1hbGl6aW5nIGFuZCBwYXJzaW5nIG9mIHRoZSBVUkwuICBOb3JtYWxpemluZyBtZWFucyB0aGF0IGEgcmVsYXRpdmVcclxuICogVVJMIHdpbGwgYmUgcmVzb2x2ZWQgaW50byBhbiBhYnNvbHV0ZSBVUkwgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGFwcGxpY2F0aW9uIGRvY3VtZW50LlxyXG4gKiBQYXJzaW5nIG1lYW5zIHRoYXQgdGhlIGFuY2hvciBub2RlJ3MgaG9zdCwgaG9zdG5hbWUsIHByb3RvY29sLCBwb3J0LCBwYXRobmFtZSBhbmQgcmVsYXRlZFxyXG4gKiBwcm9wZXJ0aWVzIGFyZSBhbGwgcG9wdWxhdGVkIHRvIHJlZmxlY3QgdGhlIG5vcm1hbGl6ZWQgVVJMLiAgVGhpcyBhcHByb2FjaCBoYXMgd2lkZVxyXG4gKiBjb21wYXRpYmlsaXR5IC0gU2FmYXJpIDErLCBNb3ppbGxhIDErLCBPcGVyYSA3KyxlIGV0Yy4gIFNlZVxyXG4gKiBodHRwOi8vd3d3LmFwdGFuYS5jb20vcmVmZXJlbmNlL2h0bWwvYXBpL0hUTUxBbmNob3JFbGVtZW50Lmh0bWxcclxuICpcclxuICogSW1wbGVtZW50YXRpb24gTm90ZXMgZm9yIElFXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBJRSA+PSA4IGFuZCA8PSAxMCBub3JtYWxpemVzIHRoZSBVUkwgd2hlbiBhc3NpZ25lZCB0byB0aGUgYW5jaG9yIG5vZGUgc2ltaWxhciB0byB0aGUgb3RoZXJcclxuICogYnJvd3NlcnMuICBIb3dldmVyLCB0aGUgcGFyc2VkIGNvbXBvbmVudHMgd2lsbCBub3QgYmUgc2V0IGlmIHRoZSBVUkwgYXNzaWduZWQgZGlkIG5vdCBzcGVjaWZ5XHJcbiAqIHRoZW0uICAoZS5nLiBpZiB5b3UgYXNzaWduIGEuaHJlZiA9IFwiZm9vXCIsIHRoZW4gYS5wcm90b2NvbCwgYS5ob3N0LCBldGMuIHdpbGwgYmUgZW1wdHkuKSAgV2VcclxuICogd29yayBhcm91bmQgdGhhdCBieSBwZXJmb3JtaW5nIHRoZSBwYXJzaW5nIGluIGEgMm5kIHN0ZXAgYnkgdGFraW5nIGEgcHJldmlvdXNseSBub3JtYWxpemVkXHJcbiAqIFVSTCAoZS5nLiBieSBhc3NpZ25pbmcgdG8gYS5ocmVmKSBhbmQgYXNzaWduaW5nIGl0IGEuaHJlZiBhZ2Fpbi4gIFRoaXMgY29ycmVjdGx5IHBvcHVsYXRlcyB0aGVcclxuICogcHJvcGVydGllcyBzdWNoIGFzIHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCwgZXRjLlxyXG4gKlxyXG4gKiBJRTcgZG9lcyBub3Qgbm9ybWFsaXplIHRoZSBVUkwgd2hlbiBhc3NpZ25lZCB0byBhbiBhbmNob3Igbm9kZS4gIChBcHBhcmVudGx5LCBpdCBkb2VzLCBpZiBvbmVcclxuICogdXNlcyB0aGUgaW5uZXIgSFRNTCBhcHByb2FjaCB0byBhc3NpZ24gdGhlIFVSTCBhcyBwYXJ0IG9mIGFuIEhUTUwgc25pcHBldCAtXHJcbiAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ3MjcyOSkgIEhvd2V2ZXIsIHNldHRpbmcgaW1nW3NyY10gZG9lcyBub3JtYWxpemUgdGhlIFVSTC5cclxuICogVW5mb3J0dW5hdGVseSwgc2V0dGluZyBpbWdbc3JjXSB0byBzb21ldGhpbmcgbGlrZSBcImphdmFzY3JpcHQ6Zm9vXCIgb24gSUUgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cclxuICogU2luY2UgdGhlIHByaW1hcnkgdXNhZ2UgZm9yIG5vcm1hbGl6aW5nIFVSTHMgaXMgdG8gc2FuaXRpemUgc3VjaCBVUkxzLCB3ZSBjYW4ndCB1c2UgdGhhdFxyXG4gKiBtZXRob2QgYW5kIElFIDwgOCBpcyB1bnN1cHBvcnRlZC5cclxuICpcclxuICogUmVmZXJlbmNlczpcclxuICogICBodHRwOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MQW5jaG9yRWxlbWVudFxyXG4gKiAgIGh0dHA6Ly93d3cuYXB0YW5hLmNvbS9yZWZlcmVuY2UvaHRtbC9hcGkvSFRNTEFuY2hvckVsZW1lbnQuaHRtbFxyXG4gKiAgIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xyXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvcHVsbC8yOTAyXHJcbiAqICAgaHR0cDovL2phbWVzLnBhZG9sc2V5LmNvbS9qYXZhc2NyaXB0L3BhcnNpbmctdXJscy13aXRoLXRoZS1kb20vXHJcbiAqXHJcbiAqIEBraW5kIGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWQuXHJcbiAqIEBkZXNjcmlwdGlvbiBOb3JtYWxpemVzIGFuZCBwYXJzZXMgYSBVUkwuXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9IFJldHVybnMgdGhlIG5vcm1hbGl6ZWQgVVJMIGFzIGEgZGljdGlvbmFyeS5cclxuICpcclxuICogICB8IG1lbWJlciBuYW1lICAgfCBEZXNjcmlwdGlvbiAgICB8XHJcbiAqICAgfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tfFxyXG4gKiAgIHwgaHJlZiAgICAgICAgICB8IEEgbm9ybWFsaXplZCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCBVUkwgaWYgaXQgd2FzIG5vdCBhbiBhYnNvbHV0ZSBVUkwgfFxyXG4gKiAgIHwgcHJvdG9jb2wgICAgICB8IFRoZSBwcm90b2NvbCBpbmNsdWRpbmcgdGhlIHRyYWlsaW5nIGNvbG9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgIHwgaG9zdCAgICAgICAgICB8IFRoZSBob3N0IGFuZCBwb3J0IChpZiB0aGUgcG9ydCBpcyBub24tZGVmYXVsdCkgb2YgdGhlIG5vcm1hbGl6ZWRVcmwgICAgfFxyXG4gKiAgIHwgc2VhcmNoICAgICAgICB8IFRoZSBzZWFyY2ggcGFyYW1zLCBtaW51cyB0aGUgcXVlc3Rpb24gbWFyayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgIHwgaGFzaCAgICAgICAgICB8IFRoZSBoYXNoIHN0cmluZywgbWludXMgdGhlIGhhc2ggc3ltYm9sXHJcbiAqICAgfCBob3N0bmFtZSAgICAgIHwgVGhlIGhvc3RuYW1lXHJcbiAqICAgfCBwb3J0ICAgICAgICAgIHwgVGhlIHBvcnQsIHdpdGhvdXQgXCI6XCJcclxuICogICB8IHBhdGhuYW1lICAgICAgfCBUaGUgcGF0aG5hbWUsIGJlZ2lubmluZyB3aXRoIFwiL1wiXHJcbiAqXHJcbiAqL1xyXG5cclxudmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbi8qKlxyXG4gKiBkb2N1bWVudE1vZGUgaXMgYW4gSUUtb25seSBwcm9wZXJ0eVxyXG4gKiBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvY2MxOTY5ODgodj12cy44NSkuYXNweFxyXG4gKi9cclxudmFyIG1zaWUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XHJcblxyXG5mdW5jdGlvbiB1cmxQYXJ0cyh1cmwpIHtcclxuICB2YXIgaHJlZiA9IHVybDtcclxuXHJcbiAgaWYgKG1zaWUpIHtcclxuICAgIC8vIE5vcm1hbGl6ZSBiZWZvcmUgcGFyc2UuICBSZWZlciBJbXBsZW1lbnRhdGlvbiBOb3RlcyBvbiB3aHkgdGhpcyBpc1xyXG4gICAgLy8gZG9uZSBpbiB0d28gc3RlcHMgb24gSUUuXHJcbiAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG4gICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XHJcbiAgfVxyXG5cclxuICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcclxuXHJcbiAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xyXG4gIHJldHVybiB7XHJcbiAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxyXG4gICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcclxuICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXHJcbiAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXHJcbiAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxyXG4gICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxyXG4gICAgcG9ydDogdXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcodXJsUGFyc2luZ05vZGUucG9ydCk/IHVybFBhcnNpbmdOb2RlLnBvcnQ6IDgwLFxyXG4gICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJylcclxuICAgICAgPyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxyXG4gICAgICA6ICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXHJcbiAgfTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYSBxdWVyeSBzdHJpbmcgKHNlYXJjaCBwYXJ0IG9mIGEgdXJsKSBhbmQgcmV0dXJucyBhIGRpY3Rpb25hcnkgd2l0aFxyXG4gKiB0aGUgZGlmZmVyZW50IGtleSB2YWx1ZSBwYWlyc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gcXMgcXVlcnlTdHJpbmdcclxuICovXHJcbmZ1bmN0aW9uIHF1ZXJ5U3RyaW5nVG9PYmoocXMsIGNvbmQpIHtcclxuICB2YXIgcGFpcnMsIHFzT2JqO1xyXG5cclxuICBjb25kID0gdXRpbGl0aWVzLmlzRnVuY3Rpb24oY29uZCk/IGNvbmQgOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIHFzID0gcXMudHJpbSgpLnJlcGxhY2UoL15cXD8vLCAnJyk7XHJcbiAgcGFpcnMgPSBxcy5zcGxpdCgnJicpO1xyXG4gIHFzT2JqID0ge307XHJcblxyXG4gIHV0aWxpdGllcy5mb3JFYWNoKHBhaXJzLCBmdW5jdGlvbiAocGFpcikge1xyXG4gICAgdmFyIGtleVZhbHVlLCBrZXksIHZhbHVlO1xyXG4gICAgaWYgKHBhaXIgIT09ICcnKSB7XHJcbiAgICAgIGtleVZhbHVlID0gcGFpci5zcGxpdCgnPScpO1xyXG4gICAgICBrZXkgPSBrZXlWYWx1ZVswXTtcclxuICAgICAgdmFsdWUgPSBrZXlWYWx1ZVsxXTtcclxuICAgICAgaWYoY29uZChrZXksIHZhbHVlKSl7XHJcbiAgICAgICAgcXNPYmpba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBxc09iajtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbiBvYmplY3QgYW5kIHNlcmlhbGl6ZXMgaXQgaW50byBhIHF1ZXJ5IHN0cmluZyB3aXRob3V0IHRoZSBsZWFkaW5nICc/J1xyXG4gKiBAcGFyYW0gb2JqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBvYmpUb1F1ZXJ5U3RyaW5nKG9iaikge1xyXG4gIHZhciBwYWlycyA9IFtdO1xyXG4gIHV0aWxpdGllcy5mb3JFYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgIHBhaXJzLnB1c2goa2V5ICsgJz0nICsgdmFsdWUpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBwYWlycy5qb2luKCcmJyk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHVybFBhcnRzOiB1cmxQYXJ0cyxcclxuICBxdWVyeVN0cmluZ1RvT2JqOiBxdWVyeVN0cmluZ1RvT2JqLFxyXG4gIG9ialRvUXVlcnlTdHJpbmc6IG9ialRvUXVlcnlTdHJpbmdcclxufTtcclxuIiwiLypqc2hpbnQgdW51c2VkOmZhbHNlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIE5PREVfVFlQRV9FTEVNRU5UID0gMTtcclxudmFyIFNOQUtFX0NBU0VfUkVHRVhQID0gL1tBLVpdL2c7XHJcbnZhciBFTUFJTF9SRUdFWFAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKyQvaTtcclxuLypqc2xpbnQgbWF4bGVuOiA1MDAgKi9cclxudmFyIElTTzgwODZfUkVHRVhQID0gL14oW1xcKy1dP1xcZHs0fSg/IVxcZHsyfVxcYikpKCgtPykoKDBbMS05XXwxWzAtMl0pKFxcMyhbMTJdXFxkfDBbMS05XXwzWzAxXSkpP3xXKFswLTRdXFxkfDVbMC0yXSkoLT9bMS03XSk/fCgwMFsxLTldfDBbMS05XVxcZHxbMTJdXFxkezJ9fDMoWzAtNV1cXGR8NlsxLTZdKSkpKFtUXFxzXSgoKFswMV1cXGR8MlswLTNdKSgoOj8pWzAtNV1cXGQpP3wyNFxcOj8wMCkoW1xcLixdXFxkKyg/ITopKT8pPyhcXDE3WzAtNV1cXGQoW1xcLixdXFxkKyk/KT8oW3paXXwoW1xcKy1dKShbMDFdXFxkfDJbMC0zXSk6PyhbMC01XVxcZCk/KT8pPyk/JC87XHJcblxyXG5cclxuZnVuY3Rpb24gbm9vcCgpeyB9XHJcblxyXG5mdW5jdGlvbiBpc051bGwobykge1xyXG4gIHJldHVybiBvID09PSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RlZmluZWQobyl7XHJcbiAgcmV0dXJuIG8gIT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNVbmRlZmluZWQobyl7XHJcbiAgcmV0dXJuIG8gPT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHN0cil7XHJcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTnVtYmVyKG51bSl7XHJcbiAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcclxuICByZXR1cm4gdXRpbGl0aWVzLmlzT2JqZWN0KG9iaikgJiYgb2JqLndpbmRvdyA9PT0gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FycmF5KGFycmF5KXtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCBhcnJheSApID09PSAnW29iamVjdCBBcnJheV0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FycmF5TGlrZShvYmopIHtcclxuICBpZiAob2JqID09PSBudWxsIHx8IHV0aWxpdGllcy5pc1dpbmRvdyhvYmopIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKG9iaikgfHwgdXRpbGl0aWVzLmlzVW5kZWZpbmVkKG9iaikpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHZhciBsZW5ndGggPSBvYmoubGVuZ3RoO1xyXG5cclxuICBpZiAob2JqLm5vZGVUeXBlID09PSBOT0RFX1RZUEVfRUxFTUVOVCAmJiBsZW5ndGgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHV0aWxpdGllcy5pc1N0cmluZyhvYmopIHx8IHV0aWxpdGllcy5pc0FycmF5KG9iaikgfHwgbGVuZ3RoID09PSAwIHx8XHJcbiAgICB0eXBlb2YgbGVuZ3RoID09PSAnbnVtYmVyJyAmJiBsZW5ndGggPiAwICYmIChsZW5ndGggLSAxKSBpbiBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cil7XHJcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0VtcHR5U3RyaW5nKHN0cikge1xyXG4gIHJldHVybiB1dGlsaXRpZXMuaXNTdHJpbmcoc3RyKSAmJiBzdHIubGVuZ3RoID09PSAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc05vdEVtcHR5U3RyaW5nKHN0cikge1xyXG4gIHJldHVybiB1dGlsaXRpZXMuaXNTdHJpbmcoc3RyKSAmJiBzdHIubGVuZ3RoICE9PSAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcnJheUxpa2VPYmpUb0FycmF5KGFyZ3MpIHtcclxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xyXG4gIHZhciBrZXksIGxlbmd0aDtcclxuICBpZiAob2JqKSB7XHJcbiAgICBpZiAoaXNGdW5jdGlvbihvYmopKSB7XHJcbiAgICAgIGZvciAoa2V5IGluIG9iaikge1xyXG4gICAgICAgIC8vIE5lZWQgdG8gY2hlY2sgaWYgaGFzT3duUHJvcGVydHkgZXhpc3RzLFxyXG4gICAgICAgIC8vIGFzIG9uIElFOCB0aGUgcmVzdWx0IG9mIHF1ZXJ5U2VsZWN0b3JBbGwgaXMgYW4gb2JqZWN0IHdpdGhvdXQgYSBoYXNPd25Qcm9wZXJ0eSBmdW5jdGlvblxyXG4gICAgICAgIGlmIChrZXkgIT09ICdwcm90b3R5cGUnICYmIGtleSAhPT0gJ2xlbmd0aCcgJiYga2V5ICE9PSAnbmFtZScgJiYgKCFvYmouaGFzT3duUHJvcGVydHkgfHwgb2JqLmhhc093blByb3BlcnR5KGtleSkpKSB7XHJcbiAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXldLCBrZXksIG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob2JqKSkge1xyXG4gICAgICB2YXIgaXNQcmltaXRpdmUgPSB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JztcclxuICAgICAgZm9yIChrZXkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBrZXkgPCBsZW5ndGg7IGtleSsrKSB7XHJcbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlIHx8IGtleSBpbiBvYmopIHtcclxuICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleV0sIGtleSwgb2JqKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAob2JqLmZvckVhY2ggJiYgb2JqLmZvckVhY2ggIT09IGZvckVhY2gpIHtcclxuICAgICAgb2JqLmZvckVhY2goaXRlcmF0b3IsIGNvbnRleHQsIG9iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGtleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleV0sIGtleSwgb2JqKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gc25ha2VfY2FzZShuYW1lLCBzZXBhcmF0b3IpIHtcclxuICBzZXBhcmF0b3IgPSBzZXBhcmF0b3IgfHwgJ18nO1xyXG4gIHJldHVybiBuYW1lLnJlcGxhY2UoU05BS0VfQ0FTRV9SRUdFWFAsIGZ1bmN0aW9uKGxldHRlciwgcG9zKSB7XHJcbiAgICByZXR1cm4gKHBvcyA/IHNlcGFyYXRvciA6ICcnKSArIGxldHRlci50b0xvd2VyQ2FzZSgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkRW1haWwoZW1haWwpe1xyXG4gIGlmKCF1dGlsaXRpZXMuaXNTdHJpbmcoZW1haWwpKXtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBFTUFJTF9SRUdFWFAudGVzdChlbWFpbC50cmltKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHRlbmQgKG9iaikge1xyXG4gIHZhciBhcmcsIGksIGs7XHJcbiAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgYXJnID0gYXJndW1lbnRzW2ldO1xyXG4gICAgZm9yIChrIGluIGFyZykge1xyXG4gICAgICBpZiAoYXJnLmhhc093blByb3BlcnR5KGspKSB7XHJcbiAgICAgICAgaWYoaXNPYmplY3Qob2JqW2tdKSAmJiAhaXNOdWxsKG9ialtrXSkgJiYgaXNPYmplY3QoYXJnW2tdKSl7XHJcbiAgICAgICAgICBvYmpba10gPSBleHRlbmQoe30sIG9ialtrXSwgYXJnW2tdKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICBvYmpba10gPSBhcmdba107XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhcGl0YWxpemUocyl7XHJcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWNhcGl0YWxpemUocykge1xyXG4gIHJldHVybiBzLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcy5zbGljZSgxKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIHdvcmtzIHRoZSBzYW1lIHdheSBhcnJheS5wcm90b3R5cGUubWFwIHdvcmtzIGJ1dCBpZiB0aGUgdHJhbnNmb3JtZXIgcmV0dXJucyB1bmRlZmluZSwgdGhlblxyXG4gKiBpdCB3b24ndCBiZSBhZGRlZCB0byB0aGUgdHJhbnNmb3JtZWQgQXJyYXkuXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmFuc2Zvcm1BcnJheShhcnJheSwgdHJhbnNmb3JtZXIpIHtcclxuICB2YXIgdHJhbnNmb3JtZWRBcnJheSA9IFtdO1xyXG5cclxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KXtcclxuICAgIHZhciB0cmFuc2Zvcm1lZEl0ZW0gPSB0cmFuc2Zvcm1lcihpdGVtLCBpbmRleCk7XHJcbiAgICBpZih1dGlsaXRpZXMuaXNEZWZpbmVkKHRyYW5zZm9ybWVkSXRlbSkpIHtcclxuICAgICAgdHJhbnNmb3JtZWRBcnJheS5wdXNoKHRyYW5zZm9ybWVkSXRlbSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB0cmFuc2Zvcm1lZEFycmF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0ZpeGVkRGlnaXRzKG51bSwgZGlnaXRzKSB7XHJcbiAgdmFyIGZvcm1hdHRlZE51bSA9IG51bSArICcnO1xyXG4gIGRpZ2l0cyA9IHV0aWxpdGllcy5pc051bWJlcihkaWdpdHMpID8gZGlnaXRzIDogMDtcclxuICBudW0gPSB1dGlsaXRpZXMuaXNOdW1iZXIobnVtKSA/IG51bSA6IHBhcnNlSW50KG51bSwgMTApO1xyXG4gIGlmKHV0aWxpdGllcy5pc051bWJlcihudW0pICYmICFpc05hTihudW0pKXtcclxuICAgIGZvcm1hdHRlZE51bSA9IG51bSArICcnO1xyXG4gICAgd2hpbGUoZm9ybWF0dGVkTnVtLmxlbmd0aCA8IGRpZ2l0cykge1xyXG4gICAgICBmb3JtYXR0ZWROdW0gPSAnMCcgKyBmb3JtYXR0ZWROdW07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZm9ybWF0dGVkTnVtO1xyXG4gIH1cclxuICByZXR1cm4gTmFOICsgJyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRocm90dGxlKGNhbGxiYWNrLCBkZWxheSkge1xyXG4gIHZhciBwcmV2aW91c0NhbGwgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIChkZWxheSArIDEpO1xyXG4gIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgIHZhciB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBpZiAoKHRpbWUgLSBwcmV2aW91c0NhbGwpID49IGRlbGF5KSB7XHJcbiAgICAgIHByZXZpb3VzQ2FsbCA9IHRpbWU7XHJcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVib3VuY2UgKGNhbGxiYWNrLCB3YWl0KSB7XHJcbiAgdmFyIHRpbWVvdXRJZDtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpe1xyXG4gICAgaWYodGltZW91dElkKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgfVxyXG4gICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICB0aW1lb3V0SWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9LCB3YWl0KTtcclxuICB9O1xyXG59XHJcblxyXG4vLyBhIGZ1bmN0aW9uIGRlc2lnbmVkIHRvIGJsb3cgdXAgdGhlIHN0YWNrIGluIGEgbmFpdmUgd2F5XHJcbi8vIGJ1dCBpdCBpcyBvayBmb3IgdmlkZW9KcyBjaGlsZHJlbiBjb21wb25lbnRzXHJcbmZ1bmN0aW9uIHRyZWVTZWFyY2gocm9vdCwgZ2V0Q2hpbGRyZW4sIGZvdW5kKXtcclxuICB2YXIgY2hpbGRyZW4gPSBnZXRDaGlsZHJlbihyb290KTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcclxuICAgIGlmIChmb3VuZChjaGlsZHJlbltpXSkpIHtcclxuICAgICAgcmV0dXJuIGNoaWxkcmVuW2ldO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHZhciBlbCA9IHRyZWVTZWFyY2goY2hpbGRyZW5baV0sIGdldENoaWxkcmVuLCBmb3VuZCk7XHJcbiAgICAgIGlmIChlbCl7XHJcbiAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlY2hvRm4odmFsKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB2YWw7XHJcbiAgfTtcclxufVxyXG5cclxuLy9Ob3RlOiBTdXBwb3J0ZWQgZm9ybWF0cyBjb21lIGZyb20gaHR0cDovL3d3dy53My5vcmcvVFIvTk9URS1kYXRldGltZVxyXG4vLyBhbmQgdGhlIGlzbzg2MDEgcmVnZXggY29tZXMgZnJvbSBodHRwOi8vd3d3LnBlbGFnb2Rlc2lnbi5jb20vYmxvZy8yMDA5LzA1LzIwL2lzby04NjAxLWRhdGUtdmFsaWRhdGlvbi10aGF0LWRvZXNudC1zdWNrL1xyXG5mdW5jdGlvbiBpc0lTTzg2MDEodmFsdWUpIHtcclxuICBpZih1dGlsaXRpZXMuaXNOdW1iZXIodmFsdWUpKXtcclxuICAgIHZhbHVlID0gdmFsdWUgKyAnJzsgIC8vd2UgbWFrZSBzdXJlIHRoYXQgd2UgYXJlIHdvcmtpbmcgd2l0aCBzdHJpbmdzXHJcbiAgfVxyXG5cclxuICBpZighdXRpbGl0aWVzLmlzU3RyaW5nKHZhbHVlKSl7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gSVNPODA4Nl9SRUdFWFAudGVzdCh2YWx1ZS50cmltKCkpO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIHRoZSBCcm93c2VyIGlzIElFOSBhbmQgYmVsb3dcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc09sZElFKCkge1xyXG4gIHZhciB2ZXJzaW9uID0gdXRpbGl0aWVzLmdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uKG5hdmlnYXRvcik7XHJcbiAgaWYgKHZlcnNpb24gPT09IC0xKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdmVyc2lvbiA8IDEwO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgdmVyc2lvbiBvZiBJbnRlcm5ldCBFeHBsb3JlciBvciBhIC0xIChpbmRpY2F0aW5nIHRoZSB1c2Ugb2YgYW5vdGhlciBicm93c2VyKS5cclxuICogU291cmNlOiBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM3NTA5KHY9dnMuODUpLmFzcHhcclxuICogQHJldHVybnMge251bWJlcn0gdGhlIHZlcnNpb24gb2YgSW50ZXJuZXQgRXhwbG9yZXIgb3IgYSAtMSAoaW5kaWNhdGluZyB0aGUgdXNlIG9mIGFub3RoZXIgYnJvd3NlcikuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRJbnRlcm5ldEV4cGxvcmVyVmVyc2lvbihuYXZpZ2F0b3IpIHtcclxuICB2YXIgcnYgPSAtMTtcclxuXHJcbiAgaWYgKG5hdmlnYXRvci5hcHBOYW1lID09ICdNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXInKSB7XHJcbiAgICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIk1TSUUgKFswLTldezEsfVtcXC4wLTldezAsfSlcIik7XHJcbiAgICB2YXIgcmVzID0gcmUuZXhlYyh1YSk7XHJcbiAgICBpZiAocmVzICE9PSBudWxsKSB7XHJcbiAgICAgIHJ2ID0gcGFyc2VGbG9hdChyZXNbMV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJ2O1xyXG59XHJcblxyXG4vKioqIE1vYmlsZSBVdGlsaXR5IGZ1bmN0aW9ucyAqKiovXHJcbmZ1bmN0aW9uIGlzSURldmljZSgpIHtcclxuICByZXR1cm4gL2lQKGhvbmV8YWQpLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc01vYmlsZSgpIHtcclxuICByZXR1cm4gL2lQKGhvbmV8YWR8b2QpfEFuZHJvaWR8V2luZG93cyBQaG9uZS8udGVzdCh1dGlsaXRpZXMuX1VBKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNJUGhvbmUoKSB7XHJcbiAgcmV0dXJuIC9pUChob25lfG9kKS8udGVzdCh1dGlsaXRpZXMuX1VBKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNBbmRyb2lkKCkge1xyXG4gIHJldHVybiAvQW5kcm9pZC8udGVzdCh1dGlsaXRpZXMuX1VBKTtcclxufVxyXG5cclxudmFyIHV0aWxpdGllcyA9IHtcclxuICBfVUE6IG5hdmlnYXRvci51c2VyQWdlbnQsXHJcbiAgbm9vcDogbm9vcCxcclxuICBpc051bGw6IGlzTnVsbCxcclxuICBpc0RlZmluZWQ6IGlzRGVmaW5lZCxcclxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXHJcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxyXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXHJcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxyXG4gIGlzV2luZG93OiBpc1dpbmRvdyxcclxuICBpc0FycmF5OiBpc0FycmF5LFxyXG4gIGlzQXJyYXlMaWtlOiBpc0FycmF5TGlrZSxcclxuICBpc1N0cmluZzogaXNTdHJpbmcsXHJcbiAgaXNFbXB0eVN0cmluZzogaXNFbXB0eVN0cmluZyxcclxuICBpc05vdEVtcHR5U3RyaW5nOiBpc05vdEVtcHR5U3RyaW5nLFxyXG4gIGFycmF5TGlrZU9ialRvQXJyYXk6IGFycmF5TGlrZU9ialRvQXJyYXksXHJcbiAgZm9yRWFjaDogZm9yRWFjaCxcclxuICBzbmFrZV9jYXNlOiBzbmFrZV9jYXNlLFxyXG4gIGlzVmFsaWRFbWFpbDogaXNWYWxpZEVtYWlsLFxyXG4gIGV4dGVuZDogZXh0ZW5kLFxyXG4gIGNhcGl0YWxpemU6IGNhcGl0YWxpemUsXHJcbiAgZGVjYXBpdGFsaXplOiBkZWNhcGl0YWxpemUsXHJcbiAgdHJhbnNmb3JtQXJyYXk6IHRyYW5zZm9ybUFycmF5LFxyXG4gIHRvRml4ZWREaWdpdHM6IHRvRml4ZWREaWdpdHMsXHJcbiAgdGhyb3R0bGU6IHRocm90dGxlLFxyXG4gIGRlYm91bmNlOiBkZWJvdW5jZSxcclxuICB0cmVlU2VhcmNoOiB0cmVlU2VhcmNoLFxyXG4gIGVjaG9GbjogZWNob0ZuLFxyXG4gIGlzSVNPODYwMTogaXNJU084NjAxLFxyXG4gIGlzT2xkSUU6IGlzT2xkSUUsXHJcbiAgZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb246IGdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uLFxyXG4gIGlzSURldmljZTogaXNJRGV2aWNlLFxyXG4gIGlzTW9iaWxlOiBpc01vYmlsZSxcclxuICBpc0lQaG9uZTogaXNJUGhvbmUsXHJcbiAgaXNBbmRyb2lkOiBpc0FuZHJvaWRcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdXRpbGl0aWVzOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxuXHJcbnZhciB4bWwgPSB7fTtcclxuXHJcbnhtbC5zdHJUb1hNTERvYyA9IGZ1bmN0aW9uIHN0clRvWE1MRG9jKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2Upe1xyXG4gIC8vSUUgOFxyXG4gIGlmKHR5cGVvZiB3aW5kb3cuRE9NUGFyc2VyID09PSAndW5kZWZpbmVkJyl7XHJcbiAgICB2YXIgeG1sRG9jdW1lbnQgPSBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTERPTScpO1xyXG4gICAgeG1sRG9jdW1lbnQuYXN5bmMgPSBmYWxzZTtcclxuICAgIHhtbERvY3VtZW50LmxvYWRYTUwoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSk7XHJcbiAgICByZXR1cm4geG1sRG9jdW1lbnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGFyc2VTdHJpbmcoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSk7XHJcblxyXG4gIGZ1bmN0aW9uIHBhcnNlU3RyaW5nKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2Upe1xyXG4gICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgIHZhciBwYXJzZWREb2N1bWVudDtcclxuXHJcbiAgICAvL05vdGU6IFRoaXMgdHJ5IGNhdGNoIGlzIHRvIGRlYWwgd2l0aCB0aGUgZmFjdCB0aGF0IG9uIElFIHBhcnNlci5wYXJzZUZyb21TdHJpbmcgZG9lcyB0aHJvdyBhbiBlcnJvciBidXQgdGhlIHJlc3Qgb2YgdGhlIGJyb3dzZXJzIGRvbid0LlxyXG4gICAgdHJ5IHtcclxuICAgICAgcGFyc2VkRG9jdW1lbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UsIFwiYXBwbGljYXRpb24veG1sXCIpO1xyXG5cclxuICAgICAgaWYoaXNQYXJzZUVycm9yKHBhcnNlZERvY3VtZW50KSB8fCB1dGlsaXRpZXMuaXNFbXB0eVN0cmluZyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlKSl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwieG1sLnN0clRvWE1MRE9DOiBFcnJvciBwYXJzaW5nIHRoZSBzdHJpbmc6ICdcIiArIHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UgKyBcIidcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhcnNlZERvY3VtZW50O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNQYXJzZUVycm9yKHBhcnNlZERvY3VtZW50KSB7XHJcbiAgICB0cnkgeyAvLyBwYXJzZXIgYW5kIHBhcnNlcmVycm9yTlMgY291bGQgYmUgY2FjaGVkIG9uIHN0YXJ0dXAgZm9yIGVmZmljaWVuY3lcclxuICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKSxcclxuICAgICAgICBlcnJvbmVvdXNQYXJzZSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoJ0lOVkFMSUQnLCAndGV4dC94bWwnKSxcclxuICAgICAgICBwYXJzZXJlcnJvck5TID0gZXJyb25lb3VzUGFyc2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKVswXS5uYW1lc3BhY2VVUkk7XHJcblxyXG4gICAgICBpZiAocGFyc2VyZXJyb3JOUyA9PT0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnKSB7XHJcbiAgICAgICAgLy8gSW4gUGhhbnRvbUpTIHRoZSBwYXJzZWVycm9yIGVsZW1lbnQgZG9lc24ndCBzZWVtIHRvIGhhdmUgYSBzcGVjaWFsIG5hbWVzcGFjZSwgc28gd2UgYXJlIGp1c3QgZ3Vlc3NpbmcgaGVyZSA6KFxyXG4gICAgICAgIHJldHVybiBwYXJzZWREb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aCA+IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwYXJzZWREb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZU5TKHBhcnNlcmVycm9yTlMsICdwYXJzZXJlcnJvcicpLmxlbmd0aCA+IDA7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vTm90ZSBvbiBJRSBwYXJzZVN0cmluZyB0aHJvd3MgYW4gZXJyb3IgYnkgaXRzZWxmIGFuZCBpdCB3aWxsIG5ldmVyIHJlYWNoIHRoaXMgY29kZS4gQmVjYXVzZSBpdCB3aWxsIGhhdmUgZmFpbGVkIGJlZm9yZVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbnhtbC5wYXJzZVRleHQgPSBmdW5jdGlvbiBwYXJzZVRleHQgKHNWYWx1ZSkge1xyXG4gIGlmICgvXlxccyokLy50ZXN0KHNWYWx1ZSkpIHsgcmV0dXJuIG51bGw7IH1cclxuICBpZiAoL14oPzp0cnVlfGZhbHNlKSQvaS50ZXN0KHNWYWx1ZSkpIHsgcmV0dXJuIHNWYWx1ZS50b0xvd2VyQ2FzZSgpID09PSBcInRydWVcIjsgfVxyXG4gIGlmIChpc0Zpbml0ZShzVmFsdWUpKSB7IHJldHVybiBwYXJzZUZsb2F0KHNWYWx1ZSk7IH1cclxuICBpZiAodXRpbGl0aWVzLmlzSVNPODYwMShzVmFsdWUpKSB7IHJldHVybiBuZXcgRGF0ZShzVmFsdWUpOyB9XHJcbiAgcmV0dXJuIHNWYWx1ZS50cmltKCk7XHJcbn07XHJcblxyXG54bWwuSlhPTlRyZWUgPSBmdW5jdGlvbiBKWE9OVHJlZSAob1hNTFBhcmVudCkge1xyXG4gIHZhciBwYXJzZVRleHQgPSB4bWwucGFyc2VUZXh0O1xyXG5cclxuICAvL1RoZSBkb2N1bWVudCBvYmplY3QgaXMgYW4gZXNwZWNpYWwgb2JqZWN0IHRoYXQgaXQgbWF5IG1pc3Mgc29tZSBmdW5jdGlvbnMgb3IgYXR0cnMgZGVwZW5kaW5nIG9uIHRoZSBicm93c2VyLlxyXG4gIC8vVG8gcHJldmVudCB0aGlzIHByb2JsZW0gd2l0aCBjcmVhdGUgdGhlIEpYT05UcmVlIHVzaW5nIHRoZSByb290IGNoaWxkTm9kZSB3aGljaCBpcyBhIGZ1bGx5IGZsZXNoZWQgbm9kZSBvbiBhbGwgc3VwcG9ydGVkXHJcbiAgLy9icm93c2Vycy5cclxuICBpZihvWE1MUGFyZW50LmRvY3VtZW50RWxlbWVudCl7XHJcbiAgICByZXR1cm4gbmV3IHhtbC5KWE9OVHJlZShvWE1MUGFyZW50LmRvY3VtZW50RWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBpZiAob1hNTFBhcmVudC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgIHZhciBzQ29sbGVjdGVkVHh0ID0gXCJcIjtcclxuICAgIGZvciAodmFyIG9Ob2RlLCBzUHJvcCwgdkNvbnRlbnQsIG5JdGVtID0gMDsgbkl0ZW0gPCBvWE1MUGFyZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBuSXRlbSsrKSB7XHJcbiAgICAgIG9Ob2RlID0gb1hNTFBhcmVudC5jaGlsZE5vZGVzLml0ZW0obkl0ZW0pO1xyXG4gICAgICAvKmpzaGludCBiaXR3aXNlOiBmYWxzZSovXHJcbiAgICAgIGlmICgob05vZGUubm9kZVR5cGUgLSAxIHwgMSkgPT09IDMpIHsgc0NvbGxlY3RlZFR4dCArPSBvTm9kZS5ub2RlVHlwZSA9PT0gMyA/IG9Ob2RlLm5vZGVWYWx1ZS50cmltKCkgOiBvTm9kZS5ub2RlVmFsdWU7IH1cclxuICAgICAgZWxzZSBpZiAob05vZGUubm9kZVR5cGUgPT09IDEgJiYgIW9Ob2RlLnByZWZpeCkge1xyXG4gICAgICAgIHNQcm9wID0gdXRpbGl0aWVzLmRlY2FwaXRhbGl6ZShvTm9kZS5ub2RlTmFtZSk7XHJcbiAgICAgICAgdkNvbnRlbnQgPSBuZXcgeG1sLkpYT05UcmVlKG9Ob2RlKTtcclxuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShzUHJvcCkpIHtcclxuICAgICAgICAgIGlmICh0aGlzW3NQcm9wXS5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHsgdGhpc1tzUHJvcF0gPSBbdGhpc1tzUHJvcF1dOyB9XHJcbiAgICAgICAgICB0aGlzW3NQcm9wXS5wdXNoKHZDb250ZW50KTtcclxuICAgICAgICB9IGVsc2UgeyB0aGlzW3NQcm9wXSA9IHZDb250ZW50OyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzQ29sbGVjdGVkVHh0KSB7IHRoaXMua2V5VmFsdWUgPSBwYXJzZVRleHQoc0NvbGxlY3RlZFR4dCk7IH1cclxuICB9XHJcblxyXG4gIC8vSUU4IFN0dXBpZCBmaXhcclxuICB2YXIgaGFzQXR0ciA9IHR5cGVvZiBvWE1MUGFyZW50Lmhhc0F0dHJpYnV0ZXMgPT09ICd1bmRlZmluZWQnPyBvWE1MUGFyZW50LmF0dHJpYnV0ZXMubGVuZ3RoID4gMDogb1hNTFBhcmVudC5oYXNBdHRyaWJ1dGVzKCk7XHJcbiAgaWYgKGhhc0F0dHIpIHtcclxuICAgIHZhciBvQXR0cmliO1xyXG4gICAgZm9yICh2YXIgbkF0dHJpYiA9IDA7IG5BdHRyaWIgPCBvWE1MUGFyZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBuQXR0cmliKyspIHtcclxuICAgICAgb0F0dHJpYiA9IG9YTUxQYXJlbnQuYXR0cmlidXRlcy5pdGVtKG5BdHRyaWIpO1xyXG4gICAgICB0aGlzW1wiQFwiICsgdXRpbGl0aWVzLmRlY2FwaXRhbGl6ZShvQXR0cmliLm5hbWUpXSA9IHBhcnNlVGV4dChvQXR0cmliLnZhbHVlLnRyaW0oKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxueG1sLkpYT05UcmVlLnByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24oYXR0cikge1xyXG4gIHJldHVybiB0aGlzWydAJyArIHV0aWxpdGllcy5kZWNhcGl0YWxpemUoYXR0cildO1xyXG59O1xyXG5cclxueG1sLnRvSlhPTlRyZWUgPSBmdW5jdGlvbiB0b0pYT05UcmVlKHhtbFN0cmluZyl7XHJcbiAgdmFyIHhtbERvYyA9IHhtbC5zdHJUb1hNTERvYyh4bWxTdHJpbmcpO1xyXG4gIHJldHVybiBuZXcgeG1sLkpYT05UcmVlKHhtbERvYyk7XHJcbn07XHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGV4dHJhY3QgdGhlIGtleXZhbHVlIG9mIGEgSlhPTlRyZWUgb2JqXHJcbiAqXHJcbiAqIEBwYXJhbSB4bWxPYmoge0pYT05UcmVlfVxyXG4gKiByZXR1cm4gdGhlIGtleSB2YWx1ZSBvciB1bmRlZmluZWQ7XHJcbiAqL1xyXG54bWwua2V5VmFsdWUgPSBmdW5jdGlvbiBnZXRLZXlWYWx1ZSh4bWxPYmopIHtcclxuICBpZih4bWxPYmope1xyXG4gICAgcmV0dXJuIHhtbE9iai5rZXlWYWx1ZTtcclxuICB9XHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufTtcclxuXHJcbnhtbC5hdHRyID0gZnVuY3Rpb24gZ2V0QXR0clZhbHVlKHhtbE9iaiwgYXR0cikge1xyXG4gIGlmKHhtbE9iaikge1xyXG4gICAgcmV0dXJuIHhtbE9ialsnQCcgKyB1dGlsaXRpZXMuZGVjYXBpdGFsaXplKGF0dHIpXTtcclxuICB9XHJcbiAgcmV0dXJuIHVuZGVmaW5lZDtcclxufTtcclxuXHJcbnhtbC5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGVYTUwoc3RyKSB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mL2csICcmYW1wOycpXHJcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXHJcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXHJcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXHJcbiAgICAucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jyk7XHJcbn07XHJcblxyXG54bWwuZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlWE1MKHN0cikge1xyXG4gIHJldHVybiBzdHIucmVwbGFjZSgvJmFwb3M7L2csIFwiJ1wiKVxyXG4gICAgLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKVxyXG4gICAgLnJlcGxhY2UoLyZndDsvZywgJz4nKVxyXG4gICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxyXG4gICAgLnJlcGxhY2UoLyZhbXA7L2csICcmJyk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHhtbDsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5yZXF1aXJlKCcuL3BsdWdpbi9jb21wb25lbnRzL2Fkcy1sYWJlbF81Jyk7XHJcbnJlcXVpcmUoJy4vcGx1Z2luL2NvbXBvbmVudHMvYmxhY2stcG9zdGVyXzUnKTtcclxuXHJcbnZhciB2aWRlb0pzVkFTVCA9IHJlcXVpcmUoJy4vcGx1Z2luL3ZpZGVvanMudmFzdC52cGFpZCcpO1xyXG5cclxudmlkZW9qcy5wbHVnaW4oJ3Zhc3RDbGllbnQnLCB2aWRlb0pzVkFTVCk7XHJcbiJdfQ==
