export const CardPersonaje = ({name,image}) => {
    return ( 
        <div><img src={image} title={name} loading="lazy" />   </div>
     );
}