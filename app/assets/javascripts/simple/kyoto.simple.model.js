var KyotoSimpleModel = (function() {
    
    var KyotoSimpleModel = function() {
        this.site = '/api/' + $('#params').val();
        this.offset = 0;
        this.LIMIT = 10;
    };
    
    /**
     * 京都APIからデータを取得し、viewにデータを渡す。
     * @param {number} offset
     * @param {Object} views
     * @param {string} viewMethodName
     */
    KyotoSimpleModel.prototype.getFetch = function(views, viewMethodName) {
        $.get(this.site, function(json) {
            for(view in views) views[view][viewMethodName](json);
        }, 'JSON');
    };

    /**
     * 京都APIからデータを取得し、viewにデータを渡す。
     * パラメーターの引渡しは [ POST ]
     * @param {number} offset
     * @param {Object} views
     * @param {string} viewMethodName
     */    
    KyotoSimpleModel.prototype.postFetch = function(views, viewMethodName) {
        var params = {offset: this.offset};
        $.post(this.site, params, function(json) {
            for(view in views) view[viewMethodName](json);
        }, 'JSON');
    };
    
    /**
     * 取得位置をアップさせる。
     * アップする比率はLIMITに比例する。 
     */
    KyotoSimpleModel.prototype.offsetUp = function() {
        this.offset += this.LIMIT;  
    };
    
    return new KyotoSimpleModel();
    
}());