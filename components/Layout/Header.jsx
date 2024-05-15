"use client";
import React, { useEffect, useRef, useState } from "react";
import MobileMenu from "./MobileMenu";
import { ethers } from "ethers";

export const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const modalRef = useRef(null);
  const [modal, setModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  let data = null;
  if (typeof window !== "undefined")
    data = window.localStorage.getItem("wallet");

  // functions
  // connect to metamask and get account id
  const connectWallet = () => {
    if (typeof window !== undefined) {
      setIsLoading(true);
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => {
          setAccountHandler(res[0]);
        })
        .catch((err) => {
          setIsLoading(false);
          setErrorMessage("Account connection Error");
          setTimeout(() => {
            setErrorMessage("");
          }, 3000);
        });
    }
  };

  // set account id and get accont balance
  const setAccountHandler = (account) => {
    localStorage.setItem("wallet", JSON.stringify(account));
    setAccount(account);
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [String(account), "latest"],
      })
      .then((response) => {
        let number = ethers.formatEther(response)
        setBalance(number);
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorMessage("Balance Error");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      });
  };


// useEffects
  useEffect(() => {
    if (data) {
      let value = JSON.parse(data);
      setAccount(value);
    }
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [modalRef]);

  return (
    <div
      className={`h-[100px] bg-[#070709] z-40 w-full sticky top-0 flex items-center justify-center px-4 lg:px-10`}
    >
      {modal && (
        <div
        className="fixed z-50 w-screen h-screen bg-gray-400 bg-opacity-50 top-0 left-0 flex justify-center items-center">
          <div
          ref={modalRef}
          className="w-[50%] h-[200px] bg-white rounded-md text-center flex flex-col items-center justify-center">
            <p className="text-[12px]">
              <span className="font-[700] text-[20px]">Account:</span> {account}
            </p>
            <p className="text-[14px]">
              <span className="font-[700] text-[20px]">Balance:</span> {balance}
            </p>
            <div className="flex justify-start gap-4 text-white font-[700] mt-6">
              <button
                className="px-4 py-2 bg-[red] rounded-lg"
                onClick={() => {
                  localStorage.removeItem("wallet");
                  setAccount("");
                  setModal(false);
                }}
              >
                Disconnect
              </button>
              <button
                className="px-4 py-2 bg-[green] rounded-lg"
                onClick={() => setModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className=" h-full w-full  max-w-[1340px] flex items-center justify-between">
        <div className="text-white font-[700]">LOGO</div>
        {/* Navigation Bar */}
        <div className=" items-center hidden lg:flex h-full">
          {navLinks.map((item, index) => (
            <div
              key={index}
              className="relative group h-full flex items-center cursor-pointer"
            >
              <div className="h-2 w-full scale-0 group-hover:scale-105 duration-300 rounded-b-full absolute bg-secondary top-0"></div>

              <a
                href={item.link}
                className="text-white text-[16px] px-5 relative "
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
        {/* button conneect */}
        <div className="flex flex-col gap-2">
           <div>
            {
                isLoading ? 
                <button
                className="py-2 px-5 hidden lg:flex items-center justify-center 
              text-white rounded-full text-[16px] bg-secondary cursor-pointer"
                >
                <div className="w-4 h-4 border-l border-r border-t rounded-full animate-spin"></div>
                </button>
                : <button
                onClick={() => {
                  account !== "" ? setModal(true) : connectWallet();
                }}
                className="py-2 px-5 hidden lg:flex items-center justify-center 
              text-white rounded-full text-[16px] bg-secondary cursor-pointer"
              >
                {account === "" ? "Connect" : "Connected"}
              </button>
                }
           </div>
           <div>
              {
                errorMessage !== "" &&
              <p className="text-[14px] text-[red]">{errorMessage}</p>
              }
           </div>
        </div>
           
        <div className=" lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
