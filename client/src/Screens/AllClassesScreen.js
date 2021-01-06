import React, { useState, useEffect } from 'react'
import AllClasses from '../components/AllClasses/AllClasses'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Loader from '../components/Loader/Loader'

const AllClassesScreen = () => {
  const [training, setTraining] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://powerxgymserver.herokuapp.com/training')
      .then((res) => res.json())
      .then((data) => {
        setTraining(data)
        setLoading(false)
      })
  }, [])
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header name="OUR CLASSES" />
          <AllClasses training={training} loading={loading} />
          <Footer />{' '}
        </>
      )}
    </>
  )
}

export default AllClassesScreen
