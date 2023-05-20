import images from './assets/images.jpeg'
import images2 from './assets/images2.jpeg'

const ItemListConteiner = ({greeting}) => {
    return (
<div>
    <h1 class="d-flex justify-content-center">
        {greeting}
    </h1>
    <div class="d-flex justify-content-center"> <img src={images2} class="img-fluid " alt="images2-widget" />
    <img src={images2} class="img-fluid" alt="images2-widget" />
    <img src={images2} class="img-fluid" alt="images2-widget" />
    <img src={images2} class="img-fluid" alt="images2-widget" />
    <img src={images2} class="img-fluid" alt="images2-widget" />
    </div>
   

    
</div>
    )
}
export default ItemListConteiner