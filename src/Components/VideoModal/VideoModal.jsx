const VideoModal = ({ isTrue, iframeSrc, handelClose }) => {
    return (
        <div className={`cs_video_popup ${isTrue === true ? 'active' : ''}`}>
          <div className="cs_video_popup-overlay"></div>
          <div className="cs_video_popup-content">
            <div className="cs_video_popup-layer"></div>
            <div className="cs_video_popup-container">
              <div className="cs_video_popup-align">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src={iframeSrc} sandbox="allow-scripts allow-same-origin allow-presentation" referrerPolicy="no-referrer-when-downgrade" loading="lazy"></iframe>
                </div>
              </div>
              <div className="cs_video_popup-close" onClick={handelClose}></div>
            </div>
          </div>
        </div>            
    );
};

export default VideoModal;