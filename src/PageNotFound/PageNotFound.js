import { useState } from 'react';
import styles from './PageNotFound.module.css';
import EmojiArt from './EmojiArt';
import Button from './../Button';

function PageNotFound() {
	const [numClick, setNumClick] = useState(0);
	const displayGo = numClick >= 5;
	return (
		<div className={styles.pageNotFound}>
			<EmojiArt />
			<Button
				primary={!displayGo}
				onClick={() => {
					setNumClick((prev) => prev + 1);
					console.log('Hi');
				}}
				children={'Oops, 404 Page not found 😶'}
				className={styles.button}
			/>
			{displayGo && (
				<Button
					onClick={() =>
						window.open('https://www.tipstory.org/learning/YrihGZn6dZZ0wh7')
					}
					children={'Learn how to build this page 😃'}
					className={styles.button}
				/>
			)}
		</div>
	);
}

export default PageNotFound;
