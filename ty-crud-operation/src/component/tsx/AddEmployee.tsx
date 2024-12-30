import { useState } from "react";
import "../css/FormEmployee.style.css";
import { IEmployee } from "../ts/Employee.type";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
  const { onBackBtnClickHnd, onSubmitClickHnd } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const onFirstNameChangedHnd = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangedHnd = (e: any) => {
    setLastName(e.target.value);
  };

  const onEmailChangedHnd = (e: any) => {
    setEmail(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    if (firstName !== "" || lastName !== "" || email !== "") {
      const data: IEmployee = {
        id: new Date().toJSON().toString(),
        firstName: firstName,
        lastName: lastName,
        email: email,
      };
      onSubmitClickHnd(data);
      onBackBtnClickHnd();
    }
  };

  return (
    <div className="form-container">
      <div>
        <h3>Add Employee Form</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label>FirstName : </label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={onFirstNameChangedHnd}
          />
        </div>
        <div>
          <label>LastName : </label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={onLastNameChangedHnd}
          />
        </div>
        <div>
          <label>Email Add : </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={onEmailChangedHnd}
          />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Add Employee" />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
