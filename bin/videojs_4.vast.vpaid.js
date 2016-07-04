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

var swfobject = require('swfobject');

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

        var me = this;

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
            return me;
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
    return swfobject.hasFlashPlayerVersion(FLASH_VERSION) && flashTester.isSupported();
}, true);

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

VPAIDFLASHClient.swfobject = swfobject;

module.exports = VPAIDFLASHClient;

},{"./VPAIDAdUnit":2,"./flashTester.js":4,"./jsFlashBridge":5,"./utils":8,"swfobject":14}],4:[function(require,module,exports){
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

var swfobject = require('swfobject');

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
        params.allowScriptAccess = 'always';

        this.el = swfobject.createSWF(swfConfig, params, FLASH_TEST_EL);
        this._handlers = new MultipleValuesRegistry();
        this._isSupported = false;
        if (this.el) {
            utils.hideFlashEl(this.el);
            this._flash = new JSFlashBridge(this.el, swfConfig.data, FLASH_TEST_EL, swfConfig.width, swfConfig.height, function () {
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

},{"./jsFlashBridge":5,"./registry":7,"./utils":8,"swfobject":14}],5:[function(require,module,exports){
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
    if( window.location.origin && window.location.origin !== 'null' ) {
        return window.location.origin;
    }
    else {
        return window.top.location.protocol + "//" +
            window.top.location.hostname +
            (window.top.location.port ? ':' + window.top.location.port: '');
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
/*!    SWFObject v2.3.20130521 <http://github.com/swfobject/swfobject>
    is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

/* global ActiveXObject: false */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node, CommonJS-like
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.swfobject = factory();
  }
}(this, function () {

    var UNDEF = "undefined",
        OBJECT = "object",
        SHOCKWAVE_FLASH = "Shockwave Flash",
        SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash",
        FLASH_MIME_TYPE = "application/x-shockwave-flash",
        EXPRESS_INSTALL_ID = "SWFObjectExprInst",
        ON_READY_STATE_CHANGE = "onreadystatechange",

        win = window,
        doc = document,
        nav = navigator,

        plugin = false,
        domLoadFnArr = [],
        regObjArr = [],
        objIdArr = [],
        listenersArr = [],
        storedFbContent,
        storedFbContentId,
        storedCallbackFn,
        storedCallbackObj,
        isDomLoaded = false,
        isExpressInstallActive = false,
        dynamicStylesheet,
        dynamicStylesheetMedia,
        autoHideShow = true,
        encodeURIEnabled = false,

    /* Centralized function for browser feature detection
        - User agent string detection is only used when no good alternative is possible
        - Is executed directly for optimal performance
    */
    ua = function () {
        var w3cdom = typeof doc.getElementById !== UNDEF && typeof doc.getElementsByTagName !== UNDEF && typeof doc.createElement !== UNDEF,
            u = nav.userAgent.toLowerCase(),
            p = nav.platform.toLowerCase(),
            windows = p ? /win/.test(p) : /win/.test(u),
            mac = p ? /mac/.test(p) : /mac/.test(u),
            webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, // returns either the webkit version or false if not webkit
            ie = nav.appName === "Microsoft Internet Explorer",
            playerVersion = [0, 0, 0],
            d = null;
        if (typeof nav.plugins !== UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] === OBJECT) {
            d = nav.plugins[SHOCKWAVE_FLASH].description;
            // nav.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
            if (d && (typeof nav.mimeTypes !== UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) {
                plugin = true;
                ie = false; // cascaded feature detection for Internet Explorer
                d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                playerVersion[0] = toInt(d.replace(/^(.*)\..*$/, "$1"));
                playerVersion[1] = toInt(d.replace(/^.*\.(.*)\s.*$/, "$1"));
                playerVersion[2] = /[a-zA-Z]/.test(d) ? toInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0;
            }
        }
        else if (typeof win.ActiveXObject !== UNDEF) {
            try {
                var a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
                if (a) { // a will return null when ActiveX is disabled
                    d = a.GetVariable("$version");
                    if (d) {
                        ie = true; // cascaded feature detection for Internet Explorer
                        d = d.split(" ")[1].split(",");
                        playerVersion = [toInt(d[0]), toInt(d[1]), toInt(d[2])];
                    }
                }
            }
            catch (e) {}
        }
        return {w3: w3cdom, pv: playerVersion, wk: webkit, ie: ie, win: windows, mac: mac};
    }(),

    /* Cross-browser onDomLoad
        - Will fire an event as soon as the DOM of a web page is loaded
        - Internet Explorer workaround based on Diego Perini's solution: http://javascript.nwbox.com/IEContentLoaded/
        - Regular onload serves as fallback
    */
    onDomLoad = function () {
        if (!ua.w3) { return; }
        if ((typeof doc.readyState !== UNDEF && (doc.readyState === "complete" || doc.readyState === "interactive")) || (typeof doc.readyState === UNDEF && (doc.getElementsByTagName("body")[0] || doc.body))) { // function is fired after onload, e.g. when script is inserted dynamically
            callDomLoadFunctions();
        }
        if (!isDomLoaded) {
            if (typeof doc.addEventListener !== UNDEF) {
                doc.addEventListener("DOMContentLoaded", callDomLoadFunctions, false);
            }
            if (ua.ie) {
                doc.attachEvent(ON_READY_STATE_CHANGE, function detach() {
                    if (doc.readyState === "complete") {
                        doc.detachEvent(ON_READY_STATE_CHANGE, detach);
                        callDomLoadFunctions();
                    }
                });
                if (win == top) { // if not inside an iframe
                    (function checkDomLoadedIE() {
                        if (isDomLoaded) { return; }
                        try {
                            doc.documentElement.doScroll("left");
                        }
                        catch (e) {
                            setTimeout(checkDomLoadedIE, 0);
                            return;
                        }
                        callDomLoadFunctions();
                    }());
                }
            }
            if (ua.wk) {
                (function checkDomLoadedWK() {
                    if (isDomLoaded) { return; }
                    if (!/loaded|complete/.test(doc.readyState)) {
                        setTimeout(checkDomLoadedWK, 0);
                        return;
                    }
                    callDomLoadFunctions();
                }());
            }
        }
    }();

    function callDomLoadFunctions() {
        if (isDomLoaded || !document.getElementsByTagName("body")[0]) { return; }
        try { // test if we can really add/remove elements to/from the DOM; we don't want to fire it too early
            var t, span = createElement("span");
            span.style.display = "none"; //hide the span in case someone has styled spans via CSS
            t = doc.getElementsByTagName("body")[0].appendChild(span);
            t.parentNode.removeChild(t);
            t = null; //clear the variables
            span = null;
        }
        catch (e) { return; }
        isDomLoaded = true;
        var dl = domLoadFnArr.length;
        for (var i = 0; i < dl; i++) {
            domLoadFnArr[i]();
        }
    }

    function addDomLoadEvent(fn) {
        if (isDomLoaded) {
            fn();
        }
        else {
            domLoadFnArr[domLoadFnArr.length] = fn; // Array.push() is only available in IE5.5+
        }
    }

    /* Cross-browser onload
        - Based on James Edwards' solution: http://brothercake.com/site/resources/scripts/onload/
        - Will fire an event as soon as a web page including all of its assets are loaded
     */
    function addLoadEvent(fn) {
        if (typeof win.addEventListener !== UNDEF) {
            win.addEventListener("load", fn, false);
        }
        else if (typeof doc.addEventListener !== UNDEF) {
            doc.addEventListener("load", fn, false);
        }
        else if (typeof win.attachEvent !== UNDEF) {
            addListener(win, "onload", fn);
        }
        else if (typeof win.onload === "function") {
            var fnOld = win.onload;
            win.onload = function () {
                fnOld();
                fn();
            };
        }
        else {
            win.onload = fn;
        }
    }

    /* Detect the Flash Player version for non-Internet Explorer browsers
        - Detecting the plug-in version via the object element is more precise than using the plugins collection item's description:
          a. Both release and build numbers can be detected
          b. Avoid wrong descriptions by corrupt installers provided by Adobe
          c. Avoid wrong descriptions by multiple Flash Player entries in the plugin Array, caused by incorrect browser imports
        - Disadvantage of this method is that it depends on the availability of the DOM, while the plugins collection is immediately available
    */
    function testPlayerVersion() {
        var b = doc.getElementsByTagName("body")[0];
        var o = createElement(OBJECT);
        o.setAttribute("style", "visibility: hidden;");
        o.setAttribute("type", FLASH_MIME_TYPE);
        var t = b.appendChild(o);
        if (t) {
            var counter = 0;
            (function checkGetVariable() {
                if (typeof t.GetVariable !== UNDEF) {
                    try {
                        var d = t.GetVariable("$version");
                        if (d) {
                            d = d.split(" ")[1].split(",");
                            ua.pv = [toInt(d[0]), toInt(d[1]), toInt(d[2])];
                        }
                    } catch (e) {
                        //t.GetVariable("$version") is known to fail in Flash Player 8 on Firefox
                        //If this error is encountered, assume FP8 or lower. Time to upgrade.
                        ua.pv = [8, 0, 0];
                    }
                }
                else if (counter < 10) {
                    counter++;
                    setTimeout(checkGetVariable, 10);
                    return;
                }
                b.removeChild(o);
                t = null;
                matchVersions();
            }());
        }
        else {
            matchVersions();
        }
    }

    /* Perform Flash Player and SWF version matching; static publishing only
    */
    function matchVersions() {
        var rl = regObjArr.length;
        if (rl > 0) {
            for (var i = 0; i < rl; i++) { // for each registered object element
                var id = regObjArr[i].id;
                var cb = regObjArr[i].callbackFn;
                var cbObj = {success: false, id: id};
                if (ua.pv[0] > 0) {
                    var obj = getElementById(id);
                    if (obj) {
                        if (hasPlayerVersion(regObjArr[i].swfVersion) && !(ua.wk && ua.wk < 312)) { // Flash Player version >= published SWF version: Houston, we have a match!
                            setVisibility(id, true);
                            if (cb) {
                                cbObj.success = true;
                                cbObj.ref = getObjectById(id);
                                cbObj.id = id;
                                cb(cbObj);
                            }
                        }
                        else if (regObjArr[i].expressInstall && canExpressInstall()) { // show the Adobe Express Install dialog if set by the web page author and if supported
                            var att = {};
                            att.data = regObjArr[i].expressInstall;
                            att.width = obj.getAttribute("width") || "0";
                            att.height = obj.getAttribute("height") || "0";
                            if (obj.getAttribute("class")) { att.styleclass = obj.getAttribute("class"); }
                            if (obj.getAttribute("align")) { att.align = obj.getAttribute("align"); }
                            // parse HTML object param element's name-value pairs
                            var par = {};
                            var p = obj.getElementsByTagName("param");
                            var pl = p.length;
                            for (var j = 0; j < pl; j++) {
                                if (p[j].getAttribute("name").toLowerCase() !== "movie") {
                                    par[p[j].getAttribute("name")] = p[j].getAttribute("value");
                                }
                            }
                            showExpressInstall(att, par, id, cb);
                        }
                        else { // Flash Player and SWF version mismatch or an older Webkit engine that ignores the HTML object element's nested param elements: display fallback content instead of SWF
                            displayFbContent(obj);
                            if (cb) { cb(cbObj); }
                        }
                    }
                }
                else { // if no Flash Player is installed or the fp version cannot be detected we let the HTML object element do its job (either show a SWF or fallback content)
                    setVisibility(id, true);
                    if (cb) {
                        var o = getObjectById(id); // test whether there is an HTML object element or not
                        if (o && typeof o.SetVariable !== UNDEF) {
                            cbObj.success = true;
                            cbObj.ref = o;
                            cbObj.id = o.id;
                        }
                        cb(cbObj);
                    }
                }
            }
        }
    }

    /* Main function
        - Will preferably execute onDomLoad, otherwise onload (as a fallback)
    */
    domLoadFnArr[0] = function () {
        if (plugin) {
            testPlayerVersion();
        }
        else {
            matchVersions();
        }
    };

    function getObjectById(objectIdStr) {
        var r = null,
            o = getElementById(objectIdStr);

        if (o && o.nodeName.toUpperCase() === "OBJECT") {
            //If targeted object is valid Flash file
            if (typeof o.SetVariable !== UNDEF) {
                r = o;
            } else {
                //If SetVariable is not working on targeted object but a nested object is
                //available, assume classic nested object markup. Return nested object.

                //If SetVariable is not working on targeted object and there is no nested object,
                //return the original object anyway. This is probably new simplified markup.

                r = o.getElementsByTagName(OBJECT)[0] || o;
            }
        }

        return r;
    }

    /* Requirements for Adobe Express Install
        - only one instance can be active at a time
        - fp 6.0.65 or higher
        - Win/Mac OS only
        - no Webkit engines older than version 312
    */
    function canExpressInstall() {
        return !isExpressInstallActive && hasPlayerVersion("6.0.65") && (ua.win || ua.mac) && !(ua.wk && ua.wk < 312);
    }

    /* Show the Adobe Express Install dialog
        - Reference: http://www.adobe.com/cfusion/knowledgebase/index.cfm?id=6a253b75
    */
    function showExpressInstall(att, par, replaceElemIdStr, callbackFn) {

        var obj = getElementById(replaceElemIdStr);

        //Ensure that replaceElemIdStr is really a string and not an element
        replaceElemIdStr = getId(replaceElemIdStr);

        isExpressInstallActive = true;
        storedCallbackFn = callbackFn || null;
        storedCallbackObj = {success: false, id: replaceElemIdStr};

        if (obj) {
            if (obj.nodeName.toUpperCase() === "OBJECT") { // static publishing
                storedFbContent = abstractFbContent(obj);
                storedFbContentId = null;
            }
            else { // dynamic publishing
                storedFbContent = obj;
                storedFbContentId = replaceElemIdStr;
            }
            att.id = EXPRESS_INSTALL_ID;
            if (typeof att.width === UNDEF || (!/%$/.test(att.width) && toInt(att.width) < 310)) { att.width = "310"; }
            if (typeof att.height === UNDEF || (!/%$/.test(att.height) && toInt(att.height) < 137)) { att.height = "137"; }
            var pt = ua.ie ? "ActiveX" : "PlugIn",
                fv = "MMredirectURL=" + encodeURIComponent(win.location.toString().replace(/&/g, "%26")) + "&MMplayerType=" + pt + "&MMdoctitle=" + encodeURIComponent(doc.title.slice(0, 47) + " - Flash Player Installation");
            if (typeof par.flashvars !== UNDEF) {
                par.flashvars += "&" + fv;
            }
            else {
                par.flashvars = fv;
            }
            // IE only: when a SWF is loading (AND: not available in cache) wait for the readyState of the object element to become 4 before removing it,
            // because you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
            if (ua.ie && obj.readyState != 4) {
                var newObj = createElement("div");
                replaceElemIdStr += "SWFObjectNew";
                newObj.setAttribute("id", replaceElemIdStr);
                obj.parentNode.insertBefore(newObj, obj); // insert placeholder div that will be replaced by the object element that loads expressinstall.swf
                obj.style.display = "none";
                removeSWF(obj); //removeSWF accepts elements now
            }
            createSWF(att, par, replaceElemIdStr);
        }
    }

    /* Functions to abstract and display fallback content
    */
    function displayFbContent(obj) {
        if (ua.ie && obj.readyState != 4) {
            // IE only: when a SWF is loading (AND: not available in cache) wait for the readyState of the object element to become 4 before removing it,
            // because you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
            obj.style.display = "none";
            var el = createElement("div");
            obj.parentNode.insertBefore(el, obj); // insert placeholder div that will be replaced by the fallback content
            el.parentNode.replaceChild(abstractFbContent(obj), el);
            removeSWF(obj); //removeSWF accepts elements now
        }
        else {
            obj.parentNode.replaceChild(abstractFbContent(obj), obj);
        }
    }

    function abstractFbContent(obj) {
        var ac = createElement("div");
        if (ua.win && ua.ie) {
            ac.innerHTML = obj.innerHTML;
        }
        else {
            var nestedObj = obj.getElementsByTagName(OBJECT)[0];
            if (nestedObj) {
                var c = nestedObj.childNodes;
                if (c) {
                    var cl = c.length;
                    for (var i = 0; i < cl; i++) {
                        if (!(c[i].nodeType == 1 && c[i].nodeName === "PARAM") && !(c[i].nodeType == 8)) {
                            ac.appendChild(c[i].cloneNode(true));
                        }
                    }
                }
            }
        }
        return ac;
    }

    function createIeObject(url, paramStr) {
        var div = createElement("div");
        div.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + url + "'>" + paramStr + "</object>";
        return div.firstChild;
    }

    /* Cross-browser dynamic SWF creation
    */
    function createSWF(attObj, parObj, id) {
        var r, el = getElementById(id);
        id = getId(id); // ensure id is truly an ID and not an element

        if (ua.wk && ua.wk < 312) { return r; }

        if (el) {
            var o = (ua.ie) ? createElement("div") : createElement(OBJECT),
                attr,
                attrLower,
                param;

            if (typeof attObj.id === UNDEF) { // if no 'id' is defined for the object element, it will inherit the 'id' from the fallback content
                attObj.id = id;
            }

            //Add params
            for (param in parObj) {
                //filter out prototype additions from other potential libraries and IE specific param element
                if (parObj.hasOwnProperty(param) && param.toLowerCase() !== "movie") {
                    createObjParam(o, param, parObj[param]);
                }
            }

            //Create IE object, complete with param nodes
            if (ua.ie) { o = createIeObject(attObj.data, o.innerHTML); }

            //Add attributes to object
            for (attr in attObj) {
                if (attObj.hasOwnProperty(attr)) { // filter out prototype additions from other potential libraries
                    attrLower = attr.toLowerCase();

                    // 'class' is an ECMA4 reserved keyword
                    if (attrLower === "styleclass") {
                        o.setAttribute("class", attObj[attr]);
                    } else if (attrLower !== "classid" && attrLower !== "data") {
                        o.setAttribute(attr, attObj[attr]);
                    }
                }
            }

            if (ua.ie) {
                objIdArr[objIdArr.length] = attObj.id; // stored to fix object 'leaks' on unload (dynamic publishing only)
            } else {
                o.setAttribute("type", FLASH_MIME_TYPE);
                o.setAttribute("data", attObj.data);
            }

            el.parentNode.replaceChild(o, el);
            r = o;
        }

        return r;
    }

    function createObjParam(el, pName, pValue) {
        var p = createElement("param");
        p.setAttribute("name", pName);
        p.setAttribute("value", pValue);
        el.appendChild(p);
    }

    /* Cross-browser SWF removal
        - Especially needed to safely and completely remove a SWF in Internet Explorer
    */
    function removeSWF(id) {
        var obj = getElementById(id);
        if (obj && obj.nodeName.toUpperCase() === "OBJECT") {
            if (ua.ie) {
                obj.style.display = "none";
                (function removeSWFInIE() {
                    if (obj.readyState == 4) {
                        //This step prevents memory leaks in Internet Explorer
                        for (var i in obj) {
                            if (typeof obj[i] === "function") {
                                obj[i] = null;
                            }
                        }
                        obj.parentNode.removeChild(obj);
                    } else {
                        setTimeout(removeSWFInIE, 10);
                    }
                }());
            }
            else {
                obj.parentNode.removeChild(obj);
            }
        }
    }

    function isElement(id) {
        return (id && id.nodeType && id.nodeType === 1);
    }

    function getId(thing) {
        return (isElement(thing)) ? thing.id : thing;
    }

    /* Functions to optimize JavaScript compression
    */
    function getElementById(id) {

        //Allow users to pass an element OR an element's ID
        if (isElement(id)) { return id; }

        var el = null;
        try {
            el = doc.getElementById(id);
        }
        catch (e) {}
        return el;
    }

    function createElement(el) {
        return doc.createElement(el);
    }

    //To aid compression; replaces 14 instances of pareseInt with radix
    function toInt(str) {
        return parseInt(str, 10);
    }

    /* Updated attachEvent function for Internet Explorer
        - Stores attachEvent information in an Array, so on unload the detachEvent functions can be called to avoid memory leaks
    */
    function addListener(target, eventType, fn) {
        target.attachEvent(eventType, fn);
        listenersArr[listenersArr.length] = [target, eventType, fn];
    }

    /* Flash Player and SWF content version matching
    */
    function hasPlayerVersion(rv) {
        rv += ""; //Coerce number to string, if needed.
        var pv = ua.pv, v = rv.split(".");
        v[0] = toInt(v[0]);
        v[1] = toInt(v[1]) || 0; // supports short notation, e.g. "9" instead of "9.0.0"
        v[2] = toInt(v[2]) || 0;
        return (pv[0] > v[0] || (pv[0] == v[0] && pv[1] > v[1]) || (pv[0] == v[0] && pv[1] == v[1] && pv[2] >= v[2])) ? true : false;
    }

    /* Cross-browser dynamic CSS creation
        - Based on Bobby van der Sluis' solution: http://www.bobbyvandersluis.com/articles/dynamicCSS.php
    */
    function createCSS(sel, decl, media, newStyle) {
        var h = doc.getElementsByTagName("head")[0];
        if (!h) { return; } // to also support badly authored HTML pages that lack a head element
        var m = (typeof media === "string") ? media : "screen";
        if (newStyle) {
            dynamicStylesheet = null;
            dynamicStylesheetMedia = null;
        }
        if (!dynamicStylesheet || dynamicStylesheetMedia != m) {
            // create dynamic stylesheet + get a global reference to it
            var s = createElement("style");
            s.setAttribute("type", "text/css");
            s.setAttribute("media", m);
            dynamicStylesheet = h.appendChild(s);
            if (ua.ie && typeof doc.styleSheets !== UNDEF && doc.styleSheets.length > 0) {
                dynamicStylesheet = doc.styleSheets[doc.styleSheets.length - 1];
            }
            dynamicStylesheetMedia = m;
        }
        // add style rule
        if (dynamicStylesheet) {
            if (typeof dynamicStylesheet.addRule !== UNDEF) {
                dynamicStylesheet.addRule(sel, decl);
            } else if (typeof doc.createTextNode !== UNDEF) {
                dynamicStylesheet.appendChild(doc.createTextNode(sel + " {" + decl + "}"));
            }
        }
    }

    function setVisibility(id, isVisible) {
        if (!autoHideShow) { return; }
        var v = isVisible ? "visible" : "hidden",
            el = getElementById(id);
        if (isDomLoaded && el) {
            el.style.visibility = v;
        } else if (typeof id === "string") {
            createCSS("#" + id, "visibility:" + v);
        }
    }

    /* Filter to avoid XSS attacks
    */
    function urlEncodeIfNecessary(s) {
        var regex = /[\\\"<>\.;]/;
        var hasBadChars = regex.exec(s) !== null;
        return hasBadChars && typeof encodeURIComponent !== UNDEF ? encodeURIComponent(s) : s;
    }

    /* Release memory to avoid memory leaks caused by closures, fix hanging audio/video threads and force open sockets/NetConnections to disconnect (Internet Explorer only)
    */
    var cleanup = function () {
        if (ua.ie) {
            window.attachEvent("onunload", function () {
                // remove listeners to avoid memory leaks
                var ll = listenersArr.length;
                for (var i = 0; i < ll; i++) {
                    listenersArr[i][0].detachEvent(listenersArr[i][1], listenersArr[i][2]);
                }
                // cleanup dynamically embedded objects to fix audio/video threads and force open sockets and NetConnections to disconnect
                var il = objIdArr.length;
                for (var j = 0; j < il; j++) {
                    removeSWF(objIdArr[j]);
                }
                // cleanup library's main closures to avoid memory leaks
                for (var k in ua) {
                    ua[k] = null;
                }
                ua = null;
                for (var l in swfobject) {
                    swfobject[l] = null;
                }
                swfobject = null;
            });
        }
    }();

    return {
        /* Public API
            - Reference: http://code.google.com/p/swfobject/wiki/documentation
        */
        registerObject: function (objectIdStr, swfVersionStr, xiSwfUrlStr, callbackFn) {
            if (ua.w3 && objectIdStr && swfVersionStr) {
                var regObj = {};
                regObj.id = objectIdStr;
                regObj.swfVersion = swfVersionStr;
                regObj.expressInstall = xiSwfUrlStr;
                regObj.callbackFn = callbackFn;
                regObjArr[regObjArr.length] = regObj;
                setVisibility(objectIdStr, false);
            }
            else if (callbackFn) {
                callbackFn({success: false, id: objectIdStr});
            }
        },

        getObjectById: function (objectIdStr) {
            if (ua.w3) {
                return getObjectById(objectIdStr);
            }
        },

        embedSWF: function (swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, xiSwfUrlStr, flashvarsObj, parObj, attObj, callbackFn) {

            var id = getId(replaceElemIdStr),
                callbackObj = {success: false, id: id};

            if (ua.w3 && !(ua.wk && ua.wk < 312) && swfUrlStr && replaceElemIdStr && widthStr && heightStr && swfVersionStr) {
                setVisibility(id, false);
                addDomLoadEvent(function () {
                    widthStr += ""; // auto-convert to string
                    heightStr += "";
                    var att = {};
                    if (attObj && typeof attObj === OBJECT) {
                        for (var i in attObj) { // copy object to avoid the use of references, because web authors often reuse attObj for multiple SWFs
                            att[i] = attObj[i];
                        }
                    }
                    att.data = swfUrlStr;
                    att.width = widthStr;
                    att.height = heightStr;
                    var par = {};
                    if (parObj && typeof parObj === OBJECT) {
                        for (var j in parObj) { // copy object to avoid the use of references, because web authors often reuse parObj for multiple SWFs
                            par[j] = parObj[j];
                        }
                    }
                    if (flashvarsObj && typeof flashvarsObj === OBJECT) {
                        for (var k in flashvarsObj) { // copy object to avoid the use of references, because web authors often reuse flashvarsObj for multiple SWFs
                            if (flashvarsObj.hasOwnProperty(k)) {

                                var key = (encodeURIEnabled) ? encodeURIComponent(k) : k,
                                    value = (encodeURIEnabled) ? encodeURIComponent(flashvarsObj[k]) : flashvarsObj[k];

                                if (typeof par.flashvars !== UNDEF) {
                                    par.flashvars += "&" + key + "=" + value;
                                }
                                else {
                                    par.flashvars = key + "=" + value;
                                }

                            }
                        }
                    }
                    if (hasPlayerVersion(swfVersionStr)) { // create SWF
                        var obj = createSWF(att, par, replaceElemIdStr);
                        if (att.id == id) {
                            setVisibility(id, true);
                        }
                        callbackObj.success = true;
                        callbackObj.ref = obj;
                        callbackObj.id = obj.id;
                    }
                    else if (xiSwfUrlStr && canExpressInstall()) { // show Adobe Express Install
                        att.data = xiSwfUrlStr;
                        showExpressInstall(att, par, replaceElemIdStr, callbackFn);
                        return;
                    }
                    else { // show fallback content
                        setVisibility(id, true);
                    }
                    if (callbackFn) { callbackFn(callbackObj); }
                });
            }
            else if (callbackFn) { callbackFn(callbackObj); }
        },

        switchOffAutoHideShow: function () {
            autoHideShow = false;
        },

        enableUriEncoding: function (bool) {
            encodeURIEnabled = (typeof bool === UNDEF) ? true : bool;
        },

        ua: ua,

        getFlashPlayerVersion: function () {
            return {major: ua.pv[0], minor: ua.pv[1], release: ua.pv[2]};
        },

        hasFlashPlayerVersion: hasPlayerVersion,

        createSWF: function (attObj, parObj, replaceElemIdStr) {
            if (ua.w3) {
                return createSWF(attObj, parObj, replaceElemIdStr);
            }
            else {
                return undefined;
            }
        },

        showExpressInstall: function (att, par, replaceElemIdStr, callbackFn) {
            if (ua.w3 && canExpressInstall()) {
                showExpressInstall(att, par, replaceElemIdStr, callbackFn);
            }
        },

        removeSWF: function (objElemIdStr) {
            if (ua.w3) {
                removeSWF(objElemIdStr);
            }
        },

        createCSS: function (selStr, declStr, mediaStr, newStyleBoolean) {
            if (ua.w3) {
                createCSS(selStr, declStr, mediaStr, newStyleBoolean);
            }
        },

        addDomLoadEvent: addDomLoadEvent,

        addLoadEvent: addLoadEvent,

        getQueryParamValue: function (param) {
            var q = doc.location.search || doc.location.hash;
            if (q) {
                if (/\?/.test(q)) { q = q.split("?")[1]; } // strip question mark
                if (!param) {
                    return urlEncodeIfNecessary(q);
                }
                var pairs = q.split("&");
                for (var i = 0; i < pairs.length; i++) {
                    if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
                        return urlEncodeIfNecessary(pairs[i].substring((pairs[i].indexOf("=") + 1)));
                    }
                }
            }
            return "";
        },

        // For internal usage only
        expressInstallCallback: function () {
            if (isExpressInstallActive) {
                var obj = getElementById(EXPRESS_INSTALL_ID);
                if (obj && storedFbContent) {
                    obj.parentNode.replaceChild(storedFbContent, obj);
                    if (storedFbContentId) {
                        setVisibility(storedFbContentId, true);
                        if (ua.ie) { storedFbContent.style.display = "block"; }
                    }
                    if (storedCallbackFn) { storedCallbackFn(storedCallbackObj); }
                }
                isExpressInstallActive = false;
            }
        },

        version: "2.3"

    };
}));

},{}],15:[function(require,module,exports){
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
},{"./InLine":18,"./Wrapper":28}],16:[function(require,module,exports){
'use strict';

var TrackingEvent = require('./TrackingEvent');

var utilities = require('../../utils/utilityFunctions');

var xml = require('../../utils/xml');

var logger = require ('../../utils/consoleLogger');


function Companion(companionJTree) {
  if (!(this instanceof Companion)) {
    return new Companion(companionJTree);
  }

  logger.info ("<Companion> found companion ad");
  logger.debug ("<Companion>  companionJTree:", companionJTree);

  //Required Elements
  this.creativeType = xml.attr(companionJTree.staticResource, 'creativeType');
  this.staticResource = xml.keyValue(companionJTree.staticResource);

  logger.info ("<Companion>  creativeType: " + this.creativeType);
  logger.info ("<Companion>  staticResource: " + this.staticResource);

  // Weird bug when the JXON tree is built it doesn't handle casing properly in this situation...
  var htmlResource = null;
  if (xml.keyValue(companionJTree.HTMLResource)) {
    htmlResource = xml.keyValue(companionJTree.HTMLResource);
  } else if (xml.keyValue(companionJTree.hTMLResource)) {
    htmlResource = xml.keyValue(companionJTree.hTMLResource);
  }

  if (htmlResource !== null)
  {
    logger.info ("<Companion> found html resource", htmlResource);
  }

  this.htmlResource = htmlResource;

  var iframeResource = null;
  if (xml.keyValue(companionJTree.IFrameResource)) {
    iframeResource = xml.keyValue(companionJTree.IFrameResource);
  } else if (xml.keyValue(companionJTree.iFrameresource)) {
    iframeResource = xml.keyValue(companionJTree.iFrameresource);
  }

  if (iframeResource !== null)
  {
    logger.info ("<Companion> found iframe resource", iframeResource);
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

  logger.info ("<Companion>  companionClickThrough: " + this.companionClickThrough);


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
},{"../../utils/consoleLogger":41,"../../utils/utilityFunctions":47,"../../utils/xml":48,"./TrackingEvent":21}],17:[function(require,module,exports){
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

},{"../../utils/utilityFunctions":47,"./Companion":16,"./Linear":19}],18:[function(require,module,exports){
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

},{"../../utils/utilityFunctions":47,"../../utils/xml":48,"./Creative":17,"./vastUtil":30}],19:[function(require,module,exports){
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

    if(xml.attr(linearJTree.adParameters, 'xmlEncoded')) {
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
        if (mfData['@type'] === 'application/x-shockwave-flash') {
          return;
        }
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

},{"../../utils/utilityFunctions":47,"../../utils/xml":48,"./MediaFile":20,"./TrackingEvent":21,"./VideoClicks":27,"./parsers":29}],20:[function(require,module,exports){
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

},{"../../utils/xml":48,"./vastUtil":30}],21:[function(require,module,exports){
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
},{"../../utils/xml":48,"./parsers":29}],22:[function(require,module,exports){
'use strict';

var Ad = require('./Ad');
var VASTError = require('./VASTError');
var VASTResponse = require('./VASTResponse');
var vastUtil = require('./vastUtil');

var async = require('../../utils/async');
var http = require('../../utils/http').http;
var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

var logger = require ('../../utils/consoleLogger');

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
      logger.debug ("built JXONTree from VAST response:", vastTree);

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
      logger.info ("requesting adTagUrl: " + adTagUrl);
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

},{"../../utils/async":40,"../../utils/consoleLogger":41,"../../utils/http":43,"../../utils/utilityFunctions":47,"../../utils/xml":48,"./Ad":15,"./VASTError":23,"./VASTResponse":25,"./vastUtil":30}],23:[function(require,module,exports){
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
},{}],24:[function(require,module,exports){
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

var logger = require ('../../utils/consoleLogger');

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
    logger.info ("selected source: ", source);
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

  logger.debug ("<VASTIntegrator._playSelectedAd> waiting for durationchange to play the ad...");

  playerUtils.once(player, ['durationchange', 'error', 'vast.adsCancel'], function (evt) {
    if (evt.type === 'durationchange') {
      logger.debug ("<VASTIntegrator._playSelectedAd> got durationchange; calling playAd()");
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

      logger.debug ("<VASTIntegrator._playSelectedAd/playAd> got playing event; triggering vast.adStart...");

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

    logger.debug ("<VASTIntegrator._playSelectedAd/playAd> calling player.play()...");

    player.play();
  }
};

VASTIntegrator.prototype._trackError = function trackError(error, response) {
  vastUtil.track(response.errorURLMacros, {ERRORCODE: error.code || 900});
};

module.exports = VASTIntegrator;
},{"../../utils/async":40,"../../utils/consoleLogger":41,"../../utils/dom":42,"../../utils/playerUtils":45,"../../utils/utilityFunctions":47,"./VASTError":23,"./VASTResponse":25,"./VASTTracker":26,"./vastUtil":30}],25:[function(require,module,exports){
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


},{"../../utils/utilityFunctions":47,"../../utils/xml":48,"./Ad":15,"./InLine":18,"./Linear":19,"./VideoClicks":27,"./Wrapper":28}],26:[function(require,module,exports){
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

},{"../../utils/utilityFunctions":47,"./VASTError":23,"./VASTResponse":25,"./vastUtil":30}],27:[function(require,module,exports){
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
},{"../../utils/utilityFunctions":47,"../../utils/xml":48}],28:[function(require,module,exports){
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

},{"../../utils/utilityFunctions":47,"../../utils/xml":48,"./Creative":17,"./vastUtil":30}],29:[function(require,module,exports){
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
},{"../../utils/utilityFunctions":47}],30:[function(require,module,exports){
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

},{"../../utils/utilityFunctions":47,"../vpaid/VPAIDFlashTech":32,"../vpaid/VPAIDHTML5Tech":33,"VPAIDFLASHClient/js/VPAIDFLASHClient":3}],31:[function(require,module,exports){
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

},{"../../utils/utilityFunctions":47,"../vast/VASTError":23}],32:[function(require,module,exports){
'use strict';

var MimeTypes = require('../../utils/mimetypes');

var VASTError = require('../vast/VASTError');

var VPAIDFLASHClient = require('VPAIDFLASHClient/js/VPAIDFLASHClient');

var utilities = require('../../utils/utilityFunctions');
var dom = require('../../utils/dom');

var logger = require ('../../utils/consoleLogger');

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
  return (MimeTypes.flash.indexOf(type) > -1) && VPAIDFlashTech.VPAIDFLASHClient.isSupported();
};

VPAIDFlashTech.prototype.loadAdUnit = function loadFlashCreative(containerEl, objectEl, callback) {
  var that = this;
  var flashClientOpts = this.settings && this.settings.vpaidFlashLoaderPath ? {data: this.settings.vpaidFlashLoaderPath} : undefined;
  sanityCheck(containerEl, callback);

  this.containerEl = containerEl;

  logger.debug ("<VPAIDFlashTech.loadAdUnit> loading VPAIDFLASHClient with opts:", flashClientOpts);

  this.vpaidFlashClient = new VPAIDFlashTech.VPAIDFLASHClient(containerEl, function (error) {
    if (error) {
      return callback(error);
    }

    logger.info ("<VPAIDFlashTech.loadAdUnit> calling VPAIDFLASHClient.loadAdUnit(); that.mediaFile:", that.mediaFile);
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
      logger.error ('VAST ERROR: trying to unload the VPAID adunit');
    }
    this.vpaidFlashClient = null;
  }

  if (this.containerEl) {
    dom.remove(this.containerEl);
    this.containerEl = null;
  }
};

module.exports = VPAIDFlashTech;

},{"../../utils/consoleLogger":41,"../../utils/dom":42,"../../utils/mimetypes":44,"../../utils/utilityFunctions":47,"../vast/VASTError":23,"VPAIDFLASHClient/js/VPAIDFLASHClient":3}],33:[function(require,module,exports){
'use strict';

var MimeTypes = require('../../utils/mimetypes');

var VASTError = require('../vast/VASTError');

var VPAIDHTML5Client = require('VPAIDHTML5Client/js/VPAIDHTML5Client');

var utilities = require('../../utils/utilityFunctions');
var dom = require('../../utils/dom');

var logger = require ('../../utils/consoleLogger');

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
  return !utilities.isOldIE() && MimeTypes.html5.indexOf(type) > -1;
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
      logger.error ('VAST ERROR: trying to unload the VPAID adunit');
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

},{"../../utils/consoleLogger":41,"../../utils/dom":42,"../../utils/mimetypes":44,"../../utils/utilityFunctions":47,"../vast/VASTError":23,"VPAIDHTML5Client/js/VPAIDHTML5Client":11}],34:[function(require,module,exports){
'use strict';

var MimeTypes = require('../../utils/mimetypes');
var VASTError = require('../vast/VASTError');
var VASTResponse = require('../vast/VASTResponse');
var VASTTracker = require('../vast/VASTTracker');
var vastUtil = require('../vast/vastUtil');

var VPAIDAdUnitWrapper = require('./VPAIDAdUnitWrapper');

var async = require('../../utils/async');
var dom = require('../../utils/dom');
var playerUtils = require('../../utils/playerUtils');
var utilities = require('../../utils/utilityFunctions');

var logger = require ('../../utils/consoleLogger');

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
  logger.debug ("<VPAIDIntegrator.playAd> looking for supported tech...");
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
    logger.info ("<VPAIDIntegrator.playAd> found tech: ", tech);

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
    logger.debug ("<VPAIDIntegrator.playAd> could not find suitable tech");
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
  var preferredTech = settings && settings.preferredTech;
  var skippedSupportTechs = [];
  var i, len, mediaFile, VPAIDTech, isPreferedTech;

  for (i = 0, len = vpaidMediaFiles.length; i < len; i += 1) {
    mediaFile = vpaidMediaFiles[i];
    VPAIDTech = vastUtil.findSupportedVPAIDTech(mediaFile.type);

    // no supported VPAID tech found, skip mediafile
    if (!VPAIDTech) { continue; }

    // do we have a prefered tech, does it play this media file ?
    isPreferedTech = preferredTech ?
      (mediaFile.type === preferredTech || (MimeTypes[preferredTech] && MimeTypes[preferredTech].indexOf(mediaFile.type) > -1 )) :
      false;

    // our prefered tech can read this mediafile, defaulting to it.
    if (isPreferedTech) {
      return new VPAIDTech(mediaFile, settings);
    }

    skippedSupportTechs.push({ mediaFile: mediaFile, tech: VPAIDTech });
  }

  if (skippedSupportTechs.length) {
    var firstTech = skippedSupportTechs[0];
    return new firstTech.tech(firstTech.mediaFile, settings);
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
      if (lastVolume !== currentVolume) {
        if (currentVolume === 0 && lastVolume > 0) {
          tracker.trackMute();
        }

        if (currentVolume > 0 && lastVolume === 0) {
          tracker.trackUnmute();
        }

        player.volume(currentVolume);
      }
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
      var lastVolume = player.volume();
      adUnit.getAdVolume(function (error, vol) {
        if (error) {
          logError(error);
        } else {
          if (lastVolume !== vol) {
            player.volume(vol);
          }
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
  if (error) {
    logger.error ('ERROR: ' + error.message, error);
  }
}

module.exports = VPAIDIntegrator;

},{"../../utils/async":40,"../../utils/consoleLogger":41,"../../utils/dom":42,"../../utils/mimetypes":44,"../../utils/playerUtils":45,"../../utils/utilityFunctions":47,"../vast/VASTError":23,"../vast/VASTResponse":25,"../vast/VASTTracker":26,"../vast/vastUtil":30,"./VPAIDAdUnitWrapper":31}],35:[function(require,module,exports){
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
},{"../../utils/dom":42}],36:[function(require,module,exports){
'use strict';

var baseVideoJsComponent = videojs.Component;

var AdsLabel = require('./ads-label')(baseVideoJsComponent);

videojs.AdsLabel = videojs.Component.extend(AdsLabel);

},{"./ads-label":35}],37:[function(require,module,exports){
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
},{}],38:[function(require,module,exports){
'use strict';

var baseVideoJsComponent = videojs.Component;

var BlackPoster = require('./black-poster')(baseVideoJsComponent);

videojs.BlackPoster = videojs.Component.extend(BlackPoster);

},{"./black-poster":37}],39:[function(require,module,exports){
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

var logger = require ('../utils/consoleLogger');

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
    vpaidFlashLoaderPath: '/VPAIDFlash.swf',

    // verbosity of console logging:
    // 0 - error
    // 1 - error, warn
    // 2 - error, warn, info
    // 3 - error, warn, info, log
    // 4 - error, warn, info, log, debug
    verbosity: 0
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

  logger.setVerbosity (settings.verbosity);

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
      getVastResponse,
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
    logger.debug ("calling adIntegrator.playAd() with vastResponse:", vastResponse);

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
    logger.error ('AD ERROR:', error.message, error, vastResponse);
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
},{"../ads/vast/VASTClient":22,"../ads/vast/VASTError":23,"../ads/vast/VASTIntegrator":24,"../ads/vast/vastUtil":30,"../ads/vpaid/VPAIDIntegrator":34,"../utils/async":40,"../utils/consoleLogger":41,"../utils/dom":42,"../utils/playerUtils":45,"../utils/utilityFunctions":47}],40:[function(require,module,exports){
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


},{"./utilityFunctions":47}],41:[function(require,module,exports){
/*jshint unused:false */
"use strict";

var _verbosity = 0;
var _prefix = "[videojs-vast-vpaid] ";

function setVerbosity (v)
{
    _verbosity = v;
}

function handleMsg (method, args)
{
    if ((args.length) > 0 && (typeof args[0] === 'string'))
    {
        args[0] = _prefix + args[0];
    }

    if (method.apply)
    {
        method.apply (console, Array.prototype.slice.call(args));
    }
    else
    {
        method (Array.prototype.slice.call(args));
    }
}

function debug ()
{
    if (_verbosity < 4)
    {
        return;
    }

    if (typeof console.debug === 'undefined')
    {
        // IE 10 doesn't have a console.debug() function
        handleMsg (console.log, arguments);
    }
    else
    {
        handleMsg (console.debug, arguments);
    }
}

function log ()
{
    if (_verbosity < 3)
    {
        return;
    }

    handleMsg (console.log, arguments);
}

function info ()
{
    if (_verbosity < 2)
    {
        return;
    }

    handleMsg (console.info, arguments);
}


function warn ()
{
    if (_verbosity < 1)
    {
        return;
    }

    handleMsg (console.warn, arguments);
}

function error ()
{
    handleMsg (console.error, arguments);
}

var consoleLogger = {
    setVerbosity: setVerbosity,
    debug: debug,
    log: log,
    info: info,
    warn: warn,
    error: error
};

if ((typeof (console) === 'undefined') || !console.log)
{
    // no console available; make functions no-op
    consoleLogger.debug = function () {};
    consoleLogger.log = function () {};
    consoleLogger.info = function () {};
    consoleLogger.warn = function () {};
    consoleLogger.error = function () {};
}

module.exports = consoleLogger;
},{}],42:[function(require,module,exports){
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
},{"./utilityFunctions":47}],43:[function(require,module,exports){
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

},{"./urlUtils":46,"./utilityFunctions":47}],44:[function(require,module,exports){
'use strict';

module.exports = {
  html5: [
    'text/javascript',
    'text/javascript1.0',
    'text/javascript1.2',
    'text/javascript1.4',
    'text/jscript',
    'application/javascript',
    'application/x-javascript',
    'text/ecmascript',
    'text/ecmascript1.0',
    'text/ecmascript1.2',
    'text/ecmascript1.4',
    'text/livescript',
    'application/ecmascript',
    'application/x-ecmascript',
  ],

  flash: [
    'application/x-shockwave-flash'
  ],
};

},{}],45:[function(require,module,exports){
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
},{"./dom":42,"./utilityFunctions":47}],46:[function(require,module,exports){
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

},{"./utilityFunctions":47}],47:[function(require,module,exports){
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

function isString(str) {
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

},{}],48:[function(require,module,exports){
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
  if (!utilities.isString(str)) return undefined;

  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

xml.decode = function decodeXML(str) {
  if (!utilities.isString(str)) return undefined;

  return str.replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&');
};

module.exports = xml;

},{"./utilityFunctions":47}],49:[function(require,module,exports){
'use strict';

require('./plugin/components/ads-label_4');
require('./plugin/components/black-poster_4');

var videoJsVAST = require('./plugin/videojs.vast.vpaid');

videojs.plugin('vastClient', videoJsVAST);


},{"./plugin/components/ads-label_4":36,"./plugin/components/black-poster_4":38,"./plugin/videojs.vast.vpaid":39}]},{},[49])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xcSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50c1xcVlBBSURGTEFTSENsaWVudFxcanNcXFZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50c1xcVlBBSURGTEFTSENsaWVudFxcanNcXFZQQUlERkxBU0hDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xcZmxhc2hUZXN0ZXIuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xcanNGbGFzaEJyaWRnZS5qcyIsImJvd2VyX2NvbXBvbmVudHNcXFZQQUlERkxBU0hDbGllbnRcXGpzXFxqc0ZsYXNoQnJpZGdlUmVnaXN0cnkuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xccmVnaXN0cnkuanMiLCJib3dlcl9jb21wb25lbnRzXFxWUEFJREZMQVNIQ2xpZW50XFxqc1xcdXRpbHMuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvc3Vic2NyaWJlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvVlBBSURIVE1MNUNsaWVudC9qcy91dGlscy5qcyIsImJvd2VyX2NvbXBvbmVudHMvc3dmb2JqZWN0L3N3Zm9iamVjdC9zcmMvc3dmb2JqZWN0LmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvQWQuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9Db21wYW5pb24uanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9DcmVhdGl2ZS5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0luTGluZS5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0xpbmVhci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L01lZGlhRmlsZS5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1RyYWNraW5nRXZlbnQuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUQ2xpZW50LmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVEVycm9yLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVEludGVncmF0b3IuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUUmVzcG9uc2UuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WQVNUVHJhY2tlci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZpZGVvQ2xpY2tzLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvV3JhcHBlci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L3BhcnNlcnMuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC92YXN0VXRpbC5qcyIsInNyYy9zY3JpcHRzL2Fkcy92cGFpZC9WUEFJREFkVW5pdFdyYXBwZXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURGbGFzaFRlY2guanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURIVE1MNVRlY2guanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURJbnRlZ3JhdG9yLmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYWRzLWxhYmVsLmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYWRzLWxhYmVsXzQuanMiLCJzcmMvc2NyaXB0cy9wbHVnaW4vY29tcG9uZW50cy9ibGFjay1wb3N0ZXIuanMiLCJzcmMvc2NyaXB0cy9wbHVnaW4vY29tcG9uZW50cy9ibGFjay1wb3N0ZXJfNC5qcyIsInNyYy9zY3JpcHRzL3BsdWdpbi92aWRlb2pzLnZhc3QudnBhaWQuanMiLCJzcmMvc2NyaXB0cy91dGlscy9hc3luYy5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL2NvbnNvbGVMb2dnZXIuanMiLCJzcmMvc2NyaXB0cy91dGlscy9kb20uanMiLCJzcmMvc2NyaXB0cy91dGlscy9odHRwLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvbWltZXR5cGVzLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvcGxheWVyVXRpbHMuanMiLCJzcmMvc2NyaXB0cy91dGlscy91cmxVdGlscy5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMuanMiLCJzcmMvc2NyaXB0cy91dGlscy94bWwuanMiLCJzcmMvc2NyaXB0cy92aWRlb2pzXzQudmFzdC52cGFpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SSxBQUdhLHVCLEFBQUE7Ozs7Ozs7Ozs7MkNBSTBEO2dCQUFsRCxBQUFrRCwyRUFBN0IsQUFBNkIsa0JBQUE7Z0JBQXRCLEFBQXNCLGlFQUFYLEFBQVcsc0JBQUU7Ozs7Ozs7K0IsQUFHN0QsTyxBQUFPLFEsQUFBUSxVLEFBQVUsZ0JBQTJHO2dCQUEzRixBQUEyRixxRUFBNUUsRUFBQyxjQUFELEFBQWMsQUFBOEQsaUJBQUE7Z0JBQXpELEFBQXlELHdFQUF2QyxFQUFDLFdBQUQsQUFBWSxBQUEyQixpQkFBQTtnQkFBdEIsQUFBc0IsaUVBQVgsQUFBVyxzQkFBRTs7OztpQyxBQUNySSxPLEFBQU8sUSxBQUFRLFVBQWdDO2dCQUF0QixBQUFzQixpRUFBWCxBQUFXLHNCQUFFOzs7O2tDQUU1QjtnQkFBdEIsQUFBc0IsaUVBQVgsQUFBVyxzQkFBRTs7OztpQ0FDSDtnQkFBdEIsQUFBc0IsaUVBQVgsQUFBVyxzQkFBRTs7OztrQ0FDRDtnQkFBdEIsQUFBc0IsaUVBQVgsQUFBVyxzQkFBRTs7OzttQ0FDRDtnQkFBdEIsQUFBc0IsaUVBQVgsQUFBVyxzQkFBRTs7OzttQ0FDRjtnQkFBdEIsQUFBc0IsaUVBQVgsQUFBVyxzQkFBRTs7OztxQ0FDQTtnQkFBdEIsQUFBc0IsaUVBQVgsQUFBVyxzQkFBRTs7OztpQ0FDTjtnQkFBdEIsQUFBc0IsaUVBQVgsQUFBVyxzQkFBRTs7Ozs7OztvQyxBQUduQixVQUFVLEFBQUU7OzttQyxBQUNiLFVBQVUsQUFBRTs7O29DLEFBQ1gsVUFBVSxBQUFFOzs7c0MsQUFDVixVQUFVLEFBQUU7Ozs0QyxBQUNOLFVBQVUsQUFBRTs7OzJDLEFBQ2IsVUFBVSxBQUFFOzs7c0MsQUFDakIsVUFBVSxBQUFFOzs7b0MsQUFDZCxhQUFtQztnQkFBdEIsQUFBc0IsaUVBQVgsQUFBVyxzQkFBRTs7OztvQyxBQUNyQyxVQUFVLEFBQUU7Ozt3QyxBQUNSLFVBQVUsQUFBRTs7O21DLEFBQ2pCLFVBQVUsQUFBRTs7Ozs7O0FBRzNCLE9BQUEsQUFBTyxlQUFQLEFBQXNCLGNBQXRCLEFBQW9DO2NBQVUsQUFDaEMsQUFDVjtrQkFGMEMsQUFFNUIsQUFDZDtXQUFPLENBQUEsQUFDSCxZQURHLEFBRUgsYUFGRyxBQUdILGFBSEcsQUFJSCxhLEFBSkcsQUFLSCxBQUNBO0EsQUFORyxBQU9IO0FBUEcsc0IsQUFBQSxBQVFILEFBQ0E7QUFURyx3QixBQUFBLEFBVUgsQUFDQTtBQVhHLHNCQUFBLEFBWUgsZ0JBWkcsQUFhSCxnQkFiRyxBQWNILHdCQWRHLEFBZUgsbUJBZkcsQUFnQkgsd0JBaEJHLEFBaUJILG1CQWpCRyxBQWtCSCxlLEFBbEJHLEFBbUJILEFBQ0E7QUFwQkcsOEJBQUEsQUFxQkgsa0JBckJHLEFBc0JILGVBdEJHLEFBdUJILFlBdkJHLEFBd0JILGFBeEJHLEFBeUJILFNBNUJSLEFBQThDLEFBR25DLEFBMEJIO0FBN0JzQyxBQUMxQzs7O0FDcENKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLGVBQWUsUUFBQSxBQUFRLGtCQUEzQixBQUE2QztBQUM3QyxJQUFJLDJCQUFvQixBQUFPLG9CQUFvQixhQUEzQixBQUF3QyxXQUF4QyxBQUFtRCxPQUFPLFVBQUEsQUFBVSxVQUFVLEFBQ2xHO1dBQU8sQ0FBQSxBQUFDLGVBQUQsQUFBZ0IsUUFBaEIsQUFBd0IsY0FBYyxDQUE3QyxBQUE4QyxBQUNqRDtBQUZELEFBQXdCLENBQUE7O0ksQUFJWCxzQixBQUFBOzJCQUNUOzt5QkFBQSxBQUFhLE9BQU87OEJBQUE7OzZGQUVoQjs7Y0FBQSxBQUFLLGFBQUwsQUFBa0IsQUFDbEI7Y0FBQSxBQUFLLFNBSFcsQUFHaEIsQUFBYztlQUNqQjs7Ozs7bUNBRVU7eUJBQ1A7O2lCQUFBLEFBQUssYUFBTCxBQUFrQixBQUNsQjs4QkFBQSxBQUFrQixRQUFRLFVBQUEsQUFBQyxZQUFlLEFBQ3RDO3VCQUFBLEFBQUssT0FBTCxBQUFZLDJCQUFaLEFBQXVDLEFBQzFDO0FBRkQsQUFHQTt5QkFBQSxBQUFhLE9BQWIsQUFBb0IsUUFBUSxVQUFBLEFBQUMsT0FBVSxBQUNuQzt1QkFBQSxBQUFLLE9BQUwsQUFBWSxTQUFaLEFBQXFCLEFBQ3hCO0FBRkQsQUFJQTs7aUJBQUEsQUFBSyxTQUFMLEFBQWMsQUFDakI7Ozs7c0NBRWMsQUFDWDttQkFBTyxLQUFQLEFBQVksQUFDZjs7OzsyQixBQUVFLFcsQUFBVyxVQUFVLEFBQ3BCO2lCQUFBLEFBQUssT0FBTCxBQUFZLEdBQVosQUFBZSxXQUFmLEFBQTBCLEFBQzdCOzs7OzRCLEFBRUcsVyxBQUFXLFVBQVUsQUFDckI7aUJBQUEsQUFBSyxPQUFMLEFBQVksSUFBWixBQUFnQixXQUFoQixBQUEyQixBQUM5Qjs7Ozs7OzsyQ0FHa0U7Z0JBQWxELEFBQWtELDJFQUE3QixBQUE2QixrQkFBQTtnQkFBdEIsQUFBc0IsaUVBQVgsQUFBVyxzQkFDL0Q7O2lCQUFBLEFBQUssT0FBTCxBQUFZLGdCQUFaLEFBQTRCLG9CQUFvQixDQUFoRCxBQUFnRCxBQUFDLHFCQUFqRCxBQUFzRSxBQUN6RTs7OzsrQixBQUNPLE8sQUFBTyxRLEFBQVEsVSxBQUFVLGdCQUE0RztnQkFBNUYsQUFBNEYscUVBQTdFLEVBQUMsY0FBRCxBQUFlLEFBQThELGlCQUFBO2dCQUF6RCxBQUF5RCx3RUFBdkMsRUFBQyxXQUFELEFBQVksQUFBMkIsaUJBQUE7Z0JBQXRCLEFBQXNCLGlFQUFYLEFBQVcsc0JBRXpJOzs7aUJBQUEsQUFBSyxPQUFMLEFBQVksUUFBWixBQUFvQixPQUFwQixBQUEyQixBQUMzQjsyQkFBZSxnQkFBZ0IsRUFBQyxjQUFoQyxBQUErQixBQUFlLEFBQzlDOzhCQUFrQixtQkFBbUIsRUFBQyxXQUF0QyxBQUFxQyxBQUFZLEFBRWpEOztpQkFBQSxBQUFLLE9BQUwsQUFBWSxnQkFBWixBQUE0QixVQUFVLENBQUMsS0FBQSxBQUFLLE9BQU4sQUFBQyxBQUFZLFlBQVksS0FBQSxBQUFLLE9BQTlCLEFBQXlCLEFBQVksYUFBckMsQUFBa0QsVUFBbEQsQUFBNEQsZ0JBQWdCLGFBQUEsQUFBYSxnQkFBekYsQUFBeUcsSUFBSSxnQkFBQSxBQUFnQixhQUFuSyxBQUFzQyxBQUEwSSxLQUFoTCxBQUFxTCxBQUN4TDs7OztpQyxBQUNRLE8sQUFBTyxRLEFBQVEsVUFBZ0M7Z0JBQXRCLEFBQXNCLGlFQUFYLEFBQVcsc0JBRXBEOzs7aUJBQUEsQUFBSyxPQUFMLEFBQVksUUFBWixBQUFvQixPQUFwQixBQUEyQixBQUczQjs7O2lCQUFBLEFBQUssT0FBTCxBQUFZLGdCQUFaLEFBQTRCLFlBQVksQ0FBQyxLQUFBLEFBQUssT0FBTixBQUFDLEFBQVksWUFBWSxLQUFBLEFBQUssT0FBOUIsQUFBeUIsQUFBWSxhQUE3RSxBQUF3QyxBQUFrRCxXQUExRixBQUFxRyxBQUN4Rzs7OztrQ0FDNkI7Z0JBQXRCLEFBQXNCLGlFQUFYLEFBQVcsc0JBQzFCOztpQkFBQSxBQUFLLE9BQUwsQUFBWSxnQkFBWixBQUE0QixXQUE1QixBQUF1QyxJQUF2QyxBQUEyQyxBQUM5Qzs7OztpQ0FDNEI7Z0JBQXRCLEFBQXNCLGlFQUFYLEFBQVcsc0JBQ3pCOztpQkFBQSxBQUFLLE9BQUwsQUFBWSxnQkFBWixBQUE0QixVQUE1QixBQUFzQyxJQUF0QyxBQUEwQyxBQUM3Qzs7OztrQ0FDNkI7Z0JBQXRCLEFBQXNCLGlFQUFYLEFBQVcsc0JBQzFCOztpQkFBQSxBQUFLLE9BQUwsQUFBWSxnQkFBWixBQUE0QixXQUE1QixBQUF1QyxJQUF2QyxBQUEyQyxBQUM5Qzs7OzttQ0FDOEI7Z0JBQXRCLEFBQXNCLGlFQUFYLEFBQVcsc0JBQzNCOztpQkFBQSxBQUFLLE9BQUwsQUFBWSxnQkFBWixBQUE0QixZQUE1QixBQUF3QyxJQUF4QyxBQUE0QyxBQUMvQzs7OzttQ0FDOEI7Z0JBQXRCLEFBQXNCLGlFQUFYLEFBQVcsc0JBQzNCOztpQkFBQSxBQUFLLE9BQUwsQUFBWSxnQkFBWixBQUE0QixZQUE1QixBQUF3QyxJQUF4QyxBQUE0QyxBQUMvQzs7OztxQ0FDZ0M7Z0JBQXRCLEFBQXNCLGlFQUFYLEFBQVcsc0JBQzdCOztpQkFBQSxBQUFLLE9BQUwsQUFBWSxnQkFBWixBQUE0QixjQUE1QixBQUEwQyxJQUExQyxBQUE4QyxBQUNqRDs7OztpQ0FDNEI7Z0JBQXRCLEFBQXNCLGlFQUFYLEFBQVcsc0JBQ3pCOztpQkFBQSxBQUFLLE9BQUwsQUFBWSxnQkFBWixBQUE0QixVQUE1QixBQUFzQyxJQUF0QyxBQUEwQyxBQUM3Qzs7Ozs7OztvQyxBQUdXLFVBQVUsQUFDbEI7aUJBQUEsQUFBSyxPQUFMLEFBQVksZ0JBQVosQUFBNEIsZUFBNUIsQUFBMkMsSUFBM0MsQUFBK0MsQUFDbEQ7Ozs7bUMsQUFDVSxVQUFVLEFBQ2pCO2lCQUFBLEFBQUssT0FBTCxBQUFZLGdCQUFaLEFBQTRCLGNBQTVCLEFBQTBDLElBQTFDLEFBQThDLEFBQ2pEOzs7O29DLEFBQ1csVUFBVSxBQUNsQjtpQkFBQSxBQUFLLE9BQUwsQUFBWSxnQkFBWixBQUE0QixlQUE1QixBQUEyQyxJQUEzQyxBQUErQyxBQUNsRDs7OztzQyxBQUNhLFVBQVUsQUFDcEI7aUJBQUEsQUFBSyxPQUFMLEFBQVksZ0JBQVosQUFBNEIsaUJBQTVCLEFBQTZDLElBQTdDLEFBQWlELEFBQ3BEOzs7OzRDLEFBQ21CLFVBQVUsQUFDMUI7aUJBQUEsQUFBSyxPQUFMLEFBQVksZ0JBQVosQUFBNEIsdUJBQTVCLEFBQW1ELElBQW5ELEFBQXVELEFBQzFEOzs7OzJDLEFBQ2tCLFVBQVUsQUFDekI7aUJBQUEsQUFBSyxPQUFMLEFBQVksZ0JBQVosQUFBNEIsc0JBQTVCLEFBQWtELElBQWxELEFBQXNELEFBQ3pEOzs7O3NDLEFBQ2EsVUFBVSxBQUNwQjtpQkFBQSxBQUFLLE9BQUwsQUFBWSxnQkFBWixBQUE0QixpQkFBNUIsQUFBNkMsSUFBN0MsQUFBaUQsQUFDcEQ7Ozs7b0MsQUFDVyxRQUE4QjtnQkFBdEIsQUFBc0IsaUVBQVgsQUFBVyxzQkFDdEM7O2lCQUFBLEFBQUssT0FBTCxBQUFZLGdCQUFaLEFBQTRCLGVBQWUsQ0FBM0MsQUFBMkMsQUFBQyxTQUE1QyxBQUFxRCxBQUN4RDs7OztvQyxBQUNXLFVBQVUsQUFDbEI7aUJBQUEsQUFBSyxPQUFMLEFBQVksZ0JBQVosQUFBNEIsZUFBNUIsQUFBMkMsSUFBM0MsQUFBK0MsQUFDbEQ7Ozs7d0MsQUFDZSxVQUFVLEFBQ3RCO2lCQUFBLEFBQUssT0FBTCxBQUFZLGdCQUFaLEFBQTRCLG1CQUE1QixBQUErQyxJQUEvQyxBQUFtRCxBQUN0RDs7OzttQyxBQUNVLFVBQVUsQUFDakI7aUJBQUEsQUFBSyxPQUFMLEFBQVksZ0JBQVosQUFBNEIsY0FBNUIsQUFBMEMsSUFBMUMsQUFBOEMsQUFDakQ7Ozs7O0UsQUF6RzRCOzs7QUNQakM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sWUFBWSxRQUFsQixBQUFrQixBQUFROztBQUUxQixJQUFNLGdCQUFnQixRQUFBLEFBQVEsbUJBQTlCLEFBQWlEO0FBQ2pELElBQU0sY0FBYyxRQUFBLEFBQVEsaUJBQTVCLEFBQTZDOztBQUU3QyxJQUFNLE9BQU8sUUFBQSxBQUFRLFdBQXJCLEFBQWdDO0FBQ2hDLElBQU0sa0JBQWtCLFFBQUEsQUFBUSxXQUFoQyxBQUEyQztBQUMzQyxJQUFNLGdCQUFnQixRQUFBLEFBQVEsV0FBOUIsQUFBeUM7QUFDekMsSUFBTSxzQkFBc0IsUUFBQSxBQUFRLFdBQXBDLEFBQStDO0FBQy9DLElBQU0sY0FBYyxRQUFBLEFBQVEsV0FBUixBQUFtQixPQUF2QyxBQUFvQixBQUEwQjtBQUM5QyxJQUFNLG9CQUFvQixRQUFBLEFBQVEsb0JBQWxDLEFBQXNEOztBQUV0RCxJQUFNLFFBQU4sQUFBYztBQUNkLElBQU0sZ0JBQU4sQUFBc0I7O0FBRXRCLElBQUksZ0JBQWUsYUFBYSx1QkFBQTtlQUFBLEFBQUs7QSxBQUFyQyxBQUFrQixLQUFBOztJLEFBRVosK0JBQ0Y7OEJBQUEsQUFBYSxlQUFiLEFBQTRCLFVBQWtSO1lBQXhRLEFBQXdRLGtFQUE1UCxFQUFDLE1BQUQsQUFBTyxrQkFBa0IsT0FBekIsQUFBZ0MsS0FBSyxRQUFyQyxBQUE2QyxBQUErTSxrQkFBQTs7b0JBQUE7O1lBQXpNLEFBQXlNLCtEQUFoTSxFQUFFLE9BQUYsQUFBUyxlQUFlLFFBQXhCLEFBQWdDLE1BQU0sT0FBdEMsQUFBNkMsUUFBUSxtQkFBckQsQUFBd0UsVUFBVSxPQUFsRixBQUF5RixXQUFXLGlCQUFwRyxBQUFxSCxRQUFRLFNBQTdILEFBQXNJLEFBQTBELHFCQUFBO1lBQWpELEFBQWlELHFFQUFsQyxFQUFFLE9BQUYsQUFBUyxPQUFPLFNBQWhCLEFBQXlCLEFBQVMsb0JBQUE7OzhCQUUxUzs7WUFBSSxLQUFKLEFBQVMsQUFFVDs7YUFBQSxBQUFLLGlCQUFMLEFBQXNCLEFBQ3RCO2FBQUEsQUFBSyxXQUFMLEFBQWdCLEFBQ2hCO2FBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ2xCO21CQUFXLFlBQVgsQUFBdUIsQUFFdkI7O2tCQUFBLEFBQVUsUUFBUSxjQUFjLFVBQWQsQUFBd0IsT0FBMUMsQUFBa0IsQUFBK0IsQUFDakQ7a0JBQUEsQUFBVSxTQUFTLGNBQWMsVUFBZCxBQUF3QixRQUEzQyxBQUFtQixBQUFnQyxBQUVuRDs7NEJBQUEsQUFBb0IsZUFBZSxLQUFuQyxBQUF3QyxVQUF4QyxBQUFrRCxBQUVsRDs7ZUFBQSxBQUFPLFFBQVEsVUFBZixBQUF5QixBQUN6QjtlQUFBLEFBQU8seUJBQXVCLEtBQTlCLEFBQW1DLHlCQUFvQixjQUF2RCxBQUFxRSxrQ0FBNkIsYUFBbEcsQUFBK0cscUJBQWdCLE9BQS9ILEFBQXNJLEFBRXRJOztZQUFJLENBQUMsaUJBQUwsQUFBSyxBQUFpQixlQUFlLEFBQ2pDO21CQUFPLFFBQVEsc0ZBQWYsQUFBTyxBQUE4RixBQUN4RztBQUVEOzthQUFBLEFBQUssS0FBSyxVQUFBLEFBQVUsVUFBVixBQUFvQixXQUFwQixBQUErQixRQUFRLEtBQWpELEFBQVUsQUFBNEMsQUFFdEQ7O1lBQUksQ0FBQyxLQUFMLEFBQVUsSUFBSSxBQUNWO21CQUFPLFFBQVAsQUFBTyxBQUFTLEFBQ25CO0FBRUQ7O1lBQUksMEJBQTBCLGFBQWhCLEFBQTZCLFNBQ3ZDLFVBQUEsQUFBQyxLQUFELEFBQU0sTUFBUyxBQUNYOzhCQUFBLEFBQWtCLEtBQ2xCO3FCQUFBLEFBQVMsS0FBVCxBQUFjLEFBQ2pCO0FBSlMsU0FBQSxFQUlQLFlBQU0sQUFDTDtxQkFBUyw4QkFBOEIsYUFBdkMsQUFBb0QsQUFDdkQ7QUFOTCxBQUFjLEFBU2Q7O2FBQUEsQUFBSyxTQUFTLElBQUEsQUFBSSxjQUFjLEtBQWxCLEFBQXVCLElBQUksVUFBM0IsQUFBcUMsTUFBTSxLQUEzQyxBQUFnRCxVQUFVLFVBQTFELEFBQW9FLE9BQU8sVUFBM0UsQUFBcUYsUUFBbkcsQUFBYyxBQUE2RixBQUUzRzs7aUJBQUEsQUFBUyxRQUFULEFBQWlCLE9BQU8sQUFDcEI7dUJBQVcsWUFBTSxBQUNiO3lCQUFTLElBQUEsQUFBSSxNQUFiLEFBQVMsQUFBVSxBQUN0QjtBQUZELGVBQUEsQUFFRyxBQUNIO21CQUFBLEFBQU8sQUFDVjtBQUVKOzs7OztrQ0FFVSxBQUNQO2lCQUFBLEFBQUssQUFFTDs7Z0JBQUksS0FBSixBQUFTLFFBQVEsQUFDYjtxQkFBQSxBQUFLLE9BQUwsQUFBWSxBQUNaO3FCQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2pCO0FBQ0Q7aUJBQUEsQUFBSyxLQUFMLEFBQVUsQUFDVjtpQkFBQSxBQUFLLGFBQUwsQUFBa0IsQUFDckI7Ozs7c0NBRWMsQUFDWDttQkFBTyxLQUFQLEFBQVksQUFDZjs7Ozt5Q0FFZ0IsQUFDYjttQkFBTyxLQUFQLEFBQVksQUFFWjs7Z0JBQUksS0FBSixBQUFTLGFBQWEsQUFDbEI7cUJBQUEsQUFBSyxjQUFMLEFBQW1CLEFBQ25CO3FCQUFBLEFBQUssT0FBTCxBQUFZLGVBQWUsS0FBM0IsQUFBZ0MsQUFDbkM7QUFFRDs7Z0JBQUksS0FBSixBQUFTLFNBQVMsQUFDZDtxQkFBQSxBQUFLLFFBQUwsQUFBYSxBQUNiO3FCQUFBLEFBQUssVUFBTCxBQUFlLEFBQ2xCO0FBQ0o7Ozs7bUMsQUFFVSxPLEFBQU8sVUFBVTt5QkFDeEI7OzhCQUFBLEFBQWtCLEtBQWxCLEFBQXVCLEFBRXZCOztnQkFBSSxLQUFKLEFBQVMsU0FBUyxBQUNkO3FCQUFBLEFBQUssQUFDUjtBQUVEOztnQkFBSSxLQUFBLEFBQUssT0FBVCxBQUFJLEFBQVksV0FBVyxBQUN2QjtxQkFBQSxBQUFLLGNBQWMsVUFBQSxBQUFDLEtBQUQsQUFBTSxTQUFZLEFBQ2pDO3dCQUFJLENBQUosQUFBSyxLQUFLLEFBQ047K0JBQUEsQUFBSyxVQUFVLElBQUEsQUFBSSxZQUFZLE9BQS9CLEFBQWUsQUFBcUIsQUFDdkM7QUFDRDsyQkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDbkI7NkJBQUEsQUFBUyxLQUFLLE9BQWQsQUFBbUIsQUFDdEI7QUFORCxBQVFBOztxQkFBQSxBQUFLLE9BQUwsQUFBWSxnQkFBWixBQUE0QixjQUFjLENBQTFDLEFBQTBDLEFBQUMsUUFBUSxLQUFuRCxBQUF3RCxBQUMzRDtBQVZELG1CQVVNLEFBQ0Y7cUJBQUEsQUFBSyxhQUFhLEVBQUMsS0FBRCxBQUFNLE9BQU8sVUFBL0IsQUFBa0IsQUFDckI7QUFDSjs7Ozt1Q0FFa0M7Z0JBQXRCLEFBQXNCLGlFQUFYLEFBQVcsc0JBQy9COzs4QkFBQSxBQUFrQixLQUFsQixBQUF1QixBQUV2Qjs7aUJBQUEsQUFBSyxBQUNMO2lCQUFBLEFBQUssT0FBTCxBQUFZLGdCQUFaLEFBQTRCLGdCQUE1QixBQUE0QyxJQUE1QyxBQUFnRCxBQUNuRDs7OztxQ0FDWSxBQUNUOzhCQUFBLEFBQWtCLEtBQWxCLEFBQXVCLEFBQ3ZCO21CQUFPLEtBQUEsQUFBSyxPQUFaLEFBQU8sQUFBWSxBQUN0Qjs7OztzQ0FDYSxBQUNWOzhCQUFBLEFBQWtCLEtBQWxCLEFBQXVCLEFBQ3ZCO21CQUFPLEtBQUEsQUFBSyxPQUFaLEFBQU8sQUFBWSxBQUN0Qjs7Ozs7OztBQUdMLGtCQUFBLEFBQWtCLGVBQWUsWUFBTSxBQUNuQztXQUFPLFVBQUEsQUFBVSxzQkFBVixBQUFnQyxrQkFBa0IsWUFBekQsQUFBeUQsQUFBWSxBQUN4RTtBQUZELEdBQUEsQUFFRzs7QUFFSCxrQkFBQSxBQUFrQixnQkFBZ0IsVUFBQSxBQUFDLFdBQWMsQUFDN0M7a0JBQWMsa0JBQWtCLFNBQWxCLEFBQTJCLE1BQXpDLEFBQWMsQUFBaUMsQUFDbEQ7QUFGRDs7QUFJQSxTQUFBLEFBQVMsb0JBQW9CLEFBQ3pCO1FBQUcsS0FBSCxBQUFRLFlBQVksQUFDaEI7Y0FBTSxJQUFBLEFBQUksTUFBVixBQUFNLEFBQVUsQUFDbkI7QUFDSjs7O0FBRUQsU0FBQSxBQUFTLG9CQUFvQixBQUN6QjtRQUFJLEtBQUosQUFBUyxZQUFZLEFBQ2pCO2FBQUEsQUFBSyxXQUFXLEtBQUEsQUFBSyxXQUFyQixBQUFnQyxLQUFLLEtBQUEsQUFBSyxXQUExQyxBQUFxRCxBQUNyRDtlQUFPLEtBQVAsQUFBWSxBQUNmO0FBQ0o7OztBQUVELFNBQUEsQUFBUyxrQkFBVCxBQUEyQixjQUEzQixBQUF5QyxPQUF5QjtRQUFsQixBQUFrQixpRUFBUCxBQUFPLGtCQUM5RDs7V0FBQSxBQUFPLGVBQVAsQUFBc0Isa0JBQXRCLEFBQXdDO2tCQUFjLEFBQ3hDLEFBQ1Y7c0JBRmtELEFBRXBDLEFBQ2Q7ZUFISixBQUFzRCxBQUczQyxBQUVkO0FBTHlELEFBQ2xEOzs7QUFNUixpQkFBQSxBQUFpQixZQUFqQixBQUE2Qjs7QUFFN0IsT0FBQSxBQUFPLFVBQVAsQUFBaUI7OztBQ3JLakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFlBQVksUUFBbEIsQUFBa0IsQUFBUTs7QUFFMUIsSUFBTSxhQUFOLEFBQW1CO0FBQ25CLElBQU0sZ0JBQU4sQUFBc0I7QUFDdEIsSUFBTSxnQkFBZ0IsUUFBQSxBQUFRLG1CQUE5QixBQUFpRDtBQUNqRCxJQUFNLFFBQVEsUUFBZCxBQUFjLEFBQVE7QUFDdEIsSUFBTSx5QkFBeUIsUUFBQSxBQUFRLGNBQXZDLEFBQXFEOztJLEFBRS9DLDBCQUNGO3lCQUFBLEFBQVksUUFBdUU7b0JBQUE7O1lBQS9ELEFBQStELGtFQUFuRCxFQUFDLE1BQUQsQUFBTyxrQkFBa0IsT0FBekIsQUFBZ0MsS0FBSyxRQUFyQyxBQUE2QyxBQUFNLGtCQUFBOzs4QkFDL0U7O2FBQUEsQUFBSyxXQUFXLE1BQUEsQUFBTSxvQkFBTixBQUEwQixRLEFBQTFDLEFBQWdCLEFBQWtDLEFBQ2xEO2NBQUEsQUFBTSxZQUFZLEtBQWxCLEFBQXVCLEFBQ3ZCO1lBQUksU0FBSixBQUFhLEFBQ2I7ZUFBQSxBQUFPLFFBQVEsVUFBZixBQUF5QixBQUN6QjtlQUFBLEFBQU8seUJBQVAsQUFBOEIsOEJBQXlCLGNBQXZELEFBQXFFLEFBQ3JFO2VBQUEsQUFBTyxvQkFBUCxBQUEyQixBQUUzQjs7YUFBQSxBQUFLLEtBQUssVUFBQSxBQUFVLFVBQVYsQUFBb0IsV0FBcEIsQUFBK0IsUUFBekMsQUFBVSxBQUF1QyxBQUNqRDthQUFBLEFBQUssWUFBWSxJQUFqQixBQUFpQixBQUFJLEFBQ3JCO2FBQUEsQUFBSyxlQUFMLEFBQW9CLEFBQ3BCO1lBQUksS0FBSixBQUFTLElBQUksQUFDVDtrQkFBQSxBQUFNLFlBQVksS0FBbEIsQUFBdUIsQUFDdkI7aUJBQUEsQUFBSyxhQUFTLEFBQUksY0FBYyxLQUFsQixBQUF1QixJQUFJLFVBQTNCLEFBQXFDLE1BQXJDLEFBQTJDLGVBQWUsVUFBMUQsQUFBb0UsT0FBTyxVQUEzRSxBQUFxRixRQUFRLFlBQUssQUFDNUc7b0JBQU0sVUFBTixBQUFnQixBQUNoQjtzQkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFDcEI7c0JBQUEsQUFBSyxVQUFMLEFBQWUsSUFBZixBQUFtQixVQUFuQixBQUE2QixRQUFRLFVBQUEsQUFBQyxVQUFhLEFBQy9DOytCQUFXLFlBQUssQUFDWjtpQ0FBQSxBQUFTLFVBQVQsQUFBbUIsQUFDdEI7QUFGRCx1QkFBQSxBQUVHLEFBQ047QUFKRCxBQUtIO0FBUkQsQUFBYyxBQVNqQixhQVRpQjtBQVVyQjs7Ozs7c0NBQ2EsQUFDVjttQkFBTyxLQUFQLEFBQVksQUFDZjs7OzsyQixBQUNFLFcsQUFBVyxVQUFVLEFBQ3BCO2lCQUFBLEFBQUssVUFBTCxBQUFlLElBQWYsQUFBbUIsV0FBbkIsQUFBOEIsQUFDakM7Ozs7Ozs7QUFHRSxJQUFJLGdEQUFvQixTQUFBLEFBQVMsa0JBQVQsQUFBMkIsSUFBM0IsQUFBK0IsV0FBVyxBQUNyRTtRQUFJLENBQUMsT0FBTCxBQUFLLEFBQU8sYUFBYSxBQUNyQjtlQUFBLEFBQU8sY0FBYyxJQUFBLEFBQUksWUFBSixBQUFnQixJQUFyQyxBQUFxQixBQUFvQixBQUM1QztBQUNEO1dBQU8sT0FBUCxBQUFPLEFBQU8sQUFDakI7QUFMTTs7O0FDM0NQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxTQUFTLFFBQUEsQUFBUSxXQUFyQixBQUFnQztBQUNoQyxJQUFJLGdCQUFnQixRQUFBLEFBQVEsV0FBNUIsQUFBdUM7QUFDdkMsSUFBSSxpQkFBaUIsUUFBQSxBQUFRLFdBQTdCLEFBQXdDO0FBQ3hDLElBQUksc0JBQXNCLFFBQUEsQUFBUSxjQUFsQyxBQUFnRDtBQUNoRCxJQUFJLHlCQUF5QixRQUFBLEFBQVEsY0FBckMsQUFBbUQ7QUFDbkQsSUFBTSxXQUFXLFFBQWpCLEFBQWlCLEFBQVE7QUFDekIsSUFBTSxzQkFBTixBQUE0QjtBQUM1QixJQUFNLFFBQU4sQUFBYzs7SSxBQUVELHdCLEFBQUEsNEJBQ1Q7MkJBQUEsQUFBYSxJQUFiLEFBQWlCLFVBQWpCLEFBQTJCLFNBQTNCLEFBQW9DLE9BQXBDLEFBQTJDLFFBQTNDLEFBQW1ELGVBQWU7OEJBQzlEOzthQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1g7YUFBQSxBQUFLLFdBQUwsQUFBZ0IsQUFDaEI7YUFBQSxBQUFLLFlBQUwsQUFBaUIsQUFDakI7YUFBQSxBQUFLLFNBQUwsQUFBYyxBQUNkO2FBQUEsQUFBSyxVQUFMLEFBQWUsQUFDZjthQUFBLEFBQUssWUFBWSxJQUFqQixBQUFpQixBQUFJLEFBQ3JCO2FBQUEsQUFBSyxhQUFhLElBQWxCLEFBQWtCLEFBQUksQUFDdEI7YUFBQSxBQUFLLDBCQUEwQixPQUFPLEtBQXRDLEFBQStCLEFBQVksQUFDM0M7YUFBQSxBQUFLLFNBQUwsQUFBYyxBQUNkO2FBQUEsQUFBSyxvQkFBTCxBQUF5QixBQUV6Qjs7aUJBQUEsQUFBUyxZQUFZLEtBQXJCLEFBQTBCLFVBQTFCLEFBQW9DLEFBQ3ZDOzs7OzsyQixBQUVFLFcsQUFBVyxVQUFVLEFBQ3BCO2lCQUFBLEFBQUssVUFBTCxBQUFlLElBQWYsQUFBbUIsV0FBbkIsQUFBOEIsQUFDakM7Ozs7NEIsQUFFRyxXLEFBQVcsVUFBVSxBQUNyQjttQkFBTyxLQUFBLEFBQUssVUFBTCxBQUFlLE9BQWYsQUFBc0IsV0FBN0IsQUFBTyxBQUFpQyxBQUMzQzs7OztpQyxBQUVRLFdBQVcsQUFDaEI7bUJBQU8sS0FBQSxBQUFLLFVBQUwsQUFBZSxZQUF0QixBQUFPLEFBQTJCLEFBQ3JDOzs7O2lDQUVRLEFBQ0w7bUJBQU8sS0FBQSxBQUFLLFVBQVosQUFBTyxBQUFlLEFBQ3pCOzs7O3dDLEFBRWUsWUFBNkM7Z0JBQWpDLEFBQWlDLDZEQUExQixBQUEwQixlQUFBO2dCQUF0QixBQUFzQixpRUFBWCxBQUFXLHNCQUN6RDs7Z0JBQUksYUFBSixBQUFpQixBQUVqQjs7Z0JBQUEsQUFBSSxVQUFVLEFBQ1Y7NkJBQWdCLEtBQWhCLEFBQWdCLEFBQUssa0NBQXJCLEFBQWtELEFBQ2xEO3FCQUFBLEFBQUssV0FBTCxBQUFnQixJQUFoQixBQUFvQixZQUFwQixBQUFnQyxBQUNuQztBQUdEOztnQkFBSSxBQUdBOzs7cUJBQUEsQUFBSyxJQUFMLEFBQVMsWUFBWSxDQUFBLEFBQUMsWUFBRCxBQUFhLE9BQWxDLEFBQXFCLEFBQW9CLEFBRTVDO0FBTEQsY0FLRSxPQUFBLEFBQU8sR0FBRyxBQUNSO29CQUFBLEFBQUksVUFBVSxBQUNWO21DQUFBLEFBQWUsS0FBZixBQUFvQixNQUFwQixBQUEwQixZQUExQixBQUFzQyxBQUN6QztBQUZELHVCQUVPLEFBR0g7Ozt5QkFBQSxBQUFLLFNBQUwsQUFBYyxPQUFkLEFBQXFCLEFBQ3hCO0FBQ0o7QUFDSjs7Ozt1QyxBQUVjLFVBQVUsQUFDckI7bUJBQU8sS0FBQSxBQUFLLFdBQUwsQUFBZ0IsY0FBdkIsQUFBTyxBQUE4QixBQUN4Qzs7OzttRCxBQUUwQixRQUFRO3dCQUMvQjs7aUJBQUEsQUFBSyxXQUFMLEFBQWdCLFdBQVcsVUFBQSxBQUFDLEtBQVEsQUFDaEM7dUJBQU8sZUFBQSxBQUFlLEtBQXRCLEFBQU8sQUFBb0IsQUFDOUI7QUFGRCxlQUFBLEFBRUcsUUFBUSxVQUFBLEFBQUMsS0FBUSxBQUNoQjtzQkFBQSxBQUFLLFdBQUwsQUFBZ0IsT0FBaEIsQUFBdUIsQUFDMUI7QUFKRCxBQUtIOzs7OzZDQUVvQixBQUNqQjttQkFBTyxLQUFBLEFBQUssV0FBWixBQUFPLEFBQWdCLEFBQzFCOzs7O2lDLEFBRVEsVyxBQUFXLE9BQU87eUJBQ3ZCOztpQkFBQSxBQUFLLFVBQUwsQUFBZSxJQUFmLEFBQW1CLFdBQW5CLEFBQThCLFFBQVEsVUFBQSxBQUFDLFVBQWEsQUFFaEQ7O29CQUFJLGNBQUosQUFBa0IsZUFBZSxBQUM3Qjs2QkFBQSxBQUFTLEFBQ1o7QUFGRCx1QkFFTyxBQUNIOytCQUFXLFlBQU0sQUFDYjs0QkFBSSxPQUFBLEFBQUssVUFBTCxBQUFlLElBQWYsQUFBbUIsV0FBbkIsQUFBOEIsU0FBbEMsQUFBMkMsR0FBRyxBQUMxQztxQ0FBQSxBQUFTLEFBQ1o7QUFDSjtBQUpELHVCQUFBLEFBSUcsQUFDTjtBQUNKO0FBWEQsQUFZSDs7OztzQyxBQUVhLFksQUFBWSxZLEFBQVksSyxBQUFLLFFBQVEsQUFFL0M7O2dCQUFJLFdBQVcsS0FBQSxBQUFLLFdBQUwsQUFBZ0IsSUFBL0IsQUFBZSxBQUFvQixBQUluQzs7OztnQkFBSSxDQUFKLEFBQUssVUFBVSxBQUNYO29CQUFJLE9BQU8sZUFBWCxBQUEwQixJQUFJLEFBQzFCO3lCQUFBLEFBQUssUUFBTCxBQUFhLE9BQWIsQUFBb0IsQUFDdkI7QUFDRDtBQUNIO0FBRUQ7OzJCQUFBLEFBQWUsS0FBZixBQUFvQixNQUFwQixBQUEwQixZQUExQixBQUFzQyxLQUF0QyxBQUEyQyxBQUU5Qzs7OzttQyxBQUVVLEssQUFBSyxNQUFNLEFBQ2xCO2lCQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2Q7Z0JBQUksS0FBSixBQUFTLG1CQUFtQixBQUN4QjtxQkFBQSxBQUFLLGtCQUFMLEFBQXVCLEtBQXZCLEFBQTRCLEFBQzVCO3VCQUFPLEtBQVAsQUFBWSxBQUNmO0FBQ0o7Ozs7Ozs7a0NBR1MsQUFDTjttQkFBTyxFQUFDLE9BQU8sS0FBUixBQUFhLFFBQVEsUUFBUSxLQUFwQyxBQUFPLEFBQWtDLEFBQzVDOzs7O2dDLEFBQ08sVSxBQUFVLFdBQVcsQUFDekI7aUJBQUEsQUFBSyxTQUFTLGNBQUEsQUFBYyxVQUFVLEtBQXRDLEFBQWMsQUFBNkIsQUFDM0M7aUJBQUEsQUFBSyxVQUFVLGNBQUEsQUFBYyxXQUFXLEtBQXhDLEFBQWUsQUFBOEIsQUFDN0M7aUJBQUEsQUFBSyxJQUFMLEFBQVMsYUFBVCxBQUFzQixTQUFTLEtBQS9CLEFBQW9DLEFBQ3BDO2lCQUFBLEFBQUssSUFBTCxBQUFTLGFBQVQsQUFBc0IsVUFBVSxLQUFoQyxBQUFxQyxBQUN4Qzs7OzttQ0FDVSxBQUNQO21CQUFPLEtBQVAsQUFBWSxBQUNmOzs7O2lDLEFBQ1EsVUFBVSxBQUNmO2lCQUFBLEFBQUssUUFBTCxBQUFhLFVBQVUsS0FBdkIsQUFBNEIsQUFDL0I7Ozs7b0NBQ1csQUFDUjttQkFBTyxLQUFQLEFBQVksQUFDZjs7OztrQyxBQUNTLFdBQVcsQUFDakI7aUJBQUEsQUFBSyxRQUFRLEtBQWIsQUFBa0IsUUFBbEIsQUFBMEIsQUFDN0I7Ozs7cUNBQ1ksQUFDVDttQkFBTyxLQUFQLEFBQVksQUFDZjs7OztzQ0FDYSxBQUNWO21CQUFPLEtBQVAsQUFBWSxBQUNmOzs7O2tDQUNTLEFBQ047bUJBQU8sS0FBUCxBQUFZLEFBQ2Y7Ozs7a0NBQ1MsQUFDTjtpQkFBQSxBQUFLLEFBQ0w7aUJBQUEsQUFBSyxBQUNMO3FCQUFBLEFBQVMsbUJBQW1CLEtBQTVCLEFBQWlDLEFBQ2pDO2dCQUFJLEtBQUEsQUFBSyxJQUFULEFBQWEsZUFBZSxBQUN4QjtxQkFBQSxBQUFLLElBQUwsQUFBUyxjQUFULEFBQXVCLFlBQVksS0FBbkMsQUFBd0MsQUFDM0M7QUFDSjs7Ozs7OztBQUdMLFNBQUEsQUFBUyxlQUFULEFBQXdCLFlBQXhCLEFBQW9DLEtBQXBDLEFBQXlDLFFBQVE7aUJBQzdDOztlQUFXLFlBQU0sQUFDYjtZQUFJLFdBQVcsT0FBQSxBQUFLLFdBQUwsQUFBZ0IsSUFBL0IsQUFBZSxBQUFvQixBQUNuQztZQUFBLEFBQUksVUFBVSxBQUNWO21CQUFBLEFBQUssV0FBTCxBQUFnQixPQUFoQixBQUF1QixBQUN2QjtxQkFBQSxBQUFTLEtBQVQsQUFBYyxBQUNqQjtBQUNKO0FBTkQsT0FBQSxBQU1HLEFBQ047OztBQUVELE9BQUEsQUFBTyxlQUFQLEFBQXNCLGVBQXRCLEFBQXFDO2NBQXVCLEFBQzlDLEFBQ1Y7a0JBRndELEFBRTFDLEFBQ2Q7V0FISixBQUE0RCxBQUdqRDtBQUhpRCxBQUN4RDs7Ozs7Ozs7Ozs7O0FBZUosT0FBQSxBQUFPLHVCQUF1QixVQUFBLEFBQUMsU0FBRCxBQUFVLFFBQVYsQUFBa0IsVUFBbEIsQUFBNEIsWUFBNUIsQUFBd0MsT0FBeEMsQUFBK0MsTUFBUyxBQUNsRjtRQUFJLFdBQVcsU0FBQSxBQUFTLGdCQUF4QixBQUFlLEFBQXlCLEFBQ3hDO1FBQUksQ0FBSixBQUFLLFVBQVUsQUFDZjtRQUFJLGFBQUosQUFBaUIsYUFBYSxBQUMxQjtpQkFBQSxBQUFTLFdBQVQsQUFBb0IsT0FBcEIsQUFBMkIsQUFDOUI7QUFGRCxXQUVPLEFBQ0g7WUFBSSxXQUFKLEFBQWUsU0FBUyxBQUNwQjtxQkFBQSxBQUFTLGNBQVQsQUFBdUIsVUFBdkIsQUFBaUMsWUFBakMsQUFBNkMsT0FBN0MsQUFBb0QsQUFDdkQ7QUFGRCxlQUVPLEFBQ0g7cUJBQUEsQUFBUyxTQUFULEFBQWtCLFVBQWxCLEFBQTRCLEFBQy9CO0FBQ0o7QUFDSjtBQVpEOzs7QUMvTEE7O0FBRUEsSUFBSSxzQkFBc0IsUUFBQSxBQUFRLGNBQWxDLEFBQWdEO0FBQ2hELElBQUksWUFBWSxJQUFoQixBQUFnQixBQUFJOztBQUVwQixJQUFNLHdCQUFOLEFBQThCO0FBQzlCLE9BQUEsQUFBTyxlQUFQLEFBQXNCLHVCQUF0QixBQUE2QztjQUFlLEFBQzlDLEFBQ1Y7a0JBRndELEFBRTFDLEFBQ2Q7V0FBTyxlQUFBLEFBQVUsSUFBVixBQUFjLFVBQVUsQUFDM0I7a0JBQUEsQUFBVSxJQUFWLEFBQWMsSUFBZCxBQUFrQixBQUNyQjtBQUxMLEFBQTREO0FBQUEsQUFDeEQ7O0FBT0osT0FBQSxBQUFPLGVBQVAsQUFBc0IsdUJBQXRCLEFBQTZDO2NBQW1CLEFBQ2xELEFBQ1Y7a0JBRjRELEFBRTlDLEFBQ2Q7V0FBTyxlQUFBLEFBQVUsSUFBSSxBQUNqQjtlQUFPLFVBQUEsQUFBVSxJQUFqQixBQUFPLEFBQWMsQUFDeEI7QUFMTCxBQUFnRTtBQUFBLEFBQzVEOztBQU9KLE9BQUEsQUFBTyxlQUFQLEFBQXNCLHVCQUF0QixBQUE2QztjQUFzQixBQUNyRCxBQUNWO2tCQUYrRCxBQUVqRCxBQUNkO1dBQU8sZUFBQSxBQUFVLElBQUksQUFDakI7ZUFBTyxVQUFBLEFBQVUsT0FBakIsQUFBTyxBQUFpQixBQUMzQjtBQUxMLEFBQW1FO0FBQUEsQUFDL0Q7O0FBT0osT0FBQSxBQUFPLFVBQVAsQUFBaUI7OztBQzlCakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SSxBQUVhLGlDLEFBQUEscUNBQ1Q7c0NBQWU7OEJBQ1g7O2FBQUEsQUFBSyxjQUFMLEFBQW1CLEFBQ3RCOzs7Ozs0QixBQUNJLEksQUFBSSxPQUFPLEFBQ1o7Z0JBQUksQ0FBQyxLQUFBLEFBQUssWUFBVixBQUFLLEFBQWlCLEtBQUssQUFDdkI7cUJBQUEsQUFBSyxZQUFMLEFBQWlCLE1BQWpCLEFBQXVCLEFBQzFCO0FBQ0Q7Z0JBQUksS0FBQSxBQUFLLFlBQUwsQUFBaUIsSUFBakIsQUFBcUIsUUFBckIsQUFBNkIsV0FBVyxDQUE1QyxBQUE2QyxHQUFHLEFBQzVDO3FCQUFBLEFBQUssWUFBTCxBQUFpQixJQUFqQixBQUFxQixLQUFyQixBQUEwQixBQUM3QjtBQUNKOzs7OzRCLEFBQ0ksSUFBSSxBQUNMO21CQUFPLEtBQUEsQUFBSyxZQUFMLEFBQWlCLE9BQXhCLEFBQStCLEFBQ2xDOzs7O21DLEFBQ1csU0FBUyxBQUNqQjttQkFBTyxPQUFBLEFBQU8sS0FBSyxLQUFaLEFBQWlCLGFBQWpCLEFBQThCLE9BQXJDLEFBQU8sQUFBcUMsQUFDL0M7Ozs7b0MsQUFDWSxPQUFPO3dCQUNoQjs7Z0JBQUksY0FBTyxBQUFPLEtBQUssS0FBWixBQUFpQixhQUFqQixBQUE4QixPQUFPLFVBQUEsQUFBQyxLQUFRLEFBQ3JEO3VCQUFPLE1BQUEsQUFBSyxZQUFMLEFBQWlCLEtBQWpCLEFBQXNCLFFBQXRCLEFBQThCLFdBQVcsQ0FBaEQsQUFBaUQsQUFDcEQ7QUFGRCxBQUFXLEFBSVgsYUFKVzs7bUJBSVgsQUFBTyxBQUNWOzs7OytCLEFBQ00sSyxBQUFLLE9BQU8sQUFDZjtnQkFBSSxDQUFDLEtBQUEsQUFBSyxZQUFWLEFBQUssQUFBaUIsTUFBTSxBQUFFO0FBQVM7QUFFdkM7O2dCQUFJLFFBQVEsS0FBQSxBQUFLLFlBQUwsQUFBaUIsS0FBakIsQUFBc0IsUUFBbEMsQUFBWSxBQUE4QixBQUUxQzs7Z0JBQUksUUFBSixBQUFZLEdBQUcsQUFBRTtBQUFTO0FBQzFCO21CQUFPLEtBQUEsQUFBSyxZQUFMLEFBQWlCLEtBQWpCLEFBQXNCLE9BQXRCLEFBQTZCLE9BQXBDLEFBQU8sQUFBb0MsQUFDOUM7Ozs7b0MsQUFDWSxJQUFJLEFBQ2I7Z0JBQUksTUFBTSxLQUFBLEFBQUssWUFBZixBQUFVLEFBQWlCLEFBQzNCO21CQUFPLEtBQUEsQUFBSyxZQUFaLEFBQU8sQUFBaUIsQUFDeEI7bUJBQUEsQUFBTyxBQUNWOzs7O3NDLEFBQ2MsT0FBTzt5QkFDbEI7O2dCQUFJLE9BQU8sS0FBQSxBQUFLLFlBQWhCLEFBQVcsQUFBaUIsQUFDNUI7d0JBQU8sQUFBSyxJQUFJLFVBQUEsQUFBQyxLQUFRLEFBQ3JCO3VCQUFPLE9BQUEsQUFBSyxPQUFMLEFBQVksS0FBbkIsQUFBTyxBQUFpQixBQUMzQjtBQUZELEFBQU8sQUFHVixhQUhVOzs7O29DQUlDLEFBQ1I7Z0JBQUksTUFBTSxLQUFWLEFBQWUsQUFDZjtpQkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDbkI7bUJBQUEsQUFBTyxBQUNWOzs7OytCQUNNLEFBQ0g7bUJBQU8sT0FBQSxBQUFPLEtBQUssS0FBWixBQUFpQixhQUF4QixBQUFxQyxBQUN4Qzs7Ozs7OztJLEFBR1EsOEIsQUFBQSxrQ0FDVDttQ0FBZTs4QkFDWDs7YUFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDdEI7Ozs7OzRCLEFBQ0ksSSxBQUFJLE9BQU8sQUFDWjtpQkFBQSxBQUFLLFlBQUwsQUFBaUIsTUFBakIsQUFBdUIsQUFDMUI7Ozs7NEIsQUFDSSxJQUFJLEFBQ0w7bUJBQU8sS0FBQSxBQUFLLFlBQVosQUFBTyxBQUFpQixBQUMzQjs7OzttQyxBQUNXLFNBQVMsQUFDakI7bUJBQU8sT0FBQSxBQUFPLEtBQUssS0FBWixBQUFpQixhQUFqQixBQUE4QixPQUFyQyxBQUFPLEFBQXFDLEFBQy9DOzs7O29DLEFBQ1ksT0FBTzt5QkFDaEI7O2dCQUFJLGNBQU8sQUFBTyxLQUFLLEtBQVosQUFBaUIsYUFBakIsQUFBOEIsT0FBTyxVQUFBLEFBQUMsS0FBUSxBQUNyRDt1QkFBTyxPQUFBLEFBQUssWUFBTCxBQUFpQixTQUF4QixBQUFpQyxBQUNwQztBQUZELEFBQVcsQUFJWCxhQUpXOzttQkFJWCxBQUFPLEFBQ1Y7Ozs7K0IsQUFDTyxJQUFJLEFBQ1I7Z0JBQUksTUFBTSxLQUFBLEFBQUssWUFBZixBQUFVLEFBQWlCLEFBQzNCO21CQUFPLEtBQUEsQUFBSyxZQUFaLEFBQU8sQUFBaUIsQUFDeEI7bUJBQUEsQUFBTyxBQUNWOzs7O3NDLEFBQ2MsT0FBTzt5QkFDbEI7O2dCQUFJLE9BQU8sS0FBQSxBQUFLLFlBQWhCLEFBQVcsQUFBaUIsQUFDNUI7d0JBQU8sQUFBSyxJQUFJLFVBQUEsQUFBQyxLQUFRLEFBQ3JCO3VCQUFPLE9BQUEsQUFBSyxPQUFaLEFBQU8sQUFBWSxBQUN0QjtBQUZELEFBQU8sQUFHVixhQUhVOzs7O29DQUlDLEFBQ1I7Z0JBQUksTUFBTSxLQUFWLEFBQWUsQUFDZjtpQkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDbkI7bUJBQUEsQUFBTyxBQUNWOzs7OytCQUNNLEFBQ0g7bUJBQU8sT0FBQSxBQUFPLEtBQUssS0FBWixBQUFpQixhQUF4QixBQUFxQyxBQUN4Qzs7Ozs7Ozs7QUM5Rkw7Ozs7O1EsQUFFZ0IsUyxBQUFBO1EsQUFPQSxPLEFBQUE7USxBQUlBLGtCLEFBQUE7USxBQWdCQSxzQixBQUFBO1EsQUFVQSxnQixBQUFBO1EsQUFpQkEsaUIsQUFBQTtRLEFBSUEsYyxBQUFBO0FBMURULFNBQUEsQUFBUyxPQUFULEFBQWdCLFFBQVEsQUFDM0I7UUFBSSxRQUFRLENBQVosQUFBYSxBQUNiO1dBQU8sYUFBSyxBQUNSO2VBQUEsQUFBVSxlQUFVLEVBQXBCLEFBQXNCLEFBQ3pCO0FBRkQsQUFHSDs7O0FBRU0sU0FBQSxBQUFTLE9BQU8sQUFDdEI7O0FBR00sU0FBQSxBQUFTLGdCQUFULEFBQXlCLE9BQXpCLEFBQWdDLFdBQWhDLEFBQTJDLFdBQVcsQUFFekQ7O1FBQUkscUJBQXFCLFlBQU0sQUFFM0I7O29CQUFBLEFBQVksQUFDWjtBQUVIO0FBTGEsS0FBQSxFQUFkLEFBQWMsQUFLWCxBQUVIOztXQUFPLFlBQVksQUFDZjtxQkFBQSxBQUFhLEFBQ2I7a0JBQUEsQUFBVSxNQUFWLEFBQWdCLE1BQWhCLEFBQXNCLEFBQ3pCO0FBSEQsQUFJSDs7O0FBR00sU0FBQSxBQUFTLG9CQUFULEFBQTZCLFFBQTdCLEFBQXFDLElBQTBCO1FBQXRCLEFBQXNCLHFFQUFQLEFBQU8sa0JBQ2xFOztRQUFJLE1BQU0sU0FBQSxBQUFTLGNBQW5CLEFBQVUsQUFBdUIsQUFDakM7UUFBQSxBQUFJLEtBQUosQUFBUyxBQUNUO1FBQUEsQUFBSSxjQUFjLEFBQ2Q7ZUFBQSxBQUFPLFlBQVAsQUFBbUIsQUFDdEI7QUFDRDtXQUFBLEFBQU8sWUFBUCxBQUFtQixBQUNuQjtXQUFBLEFBQU8sQUFDVjs7O0FBRU0sU0FBQSxBQUFTLGNBQVQsQUFBdUIsUUFBdkIsQUFBK0IsUUFBUSxBQUMxQztXQUFPLENBQUMsTUFBTSxXQUFQLEFBQUMsQUFBTSxBQUFXLFlBQVksU0FBOUIsQUFBOEIsQUFBUyxXQUFXLFNBQWxELEFBQTJELElBQTNELEFBQStELFNBQXRFLEFBQStFLEFBQ2xGOzs7QUFFRCxJQUFJLHVCQUF3QixBQUN4QjtRQUFJLE9BQUEsQUFBTyxVQUFYLEFBQXFCLFVBQVUsT0FBTyxPQUFBLEFBQU8sVUFBZCxBQUF3QixBQUN2RDtXQUFPLFNBQUEsQUFBUyxTQUFULEFBQW1CLGNBQW5CLEFBQWlDLFVBQVUsQUFDOUM7WUFBSSxnQkFBZ0IsS0FBcEIsQUFBb0IsQUFBSyxBQUN6QjtZQUFJLGFBQUEsQUFBYSxhQUFhLFdBQVcsY0FBekMsQUFBdUQsUUFBUSxBQUMzRDt1QkFBVyxjQUFYLEFBQXlCLEFBQzVCO0FBQ0Q7b0JBQVksYUFBWixBQUF5QixBQUN6QjtZQUFJLFlBQVksY0FBQSxBQUFjLFFBQWQsQUFBc0IsY0FBdEMsQUFBZ0IsQUFBb0MsQUFDcEQ7ZUFBTyxjQUFjLENBQWQsQUFBZSxLQUFLLGNBQTNCLEFBQXlDLEFBQzVDO0FBUkQsQUFTSDtBQVhELEFBQWUsQ0FBQzs7QUFhVCxTQUFBLEFBQVMsZUFBVCxBQUF3QixRQUF4QixBQUFnQyxRQUFRLEFBQzNDO1dBQU8sU0FBQSxBQUFTLEtBQVQsQUFBYyxRQUFyQixBQUFPLEFBQXNCLEFBQ2hDOzs7QUFFTSxTQUFBLEFBQVMsWUFBVCxBQUFxQixJQUFJLEFBRTVCOztPQUFBLEFBQUcsTUFBSCxBQUFTLFdBQVQsQUFBb0IsQUFDcEI7T0FBQSxBQUFHLE1BQUgsQUFBUyxPQUFULEFBQWdCLEFBQ2hCO09BQUEsQUFBRyxNQUFILEFBQVMsTUFBVCxBQUFlLEFBQ2Y7T0FBQSxBQUFHLE1BQUgsQUFBUyxRQUFULEFBQWlCLEFBQ2pCO09BQUEsQUFBRyxNQUFILEFBQVMsU0FBVCxBQUFrQixBQUNyQjs7OztBQ25FRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzd6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4akJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL1dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDellBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vc2ltcGxlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBBUElcclxuZXhwb3J0IGNsYXNzIElWUEFJREFkVW5pdCB7XHJcblxyXG4gICAgLy9hbGwgbWV0aG9kcyBiZWxvd1xyXG4gICAgLy9hcmUgYXN5bmMgbWV0aG9kc1xyXG4gICAgaGFuZHNoYWtlVmVyc2lvbihwbGF5ZXJWUEFJRFZlcnNpb24gPSAnMi4wJywgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XHJcblxyXG4gICAgLy9jcmVhdGl2ZURhdGEgaXMgYW4gb2JqZWN0IHRvIGJlIGNvbnNpc3RlbnQgd2l0aCBWUEFJREhUTUxcclxuICAgIGluaXRBZCAod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEgPSB7QWRQYXJhbWV0ZXJzOicnfSwgZW52aXJvbm1lbnRWYXJzID0ge2ZsYXNoVmFyczogJyd9LCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cclxuICAgIHJlc2l6ZUFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cclxuXHJcbiAgICBzdGFydEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxyXG4gICAgc3RvcEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxyXG4gICAgcGF1c2VBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cclxuICAgIHJlc3VtZUFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZXhwYW5kQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XHJcbiAgICBjb2xsYXBzZUFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxyXG4gICAgc2tpcEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxyXG5cclxuICAgIC8vcHJvcGVydGllcyB0aGF0IHdpbGwgYmUgdHJlYXQgYXMgYXN5bmMgbWV0aG9kc1xyXG4gICAgZ2V0QWRMaW5lYXIoY2FsbGJhY2spIHt9XHJcbiAgICBnZXRBZFdpZHRoKGNhbGxiYWNrKSB7fVxyXG4gICAgZ2V0QWRIZWlnaHQoY2FsbGJhY2spIHt9XHJcbiAgICBnZXRBZEV4cGFuZGVkKGNhbGxiYWNrKSB7fVxyXG4gICAgZ2V0QWRTa2lwcGFibGVTdGF0ZShjYWxsYmFjaykge31cclxuICAgIGdldEFkUmVtYWluaW5nVGltZShjYWxsYmFjaykge31cclxuICAgIGdldEFkRHVyYXRpb24oY2FsbGJhY2spIHt9XHJcbiAgICBzZXRBZFZvbHVtZShzb3VuZFZvbHVtZSwgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XHJcbiAgICBnZXRBZFZvbHVtZShjYWxsYmFjaykge31cclxuICAgIGdldEFkQ29tcGFuaW9ucyhjYWxsYmFjaykge31cclxuICAgIGdldEFkSWNvbnMoY2FsbGJhY2spIHt9XHJcbn1cclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShJVlBBSURBZFVuaXQsICdFVkVOVFMnLCB7XHJcbiAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgdmFsdWU6IFtcclxuICAgICAgICAnQWRMb2FkZWQnLFxyXG4gICAgICAgICdBZFN0YXJ0ZWQnLFxyXG4gICAgICAgICdBZFN0b3BwZWQnLFxyXG4gICAgICAgICdBZFNraXBwZWQnLFxyXG4gICAgICAgICdBZFNraXBwYWJsZVN0YXRlQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxyXG4gICAgICAgICdBZFNpemVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XHJcbiAgICAgICAgJ0FkTGluZWFyQ2hhbmdlJyxcclxuICAgICAgICAnQWREdXJhdGlvbkNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcclxuICAgICAgICAnQWRFeHBhbmRlZENoYW5nZScsXHJcbiAgICAgICAgJ0FkUmVtYWluaW5nVGltZUNoYW5nZScsIC8vIFtEZXByZWNhdGVkIGluIDIuMF0gYnV0IHdpbGwgYmUgc3RpbGwgZmlyZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XHJcbiAgICAgICAgJ0FkVm9sdW1lQ2hhbmdlJyxcclxuICAgICAgICAnQWRJbXByZXNzaW9uJyxcclxuICAgICAgICAnQWRWaWRlb1N0YXJ0JyxcclxuICAgICAgICAnQWRWaWRlb0ZpcnN0UXVhcnRpbGUnLFxyXG4gICAgICAgICdBZFZpZGVvTWlkcG9pbnQnLFxyXG4gICAgICAgICdBZFZpZGVvVGhpcmRRdWFydGlsZScsXHJcbiAgICAgICAgJ0FkVmlkZW9Db21wbGV0ZScsXHJcbiAgICAgICAgJ0FkQ2xpY2tUaHJ1JyxcclxuICAgICAgICAnQWRJbnRlcmFjdGlvbicsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcclxuICAgICAgICAnQWRVc2VyQWNjZXB0SW52aXRhdGlvbicsXHJcbiAgICAgICAgJ0FkVXNlck1pbmltaXplJyxcclxuICAgICAgICAnQWRVc2VyQ2xvc2UnLFxyXG4gICAgICAgICdBZFBhdXNlZCcsXHJcbiAgICAgICAgJ0FkUGxheWluZycsXHJcbiAgICAgICAgJ0FkTG9nJyxcclxuICAgICAgICAnQWRFcnJvcidcclxuICAgIF1cclxufSk7XHJcblxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgSVZQQUlEQWRVbml0ID0gcmVxdWlyZSgnLi9JVlBBSURBZFVuaXQnKS5JVlBBSURBZFVuaXQ7XHJcbmxldCBBTExfVlBBSURfTUVUSE9EUyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKElWUEFJREFkVW5pdC5wcm90b3R5cGUpLmZpbHRlcihmdW5jdGlvbiAocHJvcGVydHkpIHtcclxuICAgIHJldHVybiBbJ2NvbnN0cnVjdG9yJ10uaW5kZXhPZihwcm9wZXJ0eSkgPT09IC0xO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjbGFzcyBWUEFJREFkVW5pdCBleHRlbmRzIElWUEFJREFkVW5pdCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZmxhc2gpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2ZsYXNoID0gZmxhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgX2Rlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcclxuICAgICAgICBBTExfVlBBSURfTUVUSE9EUy5mb3JFYWNoKChtZXRob2ROYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZsYXNoLnJlbW92ZUNhbGxiYWNrQnlNZXRob2ROYW1lKG1ldGhvZE5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIElWUEFJREFkVW5pdC5FVkVOVFMuZm9yRWFjaCgoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZmxhc2gub2ZmRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9mbGFzaCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaXNEZXN0cm95ZWQgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZXN0cm95ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX2ZsYXNoLm9uKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZihldmVudE5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fZmxhc2gub2ZmKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8vVlBBSUQgaW50ZXJmYWNlXHJcbiAgICBoYW5kc2hha2VWZXJzaW9uKHBsYXllclZQQUlEVmVyc2lvbiA9ICcyLjAnLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnaGFuZHNoYWtlVmVyc2lvbicsIFtwbGF5ZXJWUEFJRFZlcnNpb25dLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBpbml0QWQgKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhID0ge0FkUGFyYW1ldGVyczogJyd9LCBlbnZpcm9ubWVudFZhcnMgPSB7Zmxhc2hWYXJzOiAnJ30sIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy9yZXNpemUgZWxlbWVudCB0aGF0IGhhcyB0aGUgZmxhc2ggb2JqZWN0XHJcbiAgICAgICAgdGhpcy5fZmxhc2guc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjcmVhdGl2ZURhdGEgPSBjcmVhdGl2ZURhdGEgfHwge0FkUGFyYW1ldGVyczogJyd9O1xyXG4gICAgICAgIGVudmlyb25tZW50VmFycyA9IGVudmlyb25tZW50VmFycyB8fCB7Zmxhc2hWYXJzOiAnJ307XHJcblxyXG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnaW5pdEFkJywgW3RoaXMuX2ZsYXNoLmdldFdpZHRoKCksIHRoaXMuX2ZsYXNoLmdldEhlaWdodCgpLCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YS5BZFBhcmFtZXRlcnMgfHwgJycsIGVudmlyb25tZW50VmFycy5mbGFzaFZhcnMgfHwgJyddLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICByZXNpemVBZCh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvL3Jlc2l6ZSBlbGVtZW50IHRoYXQgaGFzIHRoZSBmbGFzaCBvYmplY3RcclxuICAgICAgICB0aGlzLl9mbGFzaC5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAvL3Jlc2l6ZSBhZCBpbnNpZGUgdGhlIGZsYXNoXHJcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdyZXNpemVBZCcsIFt0aGlzLl9mbGFzaC5nZXRXaWR0aCgpLCB0aGlzLl9mbGFzaC5nZXRIZWlnaHQoKSwgdmlld01vZGVdLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBzdGFydEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdzdGFydEFkJywgW10sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIHN0b3BBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnc3RvcEFkJywgW10sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIHBhdXNlQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ3BhdXNlQWQnLCBbXSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgcmVzdW1lQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ3Jlc3VtZUFkJywgW10sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIGV4cGFuZEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdleHBhbmRBZCcsIFtdLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBjb2xsYXBzZUFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdjb2xsYXBzZUFkJywgW10sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIHNraXBBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnc2tpcEFkJywgW10sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3Byb3BlcnRpZXMgdGhhdCB3aWxsIGJlIHRyZWF0IGFzIGFzeW5jIG1ldGhvZHNcclxuICAgIGdldEFkTGluZWFyKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZExpbmVhcicsIFtdLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBnZXRBZFdpZHRoKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZFdpZHRoJywgW10sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIGdldEFkSGVpZ2h0KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZEhlaWdodCcsIFtdLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBnZXRBZEV4cGFuZGVkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZEV4cGFuZGVkJywgW10sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIGdldEFkU2tpcHBhYmxlU3RhdGUoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkU2tpcHBhYmxlU3RhdGUnLCBbXSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgZ2V0QWRSZW1haW5pbmdUaW1lKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZFJlbWFpbmluZ1RpbWUnLCBbXSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgZ2V0QWREdXJhdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWREdXJhdGlvbicsIFtdLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBzZXRBZFZvbHVtZSh2b2x1bWUsIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdzZXRBZFZvbHVtZScsIFt2b2x1bWVdLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBnZXRBZFZvbHVtZShjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWRWb2x1bWUnLCBbXSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgZ2V0QWRDb21wYW5pb25zKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZENvbXBhbmlvbnMnLCBbXSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgZ2V0QWRJY29ucyhjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWRJY29ucycsIFtdLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IHN3Zm9iamVjdCA9IHJlcXVpcmUoJ3N3Zm9iamVjdCcpO1xyXG5cclxuY29uc3QgSlNGbGFzaEJyaWRnZSA9IHJlcXVpcmUoJy4vanNGbGFzaEJyaWRnZScpLkpTRmxhc2hCcmlkZ2U7XHJcbmNvbnN0IFZQQUlEQWRVbml0ID0gcmVxdWlyZSgnLi9WUEFJREFkVW5pdCcpLlZQQUlEQWRVbml0O1xyXG5cclxuY29uc3Qgbm9vcCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5ub29wO1xyXG5jb25zdCBjYWxsYmFja1RpbWVvdXQgPSByZXF1aXJlKCcuL3V0aWxzJykuY2FsbGJhY2tUaW1lb3V0O1xyXG5jb25zdCBpc1Bvc2l0aXZlSW50ID0gcmVxdWlyZSgnLi91dGlscycpLmlzUG9zaXRpdmVJbnQ7XHJcbmNvbnN0IGNyZWF0ZUVsZW1lbnRXaXRoSUQgPSByZXF1aXJlKCcuL3V0aWxzJykuY3JlYXRlRWxlbWVudFdpdGhJRDtcclxuY29uc3QgdW5pcXVlVlBBSUQgPSByZXF1aXJlKCcuL3V0aWxzJykudW5pcXVlKCd2cGFpZCcpO1xyXG5jb25zdCBjcmVhdGVGbGFzaFRlc3RlciA9IHJlcXVpcmUoJy4vZmxhc2hUZXN0ZXIuanMnKS5jcmVhdGVGbGFzaFRlc3RlcjtcclxuXHJcbmNvbnN0IEVSUk9SID0gJ2Vycm9yJztcclxuY29uc3QgRkxBU0hfVkVSU0lPTiA9ICcxMC4xLjAnO1xyXG5cclxubGV0IGZsYXNoVGVzdGVyID0ge2lzU3VwcG9ydGVkOiAoKT0+IHRydWV9OyAvLyBpZiB0aGUgcnVuRmxhc2hUZXN0IGlzIG5vdCBydW4gdGhlIGZsYXNoVGVzdGVyIHdpbGwgYWx3YXlzIHJldHVybiB0cnVlXHJcblxyXG5jbGFzcyBWUEFJREZMQVNIQ2xpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yICh2cGFpZFBhcmVudEVsLCBjYWxsYmFjaywgc3dmQ29uZmlnID0ge2RhdGE6ICdWUEFJREZsYXNoLnN3ZicsIHdpZHRoOiA4MDAsIGhlaWdodDogNDAwfSwgcGFyYW1zID0geyB3bW9kZTogJ3RyYW5zcGFyZW50Jywgc2FsaWduOiAndGwnLCBhbGlnbjogJ2xlZnQnLCBhbGxvd1NjcmlwdEFjY2VzczogJ2Fsd2F5cycsIHNjYWxlOiAnbm9TY2FsZScsIGFsbG93RnVsbFNjcmVlbjogJ3RydWUnLCBxdWFsaXR5OiAnaGlnaCd9LCB2cGFpZE9wdGlvbnMgPSB7IGRlYnVnOiBmYWxzZSwgdGltZW91dDogMTAwMDAgfSkge1xyXG5cclxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLl92cGFpZFBhcmVudEVsID0gdnBhaWRQYXJlbnRFbDtcclxuICAgICAgICB0aGlzLl9mbGFzaElEID0gdW5pcXVlVlBBSUQoKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcclxuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG5vb3A7XHJcblxyXG4gICAgICAgIHN3ZkNvbmZpZy53aWR0aCA9IGlzUG9zaXRpdmVJbnQoc3dmQ29uZmlnLndpZHRoLCA4MDApO1xyXG4gICAgICAgIHN3ZkNvbmZpZy5oZWlnaHQgPSBpc1Bvc2l0aXZlSW50KHN3ZkNvbmZpZy5oZWlnaHQsIDQwMCk7XHJcblxyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRXaXRoSUQodnBhaWRQYXJlbnRFbCwgdGhpcy5fZmxhc2hJRCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHBhcmFtcy5tb3ZpZSA9IHN3ZkNvbmZpZy5kYXRhO1xyXG4gICAgICAgIHBhcmFtcy5GbGFzaFZhcnMgPSBgZmxhc2hpZD0ke3RoaXMuX2ZsYXNoSUR9JmhhbmRsZXI9JHtKU0ZsYXNoQnJpZGdlLlZQQUlEX0ZMQVNIX0hBTkRMRVJ9JmRlYnVnPSR7dnBhaWRPcHRpb25zLmRlYnVnfSZzYWxpZ249JHtwYXJhbXMuc2FsaWdufWA7XHJcblxyXG4gICAgICAgIGlmICghVlBBSURGTEFTSENsaWVudC5pc1N1cHBvcnRlZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvbkVycm9yKCd1c2VyIGRvblxcJ3Qgc3VwcG9ydCBmbGFzaCBvciBkb2VzblxcJ3QgaGF2ZSB0aGUgbWluaW11bSByZXF1aXJlZCB2ZXJzaW9uIG9mIGZsYXNoICcgKyBGTEFTSF9WRVJTSU9OKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWwgPSBzd2ZvYmplY3QuY3JlYXRlU1dGKHN3ZkNvbmZpZywgcGFyYW1zLCB0aGlzLl9mbGFzaElEKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvbkVycm9yKCAnc3dmb2JqZWN0IGZhaWxlZCB0byBjcmVhdGUgb2JqZWN0IGluIGVsZW1lbnQnICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaGFuZGxlciA9IGNhbGxiYWNrVGltZW91dCh2cGFpZE9wdGlvbnMudGltZW91dCxcclxuICAgICAgICAgICAgKGVyciwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGxvYWRQZW5kZWRBZFVuaXQuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgZGF0YSk7XHJcbiAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCd2cGFpZCBmbGFzaCBsb2FkIHRpbWVvdXQgJyArIHZwYWlkT3B0aW9ucy50aW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuX2ZsYXNoID0gbmV3IEpTRmxhc2hCcmlkZ2UodGhpcy5lbCwgc3dmQ29uZmlnLmRhdGEsIHRoaXMuX2ZsYXNoSUQsIHN3ZkNvbmZpZy53aWR0aCwgc3dmQ29uZmlnLmhlaWdodCwgaGFuZGxlcik7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoZXJyb3IpKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3kgKCkge1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lBZFVuaXQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2ZsYXNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZsYXNoLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5fZmxhc2ggPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVsID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRGVzdHJveWVkICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVzdHJveWVkO1xyXG4gICAgfVxyXG5cclxuICAgIF9kZXN0cm95QWRVbml0KCkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9sb2FkTGF0ZXI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hZFVuaXRMb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkVW5pdExvYWQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9mbGFzaC5yZW1vdmVDYWxsYmFjayh0aGlzLl9hZFVuaXRMb2FkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hZFVuaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYWRVbml0Ll9kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkVW5pdCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRBZFVuaXQoYWRVUkwsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgJHRocm93SWZEZXN0cm95ZWQuY2FsbCh0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2FkVW5pdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kZXN0cm95QWRVbml0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fZmxhc2guaXNSZWFkeSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkVW5pdExvYWQgPSAoZXJyLCBtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkVW5pdCA9IG5ldyBWUEFJREFkVW5pdCh0aGlzLl9mbGFzaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hZFVuaXRMb2FkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgdGhpcy5fYWRVbml0KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnbG9hZEFkVW5pdCcsIFthZFVSTF0sIHRoaXMuX2FkVW5pdExvYWQpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZExhdGVyID0ge3VybDogYWRVUkwsIGNhbGxiYWNrfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdW5sb2FkQWRVbml0KGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgJHRocm93SWZEZXN0cm95ZWQuY2FsbCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZGVzdHJveUFkVW5pdCgpO1xyXG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgndW5sb2FkQWRVbml0JywgW10sIGNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIGdldEZsYXNoSUQoKSB7XHJcbiAgICAgICAgJHRocm93SWZEZXN0cm95ZWQuY2FsbCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmxhc2guZ2V0Rmxhc2hJRCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0Rmxhc2hVUkwoKSB7XHJcbiAgICAgICAgJHRocm93SWZEZXN0cm95ZWQuY2FsbCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmxhc2guZ2V0Rmxhc2hVUkwoKTtcclxuICAgIH1cclxufVxyXG5cclxuc2V0U3RhdGljUHJvcGVydHkoJ2lzU3VwcG9ydGVkJywgKCkgPT4ge1xyXG4gICAgcmV0dXJuIHN3Zm9iamVjdC5oYXNGbGFzaFBsYXllclZlcnNpb24oRkxBU0hfVkVSU0lPTikgJiYgZmxhc2hUZXN0ZXIuaXNTdXBwb3J0ZWQoKTtcclxufSwgdHJ1ZSk7XHJcblxyXG5zZXRTdGF0aWNQcm9wZXJ0eSgncnVuRmxhc2hUZXN0JywgKHN3ZkNvbmZpZykgPT4ge1xyXG4gICAgZmxhc2hUZXN0ZXIgPSBjcmVhdGVGbGFzaFRlc3Rlcihkb2N1bWVudC5ib2R5LCBzd2ZDb25maWcpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uICR0aHJvd0lmRGVzdHJveWVkKCkge1xyXG4gICAgaWYodGhpcy5fZGVzdHJveWVkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWUEFJREZsYXNoVG9KUyBpcyBkZXN0cm95ZWQhJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uICRsb2FkUGVuZGVkQWRVbml0KCkge1xyXG4gICAgaWYgKHRoaXMuX2xvYWRMYXRlcikge1xyXG4gICAgICAgIHRoaXMubG9hZEFkVW5pdCh0aGlzLl9sb2FkTGF0ZXIudXJsLCB0aGlzLl9sb2FkTGF0ZXIuY2FsbGJhY2spO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9sb2FkTGF0ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFN0YXRpY1Byb3BlcnR5KHByb3BlcnR5TmFtZSwgdmFsdWUsIHdyaXRhYmxlID0gZmFsc2UpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWUEFJREZMQVNIQ2xpZW50LCBwcm9wZXJ0eU5hbWUsIHtcclxuICAgICAgICB3cml0YWJsZTogd3JpdGFibGUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgIH0pO1xyXG59XHJcblxyXG5WUEFJREZMQVNIQ2xpZW50LnN3Zm9iamVjdCA9IHN3Zm9iamVjdDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVlBBSURGTEFTSENsaWVudDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3Qgc3dmb2JqZWN0ID0gcmVxdWlyZSgnc3dmb2JqZWN0Jyk7XHJcblxyXG5jb25zdCBGTEFTSF9URVNUID0gJ3ZwYWlkX3ZpZGVvX2ZsYXNoX3Rlc3Rlcic7XHJcbmNvbnN0IEZMQVNIX1RFU1RfRUwgPSAndnBhaWRfdmlkZW9fZmxhc2hfdGVzdGVyX2VsJztcclxuY29uc3QgSlNGbGFzaEJyaWRnZSA9IHJlcXVpcmUoJy4vanNGbGFzaEJyaWRnZScpLkpTRmxhc2hCcmlkZ2U7XHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xyXG5jb25zdCBNdWx0aXBsZVZhbHVlc1JlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9yZWdpc3RyeScpLk11bHRpcGxlVmFsdWVzUmVnaXN0cnk7XHJcblxyXG5jbGFzcyBGbGFzaFRlc3RlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHN3ZkNvbmZpZyA9IHtkYXRhOiAnVlBBSURGbGFzaC5zd2YnLCB3aWR0aDogODAwLCBoZWlnaHQ6IDQwMH0pIHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsID0gdXRpbHMuY3JlYXRlRWxlbWVudFdpdGhJRChwYXJlbnQsIEZMQVNIX1RFU1RfRUwpOyAvLyBzb21lIGJyb3dzZXJzIGNyZWF0ZSBnbG9iYWwgdmFyaWFibGVzIHVzaW5nIHRoZSBlbGVtZW50IGlkIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzQzNDI3OC9kby1kb20tdHJlZS1lbGVtZW50cy13aXRoLWlkcy1iZWNvbWUtZ2xvYmFsLXZhcmlhYmxlc1xyXG4gICAgICAgIHV0aWxzLmhpZGVGbGFzaEVsKHRoaXMucGFyZW50RWwpO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSB7fTtcclxuICAgICAgICBwYXJhbXMubW92aWUgPSBzd2ZDb25maWcuZGF0YTtcclxuICAgICAgICBwYXJhbXMuRmxhc2hWYXJzID0gYGZsYXNoaWQ9JHtGTEFTSF9URVNUX0VMfSZoYW5kbGVyPSR7SlNGbGFzaEJyaWRnZS5WUEFJRF9GTEFTSF9IQU5ETEVSfWA7XHJcbiAgICAgICAgcGFyYW1zLmFsbG93U2NyaXB0QWNjZXNzID0gJ2Fsd2F5cyc7XHJcblxyXG4gICAgICAgIHRoaXMuZWwgPSBzd2ZvYmplY3QuY3JlYXRlU1dGKHN3ZkNvbmZpZywgcGFyYW1zLCBGTEFTSF9URVNUX0VMKTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVycyA9IG5ldyBNdWx0aXBsZVZhbHVlc1JlZ2lzdHJ5KCk7XHJcbiAgICAgICAgdGhpcy5faXNTdXBwb3J0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5lbCkge1xyXG4gICAgICAgICAgICB1dGlscy5oaWRlRmxhc2hFbCh0aGlzLmVsKTtcclxuICAgICAgICAgICAgdGhpcy5fZmxhc2ggPSBuZXcgSlNGbGFzaEJyaWRnZSh0aGlzLmVsLCBzd2ZDb25maWcuZGF0YSwgRkxBU0hfVEVTVF9FTCwgc3dmQ29uZmlnLndpZHRoLCBzd2ZDb25maWcuaGVpZ2h0LCAoKT0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1cHBvcnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNTdXBwb3J0ZWQgPSBzdXBwb3J0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlcnMuZ2V0KCdjaGFuZ2UnKS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCdjaGFuZ2UnLCBzdXBwb3J0KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc1N1cHBvcnRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNTdXBwb3J0ZWQ7XHJcbiAgICB9XHJcbiAgICBvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlcnMuYWRkKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGNyZWF0ZUZsYXNoVGVzdGVyID0gZnVuY3Rpb24gY3JlYXRlRmxhc2hUZXN0ZXIoZWwsIHN3ZkNvbmZpZykge1xyXG4gICAgaWYgKCF3aW5kb3dbRkxBU0hfVEVTVF0pIHtcclxuICAgICAgICB3aW5kb3dbRkxBU0hfVEVTVF0gPSBuZXcgRmxhc2hUZXN0ZXIoZWwsIHN3ZkNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2luZG93W0ZMQVNIX1RFU1RdO1xyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgdW5pcXVlID0gcmVxdWlyZSgnLi91dGlscycpLnVuaXF1ZTtcclxubGV0IGlzUG9zaXRpdmVJbnQgPSByZXF1aXJlKCcuL3V0aWxzJykuaXNQb3NpdGl2ZUludDtcclxubGV0IHN0cmluZ0VuZHNXaXRoID0gcmVxdWlyZSgnLi91dGlscycpLnN0cmluZ0VuZHNXaXRoO1xyXG5sZXQgU2luZ2xlVmFsdWVSZWdpc3RyeSA9IHJlcXVpcmUoJy4vcmVnaXN0cnknKS5TaW5nbGVWYWx1ZVJlZ2lzdHJ5O1xyXG5sZXQgTXVsdGlwbGVWYWx1ZXNSZWdpc3RyeSA9IHJlcXVpcmUoJy4vcmVnaXN0cnknKS5NdWx0aXBsZVZhbHVlc1JlZ2lzdHJ5O1xyXG5jb25zdCByZWdpc3RyeSA9IHJlcXVpcmUoJy4vanNGbGFzaEJyaWRnZVJlZ2lzdHJ5Jyk7XHJcbmNvbnN0IFZQQUlEX0ZMQVNIX0hBTkRMRVIgPSAndnBhaWRfdmlkZW9fZmxhc2hfaGFuZGxlcic7XHJcbmNvbnN0IEVSUk9SID0gJ0FkRXJyb3InO1xyXG5cclxuZXhwb3J0IGNsYXNzIEpTRmxhc2hCcmlkZ2Uge1xyXG4gICAgY29uc3RydWN0b3IgKGVsLCBmbGFzaFVSTCwgZmxhc2hJRCwgd2lkdGgsIGhlaWdodCwgbG9hZEhhbmRTaGFrZSkge1xyXG4gICAgICAgIHRoaXMuX2VsID0gZWw7XHJcbiAgICAgICAgdGhpcy5fZmxhc2hJRCA9IGZsYXNoSUQ7XHJcbiAgICAgICAgdGhpcy5fZmxhc2hVUkwgPSBmbGFzaFVSTDtcclxuICAgICAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLl9oYW5kbGVycyA9IG5ldyBNdWx0aXBsZVZhbHVlc1JlZ2lzdHJ5KCk7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0gbmV3IFNpbmdsZVZhbHVlUmVnaXN0cnkoKTtcclxuICAgICAgICB0aGlzLl91bmlxdWVNZXRob2RJZGVudGlmaWVyID0gdW5pcXVlKHRoaXMuX2ZsYXNoSUQpO1xyXG4gICAgICAgIHRoaXMuX3JlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5faGFuZFNoYWtlSGFuZGxlciA9IGxvYWRIYW5kU2hha2U7XHJcblxyXG4gICAgICAgIHJlZ2lzdHJ5LmFkZEluc3RhbmNlKHRoaXMuX2ZsYXNoSUQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9oYW5kbGVycy5hZGQoZXZlbnROYW1lLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlcnMucmVtb3ZlKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZkV2ZW50KGV2ZW50TmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVycy5yZW1vdmVCeUtleShldmVudE5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZkFsbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlcnMucmVtb3ZlQWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbEZsYXNoTWV0aG9kKG1ldGhvZE5hbWUsIGFyZ3MgPSBbXSwgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2tJRCA9ICcnO1xyXG4gICAgICAgIC8vIGlmIG5vIGNhbGxiYWNrLCBzb21lIG1ldGhvZHMgdGhlIHJldHVybiBpcyB2b2lkIHNvIHRoZXkgZG9uJ3QgbmVlZCBjYWxsYmFja1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjYWxsYmFja0lEID0gYCR7dGhpcy5fdW5pcXVlTWV0aG9kSWRlbnRpZmllcigpfV8ke21ldGhvZE5hbWV9YDtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLmFkZChjYWxsYmFja0lELCBjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy9tZXRob2RzIGFyZSBjcmVhdGVkIGJ5IEV4dGVybmFsSW50ZXJmYWNlLmFkZENhbGxiYWNrIGluIGFzMyBjb2RlLCBpZiBmb3Igc29tZSByZWFzb24gaXQgZmFpbGVkXHJcbiAgICAgICAgICAgIC8vdGhpcyBjb2RlIHdpbGwgdGhyb3cgYW4gZXJyb3JcclxuICAgICAgICAgICAgdGhpcy5fZWxbbWV0aG9kTmFtZV0oW2NhbGxiYWNrSURdLmNvbmNhdChhcmdzKSk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAkYXN5bmNDYWxsYmFjay5jYWxsKHRoaXMsIGNhbGxiYWNrSUQsIGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vaWYgdGhlcmUgaXNuJ3QgYW55IGNhbGxiYWNrIHRvIHJldHVybiBlcnJvciB1c2UgZXJyb3IgZXZlbnQgaGFuZGxlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJpZ2dlcihFUlJPUiwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2FsbGJhY2soY2FsbGJhY2spIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzLnJlbW92ZUJ5VmFsdWUoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNhbGxiYWNrQnlNZXRob2ROYW1lKHN1ZmZpeCkge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5maWx0ZXJLZXlzKChrZXkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ0VuZHNXaXRoKGtleSwgc3VmZml4KTtcclxuICAgICAgICB9KS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnJlbW92ZShrZXkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUFsbENhbGxiYWNrcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzLnJlbW92ZUFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIF90cmlnZ2VyKGV2ZW50TmFtZSwgZXZlbnQpIHtcclxuICAgICAgICB0aGlzLl9oYW5kbGVycy5nZXQoZXZlbnROYW1lKS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICAvL2NsaWNrVGhydSBoYXMgdG8gYmUgc3luYywgaWYgbm90IHdpbGwgYmUgYmxvY2sgYnkgdGhlIHBvcHVwYmxvY2tlclxyXG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnQWRDbGlja1RocnUnKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFuZGxlcnMuZ2V0KGV2ZW50TmFtZSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfY2FsbENhbGxiYWNrKG1ldGhvZE5hbWUsIGNhbGxiYWNrSUQsIGVyciwgcmVzdWx0KSB7XHJcblxyXG4gICAgICAgIGxldCBjYWxsYmFjayA9IHRoaXMuX2NhbGxiYWNrcy5nZXQoY2FsbGJhY2tJRCk7XHJcblxyXG4gICAgICAgIC8vbm90IGFsbCBtZXRob2RzIGNhbGxiYWNrJ3MgYXJlIG1hbmRhdG9yeVxyXG4gICAgICAgIC8vYnV0IGlmIHRoZXJlIGV4aXN0IGFuIGVycm9yLCBmaXJlIHRoZSBlcnJvciBldmVudFxyXG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgaWYgKGVyciAmJiBjYWxsYmFja0lEID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKEVSUk9SLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRhc3luY0NhbGxiYWNrLmNhbGwodGhpcywgY2FsbGJhY2tJRCwgZXJyLCByZXN1bHQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBfaGFuZFNoYWtlKGVyciwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3JlYWR5ID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5faGFuZFNoYWtlSGFuZGxlcikge1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kU2hha2VIYW5kbGVyKGVyciwgZGF0YSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9oYW5kU2hha2VIYW5kbGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL21ldGhvZHMgbGlrZSBwcm9wZXJ0aWVzIHNwZWNpZmljIHRvIHRoaXMgaW1wbGVtZW50YXRpb24gb2YgVlBBSURcclxuICAgIGdldFNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt3aWR0aDogdGhpcy5fd2lkdGgsIGhlaWdodDogdGhpcy5faGVpZ2h0fTtcclxuICAgIH1cclxuICAgIHNldFNpemUobmV3V2lkdGgsIG5ld0hlaWdodCkge1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gaXNQb3NpdGl2ZUludChuZXdXaWR0aCwgdGhpcy5fd2lkdGgpO1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGlzUG9zaXRpdmVJbnQobmV3SGVpZ2h0LCB0aGlzLl9oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuX2VsLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB0aGlzLl93aWR0aCk7XHJcbiAgICAgICAgdGhpcy5fZWwuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLl9oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgZ2V0V2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xyXG4gICAgfVxyXG4gICAgc2V0V2lkdGgobmV3V2lkdGgpIHtcclxuICAgICAgICB0aGlzLnNldFNpemUobmV3V2lkdGgsIHRoaXMuX2hlaWdodCk7XHJcbiAgICB9XHJcbiAgICBnZXRIZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICAgIH1cclxuICAgIHNldEhlaWdodChuZXdIZWlnaHQpIHtcclxuICAgICAgICB0aGlzLnNldFNpemUodGhpcy5fd2lkdGgsIG5ld0hlaWdodCk7XHJcbiAgICB9XHJcbiAgICBnZXRGbGFzaElEKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mbGFzaElEO1xyXG4gICAgfVxyXG4gICAgZ2V0Rmxhc2hVUkwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZsYXNoVVJMO1xyXG4gICAgfVxyXG4gICAgaXNSZWFkeSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZHk7XHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMub2ZmQWxsKCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICByZWdpc3RyeS5yZW1vdmVJbnN0YW5jZUJ5SUQodGhpcy5fZmxhc2hJRCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2VsLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLl9lbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiAkYXN5bmNDYWxsYmFjayhjYWxsYmFja0lELCBlcnIsIHJlc3VsdCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNhbGxiYWNrID0gdGhpcy5fY2FsbGJhY2tzLmdldChjYWxsYmFja0lEKTtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnJlbW92ZShjYWxsYmFja0lEKTtcclxuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIDApO1xyXG59XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSlNGbGFzaEJyaWRnZSwgJ1ZQQUlEX0ZMQVNIX0hBTkRMRVInLCB7XHJcbiAgICB3cml0YWJsZTogZmFsc2UsXHJcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgdmFsdWU6IFZQQUlEX0ZMQVNIX0hBTkRMRVJcclxufSk7XHJcblxyXG4vKipcclxuICogRXh0ZXJuYWwgaW50ZXJmYWNlIGhhbmRsZXJcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGZsYXNoSUQgaWRlbnRpZmllciBvZiB0aGUgZmxhc2ggd2hvIGNhbGwgdGhpc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZUlEIHdoYXQgdHlwZSBvZiBtZXNzYWdlIGlzLCBjYW4gYmUgJ2V2ZW50JyBvciAnY2FsbGJhY2snXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlTmFtZSBpZiB0aGUgdHlwZUlEIGlzIGEgZXZlbnQgdGhlIHR5cGVOYW1lIHdpbGwgYmUgdGhlIGV2ZW50TmFtZSwgaWYgaXMgYSBjYWxsYmFjayB0aGUgdHlwZUlEIGlzIHRoZSBtZXRob2ROYW1lIHRoYXQgaXMgcmVsYXRlZCB0aGlzIGNhbGxiYWNrXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjYWxsYmFja0lEIG9ubHkgYXBwbGllcyB3aGVuIHRoZSB0eXBlSUQgaXMgJ2NhbGxiYWNrJywgaWRlbnRpZmllciBvZiB0aGUgY2FsbGJhY2sgdG8gY2FsbFxyXG4gKiBAcGFyYW0ge29iamVjdH0gZXJyb3IgZXJyb3Igb2JqZWN0XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXHJcbiAqL1xyXG53aW5kb3dbVlBBSURfRkxBU0hfSEFORExFUl0gPSAoZmxhc2hJRCwgdHlwZUlELCB0eXBlTmFtZSwgY2FsbGJhY2tJRCwgZXJyb3IsIGRhdGEpID0+IHtcclxuICAgIGxldCBpbnN0YW5jZSA9IHJlZ2lzdHJ5LmdldEluc3RhbmNlQnlJRChmbGFzaElEKTtcclxuICAgIGlmICghaW5zdGFuY2UpIHJldHVybjtcclxuICAgIGlmICh0eXBlTmFtZSA9PT0gJ2hhbmRTaGFrZScpIHtcclxuICAgICAgICBpbnN0YW5jZS5faGFuZFNoYWtlKGVycm9yLCBkYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHR5cGVJRCAhPT0gJ2V2ZW50Jykge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5fY2FsbENhbGxiYWNrKHR5cGVOYW1lLCBjYWxsYmFja0lELCBlcnJvciwgZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UuX3RyaWdnZXIodHlwZU5hbWUsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBTaW5nbGVWYWx1ZVJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9yZWdpc3RyeScpLlNpbmdsZVZhbHVlUmVnaXN0cnk7XHJcbmxldCBpbnN0YW5jZXMgPSBuZXcgU2luZ2xlVmFsdWVSZWdpc3RyeSgpO1xyXG5cclxuY29uc3QgSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5ID0ge307XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShKU0ZsYXNoQnJpZGdlUmVnaXN0cnksICdhZGRJbnN0YW5jZScsIHtcclxuICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gKGlkLCBpbnN0YW5jZSkge1xyXG4gICAgICAgIGluc3RhbmNlcy5hZGQoaWQsIGluc3RhbmNlKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5LCAnZ2V0SW5zdGFuY2VCeUlEJywge1xyXG4gICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgIHZhbHVlOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2VzLmdldChpZCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTRmxhc2hCcmlkZ2VSZWdpc3RyeSwgJ3JlbW92ZUluc3RhbmNlQnlJRCcsIHtcclxuICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlcy5yZW1vdmUoaWQpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5O1xyXG5cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE11bHRpcGxlVmFsdWVzUmVnaXN0cnkge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuX3JlZ2lzdHJpZXMgPSB7fTtcclxuICAgIH1cclxuICAgIGFkZCAoaWQsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9yZWdpc3RyaWVzW2lkXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RyaWVzW2lkXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fcmVnaXN0cmllc1tpZF0uaW5kZXhPZih2YWx1ZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZ2lzdHJpZXNbaWRdLnB1c2godmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCAoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0cmllc1tpZF0gfHwgW107XHJcbiAgICB9XHJcbiAgICBmaWx0ZXJLZXlzIChoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3JlZ2lzdHJpZXMpLmZpbHRlcihoYW5kbGVyKTtcclxuICAgIH1cclxuICAgIGZpbmRCeVZhbHVlICh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5fcmVnaXN0cmllcykuZmlsdGVyKChrZXkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdHJpZXNba2V5XS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBrZXlzO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3JlZ2lzdHJpZXNba2V5XSkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fcmVnaXN0cmllc1trZXldLmluZGV4T2YodmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7IHJldHVybjsgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyaWVzW2tleV0uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICAgIHJlbW92ZUJ5S2V5IChpZCkge1xyXG4gICAgICAgIGxldCBvbGQgPSB0aGlzLl9yZWdpc3RyaWVzW2lkXTtcclxuICAgICAgICBkZWxldGUgdGhpcy5fcmVnaXN0cmllc1tpZF07XHJcbiAgICAgICAgcmV0dXJuIG9sZDtcclxuICAgIH1cclxuICAgIHJlbW92ZUJ5VmFsdWUgKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGtleXMgPSB0aGlzLmZpbmRCeVZhbHVlKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4ga2V5cy5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVBbGwoKSB7XHJcbiAgICAgICAgbGV0IG9sZCA9IHRoaXMuX3JlZ2lzdHJpZXM7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0cmllcyA9IHt9O1xyXG4gICAgICAgIHJldHVybiBvbGQ7XHJcbiAgICB9XHJcbiAgICBzaXplKCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9yZWdpc3RyaWVzKS5sZW5ndGg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVWYWx1ZVJlZ2lzdHJ5IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLl9yZWdpc3RyaWVzID0ge307XHJcbiAgICB9XHJcbiAgICBhZGQgKGlkLCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3JlZ2lzdHJpZXNbaWRdID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdHJpZXNbaWRdO1xyXG4gICAgfVxyXG4gICAgZmlsdGVyS2V5cyAoaGFuZGxlcikge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9yZWdpc3RyaWVzKS5maWx0ZXIoaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBmaW5kQnlWYWx1ZSAodmFsdWUpIHtcclxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX3JlZ2lzdHJpZXMpLmZpbHRlcigoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyaWVzW2tleV0gPT09IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ga2V5cztcclxuICAgIH1cclxuICAgIHJlbW92ZSAoaWQpIHtcclxuICAgICAgICBsZXQgb2xkID0gdGhpcy5fcmVnaXN0cmllc1tpZF07XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX3JlZ2lzdHJpZXNbaWRdO1xyXG4gICAgICAgIHJldHVybiBvbGQ7XHJcbiAgICB9XHJcbiAgICByZW1vdmVCeVZhbHVlICh2YWx1ZSkge1xyXG4gICAgICAgIGxldCBrZXlzID0gdGhpcy5maW5kQnlWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGtleXMubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKGtleSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVBbGwoKSB7XHJcbiAgICAgICAgbGV0IG9sZCA9IHRoaXMuX3JlZ2lzdHJpZXM7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0cmllcyA9IHt9O1xyXG4gICAgICAgIHJldHVybiBvbGQ7XHJcbiAgICB9XHJcbiAgICBzaXplKCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9yZWdpc3RyaWVzKS5sZW5ndGg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWUocHJlZml4KSB7XHJcbiAgICBsZXQgY291bnQgPSAtMTtcclxuICAgIHJldHVybiBmID0+IHtcclxuICAgICAgICByZXR1cm4gYCR7cHJlZml4fV8keysrY291bnR9YDtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxiYWNrVGltZW91dCh0aW1lciwgb25TdWNjZXNzLCBvblRpbWVvdXQpIHtcclxuXHJcbiAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICBvblN1Y2Nlc3MgPSBub29wO1xyXG4gICAgICAgIG9uVGltZW91dCgpO1xyXG5cclxuICAgIH0sIHRpbWVyKTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICBvblN1Y2Nlc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhJRChwYXJlbnQsIGlkLCBjbGVhbkNvbnRlbnQgPSBmYWxzZSkge1xyXG4gICAgdmFyIG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbkVsLmlkID0gaWQ7XHJcbiAgICBpZiAoY2xlYW5Db250ZW50KSB7XHJcbiAgICAgICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5FbCk7XHJcbiAgICByZXR1cm4gbkVsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQb3NpdGl2ZUludChuZXdWYWwsIG9sZFZhbCkge1xyXG4gICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG5ld1ZhbCkpICYmIGlzRmluaXRlKG5ld1ZhbCkgJiYgbmV3VmFsID4gMCA/IG5ld1ZhbCA6IG9sZFZhbDtcclxufVxyXG5cclxubGV0IGVuZHNXaXRoID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKSByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aDtcclxuICAgIHJldHVybiBmdW5jdGlvbiBlbmRzV2l0aCAoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbikge1xyXG4gICAgICAgIHZhciBzdWJqZWN0U3RyaW5nID0gdGhpcy50b1N0cmluZygpO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHBvc2l0aW9uID4gc3ViamVjdFN0cmluZy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcG9zaXRpb24gPSBzdWJqZWN0U3RyaW5nLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcG9zaXRpb24gLT0gc2VhcmNoU3RyaW5nLmxlbmd0aDtcclxuICAgICAgICB2YXIgbGFzdEluZGV4ID0gc3ViamVjdFN0cmluZy5pbmRleE9mKHNlYXJjaFN0cmluZywgcG9zaXRpb24pO1xyXG4gICAgICAgIHJldHVybiBsYXN0SW5kZXggIT09IC0xICYmIGxhc3RJbmRleCA9PT0gcG9zaXRpb247XHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0VuZHNXaXRoKHN0cmluZywgc2VhcmNoKSB7XHJcbiAgICByZXR1cm4gZW5kc1dpdGguY2FsbChzdHJpbmcsIHNlYXJjaCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlRmxhc2hFbChlbCkge1xyXG4gICAgLy8gY2FuJ3QgdXNlIGRpc3BsYXkgbm9uZSBvciB2aXNpYmlsaXR5IG5vbmUgYmVjYXVzZSB3aWxsIGJsb2NrIGZsYXNoIGluIHNvbWUgYnJvd3NlcnNcclxuICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGVsLnN0eWxlLmxlZnQgPSAnLTFweCc7XHJcbiAgICBlbC5zdHlsZS50b3AgPSAnLTFweCc7XHJcbiAgICBlbC5zdHlsZS53aWR0aCA9ICcxcHgnO1xyXG4gICAgZWwuc3R5bGUuaGVpZ2h0ID0gJzFweCc7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIE1FVEhPRFMgPSBbXHJcbiAgICAnaGFuZHNoYWtlVmVyc2lvbicsXHJcbiAgICAnaW5pdEFkJyxcclxuICAgICdzdGFydEFkJyxcclxuICAgICdzdG9wQWQnLFxyXG4gICAgJ3NraXBBZCcsIC8vIFZQQUlEIDIuMCBuZXcgbWV0aG9kXHJcbiAgICAncmVzaXplQWQnLFxyXG4gICAgJ3BhdXNlQWQnLFxyXG4gICAgJ3Jlc3VtZUFkJyxcclxuICAgICdleHBhbmRBZCcsXHJcbiAgICAnY29sbGFwc2VBZCcsXHJcbiAgICAnc3Vic2NyaWJlJyxcclxuICAgICd1bnN1YnNjcmliZSdcclxuXTtcclxuXHJcbnZhciBFVkVOVFMgPSBbXHJcbiAgICAnQWRMb2FkZWQnLFxyXG4gICAgJ0FkU3RhcnRlZCcsXHJcbiAgICAnQWRTdG9wcGVkJyxcclxuICAgICdBZFNraXBwZWQnLFxyXG4gICAgJ0FkU2tpcHBhYmxlU3RhdGVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XHJcbiAgICAnQWRTaXplQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxyXG4gICAgJ0FkTGluZWFyQ2hhbmdlJyxcclxuICAgICdBZER1cmF0aW9uQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxyXG4gICAgJ0FkRXhwYW5kZWRDaGFuZ2UnLFxyXG4gICAgJ0FkUmVtYWluaW5nVGltZUNoYW5nZScsIC8vIFtEZXByZWNhdGVkIGluIDIuMF0gYnV0IHdpbGwgYmUgc3RpbGwgZmlyZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XHJcbiAgICAnQWRWb2x1bWVDaGFuZ2UnLFxyXG4gICAgJ0FkSW1wcmVzc2lvbicsXHJcbiAgICAnQWRWaWRlb1N0YXJ0JyxcclxuICAgICdBZFZpZGVvRmlyc3RRdWFydGlsZScsXHJcbiAgICAnQWRWaWRlb01pZHBvaW50JyxcclxuICAgICdBZFZpZGVvVGhpcmRRdWFydGlsZScsXHJcbiAgICAnQWRWaWRlb0NvbXBsZXRlJyxcclxuICAgICdBZENsaWNrVGhydScsXHJcbiAgICAnQWRJbnRlcmFjdGlvbicsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcclxuICAgICdBZFVzZXJBY2NlcHRJbnZpdGF0aW9uJyxcclxuICAgICdBZFVzZXJNaW5pbWl6ZScsXHJcbiAgICAnQWRVc2VyQ2xvc2UnLFxyXG4gICAgJ0FkUGF1c2VkJyxcclxuICAgICdBZFBsYXlpbmcnLFxyXG4gICAgJ0FkTG9nJyxcclxuICAgICdBZEVycm9yJ1xyXG5dO1xyXG5cclxudmFyIEdFVFRFUlMgPSBbXHJcbiAgICAnZ2V0QWRMaW5lYXInLFxyXG4gICAgJ2dldEFkV2lkdGgnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxyXG4gICAgJ2dldEFkSGVpZ2h0JywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcclxuICAgICdnZXRBZEV4cGFuZGVkJyxcclxuICAgICdnZXRBZFNraXBwYWJsZVN0YXRlJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcclxuICAgICdnZXRBZFJlbWFpbmluZ1RpbWUnLFxyXG4gICAgJ2dldEFkRHVyYXRpb24nLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxyXG4gICAgJ2dldEFkVm9sdW1lJyxcclxuICAgICdnZXRBZENvbXBhbmlvbnMnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxyXG4gICAgJ2dldEFkSWNvbnMnIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXHJcbl07XHJcblxyXG52YXIgU0VUVEVSUyA9IFtcclxuICAgICdzZXRBZFZvbHVtZSdcclxuXTtcclxuXHJcblxyXG4vKipcclxuICogVGhpcyBjYWxsYmFjayBpcyBkaXNwbGF5ZWQgYXMgZ2xvYmFsIG1lbWJlci4gVGhlIGNhbGxiYWNrIHVzZSBub2RlanMgZXJyb3ItZmlyc3QgY2FsbGJhY2sgc3R5bGVcclxuICogQGNhbGxiYWNrIE5vZGVTdHlsZUNhbGxiYWNrXHJcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9XHJcbiAqIEBwYXJhbSB7dW5kZWZpbmVkfG9iamVjdH1cclxuICovXHJcblxyXG5cclxuLyoqXHJcbiAqIElWUEFJREFkVW5pdFxyXG4gKlxyXG4gKiBAY2xhc3NcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IGNyZWF0aXZlXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXHJcbiAqIEBwYXJhbSB7SFRNTFZpZGVvRWxlbWVudH0gdmlkZW9cclxuICovXHJcbmZ1bmN0aW9uIElWUEFJREFkVW5pdChjcmVhdGl2ZSwgZWwsIHZpZGVvKSB7fVxyXG5cclxuXHJcbi8qKlxyXG4gKiBoYW5kc2hha2VWZXJzaW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBWUEFJRFZlcnNpb25cclxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcclxuICovXHJcbklWUEFJREFkVW5pdC5wcm90b3R5cGUuaGFuZHNoYWtlVmVyc2lvbiA9IGZ1bmN0aW9uIChWUEFJRFZlcnNpb24sIGNhbGxiYWNrKSB7fTtcclxuXHJcbi8qKlxyXG4gKiBpbml0QWRcclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICogQHBhcmFtIHtzdHJpbmd9IHZpZXdNb2RlIGNhbiBiZSAnbm9ybWFsJywgJ3RodW1ibmFpbCcgb3IgJ2Z1bGxzY3JlZW4nXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXNpcmVkQml0cmF0ZSBpbmRpY2F0ZXMgdGhlIGRlc2lyZWQgYml0cmF0ZSBpbiBrYnBzXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY3JlYXRpdmVEYXRhXSB1c2VkIGZvciBhZGRpdGlvbmFsIGluaXRpYWxpemF0aW9uIGRhdGFcclxuICogQHBhcmFtIHtvYmplY3R9IFtlbnZpcm9ubWVudFZhcnNdIHVzZWQgZm9yIHBhc3NpbmcgaW1wbGVtZW50YXRpb24tc3BlY2lmaWMgb2YganMgdmVyc2lvblxyXG4gKiBAcGFyYW0ge05vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xyXG4gKi9cclxuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5pbml0QWQgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSwgZW52aXJvbm1lbnRWYXJzLCBjYWxsYmFjaykge307XHJcblxyXG4vKipcclxuICogc3RhcnRBZFxyXG4gKlxyXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xyXG4gKi9cclxuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zdGFydEFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xyXG5cclxuLyoqXHJcbiAqIHN0b3BBZFxyXG4gKlxyXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xyXG4gKi9cclxuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zdG9wQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XHJcblxyXG4vKipcclxuICogc2tpcEFkXHJcbiAqXHJcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXHJcbiAqL1xyXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnNraXBBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcclxuXHJcbi8qKlxyXG4gKiByZXNpemVBZFxyXG4gKlxyXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xyXG4gKi9cclxuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5yZXNpemVBZCA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBjYWxsYmFjaykge307XHJcblxyXG4vKipcclxuICogcGF1c2VBZFxyXG4gKlxyXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xyXG4gKi9cclxuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5wYXVzZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xyXG5cclxuLyoqXHJcbiAqIHJlc3VtZUFkXHJcbiAqXHJcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXHJcbiAqL1xyXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnJlc3VtZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xyXG5cclxuLyoqXHJcbiAqIGV4cGFuZEFkXHJcbiAqXHJcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXHJcbiAqL1xyXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmV4cGFuZEFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xyXG5cclxuLyoqXHJcbiAqIGNvbGxhcHNlQWRcclxuICpcclxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcclxuICovXHJcbklWUEFJREFkVW5pdC5wcm90b3R5cGUuY29sbGFwc2VBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcclxuXHJcbi8qKlxyXG4gKiBzdWJzY3JpYmVcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGhhbmRsZXJcclxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcclxuICovXHJcbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIsIGNvbnRleHQpIHt9O1xyXG5cclxuLyoqXHJcbiAqIHN0YXJ0QWRcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXJcclxuICovXHJcbklWUEFJREFkVW5pdC5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlcikge307XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBnZXRBZExpbmVhclxyXG4gKlxyXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xyXG4gKi9cclxuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZExpbmVhciA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcclxuXHJcbi8qKlxyXG4gKiBnZXRBZFdpZHRoXHJcbiAqXHJcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXHJcbiAqL1xyXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkV2lkdGggPSBmdW5jdGlvbihjYWxsYmFjaykge307XHJcblxyXG4vKipcclxuICogZ2V0QWRIZWlnaHRcclxuICpcclxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcclxuICovXHJcbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRIZWlnaHQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XHJcblxyXG4vKipcclxuICogZ2V0QWRFeHBhbmRlZFxyXG4gKlxyXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xyXG4gKi9cclxuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZEV4cGFuZGVkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xyXG5cclxuLyoqXHJcbiAqIGdldEFkU2tpcHBhYmxlU3RhdGVcclxuICpcclxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcclxuICovXHJcbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRTa2lwcGFibGVTdGF0ZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcclxuXHJcbi8qKlxyXG4gKiBnZXRBZFJlbWFpbmluZ1RpbWVcclxuICpcclxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcclxuICovXHJcbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRSZW1haW5pbmdUaW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xyXG5cclxuLyoqXHJcbiAqIGdldEFkRHVyYXRpb25cclxuICpcclxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcclxuICovXHJcbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWREdXJhdGlvbiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcclxuXHJcbi8qKlxyXG4gKiBnZXRBZFZvbHVtZVxyXG4gKlxyXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xyXG4gKi9cclxuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZFZvbHVtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcclxuXHJcbi8qKlxyXG4gKiBnZXRBZENvbXBhbmlvbnNcclxuICpcclxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcclxuICovXHJcbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRDb21wYW5pb25zID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xyXG5cclxuLyoqXHJcbiAqIGdldEFkSWNvbnNcclxuICpcclxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcclxuICovXHJcbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRJY29ucyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcclxuXHJcbi8qKlxyXG4gKiBzZXRBZFZvbHVtZVxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdm9sdW1lXHJcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXHJcbiAqL1xyXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnNldEFkVm9sdW1lID0gZnVuY3Rpb24odm9sdW1lLCBjYWxsYmFjaykge307XHJcblxyXG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdNRVRIT0RTJywgTUVUSE9EUyk7XHJcbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ0dFVFRFUlMnLCBHRVRURVJTKTtcclxuYWRkU3RhdGljVG9JbnRlcmZhY2UoSVZQQUlEQWRVbml0LCAnU0VUVEVSUycsIFNFVFRFUlMpO1xyXG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdFVkVOVFMnLCAgRVZFTlRTKTtcclxuXHJcblxyXG52YXIgVlBBSUQxX01FVEhPRFMgPSBNRVRIT0RTLmZpbHRlcihmdW5jdGlvbihtZXRob2QpIHtcclxuICAgIHJldHVybiBbJ3NraXBBZCddLmluZGV4T2YobWV0aG9kKSA9PT0gLTE7XHJcbn0pO1xyXG5cclxuYWRkU3RhdGljVG9JbnRlcmZhY2UoSVZQQUlEQWRVbml0LCAnY2hlY2tWUEFJREludGVyZmFjZScsIGZ1bmN0aW9uIGNoZWNrVlBBSURJbnRlcmZhY2UgKGNyZWF0aXZlKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gVlBBSUQxX01FVEhPRFMuZXZlcnkoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjcmVhdGl2ZVtrZXldID09PSAnZnVuY3Rpb24nO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSVZQQUlEQWRVbml0O1xyXG5cclxuZnVuY3Rpb24gYWRkU3RhdGljVG9JbnRlcmZhY2UoSW50ZXJmYWNlLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEludGVyZmFjZSwgbmFtZSwge1xyXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBJVlBBSURBZFVuaXQgPSByZXF1aXJlKCcuL0lWUEFJREFkVW5pdCcpO1xyXG52YXIgU3Vic2NyaWJlciA9IHJlcXVpcmUoJy4vc3Vic2NyaWJlcicpO1xyXG52YXIgY2hlY2tWUEFJREludGVyZmFjZSA9IElWUEFJREFkVW5pdC5jaGVja1ZQQUlESW50ZXJmYWNlO1xyXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XHJcbnZhciBNRVRIT0RTID0gSVZQQUlEQWRVbml0Lk1FVEhPRFM7XHJcbnZhciBFUlJPUiA9ICdBZEVycm9yJztcclxudmFyIEFEX0NMSUNLID0gJ0FkQ2xpY2tUaHJ1JztcclxudmFyIEZJTFRFUkVEX0VWRU5UUyA9IElWUEFJREFkVW5pdC5FVkVOVFMuZmlsdGVyKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgcmV0dXJuIGV2ZW50ICE9IEFEX0NMSUNLO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBnbG9iYWwgbWVtYmVyLiBUaGUgY2FsbGJhY2sgdXNlIG5vZGVqcyBlcnJvci1maXJzdCBjYWxsYmFjayBzdHlsZVxyXG4gKiBAY2FsbGJhY2sgTm9kZVN0eWxlQ2FsbGJhY2tcclxuICogQHBhcmFtIHtzdHJpbmd8bnVsbH1cclxuICogQHBhcmFtIHt1bmRlZmluZWR8b2JqZWN0fVxyXG4gKi9cclxuXHJcblxyXG4vKipcclxuICogVlBBSURBZFVuaXRcclxuICogQGNsYXNzXHJcbiAqXHJcbiAqIEBwYXJhbSBWUEFJRENyZWF0aXZlXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtlbF0gdGhpcyB3aWxsIGJlIHVzZWQgaW4gaW5pdEFkIGVudmlyb25tZW50VmFycy5zbG90IGlmIGRlZmluZWRcclxuICogQHBhcmFtIHtIVE1MVmlkZW9FbGVtZW50fSBbdmlkZW9dIHRoaXMgd2lsbCBiZSB1c2VkIGluIGluaXRBZCBlbnZpcm9ubWVudFZhcnMudmlkZW9TbG90IGlmIGRlZmluZWRcclxuICovXHJcbmZ1bmN0aW9uIFZQQUlEQWRVbml0KFZQQUlEQ3JlYXRpdmUsIGVsLCB2aWRlbywgaWZyYW1lKSB7XHJcbiAgICB0aGlzLl9pc1ZhbGlkID0gY2hlY2tWUEFJREludGVyZmFjZShWUEFJRENyZWF0aXZlKTtcclxuICAgIGlmICh0aGlzLl9pc1ZhbGlkKSB7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRpdmUgPSBWUEFJRENyZWF0aXZlO1xyXG4gICAgICAgIHRoaXMuX2VsID0gZWw7XHJcbiAgICAgICAgdGhpcy5fdmlkZW9FbCA9IHZpZGVvO1xyXG4gICAgICAgIHRoaXMuX2lmcmFtZSA9IGlmcmFtZTtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpYmVycyA9IG5ldyBTdWJzY3JpYmVyKCk7XHJcbiAgICAgICAgJGFkZEV2ZW50c1N1YnNjcmliZXJzLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblZQQUlEQWRVbml0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSVZQQUlEQWRVbml0LnByb3RvdHlwZSk7XHJcblxyXG4vKipcclxuICogaXNWYWxpZFZQQUlEQWQgd2lsbCByZXR1cm4gaWYgdGhlIFZQQUlEQ3JlYXRpdmUgcGFzc2VkIGluIGNvbnN0cnVjdG9yIGlzIHZhbGlkIG9yIG5vdFxyXG4gKlxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuVlBBSURBZFVuaXQucHJvdG90eXBlLmlzVmFsaWRWUEFJREFkID0gZnVuY3Rpb24gaXNWYWxpZFZQQUlEQWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNWYWxpZDtcclxufTtcclxuXHJcbklWUEFJREFkVW5pdC5NRVRIT0RTLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XHJcbiAgICAvL05PVEU6IHRoaXMgbWV0aG9kcyBhcmd1bWVudHMgb3JkZXIgYXJlIGltcGxlbWVudGVkIGRpZmZlcmVudGx5IGZyb20gdGhlIHNwZWNcclxuICAgIHZhciBpZ25vcmVzID0gW1xyXG4gICAgICAgICdzdWJzY3JpYmUnLFxyXG4gICAgICAgICd1bnN1YnNjcmliZScsXHJcbiAgICAgICAgJ2luaXRBZCdcclxuICAgIF07XHJcblxyXG4gICAgaWYgKGlnbm9yZXMuaW5kZXhPZihtZXRob2QpICE9PSAtMSkgcmV0dXJuO1xyXG5cclxuICAgIFZQQUlEQWRVbml0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcmlhdHkgPSBJVlBBSURBZFVuaXQucHJvdG90eXBlW21ldGhvZF0ubGVuZ3RoO1xyXG4gICAgICAgIC8vIFRPRE8gYXZvaWQgbGVha2luZyBhcmd1bWVudHNcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkL3dpa2kvT3B0aW1pemF0aW9uLWtpbGxlcnMjMzItbGVha2luZy1hcmd1bWVudHNcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gKGFyaWF0eSA9PT0gYXJncy5sZW5ndGgpID8gYXJncy5wb3AoKSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQsIGVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0aXZlW21ldGhvZF0uYXBwbHkodGhpcy5fY3JlYXRpdmUsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yID0gZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAwKTtcclxuICAgIH07XHJcbn0pO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBpbml0QWQgY29uY3JlYXRlIGltcGxlbWVudGF0aW9uXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxyXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB2aWV3TW9kZSBjYW4gYmUgJ25vcm1hbCcsICd0aHVtYm5haWwnIG9yICdmdWxsc2NyZWVuJ1xyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVzaXJlZEJpdHJhdGUgaW5kaWNhdGVzIHRoZSBkZXNpcmVkIGJpdHJhdGUgaW4ga2Jwc1xyXG4gKiBAcGFyYW0ge29iamVjdH0gW2NyZWF0aXZlRGF0YV0gdXNlZCBmb3IgYWRkaXRpb25hbCBpbml0aWFsaXphdGlvbiBkYXRhXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbZW52aXJvbm1lbnRWYXJzXSB1c2VkIGZvciBwYXNzaW5nIGltcGxlbWVudGF0aW9uLXNwZWNpZmljIG9mIGpzIHZlcnNpb24sIGlmIGVsICYgdmlkZW8gd2FzIHVzZWQgaW4gY29uc3RydWN0b3Igc2xvdCAmIHZpZGVvU2xvdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBvYmplY3RcclxuICogQHBhcmFtIHtOb2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcclxuICovXHJcblZQQUlEQWRVbml0LnByb3RvdHlwZS5pbml0QWQgPSBmdW5jdGlvbiBpbml0QWQod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEsIGVudmlyb25tZW50VmFycywgY2FsbGJhY2spIHtcclxuICAgIGNyZWF0aXZlRGF0YSA9IGNyZWF0aXZlRGF0YSB8fCB7fTtcclxuICAgIGVudmlyb25tZW50VmFycyA9IHV0aWxzLmV4dGVuZCh7XHJcbiAgICAgICAgc2xvdDogdGhpcy5fZWwsXHJcbiAgICAgICAgdmlkZW9TbG90OiB0aGlzLl92aWRlb0VsXHJcbiAgICB9LCBlbnZpcm9ubWVudFZhcnMgfHwge30pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlcnJvcjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGl2ZS5pbml0QWQod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEsIGVudmlyb25tZW50VmFycyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBlcnJvciA9IGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvcik7XHJcbiAgICB9LmJpbmQodGhpcyksIDApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIHN1YnNjcmliZVxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gaGFuZGxlclxyXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxyXG4gKi9cclxuVlBBSURBZFVuaXQucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShldmVudCwgaGFuZGxlciwgY29udGV4dCkge1xyXG4gICAgdGhpcy5fc3Vic2NyaWJlcnMuc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50LCBjb250ZXh0KTtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogdW5zdWJzY3JpYmVcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGhhbmRsZXJcclxuICovXHJcblZQQUlEQWRVbml0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICB0aGlzLl9zdWJzY3JpYmVycy51bnN1YnNjcmliZShoYW5kbGVyLCBldmVudCk7XHJcbn07XHJcblxyXG4vL2FsaWFzXHJcblZQQUlEQWRVbml0LnByb3RvdHlwZS5vbiA9IFZQQUlEQWRVbml0LnByb3RvdHlwZS5zdWJzY3JpYmU7XHJcblZQQUlEQWRVbml0LnByb3RvdHlwZS5vZmYgPSBWUEFJREFkVW5pdC5wcm90b3R5cGUudW5zdWJzY3JpYmU7XHJcblxyXG5JVlBBSURBZFVuaXQuR0VUVEVSUy5mb3JFYWNoKGZ1bmN0aW9uKGdldHRlcikge1xyXG4gICAgVlBBSURBZFVuaXQucHJvdG90eXBlW2dldHRlcl0gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXN1bHQsIGVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0aXZlW2dldHRlcl0oKTtcclxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvciA9IGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgdGhpcy5fc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSwgMCk7XHJcbiAgICB9O1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBzZXRBZFZvbHVtZVxyXG4gKlxyXG4gKiBAcGFyYW0gdm9sdW1lXHJcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXHJcbiAqL1xyXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuc2V0QWRWb2x1bWUgPSBmdW5jdGlvbiBzZXRBZFZvbHVtZSh2b2x1bWUsIGNhbGxiYWNrKSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCwgZXJyb3IgPSBudWxsO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0aXZlLnNldEFkVm9sdW1lKHZvbHVtZSk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0aXZlLmdldEFkVm9sdW1lKCk7XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIGVycm9yID0gZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZXJyb3IpIHtcclxuICAgICAgICAgICAgZXJyb3IgPSB1dGlscy52YWxpZGF0ZShyZXN1bHQgPT09IHZvbHVtZSwgJ2ZhaWxlZCB0byBhcHBseSB2b2x1bWU6ICcgKyB2b2x1bWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvciwgcmVzdWx0KTtcclxuICAgIH0uYmluZCh0aGlzKSwgMCk7XHJcbn07XHJcblxyXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdG9wQWQoKTtcclxuICAgIHRoaXMuX3N1YnNjcmliZXJzLnVuc3Vic2NyaWJlQWxsKCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiAkYWRkRXZlbnRzU3Vic2NyaWJlcnMoKSB7XHJcbiAgICAvLyBzb21lIGFkcyBpbXBsZW1lbnRcclxuICAgIC8vIHNvIHRoZXkgb25seSBoYW5kbGUgb25lIHN1YnNjcmliZXJcclxuICAgIC8vIHRvIGhhbmRsZSB0aGlzIHdlIGNyZWF0ZSBvdXIgb25lXHJcbiAgICBGSUxURVJFRF9FVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLl9jcmVhdGl2ZS5zdWJzY3JpYmUoJHRyaWdnZXIuYmluZCh0aGlzLCBldmVudCksIGV2ZW50KTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgLy8gbWFwIHRoZSBjbGljayBldmVudCB0byBiZSBhbiBvYmplY3QgaW5zdGVhZCBvZiBkZXBlbmRpbmcgb2YgdGhlIG9yZGVyIG9mIHRoZSBhcmd1bWVudHNcclxuICAgIC8vIGFuZCB0byBiZSBjb25zaXN0ZW50IHdpdGggdGhlIGZsYXNoXHJcbiAgICB0aGlzLl9jcmVhdGl2ZS5zdWJzY3JpYmUoJGNsaWNrVGhydUhvb2suYmluZCh0aGlzKSwgQURfQ0xJQ0spO1xyXG5cclxuICAgIC8vIGJlY2F1c2Ugd2UgYXJlIGFkZGluZyB0aGUgZWxlbWVudCBpbnNpZGUgdGhlIGlmcmFtZVxyXG4gICAgLy8gdGhlIHVzZXIgaXMgbm90IGFibGUgdG8gY2xpY2sgaW4gdGhlIHZpZGVvXHJcbiAgICBpZiAodGhpcy5fdmlkZW9FbCkge1xyXG4gICAgICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSB0aGlzLl9pZnJhbWUuY29udGVudERvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgICB2YXIgdmlkZW9FbCA9IHRoaXMuX3ZpZGVvRWw7XHJcbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdmlkZW9FbC5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uICRjbGlja1RocnVIb29rKHVybCwgaWQsIHBsYXllckhhbmRsZXMpIHtcclxuICAgIHRoaXMuX3N1YnNjcmliZXJzLnRyaWdnZXJTeW5jKEFEX0NMSUNLLCB7dXJsOiB1cmwsIGlkOiBpZCwgcGxheWVySGFuZGxlczogcGxheWVySGFuZGxlc30pO1xyXG59XHJcblxyXG5mdW5jdGlvbiAkdHJpZ2dlcihldmVudCkge1xyXG4gICAgLy8gVE9ETyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50c1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzMyLWxlYWtpbmctYXJndW1lbnRzXHJcbiAgICB0aGlzLl9zdWJzY3JpYmVycy50cmlnZ2VyKGV2ZW50LCBBcnJheS5wcm90b3R5cGUuc2xpY2UoYXJndW1lbnRzLCAxKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpIHtcclxuICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCByZXN1bHQpO1xyXG4gICAgfSBlbHNlIGlmIChlcnJvcikge1xyXG4gICAgICAgIHN1YnNjcmliZXJzLnRyaWdnZXIoRVJST1IsIGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREFkVW5pdDtcclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcclxudmFyIHVuaXF1ZSA9IHV0aWxzLnVuaXF1ZSgndnBhaWRJZnJhbWUnKTtcclxudmFyIFZQQUlEQWRVbml0ID0gcmVxdWlyZSgnLi9WUEFJREFkVW5pdCcpO1xyXG5cclxudmFyIGRlZmF1bHRUZW1wbGF0ZSA9ICc8IURPQ1RZUEUgaHRtbD4nICtcclxuICAgICc8aHRtbCBsYW5nPVwiZW5cIj4nICtcclxuICAgICc8aGVhZD48bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L2hlYWQ+JyArXHJcbiAgICAnPGJvZHkgc3R5bGU9XCJtYXJnaW46MDtwYWRkaW5nOjBcIj48ZGl2IGNsYXNzPVwiYWQtZWxlbWVudFwiPjwvZGl2PicgK1xyXG4gICAgJzxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInt7aWZyYW1lVVJMX0pTfX1cIj48L3NjcmlwdD4nICtcclxuICAgICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj4nICtcclxuICAgICd3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKFxcJ3tcImV2ZW50XCI6IFwicmVhZHlcIiwgXCJpZFwiOiBcInt7aWZyYW1lSUR9fVwifVxcJywgXFwne3tvcmlnaW59fVxcJyk7JyArXHJcbiAgICAnPC9zY3JpcHQ+JyArXHJcbiAgICAnPC9ib2R5PicgK1xyXG4gICAgJzwvaHRtbD4nO1xyXG5cclxudmFyIEFEX1NUT1BQRUQgPSAnQWRTdG9wcGVkJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBnbG9iYWwgbWVtYmVyLiBUaGUgY2FsbGJhY2sgdXNlIG5vZGVqcyBlcnJvci1maXJzdCBjYWxsYmFjayBzdHlsZVxyXG4gKiBAY2FsbGJhY2sgTm9kZVN0eWxlQ2FsbGJhY2tcclxuICogQHBhcmFtIHtzdHJpbmd8bnVsbH1cclxuICogQHBhcmFtIHt1bmRlZmluZWR8b2JqZWN0fVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBWUEFJREhUTUw1Q2xpZW50XHJcbiAqIEBjbGFzc1xyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCB0aGF0IHdpbGwgY29udGFpbiB0aGUgaWZyYW1lIHRvIGxvYWQgYWRVbml0IGFuZCBhIGVsIHRvIGFkZCB0byBhZFVuaXQgc2xvdFxyXG4gKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IHZpZGVvIGRlZmF1bHQgdmlkZW8gZWxlbWVudCB0byBiZSB1c2VkIGJ5IGFkVW5pdFxyXG4gKiBAcGFyYW0ge29iamVjdH0gW3RlbXBsYXRlQ29uZmlnXSB0ZW1wbGF0ZTogaHRtbCB0ZW1wbGF0ZSB0byBiZSB1c2VkIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQsIGV4dHJhT3B0aW9uczogdG8gYmUgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgdGVtcGxhdGVcclxuICogQHBhcmFtIHtvYmplY3R9IFt2cGFpZE9wdGlvbnNdIHRpbWVvdXQ6IHdoZW4gbG9hZGluZyBhZFVuaXRcclxuICovXHJcbmZ1bmN0aW9uIFZQQUlESFRNTDVDbGllbnQoZWwsIHZpZGVvLCB0ZW1wbGF0ZUNvbmZpZywgdnBhaWRPcHRpb25zKSB7XHJcbiAgICB0ZW1wbGF0ZUNvbmZpZyA9IHRlbXBsYXRlQ29uZmlnIHx8IHt9O1xyXG5cclxuICAgIHRoaXMuX2lkID0gdW5pcXVlKCk7XHJcbiAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLl9mcmFtZUNvbnRhaW5lciA9IHV0aWxzLmNyZWF0ZUVsZW1lbnRJbkVsKGVsLCAnZGl2Jyk7XHJcbiAgICB0aGlzLl92aWRlb0VsID0gdmlkZW87XHJcbiAgICB0aGlzLl92cGFpZE9wdGlvbnMgPSB2cGFpZE9wdGlvbnMgfHwge3RpbWVvdXQ6IDEwMDAwfTtcclxuXHJcbiAgICB0aGlzLl90ZW1wbGF0ZUNvbmZpZyA9IHtcclxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVDb25maWcudGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlLFxyXG4gICAgICAgIGV4dHJhT3B0aW9uczogdGVtcGxhdGVDb25maWcuZXh0cmFPcHRpb25zIHx8IHt9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogZGVzdHJveVxyXG4gKlxyXG4gKi9cclxuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcclxuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIGlzRGVzdHJveWVkXHJcbiAqXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5pc0Rlc3Ryb3llZCA9IGZ1bmN0aW9uIGlzRGVzdHJveWVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rlc3Ryb3llZDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBsb2FkQWRVbml0XHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhZFVSTCB1cmwgb2YgdGhlIGpzIG9mIHRoZSBhZFVuaXRcclxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcclxuICovXHJcblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmxvYWRBZFVuaXQgPSBmdW5jdGlvbiBsb2FkQWRVbml0KGFkVVJMLCBjYWxsYmFjaykge1xyXG4gICAgJHRocm93SWZEZXN0cm95ZWQuY2FsbCh0aGlzKTtcclxuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIHZhciBmcmFtZSA9IHV0aWxzLmNyZWF0ZUlmcmFtZVdpdGhDb250ZW50KFxyXG4gICAgICAgIHRoaXMuX2ZyYW1lQ29udGFpbmVyLFxyXG4gICAgICAgIHRoaXMuX3RlbXBsYXRlQ29uZmlnLnRlbXBsYXRlLFxyXG4gICAgICAgIHV0aWxzLmV4dGVuZCh7XHJcbiAgICAgICAgICAgIGlmcmFtZVVSTF9KUzogYWRVUkwsXHJcbiAgICAgICAgICAgIGlmcmFtZUlEOiB0aGlzLmdldElEKCksXHJcbiAgICAgICAgICAgIG9yaWdpbjogZ2V0T3JpZ2luKClcclxuICAgICAgICB9LCB0aGlzLl90ZW1wbGF0ZUNvbmZpZy5leHRyYU9wdGlvbnMpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX2ZyYW1lID0gZnJhbWU7XHJcblxyXG4gICAgdGhpcy5fb25Mb2FkID0gdXRpbHMuY2FsbGJhY2tUaW1lb3V0KFxyXG4gICAgICAgIHRoaXMuX3ZwYWlkT3B0aW9ucy50aW1lb3V0LFxyXG4gICAgICAgIG9uTG9hZC5iaW5kKHRoaXMpLFxyXG4gICAgICAgIG9uVGltZW91dC5iaW5kKHRoaXMpXHJcbiAgICApO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5fb25Mb2FkKTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkxvYWQgKGUpIHtcclxuICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6IGZhbHNlICovXHJcbiAgICAgICAgLy9kb24ndCBjbGVhciB0aW1lb3V0XHJcbiAgICAgICAgaWYgKGUub3JpZ2luICE9PSBnZXRPcmlnaW4oKSkgcmV0dXJuO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcblxyXG4gICAgICAgIC8vZG9uJ3QgY2xlYXIgdGltZW91dFxyXG4gICAgICAgIGlmIChyZXN1bHQuaWQgIT09IHRoYXQuZ2V0SUQoKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgYWRVbml0LCBlcnJvciwgY3JlYXRlQWQ7XHJcbiAgICAgICAgaWYgKCF0aGF0Ll9mcmFtZS5jb250ZW50V2luZG93KSB7XHJcblxyXG4gICAgICAgICAgICBlcnJvciA9ICd0aGUgaWZyYW1lIGlzIG5vdCBhbnltb3JlIGluIHRoZSBET00gdHJlZSc7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUFkID0gdGhhdC5fZnJhbWUuY29udGVudFdpbmRvdy5nZXRWUEFJREFkO1xyXG4gICAgICAgICAgICBlcnJvciA9IHV0aWxzLnZhbGlkYXRlKHR5cGVvZiBjcmVhdGVBZCA9PT0gJ2Z1bmN0aW9uJywgJ3RoZSBhZCBkaWRuXFwndCByZXR1cm4gYSBmdW5jdGlvbiB0byBjcmVhdGUgYW4gYWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZXJyb3IpIHtcclxuICAgICAgICAgICAgdmFyIGFkRWwgPSB0aGF0Ll9mcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZC1lbGVtZW50Jyk7XHJcbiAgICAgICAgICAgIGFkVW5pdCA9IG5ldyBWUEFJREFkVW5pdChjcmVhdGVBZCgpLCBhZEVsLCB0aGF0Ll92aWRlb0VsLCB0aGF0Ll9mcmFtZSk7XHJcbiAgICAgICAgICAgIGFkVW5pdC5zdWJzY3JpYmUoQURfU1RPUFBFRCwgJGFkRGVzdHJveWVkLmJpbmQodGhhdCkpO1xyXG4gICAgICAgICAgICBlcnJvciA9IHV0aWxzLnZhbGlkYXRlKGFkVW5pdC5pc1ZhbGlkVlBBSURBZCgpLCAndGhlIGFkZCBpcyBub3QgZnVsbHkgY29tcGxhaW50IHdpdGggVlBBSUQgc3BlY2lmaWNhdGlvbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhhdC5fYWRVbml0ID0gYWRVbml0O1xyXG4gICAgICAgICRkZXN0cm95TG9hZExpc3RlbmVyLmNhbGwodGhhdCk7XHJcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIGVycm9yID8gbnVsbCA6IGFkVW5pdCk7XHJcblxyXG4gICAgICAgIC8vY2xlYXIgdGltZW91dFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcclxuICAgICAgICBjYWxsYmFjaygndGltZW91dCcsIG51bGwpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIHVubG9hZEFkVW5pdFxyXG4gKlxyXG4gKi9cclxuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUudW5sb2FkQWRVbml0ID0gZnVuY3Rpb24gdW5sb2FkQWRVbml0KCkge1xyXG4gICAgJHVubG9hZFByZXZpb3VzQWRVbml0LmNhbGwodGhpcyk7XHJcbn07XHJcblxyXG4vKipcclxuICogZ2V0SUQgd2lsbCByZXR1cm4gdGhlIHVuaXF1ZSBpZFxyXG4gKlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5nZXRJRCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pZDtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogJHJlbW92ZUVsXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcclxuICovXHJcbmZ1bmN0aW9uICRyZW1vdmVFbChrZXkpIHtcclxuICAgIHZhciBlbCA9IHRoaXNba2V5XTtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICAgIGVsLnJlbW92ZSgpO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uICRhZERlc3Ryb3llZCgpIHtcclxuICAgICRyZW1vdmVBZEVsZW1lbnRzLmNhbGwodGhpcyk7XHJcbiAgICBkZWxldGUgdGhpcy5fYWRVbml0O1xyXG59XHJcblxyXG5mdW5jdGlvbiAkdW5sb2FkUHJldmlvdXNBZFVuaXQoKSB7XHJcbiAgICAkcmVtb3ZlQWRFbGVtZW50cy5jYWxsKHRoaXMpO1xyXG4gICAgJGRlc3Ryb3lBZFVuaXQuY2FsbCh0aGlzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gJHJlbW92ZUFkRWxlbWVudHMoKSB7XHJcbiAgICAkcmVtb3ZlRWwuY2FsbCh0aGlzLCAnX2ZyYW1lJyk7XHJcbiAgICAkZGVzdHJveUxvYWRMaXN0ZW5lci5jYWxsKHRoaXMpO1xyXG59XHJcblxyXG4vKipcclxuICogJGRlc3Ryb3lMb2FkTGlzdGVuZXJcclxuICpcclxuICovXHJcbmZ1bmN0aW9uICRkZXN0cm95TG9hZExpc3RlbmVyKCkge1xyXG4gICAgaWYgKHRoaXMuX29uTG9hZCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5fb25Mb2FkKTtcclxuICAgICAgICB1dGlscy5jbGVhckNhbGxiYWNrVGltZW91dCh0aGlzLl9vbkxvYWQpO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9vbkxvYWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiAkZGVzdHJveUFkVW5pdCgpIHtcclxuICAgIGlmICh0aGlzLl9hZFVuaXQpIHtcclxuICAgICAgICB0aGlzLl9hZFVuaXQuc3RvcEFkKCk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX2FkVW5pdDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqICR0aHJvd0lmRGVzdHJveWVkXHJcbiAqXHJcbiAqL1xyXG5mdW5jdGlvbiAkdGhyb3dJZkRlc3Ryb3llZCgpIHtcclxuICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdWUEFJREhUTUw1Q2xpZW50IGFscmVhZHkgZGVzdHJveWVkIScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPcmlnaW4oKSB7XHJcbiAgICBpZiggd2luZG93LmxvY2F0aW9uLm9yaWdpbiAmJiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICE9PSAnbnVsbCcgKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LnRvcC5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArXHJcbiAgICAgICAgICAgIHdpbmRvdy50b3AubG9jYXRpb24uaG9zdG5hbWUgK1xyXG4gICAgICAgICAgICAod2luZG93LnRvcC5sb2NhdGlvbi5wb3J0ID8gJzonICsgd2luZG93LnRvcC5sb2NhdGlvbi5wb3J0OiAnJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVlBBSURIVE1MNUNsaWVudDtcclxud2luZG93LlZQQUlESFRNTDVDbGllbnQgPSBWUEFJREhUTUw1Q2xpZW50O1xyXG5cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gU3Vic2NyaWJlcigpIHtcclxuICAgIHRoaXMuX3N1YnNjcmliZXJzID0ge307XHJcbn1cclxuXHJcblN1YnNjcmliZXIucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShoYW5kbGVyLCBldmVudE5hbWUsIGNvbnRleHQpIHtcclxuICAgIGlmICghdGhpcy5pc0hhbmRsZXJBdHRhY2hlZChoYW5kbGVyLCBldmVudE5hbWUpKSB7XHJcbiAgICAgICAgdGhpcy5nZXQoZXZlbnROYW1lKS5wdXNoKHtoYW5kbGVyOiBoYW5kbGVyLCBjb250ZXh0OiBjb250ZXh0LCBldmVudE5hbWU6IGV2ZW50TmFtZX0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZShoYW5kbGVyLCBldmVudE5hbWUpIHtcclxuICAgIHRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSB0aGlzLmdldChldmVudE5hbWUpLmZpbHRlcihmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xyXG4gICAgICAgIHJldHVybiBoYW5kbGVyICE9PSBzdWJzY3JpYmVyLmhhbmRsZXI7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlQWxsID0gZnVuY3Rpb24gdW5zdWJzY3JpYmVBbGwoKSB7XHJcbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IHt9O1xyXG59O1xyXG5cclxuU3Vic2NyaWJlci5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZGF0YSkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgdmFyIHN1YnNjcmliZXJzID0gdGhpcy5nZXQoZXZlbnROYW1lKVxyXG4gICAgICAgIC5jb25jYXQodGhpcy5nZXQoJyonKSk7XHJcblxyXG4gICAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhhdC5pc0hhbmRsZXJBdHRhY2hlZChzdWJzY3JpYmVyLmhhbmRsZXIsIHN1YnNjcmliZXIuZXZlbnROYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5oYW5kbGVyLmNhbGwoc3Vic2NyaWJlci5jb250ZXh0LCBkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5TdWJzY3JpYmVyLnByb3RvdHlwZS50cmlnZ2VyU3luYyA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZGF0YSkge1xyXG4gICAgdmFyIHN1YnNjcmliZXJzID0gdGhpcy5nZXQoZXZlbnROYW1lKVxyXG4gICAgICAgIC5jb25jYXQodGhpcy5nZXQoJyonKSk7XHJcblxyXG4gICAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xyXG4gICAgICAgIHN1YnNjcmliZXIuaGFuZGxlci5jYWxsKHN1YnNjcmliZXIuY29udGV4dCwgZGF0YSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblN1YnNjcmliZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChldmVudE5hbWUpIHtcclxuICAgIGlmICghdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSBbXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdO1xyXG59O1xyXG5cclxuU3Vic2NyaWJlci5wcm90b3R5cGUuaXNIYW5kbGVyQXR0YWNoZWQgPSBmdW5jdGlvbiBpc0hhbmRsZXJBdHRhY2hlZChoYW5kbGVyLCBldmVudE5hbWUpIHtcclxuICAgIHJldHVybiB0aGlzLmdldChldmVudE5hbWUpLnNvbWUoZnVuY3Rpb24oc3Vic2NyaWJlcikge1xyXG4gICAgICAgIHJldHVybiBoYW5kbGVyID09PSBzdWJzY3JpYmVyLmhhbmRsZXI7XHJcbiAgICB9KVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTdWJzY3JpYmVyO1xyXG5cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIG5vb3AgYSBlbXB0eSBmdW5jdGlvblxyXG4gKi9cclxuZnVuY3Rpb24gbm9vcCgpIHt9XHJcblxyXG4vKipcclxuICogdmFsaWRhdGUgaWYgaXMgbm90IHZhbGlkYXRlIHdpbGwgcmV0dXJuIGFuIEVycm9yIHdpdGggdGhlIG1lc3NhZ2VcclxuICpcclxuICogQHBhcmFtIHtib29sZWFufSBpc1ZhbGlkXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXHJcbiAqL1xyXG5mdW5jdGlvbiB2YWxpZGF0ZShpc1ZhbGlkLCBtZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gaXNWYWxpZCA/IG51bGwgOiBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbn1cclxuXHJcbnZhciB0aW1lb3V0cyA9IHt9O1xyXG4vKipcclxuICogY2xlYXJDYWxsYmFja1RpbWVvdXRcclxuICpcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBoYW5kbGVyIHRvIHJlbW92ZVxyXG4gKi9cclxuZnVuY3Rpb24gY2xlYXJDYWxsYmFja1RpbWVvdXQoZnVuYykge1xyXG4gICAgdmFyIHRpbWVvdXQgPSB0aW1lb3V0c1tmdW5jXTtcclxuICAgIGlmICh0aW1lb3V0KSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgIGRlbGV0ZSB0aW1lb3V0c1tmdW5jXTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIGNhbGxiYWNrVGltZW91dCBpZiB0aGUgb25TdWNjZXNzIGlzIG5vdCBjYWxsZWQgYW5kIHJldHVybnMgdHJ1ZSBpbiB0aGUgdGltZWxpbWl0IHRoZW4gb25UaW1lb3V0IHdpbGwgYmUgY2FsbGVkXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lclxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblN1Y2Nlc3NcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25UaW1lb3V0XHJcbiAqL1xyXG5mdW5jdGlvbiBjYWxsYmFja1RpbWVvdXQodGltZXIsIG9uU3VjY2Vzcywgb25UaW1lb3V0KSB7XHJcbiAgICB2YXIgY2FsbGJhY2ssIHRpbWVvdXQ7XHJcblxyXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG9uU3VjY2VzcyA9IG5vb3A7XHJcbiAgICAgICAgZGVsZXRlIHRpbWVvdXRbY2FsbGJhY2tdO1xyXG4gICAgICAgIG9uVGltZW91dCgpO1xyXG4gICAgfSwgdGltZXIpO1xyXG5cclxuICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIFRPRE8gYXZvaWQgbGVha2luZyBhcmd1bWVudHNcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkL3dpa2kvT3B0aW1pemF0aW9uLWtpbGxlcnMjMzItbGVha2luZy1hcmd1bWVudHNcclxuICAgICAgICBpZiAob25TdWNjZXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHtcclxuICAgICAgICAgICAgY2xlYXJDYWxsYmFja1RpbWVvdXQoY2FsbGJhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGltZW91dHNbY2FsbGJhY2tdID0gdGltZW91dDtcclxuXHJcbiAgICByZXR1cm4gY2FsbGJhY2s7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogY3JlYXRlRWxlbWVudEluRWxcclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudEluRWwocGFyZW50LCB0YWdOYW1lLCBpZCkge1xyXG4gICAgdmFyIG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgICBpZiAoaWQpIG5FbC5pZCA9IGlkO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5FbCk7XHJcbiAgICByZXR1cm4gbkVsO1xyXG59XHJcblxyXG4vKipcclxuICogY3JlYXRlSWZyYW1lV2l0aENvbnRlbnRcclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSBzaW1wbGUgdGVtcGxhdGUgdXNpbmcge3t2YXJ9fVxyXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQocGFyZW50LCB0ZW1wbGF0ZSwgZGF0YSkge1xyXG4gICAgdmFyIGlmcmFtZSA9IGNyZWF0ZUlmcmFtZShwYXJlbnQsIG51bGwsIGRhdGEuekluZGV4KTtcclxuICAgIGlmICghc2V0SWZyYW1lQ29udGVudChpZnJhbWUsIHNpbXBsZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKSkpIHJldHVybjtcclxuICAgIHJldHVybiBpZnJhbWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBjcmVhdGVJZnJhbWVcclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUlmcmFtZShwYXJlbnQsIHVybCwgekluZGV4KSB7XHJcbiAgICB2YXIgbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICBuRWwuc3JjID0gdXJsIHx8ICdhYm91dDpibGFuayc7XHJcbiAgICBuRWwubWFyZ2luV2lkdGggPSAnMCc7XHJcbiAgICBuRWwubWFyZ2luSGVpZ2h0ID0gJzAnO1xyXG4gICAgbkVsLmZyYW1lQm9yZGVyID0gJzAnO1xyXG4gICAgbkVsLndpZHRoID0gJzEwMCUnO1xyXG4gICAgbkVsLmhlaWdodCA9ICcxMDAlJztcclxuICAgIG5FbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBuRWwuc3R5bGUubGVmdCA9ICcwJztcclxuICAgIG5FbC5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICBuRWwuc3R5bGUubWFyZ2luID0gJzBweCc7XHJcbiAgICBuRWwuc3R5bGUucGFkZGluZyA9ICcwcHgnO1xyXG4gICAgbkVsLnN0eWxlLmJvcmRlciA9ICdub25lJztcclxuXHJcbiAgICBpZih6SW5kZXgpe1xyXG4gICAgICAgIG5FbC5zdHlsZS56SW5kZXggPSB6SW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgbkVsLnNldEF0dHJpYnV0ZSgnU0NST0xMSU5HJywnTk8nKTtcclxuICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuRWwpO1xyXG4gICAgcmV0dXJuIG5FbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIHNpbXBsZVRlbXBsYXRlXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxyXG4gKi9cclxuZnVuY3Rpb24gc2ltcGxlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpIHtcclxuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9ICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSA/IEpTT04uc3RyaW5naWZ5KGRhdGFba2V5XSkgOiBkYXRhW2tleV07XHJcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKG5ldyBSZWdFeHAoJ3t7JyArIGtleSArICd9fScsICdnJyksIHZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xyXG59XHJcblxyXG4vKipcclxuICogc2V0SWZyYW1lQ29udGVudFxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxJZnJhbWVFbGVtZW50fSBpZnJhbWVFbFxyXG4gKiBAcGFyYW0gY29udGVudFxyXG4gKi9cclxuZnVuY3Rpb24gc2V0SWZyYW1lQ29udGVudChpZnJhbWVFbCwgY29udGVudCkge1xyXG4gICAgdmFyIGlmcmFtZURvYyA9IGlmcmFtZUVsLmNvbnRlbnRXaW5kb3cgJiYgaWZyYW1lRWwuY29udGVudFdpbmRvdy5kb2N1bWVudDtcclxuICAgIGlmICghaWZyYW1lRG9jKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWZyYW1lRG9jLndyaXRlKGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIGV4dGVuZCBvYmplY3Qgd2l0aCBrZXlzIGZyb20gYW5vdGhlciBvYmplY3RcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHRvRXh0ZW5kXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBmcm9tU291cmNlXHJcbiAqL1xyXG5mdW5jdGlvbiBleHRlbmQodG9FeHRlbmQsIGZyb21Tb3VyY2UpIHtcclxuICAgIE9iamVjdC5rZXlzKGZyb21Tb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgdG9FeHRlbmRba2V5XSA9IGZyb21Tb3VyY2Vba2V5XTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvRXh0ZW5kO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIHVuaXF1ZSB3aWxsIGNyZWF0ZSBhIHVuaXF1ZSBzdHJpbmcgZXZlcnl0aW1lIGlzIGNhbGxlZCwgc2VxdWVudGlhbGx5IGFuZCBwcmVmaXhlZFxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XHJcbiAqL1xyXG5mdW5jdGlvbiB1bmlxdWUocHJlZml4KSB7XHJcbiAgICB2YXIgY291bnQgPSAtMTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdfJyArICgrK2NvdW50KTtcclxuICAgIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgbm9vcDogbm9vcCxcclxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZSxcclxuICAgIGNsZWFyQ2FsbGJhY2tUaW1lb3V0OiBjbGVhckNhbGxiYWNrVGltZW91dCxcclxuICAgIGNhbGxiYWNrVGltZW91dDogY2FsbGJhY2tUaW1lb3V0LFxyXG4gICAgY3JlYXRlRWxlbWVudEluRWw6IGNyZWF0ZUVsZW1lbnRJbkVsLFxyXG4gICAgY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQ6IGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50LFxyXG4gICAgY3JlYXRlSWZyYW1lOiBjcmVhdGVJZnJhbWUsXHJcbiAgICBzaW1wbGVUZW1wbGF0ZTogc2ltcGxlVGVtcGxhdGUsXHJcbiAgICBzZXRJZnJhbWVDb250ZW50OiBzZXRJZnJhbWVDb250ZW50LFxyXG4gICAgZXh0ZW5kOiBleHRlbmQsXHJcbiAgICB1bmlxdWU6IHVuaXF1ZVxyXG59O1xyXG5cclxuIiwiLyohICAgIFNXRk9iamVjdCB2Mi4zLjIwMTMwNTIxIDxodHRwOi8vZ2l0aHViLmNvbS9zd2ZvYmplY3Qvc3dmb2JqZWN0PlxyXG4gICAgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIDxodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocD5cclxuKi9cclxuXHJcbi8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0OiBmYWxzZSAqL1xyXG5cclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgLy8gQU1EXHJcbiAgICBkZWZpbmUoZmFjdG9yeSk7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG4gICAgLy8gTm9kZSwgQ29tbW9uSlMtbGlrZVxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXHJcbiAgICByb290LnN3Zm9iamVjdCA9IGZhY3RvcnkoKTtcclxuICB9XHJcbn0odGhpcywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBVTkRFRiA9IFwidW5kZWZpbmVkXCIsXHJcbiAgICAgICAgT0JKRUNUID0gXCJvYmplY3RcIixcclxuICAgICAgICBTSE9DS1dBVkVfRkxBU0ggPSBcIlNob2Nrd2F2ZSBGbGFzaFwiLFxyXG4gICAgICAgIFNIT0NLV0FWRV9GTEFTSF9BWCA9IFwiU2hvY2t3YXZlRmxhc2guU2hvY2t3YXZlRmxhc2hcIixcclxuICAgICAgICBGTEFTSF9NSU1FX1RZUEUgPSBcImFwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoXCIsXHJcbiAgICAgICAgRVhQUkVTU19JTlNUQUxMX0lEID0gXCJTV0ZPYmplY3RFeHBySW5zdFwiLFxyXG4gICAgICAgIE9OX1JFQURZX1NUQVRFX0NIQU5HRSA9IFwib25yZWFkeXN0YXRlY2hhbmdlXCIsXHJcblxyXG4gICAgICAgIHdpbiA9IHdpbmRvdyxcclxuICAgICAgICBkb2MgPSBkb2N1bWVudCxcclxuICAgICAgICBuYXYgPSBuYXZpZ2F0b3IsXHJcblxyXG4gICAgICAgIHBsdWdpbiA9IGZhbHNlLFxyXG4gICAgICAgIGRvbUxvYWRGbkFyciA9IFtdLFxyXG4gICAgICAgIHJlZ09iakFyciA9IFtdLFxyXG4gICAgICAgIG9iaklkQXJyID0gW10sXHJcbiAgICAgICAgbGlzdGVuZXJzQXJyID0gW10sXHJcbiAgICAgICAgc3RvcmVkRmJDb250ZW50LFxyXG4gICAgICAgIHN0b3JlZEZiQ29udGVudElkLFxyXG4gICAgICAgIHN0b3JlZENhbGxiYWNrRm4sXHJcbiAgICAgICAgc3RvcmVkQ2FsbGJhY2tPYmosXHJcbiAgICAgICAgaXNEb21Mb2FkZWQgPSBmYWxzZSxcclxuICAgICAgICBpc0V4cHJlc3NJbnN0YWxsQWN0aXZlID0gZmFsc2UsXHJcbiAgICAgICAgZHluYW1pY1N0eWxlc2hlZXQsXHJcbiAgICAgICAgZHluYW1pY1N0eWxlc2hlZXRNZWRpYSxcclxuICAgICAgICBhdXRvSGlkZVNob3cgPSB0cnVlLFxyXG4gICAgICAgIGVuY29kZVVSSUVuYWJsZWQgPSBmYWxzZSxcclxuXHJcbiAgICAvKiBDZW50cmFsaXplZCBmdW5jdGlvbiBmb3IgYnJvd3NlciBmZWF0dXJlIGRldGVjdGlvblxyXG4gICAgICAgIC0gVXNlciBhZ2VudCBzdHJpbmcgZGV0ZWN0aW9uIGlzIG9ubHkgdXNlZCB3aGVuIG5vIGdvb2QgYWx0ZXJuYXRpdmUgaXMgcG9zc2libGVcclxuICAgICAgICAtIElzIGV4ZWN1dGVkIGRpcmVjdGx5IGZvciBvcHRpbWFsIHBlcmZvcm1hbmNlXHJcbiAgICAqL1xyXG4gICAgdWEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHczY2RvbSA9IHR5cGVvZiBkb2MuZ2V0RWxlbWVudEJ5SWQgIT09IFVOREVGICYmIHR5cGVvZiBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IFVOREVGICYmIHR5cGVvZiBkb2MuY3JlYXRlRWxlbWVudCAhPT0gVU5ERUYsXHJcbiAgICAgICAgICAgIHUgPSBuYXYudXNlckFnZW50LnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgIHAgPSBuYXYucGxhdGZvcm0udG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgd2luZG93cyA9IHAgPyAvd2luLy50ZXN0KHApIDogL3dpbi8udGVzdCh1KSxcclxuICAgICAgICAgICAgbWFjID0gcCA/IC9tYWMvLnRlc3QocCkgOiAvbWFjLy50ZXN0KHUpLFxyXG4gICAgICAgICAgICB3ZWJraXQgPSAvd2Via2l0Ly50ZXN0KHUpID8gcGFyc2VGbG9hdCh1LnJlcGxhY2UoL14uKndlYmtpdFxcLyhcXGQrKFxcLlxcZCspPykuKiQvLCBcIiQxXCIpKSA6IGZhbHNlLCAvLyByZXR1cm5zIGVpdGhlciB0aGUgd2Via2l0IHZlcnNpb24gb3IgZmFsc2UgaWYgbm90IHdlYmtpdFxyXG4gICAgICAgICAgICBpZSA9IG5hdi5hcHBOYW1lID09PSBcIk1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlclwiLFxyXG4gICAgICAgICAgICBwbGF5ZXJWZXJzaW9uID0gWzAsIDAsIDBdLFxyXG4gICAgICAgICAgICBkID0gbnVsbDtcclxuICAgICAgICBpZiAodHlwZW9mIG5hdi5wbHVnaW5zICE9PSBVTkRFRiAmJiB0eXBlb2YgbmF2LnBsdWdpbnNbU0hPQ0tXQVZFX0ZMQVNIXSA9PT0gT0JKRUNUKSB7XHJcbiAgICAgICAgICAgIGQgPSBuYXYucGx1Z2luc1tTSE9DS1dBVkVfRkxBU0hdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAvLyBuYXYubWltZVR5cGVzW1wiYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2hcIl0uZW5hYmxlZFBsdWdpbiBpbmRpY2F0ZXMgd2hldGhlciBwbHVnLWlucyBhcmUgZW5hYmxlZCBvciBkaXNhYmxlZCBpbiBTYWZhcmkgMytcclxuICAgICAgICAgICAgaWYgKGQgJiYgKHR5cGVvZiBuYXYubWltZVR5cGVzICE9PSBVTkRFRiAmJiBuYXYubWltZVR5cGVzW0ZMQVNIX01JTUVfVFlQRV0gJiYgbmF2Lm1pbWVUeXBlc1tGTEFTSF9NSU1FX1RZUEVdLmVuYWJsZWRQbHVnaW4pKSB7XHJcbiAgICAgICAgICAgICAgICBwbHVnaW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWUgPSBmYWxzZTsgLy8gY2FzY2FkZWQgZmVhdHVyZSBkZXRlY3Rpb24gZm9yIEludGVybmV0IEV4cGxvcmVyXHJcbiAgICAgICAgICAgICAgICBkID0gZC5yZXBsYWNlKC9eLipcXHMrKFxcUytcXHMrXFxTKyQpLywgXCIkMVwiKTtcclxuICAgICAgICAgICAgICAgIHBsYXllclZlcnNpb25bMF0gPSB0b0ludChkLnJlcGxhY2UoL14oLiopXFwuLiokLywgXCIkMVwiKSk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJWZXJzaW9uWzFdID0gdG9JbnQoZC5yZXBsYWNlKC9eLipcXC4oLiopXFxzLiokLywgXCIkMVwiKSk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJWZXJzaW9uWzJdID0gL1thLXpBLVpdLy50ZXN0KGQpID8gdG9JbnQoZC5yZXBsYWNlKC9eLipbYS16QS1aXSsoLiopJC8sIFwiJDFcIikpIDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygd2luLkFjdGl2ZVhPYmplY3QgIT09IFVOREVGKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9IG5ldyBBY3RpdmVYT2JqZWN0KFNIT0NLV0FWRV9GTEFTSF9BWCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYSkgeyAvLyBhIHdpbGwgcmV0dXJuIG51bGwgd2hlbiBBY3RpdmVYIGlzIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgZCA9IGEuR2V0VmFyaWFibGUoXCIkdmVyc2lvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZSA9IHRydWU7IC8vIGNhc2NhZGVkIGZlYXR1cmUgZGV0ZWN0aW9uIGZvciBJbnRlcm5ldCBFeHBsb3JlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkID0gZC5zcGxpdChcIiBcIilbMV0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJWZXJzaW9uID0gW3RvSW50KGRbMF0pLCB0b0ludChkWzFdKSwgdG9JbnQoZFsyXSldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge31cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHt3MzogdzNjZG9tLCBwdjogcGxheWVyVmVyc2lvbiwgd2s6IHdlYmtpdCwgaWU6IGllLCB3aW46IHdpbmRvd3MsIG1hYzogbWFjfTtcclxuICAgIH0oKSxcclxuXHJcbiAgICAvKiBDcm9zcy1icm93c2VyIG9uRG9tTG9hZFxyXG4gICAgICAgIC0gV2lsbCBmaXJlIGFuIGV2ZW50IGFzIHNvb24gYXMgdGhlIERPTSBvZiBhIHdlYiBwYWdlIGlzIGxvYWRlZFxyXG4gICAgICAgIC0gSW50ZXJuZXQgRXhwbG9yZXIgd29ya2Fyb3VuZCBiYXNlZCBvbiBEaWVnbyBQZXJpbmkncyBzb2x1dGlvbjogaHR0cDovL2phdmFzY3JpcHQubndib3guY29tL0lFQ29udGVudExvYWRlZC9cclxuICAgICAgICAtIFJlZ3VsYXIgb25sb2FkIHNlcnZlcyBhcyBmYWxsYmFja1xyXG4gICAgKi9cclxuICAgIG9uRG9tTG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXVhLnczKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGlmICgodHlwZW9mIGRvYy5yZWFkeVN0YXRlICE9PSBVTkRFRiAmJiAoZG9jLnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiB8fCBkb2MucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiKSkgfHwgKHR5cGVvZiBkb2MucmVhZHlTdGF0ZSA9PT0gVU5ERUYgJiYgKGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0gfHwgZG9jLmJvZHkpKSkgeyAvLyBmdW5jdGlvbiBpcyBmaXJlZCBhZnRlciBvbmxvYWQsIGUuZy4gd2hlbiBzY3JpcHQgaXMgaW5zZXJ0ZWQgZHluYW1pY2FsbHlcclxuICAgICAgICAgICAgY2FsbERvbUxvYWRGdW5jdGlvbnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc0RvbUxvYWRlZCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvYy5hZGRFdmVudExpc3RlbmVyICE9PSBVTkRFRikge1xyXG4gICAgICAgICAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNhbGxEb21Mb2FkRnVuY3Rpb25zLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHVhLmllKSB7XHJcbiAgICAgICAgICAgICAgICBkb2MuYXR0YWNoRXZlbnQoT05fUkVBRFlfU1RBVEVfQ0hBTkdFLCBmdW5jdGlvbiBkZXRhY2goKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvYy5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmRldGFjaEV2ZW50KE9OX1JFQURZX1NUQVRFX0NIQU5HRSwgZGV0YWNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbERvbUxvYWRGdW5jdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICh3aW4gPT0gdG9wKSB7IC8vIGlmIG5vdCBpbnNpZGUgYW4gaWZyYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uIGNoZWNrRG9tTG9hZGVkSUUoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0RvbUxvYWRlZCkgeyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwoXCJsZWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNoZWNrRG9tTG9hZGVkSUUsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxEb21Mb2FkRnVuY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodWEud2spIHtcclxuICAgICAgICAgICAgICAgIChmdW5jdGlvbiBjaGVja0RvbUxvYWRlZFdLKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0RvbUxvYWRlZCkgeyByZXR1cm47IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIS9sb2FkZWR8Y29tcGxldGUvLnRlc3QoZG9jLnJlYWR5U3RhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2hlY2tEb21Mb2FkZWRXSywgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbERvbUxvYWRGdW5jdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIH0oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsbERvbUxvYWRGdW5jdGlvbnMoKSB7XHJcbiAgICAgICAgaWYgKGlzRG9tTG9hZGVkIHx8ICFkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0pIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdHJ5IHsgLy8gdGVzdCBpZiB3ZSBjYW4gcmVhbGx5IGFkZC9yZW1vdmUgZWxlbWVudHMgdG8vZnJvbSB0aGUgRE9NOyB3ZSBkb24ndCB3YW50IHRvIGZpcmUgaXQgdG9vIGVhcmx5XHJcbiAgICAgICAgICAgIHZhciB0LCBzcGFuID0gY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIHNwYW4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAvL2hpZGUgdGhlIHNwYW4gaW4gY2FzZSBzb21lb25lIGhhcyBzdHlsZWQgc3BhbnMgdmlhIENTU1xyXG4gICAgICAgICAgICB0ID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICAgICAgdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpO1xyXG4gICAgICAgICAgICB0ID0gbnVsbDsgLy9jbGVhciB0aGUgdmFyaWFibGVzXHJcbiAgICAgICAgICAgIHNwYW4gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkgeyByZXR1cm47IH1cclxuICAgICAgICBpc0RvbUxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGRsID0gZG9tTG9hZEZuQXJyLmxlbmd0aDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRsOyBpKyspIHtcclxuICAgICAgICAgICAgZG9tTG9hZEZuQXJyW2ldKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZERvbUxvYWRFdmVudChmbikge1xyXG4gICAgICAgIGlmIChpc0RvbUxvYWRlZCkge1xyXG4gICAgICAgICAgICBmbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZG9tTG9hZEZuQXJyW2RvbUxvYWRGbkFyci5sZW5ndGhdID0gZm47IC8vIEFycmF5LnB1c2goKSBpcyBvbmx5IGF2YWlsYWJsZSBpbiBJRTUuNStcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ3Jvc3MtYnJvd3NlciBvbmxvYWRcclxuICAgICAgICAtIEJhc2VkIG9uIEphbWVzIEVkd2FyZHMnIHNvbHV0aW9uOiBodHRwOi8vYnJvdGhlcmNha2UuY29tL3NpdGUvcmVzb3VyY2VzL3NjcmlwdHMvb25sb2FkL1xyXG4gICAgICAgIC0gV2lsbCBmaXJlIGFuIGV2ZW50IGFzIHNvb24gYXMgYSB3ZWIgcGFnZSBpbmNsdWRpbmcgYWxsIG9mIGl0cyBhc3NldHMgYXJlIGxvYWRlZFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBhZGRMb2FkRXZlbnQoZm4pIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbi5hZGRFdmVudExpc3RlbmVyICE9PSBVTkRFRikge1xyXG4gICAgICAgICAgICB3aW4uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZm4sIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRvYy5hZGRFdmVudExpc3RlbmVyICE9PSBVTkRFRikge1xyXG4gICAgICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZm4sIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHdpbi5hdHRhY2hFdmVudCAhPT0gVU5ERUYpIHtcclxuICAgICAgICAgICAgYWRkTGlzdGVuZXIod2luLCBcIm9ubG9hZFwiLCBmbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB3aW4ub25sb2FkID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdmFyIGZuT2xkID0gd2luLm9ubG9hZDtcclxuICAgICAgICAgICAgd2luLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGZuT2xkKCk7XHJcbiAgICAgICAgICAgICAgICBmbigpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2luLm9ubG9hZCA9IGZuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBEZXRlY3QgdGhlIEZsYXNoIFBsYXllciB2ZXJzaW9uIGZvciBub24tSW50ZXJuZXQgRXhwbG9yZXIgYnJvd3NlcnNcclxuICAgICAgICAtIERldGVjdGluZyB0aGUgcGx1Zy1pbiB2ZXJzaW9uIHZpYSB0aGUgb2JqZWN0IGVsZW1lbnQgaXMgbW9yZSBwcmVjaXNlIHRoYW4gdXNpbmcgdGhlIHBsdWdpbnMgY29sbGVjdGlvbiBpdGVtJ3MgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICBhLiBCb3RoIHJlbGVhc2UgYW5kIGJ1aWxkIG51bWJlcnMgY2FuIGJlIGRldGVjdGVkXHJcbiAgICAgICAgICBiLiBBdm9pZCB3cm9uZyBkZXNjcmlwdGlvbnMgYnkgY29ycnVwdCBpbnN0YWxsZXJzIHByb3ZpZGVkIGJ5IEFkb2JlXHJcbiAgICAgICAgICBjLiBBdm9pZCB3cm9uZyBkZXNjcmlwdGlvbnMgYnkgbXVsdGlwbGUgRmxhc2ggUGxheWVyIGVudHJpZXMgaW4gdGhlIHBsdWdpbiBBcnJheSwgY2F1c2VkIGJ5IGluY29ycmVjdCBicm93c2VyIGltcG9ydHNcclxuICAgICAgICAtIERpc2FkdmFudGFnZSBvZiB0aGlzIG1ldGhvZCBpcyB0aGF0IGl0IGRlcGVuZHMgb24gdGhlIGF2YWlsYWJpbGl0eSBvZiB0aGUgRE9NLCB3aGlsZSB0aGUgcGx1Z2lucyBjb2xsZWN0aW9uIGlzIGltbWVkaWF0ZWx5IGF2YWlsYWJsZVxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHRlc3RQbGF5ZXJWZXJzaW9uKCkge1xyXG4gICAgICAgIHZhciBiID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcclxuICAgICAgICB2YXIgbyA9IGNyZWF0ZUVsZW1lbnQoT0JKRUNUKTtcclxuICAgICAgICBvLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidmlzaWJpbGl0eTogaGlkZGVuO1wiKTtcclxuICAgICAgICBvLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgRkxBU0hfTUlNRV9UWVBFKTtcclxuICAgICAgICB2YXIgdCA9IGIuYXBwZW5kQ2hpbGQobyk7XHJcbiAgICAgICAgaWYgKHQpIHtcclxuICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAoZnVuY3Rpb24gY2hlY2tHZXRWYXJpYWJsZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdC5HZXRWYXJpYWJsZSAhPT0gVU5ERUYpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHQuR2V0VmFyaWFibGUoXCIkdmVyc2lvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSBkLnNwbGl0KFwiIFwiKVsxXS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1YS5wdiA9IFt0b0ludChkWzBdKSwgdG9JbnQoZFsxXSksIHRvSW50KGRbMl0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90LkdldFZhcmlhYmxlKFwiJHZlcnNpb25cIikgaXMga25vd24gdG8gZmFpbCBpbiBGbGFzaCBQbGF5ZXIgOCBvbiBGaXJlZm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vSWYgdGhpcyBlcnJvciBpcyBlbmNvdW50ZXJlZCwgYXNzdW1lIEZQOCBvciBsb3dlci4gVGltZSB0byB1cGdyYWRlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1YS5wdiA9IFs4LCAwLCAwXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb3VudGVyIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjaGVja0dldFZhcmlhYmxlLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYi5yZW1vdmVDaGlsZChvKTtcclxuICAgICAgICAgICAgICAgIHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hWZXJzaW9ucygpO1xyXG4gICAgICAgICAgICB9KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbWF0Y2hWZXJzaW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQZXJmb3JtIEZsYXNoIFBsYXllciBhbmQgU1dGIHZlcnNpb24gbWF0Y2hpbmc7IHN0YXRpYyBwdWJsaXNoaW5nIG9ubHlcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBtYXRjaFZlcnNpb25zKCkge1xyXG4gICAgICAgIHZhciBybCA9IHJlZ09iakFyci5sZW5ndGg7XHJcbiAgICAgICAgaWYgKHJsID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJsOyBpKyspIHsgLy8gZm9yIGVhY2ggcmVnaXN0ZXJlZCBvYmplY3QgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gcmVnT2JqQXJyW2ldLmlkO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNiID0gcmVnT2JqQXJyW2ldLmNhbGxiYWNrRm47XHJcbiAgICAgICAgICAgICAgICB2YXIgY2JPYmogPSB7c3VjY2VzczogZmFsc2UsIGlkOiBpZH07XHJcbiAgICAgICAgICAgICAgICBpZiAodWEucHZbMF0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IGdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNQbGF5ZXJWZXJzaW9uKHJlZ09iakFycltpXS5zd2ZWZXJzaW9uKSAmJiAhKHVhLndrICYmIHVhLndrIDwgMzEyKSkgeyAvLyBGbGFzaCBQbGF5ZXIgdmVyc2lvbiA+PSBwdWJsaXNoZWQgU1dGIHZlcnNpb246IEhvdXN0b24sIHdlIGhhdmUgYSBtYXRjaCFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpc2liaWxpdHkoaWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2JPYmouc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2JPYmoucmVmID0gZ2V0T2JqZWN0QnlJZChpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2JPYmouaWQgPSBpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYihjYk9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVnT2JqQXJyW2ldLmV4cHJlc3NJbnN0YWxsICYmIGNhbkV4cHJlc3NJbnN0YWxsKCkpIHsgLy8gc2hvdyB0aGUgQWRvYmUgRXhwcmVzcyBJbnN0YWxsIGRpYWxvZyBpZiBzZXQgYnkgdGhlIHdlYiBwYWdlIGF1dGhvciBhbmQgaWYgc3VwcG9ydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHQuZGF0YSA9IHJlZ09iakFycltpXS5leHByZXNzSW5zdGFsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dC53aWR0aCA9IG9iai5nZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiKSB8fCBcIjBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dC5oZWlnaHQgPSBvYmouZ2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIpIHx8IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSkgeyBhdHQuc3R5bGVjbGFzcyA9IG9iai5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5nZXRBdHRyaWJ1dGUoXCJhbGlnblwiKSkgeyBhdHQuYWxpZ24gPSBvYmouZ2V0QXR0cmlidXRlKFwiYWxpZ25cIik7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnNlIEhUTUwgb2JqZWN0IHBhcmFtIGVsZW1lbnQncyBuYW1lLXZhbHVlIHBhaXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IG9iai5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcmFtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBsID0gcC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBsOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocFtqXS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpLnRvTG93ZXJDYXNlKCkgIT09IFwibW92aWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJbcFtqXS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpXSA9IHBbal0uZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0V4cHJlc3NJbnN0YWxsKGF0dCwgcGFyLCBpZCwgY2IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgeyAvLyBGbGFzaCBQbGF5ZXIgYW5kIFNXRiB2ZXJzaW9uIG1pc21hdGNoIG9yIGFuIG9sZGVyIFdlYmtpdCBlbmdpbmUgdGhhdCBpZ25vcmVzIHRoZSBIVE1MIG9iamVjdCBlbGVtZW50J3MgbmVzdGVkIHBhcmFtIGVsZW1lbnRzOiBkaXNwbGF5IGZhbGxiYWNrIGNvbnRlbnQgaW5zdGVhZCBvZiBTV0ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlGYkNvbnRlbnQob2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYikgeyBjYihjYk9iaik7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgeyAvLyBpZiBubyBGbGFzaCBQbGF5ZXIgaXMgaW5zdGFsbGVkIG9yIHRoZSBmcCB2ZXJzaW9uIGNhbm5vdCBiZSBkZXRlY3RlZCB3ZSBsZXQgdGhlIEhUTUwgb2JqZWN0IGVsZW1lbnQgZG8gaXRzIGpvYiAoZWl0aGVyIHNob3cgYSBTV0Ygb3IgZmFsbGJhY2sgY29udGVudClcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmlsaXR5KGlkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSBnZXRPYmplY3RCeUlkKGlkKTsgLy8gdGVzdCB3aGV0aGVyIHRoZXJlIGlzIGFuIEhUTUwgb2JqZWN0IGVsZW1lbnQgb3Igbm90XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvICYmIHR5cGVvZiBvLlNldFZhcmlhYmxlICE9PSBVTkRFRikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2JPYmouc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYk9iai5yZWYgPSBvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2JPYmouaWQgPSBvLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKGNiT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogTWFpbiBmdW5jdGlvblxyXG4gICAgICAgIC0gV2lsbCBwcmVmZXJhYmx5IGV4ZWN1dGUgb25Eb21Mb2FkLCBvdGhlcndpc2Ugb25sb2FkIChhcyBhIGZhbGxiYWNrKVxyXG4gICAgKi9cclxuICAgIGRvbUxvYWRGbkFyclswXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAocGx1Z2luKSB7XHJcbiAgICAgICAgICAgIHRlc3RQbGF5ZXJWZXJzaW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBtYXRjaFZlcnNpb25zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRPYmplY3RCeUlkKG9iamVjdElkU3RyKSB7XHJcbiAgICAgICAgdmFyIHIgPSBudWxsLFxyXG4gICAgICAgICAgICBvID0gZ2V0RWxlbWVudEJ5SWQob2JqZWN0SWRTdHIpO1xyXG5cclxuICAgICAgICBpZiAobyAmJiBvLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiT0JKRUNUXCIpIHtcclxuICAgICAgICAgICAgLy9JZiB0YXJnZXRlZCBvYmplY3QgaXMgdmFsaWQgRmxhc2ggZmlsZVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG8uU2V0VmFyaWFibGUgIT09IFVOREVGKSB7XHJcbiAgICAgICAgICAgICAgICByID0gbztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vSWYgU2V0VmFyaWFibGUgaXMgbm90IHdvcmtpbmcgb24gdGFyZ2V0ZWQgb2JqZWN0IGJ1dCBhIG5lc3RlZCBvYmplY3QgaXNcclxuICAgICAgICAgICAgICAgIC8vYXZhaWxhYmxlLCBhc3N1bWUgY2xhc3NpYyBuZXN0ZWQgb2JqZWN0IG1hcmt1cC4gUmV0dXJuIG5lc3RlZCBvYmplY3QuXHJcblxyXG4gICAgICAgICAgICAgICAgLy9JZiBTZXRWYXJpYWJsZSBpcyBub3Qgd29ya2luZyBvbiB0YXJnZXRlZCBvYmplY3QgYW5kIHRoZXJlIGlzIG5vIG5lc3RlZCBvYmplY3QsXHJcbiAgICAgICAgICAgICAgICAvL3JldHVybiB0aGUgb3JpZ2luYWwgb2JqZWN0IGFueXdheS4gVGhpcyBpcyBwcm9iYWJseSBuZXcgc2ltcGxpZmllZCBtYXJrdXAuXHJcblxyXG4gICAgICAgICAgICAgICAgciA9IG8uZ2V0RWxlbWVudHNCeVRhZ05hbWUoT0JKRUNUKVswXSB8fCBvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZXF1aXJlbWVudHMgZm9yIEFkb2JlIEV4cHJlc3MgSW5zdGFsbFxyXG4gICAgICAgIC0gb25seSBvbmUgaW5zdGFuY2UgY2FuIGJlIGFjdGl2ZSBhdCBhIHRpbWVcclxuICAgICAgICAtIGZwIDYuMC42NSBvciBoaWdoZXJcclxuICAgICAgICAtIFdpbi9NYWMgT1Mgb25seVxyXG4gICAgICAgIC0gbm8gV2Via2l0IGVuZ2luZXMgb2xkZXIgdGhhbiB2ZXJzaW9uIDMxMlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGNhbkV4cHJlc3NJbnN0YWxsKCkge1xyXG4gICAgICAgIHJldHVybiAhaXNFeHByZXNzSW5zdGFsbEFjdGl2ZSAmJiBoYXNQbGF5ZXJWZXJzaW9uKFwiNi4wLjY1XCIpICYmICh1YS53aW4gfHwgdWEubWFjKSAmJiAhKHVhLndrICYmIHVhLndrIDwgMzEyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBTaG93IHRoZSBBZG9iZSBFeHByZXNzIEluc3RhbGwgZGlhbG9nXHJcbiAgICAgICAgLSBSZWZlcmVuY2U6IGh0dHA6Ly93d3cuYWRvYmUuY29tL2NmdXNpb24va25vd2xlZGdlYmFzZS9pbmRleC5jZm0/aWQ9NmEyNTNiNzVcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBzaG93RXhwcmVzc0luc3RhbGwoYXR0LCBwYXIsIHJlcGxhY2VFbGVtSWRTdHIsIGNhbGxiYWNrRm4pIHtcclxuXHJcbiAgICAgICAgdmFyIG9iaiA9IGdldEVsZW1lbnRCeUlkKHJlcGxhY2VFbGVtSWRTdHIpO1xyXG5cclxuICAgICAgICAvL0Vuc3VyZSB0aGF0IHJlcGxhY2VFbGVtSWRTdHIgaXMgcmVhbGx5IGEgc3RyaW5nIGFuZCBub3QgYW4gZWxlbWVudFxyXG4gICAgICAgIHJlcGxhY2VFbGVtSWRTdHIgPSBnZXRJZChyZXBsYWNlRWxlbUlkU3RyKTtcclxuXHJcbiAgICAgICAgaXNFeHByZXNzSW5zdGFsbEFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgc3RvcmVkQ2FsbGJhY2tGbiA9IGNhbGxiYWNrRm4gfHwgbnVsbDtcclxuICAgICAgICBzdG9yZWRDYWxsYmFja09iaiA9IHtzdWNjZXNzOiBmYWxzZSwgaWQ6IHJlcGxhY2VFbGVtSWRTdHJ9O1xyXG5cclxuICAgICAgICBpZiAob2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmoubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PT0gXCJPQkpFQ1RcIikgeyAvLyBzdGF0aWMgcHVibGlzaGluZ1xyXG4gICAgICAgICAgICAgICAgc3RvcmVkRmJDb250ZW50ID0gYWJzdHJhY3RGYkNvbnRlbnQob2JqKTtcclxuICAgICAgICAgICAgICAgIHN0b3JlZEZiQ29udGVudElkID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHsgLy8gZHluYW1pYyBwdWJsaXNoaW5nXHJcbiAgICAgICAgICAgICAgICBzdG9yZWRGYkNvbnRlbnQgPSBvYmo7XHJcbiAgICAgICAgICAgICAgICBzdG9yZWRGYkNvbnRlbnRJZCA9IHJlcGxhY2VFbGVtSWRTdHI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXR0LmlkID0gRVhQUkVTU19JTlNUQUxMX0lEO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGF0dC53aWR0aCA9PT0gVU5ERUYgfHwgKCEvJSQvLnRlc3QoYXR0LndpZHRoKSAmJiB0b0ludChhdHQud2lkdGgpIDwgMzEwKSkgeyBhdHQud2lkdGggPSBcIjMxMFwiOyB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0LmhlaWdodCA9PT0gVU5ERUYgfHwgKCEvJSQvLnRlc3QoYXR0LmhlaWdodCkgJiYgdG9JbnQoYXR0LmhlaWdodCkgPCAxMzcpKSB7IGF0dC5oZWlnaHQgPSBcIjEzN1wiOyB9XHJcbiAgICAgICAgICAgIHZhciBwdCA9IHVhLmllID8gXCJBY3RpdmVYXCIgOiBcIlBsdWdJblwiLFxyXG4gICAgICAgICAgICAgICAgZnYgPSBcIk1NcmVkaXJlY3RVUkw9XCIgKyBlbmNvZGVVUklDb21wb25lbnQod2luLmxvY2F0aW9uLnRvU3RyaW5nKCkucmVwbGFjZSgvJi9nLCBcIiUyNlwiKSkgKyBcIiZNTXBsYXllclR5cGU9XCIgKyBwdCArIFwiJk1NZG9jdGl0bGU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jLnRpdGxlLnNsaWNlKDAsIDQ3KSArIFwiIC0gRmxhc2ggUGxheWVyIEluc3RhbGxhdGlvblwiKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXIuZmxhc2h2YXJzICE9PSBVTkRFRikge1xyXG4gICAgICAgICAgICAgICAgcGFyLmZsYXNodmFycyArPSBcIiZcIiArIGZ2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFyLmZsYXNodmFycyA9IGZ2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIElFIG9ubHk6IHdoZW4gYSBTV0YgaXMgbG9hZGluZyAoQU5EOiBub3QgYXZhaWxhYmxlIGluIGNhY2hlKSB3YWl0IGZvciB0aGUgcmVhZHlTdGF0ZSBvZiB0aGUgb2JqZWN0IGVsZW1lbnQgdG8gYmVjb21lIDQgYmVmb3JlIHJlbW92aW5nIGl0LFxyXG4gICAgICAgICAgICAvLyBiZWNhdXNlIHlvdSBjYW5ub3QgcHJvcGVybHkgY2FuY2VsIGEgbG9hZGluZyBTV0YgZmlsZSB3aXRob3V0IGJyZWFraW5nIGJyb3dzZXIgbG9hZCByZWZlcmVuY2VzLCBhbHNvIG9iai5vbnJlYWR5c3RhdGVjaGFuZ2UgZG9lc24ndCB3b3JrXHJcbiAgICAgICAgICAgIGlmICh1YS5pZSAmJiBvYmoucmVhZHlTdGF0ZSAhPSA0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3T2JqID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIHJlcGxhY2VFbGVtSWRTdHIgKz0gXCJTV0ZPYmplY3ROZXdcIjtcclxuICAgICAgICAgICAgICAgIG5ld09iai5zZXRBdHRyaWJ1dGUoXCJpZFwiLCByZXBsYWNlRWxlbUlkU3RyKTtcclxuICAgICAgICAgICAgICAgIG9iai5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdPYmosIG9iaik7IC8vIGluc2VydCBwbGFjZWhvbGRlciBkaXYgdGhhdCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHRoZSBvYmplY3QgZWxlbWVudCB0aGF0IGxvYWRzIGV4cHJlc3NpbnN0YWxsLnN3ZlxyXG4gICAgICAgICAgICAgICAgb2JqLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZVNXRihvYmopOyAvL3JlbW92ZVNXRiBhY2NlcHRzIGVsZW1lbnRzIG5vd1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNyZWF0ZVNXRihhdHQsIHBhciwgcmVwbGFjZUVsZW1JZFN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIEZ1bmN0aW9ucyB0byBhYnN0cmFjdCBhbmQgZGlzcGxheSBmYWxsYmFjayBjb250ZW50XHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gZGlzcGxheUZiQ29udGVudChvYmopIHtcclxuICAgICAgICBpZiAodWEuaWUgJiYgb2JqLnJlYWR5U3RhdGUgIT0gNCkge1xyXG4gICAgICAgICAgICAvLyBJRSBvbmx5OiB3aGVuIGEgU1dGIGlzIGxvYWRpbmcgKEFORDogbm90IGF2YWlsYWJsZSBpbiBjYWNoZSkgd2FpdCBmb3IgdGhlIHJlYWR5U3RhdGUgb2YgdGhlIG9iamVjdCBlbGVtZW50IHRvIGJlY29tZSA0IGJlZm9yZSByZW1vdmluZyBpdCxcclxuICAgICAgICAgICAgLy8gYmVjYXVzZSB5b3UgY2Fubm90IHByb3Blcmx5IGNhbmNlbCBhIGxvYWRpbmcgU1dGIGZpbGUgd2l0aG91dCBicmVha2luZyBicm93c2VyIGxvYWQgcmVmZXJlbmNlcywgYWxzbyBvYmoub25yZWFkeXN0YXRlY2hhbmdlIGRvZXNuJ3Qgd29ya1xyXG4gICAgICAgICAgICBvYmouc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB2YXIgZWwgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBvYmoucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWwsIG9iaik7IC8vIGluc2VydCBwbGFjZWhvbGRlciBkaXYgdGhhdCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHRoZSBmYWxsYmFjayBjb250ZW50XHJcbiAgICAgICAgICAgIGVsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGFic3RyYWN0RmJDb250ZW50KG9iaiksIGVsKTtcclxuICAgICAgICAgICAgcmVtb3ZlU1dGKG9iaik7IC8vcmVtb3ZlU1dGIGFjY2VwdHMgZWxlbWVudHMgbm93XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvYmoucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoYWJzdHJhY3RGYkNvbnRlbnQob2JqKSwgb2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWJzdHJhY3RGYkNvbnRlbnQob2JqKSB7XHJcbiAgICAgICAgdmFyIGFjID0gY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpZiAodWEud2luICYmIHVhLmllKSB7XHJcbiAgICAgICAgICAgIGFjLmlubmVySFRNTCA9IG9iai5pbm5lckhUTUw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbmVzdGVkT2JqID0gb2JqLmdldEVsZW1lbnRzQnlUYWdOYW1lKE9CSkVDVClbMF07XHJcbiAgICAgICAgICAgIGlmIChuZXN0ZWRPYmopIHtcclxuICAgICAgICAgICAgICAgIHZhciBjID0gbmVzdGVkT2JqLmNoaWxkTm9kZXM7XHJcbiAgICAgICAgICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjbCA9IGMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2w7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShjW2ldLm5vZGVUeXBlID09IDEgJiYgY1tpXS5ub2RlTmFtZSA9PT0gXCJQQVJBTVwiKSAmJiAhKGNbaV0ubm9kZVR5cGUgPT0gOCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjLmFwcGVuZENoaWxkKGNbaV0uY2xvbmVOb2RlKHRydWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlSWVPYmplY3QodXJsLCBwYXJhbVN0cikge1xyXG4gICAgICAgIHZhciBkaXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBcIjxvYmplY3QgY2xhc3NpZD0nY2xzaWQ6RDI3Q0RCNkUtQUU2RC0xMWNmLTk2QjgtNDQ0NTUzNTQwMDAwJz48cGFyYW0gbmFtZT0nbW92aWUnIHZhbHVlPSdcIiArIHVybCArIFwiJz5cIiArIHBhcmFtU3RyICsgXCI8L29iamVjdD5cIjtcclxuICAgICAgICByZXR1cm4gZGl2LmZpcnN0Q2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ3Jvc3MtYnJvd3NlciBkeW5hbWljIFNXRiBjcmVhdGlvblxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNXRihhdHRPYmosIHBhck9iaiwgaWQpIHtcclxuICAgICAgICB2YXIgciwgZWwgPSBnZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgaWQgPSBnZXRJZChpZCk7IC8vIGVuc3VyZSBpZCBpcyB0cnVseSBhbiBJRCBhbmQgbm90IGFuIGVsZW1lbnRcclxuXHJcbiAgICAgICAgaWYgKHVhLndrICYmIHVhLndrIDwgMzEyKSB7IHJldHVybiByOyB9XHJcblxyXG4gICAgICAgIGlmIChlbCkge1xyXG4gICAgICAgICAgICB2YXIgbyA9ICh1YS5pZSkgPyBjcmVhdGVFbGVtZW50KFwiZGl2XCIpIDogY3JlYXRlRWxlbWVudChPQkpFQ1QpLFxyXG4gICAgICAgICAgICAgICAgYXR0cixcclxuICAgICAgICAgICAgICAgIGF0dHJMb3dlcixcclxuICAgICAgICAgICAgICAgIHBhcmFtO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBhdHRPYmouaWQgPT09IFVOREVGKSB7IC8vIGlmIG5vICdpZCcgaXMgZGVmaW5lZCBmb3IgdGhlIG9iamVjdCBlbGVtZW50LCBpdCB3aWxsIGluaGVyaXQgdGhlICdpZCcgZnJvbSB0aGUgZmFsbGJhY2sgY29udGVudFxyXG4gICAgICAgICAgICAgICAgYXR0T2JqLmlkID0gaWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vQWRkIHBhcmFtc1xyXG4gICAgICAgICAgICBmb3IgKHBhcmFtIGluIHBhck9iaikge1xyXG4gICAgICAgICAgICAgICAgLy9maWx0ZXIgb3V0IHByb3RvdHlwZSBhZGRpdGlvbnMgZnJvbSBvdGhlciBwb3RlbnRpYWwgbGlicmFyaWVzIGFuZCBJRSBzcGVjaWZpYyBwYXJhbSBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyT2JqLmhhc093blByb3BlcnR5KHBhcmFtKSAmJiBwYXJhbS50b0xvd2VyQ2FzZSgpICE9PSBcIm1vdmllXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVPYmpQYXJhbShvLCBwYXJhbSwgcGFyT2JqW3BhcmFtXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vQ3JlYXRlIElFIG9iamVjdCwgY29tcGxldGUgd2l0aCBwYXJhbSBub2Rlc1xyXG4gICAgICAgICAgICBpZiAodWEuaWUpIHsgbyA9IGNyZWF0ZUllT2JqZWN0KGF0dE9iai5kYXRhLCBvLmlubmVySFRNTCk7IH1cclxuXHJcbiAgICAgICAgICAgIC8vQWRkIGF0dHJpYnV0ZXMgdG8gb2JqZWN0XHJcbiAgICAgICAgICAgIGZvciAoYXR0ciBpbiBhdHRPYmopIHtcclxuICAgICAgICAgICAgICAgIGlmIChhdHRPYmouaGFzT3duUHJvcGVydHkoYXR0cikpIHsgLy8gZmlsdGVyIG91dCBwcm90b3R5cGUgYWRkaXRpb25zIGZyb20gb3RoZXIgcG90ZW50aWFsIGxpYnJhcmllc1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJMb3dlciA9IGF0dHIudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJ2NsYXNzJyBpcyBhbiBFQ01BNCByZXNlcnZlZCBrZXl3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJMb3dlciA9PT0gXCJzdHlsZWNsYXNzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBhdHRPYmpbYXR0cl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ckxvd2VyICE9PSBcImNsYXNzaWRcIiAmJiBhdHRyTG93ZXIgIT09IFwiZGF0YVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uc2V0QXR0cmlidXRlKGF0dHIsIGF0dE9ialthdHRyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodWEuaWUpIHtcclxuICAgICAgICAgICAgICAgIG9iaklkQXJyW29iaklkQXJyLmxlbmd0aF0gPSBhdHRPYmouaWQ7IC8vIHN0b3JlZCB0byBmaXggb2JqZWN0ICdsZWFrcycgb24gdW5sb2FkIChkeW5hbWljIHB1Ymxpc2hpbmcgb25seSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG8uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBGTEFTSF9NSU1FX1RZUEUpO1xyXG4gICAgICAgICAgICAgICAgby5zZXRBdHRyaWJ1dGUoXCJkYXRhXCIsIGF0dE9iai5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobywgZWwpO1xyXG4gICAgICAgICAgICByID0gbztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU9ialBhcmFtKGVsLCBwTmFtZSwgcFZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHAgPSBjcmVhdGVFbGVtZW50KFwicGFyYW1cIik7XHJcbiAgICAgICAgcC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIHBOYW1lKTtcclxuICAgICAgICBwLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHBWYWx1ZSk7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQ3Jvc3MtYnJvd3NlciBTV0YgcmVtb3ZhbFxyXG4gICAgICAgIC0gRXNwZWNpYWxseSBuZWVkZWQgdG8gc2FmZWx5IGFuZCBjb21wbGV0ZWx5IHJlbW92ZSBhIFNXRiBpbiBJbnRlcm5ldCBFeHBsb3JlclxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVNXRihpZCkge1xyXG4gICAgICAgIHZhciBvYmogPSBnZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKG9iaiAmJiBvYmoubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PT0gXCJPQkpFQ1RcIikge1xyXG4gICAgICAgICAgICBpZiAodWEuaWUpIHtcclxuICAgICAgICAgICAgICAgIG9iai5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24gcmVtb3ZlU1dGSW5JRSgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1RoaXMgc3RlcCBwcmV2ZW50cyBtZW1vcnkgbGVha3MgaW4gSW50ZXJuZXQgRXhwbG9yZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2ldID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbaV0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChyZW1vdmVTV0ZJbklFLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9iai5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9iaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNFbGVtZW50KGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIChpZCAmJiBpZC5ub2RlVHlwZSAmJiBpZC5ub2RlVHlwZSA9PT0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SWQodGhpbmcpIHtcclxuICAgICAgICByZXR1cm4gKGlzRWxlbWVudCh0aGluZykpID8gdGhpbmcuaWQgOiB0aGluZztcclxuICAgIH1cclxuXHJcbiAgICAvKiBGdW5jdGlvbnMgdG8gb3B0aW1pemUgSmF2YVNjcmlwdCBjb21wcmVzc2lvblxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldEVsZW1lbnRCeUlkKGlkKSB7XHJcblxyXG4gICAgICAgIC8vQWxsb3cgdXNlcnMgdG8gcGFzcyBhbiBlbGVtZW50IE9SIGFuIGVsZW1lbnQncyBJRFxyXG4gICAgICAgIGlmIChpc0VsZW1lbnQoaWQpKSB7IHJldHVybiBpZDsgfVxyXG5cclxuICAgICAgICB2YXIgZWwgPSBudWxsO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGVsID0gZG9jLmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHt9XHJcbiAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWwpIHtcclxuICAgICAgICByZXR1cm4gZG9jLmNyZWF0ZUVsZW1lbnQoZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vVG8gYWlkIGNvbXByZXNzaW9uOyByZXBsYWNlcyAxNCBpbnN0YW5jZXMgb2YgcGFyZXNlSW50IHdpdGggcmFkaXhcclxuICAgIGZ1bmN0aW9uIHRvSW50KHN0cikge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludChzdHIsIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBVcGRhdGVkIGF0dGFjaEV2ZW50IGZ1bmN0aW9uIGZvciBJbnRlcm5ldCBFeHBsb3JlclxyXG4gICAgICAgIC0gU3RvcmVzIGF0dGFjaEV2ZW50IGluZm9ybWF0aW9uIGluIGFuIEFycmF5LCBzbyBvbiB1bmxvYWQgdGhlIGRldGFjaEV2ZW50IGZ1bmN0aW9ucyBjYW4gYmUgY2FsbGVkIHRvIGF2b2lkIG1lbW9yeSBsZWFrc1xyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVyKHRhcmdldCwgZXZlbnRUeXBlLCBmbikge1xyXG4gICAgICAgIHRhcmdldC5hdHRhY2hFdmVudChldmVudFR5cGUsIGZuKTtcclxuICAgICAgICBsaXN0ZW5lcnNBcnJbbGlzdGVuZXJzQXJyLmxlbmd0aF0gPSBbdGFyZ2V0LCBldmVudFR5cGUsIGZuXTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBGbGFzaCBQbGF5ZXIgYW5kIFNXRiBjb250ZW50IHZlcnNpb24gbWF0Y2hpbmdcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBoYXNQbGF5ZXJWZXJzaW9uKHJ2KSB7XHJcbiAgICAgICAgcnYgKz0gXCJcIjsgLy9Db2VyY2UgbnVtYmVyIHRvIHN0cmluZywgaWYgbmVlZGVkLlxyXG4gICAgICAgIHZhciBwdiA9IHVhLnB2LCB2ID0gcnYuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIHZbMF0gPSB0b0ludCh2WzBdKTtcclxuICAgICAgICB2WzFdID0gdG9JbnQodlsxXSkgfHwgMDsgLy8gc3VwcG9ydHMgc2hvcnQgbm90YXRpb24sIGUuZy4gXCI5XCIgaW5zdGVhZCBvZiBcIjkuMC4wXCJcclxuICAgICAgICB2WzJdID0gdG9JbnQodlsyXSkgfHwgMDtcclxuICAgICAgICByZXR1cm4gKHB2WzBdID4gdlswXSB8fCAocHZbMF0gPT0gdlswXSAmJiBwdlsxXSA+IHZbMV0pIHx8IChwdlswXSA9PSB2WzBdICYmIHB2WzFdID09IHZbMV0gJiYgcHZbMl0gPj0gdlsyXSkpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIENyb3NzLWJyb3dzZXIgZHluYW1pYyBDU1MgY3JlYXRpb25cclxuICAgICAgICAtIEJhc2VkIG9uIEJvYmJ5IHZhbiBkZXIgU2x1aXMnIHNvbHV0aW9uOiBodHRwOi8vd3d3LmJvYmJ5dmFuZGVyc2x1aXMuY29tL2FydGljbGVzL2R5bmFtaWNDU1MucGhwXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ1NTKHNlbCwgZGVjbCwgbWVkaWEsIG5ld1N0eWxlKSB7XHJcbiAgICAgICAgdmFyIGggPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG4gICAgICAgIGlmICghaCkgeyByZXR1cm47IH0gLy8gdG8gYWxzbyBzdXBwb3J0IGJhZGx5IGF1dGhvcmVkIEhUTUwgcGFnZXMgdGhhdCBsYWNrIGEgaGVhZCBlbGVtZW50XHJcbiAgICAgICAgdmFyIG0gPSAodHlwZW9mIG1lZGlhID09PSBcInN0cmluZ1wiKSA/IG1lZGlhIDogXCJzY3JlZW5cIjtcclxuICAgICAgICBpZiAobmV3U3R5bGUpIHtcclxuICAgICAgICAgICAgZHluYW1pY1N0eWxlc2hlZXQgPSBudWxsO1xyXG4gICAgICAgICAgICBkeW5hbWljU3R5bGVzaGVldE1lZGlhID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFkeW5hbWljU3R5bGVzaGVldCB8fCBkeW5hbWljU3R5bGVzaGVldE1lZGlhICE9IG0pIHtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIGR5bmFtaWMgc3R5bGVzaGVldCArIGdldCBhIGdsb2JhbCByZWZlcmVuY2UgdG8gaXRcclxuICAgICAgICAgICAgdmFyIHMgPSBjcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgICAgICAgIHMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHQvY3NzXCIpO1xyXG4gICAgICAgICAgICBzLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG0pO1xyXG4gICAgICAgICAgICBkeW5hbWljU3R5bGVzaGVldCA9IGguYXBwZW5kQ2hpbGQocyk7XHJcbiAgICAgICAgICAgIGlmICh1YS5pZSAmJiB0eXBlb2YgZG9jLnN0eWxlU2hlZXRzICE9PSBVTkRFRiAmJiBkb2Muc3R5bGVTaGVldHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZHluYW1pY1N0eWxlc2hlZXQgPSBkb2Muc3R5bGVTaGVldHNbZG9jLnN0eWxlU2hlZXRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGR5bmFtaWNTdHlsZXNoZWV0TWVkaWEgPSBtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhZGQgc3R5bGUgcnVsZVxyXG4gICAgICAgIGlmIChkeW5hbWljU3R5bGVzaGVldCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGR5bmFtaWNTdHlsZXNoZWV0LmFkZFJ1bGUgIT09IFVOREVGKSB7XHJcbiAgICAgICAgICAgICAgICBkeW5hbWljU3R5bGVzaGVldC5hZGRSdWxlKHNlbCwgZGVjbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvYy5jcmVhdGVUZXh0Tm9kZSAhPT0gVU5ERUYpIHtcclxuICAgICAgICAgICAgICAgIGR5bmFtaWNTdHlsZXNoZWV0LmFwcGVuZENoaWxkKGRvYy5jcmVhdGVUZXh0Tm9kZShzZWwgKyBcIiB7XCIgKyBkZWNsICsgXCJ9XCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRWaXNpYmlsaXR5KGlkLCBpc1Zpc2libGUpIHtcclxuICAgICAgICBpZiAoIWF1dG9IaWRlU2hvdykgeyByZXR1cm47IH1cclxuICAgICAgICB2YXIgdiA9IGlzVmlzaWJsZSA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgZWwgPSBnZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKGlzRG9tTG9hZGVkICYmIGVsKSB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLnZpc2liaWxpdHkgPSB2O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGlkID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUNTUyhcIiNcIiArIGlkLCBcInZpc2liaWxpdHk6XCIgKyB2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogRmlsdGVyIHRvIGF2b2lkIFhTUyBhdHRhY2tzXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gdXJsRW5jb2RlSWZOZWNlc3Nhcnkocykge1xyXG4gICAgICAgIHZhciByZWdleCA9IC9bXFxcXFxcXCI8PlxcLjtdLztcclxuICAgICAgICB2YXIgaGFzQmFkQ2hhcnMgPSByZWdleC5leGVjKHMpICE9PSBudWxsO1xyXG4gICAgICAgIHJldHVybiBoYXNCYWRDaGFycyAmJiB0eXBlb2YgZW5jb2RlVVJJQ29tcG9uZW50ICE9PSBVTkRFRiA/IGVuY29kZVVSSUNvbXBvbmVudChzKSA6IHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyogUmVsZWFzZSBtZW1vcnkgdG8gYXZvaWQgbWVtb3J5IGxlYWtzIGNhdXNlZCBieSBjbG9zdXJlcywgZml4IGhhbmdpbmcgYXVkaW8vdmlkZW8gdGhyZWFkcyBhbmQgZm9yY2Ugb3BlbiBzb2NrZXRzL05ldENvbm5lY3Rpb25zIHRvIGRpc2Nvbm5lY3QgKEludGVybmV0IEV4cGxvcmVyIG9ubHkpXHJcbiAgICAqL1xyXG4gICAgdmFyIGNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHVhLmllKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lcnMgdG8gYXZvaWQgbWVtb3J5IGxlYWtzXHJcbiAgICAgICAgICAgICAgICB2YXIgbGwgPSBsaXN0ZW5lcnNBcnIubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzQXJyW2ldWzBdLmRldGFjaEV2ZW50KGxpc3RlbmVyc0FycltpXVsxXSwgbGlzdGVuZXJzQXJyW2ldWzJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNsZWFudXAgZHluYW1pY2FsbHkgZW1iZWRkZWQgb2JqZWN0cyB0byBmaXggYXVkaW8vdmlkZW8gdGhyZWFkcyBhbmQgZm9yY2Ugb3BlbiBzb2NrZXRzIGFuZCBOZXRDb25uZWN0aW9ucyB0byBkaXNjb25uZWN0XHJcbiAgICAgICAgICAgICAgICB2YXIgaWwgPSBvYmpJZEFyci5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGlsOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVTV0Yob2JqSWRBcnJbal0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY2xlYW51cCBsaWJyYXJ5J3MgbWFpbiBjbG9zdXJlcyB0byBhdm9pZCBtZW1vcnkgbGVha3NcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgaW4gdWEpIHtcclxuICAgICAgICAgICAgICAgICAgICB1YVtrXSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1YSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBsIGluIHN3Zm9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3Zm9iamVjdFtsXSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzd2ZvYmplY3QgPSBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvKiBQdWJsaWMgQVBJXHJcbiAgICAgICAgICAgIC0gUmVmZXJlbmNlOiBodHRwOi8vY29kZS5nb29nbGUuY29tL3Avc3dmb2JqZWN0L3dpa2kvZG9jdW1lbnRhdGlvblxyXG4gICAgICAgICovXHJcbiAgICAgICAgcmVnaXN0ZXJPYmplY3Q6IGZ1bmN0aW9uIChvYmplY3RJZFN0ciwgc3dmVmVyc2lvblN0ciwgeGlTd2ZVcmxTdHIsIGNhbGxiYWNrRm4pIHtcclxuICAgICAgICAgICAgaWYgKHVhLnczICYmIG9iamVjdElkU3RyICYmIHN3ZlZlcnNpb25TdHIpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWdPYmogPSB7fTtcclxuICAgICAgICAgICAgICAgIHJlZ09iai5pZCA9IG9iamVjdElkU3RyO1xyXG4gICAgICAgICAgICAgICAgcmVnT2JqLnN3ZlZlcnNpb24gPSBzd2ZWZXJzaW9uU3RyO1xyXG4gICAgICAgICAgICAgICAgcmVnT2JqLmV4cHJlc3NJbnN0YWxsID0geGlTd2ZVcmxTdHI7XHJcbiAgICAgICAgICAgICAgICByZWdPYmouY2FsbGJhY2tGbiA9IGNhbGxiYWNrRm47XHJcbiAgICAgICAgICAgICAgICByZWdPYmpBcnJbcmVnT2JqQXJyLmxlbmd0aF0gPSByZWdPYmo7XHJcbiAgICAgICAgICAgICAgICBzZXRWaXNpYmlsaXR5KG9iamVjdElkU3RyLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2FsbGJhY2tGbikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tGbih7c3VjY2VzczogZmFsc2UsIGlkOiBvYmplY3RJZFN0cn0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0T2JqZWN0QnlJZDogZnVuY3Rpb24gKG9iamVjdElkU3RyKSB7XHJcbiAgICAgICAgICAgIGlmICh1YS53Mykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldE9iamVjdEJ5SWQob2JqZWN0SWRTdHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZW1iZWRTV0Y6IGZ1bmN0aW9uIChzd2ZVcmxTdHIsIHJlcGxhY2VFbGVtSWRTdHIsIHdpZHRoU3RyLCBoZWlnaHRTdHIsIHN3ZlZlcnNpb25TdHIsIHhpU3dmVXJsU3RyLCBmbGFzaHZhcnNPYmosIHBhck9iaiwgYXR0T2JqLCBjYWxsYmFja0ZuKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgaWQgPSBnZXRJZChyZXBsYWNlRWxlbUlkU3RyKSxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrT2JqID0ge3N1Y2Nlc3M6IGZhbHNlLCBpZDogaWR9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHVhLnczICYmICEodWEud2sgJiYgdWEud2sgPCAzMTIpICYmIHN3ZlVybFN0ciAmJiByZXBsYWNlRWxlbUlkU3RyICYmIHdpZHRoU3RyICYmIGhlaWdodFN0ciAmJiBzd2ZWZXJzaW9uU3RyKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRWaXNpYmlsaXR5KGlkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBhZGREb21Mb2FkRXZlbnQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoU3RyICs9IFwiXCI7IC8vIGF1dG8tY29udmVydCB0byBzdHJpbmdcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRTdHIgKz0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXR0ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dE9iaiAmJiB0eXBlb2YgYXR0T2JqID09PSBPQkpFQ1QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBhdHRPYmopIHsgLy8gY29weSBvYmplY3QgdG8gYXZvaWQgdGhlIHVzZSBvZiByZWZlcmVuY2VzLCBiZWNhdXNlIHdlYiBhdXRob3JzIG9mdGVuIHJldXNlIGF0dE9iaiBmb3IgbXVsdGlwbGUgU1dGc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0W2ldID0gYXR0T2JqW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF0dC5kYXRhID0gc3dmVXJsU3RyO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dC53aWR0aCA9IHdpZHRoU3RyO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dC5oZWlnaHQgPSBoZWlnaHRTdHI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhciA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJPYmogJiYgdHlwZW9mIHBhck9iaiA9PT0gT0JKRUNUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gcGFyT2JqKSB7IC8vIGNvcHkgb2JqZWN0IHRvIGF2b2lkIHRoZSB1c2Ugb2YgcmVmZXJlbmNlcywgYmVjYXVzZSB3ZWIgYXV0aG9ycyBvZnRlbiByZXVzZSBwYXJPYmogZm9yIG11bHRpcGxlIFNXRnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcltqXSA9IHBhck9ialtqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmxhc2h2YXJzT2JqICYmIHR5cGVvZiBmbGFzaHZhcnNPYmogPT09IE9CSkVDVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrIGluIGZsYXNodmFyc09iaikgeyAvLyBjb3B5IG9iamVjdCB0byBhdm9pZCB0aGUgdXNlIG9mIHJlZmVyZW5jZXMsIGJlY2F1c2Ugd2ViIGF1dGhvcnMgb2Z0ZW4gcmV1c2UgZmxhc2h2YXJzT2JqIGZvciBtdWx0aXBsZSBTV0ZzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmxhc2h2YXJzT2JqLmhhc093blByb3BlcnR5KGspKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSAoZW5jb2RlVVJJRW5hYmxlZCkgPyBlbmNvZGVVUklDb21wb25lbnQoaykgOiBrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IChlbmNvZGVVUklFbmFibGVkKSA/IGVuY29kZVVSSUNvbXBvbmVudChmbGFzaHZhcnNPYmpba10pIDogZmxhc2h2YXJzT2JqW2tdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhci5mbGFzaHZhcnMgIT09IFVOREVGKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhci5mbGFzaHZhcnMgKz0gXCImXCIgKyBrZXkgKyBcIj1cIiArIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyLmZsYXNodmFycyA9IGtleSArIFwiPVwiICsgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzUGxheWVyVmVyc2lvbihzd2ZWZXJzaW9uU3RyKSkgeyAvLyBjcmVhdGUgU1dGXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSBjcmVhdGVTV0YoYXR0LCBwYXIsIHJlcGxhY2VFbGVtSWRTdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0LmlkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmlsaXR5KGlkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja09iai5zdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tPYmoucmVmID0gb2JqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja09iai5pZCA9IG9iai5pZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoeGlTd2ZVcmxTdHIgJiYgY2FuRXhwcmVzc0luc3RhbGwoKSkgeyAvLyBzaG93IEFkb2JlIEV4cHJlc3MgSW5zdGFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHQuZGF0YSA9IHhpU3dmVXJsU3RyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RXhwcmVzc0luc3RhbGwoYXR0LCBwYXIsIHJlcGxhY2VFbGVtSWRTdHIsIGNhbGxiYWNrRm4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyAvLyBzaG93IGZhbGxiYWNrIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJpbGl0eShpZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja0ZuKSB7IGNhbGxiYWNrRm4oY2FsbGJhY2tPYmopOyB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjYWxsYmFja0ZuKSB7IGNhbGxiYWNrRm4oY2FsbGJhY2tPYmopOyB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc3dpdGNoT2ZmQXV0b0hpZGVTaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGF1dG9IaWRlU2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGVuYWJsZVVyaUVuY29kaW5nOiBmdW5jdGlvbiAoYm9vbCkge1xyXG4gICAgICAgICAgICBlbmNvZGVVUklFbmFibGVkID0gKHR5cGVvZiBib29sID09PSBVTkRFRikgPyB0cnVlIDogYm9vbDtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB1YTogdWEsXHJcblxyXG4gICAgICAgIGdldEZsYXNoUGxheWVyVmVyc2lvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge21ham9yOiB1YS5wdlswXSwgbWlub3I6IHVhLnB2WzFdLCByZWxlYXNlOiB1YS5wdlsyXX07XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFzRmxhc2hQbGF5ZXJWZXJzaW9uOiBoYXNQbGF5ZXJWZXJzaW9uLFxyXG5cclxuICAgICAgICBjcmVhdGVTV0Y6IGZ1bmN0aW9uIChhdHRPYmosIHBhck9iaiwgcmVwbGFjZUVsZW1JZFN0cikge1xyXG4gICAgICAgICAgICBpZiAodWEudzMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVTV0YoYXR0T2JqLCBwYXJPYmosIHJlcGxhY2VFbGVtSWRTdHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNob3dFeHByZXNzSW5zdGFsbDogZnVuY3Rpb24gKGF0dCwgcGFyLCByZXBsYWNlRWxlbUlkU3RyLCBjYWxsYmFja0ZuKSB7XHJcbiAgICAgICAgICAgIGlmICh1YS53MyAmJiBjYW5FeHByZXNzSW5zdGFsbCgpKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93RXhwcmVzc0luc3RhbGwoYXR0LCBwYXIsIHJlcGxhY2VFbGVtSWRTdHIsIGNhbGxiYWNrRm4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmVtb3ZlU1dGOiBmdW5jdGlvbiAob2JqRWxlbUlkU3RyKSB7XHJcbiAgICAgICAgICAgIGlmICh1YS53Mykge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlU1dGKG9iakVsZW1JZFN0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjcmVhdGVDU1M6IGZ1bmN0aW9uIChzZWxTdHIsIGRlY2xTdHIsIG1lZGlhU3RyLCBuZXdTdHlsZUJvb2xlYW4pIHtcclxuICAgICAgICAgICAgaWYgKHVhLnczKSB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVDU1Moc2VsU3RyLCBkZWNsU3RyLCBtZWRpYVN0ciwgbmV3U3R5bGVCb29sZWFuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGFkZERvbUxvYWRFdmVudDogYWRkRG9tTG9hZEV2ZW50LFxyXG5cclxuICAgICAgICBhZGRMb2FkRXZlbnQ6IGFkZExvYWRFdmVudCxcclxuXHJcbiAgICAgICAgZ2V0UXVlcnlQYXJhbVZhbHVlOiBmdW5jdGlvbiAocGFyYW0pIHtcclxuICAgICAgICAgICAgdmFyIHEgPSBkb2MubG9jYXRpb24uc2VhcmNoIHx8IGRvYy5sb2NhdGlvbi5oYXNoO1xyXG4gICAgICAgICAgICBpZiAocSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKC9cXD8vLnRlc3QocSkpIHsgcSA9IHEuc3BsaXQoXCI/XCIpWzFdOyB9IC8vIHN0cmlwIHF1ZXN0aW9uIG1hcmtcclxuICAgICAgICAgICAgICAgIGlmICghcGFyYW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXJsRW5jb2RlSWZOZWNlc3NhcnkocSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFpcnMgPSBxLnNwbGl0KFwiJlwiKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFpcnNbaV0uc3Vic3RyaW5nKDAsIHBhaXJzW2ldLmluZGV4T2YoXCI9XCIpKSA9PSBwYXJhbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXJsRW5jb2RlSWZOZWNlc3NhcnkocGFpcnNbaV0uc3Vic3RyaW5nKChwYWlyc1tpXS5pbmRleE9mKFwiPVwiKSArIDEpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIEZvciBpbnRlcm5hbCB1c2FnZSBvbmx5XHJcbiAgICAgICAgZXhwcmVzc0luc3RhbGxDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaXNFeHByZXNzSW5zdGFsbEFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IGdldEVsZW1lbnRCeUlkKEVYUFJFU1NfSU5TVEFMTF9JRCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqICYmIHN0b3JlZEZiQ29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChzdG9yZWRGYkNvbnRlbnQsIG9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3JlZEZiQ29udGVudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpc2liaWxpdHkoc3RvcmVkRmJDb250ZW50SWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodWEuaWUpIHsgc3RvcmVkRmJDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3JlZENhbGxiYWNrRm4pIHsgc3RvcmVkQ2FsbGJhY2tGbihzdG9yZWRDYWxsYmFja09iaik7IH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlzRXhwcmVzc0luc3RhbGxBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHZlcnNpb246IFwiMi4zXCJcclxuXHJcbiAgICB9O1xyXG59KSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBJbkxpbmUgPSByZXF1aXJlKCcuL0luTGluZScpO1xyXG52YXIgV3JhcHBlciA9IHJlcXVpcmUoJy4vV3JhcHBlcicpO1xyXG5cclxuZnVuY3Rpb24gQWQoYWRKVHJlZSkge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBBZCkpIHtcclxuICAgIHJldHVybiBuZXcgQWQoYWRKVHJlZSk7XHJcbiAgfVxyXG4gIHRoaXMuaW5pdGlhbGl6ZShhZEpUcmVlKTtcclxufVxyXG5cclxuQWQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihhZEpUcmVlKSB7XHJcbiAgdGhpcy5pZCA9IGFkSlRyZWUuYXR0cignaWQnKTtcclxuICB0aGlzLnNlcXVlbmNlID0gYWRKVHJlZS5hdHRyKCdzZXF1ZW5jZScpO1xyXG5cclxuICBpZihhZEpUcmVlLmluTGluZSkge1xyXG4gICAgdGhpcy5pbkxpbmUgPSBuZXcgSW5MaW5lKGFkSlRyZWUuaW5MaW5lKTtcclxuICB9XHJcblxyXG4gIGlmKGFkSlRyZWUud3JhcHBlcil7XHJcbiAgICB0aGlzLndyYXBwZXIgPSBuZXcgV3JhcHBlcihhZEpUcmVlLndyYXBwZXIpO1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQWQ7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFRyYWNraW5nRXZlbnQgPSByZXF1aXJlKCcuL1RyYWNraW5nRXZlbnQnKTtcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcblxyXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XHJcblxyXG52YXIgbG9nZ2VyID0gcmVxdWlyZSAoJy4uLy4uL3V0aWxzL2NvbnNvbGVMb2dnZXInKTtcclxuXHJcblxyXG5mdW5jdGlvbiBDb21wYW5pb24oY29tcGFuaW9uSlRyZWUpIHtcclxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFuaW9uKSkge1xyXG4gICAgcmV0dXJuIG5ldyBDb21wYW5pb24oY29tcGFuaW9uSlRyZWUpO1xyXG4gIH1cclxuXHJcbiAgbG9nZ2VyLmluZm8gKFwiPENvbXBhbmlvbj4gZm91bmQgY29tcGFuaW9uIGFkXCIpO1xyXG4gIGxvZ2dlci5kZWJ1ZyAoXCI8Q29tcGFuaW9uPiAgY29tcGFuaW9uSlRyZWU6XCIsIGNvbXBhbmlvbkpUcmVlKTtcclxuXHJcbiAgLy9SZXF1aXJlZCBFbGVtZW50c1xyXG4gIHRoaXMuY3JlYXRpdmVUeXBlID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUuc3RhdGljUmVzb3VyY2UsICdjcmVhdGl2ZVR5cGUnKTtcclxuICB0aGlzLnN0YXRpY1Jlc291cmNlID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLnN0YXRpY1Jlc291cmNlKTtcclxuXHJcbiAgbG9nZ2VyLmluZm8gKFwiPENvbXBhbmlvbj4gIGNyZWF0aXZlVHlwZTogXCIgKyB0aGlzLmNyZWF0aXZlVHlwZSk7XHJcbiAgbG9nZ2VyLmluZm8gKFwiPENvbXBhbmlvbj4gIHN0YXRpY1Jlc291cmNlOiBcIiArIHRoaXMuc3RhdGljUmVzb3VyY2UpO1xyXG5cclxuICAvLyBXZWlyZCBidWcgd2hlbiB0aGUgSlhPTiB0cmVlIGlzIGJ1aWx0IGl0IGRvZXNuJ3QgaGFuZGxlIGNhc2luZyBwcm9wZXJseSBpbiB0aGlzIHNpdHVhdGlvbi4uLlxyXG4gIHZhciBodG1sUmVzb3VyY2UgPSBudWxsO1xyXG4gIGlmICh4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuSFRNTFJlc291cmNlKSkge1xyXG4gICAgaHRtbFJlc291cmNlID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLkhUTUxSZXNvdXJjZSk7XHJcbiAgfSBlbHNlIGlmICh4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuaFRNTFJlc291cmNlKSkge1xyXG4gICAgaHRtbFJlc291cmNlID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmhUTUxSZXNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICBpZiAoaHRtbFJlc291cmNlICE9PSBudWxsKVxyXG4gIHtcclxuICAgIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+IGZvdW5kIGh0bWwgcmVzb3VyY2VcIiwgaHRtbFJlc291cmNlKTtcclxuICB9XHJcblxyXG4gIHRoaXMuaHRtbFJlc291cmNlID0gaHRtbFJlc291cmNlO1xyXG5cclxuICB2YXIgaWZyYW1lUmVzb3VyY2UgPSBudWxsO1xyXG4gIGlmICh4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuSUZyYW1lUmVzb3VyY2UpKSB7XHJcbiAgICBpZnJhbWVSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5JRnJhbWVSZXNvdXJjZSk7XHJcbiAgfSBlbHNlIGlmICh4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuaUZyYW1lcmVzb3VyY2UpKSB7XHJcbiAgICBpZnJhbWVSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5pRnJhbWVyZXNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICBpZiAoaWZyYW1lUmVzb3VyY2UgIT09IG51bGwpXHJcbiAge1xyXG4gICAgbG9nZ2VyLmluZm8gKFwiPENvbXBhbmlvbj4gZm91bmQgaWZyYW1lIHJlc291cmNlXCIsIGlmcmFtZVJlc291cmNlKTtcclxuICB9XHJcblxyXG4gIHRoaXMuaWZyYW1lUmVzb3VyY2UgPSBpZnJhbWVSZXNvdXJjZTtcclxuXHJcbiAgLy9PcHRpb25hbCBmaWVsZHNcclxuICB0aGlzLmlkID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdpZCcpO1xyXG4gIHRoaXMud2lkdGggPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ3dpZHRoJyk7XHJcbiAgdGhpcy5oZWlnaHQgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2hlaWdodCcpO1xyXG4gIHRoaXMuZXhwYW5kZWRXaWR0aCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnZXhwYW5kZWRXaWR0aCcpO1xyXG4gIHRoaXMuZXhwYW5kZWRIZWlnaHQgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2V4cGFuZGVkSGVpZ2h0Jyk7XHJcbiAgdGhpcy5zY2FsYWJsZSA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnc2NhbGFibGUnKTtcclxuICB0aGlzLm1haW50YWluQXNwZWN0UmF0aW8gPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ21haW50YWluQXNwZWN0UmF0aW8nKTtcclxuICB0aGlzLm1pblN1Z2dlc3RlZER1cmF0aW9uID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdtaW5TdWdnZXN0ZWREdXJhdGlvbicpO1xyXG4gIHRoaXMuYXBpRnJhbWV3b3JrID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdhcGlGcmFtZXdvcmsnKTtcclxuICB0aGlzLmNvbXBhbmlvbkNsaWNrVGhyb3VnaCA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5jb21wYW5pb25DbGlja1Rocm91Z2gpO1xyXG4gIHRoaXMudHJhY2tpbmdFdmVudHMgPSBwYXJzZVRyYWNraW5nRXZlbnRzKGNvbXBhbmlvbkpUcmVlLnRyYWNraW5nRXZlbnRzICYmIGNvbXBhbmlvbkpUcmVlLnRyYWNraW5nRXZlbnRzLnRyYWNraW5nKTtcclxuXHJcbiAgbG9nZ2VyLmluZm8gKFwiPENvbXBhbmlvbj4gIGNvbXBhbmlvbkNsaWNrVGhyb3VnaDogXCIgKyB0aGlzLmNvbXBhbmlvbkNsaWNrVGhyb3VnaCk7XHJcblxyXG5cclxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gcGFyc2VUcmFja2luZ0V2ZW50cyh0cmFja2luZ0V2ZW50cykge1xyXG4gICAgdmFyIHRyYWNraW5ncyA9IFtdO1xyXG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQodHJhY2tpbmdFdmVudHMpKSB7XHJcbiAgICAgIHRyYWNraW5nRXZlbnRzID0gdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdFdmVudHMpID8gdHJhY2tpbmdFdmVudHMgOiBbdHJhY2tpbmdFdmVudHNdO1xyXG4gICAgICB0cmFja2luZ0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFja2luZ0RhdGEpIHtcclxuICAgICAgICB0cmFja2luZ3MucHVzaChuZXcgVHJhY2tpbmdFdmVudCh0cmFja2luZ0RhdGEpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJhY2tpbmdzO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21wYW5pb247IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIExpbmVhciA9IHJlcXVpcmUoJy4vTGluZWFyJyk7XHJcbnZhciBDb21wYW5pb24gPSByZXF1aXJlKCcuL0NvbXBhbmlvbicpO1xyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxuZnVuY3Rpb24gQ3JlYXRpdmUoY3JlYXRpdmVKVHJlZSkge1xyXG4gIGlmKCEodGhpcyBpbnN0YW5jZW9mIENyZWF0aXZlKSkge1xyXG4gICAgcmV0dXJuIG5ldyBDcmVhdGl2ZShjcmVhdGl2ZUpUcmVlKTtcclxuICB9XHJcblxyXG4gIHRoaXMuaWQgPSBjcmVhdGl2ZUpUcmVlLmF0dHIoJ2lkJyk7XHJcbiAgdGhpcy5zZXF1ZW5jZSA9IGNyZWF0aXZlSlRyZWUuYXR0cignc2VxdWVuY2UnKTtcclxuICB0aGlzLmFkSWQgPSBjcmVhdGl2ZUpUcmVlLmF0dHIoJ2FkSWQnKTtcclxuICB0aGlzLmFwaUZyYW1ld29yayA9IGNyZWF0aXZlSlRyZWUuYXR0cignYXBpRnJhbWV3b3JrJyk7XHJcblxyXG4gIGlmKGNyZWF0aXZlSlRyZWUubGluZWFyKSB7XHJcbiAgICB0aGlzLmxpbmVhciA9IG5ldyBMaW5lYXIoY3JlYXRpdmVKVHJlZS5saW5lYXIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNyZWF0aXZlSlRyZWUuY29tcGFuaW9uQWRzKSB7XHJcbiAgICB2YXIgY29tcGFuaW9ucyA9IFtdO1xyXG4gICAgdmFyIGNvbXBhbmlvbkFkcyA9IGNyZWF0aXZlSlRyZWUuY29tcGFuaW9uQWRzICYmIGNyZWF0aXZlSlRyZWUuY29tcGFuaW9uQWRzLmNvbXBhbmlvbjtcclxuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKGNvbXBhbmlvbkFkcykpIHtcclxuICAgICAgY29tcGFuaW9uQWRzID0gdXRpbGl0aWVzLmlzQXJyYXkoY29tcGFuaW9uQWRzKSA/IGNvbXBhbmlvbkFkcyA6IFtjb21wYW5pb25BZHNdO1xyXG4gICAgICBjb21wYW5pb25BZHMuZm9yRWFjaChmdW5jdGlvbiAoY29tcGFuaW9uRGF0YSkge1xyXG4gICAgICAgIGNvbXBhbmlvbnMucHVzaChuZXcgQ29tcGFuaW9uKGNvbXBhbmlvbkRhdGEpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbXBhbmlvbkFkcyA9IGNvbXBhbmlvbnM7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIGF0IHRoZSBjcmVhdGl2ZS5cclxuICovXHJcbkNyZWF0aXZlLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCl7XHJcbiAgaWYodGhpcy5saW5lYXIpIHtcclxuICAgIHJldHVybiB0aGlzLmxpbmVhci5pc1N1cHBvcnRlZCgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5DcmVhdGl2ZS5wYXJzZUNyZWF0aXZlcyA9IGZ1bmN0aW9uIHBhcnNlQ3JlYXRpdmVzKGNyZWF0aXZlc0pUcmVlKSB7XHJcbiAgdmFyIGNyZWF0aXZlcyA9IFtdO1xyXG4gIHZhciBjcmVhdGl2ZXNEYXRhO1xyXG4gIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKGNyZWF0aXZlc0pUcmVlKSAmJiB1dGlsaXRpZXMuaXNEZWZpbmVkKGNyZWF0aXZlc0pUcmVlLmNyZWF0aXZlKSkge1xyXG4gICAgY3JlYXRpdmVzRGF0YSA9IHV0aWxpdGllcy5pc0FycmF5KGNyZWF0aXZlc0pUcmVlLmNyZWF0aXZlKSA/IGNyZWF0aXZlc0pUcmVlLmNyZWF0aXZlIDogW2NyZWF0aXZlc0pUcmVlLmNyZWF0aXZlXTtcclxuICAgIGNyZWF0aXZlc0RhdGEuZm9yRWFjaChmdW5jdGlvbiAoY3JlYXRpdmUpIHtcclxuICAgICAgY3JlYXRpdmVzLnB1c2gobmV3IENyZWF0aXZlKGNyZWF0aXZlKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIGNyZWF0aXZlcztcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ3JlYXRpdmU7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcclxudmFyIENyZWF0aXZlID0gcmVxdWlyZSgnLi9DcmVhdGl2ZScpO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xyXG5cclxuZnVuY3Rpb24gSW5MaW5lKGlubGluZUpUcmVlKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEluTGluZSkpIHtcclxuICAgIHJldHVybiBuZXcgSW5MaW5lKGlubGluZUpUcmVlKTtcclxuICB9XHJcblxyXG4gIC8vUmVxdWlyZWQgRmllbGRzXHJcbiAgdGhpcy5hZFRpdGxlID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmFkVGl0bGUpO1xyXG4gIHRoaXMuYWRTeXN0ZW0gPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuYWRTeXN0ZW0pO1xyXG4gIHRoaXMuaW1wcmVzc2lvbnMgPSB2YXN0VXRpbC5wYXJzZUltcHJlc3Npb25zKGlubGluZUpUcmVlLmltcHJlc3Npb24pO1xyXG4gIHRoaXMuY3JlYXRpdmVzID0gQ3JlYXRpdmUucGFyc2VDcmVhdGl2ZXMoaW5saW5lSlRyZWUuY3JlYXRpdmVzKTtcclxuXHJcbiAgLy9PcHRpb25hbCBGaWVsZHNcclxuICB0aGlzLmRlc2NyaXB0aW9uID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmRlc2NyaXB0aW9uKTtcclxuICB0aGlzLmFkdmVydGlzZXIgPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuYWR2ZXJ0aXNlcik7XHJcbiAgdGhpcy5zdXJ2ZXlzID0gcGFyc2VTdXJ2ZXlzKGlubGluZUpUcmVlLnN1cnZleSk7XHJcbiAgdGhpcy5lcnJvciA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5lcnJvcik7XHJcbiAgdGhpcy5wcmljaW5nID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLnByaWNpbmcpO1xyXG4gIHRoaXMuZXh0ZW5zaW9ucyA9IGlubGluZUpUcmVlLmV4dGVuc2lvbnM7XHJcblxyXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBwYXJzZVN1cnZleXMoaW5saW5lU3VydmV5cykge1xyXG4gICAgaWYgKGlubGluZVN1cnZleXMpIHtcclxuICAgICAgcmV0dXJuIHV0aWxpdGllcy50cmFuc2Zvcm1BcnJheSh1dGlsaXRpZXMuaXNBcnJheShpbmxpbmVTdXJ2ZXlzKSA/IGlubGluZVN1cnZleXMgOiBbaW5saW5lU3VydmV5c10sIGZ1bmN0aW9uIChzdXJ2ZXkpIHtcclxuICAgICAgICBpZih1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhzdXJ2ZXkua2V5VmFsdWUpKXtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVyaTogc3VydmV5LmtleVZhbHVlLFxyXG4gICAgICAgICAgICB0eXBlOiBzdXJ2ZXkuYXR0cigndHlwZScpXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBhbGwgdGhlIGNyZWF0aXZlcy5cclxuICovXHJcbkluTGluZS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpe1xyXG4gIHZhciBpLGxlbjtcclxuXHJcbiAgaWYodGhpcy5jcmVhdGl2ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBmb3IoaSA9IDAsIGxlbiA9IHRoaXMuY3JlYXRpdmVzLmxlbmd0aDsgaTwgbGVuOyBpKz0xKXtcclxuICAgIGlmKCF0aGlzLmNyZWF0aXZlc1tpXS5pc1N1cHBvcnRlZCgpKXtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSW5MaW5lO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgVHJhY2tpbmdFdmVudCA9IHJlcXVpcmUoJy4vVHJhY2tpbmdFdmVudCcpO1xyXG52YXIgTWVkaWFGaWxlID0gcmVxdWlyZSgnLi9NZWRpYUZpbGUnKTtcclxudmFyIFZpZGVvQ2xpY2tzID0gcmVxdWlyZSgnLi9WaWRlb0NsaWNrcycpO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxudmFyIHBhcnNlcnMgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcclxuXHJcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcclxuXHJcblxyXG5mdW5jdGlvbiBMaW5lYXIobGluZWFySlRyZWUpIHtcclxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTGluZWFyKSkge1xyXG4gICAgcmV0dXJuIG5ldyBMaW5lYXIobGluZWFySlRyZWUpO1xyXG4gIH1cclxuXHJcbiAgLy9SZXF1aXJlZCBFbGVtZW50c1xyXG4gIHRoaXMuZHVyYXRpb24gPSBwYXJzZXJzLmR1cmF0aW9uKHhtbC5rZXlWYWx1ZShsaW5lYXJKVHJlZS5kdXJhdGlvbikpO1xyXG4gIHRoaXMubWVkaWFGaWxlcyA9IHBhcnNlTWVkaWFGaWxlcyhsaW5lYXJKVHJlZS5tZWRpYUZpbGVzICYmIGxpbmVhckpUcmVlLm1lZGlhRmlsZXMubWVkaWFGaWxlKTtcclxuXHJcbiAgLy9PcHRpb25hbCBmaWVsZHNcclxuICB0aGlzLnRyYWNraW5nRXZlbnRzID0gcGFyc2VUcmFja2luZ0V2ZW50cyhsaW5lYXJKVHJlZS50cmFja2luZ0V2ZW50cyAmJiBsaW5lYXJKVHJlZS50cmFja2luZ0V2ZW50cy50cmFja2luZywgdGhpcy5kdXJhdGlvbik7XHJcbiAgdGhpcy5za2lwb2Zmc2V0ID0gcGFyc2Vycy5vZmZzZXQoeG1sLmF0dHIobGluZWFySlRyZWUsICdza2lwb2Zmc2V0JyksIHRoaXMuZHVyYXRpb24pO1xyXG5cclxuICBpZiAobGluZWFySlRyZWUudmlkZW9DbGlja3MpIHtcclxuICAgIHRoaXMudmlkZW9DbGlja3MgPSBuZXcgVmlkZW9DbGlja3MobGluZWFySlRyZWUudmlkZW9DbGlja3MpO1xyXG4gIH1cclxuXHJcbiAgaWYobGluZWFySlRyZWUuYWRQYXJhbWV0ZXJzKSB7XHJcbiAgICB0aGlzLmFkUGFyYW1ldGVycyA9IHhtbC5rZXlWYWx1ZShsaW5lYXJKVHJlZS5hZFBhcmFtZXRlcnMpO1xyXG5cclxuICAgIGlmKHhtbC5hdHRyKGxpbmVhckpUcmVlLmFkUGFyYW1ldGVycywgJ3htbEVuY29kZWQnKSkge1xyXG4gICAgICB0aGlzLmFkUGFyYW1ldGVycyA9IHhtbC5kZWNvZGUodGhpcy5hZFBhcmFtZXRlcnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIHBhcnNlVHJhY2tpbmdFdmVudHModHJhY2tpbmdFdmVudHMsIGR1cmF0aW9uKSB7XHJcbiAgICB2YXIgdHJhY2tpbmdzID0gW107XHJcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh0cmFja2luZ0V2ZW50cykpIHtcclxuICAgICAgdHJhY2tpbmdFdmVudHMgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0V2ZW50cykgPyB0cmFja2luZ0V2ZW50cyA6IFt0cmFja2luZ0V2ZW50c107XHJcbiAgICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNraW5nRGF0YSkge1xyXG4gICAgICAgIHRyYWNraW5ncy5wdXNoKG5ldyBUcmFja2luZ0V2ZW50KHRyYWNraW5nRGF0YSwgZHVyYXRpb24pKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJhY2tpbmdzO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGFyc2VNZWRpYUZpbGVzKG1lZGlhRmlsZXNKeG9uVHJlZSkge1xyXG4gICAgdmFyIG1lZGlhRmlsZXMgPSBbXTtcclxuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKG1lZGlhRmlsZXNKeG9uVHJlZSkpIHtcclxuICAgICAgbWVkaWFGaWxlc0p4b25UcmVlID0gdXRpbGl0aWVzLmlzQXJyYXkobWVkaWFGaWxlc0p4b25UcmVlKSA/IG1lZGlhRmlsZXNKeG9uVHJlZSA6IFttZWRpYUZpbGVzSnhvblRyZWVdO1xyXG5cclxuICAgICAgbWVkaWFGaWxlc0p4b25UcmVlLmZvckVhY2goZnVuY3Rpb24gKG1mRGF0YSkge1xyXG4gICAgICAgIGlmIChtZkRhdGFbJ0B0eXBlJ10gPT09ICdhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCcpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVkaWFGaWxlcy5wdXNoKG5ldyBNZWRpYUZpbGUobWZEYXRhKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1lZGlhRmlsZXM7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogTXVzdCByZXR1cm4gdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlIE1lZGlhRmlsZXMnIHR5cGUgaXMgc3VwcG9ydGVkXHJcbiAqL1xyXG5MaW5lYXIucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciBpLCBsZW47XHJcbiAgZm9yKGk9MCwgbGVuPXRoaXMubWVkaWFGaWxlcy5sZW5ndGg7IGk8bGVuOyBpKz0xKSB7XHJcbiAgICBpZih0aGlzLm1lZGlhRmlsZXNbaV0uaXNTdXBwb3J0ZWQoKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTGluZWFyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XHJcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcclxuXHJcbnZhciBhdHRyaWJ1dGVzTGlzdCA9IFtcclxuICAvL1JlcXVpcmVkIGF0dHJpYnV0ZXNcclxuICAnZGVsaXZlcnknLFxyXG4gICd0eXBlJyxcclxuICAnd2lkdGgnLFxyXG4gICdoZWlnaHQnLFxyXG4gIC8vT3B0aW9uYWwgYXR0cmlidXRlc1xyXG4gICdjb2RlYycsXHJcbiAgJ2lkJyxcclxuICAnYml0cmF0ZScsXHJcbiAgJ21pbkJpdHJhdGUnLFxyXG4gICdtYXhCaXRyYXRlJyxcclxuICAnc2NhbGFibGUnLFxyXG4gICdtYWludGFpbkFzcGVjdFJhdGlvJyxcclxuICAnYXBpRnJhbWV3b3JrJ1xyXG5dO1xyXG5cclxuZnVuY3Rpb24gTWVkaWFGaWxlKG1lZGlhRmlsZUpUcmVlKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1lZGlhRmlsZSkpIHtcclxuICAgIHJldHVybiBuZXcgTWVkaWFGaWxlKG1lZGlhRmlsZUpUcmVlKTtcclxuICB9XHJcblxyXG4gIC8vUmVxdWlyZWQgYXR0cmlidXRlc1xyXG4gIHRoaXMuc3JjID0geG1sLmtleVZhbHVlKG1lZGlhRmlsZUpUcmVlKTtcclxuXHJcbiAgZm9yKHZhciB4PTA7IHg8YXR0cmlidXRlc0xpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgIHZhciBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzTGlzdFt4XTtcclxuICAgIHRoaXNbYXR0cmlidXRlXSA9IG1lZGlhRmlsZUpUcmVlLmF0dHIoYXR0cmlidXRlKTtcclxuICB9XHJcbn1cclxuXHJcbk1lZGlhRmlsZS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpe1xyXG4gIGlmKHZhc3RVdGlsLmlzVlBBSUQodGhpcykpIHtcclxuICAgIHJldHVybiAhIXZhc3RVdGlsLmZpbmRTdXBwb3J0ZWRWUEFJRFRlY2godGhpcy50eXBlKTtcclxuICB9XHJcblxyXG4gIGlmICh0aGlzLnR5cGUgPT09ICd2aWRlby94LWZsdicpIHtcclxuICAgIHJldHVybiB2YXN0VXRpbC5pc0ZsYXNoU3VwcG9ydGVkKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWVkaWFGaWxlO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgcGFyc2VycyA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xyXG5cclxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xyXG5cclxuZnVuY3Rpb24gVHJhY2tpbmdFdmVudCh0cmFja2luZ0pUcmVlLCBkdXJhdGlvbikge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUcmFja2luZ0V2ZW50KSkge1xyXG4gICAgcmV0dXJuIG5ldyBUcmFja2luZ0V2ZW50KHRyYWNraW5nSlRyZWUsIGR1cmF0aW9uKTtcclxuICB9XHJcblxyXG4gIHRoaXMubmFtZSA9IHRyYWNraW5nSlRyZWUuYXR0cignZXZlbnQnKTtcclxuICB0aGlzLnVyaSA9IHhtbC5rZXlWYWx1ZSh0cmFja2luZ0pUcmVlKTtcclxuXHJcbiAgaWYoJ3Byb2dyZXNzJyA9PT0gdGhpcy5uYW1lKSB7XHJcbiAgICB0aGlzLm9mZnNldCA9IHBhcnNlcnMub2Zmc2V0KHRyYWNraW5nSlRyZWUuYXR0cignb2Zmc2V0JyksIGR1cmF0aW9uKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVHJhY2tpbmdFdmVudDsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgQWQgPSByZXF1aXJlKCcuL0FkJyk7XHJcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuL1ZBU1RFcnJvcicpO1xyXG52YXIgVkFTVFJlc3BvbnNlID0gcmVxdWlyZSgnLi9WQVNUUmVzcG9uc2UnKTtcclxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xyXG5cclxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXN5bmMnKTtcclxudmFyIGh0dHAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9odHRwJykuaHR0cDtcclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xyXG5cclxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XHJcblxyXG5mdW5jdGlvbiBWQVNUQ2xpZW50KG9wdGlvbnMpIHtcclxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVkFTVENsaWVudCkpIHtcclxuICAgIHJldHVybiBuZXcgVkFTVENsaWVudChvcHRpb25zKTtcclxuICB9XHJcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgV1JBUFBFUl9MSU1JVDogNVxyXG4gIH07XHJcblxyXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gIHRoaXMuc2V0dGluZ3MgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBvcHRpb25zLCBkZWZhdWx0T3B0aW9ucyk7XHJcbiAgdGhpcy5lcnJvclVSTE1hY3JvcyA9IFtdO1xyXG59XHJcblxyXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5nZXRWQVNUUmVzcG9uc2UgPSBmdW5jdGlvbiBnZXRWQVNUUmVzcG9uc2UoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XHJcbiAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICB2YXIgZXJyb3IgPSBzYW5pdHlDaGVjayhhZFRhZ1VybCwgY2FsbGJhY2spO1xyXG4gIGlmIChlcnJvcikge1xyXG4gICAgaWYgKHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xyXG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG5cclxuICBhc3luYy53YXRlcmZhbGwoW1xyXG4gICAgICB0aGlzLl9nZXRWQVNUQWQuYmluZCh0aGlzLCBhZFRhZ1VybCksXHJcbiAgICAgIGJ1aWxkVkFTVFJlc3BvbnNlXHJcbiAgICBdLFxyXG4gICAgY2FsbGJhY2spO1xyXG5cclxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gYnVpbGRWQVNUUmVzcG9uc2UoYWRzQ2hhaW4sIGNiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YXIgcmVzcG9uc2UgPSB0aGF0Ll9idWlsZFZBU1RSZXNwb25zZShhZHNDaGFpbik7XHJcbiAgICAgIGNiKG51bGwsIHJlc3BvbnNlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY2IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhhZFRhZ1VybCwgY2IpIHtcclxuICAgIGlmICghYWRUYWdVcmwpIHtcclxuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVFJlc3BvbnNlLCBtaXNzaW5nIGFkIHRhZyBVUkwnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNiKSkge1xyXG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUUmVzcG9uc2UsIG1pc3NpbmcgY2FsbGJhY2sgZnVuY3Rpb24nKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fZ2V0VkFTVEFkID0gZnVuY3Rpb24gKGFkVGFnVXJsLCBjYWxsYmFjaykge1xyXG4gIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgZ2V0QWRXYXRlcmZhbGwoYWRUYWdVcmwsIGZ1bmN0aW9uIChlcnJvciwgdmFzdFRyZWUpIHtcclxuICAgIHZhciB3YXRlcmZhbGxBZHMgPSB2YXN0VHJlZSAmJiB1dGlsaXRpZXMuaXNBcnJheSh2YXN0VHJlZS5hZHMpID8gdmFzdFRyZWUuYWRzIDogbnVsbDtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aGF0Ll90cmFja0Vycm9yKGVycm9yLCB3YXRlcmZhbGxBZHMpO1xyXG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IsIHdhdGVyZmFsbEFkcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWQod2F0ZXJmYWxsQWRzLnNoaWZ0KCksIFtdLCB3YXRlcmZhbGxIYW5kbGVyKTtcclxuXHJcbiAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgICBmdW5jdGlvbiB3YXRlcmZhbGxIYW5kbGVyKGVycm9yLCBhZENoYWluKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHRoYXQuX3RyYWNrRXJyb3IoZXJyb3IsIGFkQ2hhaW4pO1xyXG4gICAgICAgIGlmICh3YXRlcmZhbGxBZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZ2V0QWQod2F0ZXJmYWxsQWRzLnNoaWZ0KCksW10sIHdhdGVyZmFsbEhhbmRsZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjYWxsYmFjayhlcnJvciwgYWRDaGFpbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGFkQ2hhaW4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBnZXRBZFdhdGVyZmFsbChhZFRhZ1VybCwgY2FsbGJhY2spIHtcclxuICAgIHZhciByZXF1ZXN0VmFzdFhNTCA9IHRoYXQuX3JlcXVlc3RWQVNUWG1sLmJpbmQodGhhdCwgYWRUYWdVcmwpO1xyXG4gICAgYXN5bmMud2F0ZXJmYWxsKFtcclxuICAgICAgcmVxdWVzdFZhc3RYTUwsXHJcbiAgICAgIGJ1aWxkVmFzdFdhdGVyZmFsbFxyXG4gICAgXSwgY2FsbGJhY2spO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYnVpbGRWYXN0V2F0ZXJmYWxsKHhtbFN0ciwgY2FsbGJhY2spIHtcclxuICAgIHZhciB2YXN0VHJlZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhc3RUcmVlID0geG1sLnRvSlhPTlRyZWUoeG1sU3RyKTtcclxuICAgICAgbG9nZ2VyLmRlYnVnIChcImJ1aWx0IEpYT05UcmVlIGZyb20gVkFTVCByZXNwb25zZTpcIiwgdmFzdFRyZWUpO1xyXG5cclxuICAgICAgaWYodXRpbGl0aWVzLmlzQXJyYXkodmFzdFRyZWUuYWQpKSB7XHJcbiAgICAgICAgdmFzdFRyZWUuYWRzID0gdmFzdFRyZWUuYWQ7XHJcbiAgICAgIH0gZWxzZSBpZih2YXN0VHJlZS5hZCl7XHJcbiAgICAgICAgdmFzdFRyZWUuYWRzID0gW3Zhc3RUcmVlLmFkXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXN0VHJlZS5hZHMgPSBbXTtcclxuICAgICAgfVxyXG4gICAgICBjYWxsYmFjayh2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSwgdmFzdFRyZWUpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLmJ1aWxkVmFzdFdhdGVyZmFsbCwgZXJyb3IgcGFyc2luZyB4bWxcIiwgMTAwKSwgbnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSB7XHJcbiAgICB2YXIgdmFzdFZlcnNpb24gPSB4bWwuYXR0cih2YXN0VHJlZSwgJ3ZlcnNpb24nKTtcclxuXHJcbiAgICBpZiAoIXZhc3RUcmVlLmFkKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKCdvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC52YWxpZGF0ZVZBU1RUcmVlLCBubyBBZCBpbiBWQVNUIHRyZWUnLCAzMDMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YXN0VmVyc2lvbiAmJiAodmFzdFZlcnNpb24gIT0gMyAmJiB2YXN0VmVyc2lvbiAhPSAyKSkge1xyXG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUQWQudmFsaWRhdGVWQVNUVHJlZSwgbm90IHN1cHBvcnRlZCBWQVNUIHZlcnNpb24gXCInICsgdmFzdFZlcnNpb24gKyAnXCInLCAxMDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0QWQoYWRUYWdVcmwsIGFkQ2hhaW4sIGNhbGxiYWNrKSB7XHJcbiAgICBpZiAoYWRDaGFpbi5sZW5ndGggPj0gdGhhdC5XUkFQUEVSX0xJTUlUKSB7XHJcbiAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5nZXRWQVNUQWQuZ2V0QWQsIHBsYXllcnMgd3JhcHBlciBsaW1pdCByZWFjaGVkICh0aGUgbGltaXQgaXMgXCIgKyB0aGF0LldSQVBQRVJfTElNSVQgKyBcIilcIiwgMzAyKSwgYWRDaGFpbik7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMud2F0ZXJmYWxsKFtcclxuICAgICAgZnVuY3Rpb24gKG5leHQpIHtcclxuICAgICAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGFkVGFnVXJsKSkge1xyXG4gICAgICAgICAgcmVxdWVzdFZBU1RBZChhZFRhZ1VybCwgbmV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5leHQobnVsbCwgYWRUYWdVcmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYnVpbGRBZFxyXG4gICAgXSwgZnVuY3Rpb24gKGVycm9yLCBhZCkge1xyXG4gICAgICBpZiAoYWQpIHtcclxuICAgICAgICBhZENoYWluLnB1c2goYWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IsIGFkQ2hhaW4pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoYWQud3JhcHBlcikge1xyXG4gICAgICAgIHJldHVybiBnZXRBZChhZC53cmFwcGVyLlZBU1RBZFRhZ1VSSSwgYWRDaGFpbiwgY2FsbGJhY2spO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgYWRDaGFpbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGJ1aWxkQWQoYWRKeG9uVHJlZSwgY2FsbGJhY2spIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBhZCA9IG5ldyBBZChhZEp4b25UcmVlKTtcclxuICAgICAgY2FsbGJhY2sodmFsaWRhdGVBZChhZCksIGFkKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUQWQuYnVpbGRBZCwgZXJyb3IgcGFyc2luZyB4bWwnLCAxMDApLCBudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlQWQoYWQpIHtcclxuICAgIHZhciB3cmFwcGVyID0gYWQud3JhcHBlcjtcclxuICAgIHZhciBpbkxpbmUgPSBhZC5pbkxpbmU7XHJcbiAgICB2YXIgZXJyTXNnUHJlZml4ID0gJ29uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLnZhbGlkYXRlQWQsICc7XHJcblxyXG4gICAgaWYgKGluTGluZSAmJiB3cmFwcGVyKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArXCJJbkxpbmUgYW5kIFdyYXBwZXIgYm90aCBmb3VuZCBvbiB0aGUgc2FtZSBBZFwiLCAxMDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaW5MaW5lICYmICF3cmFwcGVyKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArIFwibm9yIHdyYXBwZXIgbm9yIGlubGluZSBlbGVtZW50cyBmb3VuZCBvbiB0aGUgQWRcIiwgMTAxKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW5MaW5lICYmICFpbkxpbmUuaXNTdXBwb3J0ZWQoKSkge1xyXG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcihlcnJNc2dQcmVmaXggKyBcImNvdWxkIG5vdCBmaW5kIE1lZGlhRmlsZSB0aGF0IGlzIHN1cHBvcnRlZCBieSB0aGlzIHZpZGVvIHBsYXllclwiLCA0MDMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3cmFwcGVyICYmICF3cmFwcGVyLlZBU1RBZFRhZ1VSSSkge1xyXG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcihlcnJNc2dQcmVmaXggKyBcIm1pc3NpbmcgJ1ZBU1RBZFRhZ1VSSScgaW4gd3JhcHBlclwiLCAxMDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVxdWVzdFZBU1RBZChhZFRhZ1VybCwgY2FsbGJhY2spIHtcclxuICAgIHRoYXQuX3JlcXVlc3RWQVNUWG1sKGFkVGFnVXJsLCBmdW5jdGlvbiAoZXJyb3IsIHhtbFN0cikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIHZhc3RUcmVlID0geG1sLnRvSlhPTlRyZWUoeG1sU3RyKTtcclxuICAgICAgICBjYWxsYmFjayh2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSwgdmFzdFRyZWUuYWQpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLnJlcXVlc3RWQVNUQWQsIGVycm9yIHBhcnNpbmcgeG1sXCIsIDEwMCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fcmVxdWVzdFZBU1RYbWwgPSBmdW5jdGlvbiByZXF1ZXN0VkFTVFhtbChhZFRhZ1VybCwgY2FsbGJhY2spIHtcclxuICB0cnkge1xyXG4gICAgaWYgKHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVGFnVXJsKSkge1xyXG4gICAgICBhZFRhZ1VybChyZXF1ZXN0SGFuZGxlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2dnZXIuaW5mbyAoXCJyZXF1ZXN0aW5nIGFkVGFnVXJsOiBcIiArIGFkVGFnVXJsKTtcclxuICAgICAgaHR0cC5nZXQoYWRUYWdVcmwsIHJlcXVlc3RIYW5kbGVyLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNhbGxiYWNrKGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIHJlcXVlc3RIYW5kbGVyKGVycm9yLCByZXNwb25zZSwgc3RhdHVzKSB7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdmFyIGVyck1zZyA9IHV0aWxpdGllcy5pc0RlZmluZWQoc3RhdHVzKSA/XHJcbiAgICAgIFwib24gVkFTVENsaWVudC5yZXF1ZXN0VmFzdFhNTCwgSFRUUCByZXF1ZXN0IGVycm9yIHdpdGggc3RhdHVzICdcIiArIHN0YXR1cyArIFwiJ1wiIDpcclxuICAgICAgICBcIm9uIFZBU1RDbGllbnQucmVxdWVzdFZhc3RYTUwsIEVycm9yIGdldHRpbmcgdGhlIHRoZSBWQVNUIFhNTCB3aXRoIGhlIHBhc3NlZCBhZFRhZ1hNTCBmblwiO1xyXG4gICAgICByZXR1cm4gY2FsbGJhY2sobmV3IFZBU1RFcnJvcihlcnJNc2csIDMwMSksIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlKTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fYnVpbGRWQVNUUmVzcG9uc2UgPSBmdW5jdGlvbiBidWlsZFZBU1RSZXNwb25zZShhZHNDaGFpbikge1xyXG4gIHZhciByZXNwb25zZSA9IG5ldyBWQVNUUmVzcG9uc2UoKTtcclxuICBhZGRBZHNUb1Jlc3BvbnNlKHJlc3BvbnNlLCBhZHNDaGFpbik7XHJcbiAgdmFsaWRhdGVSZXNwb25zZShyZXNwb25zZSk7XHJcblxyXG4gIHJldHVybiByZXNwb25zZTtcclxuXHJcbiAgLy8qKiogTG9jYWwgZnVuY3Rpb24gKioqKlxyXG4gIGZ1bmN0aW9uIGFkZEFkc1RvUmVzcG9uc2UocmVzcG9uc2UsIGFkcykge1xyXG4gICAgYWRzLmZvckVhY2goZnVuY3Rpb24gKGFkKSB7XHJcbiAgICAgIHJlc3BvbnNlLmFkZEFkKGFkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVSZXNwb25zZShyZXNwb25zZSkge1xyXG4gICAgdmFyIHByb2dyZXNzRXZlbnRzID0gcmVzcG9uc2UudHJhY2tpbmdFdmVudHMucHJvZ3Jlc3M7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5oYXNMaW5lYXIoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5fYnVpbGRWQVNUUmVzcG9uc2UsIFJlY2VpdmVkIGFuIEFkIHR5cGUgdGhhdCBpcyBub3Qgc3VwcG9ydGVkXCIsIDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLmR1cmF0aW9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuX2J1aWxkVkFTVFJlc3BvbnNlLCBNaXNzaW5nIGR1cmF0aW9uIGZpZWxkIGluIFZBU1QgcmVzcG9uc2VcIiwgMTAxKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJvZ3Jlc3NFdmVudHMpIHtcclxuICAgICAgcHJvZ3Jlc3NFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAocHJvZ3Jlc3NFdmVudCkge1xyXG4gICAgICAgIGlmICghdXRpbGl0aWVzLmlzTnVtYmVyKHByb2dyZXNzRXZlbnQub2Zmc2V0KSkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuX2J1aWxkVkFTVFJlc3BvbnNlLCBtaXNzaW5nIG9yIHdyb25nIG9mZnNldCBhdHRyaWJ1dGUgb24gcHJvZ3Jlc3MgdHJhY2tpbmcgZXZlbnRcIiwgMTAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcblZBU1RDbGllbnQucHJvdG90eXBlLl90cmFja0Vycm9yID0gZnVuY3Rpb24gKGVycm9yLCBhZENoYWluKSB7XHJcbiAgaWYgKCF1dGlsaXRpZXMuaXNBcnJheShhZENoYWluKSB8fCBhZENoYWluLmxlbmd0aCA9PT0gMCkgeyAvL1RoZXJlIGlzIG5vdGhpbmcgdG8gdHJhY2tcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHZhciBlcnJvclVSTE1hY3JvcyA9IFtdO1xyXG4gIGFkQ2hhaW4uZm9yRWFjaChhZGRFcnJvclVybE1hY3Jvcyk7XHJcbiAgdmFzdFV0aWwudHJhY2soZXJyb3JVUkxNYWNyb3MsIHtFUlJPUkNPREU6IGVycm9yLmNvZGUgfHwgOTAwfSk7ICAvLzkwMCA8PT0gVW5kZWZpbmVkIGVycm9yXHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICAqKiovXHJcbiAgZnVuY3Rpb24gYWRkRXJyb3JVcmxNYWNyb3MoYWQpIHtcclxuICAgIGlmIChhZC53cmFwcGVyICYmIGFkLndyYXBwZXIuZXJyb3IpIHtcclxuICAgICAgZXJyb3JVUkxNYWNyb3MucHVzaChhZC53cmFwcGVyLmVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWQuaW5MaW5lICYmIGFkLmluTGluZS5lcnJvcikge1xyXG4gICAgICBlcnJvclVSTE1hY3Jvcy5wdXNoKGFkLmluTGluZS5lcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBWQVNUQ2xpZW50O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBWQVNURXJyb3IobWVzc2FnZSwgY29kZSkge1xyXG4gIHRoaXMubWVzc2FnZSA9ICdWQVNUIEVycm9yOiAnICsgKG1lc3NhZ2UgfHwgJycpO1xyXG4gIGlmIChjb2RlKSB7XHJcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gIH1cclxufVxyXG5cclxuVkFTVEVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xyXG5WQVNURXJyb3IucHJvdG90eXBlLm5hbWUgPSBcIlZBU1QgRXJyb3JcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVkFTVEVycm9yOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiBJbm5lciBoZWxwZXIgY2xhc3MgdGhhdCBkZWFscyB3aXRoIHRoZSBsb2dpYyBvZiB0aGUgaW5kaXZpZHVhbCBzdGVwcyBuZWVkZWQgdG8gc2V0dXAgYW4gYWQgaW4gdGhlIHBsYXllci5cclxuICpcclxuICogQHBhcmFtIHBsYXllciB7b2JqZWN0fSBpbnN0YW5jZSBvZiB0aGUgcGxheWVyIHRoYXQgd2lsbCBwbGF5IHRoZSBhZC4gSXQgYXNzdW1lcyB0aGF0IHRoZSB2aWRlb2pzLWNvbnRyaWItYWRzIHBsdWdpblxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIGhhcyBiZWVuIGluaXRpYWxpemVkIHdoZW4geW91IHVzZSBpdHMgdXRpbGl0eSBmdW5jdGlvbnMuXHJcbiAqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuXHJcbnZhciBWQVNUUmVzcG9uc2UgPSByZXF1aXJlKCcuL1ZBU1RSZXNwb25zZScpO1xyXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi9WQVNURXJyb3InKTtcclxudmFyIFZBU1RUcmFja2VyID0gcmVxdWlyZSgnLi9WQVNUVHJhY2tlcicpO1xyXG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XHJcblxyXG52YXIgYXN5bmMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9hc3luYycpO1xyXG52YXIgZG9tID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZG9tJyk7XHJcbnZhciBwbGF5ZXJVdGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3BsYXllclV0aWxzJyk7XHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcblxyXG52YXIgbG9nZ2VyID0gcmVxdWlyZSAoJy4uLy4uL3V0aWxzL2NvbnNvbGVMb2dnZXInKTtcclxuXHJcbmZ1bmN0aW9uIFZBU1RJbnRlZ3JhdG9yKHBsYXllcikge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWQVNUSW50ZWdyYXRvcikpIHtcclxuICAgIHJldHVybiBuZXcgVkFTVEludGVncmF0b3IocGxheWVyKTtcclxuICB9XHJcblxyXG4gIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG59XHJcblxyXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUucGxheUFkID0gZnVuY3Rpb24gcGxheUFkKHZhc3RSZXNwb25zZSwgY2FsbGJhY2spIHtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCB1dGlsaXRpZXMubm9vcDtcclxuXHJcbiAgaWYgKCEodmFzdFJlc3BvbnNlIGluc3RhbmNlb2YgVkFTVFJlc3BvbnNlKSkge1xyXG4gICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoJ09uIFZBU1RJbnRlZ3JhdG9yLCBtaXNzaW5nIHJlcXVpcmVkIFZBU1RSZXNwb25zZScpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jLndhdGVyZmFsbChbXHJcbiAgICBmdW5jdGlvbiAobmV4dCkge1xyXG4gICAgICBuZXh0KG51bGwsIHZhc3RSZXNwb25zZSk7XHJcbiAgICB9LFxyXG4gICAgdGhpcy5fc2VsZWN0QWRTb3VyY2UuYmluZCh0aGlzKSxcclxuICAgIHRoaXMuX2NyZWF0ZVZBU1RUcmFja2VyLmJpbmQodGhpcyksXHJcbiAgICB0aGlzLl9hZGRDbGlja1Rocm91Z2guYmluZCh0aGlzKSxcclxuICAgIHRoaXMuX2FkZFNraXBCdXR0b24uYmluZCh0aGlzKSxcclxuICAgIHRoaXMuX3NldHVwRXZlbnRzLmJpbmQodGhpcyksXHJcbiAgICB0aGlzLl9wbGF5U2VsZWN0ZWRBZC5iaW5kKHRoaXMpXHJcbiAgXSwgZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSkge1xyXG4gICAgaWYgKGVycm9yICYmIHJlc3BvbnNlKSB7XHJcbiAgICAgIHRoYXQuX3RyYWNrRXJyb3IoZXJyb3IsIHJlc3BvbnNlKTtcclxuICAgIH1cclxuICAgIGNhbGxiYWNrKGVycm9yLCByZXNwb25zZSk7XHJcbiAgfSk7XHJcblxyXG4gIHRoaXMuX2FkVW5pdCA9IHtcclxuICAgIF9zcmM6IG51bGwsXHJcbiAgICB0eXBlOiAnVkFTVCcsXHJcbiAgICBwYXVzZUFkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoYXQucGxheWVyLnBhdXNlKHRydWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZXN1bWVBZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGF0LnBsYXllci5wbGF5KHRydWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBpc1BhdXNlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gdGhhdC5wbGF5ZXIucGF1c2VkKHRydWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRTcmM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3NyYztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gdGhpcy5fYWRVbml0O1xyXG59O1xyXG5cclxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9zZWxlY3RBZFNvdXJjZSA9IGZ1bmN0aW9uIHNlbGVjdEFkU291cmNlKHJlc3BvbnNlLCBjYWxsYmFjaykge1xyXG4gIHZhciBzb3VyY2U7XHJcblxyXG4gIHZhciBwbGF5ZXJXaWR0aCA9IGRvbS5nZXREaW1lbnNpb24odGhpcy5wbGF5ZXIuZWwoKSkud2lkdGg7XHJcbiAgcmVzcG9uc2UubWVkaWFGaWxlcy5zb3J0KGZ1bmN0aW9uIGNvbXBhcmVUbyhhLCBiKSB7XHJcbiAgICB2YXIgZGVsdGFBID0gTWF0aC5hYnMocGxheWVyV2lkdGggLSBhLndpZHRoKTtcclxuICAgIHZhciBkZWx0YUIgPSBNYXRoLmFicyhwbGF5ZXJXaWR0aCAtIGIud2lkdGgpO1xyXG4gICAgcmV0dXJuIGRlbHRhQSAtIGRlbHRhQjtcclxuICB9KTtcclxuXHJcbiAgc291cmNlID0gdGhpcy5wbGF5ZXIuc2VsZWN0U291cmNlKHJlc3BvbnNlLm1lZGlhRmlsZXMpLnNvdXJjZTtcclxuXHJcbiAgaWYgKHNvdXJjZSkge1xyXG4gICAgbG9nZ2VyLmluZm8gKFwic2VsZWN0ZWQgc291cmNlOiBcIiwgc291cmNlKTtcclxuICAgIGlmICh0aGlzLl9hZFVuaXQpIHtcclxuICAgICAgdGhpcy5fYWRVbml0Ll9zcmMgPSBzb3VyY2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgc291cmNlLCByZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICAvLyBjb2RlIDQwMyA8PT0gQ291bGRuJ3QgZmluZCBNZWRpYUZpbGUgdGhhdCBpcyBzdXBwb3J0ZWQgYnkgdGhpcyB2aWRlbyBwbGF5ZXJcclxuICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwiQ291bGQgbm90IGZpbmQgQWQgbWVkaWFmaWxlIHN1cHBvcnRlZCBieSB0aGlzIHBsYXllclwiLCA0MDMpLCByZXNwb25zZSk7XHJcbn07XHJcblxyXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX2NyZWF0ZVZBU1RUcmFja2VyID0gZnVuY3Rpb24gY3JlYXRlVkFTVFRyYWNrZXIoYWRNZWRpYUZpbGUsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xyXG4gIHRyeSB7XHJcbiAgICBjYWxsYmFjayhudWxsLCBhZE1lZGlhRmlsZSwgbmV3IFZBU1RUcmFja2VyKGFkTWVkaWFGaWxlLnNyYywgcmVzcG9uc2UpLCByZXNwb25zZSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY2FsbGJhY2soZSwgcmVzcG9uc2UpO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fc2V0dXBFdmVudHMgPSBmdW5jdGlvbiBzZXR1cEV2ZW50cyhhZE1lZGlhRmlsZSwgdHJhY2tlciwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XHJcbiAgdmFyIHByZXZpb3VzbHlNdXRlZDtcclxuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcbiAgcGxheWVyLm9uKCdmdWxsc2NyZWVuY2hhbmdlJywgdHJhY2tGdWxsc2NyZWVuQ2hhbmdlKTtcclxuICBwbGF5ZXIub24oJ3Zhc3QuYWRTdGFydCcsIHRyYWNrSW1wcmVzc2lvbnMpO1xyXG4gIHBsYXllci5vbigncGF1c2UnLCB0cmFja1BhdXNlKTtcclxuICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0cmFja1Byb2dyZXNzKTtcclxuICBwbGF5ZXIub24oJ3ZvbHVtZWNoYW5nZScsIHRyYWNrVm9sdW1lQ2hhbmdlKTtcclxuXHJcbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCB1bmJpbmRFdmVudHMpO1xyXG4gIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnLCAndmFzdC5hZFNraXAnXSwgZnVuY3Rpb24oZXZ0KXtcclxuICAgIGlmKGV2dC50eXBlID09PSAndmFzdC5hZEVuZCcpe1xyXG4gICAgICB0cmFja2VyLnRyYWNrQ29tcGxldGUoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIGFkTWVkaWFGaWxlLCByZXNwb25zZSk7XHJcblxyXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiB1bmJpbmRFdmVudHMoKSB7XHJcbiAgICBwbGF5ZXIub2ZmKCdmdWxsc2NyZWVuY2hhbmdlJywgdHJhY2tGdWxsc2NyZWVuQ2hhbmdlKTtcclxuICAgIHBsYXllci5vZmYoJ3Zhc3QuYWRTdGFydCcsIHRyYWNrSW1wcmVzc2lvbnMpO1xyXG4gICAgcGxheWVyLm9mZigncGF1c2UnLCB0cmFja1BhdXNlKTtcclxuICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB0cmFja1Byb2dyZXNzKTtcclxuICAgIHBsYXllci5vZmYoJ3ZvbHVtZWNoYW5nZScsIHRyYWNrVm9sdW1lQ2hhbmdlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRyYWNrRnVsbHNjcmVlbkNoYW5nZSgpIHtcclxuICAgIGlmIChwbGF5ZXIuaXNGdWxsc2NyZWVuKCkpIHtcclxuICAgICAgdHJhY2tlci50cmFja0Z1bGxzY3JlZW4oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyYWNrZXIudHJhY2tFeGl0RnVsbHNjcmVlbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdHJhY2tQYXVzZSgpIHtcclxuICAgIC8vTk9URTogd2hlbmV2ZXIgYSB2aWRlbyBlbmRzIHRoZSB2aWRlbyBFbGVtZW50IHRyaWdnZXJzIGEgJ3BhdXNlJyBldmVudCBiZWZvcmUgdGhlICdlbmRlZCcgZXZlbnQuXHJcbiAgICAvLyAgICAgIFdlIHNob3VsZCBub3QgdHJhY2sgdGhpcyBwYXVzZSBldmVudCBiZWNhdXNlIGl0IG1ha2VzIHRoZSBWQVNUIHRyYWNraW5nIGNvbmZ1c2luZyBhZ2FpbiB3ZSB1c2UgYVxyXG4gICAgLy8gICAgICBUaHJlc2hvbGQgb2YgMiBzZWNvbmRzIHRvIHByZXZlbnQgZmFsc2UgcG9zaXRpdmVzIG9uIElPUy5cclxuICAgIGlmIChNYXRoLmFicyhwbGF5ZXIuZHVyYXRpb24oKSAtIHBsYXllci5jdXJyZW50VGltZSgpKSA8IDIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYWNrZXIudHJhY2tQYXVzZSgpO1xyXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsncGxheScsICd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgaWYoZXZ0LnR5cGUgPT09ICdwbGF5Jyl7XHJcbiAgICAgICAgdHJhY2tlci50cmFja1Jlc3VtZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRyYWNrUHJvZ3Jlc3MoKSB7XHJcbiAgICB2YXIgY3VycmVudFRpbWVJbk1zID0gcGxheWVyLmN1cnJlbnRUaW1lKCkgKiAxMDAwO1xyXG4gICAgdHJhY2tlci50cmFja1Byb2dyZXNzKGN1cnJlbnRUaW1lSW5Ncyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0cmFja0ltcHJlc3Npb25zKCkge1xyXG4gICAgdHJhY2tlci50cmFja0ltcHJlc3Npb25zKCk7XHJcbiAgICB0cmFja2VyLnRyYWNrQ3JlYXRpdmVWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0cmFja1ZvbHVtZUNoYW5nZSgpIHtcclxuICAgIHZhciBtdXRlZCA9IHBsYXllci5tdXRlZCgpO1xyXG4gICAgaWYgKG11dGVkKSB7XHJcbiAgICAgIHRyYWNrZXIudHJhY2tNdXRlKCk7XHJcbiAgICB9IGVsc2UgaWYgKHByZXZpb3VzbHlNdXRlZCkge1xyXG4gICAgICB0cmFja2VyLnRyYWNrVW5tdXRlKCk7XHJcbiAgICB9XHJcbiAgICBwcmV2aW91c2x5TXV0ZWQgPSBtdXRlZDtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX2FkZFNraXBCdXR0b24gPSBmdW5jdGlvbiBhZGRTa2lwQnV0dG9uKHNvdXJjZSwgdHJhY2tlciwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XHJcbiAgdmFyIHNraXBPZmZzZXRJblNlYztcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gIGlmICh1dGlsaXRpZXMuaXNOdW1iZXIocmVzcG9uc2Uuc2tpcG9mZnNldCkpIHtcclxuICAgIHNraXBPZmZzZXRJblNlYyA9IHJlc3BvbnNlLnNraXBvZmZzZXQgLyAxMDAwO1xyXG4gICAgYWRkU2tpcEJ1dHRvblRvUGxheWVyKHRoaXMucGxheWVyLCBza2lwT2Zmc2V0SW5TZWMpO1xyXG4gIH1cclxuICBjYWxsYmFjayhudWxsLCBzb3VyY2UsIHRyYWNrZXIsIHJlc3BvbnNlKTtcclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXHJcbiAgZnVuY3Rpb24gYWRkU2tpcEJ1dHRvblRvUGxheWVyKHBsYXllciwgc2tpcE9mZnNldCkge1xyXG4gICAgdmFyIHNraXBCdXR0b24gPSBjcmVhdGVTa2lwQnV0dG9uKHBsYXllcik7XHJcbiAgICB2YXIgdXBkYXRlU2tpcEJ1dHRvbiA9IHVwZGF0ZVNraXBCdXR0b25TdGF0ZS5iaW5kKHRoYXQsIHNraXBCdXR0b24sIHNraXBPZmZzZXQsIHBsYXllcik7XHJcblxyXG4gICAgcGxheWVyLmVsKCkuYXBwZW5kQ2hpbGQoc2tpcEJ1dHRvbik7XHJcbiAgICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB1cGRhdGVTa2lwQnV0dG9uKTtcclxuXHJcbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZVNraXBCdXR0b24pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVNraXBCdXR0b24oKSB7XHJcbiAgICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB1cGRhdGVTa2lwQnV0dG9uKTtcclxuICAgICAgZG9tLnJlbW92ZShza2lwQnV0dG9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVNraXBCdXR0b24ocGxheWVyKSB7XHJcbiAgICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sIFwidmFzdC1za2lwLWJ1dHRvblwiKTtcclxuXHJcbiAgICBza2lwQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAoZG9tLmhhc0NsYXNzKHNraXBCdXR0b24sICdlbmFibGVkJykpIHtcclxuICAgICAgICB0cmFja2VyLnRyYWNrU2tpcCgpO1xyXG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkU2tpcCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL1dlIHByZXZlbnQgZXZlbnQgcHJvcGFnYXRpb24gdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgY2xpY2tUaHJvdWdoIGFuZCBzbyBvblxyXG4gICAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBza2lwQnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlU2tpcEJ1dHRvblN0YXRlKHNraXBCdXR0b24sIHNraXBPZmZzZXQsIHBsYXllcikge1xyXG4gICAgdmFyIHRpbWVMZWZ0ID0gTWF0aC5jZWlsKHNraXBPZmZzZXQgLSBwbGF5ZXIuY3VycmVudFRpbWUoKSk7XHJcbiAgICBpZiAodGltZUxlZnQgPiAwKSB7XHJcbiAgICAgIHNraXBCdXR0b24uaW5uZXJIVE1MID0gXCJTa2lwIGluIFwiICsgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHModGltZUxlZnQsIDIpICsgXCIuLi5cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghZG9tLmhhc0NsYXNzKHNraXBCdXR0b24sICdlbmFibGVkJykpIHtcclxuICAgICAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKTtcclxuICAgICAgICBza2lwQnV0dG9uLmlubmVySFRNTCA9IFwiU2tpcCBhZFwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9hZGRDbGlja1Rocm91Z2ggPSBmdW5jdGlvbiBhZGRDbGlja1Rocm91Z2gobWVkaWFGaWxlLCB0cmFja2VyLCByZXNwb25zZSwgY2FsbGJhY2spIHtcclxuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcbiAgdmFyIGJsb2NrZXIgPSBjcmVhdGVDbGlja1Rocm91Z2hCbG9ja2VyKHBsYXllciwgdHJhY2tlciwgcmVzcG9uc2UpO1xyXG4gIHZhciB1cGRhdGVCbG9ja2VyID0gdXBkYXRlQmxvY2tlclVSTC5iaW5kKHRoaXMsIGJsb2NrZXIsIHJlc3BvbnNlLCBwbGF5ZXIpO1xyXG5cclxuICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoYmxvY2tlciwgcGxheWVyLmNvbnRyb2xCYXIuZWwoKSk7XHJcbiAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdXBkYXRlQmxvY2tlcik7XHJcbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVCbG9ja2VyKTtcclxuXHJcbiAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIG1lZGlhRmlsZSwgdHJhY2tlciwgcmVzcG9uc2UpO1xyXG5cclxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUNsaWNrVGhyb3VnaEJsb2NrZXIocGxheWVyLCB0cmFja2VyLCByZXNwb25zZSkge1xyXG4gICAgdmFyIGJsb2NrZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICB2YXIgY2xpY2tUaHJvdWdoTWFjcm8gPSByZXNwb25zZS5jbGlja1Rocm91Z2g7XHJcblxyXG4gICAgZG9tLmFkZENsYXNzKGJsb2NrZXIsICd2YXN0LWJsb2NrZXInKTtcclxuICAgIGJsb2NrZXIuaHJlZiA9IGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKGNsaWNrVGhyb3VnaE1hY3JvLCBwbGF5ZXIpO1xyXG5cclxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoY2xpY2tUaHJvdWdoTWFjcm8pKSB7XHJcbiAgICAgIGJsb2NrZXIudGFyZ2V0ID0gXCJfYmxhbmtcIjtcclxuICAgIH1cclxuXHJcbiAgICBibG9ja2VyLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAocGxheWVyLnBhdXNlZCgpKSB7XHJcbiAgICAgICAgcGxheWVyLnBsYXkoKTtcclxuXHJcbiAgICAgICAgLy9XZSBwcmV2ZW50IGV2ZW50IHByb3BhZ2F0aW9uIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggdGhlIHBsYXllcidzIG5vcm1hbCBwYXVzZSBtZWNoYW5pc21cclxuICAgICAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwbGF5ZXIucGF1c2UoKTtcclxuICAgICAgdHJhY2tlci50cmFja0NsaWNrKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBibG9ja2VyO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlQmxvY2tlclVSTChibG9ja2VyLCByZXNwb25zZSwgcGxheWVyKSB7XHJcbiAgICBibG9ja2VyLmhyZWYgPSBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChyZXNwb25zZS5jbGlja1Rocm91Z2gsIHBsYXllcik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChjbGlja1Rocm91Z2hNYWNybywgcGxheWVyKSB7XHJcbiAgICB2YXIgdmFyaWFibGVzID0ge1xyXG4gICAgICBBU1NFVFVSSTogbWVkaWFGaWxlLnNyYyxcclxuICAgICAgQ09OVEVOVFBMQVlIRUFEOiB2YXN0VXRpbC5mb3JtYXRQcm9ncmVzcyhwbGF5ZXIuY3VycmVudFRpbWUoKSAqIDEwMDApXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBjbGlja1Rocm91Z2hNYWNybyA/IHZhc3RVdGlsLnBhcnNlVVJMTWFjcm8oY2xpY2tUaHJvdWdoTWFjcm8sIHZhcmlhYmxlcykgOiAnIyc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVCbG9ja2VyKCkge1xyXG4gICAgcGxheWVyLm9mZigndGltZXVwZGF0ZScsIHVwZGF0ZUJsb2NrZXIpO1xyXG4gICAgZG9tLnJlbW92ZShibG9ja2VyKTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3BsYXlTZWxlY3RlZEFkID0gZnVuY3Rpb24gcGxheVNlbGVjdGVkQWQoc291cmNlLCByZXNwb25zZSwgY2FsbGJhY2spIHtcclxuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcblxyXG4gIHBsYXllci5wcmVsb2FkKFwiYXV0b1wiKTsgLy93aXRob3V0IHByZWxvYWQ9YXV0byB0aGUgZHVyYXRpb25jaGFuZ2UgZXZlbnQgaXMgbmV2ZXIgZmlyZWRcclxuICBwbGF5ZXIuc3JjKHNvdXJjZSk7XHJcblxyXG4gIGxvZ2dlci5kZWJ1ZyAoXCI8VkFTVEludGVncmF0b3IuX3BsYXlTZWxlY3RlZEFkPiB3YWl0aW5nIGZvciBkdXJhdGlvbmNoYW5nZSB0byBwbGF5IHRoZSBhZC4uLlwiKTtcclxuXHJcbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsnZHVyYXRpb25jaGFuZ2UnLCAnZXJyb3InLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgaWYgKGV2dC50eXBlID09PSAnZHVyYXRpb25jaGFuZ2UnKSB7XHJcbiAgICAgIGxvZ2dlci5kZWJ1ZyAoXCI8VkFTVEludGVncmF0b3IuX3BsYXlTZWxlY3RlZEFkPiBnb3QgZHVyYXRpb25jaGFuZ2U7IGNhbGxpbmcgcGxheUFkKClcIik7XHJcbiAgICAgIHBsYXlBZCgpO1xyXG4gICAgfSBlbHNlIGlmKGV2dC50eXBlID09PSAnZXJyb3InKSB7XHJcbiAgICAgIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUSW50ZWdyYXRvciwgUGxheWVyIGlzIHVuYWJsZSB0byBwbGF5IHRoZSBBZFwiLCA0MDApLCByZXNwb25zZSk7XHJcbiAgICB9XHJcbiAgICAvL05PVEU6IElmIHRoZSBhZHMgZ2V0IGNhbmNlbGVkIHdlIGRvIG5vdGhpbmcvXHJcbiAgfSk7XHJcblxyXG4gIC8qKioqIGxvY2FsIGZ1bmN0aW9ucyAqKioqKiovXHJcbiAgZnVuY3Rpb24gcGxheUFkKCkge1xyXG5cclxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBpZihldnQudHlwZSA9PT0gJ3Zhc3QuYWRzQ2FuY2VsJyl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsb2dnZXIuZGVidWcgKFwiPFZBU1RJbnRlZ3JhdG9yLl9wbGF5U2VsZWN0ZWRBZC9wbGF5QWQ+IGdvdCBwbGF5aW5nIGV2ZW50OyB0cmlnZ2VyaW5nIHZhc3QuYWRTdGFydC4uLlwiKTtcclxuXHJcbiAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkU3RhcnQnKTtcclxuXHJcbiAgICAgIHBsYXllci5vbignZW5kZWQnLCBwcm9jZWVkKTtcclxuICAgICAgcGxheWVyLm9uKCd2YXN0LmFkc0NhbmNlbCcsIHByb2NlZWQpO1xyXG4gICAgICBwbGF5ZXIub24oJ3Zhc3QuYWRTa2lwJywgcHJvY2VlZCk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBwcm9jZWVkKGV2dCkge1xyXG5cclxuICAgICAgICBpZihldnQudHlwZSA9PT0gJ2VuZGVkJyAmJiAocGxheWVyLmR1cmF0aW9uKCkgLSBwbGF5ZXIuY3VycmVudFRpbWUoKSkgPiAzICkge1xyXG4gICAgICAgICAgLy8gSWdub3JlIGVuZGVkIGV2ZW50IGlmIHRoZSBBZCB0aW1lIHdhcyBub3QgJ25lYXInIHRoZSBlbmRcclxuICAgICAgICAgIC8vIGF2b2lkcyBpc3N1ZXMgd2hlcmUgSU9TIGNvbnRyb2xzIGNvdWxkIHNraXAgdGhlIEFkXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwbGF5ZXIub2ZmKCdlbmRlZCcsIHByb2NlZWQpO1xyXG4gICAgICAgIHBsYXllci5vZmYoJ3Zhc3QuYWRzQ2FuY2VsJywgcHJvY2VlZCk7XHJcbiAgICAgICAgcGxheWVyLm9mZigndmFzdC5hZFNraXAnLCBwcm9jZWVkKTtcclxuXHJcbiAgICAgICAgLy9OT1RFOiBpZiB0aGUgYWRzIGdldCBjYW5jZWwgd2UgZG8gbm90aGluZyBhcGFydCByZW1vdmluZyB0aGUgbGlzdG5lcnNcclxuICAgICAgICBpZihldnQudHlwZSA9PT0gJ2VuZGVkJyB8fCBldnQudHlwZSA9PT0gJ3Zhc3QuYWRTa2lwJyl7XHJcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsb2dnZXIuZGVidWcgKFwiPFZBU1RJbnRlZ3JhdG9yLl9wbGF5U2VsZWN0ZWRBZC9wbGF5QWQ+IGNhbGxpbmcgcGxheWVyLnBsYXkoKS4uLlwiKTtcclxuXHJcbiAgICBwbGF5ZXIucGxheSgpO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fdHJhY2tFcnJvciA9IGZ1bmN0aW9uIHRyYWNrRXJyb3IoZXJyb3IsIHJlc3BvbnNlKSB7XHJcbiAgdmFzdFV0aWwudHJhY2socmVzcG9uc2UuZXJyb3JVUkxNYWNyb3MsIHtFUlJPUkNPREU6IGVycm9yLmNvZGUgfHwgOTAwfSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RJbnRlZ3JhdG9yOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBBZCA9IHJlcXVpcmUoJy4vQWQnKTtcclxudmFyIFZpZGVvQ2xpY2tzID0gcmVxdWlyZSgnLi9WaWRlb0NsaWNrcycpO1xyXG52YXIgTGluZWFyID0gcmVxdWlyZSgnLi9MaW5lYXInKTtcclxudmFyIEluTGluZSA9IHJlcXVpcmUoJy4vSW5MaW5lJyk7XHJcbnZhciBXcmFwcGVyID0gcmVxdWlyZSgnLi9XcmFwcGVyJyk7XHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XHJcblxyXG53aW5kb3cuSW5MaW5lX19BID0gSW5MaW5lO1xyXG5mdW5jdGlvbiBWQVNUUmVzcG9uc2UoKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcclxuICAgIHJldHVybiBuZXcgVkFTVFJlc3BvbnNlKCk7XHJcbiAgfVxyXG5cclxuICB0aGlzLl9saW5lYXJBZGRlZCA9IGZhbHNlO1xyXG4gIHRoaXMuYWRzID0gW107XHJcbiAgdGhpcy5lcnJvclVSTE1hY3JvcyA9IFtdO1xyXG4gIHRoaXMuaW1wcmVzc2lvbnMgPSBbXTtcclxuICB0aGlzLmNsaWNrVHJhY2tpbmdzID0gW107XHJcbiAgdGhpcy5jdXN0b21DbGlja3MgPSBbXTtcclxuICB0aGlzLnRyYWNraW5nRXZlbnRzID0ge307XHJcbiAgdGhpcy5tZWRpYUZpbGVzID0gW107XHJcbiAgdGhpcy5jbGlja1Rocm91Z2ggPSB1bmRlZmluZWQ7XHJcbiAgdGhpcy5hZFRpdGxlID0gJyc7XHJcbiAgdGhpcy5kdXJhdGlvbiA9IHVuZGVmaW5lZDtcclxuICB0aGlzLnNraXBvZmZzZXQgPSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuYWRkQWQgPSBmdW5jdGlvbiAoYWQpIHtcclxuICB2YXIgaW5MaW5lLCB3cmFwcGVyO1xyXG4gIGlmIChhZCBpbnN0YW5jZW9mIEFkKSB7XHJcbiAgICBpbkxpbmUgPSBhZC5pbkxpbmU7XHJcbiAgICB3cmFwcGVyID0gYWQud3JhcHBlcjtcclxuXHJcbiAgICB0aGlzLmFkcy5wdXNoKGFkKTtcclxuXHJcbiAgICBpZiAoaW5MaW5lKSB7XHJcbiAgICAgIHRoaXMuX2FkZEluTGluZShpbkxpbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3cmFwcGVyKSB7XHJcbiAgICAgIHRoaXMuX2FkZFdyYXBwZXIod3JhcHBlcik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkRXJyb3JUcmFja1VybCA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gIHZhciBlcnJvclVSTCA9IGVycm9yIGluc3RhbmNlb2YgeG1sLkpYT05UcmVlID8geG1sLmtleVZhbHVlKGVycm9yKSA6IGVycm9yO1xyXG4gIGlmIChlcnJvclVSTCkge1xyXG4gICAgdGhpcy5lcnJvclVSTE1hY3Jvcy5wdXNoKGVycm9yVVJMKTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRJbXByZXNzaW9ucyA9IGZ1bmN0aW9uIChpbXByZXNzaW9ucykge1xyXG4gIHV0aWxpdGllcy5pc0FycmF5KGltcHJlc3Npb25zKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMuaW1wcmVzc2lvbnMsIGltcHJlc3Npb25zKTtcclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZENsaWNrVGhyb3VnaCA9IGZ1bmN0aW9uIChjbGlja1Rocm91Z2gpIHtcclxuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY2xpY2tUaHJvdWdoKSkge1xyXG4gICAgdGhpcy5jbGlja1Rocm91Z2ggPSBjbGlja1Rocm91Z2g7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkQ2xpY2tUcmFja2luZ3MgPSBmdW5jdGlvbiAoY2xpY2tUcmFja2luZ3MpIHtcclxuICB1dGlsaXRpZXMuaXNBcnJheShjbGlja1RyYWNraW5ncykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmNsaWNrVHJhY2tpbmdzLCBjbGlja1RyYWNraW5ncyk7XHJcbn07XHJcblxyXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRDdXN0b21DbGlja3MgPSBmdW5jdGlvbiAoY3VzdG9tQ2xpY2tzKSB7XHJcbiAgdXRpbGl0aWVzLmlzQXJyYXkoY3VzdG9tQ2xpY2tzKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMuY3VzdG9tQ2xpY2tzLCBjdXN0b21DbGlja3MpO1xyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkVHJhY2tpbmdFdmVudHMgPSBmdW5jdGlvbiAodHJhY2tpbmdFdmVudHMpIHtcclxuICB2YXIgZXZlbnRzTWFwID0gdGhpcy50cmFja2luZ0V2ZW50cztcclxuXHJcbiAgaWYgKHRyYWNraW5nRXZlbnRzKSB7XHJcbiAgICB0cmFja2luZ0V2ZW50cyA9IHV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRXZlbnRzKSA/IHRyYWNraW5nRXZlbnRzIDogW3RyYWNraW5nRXZlbnRzXTtcclxuICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNraW5nRXZlbnQpIHtcclxuICAgICAgaWYgKCFldmVudHNNYXBbdHJhY2tpbmdFdmVudC5uYW1lXSkge1xyXG4gICAgICAgIGV2ZW50c01hcFt0cmFja2luZ0V2ZW50Lm5hbWVdID0gW107XHJcbiAgICAgIH1cclxuICAgICAgZXZlbnRzTWFwW3RyYWNraW5nRXZlbnQubmFtZV0ucHVzaCh0cmFja2luZ0V2ZW50KTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFRpdGxlID0gZnVuY3Rpb24gKHRpdGxlKSB7XHJcbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHRpdGxlKSkge1xyXG4gICAgdGhpcy5hZFRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkRHVyYXRpb24gPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcclxuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKGR1cmF0aW9uKSkge1xyXG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFZpZGVvQ2xpY2tzID0gZnVuY3Rpb24gKHZpZGVvQ2xpY2tzKSB7XHJcbiAgaWYgKHZpZGVvQ2xpY2tzIGluc3RhbmNlb2YgVmlkZW9DbGlja3MpIHtcclxuICAgIHRoaXMuX2FkZENsaWNrVGhyb3VnaCh2aWRlb0NsaWNrcy5jbGlja1Rocm91Z2gpO1xyXG4gICAgdGhpcy5fYWRkQ2xpY2tUcmFja2luZ3ModmlkZW9DbGlja3MuY2xpY2tUcmFja2luZ3MpO1xyXG4gICAgdGhpcy5fYWRkQ3VzdG9tQ2xpY2tzKHZpZGVvQ2xpY2tzLmN1c3RvbUNsaWNrcyk7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkTWVkaWFGaWxlcyA9IGZ1bmN0aW9uIChtZWRpYUZpbGVzKSB7XHJcbiAgdXRpbGl0aWVzLmlzQXJyYXkobWVkaWFGaWxlcykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLm1lZGlhRmlsZXMsIG1lZGlhRmlsZXMpO1xyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkU2tpcG9mZnNldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcclxuICBpZiAob2Zmc2V0KSB7XHJcbiAgICB0aGlzLnNraXBvZmZzZXQgPSBvZmZzZXQ7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkQWRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKGFkUGFyYW1ldGVycykge1xyXG4gIGlmIChhZFBhcmFtZXRlcnMpIHtcclxuICAgIHRoaXMuYWRQYXJhbWV0ZXJzID0gYWRQYXJhbWV0ZXJzO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZExpbmVhciA9IGZ1bmN0aW9uIChsaW5lYXIpIHtcclxuICBpZiAobGluZWFyIGluc3RhbmNlb2YgTGluZWFyKSB7XHJcbiAgICB0aGlzLl9hZGREdXJhdGlvbihsaW5lYXIuZHVyYXRpb24pO1xyXG4gICAgdGhpcy5fYWRkVHJhY2tpbmdFdmVudHMobGluZWFyLnRyYWNraW5nRXZlbnRzKTtcclxuICAgIHRoaXMuX2FkZFZpZGVvQ2xpY2tzKGxpbmVhci52aWRlb0NsaWNrcyk7XHJcbiAgICB0aGlzLl9hZGRNZWRpYUZpbGVzKGxpbmVhci5tZWRpYUZpbGVzKTtcclxuICAgIHRoaXMuX2FkZFNraXBvZmZzZXQobGluZWFyLnNraXBvZmZzZXQpO1xyXG4gICAgdGhpcy5fYWRkQWRQYXJhbWV0ZXJzKGxpbmVhci5hZFBhcmFtZXRlcnMpO1xyXG4gICAgdGhpcy5fbGluZWFyQWRkZWQgPSB0cnVlO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEluTGluZSA9IGZ1bmN0aW9uIChpbkxpbmUpIHtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gIGlmIChpbkxpbmUgaW5zdGFuY2VvZiBJbkxpbmUpIHtcclxuICAgIHRoaXMuX2FkZFRpdGxlKGluTGluZS5hZFRpdGxlKTtcclxuICAgIHRoaXMuX2FkZEVycm9yVHJhY2tVcmwoaW5MaW5lLmVycm9yKTtcclxuICAgIHRoaXMuX2FkZEltcHJlc3Npb25zKGluTGluZS5pbXByZXNzaW9ucyk7XHJcblxyXG4gICAgaW5MaW5lLmNyZWF0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChjcmVhdGl2ZSkge1xyXG4gICAgICBpZiAoY3JlYXRpdmUubGluZWFyKSB7XHJcbiAgICAgICAgdGhhdC5fYWRkTGluZWFyKGNyZWF0aXZlLmxpbmVhcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFdyYXBwZXIgPSBmdW5jdGlvbiAod3JhcHBlcikge1xyXG4gIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgaWYgKHdyYXBwZXIgaW5zdGFuY2VvZiBXcmFwcGVyKSB7XHJcbiAgICB0aGlzLl9hZGRFcnJvclRyYWNrVXJsKHdyYXBwZXIuZXJyb3IpO1xyXG4gICAgdGhpcy5fYWRkSW1wcmVzc2lvbnMod3JhcHBlci5pbXByZXNzaW9ucyk7XHJcblxyXG4gICAgd3JhcHBlci5jcmVhdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoY3JlYXRpdmUpIHtcclxuICAgICAgdmFyIGxpbmVhciA9IGNyZWF0aXZlLmxpbmVhcjtcclxuICAgICAgaWYgKGxpbmVhcikge1xyXG4gICAgICAgIHRoYXQuX2FkZFZpZGVvQ2xpY2tzKGxpbmVhci52aWRlb0NsaWNrcyk7XHJcbiAgICAgICAgdGhhdC5jbGlja1Rocm91Z2ggPSB1bmRlZmluZWQ7Ly9XZSBlbnN1cmUgdGhhdCBubyBjbGlja1Rocm91Z2ggaGFzIGJlZW4gYWRkZWRcclxuICAgICAgICB0aGF0Ll9hZGRUcmFja2luZ0V2ZW50cyhsaW5lYXIudHJhY2tpbmdFdmVudHMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLmhhc0xpbmVhciA9IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHRoaXMuX2xpbmVhckFkZGVkO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYXBwZW5kVG9BcnJheShhcnJheSwgaXRlbXMpIHtcclxuICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICBhcnJheS5wdXNoKGl0ZW0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RSZXNwb25zZTtcclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuL1ZBU1RFcnJvcicpO1xyXG52YXIgVkFTVFJlc3BvbnNlID0gcmVxdWlyZSgnLi9WQVNUUmVzcG9uc2UnKTtcclxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxuZnVuY3Rpb24gVkFTVFRyYWNrZXIoYXNzZXRVUkksIHZhc3RSZXNwb25zZSkge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWQVNUVHJhY2tlcikpIHtcclxuICAgIHJldHVybiBuZXcgVkFTVFRyYWNrZXIoYXNzZXRVUkksIHZhc3RSZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICB0aGlzLnNhbml0eUNoZWNrKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpO1xyXG4gIHRoaXMuaW5pdGlhbGl6ZShhc3NldFVSSSwgdmFzdFJlc3BvbnNlKTtcclxuXHJcbn1cclxuXHJcblZBU1RUcmFja2VyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oYXNzZXRVUkksIHZhc3RSZXNwb25zZSkge1xyXG4gIHRoaXMucmVzcG9uc2UgPSB2YXN0UmVzcG9uc2U7XHJcbiAgdGhpcy5hc3NldFVSSSA9IGFzc2V0VVJJO1xyXG4gIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gIHRoaXMucXVhcnRpbGVzID0ge1xyXG4gICAgZmlyc3RRdWFydGlsZToge3RyYWNrZWQ6IGZhbHNlLCB0aW1lOiBNYXRoLnJvdW5kKDI1ICogdmFzdFJlc3BvbnNlLmR1cmF0aW9uKSAvIDEwMH0sXHJcbiAgICBtaWRwb2ludDoge3RyYWNrZWQ6IGZhbHNlLCB0aW1lOiBNYXRoLnJvdW5kKDUwICogdmFzdFJlc3BvbnNlLmR1cmF0aW9uKSAvIDEwMH0sXHJcbiAgICB0aGlyZFF1YXJ0aWxlOiB7dHJhY2tlZDogZmFsc2UsIHRpbWU6IE1hdGgucm91bmQoNzUgKiB2YXN0UmVzcG9uc2UuZHVyYXRpb24pIC8gMTAwfVxyXG4gIH07XHJcbn07XHJcblxyXG5WQVNUVHJhY2tlci5wcm90b3R5cGUuc2FuaXR5Q2hlY2sgPSBmdW5jdGlvbihhc3NldFVSSSwgdmFzdFJlc3BvbnNlKSB7XHJcbiAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcoYXNzZXRVUkkpIHx8IHV0aWxpdGllcy5pc0VtcHR5U3RyaW5nKGFzc2V0VVJJKSkge1xyXG4gICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVkFTVFRyYWNrZXIgY29uc3RydWN0b3IsIG1pc3NpbmcgcmVxdWlyZWQgdGhlIFVSSSBvZiB0aGUgYWQgYXNzZXQgYmVpbmcgcGxheWVkJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XHJcbiAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWQVNUVHJhY2tlciBjb25zdHJ1Y3RvciwgbWlzc2luZyByZXF1aXJlZCBWQVNUIHJlc3BvbnNlJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrVVJMcyA9IGZ1bmN0aW9uIHRyYWNrVVJMcyh1cmxzLCB2YXJpYWJsZXMpIHtcclxuICBpZiAodXRpbGl0aWVzLmlzQXJyYXkodXJscykgJiYgdXJscy5sZW5ndGggPiAwKSB7XHJcbiAgICB2YXJpYWJsZXMgPSB1dGlsaXRpZXMuZXh0ZW5kKHtcclxuICAgICAgQVNTRVRVUkk6IHRoaXMuYXNzZXRVUkksXHJcbiAgICAgIENPTlRFTlRQTEFZSEVBRDogdmFzdFV0aWwuZm9ybWF0UHJvZ3Jlc3ModGhpcy5wcm9ncmVzcylcclxuICAgIH0sIHZhcmlhYmxlcyB8fCB7fSk7XHJcblxyXG4gICAgdmFzdFV0aWwudHJhY2sodXJscywgdmFyaWFibGVzKTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tFdmVudCA9IGZ1bmN0aW9uIHRyYWNrRXZlbnQoZXZlbnROYW1lLCB0cmFja09uY2UpIHtcclxuICB0aGlzLnRyYWNrVVJMcyhnZXRFdmVudFVyaXModGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50c1tldmVudE5hbWVdKSk7XHJcbiAgaWYgKHRyYWNrT25jZSkge1xyXG4gICAgdGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50c1tldmVudE5hbWVdID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXHJcbiAgZnVuY3Rpb24gZ2V0RXZlbnRVcmlzKHRyYWNraW5nRXZlbnRzKSB7XHJcbiAgICB2YXIgdXJpcztcclxuXHJcbiAgICBpZiAodHJhY2tpbmdFdmVudHMpIHtcclxuICAgICAgdXJpcyA9IFtdO1xyXG4gICAgICB0cmFja2luZ0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHVyaXMucHVzaChldmVudC51cmkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB1cmlzO1xyXG4gIH1cclxufTtcclxuXHJcblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja1Byb2dyZXNzID0gZnVuY3Rpb24gdHJhY2tQcm9ncmVzcyhuZXdQcm9ncmVzc0luTXMpIHtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgdmFyIGV2ZW50cyA9IFtdO1xyXG4gIHZhciBPTkNFID0gdHJ1ZTtcclxuICB2YXIgQUxXQVlTID0gZmFsc2U7XHJcbiAgdmFyIHRyYWNraW5nRXZlbnRzID0gdGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50cztcclxuXHJcbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihuZXdQcm9ncmVzc0luTXMpKSB7XHJcbiAgICBhZGRUcmFja0V2ZW50KCdzdGFydCcsIE9OQ0UsIG5ld1Byb2dyZXNzSW5NcyA+IDApO1xyXG4gICAgYWRkVHJhY2tFdmVudCgncmV3aW5kJywgQUxXQVlTLCBoYXNSZXdvdW5kKHRoaXMucHJvZ3Jlc3MsIG5ld1Byb2dyZXNzSW5NcykpO1xyXG4gICAgYWRkUXVhcnRpbGVFdmVudHMobmV3UHJvZ3Jlc3NJbk1zKTtcclxuICAgIHRyYWNrUHJvZ3Jlc3NFdmVudHMobmV3UHJvZ3Jlc3NJbk1zKTtcclxuICAgIHRyYWNrRXZlbnRzKCk7XHJcbiAgICB0aGlzLnByb2dyZXNzID0gbmV3UHJvZ3Jlc3NJbk1zO1xyXG4gIH1cclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXHJcbiAgZnVuY3Rpb24gaGFzUmV3b3VuZChjdXJyZW50UHJvZ3Jlc3MsIG5ld1Byb2dyZXNzKSB7XHJcbiAgICB2YXIgUkVXSU5EX1RIUkVTSE9MRCA9IDMwMDA7IC8vSU9TIHZpZGVvIGNsb2NrIGlzIHZlcnkgdW5yZWxpYWJsZSBhbmQgd2UgbmVlZCBhIDMgc2Vjb25kcyB0aHJlc2hvbGQgdG8gZW5zdXJlIHRoYXQgdGhlcmUgd2FzIGEgcmV3aW5kIGFuIHRoYXQgaXQgd2FzIG9uIHB1cnBvc2UuXHJcbiAgICByZXR1cm4gY3VycmVudFByb2dyZXNzID4gbmV3UHJvZ3Jlc3NJbk1zICYmIE1hdGguYWJzKG5ld1Byb2dyZXNzIC0gY3VycmVudFByb2dyZXNzKSA+IFJFV0lORF9USFJFU0hPTEQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRUcmFja0V2ZW50KGV2ZW50TmFtZSwgdHJhY2tPbmNlLCBjYW5CZUFkZGVkKSB7XHJcbiAgICBpZiAodHJhY2tpbmdFdmVudHNbZXZlbnROYW1lXSAmJiBjYW5CZUFkZGVkKSB7XHJcbiAgICAgIGV2ZW50cy5wdXNoKHtcclxuICAgICAgICBuYW1lOiBldmVudE5hbWUsXHJcbiAgICAgICAgdHJhY2tPbmNlOiAhIXRyYWNrT25jZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFF1YXJ0aWxlRXZlbnRzKHByb2dyZXNzKSB7XHJcbiAgICB2YXIgcXVhcnRpbGVzID0gdGhhdC5xdWFydGlsZXM7XHJcbiAgICB2YXIgZmlyc3RRdWFydGlsZSA9IHRoYXQucXVhcnRpbGVzLmZpcnN0UXVhcnRpbGU7XHJcbiAgICB2YXIgbWlkcG9pbnQgPSB0aGF0LnF1YXJ0aWxlcy5taWRwb2ludDtcclxuICAgIHZhciB0aGlyZFF1YXJ0aWxlID0gdGhhdC5xdWFydGlsZXMudGhpcmRRdWFydGlsZTtcclxuXHJcbiAgICBpZiAoIWZpcnN0UXVhcnRpbGUudHJhY2tlZCkge1xyXG4gICAgICB0cmFja1F1YXJ0aWxlKCdmaXJzdFF1YXJ0aWxlJywgcHJvZ3Jlc3MpO1xyXG4gICAgfSBlbHNlIGlmICghbWlkcG9pbnQudHJhY2tlZCkge1xyXG4gICAgICB0cmFja1F1YXJ0aWxlKCdtaWRwb2ludCcsIHByb2dyZXNzKTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXJkUXVhcnRpbGUudHJhY2tlZCl7XHJcbiAgICAgIHRyYWNrUXVhcnRpbGUoJ3RoaXJkUXVhcnRpbGUnLCBwcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXHJcbiAgICBmdW5jdGlvbiB0cmFja1F1YXJ0aWxlKHF1YXJ0aWxlTmFtZSwgcHJvZ3Jlc3Mpe1xyXG4gICAgICB2YXIgcXVhcnRpbGUgPSBxdWFydGlsZXNbcXVhcnRpbGVOYW1lXTtcclxuICAgICAgaWYoY2FuQmVUcmFja2VkKHF1YXJ0aWxlLCBwcm9ncmVzcykpe1xyXG4gICAgICAgIHF1YXJ0aWxlLnRyYWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIGFkZFRyYWNrRXZlbnQocXVhcnRpbGVOYW1lLCBPTkNFLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FuQmVUcmFja2VkKHF1YXJ0aWxlLCBwcm9ncmVzcykge1xyXG4gICAgdmFyIHF1YXJ0aWxlVGltZSA9IHF1YXJ0aWxlLnRpbWU7XHJcbiAgICAvL1dlIG9ubHkgZmlyZSB0aGUgcXVhcnRpbGUgZXZlbnQgaWYgdGhlIHByb2dyZXNzIGlzIGJpZ2dlciB0aGFuIHRoZSBxdWFydGlsZSB0aW1lIGJ5IDUgc2Vjb25kcyBhdCBtb3N0LlxyXG4gICAgcmV0dXJuIHByb2dyZXNzID49IHF1YXJ0aWxlVGltZSAmJiBwcm9ncmVzcyA8PSAocXVhcnRpbGVUaW1lICsgNTAwMCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0cmFja1Byb2dyZXNzRXZlbnRzKHByb2dyZXNzKSB7XHJcbiAgICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRXZlbnRzLnByb2dyZXNzKSkge1xyXG4gICAgICByZXR1cm47IC8vTm90aGluZyB0byB0cmFja1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwZW5kaW5nUHJvZ3Jlc3NFdnRzID0gW107XHJcblxyXG4gICAgdHJhY2tpbmdFdmVudHMucHJvZ3Jlc3MuZm9yRWFjaChmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGlmIChldnQub2Zmc2V0IDw9IHByb2dyZXNzKSB7XHJcbiAgICAgICAgdGhhdC50cmFja1VSTHMoW2V2dC51cmldKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwZW5kaW5nUHJvZ3Jlc3NFdnRzLnB1c2goZXZ0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0cmFja2luZ0V2ZW50cy5wcm9ncmVzcyA9IHBlbmRpbmdQcm9ncmVzc0V2dHM7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0cmFja0V2ZW50cygpIHtcclxuICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICB0aGF0LnRyYWNrRXZlbnQoZXZlbnQubmFtZSwgZXZlbnQudHJhY2tPbmNlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbltcclxuICAncmV3aW5kJyxcclxuICAnZnVsbHNjcmVlbicsXHJcbiAgJ2V4aXRGdWxsc2NyZWVuJyxcclxuICAncGF1c2UnLFxyXG4gICdyZXN1bWUnLFxyXG4gICdtdXRlJyxcclxuICAndW5tdXRlJyxcclxuICAnYWNjZXB0SW52aXRhdGlvbicsXHJcbiAgJ2FjY2VwdEludml0YXRpb25MaW5lYXInLFxyXG4gICdjb2xsYXBzZScsXHJcbiAgJ2V4cGFuZCdcclxuXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcclxuICAgIFZBU1RUcmFja2VyLnByb3RvdHlwZVsndHJhY2snICsgdXRpbGl0aWVzLmNhcGl0YWxpemUoZXZlbnROYW1lKV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMudHJhY2tFdmVudChldmVudE5hbWUpO1xyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbltcclxuICAnc3RhcnQnLFxyXG4gICdza2lwJyxcclxuICAnY2xvc2UnLFxyXG4gICdjbG9zZUxpbmVhcidcclxuXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcclxuICAgIFZBU1RUcmFja2VyLnByb3RvdHlwZVsndHJhY2snICsgdXRpbGl0aWVzLmNhcGl0YWxpemUoZXZlbnROYW1lKV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMudHJhY2tFdmVudChldmVudE5hbWUsIHRydWUpO1xyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbltcclxuICAnZmlyc3RRdWFydGlsZScsXHJcbiAgJ21pZHBvaW50JyxcclxuICAndGhpcmRRdWFydGlsZSdcclxuXS5mb3JFYWNoKGZ1bmN0aW9uIChxdWFydGlsZSkge1xyXG4gICAgVkFTVFRyYWNrZXIucHJvdG90eXBlWyd0cmFjaycgKyB1dGlsaXRpZXMuY2FwaXRhbGl6ZShxdWFydGlsZSldID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnF1YXJ0aWxlc1txdWFydGlsZV0udHJhY2tlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMudHJhY2tFdmVudChxdWFydGlsZSwgdHJ1ZSk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYodGhpcy5xdWFydGlsZXMudGhpcmRRdWFydGlsZS50cmFja2VkKXtcclxuICAgIHRoaXMudHJhY2tFdmVudCgnY29tcGxldGUnLCB0cnVlKTtcclxuICB9XHJcbn07XHJcblxyXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tFcnJvcldpdGhDb2RlID0gZnVuY3Rpb24gdHJhY2tFcnJvcldpdGhDb2RlKGVycm9yY29kZSkge1xyXG4gIGlmICh1dGlsaXRpZXMuaXNOdW1iZXIoZXJyb3Jjb2RlKSkge1xyXG4gICAgdGhpcy50cmFja1VSTHModGhpcy5yZXNwb25zZS5lcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3Jjb2RlfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrSW1wcmVzc2lvbnMgPSBmdW5jdGlvbiB0cmFja0ltcHJlc3Npb25zKCkge1xyXG4gIHRoaXMudHJhY2tVUkxzKHRoaXMucmVzcG9uc2UuaW1wcmVzc2lvbnMpO1xyXG59O1xyXG5cclxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrQ3JlYXRpdmVWaWV3ID0gZnVuY3Rpb24gdHJhY2tDcmVhdGl2ZVZpZXcoKSB7XHJcbiAgdGhpcy50cmFja0V2ZW50KCdjcmVhdGl2ZVZpZXcnKTtcclxufTtcclxuXHJcblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0NsaWNrID0gZnVuY3Rpb24gdHJhY2tDbGljaygpIHtcclxuICB0aGlzLnRyYWNrVVJMcyh0aGlzLnJlc3BvbnNlLmNsaWNrVHJhY2tpbmdzKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVkFTVFRyYWNrZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcclxuXHJcbmZ1bmN0aW9uIFZpZGVvQ2xpY2tzKHZpZGVvQ2xpY2tKVHJlZSkge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWaWRlb0NsaWNrcykpIHtcclxuICAgIHJldHVybiBuZXcgVmlkZW9DbGlja3ModmlkZW9DbGlja0pUcmVlKTtcclxuICB9XHJcblxyXG4gIHRoaXMuY2xpY2tUaHJvdWdoID0geG1sLmtleVZhbHVlKHZpZGVvQ2xpY2tKVHJlZS5jbGlja1Rocm91Z2gpO1xyXG4gIHRoaXMuY2xpY2tUcmFja2luZ3MgPSBwYXJzZUNsaWNrVHJhY2tpbmdzKHZpZGVvQ2xpY2tKVHJlZS5jbGlja1RyYWNraW5nKTtcclxuICB0aGlzLmN1c3RvbUNsaWNrcyA9IHBhcnNlQ2xpY2tUcmFja2luZ3ModmlkZW9DbGlja0pUcmVlLmN1c3RvbUNsaWNrKTtcclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIHBhcnNlQ2xpY2tUcmFja2luZ3ModHJhY2tpbmdEYXRhKSB7XHJcbiAgICB2YXIgY2xpY2tUcmFja2luZ3MgPSBbXTtcclxuICAgIGlmICh0cmFja2luZ0RhdGEpIHtcclxuICAgICAgdHJhY2tpbmdEYXRhID0gdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdEYXRhKSA/IHRyYWNraW5nRGF0YSA6IFt0cmFja2luZ0RhdGFdO1xyXG4gICAgICB0cmFja2luZ0RhdGEuZm9yRWFjaChmdW5jdGlvbiAoY2xpY2tUcmFja2luZ0RhdGEpIHtcclxuICAgICAgICBjbGlja1RyYWNraW5ncy5wdXNoKHhtbC5rZXlWYWx1ZShjbGlja1RyYWNraW5nRGF0YSkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbGlja1RyYWNraW5ncztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVmlkZW9DbGlja3M7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xyXG52YXIgQ3JlYXRpdmUgPSByZXF1aXJlKCcuL0NyZWF0aXZlJyk7XHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XHJcblxyXG5mdW5jdGlvbiBXcmFwcGVyKHdyYXBwZXJKVHJlZSkge1xyXG4gIGlmKCEodGhpcyBpbnN0YW5jZW9mIFdyYXBwZXIpKSB7XHJcbiAgICByZXR1cm4gbmV3IFdyYXBwZXIod3JhcHBlckpUcmVlKTtcclxuICB9XHJcblxyXG4gIC8vUmVxdWlyZWQgZWxlbWVudHNcclxuICB0aGlzLmFkU3lzdGVtID0geG1sLmtleVZhbHVlKHdyYXBwZXJKVHJlZS5hZFN5c3RlbSk7XHJcbiAgdGhpcy5pbXByZXNzaW9ucyA9IHZhc3RVdGlsLnBhcnNlSW1wcmVzc2lvbnMod3JhcHBlckpUcmVlLmltcHJlc3Npb24pO1xyXG4gIHRoaXMuVkFTVEFkVGFnVVJJID0geG1sLmtleVZhbHVlKHdyYXBwZXJKVHJlZS52QVNUQWRUYWdVUkkpO1xyXG5cclxuICAvL09wdGlvbmFsIGVsZW1lbnRzXHJcbiAgdGhpcy5jcmVhdGl2ZXMgPSBDcmVhdGl2ZS5wYXJzZUNyZWF0aXZlcyh3cmFwcGVySlRyZWUuY3JlYXRpdmVzKTtcclxuICB0aGlzLmVycm9yID0geG1sLmtleVZhbHVlKHdyYXBwZXJKVHJlZS5lcnJvcik7XHJcbiAgdGhpcy5leHRlbnNpb25zID0gd3JhcHBlckpUcmVlLmV4dGVuc2lvbnM7XHJcblxyXG4gIC8vT3B0aW9uYWwgYXR0cnNcclxuICB0aGlzLmZvbGxvd0FkZGl0aW9uYWxXcmFwcGVycyA9IHV0aWxpdGllcy5pc0RlZmluZWQoeG1sLmF0dHIod3JhcHBlckpUcmVlLCAnZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzJykpPyB4bWwuYXR0cih3cmFwcGVySlRyZWUsICdmb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnMnKTogdHJ1ZTtcclxuICB0aGlzLmFsbG93TXVsdGlwbGVBZHMgPSB4bWwuYXR0cih3cmFwcGVySlRyZWUsICdhbGxvd011bHRpcGxlQWRzJyk7XHJcbiAgdGhpcy5mYWxsYmFja09uTm9BZCA9IHhtbC5hdHRyKHdyYXBwZXJKVHJlZSwgJ2ZhbGxiYWNrT25Ob0FkJyk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gV3JhcHBlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxuXHJcbnZhciBkdXJhdGlvblJlZ2V4ID0gLyhcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpKFxcLihcXGRcXGRcXGQpKT8vO1xyXG5cclxudmFyIHBhcnNlcnMgPSB7XHJcblxyXG4gIGR1cmF0aW9uOiBmdW5jdGlvbiBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uU3RyKSB7XHJcblxyXG4gICAgdmFyIG1hdGNoLCBkdXJhdGlvbkluTXM7XHJcblxyXG4gICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhkdXJhdGlvblN0cikpIHtcclxuICAgICAgbWF0Y2ggPSBkdXJhdGlvblN0ci5tYXRjaChkdXJhdGlvblJlZ2V4KTtcclxuICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgZHVyYXRpb25Jbk1zID0gcGFyc2VIb3Vyc1RvTXMobWF0Y2hbMV0pICsgcGFyc2VNaW5Ub01zKG1hdGNoWzJdKSArIHBhcnNlU2VjVG9NcyhtYXRjaFszXSkgKyBwYXJzZUludChtYXRjaFs1XSB8fCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc05hTihkdXJhdGlvbkluTXMpID8gbnVsbCA6IGR1cmF0aW9uSW5NcztcclxuXHJcbiAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgICBmdW5jdGlvbiBwYXJzZUhvdXJzVG9Ncyhob3VyU3RyKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChob3VyU3RyLCAxMCkgKiA2MCAqIDYwICogMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZU1pblRvTXMobWluU3RyKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChtaW5TdHIsIDEwKSAqIDYwICogMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZVNlY1RvTXMoc2VjU3RyKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChzZWNTdHIsIDEwKSAqIDEwMDA7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgb2Zmc2V0OiBmdW5jdGlvbiBwYXJzZU9mZnNldChvZmZzZXQsIGR1cmF0aW9uKSB7XHJcbiAgICBpZihpc1BlcmNlbnRhZ2Uob2Zmc2V0KSl7XHJcbiAgICAgIHJldHVybiBjYWxjdWxhdGVQZXJjZW50YWdlKG9mZnNldCwgZHVyYXRpb24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcnNlcnMuZHVyYXRpb24ob2Zmc2V0KTtcclxuXHJcbiAgICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cclxuICAgIGZ1bmN0aW9uIGlzUGVyY2VudGFnZShvZmZzZXQpIHtcclxuICAgICAgdmFyIHBlcmNlbnRhZ2VSZWdleCA9IC9eXFxkKyhcXC5cXGQrKT8lJC9nO1xyXG4gICAgICByZXR1cm4gcGVyY2VudGFnZVJlZ2V4LnRlc3Qob2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVQZXJjZW50YWdlKHBlcmNlbnRTdHIsIGR1cmF0aW9uKSB7XHJcbiAgICAgIGlmKGR1cmF0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbGNQZXJjZW50KGR1cmF0aW9uLCBwYXJzZUZsb2F0KHBlcmNlbnRTdHIucmVwbGFjZSgnJScsICcnKSkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNQZXJjZW50KHF1YW50aXR5LCBwZXJjZW50KXtcclxuICAgICAgcmV0dXJuIHF1YW50aXR5ICogcGVyY2VudCAvIDEwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG59O1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcGFyc2VyczsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG52YXIgVlBBSURIVE1MNVRlY2ggPSByZXF1aXJlKCcuLi92cGFpZC9WUEFJREhUTUw1VGVjaCcpO1xyXG52YXIgVlBBSURGbGFzaFRlY2ggPSByZXF1aXJlKCcuLi92cGFpZC9WUEFJREZsYXNoVGVjaCcpO1xyXG52YXIgVlBBSURGTEFTSENsaWVudCA9IHJlcXVpcmUoJ1ZQQUlERkxBU0hDbGllbnQvanMvVlBBSURGTEFTSENsaWVudCcpO1xyXG5cclxudmFyIHZhc3RVdGlsID0ge1xyXG5cclxuICB0cmFjazogZnVuY3Rpb24gdHJhY2soVVJMTWFjcm9zLCB2YXJpYWJsZXMpIHtcclxuICAgIHZhciBzb3VyY2VzID0gdmFzdFV0aWwucGFyc2VVUkxNYWNyb3MoVVJMTWFjcm9zLCB2YXJpYWJsZXMpO1xyXG4gICAgdmFyIHRyYWNrSW1ncyA9IFtdO1xyXG4gICAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzcmMpIHtcclxuICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWcuc3JjID0gc3JjO1xyXG4gICAgICB0cmFja0ltZ3MucHVzaChpbWcpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdHJhY2tJbWdzO1xyXG4gIH0sXHJcblxyXG4gIHBhcnNlVVJMTWFjcm9zOiBmdW5jdGlvbiBwYXJzZU1hY3JvcyhVUkxNYWNyb3MsIHZhcmlhYmxlcykge1xyXG4gICAgdmFyIHBhcnNlZFVSTHMgPSBbXTtcclxuXHJcbiAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgfHwge307XHJcblxyXG4gICAgaWYgKCEodmFyaWFibGVzW1wiQ0FDSEVCVVNUSU5HXCJdKSkge1xyXG4gICAgICB2YXJpYWJsZXNbXCJDQUNIRUJVU1RJTkdcIl0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxLjBlKzEwKTtcclxuICAgIH1cclxuXHJcbiAgICBVUkxNYWNyb3MuZm9yRWFjaChmdW5jdGlvbiAoVVJMTWFjcm8pIHtcclxuICAgICAgcGFyc2VkVVJMcy5wdXNoKHZhc3RVdGlsLl9wYXJzZVVSTE1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwYXJzZWRVUkxzO1xyXG4gIH0sXHJcblxyXG4gIHBhcnNlVVJMTWFjcm86IGZ1bmN0aW9uIHBhcnNlTWFjcm8oVVJMTWFjcm8sIHZhcmlhYmxlcykge1xyXG4gICAgdmFyaWFibGVzID0gdmFyaWFibGVzIHx8IHt9O1xyXG5cclxuICAgIGlmICghKHZhcmlhYmxlc1tcIkNBQ0hFQlVTVElOR1wiXSkpIHtcclxuICAgICAgdmFyaWFibGVzW1wiQ0FDSEVCVVNUSU5HXCJdID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMS4wZSsxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhc3RVdGlsLl9wYXJzZVVSTE1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpO1xyXG4gIH0sXHJcblxyXG4gIF9wYXJzZVVSTE1hY3JvOiBmdW5jdGlvbiBwYXJzZU1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpIHtcclxuICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyB8fCB7fTtcclxuXHJcbiAgICB1dGlsaXRpZXMuZm9yRWFjaCh2YXJpYWJsZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgIFVSTE1hY3JvID0gVVJMTWFjcm8ucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXFtcIiArIGtleSArIFwiXFxcXFxcXVwiLCAnZ20nKSwgdmFsdWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIFVSTE1hY3JvO1xyXG4gIH0sXHJcblxyXG4gIHBhcnNlRHVyYXRpb246IGZ1bmN0aW9uIHBhcnNlRHVyYXRpb24oZHVyYXRpb25TdHIpIHtcclxuICAgIHZhciBkdXJhdGlvblJlZ2V4ID0gLyhcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpKFxcLihcXGRcXGRcXGQpKT8vO1xyXG4gICAgdmFyIG1hdGNoLCBkdXJhdGlvbkluTXM7XHJcblxyXG4gICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhkdXJhdGlvblN0cikpIHtcclxuICAgICAgbWF0Y2ggPSBkdXJhdGlvblN0ci5tYXRjaChkdXJhdGlvblJlZ2V4KTtcclxuICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgZHVyYXRpb25Jbk1zID0gcGFyc2VIb3Vyc1RvTXMobWF0Y2hbMV0pICsgcGFyc2VNaW5Ub01zKG1hdGNoWzJdKSArIHBhcnNlU2VjVG9NcyhtYXRjaFszXSkgKyBwYXJzZUludChtYXRjaFs1XSB8fCAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc05hTihkdXJhdGlvbkluTXMpID8gbnVsbCA6IGR1cmF0aW9uSW5NcztcclxuXHJcbiAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgICBmdW5jdGlvbiBwYXJzZUhvdXJzVG9Ncyhob3VyU3RyKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChob3VyU3RyLCAxMCkgKiA2MCAqIDYwICogMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZU1pblRvTXMobWluU3RyKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChtaW5TdHIsIDEwKSAqIDYwICogMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZVNlY1RvTXMoc2VjU3RyKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChzZWNTdHIsIDEwKSAqIDEwMDA7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcGFyc2VJbXByZXNzaW9uczogZnVuY3Rpb24gcGFyc2VJbXByZXNzaW9ucyhpbXByZXNzaW9ucykge1xyXG4gICAgaWYgKGltcHJlc3Npb25zKSB7XHJcbiAgICAgIGltcHJlc3Npb25zID0gdXRpbGl0aWVzLmlzQXJyYXkoaW1wcmVzc2lvbnMpID8gaW1wcmVzc2lvbnMgOiBbaW1wcmVzc2lvbnNdO1xyXG4gICAgICByZXR1cm4gdXRpbGl0aWVzLnRyYW5zZm9ybUFycmF5KGltcHJlc3Npb25zLCBmdW5jdGlvbiAoaW1wcmVzc2lvbikge1xyXG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhpbXByZXNzaW9uLmtleVZhbHVlKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGltcHJlc3Npb24ua2V5VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH0sXHJcblxyXG5cclxuICAvL1dlIGFzc3VtZSB0aGF0IHRoZSBwcm9ncmVzcyBpcyBnb2luZyB0byBhcnJpdmUgaW4gbWlsbGlzZWNvbmRzXHJcbiAgZm9ybWF0UHJvZ3Jlc3M6IGZ1bmN0aW9uIGZvcm1hdFByb2dyZXNzKHByb2dyZXNzKSB7XHJcbiAgICB2YXIgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG1pbGxpc2Vjb25kcztcclxuICAgIGhvdXJzID0gcHJvZ3Jlc3MgLyAoNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgaG91cnMgPSBNYXRoLmZsb29yKGhvdXJzKTtcclxuICAgIG1pbnV0ZXMgPSAocHJvZ3Jlc3MgLyAoNjAgKiAxMDAwKSkgJSA2MDtcclxuICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKG1pbnV0ZXMpO1xyXG4gICAgc2Vjb25kcyA9IChwcm9ncmVzcyAvIDEwMDApICUgNjA7XHJcbiAgICBzZWNvbmRzID0gTWF0aC5mbG9vcihzZWNvbmRzKTtcclxuICAgIG1pbGxpc2Vjb25kcyA9IHByb2dyZXNzICUgMTAwMDtcclxuICAgIHJldHVybiB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhob3VycywgMikgKyAnOicgKyB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhtaW51dGVzLCAyKSArICc6JyArIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKHNlY29uZHMsIDIpICsgJy4nICsgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHMobWlsbGlzZWNvbmRzLCAzKTtcclxuICB9LFxyXG5cclxuICBwYXJzZU9mZnNldDogZnVuY3Rpb24gcGFyc2VPZmZzZXQob2Zmc2V0LCBkdXJhdGlvbikge1xyXG4gICAgaWYgKGlzUGVyY2VudGFnZShvZmZzZXQpKSB7XHJcbiAgICAgIHJldHVybiBjYWxjdWxhdGVQZXJjZW50YWdlKG9mZnNldCwgZHVyYXRpb24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhc3RVdGlsLnBhcnNlRHVyYXRpb24ob2Zmc2V0KTtcclxuXHJcbiAgICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cclxuICAgIGZ1bmN0aW9uIGlzUGVyY2VudGFnZShvZmZzZXQpIHtcclxuICAgICAgdmFyIHBlcmNlbnRhZ2VSZWdleCA9IC9eXFxkKyhcXC5cXGQrKT8lJC9nO1xyXG4gICAgICByZXR1cm4gcGVyY2VudGFnZVJlZ2V4LnRlc3Qob2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVQZXJjZW50YWdlKHBlcmNlbnRTdHIsIGR1cmF0aW9uKSB7XHJcbiAgICAgIGlmIChkdXJhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBjYWxjUGVyY2VudChkdXJhdGlvbiwgcGFyc2VGbG9hdChwZXJjZW50U3RyLnJlcGxhY2UoJyUnLCAnJykpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjUGVyY2VudChxdWFudGl0eSwgcGVyY2VudCkge1xyXG4gICAgICByZXR1cm4gcXVhbnRpdHkgKiBwZXJjZW50IC8gMTAwO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG5cclxuICAvL0xpc3Qgb2Ygc3VwcG9ydGVkIFZQQUlEIHRlY2hub2xvZ2llc1xyXG4gIFZQQUlEX3RlY2hzOiBbXHJcbiAgICBWUEFJREZsYXNoVGVjaCxcclxuICAgIFZQQUlESFRNTDVUZWNoXHJcbiAgXSxcclxuXHJcbiAgaXNWUEFJRDogZnVuY3Rpb24gaXNWUEFJRE1lZGlhRmlsZShtZWRpYUZpbGUpIHtcclxuICAgIHJldHVybiAhIW1lZGlhRmlsZSAmJiBtZWRpYUZpbGUuYXBpRnJhbWV3b3JrID09PSAnVlBBSUQnO1xyXG4gIH0sXHJcblxyXG4gIGZpbmRTdXBwb3J0ZWRWUEFJRFRlY2g6IGZ1bmN0aW9uIGZpbmRTdXBwb3J0ZWRWUEFJRFRlY2gobWltZVR5cGUpIHtcclxuICAgIHZhciBpLCBsZW4sIFZQQUlEVGVjaDtcclxuXHJcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSB0aGlzLlZQQUlEX3RlY2hzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XHJcbiAgICAgIFZQQUlEVGVjaCA9IHRoaXMuVlBBSURfdGVjaHNbaV07XHJcbiAgICAgIGlmIChWUEFJRFRlY2guc3VwcG9ydHMobWltZVR5cGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIFZQQUlEVGVjaDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfSxcclxuXHJcbiAgaXNGbGFzaFN1cHBvcnRlZDogZnVuY3Rpb24gaXNGbGFzaFN1cHBvcnRlZCgpIHtcclxuICAgIHJldHVybiBWUEFJREZMQVNIQ2xpZW50LmlzU3VwcG9ydGVkKCk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogTmVjZXNzYXJ5IHN0ZXAgZm9yIFZQQUlERkxBU2hDbGllbnQgdG8ga25vdyBpZiBmbGFzaCBpcyBzdXBwb3J0ZWQgYW5kIG5vdCBibG9ja2VkLlxyXG4gICAqIElNUE9SVEFOVCBOT1RFOiBUaGlzIGlzIGFuIGFzeW5jIHRlc3QgYW5kIG5lZWRzIHRvIGJlIHJ1biBhcyBzb29uIGFzIHBvc3NpYmxlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHZwYWlkRmxhc2hMb2FkZXJQYXRoIHRoZSBwYXRoIHRvIHRoZSB2cGFpZEZsYXNoTG9hZGVyIHN3ZiBvYmouXHJcbiAgICovXHJcbiAgcnVuRmxhc2hTdXBwb3J0Q2hlY2s6IGZ1bmN0aW9uIHJ1bkZsYXNoU3VwcG9ydENoZWNrKHZwYWlkRmxhc2hMb2FkZXJQYXRoKSB7XHJcbiAgICBWUEFJREZMQVNIQ2xpZW50LnJ1bkZsYXNoVGVzdCh7ZGF0YTogdnBhaWRGbGFzaExvYWRlclBhdGh9KTtcclxuICB9XHJcblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB2YXN0VXRpbDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVEVycm9yJyk7XHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxuZnVuY3Rpb24gVlBBSURBZFVuaXRXcmFwcGVyKHZwYWlkQWRVbml0LCBvcHRzKSB7XHJcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZQQUlEQWRVbml0V3JhcHBlcikpIHtcclxuICAgIHJldHVybiBuZXcgVlBBSURBZFVuaXRXcmFwcGVyKHZwYWlkQWRVbml0LCBvcHRzKTtcclxuICB9XHJcbiAgc2FuaXR5Q2hlY2sodnBhaWRBZFVuaXQsIG9wdHMpO1xyXG5cclxuICB0aGlzLm9wdGlvbnMgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBvcHRzKTtcclxuXHJcbiAgdGhpcy5fYWRVbml0ID0gdnBhaWRBZFVuaXQ7XHJcblxyXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhhZFVuaXQsIG9wdHMpIHtcclxuICAgIGlmICghYWRVbml0IHx8ICFWUEFJREFkVW5pdFdyYXBwZXIuY2hlY2tWUEFJREludGVyZmFjZShhZFVuaXQpKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoJ29uIFZQQUlEQWRVbml0V3JhcHBlciwgdGhlIHBhc3NlZCBWUEFJRCBhZFVuaXQgZG9lcyBub3QgZnVsbHkgaW1wbGVtZW50IHRoZSBWUEFJRCBpbnRlcmZhY2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXV0aWxpdGllcy5pc09iamVjdChvcHRzKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLCBleHBlY3RlZCBvcHRpb25zIGhhc2ggIGJ1dCBnb3QgJ1wiICsgb3B0cyArIFwiJ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIShcInJlc3BvbnNlVGltZW91dFwiIGluIG9wdHMpIHx8ICF1dGlsaXRpZXMuaXNOdW1iZXIob3B0cy5yZXNwb25zZVRpbWVvdXQpICl7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIGV4cGVjdGVkIHJlc3BvbnNlVGltZW91dCBpbiBvcHRpb25zXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuVlBBSURBZFVuaXRXcmFwcGVyLmNoZWNrVlBBSURJbnRlcmZhY2UgPSBmdW5jdGlvbiBjaGVja1ZQQUlESW50ZXJmYWNlKFZQQUlEQWRVbml0KSB7XHJcbiAgLy9OT1RFOiBza2lwQWQgaXMgbm90IHBhcnQgb2YgdGhlIG1ldGhvZCBsaXN0IGJlY2F1c2UgaXQgb25seSBhcHBlYXJzIGluIFZQQUlEIDIuMCBhbmQgd2Ugc3VwcG9ydCBWUEFJRCAxLjBcclxuICB2YXIgVlBBSURJbnRlcmZhY2VNZXRob2RzID0gW1xyXG4gICAgJ2hhbmRzaGFrZVZlcnNpb24nLCAnaW5pdEFkJywgJ3N0YXJ0QWQnLCAnc3RvcEFkJywgJ3Jlc2l6ZUFkJywgJ3BhdXNlQWQnLCAnZXhwYW5kQWQnLCAnY29sbGFwc2VBZCdcclxuICBdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gVlBBSURJbnRlcmZhY2VNZXRob2RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICBpZiAoIVZQQUlEQWRVbml0IHx8ICF1dGlsaXRpZXMuaXNGdW5jdGlvbihWUEFJREFkVW5pdFtWUEFJREludGVyZmFjZU1ldGhvZHNbaV1dKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIGNhblN1YnNjcmliZVRvRXZlbnRzKFZQQUlEQWRVbml0KSAmJiBjYW5VbnN1YnNjcmliZUZyb21FdmVudHMoVlBBSURBZFVuaXQpO1xyXG5cclxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXHJcblxyXG4gIGZ1bmN0aW9uIGNhblN1YnNjcmliZVRvRXZlbnRzKGFkVW5pdCkge1xyXG4gICAgcmV0dXJuIHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5zdWJzY3JpYmUpIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5hZGRFdmVudExpc3RlbmVyKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQub24pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FuVW5zdWJzY3JpYmVGcm9tRXZlbnRzKGFkVW5pdCkge1xyXG4gICAgcmV0dXJuIHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC51bnN1YnNjcmliZSkgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5vZmYpO1xyXG5cclxuICB9XHJcbn07XHJcblxyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLmFkVW5pdEFzeW5jQ2FsbCA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgYXJncyA9IHV0aWxpdGllcy5hcnJheUxpa2VPYmpUb0FycmF5KGFyZ3VtZW50cyk7XHJcbiAgdmFyIG1ldGhvZCA9IGFyZ3Muc2hpZnQoKTtcclxuICB2YXIgY2IgPSBhcmdzLnBvcCgpO1xyXG4gIHZhciB0aW1lb3V0SWQ7XHJcblxyXG4gIHNhbml0eUNoZWNrKG1ldGhvZCwgY2IsIHRoaXMuX2FkVW5pdCk7XHJcbiAgYXJncy5wdXNoKHdyYXBDYWxsYmFjaygpKTtcclxuXHJcbiAgdGhpcy5fYWRVbml0W21ldGhvZF0uYXBwbHkodGhpcy5fYWRVbml0LCBhcmdzKTtcclxuICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgIHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICBjYihuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLCB0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIGEgcmVzcG9uc2Ugb24gY2FsbCAnXCIgKyBtZXRob2QgKyBcIidcIikpO1xyXG4gICAgY2IgPSB1dGlsaXRpZXMubm9vcDtcclxuICB9LCB0aGlzLm9wdGlvbnMucmVzcG9uc2VUaW1lb3V0KTtcclxuXHJcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKG1ldGhvZCwgY2IsIGFkVW5pdCkge1xyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcobWV0aG9kKSB8fCAhdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0W21ldGhvZF0pKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIuYWRVbml0QXN5bmNDYWxsLCBpbnZhbGlkIG1ldGhvZCBuYW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIuYWRVbml0QXN5bmNDYWxsLCBtaXNzaW5nIGNhbGxiYWNrXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gd3JhcENhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHRpbWVvdXRJZCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgICB9XHJcbiAgICAgIGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXZ0TmFtZSwgaGFuZGxlcikge1xyXG4gIHZhciBhZGRFdmVudExpc3RlbmVyID0gdGhpcy5fYWRVbml0LmFkZEV2ZW50TGlzdGVuZXIgfHwgdGhpcy5fYWRVbml0LnN1YnNjcmliZSB8fCB0aGlzLl9hZFVuaXQub247XHJcbiAgYWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMuX2FkVW5pdCwgZXZ0TmFtZSwgaGFuZGxlcik7XHJcbn07XHJcblxyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChldnROYW1lLCBoYW5kbGVyKSB7XHJcbiAgdmFyIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLl9hZFVuaXQucmVtb3ZlRXZlbnRMaXN0ZW5lciB8fCB0aGlzLl9hZFVuaXQudW5zdWJzY3JpYmUgfHwgdGhpcy5fYWRVbml0Lm9mZjtcclxuICByZW1vdmVFdmVudExpc3RlbmVyLmNhbGwodGhpcy5fYWRVbml0LCBldnROYW1lLCBoYW5kbGVyKTtcclxufTtcclxuXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUud2FpdEZvckV2ZW50ID0gZnVuY3Rpb24gKGV2dE5hbWUsIGNiLCBjb250ZXh0KSB7XHJcbiAgdmFyIHRpbWVvdXRJZDtcclxuICBzYW5pdHlDaGVjayhldnROYW1lLCBjYik7XHJcbiAgY29udGV4dCA9IGNvbnRleHQgfHwgbnVsbDtcclxuXHJcbiAgdGhpcy5vbihldnROYW1lLCByZXNwb25zZUxpc3RlbmVyKTtcclxuXHJcbiAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICBjYihuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLndhaXRGb3JFdmVudCwgdGltZW91dCB3aGlsZSB3YWl0aW5nIGZvciBldmVudCAnXCIgKyBldnROYW1lICsgXCInXCIpKTtcclxuICAgIHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICBjYiA9IHV0aWxpdGllcy5ub29wO1xyXG4gIH0sIHRoaXMub3B0aW9ucy5yZXNwb25zZVRpbWVvdXQpO1xyXG5cclxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soZXZ0TmFtZSwgY2IpIHtcclxuICAgIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKGV2dE5hbWUpKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIud2FpdEZvckV2ZW50LCBtaXNzaW5nIGV2dCBuYW1lXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIud2FpdEZvckV2ZW50LCBtaXNzaW5nIGNhbGxiYWNrXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzcG9uc2VMaXN0ZW5lcigpIHtcclxuICAgIHZhciBhcmdzID0gdXRpbGl0aWVzLmFycmF5TGlrZU9ialRvQXJyYXkoYXJndW1lbnRzKTtcclxuXHJcbiAgICBpZiAodGltZW91dElkKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgICB0aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFyZ3MudW5zaGlmdChudWxsKTtcclxuICAgIGNiLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIFZQQUlEIE1FVEhPRFNcclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5oYW5kc2hha2VWZXJzaW9uID0gZnVuY3Rpb24gKHZlcnNpb24sIGNiKSB7XHJcbiAgdGhpcy5hZFVuaXRBc3luY0NhbGwoJ2hhbmRzaGFrZVZlcnNpb24nLCB2ZXJzaW9uLCBjYik7XHJcbn07XHJcblxyXG4vKiBqc2hpbnQgbWF4cGFyYW1zOjYgKi9cclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5pbml0QWQgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBhZFVuaXREYXRhLCBjYikge1xyXG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZExvYWRlZCcsIGNiKTtcclxuICB0aGlzLl9hZFVuaXQuaW5pdEFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgYWRVbml0RGF0YSk7XHJcbn07XHJcblxyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnJlc2l6ZUFkID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBjYikge1xyXG4gIC8vIE5PVEU6IEFkU2l6ZUNoYW5nZSBldmVudCBpcyBvbmx5IHN1cHBvcnRlZCBvbiBWUEFJRCAyLjAgc28gZm9yIHRoZSBtb21lbnQgd2UgYXJlIG5vdCBnb2luZyB0byB1c2UgaXRcclxuICAvLyBhbmQgd2lsbCBhc3N1bWUgdGhhdCBldmVyeXRoaW5nIGlzIGZpbmUgYWZ0ZXIgdGhlIGFzeW5jIGNhbGxcclxuICB0aGlzLmFkVW5pdEFzeW5jQ2FsbCgncmVzaXplQWQnLCB3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgY2IpO1xyXG59O1xyXG5cclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5zdGFydEFkID0gZnVuY3Rpb24gKGNiKSB7XHJcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkU3RhcnRlZCcsIGNiKTtcclxuICB0aGlzLl9hZFVuaXQuc3RhcnRBZCgpO1xyXG59O1xyXG5cclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5zdG9wQWQgPSBmdW5jdGlvbiAoY2IpIHtcclxuICB0aGlzLndhaXRGb3JFdmVudCgnQWRTdG9wcGVkJywgY2IpO1xyXG4gIHRoaXMuX2FkVW5pdC5zdG9wQWQoKTtcclxufTtcclxuXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUucGF1c2VBZCA9IGZ1bmN0aW9uIChjYikge1xyXG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFBhdXNlZCcsIGNiKTtcclxuICB0aGlzLl9hZFVuaXQucGF1c2VBZCgpO1xyXG59O1xyXG5cclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5yZXN1bWVBZCA9IGZ1bmN0aW9uIChjYikge1xyXG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFBsYXlpbmcnLCBjYik7XHJcbiAgdGhpcy5fYWRVbml0LnJlc3VtZUFkKCk7XHJcbn07XHJcblxyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLmV4cGFuZEFkID0gZnVuY3Rpb24gKGNiKSB7XHJcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkRXhwYW5kZWRDaGFuZ2UnLCBjYik7XHJcbiAgdGhpcy5fYWRVbml0LmV4cGFuZEFkKCk7XHJcbn07XHJcblxyXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLmNvbGxhcHNlQWQgPSBmdW5jdGlvbiAoY2IpIHtcclxuICB0aGlzLndhaXRGb3JFdmVudCgnQWRFeHBhbmRlZENoYW5nZScsIGNiKTtcclxuICB0aGlzLl9hZFVuaXQuY29sbGFwc2VBZCgpO1xyXG59O1xyXG5cclxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5za2lwQWQgPSBmdW5jdGlvbiAoY2IpIHtcclxuICB0aGlzLndhaXRGb3JFdmVudCgnQWRTa2lwcGVkJywgY2IpO1xyXG4gIHRoaXMuX2FkVW5pdC5za2lwQWQoKTtcclxufTtcclxuXHJcbi8vVlBBSUQgcHJvcGVydHkgZ2V0dGVyc1xyXG5bXHJcbiAgJ2FkTGluZWFyJyxcclxuICAnYWRXaWR0aCcsXHJcbiAgJ2FkSGVpZ2h0JyxcclxuICAnYWRFeHBhbmRlZCcsXHJcbiAgJ2FkU2tpcHBhYmxlU3RhdGUnLFxyXG4gICdhZFJlbWFpbmluZ1RpbWUnLFxyXG4gICdhZER1cmF0aW9uJyxcclxuICAnYWRWb2x1bWUnLFxyXG4gICdhZENvbXBhbmlvbnMnLFxyXG4gICdhZEljb25zJ1xyXG5dLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XHJcbiAgdmFyIGdldHRlck5hbWUgPSAnZ2V0JyArIHV0aWxpdGllcy5jYXBpdGFsaXplKHByb3BlcnR5KTtcclxuXHJcbiAgVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZVtnZXR0ZXJOYW1lXSA9IGZ1bmN0aW9uIChjYikge1xyXG4gICAgdGhpcy5hZFVuaXRBc3luY0NhbGwoZ2V0dGVyTmFtZSwgY2IpO1xyXG4gIH07XHJcbn0pO1xyXG5cclxuLy9WUEFJRCBwcm9wZXJ0eSBzZXR0ZXJzXHJcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc2V0QWRWb2x1bWUgPSBmdW5jdGlvbih2b2x1bWUsIGNiKXtcclxuICB0aGlzLmFkVW5pdEFzeW5jQ2FsbCgnc2V0QWRWb2x1bWUnLHZvbHVtZSwgY2IpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREFkVW5pdFdyYXBwZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBNaW1lVHlwZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9taW1ldHlwZXMnKTtcclxuXHJcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RFcnJvcicpO1xyXG5cclxudmFyIFZQQUlERkxBU0hDbGllbnQgPSByZXF1aXJlKCdWUEFJREZMQVNIQ2xpZW50L2pzL1ZQQUlERkxBU0hDbGllbnQnKTtcclxuXHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XHJcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcclxuXHJcbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xyXG5cclxuZnVuY3Rpb24gVlBBSURGbGFzaFRlY2gobWVkaWFGaWxlLCBzZXR0aW5ncykge1xyXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWUEFJREZsYXNoVGVjaCkpIHtcclxuICAgIHJldHVybiBuZXcgVlBBSURGbGFzaFRlY2gobWVkaWFGaWxlKTtcclxuICB9XHJcbiAgc2FuaXR5Q2hlY2sobWVkaWFGaWxlKTtcclxuICB0aGlzLm5hbWUgPSAndnBhaWQtZmxhc2gnO1xyXG4gIHRoaXMubWVkaWFGaWxlID0gbWVkaWFGaWxlO1xyXG4gIHRoaXMuY29udGFpbmVyRWwgPSBudWxsO1xyXG4gIHRoaXMudnBhaWRGbGFzaENsaWVudCA9IG51bGw7XHJcbiAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG5cclxuICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2sobWVkaWFGaWxlKSB7XHJcbiAgICBpZiAoIW1lZGlhRmlsZSB8fCAhdXRpbGl0aWVzLmlzU3RyaW5nKG1lZGlhRmlsZS5zcmMpKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoJ29uIFZQQUlERmxhc2hUZWNoLCBpbnZhbGlkIE1lZGlhRmlsZScpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuVlBBSURGbGFzaFRlY2guVlBBSURGTEFTSENsaWVudCA9IFZQQUlERkxBU0hDbGllbnQ7XHJcblxyXG5WUEFJREZsYXNoVGVjaC5zdXBwb3J0cyA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgcmV0dXJuIChNaW1lVHlwZXMuZmxhc2guaW5kZXhPZih0eXBlKSA+IC0xKSAmJiBWUEFJREZsYXNoVGVjaC5WUEFJREZMQVNIQ2xpZW50LmlzU3VwcG9ydGVkKCk7XHJcbn07XHJcblxyXG5WUEFJREZsYXNoVGVjaC5wcm90b3R5cGUubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIGxvYWRGbGFzaENyZWF0aXZlKGNvbnRhaW5lckVsLCBvYmplY3RFbCwgY2FsbGJhY2spIHtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgdmFyIGZsYXNoQ2xpZW50T3B0cyA9IHRoaXMuc2V0dGluZ3MgJiYgdGhpcy5zZXR0aW5ncy52cGFpZEZsYXNoTG9hZGVyUGF0aCA/IHtkYXRhOiB0aGlzLnNldHRpbmdzLnZwYWlkRmxhc2hMb2FkZXJQYXRofSA6IHVuZGVmaW5lZDtcclxuICBzYW5pdHlDaGVjayhjb250YWluZXJFbCwgY2FsbGJhY2spO1xyXG5cclxuICB0aGlzLmNvbnRhaW5lckVsID0gY29udGFpbmVyRWw7XHJcblxyXG4gIGxvZ2dlci5kZWJ1ZyAoXCI8VlBBSURGbGFzaFRlY2gubG9hZEFkVW5pdD4gbG9hZGluZyBWUEFJREZMQVNIQ2xpZW50IHdpdGggb3B0czpcIiwgZmxhc2hDbGllbnRPcHRzKTtcclxuXHJcbiAgdGhpcy52cGFpZEZsYXNoQ2xpZW50ID0gbmV3IFZQQUlERmxhc2hUZWNoLlZQQUlERkxBU0hDbGllbnQoY29udGFpbmVyRWwsIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nZ2VyLmluZm8gKFwiPFZQQUlERmxhc2hUZWNoLmxvYWRBZFVuaXQ+IGNhbGxpbmcgVlBBSURGTEFTSENsaWVudC5sb2FkQWRVbml0KCk7IHRoYXQubWVkaWFGaWxlOlwiLCB0aGF0Lm1lZGlhRmlsZSk7XHJcbiAgICB0aGF0LnZwYWlkRmxhc2hDbGllbnQubG9hZEFkVW5pdCh0aGF0Lm1lZGlhRmlsZS5zcmMsIGNhbGxiYWNrKTtcclxuICB9LCBmbGFzaENsaWVudE9wdHMpO1xyXG5cclxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXHJcbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soY29udGFpbmVyLCBjYikge1xyXG5cclxuICAgIGlmICghZG9tLmlzRG9tRWxlbWVudChjb250YWluZXIpKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoJ29uIFZQQUlERmxhc2hUZWNoLmxvYWRBZFVuaXQsIGludmFsaWQgZG9tIGNvbnRhaW5lciBlbGVtZW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcclxuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVlBBSURGbGFzaFRlY2gubG9hZEFkVW5pdCwgbWlzc2luZyB2YWxpZCBjYWxsYmFjaycpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcblZQQUlERmxhc2hUZWNoLnByb3RvdHlwZS51bmxvYWRBZFVuaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKHRoaXMudnBhaWRGbGFzaENsaWVudCkge1xyXG4gICAgdHJ5e1xyXG4gICAgICB0aGlzLnZwYWlkRmxhc2hDbGllbnQuZGVzdHJveSgpO1xyXG4gICAgfSBjYXRjaChlKXtcclxuICAgICAgbG9nZ2VyLmVycm9yICgnVkFTVCBFUlJPUjogdHJ5aW5nIHRvIHVubG9hZCB0aGUgVlBBSUQgYWR1bml0Jyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZwYWlkRmxhc2hDbGllbnQgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgaWYgKHRoaXMuY29udGFpbmVyRWwpIHtcclxuICAgIGRvbS5yZW1vdmUodGhpcy5jb250YWluZXJFbCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lckVsID0gbnVsbDtcclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlERmxhc2hUZWNoO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgTWltZVR5cGVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbWltZXR5cGVzJyk7XHJcblxyXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNURXJyb3InKTtcclxuXHJcbnZhciBWUEFJREhUTUw1Q2xpZW50ID0gcmVxdWlyZSgnVlBBSURIVE1MNUNsaWVudC9qcy9WUEFJREhUTUw1Q2xpZW50Jyk7XHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG52YXIgZG9tID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZG9tJyk7XHJcblxyXG52YXIgbG9nZ2VyID0gcmVxdWlyZSAoJy4uLy4uL3V0aWxzL2NvbnNvbGVMb2dnZXInKTtcclxuXHJcbmZ1bmN0aW9uIFZQQUlESFRNTDVUZWNoKG1lZGlhRmlsZSkge1xyXG5cclxuICBpZighKHRoaXMgaW5zdGFuY2VvZiBWUEFJREhUTUw1VGVjaCkpIHtcclxuICAgIHJldHVybiBuZXcgVlBBSURIVE1MNVRlY2gobWVkaWFGaWxlKTtcclxuICB9XHJcblxyXG4gIHNhbml0eUNoZWNrKG1lZGlhRmlsZSk7XHJcblxyXG4gIHRoaXMubmFtZSA9ICd2cGFpZC1odG1sNSc7XHJcbiAgdGhpcy5jb250YWluZXJFbCA9IG51bGw7XHJcbiAgdGhpcy52aWRlb0VsID0gbnVsbDtcclxuICB0aGlzLnZwYWlkSFRNTENsaWVudCA9IG51bGw7XHJcblxyXG4gIHRoaXMubWVkaWFGaWxlID0gbWVkaWFGaWxlO1xyXG5cclxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhtZWRpYUZpbGUpIHtcclxuICAgICAgaWYgKCFtZWRpYUZpbGUgfHwgIXV0aWxpdGllcy5pc1N0cmluZyhtZWRpYUZpbGUuc3JjKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoVlBBSURIVE1MNVRlY2guSU5WQUxJRF9NRURJQV9GSUxFKTtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuVlBBSURIVE1MNVRlY2guVlBBSURIVE1MNUNsaWVudCA9IFZQQUlESFRNTDVDbGllbnQ7XHJcblxyXG5WUEFJREhUTUw1VGVjaC5zdXBwb3J0cyA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgcmV0dXJuICF1dGlsaXRpZXMuaXNPbGRJRSgpICYmIE1pbWVUeXBlcy5odG1sNS5pbmRleE9mKHR5cGUpID4gLTE7XHJcbn07XHJcblxyXG5WUEFJREhUTUw1VGVjaC5wcm90b3R5cGUubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIGxvYWRBZFVuaXQoY29udGFpbmVyRWwsIHZpZGVvRWwsIGNhbGxiYWNrKSB7XHJcbiAgc2FuaXR5Q2hlY2soY29udGFpbmVyRWwsIHZpZGVvRWwsIGNhbGxiYWNrKTtcclxuXHJcbiAgdGhpcy5jb250YWluZXJFbCA9IGNvbnRhaW5lckVsO1xyXG4gIHRoaXMudmlkZW9FbCA9IHZpZGVvRWw7XHJcbiAgdGhpcy52cGFpZEhUTUxDbGllbnQgPSBuZXcgVlBBSURIVE1MNVRlY2guVlBBSURIVE1MNUNsaWVudChjb250YWluZXJFbCwgdmlkZW9FbCwge30pO1xyXG4gIHRoaXMudnBhaWRIVE1MQ2xpZW50LmxvYWRBZFVuaXQodGhpcy5tZWRpYUZpbGUuc3JjLCBjYWxsYmFjayk7XHJcblxyXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGNvbnRhaW5lciwgdmlkZW8sIGNiKSB7XHJcbiAgICBpZiAoIWRvbS5pc0RvbUVsZW1lbnQoY29udGFpbmVyKSkge1xyXG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFZQQUlESFRNTDVUZWNoLklOVkFMSURfRE9NX0NPTlRBSU5FUl9FTCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFkb20uaXNEb21FbGVtZW50KHZpZGVvKSB8fCB2aWRlby50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICd2aWRlbycpIHtcclxuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9DT05UQUlORVJfRUwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XHJcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoVlBBSURIVE1MNVRlY2guTUlTU0lOR19DQUxMQkFDSyk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuVlBBSURIVE1MNVRlY2gucHJvdG90eXBlLnVubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIHVubG9hZEFkVW5pdCgpIHtcclxuICBpZiAodGhpcy52cGFpZEhUTUxDbGllbnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMudnBhaWRIVE1MQ2xpZW50LmRlc3Ryb3koKTtcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICBsb2dnZXIuZXJyb3IgKCdWQVNUIEVSUk9SOiB0cnlpbmcgdG8gdW5sb2FkIHRoZSBWUEFJRCBhZHVuaXQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZwYWlkSFRNTENsaWVudCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBpZiAodGhpcy5jb250YWluZXJFbCkge1xyXG4gICAgZG9tLnJlbW92ZSh0aGlzLmNvbnRhaW5lckVsKTtcclxuICAgIHRoaXMuY29udGFpbmVyRWwgPSBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbnZhciBQUkVGSVggPSAnb24gVlBBSURIVE1MNVRlY2gnO1xyXG5WUEFJREhUTUw1VGVjaC5JTlZBTElEX01FRElBX0ZJTEUgPSBQUkVGSVggKyAnLCBpbnZhbGlkIE1lZGlhRmlsZSc7XHJcblZQQUlESFRNTDVUZWNoLklOVkFMSURfRE9NX0NPTlRBSU5FUl9FTCA9IFBSRUZJWCArICcsIGludmFsaWQgY29udGFpbmVyIEh0bWxFbGVtZW50JztcclxuVlBBSURIVE1MNVRlY2guSU5WQUxJRF9ET01fVklERU9fRUwgPSBQUkVGSVggKyAnLCBpbnZhbGlkIEhUTUxWaWRlb0VsZW1lbnQnO1xyXG5WUEFJREhUTUw1VGVjaC5NSVNTSU5HX0NBTExCQUNLID0gUFJFRklYICsgJywgbWlzc2luZyB2YWxpZCBjYWxsYmFjayc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlESFRNTDVUZWNoO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgTWltZVR5cGVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbWltZXR5cGVzJyk7XHJcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RFcnJvcicpO1xyXG52YXIgVkFTVFJlc3BvbnNlID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNUUmVzcG9uc2UnKTtcclxudmFyIFZBU1RUcmFja2VyID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNUVHJhY2tlcicpO1xyXG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuLi92YXN0L3Zhc3RVdGlsJyk7XHJcblxyXG52YXIgVlBBSURBZFVuaXRXcmFwcGVyID0gcmVxdWlyZSgnLi9WUEFJREFkVW5pdFdyYXBwZXInKTtcclxuXHJcbnZhciBhc3luYyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2FzeW5jJyk7XHJcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcclxudmFyIHBsYXllclV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvcGxheWVyVXRpbHMnKTtcclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxuXHJcbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xyXG5cclxuZnVuY3Rpb24gVlBBSURJbnRlZ3JhdG9yKHBsYXllciwgc2V0dGluZ3MpIHtcclxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVlBBSURJbnRlZ3JhdG9yKSkge1xyXG4gICAgcmV0dXJuIG5ldyBWUEFJREludGVncmF0b3IocGxheWVyKTtcclxuICB9XHJcblxyXG4gIHRoaXMuVklFV19NT0RFID0ge1xyXG4gICAgTk9STUFMOiAnbm9ybWFsJyxcclxuICAgIEZVTExTQ1JFRU46IFwiZnVsbHNjcmVlblwiLFxyXG4gICAgVEhVTUJOQUlMOiBcInRodW1ibmFpbFwiXHJcbiAgfTtcclxuICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICB0aGlzLmNvbnRhaW5lckVsID0gY3JlYXRlVlBBSURDb250YWluZXJFbChwbGF5ZXIpO1xyXG4gIHRoaXMub3B0aW9ucyA9IHtcclxuICAgIHJlc3BvbnNlVGltZW91dDogNTAwMCxcclxuICAgIFZQQUlEX1ZFUlNJT046ICcyLjAnXHJcbiAgfTtcclxuICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlVlBBSURDb250YWluZXJFbCgpIHtcclxuICAgIHZhciBjb250YWluZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZG9tLmFkZENsYXNzKGNvbnRhaW5lckVsLCAnVlBBSUQtY29udGFpbmVyJyk7XHJcbiAgICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoY29udGFpbmVyRWwsIHBsYXllci5jb250cm9sQmFyLmVsKCkpO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lckVsO1xyXG5cclxuICB9XHJcbn1cclxuXHJcblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUucGxheUFkID0gZnVuY3Rpb24gcGxheVZQYWlkQWQodmFzdFJlc3BvbnNlLCBjYWxsYmFjaykge1xyXG4gIGlmICghKHZhc3RSZXNwb25zZSBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcclxuICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKCdvbiBWQVNUSW50ZWdyYXRvci5wbGF5QWQsIG1pc3NpbmcgcmVxdWlyZWQgVkFTVFJlc3BvbnNlJykpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICBsb2dnZXIuZGVidWcgKFwiPFZQQUlESW50ZWdyYXRvci5wbGF5QWQ+IGxvb2tpbmcgZm9yIHN1cHBvcnRlZCB0ZWNoLi4uXCIpO1xyXG4gIHZhciB0ZWNoID0gdGhpcy5fZmluZFN1cHBvcnRlZFRlY2godmFzdFJlc3BvbnNlLCB0aGlzLnNldHRpbmdzKTtcclxuXHJcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCB1dGlsaXRpZXMubm9vcDtcclxuXHJcbiAgdGhpcy5fYWRVbml0ID0gbnVsbDtcclxuXHJcbiAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCAndmpzLXZwYWlkLWFkJyk7XHJcblxyXG4gIHBsYXllci5vbigndmFzdC5hZHNDYW5jZWwnLCB0cmlnZ2VyVnBhaWRBZEVuZCk7XHJcbiAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbigpe1xyXG4gICAgcGxheWVyLm9mZigndmFzdC5hZHNDYW5jZWwnLCB0cmlnZ2VyVnBhaWRBZEVuZCk7XHJcbiAgICByZW1vdmVBZFVuaXQoKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKHRlY2gpIHtcclxuICAgIGxvZ2dlci5pbmZvIChcIjxWUEFJREludGVncmF0b3IucGxheUFkPiBmb3VuZCB0ZWNoOiBcIiwgdGVjaCk7XHJcblxyXG4gICAgYXN5bmMud2F0ZXJmYWxsKFtcclxuICAgICAgZnVuY3Rpb24gKG5leHQpIHtcclxuICAgICAgICBuZXh0KG51bGwsIHRlY2gsIHZhc3RSZXNwb25zZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXMuX2xvYWRBZFVuaXQuYmluZCh0aGlzKSxcclxuICAgICAgdGhpcy5fcGxheUFkVW5pdC5iaW5kKHRoaXMpLFxyXG4gICAgICB0aGlzLl9maW5pc2hQbGF5aW5nLmJpbmQodGhpcylcclxuXHJcbiAgICBdLCBhZENvbXBsZXRlKTtcclxuXHJcbiAgICB0aGlzLl9hZFVuaXQgPSB7XHJcbiAgICAgIF9wYXVzZWQ6IHRydWUsXHJcbiAgICAgIHR5cGU6ICdWUEFJRCcsXHJcbiAgICAgIHBhdXNlQWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5wYXVzZUFkJyk7XHJcbiAgICAgICAgcGxheWVyLnBhdXNlKHRydWUpOy8vd2UgbWFrZSBzdXJlIHRoYXQgdGhlIHZpZGVvIGNvbnRlbnQgZ2V0cyBzdG9wcGVkLlxyXG4gICAgICB9LFxyXG4gICAgICByZXN1bWVBZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQucmVzdW1lQWQnKTtcclxuICAgICAgfSxcclxuICAgICAgaXNQYXVzZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXVzZWQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdldFNyYzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRlY2gubWVkaWFGaWxlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgbG9nZ2VyLmRlYnVnIChcIjxWUEFJREludGVncmF0b3IucGxheUFkPiBjb3VsZCBub3QgZmluZCBzdWl0YWJsZSB0ZWNoXCIpO1xyXG4gICAgdmFyIGVycm9yID0gbmV3IFZBU1RFcnJvcignb24gVlBBSURJbnRlZ3JhdG9yLnBsYXlBZCwgY291bGQgbm90IGZpbmQgYSBzdXBwb3J0ZWQgbWVkaWFGaWxlJywgNDAzKTtcclxuICAgIGFkQ29tcGxldGUoZXJyb3IsIHRoaXMuX2FkVW5pdCwgdmFzdFJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzLl9hZFVuaXQ7XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBhZENvbXBsZXRlKGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSkge1xyXG4gICAgaWYgKGVycm9yICYmIHZhc3RSZXNwb25zZSkge1xyXG4gICAgICB0aGF0Ll90cmFja0Vycm9yKHZhc3RSZXNwb25zZSwgZXJyb3IuY29kZSk7XHJcbiAgICB9XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuYWRFbmQnKTtcclxuICAgIGNhbGxiYWNrKGVycm9yLCB2YXN0UmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdHJpZ2dlclZwYWlkQWRFbmQoKXtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5hZEVuZCcpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlQWRVbml0KCkge1xyXG4gICAgaWYgKHRlY2gpIHtcclxuICAgICAgdGVjaC51bmxvYWRBZFVuaXQoKTtcclxuICAgIH1cclxuICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy12cGFpZC1hZCcpO1xyXG4gIH1cclxufTtcclxuXHJcblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2ZpbmRTdXBwb3J0ZWRUZWNoID0gZnVuY3Rpb24gKHZhc3RSZXNwb25zZSwgc2V0dGluZ3MpIHtcclxuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHZhciB2cGFpZE1lZGlhRmlsZXMgPSB2YXN0UmVzcG9uc2UubWVkaWFGaWxlcy5maWx0ZXIodmFzdFV0aWwuaXNWUEFJRCk7XHJcbiAgdmFyIHByZWZlcnJlZFRlY2ggPSBzZXR0aW5ncyAmJiBzZXR0aW5ncy5wcmVmZXJyZWRUZWNoO1xyXG4gIHZhciBza2lwcGVkU3VwcG9ydFRlY2hzID0gW107XHJcbiAgdmFyIGksIGxlbiwgbWVkaWFGaWxlLCBWUEFJRFRlY2gsIGlzUHJlZmVyZWRUZWNoO1xyXG5cclxuICBmb3IgKGkgPSAwLCBsZW4gPSB2cGFpZE1lZGlhRmlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcclxuICAgIG1lZGlhRmlsZSA9IHZwYWlkTWVkaWFGaWxlc1tpXTtcclxuICAgIFZQQUlEVGVjaCA9IHZhc3RVdGlsLmZpbmRTdXBwb3J0ZWRWUEFJRFRlY2gobWVkaWFGaWxlLnR5cGUpO1xyXG5cclxuICAgIC8vIG5vIHN1cHBvcnRlZCBWUEFJRCB0ZWNoIGZvdW5kLCBza2lwIG1lZGlhZmlsZVxyXG4gICAgaWYgKCFWUEFJRFRlY2gpIHsgY29udGludWU7IH1cclxuXHJcbiAgICAvLyBkbyB3ZSBoYXZlIGEgcHJlZmVyZWQgdGVjaCwgZG9lcyBpdCBwbGF5IHRoaXMgbWVkaWEgZmlsZSA/XHJcbiAgICBpc1ByZWZlcmVkVGVjaCA9IHByZWZlcnJlZFRlY2ggP1xyXG4gICAgICAobWVkaWFGaWxlLnR5cGUgPT09IHByZWZlcnJlZFRlY2ggfHwgKE1pbWVUeXBlc1twcmVmZXJyZWRUZWNoXSAmJiBNaW1lVHlwZXNbcHJlZmVycmVkVGVjaF0uaW5kZXhPZihtZWRpYUZpbGUudHlwZSkgPiAtMSApKSA6XHJcbiAgICAgIGZhbHNlO1xyXG5cclxuICAgIC8vIG91ciBwcmVmZXJlZCB0ZWNoIGNhbiByZWFkIHRoaXMgbWVkaWFmaWxlLCBkZWZhdWx0aW5nIHRvIGl0LlxyXG4gICAgaWYgKGlzUHJlZmVyZWRUZWNoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgVlBBSURUZWNoKG1lZGlhRmlsZSwgc2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXBwZWRTdXBwb3J0VGVjaHMucHVzaCh7IG1lZGlhRmlsZTogbWVkaWFGaWxlLCB0ZWNoOiBWUEFJRFRlY2ggfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoc2tpcHBlZFN1cHBvcnRUZWNocy5sZW5ndGgpIHtcclxuICAgIHZhciBmaXJzdFRlY2ggPSBza2lwcGVkU3VwcG9ydFRlY2hzWzBdO1xyXG4gICAgcmV0dXJuIG5ldyBmaXJzdFRlY2gudGVjaChmaXJzdFRlY2gubWVkaWFGaWxlLCBzZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2NyZWF0ZVZQQUlEQWRVbml0V3JhcHBlciA9IGZ1bmN0aW9uKGFkVW5pdCwgc3JjLCByZXNwb25zZVRpbWVvdXQpIHtcclxuICByZXR1cm4gbmV3IFZQQUlEQWRVbml0V3JhcHBlcihhZFVuaXQsIHtzcmM6IHNyYywgcmVzcG9uc2VUaW1lb3V0OiByZXNwb25zZVRpbWVvdXR9KTtcclxufTtcclxuXHJcblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2xvYWRBZFVuaXQgPSBmdW5jdGlvbiAodGVjaCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XHJcbiAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICB2YXIgdmpzVGVjaEVsID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XHJcbiAgdmFyIHJlc3BvbnNlVGltZW91dCA9IHRoaXMuc2V0dGluZ3MucmVzcG9uc2VUaW1lb3V0IHx8IHRoaXMub3B0aW9ucy5yZXNwb25zZVRpbWVvdXQ7XHJcbiAgdGVjaC5sb2FkQWRVbml0KHRoaXMuY29udGFpbmVyRWwsIHZqc1RlY2hFbCwgZnVuY3Rpb24gKGVycm9yLCBhZFVuaXQpIHtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBXcmFwcGVkQWRVbml0ID0gdGhhdC5fY3JlYXRlVlBBSURBZFVuaXRXcmFwcGVyKGFkVW5pdCwgdGVjaC5tZWRpYUZpbGUuc3JjLCByZXNwb25zZVRpbWVvdXQpO1xyXG4gICAgICB2YXIgdGVjaENsYXNzID0gJ3Zqcy0nICsgdGVjaC5uYW1lICsgJy1hZCc7XHJcbiAgICAgIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgdGVjaENsYXNzKTtcclxuICAgICAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmVsKCksdGVjaENsYXNzKTtcclxuICAgICAgfSk7XHJcbiAgICAgIG5leHQobnVsbCwgV3JhcHBlZEFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgbmV4dChlLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9wbGF5QWRVbml0ID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBjYWxsYmFjaykge1xyXG4gIGFzeW5jLndhdGVyZmFsbChbXHJcbiAgICBmdW5jdGlvbiAobmV4dCkge1xyXG4gICAgICBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcclxuICAgIH0sXHJcbiAgICB0aGlzLl9oYW5kc2hha2UuYmluZCh0aGlzKSxcclxuICAgIHRoaXMuX2luaXRBZC5iaW5kKHRoaXMpLFxyXG4gICAgdGhpcy5fc2V0dXBFdmVudHMuYmluZCh0aGlzKSxcclxuICAgIHRoaXMuX2FkZFNraXBCdXR0b24uYmluZCh0aGlzKSxcclxuICAgIHRoaXMuX2xpbmtQbGF5ZXJDb250cm9scy5iaW5kKHRoaXMpLFxyXG4gICAgdGhpcy5fc3RhcnRBZC5iaW5kKHRoaXMpXHJcbiAgXSwgY2FsbGJhY2spO1xyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5faGFuZHNoYWtlID0gZnVuY3Rpb24gaGFuZHNoYWtlKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XHJcbiAgYWRVbml0LmhhbmRzaGFrZVZlcnNpb24odGhpcy5vcHRpb25zLlZQQUlEX1ZFUlNJT04sIGZ1bmN0aW9uIChlcnJvciwgdmVyc2lvbikge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZlcnNpb24gJiYgaXNTdXBwb3J0ZWRWZXJzaW9uKHZlcnNpb24pKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV4dChuZXcgVkFTVEVycm9yKCdvbiBWUEFJREludGVncmF0b3IuX2hhbmRzaGFrZSwgdW5zdXBwb3J0ZWQgdmVyc2lvbiBcIicgKyB2ZXJzaW9uICsgJ1wiJyksIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaXNTdXBwb3J0ZWRWZXJzaW9uKHZlcnNpb24pIHtcclxuICAgIHZhciBtYWpvck51bSA9IG1ham9yKHZlcnNpb24pO1xyXG4gICAgcmV0dXJuIG1ham9yTnVtID49IDEgJiYgbWFqb3JOdW0gPD0gMjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1ham9yKHZlcnNpb24pIHtcclxuICAgIHZhciBwYXJ0cyA9IHZlcnNpb24uc3BsaXQoJy4nKTtcclxuICAgIHJldHVybiBwYXJzZUludChwYXJ0c1swXSwgMTApO1xyXG4gIH1cclxufTtcclxuXHJcblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2luaXRBZCA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xyXG4gIHZhciB0ZWNoID0gdGhpcy5wbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcclxuICB2YXIgZGltZW5zaW9uID0gZG9tLmdldERpbWVuc2lvbih0ZWNoKTtcclxuICBhZFVuaXQuaW5pdEFkKGRpbWVuc2lvbi53aWR0aCwgZGltZW5zaW9uLmhlaWdodCwgdGhpcy5WSUVXX01PREUuTk9STUFMLCAtMSwge0FkUGFyYW1ldGVyczogdmFzdFJlc3BvbnNlLmFkUGFyYW1ldGVycyB8fCAnJ30sIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fY3JlYXRlVkFTVFRyYWNrZXIgPSBmdW5jdGlvbihhZFVuaXRTcmMsIHZhc3RSZXNwb25zZSkge1xyXG4gIHJldHVybiBuZXcgVkFTVFRyYWNrZXIoYWRVbml0U3JjLCB2YXN0UmVzcG9uc2UpO1xyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fc2V0dXBFdmVudHMgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcclxuICB2YXIgYWRVbml0U3JjID0gYWRVbml0Lm9wdGlvbnMuc3JjO1xyXG4gIHZhciB0cmFja2VyID0gdGhpcy5fY3JlYXRlVkFTVFRyYWNrZXIoYWRVbml0U3JjLCB2YXN0UmVzcG9uc2UpO1xyXG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gIGFkVW5pdC5vbignQWRTa2lwcGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU2tpcHBlZCcpO1xyXG4gICAgdHJhY2tlci50cmFja1NraXAoKTtcclxuICB9KTtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZEltcHJlc3Npb24nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRJbXByZXNzaW9uJyk7XHJcbiAgICB0cmFja2VyLnRyYWNrSW1wcmVzc2lvbnMoKTtcclxuICB9KTtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZFN0YXJ0ZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRTdGFydGVkJyk7XHJcbiAgICB0cmFja2VyLnRyYWNrQ3JlYXRpdmVWaWV3KCk7XHJcbiAgICBub3RpZnlQbGF5VG9QbGF5ZXIoKTtcclxuICB9KTtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZFZpZGVvU3RhcnQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb1N0YXJ0Jyk7XHJcbiAgICB0cmFja2VyLnRyYWNrU3RhcnQoKTtcclxuICAgIG5vdGlmeVBsYXlUb1BsYXllcigpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkUGxheWluZycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFBsYXlpbmcnKTtcclxuICAgIHRyYWNrZXIudHJhY2tSZXN1bWUoKTtcclxuICAgIG5vdGlmeVBsYXlUb1BsYXllcigpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkUGF1c2VkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkUGF1c2VkJyk7XHJcbiAgICB0cmFja2VyLnRyYWNrUGF1c2UoKTtcclxuICAgIG5vdGlmeVBhdXNlVG9QbGF5ZXIoKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gbm90aWZ5UGxheVRvUGxheWVyKCl7XHJcbiAgICBpZih0aGF0Ll9hZFVuaXQgJiYgdGhhdC5fYWRVbml0LmlzUGF1c2VkKCkpe1xyXG4gICAgICB0aGF0Ll9hZFVuaXQuX3BhdXNlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3BsYXknKTtcclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBub3RpZnlQYXVzZVRvUGxheWVyKCkge1xyXG4gICAgaWYodGhhdC5fYWRVbml0KXtcclxuICAgICAgdGhhdC5fYWRVbml0Ll9wYXVzZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3BhdXNlJyk7XHJcbiAgfVxyXG5cclxuICBhZFVuaXQub24oJ0FkVmlkZW9GaXJzdFF1YXJ0aWxlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9GaXJzdFF1YXJ0aWxlJyk7XHJcbiAgICB0cmFja2VyLnRyYWNrRmlyc3RRdWFydGlsZSgpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkVmlkZW9NaWRwb2ludCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvTWlkcG9pbnQnKTtcclxuICAgIHRyYWNrZXIudHJhY2tNaWRwb2ludCgpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkVmlkZW9UaGlyZFF1YXJ0aWxlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9UaGlyZFF1YXJ0aWxlJyk7XHJcbiAgICB0cmFja2VyLnRyYWNrVGhpcmRRdWFydGlsZSgpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkVmlkZW9Db21wbGV0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvQ29tcGxldGUnKTtcclxuICAgIHRyYWNrZXIudHJhY2tDb21wbGV0ZSgpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkQ2xpY2tUaHJ1JywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZENsaWNrVGhydScpO1xyXG4gICAgdmFyIHVybCA9IGRhdGEudXJsO1xyXG4gICAgdmFyIHBsYXllckhhbmRsZXMgPSBkYXRhLnBsYXllckhhbmRsZXM7XHJcbiAgICB2YXIgY2xpY2tUaHJ1VXJsID0gdXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcodXJsKSA/IHVybCA6IGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKHZhc3RSZXNwb25zZS5jbGlja1Rocm91Z2gpO1xyXG5cclxuICAgIHRyYWNrZXIudHJhY2tDbGljaygpO1xyXG4gICAgaWYgKHBsYXllckhhbmRsZXMgJiYgY2xpY2tUaHJ1VXJsKSB7XHJcbiAgICAgIHdpbmRvdy5vcGVuKGNsaWNrVGhydVVybCwgJ19ibGFuaycpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKGNsaWNrVGhyb3VnaE1hY3JvKSB7XHJcbiAgICAgIHZhciB2YXJpYWJsZXMgPSB7XHJcbiAgICAgICAgQVNTRVRVUkk6IGFkVW5pdC5vcHRpb25zLnNyYyxcclxuICAgICAgICBDT05URU5UUExBWUhFQUQ6IDAgLy9JbiBWUEFJRCB0aGVyZSBpcyBubyBtZXRob2QgdG8ga25vdyB0aGUgY3VycmVudCB0aW1lIGZyb20gdGhlIGFkVW5pdFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIGNsaWNrVGhyb3VnaE1hY3JvID8gdmFzdFV0aWwucGFyc2VVUkxNYWNybyhjbGlja1Rocm91Z2hNYWNybywgdmFyaWFibGVzKSA6IG51bGw7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRVc2VyQWNjZXB0SW52aXRhdGlvbicsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFVzZXJBY2NlcHRJbnZpdGF0aW9uJyk7XHJcbiAgICB0cmFja2VyLnRyYWNrQWNjZXB0SW52aXRhdGlvbigpO1xyXG4gICAgdHJhY2tlci50cmFja0FjY2VwdEludml0YXRpb25MaW5lYXIoKTtcclxuICB9KTtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZFVzZXJDbG9zZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFVzZXJDbG9zZScpO1xyXG4gICAgdHJhY2tlci50cmFja0Nsb3NlKCk7XHJcbiAgICB0cmFja2VyLnRyYWNrQ2xvc2VMaW5lYXIoKTtcclxuICB9KTtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZFVzZXJNaW5pbWl6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFVzZXJNaW5pbWl6ZScpO1xyXG4gICAgdHJhY2tlci50cmFja0NvbGxhcHNlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRFcnJvcicsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZEVycm9yJyk7XHJcbiAgICAvL05PVEU6IHdlIHRyYWNrIGVycm9ycyBjb2RlIDkwMSwgYXMgbm90ZWQgaW4gVkFTVCAzLjBcclxuICAgIHRyYWNrZXIudHJhY2tFcnJvcldpdGhDb2RlKDkwMSk7XHJcbiAgfSk7XHJcblxyXG4gIGFkVW5pdC5vbignQWRWb2x1bWVDaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWb2x1bWVDaGFuZ2UnKTtcclxuICAgIHZhciBsYXN0Vm9sdW1lID0gcGxheWVyLnZvbHVtZSgpO1xyXG4gICAgYWRVbml0LmdldEFkVm9sdW1lKGZ1bmN0aW9uIChlcnJvciwgY3VycmVudFZvbHVtZSkge1xyXG4gICAgICBpZiAobGFzdFZvbHVtZSAhPT0gY3VycmVudFZvbHVtZSkge1xyXG4gICAgICAgIGlmIChjdXJyZW50Vm9sdW1lID09PSAwICYmIGxhc3RWb2x1bWUgPiAwKSB7XHJcbiAgICAgICAgICB0cmFja2VyLnRyYWNrTXV0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRWb2x1bWUgPiAwICYmIGxhc3RWb2x1bWUgPT09IDApIHtcclxuICAgICAgICAgIHRyYWNrZXIudHJhY2tVbm11dGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBsYXllci52b2x1bWUoY3VycmVudFZvbHVtZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgdXBkYXRlVmlld1NpemUgPSByZXNpemVBZC5iaW5kKHRoaXMsIHBsYXllciwgYWRVbml0LCB0aGlzLlZJRVdfTU9ERSk7XHJcbiAgdmFyIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkID0gdXRpbGl0aWVzLnRocm90dGxlKHVwZGF0ZVZpZXdTaXplLCAxMDApO1xyXG4gIHZhciBhdXRvUmVzaXplID0gdGhpcy5zZXR0aW5ncy5hdXRvUmVzaXplO1xyXG5cclxuICBpZiAoYXV0b1Jlc2l6ZSkge1xyXG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xyXG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnb3JpZW50YXRpb25jaGFuZ2UnLCB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCk7XHJcbiAgfVxyXG5cclxuICBwbGF5ZXIub24oJ3Zhc3QucmVzaXplJywgdXBkYXRlVmlld1NpemUpO1xyXG4gIHBsYXllci5vbigndnBhaWQucGF1c2VBZCcsIHBhdXNlQWRVbml0KTtcclxuICBwbGF5ZXIub24oJ3ZwYWlkLnJlc3VtZUFkJywgcmVzdW1lQWRVbml0KTtcclxuXHJcbiAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwbGF5ZXIub2ZmKCd2YXN0LnJlc2l6ZScsIHVwZGF0ZVZpZXdTaXplKTtcclxuICAgIHBsYXllci5vZmYoJ3ZwYWlkLnBhdXNlQWQnLCBwYXVzZUFkVW5pdCk7XHJcbiAgICBwbGF5ZXIub2ZmKCd2cGFpZC5yZXN1bWVBZCcsIHJlc3VtZUFkVW5pdCk7XHJcblxyXG4gICAgaWYgKGF1dG9SZXNpemUpIHtcclxuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xyXG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdvcmllbnRhdGlvbmNoYW5nZScsIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcblxyXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBwYXVzZUFkVW5pdCgpIHtcclxuICAgIGFkVW5pdC5wYXVzZUFkKHV0aWxpdGllcy5ub29wKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc3VtZUFkVW5pdCgpIHtcclxuICAgIGFkVW5pdC5yZXN1bWVBZCh1dGlsaXRpZXMubm9vcCk7XHJcbiAgfVxyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fYWRkU2tpcEJ1dHRvbiA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xyXG4gIHZhciBza2lwQnV0dG9uO1xyXG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuXHJcbiAgYWRVbml0Lm9uKCdBZFNraXBwYWJsZVN0YXRlQ2hhbmdlJywgdXBkYXRlU2tpcEJ1dHRvblN0YXRlKTtcclxuXHJcbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVTa2lwQnV0dG9uKTtcclxuXHJcbiAgbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xyXG4gIGZ1bmN0aW9uIHVwZGF0ZVNraXBCdXR0b25TdGF0ZSgpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFNraXBwYWJsZVN0YXRlQ2hhbmdlJyk7XHJcbiAgICBhZFVuaXQuZ2V0QWRTa2lwcGFibGVTdGF0ZShmdW5jdGlvbiAoZXJyb3IsIGlzU2tpcHBhYmxlKSB7XHJcbiAgICAgIGlmIChpc1NraXBwYWJsZSkge1xyXG4gICAgICAgIGlmICghc2tpcEJ1dHRvbikge1xyXG4gICAgICAgICAgYWRkU2tpcEJ1dHRvbihwbGF5ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZW1vdmVTa2lwQnV0dG9uKHBsYXllcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkU2tpcEJ1dHRvbihwbGF5ZXIpIHtcclxuICAgIHNraXBCdXR0b24gPSBjcmVhdGVTa2lwQnV0dG9uKHBsYXllcik7XHJcbiAgICBwbGF5ZXIuZWwoKS5hcHBlbmRDaGlsZChza2lwQnV0dG9uKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZVNraXBCdXR0b24oKSB7XHJcbiAgICBkb20ucmVtb3ZlKHNraXBCdXR0b24pO1xyXG4gICAgc2tpcEJ1dHRvbiA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVTa2lwQnV0dG9uKCkge1xyXG4gICAgdmFyIHNraXBCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCBcInZhc3Qtc2tpcC1idXR0b25cIik7XHJcbiAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgXCJlbmFibGVkXCIpO1xyXG4gICAgc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNraXAgYWRcIjtcclxuXHJcbiAgICBza2lwQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBhZFVuaXQuc2tpcEFkKHV0aWxpdGllcy5ub29wKTsvL1dlIHNraXAgdGhlIGFkVW5pdFxyXG5cclxuICAgICAgLy9XZSBwcmV2ZW50IGV2ZW50IHByb3BhZ2F0aW9uIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggdGhlIGNsaWNrVGhyb3VnaCBhbmQgc28gb25cclxuICAgICAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gc2tpcEJ1dHRvbjtcclxuICB9XHJcbn07XHJcblxyXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9saW5rUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcclxuICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgbGlua1ZvbHVtZUNvbnRyb2wodGhpcy5wbGF5ZXIsIGFkVW5pdCk7XHJcbiAgbGlua0Z1bGxTY3JlZW5Db250cm9sKHRoaXMucGxheWVyLCBhZFVuaXQsIHRoaXMuVklFV19NT0RFKTtcclxuXHJcbiAgbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XHJcblxyXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBsaW5rVm9sdW1lQ29udHJvbChwbGF5ZXIsIGFkVW5pdCkge1xyXG4gICAgcGxheWVyLm9uKCd2b2x1bWVjaGFuZ2UnLCB1cGRhdGVBZFVuaXRWb2x1bWUpO1xyXG4gICAgYWRVbml0Lm9uKCdBZFZvbHVtZUNoYW5nZScsIHVwZGF0ZVBsYXllclZvbHVtZSk7XHJcblxyXG4gICAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHBsYXllci5vZmYoJ3ZvbHVtZWNoYW5nZScsIHVwZGF0ZUFkVW5pdFZvbHVtZSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gICAgZnVuY3Rpb24gdXBkYXRlQWRVbml0Vm9sdW1lKCkge1xyXG4gICAgICB2YXIgdm9sID0gcGxheWVyLm11dGVkKCkgPyAwIDogcGxheWVyLnZvbHVtZSgpO1xyXG4gICAgICBhZFVuaXQuc2V0QWRWb2x1bWUodm9sLCBsb2dFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUGxheWVyVm9sdW1lKCkge1xyXG4gICAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWb2x1bWVDaGFuZ2UnKTtcclxuICAgICAgdmFyIGxhc3RWb2x1bWUgPSBwbGF5ZXIudm9sdW1lKCk7XHJcbiAgICAgIGFkVW5pdC5nZXRBZFZvbHVtZShmdW5jdGlvbiAoZXJyb3IsIHZvbCkge1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgbG9nRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAobGFzdFZvbHVtZSAhPT0gdm9sKSB7XHJcbiAgICAgICAgICAgIHBsYXllci52b2x1bWUodm9sKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbGlua0Z1bGxTY3JlZW5Db250cm9sKHBsYXllciwgYWRVbml0LCBWSUVXX01PREUpIHtcclxuICAgIHZhciB1cGRhdGVWaWV3U2l6ZSA9IHJlc2l6ZUFkLmJpbmQodGhhdCwgcGxheWVyLCBhZFVuaXQsIFZJRVdfTU9ERSk7XHJcblxyXG4gICAgcGxheWVyLm9uKCdmdWxsc2NyZWVuY2hhbmdlJywgdXBkYXRlVmlld1NpemUpO1xyXG5cclxuICAgIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBwbGF5ZXIub2ZmKCdmdWxsc2NyZWVuY2hhbmdlJywgdXBkYXRlVmlld1NpemUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fc3RhcnRBZCA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xyXG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcclxuXHJcbiAgYWRVbml0LnN0YXJ0QWQoZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICBpZiAoIWVycm9yKSB7XHJcbiAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkU3RhcnQnKTtcclxuICAgIH1cclxuICAgIG5leHQoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcclxuICB9KTtcclxufTtcclxuXHJcblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2ZpbmlzaFBsYXlpbmcgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcclxuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XHJcbiAgYWRVbml0Lm9uKCdBZFN0b3BwZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFN0b3BwZWQnKTtcclxuICAgZmluaXNoUGxheWluZ0FkKG51bGwpO1xyXG4gIH0pO1xyXG5cclxuICBhZFVuaXQub24oJ0FkRXJyb3InLCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIHZhciBlcnJNc2cgPSBlcnJvcj8gZXJyb3IubWVzc2FnZSA6ICdvbiBWUEFJREludGVncmF0b3IsIGVycm9yIHdoaWxlIHdhaXRpbmcgZm9yIHRoZSBhZFVuaXQgdG8gZmluaXNoIHBsYXlpbmcnO1xyXG4gICAgZmluaXNoUGxheWluZ0FkKG5ldyBWQVNURXJyb3IoZXJyTXNnKSk7XHJcbiAgfSk7XHJcblxyXG4gIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cclxuICBmdW5jdGlvbiBmaW5pc2hQbGF5aW5nQWQoZXJyb3IpIHtcclxuICAgIG5leHQoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcclxuICB9XHJcbn07XHJcblxyXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl90cmFja0Vycm9yID0gZnVuY3Rpb24gdHJhY2tFcnJvcihyZXNwb25zZSwgZXJyb3JDb2RlKSB7XHJcbiAgdmFzdFV0aWwudHJhY2socmVzcG9uc2UuZXJyb3JVUkxNYWNyb3MsIHtFUlJPUkNPREU6IGVycm9yQ29kZSB8fCA5MDF9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlc2l6ZUFkKHBsYXllciwgYWRVbml0LCBWSUVXX01PREUpIHtcclxuICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xyXG4gIHZhciBkaW1lbnNpb24gPSBkb20uZ2V0RGltZW5zaW9uKHRlY2gpO1xyXG4gIHZhciBNT0RFID0gcGxheWVyLmlzRnVsbHNjcmVlbigpID8gVklFV19NT0RFLkZVTExTQ1JFRU4gOiBWSUVXX01PREUuTk9STUFMO1xyXG4gIGFkVW5pdC5yZXNpemVBZChkaW1lbnNpb24ud2lkdGgsIGRpbWVuc2lvbi5oZWlnaHQsIE1PREUsIGxvZ0Vycm9yKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9nRXJyb3IoZXJyb3IpIHtcclxuICBpZiAoZXJyb3IpIHtcclxuICAgIGxvZ2dlci5lcnJvciAoJ0VSUk9SOiAnICsgZXJyb3IubWVzc2FnZSwgZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREludGVncmF0b3I7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcclxuXHJcbnZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmVsZW1lbnQuY2xhc3NOYW1lID0gJ3Zqcy1hZHMtbGFiZWwgdmpzLWNvbnRyb2wgdmpzLWxhYmVsLWhpZGRlbic7XHJcbmVsZW1lbnQuaW5uZXJIVE1MID0gJ0FkdmVydGlzZW1lbnQnO1xyXG5cclxudmFyIEFkc0xhYmVsRmFjdG9yeSA9IGZ1bmN0aW9uKGJhc2VDb21wb25lbnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgLyoqIEBjb25zdHJ1Y3RvciAqL1xyXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgb3B0aW9ucy5lbCA9IGVsZW1lbnQ7XHJcbiAgICAgIGJhc2VDb21wb25lbnQuY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgLy8gV2UgYXN5bmNocm9ub3VzbHkgcmVwb3NpdGlvbiB0aGUgYWRzIGxhYmVsIGVsZW1lbnRcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lQ29tcCA9IHBsYXllci5jb250cm9sQmFyICYmKCBwbGF5ZXIuY29udHJvbEJhci5nZXRDaGlsZChcInRpbWVyQ29udHJvbHNcIikgfHwgcGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoXCJjdXJyZW50VGltZURpc3BsYXlcIikgKTtcclxuICAgICAgICBpZihjdXJyZW50VGltZUNvbXApIHtcclxuICAgICAgICAgIHBsYXllci5jb250cm9sQmFyLmVsKCkuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIGN1cnJlbnRUaW1lQ29tcC5lbCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKGVsZW1lbnQsICd2anMtbGFiZWwtaGlkZGVuJyk7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfSxcclxuXHJcbiAgICBlbDogZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQWRzTGFiZWxGYWN0b3J5OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBiYXNlVmlkZW9Kc0NvbXBvbmVudCA9IHZpZGVvanMuQ29tcG9uZW50O1xyXG5cclxudmFyIEFkc0xhYmVsID0gcmVxdWlyZSgnLi9hZHMtbGFiZWwnKShiYXNlVmlkZW9Kc0NvbXBvbmVudCk7XHJcblxyXG52aWRlb2pzLkFkc0xhYmVsID0gdmlkZW9qcy5Db21wb25lbnQuZXh0ZW5kKEFkc0xhYmVsKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBjb21wb25lbnQgdGhhdCBzaG93cyBhIGJsYWNrIHNjcmVlbiB1bnRpbCB0aGUgYWRzIHBsdWdpbiBoYXMgZGVjaWRlZCBpZiBpdCBjYW4gb3IgaXQgY2FuIG5vdCBwbGF5IHRoZSBhZC5cclxuICpcclxuICogTm90ZTogSW4gY2FzZSB5b3Ugd29uZGVyIHdoeSBpbnN0ZWFkIG9mIHRoaXMgYmxhY2sgcG9zdGVyIHdlIGRvbid0IGp1c3Qgc2hvdyB0aGUgc3Bpbm5lciBsb2FkZXIuXHJcbiAqICAgICAgIElPUyBkZXZpY2VzIGRvIG5vdCB3b3JrIHdlbGwgd2l0aCBhbmltYXRpb25zIGFuZCB0aGUgYnJvd3NlciBjaHJhc2hlcyBmcm9tIHRpbWUgdG8gdGltZSBUaGF0IGlzIHdoeSB3ZSBjaG9zZSB0b1xyXG4gKiAgICAgICBoYXZlIGEgc2Vjb25kYXJ5IGJsYWNrIHBvc3Rlci5cclxuICpcclxuICogICAgICAgSXQgYWxzbyBtYWtlcyBpdCBtdWNoIG1vcmUgZWFzaWVyIGZvciB0aGUgdXNlcnMgb2YgdGhlIHBsdWdpbiBzaW5jZSBpdCBkb2VzIG5vdCBjaGFuZ2UgdGhlIGRlZmF1bHQgYmVoYXZpb3VyIG9mIHRoZVxyXG4gKiAgICAgICBzcGlubmVyIGFuZCB0aGUgcGxheWVyIHdvcmtzIHRoZSBzYW1lIHdheSB3aXRoIGFuZCB3aXRob3V0IHRoZSBwbHVnaW4uXHJcbiAqXHJcbiAqIEBwYXJhbSB7dmpzLlBsYXllcnxPYmplY3R9IHBsYXllclxyXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG52YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxudmFyIEJsYWNrUG9zdGVyRmFjdG9yeSA9IGZ1bmN0aW9uKGJhc2VDb21wb25lbnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgLyoqIEBjb25zdHJ1Y3RvciAqL1xyXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChwbGF5ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgb3B0aW9ucy5lbCA9IGVsZW1lbnQ7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gJ3Zqcy1ibGFjay1wb3N0ZXInO1xyXG4gICAgICBiYXNlQ29tcG9uZW50LmNhbGwodGhpcywgcGxheWVyLCBvcHRpb25zKTtcclxuXHJcbiAgICAgIHZhciBwb3N0ZXJJbWcgPSBwbGF5ZXIuZ2V0Q2hpbGQoJ3Bvc3RlckltYWdlJyk7XHJcblxyXG4gICAgICAvL1dlIG5lZWQgdG8gZG8gaXQgYXN5bmNocm9ub3VzbHkgdG8gYmUgc3VyZSB0aGF0IHRoZSBibGFjayBwb3N0ZXIgZWwgaXMgb24gdGhlIGRvbS5cclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZihwb3N0ZXJJbWcgJiYgcGxheWVyICYmIHBsYXllci5lbCgpKSB7XHJcbiAgICAgICAgICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgcG9zdGVySW1nLmVsKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMCk7XHJcbiAgICB9LFxyXG4gICAgZWw6IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XHJcbiAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJsYWNrUG9zdGVyRmFjdG9yeTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgYmFzZVZpZGVvSnNDb21wb25lbnQgPSB2aWRlb2pzLkNvbXBvbmVudDtcclxuXHJcbnZhciBCbGFja1Bvc3RlciA9IHJlcXVpcmUoJy4vYmxhY2stcG9zdGVyJykoYmFzZVZpZGVvSnNDb21wb25lbnQpO1xyXG5cclxudmlkZW9qcy5CbGFja1Bvc3RlciA9IHZpZGVvanMuQ29tcG9uZW50LmV4dGVuZChCbGFja1Bvc3Rlcik7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBWQVNUQ2xpZW50ID0gcmVxdWlyZSgnLi4vYWRzL3Zhc3QvVkFTVENsaWVudCcpO1xyXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vYWRzL3Zhc3QvVkFTVEVycm9yJyk7XHJcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4uL2Fkcy92YXN0L3Zhc3RVdGlsJyk7XHJcblxyXG52YXIgVkFTVEludGVncmF0b3IgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC9WQVNUSW50ZWdyYXRvcicpO1xyXG52YXIgVlBBSURJbnRlZ3JhdG9yID0gcmVxdWlyZSgnLi4vYWRzL3ZwYWlkL1ZQQUlESW50ZWdyYXRvcicpO1xyXG5cclxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vdXRpbHMvYXN5bmMnKTtcclxudmFyIGRvbSA9IHJlcXVpcmUoJy4uL3V0aWxzL2RvbScpO1xyXG52YXIgcGxheWVyVXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy9wbGF5ZXJVdGlscycpO1xyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFZBU1RQbHVnaW4ob3B0aW9ucykge1xyXG4gIHZhciBzbmFwc2hvdDtcclxuICB2YXIgcGxheWVyID0gdGhpcztcclxuICB2YXIgdmFzdCA9IG5ldyBWQVNUQ2xpZW50KCk7XHJcbiAgdmFyIGFkc0NhbmNlbGVkID0gZmFsc2U7XHJcbiAgdmFyIGRlZmF1bHRPcHRzID0ge1xyXG4gICAgLy8gbWF4aW11bSBhbW91bnQgb2YgdGltZSBpbiBtcyB0byB3YWl0IHRvIHJlY2VpdmUgYGFkc3JlYWR5YCBmcm9tIHRoZSBhZFxyXG4gICAgLy8gaW1wbGVtZW50YXRpb24gYWZ0ZXIgcGxheSBoYXMgYmVlbiByZXF1ZXN0ZWQuIEFkIGltcGxlbWVudGF0aW9ucyBhcmVcclxuICAgIC8vIGV4cGVjdGVkIHRvIGxvYWQgYW55IGR5bmFtaWMgbGlicmFyaWVzIGFuZCBtYWtlIGFueSByZXF1ZXN0cyB0byBkZXRlcm1pbmVcclxuICAgIC8vIGFkIHBvbGljaWVzIGZvciBhIHZpZGVvIGR1cmluZyB0aGlzIHRpbWUuXHJcbiAgICB0aW1lb3V0OiA1MDAsXHJcblxyXG4gICAgLy9UT0RPOmZpbmlzaCB0aGlzIElPUyBGSVhcclxuICAgIC8vV2hlbmV2ZXIgeW91IHBsYXkgYW4gYWRkIG9uIElPUywgdGhlIG5hdGl2ZSBwbGF5ZXIga2lja3MgaW4gYW5kIHdlIGxvb3NlIGNvbnRyb2wgb2YgaXQuIE9uIHZlcnkgaGVhdnkgcGFnZXMgdGhlICdwbGF5JyBldmVudFxyXG4gICAgLy8gTWF5IG9jY3VyIGFmdGVyIHRoZSB2aWRlbyBjb250ZW50IGhhcyBhbHJlYWR5IHN0YXJ0ZWQuIFRoaXMgaXMgd3JvbmcgaWYgeW91IHdhbnQgdG8gcGxheSBhIHByZXJvbGwgYWQgdGhhdCBuZWVkcyB0byBoYXBwZW4gYmVmb3JlIHRoZSB1c2VyXHJcbiAgICAvLyBzdGFydHMgd2F0Y2hpbmcgdGhlIGNvbnRlbnQuIFRvIHByZXZlbnQgdGhpcyB1c2VjXHJcbiAgICBpb3NQcmVyb2xsQ2FuY2VsVGltZW91dDogMjAwMCxcclxuXHJcbiAgICAvLyBtYXhpbXVuIGFtb3VudCBvZiB0aW1lIGZvciB0aGUgYWQgdG8gYWN0dWFsbHkgc3RhcnQgcGxheWluZy4gSWYgdGhpcyB0aW1lb3V0IGdldHNcclxuICAgIC8vIHRyaWdnZXJlZCB0aGUgYWRzIHdpbGwgYmUgY2FuY2VsbGVkXHJcbiAgICBhZENhbmNlbFRpbWVvdXQ6IDMwMDAsXHJcblxyXG4gICAgLy8gQm9vbGVhbiBmbGFnIHRoYXQgY29uZmlndXJlcyB0aGUgcGxheWVyIHRvIHBsYXkgYSBuZXcgYWQgYmVmb3JlIHRoZSB1c2VyIHNlZXMgdGhlIHZpZGVvIGFnYWluXHJcbiAgICAvLyB0aGUgY3VycmVudCB2aWRlb1xyXG4gICAgcGxheUFkQWx3YXlzOiBmYWxzZSxcclxuXHJcbiAgICAvLyBGbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBhZHMgYnkgZGVmYXVsdC5cclxuICAgIGFkc0VuYWJsZWQ6IHRydWUsXHJcblxyXG4gICAgLy8gQm9vbGVhbiBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSByZXNpemUgd2l0aCB3aW5kb3cucmVzaXplIG9yIG9yaWVudGF0aW9uY2hhbmdlXHJcbiAgICBhdXRvUmVzaXplOiB0cnVlLFxyXG5cclxuICAgIC8vIFBhdGggdG8gdGhlIFZQQUlEIGZsYXNoIGFkJ3MgbG9hZGVyXHJcbiAgICB2cGFpZEZsYXNoTG9hZGVyUGF0aDogJy9WUEFJREZsYXNoLnN3ZicsXHJcblxyXG4gICAgLy8gdmVyYm9zaXR5IG9mIGNvbnNvbGUgbG9nZ2luZzpcclxuICAgIC8vIDAgLSBlcnJvclxyXG4gICAgLy8gMSAtIGVycm9yLCB3YXJuXHJcbiAgICAvLyAyIC0gZXJyb3IsIHdhcm4sIGluZm9cclxuICAgIC8vIDMgLSBlcnJvciwgd2FybiwgaW5mbywgbG9nXHJcbiAgICAvLyA0IC0gZXJyb3IsIHdhcm4sIGluZm8sIGxvZywgZGVidWdcclxuICAgIHZlcmJvc2l0eTogMFxyXG4gIH07XHJcblxyXG4gIHZhciBzZXR0aW5ncyA9IHV0aWxpdGllcy5leHRlbmQoe30sIGRlZmF1bHRPcHRzLCBvcHRpb25zIHx8IHt9KTtcclxuXHJcbiAgaWYodXRpbGl0aWVzLmlzVW5kZWZpbmVkKHNldHRpbmdzLmFkVGFnVXJsKSAmJiB1dGlsaXRpZXMuaXNEZWZpbmVkKHNldHRpbmdzLnVybCkpe1xyXG4gICAgc2V0dGluZ3MuYWRUYWdVcmwgPSBzZXR0aW5ncy51cmw7XHJcbiAgfVxyXG5cclxuICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKHNldHRpbmdzLmFkVGFnVXJsKSkge1xyXG4gICAgc2V0dGluZ3MuYWRUYWdVcmwgPSB1dGlsaXRpZXMuZWNob0ZuKHNldHRpbmdzLmFkVGFnVXJsKTtcclxuICB9XHJcblxyXG4gIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKHNldHRpbmdzLmFkVGFnWE1MKSAmJiAhdXRpbGl0aWVzLmlzRnVuY3Rpb24oc2V0dGluZ3MuYWRUYWdYTUwpKSB7XHJcbiAgICByZXR1cm4gdHJhY2tBZEVycm9yKG5ldyBWQVNURXJyb3IoJ29uIFZpZGVvSlMgVkFTVCBwbHVnaW4sIHRoZSBwYXNzZWQgYWRUYWdYTUwgb3B0aW9uIGRvZXMgbm90IGNvbnRhaW4gYSBmdW5jdGlvbicpKTtcclxuICB9XHJcblxyXG4gIGlmICghdXRpbGl0aWVzLmlzRGVmaW5lZChzZXR0aW5ncy5hZFRhZ1VybCkgJiYgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKHNldHRpbmdzLmFkVGFnWE1MKSkge1xyXG4gICAgcmV0dXJuIHRyYWNrQWRFcnJvcihuZXcgVkFTVEVycm9yKCdvbiBWaWRlb0pTIFZBU1QgcGx1Z2luLCBtaXNzaW5nIGFkVGFnVXJsIG9uIG9wdGlvbnMgb2JqZWN0JykpO1xyXG4gIH1cclxuXHJcbiAgbG9nZ2VyLnNldFZlcmJvc2l0eSAoc2V0dGluZ3MudmVyYm9zaXR5KTtcclxuXHJcbiAgdmFzdFV0aWwucnVuRmxhc2hTdXBwb3J0Q2hlY2soc2V0dGluZ3MudnBhaWRGbGFzaExvYWRlclBhdGgpOy8vIE5lY2Vzc2FyeSBzdGVwIGZvciBWUEFJREZMQVNIQ2xpZW50IHRvIHdvcmsuXHJcblxyXG4gIHBsYXllclV0aWxzLnByZXBhcmVGb3JBZHMocGxheWVyKTtcclxuXHJcbiAgaWYgKHNldHRpbmdzLnBsYXlBZEFsd2F5cykge1xyXG4gICAgLy8gTm8gbWF0dGVyIHdoYXQgaGFwcGVucyB3ZSBwbGF5IGEgbmV3IGFkIGJlZm9yZSB0aGUgdXNlciBzZWVzIHRoZSB2aWRlbyBhZ2Fpbi5cclxuICAgIHBsYXllci5vbigndmFzdC5jb250ZW50RW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5yZXNldCcpO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKHNldHRpbmdzLnByZWZldGNoQWRUYWcpIHtcclxuICAgIHRyeVRvUGxheVByZXJvbGxBZCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwbGF5ZXIub24oJ3Zhc3QuZmlyc3RQbGF5JywgdHJ5VG9QbGF5UHJlcm9sbEFkKTtcclxuICB9XHJcblxyXG5cclxuICBwbGF5ZXIub24oJ3Zhc3QucmVzZXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvL0lmIHdlIGFyZSByZXNldGluZyB0aGUgcGx1Z2luLCB3ZSBkb24ndCB3YW50IHRvIHJlc3RvcmUgdGhlIGNvbnRlbnRcclxuICAgIHNuYXBzaG90ID0gbnVsbDtcclxuICAgIGNhbmNlbEFkcygpO1xyXG4gIH0pO1xyXG5cclxuICBwbGF5ZXIudmFzdCA9IHtcclxuICAgIGlzRW5hYmxlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gc2V0dGluZ3MuYWRzRW5hYmxlZDtcclxuICAgIH0sXHJcblxyXG4gICAgZW5hYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldHRpbmdzLmFkc0VuYWJsZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaXNhYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldHRpbmdzLmFkc0VuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gcGxheWVyLnZhc3Q7XHJcblxyXG4gIC8qKioqIExvY2FsIGZ1bmN0aW9ucyAqKioqL1xyXG4gIGZ1bmN0aW9uIHRyeVRvUGxheVByZXJvbGxBZCgpIHtcclxuICAgIC8vV2UgcmVtb3ZlIHRoZSBwb3N0ZXIgdG8gcHJldmVudCBmbGlja2VyaW5nIHdoZW5ldmVyIHRoZSBjb250ZW50IHN0YXJ0cyBwbGF5aW5nXHJcbiAgICBwbGF5ZXJVdGlscy5yZW1vdmVOYXRpdmVQb3N0ZXIocGxheWVyKTtcclxuXHJcbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkc0NhbmNlbCcsICd2YXN0LmFkRW5kJ10sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmVtb3ZlQWRVbml0KCk7XHJcbiAgICAgIHJlc3RvcmVWaWRlb0NvbnRlbnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFzeW5jLndhdGVyZmFsbChbXHJcbiAgICAgIGNoZWNrQWRzRW5hYmxlZCxcclxuICAgICAgcHJlcGFyZVBsYXllckZvckFkLFxyXG4gICAgICBzdGFydEFkQ2FuY2VsVGltZW91dCxcclxuICAgICAgcGxheVByZXJvbGxBZFxyXG4gICAgXSwgZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSkge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICB0cmFja0FkRXJyb3IoZXJyb3IsIHJlc3BvbnNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZEVuZCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWRVbml0KCkge1xyXG4gICAgICBpZiAocGxheWVyLnZhc3QgJiYgcGxheWVyLnZhc3QuYWRVbml0KSB7XHJcbiAgICAgICAgcGxheWVyLnZhc3QuYWRVbml0ID0gbnVsbDsgLy9XZSByZW1vdmUgdGhlIGFkVW5pdFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzdG9yZVZpZGVvQ29udGVudCgpIHtcclxuICAgICAgc2V0dXBDb250ZW50RXZlbnRzKCk7XHJcbiAgICAgIGlmIChzbmFwc2hvdCkge1xyXG4gICAgICAgIHBsYXllclV0aWxzLnJlc3RvcmVQbGF5ZXJTbmFwc2hvdChwbGF5ZXIsIHNuYXBzaG90KTtcclxuICAgICAgICBzbmFwc2hvdCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXR1cENvbnRlbnRFdmVudHMoKSB7XHJcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnLCAndmFzdC5yZXNldCcsICd2YXN0LmZpcnN0UGxheSddLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgaWYgKGV2dC50eXBlICE9PSAncGxheWluZycpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmNvbnRlbnRTdGFydCcpO1xyXG5cclxuICAgICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydlbmRlZCcsICd2YXN0LnJlc2V0JywgJ3Zhc3QuZmlyc3RQbGF5J10sIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2VuZGVkJykge1xyXG4gICAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5jb250ZW50RW5kJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrQWRzRW5hYmxlZChuZXh0KSB7XHJcbiAgICAgIGlmIChzZXR0aW5ncy5hZHNFbmFibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5leHQobnVsbCk7XHJcbiAgICAgIH1cclxuICAgICAgbmV4dChuZXcgVkFTVEVycm9yKCdBZHMgYXJlIG5vdCBlbmFibGVkJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHByZXBhcmVQbGF5ZXJGb3JBZChuZXh0KSB7XHJcbiAgICAgIGlmIChjYW5QbGF5UHJlcm9sbEFkKCkpIHtcclxuICAgICAgICBzbmFwc2hvdCA9IHBsYXllclV0aWxzLmdldFBsYXllclNuYXBzaG90KHBsYXllcik7XHJcbiAgICAgICAgcGxheWVyLnBhdXNlKCk7XHJcbiAgICAgICAgYWRkU3Bpbm5lckljb24oKTtcclxuXHJcbiAgICAgICAgaWYocGxheWVyLnBhdXNlZCgpKSB7XHJcbiAgICAgICAgICBuZXh0KG51bGwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydwbGF5aW5nJ10sIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcclxuICAgICAgICAgICAgbmV4dChudWxsKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXh0KG5ldyBWQVNURXJyb3IoJ3ZpZGVvIGNvbnRlbnQgaGFzIGJlZW4gcGxheWluZyBiZWZvcmUgcHJlcm9sbCBhZCcpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhblBsYXlQcmVyb2xsQWQoKSB7XHJcbiAgICAgIHJldHVybiAhdXRpbGl0aWVzLmlzSVBob25lKCkgfHwgcGxheWVyLmN1cnJlbnRUaW1lKCkgPD0gc2V0dGluZ3MuaW9zUHJlcm9sbENhbmNlbFRpbWVvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnRBZENhbmNlbFRpbWVvdXQobmV4dCkge1xyXG4gICAgICB2YXIgYWRDYW5jZWxUaW1lb3V0SWQ7XHJcbiAgICAgIGFkc0NhbmNlbGVkID0gZmFsc2U7XHJcblxyXG4gICAgICBhZENhbmNlbFRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRyYWNrQWRFcnJvcihuZXcgVkFTVEVycm9yKCd0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIHRoZSB2aWRlbyB0byBzdGFydCBwbGF5aW5nJywgNDAyKSk7XHJcbiAgICAgIH0sIHNldHRpbmdzLmFkQ2FuY2VsVGltZW91dCk7XHJcblxyXG4gICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkU3RhcnQnLCAndmFzdC5hZHNDYW5jZWwnXSwgY2xlYXJBZENhbmNlbFRpbWVvdXQpO1xyXG5cclxuICAgICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gICAgICBmdW5jdGlvbiBjbGVhckFkQ2FuY2VsVGltZW91dCgpIHtcclxuICAgICAgICBpZiAoYWRDYW5jZWxUaW1lb3V0SWQpIHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dChhZENhbmNlbFRpbWVvdXRJZCk7XHJcbiAgICAgICAgICBhZENhbmNlbFRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBuZXh0KG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFNwaW5uZXJJY29uKCkge1xyXG4gICAgICBkb20uYWRkQ2xhc3MocGxheWVyLmVsKCksICd2anMtdmFzdC1hZC1sb2FkaW5nJyk7XHJcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRTdGFydCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVTcGlubmVySWNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3Bpbm5lckljb24oKSB7XHJcbiAgICAgIC8vSU1QT1JUQU5UIE5PVEU6IFdlIHJlbW92ZSB0aGUgc3Bpbm5lckljb24gYXN5bmNocm9ub3VzbHkgdG8gZ2l2ZSB0aW1lIHRvIHRoZSBicm93c2VyIHRvIHN0YXJ0IHRoZSB2aWRlby5cclxuICAgICAgLy8gSWYgd2UgcmVtb3ZlIGl0IHN5bmNocm9ub3VzbHkgd2Ugc2VlIGEgZmxhc2ggb2YgdGhlIGNvbnRlbnQgdmlkZW8gYmVmb3JlIHRoZSBhZCBzdGFydHMgcGxheWluZy5cclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHBsYXllci5lbCgpLCAndmpzLXZhc3QtYWQtbG9hZGluZycpO1xyXG4gICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhbmNlbEFkcygpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkc0NhbmNlbCcpO1xyXG4gICAgYWRzQ2FuY2VsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxheVByZXJvbGxBZChjYWxsYmFjaykge1xyXG4gICAgYXN5bmMud2F0ZXJmYWxsKFtcclxuICAgICAgZ2V0VmFzdFJlc3BvbnNlLFxyXG4gICAgICBwbGF5QWRcclxuICAgIF0sIGNhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFZhc3RSZXNwb25zZShjYWxsYmFjaykge1xyXG4gICAgdmFzdC5nZXRWQVNUUmVzcG9uc2Uoc2V0dGluZ3MuYWRUYWdVcmwgPyBzZXR0aW5ncy5hZFRhZ1VybCgpIDogc2V0dGluZ3MuYWRUYWdYTUwsIGNhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYXlBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XHJcbiAgICAvL1RPRE86IEZpbmQgYSBiZXR0ZXIgd2F5IHRvIHN0b3AgdGhlIHBsYXkuIFRoZSAncGxheVByZXJvbGxXYXRlcmZhbGwnIGVuZHMgaW4gYW4gaW5jb25zaXN0ZW50IHNpdHVhdGlvblxyXG4gICAgLy9JZiB0aGUgc3RhdGUgaXMgbm90ICdwcmVyb2xsPycgaXQgbWVhbnMgdGhlIGFkcyB3ZXJlIGNhbmNlbGVkIHRoZXJlZm9yZSwgd2UgYnJlYWsgdGhlIHdhdGVyZmFsbFxyXG4gICAgaWYgKGFkc0NhbmNlbGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYWRJbnRlZ3JhdG9yID0gaXNWUEFJRCh2YXN0UmVzcG9uc2UpID8gbmV3IFZQQUlESW50ZWdyYXRvcihwbGF5ZXIsIHNldHRpbmdzKSA6IG5ldyBWQVNUSW50ZWdyYXRvcihwbGF5ZXIpO1xyXG4gICAgdmFyIGFkRmluaXNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkU3RhcnQnLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBpZiAoZXZ0LnR5cGUgPT09ICd2YXN0LmFkU3RhcnQnKSB7XHJcbiAgICAgICAgYWRkQWRzTGFiZWwoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVBZHNMYWJlbCk7XHJcblxyXG4gICAgaWYgKHV0aWxpdGllcy5pc0lEZXZpY2UoKSkge1xyXG4gICAgICBwcmV2ZW50TWFudWFsUHJvZ3Jlc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXIudmFzdC52YXN0UmVzcG9uc2UgPSB2YXN0UmVzcG9uc2U7XHJcbiAgICBsb2dnZXIuZGVidWcgKFwiY2FsbGluZyBhZEludGVncmF0b3IucGxheUFkKCkgd2l0aCB2YXN0UmVzcG9uc2U6XCIsIHZhc3RSZXNwb25zZSk7XHJcblxyXG4gICAgaWYgKHNldHRpbmdzLnByZWZldGNoQWRUYWcpIHtcclxuICAgICAgcGxheWVyLm9uZSgncGxheScsIF9wbGF5QWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX3BsYXlBZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9wbGF5QWQoKSB7XHJcbiAgICAgIHBsYXllci52YXN0LmFkVW5pdCA9IGFkSW50ZWdyYXRvci5wbGF5QWQodmFzdFJlc3BvbnNlLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqKi9cclxuICAgIGZ1bmN0aW9uIGFkZEFkc0xhYmVsKCkge1xyXG4gICAgICBpZiAoYWRGaW5pc2hlZCB8fCBwbGF5ZXIuY29udHJvbEJhci5nZXRDaGlsZCgnQWRzTGFiZWwnKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcGxheWVyLmNvbnRyb2xCYXIuYWRkQ2hpbGQoJ0Fkc0xhYmVsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWRzTGFiZWwoKSB7XHJcbiAgICAgIHBsYXllci5jb250cm9sQmFyLnJlbW92ZUNoaWxkKCdBZHNMYWJlbCcpO1xyXG4gICAgICBhZEZpbmlzaGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcmV2ZW50TWFudWFsUHJvZ3Jlc3MoKSB7XHJcbiAgICAgIC8vSU9TIHZpZGVvIGNsb2NrIGlzIHZlcnkgdW5yZWxpYWJsZSBhbmQgd2UgbmVlZCBhIDMgc2Vjb25kcyB0aHJlc2hvbGQgdG8gZW5zdXJlIHRoYXQgdGhlIHVzZXIgZm9yd2FyZGVkL3Jld291bmQgdGhlIGFkXHJcbiAgICAgIHZhciBQUk9HUkVTU19USFJFU0hPTEQgPSAzO1xyXG4gICAgICB2YXIgcHJldmlvdXNUaW1lID0gMDtcclxuICAgICAgdmFyIHNraXBhZF9hdHRlbXB0cyA9IDA7XHJcblxyXG4gICAgICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCBwcmV2ZW50QWRTZWVrKTtcclxuICAgICAgcGxheWVyLm9uKCdlbmRlZCcsIHByZXZlbnRBZFNraXApO1xyXG5cclxuICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCcsICd2YXN0LmFkRXJyb3InXSwgc3RvcFByZXZlbnRNYW51YWxQcm9ncmVzcyk7XHJcblxyXG4gICAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXHJcbiAgICAgIGZ1bmN0aW9uIHByZXZlbnRBZFNraXAoKSB7XHJcbiAgICAgICAgLy8gSWdub3JlIGVuZGVkIGV2ZW50IGlmIHRoZSBBZCB0aW1lIHdhcyBub3QgJ25lYXInIHRoZSBlbmRcclxuICAgICAgICAvLyBhbmQgcmV2ZXJ0IHRpbWUgdG8gdGhlIHByZXZpb3VzICd2YWxpZCcgdGltZVxyXG4gICAgICAgIGlmICgocGxheWVyLmR1cmF0aW9uKCkgLSBwcmV2aW91c1RpbWUpID4gUFJPR1JFU1NfVEhSRVNIT0xEKSB7XHJcbiAgICAgICAgICBwbGF5ZXIucGF1c2UodHJ1ZSk7IC8vIHRoaXMgcmVkdWNlIHRoZSB2aWRlbyBqaXR0ZXIgaWYgdGhlIElPUyBza2lwIGJ1dHRvbiBpcyBwcmVzc2VkXHJcbiAgICAgICAgICBwbGF5ZXIucGxheSh0cnVlKTsgLy8gd2UgbmVlZCB0byB0cmlnZ2VyIHRoZSBwbGF5IHRvIHB1dCB0aGUgdmlkZW8gZWxlbWVudCBiYWNrIGluIGEgdmFsaWQgc3RhdGVcclxuICAgICAgICAgIHBsYXllci5jdXJyZW50VGltZShwcmV2aW91c1RpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gcHJldmVudEFkU2VlaygpIHtcclxuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBwbGF5ZXIuY3VycmVudFRpbWUoKTtcclxuICAgICAgICB2YXIgcHJvZ3Jlc3NEZWx0YSA9IE1hdGguYWJzKGN1cnJlbnRUaW1lIC0gcHJldmlvdXNUaW1lKTtcclxuICAgICAgICBpZiAocHJvZ3Jlc3NEZWx0YSA+IFBST0dSRVNTX1RIUkVTSE9MRCkge1xyXG4gICAgICAgICAgc2tpcGFkX2F0dGVtcHRzICs9IDE7XHJcbiAgICAgICAgICBpZiAoc2tpcGFkX2F0dGVtcHRzID49IDIpIHtcclxuICAgICAgICAgICAgcGxheWVyLnBhdXNlKHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcGxheWVyLmN1cnJlbnRUaW1lKHByZXZpb3VzVGltZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHByZXZpb3VzVGltZSA9IGN1cnJlbnRUaW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gc3RvcFByZXZlbnRNYW51YWxQcm9ncmVzcygpIHtcclxuICAgICAgICBwbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgcHJldmVudEFkU2Vlayk7XHJcbiAgICAgICAgcGxheWVyLm9mZignZW5kZWQnLCBwcmV2ZW50QWRTa2lwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdHJhY2tBZEVycm9yKGVycm9yLCB2YXN0UmVzcG9uc2UpIHtcclxuICAgIHBsYXllci50cmlnZ2VyKHt0eXBlOiAndmFzdC5hZEVycm9yJywgZXJyb3I6IGVycm9yfSk7XHJcbiAgICBjYW5jZWxBZHMoKTtcclxuICAgIGxvZ2dlci5lcnJvciAoJ0FEIEVSUk9SOicsIGVycm9yLm1lc3NhZ2UsIGVycm9yLCB2YXN0UmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNWUEFJRCh2YXN0UmVzcG9uc2UpIHtcclxuICAgIHZhciBpLCBsZW47XHJcbiAgICB2YXIgbWVkaWFGaWxlcyA9IHZhc3RSZXNwb25zZS5tZWRpYUZpbGVzO1xyXG4gICAgZm9yIChpID0gMCwgbGVuID0gbWVkaWFGaWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBpZiAodmFzdFV0aWwuaXNWUEFJRChtZWRpYUZpbGVzW2ldKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59OyIsIi8vU21hbGwgc3Vic2V0IG9mIGFzeW5jXHJcblxyXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XHJcblxyXG52YXIgYXN5bmMgPSB7fTtcclxuXHJcbmFzeW5jLnNldEltbWVkaWF0ZSA9IGZ1bmN0aW9uIChmbikge1xyXG4gIHNldFRpbWVvdXQoZm4sIDApO1xyXG59O1xyXG5cclxuYXN5bmMuaXRlcmF0b3IgPSBmdW5jdGlvbiAodGFza3MpIHtcclxuICB2YXIgbWFrZUNhbGxiYWNrID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICB2YXIgZm4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcclxuICAgICAgICB0YXNrc1tpbmRleF0uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZm4ubmV4dCgpO1xyXG4gICAgfTtcclxuICAgIGZuLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiAoaW5kZXggPCB0YXNrcy5sZW5ndGggLSAxKSA/IG1ha2VDYWxsYmFjayhpbmRleCArIDEpIDogbnVsbDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZm47XHJcbiAgfTtcclxuICByZXR1cm4gbWFrZUNhbGxiYWNrKDApO1xyXG59O1xyXG5cclxuXHJcbmFzeW5jLndhdGVyZmFsbCA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcclxuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHsgfTtcclxuICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KHRhc2tzKSkge1xyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgdG8gd2F0ZXJmYWxsIG11c3QgYmUgYW4gYXJyYXkgb2YgZnVuY3Rpb25zJyk7XHJcbiAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcclxuICB9XHJcbiAgaWYgKCF0YXNrcy5sZW5ndGgpIHtcclxuICAgIHJldHVybiBjYWxsYmFjaygpO1xyXG4gIH1cclxuICB2YXIgd3JhcEl0ZXJhdG9yID0gZnVuY3Rpb24gKGl0ZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVycikge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcclxuICAgICAgICB2YXIgbmV4dCA9IGl0ZXJhdG9yLm5leHQoKTtcclxuICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgYXJncy5wdXNoKHdyYXBJdGVyYXRvcihuZXh0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgYXJncy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMuc2V0SW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGl0ZXJhdG9yLmFwcGx5KG51bGwsIGFyZ3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgd3JhcEl0ZXJhdG9yKGFzeW5jLml0ZXJhdG9yKHRhc2tzKSkoKTtcclxufTtcclxuXHJcbmFzeW5jLndoZW4gPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBjYWxsYmFjaykge1xyXG4gIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJhc3luYy53aGVuIGVycm9yOiBtaXNzaW5nIGNhbGxiYWNrIGFyZ3VtZW50XCIpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGlzQWxsb3dlZCA9IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNvbmRpdGlvbikgPyBjb25kaXRpb24gOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gISFjb25kaXRpb247XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhcmdzID0gdXRpbGl0aWVzLmFycmF5TGlrZU9ialRvQXJyYXkoYXJndW1lbnRzKTtcclxuICAgIHZhciBuZXh0ID0gYXJncy5wb3AoKTtcclxuXHJcbiAgICBpZiAoaXNBbGxvd2VkLmFwcGx5KG51bGwsIGFyZ3MpKSB7XHJcbiAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFyZ3MudW5zaGlmdChudWxsKTtcclxuICAgIHJldHVybiBuZXh0LmFwcGx5KG51bGwsIGFyZ3MpO1xyXG4gIH07XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFzeW5jO1xyXG5cclxuIiwiLypqc2hpbnQgdW51c2VkOmZhbHNlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIF92ZXJib3NpdHkgPSAwO1xyXG52YXIgX3ByZWZpeCA9IFwiW3ZpZGVvanMtdmFzdC12cGFpZF0gXCI7XHJcblxyXG5mdW5jdGlvbiBzZXRWZXJib3NpdHkgKHYpXHJcbntcclxuICAgIF92ZXJib3NpdHkgPSB2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVNc2cgKG1ldGhvZCwgYXJncylcclxue1xyXG4gICAgaWYgKChhcmdzLmxlbmd0aCkgPiAwICYmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpKVxyXG4gICAge1xyXG4gICAgICAgIGFyZ3NbMF0gPSBfcHJlZml4ICsgYXJnc1swXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWV0aG9kLmFwcGx5KVxyXG4gICAge1xyXG4gICAgICAgIG1ldGhvZC5hcHBseSAoY29uc29sZSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncykpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIG1ldGhvZCAoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncykpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWJ1ZyAoKVxyXG57XHJcbiAgICBpZiAoX3ZlcmJvc2l0eSA8IDQpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgY29uc29sZS5kZWJ1ZyA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gSUUgMTAgZG9lc24ndCBoYXZlIGEgY29uc29sZS5kZWJ1ZygpIGZ1bmN0aW9uXHJcbiAgICAgICAgaGFuZGxlTXNnIChjb25zb2xlLmxvZywgYXJndW1lbnRzKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBoYW5kbGVNc2cgKGNvbnNvbGUuZGVidWcsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZyAoKVxyXG57XHJcbiAgICBpZiAoX3ZlcmJvc2l0eSA8IDMpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU1zZyAoY29uc29sZS5sb2csIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluZm8gKClcclxue1xyXG4gICAgaWYgKF92ZXJib3NpdHkgPCAyKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNc2cgKGNvbnNvbGUuaW5mbywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHdhcm4gKClcclxue1xyXG4gICAgaWYgKF92ZXJib3NpdHkgPCAxKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVNc2cgKGNvbnNvbGUud2FybiwgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXJyb3IgKClcclxue1xyXG4gICAgaGFuZGxlTXNnIChjb25zb2xlLmVycm9yLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG52YXIgY29uc29sZUxvZ2dlciA9IHtcclxuICAgIHNldFZlcmJvc2l0eTogc2V0VmVyYm9zaXR5LFxyXG4gICAgZGVidWc6IGRlYnVnLFxyXG4gICAgbG9nOiBsb2csXHJcbiAgICBpbmZvOiBpbmZvLFxyXG4gICAgd2Fybjogd2FybixcclxuICAgIGVycm9yOiBlcnJvclxyXG59O1xyXG5cclxuaWYgKCh0eXBlb2YgKGNvbnNvbGUpID09PSAndW5kZWZpbmVkJykgfHwgIWNvbnNvbGUubG9nKVxyXG57XHJcbiAgICAvLyBubyBjb25zb2xlIGF2YWlsYWJsZTsgbWFrZSBmdW5jdGlvbnMgbm8tb3BcclxuICAgIGNvbnNvbGVMb2dnZXIuZGVidWcgPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgIGNvbnNvbGVMb2dnZXIubG9nID0gZnVuY3Rpb24gKCkge307XHJcbiAgICBjb25zb2xlTG9nZ2VyLmluZm8gPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgIGNvbnNvbGVMb2dnZXIud2FybiA9IGZ1bmN0aW9uICgpIHt9O1xyXG4gICAgY29uc29sZUxvZ2dlci5lcnJvciA9IGZ1bmN0aW9uICgpIHt9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnNvbGVMb2dnZXI7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxudmFyIGRvbSA9IHt9O1xyXG5cclxuZG9tLmlzVmlzaWJsZSA9IGZ1bmN0aW9uIGlzVmlzaWJsZShlbCkge1xyXG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcclxuICByZXR1cm4gc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbic7XHJcbn07XHJcblxyXG5kb20uaXNIaWRkZW4gPSBmdW5jdGlvbiBpc0hpZGRlbihlbCkge1xyXG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcclxuICByZXR1cm4gc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnO1xyXG59O1xyXG5cclxuZG9tLmlzU2hvd24gPSBmdW5jdGlvbiBpc1Nob3duKGVsKSB7XHJcbiAgcmV0dXJuICFkb20uaXNIaWRkZW4oZWwpO1xyXG59O1xyXG5cclxuZG9tLmhpZGUgPSBmdW5jdGlvbiBoaWRlKGVsKSB7XHJcbiAgZWwuX19wcmV2X3N0eWxlX2Rpc3BsYXlfID0gZWwuc3R5bGUuZGlzcGxheTtcclxuICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59O1xyXG5cclxuZG9tLnNob3cgPSBmdW5jdGlvbiBzaG93KGVsKSB7XHJcbiAgaWYgKGRvbS5pc0hpZGRlbihlbCkpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBlbC5fX3ByZXZfc3R5bGVfZGlzcGxheV87XHJcbiAgfVxyXG4gIGVsLl9fcHJldl9zdHlsZV9kaXNwbGF5XyA9IHVuZGVmaW5lZDtcclxufTtcclxuXHJcbmRvbS5oYXNDbGFzcyA9IGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjc3NDbGFzcykge1xyXG4gIHZhciBjbGFzc2VzLCBpLCBsZW47XHJcblxyXG4gIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcykpIHtcclxuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcclxuICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3NlcyA9IHV0aWxpdGllcy5pc1N0cmluZyhlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpID8gZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KC9cXHMrLykgOiBbXTtcclxuICAgIGNzc0NsYXNzID0gKGNzc0NsYXNzIHx8ICcnKTtcclxuXHJcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBjbGFzc2VzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XHJcbiAgICAgIGlmIChjbGFzc2VzW2ldID09PSBjc3NDbGFzcykge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmRvbS5hZGRDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY3NzQ2xhc3MpIHtcclxuICB2YXIgY2xhc3NlcztcclxuXHJcbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzKSkge1xyXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xyXG4gICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3NlcyA9IHV0aWxpdGllcy5pc1N0cmluZyhlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpID8gZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KC9cXHMrLykgOiBbXTtcclxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoY3NzQ2xhc3MpICYmIHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzLnJlcGxhY2UoL1xccysvLCAnJykpKSB7XHJcbiAgICAgIGNsYXNzZXMucHVzaChjc3NDbGFzcyk7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc2VzLmpvaW4oJyAnKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZG9tLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGVsLCBjc3NDbGFzcykge1xyXG4gIHZhciBjbGFzc2VzO1xyXG5cclxuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MpKSB7XHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGFzc2VzID0gdXRpbGl0aWVzLmlzU3RyaW5nKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkgPyBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoL1xccysvKSA6IFtdO1xyXG4gICAgdmFyIG5ld0NsYXNzZXMgPSBbXTtcclxuICAgIHZhciBpLCBsZW47XHJcbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGNzc0NsYXNzKSAmJiB1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcy5yZXBsYWNlKC9cXHMrLywgJycpKSkge1xyXG5cclxuICAgICAgZm9yIChpID0gMCwgbGVuID0gY2xhc3Nlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xyXG4gICAgICAgIGlmIChjc3NDbGFzcyAhPT0gY2xhc3Nlc1tpXSkge1xyXG4gICAgICAgICAgbmV3Q2xhc3Nlcy5wdXNoKGNsYXNzZXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbmV3Q2xhc3Nlcy5qb2luKCcgJykpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmRvbS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcikge1xyXG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KGVsKSl7XHJcbiAgICB1dGlsaXRpZXMuZm9yRWFjaChlbCwgZnVuY3Rpb24oZSkge1xyXG4gICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlLCB0eXBlLCBoYW5kbGVyKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYodXRpbGl0aWVzLmlzQXJyYXkodHlwZSkpe1xyXG4gICAgdXRpbGl0aWVzLmZvckVhY2godHlwZSwgZnVuY3Rpb24odCkge1xyXG4gICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlbCwgdCwgaGFuZGxlcik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICB9IGVsc2UgaWYgKGVsLmF0dGFjaEV2ZW50KSB7XHJcbiAgICAvLyBXQVJOSU5HISEhIHRoaXMgaXMgYSB2ZXJ5IG5haXZlIGltcGxlbWVudGF0aW9uICFcclxuICAgIC8vIHRoZSBldmVudCBvYmplY3QgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBoYW5kbGVyXHJcbiAgICAvLyB3b3VsZCBub3QgYmUgdGhlcmUgZm9yIElFOFxyXG4gICAgLy8gd2Ugc2hvdWxkIHVzZSBcIndpbmRvdy5ldmVudFwiIGFuZCB0aGVuIFwiZXZlbnQuc3JjRWxlbWVudFwiXHJcbiAgICAvLyBpbnN0ZWFkIG9mIFwiZXZlbnQudGFyZ2V0XCJcclxuICAgIGVsLmF0dGFjaEV2ZW50KFwib25cIiArIHR5cGUsIGhhbmRsZXIpO1xyXG4gIH1cclxufTtcclxuXHJcbmRvbS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcikge1xyXG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KGVsKSl7XHJcbiAgICB1dGlsaXRpZXMuZm9yRWFjaChlbCwgZnVuY3Rpb24oZSkge1xyXG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCB0eXBlLCBoYW5kbGVyKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYodXRpbGl0aWVzLmlzQXJyYXkodHlwZSkpe1xyXG4gICAgdXRpbGl0aWVzLmZvckVhY2godHlwZSwgZnVuY3Rpb24odCkge1xyXG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdCwgaGFuZGxlcik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChlbC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XHJcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcclxuICB9IGVsc2UgaWYgKGVsLmRldGFjaEV2ZW50KSB7XHJcbiAgICBlbC5kZXRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBoYW5kbGVyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZWxbXCJvblwiICsgdHlwZV0gPSBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbmRvbS5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbCwgZXZlbnQpIHtcclxuICBpZiAoZWwuZGlzcGF0Y2hFdmVudCkge1xyXG4gICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVsLmZpcmVFdmVudChcIm9uXCIgKyBldmVudC5ldmVudFR5cGUsIGV2ZW50KTtcclxuICB9XHJcbn07XHJcblxyXG5kb20uaXNEZXNjZW5kYW50ID0gZnVuY3Rpb24gaXNEZXNjZW5kYW50KHBhcmVudCwgY2hpbGQpIHtcclxuICB2YXIgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGU7XHJcbiAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcclxuICAgIGlmIChub2RlID09PSBwYXJlbnQpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5kb20uZ2V0VGV4dENvbnRlbnQgPSBmdW5jdGlvbiBnZXRUZXh0Q29udGVudChlbCl7XHJcbiAgcmV0dXJuIGVsLnRleHRDb250ZW50IHx8IGVsLnRleHQ7XHJcbn07XHJcblxyXG5kb20ucHJlcGVuZENoaWxkID0gZnVuY3Rpb24gcHJlcGVuZENoaWxkKHBhcmVudCwgY2hpbGQpIHtcclxuICBpZihjaGlsZC5wYXJlbnROb2RlKXtcclxuICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gIH1cclxuICByZXR1cm4gcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xyXG59O1xyXG5cclxuZG9tLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSl7XHJcbiAgaWYobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpe1xyXG4gICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmRvbS5pc0RvbUVsZW1lbnQgPSBmdW5jdGlvbiBpc0RvbUVsZW1lbnQobykge1xyXG4gIHJldHVybiBvIGluc3RhbmNlb2YgRWxlbWVudDtcclxufTtcclxuXHJcbmRvbS5jbGljayA9IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKSB7XHJcbiAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZWwsICdjbGljaycsIGhhbmRsZXIpO1xyXG59O1xyXG5cclxuZG9tLm9uY2UgPSBmdW5jdGlvbihlbCwgdHlwZSwgaGFuZGxlcikge1xyXG4gIGZ1bmN0aW9uIGhhbmRsZXJXcmFwKCkge1xyXG4gICAgaGFuZGxlci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG4gICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsIHR5cGUsIGhhbmRsZXJXcmFwKTtcclxuICB9XHJcblxyXG4gIGRvbS5hZGRFdmVudExpc3RlbmVyKGVsLCB0eXBlLCBoYW5kbGVyV3JhcCk7XHJcbn07XHJcblxyXG4vL05vdGU6IHRoZXJlIGlzIG5vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBvbiBpUGFkIHNvIHdlIG5lZWQgYSBmYWxsYmFja1xyXG5kb20uZ2V0RGltZW5zaW9uID0gZnVuY3Rpb24gZ2V0RGltZW5zaW9uKGVsZW1lbnQpIHtcclxuICB2YXIgcmVjdDtcclxuXHJcbiAgLy9PbiBJRTkgYW5kIGJlbG93IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBkb2VzIG5vdCB3b3JrIGNvbnNpc3RlbnRseVxyXG4gIGlmKCF1dGlsaXRpZXMuaXNPbGRJRSgpICYmIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XHJcbiAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxyXG4gICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodFxyXG4gIH07XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRvbTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgdXJsVXRpbHMgPSByZXF1aXJlKCcuL3VybFV0aWxzJyk7XHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxuXHJcbmZ1bmN0aW9uIEh0dHBSZXF1ZXN0RXJyb3IobWVzc2FnZSkge1xyXG4gIHRoaXMubWVzc2FnZSA9ICdIdHRwUmVxdWVzdCBFcnJvcjogJyArIChtZXNzYWdlIHx8ICcnKTtcclxufVxyXG5IdHRwUmVxdWVzdEVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xyXG5IdHRwUmVxdWVzdEVycm9yLnByb3RvdHlwZS5uYW1lID0gXCJIdHRwUmVxdWVzdCBFcnJvclwiO1xyXG5cclxuZnVuY3Rpb24gSHR0cFJlcXVlc3QoY3JlYXRlWGhyKSB7XHJcbiAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjcmVhdGVYaHIpKSB7XHJcbiAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcignTWlzc2luZyBYTUxIdHRwUmVxdWVzdCBmYWN0b3J5IG1ldGhvZCcpO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5jcmVhdGVYaHIgPSBjcmVhdGVYaHI7XHJcbn1cclxuXHJcbkh0dHBSZXF1ZXN0LnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwsIGNhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgc2FuaXR5Q2hlY2sodXJsLCBjYWxsYmFjaywgb3B0aW9ucyk7XHJcbiAgdmFyIHRpbWVvdXQsIHRpbWVvdXRJZDtcclxuICB2YXIgeGhyID0gdGhpcy5jcmVhdGVYaHIoKTtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICB0aW1lb3V0ID0gdXRpbGl0aWVzLmlzTnVtYmVyKG9wdGlvbnMudGltZW91dCkgPyBvcHRpb25zLnRpbWVvdXQgOiAwO1xyXG5cclxuICB4aHIub3BlbihtZXRob2QsIHVybFV0aWxzLnVybFBhcnRzKHVybCkuaHJlZiwgdHJ1ZSk7XHJcblxyXG4gIGlmIChvcHRpb25zLmhlYWRlcnMpIHtcclxuICAgIHNldEhlYWRlcnMoeGhyLCBvcHRpb25zLmhlYWRlcnMpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XHJcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc3RhdHVzVGV4dCwgcmVzcG9uc2UsIHN0YXR1cztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvbmx5IHdheSB0byBkbyBhIHNlY3VyZSByZXF1ZXN0IG9uIElFOCBhbmQgSUU5IGlzIHdpdGggdGhlIFhEb21haW5SZXF1ZXN0IG9iamVjdC4gVW5mb3J0dW5hdGVseSwgbWljcm9zb2Z0IGlzXHJcbiAgICAgKiBzbyBuaWNlIHRoYXQgZGVjaWRlZCB0aGF0IHRoZSBzdGF0dXMgcHJvcGVydHkgYW5kIHRoZSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBtZXRob2Qgd2hlcmUgbm90IG5lZWRlZCBzbyB3ZSBoYXZlIHRvXHJcbiAgICAgKiBmYWtlIHRoZW0uIElmIHRoZSByZXF1ZXN0IGdldHMgZG9uZSB3aXRoIGFuIFhEb21haW5SZXF1ZXN0IGluc3RhbmNlLCB3ZSB3aWxsIGFzc3VtZSB0aGF0IHRoZXJlIGFyZSBubyBoZWFkZXJzIGFuZFxyXG4gICAgICogdGhlIHN0YXR1cyB3aWxsIGFsd2F5cyBiZSAyMDAuIElmIHlvdSBkb24ndCBsaWtlIGl0LCBETyBOT1QgVVNFIEFOQ0lFTlQgQlJPV1NFUlMhISFcclxuICAgICAqXHJcbiAgICAgKiBGb3IgbW9yIGluZm8gZ28gdG86IGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvY2MyODgwNjAodj12cy44NSkuYXNweFxyXG4gICAgICovXHJcbiAgICBpZiAoIXhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMpIHtcclxuICAgICAgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXhoci5zdGF0dXMpIHtcclxuICAgICAgeGhyLnN0YXR1cyA9IDIwMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh0aW1lb3V0SWQpKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgICB0aW1lb3V0SWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0IHx8ICcnO1xyXG5cclxuICAgIC8vIHJlc3BvbnNlVGV4dCBpcyB0aGUgb2xkLXNjaG9vbCB3YXkgb2YgcmV0cmlldmluZyByZXNwb25zZSAoc3VwcG9ydGVkIGJ5IElFOCAmIDkpXHJcbiAgICAvLyByZXNwb25zZS9yZXNwb25zZVR5cGUgcHJvcGVydGllcyB3ZXJlIGludHJvZHVjZWQgaW4gWEhSIExldmVsMiBzcGVjIChzdXBwb3J0ZWQgYnkgSUUxMClcclxuICAgIHJlc3BvbnNlID0gKCdyZXNwb25zZScgaW4geGhyKSA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHQ7XHJcblxyXG4gICAgLy8gbm9ybWFsaXplIElFOSBidWcgKGh0dHA6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzE0NTApXHJcbiAgICBzdGF0dXMgPSB4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cztcclxuXHJcbiAgICBjYWxsYmFjayhcclxuICAgICAgc3RhdHVzLFxyXG4gICAgICByZXNwb25zZSxcclxuICAgICAgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLFxyXG4gICAgICBzdGF0dXNUZXh0KTtcclxuICB9O1xyXG5cclxuICB4aHIub25lcnJvciA9IHJlcXVlc3RFcnJvcjtcclxuICB4aHIub25hYm9ydCA9IHJlcXVlc3RFcnJvcjtcclxuXHJcbiAgeGhyLnNlbmQoKTtcclxuXHJcbiAgaWYgKHRpbWVvdXQgPiAwKSB7XHJcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgeGhyICYmIHhoci5hYm9ydCgpO1xyXG4gICAgfSwgdGltZW91dCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayh1cmwsIGNhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyh1cmwpIHx8IHV0aWxpdGllcy5pc0VtcHR5U3RyaW5nKHVybCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEh0dHBSZXF1ZXN0RXJyb3IoXCJJbnZhbGlkIHVybCAnXCIgKyB1cmwgKyBcIidcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcclxuICAgICAgdGhyb3cgbmV3IEh0dHBSZXF1ZXN0RXJyb3IoXCJJbnZhbGlkIGhhbmRsZXIgJ1wiICsgY2FsbGJhY2sgKyBcIicgZm9yIHRoZSBodHRwIHJlcXVlc3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQob3B0aW9ucykgJiYgIXV0aWxpdGllcy5pc09iamVjdChvcHRpb25zKSkge1xyXG4gICAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcihcIkludmFsaWQgb3B0aW9ucyBtYXAgJ1wiICsgb3B0aW9ucyArIFwiJ1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldEhlYWRlcnMoeGhyLCBoZWFkZXJzKSB7XHJcbiAgICB1dGlsaXRpZXMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh2YWx1ZSkpIHtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXF1ZXN0RXJyb3IoKSB7XHJcbiAgICBjYWxsYmFjaygtMSwgbnVsbCwgbnVsbCwgJycpO1xyXG4gIH1cclxufTtcclxuXHJcbkh0dHBSZXF1ZXN0LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAodXJsLCBjYWxsYmFjaywgb3B0aW9ucykge1xyXG4gIHRoaXMucnVuKCdHRVQnLCB1cmwsIHByb2Nlc3NSZXNwb25zZSwgb3B0aW9ucyk7XHJcblxyXG4gIGZ1bmN0aW9uIHByb2Nlc3NSZXNwb25zZShzdGF0dXMsIHJlc3BvbnNlLCBoZWFkZXJzU3RyaW5nLCBzdGF0dXNUZXh0KSB7XHJcbiAgICBpZiAoaXNTdWNjZXNzKHN0YXR1cykpIHtcclxuICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYWxsYmFjayhuZXcgSHR0cFJlcXVlc3RFcnJvcihzdGF0dXNUZXh0KSwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc1N1Y2Nlc3Moc3RhdHVzKSB7XHJcbiAgICByZXR1cm4gMjAwIDw9IHN0YXR1cyAmJiBzdGF0dXMgPCAzMDA7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlWGhyKCkge1xyXG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICBpZiAoIShcIndpdGhDcmVkZW50aWFsc1wiIGluIHhocikpIHtcclxuICAgIC8vIFhEb21haW5SZXF1ZXN0IGZvciBJRS5cclxuICAgIHhociA9IG5ldyBYRG9tYWluUmVxdWVzdCgpO1xyXG4gIH1cclxuICByZXR1cm4geGhyO1xyXG59XHJcblxyXG52YXIgaHR0cCA9IG5ldyBIdHRwUmVxdWVzdChjcmVhdGVYaHIpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgaHR0cDogaHR0cCxcclxuICBIdHRwUmVxdWVzdDogSHR0cFJlcXVlc3QsXHJcbiAgSHR0cFJlcXVlc3RFcnJvcjogSHR0cFJlcXVlc3RFcnJvcixcclxuICBjcmVhdGVYaHI6IGNyZWF0ZVhoclxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBodG1sNTogW1xyXG4gICAgJ3RleHQvamF2YXNjcmlwdCcsXHJcbiAgICAndGV4dC9qYXZhc2NyaXB0MS4wJyxcclxuICAgICd0ZXh0L2phdmFzY3JpcHQxLjInLFxyXG4gICAgJ3RleHQvamF2YXNjcmlwdDEuNCcsXHJcbiAgICAndGV4dC9qc2NyaXB0JyxcclxuICAgICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcclxuICAgICdhcHBsaWNhdGlvbi94LWphdmFzY3JpcHQnLFxyXG4gICAgJ3RleHQvZWNtYXNjcmlwdCcsXHJcbiAgICAndGV4dC9lY21hc2NyaXB0MS4wJyxcclxuICAgICd0ZXh0L2VjbWFzY3JpcHQxLjInLFxyXG4gICAgJ3RleHQvZWNtYXNjcmlwdDEuNCcsXHJcbiAgICAndGV4dC9saXZlc2NyaXB0JyxcclxuICAgICdhcHBsaWNhdGlvbi9lY21hc2NyaXB0JyxcclxuICAgICdhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHQnLFxyXG4gIF0sXHJcblxyXG4gIGZsYXNoOiBbXHJcbiAgICAnYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnXHJcbiAgXSxcclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGRvbSA9IHJlcXVpcmUoJy4vZG9tJyk7XHJcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcclxuXHJcbnZhciBwbGF5ZXJVdGlscyA9IHt9O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY2FwdHVyZXMgdGhlIHBvcnRpb25zIG9mIHBsYXllciBzdGF0ZSByZWxldmFudCB0b1xyXG4gKiB2aWRlbyBwbGF5YmFjay4gVGhlIHJlc3VsdCBvZiB0aGlzIGZ1bmN0aW9uIGNhbiBiZSBwYXNzZWQgdG9cclxuICogcmVzdG9yZVBsYXllclNuYXBzaG90IHdpdGggYSBwbGF5ZXIgdG8gcmV0dXJuIHRoZSBwbGF5ZXIgdG8gdGhlIHN0YXRlIGl0XHJcbiAqIHdhcyBpbiB3aGVuIHRoaXMgZnVuY3Rpb24gd2FzIGludm9rZWQuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwbGF5ZXIgVGhlIHZpZGVvanMgcGxheWVyIG9iamVjdFxyXG4gKi9cclxucGxheWVyVXRpbHMuZ2V0UGxheWVyU25hcHNob3QgPSBmdW5jdGlvbiBnZXRQbGF5ZXJTbmFwc2hvdChwbGF5ZXIpIHtcclxuICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xyXG5cclxuICB2YXIgc25hcHNob3QgPSB7XHJcbiAgICBlbmRlZDogcGxheWVyLmVuZGVkKCksXHJcbiAgICBzcmM6IHBsYXllci5jdXJyZW50U3JjKCksXHJcbiAgICBjdXJyZW50VGltZTogcGxheWVyLmN1cnJlbnRUaW1lKCksXHJcbiAgICB0eXBlOiBwbGF5ZXIuY3VycmVudFR5cGUoKSxcclxuICAgIHBsYXlpbmc6ICFwbGF5ZXIucGF1c2VkKCksXHJcbiAgICBzdXBwcmVzc2VkVHJhY2tzOiBnZXRTdXBwcmVzc2VkVHJhY2tzKHBsYXllcilcclxuICB9O1xyXG5cclxuICBpZiAodGVjaCkge1xyXG4gICAgc25hcHNob3QubmF0aXZlUG9zdGVyID0gdGVjaC5wb3N0ZXI7XHJcbiAgICBzbmFwc2hvdC5zdHlsZSA9IHRlY2guZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xyXG4gIH1cclxuICByZXR1cm4gc25hcHNob3Q7XHJcblxyXG4gIC8qKioqIExvY2FsIEZ1bmN0aW9ucyAqKioqL1xyXG4gIGZ1bmN0aW9uIGdldFN1cHByZXNzZWRUcmFja3MocGxheWVyKSB7XHJcbiAgICB2YXIgdHJhY2tzID0gcGxheWVyLnJlbW90ZVRleHRUcmFja3MgPyBwbGF5ZXIucmVtb3RlVGV4dFRyYWNrcygpIDogW107XHJcblxyXG4gICAgaWYgKHRyYWNrcyAmJiB1dGlsaXRpZXMuaXNBcnJheSh0cmFja3MudHJhY2tzXykpIHtcclxuICAgICAgdHJhY2tzID0gdHJhY2tzLnRyYWNrc187XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNBcnJheSh0cmFja3MpKSB7XHJcbiAgICAgIHRyYWNrcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzdXBwcmVzc2VkVHJhY2tzID0gW107XHJcbiAgICB0cmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHtcclxuICAgICAgc3VwcHJlc3NlZFRyYWNrcy5wdXNoKHtcclxuICAgICAgICB0cmFjazogdHJhY2ssXHJcbiAgICAgICAgbW9kZTogdHJhY2subW9kZVxyXG4gICAgICB9KTtcclxuICAgICAgdHJhY2subW9kZSA9ICdkaXNhYmxlZCc7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc3VwcHJlc3NlZFRyYWNrcztcclxuICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQXR0ZW1wdHMgdG8gbW9kaWZ5IHRoZSBzcGVjaWZpZWQgcGxheWVyIHNvIHRoYXQgaXRzIHN0YXRlIGlzIGVxdWl2YWxlbnQgdG9cclxuICogdGhlIHN0YXRlIG9mIHRoZSBzbmFwc2hvdC5cclxuICogQHBhcmFtIHtvYmplY3R9IHNuYXBzaG90IC0gdGhlIHBsYXllciBzdGF0ZSB0byBhcHBseVxyXG4gKi9cclxucGxheWVyVXRpbHMucmVzdG9yZVBsYXllclNuYXBzaG90ID0gZnVuY3Rpb24gcmVzdG9yZVBsYXllclNuYXBzaG90KHBsYXllciwgc25hcHNob3QpIHtcclxuICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xyXG4gIHZhciBhdHRlbXB0cyA9IDIwOyAvLyB0aGUgbnVtYmVyIG9mIHJlbWFpbmluZyBhdHRlbXB0cyB0byByZXN0b3JlIHRoZSBzbmFwc2hvdFxyXG5cclxuICBpZiAoc25hcHNob3QubmF0aXZlUG9zdGVyKSB7XHJcbiAgICB0ZWNoLnBvc3RlciA9IHNuYXBzaG90Lm5hdGl2ZVBvc3RlcjtcclxuICB9XHJcblxyXG4gIGlmICgnc3R5bGUnIGluIHNuYXBzaG90KSB7XHJcbiAgICAvLyBvdmVyd3JpdGUgYWxsIGNzcyBzdHlsZSBwcm9wZXJ0aWVzIHRvIHJlc3RvcmUgc3RhdGUgcHJlY2lzZWx5XHJcbiAgICB0ZWNoLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzbmFwc2hvdC5zdHlsZSB8fCAnJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoaGFzU3JjQ2hhbmdlZChwbGF5ZXIsIHNuYXBzaG90KSkge1xyXG5cclxuICAgIC8vIG9uIGlvczcsIGZpZGRsaW5nIHdpdGggdGV4dFRyYWNrcyB0b28gZWFybHkgd2lsbCBjYXVzZSBzYWZhcmkgdG8gY3Jhc2hcclxuICAgIHBsYXllci5vbmUoJ2NvbnRlbnRsb2FkZWRtZXRhZGF0YScsIHJlc3RvcmVUcmFja3MpO1xyXG5cclxuICAgIHBsYXllci5vbmUoJ2NhbnBsYXknLCB0cnlUb1Jlc3VtZSk7XHJcbiAgICBlbnN1cmVDYW5wbGF5RXZ0R2V0c0ZpcmVkKCk7XHJcblxyXG4gICAgLy8gaWYgdGhlIHNyYyBjaGFuZ2VkIGZvciBhZCBwbGF5YmFjaywgcmVzZXQgaXRcclxuICAgIHBsYXllci5zcmMoe3NyYzogc25hcHNob3Quc3JjLCB0eXBlOiBzbmFwc2hvdC50eXBlfSk7XHJcblxyXG4gICAgLy8gc2FmYXJpIHJlcXVpcmVzIGEgY2FsbCB0byBgbG9hZGAgdG8gcGljayB1cCBhIGNoYW5nZWQgc291cmNlXHJcbiAgICBwbGF5ZXIubG9hZCgpO1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzdG9yZVRyYWNrcygpO1xyXG5cclxuICAgIGlmIChzbmFwc2hvdC5wbGF5aW5nKSB7XHJcbiAgICAgIHBsYXllci5wbGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXHJcblxyXG4gIC8qKlxyXG4gICAqIFNvbWV0aW1lcyBmaXJlZm94IGRvZXMgbm90IHRyaWdnZXIgdGhlICdjYW5wbGF5JyBldnQuXHJcbiAgICogVGhpcyBjb2RlIGVuc3VyZSB0aGF0IGl0IGFsd2F5cyBnZXRzIHRyaWdnZXJlZCB0cmlnZ2VyZWQuXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZW5zdXJlQ2FucGxheUV2dEdldHNGaXJlZCgpIHtcclxuICAgIHZhciB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBwbGF5ZXIudHJpZ2dlcignY2FucGxheScpO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgcGxheWVyLm9uZSgnY2FucGxheScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgcGxheWVyIG5lZWRzIHRvIGJlIHJlc3RvcmVkIHRvIGl0cyBzdGF0ZVxyXG4gICAqIGJlZm9yZSBhZCBwbGF5YmFjayBiZWdhbi4gV2l0aCBhIGN1c3RvbSBhZCBkaXNwbGF5IG9yIGJ1cm5lZC1pblxyXG4gICAqIGFkcywgdGhlIGNvbnRlbnQgcGxheWVyIHN0YXRlIGhhc24ndCBiZWVuIG1vZGlmaWVkIGFuZCBzbyBub1xyXG4gICAqIHJlc3RvcmF0aW9uIGlzIHJlcXVpcmVkXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gaGFzU3JjQ2hhbmdlZChwbGF5ZXIsIHNuYXBzaG90KSB7XHJcbiAgICBpZiAocGxheWVyLnNyYygpKSB7XHJcbiAgICAgIHJldHVybiBwbGF5ZXIuc3JjKCkgIT09IHNuYXBzaG90LnNyYztcclxuICAgIH1cclxuICAgIC8vIHRoZSBwbGF5ZXIgd2FzIGNvbmZpZ3VyZWQgdGhyb3VnaCBzb3VyY2UgZWxlbWVudCBjaGlsZHJlblxyXG4gICAgcmV0dXJuIHBsYXllci5jdXJyZW50U3JjKCkgIT09IHNuYXBzaG90LnNyYztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc3RvcmVUcmFja3MoKSB7XHJcbiAgICB2YXIgc3VwcHJlc3NlZFRyYWNrcyA9IHNuYXBzaG90LnN1cHByZXNzZWRUcmFja3M7XHJcbiAgICBzdXBwcmVzc2VkVHJhY2tzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNrU25hcHNob3QpIHtcclxuICAgICAgdHJhY2tTbmFwc2hvdC50cmFjay5tb2RlID0gdHJhY2tTbmFwc2hvdC5tb2RlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIHZpZGVvIGVsZW1lbnQgaGFzIGxvYWRlZCBlbm91Z2ggb2YgdGhlIHNuYXBzaG90IHNvdXJjZVxyXG4gICAqIHRvIGJlIHJlYWR5IHRvIGFwcGx5IHRoZSByZXN0IG9mIHRoZSBzdGF0ZVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHRyeVRvUmVzdW1lKCkge1xyXG5cclxuICAgIC8vIGlmIHNvbWUgcGVyaW9kIG9mIHRoZSB2aWRlbyBpcyBzZWVrYWJsZSwgcmVzdW1lIHBsYXliYWNrXHJcbiAgICAvLyBvdGhlcndpc2UgZGVsYXkgYSBiaXQgYW5kIHRoZW4gY2hlY2sgYWdhaW4gdW5sZXNzIHdlJ3JlIG91dCBvZiBhdHRlbXB0c1xyXG5cclxuICAgIGlmICghcGxheWVyVXRpbHMuaXNSZWFkeVRvUmVzdW1lKHBsYXllcikgJiYgYXR0ZW1wdHMtLSkge1xyXG4gICAgICBzZXRUaW1lb3V0KHRyeVRvUmVzdW1lLCA1MCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmKHBsYXllci5jdXJyZW50VGltZSgpICE9PSBzbmFwc2hvdC5jdXJyZW50VGltZSkge1xyXG4gICAgICAgICAgaWYgKHNuYXBzaG90LnBsYXlpbmcpIHsgLy8gaWYgbmVlZGVkIHJlc3RvcmUgcGxheWluZyBzdGF0dXMgYWZ0ZXIgc2VlayBjb21wbGV0ZXNcclxuICAgICAgICAgICAgcGxheWVyLm9uZSgnc2Vla2VkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgcGxheWVyLnBsYXkoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwbGF5ZXIuY3VycmVudFRpbWUoc25hcHNob3QuY3VycmVudFRpbWUpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHNuYXBzaG90LnBsYXlpbmcpIHtcclxuICAgICAgICAgIC8vIGlmIG5lZWRlZCBhbmQgbm8gc2VlayBoYXMgYmVlbiBwZXJmb3JtZWQsIHJlc3RvcmUgcGxheWluZyBzdGF0dXMgaW1tZWRpYXRlbHlcclxuICAgICAgICAgIHBsYXllci5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHZpZGVvanMubG9nLndhcm4oJ0ZhaWxlZCB0byByZXN1bWUgdGhlIGNvbnRlbnQgYWZ0ZXIgYW4gYWR2ZXJ0aXNlbWVudCcsIGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxucGxheWVyVXRpbHMuaXNSZWFkeVRvUmVzdW1lID0gZnVuY3Rpb24gKHBsYXllcikge1xyXG5cclxuICBpZiAocGxheWVyLnJlYWR5U3RhdGUoKSA+IDEpIHtcclxuICAgIC8vIHNvbWUgYnJvd3NlcnMgYW5kIG1lZGlhIGFyZW4ndCBcInNlZWthYmxlXCIuXHJcbiAgICAvLyByZWFkeVN0YXRlIGdyZWF0ZXIgdGhhbiAxIGFsbG93cyBmb3Igc2Vla2luZyB3aXRob3V0IGV4Y2VwdGlvbnNcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBsYXllci5zZWVrYWJsZSgpID09PSB1bmRlZmluZWQpIHtcclxuICAgIC8vIGlmIHRoZSBwbGF5ZXIgZG9lc24ndCBleHBvc2UgdGhlIHNlZWthYmxlIHRpbWUgcmFuZ2VzLCB0cnkgdG9cclxuICAgIC8vIHJlc3VtZSBwbGF5YmFjayBpbW1lZGlhdGVseVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAocGxheWVyLnNlZWthYmxlKCkubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gaWYgc29tZSBwZXJpb2Qgb2YgdGhlIHZpZGVvIGlzIHNlZWthYmxlLCByZXN1bWUgcGxheWJhY2tcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gcHJlcGFyZXMgdGhlIHBsYXllciB0byBkaXNwbGF5IGFkcy5cclxuICogQWRkaW5nIGNvbnZlbmllbmNlIGV2ZW50cyBsaWtlIHRoZSAndmFzdC5maXJzUGxheScgdGhhdCBnZXRzIGZpcmVkIHdoZW4gdGhlIHZpZGVvIGlzIGZpcnN0IHBsYXllZFxyXG4gKiBhbmQgYWRzIHRoZSBibGFja1Bvc3RlciB0byB0aGUgcGxheWVyIHRvIHByZXZlbnQgY29udGVudCBmcm9tIGJlaW5nIGRpc3BsYXllZCBiZWZvcmUgdGhlIHByZXJvbGwgYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSBwbGF5ZXJcclxuICovXHJcbnBsYXllclV0aWxzLnByZXBhcmVGb3JBZHMgPSBmdW5jdGlvbiAocGxheWVyKSB7XHJcbiAgdmFyIGJsYWNrUG9zdGVyID0gcGxheWVyLmFkZENoaWxkKCdibGFja1Bvc3RlcicpO1xyXG4gIHZhciBfZmlyc3RQbGF5ID0gdHJ1ZTtcclxuICB2YXIgdm9sdW1lU25hcHNob3Q7XHJcblxyXG5cclxuICBtb25rZXlQYXRjaFBsYXllckFwaSgpO1xyXG5cclxuICBwbGF5ZXIub24oJ3BsYXknLCB0cnlUb1RyaWdnZXJGaXJzdFBsYXkpO1xyXG4gIHBsYXllci5vbigndmFzdC5yZXNldCcsIHJlc2V0Rmlyc3RQbGF5KTsvL0V2ZXJ5IHRpbWUgd2UgY2hhbmdlIHRoZSBzb3VyY2VzIHdlIHJlc2V0IHRoZSBmaXJzdCBwbGF5LlxyXG4gIHBsYXllci5vbigndmFzdC5maXJzdFBsYXknLCByZXN0b3JlQ29udGVudFZvbHVtZSk7XHJcbiAgcGxheWVyLm9uKCdlcnJvcicsIGhpZGVCbGFja1Bvc3Rlcik7Ly9JZiB0aGVyZSBpcyBhbiBlcnJvciBpbiB0aGUgcGxheWVyIHdlIHJlbW92ZSB0aGUgYmxhY2twb3N0ZXIgdG8gc2hvdyB0aGUgZXJyIG1zZ1xyXG4gIHBsYXllci5vbigndmFzdC5hZFN0YXJ0JywgaGlkZUJsYWNrUG9zdGVyKTtcclxuICBwbGF5ZXIub24oJ3Zhc3QuYWRzQ2FuY2VsJywgaGlkZUJsYWNrUG9zdGVyKTtcclxuICBwbGF5ZXIub24oJ3Zhc3QuYWRFcnJvcicsIGhpZGVCbGFja1Bvc3Rlcik7XHJcbiAgcGxheWVyLm9uKCd2YXN0LmFkU3RhcnQnLCBhZGRTdHlsZXMpO1xyXG4gIHBsYXllci5vbigndmFzdC5hZEVuZCcsIHJlbW92ZVN0eWxlcyk7XHJcbiAgcGxheWVyLm9uKCd2YXN0LmFkc0NhbmNlbCcsIHJlbW92ZVN0eWxlcyk7XHJcblxyXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cclxuXHJcbiAgLyoqXHJcbiAgIFdoYXQgdGhpcyBmdW5jdGlvbiBkb2VzIGlzIHVnbHkgYW5kIGhvcnJpYmxlIGFuZCBJIHNob3VsZCB0aGluayB0d2ljZSBiZWZvcmUgY2FsbGluZyBteXNlbGYgYSBnb29kIGRldmVsb3Blci4gV2l0aCB0aGF0IHNhaWQsXHJcbiAgIGl0IGlzIHRoZSBiZXN0IHNvbHV0aW9uIEkgY291bGQgZmluZCB0byBtdXRlIHRoZSB2aWRlbyB1bnRpbCB0aGUgJ3BsYXknIGV2ZW50IGhhcHBlbnMgKG9uIG1vYmlsZSBkZXZpY2VzKSBhbmQgdGhlIHBsdWdpbiBjYW4gZGVjaWRlIHdoZXRoZXJcclxuICAgdG8gcGxheSB0aGUgYWQgb3Igbm90LlxyXG5cclxuICAgV2UgYWxzbyBuZWVkIHRoaXMgbW9ua2V5cGF0Y2ggdG8gYmUgYWJsZSB0byBwYXVzZSBhbmQgcmVzdW1lIGFuIGFkIHVzaW5nIHRoZSBwbGF5ZXIncyBBUElcclxuXHJcbiAgIElmIHlvdSBoYXZlIGEgYmV0dGVyIHNvbHV0aW9uIHBsZWFzZSBkbyB0ZWxsIG1lLlxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIG1vbmtleVBhdGNoUGxheWVyQXBpKCkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTW9ua2V5IHBhdGNoIG5lZWRlZCB0byBoYW5kbGUgZmlyc3RQbGF5IGFuZCByZXN1bWUgb2YgcGxheWluZyBhZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2FsbE9yaWdQbGF5IG5lY2Vzc2FyeSBmbGFnIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCB3aGVuIHlvdSBhcmUgcmVzdG9yaW5nIGEgVkFTVCBhZC5cclxuICAgICAqIEByZXR1cm5zIHtwbGF5ZXJ9XHJcbiAgICAgKi9cclxuICAgIHZhciBvcmlnUGxheSA9IHBsYXllci5wbGF5O1xyXG4gICAgcGxheWVyLnBsYXkgPSBmdW5jdGlvbiAoY2FsbE9yaWdQbGF5KSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChpc0ZpcnN0UGxheSgpKSB7XHJcbiAgICAgICAgZmlyc3RQbGF5KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdW1lKGNhbGxPcmlnUGxheSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG5cclxuICAgICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xyXG4gICAgICBmdW5jdGlvbiBmaXJzdFBsYXkoKSB7XHJcbiAgICAgICAgaWYgKCF1dGlsaXRpZXMuaXNJUGhvbmUoKSkge1xyXG4gICAgICAgICAgdm9sdW1lU25hcHNob3QgPSBzYXZlVm9sdW1lU25hcHNob3QoKTtcclxuICAgICAgICAgIHBsYXllci5tdXRlZCh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9yaWdQbGF5LmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlc3VtZShjYWxsT3JpZ1BsYXkpIHtcclxuICAgICAgICBpZiAoaXNBZFBsYXlpbmcoKSAmJiAhY2FsbE9yaWdQbGF5KSB7XHJcbiAgICAgICAgICBwbGF5ZXIudmFzdC5hZFVuaXQucmVzdW1lQWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb3JpZ1BsYXkuYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmVlZGVkIG1vbmtleSBwYXRjaCB0byBoYW5kbGUgcGF1c2Ugb2YgcGxheWluZyBhZC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2FsbE9yaWdQbGF5IG5lY2Vzc2FyeSBmbGFnIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCB3aGVuIHlvdSBhcmUgcGF1c2luZyBhIFZBU1QgYWQuXHJcbiAgICAgKiBAcmV0dXJucyB7cGxheWVyfVxyXG4gICAgICovXHJcbiAgICB2YXIgb3JpZ1BhdXNlID0gcGxheWVyLnBhdXNlO1xyXG4gICAgcGxheWVyLnBhdXNlID0gZnVuY3Rpb24gKGNhbGxPcmlnUGF1c2UpIHtcclxuICAgICAgaWYgKGlzQWRQbGF5aW5nKCkgJiYgIWNhbGxPcmlnUGF1c2UpIHtcclxuICAgICAgICBwbGF5ZXIudmFzdC5hZFVuaXQucGF1c2VBZCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9yaWdQYXVzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOZWVkZWQgbW9ua2V5IHBhdGNoIHRvIGhhbmRsZSBwYXVzZWQgc3RhdGUgb2YgdGhlIHBsYXllciB3aGVuIGFkcyBhcmUgcGxheWluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY2FsbE9yaWdQbGF5IG5lY2Vzc2FyeSBmbGFnIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCB3aGVuIHlvdSBhcmUgcGF1c2luZyBhIFZBU1QgYWQuXHJcbiAgICAgKiBAcmV0dXJucyB7cGxheWVyfVxyXG4gICAgICovXHJcbiAgICB2YXIgb3JpZ1BhdXNlZCA9IHBsYXllci5wYXVzZWQ7XHJcbiAgICBwbGF5ZXIucGF1c2VkID0gZnVuY3Rpb24gKGNhbGxPcmlnUGF1c2VkKSB7XHJcbiAgICAgIGlmIChpc0FkUGxheWluZygpICYmICFjYWxsT3JpZ1BhdXNlZCkge1xyXG4gICAgICAgIHJldHVybiBwbGF5ZXIudmFzdC5hZFVuaXQuaXNQYXVzZWQoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gb3JpZ1BhdXNlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzQWRQbGF5aW5nKCkge1xyXG4gICAgcmV0dXJuIHBsYXllci52YXN0ICYmIHBsYXllci52YXN0LmFkVW5pdDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRyeVRvVHJpZ2dlckZpcnN0UGxheSgpIHtcclxuICAgIGlmIChpc0ZpcnN0UGxheSgpKSB7XHJcbiAgICAgIF9maXJzdFBsYXkgPSBmYWxzZTtcclxuICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuZmlyc3RQbGF5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldEZpcnN0UGxheSgpIHtcclxuICAgIF9maXJzdFBsYXkgPSB0cnVlO1xyXG4gICAgYmxhY2tQb3N0ZXIuc2hvdygpO1xyXG4gICAgcmVzdG9yZUNvbnRlbnRWb2x1bWUoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzRmlyc3RQbGF5KCkge1xyXG4gICAgcmV0dXJuIF9maXJzdFBsYXk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzYXZlVm9sdW1lU25hcHNob3QoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtdXRlZDogcGxheWVyLm11dGVkKCksXHJcbiAgICAgIHZvbHVtZTogcGxheWVyLnZvbHVtZSgpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzdG9yZUNvbnRlbnRWb2x1bWUoKSB7XHJcbiAgICBpZiAodm9sdW1lU25hcHNob3QpIHtcclxuICAgICAgcGxheWVyLmN1cnJlbnRUaW1lKDApO1xyXG4gICAgICByZXN0b3JlVm9sdW1lU25hcHNob3Qodm9sdW1lU25hcHNob3QpO1xyXG4gICAgICB2b2x1bWVTbmFwc2hvdCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXN0b3JlVm9sdW1lU25hcHNob3Qoc25hcHNob3QpIHtcclxuICAgIGlmICh1dGlsaXRpZXMuaXNPYmplY3Qoc25hcHNob3QpKSB7XHJcbiAgICAgIHBsYXllci52b2x1bWUoc25hcHNob3Qudm9sdW1lKTtcclxuICAgICAgcGxheWVyLm11dGVkKHNuYXBzaG90Lm11dGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpZGVCbGFja1Bvc3RlcigpIHtcclxuICAgIGlmICghZG9tLmhhc0NsYXNzKGJsYWNrUG9zdGVyLmVsKCksICd2anMtaGlkZGVuJykpIHtcclxuICAgICAgYmxhY2tQb3N0ZXIuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkU3R5bGVzKCkge1xyXG4gICAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCAndmpzLWFkLXBsYXlpbmcnKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZVN0eWxlcygpIHtcclxuICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy1hZC1wbGF5aW5nJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgcG9zdGVyIGF0dHJpYnV0ZSBmcm9tIHRoZSB2aWRlbyBlbGVtZW50IHRlY2gsIGlmIHByZXNlbnQuIFdoZW5cclxuICogcmV1c2luZyBhIHZpZGVvIGVsZW1lbnQgZm9yIG11bHRpcGxlIHZpZGVvcywgdGhlIHBvc3RlciBpbWFnZSB3aWxsIGJyaWVmbHlcclxuICogcmVhcHBlYXIgd2hpbGUgdGhlIG5ldyBzb3VyY2UgbG9hZHMuIFJlbW92aW5nIHRoZSBhdHRyaWJ1dGUgYWhlYWQgb2YgdGltZVxyXG4gKiBwcmV2ZW50cyB0aGUgcG9zdGVyIGZyb20gc2hvd2luZyB1cCBiZXR3ZWVuIHZpZGVvcy5cclxuICogQHBhcmFtIHtvYmplY3R9IHBsYXllciBUaGUgdmlkZW9qcyBwbGF5ZXIgb2JqZWN0XHJcbiAqL1xyXG5wbGF5ZXJVdGlscy5yZW1vdmVOYXRpdmVQb3N0ZXIgPSBmdW5jdGlvbiAocGxheWVyKSB7XHJcbiAgdmFyIHRlY2ggPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcclxuICBpZiAodGVjaCkge1xyXG4gICAgdGVjaC5yZW1vdmVBdHRyaWJ1dGUoJ3Bvc3RlcicpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gbGlzdGVuIHRvIG1hbnkgZXZlbnRzIHVudGlsIG9uZSBvZiB0aGVtIGdldHMgZmlyZWQsIHRoZW4gd2VcclxuICogZXhlY3V0ZSB0aGUgaGFuZGxlciBhbmQgdW5zdWJzY3JpYmUgYWxsIHRoZSBldmVudCBsaXN0ZW5lcnM7XHJcbiAqXHJcbiAqIEBwYXJhbSBwbGF5ZXIgc3BlY2lmaWMgcGxheWVyIGZyb20gd2hlcmUgdG8gbGlzdGVuIGZvciB0aGUgZXZlbnRzXHJcbiAqIEBwYXJhbSBldmVudHMgYXJyYXkgb2YgZXZlbnRzXHJcbiAqIEBwYXJhbSBoYW5kbGVyIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgb25jZSBvbmUgb2YgdGhlIGV2ZW50cyBmaXJlc1xyXG4gKi9cclxucGxheWVyVXRpbHMub25jZSA9IGZ1bmN0aW9uIG9uY2UocGxheWVyLCBldmVudHMsIGhhbmRsZXIpIHtcclxuICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcclxuICAgIGhhbmRsZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuXHJcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgcGxheWVyLm9mZihldmVudCwgbGlzdGVuZXIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHBsYXllci5vbihldmVudCwgbGlzdGVuZXIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcGxheWVyVXRpbHM7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIElNUE9SVEFOVCBOT1RFOiBUaGlzIGZ1bmN0aW9uIGNvbWVzIGZyb20gYW5ndWxhckpzIGFuZCB3YXMgb3JpZ2luYWxseSBjYWxsZWQgdXJsUmVzb2x2ZVxyXG4gKiAgICAgICAgICAgICAgICAgeW91IGNhbiB0YWtlIGEgbG9vayBhdCB0aGUgb3JpZ2luYWwgY29kZSBoZXJlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi9tYXN0ZXIvc3JjL25nL3VybFV0aWxzLmpzXHJcbiAqXHJcbiAqIEltcGxlbWVudGF0aW9uIE5vdGVzIGZvciBub24tSUUgYnJvd3NlcnNcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBBc3NpZ25pbmcgYSBVUkwgdG8gdGhlIGhyZWYgcHJvcGVydHkgb2YgYW4gYW5jaG9yIERPTSBub2RlLCBldmVuIG9uZSBhdHRhY2hlZCB0byB0aGUgRE9NLFxyXG4gKiByZXN1bHRzIGJvdGggaW4gdGhlIG5vcm1hbGl6aW5nIGFuZCBwYXJzaW5nIG9mIHRoZSBVUkwuICBOb3JtYWxpemluZyBtZWFucyB0aGF0IGEgcmVsYXRpdmVcclxuICogVVJMIHdpbGwgYmUgcmVzb2x2ZWQgaW50byBhbiBhYnNvbHV0ZSBVUkwgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGFwcGxpY2F0aW9uIGRvY3VtZW50LlxyXG4gKiBQYXJzaW5nIG1lYW5zIHRoYXQgdGhlIGFuY2hvciBub2RlJ3MgaG9zdCwgaG9zdG5hbWUsIHByb3RvY29sLCBwb3J0LCBwYXRobmFtZSBhbmQgcmVsYXRlZFxyXG4gKiBwcm9wZXJ0aWVzIGFyZSBhbGwgcG9wdWxhdGVkIHRvIHJlZmxlY3QgdGhlIG5vcm1hbGl6ZWQgVVJMLiAgVGhpcyBhcHByb2FjaCBoYXMgd2lkZVxyXG4gKiBjb21wYXRpYmlsaXR5IC0gU2FmYXJpIDErLCBNb3ppbGxhIDErLCBPcGVyYSA3KyxlIGV0Yy4gIFNlZVxyXG4gKiBodHRwOi8vd3d3LmFwdGFuYS5jb20vcmVmZXJlbmNlL2h0bWwvYXBpL0hUTUxBbmNob3JFbGVtZW50Lmh0bWxcclxuICpcclxuICogSW1wbGVtZW50YXRpb24gTm90ZXMgZm9yIElFXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBJRSA+PSA4IGFuZCA8PSAxMCBub3JtYWxpemVzIHRoZSBVUkwgd2hlbiBhc3NpZ25lZCB0byB0aGUgYW5jaG9yIG5vZGUgc2ltaWxhciB0byB0aGUgb3RoZXJcclxuICogYnJvd3NlcnMuICBIb3dldmVyLCB0aGUgcGFyc2VkIGNvbXBvbmVudHMgd2lsbCBub3QgYmUgc2V0IGlmIHRoZSBVUkwgYXNzaWduZWQgZGlkIG5vdCBzcGVjaWZ5XHJcbiAqIHRoZW0uICAoZS5nLiBpZiB5b3UgYXNzaWduIGEuaHJlZiA9IFwiZm9vXCIsIHRoZW4gYS5wcm90b2NvbCwgYS5ob3N0LCBldGMuIHdpbGwgYmUgZW1wdHkuKSAgV2VcclxuICogd29yayBhcm91bmQgdGhhdCBieSBwZXJmb3JtaW5nIHRoZSBwYXJzaW5nIGluIGEgMm5kIHN0ZXAgYnkgdGFraW5nIGEgcHJldmlvdXNseSBub3JtYWxpemVkXHJcbiAqIFVSTCAoZS5nLiBieSBhc3NpZ25pbmcgdG8gYS5ocmVmKSBhbmQgYXNzaWduaW5nIGl0IGEuaHJlZiBhZ2Fpbi4gIFRoaXMgY29ycmVjdGx5IHBvcHVsYXRlcyB0aGVcclxuICogcHJvcGVydGllcyBzdWNoIGFzIHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCwgZXRjLlxyXG4gKlxyXG4gKiBJRTcgZG9lcyBub3Qgbm9ybWFsaXplIHRoZSBVUkwgd2hlbiBhc3NpZ25lZCB0byBhbiBhbmNob3Igbm9kZS4gIChBcHBhcmVudGx5LCBpdCBkb2VzLCBpZiBvbmVcclxuICogdXNlcyB0aGUgaW5uZXIgSFRNTCBhcHByb2FjaCB0byBhc3NpZ24gdGhlIFVSTCBhcyBwYXJ0IG9mIGFuIEhUTUwgc25pcHBldCAtXHJcbiAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ3MjcyOSkgIEhvd2V2ZXIsIHNldHRpbmcgaW1nW3NyY10gZG9lcyBub3JtYWxpemUgdGhlIFVSTC5cclxuICogVW5mb3J0dW5hdGVseSwgc2V0dGluZyBpbWdbc3JjXSB0byBzb21ldGhpbmcgbGlrZSBcImphdmFzY3JpcHQ6Zm9vXCIgb24gSUUgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cclxuICogU2luY2UgdGhlIHByaW1hcnkgdXNhZ2UgZm9yIG5vcm1hbGl6aW5nIFVSTHMgaXMgdG8gc2FuaXRpemUgc3VjaCBVUkxzLCB3ZSBjYW4ndCB1c2UgdGhhdFxyXG4gKiBtZXRob2QgYW5kIElFIDwgOCBpcyB1bnN1cHBvcnRlZC5cclxuICpcclxuICogUmVmZXJlbmNlczpcclxuICogICBodHRwOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MQW5jaG9yRWxlbWVudFxyXG4gKiAgIGh0dHA6Ly93d3cuYXB0YW5hLmNvbS9yZWZlcmVuY2UvaHRtbC9hcGkvSFRNTEFuY2hvckVsZW1lbnQuaHRtbFxyXG4gKiAgIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xyXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvcHVsbC8yOTAyXHJcbiAqICAgaHR0cDovL2phbWVzLnBhZG9sc2V5LmNvbS9qYXZhc2NyaXB0L3BhcnNpbmctdXJscy13aXRoLXRoZS1kb20vXHJcbiAqXHJcbiAqIEBraW5kIGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWQuXHJcbiAqIEBkZXNjcmlwdGlvbiBOb3JtYWxpemVzIGFuZCBwYXJzZXMgYSBVUkwuXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9IFJldHVybnMgdGhlIG5vcm1hbGl6ZWQgVVJMIGFzIGEgZGljdGlvbmFyeS5cclxuICpcclxuICogICB8IG1lbWJlciBuYW1lICAgfCBEZXNjcmlwdGlvbiAgICB8XHJcbiAqICAgfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tfFxyXG4gKiAgIHwgaHJlZiAgICAgICAgICB8IEEgbm9ybWFsaXplZCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCBVUkwgaWYgaXQgd2FzIG5vdCBhbiBhYnNvbHV0ZSBVUkwgfFxyXG4gKiAgIHwgcHJvdG9jb2wgICAgICB8IFRoZSBwcm90b2NvbCBpbmNsdWRpbmcgdGhlIHRyYWlsaW5nIGNvbG9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgIHwgaG9zdCAgICAgICAgICB8IFRoZSBob3N0IGFuZCBwb3J0IChpZiB0aGUgcG9ydCBpcyBub24tZGVmYXVsdCkgb2YgdGhlIG5vcm1hbGl6ZWRVcmwgICAgfFxyXG4gKiAgIHwgc2VhcmNoICAgICAgICB8IFRoZSBzZWFyY2ggcGFyYW1zLCBtaW51cyB0aGUgcXVlc3Rpb24gbWFyayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgIHwgaGFzaCAgICAgICAgICB8IFRoZSBoYXNoIHN0cmluZywgbWludXMgdGhlIGhhc2ggc3ltYm9sXHJcbiAqICAgfCBob3N0bmFtZSAgICAgIHwgVGhlIGhvc3RuYW1lXHJcbiAqICAgfCBwb3J0ICAgICAgICAgIHwgVGhlIHBvcnQsIHdpdGhvdXQgXCI6XCJcclxuICogICB8IHBhdGhuYW1lICAgICAgfCBUaGUgcGF0aG5hbWUsIGJlZ2lubmluZyB3aXRoIFwiL1wiXHJcbiAqXHJcbiAqL1xyXG5cclxudmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbi8qKlxyXG4gKiBkb2N1bWVudE1vZGUgaXMgYW4gSUUtb25seSBwcm9wZXJ0eVxyXG4gKiBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvY2MxOTY5ODgodj12cy44NSkuYXNweFxyXG4gKi9cclxudmFyIG1zaWUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XHJcblxyXG5mdW5jdGlvbiB1cmxQYXJ0cyh1cmwpIHtcclxuICB2YXIgaHJlZiA9IHVybDtcclxuXHJcbiAgaWYgKG1zaWUpIHtcclxuICAgIC8vIE5vcm1hbGl6ZSBiZWZvcmUgcGFyc2UuICBSZWZlciBJbXBsZW1lbnRhdGlvbiBOb3RlcyBvbiB3aHkgdGhpcyBpc1xyXG4gICAgLy8gZG9uZSBpbiB0d28gc3RlcHMgb24gSUUuXHJcbiAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xyXG4gICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XHJcbiAgfVxyXG5cclxuICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcclxuXHJcbiAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xyXG4gIHJldHVybiB7XHJcbiAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxyXG4gICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcclxuICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXHJcbiAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXHJcbiAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxyXG4gICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxyXG4gICAgcG9ydDogdXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcodXJsUGFyc2luZ05vZGUucG9ydCk/IHVybFBhcnNpbmdOb2RlLnBvcnQ6IDgwLFxyXG4gICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJylcclxuICAgICAgPyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxyXG4gICAgICA6ICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXHJcbiAgfTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYSBxdWVyeSBzdHJpbmcgKHNlYXJjaCBwYXJ0IG9mIGEgdXJsKSBhbmQgcmV0dXJucyBhIGRpY3Rpb25hcnkgd2l0aFxyXG4gKiB0aGUgZGlmZmVyZW50IGtleSB2YWx1ZSBwYWlyc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gcXMgcXVlcnlTdHJpbmdcclxuICovXHJcbmZ1bmN0aW9uIHF1ZXJ5U3RyaW5nVG9PYmoocXMsIGNvbmQpIHtcclxuICB2YXIgcGFpcnMsIHFzT2JqO1xyXG5cclxuICBjb25kID0gdXRpbGl0aWVzLmlzRnVuY3Rpb24oY29uZCk/IGNvbmQgOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIHFzID0gcXMudHJpbSgpLnJlcGxhY2UoL15cXD8vLCAnJyk7XHJcbiAgcGFpcnMgPSBxcy5zcGxpdCgnJicpO1xyXG4gIHFzT2JqID0ge307XHJcblxyXG4gIHV0aWxpdGllcy5mb3JFYWNoKHBhaXJzLCBmdW5jdGlvbiAocGFpcikge1xyXG4gICAgdmFyIGtleVZhbHVlLCBrZXksIHZhbHVlO1xyXG4gICAgaWYgKHBhaXIgIT09ICcnKSB7XHJcbiAgICAgIGtleVZhbHVlID0gcGFpci5zcGxpdCgnPScpO1xyXG4gICAgICBrZXkgPSBrZXlWYWx1ZVswXTtcclxuICAgICAgdmFsdWUgPSBrZXlWYWx1ZVsxXTtcclxuICAgICAgaWYoY29uZChrZXksIHZhbHVlKSl7XHJcbiAgICAgICAgcXNPYmpba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBxc09iajtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbiBvYmplY3QgYW5kIHNlcmlhbGl6ZXMgaXQgaW50byBhIHF1ZXJ5IHN0cmluZyB3aXRob3V0IHRoZSBsZWFkaW5nICc/J1xyXG4gKiBAcGFyYW0gb2JqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBvYmpUb1F1ZXJ5U3RyaW5nKG9iaikge1xyXG4gIHZhciBwYWlycyA9IFtdO1xyXG4gIHV0aWxpdGllcy5mb3JFYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgIHBhaXJzLnB1c2goa2V5ICsgJz0nICsgdmFsdWUpO1xyXG4gIH0pO1xyXG4gIHJldHVybiBwYWlycy5qb2luKCcmJyk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHVybFBhcnRzOiB1cmxQYXJ0cyxcclxuICBxdWVyeVN0cmluZ1RvT2JqOiBxdWVyeVN0cmluZ1RvT2JqLFxyXG4gIG9ialRvUXVlcnlTdHJpbmc6IG9ialRvUXVlcnlTdHJpbmdcclxufTtcclxuIiwiLypqc2hpbnQgdW51c2VkOmZhbHNlICovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIE5PREVfVFlQRV9FTEVNRU5UID0gMTtcclxudmFyIFNOQUtFX0NBU0VfUkVHRVhQID0gL1tBLVpdL2c7XHJcbnZhciBFTUFJTF9SRUdFWFAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKyQvaTtcclxuLypqc2xpbnQgbWF4bGVuOiA1MDAgKi9cclxudmFyIElTTzgwODZfUkVHRVhQID0gL14oW1xcKy1dP1xcZHs0fSg/IVxcZHsyfVxcYikpKCgtPykoKDBbMS05XXwxWzAtMl0pKFxcMyhbMTJdXFxkfDBbMS05XXwzWzAxXSkpP3xXKFswLTRdXFxkfDVbMC0yXSkoLT9bMS03XSk/fCgwMFsxLTldfDBbMS05XVxcZHxbMTJdXFxkezJ9fDMoWzAtNV1cXGR8NlsxLTZdKSkpKFtUXFxzXSgoKFswMV1cXGR8MlswLTNdKSgoOj8pWzAtNV1cXGQpP3wyNFxcOj8wMCkoW1xcLixdXFxkKyg/ITopKT8pPyhcXDE3WzAtNV1cXGQoW1xcLixdXFxkKyk/KT8oW3paXXwoW1xcKy1dKShbMDFdXFxkfDJbMC0zXSk6PyhbMC01XVxcZCk/KT8pPyk/JC87XHJcblxyXG5cclxuZnVuY3Rpb24gbm9vcCgpeyB9XHJcblxyXG5mdW5jdGlvbiBpc051bGwobykge1xyXG4gIHJldHVybiBvID09PSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RlZmluZWQobyl7XHJcbiAgcmV0dXJuIG8gIT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNVbmRlZmluZWQobyl7XHJcbiAgcmV0dXJuIG8gPT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHN0cil7XHJcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTnVtYmVyKG51bSl7XHJcbiAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcclxuICByZXR1cm4gdXRpbGl0aWVzLmlzT2JqZWN0KG9iaikgJiYgb2JqLndpbmRvdyA9PT0gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FycmF5KGFycmF5KXtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCBhcnJheSApID09PSAnW29iamVjdCBBcnJheV0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FycmF5TGlrZShvYmopIHtcclxuICBpZiAob2JqID09PSBudWxsIHx8IHV0aWxpdGllcy5pc1dpbmRvdyhvYmopIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKG9iaikgfHwgdXRpbGl0aWVzLmlzVW5kZWZpbmVkKG9iaikpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHZhciBsZW5ndGggPSBvYmoubGVuZ3RoO1xyXG5cclxuICBpZiAob2JqLm5vZGVUeXBlID09PSBOT0RFX1RZUEVfRUxFTUVOVCAmJiBsZW5ndGgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHV0aWxpdGllcy5pc1N0cmluZyhvYmopIHx8IHV0aWxpdGllcy5pc0FycmF5KG9iaikgfHwgbGVuZ3RoID09PSAwIHx8XHJcbiAgICB0eXBlb2YgbGVuZ3RoID09PSAnbnVtYmVyJyAmJiBsZW5ndGggPiAwICYmIChsZW5ndGggLSAxKSBpbiBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xyXG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNFbXB0eVN0cmluZyhzdHIpIHtcclxuICByZXR1cm4gdXRpbGl0aWVzLmlzU3RyaW5nKHN0cikgJiYgc3RyLmxlbmd0aCA9PT0gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNOb3RFbXB0eVN0cmluZyhzdHIpIHtcclxuICByZXR1cm4gdXRpbGl0aWVzLmlzU3RyaW5nKHN0cikgJiYgc3RyLmxlbmd0aCAhPT0gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gYXJyYXlMaWtlT2JqVG9BcnJheShhcmdzKSB7XHJcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcclxuICB2YXIga2V5LCBsZW5ndGg7XHJcbiAgaWYgKG9iaikge1xyXG4gICAgaWYgKGlzRnVuY3Rpb24ob2JqKSkge1xyXG4gICAgICBmb3IgKGtleSBpbiBvYmopIHtcclxuICAgICAgICAvLyBOZWVkIHRvIGNoZWNrIGlmIGhhc093blByb3BlcnR5IGV4aXN0cyxcclxuICAgICAgICAvLyBhcyBvbiBJRTggdGhlIHJlc3VsdCBvZiBxdWVyeVNlbGVjdG9yQWxsIGlzIGFuIG9iamVjdCB3aXRob3V0IGEgaGFzT3duUHJvcGVydHkgZnVuY3Rpb25cclxuICAgICAgICBpZiAoa2V5ICE9PSAncHJvdG90eXBlJyAmJiBrZXkgIT09ICdsZW5ndGgnICYmIGtleSAhPT0gJ25hbWUnICYmICghb2JqLmhhc093blByb3BlcnR5IHx8IG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSkge1xyXG4gICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9iaikpIHtcclxuICAgICAgdmFyIGlzUHJpbWl0aXZlID0gdHlwZW9mIG9iaiAhPT0gJ29iamVjdCc7XHJcbiAgICAgIGZvciAoa2V5ID0gMCwgbGVuZ3RoID0gb2JqLmxlbmd0aDsga2V5IDwgbGVuZ3RoOyBrZXkrKykge1xyXG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSB8fCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXldLCBrZXksIG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKG9iai5mb3JFYWNoICYmIG9iai5mb3JFYWNoICE9PSBmb3JFYWNoKSB7XHJcbiAgICAgIG9iai5mb3JFYWNoKGl0ZXJhdG9yLCBjb250ZXh0LCBvYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXldLCBrZXksIG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNuYWtlX2Nhc2UobmFtZSwgc2VwYXJhdG9yKSB7XHJcbiAgc2VwYXJhdG9yID0gc2VwYXJhdG9yIHx8ICdfJztcclxuICByZXR1cm4gbmFtZS5yZXBsYWNlKFNOQUtFX0NBU0VfUkVHRVhQLCBmdW5jdGlvbihsZXR0ZXIsIHBvcykge1xyXG4gICAgcmV0dXJuIChwb3MgPyBzZXBhcmF0b3IgOiAnJykgKyBsZXR0ZXIudG9Mb3dlckNhc2UoKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNWYWxpZEVtYWlsKGVtYWlsKXtcclxuICBpZighdXRpbGl0aWVzLmlzU3RyaW5nKGVtYWlsKSl7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gRU1BSUxfUkVHRVhQLnRlc3QoZW1haWwudHJpbSgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXh0ZW5kIChvYmopIHtcclxuICB2YXIgYXJnLCBpLCBrO1xyXG4gIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGFyZyA9IGFyZ3VtZW50c1tpXTtcclxuICAgIGZvciAoayBpbiBhcmcpIHtcclxuICAgICAgaWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShrKSkge1xyXG4gICAgICAgIGlmKGlzT2JqZWN0KG9ialtrXSkgJiYgIWlzTnVsbChvYmpba10pICYmIGlzT2JqZWN0KGFyZ1trXSkpe1xyXG4gICAgICAgICAgb2JqW2tdID0gZXh0ZW5kKHt9LCBvYmpba10sIGFyZ1trXSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgb2JqW2tdID0gYXJnW2tdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYXBpdGFsaXplKHMpe1xyXG4gIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVjYXBpdGFsaXplKHMpIHtcclxuICByZXR1cm4gcy5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHMuc2xpY2UoMSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCB3b3JrcyB0aGUgc2FtZSB3YXkgYXJyYXkucHJvdG90eXBlLm1hcCB3b3JrcyBidXQgaWYgdGhlIHRyYW5zZm9ybWVyIHJldHVybnMgdW5kZWZpbmUsIHRoZW5cclxuICogaXQgd29uJ3QgYmUgYWRkZWQgdG8gdGhlIHRyYW5zZm9ybWVkIEFycmF5LlxyXG4gKi9cclxuZnVuY3Rpb24gdHJhbnNmb3JtQXJyYXkoYXJyYXksIHRyYW5zZm9ybWVyKSB7XHJcbiAgdmFyIHRyYW5zZm9ybWVkQXJyYXkgPSBbXTtcclxuXHJcbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpbmRleCl7XHJcbiAgICB2YXIgdHJhbnNmb3JtZWRJdGVtID0gdHJhbnNmb3JtZXIoaXRlbSwgaW5kZXgpO1xyXG4gICAgaWYodXRpbGl0aWVzLmlzRGVmaW5lZCh0cmFuc2Zvcm1lZEl0ZW0pKSB7XHJcbiAgICAgIHRyYW5zZm9ybWVkQXJyYXkucHVzaCh0cmFuc2Zvcm1lZEl0ZW0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdHJhbnNmb3JtZWRBcnJheTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9GaXhlZERpZ2l0cyhudW0sIGRpZ2l0cykge1xyXG4gIHZhciBmb3JtYXR0ZWROdW0gPSBudW0gKyAnJztcclxuICBkaWdpdHMgPSB1dGlsaXRpZXMuaXNOdW1iZXIoZGlnaXRzKSA/IGRpZ2l0cyA6IDA7XHJcbiAgbnVtID0gdXRpbGl0aWVzLmlzTnVtYmVyKG51bSkgPyBudW0gOiBwYXJzZUludChudW0sIDEwKTtcclxuICBpZih1dGlsaXRpZXMuaXNOdW1iZXIobnVtKSAmJiAhaXNOYU4obnVtKSl7XHJcbiAgICBmb3JtYXR0ZWROdW0gPSBudW0gKyAnJztcclxuICAgIHdoaWxlKGZvcm1hdHRlZE51bS5sZW5ndGggPCBkaWdpdHMpIHtcclxuICAgICAgZm9ybWF0dGVkTnVtID0gJzAnICsgZm9ybWF0dGVkTnVtO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZvcm1hdHRlZE51bTtcclxuICB9XHJcbiAgcmV0dXJuIE5hTiArICcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0aHJvdHRsZShjYWxsYmFjaywgZGVsYXkpIHtcclxuICB2YXIgcHJldmlvdXNDYWxsID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSAoZGVsYXkgKyAxKTtcclxuICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgaWYgKCh0aW1lIC0gcHJldmlvdXNDYWxsKSA+PSBkZWxheSkge1xyXG4gICAgICBwcmV2aW91c0NhbGwgPSB0aW1lO1xyXG4gICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYm91bmNlIChjYWxsYmFjaywgd2FpdCkge1xyXG4gIHZhciB0aW1lb3V0SWQ7XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiAoKXtcclxuICAgIGlmKHRpbWVvdXRJZCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgIH1cclxuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgdGltZW91dElkID0gdW5kZWZpbmVkO1xyXG4gICAgfSwgd2FpdCk7XHJcbiAgfTtcclxufVxyXG5cclxuLy8gYSBmdW5jdGlvbiBkZXNpZ25lZCB0byBibG93IHVwIHRoZSBzdGFjayBpbiBhIG5haXZlIHdheVxyXG4vLyBidXQgaXQgaXMgb2sgZm9yIHZpZGVvSnMgY2hpbGRyZW4gY29tcG9uZW50c1xyXG5mdW5jdGlvbiB0cmVlU2VhcmNoKHJvb3QsIGdldENoaWxkcmVuLCBmb3VuZCl7XHJcbiAgdmFyIGNoaWxkcmVuID0gZ2V0Q2hpbGRyZW4ocm9vdCk7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XHJcbiAgICBpZiAoZm91bmQoY2hpbGRyZW5baV0pKSB7XHJcbiAgICAgIHJldHVybiBjaGlsZHJlbltpXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB2YXIgZWwgPSB0cmVlU2VhcmNoKGNoaWxkcmVuW2ldLCBnZXRDaGlsZHJlbiwgZm91bmQpO1xyXG4gICAgICBpZiAoZWwpe1xyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZWNob0ZuKHZhbCkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH07XHJcbn1cclxuXHJcbi8vTm90ZTogU3VwcG9ydGVkIGZvcm1hdHMgY29tZSBmcm9tIGh0dHA6Ly93d3cudzMub3JnL1RSL05PVEUtZGF0ZXRpbWVcclxuLy8gYW5kIHRoZSBpc284NjAxIHJlZ2V4IGNvbWVzIGZyb20gaHR0cDovL3d3dy5wZWxhZ29kZXNpZ24uY29tL2Jsb2cvMjAwOS8wNS8yMC9pc28tODYwMS1kYXRlLXZhbGlkYXRpb24tdGhhdC1kb2VzbnQtc3Vjay9cclxuZnVuY3Rpb24gaXNJU084NjAxKHZhbHVlKSB7XHJcbiAgaWYodXRpbGl0aWVzLmlzTnVtYmVyKHZhbHVlKSl7XHJcbiAgICB2YWx1ZSA9IHZhbHVlICsgJyc7ICAvL3dlIG1ha2Ugc3VyZSB0aGF0IHdlIGFyZSB3b3JraW5nIHdpdGggc3RyaW5nc1xyXG4gIH1cclxuXHJcbiAgaWYoIXV0aWxpdGllcy5pc1N0cmluZyh2YWx1ZSkpe1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIElTTzgwODZfUkVHRVhQLnRlc3QodmFsdWUudHJpbSgpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiB0aGUgQnJvd3NlciBpcyBJRTkgYW5kIGJlbG93XHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNPbGRJRSgpIHtcclxuICB2YXIgdmVyc2lvbiA9IHV0aWxpdGllcy5nZXRJbnRlcm5ldEV4cGxvcmVyVmVyc2lvbihuYXZpZ2F0b3IpO1xyXG4gIGlmICh2ZXJzaW9uID09PSAtMSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZlcnNpb24gPCAxMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHZlcnNpb24gb2YgSW50ZXJuZXQgRXhwbG9yZXIgb3IgYSAtMSAoaW5kaWNhdGluZyB0aGUgdXNlIG9mIGFub3RoZXIgYnJvd3NlcikuXHJcbiAqIFNvdXJjZTogaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNzUwOSh2PXZzLjg1KS5hc3B4XHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSB2ZXJzaW9uIG9mIEludGVybmV0IEV4cGxvcmVyIG9yIGEgLTEgKGluZGljYXRpbmcgdGhlIHVzZSBvZiBhbm90aGVyIGJyb3dzZXIpLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24obmF2aWdhdG9yKSB7XHJcbiAgdmFyIHJ2ID0gLTE7XHJcblxyXG4gIGlmIChuYXZpZ2F0b3IuYXBwTmFtZSA9PSAnTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyJykge1xyXG4gICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCJNU0lFIChbMC05XXsxLH1bXFwuMC05XXswLH0pXCIpO1xyXG4gICAgdmFyIHJlcyA9IHJlLmV4ZWModWEpO1xyXG4gICAgaWYgKHJlcyAhPT0gbnVsbCkge1xyXG4gICAgICBydiA9IHBhcnNlRmxvYXQocmVzWzFdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBydjtcclxufVxyXG5cclxuLyoqKiBNb2JpbGUgVXRpbGl0eSBmdW5jdGlvbnMgKioqL1xyXG5mdW5jdGlvbiBpc0lEZXZpY2UoKSB7XHJcbiAgcmV0dXJuIC9pUChob25lfGFkKS8udGVzdCh1dGlsaXRpZXMuX1VBKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNNb2JpbGUoKSB7XHJcbiAgcmV0dXJuIC9pUChob25lfGFkfG9kKXxBbmRyb2lkfFdpbmRvd3MgUGhvbmUvLnRlc3QodXRpbGl0aWVzLl9VQSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzSVBob25lKCkge1xyXG4gIHJldHVybiAvaVAoaG9uZXxvZCkvLnRlc3QodXRpbGl0aWVzLl9VQSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQW5kcm9pZCgpIHtcclxuICByZXR1cm4gL0FuZHJvaWQvLnRlc3QodXRpbGl0aWVzLl9VQSk7XHJcbn1cclxuXHJcbnZhciB1dGlsaXRpZXMgPSB7XHJcbiAgX1VBOiBuYXZpZ2F0b3IudXNlckFnZW50LFxyXG4gIG5vb3A6IG5vb3AsXHJcbiAgaXNOdWxsOiBpc051bGwsXHJcbiAgaXNEZWZpbmVkOiBpc0RlZmluZWQsXHJcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxyXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcclxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxyXG4gIGlzTnVtYmVyOiBpc051bWJlcixcclxuICBpc1dpbmRvdzogaXNXaW5kb3csXHJcbiAgaXNBcnJheTogaXNBcnJheSxcclxuICBpc0FycmF5TGlrZTogaXNBcnJheUxpa2UsXHJcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxyXG4gIGlzRW1wdHlTdHJpbmc6IGlzRW1wdHlTdHJpbmcsXHJcbiAgaXNOb3RFbXB0eVN0cmluZzogaXNOb3RFbXB0eVN0cmluZyxcclxuICBhcnJheUxpa2VPYmpUb0FycmF5OiBhcnJheUxpa2VPYmpUb0FycmF5LFxyXG4gIGZvckVhY2g6IGZvckVhY2gsXHJcbiAgc25ha2VfY2FzZTogc25ha2VfY2FzZSxcclxuICBpc1ZhbGlkRW1haWw6IGlzVmFsaWRFbWFpbCxcclxuICBleHRlbmQ6IGV4dGVuZCxcclxuICBjYXBpdGFsaXplOiBjYXBpdGFsaXplLFxyXG4gIGRlY2FwaXRhbGl6ZTogZGVjYXBpdGFsaXplLFxyXG4gIHRyYW5zZm9ybUFycmF5OiB0cmFuc2Zvcm1BcnJheSxcclxuICB0b0ZpeGVkRGlnaXRzOiB0b0ZpeGVkRGlnaXRzLFxyXG4gIHRocm90dGxlOiB0aHJvdHRsZSxcclxuICBkZWJvdW5jZTogZGVib3VuY2UsXHJcbiAgdHJlZVNlYXJjaDogdHJlZVNlYXJjaCxcclxuICBlY2hvRm46IGVjaG9GbixcclxuICBpc0lTTzg2MDE6IGlzSVNPODYwMSxcclxuICBpc09sZElFOiBpc09sZElFLFxyXG4gIGdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uOiBnZXRJbnRlcm5ldEV4cGxvcmVyVmVyc2lvbixcclxuICBpc0lEZXZpY2U6IGlzSURldmljZSxcclxuICBpc01vYmlsZTogaXNNb2JpbGUsXHJcbiAgaXNJUGhvbmU6IGlzSVBob25lLFxyXG4gIGlzQW5kcm9pZDogaXNBbmRyb2lkXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWxpdGllcztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xyXG5cclxudmFyIHhtbCA9IHt9O1xyXG5cclxueG1sLnN0clRvWE1MRG9jID0gZnVuY3Rpb24gc3RyVG9YTUxEb2Moc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSl7XHJcbiAgLy9JRSA4XHJcbiAgaWYodHlwZW9mIHdpbmRvdy5ET01QYXJzZXIgPT09ICd1bmRlZmluZWQnKXtcclxuICAgIHZhciB4bWxEb2N1bWVudCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MRE9NJyk7XHJcbiAgICB4bWxEb2N1bWVudC5hc3luYyA9IGZhbHNlO1xyXG4gICAgeG1sRG9jdW1lbnQubG9hZFhNTChzdHJpbmdDb250YWluaW5nWE1MU291cmNlKTtcclxuICAgIHJldHVybiB4bWxEb2N1bWVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiBwYXJzZVN0cmluZyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlKTtcclxuXHJcbiAgZnVuY3Rpb24gcGFyc2VTdHJpbmcoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSl7XHJcbiAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG4gICAgdmFyIHBhcnNlZERvY3VtZW50O1xyXG5cclxuICAgIC8vTm90ZTogVGhpcyB0cnkgY2F0Y2ggaXMgdG8gZGVhbCB3aXRoIHRoZSBmYWN0IHRoYXQgb24gSUUgcGFyc2VyLnBhcnNlRnJvbVN0cmluZyBkb2VzIHRocm93IGFuIGVycm9yIGJ1dCB0aGUgcmVzdCBvZiB0aGUgYnJvd3NlcnMgZG9uJ3QuXHJcbiAgICB0cnkge1xyXG4gICAgICBwYXJzZWREb2N1bWVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSwgXCJhcHBsaWNhdGlvbi94bWxcIik7XHJcblxyXG4gICAgICBpZihpc1BhcnNlRXJyb3IocGFyc2VkRG9jdW1lbnQpIHx8IHV0aWxpdGllcy5pc0VtcHR5U3RyaW5nKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UpKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfWNhdGNoKGUpe1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ4bWwuc3RyVG9YTUxET0M6IEVycm9yIHBhcnNpbmcgdGhlIHN0cmluZzogJ1wiICsgc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSArIFwiJ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFyc2VkRG9jdW1lbnQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpc1BhcnNlRXJyb3IocGFyc2VkRG9jdW1lbnQpIHtcclxuICAgIHRyeSB7IC8vIHBhcnNlciBhbmQgcGFyc2VyZXJyb3JOUyBjb3VsZCBiZSBjYWNoZWQgb24gc3RhcnR1cCBmb3IgZWZmaWNpZW5jeVxyXG4gICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpLFxyXG4gICAgICAgIGVycm9uZW91c1BhcnNlID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZygnSU5WQUxJRCcsICd0ZXh0L3htbCcpLFxyXG4gICAgICAgIHBhcnNlcmVycm9yTlMgPSBlcnJvbmVvdXNQYXJzZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpWzBdLm5hbWVzcGFjZVVSSTtcclxuXHJcbiAgICAgIGlmIChwYXJzZXJlcnJvck5TID09PSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcpIHtcclxuICAgICAgICAvLyBJbiBQaGFudG9tSlMgdGhlIHBhcnNlZXJyb3IgZWxlbWVudCBkb2Vzbid0IHNlZW0gdG8gaGF2ZSBhIHNwZWNpYWwgbmFtZXNwYWNlLCBzbyB3ZSBhcmUganVzdCBndWVzc2luZyBoZXJlIDooXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlZERvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RoID4gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHBhcnNlZERvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lTlMocGFyc2VyZXJyb3JOUywgJ3BhcnNlcmVycm9yJykubGVuZ3RoID4gMDtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgLy9Ob3RlIG9uIElFIHBhcnNlU3RyaW5nIHRocm93cyBhbiBlcnJvciBieSBpdHNlbGYgYW5kIGl0IHdpbGwgbmV2ZXIgcmVhY2ggdGhpcyBjb2RlLiBCZWNhdXNlIGl0IHdpbGwgaGF2ZSBmYWlsZWQgYmVmb3JlXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxueG1sLnBhcnNlVGV4dCA9IGZ1bmN0aW9uIHBhcnNlVGV4dCAoc1ZhbHVlKSB7XHJcbiAgaWYgKC9eXFxzKiQvLnRlc3Qoc1ZhbHVlKSkgeyByZXR1cm4gbnVsbDsgfVxyXG4gIGlmICgvXig/OnRydWV8ZmFsc2UpJC9pLnRlc3Qoc1ZhbHVlKSkgeyByZXR1cm4gc1ZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IFwidHJ1ZVwiOyB9XHJcbiAgaWYgKGlzRmluaXRlKHNWYWx1ZSkpIHsgcmV0dXJuIHBhcnNlRmxvYXQoc1ZhbHVlKTsgfVxyXG4gIGlmICh1dGlsaXRpZXMuaXNJU084NjAxKHNWYWx1ZSkpIHsgcmV0dXJuIG5ldyBEYXRlKHNWYWx1ZSk7IH1cclxuICByZXR1cm4gc1ZhbHVlLnRyaW0oKTtcclxufTtcclxuXHJcbnhtbC5KWE9OVHJlZSA9IGZ1bmN0aW9uIEpYT05UcmVlIChvWE1MUGFyZW50KSB7XHJcbiAgdmFyIHBhcnNlVGV4dCA9IHhtbC5wYXJzZVRleHQ7XHJcblxyXG4gIC8vVGhlIGRvY3VtZW50IG9iamVjdCBpcyBhbiBlc3BlY2lhbCBvYmplY3QgdGhhdCBpdCBtYXkgbWlzcyBzb21lIGZ1bmN0aW9ucyBvciBhdHRycyBkZXBlbmRpbmcgb24gdGhlIGJyb3dzZXIuXHJcbiAgLy9UbyBwcmV2ZW50IHRoaXMgcHJvYmxlbSB3aXRoIGNyZWF0ZSB0aGUgSlhPTlRyZWUgdXNpbmcgdGhlIHJvb3QgY2hpbGROb2RlIHdoaWNoIGlzIGEgZnVsbHkgZmxlc2hlZCBub2RlIG9uIGFsbCBzdXBwb3J0ZWRcclxuICAvL2Jyb3dzZXJzLlxyXG4gIGlmKG9YTUxQYXJlbnQuZG9jdW1lbnRFbGVtZW50KXtcclxuICAgIHJldHVybiBuZXcgeG1sLkpYT05UcmVlKG9YTUxQYXJlbnQuZG9jdW1lbnRFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGlmIChvWE1MUGFyZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgdmFyIHNDb2xsZWN0ZWRUeHQgPSBcIlwiO1xyXG4gICAgZm9yICh2YXIgb05vZGUsIHNQcm9wLCB2Q29udGVudCwgbkl0ZW0gPSAwOyBuSXRlbSA8IG9YTUxQYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7IG5JdGVtKyspIHtcclxuICAgICAgb05vZGUgPSBvWE1MUGFyZW50LmNoaWxkTm9kZXMuaXRlbShuSXRlbSk7XHJcbiAgICAgIC8qanNoaW50IGJpdHdpc2U6IGZhbHNlKi9cclxuICAgICAgaWYgKChvTm9kZS5ub2RlVHlwZSAtIDEgfCAxKSA9PT0gMykgeyBzQ29sbGVjdGVkVHh0ICs9IG9Ob2RlLm5vZGVUeXBlID09PSAzID8gb05vZGUubm9kZVZhbHVlLnRyaW0oKSA6IG9Ob2RlLm5vZGVWYWx1ZTsgfVxyXG4gICAgICBlbHNlIGlmIChvTm9kZS5ub2RlVHlwZSA9PT0gMSAmJiAhb05vZGUucHJlZml4KSB7XHJcbiAgICAgICAgc1Byb3AgPSB1dGlsaXRpZXMuZGVjYXBpdGFsaXplKG9Ob2RlLm5vZGVOYW1lKTtcclxuICAgICAgICB2Q29udGVudCA9IG5ldyB4bWwuSlhPTlRyZWUob05vZGUpO1xyXG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHNQcm9wKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXNbc1Byb3BdLmNvbnN0cnVjdG9yICE9PSBBcnJheSkgeyB0aGlzW3NQcm9wXSA9IFt0aGlzW3NQcm9wXV07IH1cclxuICAgICAgICAgIHRoaXNbc1Byb3BdLnB1c2godkNvbnRlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7IHRoaXNbc1Byb3BdID0gdkNvbnRlbnQ7IH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHNDb2xsZWN0ZWRUeHQpIHsgdGhpcy5rZXlWYWx1ZSA9IHBhcnNlVGV4dChzQ29sbGVjdGVkVHh0KTsgfVxyXG4gIH1cclxuXHJcbiAgLy9JRTggU3R1cGlkIGZpeFxyXG4gIHZhciBoYXNBdHRyID0gdHlwZW9mIG9YTUxQYXJlbnQuaGFzQXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCc/IG9YTUxQYXJlbnQuYXR0cmlidXRlcy5sZW5ndGggPiAwOiBvWE1MUGFyZW50Lmhhc0F0dHJpYnV0ZXMoKTtcclxuICBpZiAoaGFzQXR0cikge1xyXG4gICAgdmFyIG9BdHRyaWI7XHJcbiAgICBmb3IgKHZhciBuQXR0cmliID0gMDsgbkF0dHJpYiA8IG9YTUxQYXJlbnQuYXR0cmlidXRlcy5sZW5ndGg7IG5BdHRyaWIrKykge1xyXG4gICAgICBvQXR0cmliID0gb1hNTFBhcmVudC5hdHRyaWJ1dGVzLml0ZW0obkF0dHJpYik7XHJcbiAgICAgIHRoaXNbXCJAXCIgKyB1dGlsaXRpZXMuZGVjYXBpdGFsaXplKG9BdHRyaWIubmFtZSldID0gcGFyc2VUZXh0KG9BdHRyaWIudmFsdWUudHJpbSgpKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG54bWwuSlhPTlRyZWUucHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbihhdHRyKSB7XHJcbiAgcmV0dXJuIHRoaXNbJ0AnICsgdXRpbGl0aWVzLmRlY2FwaXRhbGl6ZShhdHRyKV07XHJcbn07XHJcblxyXG54bWwudG9KWE9OVHJlZSA9IGZ1bmN0aW9uIHRvSlhPTlRyZWUoeG1sU3RyaW5nKXtcclxuICB2YXIgeG1sRG9jID0geG1sLnN0clRvWE1MRG9jKHhtbFN0cmluZyk7XHJcbiAgcmV0dXJuIG5ldyB4bWwuSlhPTlRyZWUoeG1sRG9jKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gZXh0cmFjdCB0aGUga2V5dmFsdWUgb2YgYSBKWE9OVHJlZSBvYmpcclxuICpcclxuICogQHBhcmFtIHhtbE9iaiB7SlhPTlRyZWV9XHJcbiAqIHJldHVybiB0aGUga2V5IHZhbHVlIG9yIHVuZGVmaW5lZDtcclxuICovXHJcbnhtbC5rZXlWYWx1ZSA9IGZ1bmN0aW9uIGdldEtleVZhbHVlKHhtbE9iaikge1xyXG4gIGlmKHhtbE9iail7XHJcbiAgICByZXR1cm4geG1sT2JqLmtleVZhbHVlO1xyXG4gIH1cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59O1xyXG5cclxueG1sLmF0dHIgPSBmdW5jdGlvbiBnZXRBdHRyVmFsdWUoeG1sT2JqLCBhdHRyKSB7XHJcbiAgaWYoeG1sT2JqKSB7XHJcbiAgICByZXR1cm4geG1sT2JqWydAJyArIHV0aWxpdGllcy5kZWNhcGl0YWxpemUoYXR0cildO1xyXG4gIH1cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59O1xyXG5cclxueG1sLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZVhNTChzdHIpIHtcclxuICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhzdHIpKSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICByZXR1cm4gc3RyLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcclxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcclxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcclxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcclxuICAgIC5yZXBsYWNlKC8nL2csICcmYXBvczsnKTtcclxufTtcclxuXHJcbnhtbC5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGVYTUwoc3RyKSB7XHJcbiAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcoc3RyKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mYXBvczsvZywgXCInXCIpXHJcbiAgICAucmVwbGFjZSgvJnF1b3Q7L2csICdcIicpXHJcbiAgICAucmVwbGFjZSgvJmd0Oy9nLCAnPicpXHJcbiAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXHJcbiAgICAucmVwbGFjZSgvJmFtcDsvZywgJyYnKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0geG1sO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5yZXF1aXJlKCcuL3BsdWdpbi9jb21wb25lbnRzL2Fkcy1sYWJlbF80Jyk7XHJcbnJlcXVpcmUoJy4vcGx1Z2luL2NvbXBvbmVudHMvYmxhY2stcG9zdGVyXzQnKTtcclxuXHJcbnZhciB2aWRlb0pzVkFTVCA9IHJlcXVpcmUoJy4vcGx1Z2luL3ZpZGVvanMudmFzdC52cGFpZCcpO1xyXG5cclxudmlkZW9qcy5wbHVnaW4oJ3Zhc3RDbGllbnQnLCB2aWRlb0pzVkFTVCk7XHJcblxyXG4iXX0=
