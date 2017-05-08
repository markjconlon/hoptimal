require 'test_helper'

class UserBeersControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get user_beers_show_url
    assert_response :success
  end

end
