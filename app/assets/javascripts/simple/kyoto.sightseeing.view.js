var KyotoSightseeingView = function(){
}

KyotoSightseeingView.prototype = new KyotoSimpleView();

KyotoSightseeingView.prototype._listHtml = function(item){
	var result = '';
	var parsed = {
		title: item['http://smartercity.jp/ug#title'] ? item['http://smartercity.jp/ug#title'][1]['value'] : '',
		address: item['http://smartercity.jp/ug#address'] ? item['http://smartercity.jp/ug#address'][0]['value'] : '',
		tel: item['http://smartercity.jp/ug#tel'] ? item['http://smartercity.jp/ug#tel'][0]['value'] : '',
		comment: item['http://www.w3.org/2000/01/rdf-schema#comment'] ? item['http://www.w3.org/2000/01/rdf-schema#comment'][0]['value'] : ''
	}

	result +=  '<h3>'+parsed['title']+'</h3>';
	result += '<p>';
	result += parsed['comment'];
	result += '住所: '+parsed['address']+'<br>';
	result += '電話番号: '+parsed['tel'];
	result += '</p>';
	return result
}
