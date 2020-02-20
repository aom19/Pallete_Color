import React ,{PureComponent} from 'react';
import {withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyle"
import DeleteIcon from"@material-ui/icons/Delete"

class  MiniPalette extends PureComponent {
	constructor(props){
		super(props);
	}

	deletePalette = (e) =>{
		e.stopPropagation();
		this.props.openDialog(this.props.id)
	}

handleClick =() =>{
	this.props.goToPalette(this.props.id);
}

render(){
	
    const {classes , paletteName, emoji,colors ,id, handleClick}= this.props;
	
	const MiniColorBoxes = colors.map(color =>(
	
	<div 
		className={classes.miniColor}
		style ={{backgroundColor: color.color }}
		key = {color.name}
	/> 
));

	return(
		<div 
			className = {classes.root} 
			onClick={this.handleClick}
		> 	
			<DeleteIcon 
				className={classes.deleteIcon}
				onClick ={this.deletePalette}
			/>
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
}
export default withStyles(styles)(MiniPalette);