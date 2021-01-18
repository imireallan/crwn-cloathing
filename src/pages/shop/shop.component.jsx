import {useState} from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from './shop.data'

const ShopPage = () => {
    const [collection] = useState(SHOP_DATA)

    return (
        <div>
            {collection.map(({id, ...otherColectionProps}) => (
                <CollectionPreview key={id} {...otherColectionProps}/>
            ))}
        </div>
    )
}

export default ShopPage
