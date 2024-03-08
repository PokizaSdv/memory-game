import "./styles.css";
import { students } from "./data.js";
import { useState } from "react";

export default function Students() {
    console.log(students);
    const [activeStudent, setActiveStudent] = useState({});

    const showStudents = (student) => {
        setActiveStudent(student);
        console.log(student);
    };

    return (
        <div className="content">
            <h1>Students</h1>
            <div className="container">
                <div className="left">
                    <ul>
                        {students.map((student, idx) => {
                            return (
                                <li
                                    key={idx}
                                    onClick={() => showStudents(student)}
                                >
                                    {student.name} {student.last_name}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="right">
                    <p>{activeStudent.age}</p>
                    <p>{activeStudent.city}</p>
                    <p>{activeStudent.phone_number}</p>
                </div>
            </div>
        </div>
    );
}
