import sizes from "./sizes"

export default {
	root:{
		display:"flex"
	},
	appBar:{
		flexDirection:"row",
		justifyContent:"space-between",
		height:"64px",
		backgroundColor:"#b6c3ca",
		shadow :"box-shadow:inset 0 0 10px #000000",
		border :"0.3px solid #edeef2"

	},
	menuButton:{
		marginLeft:12,
		marginRight :20
	},
	hide :{
		opacity: 0
	},
	navBtns:{
		marginTop:"10px",
		display:"flex",
		justifyContent:"flex-end",
		height:"45px",
		alignItems:"center",
		width :"35%",
		marginRight :"5px",
		[sizes.down("xs")] :{
			marginTop :"3%",
			height:"50%",
			marginRight :"2px"

		}

	},
	button:{
		margin:"0 0.3rem",
		textDecoration:"none",
		width:"50%",
		fontSize :"1rem",
		padding :"0.3rem",
		[sizes.down("xs")] :{
			margin:0,


		}
	}
}