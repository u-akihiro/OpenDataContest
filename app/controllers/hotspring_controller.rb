class HotspringController < ApplicationController

  def index
    render 'index' 
  end

  def detail
    @param = params[:rdf]
    render 'detail'
  end

end
