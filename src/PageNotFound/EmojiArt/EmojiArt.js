import styles from './EmojiArt.module.css';
import getAnEmoji from './utils';

// Return Page not found Emoji art
function EmojiArt() {
	const text = 'PAGE NOT FOUND';
	const wordList = text.split(' ');

	return wordList.map((word, idx) => {
		return (
			<div className={styles.word} key={idx}>
				{word.split('').map((letter, idx, arr) => (
					<EmojiLetter
						letter={letter}
						key={idx}
						isLastLetter={idx === arr.length - 1}
					/>
				))}
			</div>
		);
	});
}

// Get the EmojiLetter based on input letter
const EmojiLetter = ({ letter, isLastLetter }) => {
	const matrix = PIXEL_LETTERS[letter];
	return (
		<div className={!isLastLetter ? styles.emojiLetter : ''}>
			{matrix.map((row, idx) => {
				return (
					<div className={styles.row} key={idx}>
						{row.map((item, idx) => {
							if (item === 1)
								return (
									<div className={styles.emoji} key={idx}>
										{getAnEmoji()}
									</div>
								);
							return <div className={styles.empty} key={idx} />;
						})}
						<br />
					</div>
				);
			})}
		</div>
	);
};

const PIXEL_LETTERS = {
	P: [
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 1, 1, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
	],
	A: [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 1, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
	],
	G: [
		[0, 1, 1, 0],
		[1, 0, 0, 0],
		[1, 0, 1, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
	],
	E: [
		[1, 1, 1, 1],
		[1, 0, 0, 0],
		[1, 1, 1, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 1],
	],
	N: [
		[1, 0, 0, 1],
		[1, 1, 0, 1],
		[1, 0, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
	],
	O: [
		[0, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
	],
	T: [
		[1, 1, 1, 1, 1],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
	],
	F: [
		[1, 1, 1, 1],
		[1, 0, 0, 0],
		[1, 1, 1, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
	],
	U: [
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 0],
	],
	D: [
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 1, 0],
	],
};

export default EmojiArt;
