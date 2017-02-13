# README

Problems encoutered on windows:
* 4.1 - rspec 
 - rails generate rspec:install will not work with rspec 3.0 (open issue https://github.com/rspec/rspec-rails/issues/1555), created rails_helper.rb manually.
 - add those lines to Gemfile:
   	gem 'test-unit'
	  gem 'shoulda-matchers'

	