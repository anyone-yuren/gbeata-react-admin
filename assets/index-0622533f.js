import{c,j as e,T as p,J as u,K as t,n as d,aD as o,ap as h}from"./antd-412663d3.js";import{t as a,K as x,e as m,g}from"./entry/index-3293f358.1715323769895.js";import{h as b}from"./react-f288da4a.js";import{T as j}from"./Translatex-57ca1126.js";const f=c(({token:r})=>({"custom-upload-drag":{".ant-upload-drag":{background:"#fff",border:"none","&:hover":{".add-phone-box":{border:`1px dashed ${r.colorPrimary}`,".add-phone":{background:r.colorBgTextActive}}},".add-phone-box":{width:"144px",height:"144px",borderRadius:"50%",overflow:"hidden",cursor:"pointer",margin:"0 auto",padding:r.paddingSM,border:`1px dashed ${r.colorBorderSecondary}`,transition:"border-color .3s ease","&:hover":{border:`1px dashed ${r.colorPrimary}`},".add-phone":{width:"100%",height:"100%",background:r.colorBgContainerDisabled,borderRadius:"50%",color:r.colorTextDisabled,transition:"all .3s ease","&:hover":{background:r.colorBgTextActive}}}}},"add-user-form":{".ant-input":{borderRadius:r.borderRadiusLG}},"btn-submit":{width:"100%"}})),R=()=>{const r=b(),{Dragger:l}=h,{styles:s}=f(),i=[{title:a("全名"),key:"input",required:!0,defaultValue:"Gbeata"},{title:a("密码"),type:"password",key:"password",defaultValue:"gbeata"},{title:a("城市"),type:"select",key:"select",defaultValue:1,options:[{label:e.jsx(p,{children:a("选项A")}),value:1},{label:a("选项2"),value:2}]},{title:a("电话号码"),key:"number",required:!0,defaultValue:15305999999},{title:a("地址"),type:"textarea",key:"textarea",defaultValue:a("广东省深圳市南山区科技园"),span:24}],n=y=>{r("/user/user-list")};return e.jsx(j,{direction:"left",run:!0,delay:100,children:e.jsxs(u,{gutter:[16,16],children:[e.jsx(t,{span:8,children:e.jsx(d,{children:e.jsxs(l,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",accept:".jpg, .jpeg, .gif, .png, .bmp",multiple:!0,className:s["custom-upload-drag"],children:[e.jsx("div",{className:"add-phone-box",children:e.jsxs(o,{align:"center",vertical:!0,justify:"center",className:"add-phone",children:[e.jsx(x,{name:"camera",size:24}),e.jsx("span",{children:"upload phone"})]})}),e.jsxs("p",{children:[a("将图片拖到此处, 或"),e.jsx("span",{style:{color:"#1890ff"},children:a("点击上传")})]}),e.jsx("p",{className:"ant-upload-hint",children:a("只能上传jpg、jpeg、gif、png、bmp文件, 且不超过500kb")})]})})}),e.jsx(t,{span:16,children:e.jsx(d,{children:e.jsx(m,{fields:i,span:12,onConfirm:n,children:e.jsx(o,{justify:"end",className:s["btn-submit"],children:e.jsx(g,{type:"primary",htmlType:"submit",children:a("创建用户")})})})})})]})})};export{R as default};