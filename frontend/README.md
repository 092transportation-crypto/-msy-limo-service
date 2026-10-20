## Lead-Generation Environment Variables

These power the chat widget (`api/chat.js`) and the lead-capture endpoint
(`api/lead-capture.js`, used by the lead popup, the exit-intent popup, and
the chat widget's `submit_booking_lead` tool). Set them in the Vercel
project's environment variables (Production/Preview/Development as needed).
All are optional in the sense that each feature degrades gracefully (no
crash, no hang) when its variables are missing.

| Variable | Required for | Notes |
| --- | --- | --- |
| `ANTHROPIC_API_KEY` | Chat widget | Without it, `/api/chat` returns a 200 with a friendly fallback reply (real phone number + link to the booking form) instead of calling Claude. |
| `ANTHROPIC_CHAT_MODEL` | Chat widget (optional) | Defaults to `claude-haiku-5-5` if unset. |
| `TWILIO_ACCOUNT_SID` | SMS lead alerts | All four Twilio vars below must be set together — if any is missing, `lib/sms.js` silently no-ops (logs and returns) instead of throwing. |
| `TWILIO_AUTH_TOKEN` | SMS lead alerts | |
| `TWILIO_FROM_NUMBER` | SMS lead alerts | The Twilio number the alert is sent **from**. |
| `ALERT_PHONE_NUMBER` | SMS lead alerts | The dispatch/staff number that **receives** the alert text for every new lead. |
| `LEAD_WEBHOOK_URL` | Lead webhook (CRM/Zapier/etc) | `lib/leadWebhook.js` POSTs a JSON lead payload here. No-op if unset. Bounded by a 6s timeout either way, so a slow/unreachable endpoint never hangs a request. |

Run `npm run test:api` to smoke-test both endpoints (graceful fallback with
no Anthropic key, 400s on invalid lead input, 201s — without hanging — with
Twilio/webhook env vars unset or pointed at an unreachable host).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
