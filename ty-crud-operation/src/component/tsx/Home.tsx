import { useEffect, useState } from "react";
import "../css/Home.style.css";
import { IEmployee, PageEnum } from "../ts/Employee.type";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

const Home = () => {
  const [employeeList, setEmployeeList] = useState([] as IEmployee[]);
  const [showPage, setShowPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IEmployee);

  useEffect(() => {
    const listInString = window.localStorage.getItem("EmployeeList");
    if (listInString) {
      _setEmployeeList(JSON.parse(listInString));
    }
  }, []);

  const onAddEmployeeClickHnd = () => {
    setShowPage(PageEnum.add);
  };

  const showListPage = () => {
    setShowPage(PageEnum.list);
  };

  const _setEmployeeList = (list: IEmployee[]) => {
    setEmployeeList(list);
    window.localStorage.setItem("EmployeeList", JSON.stringify(list));
  };

  const onAddEmployee = (data: IEmployee) => {
    _setEmployeeList([...employeeList, data]);
  };

  const deleteEmployee = (data: IEmployee) => {
    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];
    tempList.splice(indexToDelete, 1);
    _setEmployeeList(tempList);
  };

  const editEmployeeData = (data: IEmployee) => {
    setShowPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const udpateData = (data: IEmployee) => {
    const filterData = employeeList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filterData);
    const tempData = [...employeeList];
    tempData[indexOfRecord] = data;
    _setEmployeeList(tempData);
  };

  return (
    <>
      <article className="article-header">
        <header>
          <h3>React : Simple CRUD Application</h3>
        </header>
      </article>
      <section className="section-content">
        {showPage === PageEnum.list && (
          <>
            <input
              className="add-employee-btn"
              type="button"
              value="Add Employee"
              onClick={onAddEmployeeClickHnd}
            />
            <EmployeeList
              list={employeeList}
              onDeleteClickHnd={deleteEmployee}
              onEdit={editEmployeeData}
            />
          </>
        )}
        {showPage === PageEnum.add && (
          <>
            <AddEmployee
              onBackBtnClickHnd={showListPage}
              onSubmitClickHnd={onAddEmployee}
            />
          </>
        )}
        {showPage === PageEnum.edit && (
          <>
            <EditEmployee
              data={dataToEdit}
              onBackBtnClickHnd={showListPage}
              onUpdateClickHnd={udpateData}
            />
          </>
        )}
      </section>
    </>
  );
};

export default Home;
