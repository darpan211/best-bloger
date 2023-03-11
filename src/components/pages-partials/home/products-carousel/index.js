import PropTypes from "prop-types";
import Slider from "react-slick";
import { ArrowLeft } from "@/components/svgs/arrowLeft";
import { ArrowRight } from "@/components/svgs/arrowRight";
import styles from "./card.module.css";
import Card from "../../resources/cards/ResourceCard";

const mainSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  arrows: true,
  swipeToSlide: true,
  draggable: true,
};

function NextArrow({ currentSlide, slideCount, cardsToShow, ...props }) {
  return (
    <button
      {...props}
      className={`${styles.arrowButton} absolute !inline-flex items-center justify-center left-0 -bottom-20 w-14 h-14 translate-x-[70px]`}
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - cardsToShow ? true : false}
      type="button"
    >
      <ArrowRight width={14} height={14} />
    </button>
  );
}

NextArrow.propTypes = {
  currentSlide: PropTypes.number,
  slideCount: PropTypes.number,
  cardsToShow: PropTypes.number,
};

NextArrow.defaultProps = {
  currentSlide: 0,
  slideCount: 0,
};

function PrevArrow({ currentSlide, slideCount, ...props }) {
  return (
    <button
      {...props}
      // className={`${styles.arrowButton} absolute inline-flex items-center justify-center md:left-[-30px] -bottom-20 w-14 h-14 translate-x-[30px] left-[-62%]`}
      className={`${styles.arrowButton} absolute !inline-flex items-center justify-center left-0 -bottom-20 w-14 h-14 translate-x-0`}

      // className='moz-css absolute !inline-flex items-center justify-center left-0  border border-gray-200 rounded-full -bottom-20 w-14 h-14 translate-x-[70px]'
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <ArrowLeft width={14} height={14} />
    </button>
  );
}

PrevArrow.propTypes = {
  currentSlide: PropTypes.number,
  slideCount: PropTypes.number,
};

const ProductsCarousel = (props) => {
  const cardsToShow = {
    desktop: 3.8,
    bigTablet: 3.2,
    tablet: 2,
    mobile: 1,
  };

  const settings = {
    ...mainSettings,
    slidesToShow: cardsToShow.desktop,
    nextArrow: <NextArrow cardsToShow={cardsToShow.desktop} />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: cardsToShow.bigTablet,
          nextArrow: <NextArrow cardsToShow={cardsToShow.bigTablet} />,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: cardsToShow.tablet,
          nextArrow: <NextArrow cardsToShow={cardsToShow.tablet} />,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: cardsToShow.mobile,
        },
      },
    ],
  };

  return (
    <span className="relative">
      <Slider {...settings}>
        {(props?.blogData || []).map((item, i) => (
          <Card key={item.id} data={item} index={i} />
        ))}
      </Slider>
    </span>
  );
};

ProductsCarousel.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ProductsCarousel;
