import React, { Component } from "react";
import ContentWrapper from "../../hoc/ContentWrapper/ContentWrapper";
import Card from "../../components/UI/Card/Card";
import { getTextsOf } from "../../components/../Texts/Texts";
import classes from "./Statistic.module.css";
import Modal from "../../components/UI/Modal/Modal";
import Wrapper from "../../hoc/Wrapper";
import StatisticForm from "../../components/Forms/StatisticForm/StatisticForm";
import PageTile from "../../components/PageTile/PageTile";
import Table from "../../components/UI/Table/Table";
import InputsModalData from "../../components/ModalsData/InputsModalData/InputsModalData";
import * as actionTypes from "../../Store/Actions/Actions";
import { connect } from "react-redux";
import { getPageTitleOf } from "../../AuxilaryFunctions/AuxilaryFunctions";
class Statistic extends Component {
  componentDidMount() {
    const types = { provider: "Statistic" };
    const pageTitle = getPageTitleOf(types.provider)
    const { title, resultText, categories } = getTextsOf(types);
    this.setState({ title, resultText, categories,pageTitle });
    this.props.setTableType(types.provider);
  }
  state = {
    categories: null,
    title: null,
    resultText: null,
    pageTitle:null
  };

  render() {
    return (
      <Wrapper>
        <PageTile>{this.state.pageTitle}</PageTile>
        <ContentWrapper>
          <Card header={this.state.title}>
            <StatisticForm />

            <div className={classes.Linebreak}>
              <p className={classes.Results}>{this.state.resultText}</p>
            </div>
            <Table tableHead={this.state.categories} />
          </Card>
        </ContentWrapper>

        <Modal>
          <InputsModalData />
        </Modal>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTableType: tableType => {
      dispatch({ type: actionTypes.SET_TABLE_TYPE, tableType });
    }
  };
};

export default connect(null, mapDispatchToProps)(Statistic);
