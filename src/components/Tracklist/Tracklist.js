import react from 'react';

import './Tracklist.css';


const Tracklist = (props) => {
    return (
        <div className='Tracklist'>
            {props.tracks.map((track) => {
                return (
                    <Track
                        key={track.id}
                        track={track}
                        onAdd={props.onAdd}
                        onRemove={props.onRemove}
                        isRemoval={props.isRemoval}
                    />
                );
            })}
        </div>  
    
    )
}

export default Tracklist;