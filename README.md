**aed-msp** [wip]

Location-based AED locator.

## Local Development

To build a local copy of the application, you'll need a version of node installed. The most convenient method is through [NVM](https://github.com/creationix/nvm).

You'll also need a local copy of MySQL (we'll want to work on a method for this setup to be automated). See the setup guide in `db/setup.md`.

	$ npm install
	$ npm i -g grunt pm2
	$ npm start

## Roadmap

- Where can we start to pull data from to have a starting point?
- Clean up and write tests for everything in `server/`
- Database migrations
- Finish photo uploading
- Stylistic improvements

## Maintainers

AED Locator is a project that came out of Hennipen County's [GeoCode 2.0](http://www.hennepin.us/geocode). We're looking for help in moving this project forward to a stable first iteration.

- [@shickey](http://github.com/shickey)
- [@jamesthe500](http://github.com/jamesthe500)
- [@sdpeyton](http://github.com/sdpeyton)
- [@aarongodin](http://github.com/aarongodin)
- [@piercena](http://github.com/piercena)
