/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { CookiesProvider } from "react-cookie"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Nav"
import Loading from './Loading';
// import { useEffect, useState } from 'react';
import $ from 'jquery';
import { useLayoutEffect } from 'react';
import Footer from './Footer';
import SignUp from './signUp.js';
import { styled } from 'styled-components';

const Layout = ({ children, className }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  useLayoutEffect(() => {
    $('#loading').fadeOut(500);
    if (window) {
      if (!window.location.hash)
        window.scrollTo(0, 0)
    }
  });

  return (
    <div className={`w-screen overflow-x-hidden`}>
      <CookiesProvider>
        <Loading />
        <Navbar />
        <SignUp />
        {/* <main className={`w-screen ${className ? className : ''}`}> */}
        <div>
          <main className={`px-5 md:px-12 ${className ? className : ""} lg:px-24 top-0 left-0 w-screen min-h-screen pt-14 `}>

            {children}
          </main>
          <Footer />
        </div>
        {/* <Footer style={{ transform: "translateY(130%)" }} className="absolute bottom-0 " /> */}
        {/* </main> */}
      </CookiesProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
