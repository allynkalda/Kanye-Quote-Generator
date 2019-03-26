// Create array full of quotes

var quotes = [
"\"I am God's vessel. But my greatest pain in life is that I will never be able to see myself perform live.\"" ,
"\"I still think I am the greatest.\"" ,
"\"Keep your nose out the sky, keep your heart to god, and keep your face to the rising sun.\"" ,
"\"My greatest award is what I'm about to do.\"" ,
"\"Believe in your flyness...conquer your shyness.\"" ,
"\"I feel like I'm too busy writing history to read it.\"", 
"\"People say I have a bad reputation. I think I've got the best reputation in the building.\"",
"\"I'm on the pursuit of awesomeness, excellence is the bare minimum.\"",
"\"People always tell you 'Be humble. Be humble.' When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome!\"",
"\"If you read books - which I don't, none at all - about how to become a billionaire, they always say, 'You learn more from your mistakes.'' So if you learn from your mistakes, then I'm a f*cking genius.\"",
"\"You can't look at a glass half full or empty if it's overflowing.\"",
"\"Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth.\"",
"\"I will be the leader of a company that ends up being worth billions of dollar because I got the answers. I understand culture. I am the nucleus.\"",
"\"I don't even listen to rap. My apartment is too nice to listen to rap in.\"",
"\"When you're the absolute best, you get hated on the most.\"",
"\"I don't want to say these really big over-the-top statements that end up getting quoted.\"",
"\"Bad taste is vulgar. The world as a whole is f--king ugly. And the internet too. But I'm not in the construction business.\"",
"\"I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle.\"",
"\"Trends come and go, but cool is forever.\"",
"\"Come on now! How could you be me and want to be someone else?\"",
"\"You know, if Michael Jordan can scream at the refs, me as Kanye West, as the Michael Jordan of music, can go and say, 'This is wrong.'\"",
"\"I think what Kanye West is going to mean is something similar to what Steve Jobs means. I am undoubtedly, you know, Steve of internet, downtown, fashion, culture. Period.\"",
"\"I am not a fan of books. I would never want a book's autograph. I am a proud nonreader of books.\"",
"\"If people are saying you're wrong, it's probably a good sign that you're a genius.\"",
"\"I'm my favorite rapper.\"",
"\"I've been brought up in this way. I think I can't work with anyone that isn't number one: Jay Z, Kim, Obama, Apple is one, Samsung isn't.\"",
"\"We worked on our wedding photo for four days until it was good enough for Instagram.\"",
]

var bleep = new Audio();
bleep.src = "kanye.wav";


// Function runs when button is clicked
function start() {
	// Generate random number associated to quotes
	var random = Math.floor((Math.random() * 26) + 1);

	document.getElementById("quote").innerHTML = quotes[random];
	console.log(random);
}

