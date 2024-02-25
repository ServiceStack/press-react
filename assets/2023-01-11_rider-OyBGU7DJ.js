import{j as e}from"./index-D_NKdwdy.js";function r(s){const n={a:"a",code:"code",dev:"dev",div:"div",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",span:"span",strong:"strong",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://www.jetbrains.com/rider/",children:"JetBrains Rider"}),` is our recommended IDE for any C# + JavaScript development as it
offers a great development UX for both, including excellent support
for TypeScript and popular JavaScript Framework SPA assets like `,e.jsx(n.a,{href:"https://v3.vuejs.org/guide/single-file-component.html",children:"Vue SFC's"}),"."]}),`
`,e.jsx(n.h4,{children:"Setup Rider IDE"}),`
`,e.jsxs(n.p,{children:[`As Rider already understands and provides excellent HTML/JS/TypeScript support you'll be immediately productive out-of-the-box,
we can further improve the development experience for Vue.js Apps by adding an empty `,e.jsx(n.strong,{children:"vue"})," dependency to ",e.jsx(n.strong,{children:"package.json"}),":"]}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-json",children:e.jsxs(n.code,{className:"language-json",children:[e.jsx(n.span,{className:"token punctuation",children:"{"}),`
  `,e.jsx(n.span,{className:"token property",children:'"devDependencies"'}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token punctuation",children:"{"}),`
    `,e.jsx(n.span,{className:"token property",children:'"vue"'}),e.jsx(n.span,{className:"token operator",children:":"})," ",e.jsx(n.span,{className:"token string",children:'""'}),`
  `,e.jsx(n.span,{className:"token punctuation",children:"}"}),`
`,e.jsx(n.span,{className:"token punctuation",children:"}"}),`
`]})})}),`
`,e.jsx(n.p,{children:"As this is just a heuristic Rider looks for to enable its Vue support, installing the dependency itself isn't used or required."}),`
`,e.jsx(n.p,{children:"Other than that the only plugin we recommend adding is:"}),`
`,`
`,e.jsxs(n.p,{children:["Which provides provides intelli-sense support for ",e.jsx(n.a,{href:"https://tailwindcss.com",children:"Tailwind CSS"}),"."]}),`
`,e.jsx(n.h3,{children:"Start both dotnet and Tailwind"}),`
`,e.jsx(n.p,{children:`The only additional development workflow requirement to use tailwind is to start it running in the background
which can be done from a new Terminal:`}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-bash",children:e.jsxs(n.code,{className:"language-bash",children:["$ ",e.jsx(n.span,{className:"token function",children:"npm"}),` run ui:dev
`]})})}),`
`,e.jsxs(n.p,{children:["We find ",e.jsx(n.code,{children:"dotnet watch"}),` offers the most productive iterative development workflow for .NET which refreshes on save
which works great with Tailwind which rewrites your `,e.jsx(n.code,{children:"app.css"})," on save."]}),`
`,e.jsxs(n.p,{children:["How you want to run them is largely a matter of preference, our personal preference is to run the ",e.jsx(n.strong,{children:"dev"})," and ",e.jsxs(n.strong,{children:["ui",e.jsx(n.dev,{})]}),`
npm scripts in your `,e.jsx(n.strong,{children:"package.json"}),":"]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/scripts/dotnet-tailwind.png",alt:""})}),`
`,e.jsx(n.h3,{children:"Rider's Task Runner"}),`
`,e.jsx(n.p,{children:"Where they will appear in Rider's useful task runner widget where you'll be able to easily, stop and rerun all project tasks:"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://github.com/ServiceStack/docs/raw/master/docs/images/spa/rider-run-widget.png",alt:""})}),`
`,e.jsx(n.h3,{children:"Running from the terminal"}),`
`,e.jsxs(n.p,{children:[`These GUI tasks are just managing running CLI commands behind-the-scenes, which if you prefer you can use JetBrains
excellent multi-terminal support to run `,e.jsx(n.code,{children:"$ dotnet watch"})," and ",e.jsx(n.code,{children:"$ npm run ui:dev"})," from separate or split Terminal windows."]}),`
`,e.jsx(n.h3,{children:"Deploying to Production"}),`
`,e.jsxs(n.p,{children:[`This template also includes the necessary GitHub Actions to deploy this Apps production static assets to GitHub Pages CDN,
for more info, checkout `,e.jsx(n.a,{href:"deploy",children:"GitHub Actions Deployments"}),"."]}),`
`,e.jsx(n.h3,{children:"Get Started"}),`
`,e.jsxs(n.p,{children:["If you're new to Vue 3 a good place to start is ",e.jsx(n.a,{href:"https://vuejs.org/api/composition-api-setup.html",children:"Vue 3 Composition API"}),"."]})]})}function i(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{i as default};
