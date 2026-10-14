import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{f as t}from"./iframe-CnOC1nhy.js";import{t as n}from"./public-asset-GRpSZBT6.js";import{n as r,t as i}from"./dist-CSGx4lI8.js";function a(e,t){return e<t?`complete`:e===t?`current`:`upcoming`}function o({size:e}){return(0,u.jsx)(`div`,{className:`relative shrink-0 overflow-hidden`,style:e===`mobile`?{width:114,height:48}:{width:57,height:24},children:(0,u.jsx)(`img`,{src:n(`/onboarding/logo.png`),alt:`Logo`,className:`pointer-events-none absolute top-[-62.5%] left-0 h-[237.5%] w-full max-w-none`})})}function s({step:e,state:t}){return t===`complete`?(0,u.jsx)(`span`,{className:`inline-flex size-6 items-center justify-center rounded-full bg-brand-primary-subtle font-inter text-[12px] font-semibold text-[rgba(37,99,235,0.45)]`,children:e}):t===`current`?(0,u.jsx)(`span`,{className:`inline-flex size-6 items-center justify-center rounded-full bg-brand-primary font-inter text-[12px] leading-4 font-medium text-brand-on-primary shadow-[0_1px_1px_rgba(0,0,0,0.05)]`,children:e}):(0,u.jsx)(`span`,{className:`inline-flex size-6 items-center justify-center rounded-full border-[1.5px] border-[#b8c0cc] bg-white font-inter text-[12px] leading-4 font-medium text-[#667085]`,children:e})}function c({current:e}){return(0,u.jsx)(`nav`,{"aria-label":`Onboarding progress`,children:(0,u.jsx)(`ol`,{className:`flex items-center gap-2`,children:d.map(t=>{let n=a(t,e);return(0,u.jsxs)(`li`,{className:`flex items-center gap-2`,children:[(0,u.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,u.jsx)(s,{step:t,state:n}),n===`current`?(0,u.jsx)(`span`,{className:`font-inter text-[12px] leading-4 font-semibold text-brand-primary`,children:`Identity`}):null]}),t<6?(0,u.jsx)(`span`,{className:i(`flex h-px items-center`,n===`current`&&`pl-2`),children:(0,u.jsx)(`span`,{className:`block h-px w-5 bg-[#e5e7eb]`})}):null]},t)})})})}function l({step:e=1,size:t=`desktop`}){let n=`${e/d.length*100}%`;return(0,u.jsxs)(`header`,{"data-step":e,"data-size":t,className:`relative border-b border-solid border-[#e5e7eb] bg-white`,style:t===`mobile`?{width:390,height:100}:{width:`100%`,minWidth:720},children:[t===`mobile`?(0,u.jsxs)(`div`,{className:`flex flex-col items-center pt-0.5`,style:{height:96},children:[(0,u.jsx)(o,{size:`mobile`}),(0,u.jsx)(`div`,{className:`mt-auto`,style:{marginBottom:19},children:(0,u.jsx)(c,{current:e})})]}):(0,u.jsxs)(`div`,{className:`relative flex items-center px-6`,style:{height:58},children:[(0,u.jsx)(o,{size:`desktop`}),(0,u.jsx)(`div`,{className:`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`,children:(0,u.jsx)(c,{current:e})})]}),(0,u.jsx)(`div`,{className:`h-1 bg-[#ebebed]`,"aria-hidden":`true`,children:(0,u.jsx)(`div`,{className:`h-full bg-[#3d5cf2]`,style:{width:n}})})]})}var u,d;function f(){return(f=e((()=>{u=t(),r(),d=[1,2,3,4,5,6],l.__docgenInfo={description:``,methods:[],displayName:`UnifiedHeader`,props:{step:{required:!1,tsType:{name:`unknown[number]`,raw:`(typeof headerSteps)[number]`},description:``,defaultValue:{value:`1`,computed:!1}},size:{required:!1,tsType:{name:`unknown[number]`,raw:`(typeof headerSizes)[number]`},description:``,defaultValue:{value:`"desktop"`,computed:!1}}}}})))()}function p({size:e}){return(0,m.jsx)(`div`,{className:`flex flex-col gap-6 bg-[#4b5563] p-6`,children:d.map(t=>(0,m.jsx)(l,{step:t,size:e},t))})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{m=t(),f(),h={title:`Design system/Unified header`,component:l,parameters:{layout:`fullscreen`}},g={name:`Desktop`,render:()=>(0,m.jsx)(p,{size:`desktop`})},_={name:`Mobile`,render:()=>(0,m.jsx)(p,{size:`mobile`})},v={name:`Desktop / Step 1`,render:()=>(0,m.jsx)(`div`,{className:`bg-white p-6`,children:(0,m.jsx)(l,{step:1,size:`desktop`})})},y={name:`Desktop / Step 2`,render:()=>(0,m.jsx)(`div`,{className:`bg-white p-6`,children:(0,m.jsx)(l,{step:2,size:`desktop`})})},b={name:`Desktop / Step 3`,render:()=>(0,m.jsx)(`div`,{className:`bg-white p-6`,children:(0,m.jsx)(l,{step:3,size:`desktop`})})},x={name:`Desktop / Step 4`,render:()=>(0,m.jsx)(`div`,{className:`bg-white p-6`,children:(0,m.jsx)(l,{step:4,size:`desktop`})})},S={name:`Desktop / Step 5`,render:()=>(0,m.jsx)(`div`,{className:`bg-white p-6`,children:(0,m.jsx)(l,{step:5,size:`desktop`})})},C={name:`Desktop / Step 6`,render:()=>(0,m.jsx)(`div`,{className:`bg-white p-6`,children:(0,m.jsx)(l,{step:6,size:`desktop`})})},w={name:`Mobile / Step 1`,render:()=>(0,m.jsx)(`div`,{className:`bg-white p-6`,children:(0,m.jsx)(l,{step:1,size:`mobile`})})},T={name:`Mobile / Step 2`,render:()=>(0,m.jsx)(`div`,{className:`bg-white p-6`,children:(0,m.jsx)(l,{step:2,size:`mobile`})})},E={name:`Mobile / Step 3`,render:()=>(0,m.jsx)(`div`,{className:`bg-white p-6`,children:(0,m.jsx)(l,{step:3,size:`mobile`})})},D={name:`Mobile / Step 4`,render:()=>(0,m.jsx)(`div`,{className:`bg-white p-6`,children:(0,m.jsx)(l,{step:4,size:`mobile`})})},O={name:`Mobile / Step 5`,render:()=>(0,m.jsx)(`div`,{className:`bg-white p-6`,children:(0,m.jsx)(l,{step:5,size:`mobile`})})},k={name:`Mobile / Step 6`,render:()=>(0,m.jsx)(`div`,{className:`bg-white p-6`,children:(0,m.jsx)(l,{step:6,size:`mobile`})})},A=[`Desktop`,`Mobile`,`DesktopStep1`,`DesktopStep2`,`DesktopStep3`,`DesktopStep4`,`DesktopStep5`,`DesktopStep6`,`MobileStep1`,`MobileStep2`,`MobileStep3`,`MobileStep4`,`MobileStep5`,`MobileStep6`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Desktop",
  render: () => <Steps size="desktop" />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Mobile",
  render: () => <Steps size="mobile" />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Desktop / Step 1",
  render: () => <div className="bg-white p-6">
      <UnifiedHeader step={1} size="desktop" />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Desktop / Step 2",
  render: () => <div className="bg-white p-6">
      <UnifiedHeader step={2} size="desktop" />
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Desktop / Step 3",
  render: () => <div className="bg-white p-6">
      <UnifiedHeader step={3} size="desktop" />
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Desktop / Step 4",
  render: () => <div className="bg-white p-6">
      <UnifiedHeader step={4} size="desktop" />
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Desktop / Step 5",
  render: () => <div className="bg-white p-6">
      <UnifiedHeader step={5} size="desktop" />
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Desktop / Step 6",
  render: () => <div className="bg-white p-6">
      <UnifiedHeader step={6} size="desktop" />
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Mobile / Step 1",
  render: () => <div className="bg-white p-6">
      <UnifiedHeader step={1} size="mobile" />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Mobile / Step 2",
  render: () => <div className="bg-white p-6">
      <UnifiedHeader step={2} size="mobile" />
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Mobile / Step 3",
  render: () => <div className="bg-white p-6">
      <UnifiedHeader step={3} size="mobile" />
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Mobile / Step 4",
  render: () => <div className="bg-white p-6">
      <UnifiedHeader step={4} size="mobile" />
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Mobile / Step 5",
  render: () => <div className="bg-white p-6">
      <UnifiedHeader step={5} size="mobile" />
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Mobile / Step 6",
  render: () => <div className="bg-white p-6">
      <UnifiedHeader step={6} size="mobile" />
    </div>
}`,...k.parameters?.docs?.source}}}})))()}j();export{g as Desktop,v as DesktopStep1,y as DesktopStep2,b as DesktopStep3,x as DesktopStep4,S as DesktopStep5,C as DesktopStep6,_ as Mobile,w as MobileStep1,T as MobileStep2,E as MobileStep3,D as MobileStep4,O as MobileStep5,k as MobileStep6,A as __namedExportsOrder,h as default};