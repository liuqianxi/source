var R1_L0_P0_headtail = ["bj/5001257_185_593.json"];
var R2_L0_P0_headtail = ["bj/5001257_193_601.json"];
var R3_L0_P0_headtail = ["bj/5001257_201_609.json"];
var R4_L0_P0_headtail = ["bj/5001257_209_617.json"];


var nohasTopBar = false;
if (document.getElementById("topbar") == null){
	nohasTopBar = true;
}

if (!!nohasTopBar){
	/*获取URL协议*/
	var this_protocol = !!location.protocol ? location.protocol+"//" : 'http://';
	
	/*判断是否是移动设备*/
	var judgeMT = (function (){
		if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
			return true;
		}
		else {
			return false;
		}
	}());
	
	/*动态添加ie8 ie9兼容代码*/
	if(!judgeMT){
		$("head").append('<!--[if lte IE 9]><script src=\"/js10086/jquery.xdomainrequest.min.js\"></script><script>var ie89 = "true";var key4IE89 = getCookie("key4IE89") || "";</script><![endif]-->');
	}

	var provincesJson = [
	  {"code":100,"name":"北京","href":"http://www.10086.cn/bj","url":"http://shop.10086.cn/mall_100_100.html","abbr":"bj"},
	  {"code":551,"name":"安徽","href":"http://www.10086.cn/ah","url":"http://shop.10086.cn/mall_551_551.html","abbr":"ah"},
	  {"code":230,"name":"重庆","href":"http://www.10086.cn/cq","url":"http://shop.10086.cn/mall_230_230.html","abbr":"cq"},
	  {"code":591,"name":"福建","href":"http://www.10086.cn/fj","url":"http://shop.10086.cn/mall_591_591.html","abbr":"fj"},
	  {"code":200,"name":"广东","href":"http://www.10086.cn/gd","url":"http://shop.10086.cn/mall_200_200.html","abbr":"gd"},
	  {"code":771,"name":"广西","href":"http://www.10086.cn/gx","url":"http://shop.10086.cn/mall_771_771.html","abbr":"gx"},
	  {"code":931,"name":"甘肃","href":"http://www.10086.cn/gs","url":"http://shop.10086.cn/mall_931_931.html","abbr":"gs"},
	  {"code":851,"name":"贵州","href":"http://www.10086.cn/gz","url":"http://shop.10086.cn/mall_851_851.html","abbr":"gz"},
	  {"code":311,"name":"河北","href":"http://www.10086.cn/he","url":"http://shop.10086.cn/mall_311_311.html","abbr":"he"},
	  {"code":371,"name":"河南","href":"http://www.10086.cn/ha","url":"http://shop.10086.cn/mall_371_371.html","abbr":"ha"},
	  {"code":898,"name":"海南","href":"http://www.10086.cn/hi","url":"http://shop.10086.cn/mall_898_898.html","abbr":"hi"},
	  {"code":270,"name":"湖北","href":"http://www.10086.cn/hb","url":"http://shop.10086.cn/mall_270_270.html","abbr":"hb"},
	  {"code":731,"name":"湖南","href":"http://www.10086.cn/hn","url":"http://shop.10086.cn/mall_731_731.html","abbr":"hn"},
	  {"code":451,"name":"黑龙江","href":"http://www.10086.cn/hl","url":"http://shop.10086.cn/mall_451_451.html","abbr":"hl"},
	  {"code":431,"name":"吉林","href":"http://www.10086.cn/jl","url":"http://shop.10086.cn/mall_431_431.html","abbr":"jl"},
	  {"code":250,"name":"江苏","href":"http://www.10086.cn/js","url":"http://shop.10086.cn/mall_250_250.html","abbr":"js"},
	  {"code":791,"name":"江西","href":"http://www.10086.cn/jx","url":"http://shop.10086.cn/mall_791_791.html","abbr":"jx"},
	  {"code":240,"name":"辽宁","href":"http://www.10086.cn/ln","url":"http://shop.10086.cn/mall_240_240.html","abbr":"ln"},
	  {"code":471,"name":"内蒙古","href":"http://www.10086.cn/nm","url":"http://shop.10086.cn/mall_471_471.html","abbr":"nm"},
	  {"code":951,"name":"宁夏","href":"http://www.10086.cn/nx","url":"http://shop.10086.cn/mall_951_951.html","abbr":"nx"},
	  {"code":971,"name":"青海","href":"http://www.10086.cn/qh","url":"http://shop.10086.cn/mall_971_971.html","abbr":"qh"},
	  {"code":210,"name":"上海","href":"http://www.10086.cn/sh","url":"http://shop.10086.cn/mall_210_210.html","abbr":"sh"},
	  {"code":280,"name":"四川","href":"http://www.10086.cn/sc","url":"http://shop.10086.cn/mall_280_280.html","abbr":"sc"},
	  {"code":531,"name":"山东","href":"http://www.10086.cn/sd","url":"http://shop.10086.cn/mall_531_531.html","abbr":"sd"},
	  {"code":351,"name":"山西","href":"http://www.10086.cn/sx","url":"http://shop.10086.cn/mall_351_351.html","abbr":"sx"},
	  {"code":290,"name":"陕西","href":"http://www.10086.cn/sn","url":"http://shop.10086.cn/mall_290_290.html","abbr":"sn"},
	  {"code":220,"name":"天津","href":"http://www.10086.cn/tj","url":"http://shop.10086.cn/mall_220_220.html","abbr":"tj"},
	  {"code":991,"name":"新疆","href":"http://www.10086.cn/xj","url":"http://shop.10086.cn/mall_991_991.html","abbr":"xj"},
	  {"code":891,"name":"西藏","href":"http://www.10086.cn/xz","url":"http://shop.10086.cn/mall_891_891.html","abbr":"xz"},
	  {"code":871,"name":"云南","href":"http://www.10086.cn/yn","url":"http://shop.10086.cn/mall_871_871.html","abbr":"yn"},
	  {"code":571,"name":"浙江","href":"http://www.10086.cn/zj","url":"http://shop.10086.cn/mall_571_571.html","abbr":"zj"}
	  ];

	var citiesJson = [
	  {"city_id":100,"city_id_district":1000010,"city_name":"北京","prov_id":100},
	  {"city_id":200,"city_id_district":1000020,"city_name":"广州","prov_id":200},
	  {"city_id":660,"city_id_district":1000660,"city_name":"汕尾","prov_id":200},
	  {"city_id":662,"city_id_district":1000662,"city_name":"阳江","prov_id":200},
	  {"city_id":663,"city_id_district":1000663,"city_name":"揭阳","prov_id":200},
	  {"city_id":668,"city_id_district":1000668,"city_name":"茂名","prov_id":200},
	  {"city_id":750,"city_id_district":1000750,"city_name":"江门","prov_id":200},
	  {"city_id":751,"city_id_district":1000751,"city_name":"韶关","prov_id":200},
	  {"city_id":752,"city_id_district":1000752,"city_name":"惠州","prov_id":200},
	  {"city_id":753,"city_id_district":1000753,"city_name":"梅州","prov_id":200},
	  {"city_id":754,"city_id_district":1000754,"city_name":"汕头","prov_id":200},
	  {"city_id":755,"city_id_district":1000755,"city_name":"深圳","prov_id":200},
	  {"city_id":756,"city_id_district":1000756,"city_name":"珠海","prov_id":200},
	  {"city_id":757,"city_id_district":1000757,"city_name":"佛山","prov_id":200},
	  {"city_id":758,"city_id_district":1000758,"city_name":"肇庆","prov_id":200},
	  {"city_id":759,"city_id_district":1000759,"city_name":"湛江","prov_id":200},
	  {"city_id":760,"city_id_district":1000760,"city_name":"中山","prov_id":200},
	  {"city_id":762,"city_id_district":1000762,"city_name":"河源","prov_id":200},
	  {"city_id":763,"city_id_district":1000763,"city_name":"清远","prov_id":200},
	  {"city_id":766,"city_id_district":1000766,"city_name":"云浮","prov_id":200},
	  {"city_id":768,"city_id_district":1000768,"city_name":"潮州","prov_id":200},
	  {"city_id":769,"city_id_district":1000769,"city_name":"东莞","prov_id":200},
	  {"city_id":210,"city_id_district":1000021,"city_name":"上海","prov_id":210},
	  {"city_id":220,"city_id_district":1000022,"city_name":"天津","prov_id":220},
	  {"city_id":230,"city_id_district":1000023,"city_name":"重庆","prov_id":230},
	  {"city_id":240,"city_id_district":1000024,"city_name":"沈阳","prov_id":240},
	  {"city_id":410,"city_id_district":1000410,"city_name":"铁岭","prov_id":240},
	  {"city_id":411,"city_id_district":1000411,"city_name":"大连","prov_id":240},
	  {"city_id":412,"city_id_district":1000412,"city_name":"鞍山","prov_id":240},
	  {"city_id":413,"city_id_district":1000413,"city_name":"抚顺","prov_id":240},
	  {"city_id":414,"city_id_district":1000414,"city_name":"本溪","prov_id":240},
	  {"city_id":415,"city_id_district":1000415,"city_name":"丹东","prov_id":240},
	  {"city_id":416,"city_id_district":1000416,"city_name":"锦州","prov_id":240},
	  {"city_id":417,"city_id_district":1000417,"city_name":"营口","prov_id":240},
	  {"city_id":418,"city_id_district":1000418,"city_name":"阜新","prov_id":240},
	  {"city_id":419,"city_id_district":1000419,"city_name":"辽阳","prov_id":240},
	  {"city_id":421,"city_id_district":1000421,"city_name":"朝阳","prov_id":240},
	  {"city_id":427,"city_id_district":1000427,"city_name":"盘锦","prov_id":240},
	  {"city_id":429,"city_id_district":1000429,"city_name":"葫芦岛","prov_id":240},
	  {"city_id":250,"city_id_district":1000025,"city_name":"南京","prov_id":250},
	  {"city_id":510,"city_id_district":1000510,"city_name":"无锡","prov_id":250},
	  {"city_id":511,"city_id_district":1000511,"city_name":"镇江","prov_id":250},
	  {"city_id":512,"city_id_district":1000512,"city_name":"苏州","prov_id":250},
	  {"city_id":513,"city_id_district":1000513,"city_name":"南通","prov_id":250},
	  {"city_id":514,"city_id_district":1000514,"city_name":"扬州","prov_id":250},
	  {"city_id":515,"city_id_district":1000515,"city_name":"盐城","prov_id":250},
	  {"city_id":516,"city_id_district":1000516,"city_name":"徐州","prov_id":250},
	  {"city_id":517,"city_id_district":1000517,"city_name":"淮安","prov_id":250},
	  {"city_id":518,"city_id_district":1000518,"city_name":"连云港","prov_id":250},
	  {"city_id":519,"city_id_district":1000519,"city_name":"常州","prov_id":250},
	  {"city_id":527,"city_id_district":1000527,"city_name":"宿迁","prov_id":250},
	  {"city_id":523,"city_id_district":1000523,"city_name":"泰州","prov_id":250},
	  {"city_id":270,"city_id_district":1000027,"city_name":"武汉","prov_id":270},
	  {"city_id":710,"city_id_district":1000710,"city_name":"襄阳","prov_id":270},
	  {"city_id":711,"city_id_district":1000711,"city_name":"鄂州","prov_id":270},
	  {"city_id":712,"city_id_district":1000712,"city_name":"孝感","prov_id":270},
	  {"city_id":713,"city_id_district":1000713,"city_name":"黄冈","prov_id":270},
	  {"city_id":714,"city_id_district":1000714,"city_name":"黄石","prov_id":270},
	  {"city_id":715,"city_id_district":1000715,"city_name":"咸宁","prov_id":270},
	  {"city_id":716,"city_id_district":1000716,"city_name":"荆州","prov_id":270},
	  {"city_id":717,"city_id_district":1000717,"city_name":"宜昌","prov_id":270},
	  {"city_id":718,"city_id_district":1000718,"city_name":"恩施土家族苗族自治州","prov_id":270},
	  {"city_id":719,"city_id_district":1000719,"city_name":"十堰","prov_id":270},
	  {"city_id":722,"city_id_district":1000722,"city_name":"随州","prov_id":270},
	  {"city_id":724,"city_id_district":1000724,"city_name":"荆门","prov_id":270},
	  {"city_id":728,"city_id_district":1000728,"city_name":"仙桃","prov_id":270},
	  {"city_id":725,"city_id_district":1000725,"city_name":"潜江","prov_id":270},
	  {"city_id":726,"city_id_district":1000726,"city_name":"天门","prov_id":270},
	  {"city_id":280,"city_id_district":1000028,"city_name":"成都","prov_id":280},
	  {"city_id":812,"city_id_district":1000812,"city_name":"攀枝花","prov_id":280},
	  {"city_id":813,"city_id_district":1000813,"city_name":"自贡","prov_id":280},
	  {"city_id":816,"city_id_district":1000816,"city_name":"绵阳","prov_id":280},
	  {"city_id":817,"city_id_district":1000817,"city_name":"南充","prov_id":280},
	  {"city_id":818,"city_id_district":1000818,"city_name":"达州","prov_id":280},
	  {"city_id":825,"city_id_district":1000825,"city_name":"遂宁","prov_id":280},
	  {"city_id":826,"city_id_district":1000826,"city_name":"广安","prov_id":280},
	  {"city_id":827,"city_id_district":1000827,"city_name":"巴中","prov_id":280},
	  {"city_id":830,"city_id_district":1000830,"city_name":"泸州","prov_id":280},
	  {"city_id":831,"city_id_district":1000831,"city_name":"宜宾","prov_id":280},
	  {"city_id":832,"city_id_district":1000832,"city_name":"内江","prov_id":280},
	  {"city_id":833,"city_id_district":1000833,"city_name":"乐山","prov_id":280},
	  {"city_id":834,"city_id_district":1000834,"city_name":"凉山彝族自治州","prov_id":280},
	  {"city_id":835,"city_id_district":1000835,"city_name":"雅安","prov_id":280},
	  {"city_id":836,"city_id_district":1000836,"city_name":"甘孜藏族自治州","prov_id":280},
	  {"city_id":837,"city_id_district":1000837,"city_name":"阿坝藏族羌族自治州","prov_id":280},
	  {"city_id":838,"city_id_district":1000838,"city_name":"德阳","prov_id":280},
	  {"city_id":839,"city_id_district":1000839,"city_name":"广元","prov_id":280},
	  {"city_id":840,"city_id_district":1000840,"city_name":"资阳","prov_id":280},
	  {"city_id":841,"city_id_district":1000841,"city_name":"眉山","prov_id":280},
	  {"city_id":290,"city_id_district":1000029,"city_name":"西安","prov_id":290},
	  {"city_id":911,"city_id_district":1000911,"city_name":"延安","prov_id":290},
	  {"city_id":912,"city_id_district":1000912,"city_name":"榆林","prov_id":290},
	  {"city_id":913,"city_id_district":1000913,"city_name":"渭南","prov_id":290},
	  {"city_id":914,"city_id_district":1000914,"city_name":"商洛","prov_id":290},
	  {"city_id":915,"city_id_district":1000915,"city_name":"安康","prov_id":290},
	  {"city_id":916,"city_id_district":1000916,"city_name":"汉中","prov_id":290},
	  {"city_id":917,"city_id_district":1000917,"city_name":"宝鸡","prov_id":290},
	  {"city_id":919,"city_id_district":1000919,"city_name":"铜川","prov_id":290},
	  {"city_id":910,"city_id_district":1000910,"city_name":"咸阳","prov_id":290},
	  {"city_id":311,"city_id_district":1000311,"city_name":"石家庄","prov_id":311},
	  {"city_id":310,"city_id_district":1000310,"city_name":"邯郸","prov_id":311},
	  {"city_id":312,"city_id_district":1000312,"city_name":"保定","prov_id":311},
	  {"city_id":313,"city_id_district":1000313,"city_name":"张家口","prov_id":311},
	  {"city_id":314,"city_id_district":1000314,"city_name":"承德","prov_id":311},
	  {"city_id":315,"city_id_district":1000315,"city_name":"唐山","prov_id":311},
	  {"city_id":316,"city_id_district":1000316,"city_name":"廊坊","prov_id":311},
	  {"city_id":317,"city_id_district":1000317,"city_name":"沧州","prov_id":311},
	  {"city_id":318,"city_id_district":1000318,"city_name":"衡水","prov_id":311},
	  {"city_id":319,"city_id_district":1000319,"city_name":"邢台","prov_id":311},
	  {"city_id":335,"city_id_district":1000335,"city_name":"秦皇岛","prov_id":311},
	  {"city_id":336,"city_id_district":1000336,"city_name":"雄安新区","prov_id":311},
	  {"city_id":351,"city_id_district":1000351,"city_name":"太原","prov_id":351},
	  {"city_id":349,"city_id_district":1000349,"city_name":"朔州","prov_id":351},
	  {"city_id":350,"city_id_district":1000350,"city_name":"忻州","prov_id":351},
	  {"city_id":352,"city_id_district":1000352,"city_name":"大同","prov_id":351},
	  {"city_id":353,"city_id_district":1000353,"city_name":"阳泉","prov_id":351},
	  {"city_id":354,"city_id_district":1000354,"city_name":"晋中","prov_id":351},
	  {"city_id":355,"city_id_district":1000355,"city_name":"长治","prov_id":351},
	  {"city_id":356,"city_id_district":1000356,"city_name":"晋城","prov_id":351},
	  {"city_id":357,"city_id_district":1000357,"city_name":"临汾","prov_id":351},
	  {"city_id":358,"city_id_district":1000358,"city_name":"吕梁","prov_id":351},
	  {"city_id":359,"city_id_district":1000359,"city_name":"运城","prov_id":351},
	  {"city_id":371,"city_id_district":1000371,"city_name":"郑州","prov_id":371},
	  {"city_id":370,"city_id_district":1000370,"city_name":"商丘","prov_id":371},
	  {"city_id":372,"city_id_district":1000372,"city_name":"安阳","prov_id":371},
	  {"city_id":373,"city_id_district":1000373,"city_name":"新乡","prov_id":371},
	  {"city_id":374,"city_id_district":1000374,"city_name":"许昌","prov_id":371},
	  {"city_id":375,"city_id_district":1000375,"city_name":"平顶山","prov_id":371},
	  {"city_id":376,"city_id_district":1000376,"city_name":"信阳","prov_id":371},
	  {"city_id":377,"city_id_district":1000377,"city_name":"南阳","prov_id":371},
	  {"city_id":378,"city_id_district":1000378,"city_name":"开封","prov_id":371},
	  {"city_id":379,"city_id_district":1000379,"city_name":"洛阳","prov_id":371},
	  {"city_id":391,"city_id_district":1000391,"city_name":"焦作","prov_id":371},
	  {"city_id":392,"city_id_district":1000392,"city_name":"鹤壁","prov_id":371},
	  {"city_id":393,"city_id_district":1000393,"city_name":"濮阳","prov_id":371},
	  {"city_id":394,"city_id_district":1000394,"city_name":"周口","prov_id":371},
	  {"city_id":395,"city_id_district":1000395,"city_name":"漯河","prov_id":371},
	  {"city_id":396,"city_id_district":1000396,"city_name":"驻马店","prov_id":371},
	  {"city_id":397,"city_id_district":1000397,"city_name":"济源市","prov_id":371},
	  {"city_id":398,"city_id_district":1000398,"city_name":"三门峡","prov_id":371},
	  {"city_id":431,"city_id_district":1000431,"city_name":"长春","prov_id":431},
	  {"city_id":432,"city_id_district":1000432,"city_name":"吉林","prov_id":431},
	  {"city_id":433,"city_id_district":1000433,"city_name":"延边朝鲜族自治州","prov_id":431},
	  {"city_id":434,"city_id_district":1000434,"city_name":"四平","prov_id":431},
	  {"city_id":435,"city_id_district":1000435,"city_name":"通化","prov_id":431},
	  {"city_id":436,"city_id_district":1000436,"city_name":"白城","prov_id":431},
	  {"city_id":437,"city_id_district":1000437,"city_name":"辽源","prov_id":431},
	  {"city_id":438,"city_id_district":1000438,"city_name":"松原","prov_id":431},
	  {"city_id":439,"city_id_district":1000439,"city_name":"白山","prov_id":431},
	  {"city_id":451,"city_id_district":1000451,"city_name":"哈尔滨","prov_id":451},
	  {"city_id":452,"city_id_district":1000452,"city_name":"齐齐哈尔","prov_id":451},
	  {"city_id":453,"city_id_district":1000453,"city_name":"牡丹江","prov_id":451},
	  {"city_id":454,"city_id_district":1000454,"city_name":"佳木斯","prov_id":451},
	  {"city_id":455,"city_id_district":1000455,"city_name":"绥化","prov_id":451},
	  {"city_id":456,"city_id_district":1000456,"city_name":"黑河","prov_id":451},
	  {"city_id":457,"city_id_district":1000457,"city_name":"大兴安岭","prov_id":451},
	  {"city_id":458,"city_id_district":1000458,"city_name":"伊春","prov_id":451},
	  {"city_id":459,"city_id_district":1000459,"city_name":"大庆","prov_id":451},
	  {"city_id":464,"city_id_district":1000464,"city_name":"七台河","prov_id":451},
	  {"city_id":467,"city_id_district":1000467,"city_name":"鸡西","prov_id":451},
	  {"city_id":468,"city_id_district":1000468,"city_name":"鹤岗","prov_id":451},
	  {"city_id":469,"city_id_district":1000469,"city_name":"双鸭山","prov_id":451},
	  {"city_id":471,"city_id_district":1000471,"city_name":"呼和浩特","prov_id":471},
	  {"city_id":470,"city_id_district":1000470,"city_name":"呼伦贝尔","prov_id":471},
	  {"city_id":472,"city_id_district":1000472,"city_name":"包头","prov_id":471},
	  {"city_id":473,"city_id_district":1000473,"city_name":"乌海","prov_id":471},
	  {"city_id":474,"city_id_district":1000474,"city_name":"乌兰察布","prov_id":471},
	  {"city_id":475,"city_id_district":1000475,"city_name":"通辽","prov_id":471},
	  {"city_id":476,"city_id_district":1000476,"city_name":"赤峰","prov_id":471},
	  {"city_id":477,"city_id_district":1000477,"city_name":"鄂尔多斯","prov_id":471},
	  {"city_id":478,"city_id_district":1000478,"city_name":"巴彦淖尔","prov_id":471},
	  {"city_id":479,"city_id_district":1000479,"city_name":"锡林郭勒盟","prov_id":471},
	  {"city_id":482,"city_id_district":1000482,"city_name":"兴安盟","prov_id":471},
	  {"city_id":483,"city_id_district":1000483,"city_name":"阿拉善盟","prov_id":471},
	  {"city_id":531,"city_id_district":1000531,"city_name":"济南","prov_id":531},
	  {"city_id":530,"city_id_district":1000530,"city_name":"菏泽","prov_id":531},
	  {"city_id":532,"city_id_district":1000532,"city_name":"青岛","prov_id":531},
	  {"city_id":533,"city_id_district":1000533,"city_name":"淄博","prov_id":531},
	  {"city_id":534,"city_id_district":1000534,"city_name":"德州","prov_id":531},
	  {"city_id":535,"city_id_district":1000535,"city_name":"烟台","prov_id":531},
	  {"city_id":536,"city_id_district":1000536,"city_name":"潍坊","prov_id":531},
	  {"city_id":537,"city_id_district":1000537,"city_name":"济宁","prov_id":531},
	  {"city_id":538,"city_id_district":1000538,"city_name":"泰安","prov_id":531},
	  {"city_id":539,"city_id_district":1000539,"city_name":"临沂","prov_id":531},
	  {"city_id":543,"city_id_district":1000543,"city_name":"滨州","prov_id":531},
	  {"city_id":546,"city_id_district":1000546,"city_name":"东营","prov_id":531},
	  {"city_id":631,"city_id_district":1000631,"city_name":"威海","prov_id":531},
	  {"city_id":632,"city_id_district":1000632,"city_name":"枣庄","prov_id":531},
	  {"city_id":633,"city_id_district":1000633,"city_name":"日照","prov_id":531},
	  {"city_id":634,"city_id_district":1000634,"city_name":"莱芜","prov_id":531},
	  {"city_id":635,"city_id_district":1000635,"city_name":"聊城","prov_id":531},
	  {"city_id":551,"city_id_district":1000551,"city_name":"合肥","prov_id":551},
	  {"city_id":550,"city_id_district":1000550,"city_name":"滁州","prov_id":551},
	  {"city_id":552,"city_id_district":1000552,"city_name":"蚌埠","prov_id":551},
	  {"city_id":553,"city_id_district":1000553,"city_name":"芜湖","prov_id":551},
	  {"city_id":554,"city_id_district":1000554,"city_name":"淮南","prov_id":551},
	  {"city_id":555,"city_id_district":1000555,"city_name":"马鞍山","prov_id":551},
	  {"city_id":556,"city_id_district":1000556,"city_name":"安庆","prov_id":551},
	  {"city_id":557,"city_id_district":1000557,"city_name":"宿州","prov_id":551},
	  {"city_id":558,"city_id_district":1000558,"city_name":"阜阳","prov_id":551},
	  {"city_id":559,"city_id_district":1000559,"city_name":"黄山","prov_id":551},
	  {"city_id":561,"city_id_district":1000561,"city_name":"淮北","prov_id":551},
	  {"city_id":562,"city_id_district":1000562,"city_name":"铜陵","prov_id":551},
	  {"city_id":563,"city_id_district":1000563,"city_name":"宣城","prov_id":551},
	  {"city_id":564,"city_id_district":1000564,"city_name":"六安","prov_id":551},
	  {"city_id":566,"city_id_district":1000566,"city_name":"池州","prov_id":551},
	  {"city_id":567,"city_id_district":1000567,"city_name":"亳州","prov_id":551},
	  {"city_id":571,"city_id_district":1000571,"city_name":"杭州","prov_id":571},
	  {"city_id":570,"city_id_district":1000570,"city_name":"衢州","prov_id":571},
	  {"city_id":572,"city_id_district":1000572,"city_name":"湖州","prov_id":571},
	  {"city_id":573,"city_id_district":1000573,"city_name":"嘉兴","prov_id":571},
	  {"city_id":574,"city_id_district":1000574,"city_name":"宁波","prov_id":571},
	  {"city_id":575,"city_id_district":1000575,"city_name":"绍兴","prov_id":571},
	  {"city_id":576,"city_id_district":1000576,"city_name":"台州","prov_id":571},
	  {"city_id":577,"city_id_district":1000577,"city_name":"温州","prov_id":571},
	  {"city_id":578,"city_id_district":1000578,"city_name":"丽水","prov_id":571},
	  {"city_id":579,"city_id_district":1000579,"city_name":"金华","prov_id":571},
	  {"city_id":580,"city_id_district":1000580,"city_name":"舟山","prov_id":571},
	  {"city_id":591,"city_id_district":1000591,"city_name":"福州","prov_id":591},
	  {"city_id":592,"city_id_district":1000592,"city_name":"厦门","prov_id":591},
	  {"city_id":593,"city_id_district":1000593,"city_name":"宁德","prov_id":591},
	  {"city_id":594,"city_id_district":1000594,"city_name":"莆田","prov_id":591},
	  {"city_id":595,"city_id_district":1000595,"city_name":"泉州","prov_id":591},
	  {"city_id":596,"city_id_district":1000596,"city_name":"漳州","prov_id":591},
	  {"city_id":597,"city_id_district":1000597,"city_name":"龙岩","prov_id":591},
	  {"city_id":598,"city_id_district":1000598,"city_name":"三明","prov_id":591},
	  {"city_id":599,"city_id_district":1000599,"city_name":"南平","prov_id":591},
	  {"city_id":731,"city_id_district":1000731,"city_name":"长沙","prov_id":731},
	  {"city_id":730,"city_id_district":1000730,"city_name":"岳阳","prov_id":731},
	  {"city_id":732,"city_id_district":1000732,"city_name":"湘潭","prov_id":731},
	  {"city_id":733,"city_id_district":1000733,"city_name":"株洲","prov_id":731},
	  {"city_id":734,"city_id_district":1000734,"city_name":"衡阳","prov_id":731},
	  {"city_id":735,"city_id_district":1000735,"city_name":"郴州","prov_id":731},
	  {"city_id":736,"city_id_district":1000736,"city_name":"常德","prov_id":731},
	  {"city_id":737,"city_id_district":1000737,"city_name":"益阳","prov_id":731},
	  {"city_id":738,"city_id_district":1000738,"city_name":"娄底","prov_id":731},
	  {"city_id":739,"city_id_district":1000739,"city_name":"邵阳","prov_id":731},
	  {"city_id":743,"city_id_district":1000743,"city_name":"湘西土家族苗族自治州","prov_id":731},
	  {"city_id":744,"city_id_district":1000744,"city_name":"张家界","prov_id":731},
	  {"city_id":745,"city_id_district":1000745,"city_name":"怀化","prov_id":731},
	  {"city_id":746,"city_id_district":1000746,"city_name":"永州","prov_id":731},
	  {"city_id":771,"city_id_district":1000771,"city_name":"南宁","prov_id":771},
	  {"city_id":770,"city_id_district":1000770,"city_name":"防城港","prov_id":771},
	  {"city_id":772,"city_id_district":1000772,"city_name":"柳州","prov_id":771},
	  {"city_id":773,"city_id_district":1000773,"city_name":"桂林","prov_id":771},
	  {"city_id":774,"city_id_district":1000774,"city_name":"梧州","prov_id":771},
	  {"city_id":775,"city_id_district":1000775,"city_name":"玉林","prov_id":771},
	  {"city_id":776,"city_id_district":1000776,"city_name":"百色","prov_id":771},
	  {"city_id":777,"city_id_district":1000777,"city_name":"钦州","prov_id":771},
	  {"city_id":778,"city_id_district":1000778,"city_name":"河池","prov_id":771},
	  {"city_id":779,"city_id_district":1000779,"city_name":"北海","prov_id":771},
	  {"city_id":780,"city_id_district":1000780,"city_name":"崇左","prov_id":771},
	  {"city_id":781,"city_id_district":1000781,"city_name":"来宾","prov_id":771},
	  {"city_id":782,"city_id_district":1000782,"city_name":"贵港","prov_id":771},
	  {"city_id":783,"city_id_district":1000783,"city_name":"贺州","prov_id":771},
	  {"city_id":791,"city_id_district":1000791,"city_name":"南昌","prov_id":791},
	  {"city_id":701,"city_id_district":1000701,"city_name":"鹰潭","prov_id":791},
	  {"city_id":790,"city_id_district":1000790,"city_name":"新余","prov_id":791},
	  {"city_id":792,"city_id_district":1000792,"city_name":"九江","prov_id":791},
	  {"city_id":793,"city_id_district":1000793,"city_name":"上饶","prov_id":791},
	  {"city_id":794,"city_id_district":1000794,"city_name":"抚州","prov_id":791},
	  {"city_id":795,"city_id_district":1000795,"city_name":"宜春","prov_id":791},
	  {"city_id":796,"city_id_district":1000796,"city_name":"吉安","prov_id":791},
	  {"city_id":797,"city_id_district":1000797,"city_name":"赣州","prov_id":791},
	  {"city_id":798,"city_id_district":1000798,"city_name":"景德镇","prov_id":791},
	  {"city_id":799,"city_id_district":1000799,"city_name":"萍乡","prov_id":791},
	  {"city_id":851,"city_id_district":1000851,"city_name":"贵阳","prov_id":851},
	  {"city_id":852,"city_id_district":1000852,"city_name":"遵义","prov_id":851},
	  {"city_id":853,"city_id_district":1000853,"city_name":"安顺","prov_id":851},
	  {"city_id":856,"city_id_district":1000856,"city_name":"铜仁","prov_id":851},
	  {"city_id":857,"city_id_district":1000857,"city_name":"毕节","prov_id":851},
	  {"city_id":858,"city_id_district":1000858,"city_name":"六盘水","prov_id":851},
	  {"city_id":859,"city_id_district":1000859,"city_name":"黔西南","prov_id":851},
	  {"city_id":855,"city_id_district":1000855,"city_name":"黔东南","prov_id":851},
	  {"city_id":854,"city_id_district":1000854,"city_name":"黔南州","prov_id":851},
	  {"city_id":850,"city_id_district":1000850,"city_name":"贵安","prov_id":851},
	  {"city_id":871,"city_id_district":1000871,"city_name":"昆明","prov_id":871},
	  {"city_id":691,"city_id_district":1000691,"city_name":"西双版纳","prov_id":871},
	  {"city_id":692,"city_id_district":1000692,"city_name":"德宏","prov_id":871},
	  {"city_id":870,"city_id_district":1000870,"city_name":"昭通","prov_id":871},
	  {"city_id":872,"city_id_district":1000872,"city_name":"大理","prov_id":871},
	  {"city_id":873,"city_id_district":1000873,"city_name":"红河州","prov_id":871},
	  {"city_id":874,"city_id_district":1000874,"city_name":"曲靖","prov_id":871},
	  {"city_id":875,"city_id_district":1000875,"city_name":"保山","prov_id":871},
	  {"city_id":876,"city_id_district":1000876,"city_name":"文山","prov_id":871},
	  {"city_id":877,"city_id_district":1000877,"city_name":"玉溪","prov_id":871},
	  {"city_id":878,"city_id_district":1000878,"city_name":"楚雄","prov_id":871},
	  {"city_id":879,"city_id_district":1000879,"city_name":"普洱","prov_id":871},
	  {"city_id":883,"city_id_district":1000883,"city_name":"临沧","prov_id":871},
	  {"city_id":886,"city_id_district":1000886,"city_name":"怒江","prov_id":871},
	  {"city_id":887,"city_id_district":1000887,"city_name":"迪庆","prov_id":871},
	  {"city_id":888,"city_id_district":1000888,"city_name":"丽江","prov_id":871},
	  {"city_id":891,"city_id_district":1000891,"city_name":"拉萨","prov_id":891},
	  {"city_id":892,"city_id_district":1000892,"city_name":"日喀则","prov_id":891},
	  {"city_id":893,"city_id_district":1000893,"city_name":"山南","prov_id":891},
	  {"city_id":894,"city_id_district":1000894,"city_name":"林芝","prov_id":891},
	  {"city_id":895,"city_id_district":1000895,"city_name":"昌都","prov_id":891},
	  {"city_id":896,"city_id_district":1000896,"city_name":"那曲","prov_id":891},
	  {"city_id":897,"city_id_district":1000897,"city_name":"阿里","prov_id":891},
	  {"city_id":898,"city_id_district":1000898,"city_name":"海口","prov_id":898},
	  {"city_id":721,"city_id_district":1000721,"city_name":"三亚","prov_id":898},
	  {"city_id":889,"city_id_district":1000889,"city_name":"屯昌县","prov_id":898},
	  {"city_id":890,"city_id_district":1000890,"city_name":"儋州市","prov_id":898},
	  {"city_id":899,"city_id_district":1000899,"city_name":"五指山市","prov_id":898},
	  {"city_id":900,"city_id_district":1000900,"city_name":"文昌市","prov_id":898},
	  {"city_id":904,"city_id_district":1000904,"city_name":"澄迈县","prov_id":898},
	  {"city_id":905,"city_id_district":1000905,"city_name":"琼海市","prov_id":898},
	  {"city_id":907,"city_id_district":1000907,"city_name":"定安县","prov_id":898},
	  {"city_id":980,"city_id_district":1000980,"city_name":"临高县","prov_id":898},
	  {"city_id":981,"city_id_district":1000981,"city_name":"白沙县","prov_id":898},
	  {"city_id":982,"city_id_district":1000982,"city_name":"昌江县","prov_id":898},
	  {"city_id":983,"city_id_district":1000983,"city_name":"乐东县","prov_id":898},
	  {"city_id":984,"city_id_district":1000984,"city_name":"陵水县","prov_id":898},
	  {"city_id":985,"city_id_district":1000985,"city_name":"保亭县","prov_id":898},
	  {"city_id":986,"city_id_district":1000986,"city_name":"琼中县","prov_id":898},
	  {"city_id":988,"city_id_district":1000988,"city_name":"万宁市","prov_id":898},
	  {"city_id":989,"city_id_district":1000989,"city_name":"东方市","prov_id":898},
	  {"city_id":931,"city_id_district":1000931,"city_name":"兰州","prov_id":931},
	  {"city_id":930,"city_id_district":1000930,"city_name":"临夏","prov_id":931},
	  {"city_id":932,"city_id_district":1000932,"city_name":"定西","prov_id":931},
	  {"city_id":933,"city_id_district":1000933,"city_name":"平凉","prov_id":931},
	  {"city_id":934,"city_id_district":1000934,"city_name":"庆阳","prov_id":931},
	  {"city_id":935,"city_id_district":1000935,"city_name":"武威","prov_id":931},
	  {"city_id":936,"city_id_district":1000936,"city_name":"张掖","prov_id":931},
	  {"city_id":937,"city_id_district":1000937,"city_name":"酒泉","prov_id":931},
	  {"city_id":938,"city_id_district":1000938,"city_name":"天水","prov_id":931},
	  {"city_id":939,"city_id_district":1000939,"city_name":"陇南","prov_id":931},
	  {"city_id":941,"city_id_district":1000941,"city_name":"甘南","prov_id":931},
	  {"city_id":943,"city_id_district":1000943,"city_name":"白银","prov_id":931},
	  {"city_id":945,"city_id_district":1000945,"city_name":"金昌","prov_id":931},
	  {"city_id":947,"city_id_district":1000947,"city_name":"嘉峪关","prov_id":931},
	  {"city_id":951,"city_id_district":1000951,"city_name":"银川","prov_id":951},
	  {"city_id":952,"city_id_district":1000952,"city_name":"石嘴山","prov_id":951},
	  {"city_id":953,"city_id_district":1000953,"city_name":"吴忠","prov_id":951},
	  {"city_id":954,"city_id_district":1000954,"city_name":"固原","prov_id":951},
	  {"city_id":955,"city_id_district":1000955,"city_name":"中卫","prov_id":951},
	  {"city_id":971,"city_id_district":1000971,"city_name":"西宁","prov_id":971},
	  {"city_id":970,"city_id_district":1000970,"city_name":"海北藏族自治州","prov_id":971},
	  {"city_id":972,"city_id_district":1000972,"city_name":"海东","prov_id":971},
	  {"city_id":973,"city_id_district":1000973,"city_name":"黄南藏族自治州","prov_id":971},
	  {"city_id":974,"city_id_district":1000974,"city_name":"海南藏族自治州","prov_id":971},
	  {"city_id":975,"city_id_district":1000975,"city_name":"果洛藏族自治州","prov_id":971},
	  {"city_id":976,"city_id_district":1000976,"city_name":"玉树藏族自治州","prov_id":971},
	  {"city_id":977,"city_id_district":1000977,"city_name":"海西蒙古自治州","prov_id":971},
	  {"city_id":979,"city_id_district":1000979,"city_name":"格尔木市","prov_id":971},
	  {"city_id":991,"city_id_district":1000991,"city_name":"乌鲁木齐","prov_id":991},
	  {"city_id":901,"city_id_district":1000901,"city_name":"塔城","prov_id":991},
	  {"city_id":902,"city_id_district":1000902,"city_name":"哈密","prov_id":991},
	  {"city_id":903,"city_id_district":1000903,"city_name":"和田","prov_id":991},
	  {"city_id":906,"city_id_district":1000906,"city_name":"阿勒泰","prov_id":991},
	  {"city_id":908,"city_id_district":1000908,"city_name":"克孜勒苏柯尔克孜自治州","prov_id":991},
	  {"city_id":909,"city_id_district":1000909,"city_name":"博尔塔拉蒙古自治州","prov_id":991},
	  {"city_id":990,"city_id_district":1000990,"city_name":"克拉玛依","prov_id":991},
	  {"city_id":992,"city_id_district":1000992,"city_name":"奎屯","prov_id":991},
	  {"city_id":993,"city_id_district":1000993,"city_name":"石河子","prov_id":991},
	  {"city_id":994,"city_id_district":1000994,"city_name":"昌吉回族自治州","prov_id":991},
	  {"city_id":995,"city_id_district":1000995,"city_name":"吐鲁番","prov_id":991},
	  {"city_id":996,"city_id_district":1000996,"city_name":"巴音郭楞蒙古自治州","prov_id":991},
	  {"city_id":997,"city_id_district":1000997,"city_name":"阿克苏","prov_id":991},
	  {"city_id":998,"city_id_district":1000998,"city_name":"喀什","prov_id":991},
	  {"city_id":999,"city_id_district":1000999,"city_name":"伊犁哈萨克自治州","prov_id":991},
	  {"city_id":1100,"city_id_district":1001100,"city_name":"省直辖行政单位","prov_id":991}
	  ];
	  
	  /*地市跳转*/
	  function jump(prov_href,prov_abbr,prov_id,city_id) {
		  var days = 90;
		  var exp = new Date();
		  var thisURL = document.URL;
		  var goUrl = "";
		  var isProvUrl = false;
		  var idxabbr = 0; 

		  exp.setTime(exp.getTime() + days*24*60*60*1000);
		  document.cookie = "CmLocation=" + prov_id + "|" + city_id + ";path=/;domain=10086.cn;expires=" + exp.toGMTString();
		  document.cookie = "CmProvid=" + prov_abbr + ";path=/;domain=10086.cn;expires=" + exp.toGMTString();

		  if (isJTSite(window.location.host)) {
			  /*判断是否是分省url*/
			  for(var i=0;i<provincesJson.length;i++){
				idxabbr = thisURL.indexOf("/" + provincesJson[i].abbr + "/");
				if(idxabbr != -1){
					isProvUrl = true;
					break;
				}
			  }
			if (isProvUrl) {
			  goUrl = thisURL.substring(0,idxabbr + 1);
			} else {
			  goUrl = thisURL;
			  var indeOne = goUrl.indexOf("#");
			  if (0 <= indeOne) {
				goUrl = goUrl.substring(0,indeOne);
			  }
			
				if(goUrl.indexOf('headrndnum=')>=0){
					var headrndnumWz = goUrl.indexOf('headrndnum=');
					goUrl = goUrl.substring(0, headrndnumWz-1);
				}
				indeOne = goUrl.indexOf("?");
				if (0 <= indeOne) {
					goUrl += "&headrndnum=" + Math.random();
				}
				else {
					goUrl += "?headrndnum=" + Math.random();
				}
			}
		  } else {
			goUrl = prov_href;
		  }
		  if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_SWITCH_' + prov_id + "|" + city_id);};
		  window.location.href = goUrl;
	  }
	  
	  function ghead_getProvince(sim) {
		  var rv = null;
		  for(var i=0;i<provincesJson.length;i++){
			if(provincesJson[i].code == sim || provincesJson[i].abbr == sim){
				rv = provincesJson[i];
				break;
			}
		  }
		  return rv;
		}

		function ghead_getCity(sim) {
		  var rv = null;
		  for(var i=0;i<citiesJson.length;i++){
			if(citiesJson[i].city_id == sim || citiesJson[i].city_id_district == sim){
				rv = citiesJson[i];
				break;
			}
		  }
		  return rv;
		}
		
		/*获取未读消息*/
		function getUnreadMessage(userName1,authUserId1) {
			var msgCount = 0;
			var curtime = (new Date).getTime(); 
			var url = this_protocol+"www1.10086.cn/web-Center/shopMessage/queryUnreadMessage.do";
			var secret = getSecret();
			var version = getVersion();
			var timestamp = curtime;
			var digest = getDigest(curtime,secret);
			var conversationId = getConversationId(curtime);
			var channelId = "0702";
			
			var json  = {};
			json["serviceName"] = "if004_query_unread_message";
			
			var header = {};
			header["version"] = version;
			header["timestamp"] = timestamp;
			header["digest"] = digest;
			header["conversationId"] = conversationId;
			if (typeof(ie89) != "undefined") {
				header["ie89"] = ie89;
				header["key4IE89"] = key4IE89;
			}
			json["header"] = header;
			
			var data = {};
			data["channelId"] = channelId;
			data["userId"] = userName1;
			data["authUserId"] = authUserId1;
			json["data"] = data;
			
			$.ajax({
				type : "POST",
				url : url,
				data : JSON.stringify(json),
				contentType : 'text/plain',
				async : true,
				xhrFields:{
					  withCredentials:true
					},
				crossDomain:true,
				success : function(rs) {
					var result = JSON.parse(rs);
					var responseCode = result.result.response_code;
					if (responseCode == '0000') {
						msgCount = result.result.data.totalCount;
					}
					$("#unreadMsg").html("消息 " + msgCount);
				},
				error : function(){
					$("#unreadMsg").html("消息 " + msgCount);
				}
			});
		}
		
		/*登出链接处理*/
		function updateAuthorityHerf(pobj,cobj) {
		  var object;
		  var mobject;
		  var loginJThostname = "login.10086.cn";
		  var provCode = pobj.code;
		  var cityCode = cobj.city_id;

		  var logoutJT = eval('('+'{"name":"退出","href":"https://" + loginJThostname + "/logout.htm?backUrl=","editable":"1","responsible":"1","isEdit":"0"}'+')');

		  var loginHref = pobj.abbr == "gd" ? "https://gd.ac.10086.cn/ucs/ucs/weblogin.jsps?area=%2Fservice&resource=%2Fservice%2F&backURL=https%3A%2F%2Fgd.10086.cn%2Fservice%2F" : "https://" + pobj.abbr + ".ac.10086.cn/login";
		  var logoutHref = "http://" + pobj.abbr + ".ac.10086.cn/logout";
		 
		  if(pobj.abbr == "gd"){
			if (isJTSite(window.location.host)) {
				object = document.getElementById("logout");
				mobject = document.getElementById("mlogout"); 
				if(object){
				   $("#logout").click(function(){delCookie("is_login");if(typeof(_tag)!= "undefined"){_tag.dcsMultiTrack("WT.event","INDEX_TOP_C_UP_EXIT_"+ provCode+"|"+cityCode +"");}});
				   object.href=logoutJT.href + encodeURIComponent(document.URL);
				}
				if(mobject){
				   $("#mlogout").click(function(){delCookie("is_login");if(typeof(_tag)!= "undefined"){_tag.dcsMultiTrack("WT.event","INDEX_TOP_M_UP_EXIT_"+ provCode+"|"+cityCode +"");}});
				   mobject.href=logoutJT.href + encodeURIComponent(document.URL);
				}
			  } else {
				object = document.getElementById("logout");
				mobject = document.getElementById("mlogout");
				if(object){
				   object.href=logoutHref;
				}
				if(mobject){
				   mobject.href=logoutHref;
				}
			  }
		  }
		}
		
		/*设置非集团页面的登录链接*/
		function updateAuthorityLoginUrl(pobj,cobj){
			  var loginJThostname = "login.10086.cn";
			  var provCode = pobj.code;
			  var cityCode = cobj.city_id;

			  var loginJT = eval('('+'{"name":"登录","href":"https://" + loginJThostname + "/html/login/login.html?channelID=12002&backUrl=http%3A%2F%2Fshop.10086.cn%2Fmall_" + provCode + "_" + cityCode + ".html%3Fforcelogin%3D1","editable":"1","responsible":"1","isEdit":"0"}'+')');
			  var logoutJT = eval('('+'{"name":"退出","href":"https://" + loginJThostname + "/logout.htm?backUrl=","editable":"1","responsible":"1","isEdit":"0"}'+')');

			  var loginHref = pobj.abbr == "gd" ? "https://gd.ac.10086.cn/ucs/ucs/weblogin.jsps?area=%2Fservice&resource=%2Fservice%2F&backURL=https%3A%2F%2Fgd.10086.cn%2Fservice%2F" : "https://" + pobj.abbr + ".ac.10086.cn/login";
			  var logoutHref = "http://" + pobj.abbr + ".ac.10086.cn/logout";

			  $(".login_box").find("a").eq(0).attr("href","https://" + loginJThostname + "/html/login/login.html?channelID=12002&backUrl=http%3A%2F%2Fshop.10086.cn%2Fmall_" + provCode + "_" + cityCode + ".html%3Fforcelogin%3D1");
			  $(".login_box").find("a").eq(1).attr("href", loginHref);
			  $(".loginbox01").find("a").eq(0).attr("href","https://" + loginJThostname + "/html/login/login.html?channelID=12002&backUrl=http%3A%2F%2Fshop.10086.cn%2Fmall_" + provCode + "_" + cityCode + ".html%3Fforcelogin%3D1");
			  $(".loginbox01").find("a").eq(1).attr("href", loginHref);
		}
}

