import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Loader from '../components/Loader/Loader'
import TrainingDetails from '../components/TrainingDetails/TrainingDetails'

const DetailScreen = () => {
  const { key } = useParams()
  const [loading, setLoading] = useState(true)
  const [trainingDetail, setTrainingDetail] = useState({})
  useEffect(() => {
    fetch('https://powerxgymserver.herokuapp.com/detail/' + key)
      .then((res) => res.json())
      .then((data) => {
        setTrainingDetail(data)
        setLoading(false)
      })
  }, [key])
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header name={trainingDetail.title} />
          <TrainingDetails trainingDetail={trainingDetail} />
          <Footer />
        </>
      )}
    </div>
  )
}

export default DetailScreen
