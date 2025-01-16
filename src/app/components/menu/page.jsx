import Link from "next/link";
import React from "react";
import Image from "next/image";

import item1 from "../assets/images/item/p1.jpg";
import item2 from "../assets/images/item/p2.jpg";
import item3 from "../assets/images/item/p3.jpg";
import item4 from "../assets/images/item/p4.png";
import item5 from "../assets/images/item/p5.png";
import item7 from "../assets/images/item/p7.png";
import item8 from "../assets/images/item/p8.jpg";
import item9 from "../assets/images/item/p9.jpg";
import item10 from "../assets/images/item/p10.png";

const Menu = () => {
  const items = [
    { id: 1, imgSrc: item1, title: "HOT WINGS(6 PCS)", price: "PKR 500" },
    { id: 2, imgSrc: item2, title: "Shooting Stars", price: "PKR 499" },
    { id: 3, imgSrc: item3, title: "SPECIAL PLATTER", price: "PKR 799" },
    { id: 4, imgSrc: item4, title: "GARLIC BREAD (4 PCS)", price: "PKR 249" },
    { id: 5, imgSrc: item5, title: "CHICKEN SPIN ROLLS", price: "PKR 499" },
    {
      id: 7,
      imgSrc: item7,
      title: "CHILLI FRIED PRAWN (4PCS)",
      price: "PKR 1499",
    },
    { id: 8, imgSrc: item8, title: "FINGER FISH (6PCS)", price: "PKR 1299" },
    { id: 9, imgSrc: item9, title: "HONEY HOT WINGS", price: "PKR 899" },
    {
      id: 10,
      imgSrc: item10,
      title: "STEAKS GRILLED SANDWICH",
      price: "PKR 699",
    },
    {
      id: 11,
      imgSrc: item9,
      title: "HONEY HOT WINGS(20PCS)",
      price: "PKR 1699",
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font border-2 text-center px-5 py-12 mx-auto">
        <div className="flex flex-wrap justify-center -m-4">
          {/* ================================================================== */}
          {items.map((item) => (
            <div
              key={item.id}
              className="lg:w-1/4 md:w-1/3 sm:w-1/3 p-4 w-full shadow-lg m-5"
            >
              {/* <Link href={`/menu/${item.id}`}> */}
              <Image
                alt={item.title}
                className="m-auto w-[300px] h-[200px] shadow-stone-300 shadow-sm   hover:shadow-lg"
                src={item.imgSrc}
                width={500}
                height={500}
                priority
              />
              {/* </Link> */}
              <div className="mt-4">
                {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        STARTER
                      </h3> */}
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {item.title}
                </h2>
                <p className="mt-1 text-red-800 font-bold">{item.price}</p>
                <Link href={`/menu/${item.id}`}>
                  <button className="bg-red-800  hover:bg-slate-950 m-2 shadow-slate-500 shadow-sm rounded-[5px] p-3 text-white">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
            // {/* ================================================================== */}
          ))}
        </div>
      </section>
    </>
  );
};
export default Menu;



