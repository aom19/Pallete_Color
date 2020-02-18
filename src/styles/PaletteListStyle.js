import sizes from "./sizes";



export default {
	"@global":{
		".fade-exit":{
			opacity:1
			
		},
		".fade-exit-active":{
			opacity:0,
			transition:"opacity 500ms ease-out"
		}
	},
	particles:{
	  position: "fixed",
	  top: "0",
	  right: "0",
	  bottom: "0",
	  left: "0"
	},
	root :{
		// backgroundColor :"linear-gradient(to bottom, #be93c5, #7bc6cc);",
		background :"linear-gradient(to bottom, #be93c5, #7bc6cc)",
		height : "100vh",
		display : " flex",
		alignItems : "flex-start",
		justifyContent : "center",
		overflow:"scroll"


	},
	container :{
		width :"50%",
		
		display :"flex",
		alignItems : "flex-start",
		flesDirection: "column",
		flexWrap  : "wrap",
		[sizes.down("xl")] :{
			width:"80%"
		},
		[sizes.down("xs")] :{
			width:"75%"
		}

	},
	title:{
		color:"#eb3d30",
		fontFamily: 'Krona One',
		fontSize :"2rem",
		textShadow: "2px 2px 4px #000000",
		zIndex :"1"
	},
	nav :{
		display :"flex",
		width :"100%",
		justifyContent :"space-between",
		color: "white",
		allignItems : "center",
		"& a" : {
			color :"white",
			textDecoration :"none",
			alignItems:"center",
			fontSize:"20px",
			marginTop:"20px",
			color :"#718b97"
		}

	},
	palettes:{
		boxSizing :"border-box",
		width :"100%",
		display :"grid",
		gridTemplateColumns :"repeat(3,30%)",
		gridGap : "2.0rem",
		[sizes.down("md")] :{
				gridTemplateColumns :"repeat(2,50%)",
		},
			[sizes.down("xs")] :{
				gridTemplateColumns :"repeat(1,100%)",
				gridGap : "1rem",
		}

	}

}