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

/*获取URL协议*/
var this_protocol = !!location.protocol ? location.protocol+"//" : 'http://';

var province = null; 

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
	
var $divTopLeft;
var $divLogin;
var $divHeadNavbar;

function ghead_getProvince(sim){
    var rv = null;
    for(var i=0;i<provincesJson.length;i++){
        if(provincesJson[i].code == sim || provincesJson[i].abbr == sim){
            rv = provincesJson[i];
            break;
        }
    }
    return rv;
}

function ghead_getCity(sim){
    var rv = null;
    for(var i=0;i<citiesJson.length;i++){
        if(citiesJson[i].city_id == sim || citiesJson[i].city_id_district == sim){
            rv = citiesJson[i];
            break;
        }
    }
    return rv;
}

function renderPageHead(){ 
    /*处理隐藏加载显示整个页面,针对国漫*/
	if(location.pathname.toLowerCase().indexOf("/roaming/") >= 0 && navigator.userAgent.toLowerCase().indexOf("cqmcclient")<0 && navigator.userAgent.toLowerCase().indexOf("leadeon")<0){
      var wd_wi = window.screen.width;
	  var wd_he = window.screen.height;
	  var wd_htk = !!judgeMT ? '20%' : '5%';
	  $('body').css({'width':wd_wi,'height':wd_he,'overflow':'hidden'}).append('<div id="b_loadimg" style="width:'+(wd_wi+'px')+';height:'+(wd_he+'px')+';position:fixed; top:0; left:0; background:#fff;z-index:999999999999999999; text-align:center;"><img src="/images/loading_bd.gif" style="width:'+wd_htk+'; margin:auto; display:block; visibility:hidden;"/></div>');
	  var tu_wi = $('#b_loadimg img').width();
	  var tu_hi = tu_wi * 300 / 300;
	  var tu_bj = (wd_he - tu_hi)/2;  
	  $('#b_loadimg img').css('margin-top',tu_bj+'px'); 
	  $('#b_loadimg img').css('visibility','visible'); 
	  var dopdload=self.setInterval(function(){
	      if(document.readyState == "complete"){  
			  if(!!$('#b_loadimg') && $('#b_loadimg').length>0){
				 $('#b_loadimg').remove();
			  }
			  $('body').css({'width':'inherit','height':'inherit','overflow':'visible'});
			  clearInterval(dopdload);
		  }
	  },50)
	}
	
	
	var pobj = null; //省数据
	var cobj = null; //地市数据
	var prov_id = 0; //省ID 3位数字
	var city_id = 0; //地市ID 3-4位数字
	
	var hostname = window.location.host;
	if(hostname.indexOf("chinamobile.com") >= 0 || hostname.indexOf("m-zone.10086.cn") >= 0 || hostname.indexOf("arraytest.10086.cn") >= 0){
		var protocolhostname = "http://www.10086.cn";
		var pathname = window.location.pathname; 
		var args = window.location.search; 
		var target = window.location.hash; 
		window.location.href = protocolhostname + pathname + args + target;
	}
	else{
		/*方法一：从分省链接获取省市信息*/
		var thisURL = document.URL;
		var indexOne = 0;
		var indexTwo = 0;
		var filename = null;
		if(thisURL.indexOf("?") != -1){
			thisURL = thisURL.substring(0,thisURL.indexOf("?"));
		}
		indexOne = thisURL.lastIndexOf("/");
		indexTwo = thisURL.lastIndexOf(".");
		if (indexOne < indexTwo) {
			filename = thisURL.substring(indexOne + 1, indexTwo);
			var arrfilename = filename.split("_");
			if (3 <= arrfilename.length) {
				pobj = ghead_getProvince(arrfilename[1]);
				cobj = ghead_getCity(arrfilename[2]);
				if (pobj != null && cobj != null) {
					province = pobj.abbr;
					prov_id = cobj.prov_id;
					city_id = cobj.city_id;
				}
			}
		}
		/*方法二：从COOKIE里获取省市信息*/
		if (province == null || prov_id == 0 || city_id == 0) {
			var strCookie = document.cookie;
			var arrCookie = strCookie.split("; ");
			for (var i = 0; i < arrCookie.length; i++) {
				var arr = arrCookie[i].split("=");
				if (2 <= arr.length && "CmLocation" == arr[0]) {
					var strpc = arr[1];
					var arrstrpc = strpc.split("|");
					if (2 <= arrstrpc.length) {
						pobj = ghead_getProvince(arrstrpc[0]);
						cobj = ghead_getCity(arrstrpc[1]);
						if (pobj != null && cobj != null) {
							province = pobj.abbr;
							prov_id = cobj.prov_id;
							city_id = cobj.city_id;
						}
					}
					break;
				}
			}
		}
		/*方法三：从接口查询归属地信息获取省市信息*/						
		if (province == null || prov_id == 0 || city_id == 0) { 
			var urlGsCity = this_protocol+"www.10086.cn/web-Center/commonservice/ipLocation.do";
			$.ajax({
				type : "POST",
				url : urlGsCity,
				dataType: "json",
				success : function(rs) { 
					var gsrs = typeof(rs) == 'string' ? JSON.parse(rs) : rs;
					var gsProvId = gsrs.province_id; 
					var gsCityId = gsrs.city_id;
					
					if (!!gsProvId && !!gsCityId) { 
						pobj = ghead_getProvince(gsProvId);
						cobj = ghead_getCity(gsCityId);
						if (pobj != null && cobj != null) {
							province = pobj.abbr;
							prov_id = cobj.prov_id;
							city_id = cobj.city_id;
							doafter();
						}
					} else {
						province = null;
						prov_id = 0;
						city_id = 0;
						doafter();
					}
				},
				error : function() {
					province = null;
					prov_id = 0;
					city_id = 0;
					doafter();
				}
			});
		}
		else{
		  doafter();
		}
		
		/*处理异步执行*/
		function doafter(){
			var idxabbr = 0;
			var isProvUrl = false;
			var oldAbbr = "";

			/*判断是否是分省url并处理*/
			for(var i=0;i<provincesJson.length;i++){
				idxabbr = thisURL.indexOf("/" + provincesJson[i].abbr + "/");
				if (idxabbr != -1) {
					isProvUrl = true;
					oldAbbr = provincesJson[i].abbr;
					break;
				}
			}
			
			if(isProvUrl){
				if ((province == null || prov_id == 0 || city_id == 0) || (thisURL.indexOf("/fee/") == -1 && oldAbbr != pobj.abbr)) {
					/*当不存在归属省市，或归属省市与url中的省份代码不一致时，将cookie更新成url省份的省会*/
					pobj = ghead_getProvince(oldAbbr);
					for (var i = 0; i < citiesJson.length; i++) {
						if (citiesJson[i].prov_id == pobj.code) {
							cobj = citiesJson[i];
							province = pobj.abbr;
							prov_id = cobj.prov_id;
							city_id = cobj.city_id;
							break;
						}
					}
				}
				var days = 90;
				var exp = new Date();
				exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
				document.cookie = "CmLocation=" + prov_id + "|" + city_id + ";path=/;domain=10086.cn;expires=" + exp.toGMTString();
				document.cookie = "CmProvid=" + province + ";path=/;domain=10086.cn;expires=" + exp.toGMTString();
			}
			
			if ((province == null || prov_id == 0 || city_id == 0) && (document.domain.indexOf("10086.cn")<0)) {
					province = "bj";
					prov_id = 100;
					city_id = 100;
					pobj = ghead_getProvince(prov_id);
					cobj = ghead_getCity(city_id);
			}
			
			if(province == null || prov_id == 0 || city_id == 0){
				var redirecting_url = "/index_5074.htm";
				window.location.href = redirecting_url;
			}
			else{
				var ua = navigator.userAgent.toLowerCase(); 
				if(0 <= ua.indexOf("leadeon") || 0 <= ua.indexOf("cmblife") || (navigator.userAgent.indexOf('ynmobileapp_ios')>-1||navigator.userAgent.indexOf('ynmobileapp_android')>-1)
	||(navigator.userAgent.indexOf('xwapp_ios')>-1||navigator.userAgent.indexOf('xwapp_andriod')>-1||ua.indexOf('cqmcclient')>-1)) {
					/*绿点APP和招行APP和云南APP*/
				}else{
					(function (doc, win) {
					var docEl = doc.documentElement,
					resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
					recalc = function () {
						var clientWidth = docEl.clientWidth;
						if (!clientWidth) return;
							docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';//48
						};
						if (!doc.addEventListener) return;
						win.addEventListener(resizeEvt, recalc, false);
						doc.addEventListener('DOMContentLoaded', recalc, false);
					  })(document, window);
					  
					$("#head").attr("id",province + "_head");  

					/*页头2公共显示栏，只有首页展示*/
					if(location.pathname.toLowerCase().indexOf("/index/"+ province +"") == 0 || location.pathname.toLowerCase().indexOf("/index/"+ province +"") == 1 || location.pathname.toLowerCase().indexOf("//"+ province +"_head/") == 0 || location.pathname.toLowerCase().indexOf("//"+ province +"_head/") == 1 || location.pathname.toLowerCase().indexOf("/"+ province +"_head/") == 0 || location.pathname.toLowerCase().indexOf("/"+ province +"_head/") == 1){
					  if(!judgeMT){
						  renderTopBar2(pobj, cobj);
						  if(!$('#topHead') || $('#topHead').length<=0){
							$("#menu .back a").attr("href", "#" + province + "_head"); 
						  }
					  }
					}
					
					/*页头公共显示栏*/
					// renderTopBar(pobj,cobj);
					/*页头Logo及搜索区*/
					renderMiddleArea(pobj,cobj);
					/*一级菜单栏*/
					renderTopLevelMenu(pobj,cobj);
					/*网上营业厅展示*/
					renderOnlineBusiness();
					/*登录*/
					if(!judgeMT || (!!judgeMT && (location.pathname.toLowerCase().indexOf("/index/"+ province +"") == 0 || location.pathname.toLowerCase().indexOf("/index/"+ province +"") == 1 || location.pathname.toLowerCase().indexOf("//"+ province +"_head/") == 0 || location.pathname.toLowerCase().indexOf("//"+ province +"_head/") == 1 || location.pathname.toLowerCase().indexOf("/"+ province +"_head/") == 0 || location.pathname.toLowerCase().indexOf("/"+ province +"_head/") == 1))){
						headLoginDeal(pobj,cobj);
					}
					
					var headScript = document.createElement("script");
					headScript.src = "/" + province + "_head/" + province + "_head_headH5.js";
					document.documentElement.appendChild(headScript);
				}
			}
		}
		
	}
	
}

