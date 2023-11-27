import{_ as t}from"./_tslib-6e8ca86b.js";import{D as e,B as i,c as r,a as s,b as a,d as o,e as d}from"./popup-b93ffcba.js";import{ThumbDragStartedEvent as h,ThumbDragDeltaEvent as n,ThumbDragCompletedEvent as l}from"./thumb-1c09cc55.js";import{P as c}from"./point-e4ec110e.js";import{L as p,D as g,R as m,a as u}from"./layouthelper-2d7ade10.js";import{E as b}from"./eventhelper-8570b930.js";import{C as f}from"./custom-events-helper-e7f279d3.js";import{i as v}from"./query-44b9267f.js";import{y as x}from"./lit-element-70cf14f4.js";import{e as y}from"./property-d3853089.js";import{e as D}from"./custom-element-267f9a21.js";import"./rafaction-bba7928b.js";import"./transformhelper-ebad0156.js";import"./positiontracker-983cbb37.js";import"./constants-58283e53.js";import"./branch-bf06b0d2.js";import"./capturemanager-9ed681a0.js";import"./logicaltreehelper-60b7eecb.js";import"./portal-701320f3.js";import"./data-qa-utils-8be7c726.js";import"./constants-058ebb50.js";import"./dx-html-element-pointer-events-helper-e822ee39.js";import"./dom-e194973c.js";import"./browser-d96520d8.js";import"./devices-9f03a976.js";import"./dx-ui-element-cb17a135.js";import"./lit-element-base-7a85dca5.js";import"./nameof-factory-64d95f5b.js";import"./key-758f2153.js";import"./dx-keyboard-navigator-c333dad6.js";import"./focus-utils-24f244e4.js";import"./touch-abb6941f.js";import"./disposable-d2c2d283.js";import"./dom-utils-55c8e5bb.js";import"./css-classes-f3f8ed66.js";const j="dxbl-dropdown",H="data-dropdown-thumb";class S{constructor(t,e){this.width=Math.floor(t),this.height=Math.floor(e)}}class w extends CustomEvent{constructor(t,e){super(w.eventName,{detail:new S(t,e),bubbles:!0,composed:!0,cancelable:!0})}}w.eventName=j+".resizeStarted",f.register(w.eventName,(t=>t.detail));class W extends CustomEvent{constructor(t,e){super(W.eventName,{detail:new S(t,e),bubbles:!0,composed:!0,cancelable:!0})}}W.eventName=j+".resizeCompleted",f.register(W.eventName,(t=>t.detail));class R extends e{constructor(){super(...arguments),this.dragStart=null,this.dragBounds=null,this.dragStartedHandler=this.handleDragStarted.bind(this),this.dragDeltaHandler=this.handleDragDelta.bind(this),this.dragCompletedHandler=this.handleDragCompleted.bind(this),this.dragWidth=0,this.dragHeight=0,this.dragMaxWidth=0,this.dragMaxHeight=0,this.isInDragOperation=!1,this.dragCssStyle=null}get branchType(){return i.DropDown}renderTemplate(){return x`
            <dxbl-branch
                id="branch"
                branch-id="${this.branchId}"
                parent-branch-id="${this.parentBranchId}"
                type="${this.branchType}"
                style="${this.dragCssStyle}">
                <dxbl-dropdown-root
                    id="root"
                    style="${this.rootCssStyle}"
                    ?resizing="${this.resizing}"
                    drop-opposite="${this.actualDropOpposite}"
                    drop-direction="${this.actualDropDirection}"
                    drop-alignment="${this.actualDropAlignment}">
                    ${this.renderDefaultSlot()}
                    ${this.renderAdditionalSlots()}
                    ${this.renderBridgeSlot()}
                </dxbl-dropdown-root>
            </dxbl-branch>
        `}getRootTagName(){return"dxbl-dropdown-root"}connectedCallback(){super.connectedCallback(),this.addEventListener(h.eventName,this.dragStartedHandler),this.addEventListener(n.eventName,this.dragDeltaHandler),this.addEventListener(l.eventName,this.dragCompletedHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(h.eventName,this.dragStartedHandler),this.removeEventListener(n.eventName,this.dragDeltaHandler),this.removeEventListener(l.eventName,this.dragCompletedHandler)}get child(){return this.root}handleDragStarted(t){const e=b.getOriginalSource(t);if(!e)return;if(!e.hasAttribute(H))return;if(!this.child)return;this.lockPlacement(),this.dragStart=new c(t.detail.x,t.detail.y);const i=this.getRestrictBounds(),r=this.getPlacementTargetInterestPoints(this.placement),s=this.actualDropAlignment,a=this.actualDropDirection,o=p.getRelativeElementRect(this.child);this.dragBounds=this.calcResizeRect(i,r,s,a),this.dragMaxWidth=this.dragBounds.width,this.dragMaxHeight=this.dragBounds.height,this.isInDragOperation=!0,this.dragWidth=o.width,this.dragHeight=o.height,this.raiseResizeStarted(this.dragWidth,this.dragHeight)}willUpdate(t){super.willUpdate(t),this.dragCssStyle=this.isInDragOperation?`width: ${g.toPx(this.dragWidth)}; height: ${g.toPx(this.dragHeight)}; max-width: ${g.toPx(this.dragMaxWidth)}; max-height: ${g.toPx(this.dragMaxHeight)};`:null}updated(t){super.updated(t),this.root.offsetWidth<this.root.scrollWidth&&(this.dragWidth=this.root.scrollWidth),this.root.offsetHeight<this.root.scrollHeight&&(this.dragHeight=this.root.scrollHeight)}handleDragDelta(t){const e=b.getOriginalSource(t);if(!e)return;if(!e.hasAttribute(H))return;const i=Math.min(this.dragMaxWidth,this.actualDropDirection===s.Near?t.detail.x-this.offset.x:this.offset.x+this.childSize.width-t.detail.x),o=Math.min(this.dragMaxHeight,this.actualDropAlignment===a.bottom?t.detail.y-this.offset.y:this.offset.y+this.childSize.height-t.detail.y),d=r(this.minWidth,this),h=r(this.minHeight,this);this.dragWidth=d?i>d?i:d:i>0?i:0,this.dragHeight=h?o>h?o:h:o>0?o:0}handleDragCompleted(t){var e,i;const r=b.getOriginalSource(t);r&&r.hasAttribute(H)&&(this.isInDragOperation=!1,this.dragWidth=null!==(e=this.branch.offsetWidth)&&void 0!==e?e:0,this.dragHeight=null!==(i=this.branch.offsetHeight)&&void 0!==i?i:0,this.desiredWidth=g.toPx(this.dragWidth),this.desiredHeight=g.toPx(this.dragHeight),this.unlockPlacement(),this.raiseResizeCompleted(this.dragWidth,this.dragHeight))}calcResizeRect(t,e,i,r){if(r===s.Near){if(i===a.top){return m.intersect(t,u.createFromPoints(e[d.TopLeft],t.topRight))}return m.intersect(t,u.createFromPoints(e[d.BottomLeft],t.bottomRight))}if(i===a.top){return m.intersect(t,u.createFromPoints(e[d.TopRight],t.topLeft))}return m.intersect(t,u.createFromPoints(e[d.BottomRight],t.bottomLeft))}raiseResizeStarted(t,e){this.dispatchEvent(new w(t,e))}raiseResizeCompleted(t,e){this.dispatchEvent(new W(t,e))}calcRenderWidth(){return this.isInDragOperation?null:super.calcRenderWidth()}calcRenderHeight(){return this.isInDragOperation?null:super.calcRenderHeight()}shouldUpdateRootCssStyle(t){return super.shouldUpdateRootCssStyle(t)||t.has("isInDragOperation")||t.has("dragWidth")||t.has("dragHeight")||t.has("dragMaxWidth")||t.has("dragMaxHeight")}createKeyboardNavigationStrategy(){return new o(this.keyboardNavigator,this)}}t([v("#root",!0)],R.prototype,"root",void 0),t([v("#branch")],R.prototype,"branch",void 0),t([y({type:Number,reflect:!1})],R.prototype,"dragWidth",void 0),t([y({type:Number,reflect:!1})],R.prototype,"dragHeight",void 0),t([y({type:Number,reflect:!1})],R.prototype,"dragMaxWidth",void 0),t([y({type:Number,reflect:!1})],R.prototype,"dragMaxHeight",void 0),t([y({type:Boolean,reflect:!1})],R.prototype,"isInDragOperation",void 0),t([y({type:String,reflect:!1})],R.prototype,"dragCssStyle",void 0);let C=class extends R{};function N(t){if(!t)throw new Error("failed");return t}C=t([D(j)],C);const M={getReference:N,dxDropDownTagName:j,DxDropDownBase:R};export{W as DropDownResizeCompletedEvent,w as DropDownResizeStartedEvent,R as DxDropDownBase,M as default,j as dxDropDownTagName,H as dxDropDownThumbAttribute,N as getReference};
