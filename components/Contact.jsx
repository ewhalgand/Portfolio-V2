import styled from "styled-components";

const Contact = () => {
  return (
    <Section id="contact">
      <h1>Contact</h1>
      <form action="">
        <div className="container">
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your Email"
            required
          />
        </div>
        <textarea
          className="description"
          rows={8}
          placeholder="Enter your message"
          required
        ></textarea>
        <button>Send</button>
      </form>
    </Section>
  );
};

const Section = styled.section`
  height: 100%;
  padding: 40px 0;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: clamp(40px, 6vw, 60px);
    color: #fff;
    margin-bottom: 80px;
    font-family: "Ubuntu", sans-serif;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    gap: 20px;

    .container {
      display: flex;
      width: 100%;
      gap: 20px;

      input {
        width: 100%;
        padding: 8px;
        font-size: 0.9rem;
        outline: none;
        border-radius: 10px;
        border: 2px solid #9200cf;
      }
    }

    .description {
      width: 100%;
      padding: 8px;
      resize: none;
      outline: none;
      border-radius: 10px;
      border: 2px solid #9200cf;
    }

    button {
      width: 150px;
      padding: 6px 12px;
      background: transparent;
      color: #fff;
      font-weight: 500;
      border-radius: 10px;
      border: 2px solid #9200cf;
      cursor: pointer;
      transition: 0.4s;

      &:active {
        transform: scale(0.8);
        transition: 0.4s;
      }
    }
  }
`;

export default Contact;
