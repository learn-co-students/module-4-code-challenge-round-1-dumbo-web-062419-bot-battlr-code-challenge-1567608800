1. ✅Fetching Bots
Work on fetching data from this API: https://bot-battler-api.herokuapp.com/api/v1/bots. The response should contain an array of bot objects that are structured as follows:

Based on the current structure of the app, think about where this array of bots needs to be stored.

✅2. Indexing bots
After you have fetched the bots, work on rendering them into BotCollection, which should be a child of BotsPage. A component called BotCard has been provided to you to display the information about an individual bot in a list format.

3. Enlisting bots
Once the list is complete, work on the functionality of enlisting bots into your army. Clicking a card should add a bot to the user's list of bots. Bots that have been chosen should be displayed within YourBotArmy, which should also be a child of BotsPage (feel free to reuse BotCard). A bot should be enlisted only once. If you click on a bot in your army, that bot should be removed from your army.

Note that nothing needs to be persisted. Refreshing the page should clear out the current army.

4. Refactor
Now that you have some of the functionality of your app, it's time to refactor the code. Rather than enlisting the bot into the army, clicking on the card should instead display a show view (BotSpecs) for that bot, which should replace BotsCollection. BotSpecs should have two buttons: one to go back to the list view and another to enlist that bot.