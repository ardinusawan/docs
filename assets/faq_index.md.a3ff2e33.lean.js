import{_ as h,c as l,a as r,w as s,e as i,b as e,r as n,o as d,d as a}from"./app.4636778c.js";const C=`{"title":"FAQ","description":"","frontmatter":{},"headers":[{"level":2,"title":"What is images.weserv.nl?","slug":"what-is-images-weserv-nl"},{"level":2,"title":"What is this page? Where do I find my question?","slug":"what-is-this-page-where-do-i-find-my-question"},{"level":2,"title":"What is the history of this project?","slug":"what-is-the-history-of-this-project"},{"level":2,"title":"How are you funded?","slug":"how-are-you-funded"},{"level":2,"title":"Are there any limitations?","slug":"are-there-any-limitations"},{"level":2,"title":"Is the code open source?","slug":"is-the-code-open-source"},{"level":2,"title":"How do I use your source code?","slug":"how-do-i-use-your-source-code"},{"level":2,"title":"Can I sell your service?","slug":"can-i-sell-your-service"},{"level":2,"title":"Do you keep any logs?","slug":"do-you-keep-any-logs"},{"level":2,"title":"Where are your servers located?","slug":"where-are-your-servers-located"},{"level":2,"title":"How is your relationship with Cloudflare?","slug":"how-is-your-relationship-with-cloudflare"},{"level":2,"title":"What is your relationship with Cloudflare?","slug":"what-is-your-relationship-with-cloudflare"},{"level":2,"title":"Is there any SLA or uptime guarantee for your service?","slug":"is-there-any-sla-or-uptime-guarantee-for-your-service"},{"level":2,"title":"What companies are using this service?","slug":"what-companies-are-using-this-service"},{"level":2,"title":"Are you passing any information to the origin server?","slug":"are-you-passing-any-information-to-the-origin-server"},{"level":2,"title":"Will you see my images? Can others see my images?","slug":"will-you-see-my-images-can-others-see-my-images"},{"level":2,"title":"Are you saving images on your server(s)?","slug":"are-you-saving-images-on-your-server-s"},{"level":2,"title":"If images are modified, do you refresh them after a certain period of time?","slug":"if-images-are-modified-do-you-refresh-them-after-a-certain-period-of-time"},{"level":2,"title":"What is caching?","slug":"what-is-caching"},{"level":2,"title":"How are images cached by your servers?","slug":"how-are-images-cached-by-your-servers"},{"level":2,"title":"How are images cached by my browser?","slug":"how-are-images-cached-by-my-browser"},{"level":2,"title":"Can I remove an image from your server(s) cache?","slug":"can-i-remove-an-image-from-your-server-s-cache"},{"level":2,"title":"Why am I redirected to https:// even when I request http://?","slug":"why-am-i-redirected-to-https-even-when-i-request-http"},{"level":2,"title":"Are images compressed in any way?","slug":"are-images-compressed-in-any-way"},{"level":2,"title":"Which file-extensions do you support?","slug":"which-file-extensions-do-you-support"},{"level":2,"title":"Do you support animated images? E.g. animated .gif?","slug":"do-you-support-animated-images-e-g-animated-gif"},{"level":2,"title":"Can I use my own (sub)domain? E.g. by using a CNAME to images.weserv.nl?","slug":"can-i-use-my-own-sub-domain-e-g-by-using-a-cname-to-images-weserv-nl"},{"level":2,"title":"Why don't you support CNAME-ing?","slug":"why-don-t-you-support-cname-ing"},{"level":2,"title":"Why am I not seeing any HTTP 304 header when I request a cached image?","slug":"why-am-i-not-seeing-any-http-304-header-when-i-request-a-cached-image"},{"level":2,"title":"Why don't you use ETag or Last-Modified headers?","slug":"why-don-t-you-use-etag-or-last-modified-headers"},{"level":2,"title":"What if I still have a question?","slug":"what-if-i-still-have-a-question"}],"relativePath":"faq/index.md","lastUpdated":1640870573835}`,u={},c=i("",79),p=e("div",{class:"language-nginx"},[e("pre",null,[e("code",null,[e("span",{class:"token directive"},[e("span",{class:"token keyword"},"http")]),a(),e("span",{class:"token punctuation"},"{"),a(`
    `),e("span",{class:"token directive"},[e("span",{class:"token keyword"},"etag"),a(),e("span",{class:"token boolean"},"off")]),e("span",{class:"token punctuation"},";"),a(),e("span",{class:"token comment"},"# Disable ETag header"),a(`
    `),e("span",{class:"token directive"},[e("span",{class:"token keyword"},"expires"),a(),e("span",{class:"token number"},"1y")]),e("span",{class:"token punctuation"},";"),a(),e("span",{class:"token comment"},"# Far-future expiration"),a(`
`),e("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),m=e("div",{class:"language-apacheconf"},[e("pre",null,[e("code",null,[e("span",{class:"token directive-inline property"},"Header"),a(` unset ETag
`),e("span",{class:"token directive-inline property"},"FileETag"),a(` None
`),e("span",{class:"token directive-inline property"},"Header"),a(" set Cache-Control "),e("span",{class:"token string"},'"max-age=31536000"'),a(`
`)])])],-1),f=e("p",null,"These directives completely disables ETags, so the browser is somewhat forced to listen to the Cache- Control header. It also tells the browser to cache the file 31536000 seconds, or 1 year.",-1),g=e("p",null,"Optional, we use multiple servers to serve static content, and we are not sure about the last-modified times those servers report, because each has his own version of the cache, so we also use:",-1),y=e("div",{class:"language-nginx"},[e("pre",null,[e("code",null,[e("span",{class:"token directive"},[e("span",{class:"token keyword"},"http")]),a(),e("span",{class:"token punctuation"},"{"),a(`
    `),e("span",{class:"token directive"},[e("span",{class:"token keyword"},"add_header"),a(" Last-Modified "),e("span",{class:"token string"},'""'),a(" always")]),e("span",{class:"token punctuation"},";"),a(),e("span",{class:"token comment"},"# Always remove the Last-Modified header"),a(`
`),e("span",{class:"token punctuation"},"}"),a(`
`)])])],-1),w=e("div",{class:"language-apacheconf"},[e("pre",null,[e("code",null,[e("span",{class:"token directive-inline property"},"Header"),a(` unset Last-Modified
`)])])],-1),v=i("",9);function b(k,_,x,I,W,q){const t=n("CodeGroupItem"),o=n("CodeGroup");return d(),l("div",null,[c,r(o,null,{default:s(()=>[r(t,{title:"nginx",active:""},{default:s(()=>[p]),_:1}),r(t,{title:"Apache"},{default:s(()=>[m]),_:1})]),_:1}),f,g,r(o,null,{default:s(()=>[r(t,{title:"nginx",active:""},{default:s(()=>[y]),_:1}),r(t,{title:"Apache"},{default:s(()=>[w]),_:1})]),_:1}),v])}var A=h(u,[["render",b]]);export{C as __pageData,A as default};