/*登录情况及处理*/
function headLoginDeal(pobj,cobj){
	var backUrl = window.location.href; 
	var channelId = getAuthChannelId();
	var isLogin = getCookie("is_login");
	if (isLogin == true || isLogin == "true") { 
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
					if (!!f){ 
						var userName = result.result.data.user;
						var authUserId = result.result.data.authUserId;
						var ifsdMessage = parseInt(result.result.data.validStatus);
						
						if (!!userName) {
						   /*根据是否接入统一认证分省处理登录情况*/
						   if(pobj.abbr == 'gd'){
							 normalLogin(result,pobj,cobj);
						   }else{
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
								$("<span>").addClass("s2").html(phoneNumber).appendTo($divTopLeft);
								
								/*显示验证*/
								if(if_pnumber == 0){ 
								   $("<div>").addClass("eyebox").attr("id","headcheckyz").appendTo($divTopLeft);
								   var eyestatus = !!ifsdMessage ? "eyeshow" : "eyeclose";
								   var eyeopen = !!ifsdMessage ? "o" : "c";
								   var eyeimgs = !!ifsdMessage ? "eyeing.png" : "eyed.png";
								   $('#headcheckyz').append('<a href="javascript:;" id='+eyestatus+' oc='+eyeopen+'><img class="eye" src="/'+pobj.abbr+'_head/images/index5/'+eyeimgs+'"/></a>');
								   if(!ifsdMessage){
										$("<div>").addClass("alertBox").attr("id","headyzbox").appendTo($("#headcheckyz"));
										$('#headyzbox').append('<h4><img src="/'+ pobj.abbr+'_head/images/index5/eyeSafe.png"/>身份验证</h4><p class="txt">为保证您的账号安全，需要对您的手机号<span>'+phoneNumber+'</span>进行验证。</p><span class="txt">短信验证码：</span><form class="form clearfix"><input type="text" id="yz_input" class="inputxt"/><input type="button" id="yz_get" value="获取验证码" class="btntxt"/></form><span class="txt txtR" id="yz_alert" style="display:none;"></span><div class="buttons clearfix"><button class="sure">认证</button><button class="cancel">取消</button></div>');
								   }
								}
			
								/*获取用户未读消息*/
								if(checkProv()){
									$("<span>").addClass("s3").attr("id", "unreadMsg").html("消息 ").appendTo($divTopLeft);
									getUnreadMessage(userName,authUserId);
									$("#unreadMsg").click(function(){
									  if(typeof(_tag)!= "undefined"){_tag.dcsMultiTrack("WT.event","INDEX_TOP_C_UP_MSG_"+cobj.prov_id + "|" + cobj.city_id +"");} 
									  window.open("http://shop.10086.cn/i/index.html?f=mynews");
									});
								}
			
								/*登出按钮*/
								$("<a>").addClass("back").html("[退出]").attr("href", "javascript:logout('" + pobj.abbr + "')").attr("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_EXIT_"+cobj.prov_id + "|" + cobj.city_id +"');}").appendTo($divTopLeft);
								
								/*验证处理*/
								if(if_pnumber == 0 && !!userName && !!phoneNumber_yc){
								   if(!!ifsdMessage){
									 lookPm(userName,phoneNumber_yc);
								   }
								   else{
									 doPm(userName,phoneNumber_yc,cobj);
								   }
								}
							}
							if(!!$("#loginArea") && $("#loginArea").length>0){
							   $("#loginArea").css("width","0");
							}
						} else {
							/*跳转统一认证检查cookie*/
							window.location.href = "https://login.10086.cn/SSOCheck.action?channelID=" 
								+ channelId + "&backUrl=" + encodeURIComponent(backUrl);
						}
						
				   
					} else {
							/*跳转统一认证检查cookie*/
							window.location.href = "https://login.10086.cn/SSOCheck.action?channelID=" 
								+ channelId + "&backUrl=" + encodeURIComponent(backUrl);
					 }
				  } else {
						/*跳转统一认证检查cookie*/
						window.location.href = "https://login.10086.cn/SSOCheck.action?channelID=" 
								+ channelId + "&backUrl=" + encodeURIComponent(backUrl);
				  }
			   }
			   else{
						if (pobj.abbr == 'gd'){
							normalLogin('',pobj,cobj);
						} 
						else{
							$("<a>").addClass("login_a").html("请登录").attr("href", "https://login.10086.cn/login.html?channelID=" + channelId + "&backUrl=" + encodeURIComponent(backUrl)).attr("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_LOGIN_T_"+cobj.prov_id + "|" + cobj.city_id +"');}").appendTo($divLogin);
						 }
			   }			
				/*弹出登录个人信息-暂时屏蔽*/
				//drawPersoninfor(userName,pobj,cobj); 
			
		}, 
		error : function() { 
			   if (pobj.abbr == 'gd'){
					normalLogin('',pobj,cobj);
				} 
				else{
					$("<a>").addClass("login_a").html("请登录").attr("href", "https://login.10086.cn/login.html?channelID=" + channelId + "&backUrl=" + encodeURIComponent(backUrl)).attr("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_LOGIN_T_"+cobj.prov_id + "|" + cobj.city_id +"');}").appendTo($divLogin);
				 }
				 /*弹出登录个人信息-暂时屏蔽*/
				 //drawPersoninfor(userName,pobj,cobj);
		}
	
	});
	}
	else{    
			if (pobj.abbr == 'gd'){
				normalLogin('',pobj,cobj);
			} 
			else{
				$("<a>").addClass("login_a").html("请登录").attr("href", "https://login.10086.cn/login.html?channelID=" + channelId + "&backUrl=" + encodeURIComponent(backUrl)).attr("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_LOGIN_T_"+cobj.prov_id + "|" + cobj.city_id +"');}").appendTo($divLogin);
			 }
			 /*弹出登录个人信息-暂时屏蔽*/
			 //drawPersoninfor(userName,pobj,cobj);
	}
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

