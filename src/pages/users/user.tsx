import React from "react";
import Button from "react-bootstrap/Button";

export const User = (props: any)  => {
    return (
        <tr>
            <td>{props.orderNumber}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>
                <Button
                    onClick={() => props.onDelete(props.id)}
                    variant="link"
                >Delete</Button>
            </td>
        </tr>  
    );
}