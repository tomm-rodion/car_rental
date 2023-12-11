"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[634],{2609:function(n,t,e){e.d(t,{Z:function(){return r}});var i=e(3329);function r(n){var t=n.text,e=n.onClick,r=n.width;return(0,i.jsx)("button",{variant:"contained",onClick:e,style:{width:r},children:(0,i.jsx)("span",{children:t})})}},6283:function(n,t,e){e.d(t,{Z:function(){return O}});var i,r,o,a,l,c,d,s,f,p=e(9439),x=e(2791),h=e(2609),u=e(168),g=e(6088),Z=g.Z.li(i||(i=(0,u.Z)(["\n  display: flex;\n  width: 274px;\n  height: 426px;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),j=g.Z.div(r||(r=(0,u.Z)(["\n  position: relative;\n  width: 274px;\n  height: 268px;\n  margin-bottom: 14px;\n"]))),v=g.Z.img(o||(o=(0,u.Z)(["\n  width: 100%;\n  height: 268px;\n  object-fit: cover;\n  border-radius: 14px;\n"]))),m=g.Z.div(a||(a=(0,u.Z)(["\n  width: 274px;\n  align-items: center;\n  color: #121417;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),w=g.Z.h3(l||(l=(0,u.Z)(["\n  color: #121417;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),y=g.Z.span(c||(c=(0,u.Z)(["\n  color: #3470ff;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),b=g.Z.p(d||(d=(0,u.Z)(["\n  color: #121417;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),k=g.Z.ul(s||(s=(0,u.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: fit-content;\n  row-gap: 4px;\n  margin-bottom: 28px;\n  width: 255px;\n  height: 40px;\n  overflow: hidden;\n"]))),C=g.Z.li(f||(f=(0,u.Z)(["\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n\n  :not(:last-child) {\n    border-right: 1px solid rgba(18, 20, 23, 0.1);\n    margin-right: 6px;\n    padding-right: 6px;\n  }\n"]))),F=e(3329);function z(n){n.open,n.onClose,n.data;return(0,F.jsx)("div",{})}var L,M=e(8578),P=e(7488),S=e(7237),T=e(3794),I=g.Z.div(L||(L=(0,u.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),X=(0,T.ZP)(S.Z)({fill:"#3470FF"}),Y=(0,T.ZP)(P.Z)({fill:"#FFFFFFCC"}),_=e(4420),E=e(6351),H=e(5440);function N(n){var t=n.data,e=(0,_.I0)(),i=(0,_.v9)(E.T).favorites.some((function(n){return n.id===t.id}));return(0,F.jsx)(I,{children:(0,F.jsx)(M.Z,{icon:(0,F.jsx)(Y,{}),checkedIcon:(0,F.jsx)(X,{}),checked:i,onChange:function(){e(i?(0,H.Ni)(t):(0,H.a3)(t))}})})}function O(n){var t=n.data,e=(0,x.useState)(!1),i=(0,p.Z)(e,2),r=i[0],o=i[1],a=t.make,l=t.model,c=t.year,d=t.rentalPrice,s=t.address,f=t.rentalCompany,u=t.type,g=t.mileage,L=t.accessories,M=t.img;return(0,F.jsxs)(Z,{children:[(0,F.jsxs)(j,{children:[(0,F.jsx)(N,{data:t}),(0,F.jsx)(v,{src:M,alt:"Car"})]}),(0,F.jsxs)(m,{children:[(0,F.jsxs)(w,{children:[a," ",(0,F.jsx)(y,{children:l}),", ",c]}),(0,F.jsx)(b,{children:d})]}),(0,F.jsxs)(k,{children:[(0,F.jsx)(C,{children:null===s||void 0===s?void 0:s.split(",")[1]}),(0,F.jsx)(C,{children:null===s||void 0===s?void 0:s.split(",")[2]}),(0,F.jsx)(C,{children:f}),(0,F.jsx)(C,{children:u}),(0,F.jsx)(C,{children:l}),(0,F.jsx)(C,{children:g}),(0,F.jsx)(C,{children:null===L||void 0===L?void 0:L[0]})]}),(0,F.jsx)(h.Z,{onClick:function(){return o(!0)},text:"Learn more",width:"274px"}),r&&(0,F.jsx)(z,{open:r,onClose:function(){return o(!1)},data:t})]})}},8291:function(n,t,e){e.d(t,{Z:function(){return x}});var i,r,o,a=e(168),l=e(6088),c=e(1087),d=l.Z.header(i||(i=(0,a.Z)(["\n  border-bottom: 1px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100%;\n  background-color: #f1f4f5;\n"]))),s=l.Z.nav(r||(r=(0,a.Z)(["\n  display: flex;\n  gap: 100px;\n"]))),f=(0,l.Z)(c.OL)(o||(o=(0,a.Z)(["\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-family: 'Manrope';\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 600;\n  color: #000000;\n  text-decoration: none;\n  position: relative;\n\n  &::after {\n    content: '';\n    display: block;\n    height: 2px;\n    width: 0;\n    background-color: #3470ff;\n    position: absolute;\n    bottom: 5px;\n    left: 50%;\n    transform: translateX(-50%);\n    transition: width 0.3s ease-in-out;\n  }\n\n  &:hover::after {\n    width: 100%;\n  }\n\n  &.active {\n    color: #3470ff;\n    &::after {\n      width: 100%;\n    }\n  }\n"]))),p=e(3329);function x(){return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(d,{children:(0,p.jsxs)(s,{children:[(0,p.jsx)(f,{to:"/",children:"Home"}),(0,p.jsx)(f,{to:"/catalog",children:"Catalog"}),(0,p.jsx)(f,{to:"/favorites",children:"Favorites"})]})})})}},4055:function(n,t,e){e.d(t,{fr:function(){return s},tX:function(){return d},zY:function(){return c}});var i,r,o,a=e(168),l=e(6088),c=l.Z.div(i||(i=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding-left: 128px;\n  padding-right: 128px;\n  padding-top: 40px;\n"]))),d=l.Z.ul(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 50px 29px;\n  margin-top: 50px;\n  width: 1184px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),s=l.Z.a(o||(o=(0,a.Z)(["\n  color: #3470ff;\n  font-family: 'Manrope';\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.5;\n  text-decoration-line: underline;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 100px;\n  padding-bottom: 100px;\n  cursor: pointer;\n\n  &:hover {\n    color: #0b44cd;\n  }\n"])))},7634:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var i,r,o,a=e(3433),l=e(9439),c=e(6283),d=e(168),s=e(6088),f=s.Z.div(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding-left: 128px;\n  padding-right: 128px;\n  padding-top: 60px;\n"]))),p=s.Z.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 50px 29px;\n  margin-top: 50px;\n  width: 1184px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),x=s.Z.p(o||(o=(0,d.Z)(["\n  font-family: 'Manrope';\n  font-size: 30px;\n  font-style: normal;\n  font-weight: 600;\n  color: #000000;\n"]))),h=e(4420),u=e(2791),g=e(6351),Z=e(4055),j=e(8291),v=e(3329);function m(){var n=(0,h.v9)(g.T),t=(0,u.useState)(1),e=(0,l.Z)(t,2),i=e[0],r=e[1],o=(0,u.useState)([]),d=(0,l.Z)(o,2),s=d[0],m=d[1];return(0,u.useEffect)((function(){var t=n.favorites.slice(0,8);m(t)}),[n]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(j.Z,{}),(0,v.jsx)(f,{children:(0,v.jsxs)(p,{children:[s.length?s.map((function(n,t){return(0,v.jsx)(c.Z,{data:n},t)})):(0,v.jsx)(x,{children:"Your favorites are currently empty..."}),n.favorites.length>s.length&&(0,v.jsx)(Z.fr,{variant:"text",onClick:function(){var t=8*i,e=n.favorites.slice(t,t+8);m([].concat((0,a.Z)(s),(0,a.Z)(e))),r(i+1)},children:"Load more"})]})})]})}},6351:function(n,t,e){e.d(t,{T:function(){return i}});var i=function(n){return n.favorites}}}]);
//# sourceMappingURL=634.cb71e2ed.chunk.js.map