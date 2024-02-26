import{j as e}from"./index-BztdH8Fb.js";function t(s){const n={a:"a",blockquote:"blockquote",code:"code",div:"div",em:"em",figcaption:"figcaption",figure:"figure",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{className:"lead",children:`
  Until now, trying to style an article, document, or blog post with Tailwind has been a tedious
  task that required a keen eye for typography and a lot of complex custom CSS.
`}),`
`,e.jsxs(n.p,{children:["By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you ",e.jsx(n.em,{children:"really are"})," just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive."]}),`
`,e.jsx(n.p,{children:"We get lots of complaints about it actually, with people regularly asking us things like:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Why is Tailwind removing the default styles on my ",e.jsx(n.code,{children:"h1"})," elements? How do I disable this? What do you mean I lose all the other base styles too?"]}),`
`]}),`
`,e.jsxs(n.p,{children:["We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a ",e.jsx(n.code,{children:"p"})," element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look ",e.jsx(n.em,{children:"awesome"}),", not awful."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@tailwindcss/typography"})," plugin is our attempt to give you what you ",e.jsx(n.em,{children:"actually"})," want, without any of the downsides of doing something stupid like disabling our base styles."]}),`
`,e.jsxs(n.p,{children:["It adds a new ",e.jsx(n.code,{children:"prose"})," class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:"]}),`
`,e.jsx(n.div,{className:"remark-highlight",children:e.jsx(n.pre,{className:"language-html",children:e.jsxs(n.code,{className:"language-html",children:[e.jsxs(n.span,{className:"token tag",children:[e.jsxs(n.span,{className:"token tag",children:[e.jsx(n.span,{className:"token punctuation",children:"<"}),"article"]})," ",e.jsx(n.span,{className:"token attr-name",children:"class"}),e.jsxs(n.span,{className:"token attr-value",children:[e.jsx(n.span,{className:"token punctuation attr-equals",children:"="}),e.jsx(n.span,{className:"token punctuation",children:'"'}),"prose",e.jsx(n.span,{className:"token punctuation",children:'"'})]}),e.jsx(n.span,{className:"token punctuation",children:">"})]}),`
  `,e.jsxs(n.span,{className:"token tag",children:[e.jsxs(n.span,{className:"token tag",children:[e.jsx(n.span,{className:"token punctuation",children:"<"}),"h1"]}),e.jsx(n.span,{className:"token punctuation",children:">"})]}),"Garlic bread with cheese: What the science tells us",e.jsxs(n.span,{className:"token tag",children:[e.jsxs(n.span,{className:"token tag",children:[e.jsx(n.span,{className:"token punctuation",children:"</"}),"h1"]}),e.jsx(n.span,{className:"token punctuation",children:">"})]}),`
  `,e.jsxs(n.span,{className:"token tag",children:[e.jsxs(n.span,{className:"token tag",children:[e.jsx(n.span,{className:"token punctuation",children:"<"}),"p"]}),e.jsx(n.span,{className:"token punctuation",children:">"})]}),`
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  `,e.jsxs(n.span,{className:"token tag",children:[e.jsxs(n.span,{className:"token tag",children:[e.jsx(n.span,{className:"token punctuation",children:"</"}),"p"]}),e.jsx(n.span,{className:"token punctuation",children:">"})]}),`
  `,e.jsxs(n.span,{className:"token tag",children:[e.jsxs(n.span,{className:"token tag",children:[e.jsx(n.span,{className:"token punctuation",children:"<"}),"p"]}),e.jsx(n.span,{className:"token punctuation",children:">"})]}),`
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  `,e.jsxs(n.span,{className:"token tag",children:[e.jsxs(n.span,{className:"token tag",children:[e.jsx(n.span,{className:"token punctuation",children:"</"}),"p"]}),e.jsx(n.span,{className:"token punctuation",children:">"})]}),`
  `,e.jsx(n.span,{className:"token comment",children:"<!-- ... -->"}),`
`,e.jsxs(n.span,{className:"token tag",children:[e.jsxs(n.span,{className:"token tag",children:[e.jsx(n.span,{className:"token punctuation",children:"</"}),"article"]}),e.jsx(n.span,{className:"token punctuation",children:">"})]}),`
`]})})}),`
`,e.jsxs(n.p,{children:["For more information about how to use the plugin and the features it includes, ",e.jsx(n.a,{href:"https://github.com/tailwindcss/typography/blob/master/README.md",children:"read the documentation"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"What to expect from here on out"}),`
`,e.jsxs(n.p,{children:["What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like ",e.jsx(n.strong,{children:"bold text"}),", unordered lists, ordered lists, code blocks, block quotes, ",e.jsx(n.em,{children:"and even italics"}),"."]}),`
`,e.jsx(n.p,{children:"It's important to cover all of these use cases for a few reasons:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"We want everything to look good out of the box."}),`
`,e.jsx(n.li,{children:"Really just the first reason, that's the whole point of the plugin."}),`
`,e.jsx(n.li,{children:"Here's a third pretend reason though a list with three items looks more realistic than a list with two items."}),`
`]}),`
`,e.jsx(n.p,{children:"Now we're going to try out another header style."}),`
`,e.jsx(n.h3,{children:"Typography should be easy"}),`
`,e.jsx(n.p,{children:"So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable."}),`
`,e.jsx(n.p,{children:"Something a wise person once told me about typography is:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad."}),`
`]}),`
`,e.jsx(n.p,{children:"It's probably important that images look okay here by default as well:"}),`
`,e.jsxs(n.figure,{children:[`
  `,e.jsx(n.img,{src:"https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",alt:""}),`
  `,e.jsx(n.figcaption,{children:`
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
    classical Latin literature from 45 BC, making it over 2000 years old.
  `}),`
`]}),`
`,e.jsx(n.p,{children:"Now I'm going to show you an example of an unordered list to make sure that looks good, too:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"So here is the first item in this list."}),`
`,e.jsx(n.li,{children:"In this example we're keeping the items short."}),`
`,e.jsx(n.li,{children:"Later, we'll use longer, more complex list items."}),`
`]}),`
`,e.jsx(n.p,{children:"And that's the end of this section."})]})}function o(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{o as default};
