import{_ as d,c as u,b as e,a as s,w as a,d as t,e as r,r as c,o as p}from"./app.4636778c.js";const Xe='{"title":"Format","description":"","frontmatter":{},"headers":[{"level":2,"title":"Adaptive filter","slug":"adaptive-filter"},{"level":2,"title":"Base64 (data URL)","slug":"base64-data-url"},{"level":2,"title":"Cache-Control","slug":"cache-control"},{"level":2,"title":"Compression level","slug":"compression-level"},{"level":2,"title":"Default image","slug":"default-image"},{"level":2,"title":"Filename","slug":"filename"},{"level":2,"title":"Interlace / progressive","slug":"interlace-progressive"},{"level":2,"title":"Number of pages","slug":"number-of-pages"},{"level":2,"title":"Output","slug":"output"},{"level":2,"title":"Page","slug":"page"},{"level":2,"title":"Quality","slug":"quality"}],"relativePath":"docs/format.md","lastUpdated":1640861412538}',h={},_=e("h1",{id:"format",tabindex:"-1"},[t("Format "),e("a",{class:"header-anchor",href:"#format","aria-hidden":"true"},"#")],-1),g=e("p",null,"Controls the output properties of the image.",-1),m={id:"adaptive-filter",tabindex:"-1"},f=t("Adaptive filter "),v=t(),w=e("a",{class:"header-anchor",href:"#adaptive-filter","aria-hidden":"true"},"#",-1),k=e("p",null,[t("Use adaptive row filtering for reducing the PNG file size. This only works when the output image is "),e("code",null,"png"),t(".")],-1),b={id:"base64-data-url",tabindex:"-1"},T=t("Base64 (data URL) "),y=t(),j=e("a",{class:"header-anchor",href:"#base64-data-url","aria-hidden":"true"},"#",-1),I=e("p",null,[t("Encodes the image to be used directly in the src= of the "),e("code",null,"<img>"),t("-tag. Use "),e("a",{href:"/?url=images.weserv.nl/lichtenstein.jpg&crop=100,100,720,530&encoding=base64"},"this link"),t(" to see the output result.")],-1),C=e("p",null,[t("More info: "),e("a",{href:"https://github.com/weserv/images/issues/59",target:"_blank",rel:"noopener noreferrer"},"Issue #59 - Return image base64 encoded"),t(".")],-1),x=e("div",{class:"language-"},[e("pre",null,[e("code",null,`//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&crop=100,100,720,530&encoding=base64
`)])],-1),D={id:"cache-control",tabindex:"-1"},q=t("Cache-Control "),F=t(),M=e("a",{class:"header-anchor",href:"#cache-control","aria-hidden":"true"},"#",-1),P=r("",6),A={id:"compression-level",tabindex:"-1"},S=t("Compression level "),N=t(),B=e("a",{class:"header-anchor",href:"#compression-level","aria-hidden":"true"},"#",-1),G=e("p",null,[t("The zlib compression level. Use a value between "),e("code",null,"0"),t(" (no Deflate) and "),e("code",null,"9"),t(" (maximum Deflate). The default value is "),e("code",null,"6"),t(". This only works when the output image is "),e("code",null,"png"),t(".")],-1),V={id:"default-image",tabindex:"-1"},L=t("Default image "),R=t(),U=e("a",{class:"header-anchor",href:"#default-image","aria-hidden":"true"},"#",-1),$=e("p",null,"If there is a problem loading an image, then an error is shown. However, there might be a need where instead of giving a broken image to the user, you want a default image to be delivered.",-1),E=e("p",null,[t("More info: "),e("a",{href:"https://github.com/weserv/images/issues/37",target:"_blank",rel:"noopener noreferrer"},"Issue #37 - Return default image if the image's URL not found"),t(".")],-1),H=e("p",null,[t("The URL must not include a "),e("code",null,"default"),t(" querystring (if it does, it will be ignored).")],-1),Q=e("div",{class:"language-html"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("img")]),t(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("//images.weserv.nl/?url=example.org/noimage.jpg&default=ssl:images.weserv.nl%2F%3Furl%3Dimages.weserv.nl/lichtenstein.jpg%26w%3D300"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),z=e("div",{class:"language-md"},[e("pre",null,[e("code",null,[e("span",{class:"token url"},[e("span",{class:"token operator"},"!"),t("["),e("span",{class:"token content"},"Default image"),t("]("),e("span",{class:"token url"},"https://images.weserv.nl/?url=example.org/noimage.jpg&default=ssl:images.weserv.nl%2F%3Furl%3Dimages.weserv.nl/lichtenstein.jpg%26w%3D300"),t(")")]),t(`
`)])])],-1),O={href:"/?url=example.org/noimage.jpg&default=ssl:images.weserv.nl%2F%3Furl%3Dimages.weserv.nl/lichtenstein.jpg%26w%3D300",target:"_blank"},J=["src"],W={id:"filename",tabindex:"-1"},K=t("Filename "),X=t(),Y=e("a",{class:"header-anchor",href:"#filename","aria-hidden":"true"},"#",-1),Z=e("p",null,[t("To specify the filename returned in the "),e("code",null,"Content-Disposition"),t(" header. The filename must only contain alphanumeric characters.")],-1),ee=e("p",null,[t("More info: "),e("a",{href:"https://github.com/weserv/images/issues/122",target:"_blank",rel:"noopener noreferrer"},"Issue #122 - Specify filename"),t(".")],-1),te={id:"interlace-progressive",tabindex:"-1"},se=t("Interlace / progressive "),ae=t(),ne=e("a",{class:"header-anchor",href:"#interlace-progressive","aria-hidden":"true"},"#",-1),oe=e("p",null,"Adds interlacing to GIF and PNG. JPEGs become progressive.",-1),le=e("p",null,[t("More info: "),e("a",{href:"https://github.com/weserv/images/issues/50",target:"_blank",rel:"noopener noreferrer"},"Issue #50 - Add parameter to use progressive JPEGs"),t(".")],-1),ie=e("div",{class:"language-html"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("img")]),t(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&il"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),re=e("div",{class:"language-md"},[e("pre",null,[e("code",null,[e("span",{class:"token url"},[e("span",{class:"token operator"},"!"),t("["),e("span",{class:"token content"},"Interlace / progressive"),t("]("),e("span",{class:"token url"},"https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&il"),t(")")]),t(`
`)])])],-1),ce={href:"/?url=images.weserv.nl/lichtenstein.jpg&w=300&il",target:"_blank"},de=["src"],ue={id:"number-of-pages",tabindex:"-1"},pe=t("Number of pages "),he=t(),_e=e("a",{class:"header-anchor",href:"#number-of-pages","aria-hidden":"true"},"#",-1),ge=e("p",null,[t("To select the number of pages to render. The default value is "),e("code",null,"1"),t(". Set to "),e("code",null,"-1"),t(' to mean "until the end of the document".')],-1),me=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[e("code",null,"-1"),t(" will be useful if you need to resize an animated WebP or GIF image.")])],-1),fe=e("div",{class:"language-html"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("img")]),t(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("//images.weserv.nl/?url=images.weserv.nl/banana.webp&h=300&output=gif&n=-1"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),ve=e("div",{class:"language-md"},[e("pre",null,[e("code",null,[e("span",{class:"token url"},[e("span",{class:"token operator"},"!"),t("["),e("span",{class:"token content"},"Number of pages"),t("]("),e("span",{class:"token url"},"https://images.weserv.nl/?url=images.weserv.nl/banana.webp&h=300&output=gif&n=-1"),t(")")]),t(`
`)])])],-1),we={href:"/?url=images.weserv.nl/banana.webp&h=300&output=gif&n=-1",target:"_blank"},ke=["src"],be={id:"output",tabindex:"-1"},Te=t("Output "),ye=t(),je=e("a",{class:"header-anchor",href:"#output","aria-hidden":"true"},"#",-1),Ie=r("",2),Ce=e("div",{class:"language-html"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("img")]),t(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&output=webp"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),xe=e("div",{class:"language-md"},[e("pre",null,[e("code",null,[e("span",{class:"token url"},[e("span",{class:"token operator"},"!"),t("["),e("span",{class:"token content"},"Output"),t("]("),e("span",{class:"token url"},"https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&output=webp"),t(")")]),t(`
`)])])],-1),De={href:"/?url=images.weserv.nl/lichtenstein.jpg&w=300&output=webp",target:"_blank"},qe=["src"],Fe={id:"page",tabindex:"-1"},Me=t("Page "),Pe=t(),Ae=e("a",{class:"header-anchor",href:"#page","aria-hidden":"true"},"#",-1),Se=e("p",null,[t("To load a given page (for an PDF, TIFF and multi-size ICO file). The value is numbered from zero. For a multi-resolution image, you can use "),e("code",null,"-1"),t(" to get the largest page and "),e("code",null,"-2"),t(" to get the smallest page.")],-1),Ne={id:"quality",tabindex:"-1"},Be=t("Quality "),Ge=t(),Ve=e("a",{class:"header-anchor",href:"#quality","aria-hidden":"true"},"#",-1),Le=r("",1),Re=e("div",{class:"language-html"},[e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("img")]),t(),e("span",{class:"token attr-name"},"src"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&q=20"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Ue=e("div",{class:"language-md"},[e("pre",null,[e("code",null,[e("span",{class:"token url"},[e("span",{class:"token operator"},"!"),t("["),e("span",{class:"token content"},"Quality"),t("]("),e("span",{class:"token url"},"https://images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&q=20"),t(")")]),t(`
`)])])],-1),$e={href:"/?url=images.weserv.nl/lichtenstein.jpg&w=300&q=20",target:"_blank"},Ee=["src"];function He(l,Qe,ze,Oe,Je,We){const n=c("QueryString"),o=c("CodeGroupItem"),i=c("CodeGroup");return p(),u("div",null,[_,g,e("h2",m,[f,s(n,{field:"af",bool:"true"}),v,w]),k,e("h2",b,[T,s(n,{field:"encoding",value:"base64"}),y,j]),I,C,x,e("h2",D,[q,s(n,{field:"maxage"}),F,M]),P,e("h2",A,[S,s(n,{field:"l"}),N,B]),G,e("h2",V,[L,s(n,{field:"default"}),R,U]),$,E,H,s(i,null,{default:a(()=>[s(o,{title:"HTML",active:""},{default:a(()=>[Q]),_:1}),s(o,{title:"Markdown"},{default:a(()=>[z]),_:1})]),_:1}),e("a",O,[e("img",{src:l.$withBase("/static/lichtenstein.jpg?w=300"),alt:"Default image"},null,8,J)]),e("h2",W,[K,s(n,{field:"filename"}),X,Y]),Z,ee,e("h2",te,[se,s(n,{field:"il",bool:"true"}),ae,ne]),oe,le,s(i,null,{default:a(()=>[s(o,{title:"HTML",active:""},{default:a(()=>[ie]),_:1}),s(o,{title:"Markdown"},{default:a(()=>[re]),_:1})]),_:1}),e("a",ce,[e("img",{src:l.$withBase("/static/lichtenstein.jpg?w=300&il"),alt:"Interlace / progressive"},null,8,de)]),e("h2",ue,[pe,s(n,{field:"n"}),he,_e]),ge,me,s(i,null,{default:a(()=>[s(o,{title:"HTML",active:""},{default:a(()=>[fe]),_:1}),s(o,{title:"Markdown"},{default:a(()=>[ve]),_:1})]),_:1}),e("a",we,[e("img",{src:l.$withBase("/static/banana.webp?h=300&output=gif&n=-1"),alt:"Number of pages"},null,8,ke)]),e("h2",be,[Te,s(n,{field:"output"}),ye,je]),Ie,s(i,null,{default:a(()=>[s(o,{title:"HTML",active:""},{default:a(()=>[Ce]),_:1}),s(o,{title:"Markdown"},{default:a(()=>[xe]),_:1})]),_:1}),e("a",De,[e("img",{src:l.$withBase("/static/lichtenstein.jpg?w=300&output=webp"),alt:"Output"},null,8,qe)]),e("h2",Fe,[Me,s(n,{field:"page"}),Pe,Ae]),Se,e("h2",Ne,[Be,s(n,{field:"q"}),Ge,Ve]),Le,s(i,null,{default:a(()=>[s(o,{title:"HTML",active:""},{default:a(()=>[Re]),_:1}),s(o,{title:"Markdown"},{default:a(()=>[Ue]),_:1})]),_:1}),e("a",$e,[e("img",{src:l.$withBase("/static/lichtenstein.jpg?w=300&q=20"),alt:"Quality"},null,8,Ee)])])}var Ye=d(h,[["render",He]]);export{Xe as __pageData,Ye as default};
