import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons'

const star = <FontAwesomeIcon icon={faStar} />
const arrow = <FontAwesomeIcon icon={faHandPointRight} />
// Math.floor(Math.random() * 6)
const Days = (props) => {
    const days = ['월','화', '수', '목', '금', '토', '일'];
    const stars = [star,star,star,star,star];
    let history = useHistory();

    return (
    <div className="App">
      <Box>
        <H2>내 일주일은?</H2>
        {
        days.map((day,index) => {
            return (<Body key={index}>
                        <Day>{day}</Day>
                        {
                            stars.map((star, index) => {
                                return (<Star key={index}>{star}</Star>)
                            })
                        }
                        <Arrow 
                        key={index}
                        onClick={() => {
                            history.push("/detail/" + day);
                        }}>{arrow}</Arrow>
                    </Body>)
            })
        }
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
`;

const Star = styled.span`
    margin-right: 5px;
`;

const Arrow = styled.span`
    color: orange;
    cursor: pointer;
`;
export default Days;
