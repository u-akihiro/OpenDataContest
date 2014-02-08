class HotspringController < ApplicationController

  def index
    render 'index'
  end

  def fetch
    # param = HotspringHelper.set_parameter()
    # @xml = HotspringHelper.fetch(param)
    @json = HotspringHelper.test_fetch
    # @json = HotspringHelper.xml_to_json(xml)
    # puts @json
    render :json => @json
  end

  def detail
    param = HotspringHelper.set_parameter()
    testxmls = HotspringHelper.fetch(param)
    @testjsons = HotspringHelper.xml_to_json(testxmls)
    # puts @testjsons
    render :json => @testjsons
  end

end
