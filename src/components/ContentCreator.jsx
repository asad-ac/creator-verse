import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { SocialIcon } from 'react-social-icons'

export default function ContentCreator({ id, name, youtube, description, imageURL, instagram, x, linkedin }) {
  return (
    <div className="card">
        <Link to={`/creator/${id}`}><div className="card-image">
            <div style={{ backgroundImage: `url(${imageURL})` }} />
        </div> </Link>
        <div className="creator">
          <h3>{name}</h3>
          <div className="navigate-icons">
            <Link to={`/creator/${id}`}> <FaInfoCircle size={36} /></Link>
            <Link to={`/edit/${id}`}> <MdEdit size={36} /> </Link>
        </div>
          </div>
        <div className="card-socials">
          {instagram ? <SocialIcon rel="noopener noreferrer" target="_blank" network="instagram" url={instagram} /> : null}
          {x ? <SocialIcon bgColor="white" fgColor="black" network="x" rel="noopener noreferrer" target="_blank" url={x}/> : null}
          {linkedin ? <SocialIcon rel="noopener noreferrer" network="linkedin" target="_blank" url={linkedin} />: null}
          {youtube ? <SocialIcon rel="noopener noreferrer" network="youtube" target="_blank" url={youtube}/> : null}
        </div>
        <div className="card-body">
            <p>{description}</p>
        </div>
    </div>
  );
}



