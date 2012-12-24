var lang = {
	"ua":{ },
	"en":{
		"title":"Made with love in Ukraine",
		"about":"On this site we gathered most beautiful and high-edge made projects, which were made in Ukraine",
		"mnyc":"The project is a clone for american one",
		"howTo":"How to join the list?",
		"rules":"Rules",
		"base":"Any startup/project which was made in Ukraine or by ukrainians could be added to this list.",
		"gettingIn":"Joining",
		"method1":"There are 2 ways. First - send me an email to",
		"method2":"Second (the fastest):",
		"m1":"prepare image 320х180 in PNG format",
		"m2":"make pull and change current website as you need",
		"m3":"make a pull request",
		"pictures":"Logotypes for your website",
		"like":"Like it?",
		"p1":"main logo",
		"p2":"symbol",
		"p3":"collection of logos"
	},
	"ru":{
		"title":"Создано с любовью в Украине",
		"about":"На этом сайте мы собрали наиболее красивые и высоко-технологичные сайты, которые были разработаны в Украине",
		"mnyc":"Проект является аналогом американскому",
		"howTo":"Как принять участие?",
		"rules":"Условия участия",
		"base":"В этом каталоге может принять участие любой стартап/проект разработанный в Украине или украинцами.",
		"gettingIn":"Как попасть в список",
		"method1":"Существует два способа. Первый - написать письмо-запрос на почту",
		"method2":"Второй (быстрый):",
		"m1":"подготовить изображение 320х180 в формате PNG",
		"m2":"сделать pull и внести изменения в этот сайт",
		"m3":"сделать pull request",
		"pictures":"Логотипы для вашего сайта",
		"like":"Вам понравилось?",
		"p1":"основной логотип",
		"p2":"герб",
		"p3":"коллекция логотипов"
	}
};

var translatable = [];

function translate(me) {
	me = me||window.event;
    me = me.target||me.srcElement;
	var l = me.getAttribute('data-item-lang');
	l = lang[l];
	for (var i = 0; i < translatable.length; i++) {
		var e = translatable[i];
		var attr = e.getAttribute('data-item-key');
		e.innerHTML = l[attr];
	}
	return false;
}

function init() {
    var elems = document.all ? document.all : document.getElementsByTagName('*');
	var i = elems.length;

	var o = {};
	while(i-- > 0) {
    	var attr = elems[i].getAttribute('data-item-key');
    	if(typeof attr !== 'string') {
	        continue;
    	}
    	o[attr] = elems[i].innerHTML;
    	translatable.push(elems[i]);
	}
	lang["ua"] = o;
	var list = document.getElementById('languagesList');
	var f = true;
	for(var l in lang) {
		var li = document.createElement('li');
		if (f) {
			li.className = 'first';
			f = false;
		}
		var a = document.createElement('a');
		a.href = '#';
		a.setAttribute('data-item-lang', l);
		a.onclick = translate;
		a.className = 'flag f_' + l;
		li.appendChild(a);
		list.appendChild(li);
	}
	
	var nodes = document.getElementById('links').children, i = 0;
    while(i < nodes.length)
    {
        var k = i % 4;
        nodes[i].className = 'i i'+k;
        i++;
    }
}