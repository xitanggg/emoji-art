import React from 'react';
import styles from './Button.module.css';

function Button({ children = '', primary = true, className, ...props }) {
	const btn = primary ? styles.btnPrimary : styles.btnNormal;
	return (
		<button type={'button'} className={`${btn} ${className}`} {...props}>
			{children}
		</button>
	);
}
export default Button;
