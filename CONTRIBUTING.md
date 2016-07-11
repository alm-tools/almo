Shipping binary `nodejs` + `chrome` to a user system which already has these things feels bad. `npm install alm -g` is actually an easier install / quicker install / goes everywhere I do / allows you to run it on your own server / allows you to use it on portable devices (e.g rasberry pi) / helps you embed this editor if you want to.

But we understand the value of having a single executable running (instead of a command line server + chrome) for desktop users. Hence this package 🌹

# What's here
Our main app is just a nodejs server app that serves all that is needed to a `url` (that you can open in chrome).

So if you want a desktop executable we can support that quite easily using electron (nodejs + chrome) by just running our node.js app and then creating a view to the `url`. That is all what's happening here.

## Development workflow

Once:

* clone
* npm install

Always when you get new code:

* npm install
* npm start


## Inspiration

https://github.com/sindresorhus/electron-boilerplate/blob/master/boilerplate/package.json

* `electron-prebuilt`: Allows running electron js app without building
* `electron-packager`: Builds electron js apps to executables

Instead of making actual executable packages I've just gone with sending `electron-prebuilt` down to the user.
