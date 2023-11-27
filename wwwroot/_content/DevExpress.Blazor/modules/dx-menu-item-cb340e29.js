import{_ as e}from"./_tslib-6e8ca86b.js";import{S as t}from"./single-slot-element-base-9006911a.js";import{a as n,M as s}from"./constants-3937401e.js";import{C as o}from"./custom-events-helper-e7f279d3.js";import{e as r}from"./property-d3853089.js";import{e as a}from"./custom-element-267f9a21.js";class i extends CustomEvent{constructor(e){super(i.eventName,{bubbles:!0,composed:!0,detail:new c(e)})}}i.eventName=`${n.menuComponentName}.collapse-changed`;class c{constructor(e){this.collapsed=e}}o.register(i.eventName,(e=>e.detail));class m extends CustomEvent{constructor(e){super(m.eventName,{bubbles:!0,composed:!0,detail:e})}}m.eventName=`${n.menuItemComponentName}.connected`;class u extends CustomEvent{constructor(e){super(u.eventName,{bubbles:!0,composed:!0,detail:e})}}u.eventName=`${n.menuItemComponentName}.disconnected`;let l=class extends t{constructor(){super(),this._prevActiveElement=null,this.menu=null,this.adaptivePriority=-1,this.canCrop=!1,this.isVisible=!1,this._onButtonFocusInHandler=this.onButtonFocusIn.bind(this),this.subscribeToEvents()}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new m(this))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new u(this))}isDropDownItem(e){return e.classList.contains(s.dropdownItem)}subscribeToEvents(){this.addEventListener("pointerdown",(e=>{e.target instanceof HTMLElement&&this.isDropDownItem(e.target)&&(document.activeElement instanceof HTMLElement&&(this._prevActiveElement=document.activeElement),e.target.addEventListener("focusin",this._onButtonFocusInHandler))}))}onButtonFocusIn(e){e.currentTarget&&(e.currentTarget.removeEventListener("focusin",this._onButtonFocusInHandler),this._prevActiveElement?this._prevActiveElement.focus():e.currentTarget.blur())}};e([r({type:Number,attribute:"adaptive-priority"})],l.prototype,"adaptivePriority",void 0),e([r({type:Boolean,attribute:"can-crop"})],l.prototype,"canCrop",void 0),l=e([a(n.menuItemComponentName)],l);const p=Object.freeze({__proto__:null,get DxMenuItem(){return l},default:{loadModule:function(){}}});export{l as D,u as M,m as a,i as b,p as d};
