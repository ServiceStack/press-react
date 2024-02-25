import{j as e}from"./index-CYirqOGV.js";function i(n){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.p,{children:["With the release of ",e.jsx(t.strong,{children:".NET 8"}),", we're happy to announce ServiceStack's new ",e.jsx(t.a,{href:"https://blazor.web-templates.io/",children:"Blazor"}),`
Tailwind project template that takes advantage of .NET 8 Blazor's new features that redefines modern Web Development in C#.`]}),`
`,e.jsxs(t.p,{children:["In this video overview we'll explore how the template, adopts Blazor's familiar ",e.jsx(t.strong,{children:"ASP.NET Core Identity"}),`
for its authentication, utilizes the modern `,e.jsx(t.a,{href:"https://tailwindcss.com",children:"Tailwind CSS"}),` framework for beautiful responsive design
and adopts .NET's best-practice
`,e.jsx(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/docker/publish-as-container",children:"Docker Containerization"}),` support for its built-in
`,e.jsx(t.a,{href:"https://blazor.web-templates.io/deploy",children:"GitHub Action Deployments"}),` which enables a simple ready-made CI solution for deployment to any
Linux Host via SSH and Docker compose.`]}),`
`,e.jsxs(t.p,{children:["We’ll also discuss the project's structure, usage of ",e.jsx(t.strong,{children:"ASP.NET Core Identity"}),` for Authorization and utilizing
`,e.jsx(t.strong,{children:"ServiceStack Blazor Components"})," for data handling, all integrated to maximize developer efficiency in building Web Applications."]}),`
`,`
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
`]})]})}function r(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{r as default};
