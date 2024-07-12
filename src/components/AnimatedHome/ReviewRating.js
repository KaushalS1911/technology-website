import React, {useRef} from 'react';
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import '../../../node_modules/swiper/swiper-bundle.min.css';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import quote1 from '../../assets/images/reviews/quote1.png';
import quote2 from '../../assets/images/reviews/quote2.png';
import reviewImg from '../../assets/images/reviews/reviewImg.jpg';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

function ReviewRating() {
    const swiperRef = useRef(null);
    const reviewData = [
        {
            detail: "This IT institute exceeded my expectations in every way. The instructors are not only experts in their fields but also excellent communicators, making even the most complex topics easy to understand. The small class sizes allowed for personalized attention, ensuring that no student was left behind. The institute's emphasis on practical, real-world skills gave me the confidence to pursue opportunities in the IT industry. I highly recommend this institute to anyone looking to kickstart or advance their career in technology.",
            name: "Sujal Paghadal",
            role: "Full Stack Developer",
            rating: 5
        }, {
            detail: "This IT institute exceeded my expectations in every way. The instructors are not only experts in their fields but also excellent communicators, making even the most complex topics easy to understand. The small class sizes allowed for personalized attention, ensuring that no student was left behind. The institute's emphasis on practical, real-world skills gave me the confidence to pursue opportunities in the IT industry. I highly recommend this institute to anyone looking to kickstart or advance their career in technology.",
            name: "Darshil Thummar",
            role: "Full Stack Developer",
            rating: 5
        }, {
            detail: "This IT institute exceeded my expectations in every way. The instructors are not only experts in their fields but also excellent communicators, making even the most complex topics easy to understand. The small class sizes allowed for personalized attention, ensuring that no student was left behind. The institute's emphasis on practical, real-world skills gave me the confidence to pursue opportunities in the IT industry. I highly recommend this institute to anyone looking to kickstart or advance their career in technology.",
            name: "Heet Timbadiya",
            role: "Full Stack Developer",
            rating: 5
        },
    ];

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <Box sx={{py: "50px",mt: "120px"}} className={"reviewRating"}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={3} sx={{display: {xs: "none",md: "block"}}}>
                        <Box>
                            <img src={reviewImg} alt="review Image" style={{
                                borderRadius: "20px",
                                overflow: "hidden",
                                position: "absolute",
                                height: "400px",
                                width: "400px",
                                zIndex: "-2",
                                objectFit: 'cover'
                            }}/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Box sx={{display: {xs:"block",sm:"flex"}, justifyContent: "center", alignItems: "center"}}>
                            <Box sx={{
                                my: "40px",
                                mx: "10px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                p: {xs:"20px",sm:"25px",md:"35px"},
                                borderRadius: "25px",
                                position: "relative",
                                backgroundColor: "white"
                            }}>
                                <Box sx={{position: "absolute", top: "-12px", left: "50px"}}><img
                                    src={quote1} alt="quotation 1"/></Box>
                                <Typography component={"p"} sx={{color: "textGray", fontSize: '12px'}}>
                                    This IT institute exceeded my expectations in every way. The instructors are not
                                    only experts in their fields but also excellent communicators, making even the most
                                    complex topics easy to understand. The small class sizes allowed for personalized
                                    attention, ensuring that no student was left behind. The institute's emphasis on
                                    practical, real-world skills gave me the confidence to pursue opportunities in the
                                    IT industry. I highly recommend this institute to anyone looking to kickstart or
                                    advance their career in technology.
                                </Typography>

                                <Typography component={"h3"}
                                            sx={{fontWeight: "700", mt: "20px"}}>Dax Savani</Typography>
                                <Typography component={"p"} sx={{
                                    color: "textGray",
                                    fontSize: "12px"
                                }}>Full Stack Developer</Typography>
                                <Typography component={"div"} sx={{color: "#F09000", mt: "2px"}}>
                                    {Array(5).fill().map((_, i) => <StarRoundedIcon key={i}/>)}
                                </Typography>
                                <Box sx={{position: "absolute", bottom: "-16px", right: "50px"}}><img
                                    src={quote2} alt="quotation 2"/></Box>
                            </Box>
                            <Box sx={{width: {xs:"100%",sm:"50%"}, position: "relative"}}>
                                <Swiper
                                    ref={swiperRef}
                                    modules={[Pagination, Navigation]}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    }}
                                    spaceBetween={30}
                                    pagination={false}
                                    loop={true}
                                    slidesPerView={1}
                                >
                                    {reviewData.map((review, index) => (
                                        <SwiperSlide
                                            key={index}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >

                                            <Box sx={{
                                                my: "40px",
                                                mx: "10px",
                                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                                p: {xs:"20px",sm:"25px",md:"35px"},
                                                borderRadius: "25px",
                                                position: "relative"
                                            }}>
                                                <Typography component={"p"} sx={{color: "textGray", fontSize: '12px'}}>
                                                    {review.detail}
                                                </Typography>

                                                <Typography component={"h3"}
                                                            sx={{
                                                                fontWeight: "700",
                                                                mt: "20px"
                                                            }}>{review.name}</Typography>
                                                <Typography component={"p"} sx={{
                                                    color: "textGray",
                                                    fontSize: "12px"
                                                }}>{review.role}</Typography>
                                                <Typography component={"div"} sx={{color: "#F09000", mt: "2px"}}>
                                                    {Array(review.rating).fill().map((_, i) => <StarRoundedIcon
                                                        key={i}/>)}
                                                </Typography>
                                            </Box>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <Button
                                    className="swiper-button-prev"
                                    sx={{
                                        color: "white",
                                        left: {xs:"30%",sm:"60%",lg:"68%"},
                                        top: {xs:"100%",sm:"-5%"},
                                    }}
                                    onClick={handlePrev}
                                >
                                    <Typography sx={{backgroundColor: "#1F1754",borderRadius: "50%",p: "3px 10px"}}>
                                        <KeyboardArrowLeftRoundedIcon sx={{mt: "5px"}}/>
                                    </Typography>
                                </Button>
                                <Button
                                    className="swiper-button-next"
                                    sx={{
                                        color: "white",
                                        top: {xs:"100%",sm:"-5%"},
                                        right: {xs:"30%",sm:"0"},
                                    }}
                                    onClick={handleNext}
                                >
                                    <Typography sx={{backgroundColor: "#1F1754",borderRadius: "50%",p: "3px 10px"}}>
                                        <KeyboardArrowRightRoundedIcon sx={{mt: "5px"}}/>
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}

export default ReviewRating;
