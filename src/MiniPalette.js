import React from 'react';
import {withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyle"


function MiniPalette(props) {
	const {classes , paletteName, emoji,colors}= props;
const MiniColorBoxes = colors.map(color =>(
	<div 
		className={classes.miniColor}
		style ={{backgroundColor: color.color }}
		key = {color.name}
	/> 
));
	return(
		<div className = {classes.root} onClick={props.handleClick}> 
			<div className={classes.colors}>
			{MiniColorBoxes }
			</div>
			<h5 
				className={classes.title}>{paletteName}
				<span 
					className={classes.emoji}> {emoji} 
				</span>
			</h5>
		</div>
	);
	// body...
}

export default withStyles(styles)(MiniPalette);