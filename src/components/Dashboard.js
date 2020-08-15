import React, { Component } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import Result1 from './Result1';
import Result2 from './Result2';
export class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input_encoder: '',
            input_decoder: '',
            encoded: '',
            decoded: '',
            showResult1: false,
            showResult2: false
        }
    }

    submitHandler1 = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios
            .get("https://ttt-compress.herokuapp.com/encode?input=" + this.state.input_encoder)
            .then((res) => {
                this.setState({ encoded: res.data["encoded"] });
                this.setState({ showResult1: true })
                console.log(res.data["encoded"]);
            });
    };

    submitHandler2 = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios
            .get("https://ttt-compress.herokuapp.com/decode?input=" + this.state.input_decoder)
            .then((res) => {
                this.setState({ decoded: res.data["decoded"] });
                this.setState({ showResult2: true })
                console.log(res.data["decoded"]);
            });
    };

    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { input_encoder, input_decoder, encoded, decoded, showResult1, showResult2 } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler1}>
                    <br />
                    <div>
                        <label>Enter input: </label>
                        <br />
                        <input
                            type="text"
                            name="input_encoder"
                            value={input_encoder}
                            onChange={this.onChangeHandler}
                        />
                    </div>
                    <br />
                    <div>
                        <Button variant="info" type="submit">
                            Get Encoded
                        </Button>
                    </div>
                </form>


                {showResult1 && <Result1 data={this.state.encoded} />}

                <form onSubmit={this.submitHandler2}>
                    <br />
                    <div>
                        <label>Enter encoded input: </label>
                        <br />
                        <input
                            type="text"
                            name="input_decoder"
                            value={input_decoder}
                            onChange={this.onChangeHandler}
                        />
                    </div>
                    <br />
                    <div>
                        <Button variant="info" type="submit">
                            Get Decoded
                        </Button>
                    </div>

                </form>
                {showResult2 && <Result2 data={this.state.decoded} />}



            </div>
        )
    }
}

export default Dashboard;
