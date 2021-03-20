import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  margin: 2rem auto;
  padding: 1rem;

  width: 34rem;
  height: 8rem;

  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);

  border-radius: 5px;
  .icon {
    display: flex;
    align-items: center;
  }
  .laundryCard_image_container {
    height: 100%;
    width: 25%;

    .laundryCard_image {
      height: 100%;
      width: 100%;

      background-image: url(${(props) => props.src});
      background-size: cover;

      border-radius: 5px;
    }
  }

  .laundryCard_content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    width: 65%;
    padding: 0.5rem 5%;

    .laundryCard_content_score,
    .laundryCard_content_title,
    .laundryCard_content_price {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      width: 100%;
      span {
        flex: 1 1 0;
      }
    }
    .score {
      font-size: 1.1rem;
      font-weight: bold;
      color: #e7a74e;
    }
    .laundryCard_content_title {
      font-size: 1.25rem;
    }
  }
`;
