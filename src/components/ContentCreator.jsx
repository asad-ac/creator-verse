import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { SocialIcon } from 'react-social-icons'

export default function ContentCreator({ id, name, youtube, description, imageURL, instagram, x, linkedin }) {
  return (
    <div className="card">
        <div className="card-image">
            <div style={{ backgroundImage: `url(${imageURL})` }} />
        </div>
        <div className="creator">
          <h3>{name}</h3>
          <div className="navigate-icons">
            <Link to={`/creator/${id}`}> <FaInfoCircle size={36} /></Link>
            <Link to={`/edit/${id}`}> <MdEdit size={36} /> </Link>
        </div>
          </div>
        <div className="card-socials">
          {instagram ? <SocialIcon network="instagram" url={instagram} /> : null}
          {x ? <SocialIcon network="x" url={x}/> : null}
          {linkedin ? <SocialIcon network="linkedin" url={linkedin} />: null}
          {youtube ? <SocialIcon network="youtube" url={youtube}/> : null}
        </div>
        <div className="card-body">
            <p>{description}</p>
        </div>
    </div>
  );
}



