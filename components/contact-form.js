import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Your email has been sent successfully!");

    
    if (form.current) {
      emailjs.sendForm('service_317uf8a', 'template_1gfzdci', form.current, 'XTr5WLJHRjlRdrpJC')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  };

  return (
    <section className="self-stretch flex flex-row flex-wrap items-start justify-center py-[75px] px-[30px]">
      <form className="flex-1 rounded-xl bg-darkslategray shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] box-border flex flex-col justify-start py-7 px-[30px] gap-[20px] max-w-[1440px] border-[2px] border-solid border-aliceblue" ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col justify-start py-5 px-0">
          <h2 className="m-0 text-29xl font-medium text-left">
            Feedback Form
          </h2>
        </div>
        <div className="flex flex-col items-center justify-start gap-[10px]">
          <input
            className="w-full text-5xl bg-[transparent] rounded box-border h-14 flex flex-col justify-center py-4 px-3 border-[1px] border-solid border-gray-200 text-text-color font-inter"
            placeholder="Name"
            type="text"
            name="from_name"
          />
          <input
            className="w-full text-5xl bg-[transparent] rounded box-border h-14 flex flex-col justify-center py-4 px-3 border-[1px] border-solid border-gray-200 text-text-color font-inter"
            placeholder="Email id"
            type="email"
            name="email_id"
          />
          <textarea
            className="w-full text-5xl bg-[transparent] rounded box-border justify-start p-3 border-[1px] border-solid border-gray-200 text-text-color font-inter"
            rows={3}
            placeholder="Comments or questions"
            name="message"
          />
          <button className="cursor-pointer py-[15px] px-5 bg-[transparent] rounded-lg items-center justify-center border-[1px] border-solid border-darkslategray-100 text-lg font-inter text-text-color text-center hover:bg-hover" type="submit">
              Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
