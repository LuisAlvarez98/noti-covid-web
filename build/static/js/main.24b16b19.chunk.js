(this.webpackJsonpnoticovid=this.webpackJsonpnoticovid||[]).push([[0],{65:function(e,t,c){},66:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var n,s,i,r,a,o,j,d,l=c(0),h=c.n(l),b=c(22),x=c.n(b),O=(c(65),c(55)),u=c(7),p=c(16),m=(c(66),c(17)),g=c(120),f=c.p+"static/media/jesus.c5f3cca3.png",v=c.p+"static/media/andrea.26fe7c1d.png",w=c.p+"static/media/avatar.26a76b98.jpg",y=c(2),C=m.a.div(n||(n=Object(p.a)(["\n  padding: 32px;\n"]))),S=m.a.img(s||(s=Object(p.a)(["\n  border-radius: 64px;\n"]))),N=m.a.p(i||(i=Object(p.a)(["\n  font-weight: bold;\n"]))),F=function(){return Object(y.jsx)("div",{style:{textAlign:"center"},children:Object(y.jsxs)(C,{children:[Object(y.jsx)("h1",{children:"Sobre nosotros"}),Object(y.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus"}),Object(y.jsx)("p",{children:" Curabitur bibendum eros quis tortor bibendum rutrum."}),Object(y.jsx)("p",{children:" porttitor orci, a faucibus tortor sollicitudin vitae."}),Object(y.jsxs)(g.a,{container:!0,spacing:0,alignItems:"center",justify:"center",alignContent:"center",style:{marginTop:"64px"},children:[Object(y.jsxs)(g.a,{item:!0,xs:12,md:4,children:[Object(y.jsx)(S,{src:f,style:{width:128,height:128}}),Object(y.jsx)(N,{children:"Jesus"}),Object(y.jsx)("p",{children:"Programador"})]}),Object(y.jsxs)(g.a,{item:!0,xs:12,md:4,children:[Object(y.jsx)(S,{src:v,style:{width:128,height:128}}),Object(y.jsx)(N,{children:"Andrea"}),Object(y.jsx)("p",{children:"Programadora"})]}),Object(y.jsxs)(g.a,{item:!0,xs:12,md:4,children:[Object(y.jsx)(S,{src:w,style:{width:128,height:128}}),Object(y.jsx)(N,{children:"Luis F. Alvarez"}),Object(y.jsx)("p",{children:"Programador"})]}),Object(y.jsxs)(g.a,{item:!0,xs:12,md:4,children:[Object(y.jsx)(S,{src:f,style:{width:128,height:128}}),Object(y.jsx)(N,{children:"Jesus"}),Object(y.jsx)("p",{children:"Programador"})]}),Object(y.jsxs)(g.a,{item:!0,xs:12,md:4,children:[Object(y.jsx)(S,{src:f,style:{width:128,height:128}}),Object(y.jsx)(N,{children:"Jesus"}),Object(y.jsx)("p",{children:"Programador"})]})]})]})})},I=c(33),A=c.n(I),L=c(53),P=c(27),z=c(124),D=c(128),k=c(127),J=c(123),G=c(125),T=c(126),B=c(96),E=c(122),M=c(54),V=c.n(M),q=m.a.h1(r||(r=Object(p.a)(["\n  color: green;\n  font-size: 42px;\n"]))),R=m.a.h1(a||(a=Object(p.a)(["\n  color: green;\n  font-size: 24px;\n"]))),W=m.a.h1(o||(o=Object(p.a)(["\n  color: orange;\n  font-size: 24px;\n"]))),_=m.a.h1(j||(j=Object(p.a)(["\n  color: red;\n  font-size: 24px;\n"]))),H=m.a.div(d||(d=Object(p.a)(["\n  padding: 32px;\n"]))),K=Object(E.a)({table:{minWidth:650}});function Q(e,t){return{municipality:e,cases:t}}var U=function(){var e=K(),t=Object(l.useState)([]),c=Object(P.a)(t,2),n=c[0],s=c[1],i=Object(l.useState)({confirmados:"",defunciones:"",sospechosos:"",negativos:"",activos:""}),r=Object(P.a)(i,2),a=r[0],o=r[1];Object(l.useEffect)((function(){j()}),[]);var j=function(){var e=Object(L.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("https://noticovid.herokuapp.com/api/data").then((function(e){o(e.data.data.datosGenerales),s(e.data.data.listaDatosMunicipios)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Q("Monterrey",159),Q("Guadalupe",237),Q("Apodaca",262),Q("San Nicolas",305),Q("Escobedo",356);return Object(y.jsxs)("div",{style:{textAlign:"center"},children:[Object(y.jsxs)(H,{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{children:"Casos COVID19 en Nuevo Le\xf3n"}),Object(y.jsx)("h2",{children:"Casos totales:"}),Object(y.jsx)(q,{children:a.confirmados})]}),Object(y.jsxs)(g.a,{container:!0,children:[Object(y.jsxs)(g.a,{item:!0,xs:12,md:3,children:[Object(y.jsx)("h4",{children:"Casos activos:"}),Object(y.jsx)(R,{children:a.activos})]}),Object(y.jsxs)(g.a,{item:!0,xs:12,md:3,children:[Object(y.jsx)("h4",{children:"Negativos:"}),Object(y.jsx)(W,{children:a.negativos})]}),Object(y.jsxs)(g.a,{item:!0,xs:12,md:3,children:[Object(y.jsx)("h4",{children:"Defunciones:"}),Object(y.jsx)(_,{children:a.defunciones})]}),Object(y.jsxs)(g.a,{item:!0,xs:12,md:3,children:[Object(y.jsx)("h4",{children:"Sospechosos:"}),Object(y.jsx)(_,{children:a.sospechosos})]})]}),Object(y.jsx)("h2",{style:{marginTop:"2.5em",textAlign:"left"},children:"Casos COVID19 por municipio:"}),Object(y.jsx)(J.a,{component:B.a,children:Object(y.jsxs)(z.a,{className:e.table,size:"small","aria-label":"a dense table",children:[Object(y.jsx)(G.a,{children:Object(y.jsxs)(T.a,{children:[Object(y.jsx)(k.a,{children:"Casos por municipio"}),Object(y.jsx)(k.a,{align:"center",children:"Confirmados"}),Object(y.jsx)(k.a,{align:"center",children:"Defunciones"}),Object(y.jsx)(k.a,{align:"center",children:"Sospechosos"})]})}),Object(y.jsx)(D.a,{children:n.map((function(e){return Object(y.jsxs)(T.a,{children:[Object(y.jsx)(k.a,{component:"th",scope:"row",children:e.municipio}),Object(y.jsx)(k.a,{align:"center",children:e.confirmados}),Object(y.jsx)(k.a,{align:"center",children:e.defunciones}),Object(y.jsx)(k.a,{align:"center",children:e.sospechosos})]},e.municipio)}))})]})})]}),Object(y.jsxs)("p",{children:["Fuente:"," ",Object(y.jsx)("a",{href:"http://www.gncys.com/covid19/covid19-estados.aspx?edoId=NL",target:"_new",children:"http://www.gncys.com/covid19/covid19-estados.aspx?edoId=NL"})," "]})]})},X=c(133),Y=c(129),Z=c(130),$=c(131),ee=c(132),te=Object(E.a)((function(e){return Object(X.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"left"}})})),ce=function(){var e=te();return Object(y.jsx)("div",{className:e.root,children:Object(y.jsx)(Y.a,{position:"static",style:{backgroundColor:"#FF7676"},children:Object(y.jsxs)(Z.a,{children:[Object(y.jsx)($.a,{variant:"h6",className:e.title,children:"NotiCovid"}),Object(y.jsx)(ee.a,{color:"inherit",href:"/",children:"Inicio"}),Object(y.jsx)(ee.a,{color:"inherit",href:"/about",children:"Sobre nosotros"})]})})})};function ne(){return Object(y.jsx)(O.a,{children:Object(y.jsxs)("div",{children:[Object(y.jsx)(ce,{}),Object(y.jsxs)(u.c,{children:[Object(y.jsx)(u.a,{path:"/about",children:Object(y.jsx)(F,{})}),Object(y.jsx)(u.a,{path:"/",children:Object(y.jsx)(U,{})})]})]})})}var se=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,135)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};x.a.render(Object(y.jsx)(h.a.StrictMode,{children:Object(y.jsx)(ne,{})}),document.getElementById("root")),se()}},[[95,1,2]]]);
//# sourceMappingURL=main.24b16b19.chunk.js.map