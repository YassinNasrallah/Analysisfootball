# ⚽ Football Analysis

A React project for searching football players using a football API.

## 🚧 Status

**In Development**

## 🛠️ Built With

* React
* JavaScript
* CSS
* React Context API
* Fetch API
* API-Football

## ✅ What I Built

* Created the React project
* Connected the project to a football API
* Created a separate `FootballApi` wrapper
* Added player search
* Used React `useState`
* Used React `useEffect`
* Used React Context API
* Added search debouncing with `setTimeout`
* Added empty-search handling
* Added API error handling
* Displayed player search results

## 🔍 Current Flow

```text
Search Input
     ↓
handleChange()
     ↓
search state
     ↓
useEffect()
     ↓
500ms debounce
     ↓
Football API
     ↓
result state
     ↓
Context API
     ↓
PlayerInfo
```

## ⚠️ Current API Limitation

The free API plan has a daily request limit.

When the limit is reached, the API returns:

```text
429 Too Many Requests
```

The project is still under development.

## 🗺️ Next Steps

* [ ] Player details
* [ ] Player statistics
* [ ] Club information
* [ ] Recent matches
* [ ] Wins / Losses / Draws
* [ ] Football analysis dashboard

## 👨‍💻 Author

**Yassin Nasrallah**

