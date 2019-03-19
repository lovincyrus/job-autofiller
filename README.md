# job-autofiller

## Load Chrome extension
```
1. Go to chrome://extensions/
2. Developer mode: on
3. Load unpacked
```

## Sites supported
- `https://boards.greenhouse.io/*`
- `https://jobs.lever.co/*`
- `https://www.uber.com/*`

## How to use
Edit the values on `data.json` and add new entries when necessary. The `sites.json` file contains the hostnames that are supported by this extension and the values that can be autofilled. The input value in `sites.json` is mapped to the value provided in `data.json`.

When you are on the supported sites, it will automatically trigger the script and edit the DOM content.

🍻