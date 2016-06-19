/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    '@ngrx': 'vendor/@ngrx',
    'moment': 'vendor/moment/moment.js',
    'ng2-bootstrap': 'vendor/ng2-bootstrap',
    'symbol-observable': 'vendor/symbol-observable/lib/ponyfill.js',
    'lodash': 'vendor/lodash'
};
/** User packages configuration. */
var packages = {
    '@ngrx/core': {
        main: 'index.js',
        defaultExtension: 'js',
        format: 'cjs'
    },
    '@ngrx/store': {
        main: 'index.js',
        defaultExtension: 'js',
        format: 'cjs'
    },
    'ng2-bootstrap': {
        main: 'ng2-bootstrap.js',
        defaultExtension: 'js',
        format: 'cjs'
    },
    'lodash': {
        main: 'index.js',
        defaultExtension: 'js'
    },
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/+dashboard',
    'app/+social',
    'app/shared/footer',
    'app/shared/header',
    'app/shared/header/recent-projects',
    'app/shared/header/full-screen',
    'app/shared/header/collapse-menu',
    'app/shared/navigation',
    'app/shared/demo-states',
    'app/shared/ribbon',
    'app/+smartadmin/+app-layouts',
    'app/+smartadmin/prebuilt-skins',
    'app/shared/i18n',
    'app/shared/i18n/language-selector',
    'app/shared/navigation/minify-menu',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map