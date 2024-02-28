import{j as e}from"./index-CYyH5qk2.js";function n(s){const t={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",iframe:"iframe",img:"img",p:"p",pre:"pre",span:"span",strong:"strong",style:"style",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.p,{children:["At ",e.jsx(t.a,{href:"./",children:"ServiceStack"}),", we have been using AWS for hosting for over 10 years. It has served us well, but it suffers from complex pricing and possibility of bill shock due to its fractured pay-as-you-go design."]}),`
`,e.jsxs(t.p,{children:["Thankfully, more and more companies are providing simpler offerings for hosting needs, and AWS themselves launched ",e.jsx(t.a,{href:"https://aws.amazon.com/lightsail",children:"Lightsail"})," as their answer to market demands for simple hosting options that package everything you need for basic hosting."]}),`
`,e.jsx(t.p,{children:"These simpler hosting options tend to bundle several things together as one fixed monthly price. A VM with a specific compute and memory allocation, as well as data transfer, and storage."}),`
`,e.jsx(t.h2,{children:"Looking at different US offerings"}),`
`,e.jsxs(t.p,{children:["Something we wanted to do was to host our ",e.jsx(t.a,{href:"https://github.com/ServiceStackApps/LiveDemos",children:"live demo applications"})," on a US based host. We were using ",e.jsx(t.a,{href:"https://www.hetzner.com/dedicated-rootserver",children:"Hetzner dedicated servers"})," in the past for non-latency sensitive use cases like our build server and ",e.jsx(t.a,{href:"https://gist.cafe",children:"Gist.Cafe (our interactive playground for multiple platforms)"})," but we also wanted our demo applications to be snappy for US users."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://www.digitalocean.com/pricing",children:"DigitalOcean"})," provides ",e.jsx(t.a,{href:"https://www.digitalocean.com/pricing/droplets",children:'"Droplets"'})," with this fixed pricing model with a nice and simple interface. Their pricing was quite good and we realized we could run all 20+ of our demo applications on a single droplet for $40/month."]}),`
`,e.jsxs(t.p,{children:["For deployment, ",e.jsx(t.a,{href:"https://docs.servicestack.net/do-github-action-mix-deployment",children:"we also like to keep things as simple as we can, whilst keeping portability"}),". Since all our projects are public and on GitHub, we use ",e.jsx(t.a,{href:"https://docs.servicestack.net/do-github-action-mix-deployment#github-repository-setup",children:"GitHub Actions"}),` heavily along with a pattern that deploys our applications using Docker Compose via SSH.
Each application runs in its own container behind an `,e.jsx(t.a,{href:"https://docs.servicestack.net/do-github-action-mix-deployment#get-nginx-reverse-proxy-and-letsencrypt-companion-running",children:"NGINX proxy"})," with a side car that handles renewing LetsEncrypt certificates. Below is an example of this pattern with Blazor and Litestream."]}),`
`,e.jsx(t.iframe,{className:"youtube",src:"https://www.youtube.com/embed/fY50dWszpw4",frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}),`
`,e.jsx(t.p,{children:"A nice side effect of this approach is moving servers is relatively painless. We change the DNS entry for the application to point to our new server, update the GitHub Action Secrets if needed and run our Release workflow."}),`
`,e.jsxs(t.p,{children:["A minute or so later, the application is back running again. Since their were 20+ of these repositories we took advantage of the ",e.jsx(t.a,{href:"https://cli.github.com/manual/gh_secret_set",children:"GitHub Organization Secrets"})," so we only needed to update values in one place, and ",e.jsx(t.a,{href:"https://cli.github.com/manual/gh_workflow_run",children:"running the workflows again"})," can also be done programmatically through the GitHub CLI."]}),`
`,e.jsx(t.h2,{children:"DigitalOcean Price Increase"}),`
`,e.jsxs(t.p,{children:["In June of 2022, we got a notification that ",e.jsx(t.a,{href:"https://www.digitalocean.com/try/new-pricing",children:"prices for droplets would be increasing"}),", and for our droplet it would be going from ",e.jsx(t.strong,{children:"$40 to $48"}),". While this is a small amount of money, it prompted us to have a wider look into this market."]}),`
`,e.jsx(t.p,{children:"Something we try to do at ServiceStack is to not only provide a comprehensive .NET Framework for building API first systems, but also seek out great value hosting options we can recommend in this ever change space which we're happy to share, like this blog post, that might be useful to our users and others."}),`
`,e.jsxs(t.p,{children:["Not everyone builds massively distributed systems, and as hardware performance increases, and platforms like ",e.jsx(t.a,{href:"https://devblogs.microsoft.com/dotnet/performance-improvements-in-aspnet-core-6",children:".NET are becoming even more optimized"}),", a setup with just a server or two can manage larger loads and use cases."]}),`
`,e.jsxs(t.p,{children:["Our research and evaluations ended up right back at ",e.jsx(t.a,{href:"https://www.hetzner.com/cloud",children:"Hetzner but this time with their Cloud offering"}),". For less than ",e.jsx(t.strong,{children:"$15 USD"})," per month, you can get a ",e.jsx(t.strong,{children:"4 vCPU, 8GB RAM, 160GB storage and 20TB"})," of data transfer ",e.jsx(t.strong,{children:"hosted in the US"}),"."]}),`
`,e.jsx(t.p,{children:"We found this was by far the cheapest offering for a simple fixed monthly hosting, and looked to compare how well it performed against the more traditional cloud hosting setups."}),`
`,e.jsx(t.h2,{children:"Litestream and SQLite"}),`
`,e.jsxs(t.p,{children:["Our demo applications use ",e.jsx(t.a,{href:"https://www.sqlite.org",children:"SQLite"}),` as a simple way to host the database storage and application together, taking advantage of SQLite's embedded nature.
We were also testing out `,e.jsx(t.a,{href:"https://litestream.io",children:"Litestream"})," as a possible solution to the lack of data backups and safety when using SQLite for more production like workloads."]}),`
`,e.jsxs(t.div,{className:"mx-auto mt-4 mb-4",children:[`
  `,e.jsxs(t.a,{href:"https://litestream.io",children:[`
      `,e.jsxs(t.div,{className:"inline-flex justify-center w-full",children:[`
        `,e.jsx(t.img,{src:"https://servicestack.net/img/posts/hetzner-cloud/litestream.svg",alt:""}),`
      `]}),`
      `,e.jsx(t.div,{className:"text-gray-500 text-center",children:"litestream.io"}),`
  `]}),`
`]}),`
`,e.jsxs(t.p,{children:[`Litestream runs as a separate process and watches your SQLite file for changes and replicates them to storage options like AWS S3, Azure Blob storage and SFTP.
`,e.jsx(t.a,{href:"https://docs.servicestack.net/ormlite/litestream",children:"We created several templates to make this easier"})," and provide a way to bake in automated disaster recovery using Litestream when used with GitHub Actions and our SSH with Docker Compose deployment."]}),`
`,e.jsx(t.p,{children:"With some basic load testing, we noticed that SQLite performed pretty well without any effort on our part, and decided we should see how this compares to the commonly suggested hosting patterns provided by the large cloud providers of AWS and Azure."}),`
`,e.jsx(t.p,{children:`We used the recommended "Production" setups provided by AWS RDS and Azure SQL Database wizards along with 2 vCPU application server to provide the basis on our comparison.
The reason we chose to use the suggested defaults from these providers was to illustrate the power of defaults when offered by market leaders. When compared to a simple SQLite setup, and providers that offer fixed monthly pricing like Hetzner and DigitalOcean, which is often enough to small companies selling Business to Business (B2B) solutions, AWS and Azure recommended "Production" environments can look extremely over priced.`}),`
`,e.jsx(t.p,{children:"One of the main reasons managed database solutions are chosen is the fact that they take care of automated backups and restore if things go wrong. There are other nice features that definitely have a lot of value, but managed disaster recovery is probably the most commonly cited one I've come across for why services like RDS are chosen during early development."}),`
`,e.jsx(t.p,{children:`Litestream provides this kind of data safety and disaster recovery functionality by targeting cost effective and robust storage solutions like AWS S3 and other cloud provided object stores, and making the backup process close to real-time, and accessible via their CLI.
And the embedded nature of SQLite removes the uncertainty of the process of upgrading your database.`}),`
`,e.jsx(t.h2,{children:"The Test"}),`
`,e.jsxs(t.p,{children:["To get a clearer idea how each of these hosting options perform with a fairly modest workload, we used a ",e.jsx(t.a,{href:"https://gatling.io",children:"Gatling"})," test to simulate a user logging into our sample Bookings application, browsing around and creating a booking."]}),`
`,e.jsx(t.p,{children:"These series of steps had 2 write requests and 8 read, separated by 2 seconds per step. We then setup a Gatling simulation that ramped up adding new users to our system from 5 per second to 15 per second, to add a growing number of users over 10 minutes, then sustained over another 10 minutes."}),`
`,e.jsxs(t.div,{className:"mx-auto mt-4 mb-4",children:[`
    `,e.jsxs(t.div,{className:"inline-flex justify-center w-full",children:[`
      `,e.jsx(t.img,{src:"https://servicestack.net/img/posts/hetzner-cloud/aws-gatling-result.png",alt:""}),`
    `]}),`
`,e.jsx(t.div,{className:"text-gray-500 text-center",children:"AWS Gatling Result."}),`
`]}),`
`,e.jsxs(t.div,{className:"mx-auto mt-4 mb-4",children:[`
    `,e.jsxs(t.div,{className:"inline-flex justify-center w-full",children:[`
      `,e.jsx(t.img,{src:"https://servicestack.net/img/posts/hetzner-cloud/azure-gatling-result.png",alt:""}),`
    `]}),`
`,e.jsx(t.div,{className:"text-gray-500 text-center",children:"Azure Gatling Result."}),`
`]}),`
`,e.jsxs(t.div,{className:"mx-auto mt-4 mb-4",children:[`
    `,e.jsxs(t.div,{className:"inline-flex justify-center w-full",children:[`
      `,e.jsx(t.img,{src:"https://servicestack.net/img/posts/hetzner-cloud/hetzner-gatling-result.png",alt:""}),`
    `]}),`
`,e.jsx(t.div,{className:"text-gray-500 text-center",children:"Hetzner Gatling Result."}),`
`]}),`
`,e.jsxs(t.p,{children:[`All 3 setups could handle this rate of requests without issue, and though the "Recommended" AWS and Azure setups would have more headroom, the price difference is far too large to ignore, especially as the difference is paid every month.
The requests throughput of that this test illustrated ~100rps can suit many many use cases, and SQLite is `,e.jsx(t.a,{href:"https://www.sqlite.org/whentouse.html#:~:text=An%20SQLite%20database%20is%20limited,to%20something%20less%20than%20this.",children:"really only limited by its single writer design"}),". We did previous tests of upto 250rps on the same Hetzner Cloud instance with SQLite, but this was starting to reach the maximum throughput, again purely to do with the single writer limitation."]}),`
`,e.jsxs(t.div,{className:"mx-auto mt-4 mb-4",children:[`
    `,e.jsxs(t.div,{className:"inline-flex justify-center w-full",children:[`
      `,e.jsx(t.img,{src:"https://servicestack.net/img/posts/hetzner-cloud/litestream-costs.svg",alt:""}),`
    `]}),`
`,e.jsx(t.div,{className:"text-gray-500 text-center",children:"Previous test result price comparison without AWS using Provisioned IOPS."}),`
`]}),`
`,e.jsxs(t.p,{children:["This level of throughput is enough to service many kinds of businesses with a drastically more simple system to manage, with large cost savings. Also, with the use of an ORM like ",e.jsx(t.a,{href:"https://docs.servicestack.net/ormlite",children:"OrmLite"}),", switching to another database provider can be migrated if and when the traditional offerings like Postgres are needed."]}),`
`,e.jsx(t.h2,{children:"The Setups"}),`
`,e.jsx(t.style,{children:`
    table {
        width: 100%;
        margin-top: 4em;
        margin-bottom: 4em;
    }
`}),`
`,e.jsx(t.p,{children:"The original setup for tests we did in June didn't default to provisioned IOPs for AWS, but when repeating the tests AWS costs blow out due to this feature being enabled by default."}),`
`,e.jsxs(t.p,{children:["Without provisioned IOPs, it drops to around ",e.jsx(t.strong,{children:"$132/month"})," as an estimated cost. The ",e.jsx(t.strong,{children:"$300/month"}),' default feature for a "Production" database is very hard for AWS to justify, and I think more of a sign of their poor performing GP2 storage option. Although this will only impact very "chatty" types of applications that need higher IOPs throughput, the difference in performance from RDS vs providers like DigitalOcean and Hetzner can be quite stark.']}),`
`,e.jsxs(t.div,{className:"mx-auto mt-4 mb-4",children:[`
    `,e.jsxs(t.div,{className:"inline-flex justify-center w-full",children:[`
      `,e.jsx(t.img,{src:"https://servicestack.net/img/posts/hetzner-cloud/aws-rds-with-provisioned-iops.png",alt:""}),`
    `]}),`
`,e.jsx(t.div,{className:"text-gray-500 text-center",children:"AWS RDS now defaults to provisioned IOPs for a Production setup, drastically increasing costs."}),`
`]}),`


















































`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{}),e.jsx(t.th,{children:"AWS (DB)"}),e.jsx(t.th,{children:"AWS (App)"}),e.jsx(t.th,{children:"Azure (DB)"}),e.jsx(t.th,{children:"Azure (App)"}),e.jsx(t.th,{children:"DigitalOcean"}),e.jsx(t.th,{children:"Hetzner Cloud"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"vCPU"}),e.jsx(t.td,{children:"2"}),e.jsx(t.td,{children:"2"}),e.jsx(t.td,{children:"4"}),e.jsx(t.td,{children:"2"}),e.jsx(t.td,{children:"4"}),e.jsx(t.td,{children:"4"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Memory  (GB)"}),e.jsx(t.td,{children:"8"}),e.jsx(t.td,{children:"4"}),e.jsx(t.td,{children:"10"}),e.jsx(t.td,{children:"8"}),e.jsx(t.td,{children:"8"}),e.jsx(t.td,{children:"8"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Storage (GB)"}),e.jsx(t.td,{children:"100 (provisioned)"}),e.jsx(t.td,{children:"16"}),e.jsx(t.td,{children:"32"}),e.jsx(t.td,{children:"30"}),e.jsx(t.td,{children:"160"}),e.jsx(t.td,{children:"160"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Cost"}),e.jsx(t.td,{children:"$442"}),e.jsx(t.td,{children:"$34"}),e.jsx(t.td,{children:"$373"}),e.jsx(t.td,{children:"$70"}),e.jsx(t.td,{children:"$48"}),e.jsx(t.td,{children:"$15"})]})]})]}),`
`,e.jsx(t.p,{children:'The above specs were provided as "Production" defaults when using a single database instance. Azure SQL Database defaults to costing $373, during the load test, the database CPU hit ~25%.'}),`
`,e.jsxs(t.div,{className:"mx-auto mt-4 mb-4",children:[`
    `,e.jsxs(t.div,{className:"inline-flex justify-center w-full",children:[`
      `,e.jsx(t.img,{src:"https://servicestack.net/img/posts/hetzner-cloud/azure-db-cpu-during-test.png",alt:""}),`
    `]}),`
`,e.jsx(t.div,{className:"text-gray-500 text-center",children:"Azure SQL database without tuning performs poorly for cost, likely due to lack of indexes"}),`
`]}),`





















`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{}),e.jsx(t.th,{children:"AWS (DB)"}),e.jsx(t.th,{children:"AWS (App)"}),e.jsx(t.th,{children:"Azure (DB)"}),e.jsx(t.th,{children:"Azure (App)"}),e.jsx(t.th,{children:"Hetzner Cloud"})]})}),e.jsx(t.tbody,{children:e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Max CPU %"}),e.jsx(t.td,{children:"8"}),e.jsx(t.td,{children:"35"}),e.jsx(t.td,{children:"25"}),e.jsx(t.td,{children:"45"}),e.jsx(t.td,{children:"40"})]})})]}),`
`,e.jsx(t.p,{children:"This is without any tuning on any of the databases, so while you like more performance out of the recommended setups, it is still clear SQLite performs well by default, and it is well worth considering not only Hetzner Cloud for value for money, but if your use can only needs a single host with SQLite."}),`
`,e.jsx(t.h2,{children:"Hetzner Cloud"}),`
`,e.jsx(t.p,{children:"While we were primarily looking for one of the lowest cost options with simplified pricing, Hetzner Cloud pleasantly surprised us with a few features the larger providers could learn from."}),`
`,e.jsxs(t.div,{className:"mx-auto mt-4 mb-4",children:[`
    `,e.jsxs(t.div,{className:"inline-flex justify-center w-full",children:[`
      `,e.jsx(t.img,{src:"https://servicestack.net/img/posts/hetzner-cloud/hetzner-cloud-buy.png",alt:""}),`
    `]}),`
`,e.jsx(t.div,{className:"text-gray-500 text-center",children:"Hetzner Cloud Pricing."}),`
`]}),`
`,e.jsx(t.h3,{children:"Creating a new instance is fast"}),`
`,e.jsxs(t.p,{children:[`Most of the time if will be ready to remote to before you can open your terminal. Not sure if this is due to some kind of pre-creation process on Hetzner part during the creation screen, but everything is very responsive.
In my testing from the time the "Create" button was clicked, my SSH commands would succeed within `,e.jsx(t.strong,{children:"20 seconds"}),"."]}),`
`,e.jsx(t.h3,{children:"Live Graphs"}),`
`,e.jsx(t.p,{children:'Another part of the responsiveness is their "Live" graphs for monitoring. It is surprisingly low latency and an extremely stark difference between AWS charging extra for "Detailed" monitoring on EC2 instances. The graphs update every 3-5 seconds in the browser and look to be over a few seconds behind real-time.'}),`
`,e.jsxs(t.div,{className:"mx-auto mt-4 mb-4",children:[`
    `,e.jsxs(t.div,{className:"inline-flex justify-center w-full",children:[`
      `,e.jsx(t.img,{src:"https://servicestack.net/img/posts/hetzner-cloud/hetzner-cloud-live-graphs.gif",alt:""}),`
    `]}),`
`,e.jsx(t.div,{className:"text-gray-500 text-center",children:"Live monitoring updates every 3-5 seconds."}),`
`]}),`
`,e.jsx(t.p,{children:"CloudWatch is a major value add for AWS, and Hetzner's offering is very very basic in comparison, but it is nice to see live updating stats right in your web browser, and something hopefully the other providers can also offer in the future."}),`
`,e.jsx(t.h3,{children:"Price"}),`
`,e.jsxs(t.p,{children:['This is the biggest draw card by a long way. The AWS and Azure "recommended" setups are extremely expensive for the hardware and performance they offer. Yes they are mature cloud offerings with a large array of features, but their ',e.jsx(t.strong,{children:"pricing scales with hardware resources"}),`.
Products like `,e.jsx(t.strong,{children:"Provisioned IOPs"})," are extremely expensive, and when other cloud providers are offering far more performant and competitive storage with their instances, it can feel like AWS is using it's market share and their defaults to upsell very expensive products."]}),`
`,e.jsx(t.h3,{children:"Transfer costs"}),`
`,e.jsxs(t.p,{children:["It's been long known that one of the ways large cloud providers keep customers in their network is by charging ",e.jsx(t.a,{href:"https://aws.amazon.com/blogs/architecture/overview-of-data-transfer-costs-for-common-architectures",children:"excessively large and complex data egress costs"}),". Something attractive about simplified pricing from Hetzner Cloud (and DigitalOcean to a lesser degree) is the included data transfer of 20TB a month."]}),`
`,e.jsxs(t.p,{children:["Not only is AWS data transfer pricing extremely complicated (inter region vs cross region vs CloudFront vs Transit Gateway and so on), but if your application was sending a lot of data to clients, that same ",e.jsx(t.strong,{children:"20TB"})," you get for free with a ",e.jsx(t.strong,{children:"$15 server"}),", would cost ",e.jsx(t.strong,{children:"$1,791 just for data"})," when coming from AWS. Azure pricing also confusing, and in some ways more expensive."]}),`
`,e.jsx(t.h2,{children:"Defaults are powerful"}),`
`,e.jsx(t.p,{children:`Both AWS and Azure "recommended" defaults are there not because the software selected (SQL Server and Postgres) need that amount of resources just to operate, but more as an upsell.
Lots of projects and applications absolutely do not need features like "Provisioned IOPs", despite GP2 storage of AWS being incredibly slow.`}),`
`,e.jsxs(t.p,{children:["Performing disk speed check using the Linux utility ",e.jsx(t.code,{children:"fio"}),` an AWS EC2 instance with 100GB GP2 storage can do ~2250 IOPS and 9MB/s read, and ~750 IOPs at 3MB/s write.
In contrast, Digital Ocean $48 instance, this is not even paying the extra $8/month for the faster storage can do 35.2k IOPS at 144MB/s read, and 11.8k IOPS at 48MB/s write.`]}),`
`,e.jsx(t.p,{children:"Hetzner again is the stand out, with the $15 instance tests resulting in 50.8k IOPS at 207MB/s read, and 16.9k IOPS at 69MB/s write."}),`








































`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{}),e.jsx(t.th,{children:"Read IOPS"}),e.jsx(t.th,{children:"Write IOPs"}),e.jsx(t.th,{children:"Read MBs"}),e.jsx(t.th,{children:"Write MBs"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"AWS"}),e.jsx(t.td,{children:"2.3k"}),e.jsx(t.td,{children:"0.8k"}),e.jsx(t.td,{children:"9.2 MB/s"}),e.jsx(t.td,{children:"3.1 MB/s"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Azure"}),e.jsx(t.td,{children:"3.0k"}),e.jsx(t.td,{children:"1.0k"}),e.jsx(t.td,{children:"12.5 MB/s"}),e.jsx(t.td,{children:"4.2 MB/s"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"DigitalOcean"}),e.jsx(t.td,{children:"35.2k"}),e.jsx(t.td,{children:"11.8k"}),e.jsx(t.td,{children:"144 MB/s"}),e.jsx(t.td,{children:"48.2 MB/s"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Hetzner Cloud"}),e.jsx(t.td,{children:"50.5k"}),e.jsx(t.td,{children:"16.9k"}),e.jsx(t.td,{children:"207 MB/s"}),e.jsx(t.td,{children:"69.2 MB/s"})]})]})]}),`
`,e.jsxs(t.p,{children:["All tests used the following ",e.jsx(t.code,{children:"fio"})," command."]}),`
`,e.jsx(t.div,{className:"remark-highlight",children:e.jsx(t.pre,{className:"language-shell",children:e.jsxs(t.code,{className:"language-shell",children:["fio ",e.jsx(t.span,{className:"token parameter variable",children:"--randrepeat"}),e.jsx(t.span,{className:"token operator",children:"="}),e.jsx(t.span,{className:"token number",children:"1"})," ",e.jsx(t.span,{className:"token parameter variable",children:"--ioengine"}),e.jsx(t.span,{className:"token operator",children:"="}),"libaio ",e.jsx(t.span,{className:"token parameter variable",children:"--direct"}),e.jsx(t.span,{className:"token operator",children:"="}),e.jsx(t.span,{className:"token number",children:"1"})," ",e.jsx(t.span,{className:"token parameter variable",children:"--gtod_reduce"}),e.jsx(t.span,{className:"token operator",children:"="}),e.jsx(t.span,{className:"token number",children:"1"})," ",e.jsx(t.span,{className:"token parameter variable",children:"--name"}),e.jsx(t.span,{className:"token operator",children:"="}),"test ",e.jsx(t.span,{className:"token punctuation",children:"\\"}),`
`,e.jsx(t.span,{className:"token parameter variable",children:"--filename"}),e.jsx(t.span,{className:"token operator",children:"="}),"test ",e.jsx(t.span,{className:"token parameter variable",children:"--bs"}),e.jsx(t.span,{className:"token operator",children:"="}),"4k ",e.jsx(t.span,{className:"token parameter variable",children:"--iodepth"}),e.jsx(t.span,{className:"token operator",children:"="}),e.jsx(t.span,{className:"token number",children:"64"})," ",e.jsx(t.span,{className:"token parameter variable",children:"--size"}),e.jsx(t.span,{className:"token operator",children:"="}),"4G ",e.jsx(t.span,{className:"token parameter variable",children:"--readwrite"}),e.jsx(t.span,{className:"token operator",children:"="}),"randrw ",e.jsx(t.span,{className:"token parameter variable",children:"--rwmixread"}),e.jsx(t.span,{className:"token operator",children:"="}),e.jsx(t.span,{className:"token number",children:"75"}),`
`]})})}),`
`,e.jsx(t.h2,{children:"SQLite"}),`
`,e.jsx(t.p,{children:"Part of the resurgence in popularity of using SQLite is not only the simplicity of a single server, but also as hardware is getting faster, issues surrounding limitations of a single writer are becoming less of an issue for a wider number of use cases."}),`
`,e.jsx(t.p,{children:"Litestream's elegant solution for streaming backups to cheap replica storage is definitely adding to that popularity as well since it was a sticking point for a lot of use cases that need that simple data redundancy functionality."}),`
`,e.jsxs(t.p,{children:["Other solutions for Postgres like ",e.jsx(t.code,{children:"pgbackrest"}),` are similar, but the ease of use is another big part of what makes SQLite and Litestream a great combination.
One command to watch and replicate, another to restore, and it runs completely independent of your application using the SQLite file.`]}),`
`,e.jsx(t.h2,{children:"Hetzner Cloud is hard to beat on price"}),`
`,e.jsx(t.p,{children:"We're going to keep testing Hetzner Cloud with new applications and use cases going into the future. While they are a very new player in the crowded Cloud Provider market, and their offerings are much more limited, the pricing is a breath of fresh air from the large three providers."}),`
`,e.jsx(t.p,{children:`More competition in this space is a great thing, and for those that can use solutions like SQLite for their projects, checking out some of the smaller players like DigitalOcean and Hetzner Cloud is well worth your time.
The early signs from Hetzner Cloud is they not only have an amazing value product, but the features they do have improve on the equivalents from likes of AWS and Azure, which is hopefully a sign of things to come from them.`})]})}function i(s={}){const{wrapper:t}=s.components||{};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{i as default};
