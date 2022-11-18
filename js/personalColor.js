$(document).ready(function() {
    //검은줄
    $('#lineleft').animate({
            width: 485 
    },500);
    $('#lineright').animate({
        width: 485 
    },500);
    //2초마다 색깔바뀌는 랜덤배경
    var color;
    setInterval(function(){
        r=Math.floor(Math.random()*256);
        g=Math.floor(Math.random()*256);
        b=Math.floor(Math.random()*256);
        $('#color').css('background','rgb('+r+','+g+','+b+')')
    },1000);
    //첫번째 단락 왼쪽 원그래프, 오른쪽 직선그래프
    $('#pccscircle').animate({
        opacity: 1
    }, 1000, function(){
        $('#pccsgraph').animate({
            opacity: 1,
            left: 485 
        },500);
    });
    //두번째 단락 큰 사람, 작은 4명의 사람(맨 밑에 스크롤로 효과줌)
    /*$('#person>img').animate({
        opacity: 1
    }, 1000, function(){
        $('#smallperson').animate({
            opacity: 1,
            left: 470
    },500);
    $('#personscript').animate({
            opacity: 1,
            left: 480
        },500)
    });*/
    //두번째 단락 큰 사람, 작은 4명의 사람 클릭 시 연결
    var bigPic=document.querySelector("#person>img");
    var smallPic=document.querySelectorAll("#smallperson>img"); 
    for(var i=0; i<smallPic.length; i++){
        smallPic[i].onclick=showBig;
    }
    function showBig(){
        bigPic.src=this.src;
    }
    //세번째 단락 계절별 사람 설명 클릭 시 연결
    $(function(){
        var person=['spring', 'summer', 'autumn', 'winter']
        var index; 
        $('#smallperson>img').click(function(){
            index=$(this).index();
            $('.personseasons').attr('src', 'images/person_'+person[index]+'.png');
        });
    });
    //두번째 단락 큰 사람, 작은 4명의 사람 스크롤 효과
    $(window).scroll(function(){
        console.log($(window).scrollTop());//어떤 값이 어떻게 들어있는지 혹은 에러를 보여줌, 스크롤 내려서 얼만큼 내려갔는지 확인
        var scrollHeight=$(window).scrollTop()+$(window).height(); //.scrollTop()기본 0 =$(window).height() 내 윈도우 창 높이, 윈도우 창 최대로 키우면 디스플레이 해상도랑 같음
        var documnetHeight=$(document).height(); //$(document).height(); 웹문서의 높이
        if(scrollHeight >= documnetHeight-677){ 
            $('#person>img').animate({
                opacity: 1
            }, 1000, function(){
                $('#smallperson').animate({
                    opacity: 1,
                    left: 470
            },500);
            $('#personscript').animate({
                    opacity: 1,
                    left: 480
                },500)
            });
            
        }
    });

});
