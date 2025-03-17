"use client"
import Link from 'next/link';
import data from '../../Data/blog2.json';
import SectionTitle from '../Common/SectionTitle';
import Image from 'next/image';

const Blog2 = () => {
    return (
        <section>
            <div className="cs_height_115 cs_height_lg_70"></div>
            <div className="container">
                <div className="cs_section_heading cs_style_1 text-center">
                <SectionTitle
                    Title="Our Latest News & Updates"
                    SubTitle="Blog Post"                       
                >
                </SectionTitle>
                </div>
                <div className="cs_height_45 cs_height_lg_45"></div>
                <div className="row cs_gap_y_30">
                {data.map((item, i) => (
                <div key={i} className="col-lg-4">
                    <div className="cs_post cs_style_3">
                    <div className="cs_post_thumb_out">
                        <div className="cs_post_thumb_wrap">
                        <Link href="/blog/blog-details" className="cs_post_thumb">
                            <Image src={item.img} alt="img" width={359} height={235}   />
                        </Link>
                        </div>
                        <span className="cs_posted_by cs_fs_24 cs_semibold cs_heading_color cs_heading_font">
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.9375 11.8948C0.417968 11.8948 -2.4816e-07 12.3247 -2.24801e-07 12.8591C-2.01443e-07 13.3935 0.417969 13.8234 0.9375 13.8234L2.5 13.8234L2.5 15.4305C2.5 16.8488 3.62109 18.002 5 18.002L5.625 18.002L7.5 18.002L17.5 18.002C18.8789 18.002 20 16.8488 20 15.4305L20 2.57338C20 1.15508 18.8789 0.0019523 17.5 0.00195236L7.5 0.0019528L5.625 0.00195288L5 0.00195291C3.62109 0.00195297 2.5 1.15508 2.5 2.57338L2.5 4.18052L0.937499 4.18052C0.417968 4.18052 -5.85362e-07 4.61044 -5.62004e-07 5.14481C-5.38645e-07 5.67919 0.417968 6.1091 0.937499 6.1091L2.5 6.1091L2.5 11.8948L0.9375 11.8948ZM7.5 16.0734L7.5 12.8591L9.6875 12.8591L9.6875 16.0734L7.5 16.0734ZM11.5625 16.0734L11.5625 12.8591L14.0625 12.8591L14.0625 16.0734L11.5625 16.0734ZM11.5625 10.9305L11.5625 7.07338L14.0625 7.07338L14.0625 10.9305L11.5625 10.9305ZM11.5625 5.14481L11.5625 1.93052L14.0625 1.93052L14.0625 5.14481L11.5625 5.14481ZM9.6875 1.93052L9.6875 5.14481L7.5 5.14481L7.5 1.93052L9.6875 1.93052ZM15.9375 1.93052L17.5 1.93052C17.8437 1.93052 18.125 2.21981 18.125 2.57338L18.125 5.14481L15.9375 5.14481L15.9375 1.93052ZM15.9375 7.07338L18.125 7.07338L18.125 10.9305L15.9375 10.9305L15.9375 7.07338ZM15.9375 12.8591L18.125 12.8591L18.125 15.4305C18.125 15.7841 17.8437 16.0734 17.5 16.0734L15.9375 16.0734L15.9375 12.8591ZM9.6875 7.07338L9.6875 10.9305L7.5 10.9305L7.5 7.07338L9.6875 7.07338Z" fill="#FF5500"/>
                            </svg>
                            {item.date}
                        </span>
                    </div>
                    <div className="cs_post_info">
                        <div className="cs_post_meta cs_mb_14">
                        <div className="cs_post_admin">
                            <Image src={item.avatar} alt="img"  className="cs_post_admin_img" width={50} height={50}   />
                            <div className="cs_post_admin_right">
                            <span>Post</span><br/>
                            <a href="#">Admin</a>
                            </div>
                        </div>
                        <span className="cs_post_comment">
                        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.625 11.9277C18.0938 12.8652 18.7812 13.6152 18.7812 13.6152C19 13.834 19.0312 14.1465 18.9375 14.3965C18.8125 14.6777 18.5625 14.834 18.2812 14.834C16.5938 14.834 15.25 14.209 14.3438 13.6465C13.75 13.7715 13.125 13.834 12.5 13.834C9.78125 13.834 7.5 12.584 6.5 10.8027C6.21875 10.7402 5.90625 10.709 5.625 10.6465C4.71875 11.209 3.375 11.8652 1.71875 11.8652C1.40625 11.8652 1.15625 11.6777 1.03125 11.4277C0.9375 11.1465 1 10.834 1.1875 10.6465C1.1875 10.6152 1.875 9.86523 2.375 8.92773C1.5 8.05273 1 6.99023 1 5.83398C1 3.08398 3.90625 0.833984 7.5 0.833984C10.1875 0.833984 12.5 2.11523 13.4688 3.92773C16.5938 4.27148 19 6.33398 19 8.83398C19 10.0215 18.4688 11.084 17.625 11.9277ZM5.34375 9.02148L5.96875 9.17773C6.46875 9.30273 6.96875 9.33398 7.5 9.33398C10.1875 9.33398 12.5 7.74023 12.5 5.83398C12.5 3.95898 10.1875 2.33398 7.5 2.33398C4.78125 2.33398 2.5 3.95898 2.5 5.83398C2.5 6.74023 3 7.42773 3.40625 7.83398L4.1875 8.61523L3.71875 9.58398C3.625 9.74023 3.53125 9.89648 3.46875 10.0527C3.90625 9.89648 4.375 9.67773 4.8125 9.36523L5.34375 9.02148ZM16.5625 10.834C16.9688 10.4277 17.5 9.74023 17.5 8.83398C17.5 7.30273 15.9688 5.99023 13.9688 5.52148C13.9688 5.64648 14 5.74023 14 5.83398C14 8.36523 11.5625 10.459 8.375 10.8027C9.28125 11.709 10.8125 12.334 12.5 12.334C13 12.334 13.5312 12.3027 14.0312 12.1777L14.625 12.0215L15.1875 12.3652C15.625 12.6465 16.0625 12.8965 16.5312 13.0527C16.4375 12.8965 16.3438 12.7402 16.2812 12.584L15.7812 11.6152L16.5625 10.834Z" fill="#FF5500"/>
                            </svg>
                            03 Comments</span>
                        </div>
                        <h2 className="cs_fs_24 cs_semibold cs_mb_15">
                        <Link href="/blog/blog-details">{item.title}</Link>
                        </h2>
                        <p className="cs_mb_21">{item.desc}</p>
                        <hr/>
                        <Link href="/blog/blog-details" className="cs_text_btn cs_fs_16 text-uppercase cs_heading_color cs_bold">
                        READ MORE
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28125 1.21875L13.7812 6.46875C13.9271 6.61458 14 6.79167 14 7C14 7.20833 13.9271 7.38542 13.7812 7.53125L8.28125 12.7812C7.90625 13.0729 7.55208 13.0729 7.21875 12.7812C6.92708 12.4062 6.92708 12.0521 7.21875 11.7188L11.375 7.75H0.75C0.291667 7.70833 0.0416667 7.45833 0 7C0.0416667 6.54167 0.291667 6.29167 0.75 6.25H11.375L7.21875 2.28125C6.92708 1.94792 6.92708 1.59375 7.21875 1.21875C7.55208 0.927083 7.90625 0.927083 8.28125 1.21875Z" fill="currentColor"></path>
                        </svg>                    
                        </Link>
                    </div>
                    </div>
                </div>
                ))}
                </div>
            </div>
            <div className="cs_height_120 cs_height_lg_80"></div>
            </section>
    );
};

export default Blog2;