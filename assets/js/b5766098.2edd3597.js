"use strict";(self.webpackChunkwsg=self.webpackChunkwsg||[]).push([[6445],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=n.createContext({}),d=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(r.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,h=c["".concat(r,".").concat(m)]||c[m]||g[m]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[c]="string"==typeof e?e:i,s[1]=l;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7286:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={},s="Dangerous Dogma",l={unversionedId:"dogma",id:"dogma",title:"Dangerous Dogma",description:"---",source:"@site/docs/dogma.md",sourceDirName:".",slug:"/dogma",permalink:"/docs/dogma",draft:!1,editUrl:"https://github.com/wastelandsurvivalguide/wastelandsurvivalguide.github.io/edit/main/docs/dogma.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Contributors",permalink:"/docs/contributors"},next:{title:"Incompatible Mods",permalink:"/docs/incompatible"}},r={},d=[{value:"Changing uGridsToLoad",id:"changing-ugridstoload",level:3},{value:"Cleaning masterlists in xEdit",id:"cleaning-masterlists-in-xedit",level:3},{value:"Installing mods mid-game that affect the world or cells",id:"installing-mods-mid-game-that-affect-the-world-or-cells",level:3},{value:"Levelled List Injection",id:"levelled-list-injection",level:3},{value:"Persistence leads to bloated saves",id:"persistence-leads-to-bloated-saves",level:3},{value:"QAC magically fixing mods",id:"qac-magically-fixing-mods",level:3},{value:"Removing plugins mid-game",id:"removing-plugins-mid-game",level:3},{value:"Setting quest stages",id:"setting-quest-stages",level:3},{value:"Setting Z -30000",id:"setting-z--30000",level:3},{value:"TTW and Fallout 3 mods",id:"ttw-and-fallout-3-mods",level:3},{value:"Using the COC command",id:"using-the-coc-command",level:3}],u={toc:d},c="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dangerous-dogma"},"Dangerous Dogma"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The goal with this page is to collect all the dangerous information shared over the years about anything related to modding in general but also specifically Fallout New Vegas and Tale of Two Wastelands. The main sources are sadly often the most popular ones, such as YouTube videos that keep getting recommended or posts on sites like Nexus or Reddit."),(0,i.kt)("p",null,"Keep in mind that this is in no way a complete list, since modding methods and information changes often and obviously I am not aware of all of the info that belongs here."),(0,i.kt)("h3",{id:"changing-ugridstoload"},"Changing uGridsToLoad"),(0,i.kt)("p",null,"Greatly reduces performance and breaks the game since most of the engine assumes this value is set to default (5)."),(0,i.kt)("h3",{id:"cleaning-masterlists-in-xedit"},"Cleaning masterlists in xEdit"),(0,i.kt)("p",null,"Breaks plugin loading in Geck because it cannot look for masters recursively."),(0,i.kt)("h3",{id:"installing-mods-mid-game-that-affect-the-world-or-cells"},"Installing mods mid-game that affect the world or cells"),(0,i.kt)("p",null,"Not advised since the player's save file is essentially an ESP that is loaded last, and baked information can override and break any changes new mods introduce, causing bugs and crashes."),(0,i.kt)("h3",{id:"levelled-list-injection"},"Levelled List Injection"),(0,i.kt)("p",null,"Makes patching and balancing harder since you cannot see the whole LL together as you would normally."),(0,i.kt)("h3",{id:"persistence-leads-to-bloated-saves"},"Persistence leads to bloated saves"),(0,i.kt)("p",null,"Proven false by TTW which flags the totality of NPCs, creatures and activators as persistent and adds a very tiny amount of data in the save."),(0,i.kt)("h3",{id:"qac-magically-fixing-mods"},"QAC magically fixing mods"),(0,i.kt)("p",null,"Quick Automatic Cleaning does not do any magic to plugins, it just applies filters for ITM's (which are almost always safe to ignore) and removes them regardless, also filters for deleted references and flips them into initially disabled with the enable parent opposite of player as a fallback in case that reference was already part of the save."),(0,i.kt)("h3",{id:"removing-plugins-mid-game"},"Removing plugins mid-game"),(0,i.kt)("p",null,"This is not an intended scenario and will almost always result in all kinds of weird issues. There are cases where the changes or additions in a plugin are safe to disable, but that would require knowing everything the plugin does and how that affects the game. Better to avoid at all times unless you know what you are doing or if you are debugging something."),(0,i.kt)("h3",{id:"setting-quest-stages"},"Setting quest stages"),(0,i.kt)("p",null,"People often do this as a last resort to fix a problem they encounter. Obviously this breaks the natural progression of the quest so any trigger point (and everything it sets in motion) will be skipped, breaking the quest even more and leading to a broken save file. This is why you are supposed to have a working list when you want to start an actual playthrough, since these issues are often not fixable if not starting a new game and letting that quest work properly."),(0,i.kt)("h3",{id:"setting-z--30000"},"Setting Z -30000"),(0,i.kt)("p",null,"This is not confirmed. Dropping refs -30K units down might cause Havok issues because of the Havok bounds being at around -27K unlike in newer titles where it is 32768."),(0,i.kt)("h3",{id:"ttw-and-fallout-3-mods"},"TTW and Fallout 3 mods"),(0,i.kt)("p",null,"99% of Fallout 3 mods will ",(0,i.kt)("strong",{parentName:"p"},"NOT")," work with Tale Of Two Wastelands, since the plugin format is different and most of the Fallout 3 mods are either badly made or do not take TTW and Fallout New Vegas changes into account."),(0,i.kt)("h3",{id:"using-the-coc-command"},"Using the COC command"),(0,i.kt)("p",null,"Skips trigger points and a multitude of things related to any quest you have running or events contained in the cells you skip and teleport to. Especially dangerous if used from the game's main menu since it will create partial character info and once again, broken quests. This command is purely meant for debugging."))}g.isMDXComponent=!0}}]);