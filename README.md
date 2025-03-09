# Green Path
Green Path, a front-end webapp, is used for fast, intuitive point-and-click path creation.

The app is available at https://thegreenmachine.github.io/green-path/.
Using IntelliJ we can use the "built-in preview" functionality instead - just open index.html and click on the little IntelliJ symbol that should pop up in the top-right corner!
## Getting Started
```
$ git clone https://github.com/TheGreenMachine/green-path.git
$ npx http-server # Or any other http-server - Note: this is if you're NOT using IntelliJ's built-in preview
```
As this is a static webapp, you can also use VSCode's Live Server extension in order to run the server.

## Path generation from log files
To generate an auto path from a .wpilog file, click the "Instant Path" button. Proceed to input your log file, the time you wish to start from, the duration, and the sample rate (ex. sample rate of 0.5 =  2 samples/second, 0.1 = 10 samples/second). 

The headings per-point are generated mathematically- tank drive robots looking for the exact recorded values should replace these headings with those found in the Swerve Headings section.

### Your pose has to be logged as **Drivetrain/Pose** and consist of [x,y,heading] for the utility to read it correctly. 

### Dependencies
- splines-kt (https://github.com/TheGreenMachine/splines-kt)
