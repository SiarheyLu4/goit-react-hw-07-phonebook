import { ThreeDots } from 'react-loader-spinner';

import React from "react";
import styled from "styled-components";

export const Loader = () => {
  return (
    <Spin>
      <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#cfc7ff" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Spin>
  )
}

const Spin = styled.div`
  position: fixed;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
`