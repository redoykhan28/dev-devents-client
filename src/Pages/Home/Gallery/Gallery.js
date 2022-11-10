import React from 'react';
import image1 from '../../../images/gallery/anthony-delanoix-hzgs56Ze49s-unsplash.jpg'
import image2 from '../../../images/gallery/danilo-batista-Eadc_H4R_DY-unsplash.jpg'
import image3 from '../../../images/gallery/kats-weil-CLD1i8hp008-unsplash.jpg'
import image4 from '../../../images/gallery/kelsey-chance-tAH2cA_BL5g-unsplash.jpg'
import image5 from '../../../images/gallery/mitchell-orr---LyFIjXoFY-unsplash.jpg'
import image6 from '../../../images/gallery/pablo-heimplatz-ZODcBkEohk8-unsplash.jpg'
import image7 from '../../../images/gallery/victoria-rodriguez-YYXqBwvdoeI-unsplash.jpg'
import image8 from '../../../images/gallery/viktor-forgacs-51AhxwkYyHo-unsplash.jpg'
import image9 from '../../../images/gallery/yutacar-JKMnm3CIncw-unsplash.jpg'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Gallery = () => {
    return (
        <div className=' my-5'>
            <ul className="nav nav-tabs mb-4 container" id="myTab" role="tablist">
                <li className="nav-item " role="presentation">
                    <button className="nav-link active clr" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Featured</button>
                </li>
                <li className="nav-item " role="presentation">
                    <button className="nav-link clr" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Weeding</button>
                </li>
                <li className="nav-item " role="presentation">
                    <button className="nav-link clr " id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Birthday</button>
                </li>
                <li className="nav-item " role="presentation">
                    <button className="nav-link clr" id="anniversary-tab" data-bs-toggle="tab" data-bs-target="#anniversary-tab-pane" type="button" role="tab" aria-controls="anniversary-tab-pane" aria-selected="false">Anniversary</button>
                </li>


            </ul>
            <div className="tab-content tb" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                    <div className="row g-0">
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image1} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image1} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image2} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image2} alt="" />
                                </PhotoView>
                            </PhotoProvider >                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image3} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image3} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image4} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image4} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image5} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image5} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image6} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image6} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image7} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image7} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image8} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image8} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                    <div className="row g-0">
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image3} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image3} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image2} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image2} alt="" />
                                </PhotoView>
                            </PhotoProvider >                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image1} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image1} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image4} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image4} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image8} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image8} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image6} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image6} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image9} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image9} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image5} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image5} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                    <div className="row g-0">
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image1} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image1} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image4} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image4} alt="" />
                                </PhotoView>
                            </PhotoProvider >                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image3} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image3} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image2} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image2} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image9} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image9} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image8} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image8} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image7} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image7} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image6} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image6} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="anniversary-tab-pane" role="tabpanel" aria-labelledby="anniversary-tab" tabindex="0">
                    <div className="row g-0">
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image5} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image5} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image9} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image9} alt="" />
                                </PhotoView>
                            </PhotoProvider >                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image3} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image3} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image8} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image8} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image1} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image1} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image6} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image6} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image7} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image7} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <PhotoProvider >
                                <PhotoView src={image4} >
                                    <img className='img-fluid img-gl m-0 w-100   ' src={image4} alt="" />
                                </PhotoView>
                            </PhotoProvider >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;