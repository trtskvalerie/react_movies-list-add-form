(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(7),c=i.n(a),s=(i(14),i(6)),n=i(2),l=i(1),r=i(9),d=(i(15),i(16),i(0)),o=function(e){var t=e.title,i=e.description,a=e.imgUrl,c=e.imdbUrl;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{src:a,alt:"Film logo"})})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-left",children:Object(d.jsx)("figure",{className:"image is-48x48",children:Object(d.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(d.jsx)("div",{className:"media-content",children:Object(d.jsx)("p",{className:"title is-8",children:t})})]}),Object(d.jsxs)("div",{className:"content",children:[i,Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:c,children:"IMDB"})]})]})]})},m=function(e){var t=e.movies;return Object(d.jsx)("div",{className:"movies",children:t.map((function(e){return Object(d.jsx)(o,Object(r.a)({},e),e.imdbId)}))})},j=(i(18),function(e){var t=e.onAdd,i=Object(l.useState)(""),a=Object(n.a)(i,2),c=a[0],s=a[1],r=Object(l.useState)(""),o=Object(n.a)(r,2),m=o[0],j=o[1],b=Object(l.useState)(""),h=Object(n.a)(b,2),u=h[0],O=h[1],p=Object(l.useState)(""),g=Object(n.a)(p,2),v=g[0],x=g[1],w=Object(l.useState)(""),f=Object(n.a)(w,2),M=f[0],N=f[1],_=Object(l.useState)(!0),B=Object(n.a)(_,2),U=B[0],I=B[1],y=Object(l.useState)(!0),S=Object(n.a)(y,2),T=S[0],D=S[1],z=Object(l.useState)(!0),A=Object(n.a)(z,2),k=A[0],V=A[1],Y=Object(l.useState)(!0),C=Object(n.a)(Y,2),Z=C[0],F=C[1],L=Object(l.useState)(!1),X=Object(n.a)(L,2),R=X[0],E=X[1],J=Object(l.useState)(!1),P=Object(n.a)(J,2),G=P[0],Q=P[1],W=Object(l.useState)(!1),$=Object(n.a)(W,2),H=$[0],q=$[1],K=Object(l.useState)(!1),ee=Object(n.a)(K,2),te=ee[0],ie=ee[1],ae=new RegExp(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w_-]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/);return Object(d.jsxs)("form",{className:"add-movie",onSubmit:function(e){e.preventDefault(),t({title:c,description:m,imgUrl:u,imdbUrl:v,imdbId:M})},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",id:"title",name:"title",value:c,placeholder:"Title",onBlur:function(){R||E(!0),c||I(!0)},onChange:function(e){I(!1),s(e.target.value)}}),R&&U&&Object(d.jsx)("p",{className:"add-movie__error",children:"Please enter a title"})]}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"text",id:"description",name:"description",value:m,placeholder:"Description",onChange:function(e){j(e.target.value)}})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",id:"imgUrl",name:"imgUrl",value:u,placeholder:"Image URL",onBlur:function(){G||Q(!0),u.match(ae)||D(!0)},onChange:function(e){D(!1),O(e.target.value)}}),G&&T&&Object(d.jsx)("p",{className:"add-movie__error",children:"Please enter a valid URL"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",id:"imdbUrl",name:"imdbUrl",value:v,placeholder:"IMDB URL",onBlur:function(){H||q(!0),v.match(ae)||V(!0)},onChange:function(e){V(!1),x(e.target.value)}}),H&&k&&Object(d.jsx)("p",{className:"add-movie__error",children:"Please enter a valid URL"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",id:"imdbId",name:"imdbId",value:M,placeholder:"IMDB ID",onBlur:function(){te||ie(!0),M||F(!0)},onChange:function(e){F(!1),N(e.target.value)}}),te&&Z&&Object(d.jsx)("p",{className:"add-movie__error",children:"Please enter an IMDB ID"})]}),Object(d.jsx)("button",{type:"submit",disabled:U||T||Z||k,children:"Add movie"})]})}),b=i(8),h=(i(19),function(){var e=Object(l.useState)(Object(s.a)(b)),t=Object(n.a)(e,2),i=t[0],a=t[1];return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"page-content",children:Object(d.jsx)(m,{movies:i})}),Object(d.jsxs)("div",{className:"sidebar",children:[Object(d.jsx)("h1",{className:"sidebar__title",children:"Add movie"}),Object(d.jsx)(j,{onAdd:function(e){a([].concat(Object(s.a)(i),[e]))}})]})]})});c.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.cd969fe0.chunk.js.map