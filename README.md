Device Detect
=============
JavaScript module to check if user agent to return the device and browser.

## Install

```js
npm install device-detect --save-dev
```

## Use

```js
var deviceDetect = require('device-detect');

// return all device and browser object
var deviceDetect = deviceDetect();

// result example:
/* {
  "device":"Macintosh",
  "browser":"Chrome"
} */
```
 
## Release History
* 1.0.2: Update description.
* 1.0.1: Update documentation.
* 1.0.0: Initial release.
 
## Contributing
 
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am "Add some feature"`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request