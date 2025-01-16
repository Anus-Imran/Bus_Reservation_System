"use client";

import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";

import item1 from "../../assets/images/item/p1.jpg";
import item2 from "../../assets/images/item/p2.jpg";
import item3 from "../../assets/images/item/p3.jpg";
import item4 from "../../assets/images/item/p4.png";
import item5 from "../../assets/images/item/p5.png";
import item7 from "../../assets/images/item/p7.png";
import item8 from "../../assets/images/item/p8.jpg";
import item9 from "../../assets/images/item/p9.jpg";
import item10 from "../../assets/images/item/p10.png";

function Page() {

  const params = useParams(); // Use this to get the dynamic segments
  const url_id = params.slug

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

  // Filter item based on the `url_id`
  const selectedItem = items.filter((item) => item.id === parseInt(url_id))[0];
  console.log(url_id);

  if (!selectedItem) {
    return <p>Loading...</p>; // Show loading or error message if no item is found
  }


  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt={selectedItem.title}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={selectedItem.imgSrc}
            width={400}
            height={400}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {selectedItem.title}
            </h1>
            <p className="leading-relaxed">
              This is the description for {selectedItem.title}. Add any relevant
              details here.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                {selectedItem.price}
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
