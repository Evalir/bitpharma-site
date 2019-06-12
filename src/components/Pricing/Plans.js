import React from "react"
import styled from "styled-components"

const plans = {
  basic: [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ],

  premium: [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ],

  ultra: [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ],
}

const Prices = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 256px);
  grid-gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .plan-features {
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      color: ${props => props.theme.colors.black};
      font-size: ${props => props.theme.unit.getRem(12)};
      font-weight: 400;
      display: flex;
      align-items: flex-start;
      margin-bottom: 16px;

      img {
        height: 12px;
        margin-right: 8px;
      }
    }
  }
`

const Card = styled.div`
  box-shadow: 0 16px 30px 0 rgba(209, 219, 231, 0.34);
  border-radius: 5px;
  margin-bottom: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 188px;

  h3 {
    color: ${props => props.theme.colors.black};
    font-size: ${props => props.theme.unit.getRem(18)};
    margin: 0;
    margin-bottom: 32px;
  }

  .card-info {
    margin-bottom: 40px;
  }

  .price {
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.unit.getRem(21)};
    font-weight: 600;
    display: block;
  }

  .sales-label {
    color: ${props => props.theme.colors.green};
    font-size: ${props => props.theme.unit.getRem(18)};
    font-weight: 600;
    display: block;
  }

  label {
    color: ${props => props.theme.colors.black};
    font-size: ${props => props.theme.unit.getRem(12)};
    font-weight: 400;
    margin-top: 8px;
  }

  .button {
    color: ${props => props.theme.colors.white};
    background-color: ${props =>
      props.sales ? props.theme.colors.green : props.theme.colors.primary};
    border-radius: 5px;
    font-size: ${props => props.theme.unit.getRem(11)};
    font-weight: 600;
    text-align: center;
    max-width: 172px;
    padding: 8px 0;
    cursor: pointer;
    user-select: none;
    transition: background-color 250ms ease-in;

    :hover {
      background-color: ${props =>
        props.sales
          ? props.theme.colors.hover.green
          : props.theme.colors.hover.primary};
    }

    :focus {
      background-color: ${props =>
        props.sales
          ? props.theme.colors.focus.green
          : props.theme.colors.focus.primary};
    }
  }
`

const Pricing = () => {
  return (
    <Prices>
      <div>
        <Card>
          <h3>Basic</h3>
          <div className="card-info">
            <div className="price">$149 / mo</div>
            <label>per pharmacy</label>
          </div>

          <div className="button">START NOW</div>
        </Card>

        <ul className="plan-features">
          {plans.basic.map((feature, i) => (
            <li key={`basic-${i}`}>
              <img alt="check" src={require("../../images/check.svg")} />
              <span dangerouslySetInnerHTML={{ __html: feature }} />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Card>
          <h3>Premium</h3>
          <div className="card-info">
            <div className="price">$299 / mo</div>
            <label>per pharmacy</label>
          </div>

          <div className="button">START NOW</div>
        </Card>

        <ul className="plan-features">
          {plans.premium.map((feature, i) => (
            <li key={`basic-${i}`}>
              <img alt="check" src={require("../../images/check.svg")} />
              <span dangerouslySetInnerHTML={{ __html: feature }} />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Card sales>
          <h3>Premium + Support</h3>
          <div className="card-info">
            <div className="sales-label">
              Do you need special support? Let’s talk
            </div>
          </div>

          <div className="button">CONTACT SALES</div>
        </Card>

        <ul className="plan-features">
          {plans.ultra.map((feature, i) => (
            <li key={`basic-${i}`}>
              <img alt="check" src={require("../../images/check-green.svg")} />
              <span dangerouslySetInnerHTML={{ __html: feature }} />
            </li>
          ))}
        </ul>
      </div>
    </Prices>
  )
}

export default Pricing
