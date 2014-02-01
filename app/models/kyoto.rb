class Kyoto < ActiveRecord::Base
#$USERNAME = "akihiro.uesaka";
#$PASSWORD = "fZua0q_4K";

  USERNAME = "akihiro.uesaka"
  PASSWORD = "fZua0q_4K"
  BASE_URL = "https://kyoto.smartercity.jp/api/v1/places?rdf_type="

  #取得するRDFを指定
  rdf_types = [
    "ugx_PrefectureGovernmentOffice",
    "ugx_CityGovernmentOffice",
    "ugx_WardOffice",
    "ugx_BranchGovernmentOffice",
    "ugx_Hotel",
    "ugx_Souvenirs",
    "ugx_Cookshop", #飲食店
    "ugx_Sightseeing", #観光
    "ugx_ReligiousFacility"
  ]
  
  # APIからデータを取得する。
  def self.fetch(param)
    begin 
        # basic 認証
        httpClient.set_auth(BASE_URL + param, USERNAME, PASSWORD)
        # out request
        data = httpClient.get_content(BASE_URL)
    rescue HTTPClient::BadResponseError => e
    rescue HTTPClient::TimeoutError => e
    end
    return JSON.parse data
  end

end