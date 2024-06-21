import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from '../Layout/BaseLayout';
import PageStarting from '../Components/PageStarting/PageStarting';
import PortfolioProject from '../Components/PortfolioProject/PortfolioProject';
import Title from '../Components/Title/Title';
import ContactBottom from '../Components/ContactBottom/ContactBottom';

function Portfolio() {
    return (
        <BaseLayout>
            <PageStarting title={"portfolio"} disSize={"vsmall"} discription={"...Throughout my journey, I have completed numerous projects across various technologies to explore different domains and acquire new skills."} />
            <Title title={"Projects"} symbol={""} discription={""} />
            <PortfolioProject />
            <ContactBottom />
        </BaseLayout>
    )
}

export default Portfolio;