import styled from "styled-components";
export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 2.5rem;
  font-family: "mukta";
  font-weight: 400;

  margin: 2rem 0;

  @media (min-width: 360px) {
    font-size: 4rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  align-content: center;

  .invisible {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;

  width: calc(100% - 4rem);
  max-width: 720px;

  padding: 2rem 0 4rem 0;
  .container_personal_info,
  .container_address_info,
  .container_service_info,
  .container_password_info {
    width: 80%;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-around;
  }

  .container_service_info {
    margin-bottom: 4rem;
  }

  .section_title,
  .section_subtitle {
    font-family: "mukta";
    font-weight: 300;
    align-self: center;
  }
  .section_title {
    padding-bottom: 1rem 0;
  }
  .single_liner {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;

    flex: 1 1 0;
  }

  .MuiFormControl-marginNormal {
    margin: 1rem 0.5rem !important;
  }

  @media (min-width: 440px) {
    .single_liner {
      flex-direction: row;
    }
  }
  @media (min-width: 1280px) {
    .MuiFormControl-marginNormal {
      margin: 0.5rem 0.5rem !important;
    }
  }
`;
