export default function About() {
  return (
    <div className="lg:mb-24 md:mb-8">
      <h1 className="font-semibold text-5xl text-center mt-5">
        About
      </h1>
      <div className="flex flex-col justify-center items-center my-12">
        <img className="rounded-3xl drop-shadow-2xl" src="https://gil-moreno.com/images/gil.jpg" width="300" alt="gil-moreno"/>
      </div>
      
      <div className="text-justify text-xl font-semibold my-5 lg:px-36 md:px-8">
        <p className="my-3">
          Hi there! I am Gil Moreno (aka. Gilbo) a passionate Entrepreneur, Digital Creator, Full Stack Developer, husband, and father of two angels.
        </p>
        <p className="my-3">
          I've lived and worked in Mexico, Germany, Spain, Italy, and the US; and in different industries, such as Oil&Gas, Educational, and CleanTech. I've finally found my path in the software business.
        </p>
        <p className="my-3">
          I'm a natural born curious individual with the spirit of an entrepreneur and I strive to being the best version of myself every day... and document it here!
        </p>
      </div>
      <div className="flex flex-row justify-center items-center">
          <a
            className="rounded-md border border-transparent bg-indigo-600 px-4 mx-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700" 
            href="https://gil-moreno.com"
          >Check out my CV</a>
          <a
            className="rounded-md border border-transparent bg-indigo-600 px-4 mx-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700" 
            href="/contact"
          >Get in touch</a>
        </div>
    </div>
  );
}