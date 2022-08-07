import React from "react";
import ContentWrapper from "../../hoc/ContentWrapper/ContentWrapper";
import ProfileForm from "../../components/Forms/ProfileForm/ProfileForm";
import Wrapper from "../../hoc/Wrapper";
import PageTile from "../../components/PageTile/PageTile";
import { getPageTitleOf } from "../../AuxilaryFunctions/AuxilaryFunctions";
const Profile = props => {
  const pageTitle = getPageTitleOf("Profile")

  return (
    <Wrapper>
      <PageTile>{pageTitle}</PageTile>
      <ContentWrapper>
        <ProfileForm />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Profile;
