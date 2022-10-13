import '../App.css'

const RowItem = ({poster_path,title,language,vote}) => {

  var rating = parseFloat(vote).toFixed(1)

  const Src = `https://image.tmdb.org/t/p/original${poster_path}`

  return (
    <div className="img_container">
      <img className="rowimg" src={Src} alt="poster" />
      <div className="hoverContainer">
        <div className="hoverContent">
          <div className="hoverContentTop">
            <div className="title">
              {title}
            </div>
            <div className="language">
              Language: {language}
            </div>
            <div className="rating">
              Ratings: {rating}/10
            </div>
          </div>
          <div className="hoverContentBottom">
          <svg height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill='#c0c0c0' ><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          </div>
        </div>
      </div>
    </div>
  )

}

export default RowItem