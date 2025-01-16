import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bankPay_img from "@/app/assets/images/payment/bankpay.png"
import easyPaisa_img from "@/app/assets/images/payment/easypaisa.png"
import jazzCash_img from "@/app/assets/images/payment/jazzcash.png"
import visa_img from "@/app/assets/images/payment/visa.png"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#141517] text-white">
            <div className="container mx-auto px-4 flex flex-col justify-center items-center">
                {/* Subscribe Section */}
                <div className="flex flex-col items-center justify-center h-[10px]">
                    <form className="flex w-full sm:w-auto relative">
                        <div className="relative w-[450px]">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="p-[10px] w-full rounded-[200px] bg-white border-[#e7bc91] border-2 text-black outline-none pr-[80px]"
                            />
                            <button
                                type="submit"
                                className="absolute right-1 top-[50%] transform -translate-y-[50%] bg-[#bc8a5f] text-white font-bold hover:bg-[#a47148] px-4 py-2 rounded-[50px]"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>


                {/* Footer Content */}
                <div className="flex px-[100px] justify-evenly md:grid-cols-5 gap-8 mb-10 mt-[80px]">
                    {/* Column 1 */}
                    <div>
                        <h3 className="font-bold text-lg mb-3">Bus Mate</h3>
                        <p className="text-gray-400 text-[15px] w-[460px]">
                            Bus Mate simplifies bus reservations with a user-friendly platform, reliable service, and transparent pricing. Your perfect travel companion for stress-free journeys!
                        </p>
                        <Link href="#" className="text-[#e7bc91] mt-2 block">
                            Read more →
                        </Link>
                    </div>
                    {/* Column 2 */}
                    <div className="relative pl-4 border-l-2 border-[#26282d]">
                        <h3 className="font-bold text-lg mb-5">Discover</h3>
                        <ul className="space-y-4 text-[15px]">
                            <li>
                                <Link href="#" className="text-gray-400">
                                    Buy & Sell
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400">
                                    Merchant
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400">
                                    Giving Back
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400">
                                    Help & Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="relative pl-4 border-l-2 border-[#26282d]">
                        <h3 className="font-bold text-lg mb-5">About</h3>
                        <ul className="space-y-4  text-[15px]">
                            <li>
                                <Link href="#" className="text-gray-400 ">
                                    Staff
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 ">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 ">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 ">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Column 4 */}
                    <div className="relative pl-4 border-l-2 border-[#26282d]">
                        <h3 className="font-bold text-lg mb-5">Resources</h3>
                        <ul className="space-y-4  text-[15px]">
                            <li>
                                <Link href="#" className="text-gray-400 ">
                                    Security
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 ">
                                    Global
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 ">
                                    Charts
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 ">
                                    Privacy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Column 5 */}
                    <div className="relative pl-4 border-l-2 border-[#26282d]">
                        <h3 className="font-bold text-lg mb-5">Social</h3>
                        <ul className="space-y-4  text-[15px]">
                            <li>
                                <Link href="#" className="text-gray-400 ">
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 ">
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 ">
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 ">
                                    Google+
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex w-full justify-center items-center">
                    <div className="flex justify-between items-center text-center text-gray-500 text-sm border-t-2 border-b-2 border-[#26282d] p-[15px] w-[80%]">
                        <h1 className="flex justify-evenly items-center w-[91%] ">
                            <p>Our Partner :</p>
                            <Link href="#" ><p><FontAwesomeIcon icon={faCircleDot} /> GEO Javed Coach</p></Link>
                            <Link href="#" ><p><FontAwesomeIcon icon={faCircleDot} /> AKAZAI Group </p></Link>
                            <Link href="#" ><p><FontAwesomeIcon icon={faCircleDot} /> AKG Group</p></Link>
                            <Link href="#" ><p><FontAwesomeIcon icon={faCircleDot} /> Al-Mumtaz Coach</p></Link>
                            <Link href="#" ><p><FontAwesomeIcon icon={faCircleDot} /> Nosheen Ahmed Travellers</p></Link>
                        </h1>
                        <Link href="#" className="text-[#e7bc91] mt-2 block mb-2">
                            See All →
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between items-center w-[80%]">
                    <p className="text-gray-500 text-[15px]">
                        &copy; 2025 . All rights reserved .
                    </p>
                    <p className="p-[10px] flex justify-center items-center">
                        <Image className="h-[30px] w-[50px] mr-[10px]" src={jazzCash_img} alt="payment_method" />
                        <Image className="h-[30px] w-[50px] mr-[10px]" src={easyPaisa_img} alt="payment_method" />
                        <Image className="h-[30px] w-[50px] mr-[10px]" src={visa_img} alt="payment_method" />
                        <Image className="h-[30px] w-[50px] mr-[10px]" src={bankPay_img} alt="payment_method" />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
