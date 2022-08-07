import React, { Component } from "react";
import Card from "../../components/UI/Card/Card";
import Table from "../../components/UI/Table/Table";
import { getTextsOf } from "../../components/../Texts/Texts";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/Actions/Actions";
import Modal from "../../components/UI/Modal/Modal";
import ContentWrapper from "../../hoc/ContentWrapper/ContentWrapper";
import InputsModalData from "../../components/ModalsData/InputsModalData/InputsModalData";
import PageTile from "../../components/PageTile/PageTile";
import Wrapper from "../../hoc/Wrapper";
import { setTitle,getPageTitleOf } from "../../AuxilaryFunctions/AuxilaryFunctions";
class AdminsChanges extends Component {
  componentDidMount() {
    const types = { provider: "AdminsChanges" };
    const { tableData } = getTextsOf(types);
    const pageTitle = getPageTitleOf(types.provider)
    const { selectedAdminsChange } = this.props;
    const selectedTableData = tableData[selectedAdminsChange];
    if (selectedAdminsChange) {
      let data = selectedTableData.data;
      let tableHead = selectedTableData.categories;
      data = data.map(values => {
        return values.reduce((prev, curr, iindex) => {
          const category = selectedTableData.categories[iindex];
          prev[category] = curr;
          return prev;
        }, {});
      });

      const cardTitle = setTitle(
        this.props.selectedName,
        this.props.selectedEvent
      );

      this.props.setTableType(selectedAdminsChange);
      this.props.setTableData(data);

      this.setState({ tableHead, tableData: data, cardTitle,pageTitle });
    }
  }
  state = {
    tableHead: null,
    tableData: null,
    cardTitle: null,
    pageTitle:null
  };
  render() {
    return (
      <Wrapper>
        <PageTile>{this.state.pageTitle}</PageTile>
        <ContentWrapper>
          <Card header={this.state.cardTitle}>
            <Table tableHead={this.state.tableHead} />
          </Card>
          <Modal>
            <InputsModalData />
          </Modal>
        </ContentWrapper>
      </Wrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    selectedName: state.modal.name,
    selectedAdminsChange: state.adminsChanges.selectedAdminsChange,
    selectedEvent: state.modal.selectedEvent
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setTableType: tableType => {
      dispatch({ type: actionTypes.SET_TABLE_TYPE, tableType });
    },
    setTableData: tableData => {
      dispatch({ type: actionTypes.SET_TABLE_DATA, tableData });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminsChanges);
