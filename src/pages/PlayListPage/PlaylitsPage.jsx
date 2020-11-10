import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaylistRequest } from '../../redux/actions/playlist'
import { Filter } from '../../components/Organism/Filter'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { StyledPlaylistPage } from './styles'
import { CardList } from '../../components/Organism/CardList'
import { selectAllFilteredPlaylists } from '../../redux/reducer/PlaylistReducer'

const PlaylitsPage = () => {
  const dispatch = useDispatch()
  const playlists = useSelector(selectAllFilteredPlaylists)

  const getPlaylist = useCallback(() => dispatch(getPlaylistRequest()), [
    dispatch,
    getPlaylistRequest,
  ])

  useEffect(() => {
    getPlaylist()
  }, [getPlaylist])

  return (
    <>
      <Filter />
      <StyledPlaylistPage component="main">
        <Container className="page__container" maxWidth="lg">
          <Box component="section">
            <Typography
              component="h1"
              color="textPrimary"
              className="page__title"
            >
              Playlists
            </Typography>
            <CardList list={playlists} className="page__card-list" />
          </Box>
        </Container>
      </StyledPlaylistPage>
    </>
  )
}

export default PlaylitsPage
