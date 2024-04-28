# no-youtube-shorts
## installation
### ios
1. install [expo go](https://apps.apple.com/us/app/expo-go/id982107779)
2. open [this link](https://expo.dev/preview/update?message=widened%20video%20previews&updateRuntimeVersion=1.0.0&createdAt=2024-04-27T15%3A14%3A48.646Z&slug=exp&projectId=6ba9eb44-b0f9-4568-aa77-741350d2a82f&group=943ae812-913a-47de-99ff-8bb3b6a0cee2) on a computer <a id="app-link"></a>
3. scan the QR code on your phone (this will launch expo go)
congratulations, you now have the app. however, you must open it from expo go. [here](#open-the-app-after-installation) is a detailed explanation of how that works

### open the app after installation
> [!WARNING]
> DO NOT ENTER THROUGH `Recently opened`! going through the `Projects` section ensures you are entering the latest version while `Recently opened` brings you into the version you used last time regardless of updates.
1. open the [expo go app](https://apps.apple.com/us/app/expo-go/id982107779)
2. in the `Projects` section, click `no-youtube-shorts`
3. click `Branch: master`
4. click `Open`

## contrib
### how to run development server
to run the app locally, run
```
yarn expo start
```
this will create a QR code that will let you open the app inside of expo go.
you must be on the same network as your computer

## publishing
> [!NOTE]
> this action can only be performed by an admin
to publish a new update to production, run
```
eas update
```
then:
1. open the generated link
2. click `Preview`
3. replace [this link](#app-link)

## functionality that might not be obvious
- in the gallery, long press the icon to change it

## notes
- each folder has a list of channels. they're called 'channels' throughout the project since i originally planned to use youtube ids. this was changed to use a generic search meaning a channel can also be a keyword or anything else you would put in the youtube search bar
