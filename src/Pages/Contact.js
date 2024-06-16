import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from '../Layout/BaseLayout';
import PageStarting from '../Components/PageStarting/PageStarting';
import ContactBottom from '../Components/ContactBottom/ContactBottom';
import ContactDetails from '../Components/ContactDetails/ContactDetails';

function Contact() {
    return (
        <BaseLayout>
            <PageStarting title={"contact_me"} isImage={false} disSize={"vvsmall"} discription={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit deleniti inventore eum commodi debitis pariatur magnam quia, iste ipsam maiores numquam harum, culpa"} />
            <ContactBottom showExtra={false} />
            <ContactDetails />
        </BaseLayout>
    )
}

export default Contact;