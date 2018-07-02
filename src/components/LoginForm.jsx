import React, { Component } from "react";
import PropTypes from "prop-types";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { marginAroundBtn, marginAroundInput, loginBtn } from "./css/form.css";

export default class LoginForm extends Component {
    componentDidCatch = (err, info) => {
        console.log({ LoginForm: "Error at LoginForm" });
        console.error({ err });
        console.info({ info });
    };

    render() {
        var { err_login, err_passwd } = this.props;

        return (
            <div>
                <form action="">
                    <TextField
                        autoComplete="on"
                        autoFocus
                        className={marginAroundInput}
                        errorMessage={err_login}
                        iconProps=""
                        label="Username"
                        name="username"
                    />
                    <TextField
                        className={marginAroundInput}
                        errorMessage={err_passwd}
                        label="Password"
                        name="password"
                        type="password"
                    />
                    <PrimaryButton
                        about="Click to verify 🙏"
                        className={ marginAroundBtn, loginBtn }
                        type="submit"
                        value="Login"
                    >
                        {"Login"}
                    </PrimaryButton>
                </form>
            </div>
        );
    }
}

LoginForm.propTypes = {
    err_login: PropTypes.string.isRequired,
    err_passwd: PropTypes.string.isRequired,
};
