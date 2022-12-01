import StudentDetail from '../../components/meetups/StudentDetail'
import { useRouter } from 'next/router';

function StudentDetails() {
    const router = useRouter();
    console.log("I'm a hard coded page; I'm supposed to be " + router.query.meetupId)
    return (
        <StudentDetail
            image='https://www.planetware.com/photos-large/SEY/best-islands-maldives.jpg'
            name='Sally'
            age='20'
            grade='Yellow' >
        </StudentDetail >
    )
}

export default StudentDetails;