import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useParams} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

const star = <FontAwesomeIcon icon={faStar} />

const Detail = (props) => {
    const nowDay = useParams()
    const stars = [star,star,star,star,star];
    let history = useHistory();
    return (
    <div className="App">
      <Box>
        <H2><Day>{nowDay.day}요일</Day>평점 남기기</H2>
            <Body>
                {stars.map((star,index) => {
                        return (<Star key={index}>{star}</Star>)
                    })}
                <Button onClick={() => {
                    history.push("/");
                }}>평점 남기기</Button>     
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

const Body = styled.div`
    margin: 10px;
    padding: 10px;
    text-align: center;
    font-size: 30px;
`;

const Day = styled.span`
    margin-right: 5px;
    background-color: red;
    color: white;
    padding: 5px;
    border-radius:5px
`;

const Star = styled.span`
    margin-right: 5px;
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
