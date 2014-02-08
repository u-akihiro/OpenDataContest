var KyotoSightseeingView = function(){
}

KyotoSightseeingView.prototype._listHtml = function(item){
	var result = '';
	var parsed = {
		title: item['http://smartcity.jp/ug#title'] ? item['http://smartercity.jp/ug#title'][0]['value'] : '',
		address: item['http://smartcity.jp/ug#address'] ? item['http://smartcity.jp/ug#address'][0]['value'] : '',
		tel: item['http://smartcity.jp/ug#tel'] ? item['http://smartcity.jp/ug#address'][0]['value'] : '',
		comment: item['http://smartcity.jp/ug#comment'] ? item['http://smartcity.jp/ug#address'][0]['value'] : ''
	}

	result +=  '<h3>'+parsed['title']+'</h3>';
	result += '<p>';
	result += parsed['comment'];
	result += '住所: '+parsed['address'];
	result += '電話番号: '+parsed['tel'];
	result += '</p>';
	return result
}
