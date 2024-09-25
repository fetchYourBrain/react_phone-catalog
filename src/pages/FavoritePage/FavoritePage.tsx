import { useEffect } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { useAppDispatch, useAppSelector } from "../../hooks/helperToolkit";
import { loadFavoritesFromStorage } from "../../slices/favoritesSlice";
import styles from "./FavoritePage.module.scss";
import { Card } from "../../components/Card/Card";
import noFavoriteItem from "../../../public/img/product-not-found.png";
import { useAuth } from "../../context/AuthContext";
import { CardSkeleton } from "../../components/CardSkeleton/CardSkeleton";

export const FavoritePage = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAuth();
  const favorites = useAppSelector((state) => state.favorites.items);

  useEffect(() => {
    dispatch(loadFavoritesFromStorage());
  }, [dispatch]);

  return (
    <>
      <Breadcrumbs />
      <div className={styles.block}>
        <div className={styles.top_block}>
          <h1 className={styles.title}>Favourites</h1>
          <p className={styles.amount_models}>{favorites.length} items</p>
        </div>
        <div className={styles.list}>
          {loading ? (
            favorites.map((_, index) => (
              <CardSkeleton key={index}/>
            ))
          ) : favorites.length > 0 ? (
            favorites.map((favorite) => (
              <Card
                key={favorite.id}
                name={favorite.name}
                image={favorite.image}
                capacity={favorite.capacity}
                price={favorite.price}
                fullPrice={favorite.fullPrice}
                screen={favorite.screen}
                ram={favorite.ram}
                itemId={favorite.itemId}
                hasDiscount={favorite.hasDiscount}
                category={favorite.category}
                id={favorite.id}
              />
            ))
          ) : (
            <div className={styles.noFavorites}>
              <img
                src={noFavoriteItem}
                alt="No favorites"
                className={styles.noFavoritesImage}
              />
              <p className={styles.noFavoritesText}>
                Empty favourites, empty paws. <br /> Help this cat find some
                joy!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
