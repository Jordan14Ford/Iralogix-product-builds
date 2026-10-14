import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{f as t}from"./iframe-C0wW0mSd.js";import{n,t as r}from"./button-Ce4GuGtO.js";import{n as i,t as a}from"./input-CYYAE6HM.js";import{n as o,t as s}from"./eye-icon-BSsFdPiX.js";import{n as c,t as l}from"./label-D5Qs8MY0.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{u=t(),o(),n(),i(),c(),d=`h-[42px] rounded-[8px] border-[#d1d5db] bg-white px-3 text-sm leading-5 font-normal text-[#111827] shadow-none placeholder:text-[#9ca3af] focus-visible:border-[#2563eb] focus-visible:ring-0 md:text-sm`,f={title:`Onboarding/Form field`,component:a,parameters:{layout:`centered`}},p={render:()=>(0,u.jsxs)(`div`,{className:`flex w-[420px] flex-col gap-2 bg-white p-6`,children:[(0,u.jsx)(l,{htmlFor:`first-name`,className:`text-sm leading-5 font-semibold text-[#111827]`,children:`First Name`}),(0,u.jsx)(a,{id:`first-name`,name:`firstName`,autoComplete:`given-name`,placeholder:`Enter first name`,className:d})]})},m={render:()=>(0,u.jsxs)(`div`,{className:`flex w-[420px] flex-col gap-1.5 bg-white p-6`,children:[(0,u.jsx)(l,{htmlFor:`ssn`,className:`text-[13px] leading-normal font-normal text-[#111827]`,children:`SSN`}),(0,u.jsxs)(`div`,{className:`relative`,children:[(0,u.jsx)(a,{id:`ssn`,name:`ssn`,inputMode:`numeric`,autoComplete:`off`,placeholder:`Enter SSN (XXX-XX-XXXX)`,className:`h-12 rounded-[6px] border-[#d1d5db] bg-white px-3 pr-10 text-sm leading-normal font-normal text-[#111827] shadow-none placeholder:text-[#9ca3af] focus-visible:border-[#2563eb] focus-visible:ring-0 md:text-sm`}),(0,u.jsx)(r,{type:`button`,className:`absolute top-1/2 right-3 size-5 -translate-y-1/2 rounded-none border-0 bg-transparent p-0 shadow-none hover:bg-transparent`,"aria-label":`Show SSN`,children:(0,u.jsx)(s,{slashed:!0})})]}),(0,u.jsx)(`p`,{className:`text-xs leading-normal text-[#6b7280]`,children:`Format: XXX-XX-XXXX`})]})},h=[`FirstName`,`SocialSecurityNumber`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-[420px] flex-col gap-2 bg-white p-6">
      <Label htmlFor="first-name" className="text-sm leading-5 font-semibold text-[#111827]">
        First Name
      </Label>
      <Input id="first-name" name="firstName" autoComplete="given-name" placeholder="Enter first name" className={inputClassName} />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-[420px] flex-col gap-1.5 bg-white p-6">
      <Label htmlFor="ssn" className="text-[13px] leading-normal font-normal text-[#111827]">
        SSN
      </Label>
      <div className="relative">
        <Input id="ssn" name="ssn" inputMode="numeric" autoComplete="off" placeholder="Enter SSN (XXX-XX-XXXX)" className="h-12 rounded-[6px] border-[#d1d5db] bg-white px-3 pr-10 text-sm leading-normal font-normal text-[#111827] shadow-none placeholder:text-[#9ca3af] focus-visible:border-[#2563eb] focus-visible:ring-0 md:text-sm" />
        <Button type="button" className="absolute top-1/2 right-3 size-5 -translate-y-1/2 rounded-none border-0 bg-transparent p-0 shadow-none hover:bg-transparent" aria-label="Show SSN">
          <EyeIcon slashed />
        </Button>
      </div>
      <p className="text-xs leading-normal text-[#6b7280]">Format: XXX-XX-XXXX</p>
    </div>
}`,...m.parameters?.docs?.source}}}})))()}g();export{p as FirstName,m as SocialSecurityNumber,h as __namedExportsOrder,f as default};