import React, { Fragment } from "react";
import * as Styled from "./styles/StyledCharacterCard";

const CharacterCard = ({ character }) => {
  const powerScore = () => {
    const arr = Object.values(character.powerstats).map((value) => parseInt(value));
    const total = arr.reduce((a, b) => a + b);
    console.log(character);
    return total ? Math.floor(total / arr.length) : 42;
  };

  return (
    <Styled.Card>
      <Styled.Content>
        {character?.response !== "success" ? (
          "Loading"
        ) : (
          <Fragment>
            <Styled.NameWrapper>
              <Styled.Name>{character.name}</Styled.Name>
              <Styled.Alignment isBad={character.biography.alignment === "bad"}>
                {character.biography.alignment === "bad" ? "Villian" : "Superhero"}
              </Styled.Alignment>
            </Styled.NameWrapper>
            <Styled.Image image={character.image.url}>
              <Styled.PowerScore>
                Power Score
                <Styled.PowerScoreNumber>{powerScore()}</Styled.PowerScoreNumber>
              </Styled.PowerScore>
            </Styled.Image>
            <Styled.Build>
              <Styled.Height>
                Height <Styled.BuildSubtext>{character.appearance.height[0]}</Styled.BuildSubtext>
              </Styled.Height>
              <Styled.Weight>
                Weight <Styled.BuildSubtext>{character.appearance.weight[0]}</Styled.BuildSubtext>
              </Styled.Weight>
            </Styled.Build>
            <Styled.PowerStats>
              <Styled.TitleWrapper>
                <Styled.Title>Power Stats</Styled.Title>
                <Styled.Line />
              </Styled.TitleWrapper>
              <Styled.PowerStatWrapper>
                {Object.entries(character.powerstats).map(([name, value]) => `${name}: ${value}`)}
              </Styled.PowerStatWrapper>
            </Styled.PowerStats>

            <Styled.Details>
              <Styled.TitleWrapper>
                <Styled.Title>Details</Styled.Title>
                <Styled.Line />
              </Styled.TitleWrapper>
              <Styled.DetailGrid>
                <Styled.DetailItem>
                  <Styled.DetailTitle>First Appearance</Styled.DetailTitle>
                  <Styled.DetailDescription>{character.biography["first-appearance"]}</Styled.DetailDescription>
                </Styled.DetailItem>
                <Styled.DetailItem>
                  <Styled.DetailTitle>Place of Birth</Styled.DetailTitle>
                  <Styled.DetailDescription>{character.biography["place-of-birth"]}</Styled.DetailDescription>
                </Styled.DetailItem>
                <Styled.DetailItem>
                  <Styled.DetailTitle>Publisher</Styled.DetailTitle>
                  <Styled.DetailDescription>{character.biography.publisher}</Styled.DetailDescription>
                </Styled.DetailItem>
                <Styled.DetailItem>
                  <Styled.DetailTitle>Gender</Styled.DetailTitle>
                  <Styled.DetailDescription>{character.appearance.gender}</Styled.DetailDescription>
                </Styled.DetailItem>
                <Styled.DetailItem>
                  <Styled.DetailTitle>Eye Color</Styled.DetailTitle>
                  <Styled.DetailDescription>{character.appearance["eye-color"]}</Styled.DetailDescription>
                </Styled.DetailItem>
                <Styled.DetailItem>
                  <Styled.DetailTitle>Hair Color</Styled.DetailTitle>
                  <Styled.DetailDescription>{character.appearance["hair-color"]}</Styled.DetailDescription>
                </Styled.DetailItem>
              </Styled.DetailGrid>
            </Styled.Details>
          </Fragment>
        )}
      </Styled.Content>
    </Styled.Card>
  );
};

export default CharacterCard;
