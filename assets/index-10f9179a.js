var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,i,r)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r,l=(e,t)=>{for(var i in t||(t={}))n.call(t,i)&&s(e,i,t[i]);if(r)for(var i of r(t))a.call(t,i)&&s(e,i,t[i]);return e},d=(e,r)=>t(e,i(r));import{G as c,r as o,j as x,a as h,H as b,B as p,al as m,h as j,J as u,I as y}from"./index-1f4a33c2.js";import{D as f,d as g}from"./index-e9c64ee1.js";import{P as v,d as w}from"./websiteSetting-0c25c0a2.js";import{T as I}from"./Table-b8bfe507.js";import{P as k}from"./index-30f8932f.js";import{R as F}from"./index-a9260100.js";import{I as O}from"./index-0e93bbe1.js";import"./addEventListener-28e41780.js";import"./iconUtil-7b63354c.js";import"./objectDestructuringEmpty-47c1eead.js";import"./index-9362a577.js";import"./index-6fad61a0.js";const P=[{key:"1001",name:"张三",sex:"男",birth:"2002-05-06",education:"高中",hobby:"羽毛球、篮球、听歌、阅读",forbid:!1},{key:"1002",name:"李四",sex:"男",birth:"1998-09-21",education:"初中",hobby:"乒乓球、排球、游泳",forbid:!0},{key:"1003",name:"王五",sex:"男",birth:"1993-06-06",education:"本科",hobby:"旱冰、滑雪、跳高、打游戏",forbid:!1},{key:"1004",name:"辛八",sex:"男",birth:"1995-08-03",education:"大专",hobby:"网球、篮球、跳伞",forbid:!0},{key:"1005",name:"刘二",sex:"女",birth:"1999-11-05",education:"本科",hobby:"滑翔、游泳、篮球、看电影",forbid:!0},{key:"1006",name:"赵七",sex:"男",birth:"2000-07-18",education:"大专",hobby:"游泳、篮球、潜水",forbid:!1},{key:"1007",name:"杨一",sex:"女",birth:"1998-12-25",education:"高中",hobby:"冲浪、上网、看书、打游戏",forbid:!1}],N={key:{title:"数字输入框",type:"number"},name:{title:"输入框",type:"text"},sex:{title:"单选框",type:"radio"},birth:{title:"日期选择框",type:"date"},education:{title:"选择器",type:"select"},hobby:{title:"多选框",type:"checkbox"},forbid:{title:"开关",type:"switch"},action:{title:"按钮",type:"button"}},Y=e=>{var t=e,{editing:i,dataIndex:s,title:o,cellType:h,record:b,index:p,children:v}=t,w=((e,t)=>{var i={};for(var s in e)n.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&r)for(var s of r(e))t.indexOf(s)<0&&a.call(e,s)&&(i[s]=e[s]);return i})(t,["editing","dataIndex","title","cellType","record","index","children"]);const I=((e,t)=>{switch(e){case"number":return x.jsx(O,{min:1e3,max:2e3});case"text":return x.jsx(y,{});case"radio":return x.jsx(F.Group,{options:["男","女"].map((e=>({value:e,label:e})))});case"date":return x.jsx("div",{children:x.jsx(f,{defaultValue:g(t.birth,"YYYY-MM-DD"),format:"YYYY-MM-DD"})});case"select":return x.jsx(u,{options:["初中","高中","大专","本科"].map((e=>({value:e}))),style:{width:"80px"}});case"checkbox":return x.jsx(j.Group,{options:t.hobby.split("、"),defaultValue:t.hobby.split("、")});case"switch":return x.jsx(m,{defaultChecked:t.forbid})}})(h,b);return x.jsx("td",d(l({},w),{children:i?x.jsx(c.Item,{name:s,style:{margin:0},children:I}):v}))},D=()=>{const[e]=c.useForm(),[t,i]=o.useState(P),[r,n]=o.useState(""),a=e=>e.key===r,s=()=>{n("")},m=r=>{return a=void 0,s=null,d=function*(){try{const a=yield e.validateFields(),s=[...t],d=s.findIndex((e=>r===e.key));if(d>-1){const e=s[d];s.splice(d,1,l(l({},e),a)),i(s),n("")}else s.push(a),i(s),n("")}catch(a){console.log("Validate Failed:",a)}},new Promise(((e,t)=>{var i=e=>{try{n(d.next(e))}catch(i){t(i)}},r=e=>{try{n(d.throw(e))}catch(i){t(i)}},n=t=>t.done?e(t.value):Promise.resolve(t.value).then(i,r);n((d=d.apply(a,s)).next())}));var a,s,d},j=[{title:()=>x.jsxs(x.Fragment,{children:[x.jsx("span",{children:"编号"}),x.jsx("p",{className:"sub-title",children:"(数字输入框)"})]}),dataIndex:"key",width:70,editable:!0,align:"center"},{title:()=>x.jsxs(x.Fragment,{children:[x.jsx("span",{children:"姓名"}),x.jsx("p",{className:"sub-title",children:"(输入框)"})]}),dataIndex:"name",width:110,editable:!0,align:"center"},{title:()=>x.jsxs(x.Fragment,{children:[x.jsx("span",{children:"性别"}),x.jsx("p",{className:"sub-title",children:"(单选框)"})]}),dataIndex:"sex",width:120,editable:!0,align:"center"},{title:()=>x.jsxs(x.Fragment,{children:[x.jsx("span",{children:"生日"}),x.jsx("p",{className:"sub-title",children:"(日期选择器)"})]}),dataIndex:"birth",width:140,editable:!0,align:"center"},{title:()=>x.jsxs(x.Fragment,{children:[x.jsx("span",{children:"学历"}),x.jsx("p",{className:"sub-title",children:"(选择器)"})]}),dataIndex:"education",width:80,editable:!0,align:"center"},{title:()=>x.jsxs(x.Fragment,{children:[x.jsx("span",{children:"爱好"}),x.jsx("p",{className:"sub-title",children:"(多选框)"})]}),dataIndex:"hobby",width:250,editable:!0,align:"center"},{title:()=>x.jsxs(x.Fragment,{children:[x.jsx("span",{children:"禁止编辑"}),x.jsx("p",{className:"sub-title",children:"(开关)"})]}),dataIndex:"forbid",width:70,editable:!0,align:"center",render:(e,t)=>x.jsx("span",{children:t.forbid?"是":"否"})},{title:()=>x.jsxs(x.Fragment,{children:[x.jsx("span",{children:"操作"}),x.jsx("p",{className:"sub-title",children:"(按钮)"})]}),dataIndex:"action",width:70,align:"center",render:(t,i)=>a(i)?x.jsxs(b,{children:[x.jsx(p,{type:"primary",ghost:!0,onClick:()=>m(i.key),children:"保存"}),x.jsx(k,{title:"是否取消编辑？",onConfirm:s,children:x.jsx(p,{type:"primary",danger:!0,ghost:!0,children:"取消"})})]}):x.jsx(p,{disabled:""!==r,onClick:()=>(t=>{e.setFieldsValue(l({},t)),n(t.key)})(i),children:"编辑"})}].map((e=>e.editable?d(l({},e),{onCell:t=>({record:t,cellType:N[e.dataIndex].type,dataIndex:e.dataIndex,title:e.title,editing:a(t)})}):e));return x.jsx(v,{plugin:w,children:x.jsx(h,{bordered:!1,children:x.jsx(c,{form:e,component:!1,children:x.jsx(I,{components:{body:{cell:Y}},dataSource:t,columns:j,pagination:!1})})})})};export{D as default};
