import React from "react";
import Employee from "./EmployeeData";

export default function EmpTable(){
    return (
    <>
        <h1>Employee Details:</h1>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Salary</th>
   
    </tr>
  </thead>
  <tbody>
    {
        Employee.map(e=>{
            return (
                <>
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.salary}</td>

                    </tr>
                </>
            )
        })
    }

  </tbody>
</table>
    </>
    )
}