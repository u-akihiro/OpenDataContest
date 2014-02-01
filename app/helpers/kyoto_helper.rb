# encoding: utf-8

=begin
 
  京都APIからデータを取得するモジュール  
 データを取得するときは[self.fetch]を使用し、
 パラメーターの設定等は[set_parameter]に追加する。

 ・パラメーターの説明
 # type 観光種類(公共とかいろいろ)
 # offset 取得位置 30件目から取得する等...
 # limit 取得件数 30件目から10件取得する等(30件目から40件目まで取得)

 ・Controllerから使用する時
 # KyotoHelper.fetch(type, #任意[offset])

=end

module KyotoHelper
  
  USERNAME = "akihiro.uesaka"
  PASSWORD = "fZua0q_4K"
  #取得先
  BASE_URL = "https://kyoto.smartercity.jp/api/v1/places"
  #取得件数
  LIMIT = 10;

  # APIからデータを取得する。
  def self.fetch(params)
    httpClient = HTTPClient.new
    begin 
        # basic 認証
        httpClient.set_auth(BASE_URL, USERNAME, PASSWORD)
        # get request
        data = httpClient.get_content(BASE_URL, params)
        return JSON.parse data
    rescue HTTPClient::BadResponseError => e
    rescue HTTPClient::TimeoutError => e
    end
  end
  
  #APIに送るパラメータをセットする。
  def self.set_parameter(type, offset = 0)
    return {
      'rdf_type' => type,
      'offset' => offset,
      'limit' => LIMIT,
    }
  end

end
