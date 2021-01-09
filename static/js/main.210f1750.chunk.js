(this.webpackJsonpdevtools=this.webpackJsonpdevtools||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(21),i=n.n(s),o=(n(30),n(3)),l=n(13),u=n(2),j=(n(31),n(24));var d=function(e,t){var n=t.setError,a=t.clearError;return function(){var t;try{t=e.apply(void 0,arguments),a()}catch(c){n(c.message)}return t}},b=function(e){var t=function(e){return Object(j.a)(Array(e)).map((function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}))},n=Object(c.useState)(25),r=Object(o.a)(n,2),s=r[0],i=r[1],l=Object(c.useState)(t(s).join("\n")+"\n"),u=Object(o.a)(l,2),b=u[0],x=u[1],h=d((function(e){var t=parseInt(e.target.value);isNaN(t)&&(t=1),i(t)}),e);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("textarea",{autoFocus:!0,onFocus:function(e){return e.target.select()},value:b,onChange:function(e){return x(e.target.value)},placeholder:"Click Generate UUIDs","data-testid":"textareadTestId"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{"data-testid":"inputTestId",type:"number",value:s,min:"1",max:"10000",onChange:h}),Object(a.jsx)("button",{onClick:function(){x(t(s).join("\n")+"\n")},children:"Generate UUIDs"})]})]})},x=function(e){var t=Object(c.useState)("1234 abcd #"),n=Object(o.a)(t,2),r=n[0],s=n[1],i=d((function(e){s(e(r))}),e);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("textarea",{autoFocus:!0,onFocus:function(e){return e.target.select()},value:r,onChange:function(e){return s(e.target.value)},placeholder:"Enter any text to encode/decode","data-testid":"textareadTestId"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){i(encodeURIComponent)},children:"Encode URL"}),Object(a.jsx)("button",{onClick:function(){i(decodeURIComponent)},children:"Decode URL"})]})]})},h=function(e){return JSON.stringify(JSON.parse(e),null,2)},m=function(e){return JSON.stringify(JSON.parse(e))},O=function(e){return JSON.parse(e),e.replace(/[\\]/g,"\\\\").replace(/[\/]/g,"\\/").replace(/[\b]/g,"\\b").replace(/[\f]/g,"\\f").replace(/[\n]/g,"\\n").replace(/[\r]/g,"\\r").replace(/[\t]/g,"\\t").replace(/[\"]/g,'\\"')},p=function(e){var t=e.replace(/\\/g,"\\").replace(/\//g,"/").replace(/\\b/g,"\b").replace(/\\f/g,"\f").replace(/\\n/g,"\n").replace(/\\r/g,"\r").replace(/\\t/g,"\t").replace(/\\"/g,'"');return JSON.stringify(JSON.parse(t))},f=function(e){var t=Object(c.useState)(JSON.stringify({abc:123,def:456,ghi:{jkl:789}},null,2)),n=Object(o.a)(t,2),r=n[0],s=n[1],i=d((function(e){s(e(r))}),e);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("textarea",{autoFocus:!0,onFocus:function(e){return e.target.select()},value:r,onChange:function(e){return s(e.target.value)},placeholder:"Enter a JSON string and click a button","data-testid":"textareadTestId"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){i(h)},children:"Prettify"}),Object(a.jsx)("button",{onClick:function(){i(m)},children:"Minify"}),Object(a.jsx)("button",{onClick:function(){i(O)},children:"Escape"}),Object(a.jsx)("button",{onClick:function(){i(p)},children:"Unescape"})]})]})},g=n(16),v=function(e){var t=Object(c.useState)("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"),n=Object(o.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(""),l=Object(o.a)(i,2),u=l[0],j=l[1],b=Object(c.useState)(""),x=Object(o.a)(b,2),h=x[0],m=x[1],O=d((function(e){m(JSON.stringify(Object(g.a)(e),null,2)),j(JSON.stringify(Object(g.a)(e,{header:!0}),null,2))}),e);return Object(c.useEffect)((function(){O(r)}),[O,r]),Object(a.jsxs)("div",{className:"jwtTool",children:[Object(a.jsx)("label",{children:"Token"}),Object(a.jsx)("textarea",{autoFocus:!0,className:"smallerTextarea",onFocus:function(e){return e.target.select()},value:r,onChange:function(e){return s(e.target.value)},placeholder:"Enter a JWT token to decode"}),Object(a.jsx)("label",{children:"Header"}),Object(a.jsx)("textarea",{className:"smallerTextarea",onFocus:function(e){return e.target.select()},value:u,onChange:function(e){return j(e.target.value)},placeholder:"The decoded header goes here"}),Object(a.jsx)("label",{children:"Body"}),Object(a.jsx)("textarea",{className:"mediumTextarea",onFocus:function(e){return e.target.select()},value:h,onChange:function(e){return m(e.target.value)},placeholder:"The decoded body goes here"})]})},y=n(17),C=function(e){var t=Object(c.useState)("1234abcd"),n=Object(o.a)(t,2),r=n[0],s=n[1],i=d((function(){s(Object(y.fromByteArray)((new TextEncoder).encode(r)))}),e),l=d((function(){!function(e){if(!/^[a-zA-Z0-9+/_-]*={0,2}$/.test(e))throw new Error("Invalid base64 string, it must match the pattern /^[a-zA-Z0-9+/_-]*={0,2}$/")}(r),s(new TextDecoder("utf-8").decode(Object(y.toByteArray)(r)))}),e);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("textarea",{autoFocus:!0,onFocus:function(e){return e.target.select()},value:r,onChange:function(e){return s(e.target.value)},placeholder:"Enter any text to encode/decode","data-testid":"textareadTestId"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:i,children:"Base64 Encode"}),Object(a.jsx)("button",{onClick:l,children:"Base64 Decode"})]})]})},F=n.p+"static/media/notthedroids.6cb9be78.gif",N=n(8),S=n(22),I=n.n(S),T=N.Duration.fromObject({years:0,months:0,weeks:0,days:0,hours:0,minutes:0,seconds:300,milliseconds:0}),w=function(e,t){return{values:e,formattedString:e.toFormat(t),humanized:I()(e.as("milliseconds"))}},k=function(e,t){return{dateTime:e,unixTimestamp:e.toSeconds(),isoTimestamp:e.toISO(),RFC2822:e.toRFC2822(),formattedString:e.toFormat(t)}},R=[{path:"/base64",title:"Base64",description:"encode, decode",Component:C},{path:"/json",title:"JSON",description:"prettify, minify, escape, unescape",Component:f},{path:"/jwt",title:"JWT",description:"decode",Component:v},{path:"/time",title:"Time",description:"timestamps, durations",Component:function(e){var t=Object(c.useState)("yyyy-MM-dd HH:mm:ss"),n=Object(o.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)("h:mm:ss"),l=Object(o.a)(i,2),u=l[0],j=l[1],b=Object(c.useState)({dateTime:N.DateTime.utc(),unixTimestamp:0,isoTimestamp:"",RFC2822:"",formattedString:""}),x=Object(o.a)(b,2),h=x[0],m=x[1],O=Object(c.useState)({values:T,formattedString:"",humanized:""}),p=Object(o.a)(O,2),f=p[0],g=p[1];Object(c.useEffect)((function(){m(k(N.DateTime.utc(),r)),g(w(T,u))}),[u,r]);var v=d((function(e){if(!e.isValid)throw new Error(e.invalidExplanation);m(k(e,r))}),e),y=d((function(e){f.values.set(e),g(w(f.values,u))}),e),C=function(e){return e.target.select()};return Object(a.jsxs)("div",{className:"timeTool",children:[Object(a.jsxs)("span",{className:"divider",children:["Time",Object(a.jsx)("button",{onClick:function(){m(k(N.DateTime.utc(),r))},children:"Now"})]}),Object(a.jsxs)("div",{className:"timeRow",children:[Object(a.jsx)("label",{children:"Unix (seconds)"}),Object(a.jsx)("input",{autoFocus:!0,type:"text",min:"0",max:999999999999,value:h.unixTimestamp,onChange:function(e){v(N.DateTime.fromSeconds(parseInt(e.target.value)))}})]}),Object(a.jsxs)("div",{className:"timeRow",children:[Object(a.jsx)("label",{children:"Format"}),Object(a.jsx)("a",{href:"https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens",target:"_blank",rel:"noreferrer",children:"?"}),Object(a.jsx)("input",{type:"text",value:r,onChange:function(e){return s(e.target.value)}})]}),Object(a.jsxs)("div",{className:"timeRow",children:[Object(a.jsx)("label",{children:"Formatted String"}),Object(a.jsx)("input",{type:"text",value:h.formattedString,onChange:function(e){v(N.DateTime.fromFormat(e.target.value,r))},onFocus:C})]}),Object(a.jsxs)("div",{className:"timeRow",children:[Object(a.jsx)("label",{children:"ISO 8601"}),Object(a.jsx)("input",{type:"text",value:h.isoTimestamp,onChange:function(e){v(N.DateTime.fromISO(e.target.value))},onFocus:C})]}),Object(a.jsxs)("div",{className:"timeRow",children:[Object(a.jsx)("label",{children:"RFC2822"}),Object(a.jsx)("input",{type:"text",value:h.RFC2822,onChange:function(e){v(N.DateTime.fromRFC2822(e.target.value))},onFocus:C})]}),Object(a.jsx)("span",{className:"divider",children:"Duration"}),Object(a.jsxs)("div",{className:"timeRow",children:[Object(a.jsx)("label",{children:"Years"}),Object(a.jsx)("input",{type:"number",value:f.values.years,onChange:function(e){y({years:parseInt(e.target.value)})},onFocus:C})]}),Object(a.jsxs)("div",{className:"timeRow",children:[Object(a.jsx)("label",{children:"Months"}),Object(a.jsx)("input",{type:"number",value:f.values.months,onChange:function(e){y({months:parseInt(e.target.value)})},onFocus:C})]}),Object(a.jsxs)("div",{className:"timeRow",children:[Object(a.jsx)("label",{children:"Weeks"}),Object(a.jsx)("input",{type:"number",value:f.values.weeks,onChange:function(e){y({weeks:parseInt(e.target.value)})},onFocus:C})]}),Object(a.jsxs)("div",{className:"timeRow",children:[Object(a.jsx)("label",{children:"Days"}),Object(a.jsx)("input",{type:"number",value:f.values.days,onChange:function(e){y({days:parseInt(e.target.value)})},onFocus:C})]}),Object(a.jsxs)("div",{className:"timeRow",children:[Object(a.jsx)("label",{children:"Hours"}),Object(a.jsx)("input",{type:"number",value:f.values.hours,onChange:function(e){y({hours:parseInt(e.target.value)})},onFocus:C})]}),Object(a.jsxs)("div",{className:"timeRow",children:[Object(a.jsx)("label",{children:"Minutes"}),Object(a.jsx)("input",{type:"number",value:f.values.minutes,onChange:function(e){y({minutes:parseInt(e.target.value)})},onFocus:C})]}),Object(a.jsxs)("div",{className:"timeRow",children:[Object(a.jsx)("label",{children:"Seconds"}),Object(a.jsx)("input",{type:"number",value:f.values.seconds,onChange:function(e){y({seconds:parseInt(e.target.value)})},onFocus:C})]}),Object(a.jsxs)("div",{className:"timeRow",children:[Object(a.jsx)("label",{children:"Format"}),Object(a.jsx)("a",{href:"https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens",target:"_blank",rel:"noreferrer",children:"?"}),Object(a.jsx)("input",{type:"text",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(a.jsxs)("div",{className:"timeRow",children:[Object(a.jsx)("label",{children:"Formatted String"}),Object(a.jsx)("input",{type:"text",defaultValue:f.formattedString,onFocus:C})]}),Object(a.jsx)("label",{className:"divider",children:"Humanized"}),Object(a.jsx)("textarea",{id:"inputHumanized",defaultValue:f.humanized,onFocus:function(e){return e.target.select()}})]})}},{path:"/urls",title:"URLs",description:"encode, decode",Component:x},{path:"/uuids",title:"UUIDs",description:"generate random UUIDs",Component:b}];R.unshift({path:"/",title:"Home",description:"",Component:function(){var e=R.map((function(e,t){var n=e.path,c=e.title,r=e.description;return"/"===n?null:Object(a.jsx)("div",{className:"toolCard",children:Object(a.jsxs)(l.b,{to:n,children:[c,": ",r]})},t)}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Here are some tools that could come in handy..."}),e]})}});var J=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{src:F,alt:"Page not found"}),Object(a.jsx)("h1",{children:"This is not the page you are looking for (404)."})]})},D=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=R.map((function(e,t){var n=e.path,c=e.Component;return Object(a.jsx)(u.a,{exact:!0,path:n,children:Object(a.jsx)(c,{setError:r,clearError:function(){return r("")}})},t)})),i=R.map((function(e,t){var n=e.path,c=e.title;return Object(a.jsx)("span",{children:Object(a.jsx)(l.b,{to:n,children:c})},t)}));return Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)("nav",{children:i})}),Object(a.jsxs)(u.c,{children:[s,Object(a.jsx)(u.a,{component:J})]}),Object(a.jsx)("span",{className:"error",children:n}),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{id:"footer",children:[Object(a.jsx)("span",{children:"No ads, no tracking, ever."}),Object(a.jsx)("a",{href:"https://github.com/fjoubert/devtools",children:"View on GitHub"})]})})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root")),E()}},[[37,1,2]]]);
//# sourceMappingURL=main.210f1750.chunk.js.map