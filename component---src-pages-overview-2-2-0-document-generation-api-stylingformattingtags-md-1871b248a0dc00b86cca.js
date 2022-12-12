"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9606],{70957:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return o},default:function(){return l}});var i=a(87462),n=a(63366),s=(a(15007),a(64983)),d=a(91515),p=["components"],o={},c={_frontmatter:o},r=d.Z;function l(t){var e=t.components,a=(0,n.Z)(t,p);return(0,s.mdx)(r,(0,i.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"apply-styling-and-formatting"},"Apply styling and formatting"),(0,s.mdx)("p",null,"Apply styling and formatting in the generated output document using the HTML based constructs."),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Add line breaks in the text.")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Set color and font size of a text.")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Set text as bold and italic.")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Underline text.")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Create ",(0,s.mdx)("a",{parentName:"p",href:"../document-generation-api/hyperlink.md#how-it-works"},"Hyperlinks"),"."))),(0,s.mdx)("h2",{id:"how-it-works"},"How It Works"),(0,s.mdx)("p",null,"Basic styling for the text tags can be provided from the input json data."),(0,s.mdx)("p",null,"JSON representation of the input data:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "LMS Certificate": {\n                "Employee Name": "Sarah Rose",\n                "Certification Program": "Certificate in Life and Thoughts of <span style=\\"font-weight: bold \\">Dr. BR Ambedkar </span> ",\n                "Completion Date": "01/03/2021"\n        }\n}\n')),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.41509433962266%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/ebf14332eaf489bde364e29c335d62fb/dda86/consolidated_styling_formatting.webp 265w","/pdfservices-api-documentation/static/ebf14332eaf489bde364e29c335d62fb/010e6/consolidated_styling_formatting.webp 530w","/pdfservices-api-documentation/static/ebf14332eaf489bde364e29c335d62fb/668f0/consolidated_styling_formatting.webp 1060w","/pdfservices-api-documentation/static/ebf14332eaf489bde364e29c335d62fb/89d57/consolidated_styling_formatting.webp 1590w","/pdfservices-api-documentation/static/ebf14332eaf489bde364e29c335d62fb/094b8/consolidated_styling_formatting.webp 2120w","/pdfservices-api-documentation/static/ebf14332eaf489bde364e29c335d62fb/91fcf/consolidated_styling_formatting.webp 2590w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/ebf14332eaf489bde364e29c335d62fb/28773/consolidated_styling_formatting.png 265w","/pdfservices-api-documentation/static/ebf14332eaf489bde364e29c335d62fb/a0177/consolidated_styling_formatting.png 530w","/pdfservices-api-documentation/static/ebf14332eaf489bde364e29c335d62fb/ea60f/consolidated_styling_formatting.png 1060w","/pdfservices-api-documentation/static/ebf14332eaf489bde364e29c335d62fb/684d5/consolidated_styling_formatting.png 1590w","/pdfservices-api-documentation/static/ebf14332eaf489bde364e29c335d62fb/5e85f/consolidated_styling_formatting.png 2120w","/pdfservices-api-documentation/static/ebf14332eaf489bde364e29c335d62fb/20dd7/consolidated_styling_formatting.png 2590w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/ebf14332eaf489bde364e29c335d62fb/ea60f/consolidated_styling_formatting.png",alt:"Sending text styling constructs, provide styling for the output document in json file. Adobe Document Generation API analyses the json data and inserts styled text in output documents",title:"Sending text styling constructs, provide styling for the output document in json file. Adobe Document Generation API analyses the json data and inserts styled text in output documents",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h2",{id:"styling-and-formatting-rules"},"Styling and Formatting rules"),(0,s.mdx)("p",null,"Styling for the text tag can be provided using the json data through the HTML based constructs. The constructs follows the additional rules as listed below :"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"HTML tags supported are <span",">",", nested span, <br",">"," (new line), <b",">"," (bold), <strong",">"," (strong), <em",">"," (emphasis), <i",">"," (italic), <u",">"," (underline).")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Either use Inline custom css inside the span tag to style the data or use basic styling tags such as <b",">"," (bold), <i",">"," (italic) and <u",">"," (underline).")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Styling precedence works as per the general convention of (local  - > global) scope for nested HTML span.")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Any HTML tags which are not supported will be ignored."))),(0,s.mdx)("h2",{id:"inline-styling-attributes-supported"},"Inline styling attributes supported"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"font-size : xpt ;  x=dynamic positive integer, 1pt =1/72 inch ( point (pt) is the only supported unit for font size.)")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"font-weight : bold;")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"font-style : italic;")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"text-decoration : underline;")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"color : ff6347;"))),(0,s.mdx)("p",null,"JSON representation of the input data:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "Notes Section": "Has the Board of directors established a basic policy <span style=\\"font-size: 12pt;\\">regarding legal compliance<span style=\\"font-weight: bold; font-style: italic;\\"> (hereinafter referred to as the Legal Compliance policy) </span></span><a href=\\"http://www.samplewebsite.com/\\">Board</a>in accordance to the institution\'s <span style=\\"text-decoration : underline; color:ff6347;\\">corporate management policy</span> <span style=\\"color: red;\\">and disseminated it throughout the institution</span>"\n}\n')),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.943396226415093%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/fd001a5f40f64a99799d0dd8c4bbea78/dda86/styling_attributes_sample.webp 265w","/pdfservices-api-documentation/static/fd001a5f40f64a99799d0dd8c4bbea78/010e6/styling_attributes_sample.webp 530w","/pdfservices-api-documentation/static/fd001a5f40f64a99799d0dd8c4bbea78/668f0/styling_attributes_sample.webp 1060w","/pdfservices-api-documentation/static/fd001a5f40f64a99799d0dd8c4bbea78/89d57/styling_attributes_sample.webp 1590w","/pdfservices-api-documentation/static/fd001a5f40f64a99799d0dd8c4bbea78/3363e/styling_attributes_sample.webp 1632w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/fd001a5f40f64a99799d0dd8c4bbea78/28773/styling_attributes_sample.png 265w","/pdfservices-api-documentation/static/fd001a5f40f64a99799d0dd8c4bbea78/a0177/styling_attributes_sample.png 530w","/pdfservices-api-documentation/static/fd001a5f40f64a99799d0dd8c4bbea78/ea60f/styling_attributes_sample.png 1060w","/pdfservices-api-documentation/static/fd001a5f40f64a99799d0dd8c4bbea78/684d5/styling_attributes_sample.png 1590w","/pdfservices-api-documentation/static/fd001a5f40f64a99799d0dd8c4bbea78/c7b1b/styling_attributes_sample.png 1632w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/fd001a5f40f64a99799d0dd8c4bbea78/ea60f/styling_attributes_sample.png",alt:"Styling Tags Sample with style for font-size, font-weight and font-style attribute added to span tag",title:"Styling Tags Sample with style for font-size, font-weight and font-style attribute added to span tag",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"15.09433962264151%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/5ff0dbc284ff7c2de0fd71e34614f88e/dda86/styling_attributes1.webp 265w","/pdfservices-api-documentation/static/5ff0dbc284ff7c2de0fd71e34614f88e/010e6/styling_attributes1.webp 530w","/pdfservices-api-documentation/static/5ff0dbc284ff7c2de0fd71e34614f88e/668f0/styling_attributes1.webp 1060w","/pdfservices-api-documentation/static/5ff0dbc284ff7c2de0fd71e34614f88e/89d57/styling_attributes1.webp 1590w","/pdfservices-api-documentation/static/5ff0dbc284ff7c2de0fd71e34614f88e/a713d/styling_attributes1.webp 1622w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/5ff0dbc284ff7c2de0fd71e34614f88e/28773/styling_attributes1.png 265w","/pdfservices-api-documentation/static/5ff0dbc284ff7c2de0fd71e34614f88e/a0177/styling_attributes1.png 530w","/pdfservices-api-documentation/static/5ff0dbc284ff7c2de0fd71e34614f88e/ea60f/styling_attributes1.png 1060w","/pdfservices-api-documentation/static/5ff0dbc284ff7c2de0fd71e34614f88e/684d5/styling_attributes1.png 1590w","/pdfservices-api-documentation/static/5ff0dbc284ff7c2de0fd71e34614f88e/79f3a/styling_attributes1.png 1622w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/5ff0dbc284ff7c2de0fd71e34614f88e/ea60f/styling_attributes1.png",alt:"Styling Tags output when style for font-size, font-weight and font-style attribute was added to span tag",title:"Styling Tags output when style for font-size, font-weight and font-style attribute was added to span tag",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h2",{id:"tags-supported"},"Tags Supported"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"<span",">")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"<a",">"," (anchor)")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"<br",">"," (new line)")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"<b",">"," (bold)")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"<strong",">"," (strong)")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"<em",">"," (emphasis)")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"<i",">"," (italic)")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"<u",">"," (underline)"))),(0,s.mdx)("p",null,"JSON representation of the input data:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "Notes Section": "Has the Board of directors established a basic policy <span style=\\"font-size: 12pt;\\">regarding legal compliance <b><i>(hereinafter referred to as the Legal Compliance policy)</i></b><a href=\\"http://www.samplewebsite.com/\\">Board</a> in accordance to the institution\'s <br><u>corporate management policy</u> and disseminated it throughout the institution"\n}\n')),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.32075471698113%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/c47e6f1b80a4dbc873ee9a326348030b/dda86/styling_tags_sample.webp 265w","/pdfservices-api-documentation/static/c47e6f1b80a4dbc873ee9a326348030b/010e6/styling_tags_sample.webp 530w","/pdfservices-api-documentation/static/c47e6f1b80a4dbc873ee9a326348030b/668f0/styling_tags_sample.webp 1060w","/pdfservices-api-documentation/static/c47e6f1b80a4dbc873ee9a326348030b/d1d4a/styling_tags_sample.webp 1478w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/c47e6f1b80a4dbc873ee9a326348030b/28773/styling_tags_sample.png 265w","/pdfservices-api-documentation/static/c47e6f1b80a4dbc873ee9a326348030b/a0177/styling_tags_sample.png 530w","/pdfservices-api-documentation/static/c47e6f1b80a4dbc873ee9a326348030b/ea60f/styling_tags_sample.png 1060w","/pdfservices-api-documentation/static/c47e6f1b80a4dbc873ee9a326348030b/02a0d/styling_tags_sample.png 1478w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/c47e6f1b80a4dbc873ee9a326348030b/ea60f/styling_tags_sample.png",alt:"Styling Tags Sample with style for font-size attribute added to span tag",title:"Styling Tags Sample with style for font-size attribute added to span tag",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"16.22641509433962%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/f3214d93893904d7072c16c12a69a13d/dda86/styling_tags1.webp 265w","/pdfservices-api-documentation/static/f3214d93893904d7072c16c12a69a13d/010e6/styling_tags1.webp 530w","/pdfservices-api-documentation/static/f3214d93893904d7072c16c12a69a13d/668f0/styling_tags1.webp 1060w","/pdfservices-api-documentation/static/f3214d93893904d7072c16c12a69a13d/89d57/styling_tags1.webp 1590w","/pdfservices-api-documentation/static/f3214d93893904d7072c16c12a69a13d/64296/styling_tags1.webp 1600w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/pdfservices-api-documentation/static/f3214d93893904d7072c16c12a69a13d/28773/styling_tags1.png 265w","/pdfservices-api-documentation/static/f3214d93893904d7072c16c12a69a13d/a0177/styling_tags1.png 530w","/pdfservices-api-documentation/static/f3214d93893904d7072c16c12a69a13d/ea60f/styling_tags1.png 1060w","/pdfservices-api-documentation/static/f3214d93893904d7072c16c12a69a13d/684d5/styling_tags1.png 1590w","/pdfservices-api-documentation/static/f3214d93893904d7072c16c12a69a13d/42cbc/styling_tags1.png 1600w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/pdfservices-api-documentation/static/f3214d93893904d7072c16c12a69a13d/ea60f/styling_tags1.png",alt:"Styling Tags output when style for font-size attribute was added to span tag",title:"Styling Tags output when style for font-size attribute was added to span tag",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-2-2-0-document-generation-api-stylingformattingtags-md-1871b248a0dc00b86cca.js.map