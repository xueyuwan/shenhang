var a=0;
var b=0;
var b1=true;var b2=true;var b3=true;
var $liPage;
var now = { row:1, col:1 }, last = { row:0, col:0};
const towards = { up:1, right:2, down:3, left:4};
var isAnimating = false;
window.onload=function(){
	$(".loading").hide();
	$("#music").click(function(){
		if($(this).attr("class")=="play"){
			$(this).removeClass().addClass("pause");
			$("#myMusic")[0].play();
			$(".audio").addClass("Rot");
		}else if($(this).attr("class")=="pause"){
			$(this).removeClass().addClass("play");
			$("#myMusic")[0].pause();
			$(".audio").removeClass("Rot");
		}
		
	
	
	})			
	//三页切换
	$(document).swipe( {
		swipe:function(e,direction) {
			switch (direction){
				case "up":
					if (isAnimating) return;
					last.row = now.row;
					last.col = now.col;
					if (last.row !=6) { now.row = last.row+1; now.col = 1; pageMove(towards.up);}
				break;
				case "down":
					if (isAnimating) return;
					last.row = now.row;
					last.col = now.col;
					if (last.row!=1) { now.row = last.row-1; now.col = 1; pageMove(towards.down);}
			}
		}
	});
	/*$(".p4-2").on("touchstart",function(){
		$(".p4-12").addClass("mogu");
		$(".p4-7").hide();
		if(b1){
			b+=1;
			b1=false;
		}
		if(b==3){
			$(".p4-5").addClass("peo");
			$(".p4-12,.p4-11,.p4-10").removeClass("mogu");
			$(".p4-13").removeClass("fadeInDown").addClass("fadeOutDown");
			$(".p4-14").removeClass("hides").addClass("fadeInDown");
		}
	})
	$(".p4-3").on("touchstart",function(){
		$(".p4-10").addClass("mogu");
		$(".p4-9").hide();
		if(b2){
			b+=1;
			b2=false;
		}
		if(b==3){
			$(".p4-5").addClass("peo");
			$(".p4-12,.p4-11,.p4-10").removeClass("mogu");
			$(".p4-13").removeClass("fadeInDown").addClass("fadeOutDown");
			$(".p4-14").removeClass("hides").addClass("fadeInDown");
		}
	})
	$(".p4-6").on("touchstart",function(){
		$(".p4-11").addClass("mogu");
		$(".p4-8").hide();
		if(b3){
			b+=1;
			b3=false;
		}
		if(b==3){
			$(".p4-5").addClass("peo");
			$(".p4-12,.p4-11,.p4-10").removeClass("mogu");
			$(".p4-13").removeClass("fadeInDown").addClass("fadeOutDown");
			$(".p4-14").removeClass("hides").addClass("fadeInDown");
		}
	})*/
	$(".p2-2").on("touchstart",function(){
		$(".p2-3").removeClass("p2-3Ani").addClass("hides");
		$(this).removeClass("p2-2Ani").addClass("hinges");
		setTimeout(function(){
			$(".p2-1").removeClass("fadeInDown").addClass("fadeOutDown");
			$(".p2-4").removeClass("hides").addClass("fadeInDowns");
			$(".p2-5").removeClass("hides").addClass("fadeInUps");
		},2000)
	})
	$(".p4-7").on("touchstart",function(){
		$(this).addClass("hides");
		$(".p4-5").addClass("peo");
		$(".page-3-1").addClass("move");
		$(".p4-12,.p4-11,.p4-10").removeClass("mogu");
		$(".p4-13").removeClass("fadeInDown").addClass("fadeOutDown");
		$(".p4-14").removeClass("hides").addClass("fadeInDown");
	})         
};
//页面跳转
function pageMove(tw){
var lastPage = ".page-"+last.row+"-"+last.col,
	nowPage = ".page-"+now.row+"-"+now.col;
	b1=true;b2=true;b3=true;
	$(".p4-13").removeClass("fadeOutDown").addClass("fadeInDown");
	$(".p4-14").removeClass("fadeInDown").addClass("hides");
	$(".p4-5").removeClass("peo");
	b=0;
	
	$(".p2-3").removeClass("hides").addClass("p2-3Ani");
	$(".p2-2").removeClass("hinges").addClass("p2-2Ani");
	$(".p2-1").removeClass("fadeOutDown").addClass("fadeInDown");
	$(".p2-4").removeClass("fadeInDowns").addClass("hides");
	$(".p2-5").removeClass("fadeInUps").addClass("hides");
	
	$(".p4-7").addClass("hides");
	$(".p4-5").removeClass("peo");
	$(".p4-12,.p4-11,.p4-10").addClass("mogu");
	$(".p4-13").addClass("fadeInDown").removeClass("fadeOutDown");
	$(".p4-14").addClass("hides").removeClass("fadeInDown");
	switch(tw) {
		case towards.up:
			outClass = 'pt-page-moveToTop';
			inClass = 'pt-page-moveFromBottom';
			break;
		case towards.right:
			outClass = 'pt-page-moveToRight';
			inClass = 'pt-page-moveFromLeft';
			break;
		case towards.down:
			outClass = 'pt-page-moveToBottom';
			inClass = 'pt-page-moveFromTop';
			break;
		case towards.left:
			outClass = 'pt-page-moveToLeft';
			inClass = 'pt-page-moveFromRight';
			break;
	}
	isAnimating = true;
	$(nowPage).removeClass("hide");
	setTimeout(function(){
		$(lastPage).addClass(outClass);
		$(nowPage).addClass(inClass);
		setTimeout(function(){
			$(lastPage).removeClass(outClass);
			$(lastPage).addClass("hide");
			$(lastPage).find(">div:not(.footer)").addClass("hide");
			$(nowPage).addClass('page-current');
			$(lastPage).removeClass('page-current');
			$(nowPage).removeClass(inClass);
			$(".page-5-1").removeClass("move");
			$(".page-3-1").removeClass("move");
			$(nowPage).find(">div:not(.footer)").removeClass("hide");
			if(now.row==2){
				$(".p2-3").removeClass("hides").addClass("p2-3Ani");
				setTimeout(function(){
					$(".p2-2").removeClass("p2-2Ani");
				},2000)
			}else if(now.row==5){
				setTimeout(function(){
					$(".p9-8,.p9-7,.p9-6").removeClass("fadeInDown").addClass("flipInX");
					$(".p9-5").removeClass("fadeInDown").addClass("fadeOutDown");
					$(".p9-10,.p9-11").removeClass("hides").addClass("fadeInDown");
					$(".click").removeClass("hides");
				},3000)
			}else if(now.row==3){
				setTimeout(function(){
					$(".p4-7").removeClass("hides");
				},3000)
			}else if(now.row==4){
				setTimeout(function(){
					$(".p6-1").removeClass("fadeInLeft").addClass("fadeOutRights");
					$(".p6-2").removeClass("fadeInDown").addClass("fadeOutRights");
					$(".p4-10,.p4-11,.p4-12").addClass("mogu");
					setTimeout(function(){
						$(".p7-1,.p7-2,.p7-3").removeClass("hides");
					},1000)	
				},3000)
			}else{
				$(".p5-2").addClass("hides");
				$(".p2-2").removeClass("hinges").addClass("p2-2Ani");
				$(".p4-1").removeClass("fadeOutDown");
				$(".p9-8,.p9-7,.p9-6").removeClass("flipInX").addClass("fadeInDown");
				$(".p9-5").removeClass("fadeOutDown").addClass("fadeInDown");
				$(".p9-10,.p9-11").removeClass("fadeInDown").addClass("hides");
				$(".p4-7").addClass("hides");
				$(".p6-1").addClass("fadeInLeft").removeClass("fadeOutRights");
				$(".p6-2").addClass("fadeInDown").removeClass("fadeOutRights");
				$(".p7-1,.p7-2,.p7-3").addClass("hides");
				$(".click").addClass("hides");
			}
			isAnimating = false;
		},600);
	},100)
}


$(function(){
	$(".p8-1").click(function(){
		$(".page-5-1").addClass("move");
		$(".click").addClass("hides");
	})	
})


//js判断手机横竖屏判断
function orient() { 
	if (window.orientation == 90 || window.orientation == -90) { 
		$(".portrait").hide();
		$(".cover").show(); 
		$(".fe").hide();
    }
	else if (window.orientation == 0 || window.orientation == 180) { 
		$(".portrait").show();
		$(".cover").hide();
		$(".fe").show();
	}
}
	var timer;
	$(window).bind("orientationchange", function(){
		clearTimeout(timer);
		timer = setTimeout(orient, 300);
	});
orient();
