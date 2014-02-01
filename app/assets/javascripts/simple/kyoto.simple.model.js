var KyotoSimpleModel = (function() {
    
    var KyotoSimpleModel = function() {
        this.site = '/api/' + $('#params').val();
        this.offset = 0;
        this.LIMIT = 10;
    };
    
    /**
     * APIのデータリンク先をセットする
     * @param {String} url アドレス
     */
    KyotoSimpleModel.prototype.setSite = function(url) {
        this.site = url;
    };
    
    /**
     * 京都APIからデータを取得し、viewにデータを渡す。
     * @param {number} offset
     * @param {Object} views
     * @param {string} viewMethodName
     */
    KyotoSimpleModel.prototype.getFetch = function(views, viewMethodName) {
        var self = this;
        $.get(this.site, function(json) {
            self._fetchIncludeView(json, views, viewMethodName);
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
        var self = this;
        $.post(this.site, params, function(json) {
            self._fetchIncludeView(json, views, viewMethodName);
        }, 'JSON');
    };
    
    /**
     * 京都APIからFetchして来た情報をViewに渡す。
     * @param {object} json //ajaxで取得してきたデータ
     */
    KyotoSimpleModel.prototype._fetchIncludeView = function(json, views, viewMethodName) {
        if(!json.places.length) {
            alert('これ以上該当するデータはありません');
        } else {            
            for(view in views) views[view][viewMethodName](json);
        }
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