"use strict";(self.webpackChunksoft_ui_dashboard_pro_react=self.webpackChunksoft_ui_dashboard_pro_react||[]).push([[360],{1360:(e,s,t)=>{t.r(s),t.d(s,{default:()=>C});var i=t(9950),r=t(4919),l=t(3274),a=t(1323),n=t(6186),o=t(4695),c=t.n(o),u=t(3474),d=t(5165),h=t(3464),x=t(9739),j=t(8170),m=t(33),f=t(899),p=(t(1171),t(5345)),A=t(982),y=(t(136),t(6265)),g=t(4414);function b(e){var s,t;let{item:o,refetch:b}=e;const[C,k]=(0,i.useState)(!1),[_,v]=(0,i.useState)(o),[w,B]=(0,i.useState)([]),[q,K]=(0,i.useState)({course_name:!1,price:!1}),E=()=>{K({}),k(!1)},O=async()=>{if((()=>{const e={course_name:!_.course_name.trim(),price:!_.price.trim()};return K(e),!Object.values(e).some(Boolean)})())try{const e=c().fire({title:"Yangilanmoqda...",text:"Iltimos kuting!",allowOutsideClick:!1,allowEscapeKey:!1,showConfirmButton:!1,didOpen:()=>{c().showLoading()}}),s=await u.ae.update(_);e.close(),(e=>{e.ok?(c().fire("Yangilandi",e.message,"success").then((()=>b(e.data))),k(!1),v({})):c().fire("Error",e.error,"error")})(s)}catch(e){console.log("Error",e)}};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n.A,{variant:"body1",color:"secondary",sx:{cursor:"pointer",lineHeight:0},onClick:()=>{k(!0)},children:(0,g.jsx)(l.A,{title:"yangilash",placement:"top",children:(0,g.jsx)(r.A,{children:"edit"})})}),(0,g.jsxs)(h.A,{open:C,onClose:E,size:"xs",fullWidth:!0,children:[(0,g.jsx)(m.A,{children:"Kursni yangilash"}),(0,g.jsx)(j.A,{style:{overflowY:"visible"},children:(0,g.jsxs)(f.Ay,{container:!0,spacing:2,children:[(0,g.jsx)(f.Ay,{item:!0,xs:12,children:(0,g.jsxs)(a.A,{children:[(0,g.jsxs)(n.A,{variant:"subtitle2",children:["Holati ",(0,g.jsx)("span",{style:{color:"#f009"},children:"*"})]}),(0,g.jsx)(A.A,{defaultValue:{value:_.course_status,label:(0,g.jsx)(y.A,{status:_.course_status})},options:[{value:1,label:(0,g.jsx)(y.A,{status:1})},{value:2,label:(0,g.jsx)(y.A,{status:2})}],onChange:e=>v({..._,course_status:e.value})})]})}),(0,g.jsx)(f.Ay,{item:!0,xs:12,children:(0,g.jsxs)(a.A,{children:[(0,g.jsxs)(n.A,{variant:"subtitle2",children:["Kurs nomi ",(0,g.jsx)("span",{style:{color:"#f009"},children:"*"})]}),(0,g.jsx)(p.A,{disabled:null===(s=2==_.course_status)||void 0===s||s,type:"text",defaultValue:_.course_name,error:q.course_name,onChange:e=>v({..._,course_name:e.target.value})})]})}),(0,g.jsx)(f.Ay,{item:!0,xs:12,children:(0,g.jsxs)(a.A,{children:[(0,g.jsxs)(n.A,{variant:"subtitle2",children:["Kurs narxi ",(0,g.jsx)("span",{style:{color:"#f009"},children:"*"})]}),(0,g.jsx)(p.A,{disabled:null===(t=2==_.course_status)||void 0===t||t,type:"text",defaultValue:_.price,error:q.price,onChange:e=>v({..._,price:e.target.value})})]})})]})}),(0,g.jsxs)(x.A,{children:[(0,g.jsx)(d.A,{onClick:E,children:"Bekor qilish"}),2==_.course_status?(0,g.jsx)(d.A,{style:{color:"#344767"},onClick:O,children:"Kursni yakunlash"}):(0,g.jsx)(d.A,{style:{color:"#17c1E8"},onClick:O,children:"Yangilash"})]})]})]})}function C(e){let{item:s,refetch:t}=e;return(0,g.jsxs)(a.A,{display:"flex",alignItems:"center",children:[(0,g.jsx)(a.A,{mx:2,children:(0,g.jsx)(b,{item:s,refetch:t})}),(0,g.jsx)(n.A,{variant:"body1",onClick:()=>(async e=>{try{const s=c().mixin({customClass:{confirmButton:"button button-success",cancelButton:"button button-error"},buttonsStyling:!1});s.fire({title:"Chetlatish!",text:"Diqqat: ushbu xolatda kurs chetlatiladi va sahifadan olib chetlatilgan kurslar bo'limiga qo'shiladi!",showCancelButton:!0,confirmButtonText:"Chetlatish",cancelButtonText:"Bekor qilish",reverseButtons:!0}).then((async i=>{if(i.isConfirmed){const i=c().fire({title:"Chetlatilmoqda...",text:"Iltimos kuting!",allowOutsideClick:!1,allowEscapeKey:!1,showConfirmButton:!1,didOpen:()=>{c().showLoading()}}),r=await u.ae.excluded(e);i.close(),r.ok?s.fire("Chetlatildi!",r.message,"success").then((()=>{t(r.data)})):s.fire("Xatolik!",r.error,"error")}}))}catch(s){console.error(s.message)}})(s.course_id),color:"secondary",sx:{cursor:"pointer",lineHeight:0},children:(0,g.jsx)(l.A,{title:"chetlatilsh",placement:"top",children:(0,g.jsx)(r.A,{children:"delete"})})})]})}}}]);