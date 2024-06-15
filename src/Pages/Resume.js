import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from '../Layout/BaseLayout';
import PageStarting from '../Components/PageStarting/PageStarting';

function Resume() {
    return (
        <BaseLayout>
            <PageStarting title={"resume"} disSize={"vvsmall"} discription={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit deleniti inventore eum commodi debitis pariatur magnam quia, iste ipsam maiores numquam harum, culpa"} />
        </BaseLayout>
    )
}

export default Resume;