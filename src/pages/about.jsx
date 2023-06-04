import img1 from '../1.jpg';
import img2 from '../2.jpg';
import img4 from '../4.jpg';

function About() {
    return (
        <>
            <h3 className="recipeH3 deep-orange-text text-lighten-1" >About</h3>
            <div className="row ">
                <p>    We created this resource to share our favorite recipes and help other cooking enthusiasts find inspiration and joy in cooking. Our group of enthusiasts carefully selects and tests each recipe to ensure its quality and taste.
                    On our site, you'll find a wide variety of recipes for every taste and preference, from classic dishes to modern experiments.
                </p>
                <p>
                On our site you will find a wide range of recipes for all tastes and preferences: from classic dishes to modern experiments. We have recipes for different times of the year, holidays and special occasions. We also focus on different diets and dietary restrictions, offering adapted recipes so that everyone can enjoy delicious and healthy food.

                We strive to make our site a place where you will find not only recipes, but also useful tips, cooking techniques and inspiration for creativity in the kitchen.
                </p>
                <p>    Our goal is to share our passion for cooking and help you achieve great results.
                Join our community and let's discover new flavors, create unforgettable dishes and share the joy of cooking together. Welcome to our resource where delicious recipes await you!
                </p>
            </div>
            <div className="row row-images">
                <img src={img1} />
                <img src={img2} />
                <img src={img4} />
            </div>
        </>
    );
}

export { About };