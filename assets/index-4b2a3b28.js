var U=Object.defineProperty,q=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var C=(e,t,i)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,R=(e,t)=>{for(var i in t||(t={}))T.call(t,i)&&C(e,i,t[i]);if(y)for(var i of y(t))w.call(t,i)&&C(e,i,t[i]);return e},E=(e,t)=>q(e,z(t));var N=(e,t)=>{var i={};for(var c in e)T.call(e,c)&&t.indexOf(c)<0&&(i[c]=e[c]);if(e!=null&&y)for(var c of y(e))t.indexOf(c)<0&&w.call(e,c)&&(i[c]=e[c]);return i};import{j as n,H as F,J as u,n as S,ap as f,aq as H,V as M}from"./antd-b384c7bd.js";import{t as l}from"./entry/index-8ec5db60.1706670921176.js";import{r as k}from"./react-35d7d5be.js";import{P as V,T as W}from"./websiteSetting-12aad3f6.js";const j=[];for(let e=1;e<10;e++)j.push({key:e.toString(),title:l("备选项{{i}}",{i:e})});const A=[{key:"1",title:l("备选项 1")},{key:"2",title:l("备选项 2"),children:[{key:"2-1",title:l("备选项 2-1")},{key:"2-2",title:l("备选项 2-2")},{key:"2-3",title:l("备选项 2-3")}]},{key:"3",title:l("备选项 3-1")},{key:"4",title:l("备选项 4"),children:[{key:"4-1",title:l("备选项 4-1")},{key:"4-2",title:l("备选项 4-2"),children:[{key:"4-2-1",title:l("备选项 4-2-1")}]},{key:"4-3",title:l("备选项 4-3")}]}],p=[];function O(e=[]){e.forEach(t=>{p==null||p.push(t),O(t.children)})}O(JSON.parse(JSON.stringify(A)));const X=()=>{const[e,t]=k.useState(["1","5"]),[i,c]=k.useState(["2","6"]),[x,P]=k.useState([]),m=s=>{t(s)},J=(s,r)=>{c([...s,...r])},K=(s,r)=>s.includes(r),b=(s=[],r=[])=>s.map(d=>{var o=d,{children:h}=o,a=N(o,["children"]);return E(R({},a),{disabled:r.includes(a.key),children:b(h,r)})}),_=s=>{P(s)},D=({selectedKeys:s,onItemSelectAll:r,onItemSelect:h})=>({onSelectAll(a,d){const o=d.filter(g=>!g.disabled).map(({key:g})=>g);r(o,a)},onSelect({key:a},d){h(a,d)},selectedRowKeys:s});return n.jsx(V,{plugin:W,children:n.jsxs(F,{gutter:12,children:[n.jsx(u,{span:8,children:n.jsx(S,{title:l("基础用法"),bordered:!1,bodyStyle:{height:"420px"},children:n.jsx(f,{targetKeys:e,selectedKeys:i,dataSource:j,render:s=>s.title,listStyle:{width:"230px",height:"360px"},locale:{itemsUnit:l("项")},onChange:m,onSelectChange:J})})}),n.jsx(u,{span:8,children:n.jsx(S,{title:l("树穿梭框"),bordered:!1,bodyStyle:{height:"420px"},children:n.jsx(f,{targetKeys:x,dataSource:p,render:s=>s.title,showSelectAll:!1,listStyle:{width:"230px",height:"360px"},onChange:_,children:({direction:s,selectedKeys:r,onItemSelect:h})=>{if(s==="left"){const a=[...r,...x];return n.jsx(H,{blockNode:!0,checkable:!0,checkStrictly:!0,defaultExpandAll:!0,checkedKeys:a,treeData:b(A,x),onCheck:(d,{node:{key:o}})=>{h(o,!K(a,o))},onSelect:(d,{node:{key:o}})=>{h(o,!K(a,o))}})}}})})}),n.jsx(u,{span:8,children:n.jsx(S,{title:l("表格穿梭框"),bordered:!1,bodyStyle:{height:"420px"},children:n.jsx(f,{targetKeys:e,dataSource:j,listStyle:{width:"230px",height:"360px"},locale:{itemsUnit:l("项")},onChange:m,children:({filteredItems:s,selectedKeys:r,onItemSelectAll:h,onItemSelect:a})=>n.jsx(M,{rowSelection:D({selectedKeys:r,onItemSelectAll:h,onItemSelect:a}),columns:[{dataIndex:"title",title:"Name"}],dataSource:s,size:"small",pagination:!1,onRow:({key:d})=>({onClick:()=>{a(d,!r.includes(d))}})})})})})]})})};export{X as default};