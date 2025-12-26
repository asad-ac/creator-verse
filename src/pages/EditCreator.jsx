import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { supabase } from "../client"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function EditCreator() {

  const {id} = useParams()
  const [creator, setCreator] = useState({id: null, name: "", youtube: "", description: "", imageURL: "", linkedin: "", instagram: "", x: ""})

  const navigate = useNavigate()

  const handleChange = (event) => {
    const {name, value} = event.target
    setCreator((prev) => {
        return {
            ...prev,
            [name]:value,
        }
    })
}
  
  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
      .from('creators')
      .select()
      .eq('id', id)
      .single();
      
      if (error) console.error('Error fetching post:', error);
      else setCreator(data);
    };
    
    fetchCreator();
  }, [id]);
  
  const updateCreator = async (event) => {
    event.preventDefault();
    const {youtube, linkedin, instagram, x} = creator;
    if (!youtube && !linkedin && !instagram && !x) {
        alert("Please provide at least one social link.");
        return; 
      }
    const {error} = await supabase
    .from('creators')
    .update({ name: creator.name, description: creator.description, imageURL: creator.imageURL, youtube: creator.youtube, instagram: creator.instagram, linkedin: creator.linkedin, x: creator.x})
    .eq('id', id)

    if (error) {
      toast.error("Couldn’t update creator. Try again.");
      return;
    }
  
    toast.success("Creator updated.");

    navigate("/creators")
}
    return (
      <>
        <article className="create-container edit-creator">
          <h1 className="heading"> Edit Creator </h1>
            <form onSubmit={updateCreator}>
                <label htmlFor="name">Name </label>
                <input type="text" id="name" name="name" value={creator.name} onChange={handleChange} placeholder="eg.: Enter a name" required />

                <label htmlFor="description">Description </label>
                <textarea rows="4" cols="50" id="description" value={creator.description} name="description" placeholder="Write a couple of sentences about them" required onChange={handleChange}></textarea>

                <label htmlFor="imageURL">Image URL </label> 
                <input type="text" id="imageURL" name="imageURL" value={creator.imageURL} placeholder="eg.: Unsplash image or .jpg .jpeg .png .webp .gif" required onChange={handleChange} />

                <label htmlFor="instagram">Instagram </label>
                <input type="text" id="instagram" name="instagram" placeholder="Instagram URL" value={creator.instagram} onChange={handleChange} />

                <label htmlFor="x"> X (Formerly Twitter) </label>
                <input type="text" id="x" name="x" placeholder="X URL" value={creator.x} onChange={handleChange} />

                <label htmlFor="youtube"> YouTube </label>
                <input type="text" id="youtube" name="youtube" placeholder="YouTube URL" value={creator.youtube}  onChange={handleChange} />

                <label htmlFor="linkedin"> LinkedIn </label>
                <input type="text" id="linkedin" name="linkedin" placeholder="LinkedIn URL" value={creator.linkedin} onChange={handleChange} />

                <input type="submit" aria-label="submit" value="Update Creator" />
            </form>
        </article>
      </>
    )
  }