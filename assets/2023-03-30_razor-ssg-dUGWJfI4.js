import{j as n}from"./index--wxOaSh4.js";function a(e){const s={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",sh:"sh",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...e.components};return n.jsxs(n.Fragment,{children:[n.jsxs(s.p,{children:["Razor SSG is a Razor Pages powered Markdown alternative to ",n.jsx(s.a,{href:"https://jekyllrb.com/",children:"Ruby's Jekyll"}),` &
`,n.jsx(s.a,{href:"https://nextjs.org",children:"Next.js"})," that's ideal for generating static websites & blogs using C#, Razor Pages & Markdown."]}),`
`,n.jsx(s.h3,{children:"GitHub Codespaces Friendly"}),`
`,n.jsx(s.p,{children:`In addition to having a pure Razor + .NET solution to create fast, CDN-hostable static websites, it also aims to provide a
great experience from GitHub Codespaces, where you can create, modify, preview & check-in changes before the included GitHub Actions
auto deploy changes to its GitHub Pages CDN - all from your iPad!`}),`
`,n.jsx(s.p,{children:n.jsx(s.a,{href:"https://github.com/features/codespaces",children:n.jsx(s.img,{src:"https://servicestack.net/img/posts/razor-ssg/codespaces.png",alt:""})})}),`
`,n.jsxs(s.p,{children:[`To see this in action, we walk through the entire workflow of creating, updating and adding features to a custom Razor SSG website
from just a browser using Codespaces, that auto publishes changes to your GitHub Repo's `,n.jsx(s.strong,{children:"gh-pages"}),` branch where it's hosted for
free on GitHub Pages CDN:`]}),`
`,`
`,n.jsx(s.h3,{children:"Enhance with simple, modern JavaScript"}),`
`,n.jsxs(s.p,{children:["For enhanced interactivity, static markdown content can be ",n.jsx(s.a,{href:"https://servicestack.net/posts/javascript",children:"progressively enhanced"}),` with Vue 3 components,
as done in this example that embed's the
`,n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/mjs/components/GettingStarted.mjs",children:"GettingStarted.mjs"})," Vue Component to create new Razor SSG App's below with:"]}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-html",children:n.jsxs(s.code,{className:"language-html",children:[n.jsxs(s.span,{className:"token tag",children:[n.jsxs(s.span,{className:"token tag",children:[n.jsx(s.span,{className:"token punctuation",children:"<"}),"getting-started"]})," ",n.jsx(s.span,{className:"token attr-name",children:"template"}),n.jsxs(s.span,{className:"token attr-value",children:[n.jsx(s.span,{className:"token punctuation attr-equals",children:"="}),n.jsx(s.span,{className:"token punctuation",children:'"'}),"razor-ssg",n.jsx(s.span,{className:"token punctuation",children:'"'})]}),n.jsx(s.span,{className:"token punctuation",children:">"})]}),n.jsxs(s.span,{className:"token tag",children:[n.jsxs(s.span,{className:"token tag",children:[n.jsx(s.span,{className:"token punctuation",children:"</"}),"getting-started"]}),n.jsx(s.span,{className:"token punctuation",children:">"})]}),`
`]})})}),`
`,`
`,n.jsxs(s.p,{children:["Although with full control over the websites ",n.jsx(s.code,{children:"_Layout.cshtml"}),", you're free to use any preferred JS Module or Web Component you prefer."]}),`
`,n.jsx(s.h2,{children:"Razor Pages"}),`
`,n.jsxs(s.p,{children:["Your website can be built using either Markdown ",n.jsx(s.code,{children:".md"})," or Razor ",n.jsx(s.code,{children:".cshtml"}),` pages, although it's generally recommended to
use Markdown to capture the static content for your website for improved productivity and ease of maintenance.`]}),`
`,n.jsx(s.h3,{children:"Content in Markdown, Functionality in Razor Pages"}),`
`,n.jsx(s.p,{children:`The basic premise behind most built-in features is to capture static content in markdown using a combination of
folder structure & file name conventions in addition to each markdown page's frontmatter & content. This information
is then used to power each feature using Razor pages for precise layout and functionality.`}),`
`,n.jsx(s.p,{children:`The template includes the source code for each website feature, enabling full customization that also serves as good examples
for how to implement your own custom markdown-powered website features.`}),`
`,n.jsx(s.h3,{children:"Markdown Feature Structure"}),`
`,n.jsxs(s.p,{children:["All markdown features are effectively implemented in the same way, starting with a ",n.jsx(s.strong,{children:"_folder"}),` for maintaining its static markdown
content, a `,n.jsx(s.strong,{children:".cs"})," class to load the markdown and a ",n.jsx(s.strong,{children:".cshtml"})," Razor Page to render it:"]}),`
`,n.jsxs(s.table,{children:[n.jsx(s.thead,{children:n.jsxs(s.tr,{children:[n.jsx(s.th,{children:"Location"}),n.jsx(s.th,{children:"Description"})]})}),n.jsxs(s.tbody,{children:[n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.code,{children:"/_{Feature}"})}),n.jsx(s.td,{children:"Maintains the static markdown for the feature"})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.code,{children:"Markdown.{Feature}.cs"})}),n.jsx(s.td,{children:"Functionality to read the feature's markdown into logical collections"})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.code,{children:"{Feature}.cshtml"})}),n.jsx(s.td,{children:"Functionality to Render the feature"})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Configure.Ssg.cs",children:"Configure.Ssg.cs"})}),n.jsx(s.td,{children:"Initializes and registers the feature with ASP .NET's IOC"})]})]})]}),`
`,n.jsx(s.p,{children:'Lets see what this looks like in practice by walking through the "Pages" feature:'}),`
`,n.jsx(s.h2,{children:"Pages Feature"}),`
`,n.jsxs(s.p,{children:["The pages feature simply makes all pages in the ",n.jsx(s.strong,{children:"_pages"})," folder, available from ",n.jsx(s.code,{children:"/{filename}"}),"."]}),`
`,n.jsx(s.p,{children:"Where the included pages:"}),`
`,n.jsx(s.h3,{children:n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/tree/main/MyApp/_pages",children:"/_pages"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"privacy.md"}),`
`,n.jsx(s.li,{children:"speaking.md"}),`
`,n.jsx(s.li,{children:"uses.md"}),`
`]}),`
`,n.jsx(s.p,{children:"Are made available from:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"https://razor-ssg.web-templates.io/privacy",children:"/privacy"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"https://razor-ssg.web-templates.io/speaking",children:"/speaking"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"https://razor-ssg.web-templates.io/uses",children:"/uses"})}),`
`]}),`
`,n.jsx(s.h3,{children:"Loading Pages Markdown"}),`
`,n.jsxs(s.p,{children:["The code that loads the Pages feature markdown content is in ",n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Markdown.Pages.cs",children:"Markdown.Pages.cs"}),":"]}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-csharp",children:n.jsxs(s.code,{className:"language-csharp",children:[n.jsx(s.span,{className:"token keyword",children:"public"})," ",n.jsx(s.span,{className:"token keyword",children:"class"})," ",n.jsx(s.span,{className:"token class-name",children:"MarkdownPages"})," ",n.jsx(s.span,{className:"token punctuation",children:":"})," ",n.jsx(s.span,{className:"token type-list",children:n.jsxs(s.span,{className:"token class-name",children:["MarkdownPagesBase",n.jsx(s.span,{className:"token punctuation",children:"<"}),"MarkdownFileInfo",n.jsx(s.span,{className:"token punctuation",children:">"})]})}),`
`,n.jsx(s.span,{className:"token punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"token keyword",children:"public"})," ",n.jsx(s.span,{className:"token function",children:"MarkdownPages"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsxs(s.span,{className:"token class-name",children:["ILogger",n.jsx(s.span,{className:"token punctuation",children:"<"}),"MarkdownPages",n.jsx(s.span,{className:"token punctuation",children:">"})]})," log",n.jsx(s.span,{className:"token punctuation",children:","})," ",n.jsx(s.span,{className:"token class-name",children:"IWebHostEnvironment"})," env",n.jsx(s.span,{className:"token punctuation",children:")"}),` 
        `,n.jsx(s.span,{className:"token punctuation",children:":"})," ",n.jsx(s.span,{className:"token keyword",children:"base"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"log",n.jsx(s.span,{className:"token punctuation",children:","}),"env",n.jsx(s.span,{className:"token punctuation",children:")"})," ",n.jsx(s.span,{className:"token punctuation",children:"{"}),n.jsx(s.span,{className:"token punctuation",children:"}"}),`
    
    `,n.jsxs(s.span,{className:"token return-type class-name",children:["List",n.jsx(s.span,{className:"token punctuation",children:"<"}),"MarkdownFileInfo",n.jsx(s.span,{className:"token punctuation",children:">"})]})," Pages ",n.jsx(s.span,{className:"token punctuation",children:"{"})," ",n.jsx(s.span,{className:"token keyword",children:"get"}),n.jsx(s.span,{className:"token punctuation",children:";"})," ",n.jsx(s.span,{className:"token keyword",children:"set"}),n.jsx(s.span,{className:"token punctuation",children:";"})," ",n.jsx(s.span,{className:"token punctuation",children:"}"})," ",n.jsx(s.span,{className:"token operator",children:"="})," ",n.jsx(s.span,{className:"token keyword",children:"new"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
    `,n.jsx(s.span,{className:"token keyword",children:"public"})," ",n.jsxs(s.span,{className:"token return-type class-name",children:["List",n.jsx(s.span,{className:"token punctuation",children:"<"}),"MarkdownFileInfo",n.jsx(s.span,{className:"token punctuation",children:">"})]})," VisiblePages ",n.jsx(s.span,{className:"token operator",children:"=>"})," Pages",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"Where"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"IsVisible",n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"ToList"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`

    `,n.jsx(s.span,{className:"token keyword",children:"public"})," ",n.jsxs(s.span,{className:"token return-type class-name",children:["MarkdownFileInfo",n.jsx(s.span,{className:"token punctuation",children:"?"})]})," ",n.jsx(s.span,{className:"token function",children:"GetBySlug"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token class-name",children:n.jsx(s.span,{className:"token keyword",children:"string"})})," slug",n.jsx(s.span,{className:"token punctuation",children:")"})," ",n.jsx(s.span,{className:"token operator",children:"=>"}),` 
        `,n.jsx(s.span,{className:"token function",children:"Fresh"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"VisiblePages",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"FirstOrDefault"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"x ",n.jsx(s.span,{className:"token operator",children:"=>"})," x",n.jsx(s.span,{className:"token punctuation",children:"."}),"Slug ",n.jsx(s.span,{className:"token operator",children:"=="})," slug",n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`

    `,n.jsx(s.span,{className:"token keyword",children:"public"})," ",n.jsx(s.span,{className:"token return-type class-name",children:n.jsx(s.span,{className:"token keyword",children:"void"})})," ",n.jsx(s.span,{className:"token function",children:"LoadFrom"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token class-name",children:n.jsx(s.span,{className:"token keyword",children:"string"})})," fromDirectory",n.jsx(s.span,{className:"token punctuation",children:")"}),`
    `,n.jsx(s.span,{className:"token punctuation",children:"{"}),`
        Pages`,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"Clear"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
        `,n.jsx(s.span,{className:"token class-name",children:n.jsx(s.span,{className:"token keyword",children:"var"})})," fs ",n.jsx(s.span,{className:"token operator",children:"="})," ",n.jsx(s.span,{className:"token function",children:"AssertVirtualFiles"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
        `,n.jsx(s.span,{className:"token class-name",children:n.jsx(s.span,{className:"token keyword",children:"var"})})," files ",n.jsx(s.span,{className:"token operator",children:"="})," fs",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"GetDirectory"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"fromDirectory",n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"GetAllFiles"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"ToList"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
        `,n.jsx(s.span,{className:"token class-name",children:n.jsx(s.span,{className:"token keyword",children:"var"})})," log ",n.jsx(s.span,{className:"token operator",children:"="})," LogManager",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"GetLogger"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token function",children:"GetType"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
        log`,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"InfoFormat"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token string",children:'"Found {0} pages"'}),n.jsx(s.span,{className:"token punctuation",children:","})," files",n.jsx(s.span,{className:"token punctuation",children:"."}),"Count",n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`

        `,n.jsx(s.span,{className:"token class-name",children:n.jsx(s.span,{className:"token keyword",children:"var"})})," pipeline ",n.jsx(s.span,{className:"token operator",children:"="})," ",n.jsx(s.span,{className:"token function",children:"CreatePipeline"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`

        `,n.jsx(s.span,{className:"token keyword",children:"foreach"})," ",n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token class-name",children:n.jsx(s.span,{className:"token keyword",children:"var"})})," file ",n.jsx(s.span,{className:"token keyword",children:"in"})," files",n.jsx(s.span,{className:"token punctuation",children:")"}),`
        `,n.jsx(s.span,{className:"token punctuation",children:"{"}),`
            `,n.jsx(s.span,{className:"token class-name",children:n.jsx(s.span,{className:"token keyword",children:"var"})})," doc ",n.jsx(s.span,{className:"token operator",children:"="})," ",n.jsx(s.span,{className:"token function",children:"Load"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"file",n.jsx(s.span,{className:"token punctuation",children:"."}),"VirtualPath",n.jsx(s.span,{className:"token punctuation",children:","})," pipeline",n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
            `,n.jsx(s.span,{className:"token keyword",children:"if"})," ",n.jsx(s.span,{className:"token punctuation",children:"("}),"doc ",n.jsx(s.span,{className:"token operator",children:"=="})," ",n.jsx(s.span,{className:"token keyword",children:"null"}),n.jsx(s.span,{className:"token punctuation",children:")"}),`
                `,n.jsx(s.span,{className:"token keyword",children:"continue"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`

            Pages`,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"Add"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"doc",n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
        `,n.jsx(s.span,{className:"token punctuation",children:"}"}),`
    `,n.jsx(s.span,{className:"token punctuation",children:"}"}),`
`,n.jsx(s.span,{className:"token punctuation",children:"}"}),`
`]})})}),`
`,n.jsxs(s.p,{children:["Which ultimately just loads Markdown files using the configured ",n.jsx(s.a,{href:"https://github.com/xoofx/markdig",children:"Markdig"})," pipeline in its ",n.jsx(s.code,{children:"Pages"}),`
collection which is made available via its `,n.jsx(s.code,{children:"VisiblePages"}),` property which returns all documents in development whilst hiding
`,n.jsx(s.strong,{children:"Draft"})," and content published at a ",n.jsx(s.strong,{children:"Future Date"})," from production builds."]}),`
`,n.jsx(s.h3,{children:"Rendering Markdown Pages"}),`
`,n.jsxs(s.p,{children:["The pages are then rendered in ",n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Page.cshtml",children:"Page.cshtml"}),` Razor Page
that's available from `,n.jsx(s.code,{children:"/{slug}"})]}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-csharp",children:n.jsxs(s.code,{className:"language-csharp",children:["@page ",n.jsx(s.span,{className:"token string",children:'"/{slug}"'}),`
@model MyApp`,n.jsx(s.span,{className:"token punctuation",children:"."}),`Page
@inject MarkdownPages Markdown

@implements `,n.jsxs(s.span,{className:"token return-type class-name",children:["IRenderStatic",n.jsx(s.span,{className:"token punctuation",children:"<"}),"MyApp",n.jsx(s.span,{className:"token punctuation",children:"."}),"Page",n.jsx(s.span,{className:"token punctuation",children:">"})]}),`
@functions `,n.jsx(s.span,{className:"token punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"token keyword",children:"public"})," ",n.jsxs(s.span,{className:"token return-type class-name",children:["List",n.jsx(s.span,{className:"token punctuation",children:"<"}),"Page",n.jsx(s.span,{className:"token punctuation",children:">"})]})," ",n.jsx(s.span,{className:"token function",children:"GetStaticProps"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token class-name",children:"RenderContext"})," ctx",n.jsx(s.span,{className:"token punctuation",children:")"}),`
    `,n.jsx(s.span,{className:"token punctuation",children:"{"}),`
        `,n.jsx(s.span,{className:"token class-name",children:n.jsx(s.span,{className:"token keyword",children:"var"})})," markdown ",n.jsx(s.span,{className:"token operator",children:"="})," ctx",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsxs(s.span,{className:"token generic-method",children:[n.jsx(s.span,{className:"token function",children:"Resolve"}),n.jsxs(s.span,{className:"token generic class-name",children:[n.jsx(s.span,{className:"token punctuation",children:"<"}),"MarkdownPages",n.jsx(s.span,{className:"token punctuation",children:">"})]})]}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
        `,n.jsx(s.span,{className:"token keyword",children:"return"})," markdown",n.jsx(s.span,{className:"token punctuation",children:"."}),"VisiblePages",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"Map"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"page ",n.jsx(s.span,{className:"token operator",children:"=>"})," ",n.jsx(s.span,{className:"token keyword",children:"new"})," ",n.jsx(s.span,{className:"token constructor-invocation class-name",children:"Page"})," ",n.jsx(s.span,{className:"token punctuation",children:"{"})," Slug ",n.jsx(s.span,{className:"token operator",children:"="})," page",n.jsx(s.span,{className:"token punctuation",children:"."}),"Slug",n.jsx(s.span,{className:"token operator",children:"!"})," ",n.jsx(s.span,{className:"token punctuation",children:"}"}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
    `,n.jsx(s.span,{className:"token punctuation",children:"}"}),`
`,n.jsx(s.span,{className:"token punctuation",children:"}"}),`

@`,n.jsx(s.span,{className:"token punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"token class-name",children:n.jsx(s.span,{className:"token keyword",children:"var"})})," doc ",n.jsx(s.span,{className:"token operator",children:"="})," Markdown",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"GetBySlug"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"Model",n.jsx(s.span,{className:"token punctuation",children:"."}),"Slug",n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
    `,n.jsx(s.span,{className:"token keyword",children:"if"})," ",n.jsx(s.span,{className:"token punctuation",children:"("}),"doc",n.jsx(s.span,{className:"token punctuation",children:"."}),"Layout ",n.jsx(s.span,{className:"token operator",children:"!="})," ",n.jsx(s.span,{className:"token keyword",children:"null"}),n.jsx(s.span,{className:"token punctuation",children:")"}),` 
        Layout `,n.jsx(s.span,{className:"token operator",children:"="})," doc",n.jsx(s.span,{className:"token punctuation",children:"."}),"Layout ",n.jsx(s.span,{className:"token operator",children:"=="})," ",n.jsx(s.span,{className:"token string",children:'"none"'}),`
            `,n.jsx(s.span,{className:"token punctuation",children:"?"})," ",n.jsx(s.span,{className:"token keyword",children:"null"}),`
            `,n.jsx(s.span,{className:"token punctuation",children:":"})," doc",n.jsx(s.span,{className:"token punctuation",children:"."}),"Layout",n.jsx(s.span,{className:"token punctuation",children:";"}),`
    ViewData`,n.jsx(s.span,{className:"token punctuation",children:"["}),n.jsx(s.span,{className:"token string",children:'"Title"'}),n.jsx(s.span,{className:"token punctuation",children:"]"})," ",n.jsx(s.span,{className:"token operator",children:"="})," doc",n.jsx(s.span,{className:"token punctuation",children:"."}),"Title",n.jsx(s.span,{className:"token punctuation",children:";"}),`
`,n.jsx(s.span,{className:"token punctuation",children:"}"}),`

`,n.jsx(s.span,{className:"token operator",children:"<"}),n.jsx(s.span,{className:"token class-name",children:"link"})," rel",n.jsx(s.span,{className:"token operator",children:"="}),n.jsx(s.span,{className:"token string",children:'"stylesheet"'})," href",n.jsx(s.span,{className:"token operator",children:"="}),n.jsx(s.span,{className:"token string",children:'"css/typography.css"'}),n.jsx(s.span,{className:"token operator",children:">"}),`
`,n.jsx(s.span,{className:"token operator",children:"<"}),"section ",n.jsx(s.span,{className:"token keyword",children:"class"}),n.jsx(s.span,{className:"token operator",children:"="}),n.jsx(s.span,{className:"token string",children:'"flex-col md:flex-row flex justify-center mt-16 mb-16 md:mb-12"'}),n.jsx(s.span,{className:"token operator",children:">"}),`
    `,n.jsx(s.span,{className:"token operator",children:"<"}),"h1 ",n.jsx(s.span,{className:"token keyword",children:"class"}),n.jsx(s.span,{className:"token operator",children:"="}),n.jsx(s.span,{className:"token string",children:'"text-4xl tracking-tight font-extrabold text-gray-900"'}),n.jsx(s.span,{className:"token operator",children:">"}),`
        @doc`,n.jsx(s.span,{className:"token punctuation",children:"."}),`Title
    `,n.jsx(s.span,{className:"token operator",children:"<"}),n.jsx(s.span,{className:"token operator",children:"/"}),"h1",n.jsx(s.span,{className:"token operator",children:">"}),`
`,n.jsx(s.span,{className:"token operator",children:"<"}),n.jsx(s.span,{className:"token operator",children:"/"}),"section",n.jsx(s.span,{className:"token operator",children:">"}),`    
`,n.jsx(s.span,{className:"token operator",children:"<"}),"div ",n.jsx(s.span,{className:"token keyword",children:"class"}),n.jsx(s.span,{className:"token operator",children:"="}),n.jsx(s.span,{className:"token string",children:'"mx-auto"'}),n.jsx(s.span,{className:"token operator",children:">"}),`
    `,n.jsx(s.span,{className:"token operator",children:"<"}),"div ",n.jsx(s.span,{className:"token keyword",children:"class"}),n.jsx(s.span,{className:"token operator",children:"="}),n.jsx(s.span,{className:"token string",children:'"mx-auto prose lg:prose-xl mb-24"'}),n.jsx(s.span,{className:"token operator",children:">"}),`
        @Html`,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"Raw"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"doc",n.jsx(s.span,{className:"token punctuation",children:"."}),"Preview",n.jsx(s.span,{className:"token punctuation",children:")"}),`
    `,n.jsx(s.span,{className:"token operator",children:"<"}),n.jsx(s.span,{className:"token operator",children:"/"}),"div",n.jsx(s.span,{className:"token operator",children:">"}),`
`,n.jsx(s.span,{className:"token operator",children:"<"}),n.jsx(s.span,{className:"token operator",children:"/"}),"div",n.jsx(s.span,{className:"token operator",children:">"}),`

`,n.jsxs(s.span,{className:"token return-type class-name",children:["@",n.jsx(s.span,{className:"token keyword",children:"await"})]})," Html",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"PartialAsync"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token string",children:'"HighlightIncludes"'}),n.jsx(s.span,{className:"token punctuation",children:")"}),`
`,n.jsx(s.span,{className:"token operator",children:"<"}),"script",n.jsx(s.span,{className:"token operator",children:">"}),"hljs",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"highlightAll"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token operator",children:"<"}),n.jsx(s.span,{className:"token operator",children:"/"}),"script",n.jsx(s.span,{className:"token operator",children:">"}),`
`]})})}),`
`,n.jsxs(s.p,{children:[`Which uses a custom layout if one is defined in its frontmatter which
`,n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/_pages/speaking.md",children:"speaking.md"})," utilizes in its ",n.jsx(s.strong,{children:"layout"})," frontmatter:"]}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-yaml",children:n.jsxs(s.code,{className:"language-yaml",children:[n.jsx(s.span,{className:"token punctuation",children:"---"}),`
`,n.jsx(s.span,{className:"token key atrule",children:"title"}),n.jsx(s.span,{className:"token punctuation",children:":"}),` Speaking
`,n.jsx(s.span,{className:"token key atrule",children:"layout"}),n.jsx(s.span,{className:"token punctuation",children:":"}),` _LayoutContent
`,n.jsx(s.span,{className:"token punctuation",children:"---"}),`
`]})})}),`
`,n.jsxs(s.p,{children:["To render the page using ",n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Shared/_LayoutContent.cshtml",children:"_LayoutContent.cshtml"}),`
visible by the background backdrop in its `,n.jsx(s.a,{href:"https://razor-ssg.web-templates.io/speaking",children:"/speaking"})," page."]}),`
`,n.jsx(s.h2,{children:"What's New Feature"}),`
`,n.jsxs(s.p,{children:["The ",n.jsx(s.a,{href:"https://razor-ssg.web-templates.io/whatsnew",children:"/whatsnew"}),` page is an example of creating a custom Markdown feature to implement a portfolio or a product releases page
where a new folder is created per release, containing both release date and release or project name, with all features in that release
maintained markdown content sorted in alphabetical order:`]}),`
`,n.jsx(s.h3,{children:n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/tree/main/MyApp/_whatsnew",children:"/_whatsnew"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"/2023-03-08_Animaginary"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"feature1.md"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"/2023-03-18_OpenShuttle"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"feature1.md"}),`
`]}),`
`]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"/2023-03-28_Planetaria"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"feature1.md"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(s.p,{children:"What's New follows the same structure as Pages feature which is loaded in:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Markdown.WhatsNew.cs",children:"Markdown.WhatsNew.cs"})}),`
`]}),`
`,n.jsx(s.p,{children:"and rendered in:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/WhatsNew.cshtml",children:"WhatsNew.cshtml"})}),`
`]}),`
`,n.jsx(s.h2,{children:"Blog Feature"}),`
`,n.jsx(s.p,{children:`The blog maintains its markdown posts in a flat folder which each Markdown post containing its publish date and URL slug it
should be published under:`}),`
`,n.jsx(s.h3,{children:n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/tree/main/MyApp/_posts",children:"/_posts"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"..."}),`
`,n.jsx(s.li,{children:"2023-01-21_start.md"}),`
`,n.jsx(s.li,{children:"2023-03-21_javascript.md"}),`
`,n.jsx(s.li,{children:"2023-03-28_razor-ssg.md"}),`
`]}),`
`,n.jsxs(s.p,{children:["As the Blog has more features it requires a larger ",n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Markdown.Blog.cs",children:"Markdown.Blog.cs"}),`
to load its Markdown posts that is rendered in several different Razor Pages for each of its Views:`]}),`
`,n.jsxs(s.table,{children:[n.jsx(s.thead,{children:n.jsxs(s.tr,{children:[n.jsx(s.th,{children:"Page"}),n.jsx(s.th,{children:"Description"}),n.jsx(s.th,{children:"Example"})]})}),n.jsxs(s.tbody,{children:[n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Blog.cshtml",children:"Blog.cshtml"})}),n.jsx(s.td,{children:"Main Blog layout"}),n.jsx(s.td,{children:n.jsx(s.a,{href:"https://razor-ssg.web-templates.io/blog",children:"/blog"})})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Index.cshtml",children:"Posts/Index.cshtml"})}),n.jsx(s.td,{children:"Navigable Archive grid of Posts"}),n.jsx(s.td,{children:n.jsx(s.a,{href:"https://razor-ssg.web-templates.io/posts",children:"/posts"})})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Post.cshtml",children:"Posts/Post.cshtml"})}),n.jsx(s.td,{children:"Individual Blog Post (like this!)"}),n.jsx(s.td,{children:n.jsx(s.a,{href:"https://razor-ssg.web-templates.io/posts/razor-ssg",children:"/posts/razor-ssg"})})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Author.cshtml",children:"Author.cshtml"})}),n.jsx(s.td,{children:"Display Posts by Author"}),n.jsx(s.td,{children:n.jsx(s.a,{href:"https://razor-ssg.web-templates.io/posts/author/lucy-bates",children:"/posts/author/lucy-bates"})})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Tagged.cshtml",children:"Tagged.cshtml"})}),n.jsx(s.td,{children:"Display Posts by Tag"}),n.jsx(s.td,{children:n.jsx(s.a,{href:"https://razor-ssg.web-templates.io/posts/tagged/markdown",children:"/posts/tagged/markdown"})})]}),n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Year.cshtml",children:"Year.cshtml"})}),n.jsx(s.td,{children:"Display Posts by Year"}),n.jsx(s.td,{children:n.jsx(s.a,{href:"https://razor-ssg.web-templates.io/posts/year/2023",children:"/posts/year/2023"})})]})]})]}),`
`,n.jsx(s.h3,{children:"General Features"}),`
`,n.jsx(s.p,{children:`Most unique markdown features are captured in their Markdown's frontmatter metadata, but in general these features
are broadly available for all features:`}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Live Reload"})," - Latest Markdown content is displayed during ",n.jsx(s.strong,{children:"Development"})]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Custom Layouts"})," - Render post in custom Razor Layout with ",n.jsx(s.code,{children:"layout: _LayoutAlt"})]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Drafts"})," - Prevent posts being worked on from being published with ",n.jsx(s.code,{children:"draft: true"})]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Future Dates"})," - Posts with a future date wont be published until that date"]}),`
`]}),`
`,n.jsx(s.h3,{children:"Initializing and Loading Markdown Features"}),`
`,n.jsxs(s.p,{children:["All markdown features are initialized in the same way in ",n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Configure.Ssg.cs",children:"Configure.Ssg.cs"}),`
where they're registered in ASP.NET Core's IOC and initialized after the App's plugins are loaded
by injecting with the App's `,n.jsx(s.a,{href:"https://docs.servicestack.net/virtual-file-system",children:"Virtual Files provider"}),`
before using it to read from the directory where the markdown content for each feature is maintained:`]}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-csharp",children:n.jsxs(s.code,{className:"language-csharp",children:[n.jsx(s.span,{className:"token keyword",children:"public"})," ",n.jsx(s.span,{className:"token keyword",children:"class"})," ",n.jsx(s.span,{className:"token class-name",children:"ConfigureSsg"})," ",n.jsx(s.span,{className:"token punctuation",children:":"})," ",n.jsx(s.span,{className:"token type-list",children:n.jsx(s.span,{className:"token class-name",children:"IHostingStartup"})}),`
`,n.jsx(s.span,{className:"token punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"token keyword",children:"public"})," ",n.jsx(s.span,{className:"token return-type class-name",children:n.jsx(s.span,{className:"token keyword",children:"void"})})," ",n.jsx(s.span,{className:"token function",children:"Configure"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token class-name",children:"IWebHostBuilder"})," builder",n.jsx(s.span,{className:"token punctuation",children:")"})," ",n.jsx(s.span,{className:"token operator",children:"=>"}),` builder
        `,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"ConfigureServices"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"services ",n.jsx(s.span,{className:"token operator",children:"=>"}),`
        `,n.jsx(s.span,{className:"token punctuation",children:"{"}),`
            services`,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsxs(s.span,{className:"token generic-method",children:[n.jsx(s.span,{className:"token function",children:"AddSingleton"}),n.jsxs(s.span,{className:"token generic class-name",children:[n.jsx(s.span,{className:"token punctuation",children:"<"}),"RazorPagesEngine",n.jsx(s.span,{className:"token punctuation",children:">"})]})]}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
            services`,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsxs(s.span,{className:"token generic-method",children:[n.jsx(s.span,{className:"token function",children:"AddSingleton"}),n.jsxs(s.span,{className:"token generic class-name",children:[n.jsx(s.span,{className:"token punctuation",children:"<"}),"MarkdownPages",n.jsx(s.span,{className:"token punctuation",children:">"})]})]}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
            services`,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsxs(s.span,{className:"token generic-method",children:[n.jsx(s.span,{className:"token function",children:"AddSingleton"}),n.jsxs(s.span,{className:"token generic class-name",children:[n.jsx(s.span,{className:"token punctuation",children:"<"}),"MarkdownWhatsNew",n.jsx(s.span,{className:"token punctuation",children:">"})]})]}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
            services`,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsxs(s.span,{className:"token generic-method",children:[n.jsx(s.span,{className:"token function",children:"AddSingleton"}),n.jsxs(s.span,{className:"token generic class-name",children:[n.jsx(s.span,{className:"token punctuation",children:"<"}),"MarkdownBlog",n.jsx(s.span,{className:"token punctuation",children:">"})]})]}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
        `,n.jsx(s.span,{className:"token punctuation",children:"}"}),n.jsx(s.span,{className:"token punctuation",children:")"}),`
        `,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"ConfigureAppHost"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token named-parameter punctuation",children:"afterPluginsLoaded"}),n.jsx(s.span,{className:"token punctuation",children:":"})," appHost ",n.jsx(s.span,{className:"token operator",children:"=>"})," ",n.jsx(s.span,{className:"token punctuation",children:"{"}),`
            `,n.jsx(s.span,{className:"token class-name",children:n.jsx(s.span,{className:"token keyword",children:"var"})})," pages ",n.jsx(s.span,{className:"token operator",children:"="})," appHost",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsxs(s.span,{className:"token generic-method",children:[n.jsx(s.span,{className:"token function",children:"Resolve"}),n.jsxs(s.span,{className:"token generic class-name",children:[n.jsx(s.span,{className:"token punctuation",children:"<"}),"MarkdownPages",n.jsx(s.span,{className:"token punctuation",children:">"})]})]}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
            `,n.jsx(s.span,{className:"token class-name",children:n.jsx(s.span,{className:"token keyword",children:"var"})})," whatsNew ",n.jsx(s.span,{className:"token operator",children:"="})," appHost",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsxs(s.span,{className:"token generic-method",children:[n.jsx(s.span,{className:"token function",children:"Resolve"}),n.jsxs(s.span,{className:"token generic class-name",children:[n.jsx(s.span,{className:"token punctuation",children:"<"}),"MarkdownWhatsNew",n.jsx(s.span,{className:"token punctuation",children:">"})]})]}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
            `,n.jsx(s.span,{className:"token class-name",children:n.jsx(s.span,{className:"token keyword",children:"var"})})," blogPosts ",n.jsx(s.span,{className:"token operator",children:"="})," appHost",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsxs(s.span,{className:"token generic-method",children:[n.jsx(s.span,{className:"token function",children:"Resolve"}),n.jsxs(s.span,{className:"token generic class-name",children:[n.jsx(s.span,{className:"token punctuation",children:"<"}),"MarkdownBlog",n.jsx(s.span,{className:"token punctuation",children:">"})]})]}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
            
            `,n.jsx(s.span,{className:"token class-name",children:n.jsx(s.span,{className:"token keyword",children:"var"})})," features ",n.jsx(s.span,{className:"token operator",children:"="})," ",n.jsx(s.span,{className:"token keyword",children:"new"})," ",n.jsxs(s.span,{className:"token constructor-invocation class-name",children:["IMarkdownPages",n.jsx(s.span,{className:"token punctuation",children:"["}),n.jsx(s.span,{className:"token punctuation",children:"]"})]})," ",n.jsx(s.span,{className:"token punctuation",children:"{"})," pages",n.jsx(s.span,{className:"token punctuation",children:","})," whatsNew",n.jsx(s.span,{className:"token punctuation",children:","})," blogPosts ",n.jsx(s.span,{className:"token punctuation",children:"}"}),n.jsx(s.span,{className:"token punctuation",children:";"}),` 
            features`,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"Each"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"x ",n.jsx(s.span,{className:"token operator",children:"=>"})," x",n.jsx(s.span,{className:"token punctuation",children:"."}),"VirtualFiles ",n.jsx(s.span,{className:"token operator",children:"="})," appHost",n.jsx(s.span,{className:"token punctuation",children:"."}),"VirtualFiles",n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`

            `,n.jsx(s.span,{className:"token comment",children:"// Custom initialization"}),`
            blogPosts`,n.jsx(s.span,{className:"token punctuation",children:"."}),"Authors ",n.jsx(s.span,{className:"token operator",children:"="})," Authors",n.jsx(s.span,{className:"token punctuation",children:";"}),`

            `,n.jsx(s.span,{className:"token comment",children:"// Load feature markdown content"}),`
            pages`,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"LoadFrom"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token string",children:'"_pages"'}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
            whatsNew`,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"LoadFrom"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token string",children:'"_whatsnew"'}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
            blogPosts`,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"LoadFrom"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token string",children:'"_posts"'}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
        `,n.jsx(s.span,{className:"token punctuation",children:"}"}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
    `,n.jsx(s.span,{className:"token punctuation",children:"}"}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
    `,n.jsx(s.span,{className:"token comment",children:"//..."}),`
`,n.jsx(s.span,{className:"token punctuation",children:"}"}),`
`]})})}),`
`,n.jsx(s.p,{children:"These dependencies are then injected in the feature's Razor Pages to query and render the loaded markdown content."}),`
`,n.jsx(s.h3,{children:"Custom Frontmatter"}),`
`,n.jsxs(s.p,{children:["You can extend the ",n.jsx(s.code,{children:"MarkdownFileInfo"}),` type used to maintain the markdown content and metadata of each loaded Markdown file
by adding any additional metadata you want included as C# properties on:`]}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-csharp",children:n.jsxs(s.code,{className:"language-csharp",children:[n.jsx(s.span,{className:"token comment",children:"// Add additional frontmatter info to include"}),`
`,n.jsx(s.span,{className:"token keyword",children:"public"})," ",n.jsx(s.span,{className:"token keyword",children:"class"})," ",n.jsx(s.span,{className:"token class-name",children:"MarkdownFileInfo"})," ",n.jsx(s.span,{className:"token punctuation",children:":"})," ",n.jsx(s.span,{className:"token type-list",children:n.jsx(s.span,{className:"token class-name",children:"MarkdownFileBase"})}),`
`,n.jsx(s.span,{className:"token punctuation",children:"{"}),`
`,n.jsx(s.span,{className:"token punctuation",children:"}"}),`
`]})})}),`
`,n.jsxs(s.p,{children:[`Any additional properties are automatically populated using ServiceStack's
`,n.jsx(s.a,{href:"https://docs.servicestack.net/auto-mapping",children:"built-in Automapping"}),` which includes rich support for converting string frontmatter
values into native .NET types.`]}),`
`,n.jsx(s.h3,{children:"Updating to latest versions"}),`
`,n.jsxs(s.p,{children:[`You can easily update all the JavaScript dependencies used in
`,n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/postinstall.js",children:"postinstall.js"})," by running:"]}),`
`,n.jsx(s.sh,{children:n.jsx(s.p,{children:"node postinstall.js"})}),`
`,n.jsxs(s.p,{children:["This will also update the Markdown features ",n.jsx(s.code,{children:"*.cs"}),` implementations which is delivered as source files instead of an external
NuGet package to enable full customization, easier debugging whilst supporting easy upgrades.`]}),`
`,n.jsxs(s.p,{children:["If you do customize any of the ",n.jsx(s.code,{children:".cs"})," files, you'll want to exclude them from being updated by removing them from:"]}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-js",children:n.jsxs(s.code,{className:"language-js",children:[n.jsx(s.span,{className:"token keyword",children:"const"})," hostFiles ",n.jsx(s.span,{className:"token operator",children:"="})," ",n.jsx(s.span,{className:"token punctuation",children:"["}),`
    `,n.jsx(s.span,{className:"token string",children:"'Markdown.Blog.cs'"}),n.jsx(s.span,{className:"token punctuation",children:","}),`
    `,n.jsx(s.span,{className:"token string",children:"'Markdown.Pages.cs'"}),n.jsx(s.span,{className:"token punctuation",children:","}),`
    `,n.jsx(s.span,{className:"token string",children:"'Markdown.WhatsNew.cs'"}),n.jsx(s.span,{className:"token punctuation",children:","}),`
    `,n.jsx(s.span,{className:"token string",children:"'MarkdownPagesBase.cs'"}),n.jsx(s.span,{className:"token punctuation",children:","}),`
`,n.jsx(s.span,{className:"token punctuation",children:"]"}),`
`]})})}),`
`,n.jsx(s.h3,{children:"Markdown Tag Helper"}),`
`,n.jsxs(s.p,{children:["The included ",n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/MarkdownTagHelper.cs",children:"MarkdownTagHelper.cs"}),` can be used
in hybrid Razor Pages like `,n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/About.cshtml",children:"About.cshtml"}),`
to render the `,n.jsx(s.a,{href:"https://razor-ssg.web-templates.io/about",children:"/about"}),` page which requires the flexibility of Razor Pages with a static content component which you
prefer to maintain inline with Markdown.`]}),`
`,n.jsxs(s.p,{children:["The ",n.jsx(s.code,{children:"<markdown />"})," tag helper renders plain HTML, which you can apply ",n.jsx(s.a,{href:"https://tailwindcss.com/docs/typography-plugin",children:"Tailwind's @typography"}),`
styles by including `,n.jsx(s.strong,{children:"typography.css"})," and annotating it with your preferred ",n.jsx(s.code,{children:"prose"})," variant, e.g:"]}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-html",children:n.jsxs(s.code,{className:"language-html",children:[n.jsxs(s.span,{className:"token tag",children:[n.jsxs(s.span,{className:"token tag",children:[n.jsx(s.span,{className:"token punctuation",children:"<"}),"link"]})," ",n.jsx(s.span,{className:"token attr-name",children:"rel"}),n.jsxs(s.span,{className:"token attr-value",children:[n.jsx(s.span,{className:"token punctuation attr-equals",children:"="}),n.jsx(s.span,{className:"token punctuation",children:'"'}),"stylesheet",n.jsx(s.span,{className:"token punctuation",children:'"'})]})," ",n.jsx(s.span,{className:"token attr-name",children:"href"}),n.jsxs(s.span,{className:"token attr-value",children:[n.jsx(s.span,{className:"token punctuation attr-equals",children:"="}),n.jsx(s.span,{className:"token punctuation",children:'"'}),"css/typography.css",n.jsx(s.span,{className:"token punctuation",children:'"'})]}),n.jsx(s.span,{className:"token punctuation",children:">"})]}),`
`,n.jsxs(s.span,{className:"token tag",children:[n.jsxs(s.span,{className:"token tag",children:[n.jsx(s.span,{className:"token punctuation",children:"<"}),"markdown"]})," ",n.jsx(s.span,{className:"token attr-name",children:"class"}),n.jsxs(s.span,{className:"token attr-value",children:[n.jsx(s.span,{className:"token punctuation attr-equals",children:"="}),n.jsx(s.span,{className:"token punctuation",children:'"'}),"prose",n.jsx(s.span,{className:"token punctuation",children:'"'})]}),n.jsx(s.span,{className:"token punctuation",children:">"})]}),`
  Markdown content...
`,n.jsxs(s.span,{className:"token tag",children:[n.jsxs(s.span,{className:"token tag",children:[n.jsx(s.span,{className:"token punctuation",children:"</"}),"markdown"]}),n.jsx(s.span,{className:"token punctuation",children:">"})]}),`
`]})})}),`
`,n.jsx(s.h2,{children:"Static Static Generation (SSG)"}),`
`,n.jsxs(s.p,{children:[`All features up till now describes how this template implements a Markdown powered Razor Pages .NET application, where this template
differs in its published output, where instead of a .NET App deployed to a VM or App server it generates static `,n.jsx(s.code,{children:"*.html"}),` files that's
bundled together with `,n.jsx(s.code,{children:"/wwwroot"})," static assets in the ",n.jsx(s.code,{children:"/dist"}),` folder that can be previewed by launching a HTTP Server from that
folder with the built-in npm script:`]}),`
`,n.jsx(s.sh,{children:n.jsx(s.p,{children:"npm run serve"})}),`
`,n.jsxs(s.p,{children:["To run ",n.jsx(s.strong,{children:"npx http-server"})," on ",n.jsx(s.code,{children:"http://localhost:8080"}),` that you can open in a browser to preview the published version of your
site as it would be when hosted on a CDN.`]}),`
`,n.jsx(s.h3,{children:"Static Razor Pages"}),`
`,n.jsx(s.p,{children:"The static generation functionality works by scanning all your Razor Pages and prerendering the pages with prerendering instructions."}),`
`,n.jsx(s.h3,{children:"Pages with Static Routes"}),`
`,n.jsxs(s.p,{children:["Pages with static routes can be marked to be prerendered by annotating it with the ",n.jsx(s.code,{children:"[RenderStatic]"}),` attribute as done in
`,n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/About.cshtml",children:"About.cshtml"}),":"]}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-csharp",children:n.jsxs(s.code,{className:"language-csharp",children:["@page ",n.jsx(s.span,{className:"token string",children:'"/about"'}),`
@attribute `,n.jsx(s.span,{className:"token punctuation",children:"["}),"RenderStatic",n.jsx(s.span,{className:"token punctuation",children:"]"}),`
`]})})}),`
`,n.jsxs(s.p,{children:["Which saves the pre-rendered page using the pages route with a .html suffix, e.g: ",n.jsx(s.code,{children:"/{@page route}.html"}),` whilst pages with static
routes with a trailing `,n.jsx(s.code,{children:"/"})," are saved to ",n.jsx(s.code,{children:"/{@page route}/index.html"}),` as done for
`,n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Index.cshtml",children:"Posts/Index.cshtml"}),":"]}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-csharp",children:n.jsxs(s.code,{className:"language-csharp",children:["@page ",n.jsx(s.span,{className:"token string",children:'"/posts/"'}),`
@attribute `,n.jsx(s.span,{className:"token punctuation",children:"["}),"RenderStatic",n.jsx(s.span,{className:"token punctuation",children:"]"}),`
`]})})}),`
`,n.jsx(s.h4,{children:"Explicit generated paths"}),`
`,n.jsx(s.p,{children:`To keep the generated pages in-sync with using the same routes as your Razor Pages in development it's recommended to use the implied
rendered paths, but if preferred you can specify which path the page should be rendered to instead with:`}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-csharp",children:n.jsxs(s.code,{className:"language-csharp",children:["@page ",n.jsx(s.span,{className:"token string",children:'"/posts/"'}),`
@attribute `,n.jsx(s.span,{className:"token punctuation",children:"["}),n.jsx(s.span,{className:"token function",children:"RenderStatic"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token string",children:'"/posts/index.html"'}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:"]"}),`
`]})})}),`
`,n.jsx(s.h3,{children:"Pages with Dynamic Routes"}),`
`,n.jsxs(s.p,{children:["Prerendering dynamic pages follows ",n.jsx(s.a,{href:"https://nextjs.org/docs/basic-features/data-fetching/get-static-props",children:"Next.js getStaticProps"}),`
convention which you can implement using `,n.jsx(s.code,{children:"IRenderStatic<PageModel>"}),` by returning a Page Model for each page that should be generated
as done in `,n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Post.cshtml",children:"Posts/Post.cshtml"}),` and
`,n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Page.cshtml",children:"Page.cshtml"}),":"]}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-csharp",children:n.jsxs(s.code,{className:"language-csharp",children:["@page ",n.jsx(s.span,{className:"token string",children:'"/{slug}"'}),`
@model MyApp`,n.jsx(s.span,{className:"token punctuation",children:"."}),`Page

@implements `,n.jsxs(s.span,{className:"token return-type class-name",children:["IRenderStatic",n.jsx(s.span,{className:"token punctuation",children:"<"}),"MyApp",n.jsx(s.span,{className:"token punctuation",children:"."}),"Page",n.jsx(s.span,{className:"token punctuation",children:">"})]}),`
@functions `,n.jsx(s.span,{className:"token punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"token keyword",children:"public"})," ",n.jsxs(s.span,{className:"token return-type class-name",children:["List",n.jsx(s.span,{className:"token punctuation",children:"<"}),"Page",n.jsx(s.span,{className:"token punctuation",children:">"})]})," ",n.jsx(s.span,{className:"token function",children:"GetStaticProps"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token class-name",children:"RenderContext"})," ctx",n.jsx(s.span,{className:"token punctuation",children:")"}),`
    `,n.jsx(s.span,{className:"token punctuation",children:"{"}),`
        `,n.jsx(s.span,{className:"token class-name",children:n.jsx(s.span,{className:"token keyword",children:"var"})})," markdown ",n.jsx(s.span,{className:"token operator",children:"="})," ctx",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsxs(s.span,{className:"token generic-method",children:[n.jsx(s.span,{className:"token function",children:"Resolve"}),n.jsxs(s.span,{className:"token generic class-name",children:[n.jsx(s.span,{className:"token punctuation",children:"<"}),"MarkdownPages",n.jsx(s.span,{className:"token punctuation",children:">"})]})]}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
        `,n.jsx(s.span,{className:"token keyword",children:"return"})," markdown",n.jsx(s.span,{className:"token punctuation",children:"."}),"VisiblePages",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"Map"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"page ",n.jsx(s.span,{className:"token operator",children:"=>"})," ",n.jsx(s.span,{className:"token keyword",children:"new"})," ",n.jsx(s.span,{className:"token constructor-invocation class-name",children:"Page"})," ",n.jsx(s.span,{className:"token punctuation",children:"{"})," Slug ",n.jsx(s.span,{className:"token operator",children:"="})," page",n.jsx(s.span,{className:"token punctuation",children:"."}),"Slug",n.jsx(s.span,{className:"token operator",children:"!"})," ",n.jsx(s.span,{className:"token punctuation",children:"}"}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
    `,n.jsx(s.span,{className:"token punctuation",children:"}"}),`
`,n.jsx(s.span,{className:"token punctuation",children:"}"}),`
`,n.jsx(s.span,{className:"token range operator",children:".."}),n.jsx(s.span,{className:"token punctuation",children:"."}),`
`]})})}),`
`,n.jsxs(s.p,{children:["In this case it returns a Page Model for every ",n.jsx(s.strong,{children:"Visible"}),` markdown page in
`,n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/tree/main/MyApp/_pages",children:"/_pages"})," that ends up rendering the following pages in ",n.jsx(s.code,{children:"/dist"}),":"]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:n.jsx(s.code,{children:"/privacy.html"})}),`
`,n.jsx(s.li,{children:n.jsx(s.code,{children:"/speaking.html"})}),`
`,n.jsx(s.li,{children:n.jsx(s.code,{children:"/uses.html"})}),`
`]}),`
`,n.jsx(s.h3,{children:"Limitations"}),`
`,n.jsxs(s.p,{children:["The primary limitations for developing statically generated Apps is that a ",n.jsx(s.strong,{children:"snapshot"}),` of entire App is generated at deployment,
which prohibits being able to render different content `,n.jsx(s.strong,{children:"per request"}),`, e.g. for Authenticated users which would require executing
custom JavaScript after the page loads to dynamically alter the page's initial content.`]}),`
`,n.jsx(s.p,{children:`Otherwise in practice you'll be able develop your Razor Pages utilizing Razor's full feature-set, the primary concessions stem
from Pages being executed in a static context which prohibits pages from returning dynamic content per request, instead any
"different views" should be maintained in separate pages.`}),`
`,n.jsx(s.h4,{children:"No QueryString Params"}),`
`,n.jsxs(s.p,{children:["As the generated pages should adopt the same routes as your Razor Pages you'll need to avoid relying on ",n.jsx(s.strong,{children:"?QueryString"}),` params
and instead capture all required parameters for a page in its `,n.jsx(s.strong,{children:"@page route"})," as done for:"]}),`
`,n.jsx(s.p,{children:n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Author.cshtml",children:"Posts/Author.cshtml"})}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-csharp",children:n.jsxs(s.code,{className:"language-csharp",children:["@page ",n.jsx(s.span,{className:"token string",children:'"/posts/author/{slug}"'}),`
@model AuthorModel
@inject MarkdownBlog Blog

@implements `,n.jsxs(s.span,{className:"token return-type class-name",children:["IRenderStatic",n.jsx(s.span,{className:"token punctuation",children:"<"}),"AuthorModel",n.jsx(s.span,{className:"token punctuation",children:">"})]}),`
@functions `,n.jsx(s.span,{className:"token punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"token keyword",children:"public"})," ",n.jsxs(s.span,{className:"token return-type class-name",children:["List",n.jsx(s.span,{className:"token punctuation",children:"<"}),"AuthorModel",n.jsx(s.span,{className:"token punctuation",children:">"})]})," ",n.jsx(s.span,{className:"token function",children:"GetStaticProps"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token class-name",children:"RenderContext"})," ctx",n.jsx(s.span,{className:"token punctuation",children:")"})," ",n.jsx(s.span,{className:"token operator",children:"=>"})," ctx",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsxs(s.span,{className:"token generic-method",children:[n.jsx(s.span,{className:"token function",children:"Resolve"}),n.jsxs(s.span,{className:"token generic class-name",children:[n.jsx(s.span,{className:"token punctuation",children:"<"}),"MarkdownBlog",n.jsx(s.span,{className:"token punctuation",children:">"})]})]}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),`
        `,n.jsx(s.span,{className:"token punctuation",children:"."}),"AuthorSlugMap",n.jsx(s.span,{className:"token punctuation",children:"."}),"Keys",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"Map"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"x ",n.jsx(s.span,{className:"token operator",children:"=>"})," ",n.jsx(s.span,{className:"token keyword",children:"new"})," ",n.jsx(s.span,{className:"token constructor-invocation class-name",children:"AuthorModel"})," ",n.jsx(s.span,{className:"token punctuation",children:"{"})," Slug ",n.jsx(s.span,{className:"token operator",children:"="})," x ",n.jsx(s.span,{className:"token punctuation",children:"}"}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
`,n.jsx(s.span,{className:"token punctuation",children:"}"}),`
`,n.jsx(s.span,{className:"token range operator",children:".."}),n.jsx(s.span,{className:"token punctuation",children:"."}),`
`]})})}),`
`,n.jsxs(s.p,{children:["Which lists all posts by an Author, e.g: ",n.jsx(s.a,{href:"https://razor-ssg.web-templates.io/posts/author/lucy-bates",children:"/posts/author/lucy-bates"}),", likewise required for:"]}),`
`,n.jsx(s.p,{children:n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Tagged.cshtml",children:"Posts/Tagged.cshtml"})}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-csharp",children:n.jsxs(s.code,{className:"language-csharp",children:["@page ",n.jsx(s.span,{className:"token string",children:'"/posts/tagged/{slug}"'}),`
@model TaggedModel
@inject MarkdownBlog Blog

@implements `,n.jsxs(s.span,{className:"token return-type class-name",children:["IRenderStatic",n.jsx(s.span,{className:"token punctuation",children:"<"}),"TaggedModel",n.jsx(s.span,{className:"token punctuation",children:">"})]}),`
@functions `,n.jsx(s.span,{className:"token punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"token keyword",children:"public"})," ",n.jsxs(s.span,{className:"token return-type class-name",children:["List",n.jsx(s.span,{className:"token punctuation",children:"<"}),"TaggedModel",n.jsx(s.span,{className:"token punctuation",children:">"})]})," ",n.jsx(s.span,{className:"token function",children:"GetStaticProps"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token class-name",children:"RenderContext"})," ctx",n.jsx(s.span,{className:"token punctuation",children:")"})," ",n.jsx(s.span,{className:"token operator",children:"=>"})," ctx",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsxs(s.span,{className:"token generic-method",children:[n.jsx(s.span,{className:"token function",children:"Resolve"}),n.jsxs(s.span,{className:"token generic class-name",children:[n.jsx(s.span,{className:"token punctuation",children:"<"}),"MarkdownBlog",n.jsx(s.span,{className:"token punctuation",children:">"})]})]}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),`
        `,n.jsx(s.span,{className:"token punctuation",children:"."}),"TagSlugMap",n.jsx(s.span,{className:"token punctuation",children:"."}),"Keys",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"Map"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"x ",n.jsx(s.span,{className:"token operator",children:"=>"})," ",n.jsx(s.span,{className:"token keyword",children:"new"})," ",n.jsx(s.span,{className:"token constructor-invocation class-name",children:"TaggedModel"})," ",n.jsx(s.span,{className:"token punctuation",children:"{"})," Slug ",n.jsx(s.span,{className:"token operator",children:"="})," x ",n.jsx(s.span,{className:"token punctuation",children:"}"}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
`,n.jsx(s.span,{className:"token punctuation",children:"}"}),`
`,n.jsx(s.span,{className:"token range operator",children:".."}),n.jsx(s.span,{className:"token punctuation",children:"."}),`
`]})})}),`
`,n.jsxs(s.p,{children:["Which lists all related posts with a specific tag, e.g: ",n.jsx(s.a,{href:"https://razor-ssg.web-templates.io/posts/tagged/markdown",children:"/posts/tagged/markdown"}),", and for:"]}),`
`,n.jsx(s.p,{children:n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Year.cshtml",children:"Posts/Year.cshtml"})}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-csharp",children:n.jsxs(s.code,{className:"language-csharp",children:["@page ",n.jsx(s.span,{className:"token string",children:'"/posts/year/{year}"'}),`
@model YearModel
@inject MarkdownBlog Blog

@implements `,n.jsxs(s.span,{className:"token return-type class-name",children:["IRenderStatic",n.jsx(s.span,{className:"token punctuation",children:"<"}),"YearModel",n.jsx(s.span,{className:"token punctuation",children:">"})]}),`
@functions `,n.jsx(s.span,{className:"token punctuation",children:"{"}),`
    `,n.jsx(s.span,{className:"token keyword",children:"public"})," ",n.jsxs(s.span,{className:"token return-type class-name",children:["List",n.jsx(s.span,{className:"token punctuation",children:"<"}),"YearModel",n.jsx(s.span,{className:"token punctuation",children:">"})]})," ",n.jsx(s.span,{className:"token function",children:"GetStaticProps"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token class-name",children:"RenderContext"})," ctx",n.jsx(s.span,{className:"token punctuation",children:")"})," ",n.jsx(s.span,{className:"token operator",children:"=>"})," ctx",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsxs(s.span,{className:"token generic-method",children:[n.jsx(s.span,{className:"token function",children:"Resolve"}),n.jsxs(s.span,{className:"token generic class-name",children:[n.jsx(s.span,{className:"token punctuation",children:"<"}),"MarkdownBlog",n.jsx(s.span,{className:"token punctuation",children:">"})]})]}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),`
        `,n.jsx(s.span,{className:"token punctuation",children:"."}),"VisiblePosts",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"Select"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"x ",n.jsx(s.span,{className:"token operator",children:"=>"})," x",n.jsx(s.span,{className:"token punctuation",children:"."}),"Date",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"GetValueOrDefault"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:"."}),"Year",n.jsx(s.span,{className:"token punctuation",children:")"}),`
            `,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"Distinct"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"Map"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"x ",n.jsx(s.span,{className:"token operator",children:"=>"})," ",n.jsx(s.span,{className:"token keyword",children:"new"})," ",n.jsx(s.span,{className:"token constructor-invocation class-name",children:"YearModel"})," ",n.jsx(s.span,{className:"token punctuation",children:"{"})," Year ",n.jsx(s.span,{className:"token operator",children:"="})," x ",n.jsx(s.span,{className:"token punctuation",children:"}"}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
`,n.jsx(s.span,{className:"token punctuation",children:"}"}),`

`,n.jsx(s.span,{className:"token range operator",children:".."}),n.jsx(s.span,{className:"token punctuation",children:"."}),`
`]})})}),`
`,n.jsxs(s.p,{children:["Which lists all posts published in a specific year, e.g: ",n.jsx(s.a,{href:"https://razor-ssg.web-templates.io/posts/year/2023",children:"/posts/year/2023"}),"."]}),`
`,n.jsxs(s.p,{children:[`Conceivably these "different views" could've been implemented by the same page with different `,n.jsx(s.code,{children:"?author"}),", ",n.jsx(s.code,{children:"?tag"})," and ",n.jsx(s.code,{children:"?year"}),`
QueryString params, but are instead extracted into different pages to support its statically generated `,n.jsx(s.code,{children:"*.html"})," outputs."]}),`
`,n.jsx(s.h2,{children:"Prerendering Task"}),`
`,n.jsxs(s.p,{children:["The ",n.jsx(s.strong,{children:"prerender"})," ",n.jsx(s.a,{href:"https://docs.servicestack.net/app-tasks",children:"AppTask"}),` that pre-renders the entire website is also registered in
`,n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Configure.Ssg.cs",children:"Configure.Ssg.cs"}),":"]}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-csharp",children:n.jsxs(s.code,{className:"language-csharp",children:[n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"ConfigureAppHost"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token named-parameter punctuation",children:"afterAppHostInit"}),n.jsx(s.span,{className:"token punctuation",children:":"})," appHost ",n.jsx(s.span,{className:"token operator",children:"=>"}),`
  `,n.jsx(s.span,{className:"token punctuation",children:"{"}),`
      `,n.jsx(s.span,{className:"token comment",children:"// prerender with: `$ npm run prerender` "}),`
      AppTasks`,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"Register"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token string",children:'"prerender"'}),n.jsx(s.span,{className:"token punctuation",children:","})," args ",n.jsx(s.span,{className:"token operator",children:"=>"}),`
      `,n.jsx(s.span,{className:"token punctuation",children:"{"}),`
          `,n.jsx(s.span,{className:"token class-name",children:n.jsx(s.span,{className:"token keyword",children:"var"})})," distDir ",n.jsx(s.span,{className:"token operator",children:"="})," appHost",n.jsx(s.span,{className:"token punctuation",children:"."}),"ContentRootDirectory",n.jsx(s.span,{className:"token punctuation",children:"."}),"RealPath",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"CombineWith"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token string",children:'"dist"'}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
          `,n.jsx(s.span,{className:"token keyword",children:"if"})," ",n.jsx(s.span,{className:"token punctuation",children:"("}),"Directory",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"Exists"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"distDir",n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:")"}),`
              FileSystemVirtualFiles`,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"DeleteDirectory"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"distDir",n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
          FileSystemVirtualFiles`,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"CopyAll"}),n.jsx(s.span,{className:"token punctuation",children:"("}),`
              `,n.jsx(s.span,{className:"token keyword",children:"new"})," ",n.jsx(s.span,{className:"token constructor-invocation class-name",children:"DirectoryInfo"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"appHost",n.jsx(s.span,{className:"token punctuation",children:"."}),"ContentRootDirectory",n.jsx(s.span,{className:"token punctuation",children:"."}),"RealPath",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"CombineWith"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token string",children:'"wwwroot"'}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:","}),`
              `,n.jsx(s.span,{className:"token keyword",children:"new"})," ",n.jsx(s.span,{className:"token constructor-invocation class-name",children:"DirectoryInfo"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"distDir",n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
          `,n.jsx(s.span,{className:"token class-name",children:n.jsx(s.span,{className:"token keyword",children:"var"})})," razorFiles ",n.jsx(s.span,{className:"token operator",children:"="})," appHost",n.jsx(s.span,{className:"token punctuation",children:"."}),"VirtualFiles",n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"GetAllMatchingFiles"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token string",children:'"*.cshtml"'}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
          RazorSsg`,n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"PrerenderAsync"}),n.jsx(s.span,{className:"token punctuation",children:"("}),"appHost",n.jsx(s.span,{className:"token punctuation",children:","})," razorFiles",n.jsx(s.span,{className:"token punctuation",children:","})," distDir",n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"GetAwaiter"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:"."}),n.jsx(s.span,{className:"token function",children:"GetResult"}),n.jsx(s.span,{className:"token punctuation",children:"("}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
      `,n.jsx(s.span,{className:"token punctuation",children:"}"}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
  `,n.jsx(s.span,{className:"token punctuation",children:"}"}),n.jsx(s.span,{className:"token punctuation",children:")"}),n.jsx(s.span,{className:"token punctuation",children:";"}),`
  `,n.jsx(s.span,{className:"token comment",children:"//..."}),`
`]})})}),`
`,n.jsx(s.p,{children:"Which we can see:"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:["Deletes ",n.jsx(s.code,{children:"/dist"})," folder"]}),`
`,n.jsxs(s.li,{children:["Copies ",n.jsx(s.code,{children:"/wwwroot"})," contents into ",n.jsx(s.code,{children:"/dist"})]}),`
`,n.jsxs(s.li,{children:["Passes all App's Razor ",n.jsx(s.code,{children:"*.cshtml"})," files to ",n.jsx(s.code,{children:"RazorSsg"})," to do the pre-rendering"]}),`
`]}),`
`,n.jsxs(s.p,{children:["Where it processes all pages with ",n.jsx(s.code,{children:"[RenderStatic]"})," and ",n.jsx(s.code,{children:"IRenderStatic<PageModel>"}),` prerendering instructions to the
specified `,n.jsx(s.code,{children:"/dist"})," folder."]}),`
`,n.jsx(s.h3,{children:"Previewing prerendered site"}),`
`,n.jsx(s.p,{children:"To preview your SSG website, run the prerendered task with:"}),`
`,n.jsx(s.sh,{children:n.jsx(s.p,{children:"npm run prerender"})}),`
`,n.jsxs(s.p,{children:["Which renders your site to ",n.jsx(s.code,{children:"/_dist"})," which you can run a HTTP Server from with:"]}),`
`,n.jsx(s.sh,{children:n.jsx(s.p,{children:"npm run serve"})}),`
`,n.jsxs(s.p,{children:["That you can preview with your browser at ",n.jsx(s.code,{children:"http://localhost:8080"}),"."]}),`
`,n.jsx(s.h3,{children:"Publishing"}),`
`,n.jsxs(s.p,{children:["The included ",n.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/.github/workflows/build.yml",children:"build.yml"}),` GitHub Action
takes care of running the prerendered task and deploying it to your Repo's GitHub Pages where it will be available at:`]}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-unknown",children:n.jsx(s.code,{className:"language-unknown",children:"https://$org_name.github.io/$repo/"})})}),`
`,n.jsxs(s.p,{children:["Alternatively you can use a ",n.jsx(s.a,{href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages",children:"Custom domain for GitHub Pages"}),`
by registering a CNAME DNS entry for your preferred Custom Domain, e.g:`]}),`
`,n.jsxs(s.table,{children:[n.jsx(s.thead,{children:n.jsxs(s.tr,{children:[n.jsx(s.th,{children:"Record"}),n.jsx(s.th,{children:"Type"}),n.jsx(s.th,{children:"Value"}),n.jsx(s.th,{children:"TTL"})]})}),n.jsx(s.tbody,{children:n.jsxs(s.tr,{children:[n.jsx(s.td,{children:n.jsx(s.strong,{children:"mydomain.org"})}),n.jsx(s.td,{children:"CNAME"}),n.jsxs(s.td,{children:[n.jsx(s.strong,{children:"org_name"}),".github.io"]}),n.jsx(s.td,{children:"3600"})]})})]}),`
`,n.jsxs(s.p,{children:["That you can either ",n.jsx(s.a,{href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain",children:"configure in your Repo settings"}),`
or if you prefer to maintain it with your code-base, save the domain name to `,n.jsx(s.code,{children:"/wwwroot/CNAME"}),", e.g:"]}),`
`,n.jsx(s.div,{className:"remark-highlight",children:n.jsx(s.pre,{className:"language-unknown",children:n.jsx(s.code,{className:"language-unknown",children:"www.mydomain.org"})})}),`
`,n.jsx(s.h3,{children:"Benefits after migrating from Jekyll"}),`
`,n.jsxs(s.p,{children:["Whilst still only at ",n.jsx(s.strong,{children:"v1"})," release, we found it already had a number of advantages over the existing Jekyll static website:"]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Faster live reloads"}),`
`,n.jsx(s.li,{children:"C#/Razor more type-save & productive than Ruby/Liquid"}),`
`,n.jsx(s.li,{children:"Greater flexibility in implementing new features"}),`
`,n.jsx(s.li,{children:"Better IDE support (from Rider)"}),`
`,n.jsx(s.li,{children:"Ability to reuse our .NET libraries"}),`
`,n.jsx(s.li,{children:"Better development experience"}),`
`]}),`
`,n.jsx(s.p,{children:`The last point ultimately prompted seeking an alternative solution as previously Jekyll was used from Windows/WSL which
was awkward to manage from a different filesystem with Jekyll upgrades breaking RubyMine support forcing the use of
text editors to maintain its code-base and content.`}),`
`,n.jsxs(s.h3,{children:["Used by the new ",n.jsx(s.a,{href:"https://servicestack.net",children:"servicestack.net"})]}),`
`,n.jsxs(s.p,{children:[`Deterred by the growing complexity of current SSG solutions, we decided to create a new solution using C#/Razor
(our preferred technology for generating server HTML) with a clean implementation that allowed full control
with an `,n.jsx(s.strong,{children:"npm dependency-free"}),` solution letting us adopt our preferred approach to
`,n.jsx(s.a,{href:"https://servicestack.net/posts/javascript",children:"Simple, Modern JavaScript"})," without any build-tooling or SPA complexity."]}),`
`,n.jsxs(s.p,{children:["We're happy with the results of ",n.jsx(s.a,{href:"https://servicestack.net",children:"https://servicestack.net"})," new Razor SSG website:"]}),`
`,n.jsx(s.p,{children:n.jsx(s.a,{href:"https://servicestack.net",children:n.jsx(s.img,{src:"https://servicestack.net/img/posts/razor-ssg/servicestack.net.png",alt:""})})}),`
`,n.jsx(s.p,{children:"A clean, crisp code-base utilizing simple JS Module Vue 3 components, the source code of which is publicly maintained at:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"https://github.com/servicestack/servicestack.net",children:"https://github.com/servicestack/servicestack.net"})}),`
`]}),`
`,n.jsx(s.p,{children:"Which serves as a good example at how well this template scales for larger websites."}),`
`,n.jsx(s.h4,{children:"Markdown Videos Feature"}),`
`,n.jsx(s.p,{children:"It only needed one new Markdown feature to display our growing video library:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.a,{href:"https://github.com/ServiceStack/servicestack.net/tree/main/MyApp/_videos",children:"/_videos"})," - Directory of Markdown Video collections"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.a,{href:"https://github.com/ServiceStack/servicestack.net/blob/main/MyApp/Markdown.Videos.cs",children:"Markdown.Videos.cs"})," - Loading Video feature markdown content"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.a,{href:"https://github.com/ServiceStack/servicestack.net/blob/main/MyApp/Pages/Shared/VideoGroup.cshtml",children:"Shared/VideoGroup.cshtml"})," - Razor Page for displaying Video Collection"]}),`
`]}),`
`,n.jsx(s.p,{children:"Which you're free to reuse in your own websites needing a similar feature."}),`
`,n.jsx(s.h4,{children:"Feedback & Feature Requests Welcome"}),`
`,n.jsx(s.p,{children:`In future we'll look at expanding this template with generic Markdown features suitable for websites, blogs & portfolios,
or maintain a shared community collection if there ends up being community contributions of Razor SSG & Markdown features.`}),`
`,n.jsx(s.p,{children:"In the meantime, we welcome any feedback or new feature requests at:"}),`
`,n.jsx(s.h3,{children:n.jsx(s.a,{href:"https://servicestack.net/ideas",children:"https://servicestack.net/ideas"})})]})}function c(e={}){const{wrapper:s}=e.components||{};return s?n.jsx(s,{...e,children:n.jsx(a,{...e})}):a(e)}export{c as default};
