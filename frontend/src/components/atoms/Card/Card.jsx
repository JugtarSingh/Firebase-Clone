import './card.css';

export default function Card({title , description , imageUrl }){
    return (
        <>
            <div className='card'>
                <img src ={imageUrl}/>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </>

    )
}