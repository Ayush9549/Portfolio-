$(document).ready(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 550)
        {
        	$(".navbar-brand").css({display:"flex"});
        	$(".navbar").css({"background": "#07374a","transition": "background 1s ease 0s","box-shadow": "0 0 15px rgba(7,55,74,1)"});

        } 
        else 
        {
        	$(".navbar-brand").css({display:"none"});
        	$(".navbar").css({"background": "none","transition": "none","box-shadow": "none"});
        }

      });

    });

