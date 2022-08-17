import React from 'react';
function Footer() {
    return (
        <>
            <div className='d-flex flex-column '>
                <footer className="bg-dark text-center text-white mt-auto">

                    <div className="container p-4 pb-0">

                        <section className="mb-4">

                            <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com" role="button"
                            ><i className='fa fa-facebook'></i></a>


                            <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com" role="button"
                            ><i className="fa fa-twitter"></i
                            ></a>


                            <a className="btn btn-outline-light btn-floating m-1" href="https://www.google.com" role="button"
                            ><i className="fa fa-google"></i
                            ></a>


                            <a className="btn btn-outline-light btn-floating m-1" href="https://instagram,com" role="button"
                            ><i className="fa fa-instagram"></i
                            ></a>


                            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com" role="button"
                            ><i className="fa fa-linkedin"></i
                            ></a>


                            <a className="btn btn-outline-light btn-floating m-1" href="https://www.github.com" role="button"
                            ><i className="fa fa-github"></i
                            ></a>
                        </section>

                    </div>
                    <div className="text-center p-3" >
                        © 2020 Copyright:
                        <a className="text-white" href="https://texthub-20914.web.app/"> texthub-20914.web.com</a>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer