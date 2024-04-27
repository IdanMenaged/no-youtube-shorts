# no-youtube-shorts
## table of contents
1. [how to run](#how-to-run)
2. [functionality that might not be obvious](#functionality-that-might-not-be-obvious)
3. [notes](#notes)

## how to run development server
to run the app locally, run
```
yarn expo start
```
this will create a QR code that will let you open the app inside of expo go.
you must be on the same network as your computer

## publishing
to publish a new update to production, run
```
eas update
```

## functionality that might not be obvious
- in the gallery, long press the icon to change it

## notes
- each folder has a list of channels. they're called 'channels' throughout the project since i originally planned to use youtube ids. this was changed to use a generic search meaning a channel can also be a keyword or anything else you would put in the youtube search bar