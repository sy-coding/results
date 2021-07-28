$(function(){
    //browser
    var $body = $('body'),
        $userAgent = navigator.userAgent.toUpperCase(),
        $is_ie = navigator.appName.match('Microsoft Internet Explorer'),
        $is_ie6 = $userAgent.indexOf('MSIE 6') > -1 && $userAgent.indexOf('TRIDENT') == -1,
        $is_ie7 = $userAgent.indexOf('MSIE 7') > -1 && $userAgent.indexOf('TRIDENT') == -1,
        $is_ie8 = $userAgent.indexOf('MSIE 8') > -1,
        $is_ie9 = $userAgent.indexOf('MSIE 9') > -1,
        $is_ie10 = $userAgent.indexOf('MSIE 10') > -1,
        $is_ie11 = $userAgent.match(/(Trident\/7.0)(?:.*rv:11.0)/),
        $is_ie_competView =  $userAgent.indexOf('MSIE 7') > -1 && $userAgent.indexOf('TRIDENT') > -1,
        $old_browser = '<div class="old_browser">' +
                       '<p>사용 중이신 브라우저는 오래된 버전의 브라우저이기에 보안 및 성능 문제가 있습니다. <a href="http://browsehappy.com/" target="_blank" title="새 창">브라우저를 업그레이드</a> 하시면 보다 빠르고 안전하게 웹을 이용하실 수 있습니다. </p>' +
                       '<p>새로운 브라우저 설치가 부담스러우시면 <a href="http://www.google.com/chromeframe/?redirect=true" target="_blank" title="새 창"> 구글 크롬프레임</a>을 설치해보세요.현재 브라우저를 그대로 쓰시되, 속도와 안정성을 향상 시킬 수 있습니다.</p>' +
                       '</div>';

    function addAgent(e){$body.addClass(e);}
    if($is_ie7||$is_ie6){$body.html($old_browser);}
    else if ($is_ie8){addAgent('ie8');}
    else if ($is_ie9){addAgent('ie9');}
    else if ($is_ie10){addAgent('ie10');}
    else if ($is_ie11){addAgent('ie11');}
    else if ($is_ie_competView){addAgent('ie_cv');}
    else if (!$is_ie){
        var $vendor = navigator.vendor.toUpperCase(),
            $is_op = $vendor.indexOf('OPERA')>-1,
            $is_ch = $userAgent.indexOf('CHROME')>-1,
            $is_sf = $userAgent.indexOf('APPLE')>-1,
            $is_ff = $userAgent.indexOf('FIREFOX') > -1;
        if($is_op){addAgent('op');}
        else if ($is_ch){addAgent('ch');}
        else if ($is_sf){addAgent('sf');}
        else if ($is_ff){addAgent('ff');}
    }//browser

     //tab
    var $dt = $("dl").find('dt'),
        $dd = $("dd");
    for (var i = 0; i < $dt.length; i++) {
        $dt.eq(i).on('click focus', function() {
            $dt.removeClass("on");
            $dd.removeClass("on");
            $(this).toggleClass("on");
            $(this).next("dd").toggleClass("on");
        });
    };

    $dt.eq(0).addClass("on").next($dd).addClass("on");

    //menu on off
    var $menu_01 = $(".page+dd>ul>li>a");
    for (var i = 0; i < $menu_01.length; i++) {
        $menu_01.eq(i).on('click', function() {
            $(this).parent().toggleClass("on").focus().siblings().removeClass("on");
        });
    };
    var $menu_02 = $(".page+dd>ul>li>ul>li>a");
    $menu_02.next("ul").hide();
    for (var i = 0; i < $menu_02.length; i++) {
        $menu_02.on("click focus",function(){
            $menu_02.next("ul").hide();
            $(this).next("ul").show();
        });
    };
    //link
    var $a_link = $("a");
    for (var i = 0; i < $a_link.length; i++) {
        var $a_href = $a_link.eq(i).attr("href"),
            $a = $a_link.eq(i);
        if($a_href){
            var $a_split = $a.attr("href").split("/"),
                $a_split_last = ($a_split.length)-1,
                // $a_name = "<span>" + $a_split[$a_split_last - 1] + " / " + $a_split[$a_split_last] + "</span>",
                $a_new = $a.clone(),
                $new_win = $a_new.attr({target:"_blank",tabIndex:"-1", class:"new"}).text("[새창]");
                $a.attr("target", "mainFrame");

                if ($a.parents('dd').prev('dt').hasClass('guide')){
                    $a.prepend("<span>" + $a_split[$a_split_last] + "</span>");
                }else{
                    $a.append("<span>" + $a_split[$a_split_last - 2] + " / " + $a_split[$a_split_last - 1] + " / " + $a_split[$a_split_last] + "</span>");
                }
            $a_new.insertAfter($a);
            $a.on('click focus', function(){
                var $url = $(this).attr("href");
                parent.mainFrame.location.href = $url;
                $a_link.removeClass("on");
                $(this).addClass("on");
            });
        }else{
            $a.attr("href","#none");
        };
    };
    var $now = new Date();
    var $year = String($now.getYear());
    var $year_ = $year.substring(1);
    var $month = $now.getMonth()+1;
    var $date = $now.getDate();
    if($date<10){
        var $date_ = "0"+$date;
    }else{
        var $date_=$date;
    }
    var $today = $year_+""+$month+""+$date_;
    var $day_done = $('a+div>span:first-child');
    var $day_modi = $('a+div>span+span');
    for (var i = 0; i < $day_done.length; i++) {
        $day_ = $day_done.eq(i).text();
        if($day_ == $today){
            $day_done.eq(i).addClass('today');
            $day_done.eq(i).parents('li').find('.dep_01').addClass('done')
        }
    }
    for (var i = 0; i < $day_modi.length; i++) {
        $day_ = $day_modi.eq(i).text();
        if($day_ == $today){
            $day_modi.eq(i).addClass('today');
            $day_done.eq(i).parents('li').find('.dep_01').addClass('modi')
        }
    }
});
