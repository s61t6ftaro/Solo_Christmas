window.onload = ChristmasDate;
let music = new Audio('audio/christmas.mp3');
function ChristmasDate() {
  // 現在日時を数値に変換
  let nowDate = new Date();
  let dnumNow = nowDate.getTime();

  // 指定日時を数値に変換
  let targetDate = new Date( 2021, 12-1, 25 );
    // 月の値は 1 を引く必要がある点に注意。(※1月は0、2月は1、……12月は11)
  let dnumTarget = targetDate.getTime();

  // 引き算して残日数を計算
  let diffMSec = dnumTarget - dnumNow;
  let diffDays = diffMSec / ( 1000 * 60 * 60 * 24 );
  // 小数点以下を切り上げる

  let showDays = Math.ceil( diffDays );
  if(showDays == 0){
    $("#christmasCount").html("MerryChristmas!!");
  }else{
    $("#christmasCount").html("ぼっちクリスマスまであと" + showDays + "日").css("color","black");
  }
}

// メニューバースライド
$(function() {
    $('#toggle').on('click', function() {
      $('body').toggleClass('is-open');
    });
});

// 画像のフェードアウト/イン
$(function() {				
  $("button").click(function(){
    music.play();
    $('.top_cake_img').fadeOut(3000,fade_out);
    function fade_out(){    
        $(".disap_cake_img").fadeIn(3000);
      }
    });
  });

$(function() {
    $('.reset').on('click', function() {
      $(".disap_cake_img").css("display","none");
      $(".top_cake_img").css("display","block");
        music.pause();
    });
});