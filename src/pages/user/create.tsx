import React from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const useTextField = (initialValue) => {
    const [ value, setValue ] = React.useState(initialValue);

    const onChange = React.useCallback((event) => {
        setValue(event.target.value);
    }, []);
    
    return {
        value, onChange
    }
}

export const CreateUser = (props: any) => {
    const firstName = useTextField('');
    const lastName = useTextField('');

    return ( 
        <Form>
            <Row>
                <Col>
                    <Form.Control
                        defaultValue={firstName.value}
                        as='input'
                        placeholder="First name"
                        onChange={firstName.onChange}
                    />
                </Col>
                <Col>
                    <Form.Control
                        defaultValue={lastName.value}
                        as='input'
                        placeholder="Last name"
                        onChange={lastName.onChange}
                    />
                </Col>
                <Col>
                    <Button
                        variant="outline-primary"
                        onClick={() => props.onCreate({
                            firstName: firstName.value,
                            lastName: lastName.value,
                        })}
                    >
                        Save
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
