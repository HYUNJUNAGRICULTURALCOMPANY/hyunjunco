var spot2 = $("header").offset().top;
$(".g_top").click(function () {
    $("html, body").animate({
        scrollTop: spot2
    }, 500);
});

$(document).ready(function () {
    $('.s_submit').click(function () {
        $('.terms').addClass('on')
        $('body').addClass('stopscroll')
    });
    $('.x').click(function () {
        $('.terms').removeClass('on')
        $('body').removeClass('stopscroll')
    });
});

//메일 보내기
$(function () {
    const btn = document.querySelector('.c_btn')
    const inputs = document.querySelector('.contents')
    btn.addEventListener('click', () => {
        Email.send({
            // Host: "smtp.google.com",
            // Username: "deajeonner91@gmail.com",
            // Password: "2emddlEK22!",
            SecureToken: "d8a2a1a2-b2a4-4c59-9047-354483fed1c5",
            To: "deajeonner91@gmail.com",
            From: inputs.elements["email"].value,
            Subject: "현준물산 컨택트 메일",
            Body: inputs.elements["name"].value + "<br>" + inputs.elements["rank"].value + "<br>" + inputs.elements["cname"].value + "<br>" + inputs.elements["department"].value + "<br>" + inputs.elements["p_num"].value + "<br>" + inputs.elements["title"].value + "<br>" + inputs.elements["story"].value
        }).then(msg => alert("빠른 시일 내에 정확한 답변을 드리겠습니다. 감사합니다."))
    });
});
