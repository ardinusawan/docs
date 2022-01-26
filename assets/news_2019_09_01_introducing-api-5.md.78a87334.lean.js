import{_ as d,c,a as t,w as r,b as e,e as s,d as a,r as l,o as p}from"./app.4636778c.js";const W='{"title":"Introducing API version 5","description":"","frontmatter":{"editLink":false},"headers":[{"level":2,"title":"Introduction","slug":"introduction"},{"level":2,"title":"LuaJIT \u2192 C++","slug":"luajit-\u2192-c"},{"level":2,"title":"Revamped front-end","slug":"revamped-front-end"},{"level":2,"title":"Improved rate limiter","slug":"improved-rate-limiter"},{"level":2,"title":"Support for animated images","slug":"support-for-animated-images"},{"level":2,"title":"Support for loading HEIC images","slug":"support-for-loading-heic-images"},{"level":2,"title":"CSS-inspired fit parameters","slug":"css-inspired-fit-parameters"},{"level":2,"title":"Tinting images","slug":"tinting-images"},{"level":2,"title":"Arbitrary rotation angles","slug":"arbitrary-rotation-angles"},{"level":2,"title":"Adaptive filter and compression level","slug":"adaptive-filter-and-compression-level"},{"level":2,"title":"Metadata output","slug":"metadata-output"},{"level":2,"title":"Flip / flop an image","slug":"flip-flop-an-image"},{"level":2,"title":"JSON for error messages","slug":"json-for-error-messages"},{"level":2,"title":"Other improvements","slug":"other-improvements"}],"relativePath":"news/2019/09/01/introducing-api-5.md","lastUpdated":1641649631950}',h={},u=s("",18),m=e("div",{class:"language-html"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("img")]),a(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("//images.weserv.nl/?url=images.weserv.nl/banana.webp&h=300&output=gif&n=-1"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),f=e("div",{class:"language-md"},[e("pre",null,[e("code",null,[e("span",{class:"token url"},[e("span",{class:"token operator"},"!"),a("["),e("span",{class:"token content"},"Animated image"),a("]("),e("span",{class:"token url"},"https://images.weserv.nl/?url=images.weserv.nl/banana.webp&h=300&output=gif&n=-1"),a(")")]),a(`
`)])])],-1),g={href:"/?url=images.weserv.nl/banana.webp&h=300&output=gif&n=-1",target:"_blank"},v=["src"],b=s("",10),w=e("div",{class:"language-html"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("img")]),a(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&tint=red"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),_=e("div",{class:"language-md"},[e("pre",null,[e("code",null,[e("span",{class:"token url"},[e("span",{class:"token operator"},"!"),a("["),e("span",{class:"token content"},"Tint"),a("]("),e("span",{class:"token url"},"https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&tint=red"),a(")")]),a(`
`)])])],-1),k={href:"/?url=images.weserv.nl/lichtenstein.jpg&w=300&tint=red",target:"_blank"},T=["src"],y=e("h2",{id:"arbitrary-rotation-angles",tabindex:"-1"},[a("Arbitrary rotation angles "),e("a",{class:"header-anchor",href:"#arbitrary-rotation-angles","aria-hidden":"true"},"#")],-1),I=e("p",null,[a("Instead of only being able to rotate multiples of 90 degrees, any angle can now be given. The remaining space can be filled with a background color by using "),e("code",null,"&rbg="),a(". To reflect this change, the "),e("code",null,"&or="),a(" parameter has been renamed to "),e("a",{href:"/docs/orientation.html#rotation"},[e("code",null,"&ro=")]),a(".")],-1),x=e("div",{class:"language-html"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),a("img")]),a(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),a("//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&h=300&ro=45"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),C=e("div",{class:"language-md"},[e("pre",null,[e("code",null,[e("span",{class:"token url"},[e("span",{class:"token operator"},"!"),a("["),e("span",{class:"token content"},"Rotation"),a("]("),e("span",{class:"token url"},"https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&h=300&ro=45"),a(")")]),a(`
`)])])],-1),A={href:"/?url=images.weserv.nl/lichtenstein.jpg&h=300&ro=45",target:"_blank"},S=["src"],j=s("",10);function L(o,P,R,q,H,G){const n=l("CodeGroupItem"),i=l("CodeGroup");return p(),c("div",null,[u,t(i,null,{default:r(()=>[t(n,{title:"HTML",active:""},{default:r(()=>[m]),_:1}),t(n,{title:"Markdown"},{default:r(()=>[f]),_:1})]),_:1}),e("a",g,[e("img",{src:o.$withBase("/static/banana.webp?h=300&output=gif&n=-1"),alt:"Animated image"},null,8,v)]),b,t(i,null,{default:r(()=>[t(n,{title:"HTML",active:""},{default:r(()=>[w]),_:1}),t(n,{title:"Markdown"},{default:r(()=>[_]),_:1})]),_:1}),e("a",k,[e("img",{src:o.$withBase("/static/lichtenstein.jpg?w=300&tint=red"),alt:"Tint"},null,8,T)]),y,I,t(i,null,{default:r(()=>[t(n,{title:"HTML",active:""},{default:r(()=>[x]),_:1}),t(n,{title:"Markdown"},{default:r(()=>[C]),_:1})]),_:1}),e("a",A,[e("img",{src:o.$withBase("/static/lichtenstein.jpg?h=300&ro=45"),alt:"Rotation"},null,8,S)]),j])}var M=d(h,[["render",L]]);export{W as __pageData,M as default};
