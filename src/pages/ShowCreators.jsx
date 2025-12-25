import ContentCreator from "../components/ContentCreator";
import { useEffect, useState } from "react";
import { supabase } from "../client";
import LoadingCard from "./LoadingCard";

export default function ShowCreators() {

    const [creators, setCreators] = useState({})

    if (!creators) return <p>Loading...</p>;

    useEffect(() => {
        const fetchCreators = async () => {
        const {data, error} = await supabase
        .from('creators')
        .select()
          
        if(!error) {
          setCreators(data)
        }
        
        };
        fetchCreators()
    },[])

    return (
    <>
      {creators.length > 0 ? (
        <div className="cards">
          {creators.map((creator) => (
            <ContentCreator
              key={creator.id}
              {...creator} />
          ))}
        </div>
        ) : (
          <LoadingCard />
        )}
    </>
    )
  }