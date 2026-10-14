import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{f as t}from"./iframe-CnOC1nhy.js";import{n,t as r}from"./button-ORN_EELL.js";function i({variant:e}){return(0,a.jsx)(`div`,{className:`flex flex-col gap-4 bg-white p-8`,children:s.map(t=>(0,a.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:c.map(n=>(0,a.jsx)(r,{variant:e,size:t,state:n,children:`Label`},n))},t))})}var a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{a=t(),n(),o=[`primary`,`secondary`,`tertiary`,`secondary-brand`,`tertiary-brand`],s=[`xs`,`sm`,`md`,`lg`,`xl`],c=[`default`,`hover`,`active`,`focused`,`disabled`],l={primary:`Primary`,secondary:`Secondary`,tertiary:`Tertiary`,"secondary-brand":`Secondary Brand`,"tertiary-brand":`Tertiary Brand`},u={title:`Onboarding/Button`,component:r,args:{children:`Label`,variant:`primary`,size:`md`,state:`default`},parameters:{layout:`fullscreen`}},d={name:`Primary`,render:()=>(0,a.jsx)(i,{variant:`primary`})},f={name:`Secondary`,render:()=>(0,a.jsx)(i,{variant:`secondary`})},p={name:`Tertiary`,render:()=>(0,a.jsx)(i,{variant:`tertiary`})},m={name:`Secondary Brand`,render:()=>(0,a.jsx)(i,{variant:`secondary-brand`})},h={name:`Tertiary Brand`,render:()=>(0,a.jsx)(i,{variant:`tertiary-brand`})},g={name:`All`,render:()=>(0,a.jsx)(`div`,{className:`flex flex-col gap-10 bg-white p-8`,children:o.map(e=>(0,a.jsxs)(`section`,{className:`flex flex-col gap-4`,children:[(0,a.jsx)(`h2`,{className:`font-sans text-sm font-semibold text-[#0f172a]`,children:l[e]}),(0,a.jsx)(i,{variant:e})]},e))})},_=[`Primary`,`Secondary`,`Tertiary`,`SecondaryBrand`,`TertiaryBrand`,`All`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  render: () => <VariantMatrix variant="primary" />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Secondary",
  render: () => <VariantMatrix variant="secondary" />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Tertiary",
  render: () => <VariantMatrix variant="tertiary" />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Secondary Brand",
  render: () => <VariantMatrix variant="secondary-brand" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Tertiary Brand",
  render: () => <VariantMatrix variant="tertiary-brand" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "All",
  render: () => <div className="flex flex-col gap-10 bg-white p-8">
      {variants.map(variant => <section key={variant} className="flex flex-col gap-4">
          <h2 className="font-sans text-sm font-semibold text-[#0f172a]">{variantLabels[variant]}</h2>
          <VariantMatrix variant={variant} />
        </section>)}
    </div>
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as All,d as Primary,f as Secondary,m as SecondaryBrand,p as Tertiary,h as TertiaryBrand,_ as __namedExportsOrder,u as default};