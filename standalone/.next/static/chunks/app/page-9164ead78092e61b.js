(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9537:(e,r,a)=>{Promise.resolve().then(a.bind(a,1786))},1786:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>k});var t=a(7437),s=a(2265);function l(){return(0,t.jsx)("footer",{className:"w-full py-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900",children:(0,t.jsx)("div",{className:"container mx-auto px-4 text-center text-gray-600 dark:text-gray-400",children:(0,t.jsxs)("p",{className:"text-sm",children:["Built by"," ",(0,t.jsx)("a",{href:"#",target:"_blank",rel:"noreferrer",className:"font-medium text-blue-500 dark:text-blue-400 hover:underline",children:"CodeCraft"}),". The source code is available on"," ",(0,t.jsx)("a",{href:"#",target:"_blank",rel:"noreferrer",className:"font-medium text-blue-500 dark:text-blue-400 hover:underline",children:"GitHub"}),"."]})})})}var n=a(1505),o=a(7818),d=a(9354);let i=s.forwardRef((e,r)=>{let{className:a,...s}=e;return(0,t.jsx)("textarea",{className:(0,d.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:r,...s})});i.displayName="Textarea";var c=a(5898);function u(){let{input:e,setInput:r}=(0,c.j)();return(0,t.jsxs)("div",{className:"flex flex-col h-full",children:[(0,t.jsx)("h2",{className:"text-lg font-semibold mb-4",children:"Input"}),(0,t.jsx)(i,{placeholder:"Enter input here...",className:"flex-1 resize-none",value:e,onChange:e=>r(e.target.value)})]})}function x(){let{output:e}=(0,c.j)();return(0,t.jsxs)("div",{className:"flex flex-col h-full",children:[(0,t.jsx)("h2",{className:"text-lg font-semibold mb-4",children:"Output"}),(0,t.jsx)("div",{className:"flex-1 p-4 rounded-md bg-gray-200 dark:bg-gray-700 whitespace-pre-wrap overflow-auto",children:e})]})}var g=a(8094),h=a(7871);function f(e){let{onReset:r}=e;return(0,t.jsxs)(h.fC,{children:[(0,t.jsx)(h.xz,{asChild:!0,children:(0,t.jsx)("button",{className:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100  focus:z-10 focus:ring-2 focus:ring-blue-700  dark:bg-gray-600 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:"Reset"})}),(0,t.jsxs)(h.h_,{children:[(0,t.jsx)(h.aV,{className:"bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0"}),(0,t.jsxs)(h.VY,{className:"data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white dark:bg-gray-800 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none",children:[(0,t.jsx)(h.Dx,{className:"text-lg font-medium text-gray-900 dark:text-white",children:"Are you sure?"}),(0,t.jsx)(h.dk,{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"This action will reset your code to the default snippet. Any unsaved changes will be lost."}),(0,t.jsxs)("div",{className:"mt-4 flex justify-end space-x-2",children:[(0,t.jsx)(h.$j,{asChild:!0,children:(0,t.jsx)("button",{className:"px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",children:"Cancel"})}),(0,t.jsx)(h.aU,{asChild:!0,children:(0,t.jsx)("button",{onClick:r,className:"px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:"Continue"})})]})]})]})]})}var b=a(7356),m=a(4867);function p(){let{language:e,setLanguage:r,handleRun:a,handleReset:l,isRunning:n,isLoadingConfig:o}=(0,c.j)(),[d,i]=(0,s.useState)([]),[u,x]=(0,s.useState)(!0),[h,p]=(0,s.useState)(null);return((0,s.useEffect)(()=>{(async()=>{try{let e=await fetch("".concat("http://localhost:3001","/api/languages"));if(!e.ok)throw Error("Failed to fetch languages");let r=await e.json();if(!r.success)throw Error("API returned unsuccessful response");let a=r.languages.map(e=>({value:e.key,label:e.name}));i(a),x(!1)}catch(e){p(e.message),x(!1)}})()},[]),u||h)?(0,t.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[u?(0,t.jsx)("div",{className:"animate-pulse bg-gray-200 dark:bg-gray-700 h-10 w-40 rounded-md"}):(0,t.jsxs)("div",{className:"text-red-500",children:["Error: ",h]}),(0,t.jsxs)("div",{className:"space-x-2",children:[(0,t.jsxs)("button",{disabled:!0,className:"px-4 py-2 text-sm font-medium text-white bg-green-400 rounded-md opacity-50 cursor-not-allowed",children:[(0,t.jsx)(g.Z,{className:"inline-block mr-2 h-4 w-4"})," Run"]}),(0,t.jsx)(f,{onReset:l})]})]}):(0,t.jsxs)("div",{className:"flex justify-center items-center bg-gray-200 dark:bg-gray-800 space-x-4 p-2",children:[(0,t.jsxs)(b.fC,{value:e,onValueChange:r,children:[(0,t.jsxs)(b.xz,{className:"inline-flex items-center justify-center rounded-md px-3 h-10 gap-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-2 focus:ring-blue-500 transition-all",disabled:o,children:[(0,t.jsx)(b.B4,{placeholder:"Select a language"}),(0,t.jsx)(b.JO,{className:"text-gray-600 dark:text-gray-300",children:(0,t.jsx)(m.v4q,{})})]}),(0,t.jsx)(b.h_,{children:(0,t.jsx)(b.VY,{className:"bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden",position:"popper",sideOffset:5,children:(0,t.jsx)(b.l_,{className:"p-2 max-h-56 overflow-y-auto",children:d.map(e=>(0,t.jsx)(b.ck,{value:e.value,className:"text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md px-3 py-2  transition-colors",children:(0,t.jsx)(b.eT,{children:e.label})},e.value))})})})]}),(0,t.jsxs)("div",{className:"space-x-2",children:[(0,t.jsxs)("button",{onClick:a,disabled:n||o,className:"px-4 py-2 text-sm font-medium text-white ".concat(n||o?"bg-green-400 cursor-not-allowed":"bg-green-500 hover:bg-green-600"," rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"),children:[(0,t.jsx)(g.Z,{className:"inline-block mr-2 h-4 w-4"}),n?"Running...":"Run"]}),(0,t.jsx)(f,{onReset:l})]})]})}let j=()=>(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-background",children:(0,t.jsx)("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"})}),y=(0,o.default)(()=>a.e(108).then(a.bind(a,9108)),{loadableGenerated:{webpack:()=>[9108]},loading:()=>(0,t.jsx)(j,{}),ssr:!1});function v(){let[e,r]=(0,s.useState)(50),[a,l]=(0,s.useState)(50),o=(0,s.useCallback)(e=>{r(e[0])},[]),d=(0,s.useCallback)(e=>{l(e[0])},[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p,{}),(0,t.jsx)("div",{className:"hidden md:block h-full rounded-2xl p-1",children:(0,t.jsxs)(n.eh,{direction:"horizontal",onLayout:o,children:[(0,t.jsx)(n.s_,{defaultSize:e,minSize:20,className:"rounded-2xl",children:(0,t.jsx)("div",{className:"h-full p-4 bg-background text-foreground overflow-auto",children:(0,t.jsx)(y,{})})}),(0,t.jsx)(n.OT,{className:"w-2 dark:bg-muted dark:hover:bg-muted-foreground bg-gray-200 hover:bg-gray-400 transition-colors"}),(0,t.jsx)(n.s_,{defaultSize:100-e,minSize:20,children:(0,t.jsxs)(n.eh,{direction:"vertical",onLayout:d,children:[(0,t.jsx)(n.s_,{defaultSize:a,minSize:20,className:"rounded-2xl",children:(0,t.jsx)("div",{className:"h-full p-4 bg-background text-foreground overflow-auto",children:(0,t.jsx)(u,{})})}),(0,t.jsx)(n.OT,{className:"h-2 dark:bg-muted dark:hover:bg-muted-foreground bg-gray-200 hover:bg-gray-400 transition-colors"}),(0,t.jsx)(n.s_,{defaultSize:100-a,minSize:20,className:"rounded-2xl",children:(0,t.jsx)("div",{className:"h-full p-4 bg-background text-foreground overflow-auto",children:(0,t.jsx)(x,{})})})]})})]})}),(0,t.jsx)("div",{className:"md:hidden h-full",children:(0,t.jsxs)("div",{className:"flex flex-col gap-4 p-1",children:[(0,t.jsx)("div",{className:"h-[300px] bg-background text-foreground overflow-auto rounded-lg border p-2",children:(0,t.jsx)(y,{})}),(0,t.jsx)("div",{className:"h-[200px] bg-background text-foreground overflow-auto rounded-lg border p-2",children:(0,t.jsx)(u,{})}),(0,t.jsx)("div",{className:"h-[200px] bg-background text-foreground overflow-auto rounded-lg border p-2",children:(0,t.jsx)(x,{})})]})})]})}function k(){return(0,t.jsx)(c.K,{children:(0,t.jsx)(s.Suspense,{fallback:(0,t.jsx)(j,{}),children:(0,t.jsxs)("main",{className:"flex flex-col min-h-full bg-gray-200 dark:bg-gray-800",children:[(0,t.jsx)(v,{}),(0,t.jsx)(l,{})]})})})}},5898:(e,r,a)=>{"use strict";a.d(r,{K:()=>n,j:()=>o});var t=a(7437),s=a(2265);let l=(0,s.createContext)();function n(e){let{children:r}=e,[a,n]=(0,s.useState)(""),[o,d]=(0,s.useState)(""),[i,c]=(0,s.useState)(""),[u,x]=(0,s.useState)(!1),[g,h]=(0,s.useState)("javascript"),[f,b]=(0,s.useState)({}),[m,p]=(0,s.useState)(!1),j=(0,s.useCallback)(async e=>{if(f[e]){n(f[e].safeConfig.defaultBoilerplate);return}p(!0);try{let r=await fetch("".concat("http://localhost:3001","/api/languages/").concat(e));if(!r.ok)throw Error("Failed to fetch ".concat(e," configuration"));let a=await r.json();if(!a.success)throw Error("API error for ".concat(e," configuration"));b(r=>({...r,[e]:a})),n(a.safeConfig.defaultBoilerplate)}catch(r){console.error("Error fetching language config:",r),c("Error loading ".concat(e," configuration: ").concat(r.message))}finally{p(!1)}},[]);(0,s.useEffect)(()=>{j(g)},[g,j]);let y=(0,s.useCallback)(async()=>{x(!0);try{let e=await fetch("".concat("http://localhost:3001","/api/execute"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:g,code:a,input:o})}),r=await e.json();if(console.log(r),!r.success)throw Error(r.error||"Execution failed");c(r.output)}catch(e){c("Error: ".concat(e.message))}finally{x(!1)}},[g,a,o]),v=(0,s.useCallback)(()=>{console.log(f[g]),f[g]&&n(f[g].safeConfig.boilerplateCode),d(""),c("")},[g,f]);return(0,t.jsx)(l.Provider,{value:{code:a,setCode:n,input:o,setInput:d,output:i,setOutput:c,language:g,setLanguage:h,isRunning:u,isLoadingConfig:m,handleRun:y,handleReset:v},children:r})}let o=()=>{let e=(0,s.useContext)(l);if(!e)throw Error("useEditor must be used within an EditorProvider");return e}},9354:(e,r,a)=>{"use strict";a.d(r,{cn:()=>l});var t=a(4839),s=a(6164);function l(){for(var e=arguments.length,r=Array(e),a=0;a<e;a++)r[a]=arguments[a];return(0,s.m6)((0,t.W)(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[310,794,336,130,215,744],()=>r(9537)),_N_E=e.O()}]);