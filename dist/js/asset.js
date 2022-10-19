(()=>{var e,t={552:(e,t,o)=>{"use strict";const n=Vue;var a={class:"bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden",style:{width:"460px"}},r=["innerHTML"],l={class:"ml-auto"};var s=o(640),c=o.n(s);const i={name:"ResponseDynamicModal",props:["data"],methods:{handleClose:function(){this.$emit("close")},handleCopy:function(e){c()(e,{})&&Nova.success(this.data.copiedMessage||"Copied!")}}};const d=(0,o(744).Z)(i,[["render",function(e,t,o,s,c,i){var d=(0,n.resolveComponent)("ModalHeader"),u=(0,n.resolveComponent)("ModalContent"),p=(0,n.resolveComponent)("OutlineButton"),f=(0,n.resolveComponent)("DefaultButton"),m=(0,n.resolveComponent)("ModalFooter"),v=(0,n.resolveComponent)("Modal");return(0,n.openBlock)(),(0,n.createBlock)(v,{"data-testid":"nova-response-dynamic-modal",show:!0,role:"alertdialog",size:"sm",onCloseViaEscape:i.handleClose},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",a,[(0,n.createVNode)(d,{textContent:(0,n.toDisplayString)(o.data.title)},null,8,["textContent"]),(0,n.createVNode)(u,null,{default:(0,n.withCtx)((function(){return[o.data.message?((0,n.openBlock)(),(0,n.createElementBlock)("p",{key:0,class:"text-80 px-8 my-8",innerHTML:o.data.message},null,8,r)):(0,n.createCommentVNode)("",!0)]})),_:1}),(0,n.createVNode)(m,null,{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",l,[o.data.copy?((0,n.openBlock)(),(0,n.createBlock)(p,{key:0,onClick:t[0]||(t[0]=(0,n.withModifiers)((function(e){return i.handleCopy(o.data.copy)}),["prevent"])),class:"mr-3"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(o.data.buttonCopyText||"Copy to clipboard"),1)]})),_:1})):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(f,{onClick:(0,n.withModifiers)(i.handleClose,["prevent"])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(o.data.buttonText||"OK"),1)]})),_:1},8,["onClick"])])]})),_:1})])]})),_:1},8,["onCloseViaEscape"])}]]);Nova.booting((function(e){e.component("response-dynamic-modal",d)}))},640:(e,t,o)=>{"use strict";var n=o(742),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,r,l,s,c,i,d=!1;t||(t={}),o=t.debug||!1;try{if(l=n(),s=document.createRange(),c=document.getSelection(),(i=document.createElement("span")).textContent=e,i.ariaHidden="true",i.style.all="unset",i.style.position="fixed",i.style.top=0,i.style.clip="rect(0, 0, 0, 0)",i.style.whiteSpace="pre",i.style.webkitUserSelect="text",i.style.MozUserSelect="text",i.style.msUserSelect="text",i.style.userSelect="text",i.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),void 0===n.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=a[t.format]||a.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(i),s.selectNodeContents(i),c.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(n){o&&console.error("unable to copy using execCommand: ",n),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(n){o&&console.error("unable to copy using clipboardData: ",n),o&&console.error("falling back to prompt"),r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(r,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(s):c.removeAllRanges()),i&&document.body.removeChild(i),l()}return d}},70:()=>{},742:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},744:(e,t)=>{"use strict";t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,n]of t)o[e]=n;return o}}},o={};function n(e){var a=o[e];if(void 0!==a)return a.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,o,a,r)=>{if(!o){var l=1/0;for(d=0;d<e.length;d++){for(var[o,a,r]=e[d],s=!0,c=0;c<o.length;c++)(!1&r||l>=r)&&Object.keys(n.O).every((e=>n.O[e](o[c])))?o.splice(c--,1):(s=!1,r<l&&(l=r));if(s){e.splice(d--,1);var i=a();void 0!==i&&(t=i)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,a,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={758:0,825:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var a,r,[l,s,c]=o,i=0;if(l.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var d=c(n)}for(t&&t(o);i<l.length;i++)r=l[i],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},o=self.webpackChunkyaroslawww_nova_response_dynamic_modal=self.webpackChunkyaroslawww_nova_response_dynamic_modal||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),n.O(void 0,[825],(()=>n(552)));var a=n.O(void 0,[825],(()=>n(70)));a=n.O(a)})();