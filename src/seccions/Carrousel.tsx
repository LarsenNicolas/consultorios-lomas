import "../tailwind.css";
import { ImagenCarrousel } from "../components/ImagenCarrousel"
import React from "react";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Carrousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 2400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
        ],
    };

    return (
        <Slider id="carrousel" {...settings}>
            <div>
                <ImagenCarrousel path="https://raw.githubusercontent.com/LarsenNicolas/consultorios-lomas/master/public/fotosConsutorio/Frente.jpg" />
            </div>
            <div>
                <ImagenCarrousel path="https://raw.githubusercontent.com/LarsenNicolas/consultorios-lomas/master/public/fotosConsutorio/consulf.jpg" />
            </div>
            <div>
                <ImagenCarrousel path="https://raw.githubusercontent.com/LarsenNicolas/consultorios-lomas/master/public/fotosConsutorio/consulf2.jpg" />
            </div>
            <div>
                <ImagenCarrousel path="https://raw.githubusercontent.com/LarsenNicolas/consultorios-lomas/master/public/fotosConsutorio/consul2.jpg" />
            </div>
            <div>
                <ImagenCarrousel path="https://raw.githubusercontent.com/LarsenNicolas/consultorios-lomas/master/public/fotosConsutorio/consul3.jpg" />
            </div>
            <div>
                <ImagenCarrousel path="https://raw.githubusercontent.com/LarsenNicolas/consultorios-lomas/master/public/fotosConsutorio/pasillo%20(2).jpeg" />
            </div>
        </Slider>
    );
}



