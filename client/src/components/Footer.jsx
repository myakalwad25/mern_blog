/* eslint-disable react/no-unescaped-entities */
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsLinkedin} from 'react-icons/bs'
export default function FooterCom() {
  return (
    <Footer className="border border-t-8  border-teal-500">
      <div className="w-full max-w-7xl mx-auto p-6 pb-8">
        <div className=" grid w-full justify-between sm:flex  md:grid-cols-1">
          <div className=" mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Student's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8  mt-4 md:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Projects
                </Footer.Link>

                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Student's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/myakalwad25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="https://www.linkedin.com/in/vijaymyakalwad/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Me" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright 
          href="#"
          by="Student's Blog"
          year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
          <Footer.Icon href="https://github.com/myakalwad25" icon={BsGithub}/>
          <Footer.Icon href="https://www.linkedin.com/in/vijaymyakalwad/" icon={BsLinkedin}/>
       
          <Footer.Icon href="https://twitter.com/vijay_myakalwad" icon={BsTwitter}/>
          <Footer.Icon href="#" icon={BsFacebook}/>
          <Footer.Icon href="#" icon={BsInstagram}/>
          </div>
        </div>
      </div>
    </Footer>
  );
}
