import{c as x}from"./chunk-LBQC5LUB.js";import{a as b}from"./chunk-RVYHQJMQ.js";import{Sa as p,U as l,W as c,Ya as i,Za as o,_a as u,cb as g,gb as s,hb as v,ib as f,kb as h,la as d,ua as m,za as r}from"./chunk-GDAC3J6T.js";var E=(()=>{let t=class t{constructor(){this.dataSrv=l(b),this.router=l(x),this.data=d.required(),this.imgSize=d("default")}viewDetails(){this.dataSrv.selectProject(this.data()),this.router.navigate(["/project-single"]),sessionStorage.setItem("activeProject",JSON.stringify(this.data()))}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=c({type:t,selectors:[["app-portfolio-card"]],inputs:{data:[1,"data"],imgSize:[1,"imgSize"]},standalone:!0,features:[h],decls:11,vars:4,consts:[[1,"block","p-3","overflow-hidden","border","md:p-4","rounded-xl","border-platinum","dark:border-greyBlack",3,"click"],[1,"img-wrapper"],[1,"rounded-lg","max-md:h-[17rem]","w-full","max-md:object-cover","max-md:object-center","transition-all","duration-300","group-hover:blur-xs",3,"src","alt"],[1,"absolute","inset-0","transition-all","duration-300","opacity-0","overlay","bg-gradient-to-t","from-white","dark:from-black","to-transparent","rounded-xl","group-hover:opacity-100"],[1,"info","text-center","position-center","max-lg:text-3xl","text-lead","font-semibold","text-black","dark:text-white","leading-1.15","transition","duration-500","scale-110","opacity-0","group-hover:scale-100","group-hover:opacity-100","relative","z-10"],[1,"absolute","z-10","transition-all","duration-500","opacity-0","md:top-9","md:right-9","top-6","right-6","group-hover:opacity-100"],["href","#",1,"inline-flex","items-center","gap-2","px-5","py-3","text-sm","font-light","leading-none","text-white","transition-colors","bg-metalBlack","rounded-3xl","hover:text-theme"]],template:function(a,e){a&1&&(i(0,"a",0),g("click",function(){return e.viewDetails()}),i(1,"div",1),u(2,"img",2)(3,"div",3),o(),i(4,"div",4)(5,"span"),s(6),o()()(),i(7,"ul",5)(8,"li")(9,"a",6),s(10),o()()()),a&2&&(r(2),p("src",e.data().imageUrls[e.imgSize()],m)("alt",e.data().title),r(4),v(e.data().title),r(4),f(" ",e.data().services[0]," "))}});let n=t;return n})();export{E as a};