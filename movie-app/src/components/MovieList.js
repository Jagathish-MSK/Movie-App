import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ top: 0, left: 0 });
  const [imgSource, setImgSource] = useState('')


  useEffect(() => {
    axios
      .get('http://localhost:3001/api/movies', {
        headers: { Authorization: 'Bearer FSMovies2023' },
      })
      .then((response) => {
        setMovies(response.data);

        const uniqueGenres = Array.from(
          new Set(response.data.flatMap((movie) => movie.genres))
        );
        setGenres(uniqueGenres);
      }) 
      .catch((error) => {
        console.error(error );
      });
  }, []);



  const handleMovieHover = (movie, event) => {
    // console.log(event.target.src)
    const targetImage = event.target;
    const imgSrc = targetImage.src;
    const titlePosition = event.currentTarget.getBoundingClientRect();
    setHoverPosition({
      top: window.scrollY + titlePosition.top - 55,
      left: titlePosition.left - (targetImage.width / 13),
    });
    setImgSource(imgSrc)
    setSelectedMovie(movie);
  };


  return (
    <div>
      <div className='topNav'>
        <div className='titleDiv'>
          <Link to={'/api/movies/'}>
            {/* <span> */}
            <svg width="100" height="56" viewBox="0 0 587 356" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="587" height="356" rx="81" fill="#FDF5F3" />
              <path d="M102.778 282L45.4352 73.4066H58.676L109.602 262.343H110.824L160.936 73.4066H176.417L226.528 262.343H227.751L278.677 73.4066H291.816L234.473 282H219.806L169.186 94.2864H168.065L117.445 282H102.778ZM329.476 73.4066H343.327L423.689 263.667H425.115L505.476 73.4066H519.328V282H507.106V103.657H505.884L430.411 282H418.393L342.92 103.657H341.698V282H329.476V73.4066Z" fill="black" />
              <rect y="152" width="587" height="52" fill="#FDF5F3" />
              <path d="M126.086 195L117.336 163H121.273L127.961 189.062H128.273L135.086 163H139.461L146.273 189.062H146.586L153.273 163H157.211L148.461 195H144.461L137.398 169.5H137.148L130.086 195H126.086ZM187.535 179C187.535 182.375 186.926 185.292 185.707 187.75C184.488 190.208 182.816 192.104 180.691 193.438C178.566 194.771 176.139 195.437 173.41 195.437C170.681 195.437 168.254 194.771 166.129 193.438C164.004 192.104 162.332 190.208 161.113 187.75C159.895 185.292 159.285 182.375 159.285 179C159.285 175.625 159.895 172.708 161.113 170.25C162.332 167.792 164.004 165.896 166.129 164.562C168.254 163.229 170.681 162.562 173.41 162.562C176.139 162.562 178.566 163.229 180.691 164.562C182.816 165.896 184.488 167.792 185.707 170.25C186.926 172.708 187.535 175.625 187.535 179ZM183.785 179C183.785 176.229 183.322 173.891 182.395 171.984C181.478 170.078 180.233 168.635 178.66 167.656C177.098 166.677 175.348 166.187 173.41 166.187C171.473 166.187 169.717 166.677 168.145 167.656C166.582 168.635 165.337 170.078 164.41 171.984C163.493 173.891 163.035 176.229 163.035 179C163.035 181.771 163.493 184.109 164.41 186.016C165.337 187.922 166.582 189.365 168.145 190.344C169.717 191.323 171.473 191.812 173.41 191.812C175.348 191.812 177.098 191.323 178.66 190.344C180.233 189.365 181.478 187.922 182.395 186.016C183.322 184.109 183.785 181.771 183.785 179ZM221.051 179C221.051 182.375 220.441 185.292 219.223 187.75C218.004 190.208 216.332 192.104 214.207 193.438C212.082 194.771 209.655 195.437 206.926 195.437C204.197 195.437 201.77 194.771 199.645 193.438C197.52 192.104 195.848 190.208 194.629 187.75C193.41 185.292 192.801 182.375 192.801 179C192.801 175.625 193.41 172.708 194.629 170.25C195.848 167.792 197.52 165.896 199.645 164.562C201.77 163.229 204.197 162.562 206.926 162.562C209.655 162.562 212.082 163.229 214.207 164.562C216.332 165.896 218.004 167.792 219.223 170.25C220.441 172.708 221.051 175.625 221.051 179ZM217.301 179C217.301 176.229 216.837 173.891 215.91 171.984C214.993 170.078 213.749 168.635 212.176 167.656C210.613 166.677 208.863 166.187 206.926 166.187C204.988 166.187 203.233 166.677 201.66 167.656C200.098 168.635 198.853 170.078 197.926 171.984C197.009 173.891 196.551 176.229 196.551 179C196.551 181.771 197.009 184.109 197.926 186.016C198.853 187.922 200.098 189.365 201.66 190.344C203.233 191.323 204.988 191.812 206.926 191.812C208.863 191.812 210.613 191.323 212.176 190.344C213.749 189.365 214.993 187.922 215.91 186.016C216.837 184.109 217.301 181.771 217.301 179ZM227.566 195V163H231.441V178.875H231.816L246.191 163H251.254L237.816 177.437L251.254 195H246.566L235.441 180.125L231.441 184.625V195H227.566ZM260.145 163V195H256.27V163H260.145ZM267.914 195V163H287.227V166.437H271.789V177.25H286.227V180.687H271.789V191.562H287.477V195H267.914ZM306.586 163H311.211L322.086 189.562H322.461L333.336 163H337.961V195H334.336V170.688H334.023L324.023 195H320.523L310.523 170.688H310.211V195H306.586V163ZM372.73 179C372.73 182.375 372.121 185.292 370.902 187.75C369.684 190.208 368.012 192.104 365.887 193.438C363.762 194.771 361.335 195.437 358.605 195.437C355.876 195.437 353.449 194.771 351.324 193.438C349.199 192.104 347.527 190.208 346.309 187.75C345.09 185.292 344.48 182.375 344.48 179C344.48 175.625 345.09 172.708 346.309 170.25C347.527 167.792 349.199 165.896 351.324 164.562C353.449 163.229 355.876 162.562 358.605 162.562C361.335 162.562 363.762 163.229 365.887 164.562C368.012 165.896 369.684 167.792 370.902 170.25C372.121 172.708 372.73 175.625 372.73 179ZM368.98 179C368.98 176.229 368.517 173.891 367.59 171.984C366.673 170.078 365.428 168.635 363.855 167.656C362.293 166.677 360.543 166.187 358.605 166.187C356.668 166.187 354.913 166.677 353.34 167.656C351.777 168.635 350.533 170.078 349.605 171.984C348.689 173.891 348.23 176.229 348.23 179C348.23 181.771 348.689 184.109 349.605 186.016C350.533 187.922 351.777 189.365 353.34 190.344C354.913 191.323 356.668 191.812 358.605 191.812C360.543 191.812 362.293 191.323 363.855 190.344C365.428 189.365 366.673 187.922 367.59 186.016C368.517 184.109 368.98 181.771 368.98 179ZM379.055 163L388.555 189.937H388.93L398.43 163H402.492L390.742 195H386.742L374.992 163H379.055ZM411.352 163V195H407.477V163H411.352ZM419.121 195V163H438.434V166.437H422.996V177.25H437.434V180.687H422.996V191.562H438.684V195H419.121ZM462.918 171C462.73 169.417 461.97 168.188 460.637 167.312C459.303 166.437 457.668 166 455.73 166C454.314 166 453.074 166.229 452.012 166.687C450.96 167.146 450.137 167.776 449.543 168.578C448.96 169.38 448.668 170.292 448.668 171.312C448.668 172.167 448.871 172.901 449.277 173.516C449.694 174.12 450.225 174.625 450.871 175.031C451.517 175.427 452.194 175.755 452.902 176.016C453.611 176.266 454.262 176.469 454.855 176.625L458.105 177.5C458.939 177.719 459.866 178.021 460.887 178.406C461.918 178.792 462.902 179.318 463.84 179.984C464.788 180.641 465.569 181.484 466.184 182.516C466.798 183.547 467.105 184.812 467.105 186.312C467.105 188.042 466.652 189.604 465.746 191C464.85 192.396 463.538 193.505 461.809 194.328C460.09 195.151 458.001 195.563 455.543 195.563C453.251 195.563 451.267 195.193 449.59 194.453C447.923 193.714 446.611 192.682 445.652 191.359C444.704 190.036 444.168 188.5 444.043 186.75H448.043C448.147 187.958 448.553 188.958 449.262 189.75C449.98 190.531 450.887 191.115 451.98 191.5C453.085 191.875 454.272 192.062 455.543 192.062C457.022 192.062 458.35 191.823 459.527 191.344C460.704 190.854 461.637 190.177 462.324 189.312C463.012 188.437 463.355 187.417 463.355 186.25C463.355 185.187 463.059 184.323 462.465 183.656C461.871 182.99 461.09 182.448 460.121 182.031C459.152 181.615 458.105 181.25 456.98 180.937L453.043 179.812C450.543 179.094 448.564 178.068 447.105 176.734C445.647 175.401 444.918 173.656 444.918 171.5C444.918 169.708 445.402 168.146 446.371 166.812C447.35 165.469 448.663 164.427 450.309 163.687C451.965 162.937 453.814 162.562 455.855 162.562C457.918 162.562 459.751 162.932 461.355 163.672C462.96 164.401 464.23 165.401 465.168 166.672C466.116 167.943 466.616 169.385 466.668 171H462.918Z" fill="black" />
            </svg>
            {/* </span> */}
          </Link>
        </div>
        {/* <div className='searchDiv'> */}
        {/* <div className='searchIcon'> */}

        {/* </div> */}
        {/* <div className='searchBox'>  */}
        <div className="box">
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper">Search movies.......</div>
              <span className='vector'>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                  <path d="M19.7309 18.3109L16.0209 14.6309C17.461 12.8353 18.1584 10.5562 17.9697 8.2622C17.781 5.9682 16.7206 3.83368 15.0064 2.29754C13.2923 0.761407 11.0547 -0.0595894 8.75382 0.00337096C6.45294 0.0663314 4.26362 1.00846 2.63604 2.63604C1.00846 4.26362 0.0663314 6.45294 0.00337096 8.75382C-0.0595894 11.0547 0.761407 13.2923 2.29754 15.0064C3.83368 16.7206 5.9682 17.781 8.2622 17.9697C10.5562 18.1584 12.8353 17.461 14.6309 16.0209L18.3109 19.7009C18.4039 19.7946 18.5145 19.869 18.6363 19.9198C18.7582 19.9706 18.8889 19.9967 19.0209 19.9967C19.1529 19.9967 19.2836 19.9706 19.4055 19.9198C19.5273 19.869 19.6379 19.7946 19.7309 19.7009C19.9111 19.5144 20.0119 19.2652 20.0119 19.0059C20.0119 18.7466 19.9111 18.4974 19.7309 18.3109ZM9.0209 16.0209C7.63643 16.0209 6.28305 15.6104 5.13191 14.8412C3.98076 14.072 3.08356 12.9788 2.55374 11.6997C2.02393 10.4206 1.88531 9.01314 2.1554 7.65527C2.4255 6.2974 3.09219 5.05012 4.07115 4.07115C5.05012 3.09219 6.2974 2.4255 7.65527 2.1554C9.01314 1.88531 10.4206 2.02393 11.6997 2.55374C12.9788 3.08356 14.072 3.98076 14.8412 5.13191C15.6104 6.28305 16.0209 7.63643 16.0209 9.0209C16.0209 10.8774 15.2834 12.6579 13.9706 13.9706C12.6579 15.2834 10.8774 16.0209 9.0209 16.0209Z" fill="black" />
                </svg>
              </span>

            </div>
          </div>


          {/* </div> */}
          {/* <input type='' className='boxx'></input> */}
        </div>
        {/* </div> */}
      </div>
      <div className='dataContainer'>

        {genres.map((genre) => (
          <div key={genre}>
            <h2>{genre}</h2>

            <div key={genre} className='movie-title-list'>

              {movies
                .filter((movie) => movie.genres.includes(genre))
                .map((movie) => (
                  <div key={movie.id} className='movie-title'
                    onMouseEnter={(e) => handleMovieHover(movie, e)}
                    onMouseLeave={() => setSelectedMovie(null)}>
                    <Link to={`/api/movies/${movie._id}`}>
                      <img className='imgSource' src={movie.poster} alt='' />
                    </Link>
                  </div>
                ))}

            </div>

          </div>
        ))}

        {selectedMovie && (
          <div className="movie-details" style={{ top: hoverPosition.top, left: hoverPosition.left }}>
            <img className='hoveredImage' src={imgSource} alt=''></img>
            <div className='detailPan'>
              <p className='movieName_Hov'>{selectedMovie.title}</p>
              <p className='movieOverview'>{selectedMovie.overview}</p>
            </div>
          </div>
        )}

      </div>
      <div className='FinDiv'>
        <div className='titleDivisionFooter'>
          <div className=''>
            <Link to={'/api/movies/'}>
              <svg width="100" height="56" viewBox="0 0 587 356" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="587" height="356" rx="81" fill="#FDF5F3" />
                <path d="M102.778 282L45.4352 73.4066H58.676L109.602 262.343H110.824L160.936 73.4066H176.417L226.528 262.343H227.751L278.677 73.4066H291.816L234.473 282H219.806L169.186 94.2864H168.065L117.445 282H102.778ZM329.476 73.4066H343.327L423.689 263.667H425.115L505.476 73.4066H519.328V282H507.106V103.657H505.884L430.411 282H418.393L342.92 103.657H341.698V282H329.476V73.4066Z" fill="black" />
                <rect y="152" width="587" height="52" fill="#FDF5F3" />
                <path d="M126.086 195L117.336 163H121.273L127.961 189.062H128.273L135.086 163H139.461L146.273 189.062H146.586L153.273 163H157.211L148.461 195H144.461L137.398 169.5H137.148L130.086 195H126.086ZM187.535 179C187.535 182.375 186.926 185.292 185.707 187.75C184.488 190.208 182.816 192.104 180.691 193.438C178.566 194.771 176.139 195.437 173.41 195.437C170.681 195.437 168.254 194.771 166.129 193.438C164.004 192.104 162.332 190.208 161.113 187.75C159.895 185.292 159.285 182.375 159.285 179C159.285 175.625 159.895 172.708 161.113 170.25C162.332 167.792 164.004 165.896 166.129 164.562C168.254 163.229 170.681 162.562 173.41 162.562C176.139 162.562 178.566 163.229 180.691 164.562C182.816 165.896 184.488 167.792 185.707 170.25C186.926 172.708 187.535 175.625 187.535 179ZM183.785 179C183.785 176.229 183.322 173.891 182.395 171.984C181.478 170.078 180.233 168.635 178.66 167.656C177.098 166.677 175.348 166.187 173.41 166.187C171.473 166.187 169.717 166.677 168.145 167.656C166.582 168.635 165.337 170.078 164.41 171.984C163.493 173.891 163.035 176.229 163.035 179C163.035 181.771 163.493 184.109 164.41 186.016C165.337 187.922 166.582 189.365 168.145 190.344C169.717 191.323 171.473 191.812 173.41 191.812C175.348 191.812 177.098 191.323 178.66 190.344C180.233 189.365 181.478 187.922 182.395 186.016C183.322 184.109 183.785 181.771 183.785 179ZM221.051 179C221.051 182.375 220.441 185.292 219.223 187.75C218.004 190.208 216.332 192.104 214.207 193.438C212.082 194.771 209.655 195.437 206.926 195.437C204.197 195.437 201.77 194.771 199.645 193.438C197.52 192.104 195.848 190.208 194.629 187.75C193.41 185.292 192.801 182.375 192.801 179C192.801 175.625 193.41 172.708 194.629 170.25C195.848 167.792 197.52 165.896 199.645 164.562C201.77 163.229 204.197 162.562 206.926 162.562C209.655 162.562 212.082 163.229 214.207 164.562C216.332 165.896 218.004 167.792 219.223 170.25C220.441 172.708 221.051 175.625 221.051 179ZM217.301 179C217.301 176.229 216.837 173.891 215.91 171.984C214.993 170.078 213.749 168.635 212.176 167.656C210.613 166.677 208.863 166.187 206.926 166.187C204.988 166.187 203.233 166.677 201.66 167.656C200.098 168.635 198.853 170.078 197.926 171.984C197.009 173.891 196.551 176.229 196.551 179C196.551 181.771 197.009 184.109 197.926 186.016C198.853 187.922 200.098 189.365 201.66 190.344C203.233 191.323 204.988 191.812 206.926 191.812C208.863 191.812 210.613 191.323 212.176 190.344C213.749 189.365 214.993 187.922 215.91 186.016C216.837 184.109 217.301 181.771 217.301 179ZM227.566 195V163H231.441V178.875H231.816L246.191 163H251.254L237.816 177.437L251.254 195H246.566L235.441 180.125L231.441 184.625V195H227.566ZM260.145 163V195H256.27V163H260.145ZM267.914 195V163H287.227V166.437H271.789V177.25H286.227V180.687H271.789V191.562H287.477V195H267.914ZM306.586 163H311.211L322.086 189.562H322.461L333.336 163H337.961V195H334.336V170.688H334.023L324.023 195H320.523L310.523 170.688H310.211V195H306.586V163ZM372.73 179C372.73 182.375 372.121 185.292 370.902 187.75C369.684 190.208 368.012 192.104 365.887 193.438C363.762 194.771 361.335 195.437 358.605 195.437C355.876 195.437 353.449 194.771 351.324 193.438C349.199 192.104 347.527 190.208 346.309 187.75C345.09 185.292 344.48 182.375 344.48 179C344.48 175.625 345.09 172.708 346.309 170.25C347.527 167.792 349.199 165.896 351.324 164.562C353.449 163.229 355.876 162.562 358.605 162.562C361.335 162.562 363.762 163.229 365.887 164.562C368.012 165.896 369.684 167.792 370.902 170.25C372.121 172.708 372.73 175.625 372.73 179ZM368.98 179C368.98 176.229 368.517 173.891 367.59 171.984C366.673 170.078 365.428 168.635 363.855 167.656C362.293 166.677 360.543 166.187 358.605 166.187C356.668 166.187 354.913 166.677 353.34 167.656C351.777 168.635 350.533 170.078 349.605 171.984C348.689 173.891 348.23 176.229 348.23 179C348.23 181.771 348.689 184.109 349.605 186.016C350.533 187.922 351.777 189.365 353.34 190.344C354.913 191.323 356.668 191.812 358.605 191.812C360.543 191.812 362.293 191.323 363.855 190.344C365.428 189.365 366.673 187.922 367.59 186.016C368.517 184.109 368.98 181.771 368.98 179ZM379.055 163L388.555 189.937H388.93L398.43 163H402.492L390.742 195H386.742L374.992 163H379.055ZM411.352 163V195H407.477V163H411.352ZM419.121 195V163H438.434V166.437H422.996V177.25H437.434V180.687H422.996V191.562H438.684V195H419.121ZM462.918 171C462.73 169.417 461.97 168.188 460.637 167.312C459.303 166.437 457.668 166 455.73 166C454.314 166 453.074 166.229 452.012 166.687C450.96 167.146 450.137 167.776 449.543 168.578C448.96 169.38 448.668 170.292 448.668 171.312C448.668 172.167 448.871 172.901 449.277 173.516C449.694 174.12 450.225 174.625 450.871 175.031C451.517 175.427 452.194 175.755 452.902 176.016C453.611 176.266 454.262 176.469 454.855 176.625L458.105 177.5C458.939 177.719 459.866 178.021 460.887 178.406C461.918 178.792 462.902 179.318 463.84 179.984C464.788 180.641 465.569 181.484 466.184 182.516C466.798 183.547 467.105 184.812 467.105 186.312C467.105 188.042 466.652 189.604 465.746 191C464.85 192.396 463.538 193.505 461.809 194.328C460.09 195.151 458.001 195.563 455.543 195.563C453.251 195.563 451.267 195.193 449.59 194.453C447.923 193.714 446.611 192.682 445.652 191.359C444.704 190.036 444.168 188.5 444.043 186.75H448.043C448.147 187.958 448.553 188.958 449.262 189.75C449.98 190.531 450.887 191.115 451.98 191.5C453.085 191.875 454.272 192.062 455.543 192.062C457.022 192.062 458.35 191.823 459.527 191.344C460.704 190.854 461.637 190.177 462.324 189.312C463.012 188.437 463.355 187.417 463.355 186.25C463.355 185.187 463.059 184.323 462.465 183.656C461.871 182.99 461.09 182.448 460.121 182.031C459.152 181.615 458.105 181.25 456.98 180.937L453.043 179.812C450.543 179.094 448.564 178.068 447.105 176.734C445.647 175.401 444.918 173.656 444.918 171.5C444.918 169.708 445.402 168.146 446.371 166.812C447.35 165.469 448.663 164.427 450.309 163.687C451.965 162.937 453.814 162.562 455.855 162.562C457.918 162.562 459.751 162.932 461.355 163.672C462.96 164.401 464.23 165.401 465.168 166.672C466.116 167.943 466.616 169.385 466.668 171H462.918Z" fill="black" />
              </svg>
            </Link>
          </div>
        </div>
        <div className='footerFin'>
          <p className='footerText'>Terms and Privacy Notice</p>
          <p className='footerText'>Send us feedback</p>
          <p className='footerText'>Help</p>
          <p className='footerText'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
}

export default MovieList;
