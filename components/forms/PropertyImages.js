import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Dialog from "../Dialog";

function PropertyImages() {
  const [confirm, setConfirm] = useState(false);

  const router = useRouter();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    router.push("/property-listing-success");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-96 overflow-auto flex flex-col items-center px-20 py-10 gap-10">
        <h1 className="text-start text-xl w-full">
          Add Photos/Videos to attract more tenants!
        </h1>
        <p className="text-start  w-full">
          Add Photos of living
          room,bedroom,bathroom,floor,doors,kitchen,balcony,location,map,neighborhood
          etc
        </p>
        <div className="w-full border py-24 flex items-center justify-center border-slate-300">
          <label
            htmlFor="images"
            className="font-medium text-white text-lg bg-[#122B49] px-3 py-2 rounded-lg"
          >
            + Add Photos Now
          </label>
          <input id="images" className="sr-only" type="file" />
        </div>
        <span className="w-full">OR</span>
        <div className="w-full space-y-4">
          <h2 className="font-semibold">
            We can upload them for you! You can email the pictures and videos to
            us at Dylanestate.com
          </h2>
          <p>Accepted formats are .jpg,.gif,.bmp & .png.</p>
          <p>
            Maximum size allowed is 20mb.Minimum dimension allowed 600*400 Pixel
          </p>
        </div>
      </div>
      <div className="bg-[#122B49] flex justify-between items-center px-10 py-3 text-white">
        <p className="font-light">
          Need Help? <span className="font-semibold">Call 9999999999</span>
        </p>

        <button
          type="button"
          onClick={() => setConfirm(true)}
          className=" bg-[#122B49] py-2 px-8 rounded-lg hover:bg-[#0f233a] border border-white"
        >
          SAVE & NEXT
        </button>
      </div>
      <Dialog open={confirm} type="submit" />
    </form>
  );
}

export default PropertyImages;
