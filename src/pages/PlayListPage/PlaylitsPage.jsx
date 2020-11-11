import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty } from 'lodash'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { PlaylistsCard } from '../../components/Organism/PlaylistsCard'
import { Filter } from '../../components/Organism/Filter'
import { getFilterRequest } from '../../redux/actions/filter'
import {
  getPlaylistRequest,
  filterPlaylist,
} from '../../redux/actions/playlist'
import { selectPlaylists } from '../../redux/reducer/PlaylistReducer'
import { createQueryParams } from '../../helpers/urlHelper'
import { StyledPlaylistPage } from './styles'

const PlaylitsPage = () => {
  const dispatch = useDispatch()
  const playlistState = useSelector(selectPlaylists)

  const onSearchBarChange = (filter) => {
    dispatch(filterPlaylist({ filter }))
  }

  const onFiltersChange = ({ values, errors }) => {
    if (isEmpty(errors)) {
      const filter = createQueryParams(values)
      dispatch(getPlaylistRequest({ filter }))
    }
  }

  const getFilter = useCallback(() => dispatch(getFilterRequest()), [
    dispatch,
    getFilterRequest,
  ])

  useEffect(() => {
    getFilter()
  }, [getFilter])

  const getPlaylist = useCallback(() => dispatch(getPlaylistRequest()), [
    dispatch,
    getPlaylistRequest,
  ])

  useEffect(() => {
    getPlaylist()
  }, [getPlaylist])

  return (
    <>
      <Filter
        onSearchBarChange={onSearchBarChange}
        onFiltersChange={onFiltersChange}
      />
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
            <PlaylistsCard className="page__card-list" {...playlistState} />
          </Box>
        </Container>
      </StyledPlaylistPage>
    </>
  )
}

export default PlaylitsPage
