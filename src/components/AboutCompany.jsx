import React from 'react';
import '../styles/style.scss';

const AboutCompany = () => {
    return (
        <div className="about-company">
            <div className="container">
                <div className="company-card">
                    <div className="left">
                        {/* <img src={require("../assets/ce1.png")} alt="" /> */}
                        <div className="first">
                            {/* <img src={require("../assets/ce2.png")} alt="" /> */}
                            <div className="second">
                                {/* <img src={require("../assets/ce3.png")} alt="" /> */}
                                <div className="third">
                                    <img src={require("../assets/logo.png")} alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="inner-right">
                            <p>Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан. </p>
                            <button className='main-btn' data-bs-toggle="modal" data-bs-target="#exampleModal1">Узнать больше</button>
                        </div>

                        <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">About Us </h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* <input type="search" placeholder='Search' className='form-control'/>
                                        <button className='btn btn-success mt-2'>Search</button> */}
                                        <p>Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан. </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AboutCompany;