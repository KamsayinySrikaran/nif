import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import image from "../assets/about_us.svg";

const About = () => {
  return (
    <main>
      <PageHero title="about" />
      <AboutContainer className="page section section-center">
        <img src={image} alt="light room" />
        <article>
          <div className="title">
            <h2>Our journey</h2>
            <div className="underline"></div>
            <p>
            Northern Interior Fabrication started its journey in 2010, providing services 
            like aluminum fittings, molding works, mainly for kitchen pantry cupboards, 
            3D modeling, and interior designs. Initially, the services were provided 
            only to the local areas, but as our reputation grew, we started to 
            receive more orders, and the business expanded. To keep up with the 
            increasing demand, the business had to increase the number of workers, 
            ensuring the timely completion of works. Eventually, we decided 
            to open a showroom to display and store the finished products, making 
            it easier for customers to see the quality of their work. Today, the 
            business has become a developing enterprise, providing high-quality 
            products and excellent customer service to a diverse range of customers. 
            From its humble beginnings as a small business, it has become signature 
            destination for those seeking stylish and modern furniture products.
            </p>
          </div>
        </article>
      </AboutContainer>
    </main>
  );
};

const AboutContainer = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default About;
