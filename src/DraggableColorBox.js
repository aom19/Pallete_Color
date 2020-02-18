import React from 'react';
import {withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import {SortableElement} from "react-sortable-hoc"
import sizes from "./styles/sizes"
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

		},
		[sizes.down("lg")] :{
			width :"25%",
			height :"20%"
		},
		[sizes.down("md")] :{
			width :"50%",
			height :"10%"
		},
		[sizes.down("sm")] :{
			width :"100%",
			height :"5%",

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
		[sizes.down("sm")] :{
			top :"0.1px",
			margin :"2px"

		}
		
	},
	deleteIcon :{
		color : 'black',
		transition:"all 0.3s ease-in-out",
		[sizes.down("sm")] :{
			bottom :"2px",
			alignItems:"center"
			

		}
	}


}

const DraggableColorBox = SortableElement((props) =>{
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
})

export default withStyles(styles)(DraggableColorBox);