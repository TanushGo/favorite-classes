import "./class.css";
import React, {useState, useEffect} from 'react';


function ClassGraphQL(props) {

    const [classInfo, setClassInfo] = useState({});


    const url = "https://api.peterportal.org/graphql"


    useEffect(() => {
        const fetchData = async () => {
            const query = `
                query {
                    course(id:"${props.name}") {
                        title
                        department_name
                        description
                        instructor_history{
                            name
                        }
                    }
                }
            `
            
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({query}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            console.log(data);
            setClassInfo(data.data.course);
        
        }
        fetchData();
    }, [props.name]);
    let info;
    let instructors='';
    if ((classInfo) && classInfo.instructor_history) {
        console.log(classInfo.instructor_history)
        for (let i = 0; i < classInfo.instructor_history.length; i++) {
            if (classInfo.instructor_history[i]){
                instructors +=classInfo.instructor_history[i].name +' , ';
            }
          }
        
        info = <div className="information">
            <p id="title"> {classInfo.title} </p>
            <p id="department">{classInfo.department_name}</p>
            <p id="description">{classInfo.description}</p>
            <p id="instructor">Professors : {instructors.slice(0,-2)}</p>
            </div>
    } else if (classInfo == null) {
        info = <p>Class Not Found</p>
    } else {
        info = <p>Loading...</p>
    }
    

    return (
        <div className="class">
            {props.name}
            <div>
                {info}
            </div>
        </div>
    )
}

export default ClassGraphQL;