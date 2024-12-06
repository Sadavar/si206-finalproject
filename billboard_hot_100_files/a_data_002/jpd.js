/*BANNER WRAPPER 11/25/2024 17:19:43 */



(function() {

var DEBUG = 0;
var ORDER_ID = 13622;
var LINE_ITEM_ID = 68686;
var SITE_MAPPINGS = {"aliases":{"vibe.com":"vibe.com","*.vibe.com":"vibe.com","hollywoodreporter.com":"hollywoodreporter.com","hollywoodreporter.pmcqa.com":"hollywoodreporter.com","*.hollywoodreporter.com":"hollywoodreporter.com","www.movieline.com":"www.movieline.com","rollingstone.com":"rollingstone.com","*.rollingstone.com":"rollingstone.com","www.billboard.com":"www.billboard.com","":"vibe-OLD.com","wwd.com":"wwd.com","pmc-wwd-preprod.go-vip.net":"wwd.com","www.hollywoodlife.com":"www.hollywoodlife.com","deadline.com":"deadline.com","*.deadline.com":"deadline.com","pmc-deadline-develop.go-vip.net":"deadline.com","tvline.com":"tvline.com","*.tvline.com":"tvline.com","bgr.com":"bgr.com","*.bgr.com":"bgr.com","variety.com":"variety.com","*.variety.com":"variety.com","variety-2020.pmcqa.com":"variety.com","footwearnews.com":"footwearnews.com","*.footwearnews.com":"footwearnews.com","goldderby.com":"goldderby.com","*.goldderby.com":"goldderby.com","www.indiewire.com":"www.indiewire.com","*.indiewire.com":"www.indiewire.com","*.indiewire.pmcqa.com":"www.indiewire.com","www.sheknows.com":"www.sheknows.com","demo.jetpack.net":"demo.jetpack.net","robbreport.com":"robbreport.com","*.robbreport.com":"robbreport.com","pmcp-2080.robbreport.pmcqa.com":"robbreport.com","dirt.com":"dirt.com","*.dirt.com":"dirt.com","artnet.com":"artnet.com","*.artnet.com":"artnet.com","artnews.com":"artnews.com","*.artnews.com":"artnews.com","stylecaster.com":"stylecaster.com","*.stylecaster.com":"stylecaster.com","theportalist.com":"theportalist.com","*.theportalist.com":"theportalist.com","explorethearchive.com":"explorethearchive.com","*.explorethearchive.com":"explorethearchive.com","yummytummyaarthi.com":"yummytummyaarthi.com","*.yummytummyaarthi.com":"yummytummyaarthi.com","thepennyhoarder.com":"thepennyhoarder.com","*.thepennyhoarder.com":"thepennyhoarder.com","babynames.com":"babynames.com","*.babynames.com":"babynames.com","xonecole.com":"xonecole.com","*.xonecole.com":"xonecole.com","modernmom.com":"modernmom.com","*.modernmom.com":"modernmom.com","wonderwall.com":"wonderwall.com","*.wonderwall.com":"wonderwall.com","astrostyle.com":"astrostyle.com","*.astrostyle.com":"astrostyle.com","tvinsider.com":"tvinsider.com","*.tvinsider.com":"tvinsider.com","onthisday.com":"onthisday.com","*.onthisday.com":"onthisday.com","popmatters.com":"popmatters.com","*.popmatters.com":"popmatters.com","fashionisers.com":"fashionisers.com","*.fashionisers.com":"fashionisers.com","wanderincolor.com":"wanderincolor.com","*.wanderincolor.com":"wanderincolor.com","eccentricitiesbyjvg.com":"eccentricitiesbyjvg.com","*.eccentricitiesbyjvg.com":"eccentricitiesbyjvg.com","tashasartisanfoods.com":"tashasartisanfoods.com","*.tashasartisanfoods.com":"tashasartisanfoods.com","ahaparenting.com":"ahaparenting.com","*.ahaparenting.com":"ahaparenting.com","sportico.com":"sportico.com","*.sportico.com":"sportico.com","vibe-OLD.com":"vibe-OLD.com"},"mappings":{"vibe.com":"8","hollywoodreporter.com":"288","www.movieline.com":"334","rollingstone.com":"356","www.billboard.com":"418","wwd.com":"607","www.hollywoodlife.com":"648","deadline.com":"687","tvline.com":"688","bgr.com":"689","variety.com":"735","footwearnews.com":"858","goldderby.com":"942","www.indiewire.com":"1073","www.sheknows.com":"1078","demo.jetpack.net":"1339","robbreport.com":"1567","dirt.com":"1686","artnet.com":"1708","stylecaster.com":"1716","theportalist.com":"1717","explorethearchive.com":"1718","yummytummyaarthi.com":"1719","thepennyhoarder.com":"1720","babynames.com":"1721","xonecole.com":"1722","modernmom.com":"1723","wonderwall.com":"1724","astrostyle.com":"1725","tvinsider.com":"1726","onthisday.com":"1727","popmatters.com":"1728","fashionisers.com":"1730","wanderincolor.com":"1731","eccentricitiesbyjvg.com":"1732","tashasartisanfoods.com":"1733","ahaparenting.com":"1734","sportico.com":"1742","vibe-OLD.com":"1744","artnews.com":"1745"}};
var DESKTOPCS = -7000;
var TABLETCS = -8000;
var MOBILECS = -9000;

var windowTop = null;
try {
    windowTop = (typeof mraid == "undefined" && typeof $sf == "undefined") ? window.top : window;
    // empty request to see if we have access to window.top
    window.top.innerHeight;
} catch(ex) {
    windowTop = window;
}

jpGetParameterByName = function(name) {
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null ) {
    return "";
  } else {
    return results[1];
  }
};

jpGetErrorObject = function(){
    try { throw Error('') } catch(err) { return err; }
};

jpLog = function(message, args) {
	if(DEBUG) {
		var err = jpGetErrorObject();

		var clean = "";
		try {
			var caller_line = err.stack.split("\n")[4];
			var index = caller_line.indexOf("at ");
			clean = caller_line.slice(index+2, caller_line.length);
		} catch(ex) {
			clean = "Stack Error";
		}

		if(typeof message == "string") {
			if(!args) {
				console.log("[JETPACK] (68686): " + message + " : " + clean);
			} else {
				console.log("[JETPACK] (68686): " + message, args);
			}
		} else {
			console.log("[JETPACK] (68686): OBJECT", message);
		}
	}
};

var jpSafeFrame = typeof jpOverrideSafeFrame !== "undefined" ?  jpOverrideSafeFrame : false;
if(typeof $sf != "undefined") {
	jpLog("SAFE FRAME");
	jpLog($sf);
	jpSafeFrame = true;
	if($sf.ext) {
        $sf.ext.register(300, 600, function(status, data) {
            jpLog("SAFE FRAME UPDATE: " + status);
        });
    }
} else {
	jpLog("NOT SAFE FRAME");
}

console.log("!!! JP SAFE FRAME: ", jpSafeFrame);

if(typeof jpMainDocs == "undefined") { jpMainDocs = {}; }
if(typeof jpMainWindows == "undefined") { jpMainWindows = {}; }

var useIsolated = true;
try {
  jpMainDocs[68686] = useIsolated ? window.top.document : window.document;
  jpMainWindows[68686] = useIsolated ? window.top : window;
} catch(ex) {
  jpMainDocs[68686] = window.document;
  jpMainWindows[68686] = window;

}

function getDeviceTypeCSID(csid) {
    var DESKTOPCS = -7000;
    var TABLETCS = -8000;
    var MOBILECS = -9000;
    switch (jpMainWindows[68686].JPGetDeviceType()) {
        case "desktop": return DESKTOPCS + "" + csid;
        case "tablet": return TABLETCS + "" + csid;
        case "mobile": return MOBILECS + "" + csid;
        default: return csid;
    }
}

function getSiteID() {
    var defaultSite = 687;
    var hostname = null;
	try {
		hostname = windowTop.location.hostname;
	} catch(ex) {
		hostname = window.location.hostname;
	}

	// If this is a demo link, use the url passed into the proxy
	if(location.hostname.match(/jetpackdigital/) != null && jpGetParameterByName("url")) {
		var url = jpGetParameterByName("url");
		var match = url.match(/https?:\/\/(.*)/);
		if(match) {
            hostname = match[1].split("/")[0];
		} else {
            hostname = url.split("/")[0];
		}
	}

	var parts = hostname.split(".");
	parts[0] = "*";
    var wchostname = parts.join(".");

    var alias = SITE_MAPPINGS.aliases[hostname];
	return (alias && SITE_MAPPINGS.mappings[alias]) ? SITE_MAPPINGS.mappings[alias] : defaultSite;
}

function trackImpression(classname, cs_id, companion, sid) {
    classname = classname.substr(0, classname.indexOf("_")).toLowerCase();
    var lid = (lid) ? lid : LINE_ITEM_ID;
    var oid = ORDER_ID;
    var trackingpixel = "https://tracking.jetpackdigital.com/jpt";
    var ref = "";
    try {
        ref = windowTop.location.href;
    } catch(ex) {
        // No ref information
    }

    // Track the device type cs id as well if this is a peak unit
    cs_id = getDeviceTypeCSID(cs_id);

    var rawtpurl = "Xvp%2B%2B4q%2FZpw%3D";
    var ord = Math.floor(Math.random()*10000000000);
    var tp = trackingpixel + "?ord="+ord+"&sid=" + sid + "&oid=" + oid + "&lid=" + lid + "&csid=" + cs_id + "&c=" + companion + "&rf=" + escape(ref) + '&r=' + ord + '&itt=' + rawtpurl;
    var img = new Image();
    img.src = tp;
}

var mainWindow = jpMainWindows[68686];
mainWindow.JPStartTime = Date.now();
var mainDoc = jpMainDocs[68686];

var jpTrackTimeSpent = true;
if(!mainWindow.jpTrackTimeSpentLineItems) { mainWindow.jpTrackTimeSpentLineItems = {}; }
mainWindow.jpTrackTimeSpentLineItems[68686] = jpTrackTimeSpent;

mainWindow.siteSettings = JSON.parse("{\"deadline.com:0:*\":[{\"bannerunit\":{\"allow_site_setting_override\":\"1\",\"override_param_origins\":\"{\\\"allow_site_setting_override\\\":\\\"Local Setting\\\",\\\"jscode\\\":\\\"Site Setting\\\",\\\"override_param_origins\\\":\\\"Site Setting\\\",\\\"prependelement\\\":\\\"Site Setting\\\",\\\"appendelement\\\":\\\"Site Setting\\\",\\\"bannerautoposition\\\":\\\"Site Setting\\\",\\\"bannerautofilliframe\\\":\\\"Site Setting\\\",\\\"addbannerclass\\\":\\\"Site Setting\\\",\\\"desktopmaxwidth\\\":\\\"Site Setting\\\",\\\"tabletmaxwidth\\\":\\\"Site Setting\\\",\\\"mobilemaxwidth\\\":\\\"Site Setting\\\",\\\"usedesktopfortablet\\\":\\\"Site Setting\\\",\\\"skipiastracking\\\":\\\"Site Setting\\\",\\\"code\\\":\\\"Site Setting\\\"}\",\"selected_site_settings\":\"17491:Default\",\"prependelement\":\"\",\"appendelement\":\"\",\"bannerautoposition\":\"\",\"bannerautofilliframe\":\"\",\"addbannerclass\":\"\",\"desktopmaxwidth\":\"\",\"tabletmaxwidth\":\"\",\"mobilemaxwidth\":\"\",\"usedesktopfortablet\":\"\",\"skipiastracking\":\"\",\"pretty_code\":\"\",\"pretty_jscode\":\"\",\"settings_url\":\"https:\\/\\/ads.jetpackdigital.com\\/site-settings\\/687\\/bannerunit.268950.1566513407.json\",\"site_id\":\"687\",\"code\":\"\",\"init_code\":\"\",\"css\":\"\",\"run_code\":\"\",\"placementcode\":\"\",\"open_jscode\":\"\",\"close_jscode\":\"\",\"click_code\":\"\",\"jscode\":\"\"}}],\"robbreport.com:0:*\":[{\"bannerunit\":{\"selected_site_settings\":\":Default\",\"allow_site_setting_override\":0,\"settings_url\":\"\",\"site_id\":\"1567\",\"code\":\"\",\"init_code\":\"\",\"css\":\"\",\"run_code\":\"\",\"placementcode\":\"\",\"open_jscode\":\"\",\"close_jscode\":\"\",\"click_code\":\"\",\"jscode\":\"\"}}],\"rollingstone.com:0:*\":[{\"bannerunit\":{\"allow_site_setting_override\":\"1\",\"override_param_origins\":\"{\\\"allow_site_setting_override\\\":\\\"Local Setting\\\",\\\"code\\\":\\\"Local Setting\\\",\\\"jscode\\\":\\\"Local Setting\\\",\\\"override_param_origins\\\":\\\"Site Setting\\\",\\\"prependelement\\\":\\\"Site Setting\\\",\\\"appendelement\\\":\\\"Site Setting\\\",\\\"bannerautoposition\\\":\\\"Local Setting\\\",\\\"bannerautofilliframe\\\":\\\"Local Setting\\\",\\\"addbannerclass\\\":\\\"Site Setting\\\",\\\"desktopmaxwidth\\\":\\\"Site Setting\\\",\\\"tabletmaxwidth\\\":\\\"Site Setting\\\",\\\"mobilemaxwidth\\\":\\\"Site Setting\\\",\\\"usedesktopfortablet\\\":\\\"Site Setting\\\",\\\"skipiastracking\\\":\\\"Site Setting\\\"}\",\"selected_site_settings\":\"17481:Default\",\"prependelement\":\"\",\"appendelement\":\"\",\"bannerautoposition\":\"\",\"bannerautofilliframe\":\"\",\"addbannerclass\":\"\",\"desktopmaxwidth\":\"\",\"tabletmaxwidth\":\"\",\"mobilemaxwidth\":\"\",\"usedesktopfortablet\":\"\",\"skipiastracking\":\"\",\"pretty_code\":\"\",\"pretty_jscode\":\"\",\"settings_url\":\"https:\\/\\/ads.jetpackdigital.com\\/site-settings\\/356\\/bannerunit.736984.1561408528.json\",\"site_id\":\"356\",\"code\":\"\",\"init_code\":\"\",\"css\":\"\",\"run_code\":\"\",\"placementcode\":\"\",\"open_jscode\":\"\",\"close_jscode\":\"\",\"click_code\":\"\",\"jscode\":\"\"}}],\"footwearnews.com:0:*\":[{\"bannerunit\":{\"allow_site_setting_override\":\"1\",\"override_param_origins\":\"{\\\"jscode\\\":\\\"Local Setting\\\",\\\"override_param_origins\\\":\\\"Site Setting\\\",\\\"prependelement\\\":\\\"Site Setting\\\",\\\"appendelement\\\":\\\"Site Setting\\\",\\\"bannerautoposition\\\":\\\"Line Item Setting\\\",\\\"bannerautofilliframe\\\":\\\"Line Item Setting\\\",\\\"addbannerclass\\\":\\\"Site Setting\\\",\\\"desktopmaxwidth\\\":\\\"Site Setting\\\",\\\"tabletmaxwidth\\\":\\\"Site Setting\\\",\\\"mobilemaxwidth\\\":\\\"Site Setting\\\",\\\"usedesktopfortablet\\\":\\\"Site Setting\\\",\\\"code\\\":\\\"Site Setting\\\"}\",\"selected_site_settings\":\"Default\",\"prependelement\":\"\",\"appendelement\":\"\",\"bannerautoposition\":\"\",\"bannerautofilliframe\":\"\",\"addbannerclass\":\"\",\"desktopmaxwidth\":\"\",\"tabletmaxwidth\":\"\",\"mobilemaxwidth\":\"\",\"usedesktopfortablet\":\"\",\"pretty_code\":\"\",\"pretty_jscode\":\"$jp.mainWindow.requestAnimationFrame(function updateBannerLocation() { if(JP($jp.customunit.bannerElement).hasClass(\\\"jpsticky\\\")) { JP($jp.customunit.bannerElement).css(\\\"left\\\", \\\"50%\\\"); $jp.mainWindow.requestAnimationFrame(updateBannerLocation); return; } var width = JP($jp.customunit.bannerElement).width(); var left = Math.floor(($jp.mainWindow.innerWidth-width)\\/2); var parent = JP($jp.customunit.bannerElement).parent().parent(); var pbox = parent[0].getBoundingClientRect(); var marginLeft = pbox.left - left; JP($jp.customunit.bannerElement).css(\\\"left\\\", -marginLeft + \\\"px\\\"); JP($jp.customunit.bannerElement).parent().css(\\\"margin\\\", \\\"0 auto\\\"); $jp.mainWindow.requestAnimationFrame(updateBannerLocation); });\",\"settings_url\":\"\",\"site_id\":\"858\",\"code\":\"\",\"init_code\":\"\",\"css\":\"\",\"run_code\":\"\",\"placementcode\":\"\",\"open_jscode\":\"\",\"close_jscode\":\"\",\"click_code\":\"\",\"jscode\":\"$jp.mainWindow.requestAnimationFrame(function updateBannerLocation() { if(JP($jp.customunit.bannerElement).hasClass(\\\"jpsticky\\\")) { JP($jp.customunit.bannerElement).css(\\\"left\\\", \\\"50%\\\"); $jp.mainWindow.requestAnimationFrame(updateBannerLocation); return; } var width = JP($jp.customunit.bannerElement).width(); var left = Math.floor(($jp.mainWindow.innerWidth-width)\\/2); var parent = JP($jp.customunit.bannerElement).parent().parent(); var pbox = parent[0].getBoundingClientRect(); var marginLeft = pbox.left - left; JP($jp.customunit.bannerElement).css(\\\"left\\\", -marginLeft + \\\"px\\\"); JP($jp.customunit.bannerElement).parent().css(\\\"margin\\\", \\\"0 auto\\\"); $jp.mainWindow.requestAnimationFrame(updateBannerLocation); });\"}}],\"www.indiewire.com:0:*\":[{\"bannerunit\":{\"allow_site_setting_override\":\"1\",\"override_param_origins\":\"{\\\"allow_site_setting_override\\\":\\\"Local Setting\\\",\\\"code\\\":\\\"Local Setting\\\",\\\"override_param_origins\\\":\\\"Site Setting\\\",\\\"prependelement\\\":\\\"Site Setting\\\",\\\"appendelement\\\":\\\"Site Setting\\\",\\\"bannerautoposition\\\":\\\"Site Setting\\\",\\\"bannerautofilliframe\\\":\\\"Site Setting\\\",\\\"addbannerclass\\\":\\\"Site Setting\\\",\\\"desktopmaxwidth\\\":\\\"Site Setting\\\",\\\"tabletmaxwidth\\\":\\\"Site Setting\\\",\\\"mobilemaxwidth\\\":\\\"Site Setting\\\",\\\"usedesktopfortablet\\\":\\\"Site Setting\\\",\\\"skipiastracking\\\":\\\"Site Setting\\\",\\\"jscode\\\":\\\"Site Setting\\\"}\",\"selected_site_settings\":\"Default\",\"prependelement\":\"\",\"appendelement\":\"\",\"bannerautoposition\":\"\",\"bannerautofilliframe\":\"\",\"addbannerclass\":\"\",\"desktopmaxwidth\":\"\",\"tabletmaxwidth\":\"\",\"mobilemaxwidth\":\"\",\"usedesktopfortablet\":\"\",\"skipiastracking\":\"\",\"pretty_code\":\"<style>#leaderboard-no-padding { overflow: visible !important; }<\\/style>\",\"pretty_jscode\":\"\",\"settings_url\":\"\",\"site_id\":\"1073\",\"code\":\"<style>#leaderboard-no-padding { overflow: visible !important; }<\\/style>\",\"init_code\":\"\",\"css\":\"\",\"run_code\":\"\",\"placementcode\":\"\",\"open_jscode\":\"\",\"close_jscode\":\"\",\"click_code\":\"\",\"jscode\":\"\"}}]}");

var jpsecure = (window.location.protocol === 'https:');
var $jp = {};
var lineItemId = 68686;

var overrideSubscriberID = (typeof JIN != "undefined" && JIN.publisher_id) ? JIN.publisher_id : 0;
var overrideSubscriberMappingURL = (overrideSubscriberID) ? "https://ads.jetpackdigital.com/subscriber-mappings/" + overrideSubscriberID + "/" : null;
var subscriberMappingURL = (overrideSubscriberID) ? overrideSubscriberMappingURL : "https://ads.jetpackdigital.com/subscriber-mappings/47/";
var siteSettingsNames = JSON.parse("[[\"Prelude\"]]");

if(typeof jpActiveBanners == "undefined") { jpActiveBanners = new Array(); }
var fiddefined = (typeof window.fid != "undefined" && window != windowTop);
var jpBannerIdGlobal = (fiddefined) ? window.fid : Math.floor(Math.random() * 100000000);
var fid = (fiddefined) ? window.fid : null;
var qfid = (fiddefined) ? true : false;

if(typeof jpUnloadUnits68686 == "undefined") {
	jpUnloadUnits68686 = function() {
		// Unset the loaded variable
		loadedJp_68686 = null;
		delete loadedJp_68686;

		if(typeof JP != "undefined") {
			JP("#jp_swap_embed").remove();
			JP("#jp_overlay").remove();
			JP("#jpsidekick").remove();
			JP("#jppeelbackexpanded").remove();
			JP("#jppeelbackpreview").remove();
			JP("#jpintoverlay").remove();
			JP("#jpeditorialunit").remove();
			JP("#jpplatform").remove();
			JP("#jpd_leftwell").remove();
			JP("#jpd_rightwell").remove();
			JP("#jpsuperheader").remove();
		    JP("#supervideoplayerwrapper").remove();
		    JP("#videowallplayerwrapper").remove();
		    JP(".jpinlineunit").each(function() {
		    	JP(this).remove();
		    });

		    JP("[id^=jpplatform_68686]").each(function() {
		    	if(JP(this).html().length > 0) {
		    		var f = JP(this).attr("id").match(/\d+$/);
		 			JP("#jpiframe_68686_" + f).remove();

		    	}
		    });

		    JP("div[id^='jpiframe_']").each(function() {
	 			var lineitemnumber = JP(this).attr("id").match(/jpiframe_(\d+)/)[1];
	 			if(lineitemnumber == 68686) {
		 			JP(this).parent().find("div[id^='jpiframe_']").each(function() {
			 			var slineitemnumber = JP(this).attr("id").match(/jpiframe_(\d+)/)[1];
			 			if(slineitemnumber != 68686) {
			 				jpLog("FOUND: " + parseInt(lineitemnumber));
			 				JP(this).remove();
			 			}
		 			});
		 		}
 			});

		    for(k in jpActiveBanners) {
		    	jpActiveBanners[k] = null;
		    	delete jpActiveBanners[k];
		    }

		    JP(document).trigger("jpUnloadUnits");
			if(mainWindow.jpfn) {
                delete mainWindow.jpfn[$jp.eventElement];
            }
	    }
	};
}

function jpUnloadUnits() {

    jpLog("CALLED JP UNLOAD UNITS");

    // Unset the loaded variable
    loadedJp_68686 = null;
    delete loadedJp_68686;

    if(typeof JP != "undefined") {
        JP("#jp_swap_embed").remove();
        JP("#jp_overlay").remove();
        JP("#jpsidekick").remove();
        JP("#jppeelbackexpanded").remove();
        JP("#jppeelbackpreview").remove();
        JP("#jpintoverlay").remove();
        JP("#jpeditorialunit").remove();
        JP("#jpplatform").remove();
        JP("#jpd_leftwell").remove();
        JP("#jpd_rightwell").remove();
        JP("#jpsuperheader").remove();
        JP("#jpampsuperheader").remove();
        JP("#jpvideowrapper").remove();
        JP("#supervideoplayerwrapper").remove();
        JP("#videowallplayerwrapper").remove();
        JP(".jpinlineunit").each(function() {
            JP(this).remove();
        });

        JP(document).trigger("jpUnloadUnits");

		if(mainWindow.jpfn) {
			delete mainWindow.jpfn[$jp.eventElement];
		}
    }
};

window.jpUnloadUnits = jpUnloadUnits68686;
mainWindow.jpUnloadUnits = jpUnloadUnits68686;

//window.jpUnloadUnits = jpUnloadUnits;


jpActiveBanners[jpBannerIdGlobal] = function(jpBannerId) {

var jpSiteWidth = parseInt("1000px".replace("px",""));

if(typeof jpGetQueryVariable == "undefined") {
	jpGetQueryVariable = function(variable, query) {
	  if(variable == "u") {
		  if(query.indexOf("u=") > -1) {
			  var result = query.substr(query.indexOf("u=") + 2);
			  result = result.replace(/&_=\d+/,"").replace(/&f=\d+/,"");
			  return result;
		  } else {
			  return null;
		  }
	  } else {
		  var vars = query.split("&");
		  for (var i=0;i<vars.length;i++) {
			jpLog(variable + "=");
			if(vars[i].substr(0, variable.length+1) == variable + "=") {
				return vars[i].substr(variable.length + 1);
			}
		  }
	  }
	};
}

var scriptSource = jpGetScriptSource(68686, "https://ads.jetpackdigital.com/");

(function(scripts) {
    var scripts = document.getElementsByTagName('script');
    var s = scripts[scripts.length - 1];

    if(!s || typeof s.getAttribute == "undefined" || !s.getAttribute('src') || !s.getAttribute('src').match(/^(http|https):\/\/(?!.*\?.*?\.jetpackdigital).*?\.jetpackdigital/) || s.getAttribute('src').indexOf("68686") == -1) {
        for(var i = scripts.length; i > 0; i--) {
                s = scripts[scripts.length - i];
                if(s && typeof s.getAttribute != "undefined" && s.getAttribute('src') && s.getAttribute('src').match(/^(http|https):\/\/(?!.*\?.*?\.jetpackdigital).*?\.jetpackdigital/) && s.getAttribute('src').indexOf("68686") > -1) {
                        break;
                } else if(s && typeof s.getAttribute != "undefined" && s.getAttribute('src') && s.getAttribute('src').match(/^(http|https):\/\/(?!.*\?.*?\.jetpackdigital).*?\.jetpackdigital/) && s.getAttribute('src').indexOf("68686") > -1) {
                         return s.getAttribute('src').substr(s.getAttribute('src').indexOf('https://ads.jetpackdigital.com/lineitems/68686'));
                } else {
                        s = scripts[scripts.length - 1];
                }
        }
    }

    if (s && typeof s.getAttribute != "undefined" && s.getAttribute.length !== undefined) {
        return s.src;
    }

    if(s && typeof s.getAttribute != "undefined") {
        return s.getAttribute('src', -1);
    } else {
        return null;
    }
}());

function jpGetScriptElement(line_item_id, dependent_element) {
    var scripts = document.getElementsByTagName('script');
    var s = scripts[scripts.length - 1];
    var parent = s.parentNode;
	if(!s || !s.src  ||
	   (!s.src.match(/^(http|https):\/\/(?!.*\?.*?\.jetpackdigital).*?\.jetpackdigital/) &&
	   !s.src.match(/^(http|https):\/\/jetpack\.vo\.llnwd\.net/)) ||
	   s.src.indexOf(line_item_id) == -1 || s.src.indexOf("jpd.js") == -1 || (dependent_element && parent.querySelector(dependent_element))) {
    	for(var i = scripts.length; i > 0; i--) {
    		s = scripts[scripts.length - i];
            if(typeof s == "undefined") { continue; }
			var parent = s.parentNode;
			if(s && s.src &&
			   (s.src.match(/(http|https):\/\/(?!.*\?.*?\.jetpackdigital).*?\.jetpackdigital/) ||
			   s.src.match(/(http|https):\/\/jetpack\.vo\.llnwd\.net/)) &&
			   s.src.indexOf(line_item_id) > -1 && s.src.indexOf("jpd.js") > -1 && (!dependent_element || !parent.querySelector(dependent_element))) {
    			break;
    		} else {
    			s = scripts[scripts.length - 1];
    		}
    	}
    }

	return s;
}

function jpGetScriptSource(line_item_id, secure_tag_url) {
    if(window.jpOriginalScriptUrl) {
        return window.jpOriginalScriptUrl;
    }

	try {
		if(window.parent && window.parent.jpOriginalScriptUrl) {
			return window.parent.jpOriginalScriptUrl;
        }
	} catch(ex) {
		console.log("Unable to get original script url: ", ex);
	}

	var s = jpGetScriptElement(line_item_id);
 	if (s && s.src) {
	    // This is the weird case where we're proxied, but not on the page to find the u
		if(!s.src.match(/^(http|https):\/\/(?!.*\?.*?\.jetpackdigital).*?\.jetpackdigital/) ||
		   !s.src.match(/^(http|https):\/\/jetpack\.vo\.llnwd\.net/)) {
			return secure_tag_url + "lineitems/" + s.src.substring(s.src.indexOf(line_item_id + "/jpd.js?u="));
		} else {
        	return s.src;
        }
    } else {
    	return null;
    }
}

var jpiframe = false;
jp_dma = 1200;

var u = null;

console.log("!!! ISOLATED WRAPPER: 1");

/* IGNORE IBUST:  */
    console.log("USE ISOLATED: ", mainWindow, mainWindow.document.querySelector("body"));
    fid = jpBannerId;
    const rand = Math.floor(Math.random() * 10000000000);
    window.JetpackBeacon = (r) => {
        return (r === rand);
    }

    try {
        let iframe = null;
        let parent = null;
        const iframes = window.top.document.querySelectorAll("iframe");
        console.log("IFRAMES: ", iframes);
        for(let i = 0; i < iframes.length; i++) {
            try {
                if(iframes[i].contentWindow.JetpackBeacon && iframes[i].contentWindow.JetpackBeacon(rand)) {
                    iframe = iframes[i];
                    parent = iframes[i].parentElement;
                    break;
                }
            } catch(ex) {
                // Pass through for iframes that we don't care about
            }
        }

        var jpplatdiv = document.createElement("div");
        jpplatdiv.id = "jpplatform_68686_" + fid;
        jpplatdiv.rel = "jpplatform_68686_" + fid;
        jpplatdiv.className = "jpplatform_68686";
        jpplatdiv.fid = fid;
        parent.appendChild(jpplatdiv);
        
    } catch(ex) {
        console.log("Unable to find parent iframe: ", ex);
    }

if(1 || (typeof jploaded == "undefined" && !jpiframe)) {

if(!jpiframe || jpSafeFrame) {





// See if the FID has been passed on the script line

if(scriptSource.indexOf("?f=") > -1) {
    fid = scriptSource.substr(scriptSource.indexOf("?f=") + 3);
    fid = fid.split("&")[0];
    qfid = true;
}  else if(scriptSource.indexOf("&f=") > -1) {
    fid = scriptSource.substr(scriptSource.indexOf("&f=") + 3);
    fid = fid.split("&")[0];
    qfid = true;
}

jpparentpage = location.href;
jploaded = true;

// Possible units to check for conflict
jpclickableskin = false;
jpsuperheader = false;
jpactiveskin = false;
jpactiveskinandoverlay = false;
jpactiveskincombined = false;
jpbannerunit = false;
jpeditorialunit = false;
jpinterstitialoverlay = false;
jpsiteoverlay = false;
jpswapassetunit = false;
jpsidekick = false;
jpinlineunit = false;
jppeelback = false;
jpsupervideo = false;
jpvideowall = false;
jpactivewall = false;
jpexpandablefooter = false;
jpmobileoverlay = false;
jpmobilebanner = false;
jpmobilebannerandoverlay = false;
jpmobileadhesion = false;
jpnull = null;

jp_skin = false;
jp_clickableskin = false;
jp_superheader = false;
jp_bannerunit = false;
jp_activeskin = false;
jp_activeskinandoverlay = false;
jp_activeskincombined = false;
jp_sidekick = false;
jp_editorialunit = false;
jp_interstitialoverlay = false;
jp_inlineunit = false;
jp_siteoverlay = false;
jp_swapassetunit = false;
jp_peelback = false;
jp_videowall = false;
jp_activewall = false;
jp_expandablefooter = false;
jp_mobileoverlay = false;
jp_mobilebanner = false;
jp_mobilebannerandoverlay = false;
jp_mobileadhesion = false;
jp_null = null;

jp_customunitfunctions = new Array();
jp_customunitindex = 0;

jp_clickthroughmutex = false;

jp_loadingDma = false;

jpDomain = null;
if(!jpDomain) {
	jpDomain = mainDoc.domain;
}

var m = jpDomain.match(new RegExp("(.*?)\.((com|net|org|info|coop|int|co\.uk|org\.uk|ac\.uk|uk|tv|me))$"));
if(m) {
	var n = m[1].split(".");
	var o = n[n.length-1];
	jpDomain = o + "." + m[2];
}

var jpCurrentTime = new Date();
var jpmonth = jpCurrentTime.getMonth() + 1;
jpmonth = (jpmonth < 10) ? "0" + jpmonth : jpmonth;
var jpday = jpCurrentTime.getDate();
jpday = (jpday < 10) ? "0" + jpday : jpday;
var jpyear = jpCurrentTime.getFullYear();
var jpCurrentDay = jpyear + "-" + jpmonth + "-" + jpday;

if(typeof jpord == "undefined") {
	jpord = Math.floor(Math.random()*100000000000);
};

if(typeof ord == "undefined") {
	ord = jpord;
} else {
	jpord = ord;
};

var jpBodyReadyInterval = null;
var jpBodyAvailable = false;
function jpBodyReady(func) {
	JP(document).ready(function() { func(); });
};

function jpElementReady(elementId,func) {
	if(JP("#" + elementId.replace(/#/,""))[0]) {
		func();
	} else {
		requestAnimationFrame(function() { jpElementReady(elementId, func); });
	}
};

var anchorelem = null;
var toplevelelem = null;

jpFindMainContentArea = function(elem) {
    var ww = JP(mainWindow).width();
    var likelyelem = null;
    var likelyelemwidth = 0;
    var likelyelemlength = 0;
    var likelyelemfull = false;
    JP(elem).children().each(function() {
		 if(JP(this).attr("id") == "jpsuperheader" || JP(this).attr("id") == "jpd_expfooter" || JP(this).hasClass("jpstage")) { return; }
         var cw = JP(this).width();
         var cl = JP(this).html().length;
         if(cl  > likelyelemlength) {
              likelyelemlength = cl;
              likelyelem = JP(this);
              if(cw > 700 && cw < ww) {
                  likelyelemfull = false;
              } else if(cw >= ww) {
                 likelyelemfull = true;
              }
         }
    });

    if(likelyelemfull) {
        if(!toplevelelem) {
            toplevelelem = likelyelem;
        }
        likelyelem = jpFindMainContentArea(likelyelem);
    }
    return likelyelem;
};

function jpLockClickThrough() {
	jp_clickthroughmutex = true;
};

function jpReleaseClickThrough() {
	jp_clickthroughmutex = false;
};

function jpCanClickThrough() {
	if(jpclickableskin && jpsupervideo) {
		return !jp_clickthroughmutex;
	} else {
		return true;
	}
};

function jpGenerateInlineStyles(style_id) {
	var cssstring = JP(style_id).html();

	var cssblocks = cssstring.split("}");
	for(i = 0; i < cssblocks.length; i++) {
	  var cssblock = cssblocks[i];

	  if(cssblock == "") {
	  	continue;
	  }

	  var csscom = cssblock.split("{");
	  if(csscom[0] == "") {
	  	continue;
	  }


	  var csselems = csscom[1].split(";");
	  if(!csselems.length) {
	  	csselems = new Array();
	  	csselems[0] = csscom[1];
	  }

	  for(j = 0; j < csselems.length; j++) {
	        if(csselems[j] != "") {
	                var cssitems = csselems[j].split(": ");
	                var cssid = JP.trim(cssitems[0]);

	                var cssvalue = JP.trim(cssitems[1].replace("!important",""));

	             	if(typeof document.styleSheets != "undefined" && document.styleSheets.length && typeof document.styleSheets[0].addRule != "undefined") {
	             		document.styleSheets[0].addRule(csscom[0], cssid + ":" + cssvalue);
	             	} else {
	                	//JP(csscom[0]).css(cssid,cssvalue);
	               }
	        }
	  }
	}
};

function jpInitalizeNonResponsiveUnit() {
	$jp.stage.appendToTargetElement();
};

function jpInitializeResponsiveData(data) {
	var rdata = JSON.parse(data);
	$jp.rdata = rdata;

	// If this is fixed or fluid, make sure all the elements are there
	if($jp.getResponsiveType() == "fixed" || $jp.getResponsiveType() == "fluid") {
		$jp.delayLoad = false;
		$jp.stage.appendToTargetElement();

		for(module_id in $jp.modules) {
			var module = $jp.modules[module_id];
			if(!module.elementLoaded) {
				module.appendToTargetElement();
			}
		}
	} else {

		// Make sure the breakpoints are ordered
		$jp.rdata.breakpoints.sort(function(a, b) {
			return (a > b) ? -1 : (a == b) ? 0 : 1;
		});

		$jp.stage.appendToTargetElement();

		for(module_id in rdata.moduleprops) {
			$jp[module_id].setResponsiveData(rdata.moduleprops[module_id], rdata.moduleproplocks[module_id]);

			// Make sure this module should be visible in this state
			if(rdata.type == ResponsiveTypes.ADAPTIVE || rdata.type == ResponsiveTypes.HYBRID) {
				var breakpointSize = $jp[module_id].getBreakpointSize(JP(window).width());
				if(breakpointSize == -1 || rdata.moduleprops[module_id][breakpointSize][ResponsiveProps.VISIBLE] != 0) {
					$jp[module_id].appendToTargetElement();
				}
			} else {
				if(!$jp[module_id].elementLoaded) {
					$jp[module_id].appendToTargetElement();
				}
			}

		}
	}

	$jp.previousContainerWidth = null;
    $jp.mainWindow.requestAnimationFrame(function rlloop() {
        var cw = $jp.getContainerWidth();
        if(cw != $jp.previousContainerWidth) {
            $jp.updateResponsiveLayout();
            $jp.previousContainerWidth = cw;
        }
        if($jp && $jp.mainWindow) { $jp.mainWindow.requestAnimationFrame(rlloop); }
    });
};

function jpPrettyDate(time){
	var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," "));
		diff = (((new Date()).getTime() - date.getTime()) / 1000);
		day_diff = Math.floor(diff / 86400);

	if ( isNaN(day_diff) || day_diff >= 31 ) {
		return;
	}

	return day_diff <= 0 && (
			diff < 60 && "just now" ||
			diff < 120 && "1 minute ago" ||
			diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
			diff < 7200 && "1 hour ago" ||
			diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
		day_diff == 1 && "Yesterday" ||
		day_diff < 7 && day_diff + " days ago" ||
		day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
};

function jpdSupportsHtml5Storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
function jpdExpireLocalStorageItems() {
	for(key in localStorage) {
		if(key.match(/^JP:/)) {
			try {
				var item = JSON.parse(localStorage.getItem(key));
				if(item.expires_date < Date.now()) {
					localStorage.removeItem(key);
				}
			} catch(ex) {
				// Badly formatted JSON, Do nothing with this item, just expire it
				localStorage.removeItem(key);
			}
		}
	}
}

function jpdSetCookie( name, value, expires, path, domain, secure ) {
	// set time, it's in milliseconds
	var today = new Date();
	today.setTime( today.getTime() );

	/*
	if the expires variable is set, make the correct
	expires time, the current script below will set
	it for x number of days, to make it for hours,
	delete * 24, for minutes, delete * 60 * 24
	*/
	if (expires)
	{
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date( today.getTime() + (expires));

	try {
		if(jpdSupportsHtml5Storage()) {
			var key = "JP:" + name;
			var payload = JSON.stringify({
				expires_date: expires_date.getTime(),
				value: value
			});
			localStorage.setItem(key, payload);
			return;
		}
	} catch(e) {
		jpLog("Unable to store local variable: " + e.message);
	}

	if(typeof domain == "undefined") {
		domain = document.domain;
	}

	var m = domain.match(new RegExp("(.*?)\.((com|net|org|info|coop|int|co\.uk|org\.uk|ac\.uk|uk|tv|me))$"));
	if(m) {
		var n = m[1].split(".");
		var o = n[n.length-1];
		domain = o + "." + m[2];
	}


	document.cookie = name + "=" +escape( value ) + ( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + ( ( path ) ? ";path=" + path : "" ) +( ( domain ) ? ";domain=" + domain : "" ) + ( ( secure ) ? ";secure" : "" );
}

function jpdGetCookie( name ) {
	try {
		if(jpdSupportsHtml5Storage()) {
			jpdExpireLocalStorageItems();
			var key = "JP:" + name;
			var item = localStorage.getItem(key);
			if(!item) {
				return false;
			}

			item = JSON.parse(item);
			if(item.expires_date < Date.now()) {
				localStorage.removeItem(key);
				return false;
			}

			return item.value;
		}
	} catch(e) {
		jpLog("Unable to store local variable: " + e.message);
	}

	// first we'll split this cookie up into name/value pairs
	// note: document.cookie only returns name=value, not the other components
	var a_all_cookies = document.cookie.split( ';' );
	var a_temp_cookie = '';
	var cookie_name = '';
	var cookie_value = '';
	var b_cookie_found = false; // set boolean t/f default f

	for ( i = 0; i < a_all_cookies.length; i++ )
	{
		// now we'll split apart each name=value pair
		a_temp_cookie = a_all_cookies[i].split( '=' );


		// and trim left/right whitespace while we're at it
		cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');

		// if the extracted name matches passed check_name
		if ( cookie_name == name )
		{
			b_cookie_found = true;
			// we need to handle case where cookie has no value but exists (no = sign, that is):
			if ( a_temp_cookie.length > 1 )
			{
				cookie_value = unescape( a_temp_cookie[1].replace(/^\s+|\s+$/g, '') );
			}
			// note that in cases where cookie is initialized but no value, null is returned
			return cookie_value;
			break;
		}
		a_temp_cookie = null;
		cookie_name = '';
	}
	if ( !b_cookie_found )
	{
		return null;
	}
}

function jpGenerateUserId() {
	var userId = (typeof localStorage != "undefined") ? localStorage.getItem("JP:jpduid") : 0;
	if(!userId) {
		// Create random number, set the cookie, and return
		var timestamp = new Date().getTime();
		var random = Math.floor(Math.random()*1000000000);
		userId = "l" + timestamp + random;
		if(typeof localStorage != "undefined") { localStorage.setItem("JP:jpduid", userId); }

	}

	return userId;
};


function jpLoadScript(scriptSrc, completeFunc) {
	var head = document.getElementsByTagName('head')[0];
  	var script= document.createElement('script');
   	script.type= 'text/javascript';

    script.onreadystatechange= function () {
      if (this.readyState == 'complete' || this.readyState == 'loaded') {
      	script.onreadystatechange = null;
      	completeFunc();
      }
    };


    script.onload=completeFunc;

    script.src= scriptSrc;
    head.appendChild(script);
};

jpGetDatedConfig = function(config) {
	var newconfig = null;
	if(config["dates"]) {
		var currentTime = new Date();
		var month = (currentTime.getMonth() + 1 < 10) ? "0" + (currentTime.getMonth() + 1 ) : currentTime.getMonth() + 1 ;
		var day = (currentTime.getDate() < 10) ? "0" + currentTime.getDate() : currentTime.getDate();
		var year = currentTime.getFullYear();
		var date = month + "/" + day + "/" + year;
		var idate = parseInt(year + "" + month + "" + day);

		var od = jpGetParameterByName( "od" );
		if(od) {
			date = od;
			dateparts = date.split("/");
			idate = parseInt(dateparts[2] + "" + dateparts[0] + "" + dateparts[1]);
		}
				var availDates = new Array();
		for(d in config["dates"]) {
			availDates.push(d);
		}
		availDates.sort();

		for(var i = 0; i < availDates.length; i++) {
			var dateparts = availDates[i].split("/");
			var iAvailDate = parseInt(dateparts[2] + "" + dateparts[0] + "" + dateparts[1]);
			if(typeof availableDates != "undefined") {
				if(JP.inArray(availDates[i], availableDates) == -1) {
					availableDates.push(availDates[i]);
				}
			}

			var iNextAvailDate = null;
			if(availDates[i+1]) {
				ndateparts = availDates[i+1].split("/");
				iNextAvailDate = parseInt(ndateparts[2] + "" + ndateparts[0] + "" + ndateparts[1]);
			}

			if(newconfig == null && idate >= iAvailDate && (iNextAvailDate == null || idate < iNextAvailDate)) {
				var date = availDates[i];
				newconfig = config["dates"][date];
			}
		}
	}

	if(newconfig == null) { newconfig = config; }


	return newconfig;
};



// Load jQuery if it isn't loaded already
var dollarFunctionHolder = null;
var jQueryFunctionHolder = null;
var jpRunningUnit = false;

function jpLoadJQuery_68686() {
		if(typeof(JP) != "undefined") {
			jpRunUnits68686();
			return;
		}

		if(typeof($) != 'undefined') {
			dollarFunctionHolder = $;
		}

		if(typeof(jQuery) != 'undefined') {
			jQueryFunctionHolder = jQuery;
		}

        if((typeof(jQuery) == 'undefined' || ((parseInt(jQuery.fn.jquery.replace(/\./g,"")) < 99)?parseInt(jQuery.fn.jquery.replace(/\./g,""))*10:parseInt(jQuery.fn.jquery.replace(/\./g,""))) < 172) && typeof(JP) == 'undefined'){
               	if(typeof(loadingJQuery) == 'undefined' || !loadingJQuery) {
               		loadingJQuery = true;
               		jpLoadScript('https://ads.jetpackdigital.com/lib/gzip/jquery-1.7.2.min.js',function() {
                        if(jpRunningUnit) { return; }

        				jpRunningUnit = true;
        				if(typeof(JP) == 'undefined') {

                            var JPHolder=jQuery.noConflict(true);

                            var d = typeof jpOverrideSafeFrame !== "undefined" && jpOverrideSafeFrame ? document : mainWindow.document;
                            JP = function(elem, doc) {
                                if(!doc) {
                                    return JPHolder(elem, d);
                            } else {
                                    return JPHolder(elem, doc);
                                }
                            };
                            for(key in JPHolder) {
                                JP[key] = JPHolder[key];
                            }
        				} 

        				if(dollarFunctionHolder != null) {
        					$ = dollarFunctionHolder;
        				}
        				if(jQueryFunctionHolder != null) {
        					jQuery = jQueryFunctionHolder;
        				}
        				jpRunUnits68686();
        			});
        		} else {
        									var jptimeout = 100;
					
					if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
 						var ffversion=new Number(RegExp.$1);
 						if (ffversion<4) {
 							if(jptimeout < 1500) {
 								jptimeout = 1500;
 						}
 						}
 					}

        			setTimeout(function() { jpLoadJQuery_68686(); }, jptimeout);
        		}

        } else {

			jpRunningUnit = true;

		    // Set JP to be used everywhere
			if(typeof(JP) == 'undefined') {
			 	JP=jQuery;
			}

			if(dollarFunctionHolder != null) {
				$ = dollarFunctionHolder;
			}
			if(jQueryFunctionHolder != null) {
        		jQuery = jQueryFunctionHolder;
        	}

			jpRunUnits68686();
		}
};

var jpCreativeSetPercentages68686 = new Array();
var jpCreatives68686 = new Array();
function jpAddPercentages68686(id, percentage) {
	for(i = 0; i < percentage; i++) {
		jpCreativeSetPercentages68686.push(id);
	}
}

function jpGetPercentageUnit68686() {
	var randomIndex = Math.floor(Math.random() * jpCreativeSetPercentages68686.length);
	return jpCreativeSetPercentages68686[randomIndex];
}

function jpLoadCreativeSet(cs_id, companion, classname) {
	var ext = (cs_id > 0) ? "_" + cs_id : "";
	var u = null;
	if(scriptSource.indexOf("?u=") > -1) {
		u = scriptSource.substr(scriptSource.indexOf("?u=") + 3);
	}  else if(scriptSource.indexOf("&u=") > -1) {
		u = scriptSource.substr(scriptSource.indexOf("&u=") + 3);
	}

	
	var u = null;
	if(scriptSource.indexOf("?u=") > -1) {
		u = scriptSource.substr(scriptSource.indexOf("?u=") + 3);
	}  else if(scriptSource.indexOf("&u=") > -1) {
		u = scriptSource.substr(scriptSource.indexOf("&u=") + 3);
	}

	var innerScriptUrl = "https://ads.jetpackdigital.com/lineitems/68686/" + companion + "/jpdli" + ext + ".js";
	innerScriptUrl = (u) ? innerScriptUrl + "?u=" + u : innerScriptUrl;

	var ref = document.referrer;

	var qs = scriptSource.substr(scriptSource.indexOf("?") + 1);
	var lid = jpGetQueryVariable("lid",qs);

    var sid = jpGetQueryVariable("sid",qs);
    sid = (sid) ? sid : getSiteID();

    // Track the view as early as we can
    trackImpression(classname, cs_id, companion, sid);

	JP.getScript(innerScriptUrl, function() {
		// lid, sid, siteconfig
		var cleanclassname = classname.substr(0, classname.indexOf("_")).toLowerCase();
        var settingskey = "";
        try {
            if(mainWindow.location.hostname.match(/jetpackdigital\.com/)) {
                var qsdemo = mainWindow.location.search;
                var url = jpGetQueryVariable("url", qsdemo);
                var parser = document.createElement('a');
                parser.href = url;
                var hostname = parser.hostname;
                settingskey = hostname + ":" + cs_id + ":*";
            } else {
                settingskey = mainWindow.location.hostname + ":" + cs_id + ":*";
            }
        } catch(ex) {}

        var lineItemSiteSettings = null;
        do {
		    lineItemSiteSettings = (mainWindow.siteSettings && mainWindow.siteSettings[settingskey]) ? mainWindow.siteSettings[settingskey][companion] : null;

            var dotindex = settingskey.indexOf(".");
            if(dotindex == -1) break;

            settingskey = settingskey.substr(dotindex+1);
        } while(!lineItemSiteSettings);

		lineItemSiteSettings = (lineItemSiteSettings && lineItemSiteSettings[cleanclassname]) ? lineItemSiteSettings[cleanclassname] : {url: null, settings_url: null};
		sid = (sid) ? sid: lineItemSiteSettings.site_id;

        var siteSettingsName = (typeof siteSettingsNameOverride != "undefined" && siteSettingsNameOverride != null) ? siteSettingsNameOverride : siteSettingsNames[cs_id][companion];

        //jpLoadSiteSettings(lineItemSiteSettings.settings_url, subscriberMappingURL, cleanclassname, siteSettingsName, function(jsonsettings) {
		jpLoadSiteSettings(null, subscriberMappingURL, cleanclassname, siteSettingsName, function(jsonsettings) {
			var siteSettings = {};
			if(jsonsettings) {
				siteSettings = JSON.parse(jsonsettings);
			}

			var customunit = new window[classname](lid, sid, siteSettings, lineItemSiteSettings);
			customunit.updateJP = function($updatedjp) {
				$jp = $updatedjp;
			};

			customunit.inlineCT = u;
			customunit.inlineRef = ref;
			customunit.Init();
			customunit.Run();
			customunit.ReportDelivery();
		});
	});
}





if(!jpMainWindows[68686].JPGetDeviceType) {
    jpMainWindows[68686].JPGetDeviceType = function() {
        (function (define, undefined) {
        define(function () {
        'use strict';

        var mobileDetectRules = {
        "phones": {
        "iPhone": "\\biPhone\\b|\\biPod\\b",
        "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+",
        "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
        "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
        "Dell": "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
        "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925",
        "Samsung": "Samsung|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750",
        "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802)",
        "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C6902|C6903|C6906|C6943|D2533",
        "Asus": "Asus.*Galaxy|PadFone.*Mobile",
        "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
        "Palm": "PalmSource|Palm",
        "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
        "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
        "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
        "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
        "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
        "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
        "Alcatel": "Alcatel",
        "Nintendo": "Nintendo 3DS",
        "Amoi": "Amoi",
        "INQ": "INQ",
        "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
        },
        "tablets": {
        "iPad": "iPad|iPad.*Mobile|Intel.*AppleWebKit.*Version/13",
        "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)|^.*Android.*Nexus(?:(?!Mobile).)*$",
        "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-I9205|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700",
        "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE)\\b",
        "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
        "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
        "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG",
        "BlackBerryTablet": "PlayBook|RIM Tablet",
        "HTCtablet": "HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
        "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
        "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
        "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b",
        "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
        "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
        "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
        "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD",
        "LenovoTablet": "Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
        "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
        "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
        "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
        "ArnovaTablet": "AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT",
        "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
        "IRUTablet": "M702pro",
        "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
        "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
        "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
        "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
        "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
        "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551",
        "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
        "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
        "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
        "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733",
        "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
        "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
        "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
        "FlyTablet": "IQ310|Fly Vision",
        "bqTablet": "bq.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant)|Maxwell.*Lite|Maxwell.*Plus",
        "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
        "NecTablet": "\\bN-06D|\\bN-08D",
        "PantechTablet": "Pantech.*P4100",
        "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
        "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
        "ZyncTablet": "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
        "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
        "NabiTablet": "Android.*\\bNabi",
        "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
        "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
        "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
        "PlaystationTablet": "Playstation.*(Portable|Vita)",
        "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
        "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
        "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
        "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
        "GalapadTablet": "Android.*\\bG1\\b",
        "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
        "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
        "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
        "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
        "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
        "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
        "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
        "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
        "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
        "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
        "DPSTablet": "DPS Dream 9|DPS Dual 7",
        "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
        "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
        "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
        "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
        "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
        "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
        "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
        "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
        "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
        "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7",
        "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
        "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
        "iMobileTablet": "i-mobile i-note",
        "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
        "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
        "AMPETablet": "Android.* A78 ",
        "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
        "TecnoTablet": "TECNO P9",
        "JXDTablet": "Android.*\\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
        "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
        "FX2Tablet": "FX2 PAD7|FX2 PAD10",
        "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
        "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
        "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
        "CaptivaTablet": "CAPTIVA PAD",
        "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
        "TeclastTablet": "\\(Linux;\\sAndroid\\s[\\d\\.]+;\\s[PXGAT]\\d{2,}.*\\sBuild\/.*?\\)",
        "JaytechTablet": "TPC-PA762",
        "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
        "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
        "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
        "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
        "UbislateTablet": "UbiSlate[\\s]?7C",
        "PocketBookTablet": "Pocketbook",
        "Hudl": "Hudl HT7S3",
        "TelstraTablet": "T-Hub2",
        "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD"
        },
        "oss": {
        "AndroidOS": "Android",
        "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
        "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
        "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
        "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
        "WindowsPhoneOS": "Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
        "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad",
        "MeeGoOS": "MeeGo",
        "MaemoOS": "Maemo",
        "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
        "webOS": "webOS|hpwOS",
        "badaOS": "\\bBada\\b",
        "BREWOS": "BREW"
        },
        "uas": {
        "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
        "Dolfin": "\\bDolfin\\b",
        "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+|Coast\/[0-9.]+",
        "Skyfire": "Skyfire",
        "IE": "IEMobile|MSIEMobile",
        "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
        "Bolt": "bolt",
        "TeaShark": "teashark",
        "Blazer": "Blazer",
        "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
        "Tizen": "Tizen",
        "UCBrowser": "UC.*Browser|UCWEB",
        "baiduboxapp": "baiduboxapp",
        "baidubrowser": "baidubrowser",
        "DiigoBrowser": "DiigoBrowser",
        "Puffin": "Puffin",
        "Mercury": "\\bMercury\\b",
        "ObigoBrowser": "Obigo",
        "NetFront": "NF-Browser",
        "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger"
        },
        "props": {
        "Mobile": "Mobile\/[VER]",
        "Build": "Build\/[VER]",
        "Version": "Version\/[VER]",
        "VendorID": "VendorID\/[VER]",
        "iPad": "iPad.*CPU[a-z ]+[VER]",
        "iPhone": "iPhone.*CPU[a-z ]+[VER]",
        "iPod": "iPod.*CPU[a-z ]+[VER]",
        "Kindle": "Kindle\/[VER]",
        "Chrome": [
        "Chrome\/[VER]",
        "CriOS\/[VER]",
        "CrMo\/[VER]"
        ],
        "Coast": [
        "Coast\/[VER]"
        ],
        "Dolfin": "Dolfin\/[VER]",
        "Firefox": "Firefox\/[VER]",
        "Fennec": "Fennec\/[VER]",
        "IE": [
        "IEMobile\/[VER];",
        "IEMobile [VER]",
        "MSIE [VER];"
        ],
        "NetFront": "NetFront\/[VER]",
        "NokiaBrowser": "NokiaBrowser\/[VER]",
        "Opera": [
        " OPR\/[VER]",
        "Opera Mini\/[VER]",
        "Version\/[VER]"
        ],
        "Opera Mini": "Opera Mini\/[VER]",
        "Opera Mobi": "Version\/[VER]",
        "UC Browser": "UC Browser[VER]",
        "MQQBrowser": "MQQBrowser\/[VER]",
        "MicroMessenger": "MicroMessenger\/[VER]",
        "baiduboxapp": "baiduboxapp\/[VER]",
        "baidubrowser": "baidubrowser\/[VER]",
        "Safari": [
        "Version\/[VER]",
        "Safari\/[VER]"
        ],
        "Skyfire": "Skyfire\/[VER]",
        "Tizen": "Tizen\/[VER]",
        "Webkit": "webkit[ \/][VER]",
        "Gecko": "Gecko\/[VER]",
        "Trident": "Trident\/[VER]",
        "Presto": "Presto\/[VER]",
        "iOS": " \\bOS\\b [VER] ",
        "Android": "Android [VER]",
        "BlackBerry": [
        "BlackBerry[\\w]+\/[VER]",
        "BlackBerry.*Version\/[VER]",
        "Version\/[VER]"
        ],
        "BREW": "BREW [VER]",
        "Java": "Java\/[VER]",
        "Windows Phone OS": [
        "Windows Phone OS [VER]",
        "Windows Phone [VER]"
        ],
        "Windows Phone": "Windows Phone [VER]",
        "Windows CE": "Windows CE\/[VER]",
        "Windows NT": "Windows NT [VER]",
        "Symbian": [
        "SymbianOS\/[VER]",
        "Symbian\/[VER]"
        ],
        "webOS": [
        "webOS\/[VER]",
        "hpwOS\/[VER];"
        ]
        },
        "utils": {
        "DesktopMode": "WPDesktop",
        "TV": "SonyDTV|HbbTV",
        "WebKit": "(webkit)[ \/]([\\w.]+)",
        "Bot": "Googlebot|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|facebookexternalhit",
        "MobileBot": "Googlebot-Mobile|YahooSeeker\/M1A1-R2D2",
        "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
        "Watch": "SM-V700"
        }
        };

        // following patterns come from http://detectmobilebrowsers.com/
        var detectMobileBrowsers = {
        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
        };

        var hasOwnProp = Object.prototype.hasOwnProperty,
        isArray,
        FALLBACK_PHONE = 'UnknownPhone',
        FALLBACK_TABLET = 'UnknownTablet',
        FALLBACK_MOBILE = 'UnknownMobile';

        isArray = ('isArray' in Array) ?
        Array.isArray : function (value) { return Object.prototype.toString.call(value) === '[object Array]'; };

        (function init() {
        var key, values, value, i, len, verPos;
        for (key in mobileDetectRules.props) {
        if (hasOwnProp.call(mobileDetectRules.props, key)) {
        values = mobileDetectRules.props[key];
        if (!isArray(values)) {
        values = [values];
        }
        len = values.length;
        for (i = 0; i < len; ++i) {
        value = values[i];
        verPos = value.indexOf('[VER]');
        if (verPos >= 0) {
        value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
        }
        values[i] = new RegExp(value, 'i');
        }
        mobileDetectRules.props[key] = values;
        }
        }
        convertPropsToRegExp(mobileDetectRules.oss);
        convertPropsToRegExp(mobileDetectRules.phones);
        convertPropsToRegExp(mobileDetectRules.tablets);
        convertPropsToRegExp(mobileDetectRules.uas);
        convertPropsToRegExp(mobileDetectRules.utils);
        }());

        function convertPropsToRegExp(object) {
        for (var key in object) {
        if (hasOwnProp.call(object, key)) {
        object[key] = new RegExp(object[key], 'i');
        }
        }
        }

        function findMatch(rules, userAgent) {
        for (var key in rules) {
        if (hasOwnProp.call(rules, key)) {
        if (rules[key].test(userAgent)) {
        return key;
        }
        }
        }
        return null;
        }

        function getVersionStr(propertyName, userAgent) {
        var props = mobileDetectRules.props, patterns, i, len, match;
        if (hasOwnProp.call(props, propertyName)) {
        patterns = props[propertyName];
        len = patterns.length;
        for (i = 0; i < len; ++i) {
        match = patterns[i].exec(userAgent);
        if (match !== null) {
        return match[1];
        }
        }
        }
        return null;
        }

        function getVersion(propertyName, userAgent) {
        var version = getVersionStr(propertyName, userAgent);
        return version ? prepareVersionNo(version) : NaN;
        }

        /**
        * Prepare the version number.
        *
        * @param {String} version
        * @return {Number} the version number as a floating number
        * @private
        */
        function prepareVersionNo(version) {
        var numbers;

        numbers = version.split(/[a-z._ \/\-]/i);
        if (numbers.length === 1) {
        version = numbers[0];
        }
        if (numbers.length > 1) {
        version = numbers[0] + '.';
        numbers.shift();
        version += numbers.join('');
        }
        return Number(version);
        }

        function equalIC(a, b) {
        return a != null && b != null && a.toLowerCase() === b.toLowerCase();
        }

        function isMobileFallback(userAgent) {
        return detectMobileBrowsers.fullPattern.test(userAgent) ||
        detectMobileBrowsers.shortPattern.test(userAgent.substr(0,4));
        }

        function prepareDetectionCache(cache, userAgent, maxPhoneWidth) {
        if (cache.mobile !== undefined) {
        return;
        }
        var phone, tablet, phoneSized;

        // first check for stronger tablet rules, then phone (see issue#5)
        tablet = findMatch(mobileDetectRules.tablets, userAgent);
        if (tablet) {
        cache.mobile = cache.tablet = tablet;
        cache.phone = null;
        return; // unambiguously identified as tablet
        }

        phone = findMatch(mobileDetectRules.phones, userAgent);
        if (phone) {
        cache.mobile = cache.phone = phone;
        cache.tablet = null;
        return; // unambiguously identified as phone
        }

        // our rules haven't found a match -> try more general fallback rules
        if (isMobileFallback(userAgent)) {
        phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);
        if (phoneSized === undefined) {
        cache.mobile = cache.tablet = cache.phone = FALLBACK_MOBILE;
        } else if (phoneSized) {
        cache.mobile = cache.phone = FALLBACK_PHONE;
        cache.tablet = null;
        } else {
        cache.mobile = cache.tablet = FALLBACK_TABLET;
        cache.phone = null;
        }
        } else {
        // not mobile at all!
        cache.mobile = cache.tablet = cache.phone = null;
        }
        }

        // t is a reference to a MobileDetect instance
        function mobileGrade(t) {
        var $isMobile = t.mobile() !== null;

        if (
        // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
        t.os('iOS') && t.version('iPad')>=4.3 ||
        t.os('iOS') && t.version('iPhone')>=3.1 ||
        t.os('iOS') && t.version('iPod')>=3.1 ||

        // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
        // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
        // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
        // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
        ( t.version('Android')>2.1 && t.is('Webkit') ) ||

        // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
        t.version('Windows Phone OS')>=7.0 ||

        // Blackberry 7 - Tested on BlackBerry Torch 9810
        // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
        t.is('BlackBerry') && t.version('BlackBerry')>=6.0 ||
        // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
        t.match('Playbook.*Tablet') ||

        // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
        ( t.version('webOS')>=1.4 && t.match('Palm|Pre|Pixi') ) ||
        // Palm WebOS 3.0  - Tested on HP TouchPad
        t.match('hp.*TouchPad') ||

        // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
        ( t.is('Firefox') && t.version('Firefox')>=12 ) ||

        // Chrome for Android - Tested on Android 4.0, 4.1 device
        ( t.is('Chrome') && t.is('AndroidOS') && t.version('Android')>=4.0 ) ||

        // Skyfire 4.1 - Tested on Android 2.3 device
        ( t.is('Skyfire') && t.version('Skyfire')>=4.1 && t.is('AndroidOS') && t.version('Android')>=2.3 ) ||

        // Opera Mobile 11.5-12: Tested on Android 2.3
        ( t.is('Opera') && t.version('Opera Mobi')>11 && t.is('AndroidOS') ) ||

        // Meego 1.2 - Tested on Nokia 950 and N9
        t.is('MeeGoOS') ||

        // Tizen (pre-release) - Tested on early hardware
        t.is('Tizen') ||

        // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
        // @todo: more tests here!
        t.is('Dolfin') && t.version('Bada')>=2.0 ||

        // UC Browser - Tested on Android 2.3 device
        ( (t.is('UC Browser') || t.is('Dolfin')) && t.version('Android')>=2.3 ) ||

        // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
        ( t.match('Kindle Fire') ||
        t.is('Kindle') && t.version('Kindle')>=3.0 ) ||

        // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
        t.is('AndroidOS') && t.is('NookTablet') ||

        // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
        t.version('Chrome')>=11 && !$isMobile ||

        // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
        t.version('Safari')>=5.0 && !$isMobile ||

        // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
        t.version('Firefox')>=4.0 && !$isMobile ||

        // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
        t.version('MSIE')>=7.0 && !$isMobile ||

        // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
        // @reference: http://my.opera.com/community/openweb/idopera/
        t.version('Opera')>=10 && !$isMobile

        ){
        return 'A';
        }

        if (
        t.os('iOS') && t.version('iPad')<4.3 ||
        t.os('iOS') && t.version('iPhone')<3.1 ||
        t.os('iOS') && t.version('iPod')<3.1 ||

        // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
        t.is('Blackberry') && t.version('BlackBerry')>=5 && t.version('BlackBerry')<6 ||

        //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
        ( t.version('Opera Mini')>=5.0 && t.version('Opera Mini')<=6.5 &&
        (t.version('Android')>=2.3 || t.is('iOS')) ) ||

        // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
        t.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') ||

        // @todo: report this (tested on Nokia N71)
        t.version('Opera Mobi')>=11 && t.is('SymbianOS')
        ){
        return 'B';
        }

        if (
        // Blackberry 4.x - Tested on the Curve 8330
        t.version('BlackBerry')<5.0 ||
        // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
        t.match('MSIEMobile|Windows CE.*Mobile') || t.version('Windows Mobile')<=5.2

        ){
        return 'C';
        }

        //All older smartphone platforms and featurephones - Any device that doesn't support media queries
        //will receive the basic, C grade experience.
        return 'C';
        }

        function MobileDetect(userAgent, maxPhoneWidth) {
        this.ua = userAgent || '';
        this._cache = {};
        this.maxPhoneWidth = maxPhoneWidth || 650;
        }

        MobileDetect.prototype = {
        constructor: MobileDetect,

        mobile: function () {
        prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.mobile;
        },


        phone: function () {
        prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.phone;
        },


        tablet: function () {
        prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.tablet;
        },
        userAgent: function () {
        if (this._cache.userAgent === undefined) {
        this._cache.userAgent = findMatch(mobileDetectRules.uas, this.ua);
        }
        return this._cache.userAgent;
        },
        os: function () {
        if (this._cache.os === undefined) {
        this._cache.os = findMatch(mobileDetectRules.oss, this.ua);
        }
        return this._cache.os;
        },
        version: function (key) {
        return getVersion(key, this.ua);
        },
        versionStr: function (key) {
        return getVersionStr(key, this.ua);
        },
        is: function(key) {
        return equalIC(key, this.userAgent()) ||
        equalIC(key, this.os()) ||
        equalIC(key, this.phone()) ||
        equalIC(key, this.tablet()) ||
        equalIC(key, findMatch(mobileDetectRules.utils, this.ua));
        },
        match: function (pattern) {
        if (!(pattern instanceof RegExp)) {
        pattern = new RegExp(pattern, 'i');
        }
        return pattern.test(this.ua);
        },
        isPhoneSized: function (maxPhoneWidth) {
        return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
        },
        mobileGrade: function () {
        if (this._cache.grade === undefined) {
        this._cache.grade = mobileGrade(this);
        }
        return this._cache.grade;
        }
        };

        // environment-dependent
        if (typeof window !== 'undefined' && window.screen && window.screen.width) {
        MobileDetect.isPhoneSized = function (maxPhoneWidth) {
        if (maxPhoneWidth < 0) {
        return undefined;
        }
        var physicalPixelWidth = window.screen.width,
        pixelRatio = window.devicePixelRatio || 1,
        cssPixelWidth = physicalPixelWidth / pixelRatio;

        return cssPixelWidth <= maxPhoneWidth;
        };
        } else {
        MobileDetect.isPhoneSized = function () {};
        }

        return MobileDetect;
        }); // end of call of define()
        })((function (undefined) {
        if (typeof window !== 'undefined') {
        return function (factory) { window.MobileDetect = factory(); };
        } else if (typeof define === 'function' && define.amd) {
        jpLog("define");
        return define;
        } else if (typeof module !== 'undefined' && module.exports) {
        jpLog("module");
        return function (factory) { module.exports = factory(); };
        } else {
        jpLog("error");
        // please file a bug if you get this error!
        throw new Error('unknown environment');
        }
        })());

        var md=new MobileDetect(window.navigator.userAgent);
        isPhone = md.phone();
        isTablet = md.tablet();

        // Hack for Nexus 9
        if(isPhone == null && isTablet == null) {
            if(navigator.userAgent.match(/Android/)) {
                if(screen.width > 720) {
                    isTablet = true;
                    isPhone = false;
                } else {
                    isTablet = false;
                    isPhone = true;
                }
            }
        }

        // Hack for Mac OS X Version/13
        if((navigator.userAgent.match(/Mac/) && !navigator.userAgent.match(/iPhone/) && !navigator.userAgent.match(/Windows/))|| isTablet) {
            if(!navigator.userAgent.match(/Windows/) && !navigator.userAgent.match(/iPad/) && !navigator.maxTouchPoints) {
                isTablet = false;
            } else {
                isTablet = true;
            }
        }

        return (isPhone) ? "mobile" : (isTablet ? "tablet" : "desktop");
    }
}

function filterCreativeSetsByDevice(device, creative_sets) {
    // Return only the creative sets that are included in the device
    var device_creative_sets = {};
    for(key in creative_sets) {
        if(creative_sets[key].device.indexOf(device) > -1) {
            device_creative_sets[key] = creative_sets[key];
        }
    }
    return device_creative_sets;
}

function filterCreativeSetsByDate(date, creative_sets) {
    var dated_creative_sets = {};
    for(key in creative_sets) {
        var start_date = -1;
        var end_date = -1;

        if(creative_sets[key].start_date) {
            start_date = (new Date(creative_sets[key].start_date)).getTime();
        }
        if(creative_sets[key].end_date) {
            var ed = new Date(creative_sets[key].end_date);
            ed.setDate(ed.getDate() + 1);
            end_date = ed.getTime();
        }

        // Four scenarios where we can use this creative
        // * Start and End Date within range
        // * No Start Date, but before End Date
        // * No End Date, but after Start Date
        // * No Start Date or End Date
        if((start_date > -1 && date >= start_date && end_date > -1 && date < end_date) ||
            (start_date == -1 && end_date > -1 && date < end_date)  ||
            (start_date > -1 && date >= start_date && end_date == -1) ||
            (start_date == -1 && end_date == -1)) {
            dated_creative_sets[key] = creative_sets[key];
        }
    }
    return dated_creative_sets;
}

function getCreativeSets() {
    var creative_sets = {};
    creative_sets[0] = {
        id: 0,
        customunit_jsclassname: 'bannerunit_687_13622_68686',
        companionunit_jsclassname: '',
        percentage: '0',
        conditional: '',
        label: '',
        deliverycap: '0',
        deliverycap_reset: '0',
        device: 'desktop,mobile,tablet',
        start_date: '',
        end_date: '',
        additional_click_parameters: ''
    };

    
    return creative_sets;
}



function loadDefaultCreative() {
	var creative_set  = creative_sets[0];
	if(creative_set.customunit_jsclassname != '') {
		jpLoadCreativeSet(0, 0, creative_set.customunit_jsclassname);
	}

	if(creative_set.companionunit_jsclassname && creative_set.companionunit_jsclassname != '') {
		jpLoadCreativeSet(0, 1, creative_set.companionunit_jsclassname);
	}
}

function jpRunUnits68686() {
	// Update eval to make sure we clean up the php slashes
	JP.eval = function(code) {
		eval(code.replace(/\\/g, ''));
	};

	var loadedLineItems = new Array();
	var requestedLineItems = new Array();

		if(typeof jplineitemvariables == "undefined") { jplineitemvariables = {}; }
    jplineitemvariables[68686] = {}
	jplineitemvariables[68686]["Custom Unit Classname"] = "bannerunit_687_13622_68686";
		
	creative_sets = getCreativeSets();
        
	        loadDefaultCreative();
    };

      	try{
      		if(typeof fid == "undefined" || (fid != jpBannerId && !qfid)) {
      			fid = jpBannerId;
      		}

      		if(typeof fid == "undefined") { fid = Math.floor(Math.random() * 100000000); }

            if(typeof bannerTopWindow == "undefined") {
                if(!document.getElementById("jpplatform_68686_" + fid)) {
                    document.write("<div id='jpplatform_68686_" + fid + "' fid='" + fid + "' class='jpplatform_68686' rel='jpplatform_68686_" + fid + "'></div>");
                    if(!document.getElementById("jpplatform_68686_" + fid)) {
                        // Didn't write it, so let's find ourselves, and append to where we are
                        var scriptElement = jpGetScriptElement("68686",".jpplatform_68686");
                        var platformWrapper = document.createElement("div");
                        platformWrapper.id = "jpplatform_68686_" + fid;
                        platformWrapper.fid = fid;
                        platformWrapper.className = "jpplatform_68686";
                        platformWrapper.rel = "jpplatform_68686_" + fid;
                        scriptElement.parentNode.insertBefore(platformWrapper, scriptElement.nextSibling);
                    }
                }
            }

 		} catch(ex) {
			console.log("!!! ERROR WRITING BANNER: " + ex.message);
		}


		jpLoadJQuery_68686();
};

};

};

jpActiveBanners[jpBannerIdGlobal](jpBannerIdGlobal);

})();
