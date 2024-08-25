
//  import React from 'react';

// const Contact = () => {
//   return (
//     <section id="contact" className="container mx-auto bg-grey-200 py-12 px-4">
   

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//        {/* Left Side: Contact Form */}
//         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
//           <form
//             name="contact"
//             method="POST"
//             data-netlify="true"
//             className="space-y-4"
//           >
//             <input type="hidden" name="form-name" value="contact" />
//             <div>
//               <label htmlFor="name" className="block mb-1">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block mb-1">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="4"
//                 className="w-full border border-gray-300 rounded px-3 py-2"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-300"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//         {/* Right Side: Contact Information */}
//         <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
//           <div className="space-y-2">
//             <div>
//               <span className="font-semibold">Location:</span> Kolkata, West Bengal, India
//             </div>
//             <div>
//               <span className="font-semibold">Email:</span>{' '}
//               <a href="mailto:jhabinit@email.com">jhabinit@email.com</a>
//             </div>
//             <div>
//               <span className="font-semibold">Phone:</span> 6202146415
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto bg-grey-200 py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Contact Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <form
            action="https://formspree.io/f/movayzap" /* Replace with your Formspree endpoint */
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_subject" value="New contact form submission" />
            <input type="hidden" name="_next" value="/thank-you" /> {/* Optional: redirect after submission */}
            <div>
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
        {/* Right Side: Contact Information */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-2">
            <div>
              <span className="font-semibold">Location:</span> Sonipat, Haryana , India
            </div>
            <div>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:jhabinit@email.com">jravi40800@gmail.com</a>
            </div>
            <div>
              <span className="font-semibold">Phone:</span> 9304103754
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
