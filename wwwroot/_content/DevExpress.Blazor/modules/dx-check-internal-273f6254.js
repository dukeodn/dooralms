import{D as e}from"./dx-html-element-base-22366177.js";import"./data-qa-utils-8be7c726.js";import"./dx-html-element-pointer-events-helper-e822ee39.js";import"./dom-e194973c.js";import"./browser-d96520d8.js";import"./_tslib-6e8ca86b.js";import"./eventhelper-8570b930.js";import"./constants-58283e53.js";import"./devices-9f03a976.js";var t;!function(e){e[e.Indeterminate=0]="Indeterminate",e[e.Checked=1]="Checked",e[e.Unchecked=2]="Unchecked"}(t||(t={}));const n="dxbl-check";var i;!function(e){e.checkState="check-state",e.allowIndeterminateStateByClick="allow-indeterminate-state-by-click",e.isReadOnly="is-read-only"}(i||(i={}));class a extends e{constructor(){super(...arguments),this._checkState=t.Unchecked,this._allowIndeterminateStateByClick=!1,this._isReadOnly=!1,this.boundOnInputChangeHandler=this.onInputChange.bind(this),this.boundOnInputClickHandler=this.onInputClick.bind(this)}get checkState(){return this._checkState}set checkState(e){this._checkState=e,this.applyCheckStateToInputElement()}get allowIndeterminateStateByClick(){return this._allowIndeterminateStateByClick}set allowIndeterminateStateByClick(e){this._allowIndeterminateStateByClick=e}get isReadOnly(){return this._isReadOnly}set isReadOnly(e){this._isReadOnly=e}initializeComponent(){super.initializeComponent(),this.getInputElement().addEventListener("change",this.boundOnInputChangeHandler),this.getInputElement().addEventListener("click",this.boundOnInputClickHandler)}disposeComponent(){var e,t;null===(e=this.getInputElement())||void 0===e||e.removeEventListener("change",this.boundOnInputChangeHandler),null===(t=this.getInputElement())||void 0===t||t.removeEventListener("click",this.boundOnInputClickHandler),super.disposeComponent()}getInputElement(){return this.querySelector("input")}get value(){return this.checkState===t.Indeterminate?"":Boolean(this.checkState===t.Checked).toString()}getNextCheckState(){let e=this.checkState+1;return e>t.Unchecked&&(e=this.allowIndeterminateStateByClick?t.Indeterminate:t.Checked),e}onInputChange(e){this.isReadOnly?e.stopImmediatePropagation():(this.checkState=this.getNextCheckState(),this.applyCheckStateToInputElement(),this.dispatchEvent(new Event("change",{bubbles:!0})))}onInputClick(e){this.isReadOnly&&e.preventDefault()}applyCheckStateToInputElement(){const e=this.getInputElement();e&&(e.indeterminate=this.checkState===t.Indeterminate,e.checked=this.checkState===t.Checked)}static get observedAttributes(){return[i.checkState,i.allowIndeterminateStateByClick,i.isReadOnly]}attributeChangedCallback(e,t,n){switch(e){case i.checkState:this.checkState=Number(n);break;case i.allowIndeterminateStateByClick:this.allowIndeterminateStateByClick=null!==n;break;case i.isReadOnly:this.isReadOnly=null!==n}}}customElements.define(n,a);const s={loadModule:function(){}};export{i as CheckInternalAttributes,t as CheckState,n as DxCheckBoxTagName,a as DxCheckInternal,s as default};
