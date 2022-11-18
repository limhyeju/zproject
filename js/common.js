/*var name=prompt("이름을 입력해주세요");
    alert(name+"님, YOUR PERSONAL COLOR에 오신 것을 환영합니다.\n"+name+"님의 퍼스널컬러를 찾아보세요!");*/ 
    /*백엔드로 로그인 했을 때 한번만 뜨게 하는게 좋음(index.html에만 주고 로고(index copy.html)에 안줘도 로고 클릭해서 다시 들어가지 않는 한 예약방법 및 sns 클릭 후 되돌아가기만 해도 계속 뜸.)*/

/*비주얼 영역
$(function(){
$('#mainVisual .letter span:eq(0)').hover(function(){
    $(this).css('color','#FF0000')
}, function(){
    $(this).css('color','black');
});
$('#mainVisual .letter span:eq(1)').hover(function(){
    $(this).css('color','#FF36FF')
}, function(){
    $(this).css('color','black');
});
$('#mainVisual .letter span:eq(2)').hover(function(){
    $(this).css('color','#FF5E00')
}, function(){
    $(this).css('color','black');
});
$('#mainVisual .letter span:eq(3)').hover(function(){
    $(this).css('color','#FFE400')
}, function(){
    $(this).css('color','black');
});
$('#mainVisual .letter span:eq(4)').hover(function(){
    $(this).css('color','#00A500')
}, function(){
    $(this).css('color','black');
});
$('#mainVisual .letter span:eq(5)').hover(function(){
    $(this).css('color','#ABF200')
}, function(){
    $(this).css('color','black');
});
$('#mainVisual .letter span:eq(6)').hover(function(){
    $(this).css('color','#0054FF')
}, function(){
    $(this).css('color','black');
});
$('#mainVisual .letter span:eq(7)').hover(function(){
    $(this).css('color','#00D8FF')
}, function(){
    $(this).css('color','black');
});
$('#mainVisual .letter span:eq(8)').hover(function(){
    $(this).css('color','#5F00FF')
}, function(){
    $(this).css('color','black');
});
});*/

/*비주얼 영역*/
$(function(){
    var color=['#FF0000', '#FF36FF','#FF5E00', '#FFE400', '#00A500', '#ABF200','#0054FF', '#00D8FF', '#5F00FF'];
    var index;
    $('#mainVisual .letter span').hover(function(){
        index=$(this).index();
        $(this).css('color', color[index]);
    }, function(){
        $(this).css('color','black');  
    });//hover는 event 가지고 index 못가져서 for문 사용시 for문 실행해주지 않음, for문은 hover랑 상관없이 자기 혼자 배열 돌다가 다 돌면 빠져나옴. 따라서 index변수 만들어줘야 됨

    $('.dropdown').hover(function () { //슬라이드 다운했을 때 서브 메뉴 호버할 수 있도록 부모에다가 영역잡아줌
        $(this).find('.dropdown_content').stop(true, true).slideDown('narmal');
    }, function () {
        $(this).find('.dropdown_content').slideUp('narmal');
    });
}); 