(this.webpackJsonpkeyfinder=this.webpackJsonpkeyfinder||[]).push([[0],{13:function(e,t,s){},19:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),r=s(14),o=s.n(r),i=(s(19),s(2)),l=s(4),a=s(6),d=s(5),h=(s.p,s(20),s(13),s(24)),u=s(25),p=s(23),j=s(7),O=[{NATURAL:"A"},{SHARP:"A\u266f",FLAT:"B\u266d"},{NATURAL:"B",FLAT:"C\u266d"},{SHARP:"B\u266f",NATURAL:"C"},{SHARP:"C\u266f",FLAT:"D\u266d"},{NATURAL:"D"},{SHARP:"D\u266f",FLAT:"E\u266d"},{NATURAL:"E",FLAT:"F\u266d"},{SHARP:"E\u266f",NATURAL:"F"},{SHARP:"F\u266f",FLAT:"G\u266d"},{NATURAL:"G"},{SHARP:"G\u266f",FLAT:"A\u266d"}],f=(new function e(t){var s=this;Object(i.a)(this,e),this.elAt=function(e){var t;return t=e<0?-e%s.arr.length:e>=s.arr.length?e%s.arr.length:e,s.arr[t]},this.getArr=function(){return s.arr},this.arr=t}(O),{MAJOR:{name:"Major",progression:[0,2,4,5,7,9,11]},MINOR:{name:"Minor",progression:[0,2,3,5,7,8,10]},BLUES:{name:"Blues",progression:[0,3,5,6,7,10]}}),m={FIFTH:{name:"5",progression:[0,7]},MAJOR:{name:"maj",progression:[0,4,7]},MINOR:{name:"min",progression:[0,3,7]},AUG:{name:"aug",progression:[0,4,8]},AUG_MAJ_SEVENTH:{name:"aug maj7",progression:[0,4,8,11]},AUG_MIN_SEVENTH:{name:"aug m7",progression:[0,4,8,10]},DIM:{name:"dim",progression:[0,3,6]},DIM_SEVENTH:{name:"dim7",progression:[0,3,6,9]},MINOR_SEVENTH_FLAT_FIVE:{name:"m7\u266d5",progression:[0,3,6,10]},ADD_TWO:{name:"add2",progression:[0,4,7,14]},SUS_FOUR:{name:"sus4",progression:[0,5,7]},SUS_FOUR_ADD_SIX:{name:"sus4add6",progression:[0,5,7,9]},SUS_FOUR_MIN_SIX:{name:"sus4m6",progression:[0,5,8]},ADD_FOUR:{name:"add4",progression:[0,4,7,17]},MINOR_ADD_FOUR:{name:"madd4",progression:[0,3,7,17]},SIX:{name:"6",progression:[0,4,7,9]},SEVEN:{name:"7",progression:[0,4,7,10]},MAJOR_SEVEN:{name:"maj7",progression:[0,4,7,11]},MINOR_SEVEN:{name:"m7",progression:[0,3,7,10]},SIX_SLASH_NINE:{name:"6/9",progression:[0,4,7,9,14]},FLAT_NINTH:{name:"\u266d9",progression:[0,4,7,13]},MINOR_FLAT_NINTH:{name:"m\u266d9",progression:[0,4,7,13]}},y=function(e,t){var s=O.findIndex((function(t){return t.FLAT===e||t.NATURAL===e||t.SHARP===e}));return t.progression.map((function(e){return(e+s)%12}))},N=function(e){var t=[];return e.SHARP&&t.push(e.SHARP),e.NATURAL&&t.push(e.NATURAL),e.FLAT&&t.push(e.FLAT),t.join("/")},b=function(e){var t,s=[],n=e.map((function(e){return function(e){return O.map((function(e){return JSON.stringify(e)})).findIndex((function(t){return t===JSON.stringify(e)}))}(e)})),c=Object(j.a)(O);try{for(c.s();!(t=c.n()).done;)for(var r=t.value,o=function(){var e=l[i],t=N(r).split("/")[0],c=y(t,f[e]);n.every((function(e){return c.includes(e)}))&&s.push("".concat(N(r)," ").concat(f[e].name))},i=0,l=Object.keys(f);i<l.length;i++)o()}catch(a){c.e(a)}finally{c.f()}return s},v=function(e){var t=JSON.stringify(e);return O.map((function(e){return JSON.stringify(e)})).findIndex((function(e){return e===t}))},x=function(e,t){var s=v(e);return t.progression.map((function(e){return(e+s)%12}))},g=function(e,t){var s=v(e);return t.progression.map((function(e){return(e+s)%12}))},S=function(e,t){return e.every((function(e){return t.includes(e)}))},R=s(0),C=function(e){Object(a.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props.selectedNotes.map((function(e){return JSON.stringify(e)})),s=O.map((function(s){var n=!1;t.includes(JSON.stringify(s))&&(n=!0);var c=N(s),r="note-select";return n&&(r+=" note-select-selected"),Object(R.jsx)(p.a,{xs:6,sm:4,md:3,children:Object(R.jsx)("div",{className:r,onClick:function(){n?e.props.deselectNote(s):e.props.selectNote(s)},children:c})})})),n=null;if(this.props.selectedNotes.length>0){var c=this.props.selectedNotes.map((function(e){return Object(R.jsx)("div",{className:"display-elements",children:N(e)})}));n=Object(R.jsxs)("div",{className:"display-container",children:[Object(R.jsx)("h4",{children:"Notes"}),Object(R.jsx)("div",{className:"display-elements-container",children:c})]})}else n=null;var r=null;if(this.props.selectedNotes.length>0){var o=b(this.props.selectedNotes).map((function(e){return Object(R.jsx)("div",{className:"display-elements",children:e})}));0===o.length&&(o="No matching keys"),r=Object(R.jsxs)("div",{className:"display-container",children:[Object(R.jsx)("h4",{children:"Keys Containing Selected Notes"}),Object(R.jsx)("div",{className:"display-elements-container",children:o})]})}else r=null;var i=null;if(this.props.selectedNotes.length>0){var l,a=this.props.selectedNotes.map((function(e){return v(e)})),d=[],f=Object(j.a)(O);try{var y=function(){for(var e=l.value,t=function(){var t=n[s],c=m[t];a.every((function(t){return g(e,c).includes(t)}))&&d.push(Object(R.jsx)("div",{className:"displayed-key",children:"".concat(N(e)," ").concat(c.name)}))},s=0,n=Object.keys(m);s<n.length;s++)t()};for(f.s();!(l=f.n()).done;)y()}catch(x){f.e(x)}finally{f.f()}0===d.length&&(d="No matching chords"),i=Object(R.jsxs)("div",{className:"display-container",children:[Object(R.jsx)("h4",{children:"Chords Containing Selected Notes"}),Object(R.jsx)("div",{className:"display-elements-container",children:d})]})}else i=null;return Object(R.jsxs)(h.a,{children:[Object(R.jsx)(u.a,{children:s}),Object(R.jsx)(u.a,{children:n}),Object(R.jsx)(u.a,{children:r}),Object(R.jsx)(u.a,{children:i})]})}}]),s}(c.a.Component),A=function(e){Object(a.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){var e,t,s=this,n=O.map((function(e){var t=!1;JSON.stringify(s.props.selectedChordRoot)===JSON.stringify(e)&&(t=!0);var n=N(e),c="note-select";return t&&(c+=" note-select-selected"),Object(R.jsx)(p.a,{xs:6,sm:4,md:3,children:Object(R.jsx)("div",{className:c,onClick:function(){t?s.props.clearChordRoot():s.props.selectChordRoot(e)},children:n})})})),c=Object.keys(m).map((function(e){return m[e]})).map((function(e){var t=!1;JSON.stringify(s.props.selectedChord)===JSON.stringify(e)&&(t=!0);var n="note-select";t&&(n+=" note-select-selected");var c=e.name;return Object(R.jsx)(p.a,{xs:6,sm:4,md:3,children:Object(R.jsx)("div",{className:n,onClick:function(){t?(console.log(e),s.props.clearChord()):(console.log(e),s.props.selectChord(e))},children:c})})})),r=null;if(this.props.selectedChordRoot&&this.props.selectedChord){var o=(e=this.props.selectedChordRoot,t=this.props.selectedChord,g(e,t).map((function(e){return O[e]}))).map((function(e){return Object(R.jsx)("div",{className:"displayed-elements",children:N(e)})}));r=Object(R.jsxs)("div",{className:"display-container",children:[Object(R.jsx)("h4",{children:"Notes In Chord"}),Object(R.jsx)("div",{className:"display-elements-container",children:o})]})}else r=null;var i=null;if(this.props.selectedChordRoot&&this.props.selectedChord){for(var l=[],a=g(this.props.selectedChordRoot,this.props.selectedChord),d=0,y=Object.keys(f);d<y.length;d++){var b,v=y[d],C=f[v],A=Object(j.a)(O);try{for(A.s();!(b=A.n()).done;){var K=b.value,T=x(K,C);S(a,T)&&l.push(Object(R.jsx)("div",{className:"display-elements",children:"".concat(N(K)," ").concat(C.name)}))}}catch(E){A.e(E)}finally{A.f()}}0===l.length&&(l="No available keys"),i=Object(R.jsxs)("div",{className:"display-container",children:[Object(R.jsx)("h4",{children:"Keys Containing Chord"}),Object(R.jsx)("div",{className:"display-elements-container",children:l})]})}else i=null;return Object(R.jsxs)(h.a,{children:[Object(R.jsx)("h4",{children:"Select Chord Root"}),Object(R.jsx)(u.a,{children:n}),Object(R.jsx)("h4",{style:{paddingTop:"20px"},children:"Select Chord Type"}),Object(R.jsx)(u.a,{children:c}),Object(R.jsx)(u.a,{children:r}),Object(R.jsx)(u.a,{children:i})]})}}]),s}(c.a.Component),K=function(e){Object(a.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(i.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=O.map((function(t){var s=!1;JSON.stringify(e.props.selectedKeyRoot)===JSON.stringify(t)&&(s=!0);var n=N(t),c="note-select";return s&&(c+=" note-select-selected"),Object(R.jsx)(p.a,{xs:6,sm:4,md:3,children:Object(R.jsx)("div",{className:c,onClick:function(){s?e.props.deselectKeyRoot():e.props.selectKeyRoot(t)},children:n})})})),s=Object.keys(f).map((function(e){return f[e]})).map((function(t){var s=!1;JSON.stringify(e.props.selectedKey)===JSON.stringify(t)&&(s=!0);var n="note-select";s&&(n+=" note-select-selected");var c=t.name;return Object(R.jsx)(p.a,{xs:6,sm:4,md:3,children:Object(R.jsx)("div",{className:n,onClick:function(){s?e.props.deselectKey():e.props.selectKey(t)},children:c})})})),n=[];this.props.selectedKeyRoot&&this.props.selectedKey&&(n=x(this.props.selectedKeyRoot,this.props.selectedKey));var c,r,o=null;if(this.props.selectedKey&&this.props.selectedKeyRoot){var i=(c=this.props.selectedKeyRoot,r=this.props.selectedKey,x(c,r).map((function(e){return O[e]}))).map((function(e){return Object(R.jsx)("div",{className:"display-elements",children:N(e)})}));o=Object(R.jsxs)("div",{className:"display-container",children:[Object(R.jsx)("h4",{children:"Notes In Key"}),Object(R.jsx)("div",{className:"display-elements-container",children:i})]})}else o=null;var l=null;if(this.props.selectedKeyRoot&&this.props.selectedKey){var a=[];O.forEach((function(e){Object.keys(m).forEach((function(t){var s=m[t],c=g(e,s);S(c,n)&&a.push(Object(R.jsx)("div",{className:"display-elements",children:"".concat(N(e)," ").concat(s.name)}))}))})),0===a.length&&(a="No available chords"),l=Object(R.jsxs)("div",{className:"display-container",children:[Object(R.jsx)("h4",{children:"Chords In Key"}),Object(R.jsx)("div",{className:"display-elements-container",children:a})]})}else l=null;return Object(R.jsxs)(h.a,{children:[Object(R.jsx)("h4",{children:"Select Key Root"}),Object(R.jsx)(u.a,{children:t}),Object(R.jsx)("h4",{style:{paddingTop:"20px"},children:"Select Key Type"}),Object(R.jsx)(u.a,{children:s}),Object(R.jsx)(u.a,{children:o}),Object(R.jsx)(u.a,{children:l})]})}}]),s}(c.a.Component),T="SELECT NOTES",E="SELECT CHORD",L="SELECT KEY",k=function(e){Object(a.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).selectKeyRoot=function(e){n.setState({selectedKeyRoot:e})},n.deselectKeyRoot=function(){n.setState({selectedKeyRoot:null})},n.selectKey=function(e){n.setState({selectedKey:e})},n.deselectKey=function(){n.setState({selectedKey:null})},n.selectChordRoot=function(e){n.setState({selectedChordRoot:e})},n.clearChordRoot=function(){n.setState({selectedChordRoot:null})},n.selectChord=function(e){n.setState({selectedChord:e})},n.clearChord=function(){n.setState({selectedChord:null})},n.selectNote=function(e){var t=JSON.parse(JSON.stringify(n.state.selectedNotes));t.push(e),n.setState({selectedNotes:t})},n.deselectNote=function(e){var t=n.state.selectedNotes.map((function(e){return JSON.stringify(e)})),s=JSON.stringify(e),c=(t=t.filter((function(e){return e!==s}))).map((function(e){return JSON.parse(e)}));n.setState({selectedNotes:c})},n.state={selected:null,selectedNotes:[],selectedChordRoot:null,selectedChord:null,selectedKeyRoot:null,selectedKey:null},n}return Object(l.a)(s,[{key:"render",value:function(){var e,t=this;switch(this.state.selected){case T:e=Object(R.jsx)(C,{selectedNotes:this.state.selectedNotes,selectNote:this.selectNote,deselectNote:this.deselectNote});break;case E:e=Object(R.jsx)(A,{selectedChordRoot:this.state.selectedChordRoot,selectedChord:this.state.selectedChord,selectChordRoot:this.selectChordRoot,clearChordRoot:this.clearChordRoot,selectChord:this.selectChord,clearChord:this.clearChord});break;case L:e=Object(R.jsx)(K,{selectedKeyRoot:this.state.selectedKeyRoot,selectedKey:this.state.selectedKey,selectKeyRoot:this.selectKeyRoot,selectKey:this.selectKey,deselectKeyRoot:this.deselectKeyRoot,deselectKey:this.deselectKey});break;default:e=null}return Object(R.jsxs)(h.a,{className:"App",children:[Object(R.jsx)("h1",{style:{paddingBottom:"20px",paddingTop:"15px"},children:"Keyfinder"}),Object(R.jsxs)(u.a,{children:[Object(R.jsx)(p.a,{xs:4,children:Object(R.jsx)("h4",{className:this.state.selected===T?"seletion-header selection-header-selected":"selection-header",onClick:function(){t.setState({selected:T})},children:"Select Notes"})}),Object(R.jsx)(p.a,{xs:4,children:Object(R.jsx)("h4",{className:this.state.selected===E?"seletion-header selection-header-selected":"selection-header",onClick:function(){t.setState({selected:E})},children:"Select Chord"})}),Object(R.jsx)(p.a,{xs:4,children:Object(R.jsx)("h4",{className:this.state.selected===L?"seletion-header selection-header-selected":"selection-header",onClick:function(){t.setState({selected:L})},children:"Select Key"})})]}),Object(R.jsx)("hr",{}),e]})}}]),s}(c.a.Component),F=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,26)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;s(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(k,{})}),document.getElementById("root")),F()}},[[22,1,2]]]);
//# sourceMappingURL=main.7e203fa3.chunk.js.map