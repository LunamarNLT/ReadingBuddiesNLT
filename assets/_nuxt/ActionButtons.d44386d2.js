import{u as i}from"./stream.cbe555aa.js";import{a as d,e as p,o as m,f as c,h as t,i as s,l,u as _,r as u,k as h}from"./entry.7307fc4c.js";import"./StatStripCard.vue_vue_type_style_index_0_scoped_b87ef05f_lang.ef632115.js";import{_ as f}from"./AddChannel.vue_vue_type_script_setup_true_lang.ccd0b81d.js";import v from"./SendMessage.e97cd65c.js";import"./composables.0bc75d07.js";import"./InputText.a5d51f5e.js";import"./index.esm.ec6caf95.js";import"./request.fce72d22.js";import"./useToastMessage.47adc00c.js";import"./InputNumber.432bd6c1.js";import"./CodeEditor.a3b038a7.js";import"./Field.vue_vue_type_script_setup_true_lang.0d667ec2.js";import"./DataField.vue_vue_type_script_setup_true_lang.9a1a6859.js";import"./cqrs_request.ce51b25c.js";const C={class:"mr-2"},b={class:"ml-2"},w=d({__name:"ActionButtons",setup(x){const{isStreamReady:a,dashboardData:S}=i(),e=p(),n=()=>{e.open(f,{props:{header:"Add a Commands & Queries Channel",style:{width:"30vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0},data:{channelType:3}})},r=()=>{e.open(v,{props:{header:"Send Message",style:{width:"60vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0},data:{isChannelSource:!1,channel:"",isCommands:!0}})};return(k,g)=>{const o=u("Button");return m(),c("div",{class:l(["flex",_(a)?"":"div-disabled"])},[t("div",C,[s(o,{label:"Send Message",onClick:r,class:"button-cqrs header-button button-hero",icon:"pi pi-send",style:{width:"12rem"}})]),t("div",b,[s(o,{label:"Add Channel",onClick:n,class:"button-cqrs header-button",icon:"pi pi-plus",style:{width:"12rem"}})])],2)}}}),j=h(w,[["__scopeId","data-v-41df6de1"]]);export{j as default};