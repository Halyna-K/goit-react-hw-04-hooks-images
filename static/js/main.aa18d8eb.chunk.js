(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{14:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2bkPr"}},15:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},25:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},29:function(e,t,a){e.exports={Button:"Button_Button__3R1xi"}},35:function(e,t,a){},36:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__LuSsJ",SearchForm:"SearchBar_SearchForm__1OsD8",SearchFormButton:"SearchBar_SearchFormButton__1hCEk",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__2pz7t",SearchFormInput:"SearchBar_SearchFormInput__3xRsP"}},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),s=(a(35),a(3)),u=(a(36),function(e){var t=Object(n.useState)(e),a=Object(s.a)(t,2),r=a[0],c=a[1];return[r,function(){c((function(e){return!e}))}]}),i=a(5),l=a.n(i),h=a(1);function m(e){var t=e.getSearchValues,a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],o=r[1],u=Object(n.useState)(12),i=Object(s.a)(u,2),m=i[0],g=i[1];return Object(h.jsx)("header",{className:l.a.Searchbar,children:Object(h.jsxs)("form",{className:l.a.SearchForm,onSubmit:function(e){e.preventDefault(),console.log("BEFORE FETCH",c,m),t({searchValue:c,perPage:m}),o("")},children:[Object(h.jsx)("button",{type:"submit",className:l.a.SearchFormButton,children:Object(h.jsx)("span",{className:l.a.SearchFormButtonLabel,children:"Search"})}),Object(h.jsx)("input",{className:l.a.SearchFormInput,type:"text",name:"searchValue",value:c,onChange:function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"searchValue":o(n);break;case"perPage":g(n)}},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}var g=a(16),b=a(25),j=a.n(b),p=a(12),f=a.n(p),O=a(26),d=a(27),_=a(28),y=a(13),v=a.n(y),x=function(){function e(t,a){Object(d.a)(this,e),this.base_url=t,this.api_key=a,this._query="",this._page=1,this._perPage=12,this.endPoint=""}return Object(_.a)(e,[{key:"searchQuery",get:function(){return this._query},set:function(e){return this._query=e}},{key:"page",get:function(){return this._page},set:function(e){return this._page+=e}},{key:"resetPage",value:function(){return this._page=1}},{key:"perPage",get:function(){return this._perPage},set:function(e){return this._perPage=e}},{key:"searchPhotos",value:function(){var e=Object(O.a)(f.a.mark((function e(){var t,a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v.a.defaults.baseURL=this.base_url,t="?key=".concat(this.api_key,"&q=").concat(this.query,"&page=").concat(this.page,"&per_page=").concat(this.perPage),a=this.endPoint+t,e.prev=3,e.next=6,v.a.get(a);case 6:return n=e.sent,r=n.data.hits,e.abrupt("return",r);case 11:return e.prev=11,e.t0=e.catch(3),e.abrupt("return",e.t0.message);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),S=a(14),I=a.n(S),k=function(e){var t=e.image,a=e.onImageClick;return Object(h.jsx)("li",{className:I.a.ImageGalleryItem,children:Object(h.jsx)("img",{src:t.webformatURL,alt:t.tags,className:I.a.ImageGalleryItemImage,onClick:function(){return a(t.largeImageURL)}})},t.id)},P=a(29),B=a.n(P),w=function(e){var t=e.onClick;return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("button",{type:"button",className:B.a.Button,onClick:t,children:"load more"})})},F=new x("https://pixabay.com/api/","23194515-4229c06a71e7a36cb0b196559");function C(e){var t=e.searchValue,a=e.perPage,r=e.onImageClick,c=Object(n.useState)([]),o=Object(s.a)(c,2),u=o[0],i=o[1],l=Object(n.useState)(null),m=Object(s.a)(l,2),b=m[0],p=m[1];Object(n.useEffect)((function(){t.trim()&&(F.resetPage(),F.query=t,F.perPage=a,F.searchPhotos().then((function(e){i(e)})).catch((function(e){p(b),console.log(e)})))}),[t,a,i,b]),1!==F.page&&setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ul",{className:j.a.ImageGallery,children:u.length>0&&u.map((function(e){return Object(h.jsx)(k,{image:e,src:e.largeImageURL,onImageClick:r},e.id)}))}),u.length>=12&&Object(h.jsx)(w,{onClick:function(){F.page=1,F.searchPhotos().then((function(e){i((function(t){return[].concat(Object(g.a)(t),Object(g.a)(e))}))})).catch((function(e){p(b),console.log(e)}))}})]})}var N=a(15),E=a.n(N);function G(e){var t=e.children,a=e.toggleModal;Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&a()};return Object(c.createPortal)(Object(h.jsx)("div",{className:E.a.Overlay,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(h.jsx)("div",{className:E.a.Modal,children:t})}),document.getElementById("modalRoot"))}var L=a(30),M=a.n(L);function R(){return Object(h.jsx)(M.a,{className:"container",type:"Grid",color:"#3f51b5",height:100,width:100,timeout:2e3})}var V=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(s.a)(c,2),i=o[0],l=o[1],g=Object(n.useState)(12),b=Object(s.a)(g,2),j=b[0],p=b[1],f=Object(n.useState)(""),O=Object(s.a)(f,2),d=O[0],_=O[1],y=u(!1),v=Object(s.a)(y,2),x=v[0],S=v[1],I=u(!1),k=Object(s.a)(I,2),P=k[0],B=k[1];return Object(n.useEffect)((function(e){e!==a&&r(a)}),[a,r]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{getSearchValues:function(e){var t=e.searchValue,a=e.perPage;B(!P),l(t),p(a)}}),Object(h.jsx)(C,{searchValue:i,perPage:j,onImageClick:function(e){_(e),S(!x)}}),P&&Object(h.jsx)(R,{}),x&&Object(h.jsx)(G,{toggleModal:S,children:Object(h.jsx)("img",{src:d,alt:""})})]})};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(V,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.aa18d8eb.chunk.js.map