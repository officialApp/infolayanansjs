(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e00e4b30"],{"27ba":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.busy?a("Busy"):t._e(),a("imageku",{staticStyle:{"z-index":"1000"}}),a("div",{staticClass:"text-center d-sm-none"},[t.menuTrigger?t._e():a("v-touch",{staticStyle:{width:"40px",background:"transparent",height:"900px",position:"absolute",left:"0","z-index":"10001"},on:{swiperight:t.onSwipeRight}})],1),a("div",{staticClass:"container-fluid anim shadow-lg",staticStyle:{background:"#343A40"}},[a("div",{staticClass:"row anim"},[a("div",{staticClass:"anim col-4 col-sm-3 col-md-2",staticStyle:{position:"fixed",padding:"0",margin:"0","min-height":"760px"},style:{background:t.bgleft1}},[a("div",{staticClass:"text-center text-white font-bold text-times text-xs",staticStyle:{height:"50px",margin:"none","padding-top":"10px","border-bottom":"1px solid gray"},style:{background:t.bgleft2}},[a("span",{staticClass:"pt-2 text-md pr-2 text-uppercase"},[t._v("HALAMAN "+t._s(t.$store.state.users.pilih))]),a("span",{staticClass:"typcn typcn-thermometer"})]),a("div",{staticClass:"text-center",style:{background:t.bgleft2}},[a("br"),a("img",{staticClass:"kinoLightBox img-fluid  ",staticStyle:{width:"40%"},attrs:{src:s("5138")}}),a("br"),a("br"),a("p",{staticClass:"font-times font-bold"},[t._v("SMA Negeri 1 Tambang Ulung")]),a("br"),a("div",{staticClass:"bord hover:bg-red text-left pl-3 animated fadeInLeft",staticStyle:{"border-top":"2px solid black",color:"white"},on:{click:function(e){return t.$router.push("/sekolah/siswa")}}},[a("span",{staticClass:"typcn typcn-home"}),t._v(" Dashboard "),a("span",{staticClass:"typcn typcn-arrow-down float-right"})]),a("div",{staticClass:"bord hover:bg-red text-left pl-3 animated fadeInLeft",staticStyle:{"border-top":"2px solid black",color:"white"},on:{click:function(e){return t.muncul(e)}}},[a("span",{staticClass:"typcn typcn-user-add-outline"}),t._v(" Menu Siswa "),a("span",{staticClass:"typcn typcn-arrow-down float-right"})]),a("ul",{staticClass:"isaktif pl-4 anim mb-3 text-white"},[a("li",{staticClass:"bord hover:bg-red text-left pl-3 animated fadeInLeft",on:{click:function(e){return t.$router.push("/sekolah/siswa/jadwal-belajar")}}},[t._v("Jadwal Belajar")]),a("li",{staticClass:"bord hover:bg-red text-left pl-3 animated fadeInLeft",on:{click:function(e){return t.$router.push("/sekolah/siswa/list-tugas")}}},[t._v("List Tugas")])])])]),a("div",{staticClass:"bg-black anim",class:{"col-8 col-sm-9 col-md-10 offset-4 offset-sm-3 offset-md-2":t.menuTrigger,"col-sm-12":!t.menuTrigger}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12",staticStyle:{padding:"0",margin:"0"}},[t.float_menu?a("span",{staticClass:"typcn typcn-arrow-back cursor-pointer",staticStyle:{"font-size":"30px",position:"fixed",top:"20px","z-index":"30"},on:{click:function(e){t.menuTrigger=!t.menuTrigger}}}):t._e(),a("div",{staticClass:"pt-2 shadow-lg",staticStyle:{height:"50px",margin:"none",padding:"3px"},style:{background:t.bgrighttop}},[a("button",{staticClass:"btn btn-sm btn-dark ml-3",staticStyle:{"border-color":"black"},attrs:{type:"button"},on:{click:function(e){t.menuTrigger=!t.menuTrigger}}},[t._m(0)]),a("span",{staticClass:"text-black font-bold text-uppercase font-times pl-5 text-sm"},[t._v("Selamat Datang Di Website Akademik SMA Negeri 1 Tambang Ulung")]),[a("div",{staticStyle:{position:"absolute",right:"40px",top:"5px"}},[a("button",{staticClass:"btn btn-sm btn-dark mr-2",attrs:{type:"button"},on:{click:function(e){t.menuKanan=!t.menuKanan}}},[t._m(1)]),a("button",{staticClass:"btn btn-sm btn-danger mr-2",attrs:{type:"button"},on:{click:function(e){t.$store.state.wali=!1,t.$store.state.wali_kelas=!1,t.$store.dispatch("logout")}}},[t._m(2)])])]],2)]),a("div",{staticClass:"col-sm-12",staticStyle:{background:"#eceff4","min-height":"760px"},on:{click:function(e){t.menuTrigger=!1,t.menuKanan=!1}}},[a("div",{staticClass:"sm:mt-2 sm:p-2"},[a("router-view",{directives:[{name:"myimage",rawName:"v-myimage"},{name:"reload",rawName:"v-reload"}],staticClass:"shadow-lg p-3 rounded-lg",staticStyle:{"z-index":"10",background:"white"}})],1)])])])]),a("transition",{attrs:{tag:"div","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutRight",mode:"in-out"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.menuKanan,expression:"menuKanan"}],staticClass:"bg-white p-3",staticStyle:{position:"fixed","z-index":"11",right:"0",top:"0",width:"210px",height:"700px","box-shadow":"1px 1px 2px 1.5px black"}},[a("p",{staticClass:"text-center"},[t._v("Profiles")]),a("hr",{staticClass:"style16"}),a("div",{staticClass:"text-center"},[t.$store.state.users.gambar.length>10?a("div",[a("img",{staticClass:"kinoLightBox img-fluid rounded-top z-depth-2 shadow-lg",staticStyle:{"border-radius":"20px",height:"170px",width:"150px"},attrs:{src:"https://infolayanans.space/"+this.$store.state.users.gambar,alt:"top"}})]):a("div",[a("img",{staticClass:"kinoLightBox img-fluid rounded-top z-depth-2 shadow-lg",staticStyle:{"border-radius":"20px",height:"170px",width:"150px"},attrs:{src:"https://bodybigsize.com/wp-content/uploads/2020/02/noimage-8.png",alt:"top"}})])]),a("hr",{staticClass:"style16"}),a("p",{staticClass:"text-center text-uppercase"},[t._v(" "+t._s(t.$store.state.users.nama_guru)+" ")]),a("p",{staticClass:"text-center"},[t._v(" "+t._s(t.$store.state.users.nip)+" ")]),a("br"),a("tr",[a("td",{staticClass:"text-uppercase font-times text-sm"},[t._v("Nama Siswa")]),a("td",{staticClass:"text-uppercase font-times text-sm"},[t._v(" : ")]),a("td",{staticClass:" font-times text-sm"},[t._v(t._s(t.datanya.nama_siswa))])]),a("tr",[a("td",{staticClass:"text-uppercase font-times text-sm"},[t._v("NIS")]),a("td",{staticClass:"text-uppercase font-times text-sm"},[t._v(" : ")]),a("td",{staticClass:" font-times text-sm"},[t._v(t._s(t.datanya.nis))])]),a("tr",[a("td",{staticClass:"text-uppercase font-times text-sm"},[t._v("Kelamin")]),a("td",{staticClass:"text-uppercase font-times text-sm"},[t._v(" : ")]),a("td",{staticClass:" font-times text-sm"},[t._v(t._s(t.datanya.kelamin))])]),a("tr",[a("td",{staticClass:"text-uppercase font-times text-sm"},[t._v("Alamat Siswa")]),a("td",{staticClass:"text-uppercase font-times text-sm"},[t._v(" : ")]),a("td",{staticClass:" font-times text-sm"},[t._v(t._s(t.datanya.alamat_siswa))])]),a("tr",[a("td",{staticClass:"text-uppercase font-times text-sm"},[t._v("Kelas")]),a("td",{staticClass:"text-uppercase font-times text-sm"},[t._v(" : ")]),a("td",{staticClass:"font-times text-sm"},[t._v(t._s(t.datanya.nama_kelas))])]),a("tr",[a("td",{staticClass:"text-uppercase font-times text-sm"},[t._v("Jurusan")]),a("td",{staticClass:"text-uppercase font-times text-sm"},[t._v(" : ")]),a("td",{staticClass:" font-times text-sm"},[t._v(t._s(t.datanya.nama_jurusan))])]),a("button",{staticClass:"btn btn-sm btn-dark btn-block ",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/sekolah/siswa/profile")}}},[a("span",{staticClass:"typcn typcn-edit"}),t._v(" Profile")])])])],1)],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tips"},[s("i",{staticClass:"fas fa-th",staticStyle:{color:"white","margin-left":"50px"}}),s("span",{staticClass:"tipstextB"},[t._v("Slide")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tips"},[s("i",{staticClass:"fas fa-user"}),s("span",{staticClass:"tipstextB"},[t._v("Profile")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tips"},[s("i",{staticClass:"fas fa-sign-out-alt"}),s("span",{staticClass:"tipstextB"},[t._v("Logout")])])}],n=(s("8e6e"),s("456d"),s("53ca")),o=s("ade3"),r=(s("a481"),s("ac6a"),s("748e")),l=s("8ea4"),c=s("bc3a"),u=s.n(c),d=s("f051"),p=s("ee0b"),m=s("19d9"),h=s("38d8");function g(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function f(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?g(Object(s),!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var b={components:{imageku:d["a"],menus:l["a"],dropdown:r["a"],Busy:p["a"],Footer:m["a"],Navbar:h["a"]},data:function(){return{bgleft1:"#343A40",bgleft2:"#232e30",bgleft3:"#343A40",bgrighttop:"lightgreen",test:1,menuTrigger:!0,menuKanan:!1,bearer:"",datanya:[],float_menu:!1,busy:!1}},methods:{muncul:function(t){t.target.nextElementSibling.classList.toggle("isaktif")},onSwipeRight:function(){this.menuTrigger=!0},scrollOnLoad:function(){var t=this;this.$el.querySelectorAll("a.scrollactive-item").forEach((function(e){e.hash==t.$route.hash&&e.click()}))},cekAuth:function(){var t=this;null!=localStorage.getItem("auth._token.local")&&("false"==localStorage.getItem("auth._token.local")?"false"!=localStorage.getItem("auth.local")&&u.a.get(this.$store.state.url+"/api/auth/user",{headers:{Authorization:localStorage.getItem("auth.local")}}).then((function(e){t.$store.commit("changeUser",e.data.user)})):u.a.get(this.$store.state.url+"/api/auth/user",{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){t.$store.commit("changeUser",e.data.user)})))},loginOAuth:function(){var t=this,e=document.URL.indexOf("?json");e=document.URL.slice(0,e);var s=document.URL.indexOf("xxx");if(-1!=s){var a=document.URL.slice(s).replace("%20"," ").replace("#/","").replace("xxx=","");console.log(a),this.bearer=a,localStorage.setItem("auth._token.local",a),localStorage.setItem("auth.local",a),u.a.get(this.$store.state.url+"/api/auth/user",{headers:{Authorization:a}}).then((function(s){console.log(s.data),t.$store.commit("changeUser",s.data.user),console.log(t.$store.state.user),setTimeout((function(){window.location=e}),500)}))}},isLoginNotLocal:function(){var t=this,e=this;this.$store.state.auth.loggedIn&&"local"!=this.$store.state.auth.strategy&&!this.$store.state.auth.isAuth&&(this.busy=!0,setTimeout((function(){if(t.busy=!1,t.$store.dispatch("auth/goAuth",t.$store.state.auth.isAuth),"local"!=t.$auth.$state.strategy){var s=new Date;localStorage.setItem("expireDate",new Date(s.getTime()+36e5));var a=t.$auth.user;"facebook"==t.$auth.$state.strategy&&(a.picture=t.$auth.user.picture.data.url,a.verified=!0),t.$auth.loginWith("local",{data:f(f({},a),{},{oAuth:!0})}).then((function(s){
//! setelah di ganti ke login local maka redirect kemana?
t.busy=!0,setTimeout((function(){t.busy=!1,e.$store.dispatch("userRefresh"),t.$router.push("/")}),500)}))}}),1e3))},version:function(){null==localStorage.getItem("version")&&localStorage.setItem("version",1)},newStuff:function(){if(localStorage.getItem("newstuff")!=this.$store.state.version){var t=indexedDB.deleteDatabase(this.$store.state.indexdb);t.onsuccess=function(){console.log("Deleted database successfully")},t.onerror=function(){console.log("Couldn't delete database")},t.onblocked=function(){console.log("Couldn't delete database due to the operation being blocked")},localStorage.clear(),localStorage.setItem("newstuff",this.$store.state.version),alert("new version")}},mediaQueries:function(){this.$store.commit("mediaQueries",window.innerWidth<=576?"sm":window.innerWidth<=768?"md":window.innerWidth<=992?"lg":"xl")},init:function(){this.scrollOnLoad(),"dekstop"!=this.$store.state.device&&this.isLoginNotLocal(),this.version(),this.loginOAuth()}},mounted:function(){var t=this;setTimeout((function(){var e=new FormData;e.append("data","select * from sekolah_data_siswa tb1 left join setup_kelas tb2 on tb2.id_kelas=tb1.id_kelas left join setup_jurusan tb3 on tb3.id_jurusan=tb1.id_jurusan where id_siswa='".concat(t.$store.state.users.id_siswa,"'")),e.append("database","infolay3_test"),u.a.post("https://infolayanans.space/api/mysql/auto.php",e,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){console.log(e),t.datanya=e.data[0],t.$forceUpdate()}))}),1e3);var e=this;if(localStorage.getItem("auth._token.local")){var s=new FormData;u.a.post("http://localhost:8080/api/mysql/getUser.php",s,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){console.log(e),t.$store.commit("changeUsers",e.data[0]),localStorage.setItem("users",JSON.stringify(e.data[0]))})).catch((function(t){console.log(t)}))}else this.$router.push("/sekolah/login");window.addEventListener("scroll",(function(t){var s=this.scrollY;e.float_menu=s>80})),this.$store.dispatch("auth"),"object"==("undefined"===typeof cordova?"undefined":Object(n["a"])(cordova))&&document.addEventListener("deviceready",(function(){cordova.plugins.backgroundMode.enable(),cordova.plugins.backgroundMode.on("EVENT",(function(){})),cordova.plugins.backgroundMode.setDefaults({title:"HELLO",text:"World",hidden:!0,silent:!0}),cordova.plugins.notification.local.setDefaults({led:{color:"#FF00FF",on:500,off:500},vibrate:[100,50,200]})})),this.mediaQueries(),this.$nextTick((function(){window.addEventListener("resize",(function(){e.mediaQueries()}))})),this.init(),setTimeout((function(){t.$store.commit("nossr",!0)}),100),this.$nuxt.$on("busy",(function(e){t.busy=e}))}},v=b,x=(s("f3ff"),s("2877")),y=Object(x["a"])(v,a,i,!1,null,"53803fa2",null);e["default"]=y.exports},5138:function(t,e,s){t.exports=s.p+"img/kalimantan selatan.9a5c23e2.png"},"707d":function(t,e,s){},f3ff:function(t,e,s){"use strict";var a=s("707d"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-e00e4b30.4f83635d.js.map