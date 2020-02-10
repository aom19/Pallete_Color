import React from 'react';
import {withStyles } from "@material-ui/styles";

const styles ={
	root : {
		backgroundColor :"#dae1e4",
		borderRadiu 	:"5px",
		padding 		:"0.5rem",
		position		:"relative",
		overflow 		:"hidden",
		border          :"1px solid black",
		"&:hover" 		:{
			cursor: "pointer"
		}
		
	},
	colors:{
		backgroundColor :"grey",
		height : "150px",
		width : "100%",
		borderRadius: "5px",
		overflow:"hidden"


	},
	title :{
		display : "flex",
		justifyContent : "space-between",
		alignItems : "center",
		margin : "0",
		color : "black",
		paddingTop : "0.5rem",
		fontSize : "1rem",
		position :"relative",
		textDecoration : "none"
	},
	emoji :{
		marginLeft : "0.5rem",
		fontSize : "1.5rem",
		textDecoration : "none"	
	},
	miniColor:{
		height :"25%",
		width  :"20%",
		display:"inline-block",
		margin :"0 auto",
		position:"relative",
		marginBottom:"-3.55px"
	}
}

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