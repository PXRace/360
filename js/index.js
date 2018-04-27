/**
 * Created by ziyang on 2018/4/18.
 */
$(function () {
    //调用全屏方法
    $("#fullpage").fullpage({
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        afterLoad: function (anchorLink, index) {
            $('.section').removeClass('current');
            // 延时100毫秒执行
            setTimeout(function () {
                $('.section').eq(index - 1).addClass('current');
            }, 100);
        }
    })
})