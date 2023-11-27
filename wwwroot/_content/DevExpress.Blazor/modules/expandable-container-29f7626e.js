import{_ as t}from"./_tslib-6e8ca86b.js";import{x as e,R as i,c as s}from"./dom-utils-55c8e5bb.js";import{d as n}from"./dom-e194973c.js";import{E as a}from"./eventRegister-fb9b0e47.js";import{S as o}from"./single-slot-element-base-9006911a.js";import{e as l}from"./property-d3853089.js";import{t as h}from"./state-949f2642.js";import{e as r}from"./custom-element-267f9a21.js";import"./browser-d96520d8.js";import"./css-classes-f3f8ed66.js";import"./data-qa-utils-8be7c726.js";import"./dx-ui-element-cb17a135.js";import"./lit-element-base-7a85dca5.js";import"./lit-element-70cf14f4.js";import"./logicaltreehelper-60b7eecb.js";import"./layouthelper-2d7ade10.js";import"./point-e4ec110e.js";import"./constants-58283e53.js";const d="is-animating",m="data-items-container";var p;!function(t){t.None="None",t.Slide="Slide"}(p||(p={}));let c=class extends o{constructor(){super(),this.isAnimating=!1,this.mutationObserver=null,this._expandedState="False",this.animationType=p.None,this.expanded=!1,this.events=new a(this),this.firstExpandedContentRender=!0,this.isRendered=!1,this._expandedState="False"}connectedCallback(){super.connectedCallback(),this.isRendered=!0}disconnectedCallback(){super.disconnectedCallback(),this.isRendered=!1}set expandedState(t){const e=this._expandedState;this._expandedState=t,this.expanded="True"===t,this.requestUpdate("expandedState",e),this.isRendered||"True"!==t?this.onExpandedChanged():this.notifyActualExpandedChanged()}get expandedState(){return this._expandedState}onExpandedChanged(){this.applyExpandedStateToElements()}notifyActualExpandedChanged(){this.dispatchEvent(new Event("change",{bubbles:!0}))}get value(){return this.expandedState}applyExpandedStateToElements(){var t,e;const i=this.expanded;if(this.animationType===p.None)return this.notifyActualExpandedChanged(),void this.setContainerElementVisibility(i);if(i&&0===this.childElementCount)return void this.waitForContent(this);i&&0!==this.childElementCount&&null!==this.firstElementChild&&(this.firstElementChild.hasAttribute(m)&&0!==this.firstElementChild.childElementCount||!this.firstElementChild.hasAttribute(m))&&(null===(t=this.mutationObserver)||void 0===t||t.disconnect());const s=this.token,n=i&&!s?0:this.getContainerStartHeight(i);this.toggleAttribute(d,!1),s&&(this.style.maxHeight=n+"px");const a=this.getContainerEndHeight(i);if(null===(e=this.token)||void 0===e||e.dispose(),this.token=null,this.prepareElementsForAnimation(i,0,!!s),n!==a){const t=()=>{this.onAnimationComplete(),this.token.dispose(),this.token=null};this.startAnimation(n,a,(()=>{t()}))}else this.onAnimationComplete()}waitForContent(t){var e;null===(e=this.mutationObserver)||void 0===e||e.disconnect(),this.mutationObserver=new MutationObserver((t=>{this.applyExpandedStateToElements()})),this.mutationObserver.observe(t,{childList:!0,subtree:!0})}setContainerElementVisibility(t){this.setElementVisibility(t)}setElementVisibility(t){t?(this.style.display="",this.style.height=""):(this.style.display="none",this.style.height="0px")}getContainerStartHeight(t){return t?this.getClearClientHeight():this.offsetHeight}getContainerEndHeight(t){if(!t)return 0;const e=this.getClearClientHeight(),i=this.getElementVisibility(!1);this.style.maxHeight="",this.setElementVisibility(!0);const s=this.getClearClientHeight();return this.setElementVisibility(i),this.style.maxHeight=e+"px",s}prepareElementsForAnimation(t,e,i){if(this.style.overflow="hidden",t)this.setContainerElementVisibility(!0),this.style.maxHeight=(i?0:this.getClearClientHeight())+"px";else{const t=this.offsetHeight+e;t>=0&&this.setOffsetHeight(t,null)}}getClearClientHeight(){return this.offsetHeight}getElementVisibility(t){if(t){const t=n.DomUtils.getCurrentStyle(this);if(t)return"none"!==t.display}return"none"!==this.style.display}setOffsetHeight(t,i){i||(i=n.DomUtils.getCurrentStyle(this));let s=t-n.DomUtils.pxToInt(i.marginTop)-n.DomUtils.pxToInt(i.marginBottom);s-=e(this,i),s>-1&&(this.style.maxHeight=s+"px")}startAnimation(t,e,s){this.isAnimating=!0,t!==e?(this.token=this.events.attachEvent(this,"transitionend",s),i((()=>{this.isAnimating&&(this.toggleAttribute(d,!0),this.style.maxHeight=e+"px")}))):s()}onAnimationComplete(){this.toggleAttribute(d,!1),this.setContainerElementVisibility(this.expanded),s((()=>{this.style.overflow="",this.style.maxHeight=""})),this.notifyActualExpandedChanged(),this.checkChildContent()}checkChildContent(){if(!this.expanded&&0!==this.childElementCount&&null!==this.firstElementChild&&this.firstElementChild.hasAttribute(m)){const t=this.querySelectorAll(" ul[data-items-container]");if(!t)return;for(let e=0;e<t.length;e+=1)t[e].style.overflowY="hidden"}}};t([l({type:String,attribute:"expanded-state"})],c.prototype,"expandedState",null),t([l({type:p,attribute:"animation-type"})],c.prototype,"animationType",void 0),t([h()],c.prototype,"expanded",void 0),c=t([r("dxbl-expandable-container")],c);const u={loadModule:function(){}};export{p as AnimationType,c as ExpandableContainer,u as default};
