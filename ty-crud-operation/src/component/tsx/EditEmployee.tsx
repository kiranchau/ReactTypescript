import { useState } from "react";
import { IEmployee } from "../ts/Employee.type";
import "../css/FormEmployee.style.css";

type Props = {
  data: IEmployee;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data:IEmployee) => void;
};

const EditEmployee = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;
  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);

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
      const updatedData: IEmployee = {
        id: data.id,
        firstName: firstName,
        lastName: lastName,
        email: email,
      };
      onUpdateClickHnd(updatedData);
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
          <input type="submit" value="Update Employee" />
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
