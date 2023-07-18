"use strict";(self.webpackChunkto_do_app=self.webpackChunkto_do_app||[]).push([[826],{424:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(81),r=n.n(o),s=n(645),a=n.n(s)()(r());a.push([t.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #ece4e4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: sans-serif;\n}\n\nli {\n  list-style: none;\n}\n\n.title-box,\n.input-box,\n.task-container {\n  padding: 15px;\n  border: 1px solid rgb(205 205 205);\n  background-color: #fff;\n  gap: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.input {\n  font-style: italic;\n  border: none;\n  padding: 15px;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  outline: none;\n}\n\n.material-icons {\n  cursor: pointer;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  min-width: 50vw;\n  height: auto;\n  padding: 10px;\n  border: 1px solid rgb(205 205 205);\n}\n\n.description {\n  outline: none;\n}\n\n.to-do-list {\n  display: flex;\n  flex-direction: column;\n}\n\n.task {\n  display: flex;\n  gap: 15px;\n}\n\n.clear-btn {\n  width: 100%;\n  padding: 20px;\n  font-size: 1rem;\n  background-color: #e9e7e7;\n  border: 1px solid rgb(205 205 205);\n  color: rgb(97, 95, 95);\n  cursor: pointer;\n}\n",""]);const i=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,s){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(a[d]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);o&&a[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var s={},a=[],i=0;i<t.length;i++){var d=t[i],c=o.base?d[0]+o.base:d[0],l=s[c]||0,u="".concat(c," ").concat(l);s[c]=l+1;var p=n(u),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var f=r(h,o);o.byIndex=i,e.splice(i,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var s=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<s.length;a++){var i=n(s[a]);e[i].references--}for(var d=o(t,r),c=0;c<s.length;c++){var l=n(s[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}s=d}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},336:(t,e,n)=>{var o=n(379),r=n.n(o),s=n(795),a=n.n(s),i=n(569),d=n.n(i),c=n(565),l=n.n(c),u=n(216),p=n.n(u),h=n(589),f=n.n(h),m=n(424),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=d().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),r()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const y=new class{constructor(){this.inputField=document.getElementById("input"),this.returnButton=document.getElementById("return-btn"),this.todoTask=JSON.parse(localStorage.getItem("tasks"))||[],this.todoList=document.getElementById("to-do-list"),this.render(),this.AddTaskPressEnter(),this.AddTaskPressButton(),this.DeleteTaskButton()}DeleteTaskButton(){this.todoList.addEventListener("mousedown",(t=>{t.target.closest(".trash-icon")&&this.deleteTask(t.target.dataset.task)}))}AddTaskPressButton(){this.returnButton.addEventListener("click",(t=>{this.addTask(this.inputField.value),this.inputField.value="",t.preventDefault()}))}AddTaskPressEnter(){this.inputField.addEventListener("keypress",(t=>{"Enter"===t.key&&(this.addTask(this.inputField.value),this.inputField.value="")}))}sortTasks(){this.todoTask.sort(((t,e)=>t.index-e.index))}render(){this.sortTasks(),this.todoList.innerHTML="",this.todoTask.forEach(((t,e)=>{const n=document.createElement("li");n.classList.add("task-container");const o=document.createElement("div");o.classList.add("task");const r=document.createElement("input");r.type="checkbox",r.checked=t.completed,r.addEventListener("change",(()=>{var t,n,o;this.todoTask=(t=e,n=r.checked,(o=this.todoTask)[t].completed=n,o),this.updateLocalStorage()})),o.appendChild(r);const s=document.createElement("span");s.classList.add("description"),s.contentEditable="true",s.textContent=t.description,s.addEventListener("input",(()=>{this.editTask(e,s.textContent)})),o.appendChild(s);const a=document.createElement("span");a.innerHTML="delete",a.classList.add("material-icons","trash-icon"),a.style.display="none",a.dataset.task=e;const i=document.createElement("span");i.innerHTML="more_vert",i.classList.add("material-icons","dots-icon"),n.append(o,a,i),this.todoList.appendChild(n),n.addEventListener("focus",(t=>{t.currentTarget.querySelector(".dots-icon").style.display="none",t.currentTarget.querySelector(".trash-icon").style.display="",t.currentTarget.style.backgroundColor="lightyellow"}),!0),n.addEventListener("blur",(t=>{t.currentTarget.querySelector(".dots-icon").style.display="",t.currentTarget.querySelector(".trash-icon").style.display="none",t.currentTarget.style.backgroundColor=""}),!0)})),this.updateLocalStorage()}clearAllCompletedTasks(){this.todoTask=this.todoTask.filter((t=>!t.completed)),this.todoTask.forEach(((t,e)=>{t.index=e+1})),this.updateLocalStorage(),this.render()}addTask(t){if(""!==t.trim()){const e={description:t,completed:!1,index:this.todoTask.length+1};this.todoTask.push(e),this.updateLocalStorage(),this.render()}}deleteTask(t){this.todoTask.splice(t,1),this.todoTask.forEach(((t,e)=>{t.index=e+1})),this.updateLocalStorage(),this.render()}editTask(t,e){this.todoTask[t]&&(this.todoTask[t].description=e,this.updateLocalStorage())}updateLocalStorage(){localStorage.setItem("tasks",JSON.stringify(this.todoTask))}}(document.getElementById("to-do-list"));document.getElementById("clear-completed-button").addEventListener("click",(()=>y.clearAllCompletedTasks())),y.render()}},t=>{t(t.s=336)}]);