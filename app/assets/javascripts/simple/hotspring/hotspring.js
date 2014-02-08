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