import React from 'react'
import styled from 'styled-components'
import { color } from '../untils/Colors'

const Input = styled.input`
  display: block;
  width: 100%;
  height: 62px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${color.paragraph};
  background-color: ${color.white};
  background-clip: padding-box;
  border: none;
  border-radius: 30px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 18px 31px;
  box-shadow: 0px 13px 41px 0 ${color.inputBoxShadow};

  &:focus {
    outline: none;
    color: ${color.paragraph};
  }
`

const TextareaContainer = styled.div`
  margin-bottom: 48px;
  text-align: center !important;
`

const Textarea = styled.textarea`
  height: 129px;
  display: block;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${color.paragraph};
  background-color: ${color.white};
  background-clip: padding-box;
  border: none;
  border-radius: 30px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 18px 31px;
  box-shadow: 0px 13px 41px 0 ${color.inputBoxShadow};

  &:focus {
    outline: none;
  }
`

const BtnContainer = styled.div`
  text-align: center;
`

const Btn = styled.button`
  background: ${color.getAQuote};
  line-height: 22px;
  font-size: 16px;
  color: ${color.white};
  padding: 19px 20px 19px 71px;
  display: inline-block;
  border-radius: 57px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  transition: all ease-in-out 0.3s;
  border: 1px solid ${color.getAQuote};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(138, 34, 34, 0.2);
    background: ${color.getAQuoteHover};
    color: ${color.white};
    border: ${color.getAQuoteHover};
    transition: all ease-in-out 0.3s;
  }

  i {
    color: ${color.white};
    margin-left: 41px;
    font-size: 20px;
    line-height: 22px;
    font-weight: 900;
    line-height: 22px;
  }
`

function Formulaire() {
  return (
    <React.Fragment>
      <form>
        <div className="row">
          <div className="mb-5 col-4">
            <Input
              type="text"
              className="form-control"
              id="text"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
          </div>

          <div className="mb-5  col-4">
            <Input
              type="number"
              className="form-control"
              id="number"
              aria-describedby="emailHelp"
              placeholder="Number"
            />
          </div>

          <div className="mb-5 col-4">
            <Input
              type="email"
              className="form-control"
              id="mail"
              aria-describedby="emailHelp"
              placeholder="Mail"
            />
          </div>
        </div>

        <div className="row">
          <TextareaContainer className="col-12">
            <Textarea placeholder="Message" />
          </TextareaContainer>
        </div>
        <BtnContainer>
          <Btn type="submit">
            Submit Now
            <i className="bi bi-arrow-right" />
          </Btn>
        </BtnContainer>
      </form>
    </React.Fragment>
  )
}

export default Formulaire
