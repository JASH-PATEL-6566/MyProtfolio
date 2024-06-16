import React from 'react';
import Row from "../../Layout/Row";

function ContactDetails() {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Row className={"mt-5"}>
                <div className={`col-md-4 d-flex flex-column all-border justify-content-center align-items-center py-3`}>
                    <p className='blue_color vsmall_fonts'>&#123;mobile&#125;</p>
                    <p className='yellow_color small_fonts'>+91 6353887366</p>
                </div>
                <div className={`col-md-4 d-flex flex-column all-border justify-content-center align-items-center py-3`}>
                    <p className='blue_color vsmall_fonts'>&#123;email&#125;</p>
                    <p className='yellow_color small_fonts'>pateljash1511@gmail.com</p>
                </div>
                <div className={`col-md-4 d-flex flex-column all-border justify-content-center align-items-center py-3`}>
                    <p className='blue_color vsmall_fonts'>&#123;address&#125;</p>
                    <p className='yellow_color small_fonts'>surat, gujarat</p>
                </div>
            </Row>
        </div>
    )
}

export default ContactDetails;