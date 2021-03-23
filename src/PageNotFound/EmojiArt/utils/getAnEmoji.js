import emojiObj from './emoji';
const emojiList = emojiObj['Smileys & People'];
const numTotalEmoji = emojiList.length;

/**
 * Return a randomly selected emoji in 'Smileys & People' category
 */
const getAnEmoji = () => {
	while (true) {
		const randomNumber = Math.floor(Math.random() * numTotalEmoji);
		const randomEmoji = emojiList[randomNumber][0];
		// Only return emoji that is small, e.g. 😃 is small, 👩‍👩‍👧‍👦 is big
		if (randomEmoji.length < 8) return randomEmoji;
	}
};

export default getAnEmoji;
