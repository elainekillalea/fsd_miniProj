import classes from './StudentDetail.module.css'

function StudentDetail(props) {
    return (
        <section className={classes.detail}>
            <img src={props.image} alt={props.name} />
            <h1>{props.name}</h1>
            <address>{props.age}</address>
            <p>{props.grade}</p>
        </section>
    )
}

export default StudentDetail