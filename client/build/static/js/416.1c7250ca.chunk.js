"use strict";(self.webpackChunkwingrow=self.webpackChunkwingrow||[]).push([[416],{4416:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(1413),s=n(9439),o=n(2791),a=n(5653),i=n(1840),l=n(6457),c=n(184),u=function(){var e=(0,o.useState)(),t=(0,s.Z)(e,2),n=t[0],u=t[1],d=(0,o.useState)(!1),f=(0,s.Z)(d,2),p=f[0],g=f[1],m=(0,o.useState)(!1),b=(0,s.Z)(m,2),h=b[0],j=b[1],v=(0,o.useState)(!1),w=(0,s.Z)(v,2),x=w[0],Z=w[1],_=(0,o.useRef)(""),y=(0,o.useState)({photo:""}),O=(0,s.Z)(y,2),N=O[0],S=O[1];(0,o.useEffect)((function(){a.Z.getAllUsers().then((function(e){var t=null===e||void 0===e?void 0:e.data;u(t[0])}))}),[]);return(0,c.jsx)("div",{children:!p&&n?(0,c.jsx)("div",{className:"profile",children:(0,c.jsxs)("div",{className:"profile_container",children:[(0,c.jsx)("div",{className:"profile_image_wrapper",children:(0,c.jsx)("img",{className:"profile_img",src:n.pic?n.pic:" ",alt:"profile"})}),(0,c.jsxs)("div",{className:"profile_details",children:[(0,c.jsxs)("div",{children:["Mobile No : ",n.phone]}),(0,c.jsxs)("div",{children:["Name : ",n.firstname," ",n.lastname]}),n.address&&(0,c.jsxs)("div",{children:["Address : ",n.address]})]}),(0,c.jsxs)("div",{className:"profile_btn_grp",children:[h?(0,c.jsxs)("form",{className:"form_uploaddata",onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("photo",N.photo),g(!0),t&&l.Z.addimage(t).then((function(e){e?(u(e),console.log(e)):console.log("Image not set"),window.location.reload(),g(!1)})),j(!h)},encType:"multipart/form-data",children:[(0,c.jsx)("input",{type:"file",accept:".png, .jpg, .jpeg",name:"photo",style:{marginLeft:"auto"},onChange:function(e){S((0,r.Z)((0,r.Z)({},N),{},{photo:e.target.files[0]}))}}),(0,c.jsx)("input",{type:"submit",className:"profile_btn_toggle"}),(0,c.jsx)("button",{className:"profile_btn_toggle",onClick:function(){return j(!h)},children:"cancel"})]}):(0,c.jsx)("button",{className:"profile_btn_toggle",onClick:function(){j(!h)},children:"Upload Profile"}),x?(0,c.jsxs)("form",{className:"form_uploaddata",onSubmit:function(e){e.preventDefault();var t=_.current.value;t&&0!==t.length&&l.Z.addAddress(t).then((function(e){u(e),console.log("user ",e),window.location.reload(),g(!1)})),Z(!x)},children:[(0,c.jsx)("input",{type:"text",name:"address",ref:_}),(0,c.jsx)("input",{type:"submit",className:"profile_btn_toggle"}),(0,c.jsx)("button",{className:"profile_btn_toggle",onClick:function(){return Z(!x)},children:"cancel"})]}):(0,c.jsx)("button",{className:"profile_btn_toggle",onClick:function(){Z(!x)},children:n.address?"Update Address":"Add Address"})]})]})}):(0,c.jsx)(i.Z,{})})}},5653:function(e,t,n){var r=n(4569),s=n.n(r),o=n(6456),a="https://wingrowmarket.onrender.com/",i={getPublicContent:function(){return s().get(a+"all")},getStallsData:function(){return s().get(a+"stalls",{headers:(0,o.Z)()})},getAdminData:function(){return s().get(a+"admin",{headers:(0,o.Z)()})},getInOutdata:function(){return s().get(a+"inwardoutward",{headers:(0,o.Z)()})},getFarmers:function(){return s().get(a+"farmer",{headers:(0,o.Z)()})},getAllUsers:function(){return s().get(a+"allusers",{headers:(0,o.Z)()})},getUsers:function(){return s().get(a+"users",{headers:(0,o.Z)()})},getSub:function(e){return s().post(a+"sub1",{userId:e})},postSub:function(e,t,n,r){return s().post(a+"sub",{date:e,userId:t,stalls:n,validity:r},{headers:(0,o.Z)()})}};t.Z=i},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(4942);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=416.1c7250ca.chunk.js.map