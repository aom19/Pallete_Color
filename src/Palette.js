import React ,{Component} from 'react';
import ColorBox from "./ColorBox";
import 'rc-slider/assets/index.css';
import "./Palette.css";
import Navbar from "./Navbar"
import PaletteFooter from "./PaletteFooter";
import {withStyles } from "@material-ui/styles";


const styles ={
	 Palette: {
	    "height": "100vh",
	    "display": "flex",
	    "flexDirection": "column"
	  },
	colors: {
   		 "height": "90%"
  	}

}


class Palette extends Component{
	constructor(props){
		super(props);
		this.state = {level : 400 , format :"hex"};

		this.changeLevel  = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeLevel =(newLevel) =>{
		this.setState({ level  : newLevel})
	}

	changeFormat(val){
		this.setState({format : val });
	}
	
	render(){
		const {colors,paletteName, emoji, id } = this.props.palette;
		const {level,format }  = this.state;
		const {classes} = this.props;
		const colorBoxes = colors[level].map( color => (
			<ColorBox 
				background = {color[format]}  
				name 	   = {color.name}
				key 	   = {color.id}
				id         = {color.id}
				paletteId  = {id}
				showingFullPalette  = {true}

			/>
		))
		return (
			<div className={classes.Palette}>
			<Navbar 
				level={level} 
				changeLevel  = {this.changeLevel}  
				handleChange = {this.changeFormat}
				showingAllColors

			/>
				<div className = {classes.colors}>
					{colorBoxes}
				</div>
				<PaletteFooter 
					paletteName={paletteName}
					emoji      ={emoji}
				/>
			</div>
			
		);
	}
}
export default withStyles(styles)(Palette);