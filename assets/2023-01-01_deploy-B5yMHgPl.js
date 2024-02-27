import{j as e}from"./index-gGiM5qnV.js";function a(n){const s={a:"a",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"ServiceStack GitHub Action Deployments"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.a,{href:"https://github.com/NetCoreTemplates/razor-tailwind/blob/main/.github/workflows/release.yml",children:"release.yml"}),`
in this template enables GitHub Actions CI deployment to a dedicated server with SSH access.`]}),`
`,e.jsx(s.h2,{children:"Overview"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"release.yml"})," is designed to work with a ServiceStack app deploying directly to a single server via SSH. A docker image is built and stored on GitHub's ",e.jsx(s.code,{children:"ghcr.io"})," docker registry when a GitHub Release is created."]}),`
`,e.jsxs(s.p,{children:["GitHub Actions specified in ",e.jsx(s.code,{children:"release.yml"})," then copy files remotely via scp and use ",e.jsx(s.code,{children:"docker-compose"})," to run the app remotely via SSH."]}),`
`,e.jsxs(s.h2,{children:["What's the process of ",e.jsx(s.code,{children:"release.yml"}),"?"]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/mix/release-ghr-vanilla-diagram.png",alt:""})}),`
`,e.jsx(s.h2,{children:"Deployment server setup"}),`
`,e.jsx(s.p,{children:"To get this working, a server needs to be setup with the following:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"SSH access"}),`
`,e.jsx(s.li,{children:"docker"}),`
`,e.jsx(s.li,{children:"docker-compose"}),`
`,e.jsx(s.li,{children:"ports 443 and 80 for web access of your hosted application"}),`
`]}),`
`,e.jsxs(s.p,{children:["This can be your own server or any cloud hosted server like Digital Ocean, AWS, Azure etc. We use ",e.jsx(s.a,{href:"http://cloud.hetzner.com/",children:"Hetzner Cloud"}),`
to deploy all ServiceStack's `,e.jsx(s.a,{href:"https://github.com/NetCoreTemplates/",children:"GitHub Project Templates"}),` as it was the
`,e.jsx(s.a,{href:"https://servicestack.net/blog/finding-best-us-value-cloud-provider",children:"best value US cloud provider"})," we've found."]}),`
`,e.jsxs(s.p,{children:["When setting up your server, you'll want to use a dedicated SSH key for access to be used by GitHub Actions. GitHub Actions will need the ",e.jsx(s.em,{children:"private"})," SSH key within a GitHub Secret to authenticate. This can be done via ssh-keygen and copying the public key to the authorized clients on the server."]}),`
`,e.jsxs(s.p,{children:["To let your server handle multiple ServiceStack applications and automate the generation and management of TLS certificates, an additional docker-compose file is provided in this template, ",e.jsx(s.code,{children:"nginx-proxy-compose.yml"}),". This docker-compose file is ready to run and can be copied to the deployment server."]}),`
`,e.jsxs(s.p,{children:["For example, once copied to remote ",e.jsx(s.code,{children:"~/nginx-proxy-compose.yml"}),", the following command can be run on the remote server."]}),`
`,e.jsx(s.div,{className:"remark-highlight",children:e.jsx(s.pre,{className:"language-unknown",children:e.jsx(s.code,{className:"language-unknown",children:"docker-compose -f ~/nginx-proxy-compose.yml up -d"})})}),`
`,e.jsx(s.p,{children:"This will run an nginx reverse proxy along with a companion container that will watch for additional containers in the same docker network and attempt to initialize them with valid TLS certificates."}),`
`,e.jsx(s.h3,{children:"GitHub Actions secrets"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"release.yml"})," uses the following secrets."]}),`

























`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Required Secrets"}),e.jsx(s.th,{children:"Description"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"DEPLOY_HOST"})}),e.jsx(s.td,{children:"Hostname used to SSH deploy .NET App to, this can either be an IP address or subdomain with A record pointing to the server"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"DEPLOY_USERNAME"})}),e.jsxs(s.td,{children:["Username to log in with via SSH e.g, ",e.jsx(s.strong,{children:"ubuntu"}),", ",e.jsx(s.strong,{children:"ec2-user"}),", ",e.jsx(s.strong,{children:"root"})]})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"DEPLOY_KEY"})}),e.jsx(s.td,{children:"SSH private key used to remotely access deploy .NET App"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.code,{children:"LETSENCRYPT_EMAIL"})}),e.jsx(s.td,{children:"Email required for Let's Encrypt automated TLS certificates"})]})]})]}),`
`,e.jsxs(s.p,{children:["These secrets can use the ",e.jsx(s.a,{href:"https://cli.github.com/manual/gh_secret_set",children:"GitHub CLI"})," for ease of creation. Eg, using the GitHub CLI the following can be set."]}),`
`,e.jsx(s.div,{className:"remark-highlight",children:e.jsx(s.pre,{className:"language-bash",children:e.jsxs(s.code,{className:"language-bash",children:["gh secret ",e.jsx(s.span,{className:"token builtin class-name",children:"set"})," DEPLOY_HOST -b",e.jsx(s.span,{className:"token string",children:'"<DEPLOY_HOST>"'}),`
gh secret `,e.jsx(s.span,{className:"token builtin class-name",children:"set"})," DEPLOY_USERNAME -b",e.jsx(s.span,{className:"token string",children:'"<DEPLOY_USERNAME>"'}),`
gh secret `,e.jsx(s.span,{className:"token builtin class-name",children:"set"})," DEPLOY_KEY ",e.jsx(s.span,{className:"token operator",children:"<"})," key.pem ",e.jsx(s.span,{className:"token comment",children:"# DEPLOY_KEY"}),`
gh secret `,e.jsx(s.span,{className:"token builtin class-name",children:"set"})," LETSENCRYPT_EMAIL -b",e.jsx(s.span,{className:"token string",children:'"<LETSENCRYPT_EMAIL>"'}),`
`]})})}),`
`,e.jsx(s.p,{children:"These secrets are used to populate variables within GitHub Actions and other configuration files."}),`
`,e.jsx(s.h2,{children:"Deployments"}),`
`,e.jsx(s.p,{children:"A published version of your .NET App created with the standard dotnet publish tool:"}),`
`,e.jsx(s.div,{className:"remark-highlight",children:e.jsx(s.pre,{className:"language-yaml",children:e.jsxs(s.code,{className:"language-yaml",children:["dotnet publish ",e.jsx(s.span,{className:"token punctuation",children:"-"}),`c Release
`]})})}),`
`,e.jsxs(s.p,{children:["is used to build a production build of your .NET App inside the standard ",e.jsx(s.code,{children:"Dockerfile"})," for dockerizing .NET Applications."]}),`
`,e.jsxs(s.p,{children:["Additional custom deployment tasks can be added to your project's package.json ",e.jsx(s.strong,{children:"postinstall"})," script which also gets run at deployment."]}),`
`,e.jsx(s.p,{children:"If preferred additional MS Build tasks can be run by passing in custom parameters in the publish command, e.g:"}),`
`,e.jsx(s.div,{className:"remark-highlight",children:e.jsx(s.pre,{className:"language-yaml",children:e.jsxs(s.code,{className:"language-yaml",children:["dotnet publish ",e.jsx(s.span,{className:"token punctuation",children:"-"}),"c Release /p",e.jsx(s.span,{className:"token punctuation",children:":"}),`APP_TASKS=prerender
`]})})}),`
`,e.jsxs(s.p,{children:["Which your ",e.jsx(s.code,{children:"MyApp.csproj"})," can detect with a target that checks for it:"]}),`
`,e.jsx(s.div,{className:"remark-highlight",children:e.jsx(s.pre,{className:"language-xml",children:e.jsxs(s.code,{className:"language-xml",children:[e.jsx(s.span,{className:"token comment",children:"<!-- Prerender tasks run in release.yml -->"}),`
`,e.jsxs(s.span,{className:"token tag",children:[e.jsxs(s.span,{className:"token tag",children:[e.jsx(s.span,{className:"token punctuation",children:"<"}),"Target"]})," ",e.jsx(s.span,{className:"token attr-name",children:"Name"}),e.jsxs(s.span,{className:"token attr-value",children:[e.jsx(s.span,{className:"token punctuation attr-equals",children:"="}),e.jsx(s.span,{className:"token punctuation",children:'"'}),"AppTasks",e.jsx(s.span,{className:"token punctuation",children:'"'})]})," ",e.jsx(s.span,{className:"token attr-name",children:"AfterTargets"}),e.jsxs(s.span,{className:"token attr-value",children:[e.jsx(s.span,{className:"token punctuation attr-equals",children:"="}),e.jsx(s.span,{className:"token punctuation",children:'"'}),"Build",e.jsx(s.span,{className:"token punctuation",children:'"'})]})," ",e.jsx(s.span,{className:"token attr-name",children:"Condition"}),e.jsxs(s.span,{className:"token attr-value",children:[e.jsx(s.span,{className:"token punctuation attr-equals",children:"="}),e.jsx(s.span,{className:"token punctuation",children:'"'}),"$(APP_TASKS) != ''",e.jsx(s.span,{className:"token punctuation",children:'"'})]}),e.jsx(s.span,{className:"token punctuation",children:">"})]}),`
    `,e.jsxs(s.span,{className:"token tag",children:[e.jsxs(s.span,{className:"token tag",children:[e.jsx(s.span,{className:"token punctuation",children:"<"}),"CallTarget"]})," ",e.jsx(s.span,{className:"token attr-name",children:"Targets"}),e.jsxs(s.span,{className:"token attr-value",children:[e.jsx(s.span,{className:"token punctuation attr-equals",children:"="}),e.jsx(s.span,{className:"token punctuation",children:'"'}),"Prerender",e.jsx(s.span,{className:"token punctuation",children:'"'})]})," ",e.jsx(s.span,{className:"token attr-name",children:"Condition"}),e.jsxs(s.span,{className:"token attr-value",children:[e.jsx(s.span,{className:"token punctuation attr-equals",children:"="}),e.jsx(s.span,{className:"token punctuation",children:'"'}),"$(APP_TASKS.Contains('prerender'))",e.jsx(s.span,{className:"token punctuation",children:'"'})]})," ",e.jsx(s.span,{className:"token punctuation",children:"/>"})]}),`
`,e.jsxs(s.span,{className:"token tag",children:[e.jsxs(s.span,{className:"token tag",children:[e.jsx(s.span,{className:"token punctuation",children:"</"}),"Target"]}),e.jsx(s.span,{className:"token punctuation",children:">"})]}),`
`,e.jsxs(s.span,{className:"token tag",children:[e.jsxs(s.span,{className:"token tag",children:[e.jsx(s.span,{className:"token punctuation",children:"<"}),"Target"]})," ",e.jsx(s.span,{className:"token attr-name",children:"Name"}),e.jsxs(s.span,{className:"token attr-value",children:[e.jsx(s.span,{className:"token punctuation attr-equals",children:"="}),e.jsx(s.span,{className:"token punctuation",children:'"'}),"Prerender",e.jsx(s.span,{className:"token punctuation",children:'"'})]}),e.jsx(s.span,{className:"token punctuation",children:">"})]}),`
    `,e.jsxs(s.span,{className:"token tag",children:[e.jsxs(s.span,{className:"token tag",children:[e.jsx(s.span,{className:"token punctuation",children:"<"}),"Message"]})," ",e.jsx(s.span,{className:"token attr-name",children:"Text"}),e.jsxs(s.span,{className:"token attr-value",children:[e.jsx(s.span,{className:"token punctuation attr-equals",children:"="}),e.jsx(s.span,{className:"token punctuation",children:'"'}),"Prerender...",e.jsx(s.span,{className:"token punctuation",children:'"'})]})," ",e.jsx(s.span,{className:"token punctuation",children:"/>"})]}),`
`,e.jsxs(s.span,{className:"token tag",children:[e.jsxs(s.span,{className:"token tag",children:[e.jsx(s.span,{className:"token punctuation",children:"</"}),"Target"]}),e.jsx(s.span,{className:"token punctuation",children:">"})]}),`
`]})})}),`
`,e.jsx(s.h2,{children:"Pushing updates and rollbacks"}),`
`,e.jsx(s.p,{children:"By default, deployments occur on commit to your main branch. A new Docker image for your ServiceStack API is produced, pushed to GHCR.io and hosted on your Linux server with Docker Compose."}),`
`,e.jsx(s.p,{children:"The template also will run the release process on the creation of a GitHub Release making it easier to switch to manual production releases."}),`
`,e.jsxs(s.p,{children:["Additionally, the ",e.jsx(s.code,{children:"release.yml"}),` workflow can be run manually specifying a version. This enables production rollbacks based on previously tagged releases.
A release must have already been created for the rollback build to work, it doesn't create a new Docker build based on previous code state, only redeploys as existing Docker image.`]})]})}function c(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{c as default};