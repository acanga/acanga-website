require "rubygems"
require "bundler"
require "bundler/setup"

Bundler.require(:default)

require "./acanga_website"
run Sinatra::Application