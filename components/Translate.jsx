import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Translate = () => {
  const { i18n } = useTranslation("en", { useSuspense: false });

  const handleLangChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <Select onChange={handleLangChange}>
        <option value="en">EN</option>
        <option value="fr" selected>
          FR
        </option>
      </Select>
    </>
  );
};

const Select = styled.select`
  -webkit-appearance:none;
  -moz-appearance:none;
  -ms-appearance:none;
  appearance:none;
  outline:0;
  box-shadow:none;
  border:0!important;
  background: #a02dd7;
  background-image: none;
  flex: 1;
  padding: 0 .5em;
  color:#fff;
  cursor:pointer;
  font-size: 1em;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  border-radius: .25em;
  position: fixed;
  width: 40px;
  height: 40px;
  right: 40px;
  bottom 40px;

   &::-ms-expand {
    display: none;
   }
`;

export default Translate;
