function startgame() {
    $('#start-up h1').addClass('off');
    $('#start-up button.button').addClass('off');
    $('#heroselect').addClass('off');
    $('.herobar').rmClass('off');
    $('.herobar').rmClass('hide');
    $('.herobar').addClass('on');
    $('.ptsgain').rmClass('off');
    $('.ptsgain').rmClass('hide');
    $('.ptsgain').addClass('on');
    $('#gamezone').rmClass('off');
    if (sys.heroselect >  2)
        $('#herohpcd #heroablity').rmClass('off');
    else
        $('#herohpcd #heroablity').addClass('off');
    init();
}

function showcareer() {
    $('#careerwindow').rmClass('off');
    $('#careerwindow .menubar').rmClass('off');
    $('#careerwindow .menubar').rmClass('hide');
    $('#careerwindow article').addClass('off');
    $('#allheros').rmClass('off');
    $('#allheros').rmClass('hide');
    $('#allheros').addClass('current-career')
    $('#start-up h1').addClass('off');
    $('#start-up button.button').addClass('off');
    $('#heroselect').addClass('off');
    $('#careerwindow .contentwindow').rmClass('off');
}

function showhelp() {
    $('#helpwindow').rmClass('off');
    $('#helpwindow .menubar').rmClass('off');
    $('#helpwindow .menubar').rmClass('hide');
    $('#helpwindow .contentwindow').rmClass('off');
    $('#start-up h1').addClass('off');
    $('#start-up button.button').addClass('off');
    $('#heroselect').addClass('off')
}

function backtomenu() {
    $('#heroselect').rmClass('off');
    $('#start-up h1').rmClass('off');
    $('#start-up button.button').rmClass('off');
}
