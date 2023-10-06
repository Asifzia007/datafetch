

const UserData = ({users}) => {
  return (
    <>
    {
        users.map((curUser) => {
            const {id, name, email, phone, website} = curUser;
            const {street, city , zipcode} = curUser.address

            return(
                <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{street}, {city}, {""} {zipcode} </td>
                <td>{phone}</td>
                <td>{website}</td>
                </tr>
            )
        })
    }
    </>
  )
}

export default UserData






