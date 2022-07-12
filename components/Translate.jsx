import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Translate = () => {
  const { i18n } = useTranslation("en", { useSuspense: false });

  const handleLangChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  console.log(handleLangChange);

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
  position: fixed;
  right: 40px;
  bottom 40px;
`;

export default Translate;
