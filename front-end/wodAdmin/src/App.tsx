import PropTypes from "prop-types";

function App({ title }) {

  console.log(title);

  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

App.propTypes = {
  title: PropTypes.string.isrequired
}

export default App