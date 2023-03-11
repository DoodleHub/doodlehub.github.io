import thumbnail from "../thumbnail.jpeg";

export const Home = () => (
  <div className="flex h-max w-full items-center justify-center pb-2 pt-12 sm:min-h-screen sm:pt-16">
    <div className="m-4 flex h-max w-max flex-col rounded-md bg-black bg-opacity-80 p-4 shadow-lg shadow-black sm:w-10/12 sm:flex-row">
      <img src={thumbnail} className="w-auto rounded-md sm:w-1/3" />
      <div className="flex w-full flex-col gap-10 px-2 pt-4 text-white sm:px-4 sm:text-xl">
        <p>Hi, I'm Chao.</p>
        <p>I'm a full stack engineer with 5 years of experience.</p>
        <p>I primarily work with javascript frameworks/libraries and SQL/NoSQL databases.</p>
      </div>
    </div>
  </div>
);
