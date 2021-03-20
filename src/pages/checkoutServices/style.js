import styled from "styled-components";

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  .address {
    padding: 1rem;
    display: flex;
    align-items: center;

    .imgContainer {
      height: 5rem;
      width: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 90%;
      }
    }

    .addressInfo {
      margin-left: 1rem;
      h3,
      p {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 1rem;
        color: var(--color-primary);
      }
    }
  }

  .productsContainer {
    .productTitle {
      padding: 2rem;
      text-align: center;
      font-size: 1.5rem;
      border-bottom: 1px solid #aaa;
      color: #333;
    }

    .productsList:last-child {
      margin-bottom: 2.5rem;
    }

    .productsList {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 0;

      .emptyCart {
        width: 100%;
        height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > span {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 2rem;
        }

        button {
          width: 10rem;
          > span {
            font-size: 1.4rem;
          }
        }
      }
    }
  }

  .footer {
    background-color: var(--color-primary);
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: calc(100% - 10px);

    span.total {
      color: #fff;
      font-size: 1.2rem;
    }

    button {
      span {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 1280px) {
    .gridContainer {
      display: grid;
      grid-template-columns: auto 50%;
      grid-template-rows: auto auto;
      grid-template-areas:
        "products address"
        "products total";
      height: calc(100vh - 2.5rem - 10px);

      .address {
        grid-area: address;
        align-items: flex-start;

        .imgContainer {
          display: none;
        }

        .addressInfo {
          h3,
          p {
            color: #333;
            font-weight: 400;
          }

          h3 {
            font-size: 2.5rem;
            margin: 2rem 0;
          }
          p {
            font-size: 2rem;
          }
        }
      }

      .productsContainer {
        grid-area: products;
        overflow: auto;
        border-right: 2px solid #aaa;
        .productTitle {
          text-align: left;
          border: none;
          font-size: 2.5rem;
          margin-left: 5rem;
        }

        .productsList {
          align-items: flex-start;

          .emptyCart {
            width: 50%;
            height: 50vh;
            align-self: flex-start;
            padding-left: 4rem;

            > span {
              font-size: 2rem;
            }
          }
        }
      }

      .footer {
        position: initial;
        grid-area: total;
        flex-direction: column;
        align-self: flex-end;
        height: 80%;
        background-color: initial;

        span.total {
          color: #333;
          font-size: 2.5rem;
          display: flex;
          width: 100%;
          justify-content: space-around;
        }

        button {
          width: 15rem;
          height: 3rem;
          margin-bottom: 8rem;

          span {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;

export const NotLogged = styled.div`
  max-width: 1080px;
  width: 80vw;
  height: 20rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  > span {
    font-size: 1.7rem;
  }

  button {
    width: 20rem;
  }
`;
