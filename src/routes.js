import React, { Suspense } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DynamicImport from './components/DynamicImport'
import ErrorPage from './pages/ErrorPage'
import Loading from './components/Loading'

const WelcomePage = () => (
  <DynamicImport
    loadComponent={() =>
      import(/*  webpackChunkName: "welcomePage" */ './pages/WelcomePage')
    }
    ErrorComponent={ErrorPage}
    LoadingComponent={() => <Loading />}
  />
)

const ContentPage = () => (
  <DynamicImport
    loadComponent={() =>
      import(/*  webpackChunkName: "contentPage" */ './pages/ContentPage')
    }
    ErrorComponent={() => ErrorPage}
    LoadingComponent={() => <Loading />}
  />
)

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<ErrorPage />}>
          <Switch>
            <Route path="/content" component={ContentPage} />
            <Route exact path="/" component={WelcomePage} />
            <Route component={ErrorPage} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Routes
