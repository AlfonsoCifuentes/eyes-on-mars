import React, { useState, useEffect, useReducer } from "react";
import {useTheme} from "../../context/ThemeContext"


//Camera Parameters
  const initialState = "";
  const reducer = (state, action) => {
    switch (action.type) {
      case "FHAZ": return "&camera=fhaz";
      case "RHAZ": return "&camera=rhaz";
      case "MAST": return "&camera=mast";
      case "CHEMCAM": return "&camera=chemcam";
      case "MAHLI": return "&camera=mahli";
      case "MARDI": return "&camera=mardi";
      case "NAVCAM": return "&camera=navcam";
      case "PANCAM": return "&camera=pancam";
      case "MINITES": return "&camera=minites";
      case "ALLCAMERAS": return initialState
      default: return state
    }
  }

  

const Opportunity = () => {

   //Rover Name
   const rover = "opportunity"

  //Cameras useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  //Theme Context:
  const blueTheme = useTheme();
  const cardStyles = {
    color: !blueTheme ? "#47a3ff" : "rgb(255, 73, 17)",
    "boxShadow": !blueTheme ? "0 0 10px #006ddb" : "0 0 10px rgb(255, 73, 17)",
    border: !blueTheme ? "5px solid #006ddb" : "5px solid rgb(255, 73, 17)"
  }

  const listContainerStyles = {
    color: !blueTheme ? "#004080" : "rgb(255, 73, 17)",
    "backgroundColor": !blueTheme ? "#030414e7" : "#140703e7",
  }

  const headerStyles = {
    "backgroundColor": !blueTheme ? "#0a1b44b2" : "#441c0ab2",
  }

  const roverStyles = {
    color: !blueTheme ? "#47a3ff" : "#ffb62e",
    border: !blueTheme ? "5px solid #004080" : "5px solid rgb(255, 73, 17)",
    padding: "1rem"
  }

  const subheaderStyles = {
    color: !blueTheme ? "#004080" : "rgb(255, 73, 17)",
  }

  const textStyles = {
    color: !blueTheme ? "#47a3ff" : "#ffb62e",
  }

  const buttonDivStyles = {
    "backgroundColor": !blueTheme ? "#080b11dc" : "#110b08dc",
  }

  const cameraButtonStyles= {
    "backgroundColor": !blueTheme ? "#49eaff" : "#ffbf49",
  } 

  const noPhotosStyles= {
    "backgroundColor": !blueTheme ? "#080b11dc" : "#110b08dc",
    color: !blueTheme ? "#47a3ff" : "#ffb62e",
    border: !blueTheme ? "5px solid #006ddb" : "5px solid rgb(255, 73, 17)"
  }
 

  //Fetch from API:
  let [curiosity, setCuriosity] = useState([]);
  let [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(
      `https://mars-photos.herokuapp.com/api/v1/rovers/${rover}/latest_photos?api_key=R6uOWT7gkga4EZBNYaPG8MkV4EGy4VyWXxosR6uA${state}`
    )
      .then((res) => res.json())
      .then(
        (response) => {
          setIsLoaded(true);
          setCuriosity(response.latest_photos);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [state]);



  //Rendering
  if (error) {
    return <div style={headerStyles} className="headerDiv">Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>
    <h1 style={headerStyles} className="headerDiv">Loading...</h1>
    <div style={headerStyles} className="headerDiv__loadingimage">
      <img className="fullImage" src={require ("../../Images/mars-rover.gif")} alt="Loading"/>
    </div>
    </div>;
  } else {
    return (
    <div className="pageDiv">

      <div style={headerStyles} className="headerDiv">

          <div>
            <h1 className="headerDiv__title"><span style={roverStyles} className="headerDiv__title--roverName">OPPORTUNITY</span> Rover</h1>
            <h2 className="headerDiv__subtitle">Latest photos</h2>
          </div>

        <div style={subheaderStyles} className="headerDiv__subdiv">

          <img className="headerDiv__image" src={require ("../../Images/Oportunity.png")} alt="Opportunity Rover" />


          <div className="headerDiv__text">
         
          <p>Here you can see the Mars surface photos taken from the many cameras of the <span style={textStyles}><strong>Opportunity</strong></span> rover. Pictures are always up-to-date, the latest pictures available. Below you can select the different cameras to filter the list of photos to a certain camera.</p>
          </div>

        

       
        
        </div>
        


      </div>

      <div style={buttonDivStyles} className="camerasDiv">

        <div>
          <h3  style={textStyles}>Choose a Camera:</h3>
        </div>

        <div className="buttonsDiv">
          <button style={cameraButtonStyles} className="buttonsDiv__button" onClick={() => dispatch({type:"NAVCAM"})}>Navigation Camera</button>
          <button style={cameraButtonStyles} className="buttonsDiv__button" onClick={() => dispatch({type:"FHAZ"})}>Front Hazard Avoidance Camera</button>
          <button style={cameraButtonStyles} className="buttonsDiv__button" onClick={() => dispatch({type:"RHAZ"})}>Rear Hazard Avoidance Camera</button>
          <button style={cameraButtonStyles} className="buttonsDiv__button" onClick={() => dispatch({type:"CHEMCAM"})}>Chemistry and Camera Complex</button>
          <button style={cameraButtonStyles} className="buttonsDiv__button" onClick={() => dispatch({type:"MAHLI"})}>Mars Hand Lens Imager</button>
          
          

          <button style={cameraButtonStyles} className="buttonsDiv__button" onClick={() => dispatch({type:"MARDI"})}>Mars Descent Imager</button>
          <button style={cameraButtonStyles} className="buttonsDiv__button" onClick={() => dispatch({type:"MAST"})}>Mast Camera</button>
          <button style={cameraButtonStyles} className="buttonsDiv__button" onClick={() => dispatch({type:"PANCAM"})}>Panoramic Camera</button>
          <button style={cameraButtonStyles} className="buttonsDiv__button" onClick={() => dispatch({type:"MINITES"})}>Miniature Thermal Emission Spectrometer (Mini-TES)</button>
          <button style={cameraButtonStyles} className="buttonsDiv__button" onClick={() => dispatch({type:"ALLCAMERAS"})}>All Cameras</button>
        </div>

      </div>


      <div style={listContainerStyles} className="listContainer">

        {
          curiosity.length === 0 ? <div style={noPhotosStyles} className="noPhotosDiv"><h5>🚫 No photos available for this camera</h5></div> :
          
          curiosity?.map((item) => (

         

          <div style={cardStyles} className="card" key={item.id}>
            <h5 className="card__title">CAMERA: {item.camera.full_name}</h5>
            <img className="card__image" src={item.img_src} alt={item.earth_date}></img>
            
            <h6  className="card_date">DATE: {item.earth_date}</h6>
          </div>
        ))} 
        </div>

      </div>
    );
  }

}
export default Opportunity;