import{j as e}from"./index-COZ9WXnh.js";function i(a){const t={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",img:"img",li:"li",liteyoutube:"liteyoutube",p:"p",path:"path",strong:"strong",svg:"svg",ul:"ul",...a.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.p,{children:["With the release of ",e.jsx(t.strong,{children:".NET 8"}),", we're happy to announce ServiceStack's new ",e.jsx(t.a,{href:"https://blazor.web-templates.io/",children:"Blazor"}),`
Tailwind project template that takes advantage of .NET 8 Blazor's new features that redefines modern Web Development in C#.`]}),`
`,e.jsxs(t.p,{children:["In this video overview we'll explore how the template, adopts Blazor's familiar ",e.jsx(t.strong,{children:"ASP.NET Core Identity"}),`
for its authentication, utilizes the modern `,e.jsx(t.a,{href:"https://tailwindcss.com",children:"Tailwind CSS"}),` framework for beautiful responsive design
and adopts .NET's best-practice
`,e.jsx(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/docker/publish-as-container",children:"Docker Containerization"}),` support for its built-in
`,e.jsx(t.a,{href:"https://blazor.web-templates.io/deploy",children:"GitHub Action Deployments"}),` which enables a simple ready-made CI solution for deployment to any
Linux Host via SSH and Docker compose.`]}),`
`,e.jsxs(t.p,{children:["We’ll also discuss the project's structure, usage of ",e.jsx(t.strong,{children:"ASP.NET Core Identity"}),` for Authorization and utilizing
`,e.jsx(t.strong,{children:"ServiceStack Blazor Components"})," for data handling, all integrated to maximize developer efficiency in building Web Applications."]}),`
`,e.jsxs(t.div,{className:"not-prose mt-16 flex flex-col items-center",children:[`
   `,e.jsxs(t.div,{className:"flex",children:[`
      `,e.jsx(t.svg,{className:"w-28 h-28 text-purple-500",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:e.jsx(t.path,{fill:"currentColor",d:"M23.834 8.101a13.912 13.912 0 0 1-13.643 11.72a10.105 10.105 0 0 1-1.994-.12a6.111 6.111 0 0 1-5.082-5.761a5.934 5.934 0 0 1 11.867-.084c.025.983-.401 1.846-1.277 1.871c-.936 0-1.374-.668-1.374-1.567v-2.5a1.531 1.531 0 0 0-1.52-1.533H8.715a3.648 3.648 0 1 0 2.695 6.08l.073-.11l.074.121a2.58 2.58 0 0 0 2.2 1.048a2.909 2.909 0 0 0 2.695-3.04a7.912 7.912 0 0 0-.217-1.933a7.404 7.404 0 0 0-14.64 1.603a7.497 7.497 0 0 0 7.308 7.405s.549.05 1.167.035a15.803 15.803 0 0 0 8.475-2.528c.036-.025.072.025.048.061a12.44 12.44 0 0 1-9.69 3.963a8.744 8.744 0 0 1-8.9-8.972a9.049 9.049 0 0 1 3.635-7.247a8.863 8.863 0 0 1 5.229-1.726h2.813a7.915 7.915 0 0 0 5.839-2.578a.11.11 0 0 1 .059-.034a.112.112 0 0 1 .12.053a.113.113 0 0 1 .015.067a7.934 7.934 0 0 1-1.227 3.549a.107.107 0 0 0-.014.06a.11.11 0 0 0 .073.095a.109.109 0 0 0 .062.004a8.505 8.505 0 0 0 5.913-4.876a.155.155 0 0 1 .055-.053a.15.15 0 0 1 .147 0a.153.153 0 0 1 .054.053A10.779 10.779 0 0 1 23.834 8.1zM8.895 11.628a2.188 2.188 0 1 0 2.188 2.188v-2.042a.158.158 0 0 0-.15-.15Z"})}),`
   `]}),`
`]}),`
`,e.jsxs(t.div,{className:"not-prose mt-4 px-4 sm:px-6",children:[`
`,e.jsx(t.div,{className:"text-center",children:e.jsx(t.h3,{id:"blazor-template",className:"text-4xl sm:text-5xl md:text-6xl tracking-tight font-extrabold text-gray-900",children:`
    Blazor Tailwind Template
`})}),`
`,e.jsxs(t.div,{className:"py-8 max-w-7xl mx-auto px-4 sm:px-6",children:[`
    `,e.jsx(t.liteyoutube,{id:"hqyozHSL0Nk",title:".NET 8 Blazor Tailwind Template",children:`
`})]}),`
`]}),`
`,e.jsx(t.h2,{children:"ASP.NET Core Identity Integration"}),`
`,e.jsx(t.p,{children:`In terms of security, the template integrates ASP.NET Core Identity, offering a structured approach to authentication,
including support for email confirmation, two-factor authentication and GDPR compliance features.`}),`
`,e.jsxs(t.p,{children:[`Integrating ASP.NET Core Identity doesn't complicate securing ServiceStack services which can still be secured with
`,e.jsx(t.a,{href:"https://docs.servicestack.net/auth/authentication-and-authorization#declarative-validation-attributes",children:"Declarative Validation Attributes"}),`
for role-based access control, e.g. using `,e.jsx(t.code,{children:'[ValidateHasRole("Employee")]'}),` directly on Request DTOs, bringing any
existing knowledge and experience with ServiceStack Authentication to securing UIs and APIs with Identity Auth.`]}),`
`,e.jsxs(t.p,{children:[`The template includes a pre-baked solution for sending general and Identity Auth Emails with your configured SMTP Server
in managed background workers with `,e.jsx(t.a,{href:"https://docs.servicestack.net/background-mq",children:"Background MQ"}),` and an enhanced version of the default
ASP.NET Core Blazor Identity UI, with all pages upgraded to use a beautiful Tailwind CSS theme as well as integration with
`,e.jsx(t.a,{href:"https://davidshimjs.github.io/qrcodejs/",children:"qrcode.js"}),`
for providing a visual QR Code barcode which mobile phone users can easily scan to setup 2FA Authentication:`]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"https://servicestack.net/img/posts/net8-best-blazor/blazor-identityauth-qrcode.png",alt:""})}),`
`,e.jsx(t.h2,{children:"Responsive and Interactive UIs with Tailwind CSS"}),`
`,e.jsxs(t.p,{children:[`With responsive UI out-of-the-box, thanks to Tailwind CSS, Developers can style their Blazor Apps with the modern
popular utility-first CSS framework for creating beautiful, maintainable `,e.jsx(t.strong,{children:"Responsive UIs"})," with ",e.jsx(t.strong,{children:"DarkMode"})," support"]}),`
`,e.jsx(t.p,{children:`It also takes full advantage of Blazor’s static rendering for its Website layout for optimal performance and SEO,
so only Pages and Components that require interactivity need to opt-in for Blazor Server Interactive rendering modes.`}),`
`,e.jsx(t.h2,{children:"ServiceStack.Blazor Tailwind Components"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.a,{href:"https://blazor-gallery.jamstacks.net",children:"ServiceStack.Blazor Components"}),`, updated for .NET 8 enables you to rapidly
develop beautiful Blazor Apps integrated with Rich high-productivity UI Tailwind Components like
`,e.jsx(t.a,{href:"https://blazor-gallery.servicestack.net/gallery/autoquerygrid",children:"AutoQueryGrid"}),` and
`,e.jsx(t.a,{href:"https://blazor-gallery.servicestack.net/gallery/autoform",children:"AutoForms"}),` which interface with
`,e.jsx(t.a,{href:"https://docs.servicestack.net/autoquery/",children:"AutoQuery services"})," to provide a full CRUD data management UI with minimal effort."]}),`
`,e.jsx(t.h2,{children:"Enhanced Containerization"}),`
`,e.jsxs(t.p,{children:[".NET 8 simplifies Docker integration. Using ",e.jsx(t.code,{children:"dotnet publish"}),`, developers can now automate the creation of Docker images
that adhere to best security practices, such as running as a non-root user in containers that can utilize the built-in
GitHub Actions to effortlessly deploy their containerized Blazor Apps with Docker and GitHub Registry via SSH to any Linux Server.`]}),`
`,e.jsx(t.h2,{children:"Other Template Features"}),`
`,e.jsx(t.p,{children:"Other features that enhances the default ASP.NET Blazor App templates with several modern, high-productivity features, include:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://learn.microsoft.com/ef/",children:"Entity Framework"})," & ",e.jsx(t.a,{href:"https://docs.servicestack.net/ormlite/",children:"OrmLite"})," - Choose the best ORM for each App feature, with a unified solution that sees ",e.jsx(t.a,{href:"https://docs.servicestack.net/ormlite/db-migrations",children:"OrmLite's DB Migrations"})," run both EF and OrmLite migrations, inc. Seed Data with a single command at Development or Deployment"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://www.sqlite.org",children:"SQLite Database"})," - Set up as the default database, it allows developers to start immediately without configuring a separate database server"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://docs.servicestack.net/autoquery/",children:"AutoQuery"})," - Rapidly developing data-driven APIs, UIs and CRUD Apps"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://www.youtube.com/watch?v=tt0ytzVVjEY",children:"Auto Admin Pages"})," - Quickly develop your back-office CRUD Admin UIs to manage your App's Database tables at ",e.jsx(t.a,{href:"https://blazor.web-templates.io/admin",children:"/admin"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://docs.servicestack.net/razor-press/syntax",children:"Markdown"})," - Maintain SEO-friendly documentation and content-rich pages like this one with just Markdown, beautifully styled with ",e.jsx(t.a,{href:"https://tailwindcss.com/docs/typography-plugin",children:"@tailwindcss/typography"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://servicestack.net/auto-ui",children:"Built-in UIs"})," - Use ServiceStack's Auto UIs to ",e.jsx(t.a,{href:"https://docs.servicestack.net/api-explorer",children:"Explore your APIs"})," at ",e.jsx(t.a,{href:"https://blazor.web-templates.io/ui/",children:"/ui"}),`
or Query your `,e.jsx(t.a,{href:"https://docs.servicestack.net/admin-ui-database",children:"App's Database Tables"})," at ",e.jsx(t.a,{href:"https://blazor.web-templates.io/admin-ui/database",children:"/admin-ui/database"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://youtu.be/66DgLHExC9E",children:"Universal API Components"})," - Effortlessly create reusable, maximally performant universal Blazor API Components that works in Blazor Server and Web Assembly Interactivity modes"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://docs.servicestack.net/physical-project-structure",children:"Organized Project Structure"})," - Divided into AppHost, Service Interface, Service Model, and Tests projects to promote separation of concerns and maintainability."]}),`
`]})]})}function s(a={}){const{wrapper:t}=a.components||{};return t?e.jsx(t,{...a,children:e.jsx(i,{...a})}):i(a)}export{s as default};
