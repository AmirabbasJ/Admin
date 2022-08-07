import React, { Component } from "react";
import ContentWrapper from "../../hoc/ContentWrapper/ContentWrapper";
import Card from "../../components/UI/Card/Card";
import { getTextsOf } from "../../components/../Texts/Texts";
import Table from "../../components/UI/Table/Table";
import Wrapper from "../../hoc/Wrapper";
import Modal from "../../components/UI/Modal/Modal";
import InputsModalData from "../../components/ModalsData/InputsModalData/InputsModalData";
import ManagementForm from "../../components/Forms/ManagementForm/ManagementForm";
import PageTile from "../../components/PageTile/PageTile";
import * as actionTypes from "../../Store/Actions/Actions";
import { connect } from "react-redux";
import { getPageTitleOf } from "../../AuxilaryFunctions/AuxilaryFunctions";

class Management extends Component {
  componentDidMount() {
    const types = { provider: "Management" };
    const pageTitle = getPageTitleOf(types.provider)
    const { title, categories, tableCardTitle } = getTextsOf(types);
    this.setState({
      title,
      categories,
      tableCardTitle,
      pageTitle
    });
    this.props.setTableType(types.provider);
  }
  state = {
    tableCardTitle: null,
    title: null,
    categories: null,
    pageTitle:null
  };

  render() {
    return (
      <Wrapper>
        <PageTile>{this.state.pageTitle}</PageTile>
        <ContentWrapper>
          <Card header={this.state.title}>
            <ManagementForm />
          </Card>

          <Card header={this.state.tableCardTitle}>
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
export default connect(null, mapDispatchToProps)(Management);
