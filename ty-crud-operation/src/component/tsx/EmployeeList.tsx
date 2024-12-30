import { useState } from "react";
import "../css/EmployeeList.style.css";
import { IEmployee } from "../ts/Employee.type";
import EmployeeModal from "./EmployeeModal";

type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

  const viewEmployee = (data: IEmployee) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <article className="list-header">
        <h3>Employee List</h3>
      </article>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {list.map((obj) => {
          return (
            <tr key={obj.id}>
              <td>{`${obj.firstName} ${obj.lastName}`}</td>
              <td>{obj.email}</td>
              <td>
                <div>
                  <input
                    type="button"
                    value="View"
                    onClick={() => viewEmployee(obj)}
                  />
                  <input
                    type="button"
                    value="Edit"
                    onClick={() => onEdit(obj)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteClickHnd(obj)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      {showModal && dataToShow !== null && (
        <EmployeeModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default EmployeeList;
