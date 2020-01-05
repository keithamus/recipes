all: serve

#
# Install all dependencies
#

install:
	@bundle install

#
# Clean
#

clean: 
	@rm -rf _site/

#
# Start the doc server locally
#

serve: install
	@bundle exec jekyll serve --incremental

build:
	@bundle exec jekyll build

test: build
	@bundle exec htmlproofer --checks_to_ignore=ImageCheck,LinkCheck _site

.PHONY: all install clean serve
