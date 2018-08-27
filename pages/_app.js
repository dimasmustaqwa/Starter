import App, { Container } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { withRouter } from 'next/router';
import withRedux from "next-redux-wrapper";

import 'material-icons/iconfont/material-icons.scss';
import '@/styles/app.scss';

import store from '@/store';

const makeStore = (initialState, options) => {
  return store;
};

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    }
  }

  render() {
    const { Component, pageProps, router, store } = this.props
    const { asPath, pathname, query } = router
    const url = {
      asPath,
      pathname,
      query
    }
    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <title>House Of Indonesia</title>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" type="text/css" href="/static/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <Provider store={store}>
          <Component {...pageProps} url={url} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore, { debug: process.env.NODE_ENV == 'production' ? false : true })(withRouter(MyApp));