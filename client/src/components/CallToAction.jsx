import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center lg:px-20">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to know more about Owner ?</h2>
        <p className="text-gray-500 my-2">
          Checkout my other Projects!
        </p>
        <Button gradientDuoTone="purpleToPink">
          <a
            href="https://github.com/myakalwad25"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-tl-xl rounded-bl-none"
          >
            Github Work
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img 
          src="https://media.geeksforgeeks.org/wp-content/uploads/20220325175226/WebDevelopmentProjects2.png"
          alt=""
        />
      </div>
    </div>
  );
}
