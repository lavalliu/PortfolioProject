import "./Exercise3.css";
import "./Exercise.css";
import { Form, Button } from 'react-bootstrap';
import Image1 from './img/XP_Gold.jpg';


const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

export default function Exercise3() {
    return (
        <div>
            <h1 style={style_header}>This is a Header</h1>
            <p class="para" >This is a Paragraph</p>
            <a href="url">This is a Link</a>

            <Form>
                <h2>This is a Form</h2>
                <Form.Label>Enter your Name :</Form.Label><br /><br />
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    value=' '
                    required
                />
                <Button variant="primary" type="submit">Submit</Button>
            </Form> 
            <h3>Here is an image</h3>
            <img src={Image1} alt=""/>
            <ul>This is a List
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </div>
    );
}