# no-youtube-shorts
## table of contents
1. [how to run](#how-to-run)
2. [functionality that might not be obvious](#functionality-that-might-not-be-obvious)
3. [notes](#notes)

## how to run
```
cd frontend
yarn expo start
```
this will create a QR code that can be used by the expo mobile app to view the app

## functionality that might not be obvious
- in the gallery, long press the icon to change it

## notes
- the project is inside the frontend folder since i thought i would do the backend on a server. this was later changed to use react native storage, meaning the backend logic is part of the react native project, i.e. the frontend directory
- each folder has a list of channels. they're called 'channels' throughout the project since i originally planned to use youtube ids. this was changed to use a generic search meaning a channel can also be a keyword or anything else you would put in the youtube search bar