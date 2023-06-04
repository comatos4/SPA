import {Link} from "react-router-dom";

function CategoryItem(props) {
    const {strCategory, strCategoryThumb, strCategoryDescription} = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className="card-content">
                <span className="card-title deep-orange-text text-lighten-1">{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div className="card-action">
                <Link to={('/category/' + strCategory)} className="btn deep-orange lighten-3">
                    Watch category
                </Link>
            </div>
        </div>
    );
}

export {CategoryItem};