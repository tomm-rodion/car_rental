"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[639],{9639:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r,a,i,l,o,c,s,u,p,d=t(3433),f=t(9439),x=t(2791),m=t(6023),g=t(1774),h=t(8291),Z=t(8040),b=t(1413),v=t(177),j=t(9085),k=t(2940),M=t(168),y=t(6088),S=y.Z.div(r||(r=(0,M.Z)(["\n  display: flex;\n  align-items: flex-end;\n  margin-top: 50px;\n  gap: 8px;\n"]))),C=y.Z.div(a||(a=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),F=y.Z.div(i||(i=(0,M.Z)(["\n  display: flex;\n  position: relative;\n  height: 48px;\n"]))),P=y.Z.form(l||(l=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),w=y.Z.label(o||(o=(0,M.Z)(["\n  font-size: 14px;\n  color: rgba(138, 138, 137, 1);\n  font-family: 'Manrope';\n  padding-left: 5px;\n  margin-bottom: 8px;\n"]))),z=y.Z.input(c||(c=(0,M.Z)(["\n  display: block;\n  width: 160px;\n  height: 48px;\n  border: none;\n  border-right: 1px solid rgba(138, 138, 137, 0.2);\n  background-color: rgba(247, 247, 251, 1);\n  border-radius: 14px 0 0 14px;\n  padding-left: 0;\n  text-indent: 70px;\n  font-family: 'Manrope';\n  color: rgba(18, 20, 23, 1);\n  font-size: 18px;\n\n  &:focus {\n    outline-color: #3470ff;\n  }\n"]))),I=y.Z.input(s||(s=(0,M.Z)(["\n  display: block;\n  width: 160px;\n  height: 48px;\n  border: none;\n  background-color: rgba(247, 247, 251, 1);\n  border-radius: 0 14px 14px 0;\n  padding-left: 0;\n  text-indent: 45px;\n  font-family: 'Manrope';\n  color: rgba(18, 20, 23, 1);\n  font-size: 18px;\n\n  &:focus {\n    outline-color: #3470ff;\n  }\n"]))),E=y.Z.span(u||(u=(0,M.Z)(["\n  position: absolute;\n  display: block;\n  left: 20px;\n  top: 15px;\n  z-index: 9;\n  font-family: 'Manrope';\n  color: rgba(18, 20, 23, 1);\n  font-size: 18px;\n"]))),T=y.Z.span(p||(p=(0,M.Z)(["\n  position: absolute;\n  display: block;\n  left: 180px;\n  top: 15px;\n  z-index: 9;\n  font-family: 'Manrope';\n  color: rgba(18, 20, 23, 1);\n  font-size: 18px;\n"]))),$=t(3329),A={control:function(e){return(0,b.Z)((0,b.Z)({},e),{},{width:"224px",height:"48px",borderColor:"rgba(18, 20, 23, 0.2)",border:"none",borderRadius:"14px",padding:"8px",fontSize:"16px",fontFamily:"Manrope",backgroundColor:"rgba(247, 247, 251, 1)",appearance:"none"})},option:function(e,n){var t=n.isFocused;return(0,b.Z)((0,b.Z)({},e),{},{color:t?"black":"rgba(18, 20, 23, 0.2)",fontFamily:"Manrope"})},placeholder:function(e){return(0,b.Z)((0,b.Z)({},e),{},{color:"rgba(18, 20, 23, 1)"})},dropdownIndicator:function(e,n){return(0,b.Z)((0,b.Z)({},e),{},{transition:"all .2s ease",transform:n.selectProps.menuIsOpen?"rotate(180deg)":null})}},L=function(e){var n=e.makes,t=e.prices,r=e.onFilterChange,a=(0,x.useState)(""),i=(0,f.Z)(a,2),l=i[0],o=i[1],c=(0,x.useState)(null),s=(0,f.Z)(c,2),u=s[0],p=s[1],d=(0,x.useState)(""),m=(0,f.Z)(d,2),g=m[0],h=m[1],Z=(0,x.useState)(""),b=(0,f.Z)(Z,2),M=b[0],y=b[1],L=(0,x.useState)(""),O=(0,f.Z)(L,2),_=O[0],B=O[1],N=n.map((function(e){return{value:e,label:e}})),R=Array.from({length:48},(function(e,n){var t=30+10*n;return{value:t,label:"".concat(t)}})),U=t.filter((function(e){return e<=u})),X=function(e){return e.toString().replace(/,/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",")},Y=function(e,n){n(e.target.value)};return(0,$.jsxs)(S,{children:[(0,$.jsxs)(C,{children:[(0,$.jsx)(w,{htmlFor:"nameSelect",children:"Car brand"}),(0,$.jsx)(v.ZP,{id:"nameSelect",placeholder:"Enter the text",value:l,isClearable:!0,onChange:function(e){return o(e)},options:N,styles:A,components:{IndicatorSeparator:function(){return null}}})]}),(0,$.jsxs)(C,{children:[(0,$.jsx)(w,{htmlFor:"priceSelect",children:"Price / 1 hour"}),(0,$.jsx)(v.ZP,{id:"priceSelect",placeholder:"To $",value:u?{value:u,label:g}:null,onChange:function(e){p(e.value),h(e.label)},options:R,styles:A,components:{IndicatorSeparator:function(){return null}}})]}),(0,$.jsxs)(P,{children:[(0,$.jsx)(w,{children:"Car mileage / km"}),(0,$.jsxs)(F,{children:[(0,$.jsx)(z,{type:"text",value:X(M),onChange:function(e){return Y(e,y)}}),(0,$.jsx)(E,{children:"From"}),(0,$.jsx)(I,{type:"text",value:X(_),onChange:function(e){return Y(e,B)}}),(0,$.jsx)(T,{children:"To"})]})]}),(0,$.jsx)(k.Z,{text:"Search",onClick:function(){var e=parseInt(M.replace(/,/g,""),10),n=parseInt(_.replace(/,/g,""),10);if(e>n)j.Am.error("The maximum mileage must exceed the minimum mileage.");else{var t={make:l,filteredPrices:U.map((function(e){return{value:e,label:"".concat(e)}})),minMileage:e,maxMileage:n};r(t)}},width:"135px"})]})},O=t(4055);function _(){var e=(0,x.useState)(1),n=(0,f.Z)(e,2),t=n[0],r=n[1],a=(0,x.useState)([]),i=(0,f.Z)(a,2),l=i[0],o=i[1],c=(0,m.Uh)(t),s=c.data,u=c.error,p=c.isLoading,b=c.isFetching,v=(0,m.FP)().data,j=(0,x.useState)({make:"",filteredPrices:[],minMileage:"",maxMileage:""}),k=(0,f.Z)(j,2),M=k[0],y=k[1],S=(0,x.useState)(null),C=(0,f.Z)(S,2),F=C[0],P=C[1],w=(0,x.useState)(!1),z=(0,f.Z)(w,2),I=z[0],E=z[1];(0,x.useEffect)((function(){s&&o((function(e){return[].concat((0,d.Z)(e),(0,d.Z)(s))}))}),[s]),(0,x.useEffect)((function(){if(I)if(M.make||M.filteredPrices.length>0||M.minMileage||M.maxMileage){var e=v.filter((function(e){return(!M.make||e.make===M.make.value)&&(!(M.filteredPrices.length>0&&!M.filteredPrices.some((function(n){return n.value===e.rentalPrice.replace("$","")})))&&(!(M.minMileage&&e.mileage<M.minMileage)&&!(M.maxMileage&&e.mileage>M.maxMileage)))}));P(e)}else P([])}),[M,v,I]);var T=v?(0,d.Z)(new Set(v.map((function(e){return e.make})))):[],A=v?(0,d.Z)(new Set(v.map((function(e){return e.rentalPrice.replace("$","")})))):[],_=v?(0,d.Z)(new Set(v.map((function(e){return e.mileage})))):[],B=Math.min.apply(Math,(0,d.Z)(_)),N=Math.max.apply(Math,(0,d.Z)(_));return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(h.Z,{}),(0,$.jsx)(O.zY,{children:(0,$.jsx)(L,{makes:T,prices:A,minMileage:B,maxMileage:N,onFilterChange:function(e){y(e),E(!0)},filters:M})}),(0,$.jsxs)(O.tX,{children:[I?null!==F&&F.length>0?F.map((function(e,n){return(0,$.jsx)(Z.Z,{data:e},n)})):(0,$.jsx)("div",{children:"No matches found based on the chosen criteria."}):u?(0,$.jsx)($.Fragment,{children:"Oops, there was an error..."}):p?(0,$.jsx)(g.a,{}):l.length>0?l.map((function(e,n){return(0,$.jsx)(Z.Z,{data:e},n)})):null,!I&&s&&s.length>=12&&(0,$.jsx)(O.fr,{variant:"text",onClick:function(){r(t+1)},disabled:b,children:"Load more"})]})]})}}}]);
//# sourceMappingURL=639.2cd50699.chunk.js.map