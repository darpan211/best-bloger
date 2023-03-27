import ArrowUpRight from "@/components/svgs/arrow-up-right";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import moment from "moment";
import styles from "../index.module.css";
import { blogUrl } from "@/utils/blog";

const Card = ({ data }) => {
  const router = useRouter();
  const isFirefox = typeof InstallTrigger !== "undefined";
  return (
    <div className="fontInter w-full px-2 mt-7 mx-auto">
      <div className="rounded-lg relative w-full h-[280px]">
        <Link href={`/blog/${data?.slug}`}>

          <img
            src={`${data?.coverImage ? (data.coverImage).slice(0, 5) == "https" ? data?.coverImage : (`${blogUrl}/`).concat(data?.coverImage) : 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ferikkain%2Ffiles%2F2018%2F01%2FRey-Luke.jpg'}`}
            className="rounded-lg w-full h-full cursor-pointer object-cover"
          />
        </Link>
        <div
          className={`${styles.backdrop} ${isFirefox ? styles.firefoxBackdrop : styles.googleBackdrop
            } absolute bottom-0 w-full rounded-b-lg`}
        >
          <div className="flex justify-between w-full h-[58px] items-center">
            <div className="ml-6">
              <p className="text-white">
                {moment(data?.publishedAt).format("D MMM YYYY")}
              </p>
            </div>
            <p className="text-white mr-6">{data?.author}</p>
          </div>
        </div>
      </div>
      <Link href={`/blog/${data?.slug}`}>
        <p className="text-white text-[24px] leading-8 mt-5">{data?.title}</p>
      </Link>

      <p className="text-gray-400 text-[16px] leading-6 mt-3">
        {data?.description}
      </p>
      <Link href={`/blog/${data?.slug}`}>
        <p
          onClick={() => router.push(`/blog/${data?.slug}`)}
          className="text-indigo-500 text-[16px] leading-6 mt-5 flex gap-3 items-center cursor-pointer md:justify-start justify-center"
        >
          Read post <ArrowUpRight stroke="#6938EF" />
        </p>
      </Link>
    </div>
  );
};

export default Card;
