var k=Object.defineProperty;var S=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var V=(a,e,n)=>e in a?k(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,G=(a,e)=>{for(var n in e||(e={}))R.call(e,n)&&V(a,n,e[n]);if(S)for(var n of S(e))w.call(e,n)&&V(a,n,e[n]);return a};import{S as z,g as C,aw as _,o as U,aj as D,ab as x,j as y,M as L,ax as F,as as K}from"./antd-66264537.js";import{r as f,a as c}from"./react-f288da4a.js";import{n as $,C as B,q as H,s as j,G as W,v as J,w as X}from"./entry/index-49ff40a5.1715612414483.js";function g(a){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(a)}function q(a,e){return ee(a)||Z(a,e)||Y(a,e)||Q()}function Q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(a,e){if(a){if(typeof a=="string")return P(a,e);var n=Object.prototype.toString.call(a).slice(8,-1);if(n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set")return Array.from(a);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(a,e)}}function P(a,e){(e==null||e>a.length)&&(e=a.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=a[n];return t}function Z(a,e){var n=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(n!=null){var t,s,d,l,m=[],i=!0,r=!1;try{if(d=(n=n.call(a)).next,e===0){if(Object(n)!==n)return;i=!1}else for(;!(i=(t=d.call(n)).done)&&(m.push(t.value),m.length!==e);i=!0);}catch(o){r=!0,s=o}finally{try{if(!i&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(r)throw s}}return m}}function ee(a){if(Array.isArray(a))return a}function M(){return M=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t])}return a},M.apply(this,arguments)}function T(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter(function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable})),n.push.apply(n,t)}return n}function ae(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?T(Object(n),!0).forEach(function(t){ne(a,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(n,t))})}return a}function ne(a,e,n){return e=te(e),e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function te(a){var e=ie(a,"string");return g(e)=="symbol"?e:String(e)}function ie(a,e){if(g(a)!="object"||!a)return a;var n=a[Symbol.toPrimitive];if(n!==void 0){var t=n.call(a,e||"default");if(g(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}var A=function(e,n,t){var s,d,l=ae({},e.props);return(e==null||(s=e.type)===null||s===void 0?void 0:s.componentName)==="GAction"||(e==null||(d=e.type)===null||d===void 0?void 0:d.componentName)==="GButton"?c.createElement(W,M({key:n,type:"link"},t,l)):e},se=function(e,n){var t=n.max,s=t===void 0?J:t,d=n.sub,l=n.more,m=l===void 0?c.createElement(c.Fragment,null,$.table.actionRowMore||B," ",c.createElement(U,null)):l,i=[];if(!e.length||e.length===1&&!e[0])return[];if(e.length===1)return[A(e[0],"key",{sub:d})];e=e.filter(function(E){var N;return E!==null&&H(E==null||(N=E.props)===null||N===void 0?void 0:N.permission)});for(var r=0;r<(e.length<=s+1?e.length:s);r++){var o=e[r];if(o){var u=void 0;u=A(o,r,{sub:d}),i.push(u)}}if(e.length>s+1){for(var p=[],h=s;h<e.length;h++){var v=e[h];if(v){var O=void 0;O=A(v,h,{__simple:!0,type:"text"}),p.push(c.createElement(D.Item,{style:{padding:0},key:s+h},O))}}var I=c.createElement(D,{style:{minWidth:100}},p);i.push(c.createElement(x,{key:s,overlay:I,placement:"bottomRight"},c.createElement(j,{type:"link",className:C("g-button",d&&"sub")},m)))}return i};function ue(a){var e=f.useState(0),n=q(e,2);n[1];var t=a.children,s=a.split,d=a.size;a.sub;var l=a.className,m=a.style;Array.isArray(t)||(t=[t]);var i=se(t,a);return f.useEffect(function(){},[]),c.createElement(z,{size:d,className:C("g-ctrl",l),style:m,split:s!=null?s:c.createElement(_,{type:"vertical"})},i)}const re=[{name:"Ai",displayName:"云AI",permissions:[{name:"Ai.ImageAnnotation",displayName:"标注训练",isGranted:!0,isEnabled:!0,children:[{name:"Ai.ImageAnnotation.CreateBatch",displayName:"创建批次",isGranted:!0,isEnabled:!0,children:[]},{name:"Ai.ImageAnnotation.UpdateBatch",displayName:"编辑批次",isGranted:!0,isEnabled:!0,children:[]},{name:"Ai.ImageAnnotation.DeleteBatch",displayName:"删除批次",isGranted:!0,isEnabled:!0,children:[]},{name:"Ai.ImageAnnotation.CreateTraining",displayName:"创建训练",isGranted:!1,isEnabled:!0,children:[]},{name:"Ai.ImageAnnotation.UpdateTraining",displayName:"编辑训练",isGranted:!1,isEnabled:!0,children:[]},{name:"Ai.ImageAnnotation.Upload",displayName:"上传文件",isGranted:!1,isEnabled:!0,children:[]},{name:"Ai.ImageAnnotation.DownloadFiles",displayName:"下载文件",isGranted:!1,isEnabled:!0,children:[]},{name:"Ai.ImageAnnotation.DownloadResult",displayName:"下载模型",isGranted:!1,isEnabled:!0,children:[]},{name:"Ai.ImageAnnotation.DeleteImage",displayName:"删除图片",isGranted:!1,isEnabled:!0,children:[]},{name:"Ai.ImageAnnotation.UpdateAnnotation",displayName:"编辑标注",isGranted:!1,isEnabled:!0,children:[]},{name:"Ai.ImageAnnotation.UpdateLabel",displayName:"编辑标签",isGranted:!1,isEnabled:!0,children:[]}]}]},{name:"Customer",displayName:"客户管理",permissions:[{name:"AbpTenantManagement.Tenants",displayName:"客户列表",isGranted:!1,isEnabled:!0,children:[{name:"AbpTenantManagement.Tenants.Create",displayName:"新增",isGranted:!1,isEnabled:!0,children:[]},{name:"AbpTenantManagement.Tenants.Update",displayName:"编辑",isGranted:!1,isEnabled:!0,children:[]},{name:"Feature.Management",displayName:"订阅功能",isGranted:!1,isEnabled:!0,children:[{name:"Feature.Management.Setting",displayName:"编辑",isGranted:!1,isEnabled:!0,children:[]}]}]},{name:"Agent.Management",displayName:"代理商列表",isGranted:!1,isEnabled:!0,children:[{name:"Agent.Management.CreateRelation",displayName:"创建关系",isGranted:!1,isEnabled:!0,children:[]},{name:"Agent.Management.DeleteRelation",displayName:"删除关系",isGranted:!1,isEnabled:!0,children:[]}]}]},{name:"DataVisualization",displayName:"首页大屏",permissions:[{name:"DataVisualization.Vehicles",displayName:"车辆监控",isGranted:!1,isEnabled:!0,children:[{name:"DataVisualization.Vehicles.Status",displayName:"状态",isGranted:!1,isEnabled:!0,children:[]},{name:"DataVisualization.Vehicles.Location",displayName:"位置",isGranted:!1,isEnabled:!0,children:[]},{name:"DataVisualization.Vehicles.RealTimeInformation",displayName:"车辆实时信息",isGranted:!1,isEnabled:!0,children:[]},{name:"DataVisualization.Vehicles.RunningStatistics",displayName:"运行",isGranted:!1,isEnabled:!0,children:[]},{name:"DataVisualization.Vehicles.TroubleFreeOperationTime",displayName:"无故障运行时间",isGranted:!1,isEnabled:!0,children:[]},{name:"DataVisualization.Vehicles.AvailabilityRate",displayName:"稼动率",isGranted:!1,isEnabled:!0,children:[]},{name:"DataVisualization.Vehicles.RunningMileage",displayName:"运行里程",isGranted:!1,isEnabled:!0,children:[]},{name:"DataVisualization.Vehicles.CompleteTask",displayName:"完成任务数",isGranted:!1,isEnabled:!0,children:[]},{name:"DataVisualization.Vehicles.MeanTimeBetweenFailure",displayName:"平均故障间隔时间",isGranted:!1,isEnabled:!0,children:[]},{name:"DataVisualization.Vehicles.PowerOnTime",displayName:"启停",isGranted:!1,isEnabled:!0,children:[]},{name:"DataVisualization.Vehicles.ElectricQuantity",displayName:"电量",isGranted:!1,isEnabled:!0,children:[]}]}]},{name:"Maintenance",displayName:"保养管理",permissions:[{name:"Maintenance.Plans",displayName:"保养策略",isGranted:!1,isEnabled:!0,children:[{name:"Maintenance.Plans.Create",displayName:"新增",isGranted:!1,isEnabled:!0,children:[]},{name:"Maintenance.Plans.Update",displayName:"编辑",isGranted:!1,isEnabled:!0,children:[]},{name:"Maintenance.Plans.Delete",displayName:"删除",isGranted:!1,isEnabled:!0,children:[]}]},{name:"Maintenance.Maintain",displayName:"保养操作",isGranted:!1,isEnabled:!0,children:[{name:"Maintenance.Maintain.Confirm",displayName:"确认保养",isGranted:!1,isEnabled:!0,children:[]},{name:"Maintenance.Maintain.Terminate",displayName:"终止保养",isGranted:!1,isEnabled:!0,children:[]}]}]},{name:"MapSynchronization",displayName:"绘图同步",permissions:[{name:"MapSynchronization.Map",displayName:"绘制图",isGranted:!1,isEnabled:!0,children:[{name:"MapSynchronization.Map.Create",displayName:"新增",isGranted:!1,isEnabled:!0,children:[]},{name:"MapSynchronization.Map.Update",displayName:"编辑",isGranted:!1,isEnabled:!0,children:[]},{name:"MapSynchronization.Map.Delete",displayName:"删除",isGranted:!1,isEnabled:!0,children:[]}]},{name:"MapSynchronization.Project",displayName:"项目",isGranted:!1,isEnabled:!0,children:[]},{name:"MapSynchronization.Record",displayName:"绘图记录",isGranted:!1,isEnabled:!0,children:[{name:"MapSynchronization.Record.Create",displayName:"编辑",isGranted:!1,isEnabled:!0,children:[]}]}]},{name:"Ota",displayName:"OTA管理",permissions:[{name:"Ota.Packages",displayName:"更新包管理",isGranted:!1,isEnabled:!0,children:[{name:"Ota.Packages.Create",displayName:"新增",isGranted:!1,isEnabled:!0,children:[]},{name:"Ota.Packages.Update",displayName:"编辑",isGranted:!1,isEnabled:!0,children:[]},{name:"Ota.Packages.Delete",displayName:"删除",isGranted:!1,isEnabled:!0,children:[]},{name:"Ota.Packages.Upload",displayName:"包文件上传",isGranted:!1,isEnabled:!0,children:[]}]},{name:"Ota.Missions",displayName:"任务管理",isGranted:!1,isEnabled:!0,children:[{name:"Ota.Missions.Create",displayName:"新增",isGranted:!1,isEnabled:!0,children:[]},{name:"Ota.Missions.Update",displayName:"编辑",isGranted:!1,isEnabled:!0,children:[]},{name:"Ota.Missions.Delete",displayName:"删除",isGranted:!1,isEnabled:!0,children:[]},{name:"Ota.Missions.Publish",displayName:"发布",isGranted:!1,isEnabled:!0,children:[]},{name:"Ota.Missions.AddOrRemove",displayName:"选择设备",isGranted:!1,isEnabled:!0,children:[]}]}]},{name:"Project",displayName:"项目管理",permissions:[{name:"Project.Management",displayName:"项目列表",isGranted:!1,isEnabled:!0,children:[{name:"Project.Management.Create",displayName:"新增",isGranted:!1,isEnabled:!0,children:[]},{name:"Project.Management.Update",displayName:"编辑",isGranted:!1,isEnabled:!0,children:[]},{name:"Project.Management.Delete",displayName:"删除",isGranted:!1,isEnabled:!0,children:[]}]}]},{name:"SkyVision",displayName:"天眼管理",permissions:[{name:"SkyVision.Management",displayName:"天眼列表",isGranted:!1,isEnabled:!0,children:[{name:"SkyVision.Management.Create",displayName:"新增",isGranted:!1,isEnabled:!0,children:[]},{name:"SkyVision.Management.Update",displayName:"编辑",isGranted:!1,isEnabled:!0,children:[]},{name:"SkyVision.Management.Delete",displayName:"删除",isGranted:!1,isEnabled:!0,children:[]}]}]},{name:"System",displayName:"系统管理",permissions:[{name:"AbpIdentity.Roles",displayName:"角色管理",isGranted:!1,isEnabled:!0,children:[{name:"AbpIdentity.Roles.Create",displayName:"新增",isGranted:!1,isEnabled:!0,children:[]},{name:"AbpIdentity.Roles.Update",displayName:"编辑",isGranted:!1,isEnabled:!0,children:[]},{name:"AbpIdentity.Roles.Delete",displayName:"删除",isGranted:!1,isEnabled:!0,children:[]},{name:"AbpIdentity.Roles.ManagePermissions",displayName:"分配权限",isGranted:!1,isEnabled:!0,children:[]}]},{name:"AbpIdentity.Users",displayName:"用户管理",isGranted:!1,isEnabled:!0,children:[{name:"AbpIdentity.Users.ManagePermissions",displayName:"分配权限",isGranted:!1,isEnabled:!0,children:[]},{name:"AbpIdentity.Users.Invite",displayName:"邀请用户",isGranted:!1,isEnabled:!0,children:[]}]},{name:"Ou.Management",displayName:"组织管理",isGranted:!1,isEnabled:!0,children:[{name:"Ou.Management.Create",displayName:"新增",isGranted:!1,isEnabled:!0,children:[]},{name:"Ou.Management.Update",displayName:"编辑",isGranted:!1,isEnabled:!0,children:[]},{name:"Ou.Management.Delete",displayName:"删除",isGranted:!1,isEnabled:!0,children:[]},{name:"Ou.Management.AddMember",displayName:"添加用户",isGranted:!1,isEnabled:!0,children:[]},{name:"Ou.Management.AddDevice",displayName:"添加设备",isGranted:!1,isEnabled:!0,children:[]},{name:"Ou.Management.RemoveMember",displayName:"移除用户",isGranted:!1,isEnabled:!0,children:[]},{name:"Ou.Management.RemoveDevice",displayName:"移除设备",isGranted:!1,isEnabled:!0,children:[]},{name:"Device.Management.Bind",displayName:"绑定",isGranted:!1,isEnabled:!0,children:[]}]}]},{name:"Vehicle",displayName:"车辆管理",permissions:[{name:"Vehicle.Management",displayName:"车辆列表",isGranted:!1,isEnabled:!0,children:[{name:"Vehicle.Management.Create",displayName:"新增",isGranted:!1,isEnabled:!0,children:[]},{name:"Vehicle.Management.ResetPassword",displayName:"重置密码",isGranted:!1,isEnabled:!0,children:[]},{name:"Vehicle.Management.Delete",displayName:"移除",isGranted:!1,isEnabled:!0,children:[]},{name:"Vehicle.Management.ChangeCustomer",displayName:"转移",isGranted:!1,isEnabled:!0,children:[]},{name:"Vehicle.Management.Return",displayName:"回退",isGranted:!1,isEnabled:!0,children:[]},{name:"Vehicle.Management.Update",displayName:"编辑",isGranted:!1,isEnabled:!0,children:[{name:"Vehicle.Management.Update.Acceptance",displayName:"交付验收（编辑验收时间）",isGranted:!1,isEnabled:!0,children:[]},{name:"Vehicle.Management.Update.ExtendedWarranty",displayName:"质保延保（编辑质保时间）",isGranted:!1,isEnabled:!0,children:[]}]}]},{name:"Vehicle.Troubleshoot",displayName:"故障监控",isGranted:!1,isEnabled:!0,children:[{name:"Vehicle.Troubleshoot.Log",displayName:"实时日志",isGranted:!1,isEnabled:!0,children:[]},{name:"Vehicle.Troubleshoot.Rosbag",displayName:"Rosbag数据库",isGranted:!1,isEnabled:!0,children:[]},{name:"Vehicle.Troubleshoot.History",displayName:"历史故障",isGranted:!1,isEnabled:!0,children:[]}]}]}],pe=({_:a})=>{const[e,n]=f.useState(!1),[,t]=f.useState("1"),[s,d]=f.useState([]),l=i=>y.jsx(K,{checkable:!0,treeData:i,fieldNames:{title:"displayName",key:"name"},defaultExpandAll:!0,checkStrictly:!0,defaultCheckedKeys:s,onCheck:(r,o)=>{const u=new Set(s);o.checked?r.checked.forEach(p=>u.add(p)):u.delete(o.node.key),d(Array.from(u))}}),m=f.useMemo(()=>{const i=[],r=re.map(o=>{const u=X(o.permissions).filter(p=>p.isGranted).map(p=>p.name);return i.push(...u),{key:o.name,label:o.displayName,children:l(o.permissions)}});return d(i),r},[e]);return y.jsxs(y.Fragment,{children:[y.jsx(j,{sub:!0,type:"link",onClick:()=>n(!0),children:"授权"}),y.jsx(L,{title:"授权",open:e,onCancel:()=>n(!1),onOk:()=>{},children:e&&y.jsx(F,{tabPosition:"left",defaultActiveKey:"1",items:m,onChange:t})})]})};let b=[];const le=()=>{if(!b.length){const a=localStorage.getItem("CHARA_DATA_1015");a?b=JSON.parse(a):fetch("https://sunflower-assets.oss-cn-hangzhou.aliyuncs.com/data/data.json").then(e=>e.json()).then(e=>{b=e.reverse(),localStorage.setItem("CHARA_DATA_1015",JSON.stringify(b))})}};le();const ye=a=>{const e=G(G({},a.search),a.filters);return new Promise(n=>{setTimeout(()=>{let t=b.filter(l=>{let m=!0;for(const i in e){const r=e[i];l.hasOwnProperty(i)&&l[i]!==void 0&&r!==null&&(Array.isArray(r)&&!r.includes(l[i])||typeof r=="number"&&Number(l[i])===r||typeof r=="string"&&!`${l[i]}`.includes(`${r}`))&&(m=!1)}return m});(a.sorts||[]).forEach(l=>{const{key:m,order:i}=l;t.sort((r,o)=>i==="descend"?r[m]-o[m]:o[m]-r[m])});const d=t.length;t=t.slice(a.pageSize*(a.pageIndex-1),a.pageSize*a.pageIndex),n({content:t,totalCount:d})},300)})};export{pe as A,ue as G,ye as l};
