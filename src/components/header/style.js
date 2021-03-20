import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  z-index: 999;

  .noPointer {
    pointer-events: none;
    /* background-color: #00000000; */
  }

  .isOpen {
    background-color: #00000088;
  }

  .closeArea {
    position: fixed;
    z-index: 4;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transition: 0.25s ease-in-out;
  }

  .imageContainer {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1rem;

    img {
      width: 100%;
    }
  }

  .menuContainer {
    height: 100%;

    button {
      height: 100%;

      .MuiSvgIcon-root {
        font-size: 2rem;
        color: #fff;
      }
    }

    .MuiDrawer-root .MuiDrawer-paper {
      background-color: var(--color-primary);
      color: #fff;
      width: 50%;

      hr.MuiDivider-root {
        width: 95%;
        align-self: center;
        height: 0.1rem;
        border-radius: 2px;
        background-color: #fff;
      }

      .drawerHeader {
        text-align: end;
        button span {
          color: #fff;
          font-size: 2rem;
        }
      }

      ul {
        font-size: 1.3rem;
        display: flex;
        flex-direction: column;
      }
    }
  }

  @media (min-width: 1280px) {
    height: 3rem;
    /* flex-direction: row-reverse;
    justify-content: flex-end; */

    .imageContainer {
      height: 2.5rem;
      width: 2.5rem;
    }

    .menuContainer .MuiDrawer-root .MuiDrawer-paper {
      width: 30%;
      ul {
        font-size: 1rem;
      }
    }
  }
`;
