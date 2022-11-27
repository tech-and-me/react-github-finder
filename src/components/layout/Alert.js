import { startTransition, useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import alertIcon from "../../assets/alert.png";

const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    alert && (
      <div className="flex items-center">
        <div
          style={{
            display: "inline-block",
          }}
        >
          <img src={alertIcon} alt="Alert" width="30px" />
        </div>

        <strong>{alert.msg}</strong>
      </div>
    )
  );
};

export default Alert;
