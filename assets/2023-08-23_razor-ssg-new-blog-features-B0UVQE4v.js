import{j as e,G as r}from"./index-BztdH8Fb.js";import{C as o}from"./ChartJs-5JuPAil6.js";function t(n){const s={a:"a",code:"code",copy:"copy",danger:"danger",div:"div",h2:"h2",h3:"h3",h4:"h4",img:"img",info:"info",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",tip:"tip",ul:"ul",warning:"warning",...n.components},{FileLayout:a}=s;return a||c("FileLayout",!0),e.jsxs(e.Fragment,{children:[e.jsx(s.h2,{children:"New Blogging features in Razor SSG"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://razor-ssg.web-templates.io",children:"Razor SSG"}),` is our Free Project Template for creating fast, statically generated Websites and Blogs with
Markdown & C# Razor Pages. A benefit of using Razor SSG to maintain this
`,e.jsx(s.a,{href:"https://github.com/ServiceStack/servicestack.net",children:"servicestack.net(github)"}),` website is that any improvements added
to our website end up being rolled into the Razor SSG Project Template for everyone else to enjoy.`]}),`
`,e.jsxs(s.p,{children:[`This latest release brings a number of features and enhancements to improve Razor SSG usage as a Blogging Platform -
a primary use-case we're focused on as we pen our `,e.jsx(s.a,{href:"https://servicestack.net/posts/year/2023",children:"22nd Blog Post for the year"}),` with improvements
in both discoverability and capability of blog posts:`]}),`
`,e.jsx(s.h3,{children:"RSS Feed"}),`
`,e.jsx(s.p,{children:`Razor SSG websites now generates a valid RSS Feed for its blog to support their readers who'd prefer to read blog posts
and notify them as they're published with their favorite RSS reader:`}),`
`,e.jsxs("div",{className:"not-prose my-8",children:[e.jsx("a",{href:"https://razor-ssg.web-templates.io/feed.xml",children:e.jsx("div",{className:"block flex justify-center shadow hover:shadow-lg rounded overflow-hidden",children:e.jsx("img",{className:"max-w-3xl py-8",src:"https://servicestack.net/img/posts/razor-ssg/valid-rss.png"})})}),e.jsxs("div",{className:"mt-4 flex justify-center",children:[e.jsx("a",{className:"text-indigo-600 hover:text-indigo-800",href:"https://razor-ssg.web-templates.io/feed.xml",children:"razor-ssg.web-templates.io/feed.xml"}),e.jsx("a",{className:"ml-4 text-indigo-600 hover:text-indigo-800",href:"https://servicestack.net/feed.xml",children:"servicestack.net/feed.xml"})]})]}),`
`,e.jsx(s.h3,{children:"Meta Headers support for Twitter cards and SEO"}),`
`,e.jsxs(s.p,{children:["Blog Posts and Pages now include additional ",e.jsx(s.code,{children:"<meta>"}),` HTML Headers to enable support for
`,e.jsx(s.a,{href:"https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards",children:"Twitter Cards"}),` in both
Twitter and Meta's new `,e.jsx(s.a,{href:"https://threads.net",children:"threads.net"}),", e.g:"]}),`
`,e.jsx("div",{className:"not-prose my-8 flex justify-center",children:e.jsx("a",{className:"block max-w-2xl",href:"https://www.threads.net/@servicestack/post/CvIFobPBs5h",children:e.jsx("div",{className:"block flex justify-center shadow hover:shadow-lg rounded overflow-hidden",children:e.jsx("img",{className:"py-8",src:"https://servicestack.net/img/posts/razor-ssg/twitter-cards.png"})})})}),`
`,e.jsx(s.h3,{children:"Improved Discoverability"}),`
`,e.jsx(s.p,{children:`To improve discoverability and increase site engagement, bottom of blog posts now include links to other posts by
the same Blog Author, including links to connect to their preferred social networks and contact preferences:`}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://servicestack.net/img/posts/razor-ssg/other-author-posts.png",alt:""})}),`
`,e.jsx(s.h3,{children:"Posts can include Vue Components"}),`
`,e.jsx(s.p,{children:"Blog Posts can now embed any global Vue Components directly in its Markdown, e.g:"}),`
`,e.jsx(s.div,{className:"remark-highlight",children:e.jsx(s.pre,{className:"language-html",children:e.jsxs(s.code,{className:"language-html",children:[e.jsxs(s.span,{className:"token tag",children:[e.jsxs(s.span,{className:"token tag",children:[e.jsx(s.span,{className:"token punctuation",children:"<"}),"GettingStarted"]})," ",e.jsx(s.span,{className:"token attr-name",children:"template"}),e.jsxs(s.span,{className:"token attr-value",children:[e.jsx(s.span,{className:"token punctuation attr-equals",children:"="}),e.jsx(s.span,{className:"token punctuation",children:'"'}),"press-react",e.jsx(s.span,{className:"token punctuation",children:'"'})]})," ",e.jsx(s.span,{className:"token punctuation",children:"/>"})]}),`
`]})})}),`
`,e.jsx(s.h4,{children:e.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/mjs/components/GettingStarted.mjs",children:"/mjs/components/GettingStarted.mjs"})}),`
`,e.jsx("div",{className:"not-prose my-20 flex justify-center",children:e.jsx(r,{template:"press-react"})}),`
`,e.jsx(s.h4,{children:"Individual Blog Post dependencies"}),`
`,e.jsx(a,{files:{wwwroot:{posts:{_:["<slug>.mjs","<slug>.css"]}}}}),`
`,e.jsxs(s.p,{children:["Just like Pages and Docs they can also include specific JavaScript ",e.jsx(s.strong,{children:".mjs"})," or ",e.jsx(s.strong,{children:".css"})," in the ",e.jsx(s.code,{children:"/wwwroot/posts"}),` folder
which will only be loaded for that post:`]}),`
`,e.jsxs(s.p,{children:["Now posts that need it can dynamically load large libraries like ",e.jsx(s.a,{href:"https://www.chartjs.org",children:"Chart.js"}),` and use it
inside a custom Vue component by creating a custom `,e.jsx(s.code,{children:"/posts/<slug>.mjs"}),` that exports what components and features
your blog post needs, e.g:`]}),`
`,e.jsx(s.h4,{children:e.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/posts/new-blog-features.mjs",children:"/posts/new-blog-features.mjs"})}),`
`,e.jsx(s.div,{className:"remark-highlight",children:e.jsx(s.pre,{className:"language-js",children:e.jsxs(s.code,{className:"language-js",children:[e.jsx(s.span,{className:"token keyword module",children:"import"})," ",e.jsx(s.span,{className:"token imports",children:e.jsx(s.span,{className:"token maybe-class-name",children:"ChartJs"})})," ",e.jsx(s.span,{className:"token keyword module",children:"from"})," ",e.jsx(s.span,{className:"token string",children:"'@/components/ChartJs'"}),`

`,e.jsx(s.span,{className:"token operator",children:"<"}),e.jsx(s.span,{className:"token maybe-class-name",children:"ChartJs"})," data",e.jsx(s.span,{className:"token operator",children:"="}),e.jsx(s.span,{className:"token punctuation",children:"{"}),"data",e.jsx(s.span,{className:"token punctuation",children:"}"})," ",e.jsx(s.span,{className:"token operator",children:"/"}),e.jsx(s.span,{className:"token operator",children:">"}),`
`]})})}),`
`,e.jsxs(s.p,{children:["In this case it enables support for ",e.jsx(s.a,{href:"https://www.chartjs.org",children:"Chart.js"}),` by including a custom Vue component that makes it
easy to create charts from Vue Components embedded in markdown:`]}),`
`,e.jsx(s.h4,{children:e.jsx(s.a,{href:"https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/_posts/components/ChartJs.tsx",children:"/components/ChartJs.tsx"})}),`
`,e.jsx(s.div,{className:"remark-highlight",children:e.jsx(s.pre,{className:"language-js",children:e.jsxs(s.code,{className:"language-js",children:[e.jsx(s.span,{className:"token keyword module",children:"import"})," ",e.jsxs(s.span,{className:"token imports",children:[e.jsx(s.span,{className:"token punctuation",children:"{"})," useEffect",e.jsx(s.span,{className:"token punctuation",children:","})," useRef ",e.jsx(s.span,{className:"token punctuation",children:"}"})]})," ",e.jsx(s.span,{className:"token keyword module",children:"from"})," ",e.jsx(s.span,{className:"token string",children:'"react"'}),`
`,e.jsx(s.span,{className:"token keyword module",children:"import"})," ",e.jsxs(s.span,{className:"token imports",children:[e.jsx(s.span,{className:"token punctuation",children:"{"})," addScript ",e.jsx(s.span,{className:"token punctuation",children:"}"})]})," ",e.jsx(s.span,{className:"token keyword module",children:"from"})," ",e.jsx(s.span,{className:"token string",children:'"@servicestack/client"'}),`

`,e.jsx(s.span,{className:"token keyword",children:"const"})," loadJs ",e.jsx(s.span,{className:"token operator",children:"="})," ",e.jsx(s.span,{className:"token function",children:"addScript"}),e.jsx(s.span,{className:"token punctuation",children:"("}),e.jsx(s.span,{className:"token string",children:"'https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js'"}),e.jsx(s.span,{className:"token punctuation",children:")"}),`

declare `,e.jsx(s.span,{className:"token keyword",children:"var"})," ",e.jsx(s.span,{className:"token literal-property property",children:"Chart"}),e.jsx(s.span,{className:"token operator",children:":"}),`any

type `,e.jsx(s.span,{className:"token maybe-class-name",children:"Props"})," ",e.jsx(s.span,{className:"token operator",children:"="})," ",e.jsx(s.span,{className:"token punctuation",children:"{"})," type",e.jsx(s.span,{className:"token operator",children:"?"}),e.jsx(s.span,{className:"token operator",children:":"}),"string",e.jsx(s.span,{className:"token punctuation",children:","})," data",e.jsx(s.span,{className:"token operator",children:"?"}),e.jsx(s.span,{className:"token operator",children:":"}),"any",e.jsx(s.span,{className:"token punctuation",children:","})," options",e.jsx(s.span,{className:"token operator",children:"?"}),e.jsx(s.span,{className:"token operator",children:":"}),"any ",e.jsx(s.span,{className:"token punctuation",children:"}"}),`

`,e.jsx(s.span,{className:"token keyword module",children:"export"})," ",e.jsx(s.span,{className:"token keyword module",children:"default"})," ",e.jsx(s.span,{className:"token punctuation",children:"("}),e.jsxs(s.span,{className:"token parameter",children:[e.jsx(s.span,{className:"token punctuation",children:"{"})," type",e.jsx(s.span,{className:"token punctuation",children:","})," data",e.jsx(s.span,{className:"token punctuation",children:","})," options ",e.jsx(s.span,{className:"token punctuation",children:"}"}),e.jsx(s.span,{className:"token operator",children:":"}),e.jsx(s.span,{className:"token maybe-class-name",children:"Props"})]}),e.jsx(s.span,{className:"token punctuation",children:")"})," ",e.jsx(s.span,{className:"token arrow operator",children:"=>"})," ",e.jsx(s.span,{className:"token punctuation",children:"{"}),`
    `,e.jsx(s.span,{className:"token keyword",children:"const"})," canvas ",e.jsx(s.span,{className:"token operator",children:"="})," useRef",e.jsx(s.span,{className:"token operator",children:"<"}),e.jsx(s.span,{className:"token maybe-class-name",children:"HTMLCanvasElement"}),e.jsx(s.span,{className:"token operator",children:">"}),e.jsx(s.span,{className:"token punctuation",children:"("}),e.jsx(s.span,{className:"token keyword null nil",children:"null"}),e.jsx(s.span,{className:"token punctuation",children:")"}),`
    `,e.jsx(s.span,{className:"token keyword",children:"let"})," ",e.jsx(s.span,{className:"token literal-property property",children:"chart"}),e.jsx(s.span,{className:"token operator",children:":"}),"any ",e.jsx(s.span,{className:"token operator",children:"="})," ",e.jsx(s.span,{className:"token keyword null nil",children:"null"}),`
    `,e.jsx(s.span,{className:"token function",children:"useEffect"}),e.jsx(s.span,{className:"token punctuation",children:"("}),e.jsx(s.span,{className:"token punctuation",children:"("}),e.jsx(s.span,{className:"token punctuation",children:")"})," ",e.jsx(s.span,{className:"token arrow operator",children:"=>"})," ",e.jsx(s.span,{className:"token punctuation",children:"{"}),`
        loadJs`,e.jsx(s.span,{className:"token punctuation",children:"."}),e.jsx(s.span,{className:"token method function property-access",children:"then"}),e.jsx(s.span,{className:"token punctuation",children:"("}),e.jsx(s.span,{className:"token punctuation",children:"("}),e.jsx(s.span,{className:"token punctuation",children:")"})," ",e.jsx(s.span,{className:"token arrow operator",children:"=>"})," ",e.jsx(s.span,{className:"token punctuation",children:"{"}),`
            options `,e.jsx(s.span,{className:"token operator",children:"??="})," ",e.jsx(s.span,{className:"token punctuation",children:"{"}),`
                `,e.jsx(s.span,{className:"token literal-property property",children:"responsive"}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token boolean",children:"true"}),e.jsx(s.span,{className:"token punctuation",children:","}),`
                `,e.jsx(s.span,{className:"token literal-property property",children:"legend"}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token punctuation",children:"{"}),`
                    `,e.jsx(s.span,{className:"token literal-property property",children:"position"}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token string",children:'"top"'}),`
                `,e.jsx(s.span,{className:"token punctuation",children:"}"}),`
            `,e.jsx(s.span,{className:"token punctuation",children:"}"}),`
            `,e.jsx(s.span,{className:"token keyword control-flow",children:"if"})," ",e.jsx(s.span,{className:"token punctuation",children:"("}),"chart",e.jsx(s.span,{className:"token punctuation",children:")"})," ",e.jsx(s.span,{className:"token punctuation",children:"{"}),`
                chart`,e.jsx(s.span,{className:"token punctuation",children:"."}),e.jsx(s.span,{className:"token method function property-access",children:"destroy"}),e.jsx(s.span,{className:"token punctuation",children:"("}),e.jsx(s.span,{className:"token punctuation",children:")"}),`
                chart `,e.jsx(s.span,{className:"token operator",children:"="})," ",e.jsx(s.span,{className:"token keyword null nil",children:"null"}),`
            `,e.jsx(s.span,{className:"token punctuation",children:"}"}),`
            chart `,e.jsx(s.span,{className:"token operator",children:"="})," ",e.jsx(s.span,{className:"token keyword",children:"new"})," ",e.jsx(s.span,{className:"token class-name",children:"Chart"}),e.jsx(s.span,{className:"token punctuation",children:"("}),"canvas",e.jsx(s.span,{className:"token punctuation",children:"."}),e.jsx(s.span,{className:"token property-access",children:"current"}),e.jsx(s.span,{className:"token punctuation",children:","})," ",e.jsx(s.span,{className:"token punctuation",children:"{"}),`
                `,e.jsx(s.span,{className:"token literal-property property",children:"type"}),e.jsx(s.span,{className:"token operator",children:":"})," type ",e.jsx(s.span,{className:"token operator",children:"||"})," ",e.jsx(s.span,{className:"token string",children:'"bar"'}),e.jsx(s.span,{className:"token punctuation",children:","}),`
                `,e.jsx(s.span,{className:"token literal-property property",children:"data"}),e.jsx(s.span,{className:"token operator",children:":"})," data",e.jsx(s.span,{className:"token punctuation",children:","}),`
                options`,e.jsx(s.span,{className:"token punctuation",children:","}),`
            `,e.jsx(s.span,{className:"token punctuation",children:"}"}),e.jsx(s.span,{className:"token punctuation",children:")"}),`
        `,e.jsx(s.span,{className:"token punctuation",children:"}"}),e.jsx(s.span,{className:"token punctuation",children:")"}),`
    `,e.jsx(s.span,{className:"token punctuation",children:"}"}),e.jsx(s.span,{className:"token punctuation",children:","})," ",e.jsx(s.span,{className:"token punctuation",children:"["}),e.jsx(s.span,{className:"token punctuation",children:"]"}),e.jsx(s.span,{className:"token punctuation",children:")"}),`

    `,e.jsx(s.span,{className:"token keyword control-flow",children:"return"})," ",e.jsx(s.span,{className:"token operator",children:"<"}),"div",e.jsx(s.span,{className:"token operator",children:">"}),e.jsx(s.span,{className:"token operator",children:"<"}),"canvas ref",e.jsx(s.span,{className:"token operator",children:"="}),e.jsx(s.span,{className:"token punctuation",children:"{"}),"canvas",e.jsx(s.span,{className:"token punctuation",children:"}"}),e.jsx(s.span,{className:"token operator",children:">"}),e.jsx(s.span,{className:"token operator",children:"<"}),e.jsx(s.span,{className:"token operator",children:"/"}),"canvas",e.jsx(s.span,{className:"token operator",children:">"}),e.jsx(s.span,{className:"token operator",children:"<"}),e.jsx(s.span,{className:"token operator",children:"/"}),"div",e.jsx(s.span,{className:"token operator",children:">"}),`
`,e.jsx(s.span,{className:"token punctuation",children:"}"}),`
`]})})}),`
`,e.jsxs(s.p,{children:["Which allows this post to embed Chart.js charts using the above custom ",e.jsx(s.code,{children:"<chart-js>"})," Vue component and a JS Object literal, e.g:"]}),`
`,e.jsx(s.div,{className:"remark-highlight",children:e.jsx(s.pre,{className:"language-tsx",children:e.jsxs(s.code,{className:"language-tsx",children:[e.jsxs(s.span,{className:"token tag",children:[e.jsxs(s.span,{className:"token tag",children:[e.jsx(s.span,{className:"token punctuation",children:"<"}),e.jsx(s.span,{className:"token class-name",children:"ChartJs"})]})," ",e.jsx(s.span,{className:"token attr-name",children:"data"}),e.jsxs(s.span,{className:"token script language-javascript",children:[e.jsx(s.span,{className:"token script-punctuation punctuation",children:"="}),e.jsx(s.span,{className:"token punctuation",children:"{"}),e.jsx(s.span,{className:"token punctuation",children:"{"}),`
    labels`,e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token punctuation",children:"["}),`
        `,e.jsx(s.span,{className:"token comment",children:"//..."}),`
    `,e.jsx(s.span,{className:"token punctuation",children:"]"}),e.jsx(s.span,{className:"token punctuation",children:","}),`
    datasets`,e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token punctuation",children:"["}),`
        `,e.jsx(s.span,{className:"token comment",children:"//..."}),`
    `,e.jsx(s.span,{className:"token punctuation",children:"]"}),`
`,e.jsx(s.span,{className:"token punctuation",children:"}"}),e.jsx(s.span,{className:"token punctuation",children:"}"})]})," ",e.jsx(s.span,{className:"token punctuation",children:"/>"})]}),`
`]})})}),`
`,e.jsxs(s.p,{children:["Which the ",e.jsx(s.a,{href:"https://servicestack.net/posts/bulk-insert-performance",children:"Bulk Insert Performance"}),` Blog Post uses extensively to embeds its
Chart.js Bar charts:`]}),`
`,e.jsx(o,{data:{labels:["10,000 Rows","100,000 Rows"],datasets:[{label:"SQLite Memory",backgroundColor:"rgba(201, 203, 207, 0.2)",borderColor:"rgb(201, 203, 207)",borderWidth:1,data:[17.066,166.747]},{label:"SQLite Disk",backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgb(255, 99, 132)",borderWidth:1,data:[20.224,199.697]},{label:"PostgreSQL",backgroundColor:"rgba(153, 102, 255, 0.2)",borderColor:"rgb(153, 102, 255)",borderWidth:1,data:[14.389,115.645]},{label:"MySQL",backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgb(54, 162, 235)",borderWidth:1,data:[64.389,310.966]},{label:"MySqlConnector",backgroundColor:"rgba(255, 159, 64, 0.2)",borderColor:"rgb(255, 159, 64)",borderWidth:1,data:[64.427,308.574]},{label:"SQL Server",backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgb(255, 99, 132)",borderWidth:1,data:[89.821,835.181]}]}}),`
`,e.jsx(s.h3,{children:"New Markdown Containers"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"https://github.com/xoofx/markdig/blob/master/src/Markdig.Tests/Specs/CustomContainerSpecs.md",children:"Custom Containers"}),`
are a popular method for implementing Markdown Extensions for enabling rich, wrist-friendly consistent
content in your Markdown documents.`]}),`
`,e.jsxs(s.p,{children:["Most of ",e.jsx(s.a,{href:"https://vitepress.dev/guide/markdown#custom-containers",children:"VitePress Markdown Containers"}),`
are also available in Razor SSG websites for enabling rich, wrist-friendly consistent markup in your Markdown pages, e.g:`]}),`
`,e.jsx(s.div,{className:"remark-highlight",children:e.jsx(s.pre,{className:"language-unknown",children:e.jsx(s.code,{className:"language-unknown",children:`:::info
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
:::

:::copy
Copy Me!
:::`})})}),`
`,e.jsx(s.info,{children:e.jsx(s.p,{children:"This is an info box."})}),`
`,e.jsx(s.tip,{children:e.jsx(s.p,{children:"This is a tip."})}),`
`,e.jsx(s.warning,{children:e.jsx(s.p,{children:"This is a warning."})}),`
`,e.jsx(s.danger,{children:e.jsx(s.p,{children:"This is a dangerous warning."})}),`
`,e.jsx(s.copy,{children:e.jsx(s.p,{children:"Copy Me!"})}),`
`,e.jsxs(s.p,{children:["See Razor Press's ",e.jsx(s.a,{href:"https://razor-press.web-templates.io/containers",children:"Markdown Containers docs"}),` for the complete list of available containers and examples on how to
implement your own `,e.jsx(s.a,{href:"https://razor-press.web-templates.io/containers#implementing-block-containers",children:"Custom Markdown containers"}),"."]}),`
`,e.jsx(s.h3,{children:"Support for Includes"}),`
`,e.jsxs(s.p,{children:["Markdown fragments can be added to ",e.jsx(s.code,{children:"_pages/_include"}),` - a special folder rendered with
`,e.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Includes.cshtml",children:"Pages/Includes.cshtml"}),` using
an `,e.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Shared/_LayoutEmpty.cshtml",children:"Empty Layout"}),`
which can be included in other Markdown and Razor Pages or fetched on demand with Ajax.`]}),`
`,e.jsxs(s.p,{children:["Markdown Fragments can be then included inside other markdown documents with the ",e.jsx(s.code,{children:"::include"})," inline container, e.g:"]}),`
`,e.jsx(s.div,{className:"remark-highlight",children:e.jsx(s.pre,{className:"language-unknown",children:e.jsx(s.code,{className:"language-unknown",children:`:::pre
::include vue/formatters.md::
:::`})})}),`
`,e.jsxs(s.p,{children:["Where it will be replaced with the HTML rendered markdown contents of fragments maintained in ",e.jsx(s.code,{children:"_pages/_include"}),"."]}),`
`,e.jsx(s.h3,{children:"Include Markdown in Razor Pages"}),`
`,e.jsxs(s.p,{children:["Markdown Fragments can also be included in Razor Pages using the custom ",e.jsx(s.code,{children:"MarkdownTagHelper.cs"})," ",e.jsx(s.code,{children:"<markdown/>"})," tag:"]}),`
`,e.jsx(s.div,{className:"remark-highlight",children:e.jsx(s.pre,{className:"language-html",children:e.jsxs(s.code,{className:"language-html",children:[e.jsxs(s.span,{className:"token tag",children:[e.jsxs(s.span,{className:"token tag",children:[e.jsx(s.span,{className:"token punctuation",children:"<"}),"markdown"]})," ",e.jsx(s.span,{className:"token attr-name",children:"include"}),e.jsxs(s.span,{className:"token attr-value",children:[e.jsx(s.span,{className:"token punctuation attr-equals",children:"="}),e.jsx(s.span,{className:"token punctuation",children:'"'}),"vue/formatters.md",e.jsx(s.span,{className:"token punctuation",children:'"'})]}),e.jsx(s.span,{className:"token punctuation",children:">"})]}),e.jsxs(s.span,{className:"token tag",children:[e.jsxs(s.span,{className:"token tag",children:[e.jsx(s.span,{className:"token punctuation",children:"</"}),"markdown"]}),e.jsx(s.span,{className:"token punctuation",children:">"})]}),`
`]})})}),`
`,e.jsx(s.h3,{children:"Inline Markdown in Razor Pages"}),`
`,e.jsx(s.p,{children:"Alternatively markdown can be rendered inline with:"}),`
`,e.jsx(s.div,{className:"remark-highlight",children:e.jsx(s.pre,{className:"language-html",children:e.jsxs(s.code,{className:"language-html",children:[e.jsxs(s.span,{className:"token tag",children:[e.jsxs(s.span,{className:"token tag",children:[e.jsx(s.span,{className:"token punctuation",children:"<"}),"markdown"]}),e.jsx(s.span,{className:"token punctuation",children:">"})]}),`
## Using Formatters

Your App and custom templates can also utilize @servicestack/vue's
[built-in formatting functions](href="/vue/use-formatters).
`,e.jsxs(s.span,{className:"token tag",children:[e.jsxs(s.span,{className:"token tag",children:[e.jsx(s.span,{className:"token punctuation",children:"</"}),"markdown"]}),e.jsx(s.span,{className:"token punctuation",children:">"})]}),`
`]})})}),`
`,e.jsx(s.h3,{children:"Light and Dark Mode Query Params"}),`
`,e.jsxs(s.p,{children:["You can link to Dark and Light modes of your Razor SSG website with the ",e.jsx(s.code,{children:"?light"})," and ",e.jsx(s.code,{children:"?dark"})," query string params:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://razor-ssg.web-templates.io/?dark",children:"https://razor-ssg.web-templates.io/?dark"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://razor-ssg.web-templates.io/?light",children:"https://razor-ssg.web-templates.io/?light"})}),`
`]}),`
`,e.jsx(s.h3,{children:"Blog Post Authors threads.net and Mastodon links"}),`
`,e.jsxs(s.p,{children:["The social links for Blog Post Authors can now include ",e.jsx(s.a,{href:"https://threads.net",children:"threads.net"})," and ",e.jsx(s.a,{href:"https://mastodon.social",children:"mastodon.social"})," links, e.g:"]}),`
`,e.jsx(s.div,{className:"remark-highlight",children:e.jsx(s.pre,{className:"language-json",children:e.jsxs(s.code,{className:"language-json",children:[e.jsx(s.span,{className:"token punctuation",children:"{"}),`
  `,e.jsx(s.span,{className:"token property",children:'"AppConfig"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token punctuation",children:"{"}),`
    `,e.jsx(s.span,{className:"token property",children:'"BlogImageUrl"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token string",children:'"https://servicestack.net/img/logo.png"'}),e.jsx(s.span,{className:"token punctuation",children:","}),`
    `,e.jsx(s.span,{className:"token property",children:'"Authors"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token punctuation",children:"["}),`
      `,e.jsx(s.span,{className:"token punctuation",children:"{"}),`
        `,e.jsx(s.span,{className:"token property",children:'"Name"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token string",children:'"Lucy Bates"'}),e.jsx(s.span,{className:"token punctuation",children:","}),`
        `,e.jsx(s.span,{className:"token property",children:'"Email"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token string",children:'"lucy@email.org"'}),e.jsx(s.span,{className:"token punctuation",children:","}),`
        `,e.jsx(s.span,{className:"token property",children:'"ProfileUrl"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token string",children:'"img/authors/author1.svg"'}),e.jsx(s.span,{className:"token punctuation",children:","}),`
        `,e.jsx(s.span,{className:"token property",children:'"TwitterUrl"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token string",children:'"https://twitter.com/lucy"'}),e.jsx(s.span,{className:"token punctuation",children:","}),`
        `,e.jsx(s.span,{className:"token property",children:'"ThreadsUrl"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token string",children:'"https://threads.net/@lucy"'}),e.jsx(s.span,{className:"token punctuation",children:","}),`
        `,e.jsx(s.span,{className:"token property",children:'"GitHubUrl"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token string",children:'"https://github.com/lucy"'}),e.jsx(s.span,{className:"token punctuation",children:","}),`
        `,e.jsx(s.span,{className:"token property",children:'"MastodonUrl"'}),e.jsx(s.span,{className:"token operator",children:":"})," ",e.jsx(s.span,{className:"token string",children:'"https://mastodon.social/@lucy"'}),`
      `,e.jsx(s.span,{className:"token punctuation",children:"}"}),`
    `,e.jsx(s.span,{className:"token punctuation",children:"]"}),`
  `,e.jsx(s.span,{className:"token punctuation",children:"}"}),`
`,e.jsx(s.span,{className:"token punctuation",children:"}"}),`
`]})})}),`
`,e.jsx(s.h2,{children:"Feature Requests Welcome"}),`
`,e.jsxs(s.p,{children:[`Most of Razor SSG's features are currently being driven by requirements from the new
`,e.jsx(s.a,{href:"https://razor-ssg.web-templates.io/#showcase",children:"Websites built with Razor SSG"}),` and features we want available in our Blogs,
we welcome any requests for missing features in other popular Blogging Platforms you'd like to see in Razor SSG to help
make it a high quality blogging solution built with our preferred C#/.NET Technology Stack, by submitting them to:`]}),`
`,e.jsx(s.div,{className:"remark-highlight",children:e.jsx(s.pre,{className:"language-unknown",children:e.jsx(s.code,{className:"language-unknown",children:`:::{.text-indigo-600 .text-3xl .text-center}
[https://servicestack.net/ideas](https://servicestack.net/ideas)
:::`})})}),`
`,e.jsx(s.h3,{children:"SSG or Dynamic Features"}),`
`,e.jsxs(s.p,{children:[`Whilst statically generated websites and blogs are generally limited to features that can be generated at build time, we're able to
add any dynamic features we need in `,e.jsx(s.a,{href:"https://servicestack.net/creatorkit/",children:"CreatorKit"}),` - a Free companion self-host .NET App Mailchimp and Disqus
alternative which powers any dynamic functionality in Razor SSG Apps like the blogs comments and Mailing List features
in this Blog Post.`]})]})}function p(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}function c(n,s){throw new Error("Expected "+(s?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{p as default};
