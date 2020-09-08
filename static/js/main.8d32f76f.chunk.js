(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,a){t.exports={contactItem:"ContactItem_contactItem__qJE0a",dataBlock:"ContactItem_dataBlock__2fHPD","sequential\u0422umber":"ContactItem_sequential\u0422umber__2hlSe",name:"ContactItem_name__1DfCv",removeBtn:"ContactItem_removeBtn__1I8o3"}},19:function(t,e,a){t.exports=a(31)},3:function(t,e,a){t.exports={phonebook:"App_phonebook__2hIpp",title:"App_title__2X8G8",noContacts:"App_noContacts__2NQcq"}},30:function(t,e,a){},31:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),c=a(12),r=a.n(c),s=a(8),i=a(4),l=a(13),m=a(14),u=a(15),p=a(18),b=a(17),f=a(16),h=a(2),_=a.n(h),d=a(5),C=a(7),g=a.n(C),v=function(t){var e=t.stateData,a=t.title,n=t.name,c=t.onChange;return o.a.createElement("label",{className:g.a.labelFind},o.a.createElement("span",null,a),o.a.createElement("input",{className:g.a.inputFind,type:"text",name:n,value:e[n],onChange:function(t){return c(t.target.name,t.target.value)}}))},E=a(6),N=a.n(E),I=function(t){var e=t.onCreateContact,a=Object(d.a)(t,["onCreateContact"]);return o.a.createElement("form",{className:N.a.contactForm,onSubmit:e},o.a.createElement("div",{className:N.a.wrapper},o.a.createElement(v,Object.assign({title:"Name",name:"name"},a)),o.a.createElement(v,Object.assign({title:"Number",name:"number"},a))),o.a.createElement("button",{className:N.a.btnForm,type:"submit"},"Add contact"))},F=function(t){return o.a.createElement(v,Object.assign({title:"Find contacts by name",name:"filter"},t))},O=a(1),w=a.n(O),k=function(t){var e=t.name,a=t.number,n=t.id,c=t.idx,r=t.onRemoveContact;return o.a.createElement("li",{className:w.a.contactItem},o.a.createElement("div",{className:w.a.dataBlock},o.a.createElement("span",{className:w.a.sequential\u0422umber},c+1),o.a.createElement("span",{className:w.a.name},e),o.a.createElement("span",{className:w.a.phoneNumber},a)),o.a.createElement("button",{className:w.a.removeBtn,type:"button",onClick:function(){return r(n)}},"Delete"))},j=function(t){var e=t.visibleContacts,a=t.onRemoveContact;return o.a.createElement("ul",{className:"ContactList"},e.map((function(t,e){var n=t.id,c=Object(d.a)(t,["id"]);return o.a.createElement(k,Object.assign({key:n,idx:e,id:n,onRemoveContact:a},c))})))},S=a(3),y=a.n(S),D={contacts:[],filter:"",name:"",number:""},x=function(t){Object(p.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state=Object(l.a)({},D),t.getVisibleContacts=function(){var e=t.state,a=e.contacts,n=e.filter;return a.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},t.getInputData=function(e,a){return t.setState(Object(i.a)({},e,a))},t.createContact=function(e){e.preventDefault();var a=t.state,n=a.name,o=a.number;if(n&&o){if(!t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()&&(_.a.info("A contact with the same Name already exists","Info"),!0)}))){var c={id:Object(f.v4)(),name:n,number:o};t.setState((function(t){return console.log([].concat(Object(s.a)(t.contacts),[c])),{contacts:[].concat(Object(s.a)(t.contacts),[c])}})),t.reset()}}else _.a.error("You did not enter a Name or Number","Error")},t.removeContact=function(e){t.setState((function(t){return console.log(e),{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.reset=function(){t.setState({filter:"",name:"",number:""})},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");console.log("start"),t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){console.log("State",this.state.contacts),console.log("prevState",e.contacts),e.contacts!==this.state.contacts&&(console.log("WTF !?? \u043d\u0435 \u0440\u0430\u0432\u043d\u044b"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts))),e.contacts===this.state.contacts&&(console.log("WTF !?? \u0440\u0430\u0432\u043d\u044b"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"render",value:function(){var t=this.state.contacts,e=this.getVisibleContacts(),a=t.length>1,n=e.length>0;return o.a.createElement("section",{className:y.a.phonebook},o.a.createElement("h1",{className:y.a.title},"Phonebook"),o.a.createElement(I,{stateData:this.state,onChange:this.getInputData,onCreateContact:this.createContact}),o.a.createElement("h2",{className:y.a.title},"Contacts"),a&&o.a.createElement(F,{stateData:this.state,onChange:this.getInputData}),n&&o.a.createElement(j,{visibleContacts:e,onRemoveContact:this.removeContact}),!n&&o.a.createElement("p",{className:y.a.noContacts},"No contact"))}}]),a}(n.Component);_.a.options={closeButton:!0,debug:!1,newestOnTop:!1,progressBar:!0,positionClass:"toast-top-right",preventDuplicates:!0,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"1200",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"},a(28),a(29),a(30);r.a.render(o.a.createElement(x,null),document.querySelector("#root"))},6:function(t,e,a){t.exports={contactForm:"ContactForm_contactForm__1I1wu",wrapper:"ContactForm_wrapper__2Mdpq",btnForm:"ContactForm_btnForm__2tlsw"}},7:function(t,e,a){t.exports={labelForm:"LabelInput_labelForm__2yA2A",labelFind:"LabelInput_labelFind__3VMfE",inputForm:"LabelInput_inputForm__lWsNh",inputFind:"LabelInput_inputFind__1j5Hn"}}},[[19,1,2]]]);
//# sourceMappingURL=main.8d32f76f.chunk.js.map