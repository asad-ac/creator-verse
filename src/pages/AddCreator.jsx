import { useState } from "react"
import { supabase } from "../client";
export default function AddCreator() {
    
    const [creator, setCreator] = useState({id: null, name: "", youtube: "", description: "", imageURL: "", linkedin: "", instagram: "", x:""})

    const addCreator = async (event) => {
        event.preventDefault();
        const {youtube, linkedin, instagram, x} = creator;
        if (!youtube && !linkedin && !instagram && !x) {
            alert("Please provide at least one social link.");
            return; 
          }
        await supabase
        .from('creators')
        .insert({name: creator.name, youtube: creator.youtube, description: creator.description, imageURL: creator.imageURL,linkedin: creator.linkedin, instagram: creator.instagram, x: creator.x})
        .select()

        window.location = "/creators"
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setCreator( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <>
            <article className="create-container">
                <h1 className="heading"> Add a Creator </h1>
                <form onSubmit={addCreator}>
                    <label htmlFor="name">Name </label>
                    <input type="text" id="name" name="name" onChange={handleChange} placeholder="eg.: Enter a name" required />

                    <label htmlFor="description"> Description </label>
                    <textarea rows="4" cols="50" id="description" name="description" aria-label="Professional short bio" required onChange={handleChange} placeholder="Write a couple of sentences about them"></textarea>

                    <label htmlFor="imageURL">Image URL </label>
                    <input type="text" id="imageURL" name="imageURL" placeholder="eg.: Unsplash image or .jpg .jpeg .png" required onChange={handleChange} />

                    <label htmlFor="instagram">Instagram </label>
                    <input type="text" id="instagram" name="instagram" placeholder="Instagram URL" onChange={handleChange} />

                    <label htmlFor="x"> X (Formerly Twitter) </label>
                    <input type="text" id="x" name="x" placeholder="X URL" onChange={handleChange} />

                    <label htmlFor="youtube"> YouTube </label>
                    <input type="text" id="youtube" name="youtube" placeholder="YouTube URL"  onChange={handleChange} />

                    <label htmlFor="linkedin"> LinkedIn </label>
                    <input type="text" id="linkedin" name="linkedin" placeholder="LinkedIn URL" onChange={handleChange} />

                    <input type="submit" value="Create Post" />
                </form>
            </article>
      </>
    )
  }
  