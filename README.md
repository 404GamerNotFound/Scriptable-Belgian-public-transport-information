# De Lijn Departure Times Widget

This is a Scriptable widget that displays the next five departures from a specified stop for De Lijn, the public transport company in Flanders, Belgium.

## Setup

To use this widget, you will need to replace the `entiteitnummer`, `haltenummer`, and `apiKey` with your specific information.

```javascript
const entiteitnummer = 3; // change it to your entity number
const haltenummer = 306280; // change it to your stop number
const apiKey = "API_KEY"; // change it to your De Lijn API key
```
## Installation

1. Install the Scriptable app on your iOS device.
2. Copy the script into a new Scriptable script.
3. Configure the script with your specific `entiteitnummer`, `haltenummer`, and `apiKey`.
4. Run the script to check if it's working properly.
5. Add a new Scriptable widget to your home screen.
6. Edit the widget and select the script you just created.

## Usage

The widget will display the line number, destination, and time until departure in minutes for the next five buses.

Please note that the API key and stop information must be kept confidential to prevent misuse.

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
