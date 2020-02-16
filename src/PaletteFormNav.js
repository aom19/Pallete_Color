import React, { Component } from "react";
import clsx from 'clsx';

import { withStyles } from "@material-ui/core/styles";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import Button from "@material-ui/core/Button";

import {ValidatorForm , TextValidator} from "react-material-ui-form-validator"


import {Link} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

class PaletteFormNav extends Component{
	constructor(props){
		super(props);
		this.state = {
			newPaletteName :""
		}
	}

	componentDidMount=() =>{
		ValidatorForm.addValidationRule("isPaletteNameUnique", value => 
			this.props.palettes.every(
				({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
			)
		)
	}

	handleChange =(e) =>{
	  	this.setState({
	  		[e.target.name] : e.target.value
	  	})
  	}


	
	render(){
		const {classes , open} = this.props;
		const {newPaletteName } = this.state;
		return(
			<div> 
				<CssBaseline />
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
						onClick={this.props.handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
				    >
				    	<MenuIcon />
				    </IconButton>
				    <Typography variant="h6" noWrap>
						Persistent drawer
				    </Typography>
				    <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
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
					    <Link to ="/">
					    	<Button 
					    		variant ="contained"
					    		color   ="primary"
					    	>
					    		Go Back
					    	</Button> 
					    </Link>
					    
				    </ValidatorForm>
				</Toolbar>
		    </AppBar>

			</div>

		);
	}
}

export default PaletteFormNav ;