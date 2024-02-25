import{j as n,I as a}from"./index-C_B8nXvL.js";import{L as t}from"./LayoutArticle-BkdHDzIz.js";const c={title:"About this template"},i=({children:e})=>n.jsx(t,{...c,children:e});function o(e){const s={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",span:"span",strong:"strong",...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.p,{children:`This template contains our essential recommendations for a modern Vue Single Page App optimal for both
productivity and performance.`}),`
`,n.jsx(a,{src:"features.md"}),`
`,n.jsx(s.h2,{children:"React Plugins"}),`
`,n.jsxs(s.p,{children:["The Vite plugins registered in ",n.jsx(s.code,{children:"vite.config.ts"})," improves productivity by adopting popular conventions that automating-away manual tasks & configurations."]}),`
`,n.jsx(s.h3,{children:n.jsx(s.a,{href:"https://iconify.design/docs/icon-components/react/",children:"Iconify for React"})}),`
`,n.jsxs(s.p,{children:["For accessing ",n.jsx(s.a,{href:"https://icon-sets.iconify.design",children:"thousands of Iconfigy's SVG icons"})," as Vue components ",n.jsx(s.strong,{children:"on-demand"})," universally."]}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-ts",children:n.jsxs(s.code,{className:"language-ts",children:[n.jsx(s.span,{className:"token keyword",children:"import"})," ",n.jsx(s.span,{className:"token punctuation",children:"{"})," Icon ",n.jsx(s.span,{className:"token punctuation",children:"}"})," ",n.jsx(s.span,{className:"token keyword",children:"from"})," ",n.jsx(s.span,{className:"token string",children:"'@iconify/react'"}),`
`]})})}),`
`,n.jsx(s.h4,{children:"Usage"}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-html",children:n.jsxs(s.code,{className:"language-html",children:[n.jsxs(s.span,{className:"token tag",children:[n.jsxs(s.span,{className:"token tag",children:[n.jsx(s.span,{className:"token punctuation",children:"<"}),"Icon"]})," ",n.jsx(s.span,{className:"token attr-name",children:"icon"}),n.jsxs(s.span,{className:"token attr-value",children:[n.jsx(s.span,{className:"token punctuation attr-equals",children:"="}),n.jsx(s.span,{className:"token punctuation",children:'"'}),"mdi-light:home",n.jsx(s.span,{className:"token punctuation",children:'"'})]})," ",n.jsx(s.span,{className:"token punctuation",children:"/>"})]}),`
`]})})}),`
`,n.jsx(s.h3,{children:n.jsx(s.a,{href:"https://github.com/posva/unplugin-vue-router",children:"unplugin-vue-router"})}),`
`,n.jsxs(s.p,{children:[`For auto generating vue routing configurations for each Vue 3 component from
`,n.jsx(s.a,{href:"https://github.com/posva/unplugin-vue-router?tab=readme-ov-file#routes-folder-structure",children:"NuxtJS inspired File System Routing"})," conventions."]}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-ts",children:n.jsxs(s.code,{className:"language-ts",children:[n.jsx(s.span,{className:"token function",children:"Pages"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:"{"}),`
  extensions`,n.jsx(s.span,{className:"token operator",children:":"})," ",n.jsx(s.span,{className:"token punctuation",children:"["}),n.jsx(s.span,{className:"token string",children:"'tsx'"}),n.jsx(s.span,{className:"token punctuation",children:","})," ",n.jsx(s.span,{className:"token string",children:"'mdx'"}),n.jsx(s.span,{className:"token punctuation",children:"]"}),`
`,n.jsx(s.span,{className:"token punctuation",children:"}"}),n.jsx(s.span,{className:"token punctuation",children:")"}),`
`]})})}),`
`,n.jsx(s.h3,{children:n.jsx(s.a,{href:"https://github.com/unplugin/unplugin-vue-markdown",children:"unplugin-vue-markdown"})}),`
`,n.jsxs(s.p,{children:["For enabling Markdown Support by converting each ",n.jsx(s.code,{children:".md"}),` document into a Vue Component that's rendered using
`,n.jsx(s.a,{href:"https://github.com/markdown-it/markdown-it",children:"markdown-it"}),"."]}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-ts",children:n.jsxs(s.code,{className:"language-ts",children:[n.jsx(s.span,{className:"token function",children:"Markdown"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:"{"}),`
    markdownItOptions`,n.jsx(s.span,{className:"token operator",children:":"})," ",n.jsx(s.span,{className:"token punctuation",children:"{"}),`
        `,n.jsx(s.span,{className:"token comment",children:"// html: true,"}),`
    `,n.jsx(s.span,{className:"token punctuation",children:"}"}),n.jsx(s.span,{className:"token punctuation",children:","}),`
    `,n.jsx(s.span,{className:"token function",children:"markdownItSetup"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"md",n.jsx(s.span,{className:"token punctuation",children:")"})," ",n.jsx(s.span,{className:"token punctuation",children:"{"}),`
        `,n.jsx(s.span,{className:"token comment",children:"//md.use(markdownPlugin)"}),`
    `,n.jsx(s.span,{className:"token punctuation",children:"}"}),n.jsx(s.span,{className:"token punctuation",children:","}),`
    wrapperComponent`,n.jsx(s.span,{className:"token operator",children:":"})," ",n.jsx(s.span,{className:"token string",children:"'MarkdownPage'"}),`
`,n.jsx(s.span,{className:"token punctuation",children:"}"}),n.jsx(s.span,{className:"token punctuation",children:")"}),`
`]})})})]})}function d(e={}){return n.jsx(i,{...e,children:n.jsx(o,{...e})})}export{d as default,c as meta};
