import React from 'react';
import Layout from 'components/Layout';
import P from 'components/P';

const Home = () => (
  <Layout title='Главная'>
    <h1>Тестовое задание React</h1>
    <P>
      Отображание таблицы с большим количеством данных. Данные замоканы, генерируются
      через faker в момент старта приложения
    </P>
  </Layout>
);

export default Home;
