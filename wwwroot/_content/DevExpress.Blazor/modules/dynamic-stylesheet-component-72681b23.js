import{c as e}from"./dom-utils-55c8e5bb.js";import{defineDxCustomElement as t}from"./define-custom-element-ee3a9585.js";import"./dom-e194973c.js";import"./browser-d96520d8.js";import"./_tslib-6e8ca86b.js";import"./css-classes-f3f8ed66.js";const s=document.createElement("style");s.type="text/css";class c extends HTMLElement{constructor(){super(),this.resourceStyleElement=s.cloneNode()}static get observedAttributes(){return["css"]}attributeChangedCallback(t,s,c){"css"===t&&async function(t,s){t&&await e((()=>s.innerHTML=t))}(c,this.resourceStyleElement)}connectedCallback(){this.resourceStyleElement.isConnected||document.head.appendChild(this.resourceStyleElement)}disconnectedCallback(){this.resourceStyleElement.isConnected&&this.resourceStyleElement.remove()}}t(customElements,"dxbl-dynamic-stylesheet",c);export{c as default};
