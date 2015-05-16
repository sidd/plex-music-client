# A simple Plex music client

A (very) simple Plex music client that makes it possible to use media keys with Plex's music client

_This is a **very** early build, and things may break at inopportune times!_

## Building + Installation

Clone the repository, cd in, and run ``npm run build``. It should toss a Plex.app directory directly outside of the current directory :). You can toss this in your /Applications directory if you'd like.

```
$ git clone https://github.com/sidd/plex-music-client && cd plex-music-client
$ npm run build
$ mv ../Plex.app /Applications/Plex.app
```


## Features

* Automatically redirects to music section of Plex library
* Media keys (only tested on OSX)
* Notifications (only tested on OSX)

## Credits

Icon was created by [sub88](http://sub88.deviantart.com/art/PLEX-icon-Replacement-178393828).

## License

MIT. Copyright (c) [Siddharth Sridharan](https://sidd.com)
