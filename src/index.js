import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Assuming you have an App component defined

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

ReactDOM.render(<App />, document.getElementById("root"));