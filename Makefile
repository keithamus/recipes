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

.PHONY: all install clean serve
