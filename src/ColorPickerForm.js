import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import{ChromePicker} from "react-color";
import {ValidatorForm , TextValidator} from "react-material-ui-form-validator"
import styles from "./styles/ColorPickerFormStyle"
import { withStyles } from "@material-ui/core/styles";

class ColorPickerForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			currentColor :"teal",
			newPaletteName : ""

		}

	}

	updateCurrentColor = (newColor)=>{
  		this.setState({currentColor : newColor.hex})
	}

	handleChange =(e) =>{
	  	this.setState({
	  		[e.target.name] : e.target.value
	  	})
 	 }

 	 handleSubmit =() =>{
 	 	const newColor = {
  			color : this.state.currentColor,
  			name  : this.state.newColorName
		}
		this.props.addNewColor(newColor);
		this.setState({newColorName :''})
 	 }
 	 componentDidMount = () =>{
		ValidatorForm.addValidationRule("isColorNameUnique", value => 
			this.props.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			)
		)
		ValidatorForm.addValidationRule("isColorUnique", value => 
			this.props.colors.every(
				({ color }) => color !== this.state.currentColor 
			)
		)
	}

 	

	render(){
		const {paletteIsFull,classes} = this.props;
		const {currentColor ,newColorName} =this.state;
		return(
			<div>
				<ChromePicker  
					color={currentColor}
					className = {classes.picker}
			   	 onChangeComplete={this.updateCurrentColor}
				/>
				<ValidatorForm 
					onSubmit = {this.handleSubmit}
					ref='form'
					instantValidate={false}
				>

					<TextValidator 
						className ={classes.colorNameInput}
						value = {newColorName}
						name  ='newColorName'
						variant ="filled"
						margin = "normal"
						placeholder ="Color name"
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
						style = {{
							backgroundColor : paletteIsFull
							? "grey"
							:currentColor}}
						type  = "submit"
						disabled ={paletteIsFull}
						className ={classes.addColor}
					>
						{paletteIsFull ? "Palette Full" :"Add Color"}
					</Button>
				</ValidatorForm>
			</div>

		);
	}
}

export default withStyles(styles)(ColorPickerForm);