	var __wxAppData = {}; 	var __wxRoute; 	var __wxRouteBegin; 	var __wxAppCode__ = {};	var global = {};	var __wxAppCurrentFile__; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var Behavior = Behavior || function(){};
	
	define("pages/index/data.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var i=[[{url:"",title:"不孕不育",icoImage:"http://www.kmhxnkyy.com/weixin/images/icons.png",icoPosition:"-223px -72px"},{url:"",title:"无痛人流",icoImage:"http://www.kmhxnkyy.com/weixin/images/icons.png",icoPosition:"-223px 0;"},{url:"",title:"温馨产科",icoImage:"http://www.kmhxnkyy.com/weixin/images/icons.png",icoPosition:"0 0"},{url:"",title:"月经疾病",icoImage:"http://www.kmhxnkyy.com/weixin/images/icons.png",icoPosition:"-74px 0;"},{url:"",title:"乳腺疾病",icoImage:"http://www.kmhxnkyy.com/weixin/images/icons.png",icoPosition:"-150px 0"},{url:"",title:"宫颈修复",icoImage:"http://www.kmhxnkyy.com/weixin/images/icons.png",icoPosition:"0 -72px"},{url:"",title:"妇科炎症",icoImage:"http://www.kmhxnkyy.com/weixin/images/icons.png",icoPosition:"-74px -72px"},{url:"",title:"妇科微创",icoImage:"http://www.kmhxnkyy.com/weixin/images/icons.png",icoPosition:"-150px -72px"}],[{url:"",title:"前列腺炎",icoImage:"http://www.kmhxnkyy.com/weixin/images/in_pic1.png",icoPosition:"0 0"},{url:"",title:"阳痿",icoImage:"http://www.kmhxnkyy.com/weixin/images/in_pic2.png",icoPosition:"0 0"},{url:"",title:"早泄",icoImage:"http://www.kmhxnkyy.com/weixin/images/in_pic3.png",icoPosition:"0 0"},{url:"",title:"包皮龟头炎",icoImage:"http://www.kmhxnkyy.com/weixin/images/in_pic4.png",icoPosition:"0 0"},{url:"",title:"包皮过长",icoImage:"http://www.kmhxnkyy.com/weixin/images/in_pic5.png",icoPosition:"0 0"},{url:"",title:"泌尿感染",icoImage:"http://www.kmhxnkyy.com/weixin/images/in_pic6.png",icoPosition:"0 0"},{url:"",title:"性传播疾病",icoImage:"http://www.kmhxnkyy.com/weixin/images/in_pic7.png",icoPosition:"0 0"},{url:"",title:"男性不育",icoImage:"http://www.kmhxnkyy.com/weixin/images/in_pic8.png",icoPosition:"0 0"}],[{url:"",title:"鼻炎",icoImage:"http://www.kmhxnkyy.com/weixin/images/nav1.jpg",icoPosition:"0 0"},{url:"",title:"过敏性鼻炎",icoImage:"http://www.kmhxnkyy.com/weixin/images/nav2.jpg",icoPosition:"0 0"},{url:"",title:"鼻窦炎",icoImage:"http://www.kmhxnkyy.com/weixin/images/nav3.jpg",icoPosition:"0 0"},{url:"",title:"鼻息肉",icoImage:"http://www.kmhxnkyy.com/weixin/images/nav4.jpg",icoPosition:"0 0"},{url:"",title:"耳鸣",icoImage:"http://www.kmhxnkyy.com/weixin/images/nav5.jpg",icoPosition:"0 0"},{url:"",title:"中耳炎",icoImage:"http://www.kmhxnkyy.com/weixin/images/nav6.jpg",icoPosition:"0 0"},{url:"",title:"鼓膜穿孔",icoImage:"http://www.kmhxnkyy.com/weixin/images/nav7.jpg",icoPosition:"0 0"},{url:"",title:"鼓膜穿孔",icoImage:"http://www.kmhxnkyy.com/weixin/images/nav8.jpg",icoPosition:"0 0"},{url:"",title:"咽炎",icoImage:"http://www.kmhxnkyy.com/weixin/images/nav9.jpg",icoPosition:"0 0"},{url:"",title:"扁桃体炎",icoImage:"http://www.kmhxnkyy.com/weixin/images/nav10.jpg",icoPosition:"0 0"},{url:"",title:"腺样体肥大",icoImage:"http://www.kmhxnkyy.com/weixin/images/nav11.jpg",icoPosition:"0 0"},{url:"",title:"鼾症",icoImage:"http://www.kmhxnkyy.com/weixin/images/nav12.jpg",icoPosition:"0 0"}]];module.exports={hospital_departments:i}; 
 			}); 
		define("pages/road/road.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{motto:"Hello World",userInfo:{},hasUserInfo:!1,canIUse:wx.canIUse("button.open-type.getUserInfo"),mode:"scaleToFill",arr:[],indicatorDots:!0,autoplay:!0,interval:2e3,duration:1e3},bindViewTap:function(){wx.navigateTo({url:"../logs/logs"})},onLoad:function(){for(var s=this,e=this.data.arr,o=1;o<=3;o++)e.push("/images/"+o+".jpg");this.setData({arr:e}),a.globalData.userInfo?this.setData({userInfo:a.globalData.userInfo,hasUserInfo:!0}):this.data.canIUse?a.userInfoReadyCallback=function(a){s.setData({userInfo:a.userInfo,hasUserInfo:!0})}:wx.getUserInfo({success:function(e){a.globalData.userInfo=e.userInfo,s.setData({userInfo:e.userInfo,hasUserInfo:!0})}})},getUserInfo:function(s){console.log(s),a.globalData.userInfo=s.detail.userInfo,this.setData({userInfo:s.detail.userInfo,hasUserInfo:!0})}}); 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return(t=t.toString())[1]?t:"0"+t};module.exports={formatTime:function(e){var n=e.getFullYear(),r=e.getMonth()+1,o=e.getDate(),u=e.getHours(),i=e.getMinutes(),a=e.getSeconds();return[n,r,o].map(t).join("/")+" "+[u,i,a].map(t).join(":")}}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";App({onLaunch:function(){var n=this,s=wx.getStorageSync("logs")||[];s.unshift(Date.now()),wx.setStorageSync("logs",s),wx.login({success:function(n){}}),wx.getSetting({success:function(s){s.authSetting["scope.userInfo"]&&wx.getUserInfo({success:function(s){n.globalData.userInfo=s.userInfo,n.userInfoReadyCallback&&n.userInfoReadyCallback(s)}})}})},globalData:{userInfo:null}}); 
 			}); 	require("app.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp(),e=require("data.js");Page({home:function(){wx.redirectTo({url:"/"})},calling1:function(){wx.makePhoneCall({phoneNumber:"087165090790"})},calling2:function(){wx.makePhoneCall({phoneNumber:"087165367676"})},calling3:function(){wx.makePhoneCall({phoneNumber:"087165323323"})},data:{motto:"Hello World",userInfo:{},hasUserInfo:!1,canIUse:wx.canIUse("button.open-type.getUserInfo"),mode:"scaleToFill",arr:[],indicatorDots:!0,autoplay:!0,interval:2e3,duration:1e3,imgwidth:800,array_department:e.hospital_departments},bindViewTap:function(){wx.navigateTo({url:"../logs/logs"})},onLoad:function(){for(var e=this,o=this.data.arr,n=1;n<=1;n++)o.push("/images/"+n+".jpg");this.setData({arr:o}),a.globalData.userInfo?this.setData({userInfo:a.globalData.userInfo,hasUserInfo:!0}):this.data.canIUse?a.userInfoReadyCallback=function(a){e.setData({userInfo:a.userInfo,hasUserInfo:!0})}:wx.getUserInfo({success:function(o){a.globalData.userInfo=o.userInfo,e.setData({userInfo:o.userInfo,hasUserInfo:!0})}})},getUserInfo:function(e){console.log(e),a.globalData.userInfo=e.detail.userInfo,this.setData({userInfo:e.detail.userInfo,hasUserInfo:!0})}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/logs/logs';__wxRouteBegin = true; 	define("pages/logs/logs.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../utils/util.js");Page({data:{logs:[]},onLoad:function(){this.setData({logs:(wx.getStorageSync("logs")||[]).map(function(a){return t.formatTime(new Date(a))})})}}); 
 			}); 	require("pages/logs/logs.js");
 	