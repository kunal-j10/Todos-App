# Activity-Lineups-App
A react-native application that helps you to lineup your day to day activity

## Node pakages to install :-
<br>

### <li> React-Navigation :-
npm install react-navigation
### <li> Navigation Dependencies :- 
npm install react-native-reanimated<br> react-native-gesture-handler<br> react-native-screens<br> react-native-safe-area-context <br> @react-native-community/masked-view
### <li> Stack-Navigation :-
npm install react-navigation-stack
### <li> Firebase:-
npm install firebase
### <li> Redux related packages:-
npm install redux
<br>npm install react-redux
<br>npm install redux-thunk
## Timeout problem with Firebase :-
while making some async calls to our firebase firestore , it gives us some warning in react-native that says :-
<br>
<br>
_Setting timers for multiple minutes isn't handled properly in React Native on Android: it keeps the Timing module awake instead of relying on the system waking us up when the timer should go off._
<br>

### This has been explained well over [Here facebook/react-native issue #12981](https://github.com/facebook/react-native/issues/12981#issuecomment-652745831)

### What I prefered to do is :-
<li> Navigate to node_modules/react-native/Libraries/Core/Timers/JSTimers.js file.
<li> Look for the variable MAX_TIMER_DURATION_MS
<li> Change its value to 10000 * 1000
<li> Save the changes (with auto format turned off) and re-build app