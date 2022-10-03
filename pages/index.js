import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// ICON LIBRARY - find more at: https://react-icons.github.io/react-icons/icons?name=fi
import {
  FiGithub,
  FiLinkedin,
  FiPhone,
  FiMail,
  FiCoffee,
  FiExternalLink,
} from "react-icons/fi";

const Profile = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <Image
          src="/download-1.jpg"
          height={200}
          width={200}
          alt="profile-pic"
          className="rounded-full"
        />
      </div>
      <h1 className="font-bold text-3xl md:text-5xl text-white">Tom Chapman</h1>
      <span className="text-md md:text-3xl">
        Economist | Data innovator | Data science
      </span>
    </div>
  );
};

const Details = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-3xl md:text-5xl text-white">About me</h1>
      <span className="flex mx-auto text-lg text-white">
        Lorem ipsum I am so great at everything omg kjdshfk jshfkjhewkhfkh
        ewjkhf jksefjkh sekjhf jsejfkh sekfjkhe skjfh sekjfjk DKJEHD JKE Data
        <br />
        ELKFJELK JHFEHFKJHEKJH FJKEH FKJH SEKFH JKS FJK HSDJK HFKSDJKFH sekfjkhe
        <br />
        EKJFNKESHFKJSEHFK HSKJHFKJSHFJHSKFHKJSFJK DSJKF HKJDS FJK
        HDSKJFHJKSDHFKJHDS LEKFHKJWEH FKJH EWKFH KJE HFK HK
      </span>
    </div>
  );
};

export default function Home() {
  const [showDetails, setShowDetails] = React.useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="flex flex-col justify-between min-h-screen p-3 max-w-5xl mx-auto">
      <Head>
        <title>Tom Chapman</title>
        <meta name="description" content="Portfolio for Tom Chapman" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-between items-center">
        <h1
          onClick={() => setShowDetails(false)}
          className="font-bold text-xl hover:underline cursor-pointer"
        >
          Tom Chapman
        </h1>
        <div className="flex gap-6">
          <div
            className="text-lg hover:underline cursor-pointer"
            onClick={toggleDetails}
          >
            About
          </div>
          <div
            onClick={() => window.open("CV.pdf", "_blank")}
            className="text-lg flex hover:underline cursor-pointer items-baseline gap-2"
          >
            <span>Open CV</span>
            <FiExternalLink />
          </div>
        </div>
      </div>

      <main
        className="flex flex-col items-center text-center cursor-pointer gap-2 lg:gap-3"
        onClick={toggleDetails}
      >
        <div className="max-w-[550px]">
          <div className="relative">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
          {!showDetails && <Profile />}
          {showDetails && <Details />}
        </div>
      </main>

      <footer className="w-full text-center flex flex-col gap-2">
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="https://github.com/chapmantom055"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FiGithub className="h-9 w-9 cursor-pointer" />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/tom-chapman-565311178/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin className="h-9 w-9" />
          </a>
          {/* <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiPhone className="h-9 w-9" />
          </a> */}
          <a href="mailto:chapmantom055@gmail.com" rel="noopener noreferrer">
            <FiMail className="h-9 w-9" />
          </a>
        </div>
      </footer>
    </div>
  );
}
