// JavaScript Document
// 加载Loading开始
$(document).ready(function(e) {
	var photos_urls = [
	'images/01/background0.png',
    'images/01/biaoti.png',
    'images/01/binblue.png',
    'images/01/bingreen.png',
    'images/01/binred.png',
    'images/01/binyellow.png',
    'images/01/binyellow01.png',
    'images/01/binblue01.png',
    'images/01/bingreen01.png',
    'images/01/binred01.png',
    'images/01/jiaoguan.png',
    'images/01/jihe.png',
	'images/02/bgYellow.png',
	'images/02/bgBlue.png',
	'images/02/bgRed.png',
	'images/02/bgGreen.png',
	'images/02/standYellow.png',
	'images/02/standBlue.png',
	'images/02/standRed.png',
	'images/02/standGreen.png',
	'images/02/jingYellow.png',
	'images/02/jingBlue.png',
	'images/02/jingRed.png',
	'images/02/jingGreen.png',
	'images/02/btnReturn.png',
	'images/02/btnChaKan.png',
	'images/cursor.png'
  	];

new preLoader(photos_urls, {
		onProgress: function(){
		  var percent = Math.floor((100 / this.queue.length) * this.completed.length);
          $('.percentShow').text('Loading '+ percent + '%');
          if(percent==100){$('.percentShow').css('display','none')} 
		},
   
		onComplete: function(){
	
	$('<audio id="chatAudio1" preload="auto"><source src="collection.mp3" type="audio/mpeg"></audio>').appendTo('body');
    $('<audio id="chatAudio" preload="auto" loop="loop"><source src="foot.mp3" type="audio/mpeg"></audio>').appendTo('body');
    
   //首页元素顺序出现；
    setTimeout(function(){
        $('.para2_master').css('display','block');   
        $('.para3_title').css('display','block');
        $('#chatAudio1')[0].play();

    },50)
    setTimeout(function(){
        $('.para4_call').css('display','block');   
    },260)
    setTimeout(function(){
        $('.para_soldier1').css('display','block');
        setTimeout(function(){$('#chatAudio')[0].play();},5000);
        
    },800)
    setTimeout(function(){
        $('.para_soldier2').css('display','block');   
    },1300)
    
    setTimeout(function(){
        $('.para_soldier3').css('display','block');
    },1800)
    
    setTimeout(function(){
        $('.para_soldier4').css('display','block');
    },2300)
    
    setTimeout(function(){
        $('.moveArrow').css('display','block');
    },2800)
    //箭头闪动及移动；
    var flick_time=2800;
    var move_position=80;
    function moveArrow_left_flick(){
        setTimeout(function(){$('.moveArrow').css('display','none')},flick_time+400)
        setTimeout(function(){
            $('.moveArrow').css('display','block');
             move_position=move_position+100;
            $('.moveArrow').animate({left:move_position+'px'},700)
        },flick_time+800)  
         flick_time=flick_time+1200;
       
    }
     function moveArrow_right_flick(){
        setTimeout(function(){$('.moveArrow').css('display','none')},flick_time+400)
        setTimeout(function(){
            $('.moveArrow').css('display','block');
             move_position=move_position-100;
            $('.moveArrow').animate({left:move_position+'px'},700)
        },flick_time+800)
         flick_time=flick_time+1200;
       
    }
    setInterval(function(){
        moveArrow_left_flick();
        moveArrow_left_flick();
        moveArrow_left_flick();
        moveArrow_right_flick();
        moveArrow_right_flick();
        moveArrow_right_flick();
    },10)
    //士兵按钮绑定；
     $('.para_soldier1').bind('click',function(){
        $('.para_soldier1').css('background-image','url(images/01/bingreen01.png');
        $('.qPage1').fadeOut(800);
			setTimeout(function(){
			$('.qPage2').fadeIn(500);
		},500);
		qPage2_div_init();
		$('.qPage2 .div4').show();
		qPage2_div4_ren_paly();
     })
     $('.para_soldier2').bind('click',function(){
        $('.para_soldier2').css('background-image','url(images/01/binblue01.png');
        $('.qPage1').fadeOut(800);
			setTimeout(function(){
			$('.qPage2').fadeIn(500);
		},500);
		qPage2_div_init();
		$('.qPage2 .div3').show();
		qPage2_div3_ren_paly();
     })
     $('.para_soldier3').bind('click',function(){
        $('.para_soldier3').css('background-image','url(images/01/binyellow01.png');
        $('.qPage1').fadeOut(800);
			setTimeout(function(){
			$('.qPage2').fadeIn(500);
		},500);
		qPage2_div_init();
		$('.qPage2 .div1').show();
		qPage2_div1_ren_paly();
     })
     $('.para_soldier4').bind('click',function(){
        $('.para_soldier4').css('background-image','url(images/01/binred01.png');
        $('.qPage1').fadeOut(800);
			setTimeout(function(){
			$('.qPage2').fadeIn(500);
		},500);
		qPage2_div_init();
		$('.qPage2 .div2').show();
		qPage2_div2_ren_paly();
		
     })


//qPage2 to qPage1
$('.qPage2 .back').bind('click',function(e){
		$('.qPage2').fadeOut(500);
			setTimeout(function(){
			$('.qPage1').fadeIn(500);
		},500);
	});

//qPage2 to qPage3 div1
$('.qPage2 .div1 .chakan').bind('click',function(e){
		$('.qPage2').fadeOut(500);
			setTimeout(function(){
			$('.qPage3').fadeIn(500);
		},500);
		$('#chatAudio')[0].pause();
		qPage3_div_init();
		$('.qPage3 .div1').show();
	});

//qPage2 to qPage3 div2
$('.qPage2 .div2 .chakan').bind('click',function(e){
		$('.qPage2').fadeOut(500);
			setTimeout(function(){
			$('.qPage3').fadeIn(500);
		},500);
		$('#chatAudio')[0].pause();
		qPage3_div_init();
		$('.qPage3 .div2').show();
	});

//qPage2 to qPage3 div3
$('.qPage2 .div3 .chakan').bind('click',function(e){
		$('.qPage2').fadeOut(500);
			setTimeout(function(){
			$('.qPage3').fadeIn(500);
		},500);
		$('#chatAudio')[0].pause();
		qPage3_div_init();
		$('.qPage3 .div3').show();
	});

//qPage2 to qPage3 div4
$('.qPage2 .div4 .chakan').bind('click',function(e){
		$('.qPage2').fadeOut(500);
			setTimeout(function(){
			$('.qPage3').fadeIn(500);
		},500);
		$('#chatAudio')[0].pause();
		qPage3_div_init();
		$('.qPage3 .div4').show();
	});

//qPage3 to qPage2 div1
$('.qPage3 .div1 .back').bind('click',function(e){
		$('.qPage3').fadeOut(500);
			setTimeout(function(){
			$('.qPage2').fadeIn(500);
		},500);
		qPage2_div_init();
		$('.qPage2 .div1').show();
		qPage2_div1_ren_paly();
	});

//qPage3 to qPage2 div2
$('.qPage3 .div2 .back').bind('click',function(e){
		$('.qPage3').fadeOut(500);
			setTimeout(function(){
			$('.qPage2').fadeIn(500);
		},500);
		qPage2_div_init();
		$('.qPage2 .div2').show();
		qPage2_div2_ren_paly();
	});

//qPage3 to qPage2 div3
$('.qPage3 .div3 .back').bind('click',function(e){
		$('.qPage3').fadeOut(500);
			setTimeout(function(){
			$('.qPage2').fadeIn(500);
		},500);
		qPage2_div_init();
		$('.qPage2 .div3').show();
		qPage2_div3_ren_paly();
	});

//qPage3 to qPage2 div4
$('.qPage3 .div4 .back').bind('click',function(e){
		$('.qPage3').fadeOut(500);
			setTimeout(function(){
			$('.qPage2').fadeIn(500);
		},500);
		qPage2_div_init();
		$('.qPage2 .div4').show();
		qPage2_div4_ren_paly();
	});

//qPage3 to #
$('.qPage3 .div1 .chakan').bind('click',function(e){
		$('.qPage3').fadeOut(500);
		window.location.href="#"
	});

//qPage3 to #
$('.qPage3 .div2 .chakan').bind('click',function(e){
		$('.qPage3').fadeOut(500);
		window.location.href="#"
	});

//qPage3 to #
$('.qPage3 .div3 .chakan').bind('click',function(e){
		$('.qPage3').fadeOut(500);
		window.location.href="#"
	});

//qPage3 to #
$('.qPage3 .div4 .chakan').bind('click',function(e){
		$('.qPage3').fadeOut(500);
		window.location.href="#"
	});

//qPage2 ren 动画 start
var qPage2_div1_ren_paly_Inter;
function qPage2_div1_ren_paly(){
	qPage2_div1_ren_paly_Inter=setInterval(function(){
		$('.qPage2 .div1 .ren').css('background-image','url(images/02/jingYellow.png)');
		setTimeout(function(){
			$('.qPage2 .div1 .ren').css('background-image','url(images/02/standYellow.png)');
		},700);
	},1400);
	$('#chatAudio')[0].play();
	
}

var qPage2_div2_ren_paly_Inter;
function qPage2_div2_ren_paly(){
	qPage2_div2_ren_paly_Inter=setInterval(function(){
		$('.qPage2 .div2 .ren').css('background-image','url(images/02/jingRed.png)');
		setTimeout(function(){
			$('.qPage2 .div2 .ren').css('background-image','url(images/02/standRed.png)');
		},700);
	},1400);
	$('#chatAudio')[0].play();
	
}


var qPage2_div3_ren_paly_Inter;
function qPage2_div3_ren_paly(){
	qPage2_div3_ren_paly_Inter=setInterval(function(){
		$('.qPage2 .div3 .ren').css('background-image','url(images/02/jingBlue.png)');
		setTimeout(function(){
			$('.qPage2 .div3 .ren').css('background-image','url(images/02/standBlue.png)');
		},700);
	},1400);
	$('#chatAudio')[0].play();
	
}

var qPage2_div4_ren_paly_Inter;
function qPage2_div4_ren_paly(){
	qPage2_div4_ren_paly_Inter=setInterval(function(){
		$('.qPage2 .div4 .ren').css('background-image','url(images/02/jingGreen.png)');
		setTimeout(function(){
			$('.qPage2 .div4 .ren').css('background-image','url(images/02/standGreen.png)');
		},700);
	},1400);
	$('#chatAudio')[0].play();
}

//end qPage2 ren 动画 start

//qPage2 初始化 strat
function qPage2_div_init(){
	$('.qPage2 .div1').hide();
	$('.qPage2 .div2').hide();
	$('.qPage2 .div3').hide();
	$('.qPage2 .div4').hide();
}
//qPage2 初始化 end

//qPage3 初始化 strat
function qPage3_div_init(){
	$('.qPage3 .div1').hide();
	$('.qPage3 .div2').hide();
	$('.qPage3 .div3').hide();
	$('.qPage3 .div4').hide();
}
//qPage3 初始化 send

// 加载Loading结束


//############################################设置页面宽度
function setWidth(uiWidth){
    var setDensitydpi = function(spec){
        var dpr = window.devicePixelRatio,
            deviceWidth = 0,
            getTargetDensitydpi = 0,
            temContent = "";
        deviceWidth = dpr == 2 ? 720 : ( dpr == 1.5 ? 480 : ( dpr == 1 ? 320 : 240 ) );
        getTargetDensitydpi = uiWidth / deviceWidth * dpr * 160;
        temContent = 'target-densitydpi=' + getTargetDensitydpi + ', width=device-width , user-scalable=no' ;
        return temContent;
    };
    var setDeviceWidth = function(){
        return 'target-densitydpi=device-dpi, width='+uiWidth +', user-scalable=no,minimal-ui';
    };
    var vp = document.createElement("meta");
    vp.setAttribute("name","viewport");
    var vpContent = "";
    var ua = navigator.userAgent;
    vpContent = setDeviceWidth();
    ( /Android/i.test(ua) && /(2\.[1|2|3]\.[\d])/i.test(ua) ) && ( vpContent = setDensitydpi() );
    vp.setAttribute( 'content', vpContent);
    document.getElementsByTagName('head')[0].appendChild(vp);
	}
	setWidth(640);
}})
})