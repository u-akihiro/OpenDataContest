class HotspringController < ApplicationController

  def index
   render 'index'
  end

  def fetch
    # param = HotspringHelper.set_parameter()
    # @xml = HotspringHelper.fetch(param)
    @json = HotspringHelper.test_fetch
    # @json = HotspringHelper.xml_to_json(xml)
#    puts 'dd'
    puts @json
    render :json => @json
  end

  def detail
    @param = params[:rdf]
    render 'detail'
  end

end
