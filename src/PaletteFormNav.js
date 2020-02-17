import React, { Component } from "react";
import clsx from 'clsx';
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline'; import styles from "./styles/PaletteFormNavStyle"
import PaletteMetaForm from "./PaletteMetaForm"



class PaletteFormNav extends Component{
	constructor(props){
		super(props);
		this.state = {
			newPaletteName :"",
			formShowing :false

		}
	}

	

	handleChange =(e) =>{
	  	this.setState({
	  		[e.target.name] : e.target.value
	  	})
  	}

  	showForm =() =>{
  		this.setState({formShowing :true})
  	}
  	hideForm =() =>{
  		this.setState({formShowing :false})
  	}


	
	render(){
		const {classes , open,colors,palettes,handleSubmit} = this.props;
		const {newPaletteName } = this.state;
		return(
			<div className ={classes.root}> 
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
						Create a palette
				    </Typography>
				
				</Toolbar>
				<div className ={classes.navBtns}>
					    <Link 
					    	to ="/"
					    	className ={classes.button}>
					    	<Button 
					    		className ={classes.button}
					    		variant ="contained"
					    		color   ="primary"
					    	>
					    		Go Back
					    	</Button> 
					    </Link>
					    <Button 
					    	className={classes.button}
							variant="contained" 
							color="secondary" 
							onClick={this.showForm}
						>
		      			 	 Save Palette
     		   			 </Button>
				   </div> 
		    </AppBar>
		    {this.state.formShowing && ( <PaletteMetaForm 
							palettes ={palettes}
							handleSubmit ={handleSubmit}
							hideForm = {this.hideForm}

						/>
			)}
		    </div>
			

		);
	}
}

export default withStyles(styles)(PaletteFormNav) ;