import{j as e}from"./index-DHQB3PLr.js";function a(s){const n={a:"a",code:"code",copy:"copy",danger:"danger",div:"div",files:"files",h2:"h2",h3:"h3",h4:"h4",include:"include",info:"info",li:"li",p:"p",pre:"pre",sh:"sh",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tip:"tip",tr:"tr",ul:"ul",warning:"warning",youtube:"youtube",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["The Vite Press Plugin is an alternative to ",e.jsx(n.a,{href:"https://vitepress.dev",children:"VitePress"}),` for adding Markdown features
to existing Vite Vue or React projects. It's a non-intrusive plugin for Vue and React Vite apps that want to
add markdown powered content features without needing to adopt an opinionated framework for their entire App.`]}),`
`,e.jsx(n.h2,{children:"Universal Markdown Features"}),`
`,e.jsxs(n.p,{children:["A goal for ",e.jsx(n.strong,{children:"vite-press-plugin"}),` is to implement a suite of universal markdown-powered features that can be
reused across all our Vue, React and .NET Razor and Blazor project templates, allowing you to freely copy and
incorporate same set of markdown feature folders to power markdown content features across a range of
websites built with different technologies.`]}),`
`,e.jsx(n.h3,{children:"Vite Apps with vite-press-plugin"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"vite-press-plugin"})," currently powers the markdown features in the following Vite Vue and React templates:"]}),`
`,e.jsx(n.h4,{children:"Vite Templates with vite-press-plugin"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://press-vue.web-templates.io",children:"press-vue"})," - Vite Vue App"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://press-react.web-templates.io",children:"press-react"})," - Vite React App"]}),`
`]}),`
`,e.jsx(n.h4,{children:".NET 8 API backend with Vite Vue & React SPA frontend"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://vue-spa.web-templates.io",children:"vue-spa"})," - .NET 8 API with Vite Vue SPA frontend"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://react-spa.web-templates.io",children:"react-spa"})," - .NET 8 API with Vite React SPA frontend"]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"vite-press-plugin"}),` makes the Markdown features available to the Vite App, whilst the markdown rendering itself is optimally
implemented in:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Vue Templates - with ",e.jsx(n.a,{href:"https://github.com/markdown-it/markdown-it",children:"markdown-it"})," in ",e.jsx(n.a,{href:"https://vuejs.org/guide/scaling-up/sfc.html",children:"Vue SFC"})," Components"]}),`
`,e.jsxs(n.li,{children:["React Templates - with ",e.jsx(n.a,{href:"https://github.com/remarkjs/remark",children:"remark"})," and ",e.jsx(n.a,{href:"https://mdxjs.com",children:"MDX"})," in ",e.jsx(n.a,{href:"https://react.dev",children:"React"})," Components"]}),`
`]}),`
`,e.jsx(n.h3,{children:".NET Templates with C# and Markdig"}),`
`,e.jsxs(n.p,{children:["Whilst the same Markdown feature folders are ",e.jsx(n.a,{href:"https://razor-ssg.web-templates.io/posts/razor-ssg",children:"implemented in C#"}),`
and rendered with `,e.jsx(n.a,{href:"https://github.com/xoofx/markdig",children:"Markdig"})," and either Razor Pages or Blazor Components:"]}),`
`,e.jsx(n.h4,{children:".NET 8 Razor SSG and Blazor SSR Templates"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://razor-ssg.web-templates.io",children:"razor-ssg"})," - .NET Razor SSG Blog and Marketing Website with ",e.jsx(n.strong,{children:"Markdig"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://razor-press.web-templates.io",children:"razor-press"})," - .NET Razor SSG Documentation Website with ",e.jsx(n.strong,{children:"Markdig"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://blazor-vue.web-templates.io",children:"blazor-vue"})," - .NET 8 Blazor Server Rendered Website with ",e.jsx(n.strong,{children:"Markdig"})]}),`
`]}),`
`,e.jsx(n.h3,{children:"Markdown Feature Folders"}),`
`,e.jsxs(n.p,{children:["The content for each Markdown feature is maintained within its own feature folder with a ",e.jsx(n.code,{children:"_"})," prefix:"]}),`
`,e.jsx(n.files,{body:`/_includes
/_posts
/_videos
/_whatsnew`}),`
`,e.jsx(n.h4,{children:"Markdown Document Structure"}),`
`,e.jsx(n.p,{children:`Additional metadata for each markdown page is maintained in the frontmatter of each markdown page, e.g.
the front matter for this blog post contains:`}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-md",children:e.jsxs(n.code,{className:"language-md",children:[e.jsxs(n.span,{className:"token front-matter-block",children:[e.jsx(n.span,{className:"token punctuation",children:"---"}),`
`,e.jsxs(n.span,{className:"token front-matter yaml language-yaml",children:[e.jsx(n.span,{className:"token key atrule",children:"title"}),e.jsx(n.span,{className:"token punctuation",children:":"}),`   Vite Press Plugin
`,e.jsx(n.span,{className:"token key atrule",children:"summary"}),e.jsx(n.span,{className:"token punctuation",children:":"}),` Introducing the Vite Press Plugin
`,e.jsx(n.span,{className:"token key atrule",children:"author"}),e.jsx(n.span,{className:"token punctuation",children:":"}),`  Lucy Bates
`,e.jsx(n.span,{className:"token key atrule",children:"tags"}),e.jsx(n.span,{className:"token punctuation",children:":"}),"    ",e.jsx(n.span,{className:"token punctuation",children:"["}),"docs",e.jsx(n.span,{className:"token punctuation",children:","}),"markdown",e.jsx(n.span,{className:"token punctuation",children:"]"}),`
`,e.jsx(n.span,{className:"token key atrule",children:"image"}),e.jsx(n.span,{className:"token punctuation",children:":"}),"   https",e.jsx(n.span,{className:"token punctuation",children:":"}),"//source.unsplash.com/random/2000x1000/",e.jsx(n.span,{className:"token punctuation",children:"?"}),"stationary"]}),`
`,e.jsx(n.span,{className:"token punctuation",children:"---"})]}),`
`]})})}),`
`,e.jsx(n.p,{children:`The frontmatter is used in combination with file attributes to populate the document metadata.
The schema used to support the current markdown features include:`}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-ts",children:e.jsxs(n.code,{className:"language-ts",children:[e.jsx(n.span,{className:"token keyword",children:"type"})," ",e.jsx(n.span,{className:"token class-name",children:"Doc"})," ",e.jsx(n.span,{className:"token operator",children:"="})," ",e.jsx(n.span,{className:"token punctuation",children:"{"}),`
    title`,e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"string"}),"     ",e.jsx(n.span,{className:"token comment",children:"// title of Markdown page (frontmatter)"}),`
    slug`,e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"string"}),"      ",e.jsx(n.span,{className:"token comment",children:"// slug to page (populated)"}),`
    path`,e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"string"}),"      ",e.jsx(n.span,{className:"token comment",children:"// path to page (populated)"}),`
    fileName`,e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"string"}),"  ",e.jsx(n.span,{className:"token comment",children:"// filename of markdown file (populated)"}),`
    content`,e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"string"}),"   ",e.jsx(n.span,{className:"token comment",children:"// markdown content (populated)"}),`
    date`,e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"string"}),"      ",e.jsx(n.span,{className:"token comment",children:"// date of page (frontmatter)"}),`
    tags`,e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"string"}),e.jsx(n.span,{className:"token punctuation",children:"["}),e.jsx(n.span,{className:"token punctuation",children:"]"}),"    ",e.jsx(n.span,{className:"token comment",children:"// related tags (frontmatter)"}),`
    order`,e.jsx(n.span,{className:"token operator",children:"?"}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"number"}),"    ",e.jsx(n.span,{className:"token comment",children:"// explicit page ordering (frontmatter)"}),`
    group`,e.jsx(n.span,{className:"token operator",children:"?"}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"string"}),"    ",e.jsx(n.span,{className:"token comment",children:"// which group page belongs to (populated)"}),`
    draft`,e.jsx(n.span,{className:"token operator",children:"?"}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"boolean"}),"   ",e.jsx(n.span,{className:"token comment",children:"// make visible in production (frontmatter)"}),`
    wordCount`,e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"number"}),"      ",e.jsx(n.span,{className:"token comment",children:"// (populated)"}),`
    lineCount`,e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"number"}),"      ",e.jsx(n.span,{className:"token comment",children:"// (populated)"}),`
    minutesToRead`,e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"number"}),"  ",e.jsx(n.span,{className:"token comment",children:"// (populated)"}),`
`,e.jsx(n.span,{className:"token punctuation",children:"}"}),`

`,e.jsx(n.span,{className:"token keyword",children:"type"})," ",e.jsx(n.span,{className:"token class-name",children:"Post"})," ",e.jsx(n.span,{className:"token operator",children:"="})," Doc ",e.jsx(n.span,{className:"token operator",children:"&"})," ",e.jsx(n.span,{className:"token punctuation",children:"{"}),`
    summary`,e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"string"})," ",e.jsx(n.span,{className:"token comment",children:"// short summary of blog post (frontmatter)"}),`
    author`,e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"string"}),"  ",e.jsx(n.span,{className:"token comment",children:"// author of blog post (frontmatter)"}),`
    image`,e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"string"}),"   ",e.jsx(n.span,{className:"token comment",children:"// hero image of blog post (frontmatter)"}),`
`,e.jsx(n.span,{className:"token punctuation",children:"}"}),`

`,e.jsx(n.span,{className:"token keyword",children:"type"})," ",e.jsx(n.span,{className:"token class-name",children:"Video"})," ",e.jsx(n.span,{className:"token operator",children:"="})," Doc ",e.jsx(n.span,{className:"token operator",children:"&"})," ",e.jsx(n.span,{className:"token punctuation",children:"{"}),`
    url`,e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"string"})," ",e.jsx(n.span,{className:"token comment",children:"// URL of YouTube Video"}),`
`,e.jsx(n.span,{className:"token punctuation",children:"}"}),`

`,e.jsx(n.span,{className:"token keyword",children:"type"})," ",e.jsx(n.span,{className:"token class-name",children:"WhatsNew"})," ",e.jsx(n.span,{className:"token operator",children:"="})," Doc ",e.jsx(n.span,{className:"token operator",children:"&"})," ",e.jsx(n.span,{className:"token punctuation",children:"{"}),`
    url`,e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"string"}),"    ",e.jsx(n.span,{className:"token comment",children:"// URL of YouTube Video"}),`
    image`,e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token builtin",children:"string"}),"  ",e.jsx(n.span,{className:"token comment",children:"// Image to display for feature"}),`
`,e.jsx(n.span,{className:"token punctuation",children:"}"}),`
`]})})}),`
`,e.jsx(n.p,{children:"Markdown files can contain additional frontmatter which is also merged with the document metadata."}),`
`,e.jsx(n.h3,{children:"Accessing Markdown Metadata"}),`
`,e.jsxs(n.p,{children:["In Vue App's the Metadata is available as an injected dependency that's navigable with the typed ",e.jsx(n.code,{children:"VirtualPress"})," schema, e.g:"]}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-ts",children:e.jsxs(n.code,{className:"language-ts",children:[e.jsx(n.span,{className:"token keyword",children:"import"})," ",e.jsx(n.span,{className:"token keyword",children:"type"})," ",e.jsx(n.span,{className:"token punctuation",children:"{"})," VirtualPress ",e.jsx(n.span,{className:"token punctuation",children:"}"})," ",e.jsx(n.span,{className:"token keyword",children:"from"})," ",e.jsx(n.span,{className:"token string",children:'"vite-plugin-press"'}),`

`,e.jsx(n.span,{className:"token keyword",children:"const"})," press",e.jsx(n.span,{className:"token operator",children:":"}),"VirtualPress ",e.jsx(n.span,{className:"token operator",children:"="})," ",e.jsx(n.span,{className:"token function",children:"inject"}),e.jsx(n.span,{className:"token punctuation",children:"("}),e.jsx(n.span,{className:"token string",children:"'press'"}),e.jsx(n.span,{className:"token punctuation",children:")"}),e.jsx(n.span,{className:"token operator",children:"!"}),`
`]})})}),`
`,e.jsx(n.p,{children:"In React App's it's available via an injected context:"}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-ts",children:e.jsxs(n.code,{className:"language-ts",children:[e.jsx(n.span,{className:"token keyword",children:"import"})," ",e.jsx(n.span,{className:"token punctuation",children:"{"})," PressContext ",e.jsx(n.span,{className:"token punctuation",children:"}"})," ",e.jsx(n.span,{className:"token keyword",children:"from"})," ",e.jsx(n.span,{className:"token string",children:'"@/contexts"'}),`

`,e.jsx(n.span,{className:"token keyword",children:"const"})," press ",e.jsx(n.span,{className:"token operator",children:"="})," ",e.jsx(n.span,{className:"token function",children:"useContext"}),e.jsx(n.span,{className:"token punctuation",children:"("}),"PressContext",e.jsx(n.span,{className:"token punctuation",children:")"}),`
`]})})}),`
`,e.jsx(n.p,{children:"Which is defined as:"}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-ts",children:e.jsxs(n.code,{className:"language-ts",children:[e.jsx(n.span,{className:"token keyword",children:"import"})," ",e.jsx(n.span,{className:"token punctuation",children:"{"})," createContext ",e.jsx(n.span,{className:"token punctuation",children:"}"})," ",e.jsx(n.span,{className:"token keyword",children:"from"})," ",e.jsx(n.span,{className:"token string",children:"'react'"}),`
`,e.jsx(n.span,{className:"token keyword",children:"import"})," ",e.jsx(n.span,{className:"token keyword",children:"type"})," ",e.jsx(n.span,{className:"token punctuation",children:"{"})," VirtualPress ",e.jsx(n.span,{className:"token punctuation",children:"}"})," ",e.jsx(n.span,{className:"token keyword",children:"from"})," ",e.jsx(n.span,{className:"token string",children:"'vite-plugin-press'"}),`

`,e.jsx(n.span,{className:"token keyword",children:"export"})," ",e.jsx(n.span,{className:"token keyword",children:"const"})," PressContext ",e.jsx(n.span,{className:"token operator",children:"="})," ",e.jsxs(n.span,{className:"token generic-function",children:[e.jsx(n.span,{className:"token function",children:"createContext"}),e.jsxs(n.span,{className:"token generic class-name",children:[e.jsx(n.span,{className:"token operator",children:"<"}),"VirtualPress",e.jsx(n.span,{className:"token operator",children:">"})]})]}),e.jsx(n.span,{className:"token punctuation",children:"("}),e.jsx(n.span,{className:"token punctuation",children:"{"}),e.jsx(n.span,{className:"token punctuation",children:"}"})," ",e.jsx(n.span,{className:"token keyword",children:"as"})," VirtualPress",e.jsx(n.span,{className:"token punctuation",children:")"}),`
`]})})}),`
`,e.jsxs(n.p,{children:["This ",e.jsx(n.code,{children:"VirtualPress"})," metadata is used to power all markdown features."]}),`
`,e.jsx(n.h3,{children:"Blog"}),`
`,e.jsxs(n.p,{children:["The blog maintains its markdown posts in a flat  ",e.jsx(n.a,{href:"https://github.com/NetCoreTemplates/vue-spa/tree/main/MyApp.Client/src/_posts",children:"/_posts"}),`
folder which each Markdown post containing its publish date and URL slug it should be published under, e.g:`]}),`
`,e.jsx(n.files,{body:`/_posts
  2023-01-21_start.md
  2024-02-11_jwt-identity-auth.md
  2024-03-01_vite-press-plugin.md`}),`
`,e.jsx(n.p,{children:"Supporting all Blog features requires several different pages to render each of its view:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Description"}),e.jsx(n.th,{children:"Example"}),e.jsx(n.th,{children:"Vue"}),e.jsx(n.th,{children:"React"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Main Blog layout"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"/blog",children:"/blog"})}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/blog.vue",children:"blog.vue"})}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/blog.tsx",children:"blog.tsx"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Navigable Archive of Posts"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"/posts",children:"/posts"})}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/index.vue",children:"index.vue"})}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/index.tsx",children:"index.tsx"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Individual Blog Post (like this!)"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"/posts/vite-press-plugin",children:"/posts/vite-press-plugin"})}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/%5Bslug%5D.vue",children:"[slug].vue"})}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/%5Bslug%5D.tsx",children:"[slug].tsx"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Display Posts by Author"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"/posts/author/lucy-bates",children:"/posts/author/lucy-bates"})}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/author/%5Bname%5D.vue",children:"[name].vue"})}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/author/%5Bname%5D.tsx",children:"[name].tsx"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Display Posts by Tag"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"/posts/tagged/markdown",children:"/posts/tagged/markdown"})}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/tagged/%5Btag%5D.vue",children:"[tag].vue"})}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/tagged/%5Btag%5D.tsx",children:"[tag].tsx"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Display Posts by Year"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"/posts/year/2024",children:"/posts/year/2024"})}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/year/%5Byear%5D.vue",children:"[year].vue"})}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/year/%5Byear%5D.tsx",children:"[year].tsx"})})]})]})]}),`
`,e.jsx(n.h4,{children:"Configuration"}),`
`,e.jsxs(n.p,{children:["Additional information about the Website Blog is maintained in ",e.jsx(n.code,{children:"_posts/config.json"})]}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-json",children:e.jsxs(n.code,{className:"language-json",children:[e.jsx(n.span,{className:"token punctuation",children:"{"}),`
  `,e.jsx(n.span,{className:"token property",children:'"localBaseUrl"'}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token string",children:'"http://localhost:5173"'}),e.jsx(n.span,{className:"token punctuation",children:","}),`
  `,e.jsx(n.span,{className:"token property",children:'"publicBaseUrl"'}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token string",children:'"https://press-vue.web-templates.io"'}),e.jsx(n.span,{className:"token punctuation",children:","}),`
  `,e.jsx(n.span,{className:"token property",children:'"siteTwitter"'}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token string",children:'"@Vue"'}),e.jsx(n.span,{className:"token punctuation",children:","}),`
  `,e.jsx(n.span,{className:"token property",children:'"blogTitle"'}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token string",children:'"From the blog"'}),e.jsx(n.span,{className:"token punctuation",children:","}),`
  `,e.jsx(n.span,{className:"token property",children:'"blogDescription"'}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token string",children:'"Writing on software design and aerospace industry."'}),e.jsx(n.span,{className:"token punctuation",children:","}),`
  `,e.jsx(n.span,{className:"token property",children:'"blogEmail"'}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token string",children:'"email@example.org (Vue)"'}),e.jsx(n.span,{className:"token punctuation",children:","}),`
  `,e.jsx(n.span,{className:"token property",children:'"blogImageUrl"'}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token string",children:'"https://servicestack.net/img/logo.png"'}),`
`,e.jsx(n.span,{className:"token punctuation",children:"}"}),`
`]})})}),`
`,e.jsx(n.h4,{children:"Authors"}),`
`,e.jsxs(n.p,{children:["Whilst information about Post Authors are maintained in ",e.jsx(n.code,{children:"_posts/authors.json"})]}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-json",children:e.jsxs(n.code,{className:"language-json",children:[e.jsx(n.span,{className:"token punctuation",children:"["}),`
  `,e.jsx(n.span,{className:"token punctuation",children:"{"}),`
    `,e.jsx(n.span,{className:"token property",children:'"name"'}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token string",children:'"Lucy Bates"'}),e.jsx(n.span,{className:"token punctuation",children:","}),`
    `,e.jsx(n.span,{className:"token property",children:'"email"'}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token string",children:'"lucy@email.org"'}),e.jsx(n.span,{className:"token punctuation",children:","}),`
    `,e.jsx(n.span,{className:"token property",children:'"bio"'}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token string",children:'"Writing on software design and aerospace industry."'}),e.jsx(n.span,{className:"token punctuation",children:","}),`
    `,e.jsx(n.span,{className:"token property",children:'"profileUrl"'}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token string",children:'"/img/profiles/user1.svg"'}),e.jsx(n.span,{className:"token punctuation",children:","}),`
    `,e.jsx(n.span,{className:"token property",children:'"twitterUrl"'}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token string",children:'"https://twitter.com/lucy"'}),e.jsx(n.span,{className:"token punctuation",children:","}),`
    `,e.jsx(n.span,{className:"token property",children:'"threadsUrl"'}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token string",children:'"https://threads.net/@lucy"'}),e.jsx(n.span,{className:"token punctuation",children:","}),`
    `,e.jsx(n.span,{className:"token property",children:'"gitHubUrl"'}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token string",children:'"https://github.com/lucy"'}),`
  `,e.jsx(n.span,{className:"token punctuation",children:"}"}),e.jsx(n.span,{className:"token punctuation",children:","}),`
`,e.jsx(n.span,{className:"token punctuation",children:"]"}),`
`]})})}),`
`,e.jsxs(n.p,{children:["To associate an Author the ",e.jsx(n.strong,{children:"name"})," property is used to match a posts frontmatter ",e.jsx(n.strong,{children:"author"}),"."]}),`
`,e.jsx(n.h3,{children:"General Features"}),`
`,e.jsx(n.p,{children:`Most unique markdown features are captured in their Markdown's frontmatter metadata, but in general these features
are broadly available for all features:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Live Reload"})," - Latest Markdown content is displayed during ",e.jsx(n.strong,{children:"Development"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Drafts"})," - Prevent posts being worked on from being published with ",e.jsx(n.code,{children:"draft: true"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Future Dates"})," - Posts with a future date wont be published until that date"]}),`
`]}),`
`,e.jsx(n.h3,{children:"What's New Feature"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.a,{href:"/whatsnew",children:"/whatsnew"}),` page is an example of creating a custom Markdown feature to implement a portfolio or a product releases page
where a new folder is created per release, containing both release date and release or project name, with all features in that release
maintained markdown content sorted in alphabetical order:`]}),`
`,e.jsx(n.files,{body:`/_whatsnew
  /2023-03-08_Animaginary
    feature1.md
  /2023-03-18_OpenShuttle
    feature1.md
  /2023-03-28_Planetaria
    feature1.md`}),`
`,e.jsx(n.p,{children:"What's New follows the same structure as Pages feature which is rendered in:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/whatsnew.vue",children:"whatsnew.vue"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/whatsnew.tsx",children:"whatsnew.tsx"})}),`
`]}),`
`,e.jsx(n.h3,{children:"Videos Feature"}),`
`,e.jsxs(n.p,{children:["The videos feature maintained in the ",e.jsx(n.code,{children:"_videos"})," folder allows grouping of related videos into different folder groups, e.g:"]}),`
`,e.jsx(n.files,{body:`/_videos
  /vue
    admin.md
    autoquerygrid.md
    components.md
  /react
    locode.md
    bookings.md
    nextjs.md`}),`
`,e.jsxs(n.p,{children:["These can then be rendered as UI fragments using the ",e.jsx(n.code,{children:"<VideoGroup>"})," component, e.g:"]}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-tsx",children:e.jsxs(n.code,{className:"language-tsx",children:[e.jsxs(n.span,{className:"token tag",children:[e.jsxs(n.span,{className:"token tag",children:[e.jsx(n.span,{className:"token punctuation",children:"<"}),e.jsx(n.span,{className:"token class-name",children:"VideoGroup"})]}),`
  `,e.jsx(n.span,{className:"token attr-name",children:"title"}),e.jsxs(n.span,{className:"token attr-value",children:[e.jsx(n.span,{className:"token punctuation attr-equals",children:"="}),e.jsx(n.span,{className:"token punctuation",children:'"'}),"Vue Components",e.jsx(n.span,{className:"token punctuation",children:'"'})]}),`
  `,e.jsx(n.span,{className:"token attr-name",children:"summary"}),e.jsxs(n.span,{className:"token attr-value",children:[e.jsx(n.span,{className:"token punctuation attr-equals",children:"="}),e.jsx(n.span,{className:"token punctuation",children:'"'}),"Learn about productive features in Vue Component Library",e.jsx(n.span,{className:"token punctuation",children:'"'})]}),`
  `,e.jsx(n.span,{className:"token attr-name",children:"group"}),e.jsxs(n.span,{className:"token attr-value",children:[e.jsx(n.span,{className:"token punctuation attr-equals",children:"="}),e.jsx(n.span,{className:"token punctuation",children:'"'}),"vue",e.jsx(n.span,{className:"token punctuation",children:'"'})]}),`
  `,e.jsx(n.span,{className:"token attr-name",children:"learnMore"}),e.jsxs(n.span,{className:"token attr-value",children:[e.jsx(n.span,{className:"token punctuation attr-equals",children:"="}),e.jsx(n.span,{className:"token punctuation",children:'"'}),"https://docs.servicestack.net/vue/",e.jsx(n.span,{className:"token punctuation",children:'"'})]})," ",e.jsx(n.span,{className:"token punctuation",children:"/>"})]}),`
`]})})}),`
`,e.jsx(n.h3,{children:"Includes Feature"}),`
`,e.jsxs(n.p,{children:["The includes feature allows maintaining reusable markdown fragments in the ",e.jsx(n.code,{children:"_includes"})," folder, e.g:"]}),`
`,e.jsx(n.files,{body:`/_includes
  /features
    videos.md
    whatsnew.md
  privacy.md`}),`
`,e.jsx(n.p,{children:"Which can be included in other Markdown files with:"}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-md",children:e.jsx(n.code,{className:"language-md",children:`:::include privacy.md:::

:::include features/include.md:::
`})})}),`
`,e.jsxs(n.p,{children:["Alternatively they can be included in other Vue, React or Markdown pages with the ",e.jsx(n.code,{children:"<Include>"})," component, e.g:"]}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-tsx",children:e.jsxs(n.code,{className:"language-tsx",children:[e.jsxs(n.span,{className:"token tag",children:[e.jsxs(n.span,{className:"token tag",children:[e.jsx(n.span,{className:"token punctuation",children:"<"}),e.jsx(n.span,{className:"token class-name",children:"Include"})]})," ",e.jsx(n.span,{className:"token attr-name",children:"src"}),e.jsxs(n.span,{className:"token attr-value",children:[e.jsx(n.span,{className:"token punctuation attr-equals",children:"="}),e.jsx(n.span,{className:"token punctuation",children:'"'}),"privacy.md",e.jsx(n.span,{className:"token punctuation",children:'"'})]})," ",e.jsx(n.span,{className:"token punctuation",children:"/>"})]}),`

`,e.jsxs(n.span,{className:"token tag",children:[e.jsxs(n.span,{className:"token tag",children:[e.jsx(n.span,{className:"token punctuation",children:"<"}),e.jsx(n.span,{className:"token class-name",children:"Include"})]})," ",e.jsx(n.span,{className:"token attr-name",children:"src"}),e.jsxs(n.span,{className:"token attr-value",children:[e.jsx(n.span,{className:"token punctuation attr-equals",children:"="}),e.jsx(n.span,{className:"token punctuation",children:'"'}),"features/include.md",e.jsx(n.span,{className:"token punctuation",children:'"'})]})," ",e.jsx(n.span,{className:"token punctuation",children:"/>"})]}),`
`]})})}),`
`,e.jsx(n.h3,{children:"Metadata APIs Feature"}),`
`,e.jsxs(n.p,{children:["To support external clients from querying static markdown metadata you can export it to pre-rendered static ",e.jsx(n.code,{children:"*.json"}),`
data structures by configuring `,e.jsx(n.code,{children:"metadataPath"})," to the location you the ",e.jsx(n.code,{children:"*.json"})," files published to, e.g:"]}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-ts",children:e.jsxs(n.code,{className:"language-ts",children:[e.jsx(n.span,{className:"token keyword",children:"export"})," ",e.jsx(n.span,{className:"token keyword",children:"default"})," ",e.jsx(n.span,{className:"token function",children:"defineConfig"}),e.jsx(n.span,{className:"token punctuation",children:"("}),e.jsx(n.span,{className:"token punctuation",children:"{"}),`
    plugins`,e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token punctuation",children:"["}),`
        `,e.jsx(n.span,{className:"token function",children:"Press"}),e.jsx(n.span,{className:"token punctuation",children:"("}),e.jsx(n.span,{className:"token punctuation",children:"{"}),`
            metadataPath`,e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token string",children:"'public/api'"}),e.jsx(n.span,{className:"token punctuation",children:","}),`
        `,e.jsx(n.span,{className:"token punctuation",children:"}"}),e.jsx(n.span,{className:"token punctuation",children:")"}),e.jsx(n.span,{className:"token punctuation",children:","}),`
    `,e.jsx(n.span,{className:"token punctuation",children:"]"}),`
`,e.jsx(n.span,{className:"token punctuation",children:"}"}),e.jsx(n.span,{className:"token punctuation",children:")"}),`
`]})})}),`
`,e.jsxs(n.p,{children:["This will publish all the content of each content type in the year they were published in, along with an ",e.jsx(n.code,{children:"all.json"}),` containing
all content published in that year as well aso for all time, e.g:`]}),`
`,e.jsx(n.files,{body:`/meta
  /2022
    all.json
    posts.json
    videos.json
  /2023
    all.json
    posts.json
  /2024
    all.json
    posts.json
    videos.json
    whatsnew.json
  all.json
  index.json`}),`
`,e.jsxs(n.p,{children:["With this you can fetch the metadata of all the new ",e.jsx(n.strong,{children:"Blog Posts"})," added in ",e.jsx(n.strong,{children:"2023"})," from:"]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/api/2024/blog.json",children:"/api/2024/blog.json"})}),`
`,e.jsxs(n.p,{children:["Or all the website content added in ",e.jsx(n.strong,{children:"2024"})," from:"]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/api/2024/all.json",children:"/api/2024/all.json"})}),`
`,e.jsxs(n.p,{children:["Or ",e.jsx(n.strong,{children:"ALL"})," the website metadata content from:"]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/api/all.json",children:"/api/all.json"})}),`
`,e.jsxs(n.p,{children:[`This feature makes it possible to support use-cases like CreatorKit's
`,e.jsx(n.a,{href:"https://servicestack.net/creatorkit/portal-mailruns#generating-newsletters",children:"Generating Newsletters"}),` feature which generates
a Monthly Newsletter Email with all new content added within a specified period.`]}),`
`,e.jsx(n.h2,{children:"Markdown Containers"}),`
`,e.jsxs(n.p,{children:["Most of ",e.jsx(n.a,{href:"https://vitepress.dev/guide/markdown#custom-containers",children:"VitePress Containers"}),` are also implemented, enabling
rich markup to enhance markdown content and documentation universally across all Markdown App implementations:`]}),`
`,e.jsx(n.h4,{children:"Input"}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-unknown",children:e.jsx(n.code,{className:"language-unknown",children:`:::info
This is an info box.
:::

:::tip
This is a tip.
:::

:::warning
This is a warning.
:::

:::danger
This is a dangerous warning.
:::`})})}),`
`,e.jsx(n.h4,{children:"Output"}),`
`,e.jsx(n.info,{children:e.jsx(n.p,{children:"This is an info box."})}),`
`,e.jsx(n.tip,{children:e.jsx(n.p,{children:"This is a tip."})}),`
`,e.jsx(n.warning,{children:e.jsx(n.p,{children:"This is a warning."})}),`
`,e.jsx(n.danger,{children:e.jsx(n.p,{children:"This is a dangerous warning."})}),`
`,e.jsx(n.h3,{children:"Custom Title"}),`
`,e.jsx(n.p,{children:"You can specify a custom title by appending the text right after the container type:"}),`
`,e.jsx(n.h4,{children:"Input"}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-unknown",children:e.jsx(n.code,{className:"language-unknown",children:`:::danger STOP
Danger zone, do not proceed
:::`})})}),`
`,e.jsx(n.h4,{children:"Output"}),`
`,e.jsx(n.danger,{arg:"STOP",children:e.jsx(n.p,{children:"Danger zone, do not proceed"})}),`
`,e.jsx(n.h3,{children:"copy"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"copy"})," container is ideal for displaying text snippets in a component that allows for easy copying:"]}),`
`,e.jsx(n.h4,{children:"Input"}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-unknown",children:e.jsx(n.code,{className:"language-unknown",children:`:::copy
Copy Me!
:::`})})}),`
`,e.jsx(n.h4,{children:"Output"}),`
`,e.jsx(n.copy,{children:e.jsx(n.p,{children:"Copy Me!"})}),`
`,e.jsx(n.p,{children:"HTML or XML fragments can also be copied by escaping them first:"}),`
`,e.jsx(n.h4,{children:"Input"}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-md",children:e.jsxs(n.code,{className:"language-md",children:[`:::copy
`,e.jsx(n.span,{className:"token code-snippet code keyword",children:'`<PackageReference Include="ServiceStack" Version="8.*" />`'}),`
:::
`]})})}),`
`,e.jsx(n.h4,{children:"Output"}),`
`,e.jsx(n.copy,{children:e.jsx(n.p,{children:e.jsx(n.code,{children:'<PackageReference Include="ServiceStack" Version="8.*" />'})})}),`
`,e.jsx(n.h3,{children:"sh"}),`
`,e.jsxs(n.p,{children:["Similarly the ",e.jsx(n.strong,{children:"sh"})," container is ideal for displaying and copying shell commands:"]}),`
`,e.jsx(n.h4,{children:"Input"}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-unknown",children:e.jsx(n.code,{className:"language-unknown",children:`:::sh
npm run prerender
:::`})})}),`
`,e.jsx(n.h4,{children:"Output"}),`
`,e.jsx(n.sh,{children:e.jsx(n.p,{children:"npm run prerender"})}),`
`,e.jsx(n.h3,{children:"YouTube"}),`
`,e.jsxs(n.p,{children:["For embedding YouTube Videos, optimally rendered using the ",e.jsx(n.code,{children:"<LiteYouTube>"})," component, e.g:"]}),`
`,e.jsx(n.h4,{children:"Input"}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-unknown",children:e.jsx(n.code,{className:"language-unknown",children:":::youtube YIa0w6whe2U:::"})})}),`
`,e.jsx(n.h4,{children:"Output"}),`
`,e.jsx(n.youtube,{arg:"YIa0w6whe2U",children:":::youtube YIa0w6whe2U:::"}),`
`,e.jsx(n.h2,{children:"Markdown Fenced Code Blocks"}),`
`,e.jsxs(n.p,{children:["For more flexibility you can utilize custom fenced components like the ",e.jsx(n.code,{children:"files"}),` fenced code block which can
be used to capture ascii representation of a structured documentation like a folder & file structure, e.g:`]}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-unknown",children:e.jsx(n.code,{className:"language-unknown",children:`\`\`\`files
/_videos
  /vue
    admin.md
    autoquerygrid.md
    components.md
  /react
    locode.md
    bookings.md
    nextjs.md
\`\`\``})})}),`
`,e.jsxs(n.p,{children:["That we can render into a more UX-friendly representation by calling the ",e.jsx(n.code,{children:"Files"}),` component with the body
of the code-block to convert the structured ascii layout into a more familiar GUI layout:`]}),`
`,e.jsx(n.files,{body:`/_videos
  /vue
    admin.md
    autoquerygrid.md
    components.md
  /react
    locode.md
    bookings.md
    nextjs.md`}),`
`,e.jsx(n.p,{children:`The benefit of this approach of marking up documentation is that the markdown content still remains in an optimal
human-readable form even when the markdown renderer lacks the custom fenced components to render the richer UI.`}),`
`,e.jsx(n.h2,{children:"Components In Markdown"}),`
`,e.jsx(n.p,{children:`Up till now all above features will let you render the same markdown content in all available Vue, React, Razor or Blazor
templates. At the cost of reduced portability, you're also able to embed rich Interactive Vue or React components directly in
markdown.`}),`
`,e.jsx(n.include,{src:"component-links.md",children:":::include component-links.md:::"})]})}function r(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}export{r as default};
