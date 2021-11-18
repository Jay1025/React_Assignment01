import React, {useState} from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useParams} from "react-router-dom";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

const star = <FontAwesomeIcon icon={faStar} />

const Detail = (props) => {
  const nowDay = useParams()
  let history = useHistory();

  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const handleStarClick = (e, index) => {
    e.preventDefault();
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }

    setClicked(clickStates);
  };
  
    return (
    <div className="App">
      <Box>
        <H2><Day>{nowDay.day}요일</Day>평점 남기기</H2>
            <Body>
                <div className="rating">
                  <Star
                    onClick={(e) => handleStarClick(e, 0)}
                    className={clicked[0] ? "starColor" : null}
                  >{star}</Star>
                  <Star
                    onClick={(e) => handleStarClick(e, 1)}
                    className={clicked[1] ? "starColor" : null}
                  >{star}</Star>
                  <Star
                    onClick={(e) => handleStarClick(e, 2)}
                    className={clicked[2] ? "starColor" : null}
                  >{star}</Star>
                  <Star
                    onClick={(e) => handleStarClick(e, 3)}
                    className={clicked[3] ?"starColor" : null}
                  >{star}</Star>
                  <Star
                    onClick={(e) => handleStarClick(e, 4)}
                    className={clicked[4] ? "starColor" : null}
                  >{star}</Star>
                </div>                    
                <Button onClick={() => {history.push("/");}}>평점 남기기</Button>     
            </Body> 
      </Box>
    </div>
  );
}

const Box = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 30px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;
const H2 = styled.h2`
  text-align: center;
  padding-top: 50px;
`;

const Day = styled.span`
margin-right: 5px;
background-color: red;
color: white;
padding: 5px;
border-radius:5px
`;

const Body = styled.div`
    margin: 10px;
    padding: 10px;
    text-align: center;
    font-size: 30px;
`;

const Star = styled.span`
    margin-right: 5px;
    cursor: pointer;
`;

const Button = styled.button`
    background-color: orange;
    color: white;
    padding: 15px 100px;
    margin: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export default Detail;
