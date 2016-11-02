/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _nButton = __webpack_require__(4);

	Object.keys(_nButton).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _nButton[key];
	    }
	  });
	});

	var _nCheck = __webpack_require__(16);

	Object.keys(_nCheck).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _nCheck[key];
	    }
	  });
	});

	var _nDate = __webpack_require__(17);

	Object.keys(_nDate).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _nDate[key];
	    }
	  });
	});

	var _nIcon = __webpack_require__(18);

	Object.keys(_nIcon).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _nIcon[key];
	    }
	  });
	});

	var _nLabel = __webpack_require__(20);

	Object.keys(_nLabel).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _nLabel[key];
	    }
	  });
	});

	var _nList = __webpack_require__(21);

	Object.keys(_nList).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _nList[key];
	    }
	  });
	});

	var _nPanel = __webpack_require__(22);

	Object.keys(_nPanel).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _nPanel[key];
	    }
	  });
	});

	var _nRadio = __webpack_require__(23);

	Object.keys(_nRadio).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _nRadio[key];
	    }
	  });
	});

	var _nSelect = __webpack_require__(24);

	Object.keys(_nSelect).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _nSelect[key];
	    }
	  });
	});

	var _nTab = __webpack_require__(25);

	Object.keys(_nTab).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _nTab[key];
	    }
	  });
	});

	var _nTable = __webpack_require__(26);

	Object.keys(_nTable).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _nTable[key];
	    }
	  });
	});

	var _nTextArea = __webpack_require__(27);

	Object.keys(_nTextArea).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _nTextArea[key];
	    }
	  });
	});

	var _nText = __webpack_require__(28);

	Object.keys(_nText).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _nText[key];
	    }
	  });
	});

	var _nTree = __webpack_require__(29);

	Object.keys(_nTree).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _nTree[key];
	    }
	  });
	});

	var _nDialog = __webpack_require__(30);

	Object.keys(_nDialog).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _nDialog[key];
	    }
	  });
	});

	var _nForm = __webpack_require__(31);

	Object.keys(_nForm).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _nForm[key];
	    }
	  });
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.NButtonBar = exports.NButton = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nComponent = __webpack_require__(5);

	Object.keys(_nComponent).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _nComponent[key];
			}
		});
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NButton = function (_NDropdownComponent) {
		_inherits(NButton, _NDropdownComponent);

		function NButton() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, NButton);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NButton.__proto__ || Object.getPrototypeOf(NButton)).call.apply(_ref, [this].concat(args))), _this), _this.onDropdownIconClicked = function (evt) {
				if (_this.isEnabled() && !evt.isDefaultPrevented()) {
					evt.preventDefault();
					_this.showDropdown();
				}
			}, _this.onComponentClicked = function (evt) {
				if (_this.isClickable()) {
					// click defined, event there are dropdown items
					// always respond click handler
					_this.fireEventToMonitor(evt, 'click');
				} else if (_this.hasDropdown(_this.getDropdownItems())) {
					_this.onDropdownIconClicked(evt);
				}
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(NButton, [{
			key: 'renderIcon',
			value: function renderIcon(icon) {
				return this.renderInternalComponent(icon);
			}
		}, {
			key: 'renderLeftIcon',
			value: function renderLeftIcon() {
				var icon = this.getLeftIcon();
				if (icon) {
					return this.renderIcon(icon);
				}
			}
		}, {
			key: 'renderRightIcon',
			value: function renderRightIcon() {
				var icon = this.getRightIcon();
				if (icon) {
					return this.renderIcon(icon);
				}
			}
		}, {
			key: 'renderDropdownIcon',
			value: function renderDropdownIcon(dropdown) {
				if (dropdown.has && !dropdown.separated) {
					return _nComponent.React.createElement('i', { className: 'fa fa-fw fa-caret-down n-button-dropdown-icon',
						onClick: this.onDropdownIconClicked });
				} else {
					return null;
				}
			}
		}, {
			key: 'renderText',
			value: function renderText(dropdown) {
				return _nComponent.React.createElement(
					'button',
					{ className: (0, _nComponent.classnames)('n-control n-btn n-clickable', this.getButtonStyle()),
						onClick: this.onComponentClicked },
					this.renderLeftIcon(),
					this.getDisplayText(),
					this.renderRightIcon(),
					this.renderDropdownIcon(dropdown)
				);
			}
		}, {
			key: 'renderSeparatedDropdownIcon',
			value: function renderSeparatedDropdownIcon(dropdown) {
				if (dropdown.has && dropdown.separated) {
					var className = (0, _nComponent.classnames)('n-control n-btn n-button-dropdown-icon n-clickable', this.getButtonStyle());
					return _nComponent.React.createElement(
						'button',
						{ className: className,
							onClick: this.onDropdownIconClicked },
						_nComponent.React.createElement('i', { className: 'fa fa-fw fa-caret-down' })
					);
				} else {
					return null;
				}
			}
		}, {
			key: 'renderDropdownItem',
			value: function renderDropdownItem(item, itemIndex) {
				return _nComponent.React.createElement(
					'li',
					{ key: itemIndex },
					this.renderInternalComponent(item)
				);
			}
		}, {
			key: 'renderDropdownItems',
			value: function renderDropdownItems(dropdown) {
				var _this2 = this;

				if (!dropdown.has) {
					return null;
				}
				return _nComponent.React.createElement(
					'ul',
					{ className: 'n-button-dropdown n-dropdown n-text-left',
						ref: 'dropdown' },
					dropdown.items.map(function (item, itemIndex) {
						return _this2.renderDropdownItem(item, itemIndex);
					})
				);
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var dropdown = this.prepareDropdownItems();

				var className = (0, _nComponent.classnames)(this.getComponentStyle(), {
					'n-button-group': dropdown.has && dropdown.separated
				});
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						ref: 'me' },
					this.renderText(dropdown),
					this.renderSeparatedDropdownIcon(dropdown),
					this.renderDropdownItems(dropdown)
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-button';
			}
		}, {
			key: 'getDisplayText',
			value: function getDisplayText() {
				return this.isTextFromModel() ? this.getValueFromModel() : this.getLabel();
			}
		}, {
			key: 'isTextFromModel',
			value: function isTextFromModel() {
				return this.getLayoutOptionValue('textFromModel', false);
			}
		}, {
			key: 'getButtonStyle',
			value: function getButtonStyle() {
				return 'n-btn-' + this.getLayoutOptionValue('style', 'default');
			}
		}, {
			key: 'getLeftIcon',
			value: function getLeftIcon() {
				return this.getLayoutOptionValue('leftIcon');
			}
		}, {
			key: 'getRightIcon',
			value: function getRightIcon() {
				return this.getLayoutOptionValue('rightIcon');
			}
		}, {
			key: 'getDropdownItems',
			value: function getDropdownItems() {
				return this.wrapToArray(this.getLayoutOptionValue('dropdownItems'));
			}
		}, {
			key: 'prepareDropdownItems',
			value: function prepareDropdownItems() {
				var items = this.getDropdownItems();
				return {
					has: this.hasDropdown(items),
					separated: this.isHasClickHanlder(),
					items: items
				};
			}
		}, {
			key: 'hasDropdown',
			value: function hasDropdown(dropdownItems) {
				return dropdownItems && dropdownItems.length > 0;
			}
		}]);

		return NButton;
	}((0, _nComponent.NDropdownComponent)(_nComponent.NComponent));

	var NButtonBar = function (_NContainer) {
		_inherits(NButtonBar, _NContainer);

		function NButtonBar() {
			_classCallCheck(this, NButtonBar);

			return _possibleConstructorReturn(this, (NButtonBar.__proto__ || Object.getPrototypeOf(NButtonBar)).apply(this, arguments));
		}

		_createClass(NButtonBar, [{
			key: 'renderButtons',
			value: function renderButtons() {
				var _this4 = this;

				var buttons = this.getButtons();
				return buttons.map(function (button, buttonIndex) {
					if (!button.comp) {
						button.comp = {};
					}
					if (!button.comp.type) {
						button.comp.type = _nComponent.Envs.COMPONENT_TYPES.BUTTON;
					}
					if (!button.styles) {
						button.styles = {};
					}
					if (!button.styles.comp) {
						button.styles.comp = 'n-float-right';
					}
					return _this4.renderInternalComponent(button, {
						key: buttonIndex
					});
				});
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				return _nComponent.React.createElement(
					'div',
					{ className: this.getComponentStyle(),
						ref: 'me' },
					this.renderLeadingDOMChildren(),
					this.renderLeadingChildren(),
					this.renderButtons(),
					this.renderTailingChildren(),
					this.renderTailingDOMChildren()
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-button-bar';
			}
		}, {
			key: 'getButtons',
			value: function getButtons() {
				var buttons = this.getLayoutOptionValue('buttons');
				return buttons ? buttons : [];
			}
		}]);

		return NButtonBar;
	}(_nComponent.NContainer);

	_nComponent.Envs.COMPONENT_TYPES.BUTTON = { type: 'n-button', label: false, popover: false, error: false };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.BUTTON.type, function (options) {
		return _nComponent.React.createElement(NButton, options);
	});
	_nComponent.Envs.COMPONENT_TYPES.BUTTON_BAR = { type: 'n-button-bar', label: false, popover: false, error: false };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.BUTTON_BAR.type, function (options) {
		return _nComponent.React.createElement(NButtonBar, options);
	});

	exports.NButton = NButton;
	exports.NButtonBar = NButtonBar;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.NHierarchyComponent = exports.NCollapsibleContainer = exports.NContainer = exports.NCodeTableComponent = exports.NDropdownComponent = exports.NAddonComponent = exports.NComponent = exports.NWidget = exports.classnames = exports.$ = exports.jQuery = exports.ReactDOM = exports.React = undefined;

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(6);

	Object.keys(_model).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _model[key];
			}
		});
	});

	var _validation = __webpack_require__(10);

	Object.keys(_validation).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _validation[key];
			}
		});
	});

	var _layout = __webpack_require__(11);

	Object.keys(_layout).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _layout[key];
			}
		});
	});

	var _envs = __webpack_require__(8);

	Object.keys(_envs).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _envs[key];
			}
		});
	});

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(13);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _jquery = __webpack_require__(14);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _classnames = __webpack_require__(15);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var $ = _jquery2.default;

	var NWidget = function (_React$Component) {
		_inherits(NWidget, _React$Component);

		function NWidget() {
			_classCallCheck(this, NWidget);

			return _possibleConstructorReturn(this, (NWidget.__proto__ || Object.getPrototypeOf(NWidget)).apply(this, arguments));
		}

		_createClass(NWidget, [{
			key: 'me',
			value: function me() {
				return _reactDom2.default.findDOMNode(this.refs.me);
			}
		}, {
			key: '$me',
			value: function $me() {
				return $(this.me());
			}
		}]);

		return NWidget;
	}(_react2.default.Component);

	var NComponent = function (_NWidget) {
		_inherits(NComponent, _NWidget);

		function NComponent(props) {
			_classCallCheck(this, NComponent);

			var _this2 = _possibleConstructorReturn(this, (NComponent.__proto__ || Object.getPrototypeOf(NComponent)).call(this, props));

			_this2.state = {};

			_this2.buildLayout(props);
			return _this2;
		}

		_createClass(NComponent, [{
			key: 'buildLayout',
			value: function buildLayout(props) {
				if (!props.layout) {
					// collect all n- attributes
					this.layoutFromDOM = _layout.Layout.buildLayoutByProps(props);
				} else {
					props.layout.mergeLayoutFromProps(props);
				}
				// calculate enabled and visible on willMount and willUpdate
				this.state.enabled = this.invokeMonitorRule('enabled', true);
				this.state.visible = this.invokeMonitorRule('visible', true);
			}

			// returns additional model only if additional model designated and @isUsingPrimaryModel is false

		}, {
			key: 'getModel',
			value: function getModel() {
				return this.isUsingPrimaryModel() ? this.getPrimaryModel() : this.getAdditionalModel();
			}
			// additional model from layout

		}, {
			key: 'getAdditionalModel',
			value: function getAdditionalModel() {
				var model = this.getLayout().getAdditionalModel();
				return model ? model : this.getPrimaryModel();
			}
			// primary model from props

		}, {
			key: 'getPrimaryModel',
			value: function getPrimaryModel() {
				return this.props.model;
			}
			// default not use primary model
			// when additional model is not designated in layout
			// @getAdditionalModel will returns primary model instead

		}, {
			key: 'isUsingPrimaryModel',
			value: function isUsingPrimaryModel() {
				return this.getLayoutOptionValue('usePrimaryModel', true);
			}
		}, {
			key: 'getLayout',
			value: function getLayout() {
				return this.props.layout || this.layoutFromDOM;
			}
		}, {
			key: 'getOrientation',
			value: function getOrientation() {
				return this.props.orientation;
			}
		}, {
			key: 'isViewMode',
			value: function isViewMode() {
				return this.props.viewMode ? true : false;
			}

			// lifecycle

		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(nextProps, nextState) {
				this.buildLayout(nextProps);
				this.uninstallUnderlyingMonitors({
					pre: this.preWillUpdate,
					post: this.postWillUpdate
				}, nextProps, nextState);
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps, prevState) {
				this.installUnderlyingMonitors({
					pre: this.preDidUpdate,
					post: this.postDidUpdate
				}, prevProps, prevState);
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				this.uninstallUnderlyingMonitors({
					pre: this.preWillUnmount,
					post: this.postWillUnmount
				});
				delete this.state.boundFuncList;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.installUnderlyingMonitors({
					pre: this.preDidMount,
					post: this.postDidMount
				});
			}

			// first parameter is a json of pointcut methods

		}, {
			key: 'installUnderlyingMonitors',
			value: function installUnderlyingMonitors() {
				return this.pointcutPreExecutor.apply(this, arguments).internalInstallLifecycleMonitors().internalInstallDOMListeners().pointcutPostExecutor.apply(this, arguments).doAfterRender();
			}
		}, {
			key: 'doAfterRender',
			value: function doAfterRender() {
				return this;
			}
		}, {
			key: 'internalInstallDOMListeners',
			value: function internalInstallDOMListeners() {
				var _this3 = this;

				var listeners = this.getDOMEventMonitors();
				var me = this.$me();
				Object.keys(listeners).forEach(function (key) {
					var listener = listeners[key];
					if (typeof listener === 'function') {
						me.on(key, _this3.bindToThis(listener));
					} else {
						if (listener.once) {
							me.one(key, listener.selector, listener.data, _this3.bindToThis(listener.handler));
						} else {
							me.on(key, listener.selector, listener.data, _this3.bindToThis(listener.handler));
						}
					}
				});
				return this;
			}
		}, {
			key: 'internalInstallLifecycleMonitors',
			value: function internalInstallLifecycleMonitors() {
				return this.addPostChangeListener(this.bindToThis(this.onModelChanged)).addPostValidateListener(this.bindToThis(this.onModelValidated)).detectMonitors(['enabled', 'visible'], this.onMonitorChangeDetected).detectMonitors(['watch']).detectMonitors(['validate'], this.onValidateDetected);
			}
		}, {
			key: 'uninstallUnderlyingMonitors',
			value: function uninstallUnderlyingMonitors() {
				return this.pointcutPreExecutor.apply(this, arguments).internalUninstallLifecycleMonitors().internalUninstallDOMListeners().pointcutPostExecutor.apply(this, arguments);
			}
		}, {
			key: 'internalUninstallDOMListeners',
			value: function internalUninstallDOMListeners() {
				var _this4 = this;

				var listeners = this.getDOMEventMonitors();
				var me = this.$me();
				Object.keys(listeners).forEach(function (key) {
					var listener = listeners[key];
					if (typeof listener === 'function') {
						me.off(key, _this4.bindToThis(listener));
					} else {
						me.off(key, listener.selector, listener.data, _this4.bindToThis(listener.handler));
					}
				});
				return this;
			}
		}, {
			key: 'internalUninstallLifecycleMonitors',
			value: function internalUninstallLifecycleMonitors() {
				return this.removePostChangeListener(this.bindToThis(this.onModelChanged)).removePostValidateListener(this.bindToThis(this.onModelValidated)).undetectMonitors(['enabled', 'visible'], this.onMonitorChangeDetected).undetectMonitors(['watch']).undetectMonitors(['validate'], this.onValidateDetected);
			}
			// life cycle pointcut executor

		}, {
			key: 'pointcutPreExecutor',
			value: function pointcutPreExecutor(pointcut) {
				if (pointcut && pointcut.pre) {
					pointcut.pre.apply(this, Array.prototype.slice.call(arguments, 1));
				}
				return this;
			}
		}, {
			key: 'pointcutPostExecutor',
			value: function pointcutPostExecutor(pointcut) {
				if (pointcut && pointcut.post) {
					pointcut.post.apply(this, Array.prototype.slice.call(arguments, 1));
				}
				return this;
			}

			// model listeners

		}, {
			key: 'addPostChangeListener',
			value: function addPostChangeListener(listener) {
				return this.addModelListener(listener, this.getModel().addPostChangeListener);
			}
		}, {
			key: 'removePostChangeListener',
			value: function removePostChangeListener(listener) {
				return this.addModelListener(listener, this.getModel().removePostChangeListener);
			}
		}, {
			key: 'addPostAddListener',
			value: function addPostAddListener(listener) {
				return this.addModelListener(listener, this.getModel().addPostAddListener);
			}
		}, {
			key: 'removePostAddListener',
			value: function removePostAddListener(listener) {
				return this.addModelListener(listener, this.getModel().removePostAddListener);
			}
		}, {
			key: 'addPostRemoveListener',
			value: function addPostRemoveListener(listener) {
				return this.addModelListener(listener, this.getModel().addPostRemoveListener);
			}
		}, {
			key: 'removePostRemoveListener',
			value: function removePostRemoveListener(listener) {
				return this.addModelListener(listener, this.getModel().removePostRemoveListener);
			}
		}, {
			key: 'addPostValidateListener',
			value: function addPostValidateListener(listener) {
				return this.addModelListener(listener, this.getModel().addPostValidateListener);
			}
		}, {
			key: 'removePostValidateListener',
			value: function removePostValidateListener(listener) {
				return this.addModelListener(listener, this.getModel().removePostValidateListener);
			}

			// func is the add/remove method for listener on model object

		}, {
			key: 'addModelListener',
			value: function addModelListener(listener, funcOnModel) {
				if (listener) {
					funcOnModel.call(this.getModel(), this.getDataId(), listener);
				}
				return this;
			}
		}, {
			key: 'onModelChanged',
			value: function onModelChanged(evt) {
				if (this.getModel().getValidator() && this.isValidateImmediately()) {
					this.getModel().validate(this.getDataId());
				} else {
					this.forceUpdate();
				}
			}
		}, {
			key: 'onModelValidated',
			value: function onModelValidated(evt) {
				this.forceUpdate();
			}
		}, {
			key: 'onMonitorChangeDetected',
			value: function onMonitorChangeDetected(evt) {
				this.forceUpdate();
			}
		}, {
			key: 'onValidateDetected',
			value: function onValidateDetected(evt) {
				this.getModel().validate(this.getDataId());
			}
		}, {
			key: 'isValidateImmediately',
			value: function isValidateImmediately() {
				return this.getLayoutOptionValue('validateImmediately', true);
			}
		}, {
			key: 'getValidationResult',
			value: function getValidationResult() {
				return this.getModel().getValidationResults(this.getDataId());
			}

			// option designated monitors
			// can be defined as 
			// 1. function, then no dependency
			// 2. json with depends, rule
			// 	  depends and rule are both optional; 
			//	  no rule, monitor the dependencies, return true when run rule.
			//	  no depends, monitor nothing, call rule function when run rule. rule must be a function if defined.
			// 3. return monitor itself

		}, {
			key: 'addDependencyMonitor',
			value: function addDependencyMonitor(dependency, handler) {
				this.manageDependencyMonitor(dependency, handler, _model.Model.prototype.addPostChangeListener);
			}
		}, {
			key: 'removeDependencyMonitor',
			value: function removeDependencyMonitor(dependency, handler) {
				this.manageDependencyMonitor(dependency, handler, _model.Model.prototype.removePostChangeListener);
			}
		}, {
			key: 'manageDependencyMonitor',
			value: function manageDependencyMonitor(dependency, handler, manageFunction) {
				var model = void 0;
				if (typeof dependency === 'string') {
					// monitor property on current model
					model = this.getModel();
					manageFunction.call(model, dependency, handler);
				} else {
					var on = dependency.on;
					var id = dependency.id;

					if (on === 'p') {
						model = this.getPrimaryModel();
					} else if (on === 'a') {
						model = this.getAdditionalModel();
					}
					manageFunction.call(model, id, handler);
				}
				return this;
			}
		}, {
			key: 'detectMonitor',
			value: function detectMonitor(key, handler) {
				return this.manageMonitor(key, handler, this.addDependencyMonitor);
			}
		}, {
			key: 'undetectMonitor',
			value: function undetectMonitor(key, handler) {
				return this.manageMonitor(key, handler, this.removeDependencyMonitor);
			}
		}, {
			key: 'manageMonitor',
			value: function manageMonitor(key, handler, manageFunction) {
				var _this5 = this;

				this.wrapToArray(this.getLayoutOptionValue(key)).forEach(function (def) {
					if (def && def.depends) {
						var depends = def.depends;
						depends = _this5.wrapToArray(depends);
						depends.forEach(function (depend) {
							if (handler) {
								manageFunction.call(_this5, depend, _this5.bindToThis(handler));
							} else {
								manageFunction.call(_this5, depend, _this5.bindToThis(def.rule ? def.rule : _this5.onMonitorChangeDetected));
							}
						});
					}
				});
				return this;
			}
		}, {
			key: 'detectMonitors',
			value: function detectMonitors(optionKeys, handler) {
				return this.manageMonitors(optionKeys, handler, this.detectMonitor);
			}
		}, {
			key: 'undetectMonitors',
			value: function undetectMonitors(optionKeys, handler) {
				return this.manageMonitors(optionKeys, handler, this.undetectMonitor);
			}
		}, {
			key: 'manageMonitors',
			value: function manageMonitors(optionsKeys, handler, manageFunction) {
				var _this6 = this;

				optionsKeys.forEach(function (key) {
					// monitor must be bindToThis
					manageFunction.call(_this6, key, handler);
				});
				return this;
			}
			// bind given function to this, and cache.
			// retrieve from cache or create it.

		}, {
			key: 'bindToThis',
			value: function bindToThis(func) {
				if (this.state.boundFuncList == null) {
					this.state.boundFuncList = [];
				}
				var list = this.state.boundFuncList;
				var index = list.indexOf(func);
				if (index === -1) {
					list.push(func);
					list.push(func.bind(this));
					return list[list.length - 1];
				} else {
					return list[index + 1];
				}
			}
		}, {
			key: 'invokeMonitorRule',
			value: function invokeMonitorRule(key, defaultValue) {
				var def = this.getLayoutOptionValue(key);
				if (this.isNoValueAssigned(def)) {
					return defaultValue;
				}
				if (def.rule) {
					return def.rule.call(this);
				} else if (def.depends) {
					return defaultValue;
				} else if (typeof def === 'function') {
					return def.call(this);
				} else {
					return def;
				}
			}

			// values

		}, {
			key: 'getValueFromModel',
			value: function getValueFromModel() {
				return this.getModel().get(this.getDataId());
			}
		}, {
			key: 'setValueToModel',
			value: function setValueToModel(value) {
				if (this.isValueChanged(value)) {
					this.getModel().set(this.getDataId(), value);
				}
			}
		}, {
			key: 'isValueChanged',
			value: function isValueChanged(value) {
				var old = this.getModel().get(this.getDataId());
				return !((typeof old === 'undefined' ? 'undefined' : _typeof(old)) === (typeof value === 'undefined' ? 'undefined' : _typeof(value)) && old == value);
			}

			// id must be a string

		}, {
			key: 'getId',
			value: function getId() {
				return this.getLayout().getId();
			}
			// data id can be string or function

		}, {
			key: 'getDataId',
			value: function getDataId() {
				var dataId = this.getLayout().getDataId();
				// use id as data id if not designated
				dataId = this.isNoValueAssigned(dataId) ? this.getId() : dataId;
				return this.wrapOptionValue(dataId);
			}
			// label can be string or function

		}, {
			key: 'getLabel',
			value: function getLabel() {
				return this.wrapOptionValue(this.getLayout().getLabel());
			}
		}, {
			key: 'isLabelShown',
			value: function isLabelShown() {
				return this.getLayout().isLabelShown();
			}
			// position can be string or function

		}, {
			key: 'getWidth',
			value: function getWidth() {
				return this.wrapOptionValue(this.getLayout().getWidth());
			}
		}, {
			key: 'getLabelWidth',
			value: function getLabelWidth() {
				return this.getLayoutOptionValue('labelWidth', _envs.Envs.LABEL_WIDTH);
			}
		}, {
			key: 'getComponentInternalWidth',
			value: function getComponentInternalWidth(labelWidth) {
				var _this7 = this;

				var compWidth = this.getLayoutOptionValue('compWidth');
				if (compWidth) {
					return compWidth;
				} else {
					labelWidth = labelWidth ? labelWidth : _envs.Envs.LABEL_WIDTH;
					if (typeof labelWidth === 'number' || typeof labelWidth === 'string') {
						compWidth = _envs.Envs.CELL_COLUMNS - _envs.Envs.LABEL_WIDTH;
					} else {
						(function () {
							var cellColumns = _this7.getLayoutOptionValue('cellColumns', _envs.Envs.CELL_COLUMNS);
							compWidth = Object.keys(labelWidth).reduce(function (prev, next) {
								var width = labelWidth[next];
								if (typeof width === 'number' || typeof width === 'string') {
									prev[next] = cellColumns - width;
								}
								return prev;
							}, {});
						})();
					}
					var correct = true;
					if (typeof compWidth === 'number') {
						correct = !isNaN(compWidth);
					} else {
						correct = Object.keys(compWidth).some(function (key) {
							if (isNaN(compWidth[key])) {
								return true;
							}
						});
					}
					if (!correct) {
						throw {
							message: 'Cannot compute component internal width on label width',
							labelWidth: labelWidth
						};
					} else {
						return compWidth;
					}
				}
			}
		}, {
			key: 'getLabelPosition',
			value: function getLabelPosition() {
				var pos = this.getLayoutOptionValue('labelPosition', _envs.Envs.LABEL_POSITION);
				if (typeof pos === 'string') {
					return 'n-comp-label-' + pos;
				} else {
					return (0, _classnames2.default)(Object.keys(pos).reduce(function (prev, next) {
						prev['n-comp-label-' + next] = pos[next];
						return prev;
					}, {}));
				}
			}
		}, {
			key: 'getWidthClassName',
			value: function getWidthClassName(width, clear) {
				if (arguments.length === 0) {
					throw 'At least one parameter be passed';
				}
				var widthClassName = '';
				if (width != null) {
					var type = typeof width === 'undefined' ? 'undefined' : _typeof(width);
					if (type === 'number') {
						// only returns sm, for width over sm definition
						widthClassName = 'n-col-sm-' + width;
					} else if (type === 'string') {
						var segments = width.split(',');
						if (segments.length == 1) {
							widthClassName = 'n-col-sm-' + width;
						} else {
							widthClassName = (0, _classnames2.default)(segments.map(function (segment) {
								return 'n-col-' + segment;
							}));
						}
					} else {
						widthClassName = (0, _classnames2.default)(Object.keys(width).map(function (key) {
							return 'n-col-' + key + '-' + width[key];
						}));
					}
				}
				var clearClassName = '';
				if (clear != null) {
					if (clear === true) {
						// only returns sm, for width over sm definition
						clearClassName = 'n-clear-both-sm';
					} else if (clear === false) {
						// do nothing
					} else if (typeof clear === 'string') {
						clearClassName = (0, _classnames2.default)(clear.split(',')).map(function (segment) {
							var parts = segment.split(':');
							if (parts.length === 1) {
								return 'n-clear-' + segment + '-sm';
							} else {
								return (0, _classnames2.default)(parts[1].split(' ').map(function (size) {
									return 'n-clear-' + parts[0] + '-' + size;
								}));
							}
						});
					} else {
						clearClassName = (0, _classnames2.default)(Object.keys(clear).map(function (key) {
							var value = clear[key];
							if (value === true) {
								return 'n-clear-both-' + key;
							} else if (value === false) {
								return 'n-clear-none-' + key;
							} else if (typeof value === 'string') {
								return 'n-clear-' + value + '-' + key;
							} else {
								throw 'Unsupported clear type "' + value + '" for size "' + key + '"';
							}
						}));
					}
				}
				return (0, _classnames2.default)(widthClassName, clearClassName);
			}
		}, {
			key: 'getColumnIndex',
			value: function getColumnIndex() {
				return this.wrapOptionValue(this.getLayout().getColumnIndex());
			}
		}, {
			key: 'getRowIndex',
			value: function getRowIndex() {
				return this.wrapOptionValue(this.getLayout().getRowIndex());
			}
		}, {
			key: 'getPosition',
			value: function getPosition() {
				return this.getLayout().getPosition();
			}
			// styles

		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return null;
			}
		}, {
			key: 'getComponentStyle',
			value: function getComponentStyle() {
				return (0, _classnames2.default)(this.getStyle('comp'), this.getComponentClassName(), {
					'n-disabled': !this.isEnabled(),
					'n-view-mode': this.isViewMode()
				});
			}
		}, {
			key: 'getCellStyle',
			value: function getCellStyle() {
				return (0, _classnames2.default)(this.getStyle('cell'), this.getComponentClassName(), {
					'n-disabled': !this.isEnabled(),
					'n-view-mode': this.isViewMode()
				});
			}
		}, {
			key: 'getStyle',
			value: function getStyle(key) {
				return this.wrapOptionValue(this.getLayout().getStyle(key));
			}

			// get value by given key from layout
			// or to be defaultValue if not designated in layout
			// or to be defaultOptions from props if not designated from above

		}, {
			key: 'getLayoutOptionValue',
			value: function getLayoutOptionValue(key, defaultValue, noWrap) {
				var value = this.getLayout().getOptionValue(key);
				if (this.isNoValueAssigned(value)) {
					// not designated in layout
					if (this.isNoValueAssigned(defaultValue)) {
						// default value not designated
						if (!this.isNoValueAssigned(this.props.defaultOptions)) {
							// default option object designated
							// get value from default option object
							// value still might be null or undefined
							value = this.props.defaultOptions[key];
						}
					} else {
						// default value designated
						value = defaultValue;
					}
				}
				// wrap value
				return noWrap !== true ? this.wrapOptionValue(value) : value;
			}
		}, {
			key: 'wrapOptionValue',
			value: function wrapOptionValue(value) {
				if (typeof value === 'function') {
					// let context to be component itself
					return value.call(this);
				} else {
					// returns value directly
					return value;
				}
			}
		}, {
			key: 'wrapToArray',
			value: function wrapToArray(value) {
				if (this.isNoValueAssigned(value)) {
					return [];
				}
				return Array.isArray(value) ? value : [value];
			}
		}, {
			key: 'isNoValueAssigned',
			value: function isNoValueAssigned(value) {
				return typeof value === 'undefined' || value == null;
			}
		}, {
			key: 'isVisible',
			value: function isVisible() {
				if (this.state.visible == null) {
					this.state.visible = this.invokeMonitorRule('visible', true);
				}
				return this.state.visible;
			}
		}, {
			key: 'isEnabled',
			value: function isEnabled() {
				if (this.state.enabled == null) {
					this.state.enabled = this.invokeMonitorRule('enabled', true);
				}
				return this.state.enabled;
			}
		}, {
			key: 'getTabIndex',
			value: function getTabIndex() {
				return this.isEnabled() && !this.isViewMode() ? 0 : null;
			}
		}, {
			key: 'isClickable',
			value: function isClickable() {
				return this.isEnabled() && this.isHasClickHanlder();
			}
		}, {
			key: 'isHasClickHanlder',
			value: function isHasClickHanlder() {
				return this.getEventMonitor('click');
			}
		}, {
			key: 'renderNormalLine',
			value: function renderNormalLine() {
				return _react2.default.createElement('hr', { className: (0, _classnames2.default)('n-normal-line', this.getStyle('normal-line')),
					ref: 'normalLine' });
			}
		}, {
			key: 'renderFocusLine',
			value: function renderFocusLine() {
				return _react2.default.createElement('hr', { className: (0, _classnames2.default)('n-focus-line', this.getStyle('focus-line')),
					ref: 'focusLine' });
			}
			// only handle gain or lost

		}, {
			key: 'onComponentFocusChanged',
			value: function onComponentFocusChanged() {
				$(_reactDom2.default.findDOMNode(this.refs.normalLine)).toggleClass('focus');
				$(_reactDom2.default.findDOMNode(this.refs.focusLine)).toggleClass('focus');
			}

			// event 

		}, {
			key: 'getEventMonitors',
			value: function getEventMonitors() {
				return this.getLayout().getEventMonitors();
			}
		}, {
			key: 'getEventMonitor',
			value: function getEventMonitor(key) {
				return this.getLayout().getEventMonitor(key);
			}
			// event monitors which starts with 'jq.'
			// these monitors are added via jquery at didMount and didUpdate,
			// removed at willUnmount and willUpdate
			// value of event key can be function or a json contains once, selector, data, handler.
			// eg.
			// 'jq.click': function(evt) {}
			// or
			// 'jq.click': {
			//		once: true,
			//		selector: 'input',
			//		data: {data: 'some data'},
			//		handler: function(evt) {}
			// }
			// only handler is required, other 3 attributes are optional

		}, {
			key: 'getDOMEventMonitors',
			value: function getDOMEventMonitors() {
				var monitors = this.getEventMonitors();
				return Object.keys(monitors).reduce(function (set, key) {
					if (key.startsWith('jq.')) {
						var monitor = monitors[key];
						if (monitor) {
							set[key.substr(3)] = monitors[key];
						}
					}
					return set;
				}, {});
			}
			// monitors will bind to this and prepared for add to dom node

		}, {
			key: 'wrapMonitorsToDOM',
			value: function wrapMonitorsToDOM(monitors) {
				var _this8 = this;

				return Object.keys(monitors).reduce(function (set, key) {
					var newKey = key.charAt(0).toUpperCase() + key.slice(1);
					// bindToThis is important
					// after this, the function context always be react component itself
					set['on' + newKey] = _this8.bindToThis(monitors[key]);
					return set;
				}, {});
			}
		}, {
			key: 'fireEventToMonitor',
			value: function fireEventToMonitor(evt, key) {
				key = key ? key : evt.type;
				var monitor = this.getEventMonitor(key);
				if (monitor) {
					return monitor.call(this, evt);
				}
			}
		}, {
			key: 'handleEventResult',
			value: function handleEventResult(returnValue, options) {
				var _arguments = arguments;

				if (returnValue != null && typeof returnValue.done === 'function') {
					console.log(returnValue);
					returnValue.done(function () {
						options.handler.call(Array.prototype.slice.call(_arguments, 0));
					}).fail(function () {
						if (options.fail) {
							options.fail.call(Array.prototype.slice.call(_arguments, 0));
						}
					});
				} else {
					var handler = null;
					if (typeof returnValue === 'undefined') {
						handler = options.undefined || options.null;
					} else if (returnValue == null) {
						handler = options.null;
					} else {
						handler = options[returnValue];
					}
					if (handler == null) {
						handler = options.handler;
					}
					handler.call(this, returnValue);
				}
			}
		}, {
			key: 'getTextInViewMode',
			value: function getTextInViewMode() {
				return this.getValueFromModel();
			}
		}, {
			key: 'render',
			value: function render() {
				if (!this.isVisible()) {
					return null;
				}
				var validationResults = this.getValidationResult();

				var label = this.getLabel();
				var labelShown = this.isLabelShown();
				var cellClassName = this.getWidthClassName(this.getWidth(), this.wrapOptionValue(this.getLayout().getClear()));
				if (labelShown && label) {
					var labelWidth = this.getLabelWidth();
					var compWidth = this.getComponentInternalWidth(labelWidth);
					return _react2.default.createElement(
						'div',
						{ className: (0, _classnames2.default)(this.getLabelPosition(), cellClassName) },
						_react2.default.createElement(
							'div',
							{ className: 'n-row' },
							_react2.default.createElement(
								'div',
								{ className: (0, _classnames2.default)('n-comp-label', this.getWidthClassName(labelWidth)) },
								label
							),
							_react2.default.createElement(
								'div',
								{ className: (0, _classnames2.default)('n-comp', this.getWidthClassName(compWidth)) },
								this.renderComponent()
							),
							this.renderValidationResults(validationResults)
						)
					);
				} else if (cellClassName) {
					return _react2.default.createElement(
						'div',
						{ className: cellClassName },
						this.renderComponent(),
						this.renderValidationResults(validationResults)
					);
				} else if (validationResults) {
					return _react2.default.createElement(
						'div',
						null,
						this.renderComponent(),
						this.renderValidationResults(validationResults)
					);
				} else {
					return this.renderComponent();
				}
			}
		}, {
			key: 'renderValidationResults',
			value: function renderValidationResults(results) {
				var _this9 = this;

				if (results) {
					return _react2.default.createElement(
						'div',
						{ className: 'n-validation' },
						results.filter(function (result) {
							return result.rule !== _validation.Validator.CHILD;
						}).map(function (result, resultIndex) {
							var className = (0, _classnames2.default)('n-validation-result', {
								'n-validation-result-info': result.level === _validation.Validator.LEVEL_INFO,
								'n-validation-result-warning': result.level === _validation.Validator.LEVEL_WARN,
								'n-validation-result-error': result.level === _validation.Validator.LEVEL_ERROR
							});
							return _react2.default.createElement(
								'span',
								{ className: className,
									key: resultIndex },
								result.message.replace('%1', _this9.getLabel())
							);
						})
					);
				}
			}
		}, {
			key: 'renderComponent',
			value: function renderComponent() {
				if (this.isViewMode()) {
					return this.renderInViewMode();
				} else {
					return this.renderInNormal();
				}
			}
		}, {
			key: 'isViewModeSameAsNormal',
			value: function isViewModeSameAsNormal() {
				return true;
			}
		}, {
			key: 'renderInViewMode',
			value: function renderInViewMode() {
				var renderer = _envs.Envs.getViewModeRenderer(this.getLayout().getTypeAsString());
				if (renderer) {
					return _envs.Envs.render(renderer, {
						model: this.getModel(),
						layout: this.getLayout(),
						orientation: this.getOrientation(),
						viewMode: true,
						ref: 'view-comp'
					});
				}

				if (this.isViewModeSameAsNormal()) {
					return this.renderInNormal();
				}

				var label = this.getTextInViewMode();
				var layout = new _layout.Layout(this.getId(), $.extend(true, {}, {
					comp: this.getLayout().getOptions(),
					// view css
					css: this.getStyle('view')
				}, {
					label: label,
					dataId: this.getDataId(),
					comp: {
						type: _envs.Envs.COMPONENT_TYPES.LABEL,
						textFromModel: false
					}
				}));

				return _envs.Envs.render(renderer, {
					model: this.getModel(),
					layout: layout,
					orientation: this.getOrientation(),
					viewMode: true,
					ref: 'view-comp'
				});
			}
		}, {
			key: 'renderInternalComponent',
			value: function renderInternalComponent(layoutJSON) {
				var layout = new _layout.Layout(this.getDataId(), layoutJSON);
				var props = {
					model: this.getModel(),
					layout: layout,
					orientation: this.getOrientation(),
					viewMode: this.isViewMode(),
					container: this
				};
				if (arguments.length > 1) {
					_envs.Envs.deepMergeTo.apply(_envs.Envs, [props].concat(Array.prototype.slice.call(arguments, 1)));
				}
				return _envs.Envs.render(layout.getTypeAsString(), props);
			}
		}, {
			key: 'getContainer',
			value: function getContainer() {
				return this.props.container;
			}
		}]);

		return NComponent;
	}(NWidget);

	var NAddonComponent = function (_NComponent) {
		_inherits(NAddonComponent, _NComponent);

		function NAddonComponent() {
			_classCallCheck(this, NAddonComponent);

			return _possibleConstructorReturn(this, (NAddonComponent.__proto__ || Object.getPrototypeOf(NAddonComponent)).apply(this, arguments));
		}

		_createClass(NAddonComponent, [{
			key: 'renderAddon',

			// renderer
			value: function renderAddon(addon, addonIndex) {
				return this.renderInternalComponent(addon, {
					key: addonIndex
				});
			}
		}, {
			key: 'renderAddons',
			value: function renderAddons(addons) {
				var _this11 = this;

				if (!addons) {
					return null;
				}

				return _react2.default.createElement(
					'div',
					{ className: 'n-input-addon' },
					this.wrapToArray(addons).map(function (addon, addonIndex) {
						return _this11.renderAddon(addon, addonIndex);
					})
				);
			}
		}, {
			key: 'renderLead',
			value: function renderLead() {
				return this.renderAddons(this.getLead());
			}
		}, {
			key: 'renderTail',
			value: function renderTail() {
				return this.renderAddons(this.getTail());
			}
		}, {
			key: 'getLead',
			value: function getLead() {
				return this.getLayoutOptionValue('lead');
			}
		}, {
			key: 'getTail',
			value: function getTail() {
				return this.getLayoutOptionValue('tail');
			}
		}, {
			key: 'hasAddon',
			value: function hasAddon() {
				return this.getLead() || this.getTail();
			}
		}]);

		return NAddonComponent;
	}(NComponent);

	var NDropdownComponent = function NDropdownComponent(ParentClass) {
		return function (_ParentClass) {
			_inherits(_class, _ParentClass);

			function _class() {
				_classCallCheck(this, _class);

				return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
			}

			_createClass(_class, [{
				key: 'onDocumentMouseDown',
				value: function onDocumentMouseDown(evt) {
					if (evt.isDefaultPrevented()) {
						return;
					}
					if ($(evt.target).closest(this.$me()).length == 0) {
						this.hideDropdown();
					}
				}
			}, {
				key: 'onDocumentKeyUp',
				value: function onDocumentKeyUp(evt) {
					if (evt.isDefaultPrevented()) {
						return;
					}
					if (evt.keyCode === 27) {
						// escape
						this.hideDropdown();
					}
				}
			}, {
				key: 'isDropdownShown',
				value: function isDropdownShown() {
					return this.$me().hasClass('n-dropdown-open');
				}
			}, {
				key: 'showDropdown',
				value: function showDropdown() {
					var me = this.$me();
					if (!me.hasClass('n-dropdown-open')) {
						$(document).on('mousedown', this.bindToThis(this.onDocumentMouseDown)).on('keyup', this.bindToThis(this.onDocumentKeyUp));
						// TODO close other dropdowns, but no event fired
						$('.n-dropdown-open').removeClass('n-dropdown-open');
						me.addClass('n-dropdown-open');
						this.recalcDropdownPosition(this.getDropdown(), me);
						this.fireEventToMonitor($.Event('dropdownOpen', { target: me[0] }));
					}
				}
			}, {
				key: 'hideDropdown',
				value: function hideDropdown() {
					var me = this.$me();
					if (me.hasClass('n-dropdown-open')) {
						$(document).off('mousedown', this.bindToThis(this.onDocumentMouseDown)).off('keyup', this.bindToThis(this.onDocumentKeyUp));
						me.removeClass('n-dropdown-open');
						this.fireEventToMonitor($.Event('dropdownClose', { target: me[0] }));
					}
				}
			}, {
				key: 'toggleDropdown',
				value: function toggleDropdown() {
					var me = this.$me();
					if (!me.hasClass('n-dropdown-open')) {
						this.showDropdown();
					} else {
						this.hideDropdown();
					}
				}
			}, {
				key: 'getDropdown',
				value: function getDropdown() {
					return $(_reactDom2.default.findDOMNode(this.refs.dropdown));
				}
			}, {
				key: 'recalcDropdownPosition',
				value: function recalcDropdownPosition(dropdown, container) {
					var styles = {};
					styles.width = container.outerWidth();
					var offset = container.offset();
					// 1px offset
					// set the real top, assumpt it is on bottom
					styles.top = offset.top + container.outerHeight() + 1;
					styles.left = offset.left;

					var onTop = false;
					var rightToLeft = false;
					var realHeight = dropdown.outerHeight();
					var realWidth = dropdown.outerWidth();
					// check dropdown in top or bottom
					// TODO why outerHeight() here? according to jQuery's document, height() is the correct choice.
					// TODO but in Chrome 53.0.2785.116 m, height() returns same as $(document).height().
					// TODO and in Firefox 46.0.1, also same as Chrome.
					// TODO in IE11 or down to 10/9, exactly returns the value which described on jQuery doc.
					// TODO it really sucks
					if (styles.top + realHeight > $(window).outerHeight() + $(window).scrollTop()) {
						// cannot show in bottom and in current viewport
						// check it is enough top or not
						if (offset.top - $(window).scrollTop() >= realHeight) {
							// enough
							styles.top = offset.top - realHeight;
							onTop = true;
						} else if (styles.top + realHeight <= $(document).height()) {
							// can show in bottom and in current document
							onTop = false;
						} else if (offset.top < realHeight) {
							// cannot show in top and in current document
							onTop = false;
						} else {
							styles.top = offset.top - realHeight - 1;
							onTop = true;
						}
					} else {
						// can show in bottom and in current viewport
						onTop = false;
					}

					// check dropdown to left or right
					if (realWidth > styles.width) {
						var width = $(window).width();
						if (styles.left + realWidth <= width) {
							// normal from left to right, do nothing
						} else if (styles.left + styles.width >= realWidth) {
							// from right to left
							styles.left = styles.left + styles.width - realWidth;
							rightToLeft = true;
						} else {
							// still left to right, do nothing
						}
					}

					if (onTop) {
						container.addClass('n-dropdown-top').removeClass('n-dropdown-bottom');
					} else {
						container.removeClass('n-dropdown-top').addClass('n-dropdown-bottom');
					}
					if (rightToLeft) {
						container.addClass('n-dropdown-r2l').removeClass('n-dropdown-l2r');
					} else {
						container.addClass('n-dropdown-l2r').removeClass('n-dropdown-r2l');
					}
					// dropdown.css({top: styles.top, left: styles.left});
				}
			}]);

			return _class;
		}(ParentClass);
	};

	var NCodeTableComponent = function NCodeTableComponent(ParentClass) {
		return function (_ParentClass2) {
			_inherits(_class2, _ParentClass2);

			function _class2() {
				_classCallCheck(this, _class2);

				return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
			}

			_createClass(_class2, [{
				key: 'getCodeTable',
				value: function getCodeTable() {
					return this.getLayoutOptionValue('codes');
				}
			}]);

			return _class2;
		}(ParentClass);
	};

	var NContainer = function (_NComponent2) {
		_inherits(NContainer, _NComponent2);

		function NContainer() {
			_classCallCheck(this, NContainer);

			return _possibleConstructorReturn(this, (NContainer.__proto__ || Object.getPrototypeOf(NContainer)).apply(this, arguments));
		}

		_createClass(NContainer, [{
			key: 'renderLeadingDOMChildren',
			value: function renderLeadingDOMChildren(propsFromParent) {
				var _this15 = this;

				return _react2.default.Children.map(this.props.children, function (child) {
					if (child.props['data-leading']) {
						return _this15.renderDOMChild(child, propsFromParent);
					}
				});
			}
		}, {
			key: 'renderTailingDOMChildren',
			value: function renderTailingDOMChildren(propsFromParent) {
				var _this16 = this;

				return _react2.default.Children.map(this.props.children, function (child) {
					if (!child.props['data-leading']) {
						return _this16.renderDOMChild(child, propsFromParent);
					}
				});
			}
		}, {
			key: 'renderDOMChild',
			value: function renderDOMChild(child, propsFromParent) {
				if (typeof child.type === 'string') {
					// plain dom node
					return child;
				} else {
					// react node
					// pass props to child
					return _react2.default.createElement(child.type, _envs.Envs.deepMergeTo({
						model: this.getModel(),
						orientation: this.getOrientation(),
						viewMode: this.isViewMode()
					}, propsFromParent ? propsFromParent[child.type.name] : null, child.props));
				}
			}
		}, {
			key: 'getDOMChildOf',
			value: function getDOMChildOf(type) {
				var children = _react2.default.Children.map(this.props.children, function (child) {
					return child.type === type || child.type.name === type ? child : null;
				});
				if (children && children.length > 0) {
					// return the first not null child
					return children.find(function (child) {
						return child != null;
					});
				} else {
					return null;
				}
			}
			// parameter can be string or react component

		}, {
			key: 'getDOMChildrenOfDOMChild',
			value: function getDOMChildrenOfDOMChild(childNodeOrType) {
				if (!childNodeOrType) {
					return null;
				}

				var child = null;
				if (typeof childNodeOrType === 'string') {
					// it's a type
					child = this.getDOMChildOf(childNodeOrType);
				} else {
					// it's a react component
					child = childNodeOrType;
				}
				return child.props.children;
			}
		}, {
			key: 'renderChildren',
			value: function renderChildren(options) {
				var _this17 = this;

				options = options ? options : {};
				var children = options.children ? options.children : this.getChildren(),
				    className = options.class,
				    model = options.model,
				    columnsOfGrid = options.columnsOfGrid;

				if (!children) {
					return null;
				}

				var rows = {};
				Object.keys(children).forEach(function (key) {
					var child = children[key];
					var layout = new _layout.Layout(key, child);

					var rowIndex = _this17.wrapOptionValue(layout.getRowIndex());
					rowIndex = rowIndex == null ? _envs.Envs.DEFAULT_ROW_INDEX : rowIndex;
					var row = rows[rowIndex];
					if (row == null) {
						row = {};
						rows[rowIndex] = row;
					}

					var columnIndex = _this17.wrapOptionValue(layout.getColumnIndex());
					columnIndex = columnIndex == null ? _envs.Envs.DEFAULT_COLUMN_INDEX : columnIndex;
					var columnInRow = row[columnIndex];
					if (columnInRow == null) {
						columnInRow = [];
						row[columnIndex] = columnInRow;
					}
					columnInRow.push(layout);
				});
				return Object.keys(rows).sort(function (index1, index2) {
					return index1 - index2;
				}).map(function (rowIndex) {
					return _this17.renderRow({
						row: rows[rowIndex],
						rowIndex: rowIndex,
						class: className,
						model: model,
						columnsOfGrid: columnsOfGrid
					});
				});
			}
		}, {
			key: 'renderRow',
			value: function renderRow(options) {
				var _this18 = this;

				options = options ? options : {};
				var row = options.row,
				    rowIndex = options.rowIndex,
				    className = options.class,
				    model = options.model,
				    columnsOfGrid = options.columnsOfGrid;
				if (!row) {
					return null;
				}
				var content = Object.keys(row).sort(function (index1, index2) {
					return index1 - index2;
				}).map(function (columnIndex) {
					return _this18.renderCell({
						column: row[columnIndex],
						model: model
					});
				});
				className = (0, _classnames2.default)('n-row', className, this.getColumnsOfGridClassName(columnsOfGrid));
				return _react2.default.createElement(
					'div',
					{ className: className,
						key: rowIndex },
					content
				);
			}
		}, {
			key: 'renderCell',
			value: function renderCell(options) {
				var _this19 = this;

				options = options ? options : {};
				var column = options.column,
				    model = options.model;
				if (!column) {
					return null;
				}
				return column.map(function (layout, layoutIndex) {
					var props = {
						model: model ? model : _this19.getModel(),
						layout: layout,
						orientation: _this19.getOrientation(),
						viewMode: _this19.isViewMode(),
						ref: layout.getId(),
						key: layoutIndex,
						container: _this19
					};
					return _envs.Envs.render(layout.getTypeAsString(), props);
				});
			}
		}, {
			key: 'getChildren',
			value: function getChildren() {
				return this.getLayoutOptionValue('children');
			}
		}, {
			key: 'renderLeadingChildren',
			value: function renderLeadingChildren() {
				return this.renderChildren({
					children: this.getLeadingChildren(),
					class: 'n-leading'
				});
			}
		}, {
			key: 'renderTailingChildren',
			value: function renderTailingChildren() {
				return this.renderChildren({
					children: this.getTailingChildren(),
					class: 'n-tailing'
				});
			}
		}, {
			key: 'getLeadingChildren',
			value: function getLeadingChildren() {
				return this.getLayoutOptionValue('leadChildren', {});
			}
		}, {
			key: 'getTailingChildren',
			value: function getTailingChildren() {
				return this.getLayoutOptionValue('tailChildren', {});
			}
		}, {
			key: 'getColumnsOfGrid',
			value: function getColumnsOfGrid() {
				return this.getLayoutOptionValue('columnsOfGrid', _envs.Envs.COLUMNS_OF_GRID);
			}
			// will not use default value

		}, {
			key: 'getColumnsOfGridClassName',
			value: function getColumnsOfGridClassName(columnsOfGrid) {
				if (!columnsOfGrid) {
					columnsOfGrid = this.getColumnsOfGrid();
				}
				if (!columnsOfGrid || columnsOfGrid == 12) {
					return '';
				} else if (typeof columnsOfGrid === 'number' || typeof columnsOfGrid === 'string') {
					return 'n-row-' + columnsOfGrid + 'c';
				} else {
					return (0, _classnames2.default)(Object.keys(columnsOfGrid).reduce(function (prev, next) {
						prev['n-row-' + next + '-' + columnsOfGrid[next] + 'c'] = true;
						return prev;
					}, {}));
				}
			}
		}]);

		return NContainer;
	}(NComponent);

	var NCollapsibleContainer = function (_NContainer) {
		_inherits(NCollapsibleContainer, _NContainer);

		function NCollapsibleContainer() {
			_classCallCheck(this, NCollapsibleContainer);

			return _possibleConstructorReturn(this, (NCollapsibleContainer.__proto__ || Object.getPrototypeOf(NCollapsibleContainer)).apply(this, arguments));
		}

		_createClass(NCollapsibleContainer, [{
			key: 'isCollapsible',
			value: function isCollapsible() {
				return this.getLayoutOptionValue('collapsible', false);
			}
		}, {
			key: 'isInitExpanded',
			value: function isInitExpanded() {
				return this.getLayoutOptionValue('expanded', true);
			}
		}, {
			key: 'isExpanded',
			value: function isExpanded() {
				if (this.state.expanded == null) {
					this.state.expanded = this.isInitExpanded();
				}
				return this.state.expanded;
			}
		}, {
			key: 'expand',
			value: function expand() {
				this.setState({ expanded: true });
				this.fireEventToMonitor($.Event('expand', {
					target: this.me()
				}));
			}
		}, {
			key: 'collapse',
			value: function collapse() {
				this.setState({ expanded: false });
				this.fireEventToMonitor($.Event('collapse', {
					target: this.me()
				}));
			}
		}]);

		return NCollapsibleContainer;
	}(NContainer);

	var NHierarchyComponent = function (_NContainer2) {
		_inherits(NHierarchyComponent, _NContainer2);

		function NHierarchyComponent() {
			_classCallCheck(this, NHierarchyComponent);

			return _possibleConstructorReturn(this, (NHierarchyComponent.__proto__ || Object.getPrototypeOf(NHierarchyComponent)).apply(this, arguments));
		}

		_createClass(NHierarchyComponent, [{
			key: 'internalInstallLifecycleMonitors',
			value: function internalInstallLifecycleMonitors() {
				return _get(NHierarchyComponent.prototype.__proto__ || Object.getPrototypeOf(NHierarchyComponent.prototype), 'internalInstallLifecycleMonitors', this).call(this).addPostAddListener(this.bindToThis(this.onModelChanged)).addPostRemoveListener(this.bindToThis(this.onModelChanged));
			}
		}, {
			key: 'internalUninstallLifecycleMonitors',
			value: function internalUninstallLifecycleMonitors() {
				return _get(NHierarchyComponent.prototype.__proto__ || Object.getPrototypeOf(NHierarchyComponent.prototype), 'internalUninstallLifecycleMonitors', this).call(this).removePostAddListener(this.bindToThis(this.onModelChanged)).removePostRemoveListener(this.bindToThis(this.onModelChanged));
			}
		}, {
			key: 'createItemModel',
			value: function createItemModel(itemJSON, itemIndex) {
				var _this22 = this;

				var itemModel = new _model.Model(itemJSON, true).setParent(this.getModel()).addPostChangeListener(_model.Model.ALL, function (evt) {
					_this22.onItemModelChanged(evt, itemIndex);
				});
				var itemValidationResult = this.findItemValidationResult(itemJSON);
				if (itemValidationResult) {
					itemModel.replaceValidationResults(itemValidationResult);
				}
				var validator = this.getModel().getValidator();
				if (validator) {
					itemModel.setValidator(validator.createChildValidator(this.getDataId()));
				}
				return itemModel;
			}
		}, {
			key: 'findItemValidationResult',
			value: function findItemValidationResult(itemJSON) {
				var validationResults = this.getValidationResult();
				if (validationResults) {
					var results = validationResults.find(function (result) {
						return result.rule === _validation.Validator.CHILD;
					});
					if (results) {
						var itemResult = results.message.find(function (result) {
							return result.item === itemJSON;
						});
						if (itemResult) {
							return itemResult.result;
						}
					}
				}
				return null;
			}
		}, {
			key: 'createItemLayoutOptions',
			value: function createItemLayoutOptions(itemModel, itemIndex) {
				var _this23 = this;

				var layoutOptions = this.getLayout().getOptions();
				var itemLayoutOptions = {};
				Object.keys(layoutOptions).forEach(function (key) {
					itemLayoutOptions[key] = _this23.getLayoutOptionValue(key, null, true);
				});
				return itemLayoutOptions;
			}
			// onModelChanged(evt) {
			// 	super.onModelChanged(evt);
			// }

		}, {
			key: 'onItemModelChanged',
			value: function onItemModelChanged(evt, itemIndex) {
				// fire update event, ignore the property information
				evt.model.getParent().update(this.getDataId(), evt.model.getCurrentModel(), evt.model.getCurrentModel(), itemIndex);
				this.fireEventToMonitor($.Event('itemChange', {
					target: this.me(),
					ndata: {
						itemModel: evt.model,
						itemIndex: itemIndex,
						originalEvent: evt
					}
				}));
			}
		}]);

		return NHierarchyComponent;
	}(NContainer);

	exports.React = _react2.default;
	exports.ReactDOM = _reactDom2.default;
	exports.jQuery = _jquery2.default;
	exports.$ = $;
	exports.classnames = _classnames2.default;
	exports.NWidget = NWidget;
	exports.NComponent = NComponent;
	exports.NAddonComponent = NAddonComponent;
	exports.NDropdownComponent = NDropdownComponent;
	exports.NCodeTableComponent = NCodeTableComponent;
	exports.NContainer = NContainer;
	exports.NCollapsibleContainer = NCollapsibleContainer;
	exports.NHierarchyComponent = NHierarchyComponent;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Model = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _codetable = __webpack_require__(7);

	Object.keys(_codetable).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function () {
				return _codetable[key];
			}
		});
	});

	var _envs = __webpack_require__(8);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ListenerSupport = function () {
		function ListenerSupport(id) {
			_classCallCheck(this, ListenerSupport);

			this.id = id;
			this.listeners = [];
		}

		_createClass(ListenerSupport, [{
			key: 'getId',
			value: function getId() {
				return this.id;
			}
		}, {
			key: 'getListeners',
			value: function getListeners() {
				return this.listeners;
			}
		}, {
			key: 'isMonitorAll',
			value: function isMonitorAll() {
				return this.id === '--all';
			}
		}, {
			key: 'isRegExp',
			value: function isRegExp() {
				return this.id instanceof RegExp;
			}
		}, {
			key: 'isConcerned',
			value: function isConcerned(id) {
				if (this.isMonitorAll()) {
					return true;
				} else if (this.isRegExp()) {
					return this.getId().test(id);
				} else {
					return this.getId() == id;
				}
			}
		}, {
			key: 'addListener',
			value: function addListener(listener) {
				var listeners = this.getListeners();
				if (listener && listeners.indexOf(listener) == -1) {
					listeners.push(listener);
				}
				return this;
			}
		}, {
			key: 'removeListener',
			value: function removeListener(listener) {
				if (listener) {
					var listeners = this.getListeners();
					var index = listeners.indexOf(listener);
					if (index != -1) {
						listeners.splice(index, 1);
					}
				}
				return this;
			}
		}, {
			key: 'fireEvent',
			value: function fireEvent(evt) {
				// copy it, since component maybe uninstall listener sometimes
				this.getListeners().slice(0).forEach(function (listener) {
					// use model as context
					listener.call(evt.model, evt);
				});
			}
		}]);

		return ListenerSupport;
	}();

	var Model = function () {
		function Model(initDataJSON, noBase) {
			_classCallCheck(this, Model);

			// initialize listeners
			this.listeners = ['change', 'add', 'remove', 'validate'].reduce(function (listeners, type) {
				listeners[type] = {
					pre: [],
					post: []
				};
				return listeners;
			}, {});
			this.baseModel = initDataJSON;
			if (noBase === true) {
				this.currentModel = this.baseModel;
			} else {
				this.currentModel = _envs.lodash.cloneDeep(initDataJSON);
			}
			this.changed = false;
			this.undivided = true;
		}

		_createClass(Model, [{
			key: 'getListenersByTimeAndType',
			value: function getListenersByTimeAndType(time, type) {
				return this.listeners[type][time];
			}
		}, {
			key: 'getListenerSupport',
			value: function getListenerSupport(id, time, type) {
				var create = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

				id = id ? id : '--all';
				var listeners = this.getListenersByTimeAndType(time, type);
				var support = listeners.find(function (listener) {
					return listener.id.toString() == id.toString();
				});
				if (!support && create) {
					support = new ListenerSupport(id);
					listeners.push(support);
				}
				return support;
			}
		}, {
			key: 'addListener',
			value: function addListener() {
				var id = arguments.length <= 0 || arguments[0] === undefined ? '--all' : arguments[0];
				var listener = arguments[1];
				var type = arguments.length <= 2 || arguments[2] === undefined ? 'change' : arguments[2];
				var time = arguments.length <= 3 || arguments[3] === undefined ? 'post' : arguments[3];

				if (listener) {
					this.getListenerSupport(id, time, type, true).addListener(listener);
				}
				return this;
			}
		}, {
			key: 'removeListener',
			value: function removeListener() {
				var id = arguments.length <= 0 || arguments[0] === undefined ? '--all' : arguments[0];
				var listener = arguments[1];
				var type = arguments.length <= 2 || arguments[2] === undefined ? 'change' : arguments[2];
				var time = arguments.length <= 3 || arguments[3] === undefined ? 'post' : arguments[3];

				if (listener) {
					var support = this.getListenerSupport(id, time, type);
					if (support) {
						support.removeListener(listener);
					}
				}
				return this;
			}
		}, {
			key: 'getListeners',
			value: function getListeners() {
				var id = arguments.length <= 0 || arguments[0] === undefined ? '--all' : arguments[0];
				var time = arguments.length <= 1 || arguments[1] === undefined ? 'post' : arguments[1];
				var type = arguments.length <= 2 || arguments[2] === undefined ? 'change' : arguments[2];

				var support = this.getListenerSupport(id, time, type);
				return support ? support.getListeners() : [];
			}
		}, {
			key: 'addPostChangeListener',
			value: function addPostChangeListener(id, listener) {
				return this.addListener(id, listener);
			}
		}, {
			key: 'removePostChangeListener',
			value: function removePostChangeListener(id, listener) {
				return this.removeListener(id, listener);
			}
		}, {
			key: 'addPostAddListener',
			value: function addPostAddListener(id, listener) {
				return this.addListener(id, listener, 'add');
			}
		}, {
			key: 'removePostAddListener',
			value: function removePostAddListener(id, listener) {
				return this.removeListener(id, listener, 'add');
			}
		}, {
			key: 'addPostRemoveListener',
			value: function addPostRemoveListener(id, listener) {
				return this.addListener(id, listener, 'remove');
			}
		}, {
			key: 'removePostRemoveListener',
			value: function removePostRemoveListener(id, listener) {
				return this.removeListener(id, listener, 'remove');
			}
		}, {
			key: 'addPostValidateListener',
			value: function addPostValidateListener(id, listener) {
				return this.addListener(id, listener, 'validate');
			}
		}, {
			key: 'removePostValidateListener',
			value: function removePostValidateListener(id, listener) {
				return this.removeListener(id, listener, 'validate');
			}
		}, {
			key: 'fireEvent',
			value: function fireEvent(evt) {
				var id = evt.id,
				    type = evt.type,
				    time = evt.time;
				var listeners = this.getListenersByTimeAndType(time, type);
				listeners.forEach(function (listener) {
					if (listener.isConcerned(id)) {
						listener.fireEvent(evt);
					}
				});
				return this;
			}
		}, {
			key: 'firePostChangeEvent',
			value: function firePostChangeEvent(id, oldValue, newValue, index) {
				return this.fireEvent({
					id: id,
					old: oldValue,
					new: newValue,
					index: index,
					type: 'change',
					time: 'post',
					model: this
				});
			}
		}, {
			key: 'firePostAddEvent',
			value: function firePostAddEvent(id, value, newItem, index) {
				return this.fireEvent({
					id: id,
					value: value,
					new: newItem,
					index: index,
					type: 'add',
					time: 'post',
					model: this
				});
			}
		}, {
			key: 'firePostRemoveEvent',
			value: function firePostRemoveEvent(id, value, removedItem, index) {
				return this.fireEvent({
					id: id,
					value: value,
					removed: removedItem,
					index: index,
					type: 'remove',
					time: 'post',
					model: this
				});
			}
		}, {
			key: 'firePostValidateEvent',
			value: function firePostValidateEvent(id, value, error) {
				return this.fireEvent({
					id: id,
					value: value,
					error: error,
					type: 'validate',
					time: 'post',
					model: this
				});
			}
		}, {
			key: 'getBaseModel',
			value: function getBaseModel() {
				return this.baseModel;
			}
		}, {
			key: 'getCurrentModel',
			value: function getCurrentModel() {
				return this.currentModel;
			}
		}, {
			key: 'get',
			value: function get(id) {
				return this.getFromJSON(id, this.getCurrentModel());
			}
		}, {
			key: 'getFromJSON',
			value: function getFromJSON(id, json) {
				var ids = id.split('.');
				var count = ids.length - 1;
				return ids.reduce(function (object, id, index) {
					var value = object[id];
					return index === count ? value : typeof value === 'undefined' || value == null ? {} : value;
				}, json);
			}
		}, {
			key: 'set',
			value: function set(id, value) {
				var old = this.get(id);
				if ((typeof old === 'undefined' ? 'undefined' : _typeof(old)) === (typeof value === 'undefined' ? 'undefined' : _typeof(value)) && old == value) {
					// do nothing
					return;
				}
				this.setIntoJSON(id, value, this.getCurrentModel());
				this.setChanged(true);
				this.firePostChangeEvent(id, old, value);
				return this;
			}
		}, {
			key: 'add',
			value: function add(id, value, valueIndex) {
				var values = this.get(id);
				if (values == null) {
					values = [];
					values.push(value);
					this.setIntoJSON(id, values, this.getCurrentModel());
					this.setChanged(true);
					this.firePostAddEvent(id, values, value, 0);
				} else {
					var index = values.findIndex(function (elm) {
						return elm == value;
					});
					if (index == -1) {
						// not found, add to given value index
						valueIndex = valueIndex == null ? values.length : valueIndex;
						valueIndex = valueIndex > values.length ? values.length : valueIndex;
						values.splice(valueIndex, 0, value);
						this.setChanged(true);
						this.firePostAddEvent(id, values, value, valueIndex);
					}
				}
				return this;
			}
		}, {
			key: 'remove',
			value: function remove(id, value) {
				var values = this.get(id);
				if (values == null || values.length == 0) {
					// do nothing
				} else {
					var index = values.findIndex(function (elm) {
						return elm == value;
					});
					if (index != -1) {
						values.splice(index, 1);
						this.setChanged(true);
						this.firePostRemoveEvent(id, values, value, index);
					}
				}
			}
		}, {
			key: 'update',
			value: function update(id, oldValue, newValue) {
				var values = this.get(id);
				if (values == null || values.length == 0) {
					// do nothing
				} else {
					var index = values.findIndex(function (elm) {
						return elm == oldValue;
					});
					if (index != -1) {
						values.splice(index, 1, newValue);
						this.setChanged(true);
						this.firePostChangeEvent(id, oldValue, newValue, index);
					}
				}
			}
		}, {
			key: 'setIntoJSON',
			value: function setIntoJSON(id, value, json) {
				var ids = id.split('.');
				var count = ids.length - 1;
				ids.reduce(function (object, id, index) {
					if (index === count) {
						// last one
						object[id] = value;
						return value;
					} else {
						var val = object[id];
						object[id] = typeof val === 'undefined' || val == null ? {} : val;
						return object[id];
					}
				}, json);
				return this;
			}
		}, {
			key: 'isChanged',
			value: function isChanged() {
				return this.changed;
			}
		}, {
			key: 'setChanged',
			value: function setChanged(changed) {
				this.changed = changed;
			}
		}, {
			key: 'setParent',
			value: function setParent(parent) {
				this.parent = parent;
				return this;
			}
		}, {
			key: 'getParent',
			value: function getParent() {
				return this.parent;
			}
		}, {
			key: 'setValidator',
			value: function setValidator(validator) {
				this.validator = validator;
				return this;
			}
		}, {
			key: 'getValidator',
			value: function getValidator() {
				return this.validator;
			}
		}, {
			key: 'validate',
			value: function validate(dataId, perspective) {
				var _this = this;

				if (this.validator) {
					(function () {
						var validationResults = _this.getValidationResults();
						var result = _this.validator.validate(_this, dataId, perspective);
						if (dataId) {
							// only validate given data id
							validationResults[dataId] = result[dataId];
							_this.firePostValidateEvent(dataId, _this.get(dataId), validationResults[dataId]);
						} else {
							(function () {
								// validate all, replace old
								var old = _this.validationResults;
								_this.validationResults = result;
								var fired = {};
								Object.keys(result).forEach(function (dataId) {
									fired[dataId] = true;
									_this.firePostValidateEvent(dataId, _this.get(dataId), result[dataId]);
								});
								Object.keys(old).forEach(function (dataId) {
									if (!fired[dataId]) {
										_this.firePostValidateEvent(dataId, _this.get(dataId), null);
									}
								});
							})();
						}
					})();
				}
				return this;
			}
		}, {
			key: 'getValidationResults',
			value: function getValidationResults(dataId) {
				if (this.validationResults == null) {
					this.validationResults = {};
				}
				return dataId ? this.validationResults[dataId] : this.validationResults;
			}
		}, {
			key: 'replaceValidationResults',
			value: function replaceValidationResults(results) {
				this.validationResults = results;
			}
		}]);

		return Model;
	}();

	Model.ALL = '--all';
	exports.Model = Model;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CodeTable = function () {
		function CodeTable(options) {
			var _this = this;

			_classCallCheck(this, CodeTable);

			this.array = options.items ? options.items : [];
			this.sorter = options.sorter;
			this.renderer = options.renderer;
			this.tiler = options.tiler;

			this.mapping = {};
			this.array.map(function (item) {
				var renderer = _this.getRenderer();
				return renderer ? renderer.call(_this, item) : item;
			}).sort(function (item1, item2) {
				var sorter = _this.getSorter();
				return sorter ? sorter.call(_this, item1, item2) : 0;
			}).forEach(function (item) {
				_this.getTiler().call(_this, item, _this.mapping);
			});
		}

		_createClass(CodeTable, [{
			key: 'getTiler',
			value: function getTiler() {
				if (!this.tiler) {
					this.tiler = function (item, map) {
						var _this2 = this;

						map[item.id] = item;
						if (item.children && item.children.length != 0) {
							item.children.forEach(function (child) {
								_this2.getTiler().call(_this2, child, map);
							});
						}
					};
				}
				return this.tiler;
			}
		}, {
			key: 'getSorter',
			value: function getSorter() {
				return this.sorter;
			}
		}, {
			key: 'getRenderer',
			value: function getRenderer() {
				return this.renderer;
			}
		}, {
			key: 'getItem',
			value: function getItem(id) {
				return this.mapping[id];
			}
		}, {
			key: 'getText',
			value: function getText(id) {
				return this.mapping[id] ? this.mapping[id].text : null;
			}
		}, {
			key: 'map',
			value: function map(func) {
				if (typeof func === 'undefined') {
					return this.mapping;
				} else {
					return this.array.map(func);
				}
			}
		}, {
			key: 'forEach',
			value: function forEach(func) {
				return this.array.forEach(func);
			}
		}, {
			key: 'filter',
			value: function filter(func) {
				return this.array.filter(func);
			}
		}, {
			key: 'items',
			value: function items() {
				return this.array;
			}
		}, {
			key: 'isReady',
			value: function isReady() {
				return true;
			}
		}, {
			key: 'ready',
			value: function ready() {
				return true;
			}
		}]);

		return CodeTable;
	}();

	exports.CodeTable = CodeTable;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.lodash = exports.Envs = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _lodash = __webpack_require__(9);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Envs = function () {
		function Envs() {
			_classCallCheck(this, Envs);

			this.props = {
				cellWidth: 3,
				cellColumns: 12,
				labelPosition: 'top',
				labelWidth: 4,
				componentErrorPopover: true,
				thousandsSeparator: ',',
				numberPointer: '.',
				numberFormatter: function numberFormatter(modelValue) {
					if (modelValue || modelValue === 0) {
						return ('' + modelValue).replace(/\./, envs.NUMBER_POINTER).replace(/\B(?=(\d{3})+(?!\d))/g, envs.THOUSANDS_SEPARATOR);
					} else {
						return '';
					}
				},
				numberParser: function numberParser(displayText) {
					if (displayText) {
						return 1 * displayText.replace(new RegExp(envs.THOUSANDS_SEPARATOR.replace(/\./g, '\\\.'), 'g'), '').replace(new RegExp(envs.NUMBER_POINTER.replace(/\./g, '\\\.')), '.');
					} else {
						return null;
					}
				},
				percentageFormatter: function percentageFormatter(modelValue) {
					return modelValue || modelValue === 0 ? ('' + modelValue) * 100 : '';
				},
				percentageParser: function percentageParser(displayText) {
					return displayText ? displayText / 100 : null;
				},
				textChangeDelay: 300,
				dateValueFormat: 'YYYYMMDDHHmmss',
				dateDisplayFormat: ['YYYY/MM/DD', 'YYYYMMDD'],
				dateHeaderFormat: { year: 'YYYY', month: 'MMMM' },
				timeDisplayFormat: 'HH:mm:ss',
				timeHeaderFormat: 'A hh',
				dateTimeDisplayFormat: 'YYYY/MM/DD HH:mm:ss',
				yearStepWhenMonth: 5,
				tabAddText: 'Add',
				tabAddIcon: 'plus-square',
				tabRemoveIcon: 'close',
				tabNoItemText: 'No Item',
				treeRootText: 'Root',
				treeRootIcon: 'bars',
				treeBranchIcon: 'folder-o',
				treeLeafIcon: 'file-o',
				treeMaxHeight: 300,
				listMaxHeight: 300,
				columnsOfGrid: 12,
				dropdownMaxHeight: 300,
				dropdownMinWidth: 300,
				selectPlaceholder: 'Please Select...'
			};
			this.viewModeRenderers = {};
			this.renderers = {};

			this.COMPONENT_TYPES = {};

			this.checkTransitionSupported();
		}
		// global variables


		_createClass(Envs, [{
			key: 'getRenderer',
			value: function getRenderer(type) {
				return this.renderers[type];
			}
		}, {
			key: 'setRenderer',
			value: function setRenderer(type, renderer) {
				var originalRenderer = this.getRenderer(type);
				this.renderers[type] = renderer;
				if (originalRenderer) {
					console.info('Component renderer for ' + type + ' was replaced.');
				}
			}
			// external view mode renderer

		}, {
			key: 'getViewModeRenderer',
			value: function getViewModeRenderer(type) {
				return this.viewModeRenderers[type];
			}
		}, {
			key: 'setViewModeRenderer',
			value: function setViewModeRenderer(type, renderer) {
				var originalRenderer = this.getViewModeRenderer(type);
				this.viewModeRenderers[type] = renderer;
				if (originalRenderer) {
					console.info('External view mode renderer for ' + type + ' was replaced.');
				}
			}
		}, {
			key: 'render',
			value: function render(renderer, options) {
				if (typeof renderer === 'string') {
					return this.getRenderer(renderer).call(this, options);
				} else {
					return renderer.call(this, options);
				}
			}

			// utils
			// deep merge to a plain object from other plain objects
			// argument 0: target object, will be modified. new {} created if it is null.
			// arguments 1 ~ n: source objects, will not be modified. null or undefined objects are ignored.
			// only recursive plain object will be deep merged
			// if source value is an array, target value will be replaced anyway. and if element is
			//		1. plain object: recursive clone and assign to target array
			//		2. array: recursive clone and assign to target array
			//		3. others: assign to target array directly
			// if source value is a plain object, 
			//		1. target value is a plain object: recursive deep merge
			//		2. others: recursive clone and assign to target value
			// if source value is other types, assign to target value directly

		}, {
			key: 'deepMergeTo',
			value: function deepMergeTo() {
				var _this = this;

				if (arguments.length < 2) {
					throw 'At least two argument.';
				}
				var target = arguments[0] ? arguments[0] : {};
				if (!_lodash2.default.isPlainObject(target)) {
					throw 'Target object must be a plain object.';
				}
				var sources = Array.prototype.slice.call(arguments, 1);
				sources.forEach(function (source, sourceIndex) {
					if (source == null) {
						// ignore the null source object
						return;
					}
					if (!_lodash2.default.isPlainObject(source)) {
						throw 'Source object at index[' + (sourceIndex + 1) + '] must be a plain object.';
					}
					Object.keys(source).forEach(function (key) {
						var sourceValue = source[key];
						if (sourceValue == null) {
							// ignore the null or undefined value
							return;
						}
						if (_lodash2.default.isPlainObject(sourceValue)) {
							// source value is a plain object
							var targetValue = target[key];
							if (!_lodash2.default.isPlainObject(targetValue)) {
								// target value is not a plain object
								// create new {} to be target value and copy from source value
								target[key] = _this.deepMergeTo({}, sourceValue);
							} else {
								// target value is a plain object
								_this.deepMergeTo(targetValue, sourceValue);
							}
						} else if (_lodash2.default.isArray(sourceValue)) {
							// source value is an array
							// replace target value anyway
							target[key] = [];
							sourceValue.forEach(function (value) {
								if (_lodash2.default.isPlainObject(value)) {
									target[key].push(_this.deepMergeTo({}, value));
								} else if (_lodash2.default.isArray(value)) {
									target[key].push(_this.deepMergeTo({}, { array: value }).array);
								} else {
									target[key].push(value);
								}
							});
						} else {
							// neither plain object nor array
							// copy to target directly
							target[key] = sourceValue;
						}
					});
				});
				return target;
			}
		}, {
			key: 'checkTransitionSupported',
			value: function checkTransitionSupported() {
				if (typeof document === 'undefined') {
					console.error('Make sure document object existed!');
					return;
				}
				var TransitionEndEvent = {
					transition: 'transitionend',
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd otransitionend'
				};
				this.isTransitionSupported = false;
				var el = document.createElement('parrot2');
				for (var name in TransitionEndEvent) {
					if (el.style[name] !== undefined) {
						this.isTransitionSupported = true;
						break;
					}
				}
			}
			// delegate for jquery transition end
			// for those browsers which doesn't support transition, invoke handler immediately
			// for those browsers which supports transition, add transitionend listener
			// options format as below,
			// {
			//		target: jquery object
			//		handler: event handler, pass target if transition not supported
			//		repeat: use 'on' when repeat is true, otherwise use 'one'
			// }

		}, {
			key: 'transitionend',
			value: function transitionend(options) {
				var target = options.target;
				if (this.isTransitionSupported) {
					if (options.repeat) {
						options.target.on('transitionend', options.handler);
					} else {
						options.target.one('transitionend', options.handler);
					}
				} else {
					options.handler.call(this, options.target);
				}
				return options.target;
			}
		}, {
			key: 'CELL_WIDTH',
			get: function get() {
				return this.props.cellWidth;
			},
			set: function set(value) {
				this.props.cellWidth = value;
			}
			// columns in a cell, default is 12

		}, {
			key: 'CELL_COLUMNS',
			get: function get() {
				return this.props.cellColumns;
			},
			set: function set(value) {
				this.props.cellColumns = value;
			}
		}, {
			key: 'LABEL_WIDTH',
			get: function get() {
				return this.props.labelWidth;
			},
			set: function set(value) {
				this.props.labelWidth = value;
			}
		}, {
			key: 'LABEL_POSITION',
			get: function get() {
				return this.props.labelPosition;
			},
			set: function set(value) {
				this.props.labelPosition = value;
			}
		}, {
			key: 'COMPONENT_ERROR_POPOVER',
			get: function get() {
				return this.props.componentErrorPopover;
			},
			set: function set(value) {
				this.props.componentErrorPopover = value;
			}
		}, {
			key: 'THOUSANDS_SEPARATOR',
			get: function get() {
				return this.props.thousandsSeparator;
			},
			set: function set(value) {
				this.props.thousandsSeparator = value;
			}
		}, {
			key: 'NUMBER_POINTER',
			get: function get() {
				return this.props.numberPointer;
			},
			set: function set(value) {
				this.props.NUMBER_POINTER = value;
			}
		}, {
			key: 'NUMBER_FORMATTER',
			get: function get() {
				return this.props.numberFormatter;
			},
			set: function set(value) {
				this.props.numberFormatter = value;
			}
		}, {
			key: 'NUMBER_PARSER',
			get: function get() {
				return this.props.numberParser;
			},
			set: function set(value) {
				this.props.numberParser = value;
			}
		}, {
			key: 'PERCENTAGE_FORMATTER',
			get: function get() {
				return this.props.percentageFormatter;
			},
			set: function set(value) {
				this.props.PERCENTAGE_FORMATTER = value;
			}
		}, {
			key: 'PERCENTAGE_PARSER',
			get: function get() {
				return this.props.percentageParser;
			},
			set: function set(value) {
				this.props.percentageParser = value;
			}
		}, {
			key: 'TEXT_CHANGE_DELAY',
			get: function get() {
				return this.props.textChangeDelay;
			},
			set: function set(value) {
				this.props.textChangeDelay = value;
			}
		}, {
			key: 'DATE_VALUE_FORMAT',
			get: function get() {
				return this.props.dateValueFormat;
			},
			set: function set(value) {
				this.props.dateValueFormat = value;
			}
		}, {
			key: 'DATE_DISPLAY_FORMAT',
			get: function get() {
				return this.props.dateDisplayFormat;
			},
			set: function set(value) {
				this.props.dateDisplayFormat = value;
			}
		}, {
			key: 'DATE_HEADER_FORMAT',
			get: function get() {
				return this.props.dateHeaderFormat;
			},
			set: function set(value) {
				this.props.dateHeaderFormat = value;
			}
		}, {
			key: 'YEAR_STEP_WHEN_MONTH',
			get: function get() {
				return this.props.yearStepWhenMonth;
			},
			set: function set(value) {
				this.props.yearStepWhenMonth = value;
			}
		}, {
			key: 'DATE_TIME_DISPLAY_FORMAT',
			get: function get() {
				return this.props.dateTimeDisplayFormat;
			},
			set: function set(value) {
				this.props.dateTimeDisplayFormat = value;
			}
		}, {
			key: 'TIME_DISPLAY_FORMAT',
			get: function get() {
				return this.props.timeDisplayFormat;
			},
			set: function set(value) {
				this.props.timeDisplayFormat = value;
			}
		}, {
			key: 'TIME_HEADER_FORMAT',
			get: function get() {
				return this.props.timeHeaderFormat;
			},
			set: function set(value) {
				this.props.timeHeaderFormat = value;
			}
		}, {
			key: 'TAB_ADD_TEXT',
			get: function get() {
				return this.props.tabAddText;
			},
			set: function set(value) {
				this.props.tabAddText = value;
			}
		}, {
			key: 'TAB_ADD_ICON',
			get: function get() {
				return this.props.tabAddIcon;
			},
			set: function set(value) {
				this.props.tabAddIcon = value;
			}
		}, {
			key: 'TAB_REMOVE_ICON',
			get: function get() {
				return this.props.tabRemoveIcon;
			},
			set: function set(value) {
				this.props.tabRemoveIcon = value;
			}
		}, {
			key: 'TAB_NO_ITEM_TEXT',
			get: function get() {
				return this.props.tabNoItemText;
			},
			set: function set(value) {
				this.props.TAB_NO_ITEM_TEXT = value;
			}
		}, {
			key: 'TREE_ROOT_TEXT',
			get: function get() {
				return this.props.treeRootText;
			},
			set: function set(value) {
				this.props.treeRootText = value;
			}
		}, {
			key: 'TREE_ROOT_ICON',
			get: function get() {
				return this.props.treeRootIcon;
			},
			set: function set(value) {
				this.props.treeRootIcon = value;
			}
		}, {
			key: 'TREE_BRANCH_ICON',
			get: function get() {
				return this.props.treeBranchIcon;
			},
			set: function set(value) {
				this.props.treeBranchIcon = value;
			}
		}, {
			key: 'TREE_LEAF_ICON',
			get: function get() {
				return this.props.treeLeafIcon;
			},
			set: function set(value) {
				this.props.treeLeafIcon = value;
			}
		}, {
			key: 'TREE_MAX_HEIGHT',
			get: function get() {
				return this.props.treeMaxHeight;
			},
			set: function set(value) {
				this.props.treeMaxHeight = value;
			}
		}, {
			key: 'LIST_MAX_HEIGHT',
			get: function get() {
				return this.props.listMaxHeight;
			},
			set: function set(value) {
				this.props.listMaxHeight = value;
			}
		}, {
			key: 'COLUMNS_OF_GRID',
			get: function get() {
				return this.props.columnsOfGrid;
			},
			set: function set(value) {
				this.props.columnsOfGrid = value;
			}
		}, {
			key: 'DROPDOWN_MAX_HEIGHT',
			get: function get() {
				return this.props.dropdownMaxHeight;
			},
			set: function set(value) {
				this.props.dropdownMaxHeight = value;
			}
		}, {
			key: 'DROPDOWN_MIN_WIDTH',
			get: function get() {
				return this.props.dropdownMinWidth;
			},
			set: function set(value) {
				this.props.dropdownMinWidth = value;
			}
		}, {
			key: 'SELECT_PLACEHOLDER',
			get: function get() {
				return this.props.selectPlaceholder;
			},
			set: function set(value) {
				this.props.selectPlaceholder = value;
			}
		}]);

		return Envs;
	}();

	// // there is no global object to carry the global constants variables
	// // have to use window in browser or global in nodejs env
	// // to carry the global constants
	// // the global namespace is $pt
	// // and import namespace is {Envs}
	// // the above two are exactly same object
	// let $pt;
	// if (typeof window !== 'undefined') {
	// 	$pt = window.$pt;
	// } else if (typeof global !== 'undefined') {
	// 	$pt = global.$pt;
	// }
	// // console.log('abc');
	// // console.log($pt);

	// if (typeof $pt === 'undefined' || $pt == null) {
	// 	$pt = new Envs();
	// 	if (typeof window !== 'undefined') {
	// 		window.$pt = $pt;
	// 	} else if (typeof global !== 'undefined') {
	// 		global.$pt = $pt;
	// 	}
	// }

	Envs.DEFAULT_COLUMN_INDEX = 9999;
	Envs.DEFAULT_ROW_INDEX = 9999;
	var envs = new Envs();

	exports.Envs = envs;
	exports.lodash = _lodash2.default;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ValidationMessages = exports.GlobalValidationRules = exports.Validator = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _envs = __webpack_require__(8);

	var _model = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ValidationMessages = function () {
		function ValidationMessages() {
			_classCallCheck(this, ValidationMessages);

			this.messages = {};
			this.install({
				'required': '%1 is required.',
				'minlen': 'Length of %1 should be at least %2 character(s).',
				'min': 'Value of %1 should be at least %2.',
				'minsize': 'There are at least %2 item(s) for %1.',
				'maxlen': 'Length of %1 should be at most %2 character(s).',
				'max': 'Value of %1 should be at most %2.',
				'maxsize': 'There are at most %2 item(s) for %1.',
				'before': '%1 should be before %2.',
				'after': '%1 should be after %2'
			});
		}

		_createClass(ValidationMessages, [{
			key: 'install',
			value: function install(options) {
				var locale = this.parseLocale(options.locale, 'en');
				var msgsOfLocale = this.messages[locale];
				if (msgsOfLocale == null) {
					msgsOfLocale = {};
					this.messages[locale] = msgsOfLocale;
				}
				Object.keys(options).filter(function (key) {
					return key !== 'locale';
				}).forEach(function (ruleName) {
					var oldMsg = msgsOfLocale[ruleName];
					msgsOfLocale[ruleName] = options[ruleName];
					if (oldMsg) {
						console.info('Message "' + oldMsg + '" of rule "' + ruleName + '" is replaced by ' + options[ruleName] + ' on locale "' + locale + '".');
					}
				});
			}
		}, {
			key: 'get',
			value: function get(ruleName, locale) {
				locale = this.parseLocale(locale, this.getLocale());
				var msgsOfLocale = this.messages[locale];
				var message = null;
				if (msgsOfLocale) {
					message = msgsOfLocale[ruleName];
				}
				if (message) {
					return message;
				} else {
					var parentLocale = this.parentOfLocale(locale);
					if (parentLocale === locale) {
						throw 'Message of "' + ruleName + '" not found in locale "' + locale + '" and its parents.';
					} else {
						return this.get(ruleName, parentLocale);
					}
				}
			}
		}, {
			key: 'parseLocale',
			value: function parseLocale(locale, defaultLocale) {
				return locale ? locale.replace('-', '_').toLowerCase() : defaultLocale;
			}
		}, {
			key: 'parentOfLocale',
			value: function parentOfLocale(locale) {
				var segments = locale.split('_');
				if (segments.length === 1) {
					return 'en';
				} else {
					segments.splice(segments.length - 1, 1);
					return segments.join('_');
				}
			}
		}, {
			key: 'getLocale',
			value: function getLocale() {
				if (this.locale) {} else if (typeof navigator === 'undefined') {
					this.locale = 'en';
				} else {
					this.locale = navigator.language || navigator.userLanguage;
				}
				return this.locale;
			}
		}, {
			key: 'setLocale',
			value: function setLocale(locale) {
				if (locale) {
					this.locale = this.parseLocale(locale);
				} else {
					this.locale = 'en';
				}
			}
		}, {
			key: 'convert',
			value: function convert(ruleName, param, label) {
				var message = this.get(ruleName);
				if (label) {
					message = message.replace('%1', label);
				}
				if (param) {
					message = message.replace('%2', param);
				}
				return message;
			}
		}]);

		return ValidationMessages;
	}();

	var messages = new ValidationMessages();

	var isEmpty = function isEmpty(value) {
		return value == null || (value + '').length === 0;
	};
	var GlobalValidationRules = {
		required: function required(model, value, params, label) {
			return isEmpty(value) ? messages.convert('required', params, label) : true;
		},
		minlen: function minlen(model, value, params, label) {
			return isEmpty(value) ? true : (value + '').length < params ? messages.convert('minlen', params, label) : true;
		},
		maxlen: function maxlen(model, value, params, label) {
			return isEmpty(value) ? true : (value + '').length > params ? messages.convert('maxlen', params, label) : true;
		},
		min: function min(model, value, params, label) {
			return isEmpty(value) ? true : value * 1 < params ? messages.convert('min', params, label) : true;
		},
		max: function max(model, value, params, label) {
			return isEmpty(value) ? true : value * 1 > params ? messages.convert('max', params, label) : true;
		},
		minsize: function minsize(model, value, params, label) {
			return value == null || value.length === 0 ? true : value.length < params ? messages.convert('minsize', params, label) : true;
		},
		maxsize: function maxsize(model, value, params, label) {
			return value == null || value.length === 0 ? true : value.length > params ? messages.convert('maxsize', params, label) : true;
		},
		before: function before(model, value, params, label) {
			if (isEmpty(value)) {
				return true;
			}
			return value > params ? messages.convert('before', params, label) : true;
		},
		after: function after(model, value, params, label) {
			if (isEmpty(value)) {
				return true;
			}
			return value < params ? messages.convert('after', params, label) : true;
		},
		child: function child(model, value, params, label, ruleRepository) {
			if (value == null || value.length == 0) {
				return true;
			}
			var itemValidator = new Validator(params, null, ruleRepository);
			var results = value.map(function (item) {
				var itemModel = new _model.Model(item, true);
				var result = itemValidator.validate(itemModel);
				return {
					item: item,
					result: result
				};
			}).filter(function (itemResult) {
				return Object.keys(itemResult.result).length > 0;
			});
			return results.length === 0 ? true : results;
		}
	};

	var Validator = function () {
		function Validator(rules, perspective, ruleRepo) {
			var _this = this;

			_classCallCheck(this, Validator);

			if (perspective) {
				this.rules = rules ? rules : {};
			} else {
				this.rules = {};
				this.rules['' + Validator.ALL] = rules;
			}
			// remove null properties
			Object.keys(this.rules).forEach(function (key) {
				if (_this.rules[key] === null) {
					delete _this.rules[key];
				}
			});

			this.ruleRepo = ruleRepo;
		}

		_createClass(Validator, [{
			key: 'validate',
			value: function validate(model, property, perspective) {
				var _this2 = this;

				var rules = this.getRules(perspective);
				if (property) {
					var propertyRule = {};
					if (rules[property] != null) {
						propertyRule[property] = rules[property];
					}
					rules = propertyRule;
				}
				return Object.keys(rules).map(function (propertyName) {
					var value = model.get(propertyName);
					var rulesOnProperty = rules[propertyName];
					var label = rulesOnProperty.label;
					// result is an array
					var resultsOnProperty = Object.keys(rulesOnProperty).filter(function (ruleName) {
						return ruleName !== 'label';
					}).map(function (ruleName) {
						var params = rulesOnProperty[ruleName];
						var rule = _this2.unwrapRuleParams(ruleName, params);
						return {
							rule: ruleName,
							message: rule.checker.call(_this2, model, value, rule.params, label, _this2.ruleRepo),
							level: rule.level
						};
					}).filter(function (ruleResult) {
						// filter the passed rule results
						return ruleResult.message != null && ruleResult.message !== true;
					});
					return {
						name: propertyName,
						result: resultsOnProperty
					};
				}).filter(function (propResult) {
					// filter which has no failed result
					return propResult.result.length != 0;
				}).reduce(function (prev, next) {
					prev[next.name] = next.result;
					return prev;
				}, {});
			}
		}, {
			key: 'unwrapRuleParams',
			value: function unwrapRuleParams(name, params) {
				var type = typeof params === 'undefined' ? 'undefined' : _typeof(params);
				if (type === 'function') {
					return {
						checker: params,
						level: params.level ? params.level : Validator.LEVEL_ERROR,
						params: params.params ? params.params : null
					};
				} else if (type === 'object') {
					return {
						checker: this.findRuleFromRepo(name),
						level: params.level ? params.level : Validator.LEVEL_ERROR,
						params: params.params ? params.params : params
					};
				} else {
					return {
						checker: this.findRuleFromRepo(name),
						level: Validator.LEVEL_ERROR,
						params: params
					};
				}
			}
		}, {
			key: 'getRules',
			value: function getRules(perspective) {
				var _this3 = this;

				if (!perspective) {
					perspective = this.getPerspective();
				}
				if (perspective) {
					var ruleSet = this.rules[perspective];
					return ruleSet == null ? {} : ruleSet;
				} else {
					var _ruleSet = Object.keys(this.rules).map(function (key) {
						return _this3.rules[key];
					});
					if (_ruleSet.length === 0) {
						return {};
					} else {
						return _envs.Envs.deepMergeTo.apply(_envs.Envs, [{}].concat(_ruleSet));
					}
				}
			}
		}, {
			key: 'findRuleFromRepo',
			value: function findRuleFromRepo(ruleName) {
				var rule = null;
				if (this.ruleRepo) {
					rule = this.ruleRepo[ruleName];
				}
				if (rule == null) {
					rule = GlobalValidationRules[ruleName];
				}
				if (rule == null) {
					throw 'Rule ' + ruleName + ' not found, please define it when construct validator \t\t\t\t\tor into global validation rules repository';
				}
				return rule;
			}
		}, {
			key: 'setPerspective',
			value: function setPerspective(perspective) {
				this.perspective = perspective;
				var childValidators = this.getChildValidators();
				Object.keys(childValidators).forEach(function (dataId) {
					var validator = childValidators[dataId];
					validator.setPerspective(perspective);
				});
				return this;
			}
		}, {
			key: 'getPerspective',
			value: function getPerspective() {
				return this.perspective;
			}
		}, {
			key: 'getChildValidators',
			value: function getChildValidators() {
				if (this.childValidators == null) {
					this.childValidators = {};
				}
				return this.childValidators;
			}
		}, {
			key: 'getChildValidator',
			value: function getChildValidator(dataId) {
				return this.getChildValidators()[dataId];
			}
		}, {
			key: 'createChildValidator',
			value: function createChildValidator(dataId) {
				var _this4 = this;

				var validator = this.getChildValidator(dataId);
				if (!validator) {
					var rules = Object.keys(this.rules).reduce(function (prev, next) {
						var perspectiveRules = _this4.rules[next];
						var propertyRules = perspectiveRules[dataId];
						if (propertyRules) {
							var childRules = propertyRules.child;
							if (childRules) {
								prev[next] = childRules;
							}
						}
						return prev;
					}, {});
					validator = new Validator(rules, true, this.ruleRepo);
					validator.setPerspective(this.getPerspective());
					this.childValidators[dataId] = validator;
				}
				return validator;
			}
		}]);

		return Validator;
	}();

	Validator.ALL = '--all';
	Validator.CHILD = 'child';
	Validator.LEVEL_ERROR = 1;
	Validator.LEVEL_WARN = 2;
	Validator.LEVEL_INFO = 3;
	exports.Validator = Validator;
	exports.GlobalValidationRules = GlobalValidationRules;
	exports.ValidationMessages = messages;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Layout = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _envs = __webpack_require__(8);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Layout = function () {
		_createClass(Layout, null, [{
			key: 'toStereo',
			value: function toStereo(props) {
				var layout = {};
				if (!props) {
					return layout;
				}

				Object.keys(props).filter(function (key) {
					return key.startsWith('n-');
				}).forEach(function (key) {
					var keys = key.substr(2).split('-');
					var count = keys.length - 1;
					keys.reduce(function (object, keySegment, index) {
						if (index === count) {
							// last one
							object[keySegment] = props[key];
						} else {
							var val = object[keySegment];
							object[keySegment] = typeof val === 'undefined' || val == null ? {} : val;
						}
						return object[keySegment];
					}, layout);
				});
				return layout;
			}
		}, {
			key: 'buildLayoutByProps',
			value: function buildLayoutByProps(props) {
				return new Layout(props['n-id'], {}).mergeLayoutFromProps(props);
			}

			// id: string
			// layout: JSON

		}]);

		function Layout(id, layout) {
			_classCallCheck(this, Layout);

			this.id = id;
			this.layout = layout ? layout : {};
			this.initialLayout = layout;
		}

		_createClass(Layout, [{
			key: 'mergeLayoutFromProps',
			value: function mergeLayoutFromProps(props) {
				var fromProps = Layout.toStereo(props);
				if (Object.keys(fromProps).length != 0) {
					this.layout = _envs.Envs.deepMergeTo({}, this.initialLayout, fromProps);
				}
				return this;
			}
		}, {
			key: 'getType',
			value: function getType() {
				var type = this.getOptionValue('type');
				if (type) {
					return this.buildDefaultType(type);
				} else {
					return this.buildDefaultType();
				}
			}
		}, {
			key: 'getTypeAsString',
			value: function getTypeAsString() {
				return this.getType().type;
			}
		}, {
			key: 'buildDefaultType',
			value: function buildDefaultType(type) {
				type = type ? type : 'n-text';
				if (typeof type === 'string') {
					return {
						type: type,
						label: false,
						error: true,
						popover: _envs.Envs.COMPONENT_ERROR_POPOVER
					};
				} else {
					return _envs.Envs.deepMergeTo({
						label: false,
						error: true,
						popover: _envs.Envs.COMPONENT_ERROR_POPOVER
					}, type);
				}
			}
		}, {
			key: 'isLabelShown',
			value: function isLabelShown() {
				return this.getType().label;
			}
		}, {
			key: 'isErrorShown',
			value: function isErrorShown() {
				return this.getType().error;
			}
		}, {
			key: 'isErrorShownAsPopover',
			value: function isErrorShownAsPopover() {
				return this.getType().popover;
			}
		}, {
			key: 'getId',
			value: function getId() {
				return this.id;
			}
		}, {
			key: 'getDataId',
			value: function getDataId() {
				return this.layout.dataId;
			}
		}, {
			key: 'getLabel',
			value: function getLabel() {
				return this.layout.label;
			}
		}, {
			key: 'getWidth',
			value: function getWidth() {
				return this.getPosition().width;
			}
		}, {
			key: 'getClear',
			value: function getClear() {
				return this.getPosition().clear;
			}
		}, {
			key: 'getColumnIndex',
			value: function getColumnIndex() {
				return this.getPosition().col;
			}
		}, {
			key: 'getRowIndex',
			value: function getRowIndex() {
				return this.getPosition().row;
			}
		}, {
			key: 'getPosition',
			value: function getPosition() {
				var pos = this.layout.pos;
				if (typeof pos === 'undefined' || pos == null) {
					return this.getDefaultPosition();
				} else {
					return this.getDefaultPosition(pos.width, pos.col, pos.row);
				}
			}
		}, {
			key: 'getDefaultPosition',
			value: function getDefaultPosition(width, columnIndex, rowIndex) {
				return {
					width: width,
					col: columnIndex ? columnIndex : 9999,
					row: rowIndex ? rowIndex : 9999
				};
			}
		}, {
			key: 'getStyles',
			value: function getStyles() {
				return this.layout.styles ? this.layout.styles : {};
			}
		}, {
			key: 'getStyle',
			value: function getStyle(key) {
				return this.getStyles()[key];
			}
		}, {
			key: 'getOptions',
			value: function getOptions() {
				return this.layout.comp ? this.layout.comp : {};
			}
		}, {
			key: 'getOptionValue',
			value: function getOptionValue(key) {
				var options = this.getOptions();
				if (options[key] != null && options.propertyIsEnumerable(key)) {
					return this.getOptions()[key];
				} else {
					return null;
				}
			}
		}, {
			key: 'getAdditionalModel',
			value: function getAdditionalModel() {
				return this.getOptionValue('additionalModel');
			}
		}, {
			key: 'getEventMonitors',
			value: function getEventMonitors() {
				return this.layout.evt ? this.layout.evt : {};
			}
		}, {
			key: 'getEventMonitor',
			value: function getEventMonitor(key) {
				return this.getEventMonitors()[key];
			}
		}]);

		return Layout;
	}();

	exports.Layout = Layout;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = classNames;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.NToggle = exports.NArrayCheck = exports.NCheck = undefined;

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nComponent = __webpack_require__(5);

	Object.keys(_nComponent).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function () {
				return _nComponent[key];
			}
		});
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NCheck = function (_NComponent) {
		_inherits(NCheck, _NComponent);

		function NCheck() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, NCheck);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NCheck.__proto__ || Object.getPrototypeOf(NCheck)).call.apply(_ref, [this].concat(args))), _this), _this.onComponentClicked = function (evt) {
				evt.preventDefault();
				var value = _this.getValueFromModel();
				_this.setValueToModel(!value);

				_this.$me().focus();
			}, _this.onComponentKeyPressed = function (evt) {
				if (evt.charCode === 32) {
					evt.preventDefault();
					var value = _this.getValueFromModel();
					_this.setValueToModel(!value);
				}
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(NCheck, [{
			key: 'renderText',
			value: function renderText(label) {
				return _nComponent.React.createElement(
					'span',
					{ className: 'n-check-text n-control' },
					label ? label : this.getLabel()
				);
			}
		}, {
			key: 'renderTextOnLeft',
			value: function renderTextOnLeft(options) {
				if (options.show && options.left) {
					return this.renderText();
				}
			}
		}, {
			key: 'renderTextOnRight',
			value: function renderTextOnRight(options) {
				if (options.show && !options.left) {
					return this.renderText();
				} else if (!options.show) {
					return this.renderText(' ');
				}
			}
		}, {
			key: 'renderCheck',
			value: function renderCheck() {
				return _nComponent.React.createElement(
					'span',
					{ className: 'n-check-box n-control' },
					_nComponent.React.createElement('span', { className: 'n-check-box-rect' })
				);
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var labelDisplay = this.isLabelDisplay();
				var textOnLeft = this.isTextOnLeft();
				var className = (0, _nComponent.classnames)(this.getComponentStyle(), {
					'n-checked': this.isChecked(),
					'n-check-text-left': textOnLeft,
					'n-check-text-right': !textOnLeft,
					'n-check-no-text': !labelDisplay
				});
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						onClick: this.onComponentClicked,
						onKeyPress: this.onComponentKeyPressed,
						tabIndex: this.getTabIndex(),
						ref: 'me' },
					this.renderTextOnLeft({ left: textOnLeft, show: labelDisplay }),
					this.renderCheck(),
					this.renderTextOnRight({ left: textOnLeft, show: labelDisplay })
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-check';
			}
		}, {
			key: 'isLabelDisplay',
			value: function isLabelDisplay() {
				return this.getLayoutOptionValue('labelDisplay', false);
			}
		}, {
			key: 'isTextOnLeft',
			value: function isTextOnLeft() {
				return this.getLayoutOptionValue('textOnLeft', false);
			}
		}, {
			key: 'isChecked',
			value: function isChecked() {
				return this.getValueFromModel();
			}
		}]);

		return NCheck;
	}(_nComponent.NComponent);

	var NArrayCheck = function (_NCodeTableComponent) {
		_inherits(NArrayCheck, _NCodeTableComponent);

		function NArrayCheck() {
			_classCallCheck(this, NArrayCheck);

			return _possibleConstructorReturn(this, (NArrayCheck.__proto__ || Object.getPrototypeOf(NArrayCheck)).apply(this, arguments));
		}

		_createClass(NArrayCheck, [{
			key: 'renderCodeItem',
			value: function renderCodeItem(item, itemIndex) {
				var layout = {
					label: item.text,
					comp: {
						type: _nComponent.Envs.COMPONENT_TYPES.CHECK_NL,
						textOnLeft: this.isTextOnLeft(),
						labelDisplay: true
					}
				};
				var values = this.getValueFromModel();
				var id = this.getDataId();
				var data = {};
				data[id] = values.indexOf(item.id) != -1;
				var model = new _nComponent.Model(data);
				model.addPostChangeListener(id, this.onItemCheckChanged.bind(this, item));
				return this.renderInternalComponent(layout, {
					key: itemIndex,
					model: model
				});
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var _this3 = this;

				var className = (0, _nComponent.classnames)(this.getComponentStyle(), {
					'n-array-check-vertical': this.isOnVertical()
				});
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						ref: 'me' },
					this.getCodeTable().map(function (item, itemIndex) {
						return _this3.renderCodeItem(item, itemIndex);
					})
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-array-check';
			}
		}, {
			key: 'isTextOnLeft',
			value: function isTextOnLeft() {
				return this.getLayoutOptionValue('textOnLeft', false);
			}
		}, {
			key: 'isOnVertical',
			value: function isOnVertical() {
				return this.getLayoutOptionValue('vertical', false);
			}
		}, {
			key: 'onItemCheckChanged',
			value: function onItemCheckChanged(item, evt) {
				var id = item.id;
				var oldValues = this.getValueFromModel();
				var newValues = oldValues.slice(0);
				if (evt.new) {
					if (oldValues.indexOf(id) == -1) {
						newValues.push(id);
					}
					this.setValueToModel(newValues);
				} else {
					var index = oldValues.indexOf(id);
					if (index != -1) {
						newValues.splice(index, 1);
					}
					this.setValueToModel(newValues);
				}
			}
		}, {
			key: 'getValueFromModel',
			value: function getValueFromModel() {
				var value = _get(NArrayCheck.prototype.__proto__ || Object.getPrototypeOf(NArrayCheck.prototype), 'getValueFromModel', this).call(this);
				return value ? value : [];
			}
		}]);

		return NArrayCheck;
	}((0, _nComponent.NCodeTableComponent)(_nComponent.NComponent));

	var NToggle = function (_NComponent2) {
		_inherits(NToggle, _NComponent2);

		function NToggle() {
			var _ref2;

			var _temp2, _this4, _ret2;

			_classCallCheck(this, NToggle);

			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, (_ref2 = NToggle.__proto__ || Object.getPrototypeOf(NToggle)).call.apply(_ref2, [this].concat(args))), _this4), _this4.onComponentClicked = function (evt) {
				evt.preventDefault();
				var value = _this4.getValueFromModel();
				_this4.setValueToModel(!value);

				_this4.$me().focus();
			}, _this4.onComponentKeyUp = function (evt) {
				var keycode = evt.keyCode;
				var value = _this4.getValueFromModel();
				if (keycode === 37) {
					// left
					if (!value) {
						evt.preventDefault();
						_this4.setValueToModel(true);
					}
				} else if (keycode === 39) {
					// right
					if (value) {
						evt.preventDefault();
						_this4.setValueToModel(false);
					}
				}
			}, _temp2), _possibleConstructorReturn(_this4, _ret2);
		}

		_createClass(NToggle, [{
			key: 'renderInNormal',
			value: function renderInNormal() {
				return _nComponent.React.createElement(
					'div',
					{ className: (0, _nComponent.classnames)('n-control', this.getComponentStyle()),
						onClick: this.onComponentClicked,
						onKeyUp: this.onComponentKeyUp,
						tabIndex: this.getTabIndex(),
						ref: 'me' },
					_nComponent.React.createElement('span', { className: (0, _nComponent.classnames)('n-toggle-button', this.getToggleStyle(), { 'n-checked': this.isChecked() }) }),
					_nComponent.React.createElement(
						'span',
						{ className: 'n-toggle-text n-control' },
						' '
					)
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-toggle';
			}
		}, {
			key: 'isChecked',
			value: function isChecked() {
				return this.getValueFromModel();
			}
		}, {
			key: 'getToggleStyle',
			value: function getToggleStyle() {
				return 'n-toggle-' + this.getLayoutOptionValue('style', 'primary');
			}
		}]);

		return NToggle;
	}(_nComponent.NComponent);

	_nComponent.Envs.COMPONENT_TYPES.CHECK = { type: 'n-check', label: true, error: true };
	_nComponent.Envs.COMPONENT_TYPES.CHECK_NL = { type: 'n-check', label: false, error: true };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.CHECK.type, function (options) {
		return _nComponent.React.createElement(NCheck, options);
	});
	_nComponent.Envs.COMPONENT_TYPES.ARRAY_CHECK = { type: 'n-array-check', label: true, error: true };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.ARRAY_CHECK.type, function (options) {
		return _nComponent.React.createElement(NArrayCheck, options);
	});
	_nComponent.Envs.COMPONENT_TYPES.TOGGLE = { type: 'n-toggle', label: true, error: true };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.TOGGLE.type, function (options) {
		return _nComponent.React.createElement(NToggle, options);
	});

	exports.NCheck = NCheck;
	exports.NArrayCheck = NArrayCheck;
	exports.NToggle = NToggle;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.moment = exports.NDateTimeCalendar = exports.NTimeClock = exports.NDateCalendar = exports.NDate = exports.NDateComponent = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _nComponent = __webpack_require__(5);

	Object.keys(_nComponent).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _nComponent[key];
			}
		});
	});

	var _nIcon = __webpack_require__(18);

	var _moment = __webpack_require__(19);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var YEAR = 1;
	var MONTH = 2;
	var DAY = 4;
	var HOUR = 8;
	var MINUTE = 16;
	var SECOND = 32;

	var NDateComponent = function NDateComponent(ParentClass) {
		return function (_ParentClass) {
			_inherits(_class, _ParentClass);

			function _class(props) {
				_classCallCheck(this, _class);

				var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

				_this.YEAR = YEAR;
				_this.MONTH = MONTH;
				_this.DAY = DAY;
				_this.HOUR = HOUR;
				_this.MINUTE = MINUTE;
				_this.SECOND = SECOND;

				_this.onNowClicked = _this.onNowClicked.bind(_this);
				_this.onClearClicked = _this.onClearClicked.bind(_this);
				_this.onCloseClicked = _this.onCloseClicked.bind(_this);

				var defaultDate = _this.getLayoutOptionValue('defaultDateTime');
				if (defaultDate) {
					_this.state.displayDate = defaultDate.clone();
				}
				var defaultDisplayType = _this.getLayoutOptionValue('defaultDisplayType');
				if (defaultDisplayType) {
					_this.state.currentDisplayType = defaultDisplayType;
				}
				return _this;
			}

			_createClass(_class, [{
				key: 'buildLayout',
				value: function buildLayout(props) {
					_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'buildLayout', this).call(this, props);
					this.computeDisplayType();
				}
			}, {
				key: 'renderDateFooter',
				value: function renderDateFooter() {
					return _nComponent.React.createElement(NCalendarFooter, { model: this.getModel(),
						'n-id': this.getDataId(),
						'n-comp-showClose': this.isCloseButtonShown(),
						'n-comp-showClear': this.isClearButtonShown(),
						'n-comp-showNow': this.isNowButtonShown(),
						'n-evt-closeClick': this.onCloseClicked,
						'n-evt-clearClick': this.onClearClicked,
						'n-evt-nowClick': this.onNowClicked,
						container: this,
						ref: 'footer' });
				}
			}, {
				key: 'getValueFormat',
				value: function getValueFormat() {
					return this.getLayoutOptionValue('valueFormat', _nComponent.Envs.DATE_VALUE_FORMAT);
				}
			}, {
				key: 'getDisplayFormats',
				value: function getDisplayFormats() {
					var formats = this.wrapToArray(this.getLayoutOptionValue('displayFormats'));
					return formats.length == 0 ? this.wrapToArray(_nComponent.Envs.DATE_DISPLAY_FORMAT) : formats;
				}
			}, {
				key: 'getPrimaryDisplayFormat',
				value: function getPrimaryDisplayFormat() {
					return this.getDisplayFormats()[0];
				}
			}, {
				key: 'getYearStepOfMonthPanel',
				value: function getYearStepOfMonthPanel() {
					return this.getLayoutOptionValue('yearStep', _nComponent.Envs.YEAR_STEP_WHEN_MONTH);
				}
				// {min: moment, max: moment}

			}, {
				key: 'getDateRange',
				value: function getDateRange() {
					return this.getLayoutOptionValue('range');
				}
			}, {
				key: 'getDateEnabledChecker',
				value: function getDateEnabledChecker() {
					return this.getLayoutOptionValue('dateEnabledChecker', null, true);
				}
				// check the given date is enabled or not
				// type is #YEAR, #MONTH, #DAY
				// equals max/min value is legal

			}, {
				key: 'isDateEnabled',
				value: function isDateEnabled(date, type) {
					var pass = true;
					var range = this.getDateRange();
					var min = range ? range.min : null;
					if (min) {
						pass = !date.isBefore(min, type == YEAR ? 'year' : type == MONTH ? 'month' : 'date');
					}
					var max = range ? range.max : null;
					if (pass && max) {
						pass = !date.isAfter(max, type == YEAR ? 'year' : type == MONTH ? 'month' : 'date');
					}

					var checker = this.getDateEnabledChecker();
					if (pass && checker) {
						pass = checker.call(this, date, type);
					}
					return pass;
				}
			}, {
				key: 'computeDisplayType',
				value: function computeDisplayType() {
					var format = this.getPrimaryDisplayFormat();
					var oldDisplayType = this.state.displayType;
					this.state.displayType = (/Y/i.test(format) ? YEAR : 0) + (/M/.test(format) ? MONTH : 0) + (/D/i.test(format) ? DAY : 0) + (/H/i.test(format) ? HOUR : 0) + (/m/.test(format) ? MINUTE : 0) + (/s/.test(format) ? SECOND : 0);
					if (oldDisplayType != this.state.displayType) {
						// display type changed
						var currentDisplayType = this.getCurrentDisplayType();
						if ((this.state.displayType & currentDisplayType) != currentDisplayType) {
							// current display type cannot be supported
							delete this.state.currentDisplayType;
						}
					}
				}
			}, {
				key: 'getDisplayType',
				value: function getDisplayType() {
					if (this.state.displayType == null) {
						this.computeDisplayType();
					}
					return this.state.displayType;
				}
			}, {
				key: 'getCurrentDisplayType',
				value: function getCurrentDisplayType() {
					if (this.state.currentDisplayType == null) {
						if (this.isSecondSupported()) {
							this.state.currentDisplayType = SECOND;
						} else if (this.isMinuteSupported()) {
							this.state.currentDisplayType = MINUTE;
						} else if (this.isHourSupported()) {
							this.state.currentDisplayType = HOUR;
						} else if (this.isDaySupported()) {
							this.state.currentDisplayType = DAY;
						} else if (this.isMonthSupported()) {
							this.state.currentDisplayType = MONTH;
						} else {
							this.state.currentDisplayType = YEAR;
						}
					}
					return this.state.currentDisplayType;
				}
			}, {
				key: 'isYearSupported',
				value: function isYearSupported() {
					return this.getDisplayType() & YEAR;
				}
			}, {
				key: 'isMonthSupported',
				value: function isMonthSupported() {
					return this.getDisplayType() & MONTH;
				}
			}, {
				key: 'isDaySupported',
				value: function isDaySupported() {
					return this.getDisplayType() & DAY;
				}
			}, {
				key: 'isDateSupported',
				value: function isDateSupported() {
					return this.isYearSupported();
				}
			}, {
				key: 'isHourSupported',
				value: function isHourSupported() {
					return this.getDisplayType() & HOUR;
				}
			}, {
				key: 'isMinuteSupported',
				value: function isMinuteSupported() {
					return this.getDisplayType() & MINUTE;
				}
			}, {
				key: 'isSecondSupported',
				value: function isSecondSupported() {
					return this.getDisplayType() & SECOND;
				}
			}, {
				key: 'isTimeSupported',
				value: function isTimeSupported() {
					return this.isHourSupported();
				}
			}, {
				key: 'isCloseButtonShown',
				value: function isCloseButtonShown() {
					return this.getLayoutOptionValue('showClose', false);
				}
			}, {
				key: 'isNowButtonShown',
				value: function isNowButtonShown() {
					return this.getLayoutOptionValue('showNow', true);
				}
			}, {
				key: 'isClearButtonShown',
				value: function isClearButtonShown() {
					return this.getLayoutOptionValue('showClear', true);
				}
			}, {
				key: 'hasFooter',
				value: function hasFooter() {
					return this.isClearButtonShown() || this.isNowButtonShown() || this.isCloseButtonShown();
				}
			}, {
				key: 'onModelChanged',
				value: function onModelChanged(evt) {
					delete this.state.displayDate;
					_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'onModelChanged', this).call(this, evt);
				}
			}, {
				key: 'getValueFromModel',
				value: function getValueFromModel() {
					var value = this.formatValue(_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'getValueFromModel', this).call(this), this.getValueFormat());
					return value == null || !value.isValid() ? null : value;
				}
			}, {
				key: 'setValueToModel',
				value: function setValueToModel(value) {
					if (value == null) {
						_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setValueToModel', this).call(this, null);
					} else if (typeof value === 'string') {
						// string value
						var momentValue = this.formatValue(value, this.getValueFormat());
						_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setValueToModel', this).call(this, this.parseText(momentValue, this.getValueFormat()));
					} else {
						// moment object
						_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setValueToModel', this).call(this, this.parseText(value, this.getValueFormat()));
					}
				}
			}, {
				key: 'formatValue',
				value: function formatValue(strValue, formats, strict) {
					if (strValue == null || strValue.length == 0) {
						return null;
					} else {
						return (0, _moment2.default)(strValue.trim(), formats, strict);
					}
				}
			}, {
				key: 'parseText',
				value: function parseText(momentValue, format) {
					if (momentValue == null || !momentValue.isValid()) {
						return null;
					} else {
						return momentValue.format(format);
					}
				}
			}, {
				key: 'isSame',
				value: function isSame(momentValue1, momentValue2) {
					if (momentValue1 == null || !momentValue1.isValid()) {
						return momentValue2 == null || !momentValue2.isValid();
					} else if (momentValue2 == null || !momentValue2.isValid()) {
						return false;
					} else {
						return momentValue1.isSame(momentValue2);
					}
				}
			}, {
				key: 'onCloseClicked',
				value: function onCloseClicked(evt) {
					this.fireEventToMonitor(evt, 'closeClick');
				}
			}, {
				key: 'onNowClicked',
				value: function onNowClicked(evt) {
					var _this2 = this;

					evt.preventDefault();
					this.setDisplayToNow(function () {
						_this2.fireEventToMonitor(evt, 'nowClick');
					});
				}
			}, {
				key: 'onClearClicked',
				value: function onClearClicked(evt) {
					evt.preventDefault();
					this.clearValue();
					this.fireEventToMonitor(evt, 'clearClick');
				}
			}, {
				key: 'setDisplayToNow',
				value: function setDisplayToNow(callback) {
					this.setState({
						displayDate: (0, _moment2.default)()
					}, callback);
				}
			}, {
				key: 'clearValue',
				value: function clearValue() {
					var oldValue = this.getValueFromModel();
					if (oldValue != null) {
						this.setValueToModel(null);
					}
				}
			}, {
				key: 'resetDisplayOptions',
				value: function resetDisplayOptions(options) {
					this.setState(options);
				}
			}]);

			return _class;
		}(ParentClass);
	};

	var NIconRenderer = function NIconRenderer(ParentClass) {
		return function (_ParentClass2) {
			_inherits(_class2, _ParentClass2);

			function _class2() {
				_classCallCheck(this, _class2);

				return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
			}

			_createClass(_class2, [{
				key: 'renderIcon',
				value: function renderIcon(options) {
					return this.renderInternalComponent({
						comp: {
							type: _nComponent.Envs.COMPONENT_TYPES.ICON,
							icon: options.icon
						},
						evt: {
							click: options.click
						}
					}, {
						ref: options.ref
					});
				}
			}]);

			return _class2;
		}(ParentClass);
	};

	var NCalendarFooter = function (_NIconRenderer) {
		_inherits(NCalendarFooter, _NIconRenderer);

		function NCalendarFooter() {
			var _ref;

			var _temp, _this4, _ret;

			_classCallCheck(this, NCalendarFooter);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this4 = _possibleConstructorReturn(this, (_ref = NCalendarFooter.__proto__ || Object.getPrototypeOf(NCalendarFooter)).call.apply(_ref, [this].concat(args))), _this4), _this4.onClearIconClicked = function (evt) {
				_this4.fireEventToMonitor(evt, 'clearClick');
			}, _this4.onNowIconClicked = function (evt) {
				_this4.fireEventToMonitor(evt, 'nowClick');
			}, _this4.onCloseIconClicked = function (evt) {
				_this4.fireEventToMonitor(evt, 'closeClick');
			}, _temp), _possibleConstructorReturn(_this4, _ret);
		}

		_createClass(NCalendarFooter, [{
			key: 'renderClearButton',
			value: function renderClearButton() {
				if (this.isClearButtonShown()) {
					return _nComponent.React.createElement(
						'div',
						{ className: 'n-calendar-footer-button' },
						this.renderIcon({
							icon: 'trash-o',
							click: this.onClearIconClicked,
							ref: 'clear-btn'
						})
					);
				}
			}
		}, {
			key: 'renderNowButton',
			value: function renderNowButton() {
				if (this.isNowButtonShown()) {
					return _nComponent.React.createElement(
						'div',
						{ className: 'n-calendar-footer-button' },
						this.renderIcon({
							icon: 'crosshairs',
							click: this.onNowIconClicked,
							ref: 'now-btn'
						})
					);
				}
			}
		}, {
			key: 'renderCloseButton',
			value: function renderCloseButton() {
				if (this.isCloseButtonShown()) {
					return _nComponent.React.createElement(
						'div',
						{ className: 'n-calendar-footer-button' },
						this.renderIcon({
							icon: 'close',
							click: this.onCloseIconClicked,
							ref: 'close-btn'
						})
					);
				}
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				return _nComponent.React.createElement(
					'div',
					{ className: this.getComponentStyle(),
						ref: 'me' },
					this.renderClearButton(),
					this.renderNowButton(),
					this.renderCloseButton()
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-calendar-footer';
			}
		}, {
			key: 'isCloseButtonShown',
			value: function isCloseButtonShown() {
				return this.getLayoutOptionValue('showClose', false);
			}
		}, {
			key: 'isNowButtonShown',
			value: function isNowButtonShown() {
				return this.getLayoutOptionValue('showNow', true);
			}
		}, {
			key: 'isClearButtonShown',
			value: function isClearButtonShown() {
				return this.getLayoutOptionValue('showClear', true);
			}
		}]);

		return NCalendarFooter;
	}(NIconRenderer(_nComponent.NComponent));

	var NDateCalendar = function (_NIconRenderer2) {
		_inherits(NDateCalendar, _NIconRenderer2);

		function NDateCalendar() {
			var _ref2;

			var _temp2, _this5, _ret2;

			_classCallCheck(this, NDateCalendar);

			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			return _ret2 = (_temp2 = (_this5 = _possibleConstructorReturn(this, (_ref2 = NDateCalendar.__proto__ || Object.getPrototypeOf(NDateCalendar)).call.apply(_ref2, [this].concat(args))), _this5), _this5.onHeaderYearClicked = function (evt) {
				evt.preventDefault();
				var oldCurrentDisplayType = _this5.getCurrentDisplayType();
				_this5.setState({
					currentDisplayType: YEAR
				}, function () {
					_this5.fireDisplayTypeChangeEvent(oldCurrentDisplayType);
				});
			}, _this5.onHeaderMonthClicked = function (evt) {
				evt.preventDefault();
				var oldCurrentDisplayType = _this5.getCurrentDisplayType();
				_this5.setState({
					currentDisplayType: MONTH
				}, function () {
					_this5.fireDisplayTypeChangeEvent(oldCurrentDisplayType);
				});
			}, _this5.onYearClicked = function (year, evt) {
				evt.preventDefault();
				var date = _this5.getDisplayDate();
				_this5.setValueToModel(_this5.applyTimeToValue(date.clone().year(year)));
				if (_this5.isMonthSupported()) {
					_this5.setState({
						currentDisplayType: MONTH
					});
				} else {
					_this5.setState({
						displayDate: date
					});
				}
			}, _this5.onMonthClicked = function (month, evt) {
				evt.preventDefault();
				var date = _this5.getDisplayDate();
				_this5.setValueToModel(_this5.applyTimeToValue(date.clone().month(month)));
				if (_this5.isDaySupported()) {
					_this5.setState({
						currentDisplayType: DAY
					});
				}
			}, _this5.onDayClicked = function (date, evt) {
				evt.preventDefault();
				_this5.setValueToModel(_this5.applyTimeToValue(date));
			}, _this5.onBackwardClicked = function (evt) {
				evt.preventDefault();
				_this5.onHeaderIconClicked({
					day: { step: -1 },
					month: { step: 0 - _this5.getYearStepOfMonthPanel() },
					year: { step: -50 }
				});
			}, _this5.onPreviousClicked = function (evt) {
				evt.preventDefault();
				_this5.onHeaderIconClicked({
					day: { step: -1, unit: 'month' },
					month: { step: -1 },
					year: { step: -25 }
				});
			}, _this5.onNextClicked = function (evt) {
				evt.preventDefault();
				_this5.onHeaderIconClicked({
					day: { step: 1, unit: 'month' },
					month: { step: 1 },
					year: { step: 25 }
				});
			}, _this5.onForwardClicked = function (evt) {
				evt.preventDefault();
				_this5.onHeaderIconClicked({
					day: { step: 1 },
					month: { step: _this5.getYearStepOfMonthPanel() },
					year: { step: 50 }
				});
			}, _temp2), _possibleConstructorReturn(_this5, _ret2);
		}

		_createClass(NDateCalendar, [{
			key: 'renderDateHeaderForYear',
			value: function renderDateHeaderForYear(date) {
				if (!this.isYearPicking()) {
					return null;
				}
				return _nComponent.React.createElement(
					'div',
					{ className: 'n-calendar-date-header-text' },
					_nComponent.React.createElement(
						'span',
						null,
						date.format(this.getDateHeaderFormat().year) - 12,
						' ~ ',
						date.format(this.getDateHeaderFormat().year) * 1 + 12
					)
				);
			}
		}, {
			key: 'renderDateHeaderForMonth',
			value: function renderDateHeaderForMonth(date) {
				if (!this.isMonthPicking()) {
					return null;
				}
				return _nComponent.React.createElement(
					'div',
					{ className: 'n-calendar-date-header-text' },
					_nComponent.React.createElement(
						'span',
						{ className: 'n-clickable', onClick: this.onHeaderYearClicked },
						date.format(this.getDateHeaderFormat().year)
					)
				);
			}
		}, {
			key: 'renderDateHeaderForDay',
			value: function renderDateHeaderForDay(date) {
				if (!this.isDayPicking()) {
					return null;
				}
				return _nComponent.React.createElement(
					'div',
					{ className: 'n-calendar-date-header-text' },
					_nComponent.React.createElement(
						'span',
						null,
						_nComponent.React.createElement(
							'span',
							{ className: 'n-clickable', onClick: this.onHeaderYearClicked },
							date.format(this.getDateHeaderFormat().year)
						),
						_nComponent.React.createElement(
							'span',
							{ className: 'n-clickable', onClick: this.onHeaderMonthClicked },
							date.format(this.getDateHeaderFormat().month)
						)
					)
				);
			}
		}, {
			key: 'renderDateHeader',
			value: function renderDateHeader() {
				var date = this.getDisplayDate();
				return _nComponent.React.createElement(
					'div',
					{ className: 'n-calendar-date-header' },
					this.renderIcon({
						icon: 'angle-double-left',
						click: this.onBackwardClicked,
						ref: 'backward-btn'
					}),
					this.renderIcon({
						icon: 'angle-left',
						click: this.onPreviousClicked,
						ref: 'previous-btn'
					}),
					this.renderDateHeaderForDay(date),
					this.renderDateHeaderForMonth(date),
					this.renderDateHeaderForYear(date),
					this.renderIcon({
						icon: 'angle-right',
						click: this.onNextClicked,
						ref: 'next-btn'
					}),
					this.renderIcon({
						icon: 'angle-double-right',
						click: this.onForwardClicked,
						ref: 'forward-btn'
					})
				);
			}
		}, {
			key: 'renderDateBodyBodyForYear',
			value: function renderDateBodyBodyForYear(date) {
				var _this6 = this;

				if (!this.isYearPicking()) {
					return null;
				}
				var year = date.year();
				var years = [];
				var index = 0;
				for (index = 0; index < 12; index++) {
					years.push(year - 12 + index);
				}
				years.push(year);
				for (index = 0; index < 12; index++) {
					years.push(year + index + 1);
				}
				var today = (0, _moment2.default)();
				var activeYear = this.getValueFromModel();
				activeYear = activeYear ? activeYear.year() : -1;
				return years.map(function (year, index) {
					var theDate = date.clone().year(year);
					var enabled = _this6.isDateEnabled(theDate, _this6.getCurrentDisplayType());
					var className = (0, _nComponent.classnames)('n-calendar-date-body-body-text year', {
						'today': year == today.year(),
						'active': year == activeYear,
						'disabled': !enabled
					});
					var clickHandler = enabled ? _this6.onYearClicked.bind(_this6, year) : null;
					return _nComponent.React.createElement(
						'span',
						{ className: className,
							onClick: clickHandler,
							key: index },
						_nComponent.React.createElement(
							'span',
							null,
							year
						)
					);
				});
			}
		}, {
			key: 'renderDateBodyBodyForMonth',
			value: function renderDateBodyBodyForMonth(date) {
				var _this7 = this;

				if (!this.isMonthPicking()) {
					return null;
				}
				var today = (0, _moment2.default)();
				var activeMonth = this.getValueFromModel();
				var hasActiveMonth = activeMonth ? date.year() == activeMonth.year() : false;
				activeMonth = activeMonth ? activeMonth.month() : -1;
				var months = _moment2.default.monthsShort();
				return months.map(function (month, index) {
					var theDate = date.clone().month(index);
					var enabled = _this7.isDateEnabled(theDate, _this7.getCurrentDisplayType());
					var className = (0, _nComponent.classnames)('n-calendar-date-body-body-text month', {
						'today': index == today.month(),
						'active': hasActiveMonth && index == activeMonth,
						'disabled': !enabled
					});
					var clickHandler = enabled ? _this7.onMonthClicked.bind(_this7, index) : null;
					return _nComponent.React.createElement(
						'span',
						{ className: className,
							onClick: clickHandler,
							key: index },
						_nComponent.React.createElement(
							'span',
							null,
							month
						)
					);
				});
			}
		}, {
			key: 'renderDateBodyHeaderForDay',
			value: function renderDateBodyHeaderForDay() {
				if (!this.isDayPicking()) {
					return null;
				}
				var weekdays = _moment2.default.weekdaysMin();
				return _nComponent.React.createElement(
					'div',
					{ className: 'n-calendar-date-body-header' },
					weekdays.map(function (weekday, index) {
						return _nComponent.React.createElement(
							'span',
							{ className: 'n-calendar-date-body-header-text',
								key: index },
							weekday
						);
					})
				);
			}
		}, {
			key: 'renderDateBodyBodyForDay',
			value: function renderDateBodyBodyForDay(date) {
				var _this8 = this;

				if (!this.isDayPicking()) {
					return null;
				}
				var days = this.buildCalendarDays(date);
				var today = (0, _moment2.default)();
				var activeDay = this.getValueFromModel();
				var hasActiveDay = activeDay ? date.year() == activeDay.year() && date.month() == activeDay.month() : false;
				activeDay = activeDay ? activeDay.date() : -1;
				var before = true;
				var after = false;
				return days.map(function (day, index) {
					if (day == 1) {
						if (before) {
							before = false;
						} else {
							after = true;
						}
					}
					var theDate = null;
					if (before) {
						theDate = date.clone().subtract(1, 'month').date(day);
					} else if (after) {
						theDate = date.clone().add(1, 'month').date(day);
					} else {
						theDate = date.clone().date(day);
					}
					var enabled = _this8.isDateEnabled(theDate, _this8.getCurrentDisplayType());
					var className = (0, _nComponent.classnames)('n-calendar-date-body-body-text date', {
						'before': before,
						'after': after,
						'today': theDate.year() == today.year() && theDate.month() == today.month() && theDate.date() == today.date(),
						'active': hasActiveDay && !before && !after && day == activeDay,
						'disabled': !enabled
					});
					var clickHandler = enabled ? _this8.onDayClicked.bind(_this8, theDate) : null;
					return _nComponent.React.createElement(
						'span',
						{ className: className,
							onClick: clickHandler,
							key: index },
						_nComponent.React.createElement(
							'span',
							null,
							day
						)
					);
				});
			}
		}, {
			key: 'renderDateBodyBody',
			value: function renderDateBodyBody() {
				var date = this.getDisplayDate();
				return _nComponent.React.createElement(
					'div',
					{ className: 'n-calendar-date-body-body' },
					this.renderDateBodyHeaderForDay(date),
					this.renderDateBodyBodyForDay(date),
					this.renderDateBodyBodyForMonth(date),
					this.renderDateBodyBodyForYear(date)
				);
			}
		}, {
			key: 'renderDateBody',
			value: function renderDateBody() {
				return _nComponent.React.createElement(
					'div',
					{ className: 'n-calendar-date-body' },
					this.renderDateBodyBody()
				);
			}
		}, {
			key: 'renderDate',
			value: function renderDate() {
				var hasFooter = this.hasFooter();
				return _nComponent.React.createElement(
					'div',
					{ className: (0, _nComponent.classnames)('n-calendar-date', { 'n-calendar-no-footer': !hasFooter }) },
					this.renderDateHeader(),
					this.renderDateBody(),
					hasFooter ? this.renderDateFooter() : null
				);
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				return _nComponent.React.createElement(
					'div',
					{ className: this.getComponentStyle(),
						ref: 'me' },
					this.renderDate()
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-calendar';
			}
		}, {
			key: 'getDateHeaderFormat',
			value: function getDateHeaderFormat() {
				var format = this.getLayoutOptionValue('dateHeaderFormat');
				return _nComponent.lodash.assign({}, _nComponent.Envs.DATE_HEADER_FORMAT, format);
			}
		}, {
			key: 'isDayPicking',
			value: function isDayPicking() {
				return this.getCurrentDisplayType() & DAY;
			}
		}, {
			key: 'isMonthPicking',
			value: function isMonthPicking() {
				return this.getCurrentDisplayType() & MONTH;
			}
		}, {
			key: 'isYearPicking',
			value: function isYearPicking() {
				return this.getCurrentDisplayType() & YEAR;
			}
		}, {
			key: 'getCurrentDisplayType',
			value: function getCurrentDisplayType() {
				if (this.state.currentDisplayType == null) {
					// default use the smallest unit
					if (this.isDaySupported()) {
						this.state.currentDisplayType = DAY;
					} else if (this.isMonthSupported()) {
						this.state.currentDisplayType = MONTH;
					} else {
						this.state.currentDisplayType = YEAR;
					}
				}
				return this.state.currentDisplayType;
			}
		}, {
			key: 'getDisplayDate',
			value: function getDisplayDate() {
				if (this.state.displayDate == null) {
					var value = this.getValueFromModel();
					this.state.displayDate = value == null ? (0, _moment2.default)() : value;
					if (!this.isDaySupported()) {
						this.state.displayDate.date(1);
					}
					if (!this.isMonthSupported()) {
						this.state.displayDate.month(0);
					}
				}
				return this.state.displayDate;
			}
		}, {
			key: 'buildCalendarDays',
			value: function buildCalendarDays(date) {
				var days = [];

				var lastDay = date.clone().endOf('month').date();
				// weekday: 1(Mon) - 7(Sun)
				var firstWeekDay = date.clone().startOf('month').isoWeekday();
				var previousLastDay = date.clone().subtract(1, 'month').endOf('month').date();

				var index = 0;
				var count = 0;
				for (index = 0; index < firstWeekDay; index++) {
					days.push(previousLastDay - firstWeekDay + index + 1);
				}
				for (index = 0; index < lastDay; index++) {
					days.push(index + 1);
				}
				for (index = 0, count = 42 - days.length; index < count; index++) {
					days.push(index + 1);
				}
				return days;
			}
		}, {
			key: 'onHeaderIconClicked',
			value: function onHeaderIconClicked(options) {
				evt.preventDefault();
				var oldDate = this.getDisplayDate();
				var date = oldDate.clone();
				if (this.isDayPicking()) {
					// day picking panel, switch year
					date.add.call(date, options.day.step, options.day.unit || 'year');
				} else if (this.isMonthPicking()) {
					date.add.call(date, options.month.step, options.month.unit || 'year');
				} else if (this.isYearPicking()) {
					date.add.call(date, options.year.step, options.year.unit || 'year');
				}
				this.setState({ displayDate: date });
				this.fireEventToMonitor(_nComponent.$.Event('displayDateChange', {
					target: this.me(),
					ndata: {
						oldDisplayDate: oldDate,
						newDisplayDate: date
					}
				}));
			}
		}, {
			key: 'fireDisplayTypeChangeEvent',
			value: function fireDisplayTypeChangeEvent(oldDisplayType) {
				this.fireEventToMonitor(_nComponent.$.Event('displayTypeChange', {
					target: this.me(),
					ndata: {
						oldDisplayType: oldDisplayType,
						newDisplayType: this.getCurrentDisplayType()
					}
				}));
			}
		}, {
			key: 'applyTimeToValue',
			value: function applyTimeToValue(date) {
				var oldValue = this.getValueFromModel();
				if (oldValue == null) {
					var now = (0, _moment2.default)();
					date.hour(now.hour()).minute(now.minute()).second(now.second());
				}
				return date;
			}
		}]);

		return NDateCalendar;
	}(NIconRenderer(NDateComponent(_nComponent.NComponent)));

	var NTimeClock = function (_NDateComponent) {
		_inherits(NTimeClock, _NDateComponent);

		function NTimeClock() {
			var _ref3;

			var _temp3, _this9, _ret3;

			_classCallCheck(this, NTimeClock);

			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}

			return _ret3 = (_temp3 = (_this9 = _possibleConstructorReturn(this, (_ref3 = NTimeClock.__proto__ || Object.getPrototypeOf(NTimeClock)).call.apply(_ref3, [this].concat(args))), _this9), _this9.onCircleClicked = function (evt) {
				var target = (0, _nComponent.$)(evt.target);
				var clientX = evt.clientX,
				    clientY = evt.clientY;
				var targetOffset = target.closest('svg').offset();
				var x = clientX + (0, _nComponent.$)(document).scrollLeft() - (targetOffset.left + 105);
				var y = -1 * (clientY + (0, _nComponent.$)(document).scrollTop() - (targetOffset.top + 105));
				var degree = 0;
				if (x == 0) {
					degree = y >= 0 ? 90 : 270;
				} else {
					degree = Math.atan(y / x) * 180 / Math.PI;
					// transform to coordinate system degree
					if (x > 0 && y >= 0) {
						// do nothing
					} else if (x < 0) {
						degree += 180;
					} else {
						degree += 360;
					}
				}
				// transform to real clock coordinate system
				if (degree <= 90) {
					degree = 90 - degree;
				} else {
					degree = 450 - degree;
				}
				var value = _this9.getValueFromModel();
				if (value == null) {
					value = (0, _moment2.default)();
					if (!_this9.isDaySupported()) {
						value.date(1);
					}
					if (!_this9.isMonthSupported()) {
						value.month(0);
					}
					if (!_this9.isMinuteSupported()) {
						value.minute(0);
					}
					if (!_this9.isSecondSupported()) {
						value.second(0);
					}
				} else {
					value = value.clone();
				}
				if (target.hasClass('hour')) {
					var v = Math.round(degree / 360 * 24);
					value.hour(v);
				} else {
					var _v = Math.round(degree / 360 * 60);
					if (target.hasClass('minute')) {
						value.minute(_v);
					} else {
						value.second(_v);
					}
				}
				evt.preventDefault();
				_this9.setValueToModel(value);
			}, _temp3), _possibleConstructorReturn(_this9, _ret3);
		}

		_createClass(NTimeClock, [{
			key: 'renderTimeBody',
			value: function renderTimeBody() {
				var _this10 = this;

				var date = this.getDisplayDate();
				var circles = [{
					tip: 'Second',
					class: 'second',
					value: date.second(),
					total: 60
				}, {
					tip: 'Minute',
					class: 'minute',
					value: date.minute(),
					total: 60
				}, {
					tip: 'Hour',
					class: 'hour',
					value: date.hour(),
					total: 24
				}];
				if (!this.isSecondSupported()) {
					circles.splice(0, 1);
					if (!this.isMinuteSupported()) {
						circles.splice(0, 1);
					}
				}
				return _nComponent.React.createElement(
					'div',
					{ className: 'n-calendar-time-body' },
					_nComponent.React.createElement(
						'div',
						{ className: 'n-calendar-time-clock' },
						_nComponent.React.createElement(
							'svg',
							null,
							_nComponent.React.createElement('circle', { className: 'n-calendar-time-clock-bg',
								r: '51', cx: '105', cy: '105' }),
							circles.map(function (circle, index) {
								var size = 92 - index * 30;
								var painter = {
									r: size,
									cx: 105,
									cy: 105
								};
								return _nComponent.React.createElement(
									'g',
									{ key: index },
									_nComponent.React.createElement(
										'title',
										null,
										circle.tip
									),
									_nComponent.React.createElement('circle', _extends({ className: 'n-calendar-time-clock-circle-bg ' + circle.class + ' size-' + size,
										onClick: _this10.onCircleClicked
									}, painter)),
									_nComponent.React.createElement('circle', _extends({ className: 'n-calendar-time-clock-circle ' + circle.class + ' size-' + size + ' when-' + circle.value + '-of-' + circle.total,
										onClick: _this10.onCircleClicked
									}, painter))
								);
							})
						)
					)
				);
			}
		}, {
			key: 'renderTimeHeader',
			value: function renderTimeHeader() {
				var date = this.getDisplayDate();
				return _nComponent.React.createElement(
					'div',
					{ className: 'n-calendar-time-header' },
					_nComponent.React.createElement(
						'div',
						{ className: 'n-calendar-time-header-text' },
						_nComponent.React.createElement(
							'span',
							null,
							date.format(this.getTimeHeaderFormat())
						)
					)
				);
			}
		}, {
			key: 'renderTime',
			value: function renderTime() {
				var hasFooter = this.hasFooter();
				return _nComponent.React.createElement(
					'div',
					{ className: (0, _nComponent.classnames)('n-calendar-time', { 'n-calendar-no-footer': !hasFooter }) },
					this.renderTimeHeader(),
					this.renderTimeBody(),
					hasFooter ? this.renderDateFooter() : null
				);
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var value = this.getValueFromModel();
				if (value == null) {
					if (!this.state.timer) {
						this.state.timer = setInterval(this.refreshTime.bind(this), 1000);
					}
				} else if (this.state.timer) {
					clearInterval(this.state.timer);
					delete this.state.timer;
				}
				return _nComponent.React.createElement(
					'div',
					{ className: this.getComponentStyle(),
						ref: 'me' },
					this.renderTime()
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-calendar';
			}
		}, {
			key: 'getTimeHeaderFormat',
			value: function getTimeHeaderFormat() {
				var format = this.getLayoutOptionValue('timeHeaderFormat', _nComponent.Envs.TIME_HEADER_FORMAT);
				if (this.isMinuteSupported()) {
					format += ':mm';
				}
				if (this.isSecondSupported()) {
					format += ':ss';
				}
				return format;
			}
		}, {
			key: 'getDisplayFormats',
			value: function getDisplayFormats() {
				var formats = this.wrapToArray(this.getLayoutOptionValue('displayFormats'));
				return formats.length == 0 ? this.wrapToArray(_nComponent.Envs.TIME_DISPLAY_FORMAT) : formats;
			}
		}, {
			key: 'getCurrentDisplayType',
			value: function getCurrentDisplayType() {
				if (this.state.currentDisplayType == null) {
					// default use the smallest unit
					if (this.isSecondSupported()) {
						this.state.currentDisplayType = SECOND;
					} else if (this.isMinuteSupported()) {
						this.state.currentDisplayType = MINUTE;
					} else {
						this.state.currentDisplayType = HOUR;
					}
				}
				return this.state.currentDisplayType;
			}
		}, {
			key: 'getDisplayDate',
			value: function getDisplayDate() {
				if (this.state.displayDate == null) {
					var value = this.getValueFromModel();
					this.state.displayDate = value == null ? (0, _moment2.default)() : value;
					if (!this.isMinuteSupported()) {
						this.state.displayDate.minute(0);
					}
					if (!this.isSecondSupported()) {
						this.state.displayDate.second(0);
					}
				}
				return this.state.displayDate;
			}
		}, {
			key: 'refreshTime',
			value: function refreshTime() {
				delete this.state.displayDate;
				this.forceUpdate();
			}
		}]);

		return NTimeClock;
	}(NDateComponent(_nComponent.NComponent));

	var NDateTimeCalendar = function (_NDateComponent2) {
		_inherits(NDateTimeCalendar, _NDateComponent2);

		function NDateTimeCalendar() {
			_classCallCheck(this, NDateTimeCalendar);

			return _possibleConstructorReturn(this, (NDateTimeCalendar.__proto__ || Object.getPrototypeOf(NDateTimeCalendar)).apply(this, arguments));
		}

		_createClass(NDateTimeCalendar, [{
			key: 'renderInNormal',
			value: function renderInNormal() {
				var options = {
					model: this.getModel(),
					'n-id': this.getDataId(),
					'n-comp-valueFormat': this.getValueFormat(),
					'n-comp-displayFormats': this.getDisplayFormats(),
					'n-comp-range': this.getDateRange(),
					'n-comp-dateEnabledChecker': this.getDateEnabledChecker(),
					'n-comp-dateHeaderFormat': this.getLayoutOptionValue('dateHeaderFormat'),
					'n-comp-timeHeaderFormat': this.getLayoutOptionValue('timeHeaderFormat'),
					'n-comp-showNow': false,
					'n-comp-showClear': false
				};
				return _nComponent.React.createElement(
					'div',
					{ className: this.getComponentStyle(),
						ref: 'me' },
					_nComponent.React.createElement(NDateCalendar, _extends({}, options, {
						container: this,
						ref: 'date' })),
					_nComponent.React.createElement(NTimeClock, _extends({}, options, {
						container: this,
						ref: 'time' })),
					this.renderDateFooter()
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-datetime-calendar';
			}
		}, {
			key: 'getDisplayFormats',
			value: function getDisplayFormats() {
				var formats = this.wrapToArray(this.getLayoutOptionValue('displayFormats'));
				return formats.length == 0 ? this.wrapToArray(_nComponent.Envs.DATE_TIME_DISPLAY_FORMAT) : formats;
			}
		}, {
			key: 'onNowClicked',
			value: function onNowClicked(evt) {
				this.refs.date.setDisplayToNow();
				this.refs.time.setDisplayToNow();
				_get(NDateTimeCalendar.prototype.__proto__ || Object.getPrototypeOf(NDateTimeCalendar.prototype), 'onNowClicked', this).call(this, evt);
			}
		}, {
			key: 'resetDisplayOptions',
			value: function resetDisplayOptions(options) {
				this.refs.date.setState(options);
				this.refs.time.setState(options);
			}
		}]);

		return NDateTimeCalendar;
	}(NDateComponent(_nComponent.NComponent));

	var NDate = function (_NIconRenderer3) {
		_inherits(NDate, _NIconRenderer3);

		function NDate() {
			var _ref4;

			var _temp4, _this12, _ret4;

			_classCallCheck(this, NDate);

			for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				args[_key4] = arguments[_key4];
			}

			return _ret4 = (_temp4 = (_this12 = _possibleConstructorReturn(this, (_ref4 = NDate.__proto__ || Object.getPrototypeOf(NDate)).call.apply(_ref4, [this].concat(args))), _this12), _this12.onComponentChanged = function (evt) {
				_this12.gatherValueFromInputAndSetToModel();
			}, _this12.onComponentFocused = function (evt) {
				_this12.onComponentFocusChanged();
			}, _this12.onComponentBlurred = function (evt) {
				_this12.onComponentFocusChanged();
				_this12.gatherValueFromInputAndSetToModel();
				_this12.getComponent().val(_this12.parseText(_this12.getValueFromModel(), _this12.getPrimaryDisplayFormat()));
			}, _this12.onClearIconClicked = function (evt) {
				if (_this12.isEnabled()) {
					evt.preventDefault();
					_this12.setValueToModel(null);
					_this12.showDropdown();
				}
				(0, _nComponent.$)(_nComponent.ReactDOM.findDOMNode(_this12.refs.txt)).focus();
			}, _this12.onCalendarIconClicked = function (evt) {
				if (_this12.isEnabled() && !evt.isDefaultPrevented()) {
					evt.preventDefault();
					_this12.showDropdown();
				}
			}, _temp4), _possibleConstructorReturn(_this12, _ret4);
		}

		_createClass(NDate, [{
			key: 'postDidUpdate',
			value: function postDidUpdate() {
				var compValue = this.formatValue(this.getComponentText(), this.getDisplayFormats());
				var modelValue = this.getValueFromModel();
				if (!this.isSame(compValue, modelValue)) {
					this.getComponent().val(this.parseText(modelValue, this.getPrimaryDisplayFormat()));
				}
			}
		}, {
			key: 'postDidMount',
			value: function postDidMount() {
				this.getComponent().val(this.parseText(this.getValueFromModel(), this.getPrimaryDisplayFormat()));
			}
		}, {
			key: 'renderDropdown',
			value: function renderDropdown() {
				var _this13 = this;

				var hasDate = this.isDateSupported();
				var hasTime = this.isTimeSupported();
				var options = {
					model: this.getModel(),
					'n-id': this.getDataId(),
					'n-comp-valueFormat': this.getValueFormat(),
					'n-comp-displayFormats': this.getDisplayFormats(),
					'n-comp-range': this.getDateRange(),
					'n-comp-dateEnabledChecker': this.getDateEnabledChecker(),
					'n-comp-dateHeaderFormat': this.getLayoutOptionValue('dateHeaderFormat'),
					'n-comp-timeHeaderFormat': this.getLayoutOptionValue('timeHeaderFormat'),
					'n-comp-showNow': true,
					'n-comp-showClear': true,
					'n-comp-showClose': true,
					'n-evt-closeClick': function nEvtCloseClick(evt) {
						evt.preventDefault();
						_this13.hideDropdown();
					},
					'n-styles-comp': 'n-dropdown',
					container: this,
					ref: 'dropdown'
				};
				if (hasDate && hasTime) {
					return _nComponent.React.createElement(NDateTimeCalendar, options);
				} else if (hasDate) {
					return _nComponent.React.createElement(NDateCalendar, options);
				} else {
					return _nComponent.React.createElement(NTimeClock, options);
				}
			}
		}, {
			key: 'renderCalendarIcon',
			value: function renderCalendarIcon() {
				return _nComponent.React.createElement(
					'div',
					{ className: 'n-input-addon' },
					this.renderIcon({
						icon: 'close',
						click: this.onClearIconClicked,
						ref: 'clear-btn'
					}),
					this.renderIcon({
						icon: 'calendar',
						click: this.onCalendarIconClicked,
						ref: 'dropdown-btn'
					})
				);
			}
		}, {
			key: 'renderText',
			value: function renderText() {
				return _nComponent.React.createElement('input', { type: 'text',
					className: 'n-control',
					disabled: !this.isEnabled(),
					placeholder: this.getPlaceholder(),

					onChange: this.onComponentChanged,
					onFocus: this.onComponentFocused,
					onBlur: this.onComponentBlurred,

					ref: 'txt' });
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var className = (0, _nComponent.classnames)(this.getComponentStyle());
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						ref: 'me' },
					this.renderText(),
					this.renderCalendarIcon(),
					this.renderDropdown(),
					this.renderNormalLine(),
					this.renderFocusLine()
				);
			}
		}, {
			key: 'isViewModeSameAsNormal',
			value: function isViewModeSameAsNormal() {
				return false;
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-date';
			}
		}, {
			key: 'getPlaceholder',
			value: function getPlaceholder() {
				return this.getLayoutOptionValue('placeholder');
			}
		}, {
			key: 'getComponent',
			value: function getComponent() {
				return (0, _nComponent.$)(_nComponent.ReactDOM.findDOMNode(this.refs.txt));
			}
		}, {
			key: 'gatherValueFromInputAndSetToModel',
			value: function gatherValueFromInputAndSetToModel() {
				var value = this.formatValue(this.getComponentText(), this.getDisplayFormats());
				if (value == null || !value.isValid()) {
					this.setValueToModel(null);
				} else if (!value.isSame(this.getValueFromModel())) {
					this.setValueToModel(value);
				}
			}

			// data event


			// dom event

		}, {
			key: 'showDropdown',
			value: function showDropdown() {
				if (!this.isDropdownShown()) {
					var value = this.getValueFromModel();
					if (value == null) {
						this.refs.dropdown.resetDisplayOptions({
							displayDate: this.getLayoutOptionValue('defaultDateTime'),
							currentDisplayType: this.getLayoutOptionValue('defaultDisplayType')
						});
					} else {
						this.refs.dropdown.resetDisplayOptions({
							displayDate: value,
							currentDisplayType: this.getLayoutOptionValue('defaultDisplayType')
						});
					}
				}
				_get(NDate.prototype.__proto__ || Object.getPrototypeOf(NDate.prototype), 'showDropdown', this).call(this);
			}
		}, {
			key: 'getComponentText',
			value: function getComponentText() {
				return this.getComponent().val();
			}
		}]);

		return NDate;
	}(NIconRenderer(NDateComponent((0, _nComponent.NDropdownComponent)(_nComponent.NComponent))));

	_nComponent.Envs.COMPONENT_TYPES.DATE_CALENDAR = { type: 'n-date-calendar', label: true, error: true };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.DATE_CALENDAR.type, function (options) {
		return _nComponent.React.createElement(NDateCalendar, options);
	});
	_nComponent.Envs.COMPONENT_TYPES.TIME_CLOCK = { type: 'n-time-clock', label: true, error: true };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.TIME_CLOCK.type, function (options) {
		return _nComponent.React.createElement(NTimeClock, options);
	});
	_nComponent.Envs.COMPONENT_TYPES.DATE_TIME_CALENDAR = { type: 'n-date-time-calendar', label: true, error: true };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.DATE_TIME_CALENDAR.type, function (options) {
		return _nComponent.React.createElement(NDateTimeCalendar, options);
	});
	_nComponent.Envs.COMPONENT_TYPES.DATE_PICKER = { type: 'n-date-picker', label: true, error: true };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.DATE_PICKER.type, function (options) {
		return _nComponent.React.createElement(NDate, options);
	});

	exports.NDateComponent = NDateComponent;
	exports.NDate = NDate;
	exports.NDateCalendar = NDateCalendar;
	exports.NTimeClock = NTimeClock;
	exports.NDateTimeCalendar = NDateTimeCalendar;
	exports.moment = _moment2.default;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.NStackIcon = exports.NIcon = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nComponent = __webpack_require__(5);

	Object.keys(_nComponent).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _nComponent[key];
			}
		});
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var prefixFA = function prefixFA(str) {
		if (str) {
			return str.split(' ').map(function (classname) {
				if (classname.startsWith('!')) {
					return classname.substr(1);
				} else {
					return classname.replace(/^(?!fa-)(.*)$/, 'fa-$1');
				}
			}).join(' ');
		} else {
			return str;
		}
	};

	// icon has no standard line-height

	// default is font-awesome

	var NIcon = function (_NComponent) {
		_inherits(NIcon, _NComponent);

		function NIcon() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, NIcon);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NIcon.__proto__ || Object.getPrototypeOf(NIcon)).call.apply(_ref, [this].concat(args))), _this), _this.onComponentClicked = function (evt) {
				if (_this.isClickable()) {
					_this.fireEventToMonitor(evt);
				}
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(NIcon, [{
			key: 'renderInNormal',
			value: function renderInNormal() {
				return _nComponent.React.createElement('i', { className: prefixFA(this.getRenderedClassName()),
					onClick: this.onComponentClicked,
					ref: 'me' });
			}
			// style

		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return '!n-icon';
			}
		}, {
			key: 'getRenderedClassName',
			value: function getRenderedClassName() {
				return (0, _nComponent.classnames)(this.getComponentStyle(), {
					'!fa fw': this.isFontAwesome()
				}, (0, _nComponent.classnames)(this.getFontClassName()), {
					'!n-clickable': this.isClickable()
				});
			}

			// option value

		}, {
			key: 'isFontAwesome',
			value: function isFontAwesome() {
				return this.getLayoutOptionValue('fontAwesome');
			}
			// all font class names should be defined here
			// if it is from font-awesome, the first 'fa-' can be ignored
			// such as 'ban', equals 'fa-ban'.
			// but others cannot be ignored
			// such as 'ban fa-spin', equals 'fa-ban fa-spin'
			// can be any format which can be parsed by classnames

		}, {
			key: 'getFontClassName',
			value: function getFontClassName() {
				return this.getLayoutOptionValue('icon');
			}
		}]);

		return NIcon;
	}(_nComponent.NComponent);

	// only for font-awesome


	NIcon.defaultProps = {
		defaultOptions: {
			fontAwesome: true
		}
	};

	var NStackIcon = function (_NComponent2) {
		_inherits(NStackIcon, _NComponent2);

		function NStackIcon() {
			var _ref2;

			var _temp2, _this2, _ret2;

			_classCallCheck(this, NStackIcon);

			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = NStackIcon.__proto__ || Object.getPrototypeOf(NStackIcon)).call.apply(_ref2, [this].concat(args))), _this2), _this2.onComponentClicked = function (evt) {
				if (_this2.isClickable()) {
					_this2.fireEventToMonitor(evt);
				}
			}, _temp2), _possibleConstructorReturn(_this2, _ret2);
		}

		_createClass(NStackIcon, [{
			key: 'renderInNormal',
			value: function renderInNormal() {
				return _nComponent.React.createElement(
					'span',
					{ className: prefixFA(this.getRenderedClassName()),
						onClick: this.onComponentClicked,
						ref: 'me' },
					_nComponent.React.createElement('i', { className: prefixFA((0, _nComponent.classnames)('!fa stack-1x', this.getForeClassName())) }),
					_nComponent.React.createElement('i', { className: prefixFA((0, _nComponent.classnames)('!fa stack-2x', this.getBackClassName())) })
				);
			}
			// style

		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return '!n-stack-icon';
			}
		}, {
			key: 'getRenderedClassName',
			value: function getRenderedClassName() {
				return (0, _nComponent.classnames)(this.getComponentStyle(), 'stack fw', this.getBackgroundClassName(), {
					'!n-clickable': this.isClickable()
				});
			}

			// option value

		}, {
			key: 'getBackgroundClassName',
			value: function getBackgroundClassName() {
				return this.getLayoutOptionValue('background');
			}
		}, {
			key: 'getForeClassName',
			value: function getForeClassName() {
				return this.getLayoutOptionValue('foreicon');
			}
		}, {
			key: 'getBackClassName',
			value: function getBackClassName() {
				return this.getLayoutOptionValue('backicon');
			}
		}]);

		return NStackIcon;
	}(_nComponent.NComponent);

	_nComponent.Envs.COMPONENT_TYPES.ICON = { type: 'n-icon', label: false, popover: false, error: false };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.ICON.type, function (options) {
		return _nComponent.React.createElement(NIcon, options);
	});

	_nComponent.Envs.COMPONENT_TYPES.STACK_ICON = { type: 'n-stack-icon', label: false, popover: false, error: false };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.STACK_ICON.type, function (options) {
		return _nComponent.React.createElement(NStackIcon, options);
	});

	exports.NIcon = NIcon;
	exports.NStackIcon = NStackIcon;

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = moment;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.NLabel = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _nComponent = __webpack_require__(5);

	Object.keys(_nComponent).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _nComponent[key];
			}
		});
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NLabel = function (_NAddonComponent) {
		_inherits(NLabel, _NAddonComponent);

		function NLabel() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, NLabel);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NLabel.__proto__ || Object.getPrototypeOf(NLabel)).call.apply(_ref, [this].concat(args))), _this), _this.onComponentClicked = function (evt) {
				if (_this.isClickable()) {
					_this.fireEventToMonitor(evt);
				}
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(NLabel, [{
			key: 'renderText',
			value: function renderText() {
				var className = (0, _nComponent.classnames)('n-label-text', {
					'n-clickable': this.isClickable()
				});
				return _nComponent.React.createElement(
					'span',
					{ className: className,
						onClick: this.onComponentClicked,
						ref: 'lbl' },
					this.getDisplayText()
				);
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var className = (0, _nComponent.classnames)(this.getComponentStyle(), {
					'has-addon': this.hasAddon()
				});
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						tabIndex: this.getTabIndex(),
						ref: 'me' },
					this.renderLead(),
					this.renderText(),
					this.renderTail(),
					this.renderNormalLine(),
					this.renderFocusLine()
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-label';
			}
		}, {
			key: 'isTextFromModel',
			value: function isTextFromModel() {
				return this.getLayoutOptionValue('textFromModel', true);
			}
		}, {
			key: 'getTextFormatter',
			value: function getTextFormatter() {
				return this.getLayoutOptionValue('formatter');
			}
		}, {
			key: 'getTextTransformer',
			value: function getTextTransformer() {
				return this.getLayoutOptionValue('transformer');
			}
		}, {
			key: 'getValueFromModel',
			value: function getValueFromModel() {
				var value = _get(NLabel.prototype.__proto__ || Object.getPrototypeOf(NLabel.prototype), 'getValueFromModel', this).call(this);
				var transformer = this.getTextTransformer();
				if (transformer && transformer.display) {
					return transformer.display.call(this, value);
				} else {
					return value;
				}
			}
		}, {
			key: 'getDisplayText',
			value: function getDisplayText() {
				return this.isTextFromModel() ? this.formatValue(this.getValueFromModel()) : this.getLabel();
			}
		}, {
			key: 'getTabIndex',
			value: function getTabIndex() {
				return this.isClickable() ? 0 : null;
			}
		}, {
			key: 'formatValue',
			value: function formatValue(value) {
				var formatter = this.getTextFormatter();
				if (formatter && formatter.display) {
					return formatter.display.call(this, value);
				} else {
					return value;
				}
			}
		}]);

		return NLabel;
	}(_nComponent.NAddonComponent);

	_nComponent.Envs.COMPONENT_TYPES.LABEL = { type: 'n-label', label: false, popover: false, error: false };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.LABEL.type, function (options) {
		return _nComponent.React.createElement(NLabel, options);
	});

	exports.NLabel = NLabel;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.NList = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _nComponent = __webpack_require__(5);

	Object.keys(_nComponent).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _nComponent[key];
			}
		});
	});

	var _nIcon = __webpack_require__(18);

	var _nCheck = __webpack_require__(16);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NList = function (_NCodeTableComponent) {
		_inherits(NList, _NCodeTableComponent);

		function NList() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, NList);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NList.__proto__ || Object.getPrototypeOf(NList)).call.apply(_ref, [this].concat(args))), _this), _this.onItemClicked = function (evt) {
				_this.onItemSpaceKeyDown(evt);
			}, _this.onItemKeyDown = function (evt) {
				var keycode = evt.keyCode;
				switch (keycode) {
					case 32:
						_this.onItemSpaceKeyDown(evt);
						break;
					case 38:
						_this.onItemUpArrowKeyDown(evt);
						break;
					case 40:
						_this.onItemDownArrowKeyDown(evt);
						break;
				}
			}, _this.onMouseMoved = function (evt) {
				var bg = (0, _nComponent.$)(_nComponent.ReactDOM.findDOMNode(_this.refs.background));
				var container = _this.$me();
				var containerOffset = container.offset();
				var top = evt.clientY + (0, _nComponent.$)(window).scrollTop() - containerOffset.top;
				var found = container.find('.n-list-item-text').toArray().some(function (dom) {
					var text = (0, _nComponent.$)(dom);
					var offset = text.offset();
					var textTop = offset.top - containerOffset.top;
					if (textTop <= top && textTop + text.outerHeight() >= top) {
						bg.css({
							display: 'block',
							left: container.scrollLeft(),
							top: textTop + container.scrollTop() - 1,
							height: text.outerHeight()
						});
						return true;
					}
				});
				if (!found) {
					bg.css({
						display: 'none'
					});
				}
			}, _this.onMouseLeft = function (evt) {
				var bg = (0, _nComponent.$)(_nComponent.ReactDOM.findDOMNode(_this.refs.background));
				bg.css({
					display: 'none'
				});
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(NList, [{
			key: 'buildLayout',
			value: function buildLayout(props) {
				_get(NList.prototype.__proto__ || Object.getPrototypeOf(NList.prototype), 'buildLayout', this).call(this, props);
				this.state.nodeCheckable = this.isItemCheckable();
			}
		}, {
			key: 'renderItemIcon',
			value: function renderItemIcon(item) {
				if (!this.isItemIconable()) {
					return null;
				}
				var icon = item.icon;
				if (!icon) {
					icon = this.getItemIcon();
					if (icon) {
						icon = icon.call(this, item);
					}
				}
				var layout = {
					comp: {
						type: _nComponent.Envs.COMPONENT_TYPES.ICON,
						icon: icon
					},
					styles: {
						comp: '!n-list-item-icon'
					}
				};
				return this.renderInternalComponent(layout);
			}
		}, {
			key: 'renderItemCheck',
			value: function renderItemCheck(item) {
				var _this2 = this;

				var model = new _nComponent.Model({ value: this.isItemChecked(item) }).addPostChangeListener('value', function (evt) {
					_this2.onItemCheckChanged(item, evt.new);
				});
				var layout = new _nComponent.Layout('value', {
					comp: {
						type: _nComponent.Envs.COMPONENT_TYPES.CHECK_NL
					},
					evt: {
						'jq.keydown': this.onItemKeyDown
					}
				});
				return _nComponent.React.createElement(_nCheck.NCheck, { model: model,
					layout: layout });
			}
		}, {
			key: 'renderItem',
			value: function renderItem(item, itemIndex) {
				var checkable = this.isItemCanCheck(item);
				return _nComponent.React.createElement(
					'div',
					{ className: 'n-list-item',
						tabIndex: '0',
						'data-item-id': item.id,
						onClick: this.onItemClicked,
						onKeyDown: this.onItemKeyDown,
						key: itemIndex },
					this.renderItemIcon(item),
					checkable ? this.renderItemCheck(item) : null,
					_nComponent.React.createElement(
						'span',
						{ className: 'n-list-item-text' },
						item.text
					)
				);
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var _this3 = this;

				var styles = {
					minHeight: this.getMinHeight(),
					maxHeight: this.getMaxHeight(),
					minWidth: this.getMinWidth(),
					maxWidth: this.getMaxWidth()
				};
				var className = (0, _nComponent.classnames)(this.getComponentStyle(), {
					'n-list-nowrap': this.isNoWrap()
				});
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						style: styles,
						onMouseMove: this.onMouseMoved,
						onMouseLeave: this.onMouseLeft,
						ref: 'me' },
					_nComponent.React.createElement('div', { className: 'n-list-background',
						ref: 'background' }),
					this.getCodeTable().map(function (item, itemIndex) {
						return _this3.renderItem(item, itemIndex);
					})
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-list';
			}
		}, {
			key: 'getMinHeight',
			value: function getMinHeight() {
				return this.getLayoutOptionValue('minHeight');
			}
		}, {
			key: 'getMaxHeight',
			value: function getMaxHeight() {
				return this.getLayoutOptionValue('maxHeight', _nComponent.Envs.LIST_MAX_HEIGHT);
			}
		}, {
			key: 'getMinWidth',
			value: function getMinWidth() {
				return this.getLayoutOptionValue('minWidth');
			}
		}, {
			key: 'getMaxWidth',
			value: function getMaxWidth() {
				return this.getLayoutOptionValue('maxWidth');
			}
		}, {
			key: 'isNoWrap',
			value: function isNoWrap() {
				return this.getLayoutOptionValue('noWrap', true);
			}
		}, {
			key: 'isItemIconable',
			value: function isItemIconable() {
				return this.getLayoutOptionValue('iconable', false);
			}
		}, {
			key: 'getItemIcon',
			value: function getItemIcon() {
				return this.getLayoutOptionValue('itemIcon', null, true);
			}
		}, {
			key: 'isItemCheckable',
			value: function isItemCheckable() {
				return this.getLayoutOptionValue('checkable', false);
			}
		}, {
			key: 'isMultipleCheck',
			value: function isMultipleCheck() {
				return this.getLayoutOptionValue('multiple', false);
			}
		}, {
			key: 'isItemCanCheck',
			value: function isItemCanCheck(item) {
				if (!this.state.nodeCheckable) {
					return false;
				}
				var canCheck = this.getLayoutOptionValue('canCheck', null, true);
				return canCheck ? canCheck.call(this, item) : true;
			}
		}, {
			key: 'getValueFromModel',
			value: function getValueFromModel() {
				return this.isMultipleCheck() ? this.wrapToArray(_get(NList.prototype.__proto__ || Object.getPrototypeOf(NList.prototype), 'getValueFromModel', this).call(this)) : _get(NList.prototype.__proto__ || Object.getPrototypeOf(NList.prototype), 'getValueFromModel', this).call(this);
			}
		}, {
			key: 'isItemChecked',
			value: function isItemChecked(item) {
				if (this.isMultipleCheck()) {
					return this.getValueFromModel().findIndex(function (value) {
						return value == item.id;
					}) !== -1;
				} else {
					return this.getValueFromModel() == item.id;
				}
			}
		}, {
			key: 'focusItem',
			value: function focusItem(itemDOM) {
				itemDOM.focus();
			}
		}, {
			key: 'onItemCheckChanged',
			value: function onItemCheckChanged(item, checked) {
				var _this4 = this;

				this.handleEventResult(this.shouldItemCheckChanged(item, checked), {
					handler: function handler() {
						// anyway, wrap to array and clone it
						var values = _this4.getValueFromModel();
						values = values == null ? [] : _this4.wrapToArray(values);
						values = values.slice(0);
						// find index
						var index = values.findIndex(function (value) {
							return value == item.id;
						});
						if (checked) {
							if (index === -1) {
								if (_this4.isMultipleCheck()) {
									values.push(item.id);
									_this4.setValueToModel(values);
								} else {
									_this4.setValueToModel(item.id);
								}
								_this4.itemCheckChanged(item, true);
							}
						} else {
							if (index !== -1) {
								if (_this4.isMultipleCheck()) {
									values.splice(index, 1);
									_this4.setValueToModel(values);
								} else {
									_this4.setValueToModel(null);
								}
								_this4.itemCheckChanged(item, false);
							}
						}
					},
					false: function _false() {}
				});
			}
		}, {
			key: 'shouldItemCheckChanged',
			value: function shouldItemCheckChanged(item, checked) {
				return this.fireEventToMonitor(_nComponent.$.Event('shouldItemCheckChange'), {
					target: this.me(),
					ndata: {
						item: item,
						checked: checked
					}
				});
			}
		}, {
			key: 'itemCheckChanged',
			value: function itemCheckChanged(item, checked) {
				this.fireEventToMonitor(_nComponent.$.Event('itemCheckChange', {
					target: this.me(),
					ndata: {
						item: item,
						checked: checked
					}
				}));
			}
		}, {
			key: 'onItemSpaceKeyDown',
			value: function onItemSpaceKeyDown(evt) {
				if (evt.isDefaultPrevented()) {
					return;
				}
				var target = (0, _nComponent.$)(evt.target).closest('.n-list-item');
				var id = target.attr('data-item-id');
				var item = this.getCodeTable().getItem(id);
				if (this.isItemCanCheck()) {
					evt.preventDefault();
					this.onItemCheckChanged(item, !this.isItemChecked(item));
				}
			}
		}, {
			key: 'onItemUpArrowKeyDown',
			value: function onItemUpArrowKeyDown(evt) {
				var target = (0, _nComponent.$)(evt.target);
				var prev = target.prev('.n-list-item');
				if (prev.length !== 0) {
					evt.preventDefault();
					this.focusItem(prev);
				}
			}
		}, {
			key: 'onItemDownArrowKeyDown',
			value: function onItemDownArrowKeyDown(evt) {
				var target = (0, _nComponent.$)(evt.target);
				var next = target.next('.n-list-item');
				if (next.length !== 0) {
					evt.preventDefault();
					this.focusItem(next);
				}
			}
		}]);

		return NList;
	}((0, _nComponent.NCodeTableComponent)(_nComponent.NComponent));

	_nComponent.Envs.COMPONENT_TYPES.LIST = { type: 'n-list', label: true, error: false };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.LIST.type, function (options) {
		return _nComponent.React.createElement(NList, options);
	});

	exports.NList = NList;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.NPanelBody = exports.NPanelHeader = exports.NPanel = exports.NArrayPanel = undefined;

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nComponent = __webpack_require__(5);

	Object.keys(_nComponent).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function () {
				return _nComponent[key];
			}
		});
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NPanelHeader = function (_NCollapsibleContaine) {
		_inherits(NPanelHeader, _NCollapsibleContaine);

		function NPanelHeader() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, NPanelHeader);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NPanelHeader.__proto__ || Object.getPrototypeOf(NPanelHeader)).call.apply(_ref, [this].concat(args))), _this), _this.onComponentClicked = function (evt) {
				if (!_this.isCollapsible() || evt.isDefaultPrevented()) {
					return;
				}
				evt.preventDefault();
				if (_this.isExpanded()) {
					_this.collapse();
				} else {
					_this.expand();
				}
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(NPanelHeader, [{
			key: 'renderInNormal',
			value: function renderInNormal() {
				var collapsibleStyle = this.getCollapsibleStyle();
				var className = (0, _nComponent.classnames)(this.getComponentStyle(), this.getPanelStyle(), {
					'n-panel-header-collapsible': this.isCollapsible(),
					'n-panel-header-expanded': this.isExpanded(),
					'n-panel-header-collapsed': !this.isExpanded()
				}, 'n-panel-collapsible-' + collapsibleStyle);
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						onClick: this.onComponentClicked,
						ref: 'me' },
					this.renderLeadingDOMChildren(),
					this.renderLeadingChildren(),
					_nComponent.React.createElement(
						'span',
						{ className: 'n-panel-header-text' },
						this.getLabel()
					),
					this.renderTailingChildren(),
					this.renderTailingDOMChildren()
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-panel-header';
			}
		}, {
			key: 'getPanelStyle',
			value: function getPanelStyle() {
				return 'n-panel-header-' + this.getLayoutOptionValue('style', 'default');
			}
		}, {
			key: 'getCollapsibleStyle',
			value: function getCollapsibleStyle() {
				// lead/follow/tail
				return this.getLayoutOptionValue('collapsibleStyle', 'tail');
			}
		}]);

		return NPanelHeader;
	}(_nComponent.NCollapsibleContainer);

	var NPanelBody = function (_NCollapsibleContaine2) {
		_inherits(NPanelBody, _NCollapsibleContaine2);

		function NPanelBody() {
			_classCallCheck(this, NPanelBody);

			return _possibleConstructorReturn(this, (NPanelBody.__proto__ || Object.getPrototypeOf(NPanelBody)).apply(this, arguments));
		}

		_createClass(NPanelBody, [{
			key: 'renderInNormal',
			value: function renderInNormal() {
				var className = (0, _nComponent.classnames)(this.getComponentStyle(), this.getPanelStyle(), {
					'n-panel-body-expanded': this.isExpanded(),
					'n-panel-body-collapsed': !this.isExpanded()
				});
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						ref: 'me' },
					this.renderLeadingDOMChildren(),
					this.renderLeadingChildren(),
					this.renderChildren(),
					this.renderTailingChildren(),
					this.renderTailingDOMChildren()
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-panel-body';
			}
		}, {
			key: 'getPanelStyle',
			value: function getPanelStyle() {
				return 'n-panel-body-' + this.getLayoutOptionValue('style', 'default');
			}
		}, {
			key: 'expand',
			value: function expand() {
				var _this3 = this;

				this.$me().slideDown(500, function () {
					_get(NPanelBody.prototype.__proto__ || Object.getPrototypeOf(NPanelBody.prototype), 'expand', _this3).call(_this3);
				});
			}
		}, {
			key: 'collapse',
			value: function collapse() {
				var _this4 = this;

				this.$me().slideUp(500, function () {
					_get(NPanelBody.prototype.__proto__ || Object.getPrototypeOf(NPanelBody.prototype), 'collapse', _this4).call(_this4);
				});
			}
		}]);

		return NPanelBody;
	}(_nComponent.NCollapsibleContainer);

	var NPanel = function (_NCollapsibleContaine3) {
		_inherits(NPanel, _NCollapsibleContaine3);

		function NPanel() {
			_classCallCheck(this, NPanel);

			return _possibleConstructorReturn(this, (NPanel.__proto__ || Object.getPrototypeOf(NPanel)).apply(this, arguments));
		}

		_createClass(NPanel, [{
			key: 'renderHeader',
			value: function renderHeader() {
				var headerLayout = this.getPanelHeaderLayout();
				if (headerLayout === false) {
					return null;
				}

				var layout = _nComponent.Envs.deepMergeTo({}, {
					label: this.getLabel(),
					dataId: this.getDataId(),
					comp: {
						type: _nComponent.Envs.COMPONENT_TYPES.PANEL_HEADER,
						style: this.getLayoutOptionValue('style'),
						collapsible: this.isCollapsible(),
						expanded: this.isExpanded(),
						collapsibleStyle: this.getCollapsibleStyle(),
						leadChildren: this.getLeadingChildren(),
						tailChildren: this.getTailingChildren(),
						columnsOfGrid: this.getColumnsOfGrid()
					},
					evt: {
						expand: this.onExpandChanged.bind(this),
						collapse: this.onExpandChanged.bind(this)
					}
				}, headerLayout);

				var header = this.getDOMChildOf('NPanelHeader');
				return this.renderInternalComponent(layout, header ? header.props : null, {
					ref: 'header'
				});
			}
		}, {
			key: 'renderBody',
			value: function renderBody() {
				var layout = _nComponent.Envs.deepMergeTo({}, {
					dataId: this.getDataId(),
					comp: {
						type: _nComponent.Envs.COMPONENT_TYPES.PANEL_BODY,
						style: this.getLayoutOptionValue('style'),
						expanded: this.isExpanded(),
						children: this.getChildren(),
						columnsOfGrid: this.getColumnsOfGrid()
					}
				}, this.getPanelBodyLayout());

				var body = this.getDOMChildOf('NPanelBody');

				return this.renderInternalComponent(layout, body ? body.props : null, {
					ref: 'body'
				});
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var className = (0, _nComponent.classnames)(this.getComponentStyle(), this.getPanelStyle(), {
					'n-panel-expanded': this.isExpanded(),
					'n-panel-collapsed': !this.isExpanded()
				});
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						ref: 'me' },
					this.renderHeader(),
					this.renderBody()
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-panel';
			}
		}, {
			key: 'getPanelStyle',
			value: function getPanelStyle() {
				return 'n-panel-' + this.getLayoutOptionValue('style', 'default');
			}
		}, {
			key: 'getPanelHeaderLayout',
			value: function getPanelHeaderLayout() {
				return this.getLayoutOptionValue('header');
			}
		}, {
			key: 'getPanelBodyLayout',
			value: function getPanelBodyLayout() {
				return this.getLayoutOptionValue('body');
			}
		}, {
			key: 'isCollapsible',
			value: function isCollapsible() {
				return this.getLayoutOptionValue('collapsible', false);
			}
		}, {
			key: 'isInitExpanded',
			value: function isInitExpanded() {
				return this.getLayoutOptionValue('expanded', true);
			}
		}, {
			key: 'getCollapsibleStyle',
			value: function getCollapsibleStyle() {
				// lead/follow/tail
				return this.getLayoutOptionValue('collapsibleStyle', 'tail');
			}
		}, {
			key: 'isExpanded',
			value: function isExpanded() {
				if (this.state.expanded == null) {
					this.state.expanded = this.isInitExpanded();
				}
				return this.state.expanded;
			}
		}, {
			key: 'expand',
			value: function expand() {
				if (this.refs.header) {
					this.refs.header.expand();
				} else {
					this.refs.body.expand();
					_get(NPanel.prototype.__proto__ || Object.getPrototypeOf(NPanel.prototype), 'expand', this).call(this);
				}
			}
		}, {
			key: 'collapse',
			value: function collapse() {
				if (this.refs.header) {
					this.refs.header.collapse();
				} else {
					this.refs.body.collapse();
					_get(NPanel.prototype.__proto__ || Object.getPrototypeOf(NPanel.prototype), 'collapse', this).call(this);
				}
			}
		}, {
			key: 'onExpandChanged',
			value: function onExpandChanged(evt) {
				switch (evt.type) {
					case 'expand':
						this.refs.body.expand();
						_get(NPanel.prototype.__proto__ || Object.getPrototypeOf(NPanel.prototype), 'expand', this).call(this);
						break;
					case 'collapse':
						this.refs.body.collapse();
						_get(NPanel.prototype.__proto__ || Object.getPrototypeOf(NPanel.prototype), 'collapse', this).call(this);
						break;
				}
			}
		}]);

		return NPanel;
	}(_nComponent.NCollapsibleContainer);

	var NArrayPanel = function (_NHierarchyComponent) {
		_inherits(NArrayPanel, _NHierarchyComponent);

		function NArrayPanel() {
			_classCallCheck(this, NArrayPanel);

			return _possibleConstructorReturn(this, (NArrayPanel.__proto__ || Object.getPrototypeOf(NArrayPanel)).apply(this, arguments));
		}

		_createClass(NArrayPanel, [{
			key: 'renderItem',
			value: function renderItem(item, itemIndex) {
				var model = this.createItemModel(item, itemIndex);
				var layoutOptions = this.createItemLayoutOptions(model, itemIndex);
				var layout = new _nComponent.Layout(this.getId(), {
					label: this.getLayout().getLabel(),
					dataId: this.getDataId(),
					comp: layoutOptions
				});
				return _nComponent.React.createElement(NPanel, { model: model,
					layout: layout,
					orientation: this.getOrientation(),
					viewMode: this.isViewMode(),
					'n-comp-itemIndex': itemIndex,
					'n-evt-collapse': this.onItemCollapsed.bind(this, model, itemIndex),
					'n-evt-expand': this.onItemExpanded.bind(this, model, itemIndex),
					container: this,
					ref: 'item-' + itemIndex,
					key: itemIndex });
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var _this7 = this;

				return _nComponent.React.createElement(
					'div',
					{ className: this.getComponentStyle(),
						ref: 'me' },
					this.getValueFromModel().map(function (item, itemIndex) {
						return _this7.renderItem(item, itemIndex);
					})
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-array-panel';
			}
		}, {
			key: 'getValueFromModel',
			value: function getValueFromModel() {
				var value = _get(NArrayPanel.prototype.__proto__ || Object.getPrototypeOf(NArrayPanel.prototype), 'getValueFromModel', this).call(this);
				return value ? value : [];
			}
		}, {
			key: 'onItemCollapsed',
			value: function onItemCollapsed(itemModel, itemIndex) {
				this.fireEventToMonitor(_nComponent.$.Event('itemCollapse', {
					target: this.me(),
					ndata: {
						itemModel: itemModel,
						itemIndex: itemIndex
					}
				}));
			}
		}, {
			key: 'onItemExpanded',
			value: function onItemExpanded(itemModel, itemIndex) {
				this.fireEventToMonitor(_nComponent.$.Event('itemExpand', {
					target: this.me(),
					ndata: {
						itemModel: itemModel,
						itemIndex: itemIndex
					}
				}));
			}
		}]);

		return NArrayPanel;
	}(_nComponent.NHierarchyComponent);

	_nComponent.Envs.COMPONENT_TYPES.PANEL_HEADER = { type: 'n-panel-header', label: false, popover: false, error: false };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.PANEL_HEADER.type, function (options) {
		return _nComponent.React.createElement(NPanelHeader, options);
	});
	_nComponent.Envs.COMPONENT_TYPES.PANEL_BODY = { type: 'n-panel-body', label: false, popover: false, error: false };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.PANEL_BODY.type, function (options) {
		return _nComponent.React.createElement(NPanelBody, options);
	});
	_nComponent.Envs.COMPONENT_TYPES.PANEL = { type: 'n-panel', label: false, popover: false, error: false };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.PANEL.type, function (options) {
		return _nComponent.React.createElement(NPanel, options);
	});
	_nComponent.Envs.COMPONENT_TYPES.ARRAY_PANEL = { type: 'n-array-panel', label: false, popover: false, error: false };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.ARRAY_PANEL.type, function (options) {
		return _nComponent.React.createElement(NArrayPanel, options);
	});

	exports.NArrayPanel = NArrayPanel;
	exports.NPanel = NPanel;
	exports.NPanelHeader = NPanelHeader;
	exports.NPanelBody = NPanelBody;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.NRadioButton = exports.NRadio = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nComponent = __webpack_require__(5);

	Object.keys(_nComponent).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _nComponent[key];
			}
		});
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NRadio = function (_NCodeTableComponent) {
		_inherits(NRadio, _NCodeTableComponent);

		function NRadio() {
			_classCallCheck(this, NRadio);

			return _possibleConstructorReturn(this, (NRadio.__proto__ || Object.getPrototypeOf(NRadio)).apply(this, arguments));
		}

		_createClass(NRadio, [{
			key: 'renderText',
			value: function renderText(item) {
				return _nComponent.React.createElement(
					'span',
					{ className: 'n-radio-text n-control' },
					item.text
				);
			}
		}, {
			key: 'renderTextOnLeft',
			value: function renderTextOnLeft(options) {
				if (options.left) {
					return this.renderText(options.item);
				}
			}
		}, {
			key: 'renderTextOnRight',
			value: function renderTextOnRight(options) {
				if (!options.left) {
					return this.renderText(options.item);
				}
			}
		}, {
			key: 'renderRadioButton',
			value: function renderRadioButton() {
				return _nComponent.React.createElement(
					'span',
					{ className: 'n-radio-box n-control' },
					_nComponent.React.createElement('span', { className: 'n-radio-box-rect' })
				);
			}
		}, {
			key: 'renderCodeItem',
			value: function renderCodeItem(item, itemIndex) {
				var textOnLeft = this.isTextOnLeft();
				var className = (0, _nComponent.classnames)('n-radio', {
					'n-checked': this.isChecked(item),
					'n-radio-text-left': textOnLeft,
					'n-radio-text-right': !textOnLeft
				});
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						onClick: this.onComponentClicked.bind(this, item),
						onKeyPress: this.onComponentKeyPressed.bind(this, item),
						tabIndex: this.getTabIndex(),
						key: itemIndex },
					this.renderTextOnLeft({ left: textOnLeft, item: item }),
					this.renderRadioButton(),
					this.renderTextOnRight({ left: textOnLeft, item: item })
				);
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var _this2 = this;

				var className = (0, _nComponent.classnames)(this.getComponentStyle(), {
					'n-radio-vertical': this.isOnVertical()
				});
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						ref: 'me' },
					this.getCodeTable().map(function (item, itemIndex) {
						return _this2.renderCodeItem(item, itemIndex);
					})
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-radio-group';
			}
		}, {
			key: 'isTextOnLeft',
			value: function isTextOnLeft() {
				return this.getLayoutOptionValue('textOnLeft', false);
			}
		}, {
			key: 'isOnVertical',
			value: function isOnVertical() {
				return this.getLayoutOptionValue('vertical', false);
			}
		}, {
			key: 'onComponentClicked',
			value: function onComponentClicked(item, evt) {
				evt.preventDefault();
				this.setValueToModel(item.id);
				var target = (0, _nComponent.$)(_nComponent.ReactDOM.findDOMNode(evt.target));
				if (target.hasClass('n-radio')) {
					target.focus();
				} else {
					target.closest('.n-radio').focus();
				}
			}
		}, {
			key: 'onComponentKeyPressed',
			value: function onComponentKeyPressed(item, evt) {
				if (evt.charCode === 32 && item.id != this.getValueFromModel()) {
					// space bar
					evt.preventDefault();
					this.setValueToModel(item.id);
				}
			}
		}, {
			key: 'isChecked',
			value: function isChecked(item) {
				return this.getValueFromModel() == item.id;
			}
		}]);

		return NRadio;
	}((0, _nComponent.NCodeTableComponent)(_nComponent.NComponent));

	var NRadioButton = function (_NCodeTableComponent2) {
		_inherits(NRadioButton, _NCodeTableComponent2);

		function NRadioButton() {
			_classCallCheck(this, NRadioButton);

			return _possibleConstructorReturn(this, (NRadioButton.__proto__ || Object.getPrototypeOf(NRadioButton)).apply(this, arguments));
		}

		_createClass(NRadioButton, [{
			key: 'renderCodeItem',
			value: function renderCodeItem(item, itemIndex) {
				var checked = this.isChecked(item);
				var layout = {
					label: item.text,
					comp: {
						type: _nComponent.Envs.COMPONENT_TYPES.BUTTON,
						style: this.getButtonStyle()
					},
					evt: {
						click: this.onItemClicked.bind(this, item, itemIndex)
					}
				};
				if (checked) {
					var checkedStyle = this.getCheckedStyle();
					if (checkedStyle) {
						layout.comp.style = checkedStyle;
					}
					layout.styles = { comp: 'n-checked' };
				}
				if (item.icon) {
					layout.comp.leftIcon = {
						comp: {
							type: _nComponent.Envs.COMPONENT_TYPES.ICON,
							icon: item.icon
						}
					};
				}
				return this.renderInternalComponent(layout, {
					key: itemIndex
				});
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var _this4 = this;

				return _nComponent.React.createElement(
					'div',
					{ className: this.getComponentStyle(),
						ref: 'me' },
					this.getCodeTable().map(function (item, itemIndex) {
						return _this4.renderCodeItem(item, itemIndex);
					})
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-radio-button-group';
			}
		}, {
			key: 'getButtonStyle',
			value: function getButtonStyle() {
				return this.getLayoutOptionValue('style');
			}
		}, {
			key: 'getCheckedStyle',
			value: function getCheckedStyle() {
				return this.getLayoutOptionValue('checkedStyle');
			}
		}, {
			key: 'isChecked',
			value: function isChecked(item) {
				return this.getValueFromModel() == item.id;
			}
		}, {
			key: 'onItemClicked',
			value: function onItemClicked(item, itemIndex, evt) {
				if (item.id != this.getValueFromModel()) {
					evt.preventDefault();
					this.setValueToModel(item.id);
				}
			}
		}]);

		return NRadioButton;
	}((0, _nComponent.NCodeTableComponent)(_nComponent.NComponent));

	_nComponent.Envs.COMPONENT_TYPES.RADIO = { type: 'n-radio', label: true, error: true };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.RADIO.type, function (options) {
		return _nComponent.React.createElement(NRadio, options);
	});
	_nComponent.Envs.COMPONENT_TYPES.RADIO_BUTTON = { type: 'n-radio-button', label: true, error: true };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.RADIO_BUTTON.type, function (options) {
		return _nComponent.React.createElement(NRadioButton, options);
	});

	exports.NRadio = NRadio;
	exports.NRadioButton = NRadioButton;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.NSelect = undefined;

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nComponent = __webpack_require__(5);

	Object.keys(_nComponent).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _nComponent[key];
			}
		});
	});

	var _nIcon = __webpack_require__(18);

	var _nList = __webpack_require__(21);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NIconRenderer = function NIconRenderer(ParentClass) {
		return function (_ParentClass) {
			_inherits(_class, _ParentClass);

			function _class() {
				_classCallCheck(this, _class);

				return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
			}

			_createClass(_class, [{
				key: 'renderIcon',
				value: function renderIcon(options) {
					return this.renderInternalComponent({
						comp: {
							type: _nComponent.Envs.COMPONENT_TYPES.ICON,
							icon: options.icon
						},
						styles: {
							comp: options.style
						},
						evt: {
							click: options.click
						}
					}, {
						ref: options.ref
					});
				}
			}]);

			return _class;
		}(ParentClass);
	};

	var NSelect = function (_NIconRenderer) {
		_inherits(NSelect, _NIconRenderer);

		function NSelect() {
			var _ref;

			var _temp, _this2, _ret;

			_classCallCheck(this, NSelect);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = NSelect.__proto__ || Object.getPrototypeOf(NSelect)).call.apply(_ref, [this].concat(args))), _this2), _this2.onComponentFocused = function (evt) {
				_this2.onComponentFocusChanged();
			}, _this2.onComponentBlurred = function (evt) {
				_this2.onComponentFocusChanged();
			}, _this2.onComponentClicked = function (evt) {
				if (evt.isDefaultPrevented()) {
					return;
				}
				evt.preventDefault();
				_this2.showDropdown();
			}, _this2.onComponentKeyUp = function (evt) {
				if (evt.keyCode === 40) {
					_this2.onComponentUpArrowKeyUp(evt);
				}
			}, _this2.onClearIconClicked = function (evt) {
				evt.preventDefault();
				if (_this2.isEnabled()) {
					evt.preventDefault();
					_this2.setValueToModel(null);
					_this2.showDropdown();
				}
				(0, _nComponent.$)(_nComponent.ReactDOM.findDOMNode(_this2.refs.txt)).focus();
			}, _this2.onDropdownIconClicked = function (evt) {
				if (_this2.isEnabled() && !evt.isDefaultPrevented()) {
					evt.preventDefault();
					_this2.showDropdown();
				}
			}, _this2.onItemCheckChanged = function (evt) {
				_this2.forceUpdate(function () {
					_this2.fireEventToMonitor(_nComponent.$.Event('itemCheckChange', {
						target: _this2.me(),
						ndata: {
							items: _this2.wrapToArray(evt.ndata.item || evt.ndata.items),
							checked: evt.ndata.checked
						}
					}));
				});
			}, _temp), _possibleConstructorReturn(_this2, _ret);
		}

		_createClass(NSelect, [{
			key: 'renderDropdown',
			value: function renderDropdown() {
				var layout = _nComponent.Envs.deepMergeTo({}, {
					comp: {
						type: _nComponent.Envs.COMPONENT_TYPES.LIST,
						noWrap: false,
						checkable: true,
						codes: this.getCodeTable(),
						multiple: this.isMultiple()
					},
					evt: {
						itemCheckChange: this.onItemCheckChanged
					}
				}, this.getDropdownLayout());
				if (!layout.styles) {
					layout.styles = {};
				}
				if (!layout.styles.comp) {
					layout.styles.comp = 'n-dropdown';
				} else {
					layout.styles.comp += ' n-dropdown';
				}

				return this.renderInternalComponent(layout, {
					ref: 'dropdown'
				});
			}
		}, {
			key: 'renderCalendarIcon',
			value: function renderCalendarIcon() {
				return _nComponent.React.createElement(
					'div',
					{ className: 'n-input-addon' },
					this.renderIcon({
						icon: 'close',
						click: this.onClearIconClicked,
						ref: 'clear-btn'
					}),
					this.renderIcon({
						icon: 'caret-down',
						click: this.onDropdownIconClicked,
						ref: 'dropdown-btn'
					})
				);
			}
		}, {
			key: 'renderSelectedItem',
			value: function renderSelectedItem(value, itemIndex) {
				var item = this.getCodeTable().getItem(value);
				return _nComponent.React.createElement(
					'li',
					{ className: 'n-select-item',
						key: itemIndex },
					_nComponent.React.createElement(
						'span',
						{ className: 'n-select-item-text' },
						item.text
					),
					this.renderIcon({
						icon: 'close',
						click: this.onItemClearIconClicked.bind(this, value),
						style: '!n-select-item-remove-icon'
					})
				);
			}
		}, {
			key: 'renderSelectedItems',
			value: function renderSelectedItems() {
				var _this3 = this;

				var value = this.getValueFromModel();
				if (value == null || value.length == 0) {
					var placeholder = this.getPlaceholder();
					return _nComponent.React.createElement(
						'div',
						{ className: 'n-select-items' },
						_nComponent.React.createElement(
							'span',
							{ className: 'n-select-placeholder-text' },
							placeholder ? placeholder : ' '
						)
					);
				}
				if (this.isMultiple()) {
					return _nComponent.React.createElement(
						'ul',
						{ className: 'n-select-items' },
						value.map(function (value, index) {
							return _this3.renderSelectedItem(value, index);
						})
					);
				} else {
					return _nComponent.React.createElement(
						'div',
						{ className: 'n-select-items' },
						_nComponent.React.createElement(
							'span',
							{ className: 'n-select-item-text' },
							value == null ? ' ' : this.getCodeTable().getText(value)
						)
					);
				}
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var className = (0, _nComponent.classnames)(this.getComponentStyle());
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						tabIndex: this.getTabIndex(),
						onFocus: this.onComponentFocused,
						onBlur: this.onComponentBlurred,
						onClick: this.onComponentClicked,
						onKeyUp: this.onComponentKeyUp,
						ref: 'me' },
					this.renderSelectedItems(),
					this.renderCalendarIcon(),
					this.renderDropdown(),
					this.renderNormalLine(),
					this.renderFocusLine()
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-select';
			}
		}, {
			key: 'getPlaceholder',
			value: function getPlaceholder() {
				return this.getLayoutOptionValue('placeholder', _nComponent.Envs.SELECT_PLACEHOLDER);
			}
		}, {
			key: 'getComponent',
			value: function getComponent() {
				return (0, _nComponent.$)(_nComponent.ReactDOM.findDOMNode(this.refs.txt));
			}
		}, {
			key: 'getDropdownLayout',
			value: function getDropdownLayout() {
				return this.getLayoutOptionValue('dropdown', {});
			}
		}, {
			key: 'isMultiple',
			value: function isMultiple() {
				return this.getLayoutOptionValue('multiple', false);
			}
		}, {
			key: 'getValueFromModel',
			value: function getValueFromModel() {
				return this.isMultiple() ? this.wrapToArray(_get(NSelect.prototype.__proto__ || Object.getPrototypeOf(NSelect.prototype), 'getValueFromModel', this).call(this)) : _get(NSelect.prototype.__proto__ || Object.getPrototypeOf(NSelect.prototype), 'getValueFromModel', this).call(this);
			}
		}, {
			key: 'onComponentUpArrowKeyUp',
			value: function onComponentUpArrowKeyUp(evt) {
				evt.preventDefault();
				this.showDropdown();
			}
		}, {
			key: 'onItemClearIconClicked',
			value: function onItemClearIconClicked(value, evt) {
				var _this4 = this;

				evt.preventDefault();
				var values = this.getValueFromModel();
				var index = values.findIndex(function (v) {
					return value == v;
				});
				if (index != -1) {
					var newValues = values.slice(0);
					var removedValues = newValues.splice(index, 1);
					this.setValueToModel(newValues);
					this.fireEventToMonitor(_nComponent.$.Event('itemCheckChange', {
						target: this.me(),
						ndata: {
							items: removedValues.map(function (value) {
								return _this4.getCodeTable().getItem(value);
							}),
							checked: false
						}
					}));
				}
			}
		}]);

		return NSelect;
	}(NIconRenderer((0, _nComponent.NCodeTableComponent)((0, _nComponent.NDropdownComponent)(_nComponent.NComponent))));

	_nComponent.Envs.COMPONENT_TYPES.SELECT = { type: 'n-select', label: true, error: true };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.SELECT.type, function (options) {
		return _nComponent.React.createElement(NSelect, options);
	});

	exports.NSelect = NSelect;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.NTabBody = exports.NTabHeader = exports.NTab = exports.NArrayTab = undefined;

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nComponent = __webpack_require__(5);

	Object.keys(_nComponent).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function () {
				return _nComponent[key];
			}
		});
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NTabContainer = function NTabContainer(ParentClass) {
		return function (_ParentClass) {
			_inherits(_class, _ParentClass);

			function _class() {
				_classCallCheck(this, _class);

				return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
			}

			_createClass(_class, [{
				key: 'getTabs',
				value: function getTabs() {
					return this.getLayoutOptionValue('tabs');
				}
			}, {
				key: 'getActiveTabIndex',
				value: function getActiveTabIndex() {
					if (this.state.activeTabIndex == null) {
						this.state.activeTabIndex = 0;
					}
					return this.state.activeTabIndex;
				}
			}, {
				key: 'getActiveTab',
				value: function getActiveTab() {
					return this.getTabs()[this.getActiveTabIndex()];
				}
			}, {
				key: 'setActiveTabIndex',
				value: function setActiveTabIndex(tabIndex) {
					var _this2 = this;

					if (tabIndex < 0) {
						tabIndex = 0;
					} else if (tabIndex > this.getTabs().length) {
						tabIndex = this.getTabs().length - 1;
					}
					this.setState({
						activeTabIndex: tabIndex
					}, function () {
						_this2.fireEventToMonitor(_nComponent.$.Event('active', {
							target: _this2.me(),
							ndata: {
								tab: _this2.getActiveTab(),
								tabIndex: tabIndex
							}
						}));
					});
				}
			}]);

			return _class;
		}(ParentClass);
	};

	var NTabHeaderItem = function (_NContainer) {
		_inherits(NTabHeaderItem, _NContainer);

		function NTabHeaderItem() {
			var _ref;

			var _temp, _this3, _ret;

			_classCallCheck(this, NTabHeaderItem);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, (_ref = NTabHeaderItem.__proto__ || Object.getPrototypeOf(NTabHeaderItem)).call.apply(_ref, [this].concat(args))), _this3), _this3.onItemClicked = function (evt) {
				if (_this3.isClickable() && !evt.isDefaultPrevented()) {
					_this3.fireEventToMonitor(evt);
				}
			}, _temp), _possibleConstructorReturn(_this3, _ret);
		}

		_createClass(NTabHeaderItem, [{
			key: 'renderInNormal',
			value: function renderInNormal() {
				var className = (0, _nComponent.classnames)(this.getComponentStyle(), this.getItemStyle(), {
					'n-active': this.getLayoutOptionValue('active'),
					'n-clickable': this.isClickable()
				});
				// TODO for unknow reason, styles is broken when no text inside of span
				// TODO an unicode white space added
				var label = this.getLabel();
				return _nComponent.React.createElement(
					'li',
					{ className: className,
						onClick: this.onItemClicked,
						ref: 'me' },
					this.renderLeadingChildren(),
					_nComponent.React.createElement(
						'span',
						{ className: 'n-tab-header-text' },
						label ? label : ' '
					),
					this.renderTailingChildren()
				);
			}
		}, {
			key: 'getComponentStyle',
			value: function getComponentStyle() {
				return 'n-tab-header-item';
			}
		}, {
			key: 'getItemStyle',
			value: function getItemStyle() {
				var style = this.getLayoutOptionValue('style');
				if (style) {
					return 'n-tab-header-item-' + style;
				} else {
					return null;
				}
			}
		}]);

		return NTabHeaderItem;
	}(_nComponent.NContainer);

	var NTabHeader = function (_NTabContainer) {
		_inherits(NTabHeader, _NTabContainer);

		function NTabHeader() {
			_classCallCheck(this, NTabHeader);

			return _possibleConstructorReturn(this, (NTabHeader.__proto__ || Object.getPrototypeOf(NTabHeader)).apply(this, arguments));
		}

		_createClass(NTabHeader, [{
			key: 'renderItem',
			value: function renderItem(tab, tabIndex) {
				var options = {
					model: tab.model ? tab.model : this.getModel(),
					orientation: this.getOrientation(),
					viewMode: this.isViewMode(),
					layout: new _nComponent.Layout(this.getId(), {
						dataId: this.getDataId(),
						label: tab.label ? tab.label : this.getLayout().getLabel(),
						comp: _nComponent.Envs.deepMergeTo({}, {
							leadChildren: this.getLeadingChildren(),
							tailChildren: this.getTailingChildren(),
							active: tabIndex == this.getActiveTabIndex(),
							tabIndex: tabIndex
						}, tab),
						evt: {
							click: this.onItemActived.bind(this, tab, tabIndex)
						}
					})
				};
				return _nComponent.React.createElement(NTabHeaderItem, _extends({}, options, {
					container: this,
					key: tabIndex }));
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var _this5 = this;

				var className = (0, _nComponent.classnames)(this.getComponentStyle(), this.getTabStyle());
				return _nComponent.React.createElement(
					'ul',
					{ className: className,
						ref: 'me' },
					this.getTabs().map(function (tab, tabIndex) {
						return _this5.renderItem(tab, tabIndex);
					})
				);
			}
		}, {
			key: 'getComponentStyle',
			value: function getComponentStyle() {
				return 'n-tab-header';
			}
		}, {
			key: 'getTabStyle',
			value: function getTabStyle() {
				return 'n-tab-header-' + this.getLayoutOptionValue('style', 'default');
			}
		}, {
			key: 'onItemActived',
			value: function onItemActived(tab, tabIndex, evt) {
				var _this6 = this;

				evt.preventDefault();
				var can = this.fireEventToMonitor(_nComponent.$.Event('shouldActive', {
					target: this.me(),
					ndata: {
						tab: tab,
						tabIndex: tabIndex
					}
				}));

				this.handleEventResult(can, {
					handler: function handler() {
						_this6.setActiveTabIndex(tabIndex);
					},
					false: function _false() {}
				});
			}
		}]);

		return NTabHeader;
	}(NTabContainer(_nComponent.NContainer));

	var NTabBody = function (_NTabContainer2) {
		_inherits(NTabBody, _NTabContainer2);

		function NTabBody() {
			_classCallCheck(this, NTabBody);

			return _possibleConstructorReturn(this, (NTabBody.__proto__ || Object.getPrototypeOf(NTabBody)).apply(this, arguments));
		}

		_createClass(NTabBody, [{
			key: 'renderInNormal',
			value: function renderInNormal() {
				var className = (0, _nComponent.classnames)(this.getComponentStyle(), this.getTabStyle());
				var children = {
					children: this.getChildren()
				};
				var tab = this.getActiveTab();
				if (tab.children) {
					children = _nComponent.Envs.deepMergeTo({}, children, {
						children: tab.children
					});
				}
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						ref: 'me' },
					this.renderLeadingDOMChildren(),
					this.renderLeadingChildren(),
					this.renderChildren({
						children: this.wrapOptionValue(children.children)
					}),
					this.renderTailingChildren(),
					this.renderTailingDOMChildren()
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-tab-body';
			}
		}, {
			key: 'getTabStyle',
			value: function getTabStyle() {
				return 'n-tab-body-' + this.getLayoutOptionValue('style', 'default');
			}
		}, {
			key: 'getModel',
			value: function getModel() {
				var tab = this.getActiveTab();
				return tab.model ? tab.model : _get(NTabBody.prototype.__proto__ || Object.getPrototypeOf(NTabBody.prototype), 'getModel', this).call(this);
			}
		}]);

		return NTabBody;
	}(NTabContainer(_nComponent.NContainer));

	var NTab = function (_NTabContainer3) {
		_inherits(NTab, _NTabContainer3);

		function NTab() {
			var _ref2;

			var _temp2, _this8, _ret2;

			_classCallCheck(this, NTab);

			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			return _ret2 = (_temp2 = (_this8 = _possibleConstructorReturn(this, (_ref2 = NTab.__proto__ || Object.getPrototypeOf(NTab)).call.apply(_ref2, [this].concat(args))), _this8), _this8.onItemShouldActive = function (evt) {
				return _this8.fireEventToMonitor(_nComponent.$.Event('shouldActive', {
					target: _this8.me(),
					ndata: {
						tab: evt.ndata.tab,
						tabIndex: evt.ndata.tabIndex
					}
				}));
			}, _temp2), _possibleConstructorReturn(_this8, _ret2);
		}

		_createClass(NTab, [{
			key: 'renderHeader',
			value: function renderHeader() {
				var layout = _nComponent.Envs.deepMergeTo({}, {
					label: this.getLayout().getLabel(),
					dataId: this.getDataId(),
					comp: {
						type: _nComponent.Envs.COMPONENT_TYPES.TAB_HEADER,
						style: this.getLayoutOptionValue('style'),
						tabs: this.getTabs(),
						leadChildren: this.getLeadingChildren(),
						tailChildren: this.getTailingChildren(),
						columnsOfGrid: this.getColumnsOfGrid()
					},
					evt: {
						active: this.onItemActived.bind(this),
						shouldActive: this.onItemShouldActive
					}
				}, this.getTabHeaderLayout());

				var header = this.getDOMChildOf('NTabHeader');

				return this.renderInternalComponent(layout, header ? header.props : null, {
					ref: 'header'
				});
			}
		}, {
			key: 'renderContent',
			value: function renderContent() {
				var layout = _nComponent.Envs.deepMergeTo({}, {
					dataId: this.getDataId(),
					comp: {
						type: _nComponent.Envs.COMPONENT_TYPES.TAB_BODY,
						style: this.getLayoutOptionValue('style'),
						tabs: this.getTabs(),
						children: this.getChildren(),
						columnsOfGrid: this.getColumnsOfGrid()
					}
				}, this.getTabBodyLayout());

				var body = this.getDOMChildOf('NTabBody');

				return this.renderInternalComponent(layout, body ? body.props : null, {
					ref: 'body'
				});
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var className = (0, _nComponent.classnames)(this.getComponentStyle(), this.getTabStyle());
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						ref: 'me' },
					this.renderHeader(),
					this.renderContent()
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-tab';
			}
		}, {
			key: 'getTabStyle',
			value: function getTabStyle() {
				return 'n-tab-' + this.getLayoutOptionValue('style', 'default');
			}
		}, {
			key: 'getTabHeaderLayout',
			value: function getTabHeaderLayout() {
				return this.getLayoutOptionValue('header');
			}
		}, {
			key: 'getTabBodyLayout',
			value: function getTabBodyLayout() {
				return this.getLayoutOptionValue('body');
			}
		}, {
			key: 'onItemActived',
			value: function onItemActived(evt) {
				this.refs.body.setActiveTabIndex(evt.ndata.tabIndex);
				this.fireEventToMonitor(_nComponent.$.Event('active', {
					target: this.me(),
					ndata: {
						tab: evt.ndata.tab,
						tabIndex: evt.ndata.tabIndex
					}
				}));
			}
		}, {
			key: 'setActiveTabIndex',
			value: function setActiveTabIndex(tabIndex) {
				this.refs.header.setActiveTabIndex(tabIndex);
			}
		}, {
			key: 'getActiveTabIndex',
			value: function getActiveTabIndex() {
				return this.refs.header.getActiveTabIndex();
			}
		}]);

		return NTab;
	}(NTabContainer(_nComponent.NContainer));

	var NArrayTab = function (_NTabContainer4) {
		_inherits(NArrayTab, _NTabContainer4);

		function NArrayTab() {
			var _ref3;

			var _temp3, _this9, _ret3;

			_classCallCheck(this, NArrayTab);

			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}

			return _ret3 = (_temp3 = (_this9 = _possibleConstructorReturn(this, (_ref3 = NArrayTab.__proto__ || Object.getPrototypeOf(NArrayTab)).call.apply(_ref3, [this].concat(args))), _this9), _this9.onItemActived = function (evt) {
				_this9.fireEventToMonitor(_nComponent.$.Event('active', {
					target: _this9.me(),
					ndata: {
						tab: evt.tab,
						tabIndex: evt.tabIndex
					}
				}));
			}, _this9.onItemShouldActive = function (evt) {
				if (_this9.isAddable() && evt.ndata.tabIndex == _this9.getValueFromModel().length) {
					// add tab clicked
					_this9.onAddClicked(evt);
					return false;
				} else {
					return _this9.fireEventToMonitor(_nComponent.$.Event('shouldActive', {
						target: _this9.me(),
						ndata: {
							tab: evt.tab,
							tabIndex: evt.tabIndex
						}
					}));
				}
			}, _temp3), _possibleConstructorReturn(_this9, _ret3);
		}

		_createClass(NArrayTab, [{
			key: 'buildLayout',
			value: function buildLayout(props) {
				_get(NArrayTab.prototype.__proto__ || Object.getPrototypeOf(NArrayTab.prototype), 'buildLayout', this).call(this, props);
				delete this.state.tabs;
				this.state.tabs = this.getTabs();
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var layoutJSON = {
					label: this.getLayout().getLabel(),
					dataId: this.getDataId(),
					comp: _nComponent.Envs.deepMergeTo({}, {
						tabs: this.getTabs()
					}, this.getLayout().getOptions(), {
						type: _nComponent.Envs.COMPONENT_TYPES.TAB
					}),
					evt: {
						active: this.onItemActived,
						shouldActive: this.onItemShouldActive
					}
				};
				return _nComponent.React.createElement(
					'div',
					{ className: this.getComponentStyle(),
						ref: 'me' },
					this.renderInternalComponent(layoutJSON, {
						ref: 'tab'
					})
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-array-tab';
			}
		}, {
			key: 'isAddable',
			value: function isAddable() {
				return this.getLayoutOptionValue('addable');
			}
		}, {
			key: 'isRemovable',
			value: function isRemovable() {
				return this.getLayoutOptionValue('removable');
			}
		}, {
			key: 'isCanRemove',
			value: function isCanRemove(itemModel, itemIndex) {
				var can = this.getLayoutOptionValue('canRemove', null, true);
				return can ? can.call(this, itemModel, itemIndex) : true;
			}
		}, {
			key: 'getTabs',
			value: function getTabs() {
				var _this10 = this;

				if (this.state.tabs) {
					return this.state.tabs;
				}
				var removable = this.isRemovable();
				var tabs = this.getValueFromModel().map(function (item, itemIndex) {
					var model = _this10.createItemModel(item, itemIndex);
					var tab = {
						model: model
					};
					if (removable && _this10.isCanRemove(model, itemIndex)) {
						tab.tailChildren = {
							icon: {
								comp: {
									type: _nComponent.Envs.COMPONENT_TYPES.ICON,
									icon: _nComponent.Envs.TAB_REMOVE_ICON
								},
								evt: {
									click: _this10.onRemoveClicked.bind(_this10, model, itemIndex)
								}
							}
						};
					}
					return tab;
				});
				if (this.isAddable()) {
					tabs.push({
						label: _nComponent.Envs.TAB_ADD_TEXT,
						model: new _nComponent.Model({}),
						style: 'add-button',
						leadChildren: {
							icon: {
								comp: {
									type: _nComponent.Envs.COMPONENT_TYPES.ICON,
									icon: _nComponent.Envs.TAB_ADD_ICON
								}
							}
						},
						children: function children() {
							return {
								label: {
									label: _nComponent.Envs.TAB_NO_ITEM_TEXT,
									comp: {
										type: _nComponent.Envs.COMPONENT_TYPES.LABEL,
										textFromModel: false
									}
								}
							};
						}
					});
				}
				return tabs;
			}
		}, {
			key: 'getValueFromModel',
			value: function getValueFromModel() {
				var value = _get(NArrayTab.prototype.__proto__ || Object.getPrototypeOf(NArrayTab.prototype), 'getValueFromModel', this).call(this);
				return value ? value : [];
			}
		}, {
			key: 'onModelChanged',
			value: function onModelChanged(evt) {
				if (evt.type === 'remove') {
					var activeTabIndex = this.getActiveTabIndex();
					if (activeTabIndex >= this.getValueFromModel().length) {
						this.state.activeTabIndex = this.getValueFromModel().length - 1;
					}
				}
				_get(NArrayTab.prototype.__proto__ || Object.getPrototypeOf(NArrayTab.prototype), 'onModelChanged', this).call(this, evt);
			}
		}, {
			key: 'onAddClicked',
			value: function onAddClicked(evt) {
				var _this11 = this;

				var monitor = this.getEventMonitor('addClick');
				if (monitor) {
					var ret = monitor.call(this, evt);
					this.handleEventResult(ret, {
						handler: function handler(item) {
							_this11.addItem(item);
						},
						false: function _false() {}
					});
				} else {
					this.addItem({});
				}
			}
		}, {
			key: 'onRemoveClicked',
			value: function onRemoveClicked(itemModel, itemIndex, evt) {
				var _this12 = this;

				evt.preventDefault();
				var can = this.fireEventToMonitor(_nComponent.$.Event('shouldRemove', {
					target: this.me(),
					data: itemModel,
					dataIndex: itemIndex
				}));
				this.handleEventResult(can, {
					false: function _false() {},
					handler: function handler() {
						_this12.removeItem(itemModel.getCurrentModel(), itemIndex);
					}
				});
			}
		}, {
			key: 'addItem',
			value: function addItem(item) {
				this.getModel().add(this.getDataId(), item);
				this.setActiveTabIndex(this.getValueFromModel().length - 1);
			}
		}, {
			key: 'removeItem',
			value: function removeItem(item, itemIndex) {
				var activeTabIndex = this.getActiveTabIndex();
				this.getModel().remove(this.getDataId(), item);
				var length = this.getValueFromModel().length;
				if (itemIndex === 0) {
					// removed is the first one
					if (activeTabIndex === 0) {
						// the original active is the first one
						// then do nothing, keep the first one active, no matter what it is
					} else {
						// keep the original active
						this.setActiveTabIndex(activeTabIndex - 1);
					}
				} else if (itemIndex === length) {
					// removed is the last one
					if (activeTabIndex === itemIndex) {
						// the original active is the last one
						// let the previous one active
						this.setActiveTabIndex(length - 1);
					} else {
						// the original active is some one before removed
						// then do nothing, keep the original active, no matter what it is
					}
				} else {
					// removed is neither first nor last
					if (activeTabIndex > itemIndex) {
						// removed is before the original active
						// keep the original active
						this.setActiveTabIndex(activeTabIndex - 1);
					} else {
						// removed is active or original active one is before removed
						// then do nothing, keep the original active, no matter what it is
					}
				}
			}
		}, {
			key: 'setActiveTabIndex',
			value: function setActiveTabIndex(tabIndex) {
				this.refs.tab.setActiveTabIndex(tabIndex);
			}
		}, {
			key: 'getActiveTabIndex',
			value: function getActiveTabIndex() {
				return this.refs.tab.getActiveTabIndex();
			}
		}]);

		return NArrayTab;
	}(NTabContainer(_nComponent.NHierarchyComponent));

	_nComponent.Envs.COMPONENT_TYPES.TAB_HEADER = { type: 'n-tab-header', label: false, popover: false, error: false };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.TAB_HEADER.type, function (options) {
		return _nComponent.React.createElement(NTabHeader, options);
	});
	_nComponent.Envs.COMPONENT_TYPES.TAB_BODY = { type: 'n-tab-body', label: false, popover: false, error: false };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.TAB_BODY.type, function (options) {
		return _nComponent.React.createElement(NTabBody, options);
	});
	_nComponent.Envs.COMPONENT_TYPES.TAB = { type: 'n-tab', label: false, popover: false, error: false };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.TAB.type, function (options) {
		return _nComponent.React.createElement(NTab, options);
	});
	_nComponent.Envs.COMPONENT_TYPES.ARRAY_TAB = { type: 'n-array-tab', label: false, popover: false, error: false };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.ARRAY_TAB.type, function (options) {
		return _nComponent.React.createElement(NArrayTab, options);
	});

	exports.NArrayTab = NArrayTab;
	exports.NTab = NTab;
	exports.NTabHeader = NTabHeader;
	exports.NTabBody = NTabBody;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.NTableBody = exports.NTableHeader = exports.NTable = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _nComponent = __webpack_require__(5);

	Object.keys(_nComponent).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _nComponent[key];
			}
		});
	});

	var _nIcon = __webpack_require__(18);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NTableContainer = function NTableContainer(ParentClass) {
		return function (_ParentClass) {
			_inherits(_class, _ParentClass);

			function _class() {
				_classCallCheck(this, _class);

				return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
			}

			_createClass(_class, [{
				key: 'buildLayout',
				value: function buildLayout(props) {
					_get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'buildLayout', this).call(this, props);
					this.state.sortable = this.getSortable();
				}
			}, {
				key: 'getColumns',
				value: function getColumns() {
					return this.getLayoutOptionValue('columns');
				}
			}, {
				key: 'getColumnWidthClassName',
				value: function getColumnWidthClassName(width) {
					return this.getWidthClassName(width);
				}
			}, {
				key: 'getValueFromModel',
				value: function getValueFromModel() {
					var values = _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'getValueFromModel', this).call(this);
					return values == null ? [] : values;
				}
			}, {
				key: 'isSortable',
				value: function isSortable() {
					return this.state.sortable;
				}
			}, {
				key: 'getSortable',
				value: function getSortable() {
					return this.getLayoutOptionValue('sortable', false);
				}
			}, {
				key: 'getSorter',
				value: function getSorter(column) {
					if (column.sorter) {
						return column.sorter;
					}
					return this.getLayoutOptionValue('sorter', null, true);
				}
			}, {
				key: 'getColumnSortType',
				value: function getColumnSortType(column) {
					var status = this.state.sortStatus;
					if (status && status[0] == column.dataId) {
						return status[1];
					} else {
						return null;
					}
				}
			}, {
				key: 'getDefaultSorter',
				value: function getDefaultSorter(column, sortType) {
					var _this2 = this;

					return function (column, sortType) {
						var values = _this2.getValueFromModel();
						var dataId = column.dataId;
						var dataType = column.dataType;
						values.sort(function (a, b) {
							var ret = 0;
							var valueA = a[dataId];
							var valueB = b[dataId];
							if (dataType === 'number') {
								valueA = valueA == null ? -Infinity : valueA;
								valueB = valueB == null ? -Infinity : valueB;
								ret = valueA - valueB;
							} else {
								valueA = valueA == null ? '' : valueA + '';
								valueB = valueB == null ? '' : valueB + '';
								ret = valueA.localeCompare(valueB);
							}
							if (sortType === NTable.ASC) {
								return ret;
							} else {
								return 0 - ret;
							}
						});
					};
				}
			}]);

			return _class;
		}(ParentClass);
	};

	var NTableHeader = function (_NTableContainer) {
		_inherits(NTableHeader, _NTableContainer);

		function NTableHeader() {
			_classCallCheck(this, NTableHeader);

			return _possibleConstructorReturn(this, (NTableHeader.__proto__ || Object.getPrototypeOf(NTableHeader)).apply(this, arguments));
		}

		_createClass(NTableHeader, [{
			key: 'renderHeaderSortIcon',
			value: function renderHeaderSortIcon(column) {
				var _this4 = this;

				if (!this.isSortable() && !column.sorter || column.sorter === false) {
					return null;
				}
				var layout = {
					comp: {
						type: _nComponent.Envs.COMPONENT_TYPES.ICON,
						icon: function icon() {
							var sortType = _this4.getColumnSortType(column);
							if (sortType === NTable.ASC) {
								return 'sort-amount-asc';
							} else if (sortType == NTable.DESC) {
								return 'sort-amount-desc';
							} else {
								return 'sort';
							}
						}
					},
					evt: {
						click: this.onHeaderSortIconClicked.bind(this, column)
					},
					styles: { comp: '!n-table-sort-icon' }
				};
				return this.renderInternalComponent(layout);
			}
		}, {
			key: 'renderHeaderCellContent',
			value: function renderHeaderCellContent(column) {
				var title = column.header;
				var type = typeof title === 'undefined' ? 'undefined' : _typeof(title);
				if (type === 'function') {
					title = title.call(this, column);
					type = typeof title === 'undefined' ? 'undefined' : _typeof(title);
				}
				if (type === 'string') {
					return _nComponent.React.createElement(
						'span',
						{ className: 'n-table-header-title' },
						title
					);
				} else if (type === 'object' && title.comp && title.comp.type) {
					// a component
					return this.renderInternalComponent(_nComponent.Envs.deepMergeTo({
						dataId: column.dataId
					}, title));
				} else {
					// component set

					return this.renderChildren({
						children: Object.keys(title).reduce(function (prev, next) {
							if (next !== 'columnsOfGrid') {
								prev[next] = title[next];
							}
							return prev;
						}, {}),
						columnsOfGrid: title.columnsOfGrid ? title.columnsOfGrid : null
					});
				}
			}
		}, {
			key: 'renderHeaderCell',
			value: function renderHeaderCell(column, columnIndex) {
				var className = (0, _nComponent.classnames)('n-table-header-cell', this.getColumnWidthClassName(column.width));
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						key: columnIndex },
					this.renderLeadingChildren(),
					this.renderHeaderCellContent(column),
					this.renderHeaderSortIcon(column),
					this.renderTailingChildren()
				);
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var _this5 = this;

				var className = (0, _nComponent.classnames)(this.getComponentStyle(), 'n-row', this.getTableHeaderStyle(), this.getColumnsOfGridClassName());
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						ref: 'me' },
					this.getColumns().map(function (column, columnIndex) {
						return _this5.renderHeaderCell(column, columnIndex);
					})
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-table-header';
			}
		}, {
			key: 'getTableHeaderStyle',
			value: function getTableHeaderStyle() {
				return 'n-table-header-' + this.getLayoutOptionValue('style', 'default');
			}
		}, {
			key: 'onHeaderSortIconClicked',
			value: function onHeaderSortIconClicked(column, evt) {
				var _this6 = this;

				evt.preventDefault();
				var sortType = this.getColumnSortType(column);
				if (sortType === NTable.ASC) {
					sortType = NTable.DESC;
				} else {
					sortType = NTable.ASC;
				}
				var ret = this.fireEventToMonitor(_nComponent.$.Event('columnSort', {
					target: this.me(),
					ndata: {
						column: column,
						sortType: sortType
					}
				}));
				this.handleEventResult(ret, {
					handler: function handler() {
						_this6.setState({
							sortStatus: [column.dataId, sortType]
						});
					},
					fail: function fail() {
						//this.forceUpdate();
					},
					false: function _false() {
						//this.forceUpdate();
					}
				});
			}
		}]);

		return NTableHeader;
	}(NTableContainer(_nComponent.NHierarchyComponent));

	var NTableBody = function (_NTableContainer2) {
		_inherits(NTableBody, _NTableContainer2);

		function NTableBody() {
			_classCallCheck(this, NTableBody);

			return _possibleConstructorReturn(this, (NTableBody.__proto__ || Object.getPrototypeOf(NTableBody)).apply(this, arguments));
		}

		_createClass(NTableBody, [{
			key: 'renderBodyCellContent',
			value: function renderBodyCellContent(rowModel, rowIndex, column) {
				var body = column.body;
				if (!body) {
					return _nComponent.React.createElement(
						'span',
						null,
						rowModel.get(column.dataId)
					);
				} else {
					if (typeof body === 'function') {
						body = body.call(this, rowModel, column);
					}
					if (body.comp && body.comp.type) {
						return this.renderInternalComponent(_nComponent.Envs.deepMergeTo({
							dataId: column.dataId,
							comp: {
								rowIndex: rowIndex
							}
						}, body), {
							model: rowModel
						});
					} else {
						return this.renderChildren({
							children: Object.keys(body).reduce(function (prev, next) {
								if (next !== 'columnsOfGrid') {
									prev[next] = body[next];
								}
								return prev;
							}, {}),
							columnsOfGrid: body.columnsOfGrid ? body.columnsOfGrid : null,
							model: rowModel
						});
					}
				}
			}
		}, {
			key: 'renderBodyCell',
			value: function renderBodyCell(rowModel, rowIndex, column, columnIndex) {
				var className = (0, _nComponent.classnames)('n-table-body-cell', this.getColumnWidthClassName(column.width));
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						key: columnIndex },
					this.renderBodyCellContent(rowModel, rowIndex, column)
				);
			}
		}, {
			key: 'renderBodyRow',
			value: function renderBodyRow(rowModel, rowIndex) {
				var _this8 = this;

				var className = (0, _nComponent.classnames)({
					'n-table-body-row': true,
					'n-row': true,
					'n-table-body-row-odd': rowIndex % 2 == 0,
					'n-table-body-row-even': rowIndex % 2 == 1
				}, this.getColumnsOfGridClassName());
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						key: rowIndex },
					this.getColumns().map(function (column, columnIndex) {
						return _this8.renderBodyCell(rowModel, rowIndex, column, columnIndex);
					})
				);
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var _this9 = this;

				var className = (0, _nComponent.classnames)(this.getComponentStyle(), this.getTableBodyStyle());
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						ref: 'me' },
					this.getValueFromModel().map(function (row, rowIndex) {
						var rowModel = _this9.createItemModel(row, rowIndex);
						return _this9.renderBodyRow(rowModel, rowIndex);
					})
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-table-body';
			}
		}, {
			key: 'getTableBodyStyle',
			value: function getTableBodyStyle() {
				return 'n-table-body-' + this.getLayoutOptionValue('style', 'default');
			}
		}, {
			key: 'sortColumn',
			value: function sortColumn(column, sortType) {
				var _this10 = this;

				var deferred = _nComponent.$.Deferred();

				sortType = sortType ? sortType : NTable.ASC;
				var sorter = this.getSorter(column);
				sorter = sorter ? sorter : this.getDefaultSorter();
				this.handleEventResult(sorter.call(this, column, sortType), {
					handler: function handler() {
						deferred.resolve();
						_this10.onColumnSorted(column, sortType);
					},
					fail: function fail() {
						deferred.reject();
					},
					false: function _false() {
						deferred.reject();
					}
				});
				return deferred.promise();
			}
		}, {
			key: 'onColumnSorted',
			value: function onColumnSorted(column, sortType) {
				this.forceUpdate();
				this.fireEventToMonitor(_nComponent.$.Event('columnSort', {
					target: this.me(),
					ndata: {
						column: column,
						sortType: sortType
					}
				}));
			}
		}]);

		return NTableBody;
	}(NTableContainer(_nComponent.NHierarchyComponent));

	var NTable = function (_NTableContainer3) {
		_inherits(NTable, _NTableContainer3);

		function NTable() {
			var _ref;

			var _temp, _this11, _ret;

			_classCallCheck(this, NTable);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this11 = _possibleConstructorReturn(this, (_ref = NTable.__proto__ || Object.getPrototypeOf(NTable)).call.apply(_ref, [this].concat(args))), _this11), _this11.onHeaderColumnSorting = function (evt) {
				return _this11.refs.body.sortColumn(evt.nData.column, evt.nData.sortType);
			}, _this11.onBodyColumnSorted = function (evt) {
				_this11.fireEventToMonitor(_nComponent.$.Event('columnSort', {
					target: _this11.me(),
					ndata: {
						column: evt.ndata.column,
						sortType: evt.ndata.sortType
					}
				}));
			}, _this11.onItemChanged = function (evt) {
				_this11.fireEventToMonitor(_nComponent.$.Event('itemChange', {
					target: _this11.me(),
					ndata: {
						itemModel: evt.ndata.itemModel,
						itemIndex: evt.ndata.itemIndex,
						originalEvent: evt.ndata.originalEvent
					}
				}));
			}, _temp), _possibleConstructorReturn(_this11, _ret);
		}

		_createClass(NTable, [{
			key: 'renderHeader',
			value: function renderHeader() {
				var layout = _nComponent.Envs.deepMergeTo({}, {
					label: this.getLayout().getLabel(),
					dataId: this.getDataId(),
					comp: {
						type: _nComponent.Envs.COMPONENT_TYPES.TABLE_HEADER,
						style: this.getLayoutOptionValue('style'),
						sortable: this.getLayoutOptionValue('sortable', false),
						sorter: this.getLayoutOptionValue('sorter', null, true),
						columns: this.getColumns(),
						leadChildren: this.getLeadingChildren(),
						tailChildren: this.getTailingChildren(),
						columnsOfGrid: this.getColumnsOfGrid()
					},
					evt: {
						columnSort: this.onHeaderColumnSorting
					}
				}, this.getTableHeaderLayout());

				var header = this.getDOMChildOf('NTableHeader');

				return this.renderInternalComponent(layout, header ? header.props : null, {
					ref: 'header'
				});
			}
		}, {
			key: 'renderBody',
			value: function renderBody() {
				var layout = _nComponent.Envs.deepMergeTo({}, {
					label: this.getLayout().getLabel(),
					dataId: this.getDataId(),
					comp: {
						type: _nComponent.Envs.COMPONENT_TYPES.TABLE_BODY,
						style: this.getLayoutOptionValue('style'),
						columns: this.getColumns(),
						columnsOfGrid: this.getColumnsOfGrid()
					},
					evt: {
						columnSort: this.onBodyColumnSorted,
						itemChange: this.onItemChanged
					}
				}, this.getTableBodyLayout());

				var header = this.getDOMChildOf('NTableBody');

				return this.renderInternalComponent(layout, header ? header.props : null, {
					ref: 'body'
				});
			}
		}, {
			key: 'renderFooter',
			value: function renderFooter() {
				var className = (0, _nComponent.classnames)('n-table-footer', 'n-row', 'n-table-footer-' + this.getTableStyle());
				return _nComponent.React.createElement('div', { className: className,
					ref: 'footer' });
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var className = (0, _nComponent.classnames)(this.getComponentStyle(), 'n-table-' + this.getTableStyle());
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						ref: 'me' },
					this.renderHeader(),
					this.renderBody(),
					this.renderFooter()
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-table';
			}
		}, {
			key: 'getTableStyle',
			value: function getTableStyle() {
				return this.getLayoutOptionValue('style', 'default');
			}
		}, {
			key: 'getTableHeaderLayout',
			value: function getTableHeaderLayout() {
				return this.getLayoutOptionValue('header');
			}
		}, {
			key: 'getTableBodyLayout',
			value: function getTableBodyLayout() {
				return this.getLayoutOptionValue('body');
			}
		}]);

		return NTable;
	}(NTableContainer(_nComponent.NHierarchyComponent));

	NTable.ASC = 'asc';
	NTable.DESC = 'desc';


	_nComponent.Envs.COMPONENT_TYPES.TABLE_HEADER = { type: 'n-table-header', label: false, popover: false, error: false };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.TABLE_HEADER.type, function (options) {
		return _nComponent.React.createElement(NTableHeader, options);
	});
	_nComponent.Envs.COMPONENT_TYPES.TABLE_BODY = { type: 'n-table-body', label: false, popover: false, error: false };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.TABLE_BODY.type, function (options) {
		return _nComponent.React.createElement(NTableBody, options);
	});
	_nComponent.Envs.COMPONENT_TYPES.TABLE = { type: 'n-table', label: false, popover: false, error: false };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.TABLE.type, function (options) {
		return _nComponent.React.createElement(NTable, options);
	});

	exports.NTable = NTable;
	exports.NTableHeader = NTableHeader;
	exports.NTableBody = NTableBody;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.NTextArea = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nComponent = __webpack_require__(5);

	Object.keys(_nComponent).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _nComponent[key];
			}
		});
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NTextArea = function (_NComponent) {
		_inherits(NTextArea, _NComponent);

		function NTextArea() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, NTextArea);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NTextArea.__proto__ || Object.getPrototypeOf(NTextArea)).call.apply(_ref, [this].concat(args))), _this), _this.onComponentChanged = function (evt) {
				// compare the formatted text
				var newValue = _this.getComponentText();
				var oldValue = _this.getValueFromModel();
				if (!_this.textEquals(newValue, oldValue)) {
					// evt.preventDefault();
					if (_this.state.valueChangeTimeoutId) {
						clearTimeout(_this.state.valueChangeTimeoutId);
					}
					_this.state.valueChangeTimeoutId = setTimeout(function () {
						delete _this.state.valueChangeTimeoutId;
						_this.setValueToModel(newValue);
					}, _nComponent.Envs.TEXT_CHANGE_DELAY);
				}
			}, _this.onComponentFocused = function (evt) {
				_this.onComponentFocusChanged();
			}, _this.onComponentBlurred = function (evt) {
				_this.onComponentFocusChanged();
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(NTextArea, [{
			key: 'postDidUpdate',

			// lifecycle
			value: function postDidUpdate() {
				if (this.getComponentText() != this.getValueFromModel()) {
					this.getComponent().val(value);
				}
			}
		}, {
			key: 'postDidMount',
			value: function postDidMount() {
				this.getComponent().val(this.getValueFromModel());
			}
		}, {
			key: 'renderText',
			value: function renderText() {
				return _nComponent.React.createElement('textarea', { className: (0, _nComponent.classnames)('n-control', this.getTextRowsClassName()),
					disabled: !this.isEnabled(),
					placeholder: this.getPlaceholder(),
					rows: this.getTextRows(),

					onChange: this.onComponentChanged,
					onFocus: this.onComponentFocused,
					onBlur: this.onComponentBlurred,

					ref: 'txt' });
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				return _nComponent.React.createElement(
					'div',
					{ className: this.getComponentStyle(),
						ref: 'me' },
					this.renderText(),
					this.renderNormalLine(),
					this.renderFocusLine()
				);
			}
		}, {
			key: 'isViewModeSameAsNormal',
			value: function isViewModeSameAsNormal() {
				return false;
			}
		}, {
			key: 'getComponent',
			value: function getComponent() {
				return (0, _nComponent.$)(_nComponent.ReactDOM.findDOMNode(this.refs.txt));
			}
			// style

		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-text-area';
			}
		}, {
			key: 'getTextRowsClassName',
			value: function getTextRowsClassName() {
				return 'n-rows-' + this.getTextRows();
			}
			// option value

		}, {
			key: 'getPlaceholder',
			value: function getPlaceholder() {
				return this.getLayoutOptionValue('placeholder');
			}
		}, {
			key: 'getTextRows',
			value: function getTextRows() {
				return this.getLayoutOptionValue('rows', 2);
			}
		}, {
			key: 'isAutoTrim',
			value: function isAutoTrim() {
				return this.getLayoutOptionValue('trim', false);
			}
		}, {
			key: 'getComponentText',
			value: function getComponentText() {
				var value = this.getComponent().val();
				return this.isAutoTrim() ? value.trim() : value;
			}

			// data event

		}, {
			key: 'textEquals',


			// others
			value: function textEquals(v1, v2) {
				var hasText1 = !this.isNoValueAssigned(v1);
				var hasText2 = !this.isNoValueAssigned(v2);
				if (hasText1) {
					var strV1 = v1 + '';
					var strV2 = v2 + '';
					return strV1 === strV2;
				} else {
					return !hasText2;
				}
			}
		}]);

		return NTextArea;
	}(_nComponent.NComponent);

	_nComponent.Envs.COMPONENT_TYPES.TEXTAREA = { type: 'n-text-area', label: true, error: true };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.TEXTAREA.type, function (options) {
		return _nComponent.React.createElement(NTextArea, options);
	});

	exports.NTextArea = NTextArea;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.NText = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _nComponent = __webpack_require__(5);

	Object.keys(_nComponent).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _nComponent[key];
			}
		});
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NText = function (_NAddonComponent) {
		_inherits(NText, _NAddonComponent);

		function NText() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, NText);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NText.__proto__ || Object.getPrototypeOf(NText)).call.apply(_ref, [this].concat(args))), _this), _this.onComponentChanged = function (evt) {
				// compare the formatted text
				var newValue = _this.getComponentText();
				var oldValue = _this.getValueFromModel();
				if (!_this.textEquals(newValue, oldValue)) {
					//evt.preventDefault();
					if (_this.state.valueChangeTimeoutId) {
						clearTimeout(_this.state.valueChangeTimeoutId);
					}
					_this.state.valueChangeTimeoutId = setTimeout(function () {
						delete _this.state.valueChangeTimeoutId;
						_this.setValueToModel(newValue);
					}, _nComponent.Envs.TEXT_CHANGE_DELAY);
				}
			}, _this.onComponentFocused = function (evt) {
				_this.onComponentFocusChanged();

				// when focus, show the unformatted value
				var value = _this.getValueFromModel();
				if (value != _this.getComponent().val()) {
					// might be formatted or something else, however not same
					// evt.preventDefault();
					_this.getComponent().val(value);
				}
			}, _this.onComponentBlurred = function (evt) {
				_this.onComponentFocusChanged();

				var text = _this.formatValue(_this.getComponentText());
				if (text) {
					var value = _this.formatValue(_this.getValueFromModel());
					if (text != value) {
						// this moment, value of component is not formatted
						// evt.preventDefault();
						_this.setValueToModel(text);
					}
					_this.getComponent().val(_this.formatValue(text));
				} else {
					// evt.preventDefault();
					_this.setValueToModel(null);
				}
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(NText, [{
			key: 'postDidUpdate',

			// lifecycle
			value: function postDidUpdate() {
				var value = this.getValueFromModel();
				if (!(0, _nComponent.$)(_nComponent.ReactDOM.findDOMNode(this.refs.focusLine)).hasClass('focus')) {
					value = this.formatValue(value);
				}
				if (this.getComponentText() != value) {
					this.getComponent().val(value);
				}
			}
		}, {
			key: 'postDidMount',
			value: function postDidMount() {
				this.getComponent().val(this.formatValue(this.getValueFromModel()));
			}
		}, {
			key: 'renderText',
			value: function renderText() {
				return _nComponent.React.createElement('input', { type: this.getInputKind(),
					className: 'n-control',
					disabled: !this.isEnabled(),
					placeholder: this.getPlaceholder(),

					onChange: this.onComponentChanged,
					onFocus: this.onComponentFocused,
					onBlur: this.onComponentBlurred,

					ref: 'txt' });
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var className = (0, _nComponent.classnames)(this.getComponentStyle(), {
					'has-addon': this.hasAddon()
				});
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						ref: 'me' },
					this.renderLead(),
					this.renderText(),
					this.renderTail(),
					this.renderNormalLine(),
					this.renderFocusLine()
				);
			}
		}, {
			key: 'isViewModeSameAsNormal',
			value: function isViewModeSameAsNormal() {
				return false;
			}
		}, {
			key: 'getValueFromModel',
			value: function getValueFromModel() {
				var value = _get(NText.prototype.__proto__ || Object.getPrototypeOf(NText.prototype), 'getValueFromModel', this).call(this);
				var transformer = this.getTextTransformer();
				if (transformer && transformer.display) {
					return transformer.display.call(this, value);
				} else {
					return value;
				}
			}
		}, {
			key: 'setValueToModel',
			value: function setValueToModel(value) {
				var transformer = this.getTextTransformer();
				if (transformer && transformer.model) {
					_get(NText.prototype.__proto__ || Object.getPrototypeOf(NText.prototype), 'setValueToModel', this).call(this, transformer.model.call(this, value));
				} else {
					_get(NText.prototype.__proto__ || Object.getPrototypeOf(NText.prototype), 'setValueToModel', this).call(this, value);
				}
			}
		}, {
			key: 'getComponent',
			value: function getComponent() {
				return (0, _nComponent.$)(_nComponent.ReactDOM.findDOMNode(this.refs.txt));
			}
			// style

		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-text';
			}
			// option value

		}, {
			key: 'getInputKind',
			value: function getInputKind() {
				return this.getLayoutOptionValue('kind', 'text');
			}
		}, {
			key: 'getPlaceholder',
			value: function getPlaceholder() {
				return this.getLayoutOptionValue('placeholder');
			}
		}, {
			key: 'getTextFormatter',
			value: function getTextFormatter() {
				return this.getLayoutOptionValue('formatter');
			}
		}, {
			key: 'getTextTransformer',
			value: function getTextTransformer() {
				return this.getLayoutOptionValue('transformer');
			}
		}, {
			key: 'isAutoTrim',
			value: function isAutoTrim() {
				return this.getLayoutOptionValue('trim', false);
			}
		}, {
			key: 'getComponentText',
			value: function getComponentText() {
				var value = this.getComponent().val();
				return this.isAutoTrim() ? value.trim() : value;
			}

			// data event


			// dom event

		}, {
			key: 'formatValue',


			// others
			value: function formatValue(value) {
				var formatter = this.getTextFormatter();
				if (formatter && formatter.display) {
					return formatter.display.call(this, value);
				} else {
					return value;
				}
			}
		}, {
			key: 'parseText',
			value: function parseText(text) {
				var formatter = this.getTextFormatter();
				if (formatter && formatter.model) {
					return formatter.model.call(this, text);
				} else {
					return text;
				}
			}
		}, {
			key: 'textEquals',
			value: function textEquals(v1, v2) {
				var hasText1 = !this.isNoValueAssigned(v1);
				var hasText2 = !this.isNoValueAssigned(v2);
				if (hasText1) {
					var strV1 = v1 + '';
					var strV2 = v2 + '';
					return strV1 === strV2;
				} else {
					return !hasText2;
				}
			}
		}]);

		return NText;
	}(_nComponent.NAddonComponent);

	_nComponent.Envs.COMPONENT_TYPES.TEXT = { type: 'n-text', label: true, error: true };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.TEXT.type, function (options) {
		return _nComponent.React.createElement(NText, options);
	});

	exports.NText = NText;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.NTree = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _nComponent = __webpack_require__(5);

	Object.keys(_nComponent).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _nComponent[key];
			}
		});
	});

	var _nIcon = __webpack_require__(18);

	var _nCheck = __webpack_require__(16);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NTree = function (_NCodeTableComponent) {
		_inherits(NTree, _NCodeTableComponent);

		function NTree(props) {
			_classCallCheck(this, NTree);

			var _this = _possibleConstructorReturn(this, (NTree.__proto__ || Object.getPrototypeOf(NTree)).call(this, props));

			_this.onItemClicked = function (evt) {
				evt.preventDefault();
				_this.toggleNodeExpand((0, _nComponent.$)(evt.target).closest('li'), evt);
			};

			_this.onItemKeyDown = function (evt) {
				var keycode = evt.keyCode;
				switch (keycode) {
					case 32:
						_this.onItemSpaceKeyDown(evt);
						break;
					case 37:
						_this.onItemLeftArrowKeyDown(evt);
						break;
					case 38:
						_this.onItemUpArrowKeyDown(evt);
						break;
					case 39:
						_this.onItemRightArrowKeyDown(evt);
						break;
					case 40:
						_this.onItemDownArrowKeyDown(evt);
						break;
				}
			};

			_this.onMouseMoved = function (evt) {
				var bg = (0, _nComponent.$)(_nComponent.ReactDOM.findDOMNode(_this.refs.background));
				var container = _this.$me();
				var containerOffset = container.offset();
				var top = evt.clientY + (0, _nComponent.$)(window).scrollTop() - containerOffset.top;
				var found = container.find('.n-tree-node-text').toArray().some(function (dom) {
					var text = (0, _nComponent.$)(dom);
					var offset = text.offset();
					var textTop = offset.top - containerOffset.top;
					if (textTop <= top && textTop + text.outerHeight() >= top) {
						bg.css({
							display: 'block',
							left: container.scrollLeft(),
							top: textTop + container.scrollTop() - 1,
							height: text.outerHeight()
						});
						return true;
					}
				});
				if (!found) {
					bg.css({
						display: 'none'
					});
				}
			};

			_this.onMouseLeft = function (evt) {
				var bg = (0, _nComponent.$)(_nComponent.ReactDOM.findDOMNode(_this.refs.background));
				bg.css({
					display: 'none'
				});
			};

			_this.state.expandStatus = _this.getInitExpandLevel();
			return _this;
		}

		_createClass(NTree, [{
			key: 'buildLayout',
			value: function buildLayout(props) {
				_get(NTree.prototype.__proto__ || Object.getPrototypeOf(NTree.prototype), 'buildLayout', this).call(this, props);
				this.state.nodeCheckable = this.isNodeCheckable();
			}
		}, {
			key: 'postDidMount',
			value: function postDidMount() {
				var _this2 = this;

				this.state.expandStatus = [];
				this.$me().find('li').each(function (index, dom) {
					var node = (0, _nComponent.$)(dom);
					if (node.hasClass('n-tree-node-expanded')) {
						_this2.state.expandStatus.push(node.attr('data-node-id'));
					}
				});
			}
		}, {
			key: 'renderNodeIcon',
			value: function renderNodeIcon(item, itemIndex, parent) {
				var clickHandler = void 0;
				var icon = item.icon;
				if (!icon) {
					var nodeIcon = this.getNodeIcon();
					if (nodeIcon) {
						icon = nodeIcon.call(this, item, itemIndex, parent);
					}
				}
				if (!icon) {
					if (this.hasChildren(item)) {
						icon = _nComponent.Envs.TREE_BRANCH_ICON;
						clickHandler = this.onItemClicked;
					} else {
						icon = _nComponent.Envs.TREE_LEAF_ICON;
					}
				}
				var layout = {
					comp: {
						type: _nComponent.Envs.COMPONENT_TYPES.ICON,
						icon: icon
					},
					styles: {
						comp: '!n-tree-node-icon'
					},
					evt: {
						click: clickHandler
					}
				};
				return this.renderInternalComponent(layout);
			}
		}, {
			key: 'renderNodeCheck',
			value: function renderNodeCheck(item, itemIndex, parent) {
				var _this3 = this;

				var model = new _nComponent.Model({ value: this.isItemChecked(item) }).addPostChangeListener('value', function (evt) {
					_this3.onItemCheckChanged(item, evt.new);
				});
				var layout = new _nComponent.Layout('value', {
					comp: {
						type: _nComponent.Envs.COMPONENT_TYPES.CHECK_NL
					},
					evt: {
						'jq.keydown': this.onItemKeyDown
					}
				});
				return _nComponent.React.createElement(_nCheck.NCheck, { model: model,
					layout: layout });
			}
		}, {
			key: 'renderChildrenNodes',
			value: function renderChildrenNodes(parent, nodeLevel) {
				var _this4 = this;

				if (this.hasChildren(parent)) {
					return _nComponent.React.createElement(
						'ul',
						{ className: 'n-tree-node',
							'data-node-level': nodeLevel },
						parent.children.map(function (child, childIndex) {
							return _this4.renderNode(child, childIndex, parent, nodeLevel);
						})
					);
				}
			}
		}, {
			key: 'renderNode',
			value: function renderNode(item, itemIndex, parent, nodeLevel) {
				var hasChildren = this.hasChildren(item);
				var expanded = this.isNodeExpanded(nodeLevel, item.id);
				var className = (0, _nComponent.classnames)({
					'n-tree-node-branch': hasChildren,
					'n-tree-node-leaf': !hasChildren,
					'n-tree-node-expanded': expanded,
					'n-tree-node-collapsed': !expanded
				});
				var checkable = this.isNodeCanCheck(item);
				return _nComponent.React.createElement(
					'li',
					{ className: className,
						'data-node-id': item.id,
						'data-node-level': nodeLevel,
						key: itemIndex },
					this.renderNodeIcon(item, itemIndex, parent),
					checkable ? this.renderNodeCheck(item, itemIndex, parent) : null,
					_nComponent.React.createElement(
						'span',
						{ className: 'n-tree-node-text',
							tabIndex: '0',
							onClick: hasChildren ? this.onItemClicked : null,
							onKeyDown: this.onItemKeyDown },
						item.text
					),
					this.renderChildrenNodes(item, nodeLevel + 1)
				);
			}
		}, {
			key: 'renderTopLevelNodes',
			value: function renderTopLevelNodes() {
				var _this5 = this;

				return _nComponent.React.createElement(
					'ul',
					{ className: 'n-tree-node',
						'data-node-level': '1' },
					this.getCodeTable().map(function (item, itemIndex) {
						return _this5.renderNode(item, itemIndex, null, 1);
					})
				);
			}
		}, {
			key: 'renderRoot',
			value: function renderRoot() {
				var item = {
					id: NTree.ROOT_ID,
					text: this.getRootText(),
					icon: this.getRootIcon(),
					children: this.getCodeTable().items()
				};
				return _nComponent.React.createElement(
					'ul',
					{ className: 'n-tree-node n-tree-node-root',
						'data-node-level': '0' },
					this.renderNode(item, 0, null, 0)
				);
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				var showRoot = this.isRootShown();
				var styles = {
					minHeight: this.getMinHeight(),
					maxHeight: this.getMaxHeight(),
					minWidth: this.getMinWidth(),
					maxWidth: this.getMaxWidth()
				};
				var className = (0, _nComponent.classnames)(this.getComponentStyle(), {
					'n-tree-nowrap': this.isNoWrap()
				});
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						style: styles,
						onMouseMove: this.onMouseMoved,
						onMouseLeave: this.onMouseLeft,
						ref: 'me' },
					_nComponent.React.createElement('div', { className: 'n-tree-background',
						ref: 'background' }),
					showRoot ? this.renderRoot() : this.renderTopLevelNodes()
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-tree';
			}
		}, {
			key: 'isRootShown',
			value: function isRootShown() {
				return this.getLayoutOptionValue('showRoot', true);
			}
		}, {
			key: 'getNodeIcon',
			value: function getNodeIcon() {
				return this.getLayoutOptionValue('nodeIcon', null, true);
			}
		}, {
			key: 'getRootIcon',
			value: function getRootIcon() {
				return this.getLayoutOptionValue('rootIcon', _nComponent.Envs.TREE_ROOT_ICON);
			}
		}, {
			key: 'getRootText',
			value: function getRootText() {
				return this.getLayoutOptionValue('rootText', _nComponent.Envs.TREE_ROOT_TEXT);
			}
		}, {
			key: 'getMinHeight',
			value: function getMinHeight() {
				return this.getLayoutOptionValue('minHeight');
			}
		}, {
			key: 'getMaxHeight',
			value: function getMaxHeight() {
				return this.getLayoutOptionValue('maxHeight', _nComponent.Envs.TREE_MAX_HEIGHT);
			}
		}, {
			key: 'getMinWidth',
			value: function getMinWidth() {
				return this.getLayoutOptionValue('minWidth');
			}
		}, {
			key: 'getMaxWidth',
			value: function getMaxWidth() {
				return this.getLayoutOptionValue('maxWidth');
			}
		}, {
			key: 'isNoWrap',
			value: function isNoWrap() {
				return this.getLayoutOptionValue('noWrap', true);
			}
		}, {
			key: 'getInitExpandLevel',
			value: function getInitExpandLevel() {
				return this.getLayoutOptionValue('expandLevel', 0);
			}
		}, {
			key: 'isNodeCheckable',
			value: function isNodeCheckable() {
				return this.getLayoutOptionValue('checkable', false);
			}
		}, {
			key: 'isMultipleCheck',
			value: function isMultipleCheck() {
				return this.isHierarchyCheck() || this.getLayoutOptionValue('multiple', true);
			}
		}, {
			key: 'isHierarchyCheck',
			value: function isHierarchyCheck() {
				return this.getLayoutOptionValue('hierarchy', false);
			}
		}, {
			key: 'isNodeCanCheck',
			value: function isNodeCanCheck(item) {
				if (!this.state.nodeCheckable) {
					return false;
				}
				if (item.id === NTree.ROOT_ID && !this.isHierarchyCheck()) {
					return false;
				}
				var canCheck = this.getLayoutOptionValue('canCheck', null, true);
				return canCheck ? canCheck.call(this, item) : true;
			}
		}, {
			key: 'hasChildren',
			value: function hasChildren(item) {
				return item.children && item.children.length > 0;
			}
		}, {
			key: 'isNodeExpanded',
			value: function isNodeExpanded(nodeLevel, nodeId) {
				if (typeof this.state.expandStatus === 'number') {
					return nodeLevel <= this.state.expandStatus;
				} else if (_nComponent.lodash.isArray(this.state.expandStatus)) {
					return this.state.expandStatus.indexOf(nodeId + '') != -1;
				} else {
					throw {
						message: 'Unsupported expanding status',
						status: this.state.expandStatus
					};
				}
			}
		}, {
			key: 'getValueFromModel',
			value: function getValueFromModel() {
				if (this.isMultipleCheck()) {
					var values = _get(NTree.prototype.__proto__ || Object.getPrototypeOf(NTree.prototype), 'getValueFromModel', this).call(this);
					return values ? values : [];
				} else {
					return _get(NTree.prototype.__proto__ || Object.getPrototypeOf(NTree.prototype), 'getValueFromModel', this).call(this);
				}
			}
		}, {
			key: 'isItemChecked',
			value: function isItemChecked(item) {
				if (item.id === NTree.ROOT_ID) {
					return this.state.rootChecked;
				}
				if (this.isMultipleCheck()) {
					return this.getValueFromModel().findIndex(function (value) {
						return value == item.id;
					}) !== -1;
				} else {
					return this.getValueFromModel() == item.id;
				}
			}
		}, {
			key: 'computeItemsNeedChangeCheckStatus',
			value: function computeItemsNeedChangeCheckStatus(item, checked) {
				var _this6 = this;

				var ids = [item.id];
				var itemMap = this.getCodeTable().map();
				if (this.isHierarchyCheck()) {
					(function () {
						// all its children should be changed same as parameter 'checked'
						// scan ancestors, 
						// if all directly children are checked, then the ancestor should be checked
						// if checked is false, then all ancesstors should be unchecked
						var node = _this6.$me().find('li').filter(function (index, dom) {
							return (0, _nComponent.$)(dom).attr('data-node-id') == item.id;
						});
						// find all children
						node.find('li').each(function (index, dom) {
							var id = (0, _nComponent.$)(dom).attr('data-node-id');
							var itemChecked = _this6.isItemChecked({ id: id });
							if (itemChecked != checked) {
								ids.push(id);
							}
						});
						// find ancestors
						var reachRoot = item.id === NTree.ROOT_ID;
						var ignoreChild = item;
						while (!reachRoot) {
							// parent is ul, parent's parent is li
							var parent = node.parent().parent();
							var id = parent.attr('data-node-id');
							var parentChecked = _this6.isItemChecked({ id: id });
							if (parentChecked != checked) {
								if (!checked) {
									// current unchecked
									ids.push(id);
								} else {
									// current checked
									var children = null;
									if (id === NTree.ROOT_ID) {
										children = _this6.getCodeTable().items();
									} else {
										children = itemMap[id].children;
									}
									var uncheckedChildFound = children.some(function (child) {
										if (child.id != ignoreChild.id) {
											var childChecked = _this6.isItemChecked(child);
											if (!childChecked) {
												return true;
											}
										}
									});
									if (uncheckedChildFound) {
										// do nothing, and break
										break;
									} else {
										ids.push(id);
									}
								}
							} else {
								// parent check same as current
								break;
							}
							ignoreChild = { id: id };
							reachRoot = id === NTree.ROOT_ID;
							node = parent;
						}
					})();
				}
				return ids.map(function (id) {
					if (id === NTree.ROOT_ID) {
						return { id: id };
					}
					return itemMap[id];
				});
			}
		}, {
			key: 'onItemCheckChanged',
			value: function onItemCheckChanged(item, checked) {
				var items = this.computeItemsNeedChangeCheckStatus(item, checked);
				this.handleEventResult(this.shouldItemCheckChanged(items, checked), {
					handler: this.onItemsCheckChanged.bind(this, items, checked),
					false: function _false() {}
				});
			}
		}, {
			key: 'onItemsCheckChanged',
			value: function onItemsCheckChanged(originalItems, checked, newItems) {
				var _this7 = this;

				var items = newItems ? newItems : originalItems;
				if (items.length === 0) {
					// do nothing
					return;
				}
				if (!this.isHierarchyCheck()) {
					// never consider the root node, it will not be checked
					this.setValueToModel(checked ? items[0].id : null);
					this.itemCheckChanged(items, checked);
				} else {
					(function () {
						var values = _this7.getValueFromModel();
						values = values == null ? [] : _this7.wrapToArray(values);
						values = values.slice(0);
						if (checked) {
							items.forEach(function (item) {
								var index = values.findIndex(function (value) {
									return value == item.id;
								});
								if (index === -1) {
									if (item.id === NTree.ROOT_ID) {
										_this7.state.rootChecked = true;
									} else {
										values.push(item.id);
									}
								}
							});
						} else {
							items.forEach(function (item) {
								if (item.id === NTree.ROOT_ID) {
									_this7.state.rootChecked = false;
								} else {
									var index = values.findIndex(function (value) {
										return value == item.id;
									});
									if (index !== -1) {
										values.splice(index, 1);
									}
								}
							});
						}
						// never put root into values
						_this7.setValueToModel(values);
						_this7.itemCheckChanged(items, checked);
					})();
				}
			}
		}, {
			key: 'shouldItemCheckChanged',
			value: function shouldItemCheckChanged(items, checked) {
				return this.fireEventToMonitor(_nComponent.$.Event('shouldItemCheckChange'), {
					target: this.me(),
					ndata: {
						items: items,
						checked: checked
					}
				});
			}
		}, {
			key: 'itemCheckChanged',
			value: function itemCheckChanged(items, checked) {
				this.fireEventToMonitor(_nComponent.$.Event('itemCheckChange', {
					target: this.me(),
					ndata: {
						items: items,
						checked: checked
					}
				}));
			}
		}, {
			key: 'nodeExpandChanged',
			value: function nodeExpandChanged(node, expanded) {
				this.fireEventToMonitor(_nComponent.$.Event(expanded ? 'nodeExpand' : 'nodeCollapse', {
					target: this.me(),
					ndata: {
						node: node
					}
				}));
			}
			// node should be a <li> dom node
			// make sure parent of node is expanded

		}, {
			key: 'focusNode',
			value: function focusNode(node) {
				var offset = node.offset();
				var container = this.$me();
				var containerOffset = container.offset();
				var needScroll = false;
				if (offset.top < containerOffset.top || offset.top > containerOffset.top + container.height()) {
					needScroll = true;
				}

				var textDOMNode = node.children('.n-tree-node-text');
				if (needScroll) {
					node[0].scrollIntoView();
				}
				textDOMNode.focus();
			}
			// node level starts from 0
			// expand nodes which level <= parameter

		}, {
			key: 'expandTo',
			value: function expandTo(nodeLevel, animation) {
				var _this8 = this;

				this.$me().find('li').each(function (index, dom) {
					var node = (0, _nComponent.$)(dom);
					var level = node.attr('data-node-level');
					if (level <= nodeLevel) {
						_this8.expandNode(node, animation);
					} else {
						_this8.collapseNode(node, animation);
					}
				});
			}
		}, {
			key: 'expandAll',
			value: function expandAll() {
				this.expandTo(9999);
			}
		}, {
			key: 'emitNodeAsExpand',
			value: function emitNodeAsExpand(node) {
				var nodeId = node.attr('data-node-id');
				if (!this.isNodeExpanded(node.attr('data-node-level'), nodeId)) {
					this.state.expandStatus.push(nodeId);
				}
			}
		}, {
			key: 'expandNode',
			value: function expandNode(node, animation) {
				var _this9 = this;

				var children = node.children('ul');
				if (children.length > 0) {
					if (!children.is(':visible')) {
						this.emitNodeAsExpand(node);
						if (animation === false) {
							node.addClass('n-tree-node-expanded').removeClass('n-tree-node-collapsed');
							this.nodeExpandChanged(node, true);
						} else {
							node.addClass('n-tree-node-onexpand');
							children.slideDown(300, function () {
								node.addClass('n-tree-node-expanded').removeClass('n-tree-node-collapsed n-tree-node-onexpand');
								children.css('display', '');
								_this9.nodeExpandChanged(node, true);
							});
						}
					}
				}
			}
			// collapse nodes which level > parameter

		}, {
			key: 'collapseTo',
			value: function collapseTo(nodeLevel, animation) {
				var _this10 = this;

				this.$me().find('li').each(function (index, dom) {
					var node = (0, _nComponent.$)(dom);
					var level = node.attr('data-node-level');
					if (level > nodeLevel) {
						_this10.collapseNode(node, animation);
					}
				});
			}
		}, {
			key: 'collapseAll',
			value: function collapseAll() {
				this.collapseTo(-1);
			}
		}, {
			key: 'emitNodeAsCollapse',
			value: function emitNodeAsCollapse(node) {
				var nodeId = node.attr('data-node-id');
				var index = this.state.expandStatus.indexOf(nodeId);
				if (index != -1) {
					this.state.expandStatus.splice(index, 1);
				}
			}
		}, {
			key: 'collapseNode',
			value: function collapseNode(node, animation) {
				var _this11 = this;

				var children = node.children('ul');
				if (children.length > 0) {
					if (children.is(':visible')) {
						this.emitNodeAsCollapse(node);
						if (animation === false) {
							node.addClass('n-tree-node-collapsed').removeClass('n-tree-node-expanded');
							this.nodeExpandChanged(node, false);
						} else {
							children.slideUp(300, function () {
								node.addClass('n-tree-node-collapsed').removeClass('n-tree-node-expanded');
								children.css('display', '');
								_this11.nodeExpandChanged(node, false);
							});
						}
					}
				}
			}
		}, {
			key: 'toggleNodeExpand',
			value: function toggleNodeExpand(node, evt) {
				var _this12 = this;

				var children = node.children('ul');
				if (children.length > 0) {
					evt.preventDefault();
					if (children.is(':visible')) {
						children.slideUp(300, function () {
							node.addClass('n-tree-node-collapsed').removeClass('n-tree-node-expanded');
							children.css('display', '');
							_this12.nodeExpandChanged(node, false);
						});
					} else {
						node.addClass('n-tree-node-onexpand');
						children.slideDown(300, function () {
							node.addClass('n-tree-node-expanded').removeClass('n-tree-node-collapsed n-tree-node-onexpand');
							children.css('display', '');
							_this12.nodeExpandChanged(node, true);
						});
					}
				}
			}
		}, {
			key: 'onItemSpaceKeyDown',
			value: function onItemSpaceKeyDown(evt) {
				var target = (0, _nComponent.$)(evt.target);
				var prev = target.prev();
				if (target[0].tagName === 'SPAN' && prev.hasClass('n-check')) {
					evt.preventDefault();
					var id = target.parent().attr('data-node-id');
					this.onItemCheckChanged({
						id: id
					}, !prev.hasClass('n-checked'));
				}
			}
		}, {
			key: 'onItemLeftArrowKeyDown',
			value: function onItemLeftArrowKeyDown(evt) {
				var target = (0, _nComponent.$)(evt.target);
				var children = target.siblings('ul');
				if (children.length > 0 && children.is(':visible')) {
					// has children and expanded now
					// collapse it
					this.toggleNodeExpand((0, _nComponent.$)(evt.target).closest('li'), evt);
				} else {
					// focus parent node
					var parentNode = target.closest('ul').parent();
					if (parentNode[0].tagName === 'LI') {
						evt.preventDefault();
						this.focusNode(parentNode);
					}
				}
			}
		}, {
			key: 'onItemRightArrowKeyDown',
			value: function onItemRightArrowKeyDown(evt) {
				var target = (0, _nComponent.$)(evt.target);
				var children = target.siblings('ul');
				if (children.length > 0 && !children.is(':visible')) {
					// has children and collapsed now
					// expand it
					this.toggleNodeExpand((0, _nComponent.$)(evt.target).closest('li'), evt);
				} else if (children.length > 0) {
					evt.preventDefault();
					// already expanded, focus the first child
					this.focusNode(children.children('li').first());
				}
			}
		}, {
			key: 'onItemUpArrowKeyDown',
			value: function onItemUpArrowKeyDown(evt) {
				var target = (0, _nComponent.$)(evt.target);
				var node = target.closest('li');
				var previousNode = node.prev();
				if (previousNode.length === 0) {
					// the first node of parent
					// parent is ul, parent's parent is li (if there has) or a div
					var parentNode = node.parent().parent();
					if (parentNode[0].tagName === 'LI') {
						// has parent node, focus it
						evt.preventDefault();
						this.focusNode(parentNode);
					}
				} else {
					// find the nearest visible node and focus it, no matter where it is
					var startNode = previousNode;
					while (true) {
						var children = startNode.children('ul');
						if (children.length == 0 || !children.is(':visible')) {
							// no child or collapsed, focus previous node
							evt.preventDefault();
							this.focusNode(startNode);
							break;
						} else {
							startNode = children.children('li').last();
						}
					}
				}
			}
		}, {
			key: 'onItemDownArrowKeyDown',
			value: function onItemDownArrowKeyDown(evt) {
				var target = (0, _nComponent.$)(evt.target);
				var children = target.siblings('ul');
				if (children.length > 0 && children.is(':visible')) {
					// has children and expanded now
					// focus the first child
					evt.preventDefault();
					this.focusNode(children.children('li').first());
				} else {
					// no child, find the next visible node
					var startNode = target.closest('li');
					while (true) {
						var nextNode = startNode.next();
						if (nextNode.length === 0) {
							// find parent's next
							// parent is ul, parent's parent is li (if there has) or a div
							var parentNode = startNode.parent().parent();
							if (parentNode[0].tagName === 'LI') {
								startNode = parentNode;
							} else {
								// reach root or top level anyway
								break;
							}
						} else {
							evt.preventDefault();
							this.focusNode(nextNode);
							break;
						}
					}
				}
			}
		}]);

		return NTree;
	}((0, _nComponent.NCodeTableComponent)(_nComponent.NComponent));

	NTree.ROOT_ID = '-root';


	_nComponent.Envs.COMPONENT_TYPES.TREE = { type: 'n-tree', label: true };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.TREE.type, function (options) {
		return _nComponent.React.createElement(NTree, options);
	});

	exports.NTree = NTree;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.NDialogUtil = exports.NDialog = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nComponent = __webpack_require__(5);

	Object.keys(_nComponent).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function () {
				return _nComponent[key];
			}
		});
	});

	var _nPanel = __webpack_require__(22);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NDialog = function (_NComponent) {
		_inherits(NDialog, _NComponent);

		function NDialog() {
			_classCallCheck(this, NDialog);

			return _possibleConstructorReturn(this, (NDialog.__proto__ || Object.getPrototypeOf(NDialog)).apply(this, arguments));
		}

		_createClass(NDialog, [{
			key: 'renderDialogContent',
			value: function renderDialogContent() {
				var layout = _nComponent.Envs.deepMergeTo({}, {
					comp: {
						type: _nComponent.Envs.COMPONENT_TYPES.PANEL
					}
				}, this.getContentLayout());
				return _nComponent.React.createElement(
					'div',
					{ className: 'n-dialog-content' },
					this.renderInternalComponent(layout)
				);
			}
		}, {
			key: 'renderInNormal',
			value: function renderInNormal() {
				return _nComponent.React.createElement(
					'div',
					{ className: this.getComponentStyle(),
						ref: 'me' },
					this.renderDialogContent()
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-dialog';
			}
		}, {
			key: 'getContentLayout',
			value: function getContentLayout() {
				return this.getLayoutOptionValue('content');
			}
		}]);

		return NDialog;
	}(_nComponent.NComponent);

	var NDialogBackdrop = function (_NWidget) {
		_inherits(NDialogBackdrop, _NWidget);

		function NDialogBackdrop() {
			var _ref;

			var _temp, _this2, _ret;

			_classCallCheck(this, NDialogBackdrop);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = NDialogBackdrop.__proto__ || Object.getPrototypeOf(NDialogBackdrop)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {}, _temp), _possibleConstructorReturn(_this2, _ret);
		}

		_createClass(NDialogBackdrop, [{
			key: 'render',
			value: function render() {
				var className = (0, _nComponent.classnames)('n-dialog-backdrop', {
					'n-dialog-show': this.state.show
				});
				return _nComponent.React.createElement(
					'div',
					{ className: className,
						ref: 'me' },
					_nComponent.React.createElement(NDialog, _extends({}, this.props.dialogOptions, {
						backdrop: this,
						ref: 'dialog' }))
				);
			}
		}, {
			key: 'isShown',
			value: function isShown() {
				return this.state.show;
			}
		}, {
			key: 'getDialogId',
			value: function getDialogId() {
				if (this.state.id == null) {
					this.state.id = Math.floor(Math.random() * 1000000);
				}
				return this.state.id;
			}
		}, {
			key: 'show',
			value: function show() {
				(0, _nComponent.$)('body').addClass('n-dialog-open-' + this.getDialogId());
				this.setState({ show: true });
			}
		}, {
			key: 'hide',
			value: function hide() {
				var _this3 = this;

				this.setState({ show: false });
				_nComponent.Envs.transitionend({
					target: this.$me(),
					handler: function handler() {
						(0, _nComponent.$)('body').removeClass('n-dialog-open-' + _this3.getDialogId());
					}
				});
			}
		}]);

		return NDialogBackdrop;
	}(_nComponent.NWidget);

	var NDialogUtil = function () {
		function NDialogUtil() {
			_classCallCheck(this, NDialogUtil);
		}

		_createClass(NDialogUtil, null, [{
			key: 'createDialog',
			value: function createDialog(options) {
				var container = (0, _nComponent.$)('<div />');
				var dialog = _nComponent.ReactDOM.render(_nComponent.React.createElement(NDialogBackdrop, { dialogOptions: options }), container[0]);
				(0, _nComponent.$)('body').append(container);
				return dialog;
			}
		}]);

		return NDialogUtil;
	}();

	_nComponent.Envs.COMPONENT_TYPES.DIALOG = { type: 'n-dialog', label: true, error: true };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.DIALOG.type, function (options) {
		return _nComponent.React.createElement(NDialog, options);
	});

	exports.NDialog = NDialog;
	exports.NDialogUtil = NDialogUtil;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.NForm = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nComponent = __webpack_require__(5);

	Object.keys(_nComponent).forEach(function (key) {
		if (key === "default" || key === "__esModule") return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _nComponent[key];
			}
		});
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NForm = function (_NContainer) {
		_inherits(NForm, _NContainer);

		function NForm() {
			_classCallCheck(this, NForm);

			return _possibleConstructorReturn(this, (NForm.__proto__ || Object.getPrototypeOf(NForm)).apply(this, arguments));
		}

		_createClass(NForm, [{
			key: 'renderInNormal',
			value: function renderInNormal() {
				return _nComponent.React.createElement(
					'div',
					{ className: this.getComponentStyle(),
						ref: 'me' },
					this.renderLeadingDOMChildren(),
					this.renderLeadingChildren(),
					this.renderChildren(),
					this.renderTailingChildren(),
					this.renderTailingDOMChildren()
				);
			}
		}, {
			key: 'getComponentClassName',
			value: function getComponentClassName() {
				return 'n-form';
			}
		}]);

		return NForm;
	}(_nComponent.NContainer);

	_nComponent.Envs.COMPONENT_TYPES.FORM = { type: 'n-form', label: false, popover: false, error: false };
	_nComponent.Envs.setRenderer(_nComponent.Envs.COMPONENT_TYPES.FORM.type, function (options) {
		return _nComponent.React.createElement(NForm, options);
	});

	exports.NForm = NForm;

/***/ }
/******/ ]);