var $divTopLeft1;
var $divLogin1;
var $divHeadNavbar1;
  
function findCmProvCity() {
  var rv = new Array(2);
  rv[0] = 0;
  rv[1] = 0;
  
  var strCookie = document.cookie;
  var arrCookie = strCookie.split("; ");
  for (var i = 0; i < arrCookie.length; i++) {
    var arr = arrCookie[i].split("=");
    if (2 <= arr.length && "CmLocation" == arr[0]) {
      var strpc = arr[1];
      var arrstrpc = strpc.split("|");
      if (2 <= arrstrpc.length) {
        var pobj = ghead_getProvince(arrstrpc[0]);
        var cobj = ghead_getCity(arrstrpc[1]);
        if (pobj != null && cobj != null) {
          rv[0] = cobj.prov_id;
          rv[1] = cobj.city_id;
        }
      }
      break;
    }
  }
  return rv;
}

$(document).ready(function(){
  var pcid = findCmProvCity();
  var prov_id = pcid[0]; //省ID
  var city_id = pcid[1]; //地市ID
  var pobj = null;
  var cobj = null;

  if (prov_id != 0 && city_id != 0) {
    pobj = ghead_getProvince(prov_id);
    cobj = ghead_getCity(city_id);
  }
  
  /*检查省市信息是否一致*/
  if (pobj != null && pobj.abbr != "bj") { 
    prov_id = 0;
    city_id = 0;
    pobj = null;
    cobj = null;
  }

  /*将地市设置为省会*/
  if (prov_id == 0 || city_id == 0 || pobj == null || cobj == null){ 
    pobj = ghead_getProvince("bj");   
    for(var i=0;i<citiesJson.length;i++){
      if(citiesJson[i].prov_id == pobj.code){
          cobj = citiesJson[i];
           prov_id = cobj.prov_id;
          city_id = cobj.city_id;
          break;
      }
    }
  }

  if (!pobj || !prov_id || !city_id) {
	  var redirecting_url = "/index_5074.htm";
	  window.location.href = redirecting_url;
  } else {
	  var days = 90;
	  var exp = new Date();
	  exp.setTime(exp.getTime() + days*24*60*60*1000);
	  if (prov_id != 0 && city_id != 0) {
	    document.cookie = "CmLocation=" + prov_id + "|" + city_id + ";path=/;domain=10086.cn;expires=" + exp.toGMTString();
	  }
	  document.cookie = "CmProvid=bj;path=/;domain=10086.cn;expires=" + exp.toGMTString();
	  
	  /*判断页头生成与否,如没有生成则生成页头*/
	  if (!!nohasTopBar) {
	    (function (doc, win) {
	  	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function(){
			var clientWidth = docEl.clientWidth;
		  	if (!clientWidth) return;
		  		docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';//48
			};
	  		if (!doc.addEventListener) return;
	  		win.addEventListener(resizeEvt, recalc, false);
	  		doc.addEventListener('DOMContentLoaded', recalc, false);
	    })(document, window);			
					
		//页头2公共显示栏，只有首页展示
		if(location.pathname.toLowerCase().indexOf("/index/bj") == 0 || location.pathname.toLowerCase().indexOf("/index/bj") == 1 || location.pathname.toLowerCase().indexOf("//bj_head/") == 0 || location.pathname.toLowerCase().indexOf("//bj_head/") == 1 || location.pathname.toLowerCase().indexOf("/bj_head/") == 0 || location.pathname.toLowerCase().indexOf("/bj_head/") == 1){
		  if(!judgeMT){
			renderTopBar21(pobj,cobj);
		  }
		}
	    //页头公共显示栏
	    //renderTopBar1(pobj, cobj);
	    //页头Logo及搜索区
	    renderMiddleArea1(pobj, cobj);
	    //一级菜单栏，移动端隐藏
	   	renderTopLevelMenu1(pobj, cobj);
		/*网上营业厅展示*/
		//renderOnlineBusiness1();
		
		if(!judgeMT || (!!judgeMT && (location.pathname.toLowerCase().indexOf("/index/"+ pobj.abbr +"") == 0 || location.pathname.toLowerCase().indexOf("/index/"+ pobj.abbr +"") == 1 || location.pathname.toLowerCase().indexOf("//"+ pobj.abbr +"_head/") == 0 || location.pathname.toLowerCase().indexOf("//"+ pobj.abbr +"_head/") == 1 || location.pathname.toLowerCase().indexOf("/"+ pobj.abbr +"_head/") == 0 || location.pathname.toLowerCase().indexOf("/"+ pobj.abbr +"_head/") == 1))){
		  headLoginDeal1(pobj,cobj);
		}
	  }

	  
	  /*加载卷帘*/
	  if((location.pathname.toLowerCase().indexOf("/index/bj") == 0 || location.pathname.toLowerCase().indexOf("/index/bj") == 1 || location.pathname.toLowerCase().indexOf("//bj_head/") == 0 || location.pathname.toLowerCase().indexOf("//bj_head/") == 1 || location.pathname.toLowerCase().indexOf("/bj_head/") == 0 || location.pathname.toLowerCase().indexOf("/bj_head/") == 1) && !judgeMT){
		  homeLoadJl(pobj,cobj);
	  }
	    
	  if(location.pathname.toLowerCase().indexOf("/index/bj") == 0 || location.pathname.toLowerCase().indexOf("/index/bj") == 1 || location.pathname.toLowerCase().indexOf("//bj_head/") == 0 || location.pathname.toLowerCase().indexOf("//bj_head/") == 1 || location.pathname.toLowerCase().indexOf("/bj_head/") == 0 || location.pathname.toLowerCase().indexOf("/bj_head/") == 1){
			/*暂停天气预报*/
			//renderForcastBox(pobj, cobj);
			/*头部IPV6展示*/
			$.ajax({
				type : "POST",
				url : "/web-Center/commonservice/getUserIp.do",
				async : true,
				success: function(result) { 
					var rv = JSON.parse(result);
					if (!!rv && rv.responseCode == '0000'){
						if (rv.type == 2) {
							$(".head_con .dropdown").before("<img src=\"/bj_head/images/index5/ipv6.png\" class=\"ip6\" />");
						}
					}
				},error:function(){}
			});
	  }
	  
	  /*搜索区域*/
	  if(!judgeMT){
		renderSearchBox(pobj, cobj);
		creatsearFrom();
	  }
	  else{
		headNavMobieTop(pobj, cobj);
	  }
	  /*更新页头公共信息*/
	  updatePublicBars(pobj, cobj);
	  
	  /*更新个人电话流量信息*/
	  //updatePersonShow();
	  
	  /*更新导航区*/
	  headNavDeals(pobj,cobj);
	  
	  /*设置一级菜单高亮*/
	  var alreadyHighlight = renderTopLevelMenuHighlight(pobj,cobj);
	  
  }
  
  
});

