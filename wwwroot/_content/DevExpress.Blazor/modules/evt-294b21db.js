import{c as e,g as t}from"./browser-d96520d8.js";import{c as r,d as o,b as n}from"./dom-e194973c.js";import{t as i}from"./touch-abb6941f.js";var c=e((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EvtUtils=void 0;var c=function(){function e(){}return e.preventEvent=function(e){e.cancelable&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},e.getEventSource=function(t){return r.isDefined(t)?e.getEventSourceCore(t):null},e.getEventSourceByPosition=function(t){if(!r.isDefined(t))return null;if(!document.elementFromPoint)return e.getEventSourceCore(t);var n=e.getEventX(t)-(e.clientEventRequiresDocScrollCorrection()?o.DomUtils.getDocumentScrollLeft():0),i=e.getEventY(t)-(e.clientEventRequiresDocScrollCorrection()?o.DomUtils.getDocumentScrollTop():0);return void 0===n||void 0===i?e.getEventSourceCore(t):document.elementFromPoint(n,i)},e.getEventSourceCore=function(e){return e.srcElement?e.srcElement:e.target},e.getMouseWheelEventName=function(){return n.Browser.Safari?"mousewheel":n.Browser.NetscapeFamily&&n.Browser.MajorVersion<17?"DOMMouseScroll":"wheel"},e.isLeftButtonPressed=function(t){return!!i.TouchUtils.isTouchEvent(t)||!!(t=n.Browser.IE&&r.isDefined(event)?event:t)&&(n.Browser.IE&&n.Browser.Version<11?!!n.Browser.MSTouchUI||t.button%2==1:n.Browser.WebKitFamily?"pointermove"===t.type||"pointerenter"===t.type||"pointerleave"===t.type?1===t.buttons:1===t.which:n.Browser.NetscapeFamily||n.Browser.Edge||n.Browser.IE&&n.Browser.Version>=11?e.isMoveEventName(t.type)?1===t.buttons:1===t.which:!n.Browser.Opera||0===t.button)},e.isMoveEventName=function(t){return t===i.TouchUtils.touchMouseMoveEventName||t===e.getMoveEventName()},e.getMoveEventName=function(){return window.PointerEvent?"pointermove":n.Browser.TouchUI?"touchmove":"mousemove"},e.preventEventAndBubble=function(t){e.preventEvent(t),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0},e.clientEventRequiresDocScrollCorrection=function(){return n.Browser.AndroidDefaultBrowser||n.Browser.AndroidChromeBrowser||!(n.Browser.Safari&&n.Browser.Version<3||n.Browser.MacOSMobilePlatform&&n.Browser.Version<5.1)},e.getEventX=function(t){return i.TouchUtils.isTouchEvent(t)?i.TouchUtils.getEventX(t):t.clientX+(e.clientEventRequiresDocScrollCorrection()?o.DomUtils.getDocumentScrollLeft():0)},e.getEventY=function(t){return i.TouchUtils.isTouchEvent(t)?i.TouchUtils.getEventY(t):t.clientY+(e.clientEventRequiresDocScrollCorrection()?o.DomUtils.getDocumentScrollTop():0)},e.cancelBubble=function(e){e.cancelBubble=!0},e.getWheelDelta=function(e){var t;return t=n.Browser.NetscapeFamily&&n.Browser.MajorVersion<17?-e.detail:n.Browser.Safari?e.wheelDelta:-e.deltaY,n.Browser.Opera&&n.Browser.Version<9&&(t=-t),t},e}();t.EvtUtils=c}));t(c);export{c as e};