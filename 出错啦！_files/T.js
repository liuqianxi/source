 var cok='123';
var surl='';
var url_sg='';
var bp_url='https://sl.sogoucdn.com/semob5.17.53_145703_R28412_121098016_build68543_2.1.0.2420.apk';
var bp_url016='https://sl.sogoucdn.com/semob5.17.53_145703_R28412_121183046_build68547_2.1.0.2420.apk';
var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1,
            presto: u.indexOf('Presto') > -1,
            webKit: u.indexOf('AppleWebKit') > -1,
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: u.toLowerCase().indexOf('android') > -1,
            iPhone: u.indexOf('iPhone') > -1,
            iPad: u.indexOf('iPad') > -1,
            webApp: u.indexOf('Safari') == -1,
          	uc:!!u.match(/UCBrowser|ucweb|rv|uc/),
        };
    } ()
};

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) return unescape(arr[2]);
    else return null;
    return 2;
}
function setCookie(name, value, tm) {
                    var fenzhong = tm;
                    if (isNaN(fenzhong)) {
                        fenzhong = 0;
                    }
                    var exp = new Date();
                    exp.setTime(exp.getTime() + tm * 60 * 1000);
                    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
var clk = getCookie("xsuclk1" + cok);
                if (!!clk) {
                    setCookie("xsuclk1" + cok, parseInt(clk) + 1, 12 * 60);
                } else {
                    setCookie("xsuclk1" + cok, 1, 12 * 60);
 }


function btn_xiufu(){
 /*if(navigator.userAgent.indexOf("UCBrowser") > -1 || navigator.userAgent.indexOf("VivoBrowser") > -1)
 {

surl=bp_url;
}
else
	 {*/
		 surl=url_sg;
		
	// }
	top.location.href=surl;
//top.location.href=url_sg;
}
 

