Titanium Q&A Leaderboard Chrome Extension
==================================================

Chrome Extension that allows you to check ranking and score on the Titanium Q&amp;A Top 100 Experts without visiting the page.

[![Screenshot](https://github.com/TheBrousse/ti-qa-leaderboard/raw/master/screenshot.png)](https://github.com/TheBrousse/ti-qa-leaderboard/raw/master/screenshot.png)

http://developer.appcelerator.com/questions/top-100-experts

###What it does so far
- Checks the site at a regular interval and retrieves your
- Displays your ranking on the icon's badge
- Option window to set your name (This is what the code will look for when parsing the page)
- Can set at which interval the page is checked. (Minimum 5 minutes to avoid poking loading the site too much)
- Tooltip will display you actual score value

###What is still not there yet
- If you are not in the Top-100, I have no idea what happens then
- URL Links int the popup window don't work yet for some reason
- Needs a way better README
- Publish it to the Chrome Store so everyone receive updates automatically

##How to install the Extension
Since the this Extension is still under development, you will need to install it manually by following these few steps:
- Visit [chrome://extensions](chrome://extensions) in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox: . and select Extensions under the Tools menu to get to the same place).
- Ensure that the **Developer Mode** checkbox in the top right-hand corner is checked.
- Click **Load unpacked extension…** to pop up a file-selection dialog.
- Navigate to the directory in which your extension files live, and select it.

If the extension is valid, it'll be loaded up and active right away! If it's invalid, an error message will be displayed at the top of the page. Correct the error, and try again.

##Getting it up and running
Once the extension is installed, simply right-click on the icon from the toolbar and select the **Options** menu. From there, simply enter your name and set the refresh interval.

**Note:** Since there is no *name checking* in place, make sure the name you enter matches the name entered on the site. (also wanna watch for trailing spaces since there is no trim yet)