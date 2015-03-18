Device Detect
=============
JavaScript module to check if user agent to return the device and browser.

## Install

```js
npm install device-detect --save-dev
```

## Use

```js
var deviceDetect = require('device-detect')();

// return all device and browser object
console.log(deviceDetect);

// result example:
/* {
  "device":"Macintosh",
  "browser":"Chrome"
} */

console.log(deviceDetect.device); // returns Macintosh
console.log(deviceDetect.browser); // returns Chrome
```

## Supported
Devices: 
- iPhone
- iPad
- iPod
- Blackberry
- WindowsMobile
- Android
- Macintosh
- Windows
- Linux

Browsers: 
- Chrome
- Opera
- Firefox
- IE
- Safari
 
## Release History
* 1.0.6: Add test.js.
* 1.0.6: Add Linux detection.
* 1.0.5: Update documentation.
* 1.0.4: Add support for Windows Mobile.
* 1.0.3: Update documentation.
* 1.0.2: Update description.
* 1.0.1: Update documentation.
* 1.0.0: Initial release.
 
## Contributing
1. Fork it
2. Run `npm install`
3. Run Grunt watch `grunt watch`
4. Create your feature branch (`git checkout -b my-new-feature`)
5. Commit your changes (`git commit -am "Add some feature"`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request

## License
MIT © [Ryan Burgess](http://github.com/ryanburgess)
