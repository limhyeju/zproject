/*첫번째 메인 콘텐츠 영역*/
/*메인 4계절 퍼스널 컬러 팔레트 슬라이더*/
$(function(){
    var index=0, tindex=0;
    moveSlider(index);
    tmoveSlider(tindex);
    //좌측 버튼 이벤트
    $('.left_control').click(function(){            
        if(index!=0){
            index--;
            moveSlider(index);
        }        
    });
    //우측 버튼 이벤트
    $('.right_control').click(function(){    
        if(index!=3){
            index++;
            moveSlider(index);
        }
    });
    $('.control_button').click(function(){
        tindex=$(this).index(); //처음 동그라미 클릭시 인덱스 0 들어와서 처음 그림, 두번째 동그라미 클릭 시 인덱스 1 들어와서 두번째 그림
        tmoveSlider(tindex);
   });
    //이미지 슬라이더 구현 함수
    function moveSlider(index){
        $('.mainSeasonArea_panel').animate({
            left: -(index*400)
        },'slow');
        $('.subSeasonArea_panel').animate({
            left: -(index*200)
        },'slow');
    }
    function tmoveSlider(index){
        $('.slider_panel').animate({
            left: -(index*960)
        },'slow');
        $('.control_button').removeClass('active'); //어떤 버튼 클릭할지 모름
        $('.control_button').eq(index).addClass('active');//내가 클릭한 그 클릭만
        $('.slider_text').hide();
        $('.slider_text').eq(index).fadeIn('slow');
   }
});

/* 잘못된 코딩
//첫번째 메인 콘텐츠 영역
//메인 4계절 퍼스널 컬러 팔레트 슬라이더
$(function(){
    var index=0;
    moveSlider(index);
    //좌측 버튼 이벤트
    $('.left_control').click(function(){
            index--;
            moveSlider(index);
    });
    //우측 버튼 이벤트
    $('.right_control').click(function(){    
            index++;
            moveSlider(index);
    });
    //이미지 슬라이더 구현 함수
    function moveSlider(index){
        if(index<3 && index>0){
            $('.right_control').fadeIn(500);
            $('.left_control').fadeIn(500);
        }
        if(index==3){
            $('.right_control').fadeOut(500); //버튼 사라지는게 아니라 더이상 클릭 못하게 막는 방법: off, stop, removeClass
        }
        if(index==0){
            $('.left_control').fadeOut(500); //버튼 사라지는게 아니라 더이상 클릭 못하게 막는 방법: off, stop, removeClass
        }
        $('.mainSeasonArea_panel').animate({
            left: -(index*400)
        },'slow');
    }
});
//서브 4계절 퍼스널 컬러 팔레트 콘텐츠
$(function(){
    var index=0;
    moveSlider(index);
    //좌측 버튼 이벤트
    $('.left_control').click(function(){
            index--;
            moveSlider(index);
    });
    //우측 버튼 이벤트
    $('.right_control').click(function(){    
            index++;
            moveSlider(index);
    });
    //이미지 슬라이더 구현 함수
    function moveSlider(index){
        if(index<3 && index>0){
            $('.right_control').fadeIn(500);
            $('.left_control').fadeIn(500);
        }
        if(index==3){
            $('.right_control').fadeOut(500); //버튼 사라지는게 아니라 더이상 클릭 못하게 막는 방법: off, stop, removeClass
        }
        if(index==0){
            $('.left_control').fadeOut(500); //버튼 사라지는게 아니라 더이상 클릭 못하게 막는 방법: off, stop, removeClass
        }
        $('.subSeasonArea_panel').animate({
            left: -(index*200)
        },'slow');
    }
});

//세번째 메인 콘텐츠 슬라이더 영역 시작
$(function(){
    var index=0;
    moveSlider(index);
    //컨트롤 버튼 이벤트
    $('.control_button').click(function(){
         index=$(this).index(); //처음 동그라미 클릭시 인덱스 0 들어와서 처음 그림, 두번째 동그라미 클릭 시 인덱스 1 들어와서 두번째 그림
         moveSlider(index);
    });
    //이미지 슬라이더 구현 함수
    function moveSlider(index){
         $('.slider_panel').animate({
             left: -(index*960)
         },'slow');
         $('.control_button').removeClass('active'); //어떤 버튼 클릭할지 모름
         $('.control_button').eq(index).addClass('active');//내가 클릭한 그 클릭만
         $('.slider_text').hide();
         $('.slider_text').eq(index).fadeIn('slow');
    }
 });
*/