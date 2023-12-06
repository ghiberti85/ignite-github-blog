export const HomeContainer = styled.div`
    max-width: 864px;
    width: 100%;
    margin: auto;
    color: white;
    margin-bottom: 150px;

    header {
        display: flex;
        padding: 2rem 2.5rem,
        border-radius: 10px;
        background: #0b1b2b;
        margin-top: -80px;
        box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
        margin-bottom: 72px;

        img {
            width: 148px;
            height: 148px;
            margin-right: 2rem;
            border-radius: 8px;
        }
    }
`

export conts BioContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    position: relative;

    a {
        position: absolute;
        right: 0;
        color: #3294f8;
        font-size: 0.75rem;
        font-weight: bold;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;

        &:hover {
            border-bottom: 1px solid #3294f8;
        }
    }

    h1 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
        clor: #afc2d4;
    }
`

export const InfoContainer = styled.div`
    display: flex;
    gap: 1rem;

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #c4d4e3;
        gap: 8px;

        svg {
            color: #3a536b;
        }
    }
`

export const SearchForm = styled.form`
    
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 0.75rem;

        span:first-child {
            color: #c4d4e3;
            font-size: 1.125rem;
            line-height: 28.8px;
        }

        span:last-child {
            color: #7b96b2;
            font-size: 0.875rem;
        }
    }

    input {
        width: 100%;
        border-radius: 6px;
        border: 1px solid #1c2f41;
        background: #040f1a;
        padding: 12px 16px;
        height: 50px;
        color: #afc2d4;

        &:focus {
            outline: 1px solid #3294f8;
        }

        &:placeholder {
            color: #3a536b;
        }
    }
`