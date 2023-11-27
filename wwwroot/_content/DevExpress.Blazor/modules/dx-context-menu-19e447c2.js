import{_ as e}from"./_tslib-6e8ca86b.js";import{K as t,D as s,a}from"./dx-keyboard-navigator-c333dad6.js";import{S as o}from"./single-slot-element-base-9006911a.js";import{k as i}from"./key-758f2153.js";import{h as n,M as r,P as d,b as l,c,d as m}from"./dropdown-keyboard-strategy-ad36492b.js";import{x as p}from"./popup-b93ffcba.js";import{s as h,f as u}from"./dom-utils-55c8e5bb.js";import{e as b}from"./custom-element-267f9a21.js";import"./eventhelper-8570b930.js";import"./layouthelper-2d7ade10.js";import"./point-e4ec110e.js";import"./constants-58283e53.js";import"./focus-utils-24f244e4.js";import"./dom-e194973c.js";import"./browser-d96520d8.js";import"./touch-abb6941f.js";import"./disposable-d2c2d283.js";import"./logicaltreehelper-60b7eecb.js";import"./custom-events-helper-e7f279d3.js";import"./data-qa-utils-8be7c726.js";import"./dx-ui-element-cb17a135.js";import"./lit-element-base-7a85dca5.js";import"./lit-element-70cf14f4.js";import"./property-d3853089.js";import"./constants-3937401e.js";import"./rafaction-bba7928b.js";import"./transformhelper-ebad0156.js";import"./positiontracker-983cbb37.js";import"./branch-bf06b0d2.js";import"./capturemanager-9ed681a0.js";import"./portal-701320f3.js";import"./constants-058ebb50.js";import"./dx-html-element-pointer-events-helper-e822ee39.js";import"./devices-9f03a976.js";import"./nameof-factory-64d95f5b.js";import"./css-classes-f3f8ed66.js";class y{static focus(e){this.setTabIndex(e),e.focus()}static setTabIndex(e){e.tabIndex<0&&h(e,"tabIndex","0")}static removeTabIndex(e){e.tabIndex>=0&&h(e,"tabIndex")}}class v extends d{constructor(e,t,s){super(e,t),this._parentStrategy=s,this.selectedItemIndex=-1}get parentStrategy(){return this._parentStrategy}activate(){this.selectedItemIndex>=0&&super.activate()}updateSelectedItemByIndex(e){e>=0&&super.updateSelectedItemByIndex(e)}queryItems(){return this.queryItemsBySelector(".dxbl-context-menu-item, .dxbl-context-menu-template")}onActiveStateChanged(e){e||(this.selectedItemElement&&y.removeTabIndex(this.selectedItemElement),y.removeTabIndex(this.targetElement))}doAction(e){this.doClick(e),this.selectedItemElement&&n(this.selectedItemElement)&&this.openSubMenu(r.First)}async openSubMenu(e){this.requestSubMenuOpen();const t=await this.waitSubMenuShown();e===r.Last?t.focusLastItem():t.focusFirstItem()}handlePopupShown(){this.parentStrategy.onSubMenuShown(this),this.focusContainer()}handlePopupClosed(){this.parentStrategy.onSubMenuClosed(this)}onSubMenuClosed(e){super.onSubMenuClosed(e),this.focusContainer()}focusContainer(){const e=t.findFocusableElements(this.targetElement);e.length>0&&u(e[0])}createSubMenuStrategy(e,t){return new g(e,t,this)}}class f extends v{closeSelf(){return!!n(this.selectedItemElement)&&(this.openSubMenu(r.Last),!0)}}class g extends v{closeSelf(){const e=this.targetElement.placementTargetElement;return!!e&&(e.dispatchEvent(new l(c.Collapse)),this.parentStrategy.updateSelectedItemByChildElement(e,!1),this.parentStrategy.focusSelectedItem(),!0)}}class S extends t{constructor(e,t){super(e,t),this._prevActiveElement=null,this.boundHandlePopupKeyboardStrategyCreating=this.handlePopupKeyboardStrategyCreating.bind(this),this.targetElement.addEventListener(p.eventName,this.boundHandlePopupKeyboardStrategyCreating)}queryItems(){return this.queryItemsBySelector(".dxbl-dropdown-dialog")}onSubMenuShown(e){this._prevActiveElement||(this._prevActiveElement=document.activeElement)}onSubMenuClosed(e){m(e.targetElement)&&this.tryRestoreFocusedElement()}handlePopupKeyboardStrategyCreating(e){e.detail.factory={create:(e,t)=>new f(e,t,this)},e.stopPropagation()}handleKeyDown(e){return i.KeyUtils.getEventKeyCode(e)!==i.KeyCode.Tab||this.nestedContentSelected?super.handleKeyDown(e):(this.performShortcutEvent(e),e.shiftKey?this.leaveBackward():this.leaveForward(),!0)}tryRestoreFocusedElement(){this._prevActiveElement&&this._prevActiveElement instanceof HTMLElement&&(this._prevActiveElement.focus(),this._prevActiveElement=null)}}let j=class extends o{constructor(){super(),this._keyboardNavigator=null,this.bindedOnChanged=this.onChanged.bind(this),this._observer=new MutationObserver(this.bindedOnChanged)}onChanged(e,t){null==e||e.forEach((e=>{e.addedNodes.forEach((e=>{e instanceof s&&(this._keyboardNavigator=e,this.initializeKeyboardNavigation())}))}))}connectedCallback(){this._keyboardNavigator=this.querySelector(a),this._keyboardNavigator?this.initializeKeyboardNavigation():this._observer.observe(this,{childList:!0})}initializeKeyboardNavigation(){this._keyboardNavigator&&!this._keyboardNavigator.initialized&&this._keyboardNavigator.initialize(this,new S(this._keyboardNavigator,this))}disconnectedCallback(){var e;this._observer.disconnect(),null===(e=this._keyboardNavigator)||void 0===e||e.disposeComponent()}};j=e([b("dxbl-context-menu")],j);const x={loadModule:function(){}};export{j as DxContextMenu,x as default};
