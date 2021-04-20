import { Card, CardContent, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UI_NEWS_GET } from '../../redux/ui';
import { NewsItem } from '../../types/news';
import { Root } from '../../types/redux';
import './style.css'

const NewsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: UI_NEWS_GET });
  }, [dispatch])

  const data = useSelector((state: Root) => state.ui.news);

  return (
    <div>
      <Typography variant="h3" style={{marginLeft: '20px'}}>
        {data.title}
      </Typography>
      <div>
        {data.news?.map((item: NewsItem) => {
          return (
            <Card className="card">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography color="textSecondary">
                  {item.description}
                </Typography>
                <Typography variant="body2" component="p">
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default NewsPage;