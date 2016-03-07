# AED-MSP

A tool for locating the nearest AED to your present location.

# Local Development

To build a local copy of the application, you'll need a version of node installed. The most convenient method is through [NVM](https://github.com/creationix/nvm).

You'll also need a local copy of MySQL (we'll want to work on a method for this setup to be automated). See the setup guide in `db/setup.md`.

	$ npm install
	$ npm i -g grunt pm2
	$ npm start

# Heroku

To deploy the application, create an account on [heroku](http://heroku.com). Configure your ssh key in Account Settings. You'll need to be added as a contributor on the application (contact Nick).

Add a heroku remote:

`git remote add heroku https://git.heroku.com/aqueous-castle-24316.git`

Then push:

`git push heroku master`

# Roadmap

Things to consider:

- Where can we start to pull data from to have a starting point?
- Clean up and write tests for everything in `server/`
- Database migrations
- Finish photo uploading
- Stylistic improvements
