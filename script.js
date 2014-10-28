$(function(){
  var clickCount = 1;

  $("#add-to-cart-button, #bb_atc_button").click(function(){
    if ( clickCount <= 10 ) {

      var alertText;

      if ( clickCount == 1 ) {
        var alertText = 'カートに入れるけど大丈夫？'
      }
      else if ( clickCount == 2 ) {
        var alertText = 'マジでカートに入れるけど、本当に大丈夫？'
      }
      else if ( clickCount == 3 ) {
        var alertText = 'このままだとカートに追加されちゃいますけど、ちょっと考え直した方がいいんじゃないですか。'
      }
      else if ( clickCount == 4 ) {
        var alertText = 'いやいやちょっと待ってや。ホンマにカートに入れるで？フリちゃうで？'
      }
      else if ( clickCount == 5 ) {
        var alertText = 'は？(威圧)'
      }
      else if ( clickCount == 6 ) {
        var alertText = 'そこまでしてこの商品欲しいんですか？'
      }
      else if ( clickCount == 7 ) {
        var alertText = '本当に欲しいの？家届いてからそれ使うの？一時の快楽を満たすためだけに買ってない？'
      }
      else if ( clickCount == 8 ) {
        var alertText = 'ダメみたいですね…(諦め)'
      }
      else if ( clickCount == 9 ) {
        var alertText = 'これで最後の警告だからな！マジで！マジで最後だし！'
      }
      else if ( clickCount == 10 ) {
        var alertText = 'その金で親にプレゼントでもあげろよ。'
      }

      alert(alertText);

      clickCount++;
      return false;
    }
  });
});