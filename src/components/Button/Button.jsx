import { ButtonStyled, ButtonWrapper } from "./Button.styled";
import { ImageClass } from "../../API/ImagesApi";
import PropTypes from "prop-types";

export const Button = ({ onLoadMoreClick }) => {
  return (
    <ButtonWrapper>
      <ButtonStyled onClick={onLoadMoreClick}>Load more</ButtonStyled>
    </ButtonWrapper>
  );
};

Button.propTypes = {
  onLoadMoreClick: PropTypes.func.isRequired,
};
