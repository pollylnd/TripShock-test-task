import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import { UI_HOME_GET } from '../../redux/ui';
import { Root } from '../../types/redux';
import './style.css'

const HomePage = () => {
  const dispatch = useDispatch();
  const [ imageNumber, setImageNumber ] = useState(0);
  const [ margin, setMargin ] = useState(150);
 
  const animateSlide = () => {
    const interval = setInterval(() => {
      setMargin((margin) => {
        if (margin <= 0) {
          clearInterval(interval);
          return 0;
        }

        return margin - 3
      })
    }, 10);
  }

  useEffect(() => {
    animateSlide(); 
  }, [])

  useEffect(() => {
    setMargin(150);
    animateSlide();
  }, [imageNumber])

  useEffect(() => {
    dispatch({ type: UI_HOME_GET });
  }, [dispatch])

  const data = useSelector((state: Root) => state.ui.home);
  const gallery = data.imageSrc;

  const renderGallery = () => {
    return (
      <div className="second-step">
        <div className="first-bit" style={{
          backgroundImage: `url(${gallery[imageNumber]})`,
          marginRight: `${margin}px`
        }}></div>
        <div className="second-bit" style={{
          backgroundImage: `url(${gallery[imageNumber]})`,
        }}></div>
        <div className="third-bit" style={{
          backgroundImage: `url(${gallery[imageNumber]})`,
          marginLeft: `${margin}px`
        }}></div>
      </div>
    )
  }

  const changeSlide = (mode: string) => {
    if (mode === 'prev') {
      if (imageNumber === 0) {
        setImageNumber(gallery.length - 1);
        return;
      }

      setImageNumber(imageNumber - 1);
      return;
    }

    if (mode === 'next') {
      if (imageNumber === gallery.length - 1) {
        setImageNumber(0);
        return;
      }

      setImageNumber(imageNumber + 1);
      return;
    }
  }


  return (
    <div className="home">
      <div className="home__item">
        <Typography variant="h3">{data.title}</Typography>
        <Typography color="textSecondary">
          {data.description}
        </Typography>
      </div>
     
      <div className="home__item">
        <Typography  variant="h2">
          {data.message}
        </Typography>
        <div className="gallery__body">

          <div className="gallery-prev" onClick={() => changeSlide('prev')}>{'<'}</div>
            {gallery && renderGallery()}
          <div className="gallery-next" onClick={() => changeSlide('next')}>{'>'}</div>
        </div>
      </div>
      
    </div>
  )
};

export default HomePage;
