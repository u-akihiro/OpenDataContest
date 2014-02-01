$(document).ready(function() {
    var kyotoSimpleController = new KyotoSimpleController();
    
    kyotoSimpleController.setView(new KyotoSimpleView());
    kyotoSimpleController.load();
    kyotoSimpleController.moreEvent();
    
});