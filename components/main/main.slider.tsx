'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import { title } from "process";
import Link from "next/link";

interface IProps {
    data: ITrackTop[],
    title: string,
    customClass?: string
}

export default function MainSlider(props: IProps) {

    const {data, title, customClass} = props;
    //console.log(">>>>>>>>>Prop data:", props.data[0].title);
    const NextArrow = (props: any) => {
        return (
            <Button className="slider-arrow next"  color="inherit" variant="contained"
                onClick={props.onClick}
            >
                <ChevronRightIcon />
            </Button>
        )
    }

    const PrevArrow = (props: any) => {
        return (
            <Button  className="slider-arrow prev" color="inherit" variant="contained" onClick={props.onClick}>
                <ChevronLeftIcon />
            </Button>
        )
    }

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return(        
        <Box className={`track-slider ${customClass}`}>
            <h2>{title}</h2>

            <Slider {...settings}>
                {data.map((track, index) => {
                    return(
                        <div key={track._id} className={`track ${index===0?"first-track":""}`}>
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${track.imgUrl}`} alt={track.title}/>
                            <Link href={`track/${track._id}?audio=${track.trackUrl}`}>{track.title}</Link>
                            <p>{track.description}</p>
                        </div>
                    )
                })}
            </Slider>
            <Divider sx={{margin: "30px 0"}} />
        </Box>  
    );
}