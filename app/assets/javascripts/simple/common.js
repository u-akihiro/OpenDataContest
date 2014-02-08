$(document).ready(function() {
    var kyotoSimpleController = new KyotoSimpleController();
    
    //kyotoSimpleController.setView(new KyotoSimpleView());
	if( $('#params').val() == "ugx_Cookshop" ) {
		kyotoSimpleController.setView(new KyotoSimpleView());
	} else if ( $('#params').val() == "ugx_Sightseeing" ) {
		kyotoSimpleController.setView(new KyotoSightseeingView());
	}
    kyotoSimpleController.load();
    kyotoSimpleController.moreEvent();

});
