import React from "react";
import Layout from "components/Layout/Layout";
import CharacterGrid from "components/CharacterGrid/CharacterGrid";
import FeaturedCharacter from "components/FeaturedCharacter/FeaturedCharacter";
import { ReactComponent as SearchIcon } from "icons/searchIcon.svg";
import { heroes } from "data/heroList";
import * as Styled from "./styles/StyledSearch";

const Search = () => {
  const [selectedCharacterId, setSelectedCharacterId] = React.useState(null);
  const searchRef = React.useRef();
  const [filteredList, setFilteredList] = React.useState(heroes);
  const handleSearch = (searchTerm) => {
    setFilteredList(heroes.filter((character) => character.name.toUpperCase().includes(searchTerm.toUpperCase())))
  }

  return (
    <Layout>
      <Styled.GridColumn>
        <CharacterGrid characters={filteredList} handleSelectCharacter={setSelectedCharacterId} />
      </Styled.GridColumn>
      <Styled.FeaturedColumn fixed>
        <Styled.SearchInput ref={searchRef} type="search" placeholder="Find a Hero" onChange={(e) => handleSearch(e.target.value) } />
        <SearchIcon onClick={() => searchRef.current.focus()} />
        <Styled.LineAccent />
        <FeaturedCharacter id={selectedCharacterId} />
      </Styled.FeaturedColumn>
    </Layout>
  );
};

export default Search;
