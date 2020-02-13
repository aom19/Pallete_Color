import React, { Component } from "react";
import clsx from 'clsx';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import styles from "./styles/NewPaletteFormStyles";
import Button from "@material-ui/core/Button";
import{ChromePicker} from "react-color";
import DraggableColorBox from "./DraggableColorBox"
import {ValidatorForm , TextValidator} from "react-material-ui-form-validator"


 
class NewPaletteForm extends Component {
  static defaultProps = {
	maxColors: 20
  };

constructor(props) {
	super(props);
		this.state = {
	 		open: true,
	 		currentColor :"teal",
	 		newColorName : "",
	 		colors: [],
	 		newPaletteName : ""
		};

}

componentDidMount =() =>{
	ValidatorForm.addValidationRule("isColorNameUnique", value => 
		this.state.colors.every(
			({ name }) => name.toLowerCase() !== value.toLowerCase()
		)
	)
	ValidatorForm.addValidationRule("isColorUnique", value => 
		this.state.colors.every(
			({ color }) => color !== this.state.currentColor 
		)
	)
	ValidatorForm.addValidationRule("isPaletteNameUnique", value => 
		this.props.palettes.every(
			({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
		)
	)

}

handleSubmit = () =>{
	let newName = this.state.newPaletteName;
	const newPalette ={
		paletteName : newName,
		id : newName.toLowerCase().replace(/ /g,"-"),
		colors : this.state.colors
	}
	this.props.savePalette(newPalette);
	this.props.history.push("/");

}
	

handleDrawerOpen = () => {
	this.setState({ open: true });
};

handleDrawerClose = () => {
	this.setState({ open: false });
};

updateCurrentColor = (newColor)=>{
  	this.setState({currentColor : newColor.hex})
}

addNewColor = () =>{
  	const newColor = {
  		color : this.state.currentColor,
  		name  : this.state.newColorName
	}
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

  

render() {
	const { classes, maxColors, palettes } = this.props;
	const { open, colors } = this.state;

  return (
   <div className={classes.root}>
	   <AppBar
			position="fixed"
			className={clsx(classes.appBar, {
				[classes.appBarShift]: open,
			})}
		>
			<Toolbar>
			 	<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={this.handleDrawerOpen}
					edge="start"
					className={clsx(classes.menuButton, open && classes.hide)}
			    >
			    	<MenuIcon />
			    </IconButton>
			    <Typography variant="h6" noWrap>
					Persistent drawer
			    </Typography>
			    <ValidatorForm onSubmit={this.handleSubmit}>
				    <TextValidator
				    	value = {this.state.newPaletteName}
				    	label ="Palette Name"
				    	name  ='newPaletteName'
				    	onChange ={this.handleChange}
				    	validators ={["required" , "isPaletteNameUnique"]}
				    	errorMessages={["Enter a palette name","This name is used"]}
				    />


				    <Button 
				    	variant ="contained"
				    	color   ="secondary"
				    	type   = "submit"
				    	onClick ={this.handleSubmit}
				    >
				    	Save Palette

				    </Button>
			    </ValidatorForm>
			</Toolbar>
	    </AppBar>
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
			<Typography variant ="h4" >
				Design Your Palette
			</Typography>
			<div>
				<Button variant = "contained" color ="secondary">
					Clear Palette
				</Button>
				<Button variant = "contained" color ="primary">
					Random Color
				</Button>
			</div>
			<ChromePicker  
				color={this.state.currentColor}
			    onChangeComplete={this.updateCurrentColor}
			/>
			<ValidatorForm onSubmit = {this.addNewColor}>
				<TextValidator 
					value = {this.state.newColorName}
					name  ='newColorName'
					onChange ={this.handleChange}
					validators ={[
						"required" ,
						"isColorNameUnique",
						"isColorUnique"
					]}
					errorMessages ={[
						"This field is required",
						"Color name must be unique",
						"This color already exist"
					]}
				/>
				<Button 
					variant="contained" 
					color="primary"
					style = {{backgroundColor :this.state.currentColor}}
					type  = "submit"
				>
					Add Color
				</Button>
			</ValidatorForm>
			
		</Drawer>
		<main
		 	className={classNames(classes.content, {
				[classes.contentShift]: open
		    })}
		>
		    <div className={classes.drawerHeader} />

		    	{this.state.colors.map(color => (
		    		<DraggableColorBox 
		    			 key = {color.name}
		    			 color = {color.color}
		    			 name  = {color.name}
		    			 handleClick = {() => this.removeColor(color.name)}
		    		/>
		    	))}

		</main>
	  </div>
	);
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);