import React from 'react';
import { MyCanvas } from '../../components';
import { PlaceContainer, PlaceWrapper } from '../../globalStyles';

const Home = () => {  
    return (
        <>
            <PlaceContainer>
                <PlaceWrapper>
                    <MyCanvas />
                </PlaceWrapper>
            </PlaceContainer>
        </>
    )
}

export default Home;