# rfid-board
The TUI RFID Control Panel

----

## Based on Cloudoki Superadmin

### Features
- Gulp;
- Bower to manage dependencies;
- CSS pre-compile through SASS;
- JShint;
- Mustache to render templates;
- SASS and JS minification and concatenation;
- RequireJS;
- Oauth2 authentication flow;

### Requirements
- [nodejs](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Install
Install the dependencies with `npm install` or `sudo npm install`.

### Configuration
The auth configurations are located in the `src/js/config-default.js` file. Since configurations may vary from local setup to production setup, to enable these you must do a `cp src/js/config-default.js src/js/config.js` first. The generated file will be your configuration file, and should never be commited back to the repo.

### Adding packages
The package is setup so you can easily add external packages to your project, while making it easier to manage dependencies. Doing
`bower install <package-name>` will add the package to the src/vendor folder. You can browse for available bower packages through [bower search page](http://bower.io/search/), and general documentation on bower in [bower.io](http://bower.io/).

After adding the package, you need to include it into the build process (gulpfile.js:35) and into your main.js file. Both have documented examples in the files themselves.

Bower install will run automatically after the packages are installed in `npm install`.
To update bower run `npm run bower update` and if you want to uninstall a bower package run `npm run bower uninstall <package-name>`.

### Gulp tasks
- **npm run gulp** will build the files inside the /dist folder and perform a watch. You are ready to start developing
- **npm run clean** will clean the dist folder
- **npm run build** will build the files inside the /dist folder without triggering a watch
- **npm run update** will run bower update and run build

### NOTE:
If tasks are not working try deleting the node_modules folder and run `npm install` again.

#### Run

Run the command:

`npm run static`

Open your browser at `http://127.0.0.1:8080/`