/*登录情况及处理*/
function headLoginDeal1(pobj,cobj){
	var backUrl = window.location.href;
    var channelId = getAuthChannelId();
	var isLogin = getCookie("is_login");
	if (isLogin == true || isLogin == "true") { 
		var curtime = (new Date).getTime(); // 当前时间
		var url = this_protocol+"www1.10086.cn/web-Center/authCenter/checkUserLogin.do";
		var secret = getSecret();
		var version = getVersion();
		var timestamp = curtime;
		var digest = getDigest(curtime,secret);
		var conversationId = getConversationId(curtime);
		
		var json  = {};
		json["serviceName"] = "";
		
		var header = {};
		header["version"] = version;
		header["timestamp"] = timestamp;
		header["digest"] = digest;
		header["conversationId"] = conversationId;
		if (typeof(ie89) != "undefined") {
			header["ie89"] = ie89;
			header["key4IE89"] = key4IE89;
		}
		json["header"] = header;
		
		var data = {};
		data["channelId"] = channelId;
		json["data"] = data;
		
		$.ajax({
			type : "POST",
			url : url,
			data : JSON.stringify(json),
			contentType : 'text/plain',
			async : true,
			xhrFields:{
			  withCredentials:true
			},
			crossDomain:true,
			success : function(rs) { 
				if (!!rs) { 
					var result = JSON.parse(rs); 
					var responseCode = result.result.response_code; 
					if (responseCode == '0000') { 
						var f = result.result.data.isLogin; 
						if (!!f) { 
							var userName1 = result.result.data.user;
							var authUserId1 = result.result.data.authUserId;
							var ifsdMessage1 = parseInt(result.result.data.validStatus);
						
							if (!!userName1) {
							   /*根据是否接入统一认证分省处理登录情况*/
							   if (pobj.abbr == 'gd'){
									normalLogin1(result,pobj,cobj);
							   } 
							   else{
									var phoneNumber = "";
									var phoneNumber_yc = "";
									var if_pnumber = isPhoneNumberPd(userName1);
									if(if_pnumber == 0){
									  phoneNumber = !!ifsdMessage1 ? userName1 : userName1.replace(userName1.substring(3,7), "****");
										phoneNumber_yc = userName1.replace(userName1.substring(3,7), "****");
									}
									else{
									  phoneNumber = userName1.length > 11 ? userName1.substring(0, 10) + '...' : userName1;
									}
									$("<span>").addClass("s2").html(phoneNumber).appendTo($divTopLeft1);
									
									/*显示验证*/
									if(if_pnumber == 0){
									   $("<div>").addClass("eyebox").attr("id","headcheckyz").appendTo($divTopLeft1);
									   var eyestatus = !!ifsdMessage1 ? "eyeshow" : "eyeclose";
									   var eyeopen = !!ifsdMessage1 ? "o" : "c";
									   var eyeimgs = !!ifsdMessage1 ? "eyeing.png" : "eyed.png";
									   $('#headcheckyz').append('<a href="javascript:;" id='+eyestatus+' oc='+eyeopen+'><img class="eye" src="/'+pobj.abbr+'_head/images/index5/'+eyeimgs+'"/></a>');
									   if(!ifsdMessage1){
											$("<div>").addClass("alertBox").attr("id","headyzbox").appendTo($("#headcheckyz"));
											$('#headyzbox').append('<h4><img src="/'+ pobj.abbr+'_head/images/index5/eyeSafe.png"/>身份验证</h4><p class="txt">为保证您的账号安全，需要对您的手机号<span>'+phoneNumber+'</span>进行验证。</p><span class="txt">短信验证码：</span><form class="form clearfix"><input type="text" id="yz_input" class="inputxt"/><input type="button" id="yz_get" value="获取验证码" class="btntxt"/></form><span class="txt txtR" id="yz_alert" style="display:none;"></span><div class="buttons clearfix"><button class="sure">认证</button><button class="cancel">取消</button></div>');
									   }
									}
				
									/*获取用户未读消息*/
									if(checkProv()){
										$("<span>").addClass("s3").attr("id", "unreadMsg").html("消息 ").appendTo($divTopLeft1);
										getUnreadMessage(userName1,authUserId1);
										$("#unreadMsg").click(function(){
										  if(typeof(_tag)!= "undefined"){_tag.dcsMultiTrack("WT.event","INDEX_TOP_C_UP_MSG_"+cobj.prov_id + "|" + cobj.city_id +"");} 
										  window.open("http://shop.10086.cn/i/index.html?f=mynews");
										});
									}
				
									/*登出按钮*/
									$("<a>").addClass("back").html("[退出]").attr("href", "javascript:logout('" + pobj.abbr + "')").attr("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_EXIT_"+cobj.prov_id + "|" + cobj.city_id +"');}").appendTo($divTopLeft1);
									
									/*验证处理*/
									  if(if_pnumber == 0 && !!userName1 && !!phoneNumber_yc){
										  if(!!ifsdMessage1){
											 lookPm(userName1,phoneNumber_yc);
										  }
										  else{
											 doPm(userName1,phoneNumber_yc,cobj);
										  }
									  }
								}       
								if(!!$("#loginArea") && $("#loginArea").length>0){
								   $("#loginArea").css("width","0");
								}
							} else {
								//跳转统一认证检查cookie
								window.location.href = "https://login.10086.cn/SSOCheck.action?channelID=" 
									+ channelId + "&backUrl=" + encodeURIComponent(backUrl);
							}
					   
						} else {//用户未登录
							   //跳转统一认证检查cookie
								window.location.href = "https://login.10086.cn/SSOCheck.action?channelID=" 
									+ channelId + "&backUrl=" + encodeURIComponent(backUrl);
						 }
					  }
				   }
				   else{
							if (pobj.abbr == 'gd'){
								normalLogin1('',pobj,cobj);
							} 
							else{
								$("<a>").addClass("login_a").html("请登录").attr("href", "https://login.10086.cn/login.html?channelID=" + channelId + "&backUrl=" + encodeURIComponent(backUrl)).attr("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_LOGIN_T_"+cobj.prov_id + "|" + cobj.city_id +"');}").appendTo($divLogin1);
							 }
				   }
				   /*弹出登录个人信息-暂时屏蔽*/
				   //drawPersoninfor1(userName1,pobj,cobj);
				
			}, 
			error : function() {
						   if (pobj.abbr == 'gd'){
								normalLogin1('',pobj,cobj);
							} 
							else{
								$("<a>").addClass("login_a").html("请登录").attr("href", "https://login.10086.cn/login.html?channelID=" + channelId + "&backUrl=" + encodeURIComponent(backUrl)).attr("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_LOGIN_T_"+cobj.prov_id + "|" + cobj.city_id +"');}").appendTo($divLogin1);
							 }
							 
							 /*弹出登录个人信息-暂时屏蔽*/
							 //drawPersoninfor1(userName1,pobj,cobj);
			}
		
		});
	}
	else{
					  if (pobj.abbr == 'gd'){
							normalLogin1('',pobj,cobj);
						} 
						else{
							$("<a>").addClass("login_a").html("请登录").attr("href", "https://login.10086.cn/login.html?channelID=" + channelId + "&backUrl=" + encodeURIComponent(backUrl)).attr("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_LOGIN_T_"+cobj.prov_id + "|" + cobj.city_id +"');}").appendTo($divLogin1);
						 }
						 //弹出登录
						 //drawPersoninfor1(userName1,pobj,cobj);
	}
}

function headLoginDeal1_m(pobj,cobj){
	var backUrl = window.location.href;
    var channelId = getAuthChannelId();
	var isLogin = getCookie("is_login");
	if (isLogin == true || isLogin == "true") { 
		var curtime = (new Date).getTime(); // 当前时间
		var url = this_protocol+"www1.10086.cn/web-Center/authCenter/checkUserLogin.do";
		var secret = getSecret();
		var version = getVersion();
		var timestamp = curtime;
		var digest = getDigest(curtime,secret);
		var conversationId = getConversationId(curtime);
		
		var json  = {};
		json["serviceName"] = "";
		
		var header = {};
		header["version"] = version;
		header["timestamp"] = timestamp;
		header["digest"] = digest;
		header["conversationId"] = conversationId;
		if (typeof(ie89) != "undefined") {
			header["ie89"] = ie89;
			header["key4IE89"] = key4IE89;
		}
		json["header"] = header;
		
		var data = {};
		data["channelId"] = channelId;
		json["data"] = data;
		
		$.ajax({
			type : "POST",
			url : url,
			data : JSON.stringify(json),
			contentType : 'text/plain',
			async : true,
			xhrFields:{
			  withCredentials:true
			},
			crossDomain:true,
			success : function(rs) { 
				if (!!rs) { 
					var result = JSON.parse(rs); 
					var responseCode = result.result.response_code; 
					if (responseCode == '0000') { 
						var f = result.result.data.isLogin; 
						if (!!f) { 
							var userName1 = result.result.data.user;
							var authUserId1 = result.result.data.authUserId;
							var ifsdMessage1 = parseInt(result.result.data.validStatus);
						
							if (!!userName1) {
								$(".h_icon2").css("display","block");
							   /*根据是否接入统一认证分省处理登录情况*/
							   if (pobj.abbr == 'gd'){
									normalLoginH5(result,pobj,cobj);
							   } 
							   else{
									var phoneNumber = "";
									var phoneNumber_yc = "";
									var if_pnumber = isPhoneNumberPd(userName1);
									if(if_pnumber == 0){
										phoneNumber = !!ifsdMessage1 ? userName1 : userName1.replace(userName1.substring(3,7), "****");
										phoneNumber_yc = userName1.replace(userName1.substring(3,7), "****");
									}
									else{
									  phoneNumber = userName1.length > 11 ? userName1.substring(0, 10) + '...' : userName1;
									}
									
									/*显示验证*/
									if(if_pnumber == 0){
									   var eyestatus = !!ifsdMessage1 ? "eyeshow_m" : "eyeclose_m";
									   var eyeopen = !!ifsdMessage1 ? "o" : "c";
									   var eyeimgs = !!ifsdMessage1 ? "eyeing.png" : "eyed.png";
									   $('#m_dlstatus').append('<a href="javascript:;" id='+eyestatus+' oc='+eyeopen+'><img class="eye" src="/'+pobj.abbr+'_head/images/index5/'+eyeimgs+'"/></a>');
									   if(!ifsdMessage1){
											$("<div>").addClass("alertBox").attr("id","headyzbox_m").appendTo($("#m_dlstatus"));
											$('#headyzbox_m').append('<h4><img src="/'+ pobj.abbr+'_head/images/index5/eyeSafe.png"/>身份验证</h4><p class="txt">为保证您的账号安全，需要对您的手机号<span>'+phoneNumber+'</span>进行验证。</p><span class="txt">短信验证码：</span><form class="form clearfix"><input type="text" id="yz_input_m" class="inputxt"/><input type="button" id="yz_get_m" value="获取验证码" class="btntxt"/></form><span class="txt txtR" id="yz_alert_m" style="display:none;"></span><div class="buttons clearfix"><button class="sure">认证</button><button class="cancel">取消</button></div>');
									   }
									}
									
									$("<span>").addClass("s2").attr("id", "ydzhspan").html('<font>'+phoneNumber+'</font>').appendTo($("#m_dlstatus"));
				
									/*登出按钮*/
									$("<a>").addClass("back").html("[退出]").attr("href", "javascript:logout('" + pobj.abbr + "')").attr("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_M_UP_EXIT_"+cobj.prov_id + "|" + cobj.city_id +"');}").appendTo($("#ydzhspan"));
									
									/*验证处理*/
									  if(if_pnumber == 0 && !!userName1 && !!phoneNumber_yc){
										  if(!!ifsdMessage1){
											 lookPm_m(userName1,phoneNumber_yc);
										  }
										  else{
											 doPm_m(userName1,phoneNumber_yc,cobj);
										  }
									  }
								} 
							} else {
								//跳转统一认证检查cookie
								window.location.href = "https://login.10086.cn/SSOCheck.action?channelID=" 
									+ channelId + "&backUrl=" + encodeURIComponent(backUrl);
							}
					   
						} else {//用户未登录
							   //跳转统一认证检查cookie
								window.location.href = "https://login.10086.cn/SSOCheck.action?channelID=" 
									+ channelId + "&backUrl=" + encodeURIComponent(backUrl);
						 }
					  }
				   }
				   else{
							if (pobj.abbr == 'gd'){
								normalLoginH5('',pobj,cobj);
							} 
							else{
								$("<a>").addClass("s1").html("登录").attr("href", "https://login.10086.cn/login.html?channelID=" + channelId + "&backUrl=" + encodeURIComponent(backUrl)).attr("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_M_UP_LOGIN_T_"+cobj.prov_id + "|" + cobj.city_id +"');}").appendTo($('#m_dlstatus'));
							 }
				   }
				   /*弹出登录个人信息-暂时屏蔽*/
				   //drawPersoninfor1(userName1,pobj,cobj);
				
			}, 
			error : function() {
						   if (pobj.abbr == 'gd'){
								normalLoginH5('',pobj,cobj);
							} 
							else{
								$("<a>").addClass("s1").html("登录").attr("href", "https://login.10086.cn/login.html?channelID=" + channelId + "&backUrl=" + encodeURIComponent(backUrl)).attr("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_M_UP_LOGIN_T_"+cobj.prov_id + "|" + cobj.city_id +"');}").appendTo($('#m_dlstatus'));
							 }
							 
							 /*弹出登录个人信息-暂时屏蔽*/
							 //drawPersoninfor1(userName1,pobj,cobj);
			}
		
		});
	}
	else{
					  if (pobj.abbr == 'gd'){
							normalLoginH5('',pobj,cobj);
						} 
						else{
							$("<a>").addClass("s1").html("登录").attr("href", "https://login.10086.cn/login.html?channelID=" + channelId + "&backUrl=" + encodeURIComponent(backUrl)).attr("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_M_UP_LOGIN_T_"+cobj.prov_id + "|" + cobj.city_id +"');}").appendTo($('#m_dlstatus'));
						 }
						 //弹出登录
						 //drawPersoninfor1(userName1,pobj,cobj);
	}
}	

/*加载卷帘*/
function homeLoadJl(pobj,cobj){
	var topAdsAll = null;
	var is_newjl = false;
	$.getJSON("/bj_head/" + R3_L0_P0_headtail[0], function(data){
		if(typeof(data.cData.list) != 'undefined' && !!data.cData.list && data.cData.list.length>0 && typeof(data.cLocation.columnId) != 'undefined' && !!data.cLocation.columnId && data.cLocation.columnId.length>0 && typeof(data.cLocation.regionId) != 'undefined'  && !!data.cLocation.regionId && data.cLocation.regionId.length>0 && typeof(data.cLocation.operationPositionId) != 'undefined' && !!data.cLocation.operationPositionId && data.cLocation.operationPositionId.length>0){
		   topAdsAll = data;
		   is_newjl = true;
		}
		else if(!!data.cData.content){
		   topAdsAll = data.cData.content;
		   is_newjl = false;
		}
	}).complete(function(){
		if(!!is_newjl){
			 //触点改造新数据
		     checkJlIsIop(pobj,cobj,topAdsAll);
		}
		else{
			 //旧数据
		     autoAdd(pobj,cobj,topAdsAll);
		     showAds(topAdsAll); 
		}
	});;
}

