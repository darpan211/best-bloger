import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const ProductsCarouselCard = ({ data, mr }) => {
  return (
    <div
      key={data?.id}
      className={twMerge(
        "relative border-gray-200 group rounded-xl",
        mr ? "sm:mr-5" : ""
      )}
    >
      <div className="relative">
        <div className="w-[384px] mt-7 mx-auto">
          <div className="rounded-lg relative w-[384px] h-[280px]">
            <img
              src={data?.post?.img}
              className="rounded-lg w-[384px] h-[280px]"
            />
            <div className="absolute bottom-0 backdrop-blur-md backdrop-invert bg-white/30 w-[384px] rounded-b-lg">
              <div className="flex justify-between w-[384px] h-[88px] items-center">
                <div className="ml-6">
                  <p className="text-white">{data?.name}</p>
                  <p className="text-white">{data?.date}</p>
                </div>
                <p className="text-white mr-6">{data?.status}</p>
              </div>
            </div>
          </div>
          <p className="text-white text-[24px] leading-8 mt-5">
            {data?.post?.heading}
          </p>
          <p className="text-gray-400 text-[16px] leading-6 mt-3">
            {data?.post?.content}
          </p>
          <p className="text-indigo-500 text-[16px] leading-6 mt-5">
            Read post
          </p>
        </div>
      </div>
    </div>
  );
};

ProductsCarouselCard.defaultProps = {
  data: {},
  mr: false,
  type: "default",
};

ProductsCarouselCard.propTypes = {
  data: PropTypes.object.isRequired,
  mr: PropTypes.bool,
  type: PropTypes.oneOf(["default", "list"]),
};

export default ProductsCarouselCard;
