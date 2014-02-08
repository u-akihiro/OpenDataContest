# encoding: utf-8

=begin
 
  じゃらんAPIからデータを取得するモジュール  
 データを取得するときは[self.fetch]を使用し、
 パラメーターの設定等は[set_parameter]に追加する。

 ・パラメーターの説明
 # type 観光種類(公共とかいろいろ)
 # offset 取得位置 30件目から取得する等...
 # limit 取得件数 30件目から10件取得する等(30件目から40件目まで取得)

 ・Controllerから使用する時
 # KyotoHelper.fetch(type, #任意[offset])

=end

module HotspringHelper

  require "rexml/document"
  #XMLをPerseするライブラリ
  PASSWORD = "cap143ecd74693"
  #取得先
  BASE_URL = "http://jws.jalan.net/APICommon/OnsenSearch/V1/"
  #取得件数
  LIMIT = 10;

  # APIからデータを取得する。
  def self.fetch(params)
    httpClient = HTTPClient.new
    begin 
        # basic 認証
        #httpClient.set_auth(BASE_URL, USERNAME, PASSWORD)
        # get request
        data = httpClient.get_content(BASE_URL, params)
        return data
    rescue HTTPClient::BadResponseError => e
    rescue HTTPClient::TimeoutError => e
    end
  end
  
  def self.test_fetch
    httpClient = HTTPClient.new
    begin
      data = httpClient.get_content('https://dl.dropboxusercontent.com/u/16268979/json/jaran.json')
      return data
    rescue HTTPClient::BadResponseError => e
    rescue HTTPClient::TimeoutError => e
    end
  end

  #APIに送るパラメータをセットする。
  def self.set_parameter(offset = 0)
    params = {
      'key' => PASSWORD,
      'l_area' => '010300',
      'count' => 10,
      'xml_ptn' => 1
    }
    return params
  end

  # xmlをjsonに変換する
  def self.xml_to_json(xmls)
    doc = REXML::Document.new(xmls)
    hash = Hash.from_xml(doc.to_s)
    return hash.to_json
  end

end