/*判断域名是否是集团网站(不是省公司网站即算作集团网站)*/
function isJTSite(domain) {
  var rv = true;
  if(domain != null && 0 < domain.length)  {
      domain = domain.toLowerCase();
      for (var i=0;i<provincesJson.length;i++) {
          if(domain.indexOf(provincesJson[i].abbr + ".10086.cn") != -1){
              rv = false;
              break;
          }
      }
  }
  return rv;
}

/*处理二级地市工单链接*/
function secondCitylink(url,city_id){ 
   if(url.indexOf("http://")!=0 && url.indexOf(",")>=0 && url.indexOf("-")>=0){
      var cityUrl = url.split(";");
	  if(!!cityUrl){  
	     for(var i=0;i<cityUrl.length;i++){
		    var cityUd = cityUrl[i].split(",");  
			if(!!cityUd[1]){
			   var cityUl = cityUd[1].split("-"); 
			   if(!!cityUl){
			      if(cityUl[0] == (city_id+"")){
				     return cityUl[1];
				  }
			   }
			}
		 }
	  }
   }
   else{
     return url;
   }
}

/*顶部栏更新链接及插码*/
function updatePublicBars(pobj, cobj) {
	$.getJSON("/bj_head/" + R1_L0_P0_headtail[0], function(data) {
		if(!!data.cData.content){
			var headTool = data.cData.content;
			  //手机营业厅
			  if(!!headTool){
				  $('#tempBar1').attr('href', !!secondCitylink(headTool.appUrl,cobj.city_id) ? secondCitylink(headTool.appUrl,cobj.city_id) : 'javascript:;');
				  $('#m_tempBar1').attr('href', !!secondCitylink(headTool.appUrl,cobj.city_id) ? secondCitylink(headTool.appUrl,cobj.city_id) : 'javascript:;');
				  $('#imgYYTfc').attr('src', '/bj_head/'+headTool.appImg);  
				  //移动LOGO
				  $(".logo").attr('src', "/bj_head/"+headTool.logoImg);
				  //政企客户
				  $('#tempBar6').attr('href', !!secondCitylink(headTool.powerUrl,cobj.city_id) ? secondCitylink(headTool.powerUrl,cobj.city_id) : 'javascript:;');
				  $('#m_tempBar6').attr('href', !!secondCitylink(headTool.powerUrl,cobj.city_id) ? secondCitylink(headTool.powerUrl,cobj.city_id) : 'javascript:;');
			  }
		}
	});
  
  for (var i = 0; i < 9; i++) {
    var object = document.getElementById("tempBar" + i + "");
    var publicName = "";
    if (object) {
    	publicName = object.innerHTML;
    }
    var publicCode = "";
	if (publicName == "个人中心") {
    	publicCode = "INDEX_TOP_C_UP_SELF_";
    } else if (publicName == "中国移动客户端") {
    	publicCode = "INDEX_TOP_C_UP_APP_";
    } else if (publicName == "积分商城") {
        publicCode = "INDEX_TOP_C_UP_JFSC_";
    } else if (publicName == "能力开放商店") {
        publicCode = "INDEX_TOP_C_UP_OPEN_";
    } else if (publicName == "关于中国移动") {
        publicCode = "INDEX_TOP_C_UP_ABOUT_";
    } else if (publicName == "政企客户") {
        publicCode = "INDEX_TOP_C_UP_ZQKH_";
    } else if (publicName == "ENGLISH") {
        publicCode = "INDEX_TOP_C_UP_ENGLISH_";
    } else if (publicName == "联系我们") {
        publicCode = "INDEX_TOP_C_UP_CONTACT_";
    } else if (publicName == "证照信息") {
        publicCode = "INDEX_TOP_C_UP_ZZXX_";
    }
    
    if (publicCode != "") {
        object.setAttribute("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','"+ publicCode + cobj.prov_id + "|" + cobj.city_id +"');}");
    }
  }
  
  for (var i = 0; i < 9; i++) {
    var m_object = document.getElementById("m_tempBar" + i + "");
    var m_publicName = "";
    if (m_object) {
    	m_publicName = m_object.innerHTML;
    }
    var m_publicCode = "";
	if (m_publicName == "个人中心") {
    	m_publicCode = "INDEX_TOP_M_UP_SELF_";
    } else if (m_publicName == "中国移动客户端") {
    	m_publicCode = "INDEX_TOP_M_UP_APP_";
    } else if (m_publicName == "积分商城") {
        m_publicCode = "INDEX_TOP_M_UP_JFSC_";
    } else if (m_publicName == "能力开放商店") {
        m_publicCode = "INDEX_TOP_M_UP_OPEN_";
    } else if (m_publicName == "关于中国移动") {
        m_publicCode = "INDEX_TOP_M_UP_ABOUT_";
    } else if (m_publicName == "政企客户") {
        m_publicCode = "INDEX_TOP_M_UP_ZQKH_";
    } else if (m_publicName == "ENGLISH") {
        m_publicCode = "INDEX_TOP_M_UP_ENGLISH_";
    } else if (m_publicName == "联系我们") {
        m_publicCode = "INDEX_TOP_M_UP_CONTACT_";
    } else if (m_publicName == "证照信息") {
        m_publicCode = "INDEX_TOP_M_UP_ZZXX_";
    }
    
    if (m_publicCode != "") {
        m_object.setAttribute("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','"+ m_publicCode + cobj.prov_id + "|" + cobj.city_id +"');}");
     }
   } 
}

/*导航区处理*/
function headNavDeals(pobj,cobj){
	var headNavigation = '';
	$.getJSON("/bj_head/" + R4_L0_P0_headtail[0], function(data){
		if(!!data.cData.content){
			headNavigation = data.cData.content;
		}	
	}).complete(function(){
		  if(!!nohasTopBar) {
			renderOnlineBusiness1(headNavigation);
		  }
		  updateNavigation(headNavigation,pobj,cobj);
		  if((location.pathname.toLowerCase().indexOf("/index/bj") == 0 || location.pathname.toLowerCase().indexOf("/index/bj") == 1 || location.pathname.toLowerCase().indexOf("//bj_head/") == 0 || location.pathname.toLowerCase().indexOf("//bj_head/") == 1) && !judgeMT){
			  updateMyMobile2(headNavigation,pobj,cobj);
			  updateOnlineBusiness2(headNavigation,pobj,cobj);
			  updateServiceAndSupport2(headNavigation,pobj,cobj);
			  updateIndex2(headNavigation,pobj,cobj);
		  }
	});
}

/*更新导航区*/
function updateNavigation(hn,pobj, cobj) { 
	if (hn && hn.navUrl1) {
		$(".allService:eq(0)").attr("href", !!secondCitylink(hn.navUrl1,cobj.city_id) ? secondCitylink(hn.navUrl1,cobj.city_id) : "javascript:;");
		$(".allService:eq(0)").html(hn.navName1); 
		if($(".allService:eq(0)").attr("href") != "javascript:;"){ 
		   $(".allService:eq(0)").css("cursor","pointer");
		}
	}

	if (hn && hn.navUrl2) {
	  if($("#topA0").length>0){
	  $("#topA0").attr("href", !!secondCitylink(hn.navUrl2,cobj.city_id) ? secondCitylink(hn.navUrl2,cobj.city_id) : "javascript:;");
	  $("#topA0").html(hn.navName2);
	  }
	}
	  
	if (hn && hn.navUrl3) {
	    if($("#topA1").length>0){
		$("#topA1").attr("href", !!secondCitylink(hn.navUrl3,cobj.city_id) ? secondCitylink(hn.navUrl3,cobj.city_id) : "javascript:;");
		$("#topA1").html(hn.navName3);
		}
	}

	if (hn && hn.navUrl4) {
	    if($("#topA2").length>0){
		$("#topA2").attr("href", !!secondCitylink(hn.navUrl4,cobj.city_id) ? secondCitylink(hn.navUrl4,cobj.city_id) : "javascript:;");
		$("#topA2").html(hn.navName4);
		}
	}

	if (judgeMT) {
	    if($("#topA3").length>0){
		$("#topA3").attr("href", "http://touch.10086.cn/");
		if(hn && hn.navUrl5) {
			$("#topA3").html(hn.navName5);
		}
		}
	}
	else if(hn && hn.navUrl5) {
		var shopurl = !!secondCitylink(hn.navUrl5,cobj.city_id) ? secondCitylink(hn.navUrl5,cobj.city_id) : "javascript:;";
		shopurl = shopurl.replace(new RegExp("\\{prov\\}","g"),"" + cobj.prov_id);
		shopurl = shopurl.replace(new RegExp("\\{city\\}","g"),"" + cobj.city_id);
		if($("#topA3").length>0){
		$("#topA3").attr("href", shopurl);
		$("#topA3").html(hn.navName5);
		}
	}

	if (hn && hn.navUrl6) {
	    if($("#topA4").length>0){
		$("#topA4").attr("href", !!secondCitylink(hn.navUrl6,cobj.city_id) ? secondCitylink(hn.navUrl6,cobj.city_id) : "javascript:;");
		$("#topA4").html(hn.navName6);
		}
	}
}

function creatsearFrom(){
  var searchScript =document.createElement("script");
  searchScript.src = this_protocol+"search.10086.cn/share/richinfo_search.js";
  document.documentElement.appendChild(searchScript);
}

function updateSearchForm(hs,pobj, cobj) {
  $("#searchbtn").click(function(){chk_frm_search(hs,pobj,cobj);});
  $("#skeywords").keypress(function (e) {
    if (e.keyCode == 13) {
      chk_frm_search(hs,pobj, cobj);
    }
  });
}

/*
function updatePersonShow(){
        //判断登录
        var hasLogin = false;
	    var usName;
		//校验用户是否已登录
		var channelId = getAuthChannelId();
		var isLogin = getCookie("is_login");
		if (isLogin == true || isLogin == "true") { 
		//assertionQuery();
		hasLogin = false;
		var curtime = (new Date).getTime(); // 当前时间
		var url = this_protocol+"www1.10086.cn/web-Center/authCenter/checkUserLogin.do";
		var secret = getSecret();
		var version = getVersion();
		var timestamp = curtime;
		var digest = getDigest(curtime,secret);
		var conversationId = getConversationId(curtime);
		
		var json  = {};
		json["serviceName"] = "";
		
		var header = {};
		header["version"] = version;
		header["timestamp"] = timestamp;
		header["digest"] = digest;
		header["conversationId"] = conversationId;
		//如果是IE8,IE9,往header中写入参数ie89和key4IE89
		if (typeof(ie89) != "undefined") {
			header["ie89"] = ie89;
			header["key4IE89"] = key4IE89;
		}
		json["header"] = header;
		
		var data = {};
		data["channelId"] = channelId;
		json["data"] = data;

		$.ajax({
			type : "POST",
			url : url,
			//data直接传入json格式字符串
			data :JSON.stringify(json),
			//contentType指定为text/plain
			contentType: 'text/plain',
			async : true,
			xhrFields:{
			  withCredentials:true
			},
            crossDomain:true,
			success : function(rs) { 
				if (!!rs) {
				    var rv = false;
					var result = JSON.parse(rs);
					var responseCode = result.result.response_code;
					if (responseCode == '0000') { 
						var f = result.result.data.isLogin;
						if (!!f) {  
							hasLogin = true;
							usName = result.result.data.user;							
							    if (!!hasLogin && !!usName) {//用户已登录
								      queryCustInfo();
									  queryRealFee();
									  queryPoint();
									  queryPlanRemain();												    
								}
							}
					  }
					}
			}, 
			error : function() {}
		});	
	   
	   
	   
   }    

}
*/

/*页头渲染*/
function renderTopBar1(pobj,cobj) {
  var headcsspath = '';
  if(location.pathname.toLowerCase().indexOf("/index/bj") == 0 || location.pathname.toLowerCase().indexOf("/index/bj") == 1 || location.pathname.toLowerCase().indexOf("//bj_head/") == 0 || location.pathname.toLowerCase().indexOf("//bj_head/") == 1 || location.pathname.toLowerCase().indexOf("/bj_head/") == 0 || location.pathname.toLowerCase().indexOf("/bj_head/") == 1){
	headcsspath = "/bj_head/css/index5/head_index.css";
  }
  else{
	headcsspath = "/bj_head/css/index5/head.css";
  }
  
  var heads = !!$("head") && $("head").length>0 ? "head" : "body";
  $("<link>").attr({rel:"stylesheet",type:"text/css",id:"cssHead",href:headcsspath}).appendTo(heads); 

  $('#bj_head').append('<div class="head_top" id="topbar"><div class="head_top1200 clearfix"><div class="head_lf" id="head_lf"><span class="s1">欢迎来到中国移动网站</span><div id="loginArea" class="login"></div></div><div class="head_rg"><a href="http://shop.10086.cn/i/" class="a1" id="tempBar0">个人中心</a><div class="a2" id="sjyyt"><a class="a2_a" id="tempBar1">中国移动客户端</a><div class="a2_box" id="yytbar"><img id="imgYYTfc"/><p>扫一扫，随时查话费！</p></div></div><a href="http://jf.10086.cn/" class="a1" id="tempBar2">积分商城</a><a href="http://open.10086.cn/" class="a1 a1_shop" id="tempBar3">能力开放商店</a><a href="http://www.10086.cn/aboutus/" class="a1" id="tempBar4">关于中国移动</a><a href="http://www.10086.cn/zzxx/" class="a1" id="tempBar8">证照信息</a><a href="http://www.10086.cn/web_notice/contact/" class="a1" id="tempBar5">联系我们</a><a class="a1" id="tempBar6">政企客户</a><a href="http://www.chinamobileltd.com/?lang=en" class="a1 idx_last" id="tempBar7">ENGLISH</a></div></div></div>');
  if (!judgeMT) {
    $('#sjyyt').mouseenter(function(){ShowDivYYT();});
    $('#sjyyt').mouseleave(function(){HideDivYYT();});
  }
  
  $divTopLeft1 = $("#head_lf");
  $divLogin1 = $("#loginArea");  
}

function renderMiddleArea1(pobj,cobj){
  $("<div>").addClass("head_con").attr("id","middle").appendTo($('#bj_head'));
  var headss_logo = '<a href="http://www.10086.cn/" onclick="javascript:if(typeof(_tag)!= \'undefined\'){_tag.dcsMultiTrack(\'WT.event\',\'INDEX_TOP_C_UP_LOGO_'+ cobj.prov_id + '|' + cobj.city_id +'\');}"><img class="logo" alt="中国移动欢迎您"/></a>';
  var headss_area = '';
  headss_area += '<div class="dropdown">';
  headss_area += '<div class="topcity" id="dropdownMenu3">'; 
  headss_area += '</div>';
  headss_area += '<ul class="dropdown-menu" id="DivCity">';
  headss_area += '<li><span>全部省份</span></li>';
  headss_area += '<li><dl class="clearfix"><dt><span>A-G</span></dt><dd><a href="javascript:void(0);">北京&gt;</a><a href="javascript:void(0);">安徽&gt;</a><a href="javascript:void(0);">重庆&gt;</a><a href="javascript:void(0);">福建&gt;</a><a href="javascript:void(0);">广东&gt;</a><a href="javascript:void(0);">广西&gt;</a><a href="javascript:void(0);">甘肃&gt;</a><a href="javascript:void(0);">贵州&gt;</a></dd></dl></li>';
  headss_area += '<li><dl class="clearfix"><dt><span>H-J</span></dt><dd><a href="javascript:void(0);">河北&gt;</a><a href="javascript:void(0);">河南&gt;</a><a href="javascript:void(0);">海南&gt;</a><a href="javascript:void(0);">湖北&gt;</a><a href="javascript:void(0);">湖南&gt;</a><a href="javascript:void(0);">黑龙江&gt;</a><a href="javascript:void(0);">吉林&gt;</a><a href="javascript:void(0);">江苏&gt;</a><a href="javascript:void(0);">江西&gt;</a></dd></dl></li>';
  headss_area += '<li><dl class="clearfix\"><dt><span>L-S</span></dt><dd><a href="javascript:void(0);">辽宁&gt;</a><a href="javascript:void(0);">内蒙古&gt;</a><a href="javascript:void(0);">宁夏&gt;</a><a href="javascript:void(0);">青海&gt;</a><a href="javascript:void(0);">上海&gt;</a><a href="javascript:void(0);">四川&gt;</a><a href="javascript:void(0);">山东&gt;</a><a href="javascript:void(0);">山西&gt;</a><a href="javascript:void(0);">陕西&gt;</a></dd></dl></li>';
  headss_area += '<li><dl class="clearfix\"><dt><span>T-Z</span></dt><dd><a href="javascript:void(0);">天津&gt;</a><a href="javascript:void(0);">新疆&gt;</a><a href="javascript:void(0);">西藏&gt;</a><a href="javascript:void(0);">云南&gt;</a><a href="javascript:void(0);">浙江&gt;</a></dd></dl></li>';
  headss_area += '</ul>';
  headss_area += '<ul class="dropdown-menu" id="divdishi" style="display:none;">';
  headss_area += '<li><span></span><a href="javascript:void(0);"><span class="blue">[返回全部省份]</span></a></li><li><dl class="clearfix dishi"></dl></li>';
  headss_area += '</ul>';
  headss_area += '</div>';
  $("#middle").append(headss_logo+headss_area);

  $(".topcity").html(cobj.city_name); 

  if (judgeMT){
     $("body").css({"cursor":"pointer","background-image":"none"});
  }

  $(document).click(hiddenDivCity);
  $(".topcity").click(showDivCity);

  for (var i =0; i<provincesJson.length; i++) {
    $("#DivCity a:eq(" + i + ")").attr("prov_id",provincesJson[i].code);
    $("#DivCity a:eq(" + i + ")").attr("prov_abbr",provincesJson[i].abbr);
    $("#DivCity a:eq(" + i + ")").attr("prov_name",provincesJson[i].name);
    $("#DivCity a:eq(" + i + ")").html(provincesJson[i].name + " >");
    $("#DivCity a:eq(" + i + ")").click(g2p);
  }
  $("#divdishi a:eq(0)").click(g2top);
}

/*function renderForcastBox(pobj, cobj) { 
	//天气预报
	var curtime = (new Date).getTime(); // 当前时间
	var url = this_protocol+"www1.10086.cn/web-Center/commonservice/weather_forecast_of_6days.do";
	var secret = getSecret();
	var version = getVersion();
	var timestamp = curtime;
	var digest = getDigest(curtime,secret);
	var conversationId = getConversationId(curtime);
	var channelId = getChannelId(); 
	
	var json  = {};
	json["serviceName"] = "weather_forecast_of_6days";
	
	var header = {};
	header["version"] = version;
	header["timestamp"] = timestamp;
	header["digest"] = digest;
	header["conversationId"] = conversationId;
	//如果是IE8,IE9,往header中写入参数ie89和key4IE89
	if (typeof(ie89) != "undefined") {
		header["ie89"] = ie89;
		header["key4IE89"] = key4IE89;
	}
	json["header"] = header;
	
	var data = {};
	data["cityId"] = cobj.city_id;
	data["channelId"] = channelId;
	json["data"] = data;
	
	$.ajax({
		type : "POST",
		url : url,
		//data直接传入json格式字符串
		data : JSON.stringify(json),
		//contentType指定为text/plain
		contentType : 'text/plain',
		async : true,
		xhrFields:{
			  withCredentials:true
			},
        crossDomain:true,
		success : function(rs) { 
			if (!!rs) { 
				var result = JSON.parse(rs);
				var responseCode = result.result.responseCode;
				if (responseCode == '0000') { 
					var weatherData = result.result.weatherdata;
					if (!!weatherData) {
					    if (!!weatherData[1]){ 
						//weatherData = JSON.parse(weatherData);
						var hiTemperature = weatherData[1].hitemperature;
						var loTemperature = weatherData[1].lotemperature;
						var weather = weatherData[1].weather; 
						var weathersign = weatherData[1].weathersign; 
						var weatherDiv = $("<div></div>");
						weatherDiv.addClass("forcast");
						var weatherImg = $("<img></img>");
						weatherDiv.append(weatherImg);
						//根据是否包含八个天气，且显示首先出现的天气状况对应的图标
						var weatherLoc = ["晴","多云","阴","雨","雾","雪","沙","霾"];
						var weatherWzh = [];
						for(var i=0;i<weatherLoc.length;i++){  
						   var wtwz = weather.indexOf(weatherLoc[i]); 
						   if(wtwz>=0){ 
						      var tqshow = {};
							  tqshow.bh = i;
							  tqshow.wz = wtwz;
						      weatherWzh.push(tqshow);
						   } 
						}
						if(weatherWzh.length>0){
						  var min_wtbh = weatherWzh[0].bh;
						  var min_wtwz = weatherWzh[0].wz; 
						  for(var j=0;j<weatherWzh.length;j++){
						     if(weatherWzh[j].wz<min_wtwz){
							    min_wtwz = weatherWzh[j].wz;
							    min_wtbh = weatherWzh[j].bh;
							 }
						  }
						  weatherImg.attr("src", "/"+ pobj.abbr +"_head/images/index5/weather"+ (min_wtbh+1) +".png");
						}
						else{
						   weatherImg.remove();
						}
						
						var ul = $("<ul></ul>");
						weatherDiv.append(ul);
						var temperature_li = $("<li></li>");
						temperature_li.html(hiTemperature + "/" + loTemperature + " ℃");
						ul.append(temperature_li);
						var weather_li = $("<li></li>");
						weather_li.html(weather);
						ul.append(weather_li);
						$("#middle").append(weatherDiv);
						}
					}
				}
			}
		},
		error : function() {}
	});

}*/

 /*搜索栏*/
