//view
var HotSpringView = function() {};

HotSpringView.prototype = {
    render: function(items) {
        var html = '';
        console.log(items.Results);
        for(var i = 0; i < items.Results.Onsen.length; i++) {
           var item = items.Results.Onsen[i];
           html += '<div data-role="collapsible">';
           html += '<h3>'+item.OnsenAreaName+'</h3>';
           html += '<p>';
           for(var k in item) html += item[k] + '<br />';
           html += '</p>';
           html += '</div>';
        }
        $('#list').html(html);
        $('#list').collapsibleset('refresh');
    }
};

//model
var HotSpringModel = (function() {
    var HotSpringModel = function(view) {
         this.site = '/api/hotspring/';
         this.views = null;
    };

    HotSpringModel.prototype.fetch = function() {
        var self = this;
        console.log(this.site);
        $.get(this.site, function(json) {
            self.views['render'](json);
        });
    };

    /**
     * first load
     * @link views
     * @access public
     */
    // HotSpringModel.prototype.load = function() {
    //     KyotoSimpleModel.getFetch(this.views, 'render');
    // };

    /**
     *
     */
    // HotSpringModel.prototype.moreEvent = function() {
    //     var self = this;
    //     this.el.more.click(function() {
    //         KyotoSimpleModel.offsetUp();
    //         KyotoSimpleModel.postFetch(self.views, 'append');
    //     });
    // };

    /**
     * set view
     * @param {String} view
     */
    HotSpringModel.prototype.setView = function(view) {
        this.views = view;
        console.log(this.views);
    };

    return new HotSpringModel();

}());

$(document).ready(function() {
    HotSpringModel.setView(new HotSpringView());
    HotSpringModel.fetch();
});
