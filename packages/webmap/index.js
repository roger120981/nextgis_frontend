!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.webmap={})}(this,function(t){"use strict";var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function e(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var n,o=function(){return(o=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function r(s,o,a,h){return new(a||(a=Promise))(function(t,e){function n(t){try{r(h.next(t))}catch(t){e(t)}}function i(t){try{r(h.throw(t))}catch(t){e(t)}}function r(e){e.done?t(e.value):new a(function(t){t(e.value)}).then(n,i)}r((h=h.apply(s,o||[])).next())})}function s(n,i){var r,s,o,t,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,s&&(o=2&e[0]?s.return:e[0]?s.throw||((o=s.return)&&o.call(s),0):s.next)&&!(o=o.call(s,e[1])).done)return o;switch(s=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,s=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(!(o=0<(o=a.trys).length&&o[o.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){a.label=e[1];break}if(6===e[0]&&a.label<o[1]){a.label=o[1],o=e;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(e);break}o[2]&&a.ops.pop(),a.trys.pop();continue}e=i.call(n,a)}catch(t){e=[6,t],s=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}}function p(){}function a(){a.init.call(this)}function u(t){return void 0===t._maxListeners?a.defaultMaxListeners:t._maxListeners}function h(t,e,n,i){var r,s,o,a;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');if((s=t._events)?(s.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),s=t._events),o=s[e]):(s=t._events=new p,t._eventsCount=0),o){if("function"==typeof o?o=s[e]=i?[n,o]:[o,n]:i?o.unshift(n):o.push(n),!o.warned&&(r=u(t))&&0<r&&o.length>r){o.warned=!0;var h=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+e+" listeners added. Use emitter.setMaxListeners() to increase limit");h.name="MaxListenersExceededWarning",h.emitter=t,h.type=e,h.count=o.length,a=h,"function"==typeof console.warn?console.warn(a):console.log(a)}}else o=s[e]=n,++t._eventsCount;return t}function c(t,e,n){var i=!1;function r(){t.removeListener(e,r),i||(i=!0,n.apply(t,arguments))}return r.listener=n,r}function l(t){var e=this._events;if(e){var n=e[t];if("function"==typeof n)return 1;if(n)return n.length}return 0}function f(t,e){for(var n=new Array(e);e--;)n[e]=t[e];return n}function y(t,e,n,i){var r;if(void 0===e&&(e=function(t){return t}),void 0===i&&(i=[]),Array.isArray(t))r=t;else{e(t)&&i.push(t);var s=n(t);s&&(r=[].concat(s))}if(r)for(var o=0;o<r.length;o++)r[o]&&y(r[o],e,n,i);return i}p.prototype=Object.create(null),(a.EventEmitter=a).usingDomains=!1,a.prototype.domain=void 0,a.prototype._events=void 0,a.prototype._maxListeners=void 0,a.defaultMaxListeners=10,a.init=function(){this.domain=null,a.usingDomains&&n.active&&n.Domain,this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=new p,this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||isNaN(t))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=t,this},a.prototype.getMaxListeners=function(){return u(this)},a.prototype.emit=function(t){var e,n,i,r,s,o,a,h="error"===t;if(o=this._events)h=h&&null==o.error;else if(!h)return!1;if(a=this.domain,h){if(e=arguments[1],!a){if(e instanceof Error)throw e;var p=new Error('Uncaught, unspecified "error" event. ('+e+")");throw p.context=e,p}return e||(e=new Error('Uncaught, unspecified "error" event')),e.domainEmitter=this,e.domain=a,e.domainThrown=!1,a.emit("error",e),!1}if(!(n=o[t]))return!1;var u="function"==typeof n;switch(i=arguments.length){case 1:!function(t,e,n){if(e)t.call(n);else for(var i=t.length,r=f(t,i),s=0;s<i;++s)r[s].call(n)}(n,u,this);break;case 2:!function(t,e,n,i){if(e)t.call(n,i);else for(var r=t.length,s=f(t,r),o=0;o<r;++o)s[o].call(n,i)}(n,u,this,arguments[1]);break;case 3:!function(t,e,n,i,r){if(e)t.call(n,i,r);else for(var s=t.length,o=f(t,s),a=0;a<s;++a)o[a].call(n,i,r)}(n,u,this,arguments[1],arguments[2]);break;case 4:!function(t,e,n,i,r,s){if(e)t.call(n,i,r,s);else for(var o=t.length,a=f(t,o),h=0;h<o;++h)a[h].call(n,i,r,s)}(n,u,this,arguments[1],arguments[2],arguments[3]);break;default:for(r=new Array(i-1),s=1;s<i;s++)r[s-1]=arguments[s];!function(t,e,n,i){if(e)t.apply(n,i);else for(var r=t.length,s=f(t,r),o=0;o<r;++o)s[o].apply(n,i)}(n,u,this,r)}return!0},a.prototype.on=a.prototype.addListener=function(t,e){return h(this,t,e,!1)},a.prototype.prependListener=function(t,e){return h(this,t,e,!0)},a.prototype.once=function(t,e){if("function"!=typeof e)throw new TypeError('"listener" argument must be a function');return this.on(t,c(this,t,e)),this},a.prototype.prependOnceListener=function(t,e){if("function"!=typeof e)throw new TypeError('"listener" argument must be a function');return this.prependListener(t,c(this,t,e)),this},a.prototype.removeListener=function(t,e){var n,i,r,s,o;if("function"!=typeof e)throw new TypeError('"listener" argument must be a function');if(!(i=this._events))return this;if(!(n=i[t]))return this;if(n===e||n.listener&&n.listener===e)0==--this._eventsCount?this._events=new p:(delete i[t],i.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!=typeof n){for(r=-1,s=n.length;0<s--;)if(n[s]===e||n[s].listener&&n[s].listener===e){o=n[s].listener,r=s;break}if(r<0)return this;if(1===n.length){if(n[0]=void 0,0==--this._eventsCount)return this._events=new p,this;delete i[t]}else!function(t,e){for(var n=e,i=n+1,r=t.length;i<r;n+=1,i+=1)t[n]=t[i];t.pop()}(n,r);i.removeListener&&this.emit("removeListener",t,o||e)}return this},a.prototype.removeAllListeners=function(t){var e,n;if(!(n=this._events))return this;if(!n.removeListener)return 0===arguments.length?(this._events=new p,this._eventsCount=0):n[t]&&(0==--this._eventsCount?this._events=new p:delete n[t]),this;if(0===arguments.length){for(var i,r=Object.keys(n),s=0;s<r.length;++s)"removeListener"!==(i=r[s])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=new p,this._eventsCount=0,this}if("function"==typeof(e=n[t]))this.removeListener(t,e);else if(e)for(;this.removeListener(t,e[e.length-1]),e[0];);return this},a.prototype.listeners=function(t){var e,n=this._events;return n&&(e=n[t])?"function"==typeof e?[e.listener||e]:function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(e):[]},a.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):l.call(t,e)},a.prototype.listenerCount=l,a.prototype.eventNames=function(){return 0<this._eventsCount?Reflect.ownKeys(this._events):[]};var d=function(){function t(t){this._children=[],this.entry=t}return t.prototype.setParent=function(t){this._parent=t},t.prototype.addChildren=function(t){this._children.push(t)},t.prototype.getParent=function(){return this._parent},t.prototype.getParents=function(t){return this.getParent()?y(this._parent,t,function(t){return t.tree.getParent()}):[]},t.prototype.getDescendants=function(t){return y(this._children,t,function(t){return t.tree.getChildren()})},t.prototype.getChildren=function(){return this._children},t}(),v=function(r){function s(t,e,n){var i=r.call(this,t,e,Object.assign({},s.options,n))||this;return i.set(i.value()),i}return e(s,r),s.prototype.update=function(t,e){if(t)if(e&&e.bubble||this.options.bubble){this.unBlock(e);var n=this.getParent(),i=n&&n.properties.get(this.name);i&&i.set(t,Object.assign({},e,{bubble:!0,propagation:!1}))}else this.isBlocked()||this._turnOn(e);else this._turnOff(e);(e&&e.propagation||this.options.propagation)&&this._propagation(t,e)},s.prototype.getHierarchyValue=function(){var n=this;return this.value()&&this.getParents().every(function(t){var e=t.properties[n.name];return e&&e.get()})},s.prototype._prepareValue=function(t){return!!t},s.prototype._turnOff=function(t){this.options.turnOff&&this.options.turnOff.call(this,t),this._callOnSet(!1,t),this.options.hierarchy&&this.isGroup()&&this.blockChilds(t)},s.prototype._turnOn=function(t){this.options.turnOn&&this.options.turnOn.call(this,t),this._callOnSet(!0,t),this.options.hierarchy&&this.isGroup()&&this.unblockChilds(t)},s.prototype.block=function(t){this._blocked=!0,this._block(t)},s.prototype._block=function(t){this._turnOff(t)},s.prototype.unBlock=function(t){this._blocked=!1,this.getValue()&&this._unBlock(t)},s.prototype._unBlock=function(t){this._turnOn(t)},s.prototype.blockChilds=function(t){this.entry.tree.getDescendants().forEach(this._blockChild.bind(this,t))},s.prototype.unblockChilds=function(t){this.entry.tree.getChildren().forEach(this._unBlockChild.bind(this,t))},s.prototype._blockChild=function(t,e){var n=e.properties.get(this.name);n.block&&n.block(t)},s.prototype._unBlockChild=function(t,e){var n=e.properties.get(this.name);n.unBlock&&n.unBlock(t)},s.prototype._propagation=function(t,e){if(this.isGroup())for(var n=this.entry.tree.getChildren(),i=0;i<n.length;i++){var r=n[i].properties.get(this.name);r&&r.set(t,o({},e,{propagation:!0,bubble:!1}))}},s.options={hierarchy:!0,bubble:!1,propagation:!1,label:"Toggle"},s}(function(){function t(t,e,n){this.emitter=new a,this.entry=e,this.options=Object.assign({},n),this.name=t,this._value=this.getProperty()}return t.prototype.getProperty=function(){return"function"==typeof this.options.getProperty?this.options.getProperty.call(this):this.options.value},t.prototype.getParents=function(){return this.entry.tree.getParents()||[]},t.prototype.getParent=function(){return this.entry.tree.getParent()},t.prototype.isGroup=function(){return this.entry.tree.getDescendants().length},t.prototype.isBlocked=function(){var n=this;if(void 0===this._blocked){var t=this.entry.tree.getParents();if(t){var e=t.find(function(t){var e=t.properties.get(n.name);if(e)return!e.value()});this._blocked=!!e}else this._blocked=!1}return this._blocked},t.prototype.set=function(t,e){this._value=this._prepareValue(t),this.update(this._value,e),this._fireChangeEvent(this._value,e)},t.prototype.value=function(){return this.getValue()},t.prototype.update=function(t,e){this._callOnSet(t,e)},t.prototype.getContainer=function(){return this._container},t.prototype.destroy=function(){this._container&&this._container.parentNode.removeChild(this._container),this._removeEventsListener&&this._removeEventsListener()},t.prototype.getValue=function(){return void 0!==this._value?this._value:this.getProperty()},t.prototype._prepareValue=function(t){return t},t.prototype._callOnSet=function(t,e){this.options.onSet&&this.options.onSet.call(this,t,e)},t.prototype._fireChangeEvent=function(n,i){var r=this;n=void 0!==n?n:this.getValue(),this.emitter.emit("change",{value:n,options:i}),this.entry.tree.getParents().forEach(function(t){var e=t.properties.get(r.name);e&&e.emitter.emit("change-tree",{value:n,options:i,entry:r.entry})})},t}()),_=function(){function r(t,e){this.options={},this.entry=t,this._properties={},this._propertiesList=[],e&&e.forEach(this._setPropertyHandler.bind(this))}return r.prototype.add=function(t){this._setPropertyHandler(t)},r.prototype._setPropertyHandler=function(t){var e=r.handlers,n=t.handler;if(!n&&t.type)switch(t.type){case"boolean":n=e.CheckProperty;break;case"string":n=e.BaseProperty;break;default:n=e.BaseProperty}if(n){var i=o({},t||{});this._properties[t.name]=new n(t.name,this.entry,i),this._propertiesList.push(t.name)}},r.prototype.update=function(){this.list().forEach(function(t){t.update()})},r.prototype.value=function(t){var e=this.get(t);if(e)return e.value},r.prototype.set=function(t,e,n){var i=this.get(t);if(i)return i.set(e,n)},r.prototype.get=function(t){return this._properties[t]},r.prototype.list=function(){var e=this;return this._propertiesList.map(function(t){return e._properties[t]})},r.prototype.destroy=function(){for(var t in this._properties)if(this._properties.hasOwnProperty(t)){var e=this.get(t);e&&e.destroy&&e.destroy()}this._properties=null,this._propertiesList=[]},r.handlers={CheckProperty:v},r}(),m=0,g=function(s){function o(t,e,n,i){var r=s.call(this,Object.assign({},o.options,n))||this;return r.map=t,r.item=e,i&&r.tree.setParent(i),r.initProperties(),r.initItem(e),r}return e(o,s),o.prototype.initItem=function(t){var n=this,e=t._layer;if("group"===t.item_type||"root"===t.item_type)t.children&&t.children.length&&t.children.forEach(function(t){var e=new o(n.map,t,n.options,n);n.tree.addChildren(e)});else if("layer"===t.item_type){var i=(this.options.ngwConfig.applicationUrl+"/api/component/render/image").replace(/([^:]\/)\/+/g,"$1");e=this.map.registrateWmsLayer(this.id,{url:i,styleId:t.layer_style_id,transparency:t.layer_transparency,minResolution:t.layer_min_scale_denom,maxResolution:t.layer_max_scale_denom})}e&&(t._layer=e,"layer"===t.item_type&&t.layer_enabled&&this.properties.get("visibility").set(!0))},o.prototype.fit=function(){"layer"===this.item.item_type&&console.log(this.item)},o.options={properties:[{type:"boolean",name:"visibility",getProperty:function(){var t=this.entry;return"group"===t.item.item_type||("layer"===t.item.item_type?t.item.layer_enabled:"root"===t.item.item_type)},onSet:function(t){var e=this.entry;"layer"===e.item.item_type&&(t?e.map.addLayer(e.id):e.map.removeLayer(e.id),e.item.layer_enabled=t)}}]},o}(function(){function t(t){this.emitter=new a,this.options=Object.assign({},this.options,t),this.id=String(m++),this.tree=new d(this)}return t.prototype.initProperties=function(){this.properties=new _(this,this.options.properties)},t}()),b=function(){this.backspace=8,this.tab=9,this.enter=13,this.shift=16,this.ctrl=17,this.alt=18,this["pause/break"]=19,this.caps_lock=20,this.escape=27,this.page_up=33,this.page_down=34,this.end=35,this.home=36,this.left_arrow=37,this.up_arrow=38,this.right_arrow=39,this.down_arrow=40,this.insert=45,this.delete=46,this.left_window_key=91,this.right_window_key=92,this.select_key=93,this.numpad_0=96,this.numpad_1=97,this.numpad_2=98,this.numpad_3=99,this.numpad_4=100,this.numpad_5=101,this.numpad_6=102,this.numpad_7=103,this.numpad_8=104,this.numpad_9=105,this.multiply=106,this.add=107,this.subtract=109,this.decimal_point=110,this.divide=111,this.f1=112,this.f2=113,this.f3=114,this.f4=115,this.f5=116,this.f6=117,this.f7=118,this.f8=119,this.f9=120,this.f10=121,this.f11=122,this.f12=123,this.num_lock=144,this.scroll_lock=145,this["semi-colon"]=186,this.equal_sign=187,this[","]=188,this["-"]=189,this["."]=190,this["/"]=191,this["`"]=192,this["["]=219,this["\\"]=220,this["]"]=221,this["'"]=222},w=function(){function t(){this.keyCodeAlias=new b,this.keys={},this._windowOnFocus=this.windowOnFocus.bind(this),this._keysPressed=this.keysPressed.bind(this),this._keysReleased=this.keysReleased.bind(this),this.addKeyboardEventsListener()}return t.prototype.pressed=function(t){var e=this.keyCodeAlias[t];if(e)return this.keys[e]},t.prototype.addKeyboardEventsListener=function(){window.addEventListener("focus",this._windowOnFocus,!1),window.addEventListener("keydown",this._keysPressed,!1),window.addEventListener("keyup",this._keysReleased,!1)},t.prototype.removeKeyboardEventsListener=function(){window.removeEventListener("focus",this._windowOnFocus,!1),window.removeEventListener("keydown",this._keysPressed,!1),window.removeEventListener("keyup",this._keysReleased,!1)},t.prototype.keysPressed=function(t){t.stopPropagation(),this.keys[t.keyCode]||(this.keys[t.keyCode]=!0)},t.prototype.keysReleased=function(t){t.stopPropagation(),this.keys[t.keyCode]=!1},t.prototype.windowOnFocus=function(){this.keys={}},t}(),k=function(){function t(t){this.options={target:"map",displayConfig:{extent:[-180,-90,180,90]}},this.displayProjection="EPSG:3857",this.lonlatProjection="EPSG:4326",this.emitter=new a,this.keys=new w,this.settingsIsLoading=!1,this.options=function n(i,e,r){void 0===r&&(r=!1);var t=Array.isArray(e),s=t&&[]||{};return t?r?(i=i||[],s=s.concat(i),e.forEach(function(t,e){void 0===s[e]?s[e]=t:"object"==typeof t?s[e]=n(i[e],t,r):-1===i.indexOf(t)&&s.push(t)})):s=e:(i&&"object"==typeof i&&Object.keys(i).forEach(function(t){s[t]=i[t]}),Object.keys(e).forEach(function(t){"object"==typeof e[t]&&e[t]&&i[t]?s[t]=n(i[t],e[t],r):s[t]=e[t]})),s}(this.options,t),this.map=this.options.mapAdapter}return t.prototype.create=function(){return r(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return this.settings||!this._settings?[3,2]:[4,this.getSettings()];case 1:t.sent(),t.label=2;case 2:return this._setupMap(),[2,this]}})})},t.prototype.getSettings=function(){return r(this,void 0,void 0,function(){var e,n,i=this;return s(this,function(t){switch(t.label){case 0:return this.settings?[2,Promise.resolve(this.settings)]:this.settingsIsLoading?[2,new Promise(function(e){var n=function(t){e(t),i.emitter.removeListener("load-settings",n)};i.emitter.on("load-settings",n)})]:[3,1];case 1:this.settingsIsLoading=!0,e=void 0,t.label=2;case 2:return t.trys.push([2,4,,5]),[4,this._settings.getSettings(this.options)];case 3:return e=t.sent(),[3,5];case 4:throw n=t.sent(),this.settingsIsLoading=!1,new Error(n);case 5:if(e)return this.settings=e,this.settingsIsLoading=!1,this.emitter.emit("load-settings",e),[2,e];t.label=6;case 6:return[2]}})})},t.prototype._setupMap=function(){var t=this.settings.webmap,e=t.extent_bottom,n=t.extent_left,i=t.extent_top,r=t.extent_right;e&&n&&i&&r&&(this.options.displayConfig.extent=[e,n,i,r]);var s=this.options.displayConfig.extent;82<s[3]&&(s[3]=82),s[1]<-82&&(s[1]=-82),this.map.displayProjection=this.displayProjection,this.map.lonlatProjection=this.lonlatProjection,this.map.create({target:this.options.target}),this._addTreeLayers(),this._zoomToInitialExtent(),this.emitter.emit("build-map",this.map)},t.prototype._addTreeLayers=function(){return r(this,void 0,void 0,function(){var e,n;return s(this,function(t){switch(t.label){case 0:return[4,this.getSettings()];case 1:return(e=t.sent())&&(n=e.webmap.root_item)&&(this.layers=new g(this.map,n,this.options),this.emitter.emit("add-layers",this.layers)),[2]}})})},t.prototype._zoomToInitialExtent=function(){var t=this.runtimeParams.getParams(),e=t.lat,n=t.lon,i=t.zoom,r=t.angle;i&&n&&e?(this.map.setCenter([parseFloat(n),parseFloat(e)]),this.map.setZoom(parseInt(i,10)),r&&this.map.setRotation(parseFloat(r))):this.map.fit(this.options.displayConfig.extent)},t}();function L(n){return r(this,void 0,void 0,function(){var e;return s(this,function(t){switch(t.label){case 0:return[4,(e=new k).create(n)];case 1:return t.sent(),[2,e]}})})}window.buildWebMap=L,t.buildWebMap=L,Object.defineProperty(t,"__esModule",{value:!0})});