function renderSearchBox(pobj,cobj){ 
	var headSearch = '';	
	$.getJSON("/bj_head/" + R2_L0_P0_headtail[0], function(data) {
		if(!!data.cData.content){
			headSearch = data.cData.content;
		}
	}).complete(function(){
		var headsearch_sc = '';
		var searchKeyWord = '';
		var hotWords = []; 
		if((location.pathname.toLowerCase().indexOf("/index/bj") == 0 || location.pathname.toLowerCase().indexOf("/index/bj") == 1 || location.pathname.toLowerCase().indexOf("//bj_head/") == 0 || location.pathname.toLowerCase().indexOf("//bj_head/") == 1 || location.pathname.toLowerCase().indexOf("/bj_head/") == 0 || location.pathname.toLowerCase().indexOf("/bj_head/") == 1) && $('#topHead').length>0 && $('#topHead').css('background-image').length>0 && $('#topHead').css('background-image') != 'none'){
			headsearch_sc = 'searchbar searchbar1 input-group';
		}
		else{
			headsearch_sc = 'searchbar searchbar2 input-group';
		}
		if(!!headSearch){
			if(headSearch.defaultWord.wordName.length>0){
				searchKeyWord = headSearch.defaultWord.wordName;
			}
			if (headSearch && headSearch.hotWords && headSearch.hotWords.length) {
				hotWords = headSearch.hotWords;
			}
		}
		var searchInputHtml = "<input value='"+ searchKeyWord +"' id='skeywords' autocomplete='off' disableautocomplete class='form-control' type='form-control' onfocus='javascript:if(this.value==\""+searchKeyWord+"\"){this.value=\"\"} this.style.color = \"#666666\";' onblur='javascript:if(this.value==\"\"){this.value=\""+searchKeyWord+"\"} this.style.color =\"#666666\"' title='关键字必须至少有一个汉字或英文字母' name='qt' maxlength='20'/><span class='input-group-btn'> <input id='searchbtn' type='submit' class='btn' value=''></span>";
		var hotWordsHtml = '';
		if(hotWords.length>0){
			for(var i=0;i<hotWords.length;i++){
				var hwc = hotWords[i].HWName;
				var url = !!secondCitylink(hotWords[i].HWURL,cobj.city_id) ? secondCitylink(hotWords[i].HWURL,cobj.city_id) : 'javascript:;';
				var light = hotWords[i].isLight == true ? ' class="rose"' : '';
				hotWordsHtml += '<a id="hotWord'+i+'" href="'+url+'" target="_blank"'+light+' onclick="javascript:if(typeof(_tag)!=\'undefined\'){_tag.dcsMultiTrack(\'WT.event\',\'INDEX_TOP_C_SS_RCSS_'+(i+1)+'_' +hwc+'_'+cobj.prov_id+'|'+cobj.city_id+'\');}">'+hwc+'</a>';
			}
		}
		var headsearch_bg = '';
		headsearch_bg += '<div class="col-sm-5 col-md-5 col-lg-5 searchdiv hidden-xs">';
		headsearch_bg += '<div class="'+headsearch_sc+'">'+searchInputHtml+'</div>';
		headsearch_bg += '<div class="hot hidden-sm">'+hotWordsHtml+'</div>';
		headsearch_bg += '</div>';
		$('#middle').append(headsearch_bg);
		
		updateSearchForm(headSearch,pobj,cobj);
		if((location.pathname.toLowerCase().indexOf("/index/bj") == 0 || location.pathname.toLowerCase().indexOf("/index/bj") == 1 || location.pathname.toLowerCase().indexOf("//bj_head/") == 0 || location.pathname.toLowerCase().indexOf("//bj_head/") == 1) && !judgeMT){
		updateSearchForm2(headSearch,pobj,cobj);
		}
	});
}

/*移动端导航*/
function headNavMobieTop(pobj,cobj){
	var messageImg = '';
	if(checkProv() && is_iPad()){
		messageImg += '<img class="h_icon2" style="display:none;" src="/bj_head/images/index5/h_icon2.png" alt="消息提醒"/>';
	}
	var ydHeadNav = '';
	ydHeadNav += '<img class="h_icon1" src="/bj_head/images/index5/h_icon1.png"/>';
	var ydHeadDl = '';
	ydHeadDl += '<dl class="h_list clearfix">';
	ydHeadDl += '<dt id="m_dlstatus"><img class="shut2" src="/bj_head/images/index5/shut.jpg"/></dt>';
	ydHeadDl += '<dd><a href="http://shop.10086.cn/i/" target="_blank" id="m_tempBar0">个人中心</a></dd>';
	ydHeadDl += '<dd><a target="_blank" id="m_tempBar1">中国移动客户端</a></dd>';
	ydHeadDl += '<dd><a href="http://jf.10086.cn/" target="_blank" id="m_tempBar2">积分商城</a></dd>';
	ydHeadDl += '<dd><a href="http://open.10086.cn/" target="_blank" id="m_tempBar3">能力开放商店</a></dd>';
	ydHeadDl += '<dd><a href="http://www.10086.cn/aboutus/" target="_blank" id="m_tempBar4">关于中国移动</a></dd>';
	ydHeadDl += '<dd><a href="http://www.10086.cn/zzxx/" target="_blank" id="m_tempBar8">证照信息</a></dd>';
	ydHeadDl += '<dd><a href="http://www.10086.cn/web_notice/contact/" target="_blank" id="m_tempBar5">联系我们</a></dd>';
	ydHeadDl += '<dd><a target="_blank" id="m_tempBar6">政企客户</a></dd>';
	ydHeadDl += '<dd><a href="http://www.chinamobileltd.com/?lang=en" target="_blank" id="m_tempBar7">ENGLISH</a></dd>';
	ydHeadDl += '</dl>';
	
	$('#middle').append(messageImg+ydHeadNav+ydHeadDl);
	
	if(!!$('.h_icon2') && $('.h_icon2').length>0){
		$('.h_icon2').click(function(){
			if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_MSG_'+cobj.prov_id + '|' + cobj.city_id +'');}
			window.open("http://shop.10086.cn/i/index.html?f=mynews");
		});
	}
	headLoginDeal1_m(pobj,cobj);
}


