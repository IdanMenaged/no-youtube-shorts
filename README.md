# no-youtube-shorts
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

## where to access the app?
the alpha can be reached through [this link](https://expo.dev/preview/update?message=0.0.1&updateRuntimeVersion=1.0.0&createdAt=2024-04-27T14%3A47%3A43.253Z&slug=exp&projectId=6ba9eb44-b0f9-4568-aa77-741350d2a82f&group=35a23dbc-ddca-41a1-94a8-a6947ae967f5)

## functionality that might not be obvious
- in the gallery, long press the icon to change it

## notes
- each folder has a list of channels. they're called 'channels' throughout the project since i originally planned to use youtube ids. this was changed to use a generic search meaning a channel can also be a keyword or anything else you would put in the youtube search bar
