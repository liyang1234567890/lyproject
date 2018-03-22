/**
 * Created by Queen on 2018/3/21.
 */
requirejs.config({
    paths:{
        jquery:'jquery-3.2.1'
    }
});
 require(['jquery','dialog'],function($,Dialog){ //不是所有juery文件都能写在这里 要符合AMD规范
    $('#open').on('click',function(){
        var settings = {
            width:300,
            height:200,
            tittle:'注册',
            content:'reigist.html'
        };
        Dialog.open( settings);
       var d1 = new Dialog();
       d1.open();
       var d2 = new Dialog();
    });
});
