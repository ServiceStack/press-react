import{j as e}from"./index-C_B8nXvL.js";function t(s){const n={a:"a",code:"code",div:"div",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["A popular alternative development environment to our preferred ",e.jsx(n.a,{href:"rider",children:"JetBrains Rider"}),` IDE is to use
Visual Studio, the primary issue with this is that VS Code is a better IDE with richer support for JavaScript and npm
projects whilst Visual Studio is a better IDE for C# Projects.`]}),`
`,e.jsx(n.p,{children:`Essentially this is why we recommend Rider where it's best at both, where both C# and JS/TypeScript projects can
be developed from within the same solution.`}),`
`,e.jsx(n.h3,{children:"Developing with just VS Code"}),`
`,`
`,e.jsxs(n.p,{children:[`If you prefer the dev UX of a lightweight text editor or your C# project isn't large, than VS Code on its own
can provide a great development UX which is also what `,e.jsx(n.a,{href:"https://v3.vuejs.org/api/sfc-tooling.html#ide-support",children:"Vue recommends themselves"}),`,
to be used together with the `,e.jsx(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar",children:"Volar extension"}),"."]}),`
`,e.jsxs(n.p,{children:["VSCode's ",e.jsx(n.a,{href:"https://code.visualstudio.com/docs/editor/integrated-terminal",children:"Integrated Terminal"}),` has great multi-terminal
support you can toggle between the editor and terminal with `,e.jsx(n.code,{children:"Ctrl+"}),` or open a new Terminal Window with
`,"Ctrl+Shift+`"," to run Tailwind with:"]}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-bash",children:e.jsxs(n.code,{className:"language-bash",children:["$ ",e.jsx(n.span,{className:"token function",children:"npm"}),` run ui:dev
`]})})}),`
`,e.jsx(n.p,{children:"Then in a new Terminal Window, start a new watched .NET App with:"}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-bash",children:e.jsxs(n.code,{className:"language-bash",children:["$ dotnet ",e.jsx(n.span,{className:"token function",children:"watch"}),`
`]})})}),`
`,e.jsxs(n.p,{children:["With both projects started you can open a browser tab running at ",e.jsx(n.code,{children:"https://localhost:5001"}),` where it
will automatically reload itself at every `,e.jsx(n.code,{children:"Ctrl+S"})," save point."]}),`
`,e.jsx(n.h4,{children:"Useful VS Code extensions"}),`
`,e.jsx(n.p,{children:"We recommend these extensions below to enhance the development experience of this template:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",children:"Tailwind CSS IntelliSense"})," - Add Intellisense for Tailwind classes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html",children:"es6-string-html"})," - Add HTML Syntax Highlighting in string literals"]}),`
`]}),`
`,e.jsx(n.h3,{children:"Using Visual Studio"}),`
`,`
`,e.jsx(n.p,{children:`As your C# project grows you'll want to consider running the back-end C# Solution with Visual Studio .NET with its
much improved intelli-sense, navigation, tests runner & debug capabilities.`}),`
`,e.jsx(n.p,{children:`As we've never had a satisfactory experience trying develop npm or JS/TypeScript projects with VS.NET, we'd recommend only
using VS.NET for C# and Razor and continuing to use VSCode for everything else.`}),`
`,e.jsx(n.p,{children:`If you'd prefer to use Visual Studio for front-end development we recommend moving all JS to external files for a better
Dev UX, e.g:`}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-html",children:e.jsxs(n.code,{className:"language-html",children:[e.jsxs(n.span,{className:"token tag",children:[e.jsxs(n.span,{className:"token tag",children:[e.jsx(n.span,{className:"token punctuation",children:"<"}),"script"]})," ",e.jsx(n.span,{className:"token attr-name",children:"type"}),e.jsxs(n.span,{className:"token attr-value",children:[e.jsx(n.span,{className:"token punctuation attr-equals",children:"="}),e.jsx(n.span,{className:"token punctuation",children:'"'}),"module",e.jsx(n.span,{className:"token punctuation",children:'"'})]})," ",e.jsx(n.span,{className:"token attr-name",children:"src"}),e.jsxs(n.span,{className:"token attr-value",children:[e.jsx(n.span,{className:"token punctuation attr-equals",children:"="}),e.jsx(n.span,{className:"token punctuation",children:'"'}),"./pages/SignIn.mjs",e.jsx(n.span,{className:"token punctuation",children:'"'})]}),e.jsx(n.span,{className:"token punctuation",children:">"})]}),e.jsx(n.span,{className:"token script"}),e.jsxs(n.span,{className:"token tag",children:[e.jsxs(n.span,{className:"token tag",children:[e.jsx(n.span,{className:"token punctuation",children:"</"}),"script"]}),e.jsx(n.span,{className:"token punctuation",children:">"})]}),`
`]})})}),`
`,e.jsx(n.h3,{children:"Deploying to Production"}),`
`,e.jsxs(n.p,{children:[`This template also includes the necessary GitHub Actions to deploy this Apps production static assets to GitHub Pages CDN,
for more info, checkout `,e.jsx(n.a,{href:"deploy",children:"GitHub Actions Deployments"}),"."]}),`
`,e.jsx(n.h3,{children:"Get Started"}),`
`,e.jsxs(n.p,{children:["If you're new to Vue 3 a good place to start is ",e.jsx(n.a,{href:"https://vuejs.org/api/composition-api-setup.html",children:"Vue 3 Composition API"}),"."]})]})}function i(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{i as default};
