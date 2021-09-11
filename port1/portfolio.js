// Stores Fr. Chopin maxims
const maxim = [
    "Simplicity is the final achievement. After one has played a vast quantity of notes and more notes, it is simplicity that emerges as the crowning reward of art.", 
    "Oh, how hard it must be to die anywhere but in one's birthplace.",
    "If the newspapers cut me up so much that I shall not venture before the world again, I have resolved to become a house painter; that would be as easy as anything else, and I should, at any rate, still be an artist!",
    "I wish I could throw off the thoughts which poison my happiness, but I take a kind of pleasure in indulging them."
    ];

const outputMaxim = () => {
    let randNum = Math.floor(Math.random()*maxim.length);
    console.log(`Fr. Chopin[${randNum + 1}]: ${maxim[randNum]}`);
}

outputMaxim();