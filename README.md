# Getting started with Zendesk apps and Angular

The minimal amount of code you need to get started with Zendesk Apps using Angular as your javascript framework of preference.
The result of installing Angular CLI and running `ng new` and adapting it to work with the [zendesk_apps_tools](https://developer.zendesk.com/apps/docs/apps-v2/getting_started)

## Getting Started

Please get yourself familiar with the [Zendesk documentation](https://developer.zendesk.com/apps/docs/apps-v2/getting_started)

### Prerequisites

You will need either `npm` or `yarn` and the `zendesk_apps_tools` installed.
Please refer to the [Zendesk documentation](https://developer.zendesk.com/apps/docs/apps-v2/getting_started)

### Running the app

`npm run zendeskserve` the Zendesk version of `ng serve`. This script will watch for file changes, trigger a `ng build` command and copy a few files around which are expected by the Zendesk Apps Tools.

`zat server --path=dist` serve the app from the dist folder which is where the zendesk apps tools will find the index.html

### Viewing the app

1. Open up a ticket with the zat flag `https://[some-instance].zendesk.com/agent/tickets/1?zat=true`
2. Make sure to allow the insecure scripts to load
3. Open up the Apps sidebar
4. The app should appear with a title, icon and details about the ticket.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
