import React from "react";
export default function AppCardmentor() {
    return (
      <div className="background">
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
        <CardMentor />
      </div>
    );
  }
  
  function CardMentor() {
    return (
      <div className="card">
        <div className="bg-red-100 bg-clip-border border-violet-500 rounded-lg basis-60"></div>
        <div className="flex flex-col  flex-grow m-8  justify-between">
          <h1 className="text-xl font-bold text-gray-600">
            This is an example of using flexbox within flexbox. The whole card is
            a flex container with with image occupying 40%.
          </h1>
          <p className="my-2">
            Following the mobile-first approach, make this component responsive,
            by setting the outer flex container's direction to column and for
            larger screens, change it to row.
          </p>
  
          <div className="flex items-center ">
            <div className="avatar w-14 h-14 bg-red-600 rounded-full flex-shrink-0"></div>
  
            <div className="flex flex-col ml-4">
              <p className="name font-bold">Ibrahima Sory</p>
              <div className="">12/02/2023</div>
            </div>
  
            <img
              className="w-6 h-6 ml-auto flex-shrink-0"
              src="https://img.icons8.com/ios/50/000000/like--v1.png"
            />
          </div>
        </div>
      </div>
    );
  }
  