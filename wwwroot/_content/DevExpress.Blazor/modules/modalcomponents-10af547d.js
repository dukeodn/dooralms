import{r as t,s as e,p as o,t as s}from"./popup-b93ffcba.js";import{d as r}from"./constants-058ebb50.js";import{D as i}from"./popupportal-f3f2a991.js";import{_ as a}from"./_tslib-6e8ca86b.js";import{e as n}from"./custom-element-267f9a21.js";import{s as p,y as m}from"./lit-element-70cf14f4.js";import"./layouthelper-2d7ade10.js";import"./point-e4ec110e.js";import"./constants-58283e53.js";import"./rafaction-bba7928b.js";import"./transformhelper-ebad0156.js";import"./positiontracker-983cbb37.js";import"./branch-bf06b0d2.js";import"./property-d3853089.js";import"./capturemanager-9ed681a0.js";import"./eventhelper-8570b930.js";import"./logicaltreehelper-60b7eecb.js";import"./portal-701320f3.js";import"./data-qa-utils-8be7c726.js";import"./dx-html-element-pointer-events-helper-e822ee39.js";import"./dom-e194973c.js";import"./browser-d96520d8.js";import"./devices-9f03a976.js";import"./dx-ui-element-cb17a135.js";import"./lit-element-base-7a85dca5.js";import"./nameof-factory-64d95f5b.js";import"./custom-events-helper-e7f279d3.js";import"./key-758f2153.js";import"./dx-keyboard-navigator-c333dad6.js";import"./focus-utils-24f244e4.js";import"./touch-abb6941f.js";import"./disposable-d2c2d283.js";import"./dom-utils-55c8e5bb.js";import"./css-classes-f3f8ed66.js";const d="dxbl-modal-root";let c=class extends p{constructor(){super(...arguments),this.slotChangedHandler=this.handleSlotChange.bind(this)}render(){return m`
            <slot @slotchange=${this.slotChangedHandler}></slot>
        `}handleSlotChange(o){const s=o.target.assignedNodes().find((e=>e instanceof t)),r=this.closest(e);r&&(s?(r.notifyDialogConnected(s),r.notifyRootConnected()):(r.notifyDialogDisconnected(),r.notifyRootDisconnected()))}};c=a([n(d)],c);const l=[o,s,e,d,r,i];function f(t){if(!t)throw new Error("failed");return t}const j={getReference:f,registeredComponents:l};export{j as default,f as getReference,l as registeredComponents};
