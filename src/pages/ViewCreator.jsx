import { supabase } from "../client"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import { SocialIcon } from "react-social-icons";

export default function ViewCreator() {

    const [creator, setCreator] = useState({})

    if (!creator) return <p>Loading...</p>;

    const { id } = useParams();

    const dialogRef = useRef(null);

    const openModal = () => dialogRef.current.showModal();
    const closeModal = () => dialogRef.current.close();

    const deleteCreator = async (event) => {
      event.preventDefault();
      await supabase
      .from('creators')
      .delete()
      .eq('id', id); 

      window.location = "/creators";
  }

  const navigate = useNavigate();

  const updateCreator = (event) => {
      event.preventDefault();
      navigate(`/edit/${id}`);
  };

    useEffect(() => {
        const view = async () => {
        const {data} = await supabase
        .from('creators')
        .select()
        .eq('id', id)
        .single()

        setCreator(data)
        }
        view();
    },[id])

    return (
    <>
      <article className="create-container">
        <header className="view-header" style={{  backgroundImage: `url(${creator.imageURL})`, height: "500px", backgroundSize: "cover", backgroundPosition: "center", padding: "3rem 2rem",marginBottom: "1.5rem"}}>
          <h1 className="header-card">{creator.name}</h1>
          {/* <a href={creator.youtube}  target="_blank" rel="noreferrer" role="button" >Social </a> */}
          <div className="view-socials">
            {creator.instagram ? <SocialIcon rel="noopener noreferrer" aria-label={`${creator.name} instagram`} target="_blank" network="instagram" url={creator.instagram} /> : null}
            {creator.x ? <SocialIcon rel="noopener noreferrer" network="x" aria-label={`${creator.name} x`} target="_blank" url={creator.x} /> : null}
            {creator.linkedin ? <SocialIcon rel="noopener noreferrer" target="_blank" aria-label={`${creator.name} linkedin`} network="linkedin" url={creator.linkedin} />: null}
            {creator.youtube ? <SocialIcon rel="noopener noreferrer" target="_blank" network="youtube" aria-label={`${creator.name} youtube`} url={creator.youtube} />: null}
          </div>
        </header>

        <p>{creator.description}</p>

        <div className="buttons">
          <button onClick={updateCreator} className="secondary">Edit Creator</button>
          <button className="contrast" onClick={openModal}> Delete Creator </button>
        </div>
      </article>

      <dialog ref={dialogRef}>
        <article>
          <h3>Delete Creator?</h3>
          <p> This action cannot be undone. Are you sure you want to delete this creator? </p>

          <footer>
            <button className="secondary" onClick={closeModal}> Cancel</button>
            <button className="contrast" onClick={deleteCreator}> Delete</button>
          </footer>
        </article>
        </dialog>
      </>
    )
  }