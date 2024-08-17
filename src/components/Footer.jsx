import React from 'react';

const Footer = () => {
  return (
      <footer className=" text-md text-center  mt-8">
          <hr className="border-t-2  border-gray-700 shadow-md ml-4" />
      <div className="container mx-auto">
        {/* Contact Information Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className=" mb-2">Have any questions? Feel free to reach out to us.</p>
          <p className=" mb-2">Office Tel:</p>
          <p className=" mb-2">+251-46141-5311 / +251-46141-9741 / +251-46441-2465 / +251-11155-6152</p>
          <p className=" mb-2">Fax: +251-46141-0587</p>
          <p className=" mb-2">Email: <a href="mailto:osupr2018@gmail.com" className="text-blue-400 hover:underline">osupr2018@gmail.com</a></p>
         <p className=" mb-2">P.O.Box: 209, Oromia State University, Batu/Ziway, Ethiopia</p>
          <p className=" mb-2">Physical Address: Block 7, 1st Floor, Office Room No. 107, Central Management Building, Main Campus, Oromia State University</p>
        </div>

        {/* Copyright Information */}
        <p>© 2024 University OSU. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
