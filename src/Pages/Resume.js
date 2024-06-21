import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from '../Layout/BaseLayout';
import PageStarting from '../Components/PageStarting/PageStarting';
import AllExperience from '../Components/AllExperience/AllExperience';
import ContactBottom from "../Components/ContactBottom/ContactBottom";

function Resume() {
    return (
        <BaseLayout>
            <PageStarting title={"experience"} disSize={"vsmall"} discription={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit deleniti inventore eum commodi debitis pariatur magnam quia, iste ipsam maiores numquam harum, culpa"} />
            <AllExperience />
            <ContactBottom />
        </BaseLayout>
    )
}

export default Resume;