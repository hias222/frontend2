//import React from 'react';
import { BaseHeatsComponent } from '../heats/BaseHeatsComponent';
import { Container } from '@mui/material';
//import { ResultInterface } from '../heats/interfaces/ResultInterface';

export type HeatsState = {
    isLoading: boolean;
};

// this.props.id

function Heats() {
    return (
        <Container maxWidth="md">
            <BaseHeatsComponent
                id={'1'}
            />
        </Container>
    )

}

export default Heats;