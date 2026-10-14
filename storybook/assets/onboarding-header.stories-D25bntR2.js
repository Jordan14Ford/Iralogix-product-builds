import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{a as t,i as n,n as r,r as i,t as a}from"./onboarding-header-ET0j7ff-.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),o={title:`Onboarding/Header`,component:a,parameters:{layout:`fullscreen`}},s={name:`Identity`,args:{steps:i,progress:`w-1/6`}},c={name:`Login`,args:{steps:t,progress:`w-1/3`}},l={name:`Flow`,args:{steps:r(4),progress:`w-2/3`}},u=[`IdentityStepper`,`LoginStepper`,`FlowStepper`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Identity",
  args: {
    steps: identitySteps,
    progress: "w-1/6"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Login",
  args: {
    steps: loginSteps,
    progress: "w-1/3"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Flow",
  args: {
    steps: flowSteps(4),
    progress: "w-2/3"
  }
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as FlowStepper,s as IdentityStepper,c as LoginStepper,u as __namedExportsOrder,o as default};