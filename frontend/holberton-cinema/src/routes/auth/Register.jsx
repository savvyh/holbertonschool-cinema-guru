import "./auth.css";
import Input from "../../components/general/Input";
import Button from "../../components/general/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Register({
  username,
  setUsername,
  password,
  setPassword,
}) {
  return (
    <>
      <h2 className="auth-title">Create a new account</h2>
      <div className="auth-input-group">
        <FontAwesomeIcon className="auth-icon" icon={faUser} />
        <Input
          label="Username:"
          type="text"
          value={username}
          setValue={setUsername}
          className="auth-input"
        />
      </div>
      <div className="auth-input-group">
        <FontAwesomeIcon className="auth-icon" icon={faKey} />
        <Input
          label="Password:"
          type="password"
          value={password}
          setValue={setPassword}
          className="auth-input"
        />
      </div>
      <div className="auth-button-container">
        <Button
          label="Sign Up"
          icon={<FontAwesomeIcon icon={faPlus} />}
          type="submit"
          className="auth-submit-button"
        />
      </div>
    </>
  );
}
