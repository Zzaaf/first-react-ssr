const React = require('react');
const Layout = require('./Layout');

function Home({ title, name }) {
  return (
    <Layout title={title}>
      <h1 className="title" style={{ color: 'red' }}>Hello, {name}</h1>
    </Layout>
  );
};

module.exports = Home;
