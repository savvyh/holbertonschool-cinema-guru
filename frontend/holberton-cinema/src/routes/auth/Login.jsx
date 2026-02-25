import "./auth.css";
import Input from "../../components/general/Input";
import Button from "../../components/general/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Login({
  username,
  setUsername,
  password,
  setPassword,
}) {
  return (
    <>
      <h2 className="auth-title">Sign in with your account</h2>
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
          label="Sign In"
          icon={<FontAwesomeIcon icon={faKey} />}
          type="submit"
          className="auth-submit-button"
        />
      </div>
    </>
  );
}
