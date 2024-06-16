import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from '../Layout/BaseLayout';
import PageStarting from '../Components/PageStarting/PageStarting';
import AllServices from '../Components/AllServices/AllServices';
import ContactBottom from '../Components/ContactBottom/ContactBottom';

function Services() {
    return (
        <BaseLayout>
            <PageStarting title={"services"} isImage={false} disSize={"vvsmall"} discription={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit deleniti inventore eum commodi debitis pariatur magnam quia, iste ipsam maiores numquam harum, culpa"} />
            <AllServices />
            <ContactBottom />
        </BaseLayout>
    )
}

export default Services;