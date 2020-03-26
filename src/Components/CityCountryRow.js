import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class CityCountryRow extends Component {
    render() {
        return (
            <div>
                <h3>Enter details of where you would like to see weather from: </h3><br></br>
                <Form inline className="form" onSubmit={this.props.getWeather}>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="city" className="mr-sm-2">City</Label>
                        <Input type="text" name="city" id="city"/>
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="country" className="mr-sm-2">Country</Label>
                        <Input type="text" name="country" id="country"  />
                    </FormGroup>
                    <Button>Get Weather</Button>
                </Form><br></br>     
            </div>
        )
    }
} 