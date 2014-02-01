var KyotoSimpleController = function() {
    this.el = {
        list: $('#list'),
        more: $('#more')  
    };
    this.views = new Array();
    this.offset = 0;
};
    
/**
 * 初期ロード時
 * @link views 
 * @access public
 */
KyotoSimpleController.prototype.load = function() {
    KyotoSimpleModel.getFetch(this.views, 'render');
};

/**
 *  
 */
KyotoSimpleController.prototype.moreEvent = function() {
    var self = this;
    this.el.more.click(function() {
        KyotoSimpleModel.offsetUp();
        KyotoSimpleModel.postFetch(self.views, 'append');
    });
};
    
/**
 * viewをセットする。
 * @param {String} view
 */
KyotoSimpleController.prototype.setView = function(view) {
    view.setElement(this.el);
    this.views.push(view);
};