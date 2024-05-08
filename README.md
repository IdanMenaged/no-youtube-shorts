# no-youtube-shorts
## installation
### ios
1. install [expo go](https://apps.apple.com/us/app/expo-go/id982107779)
2. open [this link](https://expo.dev/preview/update?message=widened%20video%20previews&updateRuntimeVersion=1.0.0&createdAt=2024-04-27T15%3A14%3A48.646Z&slug=exp&projectId=6ba9eb44-b0f9-4568-aa77-741350d2a82f&group=943ae812-913a-47de-99ff-8bb3b6a0cee2) on a computer
3. scan the QR code on your phone (this will launch expo go)
congratulations, you now have the app. however, you must open it from expo go. [here](#open-the-app-after-installation) is a detailed explanation of how that works

### open the app after installation
> [!WARNING]
> DO NOT ENTER THROUGH `Recently opened`! going through the `Projects` section ensures you are entering the latest version while `Recently opened` brings you into the version you used last time regardless of updates.
1. open the [expo go app](https://apps.apple.com/us/app/expo-go/id982107779)
2. in the `Projects` section, click `no-youtube-shorts`
3. click `Branch: master`
4. click `Open`

### android
#### android >=8.0
1. navigate to the Install unknown apps system settings screen
2. enable app installations from the location from which you're installing (i.e. your web browser)
3. open [this link](https://expo.dev//accounts/idanmenaged/projects/no-youtube-shorts/builds/93d67465-ffd9-453b-b7ac-91d9c596274b) on your computer
4. scan the QR code

#### android <=7.1.1
1. navigate to Settings > Security
2. enable `Unknown sources`
3. open [this link](https://expo.dev//accounts/idanmenaged/projects/no-youtube-shorts/builds/93d67465-ffd9-453b-b7ac-91d9c596274b) on your computer
4. scan the QR code

## contrib
### how to run development server
to run the app locally, run
```
yarn expo start
```
this will create a QR code that will let you open the app inside of expo go.
you must be on the same network as your computer

## admin actions
### publishing
to publish a new update to production, run
```
eas update
```
then update the links on this page

### building
run
```
eas build --profile preview
```
then update the links on this page

## functionality that might not be obvious
- in the gallery, long press the icon to change it

## notes
- each folder has a list of channels. they're called 'channels' throughout the project since i originally planned to use youtube ids. this was changed to use a generic search meaning a channel can also be a keyword or anything else you would put in the youtube search bar

USELESS LINE FOR TEST
