import React from "react";

export default function FithPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 flex flex-row justify-center relative overflow-hidden lg:py-12">
      <article className="bg-white flex flex-col min-h-screen min-w-fit rounded-lg shadow-sm mx-20 px-2 py-2 prose prose-stone">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p className="lead indent-8 text-left">
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <blockquote>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </blockquote>
      </article>
    </div>
  );
}
