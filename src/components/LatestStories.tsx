export default function LatestStories() {
  return (
    <div className="ml-20 mb-8">
      <div className=" font-bold text-xl mt-10 mb-8">
        <h2>Latest Stories</h2>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2 w-3/5">
          <div className="flex flex-row gap-2">
            <div className="h-10 w-[15%]">
              <img
                src="https://assets.vogue.in/photos/603780b297a6d928a4e6eae9/2:3/w_2560%2Cc_limit/Travel.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="font-bold text-lg pb-2">
                How to enjoye outdoor advnture-in the area
              </h1>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown ...
              </p>
              <button className="bg-blue-300 px-5 py-1 mt-2 rounded-2xl">
                Read More
              </button>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-2">
              <div className="h-10 w-[15%]">
                <img
                  src="https://assets.vogue.in/photos/603780b297a6d928a4e6eae9/2:3/w_2560%2Cc_limit/Travel.jpg"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-bold text-lg pb-2">
                  How to enjoye outdoor advnture-in the area
                </h1>
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown ...
                </p>
                <button className="bg-blue-300 px-5 py-1 mt-2 rounded-2xl">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 w-2/5 mr-20">
          <div>
            <h1 className="text-green-900 text-lg font-bold p-5">
              On Trending{" "}
            </h1>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row">
              <h1 className="px-5 font-bold text-2xl text-gray-500 ">#1</h1>
              <h1 className="text-sm font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit vero 
              </h1>
            </div>

            <div className="flex flex-row">
              <h1 className="px-5 font-bold text-2xl text-gray-500 ">#2</h1>
              <h1 className="text-sm font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit vero 
              </h1>
            </div>

            <div className="flex flex-row">
              <h1 className="px-5 font-bold text-2xl text-gray-500 ">#2</h1>
              <h1 className="text-sm font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit vero 
              </h1>
            </div>

            <div className="flex flex-row">
              <h1 className="px-5 font-bold text-2xl text-gray-500 ">#2</h1>
              <h1 className="text-sm font-bold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit vero 
              </h1>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
