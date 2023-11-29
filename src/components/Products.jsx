import React from 'react';
export const products = [
    {
        id: 1,
        title: 'Alice Adventures in Wonderland',
        author: 'Lewis Carol',
        img: 'assets/img/products/lewis-carrol-through-the-looking-glass.webp',
        category: 'adventures',
        language: 'english',
        price: 18.99,
        availability: 'comming-soon',
        onSale: false,
        rating: 4,
        ageRange: 'middle-grade',
    },
    {
        id: 2,
        title: 'Paddington at the zoo',
        author: 'Michael Bond',
        img: 'assets/img/products/michael-bond-paddington-at-the-zoo.webp',
        category: 'classic',
        language: 'english',
        price: 12.99,
        availability: 'in-stock',
        onSale: false,
        rating: 5,
        ageRange: 'early-reader',
    },
    {
        id: 3,
        title: 'Through the looking glass',
        author: 'Lewis Carol',
        img: 'assets/img/products/lewis-carrol-through-the-looking-glass.webp',
        category: 'adventures',
        language: 'english',
        price: 16.99,
        availability: 'comming-soon',
        onSale: false,
        rating: 4,
        ageRange: 'middle-grade',
    },
    {
        id: 4,
        title: 'Charles Darwin',
        author: 'Maria Vegara',
        img: 'assets/img/products/little-people-big-dreams-charles-darwin.webp',
        category: 'biographies',
        language: 'english',
        price: 13.99,
        availability: 'in-stock',
        onSale: true,
        rating: 4,
        ageRange: 'middle-grade',
    },
    {
        id: 5,
        title: 'Paddington at the Palace',
        author: 'Michael Bond',
        img: 'assets/img/products/michael-bond-paddington.webp',
        category: 'classic',
        language: 'english',
        price: 9.99,
        availability: 'in-stock',
        onSale: false,
        rating: 4,
        ageRange: 'early-reader',
    },
    {
        id: 6,
        title: 'Matilda',
        author: 'Roald Dahl',
        img: 'assets/img/products/roald-dahl-matilda.webp',
        category: 'classic',
        language: 'english',
        price: 11.99,
        availability: 'in-stock',
        onSale: false,
        rating: 1,
        ageRange: 'early-reader',
    },
    {
        id: 7,
        title: 'Valse mélancolique. Вибрані твори',
        author: 'Ольга Кобилянська',
        img: 'assets/img/products/olha-kobylianska-valse-melancolique.jpg',
        category: 'classic',
        language: 'ukrainian',
        price: 11.99,
        availability: 'in-stock',
        onSale: false,
        rating: 5,
        ageRange: 'adult',
    },
    {
        id: 8,
        title: 'Я (Романтика)',
        author: 'Микола Хвильовий',
        img: 'assets/img/products/mykola-hvyliovyi-ya-romantyka.jpg',
        category: 'classic',
        language: 'ukrainian',
        price: 11.99,
        availability: 'in-stock',
        onSale: false,
        rating: 5,
        ageRange: 'adult',
    },
    {
        id: 9,
        title: 'Місто',
        author: 'Валерʼян Підмогильний',
        img: 'assets/img/products/valerian-pidmohylnyi-misto.jpg',
        category: 'classic',
        language: 'ukrainian',
        price: 11.99,
        availability: 'in-stock',
        onSale: false,
        rating: 5,
        ageRange: 'adult',
    },
    {
        id: 10,
        title: 'Танець недоумка',
        author: 'Ілларіон Павлюк',
        img: 'assets/img/products/illarion-pavliuk-tanec-nedoumka.jpg',
        category: 'sci-fi',
        language: 'ukrainian',
        price: 14.99,
        availability: 'in-stock',
        onSale: false,
        rating: 6,
        ageRange: 'adult',
    },
    {
        id: 11,
        title: 'Дім Солі',
        author: 'Світлана Тараторіна',
        img: 'assets/img/products/svitlana-taratorina-dim-soli.jpg',
        category: 'sci-fi',
        language: 'ukrainian',
        price: 13.99,
        availability: 'in-stock',
        onSale: true,
        rating: 5,
        ageRange: 'adult',
    },
    {
        id: 12,
        title: 'Shadow and Bone',
        author: 'Leigh Bardugo',
        img: 'assets/img/products/leigh-bardugo-shadow-and-bone.jpg',
        category: 'fantasy',
        language: 'dutch',
        price: 16.99,
        availability: 'in-stock',
        onSale: false,
        rating: 5,
        ageRange: 'young-adult',
    },
    {
        id: 13,
        title: 'Kraai & Koninkrijk',
        author: 'Leigh Bardugo',
        img: 'assets/img/products/leigh-bardugo-kraai-en-koninkrijk.jpg',
        category: 'fantasy',
        language: 'dutch',
        price: 14.99,
        availability: 'in-stock',
        onSale: false,
        rating: 5,
        ageRange: 'young-adult',
    },
    {
        id: 14,
        title: 'Im Westen nichts Neues',
        author: 'Erich Maria Remarque',
        img: 'assets/img/products/remarque-im-westen-nichts-neues.jpg',
        category: 'classic',
        language: 'german',
        price: 11.99,
        availability: 'in-stock',
        onSale: false,
        rating: 5,
        ageRange: 'adult',
    },
    {
        id: 15,
        title: 'Narziß und Goldmund',
        author: 'Hermann Hesse',
        img: 'assets/img/products/hermann-hesse-narziss-und-goldmund.jpg',
        category: 'classic',
        language: 'german',
        price: 9.99,
        availability: 'in-stock',
        onSale: false,
        rating: 5,
        ageRange: 'adult',
    },
    {
        id: 16,
        title: 'Sherlock Holmes: The Complete Novels and Stories, Volume I',
        author: 'Arthur Conan Doyle',
        img: 'assets/img/products/sherlock-holmes-the-complete-novels-and-stories.jpg',
        category: 'detective',
        language: 'english',
        price: 19.99,
        availability: 'in-stock',
        onSale: true,
        rating: 6,
        ageRange: 'adult',
    },
    {
        id: 17,
        title: 'Friends, Lovers, and the Big Terrible Thing',
        author: 'Matthew Perry',
        img: 'assets/img/products/matthew-perry-friends-lovers-and-the-big-terrible-thing.jpg',
        category: 'biographies',
        language: 'english',
        price: 19.99,
        availability: 'in-stock',
        onSale: false,
        rating: 5,
        ageRange: 'adult',
    },
];

export default function Products() {
    return (
        <div className="product-list__gallery row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {products.map((product) => (
                <article key={product.id} className="card bg-white">
                    <div className="card-body text-center d-flex flex-column">
                        <img
                            className="img-fluid"
                            src={product.img}
                            alt={product.title}
                        />
                        <hgroup className="py-2">
                            <h4 className="card-title">{product.title}</h4>
                            <p className="card-text">{product.author}</p>
                            <span className="card-text">
                                {product.price} &euro;
                            </span>
                        </hgroup>
                        <div className="d-grid gap-2 d-block justify-content-lg-center mt-auto pt-1">
                            <button
                                className="btn btn-read-more btn-primary me-md-2 w-100"
                                type="button"
                            >
                                Read more
                            </button>
                            <button
                                className="btn btn-add-to-cart btn-warning w-100"
                                type="button"
                                data-id="{product.id}"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}