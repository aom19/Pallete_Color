import React from 'react';
import {withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete"

const styles ={
	root :{
		width: "20%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		marginBottom:"-3.5px",
		height: "25%",
		"&:hover svg":{
			color : "#98A4A4",
			transform:"scale(1.2)"

		}
	},
	boxContent:{
		position: "absolute",
		//width: "100%",
		left: "3px",
		bottom: "0px",
		right :"0px",
		margin : "5px",
		padding: "10px",
		color: "black",
		letterSpacing: "1px",
		textTransform: "uppercase",
		fontSize: "12px",
		display :"flex",
		justifyContent:"space-between",
		
	},
	deleteIcon :{
		color : 'black',
		transition:"all 0.3s ease-in-out"
	}

}

function DraggableColorBox(props){
	return (
		<div 
			style={{backgroundColor :props.color}}
			className ={props.classes.root}
		>
			<div className={props.classes.boxContent}>
				<span>
					{props.name}
				</span>
				<DeleteIcon 
					className={props.classes.deleteIcon}
					onClick={props.handleClick}
				/>
			</div>
		</div>
	);
}
export default withStyles(styles)(DraggableColorBox);