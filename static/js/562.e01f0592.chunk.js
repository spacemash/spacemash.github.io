"use strict";(self.webpackChunksoft_ui_dashboard_pro_react=self.webpackChunksoft_ui_dashboard_pro_react||[]).push([[562],{1562:(e,t,s)=>{s.r(t),s.d(t,{default:()=>C});var r=s(9950),n=s(4919),i=s(3274),o=s(1323),a=s(6186),l=s(4695),c=s.n(l),d=s(5165),h=s(3464),u=s(9739),x=s(8170),m=s(33),j=s(899),A=(s(1171),s(5345)),g=s(957),p=s(886),f=s(4414);function y(e){let{id:t,item:s,refetch:l}=e;const[y,C]=(0,r.useState)(!1),[b,v]=(0,r.useState)(s),w=()=>{C(!1)},k=async e=>{const t=e.target.files[0];if(!t)return void alert("Iltimos, fayl tanlang!");const s=await(async(e,t)=>{const s=c().fire({title:"Adding...",text:"Please Wait!",allowOutsideClick:!1,allowEscapeKey:!1,showConfirmButton:!1,didOpen:()=>{c().showLoading()}});try{const r=await FileController.uploadFile(e,t,localStorage.getItem("userId"));return s.close(),r.success?c().fire("Added",r.message,"success"):c().fire("error",r.message||r.error,"error"),r}catch(i){var r,n;return s.close(),console.error("Error uploading file:",i.response||i),c().fire("Upload Failed",(null===(r=i.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)||i.message,"error"),!1}})(t,"education_icon");v({...b,iconId:s.object.id})};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.A,{variant:"body1",color:"secondary",sx:{cursor:"pointer",lineHeight:0},onClick:()=>{v(s),C(!0)},children:(0,f.jsx)(i.A,{title:"Edit",placement:"top",children:(0,f.jsx)(n.A,{children:"edit"})})}),(0,f.jsxs)(h.A,{open:y,onClose:w,size:"xs",fullWidth:!0,children:[(0,f.jsx)(m.A,{children:"Update Course"}),(0,f.jsx)(x.A,{children:(0,f.jsxs)(j.Ay,{container:!0,spacing:2,children:[(0,f.jsx)(j.Ay,{item:!0,xs:12,children:(0,f.jsxs)(o.A,{children:[(0,f.jsx)(a.A,{variant:"subtitle2",children:"Course Name"}),(0,f.jsx)(A.A,{type:"text",value:b.name,onChange:e=>v({...b,name:e.target.value})})]})}),(0,f.jsx)(j.Ay,{item:!0,xs:12,children:(0,f.jsxs)(o.A,{children:[(0,f.jsx)(a.A,{variant:"subtitle2",children:"Teacher Name"}),(0,f.jsx)(A.A,{type:"text",value:b.teacherName,onChange:e=>v({...b,teacherName:e.target.value})})]})}),(0,f.jsx)(j.Ay,{item:!0,xs:12,md:6,children:(0,f.jsxs)(o.A,{children:[(0,f.jsx)(a.A,{variant:"subtitle2",children:"Sort"}),(0,f.jsx)(A.A,{type:"number",value:b.sort,onChange:e=>v({...b,sort:Number(e.target.value)})})]})}),(0,f.jsx)(j.Ay,{item:!0,xs:12,md:6,children:(0,f.jsxs)(o.A,{children:[(0,f.jsx)(a.A,{variant:"subtitle2",children:"Icon ID"}),(0,f.jsx)(A.A,{type:"file",accept:"image/*",onChange:e=>k(e),style:{border:"1px solid #e0e0e0",padding:"10px",borderRadius:"5px"}})]})}),(0,f.jsx)(j.Ay,{item:!0,xs:12,md:6,children:(0,f.jsxs)(o.A,{children:[(0,f.jsx)(a.A,{variant:"subtitle2",children:"Block"}),(0,f.jsx)(g.A,{checked:b.block,onChange:e=>v({...b,block:e.target.checked})})]})}),(0,f.jsx)(j.Ay,{item:!0,xs:12,md:6,children:(0,f.jsxs)(o.A,{children:[(0,f.jsx)(a.A,{variant:"subtitle2",children:"Hidden"}),(0,f.jsx)(g.A,{checked:b.hidden,onChange:e=>v({...b,hidden:e.target.checked})})]})})]})}),(0,f.jsxs)(u.A,{children:[(0,f.jsx)(d.A,{onClick:w,children:"Cancel"}),(0,f.jsx)(d.A,{onClick:async()=>{try{const e=c().fire({title:"Updating...",text:"Please Wait!",allowOutsideClick:!1,allowEscapeKey:!1,showConfirmButton:!1,didOpen:()=>{c().showLoading()}}),t=await p.a.updateCourse(b);e.close(),(e=>{function t(){l()}e.success?c().fire("Updated",e.message,"success").then((()=>t())):c().fire("Error",e.message||e.error,"error").then((()=>t()))})(t),C(!1)}catch(e){console.log("Error from handleSave from update Course: ",e)}},children:"Update Course"})]})]})]})}function C(e){let{id:t,item:s,refetch:r}=e;return(0,f.jsxs)(o.A,{display:"flex",alignItems:"center",children:[(0,f.jsx)(o.A,{mx:2,children:(0,f.jsx)(y,{id:t,item:s,refetch:r})}),(0,f.jsx)(a.A,{variant:"body1",onClick:()=>(async e=>{try{const t=c().mixin({customClass:{confirmButton:"button button-success",cancelButton:"button button-error"},buttonsStyling:!1});t.fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then((async s=>{if(s.isConfirmed){const s=c().fire({title:"Deleting...",text:"Please Wait!",allowOutsideClick:!1,allowEscapeKey:!1,showConfirmButton:!1,didOpen:()=>{c().showLoading()}}),n=await p.a.deleteCourse(e);s.close(),n.success?t.fire("Deleted!",n.message,"success").then((()=>{r()})):t.fire("Not Deleted!",n.message,"error").then((()=>{r()}))}}))}catch(t){console.error(t.message)}})(t),color:"secondary",sx:{cursor:"pointer",lineHeight:0},children:(0,f.jsx)(i.A,{title:"Delete",placement:"top",children:(0,f.jsx)(n.A,{children:"delete"})})})]})}}}]);