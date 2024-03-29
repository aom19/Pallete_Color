import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import ColorPickerForm from "./ColorPickerForm"
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import styles from "./styles/NewPaletteFormStyles";
import Button from "@material-ui/core/Button";
import DraggableColorList from "./DraggableColorList"
import {arrayMove} from "react-sortable-hoc"
import PaletteFormNav from "./PaletteFormNav"
 import seedColors from "./seedColors"


 class NewPaletteForm extends Component {
  static defaultProps = {
	maxColors: 20
  };

constructor(props) {
	super(props);
		this.state = {
	 		open: true,
	 		colors: seedColors[0].colors,
	 		
		};

}


handleSubmit = (newPalette) =>{
	newPalette.id  = newPalette.paletteName.toLowerCase().replace(/ /g,"-");
	newPalette.colors = this.state.colors
	this.props.savePalette(newPalette);
	this.props.history.push("/");

}
	

handleDrawerOpen = () => {
	this.setState({ open: true });
};

handleDrawerClose = () => {
	this.setState({ open: false });
};



addNewColor = (newColor) =>{
  	this.setState({ 
  		colors:[...this.state.colors , newColor]  , 
  		newColorName :""
  	});
  
 }
 handleChange =(e) =>{
  	this.setState({
  		[e.target.name] : e.target.value
  	})
  }

  

removeColor = (colorName) =>{
	this.setState({
		colors: this.state.colors.filter(color => color.name !== colorName )
	})
}

onSortEnd =({oldIndex , newIndex}) => {
	this.setState (({colors}) => ({
		colors :arrayMove(colors ,oldIndex, newIndex)
	}))
};

clearColors =() =>{
	this.setState({colors :[]});
}

 addRandomColor = () =>{
	const allColors =this.props.palettes.map(p => p.colors).flat();
	let rand ;
	let  randomColor ;
	let isDublicatedColor = true;
	while(isDublicatedColor){
		 rand = Math.floor(Math.random()* allColors.length);
		 randomColor = allColors[rand];	
		 isDublicatedColor = this.state.colors.some(color => color.name === randomColor.name);
	}
	this.setState({
		colors :[...this.state.colors, randomColor] 
	})
}

  

render() {
	const { classes, maxColors, palettes } = this.props;
	const { open, colors } = this.state;
	const paletteIsFull = colors.length >= maxColors;

  return (
   <div className={classes.root}>
{/*.-----------------Navbar--------------------------------} */} 
	   <PaletteFormNav 
	   		open ={open}
	   		classes = {classes}
	   		palettes = {palettes}
	   		handleSubmit = {this.handleSubmit}
	   		handleDrawerOpen={this.handleDrawerOpen}

	   	/>
		<Drawer
			className={classes.drawer}
		    variant='persistent'
		    anchor='left'
		    open={open}
	   	    classes={{
				paper: classes.drawerPaper
			  }}
		>
			<div className={classes.drawerHeader}>
				<IconButton onClick={this.handleDrawerClose}>
				  <ChevronLeftIcon />
				</IconButton>
			</div>
			<Divider />
		<div className ={classes.container}>
			<Typography variant ="h4" >
				Design Your Palette
			</Typography>
			<div className ={classes.buttons} >
				<Button 
					onClick ={this.clearColors} 
					variant = "contained" 
					color ="secondary"
					className ={classes.button}
				>
					Clear Palette
				</Button>
				<Button 
					onClick ={this.addRandomColor}
					variant = "contained" 
					color ="primary"
					disabled ={paletteIsFull}
					className ={classes.button}
				>
					Random Color
				</Button>
			</div>
{/*------------------------------COLORPICKER-------------------------*/}
			<ColorPickerForm 
				paletteIsFull = { paletteIsFull}
				addNewColor ={this.addNewColor}
				colors = {colors}

			/> 
		</div>
		</Drawer>
		<main
		 	className={classNames(classes.content, {
				[classes.contentShift]: open
		    })}
		>
		    <div className={classes.drawerHeader} />
		    	<DraggableColorList 
		    		colors ={this.state.colors}
		    		removeColor ={this.removeColor}
		    		axis ="xy"
		    		onSortEnd ={this.onSortEnd}
		   		/>
		    	

		</main>
	  </div>
	);
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);