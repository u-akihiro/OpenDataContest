var KyotoSimpleView = function() {
    this.el = null;
};

KyotoSimpleView.prototype.setElement = function(el) {
    this.el = el;
};

/**
 * 
 * @param {Object} datas
 */
KyotoSimpleView.prototype.render = function(datas) {
    if(!$.isPlainObject(datas)) return false;
    var html = this._htmlFactory(datas, '_listHtml');
    this.el.list.html(html);
    this.el.list.collapsibleset('refresh');
};

/**
 * 
 * @param {Object} datas
 */
KyotoSimpleView.prototype.append = function(datas) {
    if(!$.isPlainObject(datas)) return false;
    var html = this._htmlFactory(datas, '_listHtml');
    this.el.list.append(html);
    this.el.list.collapsibleset('refresh');
};

/**
 * 
 * @param {Object} urnData
 */
KyotoSimpleView.prototype._listHtml = function(urnData) {
    var result = '';
    result += '<h3>' + urnData['http://smartercity.jp/ug#title'][0]['value']+ '</h3>';
    result += '<p>areeeeeee</p>';
    return result;
};

/**
 * 
 * @param {Object} datas
 * @param {String} methodName
 */
KyotoSimpleView.prototype._htmlFactory = function(datas, methodName) {
    var result = '';
    for(var i = 0; i < datas.places.length; i++) {
        result += '<div data-role="collapsible">';
        for(var key in datas.places[i]) result += this[methodName](datas.places[i][key]);
        result += '</div>';
    }
    return result;
}