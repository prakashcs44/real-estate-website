import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="space-y-16 px-20 py-20 text-lg">
      <div className="space-y-8">
        <h1 className="text-3xl">Thank you for listing your property with us</h1>

        <p className="">Your listing will be reviewed and will go live within 24 hours</p>
      </div>

      <p>
        We will now manage your listing and get in touch with you after finding
        the best suitable tenant as per your preference
      </p>

      <p className="text-[#122B49]">-Dylan Estates</p>

      <div className="space-x-10 ">
        <Link href="/property-listing" className="px-4 py-2 bg-[#122B49] text-white rounded-lg">Edit Property Listing</Link>
        <Link href="/property-listing-preview" className="px-4 py-2 bg-[#122B49] text-white rounded-lg">Preview Property Listing</Link>
      </div>
    </div>
  );
}

export default page;
