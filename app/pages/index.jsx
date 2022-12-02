import React from 'react'
import Navigation from '../components/Navigation'
import Link from "next/link";
import { useTranslation } from "react-i18next";
const index = () => {
  return (
    <div>
      <Navigation />
     <h1>home</h1>
    </div>
  )
}

export default index