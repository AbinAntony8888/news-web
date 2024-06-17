export default function MainContent() {
  return (
    <div >
      <div>
        <img
          className="w-full h-screen"
          src="https://albatros-arctic-circle.com/sites/default/files/styles/gallery_large/public/images/p9130825.jpg?itok=ifDxXHrw"
          alt=""
        />
      </div>
      <div>
        <button className="absolute top-40 left-20 border-2 border-gray-400 py-1 px-4 rounded-full backdrop-blur-lg text-white">
          Editor Choice
        </button>
        <button className="absolute top-40 left-60 border-2 border-gray-400 py-1 px-4 rounded-full backdrop-blur-lg text-white">
          Adventure Events
        </button>
      </div>
      <div>
        <h1 className="absolute top-60 left-20 text-6xl text-white font-bold">
          Announcing <br /> AdventureWeek <br /> at Okinawa
        </h1>
      </div>
      <div className="flex flex-row absolute left-20 top-2/3">
        <button className="text-white text-xl font-bold border-2 rounded-full px-3 py-2 backdrop-blur-xl">
          -&gt;
        </button>
        <h6 className="text-white font-bold  relative top-4 pl-5">
          Read Story . 5 mins read
        </h6>
      </div>
      <div className="w-full  absolute top-3/4  border-t-2 border-white mt-8 flex flex-row">
        <div className="w-full backdrop-blur-sm h-full text-white pl-20 pt-8 flex flex-row gap-12">
            
           <div className="border-1 w-1/5 p-5 rounded-lg bg-slate-700 flex gap-1">
           <a href="" className="border-2  rounded-full px-7 py-5 relative top-1 mr-1">2</a>
            <a href="" className="pl-4"> Protating Animals And  Nature in Adventure Travel</a>
           </div>
           
           <div className="border-1 w-1/5 p-5 rounded-lg bg-slate-700 flex gap-1">
           <a href="" className="border-2  rounded-full px-7 py-5 relative top-1 mr-1">2</a>
            <a href="" className="pl-4"> Protating Animals And  Nature in Adventure Travel</a>
           </div>

           <div className="border-1 w-1/5 p-5 rounded-lg bg-slate-700 flex gap-1">
           <a href="" className="border-2  rounded-full px-7 py-5 relative top-1 mr-1">2</a>
            <a href="" className="pl-4"> Protating Animals And  Nature in Adventure Travel</a>
           </div>

           <div className="border-1 w-1/5 p-5 rounded-lg bg-slate-700 flex gap-1">
           <a href="" className="border-2  rounded-full px-7 py-5 relative top-1 mr-1">2</a>
            <a href="" className="pl-4"> Protating Animals And  Nature in Adventure Travel</a>
           </div>
           
        </div>
        
      </div>
    </div>
  );
}
