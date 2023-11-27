import{dxFlyoutTagName as t}from"./flyout-8f9000a3.js";import{D as e}from"./popupportal-f3f2a991.js";import{d as o}from"./events-interseptor-e0b24870.js";import{a as r,b as s,v as i,w as p}from"./popup-b93ffcba.js";import{_ as m}from"./_tslib-6e8ca86b.js";import{e as a}from"./property-d3853089.js";import{e as n}from"./custom-element-267f9a21.js";import{s as d,i as l,y as c}from"./lit-element-70cf14f4.js";import"./point-e4ec110e.js";import"./layouthelper-2d7ade10.js";import"./constants-58283e53.js";import"./query-44b9267f.js";import"./rafaction-bba7928b.js";import"./transformhelper-ebad0156.js";import"./positiontracker-983cbb37.js";import"./branch-bf06b0d2.js";import"./capturemanager-9ed681a0.js";import"./eventhelper-8570b930.js";import"./logicaltreehelper-60b7eecb.js";import"./portal-701320f3.js";import"./data-qa-utils-8be7c726.js";import"./constants-058ebb50.js";import"./dx-html-element-pointer-events-helper-e822ee39.js";import"./dom-e194973c.js";import"./browser-d96520d8.js";import"./devices-9f03a976.js";import"./dx-ui-element-cb17a135.js";import"./lit-element-base-7a85dca5.js";import"./nameof-factory-64d95f5b.js";import"./custom-events-helper-e7f279d3.js";import"./key-758f2153.js";import"./dx-keyboard-navigator-c333dad6.js";import"./focus-utils-24f244e4.js";import"./touch-abb6941f.js";import"./disposable-d2c2d283.js";import"./dom-utils-55c8e5bb.js";import"./css-classes-f3f8ed66.js";const f="dxbl-flyout-root";let j=class extends d{constructor(){super(...arguments),this.dropOpposite=!1,this.dropDirection=r.Near,this.dropAlignment=s.bottom}static get styles(){return l`
            :host {
                display: flex;
                flex: 1 1 auto;
                flex-direction: column;
                align-items: stretch;
                justify-items: stretch;
                min-height: 0;
            }
        }`}render(){return c`
            <slot></slot>
            <slot name="arrow"/>
        `}};m([a({type:Object,attribute:"drop-opposite"})],j.prototype,"dropOpposite",void 0),m([a({type:String,attribute:"drop-direction"})],j.prototype,"dropDirection",void 0),m([a({type:String,attribute:"drop-alignment"})],j.prototype,"dropAlignment",void 0),j=m([n(f)],j);function b(t){if(!t)throw new Error("failed");return t}const u={getReference:b,registeredComponents:[t,i,f,e,o,p]};export{u as default,b as getReference};
