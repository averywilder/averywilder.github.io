$(document).ready(function(){

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
  document.addEventListener('touchstart', this.touchstart);
  document.addEventListener('touchmove', this.touchmove);

  function touchstart(e) {
    e.preventDefault()
  }

  function touchmove(e) {
    e.preventDefault()
  }

})
