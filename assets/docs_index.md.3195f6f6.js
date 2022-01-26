import{_ as i,c as l,a,w as s,e as c,r,o as p,b as e,d as t}from"./app.4636778c.js";const P='{"title":"Introduction","description":"","frontmatter":{},"headers":[{"level":2,"title":"How it works","slug":"how-it-works"}],"relativePath":"docs/index.md","lastUpdated":1641123557342}',d={},u=c('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h1><p>Images.<strong>weserv</strong>.nl is an image <strong>cache</strong> &amp; <strong>resize</strong> service. Our servers resize your image, cache it worldwide, and display it.</p><ul><li>We support a good range of image formats, including JPEG, PNG, BMP, GIF, TIFF, WebP, PDF and SVG. <ul><li>There&#39;s even support for <a href="./format.html#number-of-pages">animated WebP and GIF images</a>.</li></ul></li><li>We support IPv6, <a href="http://ipv6-test.com/validate.php?url=images.weserv.nl" target="_blank" rel="noopener noreferrer">serving dual stack</a>, and supporting <a href="/?url=ipv6.google.com/logos/logo.gif">IPv6-only origin hosts</a>.</li><li>For secure connections over TLS/SSL, you can use <a href="/">https://images.weserv.nl/</a>. <ul><li>This can be very useful for embedding HTTP images on HTTPS websites. HTTPS origin hosts can be used by <a href="https://github.com/weserv/images/issues/33" target="_blank" rel="noopener noreferrer">prefixing the hostname with https://</a>.</li></ul></li><li>The CDN is provided by <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">Cloudflare</a>. Images are being cached and delivered straight from<br><a href="https://www.cloudflare.com/network/" target="_blank" rel="noopener noreferrer">200+ global datacenters</a>. This ensures the fastest load times and best performance.</li></ul><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a></h2><p>You pass the image URL and a set of parameters. <a href="http://images.weserv.nl" target="_blank" rel="noopener noreferrer">images.weserv.nl</a> will then fetch the image, resize it, cache it and display it. The next time the request comes, it will serve the cached version.</p>',5),h=e("div",{class:"language-html"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},"<!-- images.weserv.nl/lichtenstein.jpg -->"),t(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("img")]),t(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),g=e("div",{class:"language-md"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},"<!--- images.weserv.nl/lichtenstein.jpg --->"),t(`
`),e("span",{class:"token url"},[e("span",{class:"token operator"},"!"),t("["),e("span",{class:"token content"},"Lichtenstein"),t("]("),e("span",{class:"token url"},"https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300"),t(")")]),t(`
`)])])],-1);function m(f,_,w,v,k,b){const n=r("CodeGroupItem"),o=r("CodeGroup");return p(),l("div",null,[u,a(o,null,{default:s(()=>[a(n,{title:"HTML",active:""},{default:s(()=>[h]),_:1}),a(n,{title:"Markdown"},{default:s(()=>[g]),_:1})]),_:1})])}var I=i(d,[["render",m]]);export{P as __pageData,I as default};
