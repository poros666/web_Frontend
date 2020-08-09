import React, { Component } from "react"
import RegistrationForm from "../components/login/registerForm"
import { Card } from "antd"
import "../style/registercard.css"

export default class Register extends Component {
  render() {
    return (
      <Card className="register-card" title="注册">
        <br />
        <RegistrationForm />
      </Card>
    )
  }
}
