import{_ as p,c as d,b as e,a as s,w as n,d as t,e as r,r as c,o as u}from"./app.4636778c.js";const me='{"title":"Crop","description":"","frontmatter":{},"headers":[{"level":2,"title":"Alignment position","slug":"alignment-position"},{"level":3,"title":"Position-based","slug":"position-based"},{"level":3,"title":"Focal point","slug":"focal-point"},{"level":3,"title":"Smart crop","slug":"smart-crop"},{"level":2,"title":"Rectangle crop","slug":"rectangle-crop"},{"level":2,"title":"Trim","slug":"trim"}],"relativePath":"docs/crop.md","lastUpdated":1640861412538}',h={},_=e("h1",{id:"crop",tabindex:"-1"},[t("Crop "),e("a",{class:"header-anchor",href:"#crop","aria-hidden":"true"},"#")],-1),g=e("p",null,"Controls how the image is aligned.",-1),m={id:"alignment-position",tabindex:"-1"},f=t("Alignment position "),k=t(),v=e("a",{class:"header-anchor",href:"#alignment-position","aria-hidden":"true"},"#",-1),w=r('<p>How the image should be aligned when <code>&amp;fit=cover</code> or <code>&amp;fit=contain</code> is set. The <a href="./size.html#width"><code>&amp;w=</code></a> and <a href="./size.html#height"><code>&amp;h=</code></a> parameters should also be specified.</p><h3 id="position-based" tabindex="-1">Position-based <a class="header-anchor" href="#position-based" aria-hidden="true">#</a></h3><p>Controls the starting location of the crop. When <code>&amp;fit=contain</code> is set, it determines how the image is positioned inside its box.</p><p><strong>Valid positions:</strong></p><ul><li><code>center</code>: default</li><li><code>top</code></li><li><code>right</code></li><li><code>bottom</code></li><li><code>left</code></li><li><code>top-left</code></li><li><code>bottom-left</code></li><li><code>bottom-right</code></li><li><code>top-right</code></li></ul><p>For more information, please see the suggestion on our GitHub issue tracker: <a href="https://github.com/weserv/images/issues/24" target="_blank" rel="noopener noreferrer">Issue #24 - Aligning</a>.</p>',6),b=e("div",{class:"language-html"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("img")]),t(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&a=top"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),y=e("div",{class:"language-md"},[e("pre",null,[e("code",null,[e("span",{class:"token url"},[e("span",{class:"token operator"},"!"),t("["),e("span",{class:"token content"},"Alignment position"),t("]("),e("span",{class:"token url"},"https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&a=top"),t(")")]),t(`
`)])])],-1),T={href:"/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&a=top",target:"_blank"},j=["src"],x={id:"focal-point",tabindex:"-1"},C=t("Focal point "),S=t(),A=e("a",{class:"header-anchor",href:"#focal-point","aria-hidden":"true"},"#",-1),M=e("p",null,[t("You can be more specific about the alignment using a focal point. This can be set using a horizontal ("),e("code",null,"&fpx="),t(") and vertical ("),e("code",null,"&fpy="),t(") offset decimal value (a float between "),e("code",null,"0.0"),t(" and "),e("code",null,"1.0"),t(", inclusive). The default value is "),e("code",null,"0.5"),t(", or the center of the image.")],-1),I=e("div",{class:"language-html"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("img")]),t(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&a=focal&fpy=0.45"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),V=e("div",{class:"language-md"},[e("pre",null,[e("code",null,[e("span",{class:"token url"},[e("span",{class:"token operator"},"!"),t("["),e("span",{class:"token content"},"Focal point"),t("]("),e("span",{class:"token url"},"https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&a=focal&fpy=0.45"),t(")")]),t(`
`)])])],-1),$={href:"/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&a=focal&fpy=0.45",target:"_blank"},B=["src"],P={id:"smart-crop",tabindex:"-1"},z=t("Smart crop "),H=t(),q=e("a",{class:"header-anchor",href:"#smart-crop","aria-hidden":"true"},"#",-1),N=r('<p>An experimental strategy-based approach to crop the image by removing boring parts. This only works with <code>&amp;fit=cover</code>.</p><p>More info: <a href="https://github.com/weserv/images/issues/90" target="_blank" rel="noopener noreferrer">Issue #90 - Add support for smart crop</a>.</p><p><strong>Valid strategies:</strong></p><ul><li><code>entropy</code>: focus on the region with the highest <a href="https://en.wikipedia.org/wiki/Entropy_%28information_theory%29" target="_blank" rel="noopener noreferrer">Shannon entropy</a>.</li><li><code>attention</code>: focus on the region with the highest luminance frequency, color saturation and presence of skin tones.</li></ul>',4),R=e("div",{class:"language-html"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("img")]),t(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("//images.weserv.nl/?url=images.weserv.nl/puppy.jpg&w=300&h=300&fit=cover&a=attention"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),F=e("div",{class:"language-md"},[e("pre",null,[e("code",null,[e("span",{class:"token url"},[e("span",{class:"token operator"},"!"),t("["),e("span",{class:"token content"},"Smart crop"),t("]("),e("span",{class:"token url"},"https://images.weserv.nl/?url=images.weserv.nl/puppy.jpg&w=300&h=300&fit=cover&a=attention"),t(")")]),t(`
`)])])],-1),G={href:"/?url=images.weserv.nl/puppy.jpg&w=300&h=300&fit=cover&a=attention",target:"_blank"},L=["src"],E={id:"rectangle-crop",tabindex:"-1"},D=t("Rectangle crop "),Y=t(),Q=e("a",{class:"header-anchor",href:"#rectangle-crop","aria-hidden":"true"},"#",-1),U=e("p",null,"Crops the image to specific dimensions after any other resize operations.",-1),W=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[t("You can use "),e("code",null,"&precrop"),t(", for a pre-resize crop behaviour. See "),e("a",{href:"https://github.com/weserv/images/issues/176",target:"_blank",rel:"noopener noreferrer"},"Issue #176 - Combine cropping with resizing"),t(" for more information.")])],-1),J=e("div",{class:"language-html"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("img")]),t(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&cx=680&cy=500&cw=300&ch=300"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),K=e("div",{class:"language-md"},[e("pre",null,[e("code",null,[e("span",{class:"token url"},[e("span",{class:"token operator"},"!"),t("["),e("span",{class:"token content"},"Rectangle crop"),t("]("),e("span",{class:"token url"},"https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&cx=680&cy=500&cw=300&ch=300"),t(")")]),t(`
`)])])],-1),O={href:"/?url=images.weserv.nl/lichtenstein.jpg&cx=680&cy=500&cw=300&ch=300",target:"_blank"},X=["src"],Z={id:"trim",tabindex:"-1"},ee=t("Trim "),te=t(),se=e("a",{class:"header-anchor",href:"#trim","aria-hidden":"true"},"#",-1),ne=e("p",null,[t('Trim "boring" pixels from all edges that contain values within a similarity of the top-left pixel. Trimming occurs before any resize operation. Use values between '),e("code",null,"1"),t(" and "),e("code",null,"254"),t(" to define a tolerance level to trim away similar color values. You also can specify just "),e("code",null,"&trim"),t(", which defaults to a tolerance level of "),e("code",null,"10"),t(".")],-1),ae=e("p",null,[t("More info: "),e("a",{href:"https://github.com/weserv/images/issues/39",target:"_blank",rel:"noopener noreferrer"},"Issue #39 - able to remove black/white whitespace"),t(".")],-1),oe=e("div",{class:"language-html"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("img")]),t(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("//images.weserv.nl/?url=images.weserv.nl/transparency_demo.png&w=300&trim=10"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),le=e("div",{class:"language-md"},[e("pre",null,[e("code",null,[e("span",{class:"token url"},[e("span",{class:"token operator"},"!"),t("["),e("span",{class:"token content"},"Trim"),t("]("),e("span",{class:"token url"},"https://images.weserv.nl/?url=images.weserv.nl/transparency_demo.png&w=300&trim=10"),t(")")]),t(`
`)])])],-1),ie={href:"/?url=images.weserv.nl/transparency_demo.png&w=300&trim=10",target:"_blank"},ce=["src"];function re(o,pe,de,ue,he,_e){const l=c("QueryString"),a=c("CodeGroupItem"),i=c("CodeGroup");return u(),d("div",null,[_,g,e("h2",m,[f,s(l,{field:"a"}),k,v]),w,s(i,null,{default:n(()=>[s(a,{title:"HTML",active:""},{default:n(()=>[b]),_:1}),s(a,{title:"Markdown"},{default:n(()=>[y]),_:1})]),_:1}),e("a",T,[e("img",{src:o.$withBase("/static/lichtenstein.jpg?w=300&h=300&fit=cover&a=top"),alt:"Alignment position"},null,8,j)]),e("h3",x,[C,s(l,{field:"a",value:"focal"}),S,A]),M,s(i,null,{default:n(()=>[s(a,{title:"HTML",active:""},{default:n(()=>[I]),_:1}),s(a,{title:"Markdown"},{default:n(()=>[V]),_:1})]),_:1}),e("a",$,[e("img",{src:o.$withBase("/static/lichtenstein.jpg?w=300&h=300&fit=cover&a=focal&fpy=0.45"),alt:"Focal point"},null,8,B)]),e("h3",P,[z,s(l,{field:"a",value:"[entropy,attention]"}),H,q]),N,s(i,null,{default:n(()=>[s(a,{title:"HTML",active:""},{default:n(()=>[R]),_:1}),s(a,{title:"Markdown"},{default:n(()=>[F]),_:1})]),_:1}),e("a",G,[e("img",{src:o.$withBase("/static/puppy.jpg?w=300&h=300&fit=cover&a=attention"),alt:"Smart crop"},null,8,L)]),e("h2",E,[D,s(l,{field:"c[x,y,w,h]"}),Y,Q]),U,W,s(i,null,{default:n(()=>[s(a,{title:"HTML",active:""},{default:n(()=>[J]),_:1}),s(a,{title:"Markdown"},{default:n(()=>[K]),_:1})]),_:1}),e("a",O,[e("img",{src:o.$withBase("/static/lichtenstein.jpg?cx=680&cy=500&cw=300&ch=300"),alt:"Rectangle crop"},null,8,X)]),e("h2",Z,[ee,s(l,{field:"trim"}),te,se]),ne,ae,s(i,null,{default:n(()=>[s(a,{title:"HTML",active:""},{default:n(()=>[oe]),_:1}),s(a,{title:"Markdown"},{default:n(()=>[le]),_:1})]),_:1}),e("a",ie,[e("img",{src:o.$withBase("/static/transparency_demo.png?w=300&trim=10"),alt:"Trim"},null,8,ce)])])}var fe=p(h,[["render",re]]);export{me as __pageData,fe as default};