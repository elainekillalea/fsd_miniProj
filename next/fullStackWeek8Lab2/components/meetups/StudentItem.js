import Card from '../ui/Card';
import classes from './StudentItem.module.css';
import { useRouter } from 'next/router';

function StudentItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  async function deleteHandler() {
    const response = await fetch('/api/delete-student', {
      method:'POST',
      body: JSON.stringify({test:'test data'}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    res.json(data)
  }

  return (
    <li className={classes.item}>
      <Card> 
        <div className={classes.flexcontent}>
          <div className={classes.image}>
            <img src={props.image} alt={props.name} />
          </div>
          <div className={classes.content}>
            <h3>{props.name}</h3>
            <h4>{props.age}</h4>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </Card>
    </li>
  );
}

export default StudentItem;
