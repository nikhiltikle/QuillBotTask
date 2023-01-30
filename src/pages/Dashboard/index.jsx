import React, { useState } from 'react';
import Box from '@mui/system/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from '../../components/Navbar';
import Body from '../../components/Body';
import Discover from '../Discover';
import movies from '../../__mock__/movies/movies.json';

const DRAWER_WIDTH = 275;

export default function Dashboard() {
  const [moviesData, setMoviesData] = useState(movies);
  const [openSearchField, setOpenSearchField] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const handleSearch = (event) => {
    setSelectedMovie({});

    const filterData = movies.filter((f) => {
      if (event.target.value === '') return f;
      return f.Title.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setMoviesData(filterData);
  };

  const resetData = () => {
    setMoviesData(movies);
    setOpenSearchField(false);
    setSelectedMovie({});
  };
  return (
    <Box display="flex">
      <CssBaseline />
      <Navbar drawerWidth={DRAWER_WIDTH} onClickProfileAvatar={resetData} />
      <Body drawerWidth={DRAWER_WIDTH}>
        <Discover
          movies={moviesData}
          onSearchMovie={handleSearch}
          resetMovies={resetData}
          openSearchField={openSearchField}
          setOpenSearchField={setOpenSearchField}
          setSelectedMovie={setSelectedMovie}
          selectedMovie={selectedMovie}
        />
      </Body>
    </Box>
  );
}
