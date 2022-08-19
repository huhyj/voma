$(document).ready(function(){
    // intro
    $(".intro_wrap").click(function(){
        $(location).attr("href","../html/login.html");
    });

    // login
    $(".btn_kakao, .btn_naver").click(function(){
        $(location).attr("href","../html/main_home.html");
    });

    // header
        // main_home
        $(".wrapper").scroll(function(){
            if($(this).scrollTop() > 60){
                $(".header").addClass("on");
                // $(".footer").hide();
            }else{
                $(".header").removeClass("on");
                // $(".footer").show();
            }
        });

        // main_gallery
        $(".cnt2.cnt_gallery").scroll(function(){
            if($(this).scrollTop() > 386){
                $(".cnt_top").removeClass("bg_blue");
                $(".cnt_top").addClass("on");
            }else{
                $(".cnt_top").removeClass("on");
                $(".cnt_top").addClass("bg_blue");
            }
        });

        // sub_art_detail
        $(".cnt3.cnt_art").scroll(function(){
            if($(this).scrollTop() > 30){
                $(".cnt_top").addClass("on");
                $(".btn_share_wt").addClass('btn_share');
                $(".btn_share").removeClass('btn_share_wt');
                $(".btn_back_wt").addClass('btn_back');
                $(".btn_back").removeClass('btn_back_wt');
                $(".detail_top_tit").text('The path by the lake - Ben Voirlich');
            }else{
                $(".cnt_top").removeClass("on");
                $(".btn_share").addClass('btn_share_wt');
                $(".btn_share_wt").removeClass('btn_share');
                $(".btn_back").addClass('btn_back_wt');
                $(".btn_back_wt").removeClass('btn_back');
                $(".detail_top_tit").text('');
            }
        });

        // sub_interview_detail
        $(".cnt3.cnt_interview").scroll(function(){
            if($(this).scrollTop() > 30){
                $(".cnt_top").addClass("on");
                $(".detail_top_tit2").text('김준수의 식물 세계');
            }else{
                $(".cnt_top").removeClass("on");
                $(".detail_top_tit2").text('');
            }
        });

        // sub_showing_detail
        $(".cnt_showing").scroll(function(){
            if($(this).scrollTop() > 30){
                $(".cnt_top").addClass("on");
                $(".btn_share_wt").addClass('btn_share');
                $(".btn_share").removeClass('btn_share_wt');
                $(".btn_back_wt").addClass('btn_back');
                $(".btn_back").removeClass('btn_back_wt');
                $(".detail_top_tit3").text('ARTMINING SEOUL 주제 공모전-37MINING ARTIST 소개');
            }else{
                $(".cnt_top").removeClass("on");
                $(".btn_share").addClass('btn_share_wt');
                $(".btn_share_wt").removeClass('btn_share');
                $(".btn_back").addClass('btn_back_wt');
                $(".btn_back_wt").removeClass('btn_back');
                $(".detail_top_tit3").text('');
            }
        });

        // etc
        $(".cnt3, .cnt2, .cnt_shop").scroll(function(){
            if($(this).scrollTop() > 30){
                $(".cnt_top").addClass("on");
            }else{
                $(".cnt_top").removeClass("on");
            }
        });

    // swiper
    var mySwiper = new Swiper(".swiper-container1", {
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
        },
    });


    // 버튼 토클
    $(".btn_heart_off").click(function(){
        $(this).toggleClass("btn_heart_on");
    });

    $(".btn_like_off").click(function(){
        $(this).toggleClass("btn_like_on");
    });

    $(".btn_menu").click(function(){
        $(".btn_menu").removeClass('on');
        $(this).toggleClass('on');
    })


    // 통합검색
        // 입력유무에 따라 제거 버튼 show hide
        $(".input_area input").on('input', function(){
            if($(this).val() == ''){
                $(".input_area .btn_remove").hide();
                // cnt 변경
                $(".cnt_search_before").show();
                $(".cnt_search_ing").hide();
            }else{
                $(".input_area .btn_remove").show();
                // cnt 변경
                $(".cnt_search_before").hide();
                $(".cnt_search_ing").show();
            }
        });

        // 제거 버튼 클릭시 텍스트 사라짐
        $(".input_area .btn_remove").click(function(){
            $(".input_area input").val('');
            $(".input_area .btn_remove").hide();
        });

        // 검색아이콘 클릭시 검색결과창 보여짐
        $(".btn_search_bk").click(function(){
            $(".cnt_search_before").hide();
            $(".cnt_search_ing").hide();
            $(".cnt_search_after").show();
        });
        
        // 메뉴탭 클릭 이벤트
        $(".search_after_tab li").click(function(){
            $(".search_after_tab li").removeClass('on');
            $(this).addClass('on');
        });

    // 프로필
        // 입력유무에 따라 제거 버튼 show hide
        $(".input_area2 input").on("change keyup paste", function(){
            if($(this).val() == ''){
                $(this).next('button').hide();
            }else{
                $(this).next('button').show();
            }
        });

        // 제거 버튼 클릭시 텍스트 사라짐
        $(".input_area2_on .btn_remove").click(function(){
            $(this).prev('input').val('');
            $(this).hide();
        });        

        // 자기소개 150자 이상일때
        $(".pr_box textarea").keyup(function(e){
            var txt = $(this).val();
            if(txt.length > 150){
                $(".overChk").addClass('over');
                $(this).val($(this).val().substring(0, 150));
            }else{
                $(".overChk").removeClass('over');
            }
        });
    
    // 인터뷰
        // swiper
        var mySwiper = new Swiper(".swiper-container2", {
            slidesPerView: 1,
            pagination: {
              el: ".swiper-pagination",
            },
        });

    // 샵
        // 메뉴탭 클릭 이벤트
        $(".overflow_tab li").click(function(){
            $(".overflow_tab li").removeClass('on');
            $(this).addClass('on');
        });

    // 전시회
        // swiper
        var mySwiper = new Swiper(".swiper-container3", {
            slidesPerView: 1,
            pagination: {
              el: ".swiper-pagination",
            },
        });
        var mySwiper = new Swiper(".swiper-container4", {
            slidesPerView: 1,
            pagination: {
              el: ".swiper-pagination",
            },
        });

    // 작품 상세 정보
        // swiper
        var mySwiper = new Swiper(".swiper-container5", {
            slidesPerView: 1,
            pagination: {
            el: ".swiper-pagination",
            },
        });
    
    // 구매문의서
        // 약관동의 체크
        $(".agree_tit").click(function(){
            $(this).parent().next().toggle();
            $(this).children().toggleClass('change');
        });

        $(".btn_disagree").click(function(){
            $(this).toggleClass("btn_agree");
            
            if($(".list_ul5 .btn_agree").length == "2"){
                $(".footer_btn").addClass('bg_blue');
            }else{
                $(".footer_btn").removeClass('bg_blue');
            }
        });

    // My Favorite
        // 체크_편집
        $(".btn_chk_edit").click(function(){
            $(".list_chk_before").hide();
            $(".list_chk .btn_disagree").show();
            $(".list_chk_after").show();
        });

        // 체크_취소
        $(".btn_chk_cancel").click(function(){
            $(".list_chk_after").hide();
            $(".list_chk .btn_disagree").hide();
            $(".list_chk_before").show();
        });

        // 체크_갯수
        $(".list_chk .btn_disagree").click(function(){
            var list_num = $(".list_chk li").length;
            var btn_num = $(".list_chk .btn_agree").length;

            $(".list_chk_after strong span").html(btn_num + "개");
            if(list_num > btn_num){
                $(".list_chk_after .btn_disagree").removeClass('btn_agree');
            }else{
                $(".list_chk_after .btn_disagree").addClass('btn_agree');
            }
        });

        // 전체선택 체크
        $(".list_chk_after .btn_disagree").click(function(){
            var list_num = $(".list_chk li").length;
            var btn_num = $(".list_chk .btn_agree").length;

            if(list_num == btn_num){
                $(".list_chk .btn_disagree").removeClass('btn_agree');
                var btn_num = $(".list_chk .btn_agree").length;
                $(".list_chk_after strong span").html(btn_num + "개");
            }else if(btn_num == 0){
                $(".list_chk .btn_disagree").addClass('btn_agree');
                var btn_num = $(".list_chk .btn_agree").length;
                $(".list_chk_after strong span").html(btn_num + "개");
            }else{
                $(".list_chk .btn_disagree").removeClass('btn_agree');
                $(".list_chk .btn_disagree").addClass('btn_agree');
                var btn_num = $(".list_chk .btn_agree").length;
                $(".list_chk_after strong span").html(btn_num + "개");
            }
        });


    // In Game
        // 중앙 하단
        $(".btn_game_showhide").click(function(){
            $(this).toggleClass('hide');
            $(".cnt_center_bottom").toggleClass('hide');
        });

        // 컨트롤러
        $(".controler").click(function(){
            $(".cnt_left_top").toggleClass('on');
            $(".cnt_right_top").toggleClass('on');
            $(".controler").toggleClass('on');
        });

        // 갤러리 정보(임시)
        $(".btn_game_info").click(function(){
            $(".cnt_popup_info").show();
        });

        // 캡쳐
        $(".btn_game_camera").click(function(){
            $(".cnt_popup_camera").show();
            $(".btn_game_camera").css("z-index","999");
            setTimeout(popupHide, 800);
        });

        // 위시리스트
        $(".btn_game_wishlist").click(function(){
            $(".cnt_popup_wish").show();
        });

        // 공유
        $(".btn_game_share").click(function(){
            $(".cnt_popup_share").show();
        });

        // swiper
        var mySwiper = new Swiper(".swiper-container-popup", {
            slidesPerView: 1,
            loop : true,
            direction: 'horizontal',
            observer: true,
            observeParents: true,
            spaceBetween: 16,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
        });

});

// 뒤로가기
function goBack(){
    window.history.back();
}

// 팝업닫기
function popupClose(){
    $(".cnt_popup").hide();
}

// In Game-캡쳐
function popupHide(){
    $(".bg_popup_light").hide();
    $(".cnt_popup_camera").hide();
    $(".btn_game_camera").css("z-index","inherit");
}