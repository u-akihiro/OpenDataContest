json.array!(@accounts) do |account|
  json.extract! account, :id, :name, :mail, :password
  json.url account_url(account, format: :json)
end
