"use strict";angular.module("givmeApp",["ionic","ngCordova","anim-in-out","ui-rangeSlider","givmeApp.controllers","givmeApp.services","givmeApp.directive","ngOpenFB"]).run(function(t,e){e.init({appId:"898908930181474"}),t.ready(function(){window.cordova&&window.cordova.plugins&&window.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0)),window.StatusBar&&StatusBar.styleLightContent(),window.plugins.nativepagetransitions.globalOptions.duration=300,window.plugins.nativepagetransitions.globalOptions.iosdelay=60,window.plugins.nativepagetransitions.globalOptions.androiddelay=60,window.plugins.nativepagetransitions.globalOptions.winphonedelay=60,window.plugins.nativepagetransitions.globalOptions.slowdownfactor=2,window.plugins.nativepagetransitions.globalOptions.fixedPixelsTop=0,window.plugins.nativepagetransitions.globalOptions.fixedPixelsBottom=0})}).config(function(t,e,l){l.views.transition("none"),t.state("home",{cache:!1,url:"/",templateUrl:"screens/menu/menu.tpl.html",controller:"MenuCtrl"}).state("help",{cache:!1,url:"/help",templateUrl:"screens/help/help.tpl.html",controller:"HelpCtrl"}).state("menu",{cache:!1,url:"/menu",templateUrl:"screens/menu/menu.tpl.html",controller:"MenuCtrl"}).state("login",{cache:!1,url:"/login",templateUrl:"screens/login/login.tpl.html",controller:"LoginCtrl"}).state("settings",{url:"/settings",templateUrl:"screens/settings/settings.tpl.html",controller:"SettingsCtrl"}).state("settings-general",{url:"/settings/general",templateUrl:"screens/settings-general/settings-general.tpl.html",controller:"SettingsGeneralCtrl"}).state("settings-security",{url:"/settings/security",templateUrl:"screens/settings-security/settings-security.tpl.html",controller:"SettingsSecurityCtrl"}).state("settings-discovery",{url:"/settings/discovery",templateUrl:"screens/settings-discovery/settings-discovery.tpl.html",controller:"SettingsDiscoveryCtrl"}).state("settings-profile",{url:"/settings/profile",templateUrl:"screens/settings-profile/settings-profile.tpl.html",controller:"SettingsProfileCtrl"}).state("settings-contact",{url:"/settings/contact",templateUrl:"screens/settings-contact/settings-contact.tpl.html",controller:"SettingsContactCtrl"}).state("settings-contact-slug",{url:"/settings/contact/:slug",templateUrl:"screens/settings-contact/settings-contact.tpl.html",controller:"SettingsContactCtrl"}).state("settings-legal",{url:"/settings/legal",templateUrl:"screens/settings-legal/settings-legal.tpl.html",controller:"SettingsLegalCtrl"}).state("settings-privacy",{url:"/settings/legal/privacy",templateUrl:"screens/settings-legal/settings-legal.tpl.html",controller:"SettingsLegalCtrl"}).state("settings-terms",{url:"/settings/legal/terms",templateUrl:"screens/settings-legal/settings-legal.tpl.html",controller:"SettingsLegalCtrl"}).state("settings-contact-us",{url:"/settings/legal/contact-us",templateUrl:"screens/settings-legal/settings-legal.tpl.html",controller:"SettingsLegalCtrl"}).state("settings-discovery-card",{url:"/settings/discovery/card",templateUrl:"screens/discovery-card/discovery-card.tpl.html",controller:"DiscoveryCardCtrl"}).state("settings-contact-card",{url:"/settings/contact/card",templateUrl:"screens/contact-card/contact-card.tpl.html",controller:"ContactCardCtrl"}).state("settings-profile-card",{url:"/settings/profile/card",templateUrl:"screens/profile-card/profile-card.tpl.html",controller:"ProfileCardCtrl"}).state("play",{cache:!1,url:"/play",templateUrl:"screens/discovery/play.tpl.html",controller:"PlayCtrl"}).state("video",{cache:!1,url:"/room/:roomId",templateUrl:"screens/video/video.tpl.html",controller:"VideoCtrl"}).state("pocket",{url:"/pocket",templateUrl:"screens/pocket/pocket.tpl.html",controller:"PocketCtrl"}).state("match",{cache:!1,url:"/match",templateUrl:"screens/match/match.tpl.html",controller:"MatchCtrl"}).state("sending-contact-card",{cache:!1,url:"/sending/contact/card",templateUrl:"screens/sending-contact-card/sending-contact-card.tpl.html",controller:"SendingContactCardCtrl"}).state("receive-contact-card",{cache:!1,url:"/receive/contact/card",templateUrl:"screens/receive-contact-card/receive-contact-card.tpl.html",controller:"ReceiveContactCardCtrl"}),e.otherwise("/")}),angular.module("givmeApp.controllers",[]),angular.module("givmeApp.services",[]),angular.module("givmeApp.directive",[]),document.addEventListener("deviceready",function(){cordova.plugins.backgroundMode.setDefaults({text:"Doing heavy tasks."}),cordova.plugins.backgroundMode.enable(),cordova.plugins.backgroundMode.onactivate=function(){setTimeout(function(){cordova.plugins.backgroundMode.configure({text:"Running in background for more than 5s now."})},5e3)}},!1);