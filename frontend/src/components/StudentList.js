const StudentList = ({students}) => {
    console.log(students);
    return(
    <ul>
        {
            students.map(({attributes},i) => {
                let {firstName,lastName,age,programme, courses} = attributes;
                let {data} = courses;
                return <li key={i}>
                    <p>{firstName} {lastName}</p>
                    <p>Ålder: {age} år</p>
                    <p>Utbildning: {programme}</p>
                    <p>Kurser: <ul>{data.map((course) => <li>{course.attributes.name}</li>)}</ul></p>
                </li>
            })
        }
    </ul>
    )
}

export default StudentList