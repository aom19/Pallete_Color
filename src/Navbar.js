import React ,{Component} from 'react';
import {Link} from 'react-router-dom'
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Slider from 'rc-slider';
import CloseIcon from '@material-ui/icons/Close';
import "./Navbar.css";
import 'rc-slider/assets/index.css';
import PaletteIcon from '@material-ui/icons/Palette';


class Navbar extends Component{
	constructor(props){
		super(props);
		this.state = { 
			format : "hex",
			open   : false


		};
		this.handleFormatChange =this.handleFormatChange.bind(this);
		this.closeSnackbar =this.closeSnackbar.bind(this);
	}
	handleFormatChange(e){
		this.setState({ 
			format : e.target.value,
			open   : true
		});
		this.props.handleChange(e.target.value );


	}

	closeSnackbar(){
		this.setState({open : false})
	}
	render(){
		const {level , changeLevel} = this.props;
		const {format} = this.state;
		return(
			<header id="Navbar"> 
				<div className="logo">
				<Link to="/"  id ="link">
					<span className ="logoText"> Palette </span>
				</Link>
					
				</div>
				{this.props.showingAllColors && 
					<div className="slider-container">
					<span> Level : {level}</span>
					<div className="slider">
					<Slider 
						defaultValue = {level}
						 min = {100}
						max = {900}
						step= {100}
						onAfterChange={this.props.changeLevel}
					/>
					</div>
					</div>
				}
				<div className="select-container">
				<Select 
				 value = {this.state.format} 
				 onChange={this.handleFormatChange}>
					<MenuItem value="hex">HEX - #ffffff</MenuItem>
					<MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
					<MenuItem value="rgba">RGBA -rgba(255,255,255,1.0)</MenuItem>
				</Select> 
				</div>
				<Snackbar  
					anchorOrigin={{vertical: "bottom" , horizontal : "left" }}
					open ={this.state.open}
					autoHideDuration ={3000}  
					message={<span id="mesage-id">Format Changed to {format}</span>}
					ContentProps={{
						"aria-describedby" : "message-id"
					}}
					onClose ={this.closeSnackbar}
					action={[
						<IconButton 
							onClick= {this.closeSnackbar} 
							color='inherit' 
							key="close"
							aria-label ="close"
						>
							<CloseIcon />
						</IconButton>
					]}	
				/>
			</header>

		);
	}
}

export default Navbar;