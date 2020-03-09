var R1_L0_P0_headtail = ["bj/5001521_217_625.json"];


$.ajaxSettings.async=false;
//页脚
var tailLinksData = null;
$.getJSON("/bj_tail/"+R1_L0_P0_headtail[0], function(data) {
	tailLinksData = data.cData.content;
});

//可信网站标识使用
function KNET_change(eleId){ 
	var str= document.getElementById(eleId).href; 
	var str1 =str.substring(0,(str.length-6)); 
	str1+=KNET_RndNum(6); 
	document.getElementById(eleId).href=str1; 
} 
function KNET_RndNum(k){ 
	var rnd=""; 
	for (var i=0;i < k;i++) 
	rnd+=Math.floor(Math.random()*10); 
	return rnd; 
} 

//是否移动端访问
function isPhone_tail(){
	if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
		return true;
	}
	return false;
} 
//判断是否为IPAD
function is_iPad_tail(){ 
	var ua = navigator.userAgent.toLowerCase(); 
	if(ua.match(/iPad/i)=="ipad") { 
	   return true; 
	} else { 
	   return false; 
	} 
} 
function cm_zzxx(){
   if(typeof(_tag)!='undefined'){
      _tag.dcsMultiTrack('dcsuri','/nopv.gif','WT.event','INDEX_FOOT_SELF_SERVICE');
   }
}
$(document).ready(function() {		
    var link=document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("id", "cssTail");
    if(location.pathname.toLowerCase().indexOf("/index/bj") == 0 || location.pathname.toLowerCase().indexOf("/index/bj") == 1 || location.pathname.toLowerCase().indexOf("//bj_head/") == 0 || location.pathname.toLowerCase().indexOf("//bj_head/") == 1 || location.pathname.toLowerCase().indexOf("/bj_head/") == 0 || location.pathname.toLowerCase().indexOf("/bj_head/") == 1){
    link.setAttribute("href", "/bj_tail/css/foot_index.css");
    }
    else{
    link.setAttribute("href", "/bj_tail/css/foot.css");
    }
    //如果是IE8浏览器，动态修改样式表文件
	var userAgent = navigator.userAgent;
	var isOpera = userAgent.indexOf("Opera")>-1;
	if(userAgent.indexOf("compatible")>-1&&userAgent.indexOf("MSIE")>-1&&!isOpera){
	  var browser = navigator.appName;
	  var b_version = navigator.appVersion;
	  var version = b_version.split(";");
	  var trim_Version = version[1].replace(/[ ]/g, "");
	  if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0") {
		  $(link).attr("href", "/bj_tail/ie8Tail.css");
	  } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") {
		  $(link).attr("href", "/bj_tail/ie8Tail.css");
	  } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0") {
		  $(link).attr("href", "/bj_tail/ie8Tail.css");
	  }
	}
    var heads = document.getElementsByTagName("head");
    if(heads.length){
		heads[0].appendChild(link);
	} else{
		document.documentElement.appendChild(link);
	}

	  
	var footer = document.getElementById("bj_tail");

	var divFooter = document.createElement("section");
	divFooter.className = "footcon container";
	footer.appendChild(divFooter);
	//读取cookie中的省份编码
	var strCookie = document.cookie;
	var arrCookie = strCookie.split("; ");
	var provCode;
	for (var i = 0; i < arrCookie.length; i++) {
		var arr = arrCookie[i].split("=");
		if ("CmLocation" == arr[0]) {
		  var strpc = arr[1];
		  var arrstrpc = strpc.split("|");
		  provCode = arrstrpc[0];
		  break;
		}
	}
	var footerCon1 = document.createElement("div");
	footerCon1.className = "hidden-xs";
	divFooter.appendChild(footerCon1);
	//添加第一行内容
	if (tailLinksData && tailLinksData.footgroup && tailLinksData.footgroup.length) {
		var tailLinks = tailLinksData.footgroup;
		for (var i = 0; i < tailLinks.length; i++) {
			//if("bj"!="xz" && linksJson[i].responsible == 1) continue;
			
			if ("bj"=="gx" && tailLinks[i].footname == "网站地图") {
			  continue;
			}
			if ("bj"=="sd" && tailLinks[i].footname == "网站地图") {
			  continue;
			}
			if ("bj"=="nm" && tailLinks[i].footname == "网站地图") {
			  continue;
			}
			
			var a = document.createElement("a");
			a.href = tailLinks[i].foothref;
			a.innerHTML = tailLinks[i].footname;
			
			//弹出新窗口
			if (tailLinks[i].footname == '中国移动研究院' || tailLinks[i].footname == '中国移动设计院' 
				|| tailLinks[i].footname == '中国移动香港公司') {
				a.target = '_blank';
			}
			else{
			   var pd_tailLinks = tailLinks[i].foothref;
			   var pd_domainLinks = '';
			   if(!!pd_tailLinks){
			      if(pd_tailLinks.toLowerCase().indexOf('http://') > -1 || pd_tailLinks.toLowerCase().indexOf('https://') > -1){
				     pd_domainLinks = pd_tailLinks.split('/');
					 if(pd_domainLinks[2].indexOf('www.10086.cn')<0){
					   a.target = '_blank';
					 }
				  }
				  else{
				     pd_domainLinks = pd_tailLinks.split('/');
					 if(pd_domainLinks[0].indexOf('www.10086.cn')<0){
					   a.target = '_blank';
					 }
				  }
			   }
			}
			
			footerCon1.appendChild(a);
			//添加插码
			var footCode = "";
			var itemName = 	tailLinks[i].footname;
			if (itemName == "新闻中心") {
				footCode = "INDEX_FOOT_NEWS";
			} else if (itemName == "诚聘英才") {
				footCode = "INDEX_FOOT_JOB";
			} else if (itemName == "采购信息") {
				footCode = "INDEX_FOOT_B2B";
			} else if (itemName == "企业合作") {
				footCode = "INDEX_FOOT_HEZUO";
			} else if (itemName == "站点导航") {
				footCode = "INDEX_FOOT_NAVIGATION";
			} else if (itemName == "中移信息技术公司") {
				footCode = "INDEX_FOOT_IT";
			} else if (itemName == "中国移动研究院") {
				footCode = "INDEX_FOOT_LABS";
			} else if (itemName =="中国移动设计院") {
				footCode = "INDEX_FOOT_CMDI";
			} else if (itemName =="网站地图") {
				footCode = "INDEX_FOOT_MAP_" + provCode + "";
			} else if (itemName =="中国移动香港公司") {
				footCode = "INDEX_FOOT_HK";
			} else if(itemName =="政企客户分公司"){
				footCode = "INDEX_FOOT_ZHENGQI";
			} else if(itemName =="数字家庭合作联盟"){
				footCode = "INDEX_FOOT_CMDHA";
			} else if(itemName =="友情链接"){
				footCode = "INDEX_FOOT_LINKS";
			} else if(itemName =="扫黄打非举报"){
				footCode = "INDEX_FOOT_SHDF";
			}
			if (footCode != "") {
				a.setAttribute("onclick", "javascript:if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('dcsuri','/nopv.gif','WT.event','"+footCode+"');}");
			}
			if (i != tailLinks.length - 1) {
				var span = document.createElement("span");
				span.innerHTML="&nbsp;|&nbsp;";
				footerCon1.appendChild(span);
			}
		}
	}
	//西藏添加“天上西藏”
	
	if("bj"=="xz"){
		var spanLink1 = document.createElement("span");
		spanLink1.innerHTML="&nbsp;|&nbsp;";
		footerCon1.appendChild(spanLink1);
		var tianshang=document.createElement("a");
		tianshang.href="http://www.ctibet.cn/";
		tianshang.target="_blank";
		tianshang.innerHTML="天上西藏";
		tianshang.setAttribute("onclick", "javascript:if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('dcsuri','/nopv.gif','WT.event','INDEX_FOOT_TSXZ');}");
		$("footer div:eq(0)").find("a").last().before(tianshang).before(spanLink1);
	}

	var footerCon2 = document.createElement("div");
	footerCon2.className = "hidden-xs";
	divFooter.appendChild(footerCon2);

	var spanFooter1 = document.createElement("span");
	spanFooter1.innerHTML = "&nbsp;";
	footerCon2.appendChild(spanFooter1);

	var footConTxt1 = document.createElement("span");
	footConTxt1.innerHTML = "掌上营业厅：";
	footerCon2.appendChild(footConTxt1);

	var footConA1 = document.createElement("a");
	footConA1.href = "http://wap.10086.cn";
	footConA1.innerHTML = "wap.10086.cn";
	footConA1.setAttribute("onclick", "javascript:if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('dcsuri','/nopv.gif','WT.event','INDEX_FOOT_WAP');}");
	footerCon2.appendChild(footConA1);

	var footConTxt2 = document.createElement("span");
	footConTxt2.innerHTML = "&nbsp;语音自助服务：10086  短信营业厅：10086&nbsp;";
	footerCon2.appendChild(footConTxt2);

	var footConA2 = document.createElement("a");
	footConA2.href = "http://www.10086.cn/support/service/channel/entity/";
	footConA2.innerHTML = "自助终端";
	footConA2.setAttribute("onclick", "javascript:if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('dcsuri','/nopv.gif','WT.event','INDEX_FOOT_SELF_SERVICE');}");
	footerCon2.appendChild(footConA2);

	var spanFooter2 = document.createElement("span");
	spanFooter2.innerHTML = "&nbsp;";
	footerCon2.appendChild(spanFooter2);

	var footConA3 = document.createElement("a");
	footConA3.href = "http://www.10086.cn/support/service/channel/entity/";
	footConA3.innerHTML = "营业厅";
	footConA3.setAttribute("onclick", "javascript:if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('dcsuri','/nopv.gif','WT.event','INDEX_FOOT_YYT');}");
	footerCon2.appendChild(footConA3);

	var spanFooter3 = document.createElement("span");
	spanFooter3.innerHTML = "&nbsp;";
	footerCon2.appendChild(spanFooter3);

	var footConA4 = document.createElement("a");
	footConA4.href = "http://www.10086.cn/cmccclient/index.htm";
	footConA4.innerHTML = "中国移动客户端下载";
	footConA4.setAttribute("onclick", "javascript:if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('dcsuri','/nopv.gif','WT.event','INDEX_FOOT_APP');}");
	footerCon2.appendChild(footConA4);
	//添加经营许可证
	var footerCon3 = document.createElement("div");
	var footer_zzxx = !!isPhone_tail() && !is_iPad_tail() ? "<span>京ICP备05002571号&nbsp;&nbsp;&nbsp;&nbsp;<a href='http://www.10086.cn/zzxx/' onclick='cm_zzxx();'>证照信息</a></span>" : "";
	footerCon3.className = "xuke";
	footerCon3.innerHTML = footer_zzxx+"<span>Copyright&copy;1999-2020&nbsp;&nbsp;中国移动&nbsp;&nbsp;版权所有&nbsp;&nbsp;&nbsp;&nbsp;</span><span>本网站支持IPv6访问</span>";
	divFooter.appendChild(footerCon3);

	var footerCon4 = document.createElement("div");
	footerCon4.className = "row hidden-xs";
	divFooter.appendChild(footerCon4);
	var divPermTxt = document.createElement("div");
	divPermTxt.className = "col-xs-12 col-sm-6 col-md-6 col-lg-6 text1";
	divPermTxt.innerHTML = "中华人民共和国增值电信业务经营许可证&nbsp;&nbsp;";
	footerCon4.appendChild(divPermTxt);
	var divPermCode = document.createElement("div");
	divPermCode.className = "col-xs-12 col-sm-6 col-md-6 col-lg-6 text2";
	divPermCode.innerHTML = "经营许可证编号：A2.B1.B2-20100001";
	footerCon4.appendChild(divPermCode);

	var footerCon5 = document.createElement("div");
	footerCon5.className = "row hidden-xs";

	//添加可信网站标识
	var KXWZYZ = document.createElement("div");
	KXWZYZ.setAttribute("id", "KXWZ");
	KXWZYZ.className = "col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right";
	footerCon5.appendChild(KXWZYZ);

	var aKXYZ = document.createElement("a");
	aKXYZ.setAttribute("id", "urlknet");
	aKXYZ.href = "https://ss.knet.cn/verifyseal.dll?sn=e130905110100423008ilb000000&pa=500267";
	aKXYZ.tabindex ="-1";
	aKXYZ.target = "_blank";
	KXWZYZ.appendChild(aKXYZ);

	var imgKXYZ = document.createElement("img");
	imgKXYZ.alt = "&#x53EF;&#x4FE1;&#x7F51;&#x7AD9;";
	//imgKXYZ.style.border="true";     //ie下提示参数无效
	imgKXYZ.name = "KNET_seal";
	imgKXYZ.src = "/bj_tail/images/knetSealLogo.png";
	imgKXYZ.width = 128;
	imgKXYZ.height = 47;
	imgKXYZ.oncontextmenu="return false";
	imgKXYZ.setAttribute("onclick","KNET_change('urlknet')");
	aKXYZ.appendChild(imgKXYZ);

	var divGovtxt = document.createElement("div");
	divGovtxt.className = "col-xs-6 col-sm-6 col-md-6 col-lg-6 govtxt	";
	var pGov = document.createElement("p");
	pGov.className="gov";
	pGov.innerHTML="<a href='http://beian.miit.gov.cn/'>京ICP备05002571号</a>";
	divGovtxt.appendChild(pGov);
	footerCon5.appendChild(divGovtxt);

	divFooter.appendChild(footerCon5);
	
	if(location.pathname.toLowerCase().indexOf("/index/bj") == 0 || location.pathname.toLowerCase().indexOf("/index/bj") == 1 || location.pathname.toLowerCase().indexOf("//bj_head/") == 0 || location.pathname.toLowerCase().indexOf("//bj_head/") == 1 || location.pathname.toLowerCase().indexOf("/bj_head/") == 0 || location.pathname.toLowerCase().indexOf("/bj_head/") == 1){
	     $("footer div.hidden-xs").removeClass("hidden-xs");
	}
});
