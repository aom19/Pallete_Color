import React from 'react';
import {withStyles } from "@material-ui/styles";

const styles ={
	root :{
		width: "20%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		marginBottom:"-3.5px",
		height: "25%"
	}

}

function DraggableColorBox(props){
	return (
		<div 
			style={{backgroundColor :props.color}}
			className ={props.classes.root}
		>
				{props.name}
		</div>
	);
}
export default withStyles(styles)(DraggableColorBox);