/*一级导航栏*/
function renderTopLevelMenu1(pobj, cobj) {
  var divHeadNavbar = $('<div class="head_nav"></div>');
  $("#bj_head").append(divHeadNavbar);

  /*全部产品服务*/
  if(location.pathname.toLowerCase().indexOf("/index/bj") == 0 || location.pathname.toLowerCase().indexOf("/index/bj") == 1 || location.pathname.toLowerCase().indexOf("//bj_head/") == 0 || location.pathname.toLowerCase().indexOf("//bj_head/") == 1 || location.pathname.toLowerCase().indexOf("/bj_head/") == 0 || location.pathname.toLowerCase().indexOf("/bj_head/") == 1){
		  $(divHeadNavbar).append('<a href="javascript:;" class="allService" style="cursor:default;">全部产品服务</a>');
		  if($('#topHead').length>0){
				if($('#topHead').css('background-image').length>0 && $('#topHead').css('background-image') != 'none'){ 
					$(".allService").addClass("allService2");
				}
				else{
					$(".allService").addClass("allService1");
				}
		  }
		  else{
			$(".allService").addClass("allService1");
		  }
		  $('.head_nav').removeClass('head_nav1200');
  }
  else{
  $('.head_nav').addClass('head_nav1200');
  }
  
  /*导航*/
  var headNav_home = '<li id="navTop0"><a id="topA0" target="_blank" href="http://www.10086.cn/">首页</a></li>';
  var headNav_mall = '<li id="navTop1"><a id="topA1" target="_blank">移动商城</a></li>';
  var headNav_buss = '<li id="navTop2" style="display:none;"><a id="topA2" target="_blank">网上营业厅</a></li>';
  var headNav_myyd = '<li id="navTop3"><a id="topA3" target="_blank">我的移动</a></li>';
  var headNav_serv = '<li id="navTop4"><a id="topA4" target="_blank">服务中心</a></li>';
  
  var headNavTop = '';
  headNavTop += '<ul class="nav">';
  headNavTop += headNav_home+headNav_mall+headNav_buss+headNav_myyd+headNav_serv;
  headNavTop += '</ul>';
  $(divHeadNavbar).append(headNavTop);
  
  $('#topA0').click(function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_DH_SY_'+cobj.prov_id + '|' + cobj.city_id);}});
  $('#topA1').click(function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_DH_SHOP_'+cobj.prov_id + '|' + cobj.city_id);}});
  $('#topA2').click(function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_DH_SERVICE_'+cobj.prov_id + '|' + cobj.city_id);}});
  $('#topA3').click(function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_DH_MY_'+cobj.prov_id + '|' + cobj.city_id);}});
  $('#topA4').click(function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_DH_SUPPORT_'+cobj.prov_id + '|' + cobj.city_id);}});

  $divHeadNavbar1 = divHeadNavbar;
}

/*网上营业厅根据JSON显示*/
function renderOnlineBusiness1(d){
	var ifhasnetshop = false;
	if(!!d){
		var headNavDataGeContent = d.navName4;
		if(!!$.trim(headNavDataGeContent)){
			ifhasnetshop = true;
		}
	}
	if(!!ifhasnetshop){
		$('#navTop2,#headNetShop').css('display','block');
	}
	else{
		$('#navTop2,#headNetShop').remove();
	}	
	if(location.pathname.toLowerCase().indexOf("/index/bj") != 0 && location.pathname.toLowerCase().indexOf("/index/bj") != 1 && location.pathname.toLowerCase().indexOf("//bj_head/") != 0 && location.pathname.toLowerCase().indexOf("//bj_head/") != 1 && location.pathname.toLowerCase().indexOf("/bj_head/") != 0 && location.pathname.toLowerCase().indexOf("/bj_head/") != 1){
		   $('.head_nav1200 .nav').css('width','100%');
		   if(!ifhasnetshop){
			 $('.head_nav .nav li').css('width','25%');
		   }
		   else{
			 $('.head_nav .nav li').css('width','20%');
		   }
	}	
}

// 处理一级菜单高亮
function renderTopLevelMenuHighlight(pobj,cobj) {
  var rv = false;
  var thisURL = document.URL;
  var tmpUPage = thisURL.split("/");
  var thisUPage = tmpUPage[3];
  
  if(thisURL.charAt(thisURL.length-1) == "/"){
     thisURL = thisURL.substring(0,thisURL.length-1);
  }

  var nabMenu1 = $("#navTop0");
  var nabMenu2 = $("#navTop1");
  var nabMenu3 = $("#navTop2");
  var nabMenu4 = $("#navTop3");
  var nabMenu5 = $("#navTop4");
  
  var navTopA0 = document.getElementById("topA0");
  var navTopA1 = document.getElementById("topA1");
  var navTopA2 = document.getElementById("topA2");
  var navTopA3 = document.getElementById("topA3");
  var navTopA4 = document.getElementById("topA4");
  
  var aLabel2Href = (!!navTopA1)?navTopA1.href:'';
  var aLabel3Href = (!!navTopA2)?navTopA2.href:'';
  var aLabel4Href = (!!navTopA3)?navTopA3.href:'';
  var aLabel5Href = (!!navTopA4)?navTopA4.href:'';

  if(aLabel2Href.charAt(aLabel2Href.length-1) == "/"){
      aLabel2Href = aLabel2Href.substring(0,aLabel2Href.length-1);
  }

  if(aLabel3Href.charAt(aLabel3Href.length-1) == "/"){
      aLabel3Href = aLabel3Href.substring(0,aLabel3Href.length-1);
  }

  if(aLabel4Href.charAt(aLabel4Href.length-1) == "/"){
      aLabel4Href = aLabel4Href.substring(0,aLabel4Href.length-1);
  }
  if(aLabel5Href.charAt(aLabel5Href.length-1) == "/"){
      aLabel5Href = aLabel5Href.substring(0,aLabel5Href.length-1);
  }

  //首页高亮
  if(location.pathname.toLowerCase().indexOf("/index/bj") == 0 || location.pathname.toLowerCase().indexOf("/index/bj") == 1 || location.pathname.toLowerCase().indexOf("//bj_head/") == 0 || location.pathname.toLowerCase().indexOf("//bj_head/") == 1 || location.pathname.toLowerCase().indexOf("/bj_head/") == 0 || location.pathname.toLowerCase().indexOf("/bj_head/") == 1){
     $("#topA0").addClass("active");
	 $("#head2 .nav li").find("a[name=topA0]").addClass("active");
     rv = true;
  }
  //其它页面
  else if (thisURL == aLabel2Href) {
	  $("#topA1").addClass("active");
      rv = true;
  }
  else if(thisURL == aLabel3Href) {
	  $("#topA2").addClass("active");
      rv = true;
  }
  else if (thisURL == aLabel4Href) {
	  $("#topA3").addClass("active");
      rv = true;
  }
  else if (thisURL == aLabel5Href || thisUPage == "support" || thisUPage == "roaming" || thisUPage == "fee" || thisUPage == "4G" || thisUPage == "iphone"){
    $("#topA4").addClass("active");
    rv = true;
  }
  return rv;
}

//提交搜索框数据
function chk_frm_search(hs,pobj, cobj) {
  if ($("#skeywords").val() == '' || $("#skeywords").val().length < 1) {
    $("#skeywords").focus();
    return false;
  }

  var qt = $("#skeywords").val(); 
  var url = "";
  if (hs && qt == hs.defaultWord.wordName) {
  	url = !!secondCitylink(hs.defaultWord.wordUrl,cobj.city_id) ? secondCitylink(hs.defaultWord.wordUrl,cobj.city_id) : '';
  } else {
  	url = "http://search.10086.cn/web/search?content="+encodeURIComponent(qt)+"&areacode=bj"+"&WT.ac=key_search_030_"+encodeURIComponent(qt);
  }
  if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_SS_SEARCH_'+qt+'_'+ cobj.prov_id + "|" + cobj.city_id +'');};
  if(!!url){
     window.open(url);
  }
  return false;
}

//非统一认证登录处理
function normalLogin1(result,pobj,cobj) {
	   var is_login = getCookie("is_login");
       if(is_login && typeof result !== 'undefined' && result){
		  var userName = result.result.data.user;
		  var authUserId = result.result.data.authUserId;
		  var ifsdMessage = parseInt(result.result.data.validStatus);
		  var phoneNumber = "";
		  var phoneNumber_yc = "";
		  var if_pnumber = isPhoneNumberPd(userName);
		  if(if_pnumber == 0){
		    phoneNumber = !!ifsdMessage ? userName : userName.replace(userName.substring(3,7), "****");
			phoneNumber_yc = userName.replace(userName.substring(3,7), "****");
		  }
		  else{
		    phoneNumber = userName.length > 11 ? userName.substring(0, 10) + '...' : userName;
		  }
		  $("<span>").addClass("s2").html(phoneNumber).appendTo($divTopLeft1);
		  
		  //显示验证
		 if(if_pnumber == 0){
		   $("<div>").addClass("eyebox").attr("id","ntheadcheckyz").appendTo($divTopLeft1);
		   var eyestatus = !!ifsdMessage ? "eyeshow" : "eyeclose";
		   var eyeopen = !!ifsdMessage ? "o" : "c";
		   var eyeimgs = !!ifsdMessage ? "eyeing.png" : "eyed.png";
		   $('#ntheadcheckyz').append('<a href="javascript:;" id='+eyestatus+' oc='+eyeopen+'><img class="eye" src="/'+pobj.abbr+'_head/images/index5/'+eyeimgs+'"/></a>');
		   
		   if(!ifsdMessage){
			    $("<div>").addClass("alertBox").attr("id","ntheadyzbox").appendTo($("#ntheadcheckyz"));
				$('#ntheadyzbox').append('<h4><img src="/'+pobj.abbr+'_head/images/index5/eyeSafe.png"/>身份验证</h4><p class="txt">为保证您的账号安全，需要对您的手机号<span>'+phoneNumber+'</span>进行验证。</p><span class="txt">短信验证码：</span><form class="form clearfix"><input type="text" id="yz_input" class="inputxt"/><input type="button" id="yz_get" value="获取验证码" class="btntxt"/></form><span class="txt txtR" id="yz_alert" style="display:none;"></span><div class="buttons clearfix"><button class="sure">认证</button><button class="cancel">取消</button></div>');
		   }
		 }
          
		  if(checkProv()){
			  $("<span>").addClass("s3").attr("id","unreadMsg").html("消息 ").appendTo($divTopLeft1);
			  getUnreadMessage(userName,authUserId);
			  $("#unreadMsg").click(function(){
			     if(typeof(_tag)!= "undefined"){_tag.dcsMultiTrack("WT.event","INDEX_TOP_C_UP_MSG_"+cobj.prov_id + "|" + cobj.city_id +"");} 
			     window.open("http://shop.10086.cn/i/index.html?f=mynews");
			  });
		  }
		  
		  $("<a>").addClass("back").html("[退出]").attr("id","logout").attr("href", "#").attr("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_EXIT_"+cobj.prov_id + "|" + cobj.city_id +"');}").appendTo($("#head_lf"));

		  if(if_pnumber == 0 && !!userName && !!phoneNumber_yc){
			  if(!!ifsdMessage){
				 lookPm(userName,phoneNumber_yc);
			  }
			  else{
			     doPm(userName,phoneNumber_yc,cobj);
			  }
		  }
		  updateAuthorityHerf(pobj,cobj);
        }else {
		  $divLogin.append('<a class="login_a">请登录</a><div class="login_box" id="divLoginfcBar"><a href="#" target="_blank">登录移动商城</a><a href="#" target="_blank">登录网上营业厅</a></div>');
		  
		  $("#divLoginfcBar a:eq(0)").attr("onclick","javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_LOGIN_Y_"+cobj.prov_id + "|" + cobj.city_id +"');}");
		  $("#divLoginfcBar a:eq(1)").attr("onclick","javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_LOGIN_W_"+cobj.prov_id + "|" + cobj.city_id +"');}");
          
		  $(".login_a").mouseenter(function () {loginBar_show();});
          $(".login_a").mouseleave(function () {loginBar_hide();});
		  $("#divLoginfcBar").mouseenter(function () {loginBar_show();});
          $("#divLoginfcBar").mouseleave(function () {loginBar_hide();});
		  $(".login_box a").hover(function() {
			  $(this).addClass("cur");
		  }, function() {
			  $(this).removeClass("cur");
		  });
		  updateAuthorityLoginUrl(pobj,cobj);
        }  
}

/*非统一认证登录处理H5版本*/
function normalLoginH5(result,pobj,cobj){
          var is_login = getCookie("is_login");
          if(is_login && typeof result !== 'undefined' && result){
		    var userName1 = result.result.data.user;
			var authUserId1 = result.result.data.authUserId;
			var ifsdMessage1 = parseInt(result.result.data.validStatus);
			var if_pnumber = isPhoneNumberPd(userName1);
			var phoneNumber = "";
			var phoneNumber_yc = "";
			if(if_pnumber == 0){
			    phoneNumber = !!ifsdMessage1 ? userName1 : userName1.replace(userName1.substring(3,7), "****");
				phoneNumber_yc = userName1.replace(userName1.substring(3,7), "****");
			}
			else{
			    phoneNumber = userName1.length > 11 ? userName1.substring(0, 10) + '...' : userName1;
			}
			
			//验证
			if(if_pnumber == 0){
			   if(!ifsdMessage1){
				   var eyestatus = !!ifsdMessage1 ? "eyeshow_m" : "eyeclose_m";
				   var eyeopen = !!ifsdMessage1 ? "o" : "c";
				   var eyeimgs = !!ifsdMessage1 ? "eyeing.png" : "eyed.png";
				   $('#m_dlstatus').append('<a href="javascript:;" id='+eyestatus+' oc='+eyeopen+'><img class="eye" src="/'+pobj.abbr+'_head/images/index5/'+eyeimgs+'"/></a>');
				   if(!ifsdMessage1){
						$("<div>").addClass("alertBox").attr("id","headyzbox_m").appendTo($("#m_dlstatus"));
						$('#headyzbox_m').append('<h4><img src="/'+ pobj.abbr+'_head/images/index5/eyeSafe.png"/>身份验证</h4><p class="txt">为保证您的账号安全，需要对您的手机号<span>'+phoneNumber+'</span>进行验证。</p><span class="txt">短信验证码：</span><form class="form clearfix"><input type="text" id="yz_input_m" class="inputxt"/><input type="button" id="yz_get_m" value="获取验证码" class="btntxt"/></form><span class="txt txtR" id="yz_alert_m" style="display:none;"></span><div class="buttons clearfix"><button class="sure">认证</button><button class="cancel">取消</button></div>');
				   }
			   }
			}
			$("<span>").addClass("s2").html('<font>'+phoneNumber+'</font><a href="#" id="mlogout">退出</a>').appendTo($('#m_dlstatus'));
			
			
			//验证处理
		    if(if_pnumber == 0 && !!userName1 && !!phoneNumber_yc){
			  if(!!ifsdMessage1){
				 lookPm_m(userName1,phoneNumber_yc);
			  }
			  else{
			     doPm_m(userName1,phoneNumber_yc,cobj);
			  }
		    }
			updateAuthorityHerf(pobj,cobj);
          } else{
				$("<a>").addClass("s1").html("登录移动商城").attr("href", "https://login.10086.cn/html/login/login.html?channelID=12002&backUrl=http%3A%2F%2Fshop.10086.cn%2Fmall_" + cobj.prov_id + "_" + cobj.city_id + ".html%3Fforcelogin%3D1").appendTo($('#m_dlstatus'));
          }
}

//页头2样式开始
function renderTopBar21(pobj, cobj) {
	if(!$("#head2") || $("#head2").length<=0){
		$("<div>").attr("id","head2").css("display","none").appendTo("body");
	}
	$("<div>").addClass("head2_1200").attr("id","headtopmain").appendTo($("#head2"));
	var tophead_logo = '<a href="http://www.10086.cn/" onclick="javascript:if(typeof(_tag)!= \'undefined\'){_tag.dcsMultiTrack(\'WT.event\',\'INDEX_TOP_C_UP_LOGO_'+ cobj.prov_id + '|' + cobj.city_id +'\');}"><img class="logo" alt="中国移动欢迎您"/></a>';
	var tophead_list = '<ul class="nav">';
	tophead_list += '<li name="navTop0"><a class="active" name="topA0" target="_blank" href="http://www.10086.cn/" onclick="javascript:if(typeof(_tag)!= \'undefined\'){_tag.dcsMultiTrack(\'WT.event\',\'INDEX_TOP_C_DH_SY_'+ cobj.prov_id + '|' + cobj.city_id +'\');}">首页</a></li>';
	tophead_list += '<li name="navTop1"><a name="topA1" target="_blank" onclick="javascript:if(typeof(_tag)!= \'undefined\'){_tag.dcsMultiTrack(\'WT.event\',\'INDEX_TOP_C_DH_SHOP_'+ cobj.prov_id + '|' + cobj.city_id +'\');}">移动商城</a></li>';
	tophead_list += '<li name="navTop2" style="display:none;" id="headNetShop"><a name="topA2" target="_blank" onclick="javascript:if(typeof(_tag)!= \'undefined\'){_tag.dcsMultiTrack(\'WT.event\',\'INDEX_TOP_C_DH_SERVICE_'+ cobj.prov_id + '|' + cobj.city_id +'\');}">网上营业厅</a></li>';
	tophead_list += '<li name="navTop3"><a name="topA3" target="_blank" onclick="javascript:if(typeof(_tag)!= \'undefined\'){_tag.dcsMultiTrack(\'WT.event\',\'INDEX_TOP_C_DH_MY_'+ cobj.prov_id + '|' + cobj.city_id +'\');}">我的移动</a></li>';
	tophead_list += '<li name="navTop4"><a name="topA4" target="_blank" onclick="javascript:if(typeof(_tag)!= \'undefined\'){_tag.dcsMultiTrack(\'WT.event\',\'INDEX_TOP_C_DH_SUPPORT_'+ cobj.prov_id + '|' + cobj.city_id +'\');}">服务中心</a></li>';
	tophead_list += '</ul>';
	var tophead_search = '<div class="head2_search"><div class="searchbar input-group"><input value="" name="skeywords" autocomplete="off" disableautocomplete class="form-control" type="form-control"  title="关键字必须至少有一个汉字或英文字母" name="qt" maxlength="20"/><span class="input-group-btn"><input name="searchbtn" type="submit" class="btn" value=""></span></div></div>';
	$('#headtopmain').append(tophead_logo+tophead_list+tophead_search);
}


function updateMyMobile2(hn,pobj, cobj) {
  var navObj = $("#head2 .nav")
  if (hn && hn.navUrl4) {
	  $(navObj).find("a[name=topA2]").attr("href", !!secondCitylink(hn.navUrl4,cobj.city_id) ? secondCitylink(hn.navUrl4,cobj.city_id) : "javascript:;");
	  $(navObj).find("a[name=topA2]").html(hn.navName4);
  }
  if(hn && hn.navUrl3) {
    var shopurl = !!secondCitylink(hn.navUrl3,cobj.city_id) ? secondCitylink(hn.navUrl3,cobj.city_id) : "javascript:;";
    shopurl = shopurl.replace(new RegExp("\\{prov\\}","g"),"" + cobj.prov_id);
    shopurl = shopurl.replace(new RegExp("\\{city\\}","g"),"" + cobj.city_id);
    $(navObj).find("a[name=topA1]").attr("href", shopurl);
    $(navObj).find("a[name=topA1]").html(hn.navName3)
   }
}

function updateOnlineBusiness2(hn,pobj,cobj) {
   if(hn && hn.navUrl5) {
	if(judgeMT){
	        $("#head2 .nav a[name=topA3]").attr("href", "http://touch.10086.cn/");
	  } else{ 
			$("#head2 .nav a[name=topA3]").attr("href", !!secondCitylink(hn.navUrl5,cobj.city_id) ? secondCitylink(hn.navUrl5,cobj.city_id) : "javascript:;"); 
	  }
	  $("#head2 .nav a[name=topA3]").html(hn.navName5);
	}
}

function updateServiceAndSupport2(hn,pobj,cobj) {
	if (hn && hn.navUrl6) {
		$("#head2 .nav a[name=topA4]").attr("href", !!secondCitylink(hn.navUrl6,cobj.city_id) ? secondCitylink(hn.navUrl6,cobj.city_id) : "javascript:;");
		$("#head2 .nav a[name=topA4]").html(hn.navName6);
	}
}

function updateIndex2(hn,pobj,cobj) {
	if (hn && hn.navUrl1) {
		$(".allService:eq(0)").attr("href", !!secondCitylink(hn.navUrl1,cobj.city_id) ? secondCitylink(hn.navUrl1,cobj.city_id) : "javascript:;");
		$(".allService:eq(0)").html(hn.navName1);
		if($(".allService:eq(0)").attr("href") != "javascript:;"){ 
		  $(".allService:eq(0)").css("cursor","pointer");
		}
		$(".allService:eq(0)").click(function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_DH_CPFW_'+cobj.prov_id + '|' + cobj.city_id);}});
	}
	if (hn && hn.navUrl2) {
		$("#head2 .nav a[name=topA0]").attr("href", !!secondCitylink(hn.navUrl2,cobj.city_id) ? secondCitylink(hn.navUrl2,cobj.city_id) : "javascript:;");
		$("#head2 .nav a[name=topA0]").html(hn.navName2);
	}
}

/*更新首页置顶页头的搜索栏*/
function updateSearchForm2(hs,pobj, cobj) {
  if (hs && hs.defaultWord !== 'undefined' && hs.defaultWord.wordName !== 'undefined') {
		  if(hs.defaultWord.wordName.length>0){
		      var searchKeyWordName = hs.defaultWord.wordName;
			  $('#head2 input[name="skeywords"]').val(searchKeyWordName);
			  $('#head2 input[name="skeywords"]').focus(function(){
			     if(this.value == searchKeyWordName){this.value=""} 
				 this.style.color = "#666666";
			  });
			  $('#head2 input[name="skeywords"]').blur(function(){
			     if(this.value == ""){this.value=searchKeyWordName}
				 this.style.color = "#666666";
			  });
		}
  }
  
  $('#head2 input[name="searchbtn"]').click(function(){chk_frm_search2(hs,pobj, cobj);});
	  $('#head2 input[name="skeywords"]').keypress(function (e) {
	  if (e.keyCode == 13) {
		  chk_frm_search2(hs,pobj, cobj);
	  }
  });
}

function chk_frm_search2(hs,pobj,cobj) {
  var skeywordsObj = $('#head2 input[name="skeywords"]');
  if ($(skeywordsObj).val() == '' || $(skeywordsObj).val().length < 1) {
    $(skeywordsObj).focus();
    return false;
  }
  var qt = $(skeywordsObj).val(); 
  var url = ""; 
  if (hs && qt == hs.defaultWord.wordUrl) {
  	url = !!secondCitylink(hs.defaultWord.wordUrl,cobj.city_id) ? secondCitylink(hs.defaultWord.wordUrl,cobj.city_id) : '';
  } else {
  	url = "http://search.10086.cn/web/search?content="+encodeURIComponent(qt)+"&areacode=bj"+"&WT.ac=key_search_030_"+encodeURIComponent(qt);
  }
  if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_SS_SEARCH_'+qt+'_'+ cobj.prov_id + "|" + cobj.city_id +'');};
  if(!!url){
     window.open(url);
  }
  return false;
}

//页头卷帘
function autoAdd(pobj,cobj,topAds) {
  var header = document.getElementById("bj_head");
  var adContainer = $("<div class=\"ad1200 clearfix\" id=\"ad1200\" style=\"height:0px;\"></div>");

  if($("#topbar").length>0){ 
    $("#topbar").after(adContainer);
  }
  else{
	$("div[name='head']").prepend(adContainer);
  }
  
 if (topAds) {
  if($('#topHead').length>0){
		if($('#topHead').css('background-image').length>0 && $('#topHead').css('background-image') != 'none'){ 
		 $('#topHead').css({'background-position':'center 30px'}); 
		}
  }
  
  var adContainer = document.getElementById('ad1200');
  var top_bgads = document.createElement("a");
  $(adContainer).css("height","450px").append(top_bgads);
  $(top_bgads).append('<img src="" width="1200" height="450"/>');

  //窄图
  var top_smallads = document.createElement("a");
  $(adContainer).append(top_smallads);
  $(top_smallads).append('<img src="" width="1200" height="80" style="display:none;"/>');
  $(adContainer).append('<img src="" class="shut1200" name="shut"/>');
  $(adContainer).append('<img src="" class="shut1200" name="shut" style="display:none;"/>');
 
  
	  var bigImgs = top_bgads.getElementsByTagName("IMG");
	  bigImgs[0].src = "/bj_head/"+topAds.bigImg;
	  bigImgs[0].alt = topAds.adName;
	  top_bgads.href = !!secondCitylink(topAds.bigImgUrl,cobj.city_id) ? secondCitylink(topAds.bigImgUrl,cobj.city_id) : 'javascript:;';
	  if(typeof(topAds.o_id) != 'undefined' && typeof(topAds.id2) != 'undefined' && !!topAds.o_id && !!topAds.id2){
	     top_bgads.setAttribute("onclick", "javascript:if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('dcsuri','/nopv.gif','WT.event','" + topAds.o_id + "_" + topAds.id2 + "');}");  
	  }
	  else{
	     top_bgads.setAttribute("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_JL_B_"+ cobj.prov_id + "|" + cobj.city_id +"');}");
	  }
	  
	  var smallImgs = top_smallads.getElementsByTagName("IMG");
	  smallImgs[0].src = "/bj_head/"+topAds.smallImg;
	  smallImgs[0].alt = topAds.adName;
	  top_smallads.href = !!secondCitylink(topAds.smallImgUrl,cobj.city_id) ? secondCitylink(topAds.smallImgUrl,cobj.city_id) : 'javascript:;';
	  if(typeof(topAds.o_id) != 'undefined' && typeof(topAds.id2) != 'undefined' && !!topAds.o_id && !!topAds.id2){ 
		 top_smallads.setAttribute("onclick", "javascript:if(typeof(_tag)!='undefined'){_tag.dcsMultiTrack('dcsuri','/nopv.gif','WT.event','" + topAds.o_id + "_" + topAds.id2 + "');}");
	  }
	  else{
	     top_smallads.setAttribute("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_JL_S_"+ cobj.prov_id + "|" + cobj.city_id +"');}");
	  }
	  
	  //关闭按钮
	  var adShut = document.getElementsByName('shut');
	  adShut[0].src = "/bj_head/images/index5/jl_close.jpg";
	  adShut[1].src = "/bj_head/images/index5/jl_close.jpg";
	  adShut[1].style.width = "45px";
 }
}

/*卷帘*/
function showAds(topAds) {
    if (topAds) {
			var ad1200 = document.getElementById('ad1200');
			var adShut = document.getElementsByName('shut');
			var ad1200Img = ad1200.getElementsByTagName('img');
			var timer1 = null;
			ad1200Img[1].style.display = 'none';
			timer1 = setTimeout(function(){
				ad1200.style.height = '80px';
				ad1200Img[0].style.display = 'none';
				ad1200Img[1].style.display = 'block';
				adShut[0].style.display = 'none';
		        adShut[1].style.display = 'block';
				
			}, 5000);
			
		adShut[0].onclick=function(){
		   clearTimeout(timer1);
		   ad1200.style.height = '80px';
		   ad1200Img[0].style.display = 'none';
		   ad1200Img[1].style.display = 'block';
		   adShut[0].style.display = 'none';
		   adShut[1].style.display = 'block';
		}
		
		adShut[1].onclick=function(){
		   ad1200.style.display = 'none';	
		   ad1200Img[1].style.display = 'none';
		   adShut[1].style.display = 'none';
		   if($('#topHead').length>0){
		      if($('#topHead').css('background-image').length>0 && $('#topHead').css('background-image') != 'none'){ 
		        $('#topHead').css({'background-position':'center -50px'});
			  }
		   }
		}
		
	}
}

/*个人信息展示暂时关闭*/
/*
function queryCustInfo() {
	var curtime = (new Date).getTime(); // 当前时间
	var url = this_protocol+"www1.10086.cn/web-Center/interfaceService/custInfoQry.do";
	var secret = getSecret();
	var version = getVersion();
	var timestamp = curtime;
	var digest = getDigest(curtime,secret);
	var conversationId = getConversationId(curtime);
	var channelId = getChannelId2();
	
	var json  = {};
	json["serviceName"] = "if007_query_user_info";
	
	var header = {};
	header["version"] = version;
	header["timestamp"] = timestamp;
	header["digest"] = digest;
	header["conversationId"] = conversationId;
	//如果是IE8,IE9,往header中写入参数ie89和key4IE89
	if (typeof(ie89) != "undefined") {
		header["ie89"] = ie89;
		header["key4IE89"] = key4IE89;
	}
	json["header"] = header;
	
	var data = {};
	data["channelId"] = channelId;
	json["data"] = data;
	
	$.ajax({
		type : "POST",
		url : url,
		//data直接传入json格式字符串
		data : JSON.stringify(json),
		//contentType指定为text/plain
		contentType : 'text/plain',
		async : true,
		xhrFields:{
			  withCredentials:true
			},
        crossDomain:true,
		success : function(rs) {
			if (!!rs) {
				var result = JSON.parse(rs);
				var responseCode = result.result.response_code;
				if (responseCode == '0000') {
					var starLevel = result.result.data.userInfo.starLevel || '';
					var phoneNumber = result.result.data.phone || '';
					$("#welcome").html("欢迎您 " + phoneNumber);
					starLevelName = getStarLevelName(starLevel);
					$("#starLevel").html(starLevelName);
				}
				else if (responseCode == '3018') {
				   logout('');
				}
			}
		},
		error : function() { 
		   $('.loginbox02').css('display','none');
		   $('.head_navbtn01').unbind('mouseenter mouseleave');
		   }
	});
}

function getStarLevelName(starLevel) {
	var starLevelName = "";
	if (starLevel == 1) {
		starLevelName = "1星会员";
	} else if (starLevel == 2) {
		starLevelName = "2星会员";
	} else if (starLevel == 3) {
		starLevelName = "3星会员";
	} else if (starLevel == 4) {
		starLevelName = "4星会员";
	} else if (starLevel == 5) {
		starLevelName = "5星会员";
	} else if (starLevel == 6) {
		starLevelName = "5星金会员";
	} else if (starLevel == 7) {
		starLevelName = "5星钻会员";
	}
	return starLevelName;
}

function queryRealFee() {
	var curtime = (new Date).getTime(); // 当前时间
	var url = this_protocol+"www1.10086.cn/web-Center/interfaceService/realFeeQry.do";
	var secret = getSecret();
	var version = getVersion();
	var timestamp = curtime;
	var digest = getDigest(curtime,secret);
	var conversationId = getConversationId(curtime);
	var channelId = getChannelId2();
	
	var json  = {};
	json["serviceName"] = "if007_query_fee";
	
	var header = {};
	header["version"] = version;
	header["timestamp"] = timestamp;
	header["digest"] = digest;
	header["conversationId"] = conversationId;
	//如果是IE8,IE9,往header中写入参数ie89和key4IE89
	if (typeof(ie89) != "undefined") {
		header["ie89"] = ie89;
		header["key4IE89"] = key4IE89;
	}
	json["header"] = header;
	
	var data = {};
	data["channelId"] = channelId;
	json["data"] = data;
	
	$.ajax({
		type : "POST",
		url : url,
		//data直接传入json格式字符串
		data : JSON.stringify(json),
		//contentType指定为text/plain
		contentType : 'text/plain',
		async : true,
		xhrFields:{
			  withCredentials:true
			},
        crossDomain:true,
		success : function(rs) {
			if (!!rs) {
				var result = JSON.parse(rs);
				var responseCode = result.result.response_code;
				if (responseCode == '0000') {
					var realFee = result.result.data.curFee;
					$("#fee").html(realFee + " <span>元</span>");
				}
				else if (responseCode == '3018') {
				   logout('');
				}
			}
		},
		error : function() {
		   $('.loginbox02').css('display','none');
		   $('.head_navbtn01').unbind('mouseenter mouseleave');
		}
	});
}

function queryPoint() {
	var curtime = (new Date).getTime(); // 当前时间
	var url = this_protocol+"www1.10086.cn/web-Center/interfaceService/pointQry.do";
	var secret = getSecret();
	var version = getVersion();
	var timestamp = curtime;
	var digest = getDigest(curtime,secret);
	var conversationId = getConversationId(curtime);
	var channelId = getChannelId2();
	
	var json  = {};
	json["serviceName"] = "if007_query_point";
	
	var header = {};
	header["version"] = version;
	header["timestamp"] = timestamp;
	header["digest"] = digest;
	header["conversationId"] = conversationId;
	//如果是IE8,IE9,往header中写入参数ie89和key4IE89
	if (typeof(ie89) != "undefined") {
		header["ie89"] = ie89;
		header["key4IE89"] = key4IE89;
	}
	json["header"] = header;
	
	var data = {};
	data["channelId"] = channelId;
	json["data"] = data;
	
	$.ajax({
		type : "POST",
		url : url,
		//data直接传入json格式字符串
		data : JSON.stringify(json),
		//contentType指定为text/plain
		contentType : 'text/plain',
		async : true,
		xhrFields:{
			  withCredentials:true
			},
        crossDomain:true,
		success : function(rs) {
			if (!!rs) {
				var result = JSON.parse(rs);
				var responseCode = result.result.response_code;
				if (responseCode == '0000') {
					var point = result.result.data.pointValue;
					$("#point").html(point + " <span>分</span>");
				}
				else if (responseCode == '3018') {
				   logout('');
				}
			}
		},
		error : function() {
		   $('.loginbox02').css('display','none');
		   $('.head_navbtn01').unbind('mouseenter mouseleave');
		}
	});
}

function queryPlanRemain() {
	var curtime = (new Date).getTime(); // 当前时间
	var url = this_protocol+"www1.10086.cn/web-Center/interfaceService/planRamainQry.do";
	var secret = getSecret();
	var version = getVersion();
	var timestamp = curtime;
	var digest = getDigest(curtime,secret);
	var conversationId = getConversationId(curtime);
	var channelId = getChannelId2();
	
	var json  = {};
	json["serviceName"] = "if007_query_package_margin";
	
	var header = {};
	header["version"] = version;
	header["timestamp"] = timestamp;
	header["digest"] = digest;
	header["conversationId"] = conversationId;
	//如果是IE8,IE9,往header中写入参数ie89和key4IE89
	if (typeof(ie89) != "undefined") {
		header["ie89"] = ie89;
		header["key4IE89"] = key4IE89;
	}
	json["header"] = header;
	
	var data = {};
	data["channelId"] = channelId;
	json["data"] = data;
	
	$.ajax({
		type : "POST",
		url : url,
		//data直接传入json格式字符串
		data : JSON.stringify(json),
		//contentType指定为text/plain
		contentType : 'text/plain',
		async : true,
		xhrFields:{
			  withCredentials:true
			},
        crossDomain:true,
		success : function(rs) {
			if (!!rs) {
				var result = JSON.parse(rs);
				var responseCode = result.result.response_code;
				if (responseCode == '0000') {
					var planRemains = result.result.data.planRemain;
					var totalFlow = getTotalFlow(planRemains);
					$("#flow").html(totalFlow + " <span>M</span>");
					
					if (!!planRemains && !!planRemains.length) {
						for (var i in planRemains) {
							var plan = planRemains[i];
							var planName = plan.planName;
							var planName_h3 = $("<h3></h3>");
							planName_h3.addClass("dl1_h");
							planName_h3.html(planName);
							$(".load").before(planName_h3);
							
							var resourceInfos = plan.resourceInfo;
							if (!!resourceInfos && !!resourceInfos.length) {
								for (var j in resourceInfos) {
									var resource = resourceInfos[j];
									var secResourceInfos = resource.secResourceInfo;
									if (!!secResourceInfos && !!secResourceInfos.length) {
										for (var k in secResourceInfos) {
											var secResource = secResourceInfos[k];
											var secResourceName = secResource.secResourceName;
											var usedRes = secResource.usedRes * 1;
											var totalRes = secResource.totalRes * 1;
											var remainRes = secResource.remainRes * 1;
											var unit = secResource.unit;
											var unitName = "";
											if (unit == '01') {
												unitName = "分钟";
											} else if (unit == '02') {
												unitName = "条";
											} else if (unit == '03') {
												unitName = "M";
												totalRes = totalRes / 1024;
												totalRes = totalRes.toFixed(0);
												usedRes = usedRes / 1024;
												usedRes = usedRes.toFixed(0);
												remainRes = remainRes / 1024;
												remainRes = remainRes.toFixed(0);
											} else if (unit == '04') {
												unitName = "M";
											} else if (unit == '05') {
												unitName = "G";
											}
											var percent = usedRes * 100 / totalRes;
											
											var loginbox02_range = $("<div></div>");
											loginbox02_range.addClass("loginbox02_range");
											$(".load").before(loginbox02_range);
											
											var range = $("<div></div>");
											range.addClass("range");
											range.addClass("clearfix");
											loginbox02_range.append(range);
											
											var span = $("<span></span>");
											span.css("width", percent + "%");
											range.append(span);
											
											var p = $("<p></p>");
											p.append(secResourceName + "剩余 ");
											loginbox02_range.append(p);
											
											var blue_span = $("<span></span>");
											blue_span.addClass("blue");
											blue_span.html(remainRes + unitName);
											p.append(blue_span);
											
											var grey_span = $("<span></span>");
											grey_span.addClass("grey");
											grey_span.html("/" + totalRes + unitName);
											p.append(grey_span);
										}
									}
								}
							}
						}
					}
				}
				else if (responseCode == '3018') {
				   logout('');
				}
			}
		},
		error : function() {
		  $('.loginbox02').css('display','none');
		  $('.head_navbtn01').unbind('mouseenter mouseleave');
		}
	});
}

function getTotalFlow(planRemains) {
	var total = 0;
	if (!!planRemains && !!planRemains.length) {
		for (var i in planRemains) {
			var plan = planRemains[i];
			var resourceInfos = plan.resourceInfo;
			if (!!resourceInfos && !!resourceInfos.length) {
				for (var j in resourceInfos) {
					var resource = resourceInfos[j];
					if (resource.resourceCode == '04') {
						var secResourceInfos = resource.secResourceInfo;
						if (!!secResourceInfos && !!secResourceInfos.length) {
							for (var k in secResourceInfos) {
								var secResource = secResourceInfos[k];
								var remainRes = secResource.remainRes;
								var unit = secResource.unit;
								if (unit == '03') {
									var r = (remainRes * 1) / 1024;
									total += (r.toFixed(0) * 1);
								} else if (unit == '04') {
									total += ((remainRes * 1).toFixed(0)*1);
								} else if (unit == '05') {
									total += remainRes * 1024;
								}
							}
						}
					}
				}
			}
		}
	}
	return total;
}
*/
/*
function drawPersoninfor1(userName1,pobj,cobj){ 
// 登录弹出层
if(location.pathname.toLowerCase().indexOf("/index/bj") == 0 || location.pathname.toLowerCase().indexOf("/index/bj") == 1 || location.pathname.toLowerCase().indexOf("//bj_head/") == 0 || location.pathname.toLowerCase().indexOf("//bj_head/") == 1 || location.pathname.toLowerCase().indexOf("/bj_head/") == 0 || location.pathname.toLowerCase().indexOf("/bj_head/") == 1){
  var headNavbtn01 = $("<div></div>");
  headNavbtn01.addClass("head_navbtn");
  headNavbtn01.addClass("head_navbtn01");
  //隐藏登陆口
  //headNavbtn01.css("display","none");
  //var loginName = getCookie("loginName");
  if (!userName1) {//用户未登录
	  if (pobj.abbr == "gd"){
		  //非统一认证登录  
		  var login_a = $("<a></a>");
		  login_a.attr("href", "javascript:;");
		  login_a.addClass("loginbtn01");
		  login_a.html("登录");
		  headNavbtn01.append(login_a);
		  
		  var loginbox01 = $("<div></div>");
		  loginbox01.addClass("loginbox01");
		  headNavbtn01.append(loginbox01);
		  
		  var login_shop_a = $("<a></a>");
		  login_shop_a.attr("href", "#");
		  login_shop_a.attr("target", "_blank");
		  login_shop_a.attr("onclick","javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_FZ_LOGIN_Y_"+ cobj.prov_id + "|" + cobj.city_id +"');}");
		  //login_shop_a.addClass("cur");
		  login_shop_a.html("登录移动商城");
		  loginbox01.append(login_shop_a);
		  
		  var login_yyt_a = $("<a></a>");
		  login_yyt_a.attr("href", "#");
		  login_yyt_a.attr("target", "_blank");
		  login_yyt_a.attr("onclick","javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_FZ_LOGIN_W_"+ cobj.prov_id + "|" + cobj.city_id +"');}");
		  login_yyt_a.html("登录网上营业厅");
		  loginbox01.append(login_yyt_a);
		  
		  $divHeadNavbar1.append(headNavbtn01);
		  
		  $(".head_navbtn01").hover(function() {
			  $('.loginbtn01').css("border-bottom","0px");
			  $('.loginbox01').show();
		  }, function() {
			  $('.loginbtn01').css("border-bottom","1px solid #dadada");
			  $('.loginbox01').hide();
		  });
		  
		  $(".loginbox01 a").hover(function() {
			  $(this).addClass("cur");
		  }, function() {
			  $(this).removeClass("cur");
		  });
	  } else {//统一认证登录
		  //TODO:统一认证登录样式
		  var channelId = getAuthChannelId();
		  var backUrl = window.location.href;
		  
		  var login_a = $("<a></a>");
		  login_a.addClass("loginbtn01");
		  login_a.html("登录");
		  login_a.attr("href", "https://login.10086.cn/login.html?channelID=" + channelId + "&backUrl=" + encodeURIComponent(backUrl));
		  login_a.attr("onclick","javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_FZ_LOGIN_T_"+ cobj.prov_id + "|" + cobj.city_id +"');}");
		  headNavbtn01.append(login_a);
		  $divHeadNavbar1.append(headNavbtn01);
		  
		  
	  }      
  } else {//已登录
	  var span = $("<span></span>");
	  span.addClass("loginbtn02");
	  span.append("已登录");
	  var font = $("<font></font>");
	  font.html("&nbsp;|&nbsp;");
	  span.append(font);
	  
	  var logout_a = $("<a></a>");
	  logout_a.attr("href", "#");
	  logout_a.attr("target", "_self");
	  logout_a.attr("href", "javascript:logout('" + pobj.abbr + "')");
	  logout_a.html("退出");
	  logout_a.attr("onclick","javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_FZ_EXIT_"+ cobj.prov_id + "|" + cobj.city_id +"');}");
	  span.append(logout_a);
	  headNavbtn01.append(span);
	  $divHeadNavbar1.append(headNavbtn01);
	  
	  var loginbox02 = $("<div></div>");
	  loginbox02.addClass("loginbox02");
	  headNavbtn01.append(loginbox02);
	  
	  var dl = $("<dl></dl>");
	  dl.addClass("dl1");
	  loginbox02.append(dl);
	  
	  var dt = $("<dt></dt>");
	  dl.append(dt);
	  
	  var img = $("<img></img>");
	  img.attr("src", "/"+ pobj.abbr +"_head/images/index5/ad02.jpg");
	  img.width(60);
	  img.height(60);
	  dt.append(img);
	  
	  var dd = $("<dd></dd>");
	  dl.append(dd);
	  
	  var h3 = $("<h3></h3>");
	  h3.attr("id", "welcome");
	  dd.append(h3);
	  
	  var starLevel_p = $("<p></p>");
	  starLevel_p.attr("id", "starLevel");
	  dd.append(starLevel_p);
	  
	  var dl2 = $("<dl></dl>");
	  dl2.addClass("dl2");
	  loginbox02.append(dl2);
	  
	  var dl2_box_1 = $("<div></div>");
	  dl2_box_1.addClass("dl2_box");
	  dl2.append(dl2_box_1);
	  
	  var fee_h5 = $("<h5></h5>");
	  fee_h5.attr("id", "fee");
	  dl2_box_1.append(fee_h5);
	  
	  var fee_p = $("<p></p>");
	  fee_p.html("话费余额");
	  dl2_box_1.append(fee_p);
	  
	  var dl2_box_2 = $("<div></div>");
	  dl2_box_2.addClass("dl2_box");
	  dl2.append(dl2_box_2);
	  
	  var flow_h5 = $("<h5></h5>");
	  flow_h5.attr("id", "flow");
	  dl2_box_2.append(flow_h5);
	  
	  var flow_p = $("<p></p>");
	  flow_p.html("流量剩余");
	  dl2_box_2.append(flow_p);
	  
	  var dl2_box_3 = $("<div></div>");
	  dl2_box_3.addClass("dl2_box");
	  dl2_box_3.addClass("dl2_box_e");
	  dl2.append(dl2_box_3);
	  
	  var point_h5 = $("<h5></h5>");
	  point_h5.attr("id", "point");
	  dl2_box_3.append(point_h5);
	  
	  var point_p = $("<p></p>");
	  point_p.html("我的积分");
	  dl2_box_3.append(point_p);
	  
	  var plan_h3 = $("<h3></h3>");
	  plan_h3.addClass("dl1_h");
	  plan_h3.attr("id", "planName");
	  loginbox02.append(plan_h3);
	  
	  var charge_a = $("<a></a>");
	  charge_a.addClass("load");
	  charge_a.attr("href", "#");
	  charge_a.attr("target", "_blank");
	  charge_a.attr("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','NDEX_TOP_C_FZ_TOPUP_"+cobj.prov_id + "|" + cobj.city_id+"');}");
	  charge_a.html("立刻充值");
	  loginbox02.append(charge_a);
	    
	  $(".head_navbtn01").hover(function() {
		  $('.loginbtn02').css("border-bottom","0px");
		  $('.loginbox02').show();
	  }, function() {
		  $('.loginbtn02').css("border-bottom","1px solid #dadada");
		  $('.loginbox02').hide();
	  });
	  
	  
  }
}
}
*/

//卷帘触点IOP处理
function checkJlIsIop(pobj,cobj,jl_data){	
	var get_xt_Time = get_xtTime_Jl();
	var xt_Time = !!get_xt_Time ? get_xt_Time : new Date().getTime(); 
	
	var this_data_cLocation = null;
	var this_data = null;
	var new_data = [];
	var new_data_jz = [];
	
	this_data = jl_data.cData.list;
    this_data_cLocation = jl_data.cLocation;	
	
	if(!!this_data && this_data.length>0){
		for(var i=0;i<this_data.length;i++){
		  if(typeof(this_data[i].iop_flag)!= 'undefined' && this_data[i].iop_flag == '0'  && !!pd_downtime_jl(this_data[i].down_time,xt_Time)){
			  new_data_jz.push(this_data[i]);
		  }
		  else if(!!pd_downtime_jl(this_data[i].down_time,xt_Time)){
			  new_data.push(this_data[i]);
		  }
	   }
	   
	   if(new_data_jz.length>0){ 
		  //处理精准营销
		  var saleadv_data_jz = new_data_jz; 
		  do_specialSaleJl(this_data_cLocation,saleadv_data_jz,pobj,cobj,new_data); 
	   }
	   else if(new_data.length>0){
		  //处理广告和普通营销显示	
		  do_noJzIopJl(new_data,pobj,cobj);	  
	   }
   }
}

//分析处理精准营销
function do_specialSaleJl(l,d,pobj,cobj,p){  
            var newObject = {};
			var hasLogin = false;
			var usName;
			var channelId = getAuthChannelId();
			var isLogin = getCookie("is_login");
			if (isLogin == true || isLogin == "true") { 
				hasLogin = false;
				var curtime = (new Date).getTime(); 
				var url = this_protocol+"www1.10086.cn/web-Center/authCenter/checkUserLogin.do";
				var secret = getSecret();
				var version = getVersion();
				var timestamp = curtime;
				var digest = getDigest(curtime,secret);
				var conversationId = getConversationId(curtime);
				
				var json  = {};
				json["serviceName"] = "";
				
				var header = {};
				header["version"] = version;
				header["timestamp"] = timestamp;
				header["digest"] = digest;
				header["conversationId"] = conversationId;
				json["header"] = header;
				
				var data = {};
				data["channelId"] = channelId;
				json["data"] = data;
				
				$.ajax({
					type : "POST",
					url : url,
					data : {requestJson : JSON.stringify(json)},
					async : true,
					xhrFields:{
					  withCredentials:true
					},
					crossDomain:true,
					success : function(rs) {
						if (!!rs) {
							var result = JSON.parse(rs);
							var responseCode = result.result.response_code;
							if (responseCode == '0000') {
								var f = result.result.data.isLogin;
								if (!!f) {  
									hasLogin = true;
									usName = result.result.data.user;						
										if (!!hasLogin && !!usName) {
										   if (0 == isPhoneNumberPd(usName)){ 
											   var servNum = usName;
											   var c_id = l.iopChannelId;
											   var o_id = l.iopOperationPositionId;  
											   //处理IOP提交JSON获取IOP需求ID 
												var urliop = "/web-Center/iopService/queryIOPActivity.do";
												//var urliop = "http://www.10086.cn/web-Center/iopService/queryIOPActivity.do";
												var secret = getSecret2();
												var version = getVersion();
												var timestamp = curtime;
												var digest = getDigest(curtime,secret);
												var conversationId = getConversationId(curtime);
												
												var json  = {};
												json["serviceName"] = "iopL1ActivityQuery";
												
												var header = {};
												header["version"] = version;
												header["timestamp"] = timestamp;
												header["digest"] = digest;
												header["conversationId"] = conversationId;
												json["header"] = header;
												
												var data = {};
												data["iopChannelId"] = c_id;
												data["iopOperationPositionId"] = o_id;
												//data["channelId"] = '0001';
												data["servNum"] = servNum;
												json["data"] = data; 
												$.ajax({
													type : "POST",
													url : urliop,
													data : JSON.stringify(json),
													async : true,
					                                timeout: 2000, //只有异步才起作用
													/*xhrFields:{    //-----现网删去跨域
													  withCredentials:true
													},
													crossDomain:true,*/
													contentType : "text/plain",
													success : function(rs) { 
														if (!!rs) {
															var res = JSON.parse(rs); 
															var responseCode = res.result.responseCode;
															if (responseCode == '0000') { 
																var productInfo = res.result.productInfo;
																if (!!productInfo) {
																	var productId = productInfo.products; 
																	if (!!productId){
																	     var if_hasAdv = false;
																		 for (var i in d) {
																			 if(productId == d[i].iop_product_id){
																			    if_hasAdv = true;
																				var content = d[i];	
																				var id2 = content.sub_activity_id;
																				//处理插入IOP广告
																				newObject.adName = content.name;
																				newObject.bigImg = content.bigImageSrc;
																				newObject.bigImgUrl = content.bigImageUrl;
																				newObject.smallImg = content.smallImageSrc;
																				newObject.smallImgUrl = content.smallImageUrl;
																				newObject.o_id = o_id;
																				newObject.id2 = id2;
																				autoAdd(pobj,cobj,newObject);
	                                                                            showAds(newObject); 
																				  break;
																			 }
																		 }
																		 if(!if_hasAdv){ 
																			  do_noJzIopJl(p,pobj,cobj);
																		 }
																	  }
																	  else{
																		  do_noJzIopJl(p,pobj,cobj);
																	  }
																}
																else{
																    do_noJzIopJl(p,pobj,cobj);
															    }
															}
															else{
															   do_noJzIopJl(p,pobj,cobj);
														    }
														}
														else{
														   do_noJzIopJl(p,pobj,cobj);
													    }
													},
													error : function() { 
														do_noJzIopJl(p,pobj,cobj);
													}
											   });
											}
											else{
												do_noJzIopJl(p,pobj,cobj);
											}
										}
										else{
											do_noJzIopJl(p,pobj,cobj);
										}
									}
									else{
									    do_noJzIopJl(p,pobj,cobj);
								    }
							  }
							  else{
								  do_noJzIopJl(p,pobj,cobj);
							  }
							}
							else{
								do_noJzIopJl(p,pobj,cobj);
							}
					}, 
					error : function() {  
					   do_noJzIopJl(p,pobj,cobj);
					}
				});	
			}
			else{
				do_noJzIopJl(p,pobj,cobj);
			}
			
}

//非精准营销的处理
function do_noJzIopJl(d,pobj,cobj){ 
     if(d.length>0){
		  //处理广告和普通营销显示
          var newObject = {};
		  var saleadv_data = d[0];
		  newObject.adName = saleadv_data.name;
		  newObject.bigImg = saleadv_data.bigImageSrc;
		  newObject.bigImgUrl = saleadv_data.bigImageUrl;
		  newObject.smallImg = saleadv_data.smallImageSrc;
		  newObject.smallImgUrl = saleadv_data.smallImageUrl;
		  autoAdd(pobj,cobj,newObject);
		  showAds(newObject); 
	  }
}

//获取系统时间
function get_xtTime_Jl(){
        var xtTime = null;
        var url = "/web-Center/commonservice/getTime.do";
		//var url = "http://www.10086.cn/web-Center/commonservice/getTime.do";
		$.ajax({
			type : "POST",
			url : url,
			async : false,
			//xhrFields:{withCredentials:true},crossDomain:true,
			success : function(rs) { 
				var result = JSON.parse(rs); 
				if(result.responseCode == "0000"){
					xtTime = result.currentTime;
				}
			}, 
			error : function(XMLHttpRequest, textStatus, errorThrown){
			}
		});
		return xtTime;

}

//判断工单下线时间是否超出
function pd_downtime_jl(t,s){
    var rv = true;
	var end_time = t;
	var cur_time = s;
	//只判断有下线时间的工单，没有则保持已上线
	if(!!end_time && !!cur_time){  
			var d_endTime = new Date(end_time.replace(/-/g,"/"));
			var d_curTime = new Date(cur_time);
			if(d_endTime.getTime() < d_curTime.getTime()){
			   rv = false;
			}
	}
	return rv;
}

$(function(){
	$('.h_icon1').click(function(){ 
	$(this).css('display','none');
	$('.h_list').css('display','block');
	});

	$('.shut2').click(function(){
	  $('.h_icon1').css('display','block');
	  $('.h_list').css('display','none');
	});
	
	if(location.pathname.toLowerCase().indexOf("/index/bj") == 0 || location.pathname.toLowerCase().indexOf("/index/bj") == 1 || location.pathname.toLowerCase().indexOf("//bj_head/") == 0 || location.pathname.toLowerCase().indexOf("//bj_head/") == 1 || location.pathname.toLowerCase().indexOf("/bj_head/") == 0 || location.pathname.toLowerCase().indexOf("/bj_head/") == 1){
	     $("div[name='head'] div.hidden-xs").removeClass("hidden-xs");
	}
})

//判断是否为IPAD
function is_iPad(){ 
	var ua = navigator.userAgent.toLowerCase(); 
	if(ua.match(/iPad/i)=="ipad") { 
	   return true; 
	} else { 
	   return false; 
	} 
}


if (!!nohasTopBar) {	

// 点击显示省份列表
function showDivCity() {
  var pobj = ghead_getProvince("bj");
  var prov_id = pobj.code;
  var prov_abbr = pobj.abbr;
  var prov_name = pobj.name;

  if (prov_id == 100 || prov_id == 210 || prov_id == 220 || prov_id == 230) {
    $("#DivCity").css("display","block");
    $("#divdishi").css("display","none");
  } else {
    drawingCity(prov_id,prov_abbr,prov_name); 
  }
  return false;
}
function hiddenDivCity() {
  $("#DivCity").css("display","none");
  $("#divdishi").css("display","none");
}

function g2top() { 
  $("#DivCity").css("display","block");
  $("#divdishi").css("display","none");
  return false;
}
function g2p() { 
  var prov_id = $(this).attr("prov_id");
  var prov_abbr = $(this).attr("prov_abbr");
  var prov_name = $(this).attr("prov_name");
  $(this).click(function(){if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_SWITCH_' +prov_id+"_"+prov_id);}});
  if (prov_id == 100 || prov_id == 210 || prov_id == 220 || prov_id == 230) { 
    $("#DivCity").css("display","none");
    jump("http://www.10086.cn/" + prov_abbr + "/",prov_abbr,prov_id,prov_id);
  } else {
    drawingCity(prov_id,prov_abbr,prov_name); 
  }
  return false;
}
// 绘制地市弹出层
function drawingCity(prov_id,prov_abbr,prov_name) {
  $("#DivCity").css("display","none");
  $("#divdishi").css("display","block");
  $("#divdishi span:eq(0)").html(prov_name);
  $(".dishi").empty();
  var dd = $("<dd/>");
  for (var i=0;i<citiesJson.length;i++) {
    if (prov_id == citiesJson[i].prov_id) {
      var citylink = $("<a />");
      citylink.attr("href","javascript:void(0);");
      citylink.attr("class","ac_show_city");
      citylink.attr("prov_href","http://www.10086.cn/" + prov_abbr + "/");
      citylink.attr("prov_abbr",prov_abbr);
      citylink.attr("prov_id",citiesJson[i].prov_id);
      citylink.attr("city_id",citiesJson[i].city_id);
      citylink.attr("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_SWITCH_" +citiesJson[i].prov_id+"_"+citiesJson[i].city_id+"');}");
      citylink.click(function () {
        var prov_href = $(this).attr("prov_href");
        var prov_abbr = $(this).attr("prov_abbr");
        var prov_id = $(this).attr("prov_id");
        var city_id = $(this).attr("city_id");
        jump(prov_href,prov_abbr,prov_id,city_id);
      });
      citylink.html(citiesJson[i].city_name);
      dd.append(citylink);
    }
  }
  $(".dishi").append(dd);
}
//控制登录浮层
function loginBar_show(){
  $("#divLoginfcBar").css("display","block");
  $('.login_a').addClass('login_a_h');
}
function loginBar_hide(){
  $("#divLoginfcBar").css("display","none");
  $('.login_a').removeClass('login_a_h');
}
//控制手机营业厅浮层
function ShowDivYYT(){
  $("#yytbar").css("display","block");
  $("#sjyyt a.a2_a").addClass("a2_a_h");
}
function HideDivYYT(){
  $("#yytbar").css("display","none");
  $("#sjyyt a.a2_a").removeClass("a2_a_h");
}

/*登出*/
function logout(provinceAbbr) {
	var curtime = (new Date).getTime(); 
	var url = this_protocol+"www1.10086.cn/web-Center/authCenter/logout.do";
	var secret = getSecret();
	var version = getVersion();
	var timestamp = curtime;
	var digest = getDigest(curtime,secret);
	var conversationId = getConversationId(curtime);
	var channelId = getAuthChannelId();
	
	var json  = {};
	json["serviceName"] = "if008_user_logout";
	
	var header = {};
	header["version"] = version;
	header["timestamp"] = timestamp;
	header["digest"] = digest;
	header["conversationId"] = conversationId;
	if (typeof(ie89) != "undefined") {
		header["ie89"] = ie89;
		header["key4IE89"] = key4IE89;
	}
	json["header"] = header;
	
	var data = {};
	data["channelId"] = channelId;
	json["data"] = data;
	
	$.ajax({
		type : "POST",
		url : url,
		data : JSON.stringify(json),
		contentType : 'text/plain',
		async : true,
		xhrFields:{
			  withCredentials:true
			},
        crossDomain:true,
		success : function(rs) {
			if (!!rs) {
				var result = JSON.parse(rs);
				var responseCode = result.result.response_code;
					delCookie("is_login");
					window.location = window.location;
			}
		},
		error : function() {}
	});
}	

function getCookie(sName) {
		var aCookie = document.cookie.split("; ");
		var aCrumb = null;
		for (var i=0; i < aCookie.length; i++) {
			aCrumb = aCookie[i].split("=");
			if (sName == aCrumb[0]) {
				return unescape(aCrumb[1]);
			}
		}
		return null;
}

function delCookie(name) {
	var exp = new Date();  
    exp.setTime(exp.getTime() - 1);  
    var cval = getCookie(name);  
    if (cval != null) {
        document.cookie= name + "=" + cval + ";path=/;domain=.10086.cn;expires=" + exp.toGMTString();  
    }
}

// html编码函数
function htmlEncode(text) {
    return text.replace(/&/g, '&').replace(/\"/g, '"').replace(/</g, '<').replace(/>/g, '>');
}

function htmlDecode(text) {
    return text.replace(/&/g, '&').replace(/"/g, '\"').replace(/</g, '<').replace(/>/g, '>');
}
	
//判断是否为首页显示消息提醒
function checkProv(){
   var provarr = [];   
   var thisadd = window.location.pathname;
   var partzcc = thisadd.split("/");  
   for(var i=0;i<provincesJson.length;i++){
      if($.inArray(provincesJson[i].abbr,provarr < 0)){
	    provarr.push(provincesJson[i].abbr);
	  }
   }  
   if(partzcc.length == 3){
      if($.inArray(partzcc[1],provarr) >= 0 && partzcc[2].indexOf("index_") >= 0){
	     return true;
	  }
	  else{
	    return false;
	  }
   }
   else if(partzcc.length == 4){
      if($.inArray(partzcc[2],provarr) >= 0 && partzcc[3].indexOf("index_") >= 0){
	     return true;
	  }
	  else{
	    return false;
	  }
   }
   else{
      return false;
   }  
}	

//md5,base64,lib.js融合
(function($){

var rotateLeft = function(lValue, iShiftBits) {
return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
}

var addUnsigned = function(lX, lY) {
var lX4, lY4, lX8, lY8, lResult;
lX8 = (lX & 0x80000000);
lY8 = (lY & 0x80000000);
lX4 = (lX & 0x40000000);
lY4 = (lY & 0x40000000);
lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
if (lX4 | lY4) {
if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
} else {
return (lResult ^ lX8 ^ lY8);
}
}

var F = function(x, y, z) {
return (x & y) | ((~ x) & z);
}

var G = function(x, y, z) {
return (x & z) | (y & (~ z));
}

var H = function(x, y, z) {
return (x ^ y ^ z);
}

var I = function(x, y, z) {
return (y ^ (x | (~ z)));
}

var FF = function(a, b, c, d, x, s, ac) {
a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
return addUnsigned(rotateLeft(a, s), b);
};

var GG = function(a, b, c, d, x, s, ac) {
a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
return addUnsigned(rotateLeft(a, s), b);
};

var HH = function(a, b, c, d, x, s, ac) {
a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
return addUnsigned(rotateLeft(a, s), b);
};

var II = function(a, b, c, d, x, s, ac) {
a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
return addUnsigned(rotateLeft(a, s), b);
};

var convertToWordArray = function(string) {
var lWordCount;
var lMessageLength = string.length;
var lNumberOfWordsTempOne = lMessageLength + 8;
var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - (lNumberOfWordsTempOne % 64)) / 64;
var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
var lWordArray = Array(lNumberOfWords - 1);
var lBytePosition = 0;
var lByteCount = 0;
while (lByteCount < lMessageLength) {
lWordCount = (lByteCount - (lByteCount % 4)) / 4;
lBytePosition = (lByteCount % 4) * 8;
lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
lByteCount++;
}
lWordCount = (lByteCount - (lByteCount % 4)) / 4;
lBytePosition = (lByteCount % 4) * 8;
lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
return lWordArray;
};

var wordToHex = function(lValue) {
var WordToHexValue = "", WordToHexValueTemp = "", lByte, lCount;
for (lCount = 0; lCount <= 3; lCount++) {
lByte = (lValue >>> (lCount * 8)) & 255;
WordToHexValueTemp = "0" + lByte.toString(16);
WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
}
return WordToHexValue;
};

var uTF8Encode = function(string) {
string = string.replace(/\x0d\x0a/g, "\x0a");
var output = "";
for (var n = 0; n < string.length; n++) {
var c = string.charCodeAt(n);
if (c < 128) {
output += String.fromCharCode(c);
} else if ((c > 127) && (c < 2048)) {
output += String.fromCharCode((c >> 6) | 192);
output += String.fromCharCode((c & 63) | 128);
} else {
output += String.fromCharCode((c >> 12) | 224);
output += String.fromCharCode(((c >> 6) & 63) | 128);
output += String.fromCharCode((c & 63) | 128);
}
}
return output;
};

$.extend({
md5: function(string) {
var x = Array();
var k, AA, BB, CC, DD, a, b, c, d;
var S11=7, S12=12, S13=17, S14=22;
var S21=5, S22=9 , S23=14, S24=20;
var S31=4, S32=11, S33=16, S34=23;
var S41=6, S42=10, S43=15, S44=21;
string = uTF8Encode(string);
x = convertToWordArray(string);
a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
for (k = 0; k < x.length; k += 16) {
AA = a; BB = b; CC = c; DD = d;
a = FF(a, b, c, d, x[k+0], S11, 0xD76AA478);
d = FF(d, a, b, c, x[k+1], S12, 0xE8C7B756);
c = FF(c, d, a, b, x[k+2], S13, 0x242070DB);
b = FF(b, c, d, a, x[k+3], S14, 0xC1BDCEEE);
a = FF(a, b, c, d, x[k+4], S11, 0xF57C0FAF);
d = FF(d, a, b, c, x[k+5], S12, 0x4787C62A);
c = FF(c, d, a, b, x[k+6], S13, 0xA8304613);
b = FF(b, c, d, a, x[k+7], S14, 0xFD469501);
a = FF(a, b, c, d, x[k+8], S11, 0x698098D8);
d = FF(d, a, b, c, x[k+9], S12, 0x8B44F7AF);
c = FF(c, d, a, b, x[k+10], S13, 0xFFFF5BB1);
b = FF(b, c, d, a, x[k+11], S14, 0x895CD7BE);
a = FF(a, b, c, d, x[k+12], S11, 0x6B901122);
d = FF(d, a, b, c, x[k+13], S12, 0xFD987193);
c = FF(c, d, a, b, x[k+14], S13, 0xA679438E);
b = FF(b, c, d, a, x[k+15], S14, 0x49B40821);
a = GG(a, b, c, d, x[k+1], S21, 0xF61E2562);
d = GG(d, a, b, c, x[k+6], S22, 0xC040B340);
c = GG(c, d, a, b, x[k+11], S23, 0x265E5A51);
b = GG(b, c, d, a, x[k+0], S24, 0xE9B6C7AA);
a = GG(a, b, c, d, x[k+5], S21, 0xD62F105D);
d = GG(d, a, b, c, x[k+10], S22, 0x2441453);
c = GG(c, d, a, b, x[k+15], S23, 0xD8A1E681);
b = GG(b, c, d, a, x[k+4], S24, 0xE7D3FBC8);
a = GG(a, b, c, d, x[k+9], S21, 0x21E1CDE6);
d = GG(d, a, b, c, x[k+14], S22, 0xC33707D6);
c = GG(c, d, a, b, x[k+3], S23, 0xF4D50D87);
b = GG(b, c, d, a, x[k+8], S24, 0x455A14ED);
a = GG(a, b, c, d, x[k+13], S21, 0xA9E3E905);
d = GG(d, a, b, c, x[k+2], S22, 0xFCEFA3F8);
c = GG(c, d, a, b, x[k+7], S23, 0x676F02D9);
b = GG(b, c, d, a, x[k+12], S24, 0x8D2A4C8A);
a = HH(a, b, c, d, x[k+5], S31, 0xFFFA3942);
d = HH(d, a, b, c, x[k+8], S32, 0x8771F681);
c = HH(c, d, a, b, x[k+11], S33, 0x6D9D6122);
b = HH(b, c, d, a, x[k+14], S34, 0xFDE5380C);
a = HH(a, b, c, d, x[k+1], S31, 0xA4BEEA44);
d = HH(d, a, b, c, x[k+4], S32, 0x4BDECFA9);
c = HH(c, d, a, b, x[k+7], S33, 0xF6BB4B60);
b = HH(b, c, d, a, x[k+10], S34, 0xBEBFBC70);
a = HH(a, b, c, d, x[k+13], S31, 0x289B7EC6);
d = HH(d, a, b, c, x[k+0], S32, 0xEAA127FA);
c = HH(c, d, a, b, x[k+3], S33, 0xD4EF3085);
b = HH(b, c, d, a, x[k+6], S34, 0x4881D05);
a = HH(a, b, c, d, x[k+9], S31, 0xD9D4D039);
d = HH(d, a, b, c, x[k+12], S32, 0xE6DB99E5);
c = HH(c, d, a, b, x[k+15], S33, 0x1FA27CF8);
b = HH(b, c, d, a, x[k+2], S34, 0xC4AC5665);
a = II(a, b, c, d, x[k+0], S41, 0xF4292244);
d = II(d, a, b, c, x[k+7], S42, 0x432AFF97);
c = II(c, d, a, b, x[k+14], S43, 0xAB9423A7);
b = II(b, c, d, a, x[k+5], S44, 0xFC93A039);
a = II(a, b, c, d, x[k+12], S41, 0x655B59C3);
d = II(d, a, b, c, x[k+3], S42, 0x8F0CCC92);
c = II(c, d, a, b, x[k+10], S43, 0xFFEFF47D);
b = II(b, c, d, a, x[k+1], S44, 0x85845DD1);
a = II(a, b, c, d, x[k+8], S41, 0x6FA87E4F);
d = II(d, a, b, c, x[k+15], S42, 0xFE2CE6E0);
c = II(c, d, a, b, x[k+6], S43, 0xA3014314);
b = II(b, c, d, a, x[k+13], S44, 0x4E0811A1);
a = II(a, b, c, d, x[k+4], S41, 0xF7537E82);
d = II(d, a, b, c, x[k+11], S42, 0xBD3AF235);
c = II(c, d, a, b, x[k+2], S43, 0x2AD7D2BB);
b = II(b, c, d, a, x[k+9], S44, 0xEB86D391);
a = addUnsigned(a, AA);
b = addUnsigned(b, BB);
c = addUnsigned(c, CC);
d = addUnsigned(d, DD);
}
var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
return tempValue.toLowerCase();
}
});
})(jQuery);

jQuery.base64 = ( function( $ ) {  
  var _PADCHAR = "=",
    _ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    _VERSION = "1.0";
  function _getbyte64( s, i ) {
    var idx = _ALPHA.indexOf( s.charAt( i ) );
    if ( idx === -1 ) {
      throw "Cannot decode base64";
    }
    return idx;
  }  
  function _decode( s ) {
    var pads = 0,
      i,
      b10,
      imax = s.length,
      x = [];
    s = String( s );    
    if ( imax === 0 ) {
      return s;
    }
    if ( imax % 4 !== 0 ) {
      throw "Cannot decode base64";
    }
    if ( s.charAt( imax - 1 ) === _PADCHAR ) {
      pads = 1;
      if ( s.charAt( imax - 2 ) === _PADCHAR ) {
        pads = 2;
      }
      imax -= 4;
    }
    for ( i = 0; i < imax; i += 4 ) {
      b10 = ( _getbyte64( s, i ) << 18 ) | ( _getbyte64( s, i + 1 ) << 12 ) | ( _getbyte64( s, i + 2 ) << 6 ) | _getbyte64( s, i + 3 );
      x.push( String.fromCharCode( b10 >> 16, ( b10 >> 8 ) & 0xff, b10 & 0xff ) );
    }
    switch ( pads ) {
      case 1:
        b10 = ( _getbyte64( s, i ) << 18 ) | ( _getbyte64( s, i + 1 ) << 12 ) | ( _getbyte64( s, i + 2 ) << 6 );
        x.push( String.fromCharCode( b10 >> 16, ( b10 >> 8 ) & 0xff ) );
        break;
      case 2:
        b10 = ( _getbyte64( s, i ) << 18) | ( _getbyte64( s, i + 1 ) << 12 );
        x.push( String.fromCharCode( b10 >> 16 ) );
        break;
    }
    return x.join( "" );
  }  
  function _getbyte( s, i ) {
    var x = s.charCodeAt( i );
    if ( x > 255 ) {
      throw "INVALID_CHARACTER_ERR: DOM Exception 5";
    }    
    return x;
  }
  function _encode( s ) {
    if ( arguments.length !== 1 ) {
      throw "SyntaxError: exactly one argument required";
    }
    s = String( s );
    var i,
      b10,
      x = [],
      imax = s.length - s.length % 3;
    if ( s.length === 0 ) {
      return s;
    }
    for ( i = 0; i < imax; i += 3 ) {
      b10 = ( _getbyte( s, i ) << 16 ) | ( _getbyte( s, i + 1 ) << 8 ) | _getbyte( s, i + 2 );
      x.push( _ALPHA.charAt( b10 >> 18 ) );
      x.push( _ALPHA.charAt( ( b10 >> 12 ) & 0x3F ) );
      x.push( _ALPHA.charAt( ( b10 >> 6 ) & 0x3f ) );
      x.push( _ALPHA.charAt( b10 & 0x3f ) );
    }
    switch ( s.length - imax ) {
      case 1:
        b10 = _getbyte( s, i ) << 16;
        x.push( _ALPHA.charAt( b10 >> 18 ) + _ALPHA.charAt( ( b10 >> 12 ) & 0x3F ) + _PADCHAR + _PADCHAR );
        break;
      case 2:
        b10 = ( _getbyte( s, i ) << 16 ) | ( _getbyte( s, i + 1 ) << 8 );
        x.push( _ALPHA.charAt( b10 >> 18 ) + _ALPHA.charAt( ( b10 >> 12 ) & 0x3F ) + _ALPHA.charAt( ( b10 >> 6 ) & 0x3f ) + _PADCHAR );
        break;
    }
    return x.join( "" );
  }
  return {
    decode: _decode,
    encode: _encode,
    VERSION: _VERSION
  };      
}( jQuery ) );

//返回统一认证渠道代码
function getAuthChannelId() {
	return "12034";
}

// 返回secret
function getSecret() {
	return "CM_201606";
}

function getSecret2() {
	return "CM_201709";
}

// 返回版本号
function getVersion() {
	return "1.0";
}

// 返回渠道代码
function getChannelId() {
	return "0001";
}

function getChannelId2() {
	return "0711";
}

// 返回数字签名
function getDigest(curtime,secret) {
	var strmd5 = $.md5(curtime + secret);
	var strbase64 = $.base64.encode(strmd5);
	return strbase64;
}

// 格式化数字
function formarNumber(num,n) {
	var rv = null;
	
	var rv = "" + num;
	var length = rv.length;
	var i;

	if (length <= n) {
		for (i=0;i<n-length;i++) {
			rv = '0' + rv;
		}
	}
	else {
		rv = rv.substring(length - n,length);
	}
	
	return rv;
}

// 根据当前时间，返回会话ID
function getConversationId(curtime) {
	var rv;	
	var dateObj = new Date();
	dateObj.setTime(curtime);	
	var fullYear = formarNumber(dateObj.getFullYear(),4);
	var month = formarNumber(dateObj.getMonth()+1,2);
	var date = formarNumber(dateObj.getDate(),2);
	var hours = formarNumber(dateObj.getHours(),2);
	var minutes = formarNumber(dateObj.getMinutes(),2);
	var seconds = formarNumber(dateObj.getSeconds(),2);
	var milliseconds = formarNumber(dateObj.getMilliseconds(),3);
	// 根据当前时间毫秒数、url以及用户特定信息进行md5运算，产生随机数
	var strSeed = curtime + "," + window.location.href + "," + navigator.appName + "," + navigator.appVersion + "," + navigator.userAgent;
	var rnd = formarNumber(parseInt($.md5(strSeed).substring(25,32),16),6);
	rv = fullYear + month + date + hours + minutes + seconds + milliseconds + rnd;
	return rv;
}

// 判断用户是否为本网用户
function isPhoneNumberPd(phone) {
	var rv = 0;
	var mbphno = /^(1)/;
	var num11 = /^\d{11}$/;
	if (null != phone && "" != phone && num11.exec(phone)) {
		if (mbphno.exec(phone)) {
			rv = 0;
		}
		else {
			rv = 2;
		}
	}
	else {
		rv = 1;
	}
	return rv;
}

//切换验证
function lookPm(a,b){ 
			if(!!$("#eyeshow") && $("#eyeshow").length>0){ 
				$("#eyeshow").click(function(){ 
				   if($(this).attr("oc") == "o"){
					  $(this).attr("oc","c").find("img.eye").attr("src","/bj_head/images/index5/eyed.png");
					  $("#head_lf .s2").text(b);
				   }
				   else if($(this).attr("oc") == "c"){
					  $(this).attr("oc","o").find("img.eye").attr("src","/bj_head/images/index5/eyeing.png");
					  $("#head_lf .s2").text(a);
				   }
				});
			}
}
function lookPm_m(a,b){ 
			if(!!$("#eyeshow_m") && $("#eyeshow_m").length>0){
				$("#eyeshow_m").click(function(){
				   if($(this).attr("oc") == "o"){
					  $(this).attr("oc","c").find("img.eye").attr("src","/bj_head/images/index5/eyed.png");
					  $("#m_dlstatus .s2 font").text(b);
				   }
				   else if($(this).attr("oc") == "c"){
					  $(this).attr("oc","o").find("img.eye").attr("src","/bj_head/images/index5/eyeing.png");
					  $("#m_dlstatus .s2 font").text(a);
				   }
				});
			}
}


//进入验证
function doPm(a,b,cobj){
    var if_showxz = true;
    if(!!$("#eyeclose") && $("#eyeclose").length>0){
	   if(!!if_showxz){
		   $("#eyeclose").click(function(){
			 if($(".eyebox .alertBox").css("display") == "none"){
				$(".eyebox .alertBox").css("display","block");
				if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_YZ_GO_'+cobj.prov_id + '|' + cobj.city_id);}
			  }
			  else if($(".eyebox .alertBox").css("display") == "block"){
				$(".eyebox .alertBox").css("display","none");
			  }
		   });
       }	   
	}
	
	$(".eyebox .alertBox .buttons button").each(function(){
	   $(this).hover(function(){
	      $(".eyebox .alertBox .buttons button").css("background","#dfddde");
		  $(this).css("background","#3eb4fa");
	   });
	});
	
	//手机短信验证码发送
	var if_smssuccess = false;
	//获取短信重发倒计时
	var time = 0;
	var countDown;
	var changeTime = function(){
       $("#yz_get").attr("disabled",true).css('cursor','not-allowed');
		time-=1;
		$("#yz_get").addClass("btntxtG").val(time+"s");
		if(time<=0){
		    $("#yz_get").attr("disabled",false).css('cursor','pointer');
			$("#yz_get").removeClass("btntxtG").val("获取验证码");
			if_smssuccess = false;
			clearInterval(countDown);
		}
	}
	//获取短信
	$("#yz_get").click(function(){
	   if(!!a){
			$("#yz_alert").html("").css("display","none");//清除错误提示区内容
			if(!$(this).hasClass("btntxtG") && time <= 0){
				time = 60;
				countDown = setInterval(changeTime,1000);
				getYm();
			}
		}
		if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_YZ_CODE_'+cobj.prov_id + '|' + cobj.city_id);}
	})
	
	//验证短信
	$(".eyebox .alertBox .buttons button.sure").click(function(){
	     if(!!if_smssuccess){
		    $('#yz_alert').html('').css('display','none');
			var yz_code = $('#yz_input').val();
			if(!!yz_code && $.trim(yz_code).length>0){
			   jyYm(yz_code);
			}
			else{
			   $('#yz_alert').html("验证码不能为空").css('display','block');
			}
		 }
		 else{
		    $('#yz_alert').html("请先获取短信验证码").css('display','block');
		 }
		 if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_YZ_RZ_'+cobj.prov_id + '|' + cobj.city_id);}
	});
	
	//取消短信
	$(".eyebox .alertBox .buttons button.cancel").click(function(){
		 $('.eyebox .alertBox').css('display','none');
		 if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_YZ_GB_'+cobj.prov_id + '|' + cobj.city_id);}
	});    

	//获取验证码
	function getYm(){
			var curtime = (new Date).getTime(); 
			var url = location.protocol+"//www1.10086.cn/web-Center/commonservice/sendSms.do";
			var secret = getSecret();
			var version = getVersion();
			var timestamp = curtime;
			var digest = getDigest(curtime,secret);
			var conversationId = getConversationId(curtime);
			
			var json  = {};
			json["serviceName"] = "sendSms";
			
			var header = {};
			header["version"] = version;
			header["timestamp"] = timestamp;
			header["digest"] = digest;
			header["conversationId"] = conversationId;
			if (typeof(ie89) != "undefined") {
				header["ie89"] = ie89;
				header["key4IE89"] = key4IE89;
			}
			json["header"] = header;
			
			var data = {};
			data["type"] = 1;
			
			json["data"] = data;
			
			$.ajax({
				type : "POST",
				url : url,
				data : {requestJson : JSON.stringify(json)},
				async : true,
				xhrFields:{withCredentials:true},crossDomain:true,
				success : function(rs) { 
					var result = JSON.parse(rs);
					if (result.result.response_code == "0000") {
						if_smssuccess = true;
					}				
					else{
						$('#yz_alert').html(result.result.response_desc).css('display','block');
						if_smssuccess = false;
					}
				}, 
				error : function(){
				   $('#yz_alert').html("网络访问错误").css('display','block');
				}
			});
	}

	//校验验证码
	function jyYm(s){
			var curtime = (new Date).getTime(); 
			var url = location.protocol+"//www1.10086.cn/web-Center/commonservice/validateSms.do";
			var secret = getSecret();
			var version = getVersion();
			var timestamp = curtime;
			var digest = getDigest(curtime,secret);
			var conversationId = getConversationId(curtime);
			
			var json  = {};
			json["serviceName"] = "validateSms";
			
			var header = {};
			header["version"] = version;
			header["timestamp"] = timestamp;
			header["digest"] = digest;
			header["conversationId"] = conversationId;
			if (typeof(ie89) != "undefined") {
				header["ie89"] = ie89;
				header["key4IE89"] = key4IE89;
			}
			json["header"] = header;
			
			var data = {};
			data["type"] = 1;
			data["smsCode"] = s;
			
			json["data"] = data;
			
			$.ajax({
				type : "POST",
				url : url,
				data : {requestJson : JSON.stringify(json)},
				async : true,
				xhrFields:{withCredentials:true},crossDomain:true,
				success : function(rs) { 
					var result = JSON.parse(rs);
					if (result.result.response_code == "0000") {
						$("#yz_alert").html("").css("display","none");
						$(".eyebox .alertBox").css("display","none").remove();
						if_showxz = false;
						$("#eyeclose").attr("oc","o").find("img.eye").attr("src","/bj_head/images/index5/eyeing.png");
						$("#head_lf .s2").text(a);
						$("#eyeclose").attr("id","eyeshow");
						lookPm(a,b);
					}				
					else{
						$('#yz_alert').html(result.result.response_desc).css('display','block');
					}
				}, 
				error : function(){
				   $('#yz_alert').html("网络访问错误").css('display','block');
				}
			});
	}
}

//进入验证
function doPm_m(a,b,cobj){
    var if_showxz = true;
    if(!!$("#eyeclose_m") && $("#eyeclose_m").length>0){
	   if(!!if_showxz){
		   $("#eyeclose_m").click(function(){
			 if($("#m_dlstatus .alertBox").css("display") == "none"){
				$("#m_dlstatus .alertBox").css('display','block');
				if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_M_UP_YZ_GO_'+cobj.prov_id + '|' + cobj.city_id);}
			  }
			  else if($("#m_dlstatus .alertBox").css("display") == "block"){
				$("#m_dlstatus .alertBox").css("display","none");
			  }
		   });
       }	   
	}
	
	$("#m_dlstatus .alertBox .buttons button").each(function(){
	   $(this).click(function(){
	      $("#m_dlstatus .alertBox .buttons button").css("background","#dfddde");
		  $(this).css("background","#3eb4fa");
	   });
	});
	
	//手机短信验证码发送
	var if_smssuccess = false;
	//获取短信重发倒计时
	var time = 0;
	var countDown;
	var changeTime = function(){
       $("#yz_get_m").attr("disabled",true).css('cursor','not-allowed');
		time-=1;
		$("#yz_get_m").addClass("btntxtG").val(time+"s");
		if(time<=0){
		    $("#yz_get_m").attr("disabled",false).css('cursor','pointer');
			$("#yz_get_m").removeClass("btntxtG").val("获取验证码");
			if_smssuccess = false;
			clearInterval(countDown);
		}
	}
	//获取短信
	$("#yz_get_m").click(function(){
	   if(!!a){
			$("#yz_alert_m").html("").css("display","none");//清除错误提示区内容
			if(!$(this).hasClass("btntxtG") && time <= 0){
				time = 60;
				countDown = setInterval(changeTime,1000);
				getYm_m();
			}
		}
		if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_M_UP_YZ_CODE_'+cobj.prov_id + '|' + cobj.city_id);}
	})
	
	//验证短信
	$("#m_dlstatus .alertBox .buttons button.sure").click(function(){
	     if(!!if_smssuccess){
		    $('#yz_alert_m').html('').css('display','none');
			var yz_code = $('#yz_input_m').val();
			if(!!yz_code && $.trim(yz_code).length>0){
			   jyYm_m(yz_code);
			}
			else{
			   $('#yz_alert_m').html("验证码不能为空").css('display','block');
			}
		 }
		 else{
		    $('#yz_alert_m').html("请先获取短信验证码").css('display','block');
		 }
		 if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_M_UP_YZ_RZ_'+cobj.prov_id + '|' + cobj.city_id);}
	});
	
	//取消短信
	$("#m_dlstatus .alertBox .buttons button.cancel").click(function(){
		 $('#m_dlstatus  .alertBox').css('display','none');
		 if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_M_UP_YZ_GB_'+cobj.prov_id + '|' + cobj.city_id);}
	});    

	//获取验证码
	function getYm_m(){
			var curtime = (new Date).getTime(); 
			var url = location.protocol+"//www1.10086.cn/web-Center/commonservice/sendSms.do";
			var secret = getSecret();
			var version = getVersion();
			var timestamp = curtime;
			var digest = getDigest(curtime,secret);
			var conversationId = getConversationId(curtime);
			
			var json  = {};
			json["serviceName"] = "sendSms";
			
			var header = {};
			header["version"] = version;
			header["timestamp"] = timestamp;
			header["digest"] = digest;
			header["conversationId"] = conversationId;
			if (typeof(ie89) != "undefined") {
				header["ie89"] = ie89;
				header["key4IE89"] = key4IE89;
			}
			json["header"] = header;
			
			var data = {};
			data["type"] = 1;
			
			json["data"] = data;
			
			$.ajax({
				type : "POST",
				url : url,
				data : {requestJson : JSON.stringify(json)},
				async : true,
				xhrFields:{withCredentials:true},crossDomain:true,
				success : function(rs) {  
					var result = JSON.parse(rs);
					if (result.result.response_code == "0000") {
						//发送成功
						if_smssuccess = true;
					}				
					else{
						$('#yz_alert_m').html(result.result.response_desc).css('display','block');
						//发送失败
						if_smssuccess = false;
					}
				}, 
				error : function(){
				   $('#yz_alert_m').html("网络访问错误").css('display','block');
				}
			});
	}

	//校验验证码
	function jyYm_m(s){
			var curtime = (new Date).getTime(); 
			var url = location.protocol+"//www1.10086.cn/web-Center/commonservice/validateSms.do";
			var secret = getSecret();
			var version = getVersion();
			var timestamp = curtime;
			var digest = getDigest(curtime,secret);
			var conversationId = getConversationId(curtime);
			
			var json  = {};
			json["serviceName"] = "validateSms";
			
			var header = {};
			header["version"] = version;
			header["timestamp"] = timestamp;
			header["digest"] = digest;
			header["conversationId"] = conversationId;
			if (typeof(ie89) != "undefined") {
				header["ie89"] = ie89;
				header["key4IE89"] = key4IE89;
			}
			json["header"] = header;
			
			var data = {};
			data["type"] = 1;
			data["smsCode"] = s;
			
			json["data"] = data;
			
			$.ajax({
				type : "POST",
				url : url,
				data : {requestJson : JSON.stringify(json)},
				async : true,
				xhrFields:{withCredentials:true},crossDomain:true,
				success : function(rs) {  
					var result = JSON.parse(rs);
					if (result.result.response_code == "0000") {
						$("#yz_alert_m").html("").css("display","none");
						$("#m_dlstatus .alertBox").css("display","none").remove();
						if_showxz = false;
						$("#eyeclose_m").attr("oc","o").find("img.eye").attr("src","/bj_head/images/index5/eyeing.png");
						$("#m_dlstatus .s2 font").text(a);
						$("#eyeclose_m").attr("id","eyeshow_m");
						lookPm_m(a,b);
					}				
					else{
						$('#yz_alert_m').html(result.result.response_desc).css('display','block');
					}
				}, 
				error : function(){
				   $('#yz_alert_m').html("网络访问错误").css('display','block');
				}
			});
	}
}
}
