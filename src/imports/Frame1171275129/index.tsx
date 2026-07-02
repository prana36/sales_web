/// <reference types="vite/client" />
import imgImage234 from "../../app/assets/images/sanjay-singh.jpg";


export default function Frame() {
  return (
    <div className="relative size-full">
      <div
        className="absolute h-[1600px] left-0 top-0 w-[452px]"
        data-name="image 234"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage234}
        />
      </div>
    </div>
  );
}
