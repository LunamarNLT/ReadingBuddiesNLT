import{a as c,s as p,o as n,f as u,t as f,q as x,i as b,N as v,l as y,r as V,k as N}from"./entry.7307fc4c.js";import"./StatStripCard.vue_vue_type_style_index_0_scoped_b87ef05f_lang.ef632115.js";import"./stream.cbe555aa.js";import"./composables.0bc75d07.js";const C={key:0,class:"text-sm ml-1 font-medium"},I=c({__name:"InputNumber",props:{label:String,modelValue:Number,min:{type:Number,default:void 0},max:{type:Number,default:void 0},style:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","enter"],setup(a,{expose:s,emit:t}){const e=a,m=p(e.modelValue);s({clear:l=>m.value=l||e.min});function d(l){e.max&&l.value>e.max?t("update:modelValue",e.max):e.min&&l.value<e.min?t("update:modelValue",e.min):t("update:modelValue",l.value)}return(l,o)=>{const i=V("InputNumber",!0);return n(),u("div",{class:y(["flex flex-column",a.disabled?"div-disabled":""])},[a.label?(n(),u("label",C,f(a.label),1)):x("",!0),b(i,{modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=r=>m.value=r),onInput:d,min:a.min,max:a.max,class:"mt-2",style:v(a.style)},null,8,["modelValue","min","max","style"])],2)}}}),B=N(I,[["__scopeId","data-v-c4c03365"]]);export{B as default};