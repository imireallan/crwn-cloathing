import './collection-item.styles.scss';

const CollectionItem = ({ imageUrl, name, price }) => {
    return (
        <div className="collection-item">
            <div
            data-testid="bgImage"
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    );
};

export default CollectionItem;
