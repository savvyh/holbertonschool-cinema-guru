import "./auth.css";
import Input from "../../components/general/Input";
import Button from "../../components/general/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Register({
  username,
  setUsername,
  password,
  setPassword,
}) {
  return (
    <>
      <Input
        label="Username:"
        type="text"
        value={username}
        setValue={setUsername}
      />
      <Input
        label="Password:"
        type="password"
        value={password}
        setValue={setPassword}
      />
      <Button
        label="Sign Up"
        icon={<FontAwesomeIcon icon={faPlus} />}
        type="submit"
      />
    </>
  );
}