/*首页置顶页头*/
function renderTopBar2(pobj, cobj){	  
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

/*登录弹出层*/
/*function drawPersoninfor(userName,pobj,cobj){ 
	if(location.pathname.toLowerCase().indexOf("/index/"+ province +"") == 0 || location.pathname.toLowerCase().indexOf("/index/"+ province +"") == 1 || location.pathname.toLowerCase().indexOf("//"+ province +"_head/") == 0 || location.pathname.toLowerCase().indexOf("//"+ province +"_head/") == 1 || location.pathname.toLowerCase().indexOf("/"+ province +"_head/") == 0 || location.pathname.toLowerCase().indexOf("/"+ province +"_head/") == 1){
	  var headNavbtn01 = $("<div></div>");
	  headNavbtn01.addClass("head_navbtn");
	  headNavbtn01.addClass("head_navbtn01");
	  
	  if (!userName) {
		  if (pobj.abbr == "gd"){
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
			  login_shop_a.html("登录移动商城");
			  loginbox01.append(login_shop_a);
			  
			  var login_yyt_a = $("<a></a>");
			  login_yyt_a.attr("href", "#");
			  login_yyt_a.attr("target", "_blank");
			  login_yyt_a.attr("onclick","javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_FZ_LOGIN_W_"+ cobj.prov_id + "|" + cobj.city_id +"');}");
			  login_yyt_a.html("登录网上营业厅");
			  loginbox01.append(login_yyt_a);
			  
			  $divHeadNavbar.append(headNavbtn01);
			  
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
		  } else {
			  var channelId = getAuthChannelId();
			  var backUrl = window.location.href;
			  var login_a = $("<a></a>");
			  login_a.addClass("loginbtn01");
			  login_a.html("登录");
			  login_a.attr("href", "https://login.10086.cn/login.html?channelID=" + channelId + "&backUrl=" + encodeURIComponent(backUrl));
					  login_a.attr("onclick","javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_FZ_LOGIN_T_"+ cobj.prov_id + "|" + cobj.city_id +"');}");
			  headNavbtn01.append(login_a);
			  $divHeadNavbar.append(headNavbtn01);
			  
		  }      
	  } else {
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
		  $divHeadNavbar.append(headNavbtn01);
		  
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
}*/

/*页头渲染*/
function renderTopBar(pobj,cobj){
	var headcsspath = '';
    if(location.pathname.toLowerCase().indexOf("/index/"+ province +"") == 0 || location.pathname.toLowerCase().indexOf("/index/"+ province +"") == 1 || location.pathname.toLowerCase().indexOf("//"+ province +"_head/") == 0 || location.pathname.toLowerCase().indexOf("//"+ province +"_head/") == 1 || location.pathname.toLowerCase().indexOf("/"+ province +"_head/") == 0 || location.pathname.toLowerCase().indexOf("/"+ province +"_head/") == 1){
		headcsspath = "/"+ province +"_head/css/index5/head_index.css";
		if(!!$('meta') && $('meta').length>0){
			$('meta:last').after('<meta name="WT.mobile" content="MobileNumber" id="wtMobile">');
		}
		else{
			$('head').append('<meta name="WT.mobile" content="MobileNumber" id="wtMobile">');
		}
    }
    else{
		headcsspath = "/"+ province +"_head/css/index5/head.css";
    }
	
	var heads = !!$("head") && $("head").length>0 ? "head" : "body";
	$("<link>").attr({rel:"stylesheet",type:"text/css",id:"cssHead",href:headcsspath}).appendTo(heads);

	$('#'+province+'_head').append('<div class="head_top" id="topbar"><div class="head_top1200 clearfix"><div class="head_lf" id="head_lf"><span class="s1">欢迎来到中国移动网站</span><div id="loginArea" class="login"></div></div><div class="head_rg"><a href="http://shop.10086.cn/i/" class="a1" id="tempBar0">个人中心</a><div class="a2" id="sjyyt"><a class="a2_a" id="tempBar1">中国移动客户端</a><div class="a2_box" id="yytbar"><img id="imgYYTfc"/><p>扫一扫，随时查话费！</p></div></div><a href="http://jf.10086.cn/" class="a1" id="tempBar2">积分商城</a><a href="http://open.10086.cn/" class="a1 a1_shop" id="tempBar3">能力开放商店</a><a href="http://www.10086.cn/aboutus/" class="a1" id="tempBar4">关于中国移动</a><a href="http://www.10086.cn/zzxx/" class="a1" id="tempBar8">证照信息</a><a href="http://www.10086.cn/web_notice/contact/" class="a1" id="tempBar5">联系我们</a><a class="a1" id="tempBar6">政企客户</a><a href="http://www.chinamobileltd.com/?lang=en" class="a1 idx_last" id="tempBar7">ENGLISH</a></div></div></div>');
	if (!judgeMT) {
	$("#sjyyt").mouseenter(function(){ShowDivYYT();});
	$("#sjyyt").mouseleave(function(){HideDivYYT();});
	}
	$divTopLeft = $("#head_lf");
	$divLogin = $("#loginArea");  
}

/*logo图片、搜索区域*/
function renderMiddleArea(pobj,cobj){	
  $("<div>").addClass("head_con").attr("id","middle").appendTo($('#'+province+'_head'));
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

/*一级导航栏*/
function renderTopLevelMenu(pobj,cobj) { 
  var divHeadNavbar = $('<div class="head_nav"></div>');
  $("#"+ province +"_head").append(divHeadNavbar);

  /*全部产品服务*/
  if(location.pathname.toLowerCase().indexOf("/index/"+ province +"") == 0 || location.pathname.toLowerCase().indexOf("/index/"+ province +"") == 1 || location.pathname.toLowerCase().indexOf("//"+ province +"_head/") == 0 || location.pathname.toLowerCase().indexOf("//"+ province +"_head/") == 1 || location.pathname.toLowerCase().indexOf("/"+ province +"_head/") == 0 || location.pathname.toLowerCase().indexOf("/"+ province +"_head/") == 1){
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
 
    $divHeadNavbar = divHeadNavbar;
}

/*网上营业厅根据JSON显示*/
function renderOnlineBusiness(){
	var ifhasnetshop = false;
	$.getJSON("/"+ province +"_head/"+ province +"/5001257_209_617.json", function(data){
		if(!!data.cData.content){
			var headNavDataGeContent = data.cData.content.navName4;
			if(!!$.trim(headNavDataGeContent)){
				ifhasnetshop = true;
			}
		}	
	}).complete(function(){
		/*处理山西非首页导航样式*/
		if(!!ifhasnetshop){
			$('#navTop2,#headNetShop').css('display','block');
		}
		else{
			$('#navTop2,#headNetShop').remove();
		}	
		if(location.pathname.toLowerCase().indexOf("/index/"+ province +"") != 0 && location.pathname.toLowerCase().indexOf("/index/"+ province +"") != 1 && location.pathname.toLowerCase().indexOf("//"+ province +"_head/") != 0 && location.pathname.toLowerCase().indexOf("//"+ province +"_head/") != 1 && location.pathname.toLowerCase().indexOf("/"+ province +"_head/") != 0 && location.pathname.toLowerCase().indexOf("/"+ province +"_head/") != 1){
			   $('.head_nav1200 .nav').css('width','100%');
			   if(!ifhasnetshop){
				 $('.head_nav .nav li').css('width','25%');
			   }
			   else{
				 $('.head_nav .nav li').css('width','20%');
			   }
		}
	});;
}


/*显示省份列表*/
function showDivCity() {
	var pobj = ghead_getProvince(province);
	var prov_id = pobj.code;
	var prov_abbr = pobj.abbr;
	var prov_name = pobj.name;

	if (prov_id == 100 || prov_id == 210 || prov_id == 220 || prov_id == 230) { 
		$("#DivCity").css("display","block");
		$("#divdishi").css("display","none");
	}
	else {
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
/*绘制地市弹出层*/
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

/*非统一认证登录处理*/
function normalLogin(result,pobj,cobj) {   
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
		  $("<span>").addClass("s2").html(phoneNumber).appendTo($divTopLeft);
		  
		  //显示验证
		 if(if_pnumber == 0){
		   $("<div>").addClass("eyebox").attr("id","ntheadcheckyz").appendTo($divTopLeft);
		   var eyestatus = !!ifsdMessage ? "eyeshow" : "eyeclose";
		   var eyeopen = !!ifsdMessage ? "o" : "c";
		   var eyeimgs = !!ifsdMessage ? "eyeing.png" : "eyed.png";
		   $('#ntheadcheckyz').append('<a href="javascript:;" id='+eyestatus+' oc='+eyeopen+'><img class="eye" src="/'+province+'_head/images/index5/'+eyeimgs+'"/></a>');		   
		   if(!ifsdMessage){
			    $("<div>").addClass("alertBox").attr("id","ntheadyzbox").appendTo($("#ntheadcheckyz"));
				$('#ntheadyzbox').append('<h4><img src="/'+province+'_head/images/index5/eyeSafe.png"/>身份验证</h4><p class="txt">为保证您的账号安全，需要对您的手机号<span>'+phoneNumber+'</span>进行验证。</p><span class="txt">短信验证码：</span><form class="form clearfix"><input type="text" id="yz_input" class="inputxt"/><input type="button" id="yz_get" value="获取验证码" class="btntxt"/></form><span class="txt txtR" id="yz_alert" style="display:none;"></span><div class="buttons clearfix"><button class="sure">认证</button><button class="cancel">取消</button></div>');
		   }
		 }
          
		  if(checkProv()){
			  $("<span>").addClass("s3").attr("id","unreadMsg").html("消息 ").appendTo($divTopLeft);
			  getUnreadMessage(userName,authUserId);
			  $("#unreadMsg").click(function(){
			     if(typeof(_tag)!= "undefined"){_tag.dcsMultiTrack("WT.event","INDEX_TOP_C_UP_MSG_"+cobj.prov_id + "|" + cobj.city_id +"");} 
			     window.open("http://shop.10086.cn/i/index.html?f=mynews");
			  });
		  }
		  
		  $("<a>").addClass("back").html("[退出]").attr("id","logout").attr("href", "#").attr("onclick", "javascript:if(typeof(_tag)!= 'undefined'){_tag.dcsMultiTrack('WT.event','INDEX_TOP_C_UP_EXIT_"+cobj.prov_id + "|" + cobj.city_id +"');}").appendTo($divTopLeft);
		  
		  //验证处理
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

/*获取未读消息*/
function getUnreadMessage(userName,authUserId) {
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
	data["userId"] = userName;
	data["authUserId"] = authUserId;
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

/*判断是否为首页显示消息提醒*/
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

/*登出链接处理*/
function updateAuthorityHerf(pobj,cobj) {
  var object;
  var mobject;
  var loginJThostname = "login.10086.cn";
  var provCode = pobj.code;
  var cityCode = cobj.city_id;

  //集团
  var logoutJT = eval('('+'{"name":"退出","href":"https://" + loginJThostname + "/logout.htm?backUrl=","editable":"1","responsible":"1","isEdit":"0"}'+')');
 
  //省
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

/*切换验证*/
function lookPm(a,b){ 
	if(!!$("#eyeshow") && $("#eyeshow").length>0){ 
		$("#eyeshow").click(function(){ 
		   if($(this).attr("oc") == "o"){
			  $(this).attr("oc","c").find("img.eye").attr("src","/"+ province +"_head/images/index5/eyed.png");
			  $("#head_lf .s2").text(b);
		   }
		   else if($(this).attr("oc") == "c"){
			  $(this).attr("oc","o").find("img.eye").attr("src","/"+ province +"_head/images/index5/eyeing.png");
			  $("#head_lf .s2").text(a);
		   }
		});
	}
}
function lookPm_m(a,b){ 
	if(!!$("#eyeshow_m") && $("#eyeshow_m").length>0){
		$("#eyeshow_m").click(function(){
		   if($(this).attr("oc") == "o"){
			  $(this).attr("oc","c").find("img.eye").attr("src","/"+ province +"_head/images/index5/eyed.png");
			  $("#m_dlstatus .s2 font").text(b);
		   }
		   else if($(this).attr("oc") == "c"){
			  $(this).attr("oc","o").find("img.eye").attr("src","/"+ province +"_head/images/index5/eyeing.png");
			  $("#m_dlstatus .s2 font").text(a);
		   }
		});
	}
}


/*进入验证PC*/
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
	//获取短信
	//重发倒计时
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
			$("#yz_alert").html("").css("display","none");
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
						$("#eyeclose").attr("oc","o").find("img.eye").attr("src","/"+ province +"_head/images/index5/eyeing.png");
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

/*进入验证移动端*/
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
	//获取短信
	//重发倒计时
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
			$("#yz_alert_m").html("").css("display","none");
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
						if_smssuccess = true;
					}				
					else{
						$('#yz_alert_m').html(result.result.response_desc).css('display','block');
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
						$("#eyeclose_m").attr("oc","o").find("img.eye").attr("src","/"+ province +"_head/images/index5/eyeing.png");
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

/*获取COOKIE*/
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

/*控制登录浮层*/
function loginBar_show(){
	$("#divLoginfcBar").css("display","block");
	$('.login_a').addClass('login_a_h');
}
function loginBar_hide(){
	$("#divLoginfcBar").css("display","none");
	$('.login_a').removeClass('login_a_h');
}
/*控制手机营业厅浮层*/
function ShowDivYYT(){
	$("#yytbar").css("display","block");
	$("#sjyyt a.a2_a").addClass("a2_a_h");
}
function HideDivYYT(){
	$("#yytbar").css("display","none");
	$("#sjyyt a.a2_a").removeClass("a2_a_h");
}

/*html编码函数*/
function htmlEncode(text) {
    return text.replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function htmlDecode(text) {
    return text.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

/*lib融合*/
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


/*返回统一认证渠道代码*/
function getAuthChannelId() {
	return "12034";
}

/*返回secret*/
function getSecret() {
	return "CM_201606";
}

function getSecret2() {
	return "CM_201709";
}

/*返回版本号*/
function getVersion() {
	return "1.0";
}

/*返回渠道代码*/
function getChannelId() {
	return "0001";
}

function getChannelId2() {
	return "0711";
}

/*返回数字签名*/
function getDigest(curtime,secret) {
	var strmd5 = $.md5(curtime + secret);
	var strbase64 = $.base64.encode(strmd5);
	return strbase64;
}

/*格式化数字*/
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

/*根据当前时间，返回会话ID*/
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

	/*根据当前时间毫秒数、url以及用户特定信息进行md5运算，产生随机数*/
	var strSeed = curtime + "," + window.location.href + "," + navigator.appName + "," + navigator.appVersion + "," + navigator.userAgent;
	var rnd = formarNumber(parseInt($.md5(strSeed).substring(25,32),16),6);
	rv = fullYear + month + date + hours + minutes + seconds + milliseconds + rnd;
	return rv;
}

/*生成流水号*/
function randomString() {    
　　len =  32;    
　　var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';    
　　var maxPos = $chars.length;    
　　var pwd = '';    
　　for (i = 0; i < 32; i++) { 
　　　　pwd += $chars.charAt(Math.floor(Math.random() * (maxPos+1)));    
　　}    
　　return pwd;    
}

/*判断用户是否为本网用户*/
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

/*跳转地市页面*/
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
