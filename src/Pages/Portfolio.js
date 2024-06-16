import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from '../Layout/BaseLayout';
import PageStarting from '../Components/PageStarting/PageStarting';
import PortfolioProject from '../Components/PortfolioProject/PortfolioProject';
import Title from '../Components/Title/Title';
import ContactBottom from '../Components/ContactBottom/ContactBottom';

function Portfolio() {
    return (
        <BaseLayout>
            <PageStarting title={"portfolio"} disSize={"vvsmall"} discription={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit deleniti inventore eum commodi debitis pariatur magnam quia, iste ipsam maiores numquam harum, culpa"} />
            <Title title={"Projects"} symbol={""} discription={""} />
            <PortfolioProject />
            <ContactBottom />
        </BaseLayout>
    )
}

export default Portfolio;