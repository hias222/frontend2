import React from 'react';
import { BaseHeatsComponent } from '../heats/BaseHeatsComponent';
import { Container } from '@mui/material';
import { ResultInterface } from '../heats/interfaces/ResultInterface';

export type HeatsState = {
    isLoading: boolean;
};

export default class heats extends React.Component<ResultInterface, HeatsState> {

    render() {
        return (
            <Container maxWidth="md">
                <BaseHeatsComponent
                    id={this.props.id}
                />
            </Container>
        )
    }
}