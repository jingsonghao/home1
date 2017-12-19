window.onload=function(){


    //创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMapOverlay();//向地图添加覆盖物
    }
    function createMap(){
        map = new BMap.Map("map");
        map.centerAndZoom(new BMap.Point(117.6832220151,36.2193462195),13);
    }
    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.disableScrollWheelZoom();//禁用地图滚轮放大缩小，默认禁用(可不写)
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    function addClickHandler(target,window){
        target.addEventListener("click",function(){
            target.openInfoWindow(window);
        });
    }

    function addMapOverlay(){
        // 编写自定义函数,创建标注
        function addMarker(point){
            var marker = new BMap.Marker(point);
            map.addOverlay(marker);
        }
                  // 随机向地图添加25个标注
//                var bounds = map.getBounds();
//                var sw = bounds.getSouthWest();
//                var ne = bounds.getNorthEast();
//                var lngSpan = Math.abs(sw.lng - ne.lng);
//                var latSpan = Math.abs(ne.lat - sw.lat);
//                for (var i = 0; i < 25; i ++) {
//                    var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
//                    addMarker(point);
//                }
    };
    //向地图添加控件
    function addMapControl(){
        var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
        map.addControl(scaleControl);
        var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(navControl);
        var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
        map.addControl(overviewControl);
    }
    var map;
    initMap();

var box = document.getElementById("div1"),
				can = true;
			box.innerHTML += box.innerHTML;
			box.onmouseover = function() {
				can = false
			};
			box.onmouseout = function() {
				can = true
			};
			new function() {
				var stop = box.scrollTop % 64 == 0 && !can;
				if(!stop) box.scrollTop == parseInt(box.scrollHeight /2) ? box.scrollTop = 0 : box.scrollTop++;
				setTimeout(arguments.callee, box.scrollTop % 50 ? 50 :10);
			};

var box1 = document.getElementById("div2"),
				can = true;
			box1.innerHTML += box1.innerHTML;
			box1.onmouseover = function() {
				can = false
			};
			box1.onmouseout = function() {
				can = true
			};
			new function() {
				var stop = box1.scrollTop % 64 == 0 && !can;
				if(!stop) box1.scrollTop == parseInt(box1.scrollHeight /2) ? box1.scrollTop = 0 : box1.scrollTop++;
				setTimeout(arguments.callee, box1.scrollTop % 50 ? 50 :10);
			};

var box2 = document.getElementById("div3"),
				can = true;
			box2.innerHTML += box2.innerHTML;
			box2.onmouseover = function() {
				can = false
			};
			box2.onmouseout = function() {
				can = true
			};
			new function() {
				var stop = box2.scrollTop % 64 == 0 && !can;
				if(!stop) box2.scrollTop == parseInt(box2.scrollHeight /2) ? box2.scrollTop = 0 : box2.scrollTop++;
				setTimeout(arguments.callee, box2.scrollTop % 50 ? 50 :10);
			};

}
//选项卡的
$(function(){
    $(".tab-1 li").click(function(){
        var i=$(this).index()
        $(".tab").hide().eq(i).stop().show();
        $(".tab-1 li").removeClass("active-2").eq(i).addClass("active-2");

    })
 
//  悬浮框
    $("#frame-g").click(function(){
    	$(".frame-top").hide()
    	$(".ico-left").show()
    })
    $(".ico-left").click(function(){
    	$(".frame-top").show()
    	$(".ico-left").hide()
    	
    })
   
})


