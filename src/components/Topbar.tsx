export default function Topbar() {
  return (
    <div className=" p-5 flex flex-row">
      <img className="w-10"
        src="https://thumbs.dreamstime.com/b/stylish-creative-compass-logo-design-concept-design-vector-icon-template-travel-background-abstract-white-modern-business-symbol-157713878.jpg"
        alt=""
      />
      <h2 className="pl-5 font-bold text-green-800 pt-2">ADVENTURE TODAY</h2>
      <div className="pl-96 pt-2 flex gap-8">
        <a href="">News</a>
        <a href="">Travel</a>
        <a href="">Camp</a>
        <a href="">Equipment</a>
        <a href="">About Us</a>
      </div>
      <div className="pl-32 flex gap-8 ">
        <button className="border-2 p-1 rounded-full bg-green-700 text-white border-green-700">Subscribe</button>
        <button className="border-2 border-green-700 p-1 px-4 rounded-full">Login</button>
      </div>
    </div>
  );
}
