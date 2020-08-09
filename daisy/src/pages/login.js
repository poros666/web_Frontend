import React, { Component } from "react"
import NormalLoginForm from "../components/login/loginForm"
import { Card } from "antd"
import "../style/logincard.css"

export default class Login extends Component {
  render() {
    return (
      <Card className="login-card" title="登录">
        <br />
        <NormalLoginForm />
      </Card>
    )
  }
}
