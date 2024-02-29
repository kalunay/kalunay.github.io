(function(){"use strict";var o={6401:function(o,t,e){var i=e(9242),r=e(3396);const s={class:"app-main"};function n(o,t,e,i,n,d){const l=(0,r.up)("AppHeader"),c=(0,r.up)("AppFilters"),a=(0,r.up)("AppTodolist"),u=(0,r.up)("AppAddTodo"),p=(0,r.up)("AppFooter");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l),(0,r.Wm)(c,{"active-filter":o.activeFilter,onSetFilter:o.setFilter},null,8,["active-filter","onSetFilter"]),(0,r._)("main",s,[(0,r.Wm)(a,{todos:o.filterTodos,onToggleTodo:o.toggleTodo,onRemoveTodo:o.removeTodo},null,8,["todos","onToggleTodo","onRemoveTodo"]),(0,r.Wm)(u,{onAddTodo:o.addTodo},null,8,["onAddTodo"])]),(0,r.Wm)(p,{stats:o.stats},null,8,["stats"])],64)}e(7658);const d={class:"app-header"},l=(0,r._)("span",{class:"logo"},"TODOS",-1),c=[l];function a(o,t){return(0,r.wg)(),(0,r.iD)("header",d,c)}var u=e(89);const p={},m=(0,u.Z)(p,[["render",a]]);var f=m,T=e(7139);const v={class:"app-filters"},g={class:"toggle-group"},h=["onClick"];function b(o,t,e,i,s,n){return(0,r.wg)(),(0,r.iD)("aside",v,[(0,r._)("section",g,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.filters,(t=>((0,r.wg)(),(0,r.iD)("button",{class:(0,T.C_)(["button",{"button--primary":o.activeFilter===t}]),key:t,onClick:e=>o.setFilter(t)},(0,T.zw)(t),11,h)))),128))])])}var w=(0,r.aZ)({props:{activeFilter:{type:String,required:!0}},data(){return{filters:["All","Active","Done"]}},methods:{setFilter(o){this.$emit("setFilter",o)}},emits:{setFilter:o=>o}});const F=(0,u.Z)(w,[["render",b]]);var _=F;const y={class:"todo-list"};function A(o,t,e,i,s,n){const d=(0,r.up)("AppTodoItem");return(0,r.wg)(),(0,r.iD)("ul",y,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.todos,(t=>((0,r.wg)(),(0,r.j4)(d,{todo:t,key:t.id,onToggleTodo:o.toggleTodo,onRemoveTodo:o.removeTodo},null,8,["todo","onToggleTodo","onRemoveTodo"])))),128))])}const x=(0,r._)("div",{class:"todo-item__status"},[(0,r._)("i",{class:"bi bi-check2"})],-1),k={class:"todo-item__text"},D=(0,r._)("i",{class:"bi bi-trash3"},null,-1),O=[D];function Z(o,t,e,s,n,d){return(0,r.wg)(),(0,r.iD)("li",{class:(0,T.C_)(["todo-item",{"todo-item--done":o.todo?.completed}]),onClick:t[1]||(t[1]=(...t)=>o.toggleTodo&&o.toggleTodo(...t))},[x,(0,r._)("span",k,(0,T.zw)(o.todo?.text),1),(0,r._)("button",{class:"todo-item__remove-button",onClick:t[0]||(t[0]=(0,i.iM)(((...t)=>o.removeTodo&&o.removeTodo(...t)),["stop"]))},O)],2)}var C=(0,r.aZ)({props:{todo:{type:Object,required:!0}},methods:{toggleTodo(){this.$emit("toggleTodo",this.todo.id)},removeTodo(){this.$emit("removeTodo",this.todo.id)}},emits:{toggleTodo:o=>Number.isInteger(o),removeTodo:o=>Number.isInteger(o)}});const j=(0,u.Z)(C,[["render",Z]]);var I=j,$=(0,r.aZ)({components:{AppTodoItem:I},props:{todos:{type:Array}},methods:{toggleTodo(o){this.$emit("toggleTodo",o)},removeTodo(o){this.$emit("removeTodo",o)}},emits:{toggleTodo:o=>Number.isInteger(o),removeTodo:o=>Number.isInteger(o)}});const H=(0,u.Z)($,[["render",A]]);var S=H;const V={class:"add-todo"},W=(0,r._)("i",{class:"bi bi-x"},null,-1),z=[W],L={class:"text-input text-input--focus"},N=(0,r._)("button",{class:"button button--filled"},"Add task",-1),R=(0,r._)("i",{class:"bi bi-plus-lg"},null,-1),q=[R];function M(o,t,e,s,n,d){return(0,r.wg)(),(0,r.iD)("section",V,[o.isFormVisible?((0,r.wg)(),(0,r.iD)("form",{key:0,class:"add-todo__form",onSubmit:t[2]||(t[2]=(0,i.iM)(((...t)=>o.addTodo&&o.addTodo(...t)),["prevent"]))},[(0,r._)("button",{class:"close-button",type:"button",onClick:t[0]||(t[0]=(...t)=>o.closeForm&&o.closeForm(...t))},z),(0,r._)("div",L,[(0,r.wy)((0,r._)("input",{class:"input","onUpdate:modelValue":t[1]||(t[1]=t=>o.todoText=t)},null,512),[[i.nr,o.todoText]])]),N],32)):((0,r.wg)(),(0,r.iD)("button",{key:1,class:"add-todo__show-form-button",onClick:t[3]||(t[3]=(...t)=>o.showForm&&o.showForm(...t))},q))])}var Y=(0,r.aZ)({data(){return{isFormVisible:!1,todoText:""}},methods:{showForm(){this.isFormVisible=!0},closeForm(){this.isFormVisible=!1},addTodo(){this.$emit("addTodo",{id:Date.now(),text:this.todoText,completed:!1}),this.todoText=""}},emits:{addTodo:o=>o}});const K=(0,u.Z)(Y,[["render",M]]);var P=K;const E={class:"app-footer"};function U(o,t,e,i,s,n){return(0,r.wg)(),(0,r.iD)("footer",E,(0,T.zw)(o.stats.active)+" more to do, "+(0,T.zw)(o.stats.done)+" done",1)}var B=(0,r.aZ)({props:{stats:{type:Object,required:!0}}});const G=(0,u.Z)(B,[["render",U]]);var J=G,Q=(0,r.aZ)({components:{AppHeader:f,AppFilters:_,AppTodolist:S,AppAddTodo:P,AppFooter:J},data(){return{todos:[{id:0,text:"1 Learn the basics of Typescript",completed:!0},{id:1,text:"2 Learn the basics of Typescript",completed:!1},{id:2,text:"3 Learn the basics of Typescript",completed:!1},{id:3,text:"4 Learn the basics of Typescript",completed:!1}],activeFilter:"All"}},computed:{filterTodos(){switch(this.activeFilter){case"Active":return this.activeTodos;case"Done":return this.doneTodos;case"All":default:return this.todos}},stats(){return{active:this.activeTodos.length,done:this.doneTodos.length}},activeTodos(){return this.todos.filter((o=>!o.completed))},doneTodos(){return this.todos.filter((o=>o.completed))}},methods:{addTodo(o){this.todos.push(o)},toggleTodo(o){const t=this.todos.find((t=>t.id===o));t&&(t.completed=!t.completed)},removeTodo(o){this.todos=this.todos.filter((t=>t.id!==o))},setFilter(o){this.activeFilter=o}}});const X=(0,u.Z)(Q,[["render",n]]);var oo=X;(0,i.ri)(oo).mount("#app")}},t={};function e(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return o[i].call(s.exports,s,s.exports,e),s.exports}e.m=o,function(){var o=[];e.O=function(t,i,r,s){if(!i){var n=1/0;for(a=0;a<o.length;a++){i=o[a][0],r=o[a][1],s=o[a][2];for(var d=!0,l=0;l<i.length;l++)(!1&s||n>=s)&&Object.keys(e.O).every((function(o){return e.O[o](i[l])}))?i.splice(l--,1):(d=!1,s<n&&(n=s));if(d){o.splice(a--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var a=o.length;a>0&&o[a-1][2]>s;a--)o[a]=o[a-1];o[a]=[i,r,s]}}(),function(){e.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return e.d(t,{a:t}),t}}(),function(){e.d=function(o,t){for(var i in t)e.o(t,i)&&!e.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:t[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){var o={143:0};e.O.j=function(t){return 0===o[t]};var t=function(t,i){var r,s,n=i[0],d=i[1],l=i[2],c=0;if(n.some((function(t){return 0!==o[t]}))){for(r in d)e.o(d,r)&&(e.m[r]=d[r]);if(l)var a=l(e)}for(t&&t(i);c<n.length;c++)s=n[c],e.o(o,s)&&o[s]&&o[s][0](),o[s]=0;return e.O(a)},i=self["webpackChunktodolist"]=self["webpackChunktodolist"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(6401)}));i=e.O(i)})();
//# sourceMappingURL=app.fcf357bb.js.map