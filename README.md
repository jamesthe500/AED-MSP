# AED-MSP
A tool for locating the nearest AED to your present location.

# Git steps
1. Create a branch for your changes
    * git checkout -b branch_name
2. How to merge in your changes from your_branch (starting with you on your branch)
    * git add .
    * git commit -m "Improves awesome"
    * git push origin your_branch
    * git pull origin master
    * (here there might be conflicts. Fix them and start from the top, or continue if it says you're up to date if you get that annoying screen, write your message, hit esc, :wq enter)
    * git status
    * (if you're not ahead go back to git merge your_branch )
    * git push origin your_branch
    * git checkout master
    * git merge your_branch
    * git push origin master
    * (the next line deletes locally)
    * git branch -d your_branch
    * (the next line deletes the remote version of the branch)
    * git push origin :your_branch
    * (lest your forget...)
    * git checkout -b your_next_branch

# Local Development

To build a local copy of the application, you'll need a version of node installed. The most convenient method is through [NVM](https://github.com/creationix/nvm).

You'll also need a local copy of MySQL (we'll want to work on a method for this setup to be automated). See the setup guide in `db/setup.md`.

After cloning this repository, install dependencies with `npm install`. Afterwards, to build the front end assets, make sure Grunt is installed globally (`npm i -g grunt`). Run `grunt` to build the static assets to `server/public`.

Now, to start the application, run `npm start`.
