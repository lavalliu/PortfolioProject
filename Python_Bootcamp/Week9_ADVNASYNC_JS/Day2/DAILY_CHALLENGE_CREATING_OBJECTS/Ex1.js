// Daily Challenge : Creating Objects
// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor (title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch() {
        const output = `${this.uploader}, watched all ${this.time} of the movie, ${this.title}!`;
        console.log("Sentence : ", output);
    }
}

const Video1 = new Video(`The Greatest Showman`, `Laval`, `2 hrs 35 mins`);
Video1.watch();

const Video2 = new Video(`Top Gun! Maverick`, `The L J(s)`, `3 hrs 5 mins`);
Video2.watch();

const VideoArray = [
    {
    title: "Passengers", 
    uploader: "Jessica",
    time: "2hrs 15mins"
    },
    {
    title: "Outlander", 
    uploader: "Laura",
    time: "3hrs 25mins" 
    },
    {
    title: "Titanic", 
    uploader: "Lucas",
    time: "3hrs 5mins" 
    },
    {
    title: "Warrior", 
    uploader: "Jade",
    time: "2.hrs 25mins" 
    },
    {
    title: "Clones", 
    uploader: "Joey",
    time: "2hrs 10mins" 
    }
]

VideoArray.forEach((pre) => {
    console.log(`${pre.uploader}, watched all ${pre.time} of the movie, ${pre.title}!`)
});