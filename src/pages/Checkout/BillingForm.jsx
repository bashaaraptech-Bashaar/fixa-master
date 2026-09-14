function BillingForm({
  formData,
  setFormData
}) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="space-y-6">

      <h2 className="text-4xl font-bold mb-10">
        Billing Details
      </h2>

      {/* First + Last Name */}
      <div className="grid grid-cols-2 gap-5">

        <div>
            <label htmlFor="firstName" className="font-semibold">
            First Name
          </label>

          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border rounded-lg p-4 mt-2 outline-none focus:border-slate-900"
          />
        </div>

        <div>
            <label htmlFor="lastName" className="font-semibold">
            Last Name
          </label>

          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border rounded-lg p-4 mt-2 outline-none focus:border-slate-900"
          />
        </div>

      </div>

      {/* Company */}
      <div>
          <label htmlFor="company" className="font-semibold">
          Company Name (Optional)
        </label>

        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full border rounded-lg p-4 mt-2 outline-none focus:border-slate-900"
        />
      </div>

      {/* Country */}
      <div>
          <label htmlFor="country" className="font-semibold">
          Country / Region
        </label>

        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full border rounded-lg p-4 mt-2 outline-none"
        >
          <option>Pakistan</option>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Canada</option>
        </select>
      </div>

      {/* Street */}
      <div>
          <label htmlFor="street" className="font-semibold">
          Street Address
        </label>

        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          className="w-full border rounded-lg p-4 mt-2 outline-none focus:border-slate-900"
        />
      </div>

      {/* City */}
      <div>
          <label htmlFor="city" className="font-semibold">
          Town / City
        </label>

        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full border rounded-lg p-4 mt-2 outline-none focus:border-slate-900"
        />
      </div>

      {/* Province */}
      <div>
          <label htmlFor="province" className="font-semibold">
          Province
        </label>

        <select
          id="province"
          name="province"
          value={formData.province}
          onChange={handleChange}
          className="w-full border rounded-lg p-4 mt-2 outline-none"
        >
          <option>Sindh</option>
          <option>Punjab</option>
          <option>KPK</option>
          <option>Balochistan</option>
        </select>
      </div>

      {/* ZIP */}
      <div>
          <label htmlFor="zip" className="font-semibold">
          ZIP Code
        </label>

        <input
          type="text"
          id="zip"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          className="w-full border rounded-lg p-4 mt-2 outline-none focus:border-slate-900"
        />
      </div>

      {/* Phone */}
      <div>
          <label htmlFor="phone" className="font-semibold">
          Phone
        </label>

        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded-lg p-4 mt-2 outline-none focus:border-slate-900"
        />
      </div>

      {/* Email */}
      <div>
          <label htmlFor="email" className="font-semibold">
          Email Address
        </label>

        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-lg p-4 mt-2 outline-none focus:border-slate-900"
        />
      </div>

      {/* Additional information */}
      <div>
        <label htmlFor="additionalInfo" className="sr-only">
          Additional Information
        </label>
        <input
          type="text"
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          placeholder="Additional Information"
          className="w-full border rounded-lg p-4 outline-none focus:border-slate-900"
        />
      </div>

    </form>
  );
}

export default BillingForm;