const entiteitnummer = 3; // change it
const haltenummer = 306280; // change it
const apiKey = "API_KEY"; // change it

const widget = new ListWidget();
widget.backgroundColor = new Color("#333333");
const url = `https://api.delijn.be/DLKernOpenData/api/v1/haltes/${entiteitnummer}/${haltenummer}/real-time`;

const request = new Request(url);
request.headers = { "Ocp-Apim-Subscription-Key": apiKey };

try {
    const response = await request.loadJSON();
    const doorkomsten = response.halteDoorkomsten[0].doorkomsten.slice(0, 5); // First 5

    doorkomsten.forEach((doorkomst, index) => {
        const lineNumber = doorkomst.lijnnummer;
        const destination = doorkomst.bestemming;
        const realTimeTimestamp = new Date(doorkomst["real-timeTijdstip"]);
        const now = new Date();
        const differenceInMinutes = Math.round((realTimeTimestamp - now) / 60000);

        const lineStack = widget.addStack();
        lineStack.layoutHorizontally();
        lineStack.size = new Size(0, 20);
        
        
        const lineText = lineStack.addText(`${lineNumber} ${destination}`);
        lineText.font = Font.boldSystemFont(16);
        lineText.textColor = Color.white();
        lineStack.addSpacer();

        const timeText = lineStack.addText(`in ${differenceInMinutes} min`);
        timeText.font = Font.systemFont(16);
        timeText.textColor = Color.white();
        timeText.textOpacity = 0.7;

        if (index < doorkomsten.length - 1) {
            widget.addSpacer(5);
            const separator = widget.addStack();
            separator.size = new Size(0, 1);
            separator.backgroundColor = new Color("#555555");
            widget.addSpacer(5);
        }
    });

} catch (error) {
    const errorText = widget.addText(`Error: ${error}`);
    errorText.textColor = Color.red();
}

// Widget show
Script.setWidget(widget);
Script.complete();
widget.presentMedium();
