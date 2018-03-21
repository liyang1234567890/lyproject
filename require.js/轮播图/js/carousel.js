/**
 * Created by Queen on 2018/3/18.
 */
define(['jquery'],function($){
    function Carousel(){
        this.$container = $('<div class = "carousel-container"></div>');
        this.$imgs = $('<div class = "carousel-imgs"></div>');
        this.$nav = $('<div class ="carousel-nav"></div>');
        this.$arrows = $('<div class ="carousel-arrows"></div>');
        this.$prev = $('<span>&lt;</span>');
        this.$next = $('<span>&gt;</span>');
        this.defaultSettings = {
            imgArr:[],
            speed:1000,
            buttonStyle:'square',
            selector:document.body
        };
        this.nowIndex = 0;
        this.timer = null;
    }
    Carousel.prototype.init = function(settings){
        $.extend(this.defaultSettings, settings);
        this.arrows.append
    }
}
