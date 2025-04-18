import Image from "next/image";
import Link from "next/link";

const About2 = ({Img,TitleUp,Title,Content,FeatureList,Experience,BioImg,BioName,BioContent}) => {
    return (
        <section>
            <div className="cs_height_120 cs_height_lg_80"></div>
            <div className="cs_about cs_style_1">
                <div className="container">
                <div className="row align-items-center cs_gap_y_40">
                    <div className="col-xl-6 wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay="0.25s">
                    <div className="cs_about_thumb">
                        <Image src={Img} alt="img" width={636} height={591}   />
                    </div>
                    </div>
                    <div className="col-xl-6">
                    <div className="cs_about_content">
                        <div className="cs_section_heading cs_style_1 cs_mb_22">
                        <h3 className="cs_section_subtitle cs_accent_color text-uppercase cs_medium cs_fs_20 cs_mb_10">
                            <Image src="/assets/img/icons/fan.svg" alt="img" className="cs_section_subheading_icon" width={15} height={15}   />
                            {TitleUp}
                        </h3>
                        <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0">{Title}</h2>
                        </div>
                        <p className="cs_mb_30">{Content}</p>
                        <div className="cs_list_2_wrap">
                        <ul className="cs_list cs_style_2 cs_mp_0 cs_fs_24 cs_semibold cs_heading_font">
                        {FeatureList?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                        </ul>
                        <div className="cs_list_experience">
                            <h3 className="cs_mb_8 cs_fs_24 cs_semibold">Experience</h3>
                            <h2 className="mb-0 cs_fs_80 cs_body_font">{Experience}</h2>
                        </div>
                        </div>
                        <div className="cs_height_40 cs_height_lg_30"></div>
                        <div className="cs_about_btns">
                         <Link href="/contact" className="cs_btn cs_style_1">
                            <span>Contact</span>
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28125 0.71875L13.7812 5.96875C13.9271 6.11458 14 6.29167 14 6.5C14 6.70833 13.9271 6.88542 13.7812 7.03125L8.28125 12.2812C7.90625 12.5729 7.55208 12.5729 7.21875 12.2812C6.92708 11.9062 6.92708 11.5521 7.21875 11.2188L11.375 7.25H0.75C0.291667 7.20833 0.0416667 6.95833 0 6.5C0.0416667 6.04167 0.291667 5.79167 0.75 5.75H11.375L7.21875 1.78125C6.92708 1.44792 6.92708 1.09375 7.21875 0.71875C7.55208 0.427083 7.90625 0.427083 8.28125 0.71875Z" fill="currentColor"></path>
                            </svg>                
                        </Link>   
                        <div className="cs_about_avatar">
                            <div className="cs_about_avatar_thumb">
                            <Image src={BioImg} alt="img" width={61} height={61}   />
                            </div>
                            <div className="cs_about_phone_number_right">
                            <h3 className="cs_fs_20 cs_medium cs_mb_5">{BioName}</h3>
                            <p className="mb-0">{BioContent}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="cs_height_120 cs_height_lg_80"></div>
            </section>
    );
};

export default About2;