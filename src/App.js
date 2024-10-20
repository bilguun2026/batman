// src/App.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Snowfall from "react-snowfall";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [response, setResponse] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "BATMANDAKH", // Таны ахын нэрийг энд оруулна уу
      her_response: response, // Энэ бол хариу
      reply_to: "", // Хэрэв хэрэгтэй бол түүний имэйл хаягийг энд оруулна уу
    };

    emailjs
      .send(
        "service_ls65hzr", // Өөрийн Email.js-ийн Үйлчилгээний ID-г энд оруулна уу
        "template_q70dtcb", // Өөрийн Email.js-ийн Загварын ID-г энд оруулна уу
        templateParams,
        "y5v_hFhMmgfmhgJ7n" // Өөрийн Email.js-ийн Нийтийн Түлхүүрийг энд оруулна уу
      )
      .then((response) => {
        console.log(
          "Имэйл амжилттай илгээгдлээ!",
          response.status,
          response.text
        );
        setEmailSent(true);
      })
      .catch((err) => {
        console.error("Имэйл илгээхэд алдаа гарлаа:", err);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "linear-gradient(to right, #ffafbd, #ffc3a0)",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Snowfall Effect */}
      <Snowfall />

      {!showForm ? (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{
              textAlign: "center",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: "20px",
              borderRadius: "20px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
              maxWidth: "500px",
            }}
          >
            <h1 style={{ fontSize: "2.5rem", color: "#ff69b4" }}>
              Сайн уу, ЭНХЦЭЦЭГ,
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#333" }}>
              Өнөөдөр анхны цастай өдөр гэдгийг санаж байна уу? Энэ бол чамаас
              нэг чухал зүйл асуухад төгс боломж мэт санагдаж байна...
            </p>
            <p style={{ fontSize: "1.2rem", color: "#333" }}>
              Бид хамтдаа маш их зүйлийг туулсан, чамгүйгээр энэ амьдралыг
              төсөөлөхийн аргагүй.
            </p>

            <p style={{ fontSize: "1.2rem", color: "#333" }}>
              Тиймээс албан ёсоор болгоцгооё, Миний хайрт гүнж болох уу? ❄️💍
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{
              marginTop: "20px",
              padding: "12px 24px",
              fontSize: "18px",
              borderRadius: "30px",
              border: "none",
              backgroundColor: "#ff69b4",
              color: "#fff",
              cursor: "pointer",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
            onClick={() => setShowForm(true)}
          >
            Юу гэж бодож байна? 💖
          </motion.button>
        </>
      ) : !emailSent ? (
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          onSubmit={sendEmail}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <label
            htmlFor="response"
            style={{ fontSize: "1.2rem", marginBottom: "10px", color: "#333" }}
          >
            Чиний сэтгэл санаа ямар байна? Илэн далангүй байгаарай! 😜
          </label>
          <textarea
            id="response"
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Өөрийн хариултыг энд бичээрэй..."
            style={{
              padding: "10px",
              width: "300px",
              height: "100px",
              marginBottom: "10px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1rem",
            }}
            required
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "30px",
              border: "none",
              backgroundColor: "#ff69b4",
              color: "#fff",
              cursor: "pointer",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
            type="submit"
          >
            Хариултаа илгээх 💌
          </motion.button>
        </motion.form>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            color: "#fff",
            marginTop: "20px",
          }}
        >
          Хариултаа илгээсэнд баярлалаа! Тэр чамайг уншиж байхдаа маш их сандарч
          байх болно! 😂💌
        </motion.p>
      )}
    </div>
  );
}

export default App;
