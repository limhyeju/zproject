window.onload=function(){
    var userId=document.querySelector("#id");
    var pw1=document.querySelector("#password");
    var pw2=document.querySelector("#confirmPassword");
    var bir=document.querySelector("#birth");
    userId.onchange=checkId;
    pw1.onchange=checkPw;
    pw2.onchange=comparePw;
    bir.onchange=checkBir
    //아이디 자리수 체크 함수
    function checkId(){
        if(userId.value.indexOf("@")<0){
            alert("올바른 이메일 주소를 입력해주세요");
            userId.value="";
            userId.focus();
        }
    }
    //비밀번호 자리수 체크
    function checkPw(){
        if(pw1.value.length<8){
            alert("비밀번호는 8자리 이상 입력해주세요.");
            pw1.value="";
            pw1.focus();
        }
    }
    //비밀번호, 비밀번호 확인
    function comparePw(){
        if(pw1.value != pw2.value){
            alert("비밀번호가 일치하지않아요. 다시 입력해주세요");
            pw2.value="";
            pw2.focus();
        }
    }
    //생년월일 확인
    function checkBir(){
        if(bir.value.length<8){
            alert("올바른 생년월일을 입력해주세요");
            bir.value="";
            bir.focus();
        }
    }
    /*이용약관동의-전체약관동의 한꺼번에 클릭은 가능한데 다른 (필수)약관 동의가 체크 되어있을 경우 이상해짐 */
    /*$('#agreement').click(function(){
        $('#agreement1').trigger('click'); 
        $('#agreement2').trigger('click'); 
    });*/
    /*$('#agreement').click(function(){
        $('.agreeAll').trigger('click');  
    });*/
    //체크박스 함수
    $(function(){
        $('#agreement').click(function(){
            if($('#agreement').prop('checked')){
                $('.agrees input[type=checkbox]').prop('checked',true);
            }else{
                $('.agrees input[type=checkbox]').prop('checked',false);
            }
        });
        $('#agreement1').click(function(){
            if($('input[name=agreement11]:checked').length==2){
                $('#agreement').prop('checked',true);
            }else{
                $('#agreement').prop('checked',false);
            }
        });
        $('#agreement2').click(function(){
            if($('input[name=agreement11]:checked').length==2){
                $('#agreement').prop('checked',true);
            }else{
                $('#agreement').prop('checked',false);
            }
        });
    });
}