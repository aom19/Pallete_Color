
export default {
	root : {
		backgroundColor :"#dae1e4",
		borderRadiu 	:"5px",
		padding 		:"0.5rem",
		position		:"relative",
		overflow 		:"hidden",
		border          :"1px solid black",
		cursor			:"pointer",
		"&:hover svg"   :{
			opacity:'1'
			
		}
		
	},
	colors:{
		backgroundColor :"grey",
		height : "150px",
		width : "100%",
		borderRadius: "5px",
		overflow:"hidden"


	},
	title :{
		display : "flex",
		justifyContent : "space-between",
		alignItems : "center",
		margin : "0",
		color : "black",
		paddingTop : "0.5rem",
		fontSize : "1rem",
		position :"relative",
		textDecoration : "none"
	},
	emoji :{
		marginLeft : "0.5rem",
		fontSize : "1.5rem",
		textDecoration : "none"	
	},
	miniColor:{
		height :"25%",
		width  :"20%",
		display:"inline-block",
		margin :"0 auto",
		position:"relative",
		marginBottom:"-3.55px"
	},
	delete :{

	},
	deleteIcon:{
		color:"white",
		backgroundColor:"#eb3d30",
		width:"20px",
		height :"20px",
		position:"absolute",
		right:"0px",
		top:"0px",
		padding:"10px",
		zIndex :"1",
		opacity :"0",
		transition :"all 0.4s ease-in-out"
	}
}