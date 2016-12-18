$(function(){
	var timer;
	//点击头像；
	$('.author-img').on('click',function(){
		var dialog=$(this).parent().next();
		if(dialog.css('display')=='none'){
			dialog.css('display','block').addClass('dialog_animated');
		} else{
			dialog.addClass('dialog_animated_back');
			setTimeout(function(){
				dialog.css('display','none').removeClass('dialog_animated').removeClass('dialog_animated_back');
			},800);//与CSS3动画完成时间一致；
		}	
	})
	//首页轮播数据存储；
	var homeData={
		'wordLeft':['“ Design ”','每一秒的时差','始于求知'],
		'wordRight':['“ &lt;/Code&gt; ”','每一像素的执着','重于实践'],
		'imgSrc':['images/icon01.png','images/icon02.png','images/icon04.png'],
		'titleLeft':['【关乎产品】','【关乎体验】',' 【关乎初心】'],
		'titleRight':['【关乎质量】','【关乎细节】',' 【关乎成长】']
	};

	//fullpage插件定义start；
	$('#fullpage').fullpage({
		verticalCentered:true,
		resize:true,
		css3:true,
		anchors:["page1","page2","page3","page4","page5"],
		menu:'#menu',
		afterRender:function(){
			setData(0);
			startAnimate();
		},
		afterLoad: function(anchorLink, index){
			if(index==2){
				$('.slice').animate({height:'1em'},1500);
			}
			if(index==3){
				$('.experLeft_list>li').each(function(){
					$(this).animate({width:'100%'},1000);
				});
				$('.experRight_con').animate({opacity:1,marginLeft:'40%'},1000);
			}
			if(index==4){
				var wIndex=-1;
				$('.worker_block_descrip').each(function(){
					var _this=$(this);
					if(!_this.hasClass('worker_active')){
						wIndex++;
						setTimeout(function(){
							_this.addClass('worker_active');
						},200*wIndex);
					}
				})
			}
			if(index == 5){
    			var contact_list_li=$('.contact_list_li');
    			for(var i=0;i<contact_list_li.length;i++){
    				var removeIndex=0; //removeIndex与i的不一致现象；
    				contact_list_li.eq(i).addClass('bounceInLeft_0'+i).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      					$(this).removeClass('prepare').removeClass('bounceInLeft_0'+removeIndex);
      					removeIndex++;
    				});
    			}
			}
		},
		onLeave: function(index, direction){
			if(index==2){
				$('.slice').animate({height:'0'},500);
			}
			if(index==3){
				$('.experLeft_list>li').each(function(){
					$(this).animate({width:'0'},500);
				});
				$('.experRight_con').animate({opacity:0,marginLeft:'100%'},500);
			}
			if(index==4){
				$('.worker_block_descrip').removeClass('worker_active');
			}
			if(index == 5){
				$('.contact_list_li').addClass('prepare');
			}
		}
	});
	//fullpage插件定义end；

	//轮播点击功能；
	$('.home_slipPage_point').on('click',function(){
		$(this).addClass('home_slipPage_point_active').siblings().removeClass('home_slipPage_point_active');
		clearInterval(timer);
		clearActive();
		var index=$(this).index();
		setData(index);
		startAnimate();
	})
	//轮播动画准备；
	function startAnimate(){
		timer=setInterval(function(){
			clearActive();
			var index=$('.home_slipPage_point_active').index();
			index++;
			if(index==3){
				index=0;
			}
			$('.home_slipPage_point').eq(index).addClass('home_slipPage_point_active').siblings().removeClass('home_slipPage_point_active');
			setData(index);
		},4000);	
	}
	//替换轮播文本内容；
	function setData(i){
		$('.home_content_text').animate({opacity:'1',marginLeft:'0px'},500)
							   .html(homeData.wordLeft[i]);
		$('.home_content_text_R').animate({opacity:'1',marginLeft:'0px'},500)
			                     .html(homeData.wordRight[i]);
		$('.home_content_title').eq(0)
								.animate({opacity:'1',marginTop:'0px'},1000)
								.html(homeData.titleLeft[i]);
		$('.home_content_title').eq(1)
								.animate({opacity:'1',marginTop:'0px'},1000)
								.html(homeData.titleRight[i]);
		$('.home_content_center img').attr('src',homeData.imgSrc[i]);
	}
	//清除轮播动画；
	function clearActive(){
		$('.home_content_text').stop(true).css({'opacity':0,marginLeft:'-40px'});
		$('.home_content_text_R').stop(true).css({'opacity':0,marginLeft:'40px'});
		$('.home_content_title').stop(true).css({'opacity':0,marginTop:'80px'})
	}

	//技能条 功能；
	var rotationMultiplier = 3.6;
	$( "div[id$='circle']" ).each(function() {
		var classList = $( this ).attr('class').split(/\s+/);
		for (var i = 0; i < classList.length; i++) {
		   if (classList[i].match("^p")) {
			var rotationPercentage = classList[i].substring(1, classList[i].length);
			var rotationDegrees = rotationMultiplier*rotationPercentage;
			$('.c100.p'+rotationPercentage+ ' .bar').css({
			  '-webkit-transform' : 'rotate(' + rotationDegrees + 'deg)',
			  '-moz-transform'    : 'rotate(' + rotationDegrees + 'deg)',
			  '-ms-transform'     : 'rotate(' + rotationDegrees + 'deg)',
			  '-o-transform'      : 'rotate(' + rotationDegrees + 'deg)',
			  'transform'         : 'rotate(' + rotationDegrees + 'deg)'
			});
		   }
		}
	});

})

