import React from "react";
import * as Styled from "./styles/StyledCharacterGrid";
import { ReactComponent as ArrowRight } from "icons/arrowRight.svg";

const CharacterGrid = ({ characters, handleSelectCharacter }) => {
  return (
    <Styled.Grid>
      <Styled.GridFiller />
      {characters.map((character, i) => {
        return (
          <Styled.GridItem image={character.image} key={`char-${i}`}>
            <Styled.CharacterContent>
              <Styled.Name>{character.name}</Styled.Name>
            </Styled.CharacterContent>
            <Styled.GridItemOverlay>
              <Styled.OverlayText>{character.name}</Styled.OverlayText>
              <Styled.OverlayButton onClick={()=>handleSelectCharacter(character.id)}>
                Details <ArrowRight />
              </Styled.OverlayButton>
            </Styled.GridItemOverlay>
          </Styled.GridItem>
        );
      })}
    </Styled.Grid>
  );
};

export default CharacterGrid;
