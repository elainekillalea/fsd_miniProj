// our-dimain.com/new-meetup
import NewStudentForm from '../../components/meetups/NewStudentForm'
import { useRouter } from 'next/router';

function NewStudentPage() {
    const router = useRouter();
    async function addStudentHandler(enteredStudentData)  {
        const response = await fetch('/api/new-student', {
            method: 'POST',
            body: JSON.stringify(enteredStudentData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        router.push('/');
    }

    return <NewStudentForm onAddStudent={addStudentHandler} />
}

export default NewStudentPage