import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>Powered By <Link to="https://uptimerobot.com/" text="UptimeRobot" /> & <Link to="https://github.com/yb/uptime-status" text="uptime-status" /></p>
        <p>Theme <Link to="https://status.solstice23.top/" text="solstice23" /></p>
      </div>
    </div>
  );
}

export default Footer;
