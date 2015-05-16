#!/usr/bin/env bash

rm -rf ../../Plex.app
electron-packager ../ ../../Plex --platform=darwin --arch=x64 --version=0.26.0
cp ../atom.icns ../../Plex.app/Contents/Resources/atom.icns
