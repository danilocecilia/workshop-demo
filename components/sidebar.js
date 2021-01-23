const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="circle"></div>
      <div className="content">
        <div className="profile">
          <img src="/avatar.png" alt="me" width="70" height="70" />
          <p>Danilo Cecilia</p>
          <p>Pro Member</p>
        </div>
        <ul className="nav">
          <li>
            <i className="fab fa-twitch big-icon"></i>
            <a>Streams</a>
          </li>
          <li>
            <i className="fab fa-steam big-icon"></i>
            <a>Games</a>
          </li>
          <li>
            <i className="fas fa-gamepad big-icon"></i>
            <a>Upcoming</a>
          </li>
          <li>
            <i className="fas fa-book big-icon"></i>
            <a>Library</a>
          </li>
        </ul>

        <div className="join-now">
          <p>Join pro for free games.</p>
          <img
            className="gamepad"
            src="/gamepad.png"
            alt="gamepad"
            width="auto"
            height="auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
