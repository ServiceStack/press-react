import{r as x,P as m,j as e,L as c,i as o,c as d,l as h,k as p}from"./index-C_B8nXvL.js";const g=()=>{const a=x.useContext(m).whatsNew;function l(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function n(t){return h(t,"_")}function r(t){return p(t,"_")}return e.jsxs(c,{title:"What's New",children:[e.jsx("div",{className:"container mx-auto px-5",children:e.jsx("section",{className:"flex-col md:flex-row flex justify-center mt-16 mb-16 md:mb-12",children:e.jsx("h1",{className:"mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 dark:text-slate-50 sm:text-7xl",children:"Latest features & highlights"})})}),e.jsx("div",{className:"relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28",children:Object.entries(a).map(([t,i])=>e.jsxs("div",{className:"relative mx-auto max-w-7xl",children:[e.jsx("h2",{className:"text-center mb-4 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",children:r(t)}),e.jsx("div",{className:"text-center text-lg font-normal text-gray-500 dark:text-gray-400 mb-8",children:l(n(t))}),i.map(s=>e.jsxs("div",{className:"flex flex-wrap my-24",children:[e.jsx("div",{className:"w-full sm:w-1/2 animated px-4",children:e.jsx("a",{href:s.url,children:e.jsx("img",{src:s.image,alt:"",loading:"lazy"})})}),e.jsxs("div",{className:"w-full sm:w-1/2 text-left wow fadeInLeft animated px-4",children:[e.jsx("h3",{className:"m-0 mb-4",children:e.jsx("a",{className:"text-2xl font-normal text-blue-500 hover:text-blue-600",href:s.url,children:s.title})}),e.jsx("div",{className:"prose dark:prose-invert max-w-none",children:e.jsx(o,{type:"whatsNew",doc:s,group:t})}),e.jsx("div",{className:"text-center sm:text-left my-10",children:e.jsx("a",{href:s.url,className:"text-white text-sm font-semibold py-2.5 px-3.5 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 shadow hover:shadow-lg ease-linear transition-all duration-150",children:"Learn more"})})]})]},s.path))]},t))}),e.jsx("div",{className:"my-8 flex justify-center gap-x-4",children:e.jsx(d,{path:"whatsnew.tsx"})})]})};export{g as default};
