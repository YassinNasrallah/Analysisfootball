
# ⚽ Football Analysis App

A React football analysis application built using **React.js** and a football API.

The goal is to display football matches, teams, players, statistics, and provide a clean football analysis experience.

![matshstatistic-page](https://github.com/YassinNasrallah/Analysisfootball/blob/aae2f7d71eeac4680ab649cd9e9b585ec10e80aa/src/assest/screenshot.png)



## 🚀 What I Built

* Created the React project
* Connected the application to a football API
* Created a separate `FootballApi` wrapper for API requests
* Added player search
* Added team search
* Added search debouncing with `setTimeout`
* Added empty-search handling
* Used React `useState`
* Used React `useEffect`
* Used React Context API
* Added React Router for page navigation
* Added a home page
* Added a navigation/header system
* Added recent match results
* Displayed home and away teams
* Displayed team logos
* Displayed match scores
* Added clickable match cards
* Added dynamic match detail pages
* Used `useParams()` to get the match ID from the URL
* Added match details page
* Added full-time score display
* Added match statistics
* Displayed home and away statistics side by side
* Used `map()` and `index` to match statistics between teams
* Used optional chaining (`?.`) for API data
* Used nullish coalescing (`??`) for missing values
* Added a reusable loading component
* Added loading state while waiting for API responses
* Created a light football/UCL-inspired UI

## 🔍 Current Application Flow

### Player / Team Search

```text
Search Input
     ↓
handleChange()
     ↓
search state
     ↓
useEffect()
     ↓
Debounce
     ↓
Football API
     ↓
Players / Teams
     ↓
Context API
     ↓
Components
```

### Match Results

```text
Main Page
    ↓
_getMatches()
    ↓
matches state
    ↓
Lastmatches
    ↓
Display last 5 matches
    ↓
User clicks a match
    ↓
/fixtures/:id
```

### Match Details

```text
User opens /fixtures/:id
          ↓
       useParams()
          ↓
       Get match ID
          ↓
_getMatchById(id)
          ↓
_getstate(id)
          ↓
   Match + Statistics
          ↓
      React state
          ↓
       Context
          ↓
 ┌────────┴─────────┐
 ↓                  ↓
Matchresult      Statistics
```

## 📊 Statistics Handling

The API returns statistics in this structure:

```text
statistics
│
├── [0]
│    ├── team
│    └── statistics
│         ├── [0]
│         ├── [1]
│         └── ...
│
└── [1]
     ├── team
     └── statistics
          ├── [0]
          ├── [1]
          └── ...
```

The application uses the `index` to match the same statistic between the two teams:

```jsx
statistics[0]?.statistics.map((stat, index) => {
    const awayStat = statistics[1]?.statistics[index]

    return (
        <div className="stat-row" key={stat.type}>
            <span>{stat.value ?? 0}</span>

            <strong>{stat.type}</strong>

            <span>{awayStat?.value ?? 0}</span>
        </div>
    )
})
```

## ⏳ Loading System

The application uses a loading state while waiting for API data.

```text
User enters page
      ↓
loading = true
      ↓
Loading component
      ↓
API request
      ↓
Data received
      ↓
loading = false
      ↓
Display page
```

A custom loading animation was also added to the project.

## 🛠️ Technologies Used

* React.js
* JavaScript
* React Router
* Context API
* CSS
* Football API
* REST API
* Git / GitHub

## 👨‍💻 Author

**Yassin Nasrallah**

Built as a React learning project while practicing:

* React components
* Hooks
* Context API
* API integration
* Async JavaScript
* React Router
* Data structures
* Loading states
* Football data analysis






