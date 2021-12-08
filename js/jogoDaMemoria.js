let primeira = false;
let segunda = false;
$(document).find('[id^=click]').on('click', escolherCarta);
$(document).find('[id^=feedCerto]').hide();
$(document).find('[id^=feedErrado]').hide();

function escolherCarta(me) {
    $(document).find('[id^=feedCerto]').hide();
    $(document).find('[id^=feedErrado]').hide();
    if (!primeira || !segunda) {
        $('#' + me.currentTarget.id).hide();
    }

    if (!primeira) {
        primeira = me.currentTarget.id;
    } else if (primeira && !segunda) {
        segunda = me.currentTarget.id;
    }

    if (primeira && segunda) {
        if (primeira.split('_')[0] == segunda.split('_')[1]) {
            $(document).find('[id^=feedCerto]').show();
            primeira = false;
            segunda = false;
        } else {
            $(document).find('[id^=feedErrado]').show();
            setTimeout(() => {
                $('#' + primeira).show();
                $('#' + segunda).show();
                primeira = false;
                segunda = false;
            }, 900);

        }
    }
}