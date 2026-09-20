# Freight Helper — Route Checker

A lightweight browser-based tool for looking up a destination's transfer point and checking a specific overnight-hold rule against a built-in route schedule.

## What it does

- Accepts a three-letter destination code and automatically checks it when all three letters are entered; you can also click **Check** or press **Enter**.
- Shows the destination's transfer point and scheduled arrival day for **tomorrow's** pickup day, based on the built-in route table.
- Displays **HOLD** if the listed arrival day is Monday and **LOAD** otherwise, following the rule implemented in this project. If a route or day is missing, the result is unknown or an error rather than a verified instruction.
- Lets you override the current day to test different scenarios.
- Saves a lookup history of up to 500 entries in the browser's local storage, with a **Clear Log** button.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser.
3. Enter a three-letter destination code. Optionally select a day under **Assume today is**.

No package installation or build step is required.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Page layout and input/results UI |
| `styles.css` | Visual styling |
| `app.js` | Route table, lookup logic, day override, and local lookup log |

## Important limitations

- Route information is a **static snapshot embedded in `app.js`**. This app does not sync with a live routing system; schedules and operational policies may change.
- The hold/load result implements a particular rule: Monday arrival means **HOLD**. It does not independently validate whether freight can legally or operationally be held.
- The app uses the device's local day by default and looks up the following day. Missing pickup-day entries produce an unknown result.
- The lookup log is stored only in the current browser's local storage; it is not an account-backed audit record.
- Verify any real shipment decision against the current, authorized route guide and applicable workplace procedures.

## Data and publication

The route table is included in the JavaScript source, so it is visible to anyone who can access this repository. If the underlying schedule is company-confidential or not approved for public sharing, remove or replace it with authorized sample data and review the repository's history before distributing the project.
