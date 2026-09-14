import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";

function ContactInfo() {
  return (
    <div className="space-y-14">

      <div className="flex gap-6">

        <FaMapMarkerAlt
          size={28}
          className="text-[#090631]"
        />

        <div>

          <h3 className="text-2xl font-semibold">
            Address
          </h3>

          <p className="mt-2 text-gray-600">
            123 Tech Street
            <br />
            Silicon Valley, California
          </p>

        </div>

      </div>

      <div className="flex gap-6">

        <IoCall
          size={28}
          className="text-[#090631]"
        />

        <div>

          <h3 className="text-2xl font-semibold">
            Phone
          </h3>

          <p className="mt-2 text-gray-600">
            +1 (555) 123-4567
            <br />
            +1 (555) 987-6543
          </p>

        </div>

      </div>

      <div className="flex gap-6">

        <MdAccessTimeFilled
          size={28}
          className="text-[#090631]"
        />

        <div>

          <h3 className="text-2xl font-semibold">
            Working Time
          </h3>

          <p className="mt-2 text-gray-600">
            Monday - Friday
            <br />
            9:00 AM - 6:00 PM
          </p>

        </div>

      </div>

    </div>
  );
}

export default ContactInfo;
