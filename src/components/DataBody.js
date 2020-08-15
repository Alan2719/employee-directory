import React from "react";

function DataBody({employees}) {
    console.log(employees);
        let changeFormat = (date) => {
            let newDate = date.split("T");
            return newDate[0]
        }
    /*let info = employees.map(info => {return {id:info.login, image:info.picture, name: info.name, email:info.email, dob:info.dob}});
    console.log(info);*/
    return (
        <tbody>
            {employees[0] !== undefined && employees[0].name !== undefined ? (
                employees.map(({login, picture, name, phone, email, dob}) => {
                    return (
                        <tr key = {login.uuid}>
                            <td data-th="Image" className="align-middle">
                                <img src={picture.medium} alt={name.first} className="img-responsive"/>
                            </td>
                            <td data-th="Name" className="name-cell align-middle">
                                {name.first} {name.last}
                            </td>
                            <td data-th="Phone" className="align-middle">
                                {phone}
                            </td>
                            <td data-th="Email" className="align-middle">
                                <a href={"mailto: " + email}>
                                    {email}
                                </a>
                            </td>
                            <td data-th="DOB" className="align-middle">
                                {changeFormat(dob.date)}
                            </td>
                        </tr>
                    )
                })
            ) : (
                <></>
            )}
        </tbody>
    )
}

export default DataBody;