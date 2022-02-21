import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";


const OtherPics = () => {
  let [nasaPics, setNasaPics] = useState([]);
  let [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  let [startDate, setStartDate] = useState("2022-01-01");
  let [finishDate, setFinishDate] = useState("2022-02-18");

  //Pruebas

  let handleStartDate = (event) => {
    console.log(event)
    setStartDate(event.target.value)
  }

  let handleFinishDate = (event) => {
    console.log(event)
    setFinishDate(event.target.value)
  }

  //Theme Context:
  const blueTheme = useTheme();
  const headerStyles = {
    "backgroundColor": !blueTheme ? "#0a1b44b2" : "#441c0ab2",
  };

  const roverStyles = {
    color: !blueTheme ? "#47a3ff" : "#ffb62e",
    border: !blueTheme ? "5px solid #004080" : "5px solid rgb(255, 73, 17)",
    padding: "1rem",
  };

  const subheaderStyles = {
    color: !blueTheme ? "#004080" : "rgb(255, 73, 17)",
  };

  const textStyles = {
    color: !blueTheme ? "#47a3ff" : "#ffb62e",
  };

  const buttonDivStyles = {
    "backgroundColor": !blueTheme ? "#080b11dc" : "#110b08dc",
  };

  const cameraButtonStyles = {
    "backgroundColor": !blueTheme ? "#49eaff" : "#ffbf49",
  };

  const listContainerStyles = {
    color: !blueTheme ? "#004080" : "rgb(255, 73, 17)",
    "backgroundColor": !blueTheme ? "#030414e7" : "#140703e7",
  };

  const noPhotosStyles = {
    "backgroundColor": !blueTheme ? "#080b11dc" : "#110b08dc",
    color: !blueTheme ? "#47a3ff" : "#ffb62e",
    border: !blueTheme ? "5px solid #006ddb" : "5px solid rgb(255, 73, 17)",
  };

  const cardStyles = {
    color: !blueTheme ? "#47a3ff" : "#ffb62e",
    "boxShadow": !blueTheme ? "0 0 10px #006ddb" : "0 0 10px rgb(255, 73, 17)",
    border: !blueTheme ? "5px solid #006ddb" : "5px solid rgb(255, 73, 17)",
  };

  //Fetching data:

  const fetchData = (event)=>{
    event?.preventDefault();
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=R6uOWT7gkga4EZBNYaPG8MkV4EGy4VyWXxosR6uA&start_date=${startDate}&end_date=${finishDate}`
    )
      .then((res) => res.json())
      .then(
        (response) => {
          setIsLoaded(true);
          setNasaPics(response);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  useEffect(() => {
    fetchData();
  }, []);

  //Rendering:

  if (error) {
    return (
      <div style={headerStyles} className="headerDiv">
        Error: {error.message}
      </div>
    );
  } else if (!isLoaded) {
    return (
      
      <div>
        <h1 style={headerStyles} className="headerDiv">
          Loading...
        </h1>
        <div style={headerStyles} className="headerDiv__loadingimage">
          <img
            className="fullImage"
            src={require("../../Images/mars-rover.gif")}
            alt="Loading"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="pageDiv">
        <div style={headerStyles} className="headerDiv">
          <div>
            <h1 className="headerDiv__title">
              <span style={roverStyles} className="headerDiv__title--roverName">
                Astronomy
              </span>{" "}
              pics of the day
            </h1>
            <h2 className="headerDiv__subtitle">Latest photos</h2>
          </div>

          <div style={subheaderStyles} className="headerDiv__subdiv">
            <img
              className="headerDiv__image"
              src={require("../../Images/astronaut.png")}
              alt="Astronaut"
            />

            <div className="headerDiv__text">
              <p>
                Here you can see some of the NASA selected{" "}
                <span style={textStyles}>
                  <strong>Astronomy pics of the day</strong>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
        <div style={buttonDivStyles} className="camerasDiv">
          <form>
            <h3>Select start date</h3>
            <input type="date" name="startDate" onChange={(event) => handleStartDate(event)}></input>
            <h3>Select finish date</h3>
            <input type="date" name="finishDate" onChange={(event) => handleFinishDate(event)}></input>
            <br></br>
            <button style={cameraButtonStyles} className="buttonsDiv__button" onClick={(event) => fetchData(event)}>
              Show images
            </button>
          </form>
        </div>

        <div style={listContainerStyles} className="listContainer">
        {nasaPics.length === 0 ? (
            <div style={noPhotosStyles} className="noPhotosDiv">
              <h5>🚫 No photos available</h5>
            </div>
          ) : (
        nasaPics?.map((item) => (
          <div style={cardStyles} className="podCard" key={item.date}>
            <h5 className="podCard__title">{item.title}</h5>
            <img className="podCard__image" src={item.url} alt={item.date}></img>
            <p className="podCard__text">{item.explanation}</p>
            <h6 className="podCard_date">DATE: {item.date}</h6>
            <h6 className="podCard_date">COPYRIGHT: {item.copyright}</h6>
          </div>
        ))
        )}
        </div>


      </div>
    );
  }
};

export default OtherPics;
