//听歌控件
var palyW = $("body");
var palyWbtn = $('<div id="M_Paly"></div>');
var html = "<div class='panel panel-primary'><div class='panel-heading'><div class='playTitle'><section><small class='panel-title' >李胜昇@</small><div class='pull-right'><span class='glyphicon glyphicon-step-backward'></span>&nbsp;<span class='glyphicon glyphicon-play' id='Buttonplay'></span>&nbsp;<span class='glyphicon glyphicon-step-forward'></span></div></section></div></div> <div class='panel-body' ><div class='col-md-3'><img src='img/hero.png' alt='...' class='img-circle' ></div><div class='progress_top'><div class='music_time '><small class='frist'>0:00</small><small  class='last'></small></div><div class='progress'><div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuenow='90' aria-valuemin='60' aria-valuemax='100' ></div></div></div></div></div>";
palyWbtn.html(html);
palyW.append(palyWbtn);
palyWbtn.hide();
