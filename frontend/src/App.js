import StudentList from './components/StudentList'
import './App.css';
import {useEffect, useState} from 'react'
function App() {

  const [students, setStudents] = useState([]);

  const getData = async (URL) => {
    let response =  await fetch(URL);
    let json = await response.json();
    setStudents(json.data);
  };

  useEffect(() => {
    getData("http://localhost:1337/api/students?populate=*")

    // fetch("http://localhost:1337/api/students")
    // .then(response => response.json())
    // .then(json => setStudents(json))

  }, []);

  return (
    <div className="App">
      <header className="App-header">
          <h1>Strapi CMS</h1>
          <StudentList students={students}/>
      </header>
    </div>
  );
}

export default App;
