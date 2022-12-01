import StudentItem from './StudentItem';
import classes from './StudentList.module.css';

function StudentList(props) {
  return (
    <ul className={classes.list}>
      {props.students.map((student) => (
        <StudentItem
          key={student.meetingId}
          id={student.meetingId}
          image={student.image}
          name={student.name}
          age={student.age}
        />
      ))}
    </ul>
  );
}

export default StudentList;
