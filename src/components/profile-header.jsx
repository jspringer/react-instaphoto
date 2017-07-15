import React from 'react';

export default class ProfileHeader extends React.Component {

	render() {
		return (
			<div className="row user-header p-y-2">
	      <div className="col-md-offset-2 col-md-8 p-y-4">
	        <div className="media">
            <div className="media-left">
              <a href="#">
                <img
									className="media-object"
									src="https://github.com/jspringer/jspringer.github.io/blob/master/images/brooklynbridgepark-square-1084x1084.png?raw=true"
									alt="profile-pic"
								/>
              </a>
            </div>
            <div className="media-body p-l-6">
              <h2 className="media-heading m-t-15">jsn.spr</h2>
              <h4><strong>Jason Springer</strong> Developer</h4>
              <ul className="header-ul">
                <li><strong>50</strong> posts</li>
                <li><strong>100</strong> followers</li>
                <li><strong>80</strong> following</li>
              </ul>
            </div>
          </div>
        </div>
	    </div>
		);
	}
}
