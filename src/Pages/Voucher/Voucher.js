import React, { useState } from "react";
import PageTitle from "../../components/PageTitle";
import "./Voucher.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { CircularProgress } from "@material-ui/core";

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const Voucher = () => {
  const [voucherCode, setVoucherCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_gv307no",
        "template_v8w379q",
        form.current,
        "fj4JBtayoz7LqrP5i"
      )
      .then(
        (result) => {
          setIsLoading(false);
          setSentSuccess(true);
          console.log(result.text);
        },
        (error) => {
          setIsLoading(false);
          setError(true);
          console.log(error.text);
        }
      );
  };

  const generateCode = () => {
    setVoucherCode(makeid(12));
  };
  return (
    <>
      <PageTitle title="Gift Voucher" page={"Gift Voucher"} />
      {isLoading && (
        <div className="loader">
          <CircularProgress color="secondary" />
        </div>
      )}
      {error && <p className="error_text">something went wrong</p>}
      {!error && sentSuccess && (
        <p className="voucher_text">Your Mail sent Successfully</p>
      )}
      {!isLoading && !error && !sentSuccess && (
        <div className="voucher">
          {voucherCode === "" ? (
            <button
              onClick={generateCode}
              className="p-2 f_btn"
              style={{ width: "fit-content" }}
            >
              Generate Your Voucher Code
            </button>
          ) : (
            <>
              <p className="voucher_text">
                Congratulations...! Your Voucher Code is Generated Successfully.
              </p>
              <p className="voucher_text">Your Voucher Code is :</p>
              <h2 className="voucher_code">{voucherCode}</h2>
            </>
          )}
          <form className="voucher_email" ref={form} onSubmit={sendEmail}>
            <input
              className="input_code"
              name="voucher_code"
              value={voucherCode}
              readOnly
            />
            <input
              name="user_email"
              type="email"
              placeholder="Email"
              className="p-3"
              style={{ backgroundColor: "black", color: "white" }}
            />
            <button
              type="submit"
              className="p-2 f_btn"
              style={{ width: "fit-content" }}
            >
              Send Email
              <i className="fa fa-paper-plane mx-2" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Voucher;
