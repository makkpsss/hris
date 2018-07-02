import React from "react";
import LoginForm from "../LoginForm";
import { pageTitle } from "../css/form.css";

const LoginPage = () => {
    const { titleStyle, formStyle } = styles;
    const loginTitle = "👀 HRIS Login";

    return (
        <div className="ms-Grid login-form-wrap">
            <div className="ms-Grid-row">
                <div
                    className="ms-Grid-col ms-sm12 ms-md12 ms-lg12"
                    style={titleStyle}
                >
                    <h1 className={pageTitle}>{loginTitle}</h1>
                </div>
                <div
                    className="ms-Grid-col ms-sm12 ms-md8 ms-lg4"
                    style={formStyle}
                >
                    <LoginForm err_login="" err_passwd="" />
                </div>
            </div>
        </div>
    );
};

const styles = {
    titleStyle: { backgroundColor: "#3f52e3" },
    formStyle: {
        float: "right",
        margin: "5% 5% 0% 0%"
    }
};

export default LoginPage;
