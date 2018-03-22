/**
 * Created by Queen on 2018/3/21.
 */
requirejs.config({
    paths: {
        jquery: 'js/jquery-3.2.1'
    }
});
define(['jquery'], function ($) {
    function Dialog(){

    }
    Dialog.prototype.open = function(){

    };
    return Dialog;
})