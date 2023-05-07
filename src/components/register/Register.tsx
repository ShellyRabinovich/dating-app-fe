import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./Register.css"

function Register() {
    let [userName, setUserName] = useState("")
    let [password, setPassword] = useState("")
    let [age, setAge] = useState("")
    let [city, setCity] = useState("")
    let [gender, setGender] = useState("")
    let [seekedGender, setSeekedGender] = useState("")
    let [bio, setBio] = useState("")

    const navigate = useNavigate()
    let dispatch = useDispatch()

    async function onButtonClicked(): Promise<void> {
        try {
            const response = await axios.post(
                "http://localhost:8080/users/",
                { userName, password, age, city, gender, seekedGender, bio }
            )
            navigate("/login")
        } catch (e: any) {
            console.error(e)
            if (e.response?.data?.error?.massage) {
                alert(e.response.data.error.massage)
            } else {
                alert("One or more inputs are invalid")
            }
        }
    }
    
    return (
        <div className="registerContainer">
            <div className="inputs-wrapper">
                <h1 className="register-header">REGISTER</h1>
                <input
                    type="text"
                    className="userName"
                    placeholder="user name"
                    onChange={(event) => setUserName(event.target.value)}
                />
                <br />
                <input
                    type="password"
                    className="passwordInput"
                    placeholder="password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <br />
                <input
                    className="age"
                    placeholder="age "
                    onChange={(event) => setAge(event.target.value)}
                />
                <br />
                <input
                    type="text"
                    className="city"
                    placeholder="city"
                    onChange={(event) => setCity(event.target.value)}
                />
                <br />
                <input
                    type="text"
                    className="gender"
                    placeholder="gender"
                    onChange={(event) => setGender(event.target.value)}
                />
                <br />
                <input
                    type="text"
                    className="seekedGender"
                    placeholder="seekedGender"
                    onChange={(event) => setSeekedGender(event.target.value)}
                />
                <br />
                <input
                    type="text"
                    className="bio"
                    placeholder="Bio"
                    onChange={(event) => setBio(event.target.value)}
                />
                <br /> <br />
                <button className="regButton" onClick={onButtonClicked}>
                    Sign up
                </button>
            </div>
        </div>
    )
}

export default Register
