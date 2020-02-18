import React, {Component} from 'react';
import{Link} from "react-router-dom"
import MiniPalette from "./MiniPalette"
import {withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyle"
import Particles from 'react-particles-js';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from "@material-ui/icons/Check"
import CloseIcon from "@material-ui/icons/Close"
import Avatar from '@material-ui/core/Avatar';
import blue from "@material-ui/core/colors/blue"
import red from "@material-ui/core/colors/red"
const particlesOption ={
  particles: {
	    number:{
	    	value: 150,
	      	density:{
	      		enable :true,
	        	value_area : 500
	     	 }
		},    
	}
}


class PaletteList extends Component{
	constructor(props){
		super(props);
		this.state ={
			openDeleteDialog :false,
			deletingId:""
		};
	}
	openDialog =(id)=>{
			this.setState({
				openDeleteDialog:true , 
				deletingId : id
			})
	}
	closeDialog =()=>{
			this.setState({
				openDeleteDialog:false,
				deletingId : ""
			})
	}
	handleDelete =() =>{
		this.props.deletePalette(this.state.deletingId);
		this.setState({openDeleteDialog :false})
	}

	goToPalette(id){
		this.props.history.push(`/palette/${id}`);
	}
	render(){
		const {palettes ,classes , deletePalette} = this.props;
		const {openDeleteDialog , deletingId} = this.state;
		return(

			<div className = {classes.root} >
			<Particles params ={particlesOption}
				className ={classes.particles}
       			 />
				<div className= {classes.container}>
					<nav className ={classes.nav} >
						<h1 className ={classes.title}> React Colors </h1>
						<Link 
							to ="/palette/new"
							className ={classes.title} 

						>
							Create New Palette

						</Link>
					</nav>
					<TransitionGroup className={classes.palettes}>
						{palettes.map(palette => (
							<CSSTransition
								key={palette.id}
								classNames='fade'
								timeout={500}
							> 
								<MiniPalette {...palette} 
									handleClick={() => this.goToPalette(palette.id)}
									// handleDelete = {this.props.deletePalette}
									openDialog={this.openDialog}
									key={palette.id}
									id ={palette.id}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
				<Dialog 
					open={openDeleteDialog} 
					area-labelledby="delete-dialog-title"
					onClose ={this.closeDialog}
				>
					<DialogTitle id="delete-dialog-title">
						Delete this palette?
					</DialogTitle>
					<List>
						<ListItem button onClick={this.handleDelete}>
							<ListItemAvatar>
								<Avatar style ={{backgroundColor:blue[100] , color :blue[600] }}
								>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary="Delete"
							/> 	
						</ListItem>
						<ListItem button onClick = {this.closeDialog}>
							<ListItemAvatar>
								<Avatar style ={{backgroundColor:red[100] , color :red[600] }}>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary="Cancel"
							/> 			
						</ListItem>
					</List>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);