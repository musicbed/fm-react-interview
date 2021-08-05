import styled from "@emotion/styled";

export const Card = styled.div({
  backgroundColor: "#D1FF54",
  padding: 7,
  color: "#fff",
  width: 440
});
export const Content = styled.div({
  backgroundColor: "#212123",
  padding: 20
});
export const NameWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 20
});
export const Name = styled.div({
  fontSize: 24,
  fontWeight: 700,
  fontStyle: "italic"
});
export const Alignment = styled.div(({ isBad }) => ({
  borderRadius: 3,
  color: "#fff",
  fontSize: 8,
  fontStyle: "italic",
  backgroundColor: isBad ? "#DE3F3E" : "#8624AA",
  padding: "2px 5px"
}));
export const Image = styled.div(({ image }) => ({
  backgroundImage: `url(${image})` ,
  height: 265,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative"
}));
export const PowerScore = styled.div({
  position: "absolute",
  top: 5,
  right: 5,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#D1FF54",
  boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.20)",
  width: 55,
  height: 55,
  color: "#000",
  fontSize: 7,
  fontWeight: 500,
  fontStyle: "italic",
  textAlign: "center",
  borderRadius: "15px 3px 15px 3px"

});
export const PowerScoreNumber = styled.div({
  fontSize: 28,
  fontWeight: 700,
  fontStyle: "italic",


});
export const Build = styled.div({
  position: "relative",
  backgroundColor: "#D1FF54",
  color: "#000",
  width: "100%",
  height: 40,
  borderRadius: 6,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden",
  fontSize: 12,
  fontWeight: 700,
  fontStyle: "italic",
  textTransform: "uppercase",
  marginBottom: 20
});

export const BuildSubtext = styled.span({
  fontSize: 21,
  fontWeight: 700,
  fontStyle: "italic",
  paddingLeft: 10,
  textTransform: "none"
});

export const Height = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexBasis: "50%"
});
export const Weight = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexBasis: "50%"
});
export const PowerStats = styled.div({
  display: "flex",
  flexDirection: "column",
  marginBottom: 10
});
export const PowerStatWrapper = styled.div({});

export const TitleWrapper = styled.div({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  marginBottom: 20
});
export const Title = styled.div({
  fontSize: 18,
  lineHeight: "14px",
  fontWeight: 700,
  fontStyle: "italic",
  paddingRight: 5,
  display: "flex",
  flexGrow: 0,
  whiteSpace: "nowrap"
});
export const Line = styled.div({
  display: "flex",
  flexGrow: 1,
  backgroundColor: "#D1FF54",
  width: "100%",
  height: 2
});
export const Details = styled.div({
  display: "flex",
  flexDirection: "column",
  marginBottom: 20
});
export const DetailGrid = styled.div({});
export const DetailItem = styled.div({});
export const DetailTitle = styled.div({
  fontSize: 14,
  fontWeight: 700,
  fontStyle: "italic",
  marginBottom: 3
});
export const DetailDescription = styled.div({
  fontSize: 12,
  fontWeight: 500,
  fontStyle: "italic"
});
