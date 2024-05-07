// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');
// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // .hamburgerの表示・非表示を繰り返す
if($('nav').hasClass('hamburger-menu-active')){
  hamburger.removeClass('hamburger-menu-active', 100);
}else{
  hamburger.addClass('hamburger-menu-active');
}
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});
// ハンバーガーメニューをクリックしたら
$('.hamburger-menu-list-group').on('click', function () {
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});
// タブ
$('#smarttab').smartTab({
  autoAdjustHeight: false,
  enableUrlHash: false // タブidにもとづいたURLハッシュの付与を無効
});