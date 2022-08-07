import React from "react";
import classes from "./Products.module.css";
import Card from "../../components/UI/Card/Card";
import { getTextsOf } from "../../components/../Texts/Texts";
import ContentWrapper from "../../hoc/ContentWrapper/ContentWrapper";
import LineBreak from "../../components/UI/LineBreak/LineBreak";
import Container from "../../hoc/Container/Container";
import Wrapper from "../../hoc/Wrapper";
import PageTile from "../../components/PageTile/PageTile";
import { getPageTitleOf } from "../../AuxilaryFunctions/AuxilaryFunctions";
const Products = props => {
  const types = { provider: "Products" };
  const pageTitle = getPageTitleOf(types.provider)
  const { title, boxes } = getTextsOf(types);
  const lineBreakStyles = { background: "#4e73df", borderWidth: "2px" };
  return (
    <Wrapper>
      <PageTile>{pageTitle}</PageTile>
      <ContentWrapper>
        <Card header={title}>
          <div className={classes["Boxes-wrapper"]}>
            {boxes.map(boxData => {
              return (
                <Container key={boxData.text}>
                  <div className={classes["Box-container"]}>
                    <div
                      className={classes["Box"]}
                      onClick={() => props.history.push("/Products-inputs")}
                    >
                      <div className={classes["Box-Item"]}>
                        <p>{boxData.text}</p>
                      </div>

                      <LineBreak
                        styles={lineBreakStyles}
                        types={["Vertical"]}
                      />
                      <div className={classes["Box-Item"]}>
                        <img
                          className={classes["Box-image"]}
                          src={boxData.image}
                          alt={boxData.title}
                        />
                        <p>{boxData.title}</p>
                      </div>
                    </div>
                  </div>
                </Container>
              );
            })}
          </div>
        </Card>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Products;
