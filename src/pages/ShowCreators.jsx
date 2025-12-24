import ContentCreator from "../components/ContentCreator";
import { useEffect, useState } from "react";
import { supabase } from "../client";
import LoadingCard from "./LoadingCard";

export default function ShowCreators() {

    const [creators, setCreators] = useState({})

    if (!creators) return <p>Loading...</p>;

    useEffect(() => {
        const fetchCreators = async () => {
        const {data} = await supabase
        .from('creators')
        .select()
  
        setCreators(data)
        }
        fetchCreators()
    },[])

    return (
    <>
      {creators.length > 0 ? (
        <div className="cards">
          {creators.map((creator) => (
            <ContentCreator
              key={creator.id}
              id={creator.id}
              name={creator.name}
              youtube={creator.youtube}
              imageURL={creator.imageURL}
              description={creator.description}
              linkedin={creator.linkedin}
              instagram={creator.instagram}
              x={creator.x} />
          ))}
        </div>
        ) : (
          <LoadingCard />
        )}
    </>
    )
  }