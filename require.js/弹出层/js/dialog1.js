/**
 * Created by Queen on 2018/3/21.
 */
requirejs.config({
    paths:{
        jquery:'jquery-3.2.1'
    }
});
define(['jquery'],function($){
    // return{
    //     open: function(){
    //         alert(123);
    //     }
    // };
return{
        open:function(settings) {
            var defaultSettings = {
                width: 500,
                height: 400,
                tittle: '弹出层',
                content: ''
            };
            $.extend(defaultSettings, settings);
            var html = '<div class="dialog-container">'
                + '<div class="dialog-mask"></div> '
                + '<div class="dialog-box">'
                + '<div class="dialog-tittle">'
                + '<div class="dialog-name">' + defaultsettings.tittle + '</div>'
                + '<div class="dialog-close">[X]</div>'
                + '</div>'
                + '<div class="dialog-content"></div>'
                + '</div>'
                + '</div>';
            $(document.body).apppend(html);
            $('.dialog-box').css({
                width: defaultSettings.width,
                height: defaultSettings.height
            });
            if (defaultSettings.content.indexOf('.html') != -1) {//内容不为空
                $('.dialog-content').load(defaultSettings.content);
            } else {
                $('.dialog-content').html(defaultSettings.content);
            }
            $('.dialog-close').on('click', function(){
                // $('.dialog-container').remove();//X掉一个全都没了
                $(this).closest('.dialog-container').remove();//X掉一个没一个
            });
        }
    };
});