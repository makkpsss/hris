import React, { Component } from "react";
import PropTypes from "prop-types";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { marginAroundBtn, marginAroundInput, loginBtn } from "./css/form.css";

export default class LoginForm extends Component {
    static propTypes = {
        /** Print if there is a username error "err_login". */
        err_login: PropTypes.string.isRequired,
        /** Print if there is a password error "err_passwd". */
        err_passwd: PropTypes.string.isRequired
    };

    componentDidCatch = (err, info) => {
        console.log({ LoginForm: "Error at LoginForm" });
        console.error({ err: err });
        console.info({ info: info });
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
                        placeholder="droidmakk / droidmakk@gmail.com"
                        required
                    />
                    <TextField
                        className={marginAroundInput}
                        errorMessage={err_passwd}
                        label="Password"
                        name="password"
                        placeholder="myS@fEP@$$wd"
                        required
                        type="password"
                    />
                    <PrimaryButton
                        about="Click to verify 🙏"
                        className={(marginAroundBtn, loginBtn)}
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
